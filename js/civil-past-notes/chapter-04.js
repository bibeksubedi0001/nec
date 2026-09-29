(function () {
    "use strict";
    window.CIVIL_PAST_NOTE_TOPICS = window.CIVIL_PAST_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_PAST_NOTE_TOPICS, {
     "ACiE0401": {
      "code": "ACiE0401",
      "questionCount": 24,
      "format": 2,
      "summary": "<p>A beam carries load by developing shear forces and bending moments along its length. This subchapter relates load, shear and moment in differential and integral form, uses the relations to draw diagrams and to locate maximum moments and points of contraflexure, and treats pure bending and applied couples. It then works through simply supported beams under point, uniform and triangular loads, and through cantilevers and overhanging beams, including the support positions that balance the hogging and sagging moments.</p>",
      "blocks": [
       {
        "id": "load-shear-moment-relations",
        "title": "How load, shear force and bending moment are related",
        "html": "<p>A cut through a beam exposes an axial force, a shear force S and a bending moment M. The shear force is the rate of change of the moment along the span, and the load intensity is the rate of change of the shear. So a constant shear gives a linearly varying moment, and a uniform load gives a linearly varying shear and a parabolic moment.</p><p>Where the shear is zero or changes sign, the moment has a stationary value, a maximum or a minimum; in exam questions this is the section of maximum bending moment. A point of <em>contraflexure</em> is where the moment changes sign, passing through zero. A positive, sagging moment bends the beam convex downward.</p><p>Integrated, the relations say that the change in shear between two sections equals the load between them, and the change in moment equals the area of the shear diagram between them. A point load makes the shear jump by its value and puts a kink in the moment diagram.</p><p>Each integration raises the degree of the curve by one: a uniformly varying load gives a parabolic shear and a cubic moment. In the usual convention the shear is positive when the part to the left of a section tends to move up relative to the part on the right.</p>",
        "formulas": [
         {
          "label": "Load, shear and moment",
          "tex": "S = \\dfrac{dM}{dx}, \\qquad \\dfrac{dS}{dx} = -w"
         },
         {
          "label": "Integral forms",
          "tex": "\\begin{aligned} S_2 - S_1 &amp;= -\\int_1^2 w\\,dx \\\\ M_2 - M_1 &amp;= \\int_1^2 S\\,dx \\end{aligned}"
         }
        ],
        "example": {
         "title": "Worked example: maximum moment at zero shear",
         "html": "<p>A 6 m simple span carries 10 kN/m over its left 4 m. Taking moments about A, \\(R_B = 40 \\times 2/6 = 13.33\\) kN, so \\(R_A = 26.67\\) kN.</p>\\[\\begin{aligned} x_0 &amp;= \\dfrac{26.67}{10} = 2.67\\ \\text{m} \\\\ M_{\\max} &amp;= 26.67 \\times 2.67 - \\dfrac{10 \\times 2.67^2}{2} \\\\ &amp;\\approx 35.6\\ \\text{kNm} \\end{aligned}\\]"
        },
        "moreHtml": "<p>The relations come from the equilibrium of a short element dx carrying w per unit length. Vertical equilibrium gives \\(dS = -w\\,dx\\), and taking moments about one face, while neglecting the second-order term in \\(dx^2\\), gives \\(dM = S\\,dx\\). With downward load counted positive, the shear falls wherever the load acts.</p><p>Axial-force diagrams are drawn the same way for members with inclined or horizontal loads. In frames all three diagrams, axial, shear and moment, are drawn member by member, with the moment plotted on the tension side.</p>",
        "points": [
         {
          "html": "The relation between shear force and moment is \\(S = dM/dx\\).",
          "sources": [
           {
            "id": "PAST-04-007",
            "label": "Set 4 · Q7"
           }
          ]
         },
         {
          "html": "Where the shear force is zero, the bending moment is maximum.",
          "sources": [
           {
            "id": "PAST-09-066",
            "label": "Set 9 · Q66"
           }
          ]
         },
         {
          "html": "Zero shear marks a stationary moment: either maximum or minimum.",
          "sources": [
           {
            "id": "PAST-14-022",
            "label": "Set 14 · Q22"
           }
          ]
         },
         {
          "html": "A constant shear force gives a linear bending moment.",
          "sources": [
           {
            "id": "PAST-18-011",
            "label": "Set 18 · Q11"
           }
          ]
         },
         {
          "html": "Under a UDL over the whole span of a simply supported beam the shear force changes linearly, zero at midspan.",
          "sources": [
           {
            "id": "PAST-12-052",
            "label": "Set 12 · Q52"
           }
          ]
         },
         {
          "html": "At a point of contraflexure the bending moment changes sign, passing through zero.",
          "sources": [
           {
            "id": "PAST-15-025",
            "label": "Set 15 · Q25"
           }
          ]
         },
         {
          "html": "A positive (sagging) moment bends a member convex downward, with tension at the bottom.",
          "sources": [
           {
            "id": "PAST-06-060",
            "label": "Set 6 · Q60"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-007",
          "label": "Set 4 · Q7"
         },
         {
          "id": "PAST-09-066",
          "label": "Set 9 · Q66"
         },
         {
          "id": "PAST-14-022",
          "label": "Set 14 · Q22"
         },
         {
          "id": "PAST-18-011",
          "label": "Set 18 · Q11"
         },
         {
          "id": "PAST-12-052",
          "label": "Set 12 · Q52"
         },
         {
          "id": "PAST-15-025",
          "label": "Set 15 · Q25"
         },
         {
          "id": "PAST-06-060",
          "label": "Set 6 · Q60"
         }
        ]
       },
       {
        "id": "pure-bending-and-couples",
        "title": "Constant moment, pure bending and applied couples",
        "html": "<p>Since shear is the slope of the moment diagram, a constant bending moment means zero shear: <em>pure bending</em>. Equal moments at the two ends of a simply supported beam, or the middle third between two symmetrical loads, produce it.</p><p>A concentrated couple adds no net force, so it leaves the shear diagram unchanged but makes the moment diagram jump by its value. On a cantilever an end couple M puts the same moment M on every section with zero shear; a couple at midspan loads only the part between it and the fixed end. On a simple beam the reactions form an opposing couple, each equal to M/L.</p><p>In pure bending the beam bends into a circular arc, because the curvature \\(M/EI\\) is the same everywhere; this is the condition assumed in deriving the flexure formula. The four-point bending test, with equal loads at the third points, uses the constant-moment middle third to test beams free of shear.</p><p>Couples and loads combine by <em>superposition</em>: for a linear elastic beam, the diagrams from separate load cases are added section by section.</p>",
        "formulas": [
         {
          "label": "Reactions to a couple on a simple span",
          "tex": "R_A = -R_B = \\dfrac{M}{L}"
         },
         {
          "label": "Curvature in pure bending",
          "tex": "\\dfrac{1}{R} = \\dfrac{M}{EI}"
         },
         {
          "label": "Either side of a clockwise couple at a",
          "tex": "\\begin{aligned} M_{a^-} &amp;= -\\dfrac{Ma}{L} \\\\ M_{a^+} &amp;= \\dfrac{M(L - a)}{L} \\end{aligned}"
         }
        ],
        "moreHtml": "<p>A clockwise couple M applied at a distance a from the left support of a simple span L is balanced by reactions of M/L, downward at the left and upward at the right. The shear is \\(-M/L\\) along the whole span. The moment falls linearly to \\(-Ma/L\\) just left of the couple, jumps up by M, and returns linearly to zero at the right support.</p><p>An anticlockwise couple reverses every sign. Read from left to right, a clockwise couple always makes the moment diagram jump up and an anticlockwise one makes it jump down.</p>",
        "points": [
         {
          "html": "Under a constant bending moment the shear force is zero at all sections along the beam.",
          "sources": [
           {
            "id": "PAST-07-009",
            "label": "Set 7 · Q9"
           }
          ]
         },
         {
          "html": "Equal end moments on a simple beam give an SFD with zero at all sections.",
          "sources": [
           {
            "id": "PAST-12-005",
            "label": "Set 12 · Q5"
           }
          ]
         },
         {
          "html": "A simply supported beam under constant moment carries zero shear force.",
          "sources": [
           {
            "id": "PAST-13-041",
            "label": "Set 13 · Q41"
           }
          ]
         },
         {
          "html": "Over a length where the moment does not change, the shear force is zero.",
          "sources": [
           {
            "id": "PAST-R2083-002",
            "label": "2083 recall · Q2"
           }
          ]
         },
         {
          "html": "A moment M at the free end of a cantilever gives a maximum moment of M, constant along the beam.",
          "sources": [
           {
            "id": "PAST-06-031",
            "label": "Set 6 · Q31"
           }
          ]
         },
         {
          "html": "A couple M at the centre of a cantilever gives 0 shear and moment M at the fixed end.",
          "sources": [
           {
            "id": "PAST-07-061",
            "label": "Set 7 · Q61"
           }
          ]
         },
         {
          "html": "An abrupt change in the bending moment diagram occurs where a couple is applied.",
          "sources": [
           {
            "id": "PAST-09-035",
            "label": "Set 9 · Q35"
           }
          ]
         },
         {
          "html": "A 1 kNm clockwise couple at the centre of a 1 m span gives reactions of 1 kN downward at A and 1 kN upward at B.",
          "sources": [
           {
            "id": "PAST-08-074",
            "label": "Set 8 · Q74"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-07-009",
          "label": "Set 7 · Q9"
         },
         {
          "id": "PAST-12-005",
          "label": "Set 12 · Q5"
         },
         {
          "id": "PAST-13-041",
          "label": "Set 13 · Q41"
         },
         {
          "id": "PAST-R2083-002",
          "label": "2083 recall · Q2"
         },
         {
          "id": "PAST-06-031",
          "label": "Set 6 · Q31"
         },
         {
          "id": "PAST-07-061",
          "label": "Set 7 · Q61"
         },
         {
          "id": "PAST-09-035",
          "label": "Set 9 · Q35"
         },
         {
          "id": "PAST-08-074",
          "label": "Set 8 · Q74"
         }
        ]
       },
       {
        "id": "simply-supported-beams",
        "title": "Shear and moment in simply supported beams",
        "html": "<p>For a determinate beam the shear and moment follow from statics alone: they depend on the loads, span and supports, not on the beam section, which governs only the stresses. Loads placed directly over the supports pass straight into the reactions and cause no internal force.</p><p>A single point load gives a triangular moment diagram with its peak under the load; a uniform load gives a parabola. To find a moment, take the reaction times its distance minus each load times its distance from the section. A load inclined to the beam is resolved: the component along the axis is an axial force, the transverse one causes bending.</p><p>Under a load rising uniformly from zero at one end to w per unit length at the other, the total load is \\(wL/2\\), the reactions take a third and two thirds of it, and the greatest moment occurs at \\(L/\\sqrt{3}\\) from the lighter end. Two equal loads W at the third points give \\(WL/3\\) over the middle third.</p><p>For a central point load the greatest moment is \\(WL/4\\), and in most simple beams the greatest shear is at a support.</p>",
        "formulas": [
         {
          "label": "Point load and uniform load",
          "tex": "M_{\\text{max}} = \\dfrac{Wab}{L}, \\qquad M_{\\text{max}} = \\dfrac{wL^2}{8}"
         },
         {
          "label": "Central point load",
          "tex": "M_{\\max} = \\dfrac{WL}{4}"
         },
         {
          "label": "Triangular load, zero to w",
          "tex": "M_{\\max} = \\dfrac{wL^2}{9\\sqrt{3}} \\ \\text{at} \\ x = \\dfrac{L}{\\sqrt{3}}"
         },
         {
          "label": "Equal loads W at the third points",
          "tex": "M_{\\max} = \\dfrac{WL}{3}"
         }
        ],
        "example": {
         "title": "Worked examples: moments in simple beams",
         "html": "<p>Three 10 kN loads at 1, 2 and 3 m on a 4 m span: \\(R_A = 15\\) kN and \\(M_{\\text{max}} = 15 \\times 2 - 10 \\times 1 = 20\\) kNm.</p><p>1 kN/m over 8 m: \\(R = 4\\) kN, so \\(M(2) = 4 \\times 2 - 1 \\times 2^2/2 = 6\\) kNm.</p>"
        },
        "moreHtml": "<p>A reliable routine for any determinate beam: find the reactions from two moment equations and check them by vertical equilibrium; draw the shear diagram from left to right, jumping at point loads and sloping under distributed ones; mark where the shear crosses zero; then find the moment there and at each load, from the area of the shear diagram or by taking moments from one end.</p><p>For mixed loads, superposing standard cases is often quicker. A uniform load with a central point load, for example, gives \\(wL^2/8 + WL/4\\) at midspan.</p>",
        "points": [
         {
          "html": "With equal loads P at the third points, the shear at L/6 from a support equals the reaction P.",
          "sources": [
           {
            "id": "PAST-05-010",
            "label": "Set 5 · Q10"
           }
          ]
         },
         {
          "html": "Loads acting directly above the two supports cause no internal force in the beam.",
          "sources": [
           {
            "id": "PAST-08-032",
            "label": "Set 8 · Q32"
           }
          ]
         },
         {
          "html": "A point load on a simply supported beam gives a triangular bending moment diagram.",
          "sources": [
           {
            "id": "PAST-16-043",
            "label": "Set 16 · Q43"
           }
          ]
         },
         {
          "html": "Three 10 kN loads at 1 m spacing on a 4 m simple span give a maximum BM of 20 kNm.",
          "sources": [
           {
            "id": "PAST-11-067",
            "label": "Set 11 · Q67"
           }
          ]
         },
         {
          "html": "On an 8 m simple span under 1 kN/m, the moment 2 m from the left support is 6 kNm.",
          "sources": [
           {
            "id": "PAST-13-073",
            "label": "Set 13 · Q73"
           }
          ]
         },
         {
          "html": "Bending moment is independent of the beam section; it depends on span, loading and supports.",
          "sources": [
           {
            "id": "PAST-11-044",
            "label": "Set 11 · Q44"
           }
          ]
         },
         {
          "html": "A 20 kN load at 30° to a horizontal beam gives an axial force of \\(20\\cos 30^\\circ = 17.32\\) kN.",
          "sources": [
           {
            "id": "PAST-13-064",
            "label": "Set 13 · Q64"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-010",
          "label": "Set 5 · Q10"
         },
         {
          "id": "PAST-08-032",
          "label": "Set 8 · Q32"
         },
         {
          "id": "PAST-16-043",
          "label": "Set 16 · Q43"
         },
         {
          "id": "PAST-11-067",
          "label": "Set 11 · Q67"
         },
         {
          "id": "PAST-13-073",
          "label": "Set 13 · Q73"
         },
         {
          "id": "PAST-11-044",
          "label": "Set 11 · Q44"
         },
         {
          "id": "PAST-13-064",
          "label": "Set 13 · Q64"
         }
        ]
       },
       {
        "id": "cantilevers-and-overhangs",
        "title": "Cantilevers and overhanging beams",
        "html": "<p>In a cantilever the shear at the fixed support is the sum of all the loads, and the moment there is the sum of each load times its distance from the support. The moment grows towards the fixed end, where it is largest, and is hogging.</p><p>An overhang behaves like a short cantilever from the nearer support, so the largest negative, hogging moment in an overhanging beam usually occurs at that support: \\(wa^2/2\\) for a uniform load on an overhang of length a.</p><p>For a cantilever of length L, a point load W at the free end gives \\(WL\\) at the support, a uniform load w gives \\(wL^2/2\\), and a load rising from zero at the tip to w at the support gives \\(wL^2/6\\). The shear at the free end is zero unless a point load acts there.</p><p>In an overhanging beam the moment changes from hogging over the support to sagging within the span, so a point of contraflexure lies between them. For a beam with equal overhangs under a uniform load, the greatest hogging and sagging moments are equal when each overhang is about 0.207 of the total length, the most economical position for the supports.</p>",
        "formulas": [
         {
          "label": "Support actions in a cantilever",
          "tex": "V = \\sum W_i, \\qquad M = \\sum W_i x_i"
         },
         {
          "label": "Hogging moment at an overhang support",
          "tex": "M = \\dfrac{w a^2}{2}"
         },
         {
          "label": "Cantilever support moments",
          "tex": "WL, \\qquad \\dfrac{wL^2}{2}, \\qquad \\dfrac{wL^2}{6}"
         },
         {
          "label": "Best equal overhangs, uniform load",
          "tex": "a \\approx 0.207\\,L"
         }
        ],
        "example": {
         "title": "Worked examples: cantilever and overhang",
         "html": "<p>Loads of 300, 500 and 800 kN at 0.5, 2 and 4 m: \\(V = 1600\\) kN and \\(M = 150 + 1000 + 3200\\), which is 4350 kNm.</p><p>A 2 m overhang under 10 kN/m: \\(M = 10 \\times 2^2/2 = 20\\) kNm hogging.</p>"
        },
        "moreHtml": "<p>For a triangular load on a cantilever with its peak at the fixed end, the resultant \\(wL/2\\) acts a third of the length from the support, so the moment there is \\(wL^2/6\\). With the peak at the free end, the resultant lies two thirds of the way out and the moment is \\(wL^2/3\\).</p><p>The 0.207 figure comes from equating \\(wa^2/2\\) at the supports with \\(wb^2/8 - wa^2/2\\) at midspan, where b is the span between the supports; this gives \\(b = 2\\sqrt{2}\\,a\\). Points of contraflexure, found by setting the span moment to zero, are the natural places for splices and bar curtailment.</p>",
        "points": [
         {
          "html": "A cantilever with 300, 500 and 800 kN loads at 0.5, 2 and 4 m has 1600 kN shear and 4350 kNm moment at the support.",
          "sources": [
           {
            "id": "PAST-14-065",
            "label": "Set 14 · Q65"
           }
          ]
         },
         {
          "html": "A 4 m span with a 2 m overhang under 10 kN/m has a maximum negative moment of 20 kNm, at the support.",
          "sources": [
           {
            "id": "PAST-16-080",
            "label": "Set 16 · Q80"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-14-065",
          "label": "Set 14 · Q65"
         },
         {
          "id": "PAST-16-080",
          "label": "Set 16 · Q80"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Shear and moment",
        "tex": "S = \\dfrac{dM}{dx}"
       },
       {
        "label": "Load and shear",
        "tex": "\\dfrac{dS}{dx} = -w"
       },
       {
        "label": "Point load, simple span",
        "tex": "M_{\\text{max}} = \\dfrac{Wab}{L}"
       },
       {
        "label": "UDL, simple span",
        "tex": "M_{\\text{max}} = \\dfrac{wL^2}{8}"
       },
       {
        "label": "Couple on a simple span",
        "tex": "R = \\dfrac{M}{L}"
       },
       {
        "label": "Overhang",
        "tex": "M = \\dfrac{w a^2}{2}"
       },
       {
        "label": "Central point load",
        "tex": "M_{\\max} = \\dfrac{WL}{4}"
       },
       {
        "label": "Triangular load, simple span",
        "tex": "M_{\\max} = \\dfrac{wL^2}{9\\sqrt{3}}"
       },
       {
        "label": "Cantilever under UDL",
        "tex": "M = \\dfrac{wL^2}{2}"
       },
       {
        "label": "Best equal overhangs",
        "tex": "a \\approx 0.207\\,L"
       }
      ],
      "cautions": [],
      "gaps": [
       "Axial-force diagrams for frames and inclined members are outlined only briefly, as the past papers barely test them."
      ]
     },
     "ACiE0402": {
      "code": "ACiE0402",
      "questionCount": 24,
      "format": 2,
      "summary": "<p>Loads produce stresses inside a material, and the material responds with strains. This subchapter defines the elastic constants and the links between them, reads the stress–strain curve, and covers extension, thermal stress, ductility, toughness and resilience, including suddenly applied and impact loads. It then treats strain energy in bars, shafts and beams, transforms stresses onto oblique planes, finds principal stresses and the maximum shear by formula and by Mohr's circle, and introduces the theories of failure.</p>",
      "blocks": [
       {
        "id": "elastic-constants-and-stress-strain",
        "title": "Elastic constants and the stress–strain curve",
        "html": "<p>Within the elastic range stress is proportional to strain, Hooke's law, which holds up to the <em>limit of proportionality</em>. The ratio of linear stress to linear strain is the modulus of elasticity E; the ratio of shear stress to shear strain is the modulus of rigidity G. Both are stresses, in N/m<sup>2</sup> like pressure, whereas section modulus \\(Z = I/y\\) is a length cubed.</p><p>Poisson's ratio, lateral over longitudinal strain, lies between 0 and 0.5, so it is always less than 1. The three constants are linked. Beyond the yield point mild steel flows plastically: the strain increases heavily with little rise in stress.</p><p>The bulk modulus K, hydrostatic stress over volumetric strain, completes the set, and any two constants fix the others. A bar pulled in one direction changes volume by \\(\\varepsilon(1 - 2\\mu)\\) per unit volume, which is why \\(\\mu\\) cannot exceed 0.5, the value for an incompressible material such as rubber. Steel has \\(\\mu\\) of about 0.3 and concrete 0.15 to 0.2.</p><p>The mild-steel curve passes the limit of proportionality, the elastic limit, the upper and lower yield points, strain hardening up to the ultimate stress, and necking to fracture.</p>",
        "formulas": [
         {
          "label": "Elastic moduli",
          "tex": "E = \\dfrac{\\sigma}{\\varepsilon}, \\qquad G = \\dfrac{\\tau}{\\gamma}"
         },
         {
          "label": "Link between E, G and Poisson's ratio",
          "tex": "E = 2G(1 + \\mu), \\qquad \\mu = \\dfrac{E}{2G} - 1"
         },
         {
          "label": "Links with the bulk modulus",
          "tex": "\\begin{aligned} E &amp;= 3K(1 - 2\\mu) \\\\ E &amp;= \\dfrac{9KG}{3K + G} \\end{aligned}"
         },
         {
          "label": "Extension of a bar",
          "tex": "\\delta = \\dfrac{PL}{AE}"
         },
         {
          "label": "Thermal stress, ends held",
          "tex": "\\sigma = E\\,\\alpha\\,\\Delta T"
         }
        ],
        "example": {
         "title": "Worked example: extension and thermal stress",
         "html": "<p>A steel rod 2 m long and 20 mm in diameter (A = 314 mm<sup>2</sup>, E = 200 GPa) carries 50 kN:</p>\\[\\delta = \\dfrac{50\\,000 \\times 2000}{314 \\times 200\\,000} \\approx 1.59\\ \\text{mm}\\]<p>Held between rigid walls and heated by 40°C with \\(\\alpha = 12 \\times 10^{-6}\\)/°C:</p>\\[\\begin{aligned} \\sigma &amp;= 200\\,000 \\times 12 \\times 10^{-6} \\times 40 \\\\ &amp;= 96\\ \\text{MPa} \\end{aligned}\\]"
        },
        "moreHtml": "<p>A bar whose temperature rises by \\(\\Delta T\\) tries to grow by \\(\\alpha L\\Delta T\\). If its ends are held, the prevented growth sets up a thermal stress that depends only on E, \\(\\alpha\\) and \\(\\Delta T\\), not on the length or area.</p><p>In a composite bar of two materials carrying a load together, both shorten equally, so their stresses are in the ratio of their moduli, the <em>modular ratio</em>, and the load is shared in proportion to AE. Materials without a clear yield point, such as high-strength steel, are given a proof stress at 0.2% permanent strain instead.</p>",
        "points": [
         {
          "html": "The ratio of linear stress to linear strain is the modulus of elasticity.",
          "sources": [
           {
            "id": "PAST-17-053",
            "label": "Set 17 · Q53"
           }
          ]
         },
         {
          "html": "The shear modulus is the ratio of shear stress to shear strain.",
          "sources": [
           {
            "id": "PAST-11-034",
            "label": "Set 11 · Q34"
           }
          ]
         },
         {
          "html": "E, G and \\(\\mu\\) are related by \\(\\mu = E/2G - 1\\).",
          "sources": [
           {
            "id": "PAST-10-007",
            "label": "Set 10 · Q7"
           }
          ]
         },
         {
          "html": "Poisson's ratio is always \\(\\lt 1\\), at most 0.5.",
          "sources": [
           {
            "id": "PAST-14-015",
            "label": "Set 14 · Q15"
           }
          ]
         },
         {
          "html": "Section modulus, a length cubed, does not share the unit of the modulus of elasticity.",
          "sources": [
           {
            "id": "PAST-08-012",
            "label": "Set 8 · Q12"
           }
          ]
         },
         {
          "html": "Hooke's law holds good up to the limit of proportionality.",
          "sources": [
           {
            "id": "PAST-16-032",
            "label": "Set 16 · Q32"
           }
          ]
         },
         {
          "html": "After the yield point the strain in a test sample increases heavily compared with stress.",
          "sources": [
           {
            "id": "PAST-06-071",
            "label": "Set 6 · Q71"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-17-053",
          "label": "Set 17 · Q53"
         },
         {
          "id": "PAST-11-034",
          "label": "Set 11 · Q34"
         },
         {
          "id": "PAST-10-007",
          "label": "Set 10 · Q7"
         },
         {
          "id": "PAST-14-015",
          "label": "Set 14 · Q15"
         },
         {
          "id": "PAST-08-012",
          "label": "Set 8 · Q12"
         },
         {
          "id": "PAST-16-032",
          "label": "Set 16 · Q32"
         },
         {
          "id": "PAST-06-071",
          "label": "Set 6 · Q71"
         }
        ]
       },
       {
        "id": "ductility-proof-load-and-resilience",
        "title": "Ductility, proof load and resilience",
        "html": "<p><em>Ductility</em> is the ability to stretch a long way in tension before breaking. It is measured by the percentage elongation and the percentage reduction in area at the neck, so a larger reduction in area means a more ductile material. Malleability is the matching ability under compression.</p><p>The strain energy stored in a loaded body is its <em>resilience</em>. The greatest load a body can carry without a permanent set is the <em>proof load</em>, and the energy stored at it is the proof resilience; per unit volume that is the modulus of resilience.</p><p>Under a gradually applied load the energy stored per unit volume is \\(\\sigma^2/2E\\), so the modulus of resilience is that value at the elastic limit. <em>Toughness</em> is the energy absorbed up to fracture, the whole area under the stress–strain curve, so a tough material combines strength with ductility.</p><p>A load applied suddenly causes twice the stress of the same load applied gradually, and a dropped load causes more still, because the bar must also absorb its kinetic energy. Brittle materials such as cast iron and concrete break with little deformation and absorb little energy.</p>",
        "formulas": [
         {
          "label": "Strain energy in direct stress",
          "tex": "U = \\dfrac{\\sigma^2}{2E} \\times AL"
         },
         {
          "label": "Suddenly applied load",
          "tex": "\\sigma = \\dfrac{2W}{A}"
         },
         {
          "label": "Load dropped from a height h",
          "tex": "\\sigma = \\dfrac{W}{A}\\left(1 + \\sqrt{1 + \\dfrac{2AEh}{WL}}\\right)"
         }
        ],
        "example": {
         "title": "Worked example: resilience and a sudden load",
         "html": "<p>Mild steel with an elastic limit of 250 MPa and E = 200 GPa has a modulus of resilience:</p>\\[\\begin{aligned} u &amp;= \\dfrac{250^2}{2 \\times 200\\,000} \\\\ &amp;\\approx 0.156\\ \\text{N mm/mm}^3 \\end{aligned}\\]<p>A 10 kN load on a 500 mm<sup>2</sup> bar causes 20 MPa if applied gradually but 40 MPa if applied suddenly.</p>"
        },
        "moreHtml": "<p>The impact stress follows from equating the work done by the falling load, \\(W(h + \\delta)\\), with the strain energy stored in the bar. When h is zero this reduces to the suddenly applied case, \\(2W/A\\); when h is large compared with the extension, the stress is roughly \\(\\sqrt{2EWh/AL}\\).</p><p>At a given stress a longer bar absorbs more energy, since the energy is proportional to volume. This is why bolts that take shocks have their shanks turned down to the root diameter of the thread: the uniform, slimmer section stores more energy before the stress anywhere reaches its limit.</p>",
        "points": [
         {
          "html": "Ductility increases as the percentage reduction in area of a tensile specimen increases.",
          "sources": [
           {
            "id": "PAST-08-004",
            "label": "Set 8 · Q4"
           }
          ]
         },
         {
          "html": "Elongation of a material under tensile load is the property of ductility.",
          "sources": [
           {
            "id": "PAST-15-031",
            "label": "Set 15 · Q31"
           }
          ]
         },
         {
          "html": "The load beyond which a body takes a permanent set is the proof load.",
          "sources": [
           {
            "id": "PAST-06-028",
            "label": "Set 6 · Q28"
           }
          ]
         },
         {
          "html": "The total strain energy stored in a body is its resilience.",
          "sources": [
           {
            "id": "PAST-11-009",
            "label": "Set 11 · Q9"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-08-004",
          "label": "Set 8 · Q4"
         },
         {
          "id": "PAST-15-031",
          "label": "Set 15 · Q31"
         },
         {
          "id": "PAST-06-028",
          "label": "Set 6 · Q28"
         },
         {
          "id": "PAST-11-009",
          "label": "Set 11 · Q9"
         }
        ]
       },
       {
        "id": "strain-energy-in-beams",
        "title": "Strain energy in a centrally loaded beam",
        "html": "<p>A load applied gradually does work equal to half the load times its deflection, and that work is stored as strain energy. For a simply supported beam with a central point load the deflection under the load is \\(WL^3/48EI\\), so the strain energy follows directly.</p><p>More generally, the bending strain energy in any beam is the integral of \\(M^2/2EI\\) along its length. For a cantilever with an end load, \\(M = Wx\\) and the integral gives \\(W^2L^3/6EI\\); equating that with \\(\\tfrac12 W\\delta\\) returns the familiar deflection \\(WL^3/3EI\\).</p><p>Axial force and torsion store energy in the same way. Because energy depends on the square of the load, the energies of two loads cannot simply be added, since a cross term appears: superposition applies to deflections, not to strain energy.</p>",
        "formulas": [
         {
          "label": "Strain energy, central point load",
          "tex": "U = \\dfrac{1}{2} W \\delta = \\dfrac{1}{2} W \\cdot \\dfrac{WL^3}{48EI} = \\dfrac{W^2 L^3}{96EI}"
         },
         {
          "label": "Bending strain energy",
          "tex": "U = \\int_0^L \\dfrac{M^2}{2EI}\\,dx"
         },
         {
          "label": "Axial and torsional strain energy",
          "tex": "U = \\dfrac{P^2 L}{2AE}, \\qquad U = \\dfrac{T^2 L}{2GJ}"
         },
         {
          "label": "Cantilever with an end load",
          "tex": "U = \\dfrac{W^2 L^3}{6EI}"
         }
        ],
        "example": {
         "title": "Worked example: deflection from strain energy",
         "html": "<p>A 2 m cantilever with EI = 2000 kNm<sup>2</sup> carries 10 kN at its tip.</p>\\[\\begin{aligned} U &amp;= \\dfrac{10^2 \\times 2^3}{6 \\times 2000} = 0.0667\\ \\text{kNm} \\\\ \\delta &amp;= \\dfrac{2U}{W} = 0.0133\\ \\text{m} = 13.3\\ \\text{mm} \\end{aligned}\\]<p>This matches \\(WL^3/3EI\\).</p>"
        },
        "moreHtml": "<p>Shear also stores energy, but in slender beams it is small beside bending and is usually ignored. In short, deep beams it adds noticeably to the deflection, which is why deep-beam and plate-girder deflections include a shear term.</p><p>Energy methods avoid integrating the elastic curve. Castigliano's theorem generalises the idea: the partial derivative of the strain energy with respect to a load gives the deflection at that load in its direction, as taken up in Structural Analysis.</p>",
        "points": [
         {
          "html": "A simply supported beam with a central point load W stores strain energy \\(W^2l^3/96EI\\).",
          "sources": [
           {
            "id": "PAST-04-006",
            "label": "Set 4 · Q6"
           },
           {
            "id": "PAST-14-011",
            "label": "Set 14 · Q11"
           }
          ]
         },
         {
          "html": "With W at the centre of span L, the strain energy is \\(W^2L^3/96EI\\), half of W times the central deflection.",
          "sources": [
           {
            "id": "PAST-18-028",
            "label": "Set 18 · Q28"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-006",
          "label": "Set 4 · Q6"
         },
         {
          "id": "PAST-14-011",
          "label": "Set 14 · Q11"
         },
         {
          "id": "PAST-18-028",
          "label": "Set 18 · Q28"
         }
        ]
       },
       {
        "id": "oblique-and-principal-planes",
        "title": "Stresses on oblique planes, principal planes and Mohr's circle",
        "html": "<p>A bar in simple tension carries both normal and shear stress on any inclined plane; the shear is greatest, \\(\\sigma/2\\), on planes at 45°. In general the planes that carry only normal stress, with zero shear, are the <em>principal planes</em>, and the normal stresses on them are the principal stresses. The maximum shear acts on planes at 45° to them.</p><p><em>Mohr's circle</em> plots normal stress on the horizontal axis and shear stress on the vertical axis. Its intersections with the horizontal axis are the principal stresses and its radius is the maximum shear stress.</p><p>For a general plane state with \\(\\sigma_x\\), \\(\\sigma_y\\) and \\(\\tau_{xy}\\), the two principal planes are at right angles to each other, and the planes of maximum shear lie midway between them, carrying the average normal stress.</p><p>In <em>pure shear</em>, as on the surface of a twisted shaft, the principal stresses are \\(\\pm\\tau\\) on planes at 45° to the axis, which is why a stick of chalk twisted to failure breaks along a 45° helix.</p>",
        "formulas": [
         {
          "label": "Plane inclined at θ, simple tension",
          "tex": "\\sigma_n = \\sigma\\cos^2\\theta, \\qquad \\tau = \\dfrac{\\sigma}{2}\\sin 2\\theta"
         },
         {
          "label": "Normal stress on an oblique plane",
          "tex": "\\begin{aligned} \\sigma_\\theta &amp;= \\dfrac{\\sigma_x + \\sigma_y}{2} \\\\ &amp;\\quad + \\dfrac{\\sigma_x - \\sigma_y}{2}\\cos 2\\theta \\\\ &amp;\\quad + \\tau_{xy}\\sin 2\\theta \\end{aligned}"
         },
         {
          "label": "Shear stress on an oblique plane",
          "tex": "\\begin{aligned} \\tau_\\theta &amp;= \\dfrac{\\sigma_x - \\sigma_y}{2}\\sin 2\\theta \\\\ &amp;\\quad - \\tau_{xy}\\cos 2\\theta \\end{aligned}"
         },
         {
          "label": "Principal planes",
          "tex": "\\tan 2\\theta_p = \\dfrac{2\\tau_{xy}}{\\sigma_x - \\sigma_y}"
         }
        ],
        "example": {
         "title": "Worked example: shear on an inclined plane",
         "html": "<p>A 2 kN pull on 1000 mm<sup>2</sup> gives \\(\\sigma = 2\\) N/mm<sup>2</sup>. On a plane at 30°:</p>\\[\\tau = \\dfrac{2}{2}\\sin 60^\\circ = 0.866\\ \\text{N/mm}^2\\]"
        },
        "moreHtml": "<p>On a plane whose normal is at \\(\\theta\\) to the x axis, the normal and shear stresses follow the transformation equations below. The normal stresses on any two perpendicular planes always add up to \\(\\sigma_x + \\sigma_y\\), a useful check.</p><p>To draw Mohr's circle, plot the stresses on the x face and on the y face as two points; the line joining them is a diameter. A rotation of \\(\\theta\\) on the element is a rotation of \\(2\\theta\\) round the circle. For simple tension the circle passes through the origin and \\(\\sigma\\), so the greatest shear is \\(\\sigma/2\\).</p>",
        "points": [
         {
          "html": "A rod of 1000 mm<sup>2</sup> under a 2 kN pull carries 0.866 N/mm<sup>2</sup> shear on a plane at 30°.",
          "sources": [
           {
            "id": "PAST-06-072",
            "label": "Set 6 · Q72"
           }
          ]
         },
         {
          "html": "On the principal plane carrying the maximum principal stress, no shear stress acts.",
          "sources": [
           {
            "id": "PAST-07-030",
            "label": "Set 7 · Q30"
           }
          ]
         },
         {
          "html": "Principal planes are subjected to normal stresses only.",
          "sources": [
           {
            "id": "PAST-10-060",
            "label": "Set 10 · Q60"
           }
          ]
         },
         {
          "html": "The x and y axes of Mohr's circle represent normal stress and shear stress.",
          "sources": [
           {
            "id": "PAST-10-031",
            "label": "Set 10 · Q31"
           }
          ]
         },
         {
          "html": "On the diagonal (45°) plane the normal stress is \\((f_x + f_y)/2 + \\tau_{xy}\\).",
          "sources": [
           {
            "id": "PAST-15-029",
            "label": "Set 15 · Q29"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-072",
          "label": "Set 6 · Q72"
         },
         {
          "id": "PAST-07-030",
          "label": "Set 7 · Q30"
         },
         {
          "id": "PAST-10-060",
          "label": "Set 10 · Q60"
         },
         {
          "id": "PAST-10-031",
          "label": "Set 10 · Q31"
         },
         {
          "id": "PAST-15-029",
          "label": "Set 15 · Q29"
         }
        ]
       },
       {
        "id": "principal-stress-formulas",
        "title": "Principal stress formulas and calculations",
        "html": "<p>For normal stresses \\(\\sigma_x\\) and \\(\\sigma_y\\) with shear \\(\\tau_{xy}\\), the principal stresses are the centre of Mohr's circle plus or minus its radius. The + sign gives the major and the − sign the minor principal stress.</p><p>With only one normal stress \\(\\sigma_x\\) and a shear stress, the centre is at \\(\\sigma_x/2\\). Exam problems usually give two direct stresses and a shear, or one direct stress and a shear, and ask for the major value.</p><p>The greatest in-plane shear stress equals the radius of the circle, half the difference of the principal stresses, and acts on planes at 45° to the principal planes.</p><p>Principal stresses feed the <em>theories of failure</em>. Rankine's maximum principal stress theory suits brittle materials. For ductile metals, Tresca's maximum shear stress theory and the von Mises distortion energy theory are used; von Mises is the more accurate and underlies most steel design codes.</p>",
        "formulas": [
         {
          "label": "Principal stresses",
          "tex": "\\begin{aligned} \\sigma_{1,2} &= \\dfrac{\\sigma_x + \\sigma_y}{2} \\\\ &\\quad \\pm \\sqrt{\\left(\\dfrac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2} \\end{aligned}"
         },
         {
          "label": "One direct stress with shear",
          "tex": "\\sigma_{1,2} = \\dfrac{\\sigma_x}{2} \\pm \\sqrt{\\dfrac{\\sigma_x^2}{4} + \\tau_{xy}^2}"
         },
         {
          "label": "Maximum in-plane shear stress",
          "tex": "\\begin{aligned} \\tau_{\\max} &amp;= \\dfrac{\\sigma_1 - \\sigma_2}{2} \\\\ &amp;= \\sqrt{\\left(\\dfrac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2} \\end{aligned}"
         },
         {
          "label": "Von Mises yield, plane stress",
          "tex": "\\sigma_1^2 - \\sigma_1\\sigma_2 + \\sigma_2^2 = f_y^2"
         },
         {
          "label": "Equivalent moment and torque for a shaft",
          "tex": "\\begin{aligned} M_e &amp;= \\tfrac{1}{2}\\left(M + \\sqrt{M^2 + T^2}\\right) \\\\ T_e &amp;= \\sqrt{M^2 + T^2} \\end{aligned}"
         }
        ],
        "example": {
         "title": "Worked examples: major principal stress",
         "html": "<p>300 MPa with 200 MPa shear: the centre is 150 and the radius \\(\\sqrt{150^2 + 200^2} = 250\\), so \\(\\sigma_1 = 400\\) MPa.</p><p>80 and 60 N/mm<sup>2</sup> with 20 N/mm<sup>2</sup> shear:</p>\\[\\begin{aligned} \\sigma_1 &amp;= 70 + \\sqrt{10^2 + 20^2} \\\\ &amp;= 70 + \\sqrt{500} \\approx 92.36 \\end{aligned}\\]"
        },
        "moreHtml": "<p>In a beam, bending and shear stresses act together, so the principal stresses at a point are found with \\(\\sigma_y = 0\\). At the extreme fibres the shear is zero and the bending stress is itself principal. At the neutral axis the bending stress is zero and the principal stresses are \\(\\pm\\tau\\) at 45°, which is why diagonal tension cracks appear near the supports of concrete beams.</p><p>A shaft under both bending and torsion is designed for an <em>equivalent bending moment</em> and an <em>equivalent torque</em>, found by the same principal-stress reasoning.</p>",
        "points": [
         {
          "html": "A 300 MPa direct stress with 200 MPa shear gives a maximum normal stress of 400 MPa.",
          "sources": [
           {
            "id": "PAST-10-062",
            "label": "Set 10 · Q62"
           }
          ]
         },
         {
          "html": "Tensile stresses of 80 and 60 N/mm<sup>2</sup> with 20 N/mm<sup>2</sup> shear give a major principal stress of 92.36 N/mm<sup>2</sup>.",
          "sources": [
           {
            "id": "PAST-14-073",
            "label": "Set 14 · Q73"
           }
          ]
         },
         {
          "html": "With \\(\\sigma_x\\) and \\(\\tau_{xy}\\), the minor principal stress is \\(\\sigma_x/2 - \\sqrt{\\sigma_x^2/4 + \\tau_{xy}^2}\\).",
          "sources": [
           {
            "id": "PAST-12-011",
            "label": "Set 12 · Q11"
           },
           {
            "id": "PAST-18-043",
            "label": "Set 18 · Q43"
           }
          ]
         },
         {
          "html": "The maximum normal stress is \\(\\sigma_x/2 + \\tfrac{1}{2}\\sqrt{\\sigma_x^2 + 4\\tau_{xy}^2}\\).",
          "sources": [
           {
            "id": "PAST-16-052",
            "label": "Set 16 · Q52"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-10-062",
          "label": "Set 10 · Q62"
         },
         {
          "id": "PAST-14-073",
          "label": "Set 14 · Q73"
         },
         {
          "id": "PAST-12-011",
          "label": "Set 12 · Q11"
         },
         {
          "id": "PAST-18-043",
          "label": "Set 18 · Q43"
         },
         {
          "id": "PAST-16-052",
          "label": "Set 16 · Q52"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Young's modulus",
        "tex": "E = \\dfrac{\\sigma}{\\varepsilon}"
       },
       {
        "label": "Modulus of rigidity",
        "tex": "G = \\dfrac{\\tau}{\\gamma}"
       },
       {
        "label": "E, G and Poisson's ratio",
        "tex": "E = 2G(1 + \\mu)"
       },
       {
        "label": "Strain energy, central load",
        "tex": "U = \\dfrac{W^2 L^3}{96EI}"
       },
       {
        "label": "Shear on an inclined plane",
        "tex": "\\tau = \\dfrac{\\sigma}{2}\\sin 2\\theta"
       },
       {
        "label": "Principal stresses, one direct stress",
        "tex": "\\sigma_{1,2} = \\dfrac{\\sigma_x}{2} \\pm \\sqrt{\\dfrac{\\sigma_x^2}{4} + \\tau_{xy}^2}"
       },
       {
        "label": "E and the bulk modulus",
        "tex": "E = 3K(1 - 2\\mu)"
       },
       {
        "label": "Extension of a bar",
        "tex": "\\delta = \\dfrac{PL}{AE}"
       },
       {
        "label": "Thermal stress, ends held",
        "tex": "\\sigma = E\\,\\alpha\\,\\Delta T"
       },
       {
        "label": "Modulus of resilience",
        "tex": "u = \\dfrac{\\sigma^2}{2E}"
       },
       {
        "label": "Maximum in-plane shear",
        "tex": "\\tau_{\\max} = \\dfrac{\\sigma_1 - \\sigma_2}{2}"
       }
      ],
      "cautions": [
       {
        "id": "diagonal-plane-normal-stress",
        "status": "review",
        "prompt": "The keyed expression is the normal stress on the 45° plane, not the general major principal stress",
        "html": "<p>On the diagonal plane \\(\\cos 2\\theta = 0\\) and \\(\\sin 2\\theta = 1\\), so the normal stress there is \\((f_x + f_y)/2 + \\tau_{xy}\\), the published answer. The general major principal stress is the longer option with the square root.</p>",
        "sources": [
         {
          "id": "PAST-15-029",
          "label": "Set 15 · Q29"
         }
        ]
       }
      ],
      "gaps": [
       "Torsion of circular shafts is treated in 4.3, and the theories of failure are outlined here, but the past papers do not examine them."
      ]
     },
     "ACiE0403": {
      "code": "ACiE0403",
      "questionCount": 17,
      "format": 2,
      "summary": "<p>Bending theory relates the moment in a beam to the stresses and curvature it produces, and column theory explains why slender members fail by buckling well below their crushing load. This subchapter covers the flexure formula, its assumptions and the section modulus, transverse shear stress in beams, and torsion of circular shafts. It then sets out effective lengths for ideal and practical end conditions, Euler's crippling load and its limit of validity, and the Rankine–Gordon formula for intermediate columns.</p>",
      "blocks": [
       {
        "id": "flexure-formula-and-bending-stress",
        "title": "The flexure formula and bending stress",
        "html": "<p>Simple bending theory assumes plane sections stay plane, so strain, and in the elastic range stress, varies linearly with distance from the neutral axis: zero there and greatest at the extreme fibres. The flexure equation links moment, stress and curvature.</p><p>A circular shaft under both a bending moment and a torque carries a bending stress and a torsional shear stress, both inversely proportional to \\(d^3\\). Their ratio depends only on M and T.</p><p>The theory also assumes a homogeneous, linear elastic material with the same modulus in tension and compression, a beam that is initially straight, and bending in a plane of symmetry. Because the net axial force is zero, the neutral axis passes through the centroid of the section.</p><p>The greatest stress is M/Z, where the <em>section modulus</em> Z measures bending strength. A deep section is far more efficient than a wide one, which is why I-sections put most of their material in the flanges. The product EI is the <em>flexural rigidity</em>, and for small slopes the curvature \\(M/EI\\) equals \\(d^2y/dx^2\\), the equation of the elastic curve.</p>",
        "formulas": [
         {
          "label": "Flexure equation",
          "tex": "\\dfrac{M}{I} = \\dfrac{\\sigma}{y} = \\dfrac{E}{R}"
         },
         {
          "label": "Bending and torsion in a shaft",
          "tex": "\\sigma_b = \\dfrac{32M}{\\pi d^3}, \\qquad \\tau = \\dfrac{16T}{\\pi d^3}"
         },
         {
          "label": "Ratio of the two stresses",
          "tex": "\\dfrac{\\sigma_b}{\\tau} = \\dfrac{2M}{T}"
         },
         {
          "label": "Section modulus",
          "tex": "Z = \\dfrac{I}{y_{\\max}}, \\qquad \\sigma_{\\max} = \\dfrac{M}{Z}"
         },
         {
          "label": "Rectangle and solid circle",
          "tex": "Z = \\dfrac{bd^2}{6}, \\qquad Z = \\dfrac{\\pi d^3}{32}"
         }
        ],
        "example": {
         "title": "Worked example: bending stress in a timber beam",
         "html": "<p>A 150 mm by 300 mm timber beam carries a moment of 30 kNm.</p>\\[\\begin{aligned} Z &amp;= \\dfrac{150 \\times 300^2}{6} = 2.25 \\times 10^6\\ \\text{mm}^3 \\\\ \\sigma &amp;= \\dfrac{30 \\times 10^6}{2.25 \\times 10^6} \\approx 13.3\\ \\text{N/mm}^2 \\end{aligned}\\]"
        },
        "moreHtml": "<p>For a section symmetric about the neutral axis the extreme tensile and compressive stresses are equal. In a T-section the neutral axis lies nearer the flange, so the far fibre carries the larger stress; cast iron, weak in tension, is therefore used in T-beams with the flange on the tension side.</p><p>A <em>beam of uniform strength</em> varies its section so that the extreme stress is the same everywhere, as in a leaf spring. A flitched or composite beam is first transformed into one material with the modular ratio, and the flexure formula is then applied to the transformed section.</p>",
        "points": [
         {
          "html": "The flexure equation is \\(M/I = \\sigma/y\\), also equal to E/R.",
          "sources": [
           {
            "id": "PAST-13-012",
            "label": "Set 13 · Q12"
           }
          ]
         },
         {
          "html": "In pure bending the stress distribution across a beam is linear, zero at the neutral axis.",
          "sources": [
           {
            "id": "PAST-08-043",
            "label": "Set 8 · Q43"
           }
          ]
         },
         {
          "html": "In a shaft carrying M and T together, maximum bending stress over maximum shear stress is 2M/T.",
          "sources": [
           {
            "id": "PAST-07-037",
            "label": "Set 7 · Q37"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-13-012",
          "label": "Set 13 · Q12"
         },
         {
          "id": "PAST-08-043",
          "label": "Set 8 · Q43"
         },
         {
          "id": "PAST-07-037",
          "label": "Set 7 · Q37"
         }
        ]
       },
       {
        "id": "shear-stress-in-beams-and-shafts",
        "title": "Shear stress in rectangular beams and in shafts",
        "html": "<p>Transverse shear stress in a beam follows \\(\\tau = VQ/Ib\\). The first moment Q is largest at the neutral axis, so the shear stress is maximum there and zero at the top and bottom fibres. Over a solid rectangle the distribution is a parabola whose peak is 1.5 times the average; for a circle it is 4/3.</p><p>Torsional shear in a circular shaft behaves differently: it grows linearly from zero at the axis to its maximum at the outer surface.</p><p>In an I-section almost all the shear is carried by the web, where the stress is nearly uniform, so the shear force over the web area is a good estimate; the flanges carry the bending.</p><p>The torsion equation mirrors the flexure equation, with the polar moment of inertia J in place of I. A shaft transmitting power P at N revolutions per minute carries a torque \\(60P/2\\pi N\\). A hollow shaft is stronger and stiffer than a solid one of the same weight, because material near the axis carries little stress.</p>",
        "formulas": [
         {
          "label": "Rectangular beam, peak shear",
          "tex": "\\tau_{\\text{max}} = 1.5\\,\\dfrac{V}{bd}"
         },
         {
          "label": "Torsion of a shaft",
          "tex": "\\tau = \\dfrac{T r}{J}"
         },
         {
          "label": "Torsion equation",
          "tex": "\\dfrac{T}{J} = \\dfrac{\\tau}{r} = \\dfrac{G\\theta}{L}"
         },
         {
          "label": "Polar moment and power",
          "tex": "J = \\dfrac{\\pi d^4}{32}, \\qquad P = \\dfrac{2\\pi N T}{60}"
         },
         {
          "label": "Circular beam, peak shear",
          "tex": "\\tau_{\\max} = \\dfrac{4}{3}\\,\\dfrac{V}{A}"
         }
        ],
        "example": {
         "title": "Worked example: peak shear in a rectangular beam",
         "html": "<p>50 kN on a section 300 mm wide and 450 mm deep, in N/mm<sup>2</sup>:</p>\\[\\tau_{\\text{max}} = \\dfrac{1.5 \\times 50\\,000}{300 \\times 450} \\approx 0.556\\]"
        },
        "moreHtml": "<p>The beam shear formula comes from the change in bending stress along a short length of beam. The unbalanced horizontal force on the part above a given level must be resisted by shear on that level, and complementary shear makes the vertical shear stress equal to it. That is why the shear stress is zero at a free surface.</p><p>The torsion equation assumes that plane sections stay plane and radii stay straight, which holds only for circular sections. The angle of twist is TL/GJ, and the torsional stiffness GJ/L plays the part that EI plays in bending.</p>",
        "points": [
         {
          "html": "In a rectangular beam the maximum shear stress is 1.5 times the average, at the neutral axis.",
          "sources": [
           {
            "id": "PAST-04-060",
            "label": "Set 4 · Q60"
           }
          ]
         },
         {
          "html": "Shear stress in a beam is maximum on the neutral axis and zero at the extreme fibres.",
          "sources": [
           {
            "id": "PAST-14-007",
            "label": "Set 14 · Q7"
           }
          ]
         },
         {
          "html": "A 300 mm by 450 mm beam section with 50 kN shear has a maximum shear stress of 0.556 N/mm<sup>2</sup>.",
          "sources": [
           {
            "id": "PAST-14-076",
            "label": "Set 14 · Q76"
           }
          ]
         },
         {
          "html": "In torsion the shear stress at the outer surface of a shaft is maximum.",
          "sources": [
           {
            "id": "PAST-09-040",
            "label": "Set 9 · Q40"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-060",
          "label": "Set 4 · Q60"
         },
         {
          "id": "PAST-14-007",
          "label": "Set 14 · Q7"
         },
         {
          "id": "PAST-14-076",
          "label": "Set 14 · Q76"
         },
         {
          "id": "PAST-09-040",
          "label": "Set 9 · Q40"
         }
        ]
       },
       {
        "id": "effective-length-of-columns",
        "title": "Effective length for the ideal end conditions",
        "html": "<p>A long column buckles into a curve whose shape depends on how its ends are held. The <em>effective length</em> \\(l_e\\) is the length of the equivalent pin-ended column, the distance between points of zero moment in the buckled shape.</p><p>For the ideal cases: both ends hinged, \\(l_e = L\\); both ends fixed, \\(L/2\\); one end fixed and the other hinged, \\(L/\\sqrt{2}\\); one end fixed and the other free, \\(2L\\). Two columns are equivalent when their effective lengths match.</p><p>A column buckles about the axis with the least radius of gyration, so the slenderness ratio is taken about the weaker axis unless bracing restrains it. Tubes and box sections have the same radius of gyration in every direction and make efficient struts.</p><p>Real connections are never perfectly fixed, so design codes use larger factors than the ideal ones: about 0.65L for both ends fixed and 0.8L for fixed–hinged, while hinged–hinged stays at L and fixed–free at 2L. A column in a frame that can sway may have an effective length well above its real length.</p>",
        "formulas": [
         {
          "label": "Ideal effective lengths",
          "tex": "l_e = L,\\ \\dfrac{L}{2},\\ \\dfrac{L}{\\sqrt{2}},\\ 2L"
         },
         {
          "label": "Radius of gyration and slenderness",
          "tex": "r = \\sqrt{\\dfrac{I}{A}}, \\qquad \\lambda = \\dfrac{l_e}{r}"
         },
         {
          "label": "Code factors: fixed, fixed–hinged, hinged, fixed–free",
          "tex": "0.65L,\\ \\ 0.8L,\\ \\ 1.0L,\\ \\ 2.0L"
         }
        ],
        "example": {
         "title": "Worked example: equivalent fixed–free column",
         "html": "<p>A fixed–fixed column of length L has \\(l_e = L/2\\). A fixed–free column of length \\(L'\\) has \\(l_e = 2L'\\). Equal effective lengths give \\(2L' = L/2\\), so \\(L' = L/4\\).</p>"
        },
        "moreHtml": "<p>The ideal factors follow from the buckled shapes. A fixed–free column buckles like half of a pin-ended column twice as long, so \\(l_e = 2L\\). A fixed–fixed column has points of contraflexure a quarter of the length from each end, leaving L/2 between them to act as a pin-ended column. The fixed–hinged case gives about 0.7L.</p><p>Bracing at mid-height shortens the effective length only about the braced axis, so the two axes of a column can have different effective lengths and both slenderness ratios must be checked.</p>",
        "points": [
         {
          "html": "A column of length L fixed at both ends is equivalent to a pin-ended column of length L/2.",
          "sources": [
           {
            "id": "PAST-05-069",
            "label": "Set 5 · Q69"
           }
          ]
         },
         {
          "html": "The crippling load formula uses an effective length of L/2 for a column with both ends fixed.",
          "sources": [
           {
            "id": "PAST-09-067",
            "label": "Set 9 · Q67"
           }
          ]
         },
         {
          "html": "The effective length of a column with both ends fixed is L/2.",
          "sources": [
           {
            "id": "PAST-12-038",
            "label": "Set 12 · Q38"
           }
          ]
         },
         {
          "html": "For a column fixed at one end and free at the other, \\(L_{\\text{eff}}/L = 2\\).",
          "sources": [
           {
            "id": "PAST-10-013",
            "label": "Set 10 · Q13"
           }
          ]
         },
         {
          "html": "A fixed–free column equivalent to a fixed–fixed column of length L must be L/4 long.",
          "sources": [
           {
            "id": "PAST-12-064",
            "label": "Set 12 · Q64"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-069",
          "label": "Set 5 · Q69"
         },
         {
          "id": "PAST-09-067",
          "label": "Set 9 · Q67"
         },
         {
          "id": "PAST-12-038",
          "label": "Set 12 · Q38"
         },
         {
          "id": "PAST-10-013",
          "label": "Set 10 · Q13"
         },
         {
          "id": "PAST-12-064",
          "label": "Set 12 · Q64"
         }
        ]
       },
       {
        "id": "euler-load-and-column-failure",
        "title": "Euler's crippling load, and long against short columns",
        "html": "<p>Euler's formula gives the load at which an ideal long column buckles. It varies inversely with the square of the effective length, so halving the length, or fixing both ends, multiplies the load by four.</p><p>How a column fails depends on its slenderness ratio \\(l_e/r\\). A long column fails by buckling: the bending stress from lateral deflection governs and the direct stress is negligible by comparison. A short column, with a low slenderness ratio, fails by direct crushing.</p><p>Euler's theory assumes an initially straight, perfectly axially loaded, homogeneous column that stays elastic. It is therefore valid only while the crippling stress stays below the limit of proportionality; for mild steel with a limit of about 200 MPa, that means a slenderness above roughly 100.</p><p>For intermediate columns, where crushing and buckling interact, the empirical <em>Rankine–Gordon</em> formula makes the reciprocal of the failure load the sum of the reciprocals of the crushing load and the Euler load. It tends to the crushing load for short columns and to Euler's for long ones.</p>",
        "formulas": [
         {
          "label": "Euler's crippling load",
          "tex": "P = \\dfrac{\\pi^2 E I}{l_e^2}"
         },
         {
          "label": "Both ends fixed",
          "tex": "P = \\dfrac{\\pi^2 E I}{(L/2)^2} = \\dfrac{4\\pi^2 E I}{L^2}"
         },
         {
          "label": "Euler crippling stress",
          "tex": "\\sigma_{cr} = \\dfrac{\\pi^2 E}{(l_e/r)^2}"
         },
         {
          "label": "Rankine–Gordon",
          "tex": "\\begin{aligned} \\dfrac{1}{P_R} &amp;= \\dfrac{1}{P_c} + \\dfrac{1}{P_E} \\\\ P_R &amp;= \\dfrac{f_c A}{1 + a\\lambda^2} \\end{aligned}"
         }
        ],
        "example": {
         "title": "Worked example: Euler load of a steel strut",
         "html": "<p>A pin-ended steel rod 2.5 m long and 40 mm in diameter, with E = 200 GPa:</p>\\[\\begin{aligned} r &amp;= \\dfrac{d}{4} = 10\\ \\text{mm} \\\\ \\lambda &amp;= \\dfrac{2500}{10} = 250 \\\\ \\sigma_{cr} &amp;= \\dfrac{\\pi^2 \\times 200\\,000}{250^2} \\approx 31.6\\ \\text{MPa} \\\\ P &amp;= 31.6 \\times 1257 \\approx 39.7\\ \\text{kN} \\end{aligned}\\]<p>Since \\(\\lambda\\) is well above 100, Euler's formula applies.</p>"
        },
        "moreHtml": "<p>Rankine's formula is usually written with a constant \\(a = f_c/\\pi^2E\\) found by experiment: about 1/7500 for mild steel, 1/1600 for cast iron and 1/750 for timber. A column loaded off its axis bends from the start, and the secant formula gives its peak stress; even a small eccentricity greatly lowers the load at which yielding begins.</p><p>Design codes combine these ideas in column curves that give the design compressive stress as a function of slenderness, with allowances for initial crookedness and residual stresses in real members.</p>",
        "points": [
         {
          "html": "Fixing both ends of a column gives an Euler load of \\(4\\pi^2EI/L^2\\).",
          "sources": [
           {
            "id": "PAST-15-028",
            "label": "Set 15 · Q28"
           }
          ]
         },
         {
          "html": "Fixing both ends makes the crippling load 4 times that of the same column with hinged ends.",
          "sources": [
           {
            "id": "PAST-18-015",
            "label": "Set 18 · Q15"
           }
          ]
         },
         {
          "html": "If a pin-ended 2 m rod cripples at 1 kN, a 1 m rod of the same section cripples at 4 kN.",
          "sources": [
           {
            "id": "PAST-04-077",
            "label": "Set 4 · Q77"
           }
          ]
         },
         {
          "html": "In long columns the direct stress is negligible compared with the bending stress.",
          "sources": [
           {
            "id": "PAST-04-037",
            "label": "Set 4 · Q37"
           }
          ]
         },
         {
          "html": "A column with a slenderness of 25 is treated as short and fails by crushing.",
          "sources": [
           {
            "id": "PAST-14-057",
            "label": "Set 14 · Q57"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-15-028",
          "label": "Set 15 · Q28"
         },
         {
          "id": "PAST-18-015",
          "label": "Set 18 · Q15"
         },
         {
          "id": "PAST-04-077",
          "label": "Set 4 · Q77"
         },
         {
          "id": "PAST-04-037",
          "label": "Set 4 · Q37"
         },
         {
          "id": "PAST-14-057",
          "label": "Set 14 · Q57"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Flexure equation",
        "tex": "\\dfrac{M}{I} = \\dfrac{\\sigma}{y} = \\dfrac{E}{R}"
       },
       {
        "label": "Beam shear stress",
        "tex": "\\tau = \\dfrac{VQ}{Ib}"
       },
       {
        "label": "Rectangle, peak shear",
        "tex": "\\tau_{\\text{max}} = 1.5\\,\\dfrac{V}{bd}"
       },
       {
        "label": "Torsion",
        "tex": "\\tau = \\dfrac{T r}{J}"
       },
       {
        "label": "Euler's load",
        "tex": "P = \\dfrac{\\pi^2 E I}{l_e^2}"
       },
       {
        "label": "Slenderness ratio",
        "tex": "\\lambda = \\dfrac{l_e}{r}"
       },
       {
        "label": "Section modulus, rectangle",
        "tex": "Z = \\dfrac{bd^2}{6}"
       },
       {
        "label": "Torsion equation",
        "tex": "\\dfrac{T}{J} = \\dfrac{\\tau}{r} = \\dfrac{G\\theta}{L}"
       },
       {
        "label": "Euler crippling stress",
        "tex": "\\sigma_{cr} = \\dfrac{\\pi^2 E}{\\lambda^2}"
       },
       {
        "label": "Rankine–Gordon",
        "tex": "\\dfrac{1}{P_R} = \\dfrac{1}{P_c} + \\dfrac{1}{P_E}"
       }
      ],
      "cautions": [
       {
        "id": "slenderness-25-short-column",
        "status": "review",
        "prompt": "The key treats a slenderness of 25 as a short column",
        "html": "<p>Where a column changes from short to long depends on the material and the code. The published answer takes 25 as short, so crushing governs; a high slenderness ratio would mean buckling.</p>",
        "sources": [
         {
          "id": "PAST-14-057",
          "label": "Set 14 · Q57"
         }
        ]
       }
      ],
      "gaps": [
       "Beam deflections from the elastic curve are treated in 4.4, and composite and unsymmetrical bending are outlined only briefly, as the papers do not examine them."
      ]
     },
     "ACiE0404": {
      "code": "ACiE0404",
      "questionCount": 24,
      "format": 2,
      "summary": "<p>Determinate structures can be solved by statics alone, but their deflections also need the elastic properties. This subchapter gives standard beam deflections and slopes, the elastic curve and the Macaulay, moment-area and conjugate-beam methods, and energy methods from real work to virtual work, the unit-load method, Castigliano's theorem and Maxwell's reciprocal theorem.</p><p>It then covers continuous beams, internal hinges and the degree of indeterminacy, influence lines by the Müller-Breslau principle, and the placing of moving loads for the greatest effects.</p>",
      "blocks": [
       {
        "id": "standard-beam-deflections",
        "title": "Standard deflections of cantilevers and simple beams",
        "html": "<p>A few deflection results are worth knowing by heart. A cantilever with a point load at its free end deflects \\(WL^3/3EI\\) at the tip; under a full UDL it deflects \\(wL^4/8EI\\). A simply supported beam with a central point load deflects \\(WL^3/48EI\\) at midspan, and under a UDL \\(5wL^4/384EI\\).</p><p>Deflection varies inversely with the second moment of area \\(I = bd^3/12\\), so it is inversely proportional to the width and to the cube of the depth. Comparing loads of equal total W, a central point load deflects a simple beam 8/5 times as much as the same load spread uniformly.</p><p>These results come from integrating the elastic curve twice, with the constants fixed by the supports: zero deflection at a support, and zero slope at a fixed end or, by symmetry, at midspan. <em>Macaulay's method</em> handles several loads with a single moment expression, using brackets that are dropped when their contents are negative.</p><p>The end slopes are worth knowing as well: for a cantilever with an end load or a UDL, and for a simple beam with a central load or a UDL.</p>",
        "formulas": [
         {
          "label": "Cantilever, end load and UDL",
          "tex": "\\delta = \\dfrac{WL^3}{3EI}, \\qquad \\delta = \\dfrac{wL^4}{8EI}"
         },
         {
          "label": "Simple beam, central load and UDL",
          "tex": "\\delta = \\dfrac{WL^3}{48EI}, \\qquad \\delta = \\dfrac{5wL^4}{384EI}"
         },
         {
          "label": "Elastic curve",
          "tex": "EI\\,\\dfrac{d^2y}{dx^2} = M"
         },
         {
          "label": "Tip slopes of a cantilever",
          "tex": "\\theta = \\dfrac{WL^2}{2EI}, \\qquad \\theta = \\dfrac{wL^3}{6EI}"
         },
         {
          "label": "Support slopes of a simple beam",
          "tex": "\\theta = \\dfrac{WL^2}{16EI}, \\qquad \\theta = \\dfrac{wL^3}{24EI}"
         }
        ],
        "example": {
         "title": "Worked example: point load against equal UDL",
         "html": "<p>With total load W on each beam, \\(wL = W\\):</p>\\[\\dfrac{\\delta_A}{\\delta_B} = \\dfrac{WL^3/48EI}{5WL^3/384EI} = \\dfrac{384}{240} = \\dfrac{8}{5}\\]"
        },
        "moreHtml": "<p>The <em>moment-area</em> theorems read slopes and deflections off the M/EI diagram. The change in slope between two points equals the area of the diagram between them, and the deviation of one point from the tangent at the other equals the moment of that area about the first point. They suit cantilevers and symmetric beams, where a horizontal tangent is known.</p><p>The <em>conjugate beam</em> method loads an imaginary beam with the M/EI diagram; its shear and moment give the slope and deflection of the real beam. A fixed end becomes free and a free end becomes fixed, while simple supports stay simple.</p>",
        "points": [
         {
          "html": "A cantilever with point load W at its free end deflects \\(WL^3/3EI\\) there.",
          "sources": [
           {
            "id": "PAST-06-030",
            "label": "Set 6 · Q30"
           }
          ]
         },
         {
          "html": "A cantilever under a UDL w over its whole span has a maximum deflection of \\(wL^4/(8EI)\\), at the free end.",
          "sources": [
           {
            "id": "PAST-R2083-003",
            "label": "2083 recall · Q3"
           }
          ]
         },
         {
          "html": "A central point load P on a simply supported beam deflects its centre by \\(PL^3/48EI\\).",
          "sources": [
           {
            "id": "PAST-12-010",
            "label": "Set 12 · Q10"
           }
          ]
         },
         {
          "html": "Doubling the width of a centrally loaded simple beam changes its central deflection by a factor of 1/2.",
          "sources": [
           {
            "id": "PAST-07-050",
            "label": "Set 7 · Q50"
           }
          ]
         },
         {
          "html": "A central point load W and a UDL totalling W on equal simple beams give maximum deflections in the ratio 8/5.",
          "sources": [
           {
            "id": "PAST-07-078",
            "label": "Set 7 · Q78"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-030",
          "label": "Set 6 · Q30"
         },
         {
          "id": "PAST-R2083-003",
          "label": "2083 recall · Q3"
         },
         {
          "id": "PAST-12-010",
          "label": "Set 12 · Q10"
         },
         {
          "id": "PAST-07-050",
          "label": "Set 7 · Q50"
         },
         {
          "id": "PAST-07-078",
          "label": "Set 7 · Q78"
         }
        ]
       },
       {
        "id": "energy-methods-and-virtual-work",
        "title": "Energy methods and virtual work",
        "html": "<p>The <em>real work</em> method equates the external work of a gradually applied load, \\(\\tfrac{1}{2}P\\delta\\), to the strain energy stored. It works only for a single concentrated load and gives the deflection only at that load, in its own direction.</p><p><em>Virtual work</em> is the work done by the actual forces moving through a virtual, imaginary but compatible, displacement. Its complementary form, the unit-load method, applies a unit force where the displacement is wanted, so deflections can be found at any point and in any direction. Castigliano's theorem gives the same result as the derivative of strain energy.</p><p>For a truss the unit-load method becomes a sum over the members, where P is the real force in a member and u the force caused by a unit load at the joint in question. By Castigliano's first theorem, the deflection at a load is the partial derivative of the strain energy with respect to it; a dummy load, set to zero after differentiating, gives deflections where no load acts.</p><p>Maxwell's reciprocal theorem says the deflection at A caused by a unit load at B equals the deflection at B caused by a unit load at A. Betti's law extends it to two whole systems of loads.</p>",
        "formulas": [
         {
          "label": "Real work",
          "tex": "\\tfrac{1}{2} P \\delta = U"
         },
         {
          "label": "Unit-load method",
          "tex": "\\delta = \\int \\dfrac{M m}{EI}\\, dx"
         },
         {
          "label": "Truss deflection by unit load",
          "tex": "\\delta = \\sum \\dfrac{P u L}{AE}"
         },
         {
          "label": "Castigliano's theorem",
          "tex": "\\delta_i = \\dfrac{\\partial U}{\\partial P_i}"
         },
         {
          "label": "Maxwell's reciprocal theorem",
          "tex": "\\delta_{AB} = \\delta_{BA}"
         }
        ],
        "example": {
         "title": "Worked example: cantilever deflection by unit load",
         "html": "<p>A 3 m cantilever with EI = 5000 kNm<sup>2</sup> carries 20 kN at its tip. Measuring x from the tip, M = −Wx and the unit-load moment is m = −x:</p>\\[\\begin{aligned} \\delta &amp;= \\int_0^L \\dfrac{Wx^2}{EI}\\,dx = \\dfrac{WL^3}{3EI} \\\\ &amp;= \\dfrac{20 \\times 27}{3 \\times 5000} = 0.036\\ \\text{m} \\end{aligned}\\]"
        },
        "moreHtml": "<p>The principle of virtual work has two forms. Virtual displacements applied to a real set of forces give equilibrium equations, the basis of Müller-Breslau influence lines and of plastic collapse mechanisms. Virtual forces applied to a real, compatible deformation give the unit-load method for deflections.</p><p>For beams, the integral of Mm/EI is most easily evaluated with standard product integrals for triangles, rectangles and parabolas, rather than by writing out moment equations. Deflections due to temperature change or lack of fit in truss members follow from the same unit-load reasoning.</p>",
        "points": [
         {
          "html": "Virtual work refers to the virtual work done by actual forces moving through a virtual displacement.",
          "sources": [
           {
            "id": "PAST-05-047",
            "label": "Set 5 · Q47"
           }
          ]
         },
         {
          "html": "The real-work method cannot give deflection at any point in a desired direction; it gives only the deflection under the single load.",
          "sources": [
           {
            "id": "PAST-08-053",
            "label": "Set 8 · Q53"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-047",
          "label": "Set 5 · Q47"
         },
         {
          "id": "PAST-08-053",
          "label": "Set 8 · Q53"
         }
        ]
       },
       {
        "id": "continuous-beams-and-internal-hinges",
        "title": "Continuous beams and internal hinges",
        "html": "<p>A beam is <em>continuous</em> when it runs over more than two supports. Fixed and propped beams are single spans, and a beam projecting past a support is an overhanging beam.</p><p>An internal hinge carries shear but no moment. A beam fixed at A with a hinge and a roller at B splits into a cantilever from A to the hinge and a simply supported piece from the hinge to B. A load placed exactly at the hinge goes entirely to the cantilever part, and the unloaded piece beyond it has zero reactions.</p><p>A structure is <em>statically determinate</em> when equilibrium alone gives all its reactions and internal forces. A plane beam offers three equilibrium equations, plus one for each internal hinge, and any reactions beyond these are redundants. A plane truss with j joints, m members and r reactions is determinate when \\(m + r = 2j\\).</p><p>Determinacy is not enough: the structure must also be geometrically stable. Reactions that are all parallel or all meet at a point leave it free to move, however many there are.</p>",
        "formulas": [
         {
          "label": "Static indeterminacy of a beam with h hinges",
          "tex": "D_s = r - 3 - h"
         },
         {
          "label": "Plane truss",
          "tex": "D_s = m + r - 2j"
         },
         {
          "label": "Rigid-jointed plane frame",
          "tex": "D_s = 3m + r - 3j"
         }
        ],
        "example": {
         "title": "Worked examples: degree of indeterminacy",
         "html": "<p>A two-span beam fixed at A with rollers at B and C has r = 3 + 1 + 1 = 5, so \\(D_s = 5 - 3 = 2\\). An internal hinge in one span reduces it to 1.</p><p>A truss with 6 joints, 9 members and 3 reactions has \\(D_s = 9 + 3 - 12 = 0\\): it is determinate.</p>"
        },
        "moreHtml": "<p>For a rigid-jointed plane frame the degree of static indeterminacy is \\(3m + r - 3j\\), less one for each moment released at a hinge. External indeterminacy counts only the reactions beyond three; internal indeterminacy comes from closed rings of members, each adding three.</p><p>The <em>kinematic</em> indeterminacy, the number of unknown joint displacements, is what the displacement methods of 4.6 solve for. A fixed end contributes none, a pinned end one rotation, and a free rigid joint of a plane frame three.</p>",
        "points": [
         {
          "html": "A beam is continuous if it is supported on more than two supports.",
          "sources": [
           {
            "id": "PAST-10-050",
            "label": "Set 10 · Q50"
           }
          ]
         },
         {
          "html": "A 10 kN load at an internal hinge l/3 from the fixed end A gives a roller reaction at B of 0 kN.",
          "sources": [
           {
            "id": "PAST-15-066",
            "label": "Set 15 · Q66"
           },
           {
            "id": "PAST-18-074",
            "label": "Set 18 · Q74"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-10-050",
          "label": "Set 10 · Q50"
         },
         {
          "id": "PAST-15-066",
          "label": "Set 15 · Q66"
         },
         {
          "id": "PAST-18-074",
          "label": "Set 18 · Q74"
         }
        ]
       },
       {
        "id": "influence-line-diagrams",
        "title": "Influence line diagrams",
        "html": "<p>An <em>influence line</em> shows how one response, a reaction, shear or moment at a fixed point, changes as a unit load moves across the structure. The point stays fixed and the load position changes; a bending moment diagram is the opposite, one load case plotted over all sections.</p><p>By the Müller-Breslau principle, the influence lines of determinate structures are rigid-body shapes made of straight lines only. For a simple beam the moment influence line at a section is a triangle with peak \\(a(L - a)/L\\). On a cantilever the support reaction and support shear stay 1 wherever the load stands, so their influence lines are rectangles.</p><p>For a simple beam the influence line for the left reaction falls linearly from 1 at A to 0 at B. The shear at a section a from A has an ordinate of \\(-a/L\\) just left of the section and \\((L - a)/L\\) just right of it, a jump of 1.</p><p>An influence line is used by multiplying: a point load contributes the load times the ordinate under it, and a UDL contributes its intensity times the area it covers. For indeterminate structures the influence lines are curves.</p>",
        "formulas": [
         {
          "label": "Peak of the moment ILD at distance a",
          "tex": "\\eta = \\dfrac{a(L - a)}{L}"
         },
         {
          "label": "Simple-beam reaction ILD",
          "tex": "\\eta_{R_A} = 1 - \\dfrac{x}{L}"
         },
         {
          "label": "Shear ILD either side of a section at a",
          "tex": "\\eta^- = -\\dfrac{a}{L}, \\qquad \\eta^+ = \\dfrac{L - a}{L}"
         },
         {
          "label": "Using an influence line",
          "tex": "S = \\sum W_i\\,\\eta_i + w \\times \\text{area}"
         }
        ],
        "example": {
         "title": "Worked example: moment from an influence line",
         "html": "<p>On a 10 m simple span, the moment influence line at 4 m has a peak of \\(4 \\times 6/10 = 2.4\\). A UDL of 20 kN/m over the whole span, and then a 50 kN load at the section, give:</p>\\[\\begin{aligned} M &amp;= 20 \\times \\tfrac{1}{2} \\times 10 \\times 2.4 = 240\\ \\text{kNm} \\\\ M &amp;= 50 \\times 2.4 = 120\\ \\text{kNm} \\end{aligned}\\]"
        },
        "moreHtml": "<p>The Müller-Breslau principle states that the influence line for a response is the deflected shape obtained by releasing the restraint that provides it and imposing a unit displacement in its direction. Lifting a support by one unit gives the reaction influence line; cutting the beam and sliding the two sides one unit apart, kept parallel, gives the shear influence line; a hinge with a unit relative rotation gives the moment influence line.</p><p>In a determinate structure the release leaves a mechanism that moves as rigid pieces, so the lines are straight.</p>",
        "points": [
         {
          "html": "In influence line diagrams the points remain fixed and the position of the load changes.",
          "sources": [
           {
            "id": "PAST-05-053",
            "label": "Set 5 · Q53"
           },
           {
            "id": "PAST-09-013",
            "label": "Set 9 · Q13"
           },
           {
            "id": "PAST-15-027",
            "label": "Set 15 · Q27"
           },
           {
            "id": "PAST-18-051",
            "label": "Set 18 · Q51"
           }
          ]
         },
         {
          "html": "The ILD for bending moment at a section of a simply supported beam is a triangle.",
          "sources": [
           {
            "id": "PAST-06-029",
            "label": "Set 6 · Q29"
           }
          ]
         },
         {
          "html": "The ILD for the support reaction of a cantilever is a rectangle of unit height.",
          "sources": [
           {
            "id": "PAST-11-039",
            "label": "Set 11 · Q39"
           }
          ]
         },
         {
          "html": "The ILD for shear force at a cantilever's support is a rectangle.",
          "sources": [
           {
            "id": "PAST-17-016",
            "label": "Set 17 · Q16"
           }
          ]
         },
         {
          "html": "ILDs of statically determinate structures are straight lines only.",
          "sources": [
           {
            "id": "PAST-14-060",
            "label": "Set 14 · Q60"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-053",
          "label": "Set 5 · Q53"
         },
         {
          "id": "PAST-09-013",
          "label": "Set 9 · Q13"
         },
         {
          "id": "PAST-15-027",
          "label": "Set 15 · Q27"
         },
         {
          "id": "PAST-18-051",
          "label": "Set 18 · Q51"
         },
         {
          "id": "PAST-06-029",
          "label": "Set 6 · Q29"
         },
         {
          "id": "PAST-11-039",
          "label": "Set 11 · Q39"
         },
         {
          "id": "PAST-17-016",
          "label": "Set 17 · Q16"
         },
         {
          "id": "PAST-14-060",
          "label": "Set 14 · Q60"
         }
        ]
       },
       {
        "id": "moving-loads",
        "title": "Moving wheel loads and UDLs",
        "html": "<p>With concentrated moving loads the moment diagram is straight between loads, so the maximum bending moment always occurs under a wheel load. The absolute maximum is near the centre of span, under the load nearest the resultant, when midspan bisects the distance between them.</p><p>The shear at a support equals its reaction, greatest when the whole train is on the span as close to that support as possible. A UDL longer than the span gives the greatest moment when it covers the entire beam, since all ordinates are positive. For a given section, loads are placed on the influence line to add the largest ordinates.</p><p>At a given section, a train of loads gives the greatest moment when the average load on the part to the left equals the average load on the whole span, with one load standing at the section. A UDL shorter than the span gives the greatest moment at a section when the section divides the load in the same ratio as it divides the span.</p><p>Bridges are checked with standard vehicle trains, such as the IRC Class A and Class 70R loadings used in Nepal, placed in their most severe positions and increased by an impact factor for the dynamic effect of moving wheels.</p>",
        "formulas": [
         {
          "label": "Greatest moment at a section, load train",
          "tex": "\\dfrac{W_{\\text{left}}}{a} = \\dfrac{W_{\\text{total}}}{L}"
         },
         {
          "label": "Short UDL of length l at a section",
          "tex": "\\dfrac{l_{\\text{left}}}{l} = \\dfrac{a}{L}"
         }
        ],
        "example": {
         "title": "Worked example: maximum negative shear",
         "html": "<p>Loads 10, 15, 15 and 8 kN at 2 m spacing, section 8 m into a 24 m span, 10 kN at the section:</p>\\[\\begin{aligned} V &amp;= -\\dfrac{80 + 90 + 60 + 16}{24} \\\\ &amp;= -10.25\\ \\text{kN} \\end{aligned}\\]"
        },
        "moreHtml": "<p>The rule for a section follows from the influence line. As the train moves a little, the moment changes at a rate set by the loads on each side times the slopes of the two legs of the triangle. The moment peaks where that rate changes sign, which happens as a load crosses the section, and the condition reduces to equal average loads.</p><p>The greatest positive shear at a section occurs with the head of the train just right of the section and the rest of the train on the right-hand part, where the ordinates are positive. A moving UDL gives the greatest shear when it covers only the positive part of the influence line.</p>",
        "points": [
         {
          "html": "The maximum bending moment from a train of wheel loads always occurs under a wheel load.",
          "sources": [
           {
            "id": "PAST-04-005",
            "label": "Set 4 · Q5"
           },
           {
            "id": "PAST-17-052",
            "label": "Set 17 · Q52"
           }
          ]
         },
         {
          "html": "Under a moving train the maximum bending moment occurs near the centre of the span.",
          "sources": [
           {
            "id": "PAST-13-020",
            "label": "Set 13 · Q20"
           }
          ]
         },
         {
          "html": "The shear at support A is greatest with the trailing load of the train at A and the train on the span.",
          "sources": [
           {
            "id": "PAST-05-007",
            "label": "Set 5 · Q7"
           }
          ]
         },
         {
          "html": "A UDL longer than the girder gives maximum moment when the UDL covers the entire beam.",
          "sources": [
           {
            "id": "PAST-10-061",
            "label": "Set 10 · Q61"
           }
          ]
         },
         {
          "html": "Loads of 8, 15, 15 and 10 kN at 2 m spacing give a maximum negative shear of 10.25 kN at 8 m on a 24 m beam.",
          "sources": [
           {
            "id": "PAST-11-068",
            "label": "Set 11 · Q68"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-005",
          "label": "Set 4 · Q5"
         },
         {
          "id": "PAST-17-052",
          "label": "Set 17 · Q52"
         },
         {
          "id": "PAST-13-020",
          "label": "Set 13 · Q20"
         },
         {
          "id": "PAST-05-007",
          "label": "Set 5 · Q7"
         },
         {
          "id": "PAST-10-061",
          "label": "Set 10 · Q61"
         },
         {
          "id": "PAST-11-068",
          "label": "Set 11 · Q68"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Cantilever, end load",
        "tex": "\\delta = \\dfrac{WL^3}{3EI}"
       },
       {
        "label": "Cantilever, UDL",
        "tex": "\\delta = \\dfrac{wL^4}{8EI}"
       },
       {
        "label": "Simple beam, central load",
        "tex": "\\delta = \\dfrac{WL^3}{48EI}"
       },
       {
        "label": "Simple beam, UDL",
        "tex": "\\delta = \\dfrac{5wL^4}{384EI}"
       },
       {
        "label": "Unit-load method",
        "tex": "\\delta = \\int \\dfrac{M m}{EI}\\, dx"
       },
       {
        "label": "Moment ILD peak",
        "tex": "\\eta = \\dfrac{a(L - a)}{L}"
       },
       {
        "label": "Elastic curve",
        "tex": "EI\\,\\dfrac{d^2y}{dx^2} = M"
       },
       {
        "label": "Truss deflection",
        "tex": "\\delta = \\sum \\dfrac{P u L}{AE}"
       },
       {
        "label": "Castigliano",
        "tex": "\\delta_i = \\dfrac{\\partial U}{\\partial P_i}"
       },
       {
        "label": "Plane truss determinacy",
        "tex": "D_s = m + r - 2j"
       }
      ],
      "cautions": [],
      "gaps": [
       "Deflection of portal frames is not examined in these papers, and the degree of determinacy is explained here without past questions on it."
      ]
     },
     "ACiE0405": {
      "code": "ACiE0405",
      "questionCount": 12,
      "format": 2,
      "summary": "<p>Arches carry load mainly in compression, using the horizontal thrust at their supports to cut the bending moments that a beam of the same span would carry. This subchapter finds the thrust of three-hinged arches, shows when the line of thrust matches a parabolic axis so that the moments vanish, and resolves the forces at a section into normal thrust and radial shear.</p><p>It then turns to trusses: the member count needed for rigidity and determinacy, simple and compound trusses, the methods of joints and sections, zero-force members and the effect of temperature.</p>",
      "blocks": [
       {
        "id": "three-hinged-arch-thrust",
        "title": "Horizontal thrust and bending in three-hinged arches",
        "html": "<p>A three-hinged arch is determinate. The vertical reactions are found as for a simple beam, and the horizontal thrust H from the condition of zero moment at the crown hinge: take moments about the crown for the half that carries no load.</p><p>The moment at any section is the simple-beam moment minus H times the height of the arch there, that is H times the gap between the arch axis and the line of thrust. Where the line of thrust coincides with the axis, the arch is in pure compression with zero moment, as a parabolic arch under full UDL. Under a rolling point load, the absolute maximum moment occurs at \\(L/(2\\sqrt{3})\\) either side of the crown.</p><p>For a parabolic arch of span L and rise h, measured from a springing, the axis follows the equation below. Under a UDL over the whole span the free moment \\(wL^2/8\\) at the crown is exactly balanced by Hh, so every section is in pure compression.</p><p>The thrust is what makes an arch efficient: it keeps the moments far below those of a beam of the same span, so arches can be built of masonry or concrete, which are strong in compression. Being determinate, a three-hinged arch is not stressed by settlement of its supports or by temperature change.</p>",
        "formulas": [
         {
          "label": "Thrust from the crown hinge",
          "tex": "H = \\dfrac{M_{\\text{crown}}}{h}"
         },
         {
          "label": "Parabolic arch axis",
          "tex": "y = \\dfrac{4h\\,x(L - x)}{L^2}"
         },
         {
          "label": "Full-span UDL on a parabolic arch",
          "tex": "H = \\dfrac{wL^2}{8h}"
         },
         {
          "label": "Moment at a section",
          "tex": "M_x = \\mu_x - H\\,y"
         },
         {
          "label": "Half-span UDL",
          "tex": "H = \\dfrac{wL^2}{16h}, \\qquad M_{\\max} = \\pm\\dfrac{wL^2}{64}"
         }
        ],
        "example": {
         "title": "Worked examples: horizontal thrust",
         "html": "<p>80 kN at 6 m on a 40 m span with 8 m rise: \\(V_B = 80 \\times 6/40 = 12\\) kN and \\(8H = 12 \\times 20\\), so H = 30 kN.</p><p>80 kN at L/4 on a 20 m span with 4 m rise: \\(V_B = 20\\) kN and \\(4H = 20 \\times 10\\), so H = 50 kN.</p>"
        },
        "moreHtml": "<p>A UDL over half the span is the classic unsymmetrical case. For a parabolic three-hinged arch loaded over its left half, H is half the full-span value, and the greatest moments, sagging in the loaded half and hogging in the other, are \\(\\pm wL^2/64\\) at the quarter points.</p><p>The <em>line of thrust</em> is the funicular polygon of the loads drawn through the three hinges, and the moment at any section is H times the vertical distance between it and the arch axis. The designer shapes the arch so that, under the governing loads, the line of thrust stays close to the axis.</p>",
        "points": [
         {
          "html": "An 80 kN load 6 m from A on a 40 m three-hinged arch rising 8 m gives a horizontal thrust of 30 kN.",
          "sources": [
           {
            "id": "PAST-05-062",
            "label": "Set 5 · Q62"
           }
          ]
         },
         {
          "html": "An 80 kN load at a quarter of a 20 m span, with a 4 m rise, gives a horizontal reaction of 50 kN.",
          "sources": [
           {
            "id": "PAST-13-077",
            "label": "Set 13 · Q77"
           }
          ]
         },
         {
          "html": "Under a point load, the maximum moment in a three-hinged arch occurs at \\(L/(2\\sqrt{3})\\) either side of the crown.",
          "sources": [
           {
            "id": "PAST-06-063",
            "label": "Set 6 · Q63"
           }
          ]
         },
         {
          "html": "An arch has zero bending moment where the line of thrust coincides with the line of its axis.",
          "sources": [
           {
            "id": "PAST-08-008",
            "label": "Set 8 · Q8"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-062",
          "label": "Set 5 · Q62"
         },
         {
          "id": "PAST-13-077",
          "label": "Set 13 · Q77"
         },
         {
          "id": "PAST-06-063",
          "label": "Set 6 · Q63"
         },
         {
          "id": "PAST-08-008",
          "label": "Set 8 · Q8"
         }
        ]
       },
       {
        "id": "normal-thrust-and-radial-shear",
        "title": "Normal thrust and radial shear in an arch",
        "html": "<p>At a section where the arch tangent makes an angle \\(\\theta\\) with the horizontal, the horizontal thrust H and the vertical shear V are resolved along and across the rib. The component along the tangent is the <em>normal thrust</em>; the component along the radius, normal to the axis, is the <em>radial shear</em>. The same resolution applies to two- and three-hinged arches.</p><p>For a parabolic arch the slope at any point comes from differentiating its equation. At the crown \\(\\theta = 0\\), so the normal thrust equals H and the radial shear equals the vertical shear there. For a segmental, circular arch the angle comes from the geometry of the circle instead.</p><p>V is the net vertical shear at the section, the vertical reaction less the loads between the support and the section, not the reaction itself.</p>",
        "formulas": [
         {
          "label": "Normal thrust, along the rib",
          "tex": "N = H\\cos\\theta + V\\sin\\theta"
         },
         {
          "label": "Radial shear, across the rib",
          "tex": "S = V\\cos\\theta - H\\sin\\theta"
         },
         {
          "label": "Slope of a parabolic arch",
          "tex": "\\tan\\theta = \\dfrac{4h\\,(L - 2x)}{L^2}"
         },
         {
          "label": "Segmental arch radius from span and rise",
          "tex": "R = \\dfrac{L^2}{8h} + \\dfrac{h}{2}"
         },
         {
          "label": "Thrust at a springing",
          "tex": "N = \\sqrt{H^2 + V^2}"
         }
        ],
        "example": {
         "title": "Worked example: normal thrust and radial shear",
         "html": "<p>Treat the 40 m arch with an 8 m rise from the thrust example as parabolic, with 80 kN at 6 m, so \\(V_A = 68\\) kN and H = 30 kN. At x = 5 m:</p>\\[\\begin{aligned} \\tan\\theta &amp;= \\dfrac{4 \\times 8 \\times 30}{1600} = 0.6 \\\\ \\cos\\theta &amp;= 0.857, \\qquad \\sin\\theta = 0.514 \\\\ N &amp;= 30 \\times 0.857 + 68 \\times 0.514 \\\\ &amp;\\approx 60.7\\ \\text{kN} \\\\ S &amp;= 68 \\times 0.857 - 30 \\times 0.514 \\\\ &amp;\\approx 42.9\\ \\text{kN} \\end{aligned}\\]"
        },
        "moreHtml": "<p>Arch ribs are designed for the three actions together: normal thrust, radial shear and bending moment. The thrust and moment combine into an eccentric compression with eccentricity M/N, and a masonry arch must keep that within the middle third of its rib if no tension is to develop.</p><p>For a parabolic arch under a full UDL the radial shear and the moment vanish everywhere, and the normal thrust grows from H at the crown to the resultant of H and V at the springings.</p>",
        "points": [
         {
          "html": "The radial shear in a two-hinged arch is \\(V\\cos\\theta - H\\sin\\theta\\).",
          "sources": [
           {
            "id": "PAST-10-039",
            "label": "Set 10 · Q39"
           }
          ]
         },
         {
          "html": "The radial force on a three-hinged arch section is \\(V\\cos(\\theta) - H\\sin(\\theta)\\); the axial one is the normal thrust.",
          "sources": [
           {
            "id": "PAST-17-051",
            "label": "Set 17 · Q51"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-10-039",
          "label": "Set 10 · Q39"
         },
         {
          "id": "PAST-17-051",
          "label": "Set 17 · Q51"
         }
        ]
       },
       {
        "id": "truss-determinacy-and-temperature",
        "title": "Determinacy of trusses and temperature in determinate structures",
        "html": "<p>A simple plane truss with j joints needs \\(m = 2j - 3\\) members to be rigid and determinate. Two simple trusses joined into a compound truss need three connecting bars, neither parallel nor concurrent. With r reaction components, the degree of static indeterminacy is \\(D_s = m + r - 2j\\).</p><p>A determinate structure can expand freely, so a uniform temperature change deforms it without causing any stress. Indeterminate structures, restrained against that movement, do develop temperature stresses.</p><p>Member forces in a determinate truss are found by the <em>method of joints</em>, using two equilibrium equations at each joint in turn, or by the <em>method of sections</em>, cutting no more than three members of unknown force and taking moments about the point where two of them meet to find the third directly.</p><p>Some members carry no force under a given load. Where two non-collinear members meet at an unloaded joint, both are zero-force members; where three meet and two are collinear, the third is zero. Lack of fit, like temperature, stresses only indeterminate trusses.</p>",
        "formulas": [
         {
          "label": "Simple and compound trusses",
          "tex": "m = 2j - 3, \\qquad m = m_1 + m_2 + 3"
         },
         {
          "label": "Static indeterminacy",
          "tex": "D_s = m + r - 2j"
         },
         {
          "label": "Method of sections, moments about O",
          "tex": "F = \\dfrac{M_O}{d}"
         },
         {
          "label": "Determinate space truss",
          "tex": "m + r = 3j"
         }
        ],
        "example": {
         "title": "Worked examples: member count and indeterminacy",
         "html": "<p>8 joints need \\(2 \\times 8 - 3 = 13\\) members, so a truss with 11 needs 2 more.</p><p>Three members meeting at a top joint, each on its own hinge: m = 3, r = 6, j = 4, so \\(D_s = 3 + 6 - 8 = 1\\).</p>"
        },
        "moreHtml": "<p>The count \\(m = 2j - 3\\) is necessary but not sufficient: the members must also be arranged so that the truss cannot change shape. A simple truss, built from a triangle by adding two members and one joint at a time, is always rigid. If \\(m + r \\lt 2j\\) the truss is a mechanism; if \\(m + r \\gt 2j\\), the extra members or reactions are redundants whose forces depend on the member stiffnesses.</p><p>Space trusses follow the same logic with three equilibrium equations per joint.</p>",
        "points": [
         {
          "html": "A compound truss built from trusses of \\(m_1\\) and \\(m_2\\) members is determinate if \\(m = m_1 + m_2 + 3\\).",
          "sources": [
           {
            "id": "PAST-09-057",
            "label": "Set 9 · Q57"
           }
          ]
         },
         {
          "html": "Rigid, determinate compound trusses need \\(m = m_1 + m_2 + 3\\): three connecting bars.",
          "sources": [
           {
            "id": "PAST-13-050",
            "label": "Set 13 · Q50"
           }
          ]
         },
         {
          "html": "A plane truss with 11 members and 8 joints needs 2 additional members to be stable.",
          "sources": [
           {
            "id": "PAST-12-012",
            "label": "Set 12 · Q12"
           },
           {
            "id": "PAST-14-058",
            "label": "Set 14 · Q58"
           }
          ]
         },
         {
          "html": "Three members from one top joint to three separate hinges make a truss indeterminate to degree 1.",
          "sources": [
           {
            "id": "PAST-18-049",
            "label": "Set 18 · Q49"
           }
          ]
         },
         {
          "html": "A rise in temperature does not change the stress in a determinate structure.",
          "sources": [
           {
            "id": "PAST-14-059",
            "label": "Set 14 · Q59"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-09-057",
          "label": "Set 9 · Q57"
         },
         {
          "id": "PAST-13-050",
          "label": "Set 13 · Q50"
         },
         {
          "id": "PAST-12-012",
          "label": "Set 12 · Q12"
         },
         {
          "id": "PAST-14-058",
          "label": "Set 14 · Q58"
         },
         {
          "id": "PAST-18-049",
          "label": "Set 18 · Q49"
         },
         {
          "id": "PAST-14-059",
          "label": "Set 14 · Q59"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Arch thrust",
        "tex": "H = \\dfrac{M_{\\text{crown}}}{h}"
       },
       {
        "label": "Normal thrust",
        "tex": "N = H\\cos\\theta + V\\sin\\theta"
       },
       {
        "label": "Radial shear",
        "tex": "S = V\\cos\\theta - H\\sin\\theta"
       },
       {
        "label": "Simple truss",
        "tex": "m = 2j - 3"
       },
       {
        "label": "Static indeterminacy",
        "tex": "D_s = m + r - 2j"
       },
       {
        "label": "Parabolic arch axis",
        "tex": "y = \\dfrac{4h\\,x(L - x)}{L^2}"
       },
       {
        "label": "Full-span UDL",
        "tex": "H = \\dfrac{wL^2}{8h}"
       },
       {
        "label": "Half-span UDL",
        "tex": "M_{\\max} = \\pm\\dfrac{wL^2}{64}"
       },
       {
        "label": "Space truss",
        "tex": "m + r = 3j"
       }
      ],
      "cautions": [
       {
        "id": "three-hinged-arch-rise",
        "status": "review",
        "prompt": "The paper calls the arch semicircular but gives it an 8 m rise on a 40 m span",
        "html": "<p>A semicircular arch on a 40 m span would rise 20 m. The published answer uses the stated 8 m rise, which gives H = 30 kN, so the notes use that value.</p>",
        "sources": [
         {
          "id": "PAST-05-062",
          "label": "Set 5 · Q62"
         }
        ]
       },
       {
        "id": "truss-indeterminacy-figure",
        "status": "review",
        "prompt": "The paper shows this truss as a figure; the question is reworded here",
        "html": "<p>The figure is described in words: three members meeting at one top joint, each pinned at its lower end to its own hinge. Counting gives \\(D_s = 3 + 6 - 8 = 1\\).</p>",
        "sources": [
         {
          "id": "PAST-18-049",
          "label": "Set 18 · Q49"
         }
        ]
       }
      ],
      "gaps": [
       "Influence lines for arches are not examined in these papers, and two-hinged arches are treated in 4.6."
      ]
     },
     "ACiE0406": {
      "code": "ACiE0406",
      "questionCount": 29,
      "format": 2,
      "summary": "<p>Indeterminate structures have more unknowns than equilibrium can supply, so the compatibility of deformations provides the rest. This subchapter compares force and displacement methods, including consistent deformation, the three-moment equation, slope-deflection and moment distribution with its stiffness, carry-over and distribution factors.</p><p>It then treats fixed and propped beams, the thrust of two-hinged arches under load, temperature and rib shortening, and plastic analysis: plastic hinges, shape factors, collapse mechanisms and the theorems of collapse.</p>",
      "blocks": [
       {
        "id": "indeterminacy-and-methods",
        "title": "Indeterminate structures and the methods of analysis",
        "html": "<p>A structure is statically indeterminate when equilibrium alone cannot give all its reactions and internal forces. A two-hinge arch has four reaction components and only three equations, so it is indeterminate to the first degree; a third hinge at the crown makes the arch determinate. <em>Kinematic</em> indeterminacy counts the unknown joint displacements instead: a propped cantilever, with axial deformation considered, can rotate and slide at the prop, 2 in all.</p><p>Force, or flexibility, methods take redundant forces as unknowns. Displacement methods, such as slope-deflection and the stiffness matrix method, take joint displacements. Hardy Cross's moment distribution method solves the slope-deflection equations by iteration, balancing and carrying over moments.</p><p>Indeterminate structures are stiffer and more economical, with smaller moments and deflections, and their redundancy gives loads another path if one member fails. The price is that settlement, temperature change and lack of fit stress them, and their analysis needs member stiffnesses as well as equilibrium.</p><p>In the force method the redundants are released, the deflections of the released structure are found, and the redundants are chosen to restore compatibility: the <em>method of consistent deformation</em>. Clapeyron's <em>three-moment equation</em> applies the same idea to continuous beams, relating the moments at three consecutive supports.</p>",
        "formulas": [
         {
          "label": "Three-moment equation, constant EI (x̄ from the outer supports)",
          "tex": "\\begin{aligned} &amp;M_A L_1 + 2M_B(L_1 + L_2) + M_C L_2 \\\\ &amp;= -\\dfrac{6A_1\\bar{x}_1}{L_1} - \\dfrac{6A_2\\bar{x}_2}{L_2} \\end{aligned}"
         },
         {
          "label": "Slope-deflection equation",
          "tex": "\\begin{aligned} M_{AB} &amp;= M_{FAB} \\\\ &amp;\\quad + \\dfrac{2EI}{L}\\left(2\\theta_A + \\theta_B - \\dfrac{3\\Delta}{L}\\right) \\end{aligned}"
         }
        ],
        "example": {
         "title": "Worked example: a propped cantilever by consistent deformation",
         "html": "<p>Remove the prop of a cantilever carrying w over its span L. The free tip deflects \\(wL^4/8EI\\) down, and the prop reaction R lifts it by \\(RL^3/3EI\\). Compatibility requires zero deflection at the prop:</p>\\[\\begin{aligned} \\dfrac{RL^3}{3EI} &amp;= \\dfrac{wL^4}{8EI}, \\qquad R = \\dfrac{3wL}{8} \\\\ M_A &amp;= \\dfrac{wL^2}{2} - \\dfrac{3wL^2}{8} = \\dfrac{wL^2}{8} \\end{aligned}\\]"
        },
        "moreHtml": "<p>The slope-deflection method writes each end moment of a member in terms of its end rotations, its chord rotation \\(\\Delta/L\\) and its fixed-end moment, and then imposes equilibrium at the joints. The unknowns are the joint rotations and sway displacements, so the number of equations equals the kinematic indeterminacy.</p><p>The force method suits structures with few redundants and the displacement methods those with few free joint displacements. Computer programs use the stiffness matrix method throughout, because it can be assembled automatically, member by member.</p>",
        "points": [
         {
          "html": "A two-hinge arch is an indeterminate structure; three-hinge arches and simple beams are determinate.",
          "sources": [
           {
            "id": "PAST-10-008",
            "label": "Set 10 · Q8"
           }
          ]
         },
         {
          "html": "A propped cantilever with axial deformation has a kinematic indeterminacy of 2.",
          "sources": [
           {
            "id": "PAST-17-007",
            "label": "Set 17 · Q7"
           }
          ]
         },
         {
          "html": "The stiffness matrix method is a displacement method, solving for joint displacements.",
          "sources": [
           {
            "id": "PAST-06-026",
            "label": "Set 6 · Q26"
           }
          ]
         },
         {
          "html": "Hardy Cross published the moment distribution method, in 1930.",
          "sources": [
           {
            "id": "PAST-11-027",
            "label": "Set 11 · Q27"
           }
          ]
         },
         {
          "html": "The moment distribution method solves the slope-deflection equations by iteration.",
          "sources": [
           {
            "id": "PAST-10-036",
            "label": "Set 10 · Q36"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-10-008",
          "label": "Set 10 · Q8"
         },
         {
          "id": "PAST-17-007",
          "label": "Set 17 · Q7"
         },
         {
          "id": "PAST-06-026",
          "label": "Set 6 · Q26"
         },
         {
          "id": "PAST-11-027",
          "label": "Set 11 · Q27"
         },
         {
          "id": "PAST-10-036",
          "label": "Set 10 · Q36"
         }
        ]
       },
       {
        "id": "stiffness-carry-over-and-distribution",
        "title": "Member stiffness, carry-over and distribution factors",
        "html": "<p>The <em>stiffness</em> of a member is the moment needed at its near end to rotate it through a unit angle. It depends on the far end: 4EI/L when the far end is fixed, 3EI/L when it is hinged, and EI/L when it is a guided roller that can slide but not rotate.</p><p>A moment applied at the near end induces a moment at the far end; the multiplier is the <em>carry-over factor</em>, one half for a fixed far end and zero for a pinned one. At a joint an unbalanced moment is shared among the members in proportion to their stiffness, through distribution factors that add up to 1.</p><p>Moment distribution starts with every joint locked and the <em>fixed-end moments</em> of the loaded spans. Each joint is then released in turn: its unbalanced moment is distributed to the members by their distribution factors, half of each share is carried over to the far ends, and the cycle repeats until the carry-overs are negligible.</p><p>At a fixed support the distribution factor is 0, and at a pinned end it is 1. Frames that can sway need an extra correction for the sway moments.</p>",
        "formulas": [
         {
          "label": "Near-end stiffness",
          "tex": "k = \\dfrac{4EI}{L},\\ \\dfrac{3EI}{L},\\ \\dfrac{EI}{L}"
         },
         {
          "label": "Distribution factor",
          "tex": "DF = \\dfrac{k}{\\sum k}"
         },
         {
          "label": "Fixed-end moments, UDL and central load",
          "tex": "M_F = \\dfrac{wL^2}{12}, \\qquad M_F = \\dfrac{WL}{8}"
         },
         {
          "label": "Fixed-end moments, point load at a from A",
          "tex": "\\begin{aligned} M_{FAB} &amp;= \\dfrac{Wab^2}{L^2} \\\\ M_{FBA} &amp;= \\dfrac{Wa^2b}{L^2} \\end{aligned}"
         },
         {
          "label": "Centre span, symmetric and antisymmetric",
          "tex": "k = \\dfrac{2EI}{L}, \\qquad k = \\dfrac{6EI}{L}"
         }
        ],
        "example": {
         "title": "Worked example: distribution factors at a joint",
         "html": "<p>At joint B, member BA is 4 m long with A fixed and member BC is 6 m long with C pinned; EI is constant.</p>\\[\\begin{aligned} k_{BA} &amp;= \\dfrac{4EI}{4} = EI \\\\ k_{BC} &amp;= \\dfrac{3EI}{6} = 0.5EI \\\\ DF_{BA} &amp;= \\dfrac{1}{1.5} = 0.67 \\\\ DF_{BC} &amp;= \\dfrac{0.5}{1.5} = 0.33 \\end{aligned}\\]<p>An unbalanced moment of 30 kNm at B is balanced by −20 kNm in BA and −10 kNm in BC, and −10 kNm carries over to A.</p>"
        },
        "moreHtml": "<p>The factors come from the slope-deflection equation. A moment M at the near end of a member with its far end fixed rotates it by ML/4EI and induces M/2 at the far end; with the far end pinned the rotation is ML/3EI and nothing is carried over. An end known to be pinned can therefore be given the reduced stiffness 3EI/L and released only once, which shortens the work.</p><p>For a symmetric beam under symmetric load only half the structure need be analysed, with the span crossing the centre line given a stiffness of 2EI/L; under antisymmetric load that span has 6EI/L.</p>",
        "points": [
         {
          "html": "With the far end fixed, the stiffness at the near end of a member is 4EI/L.",
          "sources": [
           {
            "id": "PAST-08-054",
            "label": "Set 8 · Q54"
           },
           {
            "id": "PAST-14-080",
            "label": "Set 14 · Q80"
           },
           {
            "id": "PAST-18-045",
            "label": "Set 18 · Q45"
           }
          ]
         },
         {
          "html": "The stiffness of a member whose far end is hinged is 3EI/L.",
          "sources": [
           {
            "id": "PAST-16-075",
            "label": "Set 16 · Q75"
           },
           {
            "id": "PAST-17-050",
            "label": "Set 17 · Q50"
           }
          ]
         },
         {
          "html": "When the far end is a vertical guided roller, the stiffness factor is EI/L.",
          "sources": [
           {
            "id": "PAST-15-030",
            "label": "Set 15 · Q30"
           }
          ]
         },
         {
          "html": "The multiplier giving the far-end moment from an applied near-end moment is the carry-over factor.",
          "sources": [
           {
            "id": "PAST-12-036",
            "label": "Set 12 · Q36"
           }
          ]
         },
         {
          "html": "The distribution factor is the ratio of stiffness of a member to that of the joint, the sum of member stiffnesses there.",
          "sources": [
           {
            "id": "PAST-14-017",
            "label": "Set 14 · Q17"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-08-054",
          "label": "Set 8 · Q54"
         },
         {
          "id": "PAST-14-080",
          "label": "Set 14 · Q80"
         },
         {
          "id": "PAST-18-045",
          "label": "Set 18 · Q45"
         },
         {
          "id": "PAST-16-075",
          "label": "Set 16 · Q75"
         },
         {
          "id": "PAST-17-050",
          "label": "Set 17 · Q50"
         },
         {
          "id": "PAST-15-030",
          "label": "Set 15 · Q30"
         },
         {
          "id": "PAST-12-036",
          "label": "Set 12 · Q36"
         },
         {
          "id": "PAST-14-017",
          "label": "Set 14 · Q17"
         }
        ]
       },
       {
        "id": "fixed-beam-deflections",
        "title": "Deflections of fixed beams",
        "html": "<p>Fixing both ends of a beam sharply reduces its deflection. Under a central point load the central deflection falls to a quarter of the simply supported value; under a uniform load it falls to a fifth.</p><p>The fixing moments are what stiffen the beam. Under a UDL the end moments are \\(wL^2/12\\), hogging, and the midspan moment falls to \\(wL^2/24\\), sagging, against \\(wL^2/8\\) for a simple span; the points of contraflexure lie 0.211L from each end. Under a central point load the end and midspan moments are both WL/8, with contraflexure at the quarter points.</p><p>If one end of a fixed beam sinks by \\(\\Delta\\) relative to the other, equal moments are induced at both ends even without load. A propped cantilever under a UDL has a prop reaction of 3wL/8 and a fixed-end moment of \\(wL^2/8\\).</p>",
        "formulas": [
         {
          "label": "Fixed beam, central point load",
          "tex": "\\delta = \\dfrac{PL^3}{192EI}"
         },
         {
          "label": "Fixed beam, UDL with W = wL",
          "tex": "\\delta = \\dfrac{wL^4}{384EI} = \\dfrac{WL^3}{384EI}"
         },
         {
          "label": "Fixed beam under UDL",
          "tex": "M_{\\text{end}} = \\dfrac{wL^2}{12}, \\qquad M_{\\text{mid}} = \\dfrac{wL^2}{24}"
         },
         {
          "label": "Sinking support",
          "tex": "M = \\dfrac{6EI\\Delta}{L^2}"
         },
         {
          "label": "Propped cantilever, UDL",
          "tex": "R = \\dfrac{3wL}{8}, \\qquad \\delta_{\\max} = \\dfrac{wL^4}{185EI}"
         }
        ],
        "example": {
         "title": "Worked example: fixed against simple span",
         "html": "<p>A 6 m span carries 20 kN/m. Fixed at both ends:</p>\\[\\begin{aligned} M_{\\text{end}} &amp;= \\dfrac{20 \\times 36}{12} = 60\\ \\text{kNm} \\\\ M_{\\text{mid}} &amp;= \\dfrac{20 \\times 36}{24} = 30\\ \\text{kNm} \\end{aligned}\\]<p>Simply supported, the midspan moment would be \\(20 \\times 36/8 = 90\\) kNm. The central deflection of the fixed beam is a fifth of the simple beam's.</p>"
        },
        "moreHtml": "<p>The fixed-end moments follow by superposition: the fixing moments must bring the end slopes of the simple beam back to zero. Equal end moments M on a simple span rotate each end by ML/3EI + ML/6EI = ML/2EI, and setting that equal to the simple-beam slope \\(wL^3/24EI\\) gives \\(M = wL^2/12\\).</p><p>Real supports are seldom perfectly fixed. A small end rotation releases part of the fixing moment and increases the midspan moment and deflection, which is why designers often check both the fixed and the simply supported cases.</p>",
        "points": [
         {
          "html": "A fixed beam with total load W spread uniformly deflects \\(WL^3/384EI\\) at the centre.",
          "sources": [
           {
            "id": "PAST-05-048",
            "label": "Set 5 · Q48"
           }
          ]
         },
         {
          "html": "A central point load P deflects a fixed beam by \\(PL^3/192EI\\), a quarter of the simple-beam value.",
          "sources": [
           {
            "id": "PAST-11-037",
            "label": "Set 11 · Q37"
           }
          ]
         },
         {
          "html": "Under UDL the maximum deflections of a fixed and a simply supported beam are in the ratio 1:5.",
          "sources": [
           {
            "id": "PAST-16-078",
            "label": "Set 16 · Q78"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-048",
          "label": "Set 5 · Q48"
         },
         {
          "id": "PAST-11-037",
          "label": "Set 11 · Q37"
         },
         {
          "id": "PAST-16-078",
          "label": "Set 16 · Q78"
         }
        ]
       },
       {
        "id": "two-hinged-arch-thrust",
        "title": "Horizontal thrust in two-hinged arches",
        "html": "<p>The horizontal thrust H of a two-hinged arch is the redundant. Castigliano's theorem, with no relative movement of the hinges, gives it in terms of the free beam moment M. A temperature rise tries to spread the supports by \\(L\\alpha T\\), which adds to the thrust; rib shortening adds a flexibility term below, reducing it.</p><p>A parabolic arch under a full-span UDL has \\(H = wl^2/8h\\); the line of thrust then follows the axis, so the bending moment is zero. A triangular load is half a UDL plus an antisymmetric part that makes no thrust. For semicircular arches, a crown load W gives \\(H = W/\\pi\\) whatever the radius, and a UDL over half the span gives \\(2wR/3\\pi\\). The reaction locus is a horizontal straight line.</p><p>A two-hinged arch is stiffer than a three-hinged one and has smaller moments but, being indeterminate, it is stressed by temperature change, rib shortening and any spreading of its supports. A fall in temperature reduces the thrust just as a rise increases it, and a small yield of the abutments can release much of it.</p><p>For a parabolic arch the usual simplification takes \\(I = I_0\\sec\\theta\\), with \\(I_0\\) at the crown, so that \\(ds/I\\) becomes \\(dx/I_0\\) and the integrals run simply along the span.</p>",
        "formulas": [
         {
          "label": "Thrust of a two-hinged arch",
          "tex": "H = \\dfrac{\\int My\\, ds/EI}{\\int y^2\\, ds/EI}"
         },
         {
          "label": "With temperature rise and rib shortening",
          "tex": "H = \\dfrac{\\int My\\, ds/EI + L\\alpha T}{\\int y^2\\, ds/EI + \\int ds/AE}"
         },
         {
          "label": "Parabolic arch: UDL and triangular load",
          "tex": "H = \\dfrac{wl^2}{8h}, \\qquad H = \\dfrac{wl^2}{16h}"
         },
         {
          "label": "Parabolic arch, central point load",
          "tex": "H = \\dfrac{25\\,WL}{128\\,h}"
         },
         {
          "label": "Parabolic arch, temperature rise T",
          "tex": "H = \\dfrac{15\\,E I_0\\,\\alpha T}{8h^2}"
         }
        ],
        "moreHtml": "<p>The thrust formula follows from Castigliano's theorem. The strain energy of the arch depends on H through the moment M − Hy; since the hinges do not move apart, the derivative of the energy with respect to H is zero, which gives the ratio of the two integrals. The temperature term enters because the free expansion \\(L\\alpha T\\) must be pushed back by H.</p><p>With the secant assumption, a parabolic arch gives the neat results below for a central point load and for a uniform rise in temperature.</p>",
        "points": [
         {
          "html": "For a two-hinged arch of constant EI, H is \\(\\int My\\,ds/EI\\) divided by \\(\\int y^2\\,ds/EI\\).",
          "sources": [
           {
            "id": "PAST-05-028",
            "label": "Set 5 · Q28"
           }
          ]
         },
         {
          "html": "The horizontal reaction of a two-hinged arch is \\((\\int My\\,ds/EI)/(\\int y^2\\,ds/EI)\\).",
          "sources": [
           {
            "id": "PAST-17-024",
            "label": "Set 17 · Q24"
           }
          ]
         },
         {
          "html": "With a temperature rise and rib shortening, \\(L\\alpha T\\) is added above and \\(\\int ds/AE\\) is added below the basic thrust formula.",
          "sources": [
           {
            "id": "PAST-16-053",
            "label": "Set 16 · Q53"
           }
          ]
         },
         {
          "html": "A two-hinged parabolic arch under UDL over the whole span has zero bending moment.",
          "sources": [
           {
            "id": "PAST-16-055",
            "label": "Set 16 · Q55"
           }
          ]
         },
         {
          "html": "A load varying from zero to w on a two-hinged parabolic arch gives a thrust of \\(wl^2/16H\\), with H the rise.",
          "sources": [
           {
            "id": "PAST-15-067",
            "label": "Set 15 · Q67"
           }
          ]
         },
         {
          "html": "A UDL w over the left half of a two-hinged semicircular arch gives a thrust of \\(2wR/3\\pi\\).",
          "sources": [
           {
            "id": "PAST-07-066",
            "label": "Set 7 · Q66"
           },
           {
            "id": "PAST-17-078",
            "label": "Set 17 · Q78"
           }
          ]
         },
         {
          "html": "Semicircular two-hinged arches of 5, 7.5 and 10 m radius with equal crown loads have thrusts in the ratio 1:1:1.",
          "sources": [
           {
            "id": "PAST-08-067",
            "label": "Set 8 · Q67"
           }
          ]
         },
         {
          "html": "The reaction locus of a two-hinged semicircular arch is a straight line at height \\(\\pi R/2\\).",
          "sources": [
           {
            "id": "PAST-09-030",
            "label": "Set 9 · Q30"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-028",
          "label": "Set 5 · Q28"
         },
         {
          "id": "PAST-17-024",
          "label": "Set 17 · Q24"
         },
         {
          "id": "PAST-16-053",
          "label": "Set 16 · Q53"
         },
         {
          "id": "PAST-16-055",
          "label": "Set 16 · Q55"
         },
         {
          "id": "PAST-15-067",
          "label": "Set 15 · Q67"
         },
         {
          "id": "PAST-07-066",
          "label": "Set 7 · Q66"
         },
         {
          "id": "PAST-17-078",
          "label": "Set 17 · Q78"
         },
         {
          "id": "PAST-08-067",
          "label": "Set 8 · Q67"
         },
         {
          "id": "PAST-09-030",
          "label": "Set 9 · Q30"
         }
        ]
       },
       {
        "id": "plastic-analysis",
        "title": "Plastic hinges and collapse loads",
        "html": "<p>Plastic analysis finds the load at which enough plastic hinges form to turn a structure into a mechanism. Each hinge rotates at the plastic moment \\(M_p\\), and the segments between successive hinges are treated as rigid. The collapse load follows from virtual work: external work of the loads equals \\(M_p\\) times the hinge rotations.</p><p>A fixed beam with a central load forms hinges at both ends and at midspan. A propped cantilever under UDL forms one at the fixed end and one about 0.414L from the prop. Along the beam, the yielded length of a hinge depends on the shape factor S; for I-sections it is short.</p><p>The plastic modulus \\(Z_p\\) is the sum of the first moments of the areas above and below the equal-area axis. The <em>shape factor</em> is 1.5 for a rectangle, 1.7 for a solid circle, 2 for a diamond and about 1.12 to 1.2 for rolled I-sections.</p><p>Three theorems govern collapse. The <em>upper-bound</em> theorem says any assumed mechanism gives a load at or above the true collapse load; the <em>lower-bound</em> theorem says any safe equilibrium distribution of moments gives a load at or below it; and the <em>uniqueness</em> theorem says a load satisfying both is the collapse load.</p>",
        "formulas": [
         {
          "label": "Fixed beam, central load",
          "tex": "W_c = \\dfrac{8M_p}{L}"
         },
         {
          "label": "Propped cantilever, UDL",
          "tex": "x = (\\sqrt{2} - 1)L, \\qquad w_u = \\dfrac{11.66\\, M_p}{L^2}"
         },
         {
          "label": "Plastic moment and shape factor",
          "tex": "M_p = f_y Z_p, \\qquad S = \\dfrac{Z_p}{Z}"
         },
         {
          "label": "Rectangle",
          "tex": "Z_p = \\dfrac{bd^2}{4}, \\qquad S = 1.5"
         },
         {
          "label": "Simple beam, central load",
          "tex": "W_c = \\dfrac{4M_p}{L}"
         }
        ],
        "example": {
         "title": "Worked example: collapse of a fixed beam",
         "html": "<p>With end rotations \\(\\theta\\) and a centre rotation \\(2\\theta\\), the load moves \\(L\\theta/2\\):</p>\\[\\begin{aligned} W \\dfrac{L\\theta}{2} &amp;= M_p(\\theta + 2\\theta + \\theta) \\\\ W_c &amp;= \\dfrac{8M_p}{L} \\end{aligned}\\]"
        },
        "moreHtml": "<p>The propped cantilever shows the method. With hinges at the fixed end and at a distance x from the prop, virtual work gives a collapse load that depends on x; minimising it gives \\(x = (\\sqrt{2} - 1)L\\). A simply supported beam needs only one hinge, so under a central load it collapses at \\(4M_p/L\\).</p><p>The <em>load factor</em> is the collapse load divided by the working load. For a determinate beam it is the shape factor times the elastic factor of safety; indeterminate structures gain a further reserve as moments redistribute after the first hinge forms.</p>",
        "points": [
         {
          "html": "Between successive plastic hinges each segment deforms as a rigid material.",
          "sources": [
           {
            "id": "PAST-07-058",
            "label": "Set 7 · Q58"
           }
          ]
         },
         {
          "html": "A propped cantilever under UDL forms its sagging plastic hinge 0.414 L from the propped end.",
          "sources": [
           {
            "id": "PAST-04-023",
            "label": "Set 4 · Q23"
           }
          ]
         },
         {
          "html": "A fixed-end beam with a central point load collapses at \\(W = 8M_p/L\\).",
          "sources": [
           {
            "id": "PAST-10-074",
            "label": "Set 10 · Q74"
           }
          ]
         },
         {
          "html": "The plastic hinge length in a simply supported I-beam under a central load is taken as L/5.",
          "sources": [
           {
            "id": "PAST-12-065",
            "label": "Set 12 · Q65"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-07-058",
          "label": "Set 7 · Q58"
         },
         {
          "id": "PAST-04-023",
          "label": "Set 4 · Q23"
         },
         {
          "id": "PAST-10-074",
          "label": "Set 10 · Q74"
         },
         {
          "id": "PAST-12-065",
          "label": "Set 12 · Q65"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Stiffness, far end fixed",
        "tex": "k = \\dfrac{4EI}{L}"
       },
       {
        "label": "Stiffness, far end hinged",
        "tex": "k = \\dfrac{3EI}{L}"
       },
       {
        "label": "Distribution factor",
        "tex": "DF = \\dfrac{k}{\\sum k}"
       },
       {
        "label": "Fixed beam, central load",
        "tex": "\\delta = \\dfrac{PL^3}{192EI}"
       },
       {
        "label": "Fixed beam, UDL",
        "tex": "\\delta = \\dfrac{wL^4}{384EI}"
       },
       {
        "label": "Two-hinged arch thrust",
        "tex": "H = \\dfrac{\\int My\\, ds/EI}{\\int y^2\\, ds/EI}"
       },
       {
        "label": "Semicircular arch, crown load",
        "tex": "H = \\dfrac{W}{\\pi}"
       },
       {
        "label": "Fixed beam collapse",
        "tex": "W_c = \\dfrac{8M_p}{L}"
       },
       {
        "label": "Fixed-end moment, UDL",
        "tex": "M_F = \\dfrac{wL^2}{12}"
       },
       {
        "label": "Sinking support",
        "tex": "M = \\dfrac{6EI\\Delta}{L^2}"
       },
       {
        "label": "Parabolic two-hinged arch, central load",
        "tex": "H = \\dfrac{25\\,WL}{128\\,h}"
       },
       {
        "label": "Shape factor",
        "tex": "S = \\dfrac{Z_p}{Z}"
       }
      ],
      "cautions": [
       {
        "id": "arch-thrust-increment-print",
        "status": "review",
        "prompt": "The paper prints the increment in the thrust formula as dy/dx",
        "html": "<p>The intended increment in both integrals is \\(ds/EI\\), so \\(H = \\int My\\,ds/EI \\big/ \\int y^2\\,ds/EI\\), with M the free beam moment.</p>",
        "sources": [
         {
          "id": "PAST-05-028",
          "label": "Set 5 · Q28"
         }
        ]
       },
       {
        "id": "plastic-hinge-length",
        "status": "review",
        "prompt": "The plastic hinge length depends on the shape factor; the key takes L/5",
        "html": "<p>Under a central load the yielded zone spans \\(L(1 - 1/S)\\). For an I-section, with shape factor about 1.12 to 1.25, that is roughly L/9 to L/5; the published answer takes L/5.</p>",
        "sources": [
         {
          "id": "PAST-12-065",
          "label": "Set 12 · Q65"
         }
        ]
       }
      ],
      "gaps": [
       "Continuous-beam influence lines, sway frames and the matrix form of the flexibility method are not examined in these papers."
      ]
     }
    });
})();
