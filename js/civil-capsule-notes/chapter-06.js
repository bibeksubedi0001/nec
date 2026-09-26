(function () {
    "use strict";
    window.CIVIL_CAPSULE_NOTE_TOPICS = window.CIVIL_CAPSULE_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_CAPSULE_NOTE_TOPICS, {
      "ACiE0601": {
        "code": "ACiE0601",
        "questionCount": 29,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation and basis</th></tr></thead><tbody><tr><th scope='row'>Per-capita demand</th><td>q = Q/P, with Q the daily volume in litres and P the population served, giving L/person/day</td></tr><tr><th scope='row'>Arithmetic increase</th><td>P<sub>n</sub> = P<sub>0</sub> + n × (constant increment per decade)</td></tr><tr><th scope='row'>Geometric increase</th><td>P<sub>n</sub> = P<sub>0</sub>(1 + r)<sup>n</sup>, with r the growth rate per decade and n the number of decades</td></tr><tr><th scope='row'>Solids fractions</th><td>TS ≈ TSS + TDS, so TDS ≈ TS − TSS, with consistent methods</td></tr><tr><th scope='row'>Share of a stated base</th><td>share = part/base × 100%; always name the base</td></tr><tr><th scope='row'>Fire event volume</th><td>V = Q<sub>fire</sub> × t; event volume per person = V/P</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "sources-classification-and-storm-response",
            "title": "Surface and groundwater sources: classification and response to storms",
            "html": "<p>Raw-water sources are classified by where the water is stored and how it reaches the intake. A reservoir formed by damming a river still holds <strong>surface water</strong>; drawing it through a submerged pipe or a buried delivery main does not turn it into groundwater. Rivers, lakes and impounding reservoirs are exposed to runoff, whereas confined aquifers beneath intact cover are recharged slowly through soil and rock.</p><p>That difference explains storm behaviour. Intense rain on an eroding catchment carries sediment-laden runoff into a river quickly, so river <strong>turbidity</strong> can rise rapidly. A deep protected borehole or a sealed well fed by slow groundwater flow usually responds far more slowly, provided there is no direct surface entry. The comparison depends on catchment condition, season and contamination pathways, so the most-turbid label for rivers is a tendency rather than a law.</p><p>Hill springs are often clear because percolation strains out suspended matter. Clarity says nothing about microbes or dissolved chemicals: fractured rock can carry latrine seepage almost directly to the outlet, and dissolved contaminants pass through soil. A clear spring still needs sanitary inspection of its recharge zone, seasonal sampling and suitable treatment barriers.</p>",
            "moreHtml": "<p><em>Screening a source:</em> ask where the water was last exposed at the surface, how quickly rainfall reaches it, what lies in its catchment or recharge area, and whether any pathway such as fractures, a damaged well seal or direct surface entry bypasses natural filtration. These questions, rather than the name of the source, predict its quality risks.</p>",
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
            "html": "<p>Rain forms by condensation, so it usually carries little dissolved mineral matter and is soft. Low hardness is not a certificate of purity. Falling rain collects dust and other atmospheric material, and a roof adds droppings, leaves and debris. Water collected from a dirty roof can therefore be low in minerals yet faecally contaminated. Safe use depends on a protected catchment, appropriate first-flush management, covered storage and, where needed, treatment and testing; a first-flush diverter on its own does not certify the stored water.</p><p><strong>Direct roof-rainwater harvesting</strong> is recognised by its collection pathway: an identified roof catchment, controlled conveyance through gutters and pipes, and a storage tank with protective measures. A borehole pumping into a main, a spring tapped by an infiltration gallery upslope, or a shaft drawing from an aquifer are groundwater or spring abstractions, even though rainfall ultimately recharges them.</p><p>A <strong>stepwell</strong> is a traditional structure whose steps descend to the water so that users can reach it as the level rises and falls. Its architecture identifies the structure, not its hydrology: depending on site and arrangement, a stepwell may hold groundwater, recharge water or harvested runoff.</p>",
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
            "html": "<p><strong>Turbidity</strong> is an optical property: particles scatter and absorb light. A <strong>nephelometer</strong> measures scattered light and reports turbidity in <strong>NTU</strong> (nephelometric turbidity units). Suspended-solids concentration is a different quantity, a mass per volume in mg/L obtained by filtering and weighing. Two suspensions with the same solids mass can scatter light differently because particle size and optical properties differ, so no universal factor converts NTU into mg/L. Older silica-scale ppm terminology for turbidity survives in some texts, but it does not make turbidity equal to solids concentration.</p><p><strong>Colour</strong> is compared rather than scattered. A <strong>tintometer</strong> or calibrated colour comparator matches the sample against reference standards. For <strong>true colour</strong>, turbidity is first removed by appropriate sample preparation so that particles do not interfere; colour read with particles present is apparent colour. On the platinum–cobalt scale, one colour unit corresponds to the colour of the prescribed reference standard that contains 1 mg of platinum per litre. It is not 1 mg of any platinum–cobalt mixture, and a sample matching that colour need not contain platinum.</p><p>The two instruments measure different optical properties and must not be interchanged. Neither reading alone shows that water is safe to drink.</p>",
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
            "html": "<p>Solids fractions are defined by laboratory procedure. <strong>Total solids (TS)</strong> is the residue left after a sample is evaporated and dried. <strong>Total suspended solids (TSS)</strong> is the dried residue retained on a specified filter, and <strong>total dissolved solids (TDS)</strong> is the dried residue of the filtrate. With consistent methods the fractions add: TS ≈ TSS + TDS. Worked example: TS = 650 mg/L and TSS = 180 mg/L give TDS ≈ 650 − 180 = 470 mg/L. Adding the two figures or taking their ratio has no physical meaning here.</p><p>The dissolved fraction is, by definition, what passes the filter, so ordinary particle filtration does not remove it. Mismatched filters, different drying temperatures or volatile losses can weaken exact additivity, which is why the relation is written as approximate.</p><p>Particle <strong>size</strong> is a length, not a mass. A statement that suspended particles are smaller than some number of milligrams is dimensionally defective as a size limit. Meaningful size information is a particle-size distribution measured in micrometres, together with the analytical method used. A mass cannot be converted into a diameter without density and shape, and neither an NTU reading nor a mg/L concentration is a particle diameter.</p>",
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
            "html": "<p><strong>pH</strong> expresses hydrogen-ion activity; <strong>alkalinity</strong> is acid-neutralising capacity, measured by titration. The two are linked through the carbonate system but are not synonyms.</p><p>In a sunlit pond, algae photosynthesise by day and remove dissolved CO<sub>2</sub>. Losing CO<sub>2</sub> shifts the carbonate equilibria toward bicarbonate and carbonate, so pH tends to <strong>rise during the day</strong>. At night photosynthesis stops while respiration continues and releases CO<sub>2</sub>, so pH tends to <strong>fall</strong>. Buffering, mixing and other reactions control the size of the swing; the direction is a tendency, not a guaranteed daily rule.</p><p>In an idealised carbonate-buffered pond where only CO<sub>2</sub> uptake and release occur, total alkalinity stays approximately constant while pH changes. Adding or removing CO<sub>2</sub> redistributes carbon among CO<sub>2</sub>, HCO<sub>3</sub><sup>−</sup> and CO<sub>3</sub><sup>2−</sup> without adding charge-equivalent acid or base. Carbonate precipitation, nutrient-assimilation effects and direct acid or base inputs can change alkalinity, which is why the idealisation excludes them. Describing the day–night swing as an alkalinity change therefore confuses the two quantities.</p>",
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
            "title": "Reading NDWQS 2079 entries for pH and residual chlorine",
            "html": "<p>Nepal's <strong>National Drinking Water Quality Standards (NDWQS) 2079</strong>, in the edition identified for these notes, lists pH 6.5–8.5. pH matters operationally because it affects corrosion, coagulation and chlorine effectiveness. Meeting the pH range does not demonstrate potability: microbial and chemical hazards need separate checks. WHO's 2022 guidelines similarly treat pH operationally and do not set a health-based guideline value for it.</p><p>For chlorinated systems, the same 2079 table prints residual chlorine as 0.10–0.50 mg/L, with separate conditional provisions for epidemic or high-pollution conditions. A residual of 0.2 mg/L lies inside this band, but a single exact figure is not the whole rule. A measured residual also does not by itself prove adequate pathogen inactivation, which depends on contact time, pH, temperature and the water being treated.</p><p>Standards are edition-specific instruments. Quote the edition and table actually used, and check for later amendments before applying a value to compliance; these notes do not certify any subsequent amendment.</p>",
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
            "id": "pathogens-indicators-and-coliform-tests",
            "title": "Pathogens, E. coli as a faecal indicator and coliform test methods",
            "html": "<p>A <strong>pathogen</strong> is any agent able to cause disease. Waterborne pathogens include bacteria, viruses, protozoa and helminths, so a report that detects a disease-causing protozoan has found a pathogen even when no pathogenic bacteria appear. Conversely, many environmental bacteria are harmless: bacterium and pathogen are not interchangeable words.</p><p><strong>E. coli</strong> is valued as a <strong>faecal indicator</strong>. Its detection signals faecal contamination and a failure somewhere in source protection, treatment or distribution that must be investigated. It neither proves that every waterborne pathogen is present nor makes the species harmless: most strains are commensal, but pathogenic strains exist.</p><p>Two classical coliform methods report different results. <strong>Membrane filtration</strong> passes a measured volume through a membrane, cultures the retained bacteria and counts colonies directly as colony-forming units; turbid samples can clog the membrane, and background growth or injured organisms can impair recovery. <strong>Multiple-tube fermentation</strong> instead infers a most probable number (MPN) from a series of gas-positive tubes. Neither is universally the better method.</p><p>Bacteria are also grouped by growth temperature. An organism growing best near 55 °C under validated conditions is <strong>thermophilic</strong>; psychrophiles and mesophiles have lower optima.</p>",
            "moreHtml": "<p>The commonly quoted 40–70 °C thermophile band is approximate. Growth preference, survival and thermal inactivation are distinct properties with species-dependent limits, so an optimum temperature does not tell you the temperature at which organisms die.</p>",
            "sources": [
              {
                "id": "CAP4-06-00005",
                "label": "p. 23; topic 6 point 5"
              },
              {
                "id": "CAP4-06-00027",
                "label": "p. 24; topic 6 point 28"
              },
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
            "title": "Water-related diseases: waterborne, water-washed and pandemic spread",
            "html": "<p>An engineering intervention helps only when it interrupts the actual transmission route. <strong>Cholera</strong> can spread by ingestion of water carrying the causative organism, so the barriers are source protection, effective treatment and prevention of recontamination in distribution and household storage. Sanitation and hygiene complement these barriers. Softening, aeration or colour removal do nothing against faecal contamination left uncorrected, and attractive colour or taste is no proof of safety.</p><p><strong>Trachoma</strong> is associated with inadequate washing. Disinfected drinking water alone leaves the water-washed pathway open if families do not have enough water to wash faces regularly; they need convenient access to a sufficient <strong>quantity</strong> of clean water for hygiene. Within WHO's SAFE strategy, facial cleanliness and environmental improvement sit alongside surgery and antibiotics, so water supply is one part of a complete programme.</p><p>Epidemiological terms describe patterns, not severity. A <strong>pandemic</strong> is an epidemic with extensive international or intercontinental spread; its definition concerns geographic extent. <strong>Endemic</strong> describes expected, continuing occurrence in a population, while <strong>sporadic</strong> describes infrequent, irregular cases.</p>",
            "sources": [
              {
                "id": "CAP4-06-00008",
                "label": "p. 23; topic 6 point 8; topic 6 point 9"
              },
              {
                "id": "CAP4-06-00022",
                "label": "p. 24; topic 6 point 23"
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
            "html": "<p>Chemical contamination is often invisible. <strong>Nitrate</strong> in well water is linked to infant <strong>methaemoglobinaemia</strong> (blue baby syndrome), for example when formula is prepared with contaminated water. The exposure is nitrate, but the mechanism runs through nitrite: nitrate forms nitrite, and nitrite <strong>oxidises</strong> haemoglobin iron from Fe(II) to Fe(III). The resulting methaemoglobin carries oxygen poorly. The redox direction matters: ferrous iron is oxidised to ferric iron, which is neither a reduction nor carbon-monoxide-style binding. Boiling is not a nitrate-removal barrier.</p><p><strong>Pesticides</strong> applied in a catchment can move with runoff or groundwater toward a drinking-water source. Some residues persist and affect water quality without colour, odour or turbidity, so clear water is not proof of chemical safety, and the disappearance of a pesticide's smell does not end the concern. Persistence and toxicity differ between compounds and conditions, so evaluation is compound-specific: identify what was applied, how it can reach the source, how long it is likely to remain, and which exposure pathways matter for the users.</p>",
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
            "html": "<p>Demand is expressed as a <strong>per-capita rate</strong> in litres per person per day (lpcd). Worked example: a supply of 720 m<sup>3</sup>/day serving 6,000 people, all of it domestic use, gives 720,000/6,000 = 120 L/person/day. Keep the units honest: this is an average daily delivered volume, not an hourly or instantaneous rate, and not necessarily a gross production allowance that must also cover losses and other uses.</p><p>Design populations are forecast. The <strong>arithmetic increase method</strong> adds a constant increment each decade. The <strong>geometric increase method</strong> applies a constant percentage to each decade's opening population, so growth compounds: P<sub>n</sub> = P<sub>0</sub>(1 + r)<sup>n</sup>. With P<sub>0</sub> = 10,000 and r = 10% per decade, two decades give 10,000 × 1.10<sup>2</sup> = 12,100, whereas adding 1,000 twice gives the arithmetic 12,000. The difference grows with each additional decade.</p><p>The geometric method is conventionally preferred for rapidly growing towns, but rapid past growth does not by itself prove that proportional growth will continue. The model needs supporting evidence for the planning horizon, and boundary changes must be handled separately.</p>",
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
            "id": "livestock-and-fire-demand-allowances",
            "title": "Livestock and fire-fighting allowances: state the base and the event",
            "html": "<p>A percentage means nothing until its base is stated. Suppose an approved rural inventory lists household needs of 80,000 L/day and livestock needs of 24,000 L/day; livestock demand is then 24,000/80,000 = 30% of domestic demand. Dividing by the combined 104,000 L/day gives about 23.1%, which is livestock's share of the total: a different question. Livestock allocation should follow animal numbers, species and the scheme's service policy. The capsule's claim that livestock demand should not exceed 20% of domestic demand has no identified guideline edition and cannot replace an approved inventory.</p><p>Fire demand is an <strong>event</strong> defined by flow, duration and residual pressure. For 10 L/s sustained for two hours, V = 10 × 2 × 3,600 = 72,000 L = 72 m<sup>3</sup>. Spread over a town of 12,000 people, that one event equals 6 L/person, which is not a daily-average planning allowance. The capsule attributes a 1 lpcd fire-fighting ceiling to DWSS without an edition or clause; that attribution is unverified, and a specified fire-flow scenario must be checked on its own terms.</p>",
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
        "cautions": [
          {
            "id": "caution-rivers-always-most-turbid",
            "status": "review",
            "prompt": "Rivers contain water with the maximum amount of turbidity.",
            "html": "<p>Rivers fed by eroding catchments often show the fastest turbidity rise after rain, but the comparison is not absolute. Catchment condition, season and contamination pathways govern turbidity; groundwater with direct surface entry, for instance, can also become turbid.</p>",
            "sources": [
              {
                "id": "CAP4-06-00001",
                "label": "p. 23; topic 6 point 1"
              }
            ]
          },
          {
            "id": "caution-hill-spring-purity",
            "status": "review",
            "prompt": "Spring water along hill slopes contains little impurity.",
            "html": "<p>Percolation removes suspended matter, so hill springs are often clear. Fractures can bypass soil filtration and dissolved contaminants persist, so clarity does not exclude microbial or chemical contamination. Sanitary inspection, seasonal sampling and treatment barriers remain necessary.</p>",
            "sources": [
              {
                "id": "CAP4-06-00002",
                "label": "p. 23; topic 6 point 2"
              }
            ]
          },
          {
            "id": "caution-pathogens-only-bacteria",
            "status": "corrected",
            "prompt": "Pathogens are harmful bacteria.",
            "html": "<p>A pathogen is any agent capable of causing disease. Viruses, protozoa and helminths can be waterborne pathogens, and many environmental bacteria are not pathogenic, so restricting the term to harmful bacteria is wrong.</p>",
            "sources": [
              {
                "id": "CAP4-06-00005",
                "label": "p. 23; topic 6 point 5"
              }
            ]
          },
          {
            "id": "caution-thermophile-temperature-band",
            "status": "review",
            "prompt": "Thermophilic bacteria grow more at high temperature, 40 to 70 °C.",
            "html": "<p>A growth optimum near 55 °C does indicate a thermophile, but the 40–70 °C band is approximate. Growth preference, survival and thermal inactivation are distinct properties with species-dependent limits.</p>",
            "sources": [
              {
                "id": "CAP4-06-00007",
                "label": "p. 23; topic 6 point 7"
              }
            ]
          },
          {
            "id": "caution-trachoma-clean-water-only",
            "status": "review",
            "prompt": "Trachoma can be avoided by providing clean water.",
            "html": "<p>Clean water helps only when households have enough of it, conveniently, for face washing and hygiene. Drinking-water chlorination alone is not a complete programme; WHO's SAFE strategy also includes surgery, antibiotics and environmental improvement.</p>",
            "sources": [
              {
                "id": "CAP4-06-00008",
                "label": "p. 23; topic 6 point 8; topic 6 point 9"
              }
            ]
          },
          {
            "id": "caution-turbidity-in-ppm",
            "status": "corrected",
            "prompt": "Turbidity of water is expressed in ppm.",
            "html": "<p>Turbidity is a method-dependent optical quantity reported in NTU. Historical silica-scale ppm terminology does not make it a mass concentration; suspended solids are reported separately in mg/L, and no universal conversion links the two.</p>",
            "sources": [
              {
                "id": "CAP4-06-00009",
                "label": "pp. 23, 24; topic 6 point 10; topic 6 point 25"
              }
            ]
          },
          {
            "id": "caution-geometric-method-rapid-growth",
            "status": "review",
            "prompt": "The geometrical increase method is preferred for a rapidly growing population.",
            "html": "<p>The geometric method compounds a constant rate and suits sustained proportional growth. Rapid growth by itself does not prove the model will remain valid over the planning horizon; the forecast needs supporting evidence.</p>",
            "sources": [
              {
                "id": "CAP4-06-00012",
                "label": "p. 23; topic 6 point 13"
              }
            ]
          },
          {
            "id": "caution-ph-range-edition-specific",
            "status": "review",
            "prompt": "Permissible pH for public water supply ranges between 6.5 and 8.5.",
            "html": "<p>This is the reading of the identified NDWQS 2079 table and is edition-specific; later legal amendments are not certified. pH compliance alone does not prove potability, and WHO 2022 treats pH operationally rather than as a health-based guideline value.</p>",
            "sources": [
              {
                "id": "CAP4-06-00013",
                "label": "p. 23; topic 6 point 14"
              }
            ]
          },
          {
            "id": "caution-livestock-twenty-percent",
            "status": "review",
            "prompt": "Livestock demand should not exceed 20% of total domestic demand.",
            "html": "<p>The capsule gives no guideline edition for this ceiling, so it remains unverified. Allocate livestock water from animal numbers, species and service policy, and state the base of any percentage: a share of domestic demand differs from a share of total demand.</p>",
            "sources": [
              {
                "id": "CAP4-06-00014",
                "label": "p. 23; topic 6 point 15"
              }
            ]
          },
          {
            "id": "caution-colour-unit-definition",
            "status": "corrected",
            "prompt": "One TCU is the colour produced by 1 mg of platinum cobalt in 1 L of distilled water.",
            "html": "<p>One platinum–cobalt unit matches the colour of the prescribed standard holding 1 mg of platinum per litre. It is a platinum-equivalent reference, not 1 mg of a combined platinum–cobalt mixture, and a matching sample need not contain platinum.</p>",
            "sources": [
              {
                "id": "CAP4-06-00015",
                "label": "p. 24; topic 6 point 16"
              }
            ]
          },
          {
            "id": "caution-membrane-filter-always-better",
            "status": "review",
            "prompt": "The membrane filter technique is a better test to identify coliforms.",
            "html": "<p>Membrane filtration allows direct colony counts, but turbidity can clog the membrane and background growth or injured organisms can impair recovery. Multiple-tube fermentation reports an MPN instead; neither method is universally better.</p>",
            "sources": [
              {
                "id": "CAP4-06-00018",
                "label": "p. 24; topic 6 point 19"
              }
            ]
          },
          {
            "id": "caution-algae-change-alkalinity",
            "status": "corrected",
            "prompt": "Algae make pond alkalinity increase by day and decrease at night.",
            "html": "<p>The daily swing driven by CO<sub>2</sub> uptake and release is a pH swing. CO<sub>2</sub> exchange redistributes carbonate species without adding or removing acid-neutralising capacity, so total alkalinity can stay approximately unchanged while pH rises and falls.</p>",
            "sources": [
              {
                "id": "CAP4-06-00026",
                "label": "p. 24; topic 6 point 27"
              }
            ]
          },
          {
            "id": "caution-e-coli-harmless-proof",
            "status": "corrected",
            "prompt": "E. coli are harmless, but their presence indicates pathogenic bacteria.",
            "html": "<p>Both halves of the claim fail. E. coli indicates faecal contamination that requires investigation, but it does not prove that other pathogens are present. Most strains are commensal, yet pathogenic E. coli strains exist, so the whole species is not harmless.</p>",
            "sources": [
              {
                "id": "CAP4-06-00027",
                "label": "p. 24; topic 6 point 28"
              }
            ]
          },
          {
            "id": "caution-residual-chlorine-single-value",
            "status": "corrected",
            "prompt": "The permissible limit of free residual chlorine is 0.2 ppm.",
            "html": "<p>The inspected NDWQS 2079 table prints 0.10–0.50 mg/L for chlorinated systems, with separate conditional provisions for epidemic or high-pollution conditions. 0.2 mg/L lies within that band but is not the rule itself, and no later-amendment certification is claimed.</p>",
            "sources": [
              {
                "id": "CAP4-06-00098",
                "label": "p. 25; topic 6 point 99"
              }
            ]
          },
          {
            "id": "caution-fire-demand-one-lpcd",
            "status": "review",
            "prompt": "According to DWSS, water required for fire-fighting should not be more than 1 lpcd.",
            "html": "<p>The capsule cites no edition or clause, so this DWSS attribution remains unverified and no current Nepal fire standard is inferred. Fire demand is an event of specified flow, duration and residual pressure, checked separately from daily-average allowances.</p>",
            "sources": [
              {
                "id": "CAP4-06-00109",
                "label": "p. 26; topic 6 point 109"
              }
            ]
          },
          {
            "id": "caution-particle-size-in-milligrams",
            "status": "review",
            "prompt": "Suspended particles are less than 10 mg.",
            "html": "<p>Milligrams measure mass, so the statement is dimensionally defective as a size limit. Its intended threshold and unit cannot be recovered from the capsule, and guessing a unit would fabricate information; size needs a length measure and a stated method.</p>",
            "sources": [
              {
                "id": "CAP4-06-00118",
                "label": "p. 26; topic 6 point 119"
              }
            ]
          },
          {
            "id": "caution-rainwater-purest-natural-water",
            "status": "corrected",
            "prompt": "The purest form of natural water, free from impurities, is rain water.",
            "html": "<p>Rainwater is usually low in dissolved minerals, but it collects atmospheric material and roof runoff can add faecal contamination. It is not universally pure or automatically potable; protection, first-flush management, storage and treatment need assessment.</p>",
            "sources": [
              {
                "id": "CAP4-06-00121",
                "label": "p. 26; topic 6 point 123"
              }
            ]
          },
          {
            "id": "caution-pesticide-persistence-varies",
            "status": "review",
            "prompt": "The main problem with pesticides is that their residue persists in water.",
            "html": "<p>Persistence is compound- and condition-dependent rather than identical for all pesticides. Some residues persist and travel with runoff or groundwater without visible pollution, so each compound's toxicity and exposure pathways need evaluation.</p>",
            "sources": [
              {
                "id": "CAP4-10-00174",
                "label": "p. 42; rural point 2"
              }
            ]
          },
          {
            "id": "caution-stepwell-rainwater-harvesting",
            "status": "review",
            "prompt": "The traditional structure used to harvest rainwater in rural areas is the stepwell.",
            "html": "<p>A stepwell is identified by stepped access to water, not by its source. It may be fed by groundwater, recharge or harvested runoff, so its form alone does not prove rainwater harvesting; that requires an identified catchment, conveyance and storage.</p>",
            "sources": [
              {
                "id": "CAP4-10-00184",
                "label": "p. 42; rural point 10"
              }
            ]
          }
        ],
        "gaps": [
          "Only the pH and residual-chlorine entries of NDWQS 2079 are covered; the capsule supplies no complete standards table and no amendment status is certified.",
          "No per-capita demand norms, peak factors, loss allowances or institutional demands are given, so a design demand total cannot be assembled from this topic alone.",
          "Population forecasting is limited to the arithmetic and geometric ideas; incremental-increase, logistic and graphical methods are not treated.",
          "Hardness, alkalinity titration procedures and reporting units are not covered beyond the distinction between pH and alkalinity.",
          "The livestock and fire allowances quoted by the capsule lack verified guideline editions, and no authenticated replacement values are supplied."
        ]
      },
      "ACiE0602": {
        "code": "ACiE0602",
        "questionCount": 20,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation and basis</th></tr></thead><tbody><tr><th scope='row'>Continuity in series</th><td>Q<sub>1</sub> = Q<sub>2</sub> = Q<sub>3</sub>; V = Q/A with A = πD<sup>2</sup>/4, so at fixed Q the velocity varies as 1/D<sup>2</sup></td></tr><tr><th scope='row'>Local loss</th><td>h<sub>L</sub> = K V<sup>2</sup>/(2g), with K referenced to a stated velocity</td></tr><tr><th scope='row'>Loop energy balance</th><td>Σh = 0 around every closed loop, using signed head changes</td></tr><tr><th scope='row'>Hardy Cross loop correction</th><td>ΔQ = −Σh/Σ(dh/dQ); for h = rQ|Q|, dh/dQ = 2r|Q|</td></tr><tr><th scope='row'>Gravity pressure head</th><td>(source water level − node elevation) − Σh<sub>f</sub>, with velocity head neglected</td></tr><tr><th scope='row'>Operating discharge</th><td>Q = daily volume/operating hours</td></tr><tr><th scope='row'>Breakdown reserve</th><td>V<sub>reserve</sub> = demand rate × outage duration</td></tr><tr><th scope='row'>Free thermal movement</th><td>ΔL = α L ΔT</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "intake-siting-bends-navigation-and-submerged-intakes",
            "title": "Intake siting on rivers: bends, navigation channels and simple submerged intakes",
            "html": "<p>An intake must draw a dependable quantity of acceptable water throughout the year while surviving floods, sediment and debris. On a meandering river the <strong>outer concave bank</strong> commonly carries deeper flow, while deposition occurs on the <strong>inner convex bank</strong>. Depth at the outer bank favours abstraction at low water, but the same bank is where erosion and scour act and where the channel may migrate. Concavity is therefore an attraction, not a guarantee of good water quality or a stable foundation: erosion, scour, channel migration, access and contamination sources still decide the site, and curvature does not remove dissolved pollutants.</p><p>Siting also considers other river users. An intake in an active <strong>navigation channel</strong> obstructs vessels and risks collision damage and unsafe access, so where low-water depth is otherwise similar a protected location outside the channel is preferred. Avoiding navigation is one criterion only; it establishes nothing about yield, quality or bed stability, which are assessed together with sediment, submergence and regulatory constraints.</p><p>Small works often use a <strong>simple submerged intake</strong>: a fixed, screened pipe entrance set beneath the lowest expected water level, with no tower. It suits sites with sufficient submergence, a reliable source and maintenance access.</p>",
            "moreHtml": "<p><em>Size is not the selector:</em> a simple submerged intake is not chosen by project size alone. Debris, sediment, scour, water quality or difficult maintenance access can justify a more elaborate arrangement even for a small supply.</p>",
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
            "id": "dead-end-layouts-water-age-and-flushing",
            "title": "Branching dead-end layouts: where they fit and how to manage water age",
            "html": "<p>A <strong>dead-end (tree) system</strong> has branches that terminate without reconnecting. It fits towns with irregular streets that do not form a regular grid, and each pipe has a single supply path, which keeps analysis simple. Its weaknesses follow from that single path. Water near the terminals moves slowly, so <strong>water age</strong> increases and deposits can accumulate, and a repair or shutdown interrupts supply to everything downstream. The decision is contextual: irregular streets make a tree layout convenient, but the age of a town does not by itself establish the best layout.</p><p>Looped alternatives trade cost and analytical effort for reliability. In a <strong>gridiron</strong> layout interconnected pipes let most points receive water from more than one direction, and a <strong>ring</strong> main encircles a district. Looping reduces stagnation and provides alternative routes during maintenance.</p><p>Where a dead end remains, a suitably located <strong>terminal flushing outlet</strong> lets operators replace aged water and mobilise deposits where the branch otherwise has little through-flow. Plan the flushing rate, the disposal route and pressure protection. Raising the pressure setting, enlarging the branch while demand stays low, or fitting an upstream non-return valve does not create through-flow; a larger pipe at the same low demand can even lengthen residence time. Flushing treats the symptom, so looping or demand management should also be considered and the cause investigated.</p>",
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
            "html": "<p>Each appurtenance on a main has one hydraulic duty, and its location follows from that duty.</p><ul><li><strong>Altitude valve:</strong> on the inlet of an elevated tank or standpipe, it senses level-related pressure and stops inflow at a preset upper water level, so no operator needs to close a gate valve. It controls level; it does not lift water.</li><li><strong>Scour, drain, washout or blow-off valve:</strong> at accessible low points and depressions, it allows the main to be emptied and settled sediment to be flushed. It needs isolation and a protected discharge route free of cross-connection or backflow. The water drained is supply water from the main, not sewage from a sanitary collection system.</li><li><strong>Air-release valve:</strong> at summits and other hydraulic high points, where air accumulates and restricts flow, it vents that air during normal pressurised operation.</li><li><strong>Foot valve:</strong> at a pump suction entry, it helps retain pump prime and has nothing to do with tank level.</li></ul><p>Sizing matters as much as position. A small release valve suited to venting accumulated air under pressure is not automatically adequate for admitting or expelling large air volumes while a main is drained or filled; air/vacuum or combination duties are specified separately.</p>",
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
            "id": "fittings-expansion-joints-and-pipe-walls",
            "title": "Fittings, expansion joints and pipe-wall behaviour under internal and external pressure",
            "html": "<p>Fittings are named by what they do to the pipe run. A <strong>reducer</strong> joins two diameters along the same line, for example 200 mm to 150 mm; a <strong>tee</strong> adds a branch; an <strong>elbow</strong> changes direction; an <strong>end cap</strong> closes the run; a straight coupling joins equal pipes. Elbows are made at several angles, so a right-angle turn at unchanged diameter calls specifically for a <strong>90° elbow</strong>. Bend radius, pressure class, local head loss and thrust restraint remain selection checks, and every transition needs compatible pressure ratings and connection details.</p><p>Temperature changes move unrestrained pipes. Free thermal movement is ΔL = αLΔT. For a 30 m steel pipe with α = 12 × 10<sup>−6</sup> per °C and a uniform 40 °C rise, ΔL = 12 × 10<sup>−6</sup> × 30 × 40 = 0.0144 m = 14.4 mm extension; cooling gives contraction by the same relation. An <strong>expansion joint</strong> accommodates such movement only within its designed stroke, restraint and pressure-thrust arrangement.</p><p>Wall behaviour depends on the direction of pressure. Internal pressure generally produces tensile hoop stress. External pressure, such as groundwater acting on an emptied thin steel pipe, can destabilise the shell by <strong>buckling and ovalisation</strong>, a stability failure distinct from tensile yielding.</p>",
            "moreHtml": "<p><em>External-pressure checks:</em> wall thickness, ovality, corrosion, restraints and soil support govern buckling resistance, so passing an internal-pressure tensile check does not settle the external case. Steel is not intrinsically incapable of carrying external load; a thin shell simply needs this separate stability check.</p>",
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
              },
              {
                "id": "CAP4-06-00032",
                "label": "p. 24; topic 6 point 33"
              }
            ]
          },
          {
            "id": "series-continuity-and-valve-local-losses",
            "title": "Continuity in series pipes and local losses at valves",
            "html": "<p>For steady incompressible flow through full pipes in series, with no leakage, storage or branch withdrawal, <strong>continuity</strong> fixes one discharge Q through every section. Velocity follows the area: V = Q/A with A = πD<sup>2</sup>/4. Halving the diameter quarters the area, so at the same Q the mean velocity becomes <strong>four times</strong> as large. Discharge does not change at a contraction; velocity and head loss do.</p><p>Valves and fittings add <strong>local losses</strong> of the form h<sub>L</sub> = K V<sup>2</sup>/(2g), where K is a loss coefficient tied to a stated reference velocity. Worked example: suppose tested data for one fully open butterfly valve give K = 0.40, referenced to the pipe velocity. With a pipe velocity of 3.0 m/s, taking g as 9.81 m/s<sup>2</sup>, h<sub>L</sub> = 0.40 × 3.0<sup>2</sup>/(2 × 9.81) = 3.6/19.62 = 0.18349 m, about 0.183 m of head. The velocity is squared, and the result is a head, not a pressure.</p><p>K depends on valve geometry, opening and the velocity it is referenced to. A capsule value of 0.4 may describe one valve, but it is not universal for every fully open butterfly valve; use tested or manufacturer data for the valve actually installed.</p>",
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
            "html": "<p>A looped network obeys two rules. At each junction, inflow equals outflow. Around each closed loop, the algebraic sum of piezometric head changes is zero, because returning to the starting junction returns to the same head. With equal velocities at junctions, choose a traversal direction and sign each head drop: positive along the assumed flow, negative against it. Worked example: signed drops of +8 m and +5 m on two segments require the third to satisfy 8 + 5 + x = 0, so x = −13 m. The negative sign means a head rise along the chosen traversal, as when a pipe is traversed opposite its actual flow. Pump gains and velocity changes must be included consistently where present.</p><p>The <strong>Hardy Cross method</strong> builds on these rules. Assign trial flows that already satisfy junction continuity, compute each loop's signed head imbalance, and apply a loop correction ΔQ = −Σh/Σ(dh/dQ) to every pipe in that loop. Adding the same correction around a closed loop preserves continuity while reducing the energy imbalance; repeat until it is negligible. Head-loss laws and sign conventions must be consistent throughout.</p><p>Hardy Cross is a classical method. Modern programs such as EPANET use a global-gradient algorithm, so not every computer pipe-network solution is simply Hardy Cross.</p>",
            "moreHtml": "<p><em>Worked correction:</em> suppose a loop consists of two identical pipes in parallel, with trial flows of 6 and 4 units running the same way and totalling 10, and h = q|q|. In a clockwise loop the signed flows are +6 and −4. The signed residual is 6<sup>2</sup> − 4<sup>2</sup> = 36 − 16 = 20 head units, and the derivative sum is 2(6 + 4) = 20, so ΔQ = −20/20 = −1. The corrected signed flows are +5 and −5, meaning each pipe physically carries 5 units. The total stays 10 and the two head losses now match, as identical parallel pipes require.</p>",
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
            "id": "gravity-supply-transmission-and-reserve",
            "title": "Gravity supply, transmission-main discharge and breakdown reserve storage",
            "html": "<p>In hilly regions a source above the town can often supply by <strong>gravity</strong>. The pressure head available at a node is the elevation difference minus flowing losses, with nodal velocity head neglected. A reservoir at 120 m supplying a node at 80 m provides 40 m of elevation head; after 15 m of losses the pressure head is 25 m. Gravity supply works only if that residual meets the required pressure and the intermediate profile has been checked. Hilly terrain alone does not guarantee an adequate source elevation or acceptable pressures everywhere.</p><p>A <strong>transmission main</strong> filling a service reservoir that balances hourly demand is sized for the governing daily volume delivered over its actual operating period. To deliver a maximum-day volume of 900 m<sup>3</sup> in 12 operating hours, Q = 900/12 = 75 m<sup>3</sup>/h; dividing by 24 gives only the continuous-equivalent average of 37.5 m<sup>3</sup>/h.</p><p>Service-reservoir storage has several components, one of which is a <strong>breakdown reserve</strong>. It follows the outage scenario: 5 m<sup>3</sup>/h for six hours with no inflow needs 5 × 6 = 30 m<sup>3</sup>. With a non-overlapping 70 m<sup>3</sup> balancing volume, combined usable storage is 100 m<sup>3</sup>, of which the reserve is 30%.</p>",
            "moreHtml": "<p><em>What can change the governing case:</em> direct supply without balancing storage, fire cases, losses and pumping schedules can alter the transmission-main design condition. Likewise, an unreferenced ceiling of 25% of total storage cannot override a specified outage scenario, and other storage components or simultaneous demands need separate assessment.</p>",
            "sources": [
              {
                "id": "CAP4-06-00105",
                "label": "p. 26; topic 6 point 105"
              },
              {
                "id": "CAP4-06-00114",
                "label": "p. 26; topic 6 point 115"
              },
              {
                "id": "CAP4-06-00035",
                "label": "p. 24; topic 6 point 35"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-dead-end-for-old-cities",
            "status": "review",
            "prompt": "Dead-end distribution is used in irregularly developed old cities.",
            "html": "<p>A tree layout fits irregular streets, but its suitability is contextual: the age of a town alone does not establish the optimal layout. Terminal water age and supply interruption during maintenance must be managed.</p>",
            "sources": [
              {
                "id": "CAP4-06-00016",
                "label": "p. 24; topic 6 point 17"
              }
            ]
          },
          {
            "id": "caution-scour-valves-drain-waste-water",
            "status": "review",
            "prompt": "Scour valves are provided at depressions and dead ends to drain out waste water.",
            "html": "<p>Scour, drain and blow-off valves empty supply water and deposits from the water main itself, not sewage from a sanitary collection system. They need isolation and a protected outlet without cross-connection or backflow.</p>",
            "sources": [
              {
                "id": "CAP4-06-00033",
                "label": "pp. 24, 25; topic 6 point 34; topic 6 point 89; topic 6 point 91"
              }
            ]
          },
          {
            "id": "caution-elbow-always-ninety-degrees",
            "status": "corrected",
            "prompt": "An elbow fitting provides a deviation of 90° in pipework.",
            "html": "<p>The capsule describes one elbow angle, not every elbow. Elbows also exist at other angles, so a right-angle change of direction should be specified as a 90° elbow.</p>",
            "sources": [
              {
                "id": "CAP4-06-00031",
                "label": "p. 24; topic 6 point 32"
              }
            ]
          },
          {
            "id": "caution-steel-weak-under-external-pressure",
            "status": "review",
            "prompt": "Steel pipe is strong against inside stress but weak when stressed from outside.",
            "html": "<p>This is a thin-shell design caution, not a universal material ranking. External pressure can buckle a thin wall, with thickness, ovality, corrosion, restraint and soil support governing resistance; steel is not intrinsically incapable of carrying external load.</p>",
            "sources": [
              {
                "id": "CAP4-06-00032",
                "label": "p. 24; topic 6 point 33"
              }
            ]
          },
          {
            "id": "caution-breakdown-reserve-twenty-five-percent",
            "status": "review",
            "prompt": "The reserve for a breakdown period is generally not more than 25% of total storage.",
            "html": "<p>No authenticated universal 25%-of-total ceiling has been identified. Size the reserve from the explicit outage rate and duration; in the worked scenario the required reserve is 30% of combined usable storage.</p>",
            "sources": [
              {
                "id": "CAP4-06-00035",
                "label": "p. 24; topic 6 point 35"
              }
            ]
          },
          {
            "id": "caution-concave-bank-intake",
            "status": "review",
            "prompt": "In a meandering river the intake should be placed on the concave bank for optimal quality and flow.",
            "html": "<p>The outer concave bank commonly offers more dependable depth, but erosion, scour and channel migration must still be assessed there. Concavity does not by itself guarantee optimal water quality or a stable intake location.</p>",
            "sources": [
              {
                "id": "CAP4-06-00100",
                "label": "p. 25; topic 6 point 101"
              }
            ]
          },
          {
            "id": "caution-transmission-main-maximum-day",
            "status": "review",
            "prompt": "A transmission main is designed for maximum daily demand.",
            "html": "<p>The maximum-day basis applies where balancing storage absorbs hourly peaks, and the rate must use the actual operating hours. Direct supply, fire cases, losses and pumping schedules can change the governing condition.</p>",
            "sources": [
              {
                "id": "CAP4-06-00114",
                "label": "p. 26; topic 6 point 115"
              }
            ]
          },
          {
            "id": "caution-butterfly-valve-coefficient",
            "status": "review",
            "prompt": "The head-loss coefficient for a fully open butterfly valve is 0.4.",
            "html": "<p>K depends on valve geometry, opening and the reference velocity. A value of 0.4 may come from a verified data sheet for one valve, but it is not universal for every fully open butterfly valve.</p>",
            "sources": [
              {
                "id": "CAP4-06-00126",
                "label": "p. 26; topic 6 point 127"
              }
            ]
          }
        ],
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
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation and basis</th></tr></thead><tbody><tr><th scope='row'>Surface overflow rate</th><td>SOR = Q/A; ideal discrete-settling capture = min(v<sub>s</sub>/SOR, 1)</td></tr><tr><th scope='row'>Required plan area</th><td>A = Q/SOR, with 1,000 L/day/m<sup>2</sup> = 1 m/day</td></tr><tr><th scope='row'>Bar-screen open fraction</th><td>clear gap/(bar width + clear gap)</td></tr><tr><th scope='row'>Tracer index, as defined here</th><td>t<sub>10</sub>/(V/Q), with V/Q the nominal detention time</td></tr><tr><th scope='row'>Filtration rate</th><td>1,000 L/h/m<sup>2</sup> = 1 m/h; operating area = Q/rate</td></tr><tr><th scope='row'>Slow sand scrapings</th><td>number = (initial depth − minimum depth)/depth removed per scraping</td></tr><tr><th scope='row'>Available chlorine</th><td>mass as Cl<sub>2</sub> = product mass × assayed available-chlorine fraction</td></tr><tr><th scope='row'>Temporary hardness on boiling</th><td>Ca(HCO<sub>3</sub>)<sub>2</sub> → CaCO<sub>3</sub> + CO<sub>2</sub> + H<sub>2</sub>O</td></tr><tr><th scope='row'>Idealised alum recovery</th><td>2Al(OH)<sub>3</sub> + 3H<sub>2</sub>SO<sub>4</sub> → Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 6H<sub>2</sub>O</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "coarse-screens-dimensions-and-open-area",
            "title": "Coarse screens: bar size, clear spacing, inclination and open area",
            "html": "<p><strong>Screening</strong> is the first physical barrier in treatment: bars intercept floating and coarse objects that could damage equipment or block channels. It is not fine-media filtration and removes nothing dissolved. A conventional textbook specification for coarse screens uses bar thicknesses of 10–25 mm, clear gaps of 20–100 mm and an inclination of 45–60° to the horizontal. Checking a proposal means testing every dimension against its own band: 15 mm bars, 50 mm gaps and a 55° inclination all lie inside, whereas a gap narrower than 20 mm, bars thicker than 25 mm or an inclination steeper than 60° would each fall outside. The frequently quoted 50 mm spacing is one example within the gap band, not the only coarse-screen spacing, and actual dimensions depend on the screening and cleaning equipment.</p><p>Open area governs approach velocity and head loss. For repeating bars of width b and clear gaps s, each pitch is b + s and the open fraction of the width is s/(b + s). With 15 mm bars and 50 mm gaps the pitch is 65 mm, so the open fraction is 50/65 = 0.769, or 76.9%. Dividing the gap by the bar width gives a ratio, not an open fraction. Hydraulic design also accounts for side frames, blockage between cleanings and the projection of an inclined screen.</p>",
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
            "id": "plain-sedimentation-overflow-rate-and-short-circuiting",
            "title": "Plain sedimentation: surface overflow rate, ideal capture and short-circuiting",
            "html": "<p>In an ideal <strong>discrete-settling</strong> basin, a particle is removed if it reaches the floor before the water leaves. A particle entering at the surface must fall the full depth H during the detention time V/Q = AH/Q, so it is certainly captured when its settling velocity v<sub>s</sub> is at least H/(AH/Q) = Q/A. Depth cancels: the governing parameter is the <strong>surface overflow rate</strong> SOR = Q/A. For particles distributed uniformly over the inlet depth, the captured fraction is min(v<sub>s</sub>/SOR, 1).</p><p>Worked example: 1,200 m<sup>3</sup>/day through 100 m<sup>2</sup> gives SOR = 12 m/day, so particles settling at 6 m/day are 6/12 = 50% captured. Doubling the plan area to 200 m<sup>2</sup> lowers SOR to 6 m/day and raises ideal capture to 6/6 = 100%, the ceiling. For a given discharge, increasing plan area therefore increases ideal efficiency.</p><p>Design reverses the calculation. A conventional plain-settling band of 12,000–18,000 L/day/m<sup>2</sup> equals 12–18 m/day. Adopting 15 m/day for 1,800 m<sup>3</sup>/day needs A = 1,800/15 = 120 m<sup>2</sup>. Depth affects detention and sludge space but does not replace plan area in surface loading, and the settling characteristics of the actual particles must justify the adopted rate.</p>",
            "moreHtml": "<p><em>Short-circuiting:</em> real basins depart from ideal flow, so a tracer test compares actual passage times with the nominal detention V/Q. Defining the index here as t<sub>10</sub>/(V/Q), where t<sub>10</sub> is the time for 10% of the tracer mass to exit, a basin with V/Q = 3.0 h and t<sub>10</sub> = 1.2 h gives 1.2/3.0 = 0.40. Such early breakthrough shows some water crossing far sooner than nominal, which is hydraulic short-circuiting. The index is a hydraulic diagnostic, not a solids-removal percentage, and displacement-efficiency conventions differ, so each report must state its tracer-time definition. The ideal-capture results above also assume no short-circuiting, scour or flocculation.</p>",
            "sources": [
              {
                "id": "CAP4-06-00038",
                "label": "p. 24; topic 6 point 38"
              },
              {
                "id": "CAP4-06-00052",
                "label": "p. 24; topic 6 point 50"
              },
              {
                "id": "CAP4-06-00047",
                "label": "p. 24; topic 6 point 46"
              }
            ]
          },
          {
            "id": "coagulation-jar-tests-surfactants-and-alum-recovery",
            "title": "Coagulation and flocculation: jar tests, surfactant interference and alum recovery",
            "html": "<p>Coagulant demand changes with the raw water. After a storm, turbidity and alkalinity may shift, and yesterday's dose may now under- or overdose. A <strong>jar test</strong> runs parallel, controlled mixing and settling trials on the actual raw water at several coagulant doses and pH conditions, then compares floc formation and settled-water clarity. Its purpose is to <strong>optimise</strong> dose and pH; it does not measure coagulant already present in the water or certify chemical purity. Coagulant effectiveness does not increase without limit with dose, and full-scale performance still needs verification.</p><p>Some constituents interfere with aggregation. <strong>Surfactants</strong> from detergent-rich inflows act at interfaces: they stabilise foam and oily emulsions and can impair floc formation and separation. Greasy scum is a symptom that invites investigation of oil content, other chemicals and operating conditions; it is not by itself a definitive test for surfactants.</p><p>Aluminium coagulants leave <strong>aluminium-hydroxide</strong>-rich sludge. In a controlled recovery study, sulphuric acid can redissolve it; idealised, 2Al(OH)<sub>3</sub> + 3H<sub>2</sub>SO<sub>4</sub> → Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 6H<sub>2</sub>O. The acid supplies hydrogen ions rather than hydroxide, so it dissolves rather than precipitates the hydroxide. Captured impurities may co-dissolve and limit reuse, so this is coagulant recovery, not unrestricted alum regeneration, and no field dose is implied.</p>",
            "sources": [
              {
                "id": "CAP4-06-00021",
                "label": "p. 24; topic 6 point 22"
              },
              {
                "id": "CAP4-06-00064",
                "label": "p. 25; topic 6 point 63"
              },
              {
                "id": "CAP4-06-00101",
                "label": "p. 25; topic 6 point 102"
              }
            ]
          },
          {
            "id": "rapid-and-slow-sand-filters-rates-and-beds",
            "title": "Rapid and slow sand filters: rate conversions, filter area and sand depth",
            "html": "<p>Filtration rates are often quoted in L/h/m<sup>2</sup>. Because 1,000 L = 1 m<sup>3</sup>, dividing by 1,000 converts them to m/h, a superficial velocity through the bed. The conventional rapid sand filter band of 3,000–6,000 L/h/m<sup>2</sup> is therefore 3–6 m/h. Adopting 4,000 L/h/m<sup>2</sup>, that is 4 m/h, for 240 m<sup>3</sup>/h requires an operating area of 240/4 = 60 m<sup>2</sup>. Additional installed area may be needed so that capacity remains while a unit backwashes or is unavailable. The band is conventional guidance, not a universal media-specific maximum.</p><p>A <strong>slow sand filter</strong> is cleaned by scraping off its surface layer as needed, so the bed thins with successive cleanings; initial depth and minimum remaining depth are separate design values. Worked example with hypothetical values: starting at 1.00 m, inside the historical range of 0.90–1.10 m for initial depth, with a project minimum of 0.70 m and 0.05 m removed per scraping, the available loss is 1.00 − 0.70 = 0.30 m and 0.30/0.05 = 6 scrapings reach that minimum. Each cleaning is followed by ripening, and water-quality checks confirm performance before normal use resumes.</p>",
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
            "html": "<p>Bleaching powder is conventionally written <strong>CaOCl<sub>2</sub></strong>, also represented as Ca(OCl)Cl. That simplified textbook formula differs from pure calcium hypochlorite, <strong>Ca(OCl)<sub>2</sub></strong>, and from calcium chloride or slaked lime. Commercial bleaching powder is not a perfectly pure single compound, so dosing calculations use its measured <strong>available chlorine</strong> rather than an ideal formula.</p><p>Available chlorine expresses oxidising capacity as an equivalent mass of Cl<sub>2</sub>. A batch assayed at 35% available chlorine by mass contains 10 × 0.35 = 3.5 kg as Cl<sub>2</sub> equivalent in 10 kg of product, before handling losses. That does not mean the powder holds 3.5 kg of free chlorine gas. Storage deterioration, delivery losses, chlorine demand and the target residual are separate steps in a dosing calculation.</p><p>The form of the disinfectant also affects pH. Hypochlorite hydrolysis generates hydroxide, and bleaching powder can contain alkaline lime, so adding fresh bleaching powder to weakly buffered water tends to <strong>raise</strong> pH. Chlorine gas behaves oppositely: its hydrolysis in water produces acidity and tends to lower pH. The actual change depends on dose and buffering, so a universal fall on adding bleaching powder is incorrect.</p>",
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
            "id": "disinfection-limits-ph-kill-claims-and-oxygen",
            "title": "What disinfection does not establish: pH-based kill claims and oxygen removal",
            "html": "<p>Microbial inactivation depends on the organism, the agent and its concentration, exposure time, temperature and water chemistry. A single pH reading is not a validated kill criterion: a lime-treated sample at pH 9.5 with no contact-time or microbial records has not been shown to be free of viable E. coli, however clear it looks. Alkaline pH also works against chlorination. As pH rises, free chlorine shifts from <strong>hypochlorous acid (HOCl)</strong> toward the <strong>hypochlorite ion (OCl<sup>−</sup>)</strong>, the less effective form, so a given residual achieves less at pH 9.5 than it would at pH 7.0. Verification needs contact time and microbial testing.</p><p>Chlorination is a <strong>disinfection</strong> step that also drives selected oxidation reactions; it is not a deoxygenation process. Under ordinary treatment conditions it does not inherently strip dissolved oxygen, chlorine demand is not a measure of oxygen removed, and breakpoint chlorination does not mark the exhaustion of DO. Indirect effects exist, however: some reactions and the later dosing of oxygen-consuming dechlorinating reagents such as sulphite can lower DO, so an absolute no-change statement is too broad. Any oxygen demand of sulphite belongs to the dechlorinating reagent, not to chlorine itself.</p>",
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
            "id": "temporary-hardness-oxygen-solubility-and-algae-control",
            "title": "Temporary hardness, oxygen solubility in aeration and algae control",
            "html": "<p>Hardness caused by <strong>calcium bicarbonate</strong> is called temporary or carbonate hardness because boiling removes much of it: heating drives Ca(HCO<sub>3</sub>)<sub>2</sub> → CaCO<sub>3</sub> + CO<sub>2</sub> + H<sub>2</sub>O, and the calcium carbonate precipitates. Hardness associated with chloride and sulphate, as in calcium chloride, calcium sulphate or magnesium chloride, is non-carbonate hardness. The same boiling mechanism does not remove it, so it requires non-carbonate softening.</p><p><strong>Aeration</strong> transfers gases between air and water, and its driving force depends on the equilibrium <strong>saturation concentration</strong>. For oxygen in freshwater at unchanged partial pressure and salinity, saturation generally <strong>decreases</strong> as the water warms over an ordinary environmental range. A solubility curve must name the substance and conditions, because temperature trends differ between solutes, and tank volume has no bearing on equilibrium solubility.</p><p><strong>Copper sulphate</strong> is a long-established reservoir algicide. It is not a universal dosing recommendation: copper is toxic to aquatic life, its behaviour depends on water chemistry, and damaged algal cells can release intracellular material into the water. Use requires site-specific authorisation and assessment, while catchment nutrient control and appropriate treatment remain important.</p>",
            "sources": [
              {
                "id": "CAP4-06-00019",
                "label": "p. 24; topic 6 point 20"
              },
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
        "cautions": [
          {
            "id": "caution-solubility-curve-unspecified",
            "status": "review",
            "prompt": "The solubility curve depends on the temperature.",
            "html": "<p>The capsule names no solute or conditions. For oxygen in freshwater at fixed partial pressure and salinity, saturation generally falls as water warms, but no single temperature trend applies to every substance.</p>",
            "sources": [
              {
                "id": "CAP4-03-00130",
                "label": "p. 14; topic 3 point 127"
              }
            ]
          },
          {
            "id": "caution-bleaching-powder-lowers-ph",
            "status": "corrected",
            "prompt": "Adding bleaching powder decreases the pH of water.",
            "html": "<p>Hypochlorite hydrolysis generates hydroxide and the powder can contain alkaline lime, so bleaching powder usually tends to raise pH. The acidifying effect belongs to chlorine gas, and the actual change depends on dose and buffering.</p>",
            "sources": [
              {
                "id": "CAP4-06-00017",
                "label": "p. 24; topic 6 point 18"
              }
            ]
          },
          {
            "id": "caution-jar-test-measures-coagulant",
            "status": "review",
            "prompt": "The jar test is used to measure coagulant.",
            "html": "<p>A jar test compares coagulant doses and pH conditions on the actual raw water to optimise treatment. It does not merely measure a quantity of chemical already present, and it does not replace full-scale verification.</p>",
            "sources": [
              {
                "id": "CAP4-06-00021",
                "label": "p. 24; topic 6 point 22"
              }
            ]
          },
          {
            "id": "caution-ph-nine-point-five-kills-e-coli",
            "status": "corrected",
            "prompt": "E. coli typically die in water if the pH value is 9.5.",
            "html": "<p>No universal pH 9.5 kill threshold exists. Inactivation depends on exposure time, temperature, organism and water chemistry, and higher pH shifts free chlorine toward less effective hypochlorite.</p>",
            "sources": [
              {
                "id": "CAP4-06-00023",
                "label": "p. 24; topic 6 point 24"
              }
            ]
          },
          {
            "id": "caution-copper-sulphate-for-algae",
            "status": "review",
            "prompt": "The chemical generally used for controlling algae is copper sulphate.",
            "html": "<p>Copper sulphate is a conventional algicide, not a universal dosing recommendation. Copper toxicity, water chemistry and release of intracellular material from damaged cells require site-specific authorisation and assessment.</p>",
            "sources": [
              {
                "id": "CAP4-06-00024",
                "label": "p. 24; topic 6 point 26"
              }
            ]
          },
          {
            "id": "caution-coarse-screen-ranges",
            "status": "review",
            "prompt": "Coarse screens use 50 mm spacing, with 10–25 mm bars at 20–100 mm spacing inclined at 45–60°.",
            "html": "<p>These ranges are stipulated textbook assumptions, not verified Nepal requirements, and 50 mm is one spacing within the band. The inclination is taken to the horizontal, and screening removes coarse objects rather than acting as filtration.</p>",
            "sources": [
              {
                "id": "CAP4-06-00039",
                "label": "p. 24; topic 6 point 39; topic 6 point 44"
              }
            ]
          },
          {
            "id": "caution-chlorination-and-dissolved-oxygen",
            "status": "review",
            "prompt": "Chlorination of water does not reduce its dissolved oxygen content.",
            "html": "<p>Under ordinary conditions chlorination is not a deoxygenation process, but an absolute no-change statement is too broad: indirect reactions and oxygen-consuming dechlorinating reagents dosed later can affect DO.</p>",
            "sources": [
              {
                "id": "CAP4-06-00044",
                "label": "pp. 24, 26; topic 6 point 42; topic 6 point 142"
              }
            ]
          },
          {
            "id": "caution-displacement-efficiency-undefined",
            "status": "review",
            "prompt": "Short-circuiting in a sedimentation tank is represented by displacement efficiency.",
            "html": "<p>The capsule gives no definition of displacement efficiency. Tracer indices such as t<sub>10</sub>/(V/Q) diagnose short-circuiting, but conventions differ, so each index must state its tracer-time definition.</p>",
            "sources": [
              {
                "id": "CAP4-06-00047",
                "label": "p. 24; topic 6 point 46"
              }
            ]
          },
          {
            "id": "caution-rapid-filter-rate-band",
            "status": "review",
            "prompt": "The rate of filtration in rapid sand filtration is 3000 to 6000 L/h/m².",
            "html": "<p>This is a conventional range, equal to 3–6 m/h, not a universal media-specific maximum. The design must also provide standby area for units that are backwashing or unavailable.</p>",
            "sources": [
              {
                "id": "CAP4-06-00050",
                "label": "p. 24; topic 6 point 48"
              }
            ]
          },
          {
            "id": "caution-slow-filter-sand-depth",
            "status": "review",
            "prompt": "In a slow sand filter, the thickness of the sand bed is 90 to 110 cm.",
            "html": "<p>This is a typical initial thickness, not a rule for the remaining bed. Scraping reduces depth over time, so initial depth and minimum remaining depth are separate project values.</p>",
            "sources": [
              {
                "id": "CAP4-06-00051",
                "label": "p. 24; topic 6 point 49"
              }
            ]
          },
          {
            "id": "caution-surfactants-cause-greasing",
            "status": "review",
            "prompt": "Surfactants cause greasing in flocculation.",
            "html": "<p>Surfactants stabilise foam and emulsions and can impair flocculation, but greasy scum is not uniquely diagnostic of them. Treat it as a process symptom and investigate oil content, other chemicals and operating conditions.</p>",
            "sources": [
              {
                "id": "CAP4-06-00064",
                "label": "p. 25; topic 6 point 63"
              }
            ]
          },
          {
            "id": "caution-alum-regeneration-by-acid",
            "status": "review",
            "prompt": "Alum can be regenerated by adding sulphuric acid.",
            "html": "<p>Acid can dissolve aluminium hydroxide sludge and recover soluble aluminium sulphate species, but impurities may co-dissolve and limit reuse. This is controlled coagulant recovery, not unrestricted regeneration or a field dosing recipe.</p>",
            "sources": [
              {
                "id": "CAP4-06-00101",
                "label": "p. 25; topic 6 point 102"
              }
            ]
          },
          {
            "id": "caution-bleaching-powder-formula",
            "status": "review",
            "prompt": "The chemical formula for bleaching powder is CaOCl2.",
            "html": "<p>CaOCl<sub>2</sub> is retained as conventional simplified notation. Commercial bleaching powder is a mixture rather than a pure compound, so dosing uses its measured available chlorine; pure calcium hypochlorite is Ca(OCl)<sub>2</sub>.</p>",
            "sources": [
              {
                "id": "CAP4-06-00133",
                "label": "p. 26; topic 6 point 137"
              }
            ]
          }
        ],
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
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation and basis</th></tr></thead><tbody><tr><th scope='row'>Mean velocity</th><td>V = Q/A; a minimum velocity V<sub>min</sub> at discharge Q needs wetted area A ≤ Q/V<sub>min</sub></td></tr><tr><th scope='row'>Wetted-arc angle</th><td>θ = 2 cos<sup>−1</sup>(1 − 2y/D), in radians</td></tr><tr><th scope='row'>Area ratio</th><td>A/A<sub>f</sub> = (θ − sin θ)/(2π)</td></tr><tr><th scope='row'>Wetted-perimeter ratio</th><td>P/P<sub>f</sub> = θ/(2π)</td></tr><tr><th scope='row'>Hydraulic-radius ratio</th><td>R/R<sub>f</sub> = (A/A<sub>f</sub>)/(P/P<sub>f</sub>)</td></tr><tr><th scope='row'>Manning ratios, same n and S</th><td>V/V<sub>f</sub> = (R/R<sub>f</sub>)<sup>2/3</sup>; Q/Q<sub>f</sub> = (A/A<sub>f</sub>)(R/R<sub>f</sub>)<sup>2/3</sup></td></tr><tr><th scope='row'>Depth limit</th><td>design water depth = adopted fraction × D; crown airspace = D − water depth</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "water-carriage-and-wet-weather-sanitary-flow",
            "title": "Water-carriage sewerage and why sanitary sewers respond to rain",
            "html": "<p>In a <strong>water-carriage system</strong>, water flushes excreta from fixtures and carries it through sewers. Replacing dry excreta collection with flush toilets therefore adds service requirements: a reliable supply of flushing water, sewers with enough hydraulic conveyance capacity, and collection and treatment sized for the resulting flow. Gravity reaches are not continuously pressurised, and stormwater capacity is no substitute for a sanitary-flow estimate. Dilution does not remove pollutants either: the same pollutant load reaches treatment in a larger volume of water.</p><p>By definition, <strong>sanitary sewage</strong> is wastewater generated by the premises served, conceptually separate from direct storm runoff. Real sanitary sewers nevertheless respond to rain. Groundwater <strong>infiltration</strong> enters through defects in pipes and joints, <strong>inflow</strong> enters through leaking manholes, and illicit storm connections deliver roof or surface runoff. Together they can produce sharp wet-weather peaks in a nominally separate system. Such a peak does not mean that household generation has changed and does not show that the system was built as a combined sewer; it is evidence of rainfall-related entry to investigate and control.</p>",
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
            "id": "sewer-roles-laterals-mains-and-interceptors",
            "title": "Sewer network roles: house connections, laterals, mains and interceptors",
            "html": "<p>Sewers are named by their role in the network, not simply by diameter. A <strong>house connection</strong> carries wastewater from one premises to a street sewer. <strong>Lateral sewers</strong> run along streets and receive house connections. A <strong>main sewer</strong> collects flow from one or more laterals, and mains discharge to <strong>trunk</strong> sewers that carry flow onward toward treatment. An <strong>outfall</strong> conveys flow to its final discharge destination. Local naming varies, so identify each sewer from the flows it receives and where it sends them.</p><p>An <strong>interceptor sewer</strong> is defined by what it intercepts. Laid, for example, along a river, it collects flow from several existing large sewers or outfalls that formerly discharged directly and redirects dry-weather wastewater toward treatment. It is usually large because of the flows it gathers, but diameter alone does not make a sewer an interceptor, and a street lateral or building drain is never one. Where combined sewers are intercepted, storm-overflow and peak-flow arrangements need separate design checks.</p>",
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
            "id": "partial-flow-hydraulics-of-circular-sewers",
            "title": "Partial-flow hydraulics of circular sewers",
            "html": "<p>Circular sewers normally run partly full as open channels. As depth y rises toward the crown, the wetted arc lengthens continuously, so the <strong>wetted perimeter</strong> increases monotonically. Area also increases, but the hydraulic radius R = A/P does not keep rising: near the crown the added area per unit rise shrinks toward zero while the wetted arc keeps lengthening, so R peaks before the pipe is full. Manning velocity and discharge therefore have maxima below full depth; greater depth does not guarantee a larger value of every hydraulic quantity.</p><p>Geometry gives the ratios. The central angle of the wetted arc is θ = 2 cos<sup>−1</sup>(1 − 2y/D). Then A/A<sub>f</sub> = (θ − sin θ)/(2π), P/P<sub>f</sub> = θ/(2π), and R/R<sub>f</sub> is their quotient. With slope and roughness unchanged, Q/Q<sub>f</sub> = (A/A<sub>f</sub>)(R/R<sub>f</sub>)<sup>2/3</sup>.</p><p>Worked example at y/D = 2/3: θ = 2 cos<sup>−1</sup>(−1/3) = 3.8213 rad and sin θ = −0.6285, so A/A<sub>f</sub> = 4.4498/6.2832 = 0.7082 and P/P<sub>f</sub> = 3.8213/6.2832 = 0.6082. Hence R/R<sub>f</sub> = 1.1645, V/V<sub>f</sub> = 1.1645<sup>2/3</sup> = 1.1069 and Q/Q<sub>f</sub> = 0.7082 × 1.1069 = 0.784. A depth fraction of two-thirds is therefore not a discharge fraction of two-thirds.</p>",
            "moreHtml": "<p><em>Depth limits in design:</em> some texts size sewers so that maximum flow runs at a stated fraction of diameter, leaving crown airspace. For a 0.60 m sewer with an explicit two-thirds limit, the water depth is (2/3) × 0.60 = 0.40 m and the airspace to the crown is 0.60 − 0.40 = 0.20 m. That reserve is geometric; it does not guarantee ventilation or immunity from surcharge. With n unchanged, the same equations place the maximum of R and V near y/D ≈ 0.813, where V/V<sub>f</sub> ≈ 1.14, and the maximum discharge near y/D ≈ 0.938, where Q/Q<sub>f</sub> ≈ 1.076.</p>",
            "sources": [
              {
                "id": "CAP4-06-00053",
                "label": "pp. 24, 26; topic 6 point 51; topic 6 point 141"
              },
              {
                "id": "CAP4-06-00122",
                "label": "p. 26; topic 6 point 124"
              },
              {
                "id": "CAP4-06-00123",
                "label": "p. 26; topic 6 point 124"
              }
            ]
          },
          {
            "id": "self-cleansing-velocity-and-sewer-gradients",
            "title": "Self-cleansing velocity checks and choosing sewer gradients",
            "html": "<p>Sewers must transport solids as well as water. A <strong>self-cleansing velocity</strong> criterion guards against deposition at the assessed flow, and checking it is a continuity calculation, V = Q/A, using the actual wetted area. Worked example: with an adopted minimum of 0.75 m/s, Q = 0.30 m<sup>3</sup>/s through a wetted area of 0.50 m<sup>2</sup> gives V = 0.30/0.50 = 0.60 m/s, which fails. At the same discharge the wetted area would need to be at most 0.30/0.75 = 0.40 m<sup>2</sup>, subject to hydraulic feasibility. The 0.75 m/s value is the criterion adopted for that check, not a universal minimum required at every instant; self-cleansing also depends on the sediment, boundary shear and the chosen design-flow condition.</p><p>Gradient selection balances several limits. Following generally falling ground reduces excavation and pumping, so natural slope strongly influences alignment. The invert profile must still provide hydraulic capacity, avoid deposition at low flow, avoid excessive velocities and abrasion on steep reaches, keep adequate cover and meet the receiving outfall level. Drops or other structures may be needed where the ground falls faster than an acceptable sewer grade. Copying every ground-slope change, or choosing the steepest available grade to maximise velocity, is no substitute for a hydraulic check.</p>",
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
            "title": "Egg-shaped sewers and inverted siphons beneath obstacles",
            "html": "<p>A combined sewer may carry very small dry-weather flows and much larger storm flows. An <strong>egg-shaped sewer</strong>, narrow at the invert and wider above, addresses that range: the narrow lower portion concentrates low flow, giving greater depth and better transport conditions than a wide flat invert, while the larger upper section accommodates storm flow. This explains its traditional preference for combined systems. The shape does not keep wetted perimeter or hydraulic radius constant with depth, and it does not by itself guarantee self-cleansing or lowest cost: slope, sediment, construction and maintenance remain important.</p><p>Where a gravity sewer must pass below a river or another obstruction and rise to a downstream sewer, it can cross as a <strong>depressed sewer</strong>, traditionally called an <strong>inverted siphon</strong>. Its depressed barrels flow full and generally under pressure, driven by upstream head, so the available head must overcome the losses through the crossing. Despite the name it is not a true siphon, which carries water over a summit with the support of atmospheric pressure. Because solids can settle in the low barrels, cleaning access and performance at minimum flow are critical design concerns.</p>",
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
            "id": "manholes-depth-classes-covers-and-shape",
            "title": "Manholes: depth classes, cover specification and circular shape",
            "html": "<p>Manholes give access for inspection and cleaning. Textbooks classify them by depth; one conventional scheme calls manholes about 0.7–0.9 m deep <strong>shallow</strong>, so a 0.8 m chamber is shallow under that convention. Depth labels are convention-dependent and specify nothing about cover strength, safe access or gas conditions. No manhole is safe to enter merely because it is shallow: gas conditions and other confined-space hazards must be assessed before any entry.</p><p>A cover must suit its location. <strong>Cast iron</strong> is a conventional material, but ductile iron, reinforced concrete and other approved systems also exist. For a trafficked road the essential information is the verified <strong>load class</strong>, the dimensions and compatibility with the frame. The material name, casting mass, corrosion allowance or nominal diameter alone does not establish the load rating, secure seating or installation quality.</p><p>Covers are usually <strong>circular</strong> for a geometric reason. A circle has the same diameter in every direction across its plane, so a rigid round cover made slightly larger than the round opening it seats in has no narrower in-plane width to align with the hole and cannot fall through when turned. A square cover, by contrast, is longer across its diagonal than along its side. The benefit assumes intact, correctly matched components; a wrongly sized, broken or poorly supported cover remains dangerous.</p>",
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
        "cautions": [
          {
            "id": "caution-sanitary-sewage-independent-of-rain",
            "status": "review",
            "prompt": "Sanitary sewage is independent of rainfall.",
            "html": "<p>This holds only as a definition of sanitary generation. Real sanitary sewers receive groundwater infiltration, inflow through leaking manholes and illicit storm connections, so wet-weather peaks are common and must be investigated rather than assumed away.</p>",
            "sources": [
              {
                "id": "CAP4-06-00128",
                "label": "p. 26; topic 6 point 129"
              }
            ]
          },
          {
            "id": "caution-shallow-manhole-depth-band",
            "status": "review",
            "prompt": "A manhole is classified as shallow if its depth is between 0.7 and 0.9 m.",
            "html": "<p>This is attributed to a textbook convention, not an authenticated Nepal code definition. Depth classes say nothing about cover strength, safe access or gas conditions, and shallowness alone never authorises entry.</p>",
            "sources": [
              {
                "id": "CAP4-06-00055",
                "label": "p. 24; topic 6 point 53"
              }
            ]
          },
          {
            "id": "caution-combined-sewer-minimum-velocity",
            "status": "review",
            "prompt": "The velocity of sewage in a combined sewer should not be less than 0.75 m/s.",
            "html": "<p>0.75 m/s is used as an explicit exercise criterion, not a universal minimum required at every instant. Self-cleansing depends on the sediment, boundary shear and the design-flow condition chosen for the check.</p>",
            "sources": [
              {
                "id": "CAP4-06-00056",
                "label": "p. 24; topic 6 point 55"
              }
            ]
          },
          {
            "id": "caution-sewer-slope-follows-ground",
            "status": "review",
            "prompt": "The slope of a sewer is given in the direction of the natural slope of the ground.",
            "html": "<p>Natural ground slope is a useful alignment influence, not an exact mandatory pipe gradient. The invert must satisfy capacity, deposition and abrasion limits, cover and outfall level, sometimes with drops.</p>",
            "sources": [
              {
                "id": "CAP4-06-00057",
                "label": "p. 24; topic 6 point 56"
              }
            ]
          },
          {
            "id": "caution-manhole-cover-cast-iron-only",
            "status": "review",
            "prompt": "The cover of a manhole is made of cast iron.",
            "html": "<p>Cast iron is a common cover material, not the only permitted one; ductile iron, reinforced concrete and other approved systems exist. Suitability depends on verified load class, dimensions and frame compatibility.</p>",
            "sources": [
              {
                "id": "CAP4-06-00096",
                "label": "p. 25; topic 6 point 97"
              }
            ]
          },
          {
            "id": "caution-egg-shaped-sewer-best-for-combined",
            "status": "review",
            "prompt": "The egg-shaped sewer is best preferred for combined systems.",
            "html": "<p>The narrow invert helps small dry-weather flows and the wider top carries storm flow, which explains the traditional preference. Shape alone does not guarantee self-cleansing or lowest cost; slope, sediment, construction and maintenance still govern.</p>",
            "sources": [
              {
                "id": "CAP4-06-00119",
                "label": "p. 26; topic 6 point 120"
              }
            ]
          },
          {
            "id": "caution-two-thirds-full-design-rule",
            "status": "review",
            "prompt": "Sewers of 0.4 m to 0.9 m diameter are designed to run two-thirds full at maximum flow.",
            "html": "<p>This diameter-band rule has no identified applicable code and is not authenticated as a current Nepal prescription; it is used only as a stated exercise assumption. The resulting crown airspace is geometric, not guaranteed ventilation.</p>",
            "sources": [
              {
                "id": "CAP4-06-00122",
                "label": "p. 26; topic 6 point 124"
              }
            ]
          }
        ],
        "gaps": [
          "No wastewater quantity estimates, peak factors or infiltration allowances are provided, so design flows cannot be derived from these capsule points.",
          "Sewer materials, bedding, jointing and trench construction are not covered beyond manhole covers.",
          "Storm-sewer design and runoff estimation are absent from the capsule points for this topic.",
          "Manning roughness values and full-flow capacity calculations are not supplied; only dimensionless partial-flow ratios are derived.",
          "Appurtenances other than manholes and inverted siphons, such as drop manholes, flushing arrangements and sewer ventilation, are not described."
        ]
      },
      "ACiE0605": {
        "code": "ACiE0605",
        "questionCount": 39,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation and basis</th></tr></thead><tbody><tr><th scope='row'>Removal efficiency</th><td>E = (C<sub>in</sub> − C<sub>out</sub>)/C<sub>in</sub> for equal flows and no bypass; C<sub>out</sub>/C<sub>in</sub> is the fraction remaining</td></tr><tr><th scope='row'>Stages in series</th><td>fraction remaining = (1 − E<sub>1</sub>)(1 − E<sub>2</sub>); overall removal = E<sub>1</sub> + E<sub>2</sub>(1 − E<sub>1</sub>)</td></tr><tr><th scope='row'>Ideal grit path</th><td>settling time t = h/v<sub>s</sub>; horizontal travel L = v<sub>h</sub> × t</td></tr><tr><th scope='row'>Particle density</th><td>ρ<sub>p</sub> = SG × ρ<sub>w</sub>; density excess = ρ<sub>p</sub> − ρ<sub>w</sub></td></tr><tr><th scope='row'>Hydraulic loading</th><td>1 ML/ha/day = 0.1 m/day; A = (Q + Q<sub>R</sub>)/loading when the loading includes recirculation</td></tr><tr><th scope='row'>Streeter–Phelps deficit rate</th><td>dD/dt = K<sub>d</sub>L − K<sub>r</sub>D with natural-base coefficients; critical deficit where K<sub>d</sub>L = K<sub>r</sub>D; k<sub>e</sub> = 2.303 k<sub>10</sub></td></tr><tr><th scope='row'>Sludge dewatering</th><td>M<sub>2</sub> = M<sub>1</sub>(1 − w<sub>1</sub>)/(1 − w<sub>2</sub>), dry solids conserved, w = water fraction by mass</td></tr><tr><th scope='row'>Fixed and volatile residue</th><td>fixed fraction = residue after ignition/dry residue; volatile fraction = 1 − fixed fraction</td></tr><tr><th scope='row'>Septic tank</th><td>useful liquid volume = Q × t; internal height = liquid depth + freeboard</td></tr><tr><th scope='row'>Floor fall</th><td>fall = horizontal run × gradient; 1 in 10 gives run/10</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "sewage-terms-sullage-night-soil-and-fresh-sewage",
            "title": "Sewage terms: sullage, night soil and the pH of fresh sewage",
            "html": "<p>Traditional sanitation vocabulary separates wastes by origin. <strong>Sullage</strong> is domestic wastewater from kitchens, washing places, bathing and washbasins, excluding toilet excreta. It can still carry pathogens, grease and organic load, so it is not clean water. Some modern reuse rules exclude kitchen water from their definition of greywater, so the terminology and permitted reuse of any regulation must be checked separately. <strong>Night soil</strong> is the traditional term for collected human excreta, especially from systems without water-carriage sewers. The name refers neither to soil nor to collection after dark, and it does not imply stabilisation; collection, treatment and disposal still need health and environmental protection.</p><p>Fresh domestic sewage is commonly described as <strong>slightly alkaline</strong>, and a reading of pH 7.4 at 25 °C fits that description. pH is not alkalinity, however: <strong>total alkalinity</strong> is acid-neutralising capacity measured by titration and reported as a concentration, so a pH of 7.4 gives no alkalinity value in mg/L. Buffering does not make pH 7.4 equivalent to neutral pH 7. Source water, buffering and decomposition all change pH, so one reading establishes neither the freshness of the sewage nor completed stabilisation.</p>",
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
            "id": "organic-strength-bod-cod-and-ammoniacal-nitrogen",
            "title": "Organic strength indicators: BOD/COD ratios and ammoniacal nitrogen",
            "html": "<p><strong>BOD<sub>5</sub></strong> is the oxygen consumed by microorganisms degrading organic matter over five days; <strong>COD</strong> is the oxygen equivalent of the matter oxidised by a strong chemical oxidant. Their ratio indicates how much of the oxidisable load is readily biodegradable. For a comparable untreated domestic sample whose COD is 400 mg/L and BOD<sub>5</sub> is 240 mg/L, BOD<sub>5</sub>/COD = 240/400 = 0.60, inside the approximate 0.3–0.8 band quoted by the capsule and suggestive of a substantial biodegradable fraction. The ratio does not prove that all material is biodegradable or that nothing inhibits biological treatment, and it is not a discharge-compliance test.</p><p>Ratios can be inverted. For positive paired values, a COD/BOD<sub>5</sub> interval of 1.25–2.50 corresponds to BOD<sub>5</sub>/COD from 1/2.50 = 0.40 to 1/1.25 = 0.80, because reciprocals reverse the endpoints. This algebra cannot certify an unexplained wastewater category, and treatment itself changes the ratio.</p><p><strong>Ammoniacal nitrogen</strong> (NH<sub>3</sub> and NH<sub>4</sub><sup>+</sup>) forms when microorganisms decompose nitrogen-containing organic matter, a process called <strong>ammonification</strong>; industrial inputs and urea transformation can also contribute. Its presence therefore does not prove that all organic matter remains undecomposed. Nitrification converts ammonium onward to nitrate, and the NH<sub>3</sub>/NH<sub>4</sub><sup>+</sup> split depends on pH and temperature.</p>",
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
            "html": "<p><strong>Removal efficiency</strong> compares what was removed with what entered: E = (C<sub>in</sub> − C<sub>out</sub>)/C<sub>in</sub>, valid as a load ratio when influent and effluent flows are equal and nothing bypasses. If a pollutant falls from 500 to 10 mg/L, E = 490/500 = 0.98, or 98%. The ratio 10/500 = 2% is the fraction remaining, not the fraction removed. If flows differ, compute with pollutant loads, concentration × flow, instead of concentrations.</p><p>When stages operate in series, each efficiency applies to the load reaching <em>that</em> stage. The first stage passes a fraction (1 − E<sub>1</sub>) and the second passes (1 − E<sub>2</sub>) of that remainder, so the fraction leaving both is <strong>(1 − E<sub>1</sub>)(1 − E<sub>2</sub>)</strong> and overall removal is its complement, <strong>E<sub>1</sub> + E<sub>2</sub>(1 − E<sub>1</sub>)</strong>. Worked example for two trickling-filter stages removing 60% and then 50%: 40% of the original load leaves stage one, stage two removes half of that, another 20% of the original, and overall removal = 0.60 + 0.50 × 0.40 = 0.80. Adding the two percentages directly ignores their different incoming bases and here would even exceed 100%.</p>",
            "moreHtml": "<p><em>Scope of the formula:</em> the series expression is a mass-balance identity valid for any stages without bypass or added load. It is not a particular empirical design model for high-rate trickling filters.</p>",
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
            "id": "grit-chambers-settling-path-density-and-target-size",
            "title": "Grit chambers: settling path, grit density and target particle size",
            "html": "<p>A grit chamber slows the flow enough for dense mineral particles to settle while lighter organic matter stays in suspension. Two velocities must be kept distinct: the <strong>horizontal flow velocity</strong> carries a particle along the chamber, and its <strong>settling velocity</strong> carries it down. In an ideal chamber, a particle starting 1.0 m above the floor with v<sub>s</sub> = 0.020 m/s needs t = 1.0/0.020 = 50 s to settle; at a horizontal velocity of 0.30 m/s it travels 0.30 × 50 = 15 m meanwhile, so the chamber must be at least that long for this particle.</p><p>Idealised grit is modelled as quartz-like with specific gravity 2.65, so ρ<sub>p</sub> = 2.65 × 1,000 = 2,650 kg/m<sup>3</sup>. The density excess that drives settling is 2,650 − 1,000 = 1,650 kg/m<sup>3</sup>, which must not be confused with the particle density itself.</p><p>A target such as removing particles of 0.20 mm diameter and larger is a selected performance goal for sand-like grit under specified density and flow conditions, not an absolute physical cut-off. Finer dense particles may also settle, and larger low-density particles may escape; capture depends on settling velocity, density, shape and chamber hydraulics.</p>",
            "moreHtml": "<p><em>Real grit and real chambers:</em> practical design adds allowances for turbulence, flow variation and the capture requirement, and real grit mixes mineral particles of variable density with associated organics, so not every particle has exactly the idealised density.</p>",
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
            "html": "<p>A <strong>trickling filter</strong> is an attached-growth reactor: wastewater trickles over media that support a biofilm, while air passes through the voids. The medium must keep its strength, void space and drainage for years. <strong>Durable graded stone</strong> and engineered structured or random <strong>plastic packing</strong> meet those needs; loose untreated paper does not, because it softens, degrades and collapses, obstructing air and water flow. Despite its name, a trickling filter is not a straining or paper filter.</p><p><strong>Hydraulic loading</strong> is applied flow per unit plan area. Converting units: 1 ML = 1,000 m<sup>3</sup> and 1 ha = 10,000 m<sup>2</sup>, so 1 ML/ha/day = 1,000/10,000 = 0.1 m/day. A historical high-rate band of 110–330 ML/ha/day is therefore 11–33 m/day. Converting the band does not make it a universal limit for every stone or plastic medium or recirculation convention.</p><p>Always state whether a loading includes recirculation. If an adopted 22 m/day includes recycled flow, a filter receiving 1,200 m<sup>3</sup>/day of wastewater plus 1,000 m<sup>3</sup>/day of recirculation needs A = (1,200 + 1,000)/22 = 2,200/22 = 100 m<sup>2</sup>. Leaving out the recycle would understate the area on this basis, and organic loading requires a separate check.</p>",
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
            "id": "attached-and-suspended-growth-processes",
            "title": "Attached versus suspended growth: high-rate filter effluent and activated sludge",
            "html": "<p>Biological processes are classified by how the biomass is held. In a trickling filter the organisms grow attached to media; in the <strong>activated sludge process</strong> they are kept in <strong>suspension</strong> as flocs by mixing and aeration. Conventional activated sludge aerates the mixed liquor, separates the flocs in a secondary clarifier and returns a controlled portion of the settled biomass to the aeration tank. Aerobic conditions, suspended biomass and sludge return together identify it as <strong>aerobic suspended growth</strong>. Advanced variants may include anoxic or anaerobic zones, but the conventional aeration stage is aerobic. A septic tank, by contrast, is predominantly anaerobic settling and digestion, and chemical precipitation involves no biomass recycle.</p><p>High-rate trickling filters are loaded mainly for carbonaceous removal. Depending on loading, temperature, oxygen supply and media, they can remove much of the BOD without completely nitrifying, so appreciable ammonia may remain in the effluent. Effluent colour is not a reliable performance certificate: a brownish appearance neither proves nor disproves nitrification, and remaining ammonia does not show that the biofilm is wholly anaerobic. Sloughed biomass normally needs secondary clarification, and BOD, solids, ammonia and any other required endpoints should be measured directly.</p>",
            "sources": [
              {
                "id": "CAP4-06-00113",
                "label": "p. 26; topic 6 point 113; topic 6 point 131"
              },
              {
                "id": "CAP4-06-00097",
                "label": "p. 25; topic 6 point 98"
              }
            ]
          },
          {
            "id": "stream-self-purification-zones-and-dissolved-oxygen",
            "title": "Stream self-purification: pollution zones, dissolved-oxygen needs and biota",
            "html": "<p>A stream receiving a large biodegradable discharge shows a conventional textbook sequence of zones below the outfall: degradation, <strong>active decomposition</strong>, recovery and finally clean water. In the active decomposition zone, oxygen-demanding decay can exhaust dissolved oxygen and anaerobic decomposition takes over. The zonal sequence is an idealisation applied when the discharge context is known; a zero-DO reading alone cannot establish its cause or uniquely place a real reach within the sequence.</p><p>DO criteria are biological. Oxygen requirements and responses differ among organisms and life stages, as EPA's CADDIS material on dissolved oxygen explains, so a rounded 4 mg/L teaching benchmark cannot certify survival and healthy growth for every species. A daytime reading also says little about the predawn minimum; diurnal minima, temperature, exposure duration and other stressors need assessment.</p><p><strong>Self-purification</strong> depends on living organisms. Microbial degradation transforms pollutants, plant photosynthesis adds oxygen by day, and community respiration consumes oxygen continuously, including at night. These biological pathways interact with physical transport, dilution, temperature, reaeration and sediment. Two streams with equal discharge or turbulence can therefore behave differently when their microbial activity, plant cover and respiration differ, and more plant cover does not guarantee higher DO at night. Self-purification is neither independent of aquatic life nor a licence for untreated discharge.</p>",
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
            "html": "<p>The <strong>Streeter–Phelps model</strong> predicts the oxygen-sag curve downstream of a biodegradable discharge by combining two first-order processes. Deoxygenation consumes oxygen at a rate proportional to the remaining biochemical oxygen demand L, while <strong>reaeration</strong> restores oxygen at a rate proportional to the deficit D below saturation. With natural-base coefficients, <strong>dD/dt = K<sub>d</sub>L − K<sub>r</sub>D</strong>.</p><p>Worked example: with L = 10 mg/L, D = 2 mg/L, K<sub>d</sub> = 0.20/day and K<sub>r</sub> = 0.40/day, dD/dt = 0.20 × 10 − 0.40 × 2 = 2.0 − 0.8 = +1.2 mg/L/day. A growing deficit means DO is still falling, assuming constant saturation. Downstream, L decays and D grows until the two terms balance; that point, where K<sub>d</sub>L = K<sub>r</sub>D and dD/dt = 0, is the <strong>critical deficit</strong> at the bottom of the sag. Beyond it reaeration dominates and DO recovers.</p><p>The coefficient base matters. Base-10 coefficients are smaller than natural-base ones by the factor ln 10 ≈ 2.303, so they cannot be inserted unchanged into the natural-base equation. The basic model assumes specified rates and flow conditions; sediment oxygen demand, photosynthesis and nitrification need additional terms where important. It is a river-oxygen model, unrelated to surface-overflow settling, Hardy Cross network balancing or Manning uniform flow.</p>",
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
            "id": "sludge-solids-dewatering-and-vacuum-filters",
            "title": "Sludge solids: volatile fraction, dewatering mass balance and vacuum filters",
            "html": "<p>Dried sludge residue is split by ignition into <strong>fixed</strong> (remaining) and <strong>volatile</strong> (lost) fractions. If 1.00 g of dry residue leaves 0.35 g after method-controlled ignition near 550 °C, the fixed fraction is 35% and the volatile fraction is (1.00 − 0.35)/1.00 = 65%. EPA Method 160.4 (1971) supports ignition around 550 °C but warns that mineral changes complicate identifying fixed residue with inorganic matter and volatile residue with organic matter. Follow the chosen analytical method and its endpoint rather than a remembered time–temperature prescription.</p><p>Dewatering calculations conserve <strong>dry solids</strong>. Sludge of 1,000 kg at 95% water contains 1,000 × 0.05 = 50 kg of solids. At 90% water those 50 kg form 10% of the wet mass, so the new mass is 50/0.10 = 500 kg and 500 kg of water has been removed. Volume halves only if bulk density is assumed equal before and after; moisture percentages alone do not prove an exact 50% volume reduction.</p><p>A <strong>rotary vacuum filter</strong> dewaters sludge: vacuum draws liquid through a porous medium, discharging a wetter filtrate and retaining a solids-rich cake, which reduces handling volume. It does not digest or incinerate sludge, guarantee pathogen destruction or remove dissolved salts.</p>",
            "moreHtml": "<p><em>Fines and vacuum filtration:</em> useful throughput needs a permeable medium and cake. Very fine particles can pack into a cake of low permeability and blind the filter cloth unless conditioned or supplemented with filter aids, so suitability for fines depends on particle properties and trials rather than on the name of the method.</p>",
            "sources": [
              {
                "id": "CAP4-06-00058",
                "label": "p. 24; topic 6 point 57"
              },
              {
                "id": "CAP4-06-00127",
                "label": "p. 26; topic 6 point 128"
              },
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
            "html": "<p><strong>Anaerobic digestion</strong> of sludge and other organic waste produces a gas that is mainly methane mixed with a substantial fraction of carbon dioxide. Untreated gas of roughly 65% CH<sub>4</sub> and 35% CO<sub>2</sub> by volume is <strong>raw biogas</strong>; it has a sizeable noncombustible fraction, and it is neither pure methane nor aeration air. A carbon-dioxide share like the 32–43% quoted by the capsule fits raw biogas, not a universal upgraded-biomethane specification.</p><p><strong>Upgrading</strong> removes much of the CO<sub>2</sub> and other specified impurities to produce methane-rich <strong>biomethane</strong>. Comparing equal volumes of gas under identical reference conditions, removing non-methane components raises methane's share and generally the heating value per unit volume. Adding carbon dioxide, diluting with air or adding water vapour would lower the methane fraction, and raising gas pressure does not change composition. Declaring untreated gas to be biomethane does not make it so, and whether any product is acceptable for a particular gas grid or other use depends on use-specific quality requirements rather than on composition alone.</p>",
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
            "html": "<p>Land treatment applies sewage to soil and relies on soil processes and crops to remove pollutants, which works only while the soil stays permeable and aerated. Continuous or excessive application, especially of poorly treated sewage, deposits suspended solids and stimulates biological growth in the pores. Infiltration falls, water ponds on the surface, oxygen transfer into the soil declines and the soil becomes oxygen-deficient. This progressive clogging under overloading is called <strong>sewage sickness</strong>. It is a land-treatment failure, not a human infectious disease, and it is not a drying, cracking or clear-water erosion phenomenon.</p><p>Prevention and recovery follow from the mechanism: suitable pretreatment to reduce solids, loading control, intermittent application with <strong>resting</strong> or rotation between plots, and drainage. Increasing the loading or maintaining deeper continuous ponding worsens the condition, and crop nutrient deficiency is not its cause. Resting helps but is not a universal cure; a land-treatment site also needs soil, groundwater, crop and public-health assessment.</p>",
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
            "id": "septic-tank-detention-and-liquid-volume",
            "title": "Septic tanks: liquid detention, useful volume and a conflicting 30-minute value",
            "html": "<p>A <strong>septic tank</strong> settles solids from wastewater, stores sludge and scum and allows predominantly anaerobic digestion before the effluent is discharged for further treatment or disposal. Sizing separates components. The <strong>useful liquid volume</strong> provides detention for settling: with an explicit requirement of 24 hours at a daily flow of 1.2 m<sup>3</sup>, V = Q × t = 1.2 m<sup>3</sup>/day × 1 day = 1.2 m<sup>3</sup>. Sludge and scum storage and freeboard are added separately. The EPA Onsite Manual (2002), section 4.6.2, discusses a 24-hour liquid-detention sizing approach; it is a documented approach, not a universal Nepal design requirement.</p><p>The capsule elsewhere states that septic-tank detention is assumed to be 30 minutes. That conflicts with its own 24-hour point and is not adopted as a general septic-tank requirement; the same EPA section discusses much longer liquid-detention approaches. A proposal to swap a specified 24-hour detention for 30 minutes merely because some revision list prints that figure should be rejected in favour of a properly justified design basis. Counting freeboard as detention, assuming extra depth restores lost retention time, or substituting the desludging interval for the liquid-detention criterion does not rescue the substitution, and the stray value should not be silently reinterpreted as a grit-chamber figure.</p>",
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
            "id": "septic-depth-floor-falls-and-vip-latrine-vents",
            "title": "Septic-tank depth and floor falls, and ventilated pit latrine vents",
            "html": "<p>Septic-tank height combines components with different jobs. If a drawing sets the working liquid depth at 1.20 m and provides 0.30 m of freeboard, the minimum internal height to the underside of the roof is 1.20 + 0.30 = 1.50 m, ignoring roof and floor thicknesses. Freeboard provides no useful detention volume, and sludge storage, compartment geometry and structural details need their own checks. The 1.2 m depth is adopted for the exercise only; no current Nepal minimum-depth clause has been authenticated.</p><p>Floor details serve desludging. A floor sloped toward an inlet-end collection point directs settled solids toward where they are removed; it does not make sewage flow backward, because liquid flow and retention are governed by inlet and outlet levels and tank hydraulics. Some designs use other floor arrangements. If a drawing requires the floor to fall 1 in 10 (vertical to horizontal) toward the marked collection point across a 2.0 m run, the fall is 2.0/10 = 0.20 m, a 10% gradient. The arrow and the collection point define the direction; a word such as outward does not.</p><p>A <strong>ventilated improved pit (VIP) latrine</strong> controls odour and flies through airflow: air moves from the user space down through the pit and out through a vent pipe with a fly screen.</p>",
            "moreHtml": "<p><em>Checking a VIP vent:</em> vent diameter, height, wind exposure, siting and screen resistance all affect the airflow, so persistent odour calls for checking them against a suitable design rather than assuming that a quoted diameter such as 50 mm is universally adequate. A denser screen adds resistance, and a vent cut below roof level loses exposure to wind.</p>",
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
            "id": "hazardous-waste-criteria-segregation-and-steel-dust",
            "title": "Hazardous and industrial wastes: hazard criteria, segregation and steel dust",
            "html": "<p>Whether a waste is <strong>hazardous</strong> depends on hazard criteria such as ignitability, corrosivity, reactivity and toxicity, together with any applicable legal listings. <strong>Biodegradability</strong> describes whether a waste can be transformed, not whether it is safe: a readily biodegradable waste that is acutely toxic and highly flammable can still cause harm before or during degradation. The governing legal classification must be applied.</p><p>Hazardous waste must not be disposed of directly at an ordinary dump. When a hazardous industrial residue turns up mixed with refuse, the direction is to <strong>characterise</strong> it, <strong>segregate</strong> it compatibly and send it for authorised treatment and controlled disposal. Classifying the mixture by its larger nonhazardous fraction, or choosing a route from organic content or reduced volume alone, ignores the actual hazards; dumping, dilution or uncontrolled burning can transfer contaminants to air, soil and water.</p><p>Waste descriptions have two dimensions: composition and physical form. Dry dust captured from steel-manufacturing exhaust is predominantly <strong>inorganic</strong>, being rich in metals and metal oxides, and it is <strong>particulate</strong>. It is not inherently aqueous; wet scrubbing can turn it into a slurry, but dry collection does not. Inorganic does not mean harmless, so composition and leachability still require hazard assessment.</p>",
            "moreHtml": "<p><em>Composition is not an exemption:</em> an organic composition does not exempt a waste from hazard criteria, and choosing a biological treatment route does not make a separate ignitability assessment unnecessary.</p>",
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
        "cautions": [
          {
            "id": "caution-vacuum-filter-best-for-fines",
            "status": "review",
            "prompt": "A vacuum filter is most suitable for the removal of fines from liquid.",
            "html": "<p>Vacuum filtration needs a permeable medium and cake. Very fine particles can blind the cloth or need conditioning and filter aids, so suitability depends on particle properties and trials; it is not automatically the best separator for all fines.</p>",
            "sources": [
              {
                "id": "CAP4-06-00037",
                "label": "p. 24; topic 6 point 37"
              }
            ]
          },
          {
            "id": "caution-grit-velocity-statement-incomplete",
            "status": "review",
            "prompt": "Particles settle down in a grit chamber at a velocity of 0.3 m/s.",
            "html": "<p>The capsule point is grammatically incomplete and does not say which velocity 0.3 m/s represents. Horizontal flow velocity and particle settling velocity are different components, and the originally intended statement remains unresolved.</p>",
            "sources": [
              {
                "id": "CAP4-06-00041",
                "label": "p. 24; topic 6 point 40"
              }
            ]
          },
          {
            "id": "caution-high-rate-filter-loading-band",
            "status": "review",
            "prompt": "Hydraulic loading for a high-rate trickling filter varies between 110 and 330 ML per hectare per day.",
            "html": "<p>The band converts to 11–33 m/day and is retained as a historical conversion exercise. It is not a current design prescription or a universal limit for all media and recirculation conventions.</p>",
            "sources": [
              {
                "id": "CAP4-06-00048",
                "label": "p. 24; topic 6 point 47"
              }
            ]
          },
          {
            "id": "caution-ignition-at-550-for-15-minutes",
            "status": "review",
            "prompt": "Fixed inorganic solids in sludge are found at 550 ± 50 °C for 15 minutes.",
            "html": "<p>Ignition around 550 °C is supported by EPA Method 160.4 (1971), but the exact 550 ± 50 °C for 15 minutes prescription is not verified. Follow the chosen method and endpoint; mineral changes also complicate reading fixed residue as inorganic.</p>",
            "sources": [
              {
                "id": "CAP4-06-00058",
                "label": "p. 24; topic 6 point 57"
              }
            ]
          },
          {
            "id": "caution-septic-24-hour-detention",
            "status": "review",
            "prompt": "The detention time for a septic tank is 24 hours.",
            "html": "<p>A 24-hour liquid-detention approach is discussed in the EPA Onsite Manual (2002), section 4.6.2, but it is not a universal Nepal design requirement. Sludge and scum storage and freeboard are sized in addition to the detention volume.</p>",
            "sources": [
              {
                "id": "CAP4-06-00059",
                "label": "p. 24; topic 6 point 58"
              }
            ]
          },
          {
            "id": "caution-fresh-sewage-alkaline",
            "status": "review",
            "prompt": "The pH of fresh sewage is usually more than 7; fresh sewage is generally alkaline.",
            "html": "<p>This is a common qualitative description, not a universal rule. Source water, buffering and decomposition change pH, one reading proves neither freshness nor stabilisation, and alkalinity needs its own titration.</p>",
            "sources": [
              {
                "id": "CAP4-06-00062",
                "label": "p. 25; topic 6 point 61; topic 6 point 71"
              }
            ]
          },
          {
            "id": "caution-zero-do-means-active-decomposition",
            "status": "review",
            "prompt": "DO falling to zero in a natural drainage indicates the zone of active decomposition.",
            "html": "<p>In the idealised zonal sequence the active decomposition zone can reach zero DO, but a zero reading alone cannot establish its cause or uniquely locate a real reach; the waste-discharge context must be known.</p>",
            "sources": [
              {
                "id": "CAP4-06-00063",
                "label": "p. 25; topic 6 point 62"
              }
            ]
          },
          {
            "id": "caution-septic-thirty-minute-detention",
            "status": "corrected",
            "prompt": "The detention period in a septic tank is assumed to be 30 minutes.",
            "html": "<p>This conflicts with the capsule's own 24-hour septic-tank point and is not adopted as a general requirement. Documented septic sizing uses much longer liquid detention plus separate solids storage.</p>",
            "sources": [
              {
                "id": "CAP4-06-00065",
                "label": "p. 25; topic 6 point 64"
              }
            ]
          },
          {
            "id": "caution-four-mg-per-litre-do-universal",
            "status": "corrected",
            "prompt": "The minimum DO required for the survival of aquatic animals is 4 mg/L.",
            "html": "<p>EPA CADDIS explains that oxygen requirements differ among organisms and life stages. A rounded 4 mg/L benchmark is not a universal survival or growth guarantee; diurnal minima, temperature and exposure duration also matter.</p>",
            "sources": [
              {
                "id": "CAP4-06-00066",
                "label": "p. 25; topic 6 point 65"
              }
            ]
          },
          {
            "id": "caution-septic-minimum-depth",
            "status": "review",
            "prompt": "The minimum depth of a septic tank as per design consideration is 1.2 m.",
            "html": "<p>The 1.2 m depth is used only as an explicitly adopted exercise value; no current Nepal minimum-depth clause has been authenticated. Freeboard and sludge storage are separate from the operating liquid depth.</p>",
            "sources": [
              {
                "id": "CAP4-06-00067",
                "label": "p. 25; topic 6 point 66"
              }
            ]
          },
          {
            "id": "caution-bod-cod-ratio-band",
            "status": "review",
            "prompt": "The BOD/COD ratio of domestic wastewater before treatment is 0.3 to 0.8.",
            "html": "<p>This is an approximate band, not a universal domestic-sewage interval. Test conditions, inhibitory compounds and wastewater composition affect the ratio, which is neither a treatability guarantee nor a discharge-compliance test.</p>",
            "sources": [
              {
                "id": "CAP4-06-00071",
                "label": "p. 25; topic 6 point 69"
              }
            ]
          },
          {
            "id": "caution-grit-specific-gravity-fixed",
            "status": "review",
            "prompt": "Grit is inert matter of specific gravity 2.65.",
            "html": "<p>2.65 is an idealised quartz-like value for calculation. Real grit includes mineral particles of varying density and associated organics, so not every grit particle has exactly this density.</p>",
            "sources": [
              {
                "id": "CAP4-06-00073",
                "label": "p. 25; topic 6 point 72"
              }
            ]
          },
          {
            "id": "caution-degradable-not-hazardous",
            "status": "review",
            "prompt": "Degradability is not a characteristic of hazardous waste.",
            "html": "<p>Read this only as a distinction between degradability and hazard criteria. It does not show that degradable waste is safe: a biodegradable waste can still be ignitable, corrosive, reactive or toxic.</p>",
            "sources": [
              {
                "id": "CAP4-06-00075",
                "label": "p. 25; topic 6 point 74"
              }
            ]
          },
          {
            "id": "caution-grit-minimum-removable-size",
            "status": "review",
            "prompt": "The minimum size of grit particles that can be removed in a grit chamber is 0.20 mm.",
            "html": "<p>0.20 mm is a conventional design target for sand-like grit, not an absolute physical cut-off. Capture depends on density, shape, settling velocity and hydraulics, so a design should state an efficiency for a particle class and governing flow.</p>",
            "sources": [
              {
                "id": "CAP4-06-00076",
                "label": "p. 25; topic 6 point 75"
              }
            ]
          },
          {
            "id": "caution-cod-bod-ratio-detreated",
            "status": "review",
            "prompt": "The COD/BOD ratio of detreated domestic sewage is 1.25–2.5.",
            "html": "<p>The word detreated is unresolved, so the wastewater category is unknown. The reciprocal BOD/COD band of 0.40–0.80 is valid algebra but cannot authenticate that category or a universal range.</p>",
            "sources": [
              {
                "id": "CAP4-06-00088",
                "label": "p. 25; topic 6 point 87"
              }
            ]
          },
          {
            "id": "caution-free-ammonia-undecomposed-matter",
            "status": "corrected",
            "prompt": "The presence of free ammonia in wastewater represents undecomposed organic matter.",
            "html": "<p>Ammoniacal nitrogen forms through ammonification, the decomposition of organic nitrogen, and can also come from industrial sources and urea. It is not proof that organic matter remains exclusively undecomposed.</p>",
            "sources": [
              {
                "id": "CAP4-06-00093",
                "label": "p. 25; topic 6 point 94"
              }
            ]
          },
          {
            "id": "caution-vip-vent-fifty-millimetres",
            "status": "review",
            "prompt": "The diameter of the vent pipe used in a VIP latrine is 50 mm.",
            "html": "<p>The 50 mm prescription is unverified and not endorsed, and the applicable diameter guidance still needs reference review. Vent performance depends on airflow, dimensions, height, siting and fly-screen resistance.</p>",
            "sources": [
              {
                "id": "CAP4-06-00107",
                "label": "p. 26; topic 6 point 107"
              }
            ]
          },
          {
            "id": "caution-high-rate-effluent-brown",
            "status": "review",
            "prompt": "Effluent from a high-rate trickling filter is brown and not fully oxidised.",
            "html": "<p>The universal description is replaced by a conditional one: high-rate filters may remove carbon without complete nitrification, depending on loading, temperature, oxygen and media, and colour is not a performance test. See EPA's Trickling Filters fact sheet, September 2000.</p>",
            "sources": [
              {
                "id": "CAP4-06-00113",
                "label": "p. 26; topic 6 point 113; topic 6 point 131"
              }
            ]
          },
          {
            "id": "caution-self-purification-independent-of-biota",
            "status": "corrected",
            "prompt": "The self-purification process does not depend on aquatic species.",
            "html": "<p>Microbial degradation, photosynthesis and respiration shape pollutant transformation and oxygen balance, interacting with flow, temperature and reaeration, as EPA CADDIS describes. Self-purification depends on biota.</p>",
            "sources": [
              {
                "id": "CAP4-06-00117",
                "label": "p. 26; topic 6 point 118"
              }
            ]
          },
          {
            "id": "caution-steel-dust-inorganic-aqueous",
            "status": "corrected",
            "prompt": "Dust from steel manufacturing is an example of the inorganic aqueous waste category.",
            "html": "<p>Dry collected steel dust is predominantly inorganic particulate waste, not inherently aqueous; only wet scrubbing turns it into a slurry. Inorganic does not mean harmless, so leachability still needs assessment.</p>",
            "sources": [
              {
                "id": "CAP4-06-00125",
                "label": "p. 26; topic 6 point 126; topic 6 point 132"
              }
            ]
          },
          {
            "id": "caution-sludge-volume-halved",
            "status": "review",
            "prompt": "When sludge moisture is reduced from 95% to 90%, its volume is reduced by 50%.",
            "html": "<p>The mass result is exact when dry solids are conserved: the wet mass halves. The 50% volume reduction holds only if bulk density is assumed unchanged, and moisture percentages alone do not prove it.</p>",
            "sources": [
              {
                "id": "CAP4-06-00127",
                "label": "p. 26; topic 6 point 128"
              }
            ]
          },
          {
            "id": "caution-treatment-efficiency-point-nine",
            "status": "corrected",
            "prompt": "Treating sewage of 500 mg/L down to 10 mg/L gives an efficiency of 0.9.",
            "html": "<p>With equal flows and no bypass, removal efficiency is (500 − 10)/500 = 0.98, not 0.9. The 2% figure is the fraction remaining, not the fraction removed.</p>",
            "sources": [
              {
                "id": "CAP4-06-00130",
                "label": "p. 26; topic 6 point 133"
              }
            ]
          },
          {
            "id": "caution-biomethane-carbon-dioxide-share",
            "status": "corrected",
            "prompt": "In biomethane, the percentage of carbon dioxide is 32 to 43%.",
            "html": "<p>A CO<sub>2</sub> share of this size describes raw biogas from anaerobic digestion. Upgrading removes much of the CO<sub>2</sub> to produce methane-rich biomethane, and gas-quality requirements remain use-specific.</p>",
            "sources": [
              {
                "id": "CAP4-10-00186",
                "label": "p. 42; rural point 11"
              }
            ]
          },
          {
            "id": "caution-septic-slope-towards-inlet",
            "status": "review",
            "prompt": "In a septic tank, slope is given towards the inlet side.",
            "html": "<p>An inletward floor fall is a stated design detail that can aid solids removal, not a universal requirement. Site-specific fittings, sludge storage and desludging access determine the floor arrangement.</p>",
            "sources": [
              {
                "id": "CAP4-10-00198",
                "label": "p. 42; rural point 21"
              }
            ]
          },
          {
            "id": "caution-inlet-chamber-outward-slope",
            "status": "review",
            "prompt": "The bottom of the septic-tank sewage inlet chamber is laid with an outward slope of 1 in 10.",
            "html": "<p>The outward direction and the universal 1 in 10 claim lack a verified detail. Only an explicit drawing with a marked collection point defines the fall; the applicable septic standard and the original context still need checking.</p>",
            "sources": [
              {
                "id": "CAP4-10-00199",
                "label": "p. 42; rural point 22"
              }
            ]
          }
        ],
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
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation and basis</th></tr></thead><tbody><tr><th scope='row'>Expected annual loss</th><td>EAL = p × L, with p the annual probability of the event and L the loss per event, in a single-event model</td></tr><tr><th scope='row'>Risk reduction</th><td>ΔEAL = EAL<sub>before</sub> − EAL<sub>after</sub>; percentage reduction = ΔEAL/EAL<sub>before</sub> × 100%</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "purpose-of-eia-sea-and-the-sdgs",
            "title": "Why assess: the purpose of EIA, strategic assessment and the SDG context",
            "html": "<p><strong>Environmental impact assessment (EIA)</strong> is a systematic process for examining the likely environmental consequences of a proposed project or development before decisions are fixed. For a proposed wastewater outfall it compares alternatives, predicts downstream effects, designs mitigation and states residual impacts, so that the decision and the design can avoid harm before it is locked in. A sound EIA reports adverse and beneficial effects together with their uncertainties. Preparing the report does not guarantee approval, and it does not replace effluent compliance checks or the implementation and monitoring of its own commitments.</p><p><strong>Strategic environmental assessment (SEA)</strong> works one level higher. It evaluates policies, plans and programmes, such as a national water-sector policy, at a stage before particular schemes have been chosen, so alternatives and cumulative implications can be weighed at the strategic stage. Project EIA then assesses specific proposals. The two are related and complementary, but they are not interchangeable acronyms, and their legal requirements differ between jurisdictions.</p><p>The wider policy frame is the United Nations 2030 Agenda, with 17 <strong>Sustainable Development Goals</strong> and 169 targets; the earlier Millennium Development Goals numbered eight. Goal 6 concerns water and sanitation, yet water projects also interact with health, cities, ecosystems and other goals, which is one reason assessment looks beyond the construction site.</p>",
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
            "id": "nepal-environmental-instruments-and-study-categories",
            "title": "Nepal's environmental instruments: timeline and the BES, IEE and EIA categories",
            "html": "<p>Two historical instruments are easily confused. The <strong>National Environmental Impact Assessment Guidelines</strong> date from 1993. The <strong>Environment Protection Act 2053</strong> corresponds to 1997, and it was later repealed by section 47 of the <strong>Environment Protection Act 2076 (2019)</strong>. Neither older instrument is the current complete framework. Calling the 1997 Act the first environmental act does not claim that no earlier sectoral environmental legislation existed, while a statement that the Environment Act was first promulgated in 1993 confuses the guideline year with the Act.</p><p>Under the cited <strong>Environment Protection Rules (EPR) 2077</strong>, Rule 3 links three study categories to schedules: <strong>Brief Environmental Study (BES)</strong> to Schedule 1, <strong>Initial Environmental Examination (IEE)</strong> to Schedule 2 and <strong>Environmental Impact Assessment (EIA)</strong> to Schedule 3. They are separate categories for proposals falling under different schedules, not three names for one report and not consecutive studies that every proposal must pass through. Study categories also differ from workflow stages such as screening, reporting and monitoring. Counting process stages cannot establish the number of legal categories, and the capsule's unexplained reference to four levels is not a verified classification.</p>",
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
            "id": "screening-scoping-legal-triggers-and-participation",
            "title": "Choosing the study route: screening, scoping, legal triggers and public concerns",
            "html": "<p><strong>Screening</strong> comes first: it decides which route applies to a proposal, whether full EIA, a different study category or no EIA at all, using legal triggers and project context. Only then does <strong>scoping</strong> identify the significant issues and study boundaries for the required assessment. Under the cited EPR 2077, Rule 3 addresses category selection and Rule 4 formal EIA scoping, so describing scoping as the first step skips screening. Administrative workflows may group stages differently, but the logical order holds; post-approval monitoring and compliance auditing come much later.</p><p>The legal test is the set of effective <strong>schedule triggers</strong>: sector, scale, location, including sensitive areas, and other listed criteria. Large projects often require EIA, but calling a project large in a brochure is not the test, no universal project-cost threshold applies to every sector, and not every proposal passes through BES, then IEE, then EIA. Check Rule 3 and the effective schedules, including amendments; these notes supply no current numerical threshold.</p><p><strong>Public participation</strong> improves the assessment itself by revealing missing receptors, pathways and alternatives. If a draft leaves out downstream drinking-water users whom residents then point out, the final assessment must evaluate that concern, record how it was answered and amend the impact findings or mitigation where justified. The cited EPR 2077 Rules 6 and 7 connect public hearing and suggestions with report preparation.</p>",
            "moreHtml": "<p><em>What incorporating a concern means:</em> assessing it transparently and responding on the record. It does not require adopting every request, and it does not permit deferring relevant issues until after approval or excluding affected users because they live outside the construction boundary.</p>",
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
            "id": "toxicity-assessment-and-treatment-plant-noise",
            "title": "Assessing impacts: toxicity and dose–response, and noise from treatment plants",
            "html": "<p>Health risk assessment separates distinct tasks. <strong>Hazard identification</strong> asks whether an agent can cause a particular adverse effect. <strong>Toxicity or dose–response assessment</strong> estimates how the severity and probability of harm, such as liver injury, change with dose and exposure duration: in the capsule's words, how much of a substance does what kind of harm. <strong>Exposure assessment</strong> estimates who receives how much, by which route and for how long, and <strong>risk characterisation</strong> combines the evidence. Choosing controls and acceptable levels is <strong>risk management</strong>, a policy step informed by the assessment but distinct from it.</p><p>Impact scoping should follow the equipment and activities, not the phase of matter being treated. A wastewater plant treats liquid, yet its aeration blowers, motor-driven pumps, generators and handling equipment produce airborne noise and structure-borne vibration. Omitting noise because the plant treats liquid is therefore unjustified. The assessment should estimate sound levels, operating periods and nearby receptors and propose controls, while recognising that buried gravity sewers in quiet steady flow or units without operating machinery contribute little.</p>",
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
            "html": "<p>Hazard classification describes the physical process, while triggers and exposure are separate dimensions. <strong>Earthquakes</strong> and <strong>landslides</strong> are commonly grouped as geological or geophysical hazards, so an earthquake that triggers a slope failure blocking a road is a chain of two geological hazards. The road is the exposed asset; its presence neither makes the hazards technological nor turns the landslide into an exposure category. Landslides can also be triggered by rainfall or human disturbance, so multi-hazard interactions matter.</p><p><strong>Drought</strong> is a slow-onset climatic hazard. A prolonged dry spell lowers vegetation moisture and can strongly increase fire danger, and wildfire is often grouped with climatological hazards. Fire risk nevertheless reflects fuel condition, wind, ignition and land management as well as weather, so the taxonomy does not justify attributing every fire to climate alone. Drought also matters beyond water supply because vegetation moisture governs flammability.</p><p>Location statements need specifics. The capsule's remark that the recent disastrous earthquake occurred in the west gives no date, epicentre or magnitude, so no unique event can be identified from it. An exercise that sets its damaged water systems in <strong>Jajarkot</strong>, a district of Karnali Province, is placing them in western Nepal. Regional location guides coordination, but verified local damage, access and aftershock information remain essential.</p>",
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
            "html": "<p>In the disaster-risk terminology used by UNDRR, <strong>mitigation</strong> means lessening the adverse impacts of hazardous events. Retrofitting a weak water tank for earthquake loads ahead of any event is mitigation: it reduces susceptibility and potential consequences without preventing the earthquake itself. In general project risk management, treatments may address likelihood, consequences or both, which is why the capsule's risk-management definition mentions impact or likelihood. Emergency response after a failure and risk transfer that leaves the tank physically unchanged are different functions.</p><p>Risk reduction can be quantified. Under a one-event annual model, <strong>expected annual loss</strong> EAL = p × L. Before mitigation, p = 0.02 and L = Rs 1,000,000 give EAL = Rs 20,000 per year. After mitigation, p = 0.01 and L = Rs 600,000 give EAL = Rs 6,000 per year, a reduction of Rs 14,000, or 14,000/20,000 = 70%. The mitigation has clearly reduced risk, but whether Rs 6,000 per year is acceptable needs a separately justified criterion. Reaching a threshold is not part of the definition of mitigation: an intervention can reduce risk without meeting any particular acceptability level.</p>",
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
            "html": "<p><strong>Vulnerability analysis</strong> identifies who and what is susceptible to harm and how limited their coping capacity is. Surveying, before the flood season, which homes have weak walls and poor evacuation routes, in order to prioritise strengthening, supports <strong>pre-disaster mitigation and preparedness planning</strong>. It is not confined to one isolated phase of the disaster-management cycle: rebuilding, changing exposure and new evidence all call for reassessment. Mapping rainfall alone describes the hazard, not vulnerability, while search and rescue or damage and loss accounting are post-event functions.</p><p>National institutional roles in Nepal are set by the <strong>Disaster Risk Reduction and Management (DRRM) Act 2074</strong>. In the cited English publication incorporating the first amendment of 2075, section 2(k) identifies the <strong>Ministry of Home Affairs</strong>, the lead ministry for national disaster-risk governance. The National Council, the Executive Committee and the National Disaster Risk Reduction and Management Authority (NDRRMA) have distinct assigned functions, so naming the lead ministry does not mean that it alone performs every local, technical or operational task. No later amendment status is certified in these notes.</p>",
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
        "cautions": [
          {
            "id": "caution-no-noise-from-waste-treatment",
            "status": "corrected",
            "prompt": "Noise is not generated in waste treatment processes.",
            "html": "<p>Blowers, pumps, generators and handling equipment at treatment plants produce airborne noise and vibration. Liquid treatment is not silent, so noise belongs in the assessment with sound levels, operating periods, receptors and controls.</p>",
            "sources": [
              {
                "id": "CAP4-06-00070",
                "label": "p. 25; topic 6 point 68"
              }
            ]
          },
          {
            "id": "caution-vulnerability-analysis-only-mitigation",
            "status": "review",
            "prompt": "Vulnerability analysis comes in the mitigation part of the disaster management cycle.",
            "html": "<p>The mitigation association is retained, but vulnerability analysis also informs preparedness and must be repeated as rebuilding, exposure and evidence change. It is not confined to one isolated phase of the cycle.</p>",
            "sources": [
              {
                "id": "CAP4-06-00079",
                "label": "p. 25; topic 6 point 78"
              }
            ]
          },
          {
            "id": "caution-mitigation-to-threshold-level",
            "status": "corrected",
            "prompt": "Mitigation denotes reduction of risk to a threshold level.",
            "html": "<p>Mitigation reduces risk or its consequences, but reaching an acceptability threshold is not part of every mitigation outcome. Acceptability needs a separately justified criterion, as the residual expected-loss example shows.</p>",
            "sources": [
              {
                "id": "CAP4-06-00080",
                "label": "p. 25; topic 6 point 79"
              }
            ]
          },
          {
            "id": "caution-environment-act-first-1993",
            "status": "corrected",
            "prompt": "The Environment Act was first promulgated in 1993 AD.",
            "html": "<p>1993 is the year of the National EIA Guidelines. The historical Environment Protection Act 2053 dates from 1997 and was repealed by section 47 of the Environment Protection Act 2076 (2019).</p>",
            "sources": [
              {
                "id": "CAP4-06-00083",
                "label": "pp. 25, 26; topic 6 point 82; topic 6 point 140"
              }
            ]
          },
          {
            "id": "caution-drrm-lead-ministry-edition",
            "status": "review",
            "prompt": "The Ministry of Home Affairs is related to national disaster risk management.",
            "html": "<p>This matches section 2(k) of the cited DRRM Act 2074 English publication incorporating the 2075 first amendment; no later status is certified. The Council, Executive Committee and NDRRMA hold distinct functions.</p>",
            "sources": [
              {
                "id": "CAP4-06-00087",
                "label": "p. 25; topic 6 point 86"
              }
            ]
          },
          {
            "id": "caution-scoping-is-first-step",
            "status": "corrected",
            "prompt": "The first step involved in EIA is scoping.",
            "html": "<p>Screening first decides whether EIA, another study category or no EIA is required; scoping then defines the issues for the required study. EPR 2077 Rule 3 addresses category selection and Rule 4 formal EIA scoping.</p>",
            "sources": [
              {
                "id": "CAP4-06-00089",
                "label": "p. 25; topic 6 point 88"
              }
            ]
          },
          {
            "id": "caution-forest-fire-and-drought-climatic",
            "status": "review",
            "prompt": "Forest fire and drought lie in the climatic hazard category.",
            "html": "<p>The broad grouping is retained, but wildfire risk also depends on fuel condition, wind, ignition and land management. Drought is climatic; individual fires are not attributable to climate alone.</p>",
            "sources": [
              {
                "id": "CAP4-06-00092",
                "label": "p. 25; topic 6 point 93"
              }
            ]
          },
          {
            "id": "caution-stakeholder-concerns-excluded",
            "status": "corrected",
            "prompt": "All relevant stakeholder concerns are not included in the EIA report.",
            "html": "<p>Relevant concerns must be assessed, with the response documented and impacts or mitigation revised where warranted. EPR 2077 Rules 6 and 7 connect public hearing and suggestions with report preparation.</p>",
            "sources": [
              {
                "id": "CAP4-06-00110",
                "label": "p. 26; topic 6 point 110"
              }
            ]
          },
          {
            "id": "caution-four-levels-of-eia",
            "status": "review",
            "prompt": "Environmental impact assessment has four types of level.",
            "html": "<p>The capsule's intended four-level taxonomy is unidentified. The cited EPR 2077 Rule 3 names three study categories, BES, IEE and EIA, linked to Schedules 1, 2 and 3; process stages are a different classification.</p>",
            "sources": [
              {
                "id": "CAP4-06-00115",
                "label": "p. 26; topic 6 point 116"
              }
            ]
          },
          {
            "id": "caution-recent-earthquake-in-west",
            "status": "review",
            "prompt": "The recent disastrous earthquake occurred in western Nepal.",
            "html": "<p>The capsule gives no date, epicentre or magnitude, so its intended event cannot be verified. The Jajarkot scenario used in these notes is an explicitly authored location, not a reconstruction of the capsule's event.</p>",
            "sources": [
              {
                "id": "CAP4-06-00116",
                "label": "p. 26; topic 6 point 117"
              }
            ]
          },
          {
            "id": "caution-eia-mandatory-for-large-projects",
            "status": "review",
            "prompt": "Environmental Impact Assessment is mandatory for large projects.",
            "html": "<p>Large projects often require EIA, but the legal test is the effective schedule triggers of sector, scale and location under EPR 2077 Rule 3 and its amendments, not the adjective large. No current numerical threshold is supplied.</p>",
            "sources": [
              {
                "id": "CAP4-06-00120",
                "label": "p. 26; topic 6 point 121"
              }
            ]
          }
        ],
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
