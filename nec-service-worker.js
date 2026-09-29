// NEC Civil service worker. Versioned by ?v=; on request it keeps a hash-verified offline copy of every published file,
// MathJax and the web fonts, and updates that copy by downloading only the files that changed between versions.
importScripts("js/nec-offline-files.js" + self.location.search);

const VERSION = new URL(self.location.href).searchParams.get("v") || "local";
const SCOPE = new URL(self.registration.scope);
const OFFLINE = "nec-offline-" + VERSION;
const RUNTIME = "nec-runtime-" + VERSION;
const RECORD = new URL("nec-offline-record", SCOPE).href;
const INDEX = new URL("index.html", SCOPE).href;
const LIST = self.NEC_OFFLINE_FILES && String(self.NEC_OFFLINE_FILES.version) === VERSION ? self.NEC_OFFLINE_FILES : null;
const TYPES = { html: /text\/html/i, js: /javascript|ecmascript/i, css: /text\/css/i, json: /json/i, webmanifest: /json/i,
    svg: /image\/svg\+xml/i, png: /image\/png/i, pdf: /application\/pdf/i, woff2: /font|woff|octet-stream/i };
const BATCH_MS = 25000;
let batch = null;
let cancelled = false;

const plain = (value) => { const url = new URL(value); url.search = ""; url.hash = ""; return url.href; };
const extension = (url) => url.hostname === "fonts.googleapis.com" ? "css" : url.pathname.endsWith("/") ? "html" : url.pathname.split(".").pop().toLowerCase();

function allowed(url) {
    if (url.origin === SCOPE.origin) return url.pathname.startsWith(SCOPE.pathname);
    return url.protocol === "https:" && (url.hostname === "cdn.jsdelivr.net" && url.pathname.startsWith("/npm/mathjax@3")
        || url.hostname === "fonts.googleapis.com" && url.pathname === "/css2"
        || url.hostname === "fonts.gstatic.com" && url.pathname.startsWith("/s/"));
}

function valid(response, url) {
    if (!response || !response.ok || response.type === "opaque" || response.type === "opaqueredirect") return false;
    const expected = TYPES[extension(url)];
    return !expected || expected.test(response.headers.get("Content-Type") || "");
}

async function match(key, names, options = {}) {
    for (const cacheName of names) {
        const hit = await caches.match(key, { ...options, cacheName, ignoreVary: true });
        if (hit) return hit;
    }
}

// Last resort while offline: copies kept from earlier versions, newest first.
async function older(url) {
    const names = (await caches.keys()).filter((name) => /^nec-(?:offline|runtime)-/.test(name) && name !== OFFLINE && name !== RUNTIME).reverse();
    return url.origin === SCOPE.origin ? match(plain(url.href), names, { ignoreSearch: true }) : match(url.href, names);
}

async function put(name, key, response) {
    try { await (await caches.open(name)).put(key, response); } catch { /* storage full or response not storable */ }
}

function network(request, timeout) {
    // The page itself is revalidated so a new release is used without waiting for the HTTP cache to expire.
    const response = fetch(request.url, { cache: "no-cache", credentials: "same-origin", redirect: "manual" });
    return timeout ? Promise.race([response, new Promise((resolve, reject) => setTimeout(() => reject(new Error("Network timeout")), timeout))]) : response;
}

async function page(event, request) {
    const fallback = await match(INDEX, [OFFLINE, RUNTIME]) || await older(new URL(INDEX));
    try {
        const response = await network(request, fallback ? 6000 : 0);
        if (response.ok && !(await caches.match(INDEX, { cacheName: OFFLINE }))) event.waitUntil(put(RUNTIME, INDEX, response.clone()));
        return response.ok || !fallback ? response : fallback;
    } catch {
        return fallback || Response.error();
    }
}

