const CACHE = "nec-pwa-v1";
const CORE = ["./", "./index.html", "./nec-manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png"];

self.addEventListener("install", (event) => {
    self.skipWaiting();
    event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(CORE)).catch(() => {}));
});

self.addEventListener("activate", (event) => {
    event.waitUntil(caches.keys()
        .then((keys) => Promise.all(keys.filter((key) => key.startsWith("nec-pwa-") && key !== CACHE).map((key) => caches.delete(key))))
        .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
    const request = event.request;
    const url = new URL(request.url);
    if (request.method !== "GET" || url.origin !== self.location.origin) return;
    event.respondWith(fetch(request).then((response) => {
        if (response.ok && response.type === "basic") {
            const copy = response.clone();
            event.waitUntil(caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {}));
        }
        return response;
    }).catch(() => caches.match(request).then((cached) => cached || (request.mode === "navigate" ? caches.match("./index.html") : Response.error()))));
});