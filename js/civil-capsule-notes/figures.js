(function () {
    "use strict";

    const figures = {
     "ACiE0101": [
      {
       "id": "c-acie0101-1",
       "block": "cement-raw-meal-and-clinker-phases",
       "src": "assets/civil-capsule-notes/acie0101-1.svg",
       "width": 720,
       "height": 420,
       "title": "From raw meal to Portland cement",
       "caption": "Limestone and clay or shale form the raw meal; kiln burning produces clinker, and gypsum joins only when the clinker is ground."
      },
      {
       "id": "c-acie0101-2",
       "block": "plaster-of-paris-and-lime-mortars",
       "src": "assets/civil-capsule-notes/acie0101-2.svg",
       "width": 720,
       "height": 420,
       "title": "Gypsum and plaster of Paris",
       "caption": "Controlled heating removes part of the crystal water to give the hemihydrate; mixed with water it rehydrates to gypsum and sets."
      },
      {
       "id": "c-acie0101-3",
       "block": "rock-origin-and-composition",
       "src": "assets/civil-capsule-notes/acie0101-3.svg",
       "width": 720,
       "height": 420,
       "title": "Two independent ways to classify stone",
       "caption": "Origin (rows) and chemical composition (columns) are separate bases: quartzite is metamorphic by origin and siliceous by composition."
      },
      {
       "id": "c-acie0101-4",
       "block": "stone-hardness-and-self-weight",
       "src": "assets/civil-capsule-notes/acie0101-4.svg",
       "width": 720,
       "height": 420,
       "title": "Self-weight in a gravity retaining wall",
       "caption": "A denser sound stone increases the wall weight W, raising the resisting moment about the toe and the normal force behind base friction."
      },
      {
       "id": "c-acie0101-5",
       "block": "brick-earth-and-firing-defects",
       "src": "assets/civil-capsule-notes/acie0101-5.svg",
       "width": 720,
       "height": 420,
       "title": "Balancing clay and sand in brick earth",
       "caption": "Clay-rich earth shrinks and warps on drying, a controlled addition of clean sand gives a stable skeleton, and excess sand weakens cohesion."
      },
      {
       "id": "c-acie0101-6",
       "block": "brick-quality-size-and-terracotta",
       "src": "assets/civil-notes/acie0101-1.svg",
       "width": 720,
       "height": 420,
       "title": "Faces of a brick",
       "caption": "A schematic brick identifies the bed, stretcher face, header face and frog; dimensions depend on the specified unit."
      },
      {
       "id": "c-acie0101-7",
       "block": "timber-seasoning",
       "src": "assets/civil-capsule-notes/acie0101-8.svg",
       "width": 720,
       "height": 420,
       "title": "Seasoning toward equilibrium moisture",
       "caption": "Drying brings moisture content down toward the service equilibrium; rapid, poorly controlled drying creates steep gradients that can open checks."
      },
      {
       "id": "c-acie0101-8",
       "block": "timber-seasoning",
       "src": "assets/civil-notes/acie0101-2.svg",
       "width": 720,
       "height": 420,
       "title": "Timber cross-section",
       "caption": "Pith, heartwood, sapwood and growth rings occupy different parts of the stem; grain runs along its length."
      },
      {
       "id": "c-acie0101-9",
       "block": "ore-dressing-concentration-metallurgy",
       "src": "assets/civil-capsule-notes/acie0101-6.svg",
       "width": 720,
       "height": 420,
       "title": "From ore to metal",
       "caption": "Dressing and concentration prepare the ore, extraction reduces the mineral to metal, and refining removes impurities from the extracted metal."
      },
      {
       "id": "c-acie0101-10",
       "block": "carbon-and-chromium-in-steel",
       "src": "assets/civil-capsule-notes/acie0101-7.svg",
       "width": 720,
       "height": 420,
       "title": "Carbon content trends in plain-carbon steel",
       "caption": "For comparable processing, more carbon raises hardness and strength but lowers ductility and weldability, while the elastic modulus hardly changes."
      },
      {
       "id": "c-acie0101-11",
       "block": "ductility-malleability-and-creep",
       "src": "assets/civil-notes/acie0101-3.svg",
       "width": 720,
       "height": 420,
       "title": "Strength and deformation",
       "caption": "An illustrative ductile response separates elastic behaviour, yielding and strain hardening; it is not a material test record."
      },
      {
       "id": "c-acie0101-12",
       "block": "paint-constituents-and-bituminous-fillers",
       "src": "assets/civil-notes/acie0101-4.svg",
       "width": 720,
       "height": 420,
       "title": "Binder and aggregate",
       "caption": "Aggregate forms a skeleton while binder coats particles; air voids are a separate volume, not extra binder."
      }
     ],
     "ACiE0102": [
      {
       "id": "c-acie0102-1",
       "block": "vicat-consistency-and-setting-times",
       "src": "assets/civil-notes/acie0102-3.svg",
       "width": 720,
       "height": 420,
       "title": "Vicat penetration",
       "caption": "A guided plunger penetrates paste in a mould; consistency and setting-time procedures use different endpoints."
      },
      {
       "id": "c-acie0102-2",
       "block": "soundness-and-briquette-tension",
       "src": "assets/civil-capsule-notes/acie0102-1.svg",
       "width": 720,
       "height": 420,
       "title": "Le Chatelier mould and tension briquette",
       "caption": "Expansion widens the indicator-arm tips of the split mould after heating; a necked briquette pulled apart gives tensile strength as P divided by the neck area."
      },
      {
       "id": "c-acie0102-3",
       "block": "brick-compressive-strength-test",
       "src": "assets/civil-notes/acie0102-2.svg",
       "width": 720,
       "height": 420,
       "title": "Compression test load path",
       "caption": "Aligned platens load the prepared specimen; failure load and loaded area are separate measured inputs."
      },
      {
       "id": "c-acie0102-4",
       "block": "brick-water-absorption-test",
       "src": "assets/civil-notes/acie0102-1.svg",
       "width": 720,
       "height": 420,
       "title": "Dry and saturated mass",
       "caption": "Water absorption compares the mass gain with the dry specimen mass under the named test method."
      },
      {
       "id": "c-acie0102-5",
       "block": "aggregate-moisture-states-and-bulking",
       "src": "assets/civil-notes/acie0102-4.svg",
       "width": 720,
       "height": 420,
       "title": "Sand bulking comparison",
       "caption": "Equal sand solids occupy different apparent volumes when damp and in the chosen reference condition."
      },
      {
       "id": "c-acie0102-6",
       "block": "bulk-density-fineness-and-grading-zones",
       "src": "assets/civil-capsule-notes/acie0102-2.svg",
       "width": 720,
       "height": 420,
       "title": "Fineness modulus from a sieve stack",
       "caption": "Cumulative percentages retained on the specified sieves are added and divided by 100; the illustrative values give 2.80, and a higher value means coarser grading."
      },
      {
       "id": "c-acie0102-7",
       "block": "reinforcement-tensile-testing",
       "src": "assets/civil-capsule-notes/acie0102-3.svg",
       "width": 720,
       "height": 420,
       "title": "Gauge length and neck area in a tensile test",
       "caption": "Elongation compares the fractured gauge length with the original; reduction in area compares the neck area with the original area."
      }
     ],
     "ACiE0103": [
      {
       "id": "c-acie0103-1",
       "block": "formwork-and-shoring",
       "src": "assets/civil-capsule-notes/acie0103-1.svg",
       "width": 720,
       "height": 420,
       "title": "Raking shores beside an excavation",
       "caption": "Inclined props support a masonry wall made unsafe by nearby excavation; shoring is temporary support, unlike underpinning of the foundation."
      },
      {
       "id": "c-acie0103-2",
       "block": "raking-bond-and-dry-rubble",
       "src": "assets/civil-notes/acie0103-1.svg",
       "width": 720,
       "height": 420,
       "title": "Bond and joint staggering",
       "caption": "Overlapping units interrupt continuous vertical joints; this schematic is a bond principle, not a complete corner detail."
      },
      {
       "id": "c-acie0103-3",
       "block": "arches-corbels-and-wall-roles",
       "src": "assets/civil-notes/acie0103-3.svg",
       "width": 720,
       "height": 420,
       "title": "Masonry arch components",
       "caption": "Voussoirs transfer compression through the arch ring to the abutments; the intrados and extrados are different surfaces."
      },
      {
       "id": "c-acie0103-4",
       "block": "damp-proof-courses",
       "src": "assets/civil-notes/acie0103-2.svg",
       "width": 720,
       "height": 420,
       "title": "Continuous damp-proof course",
       "caption": "The barrier interrupts rising moisture and must remain continuous at adjoining floor and wall details."
      },
      {
       "id": "c-acie0103-5",
       "block": "roof-edges-gutters-and-terraces",
       "src": "assets/civil-capsule-notes/acie0103-2.svg",
       "width": 720,
       "height": 420,
       "title": "Pitched-roof terms in plan",
       "caption": "Eaves are the lower edges, the ridge is the high intersection of two slopes, hips are external sloping intersections and a valley is an internal one that collects water."
      },
      {
       "id": "c-acie0103-6",
       "block": "roof-battens-and-schedules",
       "src": "assets/civil-capsule-notes/acie0103-3.svg",
       "width": 720,
       "height": 420,
       "title": "Battens across the rafters",
       "caption": "Small sawn battens fixed across rafters carry the tiles; a 45 mm thick by 75 mm broad batten meets a schedule of at most 50 mm thickness and 75 mm breadth."
      },
      {
       "id": "c-acie0103-7",
       "block": "timber-joints",
       "src": "assets/civil-capsule-notes/acie0103-4.svg",
       "width": 720,
       "height": 420,
       "title": "Three carpentry joints",
       "caption": "Tongue and groove uses a continuous edge ridge, mortise and tenon a localised end projection in a socket, and a half lap removes half of each member so faces stay flush."
      },
      {
       "id": "c-acie0103-8",
       "block": "stair-treads-and-floor-layers",
       "src": "assets/civil-notes/acie0103-4.svg",
       "width": 720,
       "height": 420,
       "title": "Risers, treads and landings",
       "caption": "A stair profile distinguishes vertical rise from horizontal going; count risers and treads from the actual arrangement."
      },
      {
       "id": "c-acie0103-9",
       "block": "ground-coverage-and-circulation",
       "src": "assets/civil-capsule-notes/acie0103-5.svg",
       "width": 720,
       "height": 420,
       "title": "Ground coverage of a plot",
       "caption": "With 60 percent permitted coverage, a 400 square metre plot allows a 240 square metre footprint before any tighter setback limit."
      },
      {
       "id": "c-acie0103-10",
       "block": "clear-openings-and-gas-routes",
       "src": "assets/civil-capsule-notes/acie0103-6.svg",
       "width": 720,
       "height": 420,
       "title": "Nominal door size versus clear opening",
       "caption": "A door drawn as 750 mm may describe the leaf or frame; the usable clear opening with the leaf open, here 710 mm, is what an access requirement checks."
      },
      {
       "id": "c-acie0103-11",
       "block": "cement-storage-and-paint-blistering",
       "src": "assets/civil-capsule-notes/acie0103-7.svg",
       "width": 720,
       "height": 420,
       "title": "Storing bagged cement",
       "caption": "Bags stand on a raised platform in a dry, weatherproof store, kept clear of damp walls, with older stock used first."
      }
     ],
     "ACiE0104": [
      {
       "id": "c-acie0104-1",
       "block": "centroids-of-plane-areas",
       "src": "assets/civil-notes/acie0104-1.svg",
       "width": 720,
       "height": 420,
       "title": "Composite T-section",
       "caption": "Component areas and their offsets locate the centroid; overlapping area must not be counted twice."
      },
      {
       "id": "c-acie0104-2",
       "block": "centroids-of-plane-areas",
       "src": "assets/civil-notes/acie0104-2.svg",
       "width": 720,
       "height": 420,
       "title": "Centroid reference axes",
       "caption": "A rectangle and triangle have different centroid offsets; every distance needs an identified reference base."
      },
      {
       "id": "c-acie0104-3",
       "block": "centres-of-gravity-of-solids",
       "src": "assets/civil-capsule-notes/acie0104-1.svg",
       "width": 720,
       "height": 420,
       "title": "Centres of gravity of a solid cone and hemisphere",
       "caption": "For a solid cone G lies h/4 above the base, which is 3h/4 below the apex; for a solid hemisphere it lies 3R/8 above the flat base."
      },
      {
       "id": "c-acie0104-4",
       "block": "pyramids-and-prisms",
       "src": "assets/civil-capsule-notes/acie0104-2.svg",
       "width": 720,
       "height": 420,
       "title": "Prism and pyramid",
       "caption": "A prism has two parallel congruent end faces joined by lateral faces; a pyramid has one base with triangular faces meeting at a single apex."
      },
      {
       "id": "c-acie0104-5",
       "block": "triangle-second-moments",
       "src": "assets/civil-capsule-notes/acie0104-3.svg",
       "width": 720,
       "height": 420,
       "title": "Second moments of a triangle about three axes",
       "caption": "About the base I = bh³/12, about the centroidal axis h/3 above the base I = bh³/36, and about the apex line I = bh³/4."
      },
      {
       "id": "c-acie0104-6",
       "block": "rectangle-second-moments",
       "src": "assets/civil-notes/acie0104-3.svg",
       "width": 720,
       "height": 420,
       "title": "Parallel-axis offset",
       "caption": "The centroidal axis and an offset parallel axis give different second moments of area."
      },
      {
       "id": "c-acie0104-7",
       "block": "circular-diametral-and-polar-moments",
       "src": "assets/civil-notes/acie0104-4.svg",
       "width": 720,
       "height": 420,
       "title": "Annulus and diameter axes",
       "caption": "Subtract the concentric inner area from the outer circle; a polar axis is normal to the section."
      },
      {
       "id": "c-acie0104-8",
       "block": "circular-diametral-and-polar-moments",
       "src": "assets/civil-notes/acie0104-5.svg",
       "width": 720,
       "height": 420,
       "title": "Worked annular second moment",
       "caption": "For concentric diameters 20 cm and 10 cm, the centroidal diametral second moment is 7363.11 cm to the fourth; the polar moment is twice this value."
      },
      {
       "id": "c-acie0104-9",
       "block": "semicircle-area-moment-versus-hemisphere",
       "src": "assets/civil-capsule-notes/acie0104-4.svg",
       "width": 720,
       "height": 420,
       "title": "Semicircle about its flat diameter",
       "caption": "A semicircle contributes half of the circle's moment about the shared diameter, πR⁴/8; its centroid lies 4R/3π from that diameter."
      },
      {
       "id": "c-acie0104-10",
       "block": "perpendicular-axis-and-section-modulus",
       "src": "assets/civil-capsule-notes/acie0104-5.svg",
       "width": 720,
       "height": 420,
       "title": "Perpendicular axes and section modulus",
       "caption": "For a plane area the polar moment about the normal axis equals Ix + Iy; the elastic section modulus divides I by the distance to the extreme fibre."
      },
      {
       "id": "c-acie0104-11",
       "block": "radius-of-gyration",
       "src": "assets/civil-capsule-notes/acie0104-6.svg",
       "width": 720,
       "height": 420,
       "title": "Radius of gyration",
       "caption": "k is the distance at which the whole area, concentrated in a thin strip, would give the same second moment about the stated axis: I = Ak²."
      }
     ],
     "ACiE0105": [
      {
       "id": "c-acie0105-1",
       "block": "plane-geodetic-and-well-conditioned-triangles",
       "src": "assets/civil-capsule-notes/acie0105-1.svg",
       "width": 720,
       "height": 420,
       "title": "Well-conditioned and ill-conditioned triangles",
       "caption": "Every angle of a well-conditioned triangle lies between 30 and 120 degrees; a very small or very large angle makes the computed position sensitive to errors."
      },
      {
       "id": "c-acie0105-2",
       "block": "optical-square-double-reflection",
       "src": "assets/civil-capsule-notes/acie0105-2.svg",
       "width": 720,
       "height": 420,
       "title": "Double reflection in an optical square",
       "caption": "Two plane mirrors at 45 degrees deviate the ray from rod A through 90 degrees, so its image lines up with rod B seen directly: the deviation is twice the mirror angle."
      },
      {
       "id": "c-acie0105-3",
       "block": "plotting-detail-and-areas",
       "src": "assets/civil-capsule-notes/acie0105-3.svg",
       "width": 720,
       "height": 420,
       "title": "Coordinate area by the shoelace rule",
       "caption": "Cross products of successive coordinates, summed around the figure and halved, give the plan area; the illustrative quadrilateral has an area of 20 square units."
      },
      {
       "id": "c-acie0105-4",
       "block": "levelling-benchmarks-sights-and-level",
       "src": "assets/civil-notes/acie0105-1.svg",
       "width": 720,
       "height": 420,
       "title": "Backsight and foresight",
       "caption": "The horizontal line of sight links two staff readings to their ground elevations and the benchmark datum."
      },
      {
       "id": "c-acie0105-5",
       "block": "curvature-refraction-and-bubble-sensitivity",
       "src": "assets/civil-capsule-notes/acie0105-4.svg",
       "width": 720,
       "height": 420,
       "title": "Curvature and refraction over a long sight",
       "caption": "The horizontal line of sight departs from the level line through Earth curvature, and refraction bends it partly back; equal sights cancel both effects."
      },
      {
       "id": "c-acie0105-6",
       "block": "face-readings-bearings-and-declination",
       "src": "assets/civil-notes/acie0105-2.svg",
       "width": 720,
       "height": 420,
       "title": "Whole-circle bearing",
       "caption": "The clockwise angle is measured from the selected north reference, not from an unspecified horizontal line."
      },
      {
       "id": "c-acie0105-7",
       "block": "traverse-misclosure-direction",
       "src": "assets/civil-notes/acie0105-3.svg",
       "width": 720,
       "height": 420,
       "title": "Traverse closure",
       "caption": "Successive eastings and northings should close for a closed traverse; the exaggerated gap illustrates misclosure."
      },
      {
       "id": "c-acie0105-8",
       "block": "total-station-observations",
       "src": "assets/civil-capsule-notes/acie0105-5.svg",
       "width": 720,
       "height": 420,
       "title": "Reducing a total-station observation",
       "caption": "The slope distance S and vertical angle α give H = S cos α and V = S sin α; the target ground RL adds the instrument height and V and subtracts the target height."
      },
      {
       "id": "c-acie0105-9",
       "block": "tacheometry-and-subtense",
       "src": "assets/civil-capsule-notes/acie0105-6.svg",
       "width": 720,
       "height": 420,
       "title": "Stadia intercept and subtense bar",
       "caption": "With a level sight the stadia intercept s gives D = Ks + C; a subtense bar of length b subtending angle α gives D = (b/2) / tan(α/2)."
      },
      {
       "id": "c-acie0105-10",
       "block": "contour-properties-and-uses",
       "src": "assets/civil-notes/acie0105-4.svg",
       "width": 720,
       "height": 420,
       "title": "Contour spacing and slope",
       "caption": "Closely spaced contours indicate a steeper surface for the same vertical interval; contours are elevation lines."
      },
      {
       "id": "c-acie0105-11",
       "block": "topographic-gps-and-gis",
       "src": "assets/civil-capsule-notes/acie0105-7.svg",
       "width": 720,
       "height": 420,
       "title": "GIS layers overlaid for analysis",
       "caption": "Georeferenced layers such as terrain, streams, roads and buildings can be overlaid and queried together; the survey supplies their positions."
      }
     ],
     "ACiE0106": [
      {
       "id": "c-acie0106-1",
       "block": "plinth-area-estimates",
       "src": "assets/civil-capsule-notes/acie0106-1.svg",
       "width": 720,
       "height": 420,
       "title": "Plinth area and carpet area",
       "caption": "Plinth area is measured to the outer faces of the walls at plinth level; carpet area is the usable room floor, often assumed as a fraction of the plinth area."
      },
      {
       "id": "c-acie0106-2",
       "block": "cost-control-revisions-and-final-cost",
       "src": "assets/civil-capsule-notes/acie0106-3.svg",
       "width": 720,
       "height": 420,
       "title": "Deviation against a named base",
       "caption": "A percentage deviation is the change divided by the stated base, such as the sanctioned estimate; read the governing procedure for any revision threshold."
      },
      {
       "id": "c-acie0106-3",
       "block": "dry-volume-and-cement-bags",
       "src": "assets/civil-capsule-notes/acie0106-2.svg",
       "width": 720,
       "height": 420,
       "title": "Dry volume and cement for a 1:2:4 mix",
       "caption": "The finished volume is increased by the dry-volume factor, split in proportion to the mix parts, and the cement volume is converted to bags through its bulk density."
      },
      {
       "id": "c-acie0106-4",
       "block": "masonry-lengths-and-brick-volume",
       "src": "assets/civil-notes/acie0106-1.svg",
       "width": 720,
       "height": 420,
       "title": "Wall length measurement",
       "caption": "Face-to-face and centre-line lengths differ at wall junctions; use the method appropriate to the complete item."
      },
      {
       "id": "c-acie0106-5",
       "block": "rate-analysis-allowances",
       "src": "assets/civil-notes/acie0106-3.svg",
       "width": 720,
       "height": 420,
       "title": "Rate-analysis build-up",
       "caption": "Materials, labour, plant and applicable additions contribute to the rate of one specified unit of work."
      },
      {
       "id": "c-acie0106-6",
       "block": "valuation-salvage-and-forced-sale",
       "src": "assets/civil-notes/acie0106-4.svg",
       "width": 720,
       "height": 420,
       "title": "Carrying value over time",
       "caption": "Illustrative straight-line and declining-balance curves allocate cost differently; neither predicts market value."
      }
     ],
     "ACiE0201": [
      {
       "id": "c-acie0201-1",
       "block": "phase-relationships",
       "src": "assets/civil-notes/acie0201-1.svg",
       "width": 720,
       "height": 420,
       "title": "Three-phase soil diagram",
       "caption": "Air, water and solids occupy volumes, but air mass is usually neglected in elementary phase accounting."
      },
      {
       "id": "c-acie0201-2",
       "block": "phase-relationships",
       "src": "assets/civil-notes/acie0201-5.svg",
       "width": 720,
       "height": 420,
       "title": "Moist and dry weight balance",
       "caption": "A moist weight of 190 kN and dry weight of 150 kN imply 40 kN water and 26.67 percent gravimetric water content; these are weights, not phase volumes."
      },
      {
       "id": "c-acie0201-3",
       "block": "density-and-specific-gravity",
       "src": "assets/civil-capsule-notes/acie0201-1.svg",
       "width": 720,
       "height": 420,
       "title": "Core cutter and density bottle",
       "caption": "A cutter of known volume gives bulk density M/V, converted to dry density with the water content; a density bottle compares dry solids with the water they displace."
      },
      {
       "id": "c-acie0201-4",
       "block": "consistency-limits",
       "src": "assets/civil-notes/acie0201-3.svg",
       "width": 720,
       "height": 420,
       "title": "Consistency states",
       "caption": "Increasing water content crosses shrinkage, plastic and liquid limits; these are defined test boundaries."
      },
      {
       "id": "c-acie0201-5",
       "block": "sieve-boundary-fines",
       "src": "assets/civil-capsule-notes/acie0201-2.svg",
       "width": 720,
       "height": 420,
       "title": "Size names and the 75 micrometre sieve",
       "caption": "On an IS-style size scale the 0.075 mm sieve separates fines from the coarse fraction; a 0.06 mm grain is silt-sized, but its behaviour needs plasticity tests."
      },
      {
       "id": "c-acie0201-6",
       "block": "grading-coefficients",
       "src": "assets/civil-notes/acie0201-2.svg",
       "width": 720,
       "height": 420,
       "title": "Particle-size distribution",
       "caption": "An illustrative cumulative passing curve locates D10, D30 and D60 on a logarithmic size axis."
      },
      {
       "id": "c-acie0201-7",
       "block": "plasticity-chart-fine-soils",
       "src": "assets/civil-capsule-notes/acie0201-3.svg",
       "width": 720,
       "height": 420,
       "title": "Plasticity chart with the A-line",
       "caption": "The A-line separates clay-like C from silt-like M behaviour and LL = 50 separates L from H; an inorganic soil at LL 60 and PI 20 plots as MH."
      },
      {
       "id": "c-acie0201-8",
       "block": "permeability-tests",
       "src": "assets/civil-notes/acie0201-4.svg",
       "width": 720,
       "height": 420,
       "title": "Constant-head permeability",
       "caption": "A maintained head difference drives water through a known soil length and cross-sectional area."
      },
      {
       "id": "c-acie0201-9",
       "block": "retained-water",
       "src": "assets/civil-capsule-notes/acie0201-4.svg",
       "width": 720,
       "height": 420,
       "title": "Water held after gravity drainage",
       "caption": "Adsorbed film water clings to grain surfaces by molecular attraction, while capillary water is held in small pores by surface tension across curved menisci."
      }
     ],
     "ACiE0202": [
      {
       "id": "c-acie0202-1",
       "block": "effective-stress",
       "src": "assets/civil-notes/acie0202-1.svg",
       "width": 720,
       "height": 420,
       "title": "Total and effective stress",
       "caption": "In a saturated layer, total vertical stress is partitioned into pore-water pressure and effective stress."
      },
      {
       "id": "c-acie0202-2",
       "block": "darcy-law",
       "src": "assets/civil-capsule-notes/acie0202-1.svg",
       "width": 720,
       "height": 420,
       "title": "Hydraulic gradient along a seepage path",
       "caption": "Water flows from higher to lower total head; the head lost divided by the path length is the gradient, and Darcy's law gives q = kiA through the gross area."
      },
      {
       "id": "c-acie0202-3",
       "block": "flow-nets",
       "src": "assets/civil-notes/acie0202-2.svg",
       "width": 720,
       "height": 420,
       "title": "Flow lines and equipotentials",
       "caption": "Concentric flow lines and radial equal-head lines are perpendicular in this ideal isotropic annular domain. The inner and outer arcs are impermeable boundaries, not a site-specific dam model."
      },
      {
       "id": "c-acie0202-4",
       "block": "critical-gradient",
       "src": "assets/civil-notes/acie0202-3.svg",
       "width": 720,
       "height": 420,
       "title": "Upward seepage and heave",
       "caption": "Upward seepage force opposes submerged soil weight; loss of effective stress is a mechanical condition."
      },
      {
       "id": "c-acie0202-5",
       "block": "compressibility-coefficients",
       "src": "assets/civil-capsule-notes/acie0202-2.svg",
       "width": 720,
       "height": 420,
       "title": "Void ratio against effective stress",
       "caption": "Over one load increment the void-ratio drop per unit stress rise is av; dividing by 1 + e0 converts it into the volumetric coefficient mv."
      },
      {
       "id": "c-acie0202-6",
       "block": "compaction-effort",
       "src": "assets/civil-notes/acie0202-4.svg",
       "width": 720,
       "height": 420,
       "title": "Compaction curves",
       "caption": "Illustrative curves show a moisture-dependent density peak and the effect of a different compactive effort."
      },
      {
       "id": "c-acie0202-7",
       "block": "roller-selection",
       "src": "assets/civil-capsule-notes/acie0202-3.svg",
       "width": 720,
       "height": 420,
       "title": "Kneading versus vibration",
       "caption": "Sheepsfoot or padfoot feet knead cohesive fill placed in thin lifts, while a vibratory smooth drum rearranges clean granular particles into denser packing."
      },
      {
       "id": "c-acie0202-8",
       "block": "field-compaction-control",
       "src": "assets/civil-capsule-notes/acie0202-4.svg",
       "width": 720,
       "height": 420,
       "title": "Dry density against roller passes",
       "caption": "In a trial at fixed moisture and lift thickness the gain per pass diminishes to a plateau; a different roller or speed needs its own trial and density checks."
      }
     ],
     "ACiE0203": [
      {
       "id": "c-acie0203-1",
       "block": "mohr-circle-basics",
       "src": "assets/civil-capsule-notes/acie0203-1.svg",
       "width": 720,
       "height": 420,
       "title": "Mohr circle for principal stresses 180 and 60 kPa",
       "caption": "The centre is the mean principal stress and the radius half their difference; a plane rotated by θ in the element moves 2θ around the circle."
      },
      {
       "id": "c-acie0203-2",
       "block": "principal-stresses-max-shear",
       "src": "assets/civil-notes/acie0402-1.svg",
       "width": 720,
       "height": 420,
       "title": "Plane-stress components",
       "caption": "Normal and complementary shear stresses act on paired faces; signs must be defined before transforming the plane."
      },
      {
       "id": "c-acie0203-3",
       "block": "mohr-coulomb-envelope",
       "src": "assets/civil-notes/acie0203-1.svg",
       "width": 720,
       "height": 420,
       "title": "Mohr circle and strength envelope",
       "caption": "The tangent envelope relates normal and shear stress at failure under the stated effective-stress model."
      },
      {
       "id": "c-acie0203-4",
       "block": "triaxial-drainage-pore-pressure",
       "src": "assets/civil-notes/acie0203-2.svg",
       "width": 720,
       "height": 420,
       "title": "Triaxial specimen loading",
       "caption": "Cell pressure, axial loading and drainage control are separate test inputs; pore pressure may also be measured."
      },
      {
       "id": "c-acie0203-5",
       "block": "undrained-strength-ucs",
       "src": "assets/civil-capsule-notes/acie0203-2.svg",
       "width": 720,
       "height": 420,
       "title": "Unconfined compression and the undrained circle",
       "caption": "With zero lateral stress the failure circle runs from 0 to qu, so under the φu = 0 idealization the undrained strength is its radius qu/2."
      },
      {
       "id": "c-acie0203-6",
       "block": "vane-shear",
       "src": "assets/civil-capsule-notes/acie0203-3.svg",
       "width": 720,
       "height": 420,
       "title": "Field vane shear test",
       "caption": "Torque on a fully embedded vane shears a soil cylinder; with H = D the side carries three quarters of the ideal torque and the two ends one quarter."
      },
      {
       "id": "c-acie0203-7",
       "block": "direct-shear",
       "src": "assets/civil-notes/acie0203-3.svg",
       "width": 720,
       "height": 420,
       "title": "Direct-shear box",
       "caption": "Relative box movement imposes a shear plane while normal load is applied to the specimen."
      },
      {
       "id": "c-acie0203-8",
       "block": "infinite-slopes",
       "src": "assets/civil-notes/acie0203-4.svg",
       "width": 720,
       "height": 420,
       "title": "Slope slice force components",
       "caption": "Resolve weight normal and parallel to a chosen plane before comparing resistance with driving action."
      },
      {
       "id": "c-acie0203-9",
       "block": "simplified-bishop",
       "src": "assets/civil-capsule-notes/acie0203-4.svg",
       "width": 720,
       "height": 420,
       "title": "Trial slip circle divided into slices",
       "caption": "The simplified Bishop method uses vertical equilibrium of each slice and overall moments about the circle centre, neglecting interslice shear; F is found by iteration."
      }
     ],
     "ACiE0204": [
      {
       "id": "c-acie0204-1",
       "block": "exploration-planning",
       "src": "assets/civil-notes/acie0204-1.svg",
       "width": 720,
       "height": 420,
       "title": "Interpreted ground profile",
       "caption": "A schematic borehole records layer boundaries, samples and groundwater observations; it does not replace a site investigation."
      },
      {
       "id": "c-acie0204-2",
       "block": "samplers-and-dutch-cone",
       "src": "assets/civil-capsule-notes/acie0204-1.svg",
       "width": 720,
       "height": 420,
       "title": "Sampler area ratio and cone tip angle",
       "caption": "The area ratio divides the cutting-edge annulus by the inside area, 21 percent for 55 and 50 mm; a 60 degree Dutch cone has a 30 degree semi-angle from its axis."
      },
      {
       "id": "c-acie0204-3",
       "block": "spt-corrections-dilatancy",
       "src": "assets/civil-notes/acie0204-2.svg",
       "width": 720,
       "height": 420,
       "title": "SPT penetration increments",
       "caption": "The seating increment is excluded from N; the following two increments contribute their recorded blow counts."
      },
      {
       "id": "c-acie0204-4",
       "block": "earth-pressure-states",
       "src": "assets/civil-notes/acie0204-4.svg",
       "width": 720,
       "height": 420,
       "title": "Retaining-wall free body",
       "caption": "Weight, earth thrust, water pressure and base reactions belong to one consistent stability model."
      },
      {
       "id": "c-acie0204-5",
       "block": "rankine-coefficients",
       "src": "assets/civil-notes/acie0204-3.svg",
       "width": 720,
       "height": 420,
       "title": "Earth pressure and surcharge",
       "caption": "A triangular soil component and a uniform surcharge component have different resultants and lines of action."
      },
      {
       "id": "c-acie0204-6",
       "block": "rankine-assumptions-coulomb-wedges",
       "src": "assets/civil-capsule-notes/acie0204-2.svg",
       "width": 720,
       "height": 420,
       "title": "Trial Coulomb wedges",
       "caption": "Each trial wedge is held by its weight, the reaction on the slip plane and the wall thrust; for active pressure the critical wedge needs the maximum thrust."
      },
      {
       "id": "c-acie0204-7",
       "block": "cohesive-backfill-tension-cracks",
       "src": "assets/civil-capsule-notes/acie0204-3.svg",
       "width": 720,
       "height": 420,
       "title": "Active pressure in cohesive backfill",
       "caption": "The cohesion term makes the ideal pressure negative above z0 = 2c'/(γ√Ka), a potential tension-crack zone; it is never counted as a stabilizing force."
      }
     ],
     "ACiE0205": [
      {
       "id": "c-acie0205-1",
       "block": "shallow-and-deep-systems",
       "src": "assets/civil-notes/acie0205-4.svg",
       "width": 720,
       "height": 420,
       "title": "Pile shaft and base transfer",
       "caption": "Axial resistance can mobilize along the shaft and at the base; group effects need separate assessment."
      },
      {
       "id": "c-acie0205-2",
       "block": "strip-and-preliminary-sizing",
       "src": "assets/civil-notes/acie0205-1.svg",
       "width": 720,
       "height": 420,
       "title": "Isolated spread footing",
       "caption": "The footing spreads a column load into the supporting ground; plan area alone does not determine structural depth."
      },
      {
       "id": "c-acie0205-3",
       "block": "combined-and-strap-footings",
       "src": "assets/civil-notes/acie0205-2.svg",
       "width": 720,
       "height": 420,
       "title": "Combined footing resultant",
       "caption": "A shared footing supports two column loads; locate their resultant before selecting a suitable plan shape."
      },
      {
       "id": "c-acie0205-4",
       "block": "raft-foundations",
       "src": "assets/civil-notes/acie0205-3.svg",
       "width": 720,
       "height": 420,
       "title": "Raft foundation load sharing",
       "caption": "Several columns act through a common slab or beam-and-slab system; soil support is not automatically uniform."
      },
      {
       "id": "c-acie0205-5",
       "block": "compensated-foundations",
       "src": "assets/civil-capsule-notes/acie0205-1.svg",
       "width": 720,
       "height": 420,
       "title": "A fully compensated basement",
       "caption": "When the building and foundation weigh the same as the soil excavated over the footprint the net added gross load is zero; heave and differential movement are still checked."
      },
      {
       "id": "c-acie0205-6",
       "block": "depth-hazards-open-foundations",
       "src": "assets/civil-capsule-notes/acie0205-2.svg",
       "width": 720,
       "height": 420,
       "title": "Pier footing below the scour zone",
       "caption": "An open spread foundation suits a pier where firm material lies not far below the assessed scour depth and the excavation can be dewatered safely."
      },
      {
       "id": "c-acie0205-7",
       "block": "competent-support-expansive-clay",
       "src": "assets/civil-capsule-notes/acie0205-3.svg",
       "width": 720,
       "height": 420,
       "title": "Seasonal moisture change in expansive clay",
       "caption": "Moisture changes with the seasons only down to the active zone; the founding decision follows that depth and measured shrink-swell behaviour, not a nominal embedment."
      }
     ],
     "ACiE0206": [
      {
       "id": "c-acie0206-1",
       "block": "stress-history-ocr",
       "src": "assets/civil-capsule-notes/acie0206-1.svg",
       "width": 720,
       "height": 420,
       "title": "Recompression and virgin compression",
       "caption": "Below the preconsolidation stress the clay follows the stiffer recompression branch; with a past maximum of 240 kPa and present 120 kPa, OCR = 2."
      },
      {
       "id": "c-acie0206-2",
       "block": "primary-consolidation-oedometer",
       "src": "assets/civil-notes/acie0206-3.svg",
       "width": 720,
       "height": 420,
       "title": "Consolidation spring analogy",
       "caption": "Drainage dissipates excess pore pressure while the soil skeleton takes more effective stress."
      },
      {
       "id": "c-acie0206-3",
       "block": "degree-of-consolidation-drainage",
       "src": "assets/civil-notes/acie0206-4.svg",
       "width": 720,
       "height": 420,
       "title": "Single and double drainage",
       "caption": "The longest drainage path is the full layer thickness for one-way drainage and half for two-way drainage."
      },
      {
       "id": "c-acie0206-4",
       "block": "settlement-criteria",
       "src": "assets/civil-capsule-notes/acie0206-2.svg",
       "width": 720,
       "height": 420,
       "title": "Total and differential settlement",
       "caption": "Total settlement, the difference between supports and angular distortion are separate serviceability checks; passing one does not establish the others."
      },
      {
       "id": "c-acie0206-5",
       "block": "terzaghi-footing-shapes",
       "src": "assets/civil-capsule-notes/acie0206-3.svg",
       "width": 720,
       "height": 420,
       "title": "Terzaghi's general shear mechanism",
       "caption": "A wedge moves down with the footing, radial shear zones rotate beside it and passive zones rise toward the base level; soil above the base acts only as surcharge q."
      },
      {
       "id": "c-acie0206-6",
       "block": "groundwater-bearing-capacity",
       "src": "assets/civil-notes/acie0206-2.svg",
       "width": 720,
       "height": 420,
       "title": "Water table near a footing",
       "caption": "Groundwater changes the relevant effective unit weights and stresses; its location must be referenced to the footing."
      },
      {
       "id": "c-acie0206-7",
       "block": "bearing-failure-modes",
       "src": "assets/civil-notes/acie0206-1.svg",
       "width": 720,
       "height": 420,
       "title": "Bearing failure mechanisms",
       "caption": "General shear, local shear and punching produce different ground deformation patterns; the sketches are qualitative."
      },
      {
       "id": "c-acie0206-8",
       "block": "plate-load-tests",
       "src": "assets/civil-capsule-notes/acie0206-4.svg",
       "width": 720,
       "height": 420,
       "title": "Plate load test and its scaling",
       "caption": "A plate loaded at founding level gives an ultimate plate pressure; clay carries the pressure across unchanged, while sand scales roughly with width, before load is pressure times area."
      },
      {
       "id": "c-acie0206-9",
       "block": "eccentric-loading-middle-third",
       "src": "assets/civil-notes/acie0403-4.svg",
       "width": 720,
       "height": 420,
       "title": "Eccentric load and the kern",
       "caption": "A resultant outside the no-tension kern would produce tensile contact in the elementary linear pressure model."
      }
     ],
     "ACiE0301": [
      {
       "id": "c-acie0301-1",
       "block": "fluids-deform-under-shear",
       "src": "assets/civil-notes/acie0301-1.svg",
       "width": 720,
       "height": 420,
       "title": "Shear between moving plates",
       "caption": "A velocity gradient develops across the fluid gap; Newtonian shear stress is proportional to that gradient."
      },
      {
       "id": "c-acie0301-2",
       "block": "viscosity-dimensions-and-temperature",
       "src": "assets/civil-capsule-notes/acie0301-1.svg",
       "width": 720,
       "height": 420,
       "title": "Temperature and viscosity: liquids against gases",
       "caption": "Over ordinary ranges heating thins a liquid as cohesion weakens, while a dilute gas grows more viscous as molecular momentum exchange intensifies."
      },
      {
       "id": "c-acie0301-3",
       "block": "newtonian-and-non-newtonian-fluids",
       "src": "assets/civil-capsule-notes/acie0301-2.svg",
       "width": 720,
       "height": 420,
       "title": "Flow curves of common fluid models",
       "caption": "A Newtonian fluid plots as a straight line through the origin; power-law fluids curve away from it, and a Bingham plastic needs a yield stress before it flows."
      },
      {
       "id": "c-acie0301-4",
       "block": "compressibility-and-bulk-modulus",
       "src": "assets/civil-notes/acie0301-4.svg",
       "width": 720,
       "height": 420,
       "title": "Fluid compression",
       "caption": "A pressure increase produces a volume reduction; bulk modulus relates those changes with a consistent sign."
      },
      {
       "id": "c-acie0301-5",
       "block": "surface-tension-drops-and-bubbles",
       "src": "assets/civil-notes/acie0301-2.svg",
       "width": 720,
       "height": 420,
       "title": "Curvature and surface tension",
       "caption": "A liquid droplet has one interface; a soap bubble has two, changing the pressure-jump balance."
      },
      {
       "id": "c-acie0301-6",
       "block": "capillary-rise-force-balance",
       "src": "assets/civil-notes/acie0301-3.svg",
       "width": 720,
       "height": 420,
       "title": "Capillary rise and depression",
       "caption": "The contact angle controls the sign of the capillary level change under the stated equilibrium assumptions."
      },
      {
       "id": "c-acie0301-7",
       "block": "capillary-scaling-and-temperature",
       "src": "assets/civil-capsule-notes/acie0301-3.svg",
       "width": 720,
       "height": 420,
       "title": "Capillary rise against tube size",
       "caption": "With the same liquid and wetting, rise varies inversely with tube size, so h d is constant: an 18 mm rise falls to 6 mm when the radius is tripled."
      },
      {
       "id": "c-acie0301-8",
       "block": "vapour-pressure-cavitation-and-property-roles",
       "src": "assets/civil-capsule-notes/acie0301-4.svg",
       "width": 720,
       "height": 420,
       "title": "Absolute pressure along a pump suction path",
       "caption": "Where the local absolute pressure falls to about the vapour pressure, near the impeller eye, vapour cavities form: cavitation."
      }
     ],
     "ACiE0302": [
      {
       "id": "c-acie0302-1",
       "block": "absolute-and-gauge-pressure",
       "src": "assets/civil-capsule-notes/acie0302-1.svg",
       "width": 720,
       "height": 420,
       "title": "Absolute and gauge pressure references",
       "caption": "Absolute pressure is measured from a perfect vacuum and gauge pressure from the local atmosphere; with signed gauge readings the atmosphere is always added."
      },
      {
       "id": "c-acie0302-2",
       "block": "pressure-variation-with-depth",
       "src": "assets/civil-notes/acie0302-1.svg",
       "width": 720,
       "height": 420,
       "title": "Hydrostatic pressure distribution",
       "caption": "Gauge pressure increases linearly below a free surface for a constant-density static liquid."
      },
      {
       "id": "c-acie0302-3",
       "block": "manometers",
       "src": "assets/civil-notes/acie0302-2.svg",
       "width": 720,
       "height": 420,
       "title": "Differential manometer",
       "caption": "Pressure changes through each liquid column depend on density and the signed elevation change."
      },
      {
       "id": "c-acie0302-4",
       "block": "forces-on-submerged-surfaces",
       "src": "assets/civil-capsule-notes/acie0302-2.svg",
       "width": 720,
       "height": 420,
       "title": "Hydrostatic force on an inclined plane gate",
       "caption": "The resultant equals the centroid pressure times the area, but it acts at the centre of pressure, deeper than the centroid by IG sin²θ / (A h̄)."
      },
      {
       "id": "c-acie0302-5",
       "block": "buoyancy-archimedes",
       "src": "assets/civil-notes/acie0302-3.svg",
       "width": 720,
       "height": 420,
       "title": "Weight and buoyancy",
       "caption": "Buoyancy acts through the centroid of displaced fluid; body weight acts through the body's centre of gravity."
      },
      {
       "id": "c-acie0302-6",
       "block": "apparent-weight-two-liquids",
       "src": "assets/civil-capsule-notes/acie0302-3.svg",
       "width": 720,
       "height": 420,
       "title": "One body weighed in two liquids",
       "caption": "The two readings differ by the difference of buoyant forces, which gives the displaced volume directly; the true weight then exceeds both readings."
      },
      {
       "id": "c-acie0302-7",
       "block": "metacentric-stability",
       "src": "assets/civil-notes/acie0302-4.svg",
       "width": 720,
       "height": 420,
       "title": "Initial floating stability",
       "caption": "For a small heel, the new buoyancy line locates the metacentre; its position relative to G controls the initial restoring sense."
      }
     ],
     "ACiE0303": [
      {
       "id": "c-acie0303-1",
       "block": "flow-classification-and-continuity",
       "src": "assets/civil-notes/acie0303-2.svg",
       "width": 720,
       "height": 420,
       "title": "Continuity through a contraction",
       "caption": "For steady incompressible flow without branches, the same discharge passes both areas and the narrower section has greater mean speed."
      },
      {
       "id": "c-acie0303-2",
       "block": "flow-classification-and-continuity",
       "src": "assets/civil-notes/acie0303-5.svg",
       "width": 720,
       "height": 420,
       "title": "Diameter, area and mean velocity",
       "caption": "Halving diameter quarters the circular area, so steady incompressible flow in an unbranched pipe requires four times the mean velocity."
      },
      {
       "id": "c-acie0303-3",
       "block": "bernoulli-heads-and-streamlines",
       "src": "assets/civil-notes/acie0303-1.svg",
       "width": 720,
       "height": 420,
       "title": "A steady velocity field",
       "caption": "Streamlines are tangent to the velocity field; in steady flow the corresponding pathline and streakline geometry can coincide."
      },
      {
       "id": "c-acie0303-4",
       "block": "bernoulli-heads-and-streamlines",
       "src": "assets/civil-notes/acie0303-3.svg",
       "width": 720,
       "height": 420,
       "title": "Elevation, pressure and velocity head",
       "caption": "The energy grade line lies above the hydraulic grade line by the velocity-head term for the chosen convention."
      },
      {
       "id": "c-acie0303-5",
       "block": "energy-equation-head-loss-and-diffusers",
       "src": "assets/civil-capsule-notes/acie0303-1.svg",
       "width": 720,
       "height": 420,
       "title": "Energy and hydraulic grade lines through a diffuser",
       "caption": "Slowing from 5 to 2 m/s frees 1.07 m of velocity head; after a 0.30 m loss the static pressure head rises 0.77 m while the total head falls."
      },
      {
       "id": "c-acie0303-6",
       "block": "vertical-pipe-pressure-and-elevation",
       "src": "assets/civil-capsule-notes/acie0303-2.svg",
       "width": 720,
       "height": 420,
       "title": "Pressure change up a constant-area vertical pipe",
       "caption": "Equal areas mean equal velocities, so between two sections the lower pressure exceeds the upper by ρgΔz whether the water flows up or down."
      },
      {
       "id": "c-acie0303-7",
       "block": "momentum-jets-plates-and-venturi",
       "src": "assets/civil-notes/acie0303-4.svg",
       "width": 720,
       "height": 420,
       "title": "Momentum change at a bend",
       "caption": "A control volume must account for inlet and outlet momentum, pressure forces, weight and the support reaction."
      },
      {
       "id": "c-acie0303-8",
       "block": "pitot-tubes-point-velocity",
       "src": "assets/civil-capsule-notes/acie0303-3.svg",
       "width": 720,
       "height": 420,
       "title": "Pitot-static tube at one point of a pipe",
       "caption": "The nose senses stagnation pressure and the side holes static pressure; their difference gives the local speed at the probe, not the mean velocity."
      },
      {
       "id": "c-acie0303-9",
       "block": "venturi-orifice-meters-and-nappe",
       "src": "assets/civil-capsule-notes/acie0303-4.svg",
       "width": 720,
       "height": 420,
       "title": "Venturi and orifice meters compared",
       "caption": "A Venturi accelerates the flow smoothly into its throat and recovers it gently; an orifice jet contracts to a vena contracta and mixes violently, so its Cd is much lower."
      }
     ],
     "ACiE0304": [
      {
       "id": "c-acie0304-1",
       "block": "energy-and-hydraulic-grade-lines",
       "src": "assets/civil-notes/acie0304-2.svg",
       "width": 720,
       "height": 420,
       "title": "Head loss along a pipe",
       "caption": "For a uniform pipe without a machine, friction lowers both grade lines while their separation reflects velocity head."
      },
      {
       "id": "c-acie0304-2",
       "block": "laminar-pipe-flow-results",
       "src": "assets/civil-notes/acie0304-1.svg",
       "width": 720,
       "height": 420,
       "title": "Laminar velocity profile",
       "caption": "Fully developed Newtonian laminar flow in a circular pipe has a parabolic axial velocity profile and no slip at the wall."
      },
      {
       "id": "c-acie0304-3",
       "block": "moody-chart-roughness-and-mixing-length",
       "src": "assets/civil-capsule-notes/acie0304-1.svg",
       "width": 720,
       "height": 420,
       "title": "Moody chart regimes",
       "caption": "Laminar friction follows 64/Re; in the transition the factor depends on Re and ε/D, and on the fully rough branch it depends on relative roughness alone."
      },
      {
       "id": "c-acie0304-4",
       "block": "sudden-expansion-contraction-exit-losses",
       "src": "assets/civil-capsule-notes/acie0304-2.svg",
       "width": 720,
       "height": 420,
       "title": "Sudden expansion and sudden contraction",
       "caption": "At an expansion the jet separates and re-attaches, losing (V1 − V2)²/2g; at a contraction most of the loss comes from re-expansion after the vena contracta."
      },
      {
       "id": "c-acie0304-5",
       "block": "pipes-in-series-and-parallel",
       "src": "assets/civil-notes/acie0304-3.svg",
       "width": 720,
       "height": 420,
       "title": "Parallel pipe branches",
       "caption": "Branches between the same two nodes share a head difference; their discharges add at the junctions."
      }
     ],
     "ACiE0305": [
      {
       "id": "c-acie0305-1",
       "block": "channel-section-geometry",
       "src": "assets/civil-notes/acie0305-1.svg",
       "width": 720,
       "height": 420,
       "title": "Trapezoidal channel geometry",
       "caption": "Bottom width, side slope, flow depth, top width and wetted perimeter describe different geometric quantities."
      },
      {
       "id": "c-acie0305-2",
       "block": "hydraulically-efficient-sections",
       "src": "assets/civil-capsule-notes/acie0305-1.svg",
       "width": 720,
       "height": 420,
       "title": "Hydraulically efficient channel sections",
       "caption": "For a given area the best sections minimize wetted perimeter: the semicircle, the rectangle with B = 2y and the optimum trapezoid give R = y/2, the 90 degree triangle y/(2√2)."
      },
      {
       "id": "c-acie0305-3",
       "block": "froude-number-wave-celerity",
       "src": "assets/civil-capsule-notes/acie0305-2.svg",
       "width": 720,
       "height": 420,
       "title": "Wave fronts from a disturbance in moving water",
       "caption": "In subcritical flow a disturbance sends waves both ways; at Fr = 1 the upstream wave is held stationary; in supercritical flow every wave is swept downstream."
      },
      {
       "id": "c-acie0305-4",
       "block": "specific-energy-and-alternate-depths",
       "src": "assets/civil-notes/acie0305-2.svg",
       "width": 720,
       "height": 420,
       "title": "Specific-energy branches",
       "caption": "The theoretical rectangular-channel curve has a minimum at critical depth and two possible depths above that minimum."
      },
      {
       "id": "c-acie0305-5",
       "block": "hydraulic-jump-sequent-depths",
       "src": "assets/civil-notes/acie0305-3.svg",
       "width": 720,
       "height": 420,
       "title": "Hydraulic jump",
       "caption": "A rapid transition links shallow supercritical flow to deeper subcritical flow and dissipates mechanical energy."
      },
      {
       "id": "c-acie0305-6",
       "block": "gradually-varied-flow-profiles",
       "src": "assets/civil-notes/acie0305-4.svg",
       "width": 720,
       "height": 420,
       "title": "Backwater above a control",
       "caption": "A downstream control can raise a subcritical profile above normal depth; this is a qualitative mild-slope example."
      },
      {
       "id": "c-acie0305-7",
       "block": "weirs-and-spillway-outlets",
       "src": "assets/civil-capsule-notes/acie0305-3.svg",
       "width": 720,
       "height": 420,
       "title": "Broad-crested weir and the 3/2 power law",
       "caption": "Critical depth forms on a broad crest, about 2H/3 for an ideal weir, and discharge grows as H to the power 3/2, so four times the head gives eight times the flow."
      },
      {
       "id": "c-acie0305-8",
       "block": "sediment-incipient-motion-shields",
       "src": "assets/civil-capsule-notes/acie0305-4.svg",
       "width": 720,
       "height": 420,
       "title": "Schematic Shields curve for incipient motion",
       "caption": "Grains on a loose noncohesive bed begin to move when the dimensionless bed shear exceeds the Shields threshold read for that sediment and flow."
      },
      {
       "id": "c-acie0305-9",
       "block": "bank-stability-tractive-force",
       "src": "assets/civil-capsule-notes/acie0305-5.svg",
       "width": 720,
       "height": 420,
       "title": "A grain on a sloping channel bank",
       "caption": "On a bank the downslope pull of the submerged weight uses part of the grain's frictional resistance, so less flow drag is needed to start motion than on the bed."
      }
     ],
     "ACiE0306": [
      {
       "id": "c-acie0306-1",
       "block": "hydrology-scope-and-dew-formation",
       "src": "assets/civil-notes/acie0306-1.svg",
       "width": 720,
       "height": 420,
       "title": "Catchment water balance",
       "caption": "Precipitation is partitioned into runoff, evapotranspiration and storage change within a defined boundary."
      },
      {
       "id": "c-acie0306-2",
       "block": "precipitation-lifting-mechanisms",
       "src": "assets/civil-capsule-notes/acie0306-1.svg",
       "width": 720,
       "height": 420,
       "title": "Cold-front and warm-front lifting",
       "caption": "Advancing cold air undercuts warm moist air steeply at a cold front, giving short intense showers; a gentle warm front lifts air slowly and spreads lighter, longer rain."
      },
      {
       "id": "c-acie0306-3",
       "block": "rain-gauges-isohyets-double-mass",
       "src": "assets/civil-capsule-notes/acie0306-2.svg",
       "width": 720,
       "height": 420,
       "title": "Double-mass curve with a break in slope",
       "caption": "Plotting a station's cumulative rainfall against the cumulative mean of consistent neighbours exposes a changed relationship, perhaps a relocation, as a change of slope."
      },
      {
       "id": "c-acie0306-4",
       "block": "rating-curves-and-hydrograph-recession",
       "src": "assets/civil-notes/acie0306-2.svg",
       "width": 720,
       "height": 420,
       "title": "Storm hydrograph",
       "caption": "Rising limb, peak and recession describe discharge through time; area under the curve is a volume."
      },
      {
       "id": "c-acie0306-5",
       "block": "catchment-shape-and-form-factor",
       "src": "assets/civil-capsule-notes/acie0306-3.svg",
       "width": 720,
       "height": 420,
       "title": "Basin shape and the flood peak",
       "caption": "For equal areas and a uniform storm, a compact fan-shaped basin synchronizes tributary arrivals and peaks higher and earlier than an elongated fern-shaped basin."
      },
      {
       "id": "c-acie0306-6",
       "block": "unit-hydrograph-derivation-and-duration",
       "src": "assets/civil-notes/acie0306-3.svg",
       "width": 720,
       "height": 420,
       "title": "Rainfall and effective excess",
       "caption": "A schematic loss rate separates part of the rainfall from the excess used in a runoff model."
      },
      {
       "id": "c-acie0306-7",
       "block": "rational-method-time-of-concentration",
       "src": "assets/civil-capsule-notes/acie0306-4.svg",
       "width": 720,
       "height": 420,
       "title": "Reading the design intensity at the time of concentration",
       "caption": "The rational-method peak uses the intensity for a duration equal to the time of concentration, the travel time from the most remote point to the outlet."
      },
      {
       "id": "c-acie0306-8",
       "block": "return-period-and-regional-flood-relation",
       "src": "assets/civil-capsule-notes/acie0306-5.svg",
       "width": 720,
       "height": 420,
       "title": "Chance of at least one exceedance in n years",
       "caption": "A T-year flood has annual exceedance probability 1/T, yet over a design life of n years the chance that it occurs at least once grows as 1 − (1 − 1/T) to the power n."
      },
      {
       "id": "c-acie0306-9",
       "block": "reservoir-storage-for-dry-season-deficit",
       "src": "assets/civil-capsule-notes/acie0306-6.svg",
       "width": 720,
       "height": 420,
       "title": "Storage needed to bridge a dry-season deficit",
       "caption": "Active storage is the demand minus inflow summed over the deficit period; a reservoir can only redistribute water it is able to refill in the wet season."
      },
      {
       "id": "c-acie0306-10",
       "block": "bridge-clearance-above-design-flood",
       "src": "assets/civil-capsule-notes/acie0306-7.svg",
       "width": 720,
       "height": 420,
       "title": "Flood clearance under a bridge",
       "caption": "Clearance is the elevation difference between the design high-flood level and the lowest point of the superstructure, never a depth from the bed or a dry-season level."
      }
     ],
     "ACiE0401": [
      {
       "id": "c-acie0401-1",
       "block": "sign-conventions-and-magnitudes",
       "src": "assets/civil-notes/acie0401-4.svg",
       "width": 720,
       "height": 420,
       "title": "Internal section actions",
       "caption": "A cut exposes axial force, shear and moment; the two cut faces carry equal and opposite actions."
      },
      {
       "id": "c-acie0401-2",
       "block": "load-shear-moment-relations",
       "src": "assets/civil-capsule-notes/acie0401-1.svg",
       "width": 720,
       "height": 420,
       "title": "Load, shear and moment linked by slopes",
       "caption": "For a 6 m span under 6 kN/m, M = 18x − 3x² differentiates to V = 18 − 6x: at x = 2 m the shear is 6 kN while the moment is 24 kN·m."
      },
      {
       "id": "c-acie0401-3",
       "block": "zero-shear-extremes-contraflexure",
       "src": "assets/civil-capsule-notes/acie0401-2.svg",
       "width": 720,
       "height": 420,
       "title": "Zero shear, maximum moment and contraflexure",
       "caption": "On an overhanging beam the moment peaks where shear passes from positive to negative, and changes sign at a point of contraflexure that is not a hinge."
      },
      {
       "id": "c-acie0401-4",
       "block": "couples-on-simple-beams",
       "src": "assets/civil-capsule-notes/acie0401-3.svg",
       "width": 720,
       "height": 420,
       "title": "A concentrated couple on a simple beam",
       "caption": "A couple adds no net force: the reactions form an opposing couple, the shear stays constant and continuous, and the moment diagram jumps by the couple's value."
      },
      {
       "id": "c-acie0401-5",
       "block": "couples-on-cantilevers",
       "src": "assets/civil-capsule-notes/acie0401-4.svg",
       "width": 720,
       "height": 420,
       "title": "Couples on cantilevers: moment without shear",
       "caption": "A couple at the tip puts the same moment on every section with zero shear; a couple at midspan loads only the segment between it and the root."
      },
      {
       "id": "c-acie0401-6",
       "block": "point-loads-simple-span",
       "src": "assets/civil-notes/acie0401-1.svg",
       "width": 720,
       "height": 420,
       "title": "Central point load: shear and moment",
       "caption": "For a simply supported span with a central downward load, shear is piecewise constant and sagging moment is triangular."
      },
      {
       "id": "c-acie0401-7",
       "block": "third-point-loads",
       "src": "assets/civil-capsule-notes/acie0401-5.svg",
       "width": 720,
       "height": 420,
       "title": "Two equal loads at the third points",
       "caption": "Each reaction equals one load; the shear is zero between the loads, so the middle third carries a constant moment WL/3, a zone of pure bending."
      },
      {
       "id": "c-acie0401-8",
       "block": "full-span-udl",
       "src": "assets/civil-notes/acie0401-2.svg",
       "width": 720,
       "height": 420,
       "title": "Uniform load: shear and moment",
       "caption": "For a simply supported uniformly loaded span, shear varies linearly and sagging moment is parabolic."
      },
      {
       "id": "c-acie0401-9",
       "block": "span-scaling-udl",
       "src": "assets/civil-notes/acie0401-5.svg",
       "width": 720,
       "height": 420,
       "title": "Worked 8 m UDL beam",
       "caption": "For 1 kN/m over the full 8 m span, each reaction is 4 kN, M at 2 m is 6 kN m, and the maximum sagging moment is 8 kN m."
      },
      {
       "id": "c-acie0401-10",
       "block": "varying-load-zero-shear",
       "src": "assets/civil-capsule-notes/acie0401-6.svg",
       "width": 720,
       "height": 420,
       "title": "Triangular load: zero shear at L/√3",
       "caption": "With intensity rising from zero at A to 12 kN/m at B over 6 m, RA = wL/6 = 12 kN and the shear 12 − x² vanishes at 3.464 m, the section of maximum moment."
      },
      {
       "id": "c-acie0401-11",
       "block": "cantilever-tip-force",
       "src": "assets/civil-notes/acie0401-3.svg",
       "width": 720,
       "height": 420,
       "title": "Cantilever end-load diagrams",
       "caption": "The end load gives constant shear magnitude and a moment increasing in magnitude toward the fixed support."
      },
      {
       "id": "c-acie0401-12",
       "block": "suspension-bridge-load-path",
       "src": "assets/civil-capsule-notes/acie0401-7.svg",
       "width": 720,
       "height": 420,
       "title": "Load path in a suspension bridge",
       "caption": "Deck load passes through tension hangers into sagging main cables, which bear on compression towers and end in anchorages that resist the cable pull."
      }
     ],
     "ACiE0402": [
      {
       "id": "c-acie0402-1",
       "block": "moduli-from-test-data",
       "src": "assets/civil-capsule-notes/acie0402-1.svg",
       "width": 720,
       "height": 420,
       "title": "Young's modulus and shear modulus from test data",
       "caption": "Each modulus is a stress over its own matching strain in the linear range: 120 MPa at 0.0006 gives E = 200 GPa, and 30 MPa at 0.0004 rad gives G = 75 GPa."
      },
      {
       "id": "c-acie0402-2",
       "block": "principal-planes-maximum-shear",
       "src": "assets/civil-notes/acie0402-1.svg",
       "width": 720,
       "height": 420,
       "title": "Plane-stress components",
       "caption": "Normal and complementary shear stresses act on paired faces; signs must be defined before transforming the plane."
      },
      {
       "id": "c-acie0402-3",
       "block": "mohr-circle-principal-stresses",
       "src": "assets/civil-notes/acie0402-2.svg",
       "width": 720,
       "height": 420,
       "title": "Principal stresses on Mohr's circle",
       "caption": "Intersections with the normal-stress axis have zero shear; the circle radius is the maximum in-plane shear magnitude."
      },
      {
       "id": "c-acie0402-4",
       "block": "mohr-circle-principal-stresses",
       "src": "assets/civil-notes/acie0402-5.svg",
       "width": 720,
       "height": 420,
       "title": "Numerical Mohr circle",
       "caption": "For 300 MPa direct tension, zero transverse direct stress and 200 MPa shear, C = 150 MPa and R = 250 MPa; the principal values are 400 and -100 MPa."
      },
      {
       "id": "c-acie0402-5",
       "block": "stress-strain-curve-stages",
       "src": "assets/civil-notes/acie0402-3.svg",
       "width": 720,
       "height": 420,
       "title": "Engineering stress-strain response",
       "caption": "This illustrative ductile curve distinguishes yield, strain hardening, ultimate engineering stress and necking."
      },
      {
       "id": "c-acie0402-6",
       "block": "ductility-measures",
       "src": "assets/civil-capsule-notes/acie0402-2.svg",
       "width": 720,
       "height": 420,
       "title": "Measuring ductility from a tensile specimen",
       "caption": "Ductility shows as large permanent elongation of the gauge length and a large reduction of area at the neck, not as recoverable elastic stretch."
      },
      {
       "id": "c-acie0402-7",
       "block": "torsion-circular-shaft",
       "src": "assets/civil-notes/acie0402-4.svg",
       "width": 720,
       "height": 420,
       "title": "Torsion of a circular shaft",
       "caption": "Under elastic circular-shaft torsion, shear stress varies linearly with radius and is greatest at the outer surface."
      }
     ],
     "ACiE0403": [
      {
       "id": "c-acie0403-1",
       "block": "flexure-formula",
       "src": "assets/civil-notes/acie0403-1.svg",
       "width": 720,
       "height": 420,
       "title": "Elastic bending distribution",
       "caption": "Plane sections remain plane under the model: strain and elastic normal stress vary linearly across depth."
      },
      {
       "id": "c-acie0403-2",
       "block": "section-properties-flexural-rigidity",
       "src": "assets/civil-notes/acie0403-5.svg",
       "width": 720,
       "height": 420,
       "title": "Worked cantilever stress",
       "caption": "The 2.4 kN end load on a 2 m cantilever gives 200 MPa elastic stress when the 60 mm side is vertical; the upper fixed-end fibres are in tension."
      },
      {
       "id": "c-acie0403-3",
       "block": "rectangular-shear-stress",
       "src": "assets/civil-capsule-notes/acie0403-1.svg",
       "width": 720,
       "height": 420,
       "title": "Shear stress across a rectangular beam section",
       "caption": "Transverse shear stress is parabolic over a solid rectangle, zero at the extreme fibres and 1.5 times the average at the neutral axis."
      },
      {
       "id": "c-acie0403-4",
       "block": "simple-span-deflections",
       "src": "assets/civil-capsule-notes/acie0403-2.svg",
       "width": 720,
       "height": 420,
       "title": "Midspan deflection of simple beams",
       "caption": "With L = 4 m and EI = 8000 kN·m², a 12 kN central load deflects 2.00 mm and a 24 kN total uniform load 2.50 mm; for equal total load the ratio is 8 to 5."
      },
      {
       "id": "c-acie0403-5",
       "block": "cantilever-fixed-deflections",
       "src": "assets/civil-notes/acie0403-2.svg",
       "width": 720,
       "height": 420,
       "title": "Deflected cantilever",
       "caption": "An end load produces both tip rotation and tip displacement; the fixed end restrains translation and rotation."
      },
      {
       "id": "c-acie0403-6",
       "block": "conjugate-beam-supports",
       "src": "assets/civil-capsule-notes/acie0403-3.svg",
       "width": 720,
       "height": 420,
       "title": "Translating supports to the conjugate beam",
       "caption": "Conjugate shear equals real slope and conjugate moment equals real deflection, so a fixed end becomes free, a free end becomes fixed and a simple end stays simple."
      },
      {
       "id": "c-acie0403-7",
       "block": "euler-buckling-effective-length",
       "src": "assets/civil-notes/acie0403-3.svg",
       "width": 720,
       "height": 420,
       "title": "Ideal Euler end conditions",
       "caption": "Pinned-pinned, fixed-fixed, fixed-free and fixed-pinned cases have different ideal effective lengths."
      },
      {
       "id": "c-acie0403-8",
       "block": "fixed-pinned-column",
       "src": "assets/civil-capsule-notes/acie0403-4.svg",
       "width": 720,
       "height": 420,
       "title": "Buckled shape of a fixed-pinned column",
       "caption": "The exact root of tan α = α, 4.49341, puts the inflection point 0.301L above the fixed base, so the effective length is 0.699L rather than the approximate 0.707L."
      },
      {
       "id": "c-acie0403-9",
       "block": "slenderness-ratio",
       "src": "assets/civil-capsule-notes/acie0403-5.svg",
       "width": 720,
       "height": 420,
       "title": "Which axis governs column slenderness",
       "caption": "With equal effective lengths, the axis with the smaller radius of gyration has the larger slenderness ratio and the lower Euler stress, so it governs buckling."
      }
     ],
     "ACiE0404": [
      {
       "id": "c-acie0404-1",
       "block": "virtual-work-principle",
       "src": "assets/civil-notes/acie0404-3.svg",
       "width": 720,
       "height": 420,
       "title": "Actual and unit-load systems",
       "caption": "A unit action is applied at the requested displacement coordinate in the same compatible structural system."
      },
      {
       "id": "c-acie0404-2",
       "block": "castigliano-derivative",
       "src": "assets/civil-capsule-notes/acie0404-4.svg",
       "width": 720,
       "height": 420,
       "title": "Castigliano: displacement as the slope of U against P",
       "caption": "For U = 0.002P² the load derivative gives δ = 0.004P, 20 mm at 5 kN: the tangent slope, which is twice the secant value U/P."
      },
      {
       "id": "c-acie0404-3",
       "block": "gradual-loading-strain-energy",
       "src": "assets/civil-notes/acie0404-5.svg",
       "width": 720,
       "height": 420,
       "title": "Central-load energy and deflection",
       "caption": "The triangular force-displacement area gives U = P delta/2 for gradual linear-elastic loading; energy and deflection have different denominators and units."
      },
      {
       "id": "c-acie0404-4",
       "block": "resilience-definitions",
       "src": "assets/civil-capsule-notes/acie0404-1.svg",
       "width": 720,
       "height": 420,
       "title": "Resilience and toughness on a stress-strain curve",
       "caption": "The area under the elastic part up to the elastic limit is the modulus of resilience; the whole area to fracture is toughness, which includes plastic work."
      },
      {
       "id": "c-acie0404-5",
       "block": "sudden-loading-energy",
       "src": "assets/civil-capsule-notes/acie0404-2.svg",
       "width": 720,
       "height": 420,
       "title": "Gradual against sudden loading of a spring",
       "caption": "A suddenly applied 2 kN force on a 100 kN/m spring overshoots to twice the static displacement, storing four times the energy of gradual loading at that peak."
      },
      {
       "id": "c-acie0404-6",
       "block": "truss-determinacy-counts",
       "src": "assets/civil-notes/acie0404-2.svg",
       "width": 720,
       "height": 420,
       "title": "Pin-jointed truss load path",
       "caption": "Ideal truss members carry axial force when loads act at joints; resolve equilibrium at joints or through a section."
      },
      {
       "id": "c-acie0404-7",
       "block": "indeterminacy-and-stability",
       "src": "assets/civil-notes/acie0404-1.svg",
       "width": 720,
       "height": 420,
       "title": "Support restraints",
       "caption": "Roller, pin and fixed supports restrain different planar degrees of freedom; restraint count alone does not ensure stability."
      },
      {
       "id": "c-acie0404-8",
       "block": "three-hinged-arch-temperature",
       "src": "assets/civil-capsule-notes/acie0404-3.svg",
       "width": 720,
       "height": 420,
       "title": "A three-hinged arch under uniform heating",
       "caption": "The determinate three-hinged arch accommodates a uniform temperature change by small hinge rotations, so first-order analysis adds no thermal stress."
      }
     ],
     "ACiE0405": [
      {
       "id": "c-acie0405-1",
       "block": "influence-line-concept",
       "src": "assets/civil-notes/acie0405-1.svg",
       "width": 720,
       "height": 420,
       "title": "Reaction influence line",
       "caption": "A unit load moving across a simple span gives a linear left-support reaction ordinate."
      },
      {
       "id": "c-acie0405-2",
       "block": "cantilever-influence-lines",
       "src": "assets/civil-notes/acie0405-3.svg",
       "width": 720,
       "height": 420,
       "title": "Section-shear influence line",
       "caption": "The unit jump at the section reflects the moving load crossing the cut; retain the chosen shear sign convention."
      },
      {
       "id": "c-acie0405-3",
       "block": "moving-loads-simple-span",
       "src": "assets/civil-notes/acie0405-2.svg",
       "width": 720,
       "height": 420,
       "title": "Section-moment influence line",
       "caption": "The triangular ordinate peaks when the moving unit load is at the section whose moment is being measured."
      },
      {
       "id": "c-acie0405-4",
       "block": "three-hinged-arch-statics",
       "src": "assets/civil-notes/acie0405-4.svg",
       "width": 720,
       "height": 420,
       "title": "Two and three hinges",
       "caption": "A crown hinge adds a moment release; a two-hinged arch generally also needs a compatibility relation."
      },
      {
       "id": "c-acie0405-5",
       "block": "three-hinged-ild-envelope",
       "src": "assets/civil-capsule-notes/acie0405-1.svg",
       "width": 720,
       "height": 420,
       "title": "Thrust influence line of a three-hinged arch",
       "caption": "Thrust equals the crown simple-beam moment divided by the rise, so its influence line is a triangle peaking at L/(4h) under the crown hinge."
      },
      {
       "id": "c-acie0405-6",
       "block": "thrust-line-and-arch-actions",
       "src": "assets/civil-capsule-notes/acie0405-2.svg",
       "width": 720,
       "height": 420,
       "title": "Normal thrust and radial shear at an arch section",
       "caption": "Resolving the section resultant (H, V) along the rib tangent gives the normal thrust N and across it the radial shear Q; bending vanishes where the thrust line meets the rib axis."
      },
      {
       "id": "c-acie0405-7",
       "block": "two-hinged-semicircular-arches",
       "src": "assets/civil-capsule-notes/acie0405-3.svg",
       "width": 720,
       "height": 420,
       "title": "Reaction locus of a two-hinged semicircular arch",
       "caption": "For a moving point load the two reaction lines meet directly above the load at a constant height πR/2, so their intersection travels along a horizontal line."
      }
     ],
     "ACiE0406": [
      {
       "id": "c-acie0406-1",
       "block": "continuous-beams-method-families",
       "src": "assets/civil-notes/acie0406-1.svg",
       "width": 720,
       "height": 420,
       "title": "Release and restore a redundant",
       "caption": "Releasing the prop creates a primary cantilever; the redundant reaction restores the required vertical compatibility."
      },
      {
       "id": "c-acie0406-2",
       "block": "rotational-stiffness-end-conditions",
       "src": "assets/civil-capsule-notes/acie0406-1.svg",
       "width": 720,
       "height": 420,
       "title": "Near-end rotational stiffness and the far-end condition",
       "caption": "The more freedom the far end has, the smaller the moment needed per unit near-end rotation: 4EI/L with the far end fixed, 3EI/L hinged and EI/L guided."
      },
      {
       "id": "c-acie0406-3",
       "block": "moment-distribution",
       "src": "assets/civil-notes/acie0406-2.svg",
       "width": 720,
       "height": 420,
       "title": "Joint moment balancing",
       "caption": "Joint imbalance is distributed according to member stiffness, followed by the appropriate carry-over for the end condition."
      },
      {
       "id": "c-acie0406-4",
       "block": "two-hinged-arch-compatibility",
       "src": "assets/civil-capsule-notes/acie0406-4.svg",
       "width": 720,
       "height": 420,
       "title": "Two-hinged arch thrust from compatibility",
       "caption": "Releasing the thrust lets one springing slide; the thrust that restores zero spread is one value for the whole arch, 25WL/128h for a shallow parabola with a crown load."
      },
      {
       "id": "c-acie0406-5",
       "block": "parabolic-arch-funicular-temperature",
       "src": "assets/civil-capsule-notes/acie0406-2.svg",
       "width": 720,
       "height": 420,
       "title": "Parabolic two-hinged arch under a full-span UDL",
       "caption": "Under a uniform load over the full horizontal span the parabola is funicular: H = wL²/8h, zero bending and zero radial shear, so the rib carries pure compression."
      },
      {
       "id": "c-acie0406-6",
       "block": "plastic-hinges-shape-factor",
       "src": "assets/civil-notes/acie0406-3.svg",
       "width": 720,
       "height": 420,
       "title": "Elastic and plastic stress blocks",
       "caption": "First yield and a fully plastic idealization use different through-depth stress distributions."
      },
      {
       "id": "c-acie0406-7",
       "block": "plastic-hinges-shape-factor",
       "src": "assets/civil-notes/acie0406-4.svg",
       "width": 720,
       "height": 420,
       "title": "Fixed-span collapse mechanism",
       "caption": "The ideal central-load mechanism forms hinges at both fixed ends and midspan; work rotations must be compatible."
      },
      {
       "id": "c-acie0406-8",
       "block": "propped-cantilever-elastic-plastic",
       "src": "assets/civil-capsule-notes/acie0406-3.svg",
       "width": 720,
       "height": 420,
       "title": "Propped cantilever: elastic moments against collapse hinges",
       "caption": "Elastically the moment changes sign L/4 from the fixed end; at plastic collapse the interior hinge forms about 0.414L from the prop, a different section."
      }
     ],
     "ACiE0501": [
      {
       "id": "c-acie0501-1",
       "block": "permanent-and-imposed-actions",
       "src": "assets/civil-notes/acie0501-1.svg",
       "width": 720,
       "height": 420,
       "title": "Gravity and lateral load paths",
       "caption": "Floor and roof actions reach foundations through structural members; lateral and vertical paths must both be continuous."
      },
      {
       "id": "c-acie0501-2",
       "block": "is-875-parts-and-load-patterns",
       "src": "assets/civil-notes/acie0501-2.svg",
       "width": 720,
       "height": 420,
       "title": "Tributary area",
       "caption": "A supported floor strip contributes distributed load to its beam; the actual support arrangement controls the allocation."
      },
      {
       "id": "c-acie0501-3",
       "block": "snow-load-on-roofs",
       "src": "assets/civil-capsule-notes/acie0501-1.svg",
       "width": 720,
       "height": 420,
       "title": "Roof snow load from the ground snow load",
       "caption": "The roof snow load is the site ground snow load times a dimensionless roof-shape coefficient, acting on the horizontal plan area: 0.75 × 2.4 = 1.80 kN/m²."
      },
      {
       "id": "c-acie0501-4",
       "block": "wind-velocity-pressure",
       "src": "assets/civil-notes/acie0501-3.svg",
       "width": 720,
       "height": 420,
       "title": "External and internal wind pressure",
       "caption": "The net action on cladding combines pressures on both faces using a declared sign convention."
      },
      {
       "id": "c-acie0501-5",
       "block": "earthquake-inertia-and-storey-shear",
       "src": "assets/civil-notes/acie0501-4.svg",
       "width": 720,
       "height": 420,
       "title": "Mass, acceleration and inertia",
       "caption": "Equivalent inertia opposes the specified acceleration; this schematic is a load-path illustration, not a code spectrum."
      },
      {
       "id": "c-acie0501-6",
       "block": "combining-wind-and-earthquake",
       "src": "assets/civil-capsule-notes/acie0501-2.svg",
       "width": 720,
       "height": 420,
       "title": "The 100/30 rule for orthogonal earthquake effects",
       "caption": "For non-parallel lateral systems the full effect of one direction is combined with 30 percent of the other, axes interchanged, taking the most adverse case."
      }
     ],
     "ACiE0502": [
      {
       "id": "c-acie0502-1",
       "block": "aggregate-moisture-and-reactivity",
       "src": "assets/civil-notes/acie0502-3.svg",
       "width": 720,
       "height": 420,
       "title": "Aggregate moisture states",
       "caption": "Dry, air-dry, saturated-surface-dry and wet conditions distinguish pore water from free surface moisture."
      },
      {
       "id": "c-acie0502-2",
       "block": "water-cement-ratio-compaction-bleeding",
       "src": "assets/civil-capsule-notes/acie0502-1.svg",
       "width": 720,
       "height": 420,
       "title": "Strength against water-cement ratio, and bleeding",
       "caption": "With full compaction, strength falls as the water-cement ratio rises; a very low ratio helps only if the mix can be consolidated. Bleeding is water rising as solids settle."
      },
      {
       "id": "c-acie0502-3",
       "block": "slump-test",
       "src": "assets/civil-notes/acie0502-2.svg",
       "width": 720,
       "height": 420,
       "title": "Slump test observations",
       "caption": "True slump, shear slump and collapse are different observations; interpretation depends on the specified test procedure."
      },
      {
       "id": "c-acie0502-4",
       "block": "mix-proportions-mass-and-volume",
       "src": "assets/civil-notes/acie0502-1.svg",
       "width": 720,
       "height": 420,
       "title": "Concrete constituents",
       "caption": "Cement paste surrounds fine and coarse aggregate; entrained or entrapped air is a distinct constituent of the volume."
      },
      {
       "id": "c-acie0502-5",
       "block": "grades-and-early-age-strength",
       "src": "assets/civil-capsule-notes/acie0502-2.svg",
       "width": 720,
       "height": 420,
       "title": "Concrete grade groups and a minimum grade",
       "caption": "A grade such as M20 names the characteristic 28-day cube strength; IS 456:2000 groups standard grades M25 to M55 and high-strength grades M60 to M80."
      },
      {
       "id": "c-acie0502-6",
       "block": "testing-hardened-concrete",
       "src": "assets/civil-capsule-notes/acie0502-3.svg",
       "width": 720,
       "height": 420,
       "title": "Cube, cylinder and pullout tests",
       "caption": "Platen friction confines more of a short cube, so cubes read higher than cylinders; a pullout test measures a resistance that must be correlated with compressive strength."
      },
      {
       "id": "c-acie0502-7",
       "block": "modulus-flexural-strength-creep",
       "src": "assets/civil-capsule-notes/acie0502-4.svg",
       "width": 720,
       "height": 420,
       "title": "Creep strain under sustained stress",
       "caption": "Under sustained compression concrete keeps shortening after its immediate elastic strain; on unloading part of the creep recovers and part remains."
      },
      {
       "id": "c-acie0502-8",
       "block": "curing-thermal-control-and-stripping",
       "src": "assets/civil-notes/acie0502-4.svg",
       "width": 720,
       "height": 420,
       "title": "Strength development and curing",
       "caption": "The curves illustrate why curing history matters; they are not guaranteed strength percentages at any age."
      }
     ],
     "ACiE0503": [
      {
       "id": "c-acie0503-1",
       "block": "strain-limits-and-stress-block",
       "src": "assets/civil-notes/acie0503-1.svg",
       "width": 720,
       "height": 420,
       "title": "RC beam internal couple",
       "caption": "Compression in concrete and tension in steel form the resisting couple; the lever arm is measured between their resultants."
      },
      {
       "id": "c-acie0503-2",
       "block": "flexural-failure-modes",
       "src": "assets/civil-capsule-notes/acie0503-1.svg",
       "width": 720,
       "height": 420,
       "title": "Strain profiles at flexural failure",
       "caption": "With the extreme concrete strain at 0.0035, an under-reinforced section has steel strain beyond yield and a shallow compression zone; an over-reinforced one fails with the steel below yield."
      },
      {
       "id": "c-acie0503-3",
       "block": "transformed-section-and-composite-action",
       "src": "assets/civil-notes/acie0503-5.svg",
       "width": 720,
       "height": 420,
       "title": "Worked RCC service-stress section",
       "caption": "The explicitly illustrative M20 section has x = 160 mm, concrete stress 5 MPa and steel stress 100 MPa at a 41.6 kN m service moment; the equal 120 kN forces form the resisting couple."
      },
      {
       "id": "c-acie0503-4",
       "block": "shear-in-rc-beams",
       "src": "assets/civil-notes/acie0503-3.svg",
       "width": 720,
       "height": 420,
       "title": "Shear cracking and links",
       "caption": "Transverse reinforcement crosses potential inclined cracks; its force path must be anchored into the member."
      },
      {
       "id": "c-acie0503-5",
       "block": "beam-reinforcement-limits-and-notation",
       "src": "assets/civil-capsule-notes/acie0503-2.svg",
       "width": 720,
       "height": 420,
       "title": "Beam tension-steel limits and bar notation",
       "caption": "The minimum tension steel uses the effective depth d and the maximum the overall depth D; a note such as 4 bars φ16 gives the count and each bar's diameter."
      },
      {
       "id": "c-acie0503-6",
       "block": "slab-cover-and-thickness",
       "src": "assets/civil-notes/acie0503-2.svg",
       "width": 720,
       "height": 420,
       "title": "One-way and two-way action",
       "caption": "The sketch contrasts load paths for two-edge and four-edge support; aspect ratio alone is not the complete boundary condition."
      },
      {
       "id": "c-acie0503-7",
       "block": "development-length-and-compression-laps",
       "src": "assets/civil-notes/acie0503-4.svg",
       "width": 720,
       "height": 420,
       "title": "Development by bond",
       "caption": "Distributed bond transfers longitudinal bar force into surrounding concrete along an anchored length."
      },
      {
       "id": "c-acie0503-8",
       "block": "hooks-and-anchorage-credit",
       "src": "assets/civil-capsule-notes/acie0503-3.svg",
       "width": 720,
       "height": 420,
       "title": "Standard U-hook as an anchorage credit",
       "caption": "A standard U-type tension hook is credited with an anchorage value of 16φ; the designer checks straight embedment plus that credit against the required development length."
      },
      {
       "id": "c-acie0503-9",
       "block": "deflection-limits",
       "src": "assets/civil-capsule-notes/acie0503-4.svg",
       "width": 720,
       "height": 420,
       "title": "Two deflection limits of IS 456:2000 clause 23.2",
       "caption": "Total final deflection is limited to span/250, while the increment after partitions and finishes is limited to the smaller of span/350 and 20 mm."
      }
     ],
     "ACiE0504": [
      {
       "id": "c-acie0504-1",
       "block": "column-strain-limits-and-slenderness",
       "src": "assets/civil-capsule-notes/acie0504-1.svg",
       "width": 720,
       "height": 420,
       "title": "Column strain limits and the second-order moment",
       "caption": "Uniform axial compression is limited to a strain of 0.002 and the extreme fibre in bending to 0.0035; a slender column also gains a moment of about Pδ as it deflects."
      },
      {
       "id": "c-acie0504-2",
       "block": "column-longitudinal-steel",
       "src": "assets/civil-notes/acie0504-1.svg",
       "width": 720,
       "height": 420,
       "title": "Tied column cage",
       "caption": "Closed ties restrain longitudinal bars and confine the core; the sketch does not prescribe a code spacing."
      },
      {
       "id": "c-acie0504-3",
       "block": "column-cover-and-helical-credit",
       "src": "assets/civil-capsule-notes/acie0504-2.svg",
       "width": 720,
       "height": 420,
       "title": "Column cover and helical reinforcement",
       "caption": "Nominal cover to column bars is at least 40 mm and not less than the bar diameter; a helix that meets the clause 39.4 detailing earns a 1.05 strength factor."
      },
      {
       "id": "c-acie0504-4",
       "block": "isolated-footing-actions-and-checks",
       "src": "assets/civil-notes/acie0504-2.svg",
       "width": 720,
       "height": 420,
       "title": "Footing critical sections",
       "caption": "Bending, one-way shear and punching are checked at their specified sections, not at a single common perimeter."
      },
      {
       "id": "c-acie0504-5",
       "block": "combined-footings",
       "src": "assets/civil-notes/acie0504-3.svg",
       "width": 720,
       "height": 420,
       "title": "Unequal loads on a shared base",
       "caption": "Align the footing area's centroid with the intended resultant when using a uniform-pressure idealization."
      },
      {
       "id": "c-acie0504-6",
       "block": "prestressing-principle-and-grades",
       "src": "assets/civil-capsule-notes/acie0504-3.svg",
       "width": 720,
       "height": 420,
       "title": "Superposing prestress and load stresses",
       "caption": "An eccentric prestress stores compression, strongest at the bottom; load stresses then cancel part of it, so the section can stay entirely in compression."
      },
      {
       "id": "c-acie0504-7",
       "block": "tendon-profile-load-balancing",
       "src": "assets/civil-notes/acie0504-4.svg",
       "width": 720,
       "height": 420,
       "title": "Curved prestressing tendon",
       "caption": "Tendon curvature introduces balancing action along the beam; profile, force and end anchorage determine the effect."
      },
      {
       "id": "c-acie0504-8",
       "block": "prestress-losses",
       "src": "assets/civil-capsule-notes/acie0504-4.svg",
       "width": 720,
       "height": 420,
       "title": "Tendon stress from initial to effective prestress",
       "caption": "Elastic shortening, duct friction and anchorage seating act during tensioning and transfer; creep, shrinkage and relaxation reduce the stress further with time."
      }
     ],
     "ACiE0505": [
      {
       "id": "c-acie0505-1",
       "block": "bolted-connections-bearing-and-friction",
       "src": "assets/civil-notes/acie0505-2.svg",
       "width": 720,
       "height": 420,
       "title": "Straight and staggered net paths",
       "caption": "Compare credible rupture paths through a bolted plate rather than automatically choosing the shortest-looking line."
      },
      {
       "id": "c-acie0505-2",
       "block": "fillet-weld-geometry",
       "src": "assets/civil-notes/acie0505-3.svg",
       "width": 720,
       "height": 420,
       "title": "Fillet leg and throat",
       "caption": "For the ideal equal-leg triangular profile, the throat is perpendicular to the face and shorter than the leg."
      },
      {
       "id": "c-acie0505-3",
       "block": "laced-and-battened-columns",
       "src": "assets/civil-notes/acie0505-4.svg",
       "width": 720,
       "height": 420,
       "title": "Built-up laced column",
       "caption": "Lacing transfers shear between separated components so the assembly can act together; connection design remains essential."
      },
      {
       "id": "c-acie0505-4",
       "block": "tubular-sections-for-columns",
       "src": "assets/civil-notes/acie0505-1.svg",
       "width": 720,
       "height": 420,
       "title": "Common steel sections",
       "caption": "I, channel and angle sections place material differently relative to their principal axes."
      },
      {
       "id": "c-acie0505-5",
       "block": "purlins-and-rafter-actions",
       "src": "assets/civil-capsule-notes/acie0505-1.svg",
       "width": 720,
       "height": 420,
       "title": "Purlins at panel points versus between them",
       "caption": "Purlins placed at the top-chord joints keep the ideal truss members axial; a purlin between joints bends the rafter, which must then be designed as a beam-column."
      },
      {
       "id": "c-acie0505-6",
       "block": "truss-spacing-economy-and-span-choice",
       "src": "assets/civil-capsule-notes/acie0505-2.svg",
       "width": 720,
       "height": 420,
       "title": "Economical truss spacing",
       "caption": "If truss cost varies as A/s and purlin cost as B s², the total is least where truss cost is twice purlin cost; the ratio follows from those assumed cost laws."
      },
      {
       "id": "c-acie0505-7",
       "block": "beam-webs-under-concentrated-loads-and-shear",
       "src": "assets/civil-capsule-notes/acie0505-3.svg",
       "width": 720,
       "height": 420,
       "title": "Load dispersion into a steel beam web",
       "caption": "A concentrated load spreads through the flange and web; at 45 degrees the spread on each side equals the depth travelled, giving b + 2h for an 80 mm bearing and 120 mm depth."
      }
     ],
     "ACiE0506": [
      {
       "id": "c-acie0506-1",
       "block": "timber-grain-direction",
       "src": "assets/civil-notes/acie0506-1.svg",
       "width": 720,
       "height": 420,
       "title": "Timber grain directions",
       "caption": "Parallel-to-grain and transverse actions mobilize different properties; material direction is part of the design input."
      },
      {
       "id": "c-acie0506-2",
       "block": "solid-timber-columns",
       "src": "assets/civil-capsule-notes/acie0506-1.svg",
       "width": 720,
       "height": 420,
       "title": "Slenderness of a solid timber column",
       "caption": "IS 883:2016 limits the unsupported length over the least lateral dimension, S/d, to 50 for pin-ended solid columns: a 3.6 m post of 100 × 150 mm gives 36."
      },
      {
       "id": "c-acie0506-3",
       "block": "masonry-eccentric-compression",
       "src": "assets/civil-capsule-notes/acie0506-2.svg",
       "width": 720,
       "height": 420,
       "title": "Stress across a wall under eccentric load",
       "caption": "With e within t/6 both faces stay in compression: an average of 0.60 MPa at e = t/24 gives 0.75 and 0.45 MPa at the two faces."
      },
      {
       "id": "c-acie0506-4",
       "block": "cavity-wall-effective-thickness",
       "src": "assets/civil-capsule-notes/acie0506-3.svg",
       "width": 720,
       "height": 420,
       "title": "Effective thickness of a tied cavity wall",
       "caption": "In the exercise model the effective thickness is the larger of the stronger leaf and two-thirds of both leaves combined; the cavity itself is not added."
      },
      {
       "id": "c-acie0506-5",
       "block": "bed-joint-shear",
       "src": "assets/civil-notes/acie0506-3.svg",
       "width": 720,
       "height": 420,
       "title": "Masonry failure modes",
       "caption": "Sliding along joints, diagonal cracking and local crushing are distinct mechanisms, not one universal brick-strength limit."
      },
      {
       "id": "c-acie0506-6",
       "block": "low-strength-masonry-and-bands",
       "src": "assets/civil-notes/acie0506-4.svg",
       "width": 720,
       "height": 420,
       "title": "Continuity of wall bands",
       "caption": "Continuous bands and connected corners support a coherent load path; this schematic is not a substitute for applicable NBC details."
      },
      {
       "id": "c-acie0506-7",
       "block": "building-act-and-nbc",
       "src": "assets/civil-capsule-notes/acie0506-4.svg",
       "width": 720,
       "height": 420,
       "title": "Two layers of building regulation in Nepal",
       "caption": "The Building Act and its implementation framework supply the legal basis, while the Nepal National Building Code organizes the technical provisions."
      }
     ],
     "ACiE0601": [
      {
       "id": "c-acie0601-1",
       "block": "sources-classification-and-storm-response",
       "src": "assets/civil-notes/acie0601-1.svg",
       "width": 720,
       "height": 420,
       "title": "Aquifer, recharge and abstraction",
       "caption": "Storage and transmission depend on the formation and boundaries; a clear well sample does not prove safe water."
      },
      {
       "id": "c-acie0601-2",
       "block": "rainwater-roof-harvesting-and-stepwells",
       "src": "assets/civil-capsule-notes/acie0601-1.svg",
       "width": 720,
       "height": 420,
       "title": "Roof rainwater harvesting and a stepwell",
       "caption": "Direct roof harvesting is recognised by its pathway: roof catchment, gutter and downpipe, first-flush diverter and covered tank. A stepwell is named for steps down to a changing water level, whatever its source."
      },
      {
       "id": "c-acie0601-3",
       "block": "turbidity-and-colour-measurement",
       "src": "assets/civil-capsule-notes/acie0601-2.svg",
       "width": 720,
       "height": 420,
       "title": "Nephelometer for turbidity, tintometer for colour",
       "caption": "A nephelometer reads light scattered at 90 degrees and reports NTU; a tintometer matches filtered water against platinum-cobalt standards for true colour. Neither is a mass concentration."
      },
      {
       "id": "c-acie0601-4",
       "block": "solids-fractions-and-particle-size",
       "src": "assets/civil-notes/acie0601-2.svg",
       "width": 720,
       "height": 420,
       "title": "Three impurity forms",
       "caption": "Suspended particles, stable colloids and dissolved species need different treatment barriers; sizes here are schematic."
      },
      {
       "id": "c-acie0601-5",
       "block": "ph-alkalinity-and-algal-ponds",
       "src": "assets/civil-capsule-notes/acie0601-3.svg",
       "width": 720,
       "height": 420,
       "title": "Daily pH cycle in a sunlit algal pond",
       "caption": "Photosynthesis removes CO2 by day so pH tends to rise; respiration returns it at night so pH falls. With CO2 exchange alone, total alkalinity stays roughly constant."
      },
      {
       "id": "c-acie0601-6",
       "block": "coliform-methods-and-temperature-classes",
       "src": "assets/civil-capsule-notes/acie0601-4.svg",
       "width": 720,
       "height": 420,
       "title": "Membrane filtration and multiple-tube fermentation",
       "caption": "Membrane filtration counts colonies directly as CFU but turbid water can clog the membrane; multiple-tube fermentation infers a most probable number from the pattern of gas-positive tubes."
      },
      {
       "id": "c-acie0601-7",
       "block": "coliform-methods-and-temperature-classes",
       "src": "assets/civil-capsule-notes/acie0601-5.svg",
       "width": 720,
       "height": 420,
       "title": "Bacterial temperature classes",
       "caption": "Bacteria are grouped by the temperature at which they grow best. An organism with a growth optimum near 55 °C is thermophilic; the quoted bands are approximate and overlap."
      },
      {
       "id": "c-acie0601-8",
       "block": "water-related-diseases-and-transmission",
       "src": "assets/civil-capsule-notes/acie0601-6.svg",
       "width": 720,
       "height": 420,
       "title": "Matching the barrier to the transmission route",
       "caption": "Cholera spreads by ingestion and needs source protection, treatment and safe storage; trachoma is water-washed and needs enough clean water for washing. Pandemic describes extent, not severity."
      },
      {
       "id": "c-acie0601-9",
       "block": "per-capita-demand-and-population-forecasts",
       "src": "assets/civil-notes/acie0601-4.svg",
       "width": 720,
       "height": 420,
       "title": "Demand varies through the day",
       "caption": "A schematic demand pattern separates an average from short peaks; a design factor needs a stated time basis."
      }
     ],
     "ACiE0602": [
      {
       "id": "c-acie0602-1",
       "block": "river-intake-siting-and-submerged-intakes",
       "src": "assets/civil-notes/acie0602-1.svg",
       "width": 720,
       "height": 420,
       "title": "Protected river intake",
       "caption": "A screened opening, approach conditions and maintainable access work together; flood and low-water levels need separate checks."
      },
      {
       "id": "c-acie0602-2",
       "block": "distribution-layouts-dead-ends-and-flushing",
       "src": "assets/civil-notes/acie0602-2.svg",
       "width": 720,
       "height": 420,
       "title": "Branch versus looped network",
       "caption": "A loop offers an alternative route, but actual circulation and pressure still depend on hydraulic conditions and valve status."
      },
      {
       "id": "c-acie0602-3",
       "block": "valves-altitude-scour-and-air-release",
       "src": "assets/civil-capsule-notes/acie0602-1.svg",
       "width": 720,
       "height": 420,
       "title": "Where valves sit on a supply main",
       "caption": "An air-release valve vents air at the summit, a scour valve drains the low point to a protected discharge, an altitude valve shuts the tank inlet at the top level and a foot valve keeps the pump primed."
      },
      {
       "id": "c-acie0602-4",
       "block": "fittings-and-thermal-movement",
       "src": "assets/civil-capsule-notes/acie0602-2.svg",
       "width": 720,
       "height": 420,
       "title": "Pipe fittings and free thermal movement",
       "caption": "Fittings are named by what they do: a reducer joins two diameters, a tee adds a branch, elbows turn the run. A free 30 m steel pipe warming by 40 °C extends 14.4 mm."
      },
      {
       "id": "c-acie0602-5",
       "block": "pipe-walls-internal-and-external-pressure",
       "src": "assets/civil-capsule-notes/acie0602-3.svg",
       "width": 720,
       "height": 420,
       "title": "Pipe wall under internal and external pressure",
       "caption": "Internal pressure puts the wall in hoop tension, checked as pD/2t against allowable tension. External pressure on an emptied thin pipe can buckle it into an oval, a separate stability check."
      },
      {
       "id": "c-acie0602-6",
       "block": "series-continuity-and-local-losses",
       "src": "assets/civil-capsule-notes/acie0602-4.svg",
       "width": 720,
       "height": 420,
       "title": "Continuity through pipes in series",
       "caption": "The same discharge passes every section. Halving the diameter quarters the area and multiplies the velocity by four; a valve adds a local loss K V²/2g in metres of head."
      },
      {
       "id": "c-acie0602-7",
       "block": "loop-energy-balance-and-hardy-cross",
       "src": "assets/civil-capsule-notes/acie0602-5.svg",
       "width": 720,
       "height": 420,
       "title": "Loop energy balance and a Hardy Cross correction",
       "caption": "Signed head drops around a closed loop sum to zero, so +8 m and +5 m need -13 m on the third side. For two identical parallel pipes with trial flows 6 and 4, the correction -1 gives 5 and 5."
      },
      {
       "id": "c-acie0602-8",
       "block": "gravity-supply-and-transmission-mains",
       "src": "assets/civil-notes/acie0602-3.svg",
       "width": 720,
       "height": 420,
       "title": "Atmospheric pressure break",
       "caption": "An open tank resets the downstream supply head to its water-surface elevation; it is not complete transient protection."
      },
      {
       "id": "c-acie0602-9",
       "block": "service-reservoir-breakdown-reserve",
       "src": "assets/civil-notes/acie0602-4.svg",
       "width": 720,
       "height": 420,
       "title": "Cumulative balancing storage",
       "caption": "The six-period example ranges from +24 to -16 cubic metres of imbalance, requiring a 40 cubic metre usable balancing band."
      }
     ],
     "ACiE0603": [
      {
       "id": "c-acie0603-1",
       "block": "coarse-screens-dimensions-and-open-area",
       "src": "assets/civil-capsule-notes/acie0603-1.svg",
       "width": 720,
       "height": 420,
       "title": "Coarse bar screen: inclination, bars and open area",
       "caption": "A coarse screen of 15 mm bars with 50 mm clear gaps at 55 degrees lies inside all three bands; only the gap of each 65 mm pitch is open, an open fraction of 76.9 percent."
      },
      {
       "id": "c-acie0603-2",
       "block": "plain-sedimentation-overflow-rate",
       "src": "assets/civil-notes/acie0603-2.svg",
       "width": 720,
       "height": 420,
       "title": "Particle settling trajectory",
       "caption": "Horizontal travel time competes with vertical fall time in the ideal discrete-settling model."
      },
      {
       "id": "c-acie0603-3",
       "block": "plain-sedimentation-overflow-rate",
       "src": "assets/civil-notes/acie0603-5.svg",
       "width": 720,
       "height": 420,
       "title": "Plan area, flow area and detention",
       "caption": "The assumed 30 m by 10 m by 3 m basin has a 300 square metre plan area but only a 30 square metre flow cross-section. At 300 cubic metres per hour, the three hydraulic ratios give different results."
      },
      {
       "id": "c-acie0603-4",
       "block": "short-circuiting-and-tracer-tests",
       "src": "assets/civil-notes/acie0603-6.svg",
       "width": 720,
       "height": 420,
       "title": "Nominal detention versus effective contact",
       "caption": "The illustrative tracer response has t10 of 15 minutes, half the nominal 30-minute detention. At constant free chlorine 0.60 mg/L, CT is 9 mg min/L; this is not a validated pathogen-removal claim."
      },
      {
       "id": "c-acie0603-5",
       "block": "coagulation-jar-tests-and-surfactants",
       "src": "assets/civil-notes/acie0603-1.svg",
       "width": 720,
       "height": 420,
       "title": "Conventional surface-water barriers",
       "caption": "Coagulation, flocculation, separation and disinfection have different functions; actual raw-water risks determine the selected train."
      },
      {
       "id": "c-acie0603-6",
       "block": "rapid-and-slow-sand-filters",
       "src": "assets/civil-notes/acie0603-3.svg",
       "width": 720,
       "height": 420,
       "title": "Slow sand filter section",
       "caption": "Supernatant water lies above the biological surface and fine sand, with graded support and collection below."
      },
      {
       "id": "c-acie0603-7",
       "block": "bleaching-powder-formula-available-chlorine-and-ph",
       "src": "assets/civil-capsule-notes/acie0603-2.svg",
       "width": 720,
       "height": 420,
       "title": "Bleaching powder versus chlorine gas, and available chlorine",
       "caption": "Hypochlorite hydrolysis releases hydroxide, so bleaching powder tends to raise the pH of weakly buffered water, while chlorine gas forms acid and lowers it. 10 kg at 35 percent holds 3.5 kg as Cl2."
      },
      {
       "id": "c-acie0603-8",
       "block": "disinfection-evidence-ph-and-oxygen",
       "src": "assets/civil-notes/acie0603-4.svg",
       "width": 720,
       "height": 420,
       "title": "Breakpoint chlorination concept",
       "caption": "Demand and combined residual precede the rise of free residual; the qualitative curve is not a dosing prescription."
      },
      {
       "id": "c-acie0603-9",
       "block": "temporary-and-permanent-hardness",
       "src": "assets/civil-notes/acie0601-3.svg",
       "width": 720,
       "height": 420,
       "title": "A common hardness basis",
       "caption": "Convert calcium and magnesium concentrations to the same CaCO3-equivalent basis before adding them."
      },
      {
       "id": "c-acie0603-10",
       "block": "aeration-oxygen-solubility-and-algae-control",
       "src": "assets/civil-capsule-notes/acie0603-3.svg",
       "width": 720,
       "height": 420,
       "title": "Oxygen saturation falls as water warms",
       "caption": "Air-saturated fresh water at sea level holds about 14.6 mg/L of oxygen near 0 °C, 9.1 mg/L at 20 °C and 7.6 mg/L at 30 °C. The gap between saturation and the present value drives aeration."
      }
     ],
     "ACiE0604": [
      {
       "id": "c-acie0604-1",
       "block": "water-carriage-and-sanitary-flow",
       "src": "assets/civil-notes/acie0604-1.svg",
       "width": 720,
       "height": 420,
       "title": "Separate and combined systems",
       "caption": "Separate networks keep intended sanitary and storm flows distinct; a combined network conveys both in one system."
      },
      {
       "id": "c-acie0604-2",
       "block": "sewer-network-roles",
       "src": "assets/civil-capsule-notes/acie0604-1.svg",
       "width": 720,
       "height": 420,
       "title": "Sewer network roles and an interceptor",
       "caption": "House connections serve one premises and feed street laterals; laterals feed mains, which lead on to trunks and treatment. An interceptor along the river collects old outfalls and sends dry-weather flow to treatment."
      },
      {
       "id": "c-acie0604-3",
       "block": "partial-flow-circular-sewers",
       "src": "assets/civil-notes/acie0604-2.svg",
       "width": 720,
       "height": 420,
       "title": "Partly full circular sewer",
       "caption": "The wetted angle, water depth and perimeter are linked by circular geometry; the air space is not part of the wetted perimeter."
      },
      {
       "id": "c-acie0604-4",
       "block": "partial-flow-circular-sewers",
       "src": "assets/civil-notes/acie0604-4.svg",
       "width": 720,
       "height": 420,
       "title": "Partial-flow capacity",
       "caption": "For constant Manning roughness and slope, the maximum discharge occurs before the circular section is completely full."
      },
      {
       "id": "c-acie0604-5",
       "block": "self-cleansing-velocity-and-gradient",
       "src": "assets/civil-capsule-notes/acie0604-2.svg",
       "width": 720,
       "height": 420,
       "title": "Choosing the invert gradient and checking self-cleansing",
       "caption": "The invert follows falling ground to save excavation, with a drop where the ground is too steep. At 0.30 m³/s through 0.50 m² the velocity is 0.60 m/s, failing an adopted 0.75 m/s check."
      },
      {
       "id": "c-acie0604-6",
       "block": "egg-shaped-sewers-and-inverted-siphons",
       "src": "assets/civil-capsule-notes/acie0604-3.svg",
       "width": 720,
       "height": 420,
       "title": "Egg-shaped and circular sewers at low flow",
       "caption": "At the same small dry-weather flow, the narrow invert of an egg-shaped sewer keeps the flow deeper than a circular sewer does, helping solids transport; the wide top carries storm flow."
      },
      {
       "id": "c-acie0604-7",
       "block": "egg-shaped-sewers-and-inverted-siphons",
       "src": "assets/civil-capsule-notes/acie0604-4.svg",
       "width": 720,
       "height": 420,
       "title": "Inverted siphon beneath a river",
       "caption": "A depressed sewer carries flow under a river in barrels that run full under pressure, driven by upstream head. It is not a true siphon over a summit, and solids can settle in the low barrels."
      },
      {
       "id": "c-acie0604-8",
       "block": "manholes-depth-covers-and-shape",
       "src": "assets/civil-notes/acie0604-3.svg",
       "width": 720,
       "height": 420,
       "title": "Drop connection",
       "caption": "A higher incoming invert needs a designed connection to the lower channel; access and energy effects require separate consideration."
      }
     ],
     "ACiE0605": [
      {
       "id": "c-acie0605-1",
       "block": "bod-cod-ratios-and-ammoniacal-nitrogen",
       "src": "assets/civil-notes/acie0605-1.svg",
       "width": 720,
       "height": 420,
       "title": "BOD sample and dilution",
       "caption": "The wastewater volume fraction and bottle oxygen depletion belong to different measurement bases; seed demand is corrected when applicable."
      },
      {
       "id": "c-acie0605-2",
       "block": "bod-cod-ratios-and-ammoniacal-nitrogen",
       "src": "assets/civil-notes/acie0605-5.svg",
       "width": 720,
       "height": 420,
       "title": "Worked BOD dilution",
       "caption": "A 2 percent sample fraction and 5 mg/L bottle oxygen depletion give 250 mg/L BOD of the original wastewater, assuming no seed or blank demand."
      },
      {
       "id": "c-acie0605-3",
       "block": "removal-efficiency-and-stages-in-series",
       "src": "assets/civil-capsule-notes/acie0605-1.svg",
       "width": 720,
       "height": 420,
       "title": "Removal by two stages in series",
       "caption": "Each stage removes a fraction of the load reaching it: 60 percent then 50 percent of the remainder leaves 0.4 × 0.5 = 20 percent, an overall removal of 80 percent, not 110."
      },
      {
       "id": "c-acie0605-4",
       "block": "grit-chambers-settling-path-density-and-size",
       "src": "assets/civil-capsule-notes/acie0605-2.svg",
       "width": 720,
       "height": 420,
       "title": "Grit particle path in an ideal chamber",
       "caption": "A particle starting 1.0 m up and settling at 0.020 m/s takes 50 s to land, drifting 0.30 × 50 = 15 m along the chamber. Quartz-like grit of G = 2.65 has a density of 2650 kg/m³."
      },
      {
       "id": "c-acie0605-5",
       "block": "trickling-filter-media-and-hydraulic-loading",
       "src": "assets/civil-capsule-notes/acie0605-3.svg",
       "width": 720,
       "height": 420,
       "title": "Trickling filter with recirculation",
       "caption": "Wastewater and recycled flow are spread by a rotary arm over durable media carrying a biofilm. When the loading includes recycle, area = (1200 + 1000)/22 = 100 m²."
      },
      {
       "id": "c-acie0605-6",
       "block": "attached-and-suspended-growth",
       "src": "assets/civil-notes/acie0605-2.svg",
       "width": 720,
       "height": 420,
       "title": "Activated-sludge circulation",
       "caption": "RAS returns biomass to the reactor while WAS removes solids from the system; final effluent follows a separate path."
      },
      {
       "id": "c-acie0605-7",
       "block": "stream-self-purification-zones-and-do",
       "src": "assets/civil-capsule-notes/acie0605-4.svg",
       "width": 720,
       "height": 420,
       "title": "Dissolved-oxygen sag and the self-purification zones",
       "caption": "Below a large biodegradable discharge the idealised zones are degradation, active decomposition where DO can fall to nearly zero, recovery and clean water."
      },
      {
       "id": "c-acie0605-8",
       "block": "streeter-phelps-oxygen-sag",
       "src": "assets/civil-notes/acie0605-3.svg",
       "width": 720,
       "height": 420,
       "title": "Oxygen sag and recovery",
       "caption": "The illustrative constant-coefficient model reaches minimum DO where deoxygenation and reaeration balance."
      },
      {
       "id": "c-acie0605-9",
       "block": "sludge-solids-and-dewatering-mass-balance",
       "src": "assets/civil-capsule-notes/acie0605-5.svg",
       "width": 720,
       "height": 420,
       "title": "Dewatering conserves the dry solids",
       "caption": "Dewatering 1000 kg of sludge from 95 to 90 percent water keeps the 50 kg of dry solids, so the wet mass halves to 500 kg; the volume halves only if bulk density is unchanged."
      },
      {
       "id": "c-acie0605-10",
       "block": "biogas-composition-and-upgrading",
       "src": "assets/civil-capsule-notes/acie0605-6.svg",
       "width": 720,
       "height": 420,
       "title": "Raw biogas and upgraded biomethane",
       "caption": "Raw digester gas is roughly 65 percent methane and 35 percent carbon dioxide by volume. Upgrading removes CO2 and specified impurities to give methane-rich biomethane."
      },
      {
       "id": "c-acie0605-11",
       "block": "septic-tank-detention-and-useful-volume",
       "src": "assets/civil-notes/acie0605-4.svg",
       "width": 720,
       "height": 420,
       "title": "Septic liquid and solids space",
       "caption": "Scum, working liquid and accumulated sludge occupy different zones; the effluent still needs an appropriate downstream treatment or dispersal route."
      },
      {
       "id": "c-acie0605-12",
       "block": "septic-depth-floor-falls-and-vip-vents",
       "src": "assets/civil-capsule-notes/acie0605-7.svg",
       "width": 720,
       "height": 420,
       "title": "Septic-tank height and floor fall; VIP latrine airflow",
       "caption": "Internal height is liquid depth plus freeboard, 1.20 + 0.30 = 1.50 m; a 1 in 10 fall over 2.0 m is 0.20 m toward the sludge point. A VIP latrine draws air down the pit and out of a screened vent."
      }
     ],
     "ACiE0606": [
      {
       "id": "c-acie0606-1",
       "block": "purpose-of-eia-sea-and-the-sdgs",
       "src": "assets/civil-capsule-notes/acie0606-1.svg",
       "width": 720,
       "height": 420,
       "title": "Strategic and project assessment",
       "caption": "SEA evaluates policies, plans and programmes before schemes are chosen; project EIA assesses a specific proposal, comparing alternatives, predicting effects and designing mitigation before the decision."
      },
      {
       "id": "c-acie0606-2",
       "block": "nepal-instruments-and-study-categories",
       "src": "assets/civil-notes/acie0606-1.svg",
       "width": 720,
       "height": 420,
       "title": "Assessment-category selection",
       "caption": "Screening selects the applicable BES, IEE or EIA route; they are not three compulsory serial studies."
      },
      {
       "id": "c-acie0606-3",
       "block": "screening-scoping-triggers-and-participation",
       "src": "assets/civil-notes/acie0606-2.svg",
       "width": 720,
       "height": 420,
       "title": "Assessment and participation",
       "caption": "Scoping and ToR precede the study, while consultation and the public hearing contribute during report preparation."
      },
      {
       "id": "c-acie0606-4",
       "block": "toxicity-assessment-and-plant-noise",
       "src": "assets/civil-capsule-notes/acie0606-2.svg",
       "width": 720,
       "height": 420,
       "title": "Risk assessment steps, and noise from a treatment plant",
       "caption": "Hazard identification, dose-response, exposure assessment and risk characterisation are assessment steps; risk management is the policy decision. Blowers, pumps and generators make plant noise a real impact."
      },
      {
       "id": "c-acie0606-5",
       "block": "hazard-classes-geological-and-climatic",
       "src": "assets/civil-capsule-notes/acie0606-3.svg",
       "width": 720,
       "height": 420,
       "title": "Hazard chains: geological and climatic",
       "caption": "An earthquake that triggers a landslide is a chain of two geological hazards and the blocked road is the exposed asset. Drought is climatic, but wildfire risk also depends on fuel, wind, ignition and land management."
      },
      {
       "id": "c-acie0606-6",
       "block": "mitigation-and-expected-annual-loss",
       "src": "assets/civil-notes/acie0606-3.svg",
       "width": 720,
       "height": 420,
       "title": "Conditions contributing to disaster risk",
       "caption": "Hazard, exposure, vulnerability and capacity inform risk; the drawing is not a universal multiplication formula."
      },
      {
       "id": "c-acie0606-7",
       "block": "vulnerability-analysis-and-drrm-institutions",
       "src": "assets/civil-notes/acie0606-4.svg",
       "width": 720,
       "height": 420,
       "title": "Linked disaster-management actions",
       "caption": "Mitigation, preparedness, response and recovery interact; they are not isolated stages that stop when the next begins."
      }
     ],
     "ACiE0701": [
      {
       "id": "c-acie0701-1",
       "block": "effective-rainfall-and-net-requirement",
       "src": "assets/civil-capsule-notes/acie0701-1.svg",
       "width": 720,
       "height": 420,
       "title": "Effective rainfall and the net irrigation requirement",
       "caption": "Only the part of rain the crop can use counts: of 80 mm, 50 mm is effective. With crop ET of 150 mm, the net irrigation requirement is 150 - 50 = 100 mm, not 70 mm."
      },
      {
       "id": "c-acie0701-2",
       "block": "effective-rainfall-and-net-requirement",
       "src": "assets/civil-capsule-notes/acie0701-2.svg",
       "width": 720,
       "height": 420,
       "title": "Net irrigation delta of four crops",
       "caption": "Net delta is crop ET minus effective rain over matched periods: rice 1.20 m, tobacco 0.50 m, wheat 0.45 m and banana 1.40 m, so banana governs this illustrative budget."
      },
      {
       "id": "c-acie0701-3",
       "block": "crop-period-base-period-and-duty",
       "src": "assets/civil-notes/acie0701-2.svg",
       "width": 720,
       "height": 420,
       "title": "Flow, duration, volume and area",
       "caption": "A discharge acting for a period gives a volume; spreading that volume over the served area gives an equivalent depth."
      },
      {
       "id": "c-acie0701-4",
       "block": "soil-water-classes",
       "src": "assets/civil-capsule-notes/acie0701-3.svg",
       "width": 720,
       "height": 420,
       "title": "Gravitational, capillary and hygroscopic soil water",
       "caption": "Gravitational water drains from large pores; capillary water is held by meniscus suction in fine pores and is largely available between field capacity and wilting; hygroscopic films are unavailable."
      },
      {
       "id": "c-acie0701-5",
       "block": "available-water-depletion-and-interval",
       "src": "assets/civil-notes/acie0701-1.svg",
       "width": 720,
       "height": 420,
       "title": "Root-zone water storage",
       "caption": "Field capacity and permanent wilting point bound an elementary available-water store; allowable depletion is crop- and condition-dependent."
      },
      {
       "id": "c-acie0701-6",
       "block": "available-water-depletion-and-interval",
       "src": "assets/civil-notes/acie0701-5.svg",
       "width": 720,
       "height": 420,
       "title": "Worked irrigation interval",
       "caption": "From an 80 mm available store, 55 percent remaining means 36 mm depleted. At constant use of 3 mm/day, that takes 12 days without other water gains or losses."
      },
      {
       "id": "c-acie0701-7",
       "block": "factors-controlling-irrigation-frequency",
       "src": "assets/civil-notes/acie0701-4.svg",
       "width": 720,
       "height": 420,
       "title": "Irrigation timing by depletion",
       "caption": "A schematic depletion trace shows irrigation restoring the root-zone store; the trigger must be chosen for the actual crop and soil."
      },
      {
       "id": "c-acie0701-8",
       "block": "consumptive-use",
       "src": "assets/civil-capsule-notes/acie0701-4.svg",
       "width": 720,
       "height": 420,
       "title": "Consumptive use: evaporation plus transpiration",
       "caption": "Consumptive use counts water returned to the atmosphere: 2 mm/day evaporation plus 4 mm/day transpiration gives 6 mm/day. Deep percolation leaves the root zone but is not consumed."
      },
      {
       "id": "c-acie0701-9",
       "block": "gross-supply-and-kor-discharge",
       "src": "assets/civil-notes/acie0701-3.svg",
       "width": 720,
       "height": 420,
       "title": "Delivery and storage boundaries",
       "caption": "Source release, field delivery and root-zone storage have different losses and efficiency denominators."
      },
      {
       "id": "c-acie0701-10",
       "block": "governing-capacity-and-crop-ratio",
       "src": "assets/civil-capsule-notes/acie0701-5.svg",
       "width": 720,
       "height": 420,
       "title": "Governing canal capacity and the crop ratio",
       "caption": "With non-overlapping seasons, capacity follows the larger concurrent total: Rabi 2.4 + 0.6 = 3.0 and Kharif 3.0 + 0.8 = 3.8 cumecs, so 3.8 governs, not 6.8. The crop ratio 2400/1600 = 1.5."
      }
     ],
     "ACiE0702": [
      {
       "id": "c-acie0702-1",
       "block": "canal-classes-and-network-roles",
       "src": "assets/civil-capsule-notes/acie0702-1.svg",
       "width": 720,
       "height": 420,
       "title": "Canal network roles, and inundation versus perennial supply",
       "caption": "The main canal conveys bulk supply from the headworks to branches and distributaries, which feed minors, watercourses and farms. An inundation canal runs only when flood stages lift the river above its sill."
      },
      {
       "id": "c-acie0702-2",
       "block": "canal-alignment-choices",
       "src": "assets/civil-capsule-notes/acie0702-2.svg",
       "width": 720,
       "height": 420,
       "title": "Ridge, contour and side-slope canal alignments",
       "caption": "A ridge canal on the watershed commands both banks while natural drains fall away from it; a contour canal crosses every drain; a side-slope canal runs roughly parallel to the drainage."
      },
      {
       "id": "c-acie0702-3",
       "block": "earthwork-and-section-geometry",
       "src": "assets/civil-notes/acie0702-1.svg",
       "width": 720,
       "height": 420,
       "title": "Canal section measurements",
       "caption": "Flow depth, top width and wetted perimeter determine different hydraulic section properties."
      },
      {
       "id": "c-acie0702-4",
       "block": "freeboard-and-lining-benefits",
       "src": "assets/civil-notes/acie0702-4.svg",
       "width": 720,
       "height": 420,
       "title": "Lining and seepage paths",
       "caption": "A sound lining can reduce seepage; joints, uplift and the condition of the support remain part of the design."
      },
      {
       "id": "c-acie0702-5",
       "block": "aggradation-and-bed-load",
       "src": "assets/civil-capsule-notes/acie0702-3.svg",
       "width": 720,
       "height": 420,
       "title": "Aggradation and the modes of sediment transport",
       "caption": "When more sediment enters a reach than leaves, storage grows and the bed rises. Bed load rolls, slides and saltates along the bed; suspended load is held up by turbulence; dissolved load is in solution."
      },
      {
       "id": "c-acie0702-6",
       "block": "kennedy-critical-velocity-method",
       "src": "assets/civil-notes/acie0702-2.svg",
       "width": 720,
       "height": 420,
       "title": "Depth and critical-velocity concept",
       "caption": "The qualitative Kennedy relation links depth to a permissible sediment-carrying velocity under an empirical convention."
      },
      {
       "id": "c-acie0702-7",
       "block": "tractive-force-and-scour",
       "src": "assets/civil-notes/acie0702-3.svg",
       "width": 720,
       "height": 420,
       "title": "Boundary tractive action",
       "caption": "The downslope component of water weight is balanced by boundary shear in steady uniform flow."
      },
      {
       "id": "c-acie0702-8",
       "block": "lined-canal-sections-and-manning",
       "src": "assets/civil-capsule-notes/acie0702-4.svg",
       "width": 720,
       "height": 420,
       "title": "Lined canal sections sized with Manning",
       "caption": "Hydraulic radius uses the wetted perimeter only: a 4 m by 2 m rectangle has R = 8/8 = 1 m and carries 8.00 cumecs. For 90 cumecs at 2 m/s, A = 45 m² and a 3 m deep, 1.5:1 trapezoid needs b = 10.5 m."
      }
     ],
     "ACiE0703": [
      {
       "id": "c-acie0703-1",
       "block": "weir-and-barrage-functions",
       "src": "assets/civil-capsule-notes/acie0703-1.svg",
       "width": 720,
       "height": 420,
       "title": "Weir and barrage: two ways to hold the pond",
       "caption": "A weir raises the pond mainly with a fixed raised crest; a barrage holds it with gates over low sills that can open wide to pass floods. Both provide diversion head for a gravity canal."
      },
      {
       "id": "c-acie0703-2",
       "block": "weir-crest-profiles",
       "src": "assets/civil-notes/acie0703-4.svg",
       "width": 720,
       "height": 420,
       "title": "Downstream energy dissipation",
       "caption": "A stilling arrangement must match incoming supercritical flow and the available tailwater, not just a chosen basin length."
      },
      {
       "id": "c-acie0703-3",
       "block": "headworks-layout-components",
       "src": "assets/civil-notes/acie0703-1.svg",
       "width": 720,
       "height": 420,
       "title": "Diversion headworks in plan",
       "caption": "The regulator takes canal flow beside the divide wall while the undersluice provides a separate sediment-management route."
      },
      {
       "id": "c-acie0703-4",
       "block": "sediment-control-at-the-intake",
       "src": "assets/civil-notes/acie0703-2.svg",
       "width": 720,
       "height": 420,
       "title": "Exclusion and extraction",
       "caption": "An excluder acts before canal entry, whereas an extractor removes sediment after the water has entered the canal."
      },
      {
       "id": "c-acie0703-5",
       "block": "failure-on-pervious-foundations",
       "src": "assets/civil-capsule-notes/acie0703-2.svg",
       "width": 720,
       "height": 420,
       "title": "Piping and uplift under a floor on sand",
       "caption": "Seepage emerging at an unprotected exit can wash out grains and open channels backwards under the floor (piping). Separately, pressure beneath an intact floor can exceed its weight and lift it (uplift)."
      },
      {
       "id": "c-acie0703-6",
       "block": "bligh-and-lane-creep-theories",
       "src": "assets/civil-capsule-notes/acie0703-3.svg",
       "width": 720,
       "height": 420,
       "title": "Creep length: Bligh and Lane",
       "caption": "For a 42 m floor with thin cutoffs 4 m and 7 m deep, both faces of each cutoff count: Bligh gives 8 + 42 + 14 = 64 m, while Lane counts the floor at one-third, 22 + 14 = 36 m."
      },
      {
       "id": "c-acie0703-7",
       "block": "khosla-exit-gradient",
       "src": "assets/civil-capsule-notes/acie0703-4.svg",
       "width": 720,
       "height": 420,
       "title": "Khosla exit gradient for a floor with an end pile",
       "caption": "For an ideal floor of length b with one downstream pile of depth d, GE = H/(π d √λ) with λ set by b/d. With H = 6 m, d = 4 m and λ = 1.5, GE = 0.390; as d tends to zero it grows without bound."
      },
      {
       "id": "c-acie0703-8",
       "block": "downstream-cutoffs",
       "src": "assets/civil-capsule-notes/acie0703-5.svg",
       "width": 720,
       "height": 420,
       "title": "Downstream sheet pile and design scour",
       "caption": "A downstream sheet pile lengthens the seepage emergence path so the toe exit gradient falls. Its depth is set by the permissible exit gradient and by embedment below the design scour level."
      },
      {
       "id": "c-acie0703-9",
       "block": "uplift-flotation-and-sliding",
       "src": "assets/civil-notes/acie0703-3.svg",
       "width": 720,
       "height": 420,
       "title": "Uplift beneath an impervious floor",
       "caption": "Compare water pressure above and below the floor with its weight; every head needs the same elevation datum."
      }
     ],
     "ACiE0704": [
      {
       "id": "c-acie0704-1",
       "block": "river-classification-and-meandering",
       "src": "assets/civil-notes/acie0704-1.svg",
       "width": 720,
       "height": 420,
       "title": "Meander erosion and deposition",
       "caption": "Outer-bank attack and inner-bank deposition are typical tendencies; real river response depends on the sediment and flow regime."
      },
      {
       "id": "c-acie0704-2",
       "block": "dominant-discharge",
       "src": "assets/civil-capsule-notes/acie0704-1.svg",
       "width": 720,
       "height": 420,
       "title": "Dominant discharge: rate times duration",
       "caption": "A frequent class carrying 10 kg/s for 100 hours a year moves 3.6 million kg, twice the 1.8 million kg of a rarer 50 kg/s class lasting 10 hours, so frequent moderate flows do more channel-forming work."
      },
      {
       "id": "c-acie0704-3",
       "block": "scour-depth-below-hfl",
       "src": "assets/civil-capsule-notes/acie0704-2.svg",
       "width": 720,
       "height": 420,
       "title": "Scour depth measured below the high flood level",
       "caption": "Lacey scour depth is measured below HFL: 5 m below RL 100 puts the scoured bed at RL 95, 2 m below an existing bed at RL 97. At a right-angle bend, twice a 3.0 m mean depth below HFL 104.0 gives RL 98.0."
      },
      {
       "id": "c-acie0704-4",
       "block": "guide-banks-and-nose-scour",
       "src": "assets/civil-notes/acie0704-3.svg",
       "width": 720,
       "height": 420,
       "title": "Guide banks at a crossing",
       "caption": "Guide banks align flood flow toward the opening; their heads, shanks, toes and approach conditions need coordinated protection."
      },
      {
       "id": "c-acie0704-5",
       "block": "launching-aprons",
       "src": "assets/civil-notes/acie0704-4.svg",
       "width": 720,
       "height": 420,
       "title": "Launching apron concept",
       "caption": "Loose protection can launch into developing scour; adequate volume, stone stability and filtering remain essential."
      },
      {
       "id": "c-acie0704-6",
       "block": "spurs-orientation-and-permeability",
       "src": "assets/civil-notes/acie0704-2.svg",
       "width": 720,
       "height": 420,
       "title": "Spur orientation",
       "caption": "Upstream-pointing, normal and downstream-pointing spurs are distinguished relative to the actual flow direction."
      }
     ],
     "ACiE0705": [
      {
       "id": "c-acie0705-1",
       "block": "regulators-and-escapes",
       "src": "assets/civil-notes/acie0705-1.svg",
       "width": 720,
       "height": 420,
       "title": "Cross and head regulators",
       "caption": "A cross regulator controls the parent canal while a head regulator controls entry to an offtake."
      },
      {
       "id": "c-acie0705-2",
       "block": "outlet-flexibility-and-sensitivity",
       "src": "assets/civil-notes/acie0705-3.svg",
       "width": 720,
       "height": 420,
       "title": "Free versus submerged outlet",
       "caption": "A free outlet is referenced to its discharge condition; a submerged outlet depends on both upstream and downstream heads."
      },
      {
       "id": "c-acie0705-3",
       "block": "canal-falls-need-and-siting",
       "src": "assets/civil-notes/acie0705-4.svg",
       "width": 720,
       "height": 420,
       "title": "Canal fall and downstream cistern",
       "caption": "A local drop reconciles canal grade with terrain and needs an adequate energy-dissipation and protection arrangement."
      },
      {
       "id": "c-acie0705-4",
       "block": "sarda-type-falls",
       "src": "assets/civil-capsule-notes/acie0705-1.svg",
       "width": 720,
       "height": 420,
       "title": "Sarda fall: vertical drop, and a level crest is not a V-notch",
       "caption": "A Sarda fall drops water vertically over a raised crest wall into a protected cistern; its rating Q = 1.5 L H^(3/2) gives 12 cumecs for L = 8 m and H = 1 m. A level overflow crest is not a V-notch."
      },
      {
       "id": "c-acie0705-5",
       "block": "cross-drainage-canal-over-drain",
       "src": "assets/civil-notes/acie0705-2.svg",
       "width": 720,
       "height": 420,
       "title": "Free-flow cross-drainage arrangements",
       "caption": "An aqueduct carries the canal above drainage; a superpassage carries drainage above the canal, subject to clearance checks."
      },
      {
       "id": "c-acie0705-6",
       "block": "cross-drainage-drain-over-canal",
       "src": "assets/civil-capsule-notes/acie0705-2.svg",
       "width": 720,
       "height": 420,
       "title": "Superpassage and canal siphon",
       "caption": "In a superpassage the drain crosses in a trough over a canal that keeps a free surface; clearance = trough underside - FSL = 99.8 - 99.0 = 0.8 m. In a canal siphon the canal dips into barrels that run full."
      },
      {
       "id": "c-acie0705-7",
       "block": "cross-drainage-at-similar-levels",
       "src": "assets/civil-capsule-notes/acie0705-3.svg",
       "width": 720,
       "height": 420,
       "title": "Canal inlet and level crossing",
       "caption": "A canal inlet admits a small hillside drain so the flows mix, if the canal has spare capacity and the water is acceptable. A level crossing joins a large canal and a flashy drain at nearly equal bed levels, with gates."
      }
     ],
     "ACiE0706": [
      {
       "id": "c-acie0706-1",
       "block": "waterlogging-as-a-water-balance",
       "src": "assets/civil-capsule-notes/acie0706-1.svg",
       "width": 720,
       "height": 420,
       "title": "Waterlogging as a groundwater balance",
       "caption": "The water table rises while recharge from rain, canal seepage and deep percolation exceeds removal by outflow, drainage, evaporation and pumping. Persistent seepage from an unlined canal can tip the balance."
      },
      {
       "id": "c-acie0706-2",
       "block": "surface-drainage-and-topography",
       "src": "assets/civil-capsule-notes/acie0706-2.svg",
       "width": 720,
       "height": 420,
       "title": "Draining a closed hollow, and bedding",
       "caption": "A closed depression stays ponded until a graded channel links it to a workable outlet. Bedding shapes a field into raised beds with dead furrows between them that lead excess water away."
      },
      {
       "id": "c-acie0706-3",
       "block": "open-surface-drains",
       "src": "assets/civil-capsule-notes/acie0706-3.svg",
       "width": 720,
       "height": 420,
       "title": "Open surface drain section",
       "caption": "Unlined open drains commonly use a trapezoidal section: a finite bed width with stable sloping earth banks, avoiding unsupported vertical soil faces. A surface drain works whenever surface excess arrives."
      },
      {
       "id": "c-acie0706-4",
       "block": "effects-of-waterlogging-on-crops",
       "src": "assets/civil-notes/acie0706-1.svg",
       "width": 720,
       "height": 420,
       "title": "Waterlogging in the root zone",
       "caption": "A high water table restricts aerated rooting space; depth, duration and crop sensitivity all matter."
      },
      {
       "id": "c-acie0706-5",
       "block": "saline-and-alkaline-soils",
       "src": "assets/civil-capsule-notes/acie0706-4.svg",
       "width": 720,
       "height": 420,
       "title": "Leaching with drainage versus flooding without an outlet",
       "caption": "Salts leave a saline, non-sodic soil only when good water carries them below the root zone and a working drain removes it. Flooding without an outlet raises the water table and salts reconcentrate at the surface."
      },
      {
       "id": "c-acie0706-6",
       "block": "lowering-the-water-table-and-field-drains",
       "src": "assets/civil-notes/acie0706-2.svg",
       "width": 720,
       "height": 420,
       "title": "Collector and lateral drains",
       "caption": "Field laterals lead to a collector and a functioning outfall; the drawn network is an illustrative layout."
      },
      {
       "id": "c-acie0706-7",
       "block": "tile-drainage-suitability-and-spacing",
       "src": "assets/civil-notes/acie0706-3.svg",
       "width": 720,
       "height": 420,
       "title": "Drainage between parallel laterals",
       "caption": "A curved groundwater surface develops between drains; outlet level and hydraulic connection control its relief."
      },
      {
       "id": "c-acie0706-8",
       "block": "tile-drainage-suitability-and-spacing",
       "src": "assets/civil-notes/acie0706-4.svg",
       "width": 720,
       "height": 420,
       "title": "Drain-spacing geometry",
       "caption": "Drain depth, midpoint head and the lower boundary define different lengths in a drainage model."
      }
     ],
     "ACiE0801": [
      {
       "id": "c-acie0801-1",
       "block": "head-flow-and-demand",
       "src": "assets/civil-notes/acie0801-3.svg",
       "width": 720,
       "height": 420,
       "title": "Head and usable flow",
       "caption": "Elevation difference becomes useful only with an available flow, a feasible waterway and acceptable losses."
      },
      {
       "id": "c-acie0801-2",
       "block": "head-flow-and-demand",
       "src": "assets/civil-notes/acie0801-1.svg",
       "width": 720,
       "height": 420,
       "title": "Potential narrows with constraints",
       "caption": "Gross, technical and economic assessments impose different exclusions; no numerical Nepal inventory is implied by the areas."
      },
      {
       "id": "c-acie0801-3",
       "block": "life-cycle-appraisal-and-imports",
       "src": "assets/civil-notes/acie0801-2.svg",
       "width": 720,
       "height": 420,
       "title": "Progressive project studies",
       "caption": "Reconnaissance and feasibility progressively investigate hydrology, geology, layout, costs and risks."
      },
      {
       "id": "c-acie0801-4",
       "block": "legal-and-policy-framework",
       "src": "assets/civil-capsule-notes/acie0801-1.svg",
       "width": 720,
       "height": 420,
       "title": "Act, rules, policy and contract",
       "caption": "The Electricity Act 2049 is the principal Act; the Electricity Rules 2050 were made by the Government under its section 40. The Hydropower Development Policy 2058 is Government policy; a PPA is a contract."
      },
      {
       "id": "c-acie0801-5",
       "block": "milestones-delivery-financing",
       "src": "assets/civil-notes/acie0801-4.svg",
       "width": 720,
       "height": 420,
       "title": "Parallel development workstreams",
       "caption": "Technical studies, licensing, energy purchase and finance interact; none alone constitutes complete permission to construct."
      }
     ],
     "ACiE0802": [
      {
       "id": "c-acie0802-1",
       "block": "hydraulic-power-and-head",
       "src": "assets/civil-notes/acie0802-1.svg",
       "width": 720,
       "height": 420,
       "title": "Gross and net head",
       "caption": "Gross level difference is reduced by the relevant hydraulic losses before the machine's available head is established."
      },
      {
       "id": "c-acie0802-2",
       "block": "hydraulic-power-and-head",
       "src": "assets/civil-notes/acie0802-5.svg",
       "width": 720,
       "height": 420,
       "title": "Worked net-head power calculation",
       "caption": "A 423.5 m gross head, 2.5 m loss, 0.9 cubic metres per second and 85 percent overall efficiency give 3159.46 kW; apply the loss and efficiency once each."
      },
      {
       "id": "c-acie0802-3",
       "block": "flow-duration-curves",
       "src": "assets/civil-notes/acie0802-2.svg",
       "width": 720,
       "height": 420,
       "title": "Flow-duration curve",
       "caption": "Sorting flow by exceedance preserves occurrence information but removes the original chronological sequence."
      },
      {
       "id": "c-acie0802-4",
       "block": "firm-power-and-dependability",
       "src": "assets/civil-notes/acie0802-3.svg",
       "width": 720,
       "height": 420,
       "title": "Mass curve and supply line",
       "caption": "Cumulative inflow and a chosen cumulative release reveal storage deficits that a duration curve cannot locate in time."
      },
      {
       "id": "c-acie0802-5",
       "block": "load-curves-and-daily-energy",
       "src": "assets/civil-notes/acie0802-4.svg",
       "width": 720,
       "height": 420,
       "title": "Daily load and peaking",
       "caption": "An illustrative load pattern distinguishes base service from a higher-demand interval; it is not a forecast or tariff."
      },
      {
       "id": "c-acie0802-6",
       "block": "capacity-coincidence-and-sizing",
       "src": "assets/civil-capsule-notes/acie0802-1.svg",
       "width": 720,
       "height": 420,
       "title": "Coincidence of feeder peaks",
       "caption": "Feeder maxima of 12, 18 and 30 kW sum to 60 kW, but their simultaneous maximum is 45 kW: coincidence factor 0.75, diversity factor 1.33. An isolated microhydro must cover the coincident peak."
      },
      {
       "id": "c-acie0802-7",
       "block": "merit-order-dispatch",
       "src": "assets/civil-capsule-notes/acie0802-2.svg",
       "width": 720,
       "height": 420,
       "title": "Merit-order loading of a daily demand curve",
       "caption": "Cheap steady units carry the base, load-following units the intermediate band, and fast-starting high-variable-cost units the short peak. Storage hydro within its water budget can serve base and peak."
      },
      {
       "id": "c-acie0802-8",
       "block": "run-of-river-pondage-pumped-storage",
       "src": "assets/civil-capsule-notes/acie0802-3.svg",
       "width": 720,
       "height": 420,
       "title": "Pondage for a peak, and pumped-storage round trip",
       "caption": "Pondage supplies only the deficit: releasing 5 m³/s against 2 m³/s inflow for 2 h needs 21,600 m³. Pumped storage at 90 percent each way returns 81 MWh from 100 MWh, a round trip of 0.81."
      },
      {
       "id": "c-acie0802-9",
       "block": "reservoir-zones-sediment-bank-storage",
       "src": "assets/civil-capsule-notes/acie0802-4.svg",
       "width": 720,
       "height": 420,
       "title": "Reservoir storage zones and bank storage",
       "caption": "Flood surcharge sits above full level, active storage between minimum operating and full levels, and dead storage below the minimum level, often the sediment allowance. Bank storage is a groundwater exchange."
      }
     ],
     "ACiE0803": [
      {
       "id": "c-acie0803-1",
       "block": "dam-type-from-foundation-and-materials",
       "src": "assets/civil-notes/acie0803-1.svg",
       "width": 720,
       "height": 420,
       "title": "Gravity and embankment sections",
       "caption": "Different dam types resist actions through different material and structural mechanisms; selection needs the site."
      },
      {
       "id": "c-acie0803-2",
       "block": "classifications-axis-joints-cofferdams",
       "src": "assets/civil-capsule-notes/acie0803-1.svg",
       "width": 720,
       "height": 420,
       "title": "Overflow sections, the dam axis and a cofferdam",
       "caption": "One dam can be classed by hydraulic role, structural action, material and service life. The dam axis is commonly the upstream crest line; a cofferdam temporarily excludes the river so work proceeds in the dry."
      },
      {
       "id": "c-acie0803-3",
       "block": "middle-third-kern-and-base-stresses",
       "src": "assets/civil-notes/acie0803-2.svg",
       "width": 720,
       "height": 420,
       "title": "Gravity-dam free body",
       "caption": "Weight, hydrostatic thrust, uplift and the foundation reaction must be resolved with consistent signs and locations."
      },
      {
       "id": "c-acie0803-4",
       "block": "sliding-shear-friction-and-keys",
       "src": "assets/civil-capsule-notes/acie0803-2.svg",
       "width": 720,
       "height": 420,
       "title": "Shear-friction sliding check of a gravity section",
       "caption": "Sliding resistance is friction on the effective normal force plus mobilisable cohesion: (0.6 × 1000 + 200)/400 = 2.0. A shear key helps by bearing and interlock, not by adding friction area."
      },
      {
       "id": "c-acie0803-5",
       "block": "earth-dam-zoning-and-construction",
       "src": "assets/civil-notes/acie0803-3.svg",
       "width": 720,
       "height": 420,
       "title": "Zoned embankment and drainage",
       "caption": "The core limits seepage while filters and drains control migration and pressure; they are not interchangeable components."
      },
      {
       "id": "c-acie0803-6",
       "block": "phreatic-line-and-sloughing",
       "src": "assets/civil-capsule-notes/acie0803-3.svg",
       "width": 720,
       "height": 420,
       "title": "Phreatic line through an earth dam, and sloughing",
       "caption": "The phreatic surface is the surface of zero gauge pore pressure; under the Dupuit idealisation h² varies linearly with distance, a parabola. If saturation reaches the downstream face, shallow slips cause sloughing."
      },
      {
       "id": "c-acie0803-7",
       "block": "spillways-as-flood-routes",
       "src": "assets/civil-capsule-notes/acie0803-4.svg",
       "width": 720,
       "height": 420,
       "title": "Morning-glory shaft spillway and siphon spillway",
       "caption": "A morning-glory spillway has a flared circular lip where overflow drops into a vertical shaft. A siphon spillway passes overflow first, then primes into full enclosed flow; air admission governs its regime."
      },
      {
       "id": "c-acie0803-8",
       "block": "energy-dissipation-below-spillways",
       "src": "assets/civil-notes/acie0803-4.svg",
       "width": 720,
       "height": 420,
       "title": "Spillway and dissipation",
       "caption": "A spillway routes floodwater safely past the dam and connects to an engineered downstream energy-dissipation system."
      },
      {
       "id": "c-acie0803-9",
       "block": "gates-and-dependable-operation",
       "src": "assets/civil-capsule-notes/acie0803-5.svg",
       "width": 720,
       "height": 420,
       "title": "Fixed-wheel, radial and drum gates",
       "caption": "A fixed-wheel gate has wheels fixed on the moving leaf running on fixed tracks; a radial gate's curved plate pivots on trunnions so pressure acts near the pivot; a drum gate is raised by buoyancy through chamber passages."
      },
      {
       "id": "c-acie0803-10",
       "block": "outlets-and-hydrostatic-level",
       "src": "assets/civil-capsule-notes/acie0803-6.svg",
       "width": 720,
       "height": 420,
       "title": "Gated outlet below the crest, and level from a pressure sensor",
       "caption": "With turbines shut and the reservoir below the crest, a gated sluiceway releases water downstream. A gauge reading of 98.1 kPa is 10 m of water, so a sensor 2 m above datum shows a surface at 12 m."
      }
     ],
     "ACiE0804": [
      {
       "id": "c-acie0804-1",
       "block": "ror-headworks-and-barrage-bays",
       "src": "assets/civil-notes/acie0804-1.svg",
       "width": 720,
       "height": 420,
       "title": "Run-of-river water route",
       "caption": "Intake, sediment handling, conveyance and the return to the river form one route with several operating constraints."
      },
      {
       "id": "c-acie0804-2",
       "block": "submerged-intake-openings",
       "src": "assets/civil-capsule-notes/acie0804-1.svg",
       "width": 720,
       "height": 420,
       "title": "A raised opening below the water surface is submerged",
       "caption": "Submergence is measured from the water surface: an intake opening raised above the bed to reduce bed-load entry is still submerged, and enough submergence prevents air-entraining vortices."
      },
      {
       "id": "c-acie0804-3",
       "block": "trash-racks",
       "src": "assets/civil-notes/acie0804-2.svg",
       "width": 720,
       "height": 420,
       "title": "Bottom-intake flow separation",
       "caption": "Water passes through the rack to the collector while coarse material can continue over it; performance depends on design and operation."
      },
      {
       "id": "c-acie0804-4",
       "block": "settling-basin-overflow-rate",
       "src": "assets/civil-notes/acie0804-3.svg",
       "width": 720,
       "height": 420,
       "title": "Desander capture trajectory",
       "caption": "The ideal travel-time and fall-time comparison is distinct from a vertically mixed concentration model."
      },
      {
       "id": "c-acie0804-5",
       "block": "settling-basin-overflow-rate",
       "src": "assets/civil-notes/acie0804-4.svg",
       "width": 720,
       "height": 420,
       "title": "Sediment flushing route",
       "caption": "A flushing arrangement needs available head, sediment-transport capacity and an acceptable outfall, not only a gate."
      }
     ],
     "ACiE0805": [
      {
       "id": "c-acie0805-1",
       "block": "surge-tanks-and-transients",
       "src": "assets/civil-notes/acie0805-4.svg",
       "width": 720,
       "height": 420,
       "title": "Pressure-wave travel",
       "caption": "Elastic pressure disturbances travel along the waterway; rapid closure is judged relative to the system's travel time."
      },
      {
       "id": "c-acie0805-2",
       "block": "waterway-path-and-forebay",
       "src": "assets/civil-notes/acie0805-1.svg",
       "width": 720,
       "height": 420,
       "title": "Waterway and surge connection",
       "caption": "The tunnel, surge connection and penstock serve different hydraulic roles and may have different pressure regimes."
      },
      {
       "id": "c-acie0805-3",
       "block": "penstock-sizing-and-friction-loss",
       "src": "assets/civil-notes/acie0805-3.svg",
       "width": 720,
       "height": 420,
       "title": "Pressure-vessel membrane actions",
       "caption": "Circumferential and closed-end longitudinal actions produce different membrane stresses in the thin-wall idealization."
      },
      {
       "id": "c-acie0805-4",
       "block": "rock-tunnel-excavation",
       "src": "assets/civil-capsule-notes/acie0805-1.svg",
       "width": 720,
       "height": 420,
       "title": "Heading and bench, trimmer holes and the work cycle",
       "caption": "In heading and benching the upper heading is excavated first and the bench follows. Trimmer holes form the final outline and limit overbreak. The cycle runs mark, drill, charge and blast, ventilate, clear misfires, muck."
      },
      {
       "id": "c-acie0805-5",
       "block": "tunnel-support-drainage-lining",
       "src": "assets/civil-notes/acie0805-2.svg",
       "width": 720,
       "height": 420,
       "title": "Tunnel section alternatives",
       "caption": "Circular and horseshoe forms respond differently to internal pressure, ground conditions and construction requirements."
      }
     ],
     "ACiE0806": [
      {
       "id": "c-acie0806-1",
       "block": "impulse-and-reaction-turbines",
       "src": "assets/civil-notes/acie0806-2.svg",
       "width": 720,
       "height": 420,
       "title": "Francis reaction flow path",
       "caption": "Flow enters the runner through a controlled distributor and turns toward an axial discharge into the draft tube."
      },
      {
       "id": "c-acie0806-2",
       "block": "impulse-and-reaction-turbines",
       "src": "assets/civil-notes/acie0806-3.svg",
       "width": 720,
       "height": 420,
       "title": "Axial-flow reaction runner",
       "caption": "An axial runner and its guide apparatus have distinct functions; blade adjustment depends on the machine type."
      },
      {
       "id": "c-acie0806-3",
       "block": "pelton-jet-and-no-draft-tube",
       "src": "assets/civil-notes/acie0806-1.svg",
       "width": 720,
       "height": 420,
       "title": "Pelton impulse runner",
       "caption": "A nozzle converts head to jet velocity before the jet transfers momentum to the bucket."
      },
      {
       "id": "c-acie0806-4",
       "block": "draft-tube-recovery-and-cavitation",
       "src": "assets/civil-capsule-notes/acie0806-1.svg",
       "width": 720,
       "height": 420,
       "title": "Draft tube pressure recovery",
       "caption": "The draft tube runs from the runner outlet to the submerged tailwater. Slowing from 8 to 4 m/s over a 3 m drop with 0.40 m loss raises the pressure head by 5.05 m; total head still falls by the loss."
      },
      {
       "id": "c-acie0806-5",
       "block": "hydraulic-power-unit-power-efficiency",
       "src": "assets/civil-capsule-notes/acie0806-2.svg",
       "width": 720,
       "height": 420,
       "title": "Efficiency boundaries from water to shaft",
       "caption": "With 1000 kW supplied, 900 kW reaching the runner and 855 kW at the shaft, hydraulic efficiency is 90 percent, mechanical 95 percent and overall 85.5 percent. Unit power 800/16^(3/2) = 12.5 kW."
      },
      {
       "id": "c-acie0806-6",
       "block": "pumps-shaft-input-and-reversible-units",
       "src": "assets/civil-capsule-notes/acie0806-3.svg",
       "width": 720,
       "height": 420,
       "title": "Centrifugal pump as a reversed inward-flow turbine",
       "caption": "In a centrifugal pump water enters at the eye and moves outward while shaft work raises its energy; in an inward radial-flow turbine it moves inward and drives the shaft. Shaft input = 9.81 kW / 0.80 = 12.26 kW."
      },
      {
       "id": "c-acie0806-7",
       "block": "pump-similarity-and-trimming",
       "src": "assets/civil-capsule-notes/acie0806-4.svg",
       "width": 720,
       "height": 420,
       "title": "Similar-pump fifth-power law versus impeller trimming",
       "caption": "For similar pumps at the same speed, power scales as D⁵: doubling the diameter of a 10 kW pump gives 320 kW, not the 80 kW of the flow ratio alone. A permitted trim to 0.90 D under a cube law gives 14.58 kW."
      },
      {
       "id": "c-acie0806-8",
       "block": "generator-efficiency-and-governing",
       "src": "assets/civil-capsule-notes/acie0806-5.svg",
       "width": 720,
       "height": 420,
       "title": "Water-to-wire efficiency and governor action",
       "caption": "Net output is hydraulic input times turbine and generator efficiency minus auxiliaries: 88 percent at full load but 72 percent at quarter load. After load loss, the governor cuts admitted water to restore speed."
      },
      {
       "id": "c-acie0806-9",
       "block": "powerhouse-runner-design-watermills",
       "src": "assets/civil-notes/acie0806-4.svg",
       "width": 720,
       "height": 420,
       "title": "Powerhouse arrangement",
       "caption": "Generator, turbine, draft tube and handling equipment constrain civil levels and maintenance space; dimensions are schematic."
      }
     ],
     "ACiE0901": [
      {
       "id": "c-acie0901-1",
       "block": "road-names-and-classification",
       "src": "assets/civil-notes/acie0901-2.svg",
       "width": 720,
       "height": 420,
       "title": "Urban road functions",
       "caption": "Arterial, sub-arterial, collector and local functions are differentiated; their role is not simply a pavement-width label."
      },
      {
       "id": "c-acie0901-2",
       "block": "route-survey-stages",
       "src": "assets/civil-notes/acie0901-3.svg",
       "width": 720,
       "height": 420,
       "title": "Progressive highway survey",
       "caption": "Map study, reconnaissance, preliminary survey and detailed setting-out develop increasingly specific evidence."
      },
      {
       "id": "c-acie0901-3",
       "block": "route-survey-stages",
       "src": "assets/civil-notes/acie0901-1.svg",
       "width": 720,
       "height": 420,
       "title": "Alignment alternatives",
       "caption": "Illustrative routes trade length against terrain, crossings and receptors; the shortest line is not automatically preferable."
      },
      {
       "id": "c-acie0901-4",
       "block": "telford-and-mcadam",
       "src": "assets/civil-capsule-notes/acie0901-1.svg",
       "width": 720,
       "height": 420,
       "title": "Telford and McAdam road foundations",
       "caption": "Telford relied on a hand-set foundation of large stones to spread the load; McAdam dropped the heavy foundation and used compacted, interlocking broken stone on a drained, cambered formation."
      },
      {
       "id": "c-acie0901-5",
       "block": "green-road-approach",
       "src": "assets/civil-capsule-notes/acie0901-2.svg",
       "width": 720,
       "height": 420,
       "title": "The green-road approach on a mountain slope",
       "caption": "A green road minimises slope disturbance with a modest bench, protects vegetation, intercepts and leads runoff to controlled outlets and places spoil deliberately instead of tipping it downslope."
      }
     ],
     "ACiE0902": [
      {
       "id": "c-acie0902-1",
       "block": "cross-section-widths-and-road-land",
       "src": "assets/civil-notes/acie0901-4.svg",
       "width": 720,
       "height": 420,
       "title": "Plan, profile and cross-section",
       "caption": "Plan alignment, longitudinal levels and transverse geometry describe different views of the same road."
      },
      {
       "id": "c-acie0902-2",
       "block": "camber-purpose-and-shape",
       "src": "assets/civil-notes/acie0902-1.svg",
       "width": 720,
       "height": 420,
       "title": "Crown and crossfall",
       "caption": "Crossfall drains each side from its controlling high point; crown rise depends on the width drained on that side."
      },
      {
       "id": "c-acie0902-3",
       "block": "superelevation-and-friction",
       "src": "assets/civil-notes/acie0902-2.svg",
       "width": 720,
       "height": 420,
       "title": "Banked-curve force balance",
       "caption": "Superelevation and lateral tyre force contribute to the required turning action; directions depend on the stated case."
      },
      {
       "id": "c-acie0902-4",
       "block": "extra-widening-on-curves",
       "src": "assets/civil-capsule-notes/acie0902-1.svg",
       "width": 720,
       "height": 420,
       "title": "Off-tracking and extra widening on a curve",
       "caption": "The rear axle follows a smaller radius than the front, so mechanical widening n l²/2R is provided and a separate psychological allowance is added: 2 × 6²/(2 × 60) = 0.60 m before the psychological part."
      },
      {
       "id": "c-acie0902-5",
       "block": "transition-curves-and-curve-chainage",
       "src": "assets/civil-capsule-notes/acie0902-2.svg",
       "width": 720,
       "height": 420,
       "title": "Simple-curve chainage and the clothoid transition",
       "caption": "For R = 100 m and a 60 degree deflection, the IP is stationed along the tangent at 1057.735 m while the arc midpoint is at 1052.360 m. A clothoid's curvature rises linearly with distance: r s = R Ls."
      },
      {
       "id": "c-acie0902-6",
       "block": "hill-road-provisions",
       "src": "assets/civil-capsule-notes/acie0902-3.svg",
       "width": 720,
       "height": 420,
       "title": "Hairpin bend values in NRS 2070 Table 9-3",
       "caption": "NRS 2070 Table 9-3 gives a hairpin design speed of 20 km/h, a minimum radius of 15 m and a maximum longitudinal gradient of 4 percent; swept path and widening must still be checked."
      },
      {
       "id": "c-acie0902-7",
       "block": "hill-road-provisions",
       "src": "assets/civil-capsule-notes/acie0902-4.svg",
       "width": 720,
       "height": 420,
       "title": "Overhead clearance and the catch drain",
       "caption": "Under NRS 2070 section 11.9.3 the vertical clearance under an overhang is a minimum 5.0 m measured from the crown over the whole roadway width. A catch drain above the cutting intercepts uphill runoff."
      },
      {
       "id": "c-acie0902-8",
       "block": "gradient-terms-and-compensation",
       "src": "assets/civil-capsule-notes/acie0902-5.svg",
       "width": 720,
       "height": 420,
       "title": "Grade compensation on curves, NRS 2070",
       "caption": "Compensation is the smaller of (30 + R)/R and 75/R percent; above R = 45 m the 75/R term governs. At R = 600 m it is 0.125 percentage point, so a 6 percent grade becomes 5.875 percent."
      },
      {
       "id": "c-acie0902-9",
       "block": "vertical-alignment-and-deviation-angle",
       "src": "assets/civil-notes/acie0902-3.svg",
       "width": 720,
       "height": 420,
       "title": "Parabolic vertical curve",
       "caption": "BVC, PVI and EVC are different locations; the curve joins the entering and leaving grades smoothly."
      },
      {
       "id": "c-acie0902-10",
       "block": "sight-distance-and-lag",
       "src": "assets/civil-notes/acie0902-4.svg",
       "width": 720,
       "height": 420,
       "title": "Stopping-distance components",
       "caption": "Perception-reaction distance precedes braking distance; speed, friction and signed grade determine the calculation."
      },
      {
       "id": "c-acie0902-11",
       "block": "visibility-heights-and-overtaking-model",
       "src": "assets/civil-capsule-notes/acie0902-6.svg",
       "width": 720,
       "height": 420,
       "title": "Eye, object and headlight heights",
       "caption": "NRS 2070 stopping checks use a 1.20 m eye and a 0.15 m object, passing checks use equal 1.20 m heights, and the night sag-curve check uses a 0.75 m headlight."
      }
     ],
     "ACiE0903": [
      {
       "id": "c-acie0903-1",
       "block": "aggregate-durability-and-wear-tests",
       "src": "assets/civil-notes/acie0903-2.svg",
       "width": 720,
       "height": 420,
       "title": "Los Angeles abrasion drum",
       "caption": "Tumbling aggregate and the prescribed charge cause degradation; the schematic does not prescribe a grading or revolution count."
      },
      {
       "id": "c-acie0903-2",
       "block": "aggregate-limits-wearing-surface",
       "src": "assets/civil-notes/acie0903-1.svg",
       "width": 720,
       "height": 420,
       "title": "Aggregate shape descriptors",
       "caption": "Cubical, flaky and elongated particles are geometric descriptions; acceptance is assessed on the specified test fraction."
      },
      {
       "id": "c-acie0903-3",
       "block": "penetration-test",
       "src": "assets/civil-capsule-notes/acie0903-1.svg",
       "width": 720,
       "height": 420,
       "title": "Needle penetration test",
       "caption": "A standard needle loaded to 100 g sinks into the binder for 5 s at 25 °C; the depth is reported in 0.1 mm units, so 62 units is 6.2 mm. Readings are spaced from earlier points and the wall."
      },
      {
       "id": "c-acie0903-4",
       "block": "ductility-and-pulling-rate",
       "src": "assets/civil-capsule-notes/acie0903-2.svg",
       "width": 720,
       "height": 420,
       "title": "Ductility test and VG residue minima",
       "caption": "A briquette is pulled apart at a specified rate, conventionally 5 cm/min = 50 mm/min, and temperature. DoR SSRBW Table 6.12 minima for RTFO residue at 25 °C are 75, 50, 40 and 25 cm for VG10 to VG40."
      },
      {
       "id": "c-acie0903-5",
       "block": "marshall-design-and-binder-content",
       "src": "assets/civil-notes/acie0903-3.svg",
       "width": 720,
       "height": 420,
       "title": "Marshall specimen loading",
       "caption": "Stability is a load and flow is a deformation measured under a specified conditioning and test method."
      },
      {
       "id": "c-acie0903-6",
       "block": "marshall-design-and-binder-content",
       "src": "assets/civil-notes/acie0903-4.svg",
       "width": 720,
       "height": 420,
       "title": "Asphalt volume accounting",
       "caption": "VMA includes air and effective binder; absorbed binder is accounted for inside the aggregate envelope."
      },
      {
       "id": "c-acie0903-7",
       "block": "laboratory-cbr-apparatus",
       "src": "assets/civil-capsule-notes/acie0903-3.svg",
       "width": 720,
       "height": 420,
       "title": "Laboratory CBR apparatus",
       "caption": "Under IS 2720 Part 16 the plunger is circular, 50 mm in diameter, driven at 1.25 mm/min into a specimen in a 150 mm mould; CBR compares the test load with the standard load at the same penetration."
      },
      {
       "id": "c-acie0903-8",
       "block": "cbr-reporting-rule",
       "src": "assets/civil-capsule-notes/acie0903-4.svg",
       "width": 720,
       "height": 420,
       "title": "Which CBR value to report",
       "caption": "The 2.5 mm CBR is ordinarily reported. If the 5 mm ratio is higher, repeat the test; adopt the 5 mm value only if the repeat confirms it, otherwise report the 2.5 mm value."
      }
     ],
     "ACiE0904": [
      {
       "id": "c-acie0904-1",
       "block": "spot-speed-studies",
       "src": "assets/civil-capsule-notes/acie0904-1.svg",
       "width": 720,
       "height": 420,
       "title": "Cumulative speed distribution and the 85th percentile",
       "caption": "Spot speeds timed over a measured base, for example 3.6 × 50/3.0 = 60 km/h, are plotted cumulatively. Here about 85 percent of sampled vehicles were at or below 62 km/h."
      },
      {
       "id": "c-acie0904-2",
       "block": "time-mean-and-space-mean-speed",
       "src": "assets/civil-capsule-notes/acie0904-2.svg",
       "width": 720,
       "height": 420,
       "title": "Time-mean and space-mean speed",
       "caption": "With equal flows at 30 and 60 km/h, the slow vehicles are twice as dense on the road. The time mean at a point is 45 km/h and the space mean, the harmonic mean, is 40 km/h; TMS is never below SMS."
      },
      {
       "id": "c-acie0904-3",
       "block": "capacity-pcu-and-uniform-flow",
       "src": "assets/civil-capsule-notes/acie0904-3.svg",
       "width": 720,
       "height": 420,
       "title": "Flow of a uniform stream and PCU totals",
       "caption": "Vehicles 5 m long with 25 m clear gaps occupy 30 m each, so at 54 km/h the idealised flow is 1000 × 54/30 = 1800 veh/h. With 6 PCU per cart, 20 carts and 80 cars make 200 PCU/h."
      },
      {
       "id": "c-acie0904-4",
       "block": "peak-hour-factor",
       "src": "assets/civil-capsule-notes/acie0904-4.svg",
       "width": 720,
       "height": 420,
       "title": "Peak-hour factor bounds",
       "caption": "PHF = V/(4 V15). If all 600 vehicles arrive in one quarter the PHF is 0.25, its minimum for positive traffic; spread evenly at 150 per quarter it is 1. An empty hour gives 0/0, undefined."
      },
      {
       "id": "c-acie0904-5",
       "block": "flow-density-and-headway",
       "src": "assets/civil-notes/acie0904-1.svg",
       "width": 720,
       "height": 420,
       "title": "Flow-density relationship",
       "caption": "The theoretical Greenshields model has a maximum flow at an intermediate density; field calibration is required."
      },
      {
       "id": "c-acie0904-6",
       "block": "grade-separation-and-interchanges",
       "src": "assets/civil-capsule-notes/acie0904-5.svg",
       "width": 720,
       "height": 420,
       "title": "Full cloverleaf interchange",
       "caption": "A full cloverleaf uses four loop ramps so the main roads never cross at grade, but vehicles still merge, diverge and weave where a loop entry lies upstream of the next loop exit."
      },
      {
       "id": "c-acie0904-7",
       "block": "channelisation-and-rotaries",
       "src": "assets/civil-capsule-notes/acie0904-6.svg",
       "width": 720,
       "height": 420,
       "title": "Channelised junction and rotary weaving",
       "caption": "Channelisation guides vehicles along defined paths with islands, medians and turning lanes, without vertical separation. A rotary replaces direct crossings with gradual weaving along a shared length."
      },
      {
       "id": "c-acie0904-8",
       "block": "signal-indications-and-safety",
       "src": "assets/civil-notes/acie0904-3.svg",
       "width": 720,
       "height": 420,
       "title": "Two-stage signal operation",
       "caption": "Non-conflicting movement groups receive service at different stages; intergreen and pedestrian needs require explicit design."
      },
      {
       "id": "c-acie0904-9",
       "block": "webster-optimum-cycle",
       "src": "assets/civil-notes/acie0904-5.svg",
       "width": 720,
       "height": 420,
       "title": "Worked Webster cycle",
       "caption": "Separately served critical ratios 0.3125 and 0.1875 sum to 0.5. With 16 seconds lost time, the approximate cycle is 58 seconds, leaving 42 seconds effective green."
      },
      {
       "id": "c-acie0904-10",
       "block": "signs-parking-and-night-visibility",
       "src": "assets/civil-notes/acie0904-2.svg",
       "width": 720,
       "height": 420,
       "title": "Sign shapes convey purpose",
       "caption": "Illustrative regulatory, warning and information families show shape distinctions without replacing the Nepal sign manual."
      }
     ],
     "ACiE0905": [
      {
       "id": "c-acie0905-1",
       "block": "pavement-families-layers-and-granular-base",
       "src": "assets/civil-notes/acie0905-1.svg",
       "width": 720,
       "height": 420,
       "title": "Flexible and rigid load paths",
       "caption": "Layered load distribution and slab bending are different structural mechanisms; both need suitable foundation support."
      },
      {
       "id": "c-acie0905-2",
       "block": "fatigue-cracking-and-long-life-design",
       "src": "assets/civil-capsule-notes/acie0905-1.svg",
       "width": 720,
       "height": 420,
       "title": "Bottom-up fatigue cracking",
       "caption": "Each wheel pass bends the bound layer and puts its bottom in horizontal tension; repeated strain beyond the fatigue resistance starts cracks there that grow up into interconnected wheel-path cracking."
      },
      {
       "id": "c-acie0905-3",
       "block": "lane-distribution-factors",
       "src": "assets/civil-capsule-notes/acie0905-2.svg",
       "width": 720,
       "height": 420,
       "title": "Design-lane traffic on four-lane roads",
       "caption": "DoR factors carry their own bases: an undivided four-lane road puts 0.40 × 1000 two-way = 400 CV/day in the design lane; a divided road puts 0.75 × 500 per direction = 375 CV/day."
      },
      {
       "id": "c-acie0905-4",
       "block": "fourth-power-axle-equivalence",
       "src": "assets/civil-notes/acie0905-2.svg",
       "width": 720,
       "height": 420,
       "title": "Axle, wheel and contact area",
       "caption": "An axle load is shared between contact patches; it must not be assigned silently to a single tyre."
      },
      {
       "id": "c-acie0905-5",
       "block": "benkelman-beam-surveys",
       "src": "assets/civil-capsule-notes/acie0905-3.svg",
       "width": 720,
       "height": 420,
       "title": "Benkelman beam test position",
       "caption": "A test path 0.60 m in from the edge of a 3.75 m carriageway lies 1.875 - 0.60 = 1.275 m from the centreline. Rebound readings are normalised to a reference temperature, conventionally 35 °C."
      },
      {
       "id": "c-acie0905-6",
       "block": "rigid-pavement-joints",
       "src": "assets/civil-notes/acie0905-3.svg",
       "width": 720,
       "height": 420,
       "title": "Dowel and tie-bar functions",
       "caption": "Dowels transfer load across a transverse joint while permitting intended movement; ties restrain separation at a longitudinal joint."
      },
      {
       "id": "c-acie0905-7",
       "block": "rigid-pavement-joints",
       "src": "assets/civil-notes/acie0905-4.svg",
       "width": 720,
       "height": 420,
       "title": "Temperature-gradient curling",
       "caption": "Different top and bottom strains tend to curve a slab; restraint and support determine the resulting stresses."
      }
     ],
     "ACiE0906": [
      {
       "id": "c-acie0906-1",
       "block": "mass-haul-slope-and-turning-points",
       "src": "assets/civil-capsule-notes/acie0906-1.svg",
       "width": 720,
       "height": 420,
       "title": "Mass-haul slope and turning points",
       "caption": "With cut positive the ordinate rises through cuttings and falls through fills; its slope is the average signed net area, (1000 - 600)/50 = +8 m². A cut-to-fill point is a local maximum, not necessarily the highest."
      },
      {
       "id": "c-acie0906-2",
       "block": "mass-haul-ordinates-surplus-and-borrow",
       "src": "assets/civil-capsule-notes/acie0906-2.svg",
       "width": 720,
       "height": 420,
       "title": "Reading mass-haul ordinates",
       "caption": "A rising ordinate means net cut and a falling one net fill; a positive ordinate is cumulative surplus. A curve still above zero but falling is consuming earlier surplus, and ending at -250 m³ means 250 m³ of borrow."
      },
      {
       "id": "c-acie0906-3",
       "block": "field-compaction-rollers-and-patterns",
       "src": "assets/civil-notes/acie0906-1.svg",
       "width": 720,
       "height": 420,
       "title": "Controlled lifts and compaction",
       "caption": "Moisture conditioning, lift thickness and roller action work together; a smooth surface does not prove full-depth density."
      },
      {
       "id": "c-acie0906-4",
       "block": "macadam-construction-methods",
       "src": "assets/civil-notes/acie0906-2.svg",
       "width": 720,
       "height": 420,
       "title": "Penetration-macadam sequence",
       "caption": "Coarse aggregate is spread and rolled before binder application and the specified key aggregate and sealing operations."
      },
      {
       "id": "c-acie0906-5",
       "block": "bituminous-layers-and-sequence",
       "src": "assets/civil-notes/acie0906-3.svg",
       "width": 720,
       "height": 420,
       "title": "Asphalt production and placement",
       "caption": "Material proportioning, mixing, transport, laying and compaction must stay coordinated within the approved process."
      },
      {
       "id": "c-acie0906-6",
       "block": "rutting-definition-and-densification",
       "src": "assets/civil-capsule-notes/acie0906-3.svg",
       "width": 720,
       "height": 420,
       "title": "Rutting profiles: shear displacement and densification",
       "caption": "Rutting is permanent depression along the wheel tracks. Troughs with raised ridges beside them show lateral shear displacement; troughs without ridges fit post-construction densification of an undercompacted layer."
      },
      {
       "id": "c-acie0906-7",
       "block": "cracking-types-and-crack-treatment",
       "src": "assets/civil-notes/acie0906-4.svg",
       "width": 720,
       "height": 420,
       "title": "Different pavement distress patterns",
       "caption": "Cracking, rutting and surface loss can have different causes; the pattern guides investigation rather than proving a diagnosis."
      }
     ],
     "AALL1001": [
      {
       "id": "c-aall1001-1",
       "block": "lettering-height-and-inclination",
       "src": "assets/civil-capsule-notes/aall1001-1.svg",
       "width": 720,
       "height": 420,
       "title": "Lettering height and inclined lettering",
       "caption": "Lettering size is the nominal capital height: a narrow I and a broad M are both 5 mm tall. Inclined lettering slopes 75 degrees to the baseline, a lean of 15 degrees from the vertical toward the right."
      },
      {
       "id": "c-aall1001-2",
       "block": "a-series-area-and-side-ratio",
       "src": "assets/civil-capsule-notes/aall1001-2.svg",
       "width": 720,
       "height": 420,
       "title": "A-series sheets by repeated halving",
       "caption": "Each A size halves the long side of the one before, halving the area: A1 is 1/2 m², A2 is 1/4 m² and A3 is 0.125 m². The shape survives halving only with sides in the ratio √2 : 1."
      },
      {
       "id": "c-aall1001-3",
       "block": "drawing-board-set-squares-and-clinograph",
       "src": "assets/civil-capsule-notes/aall1001-3.svg",
       "width": 720,
       "height": 420,
       "title": "Set-square angles in steps of 15 degrees",
       "caption": "The 45 and 30-60 set squares combine only into multiples of 15 degrees, such as 105 = 60 + 45, 75 = 45 + 30 and 150 = 180 - 30. An angle of 115 degrees needs an adjustable clinograph."
      },
      {
       "id": "c-aall1001-4",
       "block": "hidden-lines-visibility-and-section-hatching",
       "src": "assets/civil-notes/aall1001-4.svg",
       "width": 720,
       "height": 420,
       "title": "Section through a hollow sleeve",
       "caption": "Hatching identifies cut material; the bore remains an unhatched void in the sectional views."
      },
      {
       "id": "c-aall1001-5",
       "block": "scales-representative-fraction-and-radius-symbol",
       "src": "assets/civil-capsule-notes/aall1001-4.svg",
       "width": 720,
       "height": 420,
       "title": "Representative fraction and the radius symbol",
       "caption": "Both lengths must be in one unit: 5 cm for 250 m = 25000 cm is RF 1:5000, not 1:50; a 600 mm part drawn 60 mm long is at 1:10. A curve marked R25 has the curvature of a 50 mm diameter circle."
      },
      {
       "id": "c-aall1001-6",
       "block": "orthographic-views-and-third-angle-layout",
       "src": "assets/civil-notes/aall1001-1.svg",
       "width": 720,
       "height": 420,
       "title": "Three orthographic views",
       "caption": "Front, top and side views recover different coordinate pairs of the same illustrative block."
      },
      {
       "id": "c-aall1001-7",
       "block": "orthographic-views-and-third-angle-layout",
       "src": "assets/civil-notes/aall1001-2.svg",
       "width": 720,
       "height": 420,
       "title": "First-angle versus third-angle layout",
       "caption": "The same top and side views occupy different positions around the front view under the two conventions."
      },
      {
       "id": "c-aall1001-8",
       "block": "oblique-and-isometric-pictorial-views",
       "src": "assets/civil-notes/aall1001-3.svg",
       "width": 720,
       "height": 420,
       "title": "Isometric axes",
       "caption": "The three projected principal axes are equally inclined, with 120-degree angles between their positive directions."
      },
      {
       "id": "c-aall1001-9",
       "block": "conic-sections-of-a-right-circular-cone",
       "src": "assets/civil-capsule-notes/aall1001-5.svg",
       "width": 720,
       "height": 420,
       "title": "Sections of a right circular double cone",
       "caption": "A plane parallel to the axis but offset from it cuts a hyperbola on both nappes; a plane through the axis gives two crossing generators; a plane parallel to the base cuts a smaller circle."
      },
      {
       "id": "c-aall1001-10",
       "block": "loci-circle-arc-archimedean-spiral-and-helix",
       "src": "assets/civil-capsule-notes/aall1001-6.svg",
       "width": 720,
       "height": 420,
       "title": "Loci from motion rules",
       "caption": "A pendulum bob at a fixed distance from its pivot traces a circular arc; uniform outward motion on a uniformly turning ray traces an Archimedean spiral; circling an axis while advancing uniformly traces a helix."
      }
     ],
     "AALL1002": [
      {
       "id": "c-aall1002-1",
       "block": "single-sum-compounding-and-discounting",
       "src": "assets/civil-capsule-notes/aall1002-1.svg",
       "width": 720,
       "height": 420,
       "title": "Moving a single sum through time",
       "caption": "A present sum grows by (1 + i) each period: NRs 100000 at 10 percent becomes 133100 after three years, and 133100 due then is worth 100000 now. At 8 percent, 100000 today equals 108000 in a year."
      },
      {
       "id": "c-aall1002-2",
       "block": "compound-interest-and-effective-annual-rate",
       "src": "assets/civil-capsule-notes/aall1002-2.svg",
       "width": 720,
       "height": 420,
       "title": "Compound interest and the effective annual rate",
       "caption": "NRs 20000 at 10 percent compound grows to 22000 and then 24200, so the interest is 2000 then 2200, 4200 in all. A nominal 12 percent compounded monthly is an effective 12.6825 percent a year."
      },
      {
       "id": "c-aall1002-3",
       "block": "sinking-funds-and-arithmetic-gradients",
       "src": "assets/civil-notes/aall1002-5.svg",
       "width": 720,
       "height": 420,
       "title": "Worked annual sinking fund",
       "caption": "End-year deposits of Rs 182.1195 earn 5 percent annually to accumulate Rs 22000 over 40 years; the target is building cost less scrap value."
      },
      {
       "id": "c-aall1002-4",
       "block": "discounted-cash-flow-npv-and-benefit-cost",
       "src": "assets/civil-notes/aall1002-1.svg",
       "width": 720,
       "height": 420,
       "title": "Dated cash flows",
       "caption": "The illustrated project has an initial outflow and later receipts; discount each amount from its own date."
      },
      {
       "id": "c-aall1002-5",
       "block": "irr-marr-and-justified-reinvestment",
       "src": "assets/civil-notes/aall1002-2.svg",
       "width": 720,
       "height": 420,
       "title": "NPV profile and IRR",
       "caption": "For the conventional example, NPV decreases with discount rate and crosses zero at its IRR."
      },
      {
       "id": "c-aall1002-6",
       "block": "mutually-exclusive-and-incremental-analysis",
       "src": "assets/civil-notes/aall1002-3.svg",
       "width": 720,
       "height": 420,
       "title": "Incremental alternative comparison",
       "caption": "Compare the added benefits and added cost of the larger option; the highest individual ratio need not maximize net benefit."
      },
      {
       "id": "c-aall1002-7",
       "block": "straight-line-depreciation-and-book-value",
       "src": "assets/civil-notes/aall1002-4.svg",
       "width": 720,
       "height": 420,
       "title": "Depreciation patterns",
       "caption": "Illustrative straight-line and declining-balance paths show cost allocation over time, not a forecast of sale proceeds."
      }
     ],
     "AALL1003": [
      {
       "id": "c-aall1003-1",
       "block": "bar-charts-cpm-and-crash-cost-slope",
       "src": "assets/civil-notes/aall1003-2.svg",
       "width": 720,
       "height": 420,
       "title": "Early-start bar chart",
       "caption": "Bars show the hypothetical A-H timing, while dependencies are defined by the accompanying network."
      },
      {
       "id": "c-aall1003-2",
       "block": "aoa-activities-events-and-dummies",
       "src": "assets/civil-capsule-notes/aall1003-1.svg",
       "width": 720,
       "height": 420,
       "title": "Activity-on-arrow network with a dummy",
       "caption": "In AOA notation arrows are activities and nodes are events that take no time. When C needs both A and B but D needs only A, a zero-duration dummy from the end of A to the start of C keeps the logic."
      },
      {
       "id": "c-aall1003-3",
       "block": "forward-pass-and-critical-path",
       "src": "assets/civil-notes/aall1003-1.svg",
       "width": 720,
       "height": 420,
       "title": "Eight-activity dependency network",
       "caption": "A hypothetical eight-activity network has two 13-day critical paths through B and C; the equipment branch has float."
      },
      {
       "id": "c-aall1003-4",
       "block": "backward-pass-latest-times",
       "src": "assets/civil-capsule-notes/aall1003-2.svg",
       "width": 720,
       "height": 420,
       "title": "Backward pass: the minimum rule",
       "caption": "Each outgoing activity gives a candidate latest time for its start event: successor latest time minus duration. With 15 - 4 = 11 and 18 - 5 = 13, event J's latest allowable time is day 11."
      },
      {
       "id": "c-aall1003-5",
       "block": "total-float-free-float-and-event-slack",
       "src": "assets/civil-capsule-notes/aall1003-3.svg",
       "width": 720,
       "height": 420,
       "title": "Total float and free float on a bar chart",
       "caption": "With ES 4, duration 5 and LF 12, the activity can slip from EF 9 to LF 12: total float 3 days. An activity ending on day 7 whose earliest successor starts on day 10 has 3 days of free float."
      },
      {
       "id": "c-aall1003-6",
       "block": "pert-three-estimates-and-spread",
       "src": "assets/civil-capsule-notes/aall1003-4.svg",
       "width": 720,
       "height": 420,
       "title": "PERT three-estimate duration",
       "caption": "A beta-type distribution with optimistic 2, most likely 5 and pessimistic 14 days has expected duration (2 + 4 × 5 + 14)/6 = 6 days. A variance of 16 days² gives a standard deviation of 4 days."
      },
      {
       "id": "c-aall1003-7",
       "block": "resource-levelling-versus-smoothing",
       "src": "assets/civil-notes/aall1003-3.svg",
       "width": 720,
       "height": 420,
       "title": "Resource demand and smoothing",
       "caption": "The hypothetical four-worker smoothing case moves E and F within float while retaining the 13-day finish."
      },
      {
       "id": "c-aall1003-8",
       "block": "monitoring-earned-value-and-critical-ratio",
       "src": "assets/civil-notes/aall1003-4.svg",
       "width": 720,
       "height": 420,
       "title": "Planned, earned and actual cost",
       "caption": "Illustrative cumulative curves distinguish planned value, earned value and actual cost at a common status date."
      }
     ],
     "AALL1004": [
      {
       "id": "c-aall1004-1",
       "block": "risk-as-variability-and-timing-of-analysis",
       "src": "assets/civil-capsule-notes/aall1004-1.svg",
       "width": 720,
       "height": 420,
       "title": "Risk as variability, and when to analyse it",
       "caption": "Returns of 8 or 12 percent and of 4 or 16 percent share a 10 percent mean, but their standard deviations are 2 and 6 points. Detailed risk analysis pays most in planning, and is updated as work proceeds."
      },
      {
       "id": "c-aall1004-2",
       "block": "risk-management-owners-and-continuous-improvement",
       "src": "assets/civil-notes/aall1004-1.svg",
       "width": 720,
       "height": 420,
       "title": "Qualitative risk matrix",
       "caption": "Likelihood and consequence categories prioritize attention; colours and ordinal scores are not measured probabilities or money."
      },
      {
       "id": "c-aall1004-3",
       "block": "risk-management-owners-and-continuous-improvement",
       "src": "assets/civil-notes/aall1004-2.svg",
       "width": 720,
       "height": 420,
       "title": "Risk-response choices",
       "caption": "Avoidance, mitigation, transfer and acceptance have different effects; residual risk still needs an accountable owner."
      },
      {
       "id": "c-aall1004-4",
       "block": "project-appraisal-and-sponsor",
       "src": "assets/civil-notes/aall1004-4.svg",
       "width": 720,
       "height": 420,
       "title": "Funding gap before completion",
       "caption": "A hypothetical cash balance becomes negative before ending positive; interim liquidity must still be financed."
      },
      {
       "id": "c-aall1004-5",
       "block": "procurement-methods-and-bid-validity",
       "src": "assets/civil-notes/aall1004-3.svg",
       "width": 720,
       "height": 420,
       "title": "Procurement decision sequence",
       "caption": "Requirements, solicitation, evaluation and contract administration are distinct tasks governed by the applicable method and edition."
      }
     ],
     "AALL1005": [
      {
       "id": "c-aall1005-1",
       "block": "ethics-and-professionalism",
       "src": "assets/civil-notes/aall1005-2.svg",
       "width": 720,
       "height": 420,
       "title": "Evidence-led ethical response",
       "caption": "Identify the concern, check competence and evidence, communicate through the proper channel and verify closure."
      },
      {
       "id": "c-aall1005-2",
       "block": "accident-records-and-ppe-in-control-hierarchy",
       "src": "assets/civil-notes/aall1005-1.svg",
       "width": 720,
       "height": 420,
       "title": "Hierarchy of hazard controls",
       "caption": "Elimination and substitution address the source; engineering, administrative and personal protection have different remaining dependencies."
      },
      {
       "id": "c-aall1005-3",
       "block": "labour-act-working-time-and-rest",
       "src": "assets/civil-capsule-notes/aall1005-1.svg",
       "width": 720,
       "height": 420,
       "title": "Working time and rest under Labour Act 2074, section 28",
       "caption": "Ordinary working time is limited to 8 hours a day and 48 a week, with overtime regulated separately. After five continuous hours a half-hour rest is given and counted as working time; continuous work uses rotation."
      },
      {
       "id": "c-aall1005-4",
       "block": "nea-and-nec-association-versus-regulator",
       "src": "assets/civil-notes/aall1005-3.svg",
       "width": 720,
       "height": 420,
       "title": "Association and regulator",
       "caption": "NEA's professional support role is distinct from NEC's statutory recognition, registration and conduct functions."
      }
     ],
     "AALL1006": [
      {
       "id": "c-aall1006-1",
       "block": "reading-nec-law-by-edition-and-date",
       "src": "assets/civil-notes/aall1006-1.svg",
       "width": 720,
       "height": 420,
       "title": "Hierarchy of regulatory instruments",
       "caption": "The Act, valid Regulations and implementing notices have different authority; upload date is not commencement."
      },
      {
       "id": "c-aall1006-2",
       "block": "registration-categories-and-route-to-practise",
       "src": "assets/civil-notes/aall1006-2.svg",
       "width": 720,
       "height": 420,
       "title": "Ordinary registration pathway",
       "caption": "Application, scrutiny, examination, registration and certification are separate stages under the inspected legal route."
      },
      {
       "id": "c-aall1006-3",
       "block": "recognition-of-engineering-education",
       "src": "assets/civil-notes/aall1006-3.svg",
       "width": 720,
       "height": 420,
       "title": "Qualification versus individual status",
       "caption": "Recognition of a programme or qualification does not by itself register an individual engineer."
      },
      {
       "id": "c-aall1006-4",
       "block": "offences-and-penalties-under-section-30",
       "src": "assets/civil-notes/aall1006-4.svg",
       "width": 720,
       "height": 420,
       "title": "Inquiry and reasoned decision",
       "caption": "A complaint leads to evidence and an opportunity to respond before a decision; the schematic is not individual legal advice."
      }
     ],
     "additional-capsule-rural": [
      {
       "id": "c-additional-capsule-rural-1",
       "block": "farmstead-zoning",
       "src": "assets/civil-capsule-notes/additional-capsule-rural-1.svg",
       "width": 720,
       "height": 420,
       "title": "Farmstead zoning",
       "caption": "A farmstead layout separates the home's food preparation and sanitation from animal areas and from the storage and mixing of pesticides and other farm chemicals."
      },
      {
       "id": "c-additional-capsule-rural-2",
       "block": "animal-house-orientation",
       "src": "assets/civil-capsule-notes/additional-capsule-rural-2.svg",
       "width": 720,
       "height": 420,
       "title": "Orienting a long animal house",
       "caption": "In a hot, sunny, low-latitude region a long animal house commonly runs east-west, so its long walls face north and south and the low morning and evening sun falls mainly on the short end walls."
      },
      {
       "id": "c-additional-capsule-rural-3",
       "block": "livestock-restraint-and-machine-milking",
       "src": "assets/civil-capsule-notes/additional-capsule-rural-3.svg",
       "width": 720,
       "height": 420,
       "title": "Handling crush and machine milking",
       "caption": "A crush restrains one animal at a time for treatment. A cow milking cluster has four teat cups; a controlled vacuum draws milk while pulsating liners alternate milking and rest phases."
      },
      {
       "id": "c-additional-capsule-rural-4",
       "block": "fish-chilling-versus-frozen-storage",
       "src": "assets/civil-capsule-notes/additional-capsule-rural-4.svg",
       "width": 720,
       "height": 420,
       "title": "Chilled fresh fish versus frozen storage",
       "caption": "Melting ice holds fresh fish near 0 °C; frozen storage keeps an already frozen product well below freezing, and -25 °C is one such set point. They are different product states, not one process."
      },
      {
       "id": "c-additional-capsule-rural-5",
       "block": "intercultural-operations-and-footbaths",
       "src": "assets/civil-capsule-notes/additional-capsule-rural-5.svg",
       "width": 720,
       "height": 420,
       "title": "Intercultural operations and a biosecure footbath",
       "caption": "Intercultural operations such as weeding, hoeing and earthing-up are done in the growing crop between establishment and harvest. A poultry footbath works only with cleaned footwear and correct disinfectant strength and contact."
      }
     ]
    };
    window.CIVIL_CAPSULE_NOTE_FIGURES = Object.freeze(Object.fromEntries(Object.entries(figures).map(([code, rows]) => [code, Object.freeze(rows.map((row) => Object.freeze(row)))])));
})();