async function asset(event, request, url) {
    const same = url.origin === SCOPE.origin;
    const version = same ? url.searchParams.get("v") : null;
    const current = !version || version === VERSION;
    if (current) {
        const hit = await match(request, [OFFLINE, RUNTIME]) || (same ? await match(plain(url.href), [OFFLINE, RUNTIME]) : undefined);
        if (hit) return hit;
    }
    try {
        const response = same ? await fetch(request) : await fetch(url.href, { mode: "cors", credentials: "omit" });
        if (current && valid(response, url)) event.waitUntil(put(RUNTIME, same ? request.url : url.href, response.clone()));
        return response;
    } catch {
        return await older(url) || await match(same ? plain(url.href) : url.href, [OFFLINE, RUNTIME], { ignoreSearch: same }) || Response.error();
    }
}

self.addEventListener("install", (event) => {
    self.skipWaiting();
    event.waitUntil(caches.open(RUNTIME).then((cache) => cache.add(INDEX)).catch(() => {}));
});

self.addEventListener("activate", (event) => {
    event.waitUntil((async () => {
        for (const name of await caches.keys()) {
            if (name === "nec-pwa-v1" || name.startsWith("nec-runtime-") && name !== RUNTIME) await caches.delete(name);
        }
        await self.clients.claim();
    })());
});

self.addEventListener("fetch", (event) => {
    const request = event.request;
    const url = new URL(request.url);
    if (request.method !== "GET" || !allowed(url)) return;
    const shell = url.origin === SCOPE.origin && (url.pathname === SCOPE.pathname || url.pathname === SCOPE.pathname + "index.html");
    event.respondWith(request.mode === "navigate" && shell ? page(event, request) : asset(event, request, url));
});

async function readRecord(cacheName) {
    const response = await caches.match(RECORD, { cacheName });
    return response ? response.json() : null;
}

function writeRecord(cache, record) {
    return cache.put(RECORD, new Response(JSON.stringify(record), { headers: { "Content-Type": "application/json" } }));
}

