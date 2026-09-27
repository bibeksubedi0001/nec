(function () {
    "use strict";
    window.CIVIL_PAST_NOTE_TOPICS = window.CIVIL_PAST_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_PAST_NOTE_TOPICS, {
     "ACiE0601": {
      "code": "ACiE0601",
      "questionCount": 34,
      "format": 2,
      "summary": "<p>This subchapter covers where water comes from, how its quality is judged and how much is needed. The past-paper questions test sources of water, colour, turbidity and odour units, pH, alkalinity, hardness, dissolved oxygen and nitrate, coliform tests and algae, pandemic and water-washed diseases, population forecasting, per capita demand, peak factor and fire demand formulas.</p>",
      "blocks": [
       {
        "id": "sources-of-water",
        "title": "Surface and underground sources of water",
        "html": "<p>Water sources are either surface sources, streams, rivers, lakes and reservoirs, or underground sources, wells, springs and infiltration galleries that draw on groundwater. Surface water collects runoff and is easily polluted, while groundwater has been filtered by the soil and rock it passed through.</p><p>A spring along a hill slope is therefore among the cleanest sources: its water has percolated through the ground and carries little suspended or organic matter. Even so, a clear well or spring sample does not prove that water is safe to drink.</p>",
        "points": [
         {
          "html": "Water from a spring along hill slopes contains few impurities, having been filtered by the ground.",
          "sources": [
           {
            "id": "PAST-04-002",
            "label": "Set 4 · Q2"
           }
          ]
         },
         {
          "html": "Streams are a surface source; wells, springs and infiltration galleries tap groundwater.",
          "sources": [
           {
            "id": "PAST-15-050",
            "label": "Set 15 · Q50"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-002",
          "label": "Set 4 · Q2"
         },
         {
          "id": "PAST-15-050",
          "label": "Set 15 · Q50"
         }
        ]
       },
       {
        "id": "colour-turbidity-and-odour",
        "title": "Physical quality: colour, turbidity and odour",
        "html": "<p><em>Colour</em> is measured with a tintometer, matching the sample against platinum–cobalt standards; one true colour unit is the colour of 1 mg of platinum cobalt in 1 L of distilled water. <em>Turbidity</em>, the cloudiness caused by suspended particles, was traditionally given in ppm on the silica scale and is now read with a nephelometer in NTU.</p><p><em>Odour</em> is reported as the threshold odour number, TON: the dilution at which the odour can just be detected, the total volume over the sample volume.</p>",
        "formulas": [
         {
          "label": "Threshold odour number",
          "tex": "TON = \\dfrac{A + B}{A}"
         }
        ],
        "example": {
         "title": "Worked example: threshold odour number",
         "html": "<p>40 mL of sample diluted to 240 mL of mixture gives \\(TON = 240/40 = 6\\).</p>"
        },
        "points": [
         {
          "html": "The tintometer method is used to measure the colour of water.",
          "sources": [
           {
            "id": "PAST-04-058",
            "label": "Set 4 · Q58"
           }
          ]
         },
         {
          "html": "1 TCU is the colour produced by 1 mg of platinum cobalt in 1 L of distilled water.",
          "sources": [
           {
            "id": "PAST-06-041",
            "label": "Set 6 · Q41"
           }
          ]
         },
         {
          "html": "Turbidity of water is conventionally expressed in ppm on the silica scale.",
          "sources": [
           {
            "id": "PAST-08-023",
            "label": "Set 8 · Q23"
           }
          ]
         },
         {
          "html": "NTU, nephelometric turbidity units, measure turbidity.",
          "sources": [
           {
            "id": "PAST-11-038",
            "label": "Set 11 · Q38"
           }
          ]
         },
         {
          "html": "Odour is measured as TON, the threshold odour number.",
          "sources": [
           {
            "id": "PAST-11-031",
            "label": "Set 11 · Q31"
           }
          ]
         },
         {
          "html": "Diluting 40 mL of sewage to 240 mL of mixture gives a TON of 6.",
          "sources": [
           {
            "id": "PAST-12-080",
            "label": "Set 12 · Q80"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-058",
          "label": "Set 4 · Q58"
         },
         {
          "id": "PAST-06-041",
          "label": "Set 6 · Q41"
         },
         {
          "id": "PAST-08-023",
          "label": "Set 8 · Q23"
         },
         {
          "id": "PAST-11-038",
          "label": "Set 11 · Q38"
         },
         {
          "id": "PAST-11-031",
          "label": "Set 11 · Q31"
         },
         {
          "id": "PAST-12-080",
          "label": "Set 12 · Q80"
         }
        ]
       },
       {
        "id": "chemical-quality",
        "title": "Chemical quality: pH, alkalinity, hardness, oxygen and nitrate",
        "html": "<p>Drinking water should have a pH between 6.5 and 8.5; on the 0 to 14 scale, 7 is neutral and 14 the most alkaline. At pH 7 alkalinity is almost all bicarbonate, and it is reported as CaCO<sub>3</sub> by multiplying by the ratio of equivalent weights, 50/61. Hardness due to calcium bicarbonate is temporary and boiling removes it; sulphates and nitrates give permanent hardness.</p><p>Fresh water saturated with oxygen at 20°C holds about 9.1 mg/L of dissolved oxygen, and aquatic life cannot survive below about 4 mg/L. Excess nitrate, above 45 mg/L, causes blue baby syndrome, methaemoglobinaemia, in infants.</p>",
        "formulas": [
         {
          "label": "Bicarbonate alkalinity as CaCO3",
          "tex": "\\text{alkalinity} = [\\text{HCO}_3^-] \\times \\dfrac{50}{61}"
         }
        ],
        "example": {
         "title": "Worked example: alkalinity",
         "html": "<p>122 mg/L of bicarbonate at pH 7.0: \\(122 \\times 50/61 = 100\\) mg/L as CaCO<sub>3</sub>.</p>"
        },
        "points": [
         {
          "html": "The permissible pH for public water supply ranges between 6.5 to 8.5.",
          "sources": [
           {
            "id": "PAST-10-016",
            "label": "Set 10 · Q16"
           }
          ]
         },
         {
          "html": "Alkalinity is greatest at pH = 14, the alkaline end of the scale.",
          "sources": [
           {
            "id": "PAST-14-021",
            "label": "Set 14 · Q21"
           }
          ]
         },
         {
          "html": "Groundwater at pH 7.0 with 122 mg/L of bicarbonate has an alkalinity of 100 mg/L as CaCO<sub>3</sub>.",
          "sources": [
           {
            "id": "PAST-14-062",
            "label": "Set 14 · Q62"
           }
          ]
         },
         {
          "html": "Boiling removes hardness due to calcium bicarbonate, the temporary hardness.",
          "sources": [
           {
            "id": "PAST-07-019",
            "label": "Set 7 · Q19"
           }
          ]
         },
         {
          "html": "Fresh water at 20°C and 760 mm of mercury holds about 9.08 mg/l of dissolved oxygen at saturation.",
          "sources": [
           {
            "id": "PAST-08-013",
            "label": "Set 8 · Q13"
           }
          ]
         },
         {
          "html": "Aquatic life cannot survive below a DO of about 4 mg/L.",
          "sources": [
           {
            "id": "PAST-12-020",
            "label": "Set 12 · Q20"
           }
          ]
         },
         {
          "html": "Blue baby syndrome is caused by nitrate in drinking water.",
          "sources": [
           {
            "id": "PAST-05-006",
            "label": "Set 5 · Q6"
           }
          ]
         },
         {
          "html": "Excess nitrate, not iron or carbon monoxide, leads to blue baby syndrome.",
          "sources": [
           {
            "id": "PAST-17-011",
            "label": "Set 17 · Q11"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-10-016",
          "label": "Set 10 · Q16"
         },
         {
          "id": "PAST-14-021",
          "label": "Set 14 · Q21"
         },
         {
          "id": "PAST-14-062",
          "label": "Set 14 · Q62"
         },
         {
          "id": "PAST-07-019",
          "label": "Set 7 · Q19"
         },
         {
          "id": "PAST-08-013",
          "label": "Set 8 · Q13"
         },
         {
          "id": "PAST-12-020",
          "label": "Set 12 · Q20"
         },
         {
          "id": "PAST-05-006",
          "label": "Set 5 · Q6"
         },
         {
          "id": "PAST-17-011",
          "label": "Set 17 · Q11"
         }
        ]
       },
       {
        "id": "biological-quality",
        "title": "Biological quality: pathogens, coliform tests and algae",
        "html": "<p>Disease-causing micro-organisms are called <em>pathogens</em>. Testing for each is impractical, so water is tested for <em>E. coli</em> and other coliforms, which live in the intestines of warm-blooded animals: finding them confirms faecal contamination. The membrane filter technique counts coliform colonies directly within about a day and is more precise than the statistical multiple-tube, MPN, method.</p><p>Algae photosynthesise by day and fill with oxygen bubbles, so they float in the daytime; at night respiration uses the gas and they sink.</p>",
        "points": [
         {
          "html": "Harmful, disease-causing bacteria are called pathogens.",
          "sources": [
           {
            "id": "PAST-04-039",
            "label": "Set 4 · Q39"
           }
          ]
         },
         {
          "html": "The membrane filter technique is the better test to identify coliforms.",
          "sources": [
           {
            "id": "PAST-04-059",
            "label": "Set 4 · Q59"
           }
          ]
         },
         {
          "html": "The E. coli test is done to confirm the water has been contaminated by faeces.",
          "sources": [
           {
            "id": "PAST-13-004",
            "label": "Set 13 · Q4"
           }
          ]
         },
         {
          "html": "Algae in a pond float in the water during day time and sink during night time.",
          "sources": [
           {
            "id": "PAST-11-016",
            "label": "Set 11 · Q16"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-039",
          "label": "Set 4 · Q39"
         },
         {
          "id": "PAST-04-059",
          "label": "Set 4 · Q59"
         },
         {
          "id": "PAST-13-004",
          "label": "Set 13 · Q4"
         },
         {
          "id": "PAST-11-016",
          "label": "Set 11 · Q16"
         }
        ]
       },
       {
        "id": "water-related-diseases",
        "title": "How water-related diseases spread",
        "html": "<p>Diseases are described by their extent. An <em>endemic</em> disease is always present in an area, an <em>epidemic</em> is a sudden outbreak in a community or region, and a <em>pandemic</em> is an epidemic that spreads across countries and continents.</p><p>They are also grouped by how water carries them. Waterborne diseases such as cholera are caught by drinking contaminated water and need clean water. Water-washed diseases such as trachoma spread through poor hygiene, so they are controlled mainly by increasing the quantity of water available for washing.</p>",
        "points": [
         {
          "html": "A disease that is widespread and can reach globally is a pandemic.",
          "sources": [
           {
            "id": "PAST-05-022",
            "label": "Set 5 · Q22"
           }
          ]
         },
         {
          "html": "A disease spread worldwide is called a pandemic; an epidemic stays regional.",
          "sources": [
           {
            "id": "PAST-17-015",
            "label": "Set 17 · Q15"
           }
          ]
         },
         {
          "html": "Trachoma, a water-washed disease, is avoided by increasing water supply for washing.",
          "sources": [
           {
            "id": "PAST-06-018",
            "label": "Set 6 · Q18"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-022",
          "label": "Set 5 · Q22"
         },
         {
          "id": "PAST-17-015",
          "label": "Set 17 · Q15"
         },
         {
          "id": "PAST-06-018",
          "label": "Set 6 · Q18"
         }
        ]
       },
       {
        "id": "population-forecasting",
        "title": "Population forecasting",
        "html": "<p>Water supply is designed for the population at the end of the design period, found from demography, the statistical study of population. The <em>arithmetical increase</em> method adds a constant amount each decade and suits large, old, well-developed towns. The <em>geometrical increase</em> method applies a constant percentage rate, compounded, and suits young, rapidly growing cities.</p>",
        "formulas": [
         {
          "label": "Arithmetical and geometrical increase",
          "tex": "P_n = P_0 + n\\bar{x}, \\qquad P_n = P_0 (1 + r)^n"
         }
        ],
        "example": {
         "title": "Worked example: compound growth",
         "html": "<p>A birth rate of 10% and a death rate of 4% give a net 6% a year:</p>\\[P_2 = 1\\,000\\,000 \\times 1.06^2 = 1\\,123\\,600\\]"
        },
        "points": [
         {
          "html": "Demography is the study of population.",
          "sources": [
           {
            "id": "PAST-08-044",
            "label": "Set 8 · Q44"
           }
          ]
         },
         {
          "html": "The arithmetical increase method is used for the water supply of a large and old town.",
          "sources": [
           {
            "id": "PAST-09-051",
            "label": "Set 9 · Q51"
           }
          ]
         },
         {
          "html": "Large, old cities are forecast by the arithmetical increase method.",
          "sources": [
           {
            "id": "PAST-18-067",
            "label": "Set 18 · Q67"
           }
          ]
         },
         {
          "html": "The geometrical increase method is preferred for a rapidly growing population.",
          "sources": [
           {
            "id": "PAST-12-021",
            "label": "Set 12 · Q21"
           }
          ]
         },
         {
          "html": "For sound, rapidly increasing cities the geometrical increase method is accurate.",
          "sources": [
           {
            "id": "PAST-15-036",
            "label": "Set 15 · Q36"
           }
          ]
         },
         {
          "html": "A population of 1000000 growing at a net 6% a year reaches 1123600 after 2 years.",
          "sources": [
           {
            "id": "PAST-17-080",
            "label": "Set 17 · Q80"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-08-044",
          "label": "Set 8 · Q44"
         },
         {
          "id": "PAST-09-051",
          "label": "Set 9 · Q51"
         },
         {
          "id": "PAST-18-067",
          "label": "Set 18 · Q67"
         },
         {
          "id": "PAST-12-021",
          "label": "Set 12 · Q21"
         },
         {
          "id": "PAST-15-036",
          "label": "Set 15 · Q36"
         },
         {
          "id": "PAST-17-080",
          "label": "Set 17 · Q80"
         }
        ]
       },
       {
        "id": "water-and-fire-demand",
        "title": "Per capita demand, peak factor and fire demand",
        "html": "<p>Per capita demand is expressed in litres per person per day, lpcd: the average daily consumption divided by the population. Demand varies through the day, so pipes are designed for a peak flow, the average times a <em>peak factor</em>.</p><p>Fire demand is found from empirical formulas in terms of the population P in thousands. Kuichling's formula gives \\(3182\\sqrt{P}\\) and Buston's gives \\(5663\\sqrt{P}\\) litres per minute.</p>",
        "formulas": [
         {
          "label": "Kuichling and Buston (P in thousands, L/min)",
          "tex": "Q = 3182\\sqrt{P}, \\qquad Q = 5663\\sqrt{P}"
         },
         {
          "label": "Peak factor",
          "tex": "PF = \\dfrac{Q_{\\text{peak}}}{Q_{\\text{average}}}"
         }
        ],
        "example": {
         "title": "Worked examples: peak factor and fire demand",
         "html": "<p>40 people at 105 lpcd average \\(40 \\times 105/24 = 175\\) L/h, so a 350 L/h peak gives PF = 2.</p><p>For 1 lakh people, P = 100: Kuichling gives 31 820 L/min, about 530 L/s; Buston gives 56 630 L/min.</p>"
        },
        "points": [
         {
          "html": "Per capita demand of water is calculated in litres per person per day.",
          "sources": [
           {
            "id": "PAST-12-058",
            "label": "Set 12 · Q58"
           }
          ]
         },
         {
          "html": "40 people using 105 lpcd with a peak flow of 350 L/h give a peak factor of 2.",
          "sources": [
           {
            "id": "PAST-15-072",
            "label": "Set 15 · Q72"
           }
          ]
         },
         {
          "html": "Kuchling's formula gives a fire demand of about 530 lit/sec for 1 lakh people.",
          "sources": [
           {
            "id": "PAST-04-070",
            "label": "Set 4 · Q70"
           }
          ]
         },
         {
          "html": "Kuichling's formula gives 31820 L/min of fire demand for a population of 1 lakh.",
          "sources": [
           {
            "id": "PAST-18-020",
            "label": "Set 18 · Q20"
           }
          ]
         },
         {
          "html": "Buston's formula gives a fire demand of 56630 l/min for a city of 1 lakh.",
          "sources": [
           {
            "id": "PAST-07-070",
            "label": "Set 7 · Q70"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-12-058",
          "label": "Set 12 · Q58"
         },
         {
          "id": "PAST-15-072",
          "label": "Set 15 · Q72"
         },
         {
          "id": "PAST-04-070",
          "label": "Set 4 · Q70"
         },
         {
          "id": "PAST-18-020",
          "label": "Set 18 · Q20"
         },
         {
          "id": "PAST-07-070",
          "label": "Set 7 · Q70"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Threshold odour number",
        "tex": "TON = \\dfrac{A + B}{A}"
       },
       {
        "label": "Alkalinity from bicarbonate",
        "tex": "[\\text{HCO}_3^-] \\times \\dfrac{50}{61}"
       },
       {
        "label": "Arithmetical increase",
        "tex": "P_n = P_0 + n\\bar{x}"
       },
       {
        "label": "Geometrical increase",
        "tex": "P_n = P_0 (1 + r)^n"
       },
       {
        "label": "Kuichling's fire demand",
        "tex": "Q = 3182\\sqrt{P}"
       },
       {
        "label": "Buston's fire demand",
        "tex": "Q = 5663\\sqrt{P}"
       },
       {
        "label": "Peak factor",
        "tex": "PF = \\dfrac{Q_{\\text{peak}}}{Q_{\\text{average}}}"
       }
      ],
      "cautions": [
       {
        "id": "pandemic-key",
        "status": "corrected",
        "prompt": "The published key letter does not point to pandemic",
        "html": "<p>A disease that spreads across countries and continents is a pandemic. An epidemic is a sudden outbreak within one community or region, and an endemic disease is always present in an area.</p>",
        "sources": [
         {
          "id": "PAST-05-022",
          "label": "Set 5 · Q22"
         }
        ]
       },
       {
        "id": "trachoma-key",
        "status": "corrected",
        "prompt": "The published key picks providing clean water",
        "html": "<p>Trachoma is a water-washed disease, spread by poor face and hand hygiene. It is controlled mainly by increasing the quantity of water available for washing, not by improving its quality.</p>",
        "sources": [
         {
          "id": "PAST-06-018",
          "label": "Set 6 · Q18"
         }
        ]
       },
       {
        "id": "population-method-duplicate-options",
        "status": "review",
        "prompt": "Two options name the same method",
        "html": "<p>Arithmetic and arithmetical increase are the same method; the key gives the second printing. Large, old cities grow by a roughly constant amount each decade, which this method models.</p>",
        "sources": [
         {
          "id": "PAST-18-067",
          "label": "Set 18 · Q67"
         }
        ]
       }
      ],
      "gaps": [
       "Selection of sources, colloidal impurities and drinking-water standard tables from the syllabus are only touched on in these papers."
      ]
     },
     "ACiE0602": {
      "code": "ACiE0602",
      "questionCount": 13,
      "format": 2,
      "summary": "<p>This subchapter covers how water is drawn from a source and delivered. The past-paper questions test submerged intakes and intake siting, wet and dry intake towers, pipe materials under internal and external pressure, elbows, expansion joints and altitude valves, Lea's economic pipe diameter, dead-end distribution and the breakdown reserve in a service reservoir.</p>",
      "blocks": [
       {
        "id": "intakes",
        "title": "Intakes and intake towers",
        "html": "<p>An intake draws water from a river, lake or reservoir. A <em>submerged intake</em> sits on the bottom of the river or lake with its inlet always below the water, which suits small supplies from sources that never run shallow. An intake should be sited away from navigation channels, a hazard to boats, and from the main natural flow channel, with its floods, debris and shifting currents.</p><p>Intake towers let water be drawn from a chosen level. A wet tower fills with water through its ports, while a dry tower stays empty inside, with water drawn straight into the conduit through gated ports. The dry tower must resist buoyancy and the full outside water pressure, so it is heavier than a wet tower, not lighter.</p>",
        "points": [
         {
          "html": "A submerged intake is located at the bottom of the river or lake.",
          "sources": [
           {
            "id": "PAST-09-034",
            "label": "Set 9 · Q34"
           }
          ]
         },
         {
          "html": "An intake is poorly placed in both a navigation channel and the main natural channel.",
          "sources": [
           {
            "id": "PAST-12-019",
            "label": "Set 12 · Q19"
           }
          ]
         },
         {
          "html": "The incorrect statement is that dry intake towers are lighter in construction than wet intake towers; they are heavier.",
          "sources": [
           {
            "id": "PAST-14-079",
            "label": "Set 14 · Q79"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-09-034",
          "label": "Set 9 · Q34"
         },
         {
          "id": "PAST-12-019",
          "label": "Set 12 · Q19"
         },
         {
          "id": "PAST-14-079",
          "label": "Set 14 · Q79"
         }
        ]
       },
       {
        "id": "pipes-joints-fittings-and-valves",
        "title": "Pipe materials, fittings, joints and valves",
        "html": "<p>Pipe materials differ in how they carry pressure. Steel has high tensile strength, so steel pipes resist high internal pressure, but their thin walls can buckle under external loads or a vacuum; cast iron and concrete pipes are the reverse.</p><p>Fittings are named by what they do: an <em>elbow</em> turns the run, commonly through 90°, a tee adds a branch, a reducer joins two sizes and a plug closes an end. Exposed mains need <em>expansion joints</em> to absorb movement with temperature. An <em>altitude valve</em> on the inlet of an elevated tank or standpipe shuts when the tank is full and reopens as the level falls.</p>",
        "formulas": [
         {
          "label": "Free thermal movement of a pipe",
          "tex": "\\Delta L = \\alpha L\\, \\Delta T"
         }
        ],
        "points": [
         {
          "html": "Steel pipe resists internal stress well but is weak when stressed from outside.",
          "sources": [
           {
            "id": "PAST-06-039",
            "label": "Set 6 · Q39"
           }
          ]
         },
         {
          "html": "A steel pipe is strong against internal pressure but weak against external loads.",
          "sources": [
           {
            "id": "PAST-R2083-026",
            "label": "2083 recall · Q26"
           }
          ]
         },
         {
          "html": "An elbow provides a 90° deviation in a pipework system.",
          "sources": [
           {
            "id": "PAST-07-028",
            "label": "Set 7 · Q28"
           }
          ]
         },
         {
          "html": "An expansion joint is used where a pipe expands and contracts with temperature.",
          "sources": [
           {
            "id": "PAST-15-003",
            "label": "Set 15 · Q3"
           }
          ]
         },
         {
          "html": "An altitude valve supplies water to elevated tanks or standpipes and shuts when they are full.",
          "sources": [
           {
            "id": "PAST-04-008",
            "label": "Set 4 · Q8"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-039",
          "label": "Set 6 · Q39"
         },
         {
          "id": "PAST-R2083-026",
          "label": "2083 recall · Q26"
         },
         {
          "id": "PAST-07-028",
          "label": "Set 7 · Q28"
         },
         {
          "id": "PAST-15-003",
          "label": "Set 15 · Q3"
         },
         {
          "id": "PAST-04-008",
          "label": "Set 4 · Q8"
         }
        ]
       },
       {
        "id": "economic-pipe-diameter",
        "title": "Economic diameter of a pumping main",
        "html": "<p>A larger pumping main costs more to lay but less to pump through, because friction losses fall. The economic diameter balances the two. Lea's empirical formula gives it from the discharge Q in cumecs, with a coefficient between 0.97 and 1.22; the upper value is used in exam problems.</p>",
        "formulas": [
         {
          "label": "Lea's formula (Q in m3/s, D in m)",
          "tex": "D = 1.22\\sqrt{Q}"
         }
        ],
        "example": {
         "title": "Worked example: economic diameter",
         "html": "<p>Q = 0.16 cumecs, so \\(\\sqrt{Q} = 0.4\\) and \\(D = 1.22 \\times 0.4 = 0.488\\) m.</p>"
        },
        "points": [
         {
          "html": "A pump discharge of 0.16 cumecs gives an economic diameter of about 0.480 m, the nearest option.",
          "sources": [
           {
            "id": "PAST-10-064",
            "label": "Set 10 · Q64"
           }
          ]
         },
         {
          "html": "For 0.16 cumecs, Lea's formula gives an economic diameter of 0.488 m.",
          "sources": [
           {
            "id": "PAST-17-038",
            "label": "Set 17 · Q38"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-10-064",
          "label": "Set 10 · Q64"
         },
         {
          "id": "PAST-17-038",
          "label": "Set 17 · Q38"
         }
        ]
       },
       {
        "id": "distribution-systems-and-storage",
        "title": "Distribution layouts and service storage",
        "html": "<p>The <em>dead-end</em> or tree system runs mains along the existing lanes and ends them in branches, so it suits irregularly developed old towns and is the simplest to design. Its drawbacks are low pressure at the ends when extended, stagnant water that loses its chlorine residual, and areas cut off during repairs. Planned towns use gridiron or ring systems, whose loops feed each point from more than one side.</p><p>A service reservoir holds balancing storage, fire reserve and a breakdown reserve for pump failure or repairs; the breakdown reserve is generally not more than 25% of the total storage.</p>",
        "points": [
         {
          "html": "The dead end system is used in an irregularly developed old city.",
          "sources": [
           {
            "id": "PAST-10-054",
            "label": "Set 10 · Q54"
           }
          ]
         },
         {
          "html": "Being cumbersome in terms of design is not a drawback of the dead-end system; it is the simplest to design.",
          "sources": [
           {
            "id": "PAST-08-038",
            "label": "Set 8 · Q38"
           }
          ]
         },
         {
          "html": "The breakdown reserve is generally not more than 25% of the total storage.",
          "sources": [
           {
            "id": "PAST-05-040",
            "label": "Set 5 · Q40"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-10-054",
          "label": "Set 10 · Q54"
         },
         {
          "id": "PAST-08-038",
          "label": "Set 8 · Q38"
         },
         {
          "id": "PAST-05-040",
          "label": "Set 5 · Q40"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Lea's economic diameter",
        "tex": "D = 1.22\\sqrt{Q}"
       },
       {
        "label": "Thermal movement",
        "tex": "\\Delta L = \\alpha L\\, \\Delta T"
       }
      ],
      "cautions": [
       {
        "id": "dead-end-stem-reworded",
        "status": "review",
        "prompt": "The stem is reworded because the paper's own wording makes three options correct",
        "html": "<p>The paper asks why the dead-end system is not favoured, yet three options are real drawbacks and the key is the fourth. The stem here asks which is not a reason: the dead-end system is in fact the simplest to design.</p>",
        "sources": [
         {
          "id": "PAST-08-038",
          "label": "Set 8 · Q38"
         }
        ]
       },
       {
        "id": "economic-diameter-rounding",
        "status": "review",
        "prompt": "The listed 0.480 m is the nearest option, not the exact value",
        "html": "<p>Lea's formula gives \\(1.22\\sqrt{0.16} = 0.488\\) m. Set 10 lists 0.480 m as the nearest option; Set 17 lists 0.488 m exactly.</p>",
        "sources": [
         {
          "id": "PAST-10-064",
          "label": "Set 10 · Q64"
         }
        ]
       }
      ],
      "gaps": [
       "Break-pressure tanks, reservoir capacity calculations and looped network design from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0603": {
      "code": "ACiE0603",
      "questionCount": 22,
      "format": 2,
      "summary": "<p>This subchapter covers how raw water is made safe. The past-paper questions test alum and what spoils flocculation, how plan area governs sedimentation and the overflow rate of plain tanks, slow and rapid sand filters, chlorination with its pH effects, dose and demand, softening by zeolite, lime–soda and ion exchange, and algae control by copper sulphate.</p>",
      "blocks": [
       {
        "id": "coagulation-and-flocculation",
        "title": "Coagulation and flocculation",
        "html": "<p>Colloidal particles are too small and too stable to settle alone. A coagulant neutralises their charge so they stick together, and slow stirring, flocculation, grows them into settleable flocs. The most common coagulant is alum, hydrated aluminium sulphate, Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>·18H<sub>2</sub>O.</p><p>Surfactants, the active part of detergents, coat particles, cause foaming and greasy films and hinder floc formation.</p>",
        "points": [
         {
          "html": "Alum is chemically aluminium sulphate, the usual coagulant.",
          "sources": [
           {
            "id": "PAST-05-055",
            "label": "Set 5 · Q55"
           }
          ]
         },
         {
          "html": "A surfactant causes greasing in flocculation and hinders floc formation.",
          "sources": [
           {
            "id": "PAST-08-040",
            "label": "Set 8 · Q40"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-055",
          "label": "Set 5 · Q55"
         },
         {
          "id": "PAST-08-040",
          "label": "Set 8 · Q40"
         }
        ]
       },
       {
        "id": "sedimentation",
        "title": "Sedimentation and the surface overflow rate",
        "html": "<p>In an ideal settling tank a particle is removed if it can fall through the depth before the water carries it out. That depends on the <em>surface overflow rate</em>, the discharge per unit plan area, and not on the depth: a deeper tank gives more time but also more distance to fall. So, for a given discharge, increasing the plan area raises the efficiency.</p><p>Plain sedimentation tanks, without coagulation, are designed for about 12000 to 18000 litres per day per square metre; tanks after coagulation take higher rates.</p>",
        "formulas": [
         {
          "label": "Overflow rate and detention time",
          "tex": "SOR = \\dfrac{Q}{A}, \\qquad t = \\dfrac{V}{Q}"
         }
        ],
        "points": [
         {
          "html": "Increasing the area of the basin raises sedimentation efficiency at a given discharge.",
          "sources": [
           {
            "id": "PAST-10-003",
            "label": "Set 10 · Q3"
           },
           {
            "id": "PAST-15-038",
            "label": "Set 15 · Q38"
           }
          ]
         },
         {
          "html": "Increasing the surface area of the tank lowers the overflow rate, so more particles settle.",
          "sources": [
           {
            "id": "PAST-11-050",
            "label": "Set 11 · Q50"
           }
          ]
         },
         {
          "html": "The overflow rate of a plain sedimentation tank is 12000 to 18000 lit/day/m<sup>2</sup>.",
          "sources": [
           {
            "id": "PAST-18-006",
            "label": "Set 18 · Q6"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-10-003",
          "label": "Set 10 · Q3"
         },
         {
          "id": "PAST-15-038",
          "label": "Set 15 · Q38"
         },
         {
          "id": "PAST-11-050",
          "label": "Set 11 · Q50"
         },
         {
          "id": "PAST-18-006",
          "label": "Set 18 · Q6"
         }
        ]
       },
       {
        "id": "filtration",
        "title": "Slow and rapid sand filters",
        "html": "<p>A <em>slow sand filter</em> has about 90 to 110 cm of fine sand over 30 to 75 cm of graded gravel. It works mainly through the biological layer that forms on the sand surface and filters only about 100 to 200 litres per hour per square metre.</p><p>A <em>rapid sand filter</em> uses coarser sand after coagulation and settling, and is cleaned by backwashing. It works at about 3000 to 6000 litres per hour per square metre, roughly 30 times as fast.</p>",
        "points": [
         {
          "html": "The filter media of a slow sand filter is 90 to 110 cm thick.",
          "sources": [
           {
            "id": "PAST-06-017",
            "label": "Set 6 · Q17"
           }
          ]
         },
         {
          "html": "A rapid sand filter runs at 3000 to 6000 liter/hr/m<sup>2</sup>.",
          "sources": [
           {
            "id": "PAST-11-071",
            "label": "Set 11 · Q71"
           }
          ]
         },
         {
          "html": "The rate of filtration of a rapid sand filter is 3000 - 6000 l/hr/m<sup>2</sup>.",
          "sources": [
           {
            "id": "PAST-12-022",
            "label": "Set 12 · Q22"
           }
          ]
         },
         {
          "html": "Rapid sand filters work at 3000-6000 litres per hour per square metre.",
          "sources": [
           {
            "id": "PAST-17-045",
            "label": "Set 17 · Q45"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-017",
          "label": "Set 6 · Q17"
         },
         {
          "id": "PAST-11-071",
          "label": "Set 11 · Q71"
         },
         {
          "id": "PAST-12-022",
          "label": "Set 12 · Q22"
         },
         {
          "id": "PAST-17-045",
          "label": "Set 17 · Q45"
         }
        ]
       },
       {
        "id": "chlorination",
        "title": "Chlorination: what it does, pH and dosage",
        "html": "<p>Chlorine kills bacteria and oxidises ammonia, organic matter and ferrous iron; those reactions make up the chlorine demand. It does not remove dissolved oxygen. Hypochlorous acid, HOCl, is about 80 times as effective as the hypochlorite ion and dissociates as the pH rises, so chlorine's efficiency decreases with increasing pH.</p><p>Bleaching powder, calcium hypochlorite, gives alkaline products and raises the pH; chlorine gas forms acid and lowers it. The dose is the mass of chlorine per volume treated, and the demand is the dose less the residual left after contact.</p>",
        "formulas": [
         {
          "label": "Chlorine demand",
          "tex": "\\text{demand} = \\text{dose} - \\text{residual}"
         }
        ],
        "example": {
         "title": "Worked example: dose and demand",
         "html": "<p>9 kg/day into 25 000 m<sup>3</sup>/day:</p>\\[\\text{dose} = \\dfrac{9 \\times 10^6\\ \\text{mg}}{25 \\times 10^6\\ \\text{L}} = 0.36\\ \\text{mg/L}\\]<p>With 0.2 mg/L residual, demand = 0.16 mg/L.</p>"
        },
        "points": [
         {
          "html": "Chlorine in water does not reduce dissolved oxygen; it reacts with ammonia, organic matter and iron.",
          "sources": [
           {
            "id": "PAST-05-037",
            "label": "Set 5 · Q37"
           }
          ]
         },
         {
          "html": "Dissolved oxygen (DO) is not affected by chlorination.",
          "sources": [
           {
            "id": "PAST-13-031",
            "label": "Set 13 · Q31"
           }
          ]
         },
         {
          "html": "Chlorination does not decrease the dissolved oxygen of water.",
          "sources": [
           {
            "id": "PAST-13-057",
            "label": "Set 13 · Q57"
           }
          ]
         },
         {
          "html": "The efficiency of chlorine as a disinfectant decreases with pH increasing.",
          "sources": [
           {
            "id": "PAST-05-075",
            "label": "Set 5 · Q75"
           }
          ]
         },
         {
          "html": "Adding bleaching powder increases the pH of water.",
          "sources": [
           {
            "id": "PAST-09-017",
            "label": "Set 9 · Q17"
           }
          ]
         },
         {
          "html": "Water dosed with bleaching powder shows a pH value that increases.",
          "sources": [
           {
            "id": "PAST-16-007",
            "label": "Set 16 · Q7"
           }
          ]
         },
         {
          "html": "9 kg/day of chlorine in 25000 m<sup>3</sup>/day with 0.2 mg/l residual gives a dose of 0.36 mg/l and a demand of 0.16 mg/l.",
          "sources": [
           {
            "id": "PAST-16-046",
            "label": "Set 16 · Q46"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-037",
          "label": "Set 5 · Q37"
         },
         {
          "id": "PAST-13-031",
          "label": "Set 13 · Q31"
         },
         {
          "id": "PAST-13-057",
          "label": "Set 13 · Q57"
         },
         {
          "id": "PAST-05-075",
          "label": "Set 5 · Q75"
         },
         {
          "id": "PAST-09-017",
          "label": "Set 9 · Q17"
         },
         {
          "id": "PAST-16-007",
          "label": "Set 16 · Q7"
         },
         {
          "id": "PAST-16-046",
          "label": "Set 16 · Q46"
         }
        ]
       },
       {
        "id": "softening-and-algae-control",
        "title": "Softening and control of algae",
        "html": "<p>Boiling removes only temporary, bicarbonate hardness. Permanent hardness from sulphates and chlorides needs the lime–soda process or ion exchange. In base exchange, a sodium zeolite such as permutit swaps its sodium for the calcium and magnesium in the water. When exhausted, it is regenerated with a brine of about 10% sodium chloride, which restores the sodium form and washes out the calcium and magnesium as chlorides.</p><p>Algae in reservoirs and ponds are controlled with copper sulphate, about 0.3 to 0.5 mg/L, often dragged through the water in gunny bags.</p>",
        "points": [
         {
          "html": "Exhausted zeolite is regenerated by flushing with 10% sodium chloride solution.",
          "sources": [
           {
            "id": "PAST-07-039",
            "label": "Set 7 · Q39"
           }
          ]
         },
         {
          "html": "Exhausted permutit is regenerated with a solution of sodium chloride.",
          "sources": [
           {
            "id": "PAST-10-043",
            "label": "Set 10 · Q43"
           }
          ]
         },
         {
          "html": "Permanent hardness is removed by (a) and (b): the lime soda method and the ion exchange process.",
          "sources": [
           {
            "id": "PAST-17-047",
            "label": "Set 17 · Q47"
           }
          ]
         },
         {
          "html": "Copper sulphate is the chemical generally used for controlling algae.",
          "sources": [
           {
            "id": "PAST-11-017",
            "label": "Set 11 · Q17"
           }
          ]
         },
         {
          "html": "Algae are removed with copper sulphate, the standard algicide.",
          "sources": [
           {
            "id": "PAST-18-065",
            "label": "Set 18 · Q65"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-07-039",
          "label": "Set 7 · Q39"
         },
         {
          "id": "PAST-10-043",
          "label": "Set 10 · Q43"
         },
         {
          "id": "PAST-17-047",
          "label": "Set 17 · Q47"
         },
         {
          "id": "PAST-11-017",
          "label": "Set 11 · Q17"
         },
         {
          "id": "PAST-18-065",
          "label": "Set 18 · Q65"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Surface overflow rate",
        "tex": "SOR = \\dfrac{Q}{A}"
       },
       {
        "label": "Detention time",
        "tex": "t = \\dfrac{V}{Q}"
       },
       {
        "label": "Chlorine demand",
        "tex": "\\text{demand} = \\text{dose} - \\text{residual}"
       }
      ],
      "cautions": [],
      "gaps": [
       "Screening, aeration and the removal of iron, manganese, colour, odour and taste from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0604": {
      "code": "ACiE0604",
      "questionCount": 14,
      "format": 2,
      "summary": "<p>This subchapter covers the planning and building of sewers. The past-paper questions test intercepting sewers and the design flow of combined systems, why sewers run partly full and how a part-full circular sewer behaves, minimum sewer size, inverted siphons, shallow and drop manholes, reflux valves and the bandage joint.</p>",
      "blocks": [
       {
        "id": "sewer-types-and-systems",
        "title": "Kinds of sewer and sewerage systems",
        "html": "<p>House connections feed laterals, laterals feed branch and main sewers, and mains lead on to trunk sewers and the treatment works. An <em>intercepting sewer</em> runs across the ends of several large sewers or old outfalls, collecting their flow and carrying it to treatment.</p><p>A <em>separate</em> system carries sewage and storm water in different pipes; a sanitary sewer is designed for the peak dry-weather flow. A <em>combined</em> system carries both in one pipe, so its design flow is the dry-weather flow plus the wet-weather, storm, flow.</p>",
        "formulas": [
         {
          "label": "Separate sanitary sewer",
          "tex": "Q = PF \\times DWF"
         },
         {
          "label": "Combined sewer",
          "tex": "Q = DWF + WWF"
         }
        ],
        "points": [
         {
          "html": "A sewer collecting the flow of a number of other large sewers or outlets is an intercepting sewer.",
          "sources": [
           {
            "id": "PAST-12-024",
            "label": "Set 12 · Q24"
           }
          ]
         },
         {
          "html": "A combined sewerage system is designed for DWF + WWF, sewage plus storm flow.",
          "sources": [
           {
            "id": "PAST-17-062",
            "label": "Set 17 · Q62"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-12-024",
          "label": "Set 12 · Q24"
         },
         {
          "id": "PAST-17-062",
          "label": "Set 17 · Q62"
         }
        ]
       },
       {
        "id": "sewer-design-criteria",
        "title": "Design criteria: partly full flow and minimum size",
        "html": "<p>Sewers are designed to run partly full, about two thirds to three quarters of the depth at peak flow. The air space takes fluctuations of inflow, keeps gravity, open-channel flow and ventilates the sewer gases.</p><p>In a circular sewer only the wetted perimeter always grows with depth. The discharge peaks at about 0.94D and the velocity at about 0.81D before both fall slightly as the pipe fills. Public sewers are at least 150 mm, 15 cm, in diameter so that they do not choke; house drains may be 100 mm.</p>",
        "points": [
         {
          "html": "An air gap is left at the top of sewers for all of the above: inflow fluctuation, open-channel flow and ventilation.",
          "sources": [
           {
            "id": "PAST-06-040",
            "label": "Set 6 · Q40"
           }
          ]
         },
         {
          "html": "A sanitary sewer is expected to run about two third full at peak flow.",
          "sources": [
           {
            "id": "PAST-13-058",
            "label": "Set 13 · Q58"
           }
          ]
         },
         {
          "html": "As the depth in a part-full circular sewer rises, the wetted perimeter increases; discharge and velocity only rise up to a point.",
          "sources": [
           {
            "id": "PAST-09-046",
            "label": "Set 9 · Q46"
           }
          ]
         },
         {
          "html": "The minimum size of a public sewer is 15 cm.",
          "sources": [
           {
            "id": "PAST-10-017",
            "label": "Set 10 · Q17"
           }
          ]
         },
         {
          "html": "The minimum sewer diameter generally adopted in design is 150 mm.",
          "sources": [
           {
            "id": "PAST-16-024",
            "label": "Set 16 · Q24"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-040",
          "label": "Set 6 · Q40"
         },
         {
          "id": "PAST-13-058",
          "label": "Set 13 · Q58"
         },
         {
          "id": "PAST-09-046",
          "label": "Set 9 · Q46"
         },
         {
          "id": "PAST-10-017",
          "label": "Set 10 · Q17"
         },
         {
          "id": "PAST-16-024",
          "label": "Set 16 · Q24"
         }
        ]
       },
       {
        "id": "siphons-and-manholes",
        "title": "Inverted siphons and manholes",
        "html": "<p>An <em>inverted siphon</em>, or depressed sewer, carries a sewer under an obstruction such as a river, valley, road or railway cutting. Its barrels run full under pressure, driven by the head upstream; it is not a true siphon over a summit.</p><p>Manholes give access for inspection and cleaning. A shallow manhole is about 0.7 to 0.9 m deep and a normal one about 1.5 m. Where an incoming sewer is more than about 0.6 m above the outgoing one, a <em>drop manhole</em> brings the flow down a vertical pipe, so sewage does not fall freely and erode the benching.</p>",
        "points": [
         {
          "html": "An inverted siphon is provided where a sewer crosses a river or similar obstruction.",
          "sources": [
           {
            "id": "PAST-04-041",
            "label": "Set 4 · Q41"
           }
          ]
         },
         {
          "html": "The depressed sewer is the one called an inverted siphon.",
          "sources": [
           {
            "id": "PAST-16-009",
            "label": "Set 16 · Q9"
           }
          ]
         },
         {
          "html": "Another name for an inverted syphon is a depressed sewer.",
          "sources": [
           {
            "id": "PAST-17-044",
            "label": "Set 17 · Q44"
           }
          ]
         },
         {
          "html": "A manhole 0.7 to 0.9 m deep is classified as shallow.",
          "sources": [
           {
            "id": "PAST-07-048",
            "label": "Set 7 · Q48"
           }
          ]
         },
         {
          "html": "A drop manhole is needed when the incoming invert is more than about 0.6 m above the outgoing one.",
          "sources": [
           {
            "id": "PAST-R2083-027",
            "label": "2083 recall · Q27"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-041",
          "label": "Set 4 · Q41"
         },
         {
          "id": "PAST-16-009",
          "label": "Set 16 · Q9"
         },
         {
          "id": "PAST-17-044",
          "label": "Set 17 · Q44"
         },
         {
          "id": "PAST-07-048",
          "label": "Set 7 · Q48"
         },
         {
          "id": "PAST-R2083-027",
          "label": "2083 recall · Q27"
         }
        ]
       },
       {
        "id": "valves-and-joints",
        "title": "Reflux valves and pipe joints",
        "html": "<p>A <em>reflux valve</em>, also called a non-return or check valve, lets sewage flow one way only and closes against reverse flow, for example at pump outlets and outfalls into rivers that may rise.</p><p>Concrete sewer pipes are joined by collar, spigot-and-socket or simpler joints. The <em>bandage joint</em>, a band of cement mortar and cloth wrapped round butting pipe ends, is a rough joint suitable only for lines not under pressure.</p>",
        "points": [
         {
          "html": "The function of a reflux valve is to prevent back flow.",
          "sources": [
           {
            "id": "PAST-17-043",
            "label": "Set 17 · Q43"
           }
          ]
         },
         {
          "html": "The rough joint for concrete pipes is the bandage joint.",
          "sources": [
           {
            "id": "PAST-13-022",
            "label": "Set 13 · Q22"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-17-043",
          "label": "Set 17 · Q43"
         },
         {
          "id": "PAST-13-022",
          "label": "Set 13 · Q22"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Separate sanitary sewer",
        "tex": "Q = PF \\times DWF"
       },
       {
        "label": "Combined sewer",
        "tex": "Q = DWF + WWF"
       }
      ],
      "cautions": [
       {
        "id": "part-full-sewer-key",
        "status": "corrected",
        "prompt": "The published key says discharge, velocity and perimeter all change together",
        "html": "<p>Only the wetted perimeter always grows with depth. Discharge rises only up to about 0.94D and velocity up to about 0.81D before both fall, so the all-of-these answer is not generally true.</p>",
        "sources": [
         {
          "id": "PAST-09-046",
          "label": "Set 9 · Q46"
         }
        ]
       }
      ],
      "gaps": [
       "Wastewater quantity estimation, sewer shapes and materials, and self-cleansing velocity checks from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0605": {
      "code": "ACiE0605",
      "questionCount": 28,
      "format": 2,
      "summary": "<p>This subchapter covers what is in sewage and how it is treated and disposed of. The past-paper questions test the solids in sewage, the COD/BOD ratio, fixed solids and bacterial groups, BOD dilution, rate and ultimate BOD, the oxygen sag, screens, skimming and grit chambers, trickling filters and activated sludge, sludge volume and dewatering, septic tanks and solid-waste terms.</p>",
      "blocks": [
       {
        "id": "sewage-characteristics",
        "title": "Characteristics of sewage and the organisms in it",
        "html": "<p>Domestic sewage is about 99.9% water; only about 0.1% is solids, organic and inorganic, dissolved and suspended. Chemical oxygen demand oxidises both biodegradable and non-biodegradable matter, so COD always exceeds BOD: the COD/BOD ratio is greater than 1, about 1.25 to 1.5 for fresh domestic sewage.</p><p>Solids are dried at 103 to 105°C for total solids, then ignited at 550 ± 5°C for 15 minutes: the organic, volatile part burns off and the residue is the fixed solids. Bacteria are grouped by temperature, psychrophilic below about 20°C, mesophilic 20 to 45°C and thermophilic 45 to 70°C, and by oxygen: facultative bacteria live with or without it.</p>",
        "points": [
         {
          "html": "The solid content of sewage is usually about 0.1%.",
          "sources": [
           {
            "id": "PAST-18-047",
            "label": "Set 18 · Q47"
           }
          ]
         },
         {
          "html": "The COD to BOD ratio of untreated sewage is about 1.25-1.5.",
          "sources": [
           {
            "id": "PAST-05-001",
            "label": "Set 5 · Q1"
           }
          ]
         },
         {
          "html": "The COD/BOD ratio of sewage is greater than 1, because COD also counts non-biodegradable matter.",
          "sources": [
           {
            "id": "PAST-13-005",
            "label": "Set 13 · Q5"
           }
          ]
         },
         {
          "html": "Fixed inorganic solids are found by igniting at 550° ± 5° for 15 minutes.",
          "sources": [
           {
            "id": "PAST-08-011",
            "label": "Set 8 · Q11"
           }
          ]
         },
         {
          "html": "Bacteria growing best at 40 to 70°C are thermophilic.",
          "sources": [
           {
            "id": "PAST-09-052",
            "label": "Set 9 · Q52"
           }
          ]
         },
         {
          "html": "Facultative bacteria can function both with and without oxygen.",
          "sources": [
           {
            "id": "PAST-13-036",
            "label": "Set 13 · Q36"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-18-047",
          "label": "Set 18 · Q47"
         },
         {
          "id": "PAST-05-001",
          "label": "Set 5 · Q1"
         },
         {
          "id": "PAST-13-005",
          "label": "Set 13 · Q5"
         },
         {
          "id": "PAST-08-011",
          "label": "Set 8 · Q11"
         },
         {
          "id": "PAST-09-052",
          "label": "Set 9 · Q52"
         },
         {
          "id": "PAST-13-036",
          "label": "Set 13 · Q36"
         }
        ]
       },
       {
        "id": "bod-and-oxygen-sag",
        "title": "BOD tests, the BOD rate and the oxygen sag",
        "html": "<p>Biochemical oxygen demand is found by diluting a sample, incubating it for 5 days at 20°C and measuring the drop in dissolved oxygen. The BOD of the sample is that drop divided by the fraction of sample in the bottle. BOD is exerted gradually, approaching the ultimate BOD \\(L_0\\) at a rate set by the constant k.</p><p>Treatment efficiency is the fraction of BOD removed. Below a sewage outfall, deoxygenation by BOD competes with reaeration from the air, and the dissolved oxygen falls to a minimum and recovers; the Streeter–Phelps equation describes this oxygen sag curve.</p>",
        "formulas": [
         {
          "label": "BOD from a dilution test",
          "tex": "BOD = \\dfrac{\\Delta DO}{P}, \\qquad P = \\dfrac{V_{\\text{sample}}}{V_{\\text{bottle}}}"
         },
         {
          "label": "BOD exerted by time t",
          "tex": "BOD_t = L_0\\left(1 - 10^{-kt}\\right)"
         }
        ],
        "example": {
         "title": "Worked examples: BOD, rate and ultimate BOD",
         "html": "<p>A 2% solution losing 5 ppm of DO: \\(BOD = 5/0.02 = 250\\) ppm.</p><p>\\(BOD_5 = 276\\) and \\(L_0 = 380\\) mg/L: \\(10^{-5k} = 0.274\\), so \\(k = 0.1125\\) per day.</p><p>3 mL in a 300 mL bottle losing 10 mg/L: \\(BOD_5 = 1000\\) mg/L; with \\(K = 0.23\\) per day (base e), \\(L_0 = 1000/(1 - e^{-1.15}) \\approx 1463\\) mg/L.</p>"
        },
        "points": [
         {
          "html": "A 2% sample that depletes 5 ppm of oxygen in 5 days at 20°C has a BOD of 250 ppm.",
          "sources": [
           {
            "id": "PAST-05-079",
            "label": "Set 5 · Q79"
           }
          ]
         },
         {
          "html": "3 ml of sewage in a 300 ml bottle depleting 10 mg/L gives an ultimate BOD of about 1463 mg/l.",
          "sources": [
           {
            "id": "PAST-14-063",
            "label": "Set 14 · Q63"
           }
          ]
         },
         {
          "html": "A five-day BOD of 276 mg/l with an ultimate BOD of 380 mg/l means an oxidation rate of 0.1125/day.",
          "sources": [
           {
            "id": "PAST-13-070",
            "label": "Set 13 · Q70"
           }
          ]
         },
         {
          "html": "A plant reducing BOD from 300 mg/l to 30 mg/l is 90% efficient.",
          "sources": [
           {
            "id": "PAST-10-078",
            "label": "Set 10 · Q78"
           }
          ]
         },
         {
          "html": "The oxygen sag curve comes from the Streeter Phelps method.",
          "sources": [
           {
            "id": "PAST-16-066",
            "label": "Set 16 · Q66"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-079",
          "label": "Set 5 · Q79"
         },
         {
          "id": "PAST-14-063",
          "label": "Set 14 · Q63"
         },
         {
          "id": "PAST-13-070",
          "label": "Set 13 · Q70"
         },
         {
          "id": "PAST-10-078",
          "label": "Set 10 · Q78"
         },
         {
          "id": "PAST-16-066",
          "label": "Set 16 · Q66"
         }
        ]
       },
       {
        "id": "preliminary-and-primary-treatment",
        "title": "Screens, skimming tanks and grit chambers",
        "html": "<p>Treatment begins by removing what would damage pumps or clog pipes. Coarse screens, or racks, are heavy bars 30 to 50 mm thick set at 45 to 60°, with clear openings of about 50 mm or more, typically 50 to 150 mm; medium screens have 6 to 40 mm openings and fine screens less than 6 mm.</p><p>Oil and grease float to the surface in skimming tanks and are removed by <em>skimming</em>. Grit chambers settle sand and grit while keeping the organic solids moving; aerated grit chambers are usually 7.5 to 20 m long with a few minutes of detention.</p>",
        "points": [
         {
          "html": "A coarse screen has bar openings of about 50 mm.",
          "sources": [
           {
            "id": "PAST-04-040",
            "label": "Set 4 · Q40"
           }
          ]
         },
         {
          "html": "Coarse screens at 45° to 60° use bars of size 30-50 mm, with spacing of 50-150 mm.",
          "sources": [
           {
            "id": "PAST-15-071",
            "label": "Set 15 · Q71"
           }
          ]
         },
         {
          "html": "Removal of oil and grease from sewage is known as skimming.",
          "sources": [
           {
            "id": "PAST-10-057",
            "label": "Set 10 · Q57"
           }
          ]
         },
         {
          "html": "An aerated grit chamber is usually designed 7.5-20 m long.",
          "sources": [
           {
            "id": "PAST-11-072",
            "label": "Set 11 · Q72"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-040",
          "label": "Set 4 · Q40"
         },
         {
          "id": "PAST-15-071",
          "label": "Set 15 · Q71"
         },
         {
          "id": "PAST-10-057",
          "label": "Set 10 · Q57"
         },
         {
          "id": "PAST-11-072",
          "label": "Set 11 · Q72"
         }
        ]
       },
       {
        "id": "biological-treatment",
        "title": "Trickling filters and activated sludge",
        "html": "<p>In a <em>trickling filter</em> sewage is sprayed over coarse, durable media, broken stone, gravel, slag, plastic or geotextile, on which a biofilm grows; paper would disintegrate. In two stages in series, the second removes a fraction of what the first leaves.</p><p>In the <em>activated sludge</em> process aerated sewage is mixed with a floc of micro-organisms, which is then settled; part of it, about 20 to 30% of the flow in the key's figure, is returned to the aeration tank. The sludge is very dilute, about ninety-seven per cent water or more. The sludge volume index, settled volume per gram of dry solids, shows how well it settles. Treatment yields sludge, scum and clarified effluent, never potable water.</p>",
        "formulas": [
         {
          "label": "Two-stage efficiency",
          "tex": "E = E_1 + E_2(1 - E_1)"
         },
         {
          "label": "Sludge volume index",
          "tex": "SVI = \\dfrac{V_{30}\\ (\\text{mL/L})}{X\\ (\\text{g/L})}"
         }
        ],
        "example": {
         "title": "Worked example: sludge volume index",
         "html": "<p>27 cm<sup>3</sup> of settled sludge per litre holding 3.0 g of dry solids: \\(SVI = 27/3.0 = 9\\) mL/g.</p>"
        },
        "points": [
         {
          "html": "The overall efficiency of a two-stage high-rate trickling filter is \\(E_1 + E_2(1 - E_1)\\).",
          "sources": [
           {
            "id": "PAST-06-080",
            "label": "Set 6 · Q80"
           }
          ]
         },
         {
          "html": "Paper is not used as a trickling filter medium; it disintegrates.",
          "sources": [
           {
            "id": "PAST-14-008",
            "label": "Set 14 · Q8"
           }
          ]
         },
         {
          "html": "Activated sludge contains about ninety-seven per cent water or more.",
          "sources": [
           {
            "id": "PAST-18-034",
            "label": "Set 18 · Q34"
           }
          ]
         },
         {
          "html": "About 20-30% of the activated sludge is recycled, by the key's figure.",
          "sources": [
           {
            "id": "PAST-18-052",
            "label": "Set 18 · Q52"
           }
          ]
         },
         {
          "html": "27 cm<sup>3</sup> of sludge per litre with a dry weight of 3.0 g gives a sludge volume index of 9.",
          "sources": [
           {
            "id": "PAST-06-064",
            "label": "Set 6 · Q64"
           }
          ]
         },
         {
          "html": "Potable water is not produced by wastewater treatment; sludge, scum and clarified water are.",
          "sources": [
           {
            "id": "PAST-11-011",
            "label": "Set 11 · Q11"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-080",
          "label": "Set 6 · Q80"
         },
         {
          "id": "PAST-14-008",
          "label": "Set 14 · Q8"
         },
         {
          "id": "PAST-18-034",
          "label": "Set 18 · Q34"
         },
         {
          "id": "PAST-18-052",
          "label": "Set 18 · Q52"
         },
         {
          "id": "PAST-06-064",
          "label": "Set 6 · Q64"
         },
         {
          "id": "PAST-11-011",
          "label": "Set 11 · Q11"
         }
        ]
       },
       {
        "id": "sludge-treatment",
        "title": "Sludge digestion, volume and dewatering",
        "html": "<p>The dry solids in sludge stay the same as water is removed, so the volume varies inversely with the solids fraction. Taking sludge from 90% to 80% moisture doubles its solids fraction and halves its volume.</p><p>Rotary vacuum filters are used for dewatering sludge into a cake of about 20 to 30% solids. They are not used to filter sewage, and they do not suit fines, liquids with a high vapour pressure or very viscous liquids.</p>",
        "formulas": [
         {
          "label": "Volume against moisture content",
          "tex": "\\dfrac{V_2}{V_1} = \\dfrac{100 - p_1}{100 - p_2}"
         }
        ],
        "example": {
         "title": "Worked example: reduction of sludge volume",
         "html": "<p>From 90% to 80% moisture the solids go from 10% to 20% of the sludge: \\(V_2/V_1 = 10/20 = 0.5\\), a 50% decrease.</p>"
        },
        "points": [
         {
          "html": "Reducing sludge moisture from 90% to 80% decreases its volume by 50 per cent.",
          "sources": [
           {
            "id": "PAST-07-076",
            "label": "Set 7 · Q76"
           }
          ]
         },
         {
          "html": "A vacuum filter suits none of these uses: fines, high-vapour-pressure liquids or very viscous liquids.",
          "sources": [
           {
            "id": "PAST-10-044",
            "label": "Set 10 · Q44"
           }
          ]
         },
         {
          "html": "Vacuum filters are used for dewatering of sludge.",
          "sources": [
           {
            "id": "PAST-15-037",
            "label": "Set 15 · Q37"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-07-076",
          "label": "Set 7 · Q76"
         },
         {
          "id": "PAST-10-044",
          "label": "Set 10 · Q44"
         },
         {
          "id": "PAST-15-037",
          "label": "Set 15 · Q37"
         }
        ]
       },
       {
        "id": "septic-tanks-and-solid-waste",
        "title": "Septic tanks and solid waste",
        "html": "<p>A septic tank holds household sewage long enough, about 24 hours, for the solids to settle and partly digest; scum floats, sludge collects at the bottom and the effluent still needs a soak pit or drain field.</p><p>Solid wastes are classed by origin and nature. Dust from steel manufacturing is a solid inorganic industrial residue, grouped as inorganic sludge. The waste hierarchy's three Rs are reduce, reuse and recycle; recovery of energy or materials comes after them.</p>",
        "points": [
         {
          "html": "The detention time for a septic tank is about 24 hours.",
          "sources": [
           {
            "id": "PAST-06-038",
            "label": "Set 6 · Q38"
           }
          ]
         },
         {
          "html": "A septic tank's detention period is assumed as 24 hrs.",
          "sources": [
           {
            "id": "PAST-07-055",
            "label": "Set 7 · Q55"
           }
          ]
         },
         {
          "html": "Steel dust after manufacturing is classed as inorganic sludge.",
          "sources": [
           {
            "id": "PAST-18-033",
            "label": "Set 18 · Q33"
           }
          ]
         },
         {
          "html": "Recover is not one of the three Rs: reduce, reuse and recycle.",
          "sources": [
           {
            "id": "PAST-18-053",
            "label": "Set 18 · Q53"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-038",
          "label": "Set 6 · Q38"
         },
         {
          "id": "PAST-07-055",
          "label": "Set 7 · Q55"
         },
         {
          "id": "PAST-18-033",
          "label": "Set 18 · Q33"
         },
         {
          "id": "PAST-18-053",
          "label": "Set 18 · Q53"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "BOD from dilution",
        "tex": "BOD = \\dfrac{\\Delta DO}{P}"
       },
       {
        "label": "BOD with time",
        "tex": "BOD_t = L_0\\left(1 - 10^{-kt}\\right)"
       },
       {
        "label": "Treatment efficiency",
        "tex": "\\eta = \\dfrac{BOD_{\\text{in}} - BOD_{\\text{out}}}{BOD_{\\text{in}}}"
       },
       {
        "label": "Two-stage efficiency",
        "tex": "E = E_1 + E_2(1 - E_1)"
       },
       {
        "label": "Sludge volume index",
        "tex": "SVI = \\dfrac{V_{30}}{X}"
       },
       {
        "label": "Sludge volume and moisture",
        "tex": "\\dfrac{V_2}{V_1} = \\dfrac{100 - p_1}{100 - p_2}"
       }
      ],
      "cautions": [
       {
        "id": "sludge-return-ratio",
        "status": "review",
        "prompt": "The key's return-sludge figure is lower than many design ranges",
        "html": "<p>The published answer takes about 20 to 30% of the flow as returned sludge. Conventional activated sludge plants often return 25 to 50%, so treat the figure as the paper's convention.</p>",
        "sources": [
         {
          "id": "PAST-18-052",
          "label": "Set 18 · Q52"
         }
        ]
       }
      ],
      "gaps": [
       "Oxidation ponds, land treatment and latrine design from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0606": {
      "code": "ACiE0606",
      "questionCount": 15,
      "format": 2,
      "summary": "<p>This subchapter covers environmental assessment and disaster risk. The past-paper questions test what EIA is and what its report contains, toxicity assessment, the BES, IEE and EIA levels and the order of EIA steps, what scoping covers, Nepal's first environment act, the number of Sustainable Development Goals, hazard types, the disaster cycle and the ministry responsible for disaster risk.</p>",
      "blocks": [
       {
        "id": "eia-meaning-and-report",
        "title": "What EIA is and what an assessment contains",
        "html": "<p><em>Environmental impact assessment</em> is a systematic process that identifies, predicts and evaluates the likely environmental effects of a proposed project before it is approved, and defines measures to avoid or mitigate the harmful ones and add positive ones. It is not a financial appraisal and it does not ignore negative effects.</p><p>The assessment report brings together all the data collected, the analysis of alternatives against the baseline, the predicted impacts, both qualitative and quantitative, and the mitigation and monitoring plans in one structured, concise document. In health risk assessment, <em>toxicity</em> or dose–response assessment estimates how much of a substance causes what kind of harm, while exposure assessment traces pathways and concentrations.</p>",
        "points": [
         {
          "html": "EIA is a systematic process used to evaluate the environmental consequences of a proposed project, aiming to identify and mitigate adverse effects.",
          "sources": [
           {
            "id": "PAST-08-020",
            "label": "Set 8 · Q20"
           }
          ]
         },
         {
          "html": "EIA is defined as identifying, predicting and evaluating the likely impacts of a proposal to define mitigation actions and positive contributions.",
          "sources": [
           {
            "id": "PAST-15-035",
            "label": "Set 15 · Q35"
           }
          ]
         },
         {
          "html": "An impact assessment includes all the data collection, analysis and developed plans summarized in a well-structured, concise document.",
          "sources": [
           {
            "id": "PAST-04-051",
            "label": "Set 4 · Q51"
           }
          ]
         },
         {
          "html": "Toxicity assessment aims to estimate how much of a substance does what kind of harm.",
          "sources": [
           {
            "id": "PAST-05-036",
            "label": "Set 5 · Q36"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-08-020",
          "label": "Set 8 · Q20"
         },
         {
          "id": "PAST-15-035",
          "label": "Set 15 · Q35"
         },
         {
          "id": "PAST-04-051",
          "label": "Set 4 · Q51"
         },
         {
          "id": "PAST-05-036",
          "label": "Set 5 · Q36"
         }
        ]
       },
       {
        "id": "assessment-levels-and-procedure",
        "title": "BES, IEE and EIA, and the steps of an EIA",
        "html": "<p>Nepal's environment rules set three levels of study, chosen by screening: the <em>Brief Environmental Study</em> (BES) for small proposals, the <em>Initial Environmental Examination</em> (IEE), and the full EIA. Scoping, with public notice, is a stage of EIA only; an IEE proceeds on an approved terms of reference without it, and a BES needs neither.</p><p>An EIA runs in order: screening decides whether it is needed, scoping fixes the issues, alternatives and terms of reference, the EIA study and report follow, then the public hearing, and finally the environmental clearance. Assessing impacts and planning for contingencies belong to the study itself, not to scoping.</p>",
        "points": [
         {
          "html": "BES stands for Brief Environmental Study, the lightest level of assessment.",
          "sources": [
           {
            "id": "PAST-16-079",
            "label": "Set 16 · Q79"
           }
          ]
         },
         {
          "html": "The full form of BES is Brief Environmental Study, below IEE and EIA.",
          "sources": [
           {
            "id": "PAST-17-046",
            "label": "Set 17 · Q46"
           }
          ]
         },
         {
          "html": "Scoping is not required for an IEE; it is a stage of EIA only.",
          "sources": [
           {
            "id": "PAST-06-058",
            "label": "Set 6 · Q58"
           }
          ]
         },
         {
          "html": "The EIA order is Screening, Scoping, EIA, Public Hearing, then Issue of Environmental Clearance.",
          "sources": [
           {
            "id": "PAST-09-053",
            "label": "Set 9 · Q53"
           }
          ]
         },
         {
          "html": "Conducting impact assessment and contingency planning is not part of scoping; it comes in the EIA study.",
          "sources": [
           {
            "id": "PAST-13-053",
            "label": "Set 13 · Q53"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-16-079",
          "label": "Set 16 · Q79"
         },
         {
          "id": "PAST-17-046",
          "label": "Set 17 · Q46"
         },
         {
          "id": "PAST-06-058",
          "label": "Set 6 · Q58"
         },
         {
          "id": "PAST-09-053",
          "label": "Set 9 · Q53"
         },
         {
          "id": "PAST-13-053",
          "label": "Set 13 · Q53"
         }
        ]
       },
       {
        "id": "environmental-law-and-sdgs",
        "title": "Nepal's environment act and the Sustainable Development Goals",
        "html": "<p>Nepal's first Environment Protection Act was enacted in 2053 BS, 1997 AD, with its rules the next year; it was replaced by the Environment Protection Act of 2076 BS, 2019. Internationally, the United Nations 2030 Agenda, adopted in 2015, sets 17 Sustainable Development Goals with 169 targets.</p>",
        "points": [
         {
          "html": "Nepal's first environment act was introduced in 1997 (2053 BS).",
          "sources": [
           {
            "id": "PAST-12-025",
            "label": "Set 12 · Q25"
           }
          ]
         },
         {
          "html": "There are 17 Sustainable Development Goals in the UN 2030 Agenda.",
          "sources": [
           {
            "id": "PAST-16-003",
            "label": "Set 16 · Q3"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-12-025",
          "label": "Set 12 · Q25"
         },
         {
          "id": "PAST-16-003",
          "label": "Set 16 · Q3"
         }
        ]
       },
       {
        "id": "disaster-types-and-management",
        "title": "Hazard types, the disaster cycle and responsible bodies",
        "html": "<p>Hazards are grouped by their cause. Earthquakes and landslides come from earth processes, so they are <em>geological</em>; floods are hydrological and storms meteorological. Disaster risk depends on the hazard, the exposure and vulnerability of people and assets, and their capacity to cope.</p><p>Disaster management runs through mitigation, preparedness, response and recovery. Hazard, vulnerability and risk analysis come before a disaster, in the mitigation phase. In Nepal the National Disaster Risk Reduction and Management Authority, NDRRMA, works under the Ministry of Home Affairs, which passes the national DRM strategy.</p>",
        "points": [
         {
          "html": "Earthquakes and landslides are geological hazards.",
          "sources": [
           {
            "id": "PAST-11-021",
            "label": "Set 11 · Q21"
           }
          ]
         },
         {
          "html": "Vulnerability analysis belongs to the mitigation part of the disaster management cycle.",
          "sources": [
           {
            "id": "PAST-08-078",
            "label": "Set 8 · Q78"
           }
          ]
         },
         {
          "html": "The DRM strategy is passed by the Ministry of Home Affairs.",
          "sources": [
           {
            "id": "PAST-12-068",
            "label": "Set 12 · Q68"
           }
          ]
         },
         {
          "html": "NDRRMA falls under the Ministry of Home Affairs (MOHA).",
          "sources": [
           {
            "id": "PAST-13-011",
            "label": "Set 13 · Q11"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-11-021",
          "label": "Set 11 · Q21"
         },
         {
          "id": "PAST-08-078",
          "label": "Set 8 · Q78"
         },
         {
          "id": "PAST-12-068",
          "label": "Set 12 · Q68"
         },
         {
          "id": "PAST-13-011",
          "label": "Set 13 · Q11"
         }
        ]
       }
      ],
      "cautions": [
       {
        "id": "scoping-key",
        "status": "corrected",
        "prompt": "The published key contradicts its own note that scoping belongs to EIA",
        "html": "<p>Under Nepal's environment rules, scoping with public notice is a stage of EIA only. IEE proceeds on an approved terms of reference without scoping, and the newer BES needs neither.</p>",
        "sources": [
         {
          "id": "PAST-06-058",
          "label": "Set 6 · Q58"
         }
        ]
       }
      ],
      "gaps": [
       "Detailed government regulations and disaster mitigation measures from the syllabus are only touched on in these papers."
      ]
     }
    });
})();
