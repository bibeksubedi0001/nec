/* ============================================================
   CIVIL MODEL SET 24 — Civil Engineering licence-style model paper
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
const CIVIL_MODEL_24 = {
    day: 54,
    kind: "model",
    badge: { top: "Model", main: "C24" },
    title: "Civil Model Set 24",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm24basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm24q001",
                    src: "BASI674-00297",
                    text: "Generally Structural design of building is not necessary for approval if",
                    options: [
                        { key: "a", text: "Plinth area less than 1000 sq. ft" },
                        { key: "b", text: "Up to 3 floor including ground floor" },
                        { key: "c", text: "Structural span less than 4.5m" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "To simplify approval for small, low-risk structures, many bylaws exempt buildings that are small in area (e.g., &lt;1000 sq ft), low in height (e.g., G+2), and have small spans (e.g., &lt;4.5m) from the mandatory submission of a detailed structural design."
                },
                {
                    id: "cm24q002",
                    src: "BASI674-00298",
                    text: "The maximum ground coverage for School building is",
                    options: [
                        { key: "a", text: "70%" },
                        { key: "b", text: "50%" },
                        { key: "c", text: "40%" },
                        { key: "d", text: "20%" }
                    ],
                    answer: "b",
                    explanation: "Ground coverage is the percentage of the plot area covered by the building footprint. Bylaws often specify lower coverage for public buildings like schools (e.g., 50%) to ensure adequate open space for playgrounds, ventilation, and emergency access."
                },
                {
                    id: "cm24q003",
                    src: "BASI674-00299",
                    text: "As per by laws, The he floor to floor height (Storey height) of the building should be:",
                    options: [
                        { key: "a", text: "in between 3 to 3.5 m" },
                        { key: "b", text: "in between 2 to 2.5 m" },
                        { key: "c", text: "In between 2 to 3 m" },
                        { key: "d", text: "in between 2.5 to 3.5 m" }
                    ],
                    answer: "c",
                    explanation: "Building bylaws set the floor to floor height between about 2 and 3 m. The lower bound protects headroom and ventilation once the floor finish and any false ceiling are deducted, and the upper bound keeps the storey height, and so the overall building height and cost, within the limits the bylaw allows."
                },
                {
                    id: "cm24q004",
                    src: "BASI674-00300",
                    text: "The c.g. of a thin hollow cone of height h, above its base lies on the axis, at a height of",
                    options: [
                        { key: "a", text: "h/4" },
                        { key: "b", text: "2h/3" },
                        { key: "c", text: "3h/4" },
                        { key: "d", text: "h/3" }
                    ],
                    answer: "d",
                    explanation: "The center of gravity of a hollow right circular cone (considering only the surface, with no mass at the base) is located at a distance of h/3 from the base along its central axis."
                },
                {
                    id: "cm24q005",
                    src: "BASI674-00301",
                    text: "The C.G. of a solid circular cone lies on its axis of symmetry at a height of",
                    options: [
                        { key: "a", text: "h/4" },
                        { key: "b", text: "h/2" },
                        { key: "c", text: "h/3" },
                        { key: "d", text: "h/5" }
                    ],
                    answer: "a",
                    explanation: "The center of gravity of a solid right circular cone is located at a distance of h/4 from its base, measured along its central axis of symmetry."
                },
                {
                    id: "cm24q006",
                    src: "BASI674-00302",
                    text: "The centre of gravity of a triangle is at the point where three",
                    options: [
                        { key: "a", text: "medians of the triangle meet" },
                        { key: "b", text: "perpendicular bisectors of the sides of the triangle meet" },
                        { key: "c", text: "bisectors of the angle of the triangle meet" },
                        { key: "d", text: "none of these." }
                    ],
                    answer: "a",
                    explanation: "The centroid (center of gravity for a uniform thin triangular plate) is the point of concurrency of the three medians of the triangle. A median is a line joining a vertex to the midpoint of the opposite side."
                },
                {
                    id: "cm24q007",
                    src: "BASI674-00303",
                    text: "The unit of Moment of inertia of a body, is",
                    options: [
                        { key: "a", text: "m" },
                        { key: "b", text: "m^2" },
                        { key: "c", text: "m^4" },
                        { key: "d", text: "m^3" }
                    ],
                    answer: "c",
                    explanation: "The moment of inertia of an area is its second moment, \\(I = \\displaystyle\\int y^2\\,dA\\). Since area has units m<sup>2</sup> and \\(y^2\\) has units m<sup>2</sup>, the product has units m<sup>4</sup>."
                },
                {
                    id: "cm24q008",
                    src: "BASI674-00304",
                    text: "The product of mass and velocity of a moving a body, is called",
                    options: [
                        { key: "a", text: "Moment" },
                        { key: "b", text: "Power" },
                        { key: "c", text: "Impulse" },
                        { key: "d", text: "Momentum" }
                    ],
                    answer: "d",
                    explanation: "In physics, the linear momentum of a moving body is the product of its mass and its velocity: \\[p = mv\\]"
                },
                {
                    id: "cm24q009",
                    src: "BASI674-00305",
                    text: "The radius of gyration is the distance where the whole mass (or area) of a body is assumed to be concentrated.",
                    options: [
                        { key: "a", text: "Correct" },
                        { key: "b", text: "Incorrect" },
                        { key: "c", text: "Both" },
                        { key: "d", text: "None" }
                    ],
                    answer: "a",
                    explanation: "The radius of gyration \\(k\\) measures how mass or area is distributed about an axis. It is the distance from the axis at which the entire mass or area could be concentrated without changing its moment of inertia about that axis: \\[I = Mk^2 \\quad \\text{or} \\quad I = Ak^2\\]"
                },
                {
                    id: "cm24q010",
                    src: "BASI674-00306",
                    text: "Moment of inertia of a circular section about its diameter (d) is",
                    options: [
                        { key: "a", text: "πd³/16" },
                        { key: "b", text: "πd⁴/64" },
                        { key: "c", text: "πd³/32" },
                        { key: "d", text: "πd⁴/32" }
                    ],
                    answer: "b",
                    explanation: "For a circle of diameter \\(d\\), the second moment of area about a diameter is the standard result \\[I = \\dfrac{\\pi d^4}{64}\\]"
                },
                {
                    id: "cm24q011",
                    src: "BASI674-00307",
                    text: "The center of gravity of a solid circular solid cone is at a distance of ______ from its base, measured along the vertical axis. (h = Height of a right circular solid cone.)",
                    options: [
                        { key: "a", text: "h/2" },
                        { key: "b", text: "h/3" },
                        { key: "c", text: "h/4" },
                        { key: "d", text: "h/6" }
                    ],
                    answer: "c",
                    explanation: "The center of gravity of a solid right circular cone is located at a distance of h/4 from its base, measured along its central vertical axis. This is a standard result."
                },
                {
                    id: "cm24q012",
                    src: "BASI674-00308",
                    text: "In the given figure the weight of the section ABCD and PQRS is 50N. Find the distance of the centre of gravity from the base SR. (Assume figure shows a rectangle ABCD 10cm tall and a smaller rectangle PQRS 2cm tall on top, centered, total height 12cm) <img src=\"https://lh3.googleusercontent.com/rd-gg-dl/AOI_d_9EVnqIYtdtZWH-Q2spTMvIDj8L5MzMtgBR2j2kEGprnsir6Maaby0H-Qufl8lLfrPHcSenub-zmvZVbCw4VxQhnlogjvxHSGsQpXaV4QrrcCSqPwBzx7P-yNIQ57P95xt_6aqZAVEnO5-1QzCB_asT7SwLKEMxP1IF7e4dlyf1vbfB7L1QPjIgoyTvxXBqhI664UJkRvLHTupRZKVM7dqN_RZSt9DnKgsx4tLMaCO1DfZw7wLdjlXFWiDz5lAfcj_rIiDGk22f_9Mm0qnnsi64DHrQtesfi1u1evV4gkHw5Hr0kZxWEp8RiO-vp05XEdY3SY4ifNUv09iKUtfJL11hlaWhHon7aommEvQC1-nQO-rmGfwmOFSX4UOQg7adK9hTMbuven7ov8-iywe0eodF5KmsVI5taoZ8P7EcSDUZhXfL8ODDjcftxQDNalGiu9COL2wepCTBv1GxVJlfjn9xb-W8aQfMgMVCSBHZSKp5ga9p7aKPWBa9r1EsG4kO1dAb7oLgockF3OZD7IxEqWPM3wRCaMqL27UTcdJhI_6fB2fD46MV0QBW10IxLAXREKcCRSZm-nKpGauI0baeU1jFrHB96weHqjSJZwUYJLbvf5gzgDPB1PLevUvbJfT34Hma3iIOFgxsN_M-3gzWtA_rDWt8bYEvHS5aU9rJOGbxIOH-rfHmlVlbghzkYSqCmTkiCqxoF1OvgaNgZXL6fbGAKPmDUSEAw9Q--vkSHHcO4kn-qGube4fYi7ml6z7SPqL2-690zzvRTznrNMqzS3gBml_c4LlrDxTArMStWE3ErJA3dbhkNOI-Er17fKzFFhXXWhGy6IW4XcDWJWh7uWhHCdxrjK8784sSJlkIfTPA-lUIWkIrX9KnNxTGsUvdUF7S8zqJmHuTKIhJXNVPTW7RyXS09hySIxY41CGHqZaSjZOgmeOFAHi-O8M9hGooOdabzp9BDkK6OlfRTK5z5bsu1TfswV_BDNhLRYOLayx72BxFM7iWaqIJw8WT3PCiK9WHVlhK3LV4vaMBP-HIGLICFm5PgUru_GDnC8V3EnJzDzyREBE-zrKklGcZi88MyuZJoYcXhyMw5H3bcAjQ4YQdQhHfitvmv5wR7qLv26sTIJ8YkmMdDRx-_DMMfvtI_LN-KLwQFAdfTYD_skSHBSroGva6cB3Pui0b4PqDzB-lWZYcg5xXBG7Ep3kymFUcnzj05hrHXOjER-a6YkDPUAL3GQP_YylI1dLfbCfeUd2S_fuyp4h7MWxqssrHbhdalVGIWxH2NbZyTMK0YrFR1bCSsK-PeXHArCx040UMv5WYoK2LYCXkPfhwIwe9bX7F_x4NCNwquVA5Nb67sZdY5VJdgSq8Gdaplg0weptR0Jkxbu2NZ4p-klVYmanryEoUuACo5cEb_KEKP57FocHgIldhJgzsV-gMJzV-zW6qXfcf89yCZXmLBH_9Az-lNC2GL6-3CwCEooQ=s1600-rj\" alt=\"Question figure\" loading=\"lazy\" style=\"max-width:100%;height:auto;border-radius:6px;margin:6px 0\">",
                    options: [
                        { key: "a", text: "6cm" },
                        { key: "b", text: "8cm" },
                        { key: "c", text: "5cm" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "The large rectangle ABCD is 10 cm high, with its centroid 5 cm above the base. The small rectangle PQRS is 2 cm high, with its centroid at \\(10 + 1 = 11\\) cm. Each weighs 50 N, 100 N in total. Taking moments about the base SR: \\[d = \\dfrac{50 \\times 5 + 50 \\times 11}{100}\\] \\[= \\dfrac{250 + 550}{100} = \\dfrac{800}{100} = 8\\] The centre of gravity is 8 cm above the base SR."
                },
                {
                    id: "cm24q013",
                    src: "BASI674-00309",
                    text: "The point through which the whole weight of the body acts is called ______.",
                    options: [
                        { key: "a", text: "Center of gravity" },
                        { key: "b", text: "Inertial point" },
                        { key: "c", text: "Centroid" },
                        { key: "d", text: "Central point" }
                    ],
                    answer: "a",
                    explanation: "The center of gravity (CG) of a body is the unique point through which the resultant gravitational force (weight) of the body acts, regardless of the orientation of the body."
                }
            ]
        },
        {
            id: "cm24stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm24q014",
                    src: "STRU935-00250",
                    text: "On the Principal plane, shear stress is ______.",
                    options: [
                        { key: "a", text: "Maximum" },
                        { key: "b", text: "Zero" },
                        { key: "c", text: "Infinity" }
                    ],
                    answer: "b",
                    explanation: "A principal plane is defined as one carrying no shear stress, which is exactly why the normal stress on it reaches an extreme value. On Mohr's circle these are the two points where the circle crosses the horizontal axis."
                },
                {
                    id: "cm24q015",
                    src: "STRU935-00251",
                    text: "The magnitude of direct stress, across a principal plane is known as ______.",
                    options: [
                        { key: "a", text: "Bending stress" },
                        { key: "b", text: "Shear stress" },
                        { key: "c", text: "Principal stress" }
                    ],
                    answer: "c",
                    explanation: "The normal stresses acting on principal planes are called principal stresses; they include the major and minor principal stresses."
                },
                {
                    id: "cm24q016",
                    src: "STRU935-00252",
                    text: "When a body is subjected to direct stresses in two mutually perpendicular directions, tangential stress across inclined plane will be maximum when",
                    options: [
                        { key: "a", text: "θ=0" },
                        { key: "b", text: "θ=90" },
                        { key: "c", text: "θ=180" },
                        { key: "d", text: "θ=45" }
                    ],
                    answer: "d",
                    explanation: "The maximum shear stress (tangential stress) on an inclined plane occurs when the plane is oriented at 45° to the direction of the applied stresses."
                },
                {
                    id: "cm24q017",
                    src: "STRU935-00253",
                    text: "The angle between major principal plane and minor principal plane will be always",
                    options: [
                        { key: "a", text: "Equal to 90" },
                        { key: "b", text: "Greater than 90" },
                        { key: "c", text: "less than 90" },
                        { key: "d", text: "Equal to 180" }
                    ],
                    answer: "a",
                    explanation: "The two principal planes are always at right angles to each other. On Mohr's circle they are the two ends of a diameter, 180 degrees apart on the circle, and since angles on the circle are twice the physical angles, that corresponds to 90 degrees in the material."
                },
                {
                    id: "cm24q018",
                    src: "STRU935-00254",
                    text: "A composite bar consists of two materials, A and B, firmly joined together at their ends. If the coefficient of thermal expansion for material A (αA​) is greater than that of material B (αB​), what stresses are induced in the materials when the temperature is increased?",
                    options: [
                        { key: "a", text: "Tension in both the materials" },
                        { key: "b", text: "Tension in material A and compression in material B" },
                        { key: "c", text: "Compression in material A and tension in material B" },
                        { key: "d", text: "Compression in both the materials" }
                    ],
                    answer: "b",
                    explanation: "When temperature increases, materials expand. If two materials with different coefficients of thermal expansion are constrained, the material with the higher expansion coefficient (A) will be prevented from expanding fully, putting it in compression. The material with the lower coefficient (B) will be pulled, putting it in tension."
                },
                {
                    id: "cm24q019",
                    src: "STRU935-00255",
                    text: "A solid circular shaft of diameter d is subjected to a torque T. The maximum normal stress induced in the shaft is .......",
                    options: [
                        { key: "a", text: "3T/πd³" },
                        { key: "b", text: "None" },
                        { key: "c", text: "Zero" }
                    ],
                    answer: "c",
                    explanation: "Under pure torsion only shear stresses act on transverse and longitudinal planes, so the normal stress on those planes is zero. On planes at \\(45^\\circ\\) to the axis, however, the principal stresses equal the maximum shear stress, \\[\\tau_{max} = \\dfrac{16T}{\\pi d^3}\\] Option (a) is a wrong formula for it. Strictly the maximum normal stress is not listed; the key's 'Zero' refers to the normal stress on the cross-section itself."
                },
                {
                    id: "cm24q020",
                    src: "STRU935-00256",
                    text: "Which test is conducted to measure the ability of a material to resist scratching, abrasion, deformation and indentation?",
                    options: [
                        { key: "a", text: "Creep test" },
                        { key: "b", text: "Fatigue test" },
                        { key: "c", text: "Compression test" },
                        { key: "d", text: "Hardness test" }
                    ],
                    answer: "d",
                    explanation: "A hardness test measures resistance to localised plastic deformation, and the Brinell, Vickers and Rockwell methods all press an indenter in and measure the impression. Hardness correlates roughly with tensile strength, which is why it is such a convenient non-destructive site check."
                },
                {
                    id: "cm24q021",
                    src: "STRU935-00257",
                    text: "Which test is conducted to measure the endurance limit of the material?",
                    options: [
                        { key: "a", text: "Fatigue test" },
                        { key: "b", text: "Creep test" },
                        { key: "c", text: "Compression test" },
                        { key: "d", text: "Hardness test" }
                    ],
                    answer: "a",
                    explanation: "The endurance limit is the maximum stress amplitude a material can withstand for an infinite number of cycles without failing, determined by a fatigue test."
                },
                {
                    id: "cm24q022",
                    src: "STRU935-00258",
                    text: "How the total strain in any body subjected to different loads at different sections can be calculated?",
                    options: [
                        { key: "a", text: "The resultant strain calculated by the trigonometry" },
                        { key: "b", text: "The resultant strain is the algebraic sum of the individual strain" },
                        { key: "c", text: "The resultant will be through Lame’s theorem" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "Strain is a measure of deformation. For small strains, the principle of superposition applies, and the total strain is the algebraic sum of strains caused by individual loads."
                },
                {
                    id: "cm24q023",
                    src: "STRU935-00259",
                    text: "Resistance offered by material to deformation when subjected to external loads ......",
                    options: [
                        { key: "a", text: "Resistivity" },
                        { key: "b", text: "Resilience" },
                        { key: "c", text: "Stress" },
                        { key: "d", text: "Strain" }
                    ],
                    answer: "c",
                    explanation: "Stress is defined as the internal resistance offered by a material per unit area against deformation when subjected to external loads."
                },
                {
                    id: "cm24q024",
                    src: "STRU935-00260",
                    text: "Poisson’s ratio is the ratio of",
                    options: [
                        { key: "a", text: "lateral stress to longitudinal strain" },
                        { key: "b", text: "lateral stress to longitudinal stress" },
                        { key: "c", text: "lateral strain to longitudinal stress" },
                        { key: "d", text: "lateral strain to longitudinal strain" }
                    ],
                    answer: "d",
                    explanation: "<p>The matching option is lateral strain to longitudinal strain. For signed strains under uniaxial stress with free lateral surfaces, the definition includes a minus sign.</p><ol><li>Longitudinal strain is $\\varepsilon_l=\\dfrac{\\Delta L}{L}$ and lateral strain is $\\varepsilon_t=\\dfrac{\\Delta d}{d}$.</li><li>Poisson's ratio is $\\nu=-\\dfrac{\\varepsilon_t}{\\varepsilon_l}$. Both strains are dimensionless.</li><li>Illustration: if $\\varepsilon_l=0.001$ and $\\varepsilon_t=-0.0003$, then $\\nu=-\\dfrac{-0.0003}{0.001}=0.3$.</li></ol><p>The minus sign gives a positive value for ordinary contraction during tension; it does not force every material to have a positive ratio. Stable compressible isotropic linear elasticity permits $-1<\\nu<0.5$, including negative auxetic values. The incompressible limit is 0.5; directional ratios in anisotropic materials need separate treatment.</p>"
                }
            ]
        },
        {
            id: "cm24desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "10 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm24q025",
                    src: "DESI787-00215",
                    text: "The maximum number of bolts of diameter 25mm that can be accommodated in one row in a 200mm wide flat are: ______",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "2" },
                        { key: "c", text: "4" },
                        { key: "d", text: "5" }
                    ],
                    answer: "a",
                    explanation: "The minimum pitch is \\(2.5d\\), or 62.5 mm. With end distances of \\(1.5d = 37.5\\) mm each, the space left for pitches is \\[200 - 2 \\times 37.5 = 125\\ \\text{mm}\\] so \\(n - 1 = \\dfrac{125}{62.5} = 2\\) and \\(n = 3\\) bolts."
                },
                {
                    id: "cm24q026",
                    src: "DESI787-00216",
                    text: "Calculate strength in shear of 16mm diameter of bolt of grade 4.6 for lap joint",
                    options: [
                        { key: "a", text: "59 kN" },
                        { key: "b", text: "29 kN" },
                        { key: "c", text: "40 kN" }
                    ],
                    answer: "b",
                    explanation: "For a bolt in single shear, with \\(f_{ub} = 400\\) MPa, \\(d = 16\\) mm and \\(\\gamma_{mb} = 1.25\\), \\[V_{dsb} = \\dfrac{f_{ub}}{\\sqrt{3}} \\times \\dfrac{\\pi d^2}{4} \\times \\dfrac{1}{\\gamma_{mb}}\\] \\[\\begin{aligned} &amp;= \\dfrac{230.94 \\times 201.06}{1.25} \\\\ &amp;\\approx 37{,}151\\ \\text{N} \\end{aligned}\\] or about 37.15 kN, which is not an option. The key's 29 kN must come from a different grade or assumption; it is kept as the intended answer."
                },
                {
                    id: "cm24q027",
                    src: "DESI787-00217",
                    text: "What is the efficiency of joint when the strength of the bolt per pitch length is 60kN and the strength of the plate per pitch length is 150kN?",
                    options: [
                        { key: "a", text: "25%" },
                        { key: "b", text: "30%" },
                        { key: "c", text: "40%" },
                        { key: "d", text: "35%" }
                    ],
                    answer: "c",
                    explanation: "The efficiency of a riveted or bolted joint is the joint strength divided by the solid plate strength. Here the bolt governs (60 kN) and the plate gives 150 kN: \\[\\eta = \\dfrac{60}{150} \\times 100 = 40\\%\\]"
                },
                {
                    id: "cm24q028",
                    src: "DESI787-00218",
                    text: "Strength of bolt is ______",
                    options: [
                        { key: "a", text: "maximum of shear strength and bearing capacity of bolt" },
                        { key: "b", text: "shear strength of bolt" },
                        { key: "c", text: "bearing capacity of bolt" },
                        { key: "d", text: "minimum of shear strength and bearing capacity of bolt" }
                    ],
                    answer: "d",
                    explanation: "The design strength of a bolt in a connection is the minimum of its shear strength (Vdb) and bearing strength (Vdpb) to ensure the connection fails in the least catastrophic manner."
                },
                {
                    id: "cm24q029",
                    src: "DESI787-00219",
                    text: "When a cantilever beam is supported by a gusset, the end of the cantilever will transfer.",
                    options: [
                        { key: "a", text: "shear force and bending moment" },
                        { key: "b", text: "shear force" },
                        { key: "c", text: "torsion" },
                        { key: "d", text: "bending moment" }
                    ],
                    answer: "a",
                    explanation: "A cantilever beam connected to a gusset plate transfers both the shear force and the bending moment at its fixed end to the support."
                },
                {
                    id: "cm24q030",
                    src: "DESI787-00220",
                    text: "In bolted moment end plate connection, bending moment, axial force, and shear force are transferred by ______",
                    options: [
                        { key: "a", text: "tension only" },
                        { key: "b", text: "tension and compression" },
                        { key: "c", text: "compression only" },
                        { key: "d", text: "friction" }
                    ],
                    answer: "b",
                    explanation: "In an end-plate moment connection, the bending moment is transferred primarily through tension in the bolts on one side and compression bearing on the other side of the connection."
                },
                {
                    id: "cm24q031",
                    src: "DESI787-00221",
                    text: "According to the IS code, the strength of the welded portion ______ of the effective strength of the material welded.",
                    options: [
                        { key: "a", text: "should not be less than 50%" },
                        { key: "b", text: "should be less than 80%" },
                        { key: "c", text: "should not be less than 80%" }
                    ],
                    answer: "c",
                    explanation: "As per IS 800:2007, the efficiency of a butt weld should be 100%, but for other welds, it should generally not be less than 80% of the strength of the parent material."
                },
                {
                    id: "cm24q032",
                    src: "DESI787-00222",
                    text: "Position of splices should be ______ in normal practice.",
                    options: [
                        { key: "a", text: "at mid-height of columns" },
                        { key: "b", text: "at three fourth height of column from the bottom of column" },
                        { key: "c", text: "at three fourth height of column from the top of column" },
                        { key: "d", text: "just above the floor level" }
                    ],
                    answer: "d",
                    explanation: "Column splices are typically located just above the floor level (or every other floor) to facilitate erection and to avoid the region of maximum moment."
                },
                {
                    id: "cm24q033",
                    src: "DESI787-00223",
                    text: "Which of the following types of weld is most suitable for lap and T joints?",
                    options: [
                        { key: "a", text: "Fillet weld" },
                        { key: "b", text: "Groove weld" },
                        { key: "c", text: "Slot weld" },
                        { key: "d", text: "Plug weld" }
                    ],
                    answer: "a",
                    explanation: "Fillet welds are the most common and suitable type of weld for connecting lap joints and T-joints due to their simplicity and effectiveness."
                },
                {
                    id: "cm24q034",
                    src: "DESI787-00224",
                    text: "The production of sound welds is not governed by ______",
                    options: [
                        { key: "a", text: "type of joint" },
                        { key: "b", text: "type of metal plate" },
                        { key: "c", text: "choice of electrode" },
                        { key: "d", text: "arc length" }
                    ],
                    answer: "b",
                    explanation: "The quality of a weld is governed by joint design, electrode selection, arc length, current, etc. The type of metal plate (e.g., steel) itself is a given and does not 'govern' the production process; it's the material to be welded."
                }
            ]
        },
        {
            id: "cm24soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "14 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm24q035",
                    src: "SOIL136-00301",
                    text: "If free water stands on both side of a retaining wall, the lateral earth pressure is given by ______.",
                    options: [
                        { key: "a", text: "P_a = K_a * γ' Z" },
                        { key: "b", text: "P_a = K_a * γ' Z - γ_w Z" },
                        { key: "c", text: "P_a = K_a * γ' Z + γ_w Z" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "a",
                    explanation: "When water is on both sides, the hydrostatic pressures cancel out. The net lateral pressure is only due to the effective earth pressure, calculated using the submerged unit weight."
                },
                {
                    id: "cm24q036",
                    src: "SOIL136-00302",
                    text: "If the angle of internal friction decreases, then K_a ______.",
                    options: [
                        { key: "a", text: "decreases" },
                        { key: "b", text: "equal to zero" },
                        { key: "c", text: "does not change" },
                        { key: "d", text: "increases" }
                    ],
                    answer: "d",
                    explanation: "Since \\[K_a = \\dfrac{1 - \\sin\\phi}{1 + \\sin\\phi}\\] a decrease in \\(\\phi\\) lowers the denominator and raises the numerator, so \\(K_a\\) increases."
                },
                {
                    id: "cm24q037",
                    src: "SOIL136-00303",
                    text: "The height of fill Z_e, equivalent to uniform surcharge intensity is ______.",
                    options: [
                        { key: "a", text: "q / γ" },
                        { key: "b", text: "q - γ" },
                        { key: "c", text: "q + γ" },
                        { key: "d", text: "q * γ" }
                    ],
                    answer: "a",
                    explanation: "A surcharge \\(q\\) on the backfill is equivalent to an extra height of soil: \\[Z_e = \\dfrac{q}{\\gamma}\\]"
                },
                {
                    id: "cm24q038",
                    src: "SOIL136-00304",
                    text: "For finding out the active earth pressure for a backfill with sloping surface, the Rankine’s theory makes as additional assumption of ______.",
                    options: [
                        { key: "a", text: "vertical and lateral stresses are normal to surcharge" },
                        { key: "b", text: "Vertical and lateral stresses are conjugate" },
                        { key: "c", text: "vertical and lateral stresses are tangential to surcharge" },
                        { key: "d", text: "vertical and lateral stresses are negligible" }
                    ],
                    answer: "b",
                    explanation: "For a sloping backfill, Rankine assumed that the stress components on a soil element are parallel to the slope, meaning they are conjugate stresses."
                },
                {
                    id: "cm24q039",
                    src: "SOIL136-00305",
                    text: "The theory of plasticity pertaining to soils is based on ______.",
                    options: [
                        { key: "a", text: "Mohr’s theory" },
                        { key: "b", text: "Rankine’s method" },
                        { key: "c", text: "Mohr-coulomb theory" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "The Mohr-Coulomb failure criterion is the foundation of plasticity theory for soils, defining the shear strength in terms of cohesion and friction angle."
                },
                {
                    id: "cm24q040",
                    src: "SOIL136-00306",
                    text: "On designing retaining walls it is necessary to take care of ______ exerted by soil mass.",
                    options: [
                        { key: "a", text: "Erosion" },
                        { key: "b", text: "Surcharge" },
                        { key: "c", text: "Lateral pressure" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "c",
                    explanation: "A retaining wall exists to resist the lateral earth pressure from the soil behind it, and that pressure is what governs its stability against sliding, overturning and bearing failure. Surcharge and water pressure simply add to that lateral push, and erosion is a separate durability concern."
                },
                {
                    id: "cm24q041",
                    src: "SOIL136-00307",
                    text: "The material retained or supported by the retaining structure is called ______.",
                    options: [
                        { key: "a", text: "Back fill" },
                        { key: "b", text: "Surcharge" },
                        { key: "c", text: "Support wall" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "a",
                    explanation: "The backfill is the soil retained behind the wall, and its unit weight, friction angle and drainage decide the pressure the wall must carry. A surcharge is any extra load carried on top of that backfill, such as a road or a stack of material, and it adds a uniform pressure over the full height."
                },
                {
                    id: "cm24q042",
                    src: "SOIL136-00308",
                    text: "The coefficient of earth pressure when the soil is at equilibrium is ______.",
                    options: [
                        { key: "a", text: "σ_v / σ_h" },
                        { key: "b", text: "σ_h / σ_v" },
                        { key: "c", text: "σ_g + σ_h" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "b",
                    explanation: "The coefficient of earth pressure (K) is defined as the ratio of horizontal effective stress (σ'h) to vertical effective stress (σ'v). At rest, it is K₀ = σ'h / σ'v."
                },
                {
                    id: "cm24q043",
                    src: "SOIL136-00309",
                    text: "The computation of stress in plastic equilibrium is based on ______.",
                    options: [
                        { key: "a", text: "Theory of plasticity" },
                        { key: "b", text: "Mohr’s theory of rupture" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "Rankine’s theory" }
                    ],
                    answer: "c",
                    explanation: "Theories by Rankine, Mohr, and general plasticity are used to compute stresses when the soil is at the point of failure (plastic equilibrium)."
                },
                {
                    id: "cm24q044",
                    src: "SOIL136-00310",
                    text: "The wedge-shaped portion of the backfill that tends to move with the wall is called ______.",
                    options: [
                        { key: "a", text: "Wedge fall" },
                        { key: "b", text: "Active fall" },
                        { key: "c", text: "None" },
                        { key: "d", text: "Failure wedge" }
                    ],
                    answer: "d",
                    explanation: "In active or passive states, a wedge of soil is theorized to fail along a slip plane. This is called the failure wedge or slip wedge."
                },
                {
                    id: "cm24q045",
                    src: "SOIL136-00311",
                    text: "In active stress, the major principal stress σ₁ acting on the wall will be in ______ plane.",
                    options: [
                        { key: "a", text: "Vertical" },
                        { key: "b", text: "Horizontal" },
                        { key: "c", text: "Inclined" },
                        { key: "d", text: "Zero" }
                    ],
                    answer: "a",
                    explanation: "In the active Rankine state, the vertical stress is the major principal stress (σ₁) for a vertical wall with horizontal backfill."
                },
                {
                    id: "cm24q046",
                    src: "SOIL136-00312",
                    text: "The plastic state of stress was proposed by ______.",
                    options: [
                        { key: "a", text: "Mohr" },
                        { key: "b", text: "Rankine" },
                        { key: "c", text: "Coulomb" },
                        { key: "d", text: "Darcy" }
                    ],
                    answer: "b",
                    explanation: "Rankine analysed the two limiting plastic states of a soil mass, the active state reached when it is allowed to stretch and the passive state when it is compressed, and derived the earth pressure coefficients from them. Coulomb's earlier wedge theory took a different route through force equilibrium and can include wall friction."
                },
                {
                    id: "cm24q047",
                    src: "SOIL136-00313",
                    text: "The position of the backfill lying above the horizontal plane at the top of wall is called ______.",
                    options: [
                        { key: "a", text: "Active state" },
                        { key: "b", text: "Plasticity" },
                        { key: "c", text: "Surcharge" },
                        { key: "d", text: "Slip lines" }
                    ],
                    answer: "c",
                    explanation: "A surcharge is any load carried on the backfill above the level of the top of the wall, whether a uniform load such as a road or stacked material, or the extra soil where the ground slopes up behind. A uniform surcharge q adds Ka times q to the pressure over the full height of the wall."
                },
                {
                    id: "cm24q048",
                    src: "SOIL136-00314",
                    text: "What will be the co-efficient of passive earth pressure, at a depth of 8m in cohesionless soil sand with an angle of internal friction of 32° when the water rises to the ground level?",
                    options: [
                        { key: "a", text: "2.283" },
                        { key: "b", text: "4.234" },
                        { key: "c", text: "5.432" },
                        { key: "d", text: "3.254" }
                    ],
                    answer: "d",
                    explanation: "For \\(\\phi = 32^\\circ\\), \\(\\sin 32^\\circ = 0.5299\\), so \\[\\begin{aligned} K_p &amp;= \\dfrac{1 + 0.5299}{1 - 0.5299} = \\dfrac{1.5299}{0.4701} \\\\ &amp;= 3.254 \\end{aligned}\\] The water level does not change \\(K_p\\), which is a property of the soil."
                }
            ]
        },
        {
            id: "cm24watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm24q049",
                    src: "WATE701-00266",
                    text: "The pressure at any given point of a non-moving fluid is called the ______.",
                    options: [
                        { key: "a", text: "Hydrostatic Pressure" },
                        { key: "b", text: "Gauge Pressure" },
                        { key: "c", text: "Atmospheric Pressure" },
                        { key: "d", text: "Differential Pressure" }
                    ],
                    answer: "a",
                    explanation: "In fluid statics, the pressure at a point in a fluid at rest is called hydrostatic pressure. It is due to the weight of the fluid column above that point."
                },
                {
                    id: "cm24q050",
                    src: "WATE701-00267",
                    text: "15 bar equals to ______ Pascals.",
                    options: [
                        { key: "a", text: "150000" },
                        { key: "b", text: "1500000" },
                        { key: "c", text: "15000" },
                        { key: "d", text: "150" }
                    ],
                    answer: "b",
                    explanation: "One bar is 100,000 pascals, so 15 bar is 1.5 million pascals, that is 1.5 MPa. The bar is convenient because it is very close to atmospheric pressure, 101,325 Pa, and because 10 m of water produces almost exactly 1 bar."
                },
                {
                    id: "cm24q051",
                    src: "WATE701-00268",
                    text: "The device used to measure the fluid pressure is ______",
                    options: [
                        { key: "a", text: "Hydrometer" },
                        { key: "b", text: "Calorimeter" },
                        { key: "c", text: "Manometer" },
                        { key: "d", text: "Thermometer" }
                    ],
                    answer: "c",
                    explanation: "A manometer is a device that uses a column of liquid to measure pressure. It operates on the principle of hydrostatic equilibrium."
                },
                {
                    id: "cm24q052",
                    src: "WATE701-00269",
                    text: "What type of liquids are measured using a manometer?",
                    options: [
                        { key: "a", text: "Heavy liquids" },
                        { key: "b", text: "Medium Liquids" },
                        { key: "c", text: "Light Liquids" },
                        { key: "d", text: "Both (a) and (c)" }
                    ],
                    answer: "d",
                    explanation: "Manometers can be used for both heavy liquids (like mercury) and light liquids (like water or alcohol), depending on the pressure range and required sensitivity."
                },
                {
                    id: "cm24q053",
                    src: "WATE701-00270",
                    text: "Which among these devices are the best suited for the measurement of high pressure liquids with high accuracy?",
                    options: [
                        { key: "a", text: "Dead Weight Gauge" },
                        { key: "b", text: "Vacuum Gauge" },
                        { key: "c", text: "Manganin wire pressure gauge" },
                        { key: "d", text: "Ionization Gauge" }
                    ],
                    answer: "a",
                    explanation: "A dead weight tester uses calibrated weights to apply a known pressure to a fluid. It is a primary standard for pressure calibration and is highly accurate for measuring high pressures."
                },
                {
                    id: "cm24q054",
                    src: "WATE701-00271",
                    text: "How do we measure the flow rate of liquid?",
                    options: [
                        { key: "a", text: "Dead weight method" },
                        { key: "b", text: "Coriolis method" },
                        { key: "c", text: "Conveyor method" },
                        { key: "d", text: "Ionization method" }
                    ],
                    answer: "b",
                    explanation: "A Coriolis flow meter measures mass flow rate by detecting the Coriolis force on a vibrating tube through which the fluid flows. It is highly accurate."
                },
                {
                    id: "cm24q055",
                    src: "WATE701-00272",
                    text: "What is the instrument used for the automatic control scheme during the fluid flow?",
                    options: [
                        { key: "a", text: "Pulley plates" },
                        { key: "b", text: "Rotary Piston" },
                        { key: "c", text: "Rotameters" },
                        { key: "d", text: "Pitot Static Tube" }
                    ],
                    answer: "c",
                    explanation: "A rotameter is a variable area flow meter that consists of a tapered tube and a float. It is commonly used for flow indication and in automatic control systems."
                },
                {
                    id: "cm24q056",
                    src: "WATE701-00273",
                    text: "Viscosity is defined as",
                    options: [
                        { key: "a", text: "Resistance to flow of an object" },
                        { key: "b", text: "Resistance to flow of air" },
                        { key: "c", text: "Resistance to flow of heat" },
                        { key: "d", text: "Resistance to flow of fluid" }
                    ],
                    answer: "d",
                    explanation: "Viscosity is a measure of a fluid's internal resistance to deformation or flow. It quantifies the frictional force between adjacent layers of fluid moving at different velocities."
                },
                {
                    id: "cm24q057",
                    src: "WATE701-00274",
                    text: "What is the viscosity of water at 30°C?",
                    options: [
                        { key: "a", text: "0.801" },
                        { key: "b", text: "80.1" },
                        { key: "c", text: "801" },
                        { key: "d", text: "0.081" }
                    ],
                    answer: "a",
                    explanation: "Water at 30 degrees Celsius has a dynamic viscosity of about 0.801 centipoise, that is 0.000801 pascal seconds. Viscosity falls steeply with temperature, roughly halving between 10 and 40 degrees, which is why temperature must be recorded whenever viscosity or permeability is measured."
                },
                {
                    id: "cm24q058",
                    src: "WATE701-00275",
                    text: "A hydraulic press has a ram of 30 cm diameter and a plunger of 2 cm diameter. It is used for lifting a weight of 35 KN. Find the force required at the plunger.",
                    options: [
                        { key: "a", text: "233.3 N" },
                        { key: "b", text: "155.5 N" },
                        { key: "c", text: "311.1 N" },
                        { key: "d", text: "466.6 N" }
                    ],
                    answer: "b",
                    explanation: "By Pascal's law the plunger force is the ram load times the area ratio: \\[F_p = F_r\\left(\\dfrac{d_p}{D_r}\\right)^2\\] \\[\\begin{aligned} F_p &amp;= 35{,}000 \\times \\left(\\dfrac{2}{30}\\right)^2 \\\\ &amp;= \\dfrac{35{,}000}{225} \\\\ &amp;\\approx 155.56\\ \\text{N} \\end{aligned}\\]"
                },
                {
                    id: "cm24q059",
                    src: "WATE701-00276",
                    text: "The pressure at a point in the fluid is 45 N/cm². Find height when the fluid under consideration is in oil of specific gravity at 0.85.",
                    options: [
                        { key: "a", text: "11.66 m" },
                        { key: "b", text: "17.49 m" },
                        { key: "c", text: "5.83 m" },
                        { key: "d", text: "8.74 m" }
                    ],
                    answer: "c",
                    explanation: "With \\(\\rho = 850\\) kg per m<sup>3</sup> and 45 N per cm<sup>2</sup>, or 450,000 Pa, \\[h = \\dfrac{P}{\\rho g} = \\dfrac{450{,}000}{850 \\times 9.81}\\] \\[\\approx 53.98\\ \\text{m}\\] which matches no option. Reading the pressure as 4.5 N per cm<sup>2</sup> (45,000 Pa) gives about 5.4 m, close to 5.83 m, so the intended answer is 5.83 m, assuming a misprinted pressure unit."
                },
                {
                    id: "cm24q060",
                    src: "WATE701-00277",
                    text: "An open tank contains water upto a depth of 350 cm and above it an oil of specific gravity 0.65 for a depth of 2.5 m. Find the pressure intensity at the extreme bottom of the tank.",
                    options: [
                        { key: "a", text: "10.05 N/cm²" },
                        { key: "b", text: "2.51 N/cm²" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "5.027 N/cm²" }
                    ],
                    answer: "d",
                    explanation: "The bottom pressure is the sum of the oil and water columns: \\[P = \\rho_og h_o + \\rho_wg h_w\\] \\[\\begin{aligned} &amp;= 650 \\times 9.81 \\times 2.5 \\\\ &amp;\\quad + 1000 \\times 9.81 \\times 3.5 \\\\ &amp;= 15{,}941.25 + 34{,}335 \\\\ &amp;= 50{,}276.25\\ \\text{Pa} \\end{aligned}\\] which is 5.0276 N per cm<sup>2</sup>, since 1 N per cm<sup>2</sup> is 10,000 Pa."
                }
            ]
        },
        {
            id: "cm24hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm24q061",
                    src: "HYDR626-00213",
                    text: "The dissipating arrangement below a spillway in sound rock foundation is usually",
                    options: [
                        { key: "a", text: "Well-stilling type" },
                        { key: "b", text: "Hydraulic jump type" },
                        { key: "c", text: "Ski jump roller" },
                        { key: "d", text: "All of above" }
                    ],
                    answer: "c",
                    explanation: "On sound rock foundations, which are resistant to erosion, a ski jump (or flip bucket) dissipator is often used. It throws the jet of water away from the structure, allowing the energy to be dissipated in the air and in a plunge pool."
                },
                {
                    id: "cm24q062",
                    src: "HYDR626-00214",
                    text: "Morning glory spillway is other name of,",
                    options: [
                        { key: "a", text: "Siphon spillway" },
                        { key: "b", text: "Shaft spillway" },
                        { key: "c", text: "Chute spillway" },
                        { key: "d", text: "None" }
                    ],
                    answer: "b",
                    explanation: "A morning glory spillway is a type of shaft spillway characterized by its circular, funnel-shaped inlet that resembles the flower of the same name."
                },
                {
                    id: "cm24q063",
                    src: "HYDR626-00215",
                    text: "River intake is usually situated on",
                    options: [
                        { key: "a", text: "Convex side of curve" },
                        { key: "b", text: "Concave side of curve" },
                        { key: "c", text: "O/S of sever outfall" },
                        { key: "d", text: "None of above" }
                    ],
                    answer: "b",
                    explanation: "Intakes are located on the concave (outer) bank of a river bend because natural flow patterns cause deeper water and less sediment accumulation on this side due to centrifugal force."
                },
                {
                    id: "cm24q064",
                    src: "HYDR626-00216",
                    text: "In a reservoir with widely fluctuations in water level need not to draw quality water, the intake is usually",
                    options: [
                        { key: "a", text: "Submerged type" },
                        { key: "b", text: "Drop intake type" },
                        { key: "c", text: "Frontal intake type" },
                        { key: "d", text: "Tower type" }
                    ],
                    answer: "d",
                    explanation: "A tower intake is a standalone structure with multiple gates at different elevations. This allows water to be drawn from the optimal level in a reservoir with large fluctuations, even if quality varies with depth."
                },
                {
                    id: "cm24q065",
                    src: "HYDR626-00217",
                    text: "In case of valley type of plant, which type of intake is suited",
                    options: [
                        { key: "a", text: "Dam intake" },
                        { key: "b", text: "Side intake" },
                        { key: "c", text: "Frontal intake" },
                        { key: "d", text: "Canal intake" }
                    ],
                    answer: "a",
                    explanation: "In a valley-type plant, the intake is often integrated directly into the dam structure (dam intake), allowing water to be conveyed under pressure through penstocks to the power station located downstream in the valley."
                },
                {
                    id: "cm24q066",
                    src: "HYDR626-00218",
                    text: "Which of the following is NOT a factor that affects the design of an intake structure?",
                    options: [
                        { key: "a", text: "Velocity of the water" },
                        { key: "b", text: "Type of turbine used" },
                        { key: "c", text: "Size of the sediment" },
                        { key: "d", text: "Volume of water to be diverted" }
                    ],
                    answer: "b",
                    explanation: "While the turbine type influences the design of the penstock and powerhouse, the intake structure's primary design factors are hydraulic: water velocity, sediment load, and the required discharge volume."
                },
                {
                    id: "cm24q067",
                    src: "HYDR626-00219",
                    text: "To ensure maximum overall plant efficiency, the rated head should be equal to",
                    options: [
                        { key: "a", text: "Gross head" },
                        { key: "b", text: "Operating head" },
                        { key: "c", text: "Design head" },
                        { key: "d", text: "Effective head" }
                    ],
                    answer: "c",
                    explanation: "The design head is the net head for which a turbine is designed to achieve its peak efficiency. Matching the rated head to the design head ensures the turbine operates at its best efficiency point for the most common conditions."
                },
                {
                    id: "cm24q068",
                    src: "HYDR626-00220",
                    text: "Trash racks are built for:",
                    options: [
                        { key: "a", text: "Discharging the water freely from the turbine exit to tailrace" },
                        { key: "b", text: "Creating artificial head to store sufficient potential energy of water" },
                        { key: "c", text: "Controlling the opening of valves" },
                        { key: "d", text: "Preventing the turbine from ingress of floating and other materials" }
                    ],
                    answer: "d",
                    explanation: "Trash racks are screens placed at the intake to block debris (trash) such as logs, branches, and leaves from entering the water conduit and damaging turbines, pumps, or other equipment."
                },
                {
                    id: "cm24q069",
                    src: "HYDR626-00221",
                    text: "A Dam with crest level of 150mast has water elevation of 1805 msi. What is the elevation at which the point of application of horizontal component of hydrostatic pressure acts if the base of the dam is at 1450 msi.",
                    options: [
                        { key: "a", text: "1458.28" },
                        { key: "b", text: "1479.55" },
                        { key: "c", text: "1568.33" },
                        { key: "d", text: "None of above" }
                    ],
                    answer: "c",
                    explanation: "The resultant of a triangular hydrostatic pressure distribution acts at one third of the water depth above the base. With 355 m of water the centre of pressure is 236.67 m above the base, that is at an elevation of 1805 minus 236.67, which is 1568.33."
                }
            ]
        },
        {
            id: "cm24irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "10 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm24q070",
                    src: "IRRI951-00246",
                    text: "The floor of the aqueduct is subjected to uplift pressure due to",
                    options: [
                        { key: "a", text: "Seepage of water from the canal to the drainage" },
                        { key: "b", text: "Sub-soil water table in the drainage bed" },
                        { key: "c", text: "Both a and b" },
                        { key: "d", text: "None." }
                    ],
                    answer: "c",
                    explanation: "The bottom floor of an aqueduct can experience uplift pressure from two sources: seepage of water percolating from the canal above and a high sub-soil water table in the drainage bed below."
                },
                {
                    id: "cm24q071",
                    src: "IRRI951-00247",
                    text: "When a canal flowing under pressure is carried below a natural drainage such that its F.S.L. does not touch the underside of the supporting structure, the structure so provided, is called",
                    options: [
                        { key: "a", text: "Syphon." },
                        { key: "b", text: "Aqueduct" },
                        { key: "c", text: "Super passage" },
                        { key: "d", text: "Syphon-aqueduct." }
                    ],
                    answer: "c",
                    explanation: "A super passage is a cross-drainage work where the drainage is carried over the canal. If the canal's full supply level (FSL) is below the supporting structure of the drainage and the canal flows freely, it is a super passage, not a syphon."
                },
                {
                    id: "cm24q072",
                    src: "IRRI951-00248",
                    text: "In a syphon aqueduct",
                    options: [
                        { key: "a", text: "Drainage passes over the canal and F.S.L. canal is below bottom of drainage trough" },
                        { key: "b", text: "Drainage passes over the canal and F.S.L. of the canal is above the bottom of the drainage trough" },
                        { key: "c", text: "Canal passes over the drainage and H.F.L. of the drainage is below the bottom of the canal trough." },
                        { key: "d", text: "Canal passes over the drainage and H.F.L. of the drainage is above the bottom of the canal trough." }
                    ],
                    answer: "d",
                    explanation: "A syphon aqueduct is a structure where the canal passes over the drainage. The key feature is that the high flood level (HFL) of the drainage is above the bottom of the canal trough, forcing the drainage water to flow under syphonic pressure through the aqueduct barrels below the canal."
                },
                {
                    id: "cm24q073",
                    src: "IRRI951-00249",
                    text: "The structure constructed to allow drainage water to flow under pressure through an inverted syphon below a canal, is called",
                    options: [
                        { key: "a", text: "Super passage" },
                        { key: "b", text: "Syphon" },
                        { key: "c", text: "Super-aqueduct" },
                        { key: "d", text: "Syphon aqueduct" }
                    ],
                    answer: "a",
                    explanation: "It is worth keeping the four cross drainage works apart. An aqueduct carries the canal over the drain, and a siphon aqueduct does the same with the drain running under pressure beneath. A super passage carries the drain over the canal, and a canal siphon takes the canal under the drain in a pressurised barrel."
                },
                {
                    id: "cm24q074",
                    src: "IRRI951-00250",
                    text: "When a canal and a drainage approach each other at the same level, the structure so provided, is",
                    options: [
                        { key: "a", text: "An aqueduct" },
                        { key: "b", text: "A level crossing" },
                        { key: "c", text: "A syphon" },
                        { key: "d", text: "Inlet and outlet" }
                    ],
                    answer: "b",
                    explanation: "A level crossing is the appropriate structure when a canal and a natural drainage channel meet at approximately the same level. It allows the waters to mix and includes regulators to control the flow."
                },
                {
                    id: "cm24q075",
                    src: "IRRI951-00251",
                    text: "In a canal syphon, the flow is",
                    options: [
                        { key: "a", text: "Under atmospheric pressure" },
                        { key: "b", text: "Pipe flow" },
                        { key: "c", text: "Under negative pressure" },
                        { key: "d", text: "With critical velocity" }
                    ],
                    answer: "c",
                    explanation: "In a canal syphon, the canal is carried under a drainage in a depressed conduit. The flow is under pressure, and if the hydraulic gradient line dips below the conduit, it can create negative pressure (sub-atmospheric pressure) in the syphon barrels."
                },
                {
                    id: "cm24q076",
                    src: "IRRI951-00252",
                    text: "Which type of canal requires cross drainage works",
                    options: [
                        { key: "a", text: "Main canal" },
                        { key: "b", text: "Navigation canal" },
                        { key: "c", text: "Watershed canal" },
                        { key: "d", text: "Contour canal" }
                    ],
                    answer: "d",
                    explanation: "Contour canals are aligned along the contour lines of a region, winding around hills and valleys. They frequently intercept natural drains and streams, requiring numerous cross-drainage works to pass these obstructions."
                },
                {
                    id: "cm24q077",
                    src: "IRRI951-00253",
                    text: "In canal system, outlet for the water course can’t be provided at",
                    options: [
                        { key: "a", text: "main canal" },
                        { key: "b", text: "branch canal" },
                        { key: "c", text: "major distributary" },
                        { key: "d", text: "minor distributary" }
                    ],
                    answer: "a",
                    explanation: "Outlets are structures that deliver water from a distributary channel to a water course (field channel). They are not provided directly on main canals, which are major conveyance channels, but on smaller channels like distributaries and minors."
                },
                {
                    id: "cm24q078",
                    src: "IRRI951-00254",
                    text: "Cross drainage works can be avoided in",
                    options: [
                        { key: "a", text: "ridge canal" },
                        { key: "b", text: "contour canal" },
                        { key: "c", text: "side slope canal" },
                        { key: "d", text: "both a and c" }
                    ],
                    answer: "d",
                    explanation: "Ridge canals (watershed canals) are aligned along the ridge line, the highest point in the area. Side slope canals are aligned perpendicular to the contours. Both these alignments generally avoid crossing natural drains, minimizing or eliminating the need for cross-drainage works."
                },
                {
                    id: "cm24q079",
                    src: "IRRI951-00255",
                    text: "Cross drainage works can’t be avoided in",
                    options: [
                        { key: "a", text: "ridge canal" },
                        { key: "b", text: "side slope canal" },
                        { key: "c", text: "contour canal" },
                        { key: "d", text: "feeder canal" }
                    ],
                    answer: "c",
                    explanation: "Contour canals, which follow the contour of the land, inevitably intersect numerous natural drainage paths and valleys, making cross-drainage works unavoidable."
                }
            ]
        },
        {
            id: "cm24tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm24q080",
                    src: "TRAN808-00249",
                    text: "Which of the following is one of the uses of a collision diagram?",
                    options: [
                        { key: "a", text: "Demarcating area for parking" },
                        { key: "b", text: "Interpreting traffic data" },
                        { key: "c", text: "N/A" },
                        { key: "d", text: "Record of accident occurrence" }
                    ],
                    answer: "d",
                    explanation: "A collision diagram is a schematic representation of accidents at a location. Its primary use is to visually record the pattern, type, and frequency of accident occurrences to help identify problem areas and contributing factors. (Note: the option \"Interpreting traffic data\" was incomplete in the original text)"
                },
                {
                    id: "cm24q081",
                    src: "TRAN808-00250",
                    text: "Which of the following type of parking area exclusively allotted for parking at one distance away from the mainstream of road?",
                    options: [
                        { key: "a", text: "Off-street parking" },
                        { key: "b", text: "30 degrees parking" },
                        { key: "c", text: "Right-angle parking" },
                        { key: "d", text: "Parallel parking" }
                    ],
                    answer: "a",
                    explanation: "Off-street parking refers to parking facilities (lots, garages) that are located away from the main carriageway, unlike on-street parking (like parallel or angle parking) which occurs on the road itself."
                },
                {
                    id: "cm24q082",
                    src: "TRAN808-00251",
                    text: "Upper speed limit for regulation is",
                    options: [
                        { key: "a", text: "15th percentile speed" },
                        { key: "b", text: "85th percentile speed" },
                        { key: "c", text: "98th percentile speed" },
                        { key: "d", text: "60th percentile speed" }
                    ],
                    answer: "b",
                    explanation: "Speed limits are often set based on the 85th percentile speed, which is the speed at or below which 85% of vehicles are traveling. This is considered a safe speed that the majority of reasonable drivers select under normal conditions."
                },
                {
                    id: "cm24q083",
                    src: "TRAN808-00252",
                    text: "The background color of the informatory sign board is",
                    options: [
                        { key: "a", text: "Yellow" },
                        { key: "b", text: "Red" },
                        { key: "c", text: "White" },
                        { key: "d", text: "Green" }
                    ],
                    answer: "c",
                    explanation: "As per standard traffic sign conventions, informatory signs, which provide guidance and information to drivers (e.g., directions, distances), have a white background."
                },
                {
                    id: "cm24q084",
                    src: "TRAN808-00253",
                    text: "The signs should be mounted on sign panel and alternatively with",
                    options: [
                        { key: "a", text: "10 cm yellow and black bands" },
                        { key: "b", text: "70 cm white and green bands" },
                        { key: "c", text: "25 cm black and white bands" },
                        { key: "d", text: "50 cm black and yellow bands" }
                    ],
                    answer: "d",
                    explanation: "For enhanced visibility and warning, especially for roadside obstacles or supports, sign posts are often painted with alternating 50 cm black and yellow bands to create a highly conspicuous pattern."
                },
                {
                    id: "cm24q085",
                    src: "TRAN808-00254",
                    text: "The type of signalling system in which possible to vary the length of cycle, cycle division and the time schedule at each sign point is called",
                    options: [
                        { key: "a", text: "Flexible progressive system" },
                        { key: "b", text: "Simultaneous system" },
                        { key: "c", text: "Alternate system" },
                        { key: "d", text: "Simple progressive system" }
                    ],
                    answer: "a",
                    explanation: "A flexible progressive system uses traffic-responsive controllers that can adjust cycle length, splits (green time division), and offset (timing schedule) in real-time based on actual traffic demand, unlike fixed-time systems."
                },
                {
                    id: "cm24q086",
                    src: "TRAN808-00255",
                    text: "The length of the side of warning sign boards of roads is",
                    options: [
                        { key: "a", text: "40 cm" },
                        { key: "b", text: "45 cm" },
                        { key: "c", text: "30 cm" },
                        { key: "d", text: "50 cm" }
                    ],
                    answer: "b",
                    explanation: "As per Indian Road Congress (IRC) standards, the standard size for an equilateral triangular warning sign is 45 cm per side for normal roads. Sizes can be larger for high-speed roads."
                },
                {
                    id: "cm24q087",
                    src: "TRAN808-00256",
                    text: "As per IRC: G7 – 2001, the shape and colour of a STOP sign is",
                    options: [
                        { key: "a", text: "Triangular in shape and black in colour with white border" },
                        { key: "b", text: "Circular in shape and red in colour with white border" },
                        { key: "c", text: "Octagonal in shape and red in colour with white border" },
                        { key: "d", text: "Circular in shape and black in colour with white border" }
                    ],
                    answer: "c",
                    explanation: "The STOP sign is universally standardized for quick recognition. As per IRC and international practice, it is a unique octagonal shape with a red background and white border/lettering to command attention and indicate a mandatory stop."
                },
                {
                    id: "cm24q088",
                    src: "TRAN808-00257",
                    text: "Which factors influence night visibility in highway?",
                    options: [
                        { key: "a", text: "Size of objects." },
                        { key: "b", text: "Brightness of Objects." },
                        { key: "c", text: "Reflecting Characteristics of the pavement surface." },
                        { key: "d", text: "All of these." }
                    ],
                    answer: "d",
                    explanation: "Night visibility is a complex function of several factors: object size, its contrast/brightness against the background, and the reflective properties of the road surface which affects how headlights illuminate the scene."
                },
                {
                    id: "cm24q089",
                    src: "TRAN808-00258",
                    text: "Which factors to be considered in the design of road lighting?",
                    options: [
                        { key: "a", text: "Luminance distribution of light." },
                        { key: "b", text: "The spacing of light units." },
                        { key: "c", text: "Lighting layouts." },
                        { key: "d", text: "All of these." }
                    ],
                    answer: "d",
                    explanation: "Road lighting design is a system. It requires considering the quality of light (luminance/illuminance distribution), the quantity and placement of hardware (spacing and height of poles), and the overall arrangement (layout) to achieve uniform and safe illumination."
                },
                {
                    id: "cm24q090",
                    src: "TRAN808-00259",
                    text: "The spacing of lighting units influenced by",
                    options: [
                        { key: "a", text: "Electric distribution poles" },
                        { key: "b", text: "Illumination." },
                        { key: "c", text: "Road layout." },
                        { key: "d", text: "All of these." }
                    ],
                    answer: "d",
                    explanation: "The spacing between light poles is a critical design choice influenced by the desired illumination level (closer spacing gives more uniform light), the physical layout of the road (curves, intersections), and practical constraints like the location of existing utility poles."
                }
            ]
        },
        {
            id: "cm24wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm24q091",
                    src: "WATE813-00234",
                    text: "Break-point chlorination of water involves addition of chlorine in an amount sufficient to:",
                    options: [
                        { key: "a", text: "kill Giardia cysts" },
                        { key: "b", text: "reduce bacterial growth" },
                        { key: "c", text: "react with any ammonia and oxidizable organic matter" },
                        { key: "d", text: "remove color" }
                    ],
                    answer: "c",
                    explanation: "Break-point chlorination is the point where enough chlorine is added to oxidize all ammonia, organic matter, and other chlorine-demanding substances, leaving a free chlorine residual."
                },
                {
                    id: "cm24q092",
                    src: "WATE813-00235",
                    text: "Aeration of water is done to remove",
                    options: [
                        { key: "a", text: "Color" },
                        { key: "b", text: "Bacteria" },
                        { key: "c", text: "Turbidity" },
                        { key: "d", text: "Odour" }
                    ],
                    answer: "d",
                    explanation: "Aeration is primarily used to remove volatile gases causing taste and odor (e.g., hydrogen sulfide) and to increase dissolved oxygen levels. It is not a primary method for removing color, bacteria, or turbidity."
                },
                {
                    id: "cm24q093",
                    src: "WATE813-00236",
                    text: "The most ideal disinfectant used for drinking water is",
                    options: [
                        { key: "a", text: "Chlorine" },
                        { key: "b", text: "Alum" },
                        { key: "c", text: "Lime" },
                        { key: "d", text: "Nitrogen" }
                    ],
                    answer: "a",
                    explanation: "Chlorine is the most widely used disinfectant for drinking water due to its effectiveness, residual protection, and cost-efficiency."
                },
                {
                    id: "cm24q094",
                    src: "WATE813-00237",
                    text: "In most Cases, Oxidation is best method suitable for",
                    options: [
                        { key: "a", text: "disinfection" },
                        { key: "b", text: "removing odor" },
                        { key: "c", text: "removing hardness" },
                        { key: "d", text: "aeration" }
                    ],
                    answer: "b",
                    explanation: "Oxidation is highly effective for destroying compounds that cause taste and odor problems in water (e.g., by using ozone, chlorine, or potassium permanganate)."
                },
                {
                    id: "cm24q095",
                    src: "WATE813-00238",
                    text: "During treatment of water, sedimentation is done",
                    options: [
                        { key: "a", text: "after filtration" },
                        { key: "b", text: "simultaneously with filtration" },
                        { key: "c", text: "Before filtration" },
                        { key: "d", text: "along with chlorination" }
                    ],
                    answer: "c",
                    explanation: "Sedimentation is a primary treatment step used to remove the bulk of settleable solids (flocs) *before* the water undergoes filtration to remove finer particles."
                },
                {
                    id: "cm24q096",
                    src: "WATE813-00239",
                    text: "Ultra violet light disinfection works by",
                    options: [
                        { key: "a", text: "destroying the cell wall" },
                        { key: "b", text: "destroying the powerhouse of the cell" },
                        { key: "c", text: "oxidizing the cell" },
                        { key: "d", text: "disrupting the metabolic activities of the organisms" }
                    ],
                    answer: "d",
                    explanation: "UV light inactivates microorganisms by damaging their genetic material (DNA/RNA), disrupting their ability to replicate and metabolize."
                },
                {
                    id: "cm24q097",
                    src: "WATE813-00240",
                    text: "Foul odor and bad taste of water is removed by treating with...",
                    options: [
                        { key: "a", text: "Activated carbon" },
                        { key: "b", text: "Alum" },
                        { key: "c", text: "Bleaching powder" },
                        { key: "d", text: "Copper sulphate" }
                    ],
                    answer: "a",
                    explanation: "Activated carbon is highly effective at adsorbing organic compounds that are responsible for causing taste and odor issues in water."
                },
                {
                    id: "cm24q098",
                    src: "WATE813-00241",
                    text: "Aerators removes",
                    options: [
                        { key: "a", text: "Sand" },
                        { key: "b", text: "Dissolved gases" },
                        { key: "c", text: "Silt" },
                        { key: "d", text: "Flocs" }
                    ],
                    answer: "b",
                    explanation: "Aeration is designed primarily to remove dissolved gases (like CO₂, H₂S) and to add oxygen. It is not for removing sand, silt, or flocs, which are removed by sedimentation or filtration."
                },
                {
                    id: "cm24q099",
                    src: "WATE813-00242",
                    text: "The compound widely used to control algae is",
                    options: [
                        { key: "a", text: "sodium chloride" },
                        { key: "b", text: "sodium sulfate" },
                        { key: "c", text: "copper sulfate" },
                        { key: "d", text: "calcium chloride" }
                    ],
                    answer: "c",
                    explanation: "Copper sulphate is the standard algicide for reservoirs and open basins, dosed at a fraction of a milligram per litre. It is cheap and effective, but the dose must be controlled because copper is toxic to fish and because killing a heavy bloom all at once releases taste and odour compounds."
                },
                {
                    id: "cm24q100",
                    src: "WATE813-00243",
                    text: "Chlorine usage in the treatment of 30000 cubic meter of water per day is 15kg/day; the chlorine dose is",
                    options: [
                        { key: "a", text: "0.2 mg/L" },
                        { key: "b", text: "0.3 mg/L" },
                        { key: "c", text: "1 mg/L" },
                        { key: "d", text: "0.5 mg/L" }
                    ],
                    answer: "d",
                    explanation: "The chlorine dose is the chlorine mass divided by the water volume: \\[\\dfrac{15 \\times 10^6\\ \\text{mg}}{30{,}000 \\times 1000\\ \\text{L}} = 0.5\\ \\text{mg/L}\\]"
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-24"] = CIVIL_MODEL_24;
