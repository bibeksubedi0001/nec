(function () {
    "use strict";
    window.CIVIL_CAPSULE_NOTE_TOPICS = window.CIVIL_CAPSULE_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_CAPSULE_NOTE_TOPICS, {
      "ACiE0201": {
        "code": "ACiE0201",
        "questionCount": 26,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation</th></tr></thead><tbody><tr><th scope='row'>Water content</th><td>w = M<sub>w</sub>/M<sub>s</sub>, with dry solids in the denominator</td></tr><tr><th scope='row'>Degree of saturation</th><td>S = V<sub>w</sub>/V<sub>v</sub>; air content V<sub>a</sub>/V<sub>v</sub> = 1 − S</td></tr><tr><th scope='row'>Phase identity</th><td>Se = wG<sub>s</sub>; when S = 1, e = wG<sub>s</sub></td></tr><tr><th scope='row'>Dry density</th><td>ρ<sub>d</sub> = ρ/(1 + w)</td></tr><tr><th scope='row'>Specific gravity of solids</th><td>G<sub>s</sub> = mass of dry solids/mass of water they displace</td></tr><tr><th scope='row'>Grading coefficients</th><td>C<sub>u</sub> = D<sub>60</sub>/D<sub>10</sub>; C<sub>c</sub> = D<sub>30</sub><sup>2</sup>/(D<sub>10</sub>D<sub>60</sub>)</td></tr><tr><th scope='row'>Plasticity</th><td>PI = LL − PL; A-line PI = 0.73(LL − 20)</td></tr><tr><th scope='row'>Constant head</th><td>k = VL/(Aht)</td></tr><tr><th scope='row'>Falling head</th><td>k = (aL/At) ln(h<sub>1</sub>/h<sub>2</sub>)</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "phase-relationships",
            "title": "Phase relationships: water content, saturation and the Se = wG identity",
            "html": "<p>A soil mass is modelled as three phases: solid grains, pore water and pore air. The void volume V<sub>v</sub> is the sum of the water and air volumes. Two ratios are easily confused because they use different denominators. <strong>Water content</strong> w = M<sub>w</sub>/M<sub>s</sub> divides the mass of water by the mass of dry solids, not by the moist mass. <strong>Degree of saturation</strong> S = V<sub>w</sub>/V<sub>v</sub> divides the water volume by the void volume; the air content V<sub>a</sub>/V<sub>v</sub> is its complement.</p><p>Worked checks: a specimen that loses 48 g of water on oven drying and leaves 192 g of solids has w = 48/192 = 0.25, or 25%; dividing by the moist 240 g gives the incorrect 20%. Voids of 40 cm<sup>3</sup> containing 10 cm<sup>3</sup> of air hold 30 cm<sup>3</sup> of water, so S = 30/40 = 75%, while the air content is 25%.</p><p>The identity <strong>Se = wG<sub>s</sub></strong> links the four quantities, with S and w entered as decimals. With e = 0.81, G<sub>s</sub> = 2.70 and w = 0.30, S = (0.30 × 2.70)/0.81 = 1.00, a fully saturated state. Conversely, a saturated soil with w = 0.24 and G<sub>s</sub> = 2.75 has e = 0.24 × 2.75 = 0.66.</p>",
            "moreHtml": "<p>The identity follows directly from the definitions. Since w = M<sub>w</sub>/M<sub>s</sub> = V<sub>w</sub>ρ<sub>w</sub>/(V<sub>s</sub>G<sub>s</sub>ρ<sub>w</sub>), the product wG<sub>s</sub> equals V<sub>w</sub>/V<sub>s</sub>, which is (V<sub>w</sub>/V<sub>v</sub>)(V<sub>v</sub>/V<sub>s</sub>) = Se. The void ratio therefore equals the water content only when G<sub>s</sub> happens to be 1; in general a saturated soil has e = wG<sub>s</sub>. Entering w as 24 instead of 0.24 inflates e a hundredfold.</p>",
            "sources": [
              {
                "id": "CAP4-02-00002",
                "label": "p. 6; topic 2 point 2"
              },
              {
                "id": "CAP4-02-00004",
                "label": "p. 6; topic 2 point 4"
              },
              {
                "id": "CAP4-02-00020",
                "label": "p. 6; topic 2 point 17"
              },
              {
                "id": "CAP4-02-00150",
                "label": "p. 10; topic 2 point 132"
              }
            ]
          },
          {
            "id": "density-tests",
            "title": "Bulk, dry and particle density: core cutter and density bottle",
            "html": "<p>Three densities describe different things. <strong>Bulk density</strong> ρ = M/V is the moist mass per unit total volume; <strong>dry density</strong> ρ<sub>d</sub> = ρ/(1 + w) counts only the solids; and the <strong>specific gravity of solids</strong> G<sub>s</sub> compares the grains themselves with water.</p><p>The <strong>core cutter</strong> measures in-situ bulk density: a cylinder of known volume is driven into the ground and the recovered soil is weighed. A 1000 cm<sup>3</sup> cutter holding 1800 g of moist soil gives ρ = 1.80 g/cm<sup>3</sup>; at w = 0.20 the dry density is 1.80/1.20 = 1.50 g/cm<sup>3</sup>. The method needs soil that can be cut as a representative undisturbed core, so gravelly or very hard ground is unsuitable.</p><p>The <strong>density bottle</strong> gives particle specific gravity by comparing the mass of dry solids with the mass of water they displace. Solids of 50 g displacing 20 g of water give G<sub>s</sub> = 50/20 = 2.50. Entrapped air must be removed first, and the result describes the grains, not the bulk density of a porous soil mass.</p>",
            "sources": [
              {
                "id": "CAP4-02-00019",
                "label": "p. 6; topic 2 point 16"
              },
              {
                "id": "CAP4-02-00024",
                "label": "p. 7; topic 2 point 21"
              }
            ]
          },
          {
            "id": "consistency-limits",
            "title": "Consistency states, Atterberg limits and the three-phase model",
            "html": "<p>A remoulded fine-grained soil passes through four <strong>consistency states</strong> as its water content rises: solid, semi-solid, plastic and liquid. The boundaries between them are water contents called the <strong>shrinkage limit</strong> (solid to semi-solid), the <strong>plastic limit</strong> (semi-solid to plastic) and the <strong>liquid limit</strong> (plastic to liquid). The plasticity index PI = LL − PL is the water-content range over which the soil stays plastic.</p><p>The four states describe mechanical response, not the number of physical constituents. An unsaturated soil described as plastic still has three phases: solids, water and air. Only dry or fully saturated soil reduces to two.</p><p>Below the shrinkage limit, further drying produces no further volume reduction in the standard idealization. Water continues to leave and air takes its place, so constant volume does not mean the pat is already oven dry. The plastic limit is found by rolling and kneading a soil thread until it crumbles; the water content at the prescribed crumbling endpoint marks the semi-solid/plastic boundary.</p>",
            "moreHtml": "<p>Archived IS 2720 Part 5:1985 clause 7.3 sets the endpoint for a thread that crumbles after having been rolled to 3 mm diameter, and accepts crumbling at a diameter above 3 mm when the thread has just been rolled to 3 mm. The operator must not force failure at exactly 3 mm. Other standards can use different nominal diameters, and no current adoption of this edition is implied.</p>",
            "sources": [
              {
                "id": "CAP4-02-00015",
                "label": "p. 6; topic 2 point 13"
              },
              {
                "id": "CAP4-02-00016",
                "label": "p. 6; topic 2 point 13"
              },
              {
                "id": "CAP4-02-00008",
                "label": "p. 6; topic 2 point 7"
              },
              {
                "id": "CAP4-02-00170",
                "label": "p. 10; topic 2 point 150"
              }
            ]
          },
          {
            "id": "sieve-boundary-fines",
            "title": "The 75 micrometre sieve: fines fraction, size names and behaviour",
            "html": "<p>The 75 µm sieve (0.075 mm, No. 200) separates the coarse fraction from the <strong>fines</strong>. Fines are the material that passes this sieve, not what it retains. USCS classifies the whole soil from the mass fraction, not from a single grain: when more than half of the dry mass passes, the soil is fine-grained; otherwise it is coarse-grained. A sample with 62% passing is therefore fine-grained, and its fines are the passing portion.</p><p>A sieve result gives the amount of fines but not their behaviour. A sand with 8% passing has a known fines content, yet whether those fines are silty or clayey is decided only by plasticity testing. For an intermediate fines content like this, USCS assigns a dual symbol that reflects both the grading of the sand and the plasticity of its fines.</p><p>Size names and behavioural symbols are separate ideas. On an IS-style size scale with a 0.075 mm sand–fines boundary, a 0.06 mm particle is silt-sized. That size description does not establish a USCS M symbol, which depends on plasticity and organic identification, and other classification systems place their size boundaries differently.</p>",
            "sources": [
              {
                "id": "CAP4-02-00011",
                "label": "p. 6; topic 2 point 9"
              },
              {
                "id": "CAP4-02-00023",
                "label": "p. 7; topic 2 point 20"
              },
              {
                "id": "CAP4-02-00018",
                "label": "p. 6; topic 2 point 15"
              }
            ]
          },
          {
            "id": "grading-coefficients",
            "title": "Uniformity and curvature coefficients and the SW or SP decision",
            "html": "<p>A grading curve plots percentage finer by mass against particle size. D<sub>10</sub>, D<sub>30</sub> and D<sub>60</sub> are the particle sizes below which 10%, 30% and 60% of the mass lies; they are not percentages retained. Two dimensionless ratios describe the curve: <strong>C<sub>u</sub> = D<sub>60</sub>/D<sub>10</sub></strong> measures the spread of sizes, and <strong>C<sub>c</sub> = D<sub>30</sub><sup>2</sup>/(D<sub>10</sub>D<sub>60</sub>)</strong> checks that intermediate sizes are adequately represented.</p><p>For a clean sand, USCS calls the grading well graded (SW) only when both conditions hold together: C<sub>u</sub> of at least 6 and C<sub>c</sub> between 1 and 3. Failing either one gives poorly graded sand (SP). The letters C and M describe fines behaviour and cannot express a failed grading ratio.</p><ul><li>D<sub>10</sub> = 0.12 mm and D<sub>60</sub> = 0.84 mm give C<sub>u</sub> = 0.84/0.12 = 7.0; inverting the ratio gives 0.143.</li><li>C<sub>u</sub> = 7 with C<sub>c</sub> = 0.6 passes the spread check but fails the curvature check, so the sand is SP.</li><li>D<sub>10</sub> = 0.10 mm, D<sub>30</sub> = 0.40 mm and D<sub>60</sub> = 0.80 mm give C<sub>c</sub> = 0.16/0.08 = 2 and C<sub>u</sub> = 8, so both checks pass and the sand is SW.</li></ul>",
            "sources": [
              {
                "id": "CAP4-02-00012",
                "label": "p. 6; topic 2 point 10"
              },
              {
                "id": "CAP4-02-00013",
                "label": "p. 6; topic 2 point 11"
              },
              {
                "id": "CAP4-02-00014",
                "label": "p. 6; topic 2 point 12"
              }
            ]
          },
          {
            "id": "plasticity-chart-fine-soils",
            "title": "Fine-grained soils on the plasticity chart: A-line, L or H, and organic identification",
            "html": "<p>The USCS plasticity chart plots plasticity index against liquid limit, and two separate decisions are read from it. The <strong>A-line</strong>, PI = 0.73(LL − 20), separates clay-like behaviour above it from silt-like behaviour below it. The liquid-limit boundary at LL = 50% separates low plasticity (L) from high plasticity (H). A position relative to the A-line therefore says nothing by itself about L or H, and nothing about organic content.</p><p>Worked case: an inorganic fine soil with LL = 60% and PI = 20% has an A-line ordinate of 0.73(60 − 20) = 29.2%. The PI lies below it, so the behaviour is silty (M); LL exceeds 50%, so the second letter is H. The stated inorganic condition rules out OH, giving MH.</p><p>An organic symbol needs positive evidence of organic origin. USCS organic identification includes the effect of oven drying on the liquid limit, together with the relevant identification procedure. A liquid limit above the L/H boundary, a grading entirely finer than the fines sieve or a natural water content above the plastic limit cannot substitute for that evidence.</p>",
            "sources": [
              {
                "id": "CAP4-02-00005",
                "label": "p. 6; topic 2 point 5"
              },
              {
                "id": "CAP4-02-00006",
                "label": "p. 6; topic 2 point 5"
              }
            ]
          },
          {
            "id": "sands-with-plastic-fines",
            "title": "Coarse soils with plastic fines: arriving at the SC symbol",
            "html": "<p>A coarse-grained soil is classified in a fixed order. First decide whether gravel or sand dominates the coarse fraction, which sets the first letter G or S. Then consider the amount of fines. When fines exceed 12% of the dry mass, the second letter comes from fines behaviour rather than grading: fines above the A-line with PI greater than 7% are clayey (C), whereas silty fines give M.</p><p>Worked case: a soil with 70% sand, 5% gravel and 25% fines has a coarse fraction of 75%, mostly sand, so the first letter is S. Its inorganic fines have LL = 40% and PI = 20%. The A-line ordinate at LL = 40 is 0.73(40 − 20) = 14.6%, which the PI exceeds, so the fines are clayey and the soil is <strong>SC</strong>, a clayey sand. Calling it CL would wrongly classify the whole soil by its fines alone.</p><p>A sand-dominated soil with 20% fines of PI 15% plotting above the A-line is likewise SC. Such figures avoid the intermediate-fines and borderline-plasticity cases, which call for dual symbols.</p>",
            "sources": [
              {
                "id": "CAP4-02-00003",
                "label": "p. 6; topic 2 point 3"
              },
              {
                "id": "CAP4-02-00135",
                "label": "p. 9; topic 2 point 121"
              }
            ]
          },
          {
            "id": "permeability-tests",
            "title": "Laboratory permeability: constant-head and falling-head tests",
            "html": "<p>Both tests apply Darcy's law to a saturated specimen of length L and cross-sectional area A, but they suit different soils. The <strong>constant-head test</strong> keeps the head loss h fixed and collects a volume V in time t; for steady, saturated laminar flow, k = VL/(Aht). Coarse soils give conveniently measurable discharge for this method.</p><p>Worked case: 120 cm<sup>3</sup> collected in 60 s through a specimen 10 cm long and 20 cm<sup>2</sup> in area under a 30 cm head loss gives k = (120 × 10)/(20 × 30 × 60) = 1200/36000 = 0.0333 cm/s. The collected volume must be related to its collection time before substituting.</p><p>A low-permeability specimen yields too little water for convenient collection at constant head. The <strong>falling-head test</strong> watches the level fall in a small standpipe of area a, which turns a small volume into an observable head change. Integrating Darcy's law between heads h<sub>1</sub> and h<sub>2</sub> over time t gives k = (aL/At) ln(h<sub>1</sub>/h<sub>2</sub>). Full saturation, leakage control and suitable equipment are essential, particularly for very low-permeability clays.</p>",
            "moreHtml": "<p>Derivation: while the standpipe level h falls, the inflow −a dh/dt equals the Darcy discharge kAh/L through the specimen. Separating variables gives −dh/h = [kA/(aL)] dt. Integrating from h<sub>1</sub> at the start to h<sub>2</sub> after time t gives ln(h<sub>1</sub>/h<sub>2</sub>) = kAt/(aL), which rearranges to the falling-head expression.</p>",
            "sources": [
              {
                "id": "CAP4-02-00029",
                "label": "p. 7; topic 2 point 26"
              },
              {
                "id": "CAP4-02-00030",
                "label": "p. 7; topic 2 point 27"
              }
            ]
          },
          {
            "id": "retained-water",
            "title": "Water left after gravity drainage: adsorbed films and capillary water",
            "html": "<p>After free gravitational water has drained, a soil still holds water by two different mechanisms. <strong>Adsorbed film water</strong> is held close to particle surfaces by molecular attraction; the older term <strong>pellicular water</strong> refers to these surface-associated films. <strong>Capillary water</strong> is held in small pores by surface tension acting at curved air–water menisci.</p><p>Both resist gravity drainage, but they are different mechanisms, so it is inaccurate to describe all retained water as adsorbed film water. Water left after drainage is not necessarily bound chemically in minerals, gravity drainage does not empty every small pore, and no artesian pressure is needed to keep that water in place.</p><p>Terminology varies between texts, so a description of the physical retention mechanism is more useful than the label alone. A thin film clinging to grains points to surface attraction; water filling small pores against gravity points to capillarity as well.</p>",
            "sources": [
              {
                "id": "CAP4-02-00109",
                "label": "p. 9; topic 2 point 99"
              },
              {
                "id": "CAP4-02-00110",
                "label": "p. 9; topic 2 point 99"
              }
            ]
          },
          {
            "id": "dark-organic-soils",
            "title": "Dark, organic and expansive soils: why colour is not a classification",
            "html": "<p>Colour is a description, not a test result. Kathmandu Valley contains varied lacustrine and alluvial deposits, and a dark sample from one site cannot be declared expansive black cotton soil or organic soil from its colour or its location. Expansive behaviour depends on clay mineralogy and organic classification depends on organic-content evidence, so both need site-specific sampling, index tests and organic-content investigation. A lake-deposit origin does not establish low compressibility either.</p><p>Once an investigation confirms a soft organic layer, its mechanical behaviour becomes a design concern in its own right. Organic soils can be highly compressible and can continue to creep after primary consolidation, so a fill placed over such a layer may produce large compression followed by continuing secondary settlement. A dark mineral clay nearby may behave quite differently.</p><p>The lesson runs both ways: dark colour does not prove an organic or expansive soil, and a confirmed organic layer is not made safe by being wet or by any assumed organic bonding. The design follows the measured organic content and mechanical behaviour.</p>",
            "sources": [
              {
                "id": "CAP4-02-00009",
                "label": "p. 6; topic 2 point 8"
              },
              {
                "id": "CAP4-02-00010",
                "label": "p. 6; topic 2 point 8"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-below-a-line-not-organic",
            "status": "corrected",
            "prompt": "Soil plotting below the A-line is organic, high plasticity or low plasticity",
            "html": "<p>The capsule point mixes three separate chart decisions. A position below the A-line indicates silt-like (M) behaviour; the L or H letter comes from the liquid limit relative to 50%; and an organic symbol needs organic-identification evidence. Below-A-line position alone establishes neither low plasticity nor organic content.</p>",
            "sources": [
              {
                "id": "CAP4-02-00005",
                "label": "p. 6; topic 2 point 5"
              }
            ]
          },
          {
            "id": "caution-kathmandu-soil-by-colour",
            "status": "corrected",
            "prompt": "Soils of Kathmandu Valley are black cotton and organic",
            "html": "<p>This generalization is rejected. The valley contains varied lacustrine and alluvial deposits, and colour or location cannot identify expansive black cotton soil or organic soil. Mineralogical, index and organic-content investigations at the site are needed.</p>",
            "sources": [
              {
                "id": "CAP4-02-00009",
                "label": "p. 6; topic 2 point 8"
              }
            ]
          },
          {
            "id": "caution-fines-pass-the-sieve",
            "status": "corrected",
            "prompt": "A soil grain is fine-grained if it is retained on the 75 micron sieve",
            "html": "<p>The capsule reverses passing and retained material. Fines pass the 75 µm (0.075 mm) sieve, and USCS classifies the whole soil from the mass fraction passing: more than half passing makes it fine-grained. A single grain is never the basis of the classification.</p>",
            "sources": [
              {
                "id": "CAP4-02-00011",
                "label": "p. 6; topic 2 point 9"
              }
            ]
          },
          {
            "id": "caution-well-graded-needs-cc",
            "status": "corrected",
            "prompt": "Well-graded sand has a uniformity coefficient greater than 6",
            "html": "<p>The capsule omits the simultaneous curvature requirement. A clean sand is SW only when C<sub>u</sub> is at least 6 and C<sub>c</sub> lies between 1 and 3; the C<sub>u</sub> boundary is conventionally stated as at least 6 rather than strictly greater than 6.</p>",
            "sources": [
              {
                "id": "CAP4-02-00013",
                "label": "p. 6; topic 2 point 11"
              }
            ]
          },
          {
            "id": "caution-four-states-not-phases",
            "status": "review",
            "prompt": "Soil exists in four states",
            "html": "<p>The statement is acceptable only as four consistency states: solid, semi-solid, plastic and liquid. It does not mean four phases, because an unsaturated soil has three constituents, namely solids, water and air.</p>",
            "sources": [
              {
                "id": "CAP4-02-00016",
                "label": "p. 6; topic 2 point 13"
              }
            ]
          },
          {
            "id": "caution-silt-size-limit-system",
            "status": "review",
            "prompt": "The maximum size of silt grains is about 0.075 mm",
            "html": "<p>The 0.075 mm upper silt limit belongs to classification systems that use that sand–fines boundary, such as an IS-style scale. Not every system uses it, and a size name never replaces the plasticity-based USCS behavioural symbol.</p>",
            "sources": [
              {
                "id": "CAP4-02-00018",
                "label": "p. 6; topic 2 point 15"
              }
            ]
          },
          {
            "id": "caution-void-ratio-equals-wg",
            "status": "corrected",
            "prompt": "In the fully saturated state the void ratio equals the water content with specific gravity",
            "html": "<p>The capsule wording is incomplete. At full saturation the void ratio equals the product wG<sub>s</sub>, from Se = wG<sub>s</sub> with S = 1. Void ratio equals water content alone only if G<sub>s</sub> happens to be 1.</p>",
            "sources": [
              {
                "id": "CAP4-02-00020",
                "label": "p. 6; topic 2 point 17"
              }
            ]
          },
          {
            "id": "caution-pellicular-water-scope",
            "status": "corrected",
            "prompt": "All pore water that gravity drainage cannot remove is pellicular water",
            "html": "<p>The capsule overextends the term. Pellicular water is the surface-associated film retained by molecular attraction, but capillary menisci in small pores also hold water against gravity. Both mechanisms contribute to the water retained after drainage.</p>",
            "sources": [
              {
                "id": "CAP4-02-00109",
                "label": "p. 9; topic 2 point 99"
              }
            ]
          },
          {
            "id": "caution-plastic-limit-endpoint",
            "status": "review",
            "prompt": "Plastic limit is the water content at which a 3 mm thread just begins to crumble",
            "html": "<p>The definition is retained with the qualification of archived IS 2720 Part 5:1985 clause 7.3: crumbling above 3 mm is accepted when the thread has just been rolled to 3 mm, and failure should not be forced at exactly that diameter. Other standards can use different nominal diameters, and no current adoption claim is made.</p>",
            "sources": [
              {
                "id": "CAP4-02-00170",
                "label": "p. 10; topic 2 point 150"
              }
            ]
          }
        ],
        "gaps": [
          "Descriptive, textural and MIT classification systems and the presentation of boring logs are named in the syllabus but are not examined by these capsule points.",
          "The liquid-limit test procedure, flow and toughness indices, liquidity index and hydrometer analysis are not covered.",
          "Numerical limits for the clean-sand fines range, the borderline plasticity band and the organic liquid-limit ratio are referred to without values, so none are stated here.",
          "Strength and compressibility tests listed under this syllabus topic are treated in the shear-strength and settlement topics instead."
        ]
      },
      "ACiE0202": {
        "code": "ACiE0202",
        "questionCount": 26,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation</th></tr></thead><tbody><tr><th scope='row'>Geostatic total stress</th><td>σ<sub>v</sub> = Σγ<sub>i</sub>h<sub>i</sub></td></tr><tr><th scope='row'>Hydrostatic pore pressure</th><td>u = γ<sub>w</sub>h</td></tr><tr><th scope='row'>Effective stress</th><td>σ' = σ − u</td></tr><tr><th scope='row'>Hydraulic gradient</th><td>i = total head loss/flow-path length</td></tr><tr><th scope='row'>Darcy discharge</th><td>q = kiA; discharge velocity v = ki</td></tr><tr><th scope='row'>Flow net</th><td>q = kH(N<sub>f</sub>/N<sub>d</sub>) per unit width</td></tr><tr><th scope='row'>Critical gradient</th><td>i<sub>c</sub> = γ'/γ<sub>w</sub> = (G<sub>s</sub> − 1)/(1 + e)</td></tr><tr><th scope='row'>Compressibility</th><td>a<sub>v</sub> = Δe/Δσ'; m<sub>v</sub> = a<sub>v</sub>/(1 + e<sub>0</sub>)</td></tr><tr><th scope='row'>Relative compaction</th><td>RC = (γ<sub>d,field</sub>/γ<sub>d,max</sub>) × 100%</td></tr><tr><th scope='row'>Compactive energy</th><td>proportional to rammer mass × drop × blows per layer × layers</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "effective-stress",
            "title": "Total stress, pore pressure and effective stress",
            "html": "<p><strong>Geostatic stress</strong> is the vertical total stress produced by the self-weight of the overlying soil, found by summing unit weight times thickness for each layer. A 2 m layer at 18 kN/m<sup>3</sup> over a 3 m layer at 20 kN/m<sup>3</sup> gives σ<sub>v</sub> = 18(2) + 20(3) = 96 kPa at 5 m depth, with no surcharge. That is total stress; the groundwater profile is still needed before effective stress can be found.</p><p><strong>Pore-water pressure</strong> is the pressure in the water phase. Under hydrostatic conditions u = γ<sub>w</sub>h, so a point 5 m below the water surface carries 10 × 5 = 50 kPa. <strong>Neutral stress</strong> is an older name for the same quantity: it acts normally in all directions and does not by itself provide shear resistance. <strong>Effective stress</strong> σ' = σ − u is the part carried through grain contacts; with σ = 150 kPa and u = 60 kPa, σ' = 90 kPa.</p><p>Ponding extra water on an already saturated, level ground surface raises total stress and pore pressure equally. An additional 2 m of water adds 20 kPa to each, so effective stress at a fixed depth is unchanged, provided there is no seepage or other load change. A water table rising through previously unsaturated soil is a different problem.</p>",
            "sources": [
              {
                "id": "CAP4-02-00056",
                "label": "p. 7; topic 2 point 52"
              },
              {
                "id": "CAP4-02-00055",
                "label": "p. 7; topic 2 point 51"
              },
              {
                "id": "CAP4-02-00072",
                "label": "p. 8; topic 2 point 66"
              },
              {
                "id": "CAP4-02-00045",
                "label": "p. 7; topic 2 point 41"
              }
            ]
          },
          {
            "id": "darcy-law",
            "title": "Hydraulic gradient, Darcy's law and the limits of linear flow",
            "html": "<p>Seepage is driven by differences in <strong>total head</strong>, the sum of elevation and pressure heads. The average <strong>hydraulic gradient</strong> along a flow path is the total head loss divided by the path length: head falling from 12 m to 8 m over a 20 m path gives i = (12 − 8)/20 = 0.20. Using an absolute head, or a vertical soil thickness in place of the actual path length, gives a wrong gradient.</p><p><strong>Darcy's law</strong>, q = kiA, gives the discharge through the gross cross-section. With k = 0.0003 m/s, i = 0.4 and A = 2 m<sup>2</sup>, q = 0.0003 × 0.4 × 2 = 0.00024 m<sup>3</sup>/s. The product ki is the discharge velocity over the gross area; the mean velocity of water in the pores is higher because only the effective flow porosity carries it.</p><p>The law assumes a linear, laminar (viscous) flow regime in which discharge is proportional to gradient. Saturation and steady conditions alone do not guarantee this: in coarse gravel at high velocity, inertial effects make discharge non-proportional and a constant k no longer applies. In unsaturated flow the conductivity also varies with water content, so a generalized treatment needs further constitutive information.</p>",
            "sources": [
              {
                "id": "CAP4-02-00168",
                "label": "p. 10; topic 2 point 148"
              },
              {
                "id": "CAP4-02-00143",
                "label": "p. 10; topic 2 point 127"
              },
              {
                "id": "CAP4-02-00142",
                "label": "p. 10; topic 2 point 127"
              }
            ]
          },
          {
            "id": "flow-nets",
            "title": "Flow nets: flow channels, head drops and seepage discharge",
            "html": "<p>A flow net represents two-dimensional steady seepage with two families of curves. <strong>Flow lines</strong> trace the paths of water particles; the strip between two adjacent flow lines is a <strong>flow channel</strong>, and in the ideal net no flow crosses its sides. <strong>Equipotential lines</strong> join points of equal total head, and adjacent equipotentials bound one head drop.</p><p>In homogeneous isotropic soil the two families cross at right angles in the physical plane. The head gradient is normal to an equipotential, and isotropic conductivity makes the flow parallel to that gradient. For anisotropic soil this orthogonality holds only after a suitable coordinate transformation.</p><p>With square elements every channel carries the same discharge, and each of the N<sub>d</sub> drops dissipates H/N<sub>d</sub> of the total head loss H. Adding the N<sub>f</sub> parallel channels gives <strong>q = kH(N<sub>f</sub>/N<sub>d</sub>)</strong> per unit width. For 3 channels, 12 drops, k = 0.0002 m/s and H = 6 m, q = 0.0002 × 6 × (3/12) = 0.0003 m<sup>3</sup>/s per metre width. Inverting the channel-to-drop ratio overestimates the flow sixteenfold.</p>",
            "moreHtml": "<p>For one square element of side b in a channel, Darcy's law gives Δq = k(Δh/b)(b × 1) = kΔh, with Δh = H/N<sub>d</sub>. Every channel therefore carries kH/N<sub>d</sub>, and N<sub>f</sub> channels in parallel carry N<sub>f</sub> times as much. The result is a discharge per metre run, so its units are m<sup>2</sup>/s, equivalently m<sup>3</sup>/s per metre width.</p>",
            "sources": [
              {
                "id": "CAP4-03-00076",
                "label": "p. 12; topic 3 point 74"
              },
              {
                "id": "CAP4-02-00037",
                "label": "p. 7; topic 2 point 34"
              },
              {
                "id": "CAP4-02-00026",
                "label": "p. 7; topic 2 point 23"
              }
            ]
          },
          {
            "id": "critical-gradient",
            "title": "Upward seepage, the critical gradient and the quick condition",
            "html": "<p>Upward seepage drags on the soil skeleton in the direction of flow. Per unit volume the seepage force is iγ<sub>w</sub>, while the submerged weight is γ'. In an unconfined, saturated, cohesionless column the vertical effective stress falls to zero when the two balance: grain contacts then carry no load and the soil boils. This is the <strong>quick condition</strong>. Total stress and pore pressure need not be zero at that point, and downward seepage increases effective stress instead.</p><p>Setting iγ<sub>w</sub> = γ' gives <strong>i<sub>c</sub> = γ'/γ<sub>w</sub> = (G<sub>s</sub> − 1)/(1 + e)</strong>. With G<sub>s</sub> = 2.68 and e = 0.68, i<sub>c</sub> = 1.68/1.68 = 1.00. Because G<sub>s</sub> is dimensionless, the numerator subtracts 1, never the numerical unit weight of water.</p><p>At fixed G<sub>s</sub>, a larger void ratio lowers the submerged weight per unit volume and so lowers i<sub>c</sub>: a looser soil turns quick at a smaller upward gradient. Permeability controls how much water flows and how quickly conditions develop, but it does not enter this ideal static threshold.</p>",
            "moreHtml": "<p>Derivation: γ<sub>sat</sub> = (G<sub>s</sub> + e)γ<sub>w</sub>/(1 + e), so γ' = γ<sub>sat</sub> − γ<sub>w</sub> = (G<sub>s</sub> − 1)γ<sub>w</sub>/(1 + e). Dividing by γ<sub>w</sub> gives the critical gradient. The result neglects surcharge, cohesion and side confinement, which is why it describes the ideal unconfined case.</p>",
            "sources": [
              {
                "id": "CAP4-02-00033",
                "label": "p. 7; topic 2 point 30"
              },
              {
                "id": "CAP4-02-00049",
                "label": "p. 7; topic 2 point 45"
              },
              {
                "id": "CAP4-02-00063",
                "label": "p. 8; topic 2 point 58"
              }
            ]
          },
          {
            "id": "compaction-versus-consolidation",
            "title": "Compaction versus consolidation, and the compressibility coefficients",
            "html": "<p><strong>Compaction</strong> is the mechanical densification of soil by rolling, tamping or vibration. When moist unsaturated fill is rolled quickly at nearly unchanged water content, the particles rearrange and the volume of air-filled voids falls; the solid grains are not compressed and the pore water is not drained away. Waiting for a fill to settle under its own weight does not satisfy a specification that calls for each lift to be compacted.</p><p><strong>Consolidation</strong> is different: a saturated soil under sustained load reduces in volume only as pore water drains out, and its compressibility is measured in an oedometer. For one load increment, the <strong>coefficient of compressibility</strong> a<sub>v</sub> = Δe/Δσ' is the decrease in void ratio per unit increase in effective stress. The <strong>coefficient of volume compressibility</strong> m<sub>v</sub> = a<sub>v</sub>/(1 + e<sub>0</sub>) converts that into volumetric strain per unit stress.</p><p>Worked case: e falling from 0.80 to 0.76 while σ' rises by 100 kPa gives a<sub>v</sub> = 0.04/100 = 0.00040 kPa<sup>−1</sup> and m<sub>v</sub> = 0.00040/1.80 = 0.000222 kPa<sup>−1</sup>. Strain divided by stress defines m<sub>v</sub>, not a<sub>v</sub>.</p>",
            "sources": [
              {
                "id": "CAP4-02-00038",
                "label": "p. 7; topic 2 point 35"
              },
              {
                "id": "CAP4-02-00050",
                "label": "p. 7; topic 2 point 46"
              },
              {
                "id": "CAP4-02-00032",
                "label": "p. 7; topic 2 point 29"
              }
            ]
          },
          {
            "id": "compaction-effort",
            "title": "Laboratory compaction effort: rammer, energy ratio and the shifted curve",
            "html": "<p>A laboratory compaction test fixes the energy delivered to each mould. That energy is proportional to rammer mass × drop height × blows per layer × number of layers, so comparing rammer masses alone misses the drop height and the layer count. The light-compaction method of archived IS 2720 Part 7:1980 uses a 2.6 kg rammer with a 310 mm drop. The IS heavy-compaction rammer is 4.9 kg and the ASTM standard-effort rammer is about 2.5 kg; masses from different protocols should not be mixed.</p><p>Worked ratio: with the same mould volume and blows per layer, a 4.9 kg rammer falling 0.45 m on 5 layers, compared with a 2.6 kg rammer falling 0.31 m on 3 layers, delivers (4.9 × 0.45 × 5)/(2.6 × 0.31 × 3) = 11.025/2.418 = 4.56 times the energy.</p><p>Greater effort on the same soil generally moves the peak of the dry-density versus water-content curve upward and to the left: a higher maximum dry density at a lower optimum moisture content. This is a trend for one soil, not a fixed numerical change, and no field roller is guaranteed to reproduce either laboratory curve.</p>",
            "sources": [
              {
                "id": "CAP4-02-00025",
                "label": "p. 7; topic 2 point 22"
              },
              {
                "id": "CAP4-02-00140",
                "label": "p. 9; topic 2 point 125"
              },
              {
                "id": "CAP4-02-00139",
                "label": "p. 9; topic 2 point 125"
              }
            ]
          },
          {
            "id": "relative-compaction",
            "title": "Relative compaction and its laboratory reference maximum",
            "html": "<p><strong>Relative compaction</strong> expresses the field dry unit weight as a percentage of a specified laboratory maximum dry unit weight for the same soil and method: RC = (γ<sub>d,field</sub>/γ<sub>d,max</sub>) × 100%. A field value of 18.0 kN/m<sup>3</sup> against a maximum of 19.2 kN/m<sup>3</sup> gives 18.0/19.2 = 93.75%. Inverting the ratio (106.67%) or quoting the shortfall (6.25%) are common slips.</p><p>Because each soil has its own reference curve, equal field densities do not imply equal relative compactions. Two fills both at 18 kN/m<sup>3</sup>, with laboratory maxima of 20 and 19 kN/m<sup>3</sup>, reach 18/20 = 90% and 18/19 = 94.74% respectively. The compactive effort behind each reference maximum must also be stated, since a different effort gives a different peak.</p><p>Relative compaction is not <strong>relative density</strong>. Relative density compares the in-situ void ratio of a granular soil with its maximum and minimum void ratios, whereas relative compaction compares dry unit weight with the peak of a compaction test.</p>",
            "sources": [
              {
                "id": "CAP4-02-00027",
                "label": "p. 7; topic 2 point 24"
              },
              {
                "id": "CAP4-02-00141",
                "label": "p. 10; topic 2 point 126"
              }
            ]
          },
          {
            "id": "roller-selection",
            "title": "Matching roller action to soil: kneading for clay, vibration for granular fill",
            "html": "<p>Rollers differ in how they apply stress. <strong>Sheepsfoot and padfoot rollers</strong> concentrate pressure on projecting feet and knead the soil, which suits cohesive fill placed in controlled thin lifts. <strong>Vibratory smooth-drum rollers</strong> promote particle rearrangement and denser packing in suitable clean granular soils, where kneading achieves little. Static finishing with a very light roller, or spraying water without mechanical energy, does not supply the compactive effort either soil needs.</p><p>The roller type is only a first trial. Moisture conditioning and lift thickness must be matched to the material, and for vibratory plant so must frequency and amplitude. A trial section then checks the dry density actually achieved, because the name of the roller does not establish it.</p><p>The capsule's ship-footed roller is a spelling defect for the sheepsfoot roller; the kneading principle for clayey soils is otherwise sound.</p>",
            "sources": [
              {
                "id": "CAP4-02-00028",
                "label": "p. 7; topic 2 point 25"
              },
              {
                "id": "CAP4-02-00080",
                "label": "p. 8; topic 2 point 74"
              }
            ]
          },
          {
            "id": "field-compaction-control",
            "title": "Field compaction control: passes, roller changes and lift thickness",
            "html": "<p>Field compaction depends on roller weight, travel speed and the number of passes, together with soil moisture and lift thickness. A <strong>compaction trial</strong> at fixed moisture and lift thickness measures dry density after successive passes. Gains usually diminish, and a plateau shows that further passes add little under those conditions; overrolling wastes effort and can damage the fill.</p><p>The calibrated combination belongs to the trial conditions. If a heavier roller is substituted and its travel speed doubled while the pass count stays the same, the stress application and compactive action change. Extra weight does not automatically compensate for faster travel, so a new trial and field dry-density checks are needed before equivalence is accepted.</p><p><strong>Lift thickness</strong> is likewise not universal. A figure such as 150 mm can be a legitimate project requirement, but the effective thickness depends on the soil, its moisture, the equipment and the density required through the full depth of the layer. A specification must say whether it means loose or compacted thickness, and acceptance should rest on full-depth density, not on a surface reading or the absence of roller marks.</p>",
            "sources": [
              {
                "id": "CAP4-02-00039",
                "label": "p. 7; topic 2 point 36"
              },
              {
                "id": "CAP4-02-00040",
                "label": "p. 7; topic 2 point 36"
              },
              {
                "id": "CAP4-02-00084",
                "label": "p. 8; topic 2 point 78"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-light-compaction-rammer",
            "status": "review",
            "prompt": "In light compaction the standard Proctor rammer weighs 2.6 kg",
            "html": "<p>The 2.6 kg mass is retained for the light-compaction method of archived IS 2720 Part 7:1980, clauses 1.1 and 5.1.2, with its 310 mm drop. It is not a universal Standard Proctor mass, since the ASTM standard-effort rammer is about 2.5 kg, and no claim of current Nepal adoption is made.</p>",
            "sources": [
              {
                "id": "CAP4-02-00025",
                "label": "p. 7; topic 2 point 22"
              }
            ]
          },
          {
            "id": "caution-flow-net-fraction",
            "status": "corrected",
            "prompt": "Flow-net seepage discharge formula printed with a damaged fraction",
            "html": "<p>The extracted formula has its fraction order damaged. Darcy flow through square elements gives q = kH(N<sub>f</sub>/N<sub>d</sub>) per unit width, with flow channels in the numerator and potential drops in the denominator; reversing them overestimates discharge.</p>",
            "sources": [
              {
                "id": "CAP4-02-00026",
                "label": "p. 7; topic 2 point 23"
              }
            ]
          },
          {
            "id": "caution-sheepsfoot-spelling",
            "status": "corrected",
            "prompt": "A ship footed roller is used for compacting clayey soils",
            "html": "<p>Ship footed is a transcription or spelling defect for the <strong>sheepsfoot roller</strong>. Sheepsfoot and padfoot rollers knead cohesive soils, although their effectiveness still depends on moisture conditioning, lift thickness and a trial section.</p>",
            "sources": [
              {
                "id": "CAP4-02-00028",
                "label": "p. 7; topic 2 point 25"
              }
            ]
          },
          {
            "id": "caution-av-versus-mv",
            "status": "corrected",
            "prompt": "The coefficient of compressibility is the ratio of strain to stress",
            "html": "<p>The capsule confuses two coefficients. Strain divided by stress defines the coefficient of volume compressibility m<sub>v</sub>. The coefficient of compressibility a<sub>v</sub> is the change in void ratio per unit stress, and the two are related by m<sub>v</sub> = a<sub>v</sub>/(1 + e<sub>0</sub>).</p>",
            "sources": [
              {
                "id": "CAP4-02-00032",
                "label": "p. 7; topic 2 point 29"
              }
            ]
          },
          {
            "id": "caution-critical-gradient-numerator",
            "status": "corrected",
            "prompt": "Critical gradient for e = 0.68 and G = 2.68 written with 2.68 − 10 as the numerator",
            "html": "<p>The printed or extracted numerator 2.68 − 10 is dimensionally impossible because G<sub>s</sub> is a pure number. Force equilibrium requires i<sub>c</sub> = (G<sub>s</sub> − 1)/(1 + e) = (2.68 − 1)/(1 + 0.68) = 1.00.</p>",
            "sources": [
              {
                "id": "CAP4-02-00049",
                "label": "p. 7; topic 2 point 45"
              }
            ]
          },
          {
            "id": "caution-critical-gradient-layout",
            "status": "corrected",
            "prompt": "Critical seepage gradient shown only as 1 + e with the G − 1 numerator detached",
            "html": "<p>The extraction separates the numerator G − 1 from its fraction, leaving only the denominator 1 + e. Force equilibrium restores i<sub>c</sub> = (G − 1)/(1 + e), so at fixed G a larger void ratio gives a lower critical gradient.</p>",
            "sources": [
              {
                "id": "CAP4-02-00063",
                "label": "p. 8; topic 2 point 58"
              }
            ]
          },
          {
            "id": "caution-lift-thickness",
            "status": "review",
            "prompt": "Each layer of soil in compaction should be 150 mm thick",
            "html": "<p>The capsule omits the material, equipment, specification and the loose-versus-compacted distinction. A 150 mm lift can be a valid project requirement but is not a universal physical limit, and a trial should confirm density through the full depth of the lift.</p>",
            "sources": [
              {
                "id": "CAP4-02-00084",
                "label": "p. 8; topic 2 point 78"
              }
            ]
          },
          {
            "id": "caution-darcy-validity",
            "status": "corrected",
            "prompt": "Darcy's law is valid for fully saturated soil and steady flow",
            "html": "<p>The capsule omits the central condition and overstates the others. Darcy's linear law requires laminar, viscous flow with discharge proportional to gradient; saturation and steadiness alone do not ensure it, as inertial flow in coarse gravel shows. Unsaturated flow can still be treated with a conductivity that varies with water content.</p>",
            "sources": [
              {
                "id": "CAP4-02-00142",
                "label": "p. 10; topic 2 point 127"
              }
            ]
          }
        ],
        "gaps": [
          "Capillary rise, capillary tension and soil suction are named in the syllabus but are not examined by these capsule points.",
          "Flow-net construction rules, uplift pressure beneath structures and exit-gradient safety are not covered.",
          "Compression index, swelling index and the void ratio versus log effective stress curve are not quantified here; only av and mv are computed.",
          "Field density methods other than the core cutter, and the influence of soil type on the shape of the compaction curve, are not detailed."
        ]
      },
      "ACiE0203": {
        "code": "ACiE0203",
        "questionCount": 30,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation</th></tr></thead><tbody><tr><th scope='row'>Mohr circle</th><td>centre (σ<sub>1</sub> + σ<sub>3</sub>)/2; radius (σ<sub>1</sub> − σ<sub>3</sub>)/2 = τ<sub>max</sub></td></tr><tr><th scope='row'>Principal stresses</th><td>σ<sub>1,3</sub> = (σ<sub>x</sub> + σ<sub>y</sub>)/2 ± √[((σ<sub>x</sub> − σ<sub>y</sub>)/2)<sup>2</sup> + τ<sub>xy</sub><sup>2</sup>]</td></tr><tr><th scope='row'>Plane rotation</th><td>a physical rotation θ appears as 2θ on the circle</td></tr><tr><th scope='row'>Mohr–Coulomb</th><td>τ<sub>f</sub> = c' + σ<sub>n</sub>' tan φ'</td></tr><tr><th scope='row'>Unconfined compression</th><td>s<sub>u</sub> = q<sub>u</sub>/2 for saturated clay with φ<sub>u</sub> = 0; A<sub>c</sub> = A<sub>0</sub>/(1 − ε)</td></tr><tr><th scope='row'>Vane shear</th><td>T = s<sub>u</sub>πD<sup>2</sup>(H/2 + D/6)</td></tr><tr><th scope='row'>Direct shear</th><td>τ = shear force/corrected overlap area</td></tr><tr><th scope='row'>Infinite slope, c' = 0</th><td>F<sub>dry</sub> = tan φ'/tan β; F<sub>seep</sub> = (γ'/γ<sub>sat</sub>)F<sub>dry</sub></td></tr><tr><th scope='row'>Mobilized cohesion</th><td>c<sub>m</sub> = c/F; S<sub>n</sub> = c<sub>m</sub>/(γH)</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "mohr-circle-basics",
            "title": "The Mohr circle: axes, centre, radius and the double-angle rule",
            "html": "<p>For a two-dimensional stress state, the normal and shear tractions on every plane through a point lie on one circle when normal stress σ is plotted horizontally and shear stress τ vertically. That locus is the <strong>Mohr circle</strong>. Each point on it gives the tractions on one plane: its horizontal coordinate is the normal stress on that plane and its vertical coordinate the shear stress. The orientation of the plane is shown by position around the circle, not by either axis.</p><p>The centre lies at the mean normal stress (σ<sub>1</sub> + σ<sub>3</sub>)/2 and the radius is (σ<sub>1</sub> − σ<sub>3</sub>)/2. For compressive principal stresses of 180 and 60 kPa the centre is at 120 kPa and the radius is 60 kPa, which is also the maximum in-plane shear stress for that pair.</p><p>The transformation equations contain cos 2θ and sin 2θ, so rotating the physical plane through θ moves the representative point through <strong>2θ</strong> on the circle. Planes 25 degrees apart plot 50 degrees apart; the direction of travel depends on the sign convention adopted.</p>",
            "moreHtml": "<p>Keep the Mohr circle distinct from a <strong>Mohr–Coulomb envelope</strong>. The circle describes one stress state on every plane through the point, whereas the envelope is a material failure criterion; failure is reached when a circle touches the envelope. Absolute three-dimensional maximum shear needs all three principal stresses, not only the in-plane pair.</p>",
            "sources": [
              {
                "id": "CAP4-02-00057",
                "label": "p. 7; topic 2 point 53"
              },
              {
                "id": "CAP4-02-00070",
                "label": "p. 8; topic 2 point 64"
              },
              {
                "id": "CAP4-02-00052",
                "label": "p. 7; topic 2 point 48"
              },
              {
                "id": "CAP4-02-00074",
                "label": "p. 8; topic 2 point 68"
              }
            ]
          },
          {
            "id": "principal-stresses-max-shear",
            "title": "Principal stresses from a general plane-stress state and planes of maximum shear",
            "html": "<p>When the stresses on two perpendicular planes are σ<sub>x</sub>, σ<sub>y</sub> and τ<sub>xy</sub>, the principal stresses are the centre of the Mohr circle plus or minus its radius: <strong>σ<sub>1,3</sub> = (σ<sub>x</sub> + σ<sub>y</sub>)/2 ± √[((σ<sub>x</sub> − σ<sub>y</sub>)/2)<sup>2</sup> + τ<sub>xy</sub><sup>2</sup>]</strong>. With compression positive, σ<sub>x</sub> = 120 kPa, σ<sub>y</sub> = 40 kPa and τ<sub>xy</sub> = 30 kPa give a centre of 80 kPa and a radius of √(40<sup>2</sup> + 30<sup>2</sup>) = √2500 = 50 kPa, so σ<sub>1</sub> = 130 kPa and σ<sub>3</sub> = 30 kPa.</p><p>The <strong>maximum shear stress</strong> is half the greatest principal-stress difference, τ<sub>max</sub> = (σ<sub>1</sub> − σ<sub>3</sub>)/2. Principal stresses of 220 and 80 kPa give 70 kPa. The difference of 140 kPa is the diameter of the circle and 150 kPa is its centre, so neither is the maximum shear.</p><p>Maximum shear lies 90 degrees around the circle from a principal point, which corresponds to 45 degrees in the physical element. Its conjugate plane lies a further 90 degrees away physically, at 135 degrees, and carries shear of the opposite sign under a consistent convention. Planes at 0 and 90 degrees are the principal planes themselves, which carry no shear.</p>",
            "sources": [
              {
                "id": "CAP4-02-00062",
                "label": "pp. 7, 8; topic 2 point 57"
              },
              {
                "id": "CAP4-02-00094",
                "label": "p. 8; topic 2 point 86"
              },
              {
                "id": "CAP4-02-00131",
                "label": "p. 9; topic 2 point 118"
              }
            ]
          },
          {
            "id": "triaxial-drainage-pore-pressure",
            "title": "Triaxial drainage conditions, pore-pressure measurement and effective circles",
            "html": "<p>Triaxial tests are named by drainage in two stages. In a <strong>consolidated drained (CD)</strong> test the specimen consolidates under cell pressure and is then sheared with drainage open, slowly enough that excess pore pressure stays negligible; an open valve alone is not enough if the strain rate outpaces drainage. Drained does not mean dry, and back pressure need not be zero. In a <strong>consolidated undrained (CU)</strong> test drainage is closed during shearing.</p><p>Subtracting an isotropic pore pressure u from both principal total stresses moves the Mohr circle left by u and leaves its radius unchanged, because (σ<sub>1</sub> − u) − (σ<sub>3</sub> − u) = σ<sub>1</sub> − σ<sub>3</sub>. Hence CU tests with pore pressure measured at failure give an effective-stress envelope: each circle is shifted to σ<sub>1</sub>' = σ<sub>1</sub> − u and σ<sub>3</sub>' = σ<sub>3</sub> − u, and the effective circles define c' and φ'. Without pore-pressure data a total-stress test generally cannot be converted.</p><p>Pore pressure during undrained shearing can be measured with a <strong>Bishop-type null indicator</strong>: the line pressure is balanced to return the indicator to its datum, so negligible water leaves the specimen and undrained conditions are preserved. This apparatus is unrelated to Bishop's slope-stability method.</p>",
            "sources": [
              {
                "id": "CAP4-02-00082",
                "label": "p. 8; topic 2 point 76"
              },
              {
                "id": "CAP4-02-00083",
                "label": "p. 8; topic 2 point 77"
              },
              {
                "id": "CAP4-02-00051",
                "label": "p. 7; topic 2 point 47"
              },
              {
                "id": "CAP4-02-00138",
                "label": "p. 9; topic 2 point 124"
              }
            ]
          },
          {
            "id": "mohr-coulomb-envelope",
            "title": "The Mohr–Coulomb envelope: intercept, slope and back-calculation",
            "html": "<p>The linear <strong>Mohr–Coulomb</strong> criterion τ<sub>f</sub> = c' + σ<sub>n</sub>' tan φ' gives the shear strength on a plane from the effective normal stress acting on it. On equally scaled axes the intercept is the cohesion c' and the slope is tan φ', so the envelope's inclination to the horizontal is the <strong>angle of internal friction</strong>. A slope of 0.577 implies φ' of about 30 degrees, since arctan 0.577 ≈ 30°; that angle is not a dilation angle or an earth-pressure coefficient.</p><p>Envelopes sharing an intercept have equal c' and differ only in φ': the steeper line has the larger friction angle. The graphical inclination of the envelope is not the spatial inclination of a failure plane in the soil.</p><p>Back-calculation rearranges the criterion. A drained failure point at σ<sub>n</sub>' = 100 kPa and τ = 70 kPa with tan φ' = 0.5 gives c' = 70 − 100(0.5) = 20 kPa. For clean cohesionless soil with c' = 0 and φ' = 30°, an effective normal stress of 120 kPa gives τ<sub>f</sub> = 120 tan 30° = 69.3 kPa. Zero cohesion does not mean zero strength when effective confinement exists, and pore pressure matters by reducing σ<sub>n</sub>'.</p>",
            "sources": [
              {
                "id": "CAP4-02-00079",
                "label": "p. 8; topic 2 point 73"
              },
              {
                "id": "CAP4-02-00100",
                "label": "p. 9; topic 2 point 91"
              },
              {
                "id": "CAP4-02-00128",
                "label": "p. 9; topic 2 point 115"
              },
              {
                "id": "CAP4-02-00169",
                "label": "p. 10; topic 2 point 149"
              }
            ]
          },
          {
            "id": "undrained-strength-ucs",
            "title": "Undrained strength of saturated clay and the unconfined compression test",
            "html": "<p>For saturated clay sheared quickly without drainage, a total-stress <strong>φ<sub>u</sub> = 0</strong> idealization is common: the failure envelope is horizontal and τ<sub>f</sub> = c<sub>u</sub> whatever the total normal stress. With c<sub>u</sub> = 25 kPa, the predicted strength at 100 kPa total normal stress is 25 + 100 tan 0 = 25 kPa. This models the specified soil state; it does not claim that clay strength never changes with consolidation history.</p><p>The <strong>unconfined compression test</strong> loads a self-supporting cylinder with zero lateral total stress, rapidly enough that drainage is negligible. The failure circle runs from zero to the unconfined compressive strength q<sub>u</sub>, so its radius gives <strong>s<sub>u</sub> = q<sub>u</sub>/2</strong>; failure at 90 kPa means s<sub>u</sub> = 45 kPa. The result is an undrained total-stress strength for a suitable saturated cohesive specimen. It does not supply effective c' and φ', and it does not apply to frictional or unsaturated specimens.</p><p>Axial stress uses a corrected area. At constant volume, A<sub>0</sub>L<sub>0</sub> = A<sub>c</sub>L<sub>0</sub>(1 − ε), so <strong>A<sub>c</sub> = A<sub>0</sub>/(1 − ε)</strong>. At 20% strain a 1000 mm<sup>2</sup> specimen has A<sub>c</sub> = 1000/0.80 = 1250 mm<sup>2</sup>; dividing the load by the original area would overstate stress as the specimen shortens and widens.</p>",
            "sources": [
              {
                "id": "CAP4-02-00071",
                "label": "p. 8; topic 2 point 65"
              },
              {
                "id": "CAP4-02-00060",
                "label": "p. 7; topic 2 point 55"
              },
              {
                "id": "CAP4-02-00151",
                "label": "p. 10; topic 2 point 133"
              },
              {
                "id": "CAP4-02-00065",
                "label": "p. 8; topic 2 point 60"
              }
            ]
          },
          {
            "id": "vane-shear",
            "title": "Vane shear test: torque equation, end contribution and when to use it",
            "html": "<p>A vane pushed into soft clay and rotated shears out a cylinder of soil. Assuming uniform undrained strength on the curved side and on both flat ends, the resisting moments add to <strong>T = s<sub>u</sub>πD<sup>2</sup>(H/2 + D/6)</strong>. The vane must be fully embedded, and the measured torque is first corrected for rod friction.</p><p>Worked case: with D = H = 0.10 m the geometric factor is π × 0.01 × (0.05 + 0.0167) = π/1500 m<sup>3</sup>. A corrected torque of 20π N m gives s<sub>u</sub> = 20π × 1500/π = 30000 Pa, or 30 kPa. Omitting the end resistance would give 40 kPa.</p><p>For H = D the side contributes s<sub>u</sub>πD<sup>3</sup>/2 and the two ends together s<sub>u</sub>πD<sup>3</sup>/6, a total of 2s<sub>u</sub>πD<sup>3</sup>/3. The ends therefore supply (1/6)/(2/3) = one quarter of the torque, and treating all of it as side resistance overestimates the strength.</p><p>The field vane suits very soft saturated clay that cannot stand as an unsupported cylinder after extraction. Unconfined compression needs a representative self-supporting specimen, so saturation alone does not make it the preferred test, and drained direct shear or CD triaxial testing of a trimmed specimen is not a quick in-situ alternative.</p>",
            "sources": [
              {
                "id": "CAP4-02-00067",
                "label": "p. 8; topic 2 point 62"
              },
              {
                "id": "CAP4-02-00068",
                "label": "p. 8; topic 2 point 62"
              },
              {
                "id": "CAP4-02-00073",
                "label": "p. 8; topic 2 point 67"
              }
            ]
          },
          {
            "id": "direct-shear",
            "title": "Direct shear test: nominal stress on an imposed plane",
            "html": "<p>The <strong>direct shear box</strong> splits a specimen into two halves and forces them to slide along a horizontal plane under a normal load. The measured shear stress is nominal: the average on that plane, found from the shear force and the corrected overlap area. A shear force of 180 N on 30 cm<sup>2</sup>, which is 0.003 m<sup>2</sup>, gives 180/0.003 = 60000 Pa, or 60 kPa; slips in converting cm<sup>2</sup> to m<sup>2</sup> produce errors by factors of ten.</p><p>The simplicity of the test is also its main limitation. The box fixes the failure plane, which need not be the weakest orientation in a natural soil with oriented fabric, and the split does not necessarily align with a principal plane. Stresses near the edges are nonuniform, and routine control of pore pressure and drainage is limited. The tested orientation and drainage must therefore match the intended interpretation; an overlap-area correction does not remove fabric effects.</p>",
            "sources": [
              {
                "id": "CAP4-02-00149",
                "label": "p. 10; topic 2 point 132"
              },
              {
                "id": "CAP4-02-00162",
                "label": "p. 10; topic 2 point 143"
              }
            ]
          },
          {
            "id": "infinite-slopes-wetting",
            "title": "Infinite slopes: steepening, parallel seepage and wetting of unsaturated clay",
            "html": "<p>For a dry cohesionless <strong>infinite slope</strong>, the factor of safety against sliding on a plane parallel to the surface is <strong>F = tan φ'/tan β</strong>, where β is the slope angle. Steepening increases tan β and lowers F; flattening improves this idealized stability, although real slopes still need groundwater and geological assessment.</p><p>With full saturation and steady seepage parallel to the slope, and the water surface at the ground surface, pore pressure reduces the effective normal stress on the slip plane while the driving shear still uses the saturated weight. The factor becomes F<sub>seep</sub> = (γ'/γ<sub>sat</sub>)F<sub>dry</sub>. For γ<sub>sat</sub> = 20 and γ<sub>w</sub> = 10 kN/m<sup>3</sup> the ratio is (20 − 10)/20 = 0.50, the origin of the rule that seepage roughly halves the dry factor of safety. That halving depends on these assumptions and on the unit-weight ratio; it is not a general factor for cohesive slopes or other water levels.</p><p>In an initially unsaturated clay slope, <strong>matric suction</strong> adds apparent strength. Rain infiltration that reduces suction removes that contribution, and subsequent positive pore pressure can reduce effective stress further, without any change in geometry. The size of the loss depends on drainage, fabric and stress history, so wetting is not a fixed reduction of intrinsic cohesion.</p>",
            "moreHtml": "<p>For a slice of vertical depth z on a slope of angle β, the normal and shear stresses on the slip plane are γz cos<sup>2</sup>β and γz sin β cos β; with c' = 0 their ratio gives F = tan φ'/tan β. With parallel seepage and the water surface at ground level, the pore pressure on the plane is γ<sub>w</sub>z cos<sup>2</sup>β, which leaves an effective normal stress of γ'z cos<sup>2</sup>β against a driving shear of γ<sub>sat</sub>z sin β cos β, hence the factor γ'/γ<sub>sat</sub>.</p>",
            "sources": [
              {
                "id": "CAP4-02-00081",
                "label": "p. 8; topic 2 point 75"
              },
              {
                "id": "CAP4-02-00041",
                "label": "p. 7; topic 2 point 37"
              },
              {
                "id": "CAP4-02-00042",
                "label": "p. 7; topic 2 point 38"
              }
            ]
          },
          {
            "id": "mobilized-strength-taylor-bishop",
            "title": "Mobilized cohesion, Taylor's stability number and the simplified Bishop method",
            "html": "<p>A factor of safety can be read as a strength reduction: the <strong>mobilized strength</strong> is the available strength divided by F. For cohesion, <strong>c<sub>m</sub> = c/F</strong>, so c = 30 kPa with F = 1.5 gives c<sub>m</sub> = 20 kPa. In a frictional soil the mobilized resistance also includes σ' tan φ<sub>m</sub>, with tan φ<sub>m</sub> = tan φ/F under uniform reduction, so c<sub>m</sub> is only the cohesive part of the mobilized resistance and not generally the complete applied shear stress.</p><p><strong>Taylor's stability number</strong> S<sub>n</sub> = c<sub>m</sub>/(γH) is dimensionless and is read from a chart that must match the slope geometry, drainage and strength model. For a purely cohesive slope with S<sub>n</sub> = 0.10, γ = 18 kN/m<sup>3</sup> and H = 10 m, the cohesion that must be mobilized is 0.10 × 18 × 10 = 18 kPa; with 36 kPa available, the factor of safety on cohesion is 36/18 = 2.0.</p><p>The <strong>simplified Bishop method</strong> analyses a trial circular slip surface by slices. It uses vertical force equilibrium of each slice and overall moment equilibrium about the centre of the circle, neglecting interslice shear forces while keeping the effect of interslice normal forces. It therefore does not satisfy every force-equilibrium equation, as a fully rigorous method would.</p>",
            "sources": [
              {
                "id": "CAP4-02-00047",
                "label": "p. 7; topic 2 point 43"
              },
              {
                "id": "CAP4-02-00134",
                "label": "p. 9; topic 2 point 120"
              },
              {
                "id": "CAP4-02-00077",
                "label": "p. 8; topic 2 point 71"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-seepage-halves-factor",
            "status": "review",
            "prompt": "Steady seepage roughly halves the factor of safety of an infinite slope",
            "html": "<p>The halving holds only for a cohesionless infinite slope with steady seepage parallel to the surface, the water surface at the slope surface, and γ'/γ<sub>sat</sub> close to one half. It is not a universal factor for cohesive slopes or arbitrary water levels.</p>",
            "sources": [
              {
                "id": "CAP4-02-00041",
                "label": "p. 7; topic 2 point 37"
              }
            ]
          },
          {
            "id": "caution-wetting-strength-loss",
            "status": "review",
            "prompt": "Cohesive soils decrease their shear strength on wetting",
            "html": "<p>The claim is qualified to a physically defined mechanism: wetting an unsaturated clay can remove suction-related apparent strength, and later positive pore pressure can reduce effective stress. The effect depends on drainage, fabric and stress history rather than being a fixed reduction of intrinsic cohesion.</p>",
            "sources": [
              {
                "id": "CAP4-02-00042",
                "label": "p. 7; topic 2 point 38"
              }
            ]
          },
          {
            "id": "caution-cm-is-mobilized-cohesion",
            "status": "corrected",
            "prompt": "Cm is also called the applied shear stress",
            "html": "<p>The capsule misidentifies c<sub>m</sub>. In slope stability it denotes <strong>mobilized cohesion</strong>, c<sub>m</sub> = c/F, consistent with the capsule's own use of it in Taylor's stability number. In a frictional soil the mobilized resistance also has a frictional part, so c<sub>m</sub> is not generally the whole applied shear stress.</p>",
            "sources": [
              {
                "id": "CAP4-02-00047",
                "label": "p. 7; topic 2 point 43"
              }
            ]
          },
          {
            "id": "caution-undrained-effective-envelope",
            "status": "corrected",
            "prompt": "An effective-stress failure envelope cannot be obtained from undrained tests",
            "html": "<p>As a blanket statement this is false. Consolidated-undrained triaxial tests with pore-pressure measurement give effective principal stresses at failure, and their circles define c' and φ'. Only undrained tests without pore-pressure data generally cannot be converted.</p>",
            "sources": [
              {
                "id": "CAP4-02-00051",
                "label": "p. 7; topic 2 point 47"
              }
            ]
          },
          {
            "id": "caution-unconfined-compression-wording",
            "status": "corrected",
            "prompt": "The unconfined confined strength test is widely used for cohesive soils",
            "html": "<p>The wording unconfined confined is a defect; the test meant is the <strong>unconfined compression test</strong>. It loads a self-supporting cohesive specimen with zero lateral total stress and gives s<sub>u</sub> = q<sub>u</sub>/2 under the φ<sub>u</sub> = 0 idealization.</p>",
            "sources": [
              {
                "id": "CAP4-02-00060",
                "label": "p. 7; topic 2 point 55"
              }
            ]
          },
          {
            "id": "caution-principal-stress-root",
            "status": "corrected",
            "prompt": "Major principal stress from σx, σy and τxy, extracted without its square root",
            "html": "<p>The extraction loses the square root and the fraction layout. The stress-transformation identity is σ<sub>1</sub> = (σ<sub>x</sub> + σ<sub>y</sub>)/2 + √[((σ<sub>x</sub> − σ<sub>y</sub>)/2)<sup>2</sup> + τ<sub>xy</sub><sup>2</sup>], the centre plus the radius of the Mohr circle.</p>",
            "sources": [
              {
                "id": "CAP4-02-00062",
                "label": "pp. 7, 8; topic 2 point 57"
              }
            ]
          },
          {
            "id": "caution-vane-formula-layout",
            "status": "corrected",
            "prompt": "Vane shear strength formula printed with a damaged layout",
            "html": "<p>The extracted formula is restored by integrating the resisting moments of the cylindrical side and both ends: T = s<sub>u</sub>πD<sup>2</sup>(H/2 + D/6), so s<sub>u</sub> = T/[πD<sup>2</sup>(H/2 + D/6)]. It assumes uniform strength, full embedment and a torque already corrected for rod friction.</p>",
            "sources": [
              {
                "id": "CAP4-02-00067",
                "label": "p. 8; topic 2 point 62"
              }
            ]
          },
          {
            "id": "caution-soft-clay-strength-test",
            "status": "corrected",
            "prompt": "Unconfined compression is the recommended shear test for saturated clay",
            "html": "<p>The blanket recommendation is corrected by specimen condition. Unconfined compression needs a representative specimen that can stand unsupported; very soft saturated clay that cannot do so is better tested in situ with the field vane.</p>",
            "sources": [
              {
                "id": "CAP4-02-00073",
                "label": "p. 8; topic 2 point 67"
              }
            ]
          },
          {
            "id": "caution-max-shear-divisor",
            "status": "review",
            "prompt": "Maximum shear stress on a Mohr circle equals σ1 − σ3",
            "html": "<p>The correct relation is τ<sub>max</sub> = (σ<sub>1</sub> − σ<sub>3</sub>)/2. The point-level extract omits the divisor 2, but the full page text includes it, so this is an extraction defect rather than evidence of a printed error. The difference σ<sub>1</sub> − σ<sub>3</sub> is the diameter of the circle.</p>",
            "sources": [
              {
                "id": "CAP4-02-00094",
                "label": "p. 8; topic 2 point 86"
              }
            ]
          },
          {
            "id": "caution-direct-shear-trees",
            "status": "review",
            "prompt": "Direct shear failure is not generally used for trees",
            "html": "<p>The final noun and intended comparison of this capsule point cannot be resolved from the extracted text, and the original point still needs review. The notes teach a defensible substitute limitation, that the box fixes the tested plane, and make no claim about trees or root strength.</p>",
            "sources": [
              {
                "id": "CAP4-02-00162",
                "label": "p. 10; topic 2 point 143"
              }
            ]
          }
        ],
        "gaps": [
          "Unconsolidated undrained testing, stress paths, pore-pressure parameters and dilatancy are not examined in these capsule points.",
          "Finite-slope methods such as the Swedish circle, ordinary slices and the friction circle, and slope-stabilization measures, are not covered.",
          "Sensitivity, thixotropy and residual strength of clays are not included.",
          "The capsule point linking direct shear with trees remains unresolved, so no statement about roots or trees is made."
        ]
      },
      "ACiE0204": {
        "code": "ACiE0204",
        "questionCount": 20,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation</th></tr></thead><tbody><tr><th scope='row'>Sampler area ratio</th><td>A<sub>r</sub> = [(D<sub>o</sub><sup>2</sup> − D<sub>i</sub><sup>2</sup>)/D<sub>i</sub><sup>2</sup>] × 100%</td></tr><tr><th scope='row'>Cone semi-angle</th><td>half of the included apex angle</td></tr><tr><th scope='row'>SPT dilatancy step</th><td>N<sub>d</sub> = 15 + 0.5(N<sub>c</sub> − 15), only for N<sub>c</sub> &gt; 15 in saturated fine sand or nonplastic silt</td></tr><tr><th scope='row'>Rankine coefficients</th><td>K<sub>a</sub> = (1 − sin φ')/(1 + sin φ'); K<sub>p</sub> = (1 + sin φ')/(1 − sin φ') = 1/K<sub>a</sub></td></tr><tr><th scope='row'>At-rest coefficient</th><td>elastic K<sub>0</sub> = ν/(1 − ν); Jaky, normally consolidated, K<sub>0</sub> = 1 − sin φ'</td></tr><tr><th scope='row'>Cohesive active pressure</th><td>σ<sub>ha</sub>' = K<sub>a</sub>σ<sub>v</sub>' − 2c'√K<sub>a</sub></td></tr><tr><th scope='row'>Rankine active plane</th><td>45° + φ'/2 to the major principal plane</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "exploration-planning",
            "title": "Exploration planning: investigation depth, geophysics and groundwater observation",
            "html": "<p>The depth of an investigation is a design requirement, not a property of the drilling equipment. It follows from the foundation loads and geometry, the geology, and any compressible or unstable layers within the zone the foundation influences. If the chosen auger refuses on a hard layer while weaker strata may lie deeper within that zone, a suitable alternative boring method is needed. Equipment limits can obstruct an investigation but never define an adequate depth, and neither the water level on the day of drilling nor the length of one sampler sets it.</p><p><strong>Electrical resistivity</strong> surveying is an indirect exploration method. A conductive layer can reflect clay, saturation or dissolved salts, so an anomaly must be correlated with boreholes and groundwater chemistry. Resistivity cannot identify a soil uniquely, supply a bearing pressure or stand in for a recovered sample.</p><p>Groundwater is observed in an <strong>observation well</strong>. A suitably installed and equilibrated well screened in an unconfined aquifer indicates the groundwater level near its screen. Screen depth, confinement and timing matter: a confined piezometric level is not automatically the local water table, a single reading may miss seasonal extremes, and a level read before equilibrium may still reflect drilling fluid.</p>",
            "sources": [
              {
                "id": "CAP4-02-00088",
                "label": "p. 8; topic 2 point 81"
              },
              {
                "id": "CAP4-02-00017",
                "label": "p. 6; topic 2 point 14"
              },
              {
                "id": "CAP4-02-00152",
                "label": "p. 10; topic 2 point 134"
              }
            ]
          },
          {
            "id": "sampler-cone-geometry",
            "title": "Sampler and penetrometer geometry: area ratio, piston tubes and the Dutch cone",
            "html": "<p>Sample disturbance depends partly on how much soil the sampler wall displaces. The <strong>area ratio</strong> A<sub>r</sub> = [(D<sub>o</sub><sup>2</sup> − D<sub>i</sub><sup>2</sup>)/D<sub>i</sub><sup>2</sup>] × 100% compares the annular area of the cutting edge with the sample area, where D<sub>o</sub> and D<sub>i</sub> are the outside and inside diameters. A cutting edge of 55 mm outside and 50 mm inside diameter gives (3025 − 2500)/2500 × 100 = 21%. Dividing by the outside area instead gives 17.36%, which follows a different, incorrect convention.</p><p>Very soft clay tends to flow into an open tube prematurely and can be lost on withdrawal. A <strong>piston sampler</strong> with a suitable thin-walled tube controls entry and helps retain the sample. Good technique still matters, and even a sample called undisturbed does not preserve its stress history perfectly; a thick split spoon driven by heavy blows, or an auger flight, is no substitute.</p><p>The static <strong>Dutch cone</strong> penetrometer has a tip whose included apex angle is 60 degrees. The axis bisects that angle, so each straight generator makes 60/2 = 30 degrees with the axis in an axial section. The cone is a cone-penetration tip and should not be confused with the SPT split spoon.</p>",
            "sources": [
              {
                "id": "CAP4-02-00075",
                "label": "p. 8; topic 2 point 69"
              },
              {
                "id": "CAP4-02-00156",
                "label": "p. 10; topic 2 point 138"
              },
              {
                "id": "CAP4-01-00131",
                "label": "p. 5; topic 1 point 124"
              }
            ]
          },
          {
            "id": "spt-corrections-dilatancy",
            "title": "SPT blow counts: what the corrections address and the dilatancy rule",
            "html": "<p>An SPT blow count reflects the equipment as well as the soil, so its corrections address the delivered hammer energy and conditions such as borehole diameter, rod length and the sampler. A <strong>meniscus correction</strong> belongs to liquid-level readings, for example in hydrometer analysis, and is not an SPT correction.</p><p>The traditional <strong>dilatancy correction</strong> applies to saturated fine sand or nonplastic silt, in which rapid penetration can generate transient pore-pressure effects that raise the resistance. It is conditional: after the overburden correction, it operates only when the corrected count N<sub>c</sub> exceeds 15, and then only the excess over 15 is halved, N<sub>d</sub> = 15 + 0.5(N<sub>c</sub> − 15).</p><ul><li>Saturated fine sand with N<sub>c</sub> = 27 gives N<sub>d</sub> = 15 + 0.5 × 12 = 21. Halving the whole count to 13.5 is wrong.</li><li>Saturated nonplastic silt with N<sub>c</sub> = 12 does not exceed the threshold, so the count stays 12; extrapolating the formula below its range would wrongly raise it to 13.5.</li><li>Dry coarse gravel, unsaturated coarse sand and stiff plastic clay fall outside the rule altogether.</li></ul>",
            "sources": [
              {
                "id": "CAP4-02-00078",
                "label": "p. 8; topic 2 point 72"
              },
              {
                "id": "CAP4-02-00076",
                "label": "p. 8; topic 2 point 70"
              },
              {
                "id": "CAP4-02-00146",
                "label": "p. 10; topic 2 point 130"
              },
              {
                "id": "CAP4-02-00147",
                "label": "p. 10; topic 2 point 130"
              }
            ]
          },
          {
            "id": "earth-pressure-states",
            "title": "Earth-pressure states: at rest, active and passive",
            "html": "<p>Lateral earth pressure depends on how the wall moves. A wall prevented from yielding stays close to the <strong>at-rest</strong> state. When the wall yields sufficiently away from the backfill, the soil expands laterally and the pressure falls to the <strong>active</strong> limit, lower than at rest. Movement of the wall into the soil mobilizes the much larger <strong>passive</strong> resistance.</p><p>For dry, homogeneous, level cohesionless backfill against a smooth vertical wall, Rankine's coefficients are <strong>K<sub>a</sub> = (1 − sin φ')/(1 + sin φ')</strong> and <strong>K<sub>p</sub> = (1 + sin φ')/(1 − sin φ')</strong>, reciprocals of each other. With φ' = 30°, sin φ' = 0.5, so K<sub>a</sub> = 0.5/1.5 = 1/3 and K<sub>p</sub> = 3. A vertical effective stress of 60 kPa then corresponds to a passive horizontal effective stress of 3 × 60 = 180 kPa, provided the wall moves far enough into the soil.</p><p>Two at-rest estimates must not be confused. Jaky's empirical relation for normally consolidated soil is K<sub>0</sub> = 1 − sin φ', which is 0.5 at 30°. For an ideal isotropic linear-elastic soil under zero lateral strain, K<sub>0</sub> = ν/(1 − ν), so ν = 0.40 gives 0.40/0.60 = 0.667. Both are model-specific estimates, not universal laws for real soils with plastic strain or overconsolidation.</p>",
            "sources": [
              {
                "id": "CAP4-02-00092",
                "label": "p. 8; topic 2 point 84"
              },
              {
                "id": "CAP4-02-00093",
                "label": "p. 8; topic 2 point 85"
              },
              {
                "id": "CAP4-02-00099",
                "label": "p. 9; topic 2 point 90"
              },
              {
                "id": "CAP4-02-00098",
                "label": "pp. 8, 9; topic 2 point 89"
              }
            ]
          },
          {
            "id": "rankine-assumptions-coulomb-wedges",
            "title": "Rankine's assumptions, the active failure plane and Coulomb wedges",
            "html": "<p>The elementary Rankine solution assumes a <strong>smooth</strong> vertical wall with zero wall-friction angle, δ = 0, so for level backfill the soil thrust is normal to the wall and horizontal. It also assumes a <strong>homogeneous</strong> backfill. A thick weak layer over dense sand changes strength and unit weight with depth, so one uniform coefficient and unit weight can misrepresent both pressures and failure conditions; each layer needs its own treatment, using the vertical effective stress at that depth.</p><p>In the active state of level cohesionless backfill the vertical stress is the major principal stress. Mohr–Coulomb failure planes make 45° + φ/2 with the major principal plane, which is horizontal here, so for φ = 30° they rise at 45 + 15 = 60 degrees to the horizontal. That result belongs to this stress state and should not be carried over to a differently assumed wedge beneath a footing.</p><p>When the wall is rough, the backfill irregular or a surcharge present, <strong>Coulomb's wedge theory</strong> analyses force equilibrium of trial soil wedges. <strong>Culmann's graphical construction</strong> carries this out for irregular surfaces and loads; for active pressure, the critical trial wedge is the one requiring the maximum wall thrust. The construction has nothing to do with column buckling.</p>",
            "sources": [
              {
                "id": "CAP4-02-00097",
                "label": "p. 8; topic 2 point 88"
              },
              {
                "id": "CAP4-02-00086",
                "label": "p. 8; topic 2 point 80"
              },
              {
                "id": "CAP4-02-00069",
                "label": "p. 8; topic 2 point 63"
              },
              {
                "id": "CAP4-02-00091",
                "label": "p. 8; topic 2 point 83"
              }
            ]
          },
          {
            "id": "cohesive-backfill-tension-cracks",
            "title": "Cohesive backfill: the square-root term and tension cracks",
            "html": "<p>For a c'–φ' backfill, Rankine's active pressure extends to <strong>σ<sub>ha</sub>' = K<sub>a</sub>σ<sub>v</sub>' − 2c'√K<sub>a</sub></strong>. The cohesion term contains the square root of K<sub>a</sub>, not K<sub>a</sub> itself, and any water pressure is added separately. With K<sub>a</sub> = 0.25, c' = 10 kPa and σ<sub>v</sub>' = 100 kPa, the lateral effective pressure is 25 − 2 × 10 × 0.5 = 15 kPa; using K<sub>a</sub> in place of its square root would give 20 kPa.</p><p>Near the top of the backfill, where σ<sub>v</sub>' is small, the expression becomes negative. Ordinary soil against a wall cannot reliably transmit that tension, so the negative zone indicates potential separation or a <strong>tension crack</strong>, not a force pulling the wall back into the soil and not a region of passive failure. Water can fill the crack and exert positive hydrostatic pressure, so the algebraic negative value is never treated as a stabilizing design force.</p>",
            "moreHtml": "<p>Setting the expression to zero for a dry, uniform backfill with no surcharge, where σ<sub>v</sub>' = γz, gives the depth of the zero-pressure point z<sub>0</sub> = 2c'/(γ√K<sub>a</sub>). Above that depth the ideal pressure is tensile; below it the pressure is compressive and increases with depth.</p>",
            "sources": [
              {
                "id": "CAP4-02-00089",
                "label": "p. 8; topic 2 point 82"
              },
              {
                "id": "CAP4-02-00090",
                "label": "p. 8; topic 2 point 82"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-rigid-cone-rankine-plane",
            "status": "review",
            "prompt": "The rigid cone below a foundation makes 45° + φ/2 with the horizontal",
            "html": "<p>The capsule does not specify the foundation model, and its cone geometry cannot be resolved from the text. The defensible relation taught here is the Rankine active failure plane at 45° + φ/2 to the major principal plane; a footing-wedge angle depends on the mechanism assumed.</p>",
            "sources": [
              {
                "id": "CAP4-02-00069",
                "label": "p. 8; topic 2 point 63"
              }
            ]
          },
          {
            "id": "caution-exploration-depth-boring",
            "status": "review",
            "prompt": "The depth of exploration is independent of the type of boring",
            "html": "<p>This is read as a planning principle: the required depth follows the foundation, loads and ground model, and the boring method is chosen to reach it. It is not a claim that any boring equipment has unlimited capability.</p>",
            "sources": [
              {
                "id": "CAP4-02-00088",
                "label": "p. 8; topic 2 point 81"
              }
            ]
          },
          {
            "id": "caution-cohesive-active-root",
            "status": "corrected",
            "prompt": "Active earth pressure in cohesive soil is Ka γz − 2C Ka",
            "html": "<p>The extraction loses the square root on K<sub>a</sub> in the cohesion term. The Rankine c'–φ' active pressure is K<sub>a</sub>σ<sub>v</sub>' − 2c'√K<sub>a</sub>, with water pressure added separately.</p>",
            "sources": [
              {
                "id": "CAP4-02-00089",
                "label": "p. 8; topic 2 point 82"
              }
            ]
          },
          {
            "id": "caution-culmann-coulomb-names",
            "status": "corrected",
            "prompt": "The Cullman graph is used in column wedge theory",
            "html": "<p>Both names are corrected. The construction is <strong>Culmann's</strong> graphical method, and it belongs to <strong>Coulomb's</strong> wedge theory of earth pressure; it has no connection with structural column buckling.</p>",
            "sources": [
              {
                "id": "CAP4-02-00091",
                "label": "p. 8; topic 2 point 83"
              }
            ]
          },
          {
            "id": "caution-elastic-k0-numerator",
            "status": "corrected",
            "prompt": "At-rest coefficient for Poisson's ratio 0.4, printed with a separated numerator",
            "html": "<p>The separated numerator is restored: for an ideal elastic soil under zero lateral strain, K<sub>0</sub> = ν/(1 − ν) = 0.4/0.6 = 0.667. This elastic relation must be kept distinct from Jaky's empirical K<sub>0</sub> = 1 − sin φ' for normally consolidated soil.</p>",
            "sources": [
              {
                "id": "CAP4-02-00098",
                "label": "pp. 8, 9; topic 2 point 89"
              }
            ]
          }
        ],
        "gaps": [
          "Boring methods such as wash, percussion and rotary drilling, trial pits and the content of a site-investigation report are not examined in these capsule points.",
          "Retaining-wall stability checks for overturning, sliding and base pressure, and methods of wall improvement, are not covered.",
          "Coulomb's closed-form coefficients for wall friction and sloping backfill are not given.",
          "SPT overburden and energy correction formulas are not quantified; only the dilatancy step is.",
          "The capsule's rigid-cone diagram below a foundation was not reviewed, so no footing-wedge geometry is taught from it."
        ]
      },
      "ACiE0205": {
        "code": "ACiE0205",
        "questionCount": 21,
        "formulaSheet": "<table><thead><tr><th scope='col'>Check</th><th scope='col'>Relation</th></tr></thead><tbody><tr><th scope='row'>Footing area</th><td>A ≥ (column load + footing and fill weight)/gross allowable pressure</td></tr><tr><th scope='row'>Preliminary pier or pile count</th><td>n ≥ P/Q<sub>allow</sub>, rounded up to a whole number</td></tr><tr><th scope='row'>Compensation</th><td>net added gross load = building and foundation weight − weight of excavated soil</td></tr><tr><th scope='row'>Rankine minimum depth</th><td>D<sub>f</sub> = (p/γ)[(1 − sin φ)/(1 + sin φ)]<sup>2</sup></td></tr><tr><th scope='row'>Embedment after regrading</th><td>final embedment = base depth below original ground − ground lowering</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "shallow-and-deep-systems",
            "title": "Shallow and deep foundation systems",
            "html": "<p>Foundations are classed by how they transfer load. <strong>Shallow foundations</strong> bear over a broad base near the surface: isolated, strip and combined footings, and mat or raft foundations. A reinforced concrete raft that spreads most column loads directly onto near-surface ground, without piles, is still shallow, whatever its plan area or the building weight. A piled raft is a different combined system because its piles also carry load.</p><p><strong>Deep foundations</strong> carry load past weak surface deposits. A <strong>pile foundation</strong> uses slender elements that mobilize shaft friction, toe bearing or both; reaching hard rock is not essential. Piles are often grouped for capacity, layout and moment resistance, but grouping is not a defining requirement: a single large-diameter pile can be valid when its axial, lateral, moment, settlement, structural and construction-tolerance checks pass. No rule demands three piles, or an even number, under a cap.</p><p>A bridge pier can sit on an <strong>open spread foundation</strong> built in an exposed, dewatered excavation when competent material lies at a shallow level below the assessed scour zone and the excavation is stable. Bridge foundations are not universally open: deep alluvium or severe scour may favour piles, drilled shafts or sunk wells.</p>",
            "sources": [
              {
                "id": "CAP4-02-00101",
                "label": "p. 9; topic 2 point 92"
              },
              {
                "id": "CAP4-02-00102",
                "label": "p. 9; topic 2 point 93"
              },
              {
                "id": "CAP4-02-00103",
                "label": "p. 9; topic 2 point 94"
              },
              {
                "id": "CAP4-02-00114",
                "label": "p. 9; topic 2 point 103"
              }
            ]
          },
          {
            "id": "sizing-strip-area-piers",
            "title": "Preliminary sizing: strip idealization, footing area and pier count",
            "html": "<p>A continuous footing under a long load-bearing wall, with length far greater than width, behaves as a <strong>strip footing</strong> away from its ends. Its load and bearing response are taken per unit length and its action is predominantly transverse, unlike an isolated footing that spreads one column load in two directions.</p><p>A first footing area comes from average bearing pressure, provided load and pressure are on the same basis. A central column load of 1200 kN plus 120 kN for the footing and overlying fill, against a gross allowable pressure of 150 kPa, needs A = 1320/150 = 8.8 m<sup>2</sup>. Leaving out the self-weight gives 8.0 m<sup>2</sup>, which is too small. Soil properties and settlement determine the allowable pressure, and structural bending, shear and any nonuniform contact are checked afterwards.</p><p>A preliminary count of piers or piles follows the same logic: at least the load divided by the allowable load per element, rounded up. A 1200 kN column on identical piers of 250 kN each needs at least 1200/250 = 4.8, hence 5. No universal pier count exists for every column; layout, group response, moments, lateral loads, cap action and settlement are also checked.</p>",
            "sources": [
              {
                "id": "CAP4-02-00001",
                "label": "p. 6; topic 2 point 1"
              },
              {
                "id": "CAP4-02-00104",
                "label": "p. 9; topic 2 point 95"
              },
              {
                "id": "CAP4-02-00119",
                "label": "p. 9; topic 2 point 108"
              }
            ]
          },
          {
            "id": "combined-and-strap-footings",
            "title": "Combined and strap footings for close or boundary columns",
            "html": "<p>A <strong>combined footing</strong> carries two or more columns on one common spread base while the rest of the building may stand on separate footings. It is the natural remedy when the isolated bases needed under two nearby columns would overlap in plan: keeping both designs would count the same soil twice, so a single base is proportioned for the resultant of the column loads.</p><p>Uniform average contact pressure is a compatible first idealization when the load resultant coincides with the plan centroid of the base. Two equal column loads at equal distances from opposite ends of a rectangle satisfy this, so a rectangular shape suits them in the simple rigid-footing model. Equal loads do not remove bending inside the footing, and unequal edge distances or other moments destroy the condition even when the loads are equal.</p><p>A <strong>strap footing</strong> keeps separate bases and links them with a rigid strap beam normally designed without soil support. It suits a boundary column whose footing cannot be centred under it: the strap transfers moment to an interior column's base and balances the eccentricity. Large column spacing can make a solid combined footing uneconomical, but spacing alone is not the defining reason for choosing a strap.</p>",
            "sources": [
              {
                "id": "CAP4-02-00108",
                "label": "p. 9; topic 2 point 98"
              },
              {
                "id": "CAP4-02-00111",
                "label": "p. 9; topic 2 point 100"
              },
              {
                "id": "CAP4-02-00113",
                "label": "p. 9; topic 2 point 102"
              },
              {
                "id": "CAP4-02-00022",
                "label": "p. 7; topic 2 point 19"
              }
            ]
          },
          {
            "id": "raft-selection-and-limits",
            "title": "Raft foundations: when to consider them and what they do not solve",
            "html": "<p>When heavy column loads on relatively weak shallow soil make separate footings occupy most of the building footprint, a <strong>raft</strong> is the first alternative to evaluate. It provides a continuous bearing area and can reduce differential movement, but it must still be checked for overall and differential settlement. The often-quoted criterion that isolated footings covering more than half the plan area favour a raft is an economic rule of thumb, not a mandatory code trigger; bearing, flexure, punching and settlement decide viability. Shrinking the pads to raise their contact pressure is not a remedy.</p><p>Spreading load does not solve every settlement problem. A wide raft transmits stress to a considerable depth, so a thick, highly compressible clay layer well beneath it can still consolidate significantly. A settlement analysis may then call for ground improvement, load reduction or a different foundation system.</p><p>Recognized mat forms include slabs thickened locally beneath columns to increase stiffness and punching resistance, beam-and-slab rafts and cellular box rafts. A continuous slab made deeper only under the columns, with no beam grid or enclosed cells, is a <strong>flat plate thickened under columns</strong>.</p>",
            "sources": [
              {
                "id": "CAP4-02-00105",
                "label": "p. 9; topic 2 point 96"
              },
              {
                "id": "CAP4-02-00106",
                "label": "p. 9; topic 2 point 96"
              },
              {
                "id": "CAP4-02-00107",
                "label": "p. 9; topic 2 point 97"
              }
            ]
          },
          {
            "id": "compensated-foundations",
            "title": "Compensated foundations: balancing excavated and added weight",
            "html": "<p>A basement reduces the net load on the ground by removing soil. In the gross-weight sense a foundation is <strong>fully compensated</strong> when the weight of the building plus its foundation equals the weight of soil excavated over the same footprint, so the net added gross load is zero; for example, 9000 kN of soil removed and 9000 kN of structure added. A positive net added weight makes it partly compensated, and a net reduction makes it overcompensated. The presence of a basement alone does not settle the classification; the weight comparison does.</p><p>Compensation is a load-balance concept, not a zero-movement guarantee. Excavation unloads the soil and can cause heave, construction then reloads it, groundwater forces act on the basement, and spatial differences in stiffness produce differential movement even when the final average net load is small. These effects are assessed separately, and soil stiffness and drainage remain relevant.</p>",
            "sources": [
              {
                "id": "CAP4-02-00095",
                "label": "p. 8; topic 2 point 87"
              },
              {
                "id": "CAP4-02-00096",
                "label": "p. 8; topic 2 point 87"
              }
            ]
          },
          {
            "id": "founding-depth-hazards",
            "title": "Founding depth: hazards, competent support and seasonal movement",
            "html": "<p>Several hazards can set how deep a footing must go, and they are considered together rather than choosing embedment from bearing pressure alone. <strong>Scour</strong> can remove the soil supporting a foundation near a river bed, <strong>frost heave</strong> can lift footings in frost-susceptible ground within the frost-active zone, and organic <strong>topsoil</strong> is often compressible and unsuitable for bearing.</p><p>Depth is a means, not an end. A footing base 500 mm below ground that still lies in loose uncontrolled fill has no competent support. A dense surface crust, a colour match with natural soil or an adequate shear safety factor does not change that, and settlement must still be checked. Founding depth must reach, or create by improvement, support suited to the load and movement requirements.</p><p>In expansive clay, seasonal movement depends on mineralogy, moisture fluctuation, vegetation and the depth of the <strong>active zone</strong>. A nominal embedment such as 0.9 m copied from a revision note cannot establish protection or adequate bearing. The active moisture-change depth and measured shrink–swell behaviour are the information needed; the compaction optimum, a saturated water content or the current water table cannot stand in for them.</p>",
            "sources": [
              {
                "id": "CAP4-02-00115",
                "label": "p. 9; topic 2 point 104"
              },
              {
                "id": "CAP4-02-00117",
                "label": "p. 9; topic 2 point 106"
              },
              {
                "id": "CAP4-02-00112",
                "label": "p. 9; topic 2 point 101"
              }
            ]
          },
          {
            "id": "numerical-embedment-checks",
            "title": "Numerical embedment checks: Rankine's depth expression and final ground level",
            "html": "<p>A historical expression attributed to Rankine estimates a minimum depth for a shallow footing from the bearing pressure p, the unit weight γ and the friction angle φ: <strong>D<sub>f</sub> = (p/γ)[(1 − sin φ)/(1 + sin φ)]<sup>2</sup></strong>. With p = 180 kPa, γ = 20 kN/m<sup>3</sup> and φ = 30°, p/γ = 9 m, the bracket is 0.5/1.5 = 1/3 and its square is 1/9, so D<sub>f</sub> = 1.0 m. It is an idealization and does not replace checks for competent strata, scour, frost, groundwater and settlement.</p><p>Any stated embedment requirement must be measured from the correct datum. If a project requires at least 500 mm below final adjacent ground, a base 800 mm below the original ground that will be lowered by 400 mm ends up only 800 − 400 = 400 mm deep, short by 100 mm. The embedment does not grow when the surface is cut down, and meeting a nominal minimum, even when measured correctly, still does not establish bearing or settlement adequacy.</p>",
            "sources": [
              {
                "id": "CAP4-02-00167",
                "label": "p. 10; topic 2 point 147"
              },
              {
                "id": "CAP4-02-00171",
                "label": "p. 10; topic 2 point 151"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-strap-footing-spacing",
            "status": "review",
            "prompt": "Strap footings are used when the distance between columns is long",
            "html": "<p>The claim is qualified. Strap footings are chosen for an edge or boundary column whose footing cannot be centred, with a strap transferring moment to an interior base. Long spacing may make a combined footing uneconomical, but spacing alone does not define the selection.</p>",
            "sources": [
              {
                "id": "CAP4-02-00022",
                "label": "p. 7; topic 2 point 19"
              }
            ]
          },
          {
            "id": "caution-piles-need-not-be-grouped",
            "status": "corrected",
            "prompt": "Pile foundations are constructed in groups",
            "html": "<p>Not universally. Groups are common for capacity, layout and moment resistance, but a single pile can be a valid foundation when its axial, lateral, moment, settlement, structural and tolerance checks pass.</p>",
            "sources": [
              {
                "id": "CAP4-02-00103",
                "label": "p. 9; topic 2 point 94"
              }
            ]
          },
          {
            "id": "caution-raft-half-area-heuristic",
            "status": "review",
            "prompt": "A mat is provided under heavy loads on weak soil when isolated footings cover more than 50% of the area",
            "html": "<p>The 50% figure is treated as an economic heuristic, not an automatic requirement or code trigger. Whether a raft is viable still depends on bearing, flexure, punching and total and differential settlement.</p>",
            "sources": [
              {
                "id": "CAP4-02-00105",
                "label": "p. 9; topic 2 point 96"
              }
            ]
          },
          {
            "id": "caution-double-flat-plate-term",
            "status": "review",
            "prompt": "Double flat plate thickened is not a common type of mat foundation",
            "html": "<p>The capsule term double flat plate thickened is not a sufficiently defined structural arrangement. The notes teach clearly described forms, such as a flat plate thickened beneath columns, beam-and-slab rafts and cellular rafts, without declaring every double-slab system invalid.</p>",
            "sources": [
              {
                "id": "CAP4-02-00107",
                "label": "p. 9; topic 2 point 97"
              }
            ]
          },
          {
            "id": "caution-clay-depth-point-nine",
            "status": "review",
            "prompt": "The minimum depth of foundation in clayey soil is 0.9 m",
            "html": "<p>A universal 0.9 m minimum for clay foundations is unsupported, and no current code threshold is asserted here. In expansive clay the active moisture-change depth, measured shrink–swell behaviour and site conditions govern founding depth.</p>",
            "sources": [
              {
                "id": "CAP4-02-00112",
                "label": "p. 9; topic 2 point 101"
              }
            ]
          },
          {
            "id": "caution-equal-loads-rectangle",
            "status": "review",
            "prompt": "A rectangular combined footing is used when the two columns carry equal loads",
            "html": "<p>The capsule omits the layout condition. A rectangle gives uniform average pressure only when the load resultant coincides with its centroid, as with equal loads placed symmetrically; equal loads alone do not dictate the footing shape.</p>",
            "sources": [
              {
                "id": "CAP4-02-00113",
                "label": "p. 9; topic 2 point 102"
              }
            ]
          },
          {
            "id": "caution-open-foundation-bridges",
            "status": "review",
            "prompt": "The open foundation is used for bridges",
            "html": "<p>This describes one possible bridge foundation, not a universal solution. An open spread foundation needs competent material at shallow depth below the scour zone, a stable excavation and groundwater control; otherwise piles, shafts or wells may be preferred.</p>",
            "sources": [
              {
                "id": "CAP4-02-00114",
                "label": "p. 9; topic 2 point 103"
              }
            ]
          },
          {
            "id": "caution-footing-depth-500-ground",
            "status": "review",
            "prompt": "The minimum depth of footing below ground level is 500 mm",
            "html": "<p>This blanket minimum is not endorsed as current law or as sufficient design. A base at the nominal depth in loose uncontrolled fill still lacks competent support; investigation, improvement and applicable design rules decide adequacy.</p>",
            "sources": [
              {
                "id": "CAP4-02-00117",
                "label": "p. 9; topic 2 point 106"
              }
            ]
          },
          {
            "id": "caution-fixed-pier-count",
            "status": "corrected",
            "prompt": "The number of piers required for a column is 3",
            "html": "<p>A fixed count is unsupported and may confuse piers with a common pile-group arrangement. The number follows from load and element capacity, at least P/Q<sub>allow</sub> rounded up, and then from layout, group, lateral, cap and settlement checks.</p>",
            "sources": [
              {
                "id": "CAP4-02-00119",
                "label": "p. 9; topic 2 point 108"
              }
            ]
          },
          {
            "id": "caution-rankine-depth-fraction",
            "status": "corrected",
            "prompt": "Rankine's minimum depth of a shallow foundation, printed with a damaged fraction",
            "html": "<p>The extracted fraction is restored to D<sub>f</sub> = (p/γ)[(1 − sin φ)/(1 + sin φ)]<sup>2</sup>. The equation is a historical idealization rather than a sufficient modern depth prescription; scour, frost, competent strata, groundwater and settlement still govern.</p>",
            "sources": [
              {
                "id": "CAP4-02-00167",
                "label": "p. 10; topic 2 point 147"
              }
            ]
          },
          {
            "id": "caution-shallow-depth-500-normal",
            "status": "review",
            "prompt": "The minimum recommended depth of a shallow foundation in normal soil is 500 mm",
            "html": "<p>The unqualified 500 mm recommendation is not presented as a universal current-code rule. It is used only as an explicit project requirement measured from final adjacent ground, and meeting it does not by itself prove bearing or settlement adequacy.</p>",
            "sources": [
              {
                "id": "CAP4-02-00171",
                "label": "p. 10; topic 2 point 151"
              }
            ]
          }
        ],
        "gaps": [
          "Structural design of footings and rafts, including bending, one-way shear, punching shear and reinforcement, is outside these capsule points.",
          "Well foundations, caissons and drilled shafts are only named as alternatives; their construction and design are not explained.",
          "No verified current code values are given for minimum founding depth; the 0.9 m and 500 mm figures remain unverified.",
          "Site investigation for foundation selection is treated under exploration, and cost comparison between foundation types is not covered."
        ]
      },
      "ACiE0206": {
        "code": "ACiE0206",
        "questionCount": 37,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation</th></tr></thead><tbody><tr><th scope='row'>Overconsolidation ratio</th><td>OCR = maximum past vertical effective stress/present vertical effective stress</td></tr><tr><th scope='row'>Degree of consolidation</th><td>U = S<sub>c</sub>(t)/S<sub>c,final</sub>, primary consolidation only</td></tr><tr><th scope='row'>Drainage path</th><td>H<sub>dr</sub> = H/2 with double drainage; H with single drainage</td></tr><tr><th scope='row'>Immediate settlement</th><td>S<sub>i</sub> = qB(1 − ν<sup>2</sup>)I/E<sub>s</sub></td></tr><tr><th scope='row'>Terzaghi strip</th><td>q<sub>u</sub> = cN<sub>c</sub> + qN<sub>q</sub> + 0.5γBN<sub>γ</sub></td></tr><tr><th scope='row'>Terzaghi square</th><td>q<sub>u</sub> = 1.3cN<sub>c</sub> + qN<sub>q</sub> + 0.4γBN<sub>γ</sub></td></tr><tr><th scope='row'>Terzaghi circular</th><td>q<sub>u</sub> = 1.3cN<sub>c</sub> + qN<sub>q</sub> + 0.3γBN<sub>γ</sub>, with B the diameter</td></tr><tr><th scope='row'>Undrained strip, φ<sub>u</sub> = 0</th><td>q<sub>u</sub> = 5.7c<sub>u</sub> + q</td></tr><tr><th scope='row'>Rectangular, net</th><td>q<sub>nu</sub> = (1 + 0.3B/L)cN<sub>c</sub> + q(N<sub>q</sub> − 1) + 0.5γBN<sub>γ</sub>(1 − 0.2B/L)</td></tr><tr><th scope='row'>Net allowable pressure</th><td>the smaller of q<sub>nu</sub>/F and the net pressure meeting the settlement limit</td></tr><tr><th scope='row'>Water table within B below base</th><td>γ<sub>eff</sub> = γ' + (z<sub>w</sub>/B)(γ − γ')</td></tr><tr><th scope='row'>Plate load scaling</th><td>clay q<sub>uf</sub> = q<sub>up</sub>; sand, approximately, q<sub>uf</sub> = q<sub>up</sub>(B<sub>f</sub>/B<sub>p</sub>)</td></tr><tr><th scope='row'>Subgrade reaction</th><td>k<sub>s</sub> = pressure/settlement</td></tr><tr><th scope='row'>Eccentric footing</th><td>q = (P/BL)(1 ± 6e/B), valid for e ≤ B/6</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "stress-history-ocr",
            "title": "Stress history: preconsolidation, OCR and recompression",
            "html": "<p>A clay retains a record of the largest vertical effective stress it has carried, its <strong>preconsolidation stress</strong>. The <strong>overconsolidation ratio</strong> OCR is that maximum past effective stress divided by the present one. A layer that once carried 240 kPa and now carries 120 kPa has OCR = 240/120 = 2 and is <strong>overconsolidated</strong>; OCR = 1 means normally consolidated, and inverting the ratio to 0.5 reverses its meaning. Effective stress is used throughout, because pore-pressure changes alter the effective history even when total stress is known.</p><p>Unloading lowers the present effective stress without erasing the past maximum. Erosion of thick overburden, or excavation, therefore leaves a clay overconsolidated once groundwater conditions stabilize; these are common mechanical causes of overconsolidation, not routes to underconsolidation.</p><p>When an overconsolidated clay is reloaded but the final effective stress stays below its preconsolidation stress, it follows the stiffer <strong>recompression branch</strong> and generally settles less than a comparable normally consolidated clay under the same increment. Settlement is not zero, and if loading carries the stress beyond the past maximum, virgin compression contributes, so overconsolidation alone does not guarantee small settlement.</p>",
            "sources": [
              {
                "id": "CAP4-02-00031",
                "label": "p. 7; topic 2 point 28"
              },
              {
                "id": "CAP4-02-00036",
                "label": "p. 7; topic 2 point 33"
              },
              {
                "id": "CAP4-02-00155",
                "label": "p. 10; topic 2 point 137"
              }
            ]
          },
          {
            "id": "primary-consolidation-oedometer",
            "title": "Primary consolidation, the oedometer and the water-table position",
            "html": "<p>When a saturated clay is loaded rapidly, the load is first carried by excess pore-water pressure. <strong>Primary consolidation</strong> is the time-dependent process that follows at constant total stress: water drains from the pores, the excess pore pressure falls, effective stress σ' = σ − u rises by the same amount, and the soil skeleton compresses. The water is expelled from the voids; the voids themselves are not expelled. This differs from rapid, air-expelling compaction.</p><p>The <strong>oedometer</strong> studies the process in the laboratory. A specimen confined laterally in a ring is loaded in successive vertical increments while axial deformation and its development with time are recorded, giving compressibility and consolidation-rate parameters. Because lateral strain is restrained, the test does not directly supply an unconstrained Young's modulus.</p><p>Consolidation is not restricted to a clay whose water table lies at the ground surface. A saturated clay layer below a water table 2 m deep will still consolidate under a new embankment, because drainage and the rise in effective stress within the compressible layer drive the process. The water-table position sets the initial stresses used in the calculation; it does not switch consolidation on or off.</p>",
            "sources": [
              {
                "id": "CAP4-02-00044",
                "label": "p. 7; topic 2 point 40"
              },
              {
                "id": "CAP4-02-00046",
                "label": "p. 7; topic 2 point 42"
              },
              {
                "id": "CAP4-02-00034",
                "label": "p. 7; topic 2 point 31"
              }
            ]
          },
          {
            "id": "degree-of-consolidation-drainage-path",
            "title": "Degree of consolidation and the drainage-path length",
            "html": "<p>The <strong>average degree of consolidation</strong> U is the primary-consolidation settlement reached at time t divided by the final primary-consolidation settlement. A layer that has settled 36 mm of an expected 60 mm has U = 36/60 = 0.60, or 60%. Numerator and denominator must both refer to primary consolidation alone, excluding immediate settlement and secondary compression; inverting the ratio or working with the remaining settlement describes a different quantity.</p><p>The rate depends on the <strong>drainage-path length</strong> H<sub>dr</sub>, the longest distance pore water must travel to a free-draining boundary. With drainage at both faces it is half the layer thickness; with only one drainage face it is the full thickness. An oedometer specimen initially 20 mm thick that drains through its top and bottom faces therefore has H<sub>dr</sub> = 10 mm. That is the length entering the time factor T<sub>v</sub> = c<sub>v</sub>t/H<sub>dr</sub><sup>2</sup>, so the time to reach a given degree of consolidation grows with the square of the drainage path. The 20 mm thickness is a typical size, not a mandatory apparatus dimension.</p>",
            "sources": [
              {
                "id": "CAP4-02-00048",
                "label": "p. 7; topic 2 point 44"
              },
              {
                "id": "CAP4-02-00053",
                "label": "p. 7; topic 2 point 49"
              }
            ]
          },
          {
            "id": "immediate-settlement",
            "title": "Immediate settlement from elastic theory",
            "html": "<p>A footing on saturated clay distorts as soon as it is loaded, before appreciable drainage. This <strong>immediate settlement</strong> can occur with little volume change and is distinct from the primary consolidation that follows and from long-term secondary compression. A first estimate uses elastic theory, with stiffness, Poisson's ratio and influence factors appropriate to the geometry, rigidity, drainage condition and strain range; for rapid loading of saturated clay that means an undrained stiffness.</p><p>The elastic half-space estimate is <strong>S<sub>i</sub> = qB(1 − ν<sup>2</sup>)I/E<sub>s</sub></strong>, where q is the contact pressure, B the width, ν Poisson's ratio, I the influence factor and E<sub>s</sub> the soil modulus. With q = 100 kPa, B = 2 m, ν = 0.30, I = 1.0 and E<sub>s</sub> = 20000 kPa, S<sub>i</sub> = 100 × 2 × 0.91 × 1.0/20000 = 0.0091 m, or 9.1 mm. Writing the factor as 1 + ν<sup>2</sup> gives 10.9 mm, which is wrong, and the modulus and influence factor must match the chosen model.</p>",
            "sources": [
              {
                "id": "CAP4-02-00035",
                "label": "p. 7; topic 2 point 32"
              },
              {
                "id": "CAP4-02-00163",
                "label": "p. 10; topic 2 point 144"
              }
            ]
          },
          {
            "id": "settlement-criteria",
            "title": "Settlement criteria: total, differential and raft tolerance",
            "html": "<p>A settlement prediction is judged against a criterion specified for the particular structure, foundation type and soil. The capsule quotes 40 mm for an isolated footing on sand and 65 mm for one on clay, attributing both to an unspecified IS code; the edition, table and structural category are unverified, so such figures serve here only as stated project assumptions.</p><p>Two comparisons show the logic. Against a stated 40 mm limit, a predicted 45 mm exceeds the criterion by 45 − 40 = 5 mm. That is a serviceability noncompliance, not a shear failure, and adequate bearing capacity does not rescue it. Against a stated 65 mm limit, a predicted 60 mm passes the total-settlement check with 5 mm to spare, yet differential settlement and angular distortion are separate checks, and that reserve is not a permissible differential settlement.</p><p>Some guidance permits larger total settlement for a raft on clay than for an isolated footing. This reflects greater tolerance of uniform movement and the raft's ability to redistribute load, always subject to distortion limits. It is not automatic acceptance of differential movement, a guarantee that a raft eliminates it, nor evidence of a larger ultimate bearing capacity.</p>",
            "sources": [
              {
                "id": "CAP4-02-00116",
                "label": "p. 9; topic 2 point 105"
              },
              {
                "id": "CAP4-02-00145",
                "label": "p. 10; topic 2 point 129"
              },
              {
                "id": "CAP4-02-00158",
                "label": "p. 10; topic 2 point 140"
              }
            ]
          },
          {
            "id": "terzaghi-footing-shapes",
            "title": "Terzaghi's bearing-capacity equation for strip, square and circular footings",
            "html": "<p>Terzaghi's classical equation adds three resistance terms: cohesion, surcharge at base level and the self-weight of soil in the failure zone. For a strip, <strong>q<sub>u</sub> = cN<sub>c</sub> + qN<sub>q</sub> + 0.5γBN<sub>γ</sub></strong>. Shape coefficients adjust the first and last terms: for a square, q<sub>u</sub> = 1.3cN<sub>c</sub> + qN<sub>q</sub> + 0.4γBN<sub>γ</sub>; for a circle, q<sub>u</sub> = 1.3cN<sub>c</sub> + qN<sub>q</sub> + 0.3γBN<sub>γ</sub> with B the diameter. B must multiply γ in the last term, or that term does not have units of pressure.</p><table><thead><tr><th scope='col'>Term, kPa</th><th scope='col'>Square, B = 2 m</th><th scope='col'>Circle, diameter 2 m</th></tr></thead><tbody><tr><th scope='row'>Cohesion</th><td>1.3 × 10 × 17.7 = 230.1</td><td>230.1</td></tr><tr><th scope='row'>Surcharge</th><td>18 × 7.4 = 133.2</td><td>133.2</td></tr><tr><th scope='row'>Unit weight</th><td>0.4 × 18 × 2 × 5 = 72</td><td>0.3 × 18 × 2 × 5 = 54</td></tr><tr><th scope='row'>Gross q<sub>u</sub></th><td>435.3</td><td>417.3</td></tr></tbody></table><p>The table uses c' = 10 kPa, q' = 18 kPa, γ = 18 kN/m<sup>3</sup> and one rounded classical 20-degree row, N<sub>c</sub> = 17.7, N<sub>q</sub> = 7.4 and N<sub>γ</sub> = 5, with groundwater well below the failure zone. Mixing in a different shape coefficient or factor row changes the result.</p>",
            "moreHtml": "<p>For undrained φ<sub>u</sub> = 0 clay this formulation uses N<sub>c</sub> = 5.7, N<sub>q</sub> = 1 and N<sub>γ</sub> = 0, so a strip gives <strong>q<sub>u</sub> = 5.7c<sub>u</sub> + q</strong>. With c<sub>u</sub> = 20 kPa and a base overburden of 40 kPa, q<sub>u</sub> = 5.7 × 20 + 40 = 114 + 40 = 154 kPa gross, or 114 kPa net. The value 5.14 belongs to another ideal strip solution and should not be mixed into this formulation.</p>",
            "sources": [
              {
                "id": "CAP4-02-00120",
                "label": "p. 9; topic 2 point 109"
              },
              {
                "id": "CAP4-02-00122",
                "label": "p. 9; topic 2 point 111"
              },
              {
                "id": "CAP4-02-00126",
                "label": "p. 9; topic 2 point 114"
              },
              {
                "id": "CAP4-02-00127",
                "label": "p. 9; topic 2 point 114"
              }
            ]
          },
          {
            "id": "rectangular-net-allowable",
            "title": "Rectangular footings, net ultimate capacity and the governing allowable pressure",
            "html": "<p>A common textbook interpolation extends Terzaghi's equation to a rectangle of width B and length L. In net form, <strong>q<sub>nu</sub> = (1 + 0.3B/L)cN<sub>c</sub> + q(N<sub>q</sub> − 1) + 0.5γBN<sub>γ</sub>(1 − 0.2B/L)</strong>. Subtracting the base overburden q from the gross expression produces the q(N<sub>q</sub> − 1) term. This is a stated textbook interpolation, not a current-code design prescription.</p><p>Worked case with B/L = 0.5, cN<sub>c</sub> = 200 kPa, q = 18 kPa, N<sub>q</sub> = 10 and 0.5γBN<sub>γ</sub> = 90 kPa: the cohesive term is 1.15 × 200 = 230 kPa, the net surcharge term 18 × 9 = 162 kPa and the unit-weight term 90 × 0.9 = 81 kPa, so q<sub>nu</sub> = 473 kPa. Adding back q gives the gross value of 491 kPa.</p><p>The <strong>allowable bearing pressure</strong> must satisfy both shear and settlement. With q<sub>nu</sub> = 450 kPa and a shear factor of safety of 3, the net safe pressure is 150 kPa; if the net pressure meeting the settlement requirement is 110 kPa, the governing net allowable pressure is the smaller value, 110 kPa. Net and gross bases must stay consistent, and the shear factor of safety is not applied again to the settlement value.</p>",
            "moreHtml": "<p>The shape factors are chosen so that the rectangle reduces to the familiar cases. At B/L = 1 they recover the square coefficients 1.3 and 0.5 × 0.8 = 0.4; as B/L approaches zero they recover the strip coefficients 1 and 0.5. Placing the second shape factor outside the unit-weight term, or changing its sign, breaks this consistency.</p>",
            "sources": [
              {
                "id": "CAP4-02-00132",
                "label": "p. 9; topic 2 point 119"
              },
              {
                "id": "CAP4-02-00133",
                "label": "p. 9; topic 2 point 119"
              },
              {
                "id": "CAP4-02-00129",
                "label": "p. 9; topic 2 point 116"
              }
            ]
          },
          {
            "id": "groundwater-in-bearing-capacity",
            "title": "Groundwater in bearing-capacity calculations",
            "html": "<p>Groundwater lowers effective stress and therefore lowers drained bearing resistance, but its effect depends on where the water table sits. When water rises above the footing base, both the <strong>effective overburden</strong> at base level, which feeds the N<sub>q</sub> term, and the <strong>effective unit weight</strong> of soil in the failure zone, which feeds the N<sub>γ</sub> term, must be reconsidered. Adjusting only the cohesion term, the plan area or the safety factor misses these changes.</p><p>When the water table lies within about one footing width below the base, a conventional correction interpolates linearly for the N<sub>γ</sub> term: <strong>γ<sub>eff</sub> = γ' + (z<sub>w</sub>/B)(γ − γ')</strong>, where z<sub>w</sub> is the depth of water below the base. For a 2 m wide footing with water 1 m below its base, γ = 18 and γ' = 10 kN/m<sup>3</sup>, half of that zone is above water and γ<sub>eff</sub> = 10 + 0.5 × (18 − 10) = 14 kN/m<sup>3</sup>. Beyond a depth of B the conventional correction is no longer applied. This is an approximate interpolation for the unit-weight term, not a sharp physical cutoff for every groundwater effect, and a correction below the base does not remove the need to check base-level effective overburden when water rises higher.</p>",
            "sources": [
              {
                "id": "CAP4-02-00058",
                "label": "p. 7; topic 2 point 54"
              },
              {
                "id": "CAP4-02-00059",
                "label": "p. 7; topic 2 point 54"
              }
            ]
          },
          {
            "id": "what-bearing-capacity-depends-on",
            "title": "What bearing capacity depends on: soil state, footing size and shape, not demand",
            "html": "<p>Bearing capacity is a <strong>resistance</strong> of the soil–footing system. It depends on soil strength, which reflects density and fabric as well as grain size; on stress conditions, which groundwater alters through effective stress; and on footing width, shape and embedment, which govern the failure mechanism. Two sands with the same median grain size but different density, groundwater and footing shape cannot be assumed to share one bearing capacity.</p><p>Footing size enters explicitly. For an ideal surface strip on cohesionless soil with c' = 0 and no surcharge, q<sub>u</sub> = 0.5γBN<sub>γ</sub> is proportional to B, so doubling the width doubles the ultimate pressure; total load also scales with area, and another shape needs its own coefficients.</p><p>Applied load is <strong>demand</strong>. Doubling a centred service load on an unchanged footing doubles the applied pressure P/A and cuts the margin, but it does not raise the model's resistance to match. Load inclination, eccentricity, loading history or rate can change the capacity model, so those conditions cannot be ignored.</p><p>Rock needs the same care. A soft-rock label carries no intrinsic bearing value: rock-mass performance depends on joints, weathering, weak seams, orientation, confinement and deformation, and a presumptive pressure needs an applicable source and conditions.</p>",
            "sources": [
              {
                "id": "CAP4-02-00124",
                "label": "p. 9; topic 2 point 113"
              },
              {
                "id": "CAP4-02-00125",
                "label": "p. 9; topic 2 point 113"
              },
              {
                "id": "CAP4-02-00157",
                "label": "p. 10; topic 2 point 139"
              },
              {
                "id": "CAP4-02-00121",
                "label": "p. 9; topic 2 point 110"
              }
            ]
          },
          {
            "id": "bearing-failure-modes",
            "title": "Bearing failure modes and the wedge-angle assumptions behind them",
            "html": "<p>Three idealized modes describe how a shallow footing fails. In <strong>general shear</strong> a continuous rupture surface reaches the ground, the load–settlement curve shows a clear peak and the soil heaves beside the footing; this is common for shallow footings on dense sand or stiff clay in homogeneous ground. In <strong>local shear</strong> the mechanism develops only partly: settlement is large and progressive, rupture zones do not fully reach the surface and there is no distinct peak, as on relatively compressible sand. In <strong>punching shear</strong> the footing penetrates highly compressible ground with localized shearing along its sides and little surface heave.</p><p>The mode follows the observed mechanism and ground conditions, not relative density alone. Very loose ground can punch rather than fail in local shear, and embedment or a strong layer over weak soil can change the mode. Soil punching is also different from structural punching of the footing slab or a concrete cone failure around a column.</p><p>Failure-plane angles depend on the mechanism assumed. Terzaghi's original rough-strip construction takes the central wedge faces at φ to the horizontal, whereas Prandtl-type constructions use 45° + φ/2. An angle from one model cannot be transferred to another without checking its assumptions.</p>",
            "sources": [
              {
                "id": "CAP4-02-00144",
                "label": "p. 10; topic 2 point 128"
              },
              {
                "id": "CAP4-02-00159",
                "label": "p. 10; topic 2 point 141"
              },
              {
                "id": "CAP4-02-00087",
                "label": "p. 8; topic 2 point 63"
              }
            ]
          },
          {
            "id": "plate-load-test-scaling",
            "title": "Plate load tests: scaling from plate to footing and groundwater limits",
            "html": "<p>A <strong>plate load test</strong> loads a small plate at the proposed founding level, and its result must be scaled to the real footing. For homogeneous undrained clay the ultimate <em>pressure</em> is taken as independent of width, q<sub>uf</sub> = q<sub>up</sub>. The failure <em>load</em> still scales with area: a plate failing at 400 kPa implies Q<sub>u</sub> = 400 × 4 = 1600 kN for a comparable 2 m square footing, ignoring embedment differences.</p><p>For comparable shallow footings on homogeneous sand, an approximate relation lets pressure grow with width, q<sub>uf</sub> = q<sub>up</sub>(B<sub>f</sub>/B<sub>p</sub>). A 0.5 m plate failing at 150 kPa suggests 150 × (2/0.5) = 600 kPa for a 2 m footing. For geometrically similar square footings three times the plate width, pressure rises threefold and area ninefold, so the ultimate total load rises 3 × 9 = 27 times.</p><p>These relations assume homogeneous ground, similar embedment and a dominant width-dependent term, and they neither predict settlement nor apply to layered ground. A test can be carried out with groundwater below the plate, but it reflects the groundwater, stress and geometry at the time. If the seasonal water table may rise into the future footing's influence zone, design must assess that changed condition, along with scale effects and the deeper influence of the full-size footing.</p>",
            "sources": [
              {
                "id": "CAP4-02-00061",
                "label": "p. 7; topic 2 point 56"
              },
              {
                "id": "CAP4-02-00064",
                "label": "p. 8; topic 2 point 59"
              },
              {
                "id": "CAP4-02-00123",
                "label": "p. 9; topic 2 point 112"
              },
              {
                "id": "CAP4-02-00054",
                "label": "p. 7; topic 2 point 50"
              }
            ]
          },
          {
            "id": "subgrade-reaction-contact-pressure",
            "title": "Modulus of subgrade reaction and raft contact pressure",
            "html": "<p>The <strong>modulus of subgrade reaction</strong> is a secant ratio of pressure to settlement, k<sub>s</sub> = p/δ. Matched plate tests at 120 kPa that settle 6 mm before a rise in groundwater and 12 mm afterwards give 120/0.006 = 20000 kN/m<sup>3</sup> and 120/0.012 = 10000 kN/m<sup>3</sup>. Such observations contradict any claim that k<sub>s</sub> is independent of the water table: groundwater can alter effective stress and stiffness. The particular numbers do not, however, establish a universal halving rule.</p><p>Contact pressure beneath a raft follows <strong>soil–structure interaction</strong>. The relative rigidity of raft and ground, the layout of column loads, the stratigraphy and nonlinear yielding all influence it. Weak soil alone does not force a uniform pressure, a stiff raft enforces compatible movement rather than equal pressure, and pressure does not simply follow each column's share of the load. Uniform pressure is an analysis idealization that needs justification.</p>",
            "sources": [
              {
                "id": "CAP4-02-00154",
                "label": "p. 10; topic 2 point 136"
              },
              {
                "id": "CAP4-02-00118",
                "label": "p. 9; topic 2 point 107"
              }
            ]
          },
          {
            "id": "eccentric-loading-middle-third",
            "title": "Eccentric loading and the middle-third rule",
            "html": "<p>A footing carrying both axial load and bending moment is <strong>eccentrically loaded</strong>: the moment is equivalent to shifting the load a distance e = M/P from the centroid. For a rigid footing in full linear contact, pressure varies across the bending direction as <strong>q = (P/BL)(1 ± 6e/B)</strong>, where B is the dimension in that direction.</p><p>Worked case: a 3 m by 2 m footing with P = 900 kN and M = 180 kN m bending across its 2 m width has e = 180/900 = 0.20 m, within B/6 = 0.333 m. The mean pressure is 900/(3 × 2) = 150 kPa, and the extremes are 150(1 ± 6 × 0.20/2) = 150(1 ± 0.6), giving 240 kPa and 60 kPa.</p><p>The <strong>middle-third rule</strong>, e ≤ B/6, keeps the linear pressure diagram nonnegative. When e exceeds B/6 the formula predicts tension at one edge, which ordinary soil contact cannot sustain. The correct response is to recalculate a compression-only contact area and pressure distribution that satisfies force and moment balance, rather than zeroing the negative edge while keeping the original maximum, treating the tension as extra resistance, or ignoring the moment.</p>",
            "sources": [
              {
                "id": "CAP4-02-00164",
                "label": "p. 10; topic 2 point 145"
              },
              {
                "id": "CAP4-02-00165",
                "label": "p. 10; topic 2 point 145"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-consolidation-water-table",
            "status": "corrected",
            "prompt": "Consolidation settlement is calculated for a clay layer with the water table at the ground surface",
            "html": "<p>Read as a restriction, this is incorrect. Primary consolidation depends on drainage and the effective-stress increase in the compressible layer, so a clay below a water table at any depth can consolidate. The water-table position only sets the initial stresses.</p>",
            "sources": [
              {
                "id": "CAP4-02-00034",
                "label": "p. 7; topic 2 point 31"
              }
            ]
          },
          {
            "id": "caution-oedometer-specimen-height",
            "status": "review",
            "prompt": "The typical height of an oedometer specimen is 20 mm",
            "html": "<p>20 mm describes a typical specimen size, not a mandatory dimension. Calculations should use the actual thickness supplied, and the drainage path is half of it when both faces drain.</p>",
            "sources": [
              {
                "id": "CAP4-02-00053",
                "label": "p. 7; topic 2 point 49"
              }
            ]
          },
          {
            "id": "caution-plate-test-groundwater",
            "status": "review",
            "prompt": "Any water-table level below the footing is not a limitation of the plate load test",
            "html": "<p>Testing is possible with groundwater below the plate, but the statement does not establish that the interpretation is independent of groundwater. The result reflects the conditions tested, and a seasonal rise into the footing's influence zone must be assessed in design.</p>",
            "sources": [
              {
                "id": "CAP4-02-00054",
                "label": "p. 7; topic 2 point 50"
              }
            ]
          },
          {
            "id": "caution-water-table-correction-range",
            "status": "review",
            "prompt": "In Terzaghi's theory the water-table correction applies up to a depth B below the footing",
            "html": "<p>The B-deep range is a conventional correction zone for the unit-weight term, applied as an approximate linear interpolation. It is not a universal physical boundary of the failure mechanism or of every groundwater effect.</p>",
            "sources": [
              {
                "id": "CAP4-02-00058",
                "label": "p. 7; topic 2 point 54"
              }
            ]
          },
          {
            "id": "caution-plate-clay-pressure-not-load",
            "status": "corrected",
            "prompt": "For clay, the footing's ultimate bearing capacity from a plate load test equals the plate's",
            "html": "<p>The equality refers to ultimate bearing <em>pressures</em> under comparable conditions, not to identical total failure loads. The footing's ultimate load is the plate pressure multiplied by the footing area.</p>",
            "sources": [
              {
                "id": "CAP4-02-00061",
                "label": "p. 7; topic 2 point 56"
              }
            ]
          },
          {
            "id": "caution-plate-sand-width-ratio",
            "status": "corrected",
            "prompt": "For cohesionless soil, footing capacity is plate capacity multiplied by a width ratio of ambiguous order",
            "html": "<p>The capsule's fraction order is ambiguous. The approximate relation is q<sub>uf</sub> = q<sub>up</sub>(B<sub>f</sub>/B<sub>p</sub>), footing width over plate width, and it applies only to comparable shallow footings on homogeneous sand under limited assumptions.</p>",
            "sources": [
              {
                "id": "CAP4-02-00064",
                "label": "p. 8; topic 2 point 59"
              }
            ]
          },
          {
            "id": "caution-rigid-cone-wedge-model",
            "status": "review",
            "prompt": "The rigid cone below a foundation is inclined at 45° + φ/2 to the horizontal",
            "html": "<p>The unqualified angle is model-dependent: Terzaghi's original construction uses φ to the horizontal, whereas Prandtl-type mechanisms use 45° + φ/2. No source image was reviewed; the distinction rests on the existing audited wedge-angle note.</p>",
            "sources": [
              {
                "id": "CAP4-02-00087",
                "label": "p. 8; topic 2 point 63"
              }
            ]
          },
          {
            "id": "caution-sand-settlement-40",
            "status": "review",
            "prompt": "The IS code permits a maximum settlement of 40 mm for isolated foundations on sand",
            "html": "<p>The code, edition, table and structural category behind this value are unverified. The 40 mm figure is used here only as a stated project assumption for comparison, not as a current code limit.</p>",
            "sources": [
              {
                "id": "CAP4-02-00116",
                "label": "p. 9; topic 2 point 105"
              }
            ]
          },
          {
            "id": "caution-raft-uniform-pressure",
            "status": "corrected",
            "prompt": "On weak soil, raft contact pressure tends to be uniform",
            "html": "<p>This universal claim is rejected. Contact pressure follows soil–structure interaction, including relative rigidity, load layout, stratigraphy and yielding; uniform pressure is an idealization that needs justification.</p>",
            "sources": [
              {
                "id": "CAP4-02-00118",
                "label": "p. 9; topic 2 point 107"
              }
            ]
          },
          {
            "id": "caution-soft-rock-440",
            "status": "review",
            "prompt": "Soft rock has a bearing capacity of 440 kN/m²",
            "html": "<p>The 440 kPa value is unverified, and the notes do not endorse any replacement number. A rock-foundation pressure needs rock-mass characterization, including discontinuities and weathering, together with settlement checks.</p>",
            "sources": [
              {
                "id": "CAP4-02-00121",
                "label": "p. 9; topic 2 point 110"
              }
            ]
          },
          {
            "id": "caution-plate-sand-load-scaling",
            "status": "review",
            "prompt": "Plate-load bearing capacity for cohesionless soil scales with Bf/Bp",
            "html": "<p>The capsule repeats the approximate sand pressure–width relation. It is taught here only under explicit similarity and homogeneity assumptions, and its load consequence differs: total load scales with the pressure ratio multiplied by the area ratio.</p>",
            "sources": [
              {
                "id": "CAP4-02-00123",
                "label": "p. 9; topic 2 point 112"
              }
            ]
          },
          {
            "id": "caution-circular-footing-diameter",
            "status": "corrected",
            "prompt": "Circular-footing bearing capacity written without B in the unit-weight term",
            "html": "<p>The printed or extracted expression omits the diameter B from the unit-weight term, which makes it dimensionally inconsistent. The classical circular form is q<sub>u</sub> = 1.3cN<sub>c</sub> + qN<sub>q</sub> + 0.3γBN<sub>γ</sub>.</p>",
            "sources": [
              {
                "id": "CAP4-02-00126",
                "label": "p. 9; topic 2 point 114"
              }
            ]
          },
          {
            "id": "caution-rectangular-formula-signs",
            "status": "corrected",
            "prompt": "Terzaghi's rectangular-footing formula printed with a plus sign and a detached shape term",
            "html": "<p>The extracted formula shows a plus sign and a detached shape term where the common interpolation multiplies the unit-weight term by (1 − 0.2B/L). The net form is (1 + 0.3B/L)cN<sub>c</sub> + q(N<sub>q</sub> − 1) + 0.5γBN<sub>γ</sub>(1 − 0.2B/L), a textbook interpolation rather than a code prescription.</p>",
            "sources": [
              {
                "id": "CAP4-02-00132",
                "label": "p. 9; topic 2 point 119"
              }
            ]
          },
          {
            "id": "caution-local-shear-loose-soil",
            "status": "review",
            "prompt": "Local shear failure occurs in loose soil",
            "html": "<p>The association is qualified by the observed mechanism. Local shear shows partial rupture and progressive settlement without a clear peak, but very loose or highly compressible ground can fail by punching instead; relative density alone does not fix the mode.</p>",
            "sources": [
              {
                "id": "CAP4-02-00144",
                "label": "p. 10; topic 2 point 128"
              }
            ]
          },
          {
            "id": "caution-clay-settlement-65",
            "status": "review",
            "prompt": "The IS code permits a maximum settlement of 65 mm for isolated foundations on clay",
            "html": "<p>The code, edition, table and structural category are unverified. The 65 mm figure is treated only as a stated project assumption, and passing a total-settlement limit does not settle differential movement or overall serviceability.</p>",
            "sources": [
              {
                "id": "CAP4-02-00145",
                "label": "p. 10; topic 2 point 129"
              }
            ]
          },
          {
            "id": "caution-subgrade-water-table",
            "status": "corrected",
            "prompt": "The coefficient of subgrade reaction does not depend on the water table",
            "html": "<p>This claim is corrected. Groundwater can change effective stress and stiffness, so plate tests before and after a water-table rise can give different secant moduli; no universal numerical factor follows from one pair of tests.</p>",
            "sources": [
              {
                "id": "CAP4-02-00154",
                "label": "p. 10; topic 2 point 136"
              }
            ]
          },
          {
            "id": "caution-overconsolidation-less-settlement",
            "status": "review",
            "prompt": "Over-consolidated soil results in less settlement",
            "html": "<p>The claim holds conditionally: for comparable soils, reloading below the preconsolidation stress follows the stiffer recompression branch. If the load carries the stress beyond the past maximum, virgin compression adds settlement.</p>",
            "sources": [
              {
                "id": "CAP4-02-00155",
                "label": "p. 10; topic 2 point 137"
              }
            ]
          },
          {
            "id": "caution-capacity-versus-load",
            "status": "review",
            "prompt": "The bearing capacity of soil does not depend on the load from the structure",
            "html": "<p>Qualified: the magnitude of the service load is demand, distinct from resistance. Loading conditions such as inclination, eccentricity, history and rate can nevertheless change the bearing-capacity model.</p>",
            "sources": [
              {
                "id": "CAP4-02-00157",
                "label": "p. 10; topic 2 point 139"
              }
            ]
          },
          {
            "id": "caution-raft-settlement-tolerance",
            "status": "review",
            "prompt": "Permissible settlement is relatively higher for a mat foundation on clay",
            "html": "<p>No code, edition or structural category is given, so only the conditional principle is taught: a raft may tolerate more uniform settlement, subject to differential and distortion limits.</p>",
            "sources": [
              {
                "id": "CAP4-02-00158",
                "label": "p. 10; topic 2 point 140"
              }
            ]
          },
          {
            "id": "caution-punching-dense-soils",
            "status": "corrected",
            "prompt": "Punching shear failure may occur in dense sand and stiff clay",
            "html": "<p>As a general classification the association is unreliable. Punching is characteristic of highly compressible ground, while dense sand and stiff clay usually fail in general shear under shallow homogeneous conditions. Any special stratification or embedment that permits punching must be stated.</p>",
            "sources": [
              {
                "id": "CAP4-02-00159",
                "label": "p. 10; topic 2 point 141"
              }
            ]
          },
          {
            "id": "caution-immediate-settlement-factor",
            "status": "corrected",
            "prompt": "Immediate settlement of cohesive soil uses the factor 1 + μ²",
            "html": "<p>The damaged factor is corrected: the elastic expression is S<sub>i</sub> = qB(1 − ν<sup>2</sup>)I/E<sub>s</sub>, including the influence factor I that the capsule omits. Using 1 + ν<sup>2</sup> overestimates the settlement.</p>",
            "sources": [
              {
                "id": "CAP4-02-00163",
                "label": "p. 10; topic 2 point 144"
              }
            ]
          }
        ],
        "gaps": [
          "Consolidation settlement from compression indices, and the relation between time factor and degree of consolidation, are not calculated in these capsule points.",
          "Secondary compression appears only as creep after primary consolidation; no coefficient or calculation is given.",
          "Bearing-capacity factors beyond the rounded 20-degree row and the undrained case, and depth, inclination or code-based factors, are not covered.",
          "The IS settlement limits quoted by the capsule remain unverified, and no presumptive bearing values for soil or rock are endorsed.",
          "Plate-load-test procedure, plate sizes and loading increments are not described."
        ]
      }
    });
})();
