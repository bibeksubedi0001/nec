// Offline copy control for NEC Civil: asks the service worker to save, update or remove a full offline copy of the site.
(function () {
    "use strict";

    const $ = (id) => document.getElementById(id);
    const opener = $("necOfflineOpen"), dialog = $("necOfflineDialog");
    if (!opener || !dialog) return;
    const version = document.currentScript ? new URL(document.currentScript.src).search : "";
    if (!("serviceWorker" in navigator) || !window.isSecureContext || !/^https?:$/.test(location.protocol)) return;
    const standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
    const PAUSED = "nec_offline_paused";
    // MathJax and the web fonts are not in the site file list; this is their approximate stored size.
    const EXTERNAL_BYTES = 2600000;
    const saveIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M12 3v12m-4-4 4 4 4-4" /></svg>';
    let state = { state: "checking" };
    let syncing = false, stopping = false;

    async function worker() {
        const registration = await Promise.race([navigator.serviceWorker.ready, new Promise((resolve) => setTimeout(resolve, 20000))]);
        if (!registration) throw new Error("Offline storage is not available yet. Reload the page while online.");
        let active = registration.active;
        if (active && new URL(active.scriptURL).search !== version) {
            await new Promise((resolve) => { navigator.serviceWorker.addEventListener("controllerchange", resolve, { once: true }); setTimeout(resolve, 20000); });
            active = (await navigator.serviceWorker.getRegistration())?.active;
        }
        if (!active || new URL(active.scriptURL).search !== version) throw new Error("An app update is waiting. Reload the page while online.");
        return active;
    }

    async function send(type) {
        const active = await worker();
        return new Promise((resolve, reject) => {
            const channel = new MessageChannel();
            let timer;
            const arm = () => {
                clearTimeout(timer);
                timer = setTimeout(() => { channel.port1.close(); reject(new Error("Offline storage stopped responding. Try again.")); }, 60000);
            };
            channel.port1.onmessage = (event) => {
                const value = event.data || {};
                arm();
                if (!value.final) { show(value); return; }
                clearTimeout(timer);
                channel.port1.close();
                resolve(value);
            };
            arm();
            active.postMessage({ type }, [channel.port2]);
        });
    }

    function show(value) {
        state = value;
        const done = value.done || 0, total = value.total || 0, online = navigator.onLine;
        const percent = total ? Math.floor(done / total * 100) : 0;
        const updated = value.updatedAt ? new Date(value.updatedAt).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }) : "";
        opener.dataset.state = value.state;
        opener.querySelector(".nec-offline-icon").innerHTML = value.state === "ready" && window.CEE_UI_ICONS ? window.CEE_UI_ICONS.svg("check") : saveIcon;
        $("necOfflineLabel").textContent = { empty: "Save offline", downloading: `Saving ${percent}%`, partial: "Finish offline save",
            outdated: "Update offline copy", ready: online ? "Offline ready" : "Working offline" }[value.state] || "Offline";
        $("necOfflineStatus").textContent = value.error || {
            checking: "Checking offline storage…",
            empty: "Not saved on this device yet.",
            downloading: `Saving for offline use: ${done.toLocaleString("en-US")} of ${total.toLocaleString("en-US")} files.`,
            partial: `${done.toLocaleString("en-US")} of ${total.toLocaleString("en-US")} files saved. ${online ? "Resume to finish." : "Reconnect to the internet to finish."}`,
            outdated: "A newer version is out. Updating downloads only the files that changed.",
            ready: `Everything is saved on this device${updated ? " (updated " + updated + ")" : ""}. NEC Civil works without internet.`
        }[value.state] || "Offline storage is unavailable.";
        $("necOfflineConnection").textContent = online ? "Online" : "Offline";
        if (value.bytes) $("necOfflineSize").textContent = "About " + Math.round((value.bytes + EXTERNAL_BYTES) / 1e6) + " MB";
        const progress = $("necOfflineProgress");
        progress.hidden = !total || !["downloading", "partial"].includes(value.state);
        progress.max = total || 1;
        progress.value = done;
        const primary = $("necOfflineSave");
        primary.hidden = value.state === "ready";
        primary.textContent = { downloading: "Stop", partial: "Resume", outdated: "Update now" }[value.state] || "Save for offline";
        primary.disabled = ["checking", "unavailable"].includes(value.state) || value.state !== "downloading" && !online;
        $("necOfflineRemove").hidden = !["ready", "partial", "outdated"].includes(value.state) || value.state === "partial" && syncing;
    }

    async function save() {
        if (syncing) return;
        syncing = true;
        stopping = false;
        try { localStorage.removeItem(PAUSED); } catch { /* storage blocked */ }
        if (navigator.storage?.persist) navigator.storage.persist().catch(() => {});
        try {
            let value;
            do { value = await send("NEC_OFFLINE_SYNC"); show(value); } while (value.state === "downloading" && !stopping && navigator.onLine);
            if (value.state === "downloading") show({ ...value, state: "partial" });
        } catch (error) { show({ ...state, state: "partial", error: error.message }); }
        finally { syncing = false; show(state); }
    }

    async function stop() {
        stopping = true;
        try { localStorage.setItem(PAUSED, "1"); } catch { /* storage blocked */ }
        try { show(await send("NEC_OFFLINE_CANCEL")); } catch (error) { show({ ...state, state: "partial", error: error.message }); }
    }

    async function remove() {
        stopping = true;
        try { localStorage.setItem(PAUSED, "1"); } catch { /* storage blocked */ }
        try { show(await send("NEC_OFFLINE_CLEAR")); } catch (error) { show({ ...state, error: error.message }); }
    }

    async function refresh() {
        if (syncing) return;
        let paused = false;
        try { paused = localStorage.getItem(PAUSED) === "1"; } catch { /* storage blocked */ }
        try {
            const value = await send("NEC_OFFLINE_STATUS");
            show(value);
            // Keep an existing copy current, finish an interrupted save, and save everything for an installed app.
            if (navigator.onLine && !paused && (value.state === "outdated" || value.state === "partial" || value.state === "empty" && standalone)) save();
        } catch (error) { show({ state: "unavailable", error: error.message }); }
    }

    opener.hidden = false;
    opener.addEventListener("click", () => { dialog.showModal(); refresh(); });
    $("necOfflineClose").addEventListener("click", () => dialog.close());
    $("necOfflineSave").addEventListener("click", () => state.state === "downloading" ? stop() : save());
    $("necOfflineRemove").addEventListener("click", remove);
    addEventListener("online", refresh);
    addEventListener("offline", () => show(state));
    navigator.serviceWorker.addEventListener("controllerchange", refresh);
    show(state);
    refresh();
})();
