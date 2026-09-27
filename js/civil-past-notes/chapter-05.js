(function () {
    "use strict";
    window.CIVIL_PAST_NOTE_TOPICS = window.CIVIL_PAST_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_PAST_NOTE_TOPICS, {
     "ACiE0501": {
      "code": "ACiE0501",
      "questionCount": 18,
      "format": 2,
      "summary": "<p>This subchapter covers the loads a building must be designed for. The past-paper questions test dead and imposed loads and the codes that give them, the Nepal Building Code parts, wind zones of Nepal and the design wind pressure, snow load on roofs, the 100% + 30% rule for earthquake directions, seismic hazard across Nepal and the soil types of NBC 105.</p>",
      "blocks": [
       {
        "id": "dead-and-imposed-loads",
        "title": "Dead and imposed loads, and the codes that give them",
        "html": "<p><em>Dead load</em> is the permanent self-weight of the structure and everything fixed to it: walls, partitions, columns, floors and finishes. <em>Imposed</em> or live load varies in amount and position, such as occupants, students in a classroom and movable furniture.</p><p>In the Indian code IS 875, Part 1 gives dead loads, Part 2 imposed loads, Part 3 wind, Part 4 snow and Part 5 load combinations. The Nepal Building Code has matching parts: NBC 102 unit weights of materials, NBC 103 imposed loads, NBC 104 wind, NBC 105 seismic design and NBC 106 snow.</p>",
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
        "html": "<p>NBC 104 covers wind loads and divides Nepal into two wind zones: a basic wind speed of 47 m/s below about 3000 m elevation and 55 m/s above it. The design wind speed multiplies the basic speed by factors for risk, terrain and height, and topography, \\(k_1\\), \\(k_2\\) and \\(k_3\\).</p><p>The design wind pressure is proportional to the square of the design speed, with the constant 0.6 in SI units, giving N/m<sup>2</sup> for speeds in m/s.</p>",
        "formulas": [
         {
          "label": "Design wind speed and pressure",
          "tex": "V_z = V_b k_1 k_2 k_3, \\qquad p_z = 0.6\\, V_z^2"
         }
        ],
        "example": {
         "title": "Worked example: wind pressure",
         "html": "<p>With \\(V_b = 55\\) m/s and all k factors 1, \\(V_z = 55\\) m/s and \\(p_z = 0.6 \\times 55^2 = 1815\\ \\text{N/m}^2\\).</p>"
        },
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
        "html": "<p>IS 875 Part 4 takes the load of snow as about 2.5 N/m<sup>2</sup> for every millimetre of snow depth on a horizontal surface. On a roof the ground snow load is multiplied by a shape coefficient that depends on the roof slope; the load is reduced for slopes above 10° and neglected beyond about 50°.</p>",
        "formulas": [
         {
          "label": "Roof snow load",
          "tex": "S = \\mu S_0"
         }
        ],
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
        "html": "<p>For a building whose lateral systems are not parallel, the code takes 100% of the design seismic force in one direction together with 30% in the orthogonal direction, then swaps the axes and uses the worse case.</p><p>Western Nepal lies in the central seismic gap, where no great earthquake has released the built-up strain for centuries, so it is regarded as the more susceptible region. NBC 105:2020 classifies sites into four soil types, A rock or stiff, B medium, C soft and D very soft, each with its own spectral shape.</p>",
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
       "Load combinations and the calculation of seismic base shear from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0502": {
      "code": "ACiE0502",
      "questionCount": 33,
      "format": 2,
      "summary": "<p>This subchapter covers the making and testing of concrete. The past-paper questions test aggregate moisture states and bulking, aggregate sizes, grading zones and fineness modulus, soundness, abrasion and impact tests, mixing water and the water–cement ratio, slump and vibration, plasticisers, strength and elasticity relations, creep and crazing, and formwork.</p>",
      "blocks": [
       {
        "id": "aggregate-moisture-and-bulking",
        "title": "Moisture states of aggregate and bulking of sand",
        "html": "<p>Aggregate can be oven dry, air dry, saturated surface dry or wet. Mix design assumes the <em>saturated surface dry</em> (SSD) state, in which the pores are full of water but the surface carries none, so the aggregate neither absorbs mixing water nor adds free water. Site aggregates are corrected to it.</p><p>Damp sand <em>bulks</em>: thin water films around the grains push them apart and the loose volume increases, by up to 20 to 40% at 4 to 6% moisture. That is why sand is batched by weight or corrected for bulking. Coarse aggregate has too little surface per unit volume for this, so its bulking is negligible.</p>",
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
        "html": "<p>Fine aggregate passes the 4.75 mm sieve and is retained on the 75 micron sieve; anything finer is silt and clay. Normal concrete uses coarse aggregate up to about 75 mm; <em>cyclopean</em> or plum concrete embeds much larger stones in mass work.</p><p>IS 383 places sands in grading zones from Zone I, the coarsest, to Zone IV, the finest. The <em>fineness modulus</em> sums the cumulative percentages retained on the standard sieves and divides by 100, so a high value means a coarse sand: about 2.9 to 3.2 for coarse and 2.2 to 2.6 for fine.</p>",
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
        "html": "<p>Each aggregate test measures one property. The <em>soundness test</em>, repeated soaking in sodium or magnesium sulphate and drying, measures resistance to weathering. The Los Angeles <em>abrasion test</em> measures hardness, resistance to wear. The <em>impact test</em> measures toughness and the <em>crushing test</em> strength.</p><p>IS 383 limits the aggregate impact value to 45% for general building concrete and to 30% for wearing surfaces such as road pavements and runways.</p>",
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
        "html": "<p>Water fit for drinking, potable water, is suitable for mixing and curing concrete. It must be free of harmful oils, acids, alkalis, salts and organic matter; acidic, impure or sewage water spoils setting, strength and durability.</p><p>Once there is enough water for workability, extra water only weakens the concrete. By Abrams' law strength falls as the water–cement ratio rises, because the surplus leaves capillary pores behind. The mass of water is the ratio times the cement. RCC roof slabs are normally cast in M20, nominally 1:1.5:3.</p>",
        "formulas": [
         {
          "label": "Water from the water–cement ratio",
          "tex": "W = \\dfrac{w}{c} \\times C"
         }
        ],
        "example": {
         "title": "Worked example: water for a harsh mix",
         "html": "<p>150 kg of aggregate in a harsh mix at w/c 0.6, with an aggregate–cement ratio of about 7.5, needs \\(150/7.5 = 20\\) kg of cement and \\(0.6 \\times 20 = 12\\) kg of water.</p>"
        },
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
        "html": "<p>The <em>slump test</em> measures the consistency, or workability, of fresh concrete: the drop in height, in millimetres, after a 300 mm cone of concrete is lifted. Vibration suits stiff mixes, so for mechanically vibrated concrete the slump is kept to about 5.0 cm; wetter mixes segregate and bleed.</p><p><em>Plasticisers</em> are water reducers: they improve workability, or allow less water for the same workability and so higher strength, and often retard setting. <em>Superplasticisers</em> go further, raising workability, cutting water by 20 to 30% or saving cement. The papers treat flowing mortar for heavy dams as not a plasticiser use.</p>",
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
        "html": "<p>Grade M20 means a characteristic 28-day cube strength of 20 N/mm<sup>2</sup>. Ordinary Portland cement concrete reaches about 65% of that strength at 7 days. IS 456 relates the flexural strength and the elastic modulus to the characteristic strength; direct tensile strength is only about 10% of the compressive strength, which is why steel carries the tension.</p><p>Under a sustained load concrete keeps deforming with time, <em>creep</em>; shrinkage, by contrast, happens without load. Surface shrinkage can leave a network of fine hairline cracks, called <em>crazing</em>.</p>",
        "formulas": [
         {
          "label": "Flexural strength and elastic modulus",
          "tex": "f_{cr} = 0.7\\sqrt{f_{ck}}, \\qquad E_c = 5000\\sqrt{f_{ck}}"
         }
        ],
        "example": {
         "title": "Worked examples: M25 modulus and M20 at 7 days",
         "html": "<p>M25: \\(E_c = 5000\\sqrt{25} = 25000\\) N/mm<sup>2</sup>.</p><p>M20 at 7 days: about \\(0.65 \\times 20 \\approx 13\\) MPa.</p>"
        },
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
        "html": "<p>IS 456 lets the vertical formwork of columns, walls and beam sides be struck after 16 to 24 hours with ordinary Portland cement. Beam and slab soffits stay longer, about 7 days, and their props 14 to 21 days.</p><p>For repeated use steel formwork is preferred: it can be reused a hundred times or more, keeps its shape and gives a smooth finish, so it pays back its higher first cost.</p>",
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
       }
      ],
      "cautions": [],
      "gaps": [
       "Mix design procedures and statistical quality control from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0503": {
      "code": "ACiE0503",
      "questionCount": 31,
      "format": 2,
      "summary": "<p>This subchapter covers the design of reinforced concrete members. The past-paper questions test limit-state basics and the partial safety factor for steel, balanced, under- and over-reinforced sections, why steel suits concrete, steel limits and side-face and shear reinforcement in beams, slab thickness and footing punching shear, cover, development length and hook anchorage, and column rules.</p>",
      "blocks": [
       {
        "id": "limit-state-basics-and-section-types",
        "title": "Limit-state basics and types of section",
        "html": "<p>In limit state design the steel strength is divided by a partial safety factor of 1.15, so its design strength is \\(f_y/1.15 = 0.87f_y\\). Concrete strain is limited to 0.0035 at the extreme fibre in flexure and 0.002 in pure axial compression. Steel works with concrete because the two have almost the same coefficient of thermal expansion, so temperature changes do not break their bond.</p><p>The tension face of every reinforced section cracks early, once concrete's low tensile strength is exceeded. At the ultimate state an under-reinforced section yields its steel first, a balanced one reaches both limits together, and an over-reinforced one crushes the concrete while the steel is still below yield, failing suddenly. A doubly reinforced beam has designed steel in both zones. Simply supported beams are designed chiefly for the bending moment at the centre.</p>",
        "formulas": [
         {
          "label": "Design strength of steel",
          "tex": "f_{yd} = \\dfrac{f_y}{1.15} = 0.87 f_y"
         }
        ],
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
        "html": "<p>IS 456 sets a minimum tension steel, \\(A_s/bd = 0.85/f_y\\), about 0.2% for Fe415, and a maximum of 4% of the gross section for tension and for compression steel. Deep beams also need side-face steel of 0.1% of the web area, split between the two faces.</p><p>Shear causes diagonal tension. Stirrups and bent-up bars control the inclined cracks and prevent brittle shear failure. At the ultimate state shear is carried jointly by the concrete and by the shear reinforcement.</p>",
        "formulas": [
         {
          "label": "Minimum and maximum tension steel",
          "tex": "\\dfrac{A_s}{bd} \\ge \\dfrac{0.85}{f_y}, \\qquad A_s \\le 0.04\\,bD"
         }
        ],
        "example": {
         "title": "Worked examples: minimum and side-face steel",
         "html": "<p>A 250 mm × 400 mm beam in Fe415:</p>\\[A_s = \\dfrac{0.85 \\times 250 \\times 400}{415} \\approx 205\\ \\text{mm}^2\\]<p>A web area of 180 000 mm<sup>2</sup>: side-face steel \\(0.001 \\times 180\\,000 = 180\\) mm<sup>2</sup>.</p>"
        },
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
        "html": "<p>The thickness of a slab is fixed by the bending moment: the concrete must carry the flexural compression, with span-to-depth limits to control deflection; shear is rarely critical. A slab supported on two opposite sides, or with a long-to-short span ratio above 2, carries load in one direction only: a <em>one-way slab</em>.</p><p>Footings follow the slab minimum steel, 0.12% for HYSD bars such as Fe415. Punching, or two-way, shear is checked on a perimeter d/2 from the column faces. The key takes 15 mm as the minimum clear cover for a slab; IS 456:2000 specifies 20 mm nominal for mild exposure, reducible to 15 mm for bars up to 12 mm.</p>",
        "formulas": [
         {
          "label": "Punching-shear area, square column of side a",
          "tex": "b_0 = 4(a + d), \\qquad A = b_0\\, d"
         }
        ],
        "example": {
         "title": "Worked example: punching-shear area",
         "html": "<p>A 500 mm column on a footing with d = 500 mm: the critical square has side 1.0 m, so \\(b_0 = 4\\) m and \\(A = 4 \\times 0.5 = 2.0\\ \\text{m}^2\\).</p>"
        },
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
        "html": "<p>A bar must be embedded far enough for bond to transfer its full stress to the concrete; that embedded length is the <em>development length</em>. In bar notation \\(\\phi\\) stands for the diameter, as in 12\\(\\phi\\) at 150 mm centres.</p><p>Hooks and bends shorten the straight length needed. IS 456 credits a standard U-type, 180°, hook with an anchorage value of 16 bar diameters and a 90° bend with 8.</p>",
        "formulas": [
         {
          "label": "Development length",
          "tex": "L_d = \\dfrac{\\phi\\, \\sigma_s}{4\\tau_{bd}}"
         },
         {
          "label": "Anchorage credit of a U-hook",
          "tex": "16\\phi"
         }
        ],
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
        "html": "<p>Longitudinal steel in a column must lie between 0.8% and 6% of the gross area, with 4% advised in practice where bars are lapped. IS 456 asks for at least 4 bars in a rectangular column and 6 in a circular one, each 12 mm or larger. The nominal cover to column bars is 40 mm, reduced to 25 mm for small columns up to 200 mm with bars up to 12 mm.</p><p>Circular columns are uncommon because rectangular beams are difficult to connect to a round section. The code also caps the load on a circular column at the load allowed on a square column of the same area.</p>",
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
       "The working-stress method, deflection calculations and T-beam design from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0504": {
      "code": "ACiE0504",
      "questionCount": 2,
      "format": 2,
      "summary": "<p>This subchapter covers columns, footings and prestressed concrete. The two past-paper questions both concern prestressed concrete: the concrete strength a prestressed member needs and what the loss of prestress does to it.</p>",
      "blocks": [
       {
        "id": "concrete-for-prestressed-members",
        "title": "Why prestressed members need high-strength concrete",
        "html": "<p>Prestressing puts a beam into compression before any load acts, by tensioning high-strength steel tendons and anchoring them against the concrete. The load then only cancels part of that stored compression, so the section can stay uncracked. The concrete must carry high compressive stresses at transfer and hold the anchorages, so it must be strong: IS 1343 requires at least M30 for post-tensioned and M40 for pre-tensioned members.</p>",
        "formulas": [
         {
          "label": "Stress at a fibre, eccentric prestress plus load",
          "tex": "\\sigma = \\dfrac{P}{A} \\pm \\dfrac{P e\\, y}{I} \\mp \\dfrac{M y}{I}"
         }
        ],
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
        "html": "<p>The force in a tendon falls from its initial value to a lower effective value. Elastic shortening, duct friction and anchorage slip act during tensioning and transfer; creep and shrinkage of the concrete and relaxation of the steel reduce it further with time.</p><p>With less precompression the member cracks at lower loads and loses part of its reserve in flexure, shear and compression, which is why the design allows for these losses.</p>",
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
      "cautions": [],
      "gaps": [
       "RCC column design, isolated and combined footings from the syllabus are not examined under this subchapter in these papers."
      ]
     },
     "ACiE0505": {
      "code": "ACiE0505",
      "questionCount": 18,
      "format": 2,
      "summary": "<p>This subchapter covers the design of steel structures. The past-paper questions test column sections, working stress, shape factors and the load factor, rivet numbers and net plate area, friction-grip bolts and pitch, spot and fillet welds and batten welds, laced and battened columns, web crippling and the principal rafter of a roof truss.</p>",
      "blocks": [
       {
        "id": "sections-and-design-basis",
        "title": "Steel sections, working stress, shape factor and load factor",
        "html": "<p>Rolled sections suit different jobs. Beam sections, ISMB, ISLB and ISWB, are deep and narrow; column sections, ISSC and ISHB, have wide flanges so the stiffness is similar about both axes. In working stress design the permissible, or working, stress is the yield stress divided by a factor of safety.</p><p>Plastic design uses the <em>shape factor</em> \\(S = Z_p/Z_e\\), the plastic over the elastic section modulus: about 1.10 to 1.20 for rolled I-sections, 1.5 for a rectangle, 1.7 for a circle and 2 for a diamond. The load factor is the shape factor times the factor of safety.</p>",
        "formulas": [
         {
          "label": "Shape factor and load factor",
          "tex": "S = \\dfrac{Z_p}{Z_e}, \\qquad LF = S \\times FOS"
         }
        ],
        "example": {
         "title": "Worked example: load factor with increased allowable stress",
         "html": "<p>S = 1.12 and FOS = 1.5; a 20% rise in allowable stress makes the effective FOS \\(1.5/1.2 = 1.25\\), so \\(LF = 1.12 \\times 1.25 = 1.40\\).</p>"
        },
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
        "html": "<p>The strength, or value, of a rivet or bolt is the least of its strengths in shearing, bearing and tearing. Dividing the member load by that value and rounding up gives the number of fasteners. Holes reduce a plate's area: the net area is the gross width less the hole diameters, times the thickness.</p><p>IS 800 sets the minimum pitch, the distance between fastener centres, at 2.5 times the nominal diameter. Where stresses reverse or fatigue matters, high-strength friction grip bolts are used: they clamp the plates so load passes by friction without slip, while black bolts loosen.</p>",
        "formulas": [
         {
          "label": "Number of fasteners and net area",
          "tex": "n = \\dfrac{P}{R_{\\text{min}}}, \\qquad A_{\\text{net}} = (b - n d_h)\\,t"
         }
        ],
        "example": {
         "title": "Worked examples: rivet count and net area",
         "html": "<p>35 t with a least rivet value of 3425 kg: \\(35\\,000/3425 = 10.2\\), so 11 rivets.</p><p>A 400 mm by 10 mm plate with one 18 mm hole: \\((400 - 18) \\times 10 = 3820\\ \\text{mm}^2\\), which is 38.2 cm<sup>2</sup>.</p>"
        },
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
        "html": "<p><em>Spot welding</em> is a resistance weld that joins lapped sheets, one placed below the other, fusing them at spots between electrodes. A fillet weld's strength is taken through its throat, which is shorter than the leg.</p><p>A <em>side fillet weld</em> runs parallel to the load and resists it in shear; an end fillet weld is perpendicular to it. For battens, IS 800 requires the welds at each end of a batten plate to total enough length, with at least one third of it placed at each end.</p>",
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
        "html": "<p>Built-up columns join their components with lacing or battens so they act together. Lacing forms a triangulated web that resists shear well, so a laced column is stronger than a battened one of the same length and end conditions; IS 800 increases the effective length of battened columns by 10%.</p><p><em>Web crippling</em> is local failure of a beam web at the root of the flange under a concentrated load or reaction; bearing stiffeners prevent it. In a roof truss the principal rafter is a compression member, but purlins placed between panel points also bend it, so it is designed for axial compression and bending moment.</p>",
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
      "summary": "<p>This subchapter covers timber and masonry structures. The past-paper questions test the slenderness limit of timber columns, the effective thickness of cavity walls, wall slenderness, the stress increase for eccentric loads, buttresses and stone for retaining walls, the middle-third rule, and NBC 202 for load-bearing masonry.</p>",
      "blocks": [
       {
        "id": "timber-columns",
        "title": "Slenderness of solid timber columns",
        "html": "<p>Timber is strong along the grain and much weaker across it, so the direction of loading is part of every design check. A solid timber column is classed by its slenderness ratio S/d, the unsupported length over the least lateral dimension. IS 883 limits that ratio to 50 for solid columns; slender posts buckle long before the timber is crushed.</p>",
        "formulas": [
         {
          "label": "Slenderness limit for solid timber columns",
          "tex": "\\dfrac{S}{d} \\le 50"
         }
        ],
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
        "html": "<p>For a cavity wall whose two leaves both carry load, IS 1905 takes the effective thickness as two thirds of the sum of the leaf thicknesses; the cavity itself adds nothing. Wall slenderness is the effective height or length over the effective thickness, and the smaller ratio governs.</p><p>When a load is eccentric with an eccentricity ratio above 1/24, the peak stress acts only at the edge, so the permissible compressive stress may be raised by 25%. A long, tall wall is weak laterally; buttresses at intervals stiffen it and shorten its effective length. Gravity retaining walls rely on their own weight, so heavy, dense stone suits them.</p>",
        "formulas": [
         {
          "label": "Cavity wall, both leaves loaded",
          "tex": "t_{ef} = \\dfrac{2}{3}(t_1 + t_2)"
         },
         {
          "label": "Slenderness ratio",
          "tex": "SR = \\dfrac{h_{ef}}{t_{ef}} \\ \\text{or}\\ \\dfrac{l_{ef}}{t_{ef}}, \\text{ the smaller}"
         }
        ],
        "example": {
         "title": "Worked example: wall slenderness",
         "html": "<p>A 200 mm wall 5 m long and 3.8 m high: \\(h/t = 3.8/0.2 = 19\\) and \\(l/t = 5/0.2 = 25\\), so the slenderness ratio is 19.</p>"
        },
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
        "html": "<p>Under combined direct and bending stress, a section has no tension anywhere while the resultant stays within its kern. For a rectangle the kern is the middle third, \\(e \\le b/6\\), which is why masonry walls, piers and dam bases are checked against the middle-third rule. The rule belongs to rectangular sections; a circular section has a middle-quarter kern, \\(e \\le d/8\\).</p>",
        "formulas": [
         {
          "label": "No tension: rectangle and circle",
          "tex": "e \\le \\dfrac{b}{6}, \\qquad e \\le \\dfrac{d}{8}"
         }
        ],
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
        "html": "<p>In the Nepal National Building Code, NBC 202 gives the mandatory rules of thumb, ready-to-use requirements, for load-bearing masonry buildings. NBC 201 covers RC frames with masonry infill, NBC 203 low-strength buildings, NBC 204 earthen buildings and NBC 205 RC buildings without masonry infill; seismic design is in NBC 105 and wind in NBC 104. Continuous bands and connected corners give masonry buildings a coherent load path.</p>",
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
       "Timber beam design, masonry failure modes and mud, lime and cement mortars from the syllabus are not examined in these papers."
      ]
     }
    });
})();
