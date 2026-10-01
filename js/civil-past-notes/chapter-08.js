(function () {
    "use strict";
    window.CIVIL_PAST_NOTE_TOPICS = window.CIVIL_PAST_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_PAST_NOTE_TOPICS, {
     "ACiE0801": {
      "code": "ACiE0801",
      "questionCount": 4,
      "format": 2,
      "summary": "<p>This subchapter covers why hydropower suits Nepal and how projects are screened and framed: head, seasonal flow and demand, the history from Pharping in 1911, the Act, rules and policy that govern the sector, delivery and financing models, and the strengths and costs of hydro plants judged on a life-cycle basis. The past papers test why hydro is the most suitable source for Nepal, when Pharping was built, and the true and false statements about hydro plants.</p>",
      "blocks": [
       {
        "id": "head-flow-and-seasonal-demand",
        "title": "Why hydropower suits Nepal: head, flow and seasonal demand",
        "html": "<p>Nepal has steep, snow-fed rivers and no fossil fuel of its own, so hydropower is the most reliable and suitable source of electricity for the country. Its theoretical potential is often quoted as about 83 000 MW.</p><p>A large <em>gross head</em> is easy to find on a map, but head alone does not make a good site. Power is the product of usable discharge, net head and overall efficiency, so a high drop carrying little water still yields little power.</p><p>River flow is strongly seasonal: monsoon rain and snowmelt swell the rivers, while dry-season flow shrinks just when year-round demand still has to be met. A sound screening compares the seasonal usable flow and net head with the demand, period by period. Geology, sediment, access and the waterway then decide whether that potential can be built and operated.</p>",
        "formulas": [
         {
          "label": "Hydropower output",
          "tex": "P = \\rho g Q H_n \\eta",
          "where": "<p>\\(Q\\) is the usable discharge in m³/s, \\(H_n\\) the net head in m and \\(\\eta\\) the overall efficiency. With water at 1000 kg/m³ and \\(g\\) = 9.81 m/s², \\(P\\) is in watts.</p>"
         }
        ],
        "example": {
         "title": "Illustrative example: the same head in two seasons",
         "html": "<p>Take a net head of 200 m and an overall efficiency of 0.85. Monsoon flow is 20 m³/s, but the dry-season usable flow is only 2 m³/s.</p>\\[\\begin{aligned} P_{\\text{dry}} &amp;= 9810 \\times 2 \\times 200 \\times 0.85 \\\\ &amp;= 3\\,335\\,400\\ \\text{W} \\approx 3.34\\ \\text{MW} \\end{aligned}\\]<p>The same equation with 20 m³/s gives about 33.4 MW. Sizing firm supply from the monsoon figure would overstate winter output tenfold; the dry-season value is what year-round demand can rely on.</p>"
        },
        "moreHtml": "<p>Three screening traps recur: choosing a site for its elevation drop alone, treating monsoon peak flow as dependable supply, and reading installed generator capacity as winter output. Each forgets that capacity produces energy only when water and head are available at the time of need.</p><p>Planning studies rank potential in tiers. <em>Gross</em>, or theoretical, potential counts all runoff falling through all available head; <em>technical</em> potential keeps what feasible schemes could harness; <em>economic</em> potential keeps what is cost-effective against alternatives. Each tier is smaller than the one before, so the often-quoted theoretical figure is far above what can economically be built.</p>",
        "points": [
         {
          "html": "In Nepal a hydro plant is the most reliable and suitable kind of power plant.",
          "sources": [
           {
            "id": "PAST-15-048",
            "label": "Set 15 · Q48"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-15-048",
          "label": "Set 15 · Q48"
         }
        ]
       },
       {
        "id": "pharping-law-and-project-delivery",
        "title": "Pharping 1911, the Electricity Act, rules and policy, and project delivery",
        "html": "<p>Nepal's first hydropower station, <em>Pharping</em> or Chandrajyoti, was inaugurated on 22 May 1911 AD, 1968 BS, under Chandra Shumsher, with two 250 kW units, 500 kW in all. The later founding of the Nepal Electricity Authority is a separate institutional milestone.</p><p>The sector separates an Act, the rules made under it and policy. The Electricity Act, 2049 (1992) gives the Government of Nepal rule-making power in section 40, and the Electricity Rules, 2050 (1993) are subordinate legislation made under that power. The Hydropower Development Policy, 2058 (2001) is a Government policy, not a utility's company policy; its first consumer objective is reliable electricity at low cost, for which installed MW, exports or construction speed cannot stand in.</p><table><thead><tr><th scope='col'>Instrument</th><th scope='col'>Made by</th><th scope='col'>Nature</th></tr></thead><tbody><tr><td>Electricity Act, 2049 (1992)</td><td>Legislature</td><td>Principal Act</td></tr><tr><td>Electricity Rules, 2050 (1993)</td><td>Government of Nepal, section 40</td><td>Subordinate legislation</td></tr><tr><td>Hydropower Development Policy, 2058 (2001)</td><td>Government of Nepal</td><td>Policy objectives</td></tr><tr><td>Power purchase agreement</td><td>Contracting parties</td><td>Contract</td></tr></tbody></table>",
        "moreHtml": "<p>Delivery models state who builds, owns, operates and finally transfers an asset. Under <em>Build-Own-Operate-Transfer</em> (BOOT), the usual model for private hydropower projects, a concessionaire finances and builds the project, owns and runs it for the contract term, then hands it over on the contract's terms. Build-Own-Operate omits the transfer, an engineering-procurement-construction contract covers delivery only, and an operation-and-maintenance contract implies neither construction nor ownership.</p><p>Financing roles are read from their own agreements. A foreign government lending beside local equity and a multilateral loan is a co-financing partner, as Japan was for the Kulekhani projects; the loan gives it no equity ownership.</p>",
        "points": [
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
          "id": "PAST-16-015",
          "label": "Set 16 · Q15"
         }
        ]
       },
       {
        "id": "features-and-life-cycle-appraisal",
        "title": "Features of hydro plants and appraisal by life-cycle cost",
        "html": "<p>Hydro turbine-generators keep a high efficiency, about 90%, over a wide range of loads and respond quickly to changes in demand. The plants burn no fuel and need few staff, so they are not labour oriented and their running cost is low. They are cleaner than thermal plants and long-lived, 50 years or more, and with routine maintenance they keep their efficiency rather than becoming less effective with time.</p><p>Against that, they have high first costs and long gestation and construction periods. A remote site may need a long access road, a lengthy transmission line and heavy civil works before any energy is delivered, and those costs can outweigh the fuel saving.</p><p>The fair test is a <em>discounted life-cycle cost</em> comparison between alternatives giving the same dependable service: capital cost and its timing, the construction period, operation, maintenance, rehabilitation and losses, credited with the energy delivered when it is needed. Equal nameplate MW does not make two plants equivalent.</p>",
        "formulas": [
         {
          "label": "Present worth of a cost in year t",
          "tex": "PW = \\dfrac{C_t}{(1+r)^t}",
          "where": "<p>\\(C_t\\) is the cost incurred in year \\(t\\) and \\(r\\) the discount rate per year.</p>"
         },
         {
          "label": "Life-cycle cost of an alternative",
          "tex": "LCC = \\sum_{t=0}^{n} \\dfrac{C_t}{(1+r)^t}"
         }
        ],
        "example": {
         "title": "Illustrative example: discounting a late cost",
         "html": "<p>A rehabilitation costing Rs 100 million falls due in year 10, and the discount rate is 10%. Its present worth is</p>\\[PW = \\dfrac{100}{1.1^{10}} = \\dfrac{100}{2.594} \\approx 38.55\\]<p>That is about Rs 38.55 million today. Costs met early, such as roads and transmission built before first power, weigh more heavily than equal costs met late.</p>"
        },
        "moreHtml": "<p>The same logic applies to buying electricity across the border during seasonal shortages. Imports may relieve load shedding while domestic projects are built, so they are judged on reliability, delivered cost, supply and strategic risk, and their effect on domestic investment. Hydropower development policy has not treated imports as a good answer to load shedding, and counting imported MWh as domestic generation distorts capacity planning.</p>",
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
      "formulaSheet": [
       {
        "label": "Hydropower output",
        "tex": "P = \\rho g Q H_n \\eta",
        "note": "Use dependable seasonal flow, not monsoon peak flow, for firm supply."
       },
       {
        "label": "Energy over a period",
        "tex": "E = P\\,t",
        "note": "Average output times hours of operation."
       },
       {
        "label": "Present worth of a future cost",
        "tex": "PW = \\dfrac{C_t}{(1+r)^t}"
       },
       {
        "label": "Life-cycle cost",
        "tex": "LCC = \\sum_{t=0}^{n} \\dfrac{C_t}{(1+r)^t}",
        "note": "Compare alternatives giving equivalent dependable service."
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
       "Potential figures differ between studies; the often-quoted 83 000 MW theoretical value is not a current inventory of technical or economic potential.",
       "Project development stages, current licensing procedures and present regulatory institutions are only outlined here."
      ]
     },
     "ACiE0802": {
      "code": "ACiE0802",
      "questionCount": 18,
      "format": 2,
      "summary": "<p>This subchapter turns river flow and demand into power and energy figures: hydraulic power from discharge, head and efficiency, flow-duration and power-duration curves, firm and secondary power, load curves with load, capacity, diversity and coincidence factors, merit-order dispatch of base and peak plants, and run-of-river, pondage, storage and pumped-storage schemes. The past papers test the power equation with net head, revenue from energy, firm power, converting potential to energy, the plant factors, base and peak plants and depreciation.</p>",
      "blocks": [
       {
        "id": "power-head-and-efficiency",
        "title": "Hydraulic power, gross and net head, and efficiency",
        "html": "<p>The power in falling water is its weight flow times the head, \\(P = \\gamma Q H\\), or \\(\\rho g Q H\\). With \\(\\gamma\\) = 9.81 kN/m<sup>3</sup>, \\(Q\\) in m<sup>3</sup>/s and \\(H\\) in m, the result is in kW. Electrical output multiplies this hydraulic input by the overall water-to-wire efficiency, so it depends on head, discharge and efficiency together.</p><p><em>Gross head</em> is the difference between the upstream and downstream free-water levels on a common datum; for a reaction turbine these are the headrace and tailrace levels. The downstream reference is a water level, not the runner. <em>Net head</em> is the gross head minus the waterway losses at the operating discharge. Losses grow with discharge, so net head belongs to an operating point.</p><p>Apply the loss and the efficiency once each. Dividing by efficiency, rather than multiplying, gives the input needed for a stated output, not the output itself.</p>",
        "formulas": [
         {
          "label": "Hydraulic and electrical power",
          "tex": "P = \\gamma Q H, \\qquad P_e = \\eta \\gamma Q H_n"
         },
         {
          "label": "Practical form, P in kW",
          "tex": "P = 9.81\\, Q H_n \\eta",
          "where": "<p>\\(Q\\) in m<sup>3</sup>/s and \\(H_n\\) in m, with water density 1000 kg/m<sup>3</sup>.</p>"
         },
         {
          "label": "Gross head",
          "tex": "H_g = z_{\\text{up}} - z_{\\text{down}}",
          "where": "<p>Upstream and downstream free-water levels on a common datum.</p>"
         },
         {
          "label": "Net head",
          "tex": "H_n = H_g - h_L",
          "where": "<p>\\(h_L\\) is the total waterway loss at the operating discharge.</p>"
         }
        ],
        "example": {
         "title": "Worked examples: power from head, flow and efficiency",
         "html": "<p>A gross head of 423.5 m with a 2.5 m loss leaves 421 m. With Q = 0.9 m<sup>3</sup>/s and \\(\\eta = 0.85\\):</p>\\[\\begin{aligned} P &amp;= 0.85 \\times 9.81 \\times 0.9 \\times 421 \\\\ &amp;\\approx 3159.45\\ \\text{kW} \\end{aligned}\\]<p>A 6 m canal drop with 50 cumec gives \\(9.8 \\times 50 \\times 6 = 2940\\) kW of water power, or 2352 kW at 80% efficiency.</p><p>Levels of 240 m upstream and 180 m downstream give a gross head of 60 m. Taking 60 m as the net head, 4 m<sup>3</sup>/s and 85% efficiency:</p>\\[\\begin{aligned} P &amp;= 9.81 \\times 4 \\times 60 \\times 0.85 \\\\ &amp;= 2001.24\\ \\text{kW} \\end{aligned}\\]<p>The hydraulic input is 2354.40 kW; dividing it by 0.85 would answer a different question.</p>"
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
         }
        ]
       },
       {
        "id": "flow-duration-curves",
        "title": "Flow-duration and power-duration curves",
        "html": "<p>A <em>flow-duration curve</em> ranks the discharges of a record by the percentage of time each is equalled or exceeded: \\(Q_{40}\\) = 12 m<sup>3</sup>/s means the flow reached or topped 12 m<sup>3</sup>/s during 40% of the recorded time. It identifies no dates, so the plotting convention and record period must accompany it.</p><p>At a known head, power is proportional to the usable flow, so the curve becomes a <em>power-duration curve</em> showing the total power available at the site for any percentage of time. Integrating power over duration gives energy, once turbine flow limits and installed capacity cap the usable part. Ranking removes chronology, so the curve alone cannot size seasonal storage.</p><p>The area under the curve is a volume of water only after the percentage axis is scaled to real time: multiply the mean discharge by the total duration in seconds.</p>",
        "formulas": [
         {
          "label": "Power-duration ordinate",
          "tex": "P_i = \\rho g Q_i H_n \\eta"
         },
         {
          "label": "Energy over the reference period",
          "tex": "E = \\int_0^T P\\,dt"
         },
         {
          "label": "Volume from a stepwise duration curve",
          "tex": "V = T \\sum_i Q_i\\, p_i",
          "where": "<p>\\(p_i\\) is the fraction of time at discharge \\(Q_i\\) and \\(T\\) the record length in seconds.</p>"
         }
        ],
        "example": {
         "title": "Worked example: volume from a 100-day stepwise curve",
         "html": "<p>The record has 10 m<sup>3</sup>/s for 20% of the time, 5 m<sup>3</sup>/s for 30% and 2 m<sup>3</sup>/s for 50%. The weighted mean adds 10 × 0.20, 5 × 0.30 and 2 × 0.50:</p>\\[\\begin{aligned} Q_{\\text{mean}} &amp;= 2.0 + 1.5 + 1.0 \\\\ &amp;= 4.5\\ \\text{m}^3/\\text{s} \\end{aligned}\\]<p>The duration is 100 × 86,400 = 8,640,000 s, so</p>\\[\\begin{aligned} V &amp;= 4.5 \\times 8\\,640\\,000 \\\\ &amp;= 38\\,880\\,000\\ \\text{m}^3 \\end{aligned}\\]<p>That is 38.88 million m<sup>3</sup>. Reading the area on a percentage axis directly as cubic metres omits the time scaling.</p>"
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
         }
        ],
        "sources": [
         {
          "id": "PAST-05-012",
          "label": "Set 5 · Q12"
         }
        ]
       },
       {
        "id": "firm-power-and-annual-energy",
        "title": "Firm power, secondary power and annual energy",
        "html": "<p>The power available continuously, through the driest period adopted as the design basis, is the <em>firm power</em>; extra output available only in wetter periods is <em>secondary power</em>. Installed capacity is a machine rating, not a supply promise, and average annual power is the annual energy divided by the 8760 hours of a year.</p><p>Dependability is judged against the duty: annual energy exceeding yearly consumption can still leave critical dry-season hours unserved. An unregulated run-of-river plant must cut its output when river flow falls below turbine needs, even though the machinery is sound. However reliable hydropower is otherwise, continuous rated output in all seasons is not one of its automatic advantages; storage or backup provides that.</p><p>A potential in GW becomes annual energy when multiplied by the 8760 hours of a year and the load factor.</p>",
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
        "id": "load-curves-and-load-factor",
        "title": "Load curves, average demand and load factor",
        "html": "<p>A <em>load curve</em> plots the demand on a station against time, so the area under it is energy; for a stepped curve add the rectangles of power times duration. Averaging the power levels without weighting them by their durations is the usual slip.</p><p>The <em>load factor</em> is the ratio of average to maximum demand over the same period, always less than 1, and average demand is the energy supplied divided by the hours in the period. Installed capacity is not the denominator unless it happens to equal the peak.</p><p>Peak and energy are different quantities: a high evening peak lasting a few hours may add less energy than a modest load held all night. In Nepal consumption is greatest in the evening, roughly 5 pm to 11 pm; an actual peak period comes from a dated load record.</p>",
        "formulas": [
         {
          "label": "Energy from a stepped load curve",
          "tex": "E = \\sum_i P_i\\, t_i"
         },
         {
          "label": "Average demand",
          "tex": "P_{\\text{avg}} = \\dfrac{E}{T}"
         },
         {
          "label": "Load factor",
          "tex": "LF = \\dfrac{P_{\\text{avg}}}{P_{\\text{max}}}"
         }
        ],
        "example": {
         "title": "Worked examples: average demand, energy and load factor",
         "html": "<p>1000 MWh supplied over two months, 1440 h: average demand \\(= 1000/1440 \\approx 0.694\\) MW.</p><ol><li>Demand of 40 kW lasting 18 h, then 100 kW for 6 h: \\(40 \\times 18 + 100 \\times 6 = 1320\\) kWh, that is 720 kWh plus 600 kWh.</li><li>1440 kWh delivered over 24 h is an average of 60 kW. With a 100 kW maximum, \\(LF = 60/100 = 0.60\\), or 60%.</li></ol>"
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
         }
        ]
       },
       {
        "id": "capacity-diversity-and-coincidence",
        "title": "Capacity, diversity and coincidence factors, and revenue",
        "html": "<p>The <em>capacity</em> or plant factor is the average load divided by the installed plant capacity, while the load factor divides the same average by the peak. Their ratio is peak demand over installed capacity, so the two factors coincide when installed capacity equals the peak.</p><p>Consumers do not all peak at once. The <em>diversity factor</em> is the sum of the individual maximum demands over the simultaneous system maximum, never below 1, and the <em>coincidence factor</em> is its reciprocal, never above 1. An isolated microhydro without storage must therefore be sized for the coincident peak load, plus losses, motor starting and a reserve, not for the average or the sum of appliance ratings.</p><p>Revenue is the energy sold times the tariff. Energy is power times hours, one unit being one kWh, and a plant running at a capacity factor delivers only that share of its full output.</p>",
        "formulas": [
         {
          "label": "Capacity factor",
          "tex": "CF = \\dfrac{P_{\\text{avg}}}{P_{\\text{inst}}}"
         },
         {
          "label": "Capacity factor over load factor",
          "tex": "\\dfrac{CF}{LF} = \\dfrac{P_{\\text{max}}}{P_{\\text{inst}}}"
         },
         {
          "label": "Coincidence factor",
          "tex": "C_f = \\dfrac{P_{\\text{comb}}}{\\sum_i P_i}",
          "where": "<p>\\(P_i\\) are the individual maximum demands and \\(P_{\\text{comb}}\\) their simultaneous combined maximum.</p>"
         },
         {
          "label": "Diversity factor",
          "tex": "D_f = \\dfrac{\\sum_i P_i}{P_{\\text{comb}}} = \\dfrac{1}{C_f}"
         }
        ],
        "example": {
         "title": "Worked examples: plant factors, coincidence and revenue",
         "html": "<p>200 MW installed, 150 MW peak, 110 MW average: LF = 110/150 = 0.73 and CF = 110/200 = 0.55. An average load of 36 000 kW on two 20 000 kW generators is a capacity factor of 36 000/40 000 = 90%.</p><p>Feeders with individual maxima of 12, 18 and 30 kW sum to 60 kW. With a simultaneous maximum of 45 kW:</p>\\[\\begin{aligned} C_f &amp;= \\dfrac{45}{60} = 0.75 \\\\ D_f &amp;= \\dfrac{60}{45} \\approx 1.33 \\end{aligned}\\]<p>100 m<sup>3</sup>/s under 75 m at a capacity factor of 0.5 for 3 hours delivers about 110 250 kWh; at Rs 18 per unit that is about Rs 1.98 million.</p>"
        },
        "points": [
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
          "html": "A 200 MW station with a 150 MW peak and 110 MW average has load and capacity factors of 0.73 and 0.55.",
          "sources": [
           {
            "id": "PAST-12-076",
            "label": "Set 12 · Q76"
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
          "id": "PAST-17-036",
          "label": "Set 17 · Q36"
         },
         {
          "id": "PAST-12-076",
          "label": "Set 12 · Q76"
         },
         {
          "id": "PAST-17-064",
          "label": "Set 17 · Q64"
         },
         {
          "id": "PAST-12-034",
          "label": "Set 12 · Q34"
         },
         {
          "id": "PAST-11-075",
          "label": "Set 11 · Q75"
         }
        ]
       },
       {
        "id": "base-peak-and-merit-order",
        "title": "Base-load and peak-load plants, merit order and plant economics",
        "html": "<p>Operators load units in <em>merit order</em>: the cheapest sustained generation carries the base, units able to follow load take the intermediate band, and quick-starting units with high variable cost serve short, high-value peaks and reserve. Running a flexible, costly unit as base load wastes its flexibility, and diesel sets are too costly to run as base load.</p><table><thead><tr><th scope='col'>Load band</th><th scope='col'>Suited unit</th><th scope='col'>Reason</th></tr></thead><tbody><tr><td>Base</td><td>Low variable cost, steady output</td><td>Runs most hours, so running cost dominates</td></tr><tr><td>Intermediate</td><td>Moderate cost, able to follow load</td><td>Runs part of each day</td></tr><tr><td>Peak</td><td>Fast start, high variable cost</td><td>Runs few hours, so flexibility outweighs running cost</td></tr></tbody></table><p>A hydropower plant draws its energy from water rather than fuel and needs few operators, so for the same output it has the lowest operating charges, although maintenance, staff and any backup still cost money. River hydropower is both <em>conventional</em>, a long-established technology, and <em>renewable</em>, replenished by the water cycle.</p><p>Dams, tunnels and powerhouses last a long time, so the annual depreciation of a hydropower plant is only about 0.5 to 1.5%.</p>",
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
          "id": "PAST-11-029",
          "label": "Set 11 · Q29"
         }
        ]
       },
       {
        "id": "run-of-river-pondage-and-storage",
        "title": "Run-of-river, pondage, storage and pumped-storage schemes",
        "html": "<p>An unregulated <em>run-of-river</em> plant uses the river flow as it comes, with no appreciable pondage upstream, so it generates from whatever flow remains after required releases, within turbine limits. <em>Pondage</em> is short-period storage behind a weir or in a forebay for meeting the daily peak; it supplies only the deficit between release and inflow over the peak.</p><p>A <em>storage</em> plant regulates through the active volume of its reservoir. It can start quickly and hold water back, so with adequate water and capacity it serves the peak as well as the base, within its seasonal water budget.</p><p><em>Pumped storage</em> moves energy in time rather than creating it: reversible pump-turbines lift water off-peak and generate at the peak. Round-trip efficiency is the product of the pumping and generating efficiencies, not their average.</p>",
        "formulas": [
         {
          "label": "Working pondage for a peak",
          "tex": "V = (Q_{\\text{rel}} - Q_{\\text{in}})\\, t"
         },
         {
          "label": "Round-trip efficiency",
          "tex": "\\eta_{\\text{rt}} = \\eta_{\\text{pump}}\\, \\eta_{\\text{gen}}"
         }
        ],
        "example": {
         "title": "Worked examples: a two-hour peak and a storage cycle",
         "html": "<p>Releasing 5 m<sup>3</sup>/s against an inflow of 2 m<sup>3</sup>/s for 2 h:</p>\\[\\begin{aligned} V &amp;= (5 - 2) \\times 2 \\times 3600 \\\\ &amp;= 21\\,600\\ \\text{m}^3 \\end{aligned}\\]<p>Pumping 100 MWh at 90% stores 90 MWh; generating at 90% returns \\(90 \\times 0.90 = 81\\) MWh, a round trip of 0.81.</p>"
        },
        "moreHtml": "<p>A storage reservoir is zoned by level: flood surcharge above the normal full level, active or live storage between the minimum operating and full levels, and dead storage below the minimum level, often the sediment allowance. Dead storage is not scheduled as active volume, and a flood-control reserve is not automatically available for generation. Reservoir zones, silting and bank storage are taken up with dams in the next subchapter.</p>",
        "points": [
         {
          "html": "Only statement ii is correct: storage hydropower serves the peak, and diesel is not base load.",
          "sources": [
           {
            "id": "PAST-15-076",
            "label": "Set 15 · Q76"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-15-076",
          "label": "Set 15 · Q76"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Hydraulic power",
        "tex": "P = \\gamma Q H = \\rho g Q H"
       },
       {
        "label": "Electrical power",
        "tex": "P_e = \\eta \\gamma Q H_n"
       },
       {
        "label": "Practical form in kW",
        "tex": "P = 9.81\\, Q H_n \\eta",
        "note": "Q in m<sup>3</sup>/s and H<sub>n</sub> in m."
       },
       {
        "label": "Gross head",
        "tex": "H_g = z_{\\text{up}} - z_{\\text{down}}",
        "note": "Free-water levels on a common datum."
       },
       {
        "label": "Net head",
        "tex": "H_n = H_g - h_L"
       },
       {
        "label": "Volume from a duration curve",
        "tex": "V = T \\sum_i Q_i\\, p_i",
        "note": "T is the record length in seconds."
       },
       {
        "label": "Annual energy",
        "tex": "E = P \\times 8760 \\times LF"
       },
       {
        "label": "Energy from a load curve",
        "tex": "E = \\sum_i P_i\\, t_i"
       },
       {
        "label": "Load factor",
        "tex": "LF = \\dfrac{P_{\\text{avg}}}{P_{\\text{max}}}"
       },
       {
        "label": "Capacity factor",
        "tex": "CF = \\dfrac{P_{\\text{avg}}}{P_{\\text{inst}}}"
       },
       {
        "label": "Capacity factor over load factor",
        "tex": "\\dfrac{CF}{LF} = \\dfrac{P_{\\text{max}}}{P_{\\text{inst}}}",
        "note": "Same period and metering boundary."
       },
       {
        "label": "Coincidence factor",
        "tex": "C_f = \\dfrac{P_{\\text{comb}}}{\\sum_i P_i}"
       },
       {
        "label": "Diversity factor",
        "tex": "D_f = \\dfrac{1}{C_f}"
       },
       {
        "label": "Working pondage",
        "tex": "V = (Q_{\\text{rel}} - Q_{\\text{in}})\\, t"
       },
       {
        "label": "Round-trip efficiency",
        "tex": "\\eta_{\\text{rt}} = \\eta_{\\text{pump}}\\, \\eta_{\\text{gen}}",
        "note": "A product of the two conversions, not their average."
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
       "Installed-capacity selection by incremental economic comparison and mass-curve sizing of seasonal storage are described but not worked.",
       "The components of hydropower plants follow in the later subchapters; reservoir operating rules are outside these notes."
      ]
     },
     "ACiE0803": {
      "code": "ACiE0803",
      "questionCount": 18,
      "format": 2,
      "summary": "<p>This subchapter covers the dams and reservoirs of storage plants: choosing and classifying dams, reservoir zones and silting, the forces, base stresses and sliding of gravity dams, the zoning, freeboard, seepage line and sloughing of earth dams, spillways with their energy dissipation, and outlets, gates and level measurement.</p><p>The past papers test dam classes and foundations, spillways and morning glories, dead storage and reservoir life, uplift, the elementary profile, the middle-third rule, anchorage against sliding and overturning, earth-dam freeboard, sloughing and top width, and outlet discharges.</p>",
      "blocks": [
       {
        "id": "choosing-and-classifying-dams",
        "title": "Choosing and classifying dams",
        "html": "<p>A dam carries several classifications at once, because each answers a different question.</p><table><thead><tr><th scope='col'>Basis</th><th scope='col'>Classes</th></tr></thead><tbody><tr><td>Hydraulic design</td><td>Overflow, non-overflow</td></tr><tr><td>Function</td><td>Storage, diversion, detention</td></tr><tr><td>Structural action</td><td>Gravity, arch, buttress</td></tr><tr><td>Material</td><td>Concrete, masonry, earth, rockfill</td></tr><tr><td>Service life</td><td>Permanent, temporary</td></tr></tbody></table><p>A <em>gravity dam</em> resists water load by its weight and delivers heavy compression and shear to its base, so it needs a strong, sound rock foundation free of weak seams and open joints. An <em>embankment dam</em> spreads its load over a broad base and tolerates more deformation, so it suits weaker ground. Where sand and gravel abound in the bed strata an embankment may be chosen, with a low-permeability core, cutoffs, filters and drains; a homogeneous earth dam suits only an impervious foundation.</p>",
        "moreHtml": "<p>In plan, the <em>axis</em> of a gravity dam is the line of the crown of the dam on the upstream side, a setting-out reference rather than the toe or the river thalweg.</p><p>Arch dams are built in monoliths separated by <em>contraction joints</em>, which let the mass concrete cool and shrink and are later grouted so the blocks act together as an arch. During construction a <em>cofferdam</em> temporarily encloses part of the river so that permanent foundations can be built in the dry; it still needs design for floods, seepage, uplift and stability.</p>",
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
         }
        ]
       },
       {
        "id": "reservoir-zones-and-silting",
        "title": "Reservoir storage zones, dead storage and silting",
        "html": "<p>A reservoir is divided by levels. <em>Dead storage</em> lies between the bed level and the minimum pool level, the lowest outlet: ordinary releases cannot draw it, and it is usually set aside for sediment. Live or useful storage lies between the minimum pool and the full reservoir level, and flood surcharge storage above that.</p><p>Silt first fills the dead storage. The sediment allowance lasts its volume divided by the yearly deposited volume, assuming a constant rate and no removal; once it is full, sediment eats into the live storage and the useful life of the reservoir begins to shrink. Real deposits also spread into live storage and near intakes, so impairment can begin earlier.</p><p><em>Bank storage</em> is water that enters permeable banks as the reservoir rises and partly returns as it falls; it increases the computed reservoir capacity.</p>",
        "formulas": [
         {
          "label": "Life of a sediment allowance",
          "tex": "T = \\dfrac{V_{\\text{alloc}}}{V_{\\text{sed}}}",
          "where": "<p>\\(V_{\\text{sed}}\\) is the deposited bulk volume per year; a constant rate and no removal are assumed.</p>"
         }
        ],
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
        "id": "uplift-and-elementary-profile",
        "title": "Forces on a gravity dam, uplift and the elementary profile",
        "html": "<p>A gravity dam resists the water thrust by its own weight. <em>Uplift</em>, the seepage pressure acting upward under the base of a concrete or masonry dam, opposes that weight, so the effective normal force is the weight minus the uplift. Uplift therefore matters for both sliding and overturning; drains and grout curtains control it. Adding uplift to the weight instead would badly overstate the resistance.</p><p>For an <em>elementary profile</em>, a triangle with a vertical upstream face, no uplift and the reservoir full to the apex, keeping the resultant within the middle third gives the base width in terms of the height and the specific gravity of the material.</p>",
        "formulas": [
         {
          "label": "Elementary profile, no uplift",
          "tex": "B = \\dfrac{H}{\\sqrt{S_c}}"
         },
         {
          "label": "Effective normal force",
          "tex": "N = W - U"
         }
        ],
        "example": {
         "title": "Worked example: height of an elementary profile",
         "html": "<p>B = 35 m and \\(S_c = 2.45\\): \\(H = 35\\sqrt{2.45} \\approx 54.8\\) m.</p>"
        },
        "moreHtml": "<p>Floors and aprons on pervious foundations, such as weir floors, fail in two classic ways. Uplift can lift or crack a floor once it exceeds the floor's weight. <em>Undermining</em> develops when seepage emerging beyond the floor washes soil out of the foundation, growing into piping that strips away the support. Cutoffs lengthen the seepage path, graded filters retain soil while passing water, and drainage and scour protection deal with the exit.</p>",
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
         }
        ]
       },
       {
        "id": "middle-third-and-base-stresses",
        "title": "The middle-third rule and heel and toe stresses",
        "html": "<p>Assume full contact and a linear distribution of normal stress across a rectangular base of width \\(B\\), per metre length of dam. With the effective vertical resultant \\(N\\) at eccentricity \\(e\\) from the centre, the edge stresses are \\(N/B\\) multiplied by \\(1 \\pm 6e/B\\). Both edges stay in compression while \\(|e| \\le B/6\\), which keeps the resultant within the <em>middle third</em> of the base.</p><p>The rule guarantees only the absence of tension at heel and toe; sliding, bearing and uplift are separate checks. \\(B/6\\) is a rectangle result: in general no tension needs \\(|e| \\le Z/A\\), so the middle-third rule applies to rectangular sections.</p><p>With the reservoir empty only the weight acts, so the resultant moves upstream and the maximum compressive stress is at the heel.</p>",
        "formulas": [
         {
          "label": "Base edge stresses, per metre length",
          "tex": "\\sigma = \\dfrac{N}{B}\\left(1 \\pm \\dfrac{6e}{B}\\right)"
         },
         {
          "label": "No tension on a rectangular base",
          "tex": "|e| \\le \\dfrac{B}{6}"
         },
         {
          "label": "No tension on any section",
          "tex": "|e| \\le \\dfrac{Z}{A}",
          "where": "<p>\\(Z\\) is the section modulus and \\(A\\) the area of the bearing section.</p>"
         },
         {
          "label": "Triangular section, empty reservoir",
          "tex": "\\sigma_{\\text{heel}} = \\dfrac{2W}{B}, \\quad \\sigma_{\\text{toe}} = 0",
          "where": "<p>Vertical upstream face, per unit length, weight only and no uplift.</p>"
         }
        ],
        "example": {
         "title": "Worked examples: an 18 m base and a triangular section",
         "html": "<p>For an 18 m rectangular base the one-sided eccentricity limit is \\(e_{\\max} = 18/6 = 3.0\\) m. The middle third runs from 6 m to 12 m from the heel, a band 6 m wide in total, which is not the one-sided limit.</p><p>Now take a triangular section with a vertical upstream face, \\(B\\) = 6 m and \\(W\\) = 600 kN per metre, reservoir empty and no uplift. Its centroid lies \\(B/3\\) = 2 m from the heel, so \\(e\\) = 1 m = \\(B/6\\) toward the heel.</p>\\[\\begin{aligned} \\sigma_{\\text{mean}} &amp;= 600/(6 \\times 1) = 100\\ \\text{kPa} \\\\ \\sigma_{\\text{heel}} &amp;= 100(1 + 1) = 200\\ \\text{kPa} \\\\ \\sigma_{\\text{toe}} &amp;= 100(1 - 1) = 0\\ \\text{kPa} \\end{aligned}\\]"
        },
        "moreHtml": "<p>For a solid circular section of diameter \\(D\\), \\(Z/A = D/8\\). Its kern is therefore a central circle of diameter \\(D/4\\), and a resultant must stay inside that circle for the whole section to remain in compression.</p>",
        "points": [
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
         }
        ],
        "sources": [
         {
          "id": "PAST-14-001",
          "label": "Set 14 · Q1"
         },
         {
          "id": "PAST-14-004",
          "label": "Set 14 · Q4"
         }
        ]
       },
       {
        "id": "sliding-shear-friction-and-anchorage",
        "title": "Sliding: shear friction, stepped bases and anchorage",
        "html": "<p>Sliding is checked by comparing the resistance available along a chosen plane with the driving horizontal force. In the shear-friction form, resistance is friction on the effective normal force, weight minus uplift, plus any cohesion that can genuinely be mobilised over the plane. A shear friction factor of more than 3 to 5 is commonly recommended, though the governing standard sets the criterion for each load case.</p><p>Stepping the base of a concrete or masonry dam, or adding a <em>shear key</em>, raises the shear strength by mobilising rock bearing and interlock, not by enlarging the friction area. Anchoring the base into the foundation rock helps against both sliding and overturning when the factor of safety is too low.</p>",
        "formulas": [
         {
          "label": "Shear-friction factor",
          "tex": "FS = \\dfrac{\\mu N + cA}{T}",
          "where": "<p>\\(N\\) effective normal force, \\(\\mu\\) friction coefficient, \\(cA\\) mobilisable cohesive resistance, \\(T\\) driving horizontal force.</p>"
         }
        ],
        "example": {
         "title": "Worked example: a sliding check",
         "html": "<p>Take \\(\\mu\\) = 0.6 on an effective normal force of 1000 kN, 200 kN of mobilisable cohesion and a 400 kN driving force:</p>\\[\\begin{aligned} R &amp;= 0.6 \\times 1000 + 200 = 800\\ \\text{kN} \\\\ FS &amp;= 800/400 = 2.0 \\end{aligned}\\]<p>The 2.0 is a calculated value to be judged against the governing criteria; it assumes the stated cohesion really acts on the chosen plane.</p>"
        },
        "points": [
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
        "id": "earth-dams-zoning-freeboard-and-crest",
        "title": "Earth dams: zoning, construction, freeboard and crest width",
        "html": "<p>A <em>zoned earth dam</em> gives each zone a task: the central core checks seepage, the outer shells give stability and bulk, filters retain migrating soil while passing water, drains discharge seepage safely and upstream protection resists waves. In the <em>rolled-fill</em> method the earth is laid in thin layers, brought to about its optimum moisture content and compacted by power rollers.</p><p>An earth dam must never be overtopped. Its <em>freeboard</em>, the height of the top above the maximum water level, keeps waves and floods off the crest, preserving stability, and in cold regions keeps the frost-cracked top zone above water.</p><p>For very low earth dams the top width is commonly taken as 0.2H + 3 m. It is a preliminary empirical value; access, compaction plant, seismic performance and the governing code may require more.</p>",
        "formulas": [
         {
          "label": "Top width of a very low earth dam",
          "tex": "b = 0.2H + 3"
         }
        ],
        "example": {
         "title": "Worked example: crest width for a 10 m dam",
         "html": "<p>Adopting the relation for a dam 10 m high:</p>\\[b = 0.2 \\times 10 + 3 = 5.0\\ \\text{m}\\]<p>Treat 5.0 m as a first estimate to be checked against access, compaction plant and seismic requirements.</p>"
        },
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
          "id": "PAST-16-035",
          "label": "Set 16 · Q35"
         }
        ]
       },
       {
        "id": "phreatic-line-and-sloughing",
        "title": "Seepage through earth dams: the phreatic line and sloughing",
        "html": "<p>The <em>phreatic line</em> is the top seepage line in an earth dam, the surface of zero gauge pore pressure where the water pressure equals atmospheric pressure. Under the Dupuit approximation, steady unconfined flow through homogeneous soil over a horizontal impervious base, \\(h^2\\) varies linearly with distance, so the line is a parabola.</p><p>Where seepage emerges on the wet downstream face, small slips progressively remove soil from it; this is <em>sloughing</em>, which steepens the slope and can lead to failure. Filters and drains keep the seepage line inside the dam. Internal piping, rapid-drawdown slips on the upstream face and crest overtopping are different mechanisms.</p>",
        "formulas": [
         {
          "label": "Dupuit discharge per unit width",
          "tex": "q = -k\\,h\\,\\dfrac{dh}{dx}"
         },
         {
          "label": "Integrated Dupuit profile",
          "tex": "h^2 = h_1^2 - \\dfrac{2q}{k}\\,x",
          "where": "<p>\\(h_1\\) is the saturated thickness at \\(x = 0\\); \\(h^2\\) linear in \\(x\\) describes a parabola.</p>"
         }
        ],
        "points": [
         {
          "html": "Sloughing is the progressive removal of soil from the D/S face of an earth dam.",
          "sources": [
           {
            "id": "PAST-07-004",
            "label": "Set 7 · Q4"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-07-004",
          "label": "Set 7 · Q4"
         }
        ]
       },
       {
        "id": "spillways-and-energy-dissipation",
        "title": "Spillways, shaft and siphon types, and energy dissipation",
        "html": "<p>A <em>spillway</em> releases surplus flood water from the reservoir to the river downstream in a controlled way, protecting the dam from overtopping; it is the safety valve of the reservoir. Its adequacy depends on flood routing, discharge capacity, gate reliability and energy dissipation.</p><p>At large dams with no room for an open spillway a <em>shaft spillway</em> is used: overflow enters around a flared, funnel-shaped circular inlet, the <em>morning glory</em>, and drops down a vertical shaft. The crest of a <em>siphon spillway</em> is fixed at the full reservoir level; it first passes ordinary overflow, then primes into full siphonic flow, with air admission governing its regime.</p>",
        "formulas": [
         {
          "label": "Sequent depth of a hydraulic jump",
          "tex": "y_2 = \\dfrac{y_1}{2}\\left(\\sqrt{1 + 8\\,Fr_1^2} - 1\\right)",
          "where": "<p>Rectangular channel; \\(y_1\\) and \\(Fr_1\\) are the depth and Froude number of the incoming supercritical flow.</p>"
         },
         {
          "label": "Incoming Froude number",
          "tex": "Fr_1 = \\dfrac{V_1}{\\sqrt{g\\,y_1}}"
         }
        ],
        "moreHtml": "<p>Flow leaving a spillway or sloping glacis is shallow, fast and supercritical. In a stilling basin with enough tailwater it forms a <em>hydraulic jump</em>, becoming deeper and slower while much of its excess energy turns into turbulence; the conjugate depths follow from momentum, because the jump loses energy by design. If the required sequent depth exceeds the tailwater depth, the jump would sweep out of the basin, and a <em>ski-jump</em> or flip bucket may throw the jet clear to an investigated plunge pool instead.</p>",
        "points": [
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
        "id": "outlets-gates-and-level-measurement",
        "title": "Outlets, gates and reservoir level measurement",
        "html": "<p>Outlets and sluiceways release water through or under the dam for downstream demands, including when the turbines are shut and the reservoir is below the crest. A conduit running full discharges like an orifice: the head is the reservoir level minus the tailwater, or minus the outlet centre if it discharges freely above the tailwater. A bell-mouth entry gives a coefficient of discharge of about 0.8.</p><p>Reservoir level can be measured <em>hydrostatically</em>: the gauge pressure read by a sensor in still water, divided by \\(\\rho g\\), gives the depth of water above it, and adding the sensor elevation gives the level.</p>",
        "formulas": [
         {
          "label": "Outlet discharge",
          "tex": "Q = C_d A \\sqrt{2gH}"
         },
         {
          "label": "Water-surface elevation from a pressure sensor",
          "tex": "z_{\\text{ws}} = z_s + \\dfrac{p}{\\rho g}",
          "where": "<p>\\(z_s\\) is the sensor elevation and \\(p\\) the gauge pressure it reads.</p>"
         }
        ],
        "example": {
         "title": "Worked examples: outlet discharges and a level reading",
         "html": "<p>A 4 m bell-mouthed tunnel between RL 226 m and 210 m: H = 16 m, A = 12.57 m<sup>2</sup>, so \\(Q = 0.8 \\times 12.57 \\times 17.72 \\approx 178\\) m<sup>3</sup>/s.</p><p>A 2 m sluice at RL 300 m with the reservoir at 330 m discharges freely under 30 m; with \\(C_d \\approx 0.65\\), \\(Q = 0.65 \\times 3.14 \\times 24.26 \\approx 50\\) cumecs.</p><p>A sensor 2 m above the datum reads a gauge pressure of 98.1 kPa:</p>\\[\\begin{aligned} \\dfrac{p}{\\rho g} &amp;= \\dfrac{98\\,100}{1000 \\times 9.81} = 10\\ \\text{m} \\\\ z_{\\text{ws}} &amp;= 2 + 10 = 12\\ \\text{m} \\end{aligned}\\]"
        },
        "moreHtml": "<p>Gate names describe mechanisms. A <em>fixed-wheel gate</em>, the most common vertical-lift gate today, has wheels mounted on the moving leaf running on fixed tracks. A <em>radial</em> or Tainter gate pivots on trunnions so that the water pressure acts near the pivot; the Kulekhani I spillway uses them. A <em>drum gate</em> rises and falls by buoyancy as water enters and leaves its chamber.</p><p>Trash racks guard the entrances of intakes and conduits; a drum gate on a spillway crest needs none at its entrance, but the passages that fill and empty its chamber must be kept clear of debris.</p><p>Flood capacity depends on the gates actually opening, so a tested operating system with standby power matters as much as the gate type.</p>",
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
        "label": "Elementary profile, no uplift",
        "tex": "B = \\dfrac{H}{\\sqrt{S_c}}"
       },
       {
        "label": "Effective normal force",
        "tex": "N = W - U"
       },
       {
        "label": "Base edge stresses",
        "tex": "\\sigma = \\dfrac{N}{B}\\left(1 \\pm \\dfrac{6e}{B}\\right)",
        "note": "Rectangular base, per metre length, linear stress and full contact."
       },
       {
        "label": "No tension, rectangular base",
        "tex": "|e| \\le \\dfrac{B}{6}"
       },
       {
        "label": "No tension, general section",
        "tex": "|e| \\le \\dfrac{Z}{A}"
       },
       {
        "label": "Triangular section, reservoir empty",
        "tex": "\\sigma_{\\text{heel}} = \\dfrac{2W}{B}, \\quad \\sigma_{\\text{toe}} = 0",
        "note": "Vertical upstream face, weight only, no uplift."
       },
       {
        "label": "Shear-friction factor",
        "tex": "FS = \\dfrac{\\mu N + cA}{T}"
       },
       {
        "label": "Life of a sediment allowance",
        "tex": "T = \\dfrac{V_{\\text{alloc}}}{V_{\\text{sed}}}",
        "note": "Constant deposition rate and no removal assumed."
       },
       {
        "label": "Top width of a very low earth dam",
        "tex": "b = 0.2H + 3",
        "note": "A preliminary empirical value in metres."
       },
       {
        "label": "Dupuit seepage",
        "tex": "q = -k\\,h\\,\\dfrac{dh}{dx}",
        "note": "Integrates to h<sup>2</sup> linear in x, a parabolic profile."
       },
       {
        "label": "Sequent depth",
        "tex": "y_2 = \\dfrac{y_1}{2}\\left(\\sqrt{1 + 8\\,Fr_1^2} - 1\\right)"
       },
       {
        "label": "Outlet discharge",
        "tex": "Q = C_d A \\sqrt{2gH}",
        "note": "Bell-mouth entry: C<sub>d</sub> about 0.8."
       },
       {
        "label": "Hydrostatic level",
        "tex": "z_{\\text{ws}} = z_s + \\dfrac{p}{\\rho g}",
        "note": "p is the gauge pressure at the sensor."
       }
      ],
      "cautions": [],
      "gaps": [
       "Arch, buttress and rockfill dam design and complete load combinations, including seismic, silt and wave loads, are not covered.",
       "Spillway discharge equations, design-flood selection and flood routing are not calculated here."
      ]
     },
     "ACiE0804": {
      "code": "ACiE0804",
      "questionCount": 4,
      "format": 2,
      "summary": "<p>This subchapter covers the headworks of run-of-river plants: the diversion weir or barrage with its under-sluices, pondage, submerged intakes and trash racks, forebay submergence, and settling basins with their overflow rate and flushing. The four past-paper questions test what pondage means, the minimum submergence of a penstock intake in a forebay, the Bieri settling-basin flushing system, and the statements about settling basins and their expansion slopes.</p>",
      "blocks": [
       {
        "id": "run-of-river-headworks-and-pondage",
        "title": "Run-of-river headworks, barrage bays and pondage",
        "html": "<p>A run-of-river scheme diverts part of the river through its headworks instead of storing large volumes. Water passes a diversion weir or barrage, an intake with a trash rack, a gravel trap and a settling basin before entering the headrace, and each part has its own task.</p><table><thead><tr><th scope='col'>Component</th><th scope='col'>Main task</th></tr></thead><tbody><tr><td>Main weir or barrage bays</td><td>Pass river flow and floods</td></tr><tr><td>Under-sluice bays</td><td>Low-level releases that keep near-bed sediment away from the intake</td></tr><tr><td>Intake with trash rack</td><td>Admit the design flow while excluding large debris</td></tr><tr><td>Gravel trap and settling basin</td><td>Remove coarse and then finer sediment</td></tr><tr><td>Flushing channel or outlets</td><td>Return trapped sediment to the river</td></tr></tbody></table><p>Gate type and bay purpose are separate: at the Sunkoshi barrage both the spillway bays and the under-sluices use radial gates. <em>Pondage</em> is the small storage behind the weir or in a forebay, used to store water for the peak period of the day; long-period storage in a reservoir is a different thing.</p>",
        "points": [
         {
          "html": "Pondage means storing water for use in the peak period of the day.",
          "sources": [
           {
            "id": "PAST-06-043",
            "label": "Set 6 · Q43"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-043",
          "label": "Set 6 · Q43"
         }
        ]
       },
       {
        "id": "intakes-trash-racks-and-forebay-submergence",
        "title": "Intakes, trash racks and forebay submergence",
        "html": "<p>An intake is <em>submerged</em> when its opening lies below the operating water surface, often near the river bottom; an opening raised above the bed to reduce bed-load entry is still submerged. A <em>trash rack</em> of parallel bars across the intake stops floating and submerged debris larger than the bar spacing from reaching gates, conduits and turbines. It does not remove fine sediment, and a partly blocked rack raises the head loss and the load on it, so it needs regular cleaning.</p><p>At the forebay the penstock entrance must be submerged deep enough to prevent air-entraining vortices. Gordon's formula gives the minimum submergence from the velocity in the penstock and its diameter, with c = 0.5434 for a symmetric approach and 0.7245 for an asymmetric one.</p>",
        "formulas": [
         {
          "label": "Gordon's minimum submergence",
          "tex": "S = c\\, V \\sqrt{D}"
         },
         {
          "label": "Head loss through a clean rack, Kirschmer form",
          "tex": "\\Delta h = K_t \\left(\\dfrac{t}{b}\\right)^{4/3} \\dfrac{v_0^2}{2g}\\,\\sin\\phi",
          "where": "<p>\\(K_t\\) bar-shape factor, \\(t\\) bar thickness, \\(b\\) clear spacing, \\(v_0\\) approach velocity and \\(\\phi\\) rack inclination to the horizontal.</p>"
         }
        ],
        "example": {
         "title": "Worked example: forebay submergence",
         "html": "<p>Q = 3.6 m<sup>3</sup>/s in a 1.55 m penstock: \\(V = 1.91\\) m/s, so \\(S = 0.5434 \\times 1.91 \\times \\sqrt{1.55}\\), about 1.3 m.</p>"
        },
        "points": [
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
          "id": "PAST-08-066",
          "label": "Set 8 · Q66"
         }
        ]
       },
       {
        "id": "settling-basins-overflow-rate-and-flushing",
        "title": "Settling basins: overflow rate, removal and flushing",
        "html": "<p>Settling basins, or desanders, remove silt that would wear the turbines. Gradual transitions widen and deepen the flow so that it slows to a quiet, near-laminar state and the particles settle before the outlet.</p><p>In the ideal discrete-settling model a particle is caught if it can fall through the basin depth while the water crosses the basin, so depth cancels out. The ratio of discharge to plan area is the <em>overflow rate</em>: particles settling at least that fast are fully removed, slower ones in proportion. At a given discharge, efficiency therefore rises with surface area until removal reaches 100%; turbulence and short-circuiting keep real basins below the ideal.</p><p>The settled sediment must be flushed. The Bieri system, used in Nepal at Middle Marsyangdi, flushes intermittently, not continuously: sensors detect the deposit and a travelling flushing unit removes it.</p>",
        "formulas": [
         {
          "label": "Overflow rate",
          "tex": "v_0 = \\dfrac{Q}{A}",
          "where": "<p>\\(A\\) is the plan area of the basin and \\(Q\\) the discharge through it.</p>"
         },
         {
          "label": "Ideal discrete-settling removal",
          "tex": "r = \\min\\left(\\dfrac{v_s A}{Q},\\ 1\\right)"
         },
         {
          "label": "Depth-mixed removal, a different model",
          "tex": "r = 1 - e^{-v_s A/Q}"
         },
         {
          "label": "Deposited volume over a period",
          "tex": "V_{\\text{dep}} = \\dfrac{r\\,C\\,Q\\,t}{\\rho_d}",
          "where": "<p>\\(C\\) is the sediment concentration in kg/m<sup>3</sup> and \\(\\rho_d\\) the dry bulk density of the deposit.</p>"
         }
        ],
        "example": {
         "title": "Worked example: doubling the plan area",
         "html": "<p>With \\(Q\\) = 2 m<sup>3</sup>/s and \\(A\\) = 250 m<sup>2</sup>, the overflow rate is 2/250 = 0.008 m/s. For particles settling at 0.004 m/s:</p>\\[\\begin{aligned} r_1 &amp;= 0.004 \\times 250/2 = 0.50 \\\\ r_2 &amp;= 0.004 \\times 500/2 = 1.00 \\end{aligned}\\]<p>Removal rises from 50% to 100% when the plan area doubles to 500 m<sup>2</sup> at the same flow; further area adds nothing for this particle size.</p>"
        },
        "moreHtml": "<p>The ideal trajectory model is not interchangeable with a depth-mixed model, in which turbulence keeps particles spread through the depth and removal follows an exponential law. For the same inputs that law gives about 39% and 63% instead of 50% and 100%. The removed fraction also sets how fast deposits build up, and so the flushing interval.</p><p>Transition slopes vary between design guides. The source behind the past-paper item quotes 1H:2V at the inlet and 1H:1V at the outlet.</p>",
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
      "formulaSheet": [
       {
        "label": "Gordon's minimum submergence",
        "tex": "S = c\\, V \\sqrt{D}",
        "note": "c = 0.5434 for a symmetric approach, 0.7245 for an asymmetric one."
       },
       {
        "label": "Trash-rack head loss",
        "tex": "\\Delta h = K_t \\left(\\dfrac{t}{b}\\right)^{4/3} \\dfrac{v_0^2}{2g}\\,\\sin\\phi",
        "note": "Clean rack; blockage raises the loss."
       },
       {
        "label": "Overflow rate",
        "tex": "v_0 = \\dfrac{Q}{A}"
       },
       {
        "label": "Ideal discrete-settling removal",
        "tex": "r = \\min\\left(\\dfrac{v_s A}{Q},\\ 1\\right)",
        "note": "Unmixed trajectories; depth cancels out."
       },
       {
        "label": "Depth-mixed removal",
        "tex": "r = 1 - e^{-v_s A/Q}",
        "note": "A different model; not interchangeable with the ideal one."
       },
       {
        "label": "Deposited volume",
        "tex": "V_{\\text{dep}} = \\dfrac{r\\,C\\,Q\\,t}{\\rho_d}"
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
       "Bed-load and suspended-sediment characterisation and sediment sampling are not covered.",
       "Settling-basin dimensions, flushing frequency and weir or barrage hydraulic design are not worked numerically."
      ]
     },
     "ACiE0805": {
      "code": "ACiE0805",
      "questionCount": 26,
      "format": 2,
      "summary": "<p>This subchapter covers the conveyance from intake to turbine: the forebay, penstock and tailrace, surge tanks and water hammer, penstock sizing, friction loss and wall thickness, and the excavation, support and lining of tunnels. The past-paper questions test the purpose of surge tanks, what the penstock, forebay and tailrace connect, penstock velocity, diameter and thickness, tunnelling methods for hard and soft ground, heading and benching, linings, the drill-and-blast cycle, scaling and mucking, and tunnel air limits.</p>",
      "blocks": [
       {
        "id": "waterway-forebay-penstock-and-tailrace",
        "title": "The waterway: forebay, penstock and tailrace",
        "html": "<p>Water passes from the intake along the headrace, a canal or tunnel, to a forebay or surge tank, down the penstock to the turbine, and out through the draft tube and tailrace. The <em>forebay</em> is the basin at the end of the headrace, or power, channel from which the penstocks draw water; it gives short-term storage and regulation as the demand changes.</p><p>The <em>penstock</em> is the enclosed pressure pipe that delivers water from the forebay or surge tank to the turbine: to the scroll case of a Francis machine or the nozzles of a Pelton. The <em>tailrace</em> returns the water leaving the turbines, through the draft tubes, to the river. Questions sometimes list the flow as reservoir, penstock, surge tank, turbine; in an actual layout the surge tank stands at the head of the penstock.</p>",
        "formulas": [
         {
          "label": "Forebay balancing volume",
          "tex": "V_b = (Q_{\\text{out}} - Q_{\\text{in}})\\, t"
         }
        ],
        "example": {
         "title": "Worked example: a 10-minute demand step",
         "html": "<p>The canal keeps delivering 2 m<sup>3</sup>/s while the machines draw 4 m<sup>3</sup>/s for 10 minutes before the canal flow catches up:</p>\\[\\begin{aligned} V_b &amp;= (4 - 2) \\times 10 \\times 60 \\\\ &amp;= 1200\\ \\text{m}^3 \\end{aligned}\\]<p>The forebay must hold at least 1200 m<sup>3</sup> of usable storage above the level that keeps the penstock intake safely submerged.</p>"
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
         }
        ]
       },
       {
        "id": "surge-tanks-and-water-hammer",
        "title": "Surge tanks and water hammer",
        "html": "<p>When turbine gates close suddenly, the moving water column in the penstock and tunnel is stopped and the pressure rises sharply: <em>water hammer</em>. A <em>surge tank</em> provides a free water surface close to the turbines. On load rejection it takes in water and absorbs the pressure rise while the headrace column slows; on a sudden demand it supplies water until the flow in the tunnel speeds up.</p><p>It therefore relieves water-hammer pressures, reduces the pressure swings in the conduit and protects the penstock, turbine and runner from damage. It does not store water for supply, keep the pressure constant or create surges, and pressure waves still occur between the tank and the turbine, so closure timing matters.</p><p>A covered tank is still vented to the atmosphere; surge tanks are not sealed to keep out debris. A sealed <em>air-cushion chamber</em> is a different, deliberate design that uses trapped air.</p>",
        "formulas": [
         {
          "label": "Joukowsky pressure-head rise",
          "tex": "\\Delta h = \\dfrac{a\\,\\Delta v}{g}",
          "where": "<p>\\(a\\) is the pressure-wave speed and \\(\\Delta v\\) the velocity change on rapid closure.</p>"
         },
         {
          "label": "Critical closure time",
          "tex": "T_c = \\dfrac{2L}{a}",
          "where": "<p>Closure faster than \\(T_c\\) over a conduit of length \\(L\\) counts as rapid and produces the full Joukowsky rise.</p>"
         }
        ],
        "moreHtml": "<p>These relations show why the tank helps. A free surface near the turbine shortens the length \\(L\\) over which fast pressure waves travel, so a given closure is more often slow relative to \\(2L/a\\) and the penstock pressure rise falls, while the long headrace responds with slow mass oscillation rather than sharp water hammer.</p>",
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
        "id": "penstock-velocity-diameter-and-thickness",
        "title": "Penstock velocity, diameter, friction loss and wall thickness",
        "html": "<p>Economic penstock velocity rises with head, from 2 to 3 m/s at low heads to about 7 m/s in high-head plants, and fixes the diameter through continuity. A higher velocity gives a smaller, cheaper pipe but larger losses and surges.</p><p>Friction loss follows the Darcy–Weisbach equation, so with the same length, diameter and friction factor it grows with the square of the velocity, and every metre lost comes off the net head. The wall resists the internal pressure in hoop tension; the ASME rule gives the thickness in cm, allowing for joint efficiency and 1.5 mm of corrosion.</p>",
        "formulas": [
         {
          "label": "Penstock diameter",
          "tex": "D = \\sqrt{\\dfrac{4Q}{\\pi V}}"
         },
         {
          "label": "Darcy–Weisbach friction loss",
          "tex": "h_f = f\\,\\dfrac{L}{D}\\,\\dfrac{V^2}{2g}"
         },
         {
          "label": "Loss ratio at fixed f, L and D",
          "tex": "\\dfrac{h_{f2}}{h_{f1}} = \\left(\\dfrac{V_2}{V_1}\\right)^2"
         },
         {
          "label": "ASME penstock thickness (cm)",
          "tex": "t = \\dfrac{P R}{\\sigma \\eta - 0.6P} + 0.15"
         },
         {
          "label": "Hoop stress in a thin pipe",
          "tex": "\\sigma = \\dfrac{p D}{2t}"
         }
        ],
        "example": {
         "title": "Worked examples: diameter and loss ratio",
         "html": "<p>Q = 0.7 m<sup>3</sup>/s at 2 m/s, in metres:</p>\\[D = \\sqrt{\\dfrac{4 \\times 0.7}{\\pi \\times 2}} = \\sqrt{0.446} \\approx 0.667\\]<p>Adopting 7 m/s for 7 m<sup>3</sup>/s gives \\(A = 7/7 = 1\\) m<sup>2</sup> and \\(D = \\sqrt{4/\\pi} = 1.128\\) m, about 1.13 m. Raising the velocity from 4 to 6 m/s in the same pipe at constant \\(f\\):</p>\\[\\dfrac{h_{f2}}{h_{f1}} = \\left(\\dfrac{6}{4}\\right)^2 = 2.25\\]<p>The loss becomes 2.25 times the initial value, not 1.5 times.</p>"
        },
        "points": [
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
        "id": "tunnelling-methods-and-linings",
        "title": "Tunnelling methods, presupport and linings",
        "html": "<p>Hard rock is tunnelled by the full-face, heading-and-benching or drift methods. In <em>heading and benching</em> the upper heading is driven ahead and the bench follows, giving a working platform and allowing drilling and mucking at the same time; but muck from the heading must be dropped or carried over the bench, so its removal is not easy.</p><p>Soft ground needs support as it is opened. <em>Forepoling</em> drives poles, spiles or boards ahead of the face to hold the ground above the newly exposed roof in loose, running soil; needle-beam and shield methods are also soft-ground techniques. Shield-driven tunnels under water were traditionally lined with bolted cast-iron segments, strong, watertight and load-bearing at once; reinforced-concrete segments now serve the same purpose.</p>",
        "moreHtml": "<p>Lining does not always remove the need for drainage. No drain position guarantees zero groundwater pressure on a lining, and the drainage of an operating pressure tunnel needs its own design.</p>",
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
        "id": "drill-and-blast-cycle-and-tunnel-air",
        "title": "The drill-and-blast cycle, trimmer holes, scaling and tunnel air",
        "html": "<p>Rock tunnels advance in a repeated cycle:</p><ol><li>Mark the tunnel profile.</li><li>Set up and drill, then charge and blast.</li><li>Remove the foul gases by ventilation.</li><li>Check for and clear any misfire.</li><li>Clear the broken rock, which is mucking.</li></ol><p><em>Trimmer</em> holes around the perimeter give the tunnel its final shape and limit overbreak. Knocking loose rock off the crown and walls after a blast is strictly called scaling.</p><p>Ventilation must keep the air safe: oxygen not less than 19.5%, carbon dioxide not more than 0.5% and hydrogen sulphide not more than 0.001%, about 10 ppm.</p>",
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
        "label": "Continuity, circular conduit",
        "tex": "D = \\sqrt{\\dfrac{4Q}{\\pi V}}"
       },
       {
        "label": "Darcy–Weisbach friction loss",
        "tex": "h_f = f\\,\\dfrac{L}{D}\\,\\dfrac{V^2}{2g}"
       },
       {
        "label": "Loss ratio at fixed f, L and D",
        "tex": "\\dfrac{h_{f2}}{h_{f1}} = \\left(\\dfrac{V_2}{V_1}\\right)^2"
       },
       {
        "label": "ASME penstock thickness",
        "tex": "t = \\dfrac{P R}{\\sigma \\eta - 0.6P} + 0.15"
       },
       {
        "label": "Hoop stress in a pipe",
        "tex": "\\sigma = \\dfrac{p D}{2t}"
       },
       {
        "label": "Forebay balancing volume",
        "tex": "V_b = (Q_{\\text{out}} - Q_{\\text{in}})\\, t"
       },
       {
        "label": "Joukowsky head rise",
        "tex": "\\Delta h = \\dfrac{a\\,\\Delta v}{g}",
        "note": "For closure faster than the critical time."
       },
       {
        "label": "Critical closure time",
        "tex": "T_c = \\dfrac{2L}{a}"
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
       "Surge-tank stability, mass-oscillation amplitude and chamber sizing are not worked.",
       "Tunnel cross-section shapes, lining design, rock cover for pressure tunnels and penstock anchorage are not covered."
      ]
     },
     "ACiE0806": {
      "code": "ACiE0806",
      "questionCount": 22,
      "format": 2,
      "summary": "<p>This subchapter covers the machines of a hydro station: impulse and reaction turbines, specific speed and unit quantities, Pelton jets and guide-vane velocities, draft tubes and cavitation, efficiencies, generators and governors, pumps and reversible pump-turbines, and the powerhouse. The past-paper questions test turbine types, specific speed and unit power, draft tubes and their pressure limit, jet and guide-vane velocities, hydraulic efficiency, governors, pumped storage and the power law of centrifugal pumps.</p>",
      "blocks": [
       {
        "id": "impulse-and-reaction-turbines",
        "title": "Impulse and reaction turbines: Pelton, Francis and Kaplan",
        "html": "<p>In an <em>impulse</em> turbine the nozzle turns the whole head into jet velocity before the water strikes the runner at atmospheric pressure. The Pelton wheel is the classic high-head example; Turgo and cross-flow turbines also work with free jets.</p><p>In a <em>reaction</em> turbine the runner is full of water under pressure, and the water enters with both pressure and kinetic energy. The fixed guide blades act as nozzles, so pressure falls and velocity rises through them, and the rest of the expansion happens in the runner. The <em>Francis</em> is a mixed-flow reaction turbine for medium heads, generally with 16 to 24 runner blades; the <em>Kaplan</em> is an axial-flow reaction turbine with adjustable blades for low heads and large, variable flows.</p><table><thead><tr><th scope='col'>Turbine</th><th scope='col'>Class and flow</th><th scope='col'>Typical duty</th></tr></thead><tbody><tr><td>Pelton</td><td>Impulse, free jet on buckets</td><td>High head, relatively low discharge</td></tr><tr><td>Francis</td><td>Reaction, mixed flow</td><td>Medium head and discharge</td></tr><tr><td>Kaplan</td><td>Reaction, axial flow, adjustable blades</td><td>Low head, large variable discharge</td></tr></tbody></table>",
        "moreHtml": "<p>The <em>powerhouse</em> houses the turbine-generator units and auxiliaries on proper foundations, protects them from the weather and provides cranes and clearances for maintenance. Protecting the turbine and runner from water-hammer damage is, by contrast, the surge tank's role. A traditional <em>watermill</em> shows hydropower at its simplest: a wooden wheel acts as the turbine and turns a shaft to grind grain, with no generator at all.</p>",
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
        "html": "<p>The <em>specific speed</em> of a turbine is the speed of a geometrically similar turbine that would develop unit power under unit head. It identifies the type: roughly 10 to 35 for a single-jet Pelton wheel, 60 to 300 for a Francis and 300 to 1000 for a Kaplan, which has the highest. Two turbines of the same specific speed under the same head have \\(N\\sqrt{P}\\) constant.</p><p>Unit quantities scale one turbine's performance to a head of 1 m. <em>Unit power</em> is the power it would develop under unit head: for a machine of fixed size, discharge varies as \\(\\sqrt{H}\\), so power varies as \\(H^{3/2}\\). Unit speed and unit discharge are defined in the same way.</p>",
        "formulas": [
         {
          "label": "Specific speed and unit power",
          "tex": "N_s = \\dfrac{N\\sqrt{P}}{H^{5/4}}, \\qquad P_u = \\dfrac{P}{H^{3/2}}"
         }
        ],
        "example": {
         "title": "Worked examples: specific speed and unit power",
         "html": "<p>2000 hp at 300 rpm under 150 m: \\(N_s = 300\\sqrt{2000}/150^{1.25}\\), about 25.6, a Pelton.</p><p>10 000 hp at 500 rpm under 81 m: \\(N_s = 50\\,000/243 \\approx 206\\), a Francis.</p><p>Same \\(N_s\\) and head, 400 kW at 1000 rpm: for 100 kW, \\(N = 1000\\sqrt{400/100} = 2000\\) rpm.</p><p>A turbine giving 800 kW at 16 m: \\(16^{3/2} = 64\\), so \\(P_u = 800/64 = 12.5\\) kW.</p>"
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
        "id": "pelton-jet-and-guide-vane-velocities",
        "title": "Pelton jet velocity, guide-vane velocities and why a Pelton has no draft tube",
        "html": "<p>A Pelton jet moves at the free-fall speed for the net head, reduced once by the nozzle's coefficient of velocity, about 0.97 to 0.99. Jet speed then fixes the bucket speed for best efficiency, in theory about half the jet speed.</p><p>Water leaves the Pelton buckets as a free discharge at about atmospheric pressure, and the wheel is set above the tailwater, so it lacks the flooded outlet a draft tube needs; Pelton turbines use no draft tube.</p><p>At the inlet of an inward-flow reaction turbine the velocity of flow is the radial component of the absolute velocity leaving the guide vanes, fixed by the guide-vane angle.</p>",
        "formulas": [
         {
          "label": "Flow velocity and Pelton jet velocity",
          "tex": "V_f = V \\sin\\alpha, \\qquad V = C_v\\sqrt{2gH}"
         }
        ],
        "example": {
         "title": "Worked examples: jet speed and guide-vane velocity",
         "html": "<p>With \\(H\\) = 100 m and \\(C_v\\) = 0.98:</p>\\[\\begin{aligned} V_{\\text{ideal}} &amp;= \\sqrt{2 \\times 9.81 \\times 100} \\\\ &amp;= \\sqrt{1962} = 44.294\\ \\text{m/s} \\\\ V &amp;= 0.98 \\times 44.294 \\\\ &amp;= 43.41\\ \\text{m/s} \\end{aligned}\\]<p>Applying 0.98 twice would give 42.54 m/s, an understatement.</p><p>With \\(V_f = 2\\) m/s and guide vanes at 30°: \\(V = 2/\\sin 30^\\circ = 4\\) m/s.</p>"
        },
        "points": [
         {
          "html": "The jet velocity at a Pelton inlet is \\(V = C_v\\sqrt{2gH}\\).",
          "sources": [
           {
            "id": "PAST-16-025",
            "label": "Set 16 · Q25"
           }
          ]
         },
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
          "html": "A flow velocity of 2 m/s with guide vanes at 30° means water leaves the guide vanes at 4 m/s.",
          "sources": [
           {
            "id": "PAST-14-075",
            "label": "Set 14 · Q75"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-16-025",
          "label": "Set 16 · Q25"
         },
         {
          "id": "PAST-04-057",
          "label": "Set 4 · Q57"
         },
         {
          "id": "PAST-14-075",
          "label": "Set 14 · Q75"
         }
        ]
       },
       {
        "id": "draft-tubes-and-cavitation",
        "title": "Draft tubes, pressure recovery and cavitation",
        "html": "<p>A reaction turbine discharges into a diverging <em>draft tube</em> connected to the runner outlet, with its own outlet submerged in the tailwater. It slows the water and converts its kinetic energy into pressure energy, so the turbine can also be set above the tailwater; total head still falls by the tube's own loss.</p><p>Suction below the runner lowers the local pressure. The pressure in the draft tube must not fall below about one third of atmospheric pressure, or cavitation begins; strictly, the local absolute pressure is compared with the vapour pressure of the water. A high-altitude site has lower atmospheric pressure and so less margin.</p>",
        "formulas": [
         {
          "label": "Draft-tube pressure-head rise",
          "tex": "\\begin{aligned} \\dfrac{p_2 - p_1}{\\rho g} &= (z_1 - z_2) \\\\ &\\quad + \\dfrac{V_1^2 - V_2^2}{2g} - h_L \\end{aligned}",
          "where": "<p>Section 1 is the inlet at the runner and section 2 the outlet; kinetic-energy correction factors are taken as 1.</p>"
         },
         {
          "label": "Thoma cavitation number",
          "tex": "\\sigma = \\dfrac{H_{\\text{atm}} - H_v - H_s}{H}",
          "where": "<p>\\(H_{\\text{atm}}\\) and \\(H_v\\) are atmospheric and vapour pressure heads, \\(H_s\\) the runner setting above tailwater and \\(H\\) the net head; \\(\\sigma\\) must exceed the machine's critical value.</p>"
         }
        ],
        "example": {
         "title": "Worked example: pressure recovery in a draft tube",
         "html": "<p>Flow slows from 8 to 4 m/s, the outlet is 3 m below the inlet and the loss is 0.40 m:</p>\\[\\begin{aligned} \\Delta\\!\\left(\\dfrac{p}{\\rho g}\\right) &amp;= 3 + \\dfrac{8^2 - 4^2}{2 \\times 9.81} - 0.40 \\\\ &amp;= 3 + 2.446 - 0.40 \\\\ &amp;= 5.05\\ \\text{m} \\end{aligned}\\]<p>The outlet pressure head is about 5.05 m above the inlet value. Leaving out the loss would give 5.45 m.</p>"
        },
        "points": [
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
         }
        ],
        "sources": [
         {
          "id": "PAST-12-056",
          "label": "Set 12 · Q56"
         },
         {
          "id": "PAST-08-017",
          "label": "Set 8 · Q17"
         }
        ]
       },
       {
        "id": "efficiency-generators-and-governors",
        "title": "Hydraulic efficiency, water-to-wire efficiency and the governor",
        "html": "<p><em>Hydraulic power</em>, \\(\\rho g Q H\\), is the rate at which the flow delivers energy through the head. A turbine's <em>hydraulic efficiency</em> is the power the water transfers to the runner divided by the power available at the inlet; <em>mechanical efficiency</em> compares shaft power with runner power, and their product is the water-to-shaft efficiency. Hydro generators give high efficiency over a wide range of load, but auxiliary losses and part-load turbine efficiency lower whole-plant efficiency at low output.</p><p>The <em>governor</em> senses speed changes with load and controls the flow of working fluid through the wicket gates or spear valve, keeping the mean speed, and so the frequency, constant. When an isolated unit sheds load it tends to accelerate, and the governor cuts the admitted flow until power balance returns.</p>",
        "formulas": [
         {
          "label": "Hydraulic power",
          "tex": "P_h = \\rho g Q H"
         },
         {
          "label": "Hydraulic and mechanical efficiency",
          "tex": "\\eta_h = \\dfrac{P_{\\text{runner}}}{P_h}, \\quad \\eta_m = \\dfrac{P_{\\text{shaft}}}{P_{\\text{runner}}}"
         },
         {
          "label": "Water-to-shaft efficiency",
          "tex": "\\eta_o = \\eta_h\\, \\eta_m"
         },
         {
          "label": "Net station output",
          "tex": "P_{\\text{net}} = P_h\\, \\eta_t\\, \\eta_g - P_{\\text{aux}}",
          "where": "<p>\\(\\eta_t\\) turbine efficiency, \\(\\eta_g\\) generator efficiency and \\(P_{\\text{aux}}\\) the station auxiliary load.</p>"
         },
         {
          "label": "Synchronous speed of a generator",
          "tex": "N = \\dfrac{120 f}{p}",
          "where": "<p>\\(N\\) in rpm, \\(f\\) the grid frequency in Hz and \\(p\\) the total number of poles, always an even number.</p>"
         }
        ],
        "example": {
         "title": "Worked examples: an efficiency chain and part-load output",
         "html": "<p>With 1000 kW supplied, 900 kW to the runner and 855 kW at the shaft: \\(\\eta_h\\) = 900/1000 = 90%, \\(\\eta_m\\) = 855/900 = 95% and \\(\\eta_o\\) = 855/1000 = 85.5%.</p><p>A unit with 10 MW of hydraulic input, \\(\\eta_t\\) = 0.92, \\(\\eta_g\\) = 0.97 and 0.1 MW of auxiliaries:</p>\\[\\begin{aligned} P_{\\text{net}} &amp;= 10 \\times 0.92 \\times 0.97 - 0.1 \\\\ &amp;= 8.82\\ \\text{MW} \\end{aligned}\\]<p>That is about 88% water to wire. At quarter load, with part-load \\(\\eta_t\\) = 0.80 and \\(\\eta_g\\) = 0.95, the net output is 1.9 − 0.1 = 1.8 MW, only 72%, although the generator is still efficient.</p>"
        },
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
         }
        ]
       },
       {
        "id": "pumps-pump-turbines-and-similarity",
        "title": "Pumps, reversible pump-turbines and similarity laws",
        "html": "<p>A pump adds energy to water. Its useful output is \\(\\gamma Q H\\), the power needed to lift the flow, and the shaft input is that divided by the pump efficiency. A <em>centrifugal pump</em> is conceptually the reverse of an inward radial-flow reaction turbine: water enters at the eye and moves outward while shaft work raises its energy.</p><p>Pumped-storage plants use <em>reversible pump-turbines</em> with motor-generators, pumping water up off-peak and generating at the peak with one machine; sharing it keeps efficiency high and cuts the cost of the plant.</p><p>For geometrically similar pumps, discharge scales as \\(ND^3\\) and head as \\(N^2D^2\\), so power varies as \\(N^3D^5\\): at a given speed, as the fifth power of the diameter. Trimming one impeller in an unchanged casing is not a similar family and follows roughly a cube law instead.</p>",
        "formulas": [
         {
          "label": "Pump shaft input",
          "tex": "P_s = \\dfrac{\\rho g Q H}{\\eta_p}"
         },
         {
          "label": "Similarity of discharge and head",
          "tex": "Q \\propto N D^3, \\quad H \\propto N^2 D^2"
         },
         {
          "label": "Power of similar pumps",
          "tex": "P \\propto N^3 D^5"
         },
         {
          "label": "Limited impeller trim, supplier-permitted",
          "tex": "\\dfrac{P_2}{P_1} = \\left(\\dfrac{D_2}{D_1}\\right)^3"
         }
        ],
        "example": {
         "title": "Worked examples: shaft input, doubling the size and trimming",
         "html": "<p>Pumping 0.040 m<sup>3</sup>/s against 25 m at 80% efficiency:</p>\\[\\begin{aligned} P_h &amp;= 1000 \\times 9.81 \\times 0.040 \\times 25 \\\\ &amp;= 9810\\ \\text{W} \\\\ P_s &amp;= 9.81/0.80 = 12.26\\ \\text{kW} \\end{aligned}\\]<p>Doubling the diameter of a similar 10 kW pump at the same speed gives \\(10 \\times 2^5 = 320\\) kW; the flow ratio \\(2^3 = 8\\) alone would give only 80 kW, missing the fourfold head rise. Trimming a 20 kW pump to 0.90 of its diameter under the permitted cube law gives \\(20 \\times 0.729 = 14.58\\) kW.</p>"
        },
        "points": [
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
        "tex": "P_u = \\dfrac{P}{H^{3/2}}",
        "note": "A given turbine at corresponding operation."
       },
       {
        "label": "Pelton jet velocity",
        "tex": "V = C_v\\sqrt{2gH}"
       },
       {
        "label": "Velocity of flow at the guide vanes",
        "tex": "V_f = V \\sin\\alpha"
       },
       {
        "label": "Hydraulic power",
        "tex": "P_h = \\rho g Q H",
        "note": "Equals 9.81QH kW for Q in m<sup>3</sup>/s and H in m."
       },
       {
        "label": "Hydraulic efficiency",
        "tex": "\\eta_h = \\dfrac{P_{\\text{runner}}}{\\rho g Q H}"
       },
       {
        "label": "Efficiency chain, leakage neglected",
        "tex": "\\eta_o = \\eta_h\\, \\eta_m"
       },
       {
        "label": "Draft-tube pressure-head rise",
        "tex": "\\begin{aligned} \\dfrac{p_2 - p_1}{\\rho g} &= (z_1 - z_2) \\\\ &\\quad + \\dfrac{V_1^2 - V_2^2}{2g} - h_L \\end{aligned}"
       },
       {
        "label": "Thoma cavitation number",
        "tex": "\\sigma = \\dfrac{H_{\\text{atm}} - H_v - H_s}{H}"
       },
       {
        "label": "Pump shaft input",
        "tex": "P_s = \\dfrac{\\rho g Q H}{\\eta_p}"
       },
       {
        "label": "Similarity of discharge and head",
        "tex": "Q \\propto N D^3, \\quad H \\propto N^2 D^2"
       },
       {
        "label": "Power of similar pumps",
        "tex": "P \\propto N^3 D^5",
        "note": "At fixed speed, power scales with the fifth power of diameter."
       },
       {
        "label": "Limited impeller trim",
        "tex": "\\dfrac{P_2}{P_1} = \\left(\\dfrac{D_2}{D_1}\\right)^3",
        "note": "Only where the supplier permits it."
       },
       {
        "label": "Net station output",
        "tex": "P_{\\text{net}} = P_h\\, \\eta_t\\, \\eta_g - P_{\\text{aux}}"
       },
       {
        "label": "Synchronous speed",
        "tex": "N = \\dfrac{120 f}{p}"
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
       "Velocity triangles beyond the guide-vane relation, and detailed Francis or Pelton runner design, are not worked.",
       "Scroll-casing sizing, generator pole calculations and powerhouse dimensions are not quantified."
      ]
     }
    });
})();
