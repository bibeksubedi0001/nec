(function () {
    "use strict";

    const units = new Set(["m", "cm", "mm", "km", "kg", "mg", "g", "µg", "μg", "L", "l", "ml", "mL", "N", "kN", "MN", "kgf", "tf", "ft", "lb", "Pa", "kPa", "MPa", "GPa", "s", "sec", "min", "h", "hr", "hour", "day", "days", "year", "yr", "ha", "kW", "MW", "W", "kWh", "MWh", "J", "kJ", "MJ", "mol", "meq", "CFU", "PCU", "veh", "CV", "BOD", "vehicle", "vehicles", "lane", "person", "capita", "user", "rad", "rev", "hp", "tonne", "tonnes", "NRs", "Rs", "NPR", "dS", "S"]);
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
        ["measured DO", "the appropriate saturation value"]
    ];
    const escape = value => value.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
    const plain = html => html.replace(/<[^>]*>/g, "").replace(/&(?:lt|gt|amp|nbsp);/g, value => ({ "&lt;": "<", "&gt;": ">", "&amp;": "&", "&nbsp;": " " })[value]);

    function fraction(numerator, denominator) {
        return '<span class="cn-fraction" role="math" aria-label="' + escape(plain(numerator) + " divided by " + plain(denominator)) + '"><span class="cn-numerator">' + stack(numerator) + '</span><span class="cn-denominator">' + stack(denominator) + '</span></span>';
    }

    function tokenize(html) {
        const tokens = [];
        const pattern = /<(sub|sup)\b[^>]*>[\s\S]*?<\/\1>|<[^>]+>|&(?:lt|gt|le|ge|amp|nbsp);|\d+(?:\/\d+){2,}|\d{1,3}(?:[, \u00a0\u202f]\d{3})+(?:\.\d+)?|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|[A-Za-z]'(?=\s*\/)|[\p{L}\p{M}\u2202\u2207\u2211\u222b\u2032\u2033]+|\s+|./gu;
        for (const match of html.matchAll(pattern)) {
            const value = match[0];
            let type = "punctuation";
            if (/^<(?:sub|sup)\b/.test(value)) type = "suffix";
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
        return token.value.length <= 3 || /^[A-Z]{1,6}$/.test(token.value) || /^d[A-Z][A-Za-z]*$/.test(token.value) || /[ℓ\u0370-\u03ff\u2202\u2207\u2211\u222b\u{1d400}-\u{1d7ff}]/u.test(token.value) || functions.has(token.value);
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

    function stack(html) {
        const tokens = tokenize(html);
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
            if (unitExpression(numerator) && unitExpression(denominator) && !variableProduct) continue;
            if (/(?:mg|g|kg|µg|μg)\s*$/.test(before) && /^(?:O2|Cl2|CaCO3)$/.test(plain(rawLeft)) && unitExpression(denominator)) continue;
            if (/^(?:and|or|the|use|dry|wet|go|no|in|of|on|by)$/.test(rawLeft) || /^(?:and|or|the|use|dry|wet|go|no|in|of|on|by)$/.test(rawRight)) continue;
            if (/[A-Z]{3,}\d*-\d*$/.test(before) || /(?:19|20)\d{2}\/$/.test(before)) continue;
            if (!directEquation && /^(?:19|20)\d{2}$/.test(rawLeft) && (/^\d{1,2}$/.test(rawRight) || /^(?:19|20)\d{2}$/.test(rawRight))) continue;
            if (/^Q\d+$/.test(rawLeft) && /^Q\d+$/.test(rawRight)) continue;
            if (!equation && (/^(?:19|20)\d{2}$/.test(rawRight) || /\d\/$/.test(before) || /^\/\d/.test(after) || /^(?:M\d+)$/.test(rawLeft) || /\d:$/.test(before))) continue;
            if (!directEquation && comparisons.has(plain(rawLeft) + "/" + plain(rawRight))) continue;
            if (!equation && /^(?:30\/40|40\/50|60\/70|80\/100|100\/150)$/.test(rawLeft + "/" + rawRight)) continue;
            if (!equation && left !== cursor - 1 && right !== cursor + 1) continue;
            if (tokens[start - 1]?.value === "\\" || tokens[end + 1]?.value === "\\") continue;
            const replacement = { type: "fraction", value: fraction(rawLeft, rawRight), start: tokens[start].start };
            tokens.splice(start, end - start + 1, replacement);
            cursor = start;
        }
        return tokens.map(token => token.value).join("");
    }

    function format(html) {
        const parts = html.split(/(\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\$\$[\s\S]*?\$\$|\$[^$\n]*\$)/g);
        return parts.map((part, index) => {
            if (index % 2) return part.replace(/\\(?:tfrac|frac)\b/g, "\\dfrac");
            const glyphs = { "½": ["1", "2"], "⅓": ["1", "3"], "⅔": ["2", "3"], "¼": ["1", "4"], "¾": ["3", "4"], "⅕": ["1", "5"], "⅖": ["2", "5"], "⅗": ["3", "5"], "⅘": ["4", "5"], "⅙": ["1", "6"], "⅚": ["5", "6"], "⅛": ["1", "8"], "⅜": ["3", "8"], "⅝": ["5", "8"], "⅞": ["7", "8"] };
            let result = part.replace(/[½⅓⅔¼¾⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞]/g, glyph => fraction(...glyphs[glyph]));
            result = result.replace(/<(sub|sup)>([^<>]*\/[^<>]*)<\/\1>/g, (_, tag, value) => "<" + tag + ">" + stack(value) + "</" + tag + ">");
            for (const [numerator, denominator] of wordFractions) {
                const literal = value => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                const expression = new RegExp(literal(numerator) + "\\s*/\\s*" + literal(denominator), "gi");
                result = result.replace(expression, match => {
                    const [top, bottom] = match.split("/");
                    return '<cn-math-protected data-fraction="' + escape(top.trim()) + '" data-denominator="' + escape(bottom.trim()) + '"></cn-math-protected>';
                });
            }
            result = stack(result);
            return result.replace(/<cn-math-protected data-fraction="([^"]*)" data-denominator="([^"]*)"><\/cn-math-protected>/g, (_, numerator, denominator) => fraction(numerator, denominator));
        }).join("");
    }

    window.CIVIL_NOTE_MATH = Object.freeze({ format });
})();