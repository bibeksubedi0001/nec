(function () {
    "use strict";

    const units = new Set(["m", "cm", "mm", "km", "kg", "mg", "g", "µg", "μg", "L", "l", "ml", "mL", "N", "kN", "MN", "kgf", "tf", "ft", "lb", "Pa", "kPa", "MPa", "GPa", "s", "sec", "min", "h", "hr", "hour", "day", "days", "year", "yr", "ha", "kW", "MW", "W", "kWh", "MWh", "J", "kJ", "MJ", "mol", "meq", "CFU", "PCU", "veh", "CV", "BOD", "vehicle", "vehicles", "lane", "person", "capita", "user", "rad", "rev", "hp", "tonne", "tonnes", "NRs", "Rs", "NPR", "dS", "S"]);
    ["cumec", "cumecs", "hectare", "hectares", "litre", "litres", "liter", "liters"].forEach(unit => units.add(unit));
    const functions = new Set(["sin", "cos", "tan", "cot", "sec", "ln", "log", "sqrt", "exp", "min", "max"]);
    const comparisons = new Set([
        "BS/FS", "UU/CU", "CU/CD", "BOD/COD", "HRT/SRT", "RAS/WAS", "ES/EF", "LS/LF", "TF/FF", "PV/EV", "CPI/SPI",
        "A/B", "A/D", "IS/NS", "NS/IS", "DLC/GSB", "CPM/PERT", "SFD/BMD", "BMD/SFD", "200/100",
        "M/C", "ISI/IS", "W/P", "OL/OH", "L/H", "BES/IEE", "IEE/EIA", "CRM/WMM", "DNA/RNA", "EPA/EPR",
        "Fe/Mn", "GCC/SCC", "HBW/HBO", "HBO/NHB", "II/III", "III/IV", "ILO/WHO", "ITB/BDS", "LA/AIV",
        "MDD/OMC", "NBC/NS", "NPC/IUCN", "Na/Mg", "O/D", "RC/MC", "SPT/CPT", "WBM/WMM", "WECS/DHM", "WL/EL"
    ]);
    const wordFractions = [
        ["total counted floor area", "plot area"], ["covered footprint", "plot area"],
        ["total diluted volume", "sample volume"], ["total mixture volume", "sample volume"],
        ["total system dry-solids inventory", "external daily dry-solids loss"],
        ["actual cost", "budgeted cost"], ["maximum demand", "average demand"],
        ["maximum demand", "total connected load"], ["volume of voids", "total volume"],
        ["water mass", "dry soil mass"], ["dry mass", "total volume"],
        ["available resistance", "mobilized resistance"], ["resisting moment", "overturning moment"],
        ["actual discharge", "theoretical discharge"], ["water stored", "water delivered"],
        ["benefits", "costs"], ["present benefits", "present costs"],
        ["quantity", "output"], ["intact strength", "remoulded strength"],
        ["horizontal", "vertical"], ["force", "area"], ["stress", "strain"],
        ["resisting forces", "driving forces"], ["remaining cost", "remaining budget"],
        ["(cost − residual)", "life"], ["mass", "density"],
        ["available effective minutes", "cycle minutes"], ["path length", "transit time"],
        ["Freely hanging length", "150"], ["constituent concentration × 50", "constituent equivalent mass"],
        ["coincident maximum demand", "total connected capacity"],
        ["maximum-day", "average-day"], ["peak-hour", "maximum-day-hourly-average"],
        ["total counted traffic", "number of observed whole days"], ["pressure", "settlement"],
        ["total vehicles", "observed days"], ["total equivalent standard axles", "commercial vehicles surveyed"],
        ["drawing length", "actual length"], ["one main division", "n"],
        ["present value of benefits", "present value of costs"],
        ["cash flow available for debt service", "scheduled debt service"],
        ["measured DO", "the appropriate saturation value"],
        ["weight", "volume"], ["volume", "mass"], ["weight", "g_planet"], ["weight", "g"],
        ["mass", "bulk density"], ["volume", "time"], ["area", "duty"], ["area", "wetted perimeter"],
        ["load", "actual area"], ["span", "20"], ["span", "240"], ["span", "150"],
        ["draft", "2"], ["height", "2"], ["d", "height"],
        ["effective length", "least lateral dimension"],
        ["effective length (Le)", "least radius of gyration (r)"],
        ["(natural water content - plastic limit)", "plasticity index"],
        ["(shaft power)", "(power delivered to the runner)"],
        ["(w * distance from right support)", "span"],
        ["volume stored", "volume delivered"], ["total load", "safe bearing capacity"],
        ["strength of the joint", "strength of the solid plate"],
        ["change in length", "original length"], ["average load", "plant capacity"],
        ["capacity factor", "load factor"], ["yield stress", "permissible stress"],
        ["characteristic strength", "permissible stress"], ["load", "standard load"],
        ["(original cost - scrap value)", "useful life"],
        ["actual power output", "theoretical hydraulic power"],
        ["NIR", "application efficiency"], ["FIR", "conveyance efficiency"]
    ];
    const escape = value => value.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
    const plain = html => html.replace(/<[^>]*>/g, "").replace(/&(?:lt|gt|amp|nbsp);/g, value => ({ "&lt;": "<", "&gt;": ">", "&amp;": "&", "&nbsp;": " " })[value]);

    function fraction(numerator, denominator, stackUnits = false) {
        return '<span class="cn-fraction" role="math" aria-label="' + escape(plain(numerator) + " divided by " + plain(denominator)) + '"><span class="cn-numerator">' + stack(numerator, stackUnits) + '</span><span class="cn-denominator">' + stack(denominator, stackUnits) + '</span></span>';
    }

    function tokenize(html) {
        const tokens = [];
        const pattern = /<(sub|sup)\b[^>]*>[\s\S]*?<\/\1>|<[^>]+>|[_^](?:\{[^{}]*\}|\([^()]*\)|[+\-\u2212]?\d+(?:\.\d+)?|[A-Za-z][A-Za-z0-9]*)|[\u00b2\u00b3\u00b9\u2070-\u207f]+|&(?:lt|gt|le|ge|amp|nbsp);|\d+(?:\/\d+){2,}|\d{1,3}(?:[, \u00a0\u202f]\d{3})+(?:\.\d+)?|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|[A-Za-z]'(?=\s*\/)|[\p{L}\p{M}\u2202\u2207\u2211\u222b\u2032\u2033]+|\s+|./gu;
        for (const match of html.matchAll(pattern)) {
            const value = match[0];
            let type = "punctuation";
            if (/^<(?:sub|sup)\b|^[_^]|^[\u00b2\u00b3\u00b9\u2070-\u207f]/.test(value)) type = "suffix";
            else if (value[0] === "<") type = "tag";
            else if (/^\s+$/.test(value)) type = "space";
            else if (/^\d/.test(value)) type = "number";
            else if (/^[\p{L}\p{M}\u2202\u2207\u2211\u222b\u2032\u2033]+$/u.test(value) || /^[A-Za-z]'$/.test(value)) type = "symbol";
            tokens.push({ value, type, start: match.index });
        }
        return tokens;
    }

    function mathematical(token) {
        if (!token) return false;
        if (["number", "suffix", "fraction"].includes(token.type) || ["°", "%"].includes(token.value)) return true;
        if (token.type !== "symbol") return false;
        return token.value.length <= 3 || /^[A-Z]{1,6}$/.test(token.value) || /^d[A-Z][A-Za-z]*$/.test(token.value) || /[ℓ\u0370-\u03ff\u2202\u2207\u2211\u222b\u{1d400}-\u{1d7ff}]/u.test(token.value) || functions.has(token.value) || units.has(token.value);
    }

    function balanced(tokens, index, direction) {
        const partners = direction > 0 ? { "(": ")", "[": "]", "{": "}" } : { ")": "(", "]": "[", "}": "{" };
        const opposite = partners[tokens[index]?.value];
        if (!opposite) return -1;
        const stack = [opposite];
        for (let cursor = index + direction; cursor >= 0 && cursor < tokens.length; cursor += direction) {
            const token = tokens[cursor];
            if (token.type === "tag") return -1;
            if (partners[token.value]) stack.push(partners[token.value]);
            else if (token.value === stack[stack.length - 1]) {
                stack.pop();
                if (!stack.length) return cursor;
            }
        }
        return -1;
    }

    function absoluteEnd(tokens, start, direction) {
        for (let cursor = start + direction; cursor >= 0 && cursor < tokens.length; cursor += direction) {
            if (tokens[cursor].type === "tag") break;
            if (tokens[cursor].value === "|") return cursor;
        }
        return -1;
    }

    function leftFactor(tokens, end) {
        let start = end;
        while (tokens[start]?.type === "suffix") start--;
        if (tokens[start]?.value === "|") {
            start = absoluteEnd(tokens, start, -1);
            if (start < 0) return -1;
        } else if (/^[)\]}]$/.test(tokens[start]?.value || "")) {
            start = balanced(tokens, start, -1);
            if (start < 0) return -1;
        } else if (!mathematical(tokens[start])) return -1;
        while (start > 0 && (mathematical(tokens[start - 1]) || tokens[start - 1].value === "|" && absoluteEnd(tokens, start - 1, -1) >= 0)) start = leftFactor(tokens, start - 1);
        if (start >= 2 && tokens[start - 1].type === "space" && functions.has(tokens[start - 2].value)) start -= 2;
        if (tokens[start - 1]?.value === "√") start--;
        return start;
    }

    function rightFactor(tokens, start) {
        let end = start;
        if (["+", "-", "−"].includes(tokens[end]?.value)) end++;
        if (tokens[end]?.value === "√") end++;
        if (tokens[end]?.value === "|") {
            end = absoluteEnd(tokens, end, 1);
            if (end < 0) return -1;
        } else if (/^[([{]$/.test(tokens[end]?.value || "")) {
            end = balanced(tokens, end, 1);
            if (end < 0) return -1;
        } else if (!mathematical(tokens[end])) return -1;
        while (end + 1 < tokens.length) {
            if (tokens[end + 1].type === "space" && functions.has(tokens[end].value) && mathematical(tokens[end + 2])) {
                end = rightFactor(tokens, end + 2);
                if (end < 0) return -1;
            } else if (tokens[end + 1].value === "|") {
                const close = absoluteEnd(tokens, end + 1, 1);
                if (close < 0) break;
                end = close;
            } else if (mathematical(tokens[end + 1])) end++;
            else if (/^[([{]$/.test(tokens[end + 1].value)) {
                const close = balanced(tokens, end + 1, 1);
                if (close < 0) return -1;
                end = close;
            } else break;
        }
        return end;
    }

    function unitExpression(tokens) {
        const words = tokens.filter(token => token.type === "symbol");
        return words.length > 0 && words.every(token => units.has(token.value)) && !tokens.some(token => token.type === "number" || /^<sub\b/.test(token.value));
    }

    function stack(html, stackUnits = false) {
        const tokens = tokenize(html);
        for (const token of tokens) {
            if (token.type === "suffix" && /^[_^][({]/.test(token.value) && token.value.includes("/")) {
                token.value = token.value.slice(0, 2) + stack(token.value.slice(2, -1), stackUnits) + token.value.slice(-1);
            }
        }
        for (let cursor = 0; cursor < tokens.length; cursor++) {
            if (tokens[cursor].value !== "/") continue;
            let left = cursor - 1, right = cursor + 1;
            while (tokens[left]?.type === "space") left--;
            while (tokens[right]?.type === "space") right++;
            const start = leftFactor(tokens, left), end = rightFactor(tokens, right);
            if (start < 0 || end < 0) continue;
            const numerator = tokens.slice(start, left + 1), denominator = tokens.slice(right, end + 1);
            const rawLeft = numerator.map(token => token.value).join(""), rawRight = denominator.map(token => token.value).join("");
            const before = tokens.slice(Math.max(0, start - 6), start).map(token => token.value).join("");
            const after = tokens.slice(end + 1, end + 4).map(token => token.value).join("");
            const nearby = tokens.slice(Math.max(0, start - 10), Math.min(tokens.length, end + 10)).map(token => token.value).join("");
            const equation = /[=≈≤≥×÷]/.test(nearby);
            const directEquation = /[=≈≤≥]\s*$/.test(before) || /^\s*[=≈≤≥]/.test(after);
            const variableProduct = directEquation && /^(?:W|Pa|N)$/.test(rawLeft) && rawRight === "L"
                || equation && /^(?:W|L)$/.test(rawLeft) && rawRight === "g";
            if (!stackUnits && unitExpression(numerator) && unitExpression(denominator) && !variableProduct) continue;
            if (!stackUnits && /(?:mg|g|kg|µg|μg)\s*$/.test(before) && /^(?:O2|Cl2|CaCO3)$/.test(plain(rawLeft)) && unitExpression(denominator)) continue;
            if (/^(?:and|or|the|use|dry|wet|go|no|in|of|on|by)$/.test(rawLeft) || /^(?:and|or|the|use|dry|wet|go|no|in|of|on|by)$/.test(rawRight)) continue;
            if (/[A-Z]{3,}\d*-\d*$/.test(before) || /(?:19|20)\d{2}\/$/.test(before)) continue;
            if (!directEquation && /^(?:19|20)\d{2}$/.test(rawLeft) && (/^\d{1,2}$/.test(rawRight) || /^(?:19|20)\d{2}$/.test(rawRight))) continue;
            if (/^Q\d+$/.test(rawLeft) && /^Q\d+$/.test(rawRight)) continue;
            if (!equation && (/^(?:19|20)\d{2}$/.test(rawRight) || /\d\/$/.test(before) || /^\/\d/.test(after) || /^(?:M\d+)$/.test(rawLeft) || /\d:$/.test(before))) continue;
            if (!directEquation && comparisons.has(plain(rawLeft) + "/" + plain(rawRight))) continue;
            if (!equation && /^(?:30\/40|40\/50|60\/70|80\/100|100\/150)$/.test(rawLeft + "/" + rawRight)) continue;
            if (!stackUnits && !equation && left !== cursor - 1 && right !== cursor + 1) continue;
            if (tokens[start - 1]?.value === "\\" || tokens[end + 1]?.value === "\\") continue;
            const replacement = { type: "fraction", value: fraction(rawLeft, rawRight, stackUnits), start: tokens[start].start };
            tokens.splice(start, end - start + 1, replacement);
            cursor = start;
        }
        return tokens.map(token => token.value).join("");
    }

    function format(html, { stackUnits = false } = {}) {
        const parts = html.split(/(\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\$\$[\s\S]*?\$\$|\$[^$\n]*\$)/g);
        return parts.map((part, index) => {
            if (index % 2) return stackedTex(part, stackUnits);
            const glyphs = { "½": ["1", "2"], "⅓": ["1", "3"], "⅔": ["2", "3"], "¼": ["1", "4"], "¾": ["3", "4"], "⅕": ["1", "5"], "⅖": ["2", "5"], "⅗": ["3", "5"], "⅘": ["4", "5"], "⅙": ["1", "6"], "⅚": ["5", "6"], "⅛": ["1", "8"], "⅜": ["3", "8"], "⅝": ["5", "8"], "⅞": ["7", "8"] };
            let result = part.split(/(<[^>]+>)/g).map((segment, segmentIndex) => {
                if (segmentIndex % 2) return segment;
                let formatted = segment.replace(/[½⅓⅔¼¾⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞]/g, glyph => fraction(...glyphs[glyph], stackUnits));
                for (const [numerator, denominator] of wordFractions) {
                    const literal = value => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                    const expression = new RegExp("(?<![\\p{L}\\p{N}_])" + literal(numerator) + "\\s*/\\s*" + literal(denominator) + "(?![\\p{L}\\p{N}_])", "giu");
                    formatted = formatted.replace(expression, match => {
                        const [top, bottom] = match.split("/");
                        return '<cn-math-protected data-fraction="' + escape(top.trim()) + '" data-denominator="' + escape(bottom.trim()) + '"></cn-math-protected>';
                    });
                }
                return formatted;
            }).join("");
            result = result.replace(/<(sub|sup)>([^<>]*\/[^<>]*)<\/\1>/g, (_, tag, value) => "<" + tag + ">" + stack(value, stackUnits) + "</" + tag + ">");
            result = stack(result, stackUnits);
            return result.replace(/<cn-math-protected data-fraction="([^"]*)" data-denominator="([^"]*)"><\/cn-math-protected>/g, (_, numerator, denominator) => fraction(numerator, denominator, stackUnits));
        }).join("");
    }

    function stackedTex(expression, stackUnits = false) {
        const textCommands = new Set(["text", "textrm", "textsf", "texttt", "mbox", "mathrm", "operatorname"]);
        const groupCommands = new Map([["frac", 2], ["dfrac", 2], ["tfrac", 2], ["binom", 2], ["sqrt", 1], ["mathbf", 1], ["mathit", 1], ["mathsf", 1], ["mathcal", 1], ["overline", 1], ["underline", 1], ["hat", 1], ["bar", 1], ["vec", 1]]);
        const boundaries = new Set(["int", "iint", "iiint", "oint", "sum", "prod", "lim", "to", "rightarrow", "Rightarrow", "approx", "equiv", "le", "leq", "ge", "geq", "ne", "neq", "propto", "pm", "mp", "begin", "end", "hline", "tag", "label"]);
        const tokens = [];
        let position = 0;

        function groupAt(start) {
            const opening = expression[start];
            const closing = { "{": "}", "(": ")", "[": "]" }[opening];
            if (!closing) return null;
            const closings = [closing];
            for (let cursor = start + 1; cursor < expression.length; cursor++) {
                if (expression[cursor] === "\\") {
                    if (!/[A-Za-z]/.test(expression[cursor + 1] || "")) cursor++;
                    continue;
                }
                const next = { "{": "}", "(": ")", "[": "]" }[expression[cursor]];
                if (next) closings.push(next);
                else if (expression[cursor] === closings[closings.length - 1]) {
                    closings.pop();
                    if (!closings.length) return { content: expression.slice(start + 1, cursor), end: cursor + 1, opening, closing };
                }
            }
            return null;
        }

        function atomAt(start) {
            const group = groupAt(start);
            if (group) return { raw: group.opening + stackedTex(group.content, stackUnits) + group.closing, end: group.end, kind: "atom" };
            if (expression[start] === "|") {
                const end = expression.indexOf("|", start + 1);
                if (end > start + 1) return { raw: "|" + stackedTex(expression.slice(start + 1, end), stackUnits) + "|", end: end + 1, kind: "atom" };
            }
            const glyph = { "\u00bd": [1, 2], "\u2153": [1, 3], "\u2154": [2, 3], "\u00bc": [1, 4], "\u00be": [3, 4], "\u2155": [1, 5], "\u2156": [2, 5], "\u2157": [3, 5], "\u2158": [4, 5], "\u2159": [1, 6], "\u215a": [5, 6], "\u215b": [1, 8], "\u215c": [3, 8], "\u215d": [5, 8], "\u215e": [7, 8] }[expression[start]];
            if (glyph) return { raw: "\\dfrac{" + glyph[0] + "}{" + glyph[1] + "}", end: start + 1, kind: "atom" };
            if (expression.startsWith("\\left", start)) {
                const opening = /^\\left\s*(\\[{}]|[([|.]|\\langle)/.exec(expression.slice(start));
                if (opening) {
                    let depth = 1;
                    const pairs = /\\(left|right)\s*(\\[{}]|[()[\]|.]|\\[lr]angle)/g;
                    pairs.lastIndex = start + opening[0].length;
                    for (let pair; (pair = pairs.exec(expression));) {
                        depth += pair[1] === "left" ? 1 : -1;
                        if (!depth) return { raw: opening[0] + stackedTex(expression.slice(start + opening[0].length, pair.index), stackUnits) + pair[0], end: pairs.lastIndex, kind: "atom" };
                    }
                }
            }
            const command = /^\\([A-Za-z]+|.)/.exec(expression.slice(start));
            if (command) {
                const name = command[1];
                let end = start + command[0].length;
                if ([",", ";", ":", "!", " ", "quad", "qquad", "enspace", "thinspace"].includes(name)) return { raw: command[0], end, kind: "space" };
                if (["times", "cdot"].includes(name)) return { raw: command[0], end, kind: "multiply" };
                if (name === "div") return { raw: command[0], end, kind: "division" };
                let raw = ["frac", "tfrac"].includes(name) ? "\\dfrac" : command[0];
                if (name === "sqrt" && expression[end] === "[") {
                    const index = groupAt(end);
                    if (index) { raw += "[" + stackedTex(index.content, stackUnits) + "]"; end = index.end; }
                }
                const textArgument = textCommands.has(name) || ["begin", "end", "tag", "label"].includes(name);
                const argumentsCount = textArgument ? 1 : groupCommands.get(name) || 0;
                for (let argument = 0; argument < argumentsCount; argument++) {
                    const spaces = /^\s*/.exec(expression.slice(end))[0];
                    const next = groupAt(end + spaces.length);
                    if (!next || next.opening !== "{") break;
                    raw += spaces + "{" + (textArgument && !(stackUnits && name === "mathrm") ? next.content : stackedTex(next.content, stackUnits)) + "}";
                    end = next.end;
                }
                return { raw, end, kind: boundaries.has(name) || ["(", ")", "[", "]", "\\"].includes(name) ? "boundary" : "atom" };
            }
            const literal = /^(?:\d+(?:\.\d+)?|[A-Za-z\u0370-\u03ff]+|[\u00b2\u00b3\u00b9\u2070-\u207f]+)/.exec(expression.slice(start));
            return literal ? { raw: literal[0], end: start + literal[0].length, kind: "atom" } : null;
        }

        while (position < expression.length) {
            const spaces = /^\s+/.exec(expression.slice(position));
            if (spaces) {
                tokens.push({ raw: spaces[0], kind: "space" });
                position += spaces[0].length;
                continue;
            }
            if (["^", "_"].includes(expression[position]) && (tokens[tokens.length - 1]?.kind === "atom" || /^\\(?:int|iint|iiint|oint|sum|prod|lim)(?![A-Za-z])/.test(tokens[tokens.length - 1]?.raw || ""))) {
                const start = position + 1;
                const group = groupAt(start);
                const command = expression[start] === "\\" ? atomAt(start) : null;
                const suffix = group ? { raw: group.opening + stackedTex(group.content, stackUnits) + group.closing, end: group.end } : command || { raw: expression[start] || "", end: start + 1 };
                tokens[tokens.length - 1].raw += expression[position] + suffix.raw;
                position = suffix.end;
                continue;
            }
            const atom = atomAt(position);
            if (atom) {
                tokens.push({ raw: atom.raw, kind: atom.kind });
                position = atom.end;
            } else {
                const raw = expression[position++];
                tokens.push({ raw, kind: raw === "/" || raw === "\u00f7" ? "division" : ["*", "\u00d7", "\u00b7"].includes(raw) ? "multiply" : "boundary" });
            }
        }
        for (let cursor = 0; cursor < tokens.length; cursor++) {
            if (tokens[cursor].kind !== "division") continue;
            let left = cursor - 1, right = cursor + 1;
            while (tokens[left]?.kind === "space") left--;
            while (tokens[right]?.kind === "space") right++;
            if (tokens[left]?.kind !== "atom" || tokens[right]?.kind !== "atom") continue;
            let start = left, end = right;
            while (start > 0) {
                let previous = start - 1;
                while (tokens[previous]?.kind === "space") previous--;
                if (tokens[previous]?.kind === "multiply") {
                    previous--;
                    while (tokens[previous]?.kind === "space") previous--;
                }
                if (tokens[previous]?.kind !== "atom") break;
                start = previous;
            }
            while (tokens[end + 1]?.kind === "atom") end++;
            const numerator = tokens.slice(start, left + 1).map(token => token.raw).join("");
            const denominator = tokens.slice(right, end + 1).map(token => token.raw).join("");
            if (comparisons.has(numerator + "/" + denominator) && !tokens.slice(0, start).some(token => /[=\u2248]/.test(token.raw))) continue;
            tokens.splice(start, end - start + 1, { raw: "\\dfrac{" + numerator + "}{" + denominator + "}", kind: "atom" });
            cursor = start;
        }
        return tokens.map(token => token.raw).join("");
    }

    const preparedExplanations = new WeakSet();

    function prepareExplanations(root) {
        const selector = ".cn-source-explanation, .fp-explanation > div, .cv-solution";
        const nodes = [...(root.matches(selector) ? [root] : []), ...root.querySelectorAll(selector)];
        for (const node of nodes) {
            if (preparedExplanations.has(node)) continue;
            node.innerHTML = format(node.innerHTML, { stackUnits: true });
            node.classList.add("cn-formatted-explanation");
            preparedExplanations.add(node);
        }
    }

    window.CIVIL_NOTE_MATH = Object.freeze({ format, prepareExplanations });
})();