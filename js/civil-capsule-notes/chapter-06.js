(function () {
    "use strict";
    window.CIVIL_CAPSULE_NOTE_TOPICS = window.CIVIL_CAPSULE_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_CAPSULE_NOTE_TOPICS, {
      "ACiE0601": {
        "code": "ACiE0601",
        "questionCount": 29,
        "format": 2,
        "summary": "<p>This subchapter covers where drinking water comes from and what it carries: surface and groundwater sources, rainwater and stepwells, turbidity, colour and solids, pH and alkalinity, pathogens and faecal indicators, hidden chemical hazards, two NDWQS 2079 entries and demand estimation. The capsule questions test source classification, measurement units and instruments, indicator interpretation, disease-transmission barriers and simple demand, growth and allowance calculations.</p>",
        "blocks": [
          {
            "id": "sources-classification-and-storm-response",
            "title": "Surface and groundwater sources: classification and storm response",
            "html": "<p>Classify a raw-water source by where the water is stored and how it reaches the intake. Rivers, lakes and impounding reservoirs hold <em>surface water</em>. Water stored behind a dam remains surface water when it is drawn off through a submerged intake or a buried main; the pipe does not turn it into groundwater.</p><p>Surface water is exposed to runoff, so it reacts quickly to storms. Heavy rain on an eroding catchment sends sediment-laden runoff into a river, and its turbidity can climb within hours. A deep confined aquifer beneath intact cover is recharged slowly and usually responds far more slowly, unless a failed well seal or another pathway lets surface water in.</p><p>Hill springs are often clear because percolation strains out suspended matter. Clarity is not safety: fractured rock can carry latrine seepage quickly to the outlet, and dissolved contaminants pass through soil. A clear spring still needs sanitary inspection of its recharge zone, seasonal sampling and suitable treatment barriers.</p>",
            "moreHtml": "<p>To screen a source, ask where the water was last exposed at the surface, how quickly rainfall reaches it, what lies in its catchment or recharge area, and whether fractures, a damaged well seal or direct surface entry bypass natural filtration. These checks predict quality risks better than the name of the source.</p>",
            "points": [
              {
                "html": "Rivers contain water with the maximum amount of turbidity.",
                "sources": [
                  {
                    "id": "CAP4-06-00001",
                    "label": "p. 23; topic 6 point 1"
                  }
                ]
              },
              {
                "html": "Water may not contain much impurity if its source is a spring along hill slopes.",
                "sources": [
                  {
                    "id": "CAP4-06-00002",
                    "label": "p. 23; topic 6 point 2"
                  }
                ]
              },
              {
                "html": "Water from reservoirs comes under the category of surface water.",
                "sources": [
                  {
                    "id": "CAP4-06-00003",
                    "label": "p. 23; topic 6 point 3"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00001",
                "label": "p. 23; topic 6 point 1"
              },
              {
                "id": "CAP4-06-00002",
                "label": "p. 23; topic 6 point 2"
              },
              {
                "id": "CAP4-06-00003",
                "label": "p. 23; topic 6 point 3"
              }
            ]
          },
          {
            "id": "rainwater-roof-harvesting-and-stepwells",
            "title": "Rainwater, roof harvesting and traditional stepwells",
            "html": "<p>Rain forms by condensation, so it usually carries little dissolved mineral matter and is soft. Low hardness is not a certificate of purity. Falling rain collects dust and other atmospheric material, and a roof adds droppings, leaves and debris, so roof runoff can be low in minerals yet faecally contaminated.</p><p>Safe use depends on a protected catchment, sensible first-flush management, covered storage and, where needed, treatment and testing. A first-flush diverter on its own does not certify the stored water.</p><p><em>Direct roof-rainwater harvesting</em> is recognised by its collection pathway: an identified roof catchment, controlled conveyance through gutters and pipes, and a protected storage tank. A borehole pumping into a main, a spring tapped by an upslope infiltration gallery or a shaft drawing on an aquifer is a groundwater or spring abstraction, even though rainfall ultimately recharges it.</p><p>A <em>stepwell</em> is a traditional structure with a flight of steps leading down to the water, giving access however high or low the water stands.</p>",
            "points": [
              {
                "html": "The purest form of natural water, free from impurities, is rain water.",
                "sources": [
                  {
                    "id": "CAP4-06-00121",
                    "label": "p. 26; topic 6 point 123"
                  }
                ]
              },
              {
                "html": "The structure used traditionally to harvest rain water in rural areas is called a step well.",
                "sources": [
                  {
                    "id": "CAP4-10-00184",
                    "label": "p. 42; rural point 10"
                  }
                ]
              },
              {
                "html": "A step well is a traditional structure used in rural areas to harvest rain water.",
                "sources": [
                  {
                    "id": "CAP4-10-00185",
                    "label": "p. 42; rural point 10"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00121",
                "label": "p. 26; topic 6 point 123"
              },
              {
                "id": "CAP4-10-00184",
                "label": "p. 42; rural point 10"
              },
              {
                "id": "CAP4-10-00185",
                "label": "p. 42; rural point 10"
              }
            ]
          },
          {
            "id": "turbidity-and-colour-measurement",
            "title": "Turbidity and colour: units, instruments and true colour",
            "html": "<p><em>Turbidity</em> is an optical property: suspended particles scatter and absorb light. A <em>nephelometer</em> measures the scattered light and reports turbidity in NTU, nephelometric turbidity units. Suspended-solids concentration is a different quantity, a mass per volume in mg/L found by filtering and weighing.</p><p>Two suspensions holding the same solids mass can scatter light differently because particle size, shape and optical properties differ.</p><p><em>Colour</em> is compared rather than scattered. A <em>tintometer</em> or calibrated colour comparator matches the sample against reference standards. For <em>true colour</em> the turbidity is removed first so particles do not interfere; colour read with particles present is apparent colour.</p><p>On the platinum–cobalt scale, one colour unit is the colour of the specified reference standard containing 1 mg of platinum per litre.</p>",
            "moreHtml": "<p>The two instruments measure different properties and need different sample preparation, so they must not be interchanged. Neither a turbidity reading nor a colour reading shows on its own that water is safe to drink; microbial and chemical tests remain necessary.</p>",
            "points": [
              {
                "html": "Turbidity of water is expressed in ppm or NTU.",
                "sources": [
                  {
                    "id": "CAP4-06-00009",
                    "label": "pp. 23, 24; topic 6 point 10; topic 6 point 25"
                  }
                ]
              },
              {
                "html": "The colour of water is measured by a tintometer.",
                "sources": [
                  {
                    "id": "CAP4-06-00010",
                    "label": "pp. 23, 26; topic 6 point 11; topic 6 point 138"
                  }
                ]
              },
              {
                "html": "One TCU (true colour unit) is equivalent to the colour produced by 1 mg of platinum cobalt in 1 L of distilled water.",
                "sources": [
                  {
                    "id": "CAP4-06-00015",
                    "label": "p. 24; topic 6 point 16"
                  }
                ]
              },
              {
                "html": "A nephelometer and a tintometer are used to determine, respectively, turbidity and colour.",
                "sources": [
                  {
                    "id": "CAP4-06-00135",
                    "label": "p. 26; topic 6 point 138"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00009",
                "label": "pp. 23, 24; topic 6 point 10; topic 6 point 25"
              },
              {
                "id": "CAP4-06-00010",
                "label": "pp. 23, 26; topic 6 point 11; topic 6 point 138"
              },
              {
                "id": "CAP4-06-00015",
                "label": "p. 24; topic 6 point 16"
              },
              {
                "id": "CAP4-06-00135",
                "label": "p. 26; topic 6 point 138"
              }
            ]
          },
          {
            "id": "solids-fractions-and-particle-size",
            "title": "Total, suspended and dissolved solids, and how particle size is expressed",
            "html": "<p>Solids fractions are defined by laboratory procedure. <em>Total solids</em> (TS) is the residue left after evaporating and drying a sample. <em>Total suspended solids</em> (TSS) is the dried residue retained on a specified filter, and <em>total dissolved solids</em> (TDS) is the dried residue of the filtrate.</p><p>With consistent methods the fractions add. The dissolved fraction is by definition what passes the filter, so ordinary particle filtration does not remove it. Mismatched filters, different drying temperatures or volatile losses can weaken exact additivity, which is why the relation is written as approximate.</p><p>Particle <em>size</em> is a length, not a mass. A limit stated as less than 10 mg is dimensionally defective as a size statement. Meaningful size information is a measured size distribution in micrometres, with the analytical method stated. A mass cannot become a diameter without density and shape, and neither an NTU reading nor a mg/L concentration is a particle diameter.</p>",
            "formulas": [
              {
                "label": "Solids balance",
                "tex": "\\text{TS} \\approx \\text{TSS} + \\text{TDS}",
                "where": "<p>Valid when the filtration and drying methods are consistent.</p>"
              },
              {
                "label": "Dissolved solids by difference",
                "tex": "\\text{TDS} \\approx \\text{TS} - \\text{TSS}"
              }
            ],
            "example": {
              "title": "Worked example: dissolved solids by difference",
              "html": "<p>Consistent tests give total solids of 650 mg/L and suspended solids of 180 mg/L.</p>\\[\\text{TDS} \\approx 650 - 180 = 470\\ \\text{mg/L}\\]<p>Adding the two figures or taking their ratio has no physical meaning here.</p>"
            },
            "points": [
              {
                "html": "The amount of dissolved solids in water is the difference between total solids and suspended solids.",
                "sources": [
                  {
                    "id": "CAP4-06-00112",
                    "label": "p. 26; topic 6 point 112"
                  }
                ]
              },
              {
                "html": "Suspended particles in water are less than 10 mg.",
                "sources": [
                  {
                    "id": "CAP4-06-00118",
                    "label": "p. 26; topic 6 point 119"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00112",
                "label": "p. 26; topic 6 point 112"
              },
              {
                "id": "CAP4-06-00118",
                "label": "p. 26; topic 6 point 119"
              }
            ]
          },
          {
            "id": "ph-alkalinity-and-algal-ponds",
            "title": "pH, alkalinity and the daily cycle in algal ponds",
            "html": "<p><em>pH</em> expresses hydrogen-ion activity, while <em>alkalinity</em> is the acid-neutralising capacity measured by titration. The two are linked through the carbonate system but are not synonyms.</p><p>In a sunlit pond, algae photosynthesise by day and remove dissolved CO<sub>2</sub>. Losing CO<sub>2</sub> shifts the carbonate equilibria toward bicarbonate and carbonate, so pH tends to rise during the day. At night photosynthesis stops while respiration continues and releases CO<sub>2</sub>, so pH tends to fall.</p><p>Due to the presence of algae, the alkalinity of pond water increases by day and decreases at night.</p>",
            "formulas": [
              {
                "label": "Carbonate equilibrium",
                "tex": "\\mathrm{CO_2 + H_2O \\rightleftharpoons H^+ + HCO_3^-}",
                "where": "<p>Removing CO<sub>2</sub> pulls the equilibrium to the left, consuming \\(\\mathrm{H^+}\\) and raising pH.</p>"
              },
              {
                "label": "Total alkalinity in molar terms",
                "tex": "\\begin{aligned}\\text{Alk} &= [\\mathrm{HCO_3^-}] + 2[\\mathrm{CO_3^{2-}}] \\\\ &\\quad + [\\mathrm{OH^-}] - [\\mathrm{H^+}]\\end{aligned}",
                "where": "<p>Dissolved CO<sub>2</sub> does not appear, and each CO<sub>2</sub> taken up or released changes \\(\\mathrm{HCO_3^-}\\) and \\(\\mathrm{H^+}\\) equally, leaving the sum unchanged.</p>"
              }
            ],
            "points": [
              {
                "html": "Due to the presence of algae in ponds, the alkalinity of the water increases by day and decreases at night.",
                "sources": [
                  {
                    "id": "CAP4-06-00025",
                    "label": "p. 24; topic 6 point 27"
                  }
                ]
              },
              {
                "html": "During the daytime, the alkalinity of pond water containing algae increases.",
                "sources": [
                  {
                    "id": "CAP4-06-00026",
                    "label": "p. 24; topic 6 point 27"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00025",
                "label": "p. 24; topic 6 point 27"
              },
              {
                "id": "CAP4-06-00026",
                "label": "p. 24; topic 6 point 27"
              }
            ]
          },
          {
            "id": "ndwqs-2079-ph-and-residual-chlorine",
            "title": "Reading the NDWQS 2079 entries for pH and residual chlorine",
            "html": "<p>Nepal's National Drinking Water Quality Standards (NDWQS) 2079, in the edition identified for these notes, lists pH 6.5–8.5. pH matters operationally because it affects corrosion, coagulation and chlorine effectiveness. Meeting the range does not show that water is potable: microbial and chemical hazards need separate checks. WHO's 2022 guidelines likewise treat pH operationally rather than setting a health-based guideline value.</p><p>For chlorinated systems the same 2079 table prints residual chlorine as 0.10–0.50 mg/L, with separate conditional provisions for epidemic or high-pollution conditions. A residual of 0.2 mg/L lies inside the band, but no single figure is the whole rule. A measured residual also does not by itself prove adequate pathogen inactivation, which depends on contact time, pH, temperature and the water treated.</p><p>Standards are edition-specific. Quote the edition and table used and check for later amendments before applying a value to compliance; these notes certify no subsequent amendment.</p>",
            "points": [
              {
                "html": "The permissible pH value for public water supply ranges between 6.5 and 8.5.",
                "sources": [
                  {
                    "id": "CAP4-06-00013",
                    "label": "p. 23; topic 6 point 14"
                  }
                ]
              },
              {
                "html": "The permissible limit of free residual chlorine is 0.2 ppm.",
                "sources": [
                  {
                    "id": "CAP4-06-00098",
                    "label": "p. 25; topic 6 point 99"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00013",
                "label": "p. 23; topic 6 point 14"
              },
              {
                "id": "CAP4-06-00098",
                "label": "p. 25; topic 6 point 99"
              }
            ]
          },
          {
            "id": "pathogens-and-faecal-indicators",
            "title": "Pathogens, and E. coli as a faecal indicator",
            "html": "<p>A <em>pathogen</em> is any agent able to cause disease. Many environmental bacteria are harmless, so bacterium and pathogen are not interchangeable words.</p><p><em>E. coli</em> is valued as a faecal indicator. Its detection signals faecal contamination and a failure somewhere in source protection, treatment or distribution that must be investigated.</p><p>An indicator result therefore guides action rather than listing organisms. A positive finding triggers investigation of the source, the treatment and the network, followed by corrective action; it is not an inventory of the pathogens present.</p>",
            "points": [
              {
                "html": "Pathogens are harmful bacteria that cause disease.",
                "sources": [
                  {
                    "id": "CAP4-06-00005",
                    "label": "p. 23; topic 6 point 5"
                  }
                ]
              },
              {
                "html": "E. coli are harmless organisms, but their presence in water indicates the presence of pathogenic bacteria.",
                "sources": [
                  {
                    "id": "CAP4-06-00027",
                    "label": "p. 24; topic 6 point 28"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00005",
                "label": "p. 23; topic 6 point 5"
              },
              {
                "id": "CAP4-06-00027",
                "label": "p. 24; topic 6 point 28"
              }
            ]
          },
          {
            "id": "coliform-methods-and-temperature-classes",
            "title": "Coliform test methods and bacterial temperature classes",
            "html": "<p>Two classical coliform methods report different kinds of result. In <em>membrane filtration</em> a measured volume passes through a membrane that retains the bacteria; the membrane is cultured and the colonies are counted directly as colony-forming units. Turbid samples can clog the membrane, and background growth or injured organisms can reduce recovery.</p><p><em>Multiple-tube fermentation</em> inoculates series of tubes and infers a most probable number (MPN) from the pattern of gas-positive tubes. Each method has its uses, and neither is universally better.</p><p>Bacteria are also grouped by the temperature at which they grow best. <em>Psychrophiles</em> prefer cold conditions and <em>mesophiles</em> moderate temperatures, while <em>thermophiles</em> grow best at high temperatures. An organism with a growth optimum around 55 °C under validated conditions is thermophilic.</p>",
            "moreHtml": "<p>The often quoted 40–70 °C band for thermophiles is approximate. Growth preference, survival and thermal inactivation are different properties with species-dependent limits, so a growth optimum does not tell you the temperature at which organisms die.</p>",
            "points": [
              {
                "html": "Membrane filter technique is a better test to identify coliforms.",
                "sources": [
                  {
                    "id": "CAP4-06-00018",
                    "label": "p. 24; topic 6 point 19"
                  }
                ]
              },
              {
                "html": "Bacteria that grow best at high temperatures of 40 to 70°C are called thermophilic.",
                "sources": [
                  {
                    "id": "CAP4-06-00007",
                    "label": "p. 23; topic 6 point 7"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00018",
                "label": "p. 24; topic 6 point 19"
              },
              {
                "id": "CAP4-06-00007",
                "label": "p. 23; topic 6 point 7"
              }
            ]
          },
          {
            "id": "water-related-diseases-and-transmission",
            "title": "Water-related diseases: transmission routes and pandemic spread",
            "html": "<p>An engineering measure helps only when it interrupts the actual transmission route. <em>Cholera</em> can spread by ingesting water that carries the causative organism, so the barriers are source protection, effective treatment and protection against recontamination in distribution and household storage. Sanitation and hygiene complement them. Softening, aeration or colour removal does nothing against faecal contamination, and pleasant colour or taste is no proof of safety.</p><p><em>Trachoma</em> is a water-washed disease linked to inadequate face washing. Disinfected drinking water alone leaves that route open if households lack enough water to wash regularly; they need convenient access to a sufficient quantity of clean water for hygiene. In WHO's SAFE strategy, facial cleanliness and environmental improvement sit alongside surgery and antibiotics.</p><p>Epidemiological terms describe patterns, not severity. A <em>pandemic</em> is an epidemic with extensive international or intercontinental spread. <em>Endemic</em> means expected, continuing occurrence in a population, and <em>sporadic</em> means infrequent, irregular cases.</p>",
            "moreHtml": "<p>Matching the barrier to the route:</p><table><thead><tr><th scope='col'>Route</th><th scope='col'>Example</th><th scope='col'>What interrupts it</th></tr></thead><tbody><tr><td>Waterborne, by ingestion</td><td>Cholera</td><td>Protected source, effective treatment, safe storage</td></tr><tr><td>Water-washed, by poor hygiene</td><td>Trachoma</td><td>Enough clean water, conveniently available for washing</td></tr></tbody></table>",
            "points": [
              {
                "html": "Providing safe drinking water helps to prevent water-borne diseases.",
                "sources": [
                  {
                    "id": "CAP4-06-00022",
                    "label": "p. 24; topic 6 point 23"
                  }
                ]
              },
              {
                "html": "Trachoma can be prevented by providing adequate quantity and good quality of water.",
                "sources": [
                  {
                    "id": "CAP4-06-00008",
                    "label": "p. 23; topic 6 point 8; topic 6 point 9"
                  }
                ]
              },
              {
                "html": "A disease which is widespread and can reach globally is termed pandemic.",
                "sources": [
                  {
                    "id": "CAP4-06-00011",
                    "label": "p. 23; topic 6 point 12"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00022",
                "label": "p. 24; topic 6 point 23"
              },
              {
                "id": "CAP4-06-00008",
                "label": "p. 23; topic 6 point 8; topic 6 point 9"
              },
              {
                "id": "CAP4-06-00011",
                "label": "p. 23; topic 6 point 12"
              }
            ]
          },
          {
            "id": "chemical-hazards-nitrate-and-pesticides",
            "title": "Chemical hazards hidden in clear water: nitrate and pesticide residues",
            "html": "<p>Chemical contamination is often invisible. <em>Nitrate</em> in well water is linked to infant methaemoglobinaemia, or blue baby syndrome, for example when formula is made up with contaminated water. The exposure is nitrate, but the mechanism runs through nitrite: nitrate forms nitrite, and nitrite oxidizes haemoglobin iron from Fe(II) to Fe(III). The methaemoglobin formed carries oxygen poorly.</p><p>The redox direction matters: ferrous iron is oxidized to ferric iron, which is neither a reduction nor carbon-monoxide-style binding. Boiling is not a nitrate-removal barrier.</p><p><em>Pesticides</em> applied in a catchment can travel with runoff or groundwater to a drinking-water source. Some residues persist and affect quality without colour, odour or turbidity, so clear water is not proof of chemical safety, and a fading smell does not end the concern. Persistence and toxicity differ between compounds and conditions, so evaluate each compound: what was applied, how it reaches the source, how long it lasts and which exposure pathways matter.</p>",
            "formulas": [
              {
                "label": "Oxidation of haemoglobin iron",
                "tex": "\\mathrm{Fe^{2+} \\rightarrow Fe^{3+} + e^-}",
                "where": "<p>Nitrite drives this oxidation, turning haemoglobin into methaemoglobin, which carries oxygen poorly.</p>"
              }
            ],
            "points": [
              {
                "html": "Blue baby syndrome (methaemoglobinaemia) is caused by nitrate.",
                "sources": [
                  {
                    "id": "CAP4-06-00006",
                    "label": "p. 23; topic 6 point 6"
                  }
                ]
              },
              {
                "html": "The main problem caused by the use of pesticides is that their residue persists in water and other components of the environment.",
                "sources": [
                  {
                    "id": "CAP4-10-00174",
                    "label": "p. 42; rural point 2"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00006",
                "label": "p. 23; topic 6 point 6"
              },
              {
                "id": "CAP4-10-00174",
                "label": "p. 42; rural point 2"
              }
            ]
          },
          {
            "id": "per-capita-demand-and-population-forecasts",
            "title": "Water demand: per-capita rates and geometric population forecasts",
            "html": "<p>Demand is expressed as a <em>per-capita rate</em> in litres per person per day (lpcd): the daily volume divided by the population served. Keep the units honest. The result is an average daily delivered volume, not an hourly or instantaneous rate, and not necessarily a gross production allowance that must also cover losses and other uses.</p><p>Design populations are forecast. The <em>arithmetic increase method</em> adds a constant increment each decade. The <em>geometric increase method</em> applies a constant percentage to each decade's opening population, so growth compounds and pulls further ahead of the arithmetic result with every added decade.</p><p>The geometric method is conventionally preferred for rapidly growing towns. The model needs supporting evidence for the planning horizon, and boundary changes must be handled separately.</p>",
            "formulas": [
              {
                "label": "Per-capita demand",
                "tex": "q = \\dfrac{Q}{P}",
                "where": "<p>\\(Q\\) is the daily volume in litres and \\(P\\) the population served.</p>"
              },
              {
                "label": "Arithmetic increase",
                "tex": "P_n = P_0 + n\\,\\bar{x}",
                "where": "<p>\\(\\bar{x}\\) is the average increase per decade and \\(n\\) the number of decades.</p>"
              },
              {
                "label": "Geometric increase",
                "tex": "P_n = P_0\\,(1 + r)^n",
                "where": "<p>\\(r\\) is the growth rate per decade, as a fraction.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: a per-capita rate and a two-decade forecast",
              "html": "<p>A supply of 720 m³/day serves 6,000 people with no non-domestic use:</p>\\[\\begin{aligned} q &amp;= \\dfrac{720\\,000\\ \\text{L/day}}{6000} \\\\ &amp;= 120\\ \\text{L/person/day} \\end{aligned}\\]<p>A town of 10,000 grows at 10% per decade on each decade's opening population:</p>\\[P_2 = 10\\,000 \\times 1.10^2 = 12\\,100\\]<p>Adding 1,000 in each decade would give the arithmetic figure of 12,000 instead.</p>"
            },
            "points": [
              {
                "html": "The per capita demand of water is calculated in litres per person per day.",
                "sources": [
                  {
                    "id": "CAP4-06-00004",
                    "label": "p. 23; topic 6 point 4"
                  }
                ]
              },
              {
                "html": "The geometrical increase method is preferred for a rapidly growing population.",
                "sources": [
                  {
                    "id": "CAP4-06-00012",
                    "label": "p. 23; topic 6 point 13"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00004",
                "label": "p. 23; topic 6 point 4"
              },
              {
                "id": "CAP4-06-00012",
                "label": "p. 23; topic 6 point 13"
              }
            ]
          },
          {
            "id": "livestock-and-fire-allowances",
            "title": "Livestock and fire-fighting allowances: state the base and the event",
            "html": "<p>A percentage means nothing until its base is stated. Livestock demand as a share of domestic demand divides by the household figure; a share of total demand divides by households plus livestock, which measures something else. Allocate livestock water from animal numbers, species and the scheme's service policy. The livestock water demand should not exceed 20% of the total domestic demand.</p><p>Fire demand is an <em>event</em> defined by flow, duration and residual pressure. Its volume is flow times duration, and dividing that volume by the population gives an event volume per person. According to DWSS, the water required for fire-fighting should not be more than 1 lpcd.</p>",
            "formulas": [
              {
                "label": "Share of a stated base",
                "tex": "\\text{share} = \\dfrac{\\text{part}}{\\text{base}} \\times 100\\%"
              },
              {
                "label": "Fire event volume",
                "tex": "V = Q_{\\text{fire}}\\, t"
              },
              {
                "label": "Event volume per person",
                "tex": "v = \\dfrac{V}{P}"
              }
            ],
            "example": {
              "title": "Worked examples: a livestock share and a fire event",
              "html": "<p>Households need 80,000 L/day and livestock 24,000 L/day:</p>\\[\\dfrac{24\\,000}{80\\,000} \\times 100\\% = 30\\%\\]<p>Dividing by the combined 104,000 L/day gives about 23.1%, which is the livestock share of the total instead.</p><p>A fire flow of 10 L/s lasting two hours in a town of 12,000 people:</p>\\[\\begin{aligned} V &amp;= 10 \\times 2 \\times 3600 = 72\\,000\\ \\text{L} \\\\ &amp;= 72\\ \\text{m}^3 \\\\ v &amp;= \\dfrac{72\\,000}{12\\,000} = 6\\ \\text{L/person} \\end{aligned}\\]"
            },
            "points": [
              {
                "html": "The livestock water demand should not exceed 20% of the total domestic demand.",
                "sources": [
                  {
                    "id": "CAP4-06-00014",
                    "label": "p. 23; topic 6 point 15"
                  }
                ]
              },
              {
                "html": "According to DWSS, the water required for fire-fighting should not be more than 1 lpcd.",
                "sources": [
                  {
                    "id": "CAP4-06-00109",
                    "label": "p. 26; topic 6 point 109"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00014",
                "label": "p. 23; topic 6 point 15"
              },
              {
                "id": "CAP4-06-00109",
                "label": "p. 26; topic 6 point 109"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Per-capita demand",
            "tex": "q = \\dfrac{Q}{P}",
            "note": "Daily volume in litres over population served, in L/person/day."
          },
          {
            "label": "Arithmetic increase",
            "tex": "P_n = P_0 + n\\,\\bar{x}"
          },
          {
            "label": "Geometric increase",
            "tex": "P_n = P_0\\,(1 + r)^n",
            "note": "\\(r\\) per decade, \\(n\\) decades."
          },
          {
            "label": "Dissolved solids by difference",
            "tex": "\\text{TDS} \\approx \\text{TS} - \\text{TSS}",
            "note": "Consistent filtration and drying methods."
          },
          {
            "label": "Carbonate equilibrium",
            "tex": "\\mathrm{CO_2 + H_2O \\rightleftharpoons H^+ + HCO_3^-}"
          },
          {
            "label": "Share of a stated base",
            "tex": "\\text{share} = \\dfrac{\\text{part}}{\\text{base}} \\times 100\\%"
          },
          {
            "label": "Fire event volume",
            "tex": "V = Q_{\\text{fire}}\\, t",
            "note": "Event volume per person is \\(V/P\\)."
          }
        ],
        "cautions": [],
        "gaps": [
          "No per-capita demand norms, peak factors, loss allowances or institutional demands are given, so a design demand total cannot be assembled from this topic alone.",
          "Population forecasting is limited to the arithmetic and geometric ideas; incremental-increase, logistic and graphical methods are not treated.",
          "Hardness, alkalinity titration procedures and their reporting units are not covered beyond the distinction between pH and alkalinity."
        ]
      },
      "ACiE0602": {
        "code": "ACiE0602",
        "questionCount": 20,
        "format": 2,
        "summary": "<p>This subchapter follows water from the intake to the consumer: river intake siting and simple submerged intakes, branching and looped distribution layouts, valves and fittings, thermal movement and pipe-wall behaviour, continuity and local losses, loop analysis by Hardy Cross, gravity supply pressure, transmission-main discharge and service-reservoir reserve storage. The capsule questions test device duties, layout trade-offs and short hydraulic calculations.</p>",
        "blocks": [
          {
            "id": "river-intake-siting-and-submerged-intakes",
            "title": "River intakes: bend position, navigation channels and simple submerged intakes",
            "html": "<p>An intake must draw a dependable quantity of acceptable water all year while surviving floods, sediment and debris. On a meandering river the outer <em>concave bank</em> commonly carries deeper flow, while deposition builds a point bar on the inner <em>convex bank</em>. The outer bank therefore offers more dependable depth at low water, but it is also where erosion and scour act and where the channel may migrate.</p><p>Siting also considers other river users. An intake in an active navigation channel obstructs vessels and risks collision damage and unsafe access, so where low-water depth is otherwise similar a protected location outside the channel is preferred. That criterion says nothing about yield, quality or bed stability, which are judged together with sediment, submergence and regulatory constraints.</p><p>Small works often use a <em>simple submerged intake</em>: a fixed, screened pipe entrance set below the lowest expected water level, with no intake tower. It suits sites with enough submergence, a reliable source and maintenance access.</p>",
            "points": [
              {
                "html": "In a meandering river, the intake should be placed on the concave bank for good water quality and flow.",
                "sources": [
                  {
                    "id": "CAP4-06-00100",
                    "label": "p. 25; topic 6 point 101"
                  }
                ]
              },
              {
                "html": "An intake in a water supply system should not be located in a navigation channel.",
                "sources": [
                  {
                    "id": "CAP4-06-00108",
                    "label": "p. 26; topic 6 point 108"
                  }
                ]
              },
              {
                "html": "The intake structure widely used in small works is a simple submerged intake.",
                "sources": [
                  {
                    "id": "CAP4-06-00124",
                    "label": "p. 26; topic 6 point 125"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00100",
                "label": "p. 25; topic 6 point 101"
              },
              {
                "id": "CAP4-06-00108",
                "label": "p. 26; topic 6 point 108"
              },
              {
                "id": "CAP4-06-00124",
                "label": "p. 26; topic 6 point 125"
              }
            ]
          },
          {
            "id": "distribution-layouts-dead-ends-and-flushing",
            "title": "Distribution layouts: dead ends, loops, water age and flushing",
            "html": "<p>A <em>dead-end</em> or tree system has branches that terminate without reconnecting. It fits towns whose irregular streets do not form a grid, and each pipe has a single supply path, which keeps analysis simple. The weaknesses follow from that single path: water near the terminals moves slowly, so water age rises and deposits collect, and a repair or shutdown cuts off everything downstream.</p><p>Looped layouts trade cost and analytical effort for reliability. In a <em>gridiron</em> layout interconnected pipes let most points receive water from more than one direction, and a <em>ring</em> main encircles a district. Looping reduces stagnation and provides alternative routes during maintenance. The decision is contextual: irregular streets make a tree convenient, but the age of a town does not by itself settle the layout.</p><p>Where a dead end remains, a suitably located terminal flushing outlet lets operators replace aged water and mobilise deposits. Plan the flushing rate, the disposal route and pressure protection. Raising the pressure, enlarging the branch while demand stays low, or fitting an upstream non-return valve creates no through-flow; a larger pipe at the same demand can even lengthen residence time.</p>",
            "moreHtml": "<p>Flushing treats the symptom. Where excessive water age keeps returning, investigate the cause and consider looping the branch or managing demand so that the water keeps moving.</p>",
            "points": [
              {
                "html": "The dead-end system of distribution is used in irregularly developed old cities.",
                "sources": [
                  {
                    "id": "CAP4-06-00016",
                    "label": "p. 24; topic 6 point 17"
                  }
                ]
              },
              {
                "html": "Scour valves are provided at every depression and dead end of a pipeline to drain out the waste water collected there.",
                "sources": [
                  {
                    "id": "CAP4-06-00034",
                    "label": "p. 24; topic 6 point 34"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00016",
                "label": "p. 24; topic 6 point 17"
              },
              {
                "id": "CAP4-06-00034",
                "label": "p. 24; topic 6 point 34"
              }
            ]
          },
          {
            "id": "valves-altitude-scour-and-air-release",
            "title": "Valves for tank level control, main drainage and air release",
            "html": "<p>Each appurtenance on a main has one hydraulic duty, and its position follows from that duty.</p><ul><li><em>Altitude valve</em>: on the inlet of an elevated tank or standpipe, it senses level-related pressure and shuts off inflow at a preset upper water level, so no operator has to close a gate valve. It controls level; it does not lift water.</li><li><em>Scour, drain, washout or blow-off valve</em>: at accessible low points and depressions, it lets the main be emptied and settled sediment flushed. It needs isolation and a protected discharge route free of cross-connection or backflow. What it drains is supply water from the main, not sewage.</li><li><em>Air-release valve</em>: at summits and other hydraulic high points, where air collects and restricts flow, it vents that air during normal pressurised operation.</li><li><em>Foot valve</em>: fitted where the suction pipe draws from the sump, it holds water in the suction line so the pump keeps its prime; it has nothing to do with tank level.</li></ul><p>Sizing matters as much as position. A small release valve suited to venting accumulated air under pressure is not automatically adequate for admitting or expelling large air volumes while a main is drained or filled; air/vacuum or combination duties are specified separately.</p>",
            "points": [
              {
                "html": "Altitude valves are used for supplying water to elevated tanks or standpipes.",
                "sources": [
                  {
                    "id": "CAP4-06-00029",
                    "label": "p. 24; topic 6 point 30"
                  }
                ]
              },
              {
                "html": "In a water distribution system, scour, drain or blow-off valves are provided at low points and dead ends.",
                "sources": [
                  {
                    "id": "CAP4-06-00033",
                    "label": "pp. 24, 25; topic 6 point 34; topic 6 point 89; topic 6 point 91"
                  }
                ]
              },
              {
                "html": "Air relief valves are provided at the summits of a water pipeline.",
                "sources": [
                  {
                    "id": "CAP4-06-00095",
                    "label": "pp. 25, 26; topic 6 point 96; topic 6 point 114"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00029",
                "label": "p. 24; topic 6 point 30"
              },
              {
                "id": "CAP4-06-00033",
                "label": "pp. 24, 25; topic 6 point 34; topic 6 point 89; topic 6 point 91"
              },
              {
                "id": "CAP4-06-00095",
                "label": "pp. 25, 26; topic 6 point 96; topic 6 point 114"
              }
            ]
          },
          {
            "id": "fittings-and-thermal-movement",
            "title": "Pipe fittings and allowance for thermal movement",
            "html": "<p>Fittings are named by what they do to the pipe run. A <em>reducer</em> joins two diameters along the same line, for example 200 mm to 150 mm. A <em>tee</em> adds a branch, an <em>elbow</em> changes direction, an <em>end cap</em> closes the run and a straight coupling joins equal pipes.</p><p>Elbows are made at several angles, commonly 90° and 45°, so a right-angle turn at unchanged diameter calls specifically for a 90-degree elbow. Bend radius, pressure class, local head loss and thrust restraint remain selection checks, and every transition needs compatible pressure ratings and connection details.</p><p>Temperature changes move unrestrained pipes. A free pipe lengthens in proportion to its length, its expansion coefficient and the temperature change, and shortens by the same relation when it cools. An <em>expansion joint</em> accommodates the movement only within its designed stroke, restraint and pressure-thrust arrangement.</p>",
            "formulas": [
              {
                "label": "Free thermal movement",
                "tex": "\\Delta L = \\alpha\\, L\\, \\Delta T",
                "where": "<p>\\(\\alpha\\) is the expansion coefficient per °C, \\(L\\) the pipe length and \\(\\Delta T\\) the temperature change; a fall in temperature gives contraction.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a 30 m steel pipe warming by 40 °C",
              "html": "<p>With \\(\\alpha = 12 \\times 10^{-6}\\) per °C:</p>\\[\\begin{aligned}\\Delta L &amp;= 12 \\times 10^{-6} \\times 30 \\times 40 \\\\ &amp;= 0.0144\\ \\text{m} = 14.4\\ \\text{mm}\\end{aligned}\\]<p>The pipe extends by 14.4 mm, and the expansion arrangement must accommodate that stroke. A 40 °C fall would produce the same movement as a contraction.</p>"
            },
            "points": [
              {
                "html": "A reducer fitting is used to connect pipes of different diameters.",
                "sources": [
                  {
                    "id": "CAP4-06-00028",
                    "label": "p. 24; topic 6 point 29"
                  }
                ]
              },
              {
                "html": "An elbow pipe fitting provides a deviation of 90° in the pipe work system.",
                "sources": [
                  {
                    "id": "CAP4-06-00031",
                    "label": "p. 24; topic 6 point 32"
                  }
                ]
              },
              {
                "html": "Expansion joints are mostly used at places where a pipe expands and contracts due to changes in atmospheric temperature.",
                "sources": [
                  {
                    "id": "CAP4-06-00036",
                    "label": "p. 24; topic 6 point 36"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00028",
                "label": "p. 24; topic 6 point 29"
              },
              {
                "id": "CAP4-06-00031",
                "label": "p. 24; topic 6 point 32"
              },
              {
                "id": "CAP4-06-00036",
                "label": "p. 24; topic 6 point 36"
              }
            ]
          },
          {
            "id": "pipe-walls-internal-and-external-pressure",
            "title": "Pipe walls under internal and external pressure",
            "html": "<p>The direction of pressure changes how a pipe wall fails. Internal pressure stretches the wall circumferentially, producing tensile <em>hoop stress</em>, and the usual check compares that stress with the allowable tensile stress of the material.</p><p>External pressure acts the other way. Groundwater or soil pressing on an emptied thin steel pipe compresses the shell, and a thin circular shell can lose stability by <em>buckling</em>, collapsing into an oval or lobed shape long before the steel yields. External-pressure buckling and ovalization is a stability failure, distinct from tensile yielding, so passing the internal-pressure check does not settle it.</p><p>Buckling resistance depends strongly on wall thickness relative to diameter, and also on initial ovality, corrosion loss, stiffeners or restraints and the support given by the surrounding soil. Steel is not intrinsically unable to carry external load; a thin shell simply needs this separate check, particularly whenever the pipe may be emptied.</p>",
            "formulas": [
              {
                "label": "Hoop stress from internal pressure",
                "tex": "\\sigma_h = \\dfrac{p\\,D}{2t}",
                "where": "<p>\\(p\\) is the internal pressure, \\(D\\) the diameter and \\(t\\) the wall thickness of a thin pipe.</p>"
              },
              {
                "label": "Elastic buckling pressure, long unsupported tube",
                "tex": "p_{\\text{cr}} = \\dfrac{2E}{1 - \\nu^2} \\left(\\dfrac{t}{D}\\right)^3",
                "where": "<p>An idealised value for a perfectly round tube with mean diameter \\(D\\); ovality, corrosion and soil support change it considerably.</p>"
              }
            ],
            "points": [
              {
                "html": "Steel pipes are strong in resisting internal pressure but weak when stressed from outside.",
                "sources": [
                  {
                    "id": "CAP4-06-00032",
                    "label": "p. 24; topic 6 point 33"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00032",
                "label": "p. 24; topic 6 point 33"
              }
            ]
          },
          {
            "id": "series-continuity-and-local-losses",
            "title": "Continuity in series pipes and local losses at valves",
            "html": "<p>For steady incompressible flow through full pipes in series, with no leakage, storage or branch withdrawal, <em>continuity</em> fixes one discharge through every section. Velocity then follows the flow area, and the area of a circular pipe varies with the square of its diameter.</p><p>Halving the diameter therefore quarters the area, and at the same discharge the mean velocity becomes four times as large. Discharge does not change at a contraction; velocity and head loss do.</p><p>Valves and fittings add <em>local losses</em> proportional to the velocity head. The loss coefficient \\(K\\) is tied to a stated reference velocity, usually the pipe velocity, and depends on the valve's geometry and opening. The result is a head in metres, not a pressure.</p>",
            "formulas": [
              {
                "label": "Continuity in series",
                "tex": "Q = A_1 V_1 = A_2 V_2 = A_3 V_3"
              },
              {
                "label": "Velocity ratio at fixed discharge",
                "tex": "\\dfrac{V_2}{V_1} = \\left(\\dfrac{D_1}{D_2}\\right)^2"
              },
              {
                "label": "Local head loss",
                "tex": "h_L = K\\,\\dfrac{V^2}{2g}"
              }
            ],
            "example": {
              "title": "Worked examples: a halved diameter and a butterfly valve",
              "html": "<p>If \\(D_2 = D_1/2\\), then \\(V_2/V_1 = 2^2 = 4\\): the discharge is unchanged and the velocity quadruples.</p><p>A data sheet gives \\(K = 0.40\\) for one fully open butterfly valve, referenced to a pipe velocity of 3.0 m/s:</p>\\[\\begin{aligned} h_L &amp;= 0.40 \\times \\dfrac{3.0^2}{2 \\times 9.81} \\\\ &amp;= \\dfrac{3.6}{19.62} = 0.18349\\ \\text{m} \\end{aligned}\\]<p>The local loss is about 0.183 m of head.</p>"
            },
            "points": [
              {
                "html": "If three pipes are connected in series, the discharge is the same for all of them.",
                "sources": [
                  {
                    "id": "CAP4-06-00030",
                    "label": "p. 24; topic 6 point 31"
                  }
                ]
              },
              {
                "html": "The head loss coefficient for a fully open butterfly valve is 0.4.",
                "sources": [
                  {
                    "id": "CAP4-06-00126",
                    "label": "p. 26; topic 6 point 127"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00030",
                "label": "p. 24; topic 6 point 31"
              },
              {
                "id": "CAP4-06-00126",
                "label": "p. 26; topic 6 point 127"
              }
            ]
          },
          {
            "id": "loop-energy-balance-and-hardy-cross",
            "title": "Pipe networks: the loop energy balance and the Hardy Cross method",
            "html": "<p>A looped network obeys two rules. At each junction inflow equals outflow. Around each closed loop the algebraic sum of piezometric head changes is zero, because returning to the starting junction returns to the same head.</p><p>With equal velocities at the junctions, choose a traversal direction and sign each head drop: positive along the assumed flow, negative against it. A negative value for a segment means a head rise along the chosen traversal, as when a pipe is traversed opposite its actual flow. Pump gains and velocity changes must be included consistently where present.</p><p>The <em>Hardy Cross method</em> builds on these rules. Assign trial flows that already satisfy junction continuity, compute each loop's signed head imbalance and apply one loop correction to every pipe in that loop. Adding the same correction around a closed loop preserves continuity while reducing the imbalance; repeat until it is negligible, keeping head-loss laws and sign conventions consistent.</p><p>Hardy Cross is a classical method. Modern programs such as EPANET use a global-gradient algorithm, so not every computer network solution is simply Hardy Cross.</p>",
            "formulas": [
              {
                "label": "Loop energy balance",
                "tex": "\\sum_{\\text{loop}} h = 0",
                "where": "<p>Head drops are signed: positive along the assumed flow in the traversal direction, negative against it.</p>"
              },
              {
                "label": "Hardy Cross loop correction",
                "tex": "\\Delta Q = -\\dfrac{\\sum h}{\\sum \\left( dh/dQ \\right)}"
              },
              {
                "label": "Derivative for a squared loss law",
                "tex": "h = rQ|Q| \\;\\Rightarrow\\; \\dfrac{dh}{dQ} = 2r|Q|"
              }
            ],
            "example": {
              "title": "Worked examples: closing a loop and one Hardy Cross correction",
              "html": "<p>Signed drops of +8 m and +5 m on two segments of a loop require a third value \\(x\\) with</p>\\[8 + 5 + x = 0 \\;\\Rightarrow\\; x = -13\\ \\text{m}\\]<p>Suppose a loop is formed by two identical pipes in parallel, with trial flows of 6 and 4 units running the same way and totalling 10, and \\(h = q|q|\\). Traversed clockwise, the signed flows are +6 and −4.</p>\\[\\begin{aligned} \\sum h &amp;= 36 - 16 = 20 \\\\ \\sum dh/dq &amp;= 2(6 + 4) = 20 \\\\ \\Delta q &amp;= -20/20 = -1 \\end{aligned}\\]<p>The corrected signed flows are +5 and −5, so each pipe physically carries 5 units. The total stays 10 and the two head losses now match, as identical parallel pipes require.</p>"
            },
            "points": [
              {
                "html": "In a pipe network, the algebraic sum of the piezometric head drops around each elementary circuit must be zero.",
                "sources": [
                  {
                    "id": "CAP4-06-00111",
                    "label": "p. 26; topic 6 point 111"
                  }
                ]
              },
              {
                "html": "The Hardy Cross method is used to solve the problems of pipe networks.",
                "sources": [
                  {
                    "id": "CAP4-06-00103",
                    "label": "p. 26; topic 6 point 104"
                  }
                ]
              },
              {
                "html": "In the Hardy Cross method, the correction applied to the assumed flow in a loop is \\(\\Delta Q = -\\dfrac{\\sum rQ^n}{\\sum nrQ^{n-1}}\\).",
                "sources": [
                  {
                    "id": "CAP4-06-00104",
                    "label": "p. 26; topic 6 point 104"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00111",
                "label": "p. 26; topic 6 point 111"
              },
              {
                "id": "CAP4-06-00103",
                "label": "p. 26; topic 6 point 104"
              },
              {
                "id": "CAP4-06-00104",
                "label": "p. 26; topic 6 point 104"
              }
            ]
          },
          {
            "id": "gravity-supply-and-transmission-mains",
            "title": "Gravity supply pressure and transmission-main discharge",
            "html": "<p>In hilly regions a source above the town can often supply by <em>gravity</em>. The pressure head available at a node is the difference between the source water level and the node elevation, less the flowing head losses, with the nodal velocity head neglected.</p><p>A <em>transmission main</em> that fills a service reservoir, which in turn balances the hourly demand, is sized for the governing daily volume delivered over its actual operating period. The maximum-day volume is the usual basis in that arrangement. Spreading the volume over 24 hours when the main runs for fewer hours understates the discharge it must carry.</p>",
            "formulas": [
              {
                "label": "Available pressure head, gravity supply",
                "tex": "\\dfrac{p}{\\rho g} = (H_s - z_n) - \\sum h_f",
                "where": "<p>\\(H_s\\) is the source water level, \\(z_n\\) the node elevation and \\(\\sum h_f\\) the flowing losses.</p>"
              },
              {
                "label": "Operating discharge",
                "tex": "Q = \\dfrac{V_{\\text{day}}}{t_{\\text{op}}}"
              }
            ],
            "example": {
              "title": "Worked examples: a hill source and a 12-hour main",
              "html": "<p>A reservoir at 120 m supplies a node at 80 m with 15 m of losses:</p>\\[\\dfrac{p}{\\rho g} = (120 - 80) - 15 = 25\\ \\text{m}\\]<p>A main must deliver a maximum-day volume of 900 m³ in 12 operating hours:</p>\\[Q = \\dfrac{900}{12} = 75\\ \\text{m}^3/\\text{h}\\]<p>Dividing by 24 would give only the continuous-equivalent average of 37.5 m³/h.</p>"
            },
            "moreHtml": "<p>Direct supply without balancing storage, fire cases, losses and pumping schedules can change the governing design condition.</p>",
            "points": [
              {
                "html": "The type of water supply system generally used in hilly regions is gravity flow system.",
                "sources": [
                  {
                    "id": "CAP4-06-00105",
                    "label": "p. 26; topic 6 point 105"
                  }
                ]
              },
              {
                "html": "A transmission main in a water supply system is designed for the maximum daily demand.",
                "sources": [
                  {
                    "id": "CAP4-06-00114",
                    "label": "p. 26; topic 6 point 115"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00105",
                "label": "p. 26; topic 6 point 105"
              },
              {
                "id": "CAP4-06-00114",
                "label": "p. 26; topic 6 point 115"
              }
            ]
          },
          {
            "id": "service-reservoir-breakdown-reserve",
            "title": "Service reservoir storage: sizing the breakdown reserve",
            "html": "<p>A service reservoir holds several storage components. <em>Balancing storage</em> absorbs the difference between steady inflow and fluctuating hourly demand, <em>fire storage</em> covers a specified fire event, and a <em>breakdown reserve</em> keeps supply going while inflow is interrupted, for example by a pump failure, a main repair or a power cut.</p><p>Size the breakdown reserve from the outage scenario: the demand rate to be maintained multiplied by the outage duration with no inflow. Where the components do not overlap, their volumes add, and the reserve's share of combined usable storage follows from the totals.</p>",
            "formulas": [
              {
                "label": "Breakdown reserve",
                "tex": "V_{\\text{res}} = q_{\\text{out}}\\, t_{\\text{outage}}"
              }
            ],
            "example": {
              "title": "Worked example: a six-hour outage",
              "html": "<p>Maintain 5 m³/h for six hours with no inflow, beside a non-overlapping 70 m³ balancing volume:</p>\\[\\begin{aligned} V_{\\text{res}} &amp;= 5 \\times 6 = 30\\ \\text{m}^3 \\\\ V_{\\text{total}} &amp;= 70 + 30 = 100\\ \\text{m}^3 \\end{aligned}\\]<p>The reserve is 30/100 of combined usable storage, that is 30%.</p>"
            },
            "points": [
              {
                "html": "The reserve of water for the breakdown period is generally not more than 25% of the total storage.",
                "sources": [
                  {
                    "id": "CAP4-06-00035",
                    "label": "p. 24; topic 6 point 35"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00035",
                "label": "p. 24; topic 6 point 35"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Continuity in series",
            "tex": "Q = A_1 V_1 = A_2 V_2"
          },
          {
            "label": "Pipe area",
            "tex": "A = \\dfrac{\\pi D^2}{4}"
          },
          {
            "label": "Velocity ratio at fixed discharge",
            "tex": "\\dfrac{V_2}{V_1} = \\left(\\dfrac{D_1}{D_2}\\right)^2"
          },
          {
            "label": "Local head loss",
            "tex": "h_L = K\\,\\dfrac{V^2}{2g}",
            "note": "K is referenced to a stated velocity."
          },
          {
            "label": "Loop energy balance",
            "tex": "\\sum_{\\text{loop}} h = 0"
          },
          {
            "label": "Hardy Cross loop correction",
            "tex": "\\Delta Q = -\\dfrac{\\sum h}{\\sum \\left( dh/dQ \\right)}",
            "note": "For \\(h = rQ|Q|\\), \\(dh/dQ = 2r|Q|\\)."
          },
          {
            "label": "Gravity pressure head",
            "tex": "\\dfrac{p}{\\rho g} = (H_s - z_n) - \\sum h_f"
          },
          {
            "label": "Operating discharge",
            "tex": "Q = \\dfrac{V_{\\text{day}}}{t_{\\text{op}}}"
          },
          {
            "label": "Breakdown reserve",
            "tex": "V_{\\text{res}} = q_{\\text{out}}\\, t_{\\text{outage}}"
          },
          {
            "label": "Free thermal movement",
            "tex": "\\Delta L = \\alpha\\, L\\, \\Delta T"
          },
          {
            "label": "Hoop stress, thin pipe",
            "tex": "\\sigma_h = \\dfrac{p\\,D}{2t}"
          }
        ],
        "cautions": [],
        "gaps": [
          "Break-pressure tanks, named in this topic's syllabus scope, receive no capsule point and are not described here.",
          "Pipe materials and joint types are covered only through single fittings, expansion movement and the thin-steel buckling caution; no material comparison or pressure-class rules are given.",
          "Service-reservoir capacity appears only as a breakdown-reserve example; mass-curve balancing storage and fire storage are not derived.",
          "Network analysis stops at the loop energy balance and one Hardy Cross correction; no friction formula or pipe-sizing procedure is supplied.",
          "Intake design details such as screen approach velocities, submergence depths and intake-well dimensions are not provided."
        ]
      },
      "ACiE0603": {
        "code": "ACiE0603",
        "questionCount": 18,
        "format": 2,
        "summary": "<p>This subchapter covers the unit processes of a conventional treatment works: screening, plain sedimentation and short-circuiting, coagulation and flocculation, coagulant sludge recovery, rapid and slow sand filtration, chlorination with bleaching powder, softening of temporary hardness, aeration and algae control. The capsule questions test screen and basin sizing, rate conversions, filter operation, available chlorine, chemical pH effects and the limits of what a single test or reading can prove.</p>",
        "blocks": [
          {
            "id": "coarse-screens-dimensions-and-open-area",
            "title": "Coarse screens: bar size, clear spacing, inclination and open area",
            "html": "<p><em>Screening</em> is the first physical barrier at an intake or works: bars intercept floating and coarse objects that could damage pumps or block channels. It is not fine-media filtration and removes nothing dissolved.</p><p>A conventional textbook specification for coarse screens adopts bar thicknesses of 10–25 mm, clear gaps of 20–100 mm and an inclination of 45–60° to the horizontal. Check a proposal against every band separately: a gap under 20 mm, bars over 25 mm or a slope steeper than 60° would each fall outside.</p><p>Open area governs approach velocity and head loss. Repeating bars of width \\(b\\) with clear gaps \\(s\\) form a pitch of \\(b + s\\), of which only the gap is open. Dividing the gap by the bar width gives a ratio, not an open fraction. Hydraulic design also allows for side frames, blockage between cleanings and the projection of an inclined screen.</p>",
            "formulas": [
              {
                "label": "Open fraction of a bar screen",
                "tex": "\\phi = \\dfrac{s}{b + s}",
                "where": "<p>\\(b\\) is the bar width and \\(s\\) the clear gap, ignoring frames, blockage and inclination.</p>"
              }
            ],
            "example": {
              "title": "Worked example: 15 mm bars with 50 mm gaps at 55 degrees",
              "html": "<p>The repeating pitch is 15 + 50 = 65 mm, of which 50 mm is open:</p>\\[\\phi = \\dfrac{50}{15 + 50} = 0.76923 \\approx 76.9\\%\\]<p>Set at 55° to the horizontal, the same arrangement also lies inside all three adopted bands: bars 10–25 mm, gaps 20–100 mm and inclination 45–60°.</p>"
            },
            "points": [
              {
                "html": "The opening spacing of bars in a coarse screen is 50 mm.",
                "sources": [
                  {
                    "id": "CAP4-06-00039",
                    "label": "p. 24; topic 6 point 39; topic 6 point 44"
                  }
                ]
              },
              {
                "html": "A coarse screen, inclined at 45° to 60°, generally has bars of 10–25 mm with spacing of 20–100 mm.",
                "sources": [
                  {
                    "id": "CAP4-06-00040",
                    "label": "p. 24; topic 6 point 44"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00039",
                "label": "p. 24; topic 6 point 39; topic 6 point 44"
              },
              {
                "id": "CAP4-06-00040",
                "label": "p. 24; topic 6 point 44"
              }
            ]
          },
          {
            "id": "plain-sedimentation-overflow-rate",
            "title": "Plain sedimentation: surface overflow rate and ideal capture",
            "html": "<p>In an ideal <em>discrete-settling</em> basin a particle is removed if it reaches the floor before the water leaves. A particle entering at the surface must fall the full depth during the detention time, so it is certainly captured when its settling velocity is at least the flow divided by the plan area. Depth cancels out of that comparison.</p><p>The governing parameter is therefore the <em>surface overflow rate</em> (SOR), discharge per unit plan area, which has units of velocity. For particles spread uniformly over the inlet depth, the captured fraction is the settling velocity divided by the SOR, capped at 1. For a given discharge, a larger plan area lowers the SOR and raises ideal efficiency.</p><p>Design reverses the calculation. Loadings quoted in L/day/m² convert to m/day on dividing by 1,000, so the conventional plain-settling band of 12,000–18,000 L/day/m² is 12–18 m/day. The plan area is the discharge divided by the adopted SOR. Depth affects detention and sludge space but does not replace plan area in surface loading, and the settling behaviour of the actual particles must justify the adopted rate.</p>",
            "formulas": [
              {
                "label": "Surface overflow rate",
                "tex": "\\text{SOR} = \\dfrac{Q}{A}"
              },
              {
                "label": "Ideal discrete-settling capture",
                "tex": "\\eta = \\min\\left(\\dfrac{v_s}{Q/A},\\ 1\\right)",
                "where": "<p>\\(v_s\\) is the particle settling velocity; the result assumes no short-circuiting, scour or flocculation.</p>"
              },
              {
                "label": "Plan area for an adopted rate",
                "tex": "A = \\dfrac{Q}{\\text{SOR}}"
              }
            ],
            "example": {
              "title": "Worked examples: enlarging a basin and sizing one",
              "html": "<p>A flow of 1,200 m³/day carries particles settling at 6 m/day:</p>\\[\\begin{aligned} Q/A_1 &amp;= 1200/100 = 12\\ \\text{m/day} \\\\ \\eta_1 &amp;= 6/12 = 50\\% \\\\ Q/A_2 &amp;= 1200/200 = 6\\ \\text{m/day} \\\\ \\eta_2 &amp;= \\min(6/6,\\ 1) = 100\\% \\end{aligned}\\]<p>Capture cannot exceed 100%, so further enlargement gains nothing for these particles. Adopting 15 m/day for 1,800 m³/day:</p>\\[A = \\dfrac{1800}{15} = 120\\ \\text{m}^2\\]"
            },
            "points": [
              {
                "html": "For a given discharge, the efficiency of a sedimentation tank can be increased by increasing its surface area.",
                "sources": [
                  {
                    "id": "CAP4-06-00038",
                    "label": "p. 24; topic 6 point 38"
                  }
                ]
              },
              {
                "html": "The surface overflow rate (SOR) of a plain sedimentation tank is 12,000 to 18,000 L/day/m<sup>2</sup>.",
                "sources": [
                  {
                    "id": "CAP4-06-00052",
                    "label": "p. 24; topic 6 point 50"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00038",
                "label": "p. 24; topic 6 point 38"
              },
              {
                "id": "CAP4-06-00052",
                "label": "p. 24; topic 6 point 50"
              }
            ]
          },
          {
            "id": "short-circuiting-and-tracer-tests",
            "title": "Short-circuiting in settling basins and tracer indices",
            "html": "<p>Real basins depart from ideal flow. Dead zones, density currents and poor inlet design let some water cross much faster than the nominal detention time, a defect called <em>hydraulic short-circuiting</em>. A tracer test reveals it: a pulse of tracer is added at the inlet and its concentration is recorded at the outlet over time.</p><p>Indices compare observed passage times with the nominal detention \\(V/Q\\). The index adopted here uses \\(t_{10}\\), the time for 10% of the tracer mass to leave. A value well below 1 means early breakthrough. Displacement-efficiency conventions differ between texts, so every report must state which tracer time it uses.</p><p>The index is a hydraulic diagnostic. It does not state the fraction of suspended solids removed, although short-circuiting does reduce settling performance below the ideal-basin prediction.</p>",
            "formulas": [
              {
                "label": "Nominal detention time",
                "tex": "t_d = \\dfrac{V}{Q}"
              },
              {
                "label": "Tracer index adopted here",
                "tex": "I = \\dfrac{t_{10}}{V/Q}"
              }
            ],
            "example": {
              "title": "Worked example: early tracer breakthrough",
              "html": "<p>A basin with \\(V/Q = 3.0\\) h gives \\(t_{10} = 1.2\\) h in a tracer test:</p>\\[I = \\dfrac{1.2}{3.0} = 0.40\\]<p>A tenth of the tracer has already left in 40% of the nominal time, so part of the flow is short-circuiting.</p>"
            },
            "points": [
              {
                "html": "Short-circuiting in a sedimentation tank is represented by displacement efficiency.",
                "sources": [
                  {
                    "id": "CAP4-06-00047",
                    "label": "p. 24; topic 6 point 46"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00047",
                "label": "p. 24; topic 6 point 46"
              }
            ]
          },
          {
            "id": "coagulation-jar-tests-and-surfactants",
            "title": "Coagulation and flocculation: jar tests and surfactant interference",
            "html": "<p>Coagulant demand changes with the raw water. After a storm, turbidity and alkalinity may shift, and yesterday's dose may now under- or overdose. A <em>jar test</em> runs parallel, controlled rapid-mix, slow-mix and settling trials on the actual raw water at several coagulant doses and pH conditions, then compares floc formation and settled-water clarity.</p><p>Its purpose is to optimise dose and pH. It does not measure coagulant already present in the water or certify chemical purity, and it does not replace verification at full scale. Coagulant effectiveness does not grow without limit as the dose rises: overdosing can restabilise particles and wastes chemical.</p><p>Some constituents interfere with aggregation. <em>Surfactants</em> from detergent-rich inflows act at interfaces: they stabilise foam and oily emulsions and can impair floc formation and separation. Greasy scum is a symptom that calls for investigation of oil content, other chemicals and operating conditions; it is not on its own a definitive test for surfactants.</p>",
            "points": [
              {
                "html": "The jar test is used to determine the dose of coagulant.",
                "sources": [
                  {
                    "id": "CAP4-06-00021",
                    "label": "p. 24; topic 6 point 22"
                  }
                ]
              },
              {
                "html": "In flocculation, greasing is caused by surfactants.",
                "sources": [
                  {
                    "id": "CAP4-06-00064",
                    "label": "p. 25; topic 6 point 63"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00021",
                "label": "p. 24; topic 6 point 22"
              },
              {
                "id": "CAP4-06-00064",
                "label": "p. 25; topic 6 point 63"
              }
            ]
          },
          {
            "id": "aluminium-sludge-acid-recovery",
            "title": "Coagulant sludge: recovering aluminium with sulphuric acid",
            "html": "<p>Aluminium coagulants such as alum hydrolyse to aluminium hydroxide, which forms the floc and ends up in the sludge. In a controlled recovery study, sulphuric acid can redissolve that hydroxide. The acid supplies hydrogen ions, not hydroxide, so it dissolves rather than precipitates the aluminium, converting it into soluble aluminium sulphate species.</p><p>Recovery is not clean regeneration. Impurities captured in the floc may dissolve along with the aluminium and limit reuse, so the recovered solution needs quality assessment before it is used again. Sludge composition decides how well the idea works, and no field dose or mixing recipe follows from the idealised reaction.</p>",
            "formulas": [
              {
                "label": "Idealised aluminium recovery",
                "tex": "\\begin{aligned} &\\mathrm{2Al(OH)_3 + 3H_2SO_4} \\\\ &\\quad \\rightarrow \\mathrm{Al_2(SO_4)_3 + 6H_2O} \\end{aligned}"
              }
            ],
            "points": [
              {
                "html": "Alum can be regenerated by adding sulphuric acid.",
                "sources": [
                  {
                    "id": "CAP4-06-00101",
                    "label": "p. 25; topic 6 point 102"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00101",
                "label": "p. 25; topic 6 point 102"
              }
            ]
          },
          {
            "id": "rapid-and-slow-sand-filters",
            "title": "Rapid and slow sand filters: rate conversions, area and sand depth",
            "html": "<p>Filtration rates are often quoted in L/h/m². Because 1,000 L is 1 m³, dividing by 1,000 converts them to m/h, a superficial velocity through the bed. The conventional rapid sand filter band of 3,000–6,000 L/h/m² is therefore 3–6 m/h. The operating area is the flow divided by the adopted rate, and extra installed area may be needed so that capacity remains while a unit backwashes or is out of service.</p><p>A <em>slow sand filter</em> is cleaned by scraping off its clogged surface layer as needed, so the bed thins with successive cleanings. Initial depth and minimum remaining depth are separate design values: the historical range of about 0.90–1.10 m describes the initial bed, not the depth that must always remain. After each cleaning the filter needs a ripening period, and water-quality checks confirm performance before normal use resumes.</p>",
            "formulas": [
              {
                "label": "Rate conversion",
                "tex": "1000\\ \\text{L/h/m}^2 = 1\\ \\text{m/h}"
              },
              {
                "label": "Operating filter area",
                "tex": "A = \\dfrac{Q}{v_f}",
                "where": "<p>\\(v_f\\) is the adopted filtration rate in m/h and \\(Q\\) the flow in m³/h.</p>"
              },
              {
                "label": "Number of scrapings to a minimum depth",
                "tex": "n = \\dfrac{d_0 - d_{\\min}}{\\Delta d}"
              }
            ],
            "example": {
              "title": "Worked examples: a rapid filter area and a slow filter bed",
              "html": "<p>A rate of 4,000 L/h/m² is 4 m/h, so a flow of 240 m³/h needs an operating area of</p>\\[A = \\dfrac{240}{4} = 60\\ \\text{m}^2\\]<p>A slow filter starting at 1.00 m of sand, with a project minimum of 0.70 m and 0.05 m removed per scraping, allows</p>\\[n = \\dfrac{1.00 - 0.70}{0.05} = \\dfrac{0.30}{0.05} = 6\\]<p>scrapings before the minimum is reached. The slow-filter values are hypothetical.</p>"
            },
            "points": [
              {
                "html": "The rate of filtration in a rapid sand filter is 3000–6000 L/hr/m<sup>2</sup>.",
                "sources": [
                  {
                    "id": "CAP4-06-00050",
                    "label": "p. 24; topic 6 point 48"
                  }
                ]
              },
              {
                "html": "In a slow sand filter, the thickness of the sand bed is 90 to 110 cm.",
                "sources": [
                  {
                    "id": "CAP4-06-00051",
                    "label": "p. 24; topic 6 point 49"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00050",
                "label": "p. 24; topic 6 point 48"
              },
              {
                "id": "CAP4-06-00051",
                "label": "p. 24; topic 6 point 49"
              }
            ]
          },
          {
            "id": "bleaching-powder-formula-available-chlorine-and-ph",
            "title": "Bleaching powder: formula, available chlorine and its effect on pH",
            "html": "<p>Bleaching powder is conventionally written CaOCl<sub>2</sub>, also represented as Ca(OCl)Cl. That simplified textbook formula differs from pure calcium hypochlorite, Ca(OCl)<sub>2</sub>, and from calcium chloride or slaked lime. Commercial bleaching powder is a mixture rather than a perfectly pure single compound, so dosing calculations use its measured <em>available chlorine</em> rather than an ideal formula.</p><p>Available chlorine expresses oxidising capacity as an equivalent mass of Cl<sub>2</sub>. It does not mean that the powder holds that mass of free chlorine gas. Storage deterioration, delivery losses, chlorine demand and the target residual are separate steps in a dosing calculation.</p><p>The form of the disinfectant also affects pH. When bleaching powder is added to water, its pH decreases.</p>",
            "formulas": [
              {
                "label": "Available chlorine in a batch",
                "tex": "m_{\\mathrm{Cl_2}} = m_{\\text{product}} \\times f_{\\text{avail}}"
              },
              {
                "label": "Hypochlorite hydrolysis raises pH",
                "tex": "\\mathrm{OCl^- + H_2O \\rightleftharpoons HOCl + OH^-}"
              },
              {
                "label": "Chlorine gas hydrolysis lowers pH",
                "tex": "\\mathrm{Cl_2 + H_2O \\rightarrow HOCl + H^+ + Cl^-}"
              }
            ],
            "example": {
              "title": "Worked example: available chlorine in 10 kg of powder",
              "html": "<p>A batch assayed at 35% available chlorine by mass:</p>\\[m_{\\mathrm{Cl_2}} = 10 \\times 0.35 = 3.5\\ \\text{kg}\\]<p>That is 3.5 kg as Cl<sub>2</sub> equivalent before handling losses, a measure of oxidising capacity rather than of free chlorine gas.</p>"
            },
            "points": [
              {
                "html": "According to its chemical composition, the chemical formula of bleaching powder is CaOCl<sub>2</sub>.",
                "sources": [
                  {
                    "id": "CAP4-06-00133",
                    "label": "p. 26; topic 6 point 137"
                  }
                ]
              },
              {
                "html": "Bleaching powder, CaOCl<sub>2</sub>, is chemically known as calcium oxychloride.",
                "sources": [
                  {
                    "id": "CAP4-06-00134",
                    "label": "p. 26; topic 6 point 137"
                  }
                ]
              },
              {
                "html": "When bleaching powder is added to water, its pH decreases.",
                "sources": [
                  {
                    "id": "CAP4-06-00017",
                    "label": "p. 24; topic 6 point 18"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00133",
                "label": "p. 26; topic 6 point 137"
              },
              {
                "id": "CAP4-06-00134",
                "label": "p. 26; topic 6 point 137"
              },
              {
                "id": "CAP4-06-00017",
                "label": "p. 24; topic 6 point 18"
              }
            ]
          },
          {
            "id": "disinfection-evidence-ph-and-oxygen",
            "title": "What disinfection evidence needs: pH claims, chlorine speciation and oxygen",
            "html": "<p>Microbial inactivation depends on the organism, the agent and its concentration, the exposure time, temperature and water chemistry. A single pH reading is not a validated kill criterion. A lime-treated sample at pH 9.5 with no contact-time or microbial records has not been shown to be free of viable E. coli, however clear it looks.</p><p>Alkaline pH also works against chlorination. Free chlorine is shared between hypochlorous acid (HOCl), the stronger disinfectant, and the hypochlorite ion (OCl<sup>−</sup>). As pH rises the balance shifts toward hypochlorite, so a given residual achieves less at pH 9.5 than at pH 7.0. Verification needs contact time and microbial testing.</p><p>Chlorination is a <em>disinfection</em> step that also drives selected oxidation reactions; it is not a deoxygenation process, and under ordinary treatment it does not inherently strip dissolved oxygen. Chlorine demand and breakpoint behaviour reflect reactions with ammonia, organic matter and reduced substances.</p>",
            "formulas": [
              {
                "label": "Free chlorine speciation",
                "tex": "\\mathrm{HOCl \\rightleftharpoons H^+ + OCl^-}",
                "where": "<p>The pK<sub>a</sub> is about 7.5 at 25 °C, so HOCl dominates below that pH and OCl<sup>−</sup> above it.</p>"
              },
              {
                "label": "Fraction of free chlorine present as HOCl",
                "tex": "\\alpha_{\\mathrm{HOCl}} = \\dfrac{1}{1 + 10^{\\,\\text{pH} - \\text{p}K_a}}"
              }
            ],
            "example": {
              "title": "Worked example: the HOCl share at pH 7.0 and 9.5",
              "html": "<p>Taking \\(\\text{p}K_a \\approx 7.5\\):</p>\\[\\begin{aligned} \\alpha_{7.0} &amp;= \\dfrac{1}{1 + 10^{-0.5}} \\approx 0.76 \\\\ \\alpha_{9.5} &amp;= \\dfrac{1}{1 + 10^{2}} \\approx 0.01 \\end{aligned}\\]<p>About three quarters of the free chlorine is the stronger HOCl at pH 7.0, but only about 1% at pH 9.5.</p>"
            },
            "points": [
              {
                "html": "E. coli typically die in water if its pH value is 9.5.",
                "sources": [
                  {
                    "id": "CAP4-06-00023",
                    "label": "p. 24; topic 6 point 24"
                  }
                ]
              },
              {
                "html": "Chlorination of water does not significantly reduce the dissolved oxygen content.",
                "sources": [
                  {
                    "id": "CAP4-06-00044",
                    "label": "pp. 24, 26; topic 6 point 42; topic 6 point 142"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00023",
                "label": "p. 24; topic 6 point 24"
              },
              {
                "id": "CAP4-06-00044",
                "label": "pp. 24, 26; topic 6 point 42; topic 6 point 142"
              }
            ]
          },
          {
            "id": "temporary-and-permanent-hardness",
            "title": "Hardness: what boiling removes and what needs softening",
            "html": "<p>Hardness is caused mainly by dissolved calcium and magnesium. When those ions are balanced by bicarbonate, as in calcium bicarbonate, the hardness is called <em>temporary</em> or carbonate hardness because boiling removes much of it: heating drives off CO<sub>2</sub> and calcium carbonate precipitates as scale.</p><p>Hardness associated with chloride and sulphate, as in calcium chloride, calcium sulphate or magnesium chloride, is <em>permanent</em> or non-carbonate hardness. The boiling reaction has no bicarbonate to act on, so this hardness stays in solution and requires non-carbonate softening, such as chemical precipitation or ion exchange.</p>",
            "formulas": [
              {
                "label": "Temporary hardness removed on boiling",
                "tex": "\\begin{aligned} &\\mathrm{Ca(HCO_3)_2} \\\\ &\\quad \\rightarrow \\mathrm{CaCO_3 + CO_2 + H_2O} \\end{aligned}"
              }
            ],
            "points": [
              {
                "html": "By boiling water, hardness can be removed if it is due to calcium bicarbonate.",
                "sources": [
                  {
                    "id": "CAP4-06-00019",
                    "label": "p. 24; topic 6 point 20"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00019",
                "label": "p. 24; topic 6 point 20"
              }
            ]
          },
          {
            "id": "aeration-oxygen-solubility-and-algae-control",
            "title": "Aeration and oxygen solubility; algae control with copper sulphate",
            "html": "<p><em>Aeration</em> transfers gases between air and water: it adds oxygen and strips unwanted gases such as excess carbon dioxide. The transfer rate is driven by the gap between the equilibrium <em>saturation concentration</em> and the concentration actually present, so the saturation value sets the ceiling that aeration can approach.</p><p>For oxygen in fresh water at unchanged partial pressure and salinity, saturation generally decreases as the water warms over an ordinary environmental range, so warm water holds less oxygen at equilibrium. A solubility curve must name the substance and the conditions, because temperature trends differ between solutes, and tank volume has no bearing on equilibrium solubility.</p><p><em>Copper sulphate</em> is a long-established reservoir algicide. Use requires site-specific authorisation and assessment, while catchment nutrient control and appropriate treatment remain important.</p>",
            "formulas": [
              {
                "label": "Henry's law equilibrium solubility",
                "tex": "C_s = k_H(T)\\; p_{\\text{gas}}",
                "where": "<p>For oxygen in fresh water the solubility coefficient \\(k_H\\) falls as temperature rises, so \\(C_s\\) decreases at fixed partial pressure.</p>"
              },
              {
                "label": "Gas-transfer rate",
                "tex": "\\dfrac{dC}{dt} = K_L a\\,(C_s - C)",
                "where": "<p>\\(K_L a\\) is the overall transfer coefficient and \\(C\\) the concentration present.</p>"
              }
            ],
            "moreHtml": "<p>For scale, air-saturated fresh water at sea-level pressure holds roughly 14.6 mg/L of oxygen near 0 °C, about 9.1 mg/L at 20 °C and about 7.6 mg/L at 30 °C. The same aeration effort therefore approaches a lower ceiling in warm water.</p>",
            "points": [
              {
                "html": "The solubility curve depends on the temperature.",
                "sources": [
                  {
                    "id": "CAP4-03-00130",
                    "label": "p. 14; topic 3 point 127"
                  }
                ]
              },
              {
                "html": "The chemical generally used for controlling algae is copper sulphate.",
                "sources": [
                  {
                    "id": "CAP4-06-00024",
                    "label": "p. 24; topic 6 point 26"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00130",
                "label": "p. 14; topic 3 point 127"
              },
              {
                "id": "CAP4-06-00024",
                "label": "p. 24; topic 6 point 26"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Surface overflow rate",
            "tex": "\\text{SOR} = \\dfrac{Q}{A}",
            "note": "1000 L/day/m² equals 1 m/day."
          },
          {
            "label": "Ideal discrete-settling capture",
            "tex": "\\eta = \\min\\left(\\dfrac{v_s}{Q/A},\\ 1\\right)"
          },
          {
            "label": "Plan area for an adopted rate",
            "tex": "A = \\dfrac{Q}{\\text{SOR}}"
          },
          {
            "label": "Nominal detention time",
            "tex": "t_d = \\dfrac{V}{Q}"
          },
          {
            "label": "Tracer index adopted here",
            "tex": "I = \\dfrac{t_{10}}{V/Q}"
          },
          {
            "label": "Open fraction of a bar screen",
            "tex": "\\phi = \\dfrac{s}{b + s}"
          },
          {
            "label": "Operating filter area",
            "tex": "A = \\dfrac{Q}{v_f}",
            "note": "1000 L/h/m² equals 1 m/h."
          },
          {
            "label": "Slow sand filter scrapings",
            "tex": "n = \\dfrac{d_0 - d_{\\min}}{\\Delta d}"
          },
          {
            "label": "Available chlorine in a batch",
            "tex": "m_{\\mathrm{Cl_2}} = m_{\\text{product}} \\times f_{\\text{avail}}"
          },
          {
            "label": "Fraction of free chlorine as HOCl",
            "tex": "\\alpha_{\\mathrm{HOCl}} = \\dfrac{1}{1 + 10^{\\,\\text{pH} - \\text{p}K_a}}"
          },
          {
            "label": "Temporary hardness on boiling",
            "tex": "\\begin{aligned} &\\mathrm{Ca(HCO_3)_2} \\\\ &\\quad \\rightarrow \\mathrm{CaCO_3 + CO_2 + H_2O} \\end{aligned}"
          },
          {
            "label": "Idealised aluminium recovery",
            "tex": "\\begin{aligned} &\\mathrm{2Al(OH)_3 + 3H_2SO_4} \\\\ &\\quad \\rightarrow \\mathrm{Al_2(SO_4)_3 + 6H_2O} \\end{aligned}"
          },
          {
            "label": "Henry's law",
            "tex": "C_s = k_H(T)\\; p_{\\text{gas}}"
          },
          {
            "label": "Gas-transfer rate",
            "tex": "\\dfrac{dC}{dt} = K_L a\\,(C_s - C)"
          }
        ],
        "cautions": [],
        "gaps": [
          "Flocculation design parameters such as velocity gradient, mixing time and flocculator dimensions are not given in these capsule points.",
          "No chlorine-demand, contact-time or breakpoint-chlorination calculations are supplied; only bleaching-powder composition, available chlorine and pH effects are covered.",
          "Iron and manganese removal and the treatment of colour, odour and taste are named in the syllabus but receive no capsule point here.",
          "Filter media grading, backwash rates and head-loss development are not covered.",
          "Softening is limited to the temporary-hardness boiling reaction; lime-soda or other chemical softening calculations are not provided."
        ]
      },
      "ACiE0604": {
        "code": "ACiE0604",
        "questionCount": 14,
        "format": 2,
        "summary": "<p>This subchapter covers how sewers are arranged, sized and built: water-carriage sewerage and what actually enters a sanitary sewer, the roles of laterals, mains and interceptors, partial-flow hydraulics of circular pipes, self-cleansing velocity and gradient, egg-shaped sections, inverted siphons and manholes. The capsule questions test the network terms, which hydraulic quantities keep growing with depth, depth and velocity checks, and what a cover's shape and specification do and do not guarantee.</p>",
        "blocks": [
          {
            "id": "water-carriage-and-sanitary-flow",
            "title": "Water-carriage sewerage and why sanitary sewers respond to rain",
            "html": "<p>In a <em>water-carriage system</em>, water flushes excreta out of fixtures and carries it through sewers to treatment. Replacing dry excreta collection with flush toilets therefore adds service needs: a dependable supply of flushing water, sewers with enough hydraulic capacity to convey the flow, and treatment sized for it.</p><p>Gravity sewers run as open channels rather than continuously pressurised pipes, and a storm-drain capacity figure is no substitute for a sanitary-flow estimate. Dilution does not remove pollutants either: the same pollutant load reaches treatment in a larger volume of water.</p><p><em>Sanitary sewage</em> is, by definition, wastewater generated by the premises served, conceptually separate from direct storm runoff. Real sanitary sewers still respond to rain through several routes:</p><ul><li><em>Infiltration</em>: groundwater entering through defective pipes and joints.</li><li><em>Inflow</em>: surface water entering through leaking manholes and covers.</li><li><em>Illicit connections</em>: roof and yard drains wrongly joined to the sanitary line.</li></ul><p>A sharp wet-weather peak in a nominally separate system therefore does not mean household generation has changed, and it does not show that the network was built as a combined sewer. It is evidence of rainfall-related entry to locate and control.</p>",
            "points": [
              {
                "html": "Compared with the conservancy system, the water carriage system needs more water.",
                "sources": [
                  {
                    "id": "CAP4-06-00020",
                    "label": "p. 24; topic 6 point 21"
                  }
                ]
              },
              {
                "html": "Sanitary sewage is independent of rainfall.",
                "sources": [
                  {
                    "id": "CAP4-06-00128",
                    "label": "p. 26; topic 6 point 129"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00020",
                "label": "p. 24; topic 6 point 21"
              },
              {
                "id": "CAP4-06-00128",
                "label": "p. 26; topic 6 point 129"
              }
            ]
          },
          {
            "id": "sewer-network-roles",
            "title": "Sewer network roles: house connections, laterals, mains, trunks and interceptors",
            "html": "<p>Sewers are named by their role in the network, which depends on the flows they receive and where they send them, not simply on their diameter. In the conventional hierarchy:</p><ul><li>a <em>house connection</em> carries wastewater from one premises to a street sewer;</li><li>a <em>lateral sewer</em> runs along a street and receives house connections;</li><li>a <em>main sewer</em> collects the flow of one or more laterals;</li><li>a <em>trunk sewer</em> receives mains and carries the flow on toward treatment;</li><li>an <em>outfall</em> conveys flow to its final point of discharge.</li></ul><p>Local naming varies, so identify each sewer from its connections rather than its size.</p><p>An <em>interceptor sewer</em> is defined by what it intercepts. Laid for example along a river bank, it collects the flow of several existing large sewers or outfalls that used to discharge directly and redirects the dry-weather wastewater toward treatment. It is usually large because of what it gathers, but size alone does not make a sewer an interceptor. Where combined sewers are intercepted, storm overflows and peak flows need their own design checks.</p>",
            "points": [
              {
                "html": "The sewer used to convey wastewater from one or more lateral sewers is the main sewer.",
                "sources": [
                  {
                    "id": "CAP4-06-00090",
                    "label": "p. 25; topic 6 point 90"
                  }
                ]
              },
              {
                "html": "The sewer that collects water from a number of other large sewers or outlets is called an intercepting sewer.",
                "sources": [
                  {
                    "id": "CAP4-06-00060",
                    "label": "p. 24; topic 6 point 59"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00090",
                "label": "p. 25; topic 6 point 90"
              },
              {
                "id": "CAP4-06-00060",
                "label": "p. 24; topic 6 point 59"
              }
            ]
          },
          {
            "id": "partial-flow-circular-sewers",
            "title": "Partial-flow hydraulics of circular sewers and design depth limits",
            "html": "<p>Circular sewers normally run partly full as open channels. As the depth \\(y\\) rises toward the crown, the wetted arc lengthens continuously, so the <em>wetted perimeter</em> increases monotonically all the way to full flow. The flow area also increases, but more and more slowly near the crown.</p><p>The hydraulic radius \\(R = A/P\\) therefore does not keep rising. Close to the crown each extra increment of depth adds little area while the wetted arc keeps growing, so \\(R\\) peaks before the pipe is full. Manning velocity and discharge depend on \\(A\\) and \\(R\\), so they too reach maxima below full depth.</p><p>All the ratios follow from the central angle \\(\\theta\\) of the wetted arc. With roughness and slope unchanged, Manning's equation turns the geometric ratios into velocity and discharge ratios.</p><p>Some texts size sewers so that maximum flow runs at a stated fraction of the diameter, leaving airspace below the crown. That reserve is geometric only: it does not guarantee ventilation or immunity from surcharge, and a depth fraction is not a discharge fraction.</p>",
            "formulas": [
              {
                "label": "Central angle of the wetted arc",
                "tex": "\\theta = 2\\cos^{-1}\\left(1 - \\dfrac{2y}{D}\\right)",
                "where": "<p>\\(\\theta\\) in radians, \\(y\\) the flow depth and \\(D\\) the internal diameter.</p>"
              },
              {
                "label": "Area ratio",
                "tex": "\\dfrac{A}{A_f} = \\dfrac{\\theta - \\sin\\theta}{2\\pi}"
              },
              {
                "label": "Wetted-perimeter ratio",
                "tex": "\\dfrac{P}{P_f} = \\dfrac{\\theta}{2\\pi}"
              },
              {
                "label": "Hydraulic-radius ratio",
                "tex": "\\dfrac{R}{R_f} = \\dfrac{A/A_f}{P/P_f}"
              },
              {
                "label": "Discharge ratio at the same n and S",
                "tex": "\\dfrac{Q}{Q_f} = \\dfrac{A}{A_f}\\left(\\dfrac{R}{R_f}\\right)^{2/3}",
                "where": "<p>The velocity ratio alone is \\((R/R_f)^{2/3}\\).</p>"
              }
            ],
            "example": {
              "title": "Worked examples at two-thirds depth",
              "html": "<p>A 0.60 m sewer limited to two-thirds depth carries water \\((2/3) \\times 0.60 = 0.40\\) m deep, leaving 0.60 − 0.40 = 0.20 m of air below the crown.</p><p>Discharge ratio at \\(y/D = 2/3\\), where \\(\\sin\\theta = -0.62854\\):</p>\\[\\begin{aligned}\\theta &amp;= 2\\cos^{-1}(-1/3) = 3.82127 \\\\ A/A_f &amp;= 4.44981/(2\\pi) = 0.70821 \\\\ P/P_f &amp;= 3.82127/(2\\pi) = 0.60817 \\\\ R/R_f &amp;= 0.70821/0.60817 = 1.1645 \\\\ V/V_f &amp;= 1.1645^{2/3} = 1.1069 \\\\ Q/Q_f &amp;= 0.70821 \\times 1.1069 = 0.784\\end{aligned}\\]<p>Two-thirds depth therefore carries about 78% of the full-pipe discharge, not 67%.</p>"
            },
            "moreHtml": "<p><em>Where the maxima fall:</em> with the roughness coefficient unchanged, the same equations place the maximum hydraulic radius and velocity near \\(y/D \\approx 0.813\\), where \\(V/V_f \\approx 1.14\\), and the maximum discharge near \\(y/D \\approx 0.938\\), where \\(Q/Q_f \\approx 1.076\\). A pipe running just below full therefore carries slightly more than one running exactly full, so full-flow capacity is a convenient reference rather than a true maximum.</p>",
            "points": [
              {
                "html": "If a circular sewer is partially full and the depth of flow is increased, the wetted perimeter increases.",
                "sources": [
                  {
                    "id": "CAP4-06-00053",
                    "label": "pp. 24, 26; topic 6 point 51; topic 6 point 141"
                  }
                ]
              },
              {
                "html": "A 0.6 m diameter sewer, designed to run two-thirds full at maximum flow, has a design depth of flow of 0.40 m.",
                "sources": [
                  {
                    "id": "CAP4-06-00123",
                    "label": "p. 26; topic 6 point 124"
                  }
                ]
              },
              {
                "html": "For sewer pipes of 0.4 m to 0.9 m diameter, the design at maximum flow assumes the sewer running two-thirds full.",
                "sources": [
                  {
                    "id": "CAP4-06-00122",
                    "label": "p. 26; topic 6 point 124"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00053",
                "label": "pp. 24, 26; topic 6 point 51; topic 6 point 141"
              },
              {
                "id": "CAP4-06-00123",
                "label": "p. 26; topic 6 point 124"
              },
              {
                "id": "CAP4-06-00122",
                "label": "p. 26; topic 6 point 124"
              }
            ]
          },
          {
            "id": "self-cleansing-velocity-and-gradient",
            "title": "Self-cleansing velocity checks and choosing the invert gradient",
            "html": "<p>Sewers must carry solids as well as water. A <em>self-cleansing velocity</em> criterion guards against deposition at the flow chosen for the check, and checking it is a continuity calculation: mean velocity is the discharge divided by the actual wetted area.</p><p>Whether a sewer really stays clean also depends on the sediment, the boundary shear stress and which design-flow condition is assessed.</p><p>Gradient selection balances several limits. Following generally falling ground reduces excavation and pumping, so natural slope strongly influences the alignment. The invert profile must still:</p><ul><li>provide hydraulic capacity for the design flow;</li><li>avoid deposition at low flow;</li><li>avoid excessive velocity and abrasion on steep reaches;</li><li>keep adequate cover and meet the outfall level.</li></ul><p>Where the ground falls faster than an acceptable sewer grade, drops or other structures may be needed.</p>",
            "formulas": [
              {
                "label": "Mean velocity from continuity",
                "tex": "V = \\dfrac{Q}{A}"
              },
              {
                "label": "Largest wetted area meeting a minimum velocity",
                "tex": "A \\le \\dfrac{Q}{V_{\\text{min}}}"
              }
            ],
            "example": {
              "title": "Worked example: checking an adopted 0.75 m/s criterion",
              "html": "<p>The discharge is 0.30 m³/s through a wetted area of 0.50 m², and the check adopts a minimum of 0.75 m/s.</p><ol><li>Mean velocity: \\(V = 0.30/0.50 = 0.60\\ \\text{m/s}\\).</li><li>0.60 m/s is below 0.75 m/s, so the sewer fails the adopted criterion at this flow.</li><li>At the same discharge the wetted area would have to be at most \\(0.30/0.75 = 0.40\\ \\text{m}^2\\), subject to hydraulic feasibility.</li></ol>"
            },
            "points": [
              {
                "html": "The velocity of flow of sewage in a combined sewer should not be less than 0.75 m/s.",
                "sources": [
                  {
                    "id": "CAP4-06-00056",
                    "label": "p. 24; topic 6 point 55"
                  }
                ]
              },
              {
                "html": "The slope of a sewer is given in the direction of the natural slope of the ground.",
                "sources": [
                  {
                    "id": "CAP4-06-00057",
                    "label": "p. 24; topic 6 point 56"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00056",
                "label": "p. 24; topic 6 point 55"
              },
              {
                "id": "CAP4-06-00057",
                "label": "p. 24; topic 6 point 56"
              }
            ]
          },
          {
            "id": "egg-shaped-sewers-and-inverted-siphons",
            "title": "Egg-shaped sections for combined sewers and inverted siphons under obstacles",
            "html": "<p>A combined sewer may carry a very small dry-weather flow and a much larger storm flow. An <em>egg-shaped sewer</em>, narrow at the invert and wider above, suits that range. The narrow lower part concentrates the low flow, giving more depth and better solids transport than a wide flat invert, while the larger upper part carries the storm flow.</p><p>That explains its traditional preference for combined systems. The shape does not keep wetted perimeter or hydraulic radius constant with depth, and it does not by itself guarantee self-cleansing or the lowest cost: slope, sediment, construction and maintenance still matter.</p><p>Where a gravity sewer has to pass beneath a river, railway or other obstruction and climb back to a downstream sewer, it crosses as a <em>depressed sewer</em>, traditionally called an <em>inverted siphon</em>. Its depressed barrels flow full, generally under pressure, driven by the upstream head, which must exceed the losses through the crossing.</p><p>Despite the name it is not a true siphon, which lifts water over a summit with the help of atmospheric pressure. Solids can settle in the low barrels, so cleaning access and performance at minimum flow are critical.</p>",
            "points": [
              {
                "html": "The egg-shaped sewer is best preferred for combined sewers.",
                "sources": [
                  {
                    "id": "CAP4-06-00119",
                    "label": "p. 26; topic 6 point 120"
                  }
                ]
              },
              {
                "html": "An inverted siphon, also called a depressed sewer, is provided when a sewer crosses a river.",
                "sources": [
                  {
                    "id": "CAP4-06-00054",
                    "label": "p. 24; topic 6 point 52; topic 6 point 54"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00119",
                "label": "p. 26; topic 6 point 120"
              },
              {
                "id": "CAP4-06-00054",
                "label": "p. 24; topic 6 point 52; topic 6 point 54"
              }
            ]
          },
          {
            "id": "manholes-depth-covers-and-shape",
            "title": "Manholes: depth classes, cover specification and why covers are round",
            "html": "<p>Manholes give access for inspection and cleaning. Textbooks classify them by depth; one conventional scheme calls chambers about 0.7–0.9 m deep <em>shallow</em>.</p><p>A depth class says nothing about cover strength, safe access or gas conditions. No manhole is safe to enter merely because it is shallow: toxic or oxygen-deficient air and other confined-space hazards must be assessed before anyone enters.</p><p>A cover must suit its location. <em>Cast iron</em> is a conventional material, but ductile iron, reinforced concrete and other approved systems also exist. For a trafficked road the essential facts are the verified <em>load class</em>, the dimensions and compatibility with the frame. The material name, casting mass, corrosion allowance or nominal diameter alone does not establish the load rating, secure seating or installation quality.</p><p>Covers are usually round for a geometric reason. A circle has the same diameter in every direction across its plane, so a rigid round cover made slightly larger than its round opening has no narrower width to line up with the hole and cannot fall through when turned. A square cover, by contrast, can drop edgewise through its own opening, because the opening's diagonal is longer than the cover's side. The benefit assumes intact, correctly matched parts.</p>",
            "points": [
              {
                "html": "A manhole is classified as shallow if its depth is between 0.7 and 0.9 m.",
                "sources": [
                  {
                    "id": "CAP4-06-00055",
                    "label": "p. 24; topic 6 point 53"
                  }
                ]
              },
              {
                "html": "The cover of a manhole is made of cast iron.",
                "sources": [
                  {
                    "id": "CAP4-06-00096",
                    "label": "p. 25; topic 6 point 97"
                  }
                ]
              },
              {
                "html": "Manhole covers are generally made circular to prevent the cover from falling into the manhole.",
                "sources": [
                  {
                    "id": "CAP4-06-00099",
                    "label": "p. 25; topic 6 point 100"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00055",
                "label": "p. 24; topic 6 point 53"
              },
              {
                "id": "CAP4-06-00096",
                "label": "p. 25; topic 6 point 97"
              },
              {
                "id": "CAP4-06-00099",
                "label": "p. 25; topic 6 point 100"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Mean velocity",
            "tex": "V = \\dfrac{Q}{A}",
            "note": "<p>A minimum velocity at discharge Q needs \\(A \\le Q/V_{\\text{min}}\\).</p>"
          },
          {
            "label": "Wetted-arc angle",
            "tex": "\\theta = 2\\cos^{-1}\\left(1 - \\dfrac{2y}{D}\\right)"
          },
          {
            "label": "Area ratio",
            "tex": "\\dfrac{A}{A_f} = \\dfrac{\\theta - \\sin\\theta}{2\\pi}"
          },
          {
            "label": "Wetted-perimeter ratio",
            "tex": "\\dfrac{P}{P_f} = \\dfrac{\\theta}{2\\pi}"
          },
          {
            "label": "Hydraulic-radius ratio",
            "tex": "\\dfrac{R}{R_f} = \\dfrac{A/A_f}{P/P_f}"
          },
          {
            "label": "Velocity ratio, same n and S",
            "tex": "\\dfrac{V}{V_f} = \\left(\\dfrac{R}{R_f}\\right)^{2/3}"
          },
          {
            "label": "Discharge ratio, same n and S",
            "tex": "\\dfrac{Q}{Q_f} = \\dfrac{A}{A_f}\\left(\\dfrac{R}{R_f}\\right)^{2/3}"
          },
          {
            "label": "Design depth and crown airspace",
            "tex": "y = fD, \\qquad a = D - y",
            "note": "<p>\\(f\\) is the adopted depth fraction and \\(a\\) the airspace below the crown.</p>"
          }
        ],
        "cautions": [],
        "gaps": [
          "No wastewater quantity estimates, peak factors or infiltration allowances are given, so design flows cannot be derived from these capsule points.",
          "Sewer materials, bedding, jointing and trench construction are not covered beyond manhole covers.",
          "Storm-sewer design and runoff estimation are absent from the capsule points for this topic.",
          "Manning roughness values and full-flow capacity calculations are not supplied; only dimensionless partial-flow ratios are derived.",
          "Appurtenances other than manholes and inverted siphons, such as drop manholes, flushing arrangements and sewer ventilation, are not described."
        ]
      },
      "ACiE0605": {
        "code": "ACiE0605",
        "questionCount": 39,
        "format": 2,
        "summary": "<p>This subchapter follows wastewater from its characteristics to treatment and disposal: sewage terms and pH, BOD/COD ratios and ammoniacal nitrogen, removal efficiency, grit chambers, trickling filters and activated sludge, stream self-purification and the Streeter–Phelps oxygen sag, sludge solids, dewatering and biogas, land treatment, septic tanks and latrines, and hazardous waste.</p>",
        "blocks": [
          {
            "id": "sewage-terms-and-fresh-sewage-ph",
            "title": "Sewage terms: sullage, night soil and the pH of fresh sewage",
            "html": "<p>Traditional sanitation vocabulary separates wastes by origin. <em>Sullage</em> is domestic wastewater from kitchens, washing places, bathing and washbasins, excluding toilet excreta. It still carries pathogens, grease and organic load, so it is not clean water. Some modern reuse rules leave kitchen water out of their definition of greywater, so check the terms of any regulation separately.</p><p><em>Night soil</em> is the traditional term for collected human excreta, especially from areas without water-carriage sewers. The name refers neither to soil nor to collection after dark, and it does not imply stabilisation: collection, treatment and disposal still need health and environmental safeguards.</p><p>Fresh domestic sewage is commonly described as slightly alkaline, and a reading of pH 7.4 at 25 °C fits that description. pH is not alkalinity, however. <em>Total alkalinity</em> is the acid-neutralising capacity, measured by titration and reported as a concentration, so a pH value gives no alkalinity in mg/L. Buffering does not make pH 7.4 equivalent to neutral, and because source water, buffering and decomposition all shift pH, one reading establishes neither freshness nor completed stabilisation.</p>",
            "points": [
              {
                "html": "Wastewater that comes from kitchens, washing places and wash basins is called sullage.",
                "sources": [
                  {
                    "id": "CAP4-06-00074",
                    "label": "p. 25; topic 6 point 73"
                  }
                ]
              },
              {
                "html": "The term night soil means human excreta.",
                "sources": [
                  {
                    "id": "CAP4-06-00102",
                    "label": "p. 26; topic 6 point 103"
                  }
                ]
              },
              {
                "html": "Fresh sewage is generally alkaline in nature.",
                "sources": [
                  {
                    "id": "CAP4-06-00062",
                    "label": "p. 25; topic 6 point 61; topic 6 point 71"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00074",
                "label": "p. 25; topic 6 point 73"
              },
              {
                "id": "CAP4-06-00102",
                "label": "p. 26; topic 6 point 103"
              },
              {
                "id": "CAP4-06-00062",
                "label": "p. 25; topic 6 point 61; topic 6 point 71"
              }
            ]
          },
          {
            "id": "bod-cod-ratios-and-ammoniacal-nitrogen",
            "title": "Organic strength indicators: BOD/COD ratios and ammoniacal nitrogen",
            "html": "<p><em>BOD<sub>5</sub></em> is the oxygen consumed by microorganisms degrading organic matter over five days; <em>COD</em> is the oxygen equivalent of the matter oxidised by a strong chemical oxidant. Their ratio indicates how much of the oxidisable load is readily biodegradable, and a substantial ratio, inside the 0.3–0.8 band for untreated domestic sewage, supports biological treatability.</p><p>The ratio is only an indicator. It does not prove that all material is biodegradable or that nothing inhibits biological treatment; test conditions and composition affect it, and it is not a discharge-compliance test. Ratios can also be inverted, and reciprocals of positive values reverse the endpoints of an interval. The COD/BOD ratio of domestic sewage is 1.25–2.5, which inverts to a BOD/COD band of 0.40–0.80.</p><p><em>Ammoniacal nitrogen</em> (NH<sub>3</sub> and NH<sub>4</sub><sup>+</sup>) forms when microorganisms decompose nitrogen-containing organic matter, a process called <em>ammonification</em>; industrial inputs and urea transformation can also contribute. Free ammonia therefore represents organic matter that is still being decomposed, so its presence indicates undecomposed organic matter in the wastewater. Nitrification later converts ammonium to nitrate, and the NH<sub>3</sub>/NH<sub>4</sub><sup>+</sup> split depends on pH and temperature.</p>",
            "formulas": [
              {
                "label": "Biodegradability indicator",
                "tex": "r = \\dfrac{\\mathrm{BOD_5}}{\\mathrm{COD}}"
              },
              {
                "label": "Reciprocal band for positive values",
                "tex": "\\dfrac{1}{b} \\le \\dfrac{\\mathrm{BOD_5}}{\\mathrm{COD}} \\le \\dfrac{1}{a}",
                "where": "<p>This holds when \\(a \\le \\mathrm{COD}/\\mathrm{BOD_5} \\le b\\).</p>"
              }
            ],
            "example": {
              "title": "Worked example: a ratio and a reciprocal band",
              "html": "<p>An untreated domestic sample with BOD<sub>5</sub> = 240 mg/L and COD = 400 mg/L gives</p>\\[r = \\dfrac{240}{400} = 0.60\\]<p>This lies inside the 0.3–0.8 band and suggests a substantial biodegradable fraction.</p><p>A COD/BOD<sub>5</sub> band of 1.25–2.50 inverts to \\(1/2.50 = 0.40\\) and \\(1/1.25 = 0.80\\), so BOD<sub>5</sub>/COD lies between 0.40 and 0.80.</p>"
            },
            "points": [
              {
                "html": "The value of the BOD/COD ratio of domestic wastewater before treatment is 0.3 to 0.8.",
                "sources": [
                  {
                    "id": "CAP4-06-00071",
                    "label": "p. 25; topic 6 point 69"
                  }
                ]
              },
              {
                "html": "The COD/BOD ratio of domestic sewage is 1.25–2.5.",
                "sources": [
                  {
                    "id": "CAP4-06-00088",
                    "label": "p. 25; topic 6 point 87"
                  }
                ]
              },
              {
                "html": "The presence of free ammonia in wastewater represents undecomposed organic matter.",
                "sources": [
                  {
                    "id": "CAP4-06-00093",
                    "label": "p. 25; topic 6 point 94"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00071",
                "label": "p. 25; topic 6 point 69"
              },
              {
                "id": "CAP4-06-00088",
                "label": "p. 25; topic 6 point 87"
              },
              {
                "id": "CAP4-06-00093",
                "label": "p. 25; topic 6 point 94"
              }
            ]
          },
          {
            "id": "removal-efficiency-and-stages-in-series",
            "title": "Removal efficiency and treatment stages in series",
            "html": "<p><em>Removal efficiency</em> compares what was removed with what entered. Written with concentrations it equals the load ratio only when influent and effluent flows are equal and nothing bypasses; if the flows differ, work with pollutant loads, concentration times flow. The effluent-to-influent ratio is the fraction remaining, not the fraction removed.</p><p>When stages operate in series, each efficiency applies to the load reaching <em>that</em> stage. The first stage passes a fraction \\(1 - E_1\\) of the load and the second passes \\(1 - E_2\\) of that remainder, so the fraction leaving both is their product and overall removal is its complement. Adding the stage percentages directly ignores their different incoming bases and can even exceed 100%.</p><p>The series expression is a mass-balance identity for any stages without bypass or added load.</p>",
            "formulas": [
              {
                "label": "Removal efficiency, equal flows",
                "tex": "E = \\dfrac{C_{\\text{in}} - C_{\\text{out}}}{C_{\\text{in}}}"
              },
              {
                "label": "Fraction remaining after two stages",
                "tex": "\\dfrac{C_{\\text{out}}}{C_{\\text{in}}} = (1 - E_1)(1 - E_2)"
              },
              {
                "label": "Overall removal of two stages",
                "tex": "E = E_1 + E_2(1 - E_1)"
              }
            ],
            "example": {
              "title": "Worked examples: one plant and two filter stages",
              "html": "<p>A plant lowers a pollutant from 500 mg/L to 10 mg/L at equal flows with no bypass:</p>\\[E = \\dfrac{500 - 10}{500} = \\dfrac{490}{500} = 0.98\\]<p>Removal is 98%; the ratio 10/500 = 2% is what remains.</p><p>Two trickling-filter stages remove 60% and then 50% of their own inlet loads. Stage one leaves 40% of the original load and stage two removes half of that, another 20%:</p>\\[E = 0.60 + 0.50(1 - 0.60) = 0.80\\]<p>Overall removal is 80%, not 110%.</p>"
            },
            "points": [
              {
                "html": "If the BOD of sewage is 500 mg/L and that of the effluent from the treatment plant is 10 mg/L, the efficiency of the treatment plant is 98%.",
                "sources": [
                  {
                    "id": "CAP4-06-00130",
                    "label": "p. 26; topic 6 point 133"
                  }
                ]
              },
              {
                "html": "Two trickling-filter stages removing 60% and then 50% of their own inlet loads give an overall removal of 80%, not the sum of the percentages.",
                "sources": [
                  {
                    "id": "CAP4-06-00042",
                    "label": "p. 24; topic 6 point 41"
                  }
                ]
              },
              {
                "html": "The overall efficiency of a two-stage high rate trickling filter with stage efficiencies \\(E_1\\) and \\(E_2\\) is \\(E_1 + E_2(1 - E_1)\\).",
                "sources": [
                  {
                    "id": "CAP4-06-00043",
                    "label": "p. 24; topic 6 point 41"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00130",
                "label": "p. 26; topic 6 point 133"
              },
              {
                "id": "CAP4-06-00042",
                "label": "p. 24; topic 6 point 41"
              },
              {
                "id": "CAP4-06-00043",
                "label": "p. 24; topic 6 point 41"
              }
            ]
          },
          {
            "id": "grit-chambers-settling-path-density-and-size",
            "title": "Grit chambers: settling path, grit density and target particle size",
            "html": "<p>A grit chamber slows the flow enough for dense mineral particles to settle while lighter organic matter stays in suspension. Two velocities must be kept apart: the <em>horizontal flow velocity</em> carries a particle along the chamber, and its <em>settling velocity</em> carries it down. In an ideal chamber the settling time is the starting height divided by the settling velocity, and the particle drifts forward at the flow velocity for that whole time.</p><p>In a grit chamber, the flow velocity is kept at about 0.3 m/s so that the grit particles settle down.</p><p>Idealised grit is modelled as quartz-like with specific gravity 2.65. The particle density is the specific gravity times the density of water, and the density excess over water is what drives settling; do not confuse that excess with the particle density itself.</p><p>The minimum size of grit particles that can be removed in a grit chamber is 0.20 mm.</p>",
            "formulas": [
              {
                "label": "Settling time from height h",
                "tex": "t = \\dfrac{h}{v_s}"
              },
              {
                "label": "Horizontal travel while settling",
                "tex": "L = v_h\\, t"
              },
              {
                "label": "Particle density from specific gravity",
                "tex": "\\rho_p = G\\,\\rho_w",
                "where": "<p>\\(G\\) is the specific gravity; the density excess is \\(\\rho_p - \\rho_w\\).</p>"
              }
            ],
            "example": {
              "title": "Worked examples: path length and grit density",
              "html": "<p>A particle starts 1.0 m above the floor, settles at 0.020 m/s and moves with a horizontal velocity of 0.30 m/s:</p>\\[\\begin{aligned}t &amp;= 1.0/0.020 = 50\\ \\text{s} \\\\ L &amp;= 0.30 \\times 50 = 15\\ \\text{m}\\end{aligned}\\]<p>The chamber must be at least 15 m long for this particle. For quartz-like grit of specific gravity 2.65:</p>\\[\\rho_p = 2.65 \\times 1000 = 2650\\ \\text{kg/m}^3\\]<p>The density excess is 2650 − 1000 = 1650 kg/m³.</p>"
            },
            "moreHtml": "<p><em>Real grit and real chambers:</em> practical design adds allowances for turbulence, flow variation and the required capture, and real grit mixes mineral particles of varying density with associated organics, so not every particle has exactly the idealised density. A design should state the removal efficiency expected for a named particle class at the governing flow.</p>",
            "points": [
              {
                "html": "In a grit chamber, the flow velocity at which the grit particles settle down is kept at about 0.3 m/s.",
                "sources": [
                  {
                    "id": "CAP4-06-00041",
                    "label": "p. 24; topic 6 point 40"
                  }
                ]
              },
              {
                "html": "Grit is inert matter with a specific gravity of about 2.65.",
                "sources": [
                  {
                    "id": "CAP4-06-00073",
                    "label": "p. 25; topic 6 point 72"
                  }
                ]
              },
              {
                "html": "The minimum size of grit particles that can be removed in a grit chamber is 0.20 mm.",
                "sources": [
                  {
                    "id": "CAP4-06-00076",
                    "label": "p. 25; topic 6 point 75"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00041",
                "label": "p. 24; topic 6 point 40"
              },
              {
                "id": "CAP4-06-00073",
                "label": "p. 25; topic 6 point 72"
              },
              {
                "id": "CAP4-06-00076",
                "label": "p. 25; topic 6 point 75"
              }
            ]
          },
          {
            "id": "trickling-filter-media-and-hydraulic-loading",
            "title": "Trickling filters: media and hydraulic loading with recirculation",
            "html": "<p>A <em>trickling filter</em> is an attached-growth reactor: wastewater trickles over media that carry a biofilm while air moves through the voids. The medium must keep its strength, void space and drainage for years. Durable graded stone and engineered structured or random plastic packing meet those needs. Loose untreated paper does not: it softens, degrades and collapses, blocking air and water. Despite its name, a trickling filter is not a straining filter.</p><p><em>Hydraulic loading</em> is applied flow per unit plan area, so it has units of depth per day. Since 1 ML is 1,000 m³ and 1 ha is 10,000 m², a loading of 1 ML/ha/day equals 0.1 m/day. Converting a historical band this way does not make it a universal limit for every stone or plastic medium or recirculation convention.</p><p>Always state whether a loading includes recirculation. If it does, the plan area is the total applied flow, wastewater plus recycle, divided by the loading. Leaving out the recycle would understate the area on that basis, and organic loading still needs a separate check.</p>",
            "formulas": [
              {
                "label": "Loading unit conversion",
                "tex": "1\\ \\text{ML/ha/day} = 0.1\\ \\text{m/day}"
              },
              {
                "label": "Plan area when the loading includes recycle",
                "tex": "A = \\dfrac{Q + Q_R}{q_L}",
                "where": "<p>\\(Q\\) is the wastewater flow, \\(Q_R\\) the recirculated flow and \\(q_L\\) the hydraulic loading.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: converting a band and sizing a filter",
              "html": "<p>Conversion: 1 ML/ha/day = 1,000/10,000 = 0.1 m/day, so a band of 110–330 ML/ha/day becomes 11–33 m/day.</p><p>Area: 1,200 m³/day of wastewater plus 1,000 m³/day of recirculation at an adopted 22 m/day, recycle included:</p>\\[A = \\dfrac{1200 + 1000}{22} = \\dfrac{2200}{22} = 100\\ \\text{m}^2\\]"
            },
            "points": [
              {
                "html": "Paper is not used as a medium for trickling filters.",
                "sources": [
                  {
                    "id": "CAP4-06-00046",
                    "label": "p. 24; topic 6 point 45"
                  }
                ]
              },
              {
                "html": "The hydraulic loading for a high rate trickling filter varies between 110 and 330 ML per hectare per day.",
                "sources": [
                  {
                    "id": "CAP4-06-00048",
                    "label": "p. 24; topic 6 point 47"
                  }
                ]
              },
              {
                "html": "A hydraulic loading of 110 to 330 ML per hectare per day for a high rate trickling filter is equal to 11 to 33 m/day.",
                "sources": [
                  {
                    "id": "CAP4-06-00049",
                    "label": "p. 24; topic 6 point 47"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00046",
                "label": "p. 24; topic 6 point 45"
              },
              {
                "id": "CAP4-06-00048",
                "label": "p. 24; topic 6 point 47"
              },
              {
                "id": "CAP4-06-00049",
                "label": "p. 24; topic 6 point 47"
              }
            ]
          },
          {
            "id": "attached-and-suspended-growth",
            "title": "Attached versus suspended growth: activated sludge and high-rate filter effluent",
            "html": "<p>Biological processes are classified by how the biomass is held. In a trickling filter the organisms grow attached to media. In the <em>activated sludge process</em> they are kept in suspension as flocs by mixing and aeration; the mixed liquor then passes to a secondary clarifier, and a controlled portion of the settled biomass is returned to the aeration tank.</p><p>Aerobic conditions, suspended biomass and sludge return together identify conventional activated sludge as <em>aerobic suspended growth</em>. Advanced variants may add anoxic or anaerobic zones, but the conventional aeration stage is aerobic. A septic tank, by contrast, is mainly anaerobic settling and digestion, and chemical precipitation involves no biomass recycle.</p><p>High-rate trickling filters are loaded mainly for carbonaceous removal. Depending on loading, temperature, oxygen supply and media, they can remove much of the BOD without completely nitrifying, so appreciable ammonia may remain. A brownish colour neither proves nor disproves nitrification, and remaining ammonia does not show that the biofilm is wholly anaerobic.</p><p>Sloughed biofilm normally needs secondary clarification, and BOD, solids, ammonia and any other required endpoints should be measured directly rather than judged by appearance.</p>",
            "points": [
              {
                "html": "The activated sludge process is an example of an aerobic suspended growth process.",
                "sources": [
                  {
                    "id": "CAP4-06-00097",
                    "label": "p. 25; topic 6 point 98"
                  }
                ]
              },
              {
                "html": "The effluent from a high rate trickling filter is brown and not fully oxidised.",
                "sources": [
                  {
                    "id": "CAP4-06-00113",
                    "label": "p. 26; topic 6 point 113; topic 6 point 131"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00097",
                "label": "p. 25; topic 6 point 98"
              },
              {
                "id": "CAP4-06-00113",
                "label": "p. 26; topic 6 point 113; topic 6 point 131"
              }
            ]
          },
          {
            "id": "stream-self-purification-zones-and-do",
            "title": "Stream self-purification: pollution zones, dissolved-oxygen needs and biota",
            "html": "<p>A stream receiving a large biodegradable discharge shows a conventional textbook sequence of zones downstream of the outfall: degradation, <em>active decomposition</em>, recovery and finally clean water. In the active decomposition zone, oxygen-demanding decay can exhaust the dissolved oxygen and anaerobic decomposition takes over.</p><p>DO criteria are biological. The minimum amount of dissolved oxygen required for the survival of aquatic animals is 4 mg/L. A daytime reading also says little about the predawn minimum, and temperature, exposure duration and other stressors need assessment.</p><p>The <em>self-purification</em> of a stream does not depend on aquatic species; it proceeds through dilution, sedimentation, reaeration and the oxidation of organic matter.</p>",
            "points": [
              {
                "html": "If the DO concentration falls to zero in a natural stream, it indicates the zone of active decomposition.",
                "sources": [
                  {
                    "id": "CAP4-06-00063",
                    "label": "p. 25; topic 6 point 62"
                  }
                ]
              },
              {
                "html": "The minimum amount of DO required for the survival of aquatic animals is 4 mg/L.",
                "sources": [
                  {
                    "id": "CAP4-06-00066",
                    "label": "p. 25; topic 6 point 65"
                  }
                ]
              },
              {
                "html": "The self-purification process of a stream does not depend on aquatic species.",
                "sources": [
                  {
                    "id": "CAP4-06-00117",
                    "label": "p. 26; topic 6 point 118"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00063",
                "label": "p. 25; topic 6 point 62"
              },
              {
                "id": "CAP4-06-00066",
                "label": "p. 25; topic 6 point 65"
              },
              {
                "id": "CAP4-06-00117",
                "label": "p. 26; topic 6 point 118"
              }
            ]
          },
          {
            "id": "streeter-phelps-oxygen-sag",
            "title": "The Streeter–Phelps oxygen-sag model and the deficit rate",
            "html": "<p>The <em>Streeter–Phelps model</em> predicts the oxygen-sag curve downstream of a biodegradable discharge by combining two first-order processes. <em>Deoxygenation</em> consumes oxygen at a rate proportional to the remaining biochemical oxygen demand \\(L\\), while <em>reaeration</em> from the atmosphere restores it at a rate proportional to the deficit \\(D\\) below saturation.</p><p>While deoxygenation outpaces reaeration the deficit grows and DO keeps falling, assuming constant saturation. Downstream, \\(L\\) decays and \\(D\\) grows until the two rates balance: that point, the <em>critical deficit</em>, is the bottom of the sag. Beyond it reaeration dominates and DO recovers.</p><p>The coefficient base matters. Base-10 coefficients are smaller than natural-base ones by the factor \\(\\ln 10 \\approx 2.303\\), so they cannot be inserted unchanged into the natural-base equation. The basic model assumes specified rates and flow conditions; sediment oxygen demand, photosynthesis and nitrification need extra terms where important. It is a river-oxygen model, unrelated to surface-overflow settling, Hardy Cross network balancing or Manning uniform flow.</p>",
            "formulas": [
              {
                "label": "Deficit rate, natural-base coefficients",
                "tex": "\\dfrac{dD}{dt} = K_d L - K_r D",
                "where": "<p>\\(K_d\\) is the deoxygenation and \\(K_r\\) the reaeration coefficient, per day.</p>"
              },
              {
                "label": "Critical deficit condition",
                "tex": "K_d L_c = K_r D_c"
              },
              {
                "label": "Natural-base from base-10 coefficient",
                "tex": "K_e = 2.303\\, K_{10}"
              }
            ],
            "example": {
              "title": "Worked example: is the deficit still growing?",
              "html": "<p>At one section \\(L = 10\\) mg/L and \\(D = 2\\) mg/L, with \\(K_d = 0.20\\)/day and \\(K_r = 0.40\\)/day:</p>\\[\\begin{aligned}\\dfrac{dD}{dt} &amp;= 0.20 \\times 10 - 0.40 \\times 2 \\\\ &amp;= 2.0 - 0.8 = +1.2\\ \\text{mg/L/day}\\end{aligned}\\]<p>The deficit is still growing, so DO is falling and the section lies upstream of the critical point.</p>"
            },
            "points": [
              {
                "html": "The oxygen sag curve was developed by the Streeter–Phelps method.",
                "sources": [
                  {
                    "id": "CAP4-06-00068",
                    "label": "p. 25; topic 6 point 67"
                  }
                ]
              },
              {
                "html": "In the Streeter–Phelps oxygen sag curve, the dissolved oxygen deficit results from deoxygenation by BOD and reaeration from the atmosphere.",
                "sources": [
                  {
                    "id": "CAP4-06-00069",
                    "label": "p. 25; topic 6 point 67"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00068",
                "label": "p. 25; topic 6 point 67"
              },
              {
                "id": "CAP4-06-00069",
                "label": "p. 25; topic 6 point 67"
              }
            ]
          },
          {
            "id": "sludge-solids-and-dewatering-mass-balance",
            "title": "Sludge solids: fixed and volatile residue and the dewatering mass balance",
            "html": "<p>Dried sludge residue is split by ignition into a <em>fixed</em> fraction, which remains, and a <em>volatile</em> fraction, which is lost. EPA Method 160.4 (1971) supports ignition around 550 °C but warns that mineral changes complicate equating fixed residue with inorganic matter and volatile residue with organic matter. Follow the chosen analytical method and its endpoint rather than a remembered time and temperature.</p><p>Dewatering calculations conserve the <em>dry solids</em>. As the water fraction falls, the same solids make up a larger share of a smaller wet mass, so a small change in moisture percentage near 95% produces a large change in mass.</p><p>Turning the mass change into a volume change needs a density assumption.</p>",
            "formulas": [
              {
                "label": "Fixed fraction",
                "tex": "f_{\\text{fixed}} = \\dfrac{m_{\\text{ignited}}}{m_{\\text{dry}}}"
              },
              {
                "label": "Volatile fraction",
                "tex": "f_{\\text{vol}} = 1 - f_{\\text{fixed}}"
              },
              {
                "label": "Wet mass after dewatering",
                "tex": "M_2 = M_1\\,\\dfrac{1 - w_1}{1 - w_2}",
                "where": "<p>\\(w\\) is the water fraction by mass; the dry solids \\(M(1 - w)\\) stay constant.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: ignition residue and dewatered mass",
              "html": "<p>Ignition: 1.00 g of dry residue leaves 0.35 g, so the fixed fraction is 0.35/1.00 = 35% and the volatile fraction is (1.00 − 0.35)/1.00 = 65%.</p><p>Dewatering 1,000 kg of sludge from 95% to 90% water:</p>\\[\\begin{aligned}\\text{solids} &amp;= 1000 \\times 0.05 = 50\\ \\text{kg} \\\\ M_2 &amp;= 50/0.10 = 500\\ \\text{kg}\\end{aligned}\\]<p>So 500 kg of water is removed. If bulk density is assumed unchanged, the volume also falls by 50%.</p>"
            },
            "points": [
              {
                "html": "In finding the fixed inorganic solids in a sludge sample, the sample is ignited at \\(550 \\pm 50\\)°C for 15 minutes.",
                "sources": [
                  {
                    "id": "CAP4-06-00058",
                    "label": "p. 24; topic 6 point 57"
                  }
                ]
              },
              {
                "html": "When the moisture content of sludge is reduced from 95% to 90%, its volume is reduced by 50%.",
                "sources": [
                  {
                    "id": "CAP4-06-00127",
                    "label": "p. 26; topic 6 point 128"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00058",
                "label": "p. 24; topic 6 point 57"
              },
              {
                "id": "CAP4-06-00127",
                "label": "p. 26; topic 6 point 128"
              }
            ]
          },
          {
            "id": "vacuum-filtration-dewatering-and-fines",
            "title": "Vacuum filtration: sludge dewatering and the difficulty with fines",
            "html": "<p>A <em>rotary vacuum filter</em> dewaters sludge. A slowly turning drum covered with a porous cloth dips into the sludge; vacuum inside the drum draws liquid through the medium as filtrate, and the retained solids build up as a cake that is then removed. Lowering the water carried with the solids reduces the volume to be handled.</p><p>The filter only separates water from solids. It does not digest or incinerate sludge, it does not guarantee pathogen destruction, and dissolved salts pass straight through with the filtrate.</p><p>Useful throughput needs a permeable medium and a permeable cake. Very fine particles can pack into a cake of low permeability and blind the cloth, so they may need chemical conditioning or filter aids. Even so, a vacuum filter is the most suitable method for the removal of fines from a liquid.</p>",
            "points": [
              {
                "html": "Vacuum filters are used in sludge treatment for dewatering.",
                "sources": [
                  {
                    "id": "CAP4-06-00045",
                    "label": "pp. 24, 26; topic 6 point 43; topic 6 point 122"
                  }
                ]
              },
              {
                "html": "A vacuum filter is most suitable for the removal of fines from a liquid.",
                "sources": [
                  {
                    "id": "CAP4-06-00037",
                    "label": "p. 24; topic 6 point 37"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00045",
                "label": "pp. 24, 26; topic 6 point 43; topic 6 point 122"
              },
              {
                "id": "CAP4-06-00037",
                "label": "p. 24; topic 6 point 37"
              }
            ]
          },
          {
            "id": "biogas-composition-and-upgrading",
            "title": "Anaerobic digestion gas: raw biogas composition and upgrading to biomethane",
            "html": "<p><em>Anaerobic digestion</em> of sludge and other organic waste produces a gas that is mainly methane mixed with a substantial fraction of carbon dioxide. Untreated gas of roughly 65% CH<sub>4</sub> and 35% CO<sub>2</sub> by volume is <em>raw biogas</em>. It has a sizeable noncombustible fraction, so it is not pure methane. Biomethane, as the term is used here for digester gas, contains 32 to 43% carbon dioxide, the rest being mainly methane.</p><p><em>Upgrading</em> removes much of the CO<sub>2</sub> and other specified impurities to give a methane-rich upgraded gas. Comparing equal volumes of gas at the same reference conditions, removing the non-methane components raises methane's share and generally the heating value per unit volume.</p><p>Adding carbon dioxide, diluting with air or adding water vapour would lower the methane fraction, and raising the pressure does not change the composition. Whether a product suits a particular gas grid or other use depends on use-specific quality requirements, not on composition alone.</p>",
            "points": [
              {
                "html": "In biomethane, the percentage of carbon dioxide is 32 to 43%.",
                "sources": [
                  {
                    "id": "CAP4-10-00186",
                    "label": "p. 42; rural point 11"
                  }
                ]
              },
              {
                "html": "Apart from carbon dioxide (32 to 43%), the main constituent of biomethane is methane.",
                "sources": [
                  {
                    "id": "CAP4-10-00187",
                    "label": "p. 42; rural point 11"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00186",
                "label": "p. 42; rural point 11"
              },
              {
                "id": "CAP4-10-00187",
                "label": "p. 42; rural point 11"
              }
            ]
          },
          {
            "id": "land-treatment-and-sewage-sickness",
            "title": "Land treatment and the mechanism of sewage sickness",
            "html": "<p>Land treatment applies sewage to soil and relies on soil processes and crops to remove pollutants. It works only while the soil stays permeable and aerated.</p><p>Continuous or excessive application, especially of poorly treated sewage, deposits suspended solids and stimulates biological growth in the pores. Infiltration falls, water ponds on the surface, oxygen transfer into the soil declines and the soil turns oxygen-deficient. This progressive clogging under overloading is called <em>sewage sickness</em>. It is a failure of the land-treatment system, not a human infectious disease, and not a drying, cracking or clear-water erosion effect.</p><p>Prevention and recovery follow from the mechanism:</p><ul><li>pretreatment to reduce the solids applied;</li><li>control of the hydraulic and organic loading;</li><li>intermittent application, with resting or rotation between plots;</li><li>adequate drainage.</li></ul><p>Increasing the loading or keeping deeper continuous ponding worsens the condition, and crop nutrient deficiency is not its cause.</p>",
            "points": [
              {
                "html": "Sewage sickness develops due to continuous application of sewage on land.",
                "sources": [
                  {
                    "id": "CAP4-06-00129",
                    "label": "p. 26; topic 6 point 130; topic 6 point 134"
                  }
                ]
              },
              {
                "html": "Sewage sickness occurs when the voids of the soil get clogged due to continuous application of sewage on the land.",
                "sources": [
                  {
                    "id": "CAP4-07-00108",
                    "label": "p. 29; topic 7 point 110"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00129",
                "label": "p. 26; topic 6 point 130; topic 6 point 134"
              },
              {
                "id": "CAP4-07-00108",
                "label": "p. 29; topic 7 point 110"
              }
            ]
          },
          {
            "id": "septic-tank-detention-and-useful-volume",
            "title": "Septic tanks: liquid detention, useful volume and a conflicting 30-minute value",
            "html": "<p>A <em>septic tank</em> settles solids from wastewater, stores sludge and scum and allows mainly anaerobic digestion before the effluent goes on for further treatment or disposal. Sizing keeps its components separate. The <em>useful liquid volume</em> provides detention for settling and equals the daily flow times the detention time; sludge and scum storage and freeboard are added to it.</p><p>The detention time for a septic tank is 24 hours.</p><p>The detention period in a septic tank is also assumed as 30 minutes.</p>",
            "formulas": [
              {
                "label": "Useful liquid volume",
                "tex": "V = Q\\,t"
              }
            ],
            "example": {
              "title": "Worked example: 24 hours of detention at 1.2 m³ per day",
              "html": "<p>With an explicit 24-hour requirement and a daily flow of 1.2 m³:</p>\\[V = 1.2\\ \\text{m}^3/\\text{day} \\times 1\\ \\text{day} = 1.2\\ \\text{m}^3\\]<p>Sludge and scum storage and freeboard are then added to this useful liquid volume.</p>"
            },
            "points": [
              {
                "html": "The detention time for a septic tank is 24 hours.",
                "sources": [
                  {
                    "id": "CAP4-06-00059",
                    "label": "p. 24; topic 6 point 58"
                  }
                ]
              },
              {
                "html": "The detention period in a septic tank is assumed as 30 minutes.",
                "sources": [
                  {
                    "id": "CAP4-06-00065",
                    "label": "p. 25; topic 6 point 64"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00059",
                "label": "p. 24; topic 6 point 58"
              },
              {
                "id": "CAP4-06-00065",
                "label": "p. 25; topic 6 point 64"
              }
            ]
          },
          {
            "id": "septic-depth-floor-falls-and-vip-vents",
            "title": "Septic-tank depth and floor falls, and ventilated pit latrine vents",
            "html": "<p>Septic-tank height combines parts with different jobs. The operating liquid depth provides the working volume, while freeboard above it provides none, so the internal height to the underside of the roof is their sum. Sludge storage, compartment geometry and structural details need their own checks. The minimum depth of a septic tank as per design considerations is 1.2 m.</p><p>Floor details serve desludging. A floor sloped toward an inlet-end collection point directs settled solids toward where they are removed, but it does not make sewage flow backward: inlet and outlet levels and tank hydraulics govern the liquid flow. A fall stated as 1 in \\(n\\) drops one unit for every \\(n\\) horizontal.</p><p>A <em>ventilated improved pit (VIP) latrine</em> controls odour and flies through airflow: air moves from the user space down through the pit and out through a vent pipe fitted with a fly screen.</p>",
            "formulas": [
              {
                "label": "Internal height to the roof underside",
                "tex": "H = d + f",
                "where": "<p>\\(d\\) is the operating liquid depth and \\(f\\) the freeboard.</p>"
              },
              {
                "label": "Fall for a gradient of 1 in n",
                "tex": "\\Delta z = \\dfrac{L}{n}"
              }
            ],
            "example": {
              "title": "Worked examples: tank height and floor fall",
              "html": "<p>Height: with 1.20 m operating liquid depth and 0.30 m freeboard, \\(H = 1.20 + 0.30 = 1.50\\) m, ignoring roof and floor thicknesses.</p><p>Fall: a 1 in 10 gradient across a 2.0 m run toward the marked collection point gives \\(\\Delta z = 2.0/10 = 0.20\\) m, a 10% gradient.</p>"
            },
            "moreHtml": "<p><em>Checking a VIP vent:</em> vent diameter, height, wind exposure, siting and screen resistance all affect the airflow. The vent pipe used in a VIP latrine has a diameter of 50 mm. A denser screen adds resistance, and a vent cut below roof level loses exposure to wind.</p>",
            "points": [
              {
                "html": "The minimum depth of a septic tank as per design considerations is 1.2 m.",
                "sources": [
                  {
                    "id": "CAP4-06-00067",
                    "label": "p. 25; topic 6 point 66"
                  }
                ]
              },
              {
                "html": "In a septic tank, the floor slope is given towards the inlet side.",
                "sources": [
                  {
                    "id": "CAP4-10-00198",
                    "label": "p. 42; rural point 21"
                  }
                ]
              },
              {
                "html": "The bottom of the sewage inlet chamber of a septic tank is laid with an outward slope of 1 in 10.",
                "sources": [
                  {
                    "id": "CAP4-10-00199",
                    "label": "p. 42; rural point 22"
                  }
                ]
              },
              {
                "html": "The diameter of the vent pipe used in a VIP latrine is 50 mm.",
                "sources": [
                  {
                    "id": "CAP4-06-00107",
                    "label": "p. 26; topic 6 point 107"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00067",
                "label": "p. 25; topic 6 point 66"
              },
              {
                "id": "CAP4-10-00198",
                "label": "p. 42; rural point 21"
              },
              {
                "id": "CAP4-10-00199",
                "label": "p. 42; rural point 22"
              },
              {
                "id": "CAP4-06-00107",
                "label": "p. 26; topic 6 point 107"
              }
            ]
          },
          {
            "id": "hazardous-and-industrial-wastes",
            "title": "Hazardous and industrial wastes: hazard criteria, segregation and steel dust",
            "html": "<p>Whether a waste is <em>hazardous</em> depends on hazard criteria such as ignitability, corrosivity, reactivity and toxicity, together with any applicable legal listings. <em>Biodegradability</em> describes whether a waste can be transformed, not whether it is safe: a readily biodegradable waste that is acutely toxic and highly flammable can cause harm before or during degradation. The governing legal classification must be applied.</p><p>Hazardous waste must not go directly to an ordinary dump. When hazardous industrial residue turns up mixed with refuse, the direction is to <em>characterise</em> it, <em>segregate</em> it compatibly and send it for authorised treatment and controlled disposal. Classifying the mixture by its larger nonhazardous fraction, or choosing a route from organic content or reduced volume alone, ignores the actual hazards; dumping, dilution or uncontrolled burning can move contaminants into air, soil and water.</p><p>Waste descriptions have two dimensions, composition and physical form. Dry dust captured from steel-making exhaust is predominantly inorganic, rich in metals and metal oxides, and it is particulate. It is not inherently aqueous: wet scrubbing can turn it into a slurry, but dry collection does not. Inorganic does not mean harmless, so composition and leachability still need hazard assessment.</p>",
            "points": [
              {
                "html": "Degradability is not a characteristic of hazardous waste.",
                "sources": [
                  {
                    "id": "CAP4-06-00075",
                    "label": "p. 25; topic 6 point 74"
                  }
                ]
              },
              {
                "html": "Hazardous waste should not be disposed of directly at dumping sites.",
                "sources": [
                  {
                    "id": "CAP4-06-00106",
                    "label": "p. 26; topic 6 point 106"
                  }
                ]
              },
              {
                "html": "Dust from steel manufacturing is an example of inorganic aqueous waste.",
                "sources": [
                  {
                    "id": "CAP4-06-00125",
                    "label": "p. 26; topic 6 point 126; topic 6 point 132"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00075",
                "label": "p. 25; topic 6 point 74"
              },
              {
                "id": "CAP4-06-00106",
                "label": "p. 26; topic 6 point 106"
              },
              {
                "id": "CAP4-06-00125",
                "label": "p. 26; topic 6 point 126; topic 6 point 132"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Removal efficiency, equal flows",
            "tex": "E = \\dfrac{C_{\\text{in}} - C_{\\text{out}}}{C_{\\text{in}}}",
            "note": "<p>With unequal flows, use pollutant loads instead of concentrations.</p>"
          },
          {
            "label": "Fraction remaining after two stages",
            "tex": "(1 - E_1)(1 - E_2)"
          },
          {
            "label": "Overall removal of two stages",
            "tex": "E = E_1 + E_2(1 - E_1)"
          },
          {
            "label": "Grit settling time",
            "tex": "t = \\dfrac{h}{v_s}"
          },
          {
            "label": "Horizontal travel while settling",
            "tex": "L = v_h\\, t"
          },
          {
            "label": "Particle density",
            "tex": "\\rho_p = G\\,\\rho_w"
          },
          {
            "label": "Hydraulic loading conversion",
            "tex": "1\\ \\text{ML/ha/day} = 0.1\\ \\text{m/day}"
          },
          {
            "label": "Filter area with recycle",
            "tex": "A = \\dfrac{Q + Q_R}{q_L}",
            "note": "<p>Only when the adopted loading includes recirculation.</p>"
          },
          {
            "label": "Biodegradability indicator",
            "tex": "r = \\dfrac{\\mathrm{BOD_5}}{\\mathrm{COD}}"
          },
          {
            "label": "Streeter–Phelps deficit rate",
            "tex": "\\dfrac{dD}{dt} = K_d L - K_r D",
            "note": "<p>Natural-base coefficients; the critical deficit is where the two terms balance.</p>"
          },
          {
            "label": "Coefficient base conversion",
            "tex": "K_e = 2.303\\, K_{10}"
          },
          {
            "label": "Fixed fraction of dry residue",
            "tex": "f_{\\text{fixed}} = \\dfrac{m_{\\text{ignited}}}{m_{\\text{dry}}}"
          },
          {
            "label": "Wet mass after dewatering",
            "tex": "M_2 = M_1\\,\\dfrac{1 - w_1}{1 - w_2}",
            "note": "<p>Dry solids conserved; \\(w\\) is the water fraction by mass.</p>"
          },
          {
            "label": "Septic useful liquid volume",
            "tex": "V = Q\\,t"
          },
          {
            "label": "Septic internal height",
            "tex": "H = d + f"
          },
          {
            "label": "Floor fall for 1 in n",
            "tex": "\\Delta z = \\dfrac{L}{n}"
          }
        ],
        "cautions": [],
        "gaps": [
          "Primary sedimentation design, activated-sludge parameters such as food-to-microorganism ratio and sludge age, and oxidation-pond sizing are not given in these capsule points.",
          "Only the Streeter–Phelps deficit rate is derived; the integrated sag equation, critical time and estimation of reaeration coefficients are not covered.",
          "Municipal solid-waste collection, composting and landfill design receive no capsule point beyond hazardous-waste handling and the steel-dust example.",
          "Septic-tank sludge accumulation rates, desludging intervals and soak-pit or drainfield sizing are not provided.",
          "Digestion kinetics and gas-yield estimates are not covered; biogas appears only through its composition and upgrading."
        ]
      },
      "ACiE0606": {
        "code": "ACiE0606",
        "questionCount": 18,
        "format": 2,
        "summary": "<p>This subchapter introduces environmental assessment and disaster risk: why EIA and strategic assessment are done, Nepal's instruments and its BES, IEE and EIA categories, screening, scoping, legal triggers and public participation, toxicity and noise as impacts, and hazard classes, mitigation, expected annual loss and vulnerability analysis.</p>",
        "blocks": [
          {
            "id": "purpose-of-eia-sea-and-the-sdgs",
            "title": "Why assess: the purpose of EIA, strategic assessment and the SDG context",
            "html": "<p><em>Environmental impact assessment (EIA)</em> is a systematic process for examining the likely environmental consequences of a proposed project before decisions are fixed. For a proposed wastewater outfall it compares alternatives, predicts downstream effects, designs mitigation and states the residual impacts, so that the decision and the design can avoid harm while it is still avoidable.</p><p>A sound EIA reports adverse and beneficial effects together with their uncertainties. Preparing the report does not guarantee approval, and it does not replace effluent compliance checks or the implementation and monitoring of its own commitments.</p><p><em>Strategic environmental assessment (SEA)</em> works one level higher. It evaluates policies, plans and programmes, such as a national water-sector policy, before particular schemes are chosen, so alternatives and cumulative implications can be weighed early. Project EIA then assesses specific proposals. The two are related and complementary, but they are not interchangeable, and their legal requirements differ between jurisdictions.</p><p>The wider policy frame is the United Nations 2030 Agenda, adopted in 2015, with 17 <em>Sustainable Development Goals</em> and 169 targets; the earlier Millennium Development Goals numbered eight. Goal 6 concerns water and sanitation, yet water projects also touch health, cities and ecosystems, one reason assessment looks beyond the construction site.</p>",
            "points": [
              {
                "html": "EIA is a systematic process used to evaluate the environmental consequences of a proposed project and mitigate adverse effects.",
                "sources": [
                  {
                    "id": "CAP4-06-00082",
                    "label": "p. 25; topic 6 point 81"
                  }
                ]
              },
              {
                "html": "Environmental Impact Assessment (EIA) is most closely related to strategic Environmental Assessment (SEA).",
                "sources": [
                  {
                    "id": "CAP4-06-00136",
                    "label": "p. 26; topic 6 point 139"
                  }
                ]
              },
              {
                "html": "The number of goals of sustainable development is 17.",
                "sources": [
                  {
                    "id": "CAP4-06-00084",
                    "label": "p. 25; topic 6 point 83"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00082",
                "label": "p. 25; topic 6 point 81"
              },
              {
                "id": "CAP4-06-00136",
                "label": "p. 26; topic 6 point 139"
              },
              {
                "id": "CAP4-06-00084",
                "label": "p. 25; topic 6 point 83"
              }
            ]
          },
          {
            "id": "nepal-instruments-and-study-categories",
            "title": "Nepal's environmental instruments: timeline and the BES, IEE and EIA categories",
            "html": "<p>Two historical instruments are easily confused. The <em>National Environmental Impact Assessment Guidelines</em> date from 1993. The <em>Environment Protection Act 2053</em> corresponds to 1997, and section 47 of the <em>Environment Protection Act 2076</em> (2019) later repealed it. Neither older instrument is the current complete framework.</p><p>Calling the 1997 Act the first environmental act does not claim that no earlier sectoral environmental legislation existed. A statement that the Environment Act was first promulgated in 1993, however, confuses the guideline year with the Act.</p><p>Under the cited <em>Environment Protection Rules (EPR) 2077</em>, Rule 3 links three study categories to schedules:</p><ul><li><em>Brief Environmental Study (BES)</em>: Schedule 1;</li><li><em>Initial Environmental Examination (IEE)</em>: Schedule 2;</li><li><em>Environmental Impact Assessment (EIA)</em>: Schedule 3.</li></ul><p>They are separate categories for proposals falling under different schedules, not three names for one report and not consecutive studies that every proposal must pass through. Environmental impact assessment has 4 types of level.</p>",
            "points": [
              {
                "html": "The first environmental act was introduced in Nepal in 1997.",
                "sources": [
                  {
                    "id": "CAP4-06-00083",
                    "label": "pp. 25, 26; topic 6 point 82; topic 6 point 140"
                  }
                ]
              },
              {
                "html": "In environmental study, the full form of BES is brief Environmental Study.",
                "sources": [
                  {
                    "id": "CAP4-06-00091",
                    "label": "p. 25; topic 6 point 92"
                  }
                ]
              },
              {
                "html": "In environmental impact assessment, there are 4 types of level.",
                "sources": [
                  {
                    "id": "CAP4-06-00115",
                    "label": "p. 26; topic 6 point 116"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00083",
                "label": "pp. 25, 26; topic 6 point 82; topic 6 point 140"
              },
              {
                "id": "CAP4-06-00091",
                "label": "p. 25; topic 6 point 92"
              },
              {
                "id": "CAP4-06-00115",
                "label": "p. 26; topic 6 point 116"
              }
            ]
          },
          {
            "id": "screening-scoping-triggers-and-participation",
            "title": "Choosing the study route: screening, scoping, legal triggers and public concerns",
            "html": "<p><em>Screening</em> comes first. It decides which route applies to a proposal, whether full EIA, a different study category or no EIA at all, using legal triggers and project context. Only then does <em>scoping</em> identify the significant issues and study boundaries for the required assessment. Under the cited EPR 2077, Rule 3 addresses category selection and Rule 4 formal EIA scoping, so describing scoping as the first step skips screening.</p><p>Administrative workflows may group stages differently, but the logical order holds, and post-approval monitoring and compliance auditing come much later.</p><p>The legal test is the set of effective <em>schedule triggers</em>: sector, scale, location, including sensitive areas, and other listed criteria. Check Rule 3 and the effective schedules, including amendments; these notes supply no current numerical threshold.</p><p><em>Public participation</em> improves the assessment itself by revealing missing receptors, pathways and alternatives. The cited EPR 2077 Rules 6 and 7 connect public hearing and suggestions with report preparation.</p>",
            "moreHtml": "<p><em>What incorporating a concern means:</em> if residents point out downstream drinking-water users missing from a draft, the final assessment must evaluate that concern, record how it was answered and revise the impact findings or mitigation where justified. It need not adopt every request, but it may not defer relevant issues until after approval or exclude affected users because they live outside the construction boundary.</p>",
            "points": [
              {
                "html": "The first step involved in EIA is scoping.",
                "sources": [
                  {
                    "id": "CAP4-06-00089",
                    "label": "p. 25; topic 6 point 88"
                  }
                ]
              },
              {
                "html": "Environmental Impact Assessment (EIA) is mandatory for large projects.",
                "sources": [
                  {
                    "id": "CAP4-06-00120",
                    "label": "p. 26; topic 6 point 121"
                  }
                ]
              },
              {
                "html": "Incorporation of all relevant stakeholders' concerns is not included in an EIA report.",
                "sources": [
                  {
                    "id": "CAP4-06-00110",
                    "label": "p. 26; topic 6 point 110"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00089",
                "label": "p. 25; topic 6 point 88"
              },
              {
                "id": "CAP4-06-00120",
                "label": "p. 26; topic 6 point 121"
              },
              {
                "id": "CAP4-06-00110",
                "label": "p. 26; topic 6 point 110"
              }
            ]
          },
          {
            "id": "toxicity-assessment-and-plant-noise",
            "title": "Assessing impacts: toxicity and dose–response, and noise from treatment plants",
            "html": "<p>Health risk assessment separates distinct tasks:</p><ul><li><em>Hazard identification</em> asks whether an agent can cause a particular adverse effect.</li><li><em>Toxicity or dose–response assessment</em> estimates how the severity and probability of harm, such as liver injury, change with dose and exposure duration: how much of a substance does what kind of harm.</li><li><em>Exposure assessment</em> estimates who receives how much, by which route and for how long.</li><li><em>Risk characterisation</em> combines the evidence.</li></ul><p>Choosing controls and acceptable levels is <em>risk management</em>, a policy step informed by the assessment but distinct from it.</p><p>Impact scoping should follow the equipment and activities, not the phase of matter being treated. A wastewater plant treats liquid, yet its aeration blowers, motor-driven pumps, generators and handling equipment produce airborne noise and structure-borne vibration. Leaving noise out because the plant treats liquid is therefore unjustified. The assessment should estimate sound levels, operating periods and nearby receptors and propose controls, while recognising that buried gravity sewers in quiet steady flow contribute little.</p>",
            "points": [
              {
                "html": "The main objective of toxicity assessment is to estimate how much of a substance does what kind of harm.",
                "sources": [
                  {
                    "id": "CAP4-06-00061",
                    "label": "p. 25; topic 6 point 60"
                  }
                ]
              },
              {
                "html": "Noise is not generated in waste treatment processes.",
                "sources": [
                  {
                    "id": "CAP4-06-00070",
                    "label": "p. 25; topic 6 point 68"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00061",
                "label": "p. 25; topic 6 point 60"
              },
              {
                "id": "CAP4-06-00070",
                "label": "p. 25; topic 6 point 68"
              }
            ]
          },
          {
            "id": "hazard-classes-geological-and-climatic",
            "title": "Classifying hazards: geological chains, drought and wildfire, and regional scenarios",
            "html": "<p>Hazard classification describes the physical process; triggers and exposure are separate dimensions. <em>Earthquakes</em> and <em>landslides</em> are commonly grouped as geological or geophysical hazards, so an earthquake that sets off a slope failure blocking a road is a chain of two geological hazards. The road is the exposed asset: its presence neither makes the hazards technological nor turns the landslide into an exposure category. Landslides can also be triggered by rainfall or human disturbance, so multi-hazard interactions matter.</p><p><em>Drought</em> is a slow-onset climatic hazard. A prolonged dry spell lowers vegetation moisture and can sharply raise fire danger, and wildfire is often grouped with climatological hazards.</p><p>The recent disastrous earthquake in Nepal occurred in the western region. <em>Jajarkot</em>, a district of Karnali Province, lies in western Nepal.</p>",
            "points": [
              {
                "html": "Earthquakes and landslides are categorized as geological hazards.",
                "sources": [
                  {
                    "id": "CAP4-06-00086",
                    "label": "p. 25; topic 6 point 85"
                  }
                ]
              },
              {
                "html": "Forest fire and drought lie in the climatic category of hazards.",
                "sources": [
                  {
                    "id": "CAP4-06-00092",
                    "label": "p. 25; topic 6 point 93"
                  }
                ]
              },
              {
                "html": "The recent disastrous earthquake in Nepal occurred in the western region.",
                "sources": [
                  {
                    "id": "CAP4-06-00116",
                    "label": "p. 26; topic 6 point 117"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00086",
                "label": "p. 25; topic 6 point 85"
              },
              {
                "id": "CAP4-06-00092",
                "label": "p. 25; topic 6 point 93"
              },
              {
                "id": "CAP4-06-00116",
                "label": "p. 26; topic 6 point 117"
              }
            ]
          },
          {
            "id": "mitigation-and-expected-annual-loss",
            "title": "Mitigation: lessening consequences and computing the residual expected loss",
            "html": "<p>In UNDRR's disaster-risk terminology, <em>mitigation</em> means lessening the adverse impacts of hazardous events. Strengthening a vulnerable water tank against earthquake loads before any event is mitigation: it reduces susceptibility and potential consequences without preventing the earthquake itself.</p><p>Emergency response after a failure and risk transfer that leaves the tank physically unchanged are different functions.</p><p>Risk reduction can be quantified. In a one-event annual model the <em>expected annual loss</em> is the annual event probability times the loss per event, and comparing it before and after an intervention shows how much risk was removed.</p><p>An intervention can reduce risk substantially without meeting any particular acceptability level, and judging whether the residual risk is acceptable needs a separately justified criterion.</p>",
            "formulas": [
              {
                "label": "Expected annual loss, one-event model",
                "tex": "\\mathrm{EAL} = p \\times L",
                "where": "<p>\\(p\\) is the annual probability of the event and \\(L\\) the loss per event.</p>"
              },
              {
                "label": "Percentage risk reduction",
                "tex": "\\dfrac{\\mathrm{EAL}_0 - \\mathrm{EAL}_1}{\\mathrm{EAL}_0} \\times 100\\%"
              }
            ],
            "example": {
              "title": "Worked example: lower probability and lower loss per event",
              "html": "<p>Before mitigation \\(p = 0.02\\) and \\(L\\) = Rs 1,000,000; afterwards \\(p = 0.01\\) and \\(L\\) = Rs 600,000.</p>\\[\\begin{aligned}\\mathrm{EAL}_0 &amp;= 0.02 \\times 1\\,000\\,000 = 20\\,000 \\\\ \\mathrm{EAL}_1 &amp;= 0.01 \\times 600\\,000 = 6000\\end{aligned}\\]<p>The residual expected loss is Rs 6,000 per year, a reduction of Rs 14,000, or 14,000/20,000 = 70%. Whether Rs 6,000 per year is acceptable is a separate judgement.</p>"
            },
            "points": [
              {
                "html": "In the context of risk management, mitigation means implementing strategies to reduce the impact or likelihood of identified risks.",
                "sources": [
                  {
                    "id": "CAP4-06-00077",
                    "label": "p. 25; topic 6 point 76"
                  }
                ]
              },
              {
                "html": "Mitigation denotes the reduction of risk to a threshold level.",
                "sources": [
                  {
                    "id": "CAP4-06-00080",
                    "label": "p. 25; topic 6 point 79"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00077",
                "label": "p. 25; topic 6 point 76"
              },
              {
                "id": "CAP4-06-00080",
                "label": "p. 25; topic 6 point 79"
              }
            ]
          },
          {
            "id": "vulnerability-analysis-and-drrm-institutions",
            "title": "Vulnerability analysis in the disaster cycle and Nepal's lead ministry",
            "html": "<p><em>Vulnerability analysis</em> identifies who and what is susceptible to harm and how limited their capacity to cope is. Surveying, before the flood season, which homes have weak walls and poor evacuation routes, so that strengthening can be prioritised, supports <em>pre-disaster mitigation and preparedness planning</em>.</p><p>Mapping rainfall alone describes the hazard, not vulnerability, while search and rescue and damage and loss accounting are post-event functions.</p><p>National institutional roles in Nepal are set by the <em>Disaster Risk Reduction and Management (DRRM) Act 2074</em>. In the cited English publication incorporating the first amendment of 2075, section 2(k) identifies the <em>Ministry of Home Affairs</em>, the lead ministry for national disaster-risk governance.</p><p>The National Council, the Executive Committee and the National Disaster Risk Reduction and Management Authority (NDRRMA) have distinct assigned functions, so naming the lead ministry does not mean it alone performs every local, technical or operational task. No later amendment status is certified in these notes.</p>",
            "points": [
              {
                "html": "Vulnerability analysis comes in the mitigation part of the disaster management cycle.",
                "sources": [
                  {
                    "id": "CAP4-06-00079",
                    "label": "p. 25; topic 6 point 78"
                  }
                ]
              },
              {
                "html": "In Nepal, the ministry related to national disaster and risk management is the ministry of Home Affairs.",
                "sources": [
                  {
                    "id": "CAP4-06-00087",
                    "label": "p. 25; topic 6 point 86"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00079",
                "label": "p. 25; topic 6 point 78"
              },
              {
                "id": "CAP4-06-00087",
                "label": "p. 25; topic 6 point 86"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Expected annual loss",
            "tex": "\\mathrm{EAL} = p \\times L",
            "note": "<p>Single-event model: annual probability times loss per event.</p>"
          },
          {
            "label": "Risk reduction",
            "tex": "\\Delta\\mathrm{EAL} = \\mathrm{EAL}_0 - \\mathrm{EAL}_1"
          },
          {
            "label": "Percentage reduction",
            "tex": "\\dfrac{\\Delta\\mathrm{EAL}}{\\mathrm{EAL}_0} \\times 100\\%",
            "note": "<p>A reduction is not by itself proof that the residual risk is acceptable.</p>"
          }
        ],
        "cautions": [],
        "gaps": [
          "The capsule points do not set out BES, IEE or EIA schedule thresholds, report formats, review periods or approving authorities.",
          "Impact-identification and prediction methods such as checklists, matrices and networks, and criteria for judging significance, are not covered.",
          "Environmental monitoring and auditing after approval appear only as stages distinct from screening, without procedures.",
          "Disaster coverage is limited to hazard classes, mitigation, vulnerability and the lead ministry; early warning, response planning and recovery are not described.",
          "Legal references are edition-specific readings; the current consolidated status of EPA 2076, EPR 2077 and the DRRM Act 2074 is not certified."
        ]
      }
    });
})();
