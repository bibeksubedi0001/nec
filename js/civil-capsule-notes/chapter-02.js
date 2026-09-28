(function () {
    "use strict";
    window.CIVIL_CAPSULE_NOTE_TOPICS = window.CIVIL_CAPSULE_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_CAPSULE_NOTE_TOPICS, {
      "ACiE0201": {
        "code": "ACiE0201",
        "questionCount": 26,
        "format": 2,
        "summary": "<p>This subchapter covers how soils are described and tested in the laboratory: phase relationships, densities and specific gravity, consistency limits, particle-size grading, USCS classification and permeability tests. The capsule questions test water content and saturation arithmetic, the \\(Se = wG_s\\) identity, core-cutter and density-bottle results, the Atterberg limits, the 75 µm fines boundary, the grading coefficients, the plasticity chart, constant- and falling-head tests, water retained after drainage, and why colour cannot classify a soil.</p>",
        "blocks": [
          {
            "id": "phase-relationships",
            "title": "Phase relationships: water content, degree of saturation and Se = wGs",
            "html": "<p>A soil mass is idealized as three phases: solid grains, pore water and pore air. The voids are everything that is not solid, so the void volume \\(V_v\\) is the water volume plus the air volume.</p><p>Two ratios are easily confused because their denominators differ. <em>Water content</em> divides the mass of water by the mass of dry solids, never by the moist mass. <em>Degree of saturation</em> divides the water volume by the void volume, and the air content of the voids is its complement.</p><p>The identity \\(Se = wG_s\\) links the phase ratios, with \\(S\\) and \\(w\\) entered as decimals. At full saturation it reduces to \\(e = wG_s\\), so the void ratio equals the water content alone only if \\(G_s\\) happened to be 1. Entering a water content of 24% as 24 instead of 0.24 inflates the void ratio a hundredfold.</p>",
            "formulas": [
              {
                "label": "Water content",
                "tex": "w = \\dfrac{M_w}{M_s}",
                "where": "<p>\\(M_w\\) is the mass of water lost on oven drying and \\(M_s\\) the mass of dry solids.</p>"
              },
              {
                "label": "Degree of saturation",
                "tex": "S = \\dfrac{V_w}{V_v}",
                "where": "<p>The air content of the voids is \\(V_a/V_v = 1 - S\\).</p>"
              },
              {
                "label": "Phase identity",
                "tex": "S e = w G_s",
                "where": "<p>\\(e = V_v/V_s\\) is the void ratio and \\(G_s\\) the specific gravity of solids; at \\(S = 1\\) the identity becomes \\(e = wG_s\\).</p>"
              }
            ],
            "example": {
              "title": "Worked examples: drying, air in the voids and saturation checks",
              "html": "<ol><li>Oven drying from 240 g to 192 g removes 48 g of water, so \\(w = 48/192 = 0.25\\), that is 25%. Dividing by the moist 240 g would give 20%.</li><li>Voids of 40 cm<sup>3</sup> containing 10 cm<sup>3</sup> of air hold 30 cm<sup>3</sup> of water, so \\(S = 30/40 = 0.75\\), or 75%. The remaining 25% is the air content.</li><li>With \\(e = 0.81\\), \\(G_s = 2.70\\) and \\(w = 0.30\\): \\(S = 0.30 \\times 2.70/0.81 = 1.00\\), so the soil is 100% saturated.</li><li>A saturated soil with \\(w = 0.24\\) and \\(G_s = 2.75\\) has \\(e = 0.24 \\times 2.75 = 0.66\\).</li></ol>"
            },
            "moreHtml": "<p>The identity follows from the definitions. Since \\(M_w = V_w\\rho_w\\) and \\(M_s = V_s G_s \\rho_w\\), the water density cancels and</p>\\[wG_s = \\dfrac{V_w}{V_s} = \\dfrac{V_w}{V_v} \\cdot \\dfrac{V_v}{V_s} = Se\\]<p>Every term is a ratio of volumes, which is why the water content must enter as a decimal.</p>",
            "points": [
              {
                "html": "Gravimetric water content uses dry solids as the denominator: drying from 240 g to 192 g removes 48 g of water, a water content of 48/192 = 25%.",
                "sources": [
                  {
                    "id": "CAP4-02-00002",
                    "label": "p. 6; topic 2 point 2"
                  }
                ]
              },
              {
                "html": "The ratio of the volume of water present in a given soil mass to the total volume of its voids is known as degree of saturation.",
                "sources": [
                  {
                    "id": "CAP4-02-00004",
                    "label": "p. 6; topic 2 point 4"
                  }
                ]
              },
              {
                "html": "The void ratio of a soil becomes equal to the product of its water content and specific gravity when the soil is fully saturated.",
                "sources": [
                  {
                    "id": "CAP4-02-00020",
                    "label": "p. 6; topic 2 point 17"
                  }
                ]
              },
              {
                "html": "A fully saturated soil with water content 24% and \\(G_s = 2.75\\) has void ratio \\(e = wG_s = 0.66\\), with \\(w\\) entered as 0.24.",
                "sources": [
                  {
                    "id": "CAP4-02-00150",
                    "label": "p. 10; topic 2 point 132"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00002",
                "label": "p. 6; topic 2 point 2"
              },
              {
                "id": "CAP4-02-00004",
                "label": "p. 6; topic 2 point 4"
              },
              {
                "id": "CAP4-02-00020",
                "label": "p. 6; topic 2 point 17"
              },
              {
                "id": "CAP4-02-00150",
                "label": "p. 10; topic 2 point 132"
              }
            ]
          },
          {
            "id": "density-and-specific-gravity",
            "title": "Bulk density, dry density and specific gravity: core cutter and density bottle",
            "html": "<p>Three quantities describe how heavy a soil is, and they are easily mixed up. <em>Bulk density</em> is the moist mass per unit total volume. <em>Dry density</em> counts only the solids in that same volume. The <em>specific gravity of solids</em> compares the grains themselves with water and says nothing about how densely they are packed.</p><p>The <em>core cutter</em> method measures in-situ bulk density. A cylinder of known volume is driven into the ground, dug out, trimmed flush and weighed, and a water-content sample converts the result to dry density. It needs soil that can be cut as a representative core, so gravelly or very hard ground is unsuitable.</p><p>The <em>density bottle</em> gives the specific gravity of the particles by comparing the mass of dry solids with the mass of water they displace at the test temperature. Entrapped air must be removed first, and the result describes the grains, not the bulk density of a porous soil mass.</p>",
            "formulas": [
              {
                "label": "Bulk density",
                "tex": "\\rho = \\dfrac{M}{V}"
              },
              {
                "label": "Dry density",
                "tex": "\\rho_d = \\dfrac{\\rho}{1 + w}"
              },
              {
                "label": "Specific gravity of solids",
                "tex": "G_s = \\dfrac{M_s}{M_{\\text{w,disp}}}",
                "where": "<p>\\(M_{\\text{w,disp}}\\) is the mass of water displaced by the solids, that is the mass of an equal volume of water.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: a core-cutter sample and a density bottle",
              "html": "<ol><li>A 1000 cm<sup>3</sup> cutter holding 1800 g of moist soil gives \\(\\rho = 1800/1000 = 1.80\\ \\text{g/cm}^3\\).</li><li>With \\(w = 0.20\\), \\(\\rho_d = 1.80/1.20 = 1.50\\ \\text{g/cm}^3\\). Quoting 1.80 would report the bulk value, not the dry one.</li><li>A density bottle in which 50 g of dry solids displace 20 g of water gives \\(G_s = 50/20 = 2.50\\).</li></ol>"
            },
            "points": [
              {
                "html": "The core cutter method is used to measure the in-situ density of soil.",
                "sources": [
                  {
                    "id": "CAP4-02-00019",
                    "label": "p. 6; topic 2 point 16"
                  }
                ]
              },
              {
                "html": "The density bottle method is used to measure the specific gravity of soil.",
                "sources": [
                  {
                    "id": "CAP4-02-00024",
                    "label": "p. 7; topic 2 point 21"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00019",
                "label": "p. 6; topic 2 point 16"
              },
              {
                "id": "CAP4-02-00024",
                "label": "p. 7; topic 2 point 21"
              }
            ]
          },
          {
            "id": "consistency-limits",
            "title": "Consistency states, Atterberg limits and the three-phase model",
            "html": "<p>A remoulded fine-grained soil changes its mechanical behaviour as its water content changes. Starting dry and adding water, it passes through four <em>consistency states</em>: solid, semi-solid, plastic and liquid. The water contents at the boundaries are the <em>Atterberg limits</em>:</p><ul><li><em>shrinkage limit</em>, between solid and semi-solid;</li><li><em>plastic limit</em>, between semi-solid and plastic;</li><li><em>liquid limit</em>, between plastic and liquid.</li></ul><p>The plasticity index is the range of water content over which the soil stays plastic.</p><p>The four states describe behaviour, not constituents. An unsaturated soil in the plastic state still has three phases in its phase diagram: solids, water and air. Only a dry or a fully saturated soil reduces to two.</p><p>When a pat dries, its volume falls until the shrinkage limit is reached. Below it, in the standard idealization, further drying causes no further volume reduction. Water still leaves and air takes its place, so constant volume does not mean the pat is already oven dry.</p><p>The plastic limit is found by rolling a thread of soil until it crumbles; the water content at the prescribed crumbling endpoint marks the semi-solid to plastic boundary.</p>",
            "formulas": [
              {
                "label": "Plasticity index",
                "tex": "\\text{PI} = \\text{LL} - \\text{PL}"
              }
            ],
            "moreHtml": "<p>Archived IS 2720 Part 5:1985 clause 7.3 sets the endpoint for a thread that crumbles once it has been rolled down to 3 mm diameter. It accepts crumbling at a diameter above 3 mm when the thread has just been rolled to 3 mm, and the operator must not force failure at exactly that size. Other standards can use other nominal diameters, and no current adoption of this edition is implied.</p>",
            "points": [
              {
                "html": "Soil exists in four states of consistency.",
                "sources": [
                  {
                    "id": "CAP4-02-00015",
                    "label": "p. 6; topic 2 point 13"
                  }
                ]
              },
              {
                "html": "As the water content increases, soil passes through the solid, semi-solid, plastic and liquid states, in that order.",
                "sources": [
                  {
                    "id": "CAP4-02-00016",
                    "label": "p. 6; topic 2 point 13"
                  }
                ]
              },
              {
                "html": "The maximum water content at which a reduction in water content does not cause a decrease in volume of a soil mass is known as the shrinkage limit.",
                "sources": [
                  {
                    "id": "CAP4-02-00008",
                    "label": "p. 6; topic 2 point 7"
                  }
                ]
              },
              {
                "html": "The minimum water content at which the soil just begins to crumble when rolled into threads 3 mm in diameter is known as the plastic limit.",
                "sources": [
                  {
                    "id": "CAP4-02-00170",
                    "label": "p. 10; topic 2 point 150"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00015",
                "label": "p. 6; topic 2 point 13"
              },
              {
                "id": "CAP4-02-00016",
                "label": "p. 6; topic 2 point 13"
              },
              {
                "id": "CAP4-02-00008",
                "label": "p. 6; topic 2 point 7"
              },
              {
                "id": "CAP4-02-00170",
                "label": "p. 10; topic 2 point 150"
              }
            ]
          },
          {
            "id": "sieve-boundary-fines",
            "title": "The 75 micrometre sieve: fines content, size names and soil behaviour",
            "html": "<p>The 75 µm sieve (0.075 mm, No. 200) splits a soil into its coarse fraction and its <em>fines</em>. Fines are the material that passes this sieve, not the material it retains.</p><p>USCS classifies the whole soil by mass fraction, never by a single grain. When more than half of the dry mass passes the sieve the soil is fine-grained; otherwise it is coarse-grained. A sample with 62% passing is therefore fine-grained, and its fines are the passing portion.</p><p>A sieve result measures how much fine material there is, not how it behaves. A sand with 8% passing has a known fines content, but only plasticity testing of those fines shows whether they are silty or clayey. For an intermediate fines content like this, USCS gives a dual symbol that reflects both the grading of the sand and the plasticity of its fines.</p><p>Size names and behavioural symbols are also separate ideas. On an IS-style scale that puts the sand–fines boundary at 0.075 mm, a 0.06 mm particle is silt-sized. That name does not establish a USCS M symbol, which depends on plasticity and organic identification, and other systems place their size boundaries elsewhere.</p>",
            "points": [
              {
                "html": "The sieve size that separates coarse-grained soil from fine-grained soil is 75 microns.",
                "sources": [
                  {
                    "id": "CAP4-02-00011",
                    "label": "p. 6; topic 2 point 9"
                  }
                ]
              },
              {
                "html": "The sieve size typically used to distinguish sand from silt is 75 micrometres.",
                "sources": [
                  {
                    "id": "CAP4-02-00023",
                    "label": "p. 7; topic 2 point 20"
                  }
                ]
              },
              {
                "html": "The maximum size of silt grains is about 0.075 mm.",
                "sources": [
                  {
                    "id": "CAP4-02-00018",
                    "label": "p. 6; topic 2 point 15"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00011",
                "label": "p. 6; topic 2 point 9"
              },
              {
                "id": "CAP4-02-00023",
                "label": "p. 7; topic 2 point 20"
              },
              {
                "id": "CAP4-02-00018",
                "label": "p. 6; topic 2 point 15"
              }
            ]
          },
          {
            "id": "grading-coefficients",
            "title": "Grading coefficients Cu and Cc and the SW or SP decision",
            "html": "<p>A grading curve plots the percentage finer by mass against particle size on a logarithmic scale. \\(D_{10}\\), \\(D_{30}\\) and \\(D_{60}\\) are the sizes below which 10%, 30% and 60% of the mass lies: percentages finer, not percentages retained.</p><p>Two dimensionless ratios summarize the curve. The <em>coefficient of uniformity</em> \\(C_u\\) measures the spread of sizes. The <em>coefficient of curvature</em> \\(C_c\\) checks that intermediate sizes are adequately represented, so that the curve has no marked gap or hump.</p><p>For a clean sand, USCS calls the grading well graded, SW, only when both checks pass together: \\(C_u\\) of at least 6 and \\(C_c\\) from 1 to 3. Failing either gives poorly graded sand, SP. The letters C and M describe the behaviour of fines, so they cannot record a failed grading ratio.</p>",
            "formulas": [
              {
                "label": "Coefficient of uniformity",
                "tex": "C_u = \\dfrac{D_{60}}{D_{10}}"
              },
              {
                "label": "Coefficient of curvature",
                "tex": "C_c = \\dfrac{D_{30}^2}{D_{10}\\, D_{60}}"
              },
              {
                "label": "Well-graded clean sand, SW",
                "tex": "C_u \\ge 6, \\quad 1 \\le C_c \\le 3",
                "where": "<p>Both conditions must hold at once; failing either makes the clean sand SP.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: three grading checks",
              "html": "<ol><li>\\(D_{10} = 0.12\\) mm and \\(D_{60} = 0.84\\) mm give \\(C_u = 0.84/0.12 = 7.0\\). Inverting the ratio gives 0.143, which is not a uniformity coefficient.</li><li>A clean sand with \\(C_u = 7\\) but \\(C_c = 0.6\\) passes the uniformity check and fails the curvature check, so it is SP.</li><li>\\(D_{10} = 0.10\\), \\(D_{30} = 0.40\\) and \\(D_{60} = 0.80\\) mm give \\(C_u = 8\\) and \\[C_c = \\dfrac{0.40^2}{0.10 \\times 0.80} = \\dfrac{0.16}{0.08} = 2\\] Both checks pass, so that sand is SW.</li></ol>"
            },
            "points": [
              {
                "html": "Sizes \\(D_{10} = 0.12\\) mm and \\(D_{60} = 0.84\\) mm give a coefficient of uniformity \\(C_u = D_{60}/D_{10} = 7.0\\), a dimensionless ratio.",
                "sources": [
                  {
                    "id": "CAP4-02-00012",
                    "label": "p. 6; topic 2 point 10"
                  }
                ]
              },
              {
                "html": "The value of the coefficient of uniformity for well-graded sand is greater than 6.",
                "sources": [
                  {
                    "id": "CAP4-02-00013",
                    "label": "p. 6; topic 2 point 11"
                  }
                ]
              },
              {
                "html": "The coefficient of curvature for well-graded soil lies between 1 and 3.",
                "sources": [
                  {
                    "id": "CAP4-02-00014",
                    "label": "p. 6; topic 2 point 12"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00012",
                "label": "p. 6; topic 2 point 10"
              },
              {
                "id": "CAP4-02-00013",
                "label": "p. 6; topic 2 point 11"
              },
              {
                "id": "CAP4-02-00014",
                "label": "p. 6; topic 2 point 12"
              }
            ]
          },
          {
            "id": "plasticity-chart-fine-soils",
            "title": "Fine soils on the plasticity chart: the A-line, L or H, and organic evidence",
            "html": "<p>The USCS plasticity chart plots plasticity index against liquid limit, and two separate readings come from it:</p><ul><li>the <em>A-line</em> separates clay-like behaviour above it, C, from silt-like behaviour below it, M;</li><li>the liquid limit, compared with 50%, separates low plasticity, L, from high plasticity, H.</li></ul><p>A position relative to the A-line therefore says nothing by itself about L or H, and nothing about organic content.</p><p>An organic symbol needs positive evidence of organic origin. USCS organic identification includes the effect of oven drying on the liquid limit, together with the relevant identification procedure. A liquid limit above the L/H boundary, a grading entirely finer than the fines sieve, or a natural water content above the plastic limit cannot stand in for that evidence.</p>",
            "formulas": [
              {
                "label": "A-line of the plasticity chart",
                "tex": "\\text{PI} = 0.73\\,(\\text{LL} - 20)",
                "where": "<p>PI and LL in percent. Fines plotting above the line behave as clay, those below as silt unless organic evidence says otherwise.</p>"
              }
            ],
            "example": {
              "title": "Worked example: an inorganic soil with LL 60% and PI 20%",
              "html": "<ol><li>A-line ordinate at LL = 60%: \\(0.73(60 - 20) = 29.2\\%\\).</li><li>PI = 20% lies below it, so the behaviour is silt-like: M.</li><li>LL = 60% exceeds 50%, so the second letter is H.</li><li>The soil is stated to be inorganic, which rules out OH. The symbol is MH.</li></ol>"
            },
            "points": [
              {
                "html": "The soils which plot below the A-line of the plasticity chart are silts and organic soils of low and high plasticity.",
                "sources": [
                  {
                    "id": "CAP4-02-00005",
                    "label": "p. 6; topic 2 point 5"
                  }
                ]
              },
              {
                "html": "On the plasticity chart, the soil group OH plots below the A-line.",
                "sources": [
                  {
                    "id": "CAP4-02-00006",
                    "label": "p. 6; topic 2 point 5"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00005",
                "label": "p. 6; topic 2 point 5"
              },
              {
                "id": "CAP4-02-00006",
                "label": "p. 6; topic 2 point 5"
              }
            ]
          },
          {
            "id": "sands-with-plastic-fines",
            "title": "Coarse soils with plastic fines: arriving at the SC symbol",
            "html": "<p>A coarse-grained soil is classified in a fixed order:</p><ol><li>confirm that the coarse fraction, gravel plus sand, is more than half the dry mass;</li><li>take the first letter from whichever dominates that fraction, G for gravel or S for sand;</li><li>if fines exceed 12% of the dry mass, take the second letter from fines behaviour rather than grading: fines above the A-line with PI greater than 7% are clayey, C, while silty fines give M.</li></ol><p>Classifying such a soil by its fines alone, for example as CL, would ignore the coarse fraction that makes up most of its mass. The cases here avoid the intermediate fines range and the borderline plasticity band, where USCS uses dual symbols.</p>",
            "example": {
              "title": "Worked example: 70% sand, 5% gravel and 25% fines",
              "html": "<ol><li>Coarse fraction \\(= 70 + 5 = 75\\%\\), more than half and mostly sand: first letter S.</li><li>Fines of 25% exceed 12%, so fines behaviour sets the second letter.</li><li>A-line at LL = 40%: \\(0.73(40 - 20) = 14.6\\%\\). PI = 20% lies above it and exceeds 7%, so the fines are clayey.</li><li>The group symbol is SC, a clayey sand.</li></ol><p>A sand-dominated soil with 20% fines of PI 15% that plot above the A-line reaches SC by the same route.</p>"
            },
            "points": [
              {
                "html": "In soil classification, SC means sand with plastic fines (clayey sand).",
                "sources": [
                  {
                    "id": "CAP4-02-00003",
                    "label": "p. 6; topic 2 point 3"
                  }
                ]
              },
              {
                "html": "According to the Unified Soil Classification System (USCS), the symbol SC represents clayey sand.",
                "sources": [
                  {
                    "id": "CAP4-02-00135",
                    "label": "p. 9; topic 2 point 121"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00003",
                "label": "p. 6; topic 2 point 3"
              },
              {
                "id": "CAP4-02-00135",
                "label": "p. 9; topic 2 point 121"
              }
            ]
          },
          {
            "id": "permeability-tests",
            "title": "Laboratory permeability: constant-head and falling-head tests",
            "html": "<p>Both tests apply Darcy's law to a saturated specimen of length \\(L\\) and area \\(A\\), but they suit different soils.</p><p>The <em>constant-head test</em> holds the head loss \\(h\\) fixed and collects a volume \\(V\\) of water in time \\(t\\). Coarse soils give a conveniently measurable discharge this way, and the flow must be steady, saturated and laminar. The collected volume must be matched to its collection time before substituting.</p><p>A low-permeability specimen passes too little water to collect conveniently at constant head. The <em>falling-head test</em> watches the level drop in a small standpipe of area \\(a\\), which turns a small volume of flow into an observable head change. Integrating Darcy's law between heads \\(h_1\\) and \\(h_2\\) over time \\(t\\) gives the falling-head relation. Full saturation, leakage control and suitable equipment are essential, particularly for very low-permeability clays.</p>",
            "formulas": [
              {
                "label": "Constant-head test",
                "tex": "k = \\dfrac{V L}{A\\, h\\, t}"
              },
              {
                "label": "Falling-head test",
                "tex": "k = \\dfrac{a L}{A t} \\ln\\dfrac{h_1}{h_2}",
                "where": "<p>\\(a\\) is the standpipe area, \\(A\\) and \\(L\\) the specimen area and length, and the head falls from \\(h_1\\) to \\(h_2\\) in time \\(t\\).</p>"
              }
            ],
            "example": {
              "title": "Worked example: a constant-head test on sand",
              "html": "<p>A specimen 10 cm long and 20 cm<sup>2</sup> in area passes 120 cm<sup>3</sup> in 60 s under a 30 cm head loss:</p>\\[\\begin{aligned} k &amp;= \\dfrac{120 \\times 10}{20 \\times 30 \\times 60} \\\\ &amp;= \\dfrac{1200}{36\\,000} = 0.0333\\ \\text{cm/s} \\end{aligned}\\]"
            },
            "moreHtml": "<p>While the standpipe level \\(h\\) falls, the inflow equals the Darcy discharge through the specimen:</p>\\[-a\\,\\dfrac{dh}{dt} = \\dfrac{k A h}{L}\\]<p>Separating variables and integrating from \\(h_1\\) to \\(h_2\\) over time \\(t\\) gives</p>\\[\\ln\\dfrac{h_1}{h_2} = \\dfrac{k A t}{a L}\\]<p>which rearranges to the falling-head relation.</p>",
            "points": [
              {
                "html": "The falling head permeability test can be used for less permeable soil.",
                "sources": [
                  {
                    "id": "CAP4-02-00029",
                    "label": "p. 7; topic 2 point 26"
                  }
                ]
              },
              {
                "html": "The constant head permeability test can be used for coarse-grained soil.",
                "sources": [
                  {
                    "id": "CAP4-02-00030",
                    "label": "p. 7; topic 2 point 27"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00029",
                "label": "p. 7; topic 2 point 26"
              },
              {
                "id": "CAP4-02-00030",
                "label": "p. 7; topic 2 point 27"
              }
            ]
          },
          {
            "id": "retained-water",
            "title": "Water held after gravity drainage: adsorbed films and capillary water",
            "html": "<p>Once free gravitational water has drained away, a soil still holds water by two different mechanisms:</p><ul><li><em>adsorbed film water</em> clings to particle surfaces through molecular attraction, and the older term <em>pellicular water</em> refers to these surface-associated films;</li><li><em>capillary water</em> is held in small pores by surface tension acting across curved air–water menisci.</li></ul><p>Both resist gravity drainage, but they are different mechanisms, so describing all retained water as adsorbed film water is inaccurate. Retained water need not be chemically bound in minerals, gravity drainage does not empty every small pore, and no artesian pressure is needed to hold it in place.</p><p>Terminology varies between texts, so describing the physical retention mechanism is more useful than the label alone. A thin film clinging to grains points to surface attraction; water filling small pores against gravity points to capillarity as well.</p>",
            "points": [
              {
                "html": "The quantum of water in the soil pores which cannot be extracted by gravity drainage is called pellicular water.",
                "sources": [
                  {
                    "id": "CAP4-02-00109",
                    "label": "p. 9; topic 2 point 99"
                  }
                ]
              },
              {
                "html": "Pellicular water is the water in soil pores which cannot be extracted by gravity drainage.",
                "sources": [
                  {
                    "id": "CAP4-02-00110",
                    "label": "p. 9; topic 2 point 99"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00109",
                "label": "p. 9; topic 2 point 99"
              },
              {
                "id": "CAP4-02-00110",
                "label": "p. 9; topic 2 point 99"
              }
            ]
          },
          {
            "id": "dark-organic-soils",
            "title": "Dark, organic and expansive soils: why colour is not a classification",
            "html": "<p>The soils of the Kathmandu Valley are typically black cotton and organic soils, laid down as lacustrine and alluvial deposits of the old valley lake. Their identification rests on site sampling, index tests and organic-content tests rather than on colour alone.</p><p>Organic soils can be highly compressible and can keep creeping after primary consolidation, so fill placed over them may cause large compression followed by continuing secondary settlement. Black cotton soils swell and shrink strongly as their moisture content changes.</p>",
            "points": [
              {
                "html": "The soils of Kathmandu valley are black cotton and organic soils.",
                "sources": [
                  {
                    "id": "CAP4-02-00009",
                    "label": "p. 6; topic 2 point 8"
                  }
                ]
              },
              {
                "html": "Black cotton and organic soils are typical of Kathmandu valley.",
                "sources": [
                  {
                    "id": "CAP4-02-00010",
                    "label": "p. 6; topic 2 point 8"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00009",
                "label": "p. 6; topic 2 point 8"
              },
              {
                "id": "CAP4-02-00010",
                "label": "p. 6; topic 2 point 8"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Water content",
            "tex": "w = \\dfrac{M_w}{M_s}",
            "note": "Dry solids in the denominator."
          },
          {
            "label": "Degree of saturation",
            "tex": "S = \\dfrac{V_w}{V_v}"
          },
          {
            "label": "Phase identity",
            "tex": "S e = w G_s",
            "note": "At full saturation the void ratio equals wG<sub>s</sub>."
          },
          {
            "label": "Dry density",
            "tex": "\\rho_d = \\dfrac{\\rho}{1 + w}"
          },
          {
            "label": "Specific gravity of solids",
            "tex": "G_s = \\dfrac{M_s}{M_{\\text{w,disp}}}"
          },
          {
            "label": "Plasticity index",
            "tex": "\\text{PI} = \\text{LL} - \\text{PL}"
          },
          {
            "label": "A-line",
            "tex": "\\text{PI} = 0.73\\,(\\text{LL} - 20)"
          },
          {
            "label": "Coefficient of uniformity",
            "tex": "C_u = \\dfrac{D_{60}}{D_{10}}"
          },
          {
            "label": "Coefficient of curvature",
            "tex": "C_c = \\dfrac{D_{30}^2}{D_{10}\\, D_{60}}",
            "note": "Clean sand is SW only with Cu at least 6 and Cc from 1 to 3."
          },
          {
            "label": "Constant-head permeability",
            "tex": "k = \\dfrac{V L}{A\\, h\\, t}"
          },
          {
            "label": "Falling-head permeability",
            "tex": "k = \\dfrac{a L}{A t} \\ln\\dfrac{h_1}{h_2}"
          }
        ],
        "cautions": [],
        "gaps": [
          "Descriptive, textural and MIT classification systems and the presentation of boring logs are named in the syllabus but are not examined by these capsule points.",
          "The liquid-limit test procedure, flow and toughness indices, liquidity index and hydrometer analysis are not covered.",
          "Numerical limits for the clean-sand fines range, the borderline plasticity band and the organic liquid-limit ratio are referred to without values, so none are stated here.",
          "Strength and compressibility tests listed under this syllabus topic are treated in the shear-strength and settlement topics instead."
        ]
      },
      "ACiE0202": {
        "code": "ACiE0202",
        "questionCount": 26,
        "format": 2,
        "summary": "<p>This subchapter covers the stresses carried by soil and its pore water, the flow of water through soil, compressibility under load, and compaction. The capsule questions test geostatic, pore and effective stress, hydraulic gradient and Darcy's law, flow-net geometry and discharge, the critical gradient for quick conditions, the coefficients \\(a_v\\) and \\(m_v\\), laboratory compaction effort, relative compaction, and roller selection and field control.</p>",
        "blocks": [
          {
            "id": "effective-stress",
            "title": "Total stress, pore-water pressure and effective stress",
            "html": "<p><em>Geostatic stress</em> is the vertical total stress produced by the self-weight of the soil above a point. In a level profile it is the sum of unit weight times thickness over the overlying layers. It is a total stress: the groundwater profile is still needed before effective stress can be found.</p><p><em>Pore-water pressure</em> \\(u\\) is the pressure in the water phase. Under hydrostatic conditions it equals the unit weight of water times the depth below the water surface. <em>Neutral stress</em> is an older name for the same quantity: it acts normally in all directions and by itself provides no shear resistance.</p><p><em>Effective stress</em> is the part of the total normal stress carried through grain contacts, found by subtracting the pore pressure. It governs strength and compressibility.</p><p>Ponding more water on an already saturated, level ground surface raises total stress and pore pressure by the same amount, so effective stress at a fixed depth does not change, provided there is no seepage or other load change. A water table rising through previously unsaturated soil is a different problem.</p>",
            "formulas": [
              {
                "label": "Geostatic total stress",
                "tex": "\\sigma_v = \\sum \\gamma_i\\, h_i",
                "where": "<p>\\(\\gamma_i\\) is the total unit weight and \\(h_i\\) the thickness of each overlying layer.</p>"
              },
              {
                "label": "Hydrostatic pore pressure",
                "tex": "u = \\gamma_w\\, h_w",
                "where": "<p>\\(h_w\\) is the depth below the water surface.</p>"
              },
              {
                "label": "Effective stress",
                "tex": "\\sigma' = \\sigma - u"
              }
            ],
            "example": {
              "title": "Worked examples: a layered profile, pore pressure and ponding",
              "html": "<ol><li>2 m at 18 kN/m<sup>3</sup> over 3 m at 20 kN/m<sup>3</sup>: \\(\\sigma_v = 18(2) + 20(3) = 96\\) kPa at 5 m depth.</li><li>A point 5 m below the water surface, with \\(\\gamma_w = 10\\) kN/m<sup>3</sup>: \\(u = 10 \\times 5 = 50\\) kPa.</li><li>Total stress 150 kPa with pore pressure 60 kPa: neutral stress 60 kPa and \\(\\sigma' = 150 - 60 = 90\\) kPa.</li><li>Ponding 2 m more water adds \\(10 \\times 2 = 20\\) kPa to both \\(\\sigma\\) and \\(u\\), so \\(\\sigma'\\) is unchanged.</li></ol>"
            },
            "points": [
              {
                "html": "Stresses within a soil mass due to its own weight are known as geostatic stresses.",
                "sources": [
                  {
                    "id": "CAP4-02-00056",
                    "label": "p. 7; topic 2 point 52"
                  }
                ]
              },
              {
                "html": "The pressure exerted by the fluid in the pores on the surrounding soil mass is called pore pressure.",
                "sources": [
                  {
                    "id": "CAP4-02-00055",
                    "label": "p. 7; topic 2 point 51"
                  }
                ]
              },
              {
                "html": "The neutral stress in a soil mass is the stress taken up by the pore water.",
                "sources": [
                  {
                    "id": "CAP4-02-00072",
                    "label": "p. 8; topic 2 point 66"
                  }
                ]
              },
              {
                "html": "If the water table rises above the ground level, the effective stress at a point in the soil remains constant.",
                "sources": [
                  {
                    "id": "CAP4-02-00045",
                    "label": "p. 7; topic 2 point 41"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00056",
                "label": "p. 7; topic 2 point 52"
              },
              {
                "id": "CAP4-02-00055",
                "label": "p. 7; topic 2 point 51"
              },
              {
                "id": "CAP4-02-00072",
                "label": "p. 8; topic 2 point 66"
              },
              {
                "id": "CAP4-02-00045",
                "label": "p. 7; topic 2 point 41"
              }
            ]
          },
          {
            "id": "darcy-law",
            "title": "Hydraulic gradient, Darcy's law and the limits of linear flow",
            "html": "<p>Water flows through soil from higher to lower <em>total head</em>, the sum of elevation head and pressure head. The average <em>hydraulic gradient</em> along a path is the total head lost divided by the length of that path. Using an absolute head, or the vertical soil thickness in place of the actual path length, gives a wrong gradient.</p><p><em>Darcy's law</em> makes the discharge proportional to the gradient and to the gross cross-sectional area. The product \\(ki\\) is the discharge velocity over the gross area; the mean velocity of water in the pores is higher, because only the effective flow porosity carries the flow.</p><p>The law assumes a linear, laminar flow regime. In unsaturated flow the conductivity also varies with water content, so a generalized treatment needs further constitutive information.</p>",
            "formulas": [
              {
                "label": "Hydraulic gradient",
                "tex": "i = \\dfrac{\\Delta h}{L}",
                "where": "<p>\\(\\Delta h\\) is the total-head loss and \\(L\\) the length of the flow path.</p>"
              },
              {
                "label": "Darcy's law",
                "tex": "q = k\\, i\\, A"
              },
              {
                "label": "Discharge and seepage velocity",
                "tex": "v = k\\,i, \\qquad v_s = \\dfrac{v}{n_e}",
                "where": "<p>\\(n_e\\) is the effective flow porosity.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: gradient and discharge",
              "html": "<p>Total head falling from 12 m to 8 m over a 20 m path gives \\(i = (12 - 8)/20 = 0.20\\).</p><p>With \\(k = 0.0003\\) m/s, \\(i = 0.4\\) and a gross area of 2 m<sup>2</sup>:</p>\\[\\begin{aligned} q &amp;= k i A = 0.0003 \\times 0.4 \\times 2 \\\\ &amp;= 0.00024\\ \\text{m}^3/\\text{s} \\end{aligned}\\]"
            },
            "points": [
              {
                "html": "Total head dropping from 12 m to 8 m along a 20 m seepage path gives an average hydraulic gradient of 4/20 = 0.20.",
                "sources": [
                  {
                    "id": "CAP4-02-00168",
                    "label": "p. 10; topic 2 point 148"
                  }
                ]
              },
              {
                "html": "Darcy flow with \\(k = 0.0003\\) m/s, \\(i = 0.4\\) and gross area 2 m<sup>2</sup> discharges \\(q = kiA = 0.00024\\) m<sup>3</sup>/s.",
                "sources": [
                  {
                    "id": "CAP4-02-00143",
                    "label": "p. 10; topic 2 point 127"
                  }
                ]
              },
              {
                "html": "Darcy's law is valid for fully saturated soil and steady flow.",
                "sources": [
                  {
                    "id": "CAP4-02-00142",
                    "label": "p. 10; topic 2 point 127"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00168",
                "label": "p. 10; topic 2 point 148"
              },
              {
                "id": "CAP4-02-00143",
                "label": "p. 10; topic 2 point 127"
              },
              {
                "id": "CAP4-02-00142",
                "label": "p. 10; topic 2 point 127"
              }
            ]
          },
          {
            "id": "flow-nets",
            "title": "Flow nets: flow lines, equipotentials, channels and seepage discharge",
            "html": "<p>A flow net pictures two-dimensional steady seepage with two families of curves:</p><ul><li><em>flow lines</em> trace the paths of water particles, and the strip between two adjacent flow lines is a <em>flow channel</em>, across whose sides no water passes in the ideal net;</li><li><em>equipotential lines</em> join points of equal total head, and the strip between two adjacent equipotentials is one <em>potential drop</em>.</li></ul><p>In homogeneous isotropic soil the two families cross at right angles in the physical plane. The head gradient is normal to an equipotential, and isotropic conductivity makes the flow parallel to that gradient. In anisotropic soil the orthogonality holds only after a suitable coordinate transformation.</p><p>With square elements every channel carries the same discharge, and each of the \\(N_d\\) drops dissipates an equal share of the total head loss \\(H\\). Adding the \\(N_f\\) channels in parallel gives the flow-net discharge per unit width.</p>",
            "formulas": [
              {
                "label": "Flow-net discharge per unit width",
                "tex": "q = k H \\dfrac{N_f}{N_d}",
                "where": "<p>\\(N_f\\) is the number of flow channels, \\(N_d\\) the number of potential drops and \\(H\\) the total head loss; \\(q\\) is in m<sup>3</sup>/s per metre width.</p>"
              }
            ],
            "example": {
              "title": "Worked example: 3 flow channels and 12 potential drops",
              "html": "<p>With \\(k = 0.0002\\) m/s and a 6 m head loss,</p>\\[\\begin{aligned} q &amp;= 0.0002 \\times 6 \\times \\dfrac{3}{12} \\\\ &amp;= 0.0003\\ \\text{m}^3/\\text{s per metre} \\end{aligned}\\]<p>Inverting the ratio to 12/3 would overstate the flow sixteenfold, at 0.0048.</p>"
            },
            "moreHtml": "<p>For one square element of side \\(b\\) in a channel, Darcy's law with a head drop \\(\\Delta h = H/N_d\\) gives</p>\\[\\Delta q = k\\, \\dfrac{\\Delta h}{b}\\, (b \\times 1) = k\\,\\Delta h\\]<p>Every channel therefore carries \\(kH/N_d\\), and \\(N_f\\) channels in parallel carry \\(N_f\\) times as much. The result is a discharge per metre run, in m<sup>2</sup>/s, equivalently m<sup>3</sup>/s per metre width.</p>",
            "points": [
              {
                "html": "The portion between two successive flow lines in a flow net is known as a flow channel.",
                "sources": [
                  {
                    "id": "CAP4-03-00076",
                    "label": "p. 12; topic 3 point 74"
                  }
                ]
              },
              {
                "html": "The direction of seepage water is perpendicular to the equipotential lines.",
                "sources": [
                  {
                    "id": "CAP4-02-00037",
                    "label": "p. 7; topic 2 point 34"
                  }
                ]
              },
              {
                "html": "Three flow channels, 12 potential drops, \\(k = 0.0002\\) m/s and a 6 m head loss give \\(q = kH N_f/N_d = 0.0003\\) m<sup>3</sup>/s per metre width.",
                "sources": [
                  {
                    "id": "CAP4-02-00026",
                    "label": "p. 7; topic 2 point 23"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00076",
                "label": "p. 12; topic 3 point 74"
              },
              {
                "id": "CAP4-02-00037",
                "label": "p. 7; topic 2 point 34"
              },
              {
                "id": "CAP4-02-00026",
                "label": "p. 7; topic 2 point 23"
              }
            ]
          },
          {
            "id": "critical-gradient",
            "title": "Upward seepage, the critical hydraulic gradient and the quick condition",
            "html": "<p>Seepage drags on the soil skeleton in the direction of flow, with a seepage force of \\(i\\gamma_w\\) per unit volume. Upward flow therefore works against the submerged weight \\(\\gamma'\\), while downward flow adds to it and increases effective stress.</p><p>In an unconfined, saturated, cohesionless column the vertical effective stress falls to zero when the upward seepage force balances the submerged weight. Grain contacts then carry no load and the soil boils: the <em>quick condition</em>. Total stress and pore pressure need not be zero at that point.</p><p>Equating the two forces gives the <em>critical hydraulic gradient</em>. Because \\(G_s\\) is dimensionless, the numerator subtracts 1, never the numerical unit weight of water. At fixed \\(G_s\\) a larger void ratio lowers the submerged weight per unit volume and hence the critical gradient, so a looser soil turns quick at a smaller upward gradient. Permeability controls how much water flows and how fast conditions develop, but it does not enter this ideal static threshold.</p>",
            "formulas": [
              {
                "label": "Critical hydraulic gradient",
                "tex": "i_c = \\dfrac{\\gamma'}{\\gamma_w} = \\dfrac{G_s - 1}{1 + e}"
              },
              {
                "label": "Submerged unit weight",
                "tex": "\\gamma' = \\gamma_{\\text{sat}} - \\gamma_w = \\dfrac{(G_s - 1)\\,\\gamma_w}{1 + e}"
              }
            ],
            "example": {
              "title": "Worked example: Gs = 2.68 and e = 0.68",
              "html": "\\[i_c = \\dfrac{2.68 - 1}{1 + 0.68} = \\dfrac{1.68}{1.68} = 1.00\\]<p>Writing the numerator as 2.68 − 10 would be dimensionally meaningless, because \\(G_s\\) is a pure number.</p>"
            },
            "moreHtml": "<p>The saturated unit weight is</p>\\[\\gamma_{\\text{sat}} = \\dfrac{(G_s + e)\\,\\gamma_w}{1 + e}\\]<p>Subtracting \\(\\gamma_w\\) gives the submerged unit weight in the card above, and dividing by \\(\\gamma_w\\) gives the critical gradient. The result neglects surcharge, cohesion and side confinement, which is why it describes the ideal unconfined case.</p>",
            "points": [
              {
                "html": "The critical hydraulic gradient is formed when the seepage is upward and the effective stress becomes zero.",
                "sources": [
                  {
                    "id": "CAP4-02-00033",
                    "label": "p. 7; topic 2 point 30"
                  }
                ]
              },
              {
                "html": "The void ratio of a soil is 0.68 and its specific gravity is 2.68. The critical gradient for the quick sand condition is 1.00.",
                "sources": [
                  {
                    "id": "CAP4-02-00049",
                    "label": "p. 7; topic 2 point 45"
                  }
                ]
              },
              {
                "html": "The critical gradient of seepage in a soil medium is \\(\\dfrac{G - 1}{1 + e}\\).",
                "sources": [
                  {
                    "id": "CAP4-02-00063",
                    "label": "p. 8; topic 2 point 58"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00033",
                "label": "p. 7; topic 2 point 30"
              },
              {
                "id": "CAP4-02-00049",
                "label": "p. 7; topic 2 point 45"
              },
              {
                "id": "CAP4-02-00063",
                "label": "p. 8; topic 2 point 58"
              }
            ]
          },
          {
            "id": "compressibility-coefficients",
            "title": "Compressibility under load: coefficient of compressibility and of volume compressibility",
            "html": "<p>When a saturated soil consolidates in an oedometer, each load increment reduces the void ratio as pore water drains and the effective stress rises. The <em>coefficient of compressibility</em> is the ratio of strain to stress over the increment.</p><p>Written with the void ratio, \\(a_v\\) is the decrease in void ratio per unit increase in effective stress; dividing it by \\(1 + e_0\\) converts it into volumetric strain per unit stress, \\(m_v\\). Both are secant values for the stress range of the increment, so a figure quoted without its stress range is incomplete.</p>",
            "formulas": [
              {
                "label": "Coefficient of compressibility",
                "tex": "a_v = \\dfrac{e_0 - e_1}{\\Delta \\sigma'}"
              },
              {
                "label": "Coefficient of volume compressibility",
                "tex": "m_v = \\dfrac{a_v}{1 + e_0}",
                "where": "<p>\\(e_0\\) is the void ratio at the start of the increment.</p>"
              }
            ],
            "example": {
              "title": "Worked example: void ratio 0.80 to 0.76 over 100 kPa",
              "html": "\\[a_v = \\dfrac{0.80 - 0.76}{100} = 0.00040\\ \\text{kPa}^{-1}\\]\\[m_v = \\dfrac{0.00040}{1 + 0.80} = 0.000222\\ \\text{kPa}^{-1}\\]<p>The void-ratio form gives \\(a_v\\), and dividing by \\(1 + e_0\\) gives the strain form \\(m_v\\).</p>"
            },
            "points": [
              {
                "html": "The coefficient of compressibility of soil is the ratio of strain to stress.",
                "sources": [
                  {
                    "id": "CAP4-02-00032",
                    "label": "p. 7; topic 2 point 29"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00032",
                "label": "p. 7; topic 2 point 29"
              }
            ]
          },
          {
            "id": "compaction-process",
            "title": "What compaction is: mechanical densification that expels air",
            "html": "<p><em>Compaction</em> is the densification of soil by mechanical manipulation: rolling, tamping or vibration suited to the soil. A specification that asks for each lift to be densified before the next is placed calls for that mechanical work at a controlled moisture content.</p><p>When moist unsaturated fill is rolled quickly at nearly unchanged water content, the particles are pushed into a closer arrangement and the volume of air-filled voids falls. The solid grains are not compressed, the pore water is not drained away, and the total void volume decreases rather than increases.</p><p><em>Consolidation</em> is a separate process. A saturated soil under sustained load loses volume only as pore water drains out, which takes time. Waiting for a fill to settle under its own weight is therefore no substitute for compaction, and adding water without mechanical effort does not densify it either.</p>",
            "formulas": [
              {
                "label": "Dry density from the phase relations",
                "tex": "\\rho_d = \\dfrac{G_s\\, \\rho_w}{1 + e}",
                "where": "<p>At a fixed water content, expelling air lowers \\(e\\) and so raises the dry density.</p>"
              }
            ],
            "points": [
              {
                "html": "Compaction is a process in which the change in volume of soil is due to the removal of air.",
                "sources": [
                  {
                    "id": "CAP4-02-00038",
                    "label": "p. 7; topic 2 point 35"
                  }
                ]
              },
              {
                "html": "The densification of a soil by means of mechanical manipulation is called compaction.",
                "sources": [
                  {
                    "id": "CAP4-02-00050",
                    "label": "p. 7; topic 2 point 46"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00038",
                "label": "p. 7; topic 2 point 35"
              },
              {
                "id": "CAP4-02-00050",
                "label": "p. 7; topic 2 point 46"
              }
            ]
          },
          {
            "id": "compaction-effort",
            "title": "Laboratory compaction effort: rammer, energy per mould and the shifted curve",
            "html": "<p>A laboratory compaction test fixes the energy delivered to each mould. That energy is proportional to rammer mass, drop height, blows per layer and number of layers together, so comparing rammer masses alone misses the drop and the layer count.</p><p>The light-compaction method of archived IS 2720 Part 7:1980 uses a nominal 2.6 kg rammer falling 310 mm. Other protocols use other masses: the IS heavy-compaction rammer is 4.9 kg and the ASTM standard-effort rammer is about 2.5 kg.</p><p>Greater effort on the same soil generally moves the peak of the dry-density versus water-content curve upward and to the left: a higher maximum dry density at a lower optimum moisture content. That is a trend for one soil, not a fixed numerical change, and no field roller is guaranteed to reproduce either laboratory curve.</p>",
            "formulas": [
              {
                "label": "Compactive energy per unit volume",
                "tex": "E = \\dfrac{m g h\\, N_b\\, N_\\ell}{V_m}",
                "where": "<p>\\(m\\) is the rammer mass, \\(h\\) the drop, \\(N_b\\) the blows per layer, \\(N_\\ell\\) the number of layers and \\(V_m\\) the mould volume.</p>"
              }
            ],
            "example": {
              "title": "Worked example: comparing two rammer protocols",
              "html": "<p>With the same mould volume and blows per layer, the common factors cancel and only mass, drop and layers remain:</p>\\[\\begin{aligned} \\dfrac{E_2}{E_1} &amp;= \\dfrac{4.9 \\times 0.45 \\times 5}{2.6 \\times 0.31 \\times 3} \\\\ &amp;= \\dfrac{11.025}{2.418} = 4.56 \\end{aligned}\\]<p>Comparing the rammer masses alone would suggest a ratio of only 1.88.</p>"
            },
            "points": [
              {
                "html": "In light compaction, the weight of the rammer recommended for the standard Proctor test is 2.6 kg.",
                "sources": [
                  {
                    "id": "CAP4-02-00025",
                    "label": "p. 7; topic 2 point 22"
                  }
                ]
              },
              {
                "html": "Compared with the standard Proctor test, the modified Proctor test on the same soil gives a lower optimum moisture content.",
                "sources": [
                  {
                    "id": "CAP4-02-00140",
                    "label": "p. 9; topic 2 point 125"
                  }
                ]
              },
              {
                "html": "For the same soil, the effect of the modified Proctor test compared with the standard Proctor test is to increase the maximum dry density and decrease the OMC.",
                "sources": [
                  {
                    "id": "CAP4-02-00139",
                    "label": "p. 9; topic 2 point 125"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00025",
                "label": "p. 7; topic 2 point 22"
              },
              {
                "id": "CAP4-02-00140",
                "label": "p. 9; topic 2 point 125"
              },
              {
                "id": "CAP4-02-00139",
                "label": "p. 9; topic 2 point 125"
              }
            ]
          },
          {
            "id": "relative-compaction",
            "title": "Relative compaction and its laboratory reference maximum",
            "html": "<p><em>Relative compaction</em> expresses the field dry unit weight as a percentage of a specified laboratory maximum dry unit weight for the same soil and compaction method. Inverting the ratio, or quoting the shortfall below 100%, are common slips.</p><p>Each soil has its own reference curve, so equal field densities do not imply equal relative compactions. The compactive effort behind each reference maximum must also be stated, because a different effort gives a different peak.</p><p>Relative compaction is not <em>relative density</em>. Relative density compares the in-situ void ratio of a granular soil with its maximum and minimum void ratios, whereas relative compaction compares dry unit weight with the peak of a compaction test.</p>",
            "formulas": [
              {
                "label": "Relative compaction",
                "tex": "RC = \\dfrac{\\gamma_{d,\\text{field}}}{\\gamma_{d,\\text{max}}} \\times 100\\%"
              },
              {
                "label": "Relative density, for contrast",
                "tex": "D_r = \\dfrac{e_{\\text{max}} - e}{e_{\\text{max}} - e_{\\text{min}}}"
              }
            ],
            "example": {
              "title": "Worked examples: one fill and two different soils",
              "html": "<ol><li>Field 18.0 kN/m<sup>3</sup> against a laboratory maximum of 19.2 kN/m<sup>3</sup>: \\(18.0/19.2 = 0.9375\\), a relative compaction of 93.75%. The inverted ratio, 106.67%, and the shortfall, 6.25%, are not relative compaction.</li><li>Two fills both at 18 kN/m<sup>3</sup> with maxima of 20 and 19 kN/m<sup>3</sup>: \\(18/20 = 90\\%\\) and \\(18/19 = 94.74\\%\\).</li></ol>"
            },
            "points": [
              {
                "html": "A field dry unit weight of 18.0 kN/m<sup>3</sup> against a specified maximum of 19.2 kN/m<sup>3</sup> is a relative compaction of 93.75%.",
                "sources": [
                  {
                    "id": "CAP4-02-00027",
                    "label": "p. 7; topic 2 point 24"
                  }
                ]
              },
              {
                "html": "Relative compaction depends upon the type of soil.",
                "sources": [
                  {
                    "id": "CAP4-02-00141",
                    "label": "p. 10; topic 2 point 126"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00027",
                "label": "p. 7; topic 2 point 24"
              },
              {
                "id": "CAP4-02-00141",
                "label": "p. 10; topic 2 point 126"
              }
            ]
          },
          {
            "id": "roller-selection",
            "title": "Matching roller action to soil: kneading for clay, vibration for granular fill",
            "html": "<p>Rollers differ in how they deliver compactive effort:</p><ul><li><em>sheepsfoot and padfoot rollers</em> concentrate pressure on projecting feet and knead the soil, which suits cohesive fill placed in controlled thin lifts;</li><li><em>vibratory smooth-drum rollers</em> promote particle rearrangement and denser packing in suitable clean granular soils, where kneading achieves little.</li></ul><p>Static finishing with a very light roller, or spraying water without mechanical energy, supplies neither kind of effort.</p><p>The roller type is only a first trial. Moisture conditioning and lift thickness must suit the material, and for vibratory plant so must frequency and amplitude. A trial section then checks the dry density actually achieved, because the name of the roller does not establish it.</p>",
            "points": [
              {
                "html": "The sheep foot roller is used for compacting clayey soils.",
                "sources": [
                  {
                    "id": "CAP4-02-00028",
                    "label": "p. 7; topic 2 point 25"
                  }
                ]
              },
              {
                "html": "For effective compaction of coarse-grained soil, the roller that should be selected is the vibratory roller.",
                "sources": [
                  {
                    "id": "CAP4-02-00080",
                    "label": "p. 8; topic 2 point 74"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00028",
                "label": "p. 7; topic 2 point 25"
              },
              {
                "id": "CAP4-02-00080",
                "label": "p. 8; topic 2 point 74"
              }
            ]
          },
          {
            "id": "field-compaction-control",
            "title": "Field compaction control: passes, roller changes and lift thickness",
            "html": "<p>Field compaction depends on roller weight, travel speed and number of passes, together with soil moisture and lift thickness. A <em>compaction trial</em> at fixed moisture and lift thickness measures dry density after each successive pass. Gains usually diminish, and a plateau shows that further passes add little density under those conditions; overrolling wastes effort and can damage the fill.</p><p>The calibrated combination belongs to the trial conditions. If a heavier roller replaces the approved one and travels twice as fast with the same pass count, both the stress applied and the compactive action change. Extra weight does not automatically make up for faster travel, so a new trial and field dry-density checks are needed before equivalence is accepted.</p><p>A figure such as 150 mm can be a legitimate project requirement, but the effective thickness depends on the soil, its moisture, the equipment and the density required through the full depth. A specification must say whether it means loose or compacted thickness, and acceptance rests on full-depth density, not a surface reading or the absence of roller marks.</p>",
            "points": [
              {
                "html": "Compaction by rolling depends on the number of repetitions, weight of roller and speed of roller.",
                "sources": [
                  {
                    "id": "CAP4-02-00039",
                    "label": "p. 7; topic 2 point 36"
                  }
                ]
              },
              {
                "html": "Besides the number of repetitions and the speed of the roller, compaction depends on the weight of the roller.",
                "sources": [
                  {
                    "id": "CAP4-02-00040",
                    "label": "p. 7; topic 2 point 36"
                  }
                ]
              },
              {
                "html": "In compaction, the thickness of each layer of soil should be 150 mm.",
                "sources": [
                  {
                    "id": "CAP4-02-00084",
                    "label": "p. 8; topic 2 point 78"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00039",
                "label": "p. 7; topic 2 point 36"
              },
              {
                "id": "CAP4-02-00040",
                "label": "p. 7; topic 2 point 36"
              },
              {
                "id": "CAP4-02-00084",
                "label": "p. 8; topic 2 point 78"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Geostatic total stress",
            "tex": "\\sigma_v = \\sum \\gamma_i\\, h_i"
          },
          {
            "label": "Hydrostatic pore pressure",
            "tex": "u = \\gamma_w\\, h_w"
          },
          {
            "label": "Effective stress",
            "tex": "\\sigma' = \\sigma - u"
          },
          {
            "label": "Hydraulic gradient",
            "tex": "i = \\dfrac{\\Delta h}{L}"
          },
          {
            "label": "Darcy's law",
            "tex": "q = k\\, i\\, A",
            "note": "The product ki is the discharge velocity over the gross area."
          },
          {
            "label": "Flow-net discharge per unit width",
            "tex": "q = k H \\dfrac{N_f}{N_d}"
          },
          {
            "label": "Critical hydraulic gradient",
            "tex": "i_c = \\dfrac{G_s - 1}{1 + e}"
          },
          {
            "label": "Coefficient of compressibility",
            "tex": "a_v = \\dfrac{e_0 - e_1}{\\Delta \\sigma'}"
          },
          {
            "label": "Coefficient of volume compressibility",
            "tex": "m_v = \\dfrac{a_v}{1 + e_0}"
          },
          {
            "label": "Relative compaction",
            "tex": "RC = \\dfrac{\\gamma_{d,\\text{field}}}{\\gamma_{d,\\text{max}}} \\times 100\\%"
          },
          {
            "label": "Compactive energy per unit volume",
            "tex": "E = \\dfrac{m g h\\, N_b\\, N_\\ell}{V_m}"
          }
        ],
        "cautions": [],
        "gaps": [
          "Capillary rise, capillary tension and soil suction are named in the syllabus but are not examined by these capsule points.",
          "Flow-net construction rules, uplift pressure beneath structures and exit-gradient safety are not covered.",
          "Compression index, swelling index and the void ratio versus log effective stress curve are not quantified here; only av and mv are computed.",
          "Field density methods and the influence of soil type on the shape of the compaction curve are not detailed."
        ]
      },
      "ACiE0203": {
        "code": "ACiE0203",
        "questionCount": 30,
        "format": 2,
        "summary": "<p>This subchapter covers how soil resists shear and how that resistance governs slope stability. The capsule questions test the Mohr circle and stress transformation, principal stresses and maximum shear, the Mohr–Coulomb envelope, drainage conditions and pore-pressure measurement in triaxial tests, undrained strength from unconfined compression and the vane, the direct shear box, infinite slopes with and without seepage, wetting of unsaturated clay, mobilized cohesion with Taylor's stability number, and the simplified Bishop method.</p>",
        "blocks": [
          {
            "id": "mohr-circle-basics",
            "title": "The Mohr circle: axes, centre, radius and the double-angle rule",
            "html": "<p>For a two-dimensional stress state, the normal and shear tractions on every plane through a point plot as one circle on axes of normal stress \\(\\sigma\\), horizontal, and shear stress \\(\\tau\\), vertical. That locus is the <em>Mohr circle</em>.</p><p>Each point on the circle stands for one plane. Its horizontal distance from the shear-stress axis is the normal stress on that plane, and its height is the shear stress. The orientation of the plane is shown by position around the circle, not by either coordinate.</p><p>The centre lies at the mean of the principal stresses and the radius is half their difference, which is also the maximum in-plane shear stress for that pair.</p><p>The transformation equations contain \\(\\cos 2\\theta\\) and \\(\\sin 2\\theta\\), so rotating the physical plane through \\(\\theta\\) moves its point through \\(2\\theta\\) around the circle. The direction of travel depends on the sign convention adopted.</p>",
            "formulas": [
              {
                "label": "Centre of the Mohr circle",
                "tex": "C = \\dfrac{\\sigma_1 + \\sigma_3}{2}"
              },
              {
                "label": "Radius of the Mohr circle",
                "tex": "R = \\dfrac{\\sigma_1 - \\sigma_3}{2}"
              },
              {
                "label": "Double-angle rule",
                "tex": "\\alpha_{\\text{circle}} = 2\\,\\theta",
                "where": "<p>\\(\\theta\\) is the rotation of the plane in the physical element.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: a circle and a rotation",
              "html": "<ol><li>Principal stresses of 180 and 60 kPa: centre \\((180 + 60)/2 = 120\\) kPa and radius \\((180 - 60)/2 = 60\\) kPa.</li><li>Two planes 25 degrees apart in the element plot \\(2 \\times 25 = 50\\) degrees apart on the circle.</li></ol>"
            },
            "moreHtml": "<p>Keep the Mohr circle distinct from a <em>Mohr–Coulomb envelope</em>. The circle describes one stress state on every plane through the point, whereas the envelope is a material failure criterion; failure is reached when a circle touches the envelope. Absolute three-dimensional maximum shear needs all three principal stresses, not only the in-plane pair.</p>",
            "points": [
              {
                "html": "The circle obtained from a two-dimensional stress system is known as Mohr's circle.",
                "sources": [
                  {
                    "id": "CAP4-02-00057",
                    "label": "p. 7; topic 2 point 53"
                  }
                ]
              },
              {
                "html": "The X- and Y-axes of Mohr's circle represent normal stress and shear stress.",
                "sources": [
                  {
                    "id": "CAP4-02-00070",
                    "label": "p. 8; topic 2 point 64"
                  }
                ]
              },
              {
                "html": "Mohr's circle is a graphical representation of plane stress problems, showing the maximum shear stress.",
                "sources": [
                  {
                    "id": "CAP4-02-00052",
                    "label": "p. 7; topic 2 point 48"
                  }
                ]
              },
              {
                "html": "An angle \\(\\theta\\) in the physical element is represented on Mohr's circle by an angle of \\(2\\theta\\).",
                "sources": [
                  {
                    "id": "CAP4-02-00074",
                    "label": "p. 8; topic 2 point 68"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00057",
                "label": "p. 7; topic 2 point 53"
              },
              {
                "id": "CAP4-02-00070",
                "label": "p. 8; topic 2 point 64"
              },
              {
                "id": "CAP4-02-00052",
                "label": "p. 7; topic 2 point 48"
              },
              {
                "id": "CAP4-02-00074",
                "label": "p. 8; topic 2 point 68"
              }
            ]
          },
          {
            "id": "principal-stresses-max-shear",
            "title": "Principal stresses from a general plane-stress state and planes of maximum shear",
            "html": "<p>When the stresses on two perpendicular planes are \\(\\sigma_x\\), \\(\\sigma_y\\) and \\(\\tau_{xy}\\), the Mohr circle passes through the two points that represent those planes. Its centre is the mean of \\(\\sigma_x\\) and \\(\\sigma_y\\). Its radius follows from Pythagoras, with half the difference of the normal stresses along one side and the shear stress along the other. The principal stresses are the centre plus and minus the radius.</p><p>The <em>maximum in-plane shear stress</em> equals the radius, half the difference of the principal stresses. The difference itself is the diameter of the circle and the centre coordinate is the mean stress; neither is the maximum shear.</p><p>Principal planes carry no shear and lie 90 degrees apart in the element. Maximum shear lies 90 degrees around the circle from a principal point, which is 45 degrees in the element. Its conjugate plane lies a further 90 degrees away physically, at 135 degrees, and carries shear of the opposite sign under a consistent convention.</p>",
            "formulas": [
              {
                "label": "Centre from a general stress state",
                "tex": "C = \\dfrac{\\sigma_x + \\sigma_y}{2}"
              },
              {
                "label": "Radius from a general stress state",
                "tex": "R = \\sqrt{\\left(\\dfrac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}"
              },
              {
                "label": "Principal stresses",
                "tex": "\\sigma_{1,3} = C \\pm R"
              },
              {
                "label": "Maximum in-plane shear stress",
                "tex": "\\tau_{\\text{max}} = \\dfrac{\\sigma_1 - \\sigma_3}{2}"
              }
            ],
            "example": {
              "title": "Worked examples: principal stresses and maximum shear",
              "html": "<ol><li>\\(\\sigma_x = 120\\), \\(\\sigma_y = 40\\) and \\(\\tau_{xy} = 30\\) kPa, compression positive: the centre is \\((120 + 40)/2 = 80\\) kPa.</li><li>The radius is \\(\\sqrt{40^2 + 30^2} = 50\\) kPa, since 1600 + 900 = 2500.</li><li>\\(\\sigma_1 = 80 + 50 = 130\\) kPa and \\(\\sigma_3 = 80 - 50 = 30\\) kPa.</li><li>Principal stresses of 220 and 80 kPa: \\(\\tau_{\\text{max}} = (220 - 80)/2 = 70\\) kPa. The 140 kPa difference is the diameter and 150 kPa the centre.</li></ol>"
            },
            "points": [
              {
                "html": "With compression positive, \\(\\sigma_x = 120\\), \\(\\sigma_y = 40\\) and \\(\\tau_{xy} = 30\\) kPa give centre 80, radius 50 and a major principal stress of 130 kPa.",
                "sources": [
                  {
                    "id": "CAP4-02-00062",
                    "label": "pp. 7, 8; topic 2 point 57"
                  }
                ]
              },
              {
                "html": "The maximum shear stress on Mohr's circle is equal to \\(\\dfrac{\\sigma_1 - \\sigma_3}{2}\\).",
                "sources": [
                  {
                    "id": "CAP4-02-00094",
                    "label": "p. 8; topic 2 point 86"
                  }
                ]
              },
              {
                "html": "The angle between a principal plane and the plane of maximum shear is 45° and 135°.",
                "sources": [
                  {
                    "id": "CAP4-02-00131",
                    "label": "p. 9; topic 2 point 118"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00062",
                "label": "pp. 7, 8; topic 2 point 57"
              },
              {
                "id": "CAP4-02-00094",
                "label": "p. 8; topic 2 point 86"
              },
              {
                "id": "CAP4-02-00131",
                "label": "p. 9; topic 2 point 118"
              }
            ]
          },
          {
            "id": "mohr-coulomb-envelope",
            "title": "The Mohr–Coulomb envelope: cohesion intercept, friction angle and back-calculation",
            "html": "<p>The linear <em>Mohr–Coulomb</em> criterion gives the shear strength available on a plane from the effective normal stress acting on it. On equally scaled axes it is a straight line: the intercept is the cohesion \\(c'\\) and the slope is \\(\\tan\\phi'\\), so the line's inclination to the horizontal is the <em>angle of internal friction</em>.</p><p>That angle is a material strength parameter. It is not a dilation angle or an earth-pressure coefficient, and the graphical inclination of the envelope is not the spatial inclination of a failure plane in the soil. Envelopes sharing an intercept have equal cohesion and differ only in friction angle: the steeper one has the larger \\(\\phi'\\).</p><p>Failure is reached when a Mohr circle of effective stresses touches the envelope. Zero cohesion does not mean zero strength: a cohesionless soil still resists shear in proportion to its effective confinement. Pore pressure matters through its reduction of the effective normal stress.</p>",
            "formulas": [
              {
                "label": "Mohr–Coulomb criterion",
                "tex": "\\tau_f = c' + \\sigma_n' \\tan\\phi'"
              },
              {
                "label": "Cohesionless soil",
                "tex": "\\tau_f = \\sigma_n' \\tan\\phi'"
              },
              {
                "label": "Back-calculated cohesion intercept",
                "tex": "c' = \\tau_f - \\sigma_n' \\tan\\phi'"
              }
            ],
            "example": {
              "title": "Worked examples: reading and using the envelope",
              "html": "<ol><li>An envelope slope of 0.577 gives \\(\\phi' = \\arctan 0.577 \\approx 30^\\circ\\).</li><li>A drained failure point at \\(\\sigma_n' = 100\\) kPa and \\(\\tau = 70\\) kPa with \\(\\tan\\phi' = 0.5\\): \\(c' = 70 - 100(0.5) = 20\\) kPa. Adding the frictional term instead of subtracting it would not recover the intercept.</li><li>Clean sand with \\(c' = 0\\) and \\(\\phi' = 30^\\circ\\) under \\(\\sigma_n' = 120\\) kPa: \\(\\tau_f = 120 \\tan 30^\\circ = 69.3\\) kPa.</li></ol>"
            },
            "points": [
              {
                "html": "In Coulomb's equation \\(S = c + \\sigma\\tan\\phi\\), the parameter \\(\\phi\\) represents the angle of internal friction.",
                "sources": [
                  {
                    "id": "CAP4-02-00100",
                    "label": "p. 9; topic 2 point 91"
                  }
                ]
              },
              {
                "html": "The angle that Coulomb's failure envelope makes with the horizontal is called the angle of internal friction.",
                "sources": [
                  {
                    "id": "CAP4-02-00128",
                    "label": "p. 9; topic 2 point 115"
                  }
                ]
              },
              {
                "html": "A drained failure point at 100 kPa effective normal stress and 70 kPa shear, with \\(\\tan\\phi' = 0.5\\), gives a cohesion intercept of \\(70 - 50 = 20\\) kPa.",
                "sources": [
                  {
                    "id": "CAP4-02-00079",
                    "label": "p. 8; topic 2 point 73"
                  }
                ]
              },
              {
                "html": "The shear strength of a cohesionless soil does not depend on the cohesion of the soil.",
                "sources": [
                  {
                    "id": "CAP4-02-00169",
                    "label": "p. 10; topic 2 point 149"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00100",
                "label": "p. 9; topic 2 point 91"
              },
              {
                "id": "CAP4-02-00128",
                "label": "p. 9; topic 2 point 115"
              },
              {
                "id": "CAP4-02-00079",
                "label": "p. 8; topic 2 point 73"
              },
              {
                "id": "CAP4-02-00169",
                "label": "p. 10; topic 2 point 149"
              }
            ]
          },
          {
            "id": "triaxial-drainage-pore-pressure",
            "title": "Triaxial drainage conditions, pore-pressure measurement and effective-stress circles",
            "html": "<p>Triaxial tests are named by what happens to drainage in two stages: consolidation under the cell pressure, then shearing.</p><ul><li><em>Consolidated drained (CD)</em>: drainage is allowed in both stages, and shearing is slow enough that excess pore pressure stays negligible. An open valve alone is not enough if the strain rate outpaces drainage. Drained does not mean dry, and back pressure need not be zero.</li><li><em>Consolidated undrained (CU)</em>: the specimen consolidates, then drainage is closed during shearing and pore pressure develops.</li></ul><p>Subtracting an isotropic pore pressure \\(u\\) from both principal total stresses moves a Mohr circle left by \\(u\\) and leaves its radius unchanged, because the principal-stress difference does not change. CU tests with pore pressure measured at failure therefore give effective circles, and those circles define \\(c'\\) and \\(\\phi'\\). Without pore-pressure data a total-stress test generally cannot be converted.</p><p>Pore pressure during undrained shearing can be measured with a <em>Bishop-type null indicator</em>. The line pressure is balanced to return the indicator to its datum, so negligible water leaves the specimen and undrained conditions are preserved. This apparatus is unrelated to Bishop's slope-stability method.</p>",
            "formulas": [
              {
                "label": "Effective principal stresses",
                "tex": "\\sigma_1' = \\sigma_1 - u,\\quad \\sigma_3' = \\sigma_3 - u"
              },
              {
                "label": "Radius unchanged by pore pressure",
                "tex": "\\sigma_1' - \\sigma_3' = \\sigma_1 - \\sigma_3"
              }
            ],
            "points": [
              {
                "html": "When drainage is permitted throughout the triaxial test, it is known as the CD (consolidated drained) test.",
                "sources": [
                  {
                    "id": "CAP4-02-00082",
                    "label": "p. 8; topic 2 point 76"
                  }
                ]
              },
              {
                "html": "The radius of Mohr's circle represents the maximum shear stress.",
                "sources": [
                  {
                    "id": "CAP4-02-00083",
                    "label": "p. 8; topic 2 point 77"
                  }
                ]
              },
              {
                "html": "The effective stress failure envelope cannot be obtained by using the undrained test.",
                "sources": [
                  {
                    "id": "CAP4-02-00051",
                    "label": "p. 7; topic 2 point 47"
                  }
                ]
              },
              {
                "html": "The pore pressure developed in the triaxial test can be measured by Bishop's apparatus.",
                "sources": [
                  {
                    "id": "CAP4-02-00138",
                    "label": "p. 9; topic 2 point 124"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00082",
                "label": "p. 8; topic 2 point 76"
              },
              {
                "id": "CAP4-02-00083",
                "label": "p. 8; topic 2 point 77"
              },
              {
                "id": "CAP4-02-00051",
                "label": "p. 7; topic 2 point 47"
              },
              {
                "id": "CAP4-02-00138",
                "label": "p. 9; topic 2 point 124"
              }
            ]
          },
          {
            "id": "undrained-strength-ucs",
            "title": "Undrained strength of saturated clay and the unconfined compression test",
            "html": "<p>For saturated clay sheared quickly without drainage, a total-stress \\(\\phi_u = 0\\) idealization is common: the failure envelope is horizontal, so the predicted strength equals \\(c_u\\) whatever the total normal stress. This models the specified soil state; it does not claim that clay strength never changes with consolidation history.</p><p>The <em>unconfined compression test</em> loads a self-supporting cylinder with zero lateral total stress, quickly enough that drainage during loading is negligible. The failure circle runs from zero to the unconfined compressive strength \\(q_u\\), so its radius gives the undrained strength. The result is an undrained total-stress strength for a suitable saturated cohesive specimen. It does not give effective \\(c'\\) and \\(\\phi'\\), and it does not apply to frictional or unsaturated specimens.</p><p>Axial stress must use a corrected area. A specimen that shortens at constant volume grows wider, so dividing the load by the original area would overstate the stress.</p>",
            "formulas": [
              {
                "label": "Undrained total-stress envelope",
                "tex": "\\tau_f = c_u + \\sigma \\tan\\phi_u",
                "where": "<p>With \\(\\phi_u = 0\\) this reduces to \\(\\tau_f = c_u\\).</p>"
              },
              {
                "label": "Undrained strength from unconfined compression",
                "tex": "s_u = \\dfrac{q_u}{2}"
              },
              {
                "label": "Corrected area at axial strain",
                "tex": "A_c = \\dfrac{A_0}{1 - \\varepsilon}"
              }
            ],
            "example": {
              "title": "Worked examples: envelope, strength and corrected area",
              "html": "<ol><li>\\(c_u = 25\\) kPa with \\(\\phi_u = 0\\), at 100 kPa total normal stress: \\(\\tau_f = 25 + 100 \\tan 0 = 25\\) kPa.</li><li>Failure at \\(q_u = 90\\) kPa: \\(s_u = 90/2 = 45\\) kPa.</li><li>\\(A_0 = 1000\\) mm<sup>2</sup> at 20% strain: \\(A_c = 1000/0.80 = 1250\\) mm<sup>2</sup>.</li></ol>"
            },
            "moreHtml": "<p>The corrected area follows from constant volume. The specimen shortens from \\(L_0\\) to \\(L_0(1 - \\varepsilon)\\) while its area grows from \\(A_0\\) to \\(A_c\\):</p>\\[A_0 L_0 = A_c L_0 (1 - \\varepsilon)\\]<p>Dividing both sides by \\(L_0(1 - \\varepsilon)\\) gives the relation in the card.</p>",
            "points": [
              {
                "html": "The shear strength of a plastic undrained clay depends upon cohesion.",
                "sources": [
                  {
                    "id": "CAP4-02-00071",
                    "label": "p. 8; topic 2 point 65"
                  }
                ]
              },
              {
                "html": "The unconfined compression strength test is widely used for cohesive soils.",
                "sources": [
                  {
                    "id": "CAP4-02-00060",
                    "label": "p. 7; topic 2 point 55"
                  }
                ]
              },
              {
                "html": "The unconfined compressive strength test is an undrained test for clay.",
                "sources": [
                  {
                    "id": "CAP4-02-00151",
                    "label": "p. 10; topic 2 point 133"
                  }
                ]
              },
              {
                "html": "At 20% axial strain and constant volume, a 1000 mm<sup>2</sup> specimen's corrected area is 1000/0.80 = 1250 mm<sup>2</sup>.",
                "sources": [
                  {
                    "id": "CAP4-02-00065",
                    "label": "p. 8; topic 2 point 60"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00071",
                "label": "p. 8; topic 2 point 65"
              },
              {
                "id": "CAP4-02-00060",
                "label": "p. 7; topic 2 point 55"
              },
              {
                "id": "CAP4-02-00151",
                "label": "p. 10; topic 2 point 133"
              },
              {
                "id": "CAP4-02-00065",
                "label": "p. 8; topic 2 point 60"
              }
            ]
          },
          {
            "id": "vane-shear",
            "title": "Vane shear test: torque equation, end contribution and when to use it",
            "html": "<p>A vane pushed into soft clay and rotated shears out a cylinder of soil. Assuming uniform undrained strength on the curved side and on both flat ends, the resisting moments of side and ends add up to the measured torque. The vane must be fully embedded, and the torque is first corrected for rod friction.</p><p>For a vane whose height equals its diameter, the side supplies three quarters of the ideal torque and the two ends together one quarter. Treating all the torque as side resistance therefore overestimates the strength.</p><p>The field vane suits very soft saturated clay that cannot stand as an unsupported cylinder after extraction.</p>",
            "formulas": [
              {
                "label": "Torque resisted by the cylindrical side",
                "tex": "T_{\\text{side}} = s_u\\, \\dfrac{\\pi D^2 H}{2}"
              },
              {
                "label": "Torque resisted by both ends",
                "tex": "T_{\\text{ends}} = s_u\\, \\dfrac{\\pi D^3}{6}"
              },
              {
                "label": "Vane shear torque",
                "tex": "T = s_u\\, \\pi D^2 \\left(\\dfrac{H}{2} + \\dfrac{D}{6}\\right)"
              }
            ],
            "example": {
              "title": "Worked examples: strength from torque, and the end share",
              "html": "<p>With D = H = 0.10 m:</p>\\[\\begin{aligned}\\dfrac{H}{2} + \\dfrac{D}{6} &amp;= 0.05 + 0.01667 \\\\\\ &amp;= 0.06667\\ \\text{m}\\end{aligned}\\]\\[\\pi D^2 \\times 0.06667 = \\dfrac{\\pi}{1500}\\ \\text{m}^3\\]<p>A corrected torque of \\(20\\pi\\) N m then gives \\(s_u = 20\\pi \\times 1500/\\pi = 30\\,000\\) Pa, or 30 kPa. Dropping the end term would give 40 kPa.</p><p>For H = D the side term is \\(s_u\\pi D^3/2\\) and the ends give \\(s_u\\pi D^3/6\\), a total of \\(2s_u\\pi D^3/3\\). The end share is \\((1/6)/(2/3)\\), one quarter.</p>"
            },
            "points": [
              {
                "html": "A fully embedded vane with D = H = 0.10 m and a corrected torque of \\(20\\pi\\) N m indicates an undrained strength of 30 kPa when side and both ends resist.",
                "sources": [
                  {
                    "id": "CAP4-02-00067",
                    "label": "p. 8; topic 2 point 62"
                  }
                ]
              },
              {
                "html": "The formula for shear strength from the vane shear test is \\(S = \\dfrac{T}{\\pi D^2\\left(\\tfrac{H}{2} + \\tfrac{D}{6}\\right)}\\).",
                "sources": [
                  {
                    "id": "CAP4-02-00068",
                    "label": "p. 8; topic 2 point 62"
                  }
                ]
              },
              {
                "html": "For testing a saturated clay for shear strength, the test recommended is the unconfined compression test.",
                "sources": [
                  {
                    "id": "CAP4-02-00073",
                    "label": "p. 8; topic 2 point 67"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00067",
                "label": "p. 8; topic 2 point 62"
              },
              {
                "id": "CAP4-02-00068",
                "label": "p. 8; topic 2 point 62"
              },
              {
                "id": "CAP4-02-00073",
                "label": "p. 8; topic 2 point 67"
              }
            ]
          },
          {
            "id": "direct-shear",
            "title": "Direct shear test: nominal stress on an imposed plane",
            "html": "<p>The <em>direct shear box</em> splits a specimen into two halves and forces them to slide along a horizontal plane under a normal load. The measured shear stress is nominal: the average over that plane, found from the shear force and the corrected overlap area. Unit slips in converting square centimetres to square metres produce errors by factors of ten.</p><p>The simplicity of the test is also its main limitation:</p><ul><li>the box fixes the failure plane, which need not be the weakest orientation in a natural soil with oriented fabric;</li><li>the split need not align with a principal plane;</li><li>stresses near the edges are nonuniform, and routine control of pore pressure and drainage is limited.</li></ul><p>The tested orientation and drainage must therefore match the intended interpretation; an overlap-area correction does not remove fabric effects.</p>",
            "formulas": [
              {
                "label": "Nominal shear stress on the box plane",
                "tex": "\\tau = \\dfrac{F_s}{A_c}",
                "where": "<p>\\(F_s\\) is the shear force and \\(A_c\\) the corrected overlap area of the two halves.</p>"
              }
            ],
            "example": {
              "title": "Worked example: 180 N on a 30 square centimetre overlap",
              "html": "<p>The overlap area is 30 cm<sup>2</sup> = 30 × 0.0001 = 0.003 m<sup>2</sup>, so</p>\\[\\tau = \\dfrac{180}{0.003} = 60\\,000\\ \\text{Pa} = 60\\ \\text{kPa}\\]<p>Leaving the area in square centimetres, or slipping a power of ten, gives 6 or 600 kPa instead.</p>"
            },
            "points": [
              {
                "html": "The test that directly measures the shear strength of a soil sample is the direct shear test.",
                "sources": [
                  {
                    "id": "CAP4-02-00149",
                    "label": "p. 10; topic 2 point 132"
                  }
                ]
              },
              {
                "html": "Direct shear failure is not generally used for trees.",
                "sources": [
                  {
                    "id": "CAP4-02-00162",
                    "label": "p. 10; topic 2 point 143"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00149",
                "label": "p. 10; topic 2 point 132"
              },
              {
                "id": "CAP4-02-00162",
                "label": "p. 10; topic 2 point 143"
              }
            ]
          },
          {
            "id": "infinite-slopes",
            "title": "Infinite slopes in cohesionless soil: steepening and parallel seepage",
            "html": "<p>An <em>infinite slope</em> is long compared with the depth of the slip surface, so one slice represents the whole and sliding occurs on a plane parallel to the ground surface. For dry cohesionless soil, the ratio of the normal to the shear stress on that plane makes the factor of safety depend only on the friction angle and the slope angle \\(\\beta\\).</p><p>Steepening increases \\(\\tan\\beta\\) and lowers the factor of safety; flattening improves it. Real slopes still need groundwater and geological assessment beyond this idealization.</p><p>Now let the soil be fully saturated, with steady seepage parallel to the slope and the water surface at the ground surface. Pore pressure reduces the effective normal stress, so the resisting side uses the submerged unit weight, while the driving shear still uses the saturated unit weight.</p><p>The factor of safety falls by the ratio \\(\\gamma'/\\gamma_{\\text{sat}}\\), close to one half for many soils. That halving depends on these assumptions and on the unit-weight ratio; it is not a general factor for cohesive slopes or other water levels.</p>",
            "formulas": [
              {
                "label": "Dry cohesionless infinite slope",
                "tex": "F_{\\text{dry}} = \\dfrac{\\tan\\phi'}{\\tan\\beta}"
              },
              {
                "label": "Parallel seepage with water at the surface",
                "tex": "F_{\\text{seep}} = \\dfrac{\\gamma'}{\\gamma_{\\text{sat}}}\\, \\dfrac{\\tan\\phi'}{\\tan\\beta}"
              }
            ],
            "example": {
              "title": "Worked example: the effect of parallel seepage",
              "html": "<p>With \\(\\gamma_{\\text{sat}} = 20\\) and \\(\\gamma_w = 10\\) kN/m<sup>3</sup>, the submerged unit weight is 10 kN/m<sup>3</sup> and</p>\\[\\dfrac{F_{\\text{seep}}}{F_{\\text{dry}}} = \\dfrac{20 - 10}{20} = 0.50\\]<p>The friction and slope angles are unchanged, so they cancel from the ratio.</p>"
            },
            "moreHtml": "<p>For a slice of vertical depth \\(z\\), the normal and shear stresses on the slip plane are \\(\\gamma z\\cos^2\\beta\\) and \\(\\gamma z \\sin\\beta\\cos\\beta\\); with \\(c' = 0\\) their ratio gives the dry factor. With parallel seepage and the water surface at ground level, the pore pressure on the plane is \\(\\gamma_w z\\cos^2\\beta\\). That leaves an effective normal stress of \\(\\gamma' z\\cos^2\\beta\\) against a driving shear of \\(\\gamma_{\\text{sat}} z\\sin\\beta\\cos\\beta\\), hence the factor \\(\\gamma'/\\gamma_{\\text{sat}}\\).</p>",
            "points": [
              {
                "html": "Increased slope angle does not contribute to the stability of a slope.",
                "sources": [
                  {
                    "id": "CAP4-02-00081",
                    "label": "p. 8; topic 2 point 75"
                  }
                ]
              },
              {
                "html": "The factor of safety for an infinite slope with steady seepage is approximately half that of the dry slope.",
                "sources": [
                  {
                    "id": "CAP4-02-00041",
                    "label": "p. 7; topic 2 point 37"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00081",
                "label": "p. 8; topic 2 point 75"
              },
              {
                "id": "CAP4-02-00041",
                "label": "p. 7; topic 2 point 37"
              }
            ]
          },
          {
            "id": "wetting-unsaturated-slopes",
            "title": "Rain on unsaturated clay slopes: losing suction-related strength",
            "html": "<p>In an unsaturated clay the pore water is at a lower pressure than the pore air. This difference, the <em>matric suction</em>, pulls the grains together and adds an apparent strength beyond what the saturated effective-stress parameters alone would give.</p><p>Rain infiltration that reduces suction removes that contribution, so a slope can lose shear resistance without any change in its geometry. If wetting continues until pore pressures become positive, effective stress falls further.</p><p>The size of the loss depends on drainage, soil fabric and stress history. It does not raise the intrinsic friction angle or the preconsolidation stress, and rising pore pressure reduces effective confinement rather than increasing it.</p>",
            "formulas": [
              {
                "label": "Extended Mohr–Coulomb form for unsaturated soil",
                "tex": "\\begin{aligned} \\tau_f &= c' + (\\sigma - u_a)\\tan\\phi' \\\\ &\\quad + (u_a - u_w)\\tan\\phi^b \\end{aligned}",
                "where": "<p>\\(u_a - u_w\\) is the matric suction and \\(\\phi^b\\) the angle describing the strength gained per unit suction; wetting drives the last term toward zero.</p>"
              }
            ],
            "points": [
              {
                "html": "On wetting, cohesive soils decrease their shear strength.",
                "sources": [
                  {
                    "id": "CAP4-02-00042",
                    "label": "p. 7; topic 2 point 38"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00042",
                "label": "p. 7; topic 2 point 38"
              }
            ]
          },
          {
            "id": "mobilized-strength-taylor",
            "title": "Mobilized cohesion and Taylor's stability number",
            "html": "<p>A factor of safety can be read as a strength reduction. The <em>mobilized strength</em> is the strength that must be developed to keep the slope in equilibrium: the available strength divided by the factor of safety. For cohesion this gives the <em>mobilized cohesion</em> \\(c_m\\).</p><p>In a frictional soil the mobilized resistance also has a frictional part, \\(\\sigma' \\tan\\phi_m\\), with \\(\\tan\\phi_m = \\tan\\phi/F\\) under uniform reduction.</p><p><em>Taylor's stability number</em> is the dimensionless ratio of mobilized cohesion to \\(\\gamma H\\). It is read from a chart whose conditions must match the slope geometry, drainage and strength model. For a purely cohesive slope, the chart value gives the cohesion that must be mobilized, and comparing it with the available cohesion gives the factor of safety on cohesion.</p>",
            "formulas": [
              {
                "label": "Mobilized cohesion",
                "tex": "c_m = \\dfrac{c}{F}"
              },
              {
                "label": "Mobilized friction",
                "tex": "\\tan\\phi_m = \\dfrac{\\tan\\phi}{F}"
              },
              {
                "label": "Taylor's stability number",
                "tex": "S_n = \\dfrac{c_m}{\\gamma H}"
              }
            ],
            "example": {
              "title": "Worked examples: strength reduction and a Taylor chart",
              "html": "<ol><li>\\(c = 30\\) kPa with \\(F = 1.5\\): \\(c_m = 30/1.5 = 20\\) kPa.</li><li>\\(S_n = 0.10\\), \\(\\gamma = 18\\) kN/m<sup>3</sup> and \\(H = 10\\) m: \\(c_m = 0.10 \\times 18 \\times 10 = 18\\) kPa must be mobilized.</li><li>With 36 kPa available, the factor of safety on cohesion is \\(F_c = 36/18 = 2.0\\).</li></ol>"
            },
            "points": [
              {
                "html": "\\(C_m\\) (mobilised cohesion) is also called the applied shear stress.",
                "sources": [
                  {
                    "id": "CAP4-02-00047",
                    "label": "p. 7; topic 2 point 43"
                  }
                ]
              },
              {
                "html": "For \\(S_n = 0.10\\), \\(\\gamma = 18\\) kN/m<sup>3</sup> and \\(H = 10\\) m the mobilized cohesion needed is 18 kPa, so 36 kPa available gives a cohesion safety factor of 2.0.",
                "sources": [
                  {
                    "id": "CAP4-02-00134",
                    "label": "p. 9; topic 2 point 120"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00047",
                "label": "p. 7; topic 2 point 43"
              },
              {
                "id": "CAP4-02-00134",
                "label": "p. 9; topic 2 point 120"
              }
            ]
          },
          {
            "id": "simplified-bishop",
            "title": "Circular slip surfaces: the simplified Bishop method of slices",
            "html": "<p>For a finite slope, a trial circular slip surface is divided into vertical slices and the factor of safety is found from the equilibrium of the sliding mass. Methods of slices differ in which equilibrium equations they satisfy and in what they assume about the forces between slices.</p><p>The <em>simplified Bishop method</em> uses vertical force equilibrium of each slice and overall moment equilibrium about the centre of the circle. It neglects the interslice shear forces while keeping the effect of the interslice normal forces. Because the factor of safety appears on both sides of its equation, it is found by iteration.</p><p>The method does not satisfy every force-equilibrium equation, as a fully rigorous method would, and it is not a planar-slip analysis. Many trial circles are examined to find the lowest factor of safety.</p>",
            "formulas": [
              {
                "label": "Simplified Bishop factor of safety",
                "tex": "F = \\dfrac{\\sum \\left[c'b + (W - ub)\\tan\\phi'\\right]/m_\\alpha}{\\sum W \\sin\\alpha}",
                "where": "<p>For each slice, \\(b\\) is the width, \\(W\\) the weight, \\(u\\) the pore pressure on the base and \\(\\alpha\\) the base inclination.</p>"
              },
              {
                "label": "Slice factor",
                "tex": "m_\\alpha = \\cos\\alpha \\left(1 + \\dfrac{\\tan\\alpha \\tan\\phi'}{F}\\right)"
              }
            ],
            "points": [
              {
                "html": "In Bishop's theory of slope stability analysis, the equilibrium considered is that of moments about the centre of the circular arc.",
                "sources": [
                  {
                    "id": "CAP4-02-00077",
                    "label": "p. 8; topic 2 point 71"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00077",
                "label": "p. 8; topic 2 point 71"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Mohr circle centre and radius",
            "tex": "C = \\dfrac{\\sigma_1 + \\sigma_3}{2}, \\quad R = \\dfrac{\\sigma_1 - \\sigma_3}{2}"
          },
          {
            "label": "Principal stresses",
            "tex": "\\sigma_{1,3} = \\dfrac{\\sigma_x + \\sigma_y}{2} \\pm R"
          },
          {
            "label": "Radius from a general stress state",
            "tex": "R = \\sqrt{\\left(\\dfrac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}"
          },
          {
            "label": "Maximum in-plane shear",
            "tex": "\\tau_{\\text{max}} = \\dfrac{\\sigma_1 - \\sigma_3}{2}",
            "note": "A plane rotation of \\(\\theta\\) appears as \\(2\\theta\\) on the circle."
          },
          {
            "label": "Mohr–Coulomb criterion",
            "tex": "\\tau_f = c' + \\sigma_n' \\tan\\phi'"
          },
          {
            "label": "Effective stress",
            "tex": "\\sigma' = \\sigma - u"
          },
          {
            "label": "Unconfined compression",
            "tex": "s_u = \\dfrac{q_u}{2}",
            "note": "Saturated clay under the \\(\\phi_u = 0\\) idealization."
          },
          {
            "label": "Corrected area",
            "tex": "A_c = \\dfrac{A_0}{1 - \\varepsilon}"
          },
          {
            "label": "Vane shear torque",
            "tex": "T = s_u\\, \\pi D^2 \\left(\\dfrac{H}{2} + \\dfrac{D}{6}\\right)"
          },
          {
            "label": "Direct shear",
            "tex": "\\tau = \\dfrac{F_s}{A_c}"
          },
          {
            "label": "Dry cohesionless infinite slope",
            "tex": "F_{\\text{dry}} = \\dfrac{\\tan\\phi'}{\\tan\\beta}"
          },
          {
            "label": "Parallel seepage, water at the surface",
            "tex": "F_{\\text{seep}} = \\dfrac{\\gamma'}{\\gamma_{\\text{sat}}}\\, F_{\\text{dry}}"
          },
          {
            "label": "Mobilized cohesion",
            "tex": "c_m = \\dfrac{c}{F}"
          },
          {
            "label": "Taylor's stability number",
            "tex": "S_n = \\dfrac{c_m}{\\gamma H}"
          }
        ],
        "cautions": [],
        "gaps": [
          "Unconsolidated undrained testing, stress paths, pore-pressure parameters and dilatancy are not examined in these capsule points.",
          "Finite-slope methods such as the Swedish circle, ordinary slices and the friction circle, and slope-stabilization measures, are not covered beyond the outline of the simplified Bishop method.",
          "Sensitivity, thixotropy and residual strength of clays are not included."
        ]
      },
      "ACiE0204": {
        "code": "ACiE0204",
        "questionCount": 20,
        "format": 2,
        "summary": "<p>This subchapter covers how a site is explored and how retained soil pushes on walls. The capsule questions test exploration depth, indirect geophysics and groundwater observation, sampler area ratio, piston samplers and the Dutch cone, SPT corrections including the dilatancy rule, the at-rest, active and passive states with Rankine's coefficients and assumptions, Culmann's wedge construction, and cohesive backfill with tension cracks.</p>",
        "blocks": [
          {
            "id": "exploration-planning",
            "title": "Planning an investigation: depth, indirect methods and groundwater observation",
            "html": "<p>How deep to explore is a design decision, not a property of the drilling rig. The depth follows the foundation's loads and dimensions, the geology and any compressible or unstable layer inside the zone the foundation will stress. The boring method is then chosen to reach that depth. If an auger refuses on a hard layer while weaker strata may lie deeper within that zone, a method able to penetrate the layer must carry the hole on.</p><p>Equipment limits can obstruct an investigation, but they never define an adequate depth; neither does the water level on the day of drilling or the length of one sampler.</p><p><em>Electrical resistivity</em> surveying is an indirect, geophysical method: it infers layering from how readily the ground conducts current between electrodes. Low resistivity can reflect clay, saturation or dissolved salts, so a conductive layer is a hypothesis to be checked against boreholes and groundwater chemistry. On its own it cannot identify a soil, supply a bearing pressure or stand in for a recovered sample.</p><p>Groundwater is observed in an <em>observation well</em>. A suitably installed well screened in an unconfined aquifer and left to equilibrate shows the groundwater level near its screen. A confined piezometric level is not automatically the local water table, one reading may miss seasonal extremes, and a level read too soon may still reflect drilling fluid.</p>",
            "points": [
              {
                "html": "The depth of exploration is independent of the type of boring.",
                "sources": [
                  {
                    "id": "CAP4-02-00088",
                    "label": "p. 8; topic 2 point 81"
                  }
                ]
              },
              {
                "html": "Electrical resistivity is an indirect method of soil exploration.",
                "sources": [
                  {
                    "id": "CAP4-02-00017",
                    "label": "p. 6; topic 2 point 14"
                  }
                ]
              },
              {
                "html": "The groundwater table is observed by means of an observation well.",
                "sources": [
                  {
                    "id": "CAP4-02-00152",
                    "label": "p. 10; topic 2 point 134"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00088",
                "label": "p. 8; topic 2 point 81"
              },
              {
                "id": "CAP4-02-00017",
                "label": "p. 6; topic 2 point 14"
              },
              {
                "id": "CAP4-02-00152",
                "label": "p. 10; topic 2 point 134"
              }
            ]
          },
          {
            "id": "samplers-and-dutch-cone",
            "title": "Samplers and the Dutch cone: area ratio, piston tubes and tip geometry",
            "html": "<p>A sampler disturbs the soil partly through the volume its wall pushes aside. The <em>area ratio</em> measures this by comparing the annular area of the cutting edge with the area of the sample, so the inside diameter supplies the denominator. Thin-walled tubes with small area ratios disturb soil less than thick split spoons.</p><p>Very soft clay can squeeze into an unprotected tube before sampling starts and can slip out as the tube is withdrawn. A <em>piston sampler</em> controls this: the piston governs when soil enters a suitable thin-walled tube and helps hold the sample during withdrawal. Good technique still matters, and even a sample described as undisturbed does not preserve its stress history perfectly.</p><p>The static <em>Dutch cone</em> penetrometer has a conical tip with an included apex angle of 60 degrees. In an axial section the cone axis bisects that angle, so each straight generator makes half of it with the axis. The cone is a penetration tip and should not be confused with the SPT split spoon.</p>",
            "formulas": [
              {
                "label": "Sampler area ratio",
                "tex": "A_r = \\dfrac{D_o^2 - D_i^2}{D_i^2} \\times 100\\%",
                "where": "<p>\\(D_o\\) and \\(D_i\\) are the outside and inside diameters of the cutting edge.</p>"
              },
              {
                "label": "Cone semi-angle",
                "tex": "\\alpha = \\dfrac{\\theta_{\\text{apex}}}{2}",
                "where": "<p>\\(\\theta_{\\text{apex}}\\) is the included apex angle; \\(\\alpha\\) is measured from the cone axis.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: area ratio of a cutting edge and the cone semi-angle",
              "html": "<p>Cutting edge with \\(D_o = 55\\) mm and \\(D_i = 50\\) mm:</p>\\[\\begin{aligned} A_r &amp;= \\dfrac{3025 - 2500}{2500} \\times 100\\% \\\\ &amp;= 21\\% \\end{aligned}\\]<p>Dividing the same 525 mm² by the outside area, 3025 mm², would give 17.36%, a different and incorrect convention.</p><p>Dutch cone: the semi-angle is 60/2 = 30 degrees between the axis and a generator.</p>"
            },
            "points": [
              {
                "html": "A cutting edge 55 mm in outside and 50 mm in inside diameter has an area ratio of 21%, with the inside (sample) area as the denominator.",
                "sources": [
                  {
                    "id": "CAP4-02-00075",
                    "label": "p. 8; topic 2 point 69"
                  }
                ]
              },
              {
                "html": "The piston sampler is used for very soft clay soil.",
                "sources": [
                  {
                    "id": "CAP4-02-00156",
                    "label": "p. 10; topic 2 point 138"
                  }
                ]
              },
              {
                "html": "The apex angle of the Dutch cone is about 60°.",
                "sources": [
                  {
                    "id": "CAP4-01-00131",
                    "label": "p. 5; topic 1 point 124"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00075",
                "label": "p. 8; topic 2 point 69"
              },
              {
                "id": "CAP4-02-00156",
                "label": "p. 10; topic 2 point 138"
              },
              {
                "id": "CAP4-01-00131",
                "label": "p. 5; topic 1 point 124"
              }
            ]
          },
          {
            "id": "spt-corrections-dilatancy",
            "title": "SPT blow counts: which corrections apply, and the dilatancy rule",
            "html": "<p>An SPT blow count reflects the test equipment as well as the soil. Its corrections therefore deal with the energy the hammer actually delivers and with conditions such as borehole diameter, rod length and the sampler. A meniscus correction belongs to liquid-level readings, for example the hydrometer in grain-size analysis, and has no place among SPT corrections.</p><p>The traditional <em>dilatancy correction</em> is meant for saturated fine sand or nonplastic silt. Rapid driving in these soils can create transient pore-pressure effects that inflate the resistance. The rule is conditional: it follows the overburden correction, operates only when the corrected count \\(N_c\\) exceeds 15, and then halves only the excess over 15.</p><ul><li>Dry coarse gravel, unsaturated coarse sand and stiff plastic clay fall outside the rule.</li><li>Below the threshold the count is left unchanged; the formula is not extrapolated.</li></ul>",
            "formulas": [
              {
                "label": "Dilatancy-corrected SPT count",
                "tex": "N_d = 15 + 0.5\\,(N_c - 15)",
                "where": "<p>Used only for \\(N_c \\gt 15\\) in saturated fine sand or nonplastic silt, after the overburden correction.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: corrected counts of 27 and 12",
              "html": "<p>Saturated fine sand with \\(N_c = 27\\) exceeds the threshold:</p>\\[N_d = 15 + 0.5\\,(27 - 15) = 21\\]<p>Saturated nonplastic silt with \\(N_c = 12\\) does not exceed 15, so no dilatancy step applies and the count stays 12.</p><p>Two slips give 13.5: halving the whole count of 27, or extrapolating the formula to 12, since 15 + 0.5(12 − 15) = 13.5.</p>"
            },
            "points": [
              {
                "html": "Meniscus correction is not a correction applied to the SPT value.",
                "sources": [
                  {
                    "id": "CAP4-02-00078",
                    "label": "p. 8; topic 2 point 72"
                  }
                ]
              },
              {
                "html": "The dilatancy correction for SPT N-value is applied to fine silty saturated sand.",
                "sources": [
                  {
                    "id": "CAP4-02-00076",
                    "label": "p. 8; topic 2 point 70"
                  }
                ]
              },
              {
                "html": "Saturated fine sand with an overburden-corrected \\(N_c = 27\\) has a dilatancy-corrected count of 21, because only the excess over 15 is halved.",
                "sources": [
                  {
                    "id": "CAP4-02-00146",
                    "label": "p. 10; topic 2 point 130"
                  }
                ]
              },
              {
                "html": "Saturated nonplastic silt with \\(N_c = 12\\) keeps a count of 12: the dilatancy rule does not operate at or below 15.",
                "sources": [
                  {
                    "id": "CAP4-02-00147",
                    "label": "p. 10; topic 2 point 130"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00078",
                "label": "p. 8; topic 2 point 72"
              },
              {
                "id": "CAP4-02-00076",
                "label": "p. 8; topic 2 point 70"
              },
              {
                "id": "CAP4-02-00146",
                "label": "p. 10; topic 2 point 130"
              },
              {
                "id": "CAP4-02-00147",
                "label": "p. 10; topic 2 point 130"
              }
            ]
          },
          {
            "id": "earth-pressure-states",
            "title": "Wall movement and the three states of lateral earth pressure",
            "html": "<p>The lateral pressure a backfill exerts depends on how the wall moves.</p><ul><li>A wall restrained against yielding keeps the soil close to the <em>at-rest</em> state.</li><li>When the wall yields far enough away from the backfill, the soil expands laterally, its shear strength is mobilized and the pressure falls to the <em>active</em> limit, lower than at rest.</li><li>When the wall is pushed far enough into the soil, the much larger <em>passive</em> resistance is mobilized.</li></ul><p>Two at-rest estimates must not be mixed. Jaky's empirical relation for normally consolidated soil gives \\(K_0 = 1 - \\sin\\phi'\\), which is 0.5 at 30 degrees. An ideal isotropic linear-elastic soil prevented from straining laterally gives \\(K_0 = \\nu/(1-\\nu)\\) instead.</p>",
            "formulas": [
              {
                "label": "At rest, ideal elastic soil",
                "tex": "K_0 = \\dfrac{\\nu}{1 - \\nu}"
              },
              {
                "label": "At rest, Jaky, normally consolidated soil",
                "tex": "K_0 = 1 - \\sin\\phi'"
              }
            ],
            "example": {
              "title": "Worked example: an elastic soil with Poisson's ratio 0.40",
              "html": "<p>Under zero lateral strain, \\(K_0 = 0.40/0.60 = 0.667\\). Jaky's relation at φ' = 30 degrees would give 0.5 instead, so the two estimates are not interchangeable.</p>"
            },
            "points": [
              {
                "html": "The active earth pressure of a soil is the lateral pressure exerted by the soil when the retaining wall tends to move away from the backfill.",
                "sources": [
                  {
                    "id": "CAP4-02-00092",
                    "label": "p. 8; topic 2 point 84"
                  }
                ]
              },
              {
                "html": "If the Poisson's ratio of a soil is 0.4, its coefficient of earth pressure at rest is 0.667.",
                "sources": [
                  {
                    "id": "CAP4-02-00098",
                    "label": "pp. 8, 9; topic 2 point 89"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00092",
                "label": "p. 8; topic 2 point 84"
              },
              {
                "id": "CAP4-02-00098",
                "label": "pp. 8, 9; topic 2 point 89"
              }
            ]
          },
          {
            "id": "rankine-coefficients",
            "title": "Rankine coefficients and the active failure plane in cohesionless backfill",
            "html": "<p>Rankine's theory treats a level, dry, homogeneous and cohesionless backfill retained by a smooth vertical wall. Lateral effective pressure is then a coefficient times the vertical effective stress, and the active and passive coefficients are reciprocals of each other.</p><p>At φ' = 30 degrees keep three numbers apart: \\(K_a = 1/3\\), Jaky's \\(K_0 = 1/2\\) and \\(K_p = 3\\). Taking \\(1 - \\sin\\phi'\\) for \\(K_a\\), or inverting the ratio, is the usual slip. Passive values also presume enough wall movement into the soil; a stationary wall does not develop them.</p><p>In the active state of level backfill the vertical stress is the major principal stress, so the major principal plane is horizontal. Mohr–Coulomb failure planes make \\(45^\\circ + \\phi/2\\) with that plane. The result belongs to this stress state and should not be transferred to a wedge beneath a footing whose mechanism is assumed differently.</p>",
            "formulas": [
              {
                "label": "Rankine active coefficient",
                "tex": "K_a = \\dfrac{1 - \\sin\\phi'}{1 + \\sin\\phi'}"
              },
              {
                "label": "Rankine passive coefficient",
                "tex": "K_p = \\dfrac{1 + \\sin\\phi'}{1 - \\sin\\phi'} = \\dfrac{1}{K_a}"
              },
              {
                "label": "Active failure plane, from the horizontal",
                "tex": "\\alpha_f = 45^\\circ + \\dfrac{\\phi}{2}",
                "where": "<p>Measured from the major principal plane, which is horizontal for level backfill.</p>"
              }
            ],
            "example": {
              "title": "Worked example: level cohesionless backfill with φ' = 30 degrees",
              "html": "<ol><li>\\(\\sin 30^\\circ = 0.5\\), so \\(K_a = 0.5/1.5 = 1/3\\) and \\(K_p = 1.5/0.5 = 3\\).</li><li>Passive horizontal effective stress under 60 kPa vertical effective stress: 3 × 60 = 180 kPa, provided the wall moves far enough into the soil.</li><li>Active failure planes: 45 + 30/2 = 60 degrees to the horizontal.</li></ol>"
            },
            "points": [
              {
                "html": "The formula for the active earth pressure coefficient is \\(\\dfrac{1 - \\sin\\phi}{1 + \\sin\\phi}\\).",
                "sources": [
                  {
                    "id": "CAP4-02-00093",
                    "label": "p. 8; topic 2 point 85"
                  }
                ]
              },
              {
                "html": "For level cohesionless backfill with \\(\\phi' = 30^\\circ\\), the smooth-wall Rankine passive idealization gives a horizontal effective stress of 180 kPa at a vertical effective stress of 60 kPa.",
                "sources": [
                  {
                    "id": "CAP4-02-00099",
                    "label": "p. 9; topic 2 point 90"
                  }
                ]
              },
              {
                "html": "The angle subtended by the rigid cone below a foundation with respect to the horizontal is \\(45^\\circ + \\dfrac{\\phi}{2}\\).",
                "sources": [
                  {
                    "id": "CAP4-02-00069",
                    "label": "p. 8; topic 2 point 63"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00093",
                "label": "p. 8; topic 2 point 85"
              },
              {
                "id": "CAP4-02-00099",
                "label": "p. 9; topic 2 point 90"
              },
              {
                "id": "CAP4-02-00069",
                "label": "p. 8; topic 2 point 63"
              }
            ]
          },
          {
            "id": "rankine-assumptions-coulomb-wedges",
            "title": "Rankine's assumptions, layered backfill and Coulomb wedges",
            "html": "<p>The elementary Rankine solution assumes a <em>smooth</em> vertical wall. With a wall-friction angle \\(\\delta = 0\\), the wall takes no shear from the soil, so for level backfill the thrust acts normal to the wall and is horizontal. A rough wall or a sloping backfill needs a modified analysis.</p><p>It also assumes a <em>homogeneous</em> backfill. A thick weak layer over dense sand changes strength and unit weight with depth, so one coefficient and one unit weight for the whole height can misrepresent both the pressures and the failure conditions. Each layer is treated with its own properties, applied to the vertical effective stress at that depth.</p><p><em>Coulomb's wedge theory</em> works instead with force equilibrium of trial soil wedges, and it handles wall friction, irregular backfill and surcharges. <em>Culmann's graphical construction</em> carries it out: trial wedges are compared on a force diagram, and for active pressure the critical wedge is the one that demands the maximum wall thrust. It has nothing to do with the buckling of structural columns.</p>",
            "example": {
              "title": "Illustrative example: a pressure jump at a layer boundary",
              "html": "<p>Suppose 3 m of weak soil with γ = 18 kN/m³ and φ' = 20 degrees overlies dense sand with φ' = 35 degrees, all dry. At the boundary \\(\\sigma_v' = 18 \\times 3 = 54\\) kPa.</p><ul><li>Upper layer, \\(K_a = 0.490\\): 0.490 × 54 = 26.5 kPa just above the boundary.</li><li>Lower layer, \\(K_a = 0.271\\): 0.271 × 54 = 14.6 kPa just below it.</li></ul><p>A single coefficient for the whole height would miss this step in the pressure diagram.</p>"
            },
            "points": [
              {
                "html": "Rankine's theory assumes the surface of the retaining wall to be smooth.",
                "sources": [
                  {
                    "id": "CAP4-02-00097",
                    "label": "p. 8; topic 2 point 88"
                  }
                ]
              },
              {
                "html": "Based on the assumptions of Rankine's theory, the soil mass is homogeneous.",
                "sources": [
                  {
                    "id": "CAP4-02-00086",
                    "label": "p. 8; topic 2 point 80"
                  }
                ]
              },
              {
                "html": "The Culmann graph is used in Coulomb's wedge theory.",
                "sources": [
                  {
                    "id": "CAP4-02-00091",
                    "label": "p. 8; topic 2 point 83"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00097",
                "label": "p. 8; topic 2 point 88"
              },
              {
                "id": "CAP4-02-00086",
                "label": "p. 8; topic 2 point 80"
              },
              {
                "id": "CAP4-02-00091",
                "label": "p. 8; topic 2 point 83"
              }
            ]
          },
          {
            "id": "cohesive-backfill-tension-cracks",
            "title": "Cohesive backfill: the square-root cohesion term and tension cracks",
            "html": "<p>For a backfill with both cohesion and friction, Rankine's active pressure gains a cohesion term that reduces the lateral effective pressure. That term contains the square root of \\(K_a\\), not \\(K_a\\) itself, and any pore-water pressure is added separately.</p><p>Near the top of the backfill, where the vertical effective stress is small, the expression becomes negative. Ordinary soil against a wall cannot reliably transmit that tension, so the negative zone marks potential separation, a <em>tension-crack</em> zone. It is not a tensile force drawing the wall toward the soil, nor a zone of passive failure.</p><p>A crack can fill with water, which then pushes on the wall with positive hydrostatic pressure. Crack-water pressure is assessed separately, and the algebraic negative value is never counted as a stabilizing design force.</p>",
            "formulas": [
              {
                "label": "Active pressure with cohesion",
                "tex": "\\sigma_{ha}' = K_a\\,\\sigma_v' - 2c'\\sqrt{K_a}"
              },
              {
                "label": "Depth of zero active pressure, dry uniform backfill",
                "tex": "z_0 = \\dfrac{2c'}{\\gamma\\sqrt{K_a}}",
                "where": "<p>From setting the pressure to zero with \\(\\sigma_v' = \\gamma z\\) and no surcharge.</p>"
              }
            ],
            "example": {
              "title": "Worked example: Ka = 0.25, c' = 10 kPa and 100 kPa vertical effective stress",
              "html": "\\[\\begin{aligned}\\sigma_{ha}' &amp;= 0.25 \\times 100 - 2 \\times 10 \\times 0.5 \\\\ &amp;= 25 - 10 = 15\\ \\text{kPa}\\end{aligned}\\]<p>Using \\(K_a\\) in place of \\(\\sqrt{K_a}\\) in the cohesion term would give 25 − 5 = 20 kPa, overstating the pressure. Water pressure, if present, is added to the 15 kPa.</p>"
            },
            "moreHtml": "<p>For a dry uniform backfill with γ = 18 kN/m³, c' = 10 kPa and \\(K_a = 0.25\\), the zero-pressure depth is \\(z_0 = 20/(18 \\times 0.5) = 2.22\\) m. Above it the ideal pressure is tensile and cracks may open; below it the pressure is compressive and grows with depth.</p>",
            "points": [
              {
                "html": "With \\(K_a = 0.25\\), c' = 10 kPa and 100 kPa vertical effective stress, the c'–φ' active lateral effective pressure is 25 − 10 = 15 kPa before water pressure.",
                "sources": [
                  {
                    "id": "CAP4-02-00089",
                    "label": "p. 8; topic 2 point 82"
                  }
                ]
              },
              {
                "html": "The active earth pressure in a cohesive soil is \\(K_a\\sigma_z - 2c\\sqrt{K_a}\\).",
                "sources": [
                  {
                    "id": "CAP4-02-00090",
                    "label": "p. 8; topic 2 point 82"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00089",
                "label": "p. 8; topic 2 point 82"
              },
              {
                "id": "CAP4-02-00090",
                "label": "p. 8; topic 2 point 82"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Sampler area ratio",
            "tex": "A_r = \\dfrac{D_o^2 - D_i^2}{D_i^2} \\times 100\\%"
          },
          {
            "label": "Cone semi-angle",
            "tex": "\\alpha = \\dfrac{\\theta_{\\text{apex}}}{2}"
          },
          {
            "label": "SPT dilatancy step",
            "tex": "N_d = 15 + 0.5\\,(N_c - 15)",
            "note": "Only for N<sub>c</sub> above 15 in saturated fine sand or nonplastic silt."
          },
          {
            "label": "Rankine active coefficient",
            "tex": "K_a = \\dfrac{1 - \\sin\\phi'}{1 + \\sin\\phi'}"
          },
          {
            "label": "Rankine passive coefficient",
            "tex": "K_p = \\dfrac{1 + \\sin\\phi'}{1 - \\sin\\phi'} = \\dfrac{1}{K_a}"
          },
          {
            "label": "At rest, ideal elastic soil",
            "tex": "K_0 = \\dfrac{\\nu}{1 - \\nu}"
          },
          {
            "label": "At rest, Jaky",
            "tex": "K_0 = 1 - \\sin\\phi'",
            "note": "Normally consolidated soil."
          },
          {
            "label": "Active failure plane",
            "tex": "\\alpha_f = 45^\\circ + \\dfrac{\\phi}{2}",
            "note": "Measured from the major principal plane."
          },
          {
            "label": "Active pressure with cohesion",
            "tex": "\\sigma_{ha}' = K_a\\,\\sigma_v' - 2c'\\sqrt{K_a}"
          },
          {
            "label": "Zero-pressure depth",
            "tex": "z_0 = \\dfrac{2c'}{\\gamma\\sqrt{K_a}}",
            "note": "Dry uniform backfill, no surcharge."
          }
        ],
        "cautions": [],
        "gaps": [
          "Boring methods such as wash, percussion and rotary drilling, trial pits and the content of a site-investigation report are not examined in these capsule points.",
          "Retaining-wall stability checks for overturning, sliding and base pressure, and methods of wall improvement, are not covered.",
          "Coulomb's closed-form coefficients for wall friction and sloping backfill are not given.",
          "SPT overburden and energy correction formulas are not quantified; only the dilatancy step is."
        ]
      },
      "ACiE0205": {
        "code": "ACiE0205",
        "questionCount": 21,
        "format": 2,
        "summary": "<p>This subchapter covers the choice between shallow and deep foundations and the main shallow forms: strip, combined and strap footings, rafts and compensated basements. The capsule questions test how each system carries load, first sizing of footing area and pier numbers, when combined, strap and raft foundations suit, what compensation does and does not achieve, and how site hazards and the ground datum control founding depth.</p>",
        "blocks": [
          {
            "id": "shallow-and-deep-systems",
            "title": "Shallow and deep foundation systems",
            "html": "<p>Foundations are grouped by how they pass load into the ground.</p><table><thead><tr><th scope='col'>Category</th><th scope='col'>Examples</th><th scope='col'>Load transfer</th></tr></thead><tbody><tr><th scope='row'>Shallow</th><td>isolated, strip, combined and strap footings; mat or raft</td><td>bearing over a broad base near the surface</td></tr><tr><th scope='row'>Deep</th><td>piles, drilled shafts, sunk wells</td><td>resistance developed at depth, below weak surface deposits</td></tr></tbody></table><p>A reinforced concrete raft that spreads most column loads directly onto near-surface ground, with no piles, remains a shallow foundation however large its plan area or heavy the building. A piled raft is a separate combined system, because its piles also carry load.</p><p>A <em>pile foundation</em> uses slender elements that resist load by shaft friction, by toe bearing or by both; reaching hard rock is not essential.</p><p>A single large-diameter pile under a column can be valid when its axial, lateral, moment, settlement, structural and construction-tolerance checks all pass. No rule requires three piles, or an even number, under a cap, and a single pile is never adequate automatically.</p>",
            "points": [
              {
                "html": "Mat foundation is a type of shallow foundation.",
                "sources": [
                  {
                    "id": "CAP4-02-00101",
                    "label": "p. 9; topic 2 point 92"
                  }
                ]
              },
              {
                "html": "Pile foundation is a deep foundation.",
                "sources": [
                  {
                    "id": "CAP4-02-00102",
                    "label": "p. 9; topic 2 point 93"
                  }
                ]
              },
              {
                "html": "Piles in a pile foundation are generally constructed in groups.",
                "sources": [
                  {
                    "id": "CAP4-02-00103",
                    "label": "p. 9; topic 2 point 94"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00101",
                "label": "p. 9; topic 2 point 92"
              },
              {
                "id": "CAP4-02-00102",
                "label": "p. 9; topic 2 point 93"
              },
              {
                "id": "CAP4-02-00103",
                "label": "p. 9; topic 2 point 94"
              }
            ]
          },
          {
            "id": "strip-and-preliminary-sizing",
            "title": "Strip footings and preliminary sizing from bearing pressure",
            "html": "<p>A continuous footing under a long load-bearing wall, much longer than it is wide, behaves as a <em>strip footing</em> away from its ends. Its load and bearing response are taken per unit length, and it bends mainly across its width, unlike an isolated pad that spreads one column load in two directions. A strap, by contrast, links separate footings.</p><p>A first plan area comes from average bearing pressure, with load and pressure on the same basis. When the allowable pressure is a gross value, the load must include the footing and the fill above it as well as the column load. Soil strength and settlement fix the allowable pressure; bending, shear and any nonuniform contact are checked afterwards.</p><p>The number of piers required for a column is 3.</p>",
            "formulas": [
              {
                "label": "Footing area on a gross basis",
                "tex": "A \\ge \\dfrac{P + W_f}{q_{a,\\text{gross}}}",
                "where": "<p>\\(P\\) is the column load, \\(W_f\\) the weight of footing and overlying fill, and \\(q_{a,\\text{gross}}\\) the gross allowable pressure.</p>"
              },
              {
                "label": "Preliminary number of piers or piles",
                "tex": "n \\ge \\dfrac{P}{Q_{\\text{allow}}}",
                "where": "<p>Round \\(n\\) up to the next whole number.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: footing area and pier count for a 1200 kN column",
              "html": "<p>With 120 kN of footing and fill and a gross allowable pressure of 150 kPa:</p>\\[A = \\dfrac{1200 + 120}{150} = 8.8\\ \\text{m}^2\\]<p>Leaving out the footing and fill gives 1200/150 = 8.0 m², which is too small.</p>"
            },
            "points": [
              {
                "html": "If the length of a footing is very large compared with its width, the type of footing used is strip footing.",
                "sources": [
                  {
                    "id": "CAP4-02-00001",
                    "label": "p. 6; topic 2 point 1"
                  }
                ]
              },
              {
                "html": "The gross area of a footing depends on the load from the superstructure, bearing capacity of the soil and type of soil.",
                "sources": [
                  {
                    "id": "CAP4-02-00104",
                    "label": "p. 9; topic 2 point 95"
                  }
                ]
              },
              {
                "html": "The number of piers required for a column is 3.",
                "sources": [
                  {
                    "id": "CAP4-02-00119",
                    "label": "p. 9; topic 2 point 108"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00001",
                "label": "p. 6; topic 2 point 1"
              },
              {
                "id": "CAP4-02-00104",
                "label": "p. 9; topic 2 point 95"
              },
              {
                "id": "CAP4-02-00119",
                "label": "p. 9; topic 2 point 108"
              }
            ]
          },
          {
            "id": "combined-and-strap-footings",
            "title": "Combined and strap footings for close or boundary columns",
            "html": "<p>A <em>combined footing</em> shares one spread base between two or more columns, even when the other columns of the building have separate footings. It is the natural remedy when the isolated bases needed under two nearby columns would overlap in plan. Keeping both independent designs would count the same soil twice, so a single base is proportioned for the resultant of the column loads.</p><p>A uniform average contact pressure is a consistent first idealization only when the resultant of the loads passes through the plan centroid of the base. Two equal loads placed at equal distances from opposite ends of a rectangle meet this condition.</p><p>A <em>strap footing</em> keeps separate bases and joins them with a rigid strap beam that is normally designed without soil support. It suits an edge column whose footing cannot be centred because of a boundary: the strap carries moment to an interior column's base and balances the eccentricity.</p>",
            "points": [
              {
                "html": "If there are two or more columns on one foundation, the type of foundation is combined footing.",
                "sources": [
                  {
                    "id": "CAP4-02-00108",
                    "label": "p. 9; topic 2 point 98"
                  }
                ]
              },
              {
                "html": "The type of footing preferred when two nearby separate footings are about to overlap is combined footing.",
                "sources": [
                  {
                    "id": "CAP4-02-00111",
                    "label": "p. 9; topic 2 point 100"
                  }
                ]
              },
              {
                "html": "When the two columns of a combined footing carry equal loads, the shape of footing used is rectangular.",
                "sources": [
                  {
                    "id": "CAP4-02-00113",
                    "label": "p. 9; topic 2 point 102"
                  }
                ]
              },
              {
                "html": "Strap footings are used in the foundation when the distance between the columns is long.",
                "sources": [
                  {
                    "id": "CAP4-02-00022",
                    "label": "p. 7; topic 2 point 19"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00108",
                "label": "p. 9; topic 2 point 98"
              },
              {
                "id": "CAP4-02-00111",
                "label": "p. 9; topic 2 point 100"
              },
              {
                "id": "CAP4-02-00113",
                "label": "p. 9; topic 2 point 102"
              },
              {
                "id": "CAP4-02-00022",
                "label": "p. 7; topic 2 point 19"
              }
            ]
          },
          {
            "id": "raft-foundations",
            "title": "Raft foundations: when to consider them, their forms and their limits",
            "html": "<p>When footings sized for heavy column loads on weak shallow soil would cover most of the building's plan, a <em>raft</em> is the first alternative to evaluate. It gives a continuous bearing area and can reduce differential movement, but it must still be checked for overall and differential settlement, flexure and punching.</p><p>Shrinking the pads to raise their contact pressure is no remedy.</p><p>A raft does not solve every settlement problem. A wide raft stresses the ground to a considerable depth, so a thick, highly compressible clay layer well below it can still consolidate. Settlement analysis may then point to ground improvement, load reduction or another foundation system.</p><p>Recognized mat forms include:</p><ul><li>a flat plate, uniform or thickened beneath columns for stiffness and punching resistance;</li><li>a beam-and-slab raft, with a grid of connecting beams;</li><li>a cellular or box raft, with enclosed cells.</li></ul>",
            "points": [
              {
                "html": "Mat foundation is provided when isolated footings would cover more than 50% of the building area.",
                "sources": [
                  {
                    "id": "CAP4-02-00105",
                    "label": "p. 9; topic 2 point 96"
                  }
                ]
              },
              {
                "html": "Mat foundation is provided when heavy loads have to be transferred to weak soil.",
                "sources": [
                  {
                    "id": "CAP4-02-00106",
                    "label": "p. 9; topic 2 point 96"
                  }
                ]
              },
              {
                "html": "Double flat plate thickened is not among the common types of mat foundation.",
                "sources": [
                  {
                    "id": "CAP4-02-00107",
                    "label": "p. 9; topic 2 point 97"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00105",
                "label": "p. 9; topic 2 point 96"
              },
              {
                "id": "CAP4-02-00106",
                "label": "p. 9; topic 2 point 96"
              },
              {
                "id": "CAP4-02-00107",
                "label": "p. 9; topic 2 point 97"
              }
            ]
          },
          {
            "id": "compensated-foundations",
            "title": "Compensated foundations: balancing excavated and added weight",
            "html": "<p>A basement lowers the net load on the ground because soil is removed before the building is added. In the gross-weight sense, compare the weight of the building plus its foundation with the weight of soil excavated over the same footprint:</p><ul><li><em>fully compensated</em>: the two weights are equal, so the net added gross load is zero;</li><li><em>partly compensated</em>: a positive net added weight remains;</li><li><em>overcompensated</em>: the structure weighs less than the soil removed.</li></ul><p>A basement alone does not decide the class; the weight comparison does.</p><p>Compensation balances loads; it does not guarantee zero movement. Excavation unloads the soil and can cause heave, construction then reloads it, groundwater acts on the basement, and spatial differences in stiffness produce differential movement even when the final average net load is small. Soil stiffness and drainage remain relevant and are assessed separately.</p>",
            "formulas": [
              {
                "label": "Net added gross load",
                "tex": "\\Delta Q = W_{\\text{structure}} - W_{\\text{soil}}",
                "where": "<p>\\(W_{\\text{structure}}\\) is the building plus foundation weight; \\(W_{\\text{soil}}\\) is the weight of soil excavated over the same footprint.</p>"
              }
            ],
            "example": {
              "title": "Worked example: 9000 kN excavated, 9000 kN added",
              "html": "<p>\\(\\Delta Q = 9000 - 9000 = 0\\) kN, so in the gross-weight sense the foundation is fully compensated. Had the building and foundation weighed 10000 kN, the positive 1000 kN balance would make it partly compensated.</p>"
            },
            "points": [
              {
                "html": "A foundation is termed fully compensated when the total weight of the excavated soil is equal to 100% of the building weight.",
                "sources": [
                  {
                    "id": "CAP4-02-00095",
                    "label": "p. 8; topic 2 point 87"
                  }
                ]
              },
              {
                "html": "When the total weight of the excavated soil is equal to the weight of the building, the foundation is termed fully compensated.",
                "sources": [
                  {
                    "id": "CAP4-02-00096",
                    "label": "p. 8; topic 2 point 87"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00095",
                "label": "p. 8; topic 2 point 87"
              },
              {
                "id": "CAP4-02-00096",
                "label": "p. 8; topic 2 point 87"
              }
            ]
          },
          {
            "id": "depth-hazards-open-foundations",
            "title": "Depth hazards and open spread foundations for bridge piers",
            "html": "<p>Several hazards can set how deep a foundation must be placed. They are considered together, rather than choosing embedment from bearing pressure alone.</p><ul><li><em>Scour</em> can strip away the river-bed material that supports a foundation.</li><li><em>Frost heave</em> can lift footings placed within the frost-active zone of frost-susceptible ground.</li><li>Organic <em>topsoil</em> is usually compressible and unsuitable for bearing.</li></ul><p>A bridge pier can stand on an <em>open spread foundation</em>, a spread base built in an exposed excavation. That suits a site where firm material is found not far below the assessed scour depth, the excavation is stable and it can be dewatered safely.</p>",
            "points": [
              {
                "html": "The depth of foundation is determined by the scour depth, frost depth and top soil.",
                "sources": [
                  {
                    "id": "CAP4-02-00115",
                    "label": "p. 9; topic 2 point 104"
                  }
                ]
              },
              {
                "html": "The open foundation is used for bridges.",
                "sources": [
                  {
                    "id": "CAP4-02-00114",
                    "label": "p. 9; topic 2 point 103"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00115",
                "label": "p. 9; topic 2 point 104"
              },
              {
                "id": "CAP4-02-00114",
                "label": "p. 9; topic 2 point 103"
              }
            ]
          },
          {
            "id": "competent-support-expansive-clay",
            "title": "Founding depth: competent support and seasonal movement in expansive clay",
            "html": "<p>Depth is a means, not an end. A footing base 500 mm below ground that still lies in loose uncontrolled fill has no competent support. A dense surface crust, a colour match with natural soil or a satisfactory shear safety factor does not change that, and settlement must still be checked. The founding level must reach, or create by improvement, support suited to the load and the movement limits.</p><p>In expansive clay, seasonal movement depends on mineralogy, moisture fluctuation, vegetation and the depth of the <em>active zone</em>, the upper layer whose moisture content changes with the seasons. A nominal embedment such as 0.9 m copied from a revision note cannot establish protection from that movement or adequate bearing.</p><p>The information that matters is the active moisture-change depth and measured shrink–swell behaviour. A compaction optimum, a saturated water content or the current water table cannot stand in for them.</p>",
            "points": [
              {
                "html": "The minimum depth of footing below ground level is 500 mm.",
                "sources": [
                  {
                    "id": "CAP4-02-00117",
                    "label": "p. 9; topic 2 point 106"
                  }
                ]
              },
              {
                "html": "The minimum depth of foundation in clayey soil is 0.9 m.",
                "sources": [
                  {
                    "id": "CAP4-02-00112",
                    "label": "p. 9; topic 2 point 101"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00117",
                "label": "p. 9; topic 2 point 106"
              },
              {
                "id": "CAP4-02-00112",
                "label": "p. 9; topic 2 point 101"
              }
            ]
          },
          {
            "id": "numerical-depth-checks",
            "title": "Numerical depth checks: Rankine's expression and the final ground datum",
            "html": "<p>A historical expression attributed to Rankine estimates a minimum depth for a shallow footing from the bearing pressure \\(p\\), the soil unit weight \\(\\gamma\\) and the friction angle \\(\\phi\\). It is an idealization and does not replace checks for competent strata, scour, frost, groundwater and settlement.</p><p>Any stated embedment requirement must be measured from the correct datum, normally the final adjacent ground level. Lowering the surrounding ground by regrading reduces the embedment by the same amount; it never increases it. Meeting a nominal minimum, even when measured correctly, still does not prove bearing or settlement adequacy.</p>",
            "formulas": [
              {
                "label": "Rankine minimum depth of a shallow footing",
                "tex": "D_f = \\dfrac{p}{\\gamma}\\left(\\dfrac{1 - \\sin\\phi}{1 + \\sin\\phi}\\right)^2"
              },
              {
                "label": "Embedment after regrading",
                "tex": "D_{\\text{final}} = D_{\\text{original}} - \\Delta z",
                "where": "<p>\\(D_{\\text{original}}\\) is the base depth below the original ground and \\(\\Delta z\\) the amount the ground is lowered.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: a Rankine depth and a regraded site",
              "html": "<p>Rankine depth with p = 180 kPa, γ = 20 kN/m³ and φ = 30 degrees:</p>\\[\\begin{aligned} D_f &amp;= \\dfrac{180}{20}\\left(\\dfrac{0.5}{1.5}\\right)^2 \\\\ &amp;= 9 \\times \\dfrac{1}{9} = 1.0\\ \\text{m}\\end{aligned}\\]<p>Regrading: a base 800 mm below the original ground, with that ground later lowered by 400 mm, ends 800 − 400 = 400 mm below final ground. Against a stated 500 mm project minimum it is 100 mm short.</p>"
            },
            "moreHtml": "<p>Rankine's argument treats the soil just below the footing as pushing outward in the active state, with lateral pressure \\(pK_a\\), resisted by the passive pressure of the soil beside the footing, \\(\\gamma D_f K_p\\). Setting the two equal and using \\(K_p = 1/K_a\\) gives \\(D_f = (p/\\gamma)\\,K_a^2\\), the expression above.</p>",
            "points": [
              {
                "html": "Rankine's depth expression with \\(p = 180\\) kPa, \\(\\gamma = 20\\) kN/m<sup>3</sup> and \\(\\phi = 30^\\circ\\) gives a minimum foundation depth of 1.0 m.",
                "sources": [
                  {
                    "id": "CAP4-02-00167",
                    "label": "p. 10; topic 2 point 147"
                  }
                ]
              },
              {
                "html": "The minimum recommended depth of a shallow foundation in normal soil conditions to ensure stability is 500 mm.",
                "sources": [
                  {
                    "id": "CAP4-02-00171",
                    "label": "p. 10; topic 2 point 151"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00167",
                "label": "p. 10; topic 2 point 147"
              },
              {
                "id": "CAP4-02-00171",
                "label": "p. 10; topic 2 point 151"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Footing area, gross basis",
            "tex": "A \\ge \\dfrac{P + W_f}{q_{a,\\text{gross}}}",
            "note": "Gross load includes footing and fill weight."
          },
          {
            "label": "Preliminary pier or pile count",
            "tex": "n \\ge \\dfrac{P}{Q_{\\text{allow}}}",
            "note": "Round up, then check layout, group action, lateral load, cap and settlement."
          },
          {
            "label": "Net added gross load",
            "tex": "\\Delta Q = W_{\\text{structure}} - W_{\\text{soil}}",
            "note": "Zero for full compensation, positive for partial and negative for overcompensation."
          },
          {
            "label": "Rankine minimum depth",
            "tex": "D_f = \\dfrac{p}{\\gamma}\\left(\\dfrac{1 - \\sin\\phi}{1 + \\sin\\phi}\\right)^2",
            "note": "A historical idealization only."
          },
          {
            "label": "Embedment after regrading",
            "tex": "D_{\\text{final}} = D_{\\text{original}} - \\Delta z"
          }
        ],
        "cautions": [],
        "gaps": [
          "Structural design of footings and rafts, including bending, one-way shear, punching shear and reinforcement, is outside these capsule points.",
          "Well foundations, caissons and drilled shafts are only named as alternatives; their construction and design are not explained.",
          "Site investigation for foundation selection is treated under exploration, and cost comparison between foundation types is not covered."
        ]
      },
      "ACiE0206": {
        "code": "ACiE0206",
        "questionCount": 37,
        "format": 2,
        "summary": "<p>This subchapter covers how much pressure the ground can resist and how far foundations settle. The capsule questions test stress history and OCR, primary consolidation and the oedometer, degree of consolidation and drainage path, elastic immediate settlement, settlement criteria, Terzaghi's equation for strip, square, circular and rectangular footings, net and allowable pressures, groundwater corrections, failure modes, plate load tests, subgrade modulus, raft contact pressure and eccentric loading.</p>",
        "blocks": [
          {
            "id": "stress-history-ocr",
            "title": "Stress history: preconsolidation stress, OCR and recompression",
            "html": "<p>A clay keeps a record of the largest vertical effective stress it has carried, its <em>preconsolidation stress</em> \\(\\sigma_p'\\). The <em>overconsolidation ratio</em> compares that maximum with the present vertical effective stress: OCR = 1 means normally consolidated, and OCR above 1 means overconsolidated. Work with effective stresses throughout, because pore-pressure changes alter the effective history even when total stress is known.</p><p>Unloading lowers the present effective stress but does not erase the past maximum. Erosion of thick overburden, or excavation, therefore leaves a clay overconsolidated once groundwater conditions settle. These are common mechanical causes of overconsolidation, not routes to underconsolidation.</p><p>When an overconsolidated clay is reloaded and the final effective stress stays below \\(\\sigma_p'\\), it follows the stiffer <em>recompression branch</em> and generally settles less than a comparable normally consolidated clay under the same increment. Settlement is not zero, and loading beyond \\(\\sigma_p'\\) adds virgin compression, so overconsolidation alone does not guarantee small settlement.</p>",
            "formulas": [
              {
                "label": "Overconsolidation ratio",
                "tex": "\\text{OCR} = \\dfrac{\\sigma_p'}{\\sigma_0'}",
                "where": "<p>\\(\\sigma_p'\\) is the maximum past and \\(\\sigma_0'\\) the present vertical effective stress.</p>"
              }
            ],
            "example": {
              "title": "Worked example: 240 kPa in the past, 120 kPa now",
              "html": "<p>OCR = 240/120 = 2, which exceeds 1, so the layer is overconsolidated. Inverting the ratio to 0.5 would reverse its meaning, and a value of 1 would describe a normally consolidated clay.</p>"
            },
            "points": [
              {
                "html": "The soil which has been acted upon by a stress greater than its present stress is called over consolidated.",
                "sources": [
                  {
                    "id": "CAP4-02-00031",
                    "label": "p. 7; topic 2 point 28"
                  }
                ]
              },
              {
                "html": "A clay is over consolidated if it has been subjected to a pressure in excess of its present pressure.",
                "sources": [
                  {
                    "id": "CAP4-02-00036",
                    "label": "p. 7; topic 2 point 33"
                  }
                ]
              },
              {
                "html": "When a soil is over-consolidated, it results in less settlement.",
                "sources": [
                  {
                    "id": "CAP4-02-00155",
                    "label": "p. 10; topic 2 point 137"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00031",
                "label": "p. 7; topic 2 point 28"
              },
              {
                "id": "CAP4-02-00036",
                "label": "p. 7; topic 2 point 33"
              },
              {
                "id": "CAP4-02-00155",
                "label": "p. 10; topic 2 point 137"
              }
            ]
          },
          {
            "id": "primary-consolidation-oedometer",
            "title": "Primary consolidation, the oedometer and the water-table position",
            "html": "<p>When a saturated clay is loaded quickly, the added load is first carried by excess pore-water pressure. <em>Primary consolidation</em> is the time-dependent process that follows at constant total stress: water drains from the pores, the excess pore pressure dissipates, the effective stress rises by the same amount and the soil skeleton compresses. Water is expelled from the voids; the voids themselves are not expelled. Compaction, by contrast, rapidly expels air.</p><p>The <em>oedometer</em> reproduces the process in the laboratory. A specimen confined laterally in a ring is loaded in successive vertical increments while its axial deformation and the time it takes are recorded, giving compressibility and consolidation-rate parameters. Because lateral strain is prevented, the test does not directly give an unconstrained Young's modulus.</p><p>Consolidation settlement is calculated for a clay layer with the water table at the ground surface.</p>",
            "formulas": [
              {
                "label": "Effective stress",
                "tex": "\\sigma' = \\sigma - u",
                "where": "<p>With total stress \\(\\sigma\\) held constant, \\(\\sigma'\\) rises as the excess pore pressure \\(u\\) falls.</p>"
              }
            ],
            "points": [
              {
                "html": "Consolidation settlement occurs due to the expulsion of water from the voids.",
                "sources": [
                  {
                    "id": "CAP4-02-00044",
                    "label": "p. 7; topic 2 point 40"
                  }
                ]
              },
              {
                "html": "The oedometer is used for the consolidation test.",
                "sources": [
                  {
                    "id": "CAP4-02-00046",
                    "label": "p. 7; topic 2 point 42"
                  }
                ]
              },
              {
                "html": "Consolidation settlement is calculated for a clay layer with the water table at the ground surface.",
                "sources": [
                  {
                    "id": "CAP4-02-00034",
                    "label": "p. 7; topic 2 point 31"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00044",
                "label": "p. 7; topic 2 point 40"
              },
              {
                "id": "CAP4-02-00046",
                "label": "p. 7; topic 2 point 42"
              },
              {
                "id": "CAP4-02-00034",
                "label": "p. 7; topic 2 point 31"
              }
            ]
          },
          {
            "id": "degree-of-consolidation-drainage",
            "title": "Degree of consolidation and the length of the drainage path",
            "html": "<p>The <em>average degree of consolidation</em> \\(U\\) is the primary-consolidation settlement reached at time \\(t\\) divided by the final primary-consolidation settlement. Both must refer to primary consolidation alone, excluding immediate settlement and secondary compression. Inverting the ratio, or working with the settlement still to come, describes a different quantity.</p><p>The rate depends on the <em>drainage-path length</em> \\(H_{dr}\\), the longest distance pore water must travel to a free-draining boundary. With drainage at both faces it is half the layer thickness; with a single drainage face it is the whole thickness. \\(H_{dr}\\) enters the time factor squared, so doubling the drainage path makes a given degree of consolidation take four times as long.</p><p>An oedometer specimen about 20 mm thick is a typical size, not a required dimension; calculations use the thickness actually tested.</p>",
            "formulas": [
              {
                "label": "Average degree of consolidation",
                "tex": "U = \\dfrac{S_c(t)}{S_{c,\\text{final}}}"
              },
              {
                "label": "Time factor",
                "tex": "T_v = \\dfrac{c_v\\, t}{H_{dr}^2}",
                "where": "<p>\\(c_v\\) is the coefficient of consolidation and \\(t\\) the elapsed time.</p>"
              },
              {
                "label": "Drainage path, drained at both faces",
                "tex": "H_{dr} = \\dfrac{H}{2}"
              }
            ],
            "example": {
              "title": "Worked examples: 36 of 60 mm, and a 20 mm specimen draining both ways",
              "html": "<p>Primary settlement of 36 mm out of a final 60 mm gives \\(U = 36/60 = 0.60\\), that is 60%. An oedometer specimen 20 mm thick draining through porous stones at top and bottom has \\(H_{dr} = 20/2 = 10\\) mm; with only one drainage face it would be the full 20 mm.</p>"
            },
            "points": [
              {
                "html": "The ratio of settlement at any time \\(t\\) to the final settlement is known as the degree of consolidation.",
                "sources": [
                  {
                    "id": "CAP4-02-00048",
                    "label": "p. 7; topic 2 point 44"
                  }
                ]
              },
              {
                "html": "The typical height of a soil sample used in an oedometer test is 20 mm.",
                "sources": [
                  {
                    "id": "CAP4-02-00053",
                    "label": "p. 7; topic 2 point 49"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00048",
                "label": "p. 7; topic 2 point 44"
              },
              {
                "id": "CAP4-02-00053",
                "label": "p. 7; topic 2 point 49"
              }
            ]
          },
          {
            "id": "immediate-settlement",
            "title": "Immediate settlement from elastic theory",
            "html": "<p>A footing on saturated clay distorts as soon as it is loaded, before appreciable drainage. This <em>immediate settlement</em> can occur with little volume change and is distinct from the primary consolidation that follows and from long-term secondary compression.</p><p>A first estimate treats the ground as an elastic half-space. The stiffness, Poisson's ratio and influence factor must suit the geometry, the footing rigidity, the drainage condition and the strain range; for rapid loading of saturated clay that means an undrained stiffness.</p><p>The Poisson factor is \\(1 - \\nu^2\\), not \\(1 + \\nu^2\\), and the influence factor \\(I\\) depends on footing shape, rigidity and the point where settlement is wanted.</p>",
            "formulas": [
              {
                "label": "Elastic immediate settlement",
                "tex": "S_i = \\dfrac{q B (1 - \\nu^2)\\, I}{E_s}",
                "where": "<p>\\(q\\) is contact pressure, \\(B\\) width, \\(\\nu\\) Poisson's ratio, \\(I\\) the influence factor and \\(E_s\\) the soil modulus.</p>"
              }
            ],
            "example": {
              "title": "Worked example: 100 kPa on a 2 m wide footing",
              "html": "<p>With \\(\\nu = 0.30\\), \\(I = 1.0\\) and \\(E_s = 20\\,000\\) kPa, the factor is 1 − 0.09 = 0.91:</p>\\[\\begin{aligned} S_i &amp;= \\dfrac{100 \\times 2 \\times 0.91 \\times 1.0}{20\\,000} \\\\ &amp;= 0.0091\\ \\text{m} \\end{aligned}\\]<p>That is 9.1 mm. Writing the factor as \\(1 + \\nu^2\\) would give 10.9 mm, an overestimate.</p>"
            },
            "points": [
              {
                "html": "The immediate settlement can be computed from an expression based on the theory of elasticity.",
                "sources": [
                  {
                    "id": "CAP4-02-00035",
                    "label": "p. 7; topic 2 point 32"
                  }
                ]
              },
              {
                "html": "With q = 100 kPa, B = 2 m, ν = 0.30, I = 1.0 and a 20000 kPa modulus, the elastic half-space estimate gives an immediate settlement of 9.1 mm.",
                "sources": [
                  {
                    "id": "CAP4-02-00163",
                    "label": "p. 10; topic 2 point 144"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00035",
                "label": "p. 7; topic 2 point 32"
              },
              {
                "id": "CAP4-02-00163",
                "label": "p. 10; topic 2 point 144"
              }
            ]
          },
          {
            "id": "settlement-criteria",
            "title": "Settlement criteria: total, differential and raft tolerance",
            "html": "<p>A predicted settlement is judged against a criterion specified for the particular structure, foundation type and soil. As per IS code, the maximum permissible settlement is 40 mm for an isolated footing on sand and 65 mm for one on clay.</p><p>Exceeding a total-settlement limit is a serviceability noncompliance, not a shear failure, and adequate bearing capacity does not rescue it. Passing the total limit is not the whole story: differential settlement and angular distortion are separate checks, and the margin left under a total limit is not a permissible differential settlement.</p><p>Guidance sometimes allows rafts on clay more total settlement than isolated footings. That reflects greater tolerance of uniform movement and the raft's ability to redistribute load, always subject to distortion limits. It neither accepts differential movement automatically nor shows that a raft eliminates it, and it says nothing about ultimate bearing capacity.</p>",
            "example": {
              "title": "Worked comparisons against stated project limits",
              "html": "<ul><li>Limit 40 mm, prediction 45 mm: the criterion is exceeded by 45 − 40 = 5 mm, a serviceability shortfall rather than a bearing failure.</li><li>Limit 65 mm, prediction 60 mm: the total check passes with 65 − 60 = 5 mm to spare, but differential and distortion checks are still outstanding.</li></ul>"
            },
            "points": [
              {
                "html": "As per IS code, the maximum permissible settlement for an isolated foundation on sand is 40 mm.",
                "sources": [
                  {
                    "id": "CAP4-02-00116",
                    "label": "p. 9; topic 2 point 105"
                  }
                ]
              },
              {
                "html": "As per IS code, the maximum permissible settlement for an isolated foundation on clay is 65 mm.",
                "sources": [
                  {
                    "id": "CAP4-02-00145",
                    "label": "p. 10; topic 2 point 129"
                  }
                ]
              },
              {
                "html": "The permissible settlement is relatively higher for a mat foundation on clay.",
                "sources": [
                  {
                    "id": "CAP4-02-00158",
                    "label": "p. 10; topic 2 point 140"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00116",
                "label": "p. 9; topic 2 point 105"
              },
              {
                "id": "CAP4-02-00145",
                "label": "p. 10; topic 2 point 129"
              },
              {
                "id": "CAP4-02-00158",
                "label": "p. 10; topic 2 point 140"
              }
            ]
          },
          {
            "id": "terzaghi-footing-shapes",
            "title": "Terzaghi's equation for strip, square and circular footings",
            "html": "<p>Terzaghi's classical bearing-capacity equation adds three resistance terms: cohesion, the surcharge of soil above base level and the self-weight of soil in the failure zone. Shape coefficients modify the first and last terms; the surcharge term is the same for all three shapes.</p><table><thead><tr><th scope='col'>Shape</th><th scope='col'>Cohesion term</th><th scope='col'>Unit-weight term</th></tr></thead><tbody><tr><th scope='row'>Strip, width B</th><td>\\(cN_c\\)</td><td>\\(0.5\\gamma B N_\\gamma\\)</td></tr><tr><th scope='row'>Square, side B</th><td>\\(1.3cN_c\\)</td><td>\\(0.4\\gamma B N_\\gamma\\)</td></tr><tr><th scope='row'>Circle, diameter B</th><td>\\(1.3cN_c\\)</td><td>\\(0.3\\gamma B N_\\gamma\\)</td></tr></tbody></table><p>\\(B\\) must multiply \\(\\gamma\\) in the last term, or that term lacks the units of pressure. The factors \\(N_c\\), \\(N_q\\) and \\(N_\\gamma\\) depend on φ and must come from one consistent table; mixing rows, shapes or formulations changes the result.</p><p>For undrained clay with \\(\\phi_u = 0\\), this formulation uses \\(N_c = 5.7\\), \\(N_q = 1\\) and \\(N_\\gamma = 0\\). The value 5.14 belongs to a different ideal strip solution and is not mixed in.</p>",
            "formulas": [
              {
                "label": "Terzaghi, strip footing",
                "tex": "q_u = cN_c + qN_q + 0.5\\gamma B N_\\gamma"
              },
              {
                "label": "Terzaghi, square footing",
                "tex": "q_u = 1.3cN_c + qN_q + 0.4\\gamma B N_\\gamma"
              },
              {
                "label": "Terzaghi, circular footing of diameter B",
                "tex": "q_u = 1.3cN_c + qN_q + 0.3\\gamma B N_\\gamma"
              },
              {
                "label": "Undrained strip, φ = 0",
                "tex": "q_u = 5.7\\,c_u + q"
              }
            ],
            "example": {
              "title": "Worked examples: square, circle and undrained strip",
              "html": "<p>Inputs: c' = 10 kPa, q' = 18 kPa, γ = 18 kN/m³, B = 2 m and the rounded 20 degree row \\(N_c = 17.7\\), \\(N_q = 7.4\\), \\(N_\\gamma = 5\\), with groundwater well below the failure zone.</p><table><thead><tr><th scope='col'>Term, kPa</th><th scope='col'>Square</th><th scope='col'>Circle</th></tr></thead><tbody><tr><th scope='row'>Cohesion</th><td>1.3 × 10 × 17.7 = 230.1</td><td>230.1</td></tr><tr><th scope='row'>Surcharge</th><td>18 × 7.4 = 133.2</td><td>133.2</td></tr><tr><th scope='row'>Unit weight</th><td>0.4 × 18 × 2 × 5 = 72</td><td>0.3 × 18 × 2 × 5 = 54</td></tr><tr><th scope='row'>Gross total</th><td>435.3</td><td>417.3</td></tr></tbody></table><p>Undrained strip with \\(c_u = 20\\) kPa and 40 kPa total overburden at base level: 5.7 × 20 + 40 = 154 kPa gross, or 114 kPa net.</p>"
            },
            "points": [
              {
                "html": "A strip on undrained \\(\\phi_u = 0\\) clay with \\(c_u\\) = 20 kPa and 40 kPa overburden has \\(q_u = 5.7c_u + q\\) = 154 kPa gross, 114 kPa net.",
                "sources": [
                  {
                    "id": "CAP4-02-00120",
                    "label": "p. 9; topic 2 point 109"
                  }
                ]
              },
              {
                "html": "Terzaghi's square-footing equation with \\(c' = 10\\) kPa, \\(\\phi' = 20^\\circ\\), \\(q' = 18\\) kPa, \\(\\gamma = 18\\) kN/m<sup>3</sup>, \\(B = 2\\) m, \\(N_c = 17.7\\), \\(N_q = 7.4\\) and \\(N_\\gamma = 5\\) gives a gross ultimate pressure of 435.3 kPa.",
                "sources": [
                  {
                    "id": "CAP4-02-00122",
                    "label": "p. 9; topic 2 point 111"
                  }
                ]
              },
              {
                "html": "The bearing capacity of a circular footing is calculated as \\(q_u = 1.3cN_c\\) \\(+\\,\\gamma DN_q\\) \\(+\\,0.3\\gamma BN_\\gamma\\).",
                "sources": [
                  {
                    "id": "CAP4-02-00126",
                    "label": "p. 9; topic 2 point 114"
                  }
                ]
              },
              {
                "html": "For a circular footing of diameter 2 m with \\(c' = 10\\) kPa, \\(\\phi' = 20^\\circ\\), \\(q' = 18\\) kPa, \\(\\gamma = 18\\) kN/m<sup>3</sup>, \\(N_c = 17.7\\), \\(N_q = 7.4\\) and \\(N_\\gamma = 5\\), Terzaghi's equation gives a gross ultimate pressure of 417.3 kPa.",
                "sources": [
                  {
                    "id": "CAP4-02-00127",
                    "label": "p. 9; topic 2 point 114"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00120",
                "label": "p. 9; topic 2 point 109"
              },
              {
                "id": "CAP4-02-00122",
                "label": "p. 9; topic 2 point 111"
              },
              {
                "id": "CAP4-02-00126",
                "label": "p. 9; topic 2 point 114"
              },
              {
                "id": "CAP4-02-00127",
                "label": "p. 9; topic 2 point 114"
              }
            ]
          },
          {
            "id": "rectangular-net-allowable",
            "title": "Rectangular footings, net ultimate capacity and the governing allowable pressure",
            "html": "<p>A common textbook interpolation extends Terzaghi's equation to a rectangle of width \\(B\\) and length \\(L\\). The cohesion term is multiplied by \\(1 + 0.3B/L\\) and the unit-weight term by \\(1 - 0.2B/L\\). At \\(B/L = 1\\) these recover the square coefficients 1.3 and 0.5 × 0.8 = 0.4; as \\(B/L\\) approaches zero they recover the strip.</p><p>The <em>net</em> ultimate pressure subtracts the overburden \\(q\\) already present at base level from the gross value, which turns \\(qN_q\\) into \\(q(N_q - 1)\\).</p><p>The <em>allowable bearing pressure</em> must satisfy both shear and settlement. Divide the net ultimate pressure by the shear factor of safety, compare the result with the net pressure that meets the settlement limit, and adopt the smaller. Keep net and gross bases consistent, and do not apply the shear factor again to the settlement value.</p>",
            "formulas": [
              {
                "label": "Net ultimate pressure, rectangular footing",
                "tex": "\\begin{aligned} q_{nu} &= (1 + 0.3B/L)\\,cN_c \\\\ &\\quad + q(N_q - 1) \\\\ &\\quad + 0.5\\gamma B N_\\gamma (1 - 0.2B/L) \\end{aligned}"
              },
              {
                "label": "Governing net allowable pressure",
                "tex": "q_{na} = \\min\\left(\\dfrac{q_{nu}}{F},\\ q_{ns}\\right)",
                "where": "<p>\\(F\\) is the shear factor of safety and \\(q_{ns}\\) the net pressure that meets the settlement limit.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: a rectangle with B/L = 0.5 and a settlement-governed design",
              "html": "<ol><li>Cohesion term: (1 + 0.3 × 0.5) × 200 = 1.15 × 200 = 230 kPa.</li><li>Net surcharge term: 18 × (10 − 1) = 162 kPa.</li><li>Unit-weight term: 90 × (1 − 0.2 × 0.5) = 90 × 0.9 = 81 kPa.</li><li>Net ultimate pressure: 230 + 162 + 81 = 473 kPa; adding back q = 18 kPa gives 491 kPa gross.</li></ol><p>Allowable pressure: a net ultimate of 450 kPa with F = 3 gives 150 kPa for shear, but the settlement limit allows only 110 kPa, so 110 kPa governs.</p>"
            },
            "points": [
              {
                "html": "Terzaghi's net ultimate bearing capacity of a rectangular footing of width \\(B\\) and length \\(L\\) is \\((1 + 0.3\\tfrac{B}{L})\\,cN_c\\) \\(+\\,q(N_q - 1)\\) \\(+\\,0.5\\gamma BN_\\gamma(1 - 0.2\\tfrac{B}{L})\\).",
                "sources": [
                  {
                    "id": "CAP4-02-00132",
                    "label": "p. 9; topic 2 point 119"
                  }
                ]
              },
              {
                "html": "With B/L = 0.5, cN<sub>c</sub> = 200 kPa, q = 18 kPa, N<sub>q</sub> = 10 and a 90 kPa unit-weight term, the net ultimate pressure is 473 kPa (491 kPa gross).",
                "sources": [
                  {
                    "id": "CAP4-02-00133",
                    "label": "p. 9; topic 2 point 119"
                  }
                ]
              },
              {
                "html": "A net ultimate 450 kPa with safety factor 3 gives a shear-safe 150 kPa; the 110 kPa settlement-based pressure is lower, so 110 kPa governs.",
                "sources": [
                  {
                    "id": "CAP4-02-00129",
                    "label": "p. 9; topic 2 point 116"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00132",
                "label": "p. 9; topic 2 point 119"
              },
              {
                "id": "CAP4-02-00133",
                "label": "p. 9; topic 2 point 119"
              },
              {
                "id": "CAP4-02-00129",
                "label": "p. 9; topic 2 point 116"
              }
            ]
          },
          {
            "id": "groundwater-bearing-capacity",
            "title": "Groundwater in drained bearing-capacity calculations",
            "html": "<p>Groundwater lowers effective stress, and with it drained bearing resistance. Which terms change depends on where the water table lies.</p><ul><li>Water above the base: the effective overburden at base level, which feeds the \\(N_q\\) term, and the effective unit weight in the failure zone, which feeds the \\(N_\\gamma\\) term, must both be reconsidered.</li><li>Water within about one footing width below the base: the conventional correction affects chiefly the \\(N_\\gamma\\) term, interpolating linearly between the submerged and full unit weights.</li><li>Water deeper than about \\(B\\) below the base: the conventional correction is no longer applied.</li></ul><p>The B-deep zone is a convention for the unit-weight term, not a sharp physical cutoff for every groundwater effect. Adjusting only the cohesion term, the plan area or the safety factor misses the effective-stress changes.</p>",
            "formulas": [
              {
                "label": "Average unit weight, water within B below the base",
                "tex": "\\gamma_{\\text{eff}} = \\gamma' + \\dfrac{z_w}{B}\\,(\\gamma - \\gamma')",
                "where": "<p>\\(z_w\\) is the depth of the water table below the base, between 0 and \\(B\\).</p>"
              }
            ],
            "example": {
              "title": "Worked example: a 2 m footing with water 1 m below its base",
              "html": "\\[\\begin{aligned} \\gamma_{\\text{eff}} &amp;= 10 + \\dfrac{1}{2}\\,(18 - 10) \\\\ &amp;= 14\\ \\text{kN/m}^3 \\end{aligned}\\]<p>Half of the B-deep zone lies above water and half below, so the average falls midway between the submerged 10 and the moist 18 kN/m³.</p>"
            },
            "points": [
              {
                "html": "In Terzaghi's bearing capacity theory, the water table correction should be applied when the water table is within a depth equal to the footing width B below the footing.",
                "sources": [
                  {
                    "id": "CAP4-02-00058",
                    "label": "p. 7; topic 2 point 54"
                  }
                ]
              },
              {
                "html": "In Terzaghi's bearing capacity theory, no water table correction is needed when the water table lies deeper than the footing width B below the footing.",
                "sources": [
                  {
                    "id": "CAP4-02-00059",
                    "label": "p. 7; topic 2 point 54"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00058",
                "label": "p. 7; topic 2 point 54"
              },
              {
                "id": "CAP4-02-00059",
                "label": "p. 7; topic 2 point 54"
              }
            ]
          },
          {
            "id": "what-capacity-depends-on",
            "title": "What bearing capacity depends on: soil state, footing size and shape, not demand",
            "html": "<p>Bearing capacity is a <em>resistance</em> of the soil and footing together. It depends on soil strength, which reflects density and fabric as well as grain size; on the stress conditions, which groundwater changes through effective stress; and on footing width, shape and embedment, which shape the failure mechanism. Sands with identical median grain size can still differ in density, groundwater and footing shape, and then in capacity.</p><p>Footing size enters explicitly. For an ideal surface strip on cohesionless soil with no cohesion and no surcharge, only the unit-weight term remains, and it is proportional to \\(B\\).</p><p>Applied load is <em>demand</em>. Doubling a centred service load on an unchanged footing doubles the applied pressure \\(P/A\\) and cuts the margin of safety, but it does not raise the modelled resistance to match.</p><p>Rock needs the same care.</p>",
            "formulas": [
              {
                "label": "Surface strip on cohesionless soil",
                "tex": "q_u = 0.5\\,\\gamma B N_\\gamma",
                "where": "<p>With \\(c' = 0\\) and no surcharge, \\(q_u\\) is proportional to \\(B\\).</p>"
              }
            ],
            "points": [
              {
                "html": "The bearing capacity of a soil depends upon the grain size of the soil, size of the footing and shape of the footing.",
                "sources": [
                  {
                    "id": "CAP4-02-00124",
                    "label": "p. 9; topic 2 point 113"
                  }
                ]
              },
              {
                "html": "Besides the grain size of the soil and the size of the footing, the bearing capacity of a soil depends upon the shape of the footing.",
                "sources": [
                  {
                    "id": "CAP4-02-00125",
                    "label": "p. 9; topic 2 point 113"
                  }
                ]
              },
              {
                "html": "The bearing capacity of soil does not depend upon the load from the structure.",
                "sources": [
                  {
                    "id": "CAP4-02-00157",
                    "label": "p. 10; topic 2 point 139"
                  }
                ]
              },
              {
                "html": "The bearing capacity of soft rock is 440 kN/m<sup>2</sup>.",
                "sources": [
                  {
                    "id": "CAP4-02-00121",
                    "label": "p. 9; topic 2 point 110"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00124",
                "label": "p. 9; topic 2 point 113"
              },
              {
                "id": "CAP4-02-00125",
                "label": "p. 9; topic 2 point 113"
              },
              {
                "id": "CAP4-02-00157",
                "label": "p. 10; topic 2 point 139"
              },
              {
                "id": "CAP4-02-00121",
                "label": "p. 9; topic 2 point 110"
              }
            ]
          },
          {
            "id": "bearing-failure-modes",
            "title": "Bearing failure modes and the wedge-angle assumptions behind them",
            "html": "<p>Three idealized modes describe how a shallow footing fails in bearing.</p><table><thead><tr><th scope='col'>Mode</th><th scope='col'>Rupture surface</th><th scope='col'>Load and settlement</th><th scope='col'>Typical ground</th></tr></thead><tbody><tr><th scope='row'>General shear</th><td>continuous, reaching the surface, with heave</td><td>clear peak</td><td>dense sand or stiff clay, shallow and homogeneous</td></tr><tr><th scope='row'>Local shear</th><td>partly developed, not reaching the surface</td><td>no distinct peak, progressive large settlement</td><td>relatively compressible sand</td></tr><tr><th scope='row'>Punching shear</th><td>shearing along the footing sides only</td><td>large penetration, little heave</td><td>highly compressible ground</td></tr></tbody></table><p>The mode follows the observed mechanism, not relative density alone. Soil punching also differs from structural punching of the footing slab.</p><p>Failure-plane angles depend on the mechanism assumed. Terzaghi's original rough-strip construction takes the central wedge faces at φ to the horizontal, whereas Prandtl-type constructions use \\(45^\\circ + \\phi/2\\). An angle from one model is not transferred to another without checking its assumptions.</p>",
            "points": [
              {
                "html": "The type of failure that occurs in loose soil is local shear failure.",
                "sources": [
                  {
                    "id": "CAP4-02-00144",
                    "label": "p. 10; topic 2 point 128"
                  }
                ]
              },
              {
                "html": "Punching shear failure may occur in dense sand and stiff clay.",
                "sources": [
                  {
                    "id": "CAP4-02-00159",
                    "label": "p. 10; topic 2 point 141"
                  }
                ]
              },
              {
                "html": "For \\(\\phi = 30^\\circ\\), the angle subtended by the rigid cone below a foundation with respect to the horizontal is 60°.",
                "sources": [
                  {
                    "id": "CAP4-02-00087",
                    "label": "p. 8; topic 2 point 63"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00144",
                "label": "p. 10; topic 2 point 128"
              },
              {
                "id": "CAP4-02-00159",
                "label": "p. 10; topic 2 point 141"
              },
              {
                "id": "CAP4-02-00087",
                "label": "p. 8; topic 2 point 63"
              }
            ]
          },
          {
            "id": "plate-load-tests",
            "title": "Plate load tests: scaling pressure and load, and groundwater limits",
            "html": "<p>A <em>plate load test</em> loads a small plate at the proposed founding level, and the result must then be scaled to the real footing. The usual idealized scalings concern ultimate <em>pressure</em>, not total load:</p><ul><li>homogeneous undrained clay: pressure independent of width, \\(q_{uf} = q_{up}\\);</li><li>comparable shallow footings on homogeneous sand: pressure roughly proportional to width.</li></ul><p>The total failure load then follows from pressure times footing area, so load and pressure scale differently.</p><p>These relations assume homogeneous ground, similar embedment and a dominant width-dependent term; they neither predict settlement nor apply to layered ground. A test can be run with groundwater below the plate, but it reflects the groundwater, stresses and geometry at the time. If groundwater could later climb into the zone the full-size footing stresses, design must assess that condition, together with scale effects and the footing's deeper influence.</p>",
            "formulas": [
              {
                "label": "Clay: plate pressure carried to the footing",
                "tex": "q_{uf} = q_{up}"
              },
              {
                "label": "Sand: approximate width scaling",
                "tex": "q_{uf} = q_{up}\\,\\dfrac{B_f}{B_p}"
              },
              {
                "label": "Ultimate load of the footing",
                "tex": "Q_u = q_{uf}\\, A_f"
              }
            ],
            "example": {
              "title": "Worked examples: scaling plate results to footings",
              "html": "<ol><li>Clay: a plate failing at 400 kPa implies the same pressure under a comparable 2 m square footing, so \\(Q_u = 400 \\times 4 = 1600\\) kN.</li><li>Sand: a 0.5 m plate failing at 150 kPa suggests 150 × 2/0.5 = 600 kPa for a 2 m footing.</li><li>Sand, geometrically similar squares three times the plate width: pressure rises 3 times and area 9 times, so the ultimate load rises 3 × 9 = 27 times.</li></ol>"
            },
            "points": [
              {
                "html": "In a plate load test on clayey soil, the ultimate bearing capacity of the foundation is \\(q_{u(f)} = q_{u(p)}\\).",
                "sources": [
                  {
                    "id": "CAP4-02-00061",
                    "label": "p. 7; topic 2 point 56"
                  }
                ]
              },
              {
                "html": "In a plate load test on cohesionless soil, a 0.5 m plate gives an ultimate bearing capacity of 150 kPa. The ultimate bearing capacity of a 2 m wide footing is 600 kPa.",
                "sources": [
                  {
                    "id": "CAP4-02-00064",
                    "label": "p. 8; topic 2 point 59"
                  }
                ]
              },
              {
                "html": "The bearing capacity formula for cohesionless soil from the plate load test is \\(q_{u(f)} = q_{u(p)} \\times \\dfrac{B_f}{B_p}\\).",
                "sources": [
                  {
                    "id": "CAP4-02-00123",
                    "label": "p. 9; topic 2 point 112"
                  }
                ]
              },
              {
                "html": "That the test can be performed for any level of water table below the footing is not a limitation of the plate load test.",
                "sources": [
                  {
                    "id": "CAP4-02-00054",
                    "label": "p. 7; topic 2 point 50"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00061",
                "label": "p. 7; topic 2 point 56"
              },
              {
                "id": "CAP4-02-00064",
                "label": "p. 8; topic 2 point 59"
              },
              {
                "id": "CAP4-02-00123",
                "label": "p. 9; topic 2 point 112"
              },
              {
                "id": "CAP4-02-00054",
                "label": "p. 7; topic 2 point 50"
              }
            ]
          },
          {
            "id": "subgrade-reaction-raft-contact",
            "title": "Modulus of subgrade reaction and raft contact pressure",
            "html": "<p>The <em>modulus of subgrade reaction</em> \\(k_s\\) is a secant ratio of pressure to settlement from a plate test, in kN/m³. The coefficient of subgrade reaction does not depend upon the water table.</p><p>Contact pressure beneath a raft follows <em>soil–structure interaction</em>: the relative stiffness of raft and ground and the layout of column loads influence it. If a raft foundation rests on weak soil, the pressure distribution under it tends to be uniform.</p>",
            "formulas": [
              {
                "label": "Modulus of subgrade reaction",
                "tex": "k_s = \\dfrac{p}{\\delta}",
                "where": "<p>\\(p\\) is the applied pressure and \\(\\delta\\) the corresponding settlement in metres.</p>"
              }
            ],
            "example": {
              "title": "Worked example: matched plate tests at 120 kPa",
              "html": "<p>A plate pressure of 120 kPa producing a 6 mm settlement gives</p>\\[k_s = \\dfrac{120}{0.006} = 20\\,000\\ \\text{kN/m}^3\\]<p>The 6 mm settlement is converted to metres first.</p>"
            },
            "points": [
              {
                "html": "The coefficient of subgrade reaction does not depend upon the water table.",
                "sources": [
                  {
                    "id": "CAP4-02-00154",
                    "label": "p. 10; topic 2 point 136"
                  }
                ]
              },
              {
                "html": "If a raft foundation rests on weak soil, the pressure distribution under it tends to be uniform.",
                "sources": [
                  {
                    "id": "CAP4-02-00118",
                    "label": "p. 9; topic 2 point 107"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00154",
                "label": "p. 10; topic 2 point 136"
              },
              {
                "id": "CAP4-02-00118",
                "label": "p. 9; topic 2 point 107"
              }
            ]
          },
          {
            "id": "eccentric-loading-middle-third",
            "title": "Eccentric loading and the middle-third rule",
            "html": "<p>A footing carrying both axial load and bending moment is <em>eccentrically loaded</em>: the moment is equivalent to moving the load a distance \\(e = M/P\\) from the centroid. For a rigid footing in full linear contact, the pressure varies linearly across the bending direction.</p><p>The <em>middle-third rule</em>, \\(e \\le B/6\\), keeps that linear pressure diagram nonnegative. When \\(e\\) exceeds \\(B/6\\), the formula predicts tension at one edge, which ordinary soil contact cannot sustain. The response is to recalculate a compression-only contact area and pressure distribution that satisfies force and moment balance. Zeroing the negative edge while keeping the original maximum, counting the tension as extra resistance, or ignoring the moment are all wrong.</p>",
            "formulas": [
              {
                "label": "Load eccentricity",
                "tex": "e = \\dfrac{M}{P}"
              },
              {
                "label": "Linear pressure under full contact",
                "tex": "q = \\dfrac{P}{BL}\\left(1 \\pm \\dfrac{6e}{B}\\right)",
                "where": "<p>\\(B\\) is the dimension in the bending direction; valid while \\(e \\le B/6\\).</p>"
              },
              {
                "label": "Peak pressure, compression-only contact",
                "tex": "q_{\\max} = \\dfrac{2P}{3L\\,(B/2 - e)}",
                "where": "<p>Rectangular footing with \\(e \\gt B/6\\) and no tension at the contact.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a 3 m by 2 m footing with 900 kN and 180 kN m",
              "html": "<ol><li>Eccentricity: \\(e = 180/900 = 0.20\\) m, within \\(B/6 = 2/6 = 0.333\\) m.</li><li>Mean pressure: 900/(3 × 2) = 150 kPa.</li><li>Extremes across the 2 m width follow from the full-contact formula.</li></ol>\\[\\begin{aligned} q &amp;= 150\\,(1 \\pm 6 \\times 0.20/2) \\\\ &amp;= 150\\,(1 \\pm 0.6) \\end{aligned}\\]<p>That gives 240 kPa and 60 kPa.</p>"
            },
            "moreHtml": "<p>For a rectangle with \\(e \\gt B/6\\), the compression-only solution is a triangular pressure block starting at the more heavily loaded edge. Its resultant must still act at distance \\(B/2 - e\\) from that edge, so the contact length is \\(3(B/2 - e)\\), and the peak pressure follows from vertical equilibrium as in the formula card.</p>",
            "points": [
              {
                "html": "When a footing is subjected to axial loading and bending moment, the type of footing is eccentric.",
                "sources": [
                  {
                    "id": "CAP4-02-00164",
                    "label": "p. 10; topic 2 point 145"
                  }
                ]
              },
              {
                "html": "In an eccentric footing, the soil pressure below the base is non-uniform.",
                "sources": [
                  {
                    "id": "CAP4-02-00165",
                    "label": "p. 10; topic 2 point 145"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00164",
                "label": "p. 10; topic 2 point 145"
              },
              {
                "id": "CAP4-02-00165",
                "label": "p. 10; topic 2 point 145"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Overconsolidation ratio",
            "tex": "\\text{OCR} = \\dfrac{\\sigma_p'}{\\sigma_0'}"
          },
          {
            "label": "Effective stress",
            "tex": "\\sigma' = \\sigma - u"
          },
          {
            "label": "Average degree of consolidation",
            "tex": "U = \\dfrac{S_c(t)}{S_{c,\\text{final}}}",
            "note": "Primary consolidation only."
          },
          {
            "label": "Time factor",
            "tex": "T_v = \\dfrac{c_v\\, t}{H_{dr}^2}",
            "note": "H<sub>dr</sub> is half the thickness with double drainage."
          },
          {
            "label": "Elastic immediate settlement",
            "tex": "S_i = \\dfrac{q B (1 - \\nu^2)\\, I}{E_s}"
          },
          {
            "label": "Terzaghi strip",
            "tex": "q_u = cN_c + qN_q + 0.5\\gamma B N_\\gamma"
          },
          {
            "label": "Terzaghi square",
            "tex": "q_u = 1.3cN_c + qN_q + 0.4\\gamma B N_\\gamma"
          },
          {
            "label": "Terzaghi circle",
            "tex": "q_u = 1.3cN_c + qN_q + 0.3\\gamma B N_\\gamma",
            "note": "B is the diameter."
          },
          {
            "label": "Undrained strip, φ = 0",
            "tex": "q_u = 5.7\\,c_u + q"
          },
          {
            "label": "Rectangle, net ultimate pressure",
            "tex": "\\begin{aligned} q_{nu} &= (1 + 0.3B/L)\\,cN_c \\\\ &\\quad + q(N_q - 1) \\\\ &\\quad + 0.5\\gamma B N_\\gamma (1 - 0.2B/L) \\end{aligned}"
          },
          {
            "label": "Net allowable pressure",
            "tex": "q_{na} = \\min\\left(\\dfrac{q_{nu}}{F},\\ q_{ns}\\right)"
          },
          {
            "label": "Water table within B below the base",
            "tex": "\\gamma_{\\text{eff}} = \\gamma' + \\dfrac{z_w}{B}\\,(\\gamma - \\gamma')"
          },
          {
            "label": "Plate test scaling, sand",
            "tex": "q_{uf} = q_{up}\\,\\dfrac{B_f}{B_p}",
            "note": "For clay, q<sub>uf</sub> = q<sub>up</sub>."
          },
          {
            "label": "Modulus of subgrade reaction",
            "tex": "k_s = \\dfrac{p}{\\delta}"
          },
          {
            "label": "Eccentric footing pressure",
            "tex": "q = \\dfrac{P}{BL}\\left(1 \\pm \\dfrac{6e}{B}\\right)",
            "note": "Valid for e up to B/6."
          }
        ],
        "cautions": [],
        "gaps": [
          "Consolidation settlement from compression indices, and the relation between time factor and degree of consolidation, are not calculated in these capsule points.",
          "Secondary compression appears only as creep after primary consolidation; no coefficient or calculation is given.",
          "Bearing-capacity factors beyond the rounded 20-degree row and the undrained case, and depth, inclination or code-based factors, are not covered.",
          "Plate-load-test procedure, plate sizes and loading increments are not described."
        ]
      }
    });
})();
