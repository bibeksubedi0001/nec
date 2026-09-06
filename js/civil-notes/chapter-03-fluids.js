(function () {
    "use strict";

    Object.assign(window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {}, {
        ACiE0301: {
            code: "ACiE0301",
            questionCount: 68,
            blocks: [
                {
                    id: "fluid-density-reference-properties",
                    title: "Density, unit weight and reference properties",
                    html: "<table><thead><tr><th scope='col'>Property</th><th scope='col'>Definition and SI unit</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Mass density</th><td>ρ = m/V; kg/m<sup>3</sup>.</td></tr>" +
                        "<tr><th scope='row'>Specific weight</th><td>γ = W/V = ρg; N/m<sup>3</sup>.</td></tr>" +
                        "<tr><th scope='row'>Specific gravity</th><td>G = ρ/ρ<sub>ref</sub>; dimensionless.</td></tr>" +
                        "<tr><th scope='row'>Specific volume</th><td>v = V/m = 1/ρ; m<sup>3</sup>/kg.</td></tr></tbody></table>" +
                        "<p>Greater ρ means smaller v, not smaller G. Specific gravity is <strong>intensive</strong>: sample quantity does not change it at the same state. Specify reference fluid and temperature; liquids usually reference water. Pure freshwater has maximum density near <strong>4°C</strong> at ordinary pressure. Equal-volume water outweighs lighter oil, assuming identical containers.</p>",
                    sources: [
                        { id: "WATE701-00003", set: 2, question: 50 },
                        { id: "WATE701-00008", set: 2, question: 55 },
                        { id: "WATE701-00113", set: 11, question: 51 },
                        { id: "WATE701-00114", set: 11, question: 52 },
                        { id: "WATE701-00115", set: 11, question: 53 },
                        { id: "WATE701-00116", set: 11, question: 54 },
                        { id: "WATE701-00122", set: 12, question: 47 },
                        { id: "WATE701-00123", set: 12, question: 48 }
                    ]
                },
                {
                    id: "fluid-density-bank-calculations",
                    title: "Weight, mass and volume: bank calculations",
                    html: "<p>Using the bank conventions g = 9.81 m/s<sup>2</sup> and ρ<sub>w</sub> = 1000 kg/m<sup>3</sup>, <strong>6.5 N in one litre</strong> gives γ = 6.5/0.001 = 6500 N/m<sup>3</sup>; m = 6.5/9.81 = 0.6626 kg; G = 6500/9810 = 0.6626; v = 1/0.6626 = 1.509 litres/kg.</p>" +
                        "<p>For petrol, G = 0.6 gives γ = 5886 N/m<sup>3</sup>. With 20 dm<sup>3</sup> = 0.020 m<sup>3</sup>, W = <strong>117.72 N</strong>. On the other planet, 1060 N at g = 6.625 gives m = 160 kg; 200 m<sup>3</sup> therefore gives ρ = 0.8 kg/m<sup>3</sup> and <strong>v = 1.25 m<sup>3</sup>/kg</strong>.</p>" +
                        "<p>At unchanged density, moving from g = 20 to 4 changes γ = 10 to <strong>2 N/m<sup>3</sup></strong>. Mass conservation alone does not guarantee unchanged density; volume must also remain unchanged.</p>",
                    sources: [
                        { id: "WATE701-00117", set: 1, question: 50 },
                        { id: "WATE701-00118", set: 11, question: 55 },
                        { id: "WATE701-00119", set: 11, question: 56 },
                        { id: "WATE701-00120", set: 11, question: 57 },
                        { id: "WATE701-00121", set: 11, question: 58 },
                        { id: "WATE701-00124", set: 12, question: 49 }
                    ]
                },
                {
                    id: "fluid-newtonian-stress-and-temperature",
                    title: "Fluid models, shear rate and temperature",
                    html: "<p>Ordinary fluids continually deform under shear. The ideal-fluid model is inviscid (zero viscosity) and incompressible (constant density); real Newtonian fluids can be viscous.</p><p><strong>τ = μ(du/dy)</strong>: stress is proportional to <em>shear-strain rate</em>, not accumulated strain. Here du/dy has units s<sup>−1</sup>; conversely, strain rate = τ/μ. Viscosity measures internal resistance to shearing. At unchanged state, a Newtonian fluid with μ = 1 poise retains that property at rest, although viscous shear vanishes.</p>",
                    moreHtml: "<p>Heating usually lowers liquid dynamic viscosity but raises gas dynamic viscosity. Keep the bank's matching distinct: viscosity–shear, capillarity–surface tension, vapour pressure–cavitation, and specific gravity–reference-water density.</p>",
                    sources: [
                        { id: "WATE701-00002", set: 2, question: 49 },
                        { id: "WATE701-00012", set: 2, question: 59 },
                        { id: "WATE701-00041", set: 5, question: 52 },
                        { id: "WATE701-00042", set: 5, question: 53 },
                        { id: "WATE701-00273", set: 24, question: 56 },
                        { id: "WATE701-00371", set: 32, question: 58 },
                        { id: "WATE701-00372", set: 32, question: 59 }
                    ]
                },
                {
                    id: "fluid-viscosity-units-and-numbers",
                    title: "Dynamic versus kinematic viscosity",
                    html: "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Units and dimensions</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Dynamic μ</th><td>Pa·s = N·s/m<sup>2</sup>; M L<sup>−1</sup> T<sup>−1</sup>. One poise = 0.1 Pa·s.</td></tr>" +
                        "<tr><th scope='row'>Kinematic ν = μ/ρ</th><td>m<sup>2</sup>/s; L<sup>2</sup> T<sup>−1</sup>. One stokes = 10<sup>−4</sup> m<sup>2</sup>/s.</td></tr></tbody></table>" +
                        "<p><strong>Bank calculations:</strong> 0.1 stokes = 10<sup>−5</sup> m<sup>2</sup>/s. With τ = 0.03 Pa and du/dy = 0.15 s<sup>−1</sup>, μ = 0.2 Pa·s = <strong>2 poise</strong>. The 30°C water item intends approximately 0.801 <em>centipoise</em>, or 0.000801 Pa·s, not 0.801 Pa·s.</p>",
                    sources: [
                        { id: "WATE701-00274", set: 24, question: 57 },
                        { id: "WATE701-00373", set: 32, question: 60 },
                        { id: "WATE701-00374", set: 33, question: 46 },
                        { id: "WATE701-00375", set: 33, question: 47 },
                        { id: "WATE701-00376", set: 33, question: 48 },
                        { id: "WATE701-00377", set: 33, question: 49 }
                    ]
                },
                {
                    id: "fluid-non-newtonian-dimensions",
                    title: "Non-Newtonian classes and consistency index",
                    html: "<p>A non-Newtonian fluid does not obey a constant-μ Newtonian law. For positive shear rate, the power law is <strong>τ = K(du/dy)<sup>n</sup></strong>; apparent viscosity is K(du/dy)<sup>n−1</sup>. Pseudoplastic fluids with 0 &lt; n &lt; 1 shear-thin; dilatant fluids with n &gt; 1 shear-thicken. </p><p>Dimensions give <strong>[K] = Pa·s<sup>n</sup> = M L<sup>−1</sup> T<sup>n−2</sup></strong>. The time exponent vanishes at n = <strong>2</strong>, not the Newtonian n = 1. For the bank's formal n = −1 exercise, K has units <strong>Pa/s</strong>, equivalently N/(m<sup>2</sup>·s).</p>",
                    moreHtml: "<p>Bingham behaviour requires a yield stress before flow; thixotropy describes time-dependent structural change, not merely shear-rate dependence.</p>",
                    sources: [
                        { id: "WATE701-00006", set: 2, question: 53 },
                        { id: "WATE701-00286", set: 25, question: 54 },
                        { id: "WATE701-00287", set: 25, question: 55 },
                        { id: "WATE701-00384", set: 33, question: 56 }
                    ]
                },
                {
                    id: "fluid-bulk-modulus-compressibility",
                    title: "Bulk modulus and compressibility",
                    html: "<p><strong>B = −V dp/dV = −dp/(dV/V)</strong>; compression means dp &gt; 0 and dV &lt; 0, giving positive B. Compressibility κ = 1/B has units Pa<sup>−1</sup>; B has pressure units, not viscosity units. Larger B means smaller volume strain for a given small pressure increment.</p>" +
                        "<p>Water is much less compressible than the listed gases, not perfectly incompressible. The bank's roughly <strong>2.2 GPa</strong> is an indicative water value. B depends on state and compression path; liquid B commonly increases with pressure, but neither pressure nor temperature independence follows from its definition.</p>",
                    sources: [
                        { id: "SOIL136-00043", set: 5, question: 38 },
                        { id: "WATE701-00004", set: 2, question: 51 },
                        { id: "WATE701-00285", set: 1, question: 56 }
                    ]
                },
                {
                    id: "fluid-surface-tension-energy",
                    title: "Surface tension, wetting and surface energy",
                    html: "<p>Surface tension σ is interfacial force per length, N/m, also energy per area, J/m<sup>2</sup>. Unbalanced cohesive interactions explain a free liquid surface; adhesion to another material affects wetting. Do not interchange surface tension and pressure.</p>" +
                        "<p>At constant σ, <strong>ΔE = σΔA</strong>. Splitting the bank's 1 cm drop into 1000 equal drops conserves volume, giving each diameter <strong>1 mm</strong>. Total area becomes ten times the original π(0.01)<sup>2</sup> m<sup>2</sup>. Thus ΔE = 0.075 × 9π(0.01)<sup>2</sup> = <strong>0.212 mJ gained</strong>: creating surface requires energy.</p>",
                    sources: [
                        { id: "WATE701-00288", set: 25, question: 56 },
                        { id: "WATE701-00296", set: 26, question: 54 }
                    ]
                },
                {
                    id: "fluid-laplace-interface-comparison",
                    title: "Laplace pressure: interfaces and curvature",
                    html: "<p>For one interface, <strong>Δp = σ(1/R<sub>1</sub> + 1/R<sub>2</sub>)</strong>. The table uses radius r, diameter d = 2r and inside-minus-outside pressure.</p>" +
                        "<table><thead><tr><th scope='col'>Geometry</th><th scope='col'>Excess pressure</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Spherical drop or gas bubble in liquid</th><td>One interface: 2σ/r = 4σ/d.</td></tr>" +
                        "<tr><th scope='row'>Thin soap bubble in air</th><td>Two interfaces: 4σ/r = 8σ/d.</td></tr>" +
                        "<tr><th scope='row'>Long cylindrical liquid jet</th><td>One nonzero curvature: σ/r = 2σ/d.</td></tr></tbody></table>" +
                        "<p>These idealized curved surfaces have positive excess internal pressure. At common σ and external pressure, soap bubbles of diameters d and 2d have excess pressures in ratio <strong>2:1</strong>. At equal diameter, soap-bubble excess pressure is <strong>four times</strong> the cylindrical jet's.</p>",
                    sources: [
                        { id: "SOIL136-00162", set: 14, question: 37 },
                        { id: "WATE701-00007", set: 2, question: 54 },
                        { id: "WATE701-00017", set: 3, question: 52 },
                        { id: "WATE701-00018", set: 3, question: 53 },
                        { id: "WATE701-00019", set: 3, question: 54 },
                        { id: "WATE701-00090", set: 9, question: 52 }
                    ]
                },
                {
                    id: "fluid-laplace-bank-calculations",
                    title: "Droplet, bubble and jet calculations",
                    html: "<p><strong>0.05 N/cm<sup>2</sup> = 500 Pa.</strong> For a spherical drop, d = 4σ/Δp: the stated σ = 0.51 N/m gives <strong>4.08 mm</strong>; σ = 0.075 N/m instead gives <strong>0.6 mm</strong>. The first calculation accepts its supplied coefficient without endorsing it as water's 25°C surface tension.</p>" +
                        "<p>The 5 cm cylindrical jet gives Δp = 2(0.075)/0.05 = <strong>3 Pa</strong>. For the ambiguous submerged bubble, interpreting 0.075 N/cm<sup>2</sup> as <em>excess</em> pressure gives 750 Pa: one spherical interface yields <strong>0.4 mm</strong>, whereas two soap-film interfaces yield <strong>0.8 mm</strong>.</p>",
                    sources: [
                        { id: "SOIL136-00161", set: 14, question: 36 },
                        { id: "WATE701-00289", set: 25, question: 57 },
                        { id: "WATE701-00290", set: 26, question: 49 },
                        { id: "WATE701-00291", set: 26, question: 50 }
                    ]
                },
                {
                    id: "fluid-capillary-balance-contact-angle",
                    title: "Capillary balance and contact angle",
                    html: "<p>For the narrow circular-tube idealization, <strong>h = 4σ cosθ/(ρgd)</strong>. Here h is signed <em>vertical</em> rise, d the internal diameter and θ the contact angle measured through liquid. Neglect gas density and meniscus-volume corrections; N/m divided by (N/m<sup>3</sup>)·m gives metres.</p><p>Wetting with θ &lt; 90° produces rise; θ &gt; 90° produces depression; θ = 90° gives zero ideal rise. Tube material matters through wetting, not just bore size. </p>",
                    moreHtml: "<p>Heating commonly reduces capillary magnitude through falling σ, provided changes in density and contact angle do not reverse that trend.</p>",
                    sources: [
                        { id: "WATE701-00001", set: 2, question: 48 },
                        { id: "SOIL136-00163", set: 1, question: 38 }
                    ]
                },
                {
                    id: "fluid-capillary-bank-calculations",
                    title: "Capillary ratios and signed calculations",
                    html: "<p>At unchanged liquid/contact conditions, hd is constant: an 8 mm depression in a 1.2 mm bore becomes 4 mm in a <strong>2.4 mm</strong> bore. If h<sub>P</sub>/h<sub>Q</sub> = 2/3, d<sub>P</sub>/d<sub>Q</sub> = <strong>3/2</strong>. Under a reservoir-fed capillary-rise interpretation, σ<sub>1</sub>/σ<sub>2</sub> = 1/2 and ρ<sub>1</sub>/ρ<sub>2</sub> = 1/4 in identical tubes with equal contact angles give h<sub>1</sub>/h<sub>2</sub> = <strong>2</strong>. </p><p>The 10 mm water-tube estimate uses its explanation's σ = 0.073 N/m, θ = 0°, ρ = 1000 and g = 9.81: h ≈ <strong>2.98 mm</strong>. The mercury case uses d = 7 mm, σ = 0.51, θ = 130°, and its explanation's ρ = 13500 kg/m<sup>3</sup>, g = 9.81: h ≈ <strong>−1.41 mm</strong>, a depression.</p>",
                    moreHtml: "<p>If equal volumes are merely poured into identical tubes, bulk column heights are instead equal, neglecting meniscus effects; the source's experiment is not specified clearly.</p>",
                    sources: [
                        { id: "WATE701-00015", set: 3, question: 50 },
                        { id: "WATE701-00016", set: 3, question: 51 },
                        { id: "WATE701-00293", set: 26, question: 52 },
                        { id: "WATE701-00295", set: 26, question: 53 },
                        { id: "WATE701-00297", set: 26, question: 55 }
                    ]
                },
                {
                    id: "fluid-capillary-geometry-and-microgravity",
                    title: "Inclination, finite volume and microgravity",
                    html: "<p>Inclining the tube 30° from vertical leaves vertical h unchanged; the wetted length becomes <strong>h/cos30° = 2h/√3</strong>. Halving diameter doubles ideal capillary rise from a reservoir; it instead quadruples the column height of a fixed poured volume when capillarity is not the question.</p>" +
                        "<p>In microgravity, wetting forces remain, but dividing by g = 0 does not predict an infinite rise or fountain. Filling a finite tube requires suitable wetting, available liquid and gas escape; trapped gas and end conditions can prevent complete filling.</p>",
                    sources: [
                        { id: "SOIL136-00160", set: 14, question: 35 },
                        { id: "WATE701-00282", set: 25, question: 51 },
                        { id: "WATE701-00292", set: 26, question: 51 },
                        { id: "WATE701-00294", set: 1, question: 57 }
                    ]
                },
                {
                    id: "fluid-vapour-pressure-and-boiling",
                    title: "Vapour pressure and boiling conditions",
                    html: "<p>Saturation vapour pressure p<sub>v</sub> of a pure liquid is set by temperature and molecular behaviour, not sample quantity while both phases remain. It increases nonlinearly with temperature; in the ordinary range, its slope grows at higher temperature. Thus T<sub>3</sub> &gt; T<sub>2</sub> &gt; T<sub>1</sub> gives the greatest p<sub>v</sub> in container 3.</p>" +
                        "<p>Bulk boiling begins near <strong>p<sub>absolute</sub> = p<sub>v</sub>(T)</strong>, neglecting nucleation and curvature effects; lower imposed pressure favours vaporization. The repeated V<sub>1</sub> &gt; V<sub>2</sub> &gt; V<sub>3</sub> questions intend liquid 1, but chronological 'earliest' boiling also requires comparable heating and maintained vapour-pressure ordering.</p>",
                    sources: [
                        { id: "WATE701-00040", set: 5, question: 51 },
                        { id: "WATE701-00104", set: 10, question: 55 },
                        { id: "WATE701-00283", set: 25, question: 52 },
                        { id: "WATE701-00284", set: 25, question: 53 },
                        { id: "WATE701-00378", set: 33, question: 50 },
                        { id: "WATE701-00380", set: 33, question: 52 },
                        { id: "WATE701-00381", set: 33, question: 53 }
                    ]
                },
                {
                    id: "fluid-cavitation-local-pressure-number",
                    title: "Cavitation and its dimensionless pressure margin",
                    html: "<p>Cavitation involves vapour formation when <strong>local static absolute pressure</strong> falls sufficiently below p<sub>v</sub>(T), followed by collapse as surrounding pressure recovers above bubble pressure. Pressure reduction triggers flow-induced cavitation; it does not make vapour pressure independent of temperature.</p>" +
                        "<p>Write the cavitation number as <strong>Ca = (p<sub>ref,abs</sub> − p<sub>v</sub>)/(ρU<sup>2</sup>/2)</strong>, avoiding confusion with surface tension σ. Interpreting the bank's incomplete '0.5 kN' as 0.5 kN/m<sup>2</sup>, with its assumed ρ = 1000 kg/m<sup>3</sup> and U = 1 m/s, gives <strong>Ca = 1</strong>. A positive reference margin does not establish the minimum local pressure everywhere.</p>",
                    sources: [
                        { id: "HYDR626-00150", set: 17, question: 64 },
                        { id: "HYDR626-00187", set: 21, question: 63 },
                        { id: "WATE701-00382", set: 33, question: 54 },
                        { id: "WATE701-00383", set: 33, question: 55 }
                    ]
                }
            ],
            gaps: [
                "No rheological curve or pressure-volume dataset supports model fitting or bulk-modulus determination.",
                "Fluid classifications are sampled, not exhaustively tested. No measurements verify contact angles, material-property tables or microgravity boundary conditions; numerical coefficients here are bank inputs or labelled approximations."
            ],
            cautions: [
                {
                    "id": "check-soil136-00163",
                    "status": "review",
                    "prompt": "For liquid fluids, will capillarity rise (or fall) increase or decrease with rise in temperature?",
                    "html": "<p>Temperature trends also require sufficiently unchanged wetting and density.</p>",
                    "sources": [
                        {
                            "id": "SOIL136-00163",
                            "set": 1,
                            "question": 38
                        }
                    ]
                },
                {
                    "id": "check-wate701-00294",
                    "status": "review",
                    "prompt": "The rise in the level of a liquid in a tube is h. What will be the new rise in liquid level if the tube is inclined at an angle of 30° to the vertical?",
                    "html": "<p>'Rise' must distinguish vertical height from inclined length. </p><p>Material-dependent contact angle also matters.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00294",
                            "set": 1,
                            "question": 57
                        }
                    ]
                },
                {
                    "id": "check-wate701-00001",
                    "status": "review",
                    "prompt": "The rise of a liquid in a capillary tube depends on",
                    "html": "<p><strong>Capillary rise depends on more than tube radius.</strong> Surface tension, contact angle, liquid unit weight and inner radius all enter the equilibrium relation. Tube material affects contact angle, so the material and radius choices can overlap.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00001",
                            "set": 2,
                            "question": 48
                        }
                    ]
                },
                {
                    "id": "check-wate701-00012",
                    "status": "review",
                    "prompt": "With increase in temperature, viscosity......",
                    "html": "<p><strong>Rheology qualifications:</strong> WATE701-00012 omits liquid versus gas. </p>",
                    "sources": [
                        {
                            "id": "WATE701-00012",
                            "set": 2,
                            "question": 59
                        }
                    ]
                },
                {
                    "id": "check-wate701-00120",
                    "status": "review",
                    "prompt": "Calculate the specific weight and weight of 20dm³ of petrol of specific gravity 0.6.",
                    "html": "<p><strong>Density arithmetic:</strong> WATE701-00120's 117.2 N is not proper rounding of 117.72 N. </p>",
                    "sources": [
                        {
                            "id": "WATE701-00120",
                            "set": 11,
                            "question": 57
                        }
                    ]
                },
                {
                    "id": "check-wate701-00121",
                    "status": "review",
                    "prompt": "If 200m³ of fluid has a weight of 1060N measured on the planet having acceleration due to gravity 6.625m/s², what will be it’s specific volume?",
                    "html": "<p>WATE701-00121 keys density 0.8 as specific volume; the required 1.25 m<sup>3</sup>/kg is absent.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00121",
                            "set": 11,
                            "question": 58
                        }
                    ]
                },
                {
                    "id": "check-soil136-00160",
                    "status": "review",
                    "prompt": "Will capillary rise occur and if it occurs what will be capillary rise if glass capillarity tube is immersed in water and experiment is carried out by astronauts in space.",
                    "html": "<p><strong>Limits, not guarantees:</strong> whole-tube filling in space is conditional. </p>",
                    "sources": [
                        {
                            "id": "SOIL136-00160",
                            "set": 14,
                            "question": 35
                        }
                    ]
                },
                {
                    "id": "check-soil136-00161",
                    "status": "review",
                    "prompt": "The surface tension of fluid in contact with air at 25°C is 0.51N/m. The pressure inside a droplet is to be 0.05 N/cm2 greater than outside pressure Determine the diameter of the droplet of water.",
                    "html": "<p><strong>Use the supplied property, not a memorised water constant.</strong> With one droplet interface, diameter = 4T/delta-p. Converting 0.05 N/cm<sup>2</sup> to 500 Pa and using T = 0.51 N/m gives 4.08 mm; the surface-tension value is a stated input, not a verified water property at 25 degrees C.</p>",
                    "sources": [
                        {
                            "id": "SOIL136-00161",
                            "set": 14,
                            "question": 36
                        }
                    ]
                },
                {
                    "id": "check-hydr626-00150",
                    "status": "review",
                    "prompt": "Cavitation usually occurs due to the change of which of the following?",
                    "html": "<p><strong>Compare local absolute pressure with vapour pressure.</strong> Cavitation can begin when local liquid pressure becomes sufficiently low relative to the temperature-dependent vapour pressure. Do not describe vapour pressure as independent of temperature.</p>",
                    "sources": [
                        {
                            "id": "HYDR626-00150",
                            "set": 17,
                            "question": 64
                        }
                    ]
                },
                {
                    "id": "check-hydr626-00187",
                    "status": "review",
                    "prompt": "Cavitation usually occurs due to the change of",
                    "html": "<p><strong>Compare local absolute pressure with vapour pressure.</strong> Cavitation can begin when local liquid pressure becomes sufficiently low relative to the temperature-dependent vapour pressure. Do not describe vapour pressure as independent of temperature.</p>",
                    "sources": [
                        {
                            "id": "HYDR626-00187",
                            "set": 21,
                            "question": 63
                        }
                    ]
                },
                {
                    "id": "check-wate701-00274",
                    "status": "review",
                    "prompt": "What is the viscosity of water at 30°C?",
                    "html": "<p><strong>Viscosity type and units must be named.</strong> The number 0.801 is commonly quoted in cP for dynamic viscosity near 30 degrees C; it is not a dimensionless property or a kinematic-viscosity value.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00274",
                            "set": 24,
                            "question": 57
                        }
                    ]
                },
                {
                    "id": "check-wate701-00282",
                    "status": "review",
                    "prompt": "Will capillary rise occur and if it occurs what will be capillary rise if glass capillarity tube is immersed in water and experiment is carried out by astronauts in space.",
                    "html": "<p><strong>Limits, not guarantees:</strong> whole-tube filling in space is conditional. </p>",
                    "sources": [
                        {
                            "id": "WATE701-00282",
                            "set": 25,
                            "question": 51
                        }
                    ]
                },
                {
                    "id": "check-wate701-00283",
                    "status": "review",
                    "prompt": "Which of the following is the condition for the boiling of a liquid?",
                    "html": "<p><strong>Boiling threshold:</strong> equilibrium vapour pressure reaches the surrounding absolute pressure. Offered equality and inclusive-inequality choices can overlap at the threshold, so their intended distinction must be stated.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00283",
                            "set": 25,
                            "question": 52
                        }
                    ]
                },
                {
                    "id": "check-wate701-00284",
                    "status": "review",
                    "prompt": "Which of the following equation correctly depicts the relation between the vapor pressure of a liquid and it’s temperature?",
                    "html": "<p><strong>Temperature trend is reversed in the source.</strong> A liquid's equilibrium vapour pressure generally increases with temperature. Use absolute pressure and the relevant temperature range.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00284",
                            "set": 25,
                            "question": 53
                        }
                    ]
                },
                {
                    "id": "check-wate701-00286",
                    "status": "review",
                    "prompt": "For what value of flow behavior index, does the consistency index has a dimension independent of time?",
                    "html": "<p><strong>The consistency index is time-independent when n = 2.</strong> In the power-law model, shear stress equals K times shear rate raised to n. Thus K has dimensions M L<sup>-1</sup> T<sup>n-2</sup>; setting the time exponent to zero gives n = 2, not the keyed 1.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00286",
                            "set": 25,
                            "question": 54
                        }
                    ]
                },
                {
                    "id": "check-wate701-00287",
                    "status": "review",
                    "prompt": "What will be the dimension of the flow consistency index for a fluid with a flow behavior index of -1?",
                    "html": "<p>WATE701-00287 actually states n = −1; its explanation's speculation about −12 is irrelevant.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00287",
                            "set": 25,
                            "question": 55
                        }
                    ]
                },
                {
                    "id": "check-wate701-00288",
                    "status": "review",
                    "prompt": "Which of the following contribute to the reason behind the origin of surface tension?",
                    "html": "<p><strong>Interface ambiguity:</strong> WATE701-00288's 'both' is overbroad without specifying the interface. Solid-wall adhesion controls wetting; it is not required for a free liquid-air surface.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00288",
                            "set": 25,
                            "question": 56
                        }
                    ]
                },
                {
                    "id": "check-wate701-00290",
                    "status": "review",
                    "prompt": "A soap bubble of d mm diameter is observed inside a bucket of water. If the pressure inside the bubble is 0.075 N/cm², what will be the value of d? (Take surface tension as 0.075 N/m)",
                    "html": "<p><strong>Submerged bubble:</strong> WATE701-00290's 0.4 mm is conditional on one spherical interface and excess pressure. Its 2σ/d gas-bubble formula is wrong; unspecified absolute pressure cannot determine diameter.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00290",
                            "set": 26,
                            "question": 49
                        }
                    ]
                },
                {
                    "id": "check-wate701-00292",
                    "status": "review",
                    "prompt": "The rise in the level of a liquid in a tube is h. What will be the rise in the level if the same amount of liquid is poured into a tube of half the diameter.",
                    "html": "<p><strong>Missing geometric conditions:</strong> 'Same amount poured' does not establish a reservoir-fed capillary experiment. </p>",
                    "sources": [
                        {
                            "id": "WATE701-00292",
                            "set": 26,
                            "question": 51
                        }
                    ]
                },
                {
                    "id": "check-wate701-00293",
                    "status": "review",
                    "prompt": "The ratio of the surface tension S and density ρ of liquid 1 and 2 are 1:2 and 1:4 respectively. Equal amount of the two liquids is poured into two identical tubes. What will be the ratio of the rise in the liquid level in the two tubes? (Assume the angle of contact to be same)",
                    "html": "<p><strong>Capillary arithmetic and conditions:</strong> WATE701-00293 gives 2:1 only under the intended reservoir-fed interpretation, not the keyed 1:8. </p><p>Equal poured volumes alone imply equal bulk heights in identical tubes, so the arrangement needs clarification. </p>",
                    "sources": [
                        {
                            "id": "WATE701-00293",
                            "set": 26,
                            "question": 52
                        }
                    ]
                },
                {
                    "id": "check-wate701-00297",
                    "status": "review",
                    "prompt": "Calculate the magnitude of capillary effect in millimeters in a glass tube of 7mm diameter, when immersed in mercury. The temperature of the liquid is 25°C and the values of surface tension of mercury at 25°C is 0.51 N/m. The angle of contact for mercury is 130°.",
                    "html": "<p>WATE701-00297 gives about 1.41 mm depression under its stated approximation, not 140 mm or the explanation's 5.66 mm.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00297",
                            "set": 26,
                            "question": 55
                        }
                    ]
                },
                {
                    "id": "check-wate701-00371",
                    "status": "review",
                    "prompt": "The viscosity of a fluid in motion is 1 Poise. What will be it’s viscosity (in Poise) when the fluid is at rest?",
                    "html": "<p><strong>Rest removes the velocity gradient, not Newtonian viscosity.</strong> A stationary Newtonian liquid has zero viscous shear stress in that state, while its dynamic viscosity remains a material property at the given conditions.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00371",
                            "set": 32,
                            "question": 58
                        }
                    ]
                },
                {
                    "id": "check-wate701-00382",
                    "status": "review",
                    "prompt": "The absolute pressure of a water is 0.5kN above its vapor pressure. If it flows with a velocity of 1m/s, what will be the value of Cavitation Number describing the flow induced boiling?",
                    "html": "<p><strong>Pressure unit is incomplete.</strong> The 0.5 kN must mean 0.5 kN/m<sup>2</sup> above vapour pressure for the usual calculation. With additionally assumed water density 1000 kg/m<sup>3</sup> and speed 1 m/s, the cavitation number is 1.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00382",
                            "set": 33,
                            "question": 54
                        }
                    ]
                },
                {
                    "id": "check-wate701-00384",
                    "status": "review",
                    "prompt": "Which of the following is a shear-thinning fluid?",
                    "html": "<p>Pseudoplastic is the intended shear-rate class; Bingham apparent viscosity can also decline after yielding.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00384",
                            "set": 33,
                            "question": 56
                        }
                    ]
                }
            ]
        },
        ACiE0302: {
            code: "ACiE0302",
            questionCount: 46,
            blocks: [
                {
                    id: "hydrostatic-pressure-signs-and-stress",
                    title: "Static pressure, signs and assumptions",
                    html: "<p>Pressure is normal force per area. Static pressure at a point is isotropic; viscous motion can make <em>total stress</em> direction-dependent without making scalar pressure directional. Pressure acts through surfaces; gravity is a body force.</p>" +
                        "<p>With elevation z positive upward, <strong>dp/dz = −ρg</strong>; with depth h downward, dp/dh = ρg. Constant density and gravity give <strong>p = p<sub>surface</sub> + ρgh</strong>. Equal-depth pressure is independent of vessel shape only for matching fluid and surface pressure. Uniform translation without material acceleration can preserve this balance, giving <strong>about 49 kPa at 5 m in water</strong>; constant speed alone is insufficient.</p>",
                    sources: [
                        { id: "WATE701-00009", set: 2, question: 56 },
                        { id: "WATE701-00020", set: 3, question: 55 },
                        { id: "WATE701-00266", set: 24, question: 49 },
                        { id: "WATE701-00278", set: 25, question: 47 },
                        { id: "WATE701-00279", set: 25, question: 48 },
                        { id: "WATE701-00280", set: 25, question: 49 }
                    ]
                },
                {
                    id: "hydrostatic-pressure-datums-and-head",
                    title: "Pressure datums, units and piezometric head",
                    html: "<p><strong>p<sub>abs</sub> = p<sub>atm</sub> + p<sub>gauge</sub></strong>. Absolute pressure references vacuum; gauge pressure references local atmosphere. Suction is negative gauge pressure. One Pa = one N/m<sup>2</sup>; 15 bar = <strong>1.5 × 10<sup>6</sup> Pa</strong>.</p>" +
                        "<p>Pressure head h<sub>p</sub> = p/γ; piezometric head <strong>H = z + p/γ</strong>. H is constant throughout a connected, constant-density static liquid under uniform gravity. The bank's 50 kPa/10 kN/m<sup>3</sup> and 20/5 give pressure heads <strong>5 m</strong> and <strong>4 m</strong>; H additionally needs z. For water with γ ≈ 9.81 kN/m<sup>3</sup>, 10 kPa gives about <strong>1.02 m</strong>. Undefined percentages cannot establish pressure.</p>",
                    sources: [
                        { id: "WATE701-00021", set: 3, question: 56 },
                        { id: "WATE701-00022", set: 3, question: 57 },
                        { id: "WATE701-00084", set: 8, question: 58 },
                        { id: "WATE701-00267", set: 24, question: 50 },
                        { id: "WATE701-00028", set: 4, question: 51 },
                        { id: "WATE701-00029", set: 4, question: 52 },
                        { id: "WATE701-00030", set: 4, question: 53 },
                        { id: "WATE701-00087", set: 9, question: 49 },
                        { id: "SOIL136-00171", set: 14, question: 45 }
                    ]
                },
                {
                    id: "hydrostatic-depth-and-layer-calculations",
                    title: "Water depth, oil head and layered pressure",
                    html: "<p>For an atmospheric free surface, these are <strong>gauge</strong> pressures. With the bank approximation ρ<sub>w</sub> = 1000 kg/m<sup>3</sup>, 1 m gives 9810 Pa at g = 9.81, or 9800 Pa at g = 9.8. Four metres gives <strong>39.24 kPa</strong>, approximately the offered 40 kPa.</p>" +
                        "<p>Oil with G = 0.85 under 45 N/cm<sup>2</sup> has h = 450000/(850 × 9.81) = <strong>53.97 m</strong>. For 2.5 m of G = 0.65 oil above 350 cm = 3.5 m water, p = 9810(0.65 × 2.5 + 3.5) = <strong>50.276 kPa</strong>, or 5.0276 N/cm<sup>2</sup>.</p>",
                    sources: [
                        { id: "WATE701-00027", set: 4, question: 50 },
                        { id: "WATE701-00088", set: 9, question: 50 },
                        { id: "WATE701-00265", set: 23, question: 57 },
                        { id: "WATE701-00276", set: 24, question: 59 },
                        { id: "WATE701-00277", set: 24, question: 60 }
                    ]
                },
                {
                    id: "hydrostatic-pascal-force-multiplication",
                    title: "Pascal transmission versus force multiplication",
                    html: "<p>An imposed pressure increment is transmitted undiminished through confined static liquid; the existing depth gradient remains. For ideal pistons at equal elevation, <strong>F<sub>ram</sub>/A<sub>ram</sub> = F<sub>plunger</sub>/A<sub>plunger</sub></strong>.</p>" +
                        "<p>The bank's 30 cm ram, 2 cm plunger and 35 kN load give F<sub>plunger</sub> = 35000(2/30)<sup>2</sup> = <strong>155.56 N</strong>. Neglect piston weights, friction and losses. The area ratio multiplies force, not pressure; the smaller piston travels farther, preserving ideal work.</p>",
                    sources: [
                        { id: "WATE701-00275", set: 24, question: 58 }
                    ]
                },
                {
                    id: "hydrostatic-pressure-instrument-comparison",
                    title: "Pressure instruments and manometric liquids",
                    html: "<table><thead><tr><th scope='col'>Instrument</th><th scope='col'>Principle and qualification</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Open piezometer</th><td>Liquid-column pressure head; simple form suits low positive liquid gauge pressure, not gas or suction.</td></tr>" +
                        "<tr><th scope='row'>Manometer</th><td>Hydrostatic column balance for pressure or pressure difference; can measure gas or liquid pressure.</td></tr>" +
                        "<tr><th scope='row'>Bourdon gauge</th><td>Elastic curved-tube deformation; suitable ranges include high pressures. Calibration matters.</td></tr>" +
                        "<tr><th scope='row'>Dead-weight gauge</th><td>Known force/effective piston area; a pressure reference, subject to corrections.</td></tr></tbody></table>" +
                        "<p>Dense manometric liquid makes columns compact; lighter liquid increases displacement sensitivity. Low vapour pressure, compatible immiscible fluids and known density matter. 'Heavy and light' can describe the measuring liquid, not a restriction on the fluid being measured.</p>",
                    sources: [
                        { id: "WATE701-00023", set: 3, question: 58 },
                        { id: "WATE701-00024", set: 3, question: 59 },
                        { id: "WATE701-00025", set: 4, question: 48 },
                        { id: "WATE701-00026", set: 4, question: 49 },
                        { id: "WATE701-00268", set: 24, question: 51 },
                        { id: "WATE701-00269", set: 24, question: 52 },
                        { id: "WATE701-00270", set: 24, question: 53 },
                        { id: "WATE701-00303", set: 27, question: 47 }
                    ]
                },
                {
                    id: "hydrostatic-manometer-elevation-balance",
                    title: "Manometer elevations and suction calculation",
                    html: "<p>Follow a continuous static column: add ρgΔh downward, subtract it upward, using each segment's density. Equal elevations have equal pressure within the same connected liquid. Across an interface, neglect capillary pressure jumps only when justified.</p>" +
                        "<p>Neglecting gas density, the 40 kPa U-tube has Δh = 0.60 − 0.30 = 0.30 m; ρ = 40000/(9.8 × 0.30) ≈ <strong>13605 kg/m<sup>3</sup></strong>, identifying mercury. Replacing 13600-density mercury with 1000-density water makes Δh <strong>13.6 times</strong> larger: a <strong>1260% increase</strong>.</p>" +
                        "<p>For the 740 mmHg barometer, the bank's rounded 133.4 Pa/mmHg gives p<sub>atm</sub> = 98.716 kPa. Ten kPa suction therefore gives <strong>88.72 kPa absolute</strong>, approximately.</p>",
                    sources: [
                        { id: "WATE701-00301", set: 26, question: 59 },
                        { id: "WATE701-00302", set: 26, question: 60 },
                        { id: "WATE701-00086", set: 9, question: 48 }
                    ]
                },
                {
                    id: "hydrostatic-plane-force-inclination",
                    title: "Plane force and centre-of-pressure axis",
                    html: "<p>For constant-density liquid with zero free-surface gauge pressure, <strong>F = γA h<sub>c</sub></strong>, normal to the plane. Its vertical centre-of-pressure depth is <strong>h<sub>cp</sub> = h<sub>c</sub> + I<sub>c</sub> sin<sup>2</sup>θ/(A h<sub>c</sub>)</strong>. θ is inclination from horizontal; I<sub>c</sub> is the area's second moment about its <em>in-plane centroidal axis parallel to the free surface</em>, not a mass moment. Horizontal planes have uniform pressure.</p>" +
                        "<p>Taking the bank rectangle as 2.5 m wide, 3 m vertically deep, with its top at the surface: A = 7.5 m<sup>2</sup>, h<sub>c</sub> = 1.5 m, I<sub>c</sub> = 5.625 m<sup>4</sup>; hence h<sub>cp</sub> = <strong>2 m</strong>.</p>",
                    sources: [
                        { id: "WATE701-00091", set: 9, question: 53 }
                    ]
                },
                {
                    id: "hydrostatic-pressure-diagrams-applications",
                    title: "Pressure diagrams, tank walls and dam elevations",
                    html: "<p>A vertical rectangular wall starting at an atmospheric free surface has a triangular diagram: <strong>F = γbH<sup>2</sup>/2</strong>, acting H/3 above its base. Doubling water depth quadruples force: <strong>300% increase</strong>. A submerged top or imposed surface pressure adds a rectangular component; do not automatically use H/3.</p>" +
                        "<p>Conditionally using the dam's water elevation 1805 m and base 1450 m gives H = 355 m and resultant elevation <strong>1450 + 355/3 = 1568.33 m</strong>. Tank-wall questions recognize hydrostatic loading, not proof that other loads are always secondary.</p>",
                    sources: [
                        { id: "DESI787-00157", set: 18, question: 26 },
                        { id: "HYDR626-00221", set: 24, question: 69 },
                        { id: "WATE701-00281", set: 25, question: 50 }
                    ]
                },
                {
                    id: "hydrostatic-curved-surface-components",
                    title: "Curved surfaces and projected-area forces",
                    html: "<p><strong>Syllabus extension:</strong> the horizontal component equals hydrostatic force on the vertical projection, through that projection's centre of pressure. With zero surface gauge pressure, the vertical component follows the weight of the real or imaginary liquid column between curve and free surface. Determine its sign by a free-body balance; it is not invariably downward.</p>" +
                        "<p>In two dimensions, R = √(F<sub>H</sub><sup>2</sup> + F<sub>V</sub><sup>2</sup>); locate component lines by moments. The bank's <em>uniform net pressure</em> p<sub>0</sub> on a hemispherical shell gives axial force <strong>p<sub>0</sub>πr<sup>2</sup></strong>, using projected area, not curved area 2πr<sup>2</sup>.</p>",
                    sources: [
                        { id: "WATE701-00085", set: 9, question: 47 }
                    ]
                },
                {
                    id: "hydrostatic-buoyancy-and-flotation",
                    title: "Displacement, apparent weight and flotation",
                    html: "<p><strong>Archimedes' principle: F<sub>B</sub> = ρ<sub>fluid</sub>gV<sub>displaced</sub></strong>, the displaced fluid's weight, not automatically the body's weight. In homogeneous fluid, buoyancy acts through the displaced volume's centroid B. </p><p>The 60 N block apparently weighing 40 N when completely immersed loses <strong>20 N</strong> through buoyancy. Neglecting air buoyancy and other support/contact effects, its specific gravity is <strong>60/(60 − 40) = 3</strong>.</p>",
                    moreHtml: "<p>Free floating equilibrium requires buoyancy to equal weight and their lines to align; rotational stability is a separate test.</p>",
                    sources: [
                        { id: "WATE701-00005", set: 2, question: 52 },
                        { id: "WATE701-00046", set: 5, question: 57 },
                        { id: "WATE701-00307", set: 27, question: 51 }
                    ]
                },
                {
                    id: "hydrostatic-stability-centres-and-limits",
                    title: "G, B, M and initial stability",
                    html: "<p>G is centre of gravity; B is centre of buoyancy. For infinitesimal heel, M is the intersection of the new buoyancy vertical with the original body vertical. <strong>BM = I<sub>waterplane</sub>/V<sub>displaced</sub></strong>; <strong>GM = KB + BM − KG</strong>, using a common bottom datum K and the relevant tilt axis. Units m<sup>4</sup>/m<sup>3</sup> give metres.</p>" +
                        "<table><thead><tr><th scope='col'>Equilibrium</th><th scope='col'>Initial rotational criterion</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Floating</th><td>M above G: stable; coincident: neutral to first order; below: unstable.</td></tr>" +
                        "<tr><th scope='row'>Fully submerged</th><td>For a rigid, neutrally buoyant body in homogeneous fluid: G below B is stable; coincident is neutral; above is unstable.</td></tr></tbody></table>" +
                        "<p><strong>Untested syllabus extension:</strong> freely shifting liquid in a partly filled internal tank reduces GM by ρ<sub>tank</sub>I<sub>free</sub>/(ρ<sub>outside</sub>V<sub>displaced</sub>), with I<sub>free</sub> about the same tilt axis. Floating waterplane formulas do not directly describe a fully submerged body's stability.</p>",
                    sources: [
                        { id: "WATE701-00089", set: 9, question: 51 },
                        { id: "WATE701-00092", set: 9, question: 54 },
                        { id: "WATE701-00306", set: 27, question: 50 }
                    ]
                },
                {
                    id: "hydrostatic-rectangular-stability-calculations",
                    title: "Pontoon and floating-block calculations",
                    html: "<p><strong>Pontoon, heel about its length:</strong> L = 5 m, width = 3 m, draft = 0.60 m and KG = 0.7 m give V<sub>d</sub> = 9 m<sup>3</sup>, I = 5(3)<sup>3</sup>/12 = 11.25 m<sup>4</sup>, KB = 0.30 m. Thus <strong>GM = 0.30 + 11.25/9 − 0.70 = 0.85 m</strong>. Given draft, seawater density cancels from this geometry calculation; hull height is not draft.</p>" +
                        "<p><strong>Uniform 3 × 2 × 0.8 m block:</strong> assuming 0.8 m vertical and heel about its length, G = 0.45 gives draft 0.36 m. V<sub>d</sub> = 2.16 m<sup>3</sup>, I = 2 m<sup>4</sup>, KB = 0.18 m, KG = 0.40 m; <strong>GM = 0.7059 m</strong>.</p>",
                    sources: [
                        { id: "WATE701-00304", set: 27, question: 48 },
                        { id: "WATE701-00305", set: 27, question: 49 }
                    ]
                },
                {
                    id: "hydrostatic-cylinder-stability-calculation",
                    title: "Vertical cylinder: floating but initially unstable",
                    html: "<p>For the uniform cylinder, diameter D = 5 m, height H = 6 m and G = 0.45 give draft d = 2.7 m. A circular waterplane has I = πD<sup>4</sup>/64, so <strong>BM = D<sup>2</sup>/(16d) = 0.5787 m</strong>. With BG = (H − d)/2 = 1.65 m, <strong>GM = −1.0713 m</strong>. </p>",
                    moreHtml: "<p>Negative GM makes the upright equilibrium initially unstable; it does not mean flotation in another orientation is impossible.</p>",
                    sources: [
                        { id: "WATE701-00308", set: 27, question: 52 }
                    ]
                }
            ],
            gaps: [
                "No general inclined-plane numerical problem, depth-varying curved-gate calculation or multi-liquid differential-manometer dataset is assigned; their treatment is syllabus context rather than worked bank evidence.",
                "The bank's stability calculations address initial floating equilibrium. Fully submerged stability and internal free-surface corrections have no assigned numerical examples; no finite-angle stability curve is supplied."
            ],
            cautions: [
                {
                    "id": "check-wate701-00009",
                    "status": "review",
                    "prompt": "The pressure at a point in a fluid will not be same in all directions when the fluid is",
                    "html": "<p><strong>Pressure versus stress:</strong> WATE701-00009 confuses pressure with total stress; viscous motion need not make stress anisotropic. </p>",
                    "sources": [
                        {
                            "id": "WATE701-00009",
                            "set": 2,
                            "question": 56
                        }
                    ]
                },
                {
                    "id": "check-wate701-00020",
                    "status": "review",
                    "prompt": "The pressure intensity at any point in a fluid at rest is same in all directions is stated by",
                    "html": "<p><strong>Pascal's pressure principle:</strong> pressure at a point in a static fluid is isotropic. This statement concerns scalar pressure; it should not be generalized to every total-stress component in a deforming viscous flow.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00020",
                            "set": 3,
                            "question": 55
                        }
                    ]
                },
                {
                    "id": "check-wate701-00023",
                    "status": "review",
                    "prompt": "Manometers are used to measure",
                    "html": "<p>Manometers require density, gravity and meniscus/instrument checks; they are not automatically calibration-free.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00023",
                            "set": 3,
                            "question": 58
                        }
                    ]
                },
                {
                    "id": "check-wate701-00028",
                    "status": "review",
                    "prompt": "The pressure at a point in a fluid is 50 kPa. If the fluid has specific weight of 10 kN/m3, the piezometric head is",
                    "html": "<p><strong>Five metres is pressure head.</strong> p/gamma = 50/10 = 5 m. Piezometric head is z + p/gamma and needs an elevation datum; the stem does not supply z.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00028",
                            "set": 4,
                            "question": 51
                        }
                    ]
                },
                {
                    "id": "check-wate701-00030",
                    "status": "review",
                    "prompt": "The pressure intensity at a point in a fluid is 20 kPa. If the specific weight of fluid is 5 kN/m3, the piezometric head is",
                    "html": "<p><strong>Four metres is pressure head.</strong> p/gamma = 20/5 = 4 m. Piezometric head also includes elevation above a specified datum, which is missing.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00030",
                            "set": 4,
                            "question": 53
                        }
                    ]
                },
                {
                    "id": "check-wate701-00086",
                    "status": "review",
                    "prompt": "When the barometer reads 740.0 mm of mercury, a pressure of 10 kPa suction at that location is equivalent to",
                    "html": "<p><strong>Measurement approximations:</strong> 88.72 kPa uses a rounded mercury conversion. </p>",
                    "sources": [
                        {
                            "id": "WATE701-00086",
                            "set": 9,
                            "question": 48
                        }
                    ]
                },
                {
                    "id": "check-wate701-00089",
                    "status": "review",
                    "prompt": "Which of the following expression is correct?",
                    "html": "<p><strong>Stability definitions:</strong> WATE701-00089's V − BG cannot subtract length from volume; use BM − BG. </p>",
                    "sources": [
                        {
                            "id": "WATE701-00089",
                            "set": 9,
                            "question": 51
                        }
                    ]
                },
                {
                    "id": "check-wate701-00091",
                    "status": "review",
                    "prompt": "A rectangular surface 2.5m*3m is immersed in water touching its surface. Find the depth of center of pressure.",
                    "html": "<p><strong>Orientation must be specified.</strong> The hydrostatic result assumes the stated 3 m dimension is vertical. Rotating the surface changes the centroid depth and pressure resultant.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00091",
                            "set": 9,
                            "question": 53
                        }
                    ]
                },
                {
                    "id": "check-wate701-00092",
                    "status": "review",
                    "prompt": "A floating body attains stable equilibrium if its metacenter is",
                    "html": "<p><strong>Floating stability compares the metacentre with the centre of gravity G.</strong> Geometric centroid alone does not determine G unless the mass distribution justifies that assumption.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00092",
                            "set": 9,
                            "question": 54
                        }
                    ]
                },
                {
                    "id": "check-soil136-00171",
                    "status": "review",
                    "prompt": "What will be the hydrostatic pressure if, hW = 30 % and Z = 10 %?",
                    "html": "<p>SOIL136-00171's undefined 30% and 10% cannot justify a hydrostatic-pressure answer of 40%.</p>",
                    "sources": [
                        {
                            "id": "SOIL136-00171",
                            "set": 14,
                            "question": 45
                        }
                    ]
                },
                {
                    "id": "check-wate701-00276",
                    "status": "review",
                    "prompt": "The pressure at a point in the fluid is 45 N/cm². Find height when the fluid under consideration is in oil of specific gravity at 0.85.",
                    "html": "<p><strong>Oil-head key:</strong> WATE701-00276's 5.83 m fails conversion: 45 N/cm<sup>2</sup> = 450000 Pa gives 53.97 m. Do not change inputs to fit options.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00276",
                            "set": 24,
                            "question": 59
                        }
                    ]
                },
                {
                    "id": "check-hydr626-00221",
                    "status": "review",
                    "prompt": "A Dam with crest level of 150mast has water elevation of 1805 msi. What is the elevation at which the point of application of horizontal component of hydrostatic pressure acts if the base of the dam is at 1450 msi.",
                    "html": "<p>HYDR626-00221's crest is garbled; 1568.33 m assumes base-to-surface projection. </p><p>The resultant is 118.33 m above base, not 236.67 m.</p>",
                    "sources": [
                        {
                            "id": "HYDR626-00221",
                            "set": 24,
                            "question": 69
                        }
                    ]
                },
                {
                    "id": "check-wate701-00280",
                    "status": "review",
                    "prompt": "Calculate the hydrostatic pressure for water moving with constant velocity at a depth of 5 m from the surface.",
                    "html": "<p>The moving-water result requires hydrostatic balance, not merely constant speed.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00280",
                            "set": 25,
                            "question": 49
                        }
                    ]
                },
                {
                    "id": "check-wate701-00304",
                    "status": "review",
                    "prompt": "44. A rectangular pontoon is 5 m long, 3 m wide and 1.40 m high. The depth of immersion of the pontoon is 0.60 m in seawater. If the center of gravity is 0.7 m above the bottom of the pontoon, determine the metacentric height. The density for seawater = 1045 kg/m³.",
                    "html": "<p><strong>Specify the heel axis.</strong> For roll about the 5 m longitudinal axis, BM = 3<sup>2</sup>/(12 × 0.60) = 1.25 m and GM = 1.25 + 0.30 - 0.70 = 0.85 m. The stored 0.135 m does not follow from that orientation.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00304",
                            "set": 27,
                            "question": 48
                        }
                    ]
                },
                {
                    "id": "check-wate701-00305",
                    "status": "review",
                    "prompt": "46. A block of material of specific gravity 0.45 floats in water. Determine the meta-centric height of the block if its size is 3 m * 2 m* 0.8 m.",
                    "html": "<p><strong>Orientation and mass distribution are needed.</strong> With 0.8 m vertical height, uniform body density and roll about the 3 m axis, draft is 0.36 m and GM = 2<sup>2</sup>/(12 × 0.36) + 0.18 - 0.40 = 0.70593 m. A different orientation changes the result.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00305",
                            "set": 27,
                            "question": 49
                        }
                    ]
                },
                {
                    "id": "check-wate701-00306",
                    "status": "review",
                    "prompt": "48. Proper explanation for metacentre is:",
                    "html": "<p>WATE701-00306's 'all' is unsound: M is not necessarily a physical pivot.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00306",
                            "set": 27,
                            "question": 50
                        }
                    ]
                },
                {
                    "id": "check-wate701-00307",
                    "status": "review",
                    "prompt": "49. The principle of floatation of bodies is based on the premise of",
                    "html": "<p><strong>Flotation versus stability:</strong> WATE701-00307's metacentre key confuses the two. Flotation balances buoyancy and weight; stability concerns response to disturbance.</p>",
                    "sources": [
                        {
                            "id": "WATE701-00307",
                            "set": 27,
                            "question": 51
                        }
                    ]
                }
            ]
        }
    });
})();