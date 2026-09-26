(function () {
    "use strict";
    window.CIVIL_CAPSULE_NOTE_TOPICS = window.CIVIL_CAPSULE_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_CAPSULE_NOTE_TOPICS, {
      "ACiE0701": {
        "code": "ACiE0701",
        "questionCount": 27,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation used in this topic</th></tr></thead><tbody><tr><th scope='row'>Duty from base period and delta</th><td>D = 8.64 B/Δ, with D in ha/cumec, B in days and Δ in metres</td></tr><tr><th scope='row'>Duty from area and flow</th><td>D = A/Q, with A and Q taken at the same point over the same period</td></tr><tr><th scope='row'>Volume from depth</th><td>V = A × d; 1 ha = 10000 m<sup>2</sup></td></tr><tr><th scope='row'>Total available water</th><td>TAW = 1000(θ<sub>FC</sub> − θ<sub>PWP</sub>)Z<sub>r</sub> in mm, with volumetric contents and Z<sub>r</sub> in metres</td></tr><tr><th scope='row'>Allowed depletion and interval</th><td>RAW = p × TAW; interval = RAW/net daily demand; frequency = 1/interval</td></tr><tr><th scope='row'>Consumptive use</th><td>CU ≈ E + T; deep percolation is not consumptive</td></tr><tr><th scope='row'>Net irrigation requirement</th><td>NIR = ET<sub>c</sub> − P<sub>e</sub> in the simplified balance</td></tr><tr><th scope='row'>Gross diversion depth</th><td>d<sub>gross</sub> = d<sub>net</sub>/(η<sub>a</sub>η<sub>c</sub>)</td></tr><tr><th scope='row'>Canal-head discharge</th><td>Q<sub>head</sub> = V<sub>net</sub>/(t η<sub>overall</sub>), with t the running time in seconds</td></tr><tr><th scope='row'>Crop ratio as defined here</th><td>A<sub>Rabi</sub>/A<sub>Kharif</sub></td></tr></tbody></table>",
        "blocks": [
          {
            "id": "effective-rainfall-and-net-requirement",
            "title": "Effective rainfall and the net irrigation requirement",
            "html": "<p><strong>Effective rainfall</strong> in irrigation planning is the part of the rain falling during the crop period that actually becomes available to meet the crop’s evapotranspiration. Rain lost as surface runoff, rain that drains below the root zone and rain the soil cannot store are excluded. In hydrology, effective rainfall or <em>rainfall excess</em> commonly means something quite different: the part of a storm that produces direct runoff in unit-hydrograph work. Always check which meaning is intended.</p><p>In the simplified balance used here, with no groundwater contribution, no change in soil storage and no leaching allowance, the <strong>net irrigation requirement</strong> is <strong>NIR = ET<sub>c</sub> − P<sub>e</sub></strong>. If crop ET over a period is 150 mm and only 50 mm of an 80 mm rainfall is useful, irrigation must supply 150 − 50 = 100 mm. Deducting the whole 80 mm would credit runoff and drainage as crop water. The net figure applies at the root zone; conveyance and application losses are added afterwards to obtain the gross supply.</p>",
            "moreHtml": "<p>The same subtraction ranks crops only for a stated budget. With matched crop-period values of ET and effective rain of 1.45 and 0.25 m for rice, 0.70 and 0.20 m for tobacco, 0.60 and 0.15 m for wheat, and 1.85 and 0.45 m for banana, the net deltas are 1.20, 0.50, 0.45 and 1.40 m, so banana governs that particular budget. Ranking by ET alone, or adding rain to ET, is meaningless. These figures are illustrative planning inputs that exclude paddy land preparation, seepage, percolation, leaching and storage change; they do not establish a universal ordering of crops by name.</p>",
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
            "html": "<p>The <strong>crop period</strong> runs from sowing to harvest; the <strong>base period</strong> runs from the first to the last irrigation counted in the supply. Their end points differ, so a crop sown on day 0, first watered on day 8, last watered on day 98 and harvested on day 112 has a crop period of 112 days but a base period of 98 − 8 = 90 days.</p><p><strong>Duty</strong> is the area that one cumec can irrigate over the base period, and <strong>delta</strong> (Δ) is the total depth applied during that period. One cumec flowing for B days delivers 86400B m<sup>3</sup>; spread to depth Δ it covers 86400B/Δ m<sup>2</sup>, which is <strong>D = 8.64 B/Δ</strong> ha/cumec. Duty is therefore proportional to B/Δ, but the factor 8.64 cannot be dropped in these units. For Δ = 0.72 m over B = 90 days, D = 8.64 × 90/0.72 = 1080 ha/cumec, whereas the bare ratio 90/0.72 = 125 is not a duty at all.</p>",
            "moreHtml": "<p>Duty also depends on where the flow is measured. Suppose 800 ha receive 0.8 cumec at the field inlet after 20% of the canal-head flow has been lost in conveyance. The head flow is 0.8/0.8 = 1.0 cumec, so the field duty is 800/0.8 = 1000 ha/cumec and the canal-head duty is 800/1.0 = 800 ha/cumec. For the same area and period, every upstream loss lowers the duty, which is why duty is greatest at the field and falls towards the headworks. Separate fields or branches cannot be ranked by location alone.</p>",
            "sources": [
              {
                "id": "CAP4-07-00001",
                "label": "p. 27; topic 7 point 1"
              },
              {
                "id": "CAP4-07-00002",
                "label": "p. 27; topic 7 point 2"
              },
              {
                "id": "CAP4-07-00004",
                "label": "p. 27; topic 7 point 4"
              }
            ]
          },
          {
            "id": "crop-tolerance-and-seasonal-volumes",
            "title": "Ponding tolerance and seasonal water volumes of crops",
            "html": "<p>Crops differ both in the water they need over a season and in how they tolerate wet conditions. Established <strong>lowland rice</strong> is adapted to shallow ponding: internal air spaces help carry oxygen to its roots, so it performs under flooded cultivation where wheat, tobacco or chickpea would suffer from poor aeration. This is tolerance of shallow standing water, not drought resistance and not unlimited survival under complete submergence; variety and growth stage still matter.</p><p>Seasonal allocation is a volume calculation: volume equals depth times area, with 1 ha = 10000 m<sup>2</sup>. For equal 10 ha blocks, planning depths of 1.8 m for sugarcane, 1.2 m for rice, 0.5 m for wheat and 0.4 m for tobacco give 180000, 120000, 50000 and 40000 m<sup>3</sup>. A long-duration crop such as sugarcane can accumulate the largest seasonal total without having the highest daily demand, because the total integrates demand over many months. The depths themselves are illustrative inputs, not crop constants.</p>",
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
            "html": "<p>Soil water is classified by how strongly it is held. After heavy wetting, <strong>gravitational water</strong> drains from large connected pores under gravity; roots may use a little before it leaves, but it is not a dependable reserve. <strong>Capillary water</strong> stays in finer pores, supported by surface tension at curved wetting menisci. Above a connected water table in an unloaded, isothermal soil, this capillary suction, a negative pore-water pressure, holds the column up; no root membrane or external loading is needed for the rise. <strong>Hygroscopic water</strong> forms thin adsorbed films held far too tightly for plants.</p><p>Capillary retention names a mechanism, not guaranteed availability. Much useful moisture is capillary-held, yet as suction rises roots cannot extract all of it, which is why soil still contains capillary water when a crop reaches permanent wilting. <strong>Field capacity</strong>, the water content left once free drainage becomes slow, depends on capillary tension and on pore-size distribution rather than on total porosity alone: two soils with equal porosity differ because large pores drain readily while small pores retain water.</p>",
            "moreHtml": "<table><thead><tr><th scope='col'>Soil water</th><th scope='col'>Held by</th><th scope='col'>Use by crops</th></tr></thead><tbody><tr><th scope='row'>Gravitational</th><td>Not retained; drains through large pores</td><td>Brief only, not a dependable reserve</td></tr><tr><th scope='row'>Capillary</th><td>Surface tension at menisci in fine pores</td><td>Largely available between field capacity and wilting; the most tightly held part is not</td></tr><tr><th scope='row'>Hygroscopic</th><td>Adsorbed films on particle surfaces</td><td>Unavailable</td></tr></tbody></table>",
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
            "html": "<p><strong>Total available water</strong> is the storage between field capacity and permanent wilting over the root depth: <strong>TAW = 1000(θ<sub>FC</sub> − θ<sub>PWP</sub>)Z<sub>r</sub></strong> in mm, with volumetric contents and Z<sub>r</sub> in metres. A 0.60 m root zone with θ<sub>FC</sub> = 0.32 and θ<sub>PWP</sub> = 0.17 stores 1000 × 0.15 × 0.60 = 90 mm; water left at wilting is excluded.</p><p>Crops are not allowed to exhaust TAW. A <strong>permitted depletion fraction</strong> p defines the readily available water, RAW = p × TAW, and the interval between irrigations is RAW divided by net daily demand. With TAW = 120 mm, p = 0.40 and ET of 6 mm/day without rain, RAW = 48 mm, so irrigation falls due 48/6 = 8 days after the soil was at field capacity. Field capacity alone cannot fix an interval: wilting content, root depth, allowable depletion and demand are all needed.</p><p><strong>Interval</strong> and <strong>frequency</strong> are related but different. Interval is the time between waterings; frequency is the number of waterings per unit time, the reciprocal of the interval on a regular schedule. Shortening the interval from 12 to 6 days doubles the frequency.</p>",
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
            "html": "<p>The depletion budget shows how each commonly listed factor acts; holding the others fixed isolates its effect.</p><ul><li><strong>Soil:</strong> with equal root depth and 6 mm/day demand, readily available water of 36 mm and 60 mm lasts 36/6 = 6 and 60/6 = 10 days. Better retention lengthens the interval.</li><li><strong>Crop rooting depth:</strong> with a volumetric available-water difference of 0.15 and p = 0.40, roots reaching 0.50 m and 1.00 m give TAW of 75 and 150 mm, depletion allowances of 30 and 60 mm, and intervals of 6 and 12 days at 5 mm/day.</li><li><strong>Climate:</strong> a 48 mm allowance lasts 12 days at 4 mm/day but only 6 days when hot, dry weather doubles demand to 8 mm/day.</li><li><strong>Fertility:</strong> fertilizer acts indirectly. It can alter canopy growth, rooting and water uptake, and excess salts can add stress, so the schedule is revised from observed crop response and measured soil water.</li></ul><p>No direct conversion exists from fertilizer quantity to irrigation frequency; rainfall or a changed depletion policy would likewise need a fresh water balance.</p>",
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
            "id": "consumptive-use-and-farm-storage",
            "title": "Consumptive use and farm-pond storage",
            "html": "<p><strong>Consumptive use</strong> is the water lost to the atmosphere by evaporation from soil and plant surfaces plus transpiration, with the small quantity retained in plant tissue normally neglected. A field recording 2 mm/day evaporation, 4 mm/day transpiration and 3 mm/day deep percolation therefore has a consumptive use of 2 + 4 = 6 mm/day. Deep percolation leaves the root zone but is not consumed; it may reappear as groundwater or return flow, so including it would overstate crop use.</p><p>Timing mismatches between supply and demand are handled by storage. A <strong>farm pond</strong> captures runoff from a short storm or a small agricultural catchment and releases it for later supplemental irrigation. Neighbouring works do other jobs: a cross-regulator controls canal level, a field drain removes unwanted water and a measuring flume gauges flow, and none of them provides a reserve. The useful yield of a pond still follows from a volume balance of inflow against evaporation, seepage, dead storage and the timing of withdrawals.</p>",
            "sources": [
              {
                "id": "CAP4-07-00011",
                "label": "p. 27; topic 7 point 12"
              },
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
            "title": "From net depth to canal-head supply: efficiencies and kor demand",
            "html": "<p>Losses are allowed for by dividing the net need by efficiency, never by multiplying it. When each efficiency is defined on its own incoming water, the overall value is their product, <strong>η = η<sub>a</sub>η<sub>c</sub></strong>. A field needing 72 mm stored in the root zone, with application efficiency 0.80 and conveyance efficiency 0.90, has η = 0.72, so the gross depth diverted over the same area is 72/0.72 = 100 mm. Applying only one efficiency misses a loss stage, and multiplying 72 by 0.72 reverses the logic.</p><p><strong>Kor watering</strong> is the first important watering after sowing, needed within a short establishment window called the kor period. Its depth and timing depend on the crop and practice; describing the plants as a few centimetres high is descriptive, not a universal trigger. Because a set depth must arrive within a short period, kor demand can govern canal size. For 864 ha needing 0.14 m net within 14 days, the net volume is 864 × 10000 × 0.14 = 1209600 m<sup>3</sup>, and 14 days contain 1209600 s, so the net flow is 1.0 cumec. At an overall efficiency of 0.70 and continuous running, the canal-head flow is 1.0/0.70 = 1.429 cumecs, before other coincident demands are checked.</p>",
            "sources": [
              {
                "id": "CAP4-07-00031",
                "label": "p. 27; topic 7 point 31"
              },
              {
                "id": "CAP4-07-00029",
                "label": "p. 27; topic 7 point 29"
              },
              {
                "id": "CAP4-07-00106",
                "label": "p. 29; topic 7 point 108"
              }
            ]
          },
          {
            "id": "seasonal-peaks-and-crop-ratio",
            "title": "Governing canal capacity and the crop ratio",
            "html": "<p>Canal design discharge follows the <strong>largest coincident requirement</strong> at the design boundary, not the sum of every demand in the year. Suppose that at one canal head Rabi crops need 2.4 cumecs while perennial crops draw 0.6, and Kharif crops need 3.0 while perennials draw 0.8. With non-overlapping seasons the concurrent totals are 3.0 and 3.8 cumecs, so 3.8 governs. Adding the seasons (6.8) oversizes the canal; ignoring the perennials (3.0) undersizes it.</p><p>The <strong>crop ratio</strong> compares seasonal irrigated areas and must be computed from the actual cropping programme. Defined as Rabi area divided by Kharif area, 2400 ha and 1600 ha give 2400/1600 = 1.5, or 3:2, while the reverse definition gives 2:3. No fixed value such as 2 is a law of irrigation, so always check which area is the numerator.</p>",
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
        "cautions": [
          {
            "id": "check-effective-rainfall-meanings",
            "status": "review",
            "prompt": "Effective rainfall is rain available to meet crop evapotranspiration.",
            "html": "<p>That is the irrigation meaning, used for scheduling and net requirement. In hydrology the phrase usually means rainfall excess, the runoff-producing part of a storm, so identify the intended meaning before calculating.</p>",
            "sources": [
              {
                "id": "CAP4-03-00095",
                "label": "p. 13; topic 3 point 94"
              }
            ]
          },
          {
            "id": "check-duty-factor",
            "status": "corrected",
            "prompt": "Duty equals the ratio of base period to delta.",
            "html": "<p>Duty is proportional to B/Δ but not numerically equal to it. With B in days, Δ in metres and duty in ha/cumec, D = 8.64 B/Δ; the factor comes from 86400 s per day and 10000 m<sup>2</sup> per hectare.</p>",
            "sources": [
              {
                "id": "CAP4-07-00001",
                "label": "p. 27; topic 7 point 1"
              }
            ]
          },
          {
            "id": "check-rice-water-resistance",
            "status": "review",
            "prompt": "Rice has the highest water resistance.",
            "html": "<p>The phrase is undefined. What can be taught is that established lowland rice tolerates ordinary shallow ponding better than common dryland crops; this is not a universal ranking of resistance to drought, deep submergence or every wet condition.</p>",
            "sources": [
              {
                "id": "CAP4-07-00003",
                "label": "p. 27; topic 7 point 3"
              }
            ]
          },
          {
            "id": "check-duty-maximum-location",
            "status": "review",
            "prompt": "Duty is maximum on the field.",
            "html": "<p>True when the same area is compared over the same period at points along one supply route, because upstream losses lower duty. It is not a rule for ranking separate fields, branches or seasons by position alone.</p>",
            "sources": [
              {
                "id": "CAP4-07-00004",
                "label": "p. 27; topic 7 point 4"
              }
            ]
          },
          {
            "id": "check-sugarcane-maximum",
            "status": "review",
            "prompt": "Sugarcane requires the maximum water per hectare.",
            "html": "<p>A long-duration crop can have a large seasonal total, but the depths used here are illustrative planning inputs. Demand depends on climate, season length and management, so compare stated depths instead of assuming a verified global maximum.</p>",
            "sources": [
              {
                "id": "CAP4-07-00005",
                "label": "p. 27; topic 7 point 5"
              }
            ]
          },
          {
            "id": "check-capillary-water-availability",
            "status": "corrected",
            "prompt": "Capillary water is usable by plants.",
            "html": "<p>Only part of it is. Capillary water between field capacity and permanent wilting forms the conventional available reservoir, but the capillary water still present at wilting is retained too strongly for roots to extract.</p>",
            "sources": [
              {
                "id": "CAP4-07-00007",
                "label": "p. 27; topic 7 point 7"
              }
            ]
          },
          {
            "id": "check-interval-versus-frequency",
            "status": "corrected",
            "prompt": "Irrigation interval means frequency of irrigation.",
            "html": "<p>Interval is the elapsed time between successive irrigations; frequency is the number of irrigations per unit time. On a regular schedule each is the reciprocal of the other, so they are linked but not identical.</p>",
            "sources": [
              {
                "id": "CAP4-07-00013",
                "label": "p. 27; topic 7 point 14"
              }
            ]
          },
          {
            "id": "check-interval-from-field-capacity",
            "status": "corrected",
            "prompt": "Irrigation interval is determined by field capacity and maximum crop water requirement.",
            "html": "<p>Field capacity is only the upper storage limit. The interval needs the full depletion budget: available water between field capacity and wilting, root depth, the permitted depletion fraction and net daily demand, giving interval = p × TAW/ET<sub>net</sub>.</p>",
            "sources": [
              {
                "id": "CAP4-07-00014",
                "label": "p. 27; topic 7 point 15"
              }
            ]
          },
          {
            "id": "check-kor-depth-capacity",
            "status": "corrected",
            "prompt": "Canal capacity is determined by kor water depth (Kharif).",
            "html": "<p>Kor depth alone cannot size a canal: area, the kor period, delivery efficiency and running time are also required, and every coincident demand must be compared. Kharif kor is not automatically the governing season for every scheme.</p>",
            "sources": [
              {
                "id": "CAP4-07-00029",
                "label": "p. 27; topic 7 point 29"
              }
            ]
          },
          {
            "id": "check-rabi-kharif-ratio",
            "status": "corrected",
            "prompt": "The ratio of irrigated area under Rabi and Kharif crops is 2.",
            "html": "<p>No universal crop ratio exists. It depends on the cropping programme and on the stated definition: 2400 ha of Rabi and 1600 ha of Kharif give 1.5 as Rabi/Kharif, or about 0.667 when reversed.</p>",
            "sources": [
              {
                "id": "CAP4-07-00104",
                "label": "p. 29; topic 7 point 105"
              }
            ]
          },
          {
            "id": "check-kor-plant-height",
            "status": "review",
            "prompt": "Kor watering is the first watering given when the crop is a few cm high.",
            "html": "<p>Kor watering is better defined as the first important post-sowing watering, delivered within the kor period. Plant height is descriptive only, and kor watering is distinct from pre-sowing watering and from the full-season requirement.</p>",
            "sources": [
              {
                "id": "CAP4-07-00106",
                "label": "p. 29; topic 7 point 108"
              }
            ]
          },
          {
            "id": "check-highest-delta-crop",
            "status": "review",
            "prompt": "Rice has the highest delta among rice, tobacco, wheat and banana.",
            "html": "<p>No unconditional ranking was verified. Net delta depends on crop period, local ET, effective rainfall, paddy preparation, seepage and leaching. In the illustrative budget taught here banana needs 1.40 m against 1.20 m for rice, so calculate from stated inputs.</p>",
            "sources": [
              {
                "id": "CAP4-07-00114",
                "label": "p. 29; topic 7 point 115"
              }
            ]
          },
          {
            "id": "check-fertilizer-and-frequency",
            "status": "review",
            "prompt": "Irrigation frequency depends on fertilizer.",
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
          "No verified local tables of crop delta, duty or kor periods are provided; all crop figures are illustrative."
        ]
      },
      "ACiE0702": {
        "code": "ACiE0702",
        "questionCount": 28,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation used in this topic</th></tr></thead><tbody><tr><th scope='row'>Kennedy critical velocity</th><td>V<sub>0</sub> = 0.55 m y<sup>0.64</sup> in m/s, with y the water depth in metres and m the critical-velocity ratio</td></tr><tr><th scope='row'>Lacey velocity</th><td>V = √(2fR/5), with f the silt factor</td></tr><tr><th scope='row'>Lacey regime resistance form</th><td>V = C R<sup>2/3</sup>S<sup>1/3</sup></td></tr><tr><th scope='row'>Manning uniform flow</th><td>Q = (1/n)AR<sup>2/3</sup>S<sup>1/2</sup>; R = A/P, free surface excluded from P</td></tr><tr><th scope='row'>Trapezoidal area</th><td>A = y(b + zy), or Bd + zd<sup>2</sup> for bed width B, depth d and side slope z H:1 V</td></tr><tr><th scope='row'>Both sloping faces</th><td>area = 2Ld√(1 + z<sup>2</sup>) over length L</td></tr><tr><th scope='row'>Shields critical shear</th><td>τ<sub>c</sub> = θ<sub>c</sub>(ρ<sub>s</sub> − ρ)gd</td></tr><tr><th scope='row'>Balanced earthwork</th><td>compacted fill available = in-situ cut × compacted yield factor</td></tr><tr><th scope='row'>Area supported after lining</th><td>A<sub>2</sub> = A<sub>1</sub>η<sub>2</sub>/η<sub>1</sub> for the same supply and field demand</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "canal-classes-and-network-roles",
            "title": "Canal classes by supply and roles within the network",
            "html": "<p>Canals are classified partly by how dependable their supply is. An <strong>inundation canal</strong> is an ungated river diversion that receives useful water mainly when seasonal floods lift the river above its intake sill, so it runs during high stages and may be dry at other times. A <strong>perennial canal</strong> seeks a dependable, regulated supply throughout its operating season, usually from headworks that control the river level. The distinction concerns availability and control, not lining or construction material.</p><p>Within a conventional network the <strong>main canal</strong> performs bulk conveyance. It carries water from the headworks to branch canals and distributaries, which feed minor channels, watercourses and finally the farms. Where no direct farm outlets are authorized on it, the main canal still serves irrigation: its role is to deliver the supply to the distribution system rather than to water fields itself. It is neither a collector for field drainage nor a seasonal storage.</p>",
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
            "html": "<p>A <strong>ridge or watershed alignment</strong> follows the drainage divide. Natural drains fall away on both sides, so the canal can command land on both banks while crossing few drains. The advantage is conditional: the survey must still show an adequate canal grade and enough head at the fields.</p><p>A <strong>side-slope alignment</strong> runs down the hillside roughly parallel to the natural drainage lines, so in the ideal case it meets few drains. Local gullies, deviations and small catchments can still cut across it, and where the ground falls faster than the permissible bed slope, falls are required. It does not necessarily command both sides as a ridge canal does, nor does it intercept every drain in the way a contour canal does.</p><p>Gravity canal irrigation is attractive on extensive <strong>alluvial plains</strong> because gentle grades, broad cultivable land and a dependable river supply at a suitable level allow a canal to command wide areas. Alluvium varies greatly in permeability and erodibility, however, so seepage, sediment and drainage still need investigation; alluvial origin guarantees neither low seepage nor stable unlined banks.</p>",
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
            "html": "<p>A canal in partial cutting and partial filling is most economical at the <strong>balancing depth</strong>, where usable excavation just supplies the banks. The comparison must use compatible volume bases. If 1000 m<sup>3</sup> of cut, measured in situ, yields 0.90 m<sup>3</sup> of compacted fill per in-situ cubic metre, it balances 900 m<sup>3</sup> of compacted bank, not 1000 m<sup>3</sup>; shrinkage, unsuitable soil and density differences all enter the balance.</p><p>For a symmetrical trapezoid with bed width B, depth d and side slope z horizontal to 1 vertical, the area is <strong>A = Bd + zd<sup>2</sup></strong>: a central rectangle plus two triangles. With B = 4 m, d = 2 m and z = 1.5, A = 8 + 6 = 14 m<sup>2</sup>. Each sloping face has slant width d√(1 + z<sup>2</sup>), so lining both faces over a length L needs <strong>2Ld√(1 + z<sup>2</sup>)</strong>. For L = 50 m, d = 2 m and z = 1.5 each face is 3.60555 m wide and the two faces need 360.56 m<sup>2</sup>; dropping the square root or counting one face gives wrong quantities. Cutting depth need not equal flow depth.</p><p>Area, wetted perimeter and hydraulic radius are geometric properties at a stated depth, whereas <strong>discharge</strong> is a flow variable, Q = AV, that the geometry constrains but does not fix.</p>",
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
            "html": "<p><strong>Freeboard</strong> is the vertical margin from the design water surface to the top of the bank or lining. It absorbs waves, surges and operating fluctuations, reducing the risk of overtopping, and it is not part of the flow area at design level. Freeboard does not protect a lining from frost: frost damage depends on moisture trapped behind the lining, freezing exposure, drainage and the freeze-thaw resistance of materials and details, so poorly drained panels can crack however generous the freeboard.</p><p><strong>Lining</strong> reduces seepage and raises conveyance efficiency. With a fixed canal-head supply and unchanged crop needs and field efficiency, the area a supply can support rises in proportion to efficiency, so a supply serving 600 ha at 0.60 can serve 600 × 0.80/0.60 = 800 ha at 0.80. The gain materializes only if suitable land lies within reach and delivery levels are adequate. Lining does not raise the topographic command; it enlarges the irrigable area that the saved water can support.</p>",
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
            "id": "sediment-processes-in-canals",
            "title": "Silting, aggradation and bed load in canals",
            "html": "<p>A reach <strong>aggrades</strong> when more sediment enters than leaves: stored bed sediment grows and the mean bed level rises. <strong>Degradation</strong> is the reverse, net erosion that lowers the bed. Sediment may pass through a regime reach without either happening, but a sustained positive storage balance cannot coexist with an unchanged mean bed.</p><p>Grains that roll, slide or make short hops along the bed make up the <strong>bed load</strong>, the hopping motion being saltation. Suspended load is held higher in the flow by turbulence, and dissolved load travels in solution.</p><p><strong>Silting</strong> reduces the effective flow area below a fixed permitted water level and can raise resistance, so with the available head unchanged the conveyance capacity falls. If operators instead hold the discharge, water levels rise; the outcome depends on which condition is fixed. Where a Nepal intake admits sediment-rich monsoon flow into a low-velocity canal reach and the bed rises while capacity declines, the first suspect is deposition because more sediment enters than the reach can carry. This is a sediment-budget imbalance, and other sites may be governed by different problems.</p>",
            "sources": [
              {
                "id": "CAP4-07-00018",
                "label": "p. 27; topic 7 point 19"
              },
              {
                "id": "CAP4-07-00036",
                "label": "p. 27; topic 7 point 36"
              },
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
            "title": "Kennedy's critical velocity and the critical-velocity ratio",
            "html": "<p>Kennedy’s method is empirical, derived from observations on the <strong>Upper Bari Doab Canal</strong> system in Punjab. He sought the <strong>critical velocity</strong> at which a channel neither silts nor scours and related it to water depth: <strong>V<sub>0</sub> = 0.55 m y<sup>0.64</sup></strong> in metre-second units, with y the depth of water. The <strong>critical-velocity ratio</strong>, written m, adjusts this reference velocity for the sediment grade, so designs with equal depth but different silt need different values of m. This velocity concerns silting and scour; it is not the critical-flow condition at a Froude number of one, nor the settling speed of a grain in still water.</p><p>For y = 0.75 m and m = 1, 0.75<sup>0.64</sup> = 0.831839 and V<sub>0</sub> = 0.55 × 0.831839 = 0.457511 m/s, which rounds to 0.458 m/s. Designing by Kennedy involves repeated trial calculations, so <strong>Garrett’s diagrams</strong> were prepared as graphical aids for Kennedy-based design. They inherit Kennedy’s calibration and assumptions and have nothing to do with seepage methods for weir foundations such as those of Lane or Khosla. Because the coefficients came from one canal system, transferring them to different sediment and channel conditions needs care.</p>",
            "sources": [
              {
                "id": "CAP4-07-00016",
                "label": "p. 27; topic 7 point 17"
              },
              {
                "id": "CAP4-07-00039",
                "label": "p. 27; topic 7 point 39"
              },
              {
                "id": "CAP4-07-00124",
                "label": "p. 30; topic 7 point 122"
              },
              {
                "id": "CAP4-07-00129",
                "label": "p. 30; topic 7 point 129"
              }
            ]
          },
          {
            "id": "lacey-regime-theory",
            "title": "Lacey's regime concept and velocity relations",
            "html": "<p>Lacey’s <strong>true regime</strong> is an idealization: an alluvial channel whose bed and banks are free to adjust, carrying a sustained water discharge and sediment charge on a stable grade, with neither progressive deposition nor scour. Sediment still moves through the reach, but in balance. A rigid lined bed, a fixed rock section, a reach steadily degrading under a sediment deficit, or a boundary that scours more easily than it deposits does not satisfy the premise.</p><p>Two Lacey relations are used for comparisons. The velocity relation <strong>V = √(2fR/5)</strong> makes V proportional to the square root of the product of silt factor f and hydraulic radius R, so raising f fourfold and R ninefold multiplies V by √36 = 6, not 36. The regime resistance form <strong>V = C R<sup>2/3</sup>S<sup>1/3</sup></strong> gives, for eight times the radius and one-eighth the slope, a ratio of 8<sup>2/3</sup> × (1/8)<sup>1/3</sup> = 4 × 0.5 = 2; Manning’s one-half slope exponent would instead give about 1.41. Such ratios hold only for the stated compatible inputs, not with every other regime quantity held fixed.</p>",
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
            "html": "<p>The <strong>tractive-force</strong> approach compares the shear stress the flow exerts on the boundary with the resistance of the bed grains. For non-cohesive grains the <strong>Shields parameter</strong> θ = τ/[(ρ<sub>s</sub> − ρ)gd] is bed shear divided by submerged grain weight per unit area, so the critical shear is <strong>τ<sub>c</sub> = θ<sub>c</sub>(ρ<sub>s</sub> − ρ)gd</strong>. Adopting θ<sub>c</sub> = 0.056 for a coarse bed with ρ<sub>s</sub> = 2650 kg/m<sup>3</sup>, ρ = 1000 kg/m<sup>3</sup>, d = 0.010 m and g = 9.81 m/s<sup>2</sup> gives τ<sub>c</sub> = 0.056 × 1650 × 9.81 × 0.010 = 9.06 Pa. This is an incipient-motion estimate, before any design allowance.</p><p><strong>Scour</strong> begins when applied bed shear exceeds this resistance. A gate operation that accelerates flow in an erodible reach can therefore entrain grains and, if the incoming sediment supply cannot replace them, lower the bed. Faster flow raises rather than lowers transport capacity, so it does not cause deposition. Velocity increase usually accompanies higher shear, but depth, turbulence, grain resistance and sediment supply also matter; velocity by itself is not a universal threshold, and a regime section is not maintained automatically during rapid gate changes.</p>",
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
            "html": "<p>A lined canal has a fixed boundary, so it is sized with a <strong>resistance relation</strong> such as Manning’s rather than with a regime theory for adjustable alluvial beds. For uniform flow, <strong>Q = (1/n)AR<sup>2/3</sup>S<sup>1/2</sup></strong> with R = A/P, the free surface being excluded from the wetted perimeter. A rectangular channel 4 m wide flowing 2 m deep has A = 8 m<sup>2</sup> and P = 4 + 2 × 2 = 8 m, so R = 1 m; with n = 0.020 and S = 0.0004, Q = 50 × 8 × 1 × 0.02 = 8.00 cumecs. Manning is only one check; freeboard, lining stability, velocity limits and economy complete the design.</p><p>Trial sizing often starts from continuity. For 90 cumecs at an adopted mean velocity of 2 m/s the area must be 45 m<sup>2</sup>; with depth 3 m and side slopes 1.5 H:1 V, A = y(b + zy) gives b = 45/3 − 1.5 × 3 = 10.50 m. The adopted velocity must then be shown to be achievable on the available slope. The reviewed text of IS 10430:2000, Section 8.8.1, permits trapezoidal sections, with or without rounded corners, for all types of lined canals, so a trapezoid is not excluded merely because a discharge falls below a quoted figure such as 85 cumecs.</p>",
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
        "cautions": [
          {
            "id": "check-main-canal-role",
            "status": "corrected",
            "prompt": "The main canal is not considered to be used for irrigation.",
            "html": "<p>The main canal is an irrigation conveyance even when it has no direct farm outlets. The defensible reading is that it does not usually water fields directly; it supplies the branches and distributaries that do.</p>",
            "sources": [
              {
                "id": "CAP4-07-00028",
                "label": "p. 27; topic 7 point 28"
              }
            ]
          },
          {
            "id": "check-side-slope-crossings",
            "status": "corrected",
            "prompt": "A side-slope canal does not need cross-drainage structures.",
            "html": "<p>An ideal side-slope route avoids most crossings because it runs parallel to the drains, yet local gullies and catchments may still cross it. The need for cross-drainage works and falls must be confirmed by the detailed survey.</p>",
            "sources": [
              {
                "id": "CAP4-07-00024",
                "label": "p. 27; topic 7 point 24"
              }
            ]
          },
          {
            "id": "check-alluvial-preference",
            "status": "review",
            "prompt": "Canal irrigation is generally preferred in alluvial canal.",
            "html": "<p>The circular wording is interpreted as suitability on alluvial plains, where gentle slopes and a dependable supply at a suitable level favour gravity distribution. Seepage, sediment and drainage in the particular alluvium must still be assessed.</p>",
            "sources": [
              {
                "id": "CAP4-07-00025",
                "label": "p. 27; topic 7 point 25"
              }
            ]
          },
          {
            "id": "check-balanced-cut-fill",
            "status": "review",
            "prompt": "Balanced depth of cutting is where the volume of cutting equals the volume of filling.",
            "html": "<p>Equality holds only on compatible bases. In-situ cut and compacted fill differ through shrinkage or bulking, and unsuitable soil cannot be used, so the balance compares usable compacted yield with the required bank volume.</p>",
            "sources": [
              {
                "id": "CAP4-07-00015",
                "label": "p. 27; topic 7 point 16"
              }
            ]
          },
          {
            "id": "check-trapezoid-area-notation",
            "status": "corrected",
            "prompt": "Trapezoidal cross-section area is Bd + sd² for depth y and side slope s:1.",
            "html": "<p>The capsule uses both y and d for the same depth. With one symbol and the horizontal-to-vertical convention z H:1 V, the area is Bd + zd<sup>2</sup>; the cutting depth need not equal the flow depth.</p>",
            "sources": [
              {
                "id": "CAP4-07-00037",
                "label": "p. 27; topic 7 point 37"
              }
            ]
          },
          {
            "id": "check-side-slope-lining-radical",
            "status": "corrected",
            "prompt": "Total side-slope area is 2L × y × (1 + S²), as extracted from the capsule text.",
            "html": "<p>The extracted expression lost its square-root sign. By Pythagoras each face has slant width y√(1 + S<sup>2</sup>) for a slope of S horizontal to 1 vertical, so the two faces need 2Ly√(1 + S<sup>2</sup>). The page image itself was not reviewed.</p>",
            "sources": [
              {
                "id": "CAP4-07-00038",
                "label": "p. 27; topic 7 point 38"
              }
            ]
          },
          {
            "id": "check-freeboard-frost",
            "status": "corrected",
            "prompt": "Freeboard provides stability against overtopping and safety against frost cracking.",
            "html": "<p>Freeboard addresses water-level exceedance only. Frost cracking is controlled by drainage behind the lining, material durability and detailing, which need their own design even when the bank crest is safely high.</p>",
            "sources": [
              {
                "id": "CAP4-07-00023",
                "label": "p. 27; topic 7 point 23"
              }
            ]
          },
          {
            "id": "check-lining-command-area",
            "status": "corrected",
            "prompt": "A lined channel section increases the command area.",
            "html": "<p>Lining saves water, which can support a larger irrigated area if suitable land and adequate delivery levels exist. It does not change the geometric command set by topography and water levels, so supported irrigable area must be distinguished from command area.</p>",
            "sources": [
              {
                "id": "CAP4-07-00021",
                "label": "p. 27; topic 7 point 22"
              }
            ]
          },
          {
            "id": "check-silting-discharge",
            "status": "review",
            "prompt": "Silting in a channel causes a decrease in discharge.",
            "html": "<p>True when the available head and permitted water level are fixed, because deposits reduce area and raise resistance. If the discharge is held instead, water levels rise; state the controlling boundary condition before predicting the effect.</p>",
            "sources": [
              {
                "id": "CAP4-07-00017",
                "label": "p. 27; topic 7 point 18"
              }
            ]
          },
          {
            "id": "check-nepal-alluvial-soil",
            "status": "review",
            "prompt": "The problem in Nepal for artificial channels is formation of alluvial soil.",
            "html": "<p>No nationwide generalization was verified. The defensible mechanism is net deposition where sediment supply exceeds a reach’s transport capacity, as at a sediment-rich monsoon intake feeding a slow reach; other Nepal sites may be governed by different problems.</p>",
            "sources": [
              {
                "id": "CAP4-07-00030",
                "label": "p. 27; topic 7 point 30"
              }
            ]
          },
          {
            "id": "check-kennedy-velocity-rounding",
            "status": "corrected",
            "prompt": "If D = 0.75 and m = 1, the critical velocity of setting is 0.457 m/s.",
            "html": "<p>D is the water depth, and the quantity is Kennedy’s non-silting, non-scouring velocity rather than a settling velocity. The computed 0.457511 m/s rounds to 0.458 m/s at three decimals; 0.457 is a truncation.</p>",
            "sources": [
              {
                "id": "CAP4-07-00124",
                "label": "p. 30; topic 7 point 122"
              }
            ]
          },
          {
            "id": "check-lacey-square-root",
            "status": "corrected",
            "prompt": "In Lacey's theory, velocity is proportional to silt factor and hydraulic radius.",
            "html": "<p>The relation is V = √(2fR/5), so velocity varies with the square root of the product fR, not with f and R directly. Fourfold f with ninefold R gives a sixfold velocity, not a thirty-six-fold one.</p>",
            "sources": [
              {
                "id": "CAP4-07-00113",
                "label": "p. 29; topic 7 point 114"
              }
            ]
          },
          {
            "id": "check-shields-value",
            "status": "review",
            "prompt": "For non-scouring channels in coarse alluvium, the Shields entrainment function should be 0.056.",
            "html": "<p>The worked example adopts 0.056 explicitly for a coarse bed. The Shields threshold depends on the grain and flow regime, so no single value is mandatory for every alluvial canal, and design allowances are added separately.</p>",
            "sources": [
              {
                "id": "CAP4-07-00040",
                "label": "p. 28; topic 7 point 40"
              }
            ]
          },
          {
            "id": "check-scour-velocity",
            "status": "review",
            "prompt": "Canal scouring primarily results from velocity increase.",
            "html": "<p>The governing condition is applied bed shear exceeding sediment resistance, with sediment supply controlling net bed change. A velocity increase is a common shorthand for rising shear, not a universal threshold on its own.</p>",
            "sources": [
              {
                "id": "CAP4-07-00130",
                "label": "p. 30; topic 7 point 130"
              }
            ]
          },
          {
            "id": "check-triangular-lining-85",
            "status": "review",
            "prompt": "Triangular section lining is adopted when discharge is less than 85 cumecs.",
            "html": "<p>The archived text of IS 10430:2000, Section 8.8.1, permits trapezoidal lined sections for all types of lined canals and does not establish this 85-cumec rule. The convention’s historical origin remains unverified, and no current Nepal adoption of that standard is claimed.</p>",
            "sources": [
              {
                "id": "CAP4-07-00043",
                "label": "p. 28; topic 7 point 43"
              }
            ]
          },
          {
            "id": "check-trapezoid-above-84",
            "status": "review",
            "prompt": "Canal sections carrying above 84 cumecs are trapezoidal.",
            "html": "<p>Trapezoidal sizing suits large lined canals, but IS 10430:2000, Section 8.8.1, permits trapezoidal sections for all lined canals, so no 84-cumec switch is endorsed. The origin of the threshold remains unverified.</p>",
            "sources": [
              {
                "id": "CAP4-07-00112",
                "label": "p. 29; topic 7 point 113"
              }
            ]
          },
          {
            "id": "check-manning-lined-canal",
            "status": "review",
            "prompt": "A lined alluvial canal is best designed on the basis of Manning theory.",
            "html": "<p>Manning’s equation suits the fixed boundary of a lined canal as a resistance relation under uniform-flow conditions, but it is not a complete lined-canal design and not a regime theory for adjustable alluvial channels.</p>",
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
          "Canal network layout details such as distributary spacing, outlet location and balancing-depth derivation are outside this capsule coverage.",
          "Lining materials, costs and seepage-loss estimation appear only indirectly through efficiency and section-shape questions."
        ]
      },
      "ACiE0703": {
        "code": "ACiE0703",
        "questionCount": 28,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation used in this topic</th></tr></thead><tbody><tr><th scope='row'>Bligh creep length</th><td>L = ΣL<sub>h</sub> + ΣL<sub>v</sub>, horizontal and vertical contact weighted equally</td></tr><tr><th scope='row'>Lane weighted creep length</th><td>L<sub>w</sub> = ΣL<sub>v</sub> + ΣL<sub>h</sub>/3; for a floor of length L with thin cutoffs d<sub>1</sub> and d<sub>2</sub>, 2d<sub>1</sub> + L/3 + 2d<sub>2</sub></td></tr><tr><th scope='row'>Khosla exit gradient, end pile</th><td>G<sub>E</sub> = H/(πd√λ)</td></tr><tr><th scope='row'>Khosla geometric parameters</th><td>α = b/d; λ = [1 + √(1 + α<sup>2</sup>)]/2</td></tr><tr><th scope='row'>Vertical foundation reaction</th><td>N = W − U</td></tr><tr><th scope='row'>Frictional sliding resistance</th><td>F = μ(W − U), with no cohesion</td></tr><tr><th scope='row'>Preliminary undersluice discharge</th><td>largest of 2Q<sub>canal</sub>, 0.10 to 0.15 Q<sub>flood</sub> and Q<sub>winter</sub>, each then rated at its own head</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "weirs-barrages-and-crest-profiles",
            "title": "Weirs, barrages and overflow profiles",
            "html": "<p>The primary diversion function of a <strong>weir</strong> or <strong>barrage</strong> is to raise or control the upstream water level so that a gravity canal can draw water under the available head. It redistributes hydraulic levels; it does not create water, supply pumping energy or act chiefly as seasonal storage.</p><p>The two differ in how the pond level is held. A weir relies mainly on a raised fixed crest, sometimes topped with shutters or small gates. A barrage holds its pond chiefly with gates spanning bays over relatively low sills, and those gates can be opened widely to pass floods. Because some weirs also carry gates, the mere presence of gates is an oversimplified test; predominantly gated control over low sills is the better description of a barrage.</p><p>Profiles follow hydraulic purpose. A <strong>sloping-glacis weir</strong> carries the overflow down a masonry or concrete glacis into a protected basin, where a hydraulic jump dissipates energy. An <strong>ogee crest</strong> is shaped to follow the underside of a free nappe at a chosen design head, so that at that head the overflow stays attached and efficient and crest pressures remain compatible; at other heads the pressures and the discharge coefficient change.</p>",
            "sources": [
              {
                "id": "CAP4-07-00050",
                "label": "p. 28; topic 7 point 50"
              },
              {
                "id": "CAP4-07-00051",
                "label": "p. 28; topic 7 point 51"
              },
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
            "html": "<p>An intake site is judged on hydraulic reliability, not on labels. A gravity intake needs <strong>adequate head in the low-flow season</strong> as well as in floods, a <strong>stable approach channel</strong> that does not shoal or migrate, a manageable sediment regime, suitable foundations and flood access, and freedom from conflicts such as navigation.</p><p>When two sites offer equal diversion head, the site whose approach is stable and whose navigation is kept separate is preferable at the preliminary stage, because unstable shoaling threatens both intake reliability and vessel passage. Lying in a natural river is not a defect in itself; the actual channel behaviour matters. Consider two reaches with comparable foundations and access: one has ample dry-season head but migrating shoals, the other a stable approach but a dry-season level below the required intake level. The first needs investigation of its unstable shoals; the second simply lacks the low-flow head for gravity diversion unless the scheme changes. A large flood discharge cures neither deficiency.</p>",
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
            "html": "<p>A conventional diversion headworks groups several components around the weir or barrage. The <strong>divide wall</strong> separates the undersluice pocket beside the canal intake from the main weir bays. It limits cross-currents between them, helps organize the approach to the intake and concentrates sediment sluicing near the canal head. It should not be confused with guide banks, which steer the whole river through the waterway.</p><p>A <strong>fish ladder</strong>, or fish pass, provides a series of passable steps and resting pools so that fish can migrate upstream across the level difference created by the weir. Conventional layouts often place it beside the divide wall, but entrance attraction, flow velocities and the needs of the species concerned decide whether it works.</p><p>The <strong>canal head regulator</strong> stands at the entrance of a canal taking off from the river and admits, meters or stops the canal supply. A cross regulator, by contrast, spans a parent canal to control passage and upstream level, and an escape disposes of surplus canal water; position along the water route distinguishes these related structures.</p>",
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
            "html": "<p>Sediment concentration in a river is highest in the layers near the bed, so headworks keep those layers away from the canal. The <strong>undersluices</strong> have crests near riverbed level and below the canal intake sill, giving flushing flow a low route that draws the sediment-laden bottom water away from the intake pocket. The canal <strong>head regulator sill</strong> is set higher than the undersluice crest so that the canal draws the cleaner upper layers; its gates still close onto that raised sill and control admission.</p><p>A <strong>silt excluder</strong> acts in the river approach, before water reaches the head regulator: it intercepts the sediment-rich lower layers and leads them to the undersluices. A <strong>silt ejector</strong> works later, removing sediment that has already entered the canal, and a settling basin or cross regulator is different again. Position along the sediment pathway, not the general idea of removal, distinguishes excluder from ejector. Effective flushing still requires enough head and transport capacity, and exact crest levels follow the surveyed bed and design layout.</p>",
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
            "html": "<p>A preliminary brief for undersluices takes the <strong>largest</strong> of several requirements, not their sum. The capsule’s rule lists at least twice the canal discharge, about 10 to 15% of the maximum flood, and the ability to pass the winter flow. With a 20-cumec canal, 12% selected from that range for a 1000-cumec flood, and an 80-cumec winter passage, the three requirements are 2 × 20 = 40, 0.12 × 1000 = 120 and 80 cumecs, so 120 cumecs governs the numerical brief; their sum of 240 has no design meaning.</p><p>A numerical maximum is not a complete check. Flow through a given opening depends on the head and the flow regime, so passing 120 cumecs at flood head does not prove that 80 cumecs can pass at the much smaller winter head. Each case is rated at its own head and gate opening; otherwise a low-head deficiency can hide behind the larger flood figure.</p>",
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
            "html": "<p>Hydraulic structures on pervious foundations fail mainly by two mechanisms. In <strong>piping and undermining</strong>, seepage emerging at an inadequately protected downstream exit carries foundation particles away; the erosion works backwards, opening channels that remove support from the floor. Filters, drainage and seepage control address this, whereas floor weight alone cannot stop particle transport.</p><p>In <strong>uplift</strong> failure the floor may stay intact while the seepage pressure beneath it exceeds the downward stabilizing action of its weight, so it lifts or cracks. Checking uplift needs the pressure distribution under the floor and the relevant load combinations, not merely an average exit gradient. The two mechanisms are distinct but can interact.</p><p>Exit conditions are most dangerous where unprotected loose <strong>fine sand</strong> lies at the downstream seepage exit, because emerging water can move such grains readily. Permissible exit gradients and filters must reflect the gradation, packing and erodibility of the actual soil. Finer grains of the same mineral do not have a lower solid specific gravity; their vulnerability comes from small size and loose packing, and low permeability alone does not rule out erosion at the exit.</p>",
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
            "html": "<p><strong>Bligh’s creep theory</strong> assumes that seeping water travels along the contact between structure and soil, following the underside of the floor and both faces of every cutoff, and relates seepage resistance to the length of that path. It is an empirical idealization: real seepage spreads through a two- or three-dimensional soil domain instead of hugging the contact.</p><p>Bligh gives <strong>equal weight</strong> to horizontal and vertical contact, so 12 m of floor and 12 m of cutoff faces each contribute 12 m, a total of 24 m. <strong>Lane’s weighted-creep</strong> convention treats horizontal contact as less effective and counts it at one-third of its length: L<sub>w</sub> = ΣL<sub>v</sub> + ΣL<sub>h</sub>/3. For a 42 m horizontal floor with thin cutoffs 4 m and 7 m deep, the vertical contact over both faces is 2 × 4 + 2 × 7 = 22 m and the weighted horizontal contribution is 42/3 = 14 m, giving a Lane length of 36 m, whereas Bligh’s unweighted length would be 22 + 42 = 64 m.</p>",
            "moreHtml": "<p>The three classical seepage approaches differ in what they assume and what they deliver.</p><table><thead><tr><th scope='col'>Method</th><th scope='col'>Seepage idealization</th><th scope='col'>Weighting or output</th></tr></thead><tbody><tr><th scope='row'>Bligh</th><td>Flow along the structure-soil contact</td><td>Horizontal and vertical contact weighted equally</td></tr><tr><th scope='row'>Lane</th><td>Weighted contact path</td><td>Vertical contact at full length, horizontal contact at one-third</td></tr><tr><th scope='row'>Khosla</th><td>Potential flow through the soil, using standard forms with corrections</td><td>Uplift pressures at key points and the exit gradient</td></tr></tbody></table>",
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
            "html": "<p><strong>Khosla’s method of independent variables</strong> replaces creep lengths with potential-flow solutions. A complex floor is split into standard forms, such as a floor with an end pile or with an intermediate pile, whose head distributions are known analytically; corrections are then applied for pile interference, floor thickness and floor slope. The method gives uplift pressures at key points and the exit gradient rather than an equivalent path length.</p><p>For an ideal horizontal floor of length b with a single downstream end pile of depth d and retained head H, <strong>G<sub>E</sub> = H/(πd√λ)</strong>, where α = b/d and λ = [1 + √(1 + α<sup>2</sup>)]/2. H and d share a length unit, so G<sub>E</sub> is dimensionless, and λ is purely geometric, not a permeability factor. With H = 6 m, d = 4 m and λ = 1.5, G<sub>E</sub> = 6/(π × 4 × √1.5) = 0.389848, about 0.390. Had 1.5 been α instead, λ would be 1.401388 and G<sub>E</sub> = 0.403332.</p><p>As d tends to zero with b and H positive, the denominator vanishes and the ideal exit gradient grows without limit at the sharp downstream edge. This is a local mathematical singularity, not a uniformly infinite gradient throughout real soil, but it shows why a downstream cutoff of adequate depth is needed.</p>",
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
            "id": "cutoffs-uplift-and-floor-stability",
            "title": "Downstream cutoffs, uplift and sliding resistance",
            "html": "<p>A properly designed <strong>downstream sheet pile</strong> reshapes the seepage field: it spreads and lengthens the path by which seepage emerges, so the gradient at the toe falls. It neither lowers soil conductivity nor removes uplift, and substantial pressures can remain beneath parts of the floor. Its depth is governed chiefly by two hydraulic checks: the exit gradient must stay within a permissible value for the soil, and the pile must remain embedded below the design scour level so that it still acts after scour removes the surrounding bed. Structural strength, construction, durability and soil variability are further requirements.</p><p>Uplift directly reduces stability. Vertical equilibrium gives the foundation reaction N = W − U. If a weir’s weight exactly equals the uplift, the reaction is zero and nothing remains to resist flotation, so this balance cannot define a safe gravity weir, which resists uplift principally through self-weight with a margin in reserve. Frictional sliding resistance also uses the effective normal force: for W = 1000 kN, U = 300 kN and μ = 0.60 without cohesion, F = 0.60 × (1000 − 300) = 420 kN. Ignoring uplift would give 600 kN and overstate the resistance, and the driving forces must still be compared.</p>",
            "sources": [
              {
                "id": "CAP4-07-00123",
                "label": "p. 30; topic 7 point 121"
              },
              {
                "id": "CAP4-07-00060",
                "label": "p. 28; topic 7 point 60"
              },
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
        "cautions": [
          {
            "id": "check-weir-barrage-gates",
            "status": "review",
            "prompt": "The major differentiating point between weirs and barrages is the presence of gates.",
            "html": "<p>Barrages rely predominantly on gates over low sills, whereas weirs rely mainly on a raised crest, yet some weirs carry shutters or gates. Treat predominantly gated control of the pond as the distinction, not the mere presence of any gate.</p>",
            "sources": [
              {
                "id": "CAP4-07-00051",
                "label": "p. 28; topic 7 point 51"
              }
            ]
          },
          {
            "id": "check-sloping-weir-origin",
            "status": "review",
            "prompt": "Masonry or concrete sloping weir is of recent origin.",
            "html": "<p>Historical dating is time-sensitive and textbook-dependent. The sloping weir is better identified by its hydraulic form: overflow down a glacis into a protected hydraulic-jump basin.</p>",
            "sources": [
              {
                "id": "CAP4-07-00048",
                "label": "p. 28; topic 7 point 48"
              }
            ]
          },
          {
            "id": "check-parabolic-weir-efficiency",
            "status": "review",
            "prompt": "A parabolic weir is the most efficient weir.",
            "html": "<p>An ogee crest shaped to the design nappe gives efficient overflow at its design head, but no universal superiority is established, the whole profile is not necessarily one parabola, and performance changes away from the design head.</p>",
            "sources": [
              {
                "id": "CAP4-07-00049",
                "label": "p. 28; topic 7 point 49"
              }
            ]
          },
          {
            "id": "check-natural-navigation-intake",
            "status": "review",
            "prompt": "An intake is not optimal when placed in a natural channel and navigation channel.",
            "html": "<p>The statement lacks an identifiable comparison. The teachable criteria are a stable approach, adequate low-flow head and separation from navigation; the classification the capsule originally intended remains unverified.</p>",
            "sources": [
              {
                "id": "CAP4-07-00026",
                "label": "p. 27; topic 7 point 26"
              }
            ]
          },
          {
            "id": "check-trough-stage",
            "status": "review",
            "prompt": "The canal intake is preferred in trough stage.",
            "html": "<p>“Trough stage” is undefined in the available text, and a nearby “through stage” label is also unresolved. No equivalent term or corrected spelling is asserted; sites should be judged by low-flow head and approach stability.</p>",
            "sources": [
              {
                "id": "CAP4-07-00042",
                "label": "p. 28; topic 7 point 42"
              }
            ]
          },
          {
            "id": "check-fish-ladder-location",
            "status": "review",
            "prompt": "A fish ladder is provided on the side of the divide wall.",
            "html": "<p>Placement beside the divide wall is a conventional layout, not an exclusive location. Whether a fish pass works depends on entrance attraction, flow velocities and the species concerned.</p>",
            "sources": [
              {
                "id": "CAP4-07-00045",
                "label": "p. 28; topic 7 point 45"
              }
            ]
          },
          {
            "id": "check-head-regulator-gates",
            "status": "corrected",
            "prompt": "At bed level there is no provision of gates in the head regulator.",
            "html": "<p>The sound point concerns relative levels: the head regulator sill is raised above the undersluice crest to avoid near-bed sediment. Head regulators do have gates, which close onto that raised sill; no absolute gate prohibition applies.</p>",
            "sources": [
              {
                "id": "CAP4-07-00096",
                "label": "p. 29; topic 7 point 97"
              }
            ]
          },
          {
            "id": "check-undersluice-crest-level",
            "status": "review",
            "prompt": "The crest of the undersluice portion is kept at the river bed level.",
            "html": "<p>A crest near bed level and below the canal sill is the usual relative arrangement for flushing. In a mobile-bed river the exact elevation follows the surveyed bed and design layout rather than an immutable rule.</p>",
            "sources": [
              {
                "id": "CAP4-07-00105",
                "label": "p. 29; topic 7 point 107"
              }
            ]
          },
          {
            "id": "check-undersluice-rule-status",
            "status": "review",
            "prompt": "Undersluice design discharge is the maximum of double canal flow, 10 to 15% of maximum flood and winter flow.",
            "html": "<p>This is a preliminary textbook rule. The 12% used in the example is an explicit selection within the quoted range, neither that range nor the twice-canal-flow figure is claimed as a universal standard, and each condition needs its own head-dependent rating.</p>",
            "sources": [
              {
                "id": "CAP4-07-00110",
                "label": "p. 29; topic 7 point 112"
              }
            ]
          },
          {
            "id": "check-fine-sand-exit",
            "status": "review",
            "prompt": "According to Khosla, fine sand has the lowest safe exit gradient.",
            "html": "<p>Loose, unprotected fine sand is highly vulnerable at a seepage exit, and that is the point retained. No universal soil ranking or fixed table of safe exit gradients is asserted; permissible values must reflect gradation, packing and filter protection.</p>",
            "sources": [
              {
                "id": "CAP4-07-00044",
                "label": "p. 28; topic 7 point 44"
              }
            ]
          },
          {
            "id": "check-lane-divisor",
            "status": "corrected",
            "prompt": "Lane's creep length formula is 2d1 + L + 2d2.",
            "html": "<p>The extracted point omits the divisor under L. The full page text, consistent with Lane’s weighting, gives 2d<sub>1</sub> + L/3 + 2d<sub>2</sub>; without the one-third factor the expression is simply Bligh’s unweighted length.</p>",
            "sources": [
              {
                "id": "CAP4-07-00058",
                "label": "p. 28; topic 7 point 58"
              }
            ]
          },
          {
            "id": "check-khosla-formula-radical",
            "status": "corrected",
            "prompt": "Khosla's exit gradient formula, printed as H over d with a damaged radical.",
            "html": "<p>The PDF text loses the radical. The standard isolated end-pile result is G<sub>E</sub> = H/(πd√λ), with λ = [1 + √(1 + α<sup>2</sup>)]/2 and α = b/d, restored from corrected nearby notes; the printed page was not visually verified.</p>",
            "sources": [
              {
                "id": "CAP4-07-00059",
                "label": "p. 28; topic 7 point 59"
              }
            ]
          },
          {
            "id": "check-khosla-numerical-example",
            "status": "corrected",
            "prompt": "Head 6 m, characteristic depth 4 m and permeability factor 1.5 give a Khosla exit gradient of 0.38.",
            "html": "<p>The source calls 1.5 a soil-permeability factor, which has no place in the formula, so its result is not uniquely derivable. Treating 1.5 as the geometric λ with d = 4 m gives 0.389848, which rounds to 0.390, not 0.38.</p>",
            "sources": [
              {
                "id": "CAP4-07-00117",
                "label": "p. 29; topic 7 point 118"
              }
            ]
          },
          {
            "id": "check-zero-cutoff-infinity",
            "status": "review",
            "prompt": "According to Khosla, the exit gradient without a downstream cutoff is infinity.",
            "html": "<p>Infinity arises only in the ideal sharp-edged model as the cutoff depth tends to zero. It is a localized singularity at the exit edge, not a literal field-wide measurement of an infinite gradient.</p>",
            "sources": [
              {
                "id": "CAP4-07-00047",
                "label": "p. 28; topic 7 point 47"
              }
            ]
          },
          {
            "id": "check-downstream-pile-purpose",
            "status": "review",
            "prompt": "Purpose of the downstream sheet pile in a barrage (incomplete source question).",
            "html": "<p>The capsule entry is only an unfinished question with no stated resolution. The hydraulic purpose taught here, lengthening the emergence path to reduce the exit gradient, is supplied from corrected nearby cutoff notes.</p>",
            "sources": [
              {
                "id": "CAP4-07-00123",
                "label": "p. 30; topic 7 point 121"
              }
            ]
          },
          {
            "id": "check-cutoff-depth-considerations",
            "status": "review",
            "prompt": "Two considerations govern the depth of the downstream vertical cutoff.",
            "html": "<p>The source supplies only the count. Permissible exit gradient and embedment below design scour are the two central hydraulic checks, taken from nearby corrected notes; they are not an exhaustive list of design requirements.</p>",
            "sources": [
              {
                "id": "CAP4-07-00060",
                "label": "p. 28; topic 7 point 60"
              }
            ]
          },
          {
            "id": "check-gravity-weir-balance",
            "status": "corrected",
            "prompt": "A gravity weir is one whose weight is completely balanced by the upward seepage force.",
            "html": "<p>Complete balance gives N = W − U = 0, neutral flotation with no reserve, which is unsafe. A gravity weir resists uplift principally through its self-weight and must keep a margin beyond this balance.</p>",
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
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation used in this topic</th></tr></thead><tbody><tr><th scope='row'>Local scour depth below HFL</th><td>D<sub>max</sub> = k × D<sub>mean</sub>, both measured below HFL; k = 2.0 for bank protection at a right-angle bend in IRC 89:1997, Section 7.4.5</td></tr><tr><th scope='row'>Scoured bed level</th><td>RL<sub>scour</sub> = HFL − scour depth</td></tr><tr><th scope='row'>Additional lowering of the bed</th><td>existing bed RL − RL<sub>scour</sub></td></tr><tr><th scope='row'>Sediment moved by a flow class</th><td>mass = transport rate × duration</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "river-classification-and-meandering",
            "title": "Classifying rivers and reaches; meandering in alluvium",
            "html": "<p>Rivers can be classified in two ways that address different questions. Classification by <strong>origin</strong> describes the main source of water, for example snow-fed or rain-fed, which shapes the seasonal pattern of flow. Classification by <strong>reach characteristics</strong> describes the local channel: gradient, confinement and bed material, such as a steep, confined, boulder-bedded reach or a wide, gentle, sandy one. A single snow-fed river can pass through very different reaches, so its origin cannot define their hydraulic behaviour.</p><p>Sediment-carrying alluvial rivers can <strong>meander</strong>. In a bend, curvature and secondary circulation direct faster, erosive flow against the outer bank while sediment settles as a <strong>point bar</strong> on the inner bank, and bank resistance and sediment supply control how the bend evolves. Outer erosion with inner deposition does not mean uniform aggradation, and a growing point bar shows active transport rather than its end. Not every alluvial channel meanders, however: braided multi-channel and relatively straight forms also occur, so the planform must be read from the reach itself.</p>",
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
            "html": "<p>The <strong>dominant discharge</strong>, also called the <strong>channel-forming discharge</strong>, is the flow, or range of flows, that does most of the long-term work of shaping a channel and its surroundings. It is not automatically the largest recorded flood, the discharge exceeded half the time, or the arithmetic mean of daily flows. The related <strong>effective-discharge</strong> method identifies it by combining the sediment-transport rate of each flow class with how long that class occurs.</p><p>A simple comparison shows why frequency matters. A class moving bed material at 10 kg/s for 100 hours a year transports 10 × 100 × 3600 = 3.6 million kg, whereas a rarer class moving 50 kg/s for only 10 hours transports 50 × 10 × 3600 = 1.8 million kg. The moderate, more frequent flow does twice the annual work although its instantaneous rate is one-fifth as large. Real studies integrate over the whole flow record, and no universal return period defines the dominant flood.</p>",
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
            "html": "<p>River training works are traditionally grouped by the objective they serve. <strong>High-water training</strong>, or training for discharge, aims to pass design floods with tolerable inundation and bank damage, using levees, guide banks and similar works. <strong>Low-water training</strong>, or training for depth, maintains navigable depth in the dry season. <strong>Mean-water training</strong> concerns sediment behaviour, keeping bed-material movement compatible with a stable channel. Confining floods can transfer risk elsewhere rather than remove flood volume, so flood training must consider the whole reach.</p><p>A structure counts as a river-training work because of what it does to river flow or the floodplain, not because of its material. A guide bund steering flow into a bridge opening, a levee limiting inundation of protected land and a spur deflecting current away from a bank all act on the river. A canal bank, whose job is to hold water in an irrigation channel, is not a river-training structure by its primary function, although a real embankment may serve combined purposes.</p>",
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
            "title": "Scour depth measured from the high flood level",
            "html": "<p>Scour depths from Lacey-type estimates are measured <strong>below the high flood level (HFL)</strong>, not below the existing bed. The estimated scoured-bed level is therefore HFL minus the scour depth, and the extra lowering is the difference between the existing bed and that level. For a normal scour depth of 5 m below an HFL of RL 100 m, the scoured bed lies at RL 95 m; with the existing bed at RL 97 m, the additional lowering is 97 − 95 = 2 m. Subtracting the scour depth again from the old bed would double-count the water depth.</p><p>Local attack deepens scour at bends and structures. For bank protection at a <strong>right-angle bend</strong>, the reviewed text of IRC 89:1997, Section 7.4.5, assumes a maximum scour depth of twice the mean scour depth, again measured below HFL. With a mean scour depth of 3.0 m and HFL at RL 104.0 m, the local depth is 2.0 × 3.0 = 6.0 m and the scour-bed level is RL 98.0 m. The multiplier applies to depth from the water datum, and the normal flow depth is not the same thing as the mean scour depth.</p>",
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
            "html": "<p><strong>Guide banks</strong> are built where flood currents approaching a bridge or similar crossing obliquely might bypass the intended waterway. They direct the flow through the waterway along a chosen course, organize the approach and departure currents and protect the approach embankments. They steer flow locally; they do not detain floods, regulate canal levels or exclude bed load from an intake. Excessive constriction raises afflux and scour, so the waterway and river morphology must still be checked.</p><p>In a conventional layout the <strong>upstream arm is longer</strong> than the downstream arm, because it must intercept an oblique approach and draw the current progressively into line with the opening, whereas the downstream arm mainly manages expansion and local attack. Proportions depend on the site, so this is a usual inequality, not a fixed ratio.</p><p>The deepest scour commonly develops at the <strong>nose</strong>, where approaching flow turns and accelerates and local turbulence concentrates erosive attack. Nose scour can exceed the reach-average value, so the nose receives especially robust protection, sized from local hydraulic and bed information.</p>",
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
            "title": "Launching aprons: flexible materials, filters and placement",
            "html": "<p>A <strong>launching apron</strong> protects the toe of a bank or guide bank against scour that has not yet happened. It is laid initially on the bed at the toe and extending beyond it. As the adjacent bed scours, the undermined apron material slides and settles onto the developing scour face, forming a protective layer down to the scoured level. Protection placed only on the slope above the bed, buried below the deepest predicted scour or laid along the landside toe cannot launch in this way.</p><p>The apron must therefore be <strong>flexible</strong>. Loose, suitably graded stone can rearrange as the bed drops, and designed gabion mattresses with adequate connections can deform while maintaining cover. A rigid bonded slab of concrete, masonry or grouted rock does not launch in the same way. A <strong>geotextile</strong> placed beneath stone or gabions acts as a filter, holding soil particles back while passing water; it does not supply the armour weight needed to resist drag, and it must tolerate the deformation of launching. Armour, filter and connections are designed together as a compatible system.</p>",
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
            "title": "Spurs: orientation, form and permeability",
            "html": "<p>A <strong>spur</strong> or groyne extends from the bank out into the channel to influence the current, whereas a levee runs longitudinally to keep floods off protected land and bank pitching simply covers the slope. A spur may be set at right angles to the bank or inclined upstream or downstream; calling it transverse does not require an exact right angle at every stage.</p><p>In the conventional orientation mnemonic, if the vector from the bank root to the tip points <strong>upstream</strong> of the bank normal, the spur is a <strong>repelling spur</strong>, intended to push the main current away from the bank. One pointing downstream is an <strong>attracting spur</strong>. Actual behaviour also depends on permeability, submergence and the approach direction, so orientation alone guarantees nothing.</p><p><strong>Permeable spurs</strong> let part of the flow pass through them while adding resistance. By slowing local flow they reduce transport capacity, which can encourage deposition in a sheltered bank zone when the river carries abundant suspended sediment. They do not strain out grains like a sieve, and debris blockage or local scour can change their performance.</p>",
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
        "cautions": [
          {
            "id": "check-origin-versus-reach",
            "status": "review",
            "prompt": "A river reach can be classified on the basis of origin.",
            "html": "<p>Origin classifies the river’s water source, such as snow-fed; a reach is classified by its local gradient, confinement and bed material. One river can contain very different reaches, so the two classifications address different questions.</p>",
            "sources": [
              {
                "id": "CAP4-07-00097",
                "label": "p. 29; topic 7 point 98"
              }
            ]
          },
          {
            "id": "check-alluvial-meandering",
            "status": "corrected",
            "prompt": "Meandering is not possible in an alluvial channel carrying sediment.",
            "html": "<p>The reverse is true: outer-bank erosion and inner point-bar growth let meanders develop wherever the alluvial boundary is mobile. The correction does not claim that every alluvial channel meanders, since braided and straighter forms also occur.</p>",
            "sources": [
              {
                "id": "CAP4-07-00102",
                "label": "p. 29; topic 7 point 103"
              }
            ]
          },
          {
            "id": "check-bend-scour-multiplier",
            "status": "review",
            "prompt": "According to Lacey, scour depth in a right-angled bend is 2.00 D.",
            "html": "<p>The reviewed text of IRC 89:1997, Section 7.4.5, supports 2.00 times the mean scour depth for bank protection at a right-angle bend, with depth measured below HFL. This is edition- and scope-specific guidance, not current Nepal adoption or a universal river law.</p>",
            "sources": [
              {
                "id": "CAP4-07-00019",
                "label": "p. 27; topic 7 point 20"
              }
            ]
          },
          {
            "id": "check-guide-bank-arm-lengths",
            "status": "review",
            "prompt": "The upstream guide bank is longer than the downstream guide bank.",
            "html": "<p>This is the conventional arrangement, because the upstream arm must capture and align an oblique approach. Actual lengths depend on the site, so the inequality is not absolute and no fixed arm ratio applies.</p>",
            "sources": [
              {
                "id": "CAP4-07-00066",
                "label": "p. 28; topic 7 point 66; topic 7 point 67"
              }
            ]
          },
          {
            "id": "check-nose-scour",
            "status": "review",
            "prompt": "In a guide bund, the depth of scour is severe at the nose.",
            "html": "<p>Nose vulnerability is a common local mechanism caused by turning, accelerating flow and turbulence. It is not an invariant ranking for every flood geometry; its severity and the protection needed come from local hydraulic and bed information.</p>",
            "sources": [
              {
                "id": "CAP4-07-00116",
                "label": "p. 29; topic 7 point 117"
              }
            ]
          },
          {
            "id": "check-apron-material-roles",
            "status": "review",
            "prompt": "A launching apron is made of gabion, stone and geotextile fabric.",
            "html": "<p>These materials play different roles. Stone and gabions form the flexible armour, whereas a geotextile is a filter beneath them; they are not interchangeable, and the geotextile cannot provide the weight needed to resist the flow.</p>",
            "sources": [
              {
                "id": "CAP4-07-00064",
                "label": "p. 28; topic 7 point 63"
              }
            ]
          },
          {
            "id": "check-spur-orientation",
            "status": "corrected",
            "prompt": "Spurs are provided perpendicular to the river.",
            "html": "<p>A spur extends from the bank out into the channel either at right angles or inclined upstream or downstream. Perpendicular placement is one possibility, not a defining requirement.</p>",
            "sources": [
              {
                "id": "CAP4-07-00118",
                "label": "p. 30; topic 7 point 119"
              }
            ]
          },
          {
            "id": "check-repelling-spur-convention",
            "status": "review",
            "prompt": "A repelling spur is inclined upstream.",
            "html": "<p>This follows the textbook mnemonic when the root-to-tip direction points upstream of the bank normal. It is a convention rather than a universal code classification, and real effects depend on permeability, submergence and approach flow.</p>",
            "sources": [
              {
                "id": "CAP4-07-00103",
                "label": "p. 29; topic 7 point 104"
              }
            ]
          },
          {
            "id": "check-permeable-spur-suitability",
            "status": "review",
            "prompt": "Permeable spurs are best suited to rivers carrying heavy suspended load.",
            "html": "<p>Abundant suspended sediment is a suitability consideration, because permeable spurs encourage deposition by slowing flow. It does not make them always the best solution; hydraulics, sediment properties and debris must be assessed.</p>",
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
          "Watershed management measures listed in the syllabus are not covered by the capsule questions.",
          "Lacey regime-scour formulae and launching-apron sizing, such as stone quantity and launched slope, are not tested; only the depth-datum logic is.",
          "River stage classification and the hydraulic design of guide-bank curvature and length are not covered."
        ]
      },
      "ACiE0705": {
        "code": "ACiE0705",
        "questionCount": 19,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation used in this topic</th></tr></thead><tbody><tr><th scope='row'>Outlet flexibility</th><td>F = (dq/q)/(dQ/Q); F = 1 for a proportional outlet</td></tr><tr><th scope='row'>Outlet sensitivity</th><td>S = d(ln q)/d(ln Y); S = 0 for a rigid module</td></tr><tr><th scope='row'>Fall to be provided by drops</th><td>ground fall − reach length × design bed slope</td></tr><tr><th scope='row'>Superpassage air clearance</th><td>drain-trough underside RL − canal FSL</td></tr><tr><th scope='row'>Calibrated crest rating</th><td>Q = C L H<sup>3/2</sup>, with C = 1.5 in the worked example</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "regulators-and-escapes",
            "title": "Head regulators, cross regulators and canal escapes",
            "html": "<p>A <strong>regulator</strong> controls discharge by changing an effective opening or control level, usually with gates. A gated regulator lets a branch adjust its admission as parent levels change, which a fixed weir, an ungated orifice or an ungated flume cannot do. The resulting flow still depends on upstream and downstream head and on the device rating; a gate opening does not fix the discharge independently of the hydraulics.</p><p>A <strong>cross regulator</strong> spans the parent canal downstream of an offtake. Partly closing it during low supply raises the parent level just upstream and so creates the head the branch needs, while the branch’s own <strong>head regulator</strong> meters entry into it. Gate settings must respect the capacity and freeboard of the parent canal.</p><p>A <strong>canal escape</strong> disposes of surplus canal water safely to a natural drain or river with adequate capacity and protection, for instance when downstream demand stops suddenly while supply keeps arriving. Regulators control normal passage and excluders deal with sediment; neither provides that surplus-disposal route.</p>",
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
            "html": "<p>Outlet behaviour is described by ratios of fractional changes. <strong>Flexibility</strong> F = (dq/q)/(dQ/Q) compares the change in outlet discharge q with the change in parent-canal discharge Q. If a 4% rise in Q produces a 4% rise in q, F ≈ 4%/4% = 1 and the outlet is locally <strong>proportional</strong>; equal percentages, not equal absolute discharges, define proportionality. <strong>Sensitivity</strong> S = d(ln q)/d(ln Y) instead compares outlet discharge with the parent water depth Y. A <strong>rigid module</strong> delivers a constant q while Y varies within its working range, so S = 0; inadequate supply or excessive submergence can break that behaviour.</p><p>Outlets are also classed by which water levels control them. A <strong>non-modular</strong> outlet responds to both upstream and downstream levels. A <strong>semi-module</strong>, known in older texts as a flexible module, is unaffected by the downstream level while its discharge remains free but still depends on upstream head; a free pipe outlet with downstream water below its drowning limit behaves this way. The older word flexible does not mean F = 1, and drowning can change the class.</p>",
            "moreHtml": "<table><thead><tr><th scope='col'>Outlet class</th><th scope='col'>Upstream level</th><th scope='col'>Downstream level</th></tr></thead><tbody><tr><th scope='row'>Non-modular</th><td>Affects discharge</td><td>Affects discharge</td></tr><tr><th scope='row'>Semi-module</th><td>Affects discharge</td><td>No effect while flow stays free</td></tr><tr><th scope='row'>Rigid module</th><td>No effect within the working head range</td><td>No effect within the working head range</td></tr></tbody></table>",
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
            "html": "<p>A <strong>canal fall</strong>, or drop, is needed where the natural ground slopes more steeply than the bed slope the canal can safely carry. Steepening the whole canal instead would create excessive velocity and scour. The fall to be provided is the ground fall minus the fall absorbed by the design bed slope. Over a 2 km reach where the ground falls 12 m and the bed slope is 1 in 1000, the bed itself falls 2000/1000 = 2 m, leaving 12 − 2 = 10 m for drop structures if the canal is to keep its relation to the ground.</p><p>Where several locations give acceptable command and hydraulic performance, <strong>economy of earthwork</strong> helps to choose between them. A site that balances cut and fill and avoids long stretches of high embankment and costly borrow is favoured, since approach earthwork is part of the real cost. Earthwork economy is one criterion alongside command, safe hydraulics, foundations and structure cost; it never licenses ignoring scour or available head. Equal chainage spacing, the cheapest structure alone or the smallest possible drop is not a sound basis.</p>",
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
            "html": "<p>The <strong>Sarda fall</strong> family is a vertical-drop fall: water passes over a raised crest wall and falls vertically into a protected pool or cistern below. Other families differ in their downstream profile: an Inglis fall uses a straight glacis with a baffle platform and wall, a Montague fall a parabolic glacis, and stepped falls a cascade of small drops. Recognizing the family does not by itself fix the crest geometry or validate any quoted discharge limit.</p><p>Discharge over the crest comes from a calibrated free-overflow rating. With Q = 1.5LH<sup>3/2</sup> in SI units, an effective crest length of 8 m and an energy head of 1 m give Q = 1.5 × 8 × 1 = 12 cumecs. The rating is only one check; the cistern, the foundation and the operating range must also be designed.</p><p>Crest descriptions need care. A crest whose body is triangular in the streamwise section but whose overflow edge is straight and level across the canal is not a V-notch. A V-notch has a triangular transverse opening whose width grows with head, whereas the body profile of a level crest gives no such rating.</p>",
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
            "html": "<p>Cross-drainage works are named by <strong>which stream passes over</strong> and by <strong>how the lower stream flows</strong>. When the canal passes above the drain:</p><ul><li>An <strong>aqueduct</strong> carries canal water in an upper trough while the drain passes beneath with a free surface at its design flood. A low drain bed is not enough; the design flood surface must fit under the actual underside of the canal structure with clearance.</li><li>A <strong>siphon aqueduct</strong> is needed when the drain cannot pass freely and must flow through full pressure barrels beneath the canal at the design flood. The word siphon refers to that pressurized undercrossing; the canal remains on top, and enough head must be available for barrel and local losses.</li></ul><p>An aqueduct deals with a canal crossing a lower drain, a different function from the head regulator’s control of river water entering the canal. Several works may lie close together at a site, so each is identified by its function rather than by an absolute rule about where aqueducts can never be placed.</p>",
            "moreHtml": "<p>The whole family can be summarized by the stream on top and the condition of the lower flow.</p><table><thead><tr><th scope='col'>Structure</th><th scope='col'>Stream on top</th><th scope='col'>Lower stream</th></tr></thead><tbody><tr><th scope='row'>Aqueduct</th><td>Canal</td><td>Drain with a free surface</td></tr><tr><th scope='row'>Siphon aqueduct</th><td>Canal</td><td>Drain in full pressure barrels</td></tr><tr><th scope='row'>Superpassage</th><td>Drain</td><td>Canal with a free surface</td></tr><tr><th scope='row'>Canal siphon</th><td>Drain</td><td>Canal in full pressure barrels</td></tr><tr><th scope='row'>Level crossing</th><td>Neither</td><td>Flows meet at similar levels under regulation</td></tr><tr><th scope='row'>Canal inlet</th><td>Neither</td><td>Drain water admitted into the canal</td></tr></tbody></table>",
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
            "html": "<p>When the drain passes above the canal, the condition of the lower canal flow decides the name.</p><ul><li>A <strong>superpassage</strong> carries the drain in an upper trough while the canal passes underneath with a free surface and adequate air clearance.</li><li>A <strong>canal siphon</strong>, often called an inverted siphon, depresses the canal into closed barrels beneath the drain, where it runs full under pressure. Full pressure flow does not necessarily mean negative gauge pressure.</li></ul><p>Clearance in a superpassage is checked against the structure, not merely against water surfaces. The relevant air gap is the underside of the drain trough minus the canal full supply level. With FSL at RL 99.0 m, the trough underside at RL 99.8 m and a required clearance of 0.5 m, the gap is 99.8 − 99.0 = 0.8 m, so the requirement is met. Knowing only that the canal FSL lies below the drain flood level ignores the trough structure and cannot demonstrate free-flow clearance.</p>",
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
            "html": "<p>Not every crossing keeps the two flows apart. A <strong>canal inlet</strong> deliberately admits a small drain into the canal so that the flows mix. It suits a small hillside drain when the canal has spare capacity and the drainage water’s quality and sediment load are acceptable; surplus must be released downstream where necessary. Aqueducts, superpassages and siphon aqueducts, by contrast, are grade-separated and keep the flows separate.</p><p>A <strong>level crossing</strong> lets a canal and a drain meet at nearly equal bed levels, with regulating gates on the canal and drain exits to control the combined flow during the flood. It becomes a candidate where a large canal meets a flashy drain carrying a short-lived high flood at almost the same bed level. These conditions do not make it automatically preferable: combined flood routing, sediment behaviour and acceptable mixing must be checked before it is selected.</p>",
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
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation used in this topic</th></tr></thead><tbody><tr><th scope='row'>Applied depth</th><td>depth = volume/area; 1 ha = 10000 m<sup>2</sup></td></tr><tr><th scope='row'>Groundwater balance</th><td>change in storage = recharge − removal; the table rises while recharge exceeds removal</td></tr><tr><th scope='row'>Drain-spacing scaling</th><td>L<sup>2</sup> = KC, so L ∝ √K when C is held fixed</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "waterlogging-as-a-water-balance",
            "title": "Waterlogging as a groundwater balance: seepage and over-irrigation",
            "html": "<p>The water table climbs whenever inflow to the shallow aquifer outpaces outflow. <strong>Recharge</strong> includes percolating rain, seepage from canals and deep percolation from fields; <strong>removal</strong> includes natural groundwater outflow, drainage, evaporation and pumping. <strong>Canal seepage</strong> is a direct aquifer inflow: when an unlined canal leaks persistently and outflow and pumping cannot keep pace, storage and the table rise until the root zone becomes saturated or wetted by capillary rise. Lining or interceptor drains reduce that component, but the whole balance decides the outcome.</p><p><strong>Over-irrigation</strong> adds deep percolation beyond crop use. The remedy is to size each application to the crop’s actual deficit and to provide drainage for unavoidable excess. Applying an unchanged large dose twice as often raises total supply and can worsen recharge; frequency by itself neither prevents nor inevitably causes waterlogging, since small frequent applications matched to demand can be efficient. Spreading a fixed supply can also help. A volume of 60000 m<sup>3</sup> infiltrating over 100 ha applies 60000/(100 × 10000) = 0.06 m, or 60 mm, but over 200 ha only 30 mm. Against a 30 mm need with no spare storage, the first leaves 30 mm of excess and the second none, provided crop supply and drainage remain adequate.</p>",
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
            "html": "<p>Irregular topography causes waterlogging where <strong>closed depressions</strong> trap water that has no gravity outlet, so hollows stay ponded while higher fields drain. The immediate remedy is to link each hollow to a workable outlet with graded channels or land shaping; smoothing a hollow that keeps a closed contour, lining a canal or enlarging a receiving drain the hollow cannot reach does not help. The receiving level and subsurface conditions still need checking before assuming the root zone will aerate.</p><p><strong>Bedding</strong> is a surface method for cropped land: the field is shaped into slightly raised strips separated by dead furrows, which collect excess rain or irrigation water and lead it to an outlet. A <strong>shallow surface drain</strong> removes whatever excess arrives at the surface, whether from rain, run-on or irrigation; it may be busiest in the monsoon, but it works in a dry month too whenever surface inflow occurs and the outlet is available.</p><p>Unlined open drains commonly use a <strong>trapezoidal section</strong>, which combines a finite bed width with stable sloping earth banks and avoids unsupported vertical soil faces. It is practical rather than universally optimal; hydraulics, land, maintenance and geotechnical stability settle the final shape.</p>",
            "sources": [
              {
                "id": "CAP4-07-00083",
                "label": "p. 29; topic 7 point 84"
              },
              {
                "id": "CAP4-07-00088",
                "label": "p. 29; topic 7 point 89"
              },
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
            "html": "<p>The direct harm of waterlogging is <strong>oxygen deficiency</strong> in the root zone. Oxygen diffuses far more slowly through water-filled pores than through air-filled ones, so root and microbial respiration use it up faster than it is replaced; roots deteriorate and harmful reduced conditions can develop. Saturation alone does not prove salt stress or raised exchangeable sodium, and weeds that may accompany wet land are not the fundamental cause: clearing them leaves the aeration problem untouched.</p><p>Drainage helps by aerating soil that already exists. <strong>Tile drainage</strong> that lowers a persistently shallow water table increases the air-filled pore space and the depth of soil roots can exploit, so a larger usable, aerated root zone supports higher yields. It does not create new mineral soil or change the soil’s wilting content, and the yield response still depends on the crop, nutrients and water management.</p>",
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
            "html": "<p>Waterlogged land can also carry chemical problems, which must be diagnosed rather than assumed. A soil <strong>pH of 11</strong> indicates strong alkalinity that can severely constrain many crops. The pH alone, however, does not give the dissolved-salt concentration, measured as the electrical conductivity of a saturated extract, or the exchangeable sodium percentage, and waterlogging does not inevitably produce such a pH. Salinity and sodium status are therefore measured separately before any reclamation is specified.</p><p>For a <strong>saline but non-sodic</strong> soil, salts are exported by leaching under control and then draining away the leachate. Sufficient good-quality water dissolves the salts and carries them below the root zone, and a functioning drainage outlet removes the saline water. Flooding without an outlet can raise the water table and leave salts reconcentrated at the surface as the water evaporates, and wetting that never moves water downwards exports nothing. <strong>Sodic</strong> soils additionally need assessment of their sodium status and of a suitable amendment before leaching can be relied upon.</p>",
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
            "html": "<p>Where an aquifer is hydraulically connected to the waterlogged zone, <strong>pumping</strong> that exports groundwater outside the affected area, with recharge unchanged, reduces storage, so the water table falls. Pumping of this kind therefore helps relieve waterlogging rather than cause it. The benefit assumes the pumped water does not return as local recharge, and excessive pumping carries its own risks of depletion, subsidence or salinity problems.</p><p>Excess water already on or in farmland is removed by a <strong>field drainage network</strong> of surface or subsurface drains leading to a viable outfall. A canal escape is a different device: it disposes of surplus water still inside the supply canal and, unless specifically connected and designed for the purpose, does not drain saturated fields. A canal head regulator controls supply rather than removing it, and a farm pond without an outlet stores water but cannot export it.</p>",
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
            "html": "<p><strong>Tile drains</strong> collect subsurface water through joints or perforations and convey it to an outlet. They suit a field with a shallow water table where the soil offers a connected flow path to the drains, the drains can be laid at the depth needed and the outfall lies low enough for the required drawdown; the description wet soil alone is not sufficient. A drain laid below a nearly impermeable horizon, with no hydraulic connection through it, may leave perched water above that horizon untouched, however deep or large the pipe and however free its outfall. The remedy is correct placement or connection, not the conclusion that slowly permeable soils can never be drained.</p><p>Drain <strong>spacing</strong> increases with hydraulic conductivity, but not in direct proportion. In a steady model written as L<sup>2</sup> = KC, where C lumps the recharge, the allowed midpoint head and the equivalent geometry, holding C fixed gives L ∝ √K, so quadrupling K doubles the spacing. In a full Hooghoudt solution the equivalent depth itself depends on spacing and must be updated consistently.</p>",
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
