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
                "html": "Voids of 40 cm<sup>3</sup> containing 10 cm<sup>3</sup> of air have a degree of saturation of 30/40 = 75%; the 25% air content is a different ratio.",
                "sources": [
                  {
                    "id": "CAP4-02-00004",
                    "label": "p. 6; topic 2 point 4"
                  }
                ]
              },
              {
                "html": "With \\(e = 0.81\\), \\(G_s = 2.70\\) and \\(w = 0.30\\), the identity \\(Se = wG_s\\) gives \\(S = 1.00\\): a degree of saturation of 100%.",
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
                "html": "A 1000 cm<sup>3</sup> core cutter holding 1800 g of moist soil at 20% water content gives a bulk density of 1.80 and a dry density of 1.50 g/cm<sup>3</sup>.",
                "sources": [
                  {
                    "id": "CAP4-02-00019",
                    "label": "p. 6; topic 2 point 16"
                  }
                ]
              },
              {
                "html": "In a density-bottle test, 50 g of dry solids displacing 20 g of water give a specific gravity of soil solids of 50/20 = 2.50.",
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
                "html": "As water content rises, a remoulded fine-grained soil passes through the solid, semi-solid, plastic and liquid states, separated by the shrinkage, plastic and liquid limits.",
                "sources": [
                  {
                    "id": "CAP4-02-00015",
                    "label": "p. 6; topic 2 point 13"
                  }
                ]
              },
              {
                "html": "Four consistency states are not four phases: an unsaturated soil described as plastic has three constituents in its phase diagram, solids, water and air.",
                "sources": [
                  {
                    "id": "CAP4-02-00016",
                    "label": "p. 6; topic 2 point 13"
                  }
                ]
              },
              {
                "html": "The water content at which a drying pat stops shrinking, although water keeps leaving, is the shrinkage limit.",
                "sources": [
                  {
                    "id": "CAP4-02-00008",
                    "label": "p. 6; topic 2 point 7"
                  }
                ]
              },
              {
                "html": "The water content at the prescribed crumbling endpoint of a thread rolled to 3 mm is the plastic limit, the boundary between semi-solid and plastic behaviour.",
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
                "html": "USCS calls a soil fine-grained when more than half its dry mass passes the 0.075 mm sieve; with 62% passing it is fine-grained, and the fines are the passing fraction.",
                "sources": [
                  {
                    "id": "CAP4-02-00011",
                    "label": "p. 6; topic 2 point 9"
                  }
                ]
              },
              {
                "html": "A sieve result of 8% passing 75 µm gives the amount of fines in a sand, but not whether those fines are silty or clayey.",
                "sources": [
                  {
                    "id": "CAP4-02-00023",
                    "label": "p. 7; topic 2 point 20"
                  }
                ]
              },
              {
                "html": "On a scale with a 0.075 mm sand–fines boundary a 0.06 mm grain is silt-sized, but that size name does not establish a USCS M symbol.",
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
                "html": "A clean sand with \\(C_u = 7\\) but \\(C_c = 0.6\\) is SP, because the curvature requirement fails even though the uniformity requirement is met.",
                "sources": [
                  {
                    "id": "CAP4-02-00013",
                    "label": "p. 6; topic 2 point 11"
                  }
                ]
              },
              {
                "html": "Sizes of 0.10, 0.40 and 0.80 mm for \\(D_{10}\\), \\(D_{30}\\) and \\(D_{60}\\) give \\(C_c = 2\\) and \\(C_u = 8\\), so the clean sand is SW.",
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
                "html": "An inorganic fine soil with LL = 60% and PI = 20% plots below the A-line value of 29.2% and has LL above 50%, so it classifies as MH.",
                "sources": [
                  {
                    "id": "CAP4-02-00005",
                    "label": "p. 6; topic 2 point 5"
                  }
                ]
              },
              {
                "html": "A below-A-line soil earns an organic symbol only with organic-identification evidence, including the prescribed comparison of liquid limits before and after oven drying.",
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
                "html": "A predominantly sandy soil with 20% fines whose PI of 15% plots above the A-line is SC: sand with clayey, plastic fines.",
                "sources": [
                  {
                    "id": "CAP4-02-00003",
                    "label": "p. 6; topic 2 point 3"
                  }
                ]
              },
              {
                "html": "Soil of 70% sand, 5% gravel and 25% inorganic fines with LL = 40% and PI = 20%, above the 14.6% A-line value, is SC, a clayey sand, not CL.",
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
                "html": "The falling-head permeability test suits low-permeability soil: the level drop in a small standpipe makes a tiny discharge measurable.",
                "sources": [
                  {
                    "id": "CAP4-02-00029",
                    "label": "p. 7; topic 2 point 26"
                  }
                ]
              },
              {
                "html": "Collecting 120 cm<sup>3</sup> in 60 s through a sand specimen 10 cm long and 20 cm<sup>2</sup> in area under a 30 cm head loss gives \\(k = 0.0333\\) cm/s at constant head.",
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
                "html": "A thin film held to grain surfaces by molecular attraction after gravity drainage is pellicular, or adsorbed-film, water.",
                "sources": [
                  {
                    "id": "CAP4-02-00109",
                    "label": "p. 9; topic 2 point 99"
                  }
                ]
              },
              {
                "html": "Capillary menisci also retain water against gravity in small pores, so not all the water left after drainage is adsorbed film water.",
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
            "html": "<p>Colour is a description, not a test result. Kathmandu Valley contains varied lacustrine and alluvial deposits, so a dark sample from one site cannot be declared expansive black cotton soil, or organic soil, on the strength of its colour or location:</p><ul><li>expansive behaviour depends on clay mineralogy;</li><li>an organic classification depends on organic-content evidence;</li><li>a lake-deposit origin does not establish low compressibility.</li></ul><p>Each needs site-specific sampling, index tests and organic-content investigation.</p><p>Once an investigation confirms a soft organic layer, its mechanical behaviour becomes a design concern in its own right. Organic soils can be highly compressible and can keep creeping after primary consolidation, so fill placed over them may cause large compression followed by continuing secondary settlement. A nearby dark mineral clay may behave quite differently, and a wet organic layer is not made safe by its water or by any assumed organic bonding.</p>",
            "points": [
              {
                "html": "Before mineralogical, index and organic-content tests, dark colour alone cannot establish that a Kathmandu Valley soil is expansive black cotton soil.",
                "sources": [
                  {
                    "id": "CAP4-02-00009",
                    "label": "p. 6; topic 2 point 8"
                  }
                ]
              },
              {
                "html": "A confirmed soft organic layer under fill calls for attention to large compression and continuing secondary settlement, whatever its colour.",
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
        "cautions": [
          {
            "id": "caution-below-a-line-not-organic",
            "status": "corrected",
            "prompt": "Soil plotting below the A-line is organic, high plasticity or low plasticity",
            "html": "<p>The capsule point mixes three separate chart decisions. A position below the A-line indicates silt-like behaviour, M; the L or H letter comes from the liquid limit compared with 50%; and an organic symbol needs organic-identification evidence. A below-A-line position alone establishes neither the plasticity level nor organic content.</p>",
            "sources": [
              {
                "id": "CAP4-02-00005",
                "label": "p. 6; topic 2 point 5"
              }
            ]
          },
          {
            "id": "caution-kathmandu-soil-by-colour",
            "status": "corrected",
            "prompt": "Soils of Kathmandu Valley are black cotton and organic",
            "html": "<p>This generalization is rejected. The valley contains varied lacustrine and alluvial deposits, and neither colour nor location can identify expansive black cotton soil or organic soil. Mineralogical, index and organic-content investigations at the site are needed.</p>",
            "sources": [
              {
                "id": "CAP4-02-00009",
                "label": "p. 6; topic 2 point 8"
              }
            ]
          },
          {
            "id": "caution-fines-pass-the-sieve",
            "status": "corrected",
            "prompt": "A soil grain is fine-grained if it is retained on the 75 micron sieve",
            "html": "<p>The capsule reverses passing and retained material. Fines pass the 75 µm (0.075 mm) sieve, and USCS classifies the whole soil from the mass fraction passing: more than half passing makes it fine-grained. A single grain is never the basis of the classification.</p>",
            "sources": [
              {
                "id": "CAP4-02-00011",
                "label": "p. 6; topic 2 point 9"
              }
            ]
          },
          {
            "id": "caution-well-graded-needs-cc",
            "status": "corrected",
            "prompt": "Well-graded sand has a uniformity coefficient greater than 6",
            "html": "<p>The capsule omits the simultaneous curvature requirement. A clean sand is SW only when \\(C_u \\ge 6\\) and \\(1 \\le C_c \\le 3\\) hold together; the uniformity boundary is conventionally stated as at least 6 rather than strictly greater than 6.</p>",
            "sources": [
              {
                "id": "CAP4-02-00013",
                "label": "p. 6; topic 2 point 11"
              }
            ]
          },
          {
            "id": "caution-four-states-not-phases",
            "status": "review",
            "prompt": "Soil exists in four states",
            "html": "<p>Acceptable only as four consistency states: solid, semi-solid, plastic and liquid. It does not mean four phases, because an unsaturated soil has three constituents, namely solids, water and air.</p>",
            "sources": [
              {
                "id": "CAP4-02-00016",
                "label": "p. 6; topic 2 point 13"
              }
            ]
          },
          {
            "id": "caution-silt-size-limit-system",
            "status": "review",
            "prompt": "The maximum size of silt grains is about 0.075 mm",
            "html": "<p>The 0.075 mm upper silt limit belongs to classification systems that use that sand–fines boundary, such as an IS-style scale. Not every system uses it, and a size name never replaces the plasticity-based USCS behavioural symbol.</p>",
            "sources": [
              {
                "id": "CAP4-02-00018",
                "label": "p. 6; topic 2 point 15"
              }
            ]
          },
          {
            "id": "caution-void-ratio-equals-wg",
            "status": "corrected",
            "prompt": "In the fully saturated state the void ratio equals the water content with specific gravity",
            "html": "<p>The capsule wording is incomplete. At full saturation the void ratio equals the product \\(wG_s\\), from \\(Se = wG_s\\) with \\(S = 1\\). It equals the water content alone only if \\(G_s\\) happens to be 1.</p>",
            "sources": [
              {
                "id": "CAP4-02-00020",
                "label": "p. 6; topic 2 point 17"
              }
            ]
          },
          {
            "id": "caution-pellicular-water-scope",
            "status": "corrected",
            "prompt": "All pore water that gravity drainage cannot remove is pellicular water",
            "html": "<p>The capsule overextends the term. Pellicular water is the surface-associated film retained by molecular attraction, but capillary menisci in small pores also hold water against gravity. Both mechanisms contribute to the water retained after drainage.</p>",
            "sources": [
              {
                "id": "CAP4-02-00109",
                "label": "p. 9; topic 2 point 99"
              }
            ]
          },
          {
            "id": "caution-plastic-limit-endpoint",
            "status": "review",
            "prompt": "Plastic limit is the water content at which a 3 mm thread just begins to crumble",
            "html": "<p>The definition is retained with the qualification of archived IS 2720 Part 5:1985 clause 7.3: crumbling above 3 mm is accepted when the thread has just been rolled to 3 mm, and failure should not be forced at exactly that diameter. Other standards can use different nominal diameters, and no current adoption claim is made.</p>",
            "sources": [
              {
                "id": "CAP4-02-00170",
                "label": "p. 10; topic 2 point 150"
              }
            ]
          }
        ],
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
                "html": "Self-weight of 2 m of soil at 18 kN/m<sup>3</sup> over 3 m at 20 kN/m<sup>3</sup> gives a geostatic total vertical stress of 96 kPa at 5 m depth.",
                "sources": [
                  {
                    "id": "CAP4-02-00056",
                    "label": "p. 7; topic 2 point 52"
                  }
                ]
              },
              {
                "html": "Hydrostatic pore-water pressure 5 m below the water surface is \\(u = \\gamma_w h\\) = 10 × 5 = 50 kPa, taking \\(\\gamma_w = 10\\) kN/m<sup>3</sup>.",
                "sources": [
                  {
                    "id": "CAP4-02-00055",
                    "label": "p. 7; topic 2 point 51"
                  }
                ]
              },
              {
                "html": "With total normal stress 150 kPa and pore pressure 60 kPa, the neutral stress is 60 kPa and the effective normal stress 90 kPa.",
                "sources": [
                  {
                    "id": "CAP4-02-00072",
                    "label": "p. 8; topic 2 point 66"
                  }
                ]
              },
              {
                "html": "Extra hydrostatic ponding over saturated level ground raises total stress and pore pressure equally, so vertical effective stress at a point is unchanged.",
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
            "html": "<p>Water flows through soil from higher to lower <em>total head</em>, the sum of elevation head and pressure head. The average <em>hydraulic gradient</em> along a path is the total head lost divided by the length of that path. Using an absolute head, or the vertical soil thickness in place of the actual path length, gives a wrong gradient.</p><p><em>Darcy's law</em> makes the discharge proportional to the gradient and to the gross cross-sectional area. The product \\(ki\\) is the discharge velocity over the gross area; the mean velocity of water in the pores is higher, because only the effective flow porosity carries the flow.</p><p>The law assumes a linear, laminar flow regime. Saturation and steady conditions alone do not guarantee that: in coarse gravel at high velocity, inertial effects make discharge no longer proportional to gradient, so a constant \\(k\\) no longer applies. In unsaturated flow the conductivity also varies with water content, so a generalized treatment needs further constitutive information.</p>",
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
                "html": "Saturation alone does not guarantee Darcy's laminar, linear-flow regime: fast inertial flow in coarse gravel breaks the proportionality between discharge and gradient.",
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
                "html": "The strip between two adjacent flow lines in a flow net is a flow channel; in the ideal net no water crosses its sides.",
                "sources": [
                  {
                    "id": "CAP4-03-00076",
                    "label": "p. 12; topic 3 point 74"
                  }
                ]
              },
              {
                "html": "In homogeneous isotropic soil a flow line crosses every equipotential line at a right angle in the physical plane.",
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
                "html": "In the ideal model, incipient boiling under upward seepage occurs when the vertical effective stress reduces to zero; total stress and pore pressure need not vanish.",
                "sources": [
                  {
                    "id": "CAP4-02-00033",
                    "label": "p. 7; topic 2 point 30"
                  }
                ]
              },
              {
                "html": "A saturated cohesionless soil with \\(G_s = 2.68\\) and \\(e = 0.68\\) has an ideal critical upward gradient of \\(1.68/1.68 = 1.00\\).",
                "sources": [
                  {
                    "id": "CAP4-02-00049",
                    "label": "p. 7; topic 2 point 45"
                  }
                ]
              },
              {
                "html": "At the same \\(G_s\\), the soil with the larger void ratio has the lower critical gradient, because its submerged weight per unit volume is smaller.",
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
            "html": "<p>When a saturated soil consolidates in an oedometer, each load increment reduces the void ratio as pore water drains and the effective stress rises. Two coefficients describe the response over one increment, and they are easily confused:</p><ul><li>the <em>coefficient of compressibility</em> \\(a_v\\) is the decrease in void ratio per unit increase in effective stress;</li><li>the <em>coefficient of volume compressibility</em> \\(m_v\\) is the volumetric strain per unit increase in effective stress.</li></ul><p>Dividing the void-ratio change by \\(1 + e_0\\) converts it into volumetric strain, which links the two. So strain divided by stress defines \\(m_v\\), not \\(a_v\\). Both are secant values for the stress range of the increment, so a figure quoted without its stress range is incomplete.</p>",
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
              "html": "\\[a_v = \\dfrac{0.80 - 0.76}{100} = 0.00040\\ \\text{kPa}^{-1}\\]\\[m_v = \\dfrac{0.00040}{1 + 0.80} = 0.000222\\ \\text{kPa}^{-1}\\]<p>Stopping at 0.00040 would give \\(a_v\\), the void-ratio coefficient, rather than the strain-based \\(m_v\\).</p>"
            },
            "points": [
              {
                "html": "A void ratio falling from 0.80 to 0.76 as effective stress rises 100 kPa gives \\(a_v = 0.00040\\) kPa<sup>−1</sup> and a coefficient of volume compressibility \\(m_v = 0.000222\\) kPa<sup>−1</sup>.",
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
                "html": "Rolling moist unsaturated fill quickly at almost constant water content densifies it mainly by reduction of the air-filled void volume, not by compressing grains or draining water.",
                "sources": [
                  {
                    "id": "CAP4-02-00038",
                    "label": "p. 7; topic 2 point 35"
                  }
                ]
              },
              {
                "html": "Mechanically densifying each lift means rolling or tamping at a controlled moisture content; waiting for drainage under self-weight is consolidation, not compaction.",
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
            "html": "<p>A laboratory compaction test fixes the energy delivered to each mould. That energy is proportional to rammer mass, drop height, blows per layer and number of layers together, so comparing rammer masses alone misses the drop and the layer count.</p><p>The light-compaction method of archived IS 2720 Part 7:1980 uses a nominal 2.6 kg rammer falling 310 mm. Other protocols use other masses: the IS heavy-compaction rammer is 4.9 kg and the ASTM standard-effort rammer is about 2.5 kg. Method names and masses should not be mixed, and no current Nepal adoption is implied.</p><p>Greater effort on the same soil generally moves the peak of the dry-density versus water-content curve upward and to the left: a higher maximum dry density at a lower optimum moisture content. That is a trend for one soil, not a fixed numerical change, and no field roller is guaranteed to reproduce either laboratory curve.</p>",
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
                "html": "The light-compaction method of IS 2720 Part 7:1980 uses a nominal 2.6 kg rammer with a 310 mm drop; the 4.9 kg rammer belongs to heavy compaction.",
                "sources": [
                  {
                    "id": "CAP4-02-00025",
                    "label": "p. 7; topic 2 point 22"
                  }
                ]
              },
              {
                "html": "At equal mould volume and blows per layer, 4.9 kg falling 0.45 m on 5 layers delivers about 4.56 times the energy of 2.6 kg falling 0.31 m on 3 layers.",
                "sources": [
                  {
                    "id": "CAP4-02-00140",
                    "label": "p. 9; topic 2 point 125"
                  }
                ]
              },
              {
                "html": "Higher compactive effort on the same soil gives a higher maximum dry density and a lower optimum moisture content.",
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
                "html": "Two soils at the same 18 kN/m<sup>3</sup> field dry unit weight reach 90% and 94.74%: their relative compactions differ because each has its own reference maximum.",
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
            "html": "<p>Rollers differ in how they deliver compactive effort:</p><ul><li><em>sheepsfoot and padfoot rollers</em> concentrate pressure on projecting feet and knead the soil, which suits cohesive fill placed in controlled thin lifts;</li><li><em>vibratory smooth-drum rollers</em> promote particle rearrangement and denser packing in suitable clean granular soils, where kneading achieves little.</li></ul><p>Static finishing with a very light roller, or spraying water without mechanical energy, supplies neither kind of effort.</p><p>The roller type is only a first trial. Moisture conditioning and lift thickness must suit the material, and for vibratory plant so must frequency and amplitude. A trial section then checks the dry density actually achieved, because the name of the roller does not establish it. The capsule's ship-footed roller is a spelling defect for the sheepsfoot roller; the kneading principle for clayey soils is otherwise sound.</p>",
            "points": [
              {
                "html": "For cohesive fill that needs kneading in controlled thin lifts, a sheepsfoot or padfoot roller is the natural first trial.",
                "sources": [
                  {
                    "id": "CAP4-02-00028",
                    "label": "p. 7; topic 2 point 25"
                  }
                ]
              },
              {
                "html": "Clean granular fill is densified most effectively by particle rearrangement under vibration from a suitable smooth-drum roller.",
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
            "html": "<p>Field compaction depends on roller weight, travel speed and number of passes, together with soil moisture and lift thickness. A <em>compaction trial</em> at fixed moisture and lift thickness measures dry density after each successive pass. Gains usually diminish, and a plateau shows that further passes add little density under those conditions; overrolling wastes effort and can damage the fill.</p><p>The calibrated combination belongs to the trial conditions. If a heavier roller replaces the approved one and travels twice as fast with the same pass count, both the stress applied and the compactive action change. Extra weight does not automatically make up for faster travel, so a new trial and field dry-density checks are needed before equivalence is accepted.</p><p><em>Lift thickness</em> is not universal either. A figure such as 150 mm can be a legitimate project requirement, but the effective thickness depends on the soil, its moisture, the equipment and the density required through the full depth. A specification must say whether it means loose or compacted thickness, and acceptance rests on full-depth density, not a surface reading or the absence of roller marks.</p>",
            "points": [
              {
                "html": "A density plateau in a roller trial at fixed moisture and lift thickness shows that further passes give little added density under those trial conditions.",
                "sources": [
                  {
                    "id": "CAP4-02-00039",
                    "label": "p. 7; topic 2 point 36"
                  }
                ]
              },
              {
                "html": "A heavier roller at doubled speed with an unchanged pass count needs a new trial and field dry-density checks before its compaction is accepted as equivalent.",
                "sources": [
                  {
                    "id": "CAP4-02-00040",
                    "label": "p. 7; topic 2 point 36"
                  }
                ]
              },
              {
                "html": "A copied 150 mm lift must have its thickness basis defined, loose or compacted, and full-depth density verified in a trial for the actual soil and machine.",
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
        "cautions": [
          {
            "id": "caution-light-compaction-rammer",
            "status": "review",
            "prompt": "In light compaction the standard Proctor rammer weighs 2.6 kg",
            "html": "<p>The 2.6 kg mass is retained for the light-compaction method of archived IS 2720 Part 7:1980, clauses 1.1 and 5.1.2, with its 310 mm drop. It is not a universal Standard Proctor mass, since the ASTM standard-effort rammer is about 2.5 kg, and no claim of current Nepal adoption is made.</p>",
            "sources": [
              {
                "id": "CAP4-02-00025",
                "label": "p. 7; topic 2 point 22"
              }
            ]
          },
          {
            "id": "caution-flow-net-fraction",
            "status": "corrected",
            "prompt": "Flow-net seepage discharge formula printed with a damaged fraction",
            "html": "<p>The extracted formula has its fraction order damaged. Darcy flow through square elements gives \\(q = kH N_f/N_d\\) per unit width, with flow channels in the numerator and potential drops in the denominator; reversing them overestimates the discharge.</p>",
            "sources": [
              {
                "id": "CAP4-02-00026",
                "label": "p. 7; topic 2 point 23"
              }
            ]
          },
          {
            "id": "caution-sheepsfoot-spelling",
            "status": "corrected",
            "prompt": "A ship footed roller is used for compacting clayey soils",
            "html": "<p>Ship footed is a transcription or spelling defect for the sheepsfoot roller. Sheepsfoot and padfoot rollers knead cohesive soils, although their effectiveness still depends on moisture conditioning, lift thickness and a trial section.</p>",
            "sources": [
              {
                "id": "CAP4-02-00028",
                "label": "p. 7; topic 2 point 25"
              }
            ]
          },
          {
            "id": "caution-av-versus-mv",
            "status": "corrected",
            "prompt": "The coefficient of compressibility is the ratio of strain to stress",
            "html": "<p>The capsule confuses two coefficients. Strain divided by stress defines the coefficient of volume compressibility \\(m_v\\). The coefficient of compressibility \\(a_v\\) is the change in void ratio per unit stress, and the two are related by \\(m_v = a_v/(1 + e_0)\\).</p>",
            "sources": [
              {
                "id": "CAP4-02-00032",
                "label": "p. 7; topic 2 point 29"
              }
            ]
          },
          {
            "id": "caution-critical-gradient-numerator",
            "status": "corrected",
            "prompt": "Critical gradient for e = 0.68 and G = 2.68 written with 2.68 − 10 as the numerator",
            "html": "<p>The printed or extracted numerator 2.68 − 10 is dimensionally impossible because \\(G_s\\) is a pure number. Force equilibrium requires \\(i_c = (G_s - 1)/(1 + e)\\), which gives \\((2.68 - 1)/1.68 = 1.00\\).</p>",
            "sources": [
              {
                "id": "CAP4-02-00049",
                "label": "p. 7; topic 2 point 45"
              }
            ]
          },
          {
            "id": "caution-critical-gradient-layout",
            "status": "corrected",
            "prompt": "Critical seepage gradient shown only as 1 + e with the G − 1 numerator detached",
            "html": "<p>The extraction separates the numerator \\(G - 1\\) from its fraction, leaving only the denominator \\(1 + e\\). Force equilibrium restores \\(i_c = (G - 1)/(1 + e)\\), so at fixed \\(G\\) a larger void ratio gives a lower critical gradient.</p>",
            "sources": [
              {
                "id": "CAP4-02-00063",
                "label": "p. 8; topic 2 point 58"
              }
            ]
          },
          {
            "id": "caution-lift-thickness",
            "status": "review",
            "prompt": "Each layer of soil in compaction should be 150 mm thick",
            "html": "<p>The capsule omits the material, equipment, specification and the loose-versus-compacted distinction. A 150 mm lift can be a valid project requirement but is not a universal physical limit, and a trial should confirm density through the full depth of the lift.</p>",
            "sources": [
              {
                "id": "CAP4-02-00084",
                "label": "p. 8; topic 2 point 78"
              }
            ]
          },
          {
            "id": "caution-darcy-validity",
            "status": "corrected",
            "prompt": "Darcy's law is valid for fully saturated soil and steady flow",
            "html": "<p>The capsule omits the central condition and overstates the others. Darcy's linear law requires laminar, viscous flow with discharge proportional to gradient; saturation and steadiness alone do not ensure it, as inertial flow in coarse gravel shows. Unsaturated flow can still be treated with a conductivity that varies with water content.</p>",
            "sources": [
              {
                "id": "CAP4-02-00142",
                "label": "p. 10; topic 2 point 127"
              }
            ]
          }
        ],
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
                "html": "In two-dimensional stress, the normal and shear tractions on all planes through a point trace one locus on σ–τ axes: the Mohr circle.",
                "sources": [
                  {
                    "id": "CAP4-02-00057",
                    "label": "p. 7; topic 2 point 53"
                  }
                ]
              },
              {
                "html": "On a conventional Mohr diagram, a point's horizontal distance from the shear-stress axis is the normal stress on the represented plane; its height is the shear stress.",
                "sources": [
                  {
                    "id": "CAP4-02-00070",
                    "label": "p. 8; topic 2 point 64"
                  }
                ]
              },
              {
                "html": "Compressive principal stresses of 180 and 60 kPa give a Mohr circle with centre 120 kPa and radius 60 kPa.",
                "sources": [
                  {
                    "id": "CAP4-02-00052",
                    "label": "p. 7; topic 2 point 48"
                  }
                ]
              },
              {
                "html": "Planes 25 degrees apart in the element plot 50 degrees apart on Mohr's circle, because the transformation uses twice the physical angle.",
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
                "html": "Principal stresses of 220 and 80 kPa give a maximum shear stress of 70 kPa, half their difference; 140 kPa is the circle's diameter.",
                "sources": [
                  {
                    "id": "CAP4-02-00094",
                    "label": "p. 8; topic 2 point 86"
                  }
                ]
              },
              {
                "html": "Relative to a principal plane, the two planes of maximum in-plane shear lie at 45 degrees and 135 degrees and carry shear of opposite sign.",
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
                "html": "A drained envelope sloping at 0.577 on equally scaled axes implies an internal friction angle of about 30 degrees, since \\(\\tan 30^\\circ \\approx 0.577\\).",
                "sources": [
                  {
                    "id": "CAP4-02-00100",
                    "label": "p. 9; topic 2 point 91"
                  }
                ]
              },
              {
                "html": "Of two envelopes with the same intercept, the steeper envelope has a larger friction angle; the equal intercepts mean equal cohesion.",
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
                "html": "Cohesionless soil with \\(\\phi' = 30^\\circ\\) under 120 kPa effective normal stress has a drained shear strength of 69.3 kPa despite zero cohesion.",
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
                "html": "A specimen consolidated under the cell pressure and then sheared with drainage open, slowly enough that excess pore pressure stays negligible, is in a consolidated drained test.",
                "sources": [
                  {
                    "id": "CAP4-02-00082",
                    "label": "p. 8; topic 2 point 76"
                  }
                ]
              },
              {
                "html": "Subtracting an equal pore pressure \\(u\\) from both principal stresses shifts the Mohr circle's centre left by \\(u\\); the radius is unchanged.",
                "sources": [
                  {
                    "id": "CAP4-02-00083",
                    "label": "p. 8; topic 2 point 77"
                  }
                ]
              },
              {
                "html": "Consolidated-undrained tests with pore pressure measured at failure yield an effective envelope: subtract the measured pore pressure from the total principal stresses.",
                "sources": [
                  {
                    "id": "CAP4-02-00051",
                    "label": "p. 7; topic 2 point 47"
                  }
                ]
              },
              {
                "html": "A Bishop-type null indicator measures undrained pore pressure by balancing line pressure while returning the indicator to its datum, so almost no water moves.",
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
                "html": "A total-stress \\(\\phi_u = 0\\) envelope with \\(c_u = 25\\) kPa predicts a failure shear stress of 25 kPa at 100 kPa total normal stress, as at any other.",
                "sources": [
                  {
                    "id": "CAP4-02-00071",
                    "label": "p. 8; topic 2 point 65"
                  }
                ]
              },
              {
                "html": "A saturated clay failing at an unconfined compressive stress of 90 kPa has an undrained shear strength of 45 kPa, the circle radius \\(q_u/2\\).",
                "sources": [
                  {
                    "id": "CAP4-02-00060",
                    "label": "p. 7; topic 2 point 55"
                  }
                ]
              },
              {
                "html": "The \\(q_u/2\\) estimate from rapid unconfined compression is an undrained total-stress strength under a \\(\\phi_u = 0\\) idealization, not a drained effective-stress parameter.",
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
            "html": "<p>A vane pushed into soft clay and rotated shears out a cylinder of soil. Assuming uniform undrained strength on the curved side and on both flat ends, the resisting moments of side and ends add up to the measured torque. The vane must be fully embedded, and the torque is first corrected for rod friction.</p><p>For a vane whose height equals its diameter, the side supplies three quarters of the ideal torque and the two ends together one quarter. Treating all the torque as side resistance therefore overestimates the strength.</p><p>The field vane suits very soft saturated clay that cannot stand as an unsupported cylinder after extraction. Unconfined compression needs a representative self-supporting specimen, so saturation alone does not make it the preferred test, and drained direct shear or CD triaxial testing of a trimmed specimen is not a quick in-situ alternative.</p>",
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
                "html": "With H = D and uniform strength, the two horizontal ends together provide one quarter of the ideal vane torque and the side three quarters.",
                "sources": [
                  {
                    "id": "CAP4-02-00068",
                    "label": "p. 8; topic 2 point 62"
                  }
                ]
              },
              {
                "html": "Very soft saturated clay that cannot stand unsupported after extraction is best tested quickly in situ with the field vane shear test.",
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
                "html": "A 180 N shear force at failure on a corrected overlap area of 30 cm<sup>2</sup>, or 0.003 m<sup>2</sup>, is a nominal shear stress of 60 kPa.",
                "sources": [
                  {
                    "id": "CAP4-02-00149",
                    "label": "p. 10; topic 2 point 132"
                  }
                ]
              },
              {
                "html": "An ordinary direct shear box fixes the tested orientation, which may not be the weakest plane in a soil with oriented fabric.",
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
                "html": "Steepening a dry cohesionless infinite slope at constant friction angle makes its factor of safety \\(\\tan\\phi'/\\tan\\beta\\) decrease, because \\(\\tan\\beta\\) increases.",
                "sources": [
                  {
                    "id": "CAP4-02-00081",
                    "label": "p. 8; topic 2 point 75"
                  }
                ]
              },
              {
                "html": "With full saturation and steady slope-parallel seepage, a cohesionless infinite slope keeps \\(\\gamma'/\\gamma_{\\text{sat}}\\) of its dry factor of safety: 0.50 for \\(\\gamma_{\\text{sat}} = 20\\) and \\(\\gamma_w = 10\\) kN/m<sup>3</sup>.",
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
            "html": "<p>In an unsaturated clay the pore water is at a lower pressure than the pore air. This difference, the <em>matric suction</em>, pulls the grains together and adds an apparent strength beyond what the saturated effective-stress parameters alone would give.</p><p>Rain infiltration that reduces suction removes that contribution, so a slope can lose shear resistance without any change in its geometry. If wetting continues until pore pressures become positive, effective stress falls further.</p><p>The size of the loss depends on drainage, soil fabric and stress history. Wetting is therefore not a fixed reduction of intrinsic cohesion. It does not raise the intrinsic friction angle or the preconsolidation stress, and rising pore pressure reduces effective confinement rather than increasing it.</p>",
            "formulas": [
              {
                "label": "Extended Mohr–Coulomb form for unsaturated soil",
                "tex": "\\begin{aligned} \\tau_f &= c' + (\\sigma - u_a)\\tan\\phi' \\\\ &\\quad + (u_a - u_w)\\tan\\phi^b \\end{aligned}",
                "where": "<p>\\(u_a - u_w\\) is the matric suction and \\(\\phi^b\\) the angle describing the strength gained per unit suction; wetting drives the last term toward zero.</p>"
              }
            ],
            "points": [
              {
                "html": "Rain that reduces matric suction in an unsaturated clay slope can lower its shear resistance through loss of suction-related apparent strength, with geometry unchanged.",
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
            "html": "<p>A factor of safety can be read as a strength reduction. The <em>mobilized strength</em> is the strength that must be developed to keep the slope in equilibrium: the available strength divided by the factor of safety. For cohesion this gives the <em>mobilized cohesion</em> \\(c_m\\).</p><p>In a frictional soil the mobilized resistance also has a frictional part, \\(\\sigma' \\tan\\phi_m\\), with \\(\\tan\\phi_m = \\tan\\phi/F\\) under uniform reduction. So \\(c_m\\) is only the cohesive part of the mobilized resistance, not generally the complete applied shear stress.</p><p><em>Taylor's stability number</em> is the dimensionless ratio of mobilized cohesion to \\(\\gamma H\\). It is read from a chart whose conditions must match the slope geometry, drainage and strength model. For a purely cohesive slope, the chart value gives the cohesion that must be mobilized, and comparing it with the available cohesion gives the factor of safety on cohesion.</p>",
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
                "html": "Dividing \\(c = 30\\) kPa by a factor of safety of 1.5 gives a mobilized cohesion of 20 kPa: the mobilized cohesive contribution, not the whole applied shear stress.",
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
                "html": "The simplified Bishop method for a circular slip uses overall moment equilibrium about the circle's centre with interslice shear forces neglected.",
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
        "cautions": [
          {
            "id": "caution-seepage-halves-factor",
            "status": "review",
            "prompt": "Steady seepage roughly halves the factor of safety of an infinite slope",
            "html": "<p>The halving holds only for a cohesionless infinite slope with steady seepage parallel to the surface, the water surface at the slope surface, and \\(\\gamma'/\\gamma_{\\text{sat}}\\) close to one half. It is not a universal factor for cohesive slopes or arbitrary water levels.</p>",
            "sources": [
              {
                "id": "CAP4-02-00041",
                "label": "p. 7; topic 2 point 37"
              }
            ]
          },
          {
            "id": "caution-wetting-strength-loss",
            "status": "review",
            "prompt": "Cohesive soils decrease their shear strength on wetting",
            "html": "<p>The claim is qualified to a physically defined mechanism: wetting an unsaturated clay can remove suction-related apparent strength, and later positive pore pressure can reduce effective stress. The effect depends on drainage, fabric and stress history rather than being a fixed reduction of intrinsic cohesion.</p>",
            "sources": [
              {
                "id": "CAP4-02-00042",
                "label": "p. 7; topic 2 point 38"
              }
            ]
          },
          {
            "id": "caution-cm-is-mobilized-cohesion",
            "status": "corrected",
            "prompt": "Cm is also called the applied shear stress",
            "html": "<p>The capsule misidentifies \\(c_m\\). In slope stability it denotes mobilized cohesion, \\(c_m = c/F\\), consistent with the capsule's own use of it in Taylor's stability number. In a frictional soil the mobilized resistance also has a frictional part, so \\(c_m\\) is not generally the whole applied shear stress.</p>",
            "sources": [
              {
                "id": "CAP4-02-00047",
                "label": "p. 7; topic 2 point 43"
              }
            ]
          },
          {
            "id": "caution-undrained-effective-envelope",
            "status": "corrected",
            "prompt": "An effective-stress failure envelope cannot be obtained from undrained tests",
            "html": "<p>As a blanket statement this is false. Consolidated-undrained triaxial tests with pore-pressure measurement give effective principal stresses at failure, and their circles define \\(c'\\) and \\(\\phi'\\). Only undrained tests without pore-pressure data generally cannot be converted.</p>",
            "sources": [
              {
                "id": "CAP4-02-00051",
                "label": "p. 7; topic 2 point 47"
              }
            ]
          },
          {
            "id": "caution-unconfined-compression-wording",
            "status": "corrected",
            "prompt": "The unconfined confined strength test is widely used for cohesive soils",
            "html": "<p>The wording unconfined confined is a defect; the test meant is the unconfined compression test. It loads a self-supporting cohesive specimen with zero lateral total stress and gives \\(s_u = q_u/2\\) under the \\(\\phi_u = 0\\) idealization.</p>",
            "sources": [
              {
                "id": "CAP4-02-00060",
                "label": "p. 7; topic 2 point 55"
              }
            ]
          },
          {
            "id": "caution-principal-stress-root",
            "status": "corrected",
            "prompt": "Major principal stress from σx, σy and τxy, extracted without its square root",
            "html": "<p>The extraction loses the square root and the fraction layout. The stress-transformation identity gives the major principal stress as the centre of the Mohr circle plus its radius:</p>\\[\\begin{aligned} \\sigma_1 &amp;= \\dfrac{\\sigma_x + \\sigma_y}{2} \\\\ &amp;\\quad + \\sqrt{\\left(\\dfrac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2} \\end{aligned}\\]",
            "sources": [
              {
                "id": "CAP4-02-00062",
                "label": "pp. 7, 8; topic 2 point 57"
              }
            ]
          },
          {
            "id": "caution-vane-formula-layout",
            "status": "corrected",
            "prompt": "Vane shear strength formula printed with a damaged layout",
            "html": "<p>The extracted formula is restored by integrating the resisting moments of the cylindrical side and both ends: \\(T = s_u\\pi D^2(H/2 + D/6)\\). It assumes uniform strength, full embedment and a torque already corrected for rod friction.</p>",
            "sources": [
              {
                "id": "CAP4-02-00067",
                "label": "p. 8; topic 2 point 62"
              }
            ]
          },
          {
            "id": "caution-soft-clay-strength-test",
            "status": "corrected",
            "prompt": "Unconfined compression is the recommended shear test for saturated clay",
            "html": "<p>The blanket recommendation is corrected by specimen condition. Unconfined compression needs a representative specimen that can stand unsupported; very soft saturated clay that cannot do so is better tested in situ with the field vane.</p>",
            "sources": [
              {
                "id": "CAP4-02-00073",
                "label": "p. 8; topic 2 point 67"
              }
            ]
          },
          {
            "id": "caution-max-shear-divisor",
            "status": "review",
            "prompt": "Maximum shear stress on a Mohr circle equals σ1 − σ3",
            "html": "<p>The relation is \\(\\tau_{\\text{max}} = (\\sigma_1 - \\sigma_3)/2\\). The point-level extract omits the divisor 2, but the full page text includes it, so this is an extraction defect rather than evidence of a printed error. The difference \\(\\sigma_1 - \\sigma_3\\) is the diameter of the circle.</p>",
            "sources": [
              {
                "id": "CAP4-02-00094",
                "label": "p. 8; topic 2 point 86"
              }
            ]
          },
          {
            "id": "caution-direct-shear-trees",
            "status": "review",
            "prompt": "Direct shear failure is not generally used for trees",
            "html": "<p>The final noun and intended comparison of this capsule point cannot be resolved from the extracted text, and the original point still needs review. The notes teach a defensible substitute limitation, that the box fixes the tested plane, and make no claim about trees or root strength.</p>",
            "sources": [
              {
                "id": "CAP4-02-00162",
                "label": "p. 10; topic 2 point 143"
              }
            ]
          }
        ],
        "gaps": [
          "Unconsolidated undrained testing, stress paths, pore-pressure parameters and dilatancy are not examined in these capsule points.",
          "Finite-slope methods such as the Swedish circle, ordinary slices and the friction circle, and slope-stabilization measures, are not covered beyond the outline of the simplified Bishop method.",
          "Sensitivity, thixotropy and residual strength of clays are not included.",
          "The capsule point linking direct shear with trees remains unresolved, so no statement about roots or trees is made."
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
                "html": "Exploration depth is governed by the ground model and foundation influence; if one boring method refuses on a hard layer, a suitable alternative method continues the hole.",
                "sources": [
                  {
                    "id": "CAP4-02-00088",
                    "label": "p. 8; topic 2 point 81"
                  }
                ]
              },
              {
                "html": "A resistivity survey gives indirect evidence: correlate the indirect anomaly with boreholes and groundwater chemistry before interpreting a conductive layer as clay.",
                "sources": [
                  {
                    "id": "CAP4-02-00017",
                    "label": "p. 6; topic 2 point 14"
                  }
                ]
              },
              {
                "html": "An equilibrated observation well screened in an unconfined aquifer indicates the groundwater level near the screened interval, not the head of deeper confined aquifers.",
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
                "html": "Very soft clay is best sampled with a controlled piston and a suitable thin-walled tube, which limit premature entry and loss on withdrawal.",
                "sources": [
                  {
                    "id": "CAP4-02-00156",
                    "label": "p. 10; topic 2 point 138"
                  }
                ]
              },
              {
                "html": "Each straight generator of a 60 degree Dutch cone makes 30 degrees with the cone axis: the semi-angle is half the included apex angle.",
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
                "html": "SPT corrections address hammer energy, borehole diameter, rod length and the sampler; a meniscus reading belongs to liquid-level measurements such as hydrometer tests.",
                "sources": [
                  {
                    "id": "CAP4-02-00078",
                    "label": "p. 8; topic 2 point 72"
                  }
                ]
              },
              {
                "html": "The traditional dilatancy correction applies to saturated fine sand or nonplastic silt, and only when the overburden-corrected count exceeds 15.",
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
            "html": "<p>The lateral pressure a backfill exerts depends on how the wall moves.</p><ul><li>A wall restrained against yielding keeps the soil close to the <em>at-rest</em> state.</li><li>When the wall yields far enough away from the backfill, the soil expands laterally, its shear strength is mobilized and the pressure falls to the <em>active</em> limit, lower than at rest.</li><li>When the wall is pushed far enough into the soil, the much larger <em>passive</em> resistance is mobilized.</li></ul><p>Two at-rest estimates must not be mixed. Jaky's empirical relation for normally consolidated soil gives \\(K_0 = 1 - \\sin\\phi'\\), which is 0.5 at 30 degrees. An ideal isotropic linear-elastic soil prevented from straining laterally gives \\(K_0 = \\nu/(1-\\nu)\\) instead. Both are model-specific estimates, not universal laws for real soils with plastic strain or overconsolidation.</p>",
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
                "html": "A wall that yields sufficiently away from level backfill mobilizes active pressure, lower than the compatible at-rest pressure; a restrained wall stays nearer at rest.",
                "sources": [
                  {
                    "id": "CAP4-02-00092",
                    "label": "p. 8; topic 2 point 84"
                  }
                ]
              },
              {
                "html": "An ideal elastic, isotropic soil with lateral strain prevented has \\(K_0 = \\nu/(1-\\nu)\\), so a Poisson's ratio of 0.40 gives 0.667, a model-specific estimate.",
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
                "html": "For φ' = 30 degrees, level dry cohesionless backfill and a smooth vertical wall, Rankine's active coefficient is \\(K_a = 1/3\\); its reciprocal, 3, is \\(K_p\\).",
                "sources": [
                  {
                    "id": "CAP4-02-00093",
                    "label": "p. 8; topic 2 point 85"
                  }
                ]
              },
              {
                "html": "With \\(K_p = 3\\) at φ' = 30 degrees, a vertical effective stress of 60 kPa corresponds to a Rankine passive horizontal effective stress of 180 kPa.",
                "sources": [
                  {
                    "id": "CAP4-02-00099",
                    "label": "p. 9; topic 2 point 90"
                  }
                ]
              },
              {
                "html": "Rankine active failure planes in level cohesionless backfill with φ = 30 degrees make \\(45^\\circ + \\phi/2\\) = 60 degrees with the horizontal.",
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
            "html": "<p>The elementary Rankine solution assumes a <em>smooth</em> vertical wall. With a wall-friction angle \\(\\delta = 0\\), the wall takes no shear from the soil, so for level backfill the thrust acts normal to the wall and is horizontal. A rough wall or a sloping backfill needs a modified analysis.</p><p>It also assumes a <em>homogeneous</em> backfill. A thick weak layer over dense sand changes strength and unit weight with depth, so one coefficient and one unit weight for the whole height can misstate both the pressures and the failure conditions. Each layer is treated with its own properties, applied to the vertical effective stress at that depth.</p><p><em>Coulomb's wedge theory</em> works instead with force equilibrium of trial soil wedges, and it handles wall friction, irregular backfill and surcharges. <em>Culmann's graphical construction</em> carries it out: trial wedges are compared on a force diagram, and for active pressure the critical wedge is the one that demands the maximum wall thrust. It has nothing to do with the buckling of structural columns.</p>",
            "example": {
              "title": "Illustrative example: a pressure jump at a layer boundary",
              "html": "<p>Suppose 3 m of weak soil with γ = 18 kN/m³ and φ' = 20 degrees overlies dense sand with φ' = 35 degrees, all dry. At the boundary \\(\\sigma_v' = 18 \\times 3 = 54\\) kPa.</p><ul><li>Upper layer, \\(K_a = 0.490\\): 0.490 × 54 = 26.5 kPa just above the boundary.</li><li>Lower layer, \\(K_a = 0.271\\): 0.271 × 54 = 14.6 kPa just below it.</li></ul><p>A single coefficient for the whole height would miss this step in the pressure diagram.</p>"
            },
            "points": [
              {
                "html": "A smooth vertical wall in the elementary Rankine solution means a zero wall-friction angle and horizontal soil thrust for level backfill.",
                "sources": [
                  {
                    "id": "CAP4-02-00097",
                    "label": "p. 8; topic 2 point 88"
                  }
                ]
              },
              {
                "html": "A thick weak layer over dense sand breaks the homogeneity assumption: strength and unit weight vary with depth and require layer-specific treatment.",
                "sources": [
                  {
                    "id": "CAP4-02-00086",
                    "label": "p. 8; topic 2 point 80"
                  }
                ]
              },
              {
                "html": "Culmann's graphical construction compares trial Coulomb wedges under irregular backfill and surcharge; for active pressure the critical wedge demands the maximum thrust.",
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
                "html": "Negative Rankine c'–φ' pressure near the top of a backfill marks a potential tension-crack zone, with crack-water pressure assessed separately, never a tensile support.",
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
        "cautions": [
          {
            "id": "caution-rigid-cone-rankine-plane",
            "status": "review",
            "prompt": "The rigid cone below a foundation makes 45° + φ/2 with the horizontal",
            "html": "<p>The capsule does not say which foundation model its cone belongs to, and the geometry cannot be resolved from the text. The defensible relation taught here is the Rankine active failure plane at \\(45^\\circ + \\phi/2\\) to the major principal plane; a wedge angle beneath a footing depends on the mechanism assumed.</p>",
            "sources": [
              {
                "id": "CAP4-02-00069",
                "label": "p. 8; topic 2 point 63"
              }
            ]
          },
          {
            "id": "caution-exploration-depth-boring",
            "status": "review",
            "prompt": "The depth of exploration is independent of the type of boring",
            "html": "<p>Read this as a planning principle: the required depth follows the foundation, its loads and the ground model, and the boring method is chosen to reach it. It is not a claim that any boring equipment can reach any depth.</p>",
            "sources": [
              {
                "id": "CAP4-02-00088",
                "label": "p. 8; topic 2 point 81"
              }
            ]
          },
          {
            "id": "caution-cohesive-active-root",
            "status": "corrected",
            "prompt": "Active earth pressure in cohesive soil is Ka γz − 2C Ka",
            "html": "<p>The printed relation loses the square root on \\(K_a\\) in the cohesion term. The Rankine c'–φ' active pressure is \\(K_a\\sigma_v' - 2c'\\sqrt{K_a}\\), with any water pressure added separately.</p>",
            "sources": [
              {
                "id": "CAP4-02-00089",
                "label": "p. 8; topic 2 point 82"
              }
            ]
          },
          {
            "id": "caution-culmann-coulomb-names",
            "status": "corrected",
            "prompt": "The Cullman graph is used in column wedge theory",
            "html": "<p>Both names are corrected. The construction is Culmann's graphical method, and it belongs to Coulomb's wedge theory of earth pressure; it has no connection with the buckling of structural columns.</p>",
            "sources": [
              {
                "id": "CAP4-02-00091",
                "label": "p. 8; topic 2 point 83"
              }
            ]
          },
          {
            "id": "caution-elastic-k0-numerator",
            "status": "corrected",
            "prompt": "At-rest coefficient for Poisson's ratio 0.4, printed with a separated numerator",
            "html": "<p>The separated numerator is restored: for an ideal elastic soil under zero lateral strain, \\(K_0 = \\nu/(1-\\nu)\\) = 0.4/0.6 = 0.667. Keep this elastic relation distinct from Jaky's empirical \\(K_0 = 1 - \\sin\\phi'\\) for normally consolidated soil.</p>",
            "sources": [
              {
                "id": "CAP4-02-00098",
                "label": "pp. 8, 9; topic 2 point 89"
              }
            ]
          }
        ],
        "gaps": [
          "Boring methods such as wash, percussion and rotary drilling, trial pits and the content of a site-investigation report are not examined in these capsule points.",
          "Retaining-wall stability checks for overturning, sliding and base pressure, and methods of wall improvement, are not covered.",
          "Coulomb's closed-form coefficients for wall friction and sloping backfill are not given.",
          "SPT overburden and energy correction formulas are not quantified; only the dilatancy step is.",
          "The capsule's rigid-cone diagram below a foundation was not reviewed, so no footing-wedge geometry is taught from it."
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
            "html": "<p>Foundations are grouped by how they pass load into the ground.</p><table><thead><tr><th scope='col'>Category</th><th scope='col'>Examples</th><th scope='col'>Load transfer</th></tr></thead><tbody><tr><th scope='row'>Shallow</th><td>isolated, strip, combined and strap footings; mat or raft</td><td>bearing over a broad base near the surface</td></tr><tr><th scope='row'>Deep</th><td>piles, drilled shafts, sunk wells</td><td>resistance developed at depth, below weak surface deposits</td></tr></tbody></table><p>A reinforced concrete raft that spreads most column loads directly onto near-surface ground, with no piles, remains a shallow foundation however large its plan area or heavy the building. A piled raft is a separate combined system, because its piles also carry load.</p><p>A <em>pile foundation</em> uses slender elements that resist load by shaft friction, by toe bearing or by both; reaching hard rock is not essential. Piles are often grouped for capacity, layout and moment resistance, but grouping is not part of the definition.</p><p>A single large-diameter pile under a column can be valid when its axial, lateral, moment, settlement, structural and construction-tolerance checks all pass. No rule requires three piles, or an even number, under a cap, and a single pile is never adequate automatically.</p>",
            "points": [
              {
                "html": "A ground-bearing reinforced concrete slab that carries most column loads without piles is a shallow mat or raft foundation, whatever its plan area.",
                "sources": [
                  {
                    "id": "CAP4-02-00101",
                    "label": "p. 9; topic 2 point 92"
                  }
                ]
              },
              {
                "html": "A pile foundation is a deep foundation: slender piles carry load below weak surface deposits by shaft friction, toe bearing or both.",
                "sources": [
                  {
                    "id": "CAP4-02-00102",
                    "label": "p. 9; topic 2 point 93"
                  }
                ]
              },
              {
                "html": "Piles need not be grouped: a single pile may be valid if all design and construction checks pass, including axial, lateral, moment and settlement checks.",
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
            "html": "<p>A continuous footing under a long load-bearing wall, much longer than it is wide, behaves as a <em>strip footing</em> away from its ends. Its load and bearing response are taken per unit length, and it bends mainly across its width, unlike an isolated pad that spreads one column load in two directions. A strap, by contrast, links separate footings.</p><p>A first plan area comes from average bearing pressure, with load and pressure on the same basis. When the allowable pressure is a gross value, the load must include the footing and the fill above it as well as the column load. Soil strength and settlement fix the allowable pressure; bending, shear and any nonuniform contact are checked afterwards.</p><p>A preliminary count of piers or piles uses the same idea: at least the load divided by the allowable load of one element, rounded up to a whole number. Layout, group response, moments, lateral loads, cap action and settlement are checked next, so no fixed number of piers suits every column.</p>",
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
              "html": "<p>With 120 kN of footing and fill and a gross allowable pressure of 150 kPa:</p>\\[A = \\dfrac{1200 + 120}{150} = 8.8\\ \\text{m}^2\\]<p>Leaving out the footing and fill gives 1200/150 = 8.0 m², which is too small. On identical piers of 250 kN allowable load each, 1200/250 = 4.8, so at least 5 piers are needed before group, cap and lateral checks.</p>"
            },
            "points": [
              {
                "html": "A continuous wall footing much longer than its width is idealized as a strip footing with predominantly transverse action, analysed per unit length.",
                "sources": [
                  {
                    "id": "CAP4-02-00001",
                    "label": "p. 6; topic 2 point 1"
                  }
                ]
              },
              {
                "html": "A 1200 kN column plus 120 kN of footing and fill on a 150 kPa gross allowable pressure needs a base area of at least 8.8 m².",
                "sources": [
                  {
                    "id": "CAP4-02-00104",
                    "label": "p. 9; topic 2 point 95"
                  }
                ]
              },
              {
                "html": "For preliminary axial sizing, a 1200 kN column on 250 kN piers needs 1200/250 = 4.8, rounded up to 5; no universal pier count exists.",
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
            "html": "<p>A <em>combined footing</em> shares one spread base between two or more columns, even when the other columns of the building have separate footings. It is the natural remedy when the isolated bases needed under two nearby columns would overlap in plan. Keeping both independent designs would count the same soil twice, so a single base is proportioned for the resultant of the column loads.</p><p>A uniform average contact pressure is a consistent first idealization only when the resultant of the loads passes through the plan centroid of the base. Two equal loads placed at equal distances from opposite ends of a rectangle meet this condition. Equal loads do not remove bending within the footing, and unequal edge distances or other moments destroy the condition even when the loads are equal.</p><p>A <em>strap footing</em> keeps separate bases and joins them with a rigid strap beam that is normally designed without soil support. It suits an edge column whose footing cannot be centred because of a boundary: the strap carries moment to an interior column's base and balances the eccentricity. Long spacing can make a solid combined footing uneconomical, but spacing alone does not define the choice.</p>",
            "points": [
              {
                "html": "Two adjacent columns sharing one common spread base, with separate foundations elsewhere in the building, form a combined footing.",
                "sources": [
                  {
                    "id": "CAP4-02-00108",
                    "label": "p. 9; topic 2 point 98"
                  }
                ]
              },
              {
                "html": "When isolated bases for nearby columns would overlap, replace them with a properly proportioned combined footing designed for the resultant load.",
                "sources": [
                  {
                    "id": "CAP4-02-00111",
                    "label": "p. 9; topic 2 point 100"
                  }
                ]
              },
              {
                "html": "Uniform average pressure suits a rectangular combined footing when the load resultant coincides with the footing's plan centroid, as with equal, symmetrically placed loads.",
                "sources": [
                  {
                    "id": "CAP4-02-00113",
                    "label": "p. 9; topic 2 point 102"
                  }
                ]
              },
              {
                "html": "An edge column that cannot be centred on its base is balanced by a strap footing: a rigid beam, normally designed without soil support, ties it to an interior base.",
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
            "html": "<p>When footings sized for heavy column loads on weak shallow soil would cover most of the building's plan, a <em>raft</em> is the first alternative to evaluate. It gives a continuous bearing area and can reduce differential movement, but it must still be checked for overall and differential settlement, flexure and punching.</p><p>The often-quoted trigger of footings covering more than half the plan area is an economic rule of thumb, not a code requirement. Shrinking the pads to raise their contact pressure is no remedy.</p><p>A raft does not solve every settlement problem. A wide raft stresses the ground to a considerable depth, so a thick, highly compressible clay layer well below it can still consolidate. Settlement analysis may then point to ground improvement, load reduction or another foundation system.</p><p>Recognized mat forms include:</p><ul><li>a flat plate, uniform or thickened beneath columns for stiffness and punching resistance;</li><li>a beam-and-slab raft, with a grid of connecting beams;</li><li>a cellular or box raft, with enclosed cells.</li></ul>",
            "points": [
              {
                "html": "Heavy loads on weak shallow soil, with pads covering most of the footprint, point first to a raft, checked for overall and differential settlement.",
                "sources": [
                  {
                    "id": "CAP4-02-00105",
                    "label": "p. 9; topic 2 point 96"
                  }
                ]
              },
              {
                "html": "A raft lowers contact pressure but cannot prevent consolidation settlement of the deeper clay when a thick compressible layer lies within its stressed zone.",
                "sources": [
                  {
                    "id": "CAP4-02-00106",
                    "label": "p. 9; topic 2 point 96"
                  }
                ]
              },
              {
                "html": "A continuous slab made deeper only beneath the columns, with no beam grid or cells, is a flat plate thickened beneath columns.",
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
                "html": "Removing 9000 kN of soil and adding a 9000 kN building and foundation over the same footprint leaves zero net added gross load: fully compensated.",
                "sources": [
                  {
                    "id": "CAP4-02-00095",
                    "label": "p. 8; topic 2 point 87"
                  }
                ]
              },
              {
                "html": "Equal excavated and building weights do not guarantee zero movement: heave, reloading, groundwater and differential response can still occur.",
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
            "html": "<p>Several hazards can set how deep a foundation must be placed. They are considered together, rather than choosing embedment from bearing pressure alone.</p><ul><li><em>Scour</em> can strip away the river-bed material that supports a foundation.</li><li><em>Frost heave</em> can lift footings placed within the frost-active zone of frost-susceptible ground.</li><li>Organic <em>topsoil</em> is usually compressible and unsuitable for bearing.</li></ul><p>A bridge pier can stand on an <em>open spread foundation</em>, a spread base built in an exposed excavation. That suits a site where firm material is found not far below the assessed scour depth, the excavation is stable and it can be dewatered safely. Bridge foundations are not universally open: deep alluvium or severe scour may favour piles, drilled shafts or sunk wells.</p>",
            "points": [
              {
                "html": "Scour, frost heave and compressible topsoil each push a founding level down: below erodible bed material, below the frost-active zone and below organic surface soil.",
                "sources": [
                  {
                    "id": "CAP4-02-00115",
                    "label": "p. 9; topic 2 point 104"
                  }
                ]
              },
              {
                "html": "Where competent material lies shallowly below the scour zone and the excavation can be dewatered safely, a bridge pier may use an open spread foundation.",
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
                "html": "A base at a nominal 500 mm depth that remains in loose uncontrolled fill shows that nominal embedment does not establish competent bearing support.",
                "sources": [
                  {
                    "id": "CAP4-02-00117",
                    "label": "p. 9; topic 2 point 106"
                  }
                ]
              },
              {
                "html": "Seasonal movement risk in expansive clay is judged from the active moisture-change depth and measured shrink-swell behavior, not from a nominal 0.9 m depth.",
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
                "html": "With p = 180 kPa, γ = 20 kN/m³ and φ = 30 degrees, the historical Rankine expression gives a calculated depth of 1.0 m, not a sufficient design depth.",
                "sources": [
                  {
                    "id": "CAP4-02-00167",
                    "label": "p. 10; topic 2 point 147"
                  }
                ]
              },
              {
                "html": "A base 800 mm below original ground that is later lowered by 400 mm has a final embedment of 400 mm, short by 100 mm of a stated 500 mm minimum.",
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
        "cautions": [
          {
            "id": "caution-strap-footing-spacing",
            "status": "review",
            "prompt": "Strap footings are used when the distance between columns is long",
            "html": "<p>The claim is qualified. A strap footing is chosen for an edge or boundary column whose footing cannot be centred, with the strap carrying moment to an interior base. Long spacing may make a combined footing uneconomical, but spacing alone does not define the selection.</p>",
            "sources": [
              {
                "id": "CAP4-02-00022",
                "label": "p. 7; topic 2 point 19"
              }
            ]
          },
          {
            "id": "caution-piles-need-not-be-grouped",
            "status": "corrected",
            "prompt": "Pile foundations are constructed in groups",
            "html": "<p>Not universally true. Groups are common for capacity, layout and moment resistance, but a single pile can be a valid foundation when its axial, lateral, moment, settlement, structural and tolerance checks pass.</p>",
            "sources": [
              {
                "id": "CAP4-02-00103",
                "label": "p. 9; topic 2 point 94"
              }
            ]
          },
          {
            "id": "caution-raft-half-area-heuristic",
            "status": "review",
            "prompt": "A mat is provided under heavy loads on weak soil when isolated footings cover more than 50% of the area",
            "html": "<p>The 50% figure is an economic heuristic, not an automatic requirement or code trigger. Whether a raft is viable still depends on bearing, flexure, punching and total and differential settlement.</p>",
            "sources": [
              {
                "id": "CAP4-02-00105",
                "label": "p. 9; topic 2 point 96"
              }
            ]
          },
          {
            "id": "caution-double-flat-plate-term",
            "status": "review",
            "prompt": "Double flat plate thickened is not a common type of mat foundation",
            "html": "<p>The capsule term double flat plate thickened is not a sufficiently defined structural arrangement. These notes teach clearly described forms, such as a flat plate thickened beneath columns, beam-and-slab rafts and cellular rafts, without declaring every double-slab system invalid.</p>",
            "sources": [
              {
                "id": "CAP4-02-00107",
                "label": "p. 9; topic 2 point 97"
              }
            ]
          },
          {
            "id": "caution-clay-depth-point-nine",
            "status": "review",
            "prompt": "The minimum depth of foundation in clayey soil is 0.9 m",
            "html": "<p>A universal 0.9 m minimum for clay foundations is unsupported, and no current code threshold is asserted here. In expansive clay the active moisture-change depth, measured shrink–swell behaviour and site conditions govern founding depth.</p>",
            "sources": [
              {
                "id": "CAP4-02-00112",
                "label": "p. 9; topic 2 point 101"
              }
            ]
          },
          {
            "id": "caution-equal-loads-rectangle",
            "status": "review",
            "prompt": "A rectangular combined footing is used when the two columns carry equal loads",
            "html": "<p>The capsule omits the layout condition. A rectangle gives uniform average pressure only when the load resultant coincides with its centroid, as with equal loads placed symmetrically; equal loads alone do not dictate the footing shape.</p>",
            "sources": [
              {
                "id": "CAP4-02-00113",
                "label": "p. 9; topic 2 point 102"
              }
            ]
          },
          {
            "id": "caution-open-foundation-bridges",
            "status": "review",
            "prompt": "The open foundation is used for bridges",
            "html": "<p>This describes one possible bridge foundation, not a universal solution. An open spread foundation needs competent material at shallow depth below the scour zone, a stable excavation and groundwater control; otherwise piles, shafts or wells may be preferred.</p>",
            "sources": [
              {
                "id": "CAP4-02-00114",
                "label": "p. 9; topic 2 point 103"
              }
            ]
          },
          {
            "id": "caution-footing-depth-500-ground",
            "status": "review",
            "prompt": "The minimum depth of footing below ground level is 500 mm",
            "html": "<p>This blanket minimum is not endorsed as current law or as sufficient design. A base at the nominal depth in loose uncontrolled fill still lacks competent support; investigation, improvement and applicable design rules decide adequacy.</p>",
            "sources": [
              {
                "id": "CAP4-02-00117",
                "label": "p. 9; topic 2 point 106"
              }
            ]
          },
          {
            "id": "caution-fixed-pier-count",
            "status": "corrected",
            "prompt": "The number of piers required for a column is 3",
            "html": "<p>A fixed count is unsupported and may confuse piers with a common pile-group arrangement. The number follows from load and element capacity, at least \\(P/Q_{\\text{allow}}\\) rounded up, and then from layout, group, lateral, cap and settlement checks.</p>",
            "sources": [
              {
                "id": "CAP4-02-00119",
                "label": "p. 9; topic 2 point 108"
              }
            ]
          },
          {
            "id": "caution-rankine-depth-fraction",
            "status": "corrected",
            "prompt": "Rankine's minimum depth of a shallow foundation, printed with a damaged fraction",
            "html": "<p>The extracted fraction is restored: \\(D_f = (p/\\gamma)\\,K_a^2\\) with \\(K_a = (1 - \\sin\\phi)/(1 + \\sin\\phi)\\). The equation is a historical idealization, not a sufficient modern depth prescription; scour, frost, competent strata, groundwater and settlement still govern.</p>",
            "sources": [
              {
                "id": "CAP4-02-00167",
                "label": "p. 10; topic 2 point 147"
              }
            ]
          },
          {
            "id": "caution-shallow-depth-500-normal",
            "status": "review",
            "prompt": "The minimum recommended depth of a shallow foundation in normal soil is 500 mm",
            "html": "<p>The unqualified 500 mm recommendation is not presented as a universal current-code rule. It is used only as an explicit project requirement measured from final adjacent ground, and meeting it does not by itself prove bearing or settlement adequacy.</p>",
            "sources": [
              {
                "id": "CAP4-02-00171",
                "label": "p. 10; topic 2 point 151"
              }
            ]
          }
        ],
        "gaps": [
          "Structural design of footings and rafts, including bending, one-way shear, punching shear and reinforcement, is outside these capsule points.",
          "Well foundations, caissons and drilled shafts are only named as alternatives; their construction and design are not explained.",
          "No verified current code values are given for minimum founding depth; the 0.9 m and 500 mm figures remain unverified.",
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
                "html": "A clay that once carried 240 kPa and now carries 120 kPa vertical effective stress has OCR = 2 and is overconsolidated.",
                "sources": [
                  {
                    "id": "CAP4-02-00031",
                    "label": "p. 7; topic 2 point 28"
                  }
                ]
              },
              {
                "html": "Erosion of thick overburden leaves the past maximum effective stress on record, so the clay becomes overconsolidated with OCR above 1.",
                "sources": [
                  {
                    "id": "CAP4-02-00036",
                    "label": "p. 7; topic 2 point 33"
                  }
                ]
              },
              {
                "html": "Reloading an overconsolidated clay without exceeding its preconsolidation stress gives lower compressibility along the recompression branch than virgin loading.",
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
            "html": "<p>When a saturated clay is loaded quickly, the added load is first carried by excess pore-water pressure. <em>Primary consolidation</em> is the time-dependent process that follows at constant total stress: water drains from the pores, the excess pore pressure dissipates, the effective stress rises by the same amount and the soil skeleton compresses. Water is expelled from the voids; the voids themselves are not expelled. Compaction, by contrast, rapidly expels air.</p><p>The <em>oedometer</em> reproduces the process in the laboratory. A specimen confined laterally in a ring is loaded in successive vertical increments while its axial deformation and the time it takes are recorded, giving compressibility and consolidation-rate parameters. Because lateral strain is prevented, the test does not directly give an unconstrained Young's modulus.</p><p>Consolidation does not require a water table at the ground surface. A saturated clay below a water table 2 m deep still consolidates under a new embankment, because drainage and the rise in effective stress within the compressible layer drive the process. The water table only sets the initial stresses.</p>",
            "formulas": [
              {
                "label": "Effective stress",
                "tex": "\\sigma' = \\sigma - u",
                "where": "<p>With total stress \\(\\sigma\\) held constant, \\(\\sigma'\\) rises as the excess pore pressure \\(u\\) falls.</p>"
              }
            ],
            "points": [
              {
                "html": "During primary consolidation at constant total stress, water drains, effective stress rises and volume decreases as the excess pore pressure dissipates.",
                "sources": [
                  {
                    "id": "CAP4-02-00044",
                    "label": "p. 7; topic 2 point 40"
                  }
                ]
              },
              {
                "html": "The oedometer loads a laterally confined specimen in vertical increments and records deformation with time, giving one-dimensional compressibility and consolidation rate.",
                "sources": [
                  {
                    "id": "CAP4-02-00046",
                    "label": "p. 7; topic 2 point 42"
                  }
                ]
              },
              {
                "html": "Clay below a water table 2 m deep can still consolidate: drainage and effective-stress increase can still compress the clay under a new sustained load.",
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
                "html": "Primary consolidation of 36 mm out of a final 60 mm corresponds to an average degree of consolidation of 60%.",
                "sources": [
                  {
                    "id": "CAP4-02-00048",
                    "label": "p. 7; topic 2 point 44"
                  }
                ]
              },
              {
                "html": "A 20 mm oedometer specimen draining at both top and bottom has an initial drainage path of 10 mm, half its thickness, for the time factor.",
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
                "html": "Immediate settlement of saturated clay before appreciable drainage is first estimated from elastic deformation with appropriate undrained stiffness.",
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
            "html": "<p>A predicted settlement is judged against a criterion specified for the particular structure, foundation type and soil. The capsule quotes 40 mm for an isolated footing on sand and 65 mm for one on clay, attributing both to an unspecified IS code. The edition, table and structural category are unverified, so these figures serve here only as stated project assumptions.</p><p>Exceeding a total-settlement limit is a serviceability noncompliance, not a shear failure, and adequate bearing capacity does not rescue it. Passing the total limit is not the whole story either: differential settlement and angular distortion are separate checks, and the margin left under a total limit is not a permissible differential settlement.</p><p>Guidance sometimes allows rafts on clay more total settlement than isolated footings. That reflects greater tolerance of uniform movement and the raft's ability to redistribute load, always subject to distortion limits. It neither accepts differential movement automatically nor shows that a raft eliminates it, and it says nothing about ultimate bearing capacity.</p>",
            "example": {
              "title": "Worked comparisons against stated project limits",
              "html": "<ul><li>Limit 40 mm, prediction 45 mm: the criterion is exceeded by 45 − 40 = 5 mm, a serviceability shortfall rather than a bearing failure.</li><li>Limit 65 mm, prediction 60 mm: the total check passes with 65 − 60 = 5 mm to spare, but differential and distortion checks are still outstanding.</li></ul>"
            },
            "points": [
              {
                "html": "Against a stated 40 mm project limit, a predicted 45 mm means the stated total-settlement criterion is exceeded by 5 mm; that is not a shear failure.",
                "sources": [
                  {
                    "id": "CAP4-02-00116",
                    "label": "p. 9; topic 2 point 105"
                  }
                ]
              },
              {
                "html": "A predicted 60 mm against a stated 65 mm limit means the total-settlement check passes, but overall serviceability is not yet established without differential checks.",
                "sources": [
                  {
                    "id": "CAP4-02-00145",
                    "label": "p. 10; topic 2 point 129"
                  }
                ]
              },
              {
                "html": "A larger permitted total settlement for a raft on clay reflects greater tolerance of uniform movement, subject to distortion limits.",
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
                "html": "The square-footing form of Terzaghi's equation, with c' = 10 kPa, q' = 18 kPa, γ = 18 kN/m³, B = 2 m and the rounded 20 degree factors, gives 435.3 kPa gross.",
                "sources": [
                  {
                    "id": "CAP4-02-00122",
                    "label": "p. 9; topic 2 point 111"
                  }
                ]
              },
              {
                "html": "With B the diameter, the unit-weight term of Terzaghi's circular-footing equation is \\(0.3\\gamma B N_\\gamma\\); 0.4 and 0.5 belong to the square and strip forms.",
                "sources": [
                  {
                    "id": "CAP4-02-00126",
                    "label": "p. 9; topic 2 point 114"
                  }
                ]
              },
              {
                "html": "The same inputs on a circular footing of 2 m diameter give 230.1 + 133.2 + 54 = 417.3 kPa gross ultimate pressure.",
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
            "html": "<p>A common textbook interpolation extends Terzaghi's equation to a rectangle of width \\(B\\) and length \\(L\\). The cohesion term is multiplied by \\(1 + 0.3B/L\\) and the unit-weight term by \\(1 - 0.2B/L\\). At \\(B/L = 1\\) these recover the square coefficients 1.3 and 0.5 × 0.8 = 0.4; as \\(B/L\\) approaches zero they recover the strip. It is a stated interpolation, not a current-code prescription.</p><p>The <em>net</em> ultimate pressure subtracts the overburden \\(q\\) already present at base level from the gross value, which turns \\(qN_q\\) into \\(q(N_q - 1)\\).</p><p>The <em>allowable bearing pressure</em> must satisfy both shear and settlement. Divide the net ultimate pressure by the shear factor of safety, compare the result with the net pressure that meets the settlement limit, and adopt the smaller. Keep net and gross bases consistent, and do not apply the shear factor again to the settlement value.</p>",
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
                "html": "Terzaghi's rectangular net interpolation is \\((1 + 0.3B/L)cN_c + q(N_q - 1)\\) plus \\(0.5\\gamma B N_\\gamma(1 - 0.2B/L)\\), with net surcharge from \\(N_q - 1\\).",
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
                "html": "For a 2 m wide footing with water 1 m below its base, γ = 18 and γ' = 10 kN/m³, the N<sub>γ</sub> term uses an average unit weight of 14 kN/m³.",
                "sources": [
                  {
                    "id": "CAP4-02-00058",
                    "label": "p. 7; topic 2 point 54"
                  }
                ]
              },
              {
                "html": "Water rising above the base changes the effective overburden at the base and the soil unit-weight term; the cohesion term alone is not the issue.",
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
            "html": "<p>Bearing capacity is a <em>resistance</em> of the soil and footing together. It depends on soil strength, which reflects density and fabric as well as grain size; on the stress conditions, which groundwater changes through effective stress; and on footing width, shape and embedment, which shape the failure mechanism. Sands with identical median grain size can still differ in density, groundwater and footing shape, and then in capacity.</p><p>Footing size enters explicitly. For an ideal surface strip on cohesionless soil with no cohesion and no surcharge, only the unit-weight term remains, and it is proportional to \\(B\\).</p><p>Applied load is <em>demand</em>. Doubling a centred service load on an unchanged footing doubles the applied pressure \\(P/A\\) and cuts the margin of safety, but it does not raise the modelled resistance to match. Load inclination, eccentricity, loading history or rate can alter the capacity model, so those conditions are not ignored.</p><p>Rock needs the same care. A soft-rock label carries no intrinsic bearing value: rock-mass performance depends on joints, weathering, weak seams, orientation, confinement and deformation, and any presumptive pressure needs an applicable source and conditions.</p>",
            "formulas": [
              {
                "label": "Surface strip on cohesionless soil",
                "tex": "q_u = 0.5\\,\\gamma B N_\\gamma",
                "where": "<p>With \\(c' = 0\\) and no surcharge, \\(q_u\\) is proportional to \\(B\\).</p>"
              }
            ],
            "points": [
              {
                "html": "Equal median grain size does not imply equal bearing capacity: strength, stress conditions and footing geometry also affect capacity.",
                "sources": [
                  {
                    "id": "CAP4-02-00124",
                    "label": "p. 9; topic 2 point 113"
                  }
                ]
              },
              {
                "html": "For an ideal surface strip with c' = 0 and no surcharge, \\(q_u = 0.5\\gamma B N_\\gamma\\), so the ultimate pressure doubles when the width doubles.",
                "sources": [
                  {
                    "id": "CAP4-02-00125",
                    "label": "p. 9; topic 2 point 113"
                  }
                ]
              },
              {
                "html": "Doubling a centred load on an unchanged footing means applied pressure rises; the model's resistance is not defined by that demand.",
                "sources": [
                  {
                    "id": "CAP4-02-00157",
                    "label": "p. 10; topic 2 point 139"
                  }
                ]
              },
              {
                "html": "A soft-rock label is not a design pressure: rock-mass characterization and checks for discontinuities, weathering and settlement come first.",
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
            "html": "<p>Three idealized modes describe how a shallow footing fails in bearing.</p><table><thead><tr><th scope='col'>Mode</th><th scope='col'>Rupture surface</th><th scope='col'>Load and settlement</th><th scope='col'>Typical ground</th></tr></thead><tbody><tr><th scope='row'>General shear</th><td>continuous, reaching the surface, with heave</td><td>clear peak</td><td>dense sand or stiff clay, shallow and homogeneous</td></tr><tr><th scope='row'>Local shear</th><td>partly developed, not reaching the surface</td><td>no distinct peak, progressive large settlement</td><td>relatively compressible sand</td></tr><tr><th scope='row'>Punching shear</th><td>shearing along the footing sides only</td><td>large penetration, little heave</td><td>highly compressible ground</td></tr></tbody></table><p>The mode follows the observed mechanism, not relative density alone. Very loose ground can punch rather than fail in local shear, and embedment or a strong layer over weak soil can change the mode. Soil punching also differs from structural punching of the footing slab.</p><p>Failure-plane angles depend on the mechanism assumed. Terzaghi's original rough-strip construction takes the central wedge faces at φ to the horizontal, whereas Prandtl-type constructions use \\(45^\\circ + \\phi/2\\). An angle from one model is not transferred to another without checking its assumptions.</p>",
            "points": [
              {
                "html": "Progressive settlement with partial rupture zones and no distinct peak, on relatively compressible sand, matches local shear failure.",
                "sources": [
                  {
                    "id": "CAP4-02-00144",
                    "label": "p. 10; topic 2 point 128"
                  }
                ]
              },
              {
                "html": "Punching bearing failure shows large penetration with localized side shearing and little surface heave, typically in highly compressible ground.",
                "sources": [
                  {
                    "id": "CAP4-02-00159",
                    "label": "p. 10; topic 2 point 141"
                  }
                ]
              },
              {
                "html": "Terzaghi uses φ to the horizontal for the central-wedge faces, whereas the Prandtl-type angle is \\(45^\\circ + \\phi/2\\) to horizontal.",
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
                "html": "In homogeneous undrained clay the plate's ultimate pressure carries over to the footing, so a 400 kPa plate result gives 1600 kN for a 2 m square footing.",
                "sources": [
                  {
                    "id": "CAP4-02-00061",
                    "label": "p. 7; topic 2 point 56"
                  }
                ]
              },
              {
                "html": "Under the approximate sand scaling \\(q_{uf} = q_{up}B_f/B_p\\), a 0.5 m plate failing at 150 kPa suggests 600 kPa for a 2 m footing.",
                "sources": [
                  {
                    "id": "CAP4-02-00064",
                    "label": "p. 8; topic 2 point 59"
                  }
                ]
              },
              {
                "html": "For geometrically similar squares on homogeneous sand, a footing three times the plate width carries 27 times the plate's ultimate load: pressure ×3, area ×9.",
                "sources": [
                  {
                    "id": "CAP4-02-00123",
                    "label": "p. 9; topic 2 point 112"
                  }
                ]
              },
              {
                "html": "Plate testing is possible with groundwater below the plate, but design must assess the changed groundwater condition if the water table can later rise.",
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
            "html": "<p>The <em>modulus of subgrade reaction</em> \\(k_s\\) is a secant ratio of pressure to settlement from a plate test, in kN/m³. It describes the tested plate, pressure and ground condition, so it is not a soil constant: plate size, stress level and groundwater all affect it.</p><p>Groundwater can change effective stress and stiffness. Matched plate tests before and after a rise in the water table can therefore give different moduli, which contradicts any claim that \\(k_s\\) is independent of the water table. One pair of tests does not, however, establish a universal factor.</p><p>Contact pressure beneath a raft follows <em>soil–structure interaction</em>. The relative stiffness of raft and ground, the layout of column loads, the stratigraphy and nonlinear yielding all influence it. Weak soil alone does not force uniform pressure, a stiff raft enforces compatible movement rather than equal pressure, and pressure does not simply follow each column's share of the load. Uniform pressure is an idealization that needs justification.</p>",
            "formulas": [
              {
                "label": "Modulus of subgrade reaction",
                "tex": "k_s = \\dfrac{p}{\\delta}",
                "where": "<p>\\(p\\) is the applied pressure and \\(\\delta\\) the corresponding settlement in metres.</p>"
              }
            ],
            "example": {
              "title": "Worked example: matched plate tests at 120 kPa",
              "html": "\\[\\begin{aligned} k_{s1} &amp;= \\dfrac{120}{0.006} = 20\\,000\\ \\text{kN/m}^3 \\\\ k_{s2} &amp;= \\dfrac{120}{0.012} = 10\\,000\\ \\text{kN/m}^3 \\end{aligned}\\]<p>The 6 mm and 12 mm settlements are converted to metres first. The modulus halved in this particular pair of tests, so it clearly depends on the groundwater condition, but no general halving rule follows.</p>"
            },
            "points": [
              {
                "html": "Plate tests at 120 kPa settling 6 mm and then 12 mm give secant moduli of 20000 and then 10000 kN/m³, so the modulus is not independent of groundwater.",
                "sources": [
                  {
                    "id": "CAP4-02-00154",
                    "label": "p. 10; topic 2 point 136"
                  }
                ]
              },
              {
                "html": "Uniform raft contact pressure cannot be assumed from weak soil alone: relative stiffness, load layout and ground response must be assessed.",
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
                "html": "A 3 m by 2 m footing with 900 kN and 180 kN m across its 2 m width has e = 0.20 m and extreme pressures of 240 kPa and 60 kPa.",
                "sources": [
                  {
                    "id": "CAP4-02-00164",
                    "label": "p. 10; topic 2 point 145"
                  }
                ]
              },
              {
                "html": "When e exceeds B/6 and the linear formula gives a negative edge pressure, recalculate a compression-only contact area satisfying force and moment balance.",
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
        "cautions": [
          {
            "id": "caution-consolidation-water-table",
            "status": "corrected",
            "prompt": "Consolidation settlement is calculated for a clay layer with the water table at the ground surface",
            "html": "<p>Read as a restriction, this is incorrect. Primary consolidation depends on drainage and the effective-stress increase in the compressible layer, so a clay below a water table at any depth can consolidate. The water-table position only sets the initial stresses.</p>",
            "sources": [
              {
                "id": "CAP4-02-00034",
                "label": "p. 7; topic 2 point 31"
              }
            ]
          },
          {
            "id": "caution-oedometer-specimen-height",
            "status": "review",
            "prompt": "The typical height of an oedometer specimen is 20 mm",
            "html": "<p>20 mm describes a typical specimen size, not a mandatory dimension. Calculations use the actual thickness supplied, and the drainage path is half of it when both faces drain.</p>",
            "sources": [
              {
                "id": "CAP4-02-00053",
                "label": "p. 7; topic 2 point 49"
              }
            ]
          },
          {
            "id": "caution-plate-test-groundwater",
            "status": "review",
            "prompt": "Any water-table level below the footing is not a limitation of the plate load test",
            "html": "<p>Testing is possible with groundwater below the plate, but that does not make the interpretation independent of groundwater. The result reflects the conditions tested, and a seasonal rise into the footing's influence zone must be assessed in design.</p>",
            "sources": [
              {
                "id": "CAP4-02-00054",
                "label": "p. 7; topic 2 point 50"
              }
            ]
          },
          {
            "id": "caution-water-table-correction-range",
            "status": "review",
            "prompt": "In Terzaghi's theory the water-table correction applies up to a depth B below the footing",
            "html": "<p>The B-deep range is a conventional correction zone for the unit-weight term, applied as an approximate linear interpolation. It is not a universal physical boundary of the failure mechanism or of every groundwater effect.</p>",
            "sources": [
              {
                "id": "CAP4-02-00058",
                "label": "p. 7; topic 2 point 54"
              }
            ]
          },
          {
            "id": "caution-plate-clay-pressure-not-load",
            "status": "corrected",
            "prompt": "For clay, the footing's ultimate bearing capacity from a plate load test equals the plate's",
            "html": "<p>The equality refers to ultimate bearing <em>pressures</em> under comparable conditions, not to identical total failure loads. The footing's ultimate load is the plate pressure multiplied by the footing area.</p>",
            "sources": [
              {
                "id": "CAP4-02-00061",
                "label": "p. 7; topic 2 point 56"
              }
            ]
          },
          {
            "id": "caution-plate-sand-width-ratio",
            "status": "corrected",
            "prompt": "For cohesionless soil, footing capacity is plate capacity multiplied by a width ratio of ambiguous order",
            "html": "<p>The capsule's fraction order is ambiguous. The approximate relation is \\(q_{uf} = q_{up}\\,B_f/B_p\\), footing width over plate width, and it applies only to comparable shallow footings on homogeneous sand under limited assumptions.</p>",
            "sources": [
              {
                "id": "CAP4-02-00064",
                "label": "p. 8; topic 2 point 59"
              }
            ]
          },
          {
            "id": "caution-rigid-cone-wedge-model",
            "status": "review",
            "prompt": "The rigid cone below a foundation is inclined at 45° + φ/2 to the horizontal",
            "html": "<p>The unqualified angle is model-dependent: Terzaghi's original construction uses φ to the horizontal, whereas Prandtl-type mechanisms use \\(45^\\circ + \\phi/2\\). No source image was reviewed; the distinction rests on the existing audited wedge-angle note.</p>",
            "sources": [
              {
                "id": "CAP4-02-00087",
                "label": "p. 8; topic 2 point 63"
              }
            ]
          },
          {
            "id": "caution-sand-settlement-40",
            "status": "review",
            "prompt": "The IS code permits a maximum settlement of 40 mm for isolated foundations on sand",
            "html": "<p>The code, edition, table and structural category behind this value are unverified. The 40 mm figure is used here only as a stated project assumption for comparison, not as a current code limit.</p>",
            "sources": [
              {
                "id": "CAP4-02-00116",
                "label": "p. 9; topic 2 point 105"
              }
            ]
          },
          {
            "id": "caution-raft-uniform-pressure",
            "status": "corrected",
            "prompt": "On weak soil, raft contact pressure tends to be uniform",
            "html": "<p>This universal claim is rejected. Contact pressure follows soil–structure interaction, including relative stiffness, load layout, stratigraphy and yielding; uniform pressure is an idealization that needs justification.</p>",
            "sources": [
              {
                "id": "CAP4-02-00118",
                "label": "p. 9; topic 2 point 107"
              }
            ]
          },
          {
            "id": "caution-soft-rock-440",
            "status": "review",
            "prompt": "Soft rock has a bearing capacity of 440 kN/m²",
            "html": "<p>The 440 kPa value is unverified, and these notes endorse no replacement number. A rock-foundation pressure needs rock-mass characterization, including discontinuities and weathering, together with settlement checks.</p>",
            "sources": [
              {
                "id": "CAP4-02-00121",
                "label": "p. 9; topic 2 point 110"
              }
            ]
          },
          {
            "id": "caution-plate-sand-load-scaling",
            "status": "review",
            "prompt": "Plate-load bearing capacity for cohesionless soil scales with Bf/Bp",
            "html": "<p>The capsule repeats the approximate sand pressure–width relation. It is taught here only under explicit similarity and homogeneity assumptions, and its load consequence differs: total load scales with the pressure ratio multiplied by the area ratio.</p>",
            "sources": [
              {
                "id": "CAP4-02-00123",
                "label": "p. 9; topic 2 point 112"
              }
            ]
          },
          {
            "id": "caution-circular-footing-diameter",
            "status": "corrected",
            "prompt": "Circular-footing bearing capacity written without B in the unit-weight term",
            "html": "<p>The printed or extracted expression omits the diameter \\(B\\) from the unit-weight term, which makes it dimensionally inconsistent. The classical circular form ends in \\(0.3\\gamma B N_\\gamma\\), after \\(1.3cN_c + qN_q\\).</p>",
            "sources": [
              {
                "id": "CAP4-02-00126",
                "label": "p. 9; topic 2 point 114"
              }
            ]
          },
          {
            "id": "caution-rectangular-formula-signs",
            "status": "corrected",
            "prompt": "Terzaghi's rectangular-footing formula printed with a plus sign and a detached shape term",
            "html": "<p>The extracted formula shows a plus sign and a detached shape term where the common interpolation multiplies the unit-weight term by \\(1 - 0.2B/L\\). The net form is \\((1 + 0.3B/L)cN_c + q(N_q - 1)\\) plus \\(0.5\\gamma B N_\\gamma(1 - 0.2B/L)\\), a textbook interpolation rather than a code prescription.</p>",
            "sources": [
              {
                "id": "CAP4-02-00132",
                "label": "p. 9; topic 2 point 119"
              }
            ]
          },
          {
            "id": "caution-local-shear-loose-soil",
            "status": "review",
            "prompt": "Local shear failure occurs in loose soil",
            "html": "<p>The association is qualified by the observed mechanism. Local shear shows partial rupture and progressive settlement without a clear peak, but very loose or highly compressible ground can fail by punching instead; relative density alone does not fix the mode.</p>",
            "sources": [
              {
                "id": "CAP4-02-00144",
                "label": "p. 10; topic 2 point 128"
              }
            ]
          },
          {
            "id": "caution-clay-settlement-65",
            "status": "review",
            "prompt": "The IS code permits a maximum settlement of 65 mm for isolated foundations on clay",
            "html": "<p>The code, edition, table and structural category are unverified. The 65 mm figure is treated only as a stated project assumption, and passing a total-settlement limit does not settle differential movement or overall serviceability.</p>",
            "sources": [
              {
                "id": "CAP4-02-00145",
                "label": "p. 10; topic 2 point 129"
              }
            ]
          },
          {
            "id": "caution-subgrade-water-table",
            "status": "corrected",
            "prompt": "The coefficient of subgrade reaction does not depend on the water table",
            "html": "<p>This claim is corrected. Groundwater can change effective stress and stiffness, so plate tests before and after a water-table rise can give different secant moduli; no universal numerical factor follows from one pair of tests.</p>",
            "sources": [
              {
                "id": "CAP4-02-00154",
                "label": "p. 10; topic 2 point 136"
              }
            ]
          },
          {
            "id": "caution-overconsolidation-less-settlement",
            "status": "review",
            "prompt": "Over-consolidated soil results in less settlement",
            "html": "<p>The claim holds conditionally: for comparable soils, reloading below the preconsolidation stress follows the stiffer recompression branch. If the load carries the stress beyond the past maximum, virgin compression adds settlement.</p>",
            "sources": [
              {
                "id": "CAP4-02-00155",
                "label": "p. 10; topic 2 point 137"
              }
            ]
          },
          {
            "id": "caution-capacity-versus-load",
            "status": "review",
            "prompt": "The bearing capacity of soil does not depend on the load from the structure",
            "html": "<p>Qualified: the magnitude of the service load is demand, distinct from resistance. Loading conditions such as inclination, eccentricity, history and rate can nevertheless change the bearing-capacity model.</p>",
            "sources": [
              {
                "id": "CAP4-02-00157",
                "label": "p. 10; topic 2 point 139"
              }
            ]
          },
          {
            "id": "caution-raft-settlement-tolerance",
            "status": "review",
            "prompt": "Permissible settlement is relatively higher for a mat foundation on clay",
            "html": "<p>No code, edition or structural category is given, so only the conditional principle is taught: a raft may tolerate more uniform settlement, subject to differential and distortion limits.</p>",
            "sources": [
              {
                "id": "CAP4-02-00158",
                "label": "p. 10; topic 2 point 140"
              }
            ]
          },
          {
            "id": "caution-punching-dense-soils",
            "status": "corrected",
            "prompt": "Punching shear failure may occur in dense sand and stiff clay",
            "html": "<p>As a general classification the association is unreliable. Punching is characteristic of highly compressible ground, while dense sand and stiff clay usually fail in general shear under shallow homogeneous conditions. Any special stratification or embedment that permits punching must be stated.</p>",
            "sources": [
              {
                "id": "CAP4-02-00159",
                "label": "p. 10; topic 2 point 141"
              }
            ]
          },
          {
            "id": "caution-immediate-settlement-factor",
            "status": "corrected",
            "prompt": "Immediate settlement of cohesive soil uses the factor 1 + μ²",
            "html": "<p>The damaged factor is corrected: the elastic expression is \\(S_i = qB(1 - \\nu^2)I/E_s\\), including the influence factor \\(I\\) that the capsule omits. Using \\(1 + \\nu^2\\) overestimates the settlement.</p>",
            "sources": [
              {
                "id": "CAP4-02-00163",
                "label": "p. 10; topic 2 point 144"
              }
            ]
          }
        ],
        "gaps": [
          "Consolidation settlement from compression indices, and the relation between time factor and degree of consolidation, are not calculated in these capsule points.",
          "Secondary compression appears only as creep after primary consolidation; no coefficient or calculation is given.",
          "Bearing-capacity factors beyond the rounded 20-degree row and the undrained case, and depth, inclination or code-based factors, are not covered.",
          "The IS settlement limits quoted by the capsule remain unverified, and no presumptive bearing values for soil or rock are endorsed.",
          "Plate-load-test procedure, plate sizes and loading increments are not described."
        ]
      }
    });
})();
