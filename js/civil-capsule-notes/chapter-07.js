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
            "moreHtml": "<p>These crop figures are illustrative planning inputs, not measurements. They leave out paddy land preparation, seepage, percolation, leaching and storage change, so they rank crops only for the stated budget and establish no universal ordering by crop name. Ranking by ET alone, or adding rain to ET, says nothing about irrigation demand.</p>",
            "points": [
              {
                "html": "In irrigation scheduling, effective rainfall is the portion of rain available to meet crop evapotranspiration needs; surface runoff and deep drainage are excluded.",
                "sources": [
                  {
                    "id": "CAP4-03-00095",
                    "label": "p. 13; topic 3 point 94"
                  }
                ]
              },
              {
                "html": "With crop ET of 150 mm and only 50 mm of an 80 mm rainfall useful, the net irrigation requirement is 150 − 50 = 100 mm.",
                "sources": [
                  {
                    "id": "CAP4-07-00109",
                    "label": "p. 29; topic 7 point 111"
                  }
                ]
              },
              {
                "html": "In the stated budget banana needs the greatest net irrigation delta, 1.40 m, ahead of rice at 1.20 m; net delta is ET minus effective rainfall.",
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
                "html": "Crop period runs from sowing to harvest and base period from first to last irrigation: sowing on day 0, watering from day 8 to day 98 and harvest on day 112 give 112 days and 90 days.",
                "sources": [
                  {
                    "id": "CAP4-07-00002",
                    "label": "p. 27; topic 7 point 2"
                  }
                ]
              },
              {
                "html": "Duty is proportional to base period over delta but equals \\(8.64B/\\Delta\\) in ha/cumec: a delta of 0.72 m over 90 days gives 1080 ha/cumec.",
                "sources": [
                  {
                    "id": "CAP4-07-00001",
                    "label": "p. 27; topic 7 point 1"
                  }
                ]
              },
              {
                "html": "For 800 ha served by 0.8 cumec at the field after a 20% conveyance loss, the field-inlet and canal-head duties are 1000 and 800 ha/cumec.",
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
                "html": "Established lowland rice is the crop best adapted to shallow ponding, because internal air spaces aerate its roots under flooded cultivation.",
                "sources": [
                  {
                    "id": "CAP4-07-00003",
                    "label": "p. 27; topic 7 point 3"
                  }
                ]
              },
              {
                "html": "At the stated depths on equal 10 ha blocks, sugarcane takes the largest seasonal allocation: 180000 cubic metres.",
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
                "html": "The fraction that drains rapidly from large connected pores after heavy irrigation is gravitational water, moving mainly under gravity.",
                "sources": [
                  {
                    "id": "CAP4-07-00006",
                    "label": "p. 27; topic 7 point 6"
                  }
                ]
              },
              {
                "html": "Some capillary water is held too tightly for effective uptake: soil at permanent wilting still contains capillary-held water that roots cannot extract.",
                "sources": [
                  {
                    "id": "CAP4-07-00007",
                    "label": "p. 27; topic 7 point 7"
                  }
                ]
              },
              {
                "html": "Capillary suction at the curved wetting meniscus holds water up in a fine pore above the water table; surface tension creates the negative pore pressure.",
                "sources": [
                  {
                    "id": "CAP4-07-00009",
                    "label": "p. 27; topic 7 point 9"
                  }
                ]
              },
              {
                "html": "Soils of equal total porosity can have different field capacities because their drainage and capillary retention differ with pore-size distribution.",
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
            "html": "<p><em>Total available water</em> (TAW) is the storage between field capacity and permanent wilting over the root depth. The moisture difference is a volumetric fraction; multiplying it by the root depth converts it to a stored depth. Water still present at wilting is excluded.</p><p>Crops are not allowed to exhaust TAW. A <em>permitted depletion fraction</em> \\(p\\) sets the readily available water (RAW), and the interval between irrigations is that allowance divided by the net daily demand. Field capacity alone cannot fix an interval: wilting content, root depth, allowable depletion and demand are all needed.</p><p><em>Interval</em> and <em>frequency</em> are related but different. Interval is the elapsed time between waterings; frequency is the number of waterings per unit time, the reciprocal of the interval on a regular schedule.</p>",
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
                "html": "A 0.60 m root zone with volumetric field capacity 0.32 and wilting content 0.17 holds 90 mm of total available water.",
                "sources": [
                  {
                    "id": "CAP4-07-00008",
                    "label": "p. 27; topic 7 point 8; topic 7 point 11"
                  }
                ]
              },
              {
                "html": "With 120 mm of total available water, permitted depletion 0.40 and ET of 6 mm/day without rain, the 48 mm allowance lasts 8 days: irrigation is due after 8 days.",
                "sources": [
                  {
                    "id": "CAP4-07-00014",
                    "label": "p. 27; topic 7 point 15"
                  }
                ]
              },
              {
                "html": "Shortening a regular interval from 12 days to 6 days means the interval halves and frequency doubles, because frequency is the reciprocal of interval.",
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
            "html": "<p>The depletion budget shows how each commonly listed factor acts. Holding the other inputs fixed isolates one effect at a time.</p><ul><li><em>Soil:</em> better water retention gives a larger readily available store and a longer interval at the same demand.</li><li><em>Crop:</em> deeper effective rooting draws on more of the profile, so the same moisture difference stores more water.</li><li><em>Climate:</em> hot, dry weather raises the daily net demand and shortens the interval.</li><li><em>Fertility:</em> fertilizer acts only indirectly, by changing canopy growth, rooting and water uptake; excess salts can add stress.</li></ul><p>No direct conversion exists from fertilizer quantity to irrigation frequency. The schedule is revised from observed crop response and measured soil water, and rainfall or a changed depletion policy needs a fresh water balance.</p>",
            "example": {
              "title": "Worked examples: one factor at a time",
              "html": "<ol><li>Soil: readily available water of 36 mm and 60 mm, used at 6 mm/day, lasts 36/6 = 6 days and 60/6 = 10 days.</li><li>Crop: with a volumetric available-water difference of 0.15 and \\(p = 0.40\\), roots reaching 0.50 m and 1.00 m give TAW of 75 and 150 mm, allowances of 30 and 60 mm, and intervals of 30/5 = 6 and 60/5 = 12 days at 5 mm/day.</li><li>Climate: a 48 mm allowance lasts 48/4 = 12 days at 4 mm/day but only 48/8 = 6 days at 8 mm/day.</li></ol>"
            },
            "points": [
              {
                "html": "Equal root depths holding readily available water of 36 mm and 60 mm give intervals of 6 days and 10 days at 6 mm/day: soil storage alone changes the interval.",
                "sources": [
                  {
                    "id": "CAP4-07-00119",
                    "label": "p. 30; topic 7 point 120"
                  }
                ]
              },
              {
                "html": "With available-water difference 0.15, depletion fraction 0.40 and 5 mm/day demand, roots of 0.50 m and 1.00 m give 6 days for the shallow crop and 12 days for the deep one.",
                "sources": [
                  {
                    "id": "CAP4-07-00120",
                    "label": "p. 30; topic 7 point 120"
                  }
                ]
              },
              {
                "html": "When hot, dry weather doubles net demand from 4 to 8 mm/day, a 48 mm allowance shortens the interval from 12 days to 6 days.",
                "sources": [
                  {
                    "id": "CAP4-07-00121",
                    "label": "p. 30; topic 7 point 120"
                  }
                ]
              },
              {
                "html": "Fertilization affects scheduling only indirectly: update demand and depletion estimates using observed crop response, not a fixed fertilizer-to-frequency rule.",
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
                "html": "Consumptive use counts evaporation and transpiration only: 2 mm/day plus 4 mm/day gives 6 mm/day, with deep percolation excluded.",
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
                "html": "A farm pond with usable storage bridges the timing mismatch between a short storm and irrigation needed several days later.",
                "sources": [
                  {
                    "id": "CAP4-07-00012",
                    "label": "p. 27; topic 7 point 13"
                  }
                ]
              },
              {
                "html": "Storing catchment runoff for later supplemental irrigation is the primary job of a farm pond; regulators, drains and flumes hold no reserve.",
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
            "html": "<p>Losses are allowed for by dividing the net need by efficiency, never by multiplying it. When each efficiency is defined on its own incoming water, the overall efficiency is their product, and applying only one of them misses a loss stage.</p><p><em>Kor watering</em> is the first important watering after sowing, needed within a short, critical establishment window called the <em>kor period</em>. Its depth and timing depend on the crop and practice; describing the plants as a few centimetres high is descriptive, not a universal trigger. Kor watering is distinct from pre-sowing watering and from the full-season delta.</p><p>Because a set depth must arrive within a short period, kor demand can govern canal size. The area, kor period, overall efficiency and running time are all needed, and every coincident demand must still be checked.</p>",
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
                "html": "Storing 72 mm with application efficiency 0.80 and conveyance efficiency 0.90 needs a gross diversion of 72/0.72 = 100 mm over the same area.",
                "sources": [
                  {
                    "id": "CAP4-07-00031",
                    "label": "p. 27; topic 7 point 31"
                  }
                ]
              },
              {
                "html": "Kor watering is the first substantial watering after sowing, delivered within the short establishment window called the kor period.",
                "sources": [
                  {
                    "id": "CAP4-07-00106",
                    "label": "p. 29; topic 7 point 108"
                  }
                ]
              },
              {
                "html": "A 0.14 m net kor depth on 864 ha within 14 days is 1.0 cumec net; at overall efficiency 0.70 the canal head needs 1.429 cumecs.",
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
                "html": "With Rabi 2.4 plus perennial 0.6 and Kharif 3.0 plus perennial 0.8 in non-overlapping seasons, the governing peak capacity is 3.8 cumecs.",
                "sources": [
                  {
                    "id": "CAP4-07-00027",
                    "label": "p. 27; topic 7 point 27"
                  }
                ]
              },
              {
                "html": "Crop ratio taken as Rabi area over Kharif area is 2400/1600 = 1.5 for 2400 ha and 1600 ha; it is not a fixed value.",
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
        "cautions": [
          {
            "id": "caution-effective-rainfall-meanings",
            "status": "review",
            "prompt": "Precipitation during the crop period that is available to meet crop evapotranspiration is effective rainfall",
            "html": "<p>That is the irrigation meaning, used for scheduling and for the net irrigation requirement. In hydrology the same phrase usually means rainfall excess, the runoff-producing part of a storm, so identify which meaning is intended before calculating.</p>",
            "sources": [
              {
                "id": "CAP4-03-00095",
                "label": "p. 13; topic 3 point 94"
              }
            ]
          },
          {
            "id": "caution-duty-conversion-factor",
            "status": "corrected",
            "prompt": "The ratio of base period to delta is duty",
            "html": "<p>Duty is proportional to \\(B/\\Delta\\) but not numerically equal to it. With \\(B\\) in days, \\(\\Delta\\) in metres and duty in ha/cumec, \\(D = 8.64B/\\Delta\\); the factor comes from 86400 s per day and 10000 m² per hectare. A delta of 0.72 m over 90 days gives 1080 ha/cumec, whereas the bare ratio is 125.</p>",
            "sources": [
              {
                "id": "CAP4-07-00001",
                "label": "p. 27; topic 7 point 1"
              }
            ]
          },
          {
            "id": "caution-rice-water-resistance",
            "status": "review",
            "prompt": "Rice has highest water resistance",
            "html": "<p>The phrase is undefined. What can be taught is that established lowland rice tolerates ordinary shallow ponding better than common dryland crops such as wheat, tobacco or chickpea. This is not a universal ranking of resistance to drought, deep submergence or every wet condition.</p>",
            "sources": [
              {
                "id": "CAP4-07-00003",
                "label": "p. 27; topic 7 point 3"
              }
            ]
          },
          {
            "id": "caution-duty-maximum-location",
            "status": "review",
            "prompt": "Duty is maximum on the field",
            "html": "<p>True when the same area is compared over the same period at points along one supply route, because upstream losses raise the flow needed and so lower the duty. It is not a rule for ranking separate fields, branches or seasons by position alone.</p>",
            "sources": [
              {
                "id": "CAP4-07-00004",
                "label": "p. 27; topic 7 point 4"
              }
            ]
          },
          {
            "id": "caution-sugarcane-maximum-water",
            "status": "review",
            "prompt": "Sugarcane crops require maximum water per hectare for production",
            "html": "<p>A long-duration crop can accumulate a large seasonal total, but the depths used here are illustrative planning inputs. Demand depends on climate, season length and management, so compare stated depths rather than assume a verified global maximum.</p>",
            "sources": [
              {
                "id": "CAP4-07-00005",
                "label": "p. 27; topic 7 point 5"
              }
            ]
          },
          {
            "id": "caution-capillary-water-availability",
            "status": "corrected",
            "prompt": "Capillary water is usable to plants",
            "html": "<p>Only part of it is. Capillary water between field capacity and permanent wilting forms the conventional available reservoir, but the capillary water still present at wilting is held too strongly for roots to extract.</p>",
            "sources": [
              {
                "id": "CAP4-07-00007",
                "label": "p. 27; topic 7 point 7"
              }
            ]
          },
          {
            "id": "caution-interval-versus-frequency",
            "status": "corrected",
            "prompt": "Irrigation interval means frequency of irrigation",
            "html": "<p>Interval is the elapsed time between successive irrigations; frequency is the number of irrigations per unit time. On a regular schedule each is the reciprocal of the other, so they are linked but not the same quantity: halving the interval doubles the frequency.</p>",
            "sources": [
              {
                "id": "CAP4-07-00013",
                "label": "p. 27; topic 7 point 14"
              }
            ]
          },
          {
            "id": "caution-interval-from-field-capacity",
            "status": "corrected",
            "prompt": "Irrigation interval is determined by field capacity to maximum crop water requirement",
            "html": "<p>Field capacity is only the upper storage limit. The interval needs the full depletion budget: available water between field capacity and wilting, root depth, the permitted depletion fraction and net daily demand, giving \\(t_i = p \\cdot \\text{TAW}/\\text{ET}_{\\text{net}}\\).</p>",
            "sources": [
              {
                "id": "CAP4-07-00014",
                "label": "p. 27; topic 7 point 15"
              }
            ]
          },
          {
            "id": "caution-kor-depth-canal-capacity",
            "status": "corrected",
            "prompt": "The capacity of an irrigation canal is determined by kor water depth (Kharif)",
            "html": "<p>Kor depth alone cannot size a canal: the area, the kor period, delivery efficiency and running time are also required, and every coincident demand must be compared. Kharif kor is not automatically the governing season for every scheme.</p>",
            "sources": [
              {
                "id": "CAP4-07-00029",
                "label": "p. 27; topic 7 point 29"
              }
            ]
          },
          {
            "id": "caution-rabi-kharif-ratio",
            "status": "corrected",
            "prompt": "The ratio of irrigated area under Rabi and Kharif crops is 2",
            "html": "<p>No universal crop ratio exists. It depends on the cropping programme and on the stated definition: 2400 ha of Rabi and 1600 ha of Kharif give 1.5 as Rabi over Kharif, or about 0.667 when the ratio is reversed.</p>",
            "sources": [
              {
                "id": "CAP4-07-00104",
                "label": "p. 29; topic 7 point 105"
              }
            ]
          },
          {
            "id": "caution-kor-plant-height",
            "status": "review",
            "prompt": "Kor watering is the first watering given to a crop when the crop is a few cm high",
            "html": "<p>Kor watering is better defined as the first important post-sowing watering, delivered within the kor period. Plant height is descriptive only, and kor watering is distinct from pre-sowing watering and from the full-season requirement.</p>",
            "sources": [
              {
                "id": "CAP4-07-00106",
                "label": "p. 29; topic 7 point 108"
              }
            ]
          },
          {
            "id": "caution-highest-delta-crop",
            "status": "review",
            "prompt": "The crop with highest delta among rice, tobacco, wheat and banana is rice",
            "html": "<p>No unconditional ranking was verified. Net delta depends on the crop period, local ET, effective rainfall, paddy preparation, seepage and leaching. In the illustrative budget taught here banana needs 1.40 m against 1.20 m for rice, so calculate from stated inputs.</p>",
            "sources": [
              {
                "id": "CAP4-07-00114",
                "label": "p. 29; topic 7 point 115"
              }
            ]
          },
          {
            "id": "caution-fertilizer-and-frequency",
            "status": "review",
            "prompt": "Frequency of irrigation is dependent upon soil, crop, climate and fertilizer",
            "html": "<p>Fertility affects frequency only indirectly, through canopy growth, rooting and possible salt stress. Soil storage, crop rooting and climatic demand are the direct controls, and no rule converts fertilizer quantity into a changed interval.</p>",
            "sources": [
              {
                "id": "CAP4-07-00122",
                "label": "p. 30; topic 7 point 120"
              }
            ]
          }
        ],
        "gaps": [
          "Command-area terms such as gross and culturable command area and intensity of irrigation are named in the syllabus but not tested by these capsule questions.",
          "Methods for estimating crop evapotranspiration, such as crop coefficients or pan and climatic formulae, are not covered; ET values appear only as given inputs.",
          "Leaching requirement, groundwater contribution and paddy land-preparation water are excluded from the simplified water balances.",
          "No verified local tables of crop delta, duty or kor periods are provided; all crop figures here are illustrative."
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
                "html": "An inundation canal is an ungated diversion that receives useful supplies mainly during seasonal flood stages of the river.",
                "sources": [
                  {
                    "id": "CAP4-07-00020",
                    "label": "p. 27; topic 7 point 21"
                  }
                ]
              },
              {
                "html": "Without authorized farm outlets the main canal still serves irrigation: it conveys supply to the distribution network of branches and distributaries.",
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
                "html": "Where natural drains fall away from a watershed with command levels on both sides, a ridge alignment serves both banks with few drainage crossings.",
                "sources": [
                  {
                    "id": "CAP4-07-00041",
                    "label": "p. 28; topic 7 point 41"
                  }
                ]
              },
              {
                "html": "For a side-slope canal parallel to the drainage, crossings may be few, but local drains must still be checked in the detailed survey.",
                "sources": [
                  {
                    "id": "CAP4-07-00024",
                    "label": "p. 27; topic 7 point 24"
                  }
                ]
              },
              {
                "html": "On extensive alluvial plains with a dependable supply, gentle grades can command broad cultivable areas, although seepage and sediment still need assessment.",
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
                "html": "A cut of 1000 m³ in situ with a compacted yield of 0.90 balances 900 cubic metres of compacted bank; equal raw volumes are not a balance.",
                "sources": [
                  {
                    "id": "CAP4-07-00015",
                    "label": "p. 27; topic 7 point 16"
                  }
                ]
              },
              {
                "html": "A trapezoidal cut 4 m wide at the bed and 2 m deep with 1.5 H:1 V side slopes has \\(A = Bd + zd^2 = 14\\) square metres.",
                "sources": [
                  {
                    "id": "CAP4-07-00037",
                    "label": "p. 27; topic 7 point 37"
                  }
                ]
              },
              {
                "html": "Lining both 1.5 H:1 V faces of 2 m vertical height over 50 m needs \\(2Ld\\sqrt{1+z^2}\\), about 360.56 square metres.",
                "sources": [
                  {
                    "id": "CAP4-07-00038",
                    "label": "p. 27; topic 7 point 38"
                  }
                ]
              },
              {
                "html": "Discharge Q is a flow variable, area times mean velocity, whereas area, wetted perimeter and hydraulic radius are geometric section properties.",
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
            "html": "<p><em>Freeboard</em> is the vertical margin from the design water surface to the top of the bank or lining. It absorbs waves, surges and operating fluctuations, reducing the risk of overtopping, and it is not part of the flow area at the design level.</p><p>Freeboard does not protect a lining from frost. Frost damage depends on moisture trapped behind the lining, freezing exposure, drainage and the freeze-thaw resistance of materials and details, so poorly drained panels can crack however generous the margin above the water.</p><p><em>Lining</em> reduces seepage and raises conveyance efficiency. With a fixed head supply and unchanged crop needs and field efficiency, the area the supply can support rises in proportion to conveyance efficiency. The gain materializes only if suitable land lies within reach at adequate delivery levels: lining enlarges the irrigable area the saved water supports, not the topographic command.</p>",
            "formulas": [
              {
                "label": "Area supported after lining",
                "tex": "A_2 = A_1\\,\\dfrac{\\eta_2}{\\eta_1}",
                "where": "<p>Same head supply, crop demand and field efficiency; \\(\\eta\\) is conveyance efficiency.</p>"
              }
            ],
            "example": {
              "title": "Worked example: raising conveyance efficiency",
              "html": "<p>A head supply serving 600 ha at conveyance efficiency 0.60 is lined, raising the efficiency to 0.80:</p>\\[A_2 = 600 \\times \\dfrac{0.80}{0.60} = 800\\ \\text{ha}\\]<p>That area can be served only where suitable commandable land exists.</p>"
            },
            "points": [
              {
                "html": "The vertical allowance from the design water surface up to the bank crest, provided for waves, surges and fluctuations, is freeboard.",
                "sources": [
                  {
                    "id": "CAP4-07-00022",
                    "label": "p. 27; topic 7 point 23"
                  }
                ]
              },
              {
                "html": "Freeboard alone does not prevent frost damage: drainage behind the lining and freeze-thaw durability must be designed separately.",
                "sources": [
                  {
                    "id": "CAP4-07-00023",
                    "label": "p. 27; topic 7 point 23"
                  }
                ]
              },
              {
                "html": "Lining that raises conveyance efficiency from 0.60 to 0.80 lets a fixed supply support 800 ha instead of 600 ha, if the extra land is commandable.",
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
                "html": "Net accumulation of bed sediment that raises the mean bed level over several seasons is aggradation; net erosion that lowers it is degradation.",
                "sources": [
                  {
                    "id": "CAP4-07-00018",
                    "label": "p. 27; topic 7 point 19"
                  }
                ]
              },
              {
                "html": "Grains rolling, sliding and hopping along the bed form the bed load, including saltation; suspended load is held higher by turbulence.",
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
            "html": "<p><em>Silting</em> shrinks the effective flow area under the permitted water level and can raise boundary resistance. With the available head unchanged, the canal then conveys less water. If operators hold the discharge instead, water levels rise; the outcome depends on which condition is fixed.</p><p>Deposition follows from a sediment-budget imbalance: when a reach receives more sediment than its velocity and shear can carry onward, the excess settles. Intakes that admit sediment-rich monsoon flow into slow canal reaches are typical places for this, so a rising bed with declining capacity points first to net deposition.</p><p>This is a site-specific mechanism, not a nationwide rule: other Nepal schemes may be governed by scour, bank erosion or other problems.</p>",
            "points": [
              {
                "html": "With the available head and permitted water level fixed, silting shrinks the flow area and raises resistance, so conveyance capacity decreases.",
                "sources": [
                  {
                    "id": "CAP4-07-00017",
                    "label": "p. 27; topic 7 point 18"
                  }
                ]
              },
              {
                "html": "A rising bed and falling capacity in a slow reach fed by sediment-rich monsoon flow point first to net deposition from excess sediment supply.",
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
                "html": "In Kennedy's method the critical-velocity ratio m adjusts the reference critical velocity for sediment grade at a given water depth.",
                "sources": [
                  {
                    "id": "CAP4-07-00016",
                    "label": "p. 27; topic 7 point 17"
                  }
                ]
              },
              {
                "html": "Kennedy's empirical method was based on observations of the Upper Bari Doab Canal system in Punjab.",
                "sources": [
                  {
                    "id": "CAP4-07-00129",
                    "label": "p. 30; topic 7 point 129"
                  }
                ]
              },
              {
                "html": "Garrett's diagrams are graphical aids built on Kennedy's method, used to cut down the trial calculations of canal design.",
                "sources": [
                  {
                    "id": "CAP4-07-00039",
                    "label": "p. 27; topic 7 point 39"
                  }
                ]
              },
              {
                "html": "For a water depth of 0.75 m and \\(m = 1\\), Kennedy's relation gives 0.457511 m/s, which rounds to 0.458 m/s.",
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
                "html": "Lacey's true regime needs adjustable alluvial bed and banks with sustained sediment balance, so neither progressive deposition nor scour occurs.",
                "sources": [
                  {
                    "id": "CAP4-07-00032",
                    "label": "p. 27; topic 7 point 32"
                  }
                ]
              },
              {
                "html": "With \\(V = C R^{2/3} S^{1/3}\\), eight times the radius and one-eighth of the slope give a velocity ratio of \\(4 \\times 0.5 = 2.00\\).",
                "sources": [
                  {
                    "id": "CAP4-07-00034",
                    "label": "p. 27; topic 7 point 34"
                  }
                ]
              },
              {
                "html": "Because \\(V = \\sqrt{2fR/5}\\), fourfold \\(f\\) and ninefold \\(R\\) multiply velocity by \\(\\sqrt{36} = 6\\), not 36.",
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
                "html": "With an adopted Shields value of 0.056, a 0.010 m grain of density 2650 kg/m³ in water has a critical bed shear of about 9.06 Pa.",
                "sources": [
                  {
                    "id": "CAP4-07-00040",
                    "label": "p. 28; topic 7 point 40"
                  }
                ]
              },
              {
                "html": "When accelerated flow drives bed shear above sediment resistance in an erodible reach, expect scour and possible bed lowering, not deposition.",
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
            "html": "<p>A lined canal has a fixed boundary, so it is sized with a <em>resistance relation</em> such as Manning's rather than with a regime theory for adjustable alluvial beds. The hydraulic radius uses the wetted perimeter only; the free surface is excluded. Manning is one check among several: freeboard, lining stability, velocity limits and economy complete the design.</p><p>Trial sizing often starts from continuity: an adopted mean velocity fixes the flow area, and the section geometry then gives the bed width. The adopted velocity must afterwards be shown to be achievable on the available slope.</p><p>The reviewed archived text of IS 10430:2000, Section 8.8.1, permits trapezoidal sections, with or without rounded corners, for all types of lined canals. A trapezoid is therefore not excluded merely because a discharge falls below a quoted figure such as 85 cumecs. The origin of the capsule's 84 and 85 cumec thresholds remains unverified, and no current Nepal adoption of the standard is claimed.</p>",
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
                "html": "A lined rectangular channel 4 m wide and 2 m deep, with \\(n = 0.020\\) and slope 0.0004, has \\(R = 1\\) m and carries 8.00 cumecs by Manning's equation.",
                "sources": [
                  {
                    "id": "CAP4-07-00100",
                    "label": "p. 29; topic 7 point 101"
                  }
                ]
              },
              {
                "html": "For 90 cumecs at an adopted 2 m/s, depth 3 m and 1.5 H:1 V slopes, continuity gives \\(A = 45\\) m² and a trial bed width of 10.50 m.",
                "sources": [
                  {
                    "id": "CAP4-07-00112",
                    "label": "p. 29; topic 7 point 113"
                  }
                ]
              },
              {
                "html": "Under IS 10430:2000, Section 8.8.1, trapezoidal sections are permitted for all types of lined canals, without any 85-cumec restriction.",
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
        "cautions": [
          {
            "id": "caution-main-canal-role",
            "status": "corrected",
            "prompt": "Main canal is not considered to be used for irrigation",
            "html": "<p>The main canal is an irrigation conveyance even when it has no direct farm outlets. The defensible reading is that it does not usually water fields directly; it supplies the branches and distributaries that do.</p>",
            "sources": [
              {
                "id": "CAP4-07-00028",
                "label": "p. 27; topic 7 point 28"
              }
            ]
          },
          {
            "id": "caution-side-slope-crossings",
            "status": "corrected",
            "prompt": "Side slope canal does not need cross drainage structures",
            "html": "<p>An ideal side-slope route avoids most crossings because it runs parallel to the drains, yet local gullies and catchments may still cross it. The need for cross-drainage works and falls must be confirmed by the detailed survey.</p>",
            "sources": [
              {
                "id": "CAP4-07-00024",
                "label": "p. 27; topic 7 point 24"
              }
            ]
          },
          {
            "id": "caution-alluvial-preference",
            "status": "review",
            "prompt": "Canal irrigation is generally preferred in alluvial canal",
            "html": "<p>The circular wording is read as suitability on alluvial plains, where gentle slopes and a dependable supply at a suitable level favour gravity distribution. Seepage, sediment and drainage in the particular alluvium must still be assessed.</p>",
            "sources": [
              {
                "id": "CAP4-07-00025",
                "label": "p. 27; topic 7 point 25"
              }
            ]
          },
          {
            "id": "caution-balanced-cut-fill",
            "status": "review",
            "prompt": "Balanced depth of cutting of canal is where volume of cutting is equal to volume of filling",
            "html": "<p>Equality holds only on compatible bases. In-situ cut and compacted fill differ through shrinkage or bulking, and unsuitable soil cannot be used, so the balance compares usable compacted yield with the required bank volume.</p>",
            "sources": [
              {
                "id": "CAP4-07-00015",
                "label": "p. 27; topic 7 point 16"
              }
            ]
          },
          {
            "id": "caution-trapezoid-area-notation",
            "status": "corrected",
            "prompt": "If B is the formation width and depth y with a slope of s:1, the area of cross section is Bd + sd²",
            "html": "<p>The capsule uses both \\(y\\) and \\(d\\) for the same depth. With one symbol and the horizontal-to-vertical convention \\(z\\) H:1 V, the area is \\(Bd + zd^2\\); the cutting depth need not equal the flow depth.</p>",
            "sources": [
              {
                "id": "CAP4-07-00037",
                "label": "p. 27; topic 7 point 37"
              }
            ]
          },
          {
            "id": "caution-side-slope-lining-radical",
            "status": "corrected",
            "prompt": "Total area of side slopes is 2L × y × (1 + S²), as extracted from the capsule text",
            "html": "<p>The extracted expression lost its square-root sign. By Pythagoras each face has slant width \\(y\\sqrt{1 + S^2}\\) for a slope of \\(S\\) horizontal to 1 vertical, so the two faces need \\(2Ly\\sqrt{1 + S^2}\\). The page image itself was not reviewed.</p>",
            "sources": [
              {
                "id": "CAP4-07-00038",
                "label": "p. 27; topic 7 point 38"
              }
            ]
          },
          {
            "id": "caution-freeboard-frost",
            "status": "corrected",
            "prompt": "The purpose of providing freeboard is stability against overtopping and safety against frost crack",
            "html": "<p>Freeboard addresses water-level exceedance only. Frost cracking is controlled by drainage behind the lining, material durability and detailing, which need their own design even when the bank crest is safely high.</p>",
            "sources": [
              {
                "id": "CAP4-07-00023",
                "label": "p. 27; topic 7 point 23"
              }
            ]
          },
          {
            "id": "caution-lining-command-area",
            "status": "corrected",
            "prompt": "Due to a lined channel section the command area increases",
            "html": "<p>Lining saves water, which can support a larger irrigated area if suitable land and adequate delivery levels exist. It does not change the geometric command set by topography and water levels, so supported irrigable area must be distinguished from command area.</p>",
            "sources": [
              {
                "id": "CAP4-07-00021",
                "label": "p. 27; topic 7 point 22"
              }
            ]
          },
          {
            "id": "caution-silting-discharge",
            "status": "review",
            "prompt": "The silting in the channel causes decrease in discharge",
            "html": "<p>True when the available head and permitted water level are fixed, because deposits reduce area and raise resistance. If the discharge is held instead, water levels rise; state the controlling boundary condition before predicting the effect.</p>",
            "sources": [
              {
                "id": "CAP4-07-00017",
                "label": "p. 27; topic 7 point 18"
              }
            ]
          },
          {
            "id": "caution-nepal-alluvial-soil",
            "status": "review",
            "prompt": "The problem in Nepal for artificial channels is formation of alluvial soil",
            "html": "<p>No nationwide generalization was verified. The defensible mechanism is net deposition where sediment supply exceeds a reach's transport capacity, as at a sediment-rich monsoon intake feeding a slow reach; other Nepal sites may be governed by different problems.</p>",
            "sources": [
              {
                "id": "CAP4-07-00030",
                "label": "p. 27; topic 7 point 30"
              }
            ]
          },
          {
            "id": "caution-kennedy-velocity-rounding",
            "status": "corrected",
            "prompt": "If D = 0.75 and m = 1 then critical velocity of setting is 0.457 m/s",
            "html": "<p>D is the water depth, and the quantity is Kennedy's non-silting, non-scouring velocity rather than a settling velocity. The computed 0.457511 m/s rounds to 0.458 m/s at three decimals; 0.457 is a truncation.</p>",
            "sources": [
              {
                "id": "CAP4-07-00124",
                "label": "p. 30; topic 7 point 122"
              }
            ]
          },
          {
            "id": "caution-lacey-square-root",
            "status": "corrected",
            "prompt": "In Lacey's regime theory, the velocity of flow is proportional to silt factor and hydraulic radius",
            "html": "<p>The relation is \\(V = \\sqrt{2fR/5}\\), so velocity varies with the square root of the product \\(fR\\), not with \\(f\\) and \\(R\\) directly. Fourfold \\(f\\) with ninefold \\(R\\) gives a sixfold velocity, not a thirty-six-fold one.</p>",
            "sources": [
              {
                "id": "CAP4-07-00113",
                "label": "p. 29; topic 7 point 114"
              }
            ]
          },
          {
            "id": "caution-shields-value",
            "status": "review",
            "prompt": "For the design of non-scouring channels in coarse alluvium, the Shields entrainment function should be 0.056",
            "html": "<p>The worked example adopts 0.056 explicitly for a coarse bed. The Shields threshold depends on the grain and flow regime, so no single value is mandatory for every alluvial canal, and design allowances are added separately.</p>",
            "sources": [
              {
                "id": "CAP4-07-00040",
                "label": "p. 28; topic 7 point 40"
              }
            ]
          },
          {
            "id": "caution-scour-velocity",
            "status": "review",
            "prompt": "Canal scouring primarily results from velocity increase",
            "html": "<p>The governing condition is applied bed shear exceeding sediment resistance, with sediment supply controlling net bed change. A velocity increase is a common shorthand for rising shear, not a universal threshold on its own.</p>",
            "sources": [
              {
                "id": "CAP4-07-00130",
                "label": "p. 30; topic 7 point 130"
              }
            ]
          },
          {
            "id": "caution-triangular-lining-85",
            "status": "review",
            "prompt": "Triangular section lining is adopted when discharge in the channel is less than 85 cumecs",
            "html": "<p>The archived text of IS 10430:2000, Section 8.8.1, permits trapezoidal lined sections for all types of lined canals and does not establish this 85-cumec rule. The convention's historical origin remains unverified, and no current Nepal adoption of that standard is claimed.</p>",
            "sources": [
              {
                "id": "CAP4-07-00043",
                "label": "p. 28; topic 7 point 43"
              }
            ]
          },
          {
            "id": "caution-trapezoid-above-84",
            "status": "review",
            "prompt": "The canal sections used to carry a discharge of above 84 cumec are trapezoidal",
            "html": "<p>Trapezoidal sizing suits large lined canals, but IS 10430:2000, Section 8.8.1, permits trapezoidal sections for all lined canals, so no 84-cumec switch is endorsed. The origin of the threshold remains unverified.</p>",
            "sources": [
              {
                "id": "CAP4-07-00112",
                "label": "p. 29; topic 7 point 113"
              }
            ]
          },
          {
            "id": "caution-manning-lined-canal",
            "status": "review",
            "prompt": "A lined alluvial canal is best designed on the basis of Manning theory",
            "html": "<p>Manning's equation suits the fixed boundary of a lined canal as a resistance relation under uniform-flow conditions, but it is not a complete lined-canal design and not a regime theory for adjustable alluvial channels.</p>",
            "sources": [
              {
                "id": "CAP4-07-00100",
                "label": "p. 29; topic 7 point 101"
              }
            ]
          }
        ],
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
                "html": "A weir or barrage serves diversion chiefly by raising the upstream level to provide diversion head for a gravity canal.",
                "sources": [
                  {
                    "id": "CAP4-07-00050",
                    "label": "p. 28; topic 7 point 50"
                  }
                ]
              },
              {
                "html": "A structure that holds its pond mainly with gates over low-sill bays, opened wide in floods, is a barrage with predominantly gated control.",
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
            "html": "<p>Weir profiles follow hydraulic purpose. A <em>sloping-glacis weir</em> of masonry or concrete carries the overflow down a sloping downstream face, the glacis, into a protected basin where a hydraulic jump dissipates the energy. Its geometry and protection identify the profile family, not the date it came into use.</p><p>An <em>ogee crest</em> is shaped to follow the underside of a free nappe at a chosen design head. At that head the overflow stays attached and efficient and the pressures on the crest remain compatible with the design. Away from the design head the surface pressures and the discharge coefficient change, so the profile is tied to its intended operating range.</p><p>The whole profile is not necessarily a single parabola, and no crest shape is best under every criterion.</p>",
            "points": [
              {
                "html": "Overflow carried down a sloping downstream face into a protected basin for a hydraulic jump marks a sloping-glacis weir.",
                "sources": [
                  {
                    "id": "CAP4-07-00048",
                    "label": "p. 28; topic 7 point 48"
                  }
                ]
              },
              {
                "html": "Ogee profiling to the design nappe gives efficient overflow with a compatible design-head pressure profile; off-design heads change pressures and coefficient.",
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
            "html": "<p>An intake site is judged on hydraulic reliability, not on labels. A gravity intake needs:</p><ul><li>adequate head in the low-flow season as well as in floods;</li><li>a stable approach channel that does not shoal or migrate, with a manageable sediment regime;</li><li>suitable foundations and flood access;</li><li>freedom from conflicts such as navigation.</li></ul><p>Lying in a natural river is not a defect in itself; the actual channel behaviour matters. When two sites offer equal diversion head, the one with a stable approach and navigation kept separate is the better preliminary choice, because unstable shoaling threatens both intake reliability and vessel passage.</p><p>Each deficiency must be recognized for what it is. Migrating shoals are a sediment-stability risk that needs investigation; a dry-season level below the required intake level is a lack of low-flow head that no channel stability can make up. A large flood discharge cures neither.</p>",
            "points": [
              {
                "html": "Between sites of equal head, the better preliminary choice is the one with a stable approach and separated navigation, not one with unstable shoaling in the vessel route.",
                "sources": [
                  {
                    "id": "CAP4-07-00026",
                    "label": "p. 27; topic 7 point 26"
                  }
                ]
              },
              {
                "html": "A reach with dry-season head but migrating shoals carries a sediment-stability risk, while a stable reach whose low-season level is too low lacks the required low-flow head.",
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
                "html": "The divide wall separates the undersluice portion from the main weir portion and checks cross-currents between the two.",
                "sources": [
                  {
                    "id": "CAP4-07-00046",
                    "label": "p. 28; topic 7 point 46; topic 7 point 69"
                  }
                ]
              },
              {
                "html": "A fish ladder beside the divide wall is the conventional component that lets fish climb past the level difference at a weir.",
                "sources": [
                  {
                    "id": "CAP4-07-00045",
                    "label": "p. 28; topic 7 point 45"
                  }
                ]
              },
              {
                "html": "The canal head regulator sits where a canal leaves the river and admits, meters or stops the canal supply.",
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
                "html": "A silt excluder works in the river approach, diverting the sediment-rich lower layers to the undersluices before they reach the head regulator; an ejector acts inside the canal.",
                "sources": [
                  {
                    "id": "CAP4-07-00072",
                    "label": "p. 28; topic 7 point 75"
                  }
                ]
              },
              {
                "html": "Raising the head regulator sill above the undersluice crest is meant to reduce admission of sediment-rich near-bed flow into the canal.",
                "sources": [
                  {
                    "id": "CAP4-07-00096",
                    "label": "p. 29; topic 7 point 97"
                  }
                ]
              },
              {
                "html": "An undersluice crest near riverbed level, below the canal sill, provides a low-level path for sediment-rich flushing flow.",
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
            "html": "<p>A preliminary brief for undersluices takes the <em>largest</em> of several requirements, not their sum. The capsule's rule lists at least twice the canal discharge, about 10 to 15% of the maximum flood, and the ability to pass the winter flow. These are preliminary textbook figures, not a universal adopted standard.</p><p>A numerical maximum is not a complete check. Flow through a given opening depends on the head and the flow regime, so a capacity found at flood head says nothing about a case with a much smaller head. Each requirement is rated at its own head and gate opening; otherwise a low-head deficiency can hide behind the larger flood figure.</p>",
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
                "html": "The largest of 40, 120 and 80 cumecs governs the preliminary undersluice brief: 120 cumecs, not the 240-cumec sum.",
                "sources": [
                  {
                    "id": "CAP4-07-00110",
                    "label": "p. 29; topic 7 point 112"
                  }
                ]
              },
              {
                "html": "Capacity of 120 cumecs at flood head does not prove winter adequacy: the winter head and gate-opening rating must be checked for 80 cumecs.",
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
                "html": "Seepage that carries foundation particles out at an unfiltered exit and opens channels beneath the floor is piping and undermining.",
                "sources": [
                  {
                    "id": "CAP4-02-00160",
                    "label": "p. 10; topic 2 point 142"
                  }
                ]
              },
              {
                "html": "An intact floor whose underside seepage pressure exceeds its stabilizing weight faces uplift or flotation of the floor, a risk distinct from piping.",
                "sources": [
                  {
                    "id": "CAP4-02-00161",
                    "label": "p. 10; topic 2 point 142"
                  }
                ]
              },
              {
                "html": "At an unprotected exit in loose fine sand, seepage can mobilize grains and initiate internal erosion, so permissible gradients must be conservative.",
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
                "html": "Estimating seepage resistance from the creep path along the structure-soil contact, around floor and piles, is Bligh's creep theory.",
                "sources": [
                  {
                    "id": "CAP4-07-00052",
                    "label": "p. 28; topic 7 point 52"
                  }
                ]
              },
              {
                "html": "Bligh weights horizontal and vertical contact equally, so 12 m of each contributes 12 m and 12 m; the one-third reduction belongs to Lane.",
                "sources": [
                  {
                    "id": "CAP4-07-00053",
                    "label": "pp. 28, 30; topic 7 point 53; topic 7 point 131"
                  }
                ]
              },
              {
                "html": "A 42 m floor with thin cutoffs 4 m and 7 m deep has a Lane weighted creep length of 22 + 42/3 = 36 m.",
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
            "html": "<p><em>Khosla's method of independent variables</em> replaces creep lengths with potential-flow solutions. A complex floor is split into standard forms, such as a floor with an end pile or with an intermediate pile, whose head distributions are known analytically. Corrections are then applied for pile interference, floor thickness and floor slope. The method gives uplift pressures at key points and the exit gradient rather than an equivalent path length.</p><p>For an ideal horizontal floor of length \\(b\\) ending in one downstream pile of depth \\(d\\), the exit gradient depends on the retained head \\(H\\) and on two geometric parameters. \\(H\\) and \\(d\\) share a length unit, so \\(G_E\\) is dimensionless, and \\(\\lambda\\) describes floor-to-pile geometry, not soil permeability.</p><p>As \\(d\\) tends to zero with \\(b\\) and \\(H\\) positive, the denominator vanishes and the ideal exit gradient grows without bound at the sharp downstream edge. This is a local mathematical singularity, not a uniformly infinite gradient in real soil, but it shows why a downstream cutoff of adequate depth is needed.</p>",
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
                "html": "Khosla's method of independent variables splits a floor into standard analytical forms and then corrects for pile interference, floor thickness and slope.",
                "sources": [
                  {
                    "id": "CAP4-07-00054",
                    "label": "p. 28; topic 7 point 54"
                  }
                ]
              },
              {
                "html": "For an ideal floor with a single downstream end pile, the exit gradient is \\(G_E = H/(\\pi d\\sqrt{\\lambda})\\), with \\(\\lambda\\) set by floor geometry.",
                "sources": [
                  {
                    "id": "CAP4-07-00059",
                    "label": "p. 28; topic 7 point 59"
                  }
                ]
              },
              {
                "html": "With \\(H = 6\\) m, \\(d = 4\\) m and geometric \\(\\lambda = 1.5\\), the end-pile exit gradient is 0.389848, which rounds to 0.390.",
                "sources": [
                  {
                    "id": "CAP4-07-00117",
                    "label": "p. 29; topic 7 point 118"
                  }
                ]
              },
              {
                "html": "As the downstream cutoff depth tends to zero, the exit gradient becomes unbounded at the ideal exit edge, a local singularity only.",
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
                "html": "A downstream sheet pile's seepage purpose is to lengthen the emergence path and reduce local exit gradient at the toe; uplift must still be checked.",
                "sources": [
                  {
                    "id": "CAP4-07-00123",
                    "label": "p. 30; topic 7 point 121"
                  }
                ]
              },
              {
                "html": "Downstream cutoff penetration is governed by the permissible exit gradient and by embedment after design scour.",
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
            "html": "<p>Uplift directly reduces stability because it offsets the weight pressing the structure onto its foundation. Vertical equilibrium gives the foundation reaction as weight minus uplift, assuming no other vertical forces or anchorage.</p><p>If a weir's weight exactly equals the uplift, the reaction is zero and nothing remains to resist flotation. That balance therefore cannot define a safe gravity weir, which resists uplift principally through self-weight with a margin in reserve.</p><p>Frictional sliding resistance uses the same effective normal force. Ignoring uplift overstates the resistance, and the driving horizontal forces must still be compared before stability is judged.</p>",
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
              "html": "<p>With \\(\\mu = 0.60\\) and no cohesion:</p>\\[\\begin{aligned} N &amp;= 1000 - 300 = 700\\ \\text{kN} \\\\ F &amp;= 0.60 \\times 700 = 420\\ \\text{kN} \\end{aligned}\\]<p>Ignoring uplift would give 0.60 × 1000 = 600 kN. For a weir whose weight equals its uplift, \\(N = W - U = 0\\): neutral flotation with no reserve.</p>"
            },
            "points": [
              {
                "html": "A weir whose weight exactly equals its uplift has zero reaction and no reserve against flotation, so that balance is not safe gravity action.",
                "sources": [
                  {
                    "id": "CAP4-07-00056",
                    "label": "p. 28; topic 7 point 56"
                  }
                ]
              },
              {
                "html": "A 1000 kN structure with 300 kN uplift and friction coefficient 0.60 has a frictional sliding resistance of 0.60 × 700 = 420 kN.",
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
        "cautions": [
          {
            "id": "caution-weir-barrage-gates",
            "status": "review",
            "prompt": "The major differentiating point between weirs and barrages is presence of gates",
            "html": "<p>Barrages rely predominantly on gates over low sills, whereas weirs rely mainly on a raised crest, yet some weirs carry shutters or gates. Treat predominantly gated control of the pond as the distinction, not the mere presence of any gate.</p>",
            "sources": [
              {
                "id": "CAP4-07-00051",
                "label": "p. 28; topic 7 point 51"
              }
            ]
          },
          {
            "id": "caution-sloping-weir-origin",
            "status": "review",
            "prompt": "Masonry or concrete sloping weir is of recent origin",
            "html": "<p>Historical dating is time-sensitive and depends on the textbook. The sloping weir is better identified by its hydraulic form: overflow down a glacis into a protected hydraulic-jump basin.</p>",
            "sources": [
              {
                "id": "CAP4-07-00048",
                "label": "p. 28; topic 7 point 48"
              }
            ]
          },
          {
            "id": "caution-parabolic-weir-efficiency",
            "status": "review",
            "prompt": "Parabolic is most efficient weir",
            "html": "<p>An ogee crest shaped to the design nappe gives efficient overflow at its design head, but no universal superiority is established, the whole profile is not necessarily one parabola, and performance changes away from the design head.</p>",
            "sources": [
              {
                "id": "CAP4-07-00049",
                "label": "p. 28; topic 7 point 49"
              }
            ]
          },
          {
            "id": "caution-natural-navigation-intake",
            "status": "review",
            "prompt": "The placement of intake is not optimal when it is placed in natural channel and navigation channel",
            "html": "<p>The statement lacks an identifiable comparison. The teachable criteria are a stable approach, adequate low-flow head and separation from navigation; the classification the capsule originally intended remains unverified.</p>",
            "sources": [
              {
                "id": "CAP4-07-00026",
                "label": "p. 27; topic 7 point 26"
              }
            ]
          },
          {
            "id": "caution-trough-stage",
            "status": "review",
            "prompt": "The canal intake is preferred in trough stage",
            "html": "<p>The term 'trough stage' is undefined in the available text, and a nearby 'through stage' label is also unresolved. No equivalent term or corrected spelling is asserted; judge sites by low-flow head and approach stability instead.</p>",
            "sources": [
              {
                "id": "CAP4-07-00042",
                "label": "p. 28; topic 7 point 42"
              }
            ]
          },
          {
            "id": "caution-fish-ladder-location",
            "status": "review",
            "prompt": "Fish ladder is provided on the side of divide wall",
            "html": "<p>Placement beside the divide wall is a conventional layout, not an exclusive location. Whether a fish pass works depends on entrance attraction, flow velocities and the species concerned.</p>",
            "sources": [
              {
                "id": "CAP4-07-00045",
                "label": "p. 28; topic 7 point 45"
              }
            ]
          },
          {
            "id": "caution-head-regulator-gates",
            "status": "corrected",
            "prompt": "At bed level, there is no provision of gates in head regulator",
            "html": "<p>The sound point concerns relative levels: the head regulator sill is raised above the undersluice crest to avoid near-bed sediment. Head regulators do have gates, which close onto that raised sill; no absolute gate prohibition applies.</p>",
            "sources": [
              {
                "id": "CAP4-07-00096",
                "label": "p. 29; topic 7 point 97"
              }
            ]
          },
          {
            "id": "caution-undersluice-crest-level",
            "status": "review",
            "prompt": "The crest of the undersluice portion of diversion headworks is kept at the bed level of the river",
            "html": "<p>A crest near bed level and below the canal sill is the usual relative arrangement for flushing. In a mobile-bed river the exact elevation follows the surveyed bed and design layout rather than an immutable rule.</p>",
            "sources": [
              {
                "id": "CAP4-07-00105",
                "label": "p. 29; topic 7 point 107"
              }
            ]
          },
          {
            "id": "caution-undersluice-rule-status",
            "status": "review",
            "prompt": "Undersluice design discharge should be the maximum of double the canal discharge, about 10 to 15% of maximum flood and the winter flow",
            "html": "<p>This is a preliminary textbook rule. The 12% used in the example is an explicit selection within the quoted range, neither that range nor the twice-canal-flow figure is claimed as a universal standard, and each condition needs its own head-dependent rating.</p>",
            "sources": [
              {
                "id": "CAP4-07-00110",
                "label": "p. 29; topic 7 point 112"
              }
            ]
          },
          {
            "id": "caution-fine-sand-exit",
            "status": "review",
            "prompt": "According to Khosla, the soil material with the lowest safe exit gradient is fine sand",
            "html": "<p>Loose, unprotected fine sand is highly vulnerable at a seepage exit, and that is the point retained. No universal soil ranking or fixed table of safe exit gradients is asserted; permissible values must reflect gradation, packing and filter protection.</p>",
            "sources": [
              {
                "id": "CAP4-07-00044",
                "label": "p. 28; topic 7 point 44"
              }
            ]
          },
          {
            "id": "caution-lane-divisor",
            "status": "corrected",
            "prompt": "Lane's creep length formula is 2d1 + L + 2d2, with d1 and d2 the cutoff depths and L the floor length",
            "html": "<p>The extracted point omits the divisor under \\(L\\). The full page text, consistent with Lane's weighting, gives \\(2d_1 + L/3 + 2d_2\\); without the one-third factor the expression is simply Bligh's unweighted length.</p>",
            "sources": [
              {
                "id": "CAP4-07-00058",
                "label": "p. 28; topic 7 point 58"
              }
            ]
          },
          {
            "id": "caution-khosla-formula-radical",
            "status": "corrected",
            "prompt": "According to Khosla's theory, the exit gradient formula is H over d, with the radical damaged in the text",
            "html": "<p>The PDF text loses the radical. The standard isolated end-pile result is \\(G_E = H/(\\pi d\\sqrt{\\lambda})\\), with \\(\\lambda = [1 + \\sqrt{1 + \\alpha^2}]/2\\) and \\(\\alpha = b/d\\), restored from corrected nearby notes; the printed page was not visually verified.</p>",
            "sources": [
              {
                "id": "CAP4-07-00059",
                "label": "p. 28; topic 7 point 59"
              }
            ]
          },
          {
            "id": "caution-khosla-numerical-example",
            "status": "corrected",
            "prompt": "Head 6 m, characteristic seepage depth 4 m and soil permeability factor 1.5 give a Khosla exit gradient of 0.38",
            "html": "<p>The source calls 1.5 a soil-permeability factor, which has no place in the formula, so its result is not uniquely derivable. Treating 1.5 as the geometric \\(\\lambda\\) with \\(d = 4\\) m gives 0.389848, which rounds to 0.390, not 0.38.</p>",
            "sources": [
              {
                "id": "CAP4-07-00117",
                "label": "p. 29; topic 7 point 118"
              }
            ]
          },
          {
            "id": "caution-zero-cutoff-infinity",
            "status": "review",
            "prompt": "According to the Khosla theory, the exit gradient in the absence of downstream cutoff is infinity",
            "html": "<p>Infinity arises only in the ideal sharp-edged model as the cutoff depth tends to zero. It is a localized singularity at the exit edge, not a literal field-wide measurement of an infinite gradient.</p>",
            "sources": [
              {
                "id": "CAP4-07-00047",
                "label": "p. 28; topic 7 point 47"
              }
            ]
          },
          {
            "id": "caution-downstream-pile-purpose",
            "status": "review",
            "prompt": "Purpose of providing the downstream sheet pile in a barrage, printed as an unanswered question",
            "html": "<p>The capsule entry is only an unfinished question with no stated resolution. The hydraulic purpose taught here, lengthening the emergence path to reduce the exit gradient, is supplied from corrected nearby cutoff notes.</p>",
            "sources": [
              {
                "id": "CAP4-07-00123",
                "label": "p. 30; topic 7 point 121"
              }
            ]
          },
          {
            "id": "caution-cutoff-depth-considerations",
            "status": "review",
            "prompt": "There are 2 considerations governing the depth of the downstream vertical cutoff",
            "html": "<p>The source supplies only the count. Permissible exit gradient and embedment below design scour are the two central hydraulic checks, taken from nearby corrected notes; they are not an exhaustive list of design requirements.</p>",
            "sources": [
              {
                "id": "CAP4-07-00060",
                "label": "p. 28; topic 7 point 60"
              }
            ]
          },
          {
            "id": "caution-gravity-weir-balance",
            "status": "corrected",
            "prompt": "The weir constructed such that its weight is completely balanced by the upward seepage force of water is a gravity weir",
            "html": "<p>Complete balance gives \\(N = W - U = 0\\), neutral flotation with no reserve, which is unsafe. A gravity weir resists uplift principally through its self-weight and must keep a margin beyond this balance.</p>",
            "sources": [
              {
                "id": "CAP4-07-00056",
                "label": "p. 28; topic 7 point 56"
              }
            ]
          }
        ],
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
            "html": "<p>Two classifications of rivers are easily confused. Classification by <em>origin</em> names the main source of a river's water, such as snow-fed or rain-fed, and so describes its seasonal flow regime. Classification by <em>reach characteristics</em> describes the local channel: its gradient, how confined it is and what its bed is made of.</p><table><thead><tr><th scope='col'>Basis</th><th scope='col'>What it describes</th><th scope='col'>Examples</th></tr></thead><tbody><tr><th scope='row'>Origin</th><td>Main source of the water and its seasonal regime</td><td>Snow-fed, rain-fed</td></tr><tr><th scope='row'>Reach characteristics</th><td>Local gradient, confinement and bed material</td><td>Steep, confined and boulder-bedded; wide, gentle and sandy</td></tr></tbody></table><p>A snow-fed river can pass through very different reaches along its course, so its origin alone cannot define their hydraulic behaviour.</p><p>Sediment-carrying alluvial rivers can <em>meander</em>. At a bend, curvature and secondary circulation drive faster, erosive flow against the outer bank, while sediment settles on the inner bank as a <em>point bar</em>. Bank resistance and sediment supply control how the bend evolves, and a growing point bar shows active transport rather than its end.</p><p>Not every alluvial channel meanders. Braided multi-channel and fairly straight forms also occur, so the planform must be read from the reach itself.</p>",
            "points": [
              {
                "html": "Snow-fed describes a river's water-source regime, whereas steep, confined and boulder-bedded describes local reach characteristics; the two classifications answer different questions.",
                "sources": [
                  {
                    "id": "CAP4-07-00097",
                    "label": "p. 29; topic 7 point 98"
                  }
                ]
              },
              {
                "html": "Outer-bank erosion with point-bar growth on the inner bank shows that meander adjustment can occur in mobile alluvial boundaries, although not every alluvial channel meanders.",
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
            "html": "<p>The <em>dominant discharge</em>, also called the channel-forming discharge, is the flow or range of flows that does most of the long-term work of shaping a channel and its surroundings. It is not automatically the largest recorded flood, the flow exceeded half the time or the average of daily flows.</p><p>The related <em>effective-discharge</em> method finds it by combining, for each flow class, the sediment-transport rate with how long that class lasts each year. A moderate flow that recurs often can move more sediment in total than a rare, intense flood. Real studies integrate over the whole flow record, and no universal return period defines the dominant flood.</p>",
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
                "html": "The 10 kg/s class running 100 hours a year moves 3.6 million kg, twice the 1.8 million kg of a 50 kg/s class lasting 10 hours, so it contributes more annual transport.",
                "sources": [
                  {
                    "id": "CAP4-07-00055",
                    "label": "p. 28; topic 7 point 55"
                  }
                ]
              },
              {
                "html": "Combining sediment-transport magnitude with the duration of each flow identifies the dominant or channel-forming discharge, which is not simply the largest instantaneous flood.",
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
                "html": "Training aimed chiefly at passing design floods with tolerable inundation and bank damage is high-water training, also known as training for discharge.",
                "sources": [
                  {
                    "id": "CAP4-07-00061",
                    "label": "p. 28; topic 7 point 61"
                  }
                ]
              },
              {
                "html": "A canal bank retaining water within an irrigation channel is not a river-training work, because its primary job is canal containment rather than acting on the river.",
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
            "html": "<p>Lacey-type scour depths are measured below the <em>high flood level</em> (HFL), not below the existing bed. The estimated scoured-bed level is therefore HFL minus the scour depth, and the extra lowering of the bed is the difference between the existing bed level and that scoured level. Subtracting the scour depth from the old bed would count the flow depth twice.</p><p>Local attack deepens scour at bends, noses and other disturbances. For bank protection at a <em>right-angle bend</em>, the reviewed text of IRC 89:1997, Section 7.4.5, assumes a maximum scour depth of twice the mean scour depth, again measured below HFL. This is edition- and scope-specific guidance, not a universal river law or a statement of current practice in Nepal, and the normal flow depth is not the mean scour depth.</p>",
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
                "html": "Normal scour 5 m below an HFL of RL 100 m places the scoured bed at RL 95 m, which is 2 m of additional lowering below an existing bed at RL 97 m.",
                "sources": [
                  {
                    "id": "CAP4-07-00098",
                    "label": "p. 29; topic 7 point 99"
                  }
                ]
              },
              {
                "html": "At a right-angle bend, twice a 3.0 m mean scour depth gives 6.0 m below an HFL of RL 104.0 m, so the scour bed lies at RL 98.0 m.",
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
                "html": "Guide banks lead the current through the intended opening of a crossing, steering an oblique flood approach rather than detaining or diverting the flood.",
                "sources": [
                  {
                    "id": "CAP4-07-00065",
                    "label": "p. 28; topic 7 point 65"
                  }
                ]
              },
              {
                "html": "The upstream arm is conventionally longer because it progressively captures and aligns the approaching current; the inequality is usual, not a fixed ratio.",
                "sources": [
                  {
                    "id": "CAP4-07-00066",
                    "label": "p. 28; topic 7 point 66; topic 7 point 67"
                  }
                ]
              },
              {
                "html": "The deepest local hole often forms at a guide-bank nose because concentrated turning currents and local turbulence attack it, so the nose gets especially robust protection.",
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
                "html": "A conventional launching apron is laid initially on the bed beyond the protected bank toe, so its material can settle onto the scour face as the bed drops.",
                "sources": [
                  {
                    "id": "CAP4-07-00099",
                    "label": "p. 29; topic 7 point 100"
                  }
                ]
              },
              {
                "html": "Flexible toe protection can be formed from loose graded stone or suitably connected gabion mattresses, which deform with the scour face instead of acting as one rigid slab.",
                "sources": [
                  {
                    "id": "CAP4-07-00063",
                    "label": "p. 28; topic 7 point 63; topic 7 point 64"
                  }
                ]
              },
              {
                "html": "A correctly selected geotextile beneath the armour acts as a filter, retaining soil while permitting drainage through the layer; it cannot replace the stone weight.",
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
            "html": "<p>A <em>spur</em>, or groyne, projects from the bank into the river to influence the current. A levee instead runs along the river to keep floods off protected land, and bank pitching simply covers the slope without projecting into the channel. A spur may be set normal to the bank or inclined upstream or downstream; calling it transverse does not require an exact right angle at every stage.</p><table><thead><tr><th scope='col'>Root-to-tip direction</th><th scope='col'>Conventional name</th><th scope='col'>Intended effect</th></tr></thead><tbody><tr><td>Upstream of the bank normal</td><td>Repelling spur</td><td>Pushes the main current away from the bank</td></tr><tr><td>Downstream of the bank normal</td><td>Attracting spur</td><td>Tends to draw the current toward the bank</td></tr></tbody></table><p>This is a textbook mnemonic rather than a code classification. Real behaviour also depends on permeability, submergence and the approach direction.</p><p><em>Permeable spurs</em> let part of the flow pass through while adding resistance. Slowing the local flow reduces transport capacity and can encourage deposition in a sheltered zone near the bank when the river carries abundant suspended sediment. They do not sieve out grains, and debris blockage or local scour can change their performance.</p>",
            "points": [
              {
                "html": "A spur projects from the bank into the river, normally or obliquely, unlike a longitudinal levee; exact perpendicular placement is not a defining requirement.",
                "sources": [
                  {
                    "id": "CAP4-07-00118",
                    "label": "p. 30; topic 7 point 119"
                  }
                ]
              },
              {
                "html": "Under the conventional mnemonic, a spur whose root-to-tip direction points upstream of the bank normal is a repelling spur, meant to keep the main current off the bank.",
                "sources": [
                  {
                    "id": "CAP4-07-00103",
                    "label": "p. 29; topic 7 point 104"
                  }
                ]
              },
              {
                "html": "Permeable spurs can slow local flow while admitting some water through, so suspended sediment may settle in the sheltered zone they create.",
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
        "cautions": [
          {
            "id": "caution-origin-versus-reach",
            "status": "review",
            "prompt": "River reach can be classified on the basis of origin",
            "html": "<p>Origin classifies a river by its main water source, such as snow-fed or rain-fed. A reach is classified by its local gradient, confinement and bed material. One river can contain very different reaches, so the two classifications answer different questions and origin alone cannot describe a reach.</p>",
            "sources": [
              {
                "id": "CAP4-07-00097",
                "label": "p. 29; topic 7 point 98"
              }
            ]
          },
          {
            "id": "caution-alluvial-meandering",
            "status": "corrected",
            "prompt": "Meandering is not possible in an alluvial channel carrying sediments",
            "html": "<p>The reverse holds: outer-bank erosion and inner point-bar growth let meanders develop wherever the alluvial boundary is mobile. The correction does not claim that every alluvial channel meanders, because braided and fairly straight forms also occur.</p>",
            "sources": [
              {
                "id": "CAP4-07-00102",
                "label": "p. 29; topic 7 point 103"
              }
            ]
          },
          {
            "id": "caution-bend-scour-multiplier",
            "status": "review",
            "prompt": "According to Lacey, depth of scour in a right-angled bend is 2.00 D, where D is the regime scour depth",
            "html": "<p>The reviewed text of IRC 89:1997, Section 7.4.5, supports twice the mean scour depth for bank protection at a right-angle bend, with both depths measured below HFL. It is edition- and scope-specific guidance, not a universal river law or current Nepal adoption, and the normal flow depth is not the mean scour depth.</p>",
            "sources": [
              {
                "id": "CAP4-07-00019",
                "label": "p. 27; topic 7 point 20"
              }
            ]
          },
          {
            "id": "caution-guide-bank-arm-lengths",
            "status": "review",
            "prompt": "The upstream length of a guide bank is greater than its downstream length",
            "html": "<p>This is the conventional arrangement, because the upstream arm must capture and align an oblique approach. Actual lengths depend on the site, so the inequality is not absolute and no fixed ratio between the arms applies.</p>",
            "sources": [
              {
                "id": "CAP4-07-00066",
                "label": "p. 28; topic 7 point 66; topic 7 point 67"
              }
            ]
          },
          {
            "id": "caution-nose-scour",
            "status": "review",
            "prompt": "In a guide bund, the depth of scour is severe at the nose",
            "html": "<p>Nose vulnerability is a common local mechanism caused by turning, accelerating flow and turbulence. It is not an invariant ranking for every flood geometry; the severity and the protection needed come from local hydraulic and bed information.</p>",
            "sources": [
              {
                "id": "CAP4-07-00116",
                "label": "p. 29; topic 7 point 117"
              }
            ]
          },
          {
            "id": "caution-apron-gabion-only",
            "status": "review",
            "prompt": "Launching apron is made of gabion",
            "html": "<p>Gabion mattresses are one flexible form, not the only one: loose graded stone also launches onto a scour face. Whatever the material, its connections, stone stability and the bed behaviour must allow launching, which a rigid bonded slab does not.</p>",
            "sources": [
              {
                "id": "CAP4-07-00063",
                "label": "p. 28; topic 7 point 63; topic 7 point 64"
              }
            ]
          },
          {
            "id": "caution-apron-material-roles",
            "status": "review",
            "prompt": "Launching apron is made of gabion, stone and geotextile fabric",
            "html": "<p>These materials play different roles. Stone and gabions form the flexible armour, while a geotextile is a filter beneath them. They are not interchangeable, and a geotextile cannot supply the weight needed to resist the flow.</p>",
            "sources": [
              {
                "id": "CAP4-07-00064",
                "label": "p. 28; topic 7 point 63"
              }
            ]
          },
          {
            "id": "caution-spur-orientation",
            "status": "corrected",
            "prompt": "Spurs are provided in the bank of a river perpendicular to the river",
            "html": "<p>A spur projects from the bank into the channel either at right angles or inclined upstream or downstream. Perpendicular placement is one possibility, not a defining requirement, and transverse does not mean an exact right angle at every stage.</p>",
            "sources": [
              {
                "id": "CAP4-07-00118",
                "label": "p. 30; topic 7 point 119"
              }
            ]
          },
          {
            "id": "caution-repelling-spur-convention",
            "status": "review",
            "prompt": "Repelling spur is inclined upstream",
            "html": "<p>This follows the textbook mnemonic when the root-to-tip direction points upstream of the bank normal. It is a convention rather than a universal code classification, and the real effect depends on permeability, submergence and the approach flow.</p>",
            "sources": [
              {
                "id": "CAP4-07-00103",
                "label": "p. 29; topic 7 point 104"
              }
            ]
          },
          {
            "id": "caution-permeable-spur-suitability",
            "status": "review",
            "prompt": "Permeable spurs are best suitable for rivers which carry heavy suspended load",
            "html": "<p>Abundant suspended sediment is a suitability consideration, because permeable spurs encourage deposition by slowing the flow. It does not make them always the best solution; hydraulics, sediment properties and debris must be assessed.</p>",
            "sources": [
              {
                "id": "CAP4-07-00125",
                "label": "p. 30; topic 7 point 123"
              }
            ]
          }
        ],
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
        "summary": "<p>Regulating and cross-drainage structures covers Regulators and escapes, crest and impervious-floor design, free and submerged pipe outlets, vertical drops and cross-drainage structures. The sections below reorganize the reviewed capsule material into concepts, calculations, qualifications and limits, with every mapped question linked to a key fact.</p>",
        "blocks": [
          {
            "id": "regulators-and-escapes",
            "title": "Head regulators, cross regulators and canal escapes",
            "html": "<p>A regulator controls discharge by changing an effective opening or control level, usually with gates. A gated regulator lets a branch adjust its admission as parent levels change, which a fixed weir, an ungated orifice or an ungated flume cannot do. The resulting flow still depends on upstream and downstream head and on the device rating; a gate opening does not fix the discharge independently of the hydraulics.</p><p>A cross regulator spans the parent canal downstream of an offtake. Partly closing it during low supply raises the parent level just upstream and so creates the head the branch needs, while the branch’s own head regulator meters entry into it. Gate settings must respect the capacity and freeboard of the parent canal.</p><p>A canal escape disposes of surplus canal water safely to a natural drain or river with adequate capacity and protection, for instance when downstream demand stops suddenly while supply keeps arriving. Regulators control normal passage and excluders deal with sediment; neither provides that surplus-disposal route.</p>",
            "points": [
              {
                "html": "The key result is Canal escape.",
                "sources": [
                  {
                    "id": "CAP4-07-00033",
                    "label": "pp. 27, 28; topic 7 point 33; topic 7 point 71"
                  }
                ]
              },
              {
                "html": "The key result is Partly close a downstream cross regulator.",
                "sources": [
                  {
                    "id": "CAP4-07-00071",
                    "label": "pp. 28, 30; topic 7 point 74; topic 7 point 128"
                  }
                ]
              },
              {
                "html": "The key result is A gated regulator.",
                "sources": [
                  {
                    "id": "CAP4-07-00107",
                    "label": "p. 29; topic 7 point 109"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00033",
                "label": "pp. 27, 28; topic 7 point 33; topic 7 point 71"
              },
              {
                "id": "CAP4-07-00071",
                "label": "pp. 28, 30; topic 7 point 74; topic 7 point 128"
              },
              {
                "id": "CAP4-07-00107",
                "label": "p. 29; topic 7 point 109"
              }
            ]
          },
          {
            "id": "outlet-flexibility-and-sensitivity",
            "title": "Outlet flexibility, sensitivity and modular classes",
            "html": "<p>Outlet behaviour is described by ratios of fractional changes. Flexibility F = (dq/q)/(dQ/Q) compares the change in outlet discharge q with the change in parent-canal discharge Q. If a 4% rise in Q produces a 4% rise in q, F ≈ 4%/4% = 1 and the outlet is locally proportional; equal percentages, not equal absolute discharges, define proportionality.</p><p>Sensitivity S = d(ln q)/d(ln Y) instead compares outlet discharge with the parent water depth Y. A rigid module delivers a constant q while Y varies within its working range, so S = 0; inadequate supply or excessive submergence can break that behaviour.</p><p>Outlets are also classed by which water levels control them. A non-modular outlet responds to both upstream and downstream levels. A semi-module, known in older texts as a flexible module, is unaffected by the downstream level while its discharge remains free but still depends on upstream head; a free pipe outlet with downstream water below its drowning limit behaves this way. The older word flexible does not mean F = 1, and drowning can change the class.</p>",
            "moreHtml": "<table><thead><tr><th scope='col'>Outlet class</th><th scope='col'>Upstream level</th><th scope='col'>Downstream level</th></tr></thead><tbody><tr><th scope='row'>Non-modular</th><td>Affects discharge</td><td>Affects discharge</td></tr><tr><th scope='row'>Semi-module</th><td>Affects discharge</td><td>No effect while flow stays free</td></tr><tr><th scope='row'>Rigid module</th><td>No effect within the working head range</td><td>No effect within the working head range</td></tr></tbody></table>",
            "points": [
              {
                "html": "The key result is 0. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-07-00067",
                    "label": "p. 28; topic 7 point 68"
                  }
                ]
              },
              {
                "html": "The key result is 1.0, locally proportional.",
                "sources": [
                  {
                    "id": "CAP4-07-00070",
                    "label": "p. 28; topic 7 point 73"
                  }
                ]
              },
              {
                "html": "The key result is Semi-module, historically called a flexible module.",
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
                "id": "CAP4-07-00067",
                "label": "p. 28; topic 7 point 68"
              },
              {
                "id": "CAP4-07-00070",
                "label": "p. 28; topic 7 point 73"
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
            "html": "<p>A canal fall, or drop, is needed where the natural ground slopes more steeply than the bed slope the canal can safely carry. Steepening the whole canal instead would create excessive velocity and scour. The fall to be provided is the ground fall minus the fall absorbed by the design bed slope.</p><p>Over a 2 km reach where the ground falls 12 m and the bed slope is 1 in 1000, the bed itself falls 2000/1000 = 2 m, leaving 12 − 2 = 10 m for drop structures if the canal is to keep its relation to the ground.</p><p>Where several locations give acceptable command and hydraulic performance, economy of earthwork helps to choose between them. A site that balances cut and fill and avoids long stretches of high embankment and costly borrow is favoured, since approach earthwork is part of the real cost. Earthwork economy is one criterion alongside command, safe hydraulics, foundations and structure cost; it never licenses ignoring scour or available head. Equal chainage spacing, the cheapest structure alone or the smallest possible drop is not a sound basis.</p>",
            "points": [
              {
                "html": "The key result is 10 m.",
                "sources": [
                  {
                    "id": "CAP4-07-00068",
                    "label": "p. 28; topic 7 point 70"
                  }
                ]
              },
              {
                "html": "The key result is Economy of earthwork and the overall longitudinal profile.",
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
            "html": "<p>The Sarda fall family is a vertical-drop fall: water passes over a raised crest wall and falls vertically into a protected pool or cistern below. Other families differ in their downstream profile: an Inglis fall uses a straight glacis with a baffle platform and wall, a Montague fall a parabolic glacis, and stepped falls a cascade of small drops. Recognizing the family does not by itself fix the crest geometry or validate any quoted discharge limit.</p><p>Discharge over the crest comes from a calibrated free-overflow rating. With Q = 1.5LH<sup>3/2</sup> in SI units, an effective crest length of 8 m and an energy head of 1 m give Q = 1.5 × 8 × 1 = 12 cumecs. The rating is only one check; the cistern, the foundation and the operating range must also be designed.</p><p>Crest descriptions need care. A crest whose body is triangular in the streamwise section but whose overflow edge is straight and level across the canal is not a V-notch. A V-notch has a triangular transverse opening whose width grows with head, whereas the body profile of a level crest gives no such rating.</p>",
            "points": [
              {
                "html": "The key result is 12 cumecs.",
                "sources": [
                  {
                    "id": "CAP4-07-00126",
                    "label": "p. 30; topic 7 point 125"
                  }
                ]
              },
              {
                "html": "The key result is No: body profile and transverse flow-opening shape are different.",
                "sources": [
                  {
                    "id": "CAP4-07-00127",
                    "label": "p. 30; topic 7 point 126"
                  }
                ]
              },
              {
                "html": "The key result is Vertical drop into a protected cistern or pool.",
                "sources": [
                  {
                    "id": "CAP4-07-00132",
                    "label": "p. 30; topic 7 point 125; topic 7 point 126"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00126",
                "label": "p. 30; topic 7 point 125"
              },
              {
                "id": "CAP4-07-00127",
                "label": "p. 30; topic 7 point 126"
              },
              {
                "id": "CAP4-07-00132",
                "label": "p. 30; topic 7 point 125; topic 7 point 126"
              }
            ]
          },
          {
            "id": "cross-drainage-canal-over-drain",
            "title": "Canal over drain: aqueduct and siphon aqueduct",
            "html": "<p>Cross-drainage works are named by which stream passes over and by how the lower stream flows. When the canal passes above the drain:</p><ul><li>An aqueduct carries canal water in an upper trough while the drain passes beneath with a free surface at its design flood. A low drain bed is not enough; the design flood surface must fit under the actual underside of the canal structure with clearance.</li><li>A siphon aqueduct is needed when the drain cannot pass freely and must flow through full pressure barrels beneath the canal at the design flood. The word siphon refers to that pressurized undercrossing; the canal remains on top, and enough head must be available for barrel and local losses.</li></ul><p>An aqueduct deals with a canal crossing a lower drain, a different function from the head regulator’s control of river water entering the canal. Several works may lie close together at a site, so each is identified by its function rather than by an absolute rule about where aqueducts can never be placed.</p>",
            "moreHtml": "<p>The whole family can be summarized by the stream on top and the condition of the lower flow.</p><table><thead><tr><th scope='col'>Structure</th><th scope='col'>Stream on top</th><th scope='col'>Lower stream</th></tr></thead><tbody><tr><th scope='row'>Aqueduct</th><td>Canal</td><td>Drain with a free surface</td></tr><tr><th scope='row'>Siphon aqueduct</th><td>Canal</td><td>Drain in full pressure barrels</td></tr><tr><th scope='row'>Superpassage</th><td>Drain</td><td>Canal with a free surface</td></tr><tr><th scope='row'>Canal siphon</th><td>Drain</td><td>Canal in full pressure barrels</td></tr><tr><th scope='row'>Level crossing</th><td>Neither</td><td>Flows meet at similar levels under regulation</td></tr><tr><th scope='row'>Canal inlet</th><td>Neither</td><td>Drain water admitted into the canal</td></tr></tbody></table>",
            "points": [
              {
                "html": "The key result is Canal aqueduct.",
                "sources": [
                  {
                    "id": "CAP4-07-00073",
                    "label": "p. 28; topic 7 point 76"
                  }
                ]
              },
              {
                "html": "The key result is Aqueduct. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-07-00078",
                    "label": "p. 29; topic 7 point 80"
                  }
                ]
              },
              {
                "html": "The key result is Siphon aqueduct.",
                "sources": [
                  {
                    "id": "CAP4-07-00079",
                    "label": "p. 29; topic 7 point 80"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00073",
                "label": "p. 28; topic 7 point 76"
              },
              {
                "id": "CAP4-07-00078",
                "label": "p. 29; topic 7 point 80"
              },
              {
                "id": "CAP4-07-00079",
                "label": "p. 29; topic 7 point 80"
              }
            ]
          },
          {
            "id": "cross-drainage-drain-over-canal",
            "title": "Drain over canal: superpassage and canal siphon",
            "html": "<p>When the drain passes above the canal, the condition of the lower canal flow decides the name.</p><ul><li>A superpassage carries the drain in an upper trough while the canal passes underneath with a free surface and adequate air clearance.</li><li>A canal siphon, often called an inverted siphon, depresses the canal into closed barrels beneath the drain, where it runs full under pressure. Full pressure flow does not necessarily mean negative gauge pressure.</li></ul><p>Clearance in a superpassage is checked against the structure, not merely against water surfaces. The relevant air gap is the underside of the drain trough minus the canal full supply level. With FSL at RL 99.0 m, the trough underside at RL 99.8 m and a required clearance of 0.5 m, the gap is 99.8 − 99.0 = 0.8 m, so the requirement is met.</p><p>Knowing only that the canal FSL lies below the drain flood level ignores the trough structure and cannot demonstrate free-flow clearance.</p>",
            "points": [
              {
                "html": "The key result is Yes: available clearance is 0.8 m.",
                "sources": [
                  {
                    "id": "CAP4-07-00075",
                    "label": "p. 28; topic 7 point 78"
                  }
                ]
              },
              {
                "html": "The key result is Superpassage. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-07-00076",
                    "label": "pp. 29, 30; topic 7 point 79; topic 7 point 124"
                  }
                ]
              },
              {
                "html": "The key result is Canal siphon.",
                "sources": [
                  {
                    "id": "CAP4-07-00077",
                    "label": "p. 29; topic 7 point 79"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00075",
                "label": "p. 28; topic 7 point 78"
              },
              {
                "id": "CAP4-07-00076",
                "label": "pp. 29, 30; topic 7 point 79; topic 7 point 124"
              },
              {
                "id": "CAP4-07-00077",
                "label": "p. 29; topic 7 point 79"
              }
            ]
          },
          {
            "id": "cross-drainage-at-similar-levels",
            "title": "Canal inlets and level crossings",
            "html": "<p>Not every crossing keeps the two flows apart. A canal inlet deliberately admits a small drain into the canal so that the flows mix. It suits a small hillside drain when the canal has spare capacity and the drainage water’s quality and sediment load are acceptable; surplus must be released downstream where necessary. Aqueducts, superpassages and siphon aqueducts, by contrast, are grade-separated and keep the flows separate.</p><p>A level crossing lets a canal and a drain meet at nearly equal bed levels, with regulating gates on the canal and drain exits to control the combined flow during the flood. It becomes a candidate where a large canal meets a flashy drain carrying a short-lived high flood at almost the same bed level. These conditions do not make it automatically preferable: combined flood routing, sediment behaviour and acceptable mixing must be checked before it is selected.</p>",
            "points": [
              {
                "html": "The key result is Canal inlet.",
                "sources": [
                  {
                    "id": "CAP4-07-00035",
                    "label": "p. 27; topic 7 point 35"
                  }
                ]
              },
              {
                "html": "The key result is Regulated level crossing.",
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
            "label": "Quantity Relation used in this topic Outlet flexibility",
            "tex": "F = (dq/q)/(dQ/Q)"
          },
          {
            "label": "Quantity Relation used in this topic Outlet flexibility (2)",
            "tex": "F = 1 for a proportional outlet"
          },
          {
            "label": "Outlet sensitivity",
            "tex": "S = d(ln q)/d(ln Y)"
          },
          {
            "label": "Outlet sensitivity (2)",
            "tex": "S = 0 for a rigid module"
          },
          {
            "label": "Fall provided by drops",
            "tex": "H_f=G-LS_0"
          },
          {
            "label": "Crest rating",
            "tex": "Q=CLH^{3/2}"
          }
        ],
        "cautions": [
          {
            "id": "check-free-pipe-outlet-term",
            "status": "review",
            "prompt": "A free pipe outlet is a flexible outlet.",
            "html": "<p>A free pipe outlet is a semi-module, for which flexible module is the older name. That legacy adjective does not mean mathematical flexibility F = 1, and the classification holds only while the outlet remains undrowned.</p>",
            "sources": [
              {
                "id": "CAP4-07-00095",
                "label": "p. 29; topic 7 point 96"
              }
            ]
          },
          {
            "id": "check-sarda-rectangular-limit",
            "status": "review",
            "prompt": "In a Sarda fall, a rectangular crest is used for discharges up to 14 cumecs.",
            "html": "<p>The 14-cumec limit remains an unverified legacy convention. The worked example relies on an explicit calibrated rating instead, and satisfying a quoted limit would not by itself prove a fall adequate.</p>",
            "sources": [
              {
                "id": "CAP4-07-00126",
                "label": "p. 30; topic 7 point 125"
              }
            ]
          },
          {
            "id": "check-sarda-triangular-limit",
            "status": "review",
            "prompt": "In a Sarda fall, a triangular crest is used for discharges up to 85 cumecs.",
            "html": "<p>Neither the exact triangular-crest geometry nor the 85-cumec limit could be verified from the available text. The notes teach only the difference between body profile and opening shape; both claims need checking against a design reference.</p>",
            "sources": [
              {
                "id": "CAP4-07-00127",
                "label": "p. 30; topic 7 point 126"
              }
            ]
          },
          {
            "id": "check-aqueduct-location",
            "status": "review",
            "prompt": "A canal aqueduct is not provided at the head regulator.",
            "html": "<p>The absolute location claim is replaced by function: an aqueduct carries a canal over a drain, while a head regulator controls admission from the river. The two remain distinct whatever their relative positions at a site.</p>",
            "sources": [
              {
                "id": "CAP4-07-00073",
                "label": "p. 28; topic 7 point 76"
              }
            ]
          },
          {
            "id": "check-drainage-over-canal-siphon",
            "status": "review",
            "prompt": "CD works carrying drainage over the canal are superpassage and syphon.",
            "html": "<p>The bare word syphon is ambiguous. With drainage over the canal, the pressure structure is a canal siphon, in which the canal runs full beneath the drain; a siphon aqueduct is the opposite arrangement, with the drain pressurized below the canal.</p>",
            "sources": [
              {
                "id": "CAP4-07-00077",
                "label": "p. 29; topic 7 point 79"
              }
            ]
          },
          {
            "id": "check-superpassage-clearance",
            "status": "review",
            "prompt": "In a superpassage, the canal FSL is below the drain flood level.",
            "html": "<p>That comparison is insufficient. Free-flow clearance requires the drain-trough underside to lie above the canal FSL by the required margin, so the underside level and clearance must be checked, not just the two water surfaces.</p>",
            "sources": [
              {
                "id": "CAP4-07-00075",
                "label": "p. 28; topic 7 point 78"
              }
            ]
          },
          {
            "id": "check-level-crossing-conditions",
            "status": "review",
            "prompt": "A level crossing is preferred where a huge canal meets a stream with short-lived high floods at almost equal bed levels.",
            "html": "<p>These site conditions make a level crossing a reasonable candidate, but they are not sufficient for automatic preference. Combined flood routing, sediment behaviour and acceptable mixing must be verified first.</p>",
            "sources": [
              {
                "id": "CAP4-07-00074",
                "label": "p. 28; topic 7 point 77"
              }
            ]
          }
        ],
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
        "summary": "<p>Water logging and drainage covers Waterlogging causes, effects and prevention; surface and subsurface drainage-system design. The sections below reorganize the reviewed capsule material into concepts, calculations, qualifications and limits, with every mapped question linked to a key fact.</p>",
        "blocks": [
          {
            "id": "waterlogging-as-a-water-balance",
            "title": "Waterlogging as a groundwater balance: seepage and over-irrigation",
            "html": "<p>The water table climbs whenever inflow to the shallow aquifer outpaces outflow. Recharge includes percolating rain, seepage from canals and deep percolation from fields; removal includes natural groundwater outflow, drainage, evaporation and pumping. Canal seepage is a direct aquifer inflow: when an unlined canal leaks persistently and outflow and pumping cannot keep pace, storage and the table rise until the root zone becomes saturated or wetted by capillary rise. Lining or interceptor drains reduce that component, but the whole balance decides the outcome.</p><p>Over-irrigation adds deep percolation beyond crop use. The remedy is to size each application to the crop’s actual deficit and to provide drainage for unavoidable excess. Applying an unchanged large dose twice as often raises total supply and can worsen recharge; frequency by itself neither prevents nor inevitably causes waterlogging, since small frequent applications matched to demand can be efficient. Spreading a fixed supply can also help.</p><p>A volume of 60000 m<sup>3</sup> infiltrating over 100 ha applies 60000/(100 × 10000) = 0.06 m, or 60 mm, but over 200 ha only 30 mm. Against a 30 mm need with no spare storage, the first leaves 30 mm of excess and the second none, provided crop supply and drainage remain adequate.</p>",
            "points": [
              {
                "html": "The key result is Recharge exceeds removal and the water table rises.",
                "sources": [
                  {
                    "id": "CAP4-07-00089",
                    "label": "p. 29; topic 7 point 90"
                  }
                ]
              },
              {
                "html": "The key result is Match applications to crop deficits and improve drainage.",
                "sources": [
                  {
                    "id": "CAP4-07-00090",
                    "label": "p. 29; topic 7 point 91"
                  }
                ]
              },
              {
                "html": "The key result is It can increase excess recharge beyond the removal capacity.",
                "sources": [
                  {
                    "id": "CAP4-07-00091",
                    "label": "p. 29; topic 7 point 92"
                  }
                ]
              },
              {
                "html": "The key result is 200 ha: 30 mm applied and zero excess.",
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
                "id": "CAP4-07-00089",
                "label": "p. 29; topic 7 point 90"
              },
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
            "title": "Depressions, bedding and open surface drains",
            "html": "<p>Irregular topography causes waterlogging where closed depressions trap water that has no gravity outlet, so hollows stay ponded while higher fields drain. The immediate remedy is to link each hollow to a workable outlet with graded channels or land shaping; smoothing a hollow that keeps a closed contour, lining a canal or enlarging a receiving drain the hollow cannot reach does not help. The receiving level and subsurface conditions still need checking before assuming the root zone will aerate.</p><p>Bedding is a surface method for cropped land: the field is shaped into slightly raised strips separated by dead furrows, which collect excess rain or irrigation water and lead it to an outlet. A shallow surface drain removes whatever excess arrives at the surface, whether from rain, run-on or irrigation; it may be busiest in the monsoon, but it works in a dry month too whenever surface inflow occurs and the outlet is available.</p><p>Unlined open drains commonly use a trapezoidal section, which combines a finite bed width with stable sloping earth banks and avoids unsupported vertical soil faces. It is practical rather than universally optimal; hydraulics, land, maintenance and geotechnical stability settle the final shape.</p>",
            "points": [
              {
                "html": "The key result is Yes, because surface inflow rather than season controls its use.",
                "sources": [
                  {
                    "id": "CAP4-07-00081",
                    "label": "p. 29; topic 7 point 82"
                  }
                ]
              },
              {
                "html": "The key result is Provide graded connections from depressions to a viable outlet.",
                "sources": [
                  {
                    "id": "CAP4-07-00083",
                    "label": "p. 29; topic 7 point 84"
                  }
                ]
              },
              {
                "html": "The key result is Bedding. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-07-00088",
                    "label": "p. 29; topic 7 point 89"
                  }
                ]
              },
              {
                "html": "The key result is Trapezoidal section.",
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
                "id": "CAP4-07-00083",
                "label": "p. 29; topic 7 point 84"
              },
              {
                "id": "CAP4-07-00088",
                "label": "p. 29; topic 7 point 89"
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
            "html": "<p>The direct harm of waterlogging is oxygen deficiency in the root zone. Oxygen diffuses far more slowly through water-filled pores than through air-filled ones, so root and microbial respiration use it up faster than it is replaced; roots deteriorate and harmful reduced conditions can develop. Saturation alone does not prove salt stress or raised exchangeable sodium, and weeds that may accompany wet land are not the fundamental cause: clearing them leaves the aeration problem untouched.</p><p>Drainage helps by aerating soil that already exists. Tile drainage that lowers a persistently shallow water table increases the air-filled pore space and the depth of soil roots can exploit, so a larger usable, aerated root zone supports higher yields. It does not create new mineral soil or change the soil’s wilting content, and the yield response still depends on the crop, nutrients and water management.</p>",
            "points": [
              {
                "html": "The key result is A larger existing root-zone volume becomes adequately aerated.",
                "sources": [
                  {
                    "id": "CAP4-07-00084",
                    "label": "p. 29; topic 7 point 85"
                  }
                ]
              },
              {
                "html": "The key result is Slow oxygen supply through water-filled pores restricts root respiration.",
                "sources": [
                  {
                    "id": "CAP4-07-00101",
                    "label": "p. 29; topic 7 point 102"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00084",
                "label": "p. 29; topic 7 point 85"
              },
              {
                "id": "CAP4-07-00101",
                "label": "p. 29; topic 7 point 102"
              }
            ]
          },
          {
            "id": "saline-and-alkaline-soils",
            "title": "Saline and alkaline soils: diagnosis before leaching",
            "html": "<p>Waterlogged land can also carry chemical problems, which must be diagnosed rather than assumed. A soil pH of 11 indicates strong alkalinity that can severely constrain many crops. The pH alone, however, does not give the dissolved-salt concentration, measured as the electrical conductivity of a saturated extract, or the exchangeable sodium percentage, and waterlogging does not inevitably produce such a pH. Salinity and sodium status are therefore measured separately before any reclamation is specified.</p><p>For a saline but non-sodic soil, salts are exported by leaching under control and then draining away the leachate. Sufficient good-quality water dissolves the salts and carries them below the root zone, and a functioning drainage outlet removes the saline water.</p><p>Flooding without an outlet can raise the water table and leave salts reconcentrated at the surface as the water evaporates, and wetting that never moves water downwards exports nothing. Sodic soils additionally need assessment of their sodium status and of a suitable amendment before leaching can be relied upon.</p>",
            "points": [
              {
                "html": "The key result is Controlled leaching followed by drainage.",
                "sources": [
                  {
                    "id": "CAP4-07-00080",
                    "label": "p. 29; topic 7 point 81; topic 7 point 106"
                  }
                ]
              },
              {
                "html": "The key result is It is strongly alkaline; diagnose salinity and sodium status separately.",
                "sources": [
                  {
                    "id": "CAP4-07-00094",
                    "label": "p. 29; topic 7 point 95"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-07-00080",
                "label": "p. 29; topic 7 point 81; topic 7 point 106"
              },
              {
                "id": "CAP4-07-00094",
                "label": "p. 29; topic 7 point 95"
              }
            ]
          },
          {
            "id": "lowering-the-water-table-and-field-drains",
            "title": "Lowering the water table: pumping and field drainage networks",
            "html": "<p>Where an aquifer is hydraulically connected to the waterlogged zone, pumping that exports groundwater outside the affected area, with recharge unchanged, reduces storage, so the water table falls. Pumping of this kind therefore helps relieve waterlogging rather than cause it. The benefit assumes the pumped water does not return as local recharge, and excessive pumping carries its own risks of depletion, subsidence or salinity problems.</p><p>Excess water already on or in farmland is removed by a field drainage network of surface or subsurface drains leading to a viable outfall. A canal escape is a different device: it disposes of surplus water still inside the supply canal and, unless specifically connected and designed for the purpose, does not drain saturated fields. A canal head regulator controls supply rather than removing it, and a farm pond without an outlet stores water but cannot export it.</p>",
            "points": [
              {
                "html": "The key result is It tends to lower the water table.",
                "sources": [
                  {
                    "id": "CAP4-07-00082",
                    "label": "p. 29; topic 7 point 83"
                  }
                ]
              },
              {
                "html": "The key result is Field drainage network.",
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
            "html": "<p>Tile drains collect subsurface water through joints or perforations and convey it to an outlet. They suit a field with a shallow water table where the soil offers a connected flow path to the drains, the drains can be laid at the depth needed and the outfall lies low enough for the required drawdown; the description wet soil alone is not sufficient.</p><p>A drain laid below a nearly impermeable horizon, with no hydraulic connection through it, may leave perched water above that horizon untouched, however deep or large the pipe and however free its outfall. The remedy is correct placement or connection, not the conclusion that slowly permeable soils can never be drained.</p><p>Drain spacing increases with hydraulic conductivity, but not in direct proportion. In a steady model written as L<sup>2</sup> = KC, where C lumps the recharge, the allowed midpoint head and the equivalent geometry, holding C fixed gives L ∝ √K, so quadrupling K doubles the spacing. In a full Hooghoudt solution the equivalent depth itself depends on spacing and must be updated consistently.</p>",
            "points": [
              {
                "html": "The key result is The restrictive layer prevents sufficient flow to the drain.",
                "sources": [
                  {
                    "id": "CAP4-07-00085",
                    "label": "p. 29; topic 7 point 86"
                  }
                ]
              },
              {
                "html": "The key result is A shallow water table with a connected soil-flow path and viable outlet.",
                "sources": [
                  {
                    "id": "CAP4-07-00086",
                    "label": "p. 29; topic 7 point 87"
                  }
                ]
              },
              {
                "html": "The key result is It doubles.",
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
                "id": "CAP4-07-00085",
                "label": "p. 29; topic 7 point 86"
              },
              {
                "id": "CAP4-07-00086",
                "label": "p. 29; topic 7 point 87"
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
            "label": "Quantity Relation used in this topic Applied depth",
            "tex": "depth = volume/area"
          },
          {
            "label": "Quantity Relation used in this topic Applied depth (2)",
            "tex": "1 ha = 10000 \\text{m}^{2}"
          },
          {
            "label": "Groundwater storage change",
            "tex": "\\Delta S=R-E"
          },
          {
            "label": "Recharge exceeds removal",
            "tex": "R\\gt E\\Rightarrow\\Delta S\\gt 0"
          },
          {
            "label": "Drain-spacing scaling",
            "tex": "L^2=KC"
          }
        ],
        "cautions": [
          {
            "id": "check-extensive-intensive-wording",
            "status": "review",
            "prompt": "Extensive versus intensive irrigation as a cause of waterlogging (damaged source wording).",
            "html": "<p>The source sentence is grammatically damaged. Its resolvable principle is excessive irrigation relative to crop use and drainage capacity; no blanket rule that extensive irrigation is safe, or that intensive irrigation causes waterlogging, is inferred.</p>",
            "sources": [
              {
                "id": "CAP4-07-00090",
                "label": "p. 29; topic 7 point 91"
              }
            ]
          },
          {
            "id": "check-frequent-irrigation",
            "status": "review",
            "prompt": "Frequent irrigation does not prevent waterlogging.",
            "html": "<p>Frequency alone is neither protective nor harmful. An unchanged large dose applied more often adds recharge, while appropriately small frequent applications can be efficient; the depth-time water balance governs.</p>",
            "sources": [
              {
                "id": "CAP4-07-00091",
                "label": "p. 29; topic 7 point 92"
              }
            ]
          },
          {
            "id": "check-surface-drain-season",
            "status": "corrected",
            "prompt": "Shallow surface drains would be fully operative only in the rainy season.",
            "html": "<p>A shallow surface drain works whenever excess surface water reaches it, including irrigation runoff in a dry month, provided its outlet is available. The season affects how busy it is, not whether it can operate.</p>",
            "sources": [
              {
                "id": "CAP4-07-00081",
                "label": "p. 29; topic 7 point 82"
              }
            ]
          },
          {
            "id": "check-trapezoidal-drain-optimal",
            "status": "review",
            "prompt": "The optimal shape for a surface drain is trapezoidal.",
            "html": "<p>A trapezoid is a practical, common section for unlined earth drains because it combines bed width with stable side slopes. It is not universally optimal; hydraulic, land, maintenance and stability considerations decide.</p>",
            "sources": [
              {
                "id": "CAP4-07-00093",
                "label": "p. 29; topic 7 point 94"
              }
            ]
          },
          {
            "id": "check-waterlogging-weeds",
            "status": "corrected",
            "prompt": "Soil becomes infertile when waterlogged because of the growth of weeds.",
            "html": "<p>The primary mechanism is oxygen starvation of roots, because oxygen moves very slowly through saturated pores. Weeds may accompany wet land but are neither the fundamental nor the only cause of crop impairment.</p>",
            "sources": [
              {
                "id": "CAP4-07-00101",
                "label": "p. 29; topic 7 point 102"
              }
            ]
          },
          {
            "id": "check-tile-drainage-soil-volume",
            "status": "corrected",
            "prompt": "Tile drainage increases crop yields by increasing the volume of soil.",
            "html": "<p>Tile drainage enlarges the effective, aerated rooting volume by lowering the water table; it adds no mineral soil. The benefit is more usable root zone, not more soil.</p>",
            "sources": [
              {
                "id": "CAP4-07-00084",
                "label": "p. 29; topic 7 point 85"
              }
            ]
          },
          {
            "id": "check-ph-eleven",
            "status": "review",
            "prompt": "The top soil of a waterlogged field becomes alkaline and infertile if its pH is 11.",
            "html": "<p>pH 11 signals strong alkalinity but is not a universal threshold defining waterlogging or infertility. Saline, sodic and saturated conditions are distinct and are diagnosed through separate salinity and sodium measurements.</p>",
            "sources": [
              {
                "id": "CAP4-07-00094",
                "label": "p. 29; topic 7 point 95"
              }
            ]
          },
          {
            "id": "check-leaching-conditions",
            "status": "review",
            "prompt": "Saline soil can be improved by leaching, or by flooding and draining.",
            "html": "<p>Leaching works when drainage removes the salty water and the soil is not sodic. Flooding without an outlet can raise the water table and reconcentrate salts, and sodic soils also need sodium and amendment assessment.</p>",
            "sources": [
              {
                "id": "CAP4-07-00080",
                "label": "p. 29; topic 7 point 81; topic 7 point 106"
              }
            ]
          },
          {
            "id": "check-groundwater-pumping",
            "status": "review",
            "prompt": "Excessive tapping of groundwater does not contribute to waterlogging.",
            "html": "<p>Net groundwater withdrawal lowers the water table, so it does not cause waterlogging under the stated conditions. This is not an endorsement of excessive pumping, which can bring depletion, subsidence or salinity problems.</p>",
            "sources": [
              {
                "id": "CAP4-07-00082",
                "label": "p. 29; topic 7 point 83"
              }
            ]
          },
          {
            "id": "check-tile-spacing-proportionality",
            "status": "corrected",
            "prompt": "Tile-drain spacing is directly proportional to soil permeability.",
            "html": "<p>With recharge, allowed head and equivalent geometry fixed, L<sup>2</sup> = KC makes spacing proportional to √K, so fourfold permeability doubles the spacing. Full Hooghoudt solutions also update the equivalent depth with spacing.</p>",
            "sources": [
              {
                "id": "CAP4-07-00087",
                "label": "p. 29; topic 7 point 88"
              }
            ]
          },
          {
            "id": "check-tile-under-restrictive-layer",
            "status": "review",
            "prompt": "Tile drainage should not be placed under less pervious strata.",
            "html": "<p>The underlying mechanism is hydraulic disconnection: a drain isolated below a restrictive layer may not collect perched water above it. Proper placement or connection can still drain such soils, so the rule is not absolute.</p>",
            "sources": [
              {
                "id": "CAP4-07-00085",
                "label": "p. 29; topic 7 point 86"
              }
            ]
          }
        ],
        "gaps": [
          "Numerical drain-spacing design with full Hooghoudt or Ernst equations, drainage coefficients and equivalent depth is not tested.",
          "Surface-drain capacity from runoff estimation and outfall design are not covered.",
          "Anti-waterlogging measures such as conjunctive use, canal lining economics and biological drainage appear only through the water balance.",
          "Numerical salinity and sodicity classification limits, such as EC and ESP thresholds, are not provided by the capsule questions."
        ]
      }
    });
})();