async function fontFiles() {
    const sheet = LIST.external.find((value) => new URL(value).hostname === "fonts.googleapis.com");
    const response = sheet && await caches.match(sheet, { cacheName: OFFLINE });
    return response ? [...new Set([...(await response.text()).matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)'"\s]+)\)/g)].map((found) => found[1]))] : [];
}

// External files come first so the font list is known early; index.html comes last so an unfinished update keeps
// serving the previous complete version.
async function inventory() {
    const files = Object.entries(LIST.files).map(([path, hash]) => ({ key: new URL(path, SCOPE).href, path, hash }))
        .sort((left, right) => (left.path === "index.html") - (right.path === "index.html"));
    return [...[...LIST.external, ...await fontFiles()].map((key) => ({ key })), ...files];
}

async function earlierCopies() {
    const copies = [];
    for (const name of (await caches.keys()).filter((value) => value.startsWith("nec-offline-") && value !== OFFLINE).reverse()) {
        const record = await readRecord(name);
        if (record?.files) copies.push({ name, files: record.files });
    }
    return copies;
}

async function digest(buffer) {
    return [...new Uint8Array(await crypto.subtle.digest("SHA-256", buffer))].map((byte) => byte.toString(16).padStart(2, "0")).join("").slice(0, 16);
}

const reason = (error) => error.name === "QuotaExceededError" ? "Not enough storage on this device. Free some space and try again." : error.message;

async function save(cache, item, copies) {
    for (const copy of copies) {
        if (item.path && copy.files[item.path] !== item.hash) continue;
        const kept = await caches.match(item.key, { cacheName: copy.name, ignoreVary: true });
        if (kept) { await cache.put(item.key, kept); return; }
    }
    const url = new URL(item.key);
    const response = item.path ? await fetch(item.key + "?v=" + VERSION, { cache: "no-cache" })
        : await fetch(item.key, { mode: "cors", credentials: "omit", cache: "no-cache" });
    if (!valid(response, url)) throw new Error("Could not download " + (item.path || url.hostname + url.pathname) + ".");
    if (!item.path) { await cache.put(item.key, response); return; }
    const body = await response.arrayBuffer();
    if (await digest(body) !== item.hash) throw new Error(item.path + " changed during the download. Try again in a minute.");
    await cache.put(item.key, new Response(body, { status: 200, statusText: "OK", headers: { "Content-Type": response.headers.get("Content-Type") || "application/octet-stream" } }));
}

async function status() {
    if (!LIST) return { state: "unavailable", error: "This version cannot be saved offline. Reload the page while online." };
    const record = await readRecord(OFFLINE);
    const items = await inventory();
    const stored = record ? new Set((await (await caches.open(OFFLINE)).keys()).map((request) => request.url)) : new Set();
    const done = items.filter((item) => stored.has(item.key)).length;
    const summary = { version: VERSION, done, total: items.length, bytes: LIST.bytes, updatedAt: record?.updatedAt || null };
    if (batch) return { ...summary, state: "downloading" };
    if (record?.complete && done === items.length) return { ...summary, state: "ready" };
    if (record) return { ...summary, state: "partial" };
    return { ...summary, state: (await earlierCopies()).length ? "outdated" : "empty" };
}

// One bounded batch per message keeps each event short; the page sends the next batch until the copy is complete.
async function sync(port) {
    if (!LIST) throw new Error("This version cannot be saved offline. Reload the page while online.");
    if (batch) return status();
    cancelled = false;
    batch = (async () => {
        const started = Date.now();
        const cache = await caches.open(OFFLINE);
        const record = await readRecord(OFFLINE) || { version: VERSION, files: LIST.files, complete: false, updatedAt: null };
        await writeRecord(cache, record);
        const copies = await earlierCopies();
        const stored = new Set((await cache.keys()).map((request) => request.url));
        const items = await inventory();
        const queue = items.filter((item) => !stored.has(item.key) && item.path !== "index.html");
        let done = items.length - queue.length - (stored.has(INDEX) ? 0 : 1), cursor = 0, failure = null;
        const report = () => port.postMessage({ state: "downloading", done, total: items.length, bytes: LIST.bytes });
        report();
        await Promise.all(Array.from({ length: 6 }, async () => {
            while (cursor < queue.length && !cancelled && Date.now() - started < BATCH_MS) {
                const item = queue[cursor++];
                try { await save(cache, item, copies); done++; report(); } catch (error) { failure = failure || error; }
            }
        }));
        const stock = async () => { const kept = new Set((await cache.keys()).map((request) => request.url)); return (await inventory()).map((item) => ({ ...item, kept: kept.has(item.key) })); };
        let full = await stock();
        const pending = full.filter((item) => !item.kept);
        if (pending.length === 1 && pending[0].path === "index.html" && !failure && !cancelled && Date.now() - started < BATCH_MS) {
            try { await save(cache, pending[0], copies); } catch (error) { failure = error; }
            full = await stock();
        }
        const missing = full.filter((item) => !item.kept).length;
        const summary = { version: VERSION, done: full.length - missing, total: full.length, bytes: LIST.bytes };
        if (!missing) {
            record.complete = true;
            record.updatedAt = new Date().toISOString();
            await writeRecord(cache, record);
            for (const name of await caches.keys()) if (name === "nec-pwa-v1" || name.startsWith("nec-offline-") && name !== OFFLINE) await caches.delete(name);
            return { ...summary, state: "ready", updatedAt: record.updatedAt };
        }
        if (cancelled) return { ...summary, state: "partial" };
        if (failure && Date.now() - started < BATCH_MS) return { ...summary, state: "partial", error: reason(failure) };
        return { ...summary, state: "downloading" };
    })();
    try { return await batch; } finally { batch = null; }
}

async function clear() {
    for (const name of await caches.keys()) if (name.startsWith("nec-offline-")) await caches.delete(name);
}

self.addEventListener("message", (event) => {
    const port = event.ports[0];
    if (!port || !event.source?.url?.startsWith(SCOPE.href)) return;
    const type = event.data?.type;
    event.waitUntil((async () => {
        try {
            if (type === "NEC_OFFLINE_SYNC") port.postMessage({ ...(await sync(port)), final: true });
            else if (type === "NEC_OFFLINE_CANCEL" || type === "NEC_OFFLINE_CLEAR") {
                cancelled = true;
                await batch?.catch(() => {});
                if (type === "NEC_OFFLINE_CLEAR") await clear();
                port.postMessage({ ...(await status()), final: true });
            } else port.postMessage({ ...(await status()), final: true });
        } catch (error) {
            port.postMessage({ state: "partial", final: true, error: reason(error) });
        }
    })());
});