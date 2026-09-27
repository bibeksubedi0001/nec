(function () {
    "use strict";
    window.CIVIL_PAST_NOTE_TOPICS = window.CIVIL_PAST_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_PAST_NOTE_TOPICS, {
     "ACiE0201": {
      "code": "ACiE0201",
      "questionCount": 25,
      "format": 2,
      "summary": "<p>This subchapter covers what soil is made of and how it is tested and classified. The past-paper questions test phase relationships and dry density, water content by pycnometer, density index, silt size limits and grading coefficients, USCS symbols and the plasticity chart, falling-head permeability, capillarity, the core cutter and the soils of Nepal.</p>",
      "blocks": [
       {
        "id": "phase-relationships-and-dry-density",
        "title": "Phase relationships, degree of saturation and dry density",
        "html": "<p>Soil is a three-phase system of solids, water and air. Volume ratios describe how much of it is void space: the <em>void ratio</em> \\(e\\) compares voids with solids, the <em>porosity</em> \\(n\\) compares voids with the total volume, and the <em>degree of saturation</em> \\(S\\) is the fraction of the voids filled with water, 0 for dry and 1 for saturated soil.</p><p>Weights are linked to volumes through the specific gravity \\(G\\) of the solids. The dry unit weight can be written in several equivalent forms, from the bulk unit weight and water content, from the void ratio, or from the air content.</p>",
        "formulas": [
         {
          "label": "Volume ratios",
          "tex": "S = \\dfrac{V_w}{V_v}, \\quad n = \\dfrac{V_v}{V}, \\quad e = \\dfrac{V_v}{V_s}"
         },
         {
          "label": "Porosity, void ratio and saturation",
          "tex": "n = \\dfrac{e}{1 + e}, \\qquad S e = w G"
         },
         {
          "label": "Dry unit weight",
          "tex": "\\begin{aligned} \\gamma_d &= \\dfrac{\\gamma}{1 + w} = \\dfrac{G\\gamma_w}{1 + e} \\\\ &= \\dfrac{(1 - n_a)G\\gamma_w}{1 + wG} \\end{aligned}"
         }
        ],
        "example": {
         "title": "Worked examples: porosity and specific weight",
         "html": "<p>A saturated soil with \\(G = 2.6\\) and \\(w = 45\\%\\) has \\(e = wG = 0.45 \\times 2.6 = 1.17\\), so \\(n = 1.17/2.17 \\approx 0.54\\), which rounds to 0.55.</p><p>Soil solids with \\(G = 1.527\\) have a specific weight \\(\\gamma = G\\gamma_w\\):</p>\\[\\gamma = 1.527 \\times 9810 \\approx 14980\\ \\text{N/m}^3\\]"
        },
        "points": [
         {
          "html": "The degree of saturation is the ratio \\(V_w/V_v\\): the volume of water over the total volume of voids.",
          "sources": [
           {
            "id": "PAST-05-051",
            "label": "Set 5 · Q51"
           },
           {
            "id": "PAST-18-025",
            "label": "Set 18 · Q25"
           }
          ]
         },
         {
          "html": "A fully saturated soil with specific gravity 2.6 and water content 45% has a porosity of about 0.55.",
          "sources": [
           {
            "id": "PAST-06-079",
            "label": "Set 6 · Q79"
           }
          ]
         },
         {
          "html": "All three expressions give the dry density: \\(\\gamma/(1+w)\\), \\(G\\gamma_w/(1+e)\\) and \\((1 - n_a)G\\gamma_w/(1+wG)\\).",
          "sources": [
           {
            "id": "PAST-08-065",
            "label": "Set 8 · Q65"
           },
           {
            "id": "PAST-15-012",
            "label": "Set 15 · Q12"
           }
          ]
         },
         {
          "html": "A specific gravity of 1.527 corresponds to a specific weight of about 14980 N/m<sup>3</sup>.",
          "sources": [
           {
            "id": "PAST-15-062",
            "label": "Set 15 · Q62"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-051",
          "label": "Set 5 · Q51"
         },
         {
          "id": "PAST-18-025",
          "label": "Set 18 · Q25"
         },
         {
          "id": "PAST-06-079",
          "label": "Set 6 · Q79"
         },
         {
          "id": "PAST-08-065",
          "label": "Set 8 · Q65"
         },
         {
          "id": "PAST-15-012",
          "label": "Set 15 · Q12"
         },
         {
          "id": "PAST-15-062",
          "label": "Set 15 · Q62"
         }
        ]
       },
       {
        "id": "pycnometer-water-content-and-density-index",
        "title": "Water content by pycnometer and the density index of sand",
        "html": "<p>The pycnometer method finds the water content of a sand quickly from four weighings: empty jar \\(W_1\\), jar with wet soil \\(W_2\\), jar with soil topped up with water \\(W_3\\), and jar full of water \\(W_4\\). The specific gravity of the solids must be known.</p><p>The <em>density index</em>, or relative density, places a sand's current void ratio between its loosest and densest states. The loosest state has the largest void ratio \\(e_{\\text{max}}\\) and the densest the smallest \\(e_{\\text{min}}\\); a current porosity is first converted with \\(e = n/(1 - n)\\).</p>",
        "formulas": [
         {
          "label": "Pycnometer water content",
          "tex": "w = \\left[\\dfrac{W_2 - W_1}{W_3 - W_4} \\cdot \\dfrac{G - 1}{G} - 1\\right] \\times 100"
         },
         {
          "label": "Density index",
          "tex": "I_D = \\dfrac{e_{\\text{max}} - e}{e_{\\text{max}} - e_{\\text{min}}}"
         }
        ],
        "example": {
         "title": "Worked examples: pycnometer and density index",
         "html": "<p>400 g of wet sand, \\(W_3 = 2150\\) g, \\(W_4 = 1950\\) g and \\(G = 2.5\\):</p>\\[w = \\left[\\dfrac{400}{200} \\cdot \\dfrac{1.5}{2.5} - 1\\right] \\times 100 = 20\\%\\]<p>Porosity 30% gives \\(e = 0.3/0.7 = 0.429\\). With \\(e_{\\text{max}} = 0.92\\) and \\(e_{\\text{min}} = 0.35\\):</p>\\[I_D = \\dfrac{0.92 - 0.429}{0.92 - 0.35} \\approx 0.861\\]"
        },
        "points": [
         {
          "html": "A pycnometer holding 400 g of wet sand that weighs 2150 g full, against 1950 g full of water, gives a water content of 20% when \\(G = 2.5\\).",
          "sources": [
           {
            "id": "PAST-05-078",
            "label": "Set 5 · Q78"
           },
           {
            "id": "PAST-18-080",
            "label": "Set 18 · Q80"
           }
          ]
         },
         {
          "html": "A sand at 30% porosity with loosest and densest void ratios of 0.92 and 0.35 has a density index of 0.861.",
          "sources": [
           {
            "id": "PAST-13-079",
            "label": "Set 13 · Q79"
           },
           {
            "id": "PAST-17-065",
            "label": "Set 17 · Q65"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-078",
          "label": "Set 5 · Q78"
         },
         {
          "id": "PAST-18-080",
          "label": "Set 18 · Q80"
         },
         {
          "id": "PAST-13-079",
          "label": "Set 13 · Q79"
         },
         {
          "id": "PAST-17-065",
          "label": "Set 17 · Q65"
         }
        ]
       },
       {
        "id": "grain-size-and-grading",
        "title": "Grain size limits and the grading coefficients",
        "html": "<p>Soil particles are named by size. In the IS classification clay is finer than 0.002 mm, silt runs from 0.002 mm to 0.075 mm and sand from there to 4.75 mm; the MIT and BS systems end silt at about 0.06 mm. The 75 micrometre sieve therefore separates fines from the coarse fraction.</p><p>A sieve analysis gives the grading curve, from which \\(D_{10}\\), \\(D_{30}\\) and \\(D_{60}\\) are read. A soil is well graded when the coefficient of uniformity exceeds 6 for sand (4 for gravel) and the coefficient of curvature lies between 1 and 3.</p>",
        "formulas": [
         {
          "label": "Coefficient of uniformity",
          "tex": "C_u = \\dfrac{D_{60}}{D_{10}}"
         },
         {
          "label": "Coefficient of curvature",
          "tex": "C_c = \\dfrac{D_{30}^2}{D_{10}\\,D_{60}}"
         }
        ],
        "points": [
         {
          "html": "The maximum grain size of silt is about 0.06 mm (0.075 mm in IS); coarser grains are sand.",
          "sources": [
           {
            "id": "PAST-11-002",
            "label": "Set 11 · Q2"
           }
          ]
         },
         {
          "html": "The minimum size of silt is 0.002 mm; finer particles are classed as clay.",
          "sources": [
           {
            "id": "PAST-R2083-017",
            "label": "2083 recall · Q17"
           }
          ]
         },
         {
          "html": "The coefficient of uniformity is \\(D_{60}/D_{10}\\).",
          "sources": [
           {
            "id": "PAST-10-055",
            "label": "Set 10 · Q55"
           }
          ]
         },
         {
          "html": "A well graded sand has a coefficient of uniformity greater than 6.",
          "sources": [
           {
            "id": "PAST-08-041",
            "label": "Set 8 · Q41"
           }
          ]
         },
         {
          "html": "For a well graded soil the coefficient of curvature lies between 1 to 3.",
          "sources": [
           {
            "id": "PAST-15-015",
            "label": "Set 15 · Q15"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-11-002",
          "label": "Set 11 · Q2"
         },
         {
          "id": "PAST-R2083-017",
          "label": "2083 recall · Q17"
         },
         {
          "id": "PAST-10-055",
          "label": "Set 10 · Q55"
         },
         {
          "id": "PAST-08-041",
          "label": "Set 8 · Q41"
         },
         {
          "id": "PAST-15-015",
          "label": "Set 15 · Q15"
         }
        ]
       },
       {
        "id": "classification-and-identification",
        "title": "USCS symbols, the plasticity chart and field identification",
        "html": "<p>In the Unified Soil Classification System the first letter names the main fraction, G for gravel, S for sand, M for silt and C for clay, and the second describes grading or fines. Coarse soils are classified by grain size distribution, while fine-grained soils are classified by plasticity, from their liquid limit and plasticity index on Casagrande's chart.</p><p>On that chart the A-line, \\(PI = 0.73(LL - 20)\\), separates clays above from silts below, and \\(LL = 50\\) separates low (L) from high (H) plasticity. In the field the dilatancy (shaking) test identifies fine-grained soils: silts show water on shaking and lose it on squeezing, clays do not.</p>",
        "example": {
         "title": "Worked example: placing a soil on the plasticity chart",
         "html": "<p>\\(LL = 60\\%\\) and \\(PL = 40\\%\\) give \\(PI = 20\\). The A-line at \\(LL = 60\\) is \\(0.73 \\times 40 = 29.2\\), so the soil plots below it; with \\(LL \\gt 50\\) it is MH, a silt of high plasticity.</p>"
        },
        "points": [
         {
          "html": "SC means clayey sand: sand with plastic fines.",
          "sources": [
           {
            "id": "PAST-06-007",
            "label": "Set 6 · Q7"
           }
          ]
         },
         {
          "html": "Under USCS, fine grained soils are classified on the basis of plasticity, using the liquid limit and plasticity index.",
          "sources": [
           {
            "id": "PAST-14-050",
            "label": "Set 14 · Q50"
           }
          ]
         },
         {
          "html": "A soil with liquid limit 60% and plastic limit 40% plots below the A-line with high liquid limit, so it is MH.",
          "sources": [
           {
            "id": "PAST-18-023",
            "label": "Set 18 · Q23"
           }
          ]
         },
         {
          "html": "The dilatancy test identifies fine grained soil, separating quick-reacting silts from clays.",
          "sources": [
           {
            "id": "PAST-11-001",
            "label": "Set 11 · Q1"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-007",
          "label": "Set 6 · Q7"
         },
         {
          "id": "PAST-14-050",
          "label": "Set 14 · Q50"
         },
         {
          "id": "PAST-18-023",
          "label": "Set 18 · Q23"
         },
         {
          "id": "PAST-11-001",
          "label": "Set 11 · Q1"
         }
        ]
       },
       {
        "id": "permeability-tests-and-capillarity",
        "title": "Permeability tests and capillary water",
        "html": "<p>Permeability is measured in the laboratory by two tests. The <em>constant-head test</em> keeps the head fixed and collects the steady flow, which suits coarse, highly permeable sands and gravels. The <em>falling-head test</em> records how fast the water level drops in a standpipe, which measures the small flows through cohesive or less permeable soils such as fine sands, silts and clays.</p><p>Above the water table, water rises into the fine pores and is held there by surface tension acting at the curved menisci; the finer the pores, the higher the capillary rise.</p>",
        "points": [
         {
          "html": "The falling head permeability test is used for less permeable soil, where the flow is too small to measure at constant head.",
          "sources": [
           {
            "id": "PAST-09-076",
            "label": "Set 9 · Q76"
           }
          ]
         },
         {
          "html": "The falling head test suits cohesive or less permeable soils; constant head tests suit sands and gravels.",
          "sources": [
           {
            "id": "PAST-14-038",
            "label": "Set 14 · Q38"
           }
          ]
         },
         {
          "html": "Capillary water is held above the water table by surface tension at the menisci in the soil pores.",
          "sources": [
           {
            "id": "PAST-09-016",
            "label": "Set 9 · Q16"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-09-076",
          "label": "Set 9 · Q76"
         },
         {
          "id": "PAST-14-038",
          "label": "Set 14 · Q38"
         },
         {
          "id": "PAST-09-016",
          "label": "Set 9 · Q16"
         }
        ]
       },
       {
        "id": "field-density-and-soil-deposits",
        "title": "Field density by core cutter, and soil deposits",
        "html": "<p>In-situ density is measured by driving a <em>core cutter</em> of known volume into the ground, weighing the soil it retains and correcting for water content. It works in soft, fine-grained cohesive soils free of stones; in gravelly or cohesionless soils the sand-replacement method is used instead.</p><p>Soils are also described by how they were formed. <em>Alluvial soils</em> are transported soils deposited by rivers on their flood plains and deltas. The Kathmandu valley floor is an old lake deposit of soft silty clays, with organic and dark clay layers known locally as kalimati.</p>",
        "points": [
         {
          "html": "The core cutter method gives the in-situ dry density of soil, specifically in fine-grained cohesive soils without stones.",
          "sources": [
           {
            "id": "PAST-17-022",
            "label": "Set 17 · Q22"
           }
          ]
         },
         {
          "html": "Soil formed by the deposition of silt brought down by rivers is alluvial soil.",
          "sources": [
           {
            "id": "PAST-11-014",
            "label": "Set 11 · Q14"
           }
          ]
         },
         {
          "html": "The soil of the Kathmandu valley fits all these descriptions: silty clay, organic layers and black clay.",
          "sources": [
           {
            "id": "PAST-10-002",
            "label": "Set 10 · Q2"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-17-022",
          "label": "Set 17 · Q22"
         },
         {
          "id": "PAST-11-014",
          "label": "Set 11 · Q14"
         },
         {
          "id": "PAST-10-002",
          "label": "Set 10 · Q2"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Degree of saturation",
        "tex": "S = \\dfrac{V_w}{V_v}"
       },
       {
        "label": "Porosity from void ratio",
        "tex": "n = \\dfrac{e}{1 + e}"
       },
       {
        "label": "Saturation, void ratio and water content",
        "tex": "S e = w G"
       },
       {
        "label": "Dry unit weight",
        "tex": "\\gamma_d = \\dfrac{\\gamma}{1 + w} = \\dfrac{G\\gamma_w}{1 + e}"
       },
       {
        "label": "Specific weight of solids",
        "tex": "\\gamma_s = G\\gamma_w"
       },
       {
        "label": "Density index",
        "tex": "I_D = \\dfrac{e_{\\text{max}} - e}{e_{\\text{max}} - e_{\\text{min}}}"
       },
       {
        "label": "Coefficient of uniformity",
        "tex": "C_u = \\dfrac{D_{60}}{D_{10}}"
       },
       {
        "label": "Coefficient of curvature",
        "tex": "C_c = \\dfrac{D_{30}^2}{D_{10}\\,D_{60}}"
       },
       {
        "label": "A-line of the plasticity chart",
        "tex": "PI = 0.73\\,(LL - 20)"
       }
      ],
      "cautions": [
       {
        "id": "dry-density-bulk-form",
        "status": "corrected",
        "prompt": "The paper prints one dry-density form as (1 + w) G gamma-w over (1 + e)",
        "html": "<p>\\((1 + w)G\\gamma_w/(1 + e)\\) is the bulk unit weight, not the dry one. The intended form is \\(G\\gamma_w/(1 + e)\\); with it every listed expression gives the dry density.</p>",
        "sources": [
         {
          "id": "PAST-08-065",
          "label": "Set 8 · Q65"
         }
        ]
       },
       {
        "id": "density-index-void-ratios-set13",
        "status": "review",
        "prompt": "The paper lists the loosest and densest void ratios the other way round",
        "html": "<p>The loosest state has the larger void ratio, \\(e_{\\text{max}} = 0.92\\), and the densest the smaller, \\(e_{\\text{min}} = 0.35\\). With \\(e = 0.429\\) this gives \\(I_D \\approx 0.861\\).</p>",
        "sources": [
         {
          "id": "PAST-13-079",
          "label": "Set 13 · Q79"
         }
        ]
       },
       {
        "id": "density-index-void-ratios-set17",
        "status": "review",
        "prompt": "The paper lists the loosest and densest void ratios the other way round",
        "html": "<p>As in Set 13, the loosest void ratio is 0.92 and the densest 0.35; the current void ratio 0.429 gives \\(I_D \\approx 0.861\\).</p>",
        "sources": [
         {
          "id": "PAST-17-065",
          "label": "Set 17 · Q65"
         }
        ]
       }
      ],
      "gaps": [
       "Shrinkage limits, the ISI and MIT classification tables and boring logs from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0202": {
      "code": "ACiE0202",
      "questionCount": 9,
      "format": 2,
      "summary": "<p>This subchapter deals with how stress is shared between soil grains and pore water, and how water seeps through soil. The past-paper questions test neutral and effective stress, the effect of a water table above ground and of a surcharge, the critical gradient, flow nets and the stress under a loaded circular area.</p>",
      "blocks": [
       {
        "id": "effective-and-neutral-stress",
        "title": "Effective stress, neutral stress and water above the ground",
        "html": "<p>In a saturated soil the total vertical stress \\(\\sigma\\) is shared between the pore water and the soil skeleton. The pore-water pressure \\(u\\) is called the <em>neutral stress</em>: it acts equally in all directions and gives no shear strength. The remainder, the <em>effective stress</em> \\(\\sigma' = \\sigma - u\\), is carried grain to grain and controls strength and settlement.</p><p>Water standing above the ground surface adds the same amount to \\(\\sigma\\) and to \\(u\\) at every depth, so raising or lowering it has no effect on the effective stress in the soil. A surcharge on the surface, by contrast, raises the total stress while the pore pressure returns to its hydrostatic value, so the effective stress rises by the full surcharge in the long term.</p>",
        "formulas": [
         {
          "label": "Effective stress",
          "tex": "\\sigma' = \\sigma - u"
         }
        ],
        "points": [
         {
          "html": "Neutral stress is the stress taken up by the pore water; the effective stress is carried by the soil particles.",
          "sources": [
           {
            "id": "PAST-07-032",
            "label": "Set 7 · Q32"
           }
          ]
         },
         {
          "html": "With the water table above ground level the effective stress remains constant, because total stress and pore pressure change equally.",
          "sources": [
           {
            "id": "PAST-09-011",
            "label": "Set 9 · Q11"
           }
          ]
         },
         {
          "html": "A further rise or a fluctuation of water standing above the ground has no effect on the effective stress in the soil.",
          "sources": [
           {
            "id": "PAST-12-051",
            "label": "Set 12 · Q51"
           },
           {
            "id": "PAST-14-034",
            "label": "Set 14 · Q34"
           }
          ]
         },
         {
          "html": "A surcharge makes the effective stress increase by the surcharge load once excess pore pressure has dissipated.",
          "sources": [
           {
            "id": "PAST-16-033",
            "label": "Set 16 · Q33"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-07-032",
          "label": "Set 7 · Q32"
         },
         {
          "id": "PAST-09-011",
          "label": "Set 9 · Q11"
         },
         {
          "id": "PAST-12-051",
          "label": "Set 12 · Q51"
         },
         {
          "id": "PAST-14-034",
          "label": "Set 14 · Q34"
         },
         {
          "id": "PAST-16-033",
          "label": "Set 16 · Q33"
         }
        ]
       },
       {
        "id": "seepage-flow-nets-and-quick-condition",
        "title": "Seepage, flow nets and the critical hydraulic gradient",
        "html": "<p>Water seeps from higher to lower total head along <em>flow lines</em>. In an isotropic soil the flow lines cross the <em>equipotential lines</em>, lines of equal total head, at right angles, so a flow net is a grid of curvilinear squares. With \\(N_f\\) flow channels and \\(N_d\\) equipotential drops under a head loss \\(H\\), each channel carries \\(kH/N_d\\).</p><p>Upward seepage pushes on the grains. When the seepage force equals the submerged weight of the soil, the effective stress drops to zero and a cohesionless soil boils: the quick condition. The hydraulic gradient at which this happens is the critical gradient, about 1 for most soils.</p>",
        "formulas": [
         {
          "label": "Seepage through a flow net",
          "tex": "q = k H \\dfrac{N_f}{N_d}"
         },
         {
          "label": "Critical hydraulic gradient",
          "tex": "i_c = \\dfrac{G - 1}{1 + e}"
         }
        ],
        "points": [
         {
          "html": "The critical hydraulic gradient forms under all three conditions together: seepage and flow upward, and effective stress reduced to zero.",
          "sources": [
           {
            "id": "PAST-04-003",
            "label": "Set 4 · Q3"
           }
          ]
         },
         {
          "html": "Seepage water moves perpendicular to the equipotential line, along the flow lines.",
          "sources": [
           {
            "id": "PAST-08-024",
            "label": "Set 8 · Q24"
           }
          ]
         },
         {
          "html": "Seepage from a flow net is \\(\\Delta q = kH(N_f/N_d)\\) per unit length.",
          "sources": [
           {
            "id": "PAST-12-009",
            "label": "Set 12 · Q9"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-003",
          "label": "Set 4 · Q3"
         },
         {
          "id": "PAST-08-024",
          "label": "Set 8 · Q24"
         },
         {
          "id": "PAST-12-009",
          "label": "Set 12 · Q9"
         }
        ]
       },
       {
        "id": "stress-under-loaded-areas",
        "title": "Vertical stress under a uniformly loaded circular area",
        "html": "<p>A surface load spreads with depth, so the vertical stress it causes falls off below the loaded area. For a uniformly loaded circle of radius \\(R\\) and intensity \\(q\\), the stress on the axis at depth \\(z\\) follows from integrating Boussinesq's point-load solution. When the circle is very wide compared with the depth, the bracket approaches 1 and the stress equals the surface load.</p>",
        "formulas": [
         {
          "label": "Stress on the axis of a loaded circle",
          "tex": "\\sigma_z = q\\left[1 - \\left(\\dfrac{1}{1 + (R/z)^2}\\right)^{3/2}\\right]"
         }
        ],
        "example": {
         "title": "Worked example: a very wide loaded circle",
         "html": "<p>\\(R = 1000\\) m, \\(z = 10\\) m and \\(q = 80\\ \\text{kN/m}^2\\): \\(R/z = 100\\), so the bracket is practically 1 and \\(\\sigma_z \\approx 80\\ \\text{kN/m}^2\\).</p>"
        },
        "points": [
         {
          "html": "At 10 m depth under a loaded circle of 1000 m radius and 80 kN/m<sup>2</sup> intensity, the vertical stress is practically the full 80 kN/m<sup>2</sup>.",
          "sources": [
           {
            "id": "PAST-13-080",
            "label": "Set 13 · Q80"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-13-080",
          "label": "Set 13 · Q80"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Effective stress",
        "tex": "\\sigma' = \\sigma - u"
       },
       {
        "label": "Critical hydraulic gradient",
        "tex": "i_c = \\dfrac{G - 1}{1 + e}"
       },
       {
        "label": "Flow-net seepage",
        "tex": "q = k H \\dfrac{N_f}{N_d}"
       },
       {
        "label": "Loaded circle, on the axis",
        "tex": "\\sigma_z = q\\left[1 - \\left(\\dfrac{1}{1 + (R/z)^2}\\right)^{3/2}\\right]"
       }
      ],
      "cautions": [],
      "gaps": [
       "Compressibility indices, compaction and capillary rise from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0203": {
      "code": "ACiE0203",
      "questionCount": 16,
      "format": 2,
      "summary": "<p>This subchapter covers the shear strength of soil and the stability of slopes. The past-paper questions test the Mohr–Coulomb law and the failure plane, a triaxial friction angle, undrained strength and the tests that measure it, what wetting and loading rate do to strength, and the factor of safety of infinite slopes.</p>",
      "blocks": [
       {
        "id": "mohr-coulomb-and-failure-plane",
        "title": "The Mohr–Coulomb law, the failure plane and a triaxial friction angle",
        "html": "<p>Soil fails in shear. By the <em>Mohr–Coulomb</em> law the shear strength on a plane rises with the normal stress on it, through the cohesion \\(c\\) and the angle of shearing resistance \\(\\phi\\). A Mohr circle of the principal stresses at failure just touches this strength envelope.</p><p>The point of tangency fixes the failure plane at \\(45^\\circ + \\phi/2\\) to the major principal plane. The maximum shear stress acts on the 45° plane, which is a different plane unless \\(\\phi = 0\\), so the failure plane does not carry the maximum shear stress. For a dry cohesionless sample, the friction angle follows directly from the principal stresses at failure.</p>",
        "formulas": [
         {
          "label": "Mohr–Coulomb strength",
          "tex": "s = c + \\sigma \\tan\\phi"
         },
         {
          "label": "Friction angle of a dry sand",
          "tex": "\\sin\\phi = \\dfrac{\\sigma_1 - \\sigma_3}{\\sigma_1 + \\sigma_3}"
         }
        ],
        "example": {
         "title": "Worked example: friction angle from a triaxial test",
         "html": "<p>Cell pressure 50 kPa and deviator stress 100 kPa give \\(\\sigma_3 = 50\\) kPa and \\(\\sigma_1 = 150\\) kPa:</p>\\[\\sin\\phi = \\dfrac{100}{200} = 0.5, \\qquad \\phi = 30^\\circ\\]"
        },
        "points": [
         {
          "html": "The shear strength of soil is \\(S = c + \\sigma\\tan\\theta\\), with \\(\\theta\\) the angle of shearing resistance.",
          "sources": [
           {
            "id": "PAST-13-019",
            "label": "Set 13 · Q19"
           }
          ]
         },
         {
          "html": "The failure plane, at \\(45^\\circ + \\phi/2\\), does not carry the maximum shear stress, which acts on the 45° plane.",
          "sources": [
           {
            "id": "PAST-07-056",
            "label": "Set 7 · Q56"
           }
          ]
         },
         {
          "html": "A dry sample failing at 50 kPa cell pressure and 100 kPa deviator stress has a 30-degree angle of internal friction.",
          "sources": [
           {
            "id": "PAST-10-070",
            "label": "Set 10 · Q70"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-13-019",
          "label": "Set 13 · Q19"
         },
         {
          "id": "PAST-07-056",
          "label": "Set 7 · Q56"
         },
         {
          "id": "PAST-10-070",
          "label": "Set 10 · Q70"
         }
        ]
       },
       {
        "id": "undrained-strength-and-shear-tests",
        "title": "Undrained strength of clay and the tests that measure strength",
        "html": "<p>A saturated clay loaded quickly cannot drain, so its strength does not grow with confining pressure: \\(\\phi_u = 0\\) and the strength is the undrained cohesion \\(c_u\\) alone. The simple <em>unconfined compression test</em> suits it, because a clay specimen stands without lateral support; the undrained strength is half the unconfined strength. In the field the <em>vane shear test</em> twists a four-bladed vane in soft clay and converts the peak torque to strength.</p><p>An undrained test without pore-pressure measurement gives only total-stress strength and sensitivity, not the effective-stress envelope. Long-term problems, such as an excavated clay slope once its excess pore pressures have dissipated, are governed by the drained parameters, measured in a consolidated drained test.</p>",
        "formulas": [
         {
          "label": "Unconfined compression test",
          "tex": "c_u = \\dfrac{q_u}{2}"
         },
         {
          "label": "Vane shear strength, both ends shearing",
          "tex": "S = \\dfrac{T}{\\pi D^2\\left(\\dfrac{H}{2} + \\dfrac{D}{6}\\right)}"
         }
        ],
        "points": [
         {
          "html": "The shear strength of a plastic undrained clay depends on cohesion alone, since \\(\\phi_u = 0\\).",
          "sources": [
           {
            "id": "PAST-09-014",
            "label": "Set 9 · Q14"
           }
          ]
         },
         {
          "html": "The unconfined compression test is recommended for the shear strength of a saturated clay.",
          "sources": [
           {
            "id": "PAST-07-035",
            "label": "Set 7 · Q35"
           }
          ]
         },
         {
          "html": "The unconfined compressive test is carried out on clay, a cohesive soil that stands without lateral support.",
          "sources": [
           {
            "id": "PAST-16-016",
            "label": "Set 16 · Q16"
           }
          ]
         },
         {
          "html": "The vane shear test gives \\(S = T/[\\pi D^2(H/2 + D/6)]\\) when both ends of the vane shear the soil.",
          "sources": [
           {
            "id": "PAST-05-064",
            "label": "Set 5 · Q64"
           }
          ]
         },
         {
          "html": "An undrained test cannot give the effective stress failure envelope, only total-stress strength and sensitivity.",
          "sources": [
           {
            "id": "PAST-16-076",
            "label": "Set 16 · Q76"
           }
          ]
         },
         {
          "html": "The consolidated drained test is the most appropriate triaxial test for the long-term stability of an excavated clay slope.",
          "sources": [
           {
            "id": "PAST-16-021",
            "label": "Set 16 · Q21"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-09-014",
          "label": "Set 9 · Q14"
         },
         {
          "id": "PAST-07-035",
          "label": "Set 7 · Q35"
         },
         {
          "id": "PAST-16-016",
          "label": "Set 16 · Q16"
         },
         {
          "id": "PAST-05-064",
          "label": "Set 5 · Q64"
         },
         {
          "id": "PAST-16-076",
          "label": "Set 16 · Q76"
         },
         {
          "id": "PAST-16-021",
          "label": "Set 16 · Q21"
         }
        ]
       },
       {
        "id": "factors-affecting-strength",
        "title": "What wetting and loading rate do to soil strength",
        "html": "<p>Water weakens clays. As the water content of a cohesive soil rises, its consistency moves towards the liquid state and suction and effective cohesion fall, so wetting decreases the shear strength; this is why many clay slopes fail after heavy rain.</p><p>Sands behave differently because they drain almost at once. Their strength \\(\\tau = \\sigma' \\tan\\phi'\\) is practically independent of the rate of loading, but it does depend on the confining pressure, on density and on stress history.</p>",
        "points": [
         {
          "html": "On wetting, cohesive soils decrease their shear strength, because suction and effective cohesion fall.",
          "sources": [
           {
            "id": "PAST-07-016",
            "label": "Set 7 · Q16"
           }
          ]
         },
         {
          "html": "The shear strength of a cohesionless soil does not depend on the rate of loading, since sand drains almost at once.",
          "sources": [
           {
            "id": "PAST-08-036",
            "label": "Set 8 · Q36"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-07-016",
          "label": "Set 7 · Q16"
         },
         {
          "id": "PAST-08-036",
          "label": "Set 8 · Q36"
         }
        ]
       },
       {
        "id": "infinite-slopes-and-stability",
        "title": "Infinite slopes, mobilised cohesion and stabilising measures",
        "html": "<p>For a cohesionless <em>infinite slope</em> at angle \\(\\beta\\), the factor of safety compares the friction available with the slope: it is \\(\\tan\\phi/\\tan\\beta\\) when dry. Seepage parallel to the slope reduces it by the ratio of submerged to saturated unit weight, about 0.5, so steady seepage roughly halves the factor of safety.</p><p>In cohesive slopes the <em>mobilised cohesion</em> \\(c_m = c/F_c\\) is the part of the cohesion actually developed to balance the applied shear stress on the slip surface. Drainage and retaining walls improve stability by lowering pore pressure and supporting the toe; steepening the slope does the opposite.</p>",
        "formulas": [
         {
          "label": "Dry cohesionless infinite slope",
          "tex": "F = \\dfrac{\\tan\\phi}{\\tan\\beta}"
         },
         {
          "label": "With seepage parallel to the slope",
          "tex": "F = \\dfrac{\\gamma'}{\\gamma_{\\text{sat}}} \\cdot \\dfrac{\\tan\\phi}{\\tan\\beta}"
         }
        ],
        "example": {
         "title": "Worked example: safe slope angle",
         "html": "<p>Sand with \\(\\phi = 36^\\circ\\) and a required factor of safety of 1.5:</p>\\[\\begin{aligned} \\tan\\beta &amp;= \\dfrac{\\tan 36^\\circ}{1.5} = 0.484 \\\\ \\beta &amp;\\approx 26^\\circ \\end{aligned}\\]"
        },
        "points": [
         {
          "html": "With steady seepage, the factor of safety of an infinite slope is approximately half that of the dry slope.",
          "sources": [
           {
            "id": "PAST-05-045",
            "label": "Set 5 · Q45"
           }
          ]
         },
         {
          "html": "For sand with \\(\\phi = 36^\\circ\\) and a factor of safety of 1.5, the safe infinite slope angle is about 26°.",
          "sources": [
           {
            "id": "PAST-07-068",
            "label": "Set 7 · Q68"
           },
           {
            "id": "PAST-11-064",
            "label": "Set 11 · Q64"
           }
          ]
         },
         {
          "html": "Mobilised cohesion \\(C_m\\) is the cohesion developed to resist the applied shear stress on the slip surface.",
          "sources": [
           {
            "id": "PAST-06-010",
            "label": "Set 6 · Q10"
           }
          ]
         },
         {
          "html": "An increased slope angle does not contribute to stability; drainage and retaining walls do.",
          "sources": [
           {
            "id": "PAST-15-014",
            "label": "Set 15 · Q14"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-045",
          "label": "Set 5 · Q45"
         },
         {
          "id": "PAST-07-068",
          "label": "Set 7 · Q68"
         },
         {
          "id": "PAST-11-064",
          "label": "Set 11 · Q64"
         },
         {
          "id": "PAST-06-010",
          "label": "Set 6 · Q10"
         },
         {
          "id": "PAST-15-014",
          "label": "Set 15 · Q14"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Mohr–Coulomb strength",
        "tex": "s = c + \\sigma \\tan\\phi"
       },
       {
        "label": "Failure plane angle",
        "tex": "\\theta_f = 45^\\circ + \\dfrac{\\phi}{2}"
       },
       {
        "label": "Dry sand, triaxial",
        "tex": "\\sin\\phi = \\dfrac{\\sigma_1 - \\sigma_3}{\\sigma_1 + \\sigma_3}"
       },
       {
        "label": "Unconfined compression",
        "tex": "c_u = \\dfrac{q_u}{2}"
       },
       {
        "label": "Vane shear",
        "tex": "S = \\dfrac{T}{\\pi D^2\\left(\\dfrac{H}{2} + \\dfrac{D}{6}\\right)}"
       },
       {
        "label": "Infinite slope, dry",
        "tex": "F = \\dfrac{\\tan\\phi}{\\tan\\beta}"
       },
       {
        "label": "Mobilised cohesion",
        "tex": "c_m = \\dfrac{c}{F_c}"
       }
      ],
      "cautions": [
       {
        "id": "cohesionless-strength-force",
        "status": "corrected",
        "prompt": "The published key picks force as the factor that does not affect the strength of a cohesionless soil",
        "html": "<p>Force on its own is not a meaningful factor here. A sand drains almost at once, so its drained strength \\(\\tau = \\sigma' \\tan\\phi'\\) is practically independent of the rate of loading, which is the intended answer; it still depends on confining pressure, density and stress history.</p>",
        "sources": [
         {
          "id": "PAST-08-036",
          "label": "Set 8 · Q36"
         }
        ]
       },
       {
        "id": "triaxial-cell-pressure-print",
        "status": "review",
        "prompt": "The paper prints a cell pressure of 150 kPa",
        "html": "<p>With 150 kPa cell pressure and 100 kPa deviator stress, \\(\\sin\\phi = 100/400\\) and \\(\\phi \\approx 14.5^\\circ\\). The working behind the published answer uses 50 kPa, which gives 30°, so the notes use that value.</p>",
        "sources": [
         {
          "id": "PAST-10-070",
          "label": "Set 10 · Q70"
         }
        ]
       }
      ],
      "gaps": [
       "Stresses on inclined planes, direct shear results and the method of slices from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0204": {
      "code": "ACiE0204",
      "questionCount": 17,
      "format": 2,
      "summary": "<p>This subchapter covers how a site is explored and how earth pressure acts on retaining structures. The past-paper questions test exploration depth, sampler area ratio and piston samplers, the vane and SPT tests, the three states of earth pressure with Rankine's coefficients, Coulomb's wedge theory, cohesive backfill and vertical cuts, and the stability of retaining and breast walls.</p>",
      "blocks": [
       {
        "id": "exploration-depth-and-samplers",
        "title": "Depth of exploration, sampler area ratio and piston samplers",
        "html": "<p>Borings must reach below the depth where the structure still stresses the ground significantly, about 1.5 to 2 times the footing width or down to a firm stratum. That depth depends on the size, type and load of the structure, not on the boring method, which only retrieves the samples.</p><p>How much a tube sampler disturbs the soil depends on its wall thickness, measured by the <em>area ratio</em>, the annulus of the cutting edge over its inside area. It should stay below about 10 to 20% for undisturbed samples. A <em>stationary piston sampler</em> holds very soft or sensitive clays in the tube by suction.</p>",
        "formulas": [
         {
          "label": "Area ratio of a sampler",
          "tex": "A_r = \\dfrac{D_2^2 - D_1^2}{D_1^2} \\times 100",
          "where": "D_2 is the outer and D_1 the inner diameter of the cutting edge."
         }
        ],
        "points": [
         {
          "html": "The depth of exploration is independent of the type of boring; it is set by the structure's size, type and load.",
          "sources": [
           {
            "id": "PAST-05-009",
            "label": "Set 5 · Q9"
           }
          ]
         },
         {
          "html": "The area ratio of a sampler is \\((D_2^2 - D_1^2)/D_1^2 \\times 100\\), outer diameter against inner.",
          "sources": [
           {
            "id": "PAST-06-008",
            "label": "Set 6 · Q8"
           }
          ]
         },
         {
          "html": "A piston sampler is used for very soft clay, which would slip out of an open tube.",
          "sources": [
           {
            "id": "PAST-07-005",
            "label": "Set 7 · Q5"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-009",
          "label": "Set 5 · Q9"
         },
         {
          "id": "PAST-06-008",
          "label": "Set 6 · Q8"
         },
         {
          "id": "PAST-07-005",
          "label": "Set 7 · Q5"
         }
        ]
       },
       {
        "id": "vane-and-spt-field-tests",
        "title": "Field tests: the vane shear test and SPT corrections",
        "html": "<p>The <em>vane shear test</em> measures the in-situ undrained strength and sensitivity of soft saturated clays, which are hard to sample without disturbance. It is not used in sands or gravels, which drain and would damage the vane.</p><p>The <em>standard penetration test</em> counts the blows N to drive a split spoon 300 mm after a seating drive. In fine or silty sand below the water table a high count is inflated by negative pore pressure, so the dilatancy correction reduces any N above 15.</p>",
        "formulas": [
         {
          "label": "Dilatancy correction, for N above 15",
          "tex": "N' = 15 + \\dfrac{N - 15}{2}"
         }
        ],
        "example": {
         "title": "Worked example: dilatancy correction",
         "html": "<p>An observed \\(N = 21\\) is above 15, so it is reduced:</p>\\[N' = 15 + \\dfrac{21 - 15}{2} = 15 + 3 = 18\\]"
        },
        "points": [
         {
          "html": "The vane shear test determines the shear strength of soft clays in the field.",
          "sources": [
           {
            "id": "PAST-16-077",
            "label": "Set 16 · Q77"
           },
           {
            "id": "PAST-17-004",
            "label": "Set 17 · Q4"
           }
          ]
         },
         {
          "html": "An observed SPT value of 21 corrects for dilatancy to 18.",
          "sources": [
           {
            "id": "PAST-17-023",
            "label": "Set 17 · Q23"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-16-077",
          "label": "Set 16 · Q77"
         },
         {
          "id": "PAST-17-004",
          "label": "Set 17 · Q4"
         },
         {
          "id": "PAST-17-023",
          "label": "Set 17 · Q23"
         }
        ]
       },
       {
        "id": "earth-pressure-states-and-theories",
        "title": "Earth pressure at rest, active and passive, and the classical theories",
        "html": "<p>The lateral pressure of soil on a wall depends on how the wall moves. A rigid wall that does not yield carries the pressure at rest, \\(K_0 \\approx 1 - \\sin\\phi'\\). If the wall moves away from the backfill the pressure falls to the <em>active</em> value; if it is pushed into the soil it rises to the <em>passive</em> value.</p><p>Rankine's theory treats the wall as smooth and vertical and gives the coefficients below, reciprocals of each other. Coulomb's theory considers a sliding soil wedge and allows wall friction; Culmann's construction is a graphical way of finding the critical Coulomb wedge.</p>",
        "formulas": [
         {
          "label": "Rankine active coefficient",
          "tex": "K_a = \\dfrac{1 - \\sin\\phi}{1 + \\sin\\phi} = \\tan^2\\left(45^\\circ - \\dfrac{\\phi}{2}\\right)"
         },
         {
          "label": "Rankine passive coefficient",
          "tex": "K_p = \\dfrac{1 + \\sin\\phi}{1 - \\sin\\phi} = \\dfrac{1}{K_a}"
         }
        ],
        "points": [
         {
          "html": "Active earth pressure develops when the retaining wall tends to move away from the backfill.",
          "sources": [
           {
            "id": "PAST-06-011",
            "label": "Set 6 · Q11"
           }
          ]
         },
         {
          "html": "\\(K_0\\) applies to a rigid wall that does not yield, such as a basement wall or a wall propped at the top.",
          "sources": [
           {
            "id": "PAST-R2083-025",
            "label": "2083 recall · Q25"
           }
          ]
         },
         {
          "html": "The active earth pressure coefficient is \\((1 - \\sin\\phi)/(1 + \\sin\\phi)\\).",
          "sources": [
           {
            "id": "PAST-08-007",
            "label": "Set 8 · Q7"
           }
          ]
         },
         {
          "html": "The passive earth pressure coefficient is \\(K_p = (1 + \\sin\\phi)/(1 - \\sin\\phi)\\).",
          "sources": [
           {
            "id": "PAST-15-007",
            "label": "Set 15 · Q7"
           }
          ]
         },
         {
          "html": "Rankine theory considers the wall smooth, with no wall friction.",
          "sources": [
           {
            "id": "PAST-13-021",
            "label": "Set 13 · Q21"
           }
          ]
         },
         {
          "html": "The Culmann graph is a graphical solution of Coulomb wedge theory.",
          "sources": [
           {
            "id": "PAST-10-014",
            "label": "Set 10 · Q14"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-011",
          "label": "Set 6 · Q11"
         },
         {
          "id": "PAST-R2083-025",
          "label": "2083 recall · Q25"
         },
         {
          "id": "PAST-08-007",
          "label": "Set 8 · Q7"
         },
         {
          "id": "PAST-15-007",
          "label": "Set 15 · Q7"
         },
         {
          "id": "PAST-13-021",
          "label": "Set 13 · Q21"
         },
         {
          "id": "PAST-10-014",
          "label": "Set 10 · Q14"
         }
        ]
       },
       {
        "id": "cohesive-backfill-and-vertical-cuts",
        "title": "Active pressure in cohesive soil and unsupported vertical cuts",
        "html": "<p>Cohesion reduces the active pressure. Bell's extension of Rankine's theory subtracts a cohesion term, so near the top the pressure is negative, a tension zone where cracks open, down to the depth \\(z_c\\).</p><p>Below a vertical cut the net active thrust stays zero down to twice the tension-crack depth. That depth \\(H_c\\) is the greatest height a cut can stand without support, in theory.</p>",
        "formulas": [
         {
          "label": "Active pressure with cohesion",
          "tex": "p_a = K_a \\sigma_z - 2c\\sqrt{K_a}"
         },
         {
          "label": "Tension-crack depth and critical height",
          "tex": "z_c = \\dfrac{2c}{\\gamma\\sqrt{K_a}}, \\qquad H_c = \\dfrac{4c}{\\gamma\\sqrt{K_a}}"
         }
        ],
        "points": [
         {
          "html": "The active earth pressure in a cohesive soil is \\(K_a\\sigma_z - 2C\\sqrt{K_a}\\).",
          "sources": [
           {
            "id": "PAST-09-010",
            "label": "Set 9 · Q10"
           }
          ]
         },
         {
          "html": "The maximum depth of an unsupported vertical cut is \\(4c/(\\gamma\\sqrt{K_a})\\), twice the tension-crack depth.",
          "sources": [
           {
            "id": "PAST-18-037",
            "label": "Set 18 · Q37"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-09-010",
          "label": "Set 9 · Q10"
         },
         {
          "id": "PAST-18-037",
          "label": "Set 18 · Q37"
         }
        ]
       },
       {
        "id": "retaining-wall-stability-and-support",
        "title": "Retaining-wall stability, breast walls and sheet piling",
        "html": "<p>A retaining wall must be safe against overturning, sliding and bearing failure, and the base should stay in compression. No tension develops under the base while the resultant falls within the middle third, so the eccentricity must not exceed one sixth of the base width.</p><p>A <em>breast wall</em> is a stone wall built against the face of a cutting in natural ground, protecting it from weathering; it retains no fill. Where an excavation in loose cohesionless soil keeps losing soil from its sides, sheet piles driven along the sides and anchored at the top hold the ground.</p>",
        "formulas": [
         {
          "label": "No tension under the base",
          "tex": "e \\le \\dfrac{B}{6}"
         }
        ],
        "points": [
         {
          "html": "To avoid tension under a retaining wall of base width B, the eccentricity must not exceed B/6.",
          "sources": [
           {
            "id": "PAST-09-055",
            "label": "Set 9 · Q55"
           }
          ]
         },
         {
          "html": "A stone wall protecting the slope of a cutting in natural ground from weathering is a breast wall.",
          "sources": [
           {
            "id": "PAST-07-052",
            "label": "Set 7 · Q52"
           }
          ]
         },
         {
          "html": "Cohesionless soil running from the sides of an excavation needs both sheet piles and an anchor at the top.",
          "sources": [
           {
            "id": "PAST-13-059",
            "label": "Set 13 · Q59"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-09-055",
          "label": "Set 9 · Q55"
         },
         {
          "id": "PAST-07-052",
          "label": "Set 7 · Q52"
         },
         {
          "id": "PAST-13-059",
          "label": "Set 13 · Q59"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Sampler area ratio",
        "tex": "A_r = \\dfrac{D_2^2 - D_1^2}{D_1^2} \\times 100"
       },
       {
        "label": "SPT dilatancy correction",
        "tex": "N' = 15 + \\dfrac{N - 15}{2}"
       },
       {
        "label": "Earth pressure at rest",
        "tex": "K_0 \\approx 1 - \\sin\\phi'"
       },
       {
        "label": "Rankine active",
        "tex": "K_a = \\dfrac{1 - \\sin\\phi}{1 + \\sin\\phi}"
       },
       {
        "label": "Rankine passive",
        "tex": "K_p = \\dfrac{1 + \\sin\\phi}{1 - \\sin\\phi}"
       },
       {
        "label": "Active pressure with cohesion",
        "tex": "p_a = K_a \\sigma_z - 2c\\sqrt{K_a}"
       },
       {
        "label": "Critical height of a cut",
        "tex": "H_c = \\dfrac{4c}{\\gamma\\sqrt{K_a}}"
       },
       {
        "label": "Middle-third rule",
        "tex": "e \\le \\dfrac{B}{6}"
       }
      ],
      "cautions": [
       {
        "id": "sampler-area-ratio-key",
        "status": "corrected",
        "prompt": "The published key letter points to a different option from its own area-ratio formula",
        "html": "<p>The area ratio is the outer diameter squared minus the inner, over the inner:</p>\\[A_r = \\dfrac{D_2^2 - D_1^2}{D_1^2} \\times 100\\]<p>The source prints another option letter, but its own formula is this one, which the notes follow.</p>",
        "sources": [
         {
          "id": "PAST-06-008",
          "label": "Set 6 · Q8"
         }
        ]
       }
      ],
      "gaps": [
       "Geophysical methods, site investigation reports and ground improvement from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0205": {
      "code": "ACiE0205",
      "questionCount": 20,
      "format": 2,
      "summary": "<p>This subchapter covers the choice and sizing of foundations. The past-paper questions test which foundations count as shallow or deep, the minimum depth of footings and Rankine's formula, what governs the size of a footing, combined and trapezoidal footings, when a mat is used, floating rafts, the types of mat and the no-tension rule for wells.</p>",
      "blocks": [
       {
        "id": "shallow-and-deep-foundations",
        "title": "Shallow and deep foundations",
        "html": "<p>A foundation is <em>shallow</em> when its depth is no more than its width, \\(D \\le B\\), and it spreads the load to the soil just below it. Spread footings, strap and combined footings and mats or rafts are shallow, even though a mat may cover the whole building.</p><p>A <em>deep</em> foundation is one whose depth exceeds its width, \\(D/B \\gt 1\\) or \\(B/D \\lt 1\\). Piles, piers and wells are deep: they carry the load down to stronger strata by end bearing and by friction along the shaft.</p>",
        "points": [
         {
          "html": "A pile foundation is a deep foundation, carrying load down by end bearing and skin friction.",
          "sources": [
           {
            "id": "PAST-04-032",
            "label": "Set 4 · Q32"
           },
           {
            "id": "PAST-17-021",
            "label": "Set 17 · Q21"
           }
          ]
         },
         {
          "html": "A mat is a type of shallow foundation: one slab carrying all the columns at shallow depth.",
          "sources": [
           {
            "id": "PAST-05-044",
            "label": "Set 5 · Q44"
           }
          ]
         },
         {
          "html": "A foundation is deep when its depth exceeds its width, \\(B/D \\lt 1\\).",
          "sources": [
           {
            "id": "PAST-18-016",
            "label": "Set 18 · Q16"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-032",
          "label": "Set 4 · Q32"
         },
         {
          "id": "PAST-17-021",
          "label": "Set 17 · Q21"
         },
         {
          "id": "PAST-05-044",
          "label": "Set 5 · Q44"
         },
         {
          "id": "PAST-18-016",
          "label": "Set 18 · Q16"
         }
        ]
       },
       {
        "id": "depth-of-foundation",
        "title": "Minimum depth of foundation and Rankine's formula",
        "html": "<p>Every footing is taken at least 500 mm below natural ground level, below topsoil, shrinkage cracks and seasonal weathering. It must also go below the probable scour depth near rivers and below the frost depth in cold regions; these two set the depth of foundation.</p><p>For a cohesionless soil, Rankine's formula gives the least depth at which a footing of pressure \\(q\\) is safe against the soil being squeezed out. It uses the square of the active coefficient.</p>",
        "formulas": [
         {
          "label": "Rankine's minimum depth",
          "tex": "D_{\\text{min}} = \\dfrac{q}{\\gamma}\\left(\\dfrac{1 - \\sin\\phi}{1 + \\sin\\phi}\\right)^2"
         }
        ],
        "example": {
         "title": "Worked example: Rankine's minimum depth",
         "html": "<p>\\(q = 180\\ \\text{kN/m}^2\\), \\(\\gamma = 20\\ \\text{kN/m}^3\\) and \\(\\phi = 30^\\circ\\), so the bracket is \\(0.5/1.5 = 1/3\\):</p>\\[D_{\\text{min}} = \\dfrac{180}{20} \\times \\left(\\dfrac{1}{3}\\right)^2 = 1.0\\ \\text{m}\\]"
        },
        "points": [
         {
          "html": "The minimum depth of a footing below the soil surface is 500 mm.",
          "sources": [
           {
            "id": "PAST-04-021",
            "label": "Set 4 · Q21"
           }
          ]
         },
         {
          "html": "Scour depth and frost depth govern the depth of foundation.",
          "sources": [
           {
            "id": "PAST-13-052",
            "label": "Set 13 · Q52"
           }
          ]
         },
         {
          "html": "With q = 180 kN/m<sup>2</sup>, \\(\\gamma\\) = 20 kN/m<sup>3</sup> and \\(\\phi\\) = 30°, Rankine's formula gives a minimum depth of 1.0 m.",
          "sources": [
           {
            "id": "PAST-11-063",
            "label": "Set 11 · Q63"
           },
           {
            "id": "PAST-12-061",
            "label": "Set 12 · Q61"
           }
          ]
         },
         {
          "html": "For a bearing stress of 180 kN/m<sup>2</sup>, unit weight 20 kN/m<sup>3</sup> and friction angle 30°, the least depth is 1 m.",
          "sources": [
           {
            "id": "PAST-12-077",
            "label": "Set 12 · Q77"
           },
           {
            "id": "PAST-17-079",
            "label": "Set 17 · Q79"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-021",
          "label": "Set 4 · Q21"
         },
         {
          "id": "PAST-13-052",
          "label": "Set 13 · Q52"
         },
         {
          "id": "PAST-11-063",
          "label": "Set 11 · Q63"
         },
         {
          "id": "PAST-12-061",
          "label": "Set 12 · Q61"
         },
         {
          "id": "PAST-12-077",
          "label": "Set 12 · Q77"
         },
         {
          "id": "PAST-17-079",
          "label": "Set 17 · Q79"
         }
        ]
       },
       {
        "id": "footing-size-and-combined-footings",
        "title": "Size of footings, combined and trapezoidal footings",
        "html": "<p>The plan area of a footing is the total load divided by the allowable bearing pressure. It therefore depends on the load from the superstructure and on the type and bearing capacity of the soil.</p><p>When two or more columns stand on one base, the footing is a <em>combined footing</em>. Its centroid should lie under the resultant of the column loads so that the soil pressure is uniform. With equal loads a rectangle does this; with unequal loads a <em>trapezoidal combined footing</em>, wider under the heavier column, is used, especially when the base cannot extend beyond the heavier column.</p>",
        "formulas": [
         {
          "label": "Plan area of a footing",
          "tex": "A = \\dfrac{P}{q_a}"
         }
        ],
        "points": [
         {
          "html": "The gross area of a footing depends on all of these: the superstructure load, the type of soil and its bearing capacity.",
          "sources": [
           {
            "id": "PAST-05-008",
            "label": "Set 5 · Q8"
           }
          ]
         },
         {
          "html": "The size of footings depends on both the type of load and the bearing capacity of soil.",
          "sources": [
           {
            "id": "PAST-14-002",
            "label": "Set 14 · Q2"
           }
          ]
         },
         {
          "html": "A foundation for two or more columns on one base is a combined footing.",
          "sources": [
           {
            "id": "PAST-12-013",
            "label": "Set 12 · Q13"
           },
           {
            "id": "PAST-15-032",
            "label": "Set 15 · Q32"
           }
          ]
         },
         {
          "html": "For two unequal column loads a trapezoidal combined footing is provided, wider under the heavier column.",
          "sources": [
           {
            "id": "PAST-09-015",
            "label": "Set 9 · Q15"
           },
           {
            "id": "PAST-11-015",
            "label": "Set 11 · Q15"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-008",
          "label": "Set 5 · Q8"
         },
         {
          "id": "PAST-14-002",
          "label": "Set 14 · Q2"
         },
         {
          "id": "PAST-12-013",
          "label": "Set 12 · Q13"
         },
         {
          "id": "PAST-15-032",
          "label": "Set 15 · Q32"
         },
         {
          "id": "PAST-09-015",
          "label": "Set 9 · Q15"
         },
         {
          "id": "PAST-11-015",
          "label": "Set 11 · Q15"
         }
        ]
       },
       {
        "id": "mats-floating-rafts-and-wells",
        "title": "Mat foundations, floating rafts and wells",
        "html": "<p>A mat or raft is chosen when column loads are heavy, when the soil is weak or erratic, or when individual footings would cover more than about half the plan area. Common types are the flat plate, the flat plate thickened under columns, beam and slab, box or cellular rafts, and mats on piles.</p><p>A raft becomes a <em>floating</em> or compensated foundation when the weight of soil excavated for it equals the new load, so the net pressure on the soil hardly changes. Wells and other rectangular sections avoid tension at the base by keeping the resultant within the middle third.</p>",
        "points": [
         {
          "html": "A mat is provided for all of these reasons: heavy loads, weak soil, or footings covering more than 50% of the area.",
          "sources": [
           {
            "id": "PAST-06-012",
            "label": "Set 6 · Q12"
           }
          ]
         },
         {
          "html": "A raft floats when the new structural loads are equal to the weight of the soil removed by excavation.",
          "sources": [
           {
            "id": "PAST-11-036",
            "label": "Set 11 · Q36"
           }
          ]
         },
         {
          "html": "Double flat plate thickness is not a common type of mat; flat plates, box structures and mats on piles are.",
          "sources": [
           {
            "id": "PAST-12-074",
            "label": "Set 12 · Q74"
           }
          ]
         },
         {
          "html": "For no tension under a rectangular well, the resultant of thrust and weight must pass through the middle third of the base.",
          "sources": [
           {
            "id": "PAST-16-018",
            "label": "Set 16 · Q18"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-012",
          "label": "Set 6 · Q12"
         },
         {
          "id": "PAST-11-036",
          "label": "Set 11 · Q36"
         },
         {
          "id": "PAST-12-074",
          "label": "Set 12 · Q74"
         },
         {
          "id": "PAST-16-018",
          "label": "Set 16 · Q18"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Deep foundation",
        "tex": "\\dfrac{D}{B} \\gt 1"
       },
       {
        "label": "Rankine's minimum depth",
        "tex": "D_{\\text{min}} = \\dfrac{q}{\\gamma}\\left(\\dfrac{1 - \\sin\\phi}{1 + \\sin\\phi}\\right)^2"
       },
       {
        "label": "Plan area of a footing",
        "tex": "A = \\dfrac{P}{q_a}"
       },
       {
        "label": "Middle-third rule",
        "tex": "e \\le \\dfrac{b}{6}"
       }
      ],
      "cautions": [
       {
        "id": "deep-foundation-ratio",
        "status": "corrected",
        "prompt": "The published key marks B/D greater than 4 as the deep-foundation condition",
        "html": "<p>That inverts the ratio. A foundation is deep when its depth exceeds its width, \\(D/B \\gt 1\\), that is \\(B/D \\lt 1\\). Some texts use \\(D/B \\gt 4\\) for piles and wells, but never \\(B/D \\gt 4\\).</p>",
        "sources": [
         {
          "id": "PAST-18-016",
          "label": "Set 18 · Q16"
         }
        ]
       }
      ],
      "gaps": [
       "Foundation site investigation and the structural design of spread footings from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0206": {
      "code": "ACiE0206",
      "questionCount": 28,
      "format": 2,
      "summary": "<p>This subchapter covers how much load the ground can carry and how much it settles. The past-paper questions test the meaning and sources of bearing capacity with presumptive values, Terzaghi's theory and shape factors, failure modes, the effect of the water table, plate load test scaling, the meaning of consolidation, the oedometer, over-consolidation, the degree of consolidation and permissible settlement.</p>",
      "blocks": [
       {
        "id": "bearing-capacity-meaning-and-values",
        "title": "Bearing capacity: meaning, sources and presumptive values",
        "html": "<p>The <em>ultimate bearing capacity</em> is the least pressure at which the soil below a foundation fails in shear. Dividing the net ultimate value by a factor of safety gives the safe bearing capacity used in design. It depends on the soil's strength and density, on the size, shape and depth of the foundation and on the position of the water table.</p><p>Bearing capacity can be worked out from shear strength parameters with Terzaghi's theory, from field tests such as the SPT and plate or pile load tests, or taken from codes. IS 1904 lists presumptive safe values for common ground, low for soft clay and high for rock.</p>",
        "moreHtml": "<table><thead><tr><th scope='col'>Ground</th><th scope='col'>Safe bearing capacity</th></tr></thead><tbody><tr><td>Soft clay</td><td>about 50 kPa</td></tr><tr><td>Soft rock</td><td>440 kN/m<sup>2</sup></td></tr><tr><td>Hard shale, broken bedrock</td><td>880 kN/m<sup>2</sup></td></tr><tr><td>Hard sound rock</td><td>3240 kN/m<sup>2</sup></td></tr></tbody></table>",
        "points": [
         {
          "html": "The ultimate bearing capacity is the load at which the soil fails in shear; the safe value is lower by a factor of safety.",
          "sources": [
           {
            "id": "PAST-14-032",
            "label": "Set 14 · Q32"
           }
          ]
         },
         {
          "html": "Bearing capacity is calculated from all of these: SPT values, load tests and shear strength parameters.",
          "sources": [
           {
            "id": "PAST-08-025",
            "label": "Set 8 · Q25"
           }
          ]
         },
         {
          "html": "Bearing capacity depends on all of these: soil type, type of foundation and water table depth.",
          "sources": [
           {
            "id": "PAST-12-054",
            "label": "Set 12 · Q54"
           }
          ]
         },
         {
          "html": "Soft clay has a low bearing capacity, of the order of 50 kPa.",
          "sources": [
           {
            "id": "PAST-07-067",
            "label": "Set 7 · Q67"
           }
          ]
         },
         {
          "html": "The safe bearing capacity of soft rocks is 440 kN/m<sup>2</sup>.",
          "sources": [
           {
            "id": "PAST-09-077",
            "label": "Set 9 · Q77"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-14-032",
          "label": "Set 14 · Q32"
         },
         {
          "id": "PAST-08-025",
          "label": "Set 8 · Q25"
         },
         {
          "id": "PAST-12-054",
          "label": "Set 12 · Q54"
         },
         {
          "id": "PAST-07-067",
          "label": "Set 7 · Q67"
         },
         {
          "id": "PAST-09-077",
          "label": "Set 9 · Q77"
         }
        ]
       },
       {
        "id": "terzaghi-theory-and-failure-modes",
        "title": "Terzaghi's bearing capacity theory, shape factors and failure modes",
        "html": "<p>Terzaghi's theory treats a shallow strip footing, \\(D_f \\le B\\), with a rough base, a vertical concentric load and homogeneous isotropic soil. A wedge under the rough base moves down with the footing and pushes the soil sideways and up, so the soil above base level acts only as a surcharge \\(q = \\gamma D_f\\).</p><p>For square and circular footings the cohesion term is multiplied by 1.3 and the width term changes from 0.5 to 0.4 or 0.3. Dense or stiff soils fail in general shear with slip surfaces reaching the ground; loose or soft soils show local or punching shear.</p>",
        "formulas": [
         {
          "label": "Strip footing",
          "tex": "q_u = cN_c + qN_q + 0.5\\gamma B N_\\gamma"
         },
         {
          "label": "Square footing",
          "tex": "q_u = 1.3cN_c + qN_q + 0.4\\gamma B N_\\gamma"
         },
         {
          "label": "Circular footing, B the diameter",
          "tex": "q_u = 1.3cN_c + qN_q + 0.3\\gamma B N_\\gamma"
         }
        ],
        "points": [
         {
          "html": "A smooth base of the footing is not a Terzaghi assumption; he assumed a rough base.",
          "sources": [
           {
            "id": "PAST-06-013",
            "label": "Set 6 · Q13"
           }
          ]
         },
         {
          "html": "For a square footing the cohesion term \\(cN_c\\) takes 1.3 and the width term \\(\\gamma B N_\\gamma\\) takes 0.4, with \\(\\gamma D N_q\\) unchanged.",
          "sources": [
           {
            "id": "PAST-05-046",
            "label": "Set 5 · Q46"
           },
           {
            "id": "PAST-09-060",
            "label": "Set 9 · Q60"
           }
          ]
         },
         {
          "html": "For a circular footing the cohesion term \\(cN_c\\) takes 1.3 and the width term \\(\\gamma B N_\\gamma\\) takes 0.3, with \\(qN_q\\) unchanged.",
          "sources": [
           {
            "id": "PAST-15-063",
            "label": "Set 15 · Q63"
           }
          ]
         },
         {
          "html": "Dense soil fails in general shear failure, with clear slip surfaces and heave.",
          "sources": [
           {
            "id": "PAST-15-047",
            "label": "Set 15 · Q47"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-013",
          "label": "Set 6 · Q13"
         },
         {
          "id": "PAST-05-046",
          "label": "Set 5 · Q46"
         },
         {
          "id": "PAST-09-060",
          "label": "Set 9 · Q60"
         },
         {
          "id": "PAST-15-063",
          "label": "Set 15 · Q63"
         },
         {
          "id": "PAST-15-047",
          "label": "Set 15 · Q47"
         }
        ]
       },
       {
        "id": "water-table-and-bearing-capacity",
        "title": "Effect of the water table on bearing capacity",
        "html": "<p>Water in the soil lowers the effective unit weight, roughly halving it when the soil is submerged. In Terzaghi's equation the surcharge and width terms use the unit weight, so reduction factors \\(R_{w1}\\) and \\(R_{w2}\\) are applied when the water table is near the footing.</p><p>Each factor is 0.5 when the water reaches the level it controls and 1 when the water lies deep enough, about one footing width or the depth D below the base. A rise to ground level therefore halves the capacity of a footing on sand.</p>",
        "example": {
         "title": "Worked example: water table at the ground surface",
         "html": "<p>For a surface footing on sand \\(q_u = 0.5\\gamma B N_\\gamma\\). Submerged, \\(\\gamma' \\approx \\gamma/2\\), so \\(q_u\\) falls to about 50% of the dry value.</p>"
        },
        "points": [
         {
          "html": "The water-table corrections no longer matter once the water lies at depth D below the foundation.",
          "sources": [
           {
            "id": "PAST-10-035",
            "label": "Set 10 · Q35"
           }
          ]
         },
         {
          "html": "A water table rising to ground level cuts the ultimate bearing capacity of a shallow footing on sand to about 50%.",
          "sources": [
           {
            "id": "PAST-18-046",
            "label": "Set 18 · Q46"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-10-035",
          "label": "Set 10 · Q35"
         },
         {
          "id": "PAST-18-046",
          "label": "Set 18 · Q46"
         }
        ]
       },
       {
        "id": "plate-load-test-and-subgrade-reaction",
        "title": "Plate load test results and the modulus of subgrade reaction",
        "html": "<p>A plate load test loads a small steel plate at founding level and records settlement. To use it for a real footing the results are scaled. In sand the ultimate capacity grows in proportion to width, while in clay it stays the same as the plate value. Settlement in sand follows Terzaghi and Peck's relation, with widths in metres; in clay it grows in proportion to width.</p><p>The <em>modulus of subgrade reaction</em> \\(k = p/\\delta\\) is the pressure per unit settlement. It depends on the soil and on the size, shape and depth of the loaded area; the papers treat it as independent of the water table.</p>",
        "formulas": [
         {
          "label": "Capacity in sand",
          "tex": "q_f = q_p \\dfrac{B_f}{B_p}"
         },
         {
          "label": "Settlement in sand",
          "tex": "S_f = S_p \\left[\\dfrac{B_f(B_p + 0.3)}{B_p(B_f + 0.3)}\\right]^2"
         }
        ],
        "points": [
         {
          "html": "For a cohesionless soil the plate load capacity scales as \\(q_f = q_p \\times B_f/B_p\\).",
          "sources": [
           {
            "id": "PAST-08-021",
            "label": "Set 8 · Q21"
           }
          ]
         },
         {
          "html": "The bearing capacity of cohesionless soil from a plate test is \\((B_f/B_p) \\times q_{u(p)}\\).",
          "sources": [
           {
            "id": "PAST-16-042",
            "label": "Set 16 · Q42"
           }
          ]
         },
         {
          "html": "Settlement of a footing on cohesionless soil is \\(S_p\\) times the square of \\(B_f(B_p + 0.3)/B_p(B_f + 0.3)\\).",
          "sources": [
           {
            "id": "PAST-08-064",
            "label": "Set 8 · Q64"
           }
          ]
         },
         {
          "html": "The coefficient of subgrade reaction is taken not to depend on the water table.",
          "sources": [
           {
            "id": "PAST-09-038",
            "label": "Set 9 · Q38"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-08-021",
          "label": "Set 8 · Q21"
         },
         {
          "id": "PAST-16-042",
          "label": "Set 16 · Q42"
         },
         {
          "id": "PAST-08-064",
          "label": "Set 8 · Q64"
         },
         {
          "id": "PAST-09-038",
          "label": "Set 9 · Q38"
         }
        ]
       },
       {
        "id": "consolidation-and-the-oedometer",
        "title": "Consolidation, the oedometer and over-consolidated clay",
        "html": "<p><em>Consolidation</em> is the gradual volume decrease of a saturated soil as pore water is squeezed out of the voids under a sustained load. Terzaghi defined it as any decrease in water content of a saturated soil without air taking the place of the water. Expelling air instead is compaction.</p><p>Because water leaves slowly only from fine, low-permeability soils, consolidation settlement is worked out for saturated clay layers, not sands, which settle at once. The <em>oedometer</em> loads a laterally confined specimen in stages to measure it. A clay loaded in the past beyond its present overburden is <em>over-consolidated</em>, with an over-consolidation ratio above 1.</p>",
        "points": [
         {
          "html": "Consolidation settlement occurs through the expulsion of water from the voids.",
          "sources": [
           {
            "id": "PAST-04-052",
            "label": "Set 4 · Q52"
           }
          ]
         },
         {
          "html": "Squeezing pore water out of a soil is called consolidation.",
          "sources": [
           {
            "id": "PAST-13-028",
            "label": "Set 13 · Q28"
           }
          ]
         },
         {
          "html": "When long-term loading drives the water out of the pores, the process is consolidation.",
          "sources": [
           {
            "id": "PAST-13-051",
            "label": "Set 13 · Q51"
           }
          ]
         },
         {
          "html": "Consolidation is any drop in the water content of a saturated soil in which air does not take the place of the water.",
          "sources": [
           {
            "id": "PAST-14-051",
            "label": "Set 14 · Q51"
           }
          ]
         },
         {
          "html": "Consolidation settlement is calculated for a clay layer with the water table at the ground surface.",
          "sources": [
           {
            "id": "PAST-04-013",
            "label": "Set 4 · Q13"
           }
          ]
         },
         {
          "html": "The oedometer is used to measure consolidation.",
          "sources": [
           {
            "id": "PAST-09-003",
            "label": "Set 9 · Q3"
           },
           {
            "id": "PAST-13-001",
            "label": "Set 13 · Q1"
           }
          ]
         },
         {
          "html": "A clay loaded in the past beyond its present pressure is over-consolidated.",
          "sources": [
           {
            "id": "PAST-10-046",
            "label": "Set 10 · Q46"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-052",
          "label": "Set 4 · Q52"
         },
         {
          "id": "PAST-13-028",
          "label": "Set 13 · Q28"
         },
         {
          "id": "PAST-13-051",
          "label": "Set 13 · Q51"
         },
         {
          "id": "PAST-14-051",
          "label": "Set 14 · Q51"
         },
         {
          "id": "PAST-04-013",
          "label": "Set 4 · Q13"
         },
         {
          "id": "PAST-09-003",
          "label": "Set 9 · Q3"
         },
         {
          "id": "PAST-13-001",
          "label": "Set 13 · Q1"
         },
         {
          "id": "PAST-10-046",
          "label": "Set 10 · Q46"
         }
        ]
       },
       {
        "id": "consolidation-theory-and-settlement",
        "title": "Consolidation theory, compressibility and permissible settlement",
        "html": "<p>Terzaghi's one-dimensional theory assumes a saturated, homogeneous, isotropic soil, incompressible water and grains, and Darcy's law for the flow. Its result is the <em>degree of consolidation</em>, the settlement reached at a given time as a fraction of the final settlement, which depends on the time factor.</p><p>The <em>coefficient of compressibility</em> is the drop in void ratio per unit rise in effective stress, a strain measure over a stress. Codes limit the total settlement of foundations: IS 1904 allows about 40 mm for isolated footings on sand.</p>",
        "formulas": [
         {
          "label": "Degree of consolidation and time factor",
          "tex": "U = \\dfrac{S_t}{S_f}, \\qquad T_v = \\dfrac{c_v t}{d^2}"
         },
         {
          "label": "Compressibility",
          "tex": "a_v = -\\dfrac{\\Delta e}{\\Delta \\sigma'}, \\qquad m_v = \\dfrac{a_v}{1 + e_0}"
         }
        ],
        "points": [
         {
          "html": "The settlement at time t over the final settlement is the degree of consolidation.",
          "sources": [
           {
            "id": "PAST-07-006",
            "label": "Set 7 · Q6"
           }
          ]
         },
         {
          "html": "The coefficient of compressibility is a ratio of strain to stress: void-ratio change per unit stress.",
          "sources": [
           {
            "id": "PAST-09-058",
            "label": "Set 9 · Q58"
           }
          ]
         },
         {
          "html": "Validity of Stokes law is not an assumption of Terzaghi's consolidation theory; Darcy's law is.",
          "sources": [
           {
            "id": "PAST-18-055",
            "label": "Set 18 · Q55"
           }
          ]
         },
         {
          "html": "The maximum permissible settlement for an isolated foundation on sand is 40 mm.",
          "sources": [
           {
            "id": "PAST-15-010",
            "label": "Set 15 · Q10"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-07-006",
          "label": "Set 7 · Q6"
         },
         {
          "id": "PAST-09-058",
          "label": "Set 9 · Q58"
         },
         {
          "id": "PAST-18-055",
          "label": "Set 18 · Q55"
         },
         {
          "id": "PAST-15-010",
          "label": "Set 15 · Q10"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Terzaghi, strip",
        "tex": "q_u = cN_c + qN_q + 0.5\\gamma B N_\\gamma"
       },
       {
        "label": "Terzaghi, square",
        "tex": "q_u = 1.3cN_c + qN_q + 0.4\\gamma B N_\\gamma"
       },
       {
        "label": "Terzaghi, circular",
        "tex": "q_u = 1.3cN_c + qN_q + 0.3\\gamma B N_\\gamma"
       },
       {
        "label": "Plate test, capacity in sand",
        "tex": "q_f = q_p \\dfrac{B_f}{B_p}"
       },
       {
        "label": "Plate test, settlement in sand",
        "tex": "S_f = S_p \\left[\\dfrac{B_f(B_p + 0.3)}{B_p(B_f + 0.3)}\\right]^2"
       },
       {
        "label": "Degree of consolidation",
        "tex": "U = \\dfrac{S_t}{S_f}"
       },
       {
        "label": "Time factor",
        "tex": "T_v = \\dfrac{c_v t}{d^2}"
       },
       {
        "label": "Compressibility",
        "tex": "m_v = \\dfrac{a_v}{1 + e_0}"
       }
      ],
      "cautions": [],
      "gaps": [
       "Settlement calculations, the compression index and time-rate problems from the syllabus are not examined in these papers."
      ]
     }
    });
})();
