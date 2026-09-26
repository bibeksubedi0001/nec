(function () {
    "use strict";
    window.CIVIL_CAPSULE_NOTE_TOPICS = window.CIVIL_CAPSULE_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_CAPSULE_NOTE_TOPICS, {
      "ACiE0401": {
        "code": "ACiE0401",
        "questionCount": 31,
        "formulaSheet": "<ul><li><strong>V = dM/dx</strong> and <strong>dV/dx = −q</strong>, with downward load intensity q positive; the change in moment between two sections equals the signed area of the shear diagram between them.</li><li>Simple span, central load P: reactions P/2 and <strong>M<sub>max</sub> = PL/4</strong>.</li><li>Simple span, load P at distance a from the left support: R<sub>A</sub> = P(L − a)/L and peak moment Pa(L − a)/L under the load.</li><li>Equal loads W at both third points: reactions W and constant middle-third moment <strong>WL/3</strong>.</li><li>Full-span UDL w: <strong>V = wL/2 − wx</strong>, <strong>M = wx(L − x)/2</strong> and <strong>M<sub>max</sub> = wL<sup>2</sup>/8</strong> at midspan; with total load W, M<sub>max</sub> = WL/8.</li><li>Load rising linearly from zero to w over span L: R<sub>A</sub> = wL/6 and zero shear at <strong>x = L/√3</strong> from the unloaded end.</li><li>Cantilever with tip force P: shear P throughout and <strong>M = −P(L − x)</strong> measured from the root, peak magnitude PL at the fixed end.</li><li>Couple M<sub>0</sub> on a cantilever: zero shear and constant moment M<sub>0</sub> between the root and the couple.</li></ul>",
        "blocks": [
          {
            "id": "sign-conventions-and-magnitudes",
            "title": "Sign conventions: sagging curvature and signed force components",
            "html": "<p>Every shear and moment calculation starts with a declared sign convention. Under the common <strong>sagging-positive</strong> rule, a positive bending moment shortens the top fibres and lengthens the bottom fibres of an initially straight horizontal beam, so the elastic curve is concave upward, which some texts describe as convex downward. That statement describes the curvature of the beam itself, not the side of the axis on which a moment diagram is plotted; plotting habits differ between books, so read the sign labels on any diagram.</p><p>A computed component has a sign only relative to the chosen positive direction. With upward taken positive, a vertical component of −18 kN means a force of 18 kN acting downward. Its <strong>magnitude</strong> is the non-negative size of the vector, 18 kN; the minus sign reports direction, not size. In technical usage, magnitude simply means size.</p>",
            "moreHtml": "<p>Hogging (negative) moment reverses the fibre picture: tension at the top and compression at the bottom, as at the root of a cantilever carrying downward load. Keep one convention through a whole calculation; switching part-way is the usual source of sign errors.</p>",
            "sources": [
              {
                "id": "CAP4-04-00012",
                "label": "p. 15; topic 4 point 12"
              },
              {
                "id": "CAP4-05-00070",
                "label": "p. 21; topic 5 point 68"
              }
            ]
          },
          {
            "id": "differential-relations",
            "title": "Differential relations linking load, shear and bending moment",
            "html": "<p>Equilibrium of a short beam slice gives two working rules: <strong>V = dM/dx</strong> and <strong>dV/dx = −q</strong>, with downward load intensity q taken positive. Differentiating moves one step down the chain from moment to shear to load; integrating moves back up, and the change of moment between two sections equals the signed area of the shear diagram between them.</p><ul><li>If M(x) = 18x − 3x<sup>2</sup> kN·m, then V(x) = 18 − 6x, so V = +6 kN at x = 2 m. The moment there, 24 kN·m, is a different quantity with different units; dividing M by x is not a route to shear.</li><li>If V(x) = 12 − x<sup>2</sup> kN, then dV/dx = −2x and q = 2x kN/m downward: a parabolic shear diagram signals a linearly varying load.</li><li>With constant shear −4 kN over 3 m and no applied couple, ΔM = −4 × 3 = −12 kN·m, so a moment of +10 kN·m at the left section becomes −2 kN·m at the right. The −12 kN·m is the change, not the final value.</li><li>Where M is constant over an interval free of concentrated actions, V = dM/dx = 0. Bending stress and curvature still exist, and an independent axial force may coexist; the moment diagram alone says nothing about axial force.</li></ul>",
            "sources": [
              {
                "id": "CAP4-04-00006",
                "label": "p. 15; topic 4 point 6"
              },
              {
                "id": "CAP4-04-00078",
                "label": "p. 18; topic 4 point 76"
              },
              {
                "id": "CAP4-04-00091",
                "label": "p. 18; topic 4 point 91"
              },
              {
                "id": "CAP4-04-00014",
                "label": "pp. 15, 17; topic 4 point 14; topic 4 point 63"
              }
            ]
          },
          {
            "id": "zero-shear-extremes-contraflexure",
            "title": "Zero shear, moment extremes and points of contraflexure",
            "html": "<p>Because shear is the slope of the moment diagram, the sign of V shows whether M is rising or falling. A <strong>local maximum of moment</strong> is established where shear changes from positive to negative through zero; a change from negative to positive marks a local minimum. Zero shear by itself is not enough: the moment may be constant over a whole interval, or the slope may touch zero without changing sign.</p><p>For a simple span carrying a uniform load over its whole length, symmetry gives equal reactions, shear passes through zero at midspan and the sagging moment peaks there. That is why the middle region of such a beam is proportioned for bending, but the conclusion comes from the loading, not from the words simply supported alone.</p><p>A <strong>point of contraflexure</strong> is a section where the bending moment changes sign, for example in a continuous beam whose moment runs smoothly from −8 kN·m to +6 kN·m. Curvature M/EI reverses there, yet the beam remains continuous with a continuous slope. Zero moment does not create a hinge, and merely touching zero without a sign change is not contraflexure.</p>",
            "sources": [
              {
                "id": "CAP4-04-00002",
                "label": "p. 15; topic 4 point 2"
              },
              {
                "id": "CAP4-04-00071",
                "label": "pp. 17, 18; topic 4 point 69; topic 4 point 78"
              },
              {
                "id": "CAP4-05-00108",
                "label": "p. 22; topic 5 point 106"
              }
            ]
          },
          {
            "id": "couples-and-end-moments",
            "title": "Applied couples: end couples, interior jumps and zero end moments",
            "html": "<p>A couple has no net force, so it enters moment equilibrium without disturbing vertical force balance. On a pin–roller beam with equal end couples M acting in opposite rotational senses (one clockwise, one anticlockwise), the couples cancel in overall moment equilibrium, both reactions are zero and every interior section carries <strong>zero shear and a constant moment of magnitude M</strong>: uniform bending. Couples acting in the same rotational sense would instead need a reaction pair of 2M/L, giving constant nonzero shear.</p><p>A concentrated couple applied inside the span makes the moment diagram <strong>jump</strong> by the value of the couple while the shear stays continuous, because no transverse force acts there. The direction of the jump depends on the moment and couple sign conventions adopted.</p><p>Conversely, when a pin–roller beam ends at its supports, carries only transverse loads within the span and has no applied end couples or overhangs, the ideal supports provide no reaction couple, so the <strong>end moments are zero</strong>. A simple support beneath a continuous beam is different: it restrains deflection but does not force the internal moment there to vanish.</p>",
            "moreHtml": "<p>Same-sense case in detail: with both end couples clockwise, moments about the left support give R<sub>B</sub> = 2M/L upward and R<sub>A</sub> = 2M/L downward. Taking sagging as positive, the internal moment is M(x) = M − 2Mx/L, running from +M at the left end through zero at midspan to −M at the right end.</p>",
            "sources": [
              {
                "id": "CAP4-04-00001",
                "label": "p. 15; topic 4 point 1"
              },
              {
                "id": "CAP4-04-00011",
                "label": "p. 15; topic 4 point 11"
              },
              {
                "id": "CAP4-04-00049",
                "label": "p. 17; topic 4 point 47"
              }
            ]
          },
          {
            "id": "couples-on-cantilevers",
            "title": "Couples on cantilevers: constant moment without shear",
            "html": "<p>A cantilever carrying only a couple shows clearly that moment and shear are independent quantities. Cut the beam anywhere between the root and the couple and keep the free-side segment: it contains the couple and nothing else, so equilibrium requires <strong>zero shear</strong> and an internal moment equal to the couple. The moment diagram is a rectangle.</p><ul><li>With a 12 kN·m couple at the tip, every section carries 12 kN·m and zero shear. The maximum moment equals the applied couple and does not grow with span, unlike the moment produced by a tip force.</li><li>With a 9 kN·m couple at midspan, the fixed end supplies a 9 kN·m reaction couple and no vertical reaction. The internal moment is 9 kN·m from the root to the couple and zero from the couple to the free end, because the outer segment carries no load.</li></ul><p>Self-weight is ignored in these idealizations; including it would add shear and a parabolic moment component.</p>",
            "sources": [
              {
                "id": "CAP4-04-00015",
                "label": "p. 15; topic 4 point 15"
              },
              {
                "id": "CAP4-05-00052",
                "label": "p. 20; topic 5 point 51"
              },
              {
                "id": "CAP4-05-00110",
                "label": "p. 22; topic 5 point 108"
              }
            ]
          },
          {
            "id": "point-loads-simple-span",
            "title": "Point loads on a simple span: triangular diagrams and the design section",
            "html": "<p>For a statically determinate beam, reactions and bending moments follow from statics alone. A central point load P gives reactions P/2; the moment rises linearly from zero to <strong>(P/2)(L/2) = PL/4</strong> and falls linearly back to zero, so the diagram is a triangle. A point force makes the shear jump, not the moment, which is why the triangle is continuous at its apex.</p><p>The critical section is read from the diagram, not assumed to be at midspan. For a 6 m span with a 24 kN load 2 m from the left support, the reactions are 24 × 4/6 = 16 kN and 8 kN. Shear changes from +16 kN to −8 kN under the load, so the moment peaks there at 16 × 2 = 32 kN·m, whereas the midspan value is only 8 × 3 = 24 kN·m. Midspan governs many symmetric load cases, not all of them.</p><p>Because a determinate moment diagram depends only on loads and geometry, changing the section depth, with the applied load unchanged and self-weight excluded, leaves the diagram unchanged; it alters bending stress, curvature and deflection instead. That independence fails if self-weight changes with the section or if the structure is indeterminate, where member stiffness shares the load.</p>",
            "sources": [
              {
                "id": "CAP4-04-00005",
                "label": "p. 15; topic 4 point 5"
              },
              {
                "id": "CAP4-04-00026",
                "label": "p. 16; topic 4 point 25"
              },
              {
                "id": "CAP4-05-00046",
                "label": "p. 20; topic 5 point 45"
              }
            ]
          },
          {
            "id": "third-point-loads",
            "title": "Two equal loads at the third points: a shear-free middle zone",
            "html": "<p>Place two equal downward loads W at L/3 from each support of a simple span. Symmetry makes each reaction equal to one load, W. The shear diagram then has three steps: +W from the left support to the first load, zero between the loads and −W beyond the second load. Any section in the first third, such as one at L/6 from the left support, therefore carries shear equal to the full reaction.</p><p>Zero shear between the loads means a <strong>constant moment WL/3</strong> over the middle third, where W is each individual load rather than their sum. As a check, a 9 m span with 30 kN loads 3 m from each support has reactions of 30 kN and a midspan moment of 30 × 4.5 − 30 × 1.5 = 90 kN·m, which equals 30 × 9/3. Symmetric two-point loading is therefore a convenient way to create a region of pure bending between the loads.</p>",
            "sources": [
              {
                "id": "CAP4-04-00008",
                "label": "p. 15; topic 4 point 8"
              },
              {
                "id": "CAP4-05-00138",
                "label": "p. 23; topic 5 point 139"
              }
            ]
          },
          {
            "id": "full-span-udl",
            "title": "Full-span UDL on a simple span: linear shear, parabolic moment",
            "html": "<p>For a simple span carrying uniform intensity w over its full length L, each reaction is wL/2 and the load to the left of a cut at x is wx. Hence <strong>V = wL/2 − wx</strong>, a straight line of slope −w, and <strong>M = wx(L − x)/2</strong>, a parabola. The quadratic expression belongs to moment; confusing it with shear is a common slip.</p><ul><li><strong>Greatest shear magnitude</strong> occurs just inside either support. For 5 kN/m on 8 m the total load is 40 kN, the reactions are 20 kN and V = 20 − 5x runs from +20 kN to −20 kN: the largest magnitude, 20 kN, appears at both ends although the signed values differ.</li><li><strong>Greatest moment</strong> occurs where V = 0, at x = L/2, giving M<sub>max</sub> = wL<sup>2</sup>/8. For 12 kN/m on 6 m this is 12 × 36/8 = 54 kN·m at midspan.</li></ul><p>The midspan location relies on full-span uniform intensity with simple end conditions. A moving uniform load longer than the span reproduces this case once it covers the whole span.</p>",
            "moreHtml": "<p>Derivation: integrating the shear from the zero end moment gives M = wLx/2 − wx<sup>2</sup>/2 = wx(L − x)/2. Setting dM/dx = V = 0 gives x = L/2, and substitution gives M<sub>max</sub> = wL<sup>2</sup>/8.</p>",
            "sources": [
              {
                "id": "CAP4-04-00013",
                "label": "p. 15; topic 4 point 13"
              },
              {
                "id": "CAP4-04-00050",
                "label": "p. 17; topic 4 point 48"
              },
              {
                "id": "CAP4-04-00090",
                "label": "p. 18; topic 4 point 90"
              }
            ]
          },
          {
            "id": "span-scaling-udl",
            "title": "Scaling the UDL maximum moment: fixed intensity versus fixed total load",
            "html": "<p>The result M<sub>max</sub> = wL<sup>2</sup>/8 hides a trap about what stays constant when the span changes.</p><table><thead><tr><th scope='col'>Quantity held fixed</th><th scope='col'>Maximum moment</th><th scope='col'>Effect of doubling the span</th></tr></thead><tbody><tr><td>Intensity w per metre</td><td>wL<sup>2</sup>/8</td><td>Four times larger; total load also doubles</td></tr><tr><td>Total load W spread uniformly</td><td>WL/8</td><td>Two times larger; intensity halves</td></tr></tbody></table><p>Read the data carefully: the same load per metre and the same total load spread over the span are different statements. With fixed w, both the load and its lever arm grow, so the moment scales with L<sup>2</sup>; with fixed W, only the lever arm grows, so the moment scales with L.</p>",
            "sources": [
              {
                "id": "CAP4-04-00092",
                "label": "p. 18; topic 4 point 93"
              },
              {
                "id": "CAP4-04-00093",
                "label": "p. 18; topic 4 point 93"
              }
            ]
          },
          {
            "id": "varying-load-zero-shear",
            "title": "Linearly varying load: locating zero shear at L/√3",
            "html": "<p>Let the intensity rise linearly from zero at support A to w at support B over a simple span L. The total load is wL/2 acting 2L/3 from A, so R<sub>A</sub> = wL/6. The load accumulated up to a section x is wx<sup>2</sup>/(2L), giving <strong>V = wL/6 − wx<sup>2</sup>/(2L)</strong>, which vanishes at <strong>x = L/√3 ≈ 0.577L</strong> from the unloaded end. Shear changes from positive to negative there, so this is also the section of maximum moment.</p><p>For L = 6 m and w = 12 kN/m: the total load is 36 kN, R<sub>A</sub> = 12 kN, q = 2x and the accumulated load is x<sup>2</sup>, so V = 12 − x<sup>2</sup> = 0 at x = √12 ≈ 3.464 m. The zero-shear section is not at L/3, not at midspan and not at the 4 m position of the load resultant. The chain also runs in reverse: a parabolic shear diagram implies a linearly varying load.</p>",
            "moreHtml": "<p>Integrating the shear gives M = wLx/6 − wx<sup>3</sup>/(6L). At x = L/√3 this becomes M<sub>max</sub> = wL<sup>2</sup>/(9√3) ≈ 0.064wL<sup>2</sup>, about 27.7 kN·m for the 6 m example (12 × 3.464 − 3.464<sup>3</sup>/3).</p>",
            "sources": [
              {
                "id": "CAP4-04-00110",
                "label": "p. 19; topic 4 point 109; topic 4 point 121"
              },
              {
                "id": "CAP4-04-00078",
                "label": "p. 18; topic 4 point 76"
              }
            ]
          },
          {
            "id": "cantilever-tip-force",
            "title": "Cantilever with a tip force: rectangular shear and linear hogging moment",
            "html": "<p>Cut a weightless cantilever anywhere and keep the free-side segment. With only a downward tip force P, that segment always contains the same force, so the <strong>shear diagram is a rectangle of height P</strong>. The lever arm, however, grows with distance from the tip, so the moment grows linearly: measured from the root, <strong>M(x) = −P(L − x)</strong> under the sagging-positive convention. The moment is hogging, zero at the tip and largest at the fixed end, where its magnitude is PL.</p><p>For a 3 m cantilever with a 10 kN tip force, the root moment is −30 kN·m and the diagram is a triangle falling to zero at the tip; at midspan the moment is only −15 kN·m. The maximum moment of a beam is therefore not always at its centre: supports and load arrangement decide the critical section. Shear carries force units (kN) and moment carries force times length (kN·m), a quick check against mixing them. A uniform load on the same cantilever would instead give linearly varying shear and a parabolic moment diagram.</p>",
            "sources": [
              {
                "id": "CAP4-04-00104",
                "label": "p. 19; topic 4 point 105"
              },
              {
                "id": "CAP4-04-00118",
                "label": "p. 19; topic 4 point 119"
              },
              {
                "id": "CAP4-05-00111",
                "label": "p. 22; topic 5 point 109"
              }
            ]
          },
          {
            "id": "suspension-bridge-load-path",
            "title": "Suspension bridges: tension cables, compression towers and walkway profile",
            "html": "<p>In a conventional suspension bridge, deck load travels through <strong>hangers</strong> in tension into the sagging <strong>main cables</strong>, also in tension. The cables pass over <strong>towers</strong>, which act mainly in compression, and are held by <strong>anchorages</strong> that resist the cable pull. Describing the system as a set of vertical struts, cantilevers and columns misrepresents this primary load path, because the suspended elements work in tension rather than as compression members.</p><p>The walkway profile follows from the support geometry. If a walkway hangs at nearly constant offsets below sagging main cables stretched between end anchorages, it sags broadly with the cables; a level deck would need a different geometry, such as hangers of varying length. Type names used in trail-bridge catalogues are conventions of particular manuals, and the mechanics alone do not establish any official classification.</p>",
            "sources": [
              {
                "id": "CAP4-10-00179",
                "label": "p. 42; rural point 7"
              },
              {
                "id": "CAP4-10-00193",
                "label": "p. 42; rural point 17"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-end-couples-opposite-senses",
            "status": "review",
            "prompt": "Equal bending moments at both supports of a simple beam give zero shear everywhere",
            "html": "<p>True only when the two end couples act in opposite rotational senses and cancel; the reactions are then zero and the moment is constant. Couples in the same sense need a reaction pair of 2M/L, giving constant nonzero shear.</p>",
            "sources": [
              {
                "id": "CAP4-04-00001",
                "label": "p. 15; topic 4 point 1"
              }
            ]
          },
          {
            "id": "caution-zero-shear-extremum",
            "status": "review",
            "prompt": "Zero shear at a section means the moment there is a maximum or minimum",
            "html": "<p>An extremum is established only when the shear changes sign through zero, positive to negative for a maximum. Zero shear alone may mark a constant-moment interval or a stationary point that is not an extremum.</p>",
            "sources": [
              {
                "id": "CAP4-04-00002",
                "label": "p. 15; topic 4 point 2"
              }
            ]
          },
          {
            "id": "caution-midspan-design-shortcut",
            "status": "corrected",
            "prompt": "The bending moment at the centre is the value that matters for beam design",
            "html": "<p>Corrected: design uses the largest moment wherever it occurs, read from the diagram. An off-centre point load on a simple span peaks under the load, 32 kN·m against 24 kN·m at midspan in the worked example. Midspan governs many symmetric cases only.</p>",
            "sources": [
              {
                "id": "CAP4-04-00005",
                "label": "p. 15; topic 4 point 5"
              }
            ]
          },
          {
            "id": "caution-zero-end-moments",
            "status": "review",
            "prompt": "The bending moment at the end supports of a simply supported beam is zero",
            "html": "<p>Holds when the beam ends at its supports and carries no applied end couples or overhangs. An applied end couple produces an equal end moment, and a simple support beneath a continuous beam does not force the internal moment to zero.</p>",
            "sources": [
              {
                "id": "CAP4-04-00049",
                "label": "p. 17; topic 4 point 47"
              }
            ]
          },
          {
            "id": "caution-varying-load-zero-shear",
            "status": "review",
            "prompt": "Under a load varying from zero to w over span a, shear is zero at a/√3 from the lighter end",
            "html": "<p>The extracted capsule text loses the radical and can be misread as a/3. Equilibrium requires a/√3 ≈ 0.577a, which is 3.464 m for a 6 m span; a/3 would be wrong. The printed typography was not checked against the page image.</p>",
            "sources": [
              {
                "id": "CAP4-04-00110",
                "label": "p. 19; topic 4 point 109; topic 4 point 121"
              }
            ]
          },
          {
            "id": "caution-moment-independent-of-section",
            "status": "review",
            "prompt": "Bending moment in a beam is not a function of its cross-section",
            "html": "<p>Valid for a statically determinate beam in first-order analysis with unchanged applied loads. If self-weight changes with the section, or the structure is indeterminate so that stiffness distributes the load, the moments can change.</p>",
            "sources": [
              {
                "id": "CAP4-05-00046",
                "label": "p. 20; topic 5 point 45"
              }
            ]
          },
          {
            "id": "caution-magnitude-meaning",
            "status": "corrected",
            "prompt": "The word magnitude means enormity",
            "html": "<p>Corrected: in mechanics, magnitude is the non-negative size of a vector quantity. A component of −18 kN with upward positive has magnitude 18 kN and acts downward; the everyday sense of enormity does not apply.</p>",
            "sources": [
              {
                "id": "CAP4-05-00070",
                "label": "p. 21; topic 5 point 68"
              }
            ]
          },
          {
            "id": "caution-midspan-designed-for-bending",
            "status": "review",
            "prompt": "The middle span of a simply supported beam is designed to resist bending moments",
            "html": "<p>Midspan carries the maximum sagging moment, with zero shear, under symmetric loading such as a full-span UDL. The words simply supported alone do not fix the critical section; an off-centre point load moves the peak under the load.</p>",
            "sources": [
              {
                "id": "CAP4-05-00108",
                "label": "p. 22; topic 5 point 106"
              }
            ]
          },
          {
            "id": "caution-cantilever-midspan-couple",
            "status": "review",
            "prompt": "A couple M at the centre of a cantilever gives fixed-end shear 0 and moment M",
            "html": "<p>The capsule's run-together 0M is read as zero shear and moment M. Equilibrium independently supports that reading: a couple adds no transverse force, so the fixed end supplies only a reaction couple equal to M.</p>",
            "sources": [
              {
                "id": "CAP4-05-00110",
                "label": "p. 22; topic 5 point 108"
              }
            ]
          },
          {
            "id": "caution-designed-at-centre",
            "status": "corrected",
            "prompt": "A beam is designed for the maximum bending moment at its centre",
            "html": "<p>Corrected: the design moment is the maximum wherever it occurs. A cantilever with a tip force has zero moment at the tip and its maximum, PL or 30 kN·m for 10 kN on 3 m, at the fixed end rather than the centre.</p>",
            "sources": [
              {
                "id": "CAP4-05-00111",
                "label": "p. 22; topic 5 point 109"
              }
            ]
          },
          {
            "id": "caution-third-point-midspan-moment",
            "status": "review",
            "prompt": "Two equal loads W at L/3 from each support give midspan moment WL/3",
            "html": "<p>The load distance comes from the full page text, and the extracted W3L is reconstructed as WL/3 by equilibrium, not by image inspection. With W as each load, 30 kN loads on a 9 m span give 90 kN·m, which agrees with WL/3.</p>",
            "sources": [
              {
                "id": "CAP4-05-00138",
                "label": "p. 23; topic 5 point 139"
              }
            ]
          },
          {
            "id": "caution-suspension-bridge-members",
            "status": "corrected",
            "prompt": "Suspension bridges use vertical struts, vertical cantilevers and vertical columns",
            "html": "<p>Corrected: the primary load path is deck to tension hangers and main cables, then to compression towers and to anchorages that resist the cable pull. A list of vertical compression members does not describe how the suspended system carries load.</p>",
            "sources": [
              {
                "id": "CAP4-10-00179",
                "label": "p. 42; rural point 7"
              }
            ]
          },
          {
            "id": "caution-d-type-label",
            "status": "review",
            "prompt": "Suspended trail bridges are also called D-type",
            "html": "<p>This designation could not be verified against a trail-bridge manual, so it is not taught as an established classification. The dependable point is mechanical: a walkway hung at near-constant offsets below sagging cables will itself sag.</p>",
            "sources": [
              {
                "id": "CAP4-10-00193",
                "label": "p. 42; rural point 17"
              }
            ]
          }
        ],
        "gaps": [
          "Axial-force diagrams, inclined members and frames are not examined; the questions cover horizontal beams under transverse loads and couples only.",
          "Overhanging beams, internal hinges and combined point-plus-distributed loading are not worked, so superposition of mixed load cases needs separate practice.",
          "The suspension-bridge items describe load paths qualitatively; cable forces, sag ratios and tower design lie outside this capsule coverage.",
          "The D-type trail-bridge designation remains unverified against any official manual."
        ]
      },
      "ACiE0402": {
        "code": "ACiE0402",
        "questionCount": 17,
        "formulaSheet": "<ul><li><strong>E = σ/ε</strong> for axial loading in the proportional range; <strong>G = τ/γ</strong> with engineering shear strain γ.</li><li>Isotropic relations: <strong>E = 2G(1 + ν)</strong> and <strong>E = 3K(1 − 2ν)</strong>, so ν = E/(2G) − 1 and ν = (3K − E)/(6K).</li><li>Plane-stress principal stresses: <strong>σ<sub>1,2</sub> = (σ<sub>x</sub> + σ<sub>y</sub>)/2 ± √[((σ<sub>x</sub> − σ<sub>y</sub>)/2)<sup>2</sup> + τ<sub>xy</sub><sup>2</sup>]</strong>; the in-plane maximum shear equals the square-root term.</li><li>Absolute maximum shear = (largest − smallest principal stress)/2, counting the zero out-of-plane principal stress in plane stress.</li><li>Uniaxial stress σ: <strong>τ<sub>max</sub> = σ/2</strong> on planes at 45° to the cross-section.</li><li>Circular shaft: <strong>τ = Tr/J</strong> with J = πD<sup>4</sup>/32 for a solid section, so <strong>τ<sub>max</sub> = 16T/(πD<sup>3</sup>)</strong> at the surface.</li><li>Percentage reduction of area = 100(A<sub>0</sub> − A<sub>f</sub>)/A<sub>0</sub>; engineering ultimate tensile strength = P<sub>max</sub>/A<sub>0</sub>.</li></ul>",
        "blocks": [
          {
            "id": "moduli-from-test-data",
            "title": "Moduli from test data: Young's modulus and modulus of rigidity",
            "html": "<p>Each elastic modulus pairs one kind of stress with its own matching strain, measured within the linear range.</p><ul><li><strong>Young's modulus</strong> (modulus of elasticity) E is axial normal stress divided by the corresponding longitudinal strain in uniaxial loading. A stress of 120 MPa with strain 0.0006 gives E = 120/0.0006 = 200000 MPa = 200 GPa.</li><li><strong>Modulus of rigidity</strong> (shear modulus) G is shear stress divided by <em>engineering</em> shear strain γ, the total change of a right angle in radians. A shear stress of 30 MPa at γ = 0.0004 rad gives G = 30/0.0004 = 75000 MPa = 75 GPa.</li></ul><p>Two traps recur. The tensor shear-strain component ε<sub>xy</sub> equals γ/2, so using it in place of γ doubles the computed G. The bulk modulus K pairs hydrostatic pressure with volumetric strain, so it cannot come from a single axial stress–strain pair. Because strain is dimensionless every modulus carries stress units, and converting MPa to GPa, a division by 1000, completes the calculation.</p>",
            "sources": [
              {
                "id": "CAP4-04-00064",
                "label": "p. 17; topic 4 point 64"
              },
              {
                "id": "CAP4-04-00059",
                "label": "p. 17; topic 4 point 58; topic 4 point 61"
              }
            ]
          },
          {
            "id": "isotropic-constant-relations",
            "title": "Isotropic relations linking E, G, K and Poisson's ratio",
            "html": "<p>For a homogeneous, isotropic, linear-elastic material only two elastic constants are independent, so any two fix the others through <strong>E = 2G(1 + ν)</strong> and <strong>E = 3K(1 − 2ν)</strong>.</p><ul><li>From E = 210 GPa and G = 84 GPa: ν = E/(2G) − 1 = 210/168 − 1 = 0.25. The intermediate 1.25 is 1 + ν, not ν.</li><li>From E = 200 GPa and ν = 0.25: G = E/(2(1 + ν)) = 200/2.5 = 80 GPa. Multiplying instead, E(1 + ν)/2, gives 125 GPa, which contradicts the stated ν.</li><li>From E = 150 GPa and K = 100 GPa: rearranging the bulk relation gives ν = (3K − E)/(6K) = (300 − 150)/600 = 0.25.</li></ul><p>An expression of the form 2K + 1 for Poisson's ratio is not a valid elastic identity; the relation containing (1 + ν) involves the shear modulus G, not K. All of these identities assume isotropy, so they must not be imposed on anisotropic materials, which need direction-dependent constants.</p>",
            "moreHtml": "<p>Eliminating E links the other two constants: 2G(1 + ν) = 3K(1 − 2ν), so K/G = 2(1 + ν)/(3(1 − 2ν)), which is 2.5/1.5 ≈ 1.67 at ν = 0.25. As ν approaches 0.5 the factor 1 − 2ν approaches zero and K grows without limit, the incompressible limit.</p>",
            "sources": [
              {
                "id": "CAP4-04-00018",
                "label": "p. 15; topic 4 point 17"
              },
              {
                "id": "CAP4-04-00080",
                "label": "p. 18; topic 4 point 79"
              },
              {
                "id": "CAP4-05-00142",
                "label": "p. 23; topic 5 point 143"
              }
            ]
          },
          {
            "id": "principal-planes-maximum-shear",
            "title": "Principal planes and the planes of maximum shear",
            "html": "<p>A <strong>principal plane</strong> is a plane on which the traction is purely normal, so the shear stress on it is zero; the normal stress it carries is a <strong>principal stress</strong>. Planes are orientations and principal stresses are values, so the two terms are not interchangeable. A principal stress may be the major, intermediate or minor value, and it may be tensile, compressive or zero.</p><p>Maximum shear acts on planes midway between principal directions, at 45° to them, never on the principal planes themselves.</p><ul><li>Plane stress with in-plane principal stresses of 80 MPa and 20 MPa: the plane carrying 80 MPa has zero shear. The in-plane maximum shear is (80 − 20)/2 = 30 MPa, but the out-of-plane principal stress is zero, so the absolute maximum shear is (80 − 0)/2 = 40 MPa.</li><li>A bar with 80 kN axial tension over 800 mm<sup>2</sup> has σ = 100 MPa and principal stresses 100, 0 and 0 MPa. The maximum shear is 100/2 = 50 MPa on planes inclined at 45° to the cross-section, while the transverse section and planes parallel to the axis carry no shear.</li></ul>",
            "sources": [
              {
                "id": "CAP4-04-00019",
                "label": "pp. 15, 19; topic 4 point 18; topic 4 point 117"
              },
              {
                "id": "CAP4-04-00020",
                "label": "p. 15; topic 4 point 19"
              },
              {
                "id": "CAP4-04-00100",
                "label": "pp. 18, 19; topic 4 point 100; topic 4 point 114"
              }
            ]
          },
          {
            "id": "mohr-circle-principal-stresses",
            "title": "Principal stresses from the Mohr-circle centre and radius",
            "html": "<p>For plane stress (σ<sub>x</sub>, σ<sub>y</sub>, τ<sub>xy</sub>), Mohr's circle is centred at the <strong>mean stress (σ<sub>x</sub> + σ<sub>y</sub>)/2</strong> with radius <strong>R = √[((σ<sub>x</sub> − σ<sub>y</sub>)/2)<sup>2</sup> + τ<sub>xy</sub><sup>2</sup>]</strong>. The principal stresses are centre ± radius, and the in-plane maximum shear equals R.</p><ul><li>σ<sub>x</sub> = 60 MPa, σ<sub>y</sub> = 0, τ<sub>xy</sub> = 40 MPa: centre 30 MPa and R = √(30<sup>2</sup> + 40<sup>2</sup>) = 50 MPa, so σ<sub>1</sub> = 80 MPa and σ<sub>2</sub> = −20 MPa. Adding the full σ<sub>x</sub> to the radius, instead of σ<sub>x</sub>/2, would wrongly give 110 MPa.</li><li>σ<sub>x</sub> = 70 MPa, σ<sub>y</sub> = 10 MPa, τ<sub>xy</sub> = 40 MPa: centre 40 MPa and R = √(30<sup>2</sup> + 40<sup>2</sup>) = 50 MPa, so the principal stresses are 90 MPa and −10 MPa.</li></ul><p>A quick check is that σ<sub>1</sub> + σ<sub>2</sub> always equals σ<sub>x</sub> + σ<sub>y</sub>: 80 − 20 = 60 and 90 − 10 = 80. Principal directions come from stress transformation; they are not automatically the geometric diagonals of the element.</p>",
            "moreHtml": "<p>The principal direction satisfies tan 2θ<sub>p</sub> = 2τ<sub>xy</sub>/(σ<sub>x</sub> − σ<sub>y</sub>). In both examples this is 80/60, so 2θ<sub>p</sub> ≈ 53.1° and the major principal plane lies about 26.6° from the x-plane, not at 45°. Substituting θ = 26.6° in the transformation equation recovers 80 MPa and 90 MPa respectively.</p>",
            "sources": [
              {
                "id": "CAP4-04-00054",
                "label": "p. 17; topic 4 point 52"
              },
              {
                "id": "CAP4-04-00075",
                "label": "p. 17; topic 4 point 73"
              }
            ]
          },
          {
            "id": "stress-strain-curve-stages",
            "title": "Stages of the engineering stress–strain curve",
            "html": "<p>For a conventional ductile mild-steel tensile test with distinct limits, the engineering stress–strain curve passes these stages in order:</p><ol><li><strong>Proportional limit</strong>: end of the straight portion where Hooke's law, stress proportional to strain, applies.</li><li><strong>Elastic limit</strong>: the largest stress from which unloading still gives full recovery; the response may already be slightly nonlinear.</li><li><strong>Yield</strong>: onset of appreciable plastic flow.</li><li><strong>Ultimate stress</strong>: the peak engineering stress after strain hardening, followed by necking.</li><li><strong>Fracture</strong>, the breaking point.</li></ol><p>Proportionality and elasticity are different properties. A specimen unloaded from a stress where the curve is already curved, yet recovering fully, has passed its proportional limit without necessarily passing its elastic limit. Hooke's law ending at the proportional limit is a material fact, not a rule created by limit-state design.</p><p><strong>Engineering ultimate tensile strength</strong> is the maximum recorded force divided by the original area: 60 kN on 200 mm<sup>2</sup> gives 60000/200 = 300 MPa. The later, smaller fracture force divided by the necked area is a true-stress measure, and neither value generally equals the yield stress. Many materials do not show sharply separated stages.</p>",
            "sources": [
              {
                "id": "CAP4-04-00070",
                "label": "p. 17; topic 4 point 68"
              },
              {
                "id": "CAP4-04-00095",
                "label": "p. 18; topic 4 point 95"
              },
              {
                "id": "CAP4-04-00082",
                "label": "p. 18; topic 4 point 81"
              }
            ]
          },
          {
            "id": "ductility-measures",
            "title": "Ductility: permanent elongation and reduction of area",
            "html": "<p><strong>Ductility</strong> is the capacity to undergo appreciable plastic deformation before fracture. Elongation alone does not define it: every material stretches elastically under tension, brittle ones included, and that elastic stretch disappears on unloading. What demonstrates ductility is substantial <em>permanent</em> elongation before rupture.</p><p>Two standard measures compare comparable tests: percentage elongation of the gauge length and <strong>percentage reduction of area</strong> = 100(A<sub>0</sub> − A<sub>f</sub>)/A<sub>0</sub>, where A<sub>f</sub> is the minimum area at fracture. Specimens starting at 100 mm<sup>2</sup> and fracturing at 60 mm<sup>2</sup> and 75 mm<sup>2</sup> show reductions of 40% and 25%, so the first is the more ductile; the final area itself is not the reduction.</p><p>A large reduction of area reflects large local plastic contraction, or necking. It does not by itself imply a higher elastic modulus or ultimate strength: a steep initial slope shows stiffness, and a high fracture stress with negligible extension describes a strong but brittle response.</p>",
            "sources": [
              {
                "id": "CAP4-04-00009",
                "label": "p. 15; topic 4 point 9"
              },
              {
                "id": "CAP4-04-00076",
                "label": "p. 17; topic 4 point 74"
              }
            ]
          },
          {
            "id": "torsion-circular-shaft",
            "title": "Torsion of circular shafts: shear grows linearly from the axis",
            "html": "<p>In elastic Saint-Venant torsion of a circular shaft, cross-sections rotate as rigid discs and shear strain grows in proportion to radius. The torsion formula gives <strong>τ(r) = Tr/J</strong>, where J is the polar second moment of the whole section, πD<sup>4</sup>/32 for a solid circle.</p><ul><li>On the longitudinal axis r = 0, so the torsional shear is <strong>zero</strong>. J belongs to the entire section and is not zero at the axis; the zero comes from r.</li><li>At the outer surface r = D/2, giving the maximum <strong>τ<sub>max</sub> = 16T/(πD<sup>3</sup>)</strong>. For D = 100 mm and T = 2 kN·m = 2 × 10<sup>6</sup> N·mm, τ<sub>max</sub> = 16 × 2 × 10<sup>6</sup>/(π × 100<sup>3</sup>) = 32/π ≈ 10.19 MPa. Halfway to the surface the stress is half of this, about 5.09 MPa.</li></ul><p>These statements concern torsional shear only. An added axial load or bending moment superimposes normal stresses, which need not vanish at the axis.</p>",
            "sources": [
              {
                "id": "CAP4-04-00022",
                "label": "p. 15; topic 4 point 21"
              },
              {
                "id": "CAP4-04-00107",
                "label": "p. 19; topic 4 point 107"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-principal-stress-mean-term",
            "status": "corrected",
            "prompt": "Direct stress σx with shear τxy gives maximum normal stress σx + ½√(σx² + 4τxy²)",
            "html": "<p>Corrected: the mean-stress term is σ<sub>x</sub>/2, not σ<sub>x</sub>. The maximum is σ<sub>x</sub>/2 + ½√(σ<sub>x</sub><sup>2</sup> + 4τ<sub>xy</sub><sup>2</sup>); with 60 MPa and 40 MPa this is 30 + 50 = 80 MPa, not 110 MPa.</p>",
            "sources": [
              {
                "id": "CAP4-04-00054",
                "label": "p. 17; topic 4 point 52"
              }
            ]
          },
          {
            "id": "caution-hooke-limit-state",
            "status": "review",
            "prompt": "In limit state design, Hooke's law is valid up to the proportional limit",
            "html": "<p>The proportional limit is a material property that bounds Hooke's linear law in any analysis; limit-state design neither creates nor extends it. Elastic recovery can continue beyond the proportional limit into nonlinear response.</p>",
            "sources": [
              {
                "id": "CAP4-04-00070",
                "label": "p. 17; topic 4 point 68"
              }
            ]
          },
          {
            "id": "caution-principal-diagonal-plane",
            "status": "corrected",
            "prompt": "The major principal stress is produced on the diagonal plane",
            "html": "<p>Corrected: principal planes follow from stress transformation and are generally not the geometric diagonals. The restored expression (σ<sub>x</sub> + σ<sub>y</sub>)/2 + √[((σ<sub>x</sub> − σ<sub>y</sub>)/2)<sup>2</sup> + τ<sup>2</sup>] gives 90 MPa for 70, 10 and 40 MPa, on a plane about 26.6° from the x-plane.</p>",
            "sources": [
              {
                "id": "CAP4-04-00075",
                "label": "p. 17; topic 4 point 73"
              }
            ]
          },
          {
            "id": "caution-ductility-definition",
            "status": "corrected",
            "prompt": "Elongation of a material due to tensile load is called ductility",
            "html": "<p>Corrected: elastic elongation occurs in brittle materials too. Ductility is the capacity for substantial plastic, permanent deformation before fracture, measured by percentage elongation or reduction of area.</p>",
            "sources": [
              {
                "id": "CAP4-04-00076",
                "label": "p. 17; topic 4 point 74"
              }
            ]
          },
          {
            "id": "caution-ultimate-stress-definition",
            "status": "review",
            "prompt": "The maximum stress a material can resist is called ultimate stress",
            "html": "<p>Made precise: engineering ultimate tensile strength is the maximum recorded force divided by the original area, 300 MPa for 60 kN on 200 mm<sup>2</sup>. Fracture force over the necked area is a different, true-stress quantity.</p>",
            "sources": [
              {
                "id": "CAP4-04-00082",
                "label": "p. 18; topic 4 point 81"
              }
            ]
          },
          {
            "id": "caution-stress-strain-sequence",
            "status": "review",
            "prompt": "The stress–strain sequence is proportional limit, elastic limit, yield point, breaking point",
            "html": "<p>The capsule list omits the ultimate stress, the peak reached after strain hardening and before necking. The complete idealized order describes a conventional ductile mild-steel curve; many materials do not show sharply separated stages.</p>",
            "sources": [
              {
                "id": "CAP4-04-00095",
                "label": "p. 18; topic 4 point 95"
              }
            ]
          },
          {
            "id": "caution-bulk-modulus-poisson",
            "status": "corrected",
            "prompt": "Poisson's ratio from Young's modulus and bulk modulus is given by an expression in 2K + 1",
            "html": "<p>Corrected: the isotropic relation is E = 3K(1 − 2ν), so ν = (3K − E)/(6K); E = 150 GPa and K = 100 GPa give 0.25. The relation containing (1 + ν) is E = 2G(1 + ν) and involves the shear modulus, not K.</p>",
            "sources": [
              {
                "id": "CAP4-05-00142",
                "label": "p. 23; topic 5 point 143"
              }
            ]
          }
        ],
        "gaps": [
          "Stress transformation at arbitrary plane angles, strain transformation and strain rosettes are not examined numerically.",
          "Torsion is limited to solid circular shafts; hollow shafts, angle of twist, power transmission and non-circular sections are not covered.",
          "Stress–strain behaviour is described for idealized ductile steel; offset yield determination, true-stress curves and temperature or loading-rate effects are not treated.",
          "Thin cylinders, combined bending with torsion and failure theories lie outside these questions."
        ]
      },
      "ACiE0403": {
        "code": "ACiE0403",
        "questionCount": 22,
        "formulaSheet": "<ul><li>Flexure: <strong>M/I = σ/y = E/R</strong>, so σ = My/I and curvature 1/R = M/(EI).</li><li>Elastic section modulus <strong>Z = I/c</strong> (length<sup>3</sup>); rectangle I = bd<sup>3</sup>/12 about the centroidal axis parallel to b.</li><li>Solid rectangle in shear: τ<sub>avg</sub> = V/(bd) and <strong>τ<sub>max</sub> = 1.5τ<sub>avg</sub></strong> at the neutral axis.</li><li>Simple span: central P, <strong>δ = PL<sup>3</sup>/(48EI)</strong>; total uniform load W, <strong>δ = 5WL<sup>3</sup>/(384EI)</strong>.</li><li>Cantilever with tip force P: <strong>δ = PL<sup>3</sup>/(3EI)</strong>.</li><li>Fixed-fixed: central P, <strong>δ = PL<sup>3</sup>/(192EI)</strong>; total uniform load W, <strong>δ = WL<sup>3</sup>/(384EI)</strong>.</li><li>Euler: <strong>P<sub>cr</sub> = π<sup>2</sup>EI/L<sub>e</sub><sup>2</sup></strong> with L<sub>e</sub> = L pinned-pinned, L/2 fixed-fixed, 2L fixed-free and about 0.699L (exact) or L/√2 (conventional) fixed-pinned.</li><li>Slenderness ratio L<sub>e</sub>/r; the larger axis ratio governs.</li></ul>",
        "blocks": [
          {
            "id": "flexure-formula",
            "title": "The flexure formula: M/I = σ/y = E/R",
            "html": "<p>Elementary beam theory assumes that plane sections remain plane, that the material is homogeneous and linear-elastic and that deformations are small. Strain then varies linearly with distance y from the neutral axis, and so does stress: with sagging-positive M and y measured upward, σ<sub>x</sub> = −My/I, compression above and tension below the axis. The combined <strong>flexure formula</strong> is <strong>M/I = σ/y = E/R</strong>.</p><ul><li><strong>Stress</strong>: with I = 80 × 10<sup>6</sup> mm<sup>4</sup> and M = 40 kN·m = 40 × 10<sup>6</sup> N·mm, a fibre 100 mm from the axis carries σ = (40 × 10<sup>6</sup>)(100)/(80 × 10<sup>6</sup>) = 50 MPa. Its side of the axis and the moment sign decide tension or compression.</li><li><strong>Curvature</strong>: 1/R = M/(EI). With EI = 10000 kN·m<sup>2</sup> and M = 50 kN·m, 1/R = 0.005 per metre and R = 200 m. Curvature and radius are reciprocals, not interchangeable numbers.</li><li><strong>Neutral axis</strong>: at y = 0 the longitudinal bending stress is zero when no axial force acts.</li></ul><p>Linearity needs elastic behaviour. Pure bending alone does not guarantee it: after yielding the stress distribution becomes nonlinear, approaching rectangular blocks at full plasticity.</p>",
            "sources": [
              {
                "id": "CAP4-04-00024",
                "label": "p. 15; topic 4 point 23"
              },
              {
                "id": "CAP4-05-00051",
                "label": "p. 20; topic 5 point 50"
              },
              {
                "id": "CAP4-04-00065",
                "label": "p. 17; topic 4 point 65"
              },
              {
                "id": "CAP4-04-00066",
                "label": "p. 17; topic 4 point 65"
              }
            ]
          },
          {
            "id": "section-properties-flexural-rigidity",
            "title": "Section properties and flexural rigidity: I, Z and EI",
            "html": "<p>Three quantities are easily confused. The <strong>second moment of area I</strong> (length<sup>4</sup>) measures how area is distributed about the bending axis. The <strong>elastic section modulus Z = I/c</strong> (length<sup>3</sup>), with c the distance from the neutral axis to the extreme fibre being checked, converts moment to extreme-fibre stress through σ = M/Z; an unsymmetrical section has different Z values for its two faces. <strong>Young's modulus E</strong> is a material property with stress units, N/mm<sup>2</sup>, because strain is dimensionless. Z in mm<sup>3</sup> and E in N/mm<sup>2</sup> therefore never share units.</p><p>Bending stiffness is the product <strong>EI</strong>, the flexural rigidity: I is its geometric part and E its material part, and I must be taken about the actual bending axis. For otherwise identical linear-elastic beams, deflection is inversely proportional to EI, so doubling I halves the deflection.</p><p>For a rectangle bending about its horizontal centroidal axis, I = bd<sup>3</sup>/12. Doubling the width b doubles I and halves the midspan deflection under a central load; doubling the depth d multiplies I by eight and reduces the deflection to one-eighth.</p>",
            "sources": [
              {
                "id": "CAP4-04-00023",
                "label": "p. 15; topic 4 point 22"
              },
              {
                "id": "CAP4-01-00154",
                "label": "p. 6; topic 1 point 147"
              },
              {
                "id": "CAP4-04-00029",
                "label": "p. 16; topic 4 point 28"
              }
            ]
          },
          {
            "id": "rectangular-shear-stress",
            "title": "Transverse shear stress in rectangular beams and the neutral axis",
            "html": "<p>When a beam carries shear V as well as moment, transverse shear stresses act over the cross-section. For a solid rectangle the distribution is <strong>parabolic</strong>: zero at the top and bottom fibres and largest at the centroidal neutral axis, where <strong>τ<sub>max</sub> = 1.5V/(bd)</strong>, one and a half times the average.</p><p>Example: a 100 mm × 200 mm section with V = 40 kN has area 20000 mm<sup>2</sup>, average shear 40000/20000 = 2 MPa and peak 1.5 × 2 = 3 MPa at the neutral axis.</p><p>In a homogeneous rectangular beam, then, the neutral axis is where the longitudinal bending stress is zero <em>and</em> the transverse shear stress is greatest. Both facts are properties of the section: the second needs nonzero shear and a rectangular or similar shape, and it has nothing to do with whether the beam is simply supported. A region of pure bending carries no transverse shear at all, and other section shapes distribute shear differently.</p>",
            "sources": [
              {
                "id": "CAP4-04-00003",
                "label": "p. 15; topic 4 point 3"
              },
              {
                "id": "CAP4-04-00021",
                "label": "p. 15; topic 4 point 20"
              }
            ]
          },
          {
            "id": "simple-span-deflections",
            "title": "Standard deflections of simply supported beams",
            "html": "<p>Two simple-span results, with shear deformation neglected, cover most questions.</p><table><thead><tr><th scope='col'>Loading</th><th scope='col'>Maximum deflection</th><th scope='col'>L = 4 m, EI = 8000 kN·m<sup>2</sup></th></tr></thead><tbody><tr><td>Central point load P = 12 kN</td><td>PL<sup>3</sup>/(48EI)</td><td>12 × 64/384000 = 0.0020 m = 2.00 mm</td></tr><tr><td>Total uniform load W = 24 kN</td><td>5WL<sup>3</sup>/(384EI)</td><td>5 × 24 × 64/3072000 = 0.0025 m = 2.50 mm</td></tr></tbody></table><p>Check whether W is a total force or an intensity: with w per metre, 5WL<sup>3</sup>/(384EI) becomes 5wL<sup>4</sup>/(384EI). Equal total force does not mean equal deflection. Comparing a central load W with the same W spread uniformly gives the ratio (1/48)/(5/384) = 384/240 = <strong>8/5</strong>, because concentrating the load at midspan bends the beam more.</p>",
            "sources": [
              {
                "id": "CAP4-04-00007",
                "label": "p. 15; topic 4 point 7"
              },
              {
                "id": "CAP4-04-00120",
                "label": "p. 19; topic 4 point 122"
              },
              {
                "id": "CAP4-04-00028",
                "label": "p. 16; topic 4 point 27"
              }
            ]
          },
          {
            "id": "cantilever-fixed-conjugate",
            "title": "Cantilever and fixed-fixed deflections, with the conjugate-beam support map",
            "html": "<p>End restraint changes the deflection coefficient dramatically.</p><ul><li><strong>Cantilever with a tip force</strong>: δ = PL<sup>3</sup>/(3EI). For 9 kN on 3 m with EI = 9000 kN·m<sup>2</sup>, δ = 9 × 27/(3 × 9000) = 0.009 m = 9 mm downward.</li><li><strong>Fixed-fixed, central force</strong>: δ = PL<sup>3</sup>/(192EI), one-quarter of the simple-span value. For 12 kN on 4 m with EI = 8000 kN·m<sup>2</sup>, δ = 768/1536000 = 0.0005 m = 0.50 mm.</li><li><strong>Fixed-fixed, total uniform load W</strong>: δ = WL<sup>3</sup>/(384EI) = wL<sup>4</sup>/(384EI), one-fifth of the simple-span value. For W = 24 kN on the same beam, δ = 1536/3072000 = 0.0005 m = 0.50 mm.</li></ul><p>The <strong>conjugate-beam method</strong> obtains such results by loading an imaginary beam with M/EI: conjugate shear equals real slope and conjugate moment equals real deflection. Supports must be translated so that these correspondences hold. A real fixed end, with zero slope and deflection, becomes a conjugate <strong>free end</strong>, with zero shear and moment; a real free end becomes a conjugate fixed end, and a real simple end support stays a simple support.</p>",
            "sources": [
              {
                "id": "CAP4-04-00030",
                "label": "p. 16; topic 4 point 29"
              },
              {
                "id": "CAP4-04-00058",
                "label": "p. 17; topic 4 point 57"
              },
              {
                "id": "CAP4-04-00031",
                "label": "p. 16; topic 4 point 30"
              },
              {
                "id": "CAP4-04-00051",
                "label": "p. 17; topic 4 point 49"
              }
            ]
          },
          {
            "id": "euler-buckling-effective-length",
            "title": "Euler buckling: compressive instability and effective length",
            "html": "<p>The Euler crippling load is the axial <strong>compression</strong> at which an ideal straight, slender, elastic column loses lateral stability. It is not a tensile, torsional or shear failure, and it differs from local bearing crushing. The lowest critical load is <strong>P<sub>cr</sub> = π<sup>2</sup>EI/L<sub>e</sub><sup>2</sup></strong>, with I about the weakest buckling axis and L<sub>e</sub> = KL the effective length.</p><table><thead><tr><th scope='col'>End conditions</th><th scope='col'>Effective length</th><th scope='col'>P<sub>cr</sub> relative to pinned-pinned</th></tr></thead><tbody><tr><td>Pinned at both ends</td><td>L</td><td>1</td></tr><tr><td>Fixed at both ends, no sway</td><td>L/2</td><td>4</td></tr><tr><td>Fixed base, free top</td><td>2L</td><td>1/4</td></tr></tbody></table><p>Example: a pinned-pinned column 5 m long with EI = 2000 kN·m<sup>2</sup> has P<sub>cr</sub> = π<sup>2</sup> × 2000/25 ≈ 789.6 kN. The same member fixed at the base and free at the top would reach only about 197.4 kN, and fixed at both ends about 3158 kN. These are ideal-restraint values for a conservative axial load; real frame restraint and sway can produce different effective-length factors.</p>",
            "sources": [
              {
                "id": "CAP4-05-00063",
                "label": "p. 21; topic 5 point 61"
              },
              {
                "id": "CAP4-04-00027",
                "label": "pp. 16, 18; topic 4 point 26; topic 4 point 82"
              },
              {
                "id": "CAP4-04-00033",
                "label": "p. 16; topic 4 point 32"
              },
              {
                "id": "CAP4-04-00119",
                "label": "p. 19; topic 4 point 120"
              }
            ]
          },
          {
            "id": "fixed-pinned-column-slenderness",
            "title": "Fixed-pinned columns and the governing slenderness ratio",
            "html": "<p>For an ideal non-sway column fixed at one end and pinned at the other, the buckling condition is tan α = α, whose first nonzero root is α = 4.49341. The exact critical load P<sub>cr</sub> = α<sup>2</sup>EI/L<sup>2</sup> is (4.49341/π)<sup>2</sup> ≈ <strong>2.046</strong> times the pinned-pinned load, which corresponds to K = π/α ≈ 0.699. The familiar 2π<sup>2</sup>EI/L<sup>2</sup> comes from the approximation L<sub>e</sub> = L/√2, K ≈ 0.707: close, but not the exact eigenvalue.</p><p>Columns are also compared by their <strong>slenderness ratio</strong> L<sub>e</sub>/r, where r = √(I/A) is the radius of gyration. Each principal axis generally has its own effective length and radius of gyration, and the larger ratio governs. With equal effective lengths of 3000 mm and radii of 50 mm and 30 mm, the ratios are 60 and 100, so 100 governs. Using the least radius of gyration is valid here only because the effective lengths about the two axes are equal.</p>",
            "sources": [
              {
                "id": "CAP4-04-00074",
                "label": "p. 17; topic 4 point 72"
              },
              {
                "id": "CAP4-05-00119",
                "label": "p. 22; topic 5 point 117"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-inertia-bending-resistance",
            "status": "review",
            "prompt": "Moment of inertia represents resistance against bending",
            "html": "<p>I is only the geometric part of bending stiffness. Stiffness is EI, so the material modulus matters too, and I must be taken about the actual bending axis; for otherwise identical beams, doubling I halves deflection.</p>",
            "sources": [
              {
                "id": "CAP4-01-00154",
                "label": "p. 6; topic 1 point 147"
              }
            ]
          },
          {
            "id": "caution-neutral-axis-shear-maximum",
            "status": "review",
            "prompt": "For a simply supported beam, the neutral axis has zero bending stress and maximum shear stress",
            "html": "<p>The shear part depends on the section shape and needs nonzero shear; it holds for a solid rectangle whatever the supports. Pure bending has no transverse shear, and other section shapes can distribute shear differently.</p>",
            "sources": [
              {
                "id": "CAP4-04-00003",
                "label": "p. 15; topic 4 point 3"
              }
            ]
          },
          {
            "id": "caution-linear-stress-pure-bending",
            "status": "review",
            "prompt": "In pure bending the stress distribution in a beam is linear",
            "html": "<p>Linear only while the material remains linear-elastic with plane sections staying plane. Pure bending does not exclude yielding; beyond first yield the distribution becomes nonlinear and approaches rectangular plastic stress blocks.</p>",
            "sources": [
              {
                "id": "CAP4-04-00024",
                "label": "p. 15; topic 4 point 23"
              }
            ]
          },
          {
            "id": "caution-fixed-fixed-effective-length",
            "status": "review",
            "prompt": "The equivalent length of a column with both ends fixed is L/2",
            "html": "<p>The extracted capsule text shows L2, which must be read as L/2, not L<sup>2</sup> or 2L. The value applies to an ideal non-sway column with both ends fully fixed; real frame restraint and sway can change the effective-length factor.</p>",
            "sources": [
              {
                "id": "CAP4-04-00027",
                "label": "pp. 16, 18; topic 4 point 26; topic 4 point 82"
              }
            ]
          },
          {
            "id": "caution-fixed-pinned-euler",
            "status": "review",
            "prompt": "Euler buckling load for one end fixed and the other hinged is 2π²EI/L²",
            "html": "<p>This is the conventional approximation using L<sub>e</sub> = L/√2. The exact ideal-column eigenvalue gives about 2.046π<sup>2</sup>EI/L<sup>2</sup>, with K ≈ 0.699, so note which result a question expects.</p>",
            "sources": [
              {
                "id": "CAP4-04-00074",
                "label": "p. 17; topic 4 point 72"
              }
            ]
          },
          {
            "id": "caution-least-radius-slenderness",
            "status": "review",
            "prompt": "Slenderness ratio is the effective length divided by the least radius of gyration",
            "html": "<p>Using the least radius is correct when the effective lengths about both principal axes are equal. Otherwise compute L<sub>e</sub>/r for each axis with its own effective length and take the larger ratio.</p>",
            "sources": [
              {
                "id": "CAP4-05-00119",
                "label": "p. 22; topic 5 point 117"
              }
            ]
          }
        ],
        "gaps": [
          "Unsymmetrical bending, composite or reinforced sections and the shear-centre concept are not examined.",
          "Deflections are limited to standard coefficient formulas and the conjugate-beam support rule; double integration and moment-area derivations are not worked.",
          "Column questions cover ideal Euler theory only; eccentric loading, initial imperfections, the Rankine formula and code design curves are outside this coverage.",
          "Shear-stress distributions for I, T and circular sections are not covered."
        ]
      },
      "ACiE0404": {
        "code": "ACiE0404",
        "questionCount": 14,
        "formulaSheet": "<ul><li>Virtual displacements: external virtual work of the actual forces = internal virtual work, for every kinematically admissible virtual displacement.</li><li>Linear elastic, gradual loading: <strong>U = Pδ/2</strong>; simple span with central load P: U = P<sup>2</sup>L<sup>3</sup>/(96EI).</li><li>Castigliano, linear elastic: displacement conjugate to P is <strong>δ = ∂U/∂P</strong>.</li><li>Elastic energy density <strong>σ<sup>2</sup>/(2E)</strong>; proof resilience = σ<sub>e</sub><sup>2</sup>V/(2E) under uniform stress.</li><li>Sudden zero-drop load on an undamped linear spring: <strong>δ<sub>max</sub> = 2P/k</strong> and U<sub>max</sub> = 4 × the gradual-load energy.</li><li>Compound plane truss from two rigid subtrusses: <strong>m = m<sub>1</sub> + m<sub>2</sub> + 3</strong> with independent connectors.</li><li>Plane truss free displacement coordinates = <strong>2j − r</strong>; rigid plane frame counting difference <strong>D<sub>c</sub> = 3m + r − 3j</strong>; planar beam redundants = reactions − 3.</li></ul>",
        "blocks": [
          {
            "id": "virtual-work-and-castigliano",
            "title": "Virtual work and Castigliano's energy derivative",
            "html": "<p>The <strong>principle of virtual displacements</strong> tests equilibrium by pairing the <em>actual</em> forces with an imagined, infinitesimal and <strong>kinematically admissible</strong> virtual displacement, one that respects every support and continuity constraint. For a deformable body in equilibrium, the external virtual work of those forces equals the internal virtual work for every such displacement. Finite, arbitrary or constraint-violating movements do not qualify, and settlements that actually occur are real rather than virtual. The dual <strong>principle of virtual forces</strong> pairs a virtual force system with the actual displacements and underlies the unit-load method for deflections.</p><p>Energy methods also give displacements directly. For a conservative, linear-elastic structure, the displacement at and in the direction of a load P equals <strong>∂U/∂P</strong>. If U = 0.002P<sup>2</sup> kN·m, then δ = 0.004P m, which is 0.020 m = 20 mm at P = 5 kN; dividing U by P would give half of this. Texts number Castigliano's theorems differently, so identify the derivative rather than rely on the label. For nonlinear elasticity, load derivatives must be taken of complementary energy.</p>",
            "sources": [
              {
                "id": "CAP4-04-00025",
                "label": "p. 16; topic 4 point 24"
              },
              {
                "id": "CAP4-04-00102",
                "label": "p. 18; topic 4 point 102"
              }
            ]
          },
          {
            "id": "gradual-loading-strain-energy",
            "title": "Strain energy under gradual loading: beams and uniformly stressed bars",
            "html": "<p>When a load grows slowly from zero on a linear-elastic structure, its force–displacement graph is a straight line and the stored energy is the triangle beneath it: <strong>U = Pδ/2</strong>, not Pδ.</p><ul><li><strong>Beam</strong>: a 4 m simple span with EI = 8000 kN·m<sup>2</sup> and a central load of 12 kN deflects PL<sup>3</sup>/(48EI) = 0.002 m, so U = 12 × 0.002/2 = 0.012 kN·m = 12 J. The same result follows from U = P<sup>2</sup>L<sup>3</sup>/(96EI) = 144 × 64/768000 = 0.012 kN·m; the load appears squared.</li><li><strong>Uniformly stressed bar</strong>: the energy per unit volume is σ<sup>2</sup>/(2E). Stressed to 200 MPa with E = 200000 MPa, the density is 40000/400000 = 0.10 N/mm<sup>2</sup>, that is 0.10 N·mm per mm<sup>3</sup>; over 100000 mm<sup>3</sup> the total is 10000 N·mm = 10 J.</li></ul><p>Unit conversion matters: 1 kN·m = 1000 J and 1 N·mm = 0.001 J. A density such as 0.10 N/mm<sup>2</sup> is energy per volume, not the stored energy of the whole member.</p>",
            "sources": [
              {
                "id": "CAP4-04-00032",
                "label": "p. 16; topic 4 point 31"
              },
              {
                "id": "CAP4-04-00061",
                "label": "p. 17; topic 4 point 59"
              }
            ]
          },
          {
            "id": "resilience-definitions",
            "title": "Proof resilience, modulus of resilience and toughness",
            "html": "<p><strong>Resilience</strong> is elastic strain energy that is recovered on unloading. Three related terms must be kept apart:</p><ul><li><strong>Proof resilience</strong>: the maximum strain energy a body can store without permanent deformation, a total energy in joules. A spring that can store at most 18 J and still return to its original shape has a proof resilience of 18 J.</li><li><strong>Modulus of resilience</strong>: proof resilience per unit volume, σ<sub>e</sub><sup>2</sup>/(2E) for uniform stress up to the elastic limit σ<sub>e</sub>.</li><li><strong>Toughness</strong>: energy absorbed up to fracture, including plastic work, so it extends far beyond the elastic range.</li></ul><p>Proof resilience is an energy, not a load. A bar of 1.00 × 10<sup>6</sup> mm<sup>3</sup> that stays elastic up to 250 MPa, with E = 200000 MPa, has an energy density of 250<sup>2</sup>/(2 × 200000) = 0.15625 N/mm<sup>2</sup> and therefore a proof resilience of 156250 N·mm = 156.25 J. Neither number is a force, and the ultimate tensile strength is a stress, not an energy.</p>",
            "sources": [
              {
                "id": "CAP4-04-00060",
                "label": "p. 17; topic 4 point 59"
              },
              {
                "id": "CAP4-05-00127",
                "label": "p. 23; topic 5 point 126"
              }
            ]
          },
          {
            "id": "sudden-loading-energy",
            "title": "Suddenly applied loads: double displacement, four times the energy",
            "html": "<p>A load applied suddenly and then maintained, with zero drop height, does work Pδ from the first instant, while the spring stores only kδ<sup>2</sup>/2. At the first peak of an undamped linear system, energy balance Pδ<sub>max</sub> = kδ<sub>max</sub><sup>2</sup>/2 gives <strong>δ<sub>max</sub> = 2P/k</strong>, twice the static displacement. Because stored energy grows with the square of displacement, the peak energy is <strong>four times</strong> the gradual-load value, and the peak stress is twice the static stress.</p><p>Example: stiffness 100 kN/m and a 2 kN force. Applied gradually, δ = 0.02 m and U = 100 × 0.02<sup>2</sup>/2 = 0.02 kN·m = 20 J. Applied suddenly, δ<sub>max</sub> = 0.04 m and U<sub>max</sub> = 100 × 0.04<sup>2</sup>/2 = 0.08 kN·m = 80 J.</p><p>The factor four describes the transient peak of this idealized model. Damping lets the motion settle at the static displacement, a finite rise time reduces the peak, and yielding breaks the linear assumption; a load dropped from a height adds kinetic energy and raises the factor further.</p>",
            "sources": [
              {
                "id": "CAP4-04-00117",
                "label": "p. 19; topic 4 point 118"
              },
              {
                "id": "CAP4-05-00097",
                "label": "p. 22; topic 5 point 96"
              }
            ]
          },
          {
            "id": "truss-determinacy-counts",
            "title": "Counting truss members, restraints and free displacements",
            "html": "<p>Truss counts are necessary checks, never proofs of stability on their own.</p><ul><li><strong>Compound truss</strong>: two separate, internally determinate plane subtrusses need three independent connecting constraints to fix their relative motion, covering two relative translations and one relative rotation. Subtrusses of 7 and 9 members joined by three bars without new joints give m = m<sub>1</sub> + m<sub>2</sub> + 3 = 19.</li><li><strong>Geometry matters</strong>: three connecting bars that are all parallel, or otherwise dependent, do not restrain the three relative motions independently. Each bar resists movement only along its own line, so a small transverse relative movement can remain; the count is satisfied, yet the assembly is a mechanism.</li><li><strong>Kinematic count</strong>: each joint of an ideal pin-jointed plane truss has two translations and no rotational coordinate in the axial-only model, so the number of free displacement coordinates is 2j − r. Seven joints with three independent restraints leave 14 − 3 = 11 unknown displacements. The shortcut 2j − 3 assumes exactly three support restraints; other support arrangements change it.</li></ul>",
            "sources": [
              {
                "id": "CAP4-04-00068",
                "label": "p. 17; topic 4 point 67"
              },
              {
                "id": "CAP4-04-00069",
                "label": "p. 17; topic 4 point 67"
              },
              {
                "id": "CAP4-04-00103",
                "label": "p. 18; topic 4 point 104"
              }
            ]
          },
          {
            "id": "indeterminacy-stability-temperature",
            "title": "Degree of indeterminacy, stability checks and stress-free thermal movement",
            "html": "<p>For a planar structure, the <strong>degree of static indeterminacy</strong> is the number of unknown forces in excess of the independent equilibrium equations. A beam fixed at one end and propped at the other has four reaction components, two forces and a couple at the fixed end plus one vertical force at the prop, against three equations, so it has <strong>one redundant</strong>. A compatibility condition, such as zero vertical deflection at the prop, supplies the missing equation.</p><p>For a connected rigid-jointed plane frame without internal releases, the counting difference is D<sub>c</sub> = 3m + r − 3j. A zero result is necessary for an ordinary stable determinate frame but not sufficient: dependent constraints can leave a mechanism in one part while another part is self-stressed. Stability needs a geometric rank check, not the equality alone.</p><p>Determinate structures accommodate small imposed movements freely. An ideal <strong>three-hinged arch</strong> under a uniform temperature change adjusts its geometry through small hinge rotations, so in first-order analysis the temperature change adds no stress, while the load stresses remain. Restrained hinges, temperature gradients or significant geometry change need separate treatment, and a two-hinged arch, being indeterminate, does develop thermal thrust.</p>",
            "sources": [
              {
                "id": "CAP4-04-00089",
                "label": "p. 18; topic 4 point 89"
              },
              {
                "id": "CAP4-04-00114",
                "label": "p. 19; topic 4 point 113"
              },
              {
                "id": "CAP4-05-00135",
                "label": "p. 23; topic 5 point 136"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-compound-truss-count",
            "status": "review",
            "prompt": "A compound truss is determinate and stable if m = m1 + m2 + 3",
            "html": "<p>The count is necessary, not sufficient. The three connectors must restrain two relative translations and one relative rotation independently; three parallel bars leave a transverse mechanism even though the member count is satisfied.</p>",
            "sources": [
              {
                "id": "CAP4-04-00069",
                "label": "p. 17; topic 4 point 67"
              }
            ]
          },
          {
            "id": "caution-castigliano-numbering",
            "status": "review",
            "prompt": "Castigliano's first theorem is applicable when the system behaves elastically",
            "html": "<p>Texts number Castigliano's theorems differently. The result used here, displacement = ∂U/∂P, requires a conservative linear-elastic system; for nonlinear elasticity the load derivative must be taken of complementary energy.</p>",
            "sources": [
              {
                "id": "CAP4-04-00102",
                "label": "p. 18; topic 4 point 102"
              }
            ]
          },
          {
            "id": "caution-truss-kinematic-count",
            "status": "review",
            "prompt": "The degree of kinematic indeterminacy of a pin-jointed plane frame is 2j − 3",
            "html": "<p>The general count is 2j − r, where r is the number of independent support restraints. It reduces to 2j − 3 only when exactly three restraints are provided, as for a simply supported plane truss.</p>",
            "sources": [
              {
                "id": "CAP4-04-00103",
                "label": "p. 18; topic 4 point 104"
              }
            ]
          },
          {
            "id": "caution-frame-count-stability",
            "status": "corrected",
            "prompt": "A rigid-jointed plane frame is stable and statically determinate if 3m + r = 3j",
            "html": "<p>Corrected: the equality only makes the counting difference zero. Dependent constraints can allow a mechanism and a self-stress state together, so stability and determinacy also require a geometric rank check.</p>",
            "sources": [
              {
                "id": "CAP4-04-00114",
                "label": "p. 19; topic 4 point 113"
              }
            ]
          },
          {
            "id": "caution-sudden-load-factor",
            "status": "review",
            "prompt": "Strain energy from a suddenly applied load is four times that from gradual loading",
            "html": "<p>The factor four is the first transient peak of an undamped linear system under a zero-drop step load. Damping, a finite rise time or yielding change it, and once motion has died away the stored energy equals the gradual value.</p>",
            "sources": [
              {
                "id": "CAP4-04-00117",
                "label": "p. 19; topic 4 point 118"
              }
            ]
          },
          {
            "id": "caution-proof-resilience-load",
            "status": "corrected",
            "prompt": "The maximum load a beam can sustain before permanent deformation is called proof resilience",
            "html": "<p>Corrected: proof resilience is the maximum recoverable strain energy, measured in joules, not a load. Per unit volume it is the modulus of resilience; the 250 MPa bar example stores 156.25 J.</p>",
            "sources": [
              {
                "id": "CAP4-05-00127",
                "label": "p. 23; topic 5 point 126"
              }
            ]
          },
          {
            "id": "caution-three-hinged-temperature",
            "status": "review",
            "prompt": "Temperature change produces no stress in a load-carrying three-hinged arch",
            "html": "<p>Only the added stress from a uniform temperature change is zero, in the ideal first-order model with freely rotating hinges. Load stresses remain, and restrained hinges, gradients or large geometry changes need separate analysis.</p>",
            "sources": [
              {
                "id": "CAP4-05-00135",
                "label": "p. 23; topic 5 point 136"
              }
            ]
          }
        ],
        "gaps": [
          "No portal-frame deflection problem is included, although the syllabus lists it; unit-load or energy calculations for frames need separate practice.",
          "Deflections by the unit-load method, the moment-area theorems and the reciprocal theorem are not worked numerically.",
          "Space-truss and space-frame determinacy counts are not examined.",
          "Impact loads with a drop height are mentioned only qualitatively."
        ]
      },
      "ACiE0405": {
        "code": "ACiE0405",
        "questionCount": 20,
        "formulaSheet": "<ul><li>Arch moment at a section: <strong>M = M<sub>0</sub> − Hy</strong>, with M<sub>0</sub> the simple-beam moment and y the rib height above the springing chord; M = 0 where the thrust-line ordinate M<sub>0</sub>/H equals y.</li><li>Three-hinged arch, level springings, midspan crown hinge: <strong>H = M<sub>0,crown</sub>/h</strong>; full-span UDL gives <strong>H = wL<sup>2</sup>/(8h)</strong>.</li><li>Crown load W with the crown h<sub>1</sub> and h<sub>2</sub> above the two springings: <strong>H = WL/(2(h<sub>1</sub> + h<sub>2</sub>))</strong>.</li><li>Level springings, load W at distance a from A on span 2l: V<sub>B</sub> = Wa/(2l) and V<sub>A</sub> = W − V<sub>B</sub>.</li><li>Thrust influence line of that three-hinged arch: triangle with peak <strong>L/(4h)</strong> at the crown.</li><li>Rolling point load on a symmetric three-hinged parabolic arch: moment envelope peaks <strong>L/(2√3)</strong> either side of the crown.</li><li>Normal thrust <strong>N = H cos θ + V sin θ</strong>; radial shear <strong>Q = V cos θ − H sin θ</strong>.</li><li>Two-hinged semicircle, constant EI, bending only: crown load P gives <strong>H = P/π</strong>; UDL w over the left half gives <strong>H = 2wR/(3π)</strong>, full span 4wR/(3π); reaction lines meet at height <strong>πR/2</strong>.</li></ul>",
        "blocks": [
          {
            "id": "influence-line-concept",
            "title": "What an influence line shows, and how it differs from a moment diagram",
            "html": "<p>An <strong>influence line</strong> fixes two things, the response type (a reaction, a shear or a bending moment) and the section where it is measured, then records how that response changes as a single unit load moves across the structure. Its horizontal coordinate is the <em>position of the load</em>.</p><p>A <strong>bending-moment diagram</strong> does the opposite: it fixes one loading arrangement and plots the moment at every section, so its horizontal coordinate is the <em>position of the section</em>. The two graphs can look alike, which is why confusing them is a classic error.</p><p>Influence lines serve moving loads. Multiplying an ordinate by a point load gives that load's contribution, and multiplying the area under a segment by a uniform intensity gives a distributed load's contribution; the most unfavourable placement follows from where the ordinates are largest. An envelope for a train of several axles needs this placement and superposition, not a single reading. Deflected shapes and material stress–strain curves are unrelated graphs.</p>",
            "sources": [
              {
                "id": "CAP4-04-00073",
                "label": "p. 17; topic 4 point 71"
              },
              {
                "id": "CAP4-05-00137",
                "label": "p. 23; topic 5 point 138"
              }
            ]
          },
          {
            "id": "cantilever-influence-lines",
            "title": "Influence lines on a cantilever: support reaction, shear and moment",
            "html": "<p>A cantilever makes influence lines easy to build, because every response comes from the free-side free body.</p><table><thead><tr><th scope='col'>Response</th><th scope='col'>Unit load between root and section C</th><th scope='col'>Unit load between C and the tip</th></tr></thead><tbody><tr><td>Vertical support reaction</td><td>+1</td><td>+1</td></tr><tr><td>Shear at C</td><td>0</td><td>+1, a rectangle</td></tr><tr><td>Moment at C</td><td>0</td><td>Linear, zero at C and largest at the tip</td></tr></tbody></table><p>The vertical reaction always equals the unit load by vertical equilibrium, so its influence line is a unit rectangle over the whole span; the <em>support moment</em>, by contrast, varies with the load's lever arm and is linear. For a section C, a load on the root side lies outside the free-side free body and contributes nothing. A load on the tip side contributes unit shear, taking downward load on the free-side segment as positive, and a moment equal to its distance from C, so the moment ordinates grow linearly from zero at C to their largest value at the free end. With downward load and sagging-positive moment these moment ordinates are negative, since the cantilever hogs.</p>",
            "sources": [
              {
                "id": "CAP4-04-00062",
                "label": "p. 17; topic 4 point 60"
              },
              {
                "id": "CAP4-04-00081",
                "label": "p. 18; topic 4 point 80"
              },
              {
                "id": "CAP4-04-00036",
                "label": "p. 16; topic 4 point 35"
              }
            ]
          },
          {
            "id": "moving-loads-simple-span",
            "title": "Moving loads on a simple span: long uniform loads and wheel trains",
            "html": "<p>For a simple span, the influence line for moment at any section is a triangle that is positive over the whole span, with the tallest peak, L/4, belonging to the midspan section. Two placement rules follow.</p><ul><li><strong>Uniform load longer than the span</strong>: covering the entire span captures the whole positive influence area, so full coverage produces the absolute maximum bending moment, which occurs at midspan and equals wL<sup>2</sup>/8. Covering only part of the span, or stopping an edge of the load at midspan, leaves positive area unused.</li><li><strong>Train of concentrated wheel loads</strong>: between wheels there is no distributed load, so shear is constant and moment varies linearly. A positive maximum can therefore occur only where the slope changes, under a wheel, or along a zero-shear plateau whose ends are wheel sections. Evaluating the moment under each wheel for each trial position is enough to find the peak.</li></ul><p>The wheel rule assumes downward point loads only. An added distributed load or applied couple removes the piecewise-linear shape, and the rule must then be re-examined.</p>",
            "sources": [
              {
                "id": "CAP4-04-00035",
                "label": "pp. 16, 18; topic 4 point 34; topic 4 point 92"
              },
              {
                "id": "CAP4-04-00063",
                "label": "p. 17; topic 4 point 62"
              }
            ]
          },
          {
            "id": "three-hinged-arch-statics",
            "title": "Three-hinged arches: hinge placement and crown-hinge equilibrium",
            "html": "<p>A <strong>three-hinged arch</strong> has a hinge at each springing and one internal hinge. The pinned springings supply four reaction components, and the three equilibrium equations plus the zero-moment condition at the internal hinge make the arch statically determinate. The internal hinge is usually at the crown but need not be, provided the three hinges are <strong>not collinear</strong> and the supports restrain the arch adequately; collinear hinges form a degenerate mechanism.</p><ul><li><strong>Vertical reactions with level springings</strong>: the horizontal reactions have no moment about either springing, so the vertical reactions match those of a simple beam. With springings 18 m apart and 90 kN applied 6 m from A, V<sub>B</sub> = 90 × 6/18 = 30 kN and V<sub>A</sub> = 60 kN. In general V<sub>B</sub> = Wa/(2l) for span 2l with a measured from A.</li><li><strong>Thrust from the crown hinge</strong>: H = M<sub>0,crown</sub>/h. A full-span UDL of 4 kN/m on a 20 m span with 5 m rise gives M<sub>0</sub> = 4 × 400/8 = 200 kN·m and H = 200/5 = 40 kN; each support pushes inward on the arch, and the arch pushes outward on its supports.</li><li><strong>Springings at different levels</strong>: for a crown load W, with the crown h<sub>1</sub> above the left and h<sub>2</sub> above the right springing, <strong>H = WL/(2(h<sub>1</sub> + h<sub>2</sub>))</strong>.</li></ul>",
            "moreHtml": "<p>Derivation of the unequal-level result: moments of each half about the crown hinge give V<sub>A</sub>(L/2) = Hh<sub>1</sub> and V<sub>B</sub>(L/2) = Hh<sub>2</sub>, the crown load itself having no lever arm. Adding and using V<sub>A</sub> + V<sub>B</sub> = W gives 2H(h<sub>1</sub> + h<sub>2</sub>)/L = W. A squared height sum in the denominator would give force per length, not force.</p>",
            "sources": [
              {
                "id": "CAP4-04-00115",
                "label": "p. 19; topic 4 point 115"
              },
              {
                "id": "CAP4-04-00088",
                "label": "p. 18; topic 4 point 88"
              },
              {
                "id": "CAP4-04-00094",
                "label": "p. 18; topic 4 point 94"
              },
              {
                "id": "CAP4-04-00034",
                "label": "p. 16; topic 4 point 33"
              }
            ]
          },
          {
            "id": "three-hinged-ild-envelope",
            "title": "Three-hinged arch influence lines and the rolling-load moment envelope",
            "html": "<p>For a three-hinged arch with level springings and a midspan crown hinge, H = M<sub>0,crown</sub>/h for every load position. The influence line for thrust is therefore the crown simple-beam moment influence line divided by the rise: a triangle with peak <strong>L/(4h)</strong> at the crown. For a 24 m span and 6 m rise the peak ordinate is 24/(4 × 6) = 1.00, a dimensionless ratio of thrust to load, not a length or a moment.</p><p>A rolling point load on a symmetric parabolic three-hinged arch produces a bending-moment <strong>envelope</strong>, the largest moment each section can ever experience. With the load P at section s on the left half, crown equilibrium gives H = Ps/(2h), and with y = 4hs(L − s)/L<sup>2</sup> the moment there is M = Ps(L − s)(L − 2s)/L<sup>2</sup>. Writing t = s/L, the maximum requires 1 − 6t + 6t<sup>2</sup> = 0, so the envelope peaks at <strong>L/(2√3) ≈ 0.289L</strong> on either side of the crown. This is an envelope property of the parabolic arch under a rolling load, not the location of the maximum for an arbitrary fixed load.</p>",
            "moreHtml": "<p>The peak section lies at t = 1/2 − 1/(2√3) ≈ 0.211 of the span from the nearer springing, where the envelope moment is PL·t(1 − t)(1 − 2t) = PL/(6√3) ≈ 0.096PL.</p>",
            "sources": [
              {
                "id": "CAP4-04-00052",
                "label": "p. 17; topic 4 point 50"
              },
              {
                "id": "CAP4-04-00037",
                "label": "p. 16; topic 4 point 36"
              }
            ]
          },
          {
            "id": "thrust-line-and-arch-actions",
            "title": "Line of thrust, normal thrust and radial shear in arches",
            "html": "<p>At any arch section M = M<sub>0</sub> − Hy = H(y<sub>t</sub> − y), where y<sub>t</sub> = M<sub>0</sub>/H is the ordinate of the <strong>line of thrust</strong>. Bending vanishes only where the thrust line passes through the rib axis. A thrust line parallel to the axis but offset still leaves a lever arm, and the straight chord joining the hinges is generally not the curved rib axis.</p><p>Resolve the section resultant (H, V) along the local tangent (cos θ, sin θ) and normal to it:</p><ul><li><strong>Normal thrust</strong> N = H cos θ + V sin θ, the tangential projection;</li><li><strong>Radial shear</strong> Q = V cos θ − H sin θ, the other projection, with signs following the chosen positive directions.</li></ul><p>For a parabolic three-hinged arch with level springings, a midspan crown hinge and a full-span load per horizontal metre, H = wL<sup>2</sup>/(8h) and the vertical shear force equals H tan θ at every section. Hence Q = 0 everywhere, springings included, and M = 0 as well: the parabola is the <strong>funicular</strong> shape for this load and carries it in pure compression. The global vertical component V is not zero, so mistaking V for the local radial shear produces a false maximum at the springings. Other load patterns do cause radial shear, which must be evaluated along the actual arch.</p>",
            "sources": [
              {
                "id": "CAP4-04-00041",
                "label": "pp. 16, 17; topic 4 point 39; topic 4 point 53"
              },
              {
                "id": "CAP4-05-00109",
                "label": "p. 22; topic 5 point 107"
              },
              {
                "id": "CAP4-04-00096",
                "label": "p. 18; topic 4 point 96"
              }
            ]
          },
          {
            "id": "two-hinged-semicircular-arches",
            "title": "Two-hinged semicircular arches: one redundant, compatibility and reaction locus",
            "html": "<p>A stable arch pinned at both springings with no internal hinge has four reaction components and three equilibrium equations, so it is indeterminate to <strong>degree one</strong>. With the horizontal thrust H as the redundant, the missing equation is <strong>compatibility</strong>: the springings do not move apart. Inventing a crown hinge would analyse a different structure.</p><p>For a semicircular rib of radius R with constant EI and immovable supports, considering bending deformation only:</p><ul><li>A crown point load P gives H = P/π. The radius cancels, so arches of radii 5 m, 7.5 m and 10 m under the same crown load have equal thrusts, 1 : 1 : 1. This independence does not survive nonuniform stiffness, axial shortening, temperature change or support movement.</li><li>A uniform load w per horizontal metre over the whole span gives H = 4wR/(3π); by symmetry and superposition, loading only the left half gives half of it, <strong>H = 2wR/(3π)</strong>. For R = 6 m and w = 3 kN/m this is 36/(3π) ≈ 3.82 kN.</li><li>A point load P at distance a from the left springing gives V<sub>A</sub> = P(2R − a)/(2R) and H = Pa(2R − a)/(πR<sup>2</sup>). The two reaction lines meet directly above the load at height (a·V<sub>A</sub>)/H = <strong>πR/2</strong>, whatever the value of a, so the intersection moves along a horizontal straight line.</li></ul>",
            "moreHtml": "<p>In general H = (∫M<sub>0</sub>y ds)/(∫y<sup>2</sup> ds) for constant EI and bending only. For the semicircle ∫y<sup>2</sup> ds = πR<sup>3</sup>/2, and a crown load gives ∫M<sub>0</sub>y ds = PR<sup>3</sup>/2, hence H = P/π. A load specified per metre of curved rib instead of per horizontal metre, or a model with finite axial flexibility, gives different results.</p>",
            "sources": [
              {
                "id": "CAP4-04-00038",
                "label": "p. 16; topic 4 point 38"
              },
              {
                "id": "CAP4-04-00047",
                "label": "p. 16; topic 4 point 45"
              },
              {
                "id": "CAP4-04-00046",
                "label": "p. 16; topic 4 point 44"
              },
              {
                "id": "CAP4-04-00111",
                "label": "p. 19; topic 4 point 110"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-unequal-springings-thrust",
            "status": "review",
            "prompt": "Three-hinged arch with supports at heights h1 and h2 and a central load W: thrust WL divided by a function of h1 + h2",
            "html": "<p>The printed denominator cannot be decoded reliably from the extracted text. Equilibrium, with h<sub>1</sub> and h<sub>2</sub> measured from each springing up to the crown, gives H = WL/(2(h<sub>1</sub> + h<sub>2</sub>)); a squared height sum would give wrong units.</p>",
            "sources": [
              {
                "id": "CAP4-04-00034",
                "label": "p. 16; topic 4 point 33"
              }
            ]
          },
          {
            "id": "caution-rolling-load-envelope",
            "status": "review",
            "prompt": "Maximum bending moment in a three-hinged arch under point load occurs on either side of the crown at a fixed distance",
            "html": "<p>The L/(2√3) result needs a symmetric parabolic arch with level supports and a midspan crown hinge, and it describes the envelope under a rolling point load. It is not the maximum-moment location for an arbitrary fixed point load.</p>",
            "sources": [
              {
                "id": "CAP4-04-00037",
                "label": "p. 16; topic 4 point 36"
              }
            ]
          },
          {
            "id": "caution-thrust-hinge-axis",
            "status": "corrected",
            "prompt": "In a two-hinged arch, the moment is zero where the thrust axis and the hinge axis coincide",
            "html": "<p>Corrected: bending vanishes where the line of thrust passes through the arch's own rib axis, since M = H(y<sub>t</sub> − y). The straight line joining the hinges is generally not the rib axis, and parallel offset lines still leave a moment.</p>",
            "sources": [
              {
                "id": "CAP4-04-00041",
                "label": "pp. 16, 17; topic 4 point 39; topic 4 point 53"
              }
            ]
          },
          {
            "id": "caution-half-span-semicircle-thrust",
            "status": "review",
            "prompt": "Two-hinged semicircular arch with UDL w over the left half: horizontal thrust 2wR/(3π)",
            "html": "<p>Valid for constant EI, immovable springings, load per horizontal metre and bending deformation only. The extracted capsule text shows only 3 in the denominator; π must be included, giving about 3.82 kN for R = 6 m and w = 3 kN/m.</p>",
            "sources": [
              {
                "id": "CAP4-04-00046",
                "label": "p. 16; topic 4 point 44"
              }
            ]
          },
          {
            "id": "caution-thrust-ild-peak",
            "status": "review",
            "prompt": "The horizontal-thrust ILD of a three-hinged arch is a triangle with central ordinate L/(4h)",
            "html": "<p>The extracted 4Lh is damaged; the dimensionally consistent value is L/(4h), a thrust-per-unit-load ratio. It assumes level springings with the internal hinge at the midspan crown, which the capsule wording does not state.</p>",
            "sources": [
              {
                "id": "CAP4-04-00052",
                "label": "p. 17; topic 4 point 50"
              }
            ]
          },
          {
            "id": "caution-wheel-load-rule",
            "status": "review",
            "prompt": "Maximum bending moment due to a train of wheel loads always occurs under a wheel load",
            "html": "<p>True for downward point loads alone, because the moment is piecewise linear between wheels. The maximum may extend over a zero-shear plateau between wheels, and an added distributed load or couple voids the rule.</p>",
            "sources": [
              {
                "id": "CAP4-04-00063",
                "label": "p. 17; topic 4 point 62"
              }
            ]
          },
          {
            "id": "caution-arch-vertical-reaction",
            "status": "review",
            "prompt": "Vertical reaction of an arch with load W at distance a on total span 2l is Wa/(2l)",
            "html": "<p>The extracted W2la does not say which support is meant or where a is measured from. With level springings and a measured from A, Wa/(2l) is the reaction at B, and A carries the remainder: 60 kN and 30 kN for 90 kN at 6 m on 18 m.</p>",
            "sources": [
              {
                "id": "CAP4-04-00088",
                "label": "p. 18; topic 4 point 88"
              }
            ]
          },
          {
            "id": "caution-parabolic-arch-springing-shear",
            "status": "corrected",
            "prompt": "Maximum shear force in a three-hinged parabolic arch usually occurs at the springings",
            "html": "<p>Corrected: under a full-span horizontal UDL the parabolic three-hinged arch is funicular and its radial shear is zero everywhere, springings included. For other loads, radial shear must be evaluated along the arch rather than assumed largest at the springings.</p>",
            "sources": [
              {
                "id": "CAP4-04-00096",
                "label": "p. 18; topic 4 point 96"
              }
            ]
          },
          {
            "id": "caution-reaction-locus",
            "status": "review",
            "prompt": "The locus of reaction of a two-hinged semicircular arch is a straight line",
            "html": "<p>The claim needs a definition and assumptions. For constant EI, immovable springings and bending-only compatibility, the intersection of the two reaction lines under a moving vertical load lies on a horizontal line πR/2 above the springings, for interior load positions.</p>",
            "sources": [
              {
                "id": "CAP4-04-00111",
                "label": "p. 19; topic 4 point 110"
              }
            ]
          },
          {
            "id": "caution-third-hinge-anywhere",
            "status": "review",
            "prompt": "A three-hinged arch is hinged at the supports and anywhere in the arch",
            "html": "<p>The internal hinge need not be at the crown, but the three hinges must not be collinear and the supports must restrain the arch adequately; collinear hinges give a degenerate mechanism.</p>",
            "sources": [
              {
                "id": "CAP4-04-00115",
                "label": "p. 19; topic 4 point 115"
              }
            ]
          }
        ],
        "gaps": [
          "Shear influence lines for simple and overhanging spans, and the Muller-Breslau construction, are not examined.",
          "Numerical use of influence-line ordinates and areas for multi-axle trains, including absolute maximum moment positioning, is not worked.",
          "Two-hinged arch coverage here is limited to semicircular ribs with constant EI; rib shortening, temperature and support movement are not quantified.",
          "Arches with springings at different levels are covered only for a crown load."
        ]
      },
      "ACiE0406": {
        "code": "ACiE0406",
        "questionCount": 18,
        "formulaSheet": "<ul><li>Rotational stiffness at end A of a prismatic member with no chord rotation: far end fixed <strong>4EI/L</strong>; far end hinged <strong>3EI/L</strong>; far end guided (rotation fixed, free transverse sliding) <strong>EI/L</strong>.</li><li>Slope-deflection with no chord rotation or span load: <strong>M<sub>A</sub> = (2EI/L)(2θ<sub>A</sub> + θ<sub>B</sub>)</strong>.</li><li>Distribution factor <strong>DF<sub>i</sub> = k<sub>i</sub>/Σk</strong> over the members at the joint; balancing increment = −DF<sub>i</sub> × unbalanced moment.</li><li>Two-hinged arch, level immovable springings, bending only: <strong>H = (∫M<sub>0</sub>y dμ)/(∫y<sup>2</sup> dμ)</strong> with dμ = ds/(EI).</li><li>Parabolic two-hinged arch: full-span UDL <strong>H = wL<sup>2</sup>/(8h)</strong>; zero-to-w triangular load <strong>H = wL<sup>2</sup>/(16h)</strong>; shallow-arch crown load <strong>H = 25WL/(128h)</strong>.</li><li>Uniform heating with fixed span: <strong>ΔH = (αΔT·L)/f<sub>HH</sub></strong>.</li><li>Shape factor Z<sub>p</sub>/Z<sub>e</sub>: rectangle <strong>1.5</strong>; rhombus bent about a diagonal <strong>2.0</strong>.</li><li>Propped cantilever under full-span UDL: prop reaction 3wL/8, elastic contraflexure <strong>L/4</strong> from the fixed end; collapse hinge <strong>(√2 − 1)L ≈ 0.414L</strong> from the prop.</li></ul>",
        "blocks": [
          {
            "id": "continuous-beams-method-families",
            "title": "Continuous beams and the force versus displacement method families",
            "html": "<p>A <strong>continuous beam</strong> is one unbroken member running over more than two supports, so it transmits bending moment across its interior supports. Two separate beams that merely meet over a middle support do not; they are two simple spans. An interior simple support restrains deflection but creates no hinge in a continuous beam.</p><p>Indeterminate structures are solved by one of two method families:</p><ul><li><strong>Force (flexibility) methods</strong> take redundant forces as the unknowns and enforce compatibility of displacements, for example zero deflection at a prop or zero spreading of arch springings.</li><li><strong>Displacement (stiffness) methods</strong> take joint translations and rotations as the unknowns and enforce equilibrium. Assembling Kd = F and solving for the nodal displacements d is the stiffness matrix method; member forces are then recovered from those displacements through the member stiffness relations.</li></ul><p>Slope-deflection and moment distribution belong to the displacement family, whereas limit analysis of collapse mechanisms and graphical force polygons are different tools altogether.</p>",
            "sources": [
              {
                "id": "CAP4-04-00010",
                "label": "p. 15; topic 4 point 10"
              },
              {
                "id": "CAP4-04-00042",
                "label": "p. 16; topic 4 point 40"
              }
            ]
          },
          {
            "id": "rotational-stiffness-end-conditions",
            "title": "Rotational stiffness and far-end conditions: 4EI/L, 3EI/L and EI/L",
            "html": "<p>The <strong>rotational stiffness</strong> of a member end is the moment needed per unit rotation there, and it depends on how the far end is held. For a prismatic member with no span load and both ends held against transverse translation, slope-deflection gives M<sub>A</sub> = (2EI/L)(2θ<sub>A</sub> + θ<sub>B</sub>).</p><ul><li><strong>Far end fixed</strong>, θ<sub>B</sub> = 0: M<sub>A</sub>/θ<sub>A</sub> = 4EI/L.</li><li><strong>Far end hinged</strong>: zero far-end moment requires θ<sub>B</sub> = −θ<sub>A</sub>/2, giving M<sub>A</sub>/θ<sub>A</sub> = 3EI/L. With EI = 16000 kN·m<sup>2</sup> and L = 4 m this is 12000 kN·m/rad, against 16000 kN·m/rad for a fixed far end.</li><li><strong>Far end guided</strong>, prevented from rotating but free to slide transversely without force: with no transverse force the internal moment is constant, and integrating the curvature gives a relative end rotation θ = ML/(EI), so the stiffness is only EI/L.</li></ul><p>The more freedom the far end has, the smaller the stiffness. Choosing the correct far-end condition matters because these stiffnesses decide how moment is shared at a joint.</p>",
            "sources": [
              {
                "id": "CAP4-04-00055",
                "label": "p. 17; topic 4 point 54"
              },
              {
                "id": "CAP4-04-00043",
                "label": "p. 16; topic 4 point 41"
              }
            ]
          },
          {
            "id": "moment-distribution",
            "title": "Moment distribution: distribution factors, balancing and what the iteration solves",
            "html": "<p><strong>Moment distribution</strong>, introduced by Hardy Cross, releases and rebalances joints in turn. At a joint, each member takes a share of the unbalanced moment in proportion to its rotational stiffness, evaluated with its actual far-end condition: <strong>DF<sub>i</sub> = k<sub>i</sub>/Σk</strong>, where the sum covers all members meeting at that joint, so the factors add to one.</p><ul><li>Stiffnesses of 20, 30 and 50 kN·m/rad: the factor for the 30 kN·m/rad member is 30/(20 + 30 + 50) = 0.30.</li><li>Stiffnesses of 6000 and 4000 kN·m/rad with an unbalance of +50 kN·m: factors 0.6 and 0.4 and balancing increments of −30 kN·m and −20 kN·m. The increments oppose the unbalance and add to −50 kN·m.</li></ul><p>Carrying increments to the far ends and repeating the balancing converges to the solution of the <strong>joint-equilibrium equations of the slope-deflection method</strong>; the procedure is an iterative way of solving those simultaneous equations. For a frame that sways, translational equilibrium must be included as well, otherwise a different, non-sway model is being solved. Castigliano (energy derivatives), Muller-Breslau (influence-line construction) and Mohr (graphical stress and structural methods) are associated with other contributions.</p>",
            "sources": [
              {
                "id": "CAP4-05-00128",
                "label": "p. 23; topic 5 point 127"
              },
              {
                "id": "CAP4-04-00079",
                "label": "p. 18; topic 4 point 77"
              },
              {
                "id": "CAP4-04-00044",
                "label": "pp. 16, 18; topic 4 point 42; topic 4 point 103"
              },
              {
                "id": "CAP4-04-00057",
                "label": "p. 17; topic 4 point 56"
              }
            ]
          },
          {
            "id": "two-hinged-arch-compatibility",
            "title": "Two-hinged arch thrust from compatibility, with parabolic examples",
            "html": "<p>Release the horizontal thrust of a two-hinged arch with level, immovable springings and write the moment as M = M<sub>0</sub> − Hy, where M<sub>0</sub> is the released simple-beam moment and y the rib height above the support chord. With U = ∫M<sup>2</sup> dμ/2 and dμ = ds/(EI), zero horizontal movement requires ∂U/∂H = 0, that is ∫(M<sub>0</sub> − Hy)y dμ = 0. Hence <strong>H = (∫M<sub>0</sub>y dμ)/(∫y<sup>2</sup> dμ)</strong>, integrated over the whole arch: one thrust for the whole arch, not a separate local value at each point.</p><ul><li><strong>Shallow parabola, crown load W</strong>: with y = 4hx(L − x)/L<sup>2</sup>, ds ≈ dx and constant EI, the integrals are 5WhL<sup>2</sup>/48 and 8h<sup>2</sup>L/15, giving H = 25WL/(128h). For 32 kN on a 16 m span with 2 m rise, H = 25 × 32 × 16/(128 × 2) = 50 kN.</li><li><strong>Triangular load</strong> rising from zero to w across the span: it and its mirror image add to a full UDL w, and by symmetry and linearity each carries half of wL<sup>2</sup>/(8h). Hence H = wL<sup>2</sup>/(16h); for 8 kN/m on a 12 m span with 3 m rise, H = 8 × 144/48 = 24 kN. Keep the rise h distinct from the thrust H.</li></ul><p>Retaining the exact arc-length weighting instead of ds ≈ dx generally changes the coefficient.</p>",
            "sources": [
              {
                "id": "CAP4-04-00048",
                "label": "p. 17; topic 4 point 46"
              },
              {
                "id": "CAP4-04-00067",
                "label": "p. 17; topic 4 point 66"
              },
              {
                "id": "CAP4-04-00077",
                "label": "p. 18; topic 4 point 75"
              }
            ]
          },
          {
            "id": "parabolic-arch-funicular-temperature",
            "title": "Parabolic two-hinged arches: funicular UDL and temperature thrust",
            "html": "<p>For a symmetric two-hinged parabolic arch carrying a uniform load w over its full horizontal span, the compatibility thrust is <strong>H = wL<sup>2</sup>/(8h)</strong>. Then M<sub>0</sub> = wx(L − x)/2 and Hy = [wL<sup>2</sup>/(8h)][4hx(L − x)/L<sup>2</sup>] = wx(L − x)/2, so M = 0 everywhere. Because the vertical shear equals H tan θ at every section, the radial shear is zero too: the rib carries <strong>pure normal thrust</strong>, compression along the tangent. This funicular state belongs to that loading and to the first-order, bending-only model; retaining axial shortening or changing the load pattern disturbs it.</p><p>A uniform temperature rise would lengthen the free span by αΔT L. If the springings cannot move apart, an elastic displacement must cancel that expansion, so the inward thrust <strong>increases</strong> by ΔH = (αΔT·L)/f<sub>HH</sub>, where f<sub>HH</sub> is the horizontal flexibility of the released arch. By the same reasoning uniform cooling reduces the thrust. A movable springing or a temperature gradient through the rib is a different case.</p>",
            "sources": [
              {
                "id": "CAP4-04-00116",
                "label": "p. 19; topic 4 point 116"
              },
              {
                "id": "CAP4-04-00097",
                "label": "p. 18; topic 4 point 97"
              }
            ]
          },
          {
            "id": "plastic-hinges-shape-factor",
            "title": "Plastic hinges, the rigid-segment mechanism and shape factor",
            "html": "<p>Plastic analysis assumes an elastic–perfectly plastic material. As the moment grows, a section yields from its extreme fibres inward until it reaches the <strong>plastic moment</strong> M<sub>p</sub> = f<sub>y</sub>Z<sub>p</sub> and then rotates freely at that moment, forming a <strong>plastic hinge</strong>. In the collapse-mechanism idealization, elastic deformations are negligible beside the large hinge rotations, so the segments between successive hinges move as <strong>rigid bodies</strong> while all relative rotation is concentrated at the hinges. This is a modelling simplification, not a claim that the segments are infinitely stiff.</p><p>The <strong>shape factor</strong> Z<sub>p</sub>/Z<sub>e</sub> = M<sub>p</sub>/M<sub>y</sub> measures the reserve beyond first yield, assuming equal tension and compression yield, no axial force and no buckling or strain hardening:</p><ul><li>Rectangle b × d: Z<sub>e</sub> = bd<sup>2</sup>/6 and Z<sub>p</sub> = bd<sup>2</sup>/4, so the ratio is <strong>1.5</strong>.</li><li>Solid rhombus with horizontal diagonal b and vertical diagonal d, bent about the horizontal diagonal: the width at height y is b(1 − 2|y|/d), so I = bd<sup>3</sup>/48, Z<sub>e</sub> = I/(d/2) = bd<sup>2</sup>/24 and Z<sub>p</sub> = ∫|y| dA = bd<sup>2</sup>/12, giving <strong>2.0</strong>.</li></ul>",
            "sources": [
              {
                "id": "CAP4-04-00045",
                "label": "p. 16; topic 4 point 43"
              },
              {
                "id": "CAP4-01-00080",
                "label": "p. 4; topic 1 point 76"
              },
              {
                "id": "CAP4-04-00072",
                "label": "p. 17; topic 4 point 70"
              }
            ]
          },
          {
            "id": "propped-cantilever-elastic-plastic",
            "title": "Propped cantilever under UDL: elastic contraflexure versus collapse hinge",
            "html": "<p>Two special sections of a propped cantilever carrying a full-span UDL are often confused.</p><ul><li><strong>Elastic stage</strong>: compatibility, zero deflection at an unyielding prop, gives a prop reaction of 3wL/8. Measuring z from the prop, M = (3wL/8)z − wz<sup>2</sup>/2, which returns to zero at z = 3L/4. The <strong>point of contraflexure</strong> is therefore L/4 from the fixed end, with shear deformation neglected.</li><li><strong>Plastic collapse</strong>: with equal, uniform sagging and hogging capacity M<sub>p</sub>, hinges form at the fixed end and at an interior section a from the fixed end and b = L − a from the prop. Virtual work gives w = 2M<sub>p</sub>(2/a + 1/b)/L; minimizing this collapse load over a gives a = √2·b, hence <strong>b = (√2 − 1)L ≈ 0.414L from the prop</strong>.</li></ul><p>The 0.414L section is a plastic hinge in a collapse mechanism, not an elastic zero-moment section, and the L/4 contraflexure point is not a hinge at all. The collapse location also depends on the full-span UDL and uniform M<sub>p</sub>; other loads or capacities move it.</p>",
            "moreHtml": "<p>Supporting values: the elastic fixed-end moment is (3wL/8)L − wL<sup>2</sup>/2 = −wL<sup>2</sup>/8, and the largest sagging moment is 9wL<sup>2</sup>/128 at 3L/8 from the prop. Substituting b = (√2 − 1)L and a = (2 − √2)L into the virtual-work equation gives the collapse load w<sub>c</sub> = (6 + 4√2)M<sub>p</sub>/L<sup>2</sup> ≈ 11.66M<sub>p</sub>/L<sup>2</sup>.</p>",
            "sources": [
              {
                "id": "CAP4-04-00017",
                "label": "p. 15; topic 4 point 16"
              },
              {
                "id": "CAP4-04-00016",
                "label": "p. 15; topic 4 point 16"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-propped-hinge-location",
            "status": "review",
            "prompt": "In a propped cantilever, the internal hinge is located 0.414L from the propped end",
            "html": "<p>Holds only for plastic collapse under a full-span UDL with uniform, equal sagging and hogging plastic moment. It is a plastic-hinge location, distinct from the elastic contraflexure point L/4 from the fixed end.</p>",
            "sources": [
              {
                "id": "CAP4-04-00016",
                "label": "p. 15; topic 4 point 16"
              }
            ]
          },
          {
            "id": "caution-guided-far-end",
            "status": "review",
            "prompt": "Stiffness of end A when the far end B is a vertically guided roller is EI/L",
            "html": "<p>The capsule does not define the guide fully. EI/L applies when B cannot rotate but slides transversely without force; restraining B's translation as well gives 4EI/L, and a translation-fixed hinge at B gives 3EI/L.</p>",
            "sources": [
              {
                "id": "CAP4-04-00043",
                "label": "p. 16; topic 4 point 41"
              }
            ]
          },
          {
            "id": "caution-two-hinged-thrust-formula",
            "status": "review",
            "prompt": "Horizontal thrust of a two-hinged arch with constant EI is a ratio of integrals of M·y and y²",
            "html": "<p>The capsule formula is corrupted in both extractions. The version taught here, H = (∫M<sub>0</sub>y dμ)/(∫y<sup>2</sup> dμ) with dμ = ds/(EI) and ds the arc length, is reconstructed from compatibility rather than read from the printed page.</p>",
            "sources": [
              {
                "id": "CAP4-04-00048",
                "label": "p. 17; topic 4 point 46"
              }
            ]
          },
          {
            "id": "caution-parabolic-crown-coefficient",
            "status": "review",
            "prompt": "Parabolic two-hinged arch with crown load W: horizontal thrust 25WL/(128h)",
            "html": "<p>The printed coefficient is unreadable in the extraction. The value 25/128 follows from the shallow-arch approximation ds ≈ dx with constant EI; exact arc-length weighting changes it, and the original typography remains unconfirmed.</p>",
            "sources": [
              {
                "id": "CAP4-04-00067",
                "label": "p. 17; topic 4 point 66"
              }
            ]
          },
          {
            "id": "caution-uvl-thrust-notation",
            "status": "review",
            "prompt": "Two-hinged parabolic arch under a load varying from zero to w: thrust wL² over 16 times the rise",
            "html": "<p>The capsule writes the denominator as 16H, which confuses rise with thrust. With rise h, symmetric stiffness, immovable supports and bending-only compatibility, H = wL<sup>2</sup>/(16h), 24 kN in the worked example.</p>",
            "sources": [
              {
                "id": "CAP4-04-00077",
                "label": "p. 18; topic 4 point 75"
              }
            ]
          },
          {
            "id": "caution-temperature-thrust",
            "status": "review",
            "prompt": "In a two-hinged parabolic arch, an increase in temperature increases the horizontal thrust",
            "html": "<p>True for uniform heating of a material with a positive expansion coefficient when the springings keep a fixed spacing, in a stable linear model. A movable springing or a temperature gradient needs separate treatment.</p>",
            "sources": [
              {
                "id": "CAP4-04-00097",
                "label": "p. 18; topic 4 point 97"
              }
            ]
          },
          {
            "id": "caution-normal-thrust-only",
            "status": "review",
            "prompt": "A symmetric two-hinged parabolic arch under UDL on the entire span carries normal thrust only",
            "html": "<p>Valid only for a uniform load over the whole horizontal span with first-order, bending-only compatibility. Other load patterns, or allowing for axial shortening, introduce bending and radial shear.</p>",
            "sources": [
              {
                "id": "CAP4-04-00116",
                "label": "p. 19; topic 4 point 116"
              }
            ]
          },
          {
            "id": "caution-distribution-factor-denominator",
            "status": "corrected",
            "prompt": "The distribution factor is the ratio of the stiffness of a member to that of a member",
            "html": "<p>Corrected: the denominator is the sum of the rotational stiffnesses of all members meeting at the joint, each with its actual far-end condition. With 20, 30 and 50 kN·m/rad, the 30 kN·m/rad member takes 0.30.</p>",
            "sources": [
              {
                "id": "CAP4-05-00128",
                "label": "p. 23; topic 5 point 127"
              }
            ]
          }
        ],
        "gaps": [
          "Influence lines for continuous beams, listed in the syllabus, are not examined by these questions.",
          "Carry-over factors, fixed-end moments and complete numerical moment-distribution tables are not worked.",
          "Sway frames appear only qualitatively; slope-deflection with chord rotation and stiffness-matrix assembly are not practised numerically.",
          "Plastic analysis is limited to shape factors and the propped cantilever; fixed beams, frames and combined mechanisms lie outside this coverage."
        ]
      }
    });
})();
