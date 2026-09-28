(function () {
    "use strict";

    const FILES = Object.freeze({
        "chapter-01-materials.js": ["ACiE0101", "ACiE0102"],
        "chapter-01-building.js": ["ACiE0103", "ACiE0104"],
        "chapter-01-surveying.js": ["ACiE0105", "ACiE0106"],
        "chapter-02-properties.js": ["ACiE0201", "ACiE0202"],
        "chapter-02-strength.js": ["ACiE0203", "ACiE0204"],
        "chapter-02-foundations.js": ["ACiE0205", "ACiE0206"],
        "chapter-03-fluids.js": ["ACiE0301", "ACiE0302"],
        "chapter-03-flow.js": ["ACiE0303", "ACiE0304"],
        "chapter-03-channels.js": ["ACiE0305"],
        "chapter-03-hydrology.js": ["ACiE0306"],
        "chapter-04-forces.js": ["ACiE0401"],
        "chapter-04-stress.js": ["ACiE0402"],
        "chapter-04-flexure.js": ["ACiE0403"],
        "chapter-04-determinate.js": ["ACiE0404", "ACiE0405"],
        "chapter-04-indeterminate.js": ["ACiE0406"],
        "chapter-05-loads.js": ["ACiE0501"],
        "chapter-05-concrete.js": ["ACiE0502"],
        "chapter-05-rcc-beams.js": ["ACiE0503"],
        "chapter-05-rcc-columns.js": ["ACiE0504"],
        "chapter-05-steel.js": ["ACiE0505"],
        "chapter-05-timber-masonry.js": ["ACiE0506"],
        "chapter-06-sources.js": ["ACiE0601"],
        "chapter-06-distribution.js": ["ACiE0602"],
        "chapter-06-treatment.js": ["ACiE0603"],
        "chapter-06-sewers.js": ["ACiE0604"],
        "chapter-06-wastewater.js": ["ACiE0605"],
        "chapter-06-environment.js": ["ACiE0606"],
        "chapter-07-demand.js": ["ACiE0701"],
        "chapter-07-canals.js": ["ACiE0702"],
        "chapter-07-headworks.js": ["ACiE0703"],
        "chapter-07-river-training.js": ["ACiE0704"],
        "chapter-07-structures.js": ["ACiE0705"],
        "chapter-07-drainage.js": ["ACiE0706"],
        "chapter-08-planning.js": ["ACiE0801"],
        "chapter-08-power-energy.js": ["ACiE0802"],
        "chapter-08-storage-headworks.js": ["ACiE0803"],
        "chapter-08-ror-headworks.js": ["ACiE0804"],
        "chapter-08-conveyance.js": ["ACiE0805"],
        "chapter-08-machines.js": ["ACiE0806"],
        "chapter-09-planning.js": ["ACiE0901"],
        "chapter-09-geometry.js": ["ACiE0902"],
        "chapter-09-materials.js": ["ACiE0903"],
        "chapter-09-traffic.js": ["ACiE0904"],
        "chapter-09-pavement.js": ["ACiE0905"],
        "chapter-09-construction.js": ["ACiE0906"],
        "chapter-10-drawings.js": ["AALL1001"],
        "chapter-10-economics.js": ["AALL1002"],
        "chapter-10-scheduling.js": ["AALL1003"],
        "chapter-10-management.js": ["AALL1004"],
        "chapter-10-professional.js": ["AALL1005"],
        "chapter-10-regulatory.js": ["AALL1006"]
    });
    const CHAPTER_FILES = Object.freeze({
        "basic-civil-engineering": ["chapter-01-materials.js", "chapter-01-building.js", "chapter-01-surveying.js"],
        "soil-mechanics-and-foundation": ["chapter-02-properties.js", "chapter-02-strength.js", "chapter-02-foundations.js"],
        "basic-water-resources-engineering": ["chapter-03-fluids.js", "chapter-03-flow.js", "chapter-03-channels.js", "chapter-03-hydrology.js"],
        "structural-mechanics": ["chapter-04-forces.js", "chapter-04-stress.js", "chapter-04-flexure.js", "chapter-04-determinate.js", "chapter-04-indeterminate.js"],
        "design-of-structures": ["chapter-05-loads.js", "chapter-05-concrete.js", "chapter-05-rcc-beams.js", "chapter-05-rcc-columns.js", "chapter-05-steel.js", "chapter-05-timber-masonry.js"],
        "water-supply-sanitation-and-environment": ["chapter-06-sources.js", "chapter-06-distribution.js", "chapter-06-treatment.js", "chapter-06-sewers.js", "chapter-06-wastewater.js", "chapter-06-environment.js"],
        "irrigation-and-drainage": ["chapter-07-demand.js", "chapter-07-canals.js", "chapter-07-headworks.js", "chapter-07-river-training.js", "chapter-07-structures.js", "chapter-07-drainage.js"],
        "hydropower": ["chapter-08-planning.js", "chapter-08-power-energy.js", "chapter-08-storage-headworks.js", "chapter-08-ror-headworks.js", "chapter-08-conveyance.js", "chapter-08-machines.js"],
        "transportation": ["chapter-09-planning.js", "chapter-09-geometry.js", "chapter-09-materials.js", "chapter-09-traffic.js", "chapter-09-pavement.js", "chapter-09-construction.js"],
        "project-planning-design-and-implementation": ["chapter-10-drawings.js", "chapter-10-economics.js", "chapter-10-scheduling.js", "chapter-10-management.js", "chapter-10-professional.js", "chapter-10-regulatory.js"]
    });
    const CODES = Object.freeze(Object.values(FILES).flat());
    const CAPSULE_FILES = Object.freeze(Object.fromEntries(Object.keys(CHAPTER_FILES).map((id, index) => [id, `chapter-${String(index + 1).padStart(2, "0")}.js`])));
    const RURAL = Object.freeze({ code: "additional-capsule-rural", number: "R", name: "Civil and rural engineering", chapterId: "project-planning-design-and-implementation",
        detail: "Rural-engineering capsule points outside the listed civil syllabus subchapters." });
    const LIBRARIES = Object.freeze({ model: { label: "Model-paper notes", questions: 3300, store: "CIVIL_NOTE_TOPICS", source: "model" },
        capsule: { label: "Capsule notes", questions: 1477, store: "CIVIL_CAPSULE_NOTE_TOPICS", source: "capsule" },
        past: { label: "Past-paper notes", questions: 1227, store: "CIVIL_PAST_NOTE_TOPICS", source: "past" } });
    const NOUNS = Object.freeze({ model: "source", capsule: "capsule", past: "past-paper" });
    const isPast = (source) => /^PAST-/.test(source.id);
    const hasChapter = (id) => Object.hasOwn(CHAPTER_FILES, id);
    const TEX = ' data-cn-math="tex"';
    const chapterCodes = (id) => hasChapter(id) ? CHAPTER_FILES[id].flatMap((file) => FILES[file]) : [];
    const script = document.currentScript;
    const base = script ? new URL("civil-notes/", script.src).href : "js/civil-notes/";
    const capsuleBase = script ? new URL("civil-capsule-notes/", script.src).href : "js/civil-capsule-notes/";
    const pastBase = script ? new URL("civil-past-notes/", script.src).href : "js/civil-past-notes/";
    const version = script ? new URL(script.src).search : "";
    const hasTopic = (code) => CODES.includes(code);
    const text = (value) => String(value || "").replace(/<[^>]*>/g, " ").replace(/&(?:amp|nbsp|lt|gt|quot);/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
    const sourcesOf = (topic) => [...new Map([...topic.blocks, ...topic.cautions].flatMap((block) => block.sources).map((source) => [source.id, source])).values()];
    const checkId = (item, index) => item.id || "caution-" + index;
    const sourceName = (source) => source.label ? (isPast(source) ? "Past paper " : "Capsule ") + source.label : `Model ${source.set} · Q${source.question}`;
    const checkTitle = (item) => item.sources.length ? sourceName(item.sources[0]) : "Reference check";
    const checkLabels = Object.freeze({ corrected: "Corrected", clarification: "Concept clarification", context: "Design and reference context", notation: "Units and notation", assumptions: "Missing assumptions", ambiguity: "Ambiguous question", "answer-review": "Answer needs review", scope: "Scope note", review: "Review note" });
    const checkKind = (item) => item.status === "corrected" ? "corrected" : !item.sources.length ? "scope" : Object.hasOwn(checkLabels, item.issue) ? item.issue : "review";
    const blockExtras = (block) => [...(block.formulas || []).map((formula) => formula.label + " " + formula.tex + " " + (formula.where || "")),
        block.example ? (block.example.title || "") + " " + block.example.html : "", ...(block.points || []).map((point) => point.html)].join(" ");
    const sheetText = (sheet) => sheet.map((entry) => entry.label + " " + entry.tex + " " + (entry.note || "")).join(" ");

    // Decide whether an emphasised span reads as a formula/quantity (kept, styled .cn-f)
    // or a plain term/label (unwrapped). Prose sentences with two or more words are plain.
    function formulaLike(value, hasMathTag) {
        const t = (value || "").trim();
        if (!t) return false;
        if (/[=\u00d7\u00f7\u221a\u222b\u2211\u220f\u222e\u2248\u2264\u2265\u2260\u2245\u2261\u221d\u00b7\u22c5\u2202\u2207]/.test(t)) return true;
        if ((t.match(/[A-Za-z]{3,}/g) || []).length >= 2) return false;
        if (/[\u2212+\u00b1\u2213\u2192\u2206\u00b0]/.test(t)) return true;
        if (/[\u0370-\u03ff]/.test(t)) return true;
        if (hasMathTag && t.length <= 40) return true;
        if (/\d/.test(t) && /[/^]/.test(t) && t.length <= 24) return true;
        if (/^[A-Za-z][A-Za-z0-9]?\s*\/\s*[A-Za-z]/.test(t) && t.length <= 24) return true;
        return false;
    }

    function styleEmphasis(root) {
        root.querySelectorAll("strong, b").forEach((el) => {
            if (!el.parentNode) return;
            if (formulaLike(el.textContent, !!el.querySelector("sub, sup, .cn-fraction, mjx-container"))) {
                const span = document.createElement("span");
                span.className = "cn-f";
                while (el.firstChild) span.appendChild(el.firstChild);
                el.replaceWith(span);
            } else {
                const parent = el.parentNode;
                while (el.firstChild) parent.insertBefore(el.firstChild, el);
                parent.removeChild(el);
            }
        });
    }

    function search(topics, query) {
        const terms = text(query).split(" ").filter(Boolean);
        if (!terms.length) return [];
        return topics.flatMap((topic) => [
            ...topic.blocks.map((block) => ({ ...block, code: topic.code, kind: "note" })),
            ...topic.cautions.map((item, index) => ({ ...item, id: checkId(item, index), title: checkTitle(item), code: topic.code, kind: "caution" })),
            ...(topic.formulaSheet ? [Array.isArray(topic.formulaSheet)
                ? { id: "formulas", title: "Formula sheet", html: "", sheet: topic.formulaSheet, sources: [], code: topic.code, kind: "revision" }
                : { id: "formulas", title: "Formula sheet", html: topic.formulaSheet, sources: [], code: topic.code, kind: "revision" }] : []),
            ...(topic.recall || []).map((item) => ({ ...item, title: "Recall", sources: [], code: topic.code, kind: "recall" }))
        ]).filter((block) => {
            const content = text(block.title + " " + (block.prompt || "") + " " + block.html + " " + (block.moreHtml || "") + " " + blockExtras(block) + " " + (block.sheet ? sheetText(block.sheet) : "") + " " + block.code + " " + block.sources.map((source) => source.id).join(" "));
            return terms.every((term) => content.includes(term));
        });
    }

    function create(deps) {
        const { $, esc, syllabus, entries, loadSet, typeset, isOpen, startTopic, recordAnswer, progressOf, practiceIds } = deps;
        const chapters = syllabus.chapters.filter((item) => hasChapter(item.id));
        const chapterMap = new Map(chapters.map((chapter) => [chapter.id, chapter]));
        const topicMap = new Map(chapters.flatMap((chapter) => chapter.subchapters.map((topic) => [topic.code, { ...topic, chapterId: chapter.id }])));
        topicMap.set(RURAL.code, RURAL);
        const capsuleEntries = (window.CIVIL_CAPSULE_INDEX || []).map((meta) => ({ key: meta.key, meta }));
        const pastEntries = (window.CIVIL_PAST_INDEX || []).map((meta) => ({ key: meta.key, meta }));
        const entriesOf = (lib) => lib === "past" ? pastEntries : capsuleEntries;
        let library = "model";
        const registry = (lib = library) => window[LIBRARIES[lib].store] || {};
        const hasLibraryChapter = (id, lib = library) => lib === "model" ? hasChapter(id) : entriesOf(lib).length > 0 && Object.hasOwn(CAPSULE_FILES, id);
        const codesOf = (id, lib = library) => lib === "model" ? chapterCodes(id) : chapterMap.has(id) ? chapterMap.get(id).subchapters.map((topic) => topic.code).concat(lib === "capsule" && id === RURAL.chapterId ? [RURAL.code] : []) : [];
        const pending = new Map();
        const selections = new Map();
        const content = $("cvNotesContent"), dialog = $("cvNoteSourceDialog"), sourceBody = $("cvNoteSourceBody");
        const uiIcon = window.CEE_UI_ICONS.svg;
        let selectedChapterId = chapters[0].id, selectedCode = codesOf(selectedChapterId)[0];
        let query = "", serial = 0, sourceSerial = 0;
        // Formula recall hides formula bodies until each card is revealed; it persists across topics.
        let drill = false, sourceQuestion = null;
        const questionCache = new Map();

        function replace(node, html) {
            if (window.MathJax && window.MathJax.typesetClear) window.MathJax.typesetClear([node]);
            node.innerHTML = html;
            node.querySelectorAll(".cn-prose:not([data-cn-math])").forEach((prose) => {
                if (window.CIVIL_NOTE_MATH) prose.innerHTML = window.CIVIL_NOTE_MATH.format(prose.innerHTML, { stackUnits: true });
                styleEmphasis(prose);
            });
            node.querySelectorAll(".cn-figure img, .cn-figure-viewport img").forEach((image) => {
                image.addEventListener("error", () => {
                    if (!node.contains(image)) return;
                    const message = document.createElement("span");
                    message.className = "cn-image-failure";
                    message.textContent = "Image unavailable";
                    message.setAttribute("role", "status");
                    const enlarged = image.closest(".cn-figure-viewport");
                    image.replaceWith(message);
                    if (enlarged) {
                        sourceBody.querySelector("[data-cn-figure-zoom]").disabled = true;
                        sourceBody.querySelector("[data-cn-figure-retry]").hidden = false;
                    }
                }, { once: true });
            });
            typeset(node);
        }

        function selectTopic(code) {
            const topic = topicMap.get(code);
            if (topic && codesOf(topic.chapterId).includes(code)) {
                selectedChapterId = topic.chapterId; selectedCode = code; query = "";
                selections.set(library + ":" + selectedChapterId, code);
            }
        }

        function selectChapter(id) {
            if (chapterMap.has(id)) selectTopic(selections.get(library + ":" + id) || codesOf(id)[0]);
        }

        function selectLibrary(lib) {
            if (!Object.hasOwn(LIBRARIES, lib) || lib === library || !hasLibraryChapter(selectedChapterId, lib)) return false;
            library = lib;
            const remembered = selections.get(library + ":" + selectedChapterId);
            selectedCode = codesOf(selectedChapterId).includes(remembered) ? remembered : codesOf(selectedChapterId).includes(selectedCode) ? selectedCode : codesOf(selectedChapterId)[0];
            query = "";
            return true;
        }

        function suspend() {
            serial++; sourceSerial++;
            if (dialog.open) dialog.close();
        }

        function loadFile(file, codes, folder, store) {
            const ready = () => codes.every((code) => window[store] && window[store][code]);
            const key = folder + file;
            if (ready()) return Promise.resolve();
            if (pending.has(key)) return pending.get(key);
            const promise = new Promise((resolve, reject) => {
                const tag = document.createElement("script");
                const timeout = setTimeout(() => finish(new Error("Notes loading timed out. Please retry.")), 25000);
                function finish(error) {
                    clearTimeout(timeout); tag.onload = null; tag.onerror = null;
                    if (error) { tag.remove(); reject(error); } else resolve();
                }
                tag.src = folder + file + version;
                tag.onload = () => finish(ready() ? null : new Error("The notes file is incomplete. Please retry."));
                tag.onerror = () => finish(new Error("Notes could not be loaded. Check your connection and retry."));
                document.head.appendChild(tag);
            }).catch((error) => { pending.delete(key); throw error; });
            pending.set(key, promise);
            return promise;
        }

        async function loadNotes(chapterId, lib) {
            if (lib === "capsule") await Promise.all([loadFile(CAPSULE_FILES[chapterId], codesOf(chapterId, lib), capsuleBase, LIBRARIES.capsule.store),
                loadFile("figures.js", codesOf(chapterId, lib), capsuleBase, "CIVIL_CAPSULE_NOTE_FIGURES")]);
            else if (lib === "past") await Promise.all([loadFile(CAPSULE_FILES[chapterId], codesOf(chapterId, lib), pastBase, LIBRARIES.past.store),
                loadFile("figures.js", codesOf(chapterId, lib), pastBase, "CIVIL_PAST_NOTE_FIGURES")]);
            else await Promise.all(CHAPTER_FILES[chapterId].map((file) => loadFile(file, FILES[file], base, LIBRARIES.model.store)));
            for (const code of codesOf(chapterId, lib)) {
                const topic = registry(lib)[code];
                if (!topic || topic.code !== code || !Array.isArray(topic.blocks) || !topic.blocks.length
                    || !Array.isArray(topic.cautions) || !Array.isArray(topic.gaps)
                    || sourcesOf(topic).length !== topic.questionCount) throw new Error("The notes coverage could not be verified. Please reload the page.");
            }
        }

        function references(sources) {
            if (!sources.length) return "";
            return `<details class="cn-sources"><summary>Source questions (${sources.length})</summary><div class="cn-source-links">${sources.map((source) =>
                `<button type="button" data-cn-source="${esc(source.id)}" title="${esc(source.id)}" aria-label="Read ${esc(sourceName(source))}, ${esc(source.id)}">${esc(sourceName(source))}</button>`).join("")}</div></details>`;
        }

        function externalReferences(topic) {
            return (topic.references || []).length ? `<details class="cn-sources"><summary>Standards checked</summary><ul>${topic.references.filter((ref) => /^https:\/\//.test(ref.url)).map((ref) => `<li><a href="${esc(ref.url)}" target="_blank" rel="noopener noreferrer">${esc(ref.title)}</a></li>`).join("")}</ul></details>` : "";
        }

        function proseHtml(block, expand = false, tex = false) {
            const math = tex ? TEX : "";
            return `<div class="cn-prose"${math}>${block.html}</div>${block.moreHtml ? `<details class="cn-more"${expand ? " open" : ""}><summary>Further reasoning and context</summary><div class="cn-prose"${math}>${block.moreHtml}</div></details>` : ""}`;
        }

        function shortRef(source) {
            const match = /^(pp?\.) ([^;]+);(.*)$/.exec(source.label || "");
            if (!match) return source.label || source.id;
            const points = [...match[3].matchAll(/point (\d+)/g)].map((item) => item[1]);
            return `${match[1]} ${match[2].trim()}${points.length ? ` · ${points.length > 1 ? "pts" : "pt"} ${points.join(", ")}` : ""}`;
        }

        function pointsHtml(points, highlight) {
            if (!points?.length) return "";
            return `<section class="cn-keypoints"><h5>Key facts</h5><ul>${points.map((point) => `<li${highlight && point.sources.some((source) => source.id === highlight) ? ' class="is-highlighted"' : ""}><div class="cn-prose"${TEX}>${point.html}</div><span class="cn-point-refs">${point.sources.map((source) =>
                `<button type="button" class="cn-point-ref" data-cn-point-source="${esc(source.id)}" title="${esc(source.id)}" aria-label="Read ${isPast(source) ? "past-paper" : "capsule"} question ${esc(source.label)}, ${esc(source.id)}">${isPast(source) ? "" : "Capsule "}${esc(shortRef(source))}</button>`).join("")}</span></li>`).join("")}</ul></section>`;
        }

        const revealButton = '<button type="button" class="cn-reveal" data-cn-reveal aria-expanded="false">Show formula</button>';

        function formulasHtml(formulas) {
            if (!formulas?.length) return "";
            return `<div class="cn-formulas">${formulas.map((formula) => `<figure class="cn-formula"><figcaption>${esc(formula.label)}</figcaption><div class="cn-formula-tex">\\[${esc(formula.tex)}\\]</div>${formula.where ? `<div class="cn-prose cn-formula-where"${TEX}>${formula.where}</div>` : ""}${revealButton}</figure>`).join("")}</div>`;
        }

        function sheetHtml(sheet) {
            return `<div class="cn-sheet-grid">${sheet.map((entry) => `<div class="cn-sheet-item"><b>${esc(entry.label)}</b><div class="cn-formula-tex">\\[${esc(entry.tex)}\\]</div>${entry.note ? `<div class="cn-prose cn-sheet-note"${TEX}>${entry.note}</div>` : ""}${revealButton}</div>`).join("")}</div>`;
        }

        // Structured capsule sections; `tex` marks content written with TeX delimiters rather than plain-text fractions.
        function blockBodyHtml(block, tex, { expand = false, highlight = "", figures = "" } = {}) {
            if (!tex) return proseHtml(block, expand);
            return `<div class="cn-prose"${TEX}>${block.html}</div>${formulasHtml(block.formulas)}${figures}${block.example ? `<section class="cn-example"><h5>${esc(block.example.title || "Worked example")}</h5><div class="cn-prose"${TEX}>${block.example.html}</div></section>` : ""}${block.moreHtml ? `<details class="cn-more"${expand ? " open" : ""}><summary>Further reasoning and context</summary><div class="cn-prose"${TEX}>${block.moreHtml}</div></details>` : ""}${pointsHtml(block.points, highlight)}`;
        }

        function checkHtml(item, code, index, tex = false) {
            const source = item.sources[0];
            const corrected = item.status === "corrected";
            const kind = checkKind(item);
            return `<details class="cn-caution" id="cn-${code}-${checkId(item, index)}" data-cn-check="${source ? esc(source.id) : "reference"}" data-check-status="${corrected ? "corrected" : "review"}" data-check-kind="${kind}" tabindex="-1">
                <summary><span class="cn-check-label">${esc(checkTitle(item))}<span class="cn-check-status">${checkLabels[kind]}</span></span>${item.prompt ? `<span class="cn-check-prompt">${esc(item.prompt)}</span>` : ""}</summary>
                <div class="cn-check-content">${proseHtml(item, false, tex)}${source ? `<button type="button" class="cn-button cn-secondary" data-cn-source="${esc(source.id)}">Read this question ${uiIcon("arrow-up-right")}</button>` : ""}</div></details>`;
        }

        const figuresOf = (code, lib = library) => (lib === "model" ? window.CIVIL_NOTE_FIGURES?.topics[code] : lib === "past" ? window.CIVIL_PAST_NOTE_FIGURES?.[code] : window.CIVIL_CAPSULE_NOTE_FIGURES?.[code]) || [];

        function figuresHtml(code, blockId) {
            const html = figuresOf(code).filter((figure) => figure.block === blockId).map((figure) => `<figure class="cn-figure">
                <button type="button" class="cn-figure-open" data-cn-figure="${figure.id}" aria-label="Enlarge ${esc(figure.title)}" title="Enlarge diagram">
                    <img src="${figure.src + version}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async" alt="${esc(figure.caption)}" />
                    <span class="cn-figure-corner">${uiIcon("arrow-up-right")}</span>
                </button><figcaption><b>${esc(figure.title)}</b><span>${esc(figure.caption)}</span></figcaption></figure>`).join("");
            return library === "model" || !html ? html : `<div class="cn-figures">${html}</div>`;
        }

        function sourceDerivationsHtml(topic, id, explanation) {
            const blocks = topic.blocks.filter((block) => block.sources.some((source) => source.id === id));
            if (!blocks.length) return "";
            const tex = topic.format === 2;
            const figures = figuresOf(topic.code);
            return `<section class="cn-source-derivations"><h3>${tex ? "Related notes" : "Related derivations"}</h3>${blocks.map((block) => {
                const diagrams = figures.filter((figure) => figure.block === block.id && !explanation.includes(figure.src));
                return `<details class="cn-related-note" data-cn-related-note="${esc(block.id)}"><summary>${esc(block.title)}</summary>${blockBodyHtml(block, tex, { highlight: id })}${diagrams.map((figure) => `<figure class="cn-explanation-figure"><a href="${figure.src + version}" target="_blank" rel="noopener noreferrer" aria-label="Open ${esc(figure.title)}"><img src="${figure.src + version}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async" alt="${esc(figure.caption)}" /></a><figcaption>${esc(figure.title)}. ${esc(figure.caption)}</figcaption></figure>`).join("")}</details>`;
            }).join("")}</section>`;
        }

        function openFigure(id) {
            if (!isOpen()) return;
            const figure = codesOf(selectedChapterId).flatMap((code) => figuresOf(code)).find((item) => item.id === id);
            if (!figure) return;
            sourceSerial++;
            $("cvNoteSourceTitle").textContent = figure.title;
            dialog.classList.add("cn-image-dialog");
            replace(sourceBody, `<div class="cn-figure-toolbar"><button type="button" class="cn-figure-zoom" data-cn-figure-zoom aria-pressed="false" aria-label="Zoom diagram" title="Zoom diagram">${uiIcon("arrow-up-right")}</button>
                <button type="button" class="cn-button cn-secondary" data-cn-figure="${figure.id}" data-cn-figure-retry hidden>Retry image</button>
                <a href="${figure.src + version}" target="_blank" rel="noopener noreferrer">Open image ${uiIcon("arrow-up-right")}</a></div>
                <div class="cn-figure-viewport" tabindex="0" aria-label="${esc(figure.title)}"><img src="${figure.src + version}" width="${figure.width}" height="${figure.height}" alt="${esc(figure.caption)}" /></div>
                <p class="cn-figure-caption">${esc(figure.caption)}</p>`);
            if (!dialog.open) dialog.showModal();
            else dialog.querySelector("[data-cn-close]").focus({ preventScroll: true });
        }

        function revisionHtml(topic, code) {
            const sheet = Array.isArray(topic.formulaSheet)
                ? `<details class="cn-revision cn-sheet" id="cn-${code}-formulas" tabindex="-1"><summary>Formula sheet <span>${topic.formulaSheet.length} formulas</span></summary>${sheetHtml(topic.formulaSheet)}</details>`
                : topic.formulaSheet ? `<details class="cn-revision" id="cn-${code}-formulas" tabindex="-1"><summary>Formula sheet</summary><div class="cn-prose">${topic.formulaSheet}</div></details>` : "";
            return sheet +
                ((topic.recall || []).length ? `<section class="cn-revision" id="cn-${code}-recall" tabindex="-1"><h4>Recall</h4>${topic.recall.map((item) => `<details class="cn-recall-item" id="cn-${code}-${item.id}" tabindex="-1"><summary>${esc(item.prompt)}</summary><div class="cn-prose">${item.html}</div><a href="#cn-${code}-${item.block}" data-cn-jump="cn-${code}-${item.block}">Review concept ${uiIcon("arrow-up-right")}</a></details>`).join("")}</section>` : "");
        }

            function checkFilterHtml(topic) {
                if (!topic.cautions.some((item) => item.issue)) return "";
                const kinds = [...new Set(topic.cautions.map(checkKind))];
                return `<label class="cn-field cn-check-filter"><span>Check type</span><select id="cnCheckFilter"><option value="all">All checks (${topic.cautions.length})</option>${kinds.map((kind) => `<option value="${kind}">${checkLabels[kind]} (${topic.cautions.filter((item) => checkKind(item) === kind).length})</option>`).join("")}</select></label><span id="cnCheckCount" class="cn-count" role="status">${topic.cautions.length} checks</span>`;
            }

        // Section quizzes use the capsule MCQs cited by that section's key facts, in citation order.
        const quizIds = (block) => [...new Set([...(block.points || []).flatMap((point) => point.sources.map((source) => source.id)), ...block.sources.map((source) => source.id)])];

        function progressFor(ids) {
            const saved = progressOf ? progressOf(ids) : {};
            const correct = ids.filter((id) => saved[id]?.correct === true).length, wrongIds = ids.filter((id) => saved[id]?.correct === false);
            return { total: ids.length, correct, wrong: wrongIds.length, answered: correct + wrongIds.length, wrongIds, unseenIds: ids.filter((id) => !saved[id]) };
        }

        function quizHtml(block) {
            const ids = quizIds(block);
            if (!ids.length) return "";
            return `<details class="cn-quiz" data-cn-quiz="${esc(block.id)}" data-cn-quiz-ids="${esc(ids.join(" "))}"><summary><span class="cn-quiz-title">Test yourself</span><span class="cn-quiz-meta">${ids.length} MCQ${ids.length === 1 ? "" : "s"} from this section</span><span class="cn-quiz-status" data-cn-quiz-status></span></summary>
                <div class="cn-quiz-body"><p class="cn-quiz-loading" role="status">Loading questions…</p></div></details>`;
        }

        function quizBodyHtml(topic, block, questions) {
            return questions.map((q, index) => {
                const id = q.src || q.id;
                const checks = topic.cautions.filter((item) => item.sources.some((source) => source.id === id));
                const facts = (block.points || []).filter((point) => point.sources.some((source) => source.id === id));
                return `<article class="cn-quiz-q" data-cn-quiz-q="${esc(id)}" data-cn-answer="${esc(String(q.answer || "").toLowerCase())}"><p class="cn-quiz-count">Question ${index + 1} of ${questions.length}</p><div class="cn-quiz-stem">${q.text}</div>
                    <ul class="cn-quiz-options">${q.options.map((option) => `<li><button type="button" class="cn-quiz-option" data-cn-quiz-pick="${esc(option.key.toLowerCase())}"><span class="cn-quiz-key" aria-hidden="true">${esc(option.key.toUpperCase())}</span><span class="cn-quiz-text">${option.text}</span></button></li>`).join("")}</ul>
                    <p class="cn-quiz-verdict" role="status"></p><div class="cn-quiz-result" hidden>${checks.length ? `<div class="cn-quiz-check"><b>${checks.some((check) => check.status === "corrected") ? "Corrected question" : "Question check"}</b><div class="cn-prose"${TEX}>${checks.map((check) => check.html).join("")}</div></div>` : ""}
                        <div class="cn-source-explanation">${q.explanation || "No explanation is stored for this item."}</div>${facts.length ? `<div class="cn-quiz-keyfact"><b>Key fact</b>${facts.map((point) => `<div class="cn-prose"${TEX}>${point.html}</div>`).join("")}</div>` : ""}</div></article>`;
            }).join("") + '<div class="cn-quiz-foot"><p class="cn-quiz-score"></p><button type="button" class="cn-button cn-secondary" data-cn-quiz-reset hidden>Try again</button></div>';
        }

        function studyHtml(topic) {
            const formulas = topic.blocks.some((block) => block.formulas?.length) || Array.isArray(topic.formulaSheet) && topic.formulaSheet.length > 0;
            return `<section class="cn-study" data-cn-study aria-labelledby="cnStudyTitle"><div class="cn-study-row"><div class="cn-study-copy"><h4 id="cnStudyTitle">Your progress</h4><p data-cn-progress-text></p></div>
                <div class="cn-study-actions"><button type="button" class="cn-button" data-cn-review="wrong" hidden></button><button type="button" class="cn-button cn-secondary" data-cn-review="unseen" hidden></button>${formulas ? `<button type="button" class="cn-button cn-secondary" data-cn-drill aria-pressed="${drill}">Formula recall</button>` : ""}</div></div>
                <div class="cn-progress" data-cn-progress role="img"><span class="cn-progress-correct"></span><span class="cn-progress-wrong"></span></div>
                <p class="cn-study-hint">Each section ends with a Test yourself quiz on its ${NOUNS[library]} MCQs. Answers you choose are saved to your practice progress.${formulas ? " Formula recall hides the formula cards so you can test yourself on each one." : ""}</p></section>`;
        }

        function currentV2() {
            const article = $("cnReader")?.querySelector("article.cn-topic.cn-v2");
            const topic = article && registry(article.dataset.noteLibrary)[article.dataset.noteTopic];
            return topic ? { article, topic } : null;
        }

        function refreshProgress() {
            const current = currentV2();
            if (!current) return;
            const stats = progressFor(sourcesOf(current.topic).map((source) => source.id));
            const share = (count) => stats.total ? count / stats.total * 100 + "%" : "0%";
            const study = current.article.querySelector("[data-cn-study]");
            if (study) {
                const summary = stats.answered ? `${stats.answered} of ${stats.total} questions answered · ${stats.correct} correct${stats.wrong ? ` · ${stats.wrong} to review` : ""}`
                    : `${stats.total} ${NOUNS[current.article.dataset.noteLibrary] || "capsule"} questions · none answered yet`;
                study.querySelector("[data-cn-progress-text]").textContent = summary;
                const bar = study.querySelector("[data-cn-progress]");
                bar.setAttribute("aria-label", summary);
                bar.querySelector(".cn-progress-correct").style.width = share(stats.correct);
                bar.querySelector(".cn-progress-wrong").style.width = share(stats.wrong);
                const wrong = study.querySelector('[data-cn-review="wrong"]'), unseen = study.querySelector('[data-cn-review="unseen"]');
                wrong.hidden = !practiceIds || !stats.wrong;
                wrong.textContent = `Review ${stats.wrong} missed`;
                unseen.hidden = !practiceIds || !stats.answered || !stats.unseenIds.length;
                unseen.textContent = `Practise ${stats.unseenIds.length} unanswered`;
            }
            current.article.querySelectorAll(".cn-quiz").forEach((quiz) => {
                const quizStats = progressFor(quiz.dataset.cnQuizIds.split(" "));
                const status = quiz.querySelector("[data-cn-quiz-status]");
                status.dataset.state = !quizStats.answered ? "new" : quizStats.wrong ? "review" : quizStats.correct === quizStats.total ? "done" : "partial";
                status.textContent = !quizStats.answered ? "Not tried" : quizStats.correct === quizStats.total ? "All correct" : `${quizStats.correct}/${quizStats.total} correct`;
            });
        }

        async function questionsFor(ids) {
            if (!ids.every((id) => questionCache.has(id))) {
                const sets = new Map();
                for (const id of ids) {
                    const entry = entriesOf(/^PAST-/.test(id) ? "past" : "capsule").find((item) => item.meta.topics.some((group) => group.ids.includes(id)));
                    if (!entry) throw new Error("A question in this quiz is missing from the question bank. Please reload the page.");
                    sets.set(entry.key, entry);
                }
                await Promise.all([...sets.values()].map(async (entry) => {
                    const data = await loadSet(entry);
                    data.chapters.forEach((chapter) => chapter.questions.forEach((q) => questionCache.set(q.src || q.id, q)));
                }));
            }
            return ids.map((id) => {
                const q = questionCache.get(id);
                if (!q || !Array.isArray(q.options) || !q.options.length) throw new Error("A question in this quiz could not be found. Please reload the page.");
                return q;
            });
        }

        async function loadQuiz(quiz) {
            if (!quiz || !quiz.open || quiz.dataset.state) return;
            const current = currentV2();
            const block = current && current.article.contains(quiz) && current.topic.blocks.find((item) => item.id === quiz.dataset.cnQuiz);
            if (!block) return;
            const body = quiz.querySelector(".cn-quiz-body");
            quiz.dataset.state = "loading";
            replace(body, '<p class="cn-quiz-loading" role="status">Loading questions…</p>');
            try {
                const questions = await questionsFor(quiz.dataset.cnQuizIds.split(" "));
                if (!body.isConnected) return;
                if (!isOpen()) { delete quiz.dataset.state; return; }
                replace(body, quizBodyHtml(current.topic, block, questions));
                quiz.dataset.state = "ready";
                scoreQuiz(quiz);
            } catch (error) {
                if (!body.isConnected) return;
                delete quiz.dataset.state;
                if (isOpen()) replace(body, `<div class="cn-quiz-error" role="alert"><p>${esc(error.message)}</p><button type="button" class="cn-button cn-secondary" data-cn-quiz-retry>Retry</button></div>`);
            }
        }

        function scoreQuiz(quiz) {
            const cards = [...quiz.querySelectorAll(".cn-quiz-q")];
            const done = cards.filter((card) => card.dataset.answered).length, right = cards.filter((card) => card.dataset.answered === "correct").length;
            const score = quiz.querySelector(".cn-quiz-score"), reset = quiz.querySelector("[data-cn-quiz-reset]");
            if (score) score.textContent = done === cards.length ? `Score: ${right} of ${cards.length}${right === cards.length ? " · all correct" : ""}` : `${done} of ${cards.length} answered · ${right} correct`;
            if (reset) reset.hidden = !done;
        }

        function pickQuiz(button) {
            const card = button.closest(".cn-quiz-q"), quiz = button.closest(".cn-quiz");
            if (!card || !quiz || card.dataset.answered) return;
            const picked = button.dataset.cnQuizPick, answer = card.dataset.cnAnswer, right = picked === answer;
            const label = (option) => option.dataset.cnQuizPick.toUpperCase() + ". " + option.querySelector(".cn-quiz-text").textContent.trim();
            card.dataset.answered = right ? "correct" : "wrong";
            card.querySelectorAll(".cn-quiz-option").forEach((option) => {
                option.setAttribute("aria-disabled", "true");
                if (option.dataset.cnQuizPick === answer) { option.classList.add("is-correct"); option.setAttribute("aria-label", label(option) + " (correct answer)"); }
            });
            if (!right) button.classList.add("is-wrong");
            button.setAttribute("aria-label", label(button) + ` (your answer, ${right ? "correct" : "incorrect"})`);
            card.querySelector(".cn-quiz-verdict").textContent = right ? "Correct." : `Not quite — the answer is ${answer.toUpperCase()}.`;
            card.querySelector(".cn-quiz-result").hidden = false;
            const q = questionCache.get(card.dataset.cnQuizQ);
            const option = q && q.options.find((item) => item.key.toLowerCase() === picked);
            if (option && recordAnswer) recordAnswer(q, option.key);
            scoreQuiz(quiz);
            refreshProgress();
        }

        function resetQuiz(quiz) {
            if (!quiz) return;
            quiz.querySelectorAll(".cn-quiz-q").forEach((card) => {
                delete card.dataset.answered;
                card.querySelectorAll(".cn-quiz-option").forEach((option) => { option.classList.remove("is-correct", "is-wrong"); option.removeAttribute("aria-disabled"); option.removeAttribute("aria-label"); });
                card.querySelector(".cn-quiz-verdict").textContent = "";
                card.querySelector(".cn-quiz-result").hidden = true;
            });
            scoreQuiz(quiz);
            quiz.querySelector(".cn-quiz-q")?.scrollIntoView({ block: "start", behavior: "auto" });
            quiz.querySelector(".cn-quiz-option")?.focus({ preventScroll: true });
        }

        function reviewTopic(kind) {
            const current = currentV2();
            if (!current || !practiceIds) return;
            const meta = topicMap.get(current.topic.code);
            const stats = progressFor(sourcesOf(current.topic).map((source) => source.id));
            const ids = kind === "wrong" ? stats.wrongIds : stats.unseenIds;
            if (ids.length) practiceIds(ids, `${current.topic.code === RURAL.code ? meta.name : meta.number + " " + meta.name} · ${kind === "wrong" ? "Missed" : "Unanswered"} ${NOUNS[current.article.dataset.noteLibrary] || "capsule"} questions`);
        }

        function toggleDrill(button) {
            const article = button.closest("article.cn-topic");
            if (!article) return;
            drill = !drill;
            article.classList.toggle("cn-drill", drill);
            button.setAttribute("aria-pressed", String(drill));
            article.querySelectorAll(".is-revealed").forEach((card) => card.classList.remove("is-revealed"));
            article.querySelectorAll("[data-cn-reveal]").forEach((reveal) => { reveal.setAttribute("aria-expanded", "false"); reveal.textContent = "Show formula"; });
        }

        function revealFormula(button) {
            const card = button.closest(".cn-formula, .cn-sheet-item");
            if (!card) return;
            const shown = card.classList.toggle("is-revealed");
            button.setAttribute("aria-expanded", String(shown));
            button.textContent = shown ? "Hide formula" : "Show formula";
        }

        function topicHtml(code) {
            const meta = topicMap.get(code), topic = registry()[code];
            const codes = codesOf(meta.chapterId), index = codes.indexOf(code);
            const sessionDisabled = topic.questionCount ? "" : ' disabled aria-describedby="cnSourceCount"';
            const groups = topic.groups || [];
            const heading = groups.length ? "h5" : "h4";
            const tex = topic.format === 2;
            const facts = tex ? topic.blocks.reduce((sum, block) => sum + (block.points?.length || 0), 0) : 0;
            const formulaCount = tex ? topic.blocks.reduce((sum, block) => sum + (block.formulas?.length || 0), 0) : 0;
            const countLabel = topic.questionCount ? `${topic.questionCount} ${NOUNS[library]} questions` : "Syllabus-only notes · No mapped questions in the current bank";
            const hasChecks = topic.cautions.length > 0 || (topic.references || []).length > 0;
            return `<article class="cn-topic${groups.length ? " cn-lesson" : ""}${tex ? " cn-v2" : ""}${tex && drill ? " cn-drill" : ""}" data-note-topic="${code}" data-note-library="${library}">
                <header class="cn-topic-head"><div><span class="cn-code">${code === RURAL.code ? "Additional" : code}</span><h3 id="cnTopicTitle" tabindex="-1">${esc(meta.number + " " + meta.name)}</h3><span class="cn-count" id="cnSourceCount">${countLabel}</span></div>
                    <div class="cn-actions"><button type="button" class="cn-button" data-cn-session="practice" data-topic="${code}"${sessionDisabled}>${uiIcon("ruler")} Practice topic</button><button type="button" class="cn-button cn-secondary" data-cn-session="exam" data-topic="${code}"${sessionDisabled}>${uiIcon("clipboard")} Exam</button></div></header>
                <details class="cn-scope"><summary>Syllabus scope</summary><p>${esc(meta.detail)}</p></details>
                ${tex && topic.summary ? `<section class="cn-summary"><h4>Overview</h4><div class="cn-prose"${TEX}>${topic.summary}</div><p class="cn-summary-stats">${topic.blocks.length} sections · ${facts} key facts${formulaCount ? ` · ${formulaCount} formulas` : ""}</p></section>` : ""}
                ${tex && topic.questionCount ? studyHtml(topic) : ""}
                <nav class="cn-lesson-nav" aria-label="Contents of ${esc(meta.number)}"><label class="cn-field"><span>On this page</span><select id="cnSectionSelect"><option value="">Jump to a section</option>${groups.length ? groups.map((group, groupIndex) => `<option value="cn-${code}-group-${group.id}">${groupIndex + 1}. ${esc(group.title)}</option>`).join("") : topic.blocks.map((block, blockIndex) => `<option value="cn-${code}-${block.id}">${tex ? blockIndex + 1 + ". " : ""}${esc(block.title)}</option>`).join("")}${topic.formulaSheet ? `<option value="cn-${code}-formulas">Formula sheet</option>` : ""}${topic.recall?.length ? `<option value="cn-${code}-recall">Recall</option>` : ""}${hasChecks ? `<option value="cn-${code}-checks">Question checks</option>` : ""}</select></label>${topic.formulaSheet ? `<a href="#cn-${code}-formulas" data-cn-jump="cn-${code}-formulas">Formula sheet ${uiIcon("arrow-right")}</a>` : ""}${hasChecks ? `<a href="#cn-${code}-checks" data-cn-jump="cn-${code}-checks">Question checks ${uiIcon("arrow-right")}</a>` : ""}</nav>
                ${topic.blocks.map((block, blockIndex) => {
                    const groupIndex = groups.findIndex((group) => group.start === block.id);
                    const group = groups[groupIndex];
                    return `${group ? `<h4 class="cn-part" id="cn-${code}-group-${group.id}" tabindex="-1"><span>${groupIndex + 1}</span>${esc(group.title)}</h4>` : ""}<section class="cn-block" id="cn-${code}-${block.id}" tabindex="-1"><${heading}>${tex ? `<span class="cn-num">${blockIndex + 1}</span><span>${esc(block.title)}</span>` : esc(block.title)}</${heading}>${tex ? blockBodyHtml(block, tex, { figures: figuresHtml(code, block.id) }) : blockBodyHtml(block, tex) + figuresHtml(code, block.id)}${tex ? quizHtml(block) : ""}${references(block.sources)}</section>`;
                }).join("")}
                ${revisionHtml(topic, code)}
                ${hasChecks ? `<section class="cn-checks" id="cn-${code}-checks" tabindex="-1">${topic.cautions.length ? `<details class="cn-check-index"><summary>${topic.questionCount ? "Question checks" : "Reference checks"} (${topic.cautions.length})</summary>${checkFilterHtml(topic)}${topic.cautions.map((item, index) => checkHtml(item, code, index, tex)).join("")}</details>` : ""}${externalReferences(topic)}</section>` : ""}
                ${topic.gaps.length ? `<details class="cn-gaps"><summary>Scope and limits</summary><ul>${topic.gaps.map((gap) => `<li>${esc(gap)}</li>`).join("")}</ul></details>` : ""}
                <footer class="cn-pagination"><button type="button" class="cn-button cn-secondary" data-cn-topic="${codes[index - 1] || code}"${index === 0 ? " disabled" : ""}>${uiIcon("arrow-left")} Previous subchapter</button><button type="button" class="cn-button" data-cn-topic="${codes[index + 1] || code}"${index === codes.length - 1 ? " disabled" : ""}>Next subchapter ${uiIcon("arrow-right")}</button></footer>
            </article>`;
        }

        function renderBody() {
            const reader = $("cnReader");
            $("cnTopicSelect").value = query ? "" : selectedCode;
            $("cnTopicSelect").title = query ? "Search results" : $("cnTopicSelect").selectedOptions[0].textContent;
            if (!query) { replace(reader, topicHtml(selectedCode)); refreshProgress(); return; }
            const results = search(codesOf(selectedChapterId).map((code) => registry()[code]), query);
            replace(reader, `<div class="cn-search-summary" role="status"><b>${results.length} matching sections</b><button type="button" class="cn-button cn-secondary" data-cn-clear>Clear search</button></div>${results.length ? results.map((block) => {
                const meta = topicMap.get(block.code);
                const tex = registry()[block.code]?.format === 2;
                const figures = figuresHtml(block.code, block.id), inline = tex && block.kind === "note";
                const body = block.sheet ? sheetHtml(block.sheet) : block.kind === "note" ? blockBodyHtml(block, tex, { expand: true, figures: inline ? figures : "" }) : proseHtml(block, true, tex);
                return `<article class="cn-search-result${tex ? " cn-v2" : ""}"><span class="cn-code">${esc(meta.number + " " + meta.name)}</span><h3>${esc(block.title)}</h3>${block.kind === "caution" ? `<span class="cn-check-status">${checkLabels[checkKind(block)]}</span>` : ""}${block.prompt ? `<p class="cn-check-prompt">${esc(block.prompt)}</p>` : ""}${body}${inline ? "" : figures}<button type="button" class="cn-button cn-secondary" data-cn-topic="${block.code}" data-cn-block="${block.id}">Open subchapter ${uiIcon("arrow-right")}</button></article>`;
            }).join("") : '<div class="cn-empty">No matching notes. Try a topic, formula name or source question ID.</div>'}`);
        }

        async function render() {
            const restoreChapterFocus = document.activeElement === $("cnChapterSelect");
            suspend();
            const token = serial;
            const lib = library;
            const chapterId = selectedChapterId, chapter = chapterMap.get(chapterId);
            const codes = codesOf(chapterId);
            replace(content, `<div class="cn-library" role="group" aria-label="Notes collection">${Object.entries(LIBRARIES).map(([key, item]) => `<button type="button" data-cn-library="${key}" aria-pressed="${key === lib}"${hasLibraryChapter(chapterId, key) ? "" : " disabled"}><b>${item.label}</b><span>${item.questions.toLocaleString("en-US")} questions</span></button>`).join("")}</div>
                <div class="cn-tools"><label class="cn-field"><span>Chapter</span><select id="cnChapterSelect">${syllabus.chapters.map((item) => `<option value="${item.id}"${item.id === chapterId ? " selected" : ""}${hasLibraryChapter(item.id) ? "" : " disabled"}>${esc(item.number + ". " + item.name)}${hasLibraryChapter(item.id) ? "" : " — Notes not added"}</option>`).join("")}</select></label>
                <label class="cn-field"><span>Topic</span><select id="cnTopicSelect" disabled><option value="" hidden disabled>Search results</option>${codes.map((code) => topicMap.get(code)).map((topic) => `<option value="${topic.code}"${topic.code === selectedCode ? " selected" : ""}>${esc(topic.number + " " + topic.name)}</option>`).join("")}</select></label>
                <details class="cn-search-toggle"${query ? " open" : ""}><summary>Search notes</summary><form id="cnSearchForm" role="search"><label class="cn-field"><span>Search Chapter ${chapter.number} ${lib === "model" ? "" : NOUNS[lib] + " "}notes</span><input type="search" id="cnSearch" value="${esc(query)}" placeholder="Topic, formula or source question ID" disabled /></label><button class="cn-button" type="submit" disabled>Search</button></form></details></div>
                <div id="cnReader" aria-busy="true"><div class="cn-empty" role="status">Loading Chapter ${chapter.number} ${lib === "model" ? "" : NOUNS[lib] + " "}notes…</div></div>
                <details class="cn-about" hidden><summary>Sources and scope</summary><p id="cnAboutText"></p></details>`);
            if (restoreChapterFocus) $("cnChapterSelect").focus({ preventScroll: true });
            try {
                await loadNotes(chapterId, lib);
                if (token !== serial || !isOpen()) return;
                content.querySelectorAll("#cnSearchForm :disabled, #cnTopicSelect").forEach((node) => { node.disabled = false; });
                $("cnReader").setAttribute("aria-busy", "false");
                const count = codes.reduce((sum, code) => sum + registry(lib)[code].questionCount, 0);
                $("cnAboutText").textContent = lib === "past"
                    ? `Study notes written from the ${count} Chapter ${chapter.number} questions of the NEC past papers on this site (2080 papers and the 2083 candidate recall). Each key fact cites its paper and question number, and each section ends with a Test yourself quiz on those questions. Question checks record published answers that were corrected and questions reworded from figures. These are not NEC-issued notes. Reading does not change saved results; answers you choose in a quiz or source question are saved to your practice progress.`
                    : lib === "capsule"
                    ? `Study notes written from the ${count} Chapter ${chapter.number} questions of the NEC Quick Revision Capsule, 4th edition. Each key fact states a capsule point, and each section cites its capsule page and point and ends with a Test yourself quiz on those questions. These are not NEC-issued notes. Reading does not change saved results; answers you choose in a quiz or source question are saved to your practice progress.`
                    : `Authored study notes for the supplied NEC syllabus and ${count} mapped Chapter ${chapter.number} questions. Worked extensions use labelled assumptions. Question checks identify verified corrections and unresolved wording. These are not NEC-issued notes. Reading does not change saved results; answers you choose in a source question are saved to your practice progress.`;
                content.querySelector(".cn-about").hidden = false;
                renderBody();
            } catch (error) {
                if (token !== serial || !isOpen()) return;
                $("cnReader").setAttribute("aria-busy", "false");
                replace($("cnReader"), `<div class="cn-empty" role="alert"><h3>Notes could not be loaded</h3><p>${esc(error.message)}</p><button type="button" class="cn-button" data-cn-retry>Retry</button></div>`);
            }
        }

        function focusBlock(id) {
            const target = $(id);
            if (!target || !$("cnReader").contains(target)) return;
            for (let node = target; node && node !== $("cnReader"); node = node.parentElement) {
                if (node.tagName === "DETAILS") node.open = true;
            }
            target.querySelectorAll(".cn-more, .cn-check-index").forEach((detail) => { detail.open = true; });
            target.focus({ preventScroll: true });
            target.scrollIntoView({ block: "start", behavior: "auto" });
        }

        async function openSource(id) {
            const lib = library;
            const topic = codesOf(selectedChapterId).map((code) => registry(lib)[code]).find((item) => item && sourcesOf(item).some((ref) => ref.id === id));
            if (!topic || !isOpen()) return;
            const ref = sourcesOf(topic).find((source) => source.id === id);
            const entry = lib === "model" ? entries.find((item) => item.no === ref.set) : entriesOf(lib).find((item) => item.meta.topics.some((group) => group.ids.includes(id)));
            if (!entry) return;
            const token = ++sourceSerial;
            sourceQuestion = null;
            dialog.classList.remove("cn-image-dialog");
            $("cvNoteSourceTitle").textContent = lib === "past" ? `Past-paper question · ${ref.label}` : lib === "capsule" ? `Capsule question · ${ref.label}` : `Model ${ref.set} · Question ${ref.question}`;
            replace(sourceBody, '<p role="status">Loading source question…</p>');
            if (!dialog.open) dialog.showModal();
            try {
                const data = await loadSet(entry);
                if (token !== sourceSerial || !dialog.open || !isOpen()) return;
                const all = data.chapters.flatMap((chapter) => chapter.questions);
                const q = lib === "model" ? all[ref.question - 1] : all.find((item) => item.id === id);
                sourceQuestion = q;
                if (!q || (q.src || q.id) !== id) throw new Error("This reference no longer matches the source paper.");
                const checks = topic.cautions.filter((item) => item.sources.some((source) => source.id === id));
                const label = checks.some((check) => check.status === "corrected") ? "Corrected question" : checks.length === 1 && checks[0].issue ? checkLabels[checkKind(checks[0])] : "Question check";
                replace(sourceBody, `<span class="cn-code">${esc(id)}</span>${checks.length ? `<section class="cn-source-check"><h3>${label}</h3><div class="cn-prose"${topic.format === 2 ? TEX : ""}>${checks.map((check) => check.html).join("")}</div>${externalReferences(topic)}</section>` : ""}<div class="cn-source-question">${q.text}</div>
                    <ol class="cn-source-options" type="a" data-cn-answer="${esc((q.answer || "").toLowerCase())}">${q.options.map((option) => `<li value="${option.key.charCodeAt(0) - 96}"><button type="button" class="cn-option-btn" data-cn-option="${esc(option.key.toLowerCase())}">${option.text}</button></li>`).join("")}</ol>
                        <details class="cn-stored-answer"><summary>Answer and explanation</summary><p>Answer: ${esc(q.answer.toUpperCase())}</p><div class="cn-source-explanation">${q.explanation || "No explanation is stored for this item."}</div>${sourceDerivationsHtml(topic, id, q.explanation || "")}</details>`);
            } catch (error) {
                if (token !== sourceSerial || !dialog.open || !isOpen()) return;
                replace(sourceBody, `<div role="alert"><p>${esc(error.message)}</p><button type="button" class="cn-button" data-cn-source="${esc(id)}">Retry source</button></div>`);
            }
        }

        $("cvNotes").addEventListener("click", (event) => {
            const button = event.target.closest("button, a[data-cn-jump]");
            if (!button || button.disabled || !isOpen()) return;
            if (button.hasAttribute("data-cn-close")) dialog.close();
            else if (button.dataset.cnLibrary) { if (selectLibrary(button.dataset.cnLibrary)) { render(); } }
            else if (button.dataset.cnFigure) openFigure(button.dataset.cnFigure);
            else if (button.hasAttribute("data-cn-figure-zoom")) {
                const zoomed = sourceBody.querySelector(".cn-figure-viewport")?.classList.toggle("is-zoomed");
                button.setAttribute("aria-pressed", String(!!zoomed));
                button.setAttribute("aria-label", zoomed ? "Fit diagram" : "Zoom diagram");
                button.title = zoomed ? "Fit diagram" : "Zoom diagram";
                button.innerHTML = uiIcon(zoomed ? "minus" : "arrow-up-right");
            }
            else if (button.hasAttribute("data-cn-retry")) render();
            else if (button.dataset.cnOption) {
                const list = button.closest(".cn-source-options");
                if (!list || list.dataset.answered) return;
                list.dataset.answered = "true";
                const answer = list.dataset.cnAnswer;
                list.querySelectorAll(".cn-option-btn").forEach((opt) => {
                    opt.disabled = true;
                    if (opt.dataset.cnOption === answer) { opt.classList.add("is-correct"); opt.setAttribute("aria-label", opt.textContent.trim() + " (correct answer)"); }
                });
                if (button.dataset.cnOption !== answer) { button.classList.add("is-wrong"); button.setAttribute("aria-label", button.textContent.trim() + " (your answer, incorrect)"); }
                const stored = sourceBody.querySelector(".cn-stored-answer");
                if (stored) stored.open = true;
                const option = sourceQuestion?.options.find((item) => item.key.toLowerCase() === button.dataset.cnOption);
                if (option && recordAnswer) { recordAnswer(sourceQuestion, option.key); refreshProgress(); }
            }
            else if (button.dataset.cnQuizPick) pickQuiz(button);
            else if (button.hasAttribute("data-cn-quiz-reset")) resetQuiz(button.closest(".cn-quiz"));
            else if (button.hasAttribute("data-cn-quiz-retry")) loadQuiz(button.closest(".cn-quiz"));
            else if (button.dataset.cnReview) reviewTopic(button.dataset.cnReview);
            else if (button.hasAttribute("data-cn-drill")) toggleDrill(button);
            else if (button.hasAttribute("data-cn-reveal")) revealFormula(button);
            else if (button.dataset.cnPointSource) openSource(button.dataset.cnPointSource);
            else if (button.dataset.cnSource) openSource(button.dataset.cnSource);
            else if (button.dataset.cnTopic && topicMap.get(button.dataset.cnTopic)?.chapterId === selectedChapterId) {
                selectTopic(button.dataset.cnTopic); $("cnSearch").value = ""; renderBody();
                focusBlock(button.dataset.cnBlock ? `cn-${selectedCode}-${button.dataset.cnBlock}` : "cnTopicTitle");
            } else if (button.dataset.cnJump) { event.preventDefault(); focusBlock(button.dataset.cnJump); }
            else if (button.hasAttribute("data-cn-clear")) { query = ""; $("cnSearch").value = ""; renderBody(); $("cnSearch").focus(); }
            else if (button.dataset.cnSession && topicMap.has(button.dataset.topic)) startTopic(button.dataset.topic, button.dataset.cnSession, LIBRARIES[library].source);
        });
        $("cvNotes").addEventListener("submit", (event) => {
            if (event.target.id !== "cnSearchForm" || !isOpen()) return;
            event.preventDefault();
            if ($("cnSearch").disabled) return;
            query = $("cnSearch").value.trim(); renderBody();
        });
        $("cvNotes").addEventListener("change", (event) => {
            if (event.target.id === "cnTopicSelect" && isOpen() && topicMap.get(event.target.value)?.chapterId === selectedChapterId) {
                selectTopic(event.target.value); $("cnSearch").value = ""; renderBody();
                content.querySelector(".cn-search-toggle").open = false;
                return;
            }
            if (event.target.id === "cnCheckFilter" && isOpen()) {
                let count = 0;
                content.querySelectorAll(".cn-caution").forEach((check) => {
                    check.hidden = event.target.value !== "all" && check.dataset.checkKind !== event.target.value;
                    if (!check.hidden) count++;
                });
                $("cnCheckCount").textContent = `${count} check${count === 1 ? "" : "s"}`;
                return;
            }
            if (event.target.id === "cnSectionSelect" && isOpen()) {
                focusBlock(event.target.value);
                event.target.value = "";
                return;
            }
            if (event.target.id !== "cnChapterSelect" || !isOpen() || !chapterMap.has(event.target.value)) return;
            selectChapter(event.target.value); render();
        });
        // toggle does not bubble, so quizzes are loaded from a capture listener when first opened.
        $("cvNotes").addEventListener("toggle", (event) => {
            if (event.target.classList?.contains("cn-quiz") && event.target.open && isOpen()) loadQuiz(event.target);
        }, true);
        $("cvNotes").addEventListener("keydown", (event) => {
            const card = event.target.closest?.(".cn-quiz-q");
            if (!card || event.ctrlKey || event.altKey || event.metaKey || !/^[a-d]$/i.test(event.key) || !isOpen()) return;
            const option = card.querySelector(`[data-cn-quiz-pick="${event.key.toLowerCase()}"]`);
            if (!option) return;
            event.preventDefault();
            option.focus({ preventScroll: true });
            pickQuiz(option);
        });
        dialog.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && dialog.open) {
                event.preventDefault(); event.stopPropagation(); dialog.close();
            }
        });
        dialog.addEventListener("close", () => {
            if (dialog.open) return;
            sourceSerial++; sourceQuestion = null; dialog.classList.remove("cn-image-dialog");
        });
        return { render, selectTopic: (code, lib) => { if (lib && Object.hasOwn(LIBRARIES, lib) && lib !== library) { library = lib; query = ""; } selectTopic(code); }, suspend };
    }

    window.CIVIL_NOTES = Object.freeze({ create, hasTopic, hasChapter, chapterCodes, search, sourcesOf, FILES, CHAPTER_FILES, CODES });
})();