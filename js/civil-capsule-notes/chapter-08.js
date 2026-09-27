(function () {
    "use strict";
    window.CIVIL_CAPSULE_NOTE_TOPICS = window.CIVIL_CAPSULE_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_CAPSULE_NOTE_TOPICS, {
      "ACiE0801": {
        "code": "ACiE0801",
        "questionCount": 8,
        "format": 2,
        "summary": "<p>This subchapter covers how hydropower projects are screened, appraised and framed in Nepal: why steep head is an opportunity rather than proof of a good site, how supply options and imports are compared on equal dependable service, the legal and policy basis of the sector, and early milestones, delivery models and financing roles. The capsule items test seasonal flow-and-demand screening, discounted life-cycle comparison, the Government's rule-making power, the Hydropower Development Policy 2058, Pharping's 1911 commissioning, BOOT concessions and co-financing.</p>",
        "blocks": [
          {
            "id": "head-flow-and-demand",
            "title": "Nepal's steep relief: head is an opportunity, not proof of a good site",
            "html": "<p>Nepal's rivers fall steeply, so a large <em>gross head</em> is easy to find on a map. Head is only one of the factors that set output. Power is the product of usable discharge, net head and overall efficiency, so a high drop carrying little water still yields little power.</p><p>River flow is strongly seasonal. Monsoon rain and snowmelt swell the rivers, while dry-season flow may shrink sharply, just when year-round demand still has to be met. A defensible suitability check therefore compares the seasonal usable flow and the net head with the demand the scheme must serve, period by period.</p><p>Geology, sediment, access and the conveyance and delivery system then decide whether that hydraulic potential can be built and operated. A general statement that hydro suits Nepal describes a national opportunity; it cannot certify reliability at a site whose hydrology has not been studied.</p>",
            "formulas": [
              {
                "label": "Hydropower output",
                "tex": "P = \\rho g Q H_n \\eta",
                "where": "<p>\\(Q\\) is the usable discharge in m³/s, \\(H_n\\) the net head in m and \\(\\eta\\) the overall efficiency. With water at 1000 kg/m³ and \\(g\\) = 9.81 m/s², \\(P\\) comes out in watts.</p>"
              }
            ],
            "example": {
              "title": "Illustrative example: the same head in two seasons",
              "html": "<p>Take a net head of 200 m and an overall efficiency of 0.85. Monsoon flow is 20 m³/s, but the dry-season usable flow is only 2 m³/s.</p>\\[\\begin{aligned} P_{\\text{dry}} &amp;= 9810 \\times 2 \\times 200 \\times 0.85 \\\\ &amp;= 3\\,335\\,400\\ \\text{W} \\approx 3.34\\ \\text{MW} \\end{aligned}\\]<p>The same equation with 20 m³/s gives about 33.4 MW. Sizing firm supply from the monsoon figure would overstate winter output tenfold; the dry-season value is what year-round demand can rely on.</p>"
            },
            "moreHtml": "<p>Three screening traps recur: choosing a site for its elevation drop alone, treating monsoon peak flow as dependable supply, and reading installed generator capacity as winter output. Each forgets that capacity produces energy only when water and head are available at the time of need.</p><p>Planning studies also rank potential in tiers. <em>Gross</em>, or theoretical, potential counts all runoff falling through all available head; <em>technical</em> potential keeps what feasible schemes could harness; <em>economic</em> potential keeps what is cost-effective against alternatives. Each tier is smaller than the one before it.</p>",
            "points": [
              {
                "html": "A year-round suitability check compares the seasonal usable flow and net head with the demand to be served; the largest mapped elevation drop or the monsoon peak flow cannot show dependable supply.",
                "sources": [
                  {
                    "id": "CAP4-08-00002",
                    "label": "p. 30; topic 8 point 2"
                  }
                ]
              },
              {
                "html": "Installed generator capacity is not winter output: a unit produces energy only when usable flow and head are available at the time of need.",
                "sources": [
                  {
                    "id": "CAP4-08-00002",
                    "label": "p. 30; topic 8 point 2"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00002",
                "label": "p. 30; topic 8 point 2"
              }
            ]
          },
          {
            "id": "life-cycle-appraisal-and-imports",
            "title": "Appraising supply options and imports on equivalent dependable service",
            "html": "<p>Low fuel cost is hydro's best-known economic strength, but it is not the whole comparison. A remote site may need a long access road, a lengthy transmission line and heavy civil works before any energy is delivered, and those costs can outweigh the fuel saving.</p><p>The fair test is a <em>discounted life-cycle cost</em> comparison between alternatives that provide the same dependable service. It counts capital cost and its timing, the construction period, operation and maintenance, rehabilitation and losses, and credits the energy delivered when it is needed. Equal nameplate MW does not make two plants equivalent, because units of equal rating can deliver very different firm output.</p><p>The same logic applies to cross-border electricity purchases during seasonal shortages. Imports may relieve load shedding while domestic projects are built, so they are judged on reliability, delivered cost, supply and strategic risk, and their effect on domestic investment. Counting imported MWh as domestic generation, or judging imports only by a self-sufficiency ratio, distorts capacity planning.</p>",
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
            "points": [
              {
                "html": "Whether a remote hydro site is the most economical supply is decided by discounted life-cycle costs for equivalent dependable service, counting roads, transmission and civil works, not by fuel or turbine prices alone.",
                "sources": [
                  {
                    "id": "CAP4-08-00006",
                    "label": "p. 30; topic 8 point 6"
                  }
                ]
              },
              {
                "html": "Temporary cross-border imports are tested by comparing reliability, cost, supply risk and domestic investment effects, not by the annual self-sufficiency ratio or contract price alone.",
                "sources": [
                  {
                    "id": "CAP4-08-00081",
                    "label": "p. 32; topic 8 point 88"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00006",
                "label": "p. 30; topic 8 point 6"
              },
              {
                "id": "CAP4-08-00081",
                "label": "p. 32; topic 8 point 88"
              }
            ]
          },
          {
            "id": "legal-and-policy-framework",
            "title": "Electricity Act 2049, Electricity Rules 2050 and Hydropower Development Policy 2058",
            "html": "<p>Nepal's electricity framework separates an <em>Act</em>, the rules made under it and policy. The Electricity Act, 2049 (1992) gives the Government of Nepal rule-making power in section 40, and the Electricity Rules, 2050 (1993) are subordinate legislation made under that delegated power. Older texts may name His Majesty's Government, reflecting the period of drafting.</p><p>The rules are neither a decision of the utility's board nor a new principal Act. A power purchase agreement is a contract, and an operator's internal rules are not national regulations.</p><p>Policy sets objectives rather than legal rules. The Hydropower Development Policy, 2058 (2001) is a Government policy, not a Nepal Electricity Authority company policy. Its consumer-service objective, under section 3, is that consumers receive reliable electricity at low cost; installed MW, exports or construction speed are different measures and cannot stand in for it.</p><table><thead><tr><th scope='col'>Instrument</th><th scope='col'>Made by</th><th scope='col'>Nature</th></tr></thead><tbody><tr><td>Electricity Act, 2049 (1992)</td><td>Legislature</td><td>Principal Act</td></tr><tr><td>Electricity Rules, 2050 (1993)</td><td>Government of Nepal, section 40</td><td>Subordinate legislation</td></tr><tr><td>Hydropower Development Policy, 2058 (2001)</td><td>Government of Nepal</td><td>Policy objectives</td></tr><tr><td>Power purchase agreement</td><td>Contracting parties</td><td>Contract</td></tr></tbody></table>",
            "moreHtml": "<p>These items identify a historical framework. They do not establish every present approval step, the functions of later institutions or any consolidated current policy, so dated wording should be checked against the edition in force.</p>",
            "points": [
              {
                "html": "Nepal's Electricity Rules, 2050 (1993) were made by the Government of Nepal under the delegated rule-making power in section 40 of the Electricity Act, 2049 (1992).",
                "sources": [
                  {
                    "id": "CAP4-08-00009",
                    "label": "p. 30; topic 8 point 9"
                  }
                ]
              },
              {
                "html": "The consumer-service objective of the Hydropower Development Policy, 2058 (2001), a Government rather than NEA document, is reliable electricity supplied to consumers at low cost.",
                "sources": [
                  {
                    "id": "CAP4-08-00091",
                    "label": "p. 33; topic 8 point 101"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00009",
                "label": "p. 30; topic 8 point 9"
              },
              {
                "id": "CAP4-08-00091",
                "label": "p. 33; topic 8 point 101"
              }
            ]
          },
          {
            "id": "milestones-delivery-financing",
            "title": "Pharping 1911, BOOT concessions and reading financing roles",
            "html": "<p><em>Pharping</em>, Nepal's first hydropower station, was inaugurated on 22 May 1911 with two 250 kW units, a station capacity of 500 kW. Keep the unit rating and the station total apart, and treat 1911 as the inauguration or commissioning milestone rather than a verified date for every construction activity. The later founding of the Nepal Electricity Authority is a separate institutional milestone.</p><p>Delivery models state who builds, owns, operates and finally transfers an asset. Under <em>Build-Own-Operate-Transfer</em> (BOOT) the concessionaire finances and builds the project, owns and runs it for the contract term, then hands it over on the terms the contract sets.</p><ul><li>Build-Own-Operate omits the transfer.</li><li>An engineering-procurement-construction contract covers delivery only.</li><li>An operation-and-maintenance contract implies neither construction nor ownership.</li></ul><p>Financing roles are read from their own agreements. When a foreign government's loan sits beside local equity and a multilateral loan, that government is a co-financing partner; the loan gives it no equity ownership, sole-financier status or equipment-supply role.</p>",
            "points": [
              {
                "html": "Pharping, Nepal's first hydropower plant, was commissioned in 1911 AD with a station capacity of 500 kW, made up of two 250 kW units.",
                "sources": [
                  {
                    "id": "CAP4-08-00022",
                    "label": "p. 31; topic 8 point 24"
                  }
                ]
              },
              {
                "html": "A concessionaire that builds, owns and operates a hydro project for the agreed term and then transfers it follows Build-Own-Operate-Transfer (BOOT), one of several delivery arrangements.",
                "sources": [
                  {
                    "id": "CAP4-08-00095",
                    "label": "p. 33; topic 8 point 105"
                  }
                ]
              },
              {
                "html": "A bilateral government loan combined with domestic equity and a multilateral loan makes that government a bilateral financing partner in a co-financed project, not an owner, sole financier or supplier.",
                "sources": [
                  {
                    "id": "CAP4-08-00102",
                    "label": "p. 33; topic 8 point 112"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00022",
                "label": "p. 31; topic 8 point 24"
              },
              {
                "id": "CAP4-08-00095",
                "label": "p. 33; topic 8 point 105"
              },
              {
                "id": "CAP4-08-00102",
                "label": "p. 33; topic 8 point 112"
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
            "id": "caution-nepal-hydro-most-suitable",
            "status": "review",
            "prompt": "In Nepal, hydropower is the most reliable and suitable supply",
            "html": "<p>Treat this as a national opportunity, not a site verdict. Nepal's relief offers attractive head, but reliability at a particular site depends on dry-season usable flow, net head, geology and the delivery system, and must be shown against the demand served.</p>",
            "sources": [
              {
                "id": "CAP4-08-00002",
                "label": "p. 30; topic 8 point 2"
              }
            ]
          },
          {
            "id": "caution-hydro-most-economical",
            "status": "corrected",
            "prompt": "Hydropower is the most economical source of power",
            "html": "<p>Not universally. Hydro often has low running cost, but access roads, transmission and civil works can outweigh the fuel advantage. The economic choice comes from a discounted life-cycle comparison of alternatives delivering equivalent dependable service.</p>",
            "sources": [
              {
                "id": "CAP4-08-00006",
                "label": "p. 30; topic 8 point 6"
              }
            ]
          },
          {
            "id": "caution-electricity-rules-approval",
            "status": "review",
            "prompt": "Electricity regulation is approved by the Government of Nepal",
            "html": "<p>Defensible when read precisely: the Electricity Rules, 2050 were made by the Government under section 40 of the Electricity Act, 2049. That general rule-making power is not every regulatory decision or a complete current approval process, and older editions name His Majesty's Government.</p>",
            "sources": [
              {
                "id": "CAP4-08-00009",
                "label": "p. 30; topic 8 point 9"
              }
            ]
          },
          {
            "id": "caution-pharping-construction-date",
            "status": "review",
            "prompt": "Pharping was constructed in 1911 AD with 500 kW capacity",
            "html": "<p>The 500 kW station total from two 250 kW units, and 22 May 1911 as the inauguration or commissioning date, are supported. The year is not a verified date for every construction activity.</p>",
            "sources": [
              {
                "id": "CAP4-08-00022",
                "label": "p. 31; topic 8 point 24"
              }
            ]
          },
          {
            "id": "caution-imports-bad-for-hydropower",
            "status": "corrected",
            "prompt": "Importing electricity to reduce load shedding is not good for hydropower development",
            "html": "<p>No identified policy clause supports this as a universal rule. Temporary imports can relieve shortages while domestic projects are developed; whether they help or harm depends on reliability, cost, supply risk and effects on domestic investment.</p>",
            "sources": [
              {
                "id": "CAP4-08-00081",
                "label": "p. 32; topic 8 point 88"
              }
            ]
          },
          {
            "id": "caution-nea-policy-2001-attribution",
            "status": "corrected",
            "prompt": "NEA policy 2001 gives first priority to reliable and affordable supply",
            "html": "<p>The document is the Government's Hydropower Development Policy, 2058 (2001), not an NEA policy. Its consumer-service objective concerns reliable electricity at low cost; the items do not establish a ranking of every priority or the content of current policy.</p>",
            "sources": [
              {
                "id": "CAP4-08-00091",
                "label": "p. 33; topic 8 point 101"
              }
            ]
          },
          {
            "id": "caution-boot-universal",
            "status": "review",
            "prompt": "Hydropower projects are constructed under BOOT",
            "html": "<p>BOOT is one delivery arrangement in which the concessionaire builds, owns, operates and later transfers the project. Projects may use other models, and the actual concession rights, term and transfer conditions come from the applicable law and contract.</p>",
            "sources": [
              {
                "id": "CAP4-08-00095",
                "label": "p. 33; topic 8 point 105"
              }
            ]
          },
          {
            "id": "caution-kulekhani-japan-financing",
            "status": "review",
            "prompt": "Japan provided key financial assistance for Kulekhani I and Kulekhani II",
            "html": "<p>Unverified in this review: no primary record covering both projects was obtained. The related item uses an expressly hypothetical schedule to test financing roles, so the historical donor claim needs checking against project records before use.</p>",
            "sources": [
              {
                "id": "CAP4-08-00102",
                "label": "p. 33; topic 8 point 112"
              }
            ]
          }
        ],
        "gaps": [
          "No numerical gross, technical or economic hydropower potential for Nepal or the world is taught by these capsule items.",
          "Project development stages from identification through feasibility, detailed design and construction are not examined here.",
          "Present licensing procedures, current regulatory institutions and any consolidated current policy are outside what these items establish.",
          "The Kulekhani financing history remains unverified and should be checked against project records."
        ]
      },
      "ACiE0802": {
        "code": "ACiE0802",
        "questionCount": 26,
        "format": 2,
        "summary": "<p>This subchapter turns river flow and demand into power and energy figures. It covers hydraulic power from discharge, head and efficiency; flow-duration and power-duration curves; firm and secondary power; load curves with load, capacity and coincidence factors; merit-order dispatch; run-of-river, pondage and pumped-storage schemes; and reservoir storage zones, sediment allocation and bank storage. The capsule items test short calculations of head, output, load factor, energy, pondage, round-trip efficiency, flow volume and sediment life, and the qualifications behind hydro's fuel, cost and reliability claims.</p>",
        "blocks": [
          {
            "id": "fuel-cost-and-renewable-character",
            "title": "Fuel, operating cost and the renewable character of conventional hydropower",
            "html": "<p>Conventional hydropower converts the hydraulic energy of flowing water into shaft power and then electricity, so the prime mover draws its energy from water rather than from burning fuel. That directly removes recurring fuel deliveries at a remote station. It is a fuel advantage, not zero operating expenditure: maintenance, lubrication, staff and any diesel backup still cost money.</p><p>Once a station is built, extra hydro energy usually has a low <em>variable cost</em> compared with diesel generation of the same additional energy, because little or no fuel is purchased. Long-lived civil works, reservoir storage and spare units matter for capital recovery, seasonal energy or outage cover, but they are not why the marginal energy is cheap. Where water is scarce or has competing uses, stored water carries an opportunity cost, so minimum operating cost is not universal.</p><p>Classification uses two separate ideas. <em>Conventional</em> describes long-established generating technology; <em>renewable</em> describes replenishment of the resource by the water cycle. River hydropower is therefore conventional and renewable. That label does not settle the environmental effects of every reservoir or any country's statutory renewable category.</p>",
            "points": [
              {
                "html": "Hydropower's prime-mover energy is supplied by water without combustion fuel, which is why a remote station with dependable flow avoids recurring fuel deliveries.",
                "sources": [
                  {
                    "id": "CAP4-08-00001",
                    "label": "p. 30; topic 8 point 1"
                  }
                ]
              },
              {
                "html": "Once built, extra hydro generation needs little or no purchased fuel, so its variable cost is usually below diesel unless the water has a competing-use opportunity cost.",
                "sources": [
                  {
                    "id": "CAP4-08-00005",
                    "label": "p. 30; topic 8 point 5"
                  }
                ]
              },
              {
                "html": "By technological history and resource replenishment, river hydropower is classed as conventional and renewable.",
                "sources": [
                  {
                    "id": "CAP4-08-00007",
                    "label": "p. 30; topic 8 point 7"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00001",
                "label": "p. 30; topic 8 point 1"
              },
              {
                "id": "CAP4-08-00005",
                "label": "p. 30; topic 8 point 5"
              },
              {
                "id": "CAP4-08-00007",
                "label": "p. 30; topic 8 point 7"
              }
            ]
          },
          {
            "id": "hydraulic-power-and-head",
            "title": "Hydraulic power from discharge, gross head, net head and efficiency",
            "html": "<p>The water power delivered to a turbine is \\(\\rho g Q H_n\\). With water at 1000 kg/m<sup>3</sup> and \\(g\\) = 9.81 m/s² this becomes \\(9.81\\,Q H_n\\) kW for \\(Q\\) in m<sup>3</sup>/s and \\(H_n\\) in m. Electrical output multiplies the hydraulic input by the overall water-to-wire efficiency, so output depends on head, discharge and efficiency together.</p><p><em>Gross head</em> is the difference between the upstream and downstream free-water levels on a common datum. The downstream reference is a free-water level, not the elevation of a runner, and the idea applies to impulse and reaction plants alike.</p><p><em>Net head</em> is gross head minus the waterway losses between the same boundaries at the operating discharge. Losses grow with discharge, so net head belongs to an operating point, and using the gross elevation difference unchanged overstates output. Dividing by efficiency, rather than multiplying, gives the input needed for a stated output, not the output itself.</p>",
            "formulas": [
              {
                "label": "Electrical output",
                "tex": "P = \\rho g Q H_n \\eta"
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
              "title": "Worked examples: gross head, net head and output",
              "html": "<p>Levels of 240 m upstream and 180 m downstream give \\(H_g = 240 - 180 = 60\\) m. A different plant with 120 m gross head and 8 m of total loss has \\(H_n = 120 - 8 = 112\\) m.</p><p>For 4 m<sup>3</sup>/s at 60 m net head and 85% overall efficiency:</p>\\[\\begin{aligned} P &amp;= 9.81 \\times 4 \\times 60 \\times 0.85 \\\\ &amp;= 2354.40 \\times 0.85 \\\\ &amp;= 2001.24\\ \\text{kW} \\end{aligned}\\]<p>The hydraulic input is 2354.40 kW. Dividing it by 0.85 would answer a different problem, the input needed for a stated output.</p>"
            },
            "points": [
              {
                "html": "Free-water levels of 240 m upstream and 180 m downstream on one datum give a gross head of 60 m, before any waterway losses are deducted.",
                "sources": [
                  {
                    "id": "CAP4-08-00087",
                    "label": "p. 33; topic 8 point 96"
                  }
                ]
              },
              {
                "html": "Net head is gross head minus the waterway losses at the operating discharge: 120 m gross with 8 m of losses leaves 112 m.",
                "sources": [
                  {
                    "id": "CAP4-08-00083",
                    "label": "p. 32; topic 8 point 91"
                  }
                ]
              },
              {
                "html": "Water at 4 m<sup>3</sup>/s through 60 m net head at 85% overall efficiency yields 2001.24 kW: the 2354.40 kW hydraulic input multiplied by 0.85.",
                "sources": [
                  {
                    "id": "CAP4-08-00070",
                    "label": "p. 32; topic 8 point 76"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00087",
                "label": "p. 33; topic 8 point 96"
              },
              {
                "id": "CAP4-08-00083",
                "label": "p. 32; topic 8 point 91"
              },
              {
                "id": "CAP4-08-00070",
                "label": "p. 32; topic 8 point 76"
              }
            ]
          },
          {
            "id": "flow-duration-curves",
            "title": "Flow-duration curves: exceedance, power duration and volume",
            "html": "<p>A <em>flow-duration curve</em> ranks the discharges of a record by the percentage of time each is equalled or exceeded. Under that convention \\(Q_{40}\\) = 12 m<sup>3</sup>/s means the flow reached or topped 12 m<sup>3</sup>/s during 40% of the recorded time. It identifies no dates, and it is not the share of total volume passing at that rate. The plotting convention and record period must accompany the curve.</p><p>At an unregulated site with constant net head and stated efficiency, each usable discharge maps to a power, turning the flow-duration curve into a <em>power-duration curve</em>. Integrating power over duration gives energy for the reference period, once turbine flow limits and installed capacity have capped the usable part. Ranking removes chronology, so the curve alone cannot size seasonal storage or fix a unique economic capacity.</p><p>The area under the curve is a volume only after the percentage axis is scaled to real time: multiply the mean discharge by the total duration in seconds.</p>",
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
                "html": "\\(Q_{40}\\) = 12 m<sup>3</sup>/s means the flow equalled or exceeded 12 m<sup>3</sup>/s for 40% of the record; it names no date and no share of volume.",
                "sources": [
                  {
                    "id": "CAP4-08-00075",
                    "label": "p. 32; topic 8 point 81"
                  }
                ]
              },
              {
                "html": "At constant net head and stated efficiency, a usable-flow duration curve converts to a power-duration curve, and integrating it gives energy over the reference period within turbine limits.",
                "sources": [
                  {
                    "id": "CAP4-08-00010",
                    "label": "p. 30; topic 8 point 10"
                  }
                ]
              },
              {
                "html": "The 100-day stepwise record has a mean flow of 4.5 m<sup>3</sup>/s, so 38.88 million m<sup>3</sup> passed; a percentage axis must be scaled by the total duration in seconds.",
                "sources": [
                  {
                    "id": "CAP4-08-00099",
                    "label": "p. 33; topic 8 point 109"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00075",
                "label": "p. 32; topic 8 point 81"
              },
              {
                "id": "CAP4-08-00010",
                "label": "p. 30; topic 8 point 10"
              },
              {
                "id": "CAP4-08-00099",
                "label": "p. 33; topic 8 point 109"
              }
            ]
          },
          {
            "id": "firm-power-and-dependability",
            "title": "Firm power, secondary power and what dependable supply requires",
            "html": "<p><em>Firm power</em> is the dependable output a scheme can sustain through the critical hydrological period adopted as its design basis, on the operating and reliability assumptions declared in the study. It is not immunity to every conceivable drought, outage or restriction.</p><table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Meaning</th></tr></thead><tbody><tr><td>Firm power</td><td>Output sustained through the critical period on the declared basis</td></tr><tr><td>Secondary power</td><td>Extra, non-firm output available in wetter periods</td></tr><tr><td>Installed capacity</td><td>A machine rating, not a supply promise</td></tr><tr><td>Average annual power</td><td>Annual energy divided by the hours in the year</td></tr></tbody></table><p>Dependability is judged against the duty. A hospital needing dry-season supply is served only if firm output, together with provision for equipment outages, covers the required load at the required times. Annual energy exceeding yearly consumption, or an installed rating above average demand, can coexist with unserved critical hours.</p><p>An <em>unregulated run-of-river</em> plant shows the limit. When river flow falls below turbine requirements, output must drop or stop even though the machinery is sound. The station keeps its genuine benefits of no combustion fuel, conversion of available head and a replenished resource, but it cannot promise uninterrupted rated output without storage or backup. Storage or a firm flow lets other stations run continuously.</p>",
            "points": [
              {
                "html": "Firm power is the dependable output sustained through the critical hydrological period chosen as the design basis, on the study's declared operating and reliability assumptions; wetter-period surplus is secondary power.",
                "sources": [
                  {
                    "id": "CAP4-08-00020",
                    "label": "pp. 30, 31; topic 8 point 20; topic 8 point 23"
                  }
                ]
              },
              {
                "html": "A hydro proposal is dependable for a dry-season hospital duty only when its firm output and outage provision meet the required service at the required times.",
                "sources": [
                  {
                    "id": "CAP4-08-00004",
                    "label": "p. 30; topic 8 point 4"
                  }
                ]
              },
              {
                "html": "Without storage or backup, an unregulated run-of-river station cannot claim uninterrupted output at the advertised rating once usable flow drops below what the turbines need.",
                "sources": [
                  {
                    "id": "CAP4-08-00008",
                    "label": "p. 30; topic 8 point 8"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00020",
                "label": "pp. 30, 31; topic 8 point 20; topic 8 point 23"
              },
              {
                "id": "CAP4-08-00004",
                "label": "p. 30; topic 8 point 4"
              },
              {
                "id": "CAP4-08-00008",
                "label": "p. 30; topic 8 point 8"
              }
            ]
          },
          {
            "id": "load-curves-and-daily-energy",
            "title": "Load curves, load factor and daily energy from a demand profile",
            "html": "<p>A <em>load curve</em> plots the demand on a station against time, so the area under it is energy. For a stepped curve, add the rectangles of power times duration. Averaging the power levels equally, without weighting them by their durations, is the usual slip.</p><p><em>Load factor</em> is average demand divided by maximum demand over the same period, and average demand is energy divided by time. Installed capacity is not the denominator unless it happens to equal the observed peak.</p><p>The same arithmetic keeps <em>peak demand</em> and <em>energy</em> apart. A high evening peak lasting a few hours may add less energy than a modest demand held all night. An assumed evening peak window is a modelling choice; an actual peak period must come from a dated load record.</p>",
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
              "title": "Worked examples: three demand profiles",
              "html": "<ol><li>Demand of 40 kW lasting 18 h, then 100 kW for 6 h: \\(40 \\times 18 + 100 \\times 6 = 1320\\) kWh, that is 720 kWh plus 600 kWh.</li><li>1440 kWh delivered over 24 h is an average of 60 kW. With a 100 kW maximum, \\(LF = 60/100 = 0.60\\), or 60%.</li><li>An assumed 8 MW from 17:00 to 23:00, a 6 h window, and 3 MW for the other 18 h: \\(8 \\times 6 + 3 \\times 18 = 102\\) MWh, made of 48 MWh in the evening and 54 MWh otherwise.</li></ol>"
            },
            "points": [
              {
                "html": "The area under a load curve is energy: 40 kW held for 18 h plus 100 kW for 6 h represents 1320 kWh.",
                "sources": [
                  {
                    "id": "CAP4-08-00015",
                    "label": "p. 30; topic 8 point 15"
                  }
                ]
              },
              {
                "html": "A day with 1440 kWh delivered and a 100 kW maximum demand has an average demand of 60 kW and a daily load factor of 60%.",
                "sources": [
                  {
                    "id": "CAP4-08-00014",
                    "label": "p. 30; topic 8 point 14"
                  }
                ]
              },
              {
                "html": "An assumed 8 MW evening demand over 6 h plus 3 MW for the other 18 h needs 102 MWh of daily energy; peak demand and energy are different quantities.",
                "sources": [
                  {
                    "id": "CAP4-08-00090",
                    "label": "p. 33; topic 8 point 99"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00015",
                "label": "p. 30; topic 8 point 15"
              },
              {
                "id": "CAP4-08-00014",
                "label": "p. 30; topic 8 point 14"
              },
              {
                "id": "CAP4-08-00090",
                "label": "p. 33; topic 8 point 99"
              }
            ]
          },
          {
            "id": "capacity-coincidence-and-sizing",
            "title": "Capacity factor, coincidence factor and sizing an isolated microhydro",
            "html": "<p><em>Capacity factor</em> is average output divided by installed capacity, while load factor divides the same average by peak demand. For a common period and metering boundary their ratio reduces to peak demand over installed capacity, so the two factors coincide whenever installed capacity equals the peak.</p><p>Consumer peaks rarely occur together. The <em>coincidence factor</em> is the simultaneous combined maximum divided by the sum of individual maxima, and the <em>diversity factor</em> is its reciprocal. A coincidence factor cannot exceed 1, and a diversity factor cannot fall below 1.</p><p>The combined figure sets the duty of an isolated microhydro that has neither storage nor any allowance for load shedding. Its dependable delivered capacity must at least cover the <em>coincident peak</em>, not the annual average, the night-time minimum or the sum of appliance ratings. Losses, motor starting and a reserve margin are then added, and the hydrology must support the duty, so a nameplate exactly equal to peak is not by itself a complete design.</p>",
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
              "title": "Worked examples: capacity and coincidence",
              "html": "<p>Average output 30 kW, peak demand 60 kW and installed capacity 60 kW give</p>\\[\\begin{aligned} CF &amp;= \\dfrac{30}{60} = 0.50 \\\\ LF &amp;= \\dfrac{30}{60} = 0.50 \\end{aligned}\\]<p>so \\(CF/LF = 1.00\\), matching peak over installed capacity, 60/60.</p><p>Feeders with individual maxima of 12, 18 and 30 kW sum to 60 kW. With a simultaneous maximum of 45 kW:</p>\\[\\begin{aligned} C_f &amp;= \\dfrac{45}{60} = 0.75 \\\\ D_f &amp;= \\dfrac{60}{45} \\approx 1.33 \\end{aligned}\\]"
            },
            "points": [
              {
                "html": "With a 30 kW average, a 60 kW peak and 60 kW installed, capacity factor and load factor are both 0.50, so their ratio is 1.00.",
                "sources": [
                  {
                    "id": "CAP4-08-00018",
                    "label": "p. 30; topic 8 point 18"
                  }
                ]
              },
              {
                "html": "Feeder maxima of 12, 18 and 30 kW with a 45 kW simultaneous maximum give a coincidence factor of 45/60 = 0.75; the diversity factor is its reciprocal, about 1.33.",
                "sources": [
                  {
                    "id": "CAP4-08-00011",
                    "label": "p. 30; topic 8 point 11"
                  }
                ]
              },
              {
                "html": "An isolated microhydro without storage or load shedding needs dependable delivered capacity covering at least the coincident peak demand, with losses, starting loads and reserve added.",
                "sources": [
                  {
                    "id": "CAP4-08-00013",
                    "label": "p. 30; topic 8 point 13"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00018",
                "label": "p. 30; topic 8 point 18"
              },
              {
                "id": "CAP4-08-00011",
                "label": "p. 30; topic 8 point 11"
              },
              {
                "id": "CAP4-08-00013",
                "label": "p. 30; topic 8 point 13"
              }
            ]
          },
          {
            "id": "merit-order-dispatch",
            "title": "Merit-order dispatch and the flexibility of storage hydro",
            "html": "<p>Operators normally load units in <em>merit order</em>: the cheapest sustained generation covers base demand, and more expensive units follow as demand rises. A quick-starting unit with high variable cost is therefore most economical for short, high-value peaks and for reserve or flexible support, while cheaper units carry steady demand. Running it as must-run or intermediate supply wastes its flexibility and raises system cost.</p><table><thead><tr><th scope='col'>Load band</th><th scope='col'>Suited unit</th><th scope='col'>Reason</th></tr></thead><tbody><tr><td>Base</td><td>Low variable cost, steady output</td><td>Runs most hours, so running cost dominates</td></tr><tr><td>Intermediate</td><td>Moderate cost, able to follow load</td><td>Runs part of each day</td></tr><tr><td>Peak</td><td>Fast start, high variable cost</td><td>Runs few hours, so flexibility outweighs running cost</td></tr></tbody></table><p>Emergencies and network constraints can alter dispatch, so peak operation is a normal economic role rather than an exceptionless law.</p><p>A <em>storage hydro</em> scheme with adequate water, usable storage and generating capacity can serve both base and peak duties, because reservoir regulation decouples the timing of releases from the timing of inflow within its limits. The seasonal water budget still caps energy, dead storage is not scheduled as active volume, and a flood-control reserve is not automatically available for generation.</p>",
            "points": [
              {
                "html": "A quick-starting unit with high variable cost is normally dispatched to meet short demand peaks and provide flexible support, while cheaper units cover steady load.",
                "sources": [
                  {
                    "id": "CAP4-08-00012",
                    "label": "p. 30; topic 8 point 12; topic 8 point 21"
                  }
                ]
              },
              {
                "html": "Within its water budget, reservoir regulation lets a storage scheme schedule releases across the demand period, so it can supply both base and peak demand.",
                "sources": [
                  {
                    "id": "CAP4-08-00085",
                    "label": "p. 32; topic 8 point 93"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00012",
                "label": "p. 30; topic 8 point 12; topic 8 point 21"
              },
              {
                "id": "CAP4-08-00085",
                "label": "p. 32; topic 8 point 93"
              }
            ]
          },
          {
            "id": "run-of-river-pondage-pumped-storage",
            "title": "Run-of-river, pondage and pumped storage in numbers",
            "html": "<p>An <em>unregulated run-of-river</em> (ROR) plant has almost no usable pondage upstream, so it generates from whatever river flow remains after required downstream releases, within turbine limits. It uses flows above the minimum whenever capacity permits; the minimum dependable flow informs firm output but does not define every operating discharge. Some ROR plants include limited pondage, which is a different case.</p><p><em>Pondage</em> is short-period storage for meeting peaks. It supplies only the deficit between release and inflow over the peak, not the whole turbine release. Dead storage, freeboard and real operating limits need separate allowances.</p><p><em>Pumped storage</em> moves energy in time rather than creating it. Round-trip efficiency is the product of the pumping and generating conversions, not their average. Its value lies in shifting energy to high-value periods and providing system services such as reserve.</p>",
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
            "points": [
              {
                "html": "An unregulated run-of-river plant has negligible usable pondage, so its output follows the river flow left after required downstream releases, within turbine limits.",
                "sources": [
                  {
                    "id": "CAP4-08-00092",
                    "label": "p. 33; topic 8 point 102"
                  }
                ]
              },
              {
                "html": "Releasing 5 m<sup>3</sup>/s against a 2 m<sup>3</sup>/s inflow through a two-hour peak needs at least 21,600 m<sup>3</sup> of working pondage, the deficit volume only.",
                "sources": [
                  {
                    "id": "CAP4-08-00019",
                    "label": "p. 30; topic 8 point 19"
                  }
                ]
              },
              {
                "html": "Two 90% conversions return 81 MWh from 100 MWh of pumping energy: round-trip efficiency is their product, 0.81, not their average.",
                "sources": [
                  {
                    "id": "CAP4-08-00067",
                    "label": "p. 32; topic 8 point 73"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00092",
                "label": "p. 33; topic 8 point 102"
              },
              {
                "id": "CAP4-08-00019",
                "label": "p. 30; topic 8 point 19"
              },
              {
                "id": "CAP4-08-00067",
                "label": "p. 32; topic 8 point 73"
              }
            ]
          },
          {
            "id": "reservoir-zones-sediment-bank-storage",
            "title": "Reservoir storage zones, sediment allocation and bank storage",
            "html": "<p><em>Dead or inactive storage</em> is the volume below the minimum normal operating pool that ordinary gravity releases through the service outlet cannot use; it is a storage volume, not a water level. Special low-level outlets may recover some otherwise inactive water, so the operating definition must be stated.</p><table><thead><tr><th scope='col'>Zone</th><th scope='col'>Position</th><th scope='col'>Use</th></tr></thead><tbody><tr><td>Flood surcharge</td><td>Above the normal full level</td><td>Temporary flood storage</td></tr><tr><td>Active or live</td><td>Between minimum operating and normal full levels</td><td>Regulated releases</td></tr><tr><td>Dead or inactive</td><td>Below the minimum operating level</td><td>Not released through the service outlet; often a sediment allowance</td></tr></tbody></table><p>The sediment allowance lasts its volume divided by the annual deposited volume, assuming a constant rate, no removal and deposition confined to the allowance. Real deposits spread into active storage and near intakes, so impairment can begin earlier.</p><p><em>Bank storage</em> is water that enters permeable banks as the reservoir rises and partly returns as it falls. It is a groundwater exchange with limits on timing and recovery; it does not enlarge the surveyed elevation-capacity curve or provide guaranteed, immediately available active storage, and it is assessed with a groundwater balance.</p>",
            "formulas": [
              {
                "label": "Life of a sediment allocation",
                "tex": "T = \\dfrac{V_{\\text{alloc}}}{V_{\\text{sed}}}",
                "where": "<p>\\(V_{\\text{sed}}\\) is the deposited bulk volume per year; a constant rate and no removal are assumed.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a 20% sediment allocation",
              "html": "<p>A reservoir of 30 million m<sup>3</sup> gross capacity reserves 20% for sediment, and deposits occupy 0.10 million m<sup>3</sup> per year within that allocation. In million m<sup>3</sup>:</p>\\[\\begin{aligned} V_{\\text{alloc}} &amp;= 0.20 \\times 30 = 6 \\\\ T &amp;= 6/0.10 = 60\\ \\text{years} \\end{aligned}\\]<p>Deposits that also settle in active storage would shorten the useful life before the 60 years are up.</p>"
            },
            "points": [
              {
                "html": "Dead or inactive storage is the volume below the minimum normal operating pool that ordinary gravity releases through the service outlet cannot draw; it is a volume, not a level.",
                "sources": [
                  {
                    "id": "CAP4-08-00034",
                    "label": "p. 31; topic 8 point 37"
                  }
                ]
              },
              {
                "html": "A 6 million m<sup>3</sup> sediment allocation, 20% of 30 million m<sup>3</sup>, fills in 60 years at 0.10 million m<sup>3</sup> per year, assuming a constant rate and no removal.",
                "sources": [
                  {
                    "id": "CAP4-08-00021",
                    "label": "pp. 30, 31; topic 8 point 22"
                  }
                ]
              },
              {
                "html": "Bank storage is a groundwater exchange with timing and recoverability limits; it does not raise the surveyed open-water capacity.",
                "sources": [
                  {
                    "id": "CAP4-08-00104",
                    "label": "p. 33; topic 8 point 114"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00034",
                "label": "p. 31; topic 8 point 37"
              },
              {
                "id": "CAP4-08-00021",
                "label": "pp. 30, 31; topic 8 point 22"
              },
              {
                "id": "CAP4-08-00104",
                "label": "p. 33; topic 8 point 114"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Hydropower output",
            "tex": "P = \\rho g Q H_n \\eta"
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
            "label": "Volume from a duration curve",
            "tex": "V = T \\sum_i Q_i\\, p_i",
            "note": "T is the record length in seconds."
          },
          {
            "label": "Working pondage",
            "tex": "V = (Q_{\\text{rel}} - Q_{\\text{in}})\\, t"
          },
          {
            "label": "Round-trip efficiency",
            "tex": "\\eta_{\\text{rt}} = \\eta_{\\text{pump}}\\, \\eta_{\\text{gen}}"
          },
          {
            "label": "Sediment allocation life",
            "tex": "T = \\dfrac{V_{\\text{alloc}}}{V_{\\text{sed}}}",
            "note": "Constant deposition rate and no removal."
          }
        ],
        "cautions": [
          {
            "id": "caution-hydro-most-reliable",
            "status": "corrected",
            "prompt": "The most reliable power is hydroelectric power",
            "html": "<p>Not as an absolute ranking. Reliability means supply when required, including drought and equipment outages, and depends on water, storage and redundancy. A hydro proposal is dependable for a duty only when the output it can sustain through critical conditions, plus cover for equipment outages, satisfies that duty.</p>",
            "sources": [
              {
                "id": "CAP4-08-00004",
                "label": "p. 30; topic 8 point 4"
              }
            ]
          },
          {
            "id": "caution-hydro-minimum-operating-charges",
            "status": "review",
            "prompt": "For the same output, a hydel plant has minimum operating charges",
            "html": "<p>Usually true of variable cost because no fuel is bought, but not universal. Maintenance and losses remain, and where water is scarce or has competing uses the stored water carries an opportunity cost.</p>",
            "sources": [
              {
                "id": "CAP4-08-00005",
                "label": "p. 30; topic 8 point 5"
              }
            ]
          },
          {
            "id": "caution-continuous-power-not-an-advantage",
            "status": "review",
            "prompt": "Continuous power is not an advantage of a hydroelectric plant",
            "html": "<p>Read this narrowly. An unregulated run-of-river plant cannot guarantee uninterrupted rated output when river flow falls below turbine requirements. It does not mean every hydro station operates intermittently, since storage or a firm flow can sustain continuous output.</p>",
            "sources": [
              {
                "id": "CAP4-08-00008",
                "label": "p. 30; topic 8 point 8"
              }
            ]
          },
          {
            "id": "caution-fdc-total-power",
            "status": "corrected",
            "prompt": "A flow-duration curve at a given head determines the total power available",
            "html": "<p>'Total power' is undefined. At constant net head and stated efficiency the curve converts to a power-duration curve, and integration gives energy within turbine limits. It does not give chronology, seasonal storage size or the economic installed capacity.</p>",
            "sources": [
              {
                "id": "CAP4-08-00010",
                "label": "p. 30; topic 8 point 10"
              }
            ]
          },
          {
            "id": "caution-peak-load-only",
            "status": "review",
            "prompt": "A high-cost, highly flexible plant is used for peak load only",
            "html": "<p>That is its normal merit-order role, covering short peaks and flexible reserve support. Emergencies and network constraints can change dispatch, so 'peak load only' is an economic tendency rather than an exceptionless operating law.</p>",
            "sources": [
              {
                "id": "CAP4-08-00012",
                "label": "p. 30; topic 8 point 12; topic 8 point 21"
              }
            ]
          },
          {
            "id": "caution-microhydro-equal-to-peak",
            "status": "review",
            "prompt": "An isolated single microhydro should have capacity equal to the peak load",
            "html": "<p>The peak-demand basis is right, but dependable delivered output must at least cover the coincident peak, and losses, starting loads, a reserve margin and the hydrology must also be satisfied. A nameplate exactly equal to peak is not a complete design.</p>",
            "sources": [
              {
                "id": "CAP4-08-00013",
                "label": "p. 30; topic 8 point 13"
              }
            ]
          },
          {
            "id": "caution-firm-power-all-seasons",
            "status": "review",
            "prompt": "Firm power is the power available continuously in all seasons",
            "html": "<p>Qualified by the design basis: firm power is what can be sustained through the critical hydrological period chosen for the study, on its declared operating and reliability assumptions. It is not immune to every conceivable drought, failure or restriction.</p>",
            "sources": [
              {
                "id": "CAP4-08-00020",
                "label": "pp. 30, 31; topic 8 point 20; topic 8 point 23"
              }
            ]
          },
          {
            "id": "caution-dead-storage-silting-time",
            "status": "corrected",
            "prompt": "Twenty per cent dead storage of a 30 million m³ reservoir silts up in 60 years",
            "html": "<p>The printed working is broken; the intended arithmetic is \\(T = 6/0.1 = 60\\) years. The result assumes a constant deposited volume, no removal and deposition confined to the allocation. Real deposits spread into active storage and near intakes, so impairment can begin earlier.</p>",
            "sources": [
              {
                "id": "CAP4-08-00021",
                "label": "pp. 30, 31; topic 8 point 22"
              }
            ]
          },
          {
            "id": "caution-dead-storage-as-level",
            "status": "corrected",
            "prompt": "Dead storage is the level between bed level and minimum pool level",
            "html": "<p>Dead storage is a volume, not a level: the storage below the minimum normal operating pool that ordinary gravity releases through the service outlet cannot use. Special low-level outlets change what is recoverable, so the operating basis must be stated.</p>",
            "sources": [
              {
                "id": "CAP4-08-00034",
                "label": "p. 31; topic 8 point 37"
              }
            ]
          },
          {
            "id": "caution-reversible-machine-efficiency-cost",
            "status": "review",
            "prompt": "Reversible pumped-storage machines work efficiently and reduce plant cost",
            "html": "<p>High machine efficiency still leaves a round-trip loss: two 90% conversions return only 81% of the pumping energy. Economic benefit comes from the timing of energy and from system services, and lower cost is possible rather than guaranteed.</p>",
            "sources": [
              {
                "id": "CAP4-08-00067",
                "label": "p. 32; topic 8 point 73"
              }
            ]
          },
          {
            "id": "caution-nepal-peak-window",
            "status": "review",
            "prompt": "Electricity consumption in Nepal is maximum from 5 pm to 11 pm",
            "html": "<p>Undated and unverified as a fixed national window. Use it only as a declared example, keep peak demand separate from daily energy, and take any actual peak period from a dated load record.</p>",
            "sources": [
              {
                "id": "CAP4-08-00090",
                "label": "p. 33; topic 8 point 99"
              }
            ]
          },
          {
            "id": "caution-ror-uses-minimum-flow",
            "status": "corrected",
            "prompt": "A run-of-river plant utilises the minimum river flow with no appreciable pondage",
            "html": "<p>An unregulated run-of-river plant follows the flow available at the time, using flows above the minimum whenever turbine capacity permits. Minimum dependable flow informs firm output only, and some run-of-river plants include limited pondage.</p>",
            "sources": [
              {
                "id": "CAP4-08-00092",
                "label": "p. 33; topic 8 point 102"
              }
            ]
          },
          {
            "id": "caution-fdc-area-is-volume",
            "status": "review",
            "prompt": "The area under the flow-duration curve is the volume of water",
            "html": "<p>True once the time axis is expressed in time units. With a percentage axis, multiply the mean discharge by the total duration in seconds; 4.5 m<sup>3</sup>/s over 100 days gives 38.88 million m<sup>3</sup>. Sorting preserves the volume but removes chronology.</p>",
            "sources": [
              {
                "id": "CAP4-08-00099",
                "label": "p. 33; topic 8 point 109"
              }
            ]
          },
          {
            "id": "caution-bank-storage-computed-capacity",
            "status": "corrected",
            "prompt": "Bank storage increases the computed reservoir capacity",
            "html": "<p>Bank storage is a groundwater exchange with the reservoir, possibly recoverable with delay and loss. It can influence effective regulation, but it does not enlarge the surveyed elevation-capacity curve or add guaranteed, immediately recoverable active storage.</p>",
            "sources": [
              {
                "id": "CAP4-08-00104",
                "label": "p. 33; topic 8 point 114"
              }
            ]
          }
        ],
        "gaps": [
          "Installed-capacity selection by incremental economic comparison is described but not worked numerically in these items.",
          "Mass-curve or sequent-peak sizing of seasonal reservoir storage is not examined.",
          "Minimum and rated turbine-flow limits on flow-duration energy are discussed only qualitatively.",
          "Detailed components and layouts of each hydropower plant type are not examined in these items."
        ]
      },
      "ACiE0803": {
        "code": "ACiE0803",
        "questionCount": 32,
        "format": 2,
        "summary": "<p>This subchapter covers the headworks of storage plants: choosing a dam type from foundation and materials, dam classifications and construction details, gravity-dam base stresses and sliding, structures on pervious foundations, earth-dam zoning, seepage and slope distress, spillways, energy dissipaters, gates and outlets. The capsule items test the middle-third and kern rules with heel and toe stresses, shear friction and uplift, core and filter roles, the phreatic line, morning-glory and siphon spillways, hydraulic jumps and flip buckets, gate types and hydrostatic level measurement.</p>",
        "blocks": [
          {
            "id": "dam-type-from-foundation-and-materials",
            "title": "Selecting a dam type from foundation conditions and available materials",
            "html": "<p>A <em>concrete gravity dam</em> resists water load by its weight and delivers heavy compression and shear to its foundation. It is favoured where the foundation offers adequate bearing strength with limited deformation and where seepage can be controlled. Rock alone is no guarantee: weak seams, open untreated joints or a continuous seam dipping downstream can govern sliding, and a thin rock crust over deep compressible alluvium is unsuitable.</p><p>An <em>embankment dam</em> spreads its load over a broad base and tolerates more deformation. A valley rich in sand and gravel, with an alluvial foundation, may therefore suit an embankment, the granular material going into suitable zones. Sand and gravel are not an impervious barrier, so a low-permeability core or other seepage barrier, cutoffs, filters, drainage and settlement checks remain essential.</p><p>A <em>homogeneous earth embankment</em> on permeable alluvium is neither automatically acceptable nor automatically excluded. An impervious foundation is favourable, but feasibility depends on foundation seepage, exit gradients, uplift, settlement and constructible cutoffs, filters and drains. The embankment soil does not block flow beneath it, and widening the crest does nothing for foundation seepage.</p><table><thead><tr><th scope='col'>Dam type</th><th scope='col'>Foundation it needs</th><th scope='col'>Typical material</th></tr></thead><tbody><tr><td>Concrete gravity</td><td>Strong, low-deformation rock free of adverse seams</td><td>Mass concrete or masonry</td></tr><tr><td>Embankment</td><td>Broad base; can accept alluvium with seepage control</td><td>Local earth, sand, gravel or rock</td></tr></tbody></table>",
            "points": [
              {
                "html": "A concrete gravity dam needs a foundation with adequate bearing strength and limited deformation, plus shear resistance along seams and controlled seepage; rock alone guarantees none of these.",
                "sources": [
                  {
                    "id": "CAP4-08-00023",
                    "label": "p. 31; topic 8 point 25"
                  }
                ]
              },
              {
                "html": "Where sand and gravel abound over an alluvial foundation, an embankment may suit, with seepage barriers, filters and settlement checks; sand and gravel alone are not watertight.",
                "sources": [
                  {
                    "id": "CAP4-08-00094",
                    "label": "p. 33; topic 8 point 104"
                  }
                ]
              },
              {
                "html": "For a homogeneous embankment over permeable alluvium, first assess foundation seepage and suitable cutoffs, filters and drains; the site is neither automatically accepted nor rejected.",
                "sources": [
                  {
                    "id": "CAP4-08-00033",
                    "label": "p. 31; topic 8 point 36"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00023",
                "label": "p. 31; topic 8 point 25"
              },
              {
                "id": "CAP4-08-00094",
                "label": "p. 33; topic 8 point 104"
              },
              {
                "id": "CAP4-08-00033",
                "label": "p. 31; topic 8 point 36"
              }
            ]
          },
          {
            "id": "classifications-axis-joints-cofferdams",
            "title": "Dam classifications, the dam axis, contraction joints and cofferdams",
            "html": "<p>A dam can carry several classifications at once because each answers a different question. <em>Overflow and non-overflow</em> sections describe hydraulic role: one passes floodwater over its crest, while the adjacent one must never be overtopped.</p><table><thead><tr><th scope='col'>Basis</th><th scope='col'>Classes</th></tr></thead><tbody><tr><td>Hydraulic role</td><td>Overflow, non-overflow</td></tr><tr><td>Structural action</td><td>Gravity, arch, buttress</td></tr><tr><td>Material</td><td>Concrete, masonry, earth, rockfill</td></tr><tr><td>Service life</td><td>Permanent, temporary</td></tr></tbody></table><p>In plan, the <em>dam axis</em> of a conventional gravity dam is an alignment reference commonly taken along the upstream crest line. It is a setting-out convention, not the base toe, the river thalweg or necessarily the centroidal axis of a section, so confirm the reference on the project drawings before comparing coordinates.</p><p>Mass concrete cools and shrinks after placement. In an arch dam, <em>contraction joints</em> separate the monoliths so this movement can occur; where specified they are later grouted so the blocks act together as an arch. A lift joint only records a placement interface, while a shear key and a drainage gallery serve other purposes.</p><p>During construction a <em>cofferdam</em> temporarily walls off part of the river so that permanent foundations can be built in the dry. It still needs design for floods, seepage, uplift and stability while dewatered; diversion works may assist but do not describe the enclosing structure.</p>",
            "points": [
              {
                "html": "Classified by hydraulic design, a dam has overflow and non-overflow sections: one is built to pass floods over its crest, the other must not be overtopped.",
                "sources": [
                  {
                    "id": "CAP4-08-00042",
                    "label": "p. 31; topic 8 point 45"
                  }
                ]
              },
              {
                "html": "On a conventional gravity-dam plan, the dam axis is an alignment reference commonly taken along the upstream crest line, not a centroidal axis.",
                "sources": [
                  {
                    "id": "CAP4-08-00089",
                    "label": "p. 33; topic 8 point 98"
                  }
                ]
              },
              {
                "html": "Contraction joints between arch-dam monoliths accommodate cooling and shrinkage of the concrete before any specified joint grouting.",
                "sources": [
                  {
                    "id": "CAP4-08-00024",
                    "label": "p. 31; topic 8 point 26"
                  }
                ]
              },
              {
                "html": "A cofferdam is a temporary enclosure that excludes the river from a work area so permanent foundations can be built in the dry.",
                "sources": [
                  {
                    "id": "CAP4-08-00031",
                    "label": "p. 31; topic 8 point 34"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00042",
                "label": "p. 31; topic 8 point 45"
              },
              {
                "id": "CAP4-08-00089",
                "label": "p. 33; topic 8 point 98"
              },
              {
                "id": "CAP4-08-00024",
                "label": "p. 31; topic 8 point 26"
              },
              {
                "id": "CAP4-08-00031",
                "label": "p. 31; topic 8 point 34"
              }
            ]
          },
          {
            "id": "middle-third-kern-and-base-stresses",
            "title": "Middle-third rule, kern limits and heel and toe stresses of a gravity section",
            "html": "<p>Assume full contact and a linear distribution of normal stress across a rectangular base of width \\(B\\), per metre length of dam. With the effective vertical resultant \\(N\\) acting at eccentricity \\(e\\) from the centre, the edge stresses are \\(N/B\\) multiplied by \\(1 \\pm 6e/B\\). Both edges stay in compression while \\(|e| \\le B/6\\), which keeps the resultant within the <em>middle third</em> of the base.</p><p>The rule guarantees only the absence of tension at heel and toe. It does not prove the sliding factor, keep peak compression within bearing limits or remove uplift; those are separate checks.</p><p>\\(B/6\\) is a rectangle result. In general, no tension needs \\(N/A \\ge |M|/Z\\), that is \\(|e| \\le Z/A\\), where \\(Z\\) is the section modulus. Other shapes, such as a circular bearing section, have kern boundaries set by their own area and section modulus, so the principle is general while the middle-third number is not.</p>",
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
                "html": "Under linear stress on a rectangular base, a resultant kept within the middle third means no tensile normal stress occurs at either base edge; sliding, bearing and uplift still need separate checks.",
                "sources": [
                  {
                    "id": "CAP4-08-00027",
                    "label": "p. 31; topic 8 point 29; topic 8 point 30"
                  }
                ]
              },
              {
                "html": "For an 18 m rectangular base, the largest eccentricity from the centre that avoids tension is \\(B/6\\) = 3.0 m, not the 6 m width of the middle third.",
                "sources": [
                  {
                    "id": "CAP4-08-00037",
                    "label": "p. 31; topic 8 point 41"
                  }
                ]
              },
              {
                "html": "The middle-third rule is a rectangle result: for other shapes, such as a circle, the kern boundary depends on the section's area and section modulus, \\(|e| \\le Z/A\\).",
                "sources": [
                  {
                    "id": "CAP4-08-00041",
                    "label": "p. 31; topic 8 point 44"
                  }
                ]
              },
              {
                "html": "An elementary triangular section with a vertical upstream face, 6 m base and 600 kN/m weight, reservoir empty and no uplift, has 200 kPa at the heel and 0 kPa at the toe.",
                "sources": [
                  {
                    "id": "CAP4-08-00040",
                    "label": "p. 31; topic 8 point 43"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00027",
                "label": "p. 31; topic 8 point 29; topic 8 point 30"
              },
              {
                "id": "CAP4-08-00037",
                "label": "p. 31; topic 8 point 41"
              },
              {
                "id": "CAP4-08-00041",
                "label": "p. 31; topic 8 point 44"
              },
              {
                "id": "CAP4-08-00040",
                "label": "p. 31; topic 8 point 43"
              }
            ]
          },
          {
            "id": "sliding-shear-friction-and-keys",
            "title": "Sliding resistance: shear friction, effective normal force and foundation keys",
            "html": "<p>Sliding is checked by comparing the resistance available along a chosen plane with the driving horizontal force. In the shear-friction form, resistance is friction on the effective normal force, weight minus uplift, plus any cohesion that can genuinely be mobilised over the plane. The calculated factor is then compared with the acceptance criterion of the governing standard for that load case; formulations and permissible cohesion differ between methods.</p><p>Stepping the foundation or adding a <em>shear key</em> can raise sliding resistance by mobilising rock bearing, interlock or a longer shear path. It does not work by enlarging contact area in a simple friction model, because frictional resistance depends on the normal force rather than on area. A key neither removes uplift nor centres the resultant under every load, and weak rock, adverse joints or failure of the key itself can cancel the benefit.</p>",
            "formulas": [
              {
                "label": "Shear-friction factor",
                "tex": "FS = \\dfrac{\\mu N + cA}{T}",
                "where": "<p>\\(N\\) effective normal force, \\(\\mu\\) friction coefficient, \\(cA\\) mobilisable cohesive resistance, \\(T\\) driving horizontal force.</p>"
              },
              {
                "label": "Effective normal force",
                "tex": "N = W - U"
              }
            ],
            "example": {
              "title": "Worked example: a sliding check",
              "html": "<p>Take \\(\\mu\\) = 0.6 on an effective normal force of 1000 kN, 200 kN of mobilisable cohesion and a 400 kN driving force:</p>\\[\\begin{aligned} R &amp;= 0.6 \\times 1000 + 200 = 800\\ \\text{kN} \\\\ FS &amp;= 800/400 = 2.0 \\end{aligned}\\]<p>The 2.0 is a calculated value to be judged against the governing criteria; it assumes the stated cohesion really acts on the chosen plane.</p>"
            },
            "points": [
              {
                "html": "With \\(\\mu\\) = 0.6, an effective normal force of 1000 kN, 200 kN of cohesion and 400 kN driving, the shear-friction factor is 800/400 = 2.0, to be judged against the governing criteria.",
                "sources": [
                  {
                    "id": "CAP4-08-00053",
                    "label": "p. 31; topic 8 point 58"
                  }
                ]
              },
              {
                "html": "A foundation step or shear key improves sliding resistance by mobilising bearing and interlock along the resisting load path, not by adding contact area to simple friction.",
                "sources": [
                  {
                    "id": "CAP4-08-00036",
                    "label": "p. 31; topic 8 point 40"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00053",
                "label": "p. 31; topic 8 point 58"
              },
              {
                "id": "CAP4-08-00036",
                "label": "p. 31; topic 8 point 40"
              }
            ]
          },
          {
            "id": "pervious-foundations-uplift-undermining",
            "title": "Pervious foundations: uplift and undermining of hydraulic floors",
            "html": "<p>Structures on pervious foundations, such as weir floors and aprons, fail in two classic ways. <em>Uplift</em> is seepage pressure acting upward on the base. It opposes the downward load, so the effective normal force available for friction is the downward load minus the uplift. Adding uplift to the weight reverses its destabilising effect, and excessive uplift can also lift or crack the floor.</p><p><em>Undermining</em> develops when seepage emerging beyond the floor washes soil particles out of the foundation. Particle transport at an unprotected exit can grow into piping, a form of internal erosion that gradually strips away the soil supporting the floor. This differs from pure sliding without soil loss and from uplift pressure acting without soil transport.</p><p>Each remedy addresses a different part of the risk: cutoffs lengthen the seepage path, compatible filters retain soil while passing water, and drainage and scour protection deal with exit conditions.</p>",
            "formulas": [
              {
                "label": "Effective normal force on a floor",
                "tex": "N = W_{\\text{down}} - U"
              }
            ],
            "example": {
              "title": "Worked example: uplift on a floor",
              "html": "<p>A floor carries 900 kN downward and seepage exerts 300 kN of uplift, with no other vertical loads:</p>\\[N = 900 - 300 = 600\\ \\text{kN}\\]<p>Friction is computed on this 600 kN. Treating the uplift as extra weight would give 1200 kN and badly overstate the resistance.</p>"
            },
            "points": [
              {
                "html": "Uplift opposes the downward load: a floor carrying 900 kN with 300 kN of seepage uplift has an effective normal force of 600 kN for base friction.",
                "sources": [
                  {
                    "id": "CAP4-08-00038",
                    "label": "p. 31; topic 8 point 57"
                  }
                ]
              },
              {
                "html": "Seepage exiting beyond a floor on sand that carries grains away is internal erosion causing undermining, which progressively removes the floor's support.",
                "sources": [
                  {
                    "id": "CAP4-08-00039",
                    "label": "p. 31; topic 8 point 57"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00038",
                "label": "p. 31; topic 8 point 57"
              },
              {
                "id": "CAP4-08-00039",
                "label": "p. 31; topic 8 point 57"
              }
            ]
          },
          {
            "id": "earth-dam-zoning-and-construction",
            "title": "Earth dams: zoned sections, rolled-fill construction and crest width",
            "html": "<p>A <em>zoned earth dam</em> gives each zone a task, and the zones only work together. The core must connect properly to the foundation and abutment treatment, and it does not by itself eliminate seepage or internal erosion.</p><table><thead><tr><th scope='col'>Zone</th><th scope='col'>Task</th></tr></thead><tbody><tr><td>Central core</td><td>Restricts seepage through the embankment</td></tr><tr><td>Outer shells</td><td>Provide stability and bulk</td></tr><tr><td>Filters</td><td>Retain migrating soil while passing water</td></tr><tr><td>Drains</td><td>Collect seepage and discharge it safely</td></tr><tr><td>Upstream protection</td><td>Resists wave erosion</td></tr></tbody></table><p>In <em>rolled-fill construction</em> the fill goes down in thin, controlled layers, is brought to the specified moisture band and is compacted with rollers. Hydraulic fill is instead placed by water transport, and end dumping lacks controlled lift compaction. The specified moisture band may lie wet or dry of laboratory optimum depending on the zone and its performance requirements.</p><p>For a preliminary estimate only, a crest-width relation is sometimes adopted for low earth dams. It is an empirical starting value with no identified standard behind it; traffic, compaction access, seismic performance and the governing dam code may require a different width.</p>",
            "formulas": [
              {
                "label": "Preliminary crest width, assumed relation",
                "tex": "b = 0.2H + 3",
                "where": "<p>\\(b\\) and \\(H\\) in metres; an assumed starting value, not a standard requirement.</p>"
              }
            ],
            "example": {
              "title": "Worked example: crest width for a 10 m dam",
              "html": "<p>Adopting the relation for a dam 10 m high:</p>\\[b = 0.2 \\times 10 + 3 = 5.0\\ \\text{m}\\]<p>Treat 5.0 m as a first estimate to be checked against access, compaction plant and seismic requirements.</p>"
            },
            "points": [
              {
                "html": "In a zoned earth dam the low-permeability central core restricts seepage through the embankment; drains collect water, filters retain soil and upstream protection resists waves.",
                "sources": [
                  {
                    "id": "CAP4-08-00026",
                    "label": "p. 31; topic 8 point 28; topic 8 point 42"
                  }
                ]
              },
              {
                "html": "Laying fill in thin controlled layers at the specified moisture and compacting each with rollers is rolled-fill construction; the band may be wet or dry of optimum.",
                "sources": [
                  {
                    "id": "CAP4-08-00086",
                    "label": "p. 32; topic 8 point 94"
                  }
                ]
              },
              {
                "html": "The assumed preliminary relation \\(b = 0.2H + 3\\) gives a 5.0 m crest width for a 10 m low earth dam; it is not a certified standard.",
                "sources": [
                  {
                    "id": "CAP4-08-00025",
                    "label": "p. 31; topic 8 point 27"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00026",
                "label": "p. 31; topic 8 point 28; topic 8 point 42"
              },
              {
                "id": "CAP4-08-00086",
                "label": "p. 32; topic 8 point 94"
              },
              {
                "id": "CAP4-08-00025",
                "label": "p. 31; topic 8 point 27"
              }
            ]
          },
          {
            "id": "phreatic-line-and-sloughing",
            "title": "Seepage through earth dams: the phreatic line and downstream sloughing",
            "html": "<p>The <em>phreatic surface</em> in an earth dam is the surface of zero gauge pore pressure, where the absolute water pressure equals local atmospheric pressure. Pore pressure is generally positive below it, and capillary water can rise above it under suction. The seepage field beneath is flowing, so its pressures are not simply hydrostatic.</p><p>Its idealised shape follows from the <em>Dupuit</em> approximation: steady one-dimensional unconfined flow through homogeneous isotropic soil over a horizontal impervious base, with no distributed recharge or leakage. Constant discharge per unit width then makes \\(h^2\\) vary linearly with distance, a parabolic profile. Real phreatic lines depend on boundaries, anisotropy, drains and entrance and exit corrections, so not every dam has an exact parabola.</p><p>When saturation reaches the downstream face, repeated shallow slips and progressive shedding of face material indicate <em>sloughing</em>, often promoted by poor drainage. Internal piping is a different mechanism that removes soil along a seepage path inside the dam or foundation. Upstream rapid-drawdown failure and crest overtopping differ in where and when they occur.</p>",
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
                "html": "The phreatic surface is where pore-water pressure is zero gauge pressure, so its absolute pressure equals the local atmosphere; the seepage below is not hydrostatic throughout.",
                "sources": [
                  {
                    "id": "CAP4-08-00082",
                    "label": "p. 32; topic 8 point 90"
                  }
                ]
              },
              {
                "html": "Under the stated Dupuit approximation, with \\(h^2\\) linear in distance, the idealised phreatic profile is a parabola; drains, anisotropy and boundary corrections change real profiles.",
                "sources": [
                  {
                    "id": "CAP4-08-00097",
                    "label": "p. 33; topic 8 point 107"
                  }
                ]
              },
              {
                "html": "Shallow repeated slips and progressive loss of material from a saturated downstream face, with no internal tunnel yet, indicate downstream sloughing rather than piping.",
                "sources": [
                  {
                    "id": "CAP4-08-00032",
                    "label": "p. 31; topic 8 point 35"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00082",
                "label": "p. 32; topic 8 point 90"
              },
              {
                "id": "CAP4-08-00097",
                "label": "p. 33; topic 8 point 107"
              },
              {
                "id": "CAP4-08-00032",
                "label": "p. 31; topic 8 point 35"
              }
            ]
          },
          {
            "id": "spillways-as-flood-routes",
            "title": "Spillways as the flood route: morning-glory and siphon arrangements",
            "html": "<p>When a flood exceeds turbine discharge and the available flood storage, the <em>spillway</em> routes the surplus safely downstream; it is often called the safety valve of the reservoir. Its adequacy still depends on flood routing, discharge capacity, gate reliability and energy dissipation. Power intakes, foundation drains and penstock air valves do not substitute for it.</p><p>A <em>morning-glory</em> inlet is the flared circular lip of a <em>shaft spillway</em>: overflow enters around the lip and drops down a vertical shaft. A side-channel spillway instead collects flow in a channel alongside its crest, a siphon relies on primed enclosed flow and a chute conveys flow down an open slope. The inlet name does not imply that one crest-flow equation governs every operating depth.</p><p>A <em>siphon spillway</em> may have its crest set near full-supply level, yet crest elevation alone does not fix its discharge as the reservoir rises. It first passes unprimed overflow, then changes to full siphonic flow as air is removed. Priming, air admission or venting, de-priming, head difference and outlet conditions set its rating; no mechanical pumping is involved.</p>",
            "points": [
              {
                "html": "The spillway is the component designed to route flood surplus safely downstream when inflow exceeds turbine discharge and flood storage: the reservoir's safety valve.",
                "sources": [
                  {
                    "id": "CAP4-08-00043",
                    "label": "p. 31; topic 8 point 46"
                  }
                ]
              },
              {
                "html": "A flared circular lip feeding a vertical shaft is a morning-glory shaft spillway, unlike a side-channel, siphon or chute arrangement.",
                "sources": [
                  {
                    "id": "CAP4-08-00028",
                    "label": "p. 31; topic 8 point 31"
                  }
                ]
              },
              {
                "html": "Once the reservoir rises above a siphon crest, priming, air admission and outlet conditions determine the flow regime and discharge, not crest elevation alone.",
                "sources": [
                  {
                    "id": "CAP4-08-00093",
                    "label": "p. 33; topic 8 point 103"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00043",
                "label": "p. 31; topic 8 point 46"
              },
              {
                "id": "CAP4-08-00028",
                "label": "p. 31; topic 8 point 31"
              },
              {
                "id": "CAP4-08-00093",
                "label": "p. 33; topic 8 point 103"
              }
            ]
          },
          {
            "id": "energy-dissipation-below-spillways",
            "title": "Energy dissipation: hydraulic-jump basins and flip buckets",
            "html": "<p>Flow leaving a sloping glacis or spillway face is shallow, fast and <em>supercritical</em>. In a properly sized stilling basin with enough tailwater it forms a <em>hydraulic jump</em>, changing to deeper, slower subcritical flow while much of the excess mechanical energy becomes turbulence and heat. The conjugate depths follow from momentum, not from conservation of specific energy, because the jump loses energy by design. The basin and tailwater must hold the jump in place.</p><p>If the tailwater is shallower than the <em>required sequent depth</em>, the jump can sweep out of a conventional basin. Where an adequately investigated rock plunge pool is available, a <em>ski-jump or flip bucket</em> may be considered: it throws the jet clear so that energy is dissipated in the plunge-pool region rather than at the toe.</p><p>Low tailwater alone does not select a flip bucket; jet trajectory, rock scour, bank stability and downstream consequences must all be checked. An unaltered submerged roller bucket, which itself depends on submergence, or a basin needing even more tailwater does not overcome the shortfall.</p>",
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
            "points": [
              {
                "html": "A hydraulic jump in a well-proportioned stilling basin with enough tailwater changes supercritical glacis flow to subcritical flow, turning surplus mechanical energy into turbulence and heat.",
                "sources": [
                  {
                    "id": "CAP4-08-00044",
                    "label": "p. 31; topic 8 point 47"
                  }
                ]
              },
              {
                "html": "When tailwater falls short of the required sequent depth and an assessed rock plunge pool exists, a ski-jump or flip bucket may be considered, subject to scour and trajectory checks.",
                "sources": [
                  {
                    "id": "CAP4-08-00030",
                    "label": "p. 31; topic 8 point 33"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00044",
                "label": "p. 31; topic 8 point 47"
              },
              {
                "id": "CAP4-08-00030",
                "label": "p. 31; topic 8 point 33"
              }
            ]
          },
          {
            "id": "gates-and-dependable-operation",
            "title": "Gates: fixed-wheel, radial and drum types, and dependable operation",
            "html": "<p>Gate names describe mechanisms. A <em>fixed-wheel gate</em> is a vertical-lift gate whose wheels are mounted permanently on the moving leaf and run on fixed tracks; 'fixed' refers to the wheels, not to an immovable gate. Free-roller gates use an independent roller train, sliding gates rely on sliding contact, and popularity cannot be ranked without a defined set of structures.</p><p>A <em>radial or Tainter gate</em> has a curved skin plate on radial arms that pivot on trunnions near its centre of curvature. Water pressure acts roughly through that centre, easing hoisting, although weight, friction and seals still matter. A <em>drum gate</em> is buoyant: water entering and leaving its chamber through auxiliary passages raises or lowers it, so blocked passages can impair operation and need protection matched to the actual debris risk.</p><p>The flood capacity of a gated spillway depends on the gates opening when required, not on a rating computed with every gate already open. A tested gate-operating system with independent or emergency power, maintenance and procedures is part of flood-release reliability; gate type alone cannot guarantee safe reservoir levels.</p>",
            "points": [
              {
                "html": "A vertical-lift gate whose load-carrying wheels are fixed to the moving leaf and run on fixed tracks is a fixed-wheel gate; 'fixed' describes the wheels.",
                "sources": [
                  {
                    "id": "CAP4-08-00029",
                    "label": "p. 31; topic 8 point 32; topic 8 point 38"
                  }
                ]
              },
              {
                "html": "A curved leaf on radial arms rotating about trunnions near its centre of curvature is a radial or Tainter gate.",
                "sources": [
                  {
                    "id": "CAP4-08-00105",
                    "label": "p. 33; topic 8 point 115"
                  }
                ]
              },
              {
                "html": "Because a drum gate depends on its chamber passages, protect the vulnerable passages according to the actual debris risk rather than assuming no screening is needed.",
                "sources": [
                  {
                    "id": "CAP4-08-00088",
                    "label": "p. 33; topic 8 point 97"
                  }
                ]
              },
              {
                "html": "Gated flood-release reliability needs a tested gate-operating and emergency-power arrangement; a hydraulic rating with every gate open does not show that the gates will open.",
                "sources": [
                  {
                    "id": "CAP4-08-00106",
                    "label": "p. 33; topic 8 point 115"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00029",
                "label": "p. 31; topic 8 point 32; topic 8 point 38"
              },
              {
                "id": "CAP4-08-00105",
                "label": "p. 33; topic 8 point 115"
              },
              {
                "id": "CAP4-08-00088",
                "label": "p. 33; topic 8 point 97"
              },
              {
                "id": "CAP4-08-00106",
                "label": "p. 33; topic 8 point 115"
              }
            ]
          },
          {
            "id": "outlets-and-hydrostatic-level",
            "title": "Controlled outlets and hydrostatic measurement of reservoir level",
            "html": "<p>Routine downstream supply while the turbines are shut down and the reservoir is below the overflow crest calls for a <em>sluiceway</em> or other gated outlet conduit in the dam body. Its elevation, gate control and downstream energy dissipation govern performance. An ungated overflow crest cannot release water below crest level, foundation pressure-relief drains are not a demand-release system, and a power intake upstream of closed turbine valves delivers nothing downstream.</p><p>Reservoir level can be inferred <em>hydrostatically</em> from a pressure sensor in still water. The pressure head above the sensor is the gauge pressure divided by \\(\\rho g\\), and adding the sensor elevation gives the water-surface elevation. The inference needs the pressure reference, water density and sensor datum; an absolute-pressure reading must first be corrected for atmospheric pressure.</p>",
            "formulas": [
              {
                "label": "Water-surface elevation from a pressure sensor",
                "tex": "z_{\\text{ws}} = z_s + \\dfrac{p}{\\rho g}",
                "where": "<p>\\(z_s\\) is the sensor elevation and \\(p\\) the gauge pressure it reads.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a sensor 2 m above the datum",
              "html": "<p>A gauge reading of 98.1 kPa, with \\(\\rho\\) = 1000 kg/m<sup>3</sup> and \\(g\\) = 9.81 m/s²:</p>\\[\\begin{aligned} \\dfrac{p}{\\rho g} &amp;= \\dfrac{98\\,100}{1000 \\times 9.81} = 10\\ \\text{m} \\\\ z_{\\text{ws}} &amp;= 2 + 10 = 12\\ \\text{m} \\end{aligned}\\]<p>Forgetting the sensor's own 2 m elevation would understate the level as 10 m.</p>"
            },
            "points": [
              {
                "html": "With the turbines shut and the reservoir below the crest, a gated outlet conduit or sluiceway makes routine downstream releases; the spillway principally routes floods.",
                "sources": [
                  {
                    "id": "CAP4-08-00101",
                    "label": "p. 33; topic 8 point 111"
                  }
                ]
              },
              {
                "html": "A 98.1 kPa gauge reading at a sensor 2 m above the datum means 10 m of water above it, a surface elevation of 12 m.",
                "sources": [
                  {
                    "id": "CAP4-08-00098",
                    "label": "p. 33; topic 8 point 108"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00101",
                "label": "p. 33; topic 8 point 111"
              },
              {
                "id": "CAP4-08-00098",
                "label": "p. 33; topic 8 point 108"
              }
            ]
          }
        ],
        "formulaSheet": [
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
            "label": "Effective normal force",
            "tex": "N = W - U"
          },
          {
            "label": "Shear-friction factor",
            "tex": "FS = \\dfrac{\\mu N + cA}{T}"
          },
          {
            "label": "Preliminary crest width",
            "tex": "b = 0.2H + 3",
            "note": "Assumed empirical relation in metres, not a standard."
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
            "label": "Hydrostatic level",
            "tex": "z_{\\text{ws}} = z_s + \\dfrac{p}{\\rho g}",
            "note": "p is the gauge pressure at the sensor."
          }
        ],
        "cautions": [
          {
            "id": "caution-gravity-dam-strong-foundation",
            "status": "review",
            "prompt": "A gravity dam is most suitable when the foundation is strong",
            "html": "<p>Strength is necessary but not sufficient. Limited deformation, adequate shear resistance along seams and joints, and controllable seepage are also required, so a strength label cannot replace geological investigation.</p>",
            "sources": [
              {
                "id": "CAP4-08-00023",
                "label": "p. 31; topic 8 point 25"
              }
            ]
          },
          {
            "id": "caution-earth-dam-crest-width-rule",
            "status": "review",
            "prompt": "The recommended top width of a low earth dam is 0.2H + 3",
            "html": "<p>No applicable standard or edition is identified for this empirical relation, so treat it as an assumed preliminary estimate. Traffic, compaction access, seismic performance and the governing dam standard may require a different crest width.</p>",
            "sources": [
              {
                "id": "CAP4-08-00025",
                "label": "p. 31; topic 8 point 27"
              }
            ]
          },
          {
            "id": "caution-middle-third-used-in-tension",
            "status": "corrected",
            "prompt": "The middle-third rule is used in tension",
            "html": "<p>The printed fraction is split and the wording misleading. The rule is a no-tension condition: under linear stress on a rectangular base, a resultant within the middle third keeps both edges in compression. It says nothing by itself about sliding, bearing or uplift.</p>",
            "sources": [
              {
                "id": "CAP4-08-00027",
                "label": "p. 31; topic 8 point 29; topic 8 point 30"
              }
            ]
          },
          {
            "id": "caution-fixed-gates-mostly-used",
            "status": "review",
            "prompt": "Fixed gates are mostly used in modern hydraulic structures",
            "html": "<p>Ambiguous and unranked. The defensible content is the fixed-wheel vertical-lift gate, whose wheels are attached to the moving leaf; popularity cannot be established without a defined population of structures.</p>",
            "sources": [
              {
                "id": "CAP4-08-00029",
                "label": "p. 31; topic 8 point 32; topic 8 point 38"
              }
            ]
          },
          {
            "id": "caution-ski-jump-and-jump-height",
            "status": "corrected",
            "prompt": "A ski jump is provided if jump height exceeds tailwater depth",
            "html": "<p>'Jump height' is undefined; compare the available tailwater with the required sequent depth. Even when tailwater is short, a flip bucket needs an assessed plunge pool and checks of jet trajectory, scour and bank stability, so its suitability remains site-dependent.</p>",
            "sources": [
              {
                "id": "CAP4-08-00030",
                "label": "p. 31; topic 8 point 33"
              }
            ]
          },
          {
            "id": "caution-homogeneous-dam-impervious-only",
            "status": "corrected",
            "prompt": "A homogeneous earth dam is suitable only on an impervious foundation",
            "html": "<p>An impervious foundation is favourable, not mandatory. On a pervious foundation, feasibility depends on seepage, exit gradients, uplift, settlement and constructible cutoffs, filters and drains.</p>",
            "sources": [
              {
                "id": "CAP4-08-00033",
                "label": "p. 31; topic 8 point 36"
              }
            ]
          },
          {
            "id": "caution-stepped-base-shear-strength",
            "status": "review",
            "prompt": "A gravity dam base is stepped to increase the shear strength",
            "html": "<p>Steps or keys can improve sliding resistance by mobilising bearing, interlock or a different shear path, but they do not automatically raise material shear strength. The resisting mechanism and foundation capacity must be checked in each case.</p>",
            "sources": [
              {
                "id": "CAP4-08-00036",
                "label": "p. 31; topic 8 point 40"
              }
            ]
          },
          {
            "id": "caution-empty-reservoir-heel-stress",
            "status": "corrected",
            "prompt": "With the reservoir empty, heel stress is 2W/B and toe stress is zero",
            "html": "<p>The printed fraction is broken, and the result holds only for an elementary triangular section with a vertical upstream face, per unit length, under weight alone with no uplift. Other sections have other empty-reservoir distributions.</p>",
            "sources": [
              {
                "id": "CAP4-08-00040",
                "label": "p. 31; topic 8 point 43"
              }
            ]
          },
          {
            "id": "caution-shear-friction-three-to-five",
            "status": "review",
            "prompt": "The shear friction factor against sliding should exceed 3 to 5",
            "html": "<p>The threshold is unexplained and is not adopted as a universal requirement. Shear-friction formulations and permissible cohesion differ between methods, so acceptance values come from the governing standard and load case.</p>",
            "sources": [
              {
                "id": "CAP4-08-00053",
                "label": "p. 31; topic 8 point 58"
              }
            ]
          },
          {
            "id": "caution-phreatic-line-atmospheric-pressure",
            "status": "review",
            "prompt": "Hydrostatic pressure on the phreatic line equals atmospheric pressure",
            "html": "<p>Correct in gauge terms: the phreatic surface is where pore pressure is zero gauge, so its absolute pressure equals local atmospheric pressure. The seepage field below it is flowing and should not be described as hydrostatic throughout.</p>",
            "sources": [
              {
                "id": "CAP4-08-00082",
                "label": "p. 32; topic 8 point 90"
              }
            ]
          },
          {
            "id": "caution-rolled-fill-under-omc",
            "status": "review",
            "prompt": "Rolled fill is compacted in layers by power rollers under OMC",
            "html": "<p>Read 'under OMC' as controlled moisture near the project requirement. The specified band may be wet or dry of laboratory optimum depending on the zone and performance requirements; there is no obligatory below-optimum rule.</p>",
            "sources": [
              {
                "id": "CAP4-08-00086",
                "label": "p. 32; topic 8 point 94"
              }
            ]
          },
          {
            "id": "caution-drum-gate-no-trash-rack",
            "status": "review",
            "prompt": "A trash rack is not required at the entrance of a drum gate installation",
            "html": "<p>The source gives no diagram or definition of 'entrance'. Drum gates depend on clear chamber passages, so do not infer a universal no-rack rule; protection should match the actual debris risk of the installation, which needs checking.</p>",
            "sources": [
              {
                "id": "CAP4-08-00088",
                "label": "p. 33; topic 8 point 97"
              }
            ]
          },
          {
            "id": "caution-gravity-dam-axis-crown",
            "status": "review",
            "prompt": "The axis of a gravity dam is the upstream crown line",
            "html": "<p>Acceptable as a common plan-alignment convention, not as a universal centroidal or structural axis. The reference used on the project drawings must be confirmed before comparing coordinates or offsets.</p>",
            "sources": [
              {
                "id": "CAP4-08-00089",
                "label": "p. 33; topic 8 point 98"
              }
            ]
          },
          {
            "id": "caution-siphon-crest-at-full-level",
            "status": "review",
            "prompt": "The crest of a siphon spillway is fixed at full reservoir level",
            "html": "<p>A design concept, not a universal fixed rule. Discharge depends on how the siphon primes, how air enters or is vented and on outlet conditions, and the crest position relative to full-supply level varies with the design.</p>",
            "sources": [
              {
                "id": "CAP4-08-00093",
                "label": "p. 33; topic 8 point 103"
              }
            ]
          },
          {
            "id": "caution-phreatic-line-parabolic",
            "status": "review",
            "prompt": "The phreatic line of an earth embankment is parabolic",
            "html": "<p>Parabolic under the Dupuit approximation for steady one-dimensional unconfined flow over a horizontal impervious base with no distributed recharge or leakage. Anisotropy, drains and entry and exit conditions alter real profiles.</p>",
            "sources": [
              {
                "id": "CAP4-08-00097",
                "label": "p. 33; topic 8 point 107"
              }
            ]
          },
          {
            "id": "caution-hydrostatic-level-incomplete",
            "status": "review",
            "prompt": "Hydrostatic level measurement of dam water level, as printed incompletely",
            "html": "<p>The capsule sentence is incomplete and the intended instrument is not recovered. The related numbers are original illustrations of hydrostatic level inference, so check the original completion before quoting the source.</p>",
            "sources": [
              {
                "id": "CAP4-08-00098",
                "label": "p. 33; topic 8 point 108"
              }
            ]
          },
          {
            "id": "caution-sluiceway-outlet-name",
            "status": "review",
            "prompt": "The sluiceway is the dam outlet that releases water for downstream demands",
            "html": "<p>The function is right: a gated outlet or sluiceway can release controlled supply below the spillway crest. Downstream releases are not always made through one universally named arrangement, so check the outlet works of the specific dam.</p>",
            "sources": [
              {
                "id": "CAP4-08-00101",
                "label": "p. 33; topic 8 point 111"
              }
            ]
          },
          {
            "id": "caution-kulekhani-radial-gates",
            "status": "review",
            "prompt": "The Kulekhani I spillways use radial or Tainter gates",
            "html": "<p>The radial-Tainter equivalence is sound, but the Kulekhani I installation is not established by the nearby notes or primary extraction. Verify as-built spillway records before stating it as a project fact.</p>",
            "sources": [
              {
                "id": "CAP4-08-00105",
                "label": "p. 33; topic 8 point 115"
              }
            ]
          },
          {
            "id": "caution-gates-maintain-safe-levels",
            "status": "review",
            "prompt": "Radial spillway gates control releases and maintain safe reservoir levels",
            "html": "<p>Gates maintain safe levels only if they open when required. That depends on a tested operating system with independent or emergency power, maintenance and procedures, not on the gate type or a rating computed with every gate open.</p>",
            "sources": [
              {
                "id": "CAP4-08-00106",
                "label": "p. 33; topic 8 point 115"
              }
            ]
          }
        ],
        "gaps": [
          "Arch, buttress and rockfill dam design and detailed dam-type comparison are not examined by these items.",
          "Spillway discharge equations, design-flood selection and flood routing are not calculated here.",
          "Seismic, silt and wave loads on gravity dams and complete load-combination checks are not covered.",
          "Storage-plant intake design and trash-rack hydraulics are not examined in this topic's items.",
          "Project-specific gate arrangements, including those claimed for Kulekhani I, remain unverified."
        ]
      },
      "ACiE0804": {
        "code": "ACiE0804",
        "questionCount": 4,
        "format": 2,
        "summary": "<p>This subchapter covers the headworks that divert and clean water for run-of-river plants: diversion weirs or barrages with under-sluices, intakes, trash racks and settling basins. The capsule items test the separate roles of main bays and under-sluices that share one gate type, what makes an intake submerged, what a trash rack intercepts, and the ideal overflow-rate calculation showing how plan area controls settling-basin removal.</p>",
        "blocks": [
          {
            "id": "ror-headworks-and-barrage-bays",
            "title": "Run-of-river headworks and the separate roles of barrage bays",
            "html": "<p>A run-of-river scheme diverts part of the river through its headworks instead of storing large volumes. A typical sequence runs from a diversion weir or barrage, past an intake with a trash rack, through a gravel trap and settling basin, into the headrace. Each part has one main task, and none can stand in for another.</p><table><thead><tr><th scope='col'>Component</th><th scope='col'>Main task</th></tr></thead><tbody><tr><td>Main weir or barrage bays</td><td>Pass river flow and floods</td></tr><tr><td>Under-sluice bays</td><td>Low-level releases that keep near-bed sediment away from the intake</td></tr><tr><td>Intake with trash rack</td><td>Admit the design flow while excluding large debris</td></tr><tr><td>Gravel trap and settling basin</td><td>Remove coarse and then finer sediment by settling</td></tr><tr><td>Flushing channel or outlets</td><td>Return trapped sediment to the river</td></tr></tbody></table><p>Gate <em>mechanism</em> and bay <em>purpose</em> are separate classifications. The main spillway bays and the low-level under-sluices may use the same radial gates, yet the first pass river floods while the second provide near-bed releases that help manage sediment approaching the intake. Under-sluices do not carry the diverted supply into the canal, and main bays neither settle suspended particles nor screen debris. How well an under-sluice keeps the intake clear depends on its level, operation and sediment design, not on the gate label.</p>",
            "points": [
              {
                "html": "Where main spillway bays and under-sluices share radial gates, the main bays pass river floods while the under-sluices help manage near-bed sediment at the intake.",
                "sources": [
                  {
                    "id": "CAP4-08-00107",
                    "label": "p. 33; topic 8 point 116"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00107",
                "label": "p. 33; topic 8 point 116"
              }
            ]
          },
          {
            "id": "submerged-intake-openings",
            "title": "Intake openings: submergence is measured from the water surface",
            "html": "<p>An intake is <em>submerged</em> when its opening lies below the operating water surface. That says nothing about sitting on the bed: an opening raised above the river bed so that less sediment enters is still submerged while the water surface stays above it. A bottom intake is one particular submerged arrangement, not the definition.</p><p>The chosen opening level is a balance. Enough submergence prevents air-entraining vortices, a higher sill reduces bed-load entry, and the approach and entrance shapes control hydraulic losses. A free-surface side intake over a weir crest is a different form again.</p>",
            "points": [
              {
                "html": "An opening raised above the bed yet still below the river's water surface remains a submerged intake: submergence refers to the water surface, not necessarily the bed.",
                "sources": [
                  {
                    "id": "CAP4-08-00048",
                    "label": "p. 31; topic 8 point 52"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00048",
                "label": "p. 31; topic 8 point 52"
              }
            ]
          },
          {
            "id": "trash-racks",
            "title": "Trash racks: screening floating and submerged debris at the intake",
            "html": "<p>A <em>trash rack</em> is a screen of parallel bars across the intake. It intercepts floating and submerged debris, such as branches and coarse objects, that is larger than the clear spacing between bars, before it can reach gates, conduits and turbines.</p><p>It screens objects; it does not remove fine sediment, which is the task of a desanding or settling basin, and it is unrelated to air-release or pressure-relief valves. A partly blocked rack raises the differential head across it and the structural load on it, so cleaning arrangements, manual or by mechanical rake, and a hydraulic design for the approach velocity remain necessary.</p>",
            "formulas": [
              {
                "label": "Head loss through a clean rack, Kirschmer form",
                "tex": "\\Delta h = K_t \\left(\\dfrac{t}{b}\\right)^{4/3} \\dfrac{v_0^2}{2g}\\,\\sin\\phi",
                "where": "<p>\\(K_t\\) bar-shape factor, \\(t\\) bar thickness, \\(b\\) clear spacing, \\(v_0\\) approach velocity and \\(\\phi\\) rack inclination to the horizontal.</p>"
              }
            ],
            "points": [
              {
                "html": "A trash rack intercepts floating and submerged debris larger than its bar spacing before it reaches the waterway; fine sediment is left to the settling basin.",
                "sources": [
                  {
                    "id": "CAP4-08-00047",
                    "label": "pp. 31, 33; topic 8 point 51; topic 8 point 95"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00047",
                "label": "pp. 31, 33; topic 8 point 51; topic 8 point 95"
              }
            ]
          },
          {
            "id": "settling-basin-overflow-rate",
            "title": "Settling basins: overflow rate, plan area and ideal removal",
            "html": "<p>A settling basin removes sediment by giving particles time to fall out of the flow. In the ideal <em>discrete-settling</em> model with unmixed particle trajectories, a particle is caught if it can fall through the basin depth while the water crosses the basin. Depth cancels out of that condition, so the removed fraction depends only on settling velocity, plan area and discharge.</p><p>The ratio of discharge to plan area is the <em>overflow rate</em>: particles settling at least that fast are fully removed, and slower ones in proportion to their settling velocity. At a given discharge, efficiency therefore rises with surface area, not with extra depth alone, until removal reaches its ceiling of 100%.</p><p>Real basins fall short of the ideal because of short-circuiting, turbulence and inlet or outlet disturbance.</p>",
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
            "moreHtml": "<p>The ideal trajectory model is not interchangeable with a depth-mixed model, in which turbulence keeps particles spread through the depth and removal follows an exponential law. For the same inputs that law gives \\(1 - e^{-0.5}\\), about 39%, and \\(1 - e^{-1}\\), about 63%, well below the ideal 50% and 100%.</p><p>The removed fraction also sets how fast deposits build up. The deposited volume is the trapped sediment mass divided by the deposit's bulk density, and the flushing interval is the available sediment storage divided by that rate; the capsule items do not work these figures.</p>",
            "points": [
              {
                "html": "In an ideal discrete-settling basin passing 2 m<sup>3</sup>/s over 250 m<sup>2</sup>, particles settling at 0.004 m/s are 50% removed, then 100% once the plan area doubles at the same flow.",
                "sources": [
                  {
                    "id": "CAP4-08-00045",
                    "label": "p. 31; topic 8 point 48; topic 8 point 50"
                  }
                ]
              },
              {
                "html": "Under the ideal overflow-rate criterion, extra depth alone does not raise removal, and once removal reaches 100% more plan area adds nothing for that particle size.",
                "sources": [
                  {
                    "id": "CAP4-08-00045",
                    "label": "p. 31; topic 8 point 48; topic 8 point 50"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00045",
                "label": "p. 31; topic 8 point 48; topic 8 point 50"
              }
            ]
          }
        ],
        "formulaSheet": [
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
          },
          {
            "label": "Trash-rack head loss",
            "tex": "\\Delta h = K_t \\left(\\dfrac{t}{b}\\right)^{4/3} \\dfrac{v_0^2}{2g}\\,\\sin\\phi",
            "note": "Clean rack; blockage raises the loss."
          }
        ],
        "cautions": [
          {
            "id": "caution-surface-area-and-settling-efficiency",
            "status": "review",
            "prompt": "Increasing surface area increases settling-basin efficiency at a given discharge",
            "html": "<p>True under the ideal discrete-settling model, where removal equals \\(v_s A/Q\\) up to a ceiling of 100%. Once particles are fully removed, more area adds nothing, and depth-mixed or turbulent conditions follow different removal laws.</p>",
            "sources": [
              {
                "id": "CAP4-08-00045",
                "label": "p. 31; topic 8 point 48; topic 8 point 50"
              }
            ]
          },
          {
            "id": "caution-submerged-intake-at-bottom",
            "status": "corrected",
            "prompt": "A submerged intake is located at the bottom of the river",
            "html": "<p>Submergence refers to the operating water surface, not the bed. An opening set above the bed to limit sediment intake can still be submerged; a bottom intake is only one submerged form.</p>",
            "sources": [
              {
                "id": "CAP4-08-00048",
                "label": "p. 31; topic 8 point 52"
              }
            ]
          },
          {
            "id": "caution-sunkoshi-barrage-radial-gates",
            "status": "review",
            "prompt": "The Sunkoshi barrage under-sluice and spillway gates are radial gates",
            "html": "<p>Not verified from an as-built or operator record. The related item treats radial gates as a hypothetical design input, so confirm the project's actual gate types before quoting this as fact.</p>",
            "sources": [
              {
                "id": "CAP4-08-00107",
                "label": "p. 33; topic 8 point 116"
              }
            ]
          }
        ],
        "gaps": [
          "Bed-load and suspended-sediment characterisation and sediment sampling are not examined by these four items.",
          "Settling-basin dimensions, deposited-sediment volume, flushing arrangements and flushing frequency are not worked numerically by the capsule items.",
          "Weir and barrage hydraulic design, trash-rack losses and intake discharge calculations are outside these items.",
          "The gate types of the Sunkoshi barrage remain unverified."
        ]
      },
      "ACiE0805": {
        "code": "ACiE0805",
        "questionCount": 14,
        "format": 2,
        "summary": "<p>This subchapter covers the conveyance from intake to turbine: surge tanks and forebays, the pressure waterway and penstocks, and the excavation, support, drainage and lining of hydraulic tunnels. The capsule items test how a surge tank eases transients, vented versus air-cushion chambers, the headrace-penstock-turbine path, penstock sizing by continuity, the velocity-squared growth of friction loss, forebay balancing storage, heading and benching, trimmers, the drill-and-blast cycle, forepoling, side drains and cast iron segments.</p>",
        "blocks": [
          {
            "id": "surge-tanks-and-transients",
            "title": "Surge tanks: storage exchange while the water column adjusts",
            "html": "<p>When turbine demand changes quickly, the long water column in a headrace cannot change speed instantly. A suitably connected <em>surge tank</em> lets the difference be exchanged with storage. On a rapid load reduction the tank takes in the surplus still arriving from upstream while the headrace column slows, so the upstream waterway sees smaller pressure excursions; when demand rises, it supplies water while the column accelerates.</p><p>The tank reduces selected transient effects and separates parts of the transient response; it does not eliminate water hammer. Penstock pressure waves and adverse minimum pressures can still occur between the tank and the turbine, so closure timing and a full-system transient analysis remain necessary. The tank neither schedules guide-vane closure nor diverts the normal generating flow.</p><p>A protective roof does not change the hydraulic type. A covered but vented tank keeps a <em>free atmospheric boundary</em>, whereas a sealed <em>air-cushion chamber</em> deliberately uses the compression and expansion of trapped air. Surge tanks are therefore not sealed merely to keep out debris, yet an engineered closed air chamber is a legitimate design.</p>",
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
                "html": "On a rapid load reduction, a side-connected surge tank accepts excess upstream flow while the water column decelerates, reducing but not eliminating transient pressures.",
                "sources": [
                  {
                    "id": "CAP4-08-00050",
                    "label": "pp. 31, 32; topic 8 point 54; topic 8 point 55; topic 8 point 64; topic 8 point 65"
                  }
                ]
              },
              {
                "html": "A vented surge tank keeps a free atmospheric boundary even under a roof, whereas an air-cushion chamber works by compressing trapped air: a compressible air cushion versus a free surface.",
                "sources": [
                  {
                    "id": "CAP4-08-00049",
                    "label": "p. 31; topic 8 point 53"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00050",
                "label": "pp. 31, 32; topic 8 point 54; topic 8 point 55; topic 8 point 64; topic 8 point 65"
              },
              {
                "id": "CAP4-08-00049",
                "label": "p. 31; topic 8 point 53"
              }
            ]
          },
          {
            "id": "waterway-path-and-forebay",
            "title": "The waterway from reservoir to turbine, and forebay balancing",
            "html": "<p>Generation flow follows a physical path, not a list of components. In a reservoir-fed scheme it runs from the reservoir through the headrace tunnel into the penstock and on to the turbine, then leaves through the draft tube or tailrace. A surge chamber sits at the junction of headrace and penstock, connected from the side: it accepts or supplies transient flow there, while steady generation flow need not pass through its volume.</p><p>The <em>penstock</em> is the conduit carrying pressurised water to the machine. In an open-headrace Francis scheme it links the forebay with the machine's inlet or scroll casing, whereas a Pelton penstock feeds its nozzle arrangement. The draft tube lies downstream of a reaction runner and the tailrace carries discharged water away, so neither supplies the turbine; a spill channel disposes of surplus water.</p><p>In an open-headrace scheme the <em>forebay</em> provides short-term balancing at the head of the penstock. Its storage changes by inflow minus outflow. Intake submergence, permissible drawdown and overflow arrangements also matter, and a forebay is not automatically enough for long-duration peaking.</p>",
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
                "html": "In a reservoir-fed scheme, flow runs reservoir to headrace to penstock to turbine; a side-connected surge chamber exchanges water at the upstream headrace-penstock junction.",
                "sources": [
                  {
                    "id": "CAP4-08-00074",
                    "label": "p. 32; topic 8 point 80"
                  }
                ]
              },
              {
                "html": "The penstock is the pressure conduit feeding a Francis turbine's scroll casing from the forebay in an open-headrace scheme; a Pelton penstock feeds nozzles instead.",
                "sources": [
                  {
                    "id": "CAP4-08-00078",
                    "label": "p. 32; topic 8 point 84"
                  }
                ]
              },
              {
                "html": "A forebay fed at 2 m<sup>3</sup>/s while turbines draw 4 m<sup>3</sup>/s for 10 minutes must supply 1200 m<sup>3</sup> of usable storage.",
                "sources": [
                  {
                    "id": "CAP4-08-00103",
                    "label": "p. 33; topic 8 point 113"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00074",
                "label": "p. 32; topic 8 point 80"
              },
              {
                "id": "CAP4-08-00078",
                "label": "p. 32; topic 8 point 84"
              },
              {
                "id": "CAP4-08-00103",
                "label": "p. 33; topic 8 point 113"
              }
            ]
          },
          {
            "id": "penstock-sizing-and-friction-loss",
            "title": "Preliminary penstock sizing and how friction loss grows with velocity",
            "html": "<p>A first penstock size follows from continuity: the flow area is discharge divided by the adopted mean velocity, and a circular pipe of that area has a definite diameter. The velocity is only a stated preliminary assumption; energy loss, water-hammer pressure, pressure rating and economics must be compared before a diameter is adopted. A higher velocity gives a smaller, cheaper pipe but larger losses and surges.</p><p>Friction loss follows the <em>Darcy–Weisbach</em> equation. With the same length and diameter and a constant friction factor, loss scales with the square of velocity, not with the velocity ratio. In reality the friction factor varies with Reynolds number and roughness regime, so constant \\(f\\) is an explicit comparison assumption. Either way, loss in a given pipe increases with velocity, and every metre lost comes straight off the net head.</p>",
            "formulas": [
              {
                "label": "Continuity for a circular conduit",
                "tex": "A = \\dfrac{Q}{V}, \\quad D = \\sqrt{\\dfrac{4A}{\\pi}}"
              },
              {
                "label": "Darcy–Weisbach friction loss",
                "tex": "h_f = f\\,\\dfrac{L}{D}\\,\\dfrac{V^2}{2g}"
              },
              {
                "label": "Loss ratio at fixed f, L and D",
                "tex": "\\dfrac{h_{f2}}{h_{f1}} = \\left(\\dfrac{V_2}{V_1}\\right)^2"
              }
            ],
            "example": {
              "title": "Worked examples: diameter and loss ratio",
              "html": "<p>Adopting 7 m/s for 7 m<sup>3</sup>/s:</p>\\[\\begin{aligned} A &amp;= 7/7 = 1\\ \\text{m}^2 \\\\ D &amp;= \\sqrt{4 \\times 1/\\pi} = 1.128\\ \\text{m} \\end{aligned}\\]<p>That is about 1.13 m. Raising the velocity from 4 to 6 m/s in the same pipe at constant \\(f\\):</p>\\[\\dfrac{h_{f2}}{h_{f1}} = \\left(\\dfrac{6}{4}\\right)^2 = 2.25\\]<p>The loss becomes 2.25 times the initial value, not 1.5 times.</p>"
            },
            "points": [
              {
                "html": "Adopting 7 m/s for 7 m<sup>3</sup>/s gives a 1 m² flow area and a circular internal diameter of about 1.13 m; the velocity is a preliminary assumption only.",
                "sources": [
                  {
                    "id": "CAP4-08-00058",
                    "label": "p. 32; topic 8 point 63"
                  }
                ]
              },
              {
                "html": "With length, diameter and Darcy friction factor unchanged, raising penstock velocity from 4 to 6 m/s means the friction loss becomes 2.25 times the initial loss.",
                "sources": [
                  {
                    "id": "CAP4-08-00080",
                    "label": "p. 32; topic 8 point 87"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00058",
                "label": "p. 32; topic 8 point 63"
              },
              {
                "id": "CAP4-08-00080",
                "label": "p. 32; topic 8 point 87"
              }
            ]
          },
          {
            "id": "rock-tunnel-excavation",
            "title": "Rock-tunnel excavation: heading and bench, trimmers and the work cycle",
            "html": "<p>Large rock tunnels are often excavated in stages. In <em>heading and benching</em> the upper part of the section, the heading, is excavated first and the remaining lower part, the bench, follows. The method is common in rock, but suitability depends on opening size, ground, support and equipment; it is not restricted to perfectly self-supporting hard rock. Full-face excavation takes the whole section at once, a pilot drift is a small advance opening, and cut-and-cover works from the surface.</p><p><em>Trimmer</em> or perimeter work forms the intended finished outline of the tunnel, limiting unwanted overbreak and helping the lining geometry. It is distinct from the initial relief opening within the face and from the bulk rock between them, and its function alone does not fix a drilling or firing order.</p><p>A conceptual drill-and-blast cycle, with charging and blasting between drilling and ventilation, runs:</p><ol><li>Mark the tunnel profile.</li><li>Set up and drill.</li><li>Ventilate and verify the atmosphere after the blast.</li><li>A competent person inspects and clears any misfire.</li><li>Remove the muck.</li></ol><p>This outline explains the order of stages; it is not an operational blasting or re-entry procedure.</p>",
            "moreHtml": "<p>Staging does not make muck removal inherently easy or hard. Productivity depends on working space, ramps, equipment, traffic and support constraints, so poor access to the heading can slow removal even where the rock class is the same.</p>",
            "points": [
              {
                "html": "Excavating the upper part of a large rock tunnel first and the lower part afterwards is heading and benching, a staged method not confined to self-supporting hard rock.",
                "sources": [
                  {
                    "id": "CAP4-08-00054",
                    "label": "p. 32; topic 8 point 59"
                  }
                ]
              },
              {
                "html": "With the same rock class, a narrow steep ramp to the heading means heading access and equipment may make muck removal more difficult; the method name guarantees nothing.",
                "sources": [
                  {
                    "id": "CAP4-08-00056",
                    "label": "p. 32; topic 8 point 61"
                  }
                ]
              },
              {
                "html": "Trimmer or perimeter work controls the final excavation outline and limits unwanted overbreak; it does not by itself fix a drilling or firing order.",
                "sources": [
                  {
                    "id": "CAP4-08-00096",
                    "label": "p. 33; topic 8 point 106"
                  }
                ]
              },
              {
                "html": "The listed stages run: mark profile; set up and drill; ventilate and verify atmosphere; competent-person misfire clearance; muck, with charging and blasting falling between drilling and ventilation.",
                "sources": [
                  {
                    "id": "CAP4-08-00052",
                    "label": "p. 31; topic 8 point 57"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00054",
                "label": "p. 32; topic 8 point 59"
              },
              {
                "id": "CAP4-08-00056",
                "label": "p. 32; topic 8 point 61"
              },
              {
                "id": "CAP4-08-00096",
                "label": "p. 33; topic 8 point 106"
              },
              {
                "id": "CAP4-08-00052",
                "label": "p. 31; topic 8 point 57"
              }
            ]
          },
          {
            "id": "tunnel-support-drainage-lining",
            "title": "Tunnel presupport, drainage layout and historical segmental linings",
            "html": "<p>Where weak ground could fall into the excavation before normal support is in place, <em>forepoling</em> provides presupport: bars, spiles or plates are driven ahead of the face to hold the ground above the newly exposed roof. Soft and running-ground descriptions overlap, so suitability depends on the complete support and groundwater-control design rather than on a single soil label. Forepoling does not enlarge the waterway, measure roughness or remove muck.</p><p>Groundwater collected during construction can be led along <em>longitudinal side drains</em> beside a central access track; side drainage is a legitimate layout when sized, graded and maintained for its duty. 'Side' describes position, while temporary and permanent describe service life. Lining does not always remove the need for drainage, no drain position guarantees zero groundwater pressure, and drainage of an operating pressure tunnel needs its own design.</p><p>Older shield-driven subaqueous tunnels historically used bolted, flanged <em>grey cast iron</em> segments, recognisable by the flake graphite in the iron. Segments can be erected behind the shield, and their joints need sealing. This history does not make modern reinforced-concrete segmental linings unsuitable under water.</p>",
            "points": [
              {
                "html": "In weak ground that may fall before ordinary support is installed, forepoling is used to provide presupport ahead of the exposed roof.",
                "sources": [
                  {
                    "id": "CAP4-08-00051",
                    "label": "p. 31; topic 8 point 56"
                  }
                ]
              },
              {
                "html": "Longitudinal drains beside a central track are a valid tunnel layout: side drains can serve the designed drainage duty when sized, graded and maintained.",
                "sources": [
                  {
                    "id": "CAP4-08-00055",
                    "label": "p. 32; topic 8 point 60"
                  }
                ]
              },
              {
                "html": "Bolted flanged segments containing flake graphite in older shield-driven subaqueous tunnels are grey cast iron, historically suitable but not the only suitable lining.",
                "sources": [
                  {
                    "id": "CAP4-08-00057",
                    "label": "p. 32; topic 8 point 62"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00051",
                "label": "p. 31; topic 8 point 56"
              },
              {
                "id": "CAP4-08-00055",
                "label": "p. 32; topic 8 point 60"
              },
              {
                "id": "CAP4-08-00057",
                "label": "p. 32; topic 8 point 62"
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
            "id": "caution-surge-tank-totally-closed",
            "status": "review",
            "prompt": "Surge tanks are totally closed to keep unwanted objects out of the penstock",
            "html": "<p>The capsule flags this as the wrong statement, and it is wrong as a universal claim: many surge tanks are vented with an atmospheric free surface, even under a protective roof. Deliberately sealed air-cushion chambers exist, so a closed chamber is not inherently incorrect.</p>",
            "sources": [
              {
                "id": "CAP4-08-00049",
                "label": "p. 31; topic 8 point 53"
              }
            ]
          },
          {
            "id": "caution-surge-tank-prevents-water-hammer",
            "status": "corrected",
            "prompt": "A surge tank prevents water hammer in the penstock",
            "html": "<p>It reduces specified transient effects, chiefly in the upstream waterway, by exchanging water while the flow adjusts. It does not guarantee elimination of water hammer; penstock pressure waves and low pressures still require closure timing and full transient analysis.</p>",
            "sources": [
              {
                "id": "CAP4-08-00050",
                "label": "pp. 31, 32; topic 8 point 54; topic 8 point 55; topic 8 point 64; topic 8 point 65"
              }
            ]
          },
          {
            "id": "caution-tunnelling-sequence-abbreviated",
            "status": "review",
            "prompt": "Rock tunnelling runs: mark profile, drill, remove foul gases, check misfire, muck",
            "html": "<p>The relative order of the five listed stages is defensible, but the abbreviated sequence omits charging and blasting between drilling and ventilation and the safety clearances needed before re-entry. Treat it as a conceptual outline, not an operational procedure.</p>",
            "sources": [
              {
                "id": "CAP4-08-00052",
                "label": "p. 31; topic 8 point 57"
              }
            ]
          },
          {
            "id": "caution-heading-benching-hard-rock",
            "status": "review",
            "prompt": "Heading and benching is used in hard rocks",
            "html": "<p>It is a conventional rock-tunnelling method but not exclusive to self-supporting hard rock; opening size, ground conditions, support and equipment decide its suitability.</p>",
            "sources": [
              {
                "id": "CAP4-08-00054",
                "label": "p. 32; topic 8 point 59"
              }
            ]
          },
          {
            "id": "caution-no-side-drainage-in-tunnels",
            "status": "corrected",
            "prompt": "Side drainage is not used in tunnels",
            "html": "<p>False as a general statement. Longitudinal side drains are a legitimate tunnel-drainage layout when sized, graded and maintained for the duty, and operating pressure tunnels need a separate drainage design.</p>",
            "sources": [
              {
                "id": "CAP4-08-00055",
                "label": "p. 32; topic 8 point 60"
              }
            ]
          },
          {
            "id": "caution-cast-iron-lining-subaqueous",
            "status": "review",
            "prompt": "Cast iron linings suit shield-driven tunnels, particularly in subaqueous regions",
            "html": "<p>Historically true of grey cast iron segments, but not exclusive: modern reinforced-concrete segmental linings are also suitable for subaqueous tunnels.</p>",
            "sources": [
              {
                "id": "CAP4-08-00057",
                "label": "p. 32; topic 8 point 62"
              }
            ]
          },
          {
            "id": "caution-penstock-velocity-seven",
            "status": "review",
            "prompt": "Water velocity in a high-head penstock is about 7 m/s",
            "html": "<p>Use it only as a stated preliminary assumption. The adopted velocity comes from comparing head loss, water hammer, pressure rating and economics, not from a universal high-head value.</p>",
            "sources": [
              {
                "id": "CAP4-08-00058",
                "label": "p. 32; topic 8 point 63"
              }
            ]
          },
          {
            "id": "caution-reservoir-penstock-surge-turbine",
            "status": "corrected",
            "prompt": "Water flows through reservoir, penstock, surge tank and turbine in that order",
            "html": "<p>Not as a serial sequence. Generation flow runs from the reservoir through the headrace into the penstock and on to the turbine, while the surge chamber is side-connected at the headrace-penstock junction, where it exchanges transient flow.</p>",
            "sources": [
              {
                "id": "CAP4-08-00074",
                "label": "p. 32; topic 8 point 80"
              }
            ]
          },
          {
            "id": "caution-penstock-to-scroll-case",
            "status": "review",
            "prompt": "The penstock connects the forebay to the scroll case of the turbine",
            "html": "<p>Correct for a Francis-type arrangement with an open headrace. The endpoint differs by machine; a Pelton penstock feeds its nozzles, so the scroll-case wording is not universal.</p>",
            "sources": [
              {
                "id": "CAP4-08-00078",
                "label": "p. 32; topic 8 point 84"
              }
            ]
          }
        ],
        "gaps": [
          "Water-hammer pressure rise and closure-time classification appear only as relations; no transient is calculated in these items.",
          "Surge-tank stability, mass-oscillation amplitude and chamber sizing are not examined.",
          "Tunnel cross-section shapes, lining design and rock-cover criteria for pressure tunnels are not covered.",
          "Penstock wall thickness, anchorage and pressure-shaft design are outside these items."
        ]
      },
      "ACiE0806": {
        "code": "ACiE0806",
        "questionCount": 23,
        "format": 2,
        "summary": "<p>This subchapter covers the machines of a hydro station: impulse and reaction turbines, Pelton jets, draft tubes and cavitation, hydraulic and unit power, efficiency boundaries, pumps and their similarity laws, reversible pump-turbines, generators and governors, the powerhouse building and traditional watermills. The capsule items test turbine identification, jet speed, draft-tube pressure recovery, unit power, hydraulic efficiency, pump shaft input, fifth-power scaling versus impeller trimming, governor response to load loss and what limits part-load plant efficiency.</p>",
        "blocks": [
          {
            "id": "impulse-and-reaction-turbines",
            "title": "Impulse versus reaction turbines: Pelton, Francis and Kaplan",
            "html": "<p>Turbines are classed by where the water's pressure energy is converted. In an <em>impulse turbine</em> such as the <em>Pelton</em>, the nozzle upstream of the runner converts most of the pressure head into a high-speed free jet. The double-cup buckets then change the jet's momentum and deliver torque while the runner works at roughly atmospheric pressure, with no major pressure drop through the buckets. The splitter merely divides the jet, and the bucket wheel has no scroll casing.</p><p>In a <em>reaction turbine</em>, water enters the runner carrying both pressure and kinetic energy, and energy is transferred while the pressure falls through the runner passages. The <em>Francis</em> is a mixed-flow reaction machine; a runner that added shaft energy to raise the water's head would be a pump. The <em>Kaplan</em> is an axial-flow reaction turbine for low heads and large, variable discharges, and its adjustable runner blades, usually coordinated with the guide vanes, set it apart from a fixed-pitch propeller.</p><table><thead><tr><th scope='col'>Turbine</th><th scope='col'>Class and flow</th><th scope='col'>Typical duty</th></tr></thead><tbody><tr><td>Pelton</td><td>Impulse, free jet on buckets</td><td>High head, relatively low discharge</td></tr><tr><td>Francis</td><td>Reaction, mixed flow</td><td>Medium head and discharge</td></tr><tr><td>Kaplan</td><td>Reaction, axial flow, adjustable blades</td><td>Low head, large variable discharge</td></tr></tbody></table><p>Head points towards a family, but final selection also checks discharge, unit size, speed and performance maps.</p>",
            "formulas": [
              {
                "label": "Specific speed of a turbine",
                "tex": "N_s = \\dfrac{N\\sqrt{P}}{H^{5/4}}",
                "where": "<p>\\(N\\) rotational speed, \\(P\\) power and \\(H\\) net head in a stated unit system; low values point to Pelton, higher values to Francis and then Kaplan.</p>"
              }
            ],
            "points": [
              {
                "html": "Free jets striking double-cup buckets, with the runner near atmospheric pressure, identify a Pelton impulse turbine, typically chosen for high head and relatively low discharge.",
                "sources": [
                  {
                    "id": "CAP4-08-00064",
                    "label": "p. 32; topic 8 point 71; topic 8 point 85"
                  }
                ]
              },
              {
                "html": "In a Pelton installation the pressure head becomes jet kinetic energy in the nozzle upstream of the runner, before the buckets extract shaft work.",
                "sources": [
                  {
                    "id": "CAP4-08-00069",
                    "label": "p. 32; topic 8 point 75"
                  }
                ]
              },
              {
                "html": "A Francis runner is a reaction machine because energy transfer occurs with a pressure drop through the runner, not before it.",
                "sources": [
                  {
                    "id": "CAP4-08-00071",
                    "label": "p. 32; topic 8 point 77"
                  }
                ]
              },
              {
                "html": "An axial-flow reaction runner with adjustable blades for low head and large, variable discharge is a Kaplan turbine.",
                "sources": [
                  {
                    "id": "CAP4-08-00068",
                    "label": "p. 32; topic 8 point 74"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00064",
                "label": "p. 32; topic 8 point 71; topic 8 point 85"
              },
              {
                "id": "CAP4-08-00069",
                "label": "p. 32; topic 8 point 75"
              },
              {
                "id": "CAP4-08-00071",
                "label": "p. 32; topic 8 point 77"
              },
              {
                "id": "CAP4-08-00068",
                "label": "p. 32; topic 8 point 74"
              }
            ]
          },
          {
            "id": "pelton-jet-and-no-draft-tube",
            "title": "Pelton jet velocity and why a Pelton needs no pressure-recovery draft tube",
            "html": "<p>The jet leaving a Pelton nozzle moves at the ideal free-fall speed for the available head, reduced by the nozzle's <em>velocity coefficient</em>, with approach velocity negligible. The coefficient multiplies the velocity once: leaving it out gives the ideal value, and applying it twice understates the jet. Jet speed then fixes the bucket speed for best efficiency, in theory about half the jet speed.</p><p>A conventional <em>draft tube</em> works on a runner whose outlet is continuously flooded, where it sustains suction and recovers pressure. Water leaves the Pelton buckets as a free discharge at about atmospheric pressure, and the wheel is set above the tailwater, so it lacks the flooded outlet that the usual draft-tube arrangement needs. Some residual outlet kinetic energy does remain; the reason is the free-discharge impulse layout, not an absence of leftover energy.</p>",
            "formulas": [
              {
                "label": "Pelton jet velocity",
                "tex": "V = C_v\\sqrt{2gH}",
                "where": "<p>\\(C_v\\) is the nozzle velocity coefficient and \\(H\\) the available head at the nozzle.</p>"
              }
            ],
            "example": {
              "title": "Worked example: jet speed at 100 m head",
              "html": "<p>With \\(H\\) = 100 m and \\(C_v\\) = 0.98:</p>\\[\\begin{aligned} V_{\\text{ideal}} &amp;= \\sqrt{2 \\times 9.81 \\times 100} \\\\ &amp;= \\sqrt{1962} = 44.294\\ \\text{m/s} \\\\ V &amp;= 0.98 \\times 44.294 \\\\ &amp;= 43.41\\ \\text{m/s} \\end{aligned}\\]<p>Applying 0.98 twice would give 42.54 m/s, an understatement.</p>"
            },
            "points": [
              {
                "html": "A Pelton nozzle with 100 m head and \\(C_v\\) = 0.98 gives a jet speed of 43.41 m/s: the ideal 44.29 m/s multiplied once by the velocity coefficient.",
                "sources": [
                  {
                    "id": "CAP4-08-00061",
                    "label": "p. 32; topic 8 point 67"
                  }
                ]
              },
              {
                "html": "A conventional draft tube is not fitted to a Pelton because the runner discharges freely near atmospheric pressure, with no flooded outlet from which to recover pressure.",
                "sources": [
                  {
                    "id": "CAP4-08-00072",
                    "label": "p. 32; topic 8 point 78"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00061",
                "label": "p. 32; topic 8 point 67"
              },
              {
                "id": "CAP4-08-00072",
                "label": "p. 32; topic 8 point 78"
              }
            ]
          },
          {
            "id": "draft-tube-recovery-and-cavitation",
            "title": "Draft tubes: connection, pressure recovery and cavitation margin",
            "html": "<p>A Francis <em>draft tube</em> runs from the runner outlet to the tailwater discharge region, usually with its outlet submerged to keep the water seal. It is not part of the supply path. Its gradually expanding passage slows the flow and recovers part of the residual velocity head as pressure, while incurring its own loss.</p><p>The energy equation between inlet and outlet shows what is recovered: the pressure-head rise equals the elevation drop plus the fall in velocity head, minus the loss. Total head still falls by the loss; the tube converts kinetic energy into pressure but creates no energy.</p><p>Suction below the runner lowers local pressure, so <em>cavitation</em> is judged by comparing the local absolute pressure with the water's temperature-dependent vapour pressure, keeping the required margin. A high-altitude site has lower atmospheric pressure and so less margin; runner setting, velocity and operating point also matter. A fixed fraction of atmospheric pressure at both ends of the tube is not a universal acceptance criterion.</p>",
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
                "html": "A conventional Francis draft tube connects from the runner outlet to the tailwater discharge region, not to the supply side of the machine.",
                "sources": [
                  {
                    "id": "CAP4-08-00100",
                    "label": "p. 33; topic 8 point 110"
                  }
                ]
              },
              {
                "html": "Flow slowing from 8 to 4 m/s in a draft tube that drops 3 m, with 0.40 m of loss, raises the pressure head by 5.05 m from inlet to outlet.",
                "sources": [
                  {
                    "id": "CAP4-08-00063",
                    "label": "p. 32; topic 8 point 70"
                  }
                ]
              },
              {
                "html": "Cavitation assessment compares local absolute pressure versus vapour pressure with the required margin, which shrinks at high altitude, not a fixed one-third of atmospheric pressure.",
                "sources": [
                  {
                    "id": "CAP4-08-00065",
                    "label": "p. 32; topic 8 point 72"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00100",
                "label": "p. 33; topic 8 point 110"
              },
              {
                "id": "CAP4-08-00063",
                "label": "p. 32; topic 8 point 70"
              },
              {
                "id": "CAP4-08-00065",
                "label": "p. 32; topic 8 point 72"
              }
            ]
          },
          {
            "id": "hydraulic-power-unit-power-efficiency",
            "title": "Hydraulic power, unit power and turbine efficiency boundaries",
            "html": "<p><em>Hydraulic power</em> is the rate at which a specified flow delivers energy through a specified head. A turbine delivers less than this after its losses, and a pump needs more shaft input than this to lift the same flow.</p><p><em>Unit power</em> is a different idea: it reduces a particular turbine's output to 1 m head at corresponding operation. For a machine of fixed size, discharge varies as \\(\\sqrt{H}\\), so power varies as \\(H^{3/2}\\). Unit discharge is not imposed separately, so unit power is not universally 9.81 kW.</p><p>Efficiencies must name their boundaries. With leakage neglected, <em>hydraulic efficiency</em> compares the power transferred to the runner with the water power supplied, <em>mechanical efficiency</em> compares shaft power with runner power, and their product is the water-to-shaft efficiency. If leakage were counted separately, volumetric efficiency would also enter the inlet-to-runner transfer.</p>",
            "formulas": [
              {
                "label": "Hydraulic power",
                "tex": "P_h = \\rho g Q H"
              },
              {
                "label": "Unit power of a given turbine",
                "tex": "P_u = \\dfrac{P}{H^{3/2}}"
              },
              {
                "label": "Hydraulic and mechanical efficiency",
                "tex": "\\eta_h = \\dfrac{P_{\\text{runner}}}{P_h}, \\quad \\eta_m = \\dfrac{P_{\\text{shaft}}}{P_{\\text{runner}}}"
              },
              {
                "label": "Water-to-shaft efficiency",
                "tex": "\\eta_o = \\eta_h\\, \\eta_m"
              }
            ],
            "example": {
              "title": "Worked examples: 9.81 kW, unit power and an efficiency chain",
              "html": "<ol><li>For 1 m<sup>3</sup>/s under 1 m head, \\(\\rho g Q H\\) = 1000 × 9.81 × 1 × 1 = 9810 W, that is 9.81 kW of hydraulic power.</li><li>A turbine giving 800 kW at 16 m: \\(16^{3/2} = 16 \\times 4 = 64\\), so \\(P_u = 800/64 = 12.5\\) kW.</li><li>With 1000 kW supplied, 900 kW to the runner and 855 kW at the shaft: \\(\\eta_h\\) = 900/1000 = 90%, \\(\\eta_m\\) = 855/900 = 95% and \\(\\eta_o\\) = 855/1000 = 85.5%.</li></ol>"
            },
            "points": [
              {
                "html": "Water at exactly 1 m<sup>3</sup>/s through a 1 m head carries 9.81 kW: this is hydraulic power for the specified flow and head, not a turbine's unit power or electrical output.",
                "sources": [
                  {
                    "id": "CAP4-08-00060",
                    "label": "p. 32; topic 8 point 66"
                  }
                ]
              },
              {
                "html": "A turbine of fixed size giving 800 kW at 16 m head has a unit power of \\(P/H^{3/2}\\) = 800/64 = 12.5 kW at 1 m head.",
                "sources": [
                  {
                    "id": "CAP4-08-00059",
                    "label": "p. 32; topic 8 point 66"
                  }
                ]
              },
              {
                "html": "With leakage neglected, 1000 kW supplied, 900 kW reaching the runner and 855 kW at the shaft give a hydraulic efficiency of 90.0% and a mechanical efficiency of 95%.",
                "sources": [
                  {
                    "id": "CAP4-08-00079",
                    "label": "p. 32; topic 8 point 86"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00060",
                "label": "p. 32; topic 8 point 66"
              },
              {
                "id": "CAP4-08-00059",
                "label": "p. 32; topic 8 point 66"
              },
              {
                "id": "CAP4-08-00079",
                "label": "p. 32; topic 8 point 86"
              }
            ]
          },
          {
            "id": "pumps-shaft-input-and-reversible-units",
            "title": "Pumps: shaft input, the reverse-turbine comparison and reversible units",
            "html": "<p>A pump adds energy to water. Its useful hydraulic output is \\(\\gamma Q H\\), that is \\(\\rho g Q H\\), and <em>pump efficiency</em> is hydraulic output divided by shaft input. The shaft input therefore exceeds the lifting power, and the motor's electrical input is higher still because of motor losses. Writing the lifting power without the specific weight, as \\(QH\\) alone, loses its units entirely.</p><p>A <em>centrifugal pump</em> is conceptually the reverse of an inward radial-flow reaction turbine: water enters at the central eye and moves outward through the impeller while shaft work raises its energy, whereas in the turbine water moves inward and delivers work to the shaft. The comparison does not mean any turbine can simply be run backwards without checking its machine curves.</p><p>Pumped-storage schemes can use one <em>reversible pump-turbine with a motor-generator</em> for pumping uphill and generating on the downhill release. Sharing equipment can reduce separate machines and civil works, but efficiency, stability and economics must be checked in both modes, and some schemes use separate pumps and turbines instead.</p>",
            "formulas": [
              {
                "label": "Pump shaft input",
                "tex": "P_s = \\dfrac{\\rho g Q H}{\\eta_p}"
              }
            ],
            "example": {
              "title": "Worked example: pumping 0.040 m³/s against 25 m",
              "html": "<p>At 80% pump efficiency:</p>\\[\\begin{aligned} P_h &amp;= 1000 \\times 9.81 \\times 0.040 \\times 25 \\\\ &amp;= 9810\\ \\text{W} \\\\ P_s &amp;= 9.81/0.80 = 12.26\\ \\text{kW} \\end{aligned}\\]<p>Taking the 9.81 kW lifting power as the shaft input would ignore the pump's losses.</p>"
            },
            "points": [
              {
                "html": "Delivering 0.040 m<sup>3</sup>/s against 25 m at 80% pump efficiency needs 12.26 kW of shaft input: 9.81 kW of hydraulic power divided by 0.80.",
                "sources": [
                  {
                    "id": "CAP4-08-00017",
                    "label": "p. 30; topic 8 point 17"
                  }
                ]
              },
              {
                "html": "Compared with an inward radial-flow reaction turbine, a centrifugal pump's flow moves from the eye outward and shaft work raises fluid energy.",
                "sources": [
                  {
                    "id": "CAP4-08-00073",
                    "label": "pp. 32, 33; topic 8 point 79; topic 8 point 100"
                  }
                ]
              },
              {
                "html": "A reversible pump-turbine with motor-generator can serve both pumping and generating in pumped storage, with performance checked in each mode.",
                "sources": [
                  {
                    "id": "CAP4-08-00066",
                    "label": "p. 32; topic 8 point 73; topic 8 point 83"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00017",
                "label": "p. 30; topic 8 point 17"
              },
              {
                "id": "CAP4-08-00073",
                "label": "pp. 32, 33; topic 8 point 79; topic 8 point 100"
              },
              {
                "id": "CAP4-08-00066",
                "label": "p. 32; topic 8 point 73; topic 8 point 83"
              }
            ]
          },
          {
            "id": "pump-similarity-and-trimming",
            "title": "Pump similarity: the fifth-power family law versus impeller trimming",
            "html": "<p>For <em>geometrically similar</em> pumps at corresponding operating points, discharge scales as \\(ND^3\\) and head as \\(N^2D^2\\). With comparable efficiency, input power varies as their product, \\(N^3D^5\\), so at a fixed speed power grows with the fifth power of diameter. Using the flow ratio alone ignores the rise in head.</p><p>Trimming one impeller inside an unchanged casing is not a geometrically scaled family, so the fifth-power law does not describe it. Where a supplier explicitly permits a limited-trim approximation with a cube law, that model applies only to that pump. The two exponents belong to different models, neither replaces the other, and actual duty still comes from the supplier's curves.</p>",
            "formulas": [
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
              "title": "Worked examples: doubling the size and trimming an impeller",
              "html": "<p>Doubling the diameter of a similar 10 kW pump at the same speed:</p>\\[\\begin{aligned} P_2 &amp;= 10 \\times 2^5 = 10 \\times 32 \\\\ &amp;= 320\\ \\text{kW} \\end{aligned}\\]<p>The flow ratio \\(2^3 = 8\\) alone would give only 80 kW, missing the fourfold head rise. Trimming a 20 kW pump to 0.90 of its diameter under the permitted cube law:</p>\\[\\begin{aligned} P_2 &amp;= 20 \\times 0.90^3 = 20 \\times 0.729 \\\\ &amp;= 14.58\\ \\text{kW} \\end{aligned}\\]"
            },
            "points": [
              {
                "html": "For geometrically similar pumps at the same speed, power scales as \\(D^5\\): doubling the diameter of a 10 kW pump predicts 320 kW.",
                "sources": [
                  {
                    "id": "CAP4-08-00076",
                    "label": "p. 32; topic 8 point 82"
                  }
                ]
              },
              {
                "html": "Under a supplier-permitted limited-trim cube law, trimming a 20 kW impeller to 0.90 of its diameter gives about 14.58 kW; the fifth-power family law does not apply.",
                "sources": [
                  {
                    "id": "CAP4-08-00077",
                    "label": "p. 32; topic 8 point 82"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00076",
                "label": "p. 32; topic 8 point 82"
              },
              {
                "id": "CAP4-08-00077",
                "label": "p. 32; topic 8 point 82"
              }
            ]
          },
          {
            "id": "generator-efficiency-and-governing",
            "title": "Generator efficiency, whole-plant efficiency and governor speed control",
            "html": "<p>A hydro-generator may convert efficiently over most of its rated range, but that is only one link in <em>water-to-wire efficiency</em>. Turbine efficiency changes with head, discharge and setting, and nearly fixed station auxiliary losses weigh more heavily at low output. Predicting whole-plant efficiency at low load therefore needs turbine part-load performance and auxiliary consumption, not generator ratings, reservoir level or grid data alone.</p><p>The <em>governor</em> controls speed by regulating the water admitted to the runner through guide vanes, needles or other admission controls. When an isolated unit on isochronous control suddenly sheds part of its load, turbine torque briefly exceeds the generator's resisting torque and the unit tends to accelerate. The governor senses the speed or frequency error and reduces the admitted flow until power balance returns at the setpoint.</p><p>Excitation mainly regulates voltage and reactive behaviour, and rotating inertia only moderates the acceleration; neither restores the steady balance. Droop control alone can leave a steady frequency offset, and grid-connected units operate under different constraints.</p>",
            "formulas": [
              {
                "label": "Net station output",
                "tex": "P_{\\text{net}} = P_h\\, \\eta_t\\, \\eta_g - P_{\\text{aux}}",
                "where": "<p>\\(\\eta_t\\) turbine efficiency, \\(\\eta_g\\) generator efficiency and \\(P_{\\text{aux}}\\) the station auxiliary load.</p>"
              }
            ],
            "example": {
              "title": "Illustrative example: why efficiency falls at low load",
              "html": "<p>Take a unit with 10 MW of hydraulic input at full load, \\(\\eta_t\\) = 0.92, \\(\\eta_g\\) = 0.97 and 0.1 MW of auxiliaries:</p>\\[\\begin{aligned} P_{\\text{net}} &amp;= 10 \\times 0.92 \\times 0.97 - 0.1 \\\\ &amp;= 8.82\\ \\text{MW} \\end{aligned}\\]<p>That is about 88% water to wire. At quarter load, with 2.5 MW input, part-load \\(\\eta_t\\) = 0.80 and \\(\\eta_g\\) = 0.95, the net output is 1.9 − 0.1 = 1.8 MW, only 72%, although the generator is still efficient.</p>"
            },
            "points": [
              {
                "html": "Predicting water-to-wire efficiency at low station load needs turbine part-load efficiency and station auxiliary losses; a wide high-efficiency generator range is not enough.",
                "sources": [
                  {
                    "id": "CAP4-08-00003",
                    "label": "p. 30; topic 8 point 3"
                  }
                ]
              },
              {
                "html": "After an isolated isochronous unit loses part of its load, the governor must reduce admitted water flow through the turbine controls to restore the speed setpoint.",
                "sources": [
                  {
                    "id": "CAP4-08-00046",
                    "label": "pp. 31, 32; topic 8 point 49; topic 8 point 69; topic 8 point 89"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00003",
                "label": "p. 30; topic 8 point 3"
              },
              {
                "id": "CAP4-08-00046",
                "label": "pp. 31, 32; topic 8 point 49; topic 8 point 69; topic 8 point 89"
              }
            ]
          },
          {
            "id": "powerhouse-runner-design-watermills",
            "title": "Powerhouse role, runner blade counts and traditional watermills",
            "html": "<p>A <em>powerhouse</em> does more than shelter machines. It houses turbine-generator units and auxiliaries on proper equipment foundations, protects them from the weather and provides service access, cranes and lifting clearances so that major parts can be removed for maintenance. Protection of a runner against hydraulic damage depends on turbine and waterway design rather than on the building.</p><p>Runner geometry is chosen for the duty. An existing Francis runner with, say, 20 blades is only a starting point: blade count affects blade loading, blockage, losses, vibration and manufacture, so it is revised by optimising the runner hydraulically and structurally for the new duty. Runner blades, guide vanes and generator poles are separate components whose counts are not matched to one another, and a textbook range is descriptive rather than a design criterion.</p><p>A traditional <em>watermill</em> shows hydropower at its simplest: falling or flowing water drives a runner, often wooden, that turns a shaft to grind grain. The conversion is hydraulic energy to rotating mechanical work, and no generator is needed. Replacing a worn wooden runner with a well-designed metal one changes the material, not the principle; material and geometry should suit strength, corrosion, wear, head, discharge and maintenance.</p>",
            "formulas": [
              {
                "label": "Synchronous speed of a generator",
                "tex": "N = \\dfrac{120 f}{p}",
                "where": "<p>\\(N\\) in rpm, \\(f\\) the grid frequency in Hz and \\(p\\) the total number of poles, always an even number.</p>"
              }
            ],
            "points": [
              {
                "html": "A powerhouse layout directly serves its operational role through equipment foundations, service access and lifting clearances for removing major machine parts.",
                "sources": [
                  {
                    "id": "CAP4-08-00062",
                    "label": "p. 32; topic 8 point 68"
                  }
                ]
              },
              {
                "html": "Changing a Francis runner's 20-blade starting count is justified by hydraulic and structural optimisation for the specific duty, not by matching guide vanes or poles.",
                "sources": [
                  {
                    "id": "CAP4-08-00084",
                    "label": "p. 32; topic 8 point 92"
                  }
                ]
              },
              {
                "html": "At a watermill runner, water's hydraulic energy becomes rotating mechanical shaft work that drives the millstones directly, with no generator.",
                "sources": [
                  {
                    "id": "CAP4-10-00172",
                    "label": "p. 42; rural point 1"
                  }
                ]
              },
              {
                "html": "Replacing a wooden watermill runner with a designed metal one shows the material may change while the water-to-shaft energy conversion remains the same.",
                "sources": [
                  {
                    "id": "CAP4-10-00173",
                    "label": "p. 42; rural point 1"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00062",
                "label": "p. 32; topic 8 point 68"
              },
              {
                "id": "CAP4-08-00084",
                "label": "p. 32; topic 8 point 92"
              },
              {
                "id": "CAP4-10-00172",
                "label": "p. 42; rural point 1"
              },
              {
                "id": "CAP4-10-00173",
                "label": "p. 42; rural point 1"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Hydraulic power",
            "tex": "P_h = \\rho g Q H",
            "note": "Equals 9.81QH kW for Q in m<sup>3</sup>/s and H in m."
          },
          {
            "label": "Pump shaft input",
            "tex": "P_s = \\dfrac{\\rho g Q H}{\\eta_p}"
          },
          {
            "label": "Pelton jet velocity",
            "tex": "V = C_v\\sqrt{2gH}"
          },
          {
            "label": "Unit power",
            "tex": "P_u = \\dfrac{P}{H^{3/2}}",
            "note": "A given turbine at corresponding operation."
          },
          {
            "label": "Specific speed",
            "tex": "N_s = \\dfrac{N\\sqrt{P}}{H^{5/4}}"
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
            "id": "caution-generator-efficiency-wide-range",
            "status": "review",
            "prompt": "Hydro-generators give high efficiency over a wide range of load",
            "html": "<p>Possibly true of the generator itself, but whole-plant efficiency also depends on how the turbine performs at part load and on station auxiliary consumption, so it need not stay high at low load.</p>",
            "sources": [
              {
                "id": "CAP4-08-00003",
                "label": "p. 30; topic 8 point 3"
              }
            ]
          },
          {
            "id": "caution-uplift-power-formula",
            "status": "corrected",
            "prompt": "Power needed to uplift water is P = QH",
            "html": "<p>The specific weight has dropped out of the printed formula: hydraulic lifting power is \\(\\gamma Q H = \\rho g Q H\\). Pump shaft input is this divided by pump efficiency, and the motor's electrical input is higher again.</p>",
            "sources": [
              {
                "id": "CAP4-08-00017",
                "label": "p. 30; topic 8 point 17"
              }
            ]
          },
          {
            "id": "caution-governor-speed-control-context",
            "status": "review",
            "prompt": "The governor regulates the water flow striking the runner to control turbine speed",
            "html": "<p>Correct as speed control through water admission. Full return to the speed setpoint assumes isolated isochronous control; droop control can leave a steady frequency offset, and grid-connected operation has different constraints.</p>",
            "sources": [
              {
                "id": "CAP4-08-00046",
                "label": "pp. 31, 32; topic 8 point 49; topic 8 point 69; topic 8 point 89"
              }
            ]
          },
          {
            "id": "caution-unit-power-unit-discharge",
            "status": "corrected",
            "prompt": "Unit power is the power generated under unit head and unit discharge",
            "html": "<p>Unit power reduces a given turbine's corresponding output to 1 m head, \\(P_u = P/H^{3/2}\\); discharge is not separately fixed at unity. The 9.81 kW obtained from 1 m<sup>3</sup>/s under 1 m is simply hydraulic power.</p>",
            "sources": [
              {
                "id": "CAP4-08-00059",
                "label": "p. 32; topic 8 point 66"
              }
            ]
          },
          {
            "id": "caution-powerhouse-protects-runner",
            "status": "review",
            "prompt": "The powerhouse is used to protect the turbine and runner from damage",
            "html": "<p>Too narrow. The powerhouse houses, supports and protects equipment and provides foundations, cranes and service access; protection of the runner from hydraulic damage depends on turbine and waterway design, not the building alone.</p>",
            "sources": [
              {
                "id": "CAP4-08-00062",
                "label": "p. 32; topic 8 point 68"
              }
            ]
          },
          {
            "id": "caution-draft-tube-one-third-atmosphere",
            "status": "corrected",
            "prompt": "Draft-tube inlet and outlet pressures should not fall below one-third of atmospheric",
            "html": "<p>No such universal threshold is supported. Cavitation depends on local absolute pressure relative to the temperature-dependent vapour pressure, with a machine-specific margin affected by altitude, runner setting and operating point.</p>",
            "sources": [
              {
                "id": "CAP4-08-00065",
                "label": "p. 32; topic 8 point 72"
              }
            ]
          },
          {
            "id": "caution-reversible-pump-turbine-benefits",
            "status": "review",
            "prompt": "Reversible pump-turbines are very suitable for pumped storage and reduce cost",
            "html": "<p>Reversible units can reduce equipment and civil requirements, but lower cost and high efficiency are possible benefits rather than guarantees. Performance must be checked in both modes, and some schemes use separate pumps and turbines.</p>",
            "sources": [
              {
                "id": "CAP4-08-00066",
                "label": "p. 32; topic 8 point 73; topic 8 point 83"
              }
            ]
          },
          {
            "id": "caution-pump-power-d5-or-d3",
            "status": "review",
            "prompt": "Centrifugal pump power is proportional to D⁵ or D³",
            "html": "<p>The two exponents belong to different models. \\(D^5\\) applies to geometrically similar pumps at fixed speed and comparable efficiency; \\(D^3\\) is only a limited impeller-trim approximation in an unchanged casing, used where a supplier permits it.</p>",
            "sources": [
              {
                "id": "CAP4-08-00077",
                "label": "p. 32; topic 8 point 82"
              }
            ]
          },
          {
            "id": "caution-hydraulic-efficiency-definition",
            "status": "review",
            "prompt": "Hydraulic efficiency is power transferred to the runner over fluid power available at the inlet",
            "html": "<p>The printed fraction is interleaved and its exact typography unverified. The reconstructed definition assumes no leakage; if leakage is counted separately, volumetric efficiency also enters the inlet-to-runner transfer.</p>",
            "sources": [
              {
                "id": "CAP4-08-00079",
                "label": "p. 32; topic 8 point 86"
              }
            ]
          },
          {
            "id": "caution-francis-blade-range",
            "status": "review",
            "prompt": "A Francis runner generally has 16 to 24 blades",
            "html": "<p>No design reference is identified for this range, so it remains an unverified descriptive claim. Blade count comes from optimising the runner hydraulically and structurally for its duty, not from a fixed range.</p>",
            "sources": [
              {
                "id": "CAP4-08-00084",
                "label": "p. 32; topic 8 point 92"
              }
            ]
          },
          {
            "id": "caution-watermill-wooden-wheel",
            "status": "review",
            "prompt": "The turbine of a water mill is a wheel of wood",
            "html": "<p>Typical of many traditional mills, not a hydromechanical requirement. Runner material and geometry should suit strength, corrosion, wear, head, discharge and maintenance, and metal runners work on the same principle.</p>",
            "sources": [
              {
                "id": "CAP4-10-00173",
                "label": "p. 42; rural point 1"
              }
            ]
          }
        ],
        "gaps": [
          "Specific speed appears only as a relation for orientation; specific-speed calculations and turbine-selection charts are not worked in these items.",
          "Velocity triangles and detailed Francis or Pelton runner design are not examined.",
          "Scroll-casing sizing and generator pole-number calculations are not worked here.",
          "Powerhouse dimensions, unit spacing and crane selection are not quantified."
        ]
      }
    });
})();
