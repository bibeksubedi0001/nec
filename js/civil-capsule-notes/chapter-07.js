(function () {
    "use strict";
    window.CIVIL_CAPSULE_NOTE_TOPICS = window.CIVIL_CAPSULE_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_CAPSULE_NOTE_TOPICS, {
      "ACiE0701": {
        "code": "ACiE0701",
        "questionCount": 27,
        "format": 2,
        "summary": "<p>Water demand estimation turns crop needs into a canal discharge. This subchapter covers effective rainfall and the net irrigation requirement, crop and base periods, duty and delta, crop tolerance and seasonal volumes, soil-water classes and available water, allowable depletion and the irrigation interval, consumptive use, farm-pond storage, efficiencies, kor watering and the governing design discharge. The capsule questions test these definitions and short water-balance calculations: duty from base period and delta, stored water depth, days until irrigation falls due, gross diversion depth and canal-head flow.</p>",
        "blocks": [
          {
            "id": "effective-rainfall-and-net-requirement",
            "title": "Effective rainfall and the net irrigation requirement",
            "html": "<p>In irrigation planning, <em>effective rainfall</em> is the part of the rain falling during the crop period that becomes available to meet the crop's evapotranspiration. Rain that runs off the surface, drains below the root zone or exceeds what the soil can store is excluded.</p><p>Hydrology uses the same phrase for a different quantity. In unit-hydrograph work, effective rainfall or <em>rainfall excess</em> is the part of a storm that produces direct runoff. Check which meaning is intended before calculating.</p><p>In the simplified balance used here, with no groundwater contribution, no change in soil storage and no leaching allowance, irrigation supplies whatever crop demand the effective rain leaves unmet. This net requirement applies at the root zone; conveyance and application losses are added afterwards to obtain the gross supply.</p>",
            "formulas": [
              {
                "label": "Net irrigation requirement, simplified balance",
                "tex": "\\text{NIR} = \\text{ET}_c - P_e",
                "where": "<p>\\(\\text{ET}_c\\) is crop evapotranspiration and \\(P_e\\) the effective rainfall, both over the same crop period.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: net requirement and a crop budget",
              "html": "<p>Crop ET over a period is 150 mm, and 50 mm of an 80 mm rainfall is useful to the crop:</p>\\[\\text{NIR} = 150 - 50 = 100\\ \\text{mm}\\]<p>Deducting all 80 mm would give 70 mm and credit runoff and drainage as crop water. Over matched crop periods the same subtraction gives:</p><table><thead><tr><th scope='col'>Crop</th><th scope='col'>ET (m)</th><th scope='col'>Effective rain (m)</th><th scope='col'>Net delta (m)</th></tr></thead><tbody><tr><th scope='row'>Rice</th><td>1.45</td><td>0.25</td><td>1.20</td></tr><tr><th scope='row'>Tobacco</th><td>0.70</td><td>0.20</td><td>0.50</td></tr><tr><th scope='row'>Wheat</th><td>0.60</td><td>0.15</td><td>0.45</td></tr><tr><th scope='row'>Banana</th><td>1.85</td><td>0.45</td><td>1.40</td></tr></tbody></table><p>Banana governs this budget with 1.40 m.</p>"
            },
            "moreHtml": "<p>These crop figures are illustrative planning inputs, not measurements. Ranking by ET alone, or adding rain to ET, says nothing about irrigation demand.</p>",
            "points": [
              {
                "html": "Precipitation falling during the growing period of a crop that is available to meet its evapotranspiration needs is known as effective rainfall.",
                "sources": [
                  {
                    "id": "CAP4-03-00095",
                    "label": "p. 13; topic 3 point 94"
                  }
                ]
              },
              {
                "html": "Effective rainfall is considered for estimation of the net irrigation requirement.",
                "sources": [
                  {
                    "id": "CAP4-07-00109",
                    "label": "p. 29; topic 7 point 111"
                  }
                ]
              },
              {
                "html": "Among rice, tobacco, wheat and banana, the crop with the highest delta is rice.",
                "sources": [
                  {
                    "id": "CAP4-07-00114",
                    "label": "p. 29; topic 7 point 115"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00095",
                "label": "p. 13; topic 3 point 94"
              },
              {
                "id": "CAP4-07-00109",
                "label": "p. 29; topic 7 point 111"
              },
              {
                "id": "CAP4-07-00114",
                "label": "p. 29; topic 7 point 115"
              }
            ]
          },
          {
            "id": "crop-period-base-period-and-duty",
            "title": "Crop period, base period and the duty-delta relation",
            "html": "<p>The <em>crop period</em> runs from sowing to harvest. The <em>base period</em> runs from the first to the last irrigation counted in the supply. The two have different end points, so a crop period is normally longer than its base period.</p><p><em>Duty</em> is the area one cumec can irrigate over the base period, and <em>delta</em> \\(\\Delta\\) is the total depth applied in that period. One cumec flowing for \\(B\\) days delivers \\(86400B\\) m³; spread to depth \\(\\Delta\\) it covers \\(86400B/\\Delta\\) m², and 10000 m² make a hectare. Duty is therefore proportional to \\(B/\\Delta\\), but the factor 8.64 cannot be dropped.</p><p>Duty also depends on where the flow is measured. For the same area and period, every upstream loss raises the flow needed at the head, so duty is greatest at the field and falls toward the headworks. Separate fields or branches cannot be ranked by position alone.</p>",
            "formulas": [
              {
                "label": "Duty from base period and delta",
                "tex": "D = \\dfrac{8.64\\,B}{\\Delta}",
                "where": "<p>\\(D\\) in ha/cumec, \\(B\\) in days and \\(\\Delta\\) in metres.</p>"
              },
              {
                "label": "Duty from area and discharge",
                "tex": "D = \\dfrac{A}{Q}",
                "where": "<p>\\(A\\) in hectares and \\(Q\\) in cumecs, measured at the same point over the same period.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: periods and duty",
              "html": "<p>Sown on day 0, first watered on day 8, last watered on day 98 and harvested on day 112, a crop has a crop period of 112 − 0 = 112 days and a base period of 98 − 8 = 90 days.</p><p>A delta of 0.72 m over a 90-day base period gives</p>\\[D = \\dfrac{8.64 \\times 90}{0.72} = 1080\\ \\text{ha/cumec}\\]<p>The bare ratio 90/0.72 = 125 is not a duty. For duty by location, 800 ha receive 0.8 cumec at the field after 20% of the head flow is lost in conveyance, so the head flow is 0.8/0.8 = 1.0 cumec. Field duty is 800/0.8 = 1000 ha/cumec and canal-head duty is 800/1.0 = 800 ha/cumec.</p>"
            },
            "points": [
              {
                "html": "The time period that elapses from the instant of sowing of a crop to its harvesting is called the crop period.",
                "sources": [
                  {
                    "id": "CAP4-07-00002",
                    "label": "p. 27; topic 7 point 2"
                  }
                ]
              },
              {
                "html": "Duty of water is proportional to the ratio of base period to delta.",
                "sources": [
                  {
                    "id": "CAP4-07-00001",
                    "label": "p. 27; topic 7 point 1"
                  }
                ]
              },
              {
                "html": "Duty of water is maximum on the field.",
                "sources": [
                  {
                    "id": "CAP4-07-00004",
                    "label": "p. 27; topic 7 point 4"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00002",
                "label": "p. 27; topic 7 point 2"
              },
              {
                "id": "CAP4-07-00001",
                "label": "p. 27; topic 7 point 1"
              },
              {
                "id": "CAP4-07-00004",
                "label": "p. 27; topic 7 point 4"
              }
            ]
          },
          {
            "id": "ponding-tolerance-and-seasonal-volumes",
            "title": "Ponding tolerance and seasonal water volumes of crops",
            "html": "<p>Crops differ in how they tolerate wet soil as well as in how much water they use over a season. Established <em>lowland rice</em> is adapted to shallow ponding: internal air spaces help carry oxygen to its roots, so it performs under flooded cultivation where wheat, tobacco or chickpea would suffer from poor aeration.</p><p>This is tolerance of ordinary shallow standing water. It is not drought resistance and not unlimited survival under complete submergence; variety and growth stage still matter.</p><p>A seasonal allocation is a volume, depth times area. A long-duration crop such as sugarcane can accumulate the largest seasonal total without having the highest daily demand, because the total integrates demand over many months. Planning depths are illustrative inputs, not crop constants.</p>",
            "formulas": [
              {
                "label": "Volume from depth and area",
                "tex": "V = A\\,d",
                "where": "<p>\\(A\\) in m² and \\(d\\) in metres; 1 ha is 10000 m².</p>"
              }
            ],
            "example": {
              "title": "Worked example: four crops on equal 10 ha blocks",
              "html": "<p>Ten hectares is 100000 m². Taking planning depths of 1.8 m for sugarcane, 1.2 m for rice, 0.5 m for wheat and 0.4 m for tobacco:</p><ul><li>sugarcane: 1.8 × 100000 = 180000 m³;</li><li>rice: 1.2 × 100000 = 120000 m³;</li><li>wheat: 0.5 × 100000 = 50000 m³;</li><li>tobacco: 0.4 × 100000 = 40000 m³.</li></ul><p>Sugarcane's 180000 m³ is the largest of these stated allocations.</p>"
            },
            "points": [
              {
                "html": "Rice has the highest water resistance.",
                "sources": [
                  {
                    "id": "CAP4-07-00003",
                    "label": "p. 27; topic 7 point 3"
                  }
                ]
              },
              {
                "html": "Sugarcane requires the maximum water per hectare for production.",
                "sources": [
                  {
                    "id": "CAP4-07-00005",
                    "label": "p. 27; topic 7 point 5"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00003",
                "label": "p. 27; topic 7 point 3"
              },
              {
                "id": "CAP4-07-00005",
                "label": "p. 27; topic 7 point 5"
              }
            ]
          },
          {
            "id": "soil-water-classes",
            "title": "Gravitational, capillary and hygroscopic soil water",
            "html": "<p>Soil water is classified by how strongly it is held.</p><ul><li><em>Gravitational water</em> drains out of large connected pores under gravity after heavy wetting. Roots may use a little before it leaves, but it is not a dependable reserve.</li><li><em>Capillary water</em> stays in finer pores. Surface tension at curved wetting menisci creates a negative pore-water pressure, a suction, that holds it.</li><li><em>Hygroscopic water</em> forms thin adsorbed films on particles, held far too tightly for plants.</li></ul><p>Above a connected water table in an unloaded, isothermal soil, capillary suction at the meniscus supports the water standing in a fine pore. No root membrane and no external loading are needed for this static rise.</p><p>Capillary retention names a mechanism, not guaranteed availability. As suction rises, roots cannot extract all capillary water, which is why soil still holds some when a crop reaches permanent wilting. <em>Field capacity</em>, the content left once free drainage becomes slow, depends on capillary tension and pore-size distribution, not on total porosity alone.</p>",
            "moreHtml": "<table><thead><tr><th scope='col'>Soil water</th><th scope='col'>Held by</th><th scope='col'>Use by crops</th></tr></thead><tbody><tr><th scope='row'>Gravitational</th><td>Not retained; drains through large pores</td><td>Brief only, not a dependable reserve</td></tr><tr><th scope='row'>Capillary</th><td>Surface tension at menisci in fine pores</td><td>Largely available between field capacity and wilting; the most tightly held part is not</td></tr><tr><th scope='row'>Hygroscopic</th><td>Adsorbed films on particle surfaces</td><td>Unavailable</td></tr></tbody></table><p>Two soils with equal total porosity can therefore have different field capacities: large pores drain readily, while small pores retain water at greater suction.</p>",
            "points": [
              {
                "html": "Water that flows out of the soil under the action of gravity is called gravity water.",
                "sources": [
                  {
                    "id": "CAP4-07-00006",
                    "label": "p. 27; topic 7 point 6"
                  }
                ]
              },
              {
                "html": "The soil water usable by plants is capillary water.",
                "sources": [
                  {
                    "id": "CAP4-07-00007",
                    "label": "p. 27; topic 7 point 7"
                  }
                ]
              },
              {
                "html": "The weight of capillary water is held in the soil by surface tension.",
                "sources": [
                  {
                    "id": "CAP4-07-00009",
                    "label": "p. 27; topic 7 point 9"
                  }
                ]
              },
              {
                "html": "The field capacity of a soil depends upon capillary tension in the soil and porosity of the soil.",
                "sources": [
                  {
                    "id": "CAP4-07-00010",
                    "label": "p. 27; topic 7 point 10"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00006",
                "label": "p. 27; topic 7 point 6"
              },
              {
                "id": "CAP4-07-00007",
                "label": "p. 27; topic 7 point 7"
              },
              {
                "id": "CAP4-07-00009",
                "label": "p. 27; topic 7 point 9"
              },
              {
                "id": "CAP4-07-00010",
                "label": "p. 27; topic 7 point 10"
              }
            ]
          },
          {
            "id": "available-water-depletion-and-interval",
            "title": "Available water, allowable depletion and the irrigation interval",
            "html": "<p><em>Total available water</em> (TAW) is the storage between field capacity and permanent wilting over the root depth. The moisture difference is a volumetric fraction; multiplying it by the root depth converts it to a stored depth. Water still present at wilting is excluded.</p><p>Crops are not allowed to exhaust TAW. A <em>permitted depletion fraction</em> \\(p\\) sets the readily available water (RAW), and the interval between irrigations is that allowance divided by the net daily demand.</p><p><em>Interval</em> and <em>frequency</em> are related but different. Interval is the elapsed time between waterings; frequency is the number of waterings per unit time, the reciprocal of the interval on a regular schedule.</p>",
            "formulas": [
              {
                "label": "Total available water in mm",
                "tex": "\\text{TAW} = 1000\\,(\\theta_{\\text{FC}} - \\theta_{\\text{PWP}})\\,Z_r",
                "where": "<p>\\(\\theta\\) are volumetric water contents and \\(Z_r\\) is the root depth in metres.</p>"
              },
              {
                "label": "Readily available water",
                "tex": "\\text{RAW} = p \\times \\text{TAW}"
              },
              {
                "label": "Irrigation interval",
                "tex": "t_i = \\dfrac{\\text{RAW}}{\\text{ET}_{\\text{net}}}",
                "where": "<p>\\(\\text{ET}_{\\text{net}}\\) is the net daily crop demand after any rain.</p>"
              },
              {
                "label": "Frequency on a regular schedule",
                "tex": "f = \\dfrac{1}{t_i}"
              }
            ],
            "example": {
              "title": "Worked examples: stored water and days to irrigation",
              "html": "<p>A 0.60 m root zone with \\(\\theta_{\\text{FC}} = 0.32\\) and \\(\\theta_{\\text{PWP}} = 0.17\\):</p>\\[\\begin{aligned}\\text{TAW} &amp;= 1000 \\times 0.15 \\times 0.60 \\\\ &amp;= 90\\ \\text{mm}\\end{aligned}\\]<p>With TAW of 120 mm, \\(p = 0.40\\), ET of 6 mm/day and no rain:</p>\\[\\text{RAW} = 0.40 \\times 120 = 48\\ \\text{mm}\\]<p>so irrigation falls due 48/6 = 8 days after the soil was at field capacity. Moving a regular schedule from every 12 days to every 6 days halves the interval and doubles the frequency, from 1/12 to 1/6 per day.</p>"
            },
            "points": [
              {
                "html": "Water available for plants is the difference in soil water content between field capacity and permanent wilting point.",
                "sources": [
                  {
                    "id": "CAP4-07-00008",
                    "label": "p. 27; topic 7 point 8; topic 7 point 11"
                  }
                ]
              },
              {
                "html": "The irrigation interval is determined by the ratio of moisture held up to field capacity to the maximum crop water requirement.",
                "sources": [
                  {
                    "id": "CAP4-07-00014",
                    "label": "p. 27; topic 7 point 15"
                  }
                ]
              },
              {
                "html": "Irrigation interval means the frequency of irrigation.",
                "sources": [
                  {
                    "id": "CAP4-07-00013",
                    "label": "p. 27; topic 7 point 14"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00008",
                "label": "p. 27; topic 7 point 8; topic 7 point 11"
              },
              {
                "id": "CAP4-07-00014",
                "label": "p. 27; topic 7 point 15"
              },
              {
                "id": "CAP4-07-00013",
                "label": "p. 27; topic 7 point 14"
              }
            ]
          },
          {
            "id": "factors-controlling-irrigation-frequency",
            "title": "How soil, crop, climate and fertility change irrigation frequency",
            "html": "<p>The depletion budget shows how each commonly listed factor acts. Holding the other inputs fixed isolates one effect at a time.</p><ul><li><em>Soil:</em> better water retention gives a larger readily available store and a longer interval at the same demand.</li><li><em>Crop:</em> deeper effective rooting draws on more of the profile, so the same moisture difference stores more water.</li><li><em>Climate:</em> hot, dry weather raises the daily net demand and shortens the interval.</li><li><em>Fertility:</em> fertilizer acts only indirectly, by changing canopy growth, rooting and water uptake; excess salts can add stress.</li></ul><p>The schedule is revised from observed crop response and measured soil water, and rainfall or a changed depletion policy needs a fresh water balance.</p>",
            "example": {
              "title": "Worked examples: one factor at a time",
              "html": "<ol><li>Soil: readily available water of 36 mm and 60 mm, used at 6 mm/day, lasts 36/6 = 6 days and 60/6 = 10 days.</li><li>Crop: with a volumetric available-water difference of 0.15 and \\(p = 0.40\\), roots reaching 0.50 m and 1.00 m give TAW of 75 and 150 mm, allowances of 30 and 60 mm, and intervals of 30/5 = 6 and 60/5 = 12 days at 5 mm/day.</li><li>Climate: a 48 mm allowance lasts 48/4 = 12 days at 4 mm/day but only 48/8 = 6 days at 8 mm/day.</li></ol>"
            },
            "points": [
              {
                "html": "The frequency of irrigation depends upon soil, crop, climate and fertilizer.",
                "sources": [
                  {
                    "id": "CAP4-07-00119",
                    "label": "p. 30; topic 7 point 120"
                  }
                ]
              },
              {
                "html": "The shape of the canal cross-section is not a factor on which the frequency of irrigation depends.",
                "sources": [
                  {
                    "id": "CAP4-07-00120",
                    "label": "p. 30; topic 7 point 120"
                  }
                ]
              },
              {
                "html": "Since irrigation frequency depends on soil, a soil that holds less available water must be irrigated more frequently.",
                "sources": [
                  {
                    "id": "CAP4-07-00121",
                    "label": "p. 30; topic 7 point 120"
                  }
                ]
              },
              {
                "html": "Since irrigation frequency depends on climate, in hot and dry weather the frequency of irrigation increases.",
                "sources": [
                  {
                    "id": "CAP4-07-00122",
                    "label": "p. 30; topic 7 point 120"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00119",
                "label": "p. 30; topic 7 point 120"
              },
              {
                "id": "CAP4-07-00120",
                "label": "p. 30; topic 7 point 120"
              },
              {
                "id": "CAP4-07-00121",
                "label": "p. 30; topic 7 point 120"
              },
              {
                "id": "CAP4-07-00122",
                "label": "p. 30; topic 7 point 120"
              }
            ]
          },
          {
            "id": "consumptive-use",
            "title": "Consumptive use: evaporation plus transpiration",
            "html": "<p><em>Consumptive use</em> is the water a cropped field returns to the atmosphere: evaporation from soil and plant surfaces plus transpiration, with the small quantity retained in plant tissue normally neglected. In practice it is approximated by crop evapotranspiration.</p><p>Deep percolation also leaves the root zone, but it is not consumed. It may recharge groundwater or reappear as return flow downstream, so counting it as consumptive use would overstate what the crop takes from the system.</p>",
            "formulas": [
              {
                "label": "Consumptive use",
                "tex": "\\text{CU} \\approx E + T",
                "where": "<p>\\(E\\) is evaporation and \\(T\\) transpiration over the same period.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a daily field account",
              "html": "<p>A field loses 2 mm/day by evaporation and 4 mm/day by transpiration, while 3 mm/day percolates below the roots:</p>\\[\\text{CU} = 2 + 4 = 6\\ \\text{mm/day}\\]<p>Adding the 3 mm/day of percolation would give 9 mm/day and wrongly count recoverable water as consumed.</p>"
            },
            "points": [
              {
                "html": "Consumptive use of water, in terms of losses, consists of evaporation and transpiration.",
                "sources": [
                  {
                    "id": "CAP4-07-00011",
                    "label": "p. 27; topic 7 point 12"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00011",
                "label": "p. 27; topic 7 point 12"
              }
            ]
          },
          {
            "id": "farm-pond-storage",
            "title": "Farm ponds: storing runoff for later irrigation",
            "html": "<p>Rain and irrigation demand rarely arrive together. A <em>farm pond</em> captures runoff from a short storm or a small agricultural catchment, or diverted water, and holds it for later supplemental irrigation, bridging the gap between supply and demand.</p><p>Other farm and canal works do different jobs and provide no reserve:</p><ul><li>a diversion intake with negligible pondage passes flow on as it arrives;</li><li>a cross-regulator controls the canal water level;</li><li>a field drain removes unwanted water;</li><li>a measuring flume gauges flow.</li></ul><p>The useful yield of a pond still follows from a volume balance: inflow against evaporation, seepage, dead storage and the timing of withdrawals.</p>",
            "points": [
              {
                "html": "A farm pond is used for water storage.",
                "sources": [
                  {
                    "id": "CAP4-07-00012",
                    "label": "p. 27; topic 7 point 13"
                  }
                ]
              },
              {
                "html": "A farm pond is used for storing water on a farm.",
                "sources": [
                  {
                    "id": "CAP4-08-00035",
                    "label": "p. 31; topic 8 point 39"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00012",
                "label": "p. 27; topic 7 point 13"
              },
              {
                "id": "CAP4-08-00035",
                "label": "p. 31; topic 8 point 39"
              }
            ]
          },
          {
            "id": "gross-supply-and-kor-discharge",
            "title": "From net depth to canal-head discharge: efficiencies and kor demand",
            "html": "<p>Losses are allowed for by dividing the net need by efficiency, never by multiplying it. When each efficiency is defined on its own incoming water, the overall efficiency is their product, and applying only one of them misses a loss stage.</p><p><em>Kor watering</em> is the first important watering after sowing, needed within a short, critical establishment window called the <em>kor period</em>. Kor watering is distinct from pre-sowing watering and from the full-season delta.</p><p>Because a set depth must arrive within a short period, kor demand can govern canal size. The area, kor period, overall efficiency and running time are all needed, and every coincident demand must still be checked.</p>",
            "formulas": [
              {
                "label": "Overall efficiency",
                "tex": "\\eta = \\eta_a\\,\\eta_c",
                "where": "<p>\\(\\eta_a\\) is application efficiency and \\(\\eta_c\\) conveyance efficiency.</p>"
              },
              {
                "label": "Gross diversion depth",
                "tex": "d_{\\text{gross}} = \\dfrac{d_{\\text{net}}}{\\eta_a\\,\\eta_c}"
              },
              {
                "label": "Canal-head discharge",
                "tex": "Q_{\\text{head}} = \\dfrac{V_{\\text{net}}}{t\\,\\eta}",
                "where": "<p>\\(t\\) is the running time in seconds and \\(\\eta\\) the overall delivery efficiency.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: gross depth and kor discharge",
              "html": "<p>Net storage of 72 mm with application efficiency 0.80 and conveyance efficiency 0.90:</p>\\[\\begin{aligned} d_{\\text{gross}} &amp;= \\dfrac{72}{0.80 \\times 0.90} \\\\ &amp;= \\dfrac{72}{0.72} = 100\\ \\text{mm} \\end{aligned}\\]<p>Kor demand of 0.14 m net on 864 ha within 14 days, running continuously at overall efficiency 0.70:</p><ol><li>Net volume: 864 × 10000 × 0.14 = 1209600 m³.</li><li>Fourteen days contain 14 × 86400 = 1209600 s, so the net flow is 1.0 cumec.</li><li>Canal-head flow: 1.0/0.70 = 1.429 cumecs.</li></ol>"
            },
            "points": [
              {
                "html": "The water in a canal is based on the gross irrigation requirement.",
                "sources": [
                  {
                    "id": "CAP4-07-00031",
                    "label": "p. 27; topic 7 point 31"
                  }
                ]
              },
              {
                "html": "Kor watering is the first watering given to a crop when it is a few centimetres high.",
                "sources": [
                  {
                    "id": "CAP4-07-00106",
                    "label": "p. 29; topic 7 point 108"
                  }
                ]
              },
              {
                "html": "The capacity of an irrigation canal is determined by the kor water depth.",
                "sources": [
                  {
                    "id": "CAP4-07-00029",
                    "label": "p. 27; topic 7 point 29"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00031",
                "label": "p. 27; topic 7 point 31"
              },
              {
                "id": "CAP4-07-00106",
                "label": "p. 29; topic 7 point 108"
              },
              {
                "id": "CAP4-07-00029",
                "label": "p. 27; topic 7 point 29"
              }
            ]
          },
          {
            "id": "governing-capacity-and-crop-ratio",
            "title": "Governing canal capacity and the crop ratio",
            "html": "<p>Canal design discharge follows the <em>largest coincident requirement</em> at the design boundary, not the sum of every demand in the year. Compare the concurrent totals season by season, including perennial crops that draw water in both seasons. Adding non-overlapping seasons oversizes the canal; ignoring the perennials undersizes it.</p><p>The <em>crop ratio</em> compares seasonal irrigated areas and must be computed from the actual cropping programme. Always check which area is the numerator, because Rabi over Kharif and Kharif over Rabi are reciprocals. No fixed value such as 2 is a law of irrigation.</p>",
            "formulas": [
              {
                "label": "Crop ratio as defined here",
                "tex": "r = \\dfrac{A_{\\text{Rabi}}}{A_{\\text{Kharif}}}"
              }
            ],
            "example": {
              "title": "Worked examples: peak demand and crop ratio",
              "html": "<ul><li>At one canal head, Rabi 2.4 cumecs plus concurrent perennial 0.6 gives 3.0 cumecs, and Kharif 3.0 plus concurrent perennial 0.8 gives 3.8 cumecs. With non-overlapping seasons the design capacity is the larger, 3.8 cumecs, not the sum of 6.8.</li><li>With 2400 ha under Rabi and 1600 ha under Kharif, \\(r = 2400/1600 = 1.5\\), or 3:2; the reversed definition gives 2:3.</li></ul>"
            },
            "points": [
              {
                "html": "The design discharge of a canal is based on the maximum irrigation water requirement.",
                "sources": [
                  {
                    "id": "CAP4-07-00027",
                    "label": "p. 27; topic 7 point 27"
                  }
                ]
              },
              {
                "html": "The ratio of irrigated area under Rabi crops to that under Kharif crops is 2.",
                "sources": [
                  {
                    "id": "CAP4-07-00104",
                    "label": "p. 29; topic 7 point 105"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00027",
                "label": "p. 27; topic 7 point 27"
              },
              {
                "id": "CAP4-07-00104",
                "label": "p. 29; topic 7 point 105"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Net irrigation requirement",
            "tex": "\\text{NIR} = \\text{ET}_c - P_e",
            "note": "Simplified balance with no groundwater, storage or leaching terms."
          },
          {
            "label": "Duty from base period and delta",
            "tex": "D = \\dfrac{8.64\\,B}{\\Delta}",
            "note": "D in ha/cumec, B in days, delta in metres."
          },
          {
            "label": "Duty from area and discharge",
            "tex": "D = \\dfrac{A}{Q}"
          },
          {
            "label": "Volume from depth and area",
            "tex": "V = A\\,d"
          },
          {
            "label": "Total available water",
            "tex": "\\text{TAW} = 1000\\,(\\theta_{\\text{FC}} - \\theta_{\\text{PWP}})\\,Z_r"
          },
          {
            "label": "Readily available water",
            "tex": "\\text{RAW} = p \\times \\text{TAW}"
          },
          {
            "label": "Irrigation interval",
            "tex": "t_i = \\dfrac{\\text{RAW}}{\\text{ET}_{\\text{net}}}"
          },
          {
            "label": "Frequency",
            "tex": "f = \\dfrac{1}{t_i}"
          },
          {
            "label": "Consumptive use",
            "tex": "\\text{CU} \\approx E + T",
            "note": "Deep percolation is not consumptive."
          },
          {
            "label": "Gross diversion depth",
            "tex": "d_{\\text{gross}} = \\dfrac{d_{\\text{net}}}{\\eta_a\\,\\eta_c}"
          },
          {
            "label": "Canal-head discharge",
            "tex": "Q_{\\text{head}} = \\dfrac{V_{\\text{net}}}{t\\,\\eta}"
          },
          {
            "label": "Crop ratio as defined here",
            "tex": "r = \\dfrac{A_{\\text{Rabi}}}{A_{\\text{Kharif}}}"
          }
        ],
        "cautions": [],
        "gaps": [
          "Command-area terms such as gross and culturable command area and intensity of irrigation are named in the syllabus but not tested by these capsule questions.",
          "Methods for estimating crop evapotranspiration, such as crop coefficients or pan and climatic formulae, are not covered; ET values appear only as given inputs.",
          "Leaching requirement, groundwater contribution and paddy land-preparation water are excluded from the simplified water balances."
        ]
      },
      "ACiE0702": {
        "code": "ACiE0702",
        "questionCount": 28,
        "format": 2,
        "summary": "<p>Canal design covers canal classes and alignment, earthwork and section geometry, freeboard and lining, sediment behaviour, and the classical design methods for alluvial and lined channels. The capsule questions test inundation canals and the role of the main canal, ridge and side-slope alignments, balanced cut and fill, trapezoidal area and lining quantities, freeboard, aggradation and bed load, silting, Kennedy's critical velocity, Lacey's regime relations, the Shields threshold and Manning-based sizing of lined canals.</p>",
        "blocks": [
          {
            "id": "canal-classes-and-network-roles",
            "title": "Canal classes by supply and roles within the network",
            "html": "<p>Canals are classified partly by how dependable their supply is. An <em>inundation canal</em> is an ungated diversion that draws useful water mainly when seasonal floods lift the river above its intake sill, so it runs during high stages and may be dry otherwise. A <em>perennial canal</em> seeks a dependable, regulated supply through its operating season, usually from headworks that control the river level. The classification concerns availability and control, not lining material.</p><p>Within a conventional network the <em>main canal</em> performs bulk conveyance. It carries water from the headworks to branch canals and distributaries, which feed minor channels, watercourses and finally the farms.</p><p>Where no direct farm outlets are authorized on it, the main canal still serves irrigation: its job is to deliver the supply to the distribution system rather than to water fields itself. It is neither a collector for field drainage nor a seasonal store.</p>",
            "points": [
              {
                "html": "A canal normally used for diversion of the flood water of a river is an inundation canal.",
                "sources": [
                  {
                    "id": "CAP4-07-00020",
                    "label": "p. 27; topic 7 point 21"
                  }
                ]
              },
              {
                "html": "The main canal is not considered to be used for direct irrigation.",
                "sources": [
                  {
                    "id": "CAP4-07-00028",
                    "label": "p. 27; topic 7 point 28"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00020",
                "label": "p. 27; topic 7 point 21"
              },
              {
                "id": "CAP4-07-00028",
                "label": "p. 27; topic 7 point 28"
              }
            ]
          },
          {
            "id": "canal-alignment-choices",
            "title": "Ridge, side-slope and alluvial-plain alignments",
            "html": "<p>A <em>ridge</em> or <em>watershed alignment</em> follows the drainage divide. Natural drains fall away on both sides, so the canal can command land on both banks while crossing few drains. The advantage is conditional: the survey must still show an adequate canal grade and enough head at the fields.</p><p>A <em>side-slope alignment</em> runs down the hillside roughly parallel to the natural drainage lines, so in the ideal case it meets few drains. Local gullies, deviations and small catchments can still cut across it, and where the ground falls faster than the permissible bed slope, falls are needed. It does not necessarily command both sides as a ridge canal does, and unlike a contour canal it does not cut across every drainage line.</p><p>Gravity canal irrigation suits extensive <em>alluvial plains</em>: gentle grades, broad cultivable land and a dependable river supply at a suitable level let a canal command wide areas. Alluvium varies greatly in permeability and erodibility, however, so seepage, sediment and drainage still need investigation.</p>",
            "points": [
              {
                "html": "Irrigation canals are generally aligned along the ridge line.",
                "sources": [
                  {
                    "id": "CAP4-07-00041",
                    "label": "p. 28; topic 7 point 41"
                  }
                ]
              },
              {
                "html": "A side slope canal does not need cross drainage structures.",
                "sources": [
                  {
                    "id": "CAP4-07-00024",
                    "label": "p. 27; topic 7 point 24"
                  }
                ]
              },
              {
                "html": "Canal irrigation is generally preferred in alluvial soil regions.",
                "sources": [
                  {
                    "id": "CAP4-07-00025",
                    "label": "p. 27; topic 7 point 25"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00041",
                "label": "p. 28; topic 7 point 41"
              },
              {
                "id": "CAP4-07-00024",
                "label": "p. 27; topic 7 point 24"
              },
              {
                "id": "CAP4-07-00025",
                "label": "p. 27; topic 7 point 25"
              }
            ]
          },
          {
            "id": "earthwork-and-section-geometry",
            "title": "Balanced earthwork and trapezoidal section geometry",
            "html": "<p>A canal in partial cutting and partial filling is most economical at the <em>balancing depth</em>, where usable excavation just supplies the banks. The comparison must use compatible volume bases. In-situ cut and compacted fill differ through shrinkage or bulking, and unsuitable soil cannot be used, so the balance compares the usable compacted yield of the cut with the bank volume required.</p><p>A symmetrical trapezoid with bed width \\(B\\), depth \\(d\\) and side slope \\(z\\) horizontal to 1 vertical is a central rectangle plus two side triangles. Each sloping face has a slant width found by Pythagoras, which sets the lining quantity. Cutting depth need not equal flow depth.</p><p>Area, wetted perimeter and hydraulic radius are geometric properties of the wetted section at a stated depth. <em>Discharge</em> is a flow variable, the volume passing per unit time, which the geometry constrains but does not fix.</p>",
            "formulas": [
              {
                "label": "Usable compacted fill from a cut",
                "tex": "V_{\\text{fill}} = k\\,V_{\\text{cut}}",
                "where": "<p>\\(k\\) is the compacted yield per in-situ cubic metre of usable cut.</p>"
              },
              {
                "label": "Trapezoidal area",
                "tex": "A = B\\,d + z\\,d^2"
              },
              {
                "label": "Lining area of both sloping faces",
                "tex": "A_{\\text{L}} = 2\\,L\\,d\\,\\sqrt{1 + z^2}",
                "where": "<p>\\(L\\) is the reach length and \\(d\\) the vertical height of each face.</p>"
              },
              {
                "label": "Discharge",
                "tex": "Q = A\\,V"
              }
            ],
            "example": {
              "title": "Worked examples: cut, section area and lining",
              "html": "<ol><li>A cut of 1000 m³ in situ with a compacted yield of 0.90 balances 1000 × 0.90 = 900 m³ of compacted bank, not 1000 m³.</li><li>Bed width 4 m, cutting depth 2 m, side slopes 1.5 H:1 V: the rectangle gives 4 × 2 = 8 m² and the two triangles \\(z d^2 = 1.5 \\times 4 = 6\\) m², a total of 14 m².</li><li>A face of vertical height 2 m at 1.5 H:1 V has slant width \\(2\\sqrt{3.25} = 3.60555\\) m, so both faces over 50 m need 2 × 50 × 3.60555 = 360.56 m².</li></ol><p>Dropping the square root, or counting only one face, gives a wrong lining quantity.</p>"
            },
            "points": [
              {
                "html": "The balanced depth of cutting of a canal is the depth at which the volume of cutting equals the volume of filling.",
                "sources": [
                  {
                    "id": "CAP4-07-00015",
                    "label": "p. 27; topic 7 point 16"
                  }
                ]
              },
              {
                "html": "If \\(B\\) is the bed width and \\(d\\) the depth of a trapezoidal channel with side slopes of \\(s: 1\\) (H: V), the area of cross-section is \\(Bd + sd^2\\).",
                "sources": [
                  {
                    "id": "CAP4-07-00037",
                    "label": "p. 27; topic 7 point 37"
                  }
                ]
              },
              {
                "html": "For an irrigation channel with side slopes of 1: \\(S\\) (V: H), depth \\(y\\) and length \\(L\\), the total area of the side slopes is \\(2Ly\\sqrt{1 + S^2}\\).",
                "sources": [
                  {
                    "id": "CAP4-07-00038",
                    "label": "p. 27; topic 7 point 38"
                  }
                ]
              },
              {
                "html": "Discharge is not a geometric cross-sectional parameter of a canal.",
                "sources": [
                  {
                    "id": "CAP4-07-00128",
                    "label": "p. 30; topic 7 point 127"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00015",
                "label": "p. 27; topic 7 point 16"
              },
              {
                "id": "CAP4-07-00037",
                "label": "p. 27; topic 7 point 37"
              },
              {
                "id": "CAP4-07-00038",
                "label": "p. 27; topic 7 point 38"
              },
              {
                "id": "CAP4-07-00128",
                "label": "p. 30; topic 7 point 127"
              }
            ]
          },
          {
            "id": "freeboard-and-lining-benefits",
            "title": "Freeboard, frost protection and the benefits of lining",
            "html": "<p><em>Freeboard</em> is the vertical margin from the design water surface to the top of the bank or lining. It absorbs waves, surges and operating fluctuations, reducing the risk of overtopping, and it is not part of the flow area at the design level.</p><p>Freeboard does not protect a lining from frost. Frost damage depends on moisture trapped behind the lining, freezing exposure, drainage and the freeze-thaw resistance of materials and details, so poorly drained panels can crack however generous the margin above the water.</p><p><em>Lining</em> reduces seepage and raises conveyance efficiency. With a fixed head supply and unchanged crop needs and field efficiency, the area the supply can support rises in proportion to conveyance efficiency.</p>",
            "formulas": [
              {
                "label": "Area supported after lining",
                "tex": "A_2 = A_1\\,\\dfrac{\\eta_2}{\\eta_1}",
                "where": "<p>Same head supply, crop demand and field efficiency; \\(\\eta\\) is conveyance efficiency.</p>"
              }
            ],
            "example": {
              "title": "Worked example: raising conveyance efficiency",
              "html": "<p>A head supply serving 600 ha at conveyance efficiency 0.60 is lined, raising the efficiency to 0.80:</p>\\[A_2 = 600 \\times \\dfrac{0.80}{0.60} = 800\\ \\text{ha}\\]"
            },
            "points": [
              {
                "html": "The purpose of providing freeboard in a canal is stability against overtopping and safety against frost crack.",
                "sources": [
                  {
                    "id": "CAP4-07-00022",
                    "label": "p. 27; topic 7 point 23"
                  }
                ]
              },
              {
                "html": "The vertical distance between the full supply level and the top of a canal bank, provided for safety against overtopping, is called freeboard.",
                "sources": [
                  {
                    "id": "CAP4-07-00023",
                    "label": "p. 27; topic 7 point 23"
                  }
                ]
              },
              {
                "html": "Due to lining of a channel section, the command area increases.",
                "sources": [
                  {
                    "id": "CAP4-07-00021",
                    "label": "p. 27; topic 7 point 22"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00022",
                "label": "p. 27; topic 7 point 23"
              },
              {
                "id": "CAP4-07-00023",
                "label": "p. 27; topic 7 point 23"
              },
              {
                "id": "CAP4-07-00021",
                "label": "p. 27; topic 7 point 22"
              }
            ]
          },
          {
            "id": "aggradation-and-bed-load",
            "title": "Aggradation, degradation and modes of sediment transport",
            "html": "<p>A reach <em>aggrades</em> when more sediment enters than leaves: stored bed sediment grows and the mean bed level rises. <em>Degradation</em> is the reverse, net erosion that lowers the bed. Sediment may pass through a regime reach without either happening, but a sustained positive storage balance cannot coexist with an unchanged mean bed.</p><p>Sediment moves in three broad modes:</p><ul><li><em>bed load</em>, grains that roll, slide or make short hops along the bed, the hopping motion being <em>saltation</em>;</li><li><em>suspended load</em>, held higher in the flow by turbulence, including the fine wash load;</li><li><em>dissolved load</em>, carried in solution.</li></ul>",
            "formulas": [
              {
                "label": "Sediment budget of a reach",
                "tex": "\\Delta S = G_{\\text{in}} - G_{\\text{out}}",
                "where": "<p>\\(G\\) is the sediment moved over the period; \\(\\Delta S \\gt 0\\) means aggradation.</p>"
              }
            ],
            "points": [
              {
                "html": "An aggrading river or channel is one that is silting.",
                "sources": [
                  {
                    "id": "CAP4-07-00018",
                    "label": "p. 27; topic 7 point 19"
                  }
                ]
              },
              {
                "html": "Sediment that moves by rolling, sliding and bouncing along the bed is called bed load.",
                "sources": [
                  {
                    "id": "CAP4-07-00036",
                    "label": "p. 27; topic 7 point 36"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00018",
                "label": "p. 27; topic 7 point 19"
              },
              {
                "id": "CAP4-07-00036",
                "label": "p. 27; topic 7 point 36"
              }
            ]
          },
          {
            "id": "silting-and-capacity-loss",
            "title": "Silting and the loss of canal capacity",
            "html": "<p><em>Silting</em> shrinks the effective flow area under the permitted water level and can raise boundary resistance. With the available head unchanged, the canal then conveys less water. If operators hold the discharge instead, water levels rise; the outcome depends on which condition is fixed.</p><p>Deposition follows from a sediment-budget imbalance: when a reach receives more sediment than its velocity and shear can carry onward, the excess settles. Intakes that admit sediment-rich monsoon flow into slow canal reaches are typical places for this, so a rising bed with declining capacity points first to net deposition.</p>",
            "points": [
              {
                "html": "Silting in a channel causes a decrease in discharge.",
                "sources": [
                  {
                    "id": "CAP4-07-00017",
                    "label": "p. 27; topic 7 point 18"
                  }
                ]
              },
              {
                "html": "The problem in Nepal for artificial channels is the formation of alluvial soil deposits.",
                "sources": [
                  {
                    "id": "CAP4-07-00030",
                    "label": "p. 27; topic 7 point 30"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00017",
                "label": "p. 27; topic 7 point 18"
              },
              {
                "id": "CAP4-07-00030",
                "label": "p. 27; topic 7 point 30"
              }
            ]
          },
          {
            "id": "kennedy-critical-velocity-method",
            "title": "Kennedy's critical velocity and Garrett's diagrams",
            "html": "<p>Kennedy's method is empirical. It came from observations on the <em>Upper Bari Doab Canal</em> system in Punjab, where he sought the <em>critical velocity</em> at which a channel neither silts nor scours and related it to the depth of water.</p><p>The <em>critical-velocity ratio</em> \\(m\\) adjusts that reference velocity for the sediment grade, so designs of equal depth but different silt take different values of \\(m\\); coarser sediment calls for a larger ratio. This critical velocity concerns silting and scour. It is not the critical-flow condition at a Froude number of one, nor the settling speed of a grain in still water.</p><p>Design by Kennedy needs repeated trial calculations, so <em>Garrett's diagrams</em> were prepared as graphical aids for Kennedy-based design. They inherit Kennedy's calibration and assumptions and are unrelated to foundation-seepage methods such as those of Lane or Khosla. Because the coefficients came from one canal system, transferring them to other sediment and channel conditions needs care.</p>",
            "formulas": [
              {
                "label": "Kennedy's critical velocity",
                "tex": "V_0 = 0.55\\,m\\,y^{0.64}",
                "where": "<p>\\(V_0\\) in m/s, water depth \\(y\\) in metres and \\(m\\) the critical-velocity ratio.</p>"
              }
            ],
            "example": {
              "title": "Worked example: depth 0.75 m with m equal to 1",
              "html": "<p>With a water depth of 0.75 m and \\(m = 1\\):</p>\\[\\begin{aligned} y^{0.64} &amp;= 0.75^{0.64} = 0.831839 \\\\ V_0 &amp;= 0.55 \\times 0.831839 \\\\ &amp;= 0.457511\\ \\text{m/s} \\end{aligned}\\]<p>Rounded to three decimals this is 0.458 m/s; 0.457 would be a truncation.</p>"
            },
            "points": [
              {
                "html": "The critical velocity ratio was introduced in Kennedy's equation of critical velocity to take into account the effect of silt grade.",
                "sources": [
                  {
                    "id": "CAP4-07-00016",
                    "label": "p. 27; topic 7 point 17"
                  }
                ]
              },
              {
                "html": "Kennedy developed his theory based on observations from the upper Bari Doab Canal, Punjab.",
                "sources": [
                  {
                    "id": "CAP4-07-00129",
                    "label": "p. 30; topic 7 point 129"
                  }
                ]
              },
              {
                "html": "Garrett's diagrams are based on Kennedy's theory.",
                "sources": [
                  {
                    "id": "CAP4-07-00039",
                    "label": "p. 27; topic 7 point 39"
                  }
                ]
              },
              {
                "html": "Using Kennedy's equation, if the depth \\(D = 0.75\\) m and \\(m = 1\\), the critical velocity is 0.4575 m/s.",
                "sources": [
                  {
                    "id": "CAP4-07-00124",
                    "label": "p. 30; topic 7 point 122"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00016",
                "label": "p. 27; topic 7 point 17"
              },
              {
                "id": "CAP4-07-00129",
                "label": "p. 30; topic 7 point 129"
              },
              {
                "id": "CAP4-07-00039",
                "label": "p. 27; topic 7 point 39"
              },
              {
                "id": "CAP4-07-00124",
                "label": "p. 30; topic 7 point 122"
              }
            ]
          },
          {
            "id": "lacey-regime-theory",
            "title": "Lacey's regime concept and velocity relations",
            "html": "<p>Lacey's <em>true regime</em> is an idealization: an alluvial channel whose bed and banks are free to adjust, carrying a sustained water discharge and sediment charge on a stable grade, with neither progressive deposition nor scour. Sediment still moves through the reach, but in balance.</p><p>A rigid lined bed, a fixed rock section, or a reach steadily lowering its bed under a sediment deficit does not satisfy the premise. Nor does a boundary that scours more easily than it deposits, because a regime channel must be as free to deposit as to erode.</p><p>Two Lacey relations are used for comparisons. In the velocity relation \\(V\\) varies with the square root of the product of silt factor \\(f\\) and hydraulic radius \\(R\\); in the regime resistance form it varies with \\(R^{2/3} S^{1/3}\\). Such ratios hold only for stated compatible inputs, not with every other regime quantity held fixed.</p>",
            "formulas": [
              {
                "label": "Lacey velocity relation",
                "tex": "V = \\sqrt{\\dfrac{2 f R}{5}}",
                "where": "<p>\\(f\\) is Lacey's silt factor and \\(R\\) the hydraulic radius in metres.</p>"
              },
              {
                "label": "Lacey regime resistance form",
                "tex": "V = C\\,R^{2/3}\\,S^{1/3}"
              }
            ],
            "example": {
              "title": "Worked examples: velocity ratios",
              "html": "<p>Resistance form, with eight times the radius and one-eighth of the slope:</p>\\[\\begin{aligned} \\dfrac{V_2}{V_1} &amp;= 8^{2/3} \\times \\left(\\tfrac{1}{8}\\right)^{1/3} \\\\ &amp;= 4 \\times 0.5 = 2 \\end{aligned}\\]<p>Manning's one-half slope exponent would instead give \\(4 \\times 8^{-1/2} \\approx 1.41\\). Velocity relation, with \\(f\\) four times and \\(R\\) nine times as large:</p>\\[\\dfrac{V_2}{V_1} = \\sqrt{4 \\times 9} = 6\\]<p>Treating \\(V\\) as directly proportional to \\(fR\\) would give 36.</p>"
            },
            "points": [
              {
                "html": "A channel in true regime is not one that can be scoured more easily than it can be deposited.",
                "sources": [
                  {
                    "id": "CAP4-07-00032",
                    "label": "p. 27; topic 7 point 32"
                  }
                ]
              },
              {
                "html": "Lacey's regime velocity is proportional to \\(R^{2/3}S^{1/3}\\).",
                "sources": [
                  {
                    "id": "CAP4-07-00034",
                    "label": "p. 27; topic 7 point 34"
                  }
                ]
              },
              {
                "html": "In Lacey's regime theory, the velocity of flow is related to the silt factor \\(f\\) and hydraulic radius \\(R\\) by \\(V = \\sqrt{\\dfrac{2fR}{5}}\\).",
                "sources": [
                  {
                    "id": "CAP4-07-00113",
                    "label": "p. 29; topic 7 point 114"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00032",
                "label": "p. 27; topic 7 point 32"
              },
              {
                "id": "CAP4-07-00034",
                "label": "p. 27; topic 7 point 34"
              },
              {
                "id": "CAP4-07-00113",
                "label": "p. 29; topic 7 point 114"
              }
            ]
          },
          {
            "id": "tractive-force-and-scour",
            "title": "Tractive force, the Shields threshold and canal scour",
            "html": "<p>The <em>tractive-force</em> approach compares the shear stress the flow exerts on the boundary with the resistance of the bed grains. For non-cohesive grains the <em>Shields parameter</em> is the bed shear divided by the submerged grain weight per unit area; at incipient motion it takes a critical value that depends on the grain and flow regime.</p><p><em>Scour</em> begins when the applied bed shear exceeds this resistance. Faster flow in an erodible reach usually raises the shear, entrains grains and, if the incoming sediment cannot replace them, lowers the bed. Faster flow raises rather than lowers transport capacity, so it does not cause deposition.</p><p>Velocity is only a shorthand: depth, turbulence, grain resistance and sediment supply also matter, and a regime section is not maintained automatically during rapid gate changes.</p>",
            "formulas": [
              {
                "label": "Shields parameter",
                "tex": "\\theta = \\dfrac{\\tau}{(\\rho_s - \\rho)\\,g\\,d}",
                "where": "<p>\\(\\rho_s\\) and \\(\\rho\\) are grain and water densities and \\(d\\) the grain size.</p>"
              },
              {
                "label": "Critical bed shear",
                "tex": "\\tau_c = \\theta_c\\,(\\rho_s - \\rho)\\,g\\,d"
              }
            ],
            "example": {
              "title": "Worked example: a coarse bed with an adopted threshold of 0.056",
              "html": "<p>Grain density 2650 kg/m³, water density 1000 kg/m³, grain size 0.010 m and \\(g = 9.81\\ \\text{m/s}^2\\):</p>\\[\\begin{aligned} (\\rho_s - \\rho)\\,g\\,d &amp;= 1650 \\times 9.81 \\times 0.010 \\\\ &amp;= 161.865\\ \\text{Pa} \\\\ \\tau_c &amp;= 0.056 \\times 161.865 \\\\ &amp;= 9.06\\ \\text{Pa} \\end{aligned}\\]<p>This is an incipient-motion estimate, before any design allowance for side slopes or safety.</p>"
            },
            "points": [
              {
                "html": "For the design of non-scouring channels in coarse alluvium, Shields' entrainment function should be 0.056.",
                "sources": [
                  {
                    "id": "CAP4-07-00040",
                    "label": "p. 28; topic 7 point 40"
                  }
                ]
              },
              {
                "html": "Canal scouring primarily results from an increase in velocity.",
                "sources": [
                  {
                    "id": "CAP4-07-00130",
                    "label": "p. 30; topic 7 point 130"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00040",
                "label": "p. 28; topic 7 point 40"
              },
              {
                "id": "CAP4-07-00130",
                "label": "p. 30; topic 7 point 130"
              }
            ]
          },
          {
            "id": "lined-canal-sections-and-manning",
            "title": "Lined canal sections and Manning-based sizing",
            "html": "<p>A lined canal has a fixed boundary, so it is sized with a <em>resistance relation</em> such as Manning's rather than with a regime theory for adjustable alluvial beds. The hydraulic radius uses the wetted perimeter only; the free surface is excluded. Manning is one check among several: freeboard, lining stability, velocity limits and economy complete the design.</p><p>Trial sizing often starts from continuity: an adopted mean velocity fixes the flow area, and the section geometry then gives the bed width. The adopted velocity must afterwards be shown to be achievable on the available slope.</p>",
            "formulas": [
              {
                "label": "Manning's equation",
                "tex": "Q = \\dfrac{1}{n}\\,A\\,R^{2/3}\\,S^{1/2}",
                "where": "<p>\\(R = A/P\\), with \\(P\\) the wetted perimeter.</p>"
              },
              {
                "label": "Continuity for trial sizing",
                "tex": "A = \\dfrac{Q}{V}"
              },
              {
                "label": "Trapezoidal bed width from area",
                "tex": "b = \\dfrac{A}{y} - z\\,y",
                "where": "<p>From \\(A = y(b + zy)\\) with side slope \\(z\\) H:1 V.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: Manning discharge and trial bed width",
              "html": "<p>A rectangular lined channel 4 m wide flowing 2 m deep, with \\(n = 0.020\\) and \\(S = 0.0004\\): \\(A = 8\\) m² and \\(P = 4 + 2 \\times 2 = 8\\) m, so \\(R = 1\\) m and \\(\\sqrt{S} = 0.02\\).</p>\\[\\begin{aligned} Q &amp;= \\dfrac{1}{0.020} \\times 8 \\times 1^{2/3} \\times 0.02 \\\\ &amp;= 8.00\\ \\text{cumecs} \\end{aligned}\\]<p>A trial trapezoid for 90 cumecs at an adopted 2 m/s needs \\(A = 90/2 = 45\\) m². With depth 3 m and side slopes 1.5 H:1 V,</p>\\[b = \\dfrac{45}{3} - 1.5 \\times 3 = 10.50\\ \\text{m}\\]"
            },
            "points": [
              {
                "html": "A lined alluvial canal is best designed on the basis of Manning's theory.",
                "sources": [
                  {
                    "id": "CAP4-07-00100",
                    "label": "p. 29; topic 7 point 101"
                  }
                ]
              },
              {
                "html": "Canal sections used to carry a discharge above 84 cumecs are trapezoidal.",
                "sources": [
                  {
                    "id": "CAP4-07-00112",
                    "label": "p. 29; topic 7 point 113"
                  }
                ]
              },
              {
                "html": "Triangular lined sections are adopted when the discharge in the channel is less than 85 cumecs.",
                "sources": [
                  {
                    "id": "CAP4-07-00043",
                    "label": "p. 28; topic 7 point 43"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00100",
                "label": "p. 29; topic 7 point 101"
              },
              {
                "id": "CAP4-07-00112",
                "label": "p. 29; topic 7 point 113"
              },
              {
                "id": "CAP4-07-00043",
                "label": "p. 28; topic 7 point 43"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Kennedy's critical velocity",
            "tex": "V_0 = 0.55\\,m\\,y^{0.64}",
            "note": "Metre-second units; y is the water depth."
          },
          {
            "label": "Lacey velocity relation",
            "tex": "V = \\sqrt{\\dfrac{2 f R}{5}}"
          },
          {
            "label": "Lacey regime resistance form",
            "tex": "V = C\\,R^{2/3}\\,S^{1/3}"
          },
          {
            "label": "Manning's equation",
            "tex": "Q = \\dfrac{1}{n}\\,A\\,R^{2/3}\\,S^{1/2}"
          },
          {
            "label": "Hydraulic radius",
            "tex": "R = \\dfrac{A}{P}",
            "note": "The free surface is excluded from P."
          },
          {
            "label": "Continuity",
            "tex": "Q = A\\,V"
          },
          {
            "label": "Trapezoidal area",
            "tex": "A = B\\,d + z\\,d^2",
            "note": "Side slope z horizontal to 1 vertical."
          },
          {
            "label": "Lining area of both sloping faces",
            "tex": "A_{\\text{L}} = 2\\,L\\,d\\,\\sqrt{1 + z^2}"
          },
          {
            "label": "Shields critical shear",
            "tex": "\\tau_c = \\theta_c\\,(\\rho_s - \\rho)\\,g\\,d"
          },
          {
            "label": "Usable compacted fill from a cut",
            "tex": "V_{\\text{fill}} = k\\,V_{\\text{cut}}"
          },
          {
            "label": "Area supported after lining",
            "tex": "A_2 = A_1\\,\\dfrac{\\eta_2}{\\eta_1}",
            "note": "Same supply, crop demand and field efficiency."
          },
          {
            "label": "Sediment budget of a reach",
            "tex": "\\Delta S = G_{\\text{in}} - G_{\\text{out}}"
          }
        ],
        "cautions": [],
        "gaps": [
          "The full set of Lacey regime equations for wetted perimeter, area, regime slope and silt factor from grain size is not tested; only velocity relations appear.",
          "Tractive-force distribution on side slopes and bank-stability reduction factors are not developed by these questions.",
          "Canal network layout details such as distributary spacing, outlet location and the derivation of the balancing depth are outside this capsule coverage.",
          "Lining materials, costs and seepage-loss estimation appear only indirectly through efficiency and section-shape questions."
        ]
      },
      "ACiE0703": {
        "code": "ACiE0703",
        "questionCount": 28,
        "format": 2,
        "summary": "<p>Diversion headworks raise and control a river so that a canal can draw water with little sediment, and they must survive the seepage beneath their floors. This subchapter covers weirs and barrages and their profiles, intake siting, the divide wall, fish ladder and head regulator, sediment exclusion and undersluice capacity, and the seepage theories of Bligh, Lane and Khosla. The capsule questions test component functions, piping and uplift failure, creep-length and exit-gradient calculations, downstream cutoffs and frictional sliding resistance.</p>",
        "blocks": [
          {
            "id": "weir-and-barrage-functions",
            "title": "Weirs and barrages: raising the pond for diversion",
            "html": "<p>A river may carry enough seasonal flow yet stand too low to feed a gravity canal. In a diversion scheme the main job of a <em>weir</em> or <em>barrage</em> is to raise or control the upstream water level so that the canal can draw water under the available head. It redistributes hydraulic levels; it does not create water, supply pumping energy or act chiefly as seasonal storage.</p><p>The two differ in how the pond level is held. A weir relies mainly on a raised fixed crest, sometimes topped with shutters or small gates. A barrage holds its pond chiefly with gates spanning bays over relatively low sills, and those gates can be opened widely to pass floods.</p><p>Because some weirs also carry gates, the mere presence of gates is an oversimplified test. Predominantly gated control over low sills is the better description of a barrage.</p>",
            "points": [
              {
                "html": "The main function of a weir or barrage is to increase the water height.",
                "sources": [
                  {
                    "id": "CAP4-07-00050",
                    "label": "p. 28; topic 7 point 50"
                  }
                ]
              },
              {
                "html": "The major differentiating point between weirs and barrages is the presence of gates.",
                "sources": [
                  {
                    "id": "CAP4-07-00051",
                    "label": "p. 28; topic 7 point 51"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00050",
                "label": "p. 28; topic 7 point 50"
              },
              {
                "id": "CAP4-07-00051",
                "label": "p. 28; topic 7 point 51"
              }
            ]
          },
          {
            "id": "weir-crest-profiles",
            "title": "Weir profiles: the sloping glacis and the ogee crest",
            "html": "<p>Weir profiles follow hydraulic purpose. A <em>sloping-glacis weir</em> of masonry or concrete carries the overflow down a sloping downstream face, the glacis, into a protected basin where a hydraulic jump dissipates the energy. Its geometry and protection identify the profile family, not the date it came into use.</p><p>An <em>ogee crest</em> is shaped to follow the underside of a free nappe at a chosen design head. At that head the overflow stays attached and efficient and the pressures on the crest remain compatible with the design. Away from the design head the surface pressures and the discharge coefficient change, so the profile is tied to its intended operating range.</p>",
            "points": [
              {
                "html": "The masonry or concrete sloping weir is of recent origin.",
                "sources": [
                  {
                    "id": "CAP4-07-00048",
                    "label": "p. 28; topic 7 point 48"
                  }
                ]
              },
              {
                "html": "The most efficient weir shape is parabolic.",
                "sources": [
                  {
                    "id": "CAP4-07-00049",
                    "label": "p. 28; topic 7 point 49"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00048",
                "label": "p. 28; topic 7 point 48"
              },
              {
                "id": "CAP4-07-00049",
                "label": "p. 28; topic 7 point 49"
              }
            ]
          },
          {
            "id": "intake-siting-criteria",
            "title": "Choosing a site for a canal intake",
            "html": "<p>An intake site is judged on hydraulic reliability, not on labels. A gravity intake needs:</p><ul><li>adequate head in the low-flow season as well as in floods;</li><li>a stable approach channel that does not shoal or migrate, with a manageable sediment regime;</li><li>suitable foundations and flood access;</li><li>freedom from conflicts such as navigation.</li></ul><p>When two sites offer equal diversion head, the one with a stable approach and navigation kept separate is the better preliminary choice, because unstable shoaling threatens both intake reliability and vessel passage.</p><p>Each deficiency must be recognized for what it is. Migrating shoals are a sediment-stability risk that needs investigation; a dry-season level below the required intake level is a lack of low-flow head that no channel stability can make up. A large flood discharge cures neither.</p>",
            "points": [
              {
                "html": "The placement of an intake is not optimal when it is placed in a natural channel and a navigation channel.",
                "sources": [
                  {
                    "id": "CAP4-07-00026",
                    "label": "p. 27; topic 7 point 26"
                  }
                ]
              },
              {
                "html": "A canal intake is preferably located in the trough of the river.",
                "sources": [
                  {
                    "id": "CAP4-07-00042",
                    "label": "p. 28; topic 7 point 42"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00026",
                "label": "p. 27; topic 7 point 26"
              },
              {
                "id": "CAP4-07-00042",
                "label": "p. 28; topic 7 point 42"
              }
            ]
          },
          {
            "id": "headworks-layout-components",
            "title": "Divide wall, fish ladder and canal head regulator",
            "html": "<p>A conventional diversion headworks groups several components around the weir or barrage. The <em>divide wall</em> separates the undersluice pocket in front of the canal intake from the main weir bays. It checks cross-currents, helps organize the approach flow and keeps sediment sluicing concentrated near the canal head. Guide banks are different: they steer the whole river through the waterway.</p><p>A <em>fish ladder</em>, or fish pass, provides a series of passable steps and resting pools so that fish can migrate upstream across the level difference the weir creates. Conventional layouts often place it beside the divide wall, but entrance attraction, flow velocities and the needs of the species decide whether it works.</p><p>The <em>canal head regulator</em> is built where a canal leaves the river; it admits, meters or shuts off the canal supply. A cross regulator spans a parent canal to control passage and upstream level, and an escape disposes of surplus canal water. Position along the water route distinguishes these related structures.</p>",
            "points": [
              {
                "html": "The structure used to separate the under-sluice portion from the main weir portion is the divide wall.",
                "sources": [
                  {
                    "id": "CAP4-07-00046",
                    "label": "p. 28; topic 7 point 46; topic 7 point 69"
                  }
                ]
              },
              {
                "html": "A fish ladder is provided on the side of the divide wall.",
                "sources": [
                  {
                    "id": "CAP4-07-00045",
                    "label": "p. 28; topic 7 point 45"
                  }
                ]
              },
              {
                "html": "The regulator provided at the head of a canal off-taking from a river is the head regulator.",
                "sources": [
                  {
                    "id": "CAP4-07-00115",
                    "label": "p. 29; topic 7 point 116"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00046",
                "label": "p. 28; topic 7 point 46; topic 7 point 69"
              },
              {
                "id": "CAP4-07-00045",
                "label": "p. 28; topic 7 point 45"
              },
              {
                "id": "CAP4-07-00115",
                "label": "p. 29; topic 7 point 116"
              }
            ]
          },
          {
            "id": "sediment-control-at-the-intake",
            "title": "Keeping sediment out: excluders, raised sills and undersluices",
            "html": "<p>Sediment concentration in a river is highest in the layers near the bed, so headworks keep those layers away from the canal.</p><ul><li><em>Undersluices</em> have crests near riverbed level, below the canal intake sill, giving flushing flow a low route that draws sediment-laden bottom water away from the intake pocket.</li><li>The canal <em>head regulator sill</em> is set higher than the undersluice crest, so the canal draws the cleaner upper layers. Its gates still close onto that raised sill and control admission.</li><li>A <em>silt excluder</em> acts in the river approach, before water reaches the head regulator: it intercepts the sediment-rich lower layers and leads them to the undersluices.</li><li>A <em>silt ejector</em> works later, removing sediment that has already entered the canal.</li></ul><p>Position along the sediment pathway, not the general idea of removal, distinguishes excluder from ejector. Effective flushing still needs enough head and transport capacity, and exact crest levels follow the surveyed bed and design layout.</p>",
            "points": [
              {
                "html": "The structure provided at the head regulator to remove silt is the silt excluder.",
                "sources": [
                  {
                    "id": "CAP4-07-00072",
                    "label": "p. 28; topic 7 point 75"
                  }
                ]
              },
              {
                "html": "In a head regulator, there is no provision of gates at the bed level.",
                "sources": [
                  {
                    "id": "CAP4-07-00096",
                    "label": "p. 29; topic 7 point 97"
                  }
                ]
              },
              {
                "html": "The crest of the under-sluice portion of diversion headworks is kept at the bed level of the river.",
                "sources": [
                  {
                    "id": "CAP4-07-00105",
                    "label": "p. 29; topic 7 point 107"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00072",
                "label": "p. 28; topic 7 point 75"
              },
              {
                "id": "CAP4-07-00096",
                "label": "p. 29; topic 7 point 97"
              },
              {
                "id": "CAP4-07-00105",
                "label": "p. 29; topic 7 point 107"
              }
            ]
          },
          {
            "id": "undersluice-design-discharge",
            "title": "Preliminary undersluice capacity and head checks",
            "html": "<p>A preliminary brief for undersluices takes the <em>largest</em> of several requirements, not their sum. The rule lists at least twice the canal discharge, about 10 to 15% of the maximum flood, and the ability to pass the winter flow.</p><p>A numerical maximum is not a complete check. Flow through a given opening depends on the head and the flow regime, so a capacity found at flood head says nothing about a case with a much smaller head. Each requirement is rated at its own head and gate opening; otherwise a low-head deficiency can hide behind the larger flood figure.</p>",
            "formulas": [
              {
                "label": "Preliminary undersluice discharge",
                "tex": "Q_{\\text{us}} = \\max\\left(2Q_{\\text{c}},\\ k\\,Q_{\\text{f}},\\ Q_{\\text{w}}\\right)",
                "where": "<p>\\(Q_{\\text{c}}\\) is the canal discharge, \\(Q_{\\text{f}}\\) the maximum flood, \\(Q_{\\text{w}}\\) the winter flow and \\(k\\) about 0.10 to 0.15.</p>"
              }
            ],
            "example": {
              "title": "Worked example: three requirements, one governing value",
              "html": "<p>Take a 20-cumec canal, 12% selected from the range for a flood of 1000 cumecs, and 80 cumecs to be passed in winter:</p><ul><li>twice the canal flow: 2 × 20 = 40 cumecs;</li><li>flood share: 0.12 × 1000 = 120 cumecs;</li><li>winter passage: 80 cumecs.</li></ul><p>The numerical brief is governed by 120 cumecs; the sum of 240 has no design meaning. Passing 120 cumecs at flood head still does not show that 80 cumecs can pass at the smaller winter head, so that case is rated separately.</p>"
            },
            "points": [
              {
                "html": "The design discharge of under-sluices should be the maximum of twice the canal discharge, 10–15% of the maximum flood, and the winter flow.",
                "sources": [
                  {
                    "id": "CAP4-07-00110",
                    "label": "p. 29; topic 7 point 112"
                  }
                ]
              },
              {
                "html": "A canal carries 20 cumecs, the maximum flood discharge is 1000 cumecs and the winter flow is 80 cumecs. Taking 12% of the flood, the design discharge of the under-sluices is 120 cumecs.",
                "sources": [
                  {
                    "id": "CAP4-07-00111",
                    "label": "p. 29; topic 7 point 112"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00110",
                "label": "p. 29; topic 7 point 112"
              },
              {
                "id": "CAP4-07-00111",
                "label": "p. 29; topic 7 point 112"
              }
            ]
          },
          {
            "id": "failure-on-pervious-foundations",
            "title": "Piping, undermining and uplift on pervious foundations",
            "html": "<p>Hydraulic structures on pervious foundations fail mainly in two ways.</p><ul><li><em>Piping and undermining.</em> Seepage emerging at an unprotected downstream exit carries foundation particles away. The erosion works backwards, opening channels that remove support from the floor. Filters, drainage and seepage control address it; floor weight alone cannot stop particle transport.</li><li><em>Uplift.</em> The floor may stay intact while the seepage pressure beneath it exceeds the downward stabilizing action of its weight, so it lifts or cracks. Checking this needs the pressure distribution under the floor and the relevant load combinations, not merely an average exit gradient.</li></ul><p>The two mechanisms are distinct but can interact.</p><p>Exits are most dangerous where unprotected loose <em>fine sand</em> lies at the downstream seepage exit, because emerging water can move such grains readily. Permissible exit gradients and filters must reflect the gradation, packing and erodibility of the actual soil. Finer grains of the same mineral do not have a lower solid specific gravity, and low permeability alone does not rule out erosion at the exit.</p>",
            "points": [
              {
                "html": "The two main causes of failure of hydraulic structures on pervious foundations are undermining and uplift.",
                "sources": [
                  {
                    "id": "CAP4-02-00160",
                    "label": "p. 10; topic 2 point 142"
                  }
                ]
              },
              {
                "html": "Besides uplift, the main cause of failure of a hydraulic structure on a pervious foundation is undermining.",
                "sources": [
                  {
                    "id": "CAP4-02-00161",
                    "label": "p. 10; topic 2 point 142"
                  }
                ]
              },
              {
                "html": "According to Khosla, the soil material having the lowest safe exit gradient is fine sand.",
                "sources": [
                  {
                    "id": "CAP4-07-00044",
                    "label": "p. 28; topic 7 point 44"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00160",
                "label": "p. 10; topic 2 point 142"
              },
              {
                "id": "CAP4-02-00161",
                "label": "p. 10; topic 2 point 142"
              },
              {
                "id": "CAP4-07-00044",
                "label": "p. 28; topic 7 point 44"
              }
            ]
          },
          {
            "id": "bligh-and-lane-creep-theories",
            "title": "Bligh's creep and Lane's weighted creep",
            "html": "<p><em>Bligh's creep theory</em> assumes that seeping water travels along the contact between structure and soil, following the underside of the floor and both faces of every cutoff, and relates seepage resistance to the length of that path. It is an empirical idealization: real seepage spreads through a two- or three-dimensional soil domain instead of hugging the contact.</p><p>Bligh gives <em>equal weight</em> to horizontal and vertical contact. <em>Lane's weighted creep</em> treats horizontal contact as less effective and counts it at one-third of its length, while vertical contact counts in full. For a floor with thin cutoffs, both faces of each cutoff are counted.</p>",
            "formulas": [
              {
                "label": "Bligh creep length",
                "tex": "L_B = \\sum L_h + \\sum L_v"
              },
              {
                "label": "Lane weighted creep length",
                "tex": "L_w = \\sum L_v + \\dfrac{\\sum L_h}{3}"
              },
              {
                "label": "Floor of length L with two thin cutoffs",
                "tex": "L_w = 2d_1 + \\dfrac{L}{3} + 2d_2",
                "where": "<p>\\(d_1\\) and \\(d_2\\) are the upstream and downstream cutoff depths.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: equal and weighted creep",
              "html": "<p>Under Bligh's equal weighting, 12 m of floor contact and 12 m of cutoff-face contact each count in full: 12 m and 12 m, a total of 24 m.</p><p>For a 42 m horizontal floor with thin cutoffs of 4 m and 7 m, including both faces of each:</p>\\[\\begin{aligned} L_w &amp;= 2 \\times 4 + 2 \\times 7 + \\dfrac{42}{3} \\\\ &amp;= 22 + 14 = 36\\ \\text{m} \\end{aligned}\\]<p>Bligh's unweighted length for the same floor would be 22 + 42 = 64 m.</p>"
            },
            "moreHtml": "<p>The three classical seepage approaches differ in what they assume and what they deliver.</p><table><thead><tr><th scope='col'>Method</th><th scope='col'>Seepage idealization</th><th scope='col'>Weighting or output</th></tr></thead><tbody><tr><th scope='row'>Bligh</th><td>Flow along the structure-soil contact</td><td>Horizontal and vertical contact weighted equally</td></tr><tr><th scope='row'>Lane</th><td>Weighted contact path</td><td>Vertical contact at full length, horizontal contact at one-third</td></tr><tr><th scope='row'>Khosla</th><td>Potential flow through the soil, using standard forms with corrections</td><td>Uplift pressures at key points and the exit gradient</td></tr></tbody></table>",
            "points": [
              {
                "html": "According to Bligh's creep theory, percolating water flows along the outline of the base of the foundation.",
                "sources": [
                  {
                    "id": "CAP4-07-00052",
                    "label": "p. 28; topic 7 point 52"
                  }
                ]
              },
              {
                "html": "Bligh's theory of seepage assumes that the horizontal and vertical creep are given equal weightage.",
                "sources": [
                  {
                    "id": "CAP4-07-00053",
                    "label": "pp. 28, 30; topic 7 point 53; topic 7 point 131"
                  }
                ]
              },
              {
                "html": "Lane's creep length formula is \\(2d_1 + \\dfrac{L}{3} + 2d_2\\), where \\(d_1\\), \\(d_2\\) are the upstream and downstream cut-off depths and \\(L\\) is the floor length.",
                "sources": [
                  {
                    "id": "CAP4-07-00058",
                    "label": "p. 28; topic 7 point 58"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00052",
                "label": "p. 28; topic 7 point 52"
              },
              {
                "id": "CAP4-07-00053",
                "label": "pp. 28, 30; topic 7 point 53; topic 7 point 131"
              },
              {
                "id": "CAP4-07-00058",
                "label": "p. 28; topic 7 point 58"
              }
            ]
          },
          {
            "id": "khosla-exit-gradient",
            "title": "Khosla's independent variables and the exit gradient",
            "html": "<p><em>Khosla's method of independent variables</em> replaces creep lengths with potential-flow solutions. A complex floor is split into standard forms, such as a floor with an end pile or with an intermediate pile, whose head distributions are known analytically. Corrections are then applied for pile interference, floor thickness and floor slope. The method gives uplift pressures at key points and the exit gradient rather than an equivalent path length.</p><p>For an ideal horizontal floor of length \\(b\\) ending in one downstream pile of depth \\(d\\), the exit gradient depends on the retained head \\(H\\) and on two geometric parameters. \\(H\\) and \\(d\\) share a length unit, so \\(G_E\\) is dimensionless, and \\(\\lambda\\) describes floor-to-pile geometry, not soil permeability.</p><p>As \\(d\\) tends to zero with \\(b\\) and \\(H\\) positive, the denominator vanishes and the ideal exit gradient grows without bound at the sharp downstream edge.</p>",
            "formulas": [
              {
                "label": "Exit gradient, single downstream end pile",
                "tex": "G_E = \\dfrac{H}{\\pi\\,d\\,\\sqrt{\\lambda}}"
              },
              {
                "label": "Geometric parameters",
                "tex": "\\alpha = \\dfrac{b}{d}, \\quad \\lambda = \\dfrac{1 + \\sqrt{1 + \\alpha^2}}{2}"
              }
            ],
            "example": {
              "title": "Worked example: head 6 m, pile depth 4 m, lambda 1.5",
              "html": "<p>Substituting the retained head, the pile depth and the geometric parameter:</p>\\[\\begin{aligned} G_E &amp;= \\dfrac{6}{\\pi \\times 4 \\times \\sqrt{1.5}} \\\\ &amp;= 0.389848 \\approx 0.390 \\end{aligned}\\]<p>If 1.5 were \\(\\alpha\\) instead, \\(\\lambda = 1.401388\\) and \\(G_E = 0.403332\\). Soil conductivity enters neither parameter.</p>"
            },
            "points": [
              {
                "html": "The method evolved by Khosla for designing hydraulic structures is the method of independent variables.",
                "sources": [
                  {
                    "id": "CAP4-07-00054",
                    "label": "p. 28; topic 7 point 54"
                  }
                ]
              },
              {
                "html": "According to Khosla's theory, the exit gradient \\(G_E\\) is given by \\(\\dfrac{H}{d} \\cdot \\dfrac{1}{\\pi\\sqrt{\\lambda}}\\).",
                "sources": [
                  {
                    "id": "CAP4-07-00059",
                    "label": "p. 28; topic 7 point 59"
                  }
                ]
              },
              {
                "html": "An embankment has a hydraulic head of 6 m, a downstream cut-off depth of 4 m and Khosla's factor \\(\\lambda = 1.5\\). The exit gradient by Khosla's theory is about 0.39.",
                "sources": [
                  {
                    "id": "CAP4-07-00117",
                    "label": "p. 29; topic 7 point 118"
                  }
                ]
              },
              {
                "html": "According to Khosla's theory, the exit gradient in the absence of a downstream cut-off is infinity.",
                "sources": [
                  {
                    "id": "CAP4-07-00047",
                    "label": "p. 28; topic 7 point 47"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00054",
                "label": "p. 28; topic 7 point 54"
              },
              {
                "id": "CAP4-07-00059",
                "label": "p. 28; topic 7 point 59"
              },
              {
                "id": "CAP4-07-00117",
                "label": "p. 29; topic 7 point 118"
              },
              {
                "id": "CAP4-07-00047",
                "label": "p. 28; topic 7 point 47"
              }
            ]
          },
          {
            "id": "downstream-cutoffs",
            "title": "Downstream sheet piles and the depth of cutoff",
            "html": "<p>A properly designed <em>downstream sheet pile</em> reshapes the seepage field. It spreads and lengthens the path by which seepage emerges, so the gradient at the toe falls. It neither lowers soil conductivity nor removes uplift, and substantial pressures can remain beneath parts of the floor, so uplift and filters are still checked.</p><p>Its depth is governed chiefly by two hydraulic checks:</p><ul><li>the exit gradient must stay within a permissible value for the soil;</li><li>the pile must remain embedded below the design scour level, so that it still acts after scour removes the surrounding bed.</li></ul><p>Structural strength, construction, durability and soil variability are further requirements; the two hydraulic checks are central, not exhaustive.</p>",
            "points": [
              {
                "html": "The purpose of providing the downstream sheet pile in a barrage is to reduce the exit gradient.",
                "sources": [
                  {
                    "id": "CAP4-07-00123",
                    "label": "p. 30; topic 7 point 121"
                  }
                ]
              },
              {
                "html": "The depth of the downstream vertical cut-off is governed by two considerations: scour depth and safe exit gradient.",
                "sources": [
                  {
                    "id": "CAP4-07-00060",
                    "label": "p. 28; topic 7 point 60"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00123",
                "label": "p. 30; topic 7 point 121"
              },
              {
                "id": "CAP4-07-00060",
                "label": "p. 28; topic 7 point 60"
              }
            ]
          },
          {
            "id": "uplift-flotation-and-sliding",
            "title": "Uplift, flotation and frictional sliding resistance",
            "html": "<p>Uplift directly reduces stability because it offsets the weight pressing the structure onto its foundation. Vertical equilibrium gives the foundation reaction as weight minus uplift, assuming no other vertical forces or anchorage.</p><p>A weir constructed so that its weight completely balances the upward seepage force of water is a gravity weir.</p><p>Frictional sliding resistance uses the same effective normal force. Ignoring uplift overstates the resistance, and the driving horizontal forces must still be compared before stability is judged.</p>",
            "formulas": [
              {
                "label": "Vertical foundation reaction",
                "tex": "N = W - U"
              },
              {
                "label": "Frictional sliding resistance",
                "tex": "F = \\mu\\,(W - U)",
                "where": "<p>No cohesion; \\(\\mu\\) is the base friction coefficient.</p>"
              }
            ],
            "example": {
              "title": "Worked example: weight 1000 kN, uplift 300 kN",
              "html": "<p>With \\(\\mu = 0.60\\) and no cohesion:</p>\\[\\begin{aligned} N &amp;= 1000 - 300 = 700\\ \\text{kN} \\\\ F &amp;= 0.60 \\times 700 = 420\\ \\text{kN} \\end{aligned}\\]<p>Ignoring uplift would give 0.60 × 1000 = 600 kN.</p>"
            },
            "points": [
              {
                "html": "A weir constructed so that the weight of the structure completely balances the upward seepage force of water is a gravity weir.",
                "sources": [
                  {
                    "id": "CAP4-07-00056",
                    "label": "p. 28; topic 7 point 56"
                  }
                ]
              },
              {
                "html": "Uplift pressure is important for the stability of a concrete dam.",
                "sources": [
                  {
                    "id": "CAP4-07-00057",
                    "label": "p. 28; topic 7 point 57"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00056",
                "label": "p. 28; topic 7 point 56"
              },
              {
                "id": "CAP4-07-00057",
                "label": "p. 28; topic 7 point 57"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Bligh creep length",
            "tex": "L_B = \\sum L_h + \\sum L_v"
          },
          {
            "label": "Lane weighted creep length",
            "tex": "L_w = \\sum L_v + \\dfrac{\\sum L_h}{3}"
          },
          {
            "label": "Lane, floor with two thin cutoffs",
            "tex": "L_w = 2d_1 + \\dfrac{L}{3} + 2d_2"
          },
          {
            "label": "Khosla exit gradient, end pile",
            "tex": "G_E = \\dfrac{H}{\\pi\\,d\\,\\sqrt{\\lambda}}"
          },
          {
            "label": "Khosla floor-to-pile ratio",
            "tex": "\\alpha = \\dfrac{b}{d}"
          },
          {
            "label": "Khosla geometric parameter",
            "tex": "\\lambda = \\dfrac{1 + \\sqrt{1 + \\alpha^2}}{2}"
          },
          {
            "label": "Vertical foundation reaction",
            "tex": "N = W - U"
          },
          {
            "label": "Frictional sliding resistance",
            "tex": "F = \\mu\\,(W - U)"
          },
          {
            "label": "Preliminary undersluice discharge",
            "tex": "Q_{\\text{us}} = \\max\\left(2Q_{\\text{c}},\\ k\\,Q_{\\text{f}},\\ Q_{\\text{w}}\\right)",
            "note": "k about 0.10 to 0.15; rate each case at its own head."
          }
        ],
        "cautions": [],
        "gaps": [
          "Khosla's corrections for pile interference, floor thickness and slope are named but not calculated, and uplift pressures at key points are not worked.",
          "Hydraulic-jump energy dissipation below weirs, including cistern level and length, is not tested by these questions.",
          "Numerical safe exit gradients for particular soils and Bligh's creep coefficients are not provided.",
          "Weir crest discharge formulae and the waterway length of headworks are not covered."
        ]
      },
      "ACiE0704": {
        "code": "ACiE0704",
        "questionCount": 17,
        "format": 2,
        "summary": "<p>River training works guide a river so that floods pass safely, banks and crossings are protected and the channel stays stable. This subchapter covers how rivers and reaches are classified, the channel-forming role of dominant discharge, the objectives of training, scour depth referenced to the high flood level, guide banks, launching aprons and spurs. The capsule questions test these definitions and functions, two scour-level calculations and a sediment-mass comparison; several capsule statements are qualified or corrected.</p>",
        "blocks": [
          {
            "id": "river-classification-and-meandering",
            "title": "Classifying rivers and reaches, and meandering in alluvium",
            "html": "<p>Two classifications of rivers are easily confused. Classification by <em>origin</em> names the main source of a river's water, such as snow-fed or rain-fed, and so describes its seasonal flow regime. Classification by <em>reach characteristics</em> describes the local channel: its gradient, how confined it is and what its bed is made of.</p><table><thead><tr><th scope='col'>Basis</th><th scope='col'>What it describes</th><th scope='col'>Examples</th></tr></thead><tbody><tr><th scope='row'>Origin</th><td>Main source of the water and its seasonal regime</td><td>Snow-fed, rain-fed</td></tr><tr><th scope='row'>Reach characteristics</th><td>Local gradient, confinement and bed material</td><td>Steep, confined and boulder-bedded; wide, gentle and sandy</td></tr></tbody></table><p>Sediment-carrying alluvial rivers can <em>meander</em>. At a bend, curvature and secondary circulation drive faster, erosive flow against the outer bank, while sediment settles on the inner bank as a <em>point bar</em>. Bank resistance and sediment supply control how the bend evolves, and a growing point bar shows active transport rather than its end.</p><p>Not every alluvial channel meanders. Braided multi-channel and fairly straight forms also occur, so the planform must be read from the reach itself.</p>",
            "points": [
              {
                "html": "River reaches can be classified on the basis of origin.",
                "sources": [
                  {
                    "id": "CAP4-07-00097",
                    "label": "p. 29; topic 7 point 98"
                  }
                ]
              },
              {
                "html": "Meandering is not possible in an alluvial channel carrying heavy sediments.",
                "sources": [
                  {
                    "id": "CAP4-07-00102",
                    "label": "p. 29; topic 7 point 103"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00097",
                "label": "p. 29; topic 7 point 98"
              },
              {
                "id": "CAP4-07-00102",
                "label": "p. 29; topic 7 point 103"
              }
            ]
          },
          {
            "id": "dominant-discharge",
            "title": "Dominant discharge: magnitude combined with duration",
            "html": "<p>The <em>dominant discharge</em>, also called the channel-forming discharge, is the flow or range of flows that does most of the long-term work of shaping a channel and its surroundings. It is not automatically the largest recorded flood, the flow exceeded half the time or the average of daily flows.</p><p>The related <em>effective-discharge</em> method finds it by combining, for each flow class, the sediment-transport rate with how long that class lasts each year. A moderate flow that recurs often can move more sediment in total than a rare, intense flood.</p>",
            "formulas": [
              {
                "label": "Sediment mass moved by a flow class",
                "tex": "M = q_s\\, t",
                "where": "<p>\\(q_s\\) is the transport rate in kg/s and \\(t\\) the annual duration of the class in seconds.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a frequent class against a rare one",
              "html": "<p>A frequent flow class carries 10 kg/s of bed material for 100 hours each year, and a rarer class carries 50 kg/s for only 10 hours. Each hour is 3600 s.</p>\\[\\begin{aligned} M_1 &amp;= 10 \\times 100 \\times 3600 \\\\ &amp;= 3.6 \\times 10^{6}\\ \\text{kg} \\\\ M_2 &amp;= 50 \\times 10 \\times 3600 \\\\ &amp;= 1.8 \\times 10^{6}\\ \\text{kg} \\end{aligned}\\]<p>The 10 kg/s class moves 3.6 million kg, twice the 1.8 million kg of the rarer class, although its instantaneous rate is one-fifth as large.</p>"
            },
            "points": [
              {
                "html": "A quantum of discharge with high enough magnitude and frequency to bring about changes to the river boundary and surrounding area is called the dominant discharge.",
                "sources": [
                  {
                    "id": "CAP4-07-00055",
                    "label": "p. 28; topic 7 point 55"
                  }
                ]
              },
              {
                "html": "Dominant discharge is a discharge of high enough magnitude and frequency to change the river boundary.",
                "sources": [
                  {
                    "id": "CAP4-07-00131",
                    "label": "p. 28; topic 7 point 55"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00055",
                "label": "p. 28; topic 7 point 55"
              },
              {
                "id": "CAP4-07-00131",
                "label": "p. 28; topic 7 point 55"
              }
            ]
          },
          {
            "id": "objectives-of-river-training",
            "title": "Objectives of river training and what counts as a training work",
            "html": "<p>River training works are traditionally grouped by the objective they serve.</p><table><thead><tr><th scope='col'>Category</th><th scope='col'>Also called</th><th scope='col'>Main aim</th></tr></thead><tbody><tr><th scope='row'>High-water training</th><td>Training for discharge</td><td>Carry design floods with tolerable inundation and bank damage, using levees, guide banks and similar works</td></tr><tr><th scope='row'>Low-water training</th><td>Training for depth</td><td>Maintain navigable depth in the dry season</td></tr><tr><th scope='row'>Mean-water training</th><td>Training for sediment</td><td>Keep bed-material movement compatible with a stable channel</td></tr></tbody></table><p>Confining floods between embankments can transfer flood risk elsewhere rather than remove flood volume, so flood training must consider the whole reach.</p><p>A structure is a river-training work because of what it does to the river's flow or floodplain, not because of its material. Guide bunds that steer flow into a bridge opening, levees that limit inundation of protected land and spurs that deflect current from a bank all act on the river.</p><p>A canal bank holds water inside an irrigation channel. By that primary function it is not a river-training structure, although a real embankment may serve combined purposes.</p>",
            "points": [
              {
                "html": "River training work that deals with flood control is training for discharge.",
                "sources": [
                  {
                    "id": "CAP4-07-00061",
                    "label": "p. 28; topic 7 point 61"
                  }
                ]
              },
              {
                "html": "A canal bund is not a river-training structure.",
                "sources": [
                  {
                    "id": "CAP4-07-00062",
                    "label": "p. 28; topic 7 point 62"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00061",
                "label": "p. 28; topic 7 point 61"
              },
              {
                "id": "CAP4-07-00062",
                "label": "p. 28; topic 7 point 62"
              }
            ]
          },
          {
            "id": "scour-depth-below-hfl",
            "title": "Scour depth measured below the high flood level",
            "html": "<p>Lacey-type scour depths are measured below the <em>high flood level</em> (HFL), not below the existing bed. The estimated scoured-bed level is therefore HFL minus the scour depth, and the extra lowering of the bed is the difference between the existing bed level and that scoured level. Subtracting the scour depth from the old bed would count the flow depth twice.</p><p>Local attack deepens scour at bends, noses and other disturbances. For bank protection at a <em>right-angle bend</em>, IRC 89:1997, Section 7.4.5, assumes a maximum scour depth of twice the mean scour depth, again measured below HFL.</p>",
            "formulas": [
              {
                "label": "Scoured bed level",
                "tex": "\\text{RL}_{\\text{scour}} = \\text{HFL} - D",
                "where": "<p>\\(D\\) is the scour depth measured below HFL.</p>"
              },
              {
                "label": "Additional lowering of the bed",
                "tex": "\\Delta z = \\text{RL}_{\\text{bed}} - \\text{RL}_{\\text{scour}}"
              },
              {
                "label": "Local scour depth at a bend",
                "tex": "D_{\\text{max}} = k\\, D_{\\text{mean}}",
                "where": "<p>\\(k = 2.0\\) for bank protection at a right-angle bend in IRC 89:1997, Section 7.4.5, with both depths below HFL.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: normal scour and a right-angle bend",
              "html": "<p>Normal scour 5 m below an HFL of RL 100 m, with the existing bed at RL 97 m:</p><ol><li>Scoured bed: \\(\\text{RL}_{\\text{scour}} = 100 - 5 = 95\\ \\text{m}\\).</li><li>Additional lowering: \\(\\Delta z = 97 - 95 = 2\\ \\text{m}\\).</li></ol><p>Right-angle bend with a mean scour depth of 3.0 m and HFL at RL 104.0 m:</p><ol><li>Local depth: \\(D_{\\text{max}} = 2.0 \\times 3.0 = 6.0\\ \\text{m}\\) below HFL.</li><li>Scour-bed level: \\(104.0 - 6.0 = 98.0\\), that is RL 98.0 m.</li></ol>"
            },
            "points": [
              {
                "html": "The general depth of scour calculated by Lacey's formula represents the depth below the maximum flood level in the river.",
                "sources": [
                  {
                    "id": "CAP4-07-00098",
                    "label": "p. 29; topic 7 point 99"
                  }
                ]
              },
              {
                "html": "According to Lacey, if \\(D\\) is the depth of scour in regime flow, the depth of scour at a right-angled bend is \\(2.00D\\).",
                "sources": [
                  {
                    "id": "CAP4-07-00019",
                    "label": "p. 27; topic 7 point 20"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00098",
                "label": "p. 29; topic 7 point 99"
              },
              {
                "id": "CAP4-07-00019",
                "label": "p. 27; topic 7 point 20"
              }
            ]
          },
          {
            "id": "guide-banks-and-nose-scour",
            "title": "Guide banks: purpose, arm lengths and nose protection",
            "html": "<p><em>Guide banks</em> are built where flood currents meet a bridge or similar crossing at an angle and might bypass the waterway provided. They lead the current through the intended opening along a chosen course, organise the approach and departure flow, and protect the approach embankments. They steer flow locally; they do not detain floods, regulate canal levels or stop bed load entering an intake. Excessive constriction raises afflux and scour, so the waterway and river morphology must still be checked.</p><p>In a conventional layout the upstream arm is the longer one. It must intercept an oblique approach and draw the current progressively into line with the opening, while the downstream arm mainly manages expansion and local attack. Site conditions set the actual proportions, so this is a usual inequality, not a fixed ratio.</p><p>The deepest scour commonly develops at the <em>nose</em>, where approaching flow turns and accelerates and local turbulence concentrates erosive attack. Nose scour can exceed the reach-average value, so the nose needs especially robust protection sized from local hydraulic and bed data.</p>",
            "points": [
              {
                "html": "Guide banks are provided to train the flow of a river along a specified course.",
                "sources": [
                  {
                    "id": "CAP4-07-00065",
                    "label": "p. 28; topic 7 point 65"
                  }
                ]
              },
              {
                "html": "The length of the upstream guide bank is greater than the length of the downstream guide bank.",
                "sources": [
                  {
                    "id": "CAP4-07-00066",
                    "label": "p. 28; topic 7 point 66; topic 7 point 67"
                  }
                ]
              },
              {
                "html": "In a guide bund, the depth of scour is most severe at the nose.",
                "sources": [
                  {
                    "id": "CAP4-07-00116",
                    "label": "p. 29; topic 7 point 117"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00065",
                "label": "p. 28; topic 7 point 65"
              },
              {
                "id": "CAP4-07-00066",
                "label": "p. 28; topic 7 point 66; topic 7 point 67"
              },
              {
                "id": "CAP4-07-00116",
                "label": "p. 29; topic 7 point 117"
              }
            ]
          },
          {
            "id": "launching-aprons",
            "title": "Launching aprons: placement, flexible armour and filters",
            "html": "<p>A <em>launching apron</em> protects the toe of a bank or guide bank against scour that has not yet happened. It is laid initially on the bed at the toe, extending beyond it. As the adjacent bed scours, the undermined material slides and settles onto the new scour face, forming a protective layer down to the scoured level. Protection placed only on the slope above the bed, buried below the deepest predicted scour or laid along the landside toe cannot launch in this way.</p><p>The apron must therefore be flexible. Loose, suitably graded stone can rearrange as the bed drops, and designed gabion mattresses with adequate connections can deform while keeping cover. Gabions are not the only solution, and a rigid bonded slab of concrete, masonry or grouted rock does not launch in the same way.</p><p>A <em>geotextile</em> beneath stone or gabions acts as a filter: it holds soil particles back while letting water pass. It does not supply the armour weight needed to resist drag and must tolerate the deformation of launching, so armour, filter and connections are designed together as a compatible system.</p>",
            "points": [
              {
                "html": "A launching apron is typically located in hydraulic structures at bed level.",
                "sources": [
                  {
                    "id": "CAP4-07-00099",
                    "label": "p. 29; topic 7 point 100"
                  }
                ]
              },
              {
                "html": "A launching apron is made of gabions, stone and geotextile fabric.",
                "sources": [
                  {
                    "id": "CAP4-07-00063",
                    "label": "p. 28; topic 7 point 63; topic 7 point 64"
                  }
                ]
              },
              {
                "html": "A launching apron may be made of gabions, which is flexible and settles into the scour hole.",
                "sources": [
                  {
                    "id": "CAP4-07-00064",
                    "label": "p. 28; topic 7 point 63"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00099",
                "label": "p. 29; topic 7 point 100"
              },
              {
                "id": "CAP4-07-00063",
                "label": "p. 28; topic 7 point 63; topic 7 point 64"
              },
              {
                "id": "CAP4-07-00064",
                "label": "p. 28; topic 7 point 63"
              }
            ]
          },
          {
            "id": "spurs-orientation-and-permeability",
            "title": "Spurs: form, orientation and permeability",
            "html": "<p>A <em>spur</em>, or groyne, projects from the bank into the river to influence the current. A levee instead runs along the river to keep floods off protected land, and bank pitching simply covers the slope without projecting into the channel.</p><table><thead><tr><th scope='col'>Root-to-tip direction</th><th scope='col'>Conventional name</th><th scope='col'>Intended effect</th></tr></thead><tbody><tr><td>Upstream of the bank normal</td><td>Repelling spur</td><td>Pushes the main current away from the bank</td></tr><tr><td>Downstream of the bank normal</td><td>Attracting spur</td><td>Tends to draw the current toward the bank</td></tr></tbody></table><p>This is a textbook mnemonic rather than a code classification. Real behaviour also depends on permeability, submergence and the approach direction.</p><p><em>Permeable spurs</em> let part of the flow pass through while adding resistance. Slowing the local flow reduces transport capacity and can encourage deposition in a sheltered zone near the bank when the river carries abundant suspended sediment. They do not sieve out grains, and debris blockage or local scour can change their performance.</p>",
            "points": [
              {
                "html": "Spurs are provided in the bank of a river perpendicular to the river.",
                "sources": [
                  {
                    "id": "CAP4-07-00118",
                    "label": "p. 30; topic 7 point 119"
                  }
                ]
              },
              {
                "html": "A repelling spur is inclined upstream.",
                "sources": [
                  {
                    "id": "CAP4-07-00103",
                    "label": "p. 29; topic 7 point 104"
                  }
                ]
              },
              {
                "html": "Permeable spurs are best suited for rivers that carry a heavy suspended load.",
                "sources": [
                  {
                    "id": "CAP4-07-00125",
                    "label": "p. 30; topic 7 point 123"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00118",
                "label": "p. 30; topic 7 point 119"
              },
              {
                "id": "CAP4-07-00103",
                "label": "p. 29; topic 7 point 104"
              },
              {
                "id": "CAP4-07-00125",
                "label": "p. 30; topic 7 point 123"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Scoured bed level",
            "tex": "\\text{RL}_{\\text{scour}} = \\text{HFL} - D",
            "note": "Scour depth \\(D\\) is measured below HFL."
          },
          {
            "label": "Additional lowering of the bed",
            "tex": "\\Delta z = \\text{RL}_{\\text{bed}} - \\text{RL}_{\\text{scour}}"
          },
          {
            "label": "Local scour depth at a bend",
            "tex": "D_{\\text{max}} = k\\, D_{\\text{mean}}",
            "note": "\\(k = 2.0\\) for bank protection at a right-angle bend, IRC 89:1997 Section 7.4.5."
          },
          {
            "label": "Sediment moved by a flow class",
            "tex": "M = q_s\\, t"
          }
        ],
        "cautions": [],
        "gaps": [
          "Levee design, including section, seepage control and freeboard, is not developed by these questions.",
          "Watershed management measures and the classification of river stages listed in the syllabus are not covered by the capsule questions.",
          "Lacey regime-scour formulae and launching-apron sizing, such as stone quantity and launched slope, are not tested; only the depth-datum logic is.",
          "The hydraulic design of guide-bank curvature, length and nose protection is not covered."
        ]
      },
      "ACiE0705": {
        "code": "ACiE0705",
        "questionCount": 19,
        "format": 2,
        "summary": "<p>This subchapter covers the structures that control and protect canal flow: gated head and cross regulators and escapes, outlet flexibility and sensitivity, the need for canal falls and the Sarda family, and cross-drainage works, which are named by the stream passing on top and by whether the lower stream flows freely or under pressure.</p>",
        "blocks": [
          {
            "id": "regulators-and-escapes",
            "title": "Head regulators, cross regulators and canal escapes",
            "html": "<p>A <em>regulator</em> controls discharge by changing an effective opening or control level, usually with gates. A gated regulator lets a branch adjust its admission as parent levels change, which a fixed weir, an ungated orifice or an ungated flume cannot do. The flow still depends on upstream and downstream head and on the device rating; a gate opening does not fix discharge independently of the hydraulics.</p><p>A <em>cross regulator</em> spans the parent canal downstream of an offtake. Partly closing it during low supply raises the parent level just upstream and so creates the head the branch needs, while the branch's own head regulator meters entry. Settings must respect the parent canal's capacity and freeboard.</p><p>A <em>canal escape</em> disposes of surplus water safely to a natural drain or river with adequate capacity, for example when downstream demand stops suddenly while supply keeps arriving. Regulators control normal passage and excluders deal with sediment; neither provides that route.</p>",
            "points": [
              {
                "html": "The discharge of water in a canal is controlled by regulators.",
                "sources": [
                  {
                    "id": "CAP4-07-00107",
                    "label": "p. 29; topic 7 point 109"
                  }
                ]
              },
              {
                "html": "Cross regulators are provided in a main canal to raise the water level for the off-taking canals.",
                "sources": [
                  {
                    "id": "CAP4-07-00071",
                    "label": "pp. 28, 30; topic 7 point 74; topic 7 point 128"
                  }
                ]
              },
              {
                "html": "The structure provided to discharge extra water from a canal into a natural drain is a canal escape.",
                "sources": [
                  {
                    "id": "CAP4-07-00033",
                    "label": "pp. 27, 28; topic 7 point 33; topic 7 point 71"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00107",
                "label": "p. 29; topic 7 point 109"
              },
              {
                "id": "CAP4-07-00071",
                "label": "pp. 28, 30; topic 7 point 74; topic 7 point 128"
              },
              {
                "id": "CAP4-07-00033",
                "label": "pp. 27, 28; topic 7 point 33; topic 7 point 71"
              }
            ]
          },
          {
            "id": "outlet-flexibility-and-sensitivity",
            "title": "Outlet flexibility, sensitivity and modular classes",
            "html": "<p>Outlet behaviour is described by ratios of fractional changes.</p><ul><li><em>Flexibility</em> compares the fractional change in outlet discharge q with that in parent-canal discharge Q. F = 1 means the outlet is locally proportional; equal percentages, not equal absolute discharges, define proportionality.</li><li><em>Sensitivity</em> compares outlet discharge with the parent water depth Y. A rigid module delivers constant q while Y varies within its working range, so S = 0; poor supply or excessive submergence can break that behaviour.</li></ul><p>Outlets are also classed by which levels control them. A non-modular outlet responds to both upstream and downstream levels. A <em>semi-module</em>, called a flexible module in older texts, ignores the downstream level while its discharge stays free but still depends on upstream head; a free pipe outlet below its drowning limit behaves this way. The older word flexible does not mean F = 1.</p>",
            "formulas": [
              {
                "label": "Flexibility",
                "tex": "F = \\dfrac{dq/q}{dQ/Q}"
              },
              {
                "label": "Sensitivity",
                "tex": "S = \\dfrac{d(\\ln q)}{d(\\ln Y)}"
              }
            ],
            "example": {
              "title": "Worked example: equal percentage changes",
              "html": "<p>A 4% rise in parent discharge gives a 4% rise in outlet discharge: \\(F \\approx 4/4 = 1.0\\), so the outlet is locally proportional. A rigid module with constant q has \\(d(\\ln q) = 0\\), so S = 0.</p>"
            },
            "moreHtml": "<table><thead><tr><th scope='col'>Outlet class</th><th scope='col'>Upstream level</th><th scope='col'>Downstream level</th></tr></thead><tbody><tr><th scope='row'>Non-modular</th><td>Affects discharge</td><td>Affects discharge</td></tr><tr><th scope='row'>Semi-module</th><td>Affects discharge</td><td>No effect while flow stays free</td></tr><tr><th scope='row'>Rigid module</th><td>No effect within the working head range</td><td>No effect within the working head range</td></tr></tbody></table>",
            "points": [
              {
                "html": "An outlet is said to be proportional if its flexibility is equal to unity.",
                "sources": [
                  {
                    "id": "CAP4-07-00070",
                    "label": "p. 28; topic 7 point 73"
                  }
                ]
              },
              {
                "html": "The sensitivity of a rigid module is zero.",
                "sources": [
                  {
                    "id": "CAP4-07-00067",
                    "label": "p. 28; topic 7 point 68"
                  }
                ]
              },
              {
                "html": "A free pipe outlet is a flexible outlet.",
                "sources": [
                  {
                    "id": "CAP4-07-00095",
                    "label": "p. 29; topic 7 point 96"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00070",
                "label": "p. 28; topic 7 point 73"
              },
              {
                "id": "CAP4-07-00067",
                "label": "p. 28; topic 7 point 68"
              },
              {
                "id": "CAP4-07-00095",
                "label": "p. 29; topic 7 point 96"
              }
            ]
          },
          {
            "id": "canal-falls-need-and-siting",
            "title": "Why canals need falls and where to put them",
            "html": "<p>A <em>canal fall</em>, or drop, is needed where the natural ground slopes more steeply than the bed slope the canal can safely carry. Steepening the whole canal instead would create excessive velocity and scour. The fall to be provided by drops is the ground fall minus the fall absorbed by the design bed slope.</p><p>Where several locations give acceptable command and hydraulic performance, economy of earthwork helps to choose. A site that balances cut and fill and avoids long high embankments and costly borrow is favoured, since approach earthwork is part of the real cost. Earthwork economy is one criterion alongside command, safe hydraulics, foundations and structure cost; it never licenses ignoring scour or available head. Equal spacing, the cheapest structure alone or the smallest drop is not a sound basis.</p>",
            "formulas": [
              {
                "label": "Fall to be taken by drops",
                "tex": "H_d = \\Delta z_g - L\\,S_0",
                "where": "Δz<sub>g</sub> is the ground fall over the reach, L the reach length and S<sub>0</sub> the design bed slope."
              }
            ],
            "example": {
              "title": "Worked example: a 2 km reach",
              "html": "<p>The ground falls 12 m and the bed slope is 1 in 1000. The bed itself falls 2000/1000 = 2 m, so</p>\\[H_d = 12 - 2 = 10\\ \\text{m}\\]<p>must be taken by drop structures if the canal is to keep its relation to the ground.</p>"
            },
            "points": [
              {
                "html": "A canal drop (fall) is provided if the ground slope exceeds the designed bed slope.",
                "sources": [
                  {
                    "id": "CAP4-07-00068",
                    "label": "p. 28; topic 7 point 70"
                  }
                ]
              },
              {
                "html": "The factor that decides the location of a canal fall in the main channel is economy in earthwork balance.",
                "sources": [
                  {
                    "id": "CAP4-07-00069",
                    "label": "p. 28; topic 7 point 72"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00068",
                "label": "p. 28; topic 7 point 70"
              },
              {
                "id": "CAP4-07-00069",
                "label": "p. 28; topic 7 point 72"
              }
            ]
          },
          {
            "id": "sarda-type-falls",
            "title": "Sarda-type falls: vertical drop, crest shape and ratings",
            "html": "<p>The <em>Sarda</em> fall family is a vertical-drop fall: water passes over a raised crest wall and falls vertically into a protected pool or cistern. Other families differ in their downstream profile: an Inglis fall uses a straight glacis with a baffle platform and wall, a Montague fall a parabolic glacis, and stepped falls a cascade of small drops.</p><p>Discharge over the crest comes from a calibrated free-overflow rating. The rating is only one check; the cistern, foundation and operating range must also be designed.</p><p>Crest descriptions need care. A crest whose body is triangular in the streamwise section but whose overflow edge is straight and level across the canal is not a V-notch. A V-notch has a triangular transverse opening whose width grows with head.</p>",
            "formulas": [
              {
                "label": "Calibrated crest rating used here, SI",
                "tex": "Q = 1.5\\,L H^{3/2}"
              }
            ],
            "example": {
              "title": "Worked example: an 8 m crest",
              "html": "<p>With L = 8 m and energy head H = 1 m, \\(Q = 1.5 \\times 8 \\times 1^{3/2} = 12\\) cumecs. Being below a quoted capacity limit would not by itself prove the fall adequate.</p>"
            },
            "points": [
              {
                "html": "In a Sarda type fall, the crests used for discharges up to 14 m<sup>3</sup>/s and up to 85 m<sup>3</sup>/s are, respectively, rectangular and triangular.",
                "sources": [
                  {
                    "id": "CAP4-07-00132",
                    "label": "p. 30; topic 7 point 125; topic 7 point 126"
                  }
                ]
              },
              {
                "html": "In a Sarda type fall, a rectangular crest is generally used for canal discharges up to 14 m<sup>3</sup>/s.",
                "sources": [
                  {
                    "id": "CAP4-07-00126",
                    "label": "p. 30; topic 7 point 125"
                  }
                ]
              },
              {
                "html": "In a Sarda type fall, a triangular crest is generally used for canal discharges up to 85 m<sup>3</sup>/s.",
                "sources": [
                  {
                    "id": "CAP4-07-00127",
                    "label": "p. 30; topic 7 point 126"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00132",
                "label": "p. 30; topic 7 point 125; topic 7 point 126"
              },
              {
                "id": "CAP4-07-00126",
                "label": "p. 30; topic 7 point 125"
              },
              {
                "id": "CAP4-07-00127",
                "label": "p. 30; topic 7 point 126"
              }
            ]
          },
          {
            "id": "cross-drainage-canal-over-drain",
            "title": "Canal over drain: aqueduct and siphon aqueduct",
            "html": "<p>Cross-drainage works are named by which stream passes over and by how the lower stream flows. When the canal passes above the drain:</p><ul><li>An <em>aqueduct</em> carries canal water in an upper trough while the drain passes beneath with a free surface at its design flood. A low drain bed is not enough; the design flood surface must fit under the actual underside of the canal structure.</li><li>A <em>siphon aqueduct</em> is needed when the drain must flow through full pressure barrels beneath the canal at the design flood. The word siphon refers to that pressurized undercrossing; the canal stays on top, and enough head is needed for barrel and local losses.</li></ul><p>An aqueduct deals with a canal crossing a lower drain, a different function from the head regulator's control of river water entering the canal. Each work is identified by function rather than by an absolute rule about where it may be placed.</p>",
            "moreHtml": "<table><thead><tr><th scope='col'>Structure</th><th scope='col'>Stream on top</th><th scope='col'>Lower stream</th></tr></thead><tbody><tr><th scope='row'>Aqueduct</th><td>Canal</td><td>Drain, free surface</td></tr><tr><th scope='row'>Siphon aqueduct</th><td>Canal</td><td>Drain in full pressure barrels</td></tr><tr><th scope='row'>Superpassage</th><td>Drain</td><td>Canal, free surface</td></tr><tr><th scope='row'>Canal siphon</th><td>Drain</td><td>Canal in full pressure barrels</td></tr><tr><th scope='row'>Level crossing</th><td>Neither</td><td>Flows meet at similar levels under regulation</td></tr><tr><th scope='row'>Canal inlet</th><td>Neither</td><td>Drain water admitted into the canal</td></tr></tbody></table>",
            "points": [
              {
                "html": "Cross drainage works carrying the canal over a natural drain are called aqueduct and siphon aqueduct.",
                "sources": [
                  {
                    "id": "CAP4-07-00078",
                    "label": "p. 29; topic 7 point 80"
                  }
                ]
              },
              {
                "html": "When a canal is carried over a drain and the drain water flows under pressure below the canal trough, the structure is a siphon aqueduct.",
                "sources": [
                  {
                    "id": "CAP4-07-00079",
                    "label": "p. 29; topic 7 point 80"
                  }
                ]
              },
              {
                "html": "A canal aqueduct is not provided at a head regulator.",
                "sources": [
                  {
                    "id": "CAP4-07-00073",
                    "label": "p. 28; topic 7 point 76"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00078",
                "label": "p. 29; topic 7 point 80"
              },
              {
                "id": "CAP4-07-00079",
                "label": "p. 29; topic 7 point 80"
              },
              {
                "id": "CAP4-07-00073",
                "label": "p. 28; topic 7 point 76"
              }
            ]
          },
          {
            "id": "cross-drainage-drain-over-canal",
            "title": "Drain over canal: superpassage and canal siphon",
            "html": "<p>When the drain passes above the canal, the condition of the lower canal flow decides the name.</p><ul><li>A <em>superpassage</em> carries the drain in an upper trough while the canal passes underneath with a free surface and adequate air clearance.</li><li>A <em>canal siphon</em>, often called an inverted siphon, depresses the canal into closed barrels beneath the drain, where it runs full under pressure. Full pressure flow does not necessarily mean negative gauge pressure.</li></ul><p>Clearance in a superpassage is checked against the structure, not merely against water surfaces: the air gap is the underside of the drain trough minus the canal full supply level.</p>",
            "formulas": [
              {
                "label": "Superpassage air clearance",
                "tex": "c = \\text{RL}_{\\text{trough}} - \\text{FSL}"
              }
            ],
            "example": {
              "title": "Worked example: a clearance check",
              "html": "<p>Canal FSL at RL 99.0 m, trough underside at RL 99.8 m, required clearance 0.5 m: c = 99.8 − 99.0 = 0.8 m, which exceeds 0.5 m, so the check is met.</p>"
            },
            "points": [
              {
                "html": "Cross drainage works that carry the drainage over the canal are super passage and canal siphon.",
                "sources": [
                  {
                    "id": "CAP4-07-00076",
                    "label": "pp. 29, 30; topic 7 point 79; topic 7 point 124"
                  }
                ]
              },
              {
                "html": "The structure built when a natural drainage channel crosses completely over an irrigation channel, with the canal flowing freely below, is a super passage.",
                "sources": [
                  {
                    "id": "CAP4-07-00077",
                    "label": "p. 29; topic 7 point 79"
                  }
                ]
              },
              {
                "html": "In a super passage, the full supply level (FSL) of the canal is below the drain flood level.",
                "sources": [
                  {
                    "id": "CAP4-07-00075",
                    "label": "p. 28; topic 7 point 78"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00076",
                "label": "pp. 29, 30; topic 7 point 79; topic 7 point 124"
              },
              {
                "id": "CAP4-07-00077",
                "label": "p. 29; topic 7 point 79"
              },
              {
                "id": "CAP4-07-00075",
                "label": "p. 28; topic 7 point 78"
              }
            ]
          },
          {
            "id": "cross-drainage-at-similar-levels",
            "title": "Canal inlets and level crossings",
            "html": "<p>Not every crossing keeps the two flows apart. A <em>canal inlet</em> deliberately admits a small drain into the canal so that the flows mix. It suits a small hillside drain when the canal has spare capacity and the drainage water's quality and sediment load are acceptable; surplus must be released downstream where necessary. Aqueducts, superpassages and siphons are grade-separated and keep the flows apart.</p><p>A <em>level crossing</em> lets a canal and a drain meet at nearly equal bed levels, with regulating gates on the canal and drain exits to control the combined flow during the flood. It becomes a candidate where a large canal meets a flashy drain carrying a short-lived high flood at almost the same bed level.</p>",
            "points": [
              {
                "html": "The hydraulic structure that allows drainage water to mix with the canal water is a canal inlet.",
                "sources": [
                  {
                    "id": "CAP4-07-00035",
                    "label": "p. 27; topic 7 point 35"
                  }
                ]
              },
              {
                "html": "The crossing arrangement preferably made at the junction of a large canal and a stream carrying a short-lived high flood at almost equal bed levels is a level crossing.",
                "sources": [
                  {
                    "id": "CAP4-07-00074",
                    "label": "p. 28; topic 7 point 77"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00035",
                "label": "p. 27; topic 7 point 35"
              },
              {
                "id": "CAP4-07-00074",
                "label": "p. 28; topic 7 point 77"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Outlet flexibility",
            "tex": "F = \\dfrac{dq/q}{dQ/Q}"
          },
          {
            "label": "Outlet sensitivity",
            "tex": "S = \\dfrac{d(\\ln q)}{d(\\ln Y)}"
          },
          {
            "label": "Fall to be taken by drops",
            "tex": "H_d = \\Delta z_g - L\\,S_0"
          },
          {
            "label": "Calibrated crest rating",
            "tex": "Q = 1.5\\,L H^{3/2}"
          },
          {
            "label": "Superpassage air clearance",
            "tex": "c = \\text{RL}_{\\text{trough}} - \\text{FSL}"
          }
        ],
        "cautions": [],
        "gaps": [
          "Hydraulic design of regulator crests and of the impervious floors beneath regulators and falls is not calculated in these questions.",
          "Energy dissipation below falls, including cistern depth and length, is not quantified.",
          "Pipe-outlet discharge equations and drowned-outlet ratings are not given; outlets are treated only through flexibility and sensitivity.",
          "Waterway, uplift and afflux calculations for aqueducts, siphons and superpassages are not covered."
        ]
      },
      "ACiE0706": {
        "code": "ACiE0706",
        "questionCount": 17,
        "format": 2,
        "summary": "<p>This subchapter treats waterlogging as a groundwater balance and then covers its remedies: matching irrigation to crop needs, surface drainage of hollows and fields, the crop effects of poor aeration, diagnosis of saline and alkaline soils, lowering the water table by pumping and field drains, and the suitability and spacing of subsurface tile drains.</p>",
        "blocks": [
          {
            "id": "waterlogging-as-a-water-balance",
            "title": "Waterlogging as a groundwater balance: canal seepage",
            "html": "<p>The water table climbs whenever inflow to the shallow aquifer outpaces outflow.</p><ul><li><em>Recharge</em>: percolating rain, seepage from canals and deep percolation from fields.</li><li><em>Removal</em>: natural groundwater outflow, drainage, evaporation and pumping.</li></ul><p>Canal seepage is a direct aquifer inflow. When an unlined canal leaks persistently and outflow and pumping cannot keep pace, storage and the table rise until the root zone becomes saturated or wetted by capillary rise. Lining or interceptor drains reduce that component, but the whole balance decides the outcome.</p>",
            "formulas": [
              {
                "label": "Shallow-aquifer balance",
                "tex": "\\Delta S = \\text{recharge} - \\text{removal}",
                "where": "The water table rises while ΔS is positive, that is while recharge exceeds removal."
              }
            ],
            "points": [
              {
                "html": "Considering canals as a factor, seepage of water through the canals causes waterlogging.",
                "sources": [
                  {
                    "id": "CAP4-07-00089",
                    "label": "p. 29; topic 7 point 90"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00089",
                "label": "p. 29; topic 7 point 90"
              }
            ]
          },
          {
            "id": "over-irrigation-and-applied-depth",
            "title": "Over-irrigation, application frequency and applied depth",
            "html": "<p>Over-irrigation adds deep percolation beyond crop use. The remedy is to size each application to the crop's actual deficit and to provide drainage for unavoidable excess.</p><p>Applying an unchanged large dose twice as often raises total supply and can worsen recharge. The depth–time water balance governs.</p><p>Spreading a fixed supply over more land can also help, because the applied depth is volume over area; 1 ha = 10000 m<sup>2</sup>.</p>",
            "formulas": [
              {
                "label": "Applied depth",
                "tex": "d = \\dfrac{V}{A}"
              }
            ],
            "example": {
              "title": "Worked example: 60000 m³ over 100 ha or 200 ha",
              "html": "<ol><li>Over 100 ha, or 1000000 m<sup>2</sup>: \\(d = 60000/1000000 = 0.06\\) m, or 60 mm. Against a 30 mm need, 30 mm is excess.</li><li>Over 200 ha: \\(d = 0.03\\) m, or 30 mm, with zero excess.</li></ol><p>This assumes no spare soil storage and adequate crop supply and drainage.</p>"
            },
            "points": [
              {
                "html": "Over and intensive irrigation causes waterlogging.",
                "sources": [
                  {
                    "id": "CAP4-07-00090",
                    "label": "p. 29; topic 7 point 91"
                  }
                ]
              },
              {
                "html": "Frequent irrigation does not prevent waterlogging.",
                "sources": [
                  {
                    "id": "CAP4-07-00091",
                    "label": "p. 29; topic 7 point 92"
                  }
                ]
              },
              {
                "html": "To reduce waterlogging, extensive irrigation is suggested instead of intensive irrigation.",
                "sources": [
                  {
                    "id": "CAP4-07-00133",
                    "label": "p. 29; topic 7 point 91"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00090",
                "label": "p. 29; topic 7 point 91"
              },
              {
                "id": "CAP4-07-00091",
                "label": "p. 29; topic 7 point 92"
              },
              {
                "id": "CAP4-07-00133",
                "label": "p. 29; topic 7 point 91"
              }
            ]
          },
          {
            "id": "surface-drainage-and-topography",
            "title": "Depressions and bedding: surface drainage of fields",
            "html": "<p>Irregular topography causes waterlogging where closed depressions trap water that has no gravity outlet, so hollows stay ponded while higher fields drain. The immediate remedy is to link each hollow to a workable outlet with graded channels or land shaping.</p><p><em>Bedding</em> is a surface method for cropped land: the field is shaped into slightly raised beds with dead furrows between them, which collect excess rain or irrigation water and lead it to an outlet. It is a surface-shaping method, unlike buried tile, mole or pumped-well drainage.</p>",
            "points": [
              {
                "html": "Irregular topography causes waterlogging because of the depressions of the terrain.",
                "sources": [
                  {
                    "id": "CAP4-07-00083",
                    "label": "p. 29; topic 7 point 84"
                  }
                ]
              },
              {
                "html": "The method which uses dead furrows on cropped farms to drain excess irrigation or rain water is called bedding.",
                "sources": [
                  {
                    "id": "CAP4-07-00088",
                    "label": "p. 29; topic 7 point 89"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00083",
                "label": "p. 29; topic 7 point 84"
              },
              {
                "id": "CAP4-07-00088",
                "label": "p. 29; topic 7 point 89"
              }
            ]
          },
          {
            "id": "open-surface-drains",
            "title": "Open surface drains: when they work and their section",
            "html": "<p>A shallow surface drain removes whatever excess arrives at the surface, whether from rain, run-on or irrigation.</p><p>Unlined open drains commonly use a trapezoidal section, which combines a finite bed width with stable sloping earth banks and avoids unsupported vertical soil faces.</p>",
            "points": [
              {
                "html": "Open drains that are fully operative only in the rainy season are shallow surface drains.",
                "sources": [
                  {
                    "id": "CAP4-07-00081",
                    "label": "p. 29; topic 7 point 82"
                  }
                ]
              },
              {
                "html": "The optimal shape for a surface drain is trapezoidal.",
                "sources": [
                  {
                    "id": "CAP4-07-00093",
                    "label": "p. 29; topic 7 point 94"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00081",
                "label": "p. 29; topic 7 point 82"
              },
              {
                "id": "CAP4-07-00093",
                "label": "p. 29; topic 7 point 94"
              }
            ]
          },
          {
            "id": "effects-of-waterlogging-on-crops",
            "title": "Why waterlogged soils lose productivity",
            "html": "<p>The direct harm of waterlogging is oxygen deficiency in the root zone. Oxygen diffuses far more slowly through water-filled pores than through air-filled ones, so root and microbial respiration use it up faster than it is replaced; roots deteriorate and harmful reduced conditions can develop. Saturation alone does not prove salt stress, and weeds that may accompany wet land are not the fundamental cause: clearing them leaves the aeration problem untouched.</p><p>Drainage helps by aerating soil that already exists. Tile drainage that lowers a persistently shallow water table increases the air-filled pore space and the depth of soil roots can exploit. It does not create new mineral soil, and the yield response still depends on the crop, nutrients and water management.</p>",
            "points": [
              {
                "html": "When soil is waterlogged, it becomes infertile due to the growing of weeds.",
                "sources": [
                  {
                    "id": "CAP4-07-00101",
                    "label": "p. 29; topic 7 point 102"
                  }
                ]
              },
              {
                "html": "Tile drainage helps to increase crop yields by increasing the volume of soil available to the roots.",
                "sources": [
                  {
                    "id": "CAP4-07-00084",
                    "label": "p. 29; topic 7 point 85"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00101",
                "label": "p. 29; topic 7 point 102"
              },
              {
                "id": "CAP4-07-00084",
                "label": "p. 29; topic 7 point 85"
              }
            ]
          },
          {
            "id": "saline-and-alkaline-soils",
            "title": "Saline and alkaline soils: diagnosis before leaching",
            "html": "<p>Waterlogged land can also carry chemical problems, which must be diagnosed rather than assumed. A soil pH of 11 indicates strong alkalinity that can severely constrain many crops. The pH alone does not give the dissolved-salt concentration, measured as the electrical conductivity of a saturated extract, or the exchangeable sodium percentage, and waterlogging does not inevitably produce such a pH.</p><p>For a saline but non-sodic soil, salts are exported by controlled leaching followed by drainage: enough good-quality water dissolves the salts and carries them below the root zone, and a working outlet removes the saline water. Flooding without an outlet can raise the water table and leave salts reconcentrated at the surface, and wetting that never moves water downwards exports nothing. Sodic soils also need sodium and amendment assessment.</p>",
            "points": [
              {
                "html": "The top soil of a waterlogged field becomes more alkaline and infertile if its pH value is 11.",
                "sources": [
                  {
                    "id": "CAP4-07-00094",
                    "label": "p. 29; topic 7 point 95"
                  }
                ]
              },
              {
                "html": "Saline soil can be improved by leaching, by flooding and draining.",
                "sources": [
                  {
                    "id": "CAP4-07-00080",
                    "label": "p. 29; topic 7 point 81; topic 7 point 106"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00094",
                "label": "p. 29; topic 7 point 95"
              },
              {
                "id": "CAP4-07-00080",
                "label": "p. 29; topic 7 point 81; topic 7 point 106"
              }
            ]
          },
          {
            "id": "lowering-the-water-table-and-field-drains",
            "title": "Lowering the water table: pumping and field drainage networks",
            "html": "<p>Where an aquifer is hydraulically connected to the waterlogged zone, pumping that exports groundwater outside the affected area, with recharge unchanged, reduces storage, so the water table falls. Such pumping helps relieve waterlogging rather than cause it. The benefit assumes the pumped water does not return as local recharge, and excessive pumping carries its own risks of depletion, subsidence or salinity.</p><p>Excess water already on or in farmland is removed by a <em>field drainage network</em> of surface or subsurface drains leading to a viable outfall. A canal escape is different: it disposes of surplus water still inside the supply canal and does not drain saturated fields unless designed for it. A head regulator controls supply, and a farm pond without an outlet stores water but cannot export it.</p>",
            "points": [
              {
                "html": "Excessive tapping of ground water does not contribute to waterlogging.",
                "sources": [
                  {
                    "id": "CAP4-07-00082",
                    "label": "p. 29; topic 7 point 83"
                  }
                ]
              },
              {
                "html": "The drainage provided to escape water from a waterlogged area is by drains.",
                "sources": [
                  {
                    "id": "CAP4-07-00092",
                    "label": "p. 29; topic 7 point 93"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00082",
                "label": "p. 29; topic 7 point 83"
              },
              {
                "id": "CAP4-07-00092",
                "label": "p. 29; topic 7 point 93"
              }
            ]
          },
          {
            "id": "tile-drainage-suitability-and-spacing",
            "title": "Subsurface tile drainage: suitability, placement and spacing",
            "html": "<p><em>Tile drains</em> collect subsurface water through joints or perforations and convey it to an outlet.</p><p>A drain laid below a nearly impermeable horizon, with no hydraulic connection through it, may leave perched water above untouched, however deep or large the pipe. The remedy is correct placement or connection, not the conclusion that such soils can never be drained.</p><p>In the steady model below, C lumps the recharge, the allowed midpoint head and the equivalent geometry. In a full Hooghoudt solution the equivalent depth depends on spacing and must be updated.</p>",
            "formulas": [
              {
                "label": "Steady spacing model",
                "tex": "L^2 = KC"
              },
              {
                "label": "With C held fixed",
                "tex": "L \\propto \\sqrt{K}"
              }
            ],
            "example": {
              "title": "Worked example: conductivity quadruples",
              "html": "<p>With recharge, allowed head and equivalent geometry fixed, \\(L_2/L_1 = \\sqrt{4} = 2\\): the permissible spacing doubles. Assuming direct proportionality would wrongly give four times the spacing.</p>"
            },
            "points": [
              {
                "html": "A tile drain is suitable for wet soil.",
                "sources": [
                  {
                    "id": "CAP4-07-00086",
                    "label": "p. 29; topic 7 point 87"
                  }
                ]
              },
              {
                "html": "Tile drains should not be placed under less pervious strata.",
                "sources": [
                  {
                    "id": "CAP4-07-00085",
                    "label": "p. 29; topic 7 point 86"
                  }
                ]
              },
              {
                "html": "The spacing of tile drains to relieve waterlogged land is directly proportional to the coefficient of permeability of the soil to be drained.",
                "sources": [
                  {
                    "id": "CAP4-07-00087",
                    "label": "p. 29; topic 7 point 88"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00086",
                "label": "p. 29; topic 7 point 87"
              },
              {
                "id": "CAP4-07-00085",
                "label": "p. 29; topic 7 point 86"
              },
              {
                "id": "CAP4-07-00087",
                "label": "p. 29; topic 7 point 88"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Shallow-aquifer balance",
            "tex": "\\Delta S = \\text{recharge} - \\text{removal}"
          },
          {
            "label": "Applied depth",
            "tex": "d = \\dfrac{V}{A}"
          },
          {
            "label": "Steady drain-spacing model",
            "tex": "L^2 = KC"
          },
          {
            "label": "Spacing with C fixed",
            "tex": "L \\propto \\sqrt{K}"
          }
        ],
        "cautions": [],
        "gaps": [
          "Numerical drain-spacing design with full Hooghoudt or Ernst equations, drainage coefficients and equivalent depth is not tested.",
          "Surface-drain capacity from runoff estimation and outfall design are not covered.",
          "Anti-waterlogging measures such as conjunctive use, canal lining economics and biological drainage appear only through the water balance.",
          "Numerical salinity and sodicity classification limits, such as EC and ESP thresholds, are not provided by the capsule questions."
        ]
      }
    });
})();
