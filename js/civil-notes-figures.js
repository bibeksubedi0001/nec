(function () {
    "use strict";

    const catalogue = {
        ACiE0101: [
            ["bricks-and-tiles", "brick:unit", "Faces of a brick", "A schematic brick identifies the bed, stretcher face, header face and frog; dimensions depend on the specified unit."],
            ["timber-structure", "timber:section", "Timber cross-section", "Pith, heartwood, sapwood and growth rings occupy different parts of the stem; grain runs along its length."],
            ["mechanical-behaviour", "plot:stress", "Strength and deformation", "An illustrative ductile response separates elastic behaviour, yielding and strain hardening; it is not a material test record."],
            ["bituminous-materials", "layers:asphalt", "Binder and aggregate", "Aggregate forms a skeleton while binder coats particles; air voids are a separate volume, not extra binder."]
        ],
        ACiE0102: [
            ["brick-water-absorption", "test:absorption", "Dry and saturated mass", "Water absorption compares the mass gain with the dry specimen mass under the named test method."],
            ["brick-compression", "test:compression", "Compression test load path", "Aligned platens load the prepared specimen; failure load and loaded area are separate measured inputs."],
            ["cement-consistency", "test:vicat", "Vicat penetration", "A guided plunger penetrates paste in a mould; consistency and setting-time procedures use different endpoints."],
            ["sand-bulking", "test:bulking", "Sand bulking comparison", "Equal sand solids occupy different apparent volumes when damp and in the chosen reference condition."]
        ],
        ACiE0103: [
            ["brick-bonds-and-workmanship", "brick:bond", "Bond and joint staggering", "Overlapping units interrupt continuous vertical joints; this schematic is a bond principle, not a complete corner detail."],
            ["damp-proofing-and-wall-movement", "wall:dpc", "Continuous damp-proof course", "The barrier interrupts rising moisture and must remain continuous at adjoining floor and wall details."],
            ["stone-masonry-and-arches", "arch:parts", "Masonry arch components", "Voussoirs transfer compression through the arch ring to the abutments; the intrados and extrados are different surfaces."],
            ["floors-and-stair-counts", "stairs:geometry", "Risers, treads and landings", "A stair profile distinguishes vertical rise from horizontal going; count risers and treads from the actual arrangement."]
        ],
        ACiE0104: [
            ["built-up-sections-and-load-resultants", "section:t", "Composite T-section", "Component areas and their offsets locate the centroid; overlapping area must not be counted twice."],
            ["standard-centroid-offsets", "section:centroids", "Centroid reference axes", "A rectangle and triangle have different centroid offsets; every distance needs an identified reference base."],
            ["rectangular-and-triangular-area-moments", "section:parallel", "Parallel-axis offset", "The centroidal axis and an offset parallel axis give different second moments of area."],
            ["circular-and-part-circular-sections", "section:annulus", "Annulus and diameter axes", "Subtract the concentric inner area from the outer circle; a polar axis is normal to the section."]
        ],
        ACiE0105: [
            ["level-datums-and-observations", "levelling:staff", "Backsight and foresight", "The horizontal line of sight links two staff readings to their ground elevations and the benchmark datum."],
            ["bearings-and-directions", "survey:bearing", "Whole-circle bearing", "The clockwise angle is measured from the selected north reference, not from an unspecified horizontal line."],
            ["traverse-closure", "survey:traverse", "Traverse closure", "Successive eastings and northings should close for a closed traverse; the exaggerated gap illustrates misclosure."],
            ["topographic-contours", "survey:contours", "Contour spacing and slope", "Closely spaced contours indicate a steeper surface for the same vertical interval; contours are elevation lines."]
        ],
        ACiE0106: [
            ["wall-quantity-methods", "wall:plan", "Wall length measurement", "Face-to-face and centre-line lengths differ at wall junctions; use the method appropriate to the complete item."],
            ["earthwork-section-volumes", "channel:end-areas", "Successive earthwork sections", "Two measured cross-sectional areas and their separation support an average-end-area estimate."],
            ["rate-analysis-and-specifications", "flow:rate", "Rate-analysis build-up", "Materials, labour, plant and applicable additions contribute to the rate of one specified unit of work."],
            ["valuation-and-depreciation", "plot:depreciation", "Carrying value over time", "Illustrative straight-line and declining-balance curves allocate cost differently; neither predicts market value."]
        ],
        ACiE0201: [
            ["soil-phase-definitions", "phase:soil", "Three-phase soil diagram", "Air, water and solids occupy volumes, but air mass is usually neglected in elementary phase accounting."],
            ["soil-sieve-analysis-gradation", "plot:grading", "Particle-size distribution", "An illustrative cumulative passing curve locates D10, D30 and D60 on a logarithmic size axis."],
            ["soil-consistency-limit-tests", "flow:atterberg", "Consistency states", "Increasing water content crosses shrinkage, plastic and liquid limits; these are defined test boundaries."],
            ["soil-hydraulic-conductivity-tests", "permeability:constant", "Constant-head permeability", "A maintained head difference drives water through a known soil length and cross-sectional area."]
        ],
        ACiE0202: [
            ["effective-stress-principle", "stress:soil", "Total and effective stress", "In a saturated layer, total vertical stress is partitioned into pore-water pressure and effective stress."],
            ["flow-net-construction-principles", "flownet:annular", "Flow lines and equipotentials", "Concentric flow lines and radial equal-head lines are perpendicular in this ideal isotropic annular domain. The inner and outer arcs are impermeable boundaries, not a site-specific dam model."],
            ["critical-gradient-and-heave", "permeability:upward", "Upward seepage and heave", "Upward seepage force opposes submerged soil weight; loss of effective stress is a mechanical condition."],
            ["compaction-water-content-energy", "plot:compaction", "Compaction curves", "Illustrative curves show a moisture-dependent density peak and the effect of a different compactive effort."]
        ],
        ACiE0203: [
            ["failure-envelope-and-principal-relation", "mohr:failure", "Mohr circle and strength envelope", "The tangent envelope relates normal and shear stress at failure under the stated effective-stress model."],
            ["triaxial-stresses-and-pore-pressure", "test:triaxial", "Triaxial specimen loading", "Cell pressure, axial loading and drainage control are separate test inputs; pore pressure may also be measured."],
            ["direct-shear-and-imposed-plane", "test:shear", "Direct-shear box", "Relative box movement imposes a shear plane while normal load is applied to the specimen."],
            ["infinite-slope-calculations", "slope:forces", "Slope slice force components", "Resolve weight normal and parallel to a chosen plane before comparing resistance with driving action."]
        ],
        ACiE0204: [
            ["boring-logs-and-investigation-report", "layers:borehole", "Interpreted ground profile", "A schematic borehole records layer boundaries, samples and groundwater observations; it does not replace a site investigation."],
            ["spt-procedure-and-raw-count", "test:spt", "SPT penetration increments", "The seating increment is excluded from N; the following two increments contribute their recorded blow counts."],
            ["pressure-diagrams-and-surcharge", "retaining:pressure", "Earth pressure and surcharge", "A triangular soil component and a uniform surcharge component have different resultants and lines of action."],
            ["retaining-wall-stability-checks", "retaining:forces", "Retaining-wall free body", "Weight, earth thrust, water pressure and base reactions belong to one consistent stability model."]
        ],
        ACiE0205: [
            ["spread-footings-and-pressure-area", "foundation:isolated", "Isolated spread footing", "The footing spreads a column load into the supporting ground; plan area alone does not determine structural depth."],
            ["combined-footing-resultants", "foundation:combined", "Combined footing resultant", "A shared footing supports two column loads; locate their resultant before selecting a suitable plan shape."],
            ["mat-raft-options-and-limitations", "foundation:raft", "Raft foundation load sharing", "Several columns act through a common slab or beam-and-slab system; soil support is not automatically uniform."],
            ["piles-groups-and-downdrag", "foundation:piles", "Pile shaft and base transfer", "Axial resistance can mobilize along the shaft and at the base; group effects need separate assessment."]
        ],
        ACiE0206: [
            ["general-local-punching-failure", "foundation:failure", "Bearing failure mechanisms", "General shear, local shear and punching produce different ground deformation patterns; the sketches are qualitative."],
            ["water-table-bearing-corrections", "foundation:water", "Water table near a footing", "Groundwater changes the relevant effective unit weights and stresses; its location must be referenced to the footing."],
            ["consolidation-pore-pressure-and-mass", "test:consolidation", "Consolidation spring analogy", "Drainage dissipates excess pore pressure while the soil skeleton takes more effective stress."],
            ["consolidation-time-and-drainage", "permeability:drainage", "Single and double drainage", "The longest drainage path is the full layer thickness for one-way drainage and half for two-way drainage."]
        ],
        ACiE0301: [
            ["fluid-newtonian-stress-and-temperature", "pipe:viscosity", "Shear between moving plates", "A velocity gradient develops across the fluid gap; Newtonian shear stress is proportional to that gradient."],
            ["fluid-laplace-interface-comparison", "water:droplet", "Curvature and surface tension", "A liquid droplet has one interface; a soap bubble has two, changing the pressure-jump balance."],
            ["fluid-capillary-balance-contact-angle", "water:capillary", "Capillary rise and depression", "The contact angle controls the sign of the capillary level change under the stated equilibrium assumptions."],
            ["fluid-bulk-modulus-compressibility", "test:piston", "Fluid compression", "A pressure increase produces a volume reduction; bulk modulus relates those changes with a consistent sign."]
        ],
        ACiE0302: [
            ["hydrostatic-pressure-diagrams-applications", "water:pressure", "Hydrostatic pressure distribution", "Gauge pressure increases linearly below a free surface for a constant-density static liquid."],
            ["hydrostatic-manometer-elevation-balance", "water:manometer", "Differential manometer", "Pressure changes through each liquid column depend on density and the signed elevation change."],
            ["hydrostatic-buoyancy-and-flotation", "water:buoyancy", "Weight and buoyancy", "Buoyancy acts through the centroid of displaced fluid; body weight acts through the body's centre of gravity."],
            ["hydrostatic-stability-centres-and-limits", "water:metacentre", "Initial floating stability", "For a small heel, the new buoyancy line locates the metacentre; its position relative to G controls the initial restoring sense."]
        ],
        ACiE0303: [
            ["streamlines-pathlines-and-streaklines", "water:streamlines", "A steady velocity field", "Streamlines are tangent to the velocity field; in steady flow the corresponding pathline and streakline geometry can coincide."],
            ["mass-continuity-and-junctions", "pipe:continuity", "Continuity through a contraction", "For steady incompressible flow without branches, the same discharge passes both areas and the narrower section has greater mean speed."],
            ["bernoulli-energy-and-head", "pipe:head", "Elevation, pressure and velocity head", "The energy grade line lies above the hydraulic grade line by the velocity-head term for the chosen convention."],
            ["momentum-jets-and-bends", "pipe:bend", "Momentum change at a bend", "A control volume must account for inlet and outlet momentum, pressure forces, weight and the support reaction."]
        ],
        ACiE0304: [
            ["laminar-profile-and-poiseuille", "pipe:laminar", "Laminar velocity profile", "Fully developed Newtonian laminar flow in a circular pipe has a parabolic axial velocity profile and no slip at the wall."],
            ["grade-lines-and-machine-head", "pipe:head", "Head loss along a pipe", "For a uniform pipe without a machine, friction lowers both grade lines while their separation reflects velocity head."],
            ["series-parallel-and-network-balance", "pipe:parallel", "Parallel pipe branches", "Branches between the same two nodes share a head difference; their discharges add at the junctions."],
            ["water-hammer-pressure-increment", "pipe:hammer", "Valve closure and pressure waves", "A closure disturbance travels between boundaries; compare closure time with the wave round-trip time."]
        ],
        ACiE0305: [
            ["rectangle-and-trapezoid-geometry", "channel:trapezoid", "Trapezoidal channel geometry", "Bottom width, side slope, flow depth, top width and wetted perimeter describe different geometric quantities."],
            ["specific-energy-and-alternate-depths", "plot:energy", "Specific-energy branches", "The theoretical rectangular-channel curve has a minimum at critical depth and two possible depths above that minimum."],
            ["hydraulic-jump-and-sequent-depth", "channel:jump", "Hydraulic jump", "A rapid transition links shallow supercritical flow to deeper subcritical flow and dissipates mechanical energy."],
            ["controls-backwater-and-drawdown", "channel:backwater", "Backwater above a control", "A downstream control can raise a subcritical profile above normal depth; this is a qualitative mild-slope example."]
        ],
        ACiE0306: [
            ["hydrologic-cycle-and-basin-balance", "water:cycle", "Catchment water balance", "Precipitation is partitioned into runoff, evapotranspiration and storage change within a defined boundary."],
            ["hydrograph-shape-and-flow-mass", "plot:hydrograph", "Storm hydrograph", "Rising limb, peak and recession describe discharge through time; area under the curve is a volume."],
            ["infiltration-capacity-and-loss-indices", "plot:rainfall", "Rainfall and effective excess", "A schematic loss rate separates part of the rainfall from the excess used in a runoff model."],
            ["dupuit-wells-slots-and-dewatering", "water:aquifer", "Pumping and drawdown", "Abstraction lowers head near a well; drawdown depends on aquifer properties, boundaries and pumping history."]
        ],
        ACiE0401: [
            ["simple-beam-point-load", "beam:point", "Central point load: shear and moment", "For a simply supported span with a central downward load, shear is piecewise constant and sagging moment is triangular."],
            ["simple-beam-full-span-udl", "beam:udl", "Uniform load: shear and moment", "For a simply supported uniformly loaded span, shear varies linearly and sagging moment is parabolic."],
            ["cantilever-transverse-load-diagrams", "beam:cantilever", "Cantilever end-load diagrams", "The end load gives constant shear magnitude and a moment increasing in magnitude toward the fixed support."],
            ["section-forces-and-cut-conventions", "beam:cut", "Internal section actions", "A cut exposes axial force, shear and moment; the two cut faces carry equal and opposite actions."]
        ],
        ACiE0402: [
            ["plane-stress-and-traction-resolution", "stress:element", "Plane-stress components", "Normal and complementary shear stresses act on paired faces; signs must be defined before transforming the plane."],
            ["principal-stresses-and-planes", "mohr:principal", "Principal stresses on Mohr's circle", "Intersections with the normal-stress axis have zero shear; the circle radius is the maximum in-plane shear magnitude."],
            ["plateau-hardening-necking-and-rupture", "plot:stress", "Engineering stress-strain response", "This illustrative ductile curve distinguishes yield, strain hardening, ultimate engineering stress and necking."],
            ["circular-shaft-torsional-stress", "stress:torsion", "Torsion of a circular shaft", "Under elastic circular-shaft torsion, shear stress varies linearly with radius and is greatest at the outer surface."]
        ],
        ACiE0403: [
            ["flexure-plane-sections-and-derivation", "rcc:elastic", "Elastic bending distribution", "Plane sections remain plane under the model: strain and elastic normal stress vary linearly across depth."],
            ["flexure-cantilever-end-point-load", "beam:deflection", "Deflected cantilever", "An end load produces both tip rotation and tip displacement; the fixed end restrains translation and rotation."],
            ["column-end-restraints-and-effective-length", "column:ends", "Ideal Euler end conditions", "Pinned-pinned, fixed-fixed, fixed-free and fixed-pinned cases have different ideal effective lengths."],
            ["column-eccentric-compression-and-circular-core", "section:kern", "Eccentric load and the kern", "A resultant outside the no-tension kern would produce tensile contact in the elementary linear pressure model."]
        ],
        ACiE0404: [
            ["support-constraints-and-geometric-stability", "beam:supports", "Support restraints", "Roller, pin and fixed supports restrain different planar degrees of freedom; restraint count alone does not ensure stability."],
            ["truss-joints-sections-and-force-polygons", "truss:triangle", "Pin-jointed truss load path", "Ideal truss members carry axial force when loads act at joints; resolve equilibrium at joints or through a section."],
            ["dummy-loads-and-unit-load-deflection", "beam:unit", "Actual and unit-load systems", "A unit action is applied at the requested displacement coordinate in the same compatible structural system."],
            ["portal-frame-deflection-workflow", "frame:unit", "Frame contributions to virtual work", "Both columns and the beam can contribute to displacement; include each member using consistent local coordinates."]
        ],
        ACiE0405: [
            ["simple-span-reaction-and-moment-ordinates", "beam:ild-reaction", "Reaction influence line", "A unit load moving across a simple span gives a linear left-support reaction ordinate."],
            ["load-superposition-and-full-span-udl", "beam:ild-moment", "Section-moment influence line", "The triangular ordinate peaks when the moving unit load is at the section whose moment is being measured."],
            ["section-shear-and-cantilever-influence-lines", "beam:ild-shear", "Section-shear influence line", "The unit jump at the section reflects the moving load crossing the cut; retain the chosen shear sign convention."],
            ["arch-geometry-and-hinge-classification", "arch:hinges", "Two and three hinges", "A crown hinge adds a moment release; a two-hinged arch generally also needs a compatibility relation."]
        ],
        ACiE0406: [
            ["flexibility-compatibility-and-unit-actions", "beam:redundant", "Release and restore a redundant", "Releasing the prop creates a primary cantilever; the redundant reaction restores the required vertical compatibility."],
            ["moment-distribution-and-joint-balance", "frame:rotation", "Joint moment balancing", "Joint imbalance is distributed according to member stiffness, followed by the appropriate carry-over for the end condition."],
            ["first-yield-plastic-stress-and-neutral-axis", "rcc:plastic", "Elastic and plastic stress blocks", "First yield and a fully plastic idealization use different through-depth stress distributions."],
            ["fixed-fixed-central-load-collapse", "beam:collapse", "Fixed-span collapse mechanism", "The ideal central-load mechanism forms hinges at both fixed ends and midspan; work rotations must be compatible."]
        ],
        ACiE0501: [
            ["physical-actions-load-paths-and-units", "frame:loads", "Gravity and lateral load paths", "Floor and roof actions reach foundations through structural members; lateral and vertical paths must both be continuous."],
            ["occupancy-imposed-loads-and-pattern-loading", "rcc:tributary", "Tributary area", "A supported floor strip contributes distributed load to its beam; the actual support arrangement controls the allocation."],
            ["cladding-net-pressure-force-and-signs", "wall:wind", "External and internal wind pressure", "The net action on cladding combines pressures on both faces using a declared sign convention."],
            ["earthquake-inertia-site-response-and-code-parts", "frame:seismic", "Mass, acceleration and inertia", "Equivalent inertia opposes the specified acceleration; this schematic is a load-path illustration, not a code spectrum."]
        ],
        ACiE0502: [
            ["concrete-as-a-material-system", "layers:concrete", "Concrete constituents", "Cement paste surrounds fine and coarse aggregate; entrained or entrapped air is a distinct constituent of the volume."],
            ["concrete-fresh-consistency-tests", "test:slump", "Slump test observations", "True slump, shear slump and collapse are different observations; interpretation depends on the specified test procedure."],
            ["concrete-aggregate-moisture-reference-states", "phase:moisture", "Aggregate moisture states", "Dry, air-dry, saturated-surface-dry and wet conditions distinguish pore water from free surface moisture."],
            ["concrete-curing-and-strength-age", "plot:strength-age", "Strength development and curing", "The curves illustrate why curing history matters; they are not guaranteed strength percentages at any age."]
        ],
        ACiE0503: [
            ["rcc-is-stress-block-and-singly-reinforced-moment", "rcc:beam", "RC beam internal couple", "Compression in concrete and tension in steel form the resisting couple; the lever arm is measured between their resultants."],
            ["rcc-one-way-two-way-supports-and-boundary", "rcc:slab", "One-way and two-way action", "The sketch contrasts load paths for two-edge and four-edge support; aspect ratio alone is not the complete boundary condition."],
            ["rcc-shear-transfer-and-inclined-cracks", "rcc:shear", "Shear cracking and links", "Transverse reinforcement crosses potential inclined cracks; its force path must be anchored into the member."],
            ["rcc-development-length-from-bond-equilibrium", "rcc:bond", "Development by bond", "Distributed bond transfers longitudinal bar force into surrounding concrete along an anchored length."]
        ],
        ACiE0504: [
            ["lateral-tie-pitch-and-bar-restraint", "column:ties", "Tied column cage", "Closed ties restrain longitudinal bars and confine the core; the sketch does not prescribe a code spacing."],
            ["footing-critical-sections-and-thickness", "foundation:punching", "Footing critical sections", "Bending, one-way shear and punching are checked at their specified sections, not at a single common perimeter."],
            ["unequal-column-loads-and-footing-plan-shape", "foundation:combined", "Unequal loads on a shared base", "Align the footing area's centroid with the intended resultant when using a uniform-pressure idealization."],
            ["tendon-profile-curvature-and-camber", "beam:prestress", "Curved prestressing tendon", "Tendon curvature introduces balancing action along the beam; profile, force and end anchorage determine the effect."]
        ],
        ACiE0505: [
            ["standard-sections-and-axis-efficiency", "steel:sections", "Common steel sections", "I, channel and angle sections place material differently relative to their principal axes."],
            ["staggered-holes-and-critical-net-paths", "steel:bolts", "Straight and staggered net paths", "Compare credible rupture paths through a bolted plate rather than automatically choosing the shortest-looking line."],
            ["fillet-leg-size-effective-throat-and-profile", "steel:weld", "Fillet leg and throat", "For the ideal equal-leg triangular profile, the throat is perpendicular to the face and shorter than the leg."],
            ["built-up-columns-lacing-and-battens", "steel:lacing", "Built-up laced column", "Lacing transfers shear between separated components so the assembly can act together; connection design remains essential."]
        ],
        ACiE0506: [
            ["timber-masonry-grain-and-orthotropy", "timber:grain", "Timber grain directions", "Parallel-to-grain and transverse actions mobilize different properties; material direction is part of the design input."],
            ["timber-masonry-beam-checks-and-assumed-example", "beam:timber", "Timber beam checks", "Bending, shear, bearing and deflection are separate checks for the actual support and loading arrangement."],
            ["timber-masonry-failure-mechanisms", "wall:failure", "Masonry failure modes", "Sliding along joints, diagonal cracking and local crushing are distinct mechanisms, not one universal brick-strength limit."],
            ["timber-masonry-earthquake-detailing-and-nbc-scope", "wall:bands", "Continuity of wall bands", "Continuous bands and connected corners support a coherent load path; this schematic is not a substitute for applicable NBC details."]
        ],
        ACiE0601: [
            ["sources-aquifer-storage-transmission-and-yield", "water:aquifer", "Aquifer, recharge and abstraction", "Storage and transmission depend on the formation and boundaries; a clear well sample does not prove safe water."],
            ["sources-suspended-colloidal-and-dissolved-impurities", "phase:impurities", "Three impurity forms", "Suspended particles, stable colloids and dissolved species need different treatment barriers; sizes here are schematic."],
            ["sources-hardness-caco3-equivalence-example", "flow:hardness", "A common hardness basis", "Convert calcium and magnesium concentrations to the same CaCO3-equivalent basis before adding them."],
            ["sources-per-capita-demand-and-design-flows", "plot:demand", "Demand varies through the day", "A schematic demand pattern separates an average from short peaks; a design factor needs a stated time basis."]
        ],
        ACiE0602: [
            ["distribution-intake-types-and-construction", "water:intake", "Protected river intake", "A screened opening, approach conditions and maintainable access work together; flood and low-water levels need separate checks."],
            ["distribution-branch-grid-ring-and-radial-layouts", "pipe:network", "Branch versus looped network", "A loop offers an alternative route, but actual circulation and pressure still depend on hydraulic conditions and valve status."],
            ["distribution-break-pressure-tanks-and-hgl", "reservoir:bpt", "Atmospheric pressure break", "An open tank resets the downstream supply head to its water-surface elevation; it is not complete transient protection."],
            ["distribution-balancing-worked-table", "plot:balance", "Cumulative balancing storage", "The six-period example ranges from +24 to -16 cubic metres of imbalance, requiring a 40 cubic metre usable balancing band."]
        ],
        ACiE0603: [
            ["treatment-train-and-barriers", "flow:treatment", "Conventional surface-water barriers", "Coagulation, flocculation, separation and disinfection have different functions; actual raw-water risks determine the selected train."],
            ["treatment-ideal-overflow-derivation", "channel:settling", "Particle settling trajectory", "Horizontal travel time competes with vertical fall time in the ideal discrete-settling model."],
            ["treatment-slow-sand-operation", "layers:filter", "Slow sand filter section", "Supernatant water lies above the biological surface and fine sand, with graded support and collection below."],
            ["treatment-chlorine-demand-and-breakpoint", "plot:chlorine", "Breakpoint chlorination concept", "Demand and combined residual precede the rise of free residual; the qualitative curve is not a dosing prescription."]
        ],
        ACiE0604: [
            ["sewer-separate-combined-and-partial-systems", "pipe:separate", "Separate and combined systems", "Separate networks keep intended sanitary and storm flows distinct; a combined network conveys both in one system."],
            ["sewer-partial-depth-angle-and-area", "section:sewer", "Partly full circular sewer", "The wetted angle, water depth and perimeter are linked by circular geometry; the air space is not part of the wetted perimeter."],
            ["sewer-drop-manhole-energy", "sewer:drop", "Drop connection", "A higher incoming invert needs a designed connection to the lower channel; access and energy effects require separate consideration."],
            ["sewer-partial-flow-maxima", "plot:sewer", "Partial-flow capacity", "For constant Manning roughness and slope, the maximum discharge occurs before the circular section is completely full."]
        ],
        ACiE0605: [
            ["wastewater-bod-dilution-and-seed", "test:dilution", "BOD sample and dilution", "The wastewater volume fraction and bottle oxygen depletion belong to different measurement bases; seed demand is corrected when applicable."],
            ["wastewater-activated-sludge-cycle", "sludge:activated", "Activated-sludge circulation", "RAS returns biomass to the reactor while WAS removes solids from the system; final effluent follows a separate path."],
            ["wastewater-sag-worked-example", "plot:oxygen", "Oxygen sag and recovery", "The illustrative constant-coefficient model reaches minimum DO where deoxygenation and reaeration balance."],
            ["wastewater-septic-liquid-and-storage", "sewer:septic", "Septic liquid and solids space", "Scum, working liquid and accumulated sludge occupy different zones; the effluent still needs an appropriate downstream treatment or dispersal route."]
        ],
        ACiE0606: [
            ["environment-bes-iee-eia-categories", "branch:assessment", "Assessment-category selection", "Screening selects the applicable BES, IEE or EIA route; they are not three compulsory serial studies."],
            ["environment-hearing-and-process", "flow:assessment", "Assessment and participation", "Scoping and ToR precede the study, while consultation and the public hearing contribute during report preparation."],
            ["disaster-exposure-vulnerability-capacity", "branch:risk", "Conditions contributing to disaster risk", "Hazard, exposure, vulnerability and capacity inform risk; the drawing is not a universal multiplication formula."],
            ["disaster-management-cycle", "flow:disaster", "Linked disaster-management actions", "Mitigation, preparedness, response and recovery interact; they are not isolated stages that stop when the next begins."]
        ],
        ACiE0701: [
            ["demand-available-water-and-depletion", "phase:root-zone", "Root-zone water storage", "Field capacity and permanent wilting point bound an elementary available-water store; allowable depletion is crop- and condition-dependent."],
            ["demand-duty-delta-dimensional-derivation", "flow:duty", "Flow, duration, volume and area", "A discharge acting for a period gives a volume; spreading that volume over the served area gives an equivalent depth."],
            ["demand-tank-to-field-efficiency-example", "flow:irrigation-loss", "Delivery and storage boundaries", "Source release, field delivery and root-zone storage have different losses and efficiency denominators."],
            ["demand-irrigation-depth-and-frequency", "plot:depletion", "Irrigation timing by depletion", "A schematic depletion trace shows irrigation restoring the root-zone store; the trigger must be chosen for the actual crop and soil."]
        ],
        ACiE0702: [
            ["canal-trapezoid-depth-radius-and-area", "channel:trapezoid", "Canal section measurements", "Flow depth, top width and wetted perimeter determine different hydraulic section properties."],
            ["canal-kennedy-syllabus-extension", "plot:kennedy", "Depth and critical-velocity concept", "The qualitative Kennedy relation links depth to a permissible sediment-carrying velocity under an empirical convention."],
            ["canal-tractive-stress-and-force-balance", "channel:shear", "Boundary tractive action", "The downslope component of water weight is balanced by boundary shear in steady uniform flow."],
            ["canal-lining-benefits-and-residual-risks", "channel:lining", "Lining and seepage paths", "A sound lining can reduce seepage; joints, uplift and the condition of the support remain part of the design."]
        ],
        ACiE0703: [
            ["head-regulator-and-headworks-layout", "river:headworks", "Diversion headworks in plan", "The regulator takes canal flow beside the divide wall while the undersluice provides a separate sediment-management route."],
            ["sediment-exclusion-and-extraction", "river:sediment", "Exclusion and extraction", "An excluder acts before canal entry, whereas an extractor removes sediment after the water has entered the canal."],
            ["floor-thickness-and-pressure-datum", "dam:uplift", "Uplift beneath an impervious floor", "Compare water pressure above and below the floor with its weight; every head needs the same elevation datum."],
            ["hydraulic-jump-depth-and-energy-loss", "channel:jump", "Downstream energy dissipation", "A stilling arrangement must match incoming supercritical flow and the available tailwater, not just a chosen basin length."]
        ],
        ACiE0704: [
            ["river-training-meanders-wavelength-and-sinuosity", "river:meander", "Meander erosion and deposition", "Outer-bank attack and inner-bank deposition are typical tendencies; real river response depends on the sediment and flow regime."],
            ["river-training-spur-orientation-and-classification", "river:spurs", "Spur orientation", "Upstream-pointing, normal and downstream-pointing spurs are distinguished relative to the actual flow direction."],
            ["river-training-guide-bank-alignment-and-heads", "river:guidebanks", "Guide banks at a crossing", "Guide banks align flood flow toward the opening; their heads, shanks, toes and approach conditions need coordinated protection."],
            ["river-training-armour-filters-and-launching-mechanism", "river:apron", "Launching apron concept", "Loose protection can launch into developing scour; adequate volume, stone stability and filtering remain essential."]
        ],
        ACiE0705: [
            ["irrigation-regulator-network-locations", "river:regulators", "Cross and head regulators", "A cross regulator controls the parent canal while a head regulator controls entry to an offtake."],
            ["irrigation-cross-drainage-four-arrangements", "channel:crossing", "Free-flow cross-drainage arrangements", "An aqueduct carries the canal above drainage; a superpassage carries drainage above the canal, subject to clearance checks."],
            ["irrigation-free-and-submerged-pipe-outlets", "pipe:outlets", "Free versus submerged outlet", "A free outlet is referenced to its discharge condition; a submerged outlet depends on both upstream and downstream heads."],
            ["irrigation-falls-and-ground-slope", "channel:fall", "Canal fall and downstream cistern", "A local drop reconciles canal grade with terrain and needs an adequate energy-dissipation and protection arrangement."]
        ],
        ACiE0706: [
            ["drainage-waterlogging-aeration-and-duration", "phase:waterlogging", "Waterlogging in the root zone", "A high water table restricts aerated rooting space; depth, duration and crop sensitivity all matter."],
            ["drainage-layout-selection", "pipe:drain-network", "Collector and lateral drains", "Field laterals lead to a collector and a functioning outfall; the drawn network is an illustrative layout."],
            ["drainage-tiles-depth-and-soil-connection", "channel:subdrains", "Drainage between parallel laterals", "A curved groundwater surface develops between drains; outlet level and hydraulic connection control its relief."],
            ["drainage-hooghoudt-spacing-and-conductivity", "channel:hooghoudt", "Drain-spacing geometry", "Drain depth, midpoint head and the lower boundary define different lengths in a drainage model."]
        ],
        ACiE0801: [
            ["planning-potential-hierarchy", "controls:potential", "Potential narrows with constraints", "Gross, technical and economic assessments impose different exclusions; no numerical Nepal inventory is implied by the areas."],
            ["planning-reconnaissance-to-feasibility", "flow:feasibility", "Progressive project studies", "Reconnaissance and feasibility progressively investigate hydrology, geology, layout, costs and risks."],
            ["planning-water-head-and-terrain", "water:hydropower", "Head and usable flow", "Elevation difference becomes useful only with an available flow, a feasible waterway and acceptable losses."],
            ["planning-licence-ppa-and-financial-closure", "branch:hydro-approvals", "Parallel development workstreams", "Technical studies, licensing, energy purchase and finance interact; none alone constitutes complete permission to construct."]
        ],
        ACiE0802: [
            ["power-head-reference-levels", "water:hydropower", "Gross and net head", "Gross level difference is reduced by the relevant hydraulic losses before the machine's available head is established."],
            ["power-duration-curves-and-usable-flow", "plot:duration", "Flow-duration curve", "Sorting flow by exceedance preserves occurrence information but removes the original chronological sequence."],
            ["power-mass-curve-storage-example", "plot:mass", "Mass curve and supply line", "Cumulative inflow and a chosen cumulative release reveal storage deficits that a duration curve cannot locate in time."],
            ["power-peaking-schedule-and-revenue", "plot:load", "Daily load and peaking", "An illustrative load pattern distinguishes base service from a higher-demand interval; it is not a forecast or tariff."]
        ],
        ACiE0803: [
            ["storage-dam-classifications", "dam:types", "Gravity and embankment sections", "Different dam types resist actions through different material and structural mechanisms; selection needs the site."],
            ["storage-gravity-loads-and-signed-moments", "dam:forces", "Gravity-dam free body", "Weight, hydrostatic thrust, uplift and the foundation reaction must be resolved with consistent signs and locations."],
            ["storage-embankment-zones-and-filters", "dam:embankment", "Zoned embankment and drainage", "The core limits seepage while filters and drains control migration and pressure; they are not interchangeable components."],
            ["storage-stilling-basin-devices-and-scour", "dam:spillway", "Spillway and dissipation", "A spillway routes floodwater safely past the dam and connects to an engineered downstream energy-dissipation system."]
        ],
        ACiE0804: [
            ["ror-water-route-and-headworks", "water:ror", "Run-of-river water route", "Intake, sediment handling, conveyance and the return to the river form one route with several operating constraints."],
            ["tyrolean-bottom-intake-paths", "river:rack", "Bottom-intake flow separation", "Water passes through the rack to the collector while coarse material can continue over it; performance depends on design and operation."],
            ["ideal-trajectory-capture", "channel:settling", "Desander capture trajectory", "The ideal travel-time and fall-time comparison is distinct from a vertically mixed concentration model."],
            ["flushing-arrangements-and-bieri", "channel:flushing", "Sediment flushing route", "A flushing arrangement needs available head, sediment-transport capacity and an acceptable outfall, not only a gate."]
        ],
        ACiE0805: [
            ["waterway-functions-and-regimes", "water:conveyance", "Waterway and surge connection", "The tunnel, surge connection and penstock serve different hydraulic roles and may have different pressure regimes."],
            ["tunnel-section-and-ground-load", "section:tunnels", "Tunnel section alternatives", "Circular and horseshoe forms respond differently to internal pressure, ground conditions and construction requirements."],
            ["penstock-membrane-stresses", "pipe:hoop", "Pressure-vessel membrane actions", "Circumferential and closed-end longitudinal actions produce different membrane stresses in the thin-wall idealization."],
            ["water-hammer-and-wave-travel", "pipe:hammer", "Pressure-wave travel", "Elastic pressure disturbances travel along the waterway; rapid closure is judged relative to the system's travel time."]
        ],
        ACiE0806: [
            ["machines-pelton-preliminary-sequence", "turbine:pelton", "Pelton impulse runner", "A nozzle converts head to jet velocity before the jet transfers momentum to the bucket."],
            ["machines-francis-design-extension", "turbine:francis", "Francis reaction flow path", "Flow enters the runner through a controlled distributor and turns toward an axial discharge into the draft tube."],
            ["machines-flow-families", "turbine:kaplan", "Axial-flow reaction runner", "An axial runner and its guide apparatus have distinct functions; blade adjustment depends on the machine type."],
            ["powerhouse-layout-extension", "powerhouse:section", "Powerhouse arrangement", "Generator, turbine, draft tube and handling equipment constrain civil levels and maintenance space; dimensions are schematic."]
        ],
        ACiE0901: [
            ["planning-map-study-and-route-narrowing", "survey:routes", "Alignment alternatives", "Illustrative routes trade length against terrain, crossings and receptors; the shortest line is not automatically preferable."],
            ["planning-nurs-urban-hierarchy", "branch:roads", "Urban road functions", "Arterial, sub-arterial, collector and local functions are differentiated; their role is not simply a pavement-width label."],
            ["planning-survey-sequence", "flow:survey", "Progressive highway survey", "Map study, reconnaissance, preliminary survey and detailed setting-out develop increasingly specific evidence."],
            ["planning-profiles-and-local-normal-sections", "road:profile-section", "Plan, profile and cross-section", "Plan alignment, longitudinal levels and transverse geometry describe different views of the same road."]
        ],
        ACiE0902: [
            ["camber-crown-and-drainage", "road:camber", "Crown and crossfall", "Crossfall drains each side from its controlling high point; crown rise depends on the width drained on that side."],
            ["banked-curve-equilibrium", "road:banking", "Banked-curve force balance", "Superelevation and lateral tyre force contribute to the required turning action; directions depend on the stated case."],
            ["vertical-alignment-and-signed-parabola", "road:vertical", "Parabolic vertical curve", "BVC, PVI and EVC are different locations; the curve joins the entering and leaving grades smoothly."],
            ["stopping-distance-energy-balance", "road:stopping", "Stopping-distance components", "Perception-reaction distance precedes braking distance; speed, friction and signed grade determine the calculation."]
        ],
        ACiE0903: [
            ["materials-shape-and-interlock", "section:aggregate", "Aggregate shape descriptors", "Cubical, flaky and elongated particles are geometric descriptions; acceptance is assessed on the specified test fraction."],
            ["materials-la-apparatus-and-loss", "test:la", "Los Angeles abrasion drum", "Tumbling aggregate and the prescribed charge cause degradation; the schematic does not prescribe a grading or revolution count."],
            ["materials-marshall-design-and-content", "test:marshall", "Marshall specimen loading", "Stability is a load and flow is a deformation measured under a specified conditioning and test method."],
            ["materials-asphalt-void-volumes", "phase:asphalt", "Asphalt volume accounting", "VMA includes air and effective binder; absorbed binder is accounted for inside the aggregate envelope."]
        ],
        ACiE0904: [
            ["traffic-greenshields-and-waves", "plot:traffic", "Flow-density relationship", "The theoretical Greenshields model has a maximum flow at an intermediate density; field calibration is required."],
            ["traffic-sign-families-and-information-colours", "traffic:signs", "Sign shapes convey purpose", "Illustrative regulatory, warning and information families show shape distinctions without replacing the Nepal sign manual."],
            ["traffic-signals-and-effective-time", "traffic:signals", "Two-stage signal operation", "Non-conflicting movement groups receive service at different stages; intergreen and pedestrian needs require explicit design."],
            ["traffic-parking-cohort-example", "plot:parking", "Parking accumulation through time", "Area under an accumulation curve gives parking load; occupancy and turnover use different denominators."]
        ],
        ACiE0905: [
            ["pavement-types-and-load-paths", "pavement:types", "Flexible and rigid load paths", "Layered load distribution and slab bending are different structural mechanisms; both need suitable foundation support."],
            ["tyre-contact-wheel-geometry-and-eswl", "pavement:axle", "Axle, wheel and contact area", "An axle load is shared between contact patches; it must not be assigned silently to a single tyre."],
            ["dowels-and-tie-bars", "pavement:joints", "Dowel and tie-bar functions", "Dowels transfer load across a transverse joint while permitting intended movement; ties restrain separation at a longitudinal joint."],
            ["thermal-gradient-and-bradbury-warping", "pavement:curling", "Temperature-gradient curling", "Different top and bottom strains tend to curve a slab; restraint and support determine the resulting stresses."]
        ],
        ACiE0906: [
            ["subgrade-lifts-and-field-quality-control", "pavement:roller", "Controlled lifts and compaction", "Moisture conditioning, lift thickness and roller action work together; a smooth surface does not prove full-depth density."],
            ["penetration-macadam-construction", "flow:penetration", "Penetration-macadam sequence", "Coarse aggregate is spread and rolled before binder application and the specified key aggregate and sealing operations."],
            ["asphalt-job-mix-and-process-control", "flow:asphalt", "Asphalt production and placement", "Material proportioning, mixing, transport, laying and compaction must stay coordinated within the approved process."],
            ["crack-patterns-and-asphalt-fatigue", "pavement:distress", "Different pavement distress patterns", "Cracking, rutting and surface loss can have different causes; the pattern guides investigation rather than proving a diagnosis."]
        ],
        AALL1001: [
            ["drawing-orthographic-coordinate-views", "drawing:orthographic", "Three orthographic views", "Front, top and side views recover different coordinate pairs of the same illustrative block."],
            ["drawing-first-and-third-angle-placement", "drawing:placement", "First-angle versus third-angle layout", "The same top and side views occupy different positions around the front view under the two conventions."],
            ["drawing-isometric-axes-and-foreshortening", "drawing:isometric", "Isometric axes", "The three projected principal axes are equally inclined, with 120-degree angles between their positive directions."],
            ["drawing-hollow-sleeve-sectional-reading", "drawing:section", "Section through a hollow sleeve", "Hatching identifies cut material; the bore remains an unhatched void in the sectional views."]
        ],
        AALL1002: [
            ["econ-project-cashflow-perspective", "cashflow:timeline", "Dated cash flows", "The illustrated project has an initial outflow and later receipts; discount each amount from its own date."],
            ["econ-irr-solution-and-marr-check", "plot:npv", "NPV profile and IRR", "For the conventional example, NPV decreases with discount rate and crosses zero at its IRR."],
            ["econ-benefit-cost-incremental-counterexample", "cashflow:incremental", "Incremental alternative comparison", "Compare the added benefits and added cost of the larger option; the highest individual ratio need not maximize net benefit."],
            ["econ-straight-line-and-book-value", "plot:depreciation", "Depreciation patterns", "Illustrative straight-line and declining-balance paths show cost allocation over time, not a forecast of sale proceeds."]
        ],
        AALL1003: [
            ["schedule-eight-activity-cpm", "schedule:cpm", "Eight-activity dependency network", "The notes' hypothetical network has two 13-day critical paths through B and C; the equipment branch has float."],
            ["schedule-bar-chart-logic", "schedule:gantt", "Early-start bar chart", "Bars show the hypothetical A-H timing, while dependencies are defined by the accompanying network."],
            ["schedule-crew-cases", "schedule:resources", "Resource demand and smoothing", "The hypothetical four-worker smoothing case moves E and F within float while retaining the 13-day finish."],
            ["schedule-earned-value", "plot:earned", "Planned, earned and actual cost", "Illustrative cumulative curves distinguish planned value, earned value and actual cost at a common status date."]
        ],
        AALL1004: [
            ["management-qualitative-quantitative-risk", "risk:matrix", "Qualitative risk matrix", "Likelihood and consequence categories prioritize attention; colours and ordinal scores are not measured probabilities or money."],
            ["management-risk-responses", "branch:responses", "Risk-response choices", "Avoidance, mitigation, transfer and acceptance have different effects; residual risk still needs an accountable owner."],
            ["management-tender-law-process", "flow:procurement", "Procurement decision sequence", "Requirements, solicitation, evaluation and contract administration are distinct tasks governed by the applicable method and edition."],
            ["management-cash-flow-liquidity", "plot:cash-balance", "Funding gap before completion", "The notes' hypothetical cash balance becomes negative before ending positive; interim liquidity must still be financed."]
        ],
        AALL1005: [
            ["professional-hierarchy-of-controls", "controls:safety", "Hierarchy of hazard controls", "Elimination and substitution address the source; engineering, administrative and personal protection have different remaining dependencies."],
            ["professional-ethical-reasoning", "flow:ethics", "Evidence-led ethical response", "Identify the concern, check competence and evidence, communicate through the proper channel and verify closure."],
            ["professional-nea-role-and-development", "branch:institutions", "Association and regulator", "NEA's professional support role is distinct from NEC's statutory recognition, registration and conduct functions."],
            ["professional-certification-evidence-qa", "flow:quality", "Traceable certification", "Observation, testing, review and authorized certification are linked records; a signature cannot replace missing evidence."]
        ],
        AALL1006: [
            ["nec-hierarchy-and-commencement", "controls:law", "Hierarchy of regulatory instruments", "The Act, valid Regulations and implementing notices have different authority; upload date is not commencement."],
            ["nec-registration-path-and-examinations", "flow:registration", "Ordinary registration pathway", "Application, scrutiny, examination, registration and certification are separate stages under the inspected legal route."],
            ["nec-recognition-versus-registration", "branch:recognition", "Qualification versus individual status", "Recognition of a programme or qualification does not by itself register an individual engineer."],
            ["nec-inquiry-and-opportunity-to-be-heard", "flow:inquiry", "Inquiry and reasoned decision", "A complaint leads to evidence and an opportunity to respond before a decision; the schematic is not individual legal advice."]
        ]
    };

    const topics = Object.freeze(Object.fromEntries(Object.entries(catalogue).map(([code, rows]) => [code, Object.freeze(rows.map(([block, scene, title, caption], index) => Object.freeze({
        id: code.toLowerCase() + "-" + (index + 1), code, block, scene, title, caption,
        src: "assets/civil-notes/" + code.toLowerCase() + "-" + (index + 1) + ".svg", width: 720, height: 420
    })))])));
    window.CIVIL_NOTE_FIGURES = Object.freeze({ topics });
})();