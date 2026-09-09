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
    const hasChapter = (id) => Object.hasOwn(CHAPTER_FILES, id);
    const chapterCodes = (id) => hasChapter(id) ? CHAPTER_FILES[id].flatMap((file) => FILES[file]) : [];
    const script = document.currentScript;
    const base = script ? new URL("civil-notes/", script.src).href : "js/civil-notes/";
    const version = script ? new URL(script.src).search : "";
    const hasTopic = (code) => CODES.includes(code);
    const text = (value) => String(value || "").replace(/<[^>]*>/g, " ").replace(/&(?:amp|nbsp|lt|gt|quot);/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
    const sourcesOf = (topic) => [...new Map([...topic.blocks, ...topic.cautions].flatMap((block) => block.sources).map((source) => [source.id, source])).values()];
    const checkId = (item, index) => item.id || "caution-" + index;
    const checkTitle = (item) => item.sources.length ? `Model ${item.sources[0].set} · Q${item.sources[0].question}` : "Reference check";
    const checkLabels = Object.freeze({ corrected: "Corrected", clarification: "Concept clarification", context: "Design and reference context", notation: "Units and notation", assumptions: "Missing assumptions", ambiguity: "Ambiguous question", "answer-review": "Answer needs review", scope: "Scope note", review: "Review note" });
    const checkKind = (item) => item.status === "corrected" ? "corrected" : !item.sources.length ? "scope" : Object.hasOwn(checkLabels, item.issue) ? item.issue : "review";

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
            ...(topic.formulaSheet ? [{ id: "formulas", title: "Formula sheet", html: topic.formulaSheet, sources: [], code: topic.code, kind: "revision" }] : []),
            ...(topic.recall || []).map((item) => ({ ...item, title: "Recall", sources: [], code: topic.code, kind: "recall" }))
        ]).filter((block) => {
            const content = text(block.title + " " + (block.prompt || "") + " " + block.html + " " + (block.moreHtml || "") + " " + block.code + " " + block.sources.map((source) => source.id).join(" "));
            return terms.every((term) => content.includes(term));
        });
    }

    function create(deps) {
        const { $, esc, syllabus, entries, loadSet, typeset, isOpen, startTopic } = deps;
        const chapters = syllabus.chapters.filter((item) => hasChapter(item.id));
        const chapterMap = new Map(chapters.map((chapter) => [chapter.id, chapter]));
        const topicMap = new Map(chapters.flatMap((chapter) => chapter.subchapters.map((topic) => [topic.code, { ...topic, chapterId: chapter.id }])));
        const pending = new Map();
        const selections = new Map();
        const content = $("cvNotesContent"), dialog = $("cvNoteSourceDialog"), sourceBody = $("cvNoteSourceBody");
        const uiIcon = window.CEE_UI_ICONS.svg;
        let selectedChapterId = chapters[0].id, selectedCode = chapterCodes(selectedChapterId)[0];
        let query = "", serial = 0, sourceSerial = 0;

        function replace(node, html) {
            if (window.MathJax && window.MathJax.typesetClear) window.MathJax.typesetClear([node]);
            node.innerHTML = html;
            node.querySelectorAll(".cn-prose").forEach((prose) => {
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
            if (topic && hasTopic(code)) {
                selectedChapterId = topic.chapterId; selectedCode = code; query = "";
                selections.set(selectedChapterId, code);
            }
        }

        function selectChapter(id) {
            if (chapterMap.has(id)) selectTopic(selections.get(id) || chapterCodes(id)[0]);
        }

        function suspend() {
            serial++; sourceSerial++;
            if (dialog.open) dialog.close();
        }

        function loadFile(file) {
            const ready = () => FILES[file].every((code) => window.CIVIL_NOTE_TOPICS && window.CIVIL_NOTE_TOPICS[code]);
            if (ready()) return Promise.resolve();
            if (pending.has(file)) return pending.get(file);
            const promise = new Promise((resolve, reject) => {
                const tag = document.createElement("script");
                const timeout = setTimeout(() => finish(new Error("Notes loading timed out. Please retry.")), 25000);
                function finish(error) {
                    clearTimeout(timeout); tag.onload = null; tag.onerror = null;
                    if (error) { tag.remove(); reject(error); } else resolve();
                }
                tag.src = base + file + version;
                tag.onload = () => finish(ready() ? null : new Error("The notes file is incomplete. Please retry."));
                tag.onerror = () => finish(new Error("Notes could not be loaded. Check your connection and retry."));
                document.head.appendChild(tag);
            }).catch((error) => { pending.delete(file); throw error; });
            pending.set(file, promise);
            return promise;
        }

        async function loadNotes(chapterId) {
            await Promise.all(CHAPTER_FILES[chapterId].map(loadFile));
            for (const code of chapterCodes(chapterId)) {
                const topic = window.CIVIL_NOTE_TOPICS[code];
                if (!topic || topic.code !== code || !Array.isArray(topic.blocks) || !topic.blocks.length
                    || !Array.isArray(topic.cautions) || !Array.isArray(topic.gaps)
                    || sourcesOf(topic).length !== topic.questionCount) throw new Error("The notes coverage could not be verified. Please reload the page.");
            }
        }

        function references(sources) {
            if (!sources.length) return "";
            return `<details class="cn-sources"><summary>Source questions (${sources.length})</summary><div class="cn-source-links">${sources.map((source) =>
                `<button type="button" data-cn-source="${esc(source.id)}" title="${esc(source.id)}" aria-label="Read Model ${source.set}, question ${source.question}, ${esc(source.id)}">Model ${source.set} · Q${source.question}</button>`).join("")}</div></details>`;
        }

        function externalReferences(topic) {
            return (topic.references || []).length ? `<details class="cn-sources"><summary>Standards checked</summary><ul>${topic.references.filter((ref) => /^https:\/\//.test(ref.url)).map((ref) => `<li><a href="${esc(ref.url)}" target="_blank" rel="noopener noreferrer">${esc(ref.title)}</a></li>`).join("")}</ul></details>` : "";
        }

        function proseHtml(block, expand = false) {
            return `<div class="cn-prose">${block.html}</div>${block.moreHtml ? `<details class="cn-more"${expand ? " open" : ""}><summary>Further reasoning and context</summary><div class="cn-prose">${block.moreHtml}</div></details>` : ""}`;
        }

        function checkHtml(item, code, index) {
            const source = item.sources[0];
            const corrected = item.status === "corrected";
            const kind = checkKind(item);
            return `<details class="cn-caution" id="cn-${code}-${checkId(item, index)}" data-cn-check="${source ? esc(source.id) : "reference"}" data-check-status="${corrected ? "corrected" : "review"}" data-check-kind="${kind}" tabindex="-1">
                <summary><span class="cn-check-label">${esc(checkTitle(item))}<span class="cn-check-status">${checkLabels[kind]}</span></span>${item.prompt ? `<span class="cn-check-prompt">${esc(item.prompt)}</span>` : ""}</summary>
                <div class="cn-check-content">${proseHtml(item)}${source ? `<button type="button" class="cn-button cn-secondary" data-cn-source="${esc(source.id)}">Read this question ${uiIcon("arrow-up-right")}</button>` : ""}</div></details>`;
        }

        function figuresHtml(code, blockId) {
            const figures = window.CIVIL_NOTE_FIGURES?.topics[code] || [];
            return figures.filter((figure) => figure.block === blockId).map((figure) => `<figure class="cn-figure">
                <button type="button" class="cn-figure-open" data-cn-figure="${figure.id}" aria-label="Enlarge ${esc(figure.title)}" title="Enlarge diagram">
                    <img src="${figure.src + version}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async" alt="${esc(figure.caption)}" />
                    <span class="cn-figure-corner">${uiIcon("arrow-up-right")}</span>
                </button><figcaption><b>${esc(figure.title)}</b><span>${esc(figure.caption)}</span></figcaption></figure>`).join("");
        }

        function sourceDerivationsHtml(topic, id, explanation) {
            const blocks = topic.blocks.filter((block) => block.sources.some((source) => source.id === id));
            if (!blocks.length) return "";
            const figures = window.CIVIL_NOTE_FIGURES?.topics[topic.code] || [];
            return `<section class="cn-source-derivations"><h3>Related derivations</h3>${blocks.map((block) => {
                const diagrams = figures.filter((figure) => figure.block === block.id && !explanation.includes(figure.src));
                return `<details class="cn-related-note" data-cn-related-note="${esc(block.id)}"><summary>${esc(block.title)}</summary>${proseHtml(block)}${diagrams.map((figure) => `<figure class="cn-explanation-figure"><a href="${figure.src + version}" target="_blank" rel="noopener noreferrer" aria-label="Open ${esc(figure.title)}"><img src="${figure.src + version}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async" alt="${esc(figure.caption)}" /></a><figcaption>${esc(figure.title)}. ${esc(figure.caption)}</figcaption></figure>`).join("")}</details>`;
            }).join("")}</section>`;
        }

        function openFigure(id) {
            if (!isOpen()) return;
            const figure = chapterCodes(selectedChapterId).flatMap((code) => window.CIVIL_NOTE_FIGURES?.topics[code] || []).find((item) => item.id === id);
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
            return (topic.formulaSheet ? `<details class="cn-revision" id="cn-${code}-formulas" tabindex="-1"><summary>Formula sheet</summary><div class="cn-prose">${topic.formulaSheet}</div></details>` : "") +
                ((topic.recall || []).length ? `<section class="cn-revision" id="cn-${code}-recall" tabindex="-1"><h4>Recall</h4>${topic.recall.map((item) => `<details class="cn-recall-item" id="cn-${code}-${item.id}" tabindex="-1"><summary>${esc(item.prompt)}</summary><div class="cn-prose">${item.html}</div><a href="#cn-${code}-${item.block}" data-cn-jump="cn-${code}-${item.block}">Review concept ${uiIcon("arrow-up-right")}</a></details>`).join("")}</section>` : "");
        }

            function checkFilterHtml(topic) {
                if (!topic.cautions.some((item) => item.issue)) return "";
                const kinds = [...new Set(topic.cautions.map(checkKind))];
                return `<label class="cn-field cn-check-filter"><span>Check type</span><select id="cnCheckFilter"><option value="all">All checks (${topic.cautions.length})</option>${kinds.map((kind) => `<option value="${kind}">${checkLabels[kind]} (${topic.cautions.filter((item) => checkKind(item) === kind).length})</option>`).join("")}</select></label><span id="cnCheckCount" class="cn-count" role="status">${topic.cautions.length} checks</span>`;
            }

        function topicHtml(code) {
            const meta = topicMap.get(code), topic = window.CIVIL_NOTE_TOPICS[code];
            const codes = chapterCodes(meta.chapterId), index = codes.indexOf(code);
            const sessionDisabled = topic.questionCount ? "" : ' disabled aria-describedby="cnSourceCount"';
            const groups = topic.groups || [];
            const heading = groups.length ? "h5" : "h4";
            return `<article class="cn-topic${groups.length ? " cn-lesson" : ""}" data-note-topic="${code}">
                <header class="cn-topic-head"><div><span class="cn-code">${code}</span><h3 id="cnTopicTitle" tabindex="-1">${esc(meta.number + " " + meta.name)}</h3><span class="cn-count" id="cnSourceCount">${topic.questionCount ? topic.questionCount + " source questions" : "Syllabus-only notes · No mapped questions in the current bank"}</span></div>
                    <div class="cn-actions"><button type="button" class="cn-button" data-cn-session="practice" data-topic="${code}"${sessionDisabled}>${uiIcon("ruler")} Practice topic</button><button type="button" class="cn-button cn-secondary" data-cn-session="exam" data-topic="${code}"${sessionDisabled}>${uiIcon("clipboard")} Exam</button></div></header>
                <details class="cn-scope"><summary>Syllabus scope</summary><p>${esc(meta.detail)}</p></details>
                <nav class="cn-lesson-nav" aria-label="Contents of ${esc(meta.number)}"><label class="cn-field"><span>On this page</span><select id="cnSectionSelect"><option value="">Jump to a section</option>${groups.length ? groups.map((group, groupIndex) => `<option value="cn-${code}-group-${group.id}">${groupIndex + 1}. ${esc(group.title)}</option>`).join("") : topic.blocks.map((block) => `<option value="cn-${code}-${block.id}">${esc(block.title)}</option>`).join("")}${topic.formulaSheet ? `<option value="cn-${code}-formulas">Formula sheet</option>` : ""}${topic.recall?.length ? `<option value="cn-${code}-recall">Recall</option>` : ""}<option value="cn-${code}-checks">Question checks</option></select></label>${topic.formulaSheet ? `<a href="#cn-${code}-formulas" data-cn-jump="cn-${code}-formulas">Formula sheet ${uiIcon("arrow-right")}</a>` : ""}<a href="#cn-${code}-checks" data-cn-jump="cn-${code}-checks">Question checks ${uiIcon("arrow-right")}</a></nav>
                ${topic.blocks.map((block) => {
                    const groupIndex = groups.findIndex((group) => group.start === block.id);
                    const group = groups[groupIndex];
                    return `${group ? `<h4 class="cn-part" id="cn-${code}-group-${group.id}" tabindex="-1"><span>${groupIndex + 1}</span>${esc(group.title)}</h4>` : ""}<section class="cn-block" id="cn-${code}-${block.id}" tabindex="-1"><${heading}>${esc(block.title)}</${heading}>${proseHtml(block)}${figuresHtml(code, block.id)}${references(block.sources)}</section>`;
                }).join("")}
                ${revisionHtml(topic, code)}
                <section class="cn-checks" id="cn-${code}-checks" tabindex="-1"><details class="cn-check-index"><summary>${topic.questionCount ? "Question checks" : "Reference checks"} (${topic.cautions.length})</summary>${checkFilterHtml(topic)}${topic.cautions.map((item, index) => checkHtml(item, code, index)).join("")}</details>${externalReferences(topic)}</section>
                <details class="cn-gaps"><summary>Scope and limits</summary><ul>${topic.gaps.map((gap) => `<li>${esc(gap)}</li>`).join("")}</ul></details>
                <footer class="cn-pagination"><button type="button" class="cn-button cn-secondary" data-cn-topic="${codes[index - 1] || code}"${index === 0 ? " disabled" : ""}>${uiIcon("arrow-left")} Previous subchapter</button><button type="button" class="cn-button" data-cn-topic="${codes[index + 1] || code}"${index === codes.length - 1 ? " disabled" : ""}>Next subchapter ${uiIcon("arrow-right")}</button></footer>
            </article>`;
        }

        function renderBody() {
            const reader = $("cnReader");
            $("cnTopicSelect").value = query ? "" : selectedCode;
            $("cnTopicSelect").title = query ? "Search results" : $("cnTopicSelect").selectedOptions[0].textContent;
            if (!query) { replace(reader, topicHtml(selectedCode)); return; }
            const results = search(chapterCodes(selectedChapterId).map((code) => window.CIVIL_NOTE_TOPICS[code]), query);
            replace(reader, `<div class="cn-search-summary" role="status"><b>${results.length} matching sections</b><button type="button" class="cn-button cn-secondary" data-cn-clear>Clear search</button></div>${results.length ? results.map((block) => {
                const meta = topicMap.get(block.code);
                return `<article class="cn-search-result"><span class="cn-code">${esc(meta.number + " " + meta.name)}</span><h3>${esc(block.title)}</h3>${block.kind === "caution" ? `<span class="cn-check-status">${checkLabels[checkKind(block)]}</span>` : ""}${block.prompt ? `<p class="cn-check-prompt">${esc(block.prompt)}</p>` : ""}${proseHtml(block, true)}${figuresHtml(block.code, block.id)}<button type="button" class="cn-button cn-secondary" data-cn-topic="${block.code}" data-cn-block="${block.id}">Open subchapter ${uiIcon("arrow-right")}</button></article>`;
            }).join("") : '<div class="cn-empty">No matching notes. Try a topic, formula name or source question ID.</div>'}`);
        }

        async function render() {
            const restoreChapterFocus = document.activeElement === $("cnChapterSelect");
            suspend();
            const token = serial;
            const chapterId = selectedChapterId, chapter = chapterMap.get(chapterId);
            const codes = chapterCodes(chapterId);
            replace(content, `<div class="cn-tools"><label class="cn-field"><span>Chapter</span><select id="cnChapterSelect">${syllabus.chapters.map((item) => `<option value="${item.id}"${item.id === chapterId ? " selected" : ""}${hasChapter(item.id) ? "" : " disabled"}>${esc(item.number + ". " + item.name)}${hasChapter(item.id) ? "" : " — Notes not added"}</option>`).join("")}</select></label>
                <label class="cn-field"><span>Topic</span><select id="cnTopicSelect" disabled><option value="" hidden disabled>Search results</option>${chapter.subchapters.map((topic) => `<option value="${topic.code}"${topic.code === selectedCode ? " selected" : ""}>${esc(topic.number + " " + topic.name)}</option>`).join("")}</select></label>
                <details class="cn-search-toggle"${query ? " open" : ""}><summary>Search notes</summary><form id="cnSearchForm" role="search"><label class="cn-field"><span>Search Chapter ${chapter.number} notes</span><input type="search" id="cnSearch" value="${esc(query)}" placeholder="Topic, formula or source question ID" disabled /></label><button class="cn-button" type="submit" disabled>Search</button></form></details></div>
                <div id="cnReader" aria-busy="true"><div class="cn-empty" role="status">Loading Chapter ${chapter.number} notes…</div></div>
                <details class="cn-about" hidden><summary>Sources and scope</summary><p id="cnAboutText"></p></details>`);
            if (restoreChapterFocus) $("cnChapterSelect").focus({ preventScroll: true });
            try {
                await loadNotes(chapterId);
                if (token !== serial || !isOpen()) return;
                content.querySelectorAll("#cnSearchForm :disabled, #cnTopicSelect").forEach((node) => { node.disabled = false; });
                $("cnReader").setAttribute("aria-busy", "false");
                const count = codes.reduce((sum, code) => sum + window.CIVIL_NOTE_TOPICS[code].questionCount, 0);
                $("cnAboutText").textContent = `Authored study notes for the supplied NEC syllabus and ${count} mapped Chapter ${chapter.number} questions. Worked extensions use labelled assumptions. Question checks identify verified corrections and unresolved wording. These are not NEC-issued notes. Reading does not record attempts or change saved results.`;
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
            const topic = chapterCodes(selectedChapterId).map((code) => window.CIVIL_NOTE_TOPICS && window.CIVIL_NOTE_TOPICS[code]).find((item) => item && sourcesOf(item).some((ref) => ref.id === id));
            if (!topic || !isOpen()) return;
            const ref = sourcesOf(topic).find((source) => source.id === id);
            const entry = entries.find((item) => item.no === ref.set);
            if (!entry) return;
            const token = ++sourceSerial;
            dialog.classList.remove("cn-image-dialog");
            $("cvNoteSourceTitle").textContent = `Model ${ref.set} · Question ${ref.question}`;
            replace(sourceBody, '<p role="status">Loading source question…</p>');
            if (!dialog.open) dialog.showModal();
            try {
                const data = await loadSet(entry);
                if (token !== sourceSerial || !dialog.open || !isOpen()) return;
                const q = data.chapters.flatMap((chapter) => chapter.questions)[ref.question - 1];
                if (!q || (q.src || q.id) !== id) throw new Error("This reference no longer matches the source paper.");
                const checks = topic.cautions.filter((item) => item.sources.some((source) => source.id === id));
                const label = checks.some((check) => check.status === "corrected") ? "Corrected question" : checks.length === 1 && checks[0].issue ? checkLabels[checkKind(checks[0])] : "Question check";
                replace(sourceBody, `<span class="cn-code">${esc(id)}</span>${checks.length ? `<section class="cn-source-check"><h3>${label}</h3><div class="cn-prose">${checks.map((check) => check.html).join("")}</div>${externalReferences(topic)}</section>` : ""}<div class="cn-source-question">${q.text}</div>
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
            }
            else if (button.dataset.cnSource) openSource(button.dataset.cnSource);
            else if (button.dataset.cnTopic && topicMap.get(button.dataset.cnTopic)?.chapterId === selectedChapterId) {
                selectTopic(button.dataset.cnTopic); $("cnSearch").value = ""; renderBody();
                focusBlock(button.dataset.cnBlock ? `cn-${selectedCode}-${button.dataset.cnBlock}` : "cnTopicTitle");
            } else if (button.dataset.cnJump) { event.preventDefault(); focusBlock(button.dataset.cnJump); }
            else if (button.hasAttribute("data-cn-clear")) { query = ""; $("cnSearch").value = ""; renderBody(); $("cnSearch").focus(); }
            else if (button.dataset.cnSession && hasTopic(button.dataset.topic)) startTopic(button.dataset.topic, button.dataset.cnSession);
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
        dialog.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && dialog.open) {
                event.preventDefault(); event.stopPropagation(); dialog.close();
            }
        });
        dialog.addEventListener("close", () => {
            if (dialog.open) return;
            sourceSerial++; dialog.classList.remove("cn-image-dialog");
        });
        return { render, selectTopic, suspend };
    }

    window.CIVIL_NOTES = Object.freeze({ create, hasTopic, hasChapter, chapterCodes, search, sourcesOf, FILES, CHAPTER_FILES, CODES });
})();