(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0603: {
            code: "ACiE0603",
            questionCount: 70,
            groups: [
                { id: "screening", title: "Treatment and screening", start: "treatment-train-and-barriers" },
                { id: "settling", title: "Settling", start: "treatment-settling-regimes" },
                { id: "coagulation", title: "Coagulation and flocculation", start: "treatment-coagulation-and-jar-tests" },
                { id: "filtration", title: "Filtration", start: "treatment-filtration-mechanisms-and-media" },
                { id: "softening", title: "Softening", start: "treatment-hardness-and-boiling" },
                { id: "disinfection", title: "Disinfection", start: "treatment-disinfection-versus-sterilisation" },
                { id: "other-treatment", title: "Aeration, metals and organics", start: "treatment-aeration-and-gas-transfer" }
            ],
            formulaSheet: "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation and basis</th></tr></thead><tbody><tr><th scope='row'>Screen opening fraction</th><td>φ = b/(b + t); clear gap b and bar thickness t in the same units.</td></tr><tr><th scope='row'>Stokes settling</th><td>v<sub>s</sub> = g(s − 1)d<sup>2</sup>/(18ν); creeping flow, spherical discrete particles.</td></tr><tr><th scope='row'>Overflow rate</th><td>v<sub>o</sub> = Q/A<sub>plan</sub>; m/h for m<sup>3</sup>/h and m<sup>2</sup>.</td></tr><tr><th scope='row'>Ideal capture</th><td>η = min(v<sub>s</sub>/v<sub>o</sub>, 1); one class, uniform inlet concentration.</td></tr><tr><th scope='row'>Nominal detention</th><td>t = V/Q; use consistent volume and time units.</td></tr><tr><th scope='row'>Mixing intensity</th><td>G = √[P/(μV)], in s<sup>−1</sup>; P is power dissipated in water.</td></tr><tr><th scope='row'>Media uniformity</th><td>U<sub>c</sub> = D<sub>60</sub>/D<sub>10</sub>; dimensionless.</td></tr><tr><th scope='row'>Applied chlorine dose</th><td>1000M/Q mg/L; M in kg/day available chlorine, Q in m<sup>3</sup>/day.</td></tr><tr><th scope='row'>Commercial product</th><td>Product mass = M/f; f is available-chlorine mass fraction.</td></tr><tr><th scope='row'>Contact measures</th><td>CT = C × t<sub>effective</sub>, in mg·min/L. GAC EBCT = V<sub>bed</sub>/Q uses bulk bed volume.</td></tr></tbody></table>",
            recall: [
                { id: "recall-sequence", prompt: "Which step destabilises colloids, and which grows the flocs?", html: "<p>Coagulation destabilises; flocculation promotes collisions and growth. Settling or filtration removes the resulting particles. Disinfection has a separate microbial objective.</p>", block: "treatment-coagulation-and-jar-tests" },
                { id: "recall-depth", prompt: "At unchanged flow and plan area, does doubling basin depth improve ideal discrete capture?", html: "<p>No. Settling distance and travel time both double, while Q/A remains unchanged. Real depth still affects hydraulics and sludge storage; the answer assumes ideal discrete settling.</p>", block: "treatment-ideal-overflow-derivation" },
                { id: "recall-stokes", prompt: "Under Stokes conditions, what happens to settling speed when diameter doubles?", html: "<p>It becomes four times as large because v<sub>s</sub> is proportional to d<sup>2</sup>. Recheck particle Reynolds number: changing diameter can invalidate creeping flow.</p>", block: "treatment-stokes-force-balance" },
                { id: "recall-filter-area", prompt: "Four 25 m² filters carry 600 m³/h. What is the loading with one filter unavailable?", html: "<p>Available area is 75 m<sup>2</sup>; loading is 600/75 = <strong>8 m/h</strong>. Installed area is not available area.</p>", block: "treatment-rapid-filter-loading-and-redundancy" },
                { id: "recall-residual", prompt: "A 2.0 mg/L dose leaves 0.4 mg/L total residual after 30 minutes. What is the demand?", html: "<p><strong>1.6 mg/L at 30 minutes.</strong> Subtract total residual from applied dose on the same Cl<sub>2</sub> basis. Demand is specific to the contact time and water conditions.</p>", block: "treatment-chlorine-demand-and-breakpoint" },
                { id: "recall-contact", prompt: "Nominal detention is 30 minutes, t10 is half of that, and constant residual is 0.60 mg/L. What is CT?", html: "<p>Effective time is 15 minutes; <strong>CT = 9 mg·min/L</strong>. Using nominal detention would incorrectly give 18. This arithmetic alone does not certify disinfection performance.</p>", block: "treatment-ct-and-effective-contact" },
                { id: "recall-softening", prompt: "Does sodium-cycle softening also remove sulfate and chloride?", html: "<p>Not generally. Calcium and magnesium are exchanged for sodium; most anions remain. Hardness removal is not demineralisation.</p>", block: "treatment-ion-exchange-service" },
                { id: "recall-oxidation", prompt: "Is oxidising dissolved iron enough to remove it from the water?", html: "<p>No. Oxidation changes its form; filtration or another separation step must remove the precipitate. Sequestration can reduce staining without removing metal mass.</p>", block: "treatment-iron-manganese-and-sequestration" }
            ],
            blocks: [
                {
                    id: "treatment-train-and-barriers",
                    title: "Treatment sequence",
                    html: "<p><strong>Conventional surface-water treatment:</strong> screening → rapid coagulant mixing → slow flocculation → sedimentation → filtration → disinfection.</p><p>Each stage has a different job: intercept debris, destabilise particles, grow flocs, settle solids, capture remaining particles, then inactivate pathogens. Particle removal also reduces the shielding that can impair disinfection.</p><p><strong>Choose barriers for the source.</strong> Suitable waters may use direct filtration without sedimentation; groundwater may need aeration, oxidation or softening. Ordinary settling does not remove dissolved hardness, volatile gases or all dissolved organics. Clear water is not necessarily safe.</p><p>Design for source variability, peak flow, residuals disposal, operator capability and equipment failures. Samples between stages help identify which barrier is underperforming.</p>",
                    sources: [
                        { id: "WATE813-00228", set: 23, question: 95 },
                        { id: "WATE813-00238", set: 24, question: 95 },
                        { id: "WATE813-00337", set: 33, question: 95 },
                        { id: "WATE813-00342", set: 33, question: 100 }
                    ]
                },
                {
                    id: "treatment-screen-open-area",
                    title: "Screen openings and velocity",
                    html: "<p>A bar screen intercepts debris and protects equipment. Opening size controls what is intercepted; available open area controls velocity and headloss. Screening does not remove dissolved contaminants.</p><p>For clear spacing b and bar thickness t, <strong>φ = b/(b + t)</strong>. With gross submerged area A normal to the approach flow, <strong>v<sub>opening</sub> = Q/(φA)</strong>. Use Q in m<sup>3</sup>/s and A in m<sup>2</sup>; velocity is m/s. Inclined racks and supports need their projected geometry included.</p><p><strong>Worked example, assumed data:</strong> Q = 0.12 m<sup>3</sup>/s, A = 0.40 m<sup>2</sup>, b = 50 mm and t = 10 mm give φ = 0.8333 and opening velocity <strong>0.36 m/s</strong>. Half the openings blocked means <strong>0.72 m/s</strong> at the same flow.</p><p><strong>Common mistake:</strong> using clean-screen area after blockage. Provide cleaning access and redundancy; the bank's 50 mm opening is not a universal specification.</p>",
                    sources: [{ id: "WATE813-00043", set: 6, question: 93 }]
                },
                {
                    id: "treatment-settling-regimes",
                    title: "Four settling regimes",
                    html: "<p><strong>Plain sedimentation</strong> uses no added coagulant; <strong>clarification</strong> describes production of clearer water. Neither term alone identifies the particle-settling regime.</p><table><thead><tr><th scope='col'>Regime</th><th scope='col'>What happens</th></tr></thead><tbody><tr><th scope='row'>I: Discrete</th><td>Dilute particles retain approximately constant size and settling speed.</td></tr><tr><th scope='row'>II: Flocculent</th><td>Particles aggregate during descent; size and speed change.</td></tr><tr><th scope='row'>III: Hindered / zone</th><td>Interacting particles settle with a recognisable interface.</td></tr><tr><th scope='row'>IV: Compression</th><td>A particle network supports load; consolidation expels water.</td></tr></tbody></table><p><strong>Model choice:</strong> use discrete-particle theory for type I, settling-column evidence for evolving flocs, and solids-flux/compression considerations for concentrated sludge. A single Stokes velocity cannot describe all four regimes. Natural flocculation can occur even without added coagulant.</p>",
                    sources: [
                        { id: "WATE813-00033", set: 5, question: 93 },
                        { id: "WATE813-00086", set: 10, question: 95 },
                        { id: "WATE813-00264", set: 26, question: 100 },
                        { id: "WATE813-00265", set: 27, question: 90 }
                    ]
                },
                {
                    id: "treatment-stokes-force-balance",
                    title: "Stokes settling velocity",
                    html: "<p><strong>Derivation:</strong> at terminal speed, submerged weight (ρ<sub>s</sub> − ρ)gπd<sup>3</sup>/6 equals viscous drag 3πμdv<sub>s</sub>. Therefore <strong>v<sub>s</sub> = g(s − 1)d<sup>2</sup>/(18ν)</strong>, where s = ρ<sub>s</sub>/ρ and ν = μ/ρ.</p><p><strong>Symbols and limits:</strong> d is diameter; μ is dynamic viscosity and ν kinematic viscosity. In SI use m, Pa·s and m<sup>2</sup>/s. Assume a dilute suspension of small spheres, negligible wall effects and creeping flow; check <strong>Re<sub>p</sub> = v<sub>s</sub>d/ν</strong>.</p><p><strong>Bank example:</strong> g = 981 cm/s<sup>2</sup>, s = 2.65, d = 0.002 cm and ν = 0.01 cm<sup>2</sup>/s give v<sub>s</sub> = 981 × 1.65 × 0.002<sup>2</sup>/(18 × 0.01) = <strong>0.03597 cm/s</strong>, or 0.0003597 m/s. Re<sub>p</sub> = <strong>0.007194</strong>, consistent with the assumption.</p><p><strong>Common mistake:</strong> mixing centimetres and metres, or using this constant-particle model for growing flocs.</p>",
                    sources: [{ id: "WATE813-00266", set: 27, question: 91 }]
                },
                {
                    id: "treatment-ideal-overflow-derivation",
                    title: "Why plan area controls ideal settling",
                    html: "<p>For a rectangular basin with length L, width B and depth H, horizontal velocity is <strong>u = Q/(BH)</strong> and travel time is <strong>t = LBH/Q</strong>. A surface-entering particle is captured when v<sub>s</sub>t ≥ H. Substitution cancels H, giving <strong>v<sub>s</sub> ≥ Q/(LB)</strong>.</p><p><strong>Surface overflow rate:</strong> v<sub>o</sub> = Q/A<sub>plan</sub>, in m/h for Q in m<sup>3</sup>/h. For one particle class entering uniformly over the depth, <strong>η = min(v<sub>s</sub>/v<sub>o</sub>, 1)</strong>. Weight each class by its incoming solids fraction for a mixture.</p><p><strong>Assumptions:</strong> steady uniform flow, discrete particles with constant speed, no short-circuiting or resuspension. At fixed Q, more plan area improves ideal capture. Extra depth alone increases settling distance and travel time proportionally; it still matters in real basins for flow distribution, sludge storage and flocculation.</p><p><strong>Common mistake:</strong> treating this ideal solids-capture fraction as a guaranteed pathogen or turbidity reduction.</p>",
                    sources: [
                        { id: "WATE813-00035", set: 5, question: 95 },
                        { id: "WATE813-00150", set: 16, question: 95 },
                        { id: "WATE813-00173", set: 18, question: 96 }
                    ]
                },
                {
                    id: "treatment-basin-sizing-example",
                    title: "Basin sizing: three different ratios",
                    html: "<p><strong>Worked example, assumed data:</strong> Q = 7200 m<sup>3</sup>/day = 300 m<sup>3</sup>/h; L = 30 m, B = 10 m, H = 3 m.</p><table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Calculation</th></tr></thead><tbody><tr><th scope='row'>Surface loading: Q/(LB)</th><td>300/(30 × 10) = <strong>1.0 m/h</strong></td></tr><tr><th scope='row'>Detention: V/Q</th><td>900/300 = <strong>3.0 h</strong></td></tr><tr><th scope='row'>Horizontal velocity: Q/(BH)</th><td>300/(10 × 3) = <strong>10 m/h</strong> = 0.002778 m/s</td></tr></tbody></table><p>Particles settling at 0.5 m/h have ideal capture of <strong>50%</strong>. Doubling Q gives loading 2 m/h, detention 1.5 h and capture <strong>25%</strong>.</p><p><strong>Common mistake:</strong> substituting the flow cross-section for the plan area. Use effective water volume for detention; sludge and dead zones reduce it. Peak flow and unavailable parallel units can control sizing. Actual residence times vary around the nominal V/Q.</p>",
                    sources: [{ id: "WATE813-00267", set: 27, question: 92 }]
                },
                {
                    id: "treatment-real-clarifiers-and-sludge",
                    title: "Clarifier hydraulics and sludge",
                    html: "<p>Distribute inlet flow, avoid scour and short-circuiting, collect the outlet uniformly, and withdraw deposited sludge. Flocs are suspended aggregates; sludge is the accumulated solids mixture. Scrapers and skimmers are equipment choices, not the definition of clarification.</p><p><strong>Weir loading = Q/L<sub>w</sub></strong>, where L<sub>w</sub> is effective weir length. Its units are m<sup>3</sup>/(m·day), unlike surface loading Q/A. Uneven weir levels can cause local overloading.</p><p><strong>Worked example, assumed data:</strong> 7200 m<sup>3</sup>/day at 40 mg/L suspended solids and 75% capture produces 0.001 × 7200 × 40 × 0.75 = <strong>216 kg dry solids/day</strong>. At 2% solids by mass, wet sludge mass is <strong>10,800 kg/day</strong>; at an assumed 1000 kg/m<sup>3</sup>, volume is <strong>10.8 m<sup>3</sup>/day</strong>.</p><p><strong>Common mistake:</strong> confusing particle settling speed, basin through-flow velocity and local scour velocity. They require different checks.</p>",
                    sources: [
                        { id: "WATE813-00046", set: 6, question: 96 },
                        { id: "WATE813-00245", set: 25, question: 91 },
                        { id: "WATE813-00246", set: 25, question: 92 },
                        { id: "WATE813-00247", set: 25, question: 93 },
                        { id: "WATE813-00249", set: 25, question: 95 }
                    ]
                },
                {
                    id: "treatment-batch-and-settling-tests",
                    title: "Batch settling and column tests",
                    html: "<p>A fill-and-draw cycle includes <strong>fill → settle → decant → sludge handling</strong>. Average output is useful decanted volume V<sub>b</sub> divided by complete cycle time t<sub>c</sub>. Continuous supply may require several basins or balancing storage.</p><p>For a quiescent discrete particle, descent time is settling distance/v<sub>s</sub>. For growing flocs, sample a settling column at several depths and times using representative water and mixing history.</p><p><strong>Common mistake:</strong> using settling time as the complete cycle time, or adopting a universal 24-hour detention. Capacity must also allow filling, drawing and maintenance; decanting must avoid disturbing the sludge interface.</p>",
                    sources: [{ id: "WATE813-00248", set: 25, question: 94 }]
                },
                {
                    id: "treatment-coagulation-and-jar-tests",
                    title: "Coagulation and jar tests",
                    html: "<p><strong>Coagulation destabilises particles</strong> through charge neutralisation or entrapment in metal-hydroxide precipitate. <strong>Flocculation grows aggregates</strong> through collisions; settling or filtration subsequently removes them.</p><p>Jar tests compare a control with different doses, pH and alkalinity under comparable mixing and settling conditions. Judge residual turbidity, colour, residual metal and filterability, not just visible floc size. Repeat when source water changes.</p><p>Underdosing leaves particles stable; overdosing can increase sludge, waste chemical or interfere with treatment. A particle near 1 μm may settle slowly, but its diameter alone does not prove it cannot be filtered: attachment and membrane mechanisms also matter.</p><p><strong>Common mistake:</strong> calling alum a disinfectant or treating coagulation, flocculation and physical removal as the same step.</p>",
                    sources: [
                        { id: "WATE813-00229", set: 23, question: 96 },
                        { id: "WATE813-00261", set: 26, question: 97 },
                        { id: "WATE813-00268", set: 1, question: 97 }
                    ]
                },
                {
                    id: "treatment-alum-alkalinity-basis",
                    title: "Alum and alkalinity",
                    html: "<p>Alum is aluminium sulfate, <strong>Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>·xH<sub>2</sub>O</strong>; the supplied hydrate and purity determine product mass. In bicarbonate-buffered water, <strong>Al<sup>3+</sup> + 3HCO<sub>3</sub><sup>−</sup> → Al(OH)<sub>3</sub> + 3CO<sub>2</sub></strong>.</p><p>One mole of alum supplies two Al ions and consumes six alkalinity equivalents. With 50 g CaCO<sub>3</sub> per equivalent, consumption is <strong>300 g as CaCO<sub>3</sub> per mole</strong>.</p><p><strong>Worked example, assumed pure 18-water hydrate:</strong> molar mass 666 g/mol; dose 20 mg/L. Alkalinity consumed = 20 × 300/666 = <strong>9.009 mg/L as CaCO<sub>3</sub></strong>. Metal dose = 20 × 54/666 = <strong>1.622 mg/L as Al</strong>.</p><p><strong>Common mistake:</strong> equating mg/L of product with mg/L as metal. WHO 2022 A5.1.6 gives typical 2–5 mg/L as Al or 4–10 mg/L as Fe, not product prescriptions. Actual dose and pH depend on jar tests and initial alkalinity.</p>",
                    sources: [
                        { id: "WATE813-00038", set: 5, question: 98 },
                        { id: "WATE813-00269", set: 27, question: 93 }
                    ]
                },
                {
                    id: "treatment-coagulant-choice-and-surfactants",
                    title: "Choosing a coagulant",
                    html: "<p>Compare aluminium and iron salts by treatment performance, useful pH range, alkalinity demand, residual metal, sludge handling and cost. Neither is universally preferred.</p><p><strong>Density, settling speed and sludge quantity are different.</strong> A denser floc does not necessarily mean less sludge; total solids include reagent precipitate and captured material. Alum may remove odour-associated particles or organic fractions, but not every dissolved odour compound.</p><p>Surfactants can stabilise foam and emulsified oil and interfere with aggregation. Investigate greasy scum and upstream discharges before increasing dose; pretreatment or source control may be needed. Confirm performance with clarified and filtered water tests.</p>",
                    sources: [
                        { id: "WATE813-00060", set: 7, question: 100 },
                        { id: "WATE813-00270", set: 27, question: 94 },
                        { id: "WATE813-00271", set: 27, question: 95 }
                    ]
                },
                {
                    id: "treatment-mixing-power-and-g",
                    title: "Mixing intensity: G",
                    html: "<p>Rapid mixing disperses coagulant; gentler flocculation promotes collisions without excessive breakup. Mean velocity gradient is <strong>G = √[P/(μV)]</strong>: P is power dissipated in water, W; μ is dynamic viscosity, Pa·s; V is mixed volume, m<sup>3</sup>. G has units <strong>s<sup>−1</sup></strong>, not m/s.</p><p><strong>Worked example, assumed data:</strong> P = 100 W, μ = 0.001 Pa·s and V = 40 m<sup>3</sup> give G = √(100/0.04) = <strong>50 s<sup>−1</sup></strong>. At 60% transfer efficiency, motor input is <strong>166.7 W</strong>.</p><p><strong>Common mistake:</strong> substituting motor input for dissipated power. G is a mean shear measure; local high-shear zones can damage flocs. Temperature changes viscosity, and impeller geometry and baffling affect actual mixing.</p>",
                    sources: [
                        { id: "WATE813-00260", set: 26, question: 96 },
                        { id: "WATE813-00337", set: 33, question: 95 }
                    ]
                },
                {
                    id: "treatment-flocculation-time-and-staging",
                    title: "Flocculation time and staging",
                    html: "<p><strong>Nominal detention t = V/Q.</strong> The dimensionless product Gt compares mixing exposure when G is in s<sup>−1</sup> and t in seconds. It is not a count of successful attachments; equal Gt does not guarantee equal floc quality.</p><p>Reduce mixing intensity through successive stages as flocs become larger and more fragile. <strong>Assumed example:</strong> G values 60, 40 and 20 s<sup>−1</sup>, each for 600 s, give ΣG<sub>i</sub>t<sub>i</sub> = 36,000 + 24,000 + 12,000 = <strong>72,000</strong> over 30 minutes.</p><p><strong>Common mistake:</strong> treating a typical time as a failure threshold. Longer than 30 minutes does not inevitably break flocs; shear, chemistry, temperature and floc strength govern the balance of growth and breakup. Verify settled and filtered performance.</p>",
                    sources: [
                        { id: "WATE813-00231", set: 23, question: 98 },
                        { id: "WATE813-00233", set: 23, question: 100 },
                        { id: "WATE813-00259", set: 26, question: 95 }
                    ]
                },
                {
                    id: "treatment-filtration-mechanisms-and-media",
                    title: "Filtration mechanisms and media",
                    html: "<p>Granular filtration captures particles by interception, settling within pores, diffusion, attachment and straining. <strong>It is more than sieving:</strong> particles smaller than a pore can attach to grains, particularly after suitable coagulation.</p><p>Conventional media include <strong>sand, anthracite and garnet</strong>. Multimedia beds combine grain sizes and densities to distribute solids storage. Support gravel retains media; underdrains collect filtrate and distribute wash water.</p><p><strong>Limits:</strong> ordinary sand does not remove dissolved salts or replace disinfection. Plastic and floating media have specialised uses but are not conventional rapid-sand media. Select the process by capture mechanism, pretreatment and cleaning requirements.</p>",
                    sources: [
                        { id: "WATE813-00262", set: 26, question: 98 },
                        { id: "WATE813-00275", set: 27, question: 99 }
                    ]
                },
                {
                    id: "treatment-media-grading-and-cleanliness",
                    title: "Effective size and uniformity",
                    html: "<p><strong>D<sub>10</sub></strong> is the size at which 10% by mass is finer; <strong>D<sub>60</sub></strong> corresponds to 60% finer. Uniformity coefficient <strong>U<sub>c</sub> = D<sub>60</sub>/D<sub>10</sub></strong> is dimensionless. Effective size indicates fineness; U<sub>c</sub> indicates grading spread.</p><p><strong>Assumed example:</strong> D<sub>10</sub> = 0.25 mm and D<sub>60</sub> = 0.40 mm give <strong>U<sub>c</sub> = 1.60</strong>.</p><p>Media also need acceptable durability, depth and cleanliness. Clay, silt and organic contamination can clog or contaminate a bed. Excessively fine grains increase resistance; overly coarse grains can reduce capture.</p><p><strong>Common mistake:</strong> confusing a deliberately matured biological surface with permission to install dirty sand, or treating controlled uniformity as identical grain size.</p>",
                    sources: [
                        { id: "WATE813-00276", set: 27, question: 100 },
                        { id: "WATE813-00277", set: 28, question: 91 },
                        { id: "WATE813-00328", set: 32, question: 97 }
                    ]
                },
                {
                    id: "treatment-slow-sand-operation",
                    title: "Slow sand filters",
                    html: "<p>Fine sand at low loading supports physical and biological removal. The biologically active surface region, or <strong>schmutzdecke</strong>, needs maturation; a new or scraped bed is not immediately equivalent to a mature filter.</p><p><strong>WHO 2022 A5.1.4, p.542:</strong> typical loading 0.1–0.3 m/h, effective size 0.15–0.3 mm and depth 0.5–1.5 m. These are guidance ranges, not Nepal design requirements. The bank's 100–200 L/(m<sup>2</sup>·h) converts to <strong>0.1–0.2 m/h</strong>.</p><p>High solids may need presettling or roughing filtration. Monitor headloss and effluent quality; manage scraping, remaining media depth, maturation and standby capacity.</p><p><strong>Common mistake:</strong> converting a suspended-solids concentration in mg/L directly into turbidity in NTU. They measure different properties. Slow filtration also does not eliminate the need for validated disinfection.</p>",
                    sources: [
                        { id: "WATE813-00042", set: 6, question: 92 },
                        { id: "WATE813-00063", set: 8, question: 93 },
                        { id: "WATE813-00263", set: 26, question: 99 },
                        { id: "WATE813-00328", set: 32, question: 97 }
                    ]
                },
                {
                    id: "treatment-rapid-filter-loading-and-redundancy",
                    title: "Rapid filters and standby capacity",
                    html: "<p>Rapid filters use higher loading, usually with coagulation and clarification, and are cleaned by backwashing. Direct filtration omits clarification only for suitable water and validated operation.</p><p><strong>Rate conversion:</strong> 3000–6000 L/(m<sup>2</sup>·h) = <strong>3–6 m/h = 50–100 mm/min</strong>. Separately, WHO 2022 A5.1.4 p.541 gives typical rapid-gravity loading 4–20 m/h, grain size 0.5–1.0 mm and depth 0.6–2.0 m; these are not universal operating limits.</p><p><strong>Assumed example:</strong> Q = 600 m<sup>3</sup>/h at a selected maximum 6 m/h needs <strong>100 m<sup>2</sup> in service</strong>. Four 25 m<sup>2</sup> beds work only with all operating. One unavailable raises loading to <strong>8 m/h</strong>. Five beds preserve 100 m<sup>2</sup> with one out.</p><p><strong>Common mistake:</strong> sizing from installed rather than available area. Allow wash-water use and hydraulic distribution; a typical literature range cannot override the chosen plant limit.</p>",
                    sources: [
                        { id: "WATE813-00044", set: 6, question: 94 },
                        { id: "WATE813-00238", set: 24, question: 95 }
                    ]
                },
                {
                    id: "treatment-filter-runs-and-backwash",
                    title: "Filter runs and backwashing",
                    html: "<p><strong>Syllabus extension:</strong> the bank supplies no complete filter-run dataset. For a clean saturated bed, Darcy's relation gives <strong>Δh = vL/K</strong>; v and K are in m/s and L in m. Deposits change permeability, so clean-bed K cannot predict the whole run.</p><p>A run can end because of <strong>headloss or effluent-quality failure</strong>. Breakthrough may precede terminal headloss. Backwashing removes deposits; required bed expansion depends on media and temperature, with air scour where designed.</p><p>Wash volume equals wash flow × duration. Allow for unavailable beds, check post-wash effluent, and control residuals/recycle. Returning wash water to the inlet can reconcentrate contaminants.</p><p><strong>Common mistake:</strong> relying on a timer alone, or treating a washed bed as immediately ready without checking water quality.</p>",
                    sources: []
                },
                {
                    id: "treatment-hardness-and-boiling",
                    title: "Hardness and boiling",
                    html: "<p>Hardness mainly represents dissolved calcium and magnesium. On the common mg/L as CaCO<sub>3</sub> basis, <strong>carbonate hardness = min(total hardness, alkalinity)</strong>; noncarbonate hardness is the remainder. This conventional classification assumes ordinary bicarbonate-dominated water.</p><p><strong>Assumed example:</strong> total hardness 200 and alkalinity 140 mg/L as CaCO<sub>3</sub> give <strong>140 carbonate and 60 noncarbonate hardness</strong>. Do not compare these directly with mg/L as elemental calcium.</p><p>Boiling calcium bicarbonate gives <strong>Ca(HCO<sub>3</sub>)<sub>2</sub> → CaCO<sub>3</sub> + CO<sub>2</sub> + H<sub>2</sub>O</strong>. Calcium carbonate is the precipitate; carbon dioxide is another product. Magnesium can involve hydroxide formation.</p><p><strong>Limits:</strong> boiling does not generally remove sulfate or chloride hardness. Precipitated solids still need separation; scale on a heater is not controlled municipal softening.</p>",
                    sources: [
                        { id: "WATE813-00040", set: 5, question: 100 },
                        { id: "WATE813-00274", set: 27, question: 98 }
                    ]
                },
                {
                    id: "treatment-lime-soda-softening",
                    title: "Lime-soda softening",
                    html: "<p><strong>Syllabus extension:</strong> no complete reagent-demand dataset is supplied. Precipitative softening converts dissolved hardness into solids for clarification and filtration.</p><p><strong>Calcium bicarbonate:</strong> Ca(HCO<sub>3</sub>)<sub>2</sub> + Ca(OH)<sub>2</sub> → 2CaCO<sub>3</sub> + 2H<sub>2</sub>O.</p><p><strong>Magnesium bicarbonate:</strong> Mg(HCO<sub>3</sub>)<sub>2</sub> + 2Ca(OH)<sub>2</sub> → Mg(OH)<sub>2</sub> + 2CaCO<sub>3</sub> + 2H<sub>2</sub>O. Dissolved CO<sub>2</sub> consumes additional lime.</p><p><strong>Noncarbonate calcium hardness:</strong> CaSO<sub>4</sub> + Na<sub>2</sub>CO<sub>3</sub> → CaCO<sub>3</sub> + Na<sub>2</sub>SO<sub>4</sub>. Sodium sulfate remains dissolved: softening is not desalination.</p><p>Demand depends on species, equivalents and reagent purity. Check pH, reaction time, residual hardness and sludge production; stabilisation or recarbonation may follow. High softening pH does not replace validated disinfection.</p>",
                    sources: []
                },
                {
                    id: "treatment-ion-exchange-service",
                    title: "Ion-exchange softening",
                    html: "<p>Sodium-cycle zeolite or resin exchanges Na<sup>+</sup> for calcium and magnesium. With Z representing two exchange-site charges, <strong>Na<sub>2</sub>Z + Ca<sup>2+</sup> ⇌ CaZ + 2Na<sup>+</sup></strong>. Finite capacity means eventual hardness breakthrough.</p><p><strong>Assumed example:</strong> usable capacity 20 kg as CaCO<sub>3</sub>, influent hardness 200 mg/L = 0.200 kg/m<sup>3</sup> on the same basis. Theoretical service volume = 20/0.200 = <strong>100 m<sup>3</sup></strong>.</p><p>Both carbonate and noncarbonate hardness can be removed, but most anions remain and sodium increases. Competing ions, fouling, regeneration and acceptable leakage determine actual service volume.</p><p><strong>Common mistake:</strong> equating softening with demineralisation or disinfection. Iron, manganese and suspended solids may require pretreatment.</p>",
                    sources: [
                        { id: "WATE813-00032", set: 5, question: 92 },
                        { id: "WATE813-00272", set: 27, question: 96 }
                    ]
                },
                {
                    id: "treatment-exchange-regeneration-and-brine",
                    title: "Regeneration and spent brine",
                    html: "<p>Concentrated sodium chloride drives exchange back towards the sodium form: <strong>CaZ + 2NaCl ⇌ Na<sub>2</sub>Z + CaCl<sub>2</sub></strong>. Calcium and magnesium leave in spent brine; they are transferred, not destroyed.</p><p>Regeneration performance depends on restored capacity, salt efficiency, leakage and rinsing. Specify whether brine percentage means mass/mass or mass/volume; the bank's approximate 10% is a teaching value, not a universal operating instruction.</p><p><strong>Common mistake:</strong> assuming the first post-regeneration water is ready for supply. Verify rinse and hardness performance, and provide a suitable spent-brine treatment or disposal route.</p>",
                    sources: [
                        { id: "WATE813-00045", set: 6, question: 95 },
                        { id: "WATE813-00332", set: 33, question: 90 }
                    ]
                },
                {
                    id: "treatment-disinfection-versus-sterilisation",
                    title: "Disinfection is not sterilisation",
                    html: "<p><strong>Disinfection</strong> inactivates target microorganisms to a required performance level. <strong>Sterilisation</strong> eliminates all viable microbial forms. Ordinary drinking-water disinfection is not complete sterilisation and does not remove hardness or all particles.</p><p>Susceptibility differs by organism. Chlorine treats many bacterial hazards and leaves a distribution residual, but <strong>Cryptosporidium is resistant at normal drinking-water chlorination conditions</strong>. Suitable particle removal and validated additional barriers remain important.</p><p><strong>Common mistake:</strong> choosing an 'ideal disinfectant' without specifying the source, target organisms, by-products and operation. Plain chlorination, even during emergencies, is not proof that untreated lake water becomes safe.</p>",
                    sources: [
                        { id: "WATE813-00236", set: 24, question: 93 },
                        { id: "WATE813-00250", set: 25, question: 96 },
                        { id: "WATE813-00257", set: 26, question: 93 },
                        { id: "WATE813-00258", set: 26, question: 94 }
                    ]
                },
                {
                    id: "treatment-chlorine-ph-speciation",
                    title: "pH and free chlorine",
                    html: "<p><strong>HOCl ⇌ H<sup>+</sup> + OCl<sup>−</sup>.</strong> HOCl is generally the stronger disinfecting form. Higher pH shifts free chlorine towards OCl<sup>−</sup>, reducing effectiveness under otherwise comparable conditions.</p><p><strong>HOCl fraction = 1/[1 + 10<sup>pH − pK<sub>a</sub></sup>].</strong> Assuming pK<sub>a</sub> = 7.5, pH 6.5 gives <strong>90.9%</strong> HOCl; pH 8.5 gives <strong>9.09%</strong>. pK<sub>a</sub> depends on temperature.</p><p><strong>Common mistake:</strong> reading these fractions as percent pathogen kill. Contact time and organism susceptibility still matter. Neither pH 7 nor pH 9.5 is a universal disinfection threshold.</p><p>Hypochlorite can add alkalinity; chlorine gas can lower pH. The actual change depends on dose and buffering. Final pH must also satisfy corrosion and water-quality requirements.</p>",
                    sources: [
                        { id: "WATE813-00036", set: 5, question: 96 },
                        { id: "WATE813-00037", set: 5, question: 97 },
                        { id: "WATE813-00256", set: 26, question: 92 }
                    ]
                },
                {
                    id: "treatment-chlorine-demand-and-breakpoint",
                    title: "Demand, residual and breakpoint",
                    html: "<p>At a stated contact time, <strong>chlorine demand = applied dose − total residual</strong>, all on the mg/L as Cl<sub>2</sub> basis. Total residual includes free and combined chlorine.</p><p><strong>Assumed test:</strong> dose 2.0 mg/L and total residual 0.4 mg/L after 30 minutes give <strong>demand 1.6 mg/L at 30 minutes</strong>.</p><p>With ammonia, increasing dose can first form chloramines, then destroy part of that combined residual. Beyond the breakpoint region, free residual rises. Curve shape depends on chemistry and contact time.</p><p><strong>Common mistake:</strong> equating applied dose with useful residual, or assuming breakpoint means every organic compound has been oxidised. Chlorination is not aeration or desalination; oxidised metals still need solids separation.</p>",
                    sources: [
                        { id: "WATE813-00041", set: 6, question: 91 },
                        { id: "WATE813-00234", set: 24, question: 91 },
                        { id: "WATE813-00255", set: 26, question: 91 }
                    ]
                },
                {
                    id: "treatment-chlorine-mass-and-product-basis",
                    title: "Chlorine dose and product mass",
                    html: "<p><strong>Dose = 1000M/Q mg/L</strong>, with available chlorine M in kg/day and Q in m<sup>3</sup>/day. For available-chlorine mass fraction f, <strong>product mass = M/f</strong>.</p><p><strong>Bank example:</strong> 15 kg/day chlorine in 30,000 m<sup>3</sup>/day gives <strong>0.5 mg/L</strong>. This is applied dose, not measured residual.</p><p><strong>Assumed product example:</strong> at 65% available chlorine by mass, 15 kg/day available chlorine requires <strong>23.0769 kg/day product</strong>. Product concentration is 0.76923 mg/L, while available-chlorine dose remains 0.5 mg/L.</p><p><strong>Common mistake:</strong> mixing product mass with available-chlorine mass. Pure calcium hypochlorite is Ca(OCl)<sub>2</sub>; commercial bleaching powder can be a mixture. CaOCl<sub>2</sub> is not the same formula. Use an actual product assay; these calculations are not an operating recipe.</p>",
                    sources: [
                        { id: "WATE813-00243", set: 24, question: 100 },
                        { id: "WATE813-00254", set: 25, question: 100 }
                    ]
                },
                {
                    id: "treatment-ct-and-effective-contact",
                    title: "Effective contact and CT",
                    html: "<p><strong>Syllabus extension:</strong> <strong>CT = C × t</strong>, with C in mg/L and effective contact time t in minutes, gives mg·min/L. Required performance depends on species, organism, temperature, pH and water quality.</p><p>Nominal V/Q misses short-circuiting. Tracer-derived <strong>t<sub>10</sub></strong> is the time at 10% cumulative tracer passage. Use an accepted assessment method when concentration changes or contact is segmented.</p><p><strong>Assumed example:</strong> V = 600 m<sup>3</sup>, Q = 1200 m<sup>3</sup>/h give nominal 30 minutes. With t<sub>10</sub> = 0.5(V/Q) and constant free chlorine 0.60 mg/L, effective time is 15 minutes and <strong>CT = 9 mg·min/L</strong>, not 18.</p><p><strong>WHO 2022 guidance:</strong> at least 0.5 mg/L free residual after at least 30 minutes at pH below 8, and at least 0.2 mg/L at delivery. This is not a universal CT table or protection against chlorine-resistant organisms.</p>",
                    sources: []
                },
                {
                    id: "treatment-chlorination-terms-and-residuals",
                    title: "Chlorination terms and standards",
                    html: "<table><thead><tr><th scope='col'>Term</th><th scope='col'>Meaning</th></tr></thead><tbody><tr><th scope='row'>Pre / postchlorination</th><td>Application before / after relevant treatment stages.</td></tr><tr><th scope='row'>Hypochlorination</th><td>Use of a hypochlorite chemical source.</td></tr><tr><th scope='row'>Plain chlorination</th><td>Chlorination without preceding treatment.</td></tr><tr><th scope='row'>Superchlorination</th><td>Deliberately high dosing for a stated purpose; controlled dechlorination may follow.</td></tr></tbody></table><p><strong>NDWQS 2079, inspected edition:</strong> residual chlorine <strong>0.10–0.50 mg/L for chlorine-using systems</strong>, with its epidemic/high-pollution qualification permitting above 0.5 mg/L in that context. Verify applicable amendments before field use.</p><p><strong>Common mistake:</strong> confusing an operating residual, WHO contact guidance and the WHO 5 mg/L free-chlorine health-based value. The last is not an operating target. Check residual along the distribution system; dechlorination does not erase oxidation by-products.</p>",
                    sources: [
                        { id: "WATE813-00250", set: 25, question: 96 },
                        { id: "WATE813-00253", set: 25, question: 99 },
                        { id: "WATE813-00256", set: 26, question: 92 }
                    ]
                },
                {
                    id: "treatment-uv-ozone-and-pathogen-targets",
                    title: "UV, ozone and residual protection",
                    html: "<p><strong>UV</strong> damages microbial nucleic acids and prevents replication. Ideal fluence is irradiance × exposure time, commonly mJ/cm<sup>2</sup>. Real delivery depends on UV transmittance, particle shielding, lamp ageing, fouling and reactor hydraulics.</p><p>Validated UV systems can control chlorine-resistant organisms, including Cryptosporidium, but leave <strong>no distribution disinfectant residual</strong>.</p><p><strong>Ozone</strong> is a strong oxidant for selected disinfection and chemical-removal duties. It also lacks a lasting residual and may form bromate when bromide is present. Chloramine is more persistent but less reactive for several duties.</p><p><strong>Common mistake:</strong> using lamp power/flow as proof of UV dose, or comparing disinfectants without organism targets, by-products and downstream protection.</p>",
                    sources: [
                        { id: "WATE813-00239", set: 24, question: 96 },
                        { id: "WATE813-00236", set: 24, question: 93 }
                    ]
                },
                {
                    id: "treatment-aeration-and-gas-transfer",
                    title: "Aeration and gas transfer",
                    html: "<p>Aeration can release excess CO<sub>2</sub>, hydrogen sulfide and suitable volatile compounds, while adding oxygen to deficient water. Direction depends on the difference from equilibrium.</p><p>For a well-mixed liquid with constant gas conditions, <strong>dC/dt = K<sub>L</sub>a(C* − C)</strong>. With constant coefficient, <strong>C(t) = C* + (C<sub>0</sub> − C*)e<sup>−K<sub>L</sub>at</sup></strong>. K<sub>L</sub>a and t must use reciprocal time units; C* is equilibrium concentration.</p><p><strong>Assumed stripping example:</strong> C<sub>0</sub> = 10 mg/L, C* = 2 mg/L, K<sub>L</sub>a = 0.10 min<sup>−1</sup>, t = 10 min give <strong>C = 4.943 mg/L</strong>.</p><p>Cascades, sprays and packed contactors create contact differently. Aeration may oxidise iron, but precipitate still needs separation. It is not filtration, disinfection or removal of every nonvolatile odour.</p>",
                    sources: [
                        { id: "WATE813-00235", set: 24, question: 92 },
                        { id: "WATE813-00241", set: 24, question: 98 }
                    ]
                },
                {
                    id: "treatment-iron-manganese-and-sequestration",
                    title: "Iron, manganese and sequestration",
                    html: "<p><strong>Oxidise, then separate:</strong> convert dissolved reduced metals to less-soluble solids, then filter or settle them. For iron, <strong>4Fe<sup>2+</sup> + O<sub>2</sub> + 10H<sub>2</sub>O → 4Fe(OH)<sub>3</sub> + 8H<sup>+</sup></strong>. The released acidity explains the importance of pH and alkalinity.</p><p>Manganese may oxidise much more slowly than iron. Treatment can require an appropriate oxidant, catalytic media or biological filtration. Chloramine is comparatively weak for rapid metal oxidation; aeration alone is not guaranteed to remove manganese.</p><p><strong>Sequestration</strong> reduces visible deposition by keeping metals dispersed or complexed; it does not remove their mass. Test total and dissolved concentrations.</p><p><strong>Common mistake:</strong> claiming removal because staining disappears, or assuming ordinary activated carbon reliably removes manganese. Catalytic media need their own operating conditions.</p>",
                    sources: [
                        { id: "WATE813-00244", set: 25, question: 90 },
                        { id: "WATE813-00252", set: 25, question: 98 },
                        { id: "WATE813-00230", set: 23, question: 97 }
                    ]
                },
                {
                    id: "treatment-carbon-adsorption-and-ebct",
                    title: "Activated carbon and EBCT",
                    html: "<p>Activated carbon adsorbs selected organic compounds associated with taste, odour and colour. Performance depends on the compound, carbon, competing organics and contact. Powdered carbon is added then separated; granular carbon operates as a bed with finite capacity.</p><p><strong>EBCT = V<sub>bed</sub>/Q</strong> uses bulk bed volume, not pore-water volume. WHO 2022 A5.1.7 describes typical GAC EBCT of <strong>5–30 minutes</strong>, not a universal requirement.</p><p><strong>Assumed example:</strong> 12 m<sup>3</sup> of bed at 60 m<sup>3</sup>/h gives <strong>12 minutes EBCT</strong>. At 0.5 mg/L target concentration, incoming target load is <strong>30 g/h</strong>.</p><p><strong>Common mistake:</strong> deriving bed life from EBCT alone. Usable capacity, competing loads and breakthrough limit are also needed. Monitor contaminants and replace or regenerate carbon; adsorption is not automatic disinfection.</p>",
                    sources: [
                        { id: "WATE813-00230", set: 23, question: 97 },
                        { id: "WATE813-00240", set: 24, question: 97 },
                        { id: "WATE813-00251", set: 25, question: 97 }
                    ]
                },
                {
                    id: "treatment-colour-odour-and-algae",
                    title: "Colour, odour and algae",
                    html: "<p><strong>Apparent colour</strong> includes suspended matter; <strong>true colour</strong> is assessed after appropriate particle removal. Settling and filtration can improve apparent colour while dissolved colour remains.</p><p>Match treatment to the cause: coagulation for removable organic fractions, carbon for suitable dissolved compounds, aeration for volatile compounds such as hydrogen sulfide, and oxidation where effective without unacceptable by-products.</p><p>For algae and cyanobacteria, consider nutrient control, intake management and intact-cell removal. <strong>Cell lysis can release toxins and odour compounds</strong>, so a disappearing bloom is not proof of safe water.</p><p>Copper sulfate is a historical algicide, not a universal recommendation. Its use needs assessment of toxicity, residual copper and permissions. Oxidation is likewise not always the best odour treatment.</p>",
                    sources: [
                        { id: "WATE813-00237", set: 24, question: 94 },
                        { id: "WATE813-00242", set: 24, question: 99 },
                        { id: "WATE813-00270", set: 27, question: 94 }
                    ]
                }
            ],
            gaps: [
                "All 70 assigned sources are covered. Confirmed option errors are corrected in the question bank and identified in the question checks; unresolved assumptions remain explicit.",
                "The bank lacks a complete source-water analysis, seasonal treatability series and finished-water objectives. Conventional treatment order is taught, but no single train is claimed appropriate for every surface-water or groundwater source.",
                "Settling calculations use an explicitly ideal discrete-particle model. Full-scale inlet hydraulics, flocculent settling-column results, sludge loading and actual residence-time distributions are not supplied. The 0.3 m/s and 24-hour generalisations lack a verified applicable design edition.",
                "Jar-test conditions, product purity, temperature and full-scale mixing data are incomplete. The keyed 100–200 s−1 cannot be justified by a nearest-option argument, and 30 minutes is not a universal floc-breakup threshold.",
                "treatment-filter-runs-and-backwash is a source-free Syllabus extension. No assigned source supplies a complete clean-bed resistance, expansion, wash sequence, run length or residuals-recycle dataset; actual equipment and water-quality evidence are still required.",
                "treatment-lime-soda-softening is a source-free Syllabus extension. Complete calcium, magnesium, alkalinity, carbon-dioxide, reagent-purity and residual-hardness data are absent. The reaction balances are explanatory, not a completed chemical-dosing design.",
                "treatment-ct-and-effective-contact is a source-free Syllabus extension. The bank lacks pathogen targets, temperature-dependent CT tables, tracer t10, free-chlorine profiles and a validated reactor operating envelope. Hypothetical contact arithmetic does not establish disinfection adequacy.",
                "WHO 2022 treatment ranges, read with the 24 May 2023 corrigenda, are identified as typical guidance rather than Nepal design requirements. The inspected NDWQS 2079 notice and its qualifications are not a certification of every subsequent amendment or current plant compliance.",
                "Ordinary activated-carbon manganese removal is not guaranteed. Actual Fe/Mn form, pH, reaction kinetics, catalytic-media performance, adsorption capacity and breakthrough data are missing. Sequestration is distinguished from removal.",
                "All added numerical datasets are explicitly hypothetical. Actual chemical handling, regeneration, backwashing and algicide application require qualified plant-specific systems; these notes provide no field chemical-mixing recipe or disposal permission. No purported ISO 12957 flocculation standard is used."
            ],
            cautions: [
                {
                    "id": "check-wate813-00032",
                    "status": "review",
                    "issue": "context",
                    "prompt": "The exhausted permute is generally regenerated by percolating through it a solution of",
                    "html": "<p><strong>NaCl identifies the sodium-cycle regenerant, not an executable universal recipe.</strong> </p><p>A 10% statement requires a concentration basis and product/equipment context. </p>",
                    "sources": [
                        {
                            "id": "WATE813-00032",
                            "set": 5,
                            "question": 92
                        }
                    ]
                },
                {
                    "id": "check-wate813-00033",
                    "status": "review",
                    "issue": "ambiguity",
                    "prompt": "When the impurities are separated by the gravitation of settling particles, the operation is called ______",
                    "html": "<p><strong>Gravity separation does not establish coagulant use.</strong> Sedimentation separates particles by gravity; plain sedimentation excludes deliberate coagulant addition. The generic stem cannot uniquely imply sedimentation with coagulant, and natural flocculation can still occur during plain settling.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00033",
                            "set": 5,
                            "question": 93
                        }
                    ]
                },
                {
                    "id": "check-wate813-00035",
                    "status": "corrected",
                    "prompt": "For a fixed discharge under the ideal discrete-settling model, particle-removal efficiency can be increased by",
                    "html": "<p><strong>Corrected: increase plan area, option C.</strong> At fixed discharge, Q/A decreases as plan area increases, improving ideal discrete-particle capture. The duplicate depth choices and decreasing-area choice have been repaired.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00035",
                            "set": 5,
                            "question": 95
                        }
                    ]
                },
                {
                    "id": "check-wate813-00036",
                    "status": "review",
                    "issue": "clarification",
                    "prompt": "Efficiency of chlorine as disinfectant",
                    "html": "<p><strong>pH affects chlorine speciation, but product name does not fix the final pH.</strong> </p><p>Hypochlorites tend to add alkalinity; starting chemistry, buffering and dose control the response. </p><p>Disinfection is not universally maximal at pH 7, and pH 9.5 is not an instantaneous E. coli kill rule. </p><p>Arbitrary acidification can create corrosion and quality problems.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00036",
                            "set": 5,
                            "question": 96
                        }
                    ]
                },
                {
                    "id": "check-wate813-00037",
                    "status": "review",
                    "issue": "clarification",
                    "prompt": "What would be the effect on pH if Bleaching powder is added?",
                    "html": "<p><strong>Hypochlorite usually adds alkalinity.</strong> The final pH response still depends on starting water chemistry, buffering and dose. Product name alone does not determine the treated-water pH.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00037",
                            "set": 5,
                            "question": 97
                        }
                    ]
                },
                {
                    "id": "check-wate813-00038",
                    "status": "review",
                    "issue": "notation",
                    "prompt": "Alum is chemically",
                    "html": "<p><strong>Aluminium sulfate identity does not establish hydration or commercial purity.</strong> </p><p>Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>·18H<sub>2</sub>O is the source's particular representation. </p><p>Reagent mass, mg/L as Al and alkalinity as CaCO<sub>3</sub> require different conversions. </p><p>WHO's metal-basis typical doses must not be treated as product doses.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00038",
                            "set": 5,
                            "question": 98
                        }
                    ]
                },
                {
                    "id": "check-wate813-00040",
                    "status": "review",
                    "issue": "clarification",
                    "prompt": "By boiling water, hardness can be removed if it is due to",
                    "html": "<p><strong>Boiling targets temporary bicarbonate hardness.</strong> It can precipitate calcium carbonate and, through the applicable reactions, reduce magnesium bicarbonate hardness. It does not generally remove sulfate or chloride hardness.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00040",
                            "set": 5,
                            "question": 100
                        }
                    ]
                },
                {
                    "id": "check-wate813-00041",
                    "status": "review",
                    "issue": "clarification",
                    "prompt": "Use of chlorine in water does not reduce",
                    "html": "<p><strong>Chlorination is not general dissolved-substance removal.</strong> It reacts with selected reduced constituents but leaves many salts. It does not normally strip dissolved oxygen, and an automatic aeration or oxygen increase should not be assumed.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00041",
                            "set": 6,
                            "question": 91
                        }
                    ]
                },
                {
                    "id": "check-wate813-00042",
                    "status": "review",
                    "issue": "context",
                    "prompt": "Thickness of filter media of slow sand filter is",
                    "html": "<p><strong>Filter ranges require an identified context.</strong> </p><p>WHO 2022 separately describes typical rapid 4–20 m/h and slow 0.1–0.3 m/h, with their own media ranges. </p>",
                    "sources": [
                        {
                            "id": "WATE813-00042",
                            "set": 6,
                            "question": 92
                        }
                    ]
                },
                {
                    "id": "check-wate813-00043",
                    "status": "review",
                    "issue": "context",
                    "prompt": "What is the opening spacing of bars in case of coarse screen?",
                    "html": "<p><strong>50 mm is a teaching opening, not a universal coarse-screen specification.</strong> Select openings, projected net area, blockage allowance and cleaning provisions for the actual debris and protected equipment. Clear bar spacing is not the same as centre-to-centre pitch.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00043",
                            "set": 6,
                            "question": 93
                        }
                    ]
                },
                {
                    "id": "check-wate813-00044",
                    "status": "review",
                    "issue": "notation",
                    "prompt": "What is the rate of filtration of a rapid sand filter?",
                    "html": "<p><strong>Filter ranges require an identified context.</strong> </p><p>The bank's rapid 3000–6000 L/(m<sup>2</sup>·h) is exactly 3–6 m/h or 50–100 mm/min. </p>",
                    "sources": [
                        {
                            "id": "WATE813-00044",
                            "set": 6,
                            "question": 94
                        }
                    ]
                },
                {
                    "id": "check-wate813-00045",
                    "status": "review",
                    "issue": "context",
                    "prompt": "Zeolite used in zeolite softening process for the treatment of hard water gets exhausted after certain time of usage but can be regenerated by flushing it with",
                    "html": "<p><strong>NaCl identifies the sodium-cycle regenerant, not an executable universal recipe.</strong> </p><p>A 10% statement requires a concentration basis and product/equipment context. </p>",
                    "sources": [
                        {
                            "id": "WATE813-00045",
                            "set": 6,
                            "question": 95
                        }
                    ]
                },
                {
                    "id": "check-wate813-00046",
                    "status": "review",
                    "issue": "assumptions",
                    "prompt": "At what velocity will the particles settle down?",
                    "html": "<p><strong>Particle data are missing.</strong> Settling speed depends on size, density, fluid properties and the drag regime. No universal 0.3 m/s settling threshold follows from the stem.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00046",
                            "set": 6,
                            "question": 96
                        }
                    ]
                },
                {
                    "id": "check-wate813-00060",
                    "status": "review",
                    "issue": "assumptions",
                    "prompt": "Which of the following causes greasing in flocculation?",
                    "html": "<p><strong>Surfactants can interfere with flocculation, but greasy scum is not a unique diagnostic.</strong> Oil, emulsions, source contaminants and operating conditions need investigation. The source's identification answer does not establish that every flocculation problem has that cause.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00060",
                            "set": 7,
                            "question": 100
                        }
                    ]
                },
                {
                    "id": "check-wate813-00063",
                    "status": "review",
                    "issue": "notation",
                    "prompt": "In slow sand filters, the turbidity of raw water can be removed only up to",
                    "html": "<p><strong>NTU is not mg/L or ppm.</strong> Turbidity is an optical measurement; suspended-solids concentration is a mass measurement. The 60 mg/L turbidity statement supplies no universal conversion, raw-water limit or guaranteed slow-filter run length.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00063",
                            "set": 8,
                            "question": 93
                        }
                    ]
                },
                {
                    "id": "check-wate813-00086",
                    "status": "review",
                    "issue": "ambiguity",
                    "prompt": "When the impurities are separated by the gravitation of settling particles, the operation is called ______.",
                    "html": "<p><strong>Gravity separation does not establish coagulant use.</strong> Sedimentation separates particles by gravity; plain sedimentation excludes deliberate coagulant addition. The generic stem cannot uniquely imply sedimentation with coagulant, and natural flocculation can still occur during plain settling.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00086",
                            "set": 10,
                            "question": 95
                        }
                    ]
                },
                {
                    "id": "check-wate813-00228",
                    "status": "review",
                    "issue": "clarification",
                    "prompt": "Which of following processes are necessary for removing suspended solids from water?",
                    "html": "<p><strong>The conventional sequence is not mandatory for every water.</strong> </p><p>Coagulation, flocculation and sedimentation have distinct functions and do not guarantee complete suspended-solids removal. </p><p>Direct filtration and other validated trains exist. </p>",
                    "sources": [
                        {
                            "id": "WATE813-00228",
                            "set": 23,
                            "question": 95
                        }
                    ]
                },
                {
                    "id": "check-wate813-00230",
                    "status": "review",
                    "issue": "answer-review",
                    "prompt": "Activated carbon removes from water",
                    "html": "<p><strong>Ordinary activated carbon does not guarantee manganese removal.</strong> WHO 2022 Table A5.1 does not establish an effective general activated-carbon manganese process. Specialised products or biological/catalytic mechanisms need separate evidence. Organic adsorption performance cannot justify the source's unqualified all-of-the-above claim.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00230",
                            "set": 23,
                            "question": 97
                        }
                    ]
                },
                {
                    "id": "check-wate813-00231",
                    "status": "review",
                    "issue": "assumptions",
                    "prompt": "For proper slow mixing in the flocculator of a water treatment plant, the temporal mean velocity gradient G needs to be of the order of",
                    "html": "<p><strong>The 100–200 s<sup>−1</sup> slow-mixing key lacks a demonstrated design basis.</strong> An explanation that cites a different G interval and then selects the nearest offered interval does not validate the choice. G = √[P/(μV)] describes mean energy dissipation; appropriate intensity requires water, floc and equipment evidence.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00231",
                            "set": 23,
                            "question": 98
                        }
                    ]
                },
                {
                    "id": "check-wate813-00233",
                    "status": "review",
                    "issue": "answer-review",
                    "prompt": "In a water treatment, the optimum time of flocculation is usually time as 30 minutes. In case the time of flocculation is increased beyond this value, the flocs will",
                    "html": "<p><strong>Flocs do not inevitably break when contact exceeds 30 minutes.</strong> </p><p>Breakup depends on shear and floc strength and competes with aggregation. </p><p>The 10–40-minute interval is also a teaching range, not a universal optimum. </p><p>Longer appropriately gentle treatment can behave differently from prolonged high shear.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00233",
                            "set": 23,
                            "question": 100
                        }
                    ]
                },
                {
                    "id": "check-wate813-00234",
                    "status": "review",
                    "issue": "clarification",
                    "prompt": "Break-point chlorination of water involves addition of chlorine in an amount sufficient to:",
                    "html": "<p><strong>Breakpoint is not complete oxidation of all organic matter.</strong> </p><p>Its characteristic behaviour involves chlorine demand, ammonia/chloramine reactions and the emergence of free residual. </p>",
                    "sources": [
                        {
                            "id": "WATE813-00234",
                            "set": 24,
                            "question": 91
                        }
                    ]
                },
                {
                    "id": "check-wate813-00235",
                    "status": "review",
                    "issue": "clarification",
                    "prompt": "Aeration of water is done to remove",
                    "html": "<p><strong>Aeration transfers suitable gases and volatile compounds.</strong> Removal depends on volatility, temperature and mass-transfer conditions. It does not remove every dissolved odour, colour compound or salt.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00235",
                            "set": 24,
                            "question": 92
                        }
                    ]
                },
                {
                    "id": "check-wate813-00236",
                    "status": "review",
                    "issue": "context",
                    "prompt": "The most ideal disinfectant used for drinking water is",
                    "html": "<p>Assess chemical contamination, turbidity and resistant pathogens. </p><p>Chlorine's cost and residual advantages do not make it universally ideal; Cryptosporidium requires other validated barriers.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00236",
                            "set": 24,
                            "question": 93
                        }
                    ]
                },
                {
                    "id": "check-wate813-00237",
                    "status": "review",
                    "issue": "context",
                    "prompt": "In most Cases, Oxidation is best method suitable for",
                    "html": "<p><strong>No single method removes every colour, taste or odour.</strong> </p><p>Aeration concerns suitable volatile compounds; carbon adsorption and oxidation depend on the target substance. </p>",
                    "sources": [
                        {
                            "id": "WATE813-00237",
                            "set": 24,
                            "question": 94
                        }
                    ]
                },
                {
                    "id": "check-wate813-00238",
                    "status": "review",
                    "issue": "clarification",
                    "prompt": "During treatment of water, sedimentation is done",
                    "html": "<p><strong>Conventional sequence:</strong> coagulation and flocculation precede sedimentation, which precedes filtration. This sequence is not mandatory for every source; a validated direct-filtration process can omit a separate settling stage.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00238",
                            "set": 24,
                            "question": 95
                        }
                    ]
                },
                {
                    "id": "check-wate813-00239",
                    "status": "review",
                    "issue": "clarification",
                    "prompt": "Ultra violet light disinfection works by",
                    "html": "<p><strong>UV principally damages DNA/RNA and prevents replication.</strong> The metabolic-activities option is an imprecise description, not evidence for cell-wall destruction or chemical oxidation. UV performance requires validated exposure and water transmittance, and UV leaves no lasting distribution residual.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00239",
                            "set": 24,
                            "question": 96
                        }
                    ]
                },
                {
                    "id": "check-wate813-00240",
                    "status": "review",
                    "issue": "context",
                    "prompt": "Foul odor and bad taste of water is removed by treating with...",
                    "html": "<p><strong>Activated carbon is contaminant-specific.</strong> It can adsorb many taste-and-odour compounds, but effectiveness depends on the substance, carbon, competition and contact. It is not a guarantee for every foul taste or odour.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00240",
                            "set": 24,
                            "question": 97
                        }
                    ]
                },
                {
                    "id": "check-wate813-00242",
                    "status": "review",
                    "issue": "context",
                    "prompt": "The compound widely used to control algae is",
                    "html": "<p>Copper sulfate's historical algicide use is not a universal recommendation: ecological toxicity, residuals and release of intracellular compounds require qualified assessment.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00242",
                            "set": 24,
                            "question": 99
                        }
                    ]
                },
                {
                    "id": "check-wate813-00244",
                    "status": "review",
                    "issue": "clarification",
                    "prompt": "Which chemical is not effective for removal of iron and manganese",
                    "html": "<p><strong>Chloramine is comparatively weak for rapid iron and manganese oxidation.</strong> Its persistence may suit residual disinfection, but metal removal needs appropriate chemistry, contact and subsequent precipitate separation.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00244",
                            "set": 25,
                            "question": 90
                        }
                    ]
                },
                {
                    "id": "check-wate813-00248",
                    "status": "review",
                    "issue": "context",
                    "prompt": "What is the time period for which the water is stored in fill and draw type of sedimentation tank?",
                    "html": "<p><strong>A batch settling time is not the whole fill-and-draw cycle.</strong> The keyed 24 hours is not a universal requirement. Account separately for filling, settling, decanting and residuals management; water properties and the required output determine a suitable operating cycle.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00248",
                            "set": 25,
                            "question": 94
                        }
                    ]
                },
                {
                    "id": "check-wate813-00249",
                    "status": "review",
                    "issue": "assumptions",
                    "prompt": "What is the maximum permissible velocity in horizontal flow type sedimentation tank?",
                    "html": "<p><strong>No verified universal basin velocity.</strong> Horizontal through-flow, vertical particle settling and local sludge scour are different quantities. A permissible velocity requires a design procedure and particle/hydraulic conditions.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00249",
                            "set": 25,
                            "question": 95
                        }
                    ]
                },
                {
                    "id": "check-wate813-00250",
                    "status": "review",
                    "issue": "assumptions",
                    "prompt": "Plain chlorination is used for water",
                    "html": "<p><strong>Clear water or an emergency does not prove plain chlorination is sufficient.</strong> </p><p>Assess chemical contamination, turbidity and resistant pathogens. </p>",
                    "sources": [
                        {
                            "id": "WATE813-00250",
                            "set": 25,
                            "question": 96
                        }
                    ]
                },
                {
                    "id": "check-wate813-00252",
                    "status": "review",
                    "issue": "clarification",
                    "prompt": "A method that is not used to remove iron and manganese from water is...",
                    "html": "<p><strong>Oxidation and sequestration have different outcomes.</strong> </p><p>Oxidised Fe/Mn generally require filtration; aeration alone may not provide adequate manganese oxidation. </p><p>Sequestration can reduce staining while leaving metal mass in the water, so it is not removal or proof of meeting a total-metal limit.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00252",
                            "set": 25,
                            "question": 98
                        }
                    ]
                },
                {
                    "id": "check-wate813-00253",
                    "status": "review",
                    "issue": "clarification",
                    "prompt": "The process in which chlorination is done beyond break point is known as",
                    "html": "<p>Ordinary operation beyond breakpoint is not automatically superchlorination; a deliberately high-dose strategy is a different description.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00253",
                            "set": 25,
                            "question": 99
                        }
                    ]
                },
                {
                    "id": "check-wate813-00254",
                    "status": "review",
                    "issue": "notation",
                    "prompt": "Chemical formula of bleaching powder is",
                    "html": "<p><strong>Pure calcium hypochlorite and commercial bleaching powder must be distinguished.</strong> </p><p>Ca(OCl)<sub>2</sub> identifies the pure compound, not 100% purity or 100% available chlorine in a product. </p><p>Practical accounting uses verified available chlorine. </p><p>The current NCERT passage cited in the verified research itself prints Ca(ClO)<sub>2</sub> while noting complex composition; it must not be falsely cited as authority for a different printed formula.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00254",
                            "set": 25,
                            "question": 100
                        }
                    ]
                },
                {
                    "id": "check-wate813-00255",
                    "status": "review",
                    "issue": "ambiguity",
                    "prompt": "Chlorination of water does not remove",
                    "html": "<p><strong>The broad choices overlap.</strong> Chlorination does not remove every inorganic or organic constituent. Dissolved oxygen is not normally stripped, but many inorganic salts also remain; a generic “inorganic material” option is too broad for a unique rule.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00255",
                            "set": 26,
                            "question": 91
                        }
                    ]
                },
                {
                    "id": "check-wate813-00256",
                    "status": "review",
                    "issue": "notation",
                    "prompt": "The treatment of water with bleaching powder is known as",
                    "html": "<p><strong>Pure calcium hypochlorite and commercial bleaching powder must be distinguished.</strong> </p><p>Practical accounting uses verified available chlorine. </p>",
                    "sources": [
                        {
                            "id": "WATE813-00256",
                            "set": 26,
                            "question": 92
                        }
                    ]
                },
                {
                    "id": "check-wate813-00257",
                    "status": "review",
                    "issue": "clarification",
                    "prompt": "Sterilization of water helps in killing of",
                    "html": "<p>It targets harmful microorganisms to a specified performance level and does not necessarily eliminate every microbial form. </p><p>Bacterial inactivation alone does not demonstrate equivalent virus or protozoan performance.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00257",
                            "set": 26,
                            "question": 93
                        }
                    ]
                },
                {
                    "id": "check-wate813-00258",
                    "status": "review",
                    "issue": "clarification",
                    "prompt": "Disinfection of water helps in",
                    "html": "<p><strong>Disinfection is not complete sterilisation.</strong> </p><p>Bacterial inactivation alone does not demonstrate equivalent virus or protozoan performance.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00258",
                            "set": 26,
                            "question": 94
                        }
                    ]
                },
                {
                    "id": "check-wate813-00259",
                    "status": "review",
                    "issue": "context",
                    "prompt": "The detention time in flocculator is kept as ____ minutes.",
                    "html": "<p><strong>Flocculation time is process-specific.</strong> A 10-40 minute teaching interval is not a universal optimum. Water properties, mixing intensity, floc strength and downstream separation determine the operating time.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00259",
                            "set": 26,
                            "question": 95
                        }
                    ]
                },
                {
                    "id": "check-wate813-00261",
                    "status": "review",
                    "issue": "answer-review",
                    "prompt": "Particle of around 1 micron is removed by",
                    "html": "<p><strong>A 1 μm diameter does not prove filtration is impossible.</strong> Coagulation often improves removal of fine particles, but granular attachment mechanisms and suitable membranes can capture particles below visible pore dimensions. Size alone does not prescribe the entire treatment train.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00261",
                            "set": 26,
                            "question": 97
                        }
                    ]
                },
                {
                    "id": "check-wate813-00263",
                    "status": "review",
                    "issue": "context",
                    "prompt": "The rate of filtration in slow sand filter is of the order of ... liters per hour per m²",
                    "html": "<p><strong>Units and source context matter.</strong> Slow-sand rates around 0.1-0.3 m/h correspond to 100-300 L/(m<sup>2</sup> h) in the cited WHO guidance. They are typical values, not a universal Nepal design requirement.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00263",
                            "set": 26,
                            "question": 99
                        }
                    ]
                },
                {
                    "id": "check-wate813-00264",
                    "status": "review",
                    "issue": "ambiguity",
                    "prompt": "When impurities are separated by the gravitation of settling particles, the operation is called ______",
                    "html": "<p><strong>Gravity separation does not establish coagulant use.</strong> Sedimentation separates particles by gravity; plain sedimentation excludes deliberate coagulant addition. The generic stem cannot uniquely imply sedimentation with coagulant, and natural flocculation can still occur during plain settling.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00264",
                            "set": 26,
                            "question": 100
                        }
                    ]
                },
                {
                    "id": "check-wate813-00266",
                    "status": "corrected",
                    "prompt": "What is the settling velocity of the particle if its diameter is 2×10⁻³ cm. Given G = 2.65, viscosity ν = 10⁻² cm²/sec",
                    "html": "<p><strong>Corrected: 0.03597 cm/s, option B.</strong> Stokes' law with the supplied inputs gives Re<sub>p</sub> = 0.007194. The former 0.36 cm/s choice was a tenfold error.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00266",
                            "set": 27,
                            "question": 91
                        }
                    ]
                },
                {
                    "id": "check-wate813-00269",
                    "status": "review",
                    "issue": "notation",
                    "prompt": "The chemical composition of Alum is...",
                    "html": "<p><strong>Hydration is a specified composition.</strong> Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>·18H<sub>2</sub>O is one aluminium-sulfate hydrate, not the guaranteed form or purity of every commercial alum. Product dose and dose expressed as Al need different conversions.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00269",
                            "set": 27,
                            "question": 93
                        }
                    ]
                },
                {
                    "id": "check-wate813-00270",
                    "status": "review",
                    "issue": "context",
                    "prompt": "Why Alum is preferred over other coagulants?",
                    "html": "<p><strong>Coagulant benefits depend on the water.</strong> </p><p>Alum does not invariably remove all taste and odour or produce readily dewatered sludge. </p>",
                    "sources": [
                        {
                            "id": "WATE813-00270",
                            "set": 27,
                            "question": 94
                        }
                    ]
                },
                {
                    "id": "check-wate813-00271",
                    "status": "review",
                    "issue": "context",
                    "prompt": "Which of the following statement is false regarding iron salt?",
                    "html": "<p>Iron-floc density, quantity and settling speed are distinct properties; heavier floc alone does not prove a universal dose, sludge volume or shorter detention.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00271",
                            "set": 27,
                            "question": 95
                        }
                    ]
                },
                {
                    "id": "check-wate813-00274",
                    "status": "corrected",
                    "prompt": "When water containing calcium bicarbonate is boiled, which solid precipitate forms?",
                    "html": "<p><strong>Clarified stem: calcium carbonate, option A.</strong> The question now asks for the solid precipitate. Carbon dioxide is also a reaction product, but not the solid; both fitted the previous broad wording. The options and answer letter are unchanged.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00274",
                            "set": 27,
                            "question": 98
                        }
                    ]
                },
                {
                    "id": "check-wate813-00275",
                    "status": "review",
                    "issue": "clarification",
                    "prompt": "Which of the following is not commonly used as a filter material in the treatment of water?",
                    "html": "<p><strong>Plastic media are not impossible filter materials.</strong> Sand, anthracite and garnet are conventional granular media; plastic or floating media occur in specialised systems. The source's conventional-media comparison must not become a statement about every water or wastewater filter.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00275",
                            "set": 27,
                            "question": 99
                        }
                    ]
                },
                {
                    "id": "check-wate813-00276",
                    "status": "corrected",
                    "prompt": "For new sand selected for a conventional water filter, consider: i. It should be free from clay and silt. ii. It should contain organic contamination. iii. Broad, uncontrolled grading is preferable to controlled grading. Which statements are appropriate?",
                    "html": "<p><strong>Corrected choice: i only, option C.</strong> The new-media context and grading statement are now explicit. Clean sand with controlled grading is appropriate; organic contamination and uncontrolled grading are not. Option C replaces the former incorrect i, iii combination.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00276",
                            "set": 27,
                            "question": 100
                        }
                    ]
                },
                {
                    "id": "check-wate813-00277",
                    "status": "review",
                    "issue": "notation",
                    "prompt": "The uniformity characteristics of sand is expressed in terms of ______",
                    "html": "<p><strong>D<sub>10</sub> describes effective size; D<sub>60</sub>/D<sub>10</sub> describes uniformity.</strong> Both are useful specifications but have different meanings. A low uniformity coefficient does not alone establish acceptable sand, and a grain-size interval is not automatically an effective-size interval.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00277",
                            "set": 28,
                            "question": 91
                        }
                    ]
                },
                {
                    "id": "check-wate813-00328",
                    "status": "review",
                    "issue": "context",
                    "prompt": "In a slow sand filter, what is the typical effective size (D10) of the sand particles?",
                    "html": "<p><strong>Filter ranges require an identified context.</strong> </p><p>WHO 2022 separately describes typical rapid 4–20 m/h and slow 0.1–0.3 m/h, with their own media ranges. </p><p>Neither WHO's typical values nor the source's sand-depth and size intervals are universal Nepal design requirements.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00328",
                            "set": 32,
                            "question": 97
                        }
                    ]
                },
                {
                    "id": "check-wate813-00332",
                    "status": "review",
                    "issue": "context",
                    "prompt": "In the Ion-exchange process for water softening, the exhausted Zeolite bed is regenerated using:",
                    "html": "<p><strong>NaCl identifies the sodium-cycle regenerant, not an executable universal recipe.</strong> </p><p>A 10% statement requires a concentration basis and product/equipment context. </p><p>Regeneration produces a concentrated waste stream; it does not destroy hardness or make salt disposal automatically acceptable.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00332",
                            "set": 33,
                            "question": 90
                        }
                    ]
                },
                {
                    "id": "check-wate813-00337",
                    "status": "review",
                    "issue": "clarification",
                    "prompt": "In a water treatment plant, which process is typically carried out immediately after the 'Coagulation' (rapid mixing) stage?",
                    "html": "<p><strong>The conventional sequence is not mandatory for every water.</strong> </p><p>Direct filtration and other validated trains exist. </p><p>The process-order answers apply to their conventional treatment context.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00337",
                            "set": 33,
                            "question": 95
                        }
                    ]
                },
                {
                    "id": "check-wate813-00342",
                    "status": "review",
                    "issue": "clarification",
                    "prompt": "In a water treatment plant, which process is typically carried out immediately after the coagulation and flocculation stage?",
                    "html": "<p><strong>The conventional sequence is not mandatory for every water.</strong> </p><p>Direct filtration and other validated trains exist. </p><p>The process-order answers apply to their conventional treatment context.</p>",
                    "sources": [
                        {
                            "id": "WATE813-00342",
                            "set": 33,
                            "question": 100
                        }
                    ]
                },
                {
                    "html": "<p><strong>Guidance and national requirements use different contexts.</strong> WHO's conditional residual/contact guidance is not a universal CT guarantee, and its 5 mg/L chlorine health-based value is not an operating target. NDWQS 2079's chlorinated-system residual range and qualified epidemic/pollution exception must be read together. These inspected documents do not certify current legal compliance or subsequent amendment status.</p>",
                    "sources": [],
                    "id": "reference-0",
                    "status": "reference"
                }
            ],
            references: [
                { title: "WHO, Guidelines for drinking-water quality, fourth edition incorporating the first and second addenda, 2022: Chapters 7, 8 and 12; Annex 5 treatment guidance", url: "https://www.who.int/publications/i/item/9789240045064" },
                { title: "WHO, corrigenda to the 2022 drinking-water guidelines, 24 May 2023", url: "https://cdn.who.int/media/docs/default-source/wash-documents/water-safety-and-quality/dwq-guidelines-4/9789240045064_corrigenda_rev-gdwq-2-addenda.pdf?sfvrsn=c95453c4_3" },
                { title: "Nepal Ministry of Water Supply, National Drinking Water Quality Standards 2079 and implementation/monitoring directive 2079; reproduced Gazette 2079/03/02, volume 72, number 16, part 5", url: "https://giwmscdnone.gov.np/media/pdf_upload/khanepani-mapdanda-kitab-final2_saxxma4.pdf" },
                { title: "ILO/WHO, International Chemical Safety Card 0638: Calcium hypochlorite, physical and chemical identity; online card inspected in the verified research", url: "https://chemicalsafety.ilo.org/dyn/icsc/showcard.display?p_card_id=0638&p_lang=en" },
                { title: "NCERT Science, Chapter 2, Acids, Bases and Salts, reprint 2026–27, printed page 30: bleaching-powder composition qualification", url: "https://ncert.nic.in/textbook/pdf/jesc102.pdf" }
            ]
        }
    });
})();