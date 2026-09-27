(function () {
    "use strict";
    window.CIVIL_PAST_NOTE_TOPICS = window.CIVIL_PAST_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_PAST_NOTE_TOPICS, {
     "ACiE0801": {
      "code": "ACiE0801",
      "questionCount": 4,
      "format": 2,
      "summary": "<p>This subchapter covers the planning of hydropower and its history in Nepal. The four past-paper questions test why hydropower suits Nepal, when the first station at Pharping was built, and the true and false statements about hydro plants: their efficiency over a range of loads, their cost and construction time, and their long life.</p>",
      "blocks": [
       {
        "id": "hydropower-in-nepal",
        "title": "Hydropower in Nepal",
        "html": "<p>Nepal has steep, snow-fed rivers and a very large hydropower potential, often quoted as about 83 000 MW theoretical, but no fossil fuel of its own. Hydropower is therefore the most reliable and suitable source of electricity for the country.</p><p>Its history began with the Pharping, or Chandrajyoti, station of 500 kW, commissioned in 1911 AD, 1968 BS, under Chandra Shumsher. Development is now governed by the Electricity Act 2049, its rules of 2050 and the Hydropower Development Policy 2058.</p>",
        "points": [
         {
          "html": "In Nepal a hydro plant is the most reliable and suitable kind of power plant.",
          "sources": [
           {
            "id": "PAST-15-048",
            "label": "Set 15 · Q48"
           }
          ]
         },
         {
          "html": "Pharping Hydropower, Nepal's first, was established in 1911.",
          "sources": [
           {
            "id": "PAST-16-015",
            "label": "Set 16 · Q15"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-15-048",
          "label": "Set 15 · Q48"
         },
         {
          "id": "PAST-16-015",
          "label": "Set 16 · Q15"
         }
        ]
       },
       {
        "id": "features-of-hydropower-plants",
        "title": "Features of hydropower plants",
        "html": "<p>Hydro turbine-generators keep a high efficiency, about 90%, over a wide range of loads and respond quickly to changes in demand. The plants need few staff and no fuel, so they are not labour oriented. Against that, they have high first costs and long gestation and construction periods.</p><p>They are cleaner than thermal plants and long-lived, 50 years or more; with routine maintenance they keep their efficiency and do not become less effective with time.</p>",
        "points": [
         {
          "html": "The correct statement is that hydro generators give high efficiency over a wide range of load.",
          "sources": [
           {
            "id": "PAST-10-071",
            "label": "Set 10 · Q71"
           }
          ]
         },
         {
          "html": "It is untrue that a hydroelectric plant becomes less effective with time; it keeps its efficiency for decades.",
          "sources": [
           {
            "id": "PAST-13-054",
            "label": "Set 13 · Q54"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-10-071",
          "label": "Set 10 · Q71"
         },
         {
          "id": "PAST-13-054",
          "label": "Set 13 · Q54"
         }
        ]
       }
      ],
      "cautions": [
       {
        "id": "hydro-plant-statements-key",
        "status": "corrected",
        "prompt": "The published key says every statement is untrue",
        "html": "<p>Hydro plants do have high first costs and long construction periods, and they are cleaner than thermal plants. They are long-lived, 50 years or more, and keep their efficiency with routine maintenance, so becoming less effective with time is the untrue statement.</p>",
        "sources": [
         {
          "id": "PAST-13-054",
          "label": "Set 13 · Q54"
         }
        ]
       }
      ],
      "gaps": [
       "Gross, technical and economic potential figures, development stages and hydropower acts and regulations from the syllabus are only touched on in these papers."
      ]
     },
     "ACiE0802": {
      "code": "ACiE0802",
      "questionCount": 18,
      "format": 2,
      "summary": "<p>This subchapter covers how much power and energy a hydropower site can give and how plants share the load. The past-paper questions test the power equation with net head and efficiency, revenue from energy, flow duration curves and firm power, converting potential to energy, load, capacity, diversity and coincidence factors, base and peak plants, and depreciation.</p>",
      "blocks": [
       {
        "id": "hydropower-equation",
        "title": "The power equation, net head and revenue",
        "html": "<p>The power in falling water is its weight flow times the head. Electrical output multiplies that by the overall efficiency and uses the net head, the gross head less the losses in the waterway. With \\(\\gamma\\) in kN/m<sup>3</sup>, Q in m<sup>3</sup>/s and H in m, the result is in kW.</p><p>Energy is power times hours; one unit is one kWh. Revenue is the energy sold times the tariff, allowing for the capacity factor at which the plant actually runs.</p>",
        "formulas": [
         {
          "label": "Hydraulic and electrical power",
          "tex": "P = \\gamma Q H, \\qquad P_e = \\eta \\gamma Q H_{\\text{net}}"
         }
        ],
        "example": {
         "title": "Worked examples: power from head and flow",
         "html": "<p>H = 423.5 m, loss 2.5 m, Q = 0.9 m<sup>3</sup>/s, \\(\\eta = 0.85\\):</p>\\[\\begin{aligned} P &amp;= 0.85 \\times 9.81 \\times 0.9 \\times 421 \\\\ &amp;\\approx 3159.45\\ \\text{kW} \\end{aligned}\\]<p>A 6 m canal drop with 50 cumec gives \\(9.81 \\times 50 \\times 6 \\approx 2943\\) kW of water power, about 2352 kW at 80%.</p>"
        },
        "points": [
         {
          "html": "The power needed to lift water, or given by falling water, is \\(P = \\gamma Q H\\).",
          "sources": [
           {
            "id": "PAST-04-011",
            "label": "Set 4 · Q11"
           }
          ]
         },
         {
          "html": "H = 423.5 m with a 2.5 m loss, Q = 0.9 m<sup>3</sup>/s and 85% efficiency give 3159.45 kW.",
          "sources": [
           {
            "id": "PAST-08-075",
            "label": "Set 8 · Q75"
           }
          ]
         },
         {
          "html": "A 6 m canal drop passing 50 cumec through the turbine gives about 2352 kW of electrical power.",
          "sources": [
           {
            "id": "PAST-13-072",
            "label": "Set 13 · Q72"
           }
          ]
         },
         {
          "html": "100 m<sup>3</sup>/s under 75 m at a capacity factor of 0.5 for 3 hours at Rs 18 per unit earns about Rs 1.98 million.",
          "sources": [
           {
            "id": "PAST-11-075",
            "label": "Set 11 · Q75"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-011",
          "label": "Set 4 · Q11"
         },
         {
          "id": "PAST-08-075",
          "label": "Set 8 · Q75"
         },
         {
          "id": "PAST-13-072",
          "label": "Set 13 · Q72"
         },
         {
          "id": "PAST-11-075",
          "label": "Set 11 · Q75"
         }
        ]
       },
       {
        "id": "flow-duration-and-firm-power",
        "title": "Flow duration curve, firm power and energy potential",
        "html": "<p>A flow duration curve plots discharge against the percentage of time it is equalled or exceeded. At a known head power is proportional to flow, so the curve becomes a power duration curve showing the power available at the site for any percentage of time.</p><p>The power available continuously, even in the driest period, is the <em>firm power</em>; power available only part of the time is secondary power. A potential in GW becomes annual energy when multiplied by the 8760 hours of a year and the load factor.</p>",
        "formulas": [
         {
          "label": "Annual energy from capacity",
          "tex": "E = P \\times 8760 \\times LF"
         }
        ],
        "example": {
         "title": "Worked example: potential to energy",
         "html": "<p>84 GW at a 60% load factor: \\(E = 84 \\times 8760 \\times 0.6\\), which is 441 504 GWh, about 441 TWh.</p>"
        },
        "points": [
         {
          "html": "At a given head the flow duration curve shows the total power available at the site.",
          "sources": [
           {
            "id": "PAST-05-012",
            "label": "Set 5 · Q12"
           }
          ]
         },
         {
          "html": "Power available continuously is firm power.",
          "sources": [
           {
            "id": "PAST-08-052",
            "label": "Set 8 · Q52"
           }
          ]
         },
         {
          "html": "A hydroelectric potential of 84 GW at a 60% load factor corresponds to 441 TWh a year.",
          "sources": [
           {
            "id": "PAST-05-068",
            "label": "Set 5 · Q68"
           },
           {
            "id": "PAST-17-077",
            "label": "Set 17 · Q77"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-012",
          "label": "Set 5 · Q12"
         },
         {
          "id": "PAST-08-052",
          "label": "Set 8 · Q52"
         },
         {
          "id": "PAST-05-068",
          "label": "Set 5 · Q68"
         },
         {
          "id": "PAST-17-077",
          "label": "Set 17 · Q77"
         }
        ]
       },
       {
        "id": "load-and-capacity-factors",
        "title": "Load, capacity, diversity and coincidence factors",
        "html": "<p>The <em>load factor</em> is the ratio of average to maximum demand over a period, always less than 1. The <em>capacity</em> or plant factor is the average load divided by the installed plant capacity. Average demand itself is the energy supplied divided by the hours in the period.</p><p>Consumers do not all peak at once. The <em>diversity factor</em> is the sum of the individual peaks over the system peak, and the <em>coincidence factor</em> is its reciprocal.</p>",
        "formulas": [
         {
          "label": "Load factor and capacity factor",
          "tex": "LF = \\dfrac{P_{\\text{avg}}}{P_{\\text{peak}}}, \\qquad CF = \\dfrac{P_{\\text{avg}}}{P_{\\text{installed}}}"
         },
         {
          "label": "Diversity and coincidence factors",
          "tex": "DF = \\dfrac{\\sum P_i}{P_{\\text{system}}}, \\qquad CoF = \\dfrac{1}{DF}"
         }
        ],
        "example": {
         "title": "Worked examples: average demand and plant factors",
         "html": "<p>1000 MWh over two months, 1440 h: average demand \\(= 1000/1440 \\approx 0.694\\) MW.</p><p>200 MW installed, 150 MW peak, 110 MW average: LF = 110/150 = 0.73 and CF = 110/200 = 0.55.</p>"
        },
        "points": [
         {
          "html": "A load factor is the ratio of average to maximum demand.",
          "sources": [
           {
            "id": "PAST-04-043",
            "label": "Set 4 · Q43"
           }
          ]
         },
         {
          "html": "1000 MWh supplied over two months means an average demand of 0.694 MW.",
          "sources": [
           {
            "id": "PAST-07-074",
            "label": "Set 7 · Q74"
           }
          ]
         },
         {
          "html": "The coincidence factor is the reciprocal of the diversity factor.",
          "sources": [
           {
            "id": "PAST-12-034",
            "label": "Set 12 · Q34"
           }
          ]
         },
         {
          "html": "A 200 MW station with a 150 MW peak and 110 MW average has load and capacity factors of 0.73 and 0.55.",
          "sources": [
           {
            "id": "PAST-12-076",
            "label": "Set 12 · Q76"
           }
          ]
         },
         {
          "html": "The plant or capacity factor is the average load divided by the plant capacity.",
          "sources": [
           {
            "id": "PAST-17-036",
            "label": "Set 17 · Q36"
           }
          ]
         },
         {
          "html": "An average load of 36,000 kW on two 20,000 kW generators is a capacity factor of 90%.",
          "sources": [
           {
            "id": "PAST-17-064",
            "label": "Set 17 · Q64"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-043",
          "label": "Set 4 · Q43"
         },
         {
          "id": "PAST-07-074",
          "label": "Set 7 · Q74"
         },
         {
          "id": "PAST-12-034",
          "label": "Set 12 · Q34"
         },
         {
          "id": "PAST-12-076",
          "label": "Set 12 · Q76"
         },
         {
          "id": "PAST-17-036",
          "label": "Set 17 · Q36"
         },
         {
          "id": "PAST-17-064",
          "label": "Set 17 · Q64"
         }
        ]
       },
       {
        "id": "base-and-peak-plants",
        "title": "Base-load and peak-load plants, and plant economics",
        "html": "<p>Cheap, steady plants carry the base load; flexible plants that start quickly but cost more to run are used for peak load only. A hydropower plant uses no fuel and needs few operators, so for the same output it has the lowest operating charges. Storage hydropower can start quickly and hold water, so it serves the peak; diesel sets are too costly to run as base load.</p><p>Dams, tunnels and powerhouses last a long time, so the annual depreciation of a hydropower plant is only about 0.5 to 1.5%.</p>",
        "points": [
         {
          "html": "For the same output, a hydropower plant has the minimum operating charges.",
          "sources": [
           {
            "id": "PAST-04-010",
            "label": "Set 4 · Q10"
           }
          ]
         },
         {
          "html": "A flexible plant with high operating cost is used for peak load only.",
          "sources": [
           {
            "id": "PAST-04-074",
            "label": "Set 4 · Q74"
           }
          ]
         },
         {
          "html": "Only statement ii is correct: storage hydropower serves the peak, and diesel is not base load.",
          "sources": [
           {
            "id": "PAST-15-076",
            "label": "Set 15 · Q76"
           }
          ]
         },
         {
          "html": "The annual depreciation of a hydropower plant is about 0.5–1.5%.",
          "sources": [
           {
            "id": "PAST-11-029",
            "label": "Set 11 · Q29"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-010",
          "label": "Set 4 · Q10"
         },
         {
          "id": "PAST-04-074",
          "label": "Set 4 · Q74"
         },
         {
          "id": "PAST-15-076",
          "label": "Set 15 · Q76"
         },
         {
          "id": "PAST-11-029",
          "label": "Set 11 · Q29"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Hydraulic power",
        "tex": "P = \\gamma Q H"
       },
       {
        "label": "Electrical power",
        "tex": "P_e = \\eta \\gamma Q H_{\\text{net}}"
       },
       {
        "label": "Annual energy",
        "tex": "E = P \\times 8760 \\times LF"
       },
       {
        "label": "Load factor",
        "tex": "LF = \\dfrac{P_{\\text{avg}}}{P_{\\text{peak}}}"
       },
       {
        "label": "Capacity factor",
        "tex": "CF = \\dfrac{P_{\\text{avg}}}{P_{\\text{installed}}}"
       },
       {
        "label": "Diversity factor",
        "tex": "DF = \\dfrac{\\sum P_i}{P_{\\text{system}}}"
       }
      ],
      "cautions": [
       {
        "id": "hydropower-revenue-key",
        "status": "corrected",
        "prompt": "The published key letter differs from its own working",
        "html": "<p>The plant develops about 73.6 MW; at a capacity factor of 0.5 that is 36.8 MW, or about 110 250 kWh in 3 hours, worth about Rs 1.98 million at Rs 18 per unit. The key letter points to another option, though its own working reaches this value.</p>",
        "sources": [
         {
          "id": "PAST-11-075",
          "label": "Set 11 · Q75"
         }
        ]
       }
      ],
      "gaps": [
       "Installed-capacity selection, the components of hydropower plants and reservoir regulation from the syllabus are only touched on in these papers."
      ]
     },
     "ACiE0803": {
      "code": "ACiE0803",
      "questionCount": 18,
      "format": 2,
      "summary": "<p>This subchapter covers the dams and headworks of storage hydropower plants. The past-paper questions test how dams are classified, foundations for gravity dams, spillways and morning-glory inlets, dead storage and reservoir life, uplift, the elementary profile, the middle-third rule, stresses and anchorage against sliding and overturning, earth-dam freeboard, sloughing and top width, and outlet discharge.</p>",
      "blocks": [
       {
        "id": "dam-types-and-spillways",
        "title": "Types of dam, foundations and spillways",
        "html": "<p>Dams are classified in several ways. By hydraulic design they are overflow or non-overflow; by function, storage, diversion or detention; by structure, gravity, arch or buttress. A gravity dam is massive and transmits high pressures to its base, so it needs a strong, sound rock foundation; earth dams suit weaker ground.</p><p>A <em>spillway</em> releases surplus flood water from the reservoir to the river downstream in a controlled way, protecting the dam from overtopping. At large dams with no room for an open spillway, a shaft spillway is used; its special flared, funnel-shaped inlet is called a <em>morning glory</em>.</p>",
        "points": [
         {
          "html": "On the basis of hydraulic design, dams are overflow and non-overflow dams.",
          "sources": [
           {
            "id": "PAST-05-031",
            "label": "Set 5 · Q31"
           }
          ]
         },
         {
          "html": "A gravity dam is most suitable on a strong foundation.",
          "sources": [
           {
            "id": "PAST-07-026",
            "label": "Set 7 · Q26"
           }
          ]
         },
         {
          "html": "A spillway gives controlled release of flood flows from a dam to the area downstream.",
          "sources": [
           {
            "id": "PAST-11-045",
            "label": "Set 11 · Q45"
           }
          ]
         },
         {
          "html": "A morning glory is the special flared inlet of the shaft spillway of a large dam project.",
          "sources": [
           {
            "id": "PAST-08-076",
            "label": "Set 8 · Q76"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-031",
          "label": "Set 5 · Q31"
         },
         {
          "id": "PAST-07-026",
          "label": "Set 7 · Q26"
         },
         {
          "id": "PAST-11-045",
          "label": "Set 11 · Q45"
         },
         {
          "id": "PAST-08-076",
          "label": "Set 8 · Q76"
         }
        ]
       },
       {
        "id": "reservoir-storage-and-silting",
        "title": "Reservoir storage zones and silting",
        "html": "<p>A reservoir is divided by levels. Dead storage lies between the bed level and the minimum pool level, the lowest outlet; it cannot be drawn and is set aside for sediment. Live or useful storage lies between the minimum pool and the full reservoir level, and flood surcharge above that.</p><p>Silt first fills the dead storage. Once that is full, sediment starts eating into the live storage and the useful life of the reservoir begins to shrink.</p>",
        "example": {
         "title": "Worked example: when live storage starts to silt",
         "html": "<p>20% of 30 M.cum is 6 M.cum of dead storage; at 0.1 M.cum of silt a year it fills in \\(6/0.1 = 60\\) years.</p>"
        },
        "points": [
         {
          "html": "Dead storage is the level between the bed level and the minimum pool level.",
          "sources": [
           {
            "id": "PAST-09-049",
            "label": "Set 9 · Q49"
           }
          ]
         },
         {
          "html": "With 6 M.cum of dead storage silting at 0.1 M.cum a year, useful life starts reducing after 60 years.",
          "sources": [
           {
            "id": "PAST-10-069",
            "label": "Set 10 · Q69"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-09-049",
          "label": "Set 9 · Q49"
         },
         {
          "id": "PAST-10-069",
          "label": "Set 10 · Q69"
         }
        ]
       },
       {
        "id": "gravity-dam-stability",
        "title": "Stability of gravity dams",
        "html": "<p>A gravity dam resists water thrust by its weight. Uplift under the base of a concrete or masonry dam reduces that effective weight, so it matters for sliding and overturning; drains and grout curtains control it. For no tension the resultant must lie within the middle third of the base. With the reservoir empty only the weight acts, and the maximum compressive stress is at the heel.</p><p>For an elementary triangular profile without uplift, no tension gives the relation below between base width, height and specific gravity. Sliding is resisted by friction and shear: stepping the foundation raises the shear strength, and anchoring the base into rock helps against both sliding and overturning.</p>",
        "formulas": [
         {
          "label": "Elementary profile, no uplift",
          "tex": "B = \\dfrac{H}{\\sqrt{S_c}}"
         },
         {
          "label": "Base pressures and the no-tension limit",
          "tex": "p = \\dfrac{\\sum V}{B}\\left(1 \\pm \\dfrac{6e}{B}\\right), \\qquad e \\le \\dfrac{B}{6}"
         }
        ],
        "example": {
         "title": "Worked example: height of an elementary profile",
         "html": "<p>B = 35 m and \\(S_c = 2.45\\): \\(H = 35\\sqrt{2.45} \\approx 54.8\\) m.</p>"
        },
        "points": [
         {
          "html": "Uplift pressure is important for the stability of a concrete dam.",
          "sources": [
           {
            "id": "PAST-12-031",
            "label": "Set 12 · Q31"
           }
          ]
         },
         {
          "html": "A 35 m base of material with specific gravity 2.45 allows an elementary-profile height of about 54.8 m.",
          "sources": [
           {
            "id": "PAST-13-060",
            "label": "Set 13 · Q60"
           }
          ]
         },
         {
          "html": "For no tension in a dam, the eccentricity must satisfy \\(e \\lt B/6\\).",
          "sources": [
           {
            "id": "PAST-14-001",
            "label": "Set 14 · Q1"
           }
          ]
         },
         {
          "html": "With the reservoir empty, the maximum compression acts at the heel.",
          "sources": [
           {
            "id": "PAST-14-004",
            "label": "Set 14 · Q4"
           }
          ]
         },
         {
          "html": "To avoid sliding failure, provide anchorage at the bottom of the dam into the rock.",
          "sources": [
           {
            "id": "PAST-10-048",
            "label": "Set 10 · Q48"
           }
          ]
         },
         {
          "html": "The base of a gravity dam is stepped to increase the shear strength against sliding.",
          "sources": [
           {
            "id": "PAST-10-051",
            "label": "Set 10 · Q51"
           }
          ]
         },
         {
          "html": "A low factor of safety against overturning is raised by anchorage at bottom, into the foundation.",
          "sources": [
           {
            "id": "PAST-16-056",
            "label": "Set 16 · Q56"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-12-031",
          "label": "Set 12 · Q31"
         },
         {
          "id": "PAST-13-060",
          "label": "Set 13 · Q60"
         },
         {
          "id": "PAST-14-001",
          "label": "Set 14 · Q1"
         },
         {
          "id": "PAST-14-004",
          "label": "Set 14 · Q4"
         },
         {
          "id": "PAST-10-048",
          "label": "Set 10 · Q48"
         },
         {
          "id": "PAST-10-051",
          "label": "Set 10 · Q51"
         },
         {
          "id": "PAST-16-056",
          "label": "Set 16 · Q56"
         }
        ]
       },
       {
        "id": "earth-dams",
        "title": "Earth dams: freeboard, sloughing and top width",
        "html": "<p>An earth dam must never be overtopped. Its <em>freeboard</em>, the height of the top above the maximum water level, keeps waves and floods off the crest, preserving stability, and in cold regions keeps the frost-cracked top zone above water. For very low earth dams the top width is commonly taken as 0.2H + 3 m.</p><p>Where seepage emerges on the wet downstream face, small slips progressively remove soil from it; this is <em>sloughing</em>, which steepens the slope and can lead to failure. Filters and drains keep the seepage line inside the dam.</p>",
        "formulas": [
         {
          "label": "Top width of a very low earth dam",
          "tex": "b = 0.2H + 3"
         }
        ],
        "points": [
         {
          "html": "Freeboard gives stability against overturning and safety against frost crack.",
          "sources": [
           {
            "id": "PAST-06-045",
            "label": "Set 6 · Q45"
           }
          ]
         },
         {
          "html": "Sloughing is the progressive removal of soil from the D/S face of an earth dam.",
          "sources": [
           {
            "id": "PAST-07-004",
            "label": "Set 7 · Q4"
           }
          ]
         },
         {
          "html": "The recommended top width of a very low earth dam is 0.2H + 3 metres.",
          "sources": [
           {
            "id": "PAST-16-035",
            "label": "Set 16 · Q35"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-045",
          "label": "Set 6 · Q45"
         },
         {
          "id": "PAST-07-004",
          "label": "Set 7 · Q4"
         },
         {
          "id": "PAST-16-035",
          "label": "Set 16 · Q35"
         }
        ]
       },
       {
        "id": "outlets-and-gates",
        "title": "Outlets through dams",
        "html": "<p>Outlets and sluiceways release water from a reservoir through or under the dam. A tunnel or sluice running full discharges like an orifice. The head is the difference between the reservoir level and the tailwater, or the outlet centre if it discharges freely above the tailwater. A bell-mouth entry gives a coefficient of discharge of about 0.8.</p>",
        "formulas": [
         {
          "label": "Outlet discharge",
          "tex": "Q = C_d A \\sqrt{2gH}"
         }
        ],
        "example": {
         "title": "Worked examples: outlet discharges",
         "html": "<p>A 4 m bell-mouthed tunnel between RL 226 m and 210 m: H = 16 m, A = 12.57 m<sup>2</sup>, so \\(Q = 0.8 \\times 12.57 \\times 17.72 \\approx 178\\) m<sup>3</sup>/s.</p><p>A 2 m sluice at RL 300 m with the reservoir at 330 m discharges freely under 30 m: about 50 cumecs.</p>"
        },
        "points": [
         {
          "html": "A 4 m bell-mouthed tunnel through an earth dam, with water at RL 226 m and 210 m, discharges about 178.12 m<sup>3</sup>/s.",
          "sources": [
           {
            "id": "PAST-15-075",
            "label": "Set 15 · Q75"
           }
          ]
         },
         {
          "html": "A 2 m sluiceway at RL 300 m under a full reservoir at 330 m releases about 50 cumecs.",
          "sources": [
           {
            "id": "PAST-16-060",
            "label": "Set 16 · Q60"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-15-075",
          "label": "Set 15 · Q75"
         },
         {
          "id": "PAST-16-060",
          "label": "Set 16 · Q60"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Elementary profile",
        "tex": "B = \\dfrac{H}{\\sqrt{S_c}}"
       },
       {
        "label": "No tension",
        "tex": "e \\le \\dfrac{B}{6}"
       },
       {
        "label": "Base pressure",
        "tex": "p = \\dfrac{\\sum V}{B}\\left(1 \\pm \\dfrac{6e}{B}\\right)"
       },
       {
        "label": "Earth dam top width",
        "tex": "b = 0.2H + 3"
       },
       {
        "label": "Outlet discharge",
        "tex": "Q = C_d A \\sqrt{2gH}"
       }
      ],
      "cautions": [],
      "gaps": [
       "Dam selection, seepage control and foundation treatment, energy dissipaters and gate design from the syllabus are only touched on in these papers."
      ]
     },
     "ACiE0804": {
      "code": "ACiE0804",
      "questionCount": 4,
      "format": 2,
      "summary": "<p>This subchapter covers the headworks of run-of-river plants. The four past-paper questions test what pondage means, the minimum submergence of a penstock intake in a forebay, the Bieri settling-basin flushing system, and the statements about settling basins and their expansion slopes.</p>",
      "blocks": [
       {
        "id": "pondage-and-forebay",
        "title": "Pondage and forebay submergence",
        "html": "<p>A run-of-river plant has little storage. <em>Pondage</em> is the small storage behind its weir or in a forebay, used to store water for use in the peak period of the day; long-period storage in a reservoir is a different thing.</p><p>At the forebay the penstock entrance must be submerged deep enough to prevent air-entraining vortices. Gordon's formula gives the minimum submergence from the velocity in the penstock and its diameter, with c = 0.5434 for a symmetric approach and 0.7245 for an asymmetric one.</p>",
        "formulas": [
         {
          "label": "Gordon's minimum submergence",
          "tex": "S = c\\, V \\sqrt{D}"
         }
        ],
        "example": {
         "title": "Worked example: forebay submergence",
         "html": "<p>Q = 3.6 m<sup>3</sup>/s in a 1.55 m penstock: \\(V = 1.91\\) m/s, so \\(S = 0.5434 \\times 1.91 \\times \\sqrt{1.55}\\), about 1.3 m.</p>"
        },
        "points": [
         {
          "html": "Pondage means storing water for use in the peak period of the day.",
          "sources": [
           {
            "id": "PAST-06-043",
            "label": "Set 6 · Q43"
           }
          ]
         },
         {
          "html": "A forebay feeding 3.6 m<sup>3</sup>/s into a 1.55 m penstock needs a minimum submergence of about 1.3 m.",
          "sources": [
           {
            "id": "PAST-08-066",
            "label": "Set 8 · Q66"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-043",
          "label": "Set 6 · Q43"
         },
         {
          "id": "PAST-08-066",
          "label": "Set 8 · Q66"
         }
        ]
       },
       {
        "id": "settling-basins",
        "title": "Settling basins and flushing",
        "html": "<p>Settling basins, or desanders, remove silt that would wear the turbines. They widen and deepen the flow gradually so that it slows to a quiet, near-laminar state and the particles settle before the outlet.</p><p>The settled sediment must be flushed. The Bieri system, used in Nepal at Middle Marsyangdi, flushes intermittently, not continuously: sensors detect the deposit and a travelling flushing unit removes it.</p>",
        "points": [
         {
          "html": "The false statement about the Bieri settling basin is that it is continuous type; it flushes intermittently.",
          "sources": [
           {
            "id": "PAST-06-050",
            "label": "Set 6 · Q50"
           }
          ]
         },
         {
          "html": "Following its source, the key takes a 1H:5V slope for the vertical direction as the incorrect statement.",
          "sources": [
           {
            "id": "PAST-06-070",
            "label": "Set 6 · Q70"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-050",
          "label": "Set 6 · Q50"
         },
         {
          "id": "PAST-06-070",
          "label": "Set 6 · Q70"
         }
        ]
       }
      ],
      "cautions": [
       {
        "id": "pondage-key",
        "status": "corrected",
        "prompt": "The published key calls every option pondage",
        "html": "<p>Pondage is the small storage behind a run-of-river weir or in a forebay, used to meet the daily peak. Holding water for long periods is storage in a reservoir, so not every option describes pondage.</p>",
        "sources": [
         {
          "id": "PAST-06-043",
          "label": "Set 6 · Q43"
         }
        ]
       },
       {
        "id": "settling-basin-slopes",
        "status": "review",
        "prompt": "The key's slope figures follow its source",
        "html": "<p>Settling basins slow the flow with gradual expansions so silt can settle. The source quotes 1H:2V at the inlet and 1H:1V at the outlet, so it treats 1H:5V as the incorrect statement; design guides vary.</p>",
        "sources": [
         {
          "id": "PAST-06-070",
          "label": "Set 6 · Q70"
         }
        ]
       }
      ],
      "gaps": [
       "Bed and suspended sediment, settling-basin design and flushing frequency from the syllabus are only touched on in these papers."
      ]
     },
     "ACiE0805": {
      "code": "ACiE0805",
      "questionCount": 26,
      "format": 2,
      "summary": "<p>This subchapter covers the tunnels, pipes and tanks that carry water to and from the turbines. The past-paper questions test the purpose of surge tanks, what the penstock, forebay and tailrace connect, penstock velocity, diameter and thickness, tunnelling methods for hard and soft ground, heading and benching, linings, the drill-and-blast cycle, scaling and mucking, and tunnel air limits.</p>",
      "blocks": [
       {
        "id": "surge-tanks",
        "title": "Surge tanks and water hammer",
        "html": "<p>When turbine gates close suddenly, the moving water column in the penstock and tunnel is stopped and the pressure rises sharply: water hammer. A <em>surge tank</em> provides a free water surface close to the turbines. On load rejection it takes in water and absorbs the pressure rise; on sudden demand it supplies water until the flow in the tunnel speeds up.</p><p>It therefore relieves water-hammer pressures, reduces the pressure swings in the conduit and protects the penstock, turbine and runner from damage. It does not store water for supply, keep the pressure constant or create surges.</p>",
        "points": [
         {
          "html": "A surge tank is used to protect the turbine and runner from damage.",
          "sources": [
           {
            "id": "PAST-04-045",
            "label": "Set 4 · Q45"
           }
          ]
         },
         {
          "html": "The function of a surge tank is to relieve water hammer pressures in the penstock pipe.",
          "sources": [
           {
            "id": "PAST-05-030",
            "label": "Set 5 · Q30"
           },
           {
            "id": "PAST-18-005",
            "label": "Set 18 · Q5"
           }
          ]
         },
         {
          "html": "The surge tank is the element that protects the penstock from water hammer.",
          "sources": [
           {
            "id": "PAST-06-035",
            "label": "Set 6 · Q35"
           }
          ]
         },
         {
          "html": "A surge tank serves to reduce the effects of pressure changes in the conduit.",
          "sources": [
           {
            "id": "PAST-08-022",
            "label": "Set 8 · Q22"
           }
          ]
         },
         {
          "html": "A surge tank relieves water hammer; it neither causes it nor keeps the pressure constant.",
          "sources": [
           {
            "id": "PAST-10-047",
            "label": "Set 10 · Q47"
           },
           {
            "id": "PAST-15-049",
            "label": "Set 15 · Q49"
           }
          ]
         },
         {
          "html": "A surge tank is used to reduce the pressure swings in the conduit.",
          "sources": [
           {
            "id": "PAST-16-065",
            "label": "Set 16 · Q65"
           }
          ]
         },
         {
          "html": "All of the above are functions of a surge tank: absorbing pressure rises, supplying water and buffering the conduit.",
          "sources": [
           {
            "id": "PAST-17-041",
            "label": "Set 17 · Q41"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-045",
          "label": "Set 4 · Q45"
         },
         {
          "id": "PAST-05-030",
          "label": "Set 5 · Q30"
         },
         {
          "id": "PAST-18-005",
          "label": "Set 18 · Q5"
         },
         {
          "id": "PAST-06-035",
          "label": "Set 6 · Q35"
         },
         {
          "id": "PAST-08-022",
          "label": "Set 8 · Q22"
         },
         {
          "id": "PAST-10-047",
          "label": "Set 10 · Q47"
         },
         {
          "id": "PAST-15-049",
          "label": "Set 15 · Q49"
         },
         {
          "id": "PAST-16-065",
          "label": "Set 16 · Q65"
         },
         {
          "id": "PAST-17-041",
          "label": "Set 17 · Q41"
         }
        ]
       },
       {
        "id": "penstock-forebay-and-tailrace",
        "title": "Penstock, forebay and tailrace",
        "html": "<p>The <em>forebay</em> is the basin at the end of the headrace, or power, channel from which the penstocks draw water. The <em>penstock</em> is the enclosed pressure pipe that delivers water from the forebay or surge tank down to the scroll case of the turbine. The <em>tailrace</em> returns the water leaving the turbines, through the draft tubes, to the river.</p><p>Economic penstock velocity rises with head, from 2 to 3 m/s at low heads to about 7 m/s in high-head plants, and fixes the diameter through continuity. The ASME rule gives the wall thickness in cm, allowing for joint efficiency and 1.5 mm of corrosion.</p>",
        "formulas": [
         {
          "label": "Penstock diameter",
          "tex": "D = \\sqrt{\\dfrac{4Q}{\\pi V}}"
         },
         {
          "label": "ASME penstock thickness (cm)",
          "tex": "t = \\dfrac{P R}{\\sigma \\eta - 0.6P} + 0.15"
         }
        ],
        "example": {
         "title": "Worked example: penstock diameter",
         "html": "<p>Q = 0.7 m<sup>3</sup>/s at 2 m/s, in metres:</p>\\[D = \\sqrt{\\dfrac{4 \\times 0.7}{\\pi \\times 2}} = \\sqrt{0.446} \\approx 0.667\\]"
        },
        "points": [
         {
          "html": "A penstock is a conduit connecting the forebay to the scroll case of the turbine.",
          "sources": [
           {
            "id": "PAST-05-057",
            "label": "Set 5 · Q57"
           }
          ]
         },
         {
          "html": "In micro hydro, the penstock is an enclosed pipe that delivers water to hydro turbines.",
          "sources": [
           {
            "id": "PAST-18-062",
            "label": "Set 18 · Q62"
           }
          ]
         },
         {
          "html": "A forebay connects the headrace channel and penstock.",
          "sources": [
           {
            "id": "PAST-18-031",
            "label": "Set 18 · Q31"
           }
          ]
         },
         {
          "html": "The tailrace is there to return the water leaving the turbines to the river.",
          "sources": [
           {
            "id": "PAST-R2083-015",
            "label": "2083 recall · Q15"
           }
          ]
         },
         {
          "html": "The penstock velocity in a high-head plant is about 7 m/s.",
          "sources": [
           {
            "id": "PAST-07-021",
            "label": "Set 7 · Q21"
           }
          ]
         },
         {
          "html": "A 0.7 m<sup>3</sup>/s design flow at 2 m/s needs a penstock of 0.667 m diameter.",
          "sources": [
           {
            "id": "PAST-09-075",
            "label": "Set 9 · Q75"
           }
          ]
         },
         {
          "html": "The ASME penstock thickness is \\(t_{cm} = PR/(\\sigma\\eta - 0.6P) + 0.15\\).",
          "sources": [
           {
            "id": "PAST-17-066",
            "label": "Set 17 · Q66"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-057",
          "label": "Set 5 · Q57"
         },
         {
          "id": "PAST-18-062",
          "label": "Set 18 · Q62"
         },
         {
          "id": "PAST-18-031",
          "label": "Set 18 · Q31"
         },
         {
          "id": "PAST-R2083-015",
          "label": "2083 recall · Q15"
         },
         {
          "id": "PAST-07-021",
          "label": "Set 7 · Q21"
         },
         {
          "id": "PAST-09-075",
          "label": "Set 9 · Q75"
         },
         {
          "id": "PAST-17-066",
          "label": "Set 17 · Q66"
         }
        ]
       },
       {
        "id": "tunnelling-methods",
        "title": "Tunnelling methods and linings",
        "html": "<p>Hard rock is tunnelled by the full-face, heading-and-benching or drift methods. In heading and benching the upper heading is driven ahead and the bench follows, giving a working platform and allowing drilling and mucking at the same time; but muck from the heading must be dropped or carried over the bench, so its removal is not easy.</p><p>Soft ground needs support as it is opened. <em>Forepoling</em> drives poles or boards ahead of the face in loose, running soil; needle-beam and shield methods are also soft-ground techniques. Shield-driven tunnels under water are lined with bolted cast-iron segments, strong, watertight and load-bearing at once.</p>",
        "points": [
         {
          "html": "The heading and benching method is used for tunnelling in hard rocks.",
          "sources": [
           {
            "id": "PAST-09-045",
            "label": "Set 9 · Q45"
           }
          ]
         },
         {
          "html": "The forepoling method is generally adopted for tunnelling in soft ground.",
          "sources": [
           {
            "id": "PAST-13-002",
            "label": "Set 13 · Q2"
           }
          ]
         },
         {
          "html": "The untrue claim for heading and benching is that removal of muck from the heading is very easy.",
          "sources": [
           {
            "id": "PAST-04-049",
            "label": "Set 4 · Q49"
           }
          ]
         },
         {
          "html": "Cast iron lining suits shield-driven tunnels, particularly under water.",
          "sources": [
           {
            "id": "PAST-07-041",
            "label": "Set 7 · Q41"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-09-045",
          "label": "Set 9 · Q45"
         },
         {
          "id": "PAST-13-002",
          "label": "Set 13 · Q2"
         },
         {
          "id": "PAST-04-049",
          "label": "Set 4 · Q49"
         },
         {
          "id": "PAST-07-041",
          "label": "Set 7 · Q41"
         }
        ]
       },
       {
        "id": "tunnel-cycle-and-air",
        "title": "The drill-and-blast cycle and tunnel air",
        "html": "<p>Rock tunnels advance in a repeated cycle: mark the tunnel profile, set up and drill, charge and blast, remove the foul gases by ventilation, check for misfires, then clear the broken rock, <em>mucking</em>. Knocking loose rock off the crown and walls after a blast is strictly called scaling.</p><p>Ventilation must keep the air safe: oxygen not less than 19.5%, carbon dioxide not more than 0.5% and hydrogen sulphide not more than 0.001%, about 10 ppm.</p>",
        "points": [
         {
          "html": "The correct order for rock tunnelling is 2, 3, 1, 4, 5: mark, drill, clear gases, check misfires, muck.",
          "sources": [
           {
            "id": "PAST-13-016",
            "label": "Set 13 · Q16"
           },
           {
            "id": "PAST-18-027",
            "label": "Set 18 · Q27"
           }
          ]
         },
         {
          "html": "The key calls removing rock protrusions after blasting mucking; strictly it is scaling.",
          "sources": [
           {
            "id": "PAST-13-003",
            "label": "Set 13 · Q3"
           }
          ]
         },
         {
          "html": "All of these air limits are correct: oxygen at least 19.5%, CO<sub>2</sub> at most 0.5% and H<sub>2</sub>S at most 0.001%.",
          "sources": [
           {
            "id": "PAST-04-064",
            "label": "Set 4 · Q64"
           }
          ]
         },
         {
          "html": "All of the above tunnel air limits hold during excavation.",
          "sources": [
           {
            "id": "PAST-13-018",
            "label": "Set 13 · Q18"
           }
          ]
         },
         {
          "html": "The incorrect statement is that oxygen should be less than 19.5%; it must be at least that.",
          "sources": [
           {
            "id": "PAST-11-035",
            "label": "Set 11 · Q35"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-13-016",
          "label": "Set 13 · Q16"
         },
         {
          "id": "PAST-18-027",
          "label": "Set 18 · Q27"
         },
         {
          "id": "PAST-13-003",
          "label": "Set 13 · Q3"
         },
         {
          "id": "PAST-04-064",
          "label": "Set 4 · Q64"
         },
         {
          "id": "PAST-13-018",
          "label": "Set 13 · Q18"
         },
         {
          "id": "PAST-11-035",
          "label": "Set 11 · Q35"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Penstock diameter",
        "tex": "D = \\sqrt{\\dfrac{4Q}{\\pi V}}"
       },
       {
        "label": "ASME penstock thickness",
        "tex": "t = \\dfrac{P R}{\\sigma \\eta - 0.6P} + 0.15"
       },
       {
        "label": "Hoop stress in a pipe",
        "tex": "\\sigma = \\dfrac{p D}{2t}"
       }
      ],
      "cautions": [
       {
        "id": "forebay-duplicate-options",
        "status": "review",
        "prompt": "Two options describe the same link",
        "html": "<p>The forebay sits at the end of the headrace, or power, channel and feeds the penstocks. Two options name this same link, and the key gives the second printing.</p>",
        "sources": [
         {
          "id": "PAST-18-031",
          "label": "Set 18 · Q31"
         }
        ]
       },
       {
        "id": "scaling-not-mucking",
        "status": "review",
        "prompt": "The operation is strictly called scaling",
        "html": "<p>Knocking loose rock off the crown and walls after a blast is called scaling. Of the options offered, the key takes mucking, the clearing of broken rock that follows.</p>",
        "sources": [
         {
          "id": "PAST-13-003",
          "label": "Set 13 · Q3"
         }
        ]
       }
      ],
      "gaps": [
       "Tunnel sizing, pressure shafts and the analysis of hydraulic transients from the syllabus are only touched on in these papers."
      ]
     },
     "ACiE0806": {
      "code": "ACiE0806",
      "questionCount": 22,
      "format": 2,
      "summary": "<p>This subchapter covers turbines, pumps and the powerhouse. The past-paper questions test impulse and reaction turbines, Kaplan, Francis and Pelton types, specific speed and unit power, draft tubes and their pressure limit, guide-vane velocity triangles, Pelton jet velocity, hydraulic efficiency, governors, reversible pump-turbines and the power law of centrifugal pumps.</p>",
      "blocks": [
       {
        "id": "turbine-types",
        "title": "Impulse and reaction turbines",
        "html": "<p>In an <em>impulse</em> turbine the whole head is turned into jet velocity before the water strikes the runner at atmospheric pressure. The Pelton wheel is the classic example; Turgo and cross-flow turbines also work with free jets.</p><p>In a <em>reaction</em> turbine the runner is full of water under pressure. Its fixed guide blades act as nozzles, so pressure falls and velocity rises through them, and the rest of the expansion happens in the runner. The Francis is a mixed-flow reaction turbine for medium heads; the Kaplan is an axial-flow reaction turbine with adjustable blades for low heads and large flows.</p>",
        "points": [
         {
          "html": "The Pelton is an impulse turbine; Francis, Kaplan and propeller turbines are reaction types.",
          "sources": [
           {
            "id": "PAST-04-028",
            "label": "Set 4 · Q28"
           }
          ]
         },
         {
          "html": "The correct statement is that the Pelton is an impulse turbine.",
          "sources": [
           {
            "id": "PAST-10-063",
            "label": "Set 10 · Q63"
           }
          ]
         },
         {
          "html": "All of the above, Pelton, cross-flow and Turgo, are impulse turbines.",
          "sources": [
           {
            "id": "PAST-14-009",
            "label": "Set 14 · Q9"
           }
          ]
         },
         {
          "html": "A Kaplan turbine is a low head axial flow turbine.",
          "sources": [
           {
            "id": "PAST-05-029",
            "label": "Set 5 · Q29"
           }
          ]
         },
         {
          "html": "A Kaplan turbine is a reaction turbine with adjustable blades.",
          "sources": [
           {
            "id": "PAST-17-058",
            "label": "Set 17 · Q58"
           }
          ]
         },
         {
          "html": "Through the fixed blades of a reaction turbine, pressure decreases while velocity increases.",
          "sources": [
           {
            "id": "PAST-07-046",
            "label": "Set 7 · Q46"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-028",
          "label": "Set 4 · Q28"
         },
         {
          "id": "PAST-10-063",
          "label": "Set 10 · Q63"
         },
         {
          "id": "PAST-14-009",
          "label": "Set 14 · Q9"
         },
         {
          "id": "PAST-05-029",
          "label": "Set 5 · Q29"
         },
         {
          "id": "PAST-17-058",
          "label": "Set 17 · Q58"
         },
         {
          "id": "PAST-07-046",
          "label": "Set 7 · Q46"
         }
        ]
       },
       {
        "id": "specific-speed-and-unit-quantities",
        "title": "Specific speed and unit quantities",
        "html": "<p>The <em>specific speed</em> of a turbine is the speed of a geometrically similar turbine that would develop unit power under unit head. It identifies the type: roughly 10 to 35 for a single-jet Pelton wheel, 60 to 300 for a Francis and 300 to 1000 for a Kaplan, which has the highest. Two turbines of the same specific speed under the same head have \\(N\\sqrt{P}\\) constant.</p><p>Unit quantities scale a turbine's performance to a head of 1 m: <em>unit power</em> is the power it would develop under unit head, with unit speed and unit discharge defined in the same way.</p>",
        "formulas": [
         {
          "label": "Specific speed and unit power",
          "tex": "N_s = \\dfrac{N\\sqrt{P}}{H^{5/4}}, \\qquad P_u = \\dfrac{P}{H^{3/2}}"
         }
        ],
        "example": {
         "title": "Worked examples: specific speed",
         "html": "<p>2000 hp at 300 rpm under 150 m: \\(N_s = 300\\sqrt{2000}/150^{1.25}\\), about 25.6, a Pelton.</p><p>10 000 hp at 500 rpm under 81 m: \\(N_s = 50\\,000/243 \\approx 206\\), a Francis.</p><p>Same \\(N_s\\) and head, 400 kW at 1000 rpm: for 100 kW, \\(N = 1000\\sqrt{400/100} = 2000\\) rpm.</p>"
        },
        "points": [
         {
          "html": "A turbine giving 2000 hp under 150 m at 300 rpm has a specific speed in the 10-35 range.",
          "sources": [
           {
            "id": "PAST-04-065",
            "label": "Set 4 · Q65"
           }
          ]
         },
         {
          "html": "10000 hp under 81 m at 500 rpm, a specific speed of about 206, identifies a Francis turbine.",
          "sources": [
           {
            "id": "PAST-14-003",
            "label": "Set 14 · Q3"
           }
          ]
         },
         {
          "html": "The Kaplan has the highest specific speed of these turbines.",
          "sources": [
           {
            "id": "PAST-18-001",
            "label": "Set 18 · Q1"
           }
          ]
         },
         {
          "html": "If Pelton X gives 400 kW at 1000 rpm, a similar Pelton Y giving 100 kW under the same head runs at 2000 rpm.",
          "sources": [
           {
            "id": "PAST-17-069",
            "label": "Set 17 · Q69"
           }
          ]
         },
         {
          "html": "The power a turbine develops under unit head is its unit power.",
          "sources": [
           {
            "id": "PAST-10-041",
            "label": "Set 10 · Q41"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-065",
          "label": "Set 4 · Q65"
         },
         {
          "id": "PAST-14-003",
          "label": "Set 14 · Q3"
         },
         {
          "id": "PAST-18-001",
          "label": "Set 18 · Q1"
         },
         {
          "id": "PAST-17-069",
          "label": "Set 17 · Q69"
         },
         {
          "id": "PAST-10-041",
          "label": "Set 10 · Q41"
         }
        ]
       },
       {
        "id": "draft-tubes-and-velocities",
        "title": "Draft tubes, guide-vane velocities and the Pelton jet",
        "html": "<p>A reaction turbine discharges into a diverging <em>draft tube</em>, which slows the water and converts its kinetic energy into pressure energy, so the turbine can also be set above the tailwater. The pressure at its inlet must not fall below about one third of atmospheric pressure, or cavitation begins. A Pelton wheel discharges at atmospheric pressure, so it has no draft tube.</p><p>At the inlet of an inward-flow reaction turbine the velocity of flow is the radial component of the absolute velocity leaving the guide vanes. A Pelton jet's velocity follows from the net head with a coefficient of velocity of about 0.97 to 0.99.</p>",
        "formulas": [
         {
          "label": "Flow velocity and Pelton jet velocity",
          "tex": "V_f = V \\sin\\alpha, \\qquad V = C_v\\sqrt{2gH}"
         }
        ],
        "example": {
         "title": "Worked example: absolute velocity from the flow velocity",
         "html": "<p>With \\(V_f = 2\\) m/s and guide vanes at 30°: \\(V = 2/\\sin 30^\\circ = 4\\) m/s.</p>"
        },
        "points": [
         {
          "html": "Draft tubes are not used in the Pelton turbine.",
          "sources": [
           {
            "id": "PAST-04-057",
            "label": "Set 4 · Q57"
           }
          ]
         },
         {
          "html": "A draft tube helps convert KE to pressure energy at the runner outlet.",
          "sources": [
           {
            "id": "PAST-12-056",
            "label": "Set 12 · Q56"
           }
          ]
         },
         {
          "html": "Draft tube pressure should not be less than one third of atmospheric pressure, or cavitation starts.",
          "sources": [
           {
            "id": "PAST-08-017",
            "label": "Set 8 · Q17"
           }
          ]
         },
         {
          "html": "A flow velocity of 2 m/s with guide vanes at 30° means water leaves the guide vanes at 4 m/s.",
          "sources": [
           {
            "id": "PAST-14-075",
            "label": "Set 14 · Q75"
           }
          ]
         },
         {
          "html": "The jet velocity at a Pelton inlet is \\(V = C_v\\sqrt{2gH}\\).",
          "sources": [
           {
            "id": "PAST-16-025",
            "label": "Set 16 · Q25"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-057",
          "label": "Set 4 · Q57"
         },
         {
          "id": "PAST-12-056",
          "label": "Set 12 · Q56"
         },
         {
          "id": "PAST-08-017",
          "label": "Set 8 · Q17"
         },
         {
          "id": "PAST-14-075",
          "label": "Set 14 · Q75"
         },
         {
          "id": "PAST-16-025",
          "label": "Set 16 · Q25"
         }
        ]
       },
       {
        "id": "efficiency-governors-and-pumps",
        "title": "Efficiency, governors, pump-turbines and pumps",
        "html": "<p>A turbine's <em>hydraulic efficiency</em> is the power the water transfers to the runner divided by the power available at the inlet; mechanical efficiency then compares shaft power with runner power. The <em>governor</em> senses speed changes with load and controls the flow of working fluid through the wicket gates or spear valve, keeping the mean speed, and so the frequency, constant.</p><p>Pumped-storage plants use reversible pump-turbines, pumping water up off-peak and generating at peak with one machine. For similar centrifugal pumps, the affinity laws make power vary as the fifth power of diameter.</p>",
        "formulas": [
         {
          "label": "Hydraulic efficiency",
          "tex": "\\eta_h = \\dfrac{P_{\\text{runner}}}{\\rho g Q H}"
         },
         {
          "label": "Pump affinity laws",
          "tex": "Q \\propto N D^3, \\qquad H \\propto N^2 D^2"
         },
         {
          "label": "Pump power",
          "tex": "P \\propto N^3 D^5"
         }
        ],
        "points": [
         {
          "html": "Hydraulic efficiency is the fluid power transferred to the runners over the power available at the inlet to the vanes.",
          "sources": [
           {
            "id": "PAST-12-039",
            "label": "Set 12 · Q39"
           }
          ]
         },
         {
          "html": "A turbine governor controls the mean speed under changing load.",
          "sources": [
           {
            "id": "PAST-09-044",
            "label": "Set 9 · Q44"
           }
          ]
         },
         {
          "html": "Governors directly control the flow of working fluids to the turbine.",
          "sources": [
           {
            "id": "PAST-11-076",
            "label": "Set 11 · Q76"
           }
          ]
         },
         {
          "html": "Reversible turbines are used in pumped storage plants.",
          "sources": [
           {
            "id": "PAST-10-021",
            "label": "Set 10 · Q21"
           }
          ]
         },
         {
          "html": "A pumped storage plant saves cost with reversible machines that work well both as pumps and turbines.",
          "sources": [
           {
            "id": "PAST-15-046",
            "label": "Set 15 · Q46"
           }
          ]
         },
         {
          "html": "None of the listed powers is right: centrifugal pump power varies as \\(D^5\\).",
          "sources": [
           {
            "id": "PAST-12-035",
            "label": "Set 12 · Q35"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-12-039",
          "label": "Set 12 · Q39"
         },
         {
          "id": "PAST-09-044",
          "label": "Set 9 · Q44"
         },
         {
          "id": "PAST-11-076",
          "label": "Set 11 · Q76"
         },
         {
          "id": "PAST-10-021",
          "label": "Set 10 · Q21"
         },
         {
          "id": "PAST-15-046",
          "label": "Set 15 · Q46"
         },
         {
          "id": "PAST-12-035",
          "label": "Set 12 · Q35"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Specific speed",
        "tex": "N_s = \\dfrac{N\\sqrt{P}}{H^{5/4}}"
       },
       {
        "label": "Unit power",
        "tex": "P_u = \\dfrac{P}{H^{3/2}}"
       },
       {
        "label": "Pelton jet velocity",
        "tex": "V = C_v\\sqrt{2gH}"
       },
       {
        "label": "Hydraulic efficiency",
        "tex": "\\eta_h = \\dfrac{P_{\\text{runner}}}{\\rho g Q H}"
       },
       {
        "label": "Pump power law",
        "tex": "P \\propto N^3 D^5"
       }
      ],
      "cautions": [
       {
        "id": "pump-power-law-key",
        "status": "corrected",
        "prompt": "The published key gives D squared",
        "html": "<p>By the affinity laws \\(P \\propto \\rho N^3 D^5\\), so at a given speed pump power varies as the fifth power of the diameter, which is none of the listed options.</p>",
        "sources": [
         {
          "id": "PAST-12-035",
          "label": "Set 12 · Q35"
         }
        ]
       }
      ],
      "gaps": [
       "Francis and Pelton runner design, scroll cases, generators and powerhouse layout from the syllabus are not examined in these papers."
      ]
     }
    });
})();
