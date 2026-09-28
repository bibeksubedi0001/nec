/* ============================================================
   CIVIL MODEL SET 20 — Civil Engineering licence-style model paper
   100 questions · 120 minutes · no negative marking

     Basic Civil Engineering...................  13
     Structural Mechanics......................  11
     Design of Structures......................  10
     Soil Mechanics and Foundation.............  14
     Basic Water Resources Engineering.........  12
     Hydropower................................   9
     Irrigation and Drainage...................  10
     Transportation............................  11
     Water Supply, Sanitation and Environment..  10

   Generated from the civil engineering question bank; every bank
   question is used in exactly one set. Identical duplicate options
   were collapsed, and the key was rotated across a/b/c/d except on
   questions whose options refer to other options.
   The "src" field on each question is its id in the source bank.
   ============================================================ */
const CIVIL_MODEL_20 = {
    day: 50,
    kind: "model",
    badge: { top: "Model", main: "C20" },
    title: "Civil Model Set 20",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm20basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm20q001",
                    src: "BASI674-00242",
                    text: "The construction of optical squares is based on the principle of optical",
                    options: [
                        { key: "a", text: "Double reflection" },
                        { key: "b", text: "reflection" },
                        { key: "c", text: "refraction" },
                        { key: "d", text: "Double refraction" }
                    ],
                    answer: "a",
                    explanation: "Optical squares use two reflections to turn the line of sight by a fixed angle (usually 90°). This principle is based on double reflection."
                },
                {
                    id: "cm20q002",
                    src: "BASI674-00243",
                    text: "Cross staff is used for:",
                    options: [
                        { key: "a", text: "Setting out right angle" },
                        { key: "b", text: "Measuring horizontal angle" },
                        { key: "c", text: "Both (a) and (b)" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "A cross staff is a simple instrument used to set out right angles (90°) from a survey line. It cannot measure arbitrary horizontal angles like a theodolite."
                },
                {
                    id: "cm20q003",
                    src: "BASI674-00244",
                    text: "Building is an obstacle to:",
                    options: [
                        { key: "a", text: "Chaining but not ranging" },
                        { key: "b", text: "Ranging but not chaining" },
                        { key: "c", text: "Both chaining and ranging" },
                        { key: "d", text: "Neither chaining nor ranging" }
                    ],
                    answer: "c",
                    explanation: "A building obstructs the direct line of sight (ranging) and prevents direct measurement of distance (chaining), requiring special methods to overcome the obstacle."
                },
                {
                    id: "cm20q004",
                    src: "BASI674-00245",
                    text: "The correction for slope in chaining is proportional to",
                    options: [
                        { key: "a", text: "h" },
                        { key: "b", text: "h^3" },
                        { key: "c", text: "h^2" }
                    ],
                    answer: "c",
                    explanation: "The slope correction for a length \\(L\\) and height difference \\(h\\) is \\[C = L - \\sqrt{L^2 - h^2} \\approx \\dfrac{h^2}{2L}\\] The main variable is \\(h^2\\), so the correction is proportional to the square of the difference in height."
                },
                {
                    id: "cm20q005",
                    src: "BASI674-00246",
                    text: "\"Offsets\" are",
                    options: [
                        { key: "a", text: "Lateral measurements from chain line" },
                        { key: "b", text: "Tie or check lines which are perpendicular to chain line" },
                        { key: "c", text: "Sets of minor measurements in chain surveying" },
                        { key: "d", text: "Chain lines which go out of alignments" }
                    ],
                    answer: "a",
                    explanation: "Offsets are short lateral measurements taken from the main survey line (chain line) to locate the details of the area being surveyed, such as boundaries, buildings, etc."
                },
                {
                    id: "cm20q006",
                    src: "BASI674-00247",
                    text: "Survey line provided to verify the accuracy of the framework is known as",
                    options: [
                        { key: "a", text: "Tie line" },
                        { key: "b", text: "Check line" },
                        { key: "c", text: "Base line" },
                        { key: "d", text: "Subsidiary line" }
                    ],
                    answer: "b",
                    explanation: "A check line (or proof line) is measured between points on the main survey framework to provide a check on the accuracy of the plotted survey."
                },
                {
                    id: "cm20q007",
                    src: "BASI674-00249",
                    text: "Maximum allowable limit upto that a measurement may vary from the true value is known as",
                    options: [
                        { key: "a", text: "Residual error" },
                        { key: "b", text: "Expected error" },
                        { key: "c", text: "Permissible error" },
                        { key: "d", text: "Sale error" }
                    ],
                    answer: "c",
                    explanation: "Permissible error is the maximum amount of error that is allowed in a measurement or operation without making the results unacceptable."
                },
                {
                    id: "cm20q008",
                    src: "BASI674-00250",
                    text: "Number of links in a 30 m metric chain is",
                    options: [
                        { key: "a", text: "100" },
                        { key: "b", text: "180" },
                        { key: "c", text: "200" },
                        { key: "d", text: "150" }
                    ],
                    answer: "d",
                    explanation: "A 30 m metric chain has 150 links, each 200 mm long, with brass tags at every 5 m to make counting quick. The older 20 m chain has 100 links of the same length, so the link count follows directly from the chain length."
                },
                {
                    id: "cm20q009",
                    src: "BASI674-00251",
                    text: "Positive error is caused if",
                    options: [
                        { key: "a", text: "Length of chain is shorter than the standard" },
                        { key: "b", text: "Slope and sag correction is not applied" },
                        { key: "c", text: "Measurements are made along the incorrectly aligned line" },
                        { key: "d", text: "All Options are correct" }
                    ],
                    answer: "d",
                    explanation: "A shorter-than-standard chain overcounts nominal length; using a sloping or sagging length as horizontal also overestimates it; and an incorrectly aligned path is longer than the straight line. Under these usual uncorrected-distance conventions, all three cause positive errors, so all options are correct."
                },
                {
                    id: "cm20q010",
                    src: "BASI674-00252",
                    text: "Compensating errors in chaining are",
                    options: [
                        { key: "a", text: "Proportional to the length of line" },
                        { key: "b", text: "Proportional to the square root of the length of line" },
                        { key: "c", text: "Inversely proportional to the square root of the length" },
                        { key: "d", text: "Inversely Proportional to the length of the line" }
                    ],
                    answer: "b",
                    explanation: "Compensating errors are random errors that tend to cancel out over a series of measurements. Their magnitude is usually taken as proportional to the square root of the length, \\(\\sqrt{L}\\)."
                },
                {
                    id: "cm20q011",
                    src: "BASI674-00253",
                    text: "If a chain is found very short on testing, it can be adjusted by",
                    options: [
                        { key: "a", text: "Inserting additional circular rings" },
                        { key: "b", text: "Flattening the circular rings" },
                        { key: "c", text: "Straightening the links" },
                        { key: "d", text: "Any of the Options" }
                    ],
                    answer: "c",
                    explanation: "If a chain is too short, the error is often due to bent links. Straightening these bent links will effectively lengthen the chain back towards its standard length."
                },
                {
                    id: "cm20q012",
                    src: "BASI674-00254",
                    text: "Chalmage is the distance measured",
                    options: [
                        { key: "a", text: "Along a chain line" },
                        { key: "b", text: "Perpendicular to a line" },
                        { key: "c", text: "Perpendicular to a tie line" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "Chalmage refers to the distance measured along a chain line from the starting point of the survey, often used as a reference for locating points."
                },
                {
                    id: "cm20q013",
                    src: "BASI674-00255",
                    text: "In chain survey execution, the first step taken is",
                    options: [
                        { key: "a", text: "Reconnaissance" },
                        { key: "b", text: "Reference sketches" },
                        { key: "c", text: "Marking stations" },
                        { key: "d", text: "Running survey line" }
                    ],
                    answer: "a",
                    explanation: "The initial step in any survey, including chain surveying, is a preliminary reconnaissance or inspection of the area to be surveyed to determine the best arrangement of survey lines and stations."
                }
            ]
        },
        {
            id: "cm20stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm20q014",
                    src: "STRU935-00204",
                    text: "Which of the following is also known as the working load?",
                    options: [
                        { key: "a", text: "Crippling load" },
                        { key: "b", text: "Safe load" },
                        { key: "c", text: "Ultimate load" },
                        { key: "d", text: "Buckling load" }
                    ],
                    answer: "b",
                    explanation: "The working load or safe load is the maximum load a structure is designed to carry under normal service conditions, incorporating a factor of safety."
                },
                {
                    id: "cm20q015",
                    src: "STRU935-00205",
                    text: "At ______ load, the column is said to have developed an elastic instability.",
                    options: [
                        { key: "a", text: "Safe" },
                        { key: "b", text: "Working" },
                        { key: "c", text: "Crippling" },
                        { key: "d", text: "Factored" }
                    ],
                    answer: "c",
                    explanation: "The crippling load (or buckling load) is the load at which a column becomes elastically unstable and buckles, as defined by Euler's theory."
                },
                {
                    id: "cm20q016",
                    src: "STRU935-00206",
                    text: "The slenderness ratio is ______ to critical stress.",
                    options: [
                        { key: "a", text: "Directly proportional" },
                        { key: "b", text: "Equal" },
                        { key: "c", text: "Transverse" },
                        { key: "d", text: "Inversely proportional" }
                    ],
                    answer: "d",
                    explanation: "By Euler's formula, the critical buckling stress varies inversely with the square of the slenderness ratio: \\[\\sigma_{cr} \\propto \\dfrac{1}{\\lambda^2}\\]"
                },
                {
                    id: "cm20q017",
                    src: "STRU935-00207",
                    text: "For a given material length, end conditions and equal area the shape of the column which is most efficient as per Euler's is ______.",
                    options: [
                        { key: "a", text: "Tubular" },
                        { key: "b", text: "Square" },
                        { key: "c", text: "Circular" },
                        { key: "d", text: "I section" }
                    ],
                    answer: "a",
                    explanation: "A tubular section has a high radius of gyration for its cross-sectional area, resulting in a lower slenderness ratio and higher buckling resistance per Euler's formula."
                },
                {
                    id: "cm20q018",
                    src: "STRU935-00208",
                    text: "Which of the following relation is correct?",
                    options: [
                        { key: "a", text: "P = πEI / L²" },
                        { key: "b", text: "P = π²EI / L²" },
                        { key: "c", text: "P = πEI / (√2 L)" },
                        { key: "d", text: "P = πEI / (2L)" }
                    ],
                    answer: "b",
                    explanation: "Euler's critical load is pi squared EI over L squared, with L the effective length, which equals the actual length only for a pin-ended column. The squared term is why slenderness dominates: doubling the length quarters the buckling load, whatever the strength of the material."
                },
                {
                    id: "cm20q019",
                    src: "STRU935-00209",
                    text: "Find the moment of resistance of rectangular beam of width 40 mm depth 400 mm if the bending stress is 15 N/mm².",
                    options: [
                        { key: "a", text: "78 kNm" },
                        { key: "b", text: "56 kNm" },
                        { key: "c", text: "16 kNm" },
                        { key: "d", text: "132 kNm" }
                    ],
                    answer: "c",
                    explanation: "For the stated rectangular section, \\(Z=\\dfrac{bd^2}{6}\\). With b = 40 mm and d = 400 mm, \\(Z=1.0666667\\times10^6\\,\\mathrm{mm^3}\\). At f = 15 N/mm², \\(M=fZ=16\\times10^6\\,\\mathrm{N\\,mm}\\), or 16 kN m. The former 84 kNm option has been replaced; changing the stated width or depth to fit it would solve a different question."
                },
                {
                    id: "cm20q020",
                    src: "STRU935-00210",
                    text: "Unsymmetrical bending occurs due to ……",
                    options: [
                        { key: "a", text: "The Beam cross section is unsymmetrical" },
                        { key: "b", text: "The Beam is subjected to trust in addition to bending moment" },
                        { key: "c", text: "The bending moment diagram is unsymmetrical" },
                        { key: "d", text: "The shear Centre does not coincide with the neutral axis" }
                    ],
                    answer: "d",
                    explanation: "Unsymmetrical bending occurs when the plane of loading does not pass through the shear center or when the cross-section is asymmetrical, causing twisting in addition to bending."
                },
                {
                    id: "cm20q021",
                    src: "STRU935-00211",
                    text: "Which of the following causes greatest deflection for beams?",
                    options: [
                        { key: "a", text: "Internal bending" },
                        { key: "b", text: "Internal axial force" },
                        { key: "c", text: "Both causes equal deflections" },
                        { key: "d", text: "External loads" }
                    ],
                    answer: "a",
                    explanation: "Deflection in beams is primarily caused by bending moments. Axial forces cause elongation/contraction but negligible deflection compared to bending."
                },
                {
                    id: "cm20q022",
                    src: "STRU935-00212",
                    text: "In deflection diagrams, which of the following can have zero angular deflection?",
                    options: [
                        { key: "a", text: "Pin support" },
                        { key: "b", text: "Fixed support" },
                        { key: "c", text: "Roller support" },
                        { key: "d", text: "Hinge" }
                    ],
                    answer: "b",
                    explanation: "A fixed support restrains rotation as well as translation, so the slope of the elastic curve is zero there and the beam leaves the support horizontally. Pins, rollers and internal hinges all allow rotation, so their angular deflection is generally not zero."
                },
                {
                    id: "cm20q023",
                    src: "STRU935-00213",
                    text: "What is the relation between angular deflections between two legs connected by a pin-connected joint?",
                    options: [
                        { key: "a", text: "They are equal" },
                        { key: "b", text: "Can’t say" },
                        { key: "c", text: "They are unequal" },
                        { key: "d", text: "They don’t show angular deflection" }
                    ],
                    answer: "c",
                    explanation: "At a pin joint, the members can rotate independently. Therefore, their angular deflections (slopes) are not necessarily equal."
                },
                {
                    id: "cm20q024",
                    src: "STRU935-00214",
                    text: "What is the relation between angular deflections between two legs connected by a fixed-connected joint?",
                    options: [
                        { key: "a", text: "They are unequal" },
                        { key: "b", text: "Can’t say" },
                        { key: "c", text: "They don’t show angular deflection" },
                        { key: "d", text: "They are equal" }
                    ],
                    answer: "d",
                    explanation: "A fixed joint between members forces them to maintain their original angle relative to each other. Thus, their angular deflections are equal."
                }
            ]
        },
        {
            id: "cm20desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "10 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm20q025",
                    src: "DESI787-00176",
                    text: "Given size of column as 200 mm x 400 mm carrying 330kN load and soil bearing capacity 150kN/m². Calculate footing area for isolated footing required for such column in square meter.",
                    options: [
                        { key: "a", text: "2.20" },
                        { key: "b", text: "2.42" },
                        { key: "c", text: "4.24" },
                        { key: "d", text: "3.06" }
                    ],
                    answer: "a",
                    explanation: "The area required is the total load divided by the safe bearing capacity. Neglecting self-weight, as is common initially, \\[A = \\dfrac{330}{150} = 2.20\\ \\text{m}^2\\] Adding about 10% for self-weight would give \\(\\dfrac{363}{150} = 2.42\\) m<sup>2</sup>; the key uses the basic 2.20."
                },
                {
                    id: "cm20q026",
                    src: "DESI787-00177",
                    text: "For RC footing ratio of long side to short side 1.5, the ratio of reinforcement in central band width to total reinforcement in short direction is:",
                    options: [
                        { key: "a", text: "1.8" },
                        { key: "b", text: "0.6" },
                        { key: "c", text: "1.2" },
                        { key: "d", text: "1.5" }
                    ],
                    answer: "b",
                    explanation: "IS 456:2000 places a share of the short-direction steel in a central band of width equal to the short side: \\[\\dfrac{2}{\\beta + 1} = \\dfrac{2}{1.5 + 1} = 0.8\\] with \\(\\beta = 1.5\\) the long-to-short ratio. 0.8 is not an option; the key gives 0.6, which may come from a different code or a miscalculation."
                },
                {
                    id: "cm20q027",
                    src: "DESI787-00178",
                    text: "Cube strength of concrete to be used for pre-tensioned and post- tensioned work should not be less than",
                    options: [
                        { key: "a", text: "30 MPa &amp; 40 MPa" },
                        { key: "b", text: "40 MPa &amp; 60 MPa" },
                        { key: "c", text: "40 MPa &amp; 30 MPa" },
                        { key: "d", text: "60 MPa &amp; 40 MPa" }
                    ],
                    answer: "c",
                    explanation: "As per IS 1343, for pre-tensioned concrete, the minimum cube strength at transfer is 40 MPa. For post-tensioned concrete, it is 30 MPa."
                },
                {
                    id: "cm20q028",
                    src: "DESI787-00179",
                    text: "Which of the following influence the deflections of prestressed concrete members?",
                    options: [
                        { key: "a", text: "Wall profile" },
                        { key: "b", text: "Type of aggregates" },
                        { key: "c", text: "Type of cement" },
                        { key: "d", text: "Cable profile" }
                    ],
                    answer: "d",
                    explanation: "The cable (tendon) profile in a prestressed member determines the eccentricity of the prestressing force along the length, which directly affects the internal moments and thus the camber and deflections of the member."
                },
                {
                    id: "cm20q029",
                    src: "DESI787-00180",
                    text: "The necessity of high strength concrete in prestressed concrete is due to ......",
                    options: [
                        { key: "a", text: "Shear and Bonding" },
                        { key: "b", text: "Cracking" },
                        { key: "c", text: "Loading and Unloading" },
                        { key: "d", text: "Bending" }
                    ],
                    answer: "a",
                    explanation: "High-strength concrete is necessary to withstand the high bearing stresses at anchorages in post-tensioning and to develop sufficient bond stress for transfer in pre-tensioning. It also offers higher resistance to shear and cracking."
                },
                {
                    id: "cm20q030",
                    src: "DESI787-00181",
                    text: "The resultant stresses in prestress concrete at any section are obtained by the effect of ......",
                    options: [
                        { key: "a", text: "Prestress and torsion" },
                        { key: "b", text: "Prestress and loads" },
                        { key: "c", text: "Prestress and shear" },
                        { key: "d", text: "Prestress and bending" }
                    ],
                    answer: "b",
                    explanation: "The net stress at any section in a prestressed concrete member is the algebraic sum of the stresses due to the prestressing force and the stresses due to all external loads (dead load, live load, etc.)."
                },
                {
                    id: "cm20q031",
                    src: "DESI787-00182",
                    text: "The soffit of the beam after transfer of prestress to concrete will be under",
                    options: [
                        { key: "a", text: "Tension" },
                        { key: "b", text: "Bondage" },
                        { key: "c", text: "Compression" },
                        { key: "d", text: "Breakage" }
                    ],
                    answer: "c",
                    explanation: "After transfer, the prestressing force induces a camber (upward deflection) in the beam. This causes the entire section, including the soffit (bottom fiber), to be in compression initially, before any external loads are applied."
                },
                {
                    id: "cm20q032",
                    src: "DESI787-00183",
                    text: "Determine the throat thickness (in mm) of a fillet weld of size 5 mm, when the angle between fusion face is 90 degrees:",
                    options: [
                        { key: "a", text: "4.5 mm" },
                        { key: "b", text: "2.5 mm" },
                        { key: "c", text: "1.5 mm" },
                        { key: "d", text: "3.5 mm" }
                    ],
                    answer: "d",
                    explanation: "For an equal-leg fillet weld of size \\(s\\) with a \\(90^\\circ\\) angle between fusion faces, \\[t = \\dfrac{s}{\\sqrt{2}} \\approx 0.707s\\] For \\(s = 5\\) mm, \\(t = 5 \\times 0.707 = 3.535\\), about 3.5 mm."
                },
                {
                    id: "cm20q033",
                    src: "DESI787-00184",
                    text: "The minimum pitch for M16 bolt of grade 4.6 is?",
                    options: [
                        { key: "a", text: "27" },
                        { key: "b", text: "18" },
                        { key: "c", text: "40" },
                        { key: "d", text: "50" }
                    ],
                    answer: "a",
                    explanation: "IS 800:2007 sets the minimum bolt pitch at 2.5 times the nominal diameter: \\[2.5 \\times 16 = 40\\ \\text{mm}\\] The key's 27 is not \\(2.5d\\) and may be confused with an edge distance; it is kept as the intended legacy answer."
                },
                {
                    id: "cm20q034",
                    src: "DESI787-00185",
                    text: "The ratio of Young's modulus of structural mild steel to that of high tensile structural steel is about",
                    options: [
                        { key: "a", text: "1.5" },
                        { key: "b", text: "1" },
                        { key: "c", text: "2" },
                        { key: "d", text: "0.5" }
                    ],
                    answer: "b",
                    explanation: "The Young's Modulus (E) for all structural steels, whether mild steel (e.g., Fe 250) or high tensile steel (e.g., Fe 415, Fe 500), is approximately the same, around 200 GPa. Therefore, the ratio is 1."
                }
            ]
        },
        {
            id: "cm20soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "14 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm20q035",
                    src: "SOIL136-00244",
                    text: "The planes that exist in soil mass is ______.",
                    options: [
                        { key: "a", text: "Principal stress" },
                        { key: "b", text: "Stress plane" },
                        { key: "c", text: "Principal plane" },
                        { key: "d", text: "None" }
                    ],
                    answer: "c",
                    explanation: "Principal planes are specific orientations within a soil mass where shear stresses are zero. The stresses acting on these planes are called principal stresses."
                },
                {
                    id: "cm20q036",
                    src: "SOIL136-00245",
                    text: "The failure condition for a soil can be expressed in terms of limiting shear stress, called ______.",
                    options: [
                        { key: "a", text: "Principal stresses and Shear strength" },
                        { key: "b", text: "None of the mentioned" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "Shearing resistances" }
                    ],
                    answer: "d",
                    explanation: "Failure occurs when the applied shear stress equals the soil's shear resistance, which depends on the effective normal stress: \\[s = c' + \\sigma'\\tan\\phi'\\]"
                },
                {
                    id: "cm20q037",
                    src: "SOIL136-00246",
                    text: "The shear deformation of soil in a building can cause ______ of the following?",
                    options: [
                        { key: "a", text: "All of the mentioned" },
                        { key: "b", text: "Sinking of footing" },
                        { key: "c", text: "Slide in an earth embankment" },
                        { key: "d", text: "Movement of wedge" }
                    ],
                    answer: "a",
                    explanation: "Shear failure in geotechnical engineering can manifest in various ways, including bearing capacity failure (sinking footing), slope failure (slide in embankment), and lateral earth pressure failure (movement of a wedge behind a retaining wall)."
                },
                {
                    id: "cm20q038",
                    src: "SOIL136-00247",
                    text: "Major principal stress in a soil is represented by the symbol ______.",
                    options: [
                        { key: "a", text: "σ₂" },
                        { key: "b", text: "σ₁" },
                        { key: "c", text: "σ₃" },
                        { key: "d", text: "σ₄" }
                    ],
                    answer: "b",
                    explanation: "In soil mechanics, the three principal stresses are denoted as σ₁ (major), σ₂ (intermediate), and σ₃ (minor). The major principal stress is the largest of these."
                },
                {
                    id: "cm20q039",
                    src: "SOIL136-00248",
                    text: "The circle obtained from two dimensional stress system is known as ______.",
                    options: [
                        { key: "a", text: "Principal stress circle" },
                        { key: "b", text: "Shearing stress circle" },
                        { key: "c", text: "Mohr circle" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "A Mohr's circle is a graphical representation used to visualize the transformation of stresses (normal and shear) for any given plane within a material under a 2D state of stress."
                },
                {
                    id: "cm20q040",
                    src: "SOIL136-00249",
                    text: "The maximum shear stress τ_max for a soil mass is equal to ______.",
                    options: [
                        { key: "a", text: "(σ₁ + σ₃)/2" },
                        { key: "b", text: "(σ₁ - σ₂)/2" },
                        { key: "c", text: "(σ₂ - σ₃)/2" },
                        { key: "d", text: "(σ₁ - σ₃)/2" }
                    ],
                    answer: "d",
                    explanation: "The maximum shear stress (τ_max) is equal to the radius of the Mohr's circle, which is calculated as (σ₁ - σ₃) / 2. It acts on a plane oriented at 45° to the principal planes."
                },
                {
                    id: "cm20q041",
                    src: "SOIL136-00251",
                    text: "Stress component on planes of a loaded soil mass depends upon ______.",
                    options: [
                        { key: "a", text: "Direction of plane" },
                        { key: "b", text: "Stress acting on plane" },
                        { key: "c", text: "Shearing resistance" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "a",
                    explanation: "The magnitude of the normal and shear stress components on any plane within a soil mass depends on the orientation (direction) of that plane relative to the applied principal stresses."
                },
                {
                    id: "cm20q042",
                    src: "SOIL136-00252",
                    text: "Analysis of stability of slopes is used for determining ______.",
                    options: [
                        { key: "a", text: "Properties of the soil" },
                        { key: "b", text: "Shearing strength and Stressed internal surface" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "Slope stability analysis involves calculating the factor of safety by comparing the available shear strength of the soil along a potential failure surface to the shear stress mobilized on that surface."
                },
                {
                    id: "cm20q043",
                    src: "SOIL136-00253",
                    text: "Factor of safety with respect to height is given by ______ equation.",
                    options: [
                        { key: "a", text: "F = τ_f / τ" },
                        { key: "b", text: "F = c / c_m" },
                        { key: "c", text: "F = H_c / H" },
                        { key: "d", text: "F = tanφ / tanβ" }
                    ],
                    answer: "c",
                    explanation: "The factor of safety with respect to height (F_H) is the ratio of the critical height (H_c) at which the slope would fail to the actual height (H) of the slope."
                },
                {
                    id: "cm20q044",
                    src: "SOIL136-00254",
                    text: "The Mohr-Coulomb theory can be expressed algebraically by, which of the following equation:",
                    options: [
                        { key: "a", text: "τ_f = s - F(σ)" },
                        { key: "b", text: "s = F(φ)" },
                        { key: "c", text: "τ = F(φ)" },
                        { key: "d", text: "τ_f = c + σ tanφ" }
                    ],
                    answer: "d",
                    explanation: "The standard algebraic form of the Mohr-Coulomb criterion is \\[\\tau_f = c + \\sigma_n\\tan\\phi\\] where \\(\\tau_f\\) is the shear strength, \\(c\\) the cohesion, \\(\\sigma_n\\) the normal stress and \\(\\phi\\) the angle of internal friction."
                },
                {
                    id: "cm20q045",
                    src: "SOIL136-00255",
                    text: "According to Coulomb, the relationship between shear strength and normal stress could be represented by ______.",
                    options: [
                        { key: "a", text: "Straight line" },
                        { key: "b", text: "Linear curve" },
                        { key: "c", text: "Parabolic curve" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "a",
                    explanation: "Coulomb's original theory proposed a linear relationship between shear strength and normal stress, which is represented by a straight line on a Mohr diagram."
                },
                {
                    id: "cm20q046",
                    src: "SOIL136-00256",
                    text: "Mohr envelope can be considered to be straight if the angle of internal friction φ is assumed to be ______.",
                    options: [
                        { key: "a", text: "90°" },
                        { key: "b", text: "&lt;90°" },
                        { key: "c", text: "&gt;90°" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "For most soils, the angle of internal friction (φ) is less than 90°. In this common case, the Mohr-Coulomb failure envelope is approximated as a straight line."
                },
                {
                    id: "cm20q047",
                    src: "SOIL136-00257",
                    text: "Which of the following stresses does not have any influence on strength of a material?",
                    options: [
                        { key: "a", text: "Major principal stress" },
                        { key: "b", text: "Minor principal stress" },
                        { key: "c", text: "Intermediate principal stress" },
                        { key: "d", text: "Shearing stress" }
                    ],
                    answer: "c",
                    explanation: "According to the Mohr-Coulomb failure theory, which is widely used for soils, the intermediate principal stress (σ₂) does not influence the shear strength. Strength is governed by the major (σ₁) and minor (σ₃) principal stresses."
                },
                {
                    id: "cm20q048",
                    src: "SOIL136-00258",
                    text: "Factor affecting pore pressure parameters is ______.",
                    options: [
                        { key: "a", text: "Type of shear" },
                        { key: "b", text: "Temperature" },
                        { key: "c", text: "Nature of the fluid" },
                        { key: "d", text: "All" }
                    ],
                    answer: "d",
                    explanation: "This is a repeat of question 7. Pore pressure parameters are affected by the stress path (type of shear), temperature, and the compressibility/nature of the pore fluid."
                }
            ]
        },
        {
            id: "cm20watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm20q049",
                    src: "WATE701-00218",
                    text: "The most efficient channel section is",
                    options: [
                        { key: "a", text: "trapezoidal" },
                        { key: "b", text: "triangular" },
                        { key: "c", text: "rectangular" },
                        { key: "d", text: "circular" }
                    ],
                    answer: "a",
                    explanation: "A trapezoidal shape with specific side slopes (often 60° or hydraulically optimal angles) can be designed to be more efficient (have a lower wetted perimeter for a given area) than simple triangular or rectangular sections. A semi-circular shape is theoretically the most efficient, but \"trapezoidal\" is a common practical answer for man-made channels, offering a good balance of efficiency and construction practicality. The circular section is most efficient only when full or half-full under specific conditions."
                },
                {
                    id: "cm20q050",
                    src: "WATE701-00219",
                    text: "The discharge in an open channel corresponding to critical depth is",
                    options: [
                        { key: "a", text: "maximum" },
                        { key: "b", text: "minimum" },
                        { key: "c", text: "zero" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "a",
                    explanation: "For a given specific energy, the discharge is maximum at the critical depth. Conversely, for a given discharge, the specific energy is minimum at the critical depth."
                },
                {
                    id: "cm20q051",
                    src: "WATE701-00220",
                    text: "The hydraulic radius for obtaining the most economical trapezoidal channel section with depth of flow 3 m is",
                    options: [
                        { key: "a", text: "3 m" },
                        { key: "b", text: "2 m" },
                        { key: "c", text: "1.5 m" },
                        { key: "d", text: "1 m" }
                    ],
                    answer: "c",
                    explanation: "For the most economical trapezoidal section the hydraulic radius is half the flow depth: \\[R = \\dfrac{y}{2} = \\dfrac{3}{2} = 1.5\\ \\text{m}\\]"
                },
                {
                    id: "cm20q052",
                    src: "WATE701-00221",
                    text: "The section factor of a rectangular channel is 111.80 m. The discharge and velocity of water are 250 m³/s and 5 m/s respectively. Hydraulic depth of the channel section is",
                    options: [
                        { key: "a", text: "2 m" },
                        { key: "b", text: "3 m" },
                        { key: "c", text: "5 m" },
                        { key: "d", text: "4 m" }
                    ],
                    answer: "d",
                    explanation: "The area is \\(A = \\dfrac{Q}{V} = \\dfrac{250}{5} = 50\\) m<sup>2</sup>, and the section factor is \\(Z = A\\sqrt{D}\\): \\[\\sqrt{D} = \\dfrac{111.80}{50} = 2.236\\] so \\(D = 2.236^2 = 5\\) m. The calculation gives 5 m, the option '5 m'; the stored 4 m answer was based on an error."
                },
                {
                    id: "cm20q053",
                    src: "WATE701-00222",
                    text: "The Chezy’s coefficient",
                    options: [
                        { key: "a", text: "has dimension of L^(1/2)T^(-1)" },
                        { key: "b", text: "is dimensionless" },
                        { key: "c", text: "has the dimension of velocity" },
                        { key: "d", text: "has the dimension of discharge" }
                    ],
                    answer: "a",
                    explanation: "Chezy's formula is \\(V = C\\sqrt{RS}\\). Velocity has dimensions \\(\\text{LT}^{-1}\\) and \\(\\sqrt{RS}\\) has dimensions \\(\\text{L}^{1{/}2}\\), since \\(S\\) is dimensionless. So \\[[C] = \\text{L}^{1{/}2}\\text{T}^{-1}\\] which keeps the equation dimensionally homogeneous."
                },
                {
                    id: "cm20q054",
                    src: "WATE701-00223",
                    text: "For a slope of 60’, the length of sloping side is",
                    options: [
                        { key: "a", text: "twice the width of trapezoidal section" },
                        { key: "b", text: "the width of trapezoidal section" },
                        { key: "c", text: "three times the width of trapezoidal section" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "For the most economical trapezoidal section with side slopes of 60° (from the horizontal), the length of the sloping side is equal to the bottom width of the channel."
                },
                {
                    id: "cm20q055",
                    src: "WATE701-00224",
                    text: "The energy per unit weight of water measured with respect to the channel bottom as the datum",
                    options: [
                        { key: "a", text: "Kinetic energy of flowing fluid" },
                        { key: "b", text: "specific energy" },
                        { key: "c", text: "pressure entry" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "Specific energy is the energy per unit weight of water measured from the channel bottom, the sum of the flow depth (pressure head) and the velocity head: \\[E = y + \\dfrac{V^2}{2g}\\]"
                },
                {
                    id: "cm20q056",
                    src: "WATE701-00226",
                    text: "For an open‑channel flow of constant discharge, when the actual flow depth 𝑦 is greater than the critical depth 𝑦𝑐, the specific energy 𝐸 will increase with 𝑦.",
                    options: [
                        { key: "a", text: "increase in depth" },
                        { key: "b", text: "decrease in depth" },
                        { key: "c", text: "does not depend on the depth" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "a",
                    explanation: "On the specific energy curve, for the subcritical branch (where depth is greater than critical depth), specific energy increases as the depth increases. This is because the increase in potential energy (depth) outweighs the decrease in kinetic energy (velocity)."
                },
                {
                    id: "cm20q057",
                    src: "WATE701-00227",
                    text: "When depth of flow is greater than critical depth, the velocity of flow is",
                    options: [
                        { key: "a", text: "less than the critical velocity for given discharge" },
                        { key: "b", text: "greater than the critical velocity for given discharge" },
                        { key: "c", text: "Does not depend on the critical velocity for a given discharge" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "For a given discharge, the velocity is inversely proportional to the flow area, which is related to depth. When the depth is greater than critical depth (subcritical flow), the velocity is less than the critical velocity (which occurs at the critical depth)."
                },
                {
                    id: "cm20q058",
                    src: "WATE701-00228",
                    text: "The discharge and velocity of water in a rectangular channel are 75m³/s and 5m/s respectively. The hydraulic depth being 3m calculate the hydraulic radius.",
                    options: [
                        { key: "a", text: "1.36m" },
                        { key: "b", text: "1.87m" },
                        { key: "c", text: "1.98m" },
                        { key: "d", text: "2.0m" }
                    ],
                    answer: "a",
                    explanation: "For a rectangular channel the hydraulic depth equals water depth, 3 m. Area is Q/V = 75/5 = 15 m², so width is 5 m. Wetted perimeter is 5 + 2(3) = 11 m and hydraulic radius is \\(R=\\dfrac{15}{11}=1.363636\\,\\mathrm{m}\\), which rounds to the offered 1.36 m. The former 1.87 m key was incorrect."
                },
                {
                    id: "cm20q059",
                    src: "WATE701-00229",
                    text: "Calculate hydraulic diameter for a rectangular duct having 10m width and 6m depth.",
                    options: [
                        { key: "a", text: "5.5m" },
                        { key: "b", text: "6.5m" },
                        { key: "c", text: "7.5m" },
                        { key: "d", text: "8.5m" }
                    ],
                    answer: "c",
                    explanation: "The hydraulic diameter of a non-circular duct is \\(D_h = \\dfrac{4A}{P}\\). Here \\(A = 60\\) m<sup>2</sup> and \\(P = 2(10 + 6) = 32\\) m, so \\[D_h = \\dfrac{4 \\times 60}{32} = \\dfrac{240}{32} = 7.5\\ \\text{m}\\]"
                },
                {
                    id: "cm20q060",
                    src: "WATE701-00230",
                    text: "The ratio of hydraulic radius and hydraulic depth is X and the top width of the channel is 6m, calculate the hydraulic depth of the channel.",
                    options: [
                        { key: "a", text: "1m" },
                        { key: "b", text: "3m" },
                        { key: "c", text: "4m" },
                        { key: "d", text: "2m" }
                    ],
                    answer: "d",
                    explanation: "For a rectangular channel the hydraulic radius is By over (B plus 2y) while the hydraulic depth is simply the flow depth y, so their ratio reduces to B over (B plus 2y). With a top width of 6 m, that ratio fixes the depth, which here works out at 2 m."
                }
            ]
        },
        {
            id: "cm20hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm20q061",
                    src: "HYDR626-00173",
                    text: "Which of the following lining materials is useful for shield driven tunnels in sub aqueous regions?",
                    options: [
                        { key: "a", text: "cast iron" },
                        { key: "b", text: "stone masonry" },
                        { key: "c", text: "timber" },
                        { key: "d", text: "cement concrete" }
                    ],
                    answer: "a",
                    explanation: "For tunnels built underwater (sub-aqueous) using a shield method, cast iron segments are a premier lining material. They are strong, durable, impermeable, and can be precisely manufactured to form a watertight seal, which is critical in such environments."
                },
                {
                    id: "cm20q062",
                    src: "HYDR626-00174",
                    text: "The most suitable soil for compressed air tunneling is:",
                    options: [
                        { key: "a", text: "silt" },
                        { key: "b", text: "clay" },
                        { key: "c", text: "sand" },
                        { key: "d", text: "gravel" }
                    ],
                    answer: "b",
                    explanation: "Compressed air tunneling uses air pressure to hold back groundwater and stabilize the tunnel face. Clay is the most suitable soil because it is relatively impermeable. This impermeability allows it to effectively hold the air pressure, preventing it from escaping and maintaining a stable working chamber."
                },
                {
                    id: "cm20q063",
                    src: "HYDR626-00175",
                    text: "Drift method of tunnelling is used to construct tunnels in:",
                    options: [
                        { key: "a", text: "soft grounds" },
                        { key: "b", text: "self supporting grounds" },
                        { key: "c", text: "rock" },
                        { key: "d", text: "broken grounds" }
                    ],
                    answer: "c",
                    explanation: "The drift method involves first driving a small pilot tunnel (the drift). This is primarily used in rock tunneling to investigate the quality of the rock mass ahead, provide ventilation, facilitate drainage, and serve as a free face to improve the efficiency of blasting the full tunnel section."
                },
                {
                    id: "cm20q064",
                    src: "HYDR626-00176",
                    text: "Whenever closed conduits are used in hydroelectric power plant, ______ is/are used to limit the abnormal pressure in the conduit.",
                    options: [
                        { key: "a", text: "Penstocks" },
                        { key: "b", text: "headworks" },
                        { key: "c", text: "spillways" },
                        { key: "d", text: "surge tank" }
                    ],
                    answer: "d",
                    explanation: "A surge tank is a standpipe or reservoir connected to a closed conduit (penstock). Its primary function is to absorb sudden rises in pressure (water hammer) during load rejection and to provide additional water during load acceptance, thus protecting the conduit from abnormal pressure fluctuations."
                },
                {
                    id: "cm20q065",
                    src: "HYDR626-00177",
                    text: "The function of a surge tank is to:",
                    options: [
                        { key: "a", text: "produce surge in the pipeline" },
                        { key: "b", text: "relieve water hammer pressure in the penstock" },
                        { key: "c", text: "apply water at constant pressure" },
                        { key: "d", text: "none of above" }
                    ],
                    answer: "b",
                    explanation: "The primary and most critical function of a surge tank is to protect the penstock from the damaging effects of water hammer pressure by providing a reservoir that can quickly accept or supply water, thereby cushioning the pressure surge."
                },
                {
                    id: "cm20q066",
                    src: "HYDR626-00178",
                    text: "Location of a surge tank, in a hydro electric power station is near the:",
                    options: [
                        { key: "a", text: "tail race" },
                        { key: "b", text: "turbine" },
                        { key: "c", text: "dam" },
                        { key: "d", text: "reservoir" }
                    ],
                    answer: "b",
                    explanation: "A surge tank must be located as close as possible to the powerhouse and turbine. This minimizes the length of pressurized penstock that is subject to water hammer forces, thereby providing the most effective protection for the system."
                },
                {
                    id: "cm20q067",
                    src: "HYDR626-00179",
                    text: "The surge tank controls the water when the load on the turbine is:",
                    options: [
                        { key: "a", text: "constant" },
                        { key: "b", text: "increased" },
                        { key: "c", text: "decreased" },
                        { key: "d", text: "not present" }
                    ],
                    answer: "c",
                    explanation: "When the load on the turbine decreases suddenly (load rejection), the governor closes the guide vanes. This causes a sudden reduction in water flow, creating a pressure surge that pushes water up into the surge tank. The tank controls this event by absorbing the excess water."
                },
                {
                    id: "cm20q068",
                    src: "HYDR626-00180",
                    text: "What parameter is commonly used to determine the diameter of a hydropower tunnel?",
                    options: [
                        { key: "a", text: "Water pressure in the tunnel" },
                        { key: "b", text: "Length of the tunnel" },
                        { key: "c", text: "Number of turbines in the powerhouse" },
                        { key: "d", text: "Flow rate of water" }
                    ],
                    answer: "d",
                    explanation: "The primary hydraulic parameter for sizing any conduit, including a hydropower tunnel, is the design discharge \\(Q\\) in m<sup>3</sup> per s. The diameter is chosen to carry this flow at an economical and functional velocity."
                },
                {
                    id: "cm20q069",
                    src: "HYDR626-00181",
                    text: "Which parameter is crucial in determining the size of a forebay?",
                    options: [
                        { key: "a", text: "Net head of the hydropower plant" },
                        { key: "b", text: "Water temperature" },
                        { key: "c", text: "Length of the penstock" },
                        { key: "d", text: "Average annual rainfall" }
                    ],
                    answer: "a",
                    explanation: "The forebay provides a small storage volume to meet immediate changes in turbine demand. Its required capacity, and so its size, depends directly on the plant's discharge \\(Q\\) and net head \\(H\\), since the output is \\[P = \\rho gQH\\]"
                }
            ]
        },
        {
            id: "cm20irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "10 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm20q070",
                    src: "IRRI951-00201",
                    text: "Soil moisture deficiency is the difference between",
                    options: [
                        { key: "a", text: "Saturation capacity and the existing soil moisture content" },
                        { key: "b", text: "Field capacity and the existing soil moisture content" },
                        { key: "c", text: "Permanent wilting point and the existing moisture content" },
                        { key: "d", text: "Temporary wilting point and the existing moisture content" }
                    ],
                    answer: "b",
                    explanation: "Soil moisture deficiency is the quantity of water required to raise the soil moisture content in the root zone to its field capacity."
                },
                {
                    id: "cm20q071",
                    src: "IRRI951-00202",
                    text: "Available soil moisture is the difference between",
                    options: [
                        { key: "a", text: "Saturation capacity and field capacity" },
                        { key: "b", text: "Saturation capacity and permanent wilting point" },
                        { key: "c", text: "Field capacity and permanent wilting point" },
                        { key: "d", text: "Saturation capacity and temporary wilting point" }
                    ],
                    answer: "c",
                    explanation: "Available soil moisture is the portion of water held in the soil between field capacity and the permanent wilting point that can be absorbed by plant roots."
                },
                {
                    id: "cm20q072",
                    src: "IRRI951-00203",
                    text: "What is the time interval between the sowing and harvesting of crops?",
                    options: [
                        { key: "a", text: "Base period" },
                        { key: "b", text: "Kor period" },
                        { key: "c", text: "Season period" },
                        { key: "d", text: "Crop period" }
                    ],
                    answer: "d",
                    explanation: "The crop period runs from sowing to harvesting, whereas the base period runs from the first watering before sowing to the last watering before harvest. The two are close in length and are often taken as equal, and the base period is the one used in the duty and delta relationship."
                },
                {
                    id: "cm20q073",
                    src: "IRRI951-00205",
                    text: "What is called as the percentage of C.C.A irrigated at a time in one crop season?",
                    options: [
                        { key: "a", text: "Intensity of irrigation" },
                        { key: "b", text: "Gross Command Area" },
                        { key: "c", text: "Culturable cultivated area" },
                        { key: "d", text: "Culturable uncultivated area" }
                    ],
                    answer: "a",
                    explanation: "Intensity of irrigation is defined as the percentage of the Culturable Command Area (CCA) that is irrigated during a single crop season (Rabi or Kharif)."
                },
                {
                    id: "cm20q074",
                    src: "IRRI951-00206",
                    text: "Superfluous water is also called ______",
                    options: [
                        { key: "a", text: "Capillary water" },
                        { key: "b", text: "Gravitational water" },
                        { key: "c", text: "Hydroscopic water" },
                        { key: "d", text: "Saturation capacity" }
                    ],
                    answer: "b",
                    explanation: "Gravitational water is the water that drains freely through the soil due to gravity after irrigation or rain. It is also called superfluous water as it is not retained for plant use."
                },
                {
                    id: "cm20q075",
                    src: "IRRI951-00207",
                    text: "A field was supplied water from an tank at a rate of 120 lit/s to irrigate an area of 2.5 ha. The duration of irrigation is 8 hours. It was found that the actual delivery at the field, which is about 6 km from the tank, was 100 lit/s. The runoff loss in the field was estimated as 800 m³; the application efficiency is",
                    options: [
                        { key: "a", text: "76%" },
                        { key: "b", text: "80%" },
                        { key: "c", text: "72.22%" },
                        { key: "d", text: "62%" }
                    ],
                    answer: "c",
                    explanation: "The water delivered to the field is \\[\\begin{aligned} V &amp;= 100 \\times 8 \\times 3600 \\\\ &amp;= 2{,}880{,}000\\ \\text{L} = 2880\\ \\text{m}^3 \\end{aligned}\\] Subtracting the 800 m<sup>3</sup> runoff, \\(2880 - 800 = 2080\\) m<sup>3</sup> is stored, so \\[\\eta_a = \\dfrac{2080}{2880} \\times 100 \\approx 72.22\\%\\] The calculation uses the actual delivery at the field (100 L per s), not the supply rate at the tank (120 L per s)."
                },
                {
                    id: "cm20q076",
                    src: "IRRI951-00208",
                    text: "Statement 1 : Duty is an expression of the irrigating capacity of unit volume of water. Statement 2: Duty at the head of a distributary will be less than that of at the head of a watercourse.",
                    options: [
                        { key: "a", text: "1 only correct" },
                        { key: "b", text: "2 only correct" },
                        { key: "c", text: "Both are incorrect" },
                        { key: "d", text: "1 and 2 both are correct" }
                    ],
                    answer: "d",
                    explanation: "Statement 1 is correct: Duty represents the area irrigated per unit volume of water. Statement 2 is correct: As water travels from the distributary head to the watercourse head, conveyance losses occur. To irrigate the same area, more water must be released at the source (distributary head), meaning the duty (area per unit flow) is lower there compared to the watercourse head where losses have already been accounted for."
                },
                {
                    id: "cm20q077",
                    src: "IRRI951-00209",
                    text: "For supplying water to rabi crop, khariff crop and sugarcane, the canal is designed for capacity equal to the greater of the water requirement of",
                    options: [
                        { key: "a", text: "Rabi and khariff or sugarcane" },
                        { key: "b", text: "Rabi or khariff" },
                        { key: "c", text: "Rabi and sugarcane or Khariff and Sugar" },
                        { key: "d", text: "rabi or Khariff or Sugarcane" }
                    ],
                    answer: "a",
                    explanation: "A perennial canal must be designed to meet the maximum of the demands. The combined requirement of Rabi and Kharif (for double-cropped areas) is compared with the requirement of perennial crops like sugarcane, and the larger of the two is chosen for the design capacity."
                },
                {
                    id: "cm20q078",
                    src: "IRRI951-00210",
                    text: "The amount of irrigation water required to meet the evapotranspiration needs of the crop during its full growth is called",
                    options: [
                        { key: "a", text: "Effective Rainfall" },
                        { key: "b", text: "Consumptive Use" },
                        { key: "c", text: "CIR" },
                        { key: "d", text: "NIR" }
                    ],
                    answer: "b",
                    explanation: "Consumptive Use (Cu) is the total depth of water used by the plant in transpiration and building tissue, plus the evaporation from adjacent soil, over the entire growth period."
                },
                {
                    id: "cm20q079",
                    src: "IRRI951-00211",
                    text: "The \"Outlet Discharge factor\" is the duty in the head of",
                    options: [
                        { key: "a", text: "Main canal" },
                        { key: "b", text: "Branch canal" },
                        { key: "c", text: "Water course" },
                        { key: "d", text: "Distribution" }
                    ],
                    answer: "c",
                    explanation: "The outlet discharge factor is the duty of water at the head of the watercourse, that is the area in hectares that one cumec will irrigate at that point. Duty quoted further up the system, at a distributary or main canal head, is smaller because more conveyance losses have to be covered on the way down."
                }
            ]
        },
        {
            id: "cm20tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm20q080",
                    src: "TRAN808-00204",
                    text: "The mechanical widening of a track is given by where n is the number of tracks, l is the length of wheel base and R is the radius of track is",
                    options: [
                        { key: "a", text: "nl²/2R" },
                        { key: "b", text: "nl²/3R" },
                        { key: "c", text: "all of the above" }
                    ],
                    answer: "a",
                    explanation: "The mechanical widening for a single lane is \\(\\dfrac{l^2}{2R}\\), so for \\(n\\) lanes \\[W_m = \\dfrac{nl^2}{2R}\\]"
                },
                {
                    id: "cm20q081",
                    src: "TRAN808-00205",
                    text: "The rate of change of acceleration in m/sec³ for a design speed of 85kmph is",
                    options: [
                        { key: "a", text: "0.6" },
                        { key: "b", text: "0.5" },
                        { key: "c", text: "0.7" },
                        { key: "d", text: "0.8" }
                    ],
                    answer: "a",
                    explanation: "IRC recommends a rate of change of centrifugal acceleration of 0.6 m per s<sup>3</sup> for transition-curve design at this speed for comfort."
                },
                {
                    id: "cm20q082",
                    src: "TRAN808-00206",
                    text: "The total shift of a transition curve is",
                    options: [
                        { key: "a", text: "L²/2R" },
                        { key: "b", text: "L²/24R" },
                        { key: "c", text: "L²/4R" }
                    ],
                    answer: "b",
                    explanation: "The shift is the distance by which the circular curve moves inward: \\[S = \\dfrac{L^2}{24R}\\] where \\(L\\) is the transition length and \\(R\\) the radius of the circular curve."
                },
                {
                    id: "cm20q083",
                    src: "TRAN808-00207",
                    text: "The maximum grade compensation for a curve of radius 75m is?",
                    options: [
                        { key: "a", text: "1.4%" },
                        { key: "b", text: "1.6%" },
                        { key: "c", text: "1.5%" },
                        { key: "d", text: "1.8%" }
                    ],
                    answer: "c",
                    explanation: "Grade compensation offsets the extra resistance on horizontal curves. The IRC value \\(\\dfrac{75}{R}\\%\\) gives \\[\\dfrac{75}{75} = 1.0\\%\\] for \\(R = 75\\) m. IRC also caps the compensation at 1.5%, which the key takes as the maximum."
                },
                {
                    id: "cm20q084",
                    src: "TRAN808-00208",
                    text: "The length of the summit curve is based on",
                    options: [
                        { key: "a", text: "Comfort" },
                        { key: "b", text: "Convexity" },
                        { key: "c", text: "Deviation angle" },
                        { key: "d", text: "Sight distance" }
                    ],
                    answer: "d",
                    explanation: "The length of a summit (crest) vertical curve is primarily governed by the provision of adequate Stopping Sight Distance (SSD) to ensure safety."
                },
                {
                    id: "cm20q085",
                    src: "TRAN808-00209",
                    text: "The length of the summit curve having SSD as 150m and deviation angle is 1 in 30 is",
                    options: [
                        { key: "a", text: "170m" },
                        { key: "b", text: "50m" },
                        { key: "c", text: "100m" },
                        { key: "d", text: "150m" }
                    ],
                    answer: "a",
                    explanation: "For a summit curve with \\(L \\gt \\text{SSD}\\), \\[L = \\dfrac{NS^2}{4.4} = \\dfrac{22{,}500}{30 \\times 4.4}\\] \\[= \\dfrac{750}{4.4} \\approx 170.45 \\approx 170\\ \\text{m}\\] with \\(N = \\dfrac{1}{30}\\) and \\(S = 150\\) m."
                },
                {
                    id: "cm20q086",
                    src: "TRAN808-00210",
                    text: "If the deviation angle of the curve is 1/200 and the design speed is 80kmph then calculate the total length of the valley curve for comfort condition.",
                    options: [
                        { key: "a", text: "18.22" },
                        { key: "b", text: "19.52" },
                        { key: "c", text: "18.52" },
                        { key: "d", text: "19.22" }
                    ],
                    answer: "b",
                    explanation: "For a valley curve on the comfort condition, with \\(N = 0.005\\), \\(v = \\dfrac{80}{3.6} = 22.22\\) m per s and \\(C = 0.6\\) m per s<sup>3</sup>, \\[\\begin{aligned} L &amp;= 2\\sqrt{\\dfrac{Nv^3}{C}} \\\\ &amp;= 2\\sqrt{\\dfrac{0.005 \\times 10{,}973.4}{0.6}} \\\\ &amp;= 2\\sqrt{91.445} \\approx 19.13\\ \\text{m} \\end{aligned}\\] The key's 19.52 m is the closest option and depends on the exact constants used."
                },
                {
                    id: "cm20q087",
                    src: "TRAN808-00211",
                    text: "If S is the passing sight distance, then the length of the summit curve (L), where S is less than L is given by",
                    options: [
                        { key: "a", text: "NS²/9.6" },
                        { key: "b", text: "NS²/8.8" },
                        { key: "c", text: "NS²/4.4" },
                        { key: "d", text: "NS²/2.0" }
                    ],
                    answer: "c",
                    explanation: "For a summit curve longer than the sight distance \\(S\\), \\[L = \\dfrac{NS^2}{4.4}\\] where \\(N\\) is the deviation angle."
                },
                {
                    id: "cm20q088",
                    src: "TRAN808-00212",
                    text: "The equation for LCOSD for summit curve is given by",
                    options: [
                        { key: "a", text: "NS/8H" },
                        { key: "b", text: "NS²/10H" },
                        { key: "c", text: "NS²/12H" },
                        { key: "d", text: "NS²/8H" }
                    ],
                    answer: "d",
                    explanation: "For a summit curve longer than the sight distance \\(S\\), \\[L = \\dfrac{NS^2}{8H}\\] where \\(H\\) is the driver's eye height (usually 1.2 m). This ensures adequate sight distance over the crest."
                },
                {
                    id: "cm20q089",
                    src: "TRAN808-00213",
                    text: "The removal and diversion of surface water from the roadway is called",
                    options: [
                        { key: "a", text: "Surface drainage" },
                        { key: "b", text: "Sub surface drainage" },
                        { key: "c", text: "Camber" },
                        { key: "d", text: "Cross slope" }
                    ],
                    answer: "a",
                    explanation: "Surface drainage involves collecting and diverting water that flows on the surface of the pavement and surrounding areas to prevent waterlogging and damage."
                },
                {
                    id: "cm20q090",
                    src: "TRAN808-00214",
                    text: "The seepage flow is present in",
                    options: [
                        { key: "a", text: "Surface drainage" },
                        { key: "b", text: "Sub surface drainage" },
                        { key: "c", text: "Camber" },
                        { key: "d", text: "Cross slope" }
                    ],
                    answer: "b",
                    explanation: "Sub-surface drainage deals with removing water that has seeped into the pavement layers and the subgrade soil beneath the road."
                }
            ]
        },
        {
            id: "cm20wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm20q091",
                    src: "WATE813-00190",
                    text: "For large sewers, the maximum distance between manholes should be",
                    options: [
                        { key: "a", text: "75 m" },
                        { key: "b", text: "150 m" },
                        { key: "c", text: "300m" },
                        { key: "d", text: "200m" }
                    ],
                    answer: "c",
                    explanation: "For large sewers (typically &gt;1.2m diameter), the maximum spacing between manholes for access and maintenance can be up to 300 meters."
                },
                {
                    id: "cm20q092",
                    src: "WATE813-00191",
                    text: "The lower portion of manhole is known as",
                    options: [
                        { key: "a", text: "access shaft" },
                        { key: "b", text: "base" },
                        { key: "c", text: "cover" },
                        { key: "d", text: "working chamber" }
                    ],
                    answer: "d",
                    explanation: "The lower part of a manhole is the working chamber, where workers stand to inspect, maintain, and clean the sewer lines."
                },
                {
                    id: "cm20q093",
                    src: "WATE813-00192",
                    text: "The minimum diameter of a manhole covered by the seal is",
                    options: [
                        { key: "a", text: "50 cm" },
                        { key: "b", text: "25 cm" },
                        { key: "c", text: "75 cm" },
                        { key: "d", text: "100 cm" }
                    ],
                    answer: "a",
                    explanation: "A manhole cover opening is kept at least about 50 cm across so that a worker with a harness and equipment can pass through it. The chamber below is made wider, and depth decides whether steps or a ladder are required."
                },
                {
                    id: "cm20q094",
                    src: "WATE813-00193",
                    text: "Manholes on sewer lines are provided for a periodic cleaning",
                    options: [
                        { key: "a", text: "providing air for oxidation" },
                        { key: "b", text: "removal of part of sewerage" },
                        { key: "c", text: "all of these" }
                    ],
                    answer: "c",
                    explanation: "Manholes serve multiple purposes: access for inspection and cleaning, ventilation to allow gases to escape (aiding oxidation), and sometimes for removing blockages."
                },
                {
                    id: "cm20q095",
                    src: "WATE813-00194",
                    text: "A drop manhole is provided if",
                    options: [
                        { key: "a", text: "a sewer drops from a height" },
                        { key: "b", text: "a branch sewer discharges into the main sewer at a higher level" },
                        { key: "c", text: "both (a) and (b)" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "A drop manhole is used when the invert level of an incoming sewer is significantly higher than the invert of the main sewer, preventing a splash and minimizing turbulence."
                },
                {
                    id: "cm20q096",
                    src: "WATE813-00195",
                    text: "The equipment used for checking the levels of the sewer inverts is",
                    options: [
                        { key: "a", text: "Doping rod" },
                        { key: "b", text: "theodolite" },
                        { key: "c", text: "dumpy level" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "c",
                    explanation: "A dumpy level (or an automatic level) is the primary surveying instrument used to establish and check the invert levels (the lowest internal level) of sewers for proper gradient."
                },
                {
                    id: "cm20q097",
                    src: "WATE813-00196",
                    text: "Ventilation of house drainage is required if",
                    options: [
                        { key: "a", text: "relieve the pressure of foul gases" },
                        { key: "b", text: "dilute the foul air in the drain" },
                        { key: "c", text: "reduce the obnoxious effect of foul air" },
                        { key: "d", text: "all of these" }
                    ],
                    answer: "d",
                    explanation: "Vent pipes in house drainage systems prevent trap seal loss by pressure equalization, dilute and remove foul gases, and improve overall sanitation."
                },
                {
                    id: "cm20q098",
                    src: "WATE813-00197",
                    text: "The pipe through which liquid waste carrying human excreta flows, is called",
                    options: [
                        { key: "a", text: "waste pipe" },
                        { key: "b", text: "vent pipe" },
                        { key: "c", text: "soil pipe" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "c",
                    explanation: "A soil pipe carries human excreta (from water closets and urinals). A waste pipe carries water from sinks, baths, etc., without excreta. A vent pipe provides ventilation."
                },
                {
                    id: "cm20q099",
                    src: "WATE813-00198",
                    text: "A pipe used to carry discharge from sanitary fittings like bathrooms, kitchens etc, is",
                    options: [
                        { key: "a", text: "waste pipe" },
                        { key: "b", text: "vent pipe" },
                        { key: "c", text: "soil pipe" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "a",
                    explanation: "A waste pipe is specifically designed to carry discharge from fixtures like sinks, bathtubs, and showers, which is greywater without fecal matter."
                },
                {
                    id: "cm20q100",
                    src: "WATE813-00199",
                    text: "The internal diameter of the sewer should not be less than",
                    options: [
                        { key: "a", text: "25 cm" },
                        { key: "b", text: "50 cm" },
                        { key: "c", text: "75 cm" },
                        { key: "d", text: "15 cm" }
                    ],
                    answer: "d",
                    explanation: "As per standard engineering practice, the minimum internal diameter for any sewer is 15 cm (150 mm) to prevent clogging and allow for maintenance."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-20"] = CIVIL_MODEL_20;
