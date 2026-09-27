(function () {
    "use strict";
    window.CIVIL_PAST_NOTE_TOPICS = window.CIVIL_PAST_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_PAST_NOTE_TOPICS, {
     "ACiE0401": {
      "code": "ACiE0401",
      "questionCount": 24,
      "format": 2,
      "summary": "<p>This subchapter covers the internal forces in beams. The past-paper questions test the link between load, shear force and bending moment, zero shear and maximum moment, contraflexure and sign convention, pure bending under couples and constant moment, shear and moment in simply supported beams under point loads and UDL, and cantilevers and overhangs.</p>",
      "blocks": [
       {
        "id": "load-shear-moment-relations",
        "title": "How load, shear force and bending moment are related",
        "html": "<p>A cut through a beam exposes an axial force, a shear force S and a bending moment M. The shear force is the rate of change of the moment along the span, and the load intensity is the rate of change of the shear. So a constant shear gives a linearly varying moment, and a uniform load gives a linearly varying shear and a parabolic moment.</p><p>Where the shear is zero or changes sign, the moment has a stationary value, a maximum or a minimum; in exam questions this is the section of maximum bending moment. A point of <em>contraflexure</em> is where the moment changes sign, passing through zero. A positive, sagging moment bends the beam convex downward.</p>",
        "formulas": [
         {
          "label": "Load, shear and moment",
          "tex": "S = \\dfrac{dM}{dx}, \\qquad \\dfrac{dS}{dx} = -w"
         }
        ],
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
        "html": "<p>Since shear is the slope of the moment diagram, a constant bending moment means zero shear: <em>pure bending</em>. Equal moments at the two ends of a simply supported beam, or the middle third between two symmetrical loads, produce it.</p><p>A concentrated couple adds no net force, so it leaves the shear diagram unchanged but makes the moment diagram jump by its value. On a cantilever an end couple M puts the same moment M on every section with zero shear; a couple at midspan loads only the part between it and the fixed end. On a simple beam the reactions form an opposing couple, each equal to M/L.</p>",
        "formulas": [
         {
          "label": "Reactions to a couple on a simple span",
          "tex": "R_A = -R_B = \\dfrac{M}{L}"
         }
        ],
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
        "html": "<p>For a determinate beam the shear and moment follow from statics alone: they depend on the loads, span and supports, not on the beam section, which governs only the stresses. Loads placed directly over the supports pass straight into the reactions and cause no internal force.</p><p>A single point load gives a triangular moment diagram with its peak under the load; a uniform load gives a parabola. To find a moment, take the reaction times its distance minus each load times its distance from the section. A load inclined to the beam is resolved: the component along the axis is an axial force, the transverse one causes bending.</p>",
        "formulas": [
         {
          "label": "Point load and uniform load",
          "tex": "M_{\\text{max}} = \\dfrac{Wab}{L}, \\qquad M_{\\text{max}} = \\dfrac{wL^2}{8}"
         }
        ],
        "example": {
         "title": "Worked examples: moments in simple beams",
         "html": "<p>Three 10 kN loads at 1, 2 and 3 m on a 4 m span: \\(R_A = 15\\) kN and \\(M_{\\text{max}} = 15 \\times 2 - 10 \\times 1 = 20\\) kNm.</p><p>1 kN/m over 8 m: \\(R = 4\\) kN, so \\(M(2) = 4 \\times 2 - 1 \\times 2^2/2 = 6\\) kNm.</p>"
        },
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
        "html": "<p>In a cantilever the shear at the fixed support is the sum of all the loads, and the moment there is the sum of each load times its distance from the support. The moment grows towards the fixed end, where it is largest, and is hogging.</p><p>An overhang behaves like a short cantilever from the nearer support, so the largest negative, hogging moment in an overhanging beam usually occurs at that support: \\(wa^2/2\\) for a uniform load on an overhang of length a.</p>",
        "formulas": [
         {
          "label": "Support actions in a cantilever",
          "tex": "V = \\sum W_i, \\qquad M = \\sum W_i x_i"
         },
         {
          "label": "Hogging moment at an overhang support",
          "tex": "M = \\dfrac{w a^2}{2}"
         }
        ],
        "example": {
         "title": "Worked examples: cantilever and overhang",
         "html": "<p>Loads of 300, 500 and 800 kN at 0.5, 2 and 4 m: \\(V = 1600\\) kN and \\(M = 150 + 1000 + 3200\\), which is 4350 kNm.</p><p>A 2 m overhang under 10 kN/m: \\(M = 10 \\times 2^2/2 = 20\\) kNm hogging.</p>"
        },
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
       }
      ],
      "cautions": [],
      "gaps": [
       "Axial-force diagrams and superposition of load cases from the syllabus are only touched on in these papers."
      ]
     },
     "ACiE0402": {
      "code": "ACiE0402",
      "questionCount": 24,
      "format": 2,
      "summary": "<p>This subchapter covers stress, strain and the elastic behaviour of materials. The past-paper questions test the elastic moduli and Poisson's ratio, the stress–strain curve and Hooke's law, ductility, proof load and resilience, strain energy in a centrally loaded beam, stresses on oblique and principal planes, Mohr's circle and the principal stress formulas.</p>",
      "blocks": [
       {
        "id": "elastic-constants-and-stress-strain",
        "title": "Elastic constants and the stress–strain curve",
        "html": "<p>Within the elastic range stress is proportional to strain, Hooke's law, which holds up to the <em>limit of proportionality</em>. The ratio of linear stress to linear strain is the modulus of elasticity E; the ratio of shear stress to shear strain is the modulus of rigidity G. Both are stresses, in N/m<sup>2</sup> like pressure, whereas section modulus \\(Z = I/y\\) is a length cubed.</p><p>Poisson's ratio, lateral over longitudinal strain, lies between 0 and 0.5, so it is always less than 1. The three constants are linked. Beyond the yield point mild steel flows plastically: the strain increases heavily with little rise in stress.</p>",
        "formulas": [
         {
          "label": "Elastic moduli",
          "tex": "E = \\dfrac{\\sigma}{\\varepsilon}, \\qquad G = \\dfrac{\\tau}{\\gamma}"
         },
         {
          "label": "Link between E, G and Poisson's ratio",
          "tex": "E = 2G(1 + \\mu), \\qquad \\mu = \\dfrac{E}{2G} - 1"
         }
        ],
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
        "html": "<p><em>Ductility</em> is the ability to stretch a long way in tension before breaking. It is measured by the percentage elongation and the percentage reduction in area at the neck, so a larger reduction in area means a more ductile material. Malleability is the matching ability under compression.</p><p>The strain energy stored in a loaded body is its <em>resilience</em>. The greatest load a body can carry without a permanent set is the <em>proof load</em>, and the energy stored at it is the proof resilience; per unit volume that is the modulus of resilience.</p>",
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
        "html": "<p>A load applied gradually does work equal to half the load times its deflection, and that work is stored as strain energy. For a simply supported beam with a central point load the deflection under the load is \\(WL^3/48EI\\), so the strain energy follows directly.</p>",
        "formulas": [
         {
          "label": "Strain energy, central point load",
          "tex": "U = \\dfrac{1}{2} W \\delta = \\dfrac{1}{2} W \\cdot \\dfrac{WL^3}{48EI} = \\dfrac{W^2 L^3}{96EI}"
         }
        ],
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
        "html": "<p>A bar in simple tension carries both normal and shear stress on any inclined plane; the shear is greatest, \\(\\sigma/2\\), on planes at 45°. In general the planes that carry only normal stress, with zero shear, are the <em>principal planes</em>, and the normal stresses on them are the principal stresses. The maximum shear acts on planes at 45° to them.</p><p><em>Mohr's circle</em> plots normal stress on the horizontal axis and shear stress on the vertical axis. Its intersections with the horizontal axis are the principal stresses and its radius is the maximum shear stress.</p>",
        "formulas": [
         {
          "label": "Plane inclined at θ, simple tension",
          "tex": "\\sigma_n = \\sigma\\cos^2\\theta, \\qquad \\tau = \\dfrac{\\sigma}{2}\\sin 2\\theta"
         }
        ],
        "example": {
         "title": "Worked example: shear on an inclined plane",
         "html": "<p>A 2 kN pull on 1000 mm<sup>2</sup> gives \\(\\sigma = 2\\) N/mm<sup>2</sup>. On a plane at 30°:</p>\\[\\tau = \\dfrac{2}{2}\\sin 60^\\circ = 0.866\\ \\text{N/mm}^2\\]"
        },
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
        "html": "<p>For normal stresses \\(\\sigma_x\\) and \\(\\sigma_y\\) with shear \\(\\tau_{xy}\\), the principal stresses are the centre of Mohr's circle plus or minus its radius. The + sign gives the major and the − sign the minor principal stress.</p><p>With only one normal stress \\(\\sigma_x\\) and a shear stress, the centre is at \\(\\sigma_x/2\\). Exam problems usually give two direct stresses and a shear, or one direct stress and a shear, and ask for the major value.</p>",
        "formulas": [
         {
          "label": "Principal stresses",
          "tex": "\\begin{aligned} \\sigma_{1,2} &= \\dfrac{\\sigma_x + \\sigma_y}{2} \\\\ &\\quad \\pm \\sqrt{\\left(\\dfrac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2} \\end{aligned}"
         },
         {
          "label": "One direct stress with shear",
          "tex": "\\sigma_{1,2} = \\dfrac{\\sigma_x}{2} \\pm \\sqrt{\\dfrac{\\sigma_x^2}{4} + \\tau_{xy}^2}"
         }
        ],
        "example": {
         "title": "Worked examples: major principal stress",
         "html": "<p>300 MPa with 200 MPa shear: the centre is 150 and the radius \\(\\sqrt{150^2 + 200^2} = 250\\), so \\(\\sigma_1 = 400\\) MPa.</p><p>80 and 60 N/mm<sup>2</sup> with 20 N/mm<sup>2</sup> shear:</p>\\[\\begin{aligned} \\sigma_1 &amp;= 70 + \\sqrt{10^2 + 20^2} \\\\ &amp;= 70 + \\sqrt{500} \\approx 92.36 \\end{aligned}\\]"
        },
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
       "Torsion of circular shafts and the maximum shear stress plane from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0403": {
      "code": "ACiE0403",
      "questionCount": 17,
      "format": 2,
      "summary": "<p>This subchapter covers bending theory and the buckling of columns. The past-paper questions test the flexure formula and the linear bending-stress distribution, bending and torsion in shafts, shear stress in rectangular beams, effective lengths for the ideal end conditions, Euler's crippling load and the difference between long and short columns.</p>",
      "blocks": [
       {
        "id": "flexure-formula-and-bending-stress",
        "title": "The flexure formula and bending stress",
        "html": "<p>Simple bending theory assumes plane sections stay plane, so strain, and in the elastic range stress, varies linearly with distance from the neutral axis: zero there and greatest at the extreme fibres. The flexure equation links moment, stress and curvature.</p><p>A circular shaft under both a bending moment and a torque carries a bending stress and a torsional shear stress, both inversely proportional to \\(d^3\\). Their ratio depends only on M and T.</p>",
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
         }
        ],
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
        "html": "<p>Transverse shear stress in a beam follows \\(\\tau = VQ/Ib\\). The first moment Q is largest at the neutral axis, so the shear stress is maximum there and zero at the top and bottom fibres. Over a solid rectangle the distribution is a parabola whose peak is 1.5 times the average; for a circle it is 4/3.</p><p>Torsional shear in a circular shaft behaves differently: it grows linearly from zero at the axis to its maximum at the outer surface.</p>",
        "formulas": [
         {
          "label": "Rectangular beam, peak shear",
          "tex": "\\tau_{\\text{max}} = 1.5\\,\\dfrac{V}{bd}"
         },
         {
          "label": "Torsion of a shaft",
          "tex": "\\tau = \\dfrac{T r}{J}"
         }
        ],
        "example": {
         "title": "Worked example: peak shear in a rectangular beam",
         "html": "<p>50 kN on a section 300 mm wide and 450 mm deep, in N/mm<sup>2</sup>:</p>\\[\\tau_{\\text{max}} = \\dfrac{1.5 \\times 50\\,000}{300 \\times 450} \\approx 0.556\\]"
        },
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
        "html": "<p>A long column buckles into a curve whose shape depends on how its ends are held. The <em>effective length</em> \\(l_e\\) is the length of the equivalent pin-ended column, the distance between points of zero moment in the buckled shape.</p><p>For the ideal cases: both ends hinged, \\(l_e = L\\); both ends fixed, \\(L/2\\); one end fixed and the other hinged, \\(L/\\sqrt{2}\\); one end fixed and the other free, \\(2L\\). Two columns are equivalent when their effective lengths match.</p>",
        "formulas": [
         {
          "label": "Ideal effective lengths",
          "tex": "l_e = L,\\ \\dfrac{L}{2},\\ \\dfrac{L}{\\sqrt{2}},\\ 2L"
         }
        ],
        "example": {
         "title": "Worked example: equivalent fixed–free column",
         "html": "<p>A fixed–fixed column of length L has \\(l_e = L/2\\). A fixed–free column of length \\(L'\\) has \\(l_e = 2L'\\). Equal effective lengths give \\(2L' = L/2\\), so \\(L' = L/4\\).</p>"
        },
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
        "html": "<p>Euler's formula gives the load at which an ideal long column buckles. It varies inversely with the square of the effective length, so halving the length, or fixing both ends, multiplies the load by four.</p><p>How a column fails depends on its slenderness ratio \\(l_e/r\\). A long column fails by buckling: the bending stress from lateral deflection governs and the direct stress is negligible by comparison. A short column, with a low slenderness ratio, fails by direct crushing.</p>",
        "formulas": [
         {
          "label": "Euler's crippling load",
          "tex": "P = \\dfrac{\\pi^2 E I}{l_e^2}"
         },
         {
          "label": "Both ends fixed",
          "tex": "P = \\dfrac{\\pi^2 E I}{(L/2)^2} = \\dfrac{4\\pi^2 E I}{L^2}"
         }
        ],
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
       "Elastic curves, curvature, flexural stiffness and beam deflection from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0404": {
      "code": "ACiE0404",
      "questionCount": 24,
      "format": 2,
      "summary": "<p>This subchapter covers deflection, energy methods and moving loads on determinate structures. The past-paper questions test the standard beam deflections and how section width affects them, virtual work and the limits of the real-work method, continuous beams and internal hinges, influence lines for reactions, shear and moment, and the placing of moving wheel loads and UDLs.</p>",
      "blocks": [
       {
        "id": "standard-beam-deflections",
        "title": "Standard deflections of cantilevers and simple beams",
        "html": "<p>A few deflection results are worth knowing by heart. A cantilever with a point load at its free end deflects \\(WL^3/3EI\\) at the tip; under a full UDL it deflects \\(wL^4/8EI\\). A simply supported beam with a central point load deflects \\(WL^3/48EI\\) at midspan, and under a UDL \\(5wL^4/384EI\\).</p><p>Deflection varies inversely with the second moment of area \\(I = bd^3/12\\), so it is inversely proportional to the width and to the cube of the depth. Comparing loads of equal total W, a central point load deflects a simple beam 8/5 times as much as the same load spread uniformly.</p>",
        "formulas": [
         {
          "label": "Cantilever, end load and UDL",
          "tex": "\\delta = \\dfrac{WL^3}{3EI}, \\qquad \\delta = \\dfrac{wL^4}{8EI}"
         },
         {
          "label": "Simple beam, central load and UDL",
          "tex": "\\delta = \\dfrac{WL^3}{48EI}, \\qquad \\delta = \\dfrac{5wL^4}{384EI}"
         }
        ],
        "example": {
         "title": "Worked example: point load against equal UDL",
         "html": "<p>With total load W on each beam, \\(wL = W\\):</p>\\[\\dfrac{\\delta_A}{\\delta_B} = \\dfrac{WL^3/48EI}{5WL^3/384EI} = \\dfrac{384}{240} = \\dfrac{8}{5}\\]"
        },
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
        "html": "<p>The <em>real work</em> method equates the external work of a gradually applied load, \\(\\tfrac{1}{2}P\\delta\\), to the strain energy stored. It works only for a single concentrated load and gives the deflection only at that load, in its own direction.</p><p><em>Virtual work</em> is the work done by the actual forces moving through a virtual, imaginary but compatible, displacement. Its complementary form, the unit-load method, applies a unit force where the displacement is wanted, so deflections can be found at any point and in any direction. Castigliano's theorem gives the same result as the derivative of strain energy.</p>",
        "formulas": [
         {
          "label": "Real work",
          "tex": "\\tfrac{1}{2} P \\delta = U"
         },
         {
          "label": "Unit-load method",
          "tex": "\\delta = \\int \\dfrac{M m}{EI}\\, dx"
         }
        ],
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
        "html": "<p>A beam is <em>continuous</em> when it runs over more than two supports. Fixed and propped beams are single spans, and a beam projecting past a support is an overhanging beam.</p><p>An internal hinge carries shear but no moment. A beam fixed at A with a hinge and a roller at B splits into a cantilever from A to the hinge and a simply supported piece from the hinge to B. A load placed exactly at the hinge goes entirely to the cantilever part, and the unloaded piece beyond it has zero reactions.</p>",
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
        "html": "<p>An <em>influence line</em> shows how one response, a reaction, shear or moment at a fixed point, changes as a unit load moves across the structure. The point stays fixed and the load position changes; a bending moment diagram is the opposite, one load case plotted over all sections.</p><p>By the Müller-Breslau principle, the influence lines of determinate structures are rigid-body shapes made of straight lines only. For a simple beam the moment influence line at a section is a triangle with peak \\(a(L - a)/L\\). On a cantilever the support reaction and support shear stay 1 wherever the load stands, so their influence lines are rectangles.</p>",
        "formulas": [
         {
          "label": "Peak of the moment ILD at distance a",
          "tex": "\\eta = \\dfrac{a(L - a)}{L}"
         }
        ],
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
        "html": "<p>With concentrated moving loads the moment diagram is straight between loads, so the maximum bending moment always occurs under a wheel load. The absolute maximum is near the centre of span, under the load nearest the resultant, when midspan bisects the distance between them.</p><p>The shear at a support equals its reaction, greatest when the whole train is on the span as close to that support as possible. A UDL longer than the span gives the greatest moment when it covers the entire beam, since all ordinates are positive. For a given section, loads are placed on the influence line to add the largest ordinates.</p>",
        "example": {
         "title": "Worked example: maximum negative shear",
         "html": "<p>Loads 10, 15, 15 and 8 kN at 2 m spacing, section 8 m into a 24 m span, 10 kN at the section:</p>\\[\\begin{aligned} V &amp;= -\\dfrac{80 + 90 + 60 + 16}{24} \\\\ &amp;= -10.25\\ \\text{kN} \\end{aligned}\\]"
        },
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
       }
      ],
      "cautions": [],
      "gaps": [
       "Degree of determinacy and deflection of portal frames from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0405": {
      "code": "ACiE0405",
      "questionCount": 12,
      "format": 2,
      "summary": "<p>This subchapter covers arches and the determinacy of trusses. The past-paper questions test the horizontal thrust of three-hinged arches, where the maximum moment occurs, when an arch carries no moment, normal thrust and radial shear, the member count of simple and compound trusses, static indeterminacy and the effect of temperature on determinate structures.</p>",
      "blocks": [
       {
        "id": "three-hinged-arch-thrust",
        "title": "Horizontal thrust and bending in three-hinged arches",
        "html": "<p>A three-hinged arch is determinate. The vertical reactions are found as for a simple beam, and the horizontal thrust H from the condition of zero moment at the crown hinge: take moments about the crown for the half that carries no load.</p><p>The moment at any section is the simple-beam moment minus H times the height of the arch there, that is H times the gap between the arch axis and the line of thrust. Where the line of thrust coincides with the axis, the arch is in pure compression with zero moment, as a parabolic arch under full UDL. Under a rolling point load, the absolute maximum moment occurs at \\(L/(2\\sqrt{3})\\) either side of the crown.</p>",
        "formulas": [
         {
          "label": "Thrust from the crown hinge",
          "tex": "H = \\dfrac{M_{\\text{crown}}}{h}"
         }
        ],
        "example": {
         "title": "Worked examples: horizontal thrust",
         "html": "<p>80 kN at 6 m on a 40 m span with 8 m rise: \\(V_B = 80 \\times 6/40 = 12\\) kN and \\(8H = 12 \\times 20\\), so H = 30 kN.</p><p>80 kN at L/4 on a 20 m span with 4 m rise: \\(V_B = 20\\) kN and \\(4H = 20 \\times 10\\), so H = 50 kN.</p>"
        },
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
        "html": "<p>At a section where the arch tangent makes an angle \\(\\theta\\) with the horizontal, the horizontal thrust H and the vertical shear V are resolved along and across the rib. The component along the tangent is the <em>normal thrust</em>; the component along the radius, normal to the axis, is the <em>radial shear</em>. The same resolution applies to two- and three-hinged arches.</p>",
        "formulas": [
         {
          "label": "Normal thrust, along the rib",
          "tex": "N = H\\cos\\theta + V\\sin\\theta"
         },
         {
          "label": "Radial shear, across the rib",
          "tex": "S = V\\cos\\theta - H\\sin\\theta"
         }
        ],
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
        "html": "<p>A simple plane truss with j joints needs \\(m = 2j - 3\\) members to be rigid and determinate. Two simple trusses joined into a compound truss need three connecting bars, neither parallel nor concurrent. With r reaction components, the degree of static indeterminacy is \\(D_s = m + r - 2j\\).</p><p>A determinate structure can expand freely, so a uniform temperature change deforms it without causing any stress. Indeterminate structures, restrained against that movement, do develop temperature stresses.</p>",
        "formulas": [
         {
          "label": "Simple and compound trusses",
          "tex": "m = 2j - 3, \\qquad m = m_1 + m_2 + 3"
         },
         {
          "label": "Static indeterminacy",
          "tex": "D_s = m + r - 2j"
         }
        ],
        "example": {
         "title": "Worked examples: member count and indeterminacy",
         "html": "<p>8 joints need \\(2 \\times 8 - 3 = 13\\) members, so a truss with 11 needs 2 more.</p><p>Three members meeting at a top joint, each on its own hinge: m = 3, r = 6, j = 4, so \\(D_s = 3 + 6 - 8 = 1\\).</p>"
        },
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
       "Influence lines for simple structures and the analysis of two-hinged arches from the syllabus are examined only through these arch questions."
      ]
     },
     "ACiE0406": {
      "code": "ACiE0406",
      "questionCount": 29,
      "format": 2,
      "summary": "<p>This subchapter covers statically indeterminate structures. The past-paper questions test what makes a structure indeterminate and the degree of kinematic indeterminacy, force and displacement methods, member stiffness, carry-over and distribution factors in moment distribution, deflections of fixed beams, the horizontal thrust of two-hinged arches, and plastic hinges and collapse loads.</p>",
      "blocks": [
       {
        "id": "indeterminacy-and-methods",
        "title": "Indeterminate structures and the methods of analysis",
        "html": "<p>A structure is statically indeterminate when equilibrium alone cannot give all its reactions and internal forces. A two-hinge arch has four reaction components and only three equations, so it is indeterminate to the first degree; a third hinge at the crown makes the arch determinate. <em>Kinematic</em> indeterminacy counts the unknown joint displacements instead: a propped cantilever, with axial deformation considered, can rotate and slide at the prop, 2 in all.</p><p>Force, or flexibility, methods take redundant forces as unknowns. Displacement methods, such as slope-deflection and the stiffness matrix method, take joint displacements. Hardy Cross's moment distribution method solves the slope-deflection equations by iteration, balancing and carrying over moments.</p>",
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
        "html": "<p>The <em>stiffness</em> of a member is the moment needed at its near end to rotate it through a unit angle. It depends on the far end: 4EI/L when the far end is fixed, 3EI/L when it is hinged, and EI/L when it is a guided roller that can slide but not rotate.</p><p>A moment applied at the near end induces a moment at the far end; the multiplier is the <em>carry-over factor</em>, one half for a fixed far end and zero for a pinned one. At a joint an unbalanced moment is shared among the members in proportion to their stiffness, through distribution factors that add up to 1.</p>",
        "formulas": [
         {
          "label": "Near-end stiffness",
          "tex": "k = \\dfrac{4EI}{L},\\ \\dfrac{3EI}{L},\\ \\dfrac{EI}{L}"
         },
         {
          "label": "Distribution factor",
          "tex": "DF = \\dfrac{k}{\\sum k}"
         }
        ],
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
        "html": "<p>Fixing both ends of a beam sharply reduces its deflection. Under a central point load the central deflection falls to a quarter of the simply supported value; under a uniform load it falls to a fifth.</p>",
        "formulas": [
         {
          "label": "Fixed beam, central point load",
          "tex": "\\delta = \\dfrac{PL^3}{192EI}"
         },
         {
          "label": "Fixed beam, UDL with W = wL",
          "tex": "\\delta = \\dfrac{wL^4}{384EI} = \\dfrac{WL^3}{384EI}"
         }
        ],
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
        "html": "<p>The horizontal thrust H of a two-hinged arch is the redundant. Castigliano's theorem, with no relative movement of the hinges, gives it in terms of the free beam moment M. A temperature rise tries to spread the supports by \\(L\\alpha T\\), which adds to the thrust; rib shortening adds a flexibility term below, reducing it.</p><p>A parabolic arch under a full-span UDL has \\(H = wl^2/8h\\); the line of thrust then follows the axis, so the bending moment is zero. A triangular load is half a UDL plus an antisymmetric part that makes no thrust. For semicircular arches, a crown load W gives \\(H = W/\\pi\\) whatever the radius, and a UDL over half the span gives \\(2wR/3\\pi\\). The reaction locus is a horizontal straight line.</p>",
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
         }
        ],
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
        "html": "<p>Plastic analysis finds the load at which enough plastic hinges form to turn a structure into a mechanism. Each hinge rotates at the plastic moment \\(M_p\\), and the segments between successive hinges are treated as rigid. The collapse load follows from virtual work: external work of the loads equals \\(M_p\\) times the hinge rotations.</p><p>A fixed beam with a central load forms hinges at both ends and at midspan. A propped cantilever under UDL forms one at the fixed end and one about 0.414L from the prop. Along the beam, the yielded length of a hinge depends on the shape factor S; for I-sections it is short.</p>",
        "formulas": [
         {
          "label": "Fixed beam, central load",
          "tex": "W_c = \\dfrac{8M_p}{L}"
         },
         {
          "label": "Propped cantilever, UDL",
          "tex": "x = (\\sqrt{2} - 1)L, \\qquad w_u = \\dfrac{11.66\\, M_p}{L^2}"
         }
        ],
        "example": {
         "title": "Worked example: collapse of a fixed beam",
         "html": "<p>With end rotations \\(\\theta\\) and a centre rotation \\(2\\theta\\), the load moves \\(L\\theta/2\\):</p>\\[\\begin{aligned} W \\dfrac{L\\theta}{2} &amp;= M_p(\\theta + 2\\theta + \\theta) \\\\ W_c &amp;= \\dfrac{8M_p}{L} \\end{aligned}\\]"
        },
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
       "Continuous-beam influence lines and the flexibility method in matrix form from the syllabus are not examined in these papers."
      ]
     }
    });
})();
