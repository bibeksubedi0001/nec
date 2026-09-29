(function () {
    "use strict";
    window.CIVIL_PAST_NOTE_TOPICS = window.CIVIL_PAST_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_PAST_NOTE_TOPICS, {
     "ACiE0501": {
      "code": "ACiE0501",
      "questionCount": 18,
      "format": 2,
      "summary": "<p>Every structure must carry its own weight, the loads placed on it and the forces of wind, snow and earthquake. This subchapter covers dead and imposed loads with their unit weights and reductions, the limit-state load combinations and the Nepal and Indian codes that set them, and design wind pressure with its force and pressure coefficients.</p><p>It then treats snow loads and drifts on roofs, and earthquake loading: the equivalent static base shear and its distribution up the building, the 100% + 30% rule for directions, the seismic hazard across Nepal and the soil types of NBC 105.</p>",
      "blocks": [
       {
        "id": "dead-and-imposed-loads",
        "title": "Dead and imposed loads, and the codes that give them",
        "html": "<p><em>Dead load</em> is the permanent self-weight of the structure and everything fixed to it: walls, partitions, columns, floors and finishes. <em>Imposed</em> or live load varies in amount and position, such as occupants, students in a classroom and movable furniture.</p><p>In the Indian code IS 875, Part 1 gives dead loads, Part 2 imposed loads, Part 3 wind, Part 4 snow and Part 5 load combinations. The Nepal Building Code has matching parts: NBC 102 unit weights of materials, NBC 103 imposed loads, NBC 104 wind, NBC 105 seismic design and NBC 106 snow.</p><p>Dead load is worked out from the dimensions and unit weights, so it is known closely: about 24 kN/m<sup>3</sup> for plain concrete, 25 for reinforced concrete, 19 to 20 for brick masonry and 78.5 for steel. Typical imposed floor loads are 2 kN/m<sup>2</sup> for houses, 3 for classrooms, 5 for assembly halls without fixed seats and 1.5 for an accessible flat roof.</p><p>Imposed loads on the columns and foundations of tall buildings may be reduced, because every floor is seldom fully loaded at once: by 10% where two floors are carried, rising to 40% for five to ten floors and 50% above ten.</p>",
        "formulas": [
         {
          "label": "Self-weight of a beam per metre",
          "tex": "w = \\gamma\\, b\\, D"
         },
         {
          "label": "Limit-state load combinations (IS 456)",
          "tex": "\\begin{aligned} &1.5\\,(DL + IL) \\\\ &1.2\\,(DL + IL \\pm EL) \\\\ &1.5\\,(DL \\pm EL),\\ \\ 0.9\\,DL \\pm 1.5\\,EL \\end{aligned}"
         }
        ],
        "example": {
         "title": "Worked example: factored load on a slab",
         "html": "<p>A 125 mm RCC slab with 1.0 kN/m<sup>2</sup> of finishes and an imposed load of 2.0 kN/m<sup>2</sup>:</p>\\[\\begin{aligned} DL &amp;= 0.125 \\times 25 + 1.0 \\\\ &amp;= 4.125\\ \\text{kN/m}^2 \\\\ w_u &amp;= 1.5\\,(4.125 + 2.0) \\\\ &amp;\\approx 9.19\\ \\text{kN/m}^2 \\end{aligned}\\]"
        },
        "moreHtml": "<p>Limit state design multiplies the loads by partial safety factors, given in IS 456 Table 18: 1.5 for dead plus imposed load, 1.2 when wind or earthquake acts together with both, and 1.5 for dead load with wind or earthquake. Where dead load helps stability, as in checks against overturning or uplift, its factor drops to 0.9.</p><p>Loads that act together are combined, but the chance of all of them peaking at once is small, so the combinations that include wind or earthquake use lower factors than dead and imposed load alone.</p>",
        "points": [
         {
          "html": "Students in class are an imposed load, not a dead load.",
          "sources": [
           {
            "id": "PAST-09-041",
            "label": "Set 9 · Q41"
           }
          ]
         },
         {
          "html": "Of floors, columns, walls and students, only the students are not dead load.",
          "sources": [
           {
            "id": "PAST-13-046",
            "label": "Set 13 · Q46"
           }
          ]
         },
         {
          "html": "Live load provisions are made in IS 875 II.",
          "sources": [
           {
            "id": "PAST-12-060",
            "label": "Set 12 · Q60"
           }
          ]
         },
         {
          "html": "Live or imposed loads are specified in IS 875: 2; Part 3 covers wind.",
          "sources": [
           {
            "id": "PAST-16-045",
            "label": "Set 16 · Q45"
           }
          ]
         },
         {
          "html": "Imposed load is covered in IS 875 Part-II.",
          "sources": [
           {
            "id": "PAST-18-035",
            "label": "Set 18 · Q35"
           }
          ]
         },
         {
          "html": "NBC 102 gives the unit weight of material for dead-load calculation.",
          "sources": [
           {
            "id": "PAST-17-019",
            "label": "Set 17 · Q19"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-09-041",
          "label": "Set 9 · Q41"
         },
         {
          "id": "PAST-13-046",
          "label": "Set 13 · Q46"
         },
         {
          "id": "PAST-12-060",
          "label": "Set 12 · Q60"
         },
         {
          "id": "PAST-16-045",
          "label": "Set 16 · Q45"
         },
         {
          "id": "PAST-18-035",
          "label": "Set 18 · Q35"
         },
         {
          "id": "PAST-17-019",
          "label": "Set 17 · Q19"
         }
        ]
       },
       {
        "id": "wind-loads",
        "title": "Wind zones of Nepal and design wind pressure",
        "html": "<p>NBC 104 covers wind loads and divides Nepal into two wind zones: a basic wind speed of 47 m/s below about 3000 m elevation and 55 m/s above it. The design wind speed multiplies the basic speed by factors for risk, terrain and height, and topography, \\(k_1\\), \\(k_2\\) and \\(k_3\\).</p><p>The design wind pressure is proportional to the square of the design speed, with the constant 0.6 in SI units, giving N/m<sup>2</sup> for speeds in m/s.</p><p>The factor \\(k_1\\) sets the risk from the design life, 50 years for ordinary buildings; \\(k_2\\) rises with height and falls with the roughness of the terrain, from open sea coast, category 1, to dense city centres, category 4; and \\(k_3\\) raises the speed over hill crests and escarpments.</p><p>The force on a surface is the pressure times its area times a force or pressure coefficient for its shape. Openings let the wind pressurise or suck on the inside too, so walls and roofs are checked for the net of the external and internal coefficients; light roofs of open sheds often fail by uplift.</p>",
        "formulas": [
         {
          "label": "Design wind speed and pressure",
          "tex": "V_z = V_b k_1 k_2 k_3, \\qquad p_z = 0.6\\, V_z^2"
         },
         {
          "label": "Wind force on an element",
          "tex": "F = C_f\\, A_e\\, p_z"
         },
         {
          "label": "Net pressure on a wall or roof",
          "tex": "p = (C_{pe} - C_{pi})\\, p_z"
         }
        ],
        "example": {
         "title": "Worked example: wind pressure",
         "html": "<p>With \\(V_b = 55\\) m/s and all k factors 1, \\(V_z = 55\\) m/s and \\(p_z = 0.6 \\times 55^2 = 1815\\ \\text{N/m}^2\\).</p>"
        },
        "moreHtml": "<p>Wind governs light structures and tall, slender ones such as industrial sheds, towers, chimneys and roof coverings, where uplift can exceed the self-weight, so holding-down bolts and purlin fixings must be designed for it. In heavy, low masonry and concrete buildings in Nepal, earthquake forces are usually far larger, so the wind check seldom governs.</p><p>The 2015 revision of IS 875 Part 3 adds a cyclone importance factor \\(k_4\\) and reduces the design pressure by factors for wind direction, the loaded area and the combination of pressures.</p>",
        "points": [
         {
          "html": "Nepal has 2 wind zones under NBC 104.",
          "sources": [
           {
            "id": "PAST-06-025",
            "label": "Set 6 · Q25"
           }
          ]
         },
         {
          "html": "Based on wind speed, Nepal is divided into 2 zones, 47 m/s and 55 m/s.",
          "sources": [
           {
            "id": "PAST-17-056",
            "label": "Set 17 · Q56"
           }
          ]
         },
         {
          "html": "Wind pressure is calculated as \\(0.6\\, V_z^2\\).",
          "sources": [
           {
            "id": "PAST-14-023",
            "label": "Set 14 · Q23"
           }
          ]
         },
         {
          "html": "A basic wind speed of 55 m/s with \\(k_1 = k_2 = k_3 = 1\\) gives a design pressure of 1815 N/m<sup>2</sup>.",
          "sources": [
           {
            "id": "PAST-09-080",
            "label": "Set 9 · Q80"
           },
           {
            "id": "PAST-17-074",
            "label": "Set 17 · Q74"
           }
          ]
         },
         {
          "html": "Details of wind load are given in NBC 104.",
          "sources": [
           {
            "id": "PAST-14-061",
            "label": "Set 14 · Q61"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-025",
          "label": "Set 6 · Q25"
         },
         {
          "id": "PAST-17-056",
          "label": "Set 17 · Q56"
         },
         {
          "id": "PAST-14-023",
          "label": "Set 14 · Q23"
         },
         {
          "id": "PAST-09-080",
          "label": "Set 9 · Q80"
         },
         {
          "id": "PAST-17-074",
          "label": "Set 17 · Q74"
         },
         {
          "id": "PAST-14-061",
          "label": "Set 14 · Q61"
         }
        ]
       },
       {
        "id": "snow-loads",
        "title": "Snow loads on roofs",
        "html": "<p>IS 875 Part 4 takes the load of snow as about 2.5 N/m<sup>2</sup> for every millimetre of snow depth on a horizontal surface. On a roof the ground snow load is multiplied by a shape coefficient that depends on the roof slope; the load is reduced for slopes above 10° and neglected beyond about 50°.</p><p>Snow does not lie evenly. Wind strips it from one slope and piles it on the other, and it collects in valleys, behind parapets and against taller parts of a building, so roofs are also checked for unbalanced and drift loads, which can be several times the uniform value.</p><p>In Nepal snow load matters for buildings in the high hills and mountains and is covered by NBC 106; roofs there are made steep and simple so that snow slides off.</p>",
        "formulas": [
         {
          "label": "Roof snow load",
          "tex": "S = \\mu S_0"
         },
         {
          "label": "Ground snow load from depth",
          "tex": "S_0 = 2.5\\ \\text{N/m}^2 \\times \\text{depth in mm}"
         }
        ],
        "example": {
         "title": "Worked example: snow load on a roof",
         "html": "<p>600 mm of settled snow on a gently sloping roof with \\(\\mu = 0.8\\):</p>\\[\\begin{aligned} S_0 &amp;= 2.5 \\times 600 = 1500\\ \\text{N/m}^2 \\\\ S &amp;= 0.8 \\times 1.5 = 1.2\\ \\text{kN/m}^2 \\end{aligned}\\]"
        },
        "moreHtml": "<p>The figure of 2.5 N/m<sup>2</sup> per millimetre corresponds to a snow density of about 250 kg/m<sup>3</sup>, typical of settled snow; fresh snow is lighter, while wet, packed snow and ice can weigh two to four times as much. A metre of snow on the ground thus loads a flat roof with about 2.5 kN/m<sup>2</sup>, more than the imposed load on a house floor.</p><p>A roof is designed for its imposed load or its snow load, whichever is greater, since people seldom walk on a roof deep in snow.</p>",
        "points": [
         {
          "html": "In roof trusses the snow load is taken as 2.5 N/m<sup>2</sup> per mm depth of snow.",
          "sources": [
           {
            "id": "PAST-05-042",
            "label": "Set 5 · Q42"
           },
           {
            "id": "PAST-15-070",
            "label": "Set 15 · Q70"
           }
          ]
         },
         {
          "html": "The snow load on a roof is \\(S = \\mu S_0\\), ground load times shape coefficient.",
          "sources": [
           {
            "id": "PAST-08-058",
            "label": "Set 8 · Q58"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-042",
          "label": "Set 5 · Q42"
         },
         {
          "id": "PAST-15-070",
          "label": "Set 15 · Q70"
         },
         {
          "id": "PAST-08-058",
          "label": "Set 8 · Q58"
         }
        ]
       },
       {
        "id": "earthquake-loads",
        "title": "Earthquake loads: directions, hazard and soil types",
        "html": "<p>For a building whose lateral systems are not parallel, the code takes 100% of the design seismic force in one direction together with 30% in the orthogonal direction, then swaps the axes and uses the worse case.</p><p>Western Nepal lies in the central seismic gap, where no great earthquake has released the built-up strain for centuries, so it is regarded as the more susceptible region. NBC 105:2020 classifies sites into four soil types, A rock or stiff, B medium, C soft and D very soft, each with its own spectral shape.</p><p>For design, the earthquake is replaced by an equivalent horizontal base shear: the seismic weight times a coefficient. The coefficient rises with the zone factor, the importance of the building and the site's spectral shape, and is divided by factors for ductility and overstrength, since a well-detailed frame can yield and still survive. The seismic weight is the dead load plus a fraction of the imposed load, 30% for most uses in NBC 105:2020.</p><p>The base shear is shared among the floors in proportion to \\(W_i h_i^k\\), so the upper floors take more; the exponent k is 1 for short periods and rises to 2 for long ones.</p>",
        "formulas": [
         {
          "label": "Equivalent static base shear",
          "tex": "\\begin{aligned} V &= C_d(T_1)\\, W \\\\ W &= DL + \\lambda\\, LL \\end{aligned}"
         },
         {
          "label": "Vertical distribution of the base shear",
          "tex": "F_i = \\dfrac{W_i h_i^k}{\\sum W_j h_j^k}\\, V"
         },
         {
          "label": "Approximate period of a bare RC frame (s)",
          "tex": "T \\approx 0.075\\, H^{3/4}"
         }
        ],
        "example": {
         "title": "Worked example: storey forces",
         "html": "<p>A two-storey building has 1000 kN at each floor, at heights of 3 m and 6 m, and a base shear of 200 kN; take k = 1:</p>\\[\\begin{aligned} F_2 &amp;= \\dfrac{6000}{3000 + 6000} \\times 200 \\approx 133\\ \\text{kN} \\\\ F_1 &amp;= 200 - 133 = 67\\ \\text{kN} \\end{aligned}\\]"
        },
        "moreHtml": "<p>Earthquake forces come from the building's own mass, so heavy buildings attract large forces, and light roofs and walls reduce them. The fundamental period grows with height, roughly \\(0.075H^{3/4}\\) seconds for a bare RC frame H metres tall; short, stiff buildings on firm ground have periods near the peak of the spectrum.</p><p>Configuration matters as much as calculation. Soft or weak storeys such as open ground floors for parking, short columns trapped by partial infill, and plans with large offsets or torsional irregularity concentrate damage; codes penalise them and call for regular, symmetric layouts and ductile detailing, with strong columns and weaker beams.</p>",
        "points": [
         {
          "html": "The orthogonal direction takes 30% of the design seismic force alongside 100% in the main direction.",
          "sources": [
           {
            "id": "PAST-05-061",
            "label": "Set 5 · Q61"
           }
          ]
         },
         {
          "html": "Western Nepal is more susceptible to earthquake, lying in the central seismic gap.",
          "sources": [
           {
            "id": "PAST-11-040",
            "label": "Set 11 · Q40"
           }
          ]
         },
         {
          "html": "The Nepal seismic code has 4 soil types, A to D.",
          "sources": [
           {
            "id": "PAST-16-057",
            "label": "Set 16 · Q57"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-061",
          "label": "Set 5 · Q61"
         },
         {
          "id": "PAST-11-040",
          "label": "Set 11 · Q40"
         },
         {
          "id": "PAST-16-057",
          "label": "Set 16 · Q57"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Design wind speed",
        "tex": "V_z = V_b k_1 k_2 k_3"
       },
       {
        "label": "Design wind pressure",
        "tex": "p_z = 0.6\\, V_z^2"
       },
       {
        "label": "Roof snow load",
        "tex": "S = \\mu S_0"
       },
       {
        "label": "Factored dead and imposed load",
        "tex": "w_u = 1.5\\,(DL + IL)"
       },
       {
        "label": "Net wind pressure",
        "tex": "p = (C_{pe} - C_{pi})\\, p_z"
       },
       {
        "label": "Seismic base shear",
        "tex": "V = C_d(T_1)\\, W"
       }
      ],
      "cautions": [
       {
        "id": "earthquake-region-key",
        "status": "corrected",
        "prompt": "The published key letter does not match the region it names",
        "html": "<p>The key prints the first option but names Western Nepal, which is the second. Western Nepal lies in the central seismic gap, where strain has built up for centuries without a great earthquake, so the notes follow the named region.</p>",
        "sources": [
         {
          "id": "PAST-11-040",
          "label": "Set 11 · Q40"
         }
        ]
       }
      ],
      "gaps": [
       "Load combinations and seismic base shear are explained here, but the past papers set no numerical questions on them."
      ]
     },
     "ACiE0502": {
      "code": "ACiE0502",
      "questionCount": 33,
      "format": 2,
      "summary": "<p>Concrete is a mix of cement, water and aggregates whose quality depends on the materials, the proportions and the workmanship. This subchapter covers the moisture states, sizes, grading and tests of aggregates, the water–cement ratio, nominal and design mixes with their durability limits, and workability with its tests and admixtures.</p><p>It then describes the strength, elasticity, shrinkage and creep of hardened concrete, and ends with formwork, its loads and its stripping times.</p>",
      "blocks": [
       {
        "id": "aggregate-moisture-and-bulking",
        "title": "Moisture states of aggregate and bulking of sand",
        "html": "<p>Aggregate can be oven dry, air dry, saturated surface dry or wet. Mix design assumes the <em>saturated surface dry</em> (SSD) state, in which the pores are full of water but the surface carries none, so the aggregate neither absorbs mixing water nor adds free water. Site aggregates are corrected to it.</p><p>Damp sand <em>bulks</em>: thin water films around the grains push them apart and the loose volume increases, by up to 20 to 40% at 4 to 6% moisture. That is why sand is batched by weight or corrected for bulking. Coarse aggregate has too little surface per unit volume for this, so its bulking is negligible.</p><p>Water absorption is the water held in the pores at SSD, as a percentage of the oven-dry mass; it is usually 0.5 to 2% for good aggregates. Free moisture, the water beyond SSD, adds to the mixing water, so on site the batch water is reduced and the aggregate mass increased by the same amount; dry aggregate needs the opposite correction.</p><p>Bulking is found on site by filling a jar with damp sand, then flooding it with water so that the sand settles to its true volume; the fall in level gives the percentage bulking.</p>",
        "formulas": [
         {
          "label": "Water absorption",
          "tex": "w_a = \\dfrac{W_{SSD} - W_{\\text{dry}}}{W_{\\text{dry}}} \\times 100\\%"
         },
         {
          "label": "Bulking of sand",
          "tex": "\\text{bulking} = \\dfrac{h_1 - h_2}{h_2} \\times 100\\%"
         }
        ],
        "example": {
         "title": "Worked example: correcting for free moisture",
         "html": "<p>A batch needs 700 kg of sand in the SSD state, and the site sand holds 4% free moisture. Weigh \\(W_s\\) of damp sand and deduct \\(\\Delta W\\) from the mixing water:</p>\\[\\begin{aligned} W_s &amp;= 700 \\times 1.04 = 728\\ \\text{kg} \\\\ \\Delta W &amp;= 728 - 700 = 28\\ \\text{kg} \\end{aligned}\\]"
        },
        "moreHtml": "<p>Bulking is greatest in fine sand at about 5% moisture and disappears when the sand is saturated, because the films merge and the grains pack again. Volume batching of damp sand without correction gives too little sand and a harsh, under-sanded mix, which is why IS 456 asks for batching by mass.</p><p>Oven-dry and air-dry aggregates absorb water from the mix and reduce its workability, while wet aggregates add water and lower the strength, so moisture is measured and corrected every day on site, and again after rain.</p>",
        "points": [
         {
          "html": "Aggregate used in concrete is taken in the saturated surface dry condition.",
          "sources": [
           {
            "id": "PAST-04-027",
            "label": "Set 4 · Q27"
           }
          ]
         },
         {
          "html": "Aggregate with water in its pores but a dry surface is saturated surface dry aggregate.",
          "sources": [
           {
            "id": "PAST-07-033",
            "label": "Set 7 · Q33"
           }
          ]
         },
         {
          "html": "The SSD state is both saturated and surface dry.",
          "sources": [
           {
            "id": "PAST-18-060",
            "label": "Set 18 · Q60"
           }
          ]
         },
         {
          "html": "Bulking of sand is the increase in volume of sand due to moisture absorbed as films on the grains.",
          "sources": [
           {
            "id": "PAST-04-055",
            "label": "Set 4 · Q55"
           }
          ]
         },
         {
          "html": "Bulking of coarse aggregate is negligible.",
          "sources": [
           {
            "id": "PAST-05-027",
            "label": "Set 5 · Q27"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-027",
          "label": "Set 4 · Q27"
         },
         {
          "id": "PAST-07-033",
          "label": "Set 7 · Q33"
         },
         {
          "id": "PAST-18-060",
          "label": "Set 18 · Q60"
         },
         {
          "id": "PAST-04-055",
          "label": "Set 4 · Q55"
         },
         {
          "id": "PAST-05-027",
          "label": "Set 5 · Q27"
         }
        ]
       },
       {
        "id": "aggregate-size-and-grading",
        "title": "Aggregate sizes, grading zones and fineness modulus",
        "html": "<p>Fine aggregate passes the 4.75 mm sieve and is retained on the 75 micron sieve; anything finer is silt and clay. Normal concrete uses coarse aggregate up to about 75 mm; <em>cyclopean</em> or plum concrete embeds much larger stones in mass work.</p><p>IS 383 places sands in grading zones from Zone I, the coarsest, to Zone IV, the finest. The <em>fineness modulus</em> sums the cumulative percentages retained on the standard sieves and divides by 100, so a high value means a coarse sand: about 2.9 to 3.2 for coarse and 2.2 to 2.6 for fine.</p><p>Larger, well-graded aggregate needs less paste to fill its voids, which saves cement and reduces shrinkage. IS 456 limits the nominal maximum size to a quarter of the thinnest part of the member and to 5 mm less than the clear spacing of the bars or the cover; 20 mm suits most reinforced concrete and 40 mm or more mass concrete.</p><p>Well-graded aggregate has every size in proportion; gap-graded aggregate leaves some sizes out. Flaky and elongated particles pack badly and weaken the concrete, so their share is limited.</p>",
        "formulas": [
         {
          "label": "Fineness modulus (C = cumulative % retained)",
          "tex": "FM = \\dfrac{\\sum C}{100}"
         },
         {
          "label": "Blending two aggregates",
          "tex": "FM = x\\, FM_1 + (1 - x)\\, FM_2"
         }
        ],
        "example": {
         "title": "Worked example: fineness modulus of a sand",
         "html": "<p>The cumulative percentages retained on the 4.75, 2.36 and 1.18 mm sieves and the 600, 300 and 150 micron sieves are 2, 10, 30, 60, 85 and 98.</p>\\[\\begin{aligned} FM &amp;= \\dfrac{2 + 10 + 30 + 60 + 85 + 98}{100} \\\\ &amp;= 2.85 \\end{aligned}\\]<p>This is a medium sand.</p>"
        },
        "moreHtml": "<p>The fineness modulus is found by sieving on the standard set, 80, 40, 20 and 10 mm, 4.75, 2.36 and 1.18 mm, and 600, 300 and 150 microns, adding the cumulative percentages retained and dividing by 100. Coarse aggregate typically scores 5.5 to 8.0 and fine aggregate 2.0 to 3.5, and blending two aggregates gives a weighted average, which is how the proportion of sand in an all-in aggregate is chosen.</p><p>Zone IV sand should not be used in reinforced concrete unless tests show the mix is suitable, and as the sand becomes finer the proportion of fine to coarse aggregate is reduced.</p>",
        "points": [
         {
          "html": "To count as fine aggregate, material must be retained on the 75 microns sieve.",
          "sources": [
           {
            "id": "PAST-12-023",
            "label": "Set 12 · Q23"
           }
          ]
         },
         {
          "html": "Sands of zone I are coarse sand.",
          "sources": [
           {
            "id": "PAST-15-008",
            "label": "Set 15 · Q8"
           }
          ]
         },
         {
          "html": "A high fineness modulus means the sample is coarse sand.",
          "sources": [
           {
            "id": "PAST-18-012",
            "label": "Set 18 · Q12"
           }
          ]
         },
         {
          "html": "Cyclopean aggregate is larger than 75 mm.",
          "sources": [
           {
            "id": "PAST-17-020",
            "label": "Set 17 · Q20"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-12-023",
          "label": "Set 12 · Q23"
         },
         {
          "id": "PAST-15-008",
          "label": "Set 15 · Q8"
         },
         {
          "id": "PAST-18-012",
          "label": "Set 18 · Q12"
         },
         {
          "id": "PAST-17-020",
          "label": "Set 17 · Q20"
         }
        ]
       },
       {
        "id": "aggregate-tests",
        "title": "Tests on aggregates",
        "html": "<p>Each aggregate test measures one property. The <em>soundness test</em>, repeated soaking in sodium or magnesium sulphate and drying, measures resistance to weathering. The Los Angeles <em>abrasion test</em> measures hardness, resistance to wear. The <em>impact test</em> measures toughness and the <em>crushing test</em> strength.</p><p>IS 383 limits the aggregate impact value to 45% for general building concrete and to 30% for wearing surfaces such as road pavements and runways.</p><p>The crushing value is the percentage of fines produced when a sample in a steel cylinder is loaded to 400 kN; IS 383 limits it, like the impact value, to 45% for general concrete and 30% for wearing surfaces. The Los Angeles abrasion loss is limited to 50% and 30% for the same uses.</p><p>In the soundness test the loss after five cycles may not exceed 12% with sodium sulphate or 18% with magnesium sulphate. Aggregates are also checked for specific gravity, water absorption, clay and silt, organic impurities and reactive silica.</p>",
        "formulas": [
         {
          "label": "Aggregate impact or crushing value",
          "tex": "AIV = \\dfrac{W_2}{W_1} \\times 100\\%"
         },
         {
          "label": "Los Angeles abrasion value",
          "tex": "LA = \\dfrac{W_1 - W_2}{W_1} \\times 100\\%"
         }
        ],
        "example": {
         "title": "Worked example: aggregate impact value",
         "html": "<p>A 330 g sample leaves 42 g passing the 2.36 mm sieve after the test:</p>\\[AIV = \\dfrac{42}{330} \\times 100 \\approx 12.7\\%\\]<p>The aggregate is strong and, being under 30%, suits a wearing surface.</p>"
        },
        "moreHtml": "<p>The impact test drops a 14 kg hammer 15 times from 380 mm onto aggregate in a cup; the impact value is the percentage then passing the 2.36 mm sieve, so the lower the value, the tougher the aggregate. Values below 10% are exceptionally strong, 10 to 20% strong, 20 to 30% satisfactory for road surfacing, and above 35% weak.</p><p>Reactive silica in some aggregates reacts with alkalis from the cement to form an expansive gel that cracks the concrete in a map pattern years after construction. This alkali–aggregate reaction is prevented by testing the aggregate, using low-alkali cement or adding pozzolanas such as fly ash.</p>",
        "points": [
         {
          "html": "The soundness test measures the weathering resistance of aggregate.",
          "sources": [
           {
            "id": "PAST-06-023",
            "label": "Set 6 · Q23"
           }
          ]
         },
         {
          "html": "Resistance of aggregates to weathering action is studied by the soundness test.",
          "sources": [
           {
            "id": "PAST-17-060",
            "label": "Set 17 · Q60"
           }
          ]
         },
         {
          "html": "The abrasion test is conducted to find the hardness of aggregates.",
          "sources": [
           {
            "id": "PAST-11-020",
            "label": "Set 11 · Q20"
           }
          ]
         },
         {
          "html": "All the options are correct: impact values below 45 for building concrete and below 30 for pavements and runways.",
          "sources": [
           {
            "id": "PAST-09-078",
            "label": "Set 9 · Q78"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-023",
          "label": "Set 6 · Q23"
         },
         {
          "id": "PAST-17-060",
          "label": "Set 17 · Q60"
         },
         {
          "id": "PAST-11-020",
          "label": "Set 11 · Q20"
         },
         {
          "id": "PAST-09-078",
          "label": "Set 9 · Q78"
         }
        ]
       },
       {
        "id": "water-and-mix-proportions",
        "title": "Mixing water, the water–cement ratio and mix grades",
        "html": "<p>Water fit for drinking, potable water, is suitable for mixing and curing concrete. It must be free of harmful oils, acids, alkalis, salts and organic matter; acidic, impure or sewage water spoils setting, strength and durability.</p><p>Once there is enough water for workability, extra water only weakens the concrete. By Abrams' law strength falls as the water–cement ratio rises, because the surplus leaves capillary pores behind. The mass of water is the ratio times the cement. RCC roof slabs are normally cast in M20, nominally 1:1.5:3.</p><p>Nominal mixes with fixed proportions, such as 1:2:4 for M15 and 1:1.5:3 for M20, are allowed only up to M20; stronger concrete must be a design mix, proportioned by trial for a target mean strength \\(f_{ck} + 1.65s\\), where s is the standard deviation expected on site.</p><p>Durability sets limits as well. For reinforced concrete in mild exposure IS 456 asks for at least 300 kg of cement per cubic metre, a water–cement ratio of at most 0.55 and grade M20, with stricter values for harsher exposure; more than 450 kg/m<sup>3</sup> of cement is avoided because it raises shrinkage and heat.</p>",
        "formulas": [
         {
          "label": "Water from the water–cement ratio",
          "tex": "W = \\dfrac{w}{c} \\times C"
         },
         {
          "label": "Target mean strength",
          "tex": "f'_{ck} = f_{ck} + 1.65\\, s"
         },
         {
          "label": "Abrams' law",
          "tex": "f_c = \\dfrac{A}{B^{\\,w/c}}"
         }
        ],
        "example": {
         "title": "Worked example: water for a harsh mix",
         "html": "<p>150 kg of aggregate in a harsh mix at w/c 0.6, with an aggregate–cement ratio of about 7.5, needs \\(150/7.5 = 20\\) kg of cement and \\(0.6 \\times 20 = 12\\) kg of water.</p>"
        },
        "moreHtml": "<p>Only about 0.23 of water per unit of cement is combined chemically, and about 0.4 is enough for complete hydration with its gel water; anything beyond leaves capillary pores that lower the strength and let water and chlorides in. Workability for placing is therefore better obtained with admixtures than with extra water.</p><p>Until site records exist, the standard deviation is taken as 3.5 N/mm<sup>2</sup> for M10 and M15, 4.0 for M20 and M25, and 5.0 for M30 and above, so M20 is designed for a target mean of about 26.6 N/mm<sup>2</sup>.</p>",
        "points": [
         {
          "html": "Water used in concrete should be potable, fit for drinking.",
          "sources": [
           {
            "id": "PAST-05-041",
            "label": "Set 5 · Q41"
           }
          ]
         },
         {
          "html": "Potable water is used in cement concrete; acidic, impure or sewer water is not.",
          "sources": [
           {
            "id": "PAST-13-014",
            "label": "Set 13 · Q14"
           }
          ]
         },
         {
          "html": "Raising the w/c ratio beyond what workability needs means strength will decrease.",
          "sources": [
           {
            "id": "PAST-12-015",
            "label": "Set 12 · Q15"
           }
          ]
         },
         {
          "html": "50 kg of fine and 100 kg of coarse aggregate in a harsh mix at w/c 0.6 need 12 kg of water.",
          "sources": [
           {
            "id": "PAST-10-066",
            "label": "Set 10 · Q66"
           }
          ]
         },
         {
          "html": "An RCC roof is normally cast in M20 nominal mix.",
          "sources": [
           {
            "id": "PAST-12-016",
            "label": "Set 12 · Q16"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-041",
          "label": "Set 5 · Q41"
         },
         {
          "id": "PAST-13-014",
          "label": "Set 13 · Q14"
         },
         {
          "id": "PAST-12-015",
          "label": "Set 12 · Q15"
         },
         {
          "id": "PAST-10-066",
          "label": "Set 10 · Q66"
         },
         {
          "id": "PAST-12-016",
          "label": "Set 12 · Q16"
         }
        ]
       },
       {
        "id": "workability-and-admixtures",
        "title": "Workability, the slump test and plasticisers",
        "html": "<p>The <em>slump test</em> measures the consistency, or workability, of fresh concrete: the drop in height, in millimetres, after a 300 mm cone of concrete is lifted. Vibration suits stiff mixes, so for mechanically vibrated concrete the slump is kept to about 5.0 cm; wetter mixes segregate and bleed.</p><p><em>Plasticisers</em> are water reducers: they improve workability, or allow less water for the same workability and so higher strength, and often retard setting. <em>Superplasticisers</em> go further, raising workability, cutting water by 20 to 30% or saving cement. The papers treat flowing mortar for heavy dams as not a plasticiser use.</p><p>Other tests suit other mixes: the compacting factor test, the ratio of the densities reached by free fall and by full compaction, suits low workability, and the Vee-Bee test, the time a remoulded cone takes to settle under vibration, suits very stiff mixes. A slump may be true, shear or collapse; a shear slump signals a lean, harsh mix.</p><p>Chemical admixtures also include accelerators for cold weather, retarders for hot weather and long hauls, and air-entraining agents against freezing and thawing. Mineral admixtures such as fly ash, slag and silica fume replace part of the cement and improve durability.</p>",
        "formulas": [
         {
          "label": "Compacting factor (partly over fully compacted mass)",
          "tex": "CF = \\dfrac{W_p}{W_f}"
         }
        ],
        "example": {
         "title": "Worked example: compacting factor",
         "html": "<p>The cylinder holds 11.2 kg of concrete after free fall and 12.5 kg when fully compacted:</p>\\[CF = \\dfrac{11.2}{12.5} \\approx 0.90\\]<p>This lies between low and medium workability, about right for vibrated beams and slabs.</p>"
        },
        "moreHtml": "<p>IS 456 links workability to the placing conditions: a slump of 25 to 75 mm for lightly reinforced slabs, beams, walls and columns, 50 to 100 mm for heavily reinforced sections, 100 to 150 mm for trench fill and in-situ piling, and flow tests for tremie concrete. Compaction by vibration drives out entrapped air, and it matters: 5% of voids left in concrete can lower its strength by about 30%.</p><p>Calcium chloride speeds hardening but promotes corrosion of the reinforcement, so it is not used in reinforced or prestressed concrete.</p>",
        "points": [
         {
          "html": "The slump test measures consistency, the workability of fresh concrete.",
          "sources": [
           {
            "id": "PAST-04-026",
            "label": "Set 4 · Q26"
           }
          ]
         },
         {
          "html": "Slump is a measure of consistency, not of strength.",
          "sources": [
           {
            "id": "PAST-13-047",
            "label": "Set 13 · Q47"
           }
          ]
         },
         {
          "html": "Slump is measured in millimetres, as the drop in height of the concrete.",
          "sources": [
           {
            "id": "PAST-R2083-024",
            "label": "2083 recall · Q24"
           }
          ]
         },
         {
          "html": "For compaction by mechanical vibrator the slump should not exceed 5.0 cm.",
          "sources": [
           {
            "id": "PAST-07-018",
            "label": "Set 7 · Q18"
           }
          ]
         },
         {
          "html": "The incorrect statement about plasticisers is that they are used for flowing mortar in heavy dams.",
          "sources": [
           {
            "id": "PAST-15-004",
            "label": "Set 15 · Q4"
           }
          ]
         },
         {
          "html": "A superplasticiser does all of these: raises workability and cuts both cement and mixing water.",
          "sources": [
           {
            "id": "PAST-15-033",
            "label": "Set 15 · Q33"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-026",
          "label": "Set 4 · Q26"
         },
         {
          "id": "PAST-13-047",
          "label": "Set 13 · Q47"
         },
         {
          "id": "PAST-R2083-024",
          "label": "2083 recall · Q24"
         },
         {
          "id": "PAST-07-018",
          "label": "Set 7 · Q18"
         },
         {
          "id": "PAST-15-004",
          "label": "Set 15 · Q4"
         },
         {
          "id": "PAST-15-033",
          "label": "Set 15 · Q33"
         }
        ]
       },
       {
        "id": "hardened-concrete-properties",
        "title": "Strength, elasticity, creep and crazing of hardened concrete",
        "html": "<p>Grade M20 means a characteristic 28-day cube strength of 20 N/mm<sup>2</sup>. Ordinary Portland cement concrete reaches about 65% of that strength at 7 days. IS 456 relates the flexural strength and the elastic modulus to the characteristic strength; direct tensile strength is only about 10% of the compressive strength, which is why steel carries the tension.</p><p>Under a sustained load concrete keeps deforming with time, <em>creep</em>; shrinkage, by contrast, happens without load. Surface shrinkage can leave a network of fine hairline cracks, called <em>crazing</em>.</p><p>The characteristic strength is the value below which no more than 5% of test results are expected to fall, measured on 150 mm cubes at 28 days. Concrete keeps gaining strength slowly after that, but design uses the 28-day value.</p><p>Without test data IS 456 takes the total shrinkage strain as 0.0003, and the creep coefficient, creep over elastic strain, as 2.2 for loading at 7 days, 1.6 at 28 days and 1.1 at one year. Creep relieves stress concentrations but adds to long-term deflection and to the loss of prestress.</p>",
        "formulas": [
         {
          "label": "Flexural strength and elastic modulus",
          "tex": "f_{cr} = 0.7\\sqrt{f_{ck}}, \\qquad E_c = 5000\\sqrt{f_{ck}}"
         },
         {
          "label": "Modular ratio (working stress)",
          "tex": "m = \\dfrac{280}{3\\,\\sigma_{cbc}}"
         },
         {
          "label": "Long-term effective modulus",
          "tex": "E_{ce} = \\dfrac{E_c}{1 + \\theta}"
         }
        ],
        "example": {
         "title": "Worked examples: M25 modulus and M20 at 7 days",
         "html": "<p>M25: \\(E_c = 5000\\sqrt{25} = 25000\\) N/mm<sup>2</sup>.</p><p>M20 at 7 days: about \\(0.65 \\times 20 \\approx 13\\) MPa.</p>"
        },
        "moreHtml": "<p>Tensile strength is measured indirectly: the split-cylinder test loads a cylinder along its length until it splits, and a flexure test on a 150 mm beam gives the modulus of rupture. Cylinders give about 0.8 times the cube strength of the same concrete, because the platens restrain a cube more.</p><p>In working stress design the modular ratio is taken as \\(280/3\\sigma_{cbc}\\), which allows partly for creep: about 13.3 for M20. For long-term deflection the elastic modulus is reduced to \\(E_c/(1 + \\theta)\\), where \\(\\theta\\) is the creep coefficient.</p>",
        "points": [
         {
          "html": "Flexural strength relates to characteristic strength as \\(f_{cr} = 0.7\\sqrt{f_{ck}}\\).",
          "sources": [
           {
            "id": "PAST-09-043",
            "label": "Set 9 · Q43"
           }
          ]
         },
         {
          "html": "The tensile strength of concrete is about 10% of its compressive strength.",
          "sources": [
           {
            "id": "PAST-13-032",
            "label": "Set 13 · Q32"
           }
          ]
         },
         {
          "html": "An M20 cube should reach at least about 13 MPa in 7 days.",
          "sources": [
           {
            "id": "PAST-16-062",
            "label": "Set 16 · Q62"
           }
          ]
         },
         {
          "html": "The modulus of elasticity of M25 concrete is 25000 N/mm<sup>2</sup>.",
          "sources": [
           {
            "id": "PAST-17-012",
            "label": "Set 17 · Q12"
           }
          ]
         },
         {
          "html": "Deformation increasing with time under a constant sustained load is creep.",
          "sources": [
           {
            "id": "PAST-R2083-016",
            "label": "2083 recall · Q16"
           }
          ]
         },
         {
          "html": "A network of thin hairline cracks is known as crazing.",
          "sources": [
           {
            "id": "PAST-08-060",
            "label": "Set 8 · Q60"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-09-043",
          "label": "Set 9 · Q43"
         },
         {
          "id": "PAST-13-032",
          "label": "Set 13 · Q32"
         },
         {
          "id": "PAST-16-062",
          "label": "Set 16 · Q62"
         },
         {
          "id": "PAST-17-012",
          "label": "Set 17 · Q12"
         },
         {
          "id": "PAST-R2083-016",
          "label": "2083 recall · Q16"
         },
         {
          "id": "PAST-08-060",
          "label": "Set 8 · Q60"
         }
        ]
       },
       {
        "id": "formwork",
        "title": "Formwork: stripping times and materials",
        "html": "<p>IS 456 lets the vertical formwork of columns, walls and beam sides be struck after 16 to 24 hours with ordinary Portland cement. Soffits and props stay much longer, because they carry the weight of the member until the concrete is strong enough.</p><p>For repeated use steel formwork is preferred: it can be reused a hundred times or more, keeps its shape and gives a smooth finish, so it pays back its higher first cost.</p><p>With ordinary Portland cement, slab soffits may be struck after 3 days and beam soffits after 7, provided the props are refixed at once. Props stay 7 days under slabs spanning up to 4.5 m and 14 days beyond, and 14 days under beams and arches spanning up to 6 m and 21 days beyond. Other cements and cold weather need longer.</p><p>Good formwork is strong and rigid enough to carry the wet concrete and construction loads without bulging, tight enough not to leak grout, and easy to strip without damage. Timber and plywood are cheap and adaptable; steel and aluminium last longer.</p>",
        "formulas": [
         {
          "label": "Lateral pressure of fluid concrete",
          "tex": "p = \\gamma_c\\, h \\approx 25\\,h\\ \\text{kN/m}^2"
         }
        ],
        "example": {
         "title": "Worked example: pressure on a column form",
         "html": "<p>A 3 m column filled in one quick pour:</p>\\[p = 25 \\times 3 = 75\\ \\text{kN/m}^2\\]<p>at the bottom of the form, falling to zero at the top.</p>"
        },
        "moreHtml": "<p>Fresh concrete presses on vertical forms like a fluid weighing about 25 kN/m<sup>3</sup>, so tall column and wall forms filled quickly must resist large pressures near the bottom; pouring more slowly lets the lower concrete stiffen and lowers the peak. Formwork is a large share of the cost of a concrete frame, often a third or more, which is why standard sizes and reuse matter.</p><p>Striking too early causes sagging, cracks and at worst collapse. Props are removed gradually, starting from midspan and working towards the supports, and from the free end of a cantilever, so the member takes up its load evenly.</p>",
        "points": [
         {
          "html": "The vertical formwork of a column can be removed after 24 hr.",
          "sources": [
           {
            "id": "PAST-05-038",
            "label": "Set 5 · Q38"
           }
          ]
         },
         {
          "html": "Column formwork is removed after about 24 hrs.",
          "sources": [
           {
            "id": "PAST-14-031",
            "label": "Set 14 · Q31"
           }
          ]
         },
         {
          "html": "Steel is the preferred formwork material for repetitive use.",
          "sources": [
           {
            "id": "PAST-09-061",
            "label": "Set 9 · Q61"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-038",
          "label": "Set 5 · Q38"
         },
         {
          "id": "PAST-14-031",
          "label": "Set 14 · Q31"
         },
         {
          "id": "PAST-09-061",
          "label": "Set 9 · Q61"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Flexural strength",
        "tex": "f_{cr} = 0.7\\sqrt{f_{ck}}"
       },
       {
        "label": "Elastic modulus",
        "tex": "E_c = 5000\\sqrt{f_{ck}}"
       },
       {
        "label": "7-day strength (OPC)",
        "tex": "f_7 \\approx 0.65\\, f_{28}"
       },
       {
        "label": "Mixing water",
        "tex": "W = \\dfrac{w}{c} \\times C"
       },
       {
        "label": "Target mean strength",
        "tex": "f'_{ck} = f_{ck} + 1.65\\, s"
       },
       {
        "label": "Fineness modulus",
        "tex": "FM = \\dfrac{\\sum C}{100}"
       },
       {
        "label": "Aggregate impact value",
        "tex": "AIV = \\dfrac{W_2}{W_1} \\times 100\\%"
       },
       {
        "label": "Modular ratio",
        "tex": "m = \\dfrac{280}{3\\,\\sigma_{cbc}}"
       }
      ],
      "cautions": [],
      "gaps": [
       "Mix design is outlined here, but the full IS 10262 procedure and statistical quality control are not examined in these papers."
      ]
     },
     "ACiE0503": {
      "code": "ACiE0503",
      "questionCount": 31,
      "format": 2,
      "summary": "<p>Reinforced concrete puts steel where concrete cracks in tension, and its design keeps the two working together safely. This subchapter explains limit state design with its partial safety factors, stress block and limiting neutral-axis depth, and the balanced, under- and over-reinforced sections.</p><p>It then covers steel limits and shear design in beams, the design of slabs and footings with deflection control, cover and punching shear, development length, laps and hooks, and the rules for short and long columns and their ties.</p>",
      "blocks": [
       {
        "id": "limit-state-basics-and-section-types",
        "title": "Limit-state basics and types of section",
        "html": "<p>In limit state design the steel strength is divided by a partial safety factor of 1.15, so its design strength is \\(f_y/1.15 = 0.87f_y\\). Concrete strain is limited to 0.0035 at the extreme fibre in flexure and 0.002 in pure axial compression. Steel works with concrete because the two have almost the same coefficient of thermal expansion, so temperature changes do not break their bond.</p><p>The tension face of every reinforced section cracks early, once concrete's low tensile strength is exceeded. At the ultimate state an under-reinforced section yields its steel first, a balanced one reaches both limits together, and an over-reinforced one crushes the concrete while the steel is still below yield, failing suddenly. A doubly reinforced beam has designed steel in both zones. Simply supported beams are designed chiefly for the bending moment at the centre.</p><p>Concrete's partial safety factor is 1.5, so the stress block carries \\(0.67f_{ck}/1.5 = 0.446f_{ck}\\) and its force is \\(0.36f_{ck}bx_u\\), acting 0.42x<sub>u</sub> below the top. For Fe415 steel the neutral axis may lie no deeper than 0.48d, which fixes the limiting moment.</p>",
        "formulas": [
         {
          "label": "Design strength of steel",
          "tex": "f_{yd} = \\dfrac{f_y}{1.15} = 0.87 f_y"
         },
         {
          "label": "Limiting neutral axis depth",
          "tex": "\\dfrac{x_{u,\\max}}{d} = \\dfrac{0.0035}{0.0055 + 0.87 f_y/E_s}"
         },
         {
          "label": "Limiting moment of resistance",
          "tex": "\\begin{aligned} M_{u,\\lim} &= 0.36 f_{ck}\\, b\\, x_{u,\\max} \\\\ &\\quad \\times (d - 0.42\\, x_{u,\\max}) \\end{aligned}"
         },
         {
          "label": "Limiting moment, Fe415",
          "tex": "M_{u,\\lim} = 0.138 f_{ck}\\, b d^2"
         }
        ],
        "example": {
         "title": "Worked example: limiting moment of a beam",
         "html": "<p>A 230 mm wide beam with d = 450 mm in M20 concrete and Fe415 steel:</p>\\[\\begin{aligned} M_{u,\\lim} &amp;= 0.138 \\times 20 \\times 230 \\times 450^2 \\\\ &amp;\\approx 128.5\\ \\text{kNm} \\end{aligned}\\]<p>A larger design moment needs a deeper section or compression steel.</p>"
        },
        "moreHtml": "<p>The limiting depth follows from strain compatibility. With the concrete at 0.0035 and the steel at \\(0.87f_y/E_s + 0.002\\), about 0.0038 for Fe415, similar triangles give a ratio of 0.48, as the formula below shows; for Fe250 and Fe500 it is 0.53 and 0.46. An under-reinforced design keeps the neutral axis above this depth, so the steel yields first and the beam warns of failure by large deflection and cracking.</p><p>Limit state design checks both collapse, with factored loads and reduced material strengths, and serviceability, deflection and cracking under working loads. The older working stress method keeps stresses elastic under service loads with a modular ratio; it gives heavier sections and no clear measure of the margin against collapse.</p>",
        "points": [
         {
          "html": "A section whose concrete crushes before the steel yields is an over-reinforced section.",
          "sources": [
           {
            "id": "PAST-06-022",
            "label": "Set 6 · Q22"
           }
          ]
         },
         {
          "html": "Concrete cracks first on the tension face in all section types.",
          "sources": [
           {
            "id": "PAST-06-059",
            "label": "Set 6 · Q59"
           }
          ]
         },
         {
          "html": "The maximum compressive strain in concrete under axial compression is taken as 0.002.",
          "sources": [
           {
            "id": "PAST-10-038",
            "label": "Set 10 · Q38"
           }
          ]
         },
         {
          "html": "Steel design strength is cut by about 15%, as the limit-state FOS for steel is 1.15 and design strength is \\(\\sigma/1.15\\).",
          "sources": [
           {
            "id": "PAST-13-033",
            "label": "Set 13 · Q33"
           }
          ]
         },
         {
          "html": "Steel is preferred because the coefficient of thermal expansion of steel and concrete is almost the same.",
          "sources": [
           {
            "id": "PAST-10-049",
            "label": "Set 10 · Q49"
           }
          ]
         },
         {
          "html": "A doubly reinforced section has designed steel in both compression and tension.",
          "sources": [
           {
            "id": "PAST-08-080",
            "label": "Set 8 · Q80"
           }
          ]
         },
         {
          "html": "A simply supported beam is designed mainly for the BM at the centre.",
          "sources": [
           {
            "id": "PAST-09-005",
            "label": "Set 9 · Q5"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-022",
          "label": "Set 6 · Q22"
         },
         {
          "id": "PAST-06-059",
          "label": "Set 6 · Q59"
         },
         {
          "id": "PAST-10-038",
          "label": "Set 10 · Q38"
         },
         {
          "id": "PAST-13-033",
          "label": "Set 13 · Q33"
         },
         {
          "id": "PAST-10-049",
          "label": "Set 10 · Q49"
         },
         {
          "id": "PAST-08-080",
          "label": "Set 8 · Q80"
         },
         {
          "id": "PAST-09-005",
          "label": "Set 9 · Q5"
         }
        ]
       },
       {
        "id": "beam-steel-limits-and-shear",
        "title": "Steel limits in beams, side-face steel and shear reinforcement",
        "html": "<p>IS 456 sets a minimum tension steel, \\(A_s/bd = 0.85/f_y\\), about 0.2% for Fe415, and a maximum of 4% of the gross section for tension and for compression steel. Deep beams also need side-face steel of 0.1% of the web area, split between the two faces.</p><p>Shear causes diagonal tension. Stirrups and bent-up bars control the inclined cracks and prevent brittle shear failure. At the ultimate state shear is carried jointly by the concrete and by the shear reinforcement.</p><p>For shear design, the nominal stress \\(\\tau_v = V_u/bd\\) is compared with the design shear strength \\(\\tau_c\\) of the concrete, which rises with the percentage of tension steel. Where \\(\\tau_v\\) exceeds \\(\\tau_c\\), stirrups carry the balance; \\(\\tau_v\\) may never exceed \\(\\tau_{c,\\max}\\), 2.8 N/mm<sup>2</sup> for M20, or the section must be made larger.</p><p>Even where no shear steel is needed, beams get minimum stirrups, spaced no more than 0.75d or 300 mm apart, to hold the bars and give ductility.</p>",
        "formulas": [
         {
          "label": "Minimum and maximum tension steel",
          "tex": "\\dfrac{A_s}{bd} \\ge \\dfrac{0.85}{f_y}, \\qquad A_s \\le 0.04\\,bD"
         },
         {
          "label": "Nominal shear stress",
          "tex": "\\tau_v = \\dfrac{V_u}{b d}"
         },
         {
          "label": "Spacing of vertical stirrups",
          "tex": "\\begin{aligned} V_{us} &= V_u - \\tau_c\\, b d \\\\ s_v &= \\dfrac{0.87 f_y A_{sv}\\, d}{V_{us}} \\end{aligned}"
         },
         {
          "label": "Minimum shear reinforcement",
          "tex": "\\dfrac{A_{sv}}{b\\, s_v} \\ge \\dfrac{0.4}{0.87 f_y}"
         }
        ],
        "example": {
         "title": "Worked examples: minimum and side-face steel",
         "html": "<p>A 250 mm × 400 mm beam in Fe415:</p>\\[A_s = \\dfrac{0.85 \\times 250 \\times 400}{415} \\approx 205\\ \\text{mm}^2\\]<p>A web area of 180 000 mm<sup>2</sup>: side-face steel \\(0.001 \\times 180\\,000 = 180\\) mm<sup>2</sup>.</p>"
        },
        "moreHtml": "<p>Minimum steel prevents a sudden failure when the concrete cracks: without it, the small area of steel would snap as soon as the tension carried by the concrete is released. The 4% maximum keeps the bars placeable and the concrete compactable around them. Side-face steel is required where the web is deeper than 750 mm, to control cracks on the tall faces of deep beams.</p><p>Near supports, where shear is greatest and the bending moment small, bent-up bars can share the shear, but they may carry no more than half of it; stirrups carry the rest.</p>",
        "points": [
         {
          "html": "Tension reinforcement in a beam shall not exceed 4% of the gross area.",
          "sources": [
           {
            "id": "PAST-07-029",
            "label": "Set 7 · Q29"
           }
          ]
         },
         {
          "html": "A 250 mm wide beam with 400 mm effective depth in Fe415 needs at least 205 mm<sup>2</sup> of tension steel.",
          "sources": [
           {
            "id": "PAST-13-076",
            "label": "Set 13 · Q76"
           }
          ]
         },
         {
          "html": "With Fe415 steel, the minimum tension reinforcement in a beam is about 0.2%.",
          "sources": [
           {
            "id": "PAST-17-068",
            "label": "Set 17 · Q68"
           }
          ]
         },
         {
          "html": "A deep beam with a web area of 180000 mm<sup>2</sup> needs at least 180 mm<sup>2</sup> of side-face steel.",
          "sources": [
           {
            "id": "PAST-14-071",
            "label": "Set 14 · Q71"
           }
          ]
         },
         {
          "html": "Shear reinforcement is provided to counteract inclined crack and shear failure.",
          "sources": [
           {
            "id": "PAST-05-043",
            "label": "Set 5 · Q43"
           }
          ]
         },
         {
          "html": "At ultimate shear failure, both the concrete and the shear reinforcement provide resistance.",
          "sources": [
           {
            "id": "PAST-07-003",
            "label": "Set 7 · Q3"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-07-029",
          "label": "Set 7 · Q29"
         },
         {
          "id": "PAST-13-076",
          "label": "Set 13 · Q76"
         },
         {
          "id": "PAST-17-068",
          "label": "Set 17 · Q68"
         },
         {
          "id": "PAST-14-071",
          "label": "Set 14 · Q71"
         },
         {
          "id": "PAST-05-043",
          "label": "Set 5 · Q43"
         },
         {
          "id": "PAST-07-003",
          "label": "Set 7 · Q3"
         }
        ]
       },
       {
        "id": "slabs-footings-and-cover",
        "title": "Slabs, footings and cover",
        "html": "<p>The thickness of a slab is fixed by the bending moment: the concrete must carry the flexural compression, with span-to-depth limits to control deflection; shear is rarely critical. A slab supported on two opposite sides, or with a long-to-short span ratio above 2, carries load in one direction only: a <em>one-way slab</em>.</p><p>Footings follow the slab minimum steel, 0.12% for HYSD bars such as Fe415. Punching, or two-way, shear is checked on a perimeter d/2 from the column faces. The key takes 15 mm as the minimum clear cover for a slab; IS 456:2000 specifies 20 mm nominal for mild exposure, reducible to 15 mm for bars up to 12 mm.</p><p>Deflection is controlled by limiting the span-to-effective-depth ratio to 7 for cantilevers, 20 for simply supported and 26 for continuous spans up to 10 m. A slab needs at least 0.12% steel with HYSD bars and 0.15% with mild steel; its bars may be no larger than an eighth of its thickness, and main bars are spaced at no more than 3d or 300 mm.</p><p>A footing's depth is governed by shear: one-way shear at d from the column face and punching shear at d/2, where the concrete strength is \\(0.25\\sqrt{f_{ck}}\\). Its steel is designed for the moment at the column face, and its cover is at least 50 mm.</p>",
        "formulas": [
         {
          "label": "Punching-shear area, square column of side a",
          "tex": "b_0 = 4(a + d), \\qquad A = b_0\\, d"
         },
         {
          "label": "Basic span to effective depth ratios",
          "tex": "\\dfrac{l}{d} = 7,\\ \\ 20,\\ \\ 26"
         },
         {
          "label": "Punching shear strength",
          "tex": "\\begin{aligned} \\tau_c &= k_s\\, 0.25\\sqrt{f_{ck}} \\\\ k_s &= 0.5 + \\beta_c \\le 1 \\end{aligned}"
         },
         {
          "label": "Minimum slab steel, HYSD bars",
          "tex": "A_{st} \\ge 0.0012\\, bD"
         }
        ],
        "example": {
         "title": "Worked example: punching-shear area",
         "html": "<p>A 500 mm column on a footing with d = 500 mm: the critical square has side 1.0 m, so \\(b_0 = 4\\) m and \\(A = 4 \\times 0.5 = 2.0\\ \\text{m}^2\\).</p>"
        },
        "moreHtml": "<p>A two-way slab, supported on all four sides with a long-to-short span ratio of 2 or less, bends in both directions. IS 456 gives moment coefficients for the short and long spans that depend on that ratio and on the edge conditions, and corners that are held down need torsion steel, top and bottom, over a fifth of the short span.</p><p>Nominal cover depends on the exposure: 20 mm for mild, 30 for moderate, 45 for severe, 50 for very severe and 75 for extreme conditions, and never less than the bar diameter. Cover protects the steel from corrosion and fire, and it fixes the effective depth.</p>",
        "points": [
         {
          "html": "The minimum slab thickness is set so the concrete resists the flexural compression.",
          "sources": [
           {
            "id": "PAST-04-030",
            "label": "Set 4 · Q30"
           }
          ]
         },
         {
          "html": "Slab thickness is designed to resist the bending moment, with deflection limits.",
          "sources": [
           {
            "id": "PAST-18-061",
            "label": "Set 18 · Q61"
           }
          ]
         },
         {
          "html": "A slab supported on two opposite sides that carries load in one direction is a one way slab.",
          "sources": [
           {
            "id": "PAST-12-018",
            "label": "Set 12 · Q18"
           }
          ]
         },
         {
          "html": "With Fe415 steel, a footing needs at least 0.12% reinforcement.",
          "sources": [
           {
            "id": "PAST-08-050",
            "label": "Set 8 · Q50"
           }
          ]
         },
         {
          "html": "A 3 m square footing with d = 500 mm under a 500 mm column has a two-way shear area of 2.00 m<sup>2</sup>.",
          "sources": [
           {
            "id": "PAST-14-077",
            "label": "Set 14 · Q77"
           }
          ]
         },
         {
          "html": "The minimum cover for a slab is taken as 15 mm.",
          "sources": [
           {
            "id": "PAST-11-048",
            "label": "Set 11 · Q48"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-030",
          "label": "Set 4 · Q30"
         },
         {
          "id": "PAST-18-061",
          "label": "Set 18 · Q61"
         },
         {
          "id": "PAST-12-018",
          "label": "Set 12 · Q18"
         },
         {
          "id": "PAST-08-050",
          "label": "Set 8 · Q50"
         },
         {
          "id": "PAST-14-077",
          "label": "Set 14 · Q77"
         },
         {
          "id": "PAST-11-048",
          "label": "Set 11 · Q48"
         }
        ]
       },
       {
        "id": "bond-and-anchorage",
        "title": "Development length and anchorage of bars",
        "html": "<p>A bar must be embedded far enough for bond to transfer its full stress to the concrete; that embedded length is the <em>development length</em>. In bar notation \\(\\phi\\) stands for the diameter, as in 12\\(\\phi\\) at 150 mm centres.</p><p>Hooks and bends shorten the straight length needed. IS 456 credits a standard U-type, 180°, hook with an anchorage value of 16 bar diameters and a 90° bend with 8.</p><p>The design bond stress for plain bars in tension is 1.2 N/mm<sup>2</sup> for M20 and rises with the grade; deformed bars get 60% more and bars in compression 25% more. For Fe415 bars in M20 the development length works out to about 47 bar diameters.</p><p>Laps are at least \\(L_d\\) or 30 diameters long in tension and 24 in compression, staggered, and kept away from sections of high moment. At a simple support the bar size must also satisfy the check below, so that the bars can develop their stress within the short length available.</p>",
        "formulas": [
         {
          "label": "Development length",
          "tex": "L_d = \\dfrac{\\phi\\, \\sigma_s}{4\\tau_{bd}}"
         },
         {
          "label": "Anchorage credit of a U-hook",
          "tex": "16\\phi"
         },
         {
          "label": "Development length, Fe415 deformed bars in M20",
          "tex": "L_d = \\dfrac{0.87 \\times 415\\,\\phi}{4 \\times 1.92} \\approx 47\\phi"
         },
         {
          "label": "Check at a simple support",
          "tex": "L_d \\le 1.3\\,\\dfrac{M_1}{V} + L_0"
         },
         {
          "label": "Anchorage value of bends",
          "tex": "4\\phi \\text{ per } 45^\\circ,\\ \\ \\max 16\\phi"
         }
        ],
        "example": {
         "title": "Worked example: development length",
         "html": "<p>A 16 mm Fe415 deformed bar in M20 concrete, with a design bond stress of 1.2 × 1.6 = 1.92 N/mm<sup>2</sup>:</p>\\[\\begin{aligned} L_d &amp;= \\dfrac{0.87 \\times 415 \\times 16}{4 \\times 1.92} \\\\ &amp;\\approx 752\\ \\text{mm} \\end{aligned}\\]"
        },
        "moreHtml": "<p>Bond comes from adhesion and friction along plain bars, and from the bearing of the ribs on the concrete in deformed bars, which is why ribbed HYSD bars need much shorter anchorage. Hooks and bends add bearing at the end of the bar; each 45° of bend is credited with 4 diameters, up to 16 for a full U-hook.</p><p>Bars larger than 36 mm are not lapped but welded or joined with couplers, and where possible no more than half the bars are lapped at any one section.</p>",
        "points": [
         {
          "html": "The length needed to transfer the full bar stress to concrete is the development length.",
          "sources": [
           {
            "id": "PAST-08-051",
            "label": "Set 8 · Q51"
           }
          ]
         },
         {
          "html": "A U-bend on a 20 mm bar gives an anchorage length of 16 × 20 = 320 mm.",
          "sources": [
           {
            "id": "PAST-12-070",
            "label": "Set 12 · Q70"
           }
          ]
         },
         {
          "html": "A hooked 20 mm bar has an anchorage value of 320 mm.",
          "sources": [
           {
            "id": "PAST-13-015",
            "label": "Set 13 · Q15"
           }
          ]
         },
         {
          "html": "The average anchorage value of a standard hook is 16 dia.",
          "sources": [
           {
            "id": "PAST-16-050",
            "label": "Set 16 · Q50"
           }
          ]
         },
         {
          "html": "In reinforcement notation \\(\\phi\\) denotes the bar diameter.",
          "sources": [
           {
            "id": "PAST-16-059",
            "label": "Set 16 · Q59"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-08-051",
          "label": "Set 8 · Q51"
         },
         {
          "id": "PAST-12-070",
          "label": "Set 12 · Q70"
         },
         {
          "id": "PAST-13-015",
          "label": "Set 13 · Q15"
         },
         {
          "id": "PAST-16-050",
          "label": "Set 16 · Q50"
         },
         {
          "id": "PAST-16-059",
          "label": "Set 16 · Q59"
         }
        ]
       },
       {
        "id": "column-rules",
        "title": "Rules for columns",
        "html": "<p>Longitudinal steel in a column must lie between 0.8% and 6% of the gross area, with 4% advised in practice where bars are lapped. IS 456 asks for at least 4 bars in a rectangular column and 6 in a circular one, each 12 mm or larger. The nominal cover to column bars is 40 mm, reduced to 25 mm for small columns up to 200 mm with bars up to 12 mm.</p><p>Circular columns are uncommon because rectangular beams are difficult to connect to a round section. The code also caps the load on a circular column at the load allowed on a square column of the same area.</p><p>A column is short when its effective length is no more than 12 times its least lateral dimension; a longer column must also be designed for the extra moment from its own deflection. Every column is designed for a minimum eccentricity of l/500 + D/30, but at least 20 mm.</p><p>Lateral ties hold the bars in place and stop them buckling outwards. They are at least a quarter of the largest bar diameter and 6 mm, at a pitch no greater than the least lateral dimension, 16 times the smallest bar diameter or 300 mm.</p>",
        "formulas": [
         {
          "label": "Short column, axial load",
          "tex": "P_u = 0.4 f_{ck} A_c + 0.67 f_y A_{sc}"
         },
         {
          "label": "Minimum eccentricity",
          "tex": "e_{\\min} = \\dfrac{l}{500} + \\dfrac{D}{30} \\ge 20\\ \\text{mm}"
         },
         {
          "label": "Short column",
          "tex": "\\dfrac{l_{ef}}{D} \\le 12"
         }
        ],
        "example": {
         "title": "Worked example: axial capacity of a short column",
         "html": "<p>A 300 mm square column with four 20 mm bars (1257 mm<sup>2</sup>) in M20 concrete and Fe415 steel:</p>\\[\\begin{aligned} A_c &amp;= 90\\,000 - 1257 = 88\\,743\\ \\text{mm}^2 \\\\ P_u &amp;= 0.4 \\times 20 \\times 88\\,743 \\\\ &amp;\\quad + 0.67 \\times 415 \\times 1257 \\\\ &amp;= 709.9 + 349.5 \\approx 1059\\ \\text{kN} \\end{aligned}\\]"
        },
        "moreHtml": "<p>A short column with the minimum eccentricity allowed for carries the axial load given below, where \\(A_c\\) is the net concrete area. Closely spaced helical reinforcement confines the core and raises the strength by 5%, provided the helix is heavy enough.</p><p>In earthquake-resistant detailing, column bars are lapped only in the middle half of the storey height, with closely spaced ties over the lap, and ties are closed with 135° hooks so that they do not open when the cover spalls.</p>",
        "points": [
         {
          "html": "The maximum longitudinal steel in an RCC column is 6% of gross area.",
          "sources": [
           {
            "id": "PAST-12-017",
            "label": "Set 12 · Q17"
           }
          ]
         },
         {
          "html": "IS 456 asks for at least 4 bars in rectangular and 6 in circular columns, each 12 mm or larger.",
          "sources": [
           {
            "id": "PAST-R2083-005",
            "label": "2083 recall · Q5"
           }
          ]
         },
         {
          "html": "The minimum clear cover for a small column is taken as 25 mm.",
          "sources": [
           {
            "id": "PAST-16-017",
            "label": "Set 16 · Q17"
           }
          ]
         },
         {
          "html": "A circular column is seldom used because it is difficult to connect to a beam.",
          "sources": [
           {
            "id": "PAST-04-024",
            "label": "Set 4 · Q24"
           }
          ]
         },
         {
          "html": "In practice it is difficult to connect beams to round sections, so circular columns are avoided.",
          "sources": [
           {
            "id": "PAST-16-037",
            "label": "Set 16 · Q37"
           }
          ]
         },
         {
          "html": "It is difficult to make a connection with joints on a circular column.",
          "sources": [
           {
            "id": "PAST-18-066",
            "label": "Set 18 · Q66"
           }
          ]
         },
         {
          "html": "A circular column may carry no more than a square column of equal area.",
          "sources": [
           {
            "id": "PAST-08-079",
            "label": "Set 8 · Q79"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-12-017",
          "label": "Set 12 · Q17"
         },
         {
          "id": "PAST-R2083-005",
          "label": "2083 recall · Q5"
         },
         {
          "id": "PAST-16-017",
          "label": "Set 16 · Q17"
         },
         {
          "id": "PAST-04-024",
          "label": "Set 4 · Q24"
         },
         {
          "id": "PAST-16-037",
          "label": "Set 16 · Q37"
         },
         {
          "id": "PAST-18-066",
          "label": "Set 18 · Q66"
         },
         {
          "id": "PAST-08-079",
          "label": "Set 8 · Q79"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Steel design strength",
        "tex": "f_{yd} = 0.87 f_y"
       },
       {
        "label": "Minimum beam steel",
        "tex": "\\dfrac{A_s}{bd} = \\dfrac{0.85}{f_y}"
       },
       {
        "label": "Maximum beam steel",
        "tex": "A_s \\le 0.04\\,bD"
       },
       {
        "label": "Punching perimeter",
        "tex": "b_0 = 4(a + d)"
       },
       {
        "label": "Development length",
        "tex": "L_d = \\dfrac{\\phi\\, \\sigma_s}{4\\tau_{bd}}"
       },
       {
        "label": "Limiting moment, Fe415",
        "tex": "M_{u,\\lim} = 0.138 f_{ck}\\, b d^2"
       },
       {
        "label": "Nominal shear stress",
        "tex": "\\tau_v = \\dfrac{V_u}{b d}"
       },
       {
        "label": "Short column load",
        "tex": "P_u = 0.4 f_{ck} A_c + 0.67 f_y A_{sc}"
       },
       {
        "label": "Minimum eccentricity",
        "tex": "e_{\\min} = \\dfrac{l}{500} + \\dfrac{D}{30}"
       },
       {
        "label": "Development length, Fe415 in M20",
        "tex": "L_d \\approx 47\\phi"
       }
      ],
      "cautions": [
       {
        "id": "slab-thickness-key",
        "status": "corrected",
        "prompt": "The published key letter points to a different option from its own note",
        "html": "<p>The key letter points to another option, though its own note says slab thickness is designed for bending. The depth is fixed by the bending moment, with span-to-depth limits for deflection; shear is rarely critical in slabs.</p>",
        "sources": [
         {
          "id": "PAST-18-061",
          "label": "Set 18 · Q61"
         }
        ]
       }
      ],
      "gaps": [
       "The working-stress method is only outlined here, and deflection calculations and T-beam design are not examined in these papers."
      ]
     },
     "ACiE0504": {
      "code": "ACiE0504",
      "questionCount": 2,
      "format": 2,
      "summary": "<p>This subchapter covers RCC columns and footings and the principles of prestressed concrete; the past papers examine only the prestressed part, and the column and footing rules they test appear under 5.3. The notes explain how prestressing keeps concrete in compression, how pre-tensioned and post-tensioned members are made, why they need high-strength steel and concrete, how a draped tendon balances load, and how the losses of prestress arise and are estimated.</p>",
      "blocks": [
       {
        "id": "concrete-for-prestressed-members",
        "title": "Why prestressed members need high-strength concrete",
        "html": "<p>Prestressing puts a beam into compression before any load acts, by tensioning high-strength steel tendons and anchoring them against the concrete. The load then only cancels part of that stored compression, so the section can stay uncracked. The concrete must carry high compressive stresses at transfer and hold the anchorages, so it must be strong: IS 1343 requires at least M30 for post-tensioned and M40 for pre-tensioned members.</p><p>In <em>pre-tensioning</em> the tendons are stretched between abutments before the concrete is cast and released once it has hardened, so the force passes into the concrete by bond; it suits factory-made members such as railway sleepers, poles and hollow-core slabs. In <em>post-tensioning</em> the tendons run in ducts through hardened concrete and are anchored at the ends, which suits long cast-in-place girders and bridges.</p><p>High-tensile steel is essential: losses of about 200 N/mm<sup>2</sup> would wipe out most of the prestress in mild steel but only a small part of the 1000 N/mm<sup>2</sup> or more stored in a tendon. A tendon draped as a parabola also pushes up on the concrete, balancing part of the load.</p>",
        "formulas": [
         {
          "label": "Stress at a fibre, eccentric prestress plus load",
          "tex": "\\sigma = \\dfrac{P}{A} \\pm \\dfrac{P e\\, y}{I} \\mp \\dfrac{M y}{I}"
         },
         {
          "label": "Load balanced by a parabolic tendon of sag e",
          "tex": "w_b = \\dfrac{8 P e}{L^2}"
         },
         {
          "label": "Fibre stresses with section modulus Z",
          "tex": "\\sigma = \\dfrac{P}{A} \\pm \\dfrac{P e}{Z} \\mp \\dfrac{M}{Z}"
         }
        ],
        "example": {
         "title": "Worked example: stresses at midspan",
         "html": "<p>A 300 mm by 600 mm beam has A = 180 000 mm<sup>2</sup> and Z = 18 × 10<sup>6</sup> mm<sup>3</sup>. With P = 900 kN at e = 100 mm and a midspan moment of 120 kNm, P/A = 5, Pe/Z = 5 and M/Z = 6.67 N/mm<sup>2</sup>:</p>\\[\\begin{aligned} \\sigma_{\\text{bottom}} &amp;= 5 + 5 - 6.67 = 3.33 \\\\ \\sigma_{\\text{top}} &amp;= 5 - 5 + 6.67 = 6.67 \\end{aligned}\\]<p>Both fibres stay in compression, the stresses being in N/mm<sup>2</sup>.</p>"
        },
        "moreHtml": "<p>With the tendon at eccentricity e below the centroid, the prestress P compresses the bottom fibre by \\(P/A + Pe/Z\\) and relieves the top by \\(Pe/Z\\); the load moment then reverses these stresses. Keeping the bottom fibre in compression under full load gives a fully prestressed, uncracked member, while a partially prestressed member accepts limited tension or fine cracks.</p><p>Because the whole section works in compression, prestressed members are lighter and shallower than reinforced ones, deflect less and resist shear better, which makes them economical for long spans, bridges, water tanks and railway sleepers.</p>",
        "points": [
         {
          "html": "Prestressed members need a cube strength of at least about 350 kg/cm<sup>2</sup>, roughly 35 MPa, among the options given.",
          "sources": [
           {
            "id": "PAST-07-038",
            "label": "Set 7 · Q38"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-07-038",
          "label": "Set 7 · Q38"
         }
        ]
       },
       {
        "id": "losses-of-prestress",
        "title": "Losses of prestress and their effect",
        "html": "<p>The force in a tendon falls from its initial value to a lower effective value. Elastic shortening, duct friction and anchorage slip act during tensioning and transfer; creep and shrinkage of the concrete and relaxation of the steel reduce it further with time.</p><p>With less precompression the member cracks at lower loads and loses part of its reserve in flexure, shear and compression, which is why the design allows for these losses.</p><p>Pre-tensioned members lose more to elastic shortening, because the concrete shortens as the tendons are released into it; in post-tensioned members tensioning all the tendons together avoids this, but friction in curved ducts and slip at the anchorages add losses. In total the losses are commonly 15 to 25% of the initial force.</p><p>Each loss can be estimated: elastic shortening as the modular ratio times the concrete stress at the tendon, shrinkage as the shrinkage strain times the steel modulus, friction from the angle turned and the length of duct, and slip from the draw-in over the tendon length.</p>",
        "formulas": [
         {
          "label": "Elastic shortening loss",
          "tex": "\\Delta f_{es} = m\\, f_c"
         },
         {
          "label": "Shrinkage loss",
          "tex": "\\Delta f_{sh} = \\varepsilon_{sh}\\, E_s"
         },
         {
          "label": "Friction in a curved duct",
          "tex": "P_x = P_0\\, e^{-(\\mu\\alpha + kx)}"
         },
         {
          "label": "Anchorage slip loss",
          "tex": "\\Delta f_{sl} = \\dfrac{\\Delta\\, E_s}{L}"
         }
        ],
        "example": {
         "title": "Worked example: short- and long-term losses",
         "html": "<p>A pre-tensioned beam has a concrete stress of 10 N/mm<sup>2</sup> at the tendon, a modular ratio of 6, a shrinkage strain of 0.0003 and an initial tendon stress of 1100 N/mm<sup>2</sup>:</p>\\[\\begin{aligned} \\Delta f_{es} &amp;= 6 \\times 10 = 60\\ \\text{N/mm}^2 \\\\ \\Delta f_{sh} &amp;= 0.0003 \\times 200\\,000 \\\\ &amp;= 60\\ \\text{N/mm}^2 \\end{aligned}\\]<p>Together they remove 120 N/mm<sup>2</sup>, about 11% of the initial stress, before creep and relaxation are counted.</p>"
        },
        "moreHtml": "<p>Steel relaxation is the loss of stress in a tendon held at constant length. It grows sharply with the initial stress, which is why tendons are not stressed much above 75 to 80% of their strength and low-relaxation strands are preferred. Creep and shrinkage of the concrete go on for years, so design uses the effective prestress left after all losses.</p><p>Underestimating the losses leaves too little precompression: the member then cracks earlier in service, deflects more and has less reserve in shear.</p>",
        "points": [
         {
          "html": "Loss of prestress does all of the above: it reduces the member's compressive, tensile and shear reserve.",
          "sources": [
           {
            "id": "PAST-06-020",
            "label": "Set 6 · Q20"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-020",
          "label": "Set 6 · Q20"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Fibre stress",
        "tex": "\\sigma = \\dfrac{P}{A} \\pm \\dfrac{P e}{Z} \\mp \\dfrac{M}{Z}"
       },
       {
        "label": "Load balanced by a parabolic tendon",
        "tex": "w_b = \\dfrac{8 P e}{L^2}"
       },
       {
        "label": "Friction loss",
        "tex": "P_x = P_0\\, e^{-(\\mu\\alpha + kx)}"
       }
      ],
      "cautions": [],
      "gaps": [
       "RCC column and footing design are not examined under this subchapter; the column and footing rules that the papers do test are covered in 5.3."
      ]
     },
     "ACiE0505": {
      "code": "ACiE0505",
      "questionCount": 18,
      "format": 2,
      "summary": "<p>Steel is strong, ductile and quick to erect, and much of steel design is about connections and stability. This subchapter covers rolled sections, working stress, limit state and plastic design with section classes, shape factors and load factors, then bolted and riveted joints, friction-grip bolts, pitch, edge distance and net area.</p><p>It goes on to welded joints and the rules for throat, length and size, and ends with compression members, built-up laced and battened columns, lateral-torsional buckling, web crippling and truss rafters.</p>",
      "blocks": [
       {
        "id": "sections-and-design-basis",
        "title": "Steel sections, working stress, shape factor and load factor",
        "html": "<p>Rolled sections suit different jobs. Beam sections, ISMB, ISLB and ISWB, are deep and narrow; column sections, ISSC and ISHB, have wide flanges so the stiffness is similar about both axes. In working stress design the permissible, or working, stress is the yield stress divided by a factor of safety.</p><p>Plastic design uses the <em>shape factor</em> \\(S = Z_p/Z_e\\), the plastic over the elastic section modulus: about 1.10 to 1.20 for rolled I-sections, 1.5 for a rectangle, 1.7 for a circle and 2 for a diamond. The load factor is the shape factor times the factor of safety.</p><p>IS 800:2007 uses limit state design. The partial safety factor for the material is 1.10 against yielding and 1.25 against rupture at the ultimate stress, and the common structural steel E250 has a yield stress of 250 N/mm<sup>2</sup> and an ultimate stress of 410 N/mm<sup>2</sup>.</p><p>Sections are classed by the width-to-thickness ratios of their plates as plastic, compact, semi-compact or slender. Only plastic sections can form the hinges that plastic analysis assumes; slender ones buckle locally before they yield.</p>",
        "formulas": [
         {
          "label": "Shape factor and load factor",
          "tex": "S = \\dfrac{Z_p}{Z_e}, \\qquad LF = S \\times FOS"
         },
         {
          "label": "Design strengths, IS 800:2007",
          "tex": "\\begin{aligned} &f_y/\\gamma_{m0}, \\quad \\gamma_{m0} = 1.10 \\\\ &f_u/\\gamma_{m1}, \\quad \\gamma_{m1} = 1.25 \\end{aligned}"
         },
         {
          "label": "Plastic moment",
          "tex": "M_p = f_y\\, Z_p"
         },
         {
          "label": "Permissible stresses, IS 800:1984",
          "tex": "0.66 f_y,\\ \\ 0.6 f_y,\\ \\ 0.4 f_y"
         }
        ],
        "example": {
         "title": "Worked example: load factor with increased allowable stress",
         "html": "<p>S = 1.12 and FOS = 1.5; a 20% rise in allowable stress makes the effective FOS \\(1.5/1.2 = 1.25\\), so \\(LF = 1.12 \\times 1.25 = 1.40\\).</p>"
        },
        "moreHtml": "<p>The older working stress method of IS 800:1984 allowed 0.66f<sub>y</sub> in bending, 0.6f<sub>y</sub> in axial tension and 0.4f<sub>y</sub> in average shear, a factor of safety of about 1.5 on yield. Plastic design instead multiplies the working loads by a load factor and designs for the collapse mechanism, using the plastic moment \\(f_y Z_p\\).</p><p>The shape factor measures the reserve beyond first yield: a rectangle carries 50% more moment when fully plastic than at first yield, while an I-section, with most of its material already in the flanges, gains only 10 to 20%.</p>",
        "points": [
         {
          "html": "ISSC sections are commonly used for columns, having wide flanges.",
          "sources": [
           {
            "id": "PAST-06-002",
            "label": "Set 6 · Q2"
           }
          ]
         },
         {
          "html": "The permissible stress in steel is taken as the working stress: yield stress over a factor of safety.",
          "sources": [
           {
            "id": "PAST-06-021",
            "label": "Set 6 · Q21"
           }
          ]
         },
         {
          "html": "The shape factor of a rolled beam lies between 1.10 to 1.20.",
          "sources": [
           {
            "id": "PAST-04-001",
            "label": "Set 4 · Q1"
           }
          ]
         },
         {
          "html": "A diamond-shaped cross-section in flexure has a shape factor of 2.",
          "sources": [
           {
            "id": "PAST-15-026",
            "label": "Set 15 · Q26"
           }
          ]
         },
         {
          "html": "An I-beam with shape factor 1.12, FOS 1.5 and a 20% rise in allowable stress has a load factor of 1.40.",
          "sources": [
           {
            "id": "PAST-09-073",
            "label": "Set 9 · Q73"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-002",
          "label": "Set 6 · Q2"
         },
         {
          "id": "PAST-06-021",
          "label": "Set 6 · Q21"
         },
         {
          "id": "PAST-04-001",
          "label": "Set 4 · Q1"
         },
         {
          "id": "PAST-15-026",
          "label": "Set 15 · Q26"
         },
         {
          "id": "PAST-09-073",
          "label": "Set 9 · Q73"
         }
        ]
       },
       {
        "id": "bolted-and-riveted-connections",
        "title": "Rivet and bolt connections",
        "html": "<p>The strength, or value, of a rivet or bolt is the least of its strengths in shearing, bearing and tearing. Dividing the member load by that value and rounding up gives the number of fasteners. Holes reduce a plate's area: the net area is the gross width less the hole diameters, times the thickness.</p><p>IS 800 sets the minimum pitch, the distance between fastener centres, at 2.5 times the nominal diameter. Where stresses reverse or fatigue matters, high-strength friction grip bolts are used: they clamp the plates so load passes by friction without slip, while black bolts loosen.</p><p>In IS 800:2007 a bearing-type bolt's design strength is the lesser of its shear and bearing strengths; shear is based on \\(f_{ub}/\\sqrt{3}\\) over the shank or threaded area, with a partial safety factor of 1.25. Holes are slightly larger than the bolt, 18 mm for a 16 mm bolt and 22 mm for a 20 mm bolt, and edge distances are at least 1.5 to 1.7 times the hole diameter.</p><p>Where holes are staggered, a zigzag path may govern; each diagonal step adds \\(p^2/4g\\) to the net width, where p is the stagger and g the gauge.</p>",
        "formulas": [
         {
          "label": "Number of fasteners and net area",
          "tex": "n = \\dfrac{P}{R_{\\text{min}}}, \\qquad A_{\\text{net}} = (b - n d_h)\\,t"
         },
         {
          "label": "Bolt shear strength (IS 800:2007)",
          "tex": "\\begin{aligned} V_{dsb} &= \\dfrac{f_{ub}}{\\sqrt{3}\\,\\gamma_{mb}} \\\\ &\\quad \\times (n_n A_{nb} + n_s A_{sb}) \\end{aligned}"
         },
         {
          "label": "Bolt bearing strength",
          "tex": "V_{dpb} = \\dfrac{2.5\\, k_b\\, d\\, t\\, f_u}{\\gamma_{mb}}"
         },
         {
          "label": "Net width with staggered holes",
          "tex": "b_n = b - n d_0 + \\sum \\dfrac{p^2}{4g}"
         }
        ],
        "example": {
         "title": "Worked examples: rivet count and net area",
         "html": "<p>35 t with a least rivet value of 3425 kg: \\(35\\,000/3425 = 10.2\\), so 11 rivets.</p><p>A 400 mm by 10 mm plate with one 18 mm hole: \\((400 - 18) \\times 10 = 3820\\ \\text{mm}^2\\), which is 38.2 cm<sup>2</sup>.</p>"
        },
        "moreHtml": "<p>The pitch also has a maximum, 32t or 300 mm in general and 12t or 200 mm in compression members, so that the plates do not buckle between fasteners or let moisture in.</p><p>High-strength friction grip bolts are tightened to a proof load, so the clamping force times the slip factor of the faying surfaces carries the load. Because no slip occurs, the joint is stiff and does not loosen under vibration or reversal of stress, which makes these bolts the choice for bridges, crane girders and moment connections.</p>",
        "points": [
         {
          "html": "Rivet strengths of 3425, 4575 and 5025 kg for a 35 tonne load mean 11 rivets are needed.",
          "sources": [
           {
            "id": "PAST-04-066",
            "label": "Set 4 · Q66"
           }
          ]
         },
         {
          "html": "A 40 cm wide, 10 mm plate with one 18 mm bolt hole has a net area of 38.2 cm<sup>2</sup>.",
          "sources": [
           {
            "id": "PAST-07-077",
            "label": "Set 7 · Q77"
           },
           {
            "id": "PAST-18-077",
            "label": "Set 18 · Q77"
           }
          ]
         },
         {
          "html": "For reversal of stresses the most suitable bolt is the friction grip bolt.",
          "sources": [
           {
            "id": "PAST-08-049",
            "label": "Set 8 · Q49"
           }
          ]
         },
         {
          "html": "The minimum pitch is 2.5 × the nominal diameter of the fastener.",
          "sources": [
           {
            "id": "PAST-11-055",
            "label": "Set 11 · Q55"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-066",
          "label": "Set 4 · Q66"
         },
         {
          "id": "PAST-07-077",
          "label": "Set 7 · Q77"
         },
         {
          "id": "PAST-18-077",
          "label": "Set 18 · Q77"
         },
         {
          "id": "PAST-08-049",
          "label": "Set 8 · Q49"
         },
         {
          "id": "PAST-11-055",
          "label": "Set 11 · Q55"
         }
        ]
       },
       {
        "id": "welded-connections",
        "title": "Spot welds, fillet welds and batten welds",
        "html": "<p><em>Spot welding</em> is a resistance weld that joins lapped sheets, one placed below the other, fusing them at spots between electrodes. A fillet weld's strength is taken through its throat, which is shorter than the leg.</p><p>A <em>side fillet weld</em> runs parallel to the load and resists it in shear; an end fillet weld is perpendicular to it. For battens, IS 800 requires the welds at each end of a batten plate to total enough length, with at least one third of it placed at each end.</p><p>For a right-angled fillet weld the effective throat is 0.7 times the size, and the design strength is \\(f_u/\\sqrt{3}\\) on the throat area, divided by 1.25 for shop welds or 1.5 for site welds. The effective length is the overall length less twice the size, and at least four times the size.</p><p>A full-penetration butt weld is as strong as the parent plate. The minimum fillet size depends on the thicker part joined, 3 mm up to 10 mm thick and 5 mm up to 20 mm, and at the square edge of a plate the size may not exceed the thickness less 1.5 mm.</p>",
        "formulas": [
         {
          "label": "Throat of a 90° fillet weld",
          "tex": "t_t = 0.7\\, s"
         },
         {
          "label": "Design strength of a fillet weld",
          "tex": "P_{dw} = \\dfrac{f_u}{\\sqrt{3}\\,\\gamma_{mw}}\\, t_t\\, L_w"
         },
         {
          "label": "Effective length",
          "tex": "L_w = L - 2s \\ge 4s"
         }
        ],
        "example": {
         "title": "Worked example: strength of a fillet weld",
         "html": "<p>A 6 mm shop fillet weld with an effective length of 150 mm, in steel with \\(f_u = 410\\) N/mm<sup>2</sup>:</p>\\[\\begin{aligned} t_t &amp;= 0.7 \\times 6 = 4.2\\ \\text{mm} \\\\ f_{wd} &amp;= \\dfrac{410}{\\sqrt{3} \\times 1.25} \\approx 189\\ \\text{N/mm}^2 \\\\ P_{dw} &amp;= 189 \\times 4.2 \\times 150 \\approx 119\\ \\text{kN} \\end{aligned}\\]"
        },
        "moreHtml": "<p>Welding gives continuous, rigid and airtight joints without holes to weaken the plates, and it is usually lighter than riveting or bolting. Its drawbacks are the skill and inspection it needs, residual stresses and distortion from uneven heating, and brittle fracture if defects such as cracks, porosity, slag inclusions, undercut or lack of fusion go undetected.</p><p>Welding position, flat, horizontal, vertical or overhead, affects quality, and overhead welding is the hardest, so connections are arranged for shop welding in the flat position where possible, with bolted joints on site.</p>",
        "points": [
         {
          "html": "Spot welding is used for plates lapped one below the other.",
          "sources": [
           {
            "id": "PAST-06-042",
            "label": "Set 6 · Q42"
           },
           {
            "id": "PAST-18-042",
            "label": "Set 18 · Q42"
           }
          ]
         },
         {
          "html": "A fillet weld parallel to the applied load is a side fillet weld.",
          "sources": [
           {
            "id": "PAST-07-049",
            "label": "Set 7 · Q49"
           }
          ]
         },
         {
          "html": "Batten end welds need enough total length, with at least one third of that length placed on each end of the batten.",
          "sources": [
           {
            "id": "PAST-17-001",
            "label": "Set 17 · Q1"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-042",
          "label": "Set 6 · Q42"
         },
         {
          "id": "PAST-18-042",
          "label": "Set 18 · Q42"
         },
         {
          "id": "PAST-07-049",
          "label": "Set 7 · Q49"
         },
         {
          "id": "PAST-17-001",
          "label": "Set 17 · Q1"
         }
        ]
       },
       {
        "id": "columns-beams-and-trusses",
        "title": "Built-up columns, web crippling and truss rafters",
        "html": "<p>Built-up columns join their components with lacing or battens so they act together. Lacing forms a triangulated web that resists shear well, so a laced column is stronger than a battened one of the same length and end conditions; IS 800 increases the effective length of battened columns by 10%.</p><p><em>Web crippling</em> is local failure of a beam web at the root of the flange under a concentrated load or reaction; bearing stiffeners prevent it. In a roof truss the principal rafter is a compression member, but purlins placed between panel points also bend it, so it is designed for axial compression and bending moment.</p><p>IS 800 limits the slenderness ratio to 180 for members compressed by dead and imposed loads, 250 for those compressed only by wind or earthquake, and 350 for ties that reverse under wind. Lacing bars are inclined at 40° to 70° to the column axis, and both lacing and battens are designed for a transverse shear of 2.5% of the axial force.</p><p>A beam whose compression flange is not held sideways can fail by lateral-torsional buckling, twisting sideways at a moment below its plastic moment. A thin web may also buckle like a strut under a concentrated load, while crippling is local yielding at the root of the flange.</p>",
        "formulas": [
         {
          "label": "Slenderness limits",
          "tex": "\\lambda \\le 180,\\ \\ 250,\\ \\ 350"
         },
         {
          "label": "Transverse shear for lacing and battens",
          "tex": "V_t = 0.025\\, P"
         },
         {
          "label": "Web bearing (crippling) capacity",
          "tex": "F_w = \\dfrac{(b_1 + n_2)\\, t_w\\, f_{yw}}{\\gamma_{m0}}"
         }
        ],
        "example": {
         "title": "Worked example: force in a lacing bar",
         "html": "<p>A laced column carries 1000 kN, with lacing in two parallel planes at 45° to the axis:</p>\\[\\begin{aligned} V_t &amp;= 0.025 \\times 1000 = 25\\ \\text{kN} \\\\ F &amp;= \\dfrac{25/2}{\\sin 45^\\circ} \\approx 17.7\\ \\text{kN} \\end{aligned}\\]<p>Each bar is designed for this force in tension and in compression.</p>"
        },
        "moreHtml": "<p>The design compressive stress of a column falls with slenderness along buckling curves a to d, chosen by the type of section and the axis of buckling to allow for initial crookedness and residual stresses; a rolled I-section typically uses curve a about its major axis and b about its minor axis.</p><p>Web crippling is checked by spreading the load through the stiff bearing length plus a 1:2.5 dispersion through the flange and root, and bearing stiffeners are added where that is not enough. Purlins between panel points are avoided where possible, since they bend the rafters.</p>",
        "points": [
         {
          "html": "The effective length of a battened column is increased by 10%.",
          "sources": [
           {
            "id": "PAST-11-043",
            "label": "Set 11 · Q43"
           }
          ]
         },
         {
          "html": "For the same load, length and end conditions, a laced column is stronger than a battened one.",
          "sources": [
           {
            "id": "PAST-15-034",
            "label": "Set 15 · Q34"
           }
          ]
         },
         {
          "html": "Web crippling is failure of the web under a concentrated load.",
          "sources": [
           {
            "id": "PAST-10-004",
            "label": "Set 10 · Q4"
           }
          ]
         },
         {
          "html": "With purlins between panel points, the principal rafter is designed for axial compression and bending moment.",
          "sources": [
           {
            "id": "PAST-12-001",
            "label": "Set 12 · Q1"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-11-043",
          "label": "Set 11 · Q43"
         },
         {
          "id": "PAST-15-034",
          "label": "Set 15 · Q34"
         },
         {
          "id": "PAST-10-004",
          "label": "Set 10 · Q4"
         },
         {
          "id": "PAST-12-001",
          "label": "Set 12 · Q1"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Shape factor",
        "tex": "S = \\dfrac{Z_p}{Z_e}"
       },
       {
        "label": "Load factor",
        "tex": "LF = S \\times FOS"
       },
       {
        "label": "Number of fasteners",
        "tex": "n = \\dfrac{P}{R_{\\text{min}}}"
       },
       {
        "label": "Net area",
        "tex": "A_{\\text{net}} = (b - n d_h)\\,t"
       },
       {
        "label": "Minimum pitch",
        "tex": "p \\ge 2.5\\,d"
       },
       {
        "label": "Fillet weld throat",
        "tex": "t_t = 0.7\\, s"
       },
       {
        "label": "Bolt bearing strength",
        "tex": "V_{dpb} = \\dfrac{2.5\\, k_b\\, d\\, t\\, f_u}{\\gamma_{mb}}"
       },
       {
        "label": "Net width, staggered holes",
        "tex": "b_n = b - n d_0 + \\sum \\dfrac{p^2}{4g}"
       },
       {
        "label": "Lacing and batten shear",
        "tex": "V_t = 0.025\\, P"
       }
      ],
      "cautions": [],
      "gaps": [
       "Tension members, column bases and plate girders from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0506": {
      "code": "ACiE0506",
      "questionCount": 12,
      "format": 2,
      "summary": "<p>Timber and masonry are Nepal's traditional building materials and still carry most small buildings. This subchapter covers timber strength, grading and seasoning, the short, intermediate and long classes of timber column and the checks on timber beams, then masonry walls: the permissible stress and its reduction factors, effective height and thickness, slenderness, cavity walls, eccentric loads and buttresses.</p><p>It explains the middle-third rule and the kern, and the four levels of the Nepal building code with the NBC 202 rules for load-bearing masonry.</p>",
      "blocks": [
       {
        "id": "timber-columns",
        "title": "Slenderness of solid timber columns",
        "html": "<p>Timber is strong along the grain and much weaker across it, so the direction of loading is part of every design check. A solid timber column is classed by its slenderness ratio S/d, the unsupported length over the least lateral dimension. IS 883 limits that ratio to 50 for solid columns; slender posts buckle long before the timber is crushed.</p><p>IS 883 divides solid columns into three classes. Short columns, with S/d up to 11, fail by crushing; intermediate columns, up to \\(K_8\\), by a combination of crushing and buckling; and long columns, from \\(K_8\\) up to 50, by buckling, so they are designed with an Euler-type formula.</p><p>Moisture governs timber strength: seasoned timber, dried to about 12 to 15%, is stronger and stiffer than green timber and does not shrink, warp or decay as readily. Knots, sloping grain and checks weaken it, so timber is graded, and species are grouped by stiffness into groups A, B and C.</p>",
        "formulas": [
         {
          "label": "Slenderness limit for solid timber columns",
          "tex": "\\dfrac{S}{d} \\le 50"
         },
         {
          "label": "Limit between intermediate and long columns",
          "tex": "K_8 = 0.702\\sqrt{\\dfrac{E}{f_{cp}}}"
         },
         {
          "label": "Intermediate column",
          "tex": "f_c = f_{cp}\\left[1 - \\dfrac{1}{3}\\left(\\dfrac{S}{K_8\\, d}\\right)^4\\right]"
         },
         {
          "label": "Long column",
          "tex": "f_c = \\dfrac{0.329\\, E}{(S/d)^2}"
         }
        ],
        "example": {
         "title": "Worked example: a long timber post",
         "html": "<p>A 100 mm square post 3 m high, with E = 10 000 N/mm<sup>2</sup> and \\(f_{cp} = 8\\) N/mm<sup>2</sup>:</p>\\[\\begin{aligned} K_8 &amp;= 0.702\\sqrt{10\\,000/8} \\approx 24.8 \\\\ S/d &amp;= 3000/100 = 30 \\gt K_8 \\\\ f_c &amp;= \\dfrac{0.329 \\times 10\\,000}{30^2} \\\\ &amp;\\approx 3.66\\ \\text{N/mm}^2 \\end{aligned}\\]<p>It is a long column, and its safe load is about \\(3.66 \\times 100^2 \\approx 36.6\\) kN.</p>"
        },
        "moreHtml": "<p>For an intermediate column the permissible stress falls from the crushing value by a fourth-power term, reaching two thirds of it at \\(S/d = K_8\\), exactly where the long-column formula takes over. Beyond S/d of 50 a column is too slender to use at all.</p><p>Timber beams are checked for bending, for horizontal shear, which is greatest at the neutral axis and critical because timber is weak along the grain, and for deflection, limited to span/360 where brittle finishes are carried and span/240 otherwise.</p>",
        "points": [
         {
          "html": "For a solid circular timber column, S/d must stay at or below 50.",
          "sources": [
           {
            "id": "PAST-05-002",
            "label": "Set 5 · Q2"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-002",
          "label": "Set 5 · Q2"
         }
        ]
       },
       {
        "id": "masonry-walls",
        "title": "Masonry walls: effective thickness, slenderness and eccentric loads",
        "html": "<p>For a cavity wall whose two leaves both carry load, IS 1905 takes the effective thickness as two thirds of the sum of the leaf thicknesses; the cavity itself adds nothing. Wall slenderness is the effective height or length over the effective thickness, and the smaller ratio governs.</p><p>When a load is eccentric with an eccentricity ratio above 1/24, the peak stress acts only at the edge, so the permissible compressive stress may be raised by 25%. A long, tall wall is weak laterally; buttresses at intervals stiffen it and shorten its effective length. Gravity retaining walls rely on their own weight, so heavy, dense stone suits them.</p><p>The permissible compressive stress of a wall starts from a basic stress set by the strength of the units and the grade of mortar. It is multiplied by a stress reduction factor for slenderness and eccentricity, an area reduction factor for small piers under 0.2 m<sup>2</sup>, and a shape factor that rewards taller units.</p><p>The effective height depends on the restraint: 0.75 of the clear height where RCC slabs bear on the wall above and below, and the full height where the supports only prevent sideways movement. Load-bearing walls in cement mortar are limited to a slenderness ratio of about 27.</p>",
        "formulas": [
         {
          "label": "Cavity wall, both leaves loaded",
          "tex": "t_{ef} = \\dfrac{2}{3}(t_1 + t_2)"
         },
         {
          "label": "Slenderness ratio",
          "tex": "SR = \\dfrac{h_{ef}}{t_{ef}} \\ \\text{or}\\ \\dfrac{l_{ef}}{t_{ef}}, \\text{ the smaller}"
         },
         {
          "label": "Permissible compressive stress (IS 1905)",
          "tex": "f_c = f_b\\, k_s\\, k_a\\, k_p"
         },
         {
          "label": "Area reduction factor, area A below 0.2 m²",
          "tex": "k_a = 0.7 + 1.5A"
         },
         {
          "label": "Effective height, slabs bearing above and below",
          "tex": "h_{ef} = 0.75\\, H"
         }
        ],
        "example": {
         "title": "Worked example: wall slenderness",
         "html": "<p>A 200 mm wall 5 m long and 3.8 m high: \\(h/t = 3.8/0.2 = 19\\) and \\(l/t = 5/0.2 = 25\\), so the slenderness ratio is 19.</p>"
        },
        "moreHtml": "<p>Masonry is strong in compression but weak in tension and shear, so walls carry vertical loads well but crack under the lateral loads of earthquakes unless they are thick, well bonded and tied together. Openings are kept small and away from corners, and cross walls at close spacing stiffen long walls in the same way as buttresses.</p><p>A wall gains strength with stronger units, but a mortar much stronger than needed adds little and makes the wall brittle; 1:6 cement–sand mortar is common for load-bearing brickwork.</p>",
        "points": [
         {
          "html": "A cavity wall with both leaves load-bearing has an effective thickness of 2/3 of the sum of the thickness of both walls.",
          "sources": [
           {
            "id": "PAST-04-038",
            "label": "Set 4 · Q38"
           }
          ]
         },
         {
          "html": "A 200 mm wall 5 m long and 3.8 m high between RCC slabs has a slenderness ratio of 19.",
          "sources": [
           {
            "id": "PAST-12-037",
            "label": "Set 12 · Q37"
           }
          ]
         },
         {
          "html": "A 200 mm modular-brick wall with 3.8 m clear height and 5 m between cross walls has slenderness 19.",
          "sources": [
           {
            "id": "PAST-15-068",
            "label": "Set 15 · Q68"
           }
          ]
         },
         {
          "html": "For an eccentricity ratio above 1/24, the permissible stress may be increased by 25%.",
          "sources": [
           {
            "id": "PAST-06-075",
            "label": "Set 6 · Q75"
           }
          ]
         },
         {
          "html": "A 50 m long, 5 m high brick wall is strengthened by constructing buttresses.",
          "sources": [
           {
            "id": "PAST-05-072",
            "label": "Set 5 · Q72"
           }
          ]
         },
         {
          "html": "Heavy stone is used for retaining walls, which resist earth pressure by their weight.",
          "sources": [
           {
            "id": "PAST-15-006",
            "label": "Set 15 · Q6"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-038",
          "label": "Set 4 · Q38"
         },
         {
          "id": "PAST-12-037",
          "label": "Set 12 · Q37"
         },
         {
          "id": "PAST-15-068",
          "label": "Set 15 · Q68"
         },
         {
          "id": "PAST-06-075",
          "label": "Set 6 · Q75"
         },
         {
          "id": "PAST-05-072",
          "label": "Set 5 · Q72"
         },
         {
          "id": "PAST-15-006",
          "label": "Set 15 · Q6"
         }
        ]
       },
       {
        "id": "middle-third-rule",
        "title": "The middle-third rule",
        "html": "<p>Under combined direct and bending stress, a section has no tension anywhere while the resultant stays within its kern. For a rectangle the kern is the middle third, \\(e \\le b/6\\), which is why masonry walls, piers and dam bases are checked against the middle-third rule. The rule belongs to rectangular sections; a circular section has a middle-quarter kern, \\(e \\le d/8\\).</p><p>For a rectangular section of width b under a load P at eccentricity e, the edge stresses are \\((P/A)(1 \\pm 6e/b)\\), so the stress at the far edge becomes zero exactly when e = b/6. Beyond that, masonry, which cannot take tension, cracks, and only part of the base carries the load, at a higher peak pressure.</p><p>Gravity dams, retaining walls, chimneys and masonry piers are therefore proportioned so that the resultant stays within the middle third under the design loads.</p>",
        "formulas": [
         {
          "label": "No tension: rectangle and circle",
          "tex": "e \\le \\dfrac{b}{6}, \\qquad e \\le \\dfrac{d}{8}"
         },
         {
          "label": "Edge stresses, rectangular section",
          "tex": "\\sigma = \\dfrac{P}{A}\\left(1 \\pm \\dfrac{6e}{b}\\right)"
         },
         {
          "label": "Kern distance",
          "tex": "e_k = \\dfrac{Z}{A}"
         },
         {
          "label": "Resultant outside the middle third, per unit length",
          "tex": "\\begin{aligned} L' &= 3\\left(\\dfrac{b}{2} - e\\right) \\\\ p_{\\max} &= \\dfrac{2P}{L'} \\end{aligned}"
         }
        ],
        "example": {
         "title": "Worked example: pressure under a wall base",
         "html": "<p>A base 1.2 m wide carries 120 kN per metre run at an eccentricity of 0.15 m, inside b/6 = 0.2 m:</p>\\[\\begin{aligned} \\sigma &amp;= \\dfrac{120}{1.2}\\left(1 \\pm \\dfrac{6 \\times 0.15}{1.2}\\right) \\\\ &amp;= 175\\ \\text{or}\\ 25\\ \\text{kN/m}^2 \\end{aligned}\\]<p>At e = 0.3 m the resultant leaves the middle third: the loaded length becomes \\(3(0.6 - 0.3) = 0.9\\) m and the peak pressure \\(240/0.9 \\approx 267\\) kN/m<sup>2</sup>.</p>"
        },
        "moreHtml": "<p>The kern of any section is the zone within which a compressive load causes no tension anywhere, and its limit in each direction is \\(Z/A\\). For a rectangle that gives b/6 about each axis, so the kern is a rhombus whose diagonals are a third of the sides; for a solid circle of diameter d it gives d/8.</p><p>When the resultant falls outside the middle third, the loaded length of the base shrinks to three times the distance from the resultant to the nearer edge, and the peak pressure rises to twice the load divided by that length.</p>",
        "points": [
         {
          "html": "The middle-third rule is feasible to rectangular cross-sections only; circles have a middle-quarter kern.",
          "sources": [
           {
            "id": "PAST-09-025",
            "label": "Set 9 · Q25"
           }
          ]
         },
         {
          "html": "The middle third rule is used to avoid tension at the base.",
          "sources": [
           {
            "id": "PAST-10-037",
            "label": "Set 10 · Q37"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-09-025",
          "label": "Set 9 · Q25"
         },
         {
          "id": "PAST-10-037",
          "label": "Set 10 · Q37"
         }
        ]
       },
       {
        "id": "nbc-for-masonry",
        "title": "NBC 202 and the rules of thumb for masonry",
        "html": "<p>In the Nepal National Building Code, NBC 202 gives the mandatory rules of thumb, ready-to-use requirements, for load-bearing masonry buildings. NBC 201 covers RC frames with masonry infill, NBC 203 low-strength buildings, NBC 204 earthen buildings and NBC 205 RC buildings without masonry infill; seismic design is in NBC 105 and wind in NBC 104. Continuous bands and connected corners give masonry buildings a coherent load path.</p><p>The Nepal code works at four levels: international state-of-the-art practice for major buildings; the NBC 100 series for professionally engineered buildings; the NBC 200 series of mandatory rules of thumb for small buildings built without a structural engineer; and guidelines for remote rural houses in low-strength masonry and earth.</p><p>For load-bearing masonry, NBC 202 fixes the minimum wall thickness, the storey height and number of storeys, the size and position of openings and the spacing of cross walls, and it calls for horizontal bands at plinth, sill, lintel and roof level with vertical bars at corners and junctions.</p>",
        "moreHtml": "<p>Earthquake damage to masonry follows a pattern: diagonal shear cracks between openings, walls separating at the corners, long unrestrained walls and gable ends falling outwards, and stone walls with loose infill splitting into leaves. The bands and corner bars of NBC 202 tie the walls into a box that shares the lateral load, and through-stones bond the two faces of stone walls together.</p><p>Openings are kept away from corners and limited in total length so that enough solid wall remains to resist shear, and heavy roofs are avoided, because earthquake forces grow with mass.</p>",
        "points": [
         {
          "html": "NBC 202 is where the mandatory rules of thumb for load-bearing masonry appear.",
          "sources": [
           {
            "id": "PAST-11-069",
            "label": "Set 11 · Q69"
           }
          ]
         },
         {
          "html": "The design of load-bearing masonry is based on NBC 202.",
          "sources": [
           {
            "id": "PAST-16-005",
            "label": "Set 16 · Q5"
           }
          ]
         },
         {
          "html": "NBC 202 covers the mandatory rules of thumb for load-bearing masonry buildings.",
          "sources": [
           {
            "id": "PAST-R2083-022",
            "label": "2083 recall · Q22"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-11-069",
          "label": "Set 11 · Q69"
         },
         {
          "id": "PAST-16-005",
          "label": "Set 16 · Q5"
         },
         {
          "id": "PAST-R2083-022",
          "label": "2083 recall · Q22"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Timber column slenderness",
        "tex": "\\dfrac{S}{d} \\le 50"
       },
       {
        "label": "Cavity wall effective thickness",
        "tex": "t_{ef} = \\dfrac{2}{3}(t_1 + t_2)"
       },
       {
        "label": "Middle third, rectangle",
        "tex": "e \\le \\dfrac{b}{6}"
       },
       {
        "label": "Middle quarter, circle",
        "tex": "e \\le \\dfrac{d}{8}"
       },
       {
        "label": "Intermediate and long column limit",
        "tex": "K_8 = 0.702\\sqrt{\\dfrac{E}{f_{cp}}}"
       },
       {
        "label": "Long timber column",
        "tex": "f_c = \\dfrac{0.329\\, E}{(S/d)^2}"
       },
       {
        "label": "Masonry permissible stress",
        "tex": "f_c = f_b\\, k_s\\, k_a\\, k_p"
       },
       {
        "label": "Edge stresses, rectangle",
        "tex": "\\sigma = \\dfrac{P}{A}\\left(1 \\pm \\dfrac{6e}{b}\\right)"
       }
      ],
      "cautions": [
       {
        "id": "cavity-wall-effective-thickness",
        "status": "corrected",
        "prompt": "The published key gives the full sum of both leaves",
        "html": "<p>IS 1905 takes the effective thickness of a cavity wall with both leaves load-bearing as two thirds of the sum of their thicknesses, not the full sum. BS 5628 uses the greater of this and the thicker leaf.</p>",
        "sources": [
         {
          "id": "PAST-04-038",
          "label": "Set 4 · Q38"
         }
        ]
       },
       {
        "id": "wall-slenderness-effective-height-set12",
        "status": "review",
        "prompt": "The key uses the clear height without the effective-height reduction",
        "html": "<p>With RCC slabs bearing on the wall, IS 1905 would take the effective height as 0.75H, giving about \\(0.75 \\times 3.8/0.2 \\approx 14\\). The published answer, 19, uses the clear height directly.</p>",
        "sources": [
         {
          "id": "PAST-12-037",
          "label": "Set 12 · Q37"
         }
        ]
       },
       {
        "id": "wall-slenderness-effective-height-set15",
        "status": "review",
        "prompt": "The key uses the clear height without the effective-height reduction",
        "html": "<p>As in Set 12, the answer 19 divides the clear height by the thickness; with IS 1905's 0.75H for RCC slabs the ratio would be about 14.</p>",
        "sources": [
         {
          "id": "PAST-15-068",
          "label": "Set 15 · Q68"
         }
        ]
       }
      ],
      "gaps": [
       "Timber beam design and masonry mortars are outlined only briefly, since the past papers do not examine them."
      ]
     }
    });
})();
