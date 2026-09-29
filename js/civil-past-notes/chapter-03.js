(function () {
    "use strict";
    window.CIVIL_PAST_NOTE_TOPICS = window.CIVIL_PAST_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_PAST_NOTE_TOPICS, {
     "ACiE0301": {
      "code": "ACiE0301",
      "questionCount": 23,
      "format": 2,
      "summary": "<p>Fluid properties decide how a fluid stores pressure, resists motion and behaves at a free surface. This subchapter defines the mass properties (density, specific weight, specific volume and specific gravity), viscosity and the Newtonian model, compressibility through the bulk modulus, and the surface effects of surface tension and capillarity. It closes with vapour pressure and cavitation, which limit suction in pumps and turbines. Each section gives the governing relation, typical values for water and mercury, and the reasoning behind the past-paper facts.</p>",
      "blocks": [
       {
        "id": "newtonian-fluids-and-viscosity",
        "title": "Newtonian fluids, viscosity and its units",
        "html": "<p>Viscosity is a fluid's resistance to shear. In a <em>Newtonian fluid</em> such as water or air the shear stress is directly proportional to the velocity gradient, and the constant of proportionality is the dynamic viscosity \\(\\mu\\). Real, non-ideal fluids all have viscosity; some are Newtonian and some are not.</p><p>Dividing \\(\\mu\\) by density gives the <em>kinematic viscosity</em> \\(\\nu\\), measured in m<sup>2</sup>/s or stokes. In liquids viscosity comes from cohesion, which weakens on heating, so it falls as temperature rises; in gases it rises.</p><p>Fluids are classified on a rheogram of shear stress against rate of shear. An <em>ideal fluid</em> has no viscosity and is incompressible, a model used for flow away from walls. A Newtonian fluid plots as a straight line through the origin. <em>Pseudoplastics</em> such as paint and blood thin as they are sheared, <em>dilatants</em> such as starch slurry thicken, and a <em>Bingham plastic</em> such as toothpaste or sewage sludge needs a yield stress before it flows.</p><p>In SI units \\(\\mu\\) is in N·s/m<sup>2</sup> (Pa·s), and 1 poise = 0.1 Pa·s. Water at 20°C has \\(\\mu \\approx 1.0 \\times 10^{-3}\\) Pa·s, one centipoise, and \\(\\nu \\approx 1.0 \\times 10^{-6}\\) m<sup>2</sup>/s, one centistoke.</p>",
        "formulas": [
         {
          "label": "Newton's law of viscosity",
          "tex": "\\tau = \\mu \\dfrac{du}{dy}"
         },
         {
          "label": "Kinematic viscosity",
          "tex": "\\nu = \\dfrac{\\mu}{\\rho}, \\qquad [\\nu] = L^2 T^{-1}"
         },
         {
          "label": "Viscosity unit relations",
          "tex": "\\begin{aligned} 1\\ \\text{poise} &= 0.1\\ \\text{N·s/m}^2 \\\\ 1\\ \\text{stoke} &= 10^{-4}\\ \\text{m}^2/\\text{s} \\end{aligned}"
         }
        ],
        "example": {
         "title": "Worked example: shear stress from a velocity profile",
         "html": "<p>For \\(u = 2y - y^2\\), the gradient is \\(du/dy = 2 - 2y\\). With 8.5 poise, that is \\(\\mu = 0.85\\ \\text{Pa·s}\\):</p>\\[\\begin{aligned} \\dfrac{du}{dy}\\Big|_{0.15} &amp;= 2 - 0.3 = 1.7\\ \\text{s}^{-1} \\\\ \\tau &amp;= 0.85 \\times 1.7 = 1.445\\ \\text{N/m}^2 \\end{aligned}\\]"
        },
        "moreHtml": "<p>Temperature acts in opposite directions because the source of viscosity differs. In a liquid it is cohesion between closely packed molecules, which heating loosens, so viscosity falls. In a gas it is the transfer of momentum by molecules moving between layers, which heating speeds up, so viscosity rises.</p><p>A real fluid sticks to a solid boundary, the <em>no-slip condition</em>, so a velocity gradient and a shear stress always exist next to a wall. Pipe friction, boundary layers and drag all come from it; the ideal-fluid model ignores it.</p><p>Many non-Newtonian fluids fit the power law \\(\\tau = K(du/dy)^n\\): \\(n \\lt 1\\) is pseudoplastic, \\(n = 1\\) Newtonian and \\(n \\gt 1\\) dilatant. A Bingham plastic follows \\(\\tau = \\tau_y + \\mu\\,du/dy\\) once the yield stress \\(\\tau_y\\) is exceeded.</p>",
        "points": [
         {
          "html": "A Newtonian fluid follows the rule that shear stress is directly proportional to velocity gradient.",
          "sources": [
           {
            "id": "PAST-04-033",
            "label": "Set 4 · Q33"
           }
          ]
         },
         {
          "html": "Non-ideal flow covers both cases: real fluids that follow Newton's law of viscosity and those that do not.",
          "sources": [
           {
            "id": "PAST-14-035",
            "label": "Set 14 · Q35"
           }
          ]
         },
         {
          "html": "The viscosity of a liquid decreases as its temperature increases.",
          "sources": [
           {
            "id": "PAST-06-055",
            "label": "Set 6 · Q55"
           }
          ]
         },
         {
          "html": "For \\(u = 2y - y^2\\) and \\(\\mu\\) = 8.5 poise, the shear stress 0.15 m above the plate is 1.445 N/m<sup>2</sup>.",
          "sources": [
           {
            "id": "PAST-17-072",
            "label": "Set 17 · Q72"
           }
          ]
         },
         {
          "html": "Kinematic viscosity has the dimensions \\(L^2T^{-1}\\).",
          "sources": [
           {
            "id": "PAST-11-025",
            "label": "Set 11 · Q25"
           }
          ]
         },
         {
          "html": "Kinematic viscosity is measured in both m<sup>2</sup>/s and stokes; N·s/m<sup>2</sup> is the unit of dynamic viscosity.",
          "sources": [
           {
            "id": "PAST-17-048",
            "label": "Set 17 · Q48"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-033",
          "label": "Set 4 · Q33"
         },
         {
          "id": "PAST-14-035",
          "label": "Set 14 · Q35"
         },
         {
          "id": "PAST-06-055",
          "label": "Set 6 · Q55"
         },
         {
          "id": "PAST-17-072",
          "label": "Set 17 · Q72"
         },
         {
          "id": "PAST-11-025",
          "label": "Set 11 · Q25"
         },
         {
          "id": "PAST-17-048",
          "label": "Set 17 · Q48"
         }
        ]
       },
       {
        "id": "density-weight-and-dimensions",
        "title": "Density of water, weight and the fundamental dimensions",
        "html": "<p>Water is densest, about 1000 kg/m<sup>3</sup>, at about 4°C; below that it expands again, which is why ice floats. Weight is mass times gravitational acceleration, so the same body weighs about one sixth as much on the moon.</p><p>Four mass properties describe a fluid. <em>Mass density</em> \\(\\rho\\) is mass per unit volume (water 1000 kg/m<sup>3</sup>, mercury 13 600 kg/m<sup>3</sup>, air about 1.2 kg/m<sup>3</sup>). <em>Specific weight</em> \\(\\gamma = \\rho g\\) is weight per unit volume, 9.81 kN/m<sup>3</sup> for water. <em>Specific volume</em> is the volume per unit mass, the reciprocal of density. <em>Specific gravity</em> is the ratio of a fluid's density to that of water at 4°C, so it has no unit; mercury has 13.6.</p><p>The fundamental quantities of mechanics are tied together by Newton's second law, \\(F = ma\\). Force therefore has dimensions \\(MLT^{-2}\\), and either the MLT or the FLT system can be used.</p>",
        "formulas": [
         {
          "label": "Mass properties",
          "tex": "\\gamma = \\rho g, \\qquad v = \\dfrac{1}{\\rho}, \\qquad S = \\dfrac{\\rho}{\\rho_w}"
         }
        ],
        "example": {
         "title": "Worked example: properties of an oil",
         "html": "<p>An oil has specific gravity 0.85.</p>\\[\\begin{aligned} \\rho &amp;= 0.85 \\times 1000 = 850\\ \\text{kg/m}^3 \\\\ \\gamma &amp;= 850 \\times 9.81 = 8.34\\ \\text{kN/m}^3 \\\\ v &amp;= 1/850 = 1.18 \\times 10^{-3}\\ \\text{m}^3/\\text{kg} \\end{aligned}\\]"
        },
        "moreHtml": "<p>Dimensions of the common fluid quantities follow from their definitions: pressure and stress \\(ML^{-1}T^{-2}\\), dynamic viscosity \\(ML^{-1}T^{-1}\\), kinematic viscosity \\(L^2T^{-1}\\), surface tension \\(MT^{-2}\\), specific weight \\(ML^{-2}T^{-2}\\) and power \\(ML^2T^{-3}\\).</p><p>In the FLT system mass becomes \\(FL^{-1}T^2\\), so density is \\(FL^{-4}T^2\\). A dimensionally consistent equation must balance in either system, which is a quick check on any formula.</p><p>Mass is the same everywhere; weight and specific weight change with \\(g\\). Density and specific gravity of a liquid therefore do not change on the moon, while its specific weight falls to about one sixth.</p>",
        "points": [
         {
          "html": "Water reaches its maximum density at the 4-degree Celsius mark.",
          "sources": [
           {
            "id": "PAST-10-011",
            "label": "Set 10 · Q11"
           }
          ]
         },
         {
          "html": "Newton's second law relates the fundamental dimensional quantities, giving force as \\(MLT^{-2}\\).",
          "sources": [
           {
            "id": "PAST-14-056",
            "label": "Set 14 · Q56"
           }
          ]
         },
         {
          "html": "A weight of W kg on earth becomes W/6 kg on the moon, where gravity is one sixth as strong.",
          "sources": [
           {
            "id": "PAST-16-002",
            "label": "Set 16 · Q2"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-10-011",
          "label": "Set 10 · Q11"
         },
         {
          "id": "PAST-14-056",
          "label": "Set 14 · Q56"
         },
         {
          "id": "PAST-16-002",
          "label": "Set 16 · Q2"
         }
        ]
       },
       {
        "id": "compressibility-and-bulk-modulus",
        "title": "Compressibility and bulk modulus",
        "html": "<p>The <em>bulk modulus</em> \\(K\\) is the pressure rise needed per unit fractional drop in volume. A large K means a stiff, nearly incompressible fluid; compressibility is its reciprocal.</p><p>Liquids are nearly incompressible, water having a bulk modulus of about 2.1 GPa, while gases compress easily. The bulk modulus of a liquid increases with pressure, because the compressed liquid is harder to squeeze further, and it varies with temperature.</p><p>For water, a 1% reduction in volume needs about 21 MPa, the pressure under roughly 2 km of water, so water is treated as incompressible in almost all hydraulics. The exception is sudden valve closure, where its small compressibility sets the speed of the pressure wave in water hammer.</p><p>For a gas the bulk modulus depends on the process: compressed isothermally, \\(K = p\\); compressed adiabatically, \\(K = kp\\), where \\(k\\) is the ratio of specific heats, 1.4 for air.</p>",
        "formulas": [
         {
          "label": "Bulk modulus",
          "tex": "K = -\\dfrac{dp}{dV/V}"
         },
         {
          "label": "Compressibility and wave speed",
          "tex": "\\beta = \\dfrac{1}{K}, \\qquad c = \\sqrt{\\dfrac{K}{\\rho}}"
         },
         {
          "label": "Bulk modulus of a gas",
          "tex": "K_{\\text{isothermal}} = p, \\qquad K_{\\text{adiabatic}} = kp"
         }
        ],
        "example": {
         "title": "Worked example: bulk modulus",
         "html": "<p>A pressure rise of \\(5 \\times 10^4\\ \\text{N/m}^2\\) squeezes 4 cm<sup>3</sup> to 3.9 cm<sup>3</sup>:</p>\\[K = \\dfrac{5 \\times 10^4}{0.1/4} = 2 \\times 10^6\\ \\text{N/m}^2\\]"
        },
        "moreHtml": "<p>The minus sign in the definition makes \\(K\\) positive, because an increase in pressure produces a decrease in volume. Since mass is fixed, \\(-dV/V = d\\rho/\\rho\\), so the bulk modulus can also be written \\(K = \\rho\\,dp/d\\rho\\).</p><p>A small pressure disturbance travels through a fluid at \\(c = \\sqrt{K/\\rho}\\). For water this gives about 1450 m/s; for air at sea level about 340 m/s. The ratio of flow speed to this celerity, the Mach number, tells whether compressibility matters: gas flows below a Mach number of about 0.3 can be treated as incompressible.</p>",
        "points": [
         {
          "html": "Water at room temperature has the minimum compressibility; air, oxygen and nitrogen are gases.",
          "sources": [
           {
            "id": "PAST-07-017",
            "label": "Set 7 · Q17"
           }
          ]
         },
         {
          "html": "The bulk modulus of a liquid increases with pressure.",
          "sources": [
           {
            "id": "PAST-08-027",
            "label": "Set 8 · Q27"
           }
          ]
         },
         {
          "html": "A pressure change of \\(5 \\times 10^4\\) N/m<sup>2</sup> reducing 4 cm<sup>3</sup> to 3.9 cm<sup>3</sup> gives \\(K = 2.00 \\times 10^6\\) N/m<sup>2</sup>.",
          "sources": [
           {
            "id": "PAST-13-062",
            "label": "Set 13 · Q62"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-07-017",
          "label": "Set 7 · Q17"
         },
         {
          "id": "PAST-08-027",
          "label": "Set 8 · Q27"
         },
         {
          "id": "PAST-13-062",
          "label": "Set 13 · Q62"
         }
        ]
       },
       {
        "id": "surface-tension-drops-and-bubbles",
        "title": "Surface tension, drops and soap bubbles",
        "html": "<p>Surface tension is the pull along a liquid surface caused by unbalanced cohesion at the interface. It draws a free drop into the shape with the least surface for its volume, a sphere, which is why raindrops are round.</p><p>A curved surface holds a pressure difference. A liquid drop has one surface, a soap bubble two, so the excess pressure in a bubble is twice that in a drop of the same radius. Both vary inversely with size, so a smaller bubble has the higher inside pressure.</p><p>Surface tension is a force per unit length of the surface, in N/m, or equally the energy needed to create a unit area of new surface. Water against air has about 0.073 N/m at 20°C and mercury about 0.48 N/m. It falls as temperature rises and is lowered sharply by soaps and detergents.</p><p>The drop result comes from a force balance on half the drop: the pressure excess acting on the cut area, \\(\\Delta p\\,\\pi R^2\\), is held by surface tension around the rim, \\(T \\cdot 2\\pi R\\).</p>",
        "formulas": [
         {
          "label": "Excess pressure, liquid drop",
          "tex": "\\Delta p = \\dfrac{2T}{R} = \\dfrac{4T}{d}"
         },
         {
          "label": "Excess pressure, soap bubble",
          "tex": "\\Delta p = \\dfrac{4T}{R} = \\dfrac{8T}{d}"
         },
         {
          "label": "Excess pressure, liquid jet",
          "tex": "\\Delta p = \\dfrac{T}{R}"
         }
        ],
        "example": {
         "title": "Worked example: pressure in a soap bubble",
         "html": "<p>A soap bubble 40 mm in diameter with \\(T = 0.04\\) N/m has two surfaces:</p>\\[\\Delta p = \\dfrac{8T}{d} = \\dfrac{8 \\times 0.04}{0.04} = 8\\ \\text{N/m}^2\\]<p>A liquid drop of the same size and surface tension would hold only 4 N/m<sup>2</sup>.</p>"
        },
        "moreHtml": "<p>A cylindrical liquid jet has one curvature, so its excess pressure is only \\(T/R\\). A bubble in a liquid, unlike a soap bubble in air, has a single surface and behaves like a drop.</p><p>Because the excess pressure grows as the radius shrinks, two soap bubbles joined by a tube do not share air evenly: the smaller one, at the higher pressure, empties into the larger one.</p><p>Surface tension matters in hydraulics only where the geometry is small: capillary tubes and piezometers, droplet and spray formation, soil pores and model studies at small scale. In large flows its forces are negligible beside pressure and gravity.</p>",
        "points": [
         {
          "html": "Surface tension is the property of water that makes a drop of it spherical.",
          "sources": [
           {
            "id": "PAST-13-025",
            "label": "Set 13 · Q25"
           }
          ]
         },
         {
          "html": "A raindrop keeps its spherical shape after falling because of surface tension.",
          "sources": [
           {
            "id": "PAST-13-039",
            "label": "Set 13 · Q39"
           }
          ]
         },
         {
          "html": "The pressure inside a soap bubble of radius R exceeds the outside by 4T/R.",
          "sources": [
           {
            "id": "PAST-05-011",
            "label": "Set 5 · Q11"
           }
          ]
         },
         {
          "html": "Of two soap bubbles, the one with diameter d has more internal pressure than the one with diameter 2d.",
          "sources": [
           {
            "id": "PAST-04-078",
            "label": "Set 4 · Q78"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-13-025",
          "label": "Set 13 · Q25"
         },
         {
          "id": "PAST-13-039",
          "label": "Set 13 · Q39"
         },
         {
          "id": "PAST-05-011",
          "label": "Set 5 · Q11"
         },
         {
          "id": "PAST-04-078",
          "label": "Set 4 · Q78"
         }
        ]
       },
       {
        "id": "capillarity-and-contact-angle",
        "title": "Capillary rise and depression, and the angle of contact",
        "html": "<p>A liquid rises or falls in a narrow tube because of surface tension together with adhesion to the tube wall. The height depends inversely on the inner radius of the tube, not on its length or outer radius, so halving a rise or depression needs twice the diameter.</p><p>The contact angle decides the direction. An acute angle, as for water on glass, means the liquid wets the surface and rises; an obtuse angle, as for mercury, means it does not wet and is depressed. Surface tension falls on heating, so capillary rise decreases with temperature.</p><p>The height follows from equilibrium of the lifted column: the vertical pull of surface tension around the wetted perimeter, \\(\\pi d\\,\\sigma\\cos\\theta\\), equals the weight of the column, \\(\\rho g (\\pi d^2/4) h\\). For clean water in glass, \\(\\theta \\approx 0\\) and the rise is about \\(30/d\\) mm with \\(d\\) in mm; for mercury, \\(\\theta \\approx 130°\\) to \\(140°\\) and the depression is roughly \\(10/d\\) mm.</p><p>Capillarity causes reading errors in small tubes, so piezometer and manometer tubes are kept at least about 6 mm in diameter, and preferably 10 to 12 mm.</p>",
        "formulas": [
         {
          "label": "Capillary rise or depression",
          "tex": "h = \\dfrac{4\\sigma\\cos\\theta}{\\rho g d}"
         },
         {
          "label": "Rise between parallel plates",
          "tex": "h = \\dfrac{2\\sigma\\cos\\theta}{\\rho g t}"
         }
        ],
        "example": {
         "title": "Worked examples: capillary height and diameter",
         "html": "<p>Since \\(hd\\) is constant, a 1.2 mm tube depressed 8 mm in mercury gives 4 mm with \\(d = 1.2 \\times 8/4 = 2.4\\) mm.</p><p>If the rise in P is 2/3 of that in Q, then \\(d_P/d_Q = h_Q/h_P = 3/2\\).</p>"
        },
        "moreHtml": "<p>Whether a liquid wets a solid depends on the balance of two attractions: adhesion between liquid and wall against cohesion within the liquid. When adhesion wins, the meniscus is concave upward and the liquid climbs; when cohesion wins, as with mercury, the meniscus is convex and the liquid is pulled down.</p><p>The same effect appears between two parallel plates a gap \\(t\\) apart, where the rise is half that in a tube of diameter \\(t\\). In soils the fine pores act as capillary tubes, so clays can lift water several metres above the water table while gravels lift it only a few centimetres.</p>",
        "points": [
         {
          "html": "Surface tension, with adhesion to the wall, is what lifts a liquid up a capillary tube.",
          "sources": [
           {
            "id": "PAST-15-017",
            "label": "Set 15 · Q17"
           }
          ]
         },
         {
          "html": "Capillary rise depends on the inner radius of the tube, varying inversely with it.",
          "sources": [
           {
            "id": "PAST-09-042",
            "label": "Set 9 · Q42"
           }
          ]
         },
         {
          "html": "A 1.2 mm tube depressed 8 mm in mercury must widen to 2.4 mm for a 4 mm depression.",
          "sources": [
           {
            "id": "PAST-05-065",
            "label": "Set 5 · Q65"
           }
          ]
         },
         {
          "html": "When the rise in P is two thirds of that in Q, their diameters are in the ratio 3:2.",
          "sources": [
           {
            "id": "PAST-07-064",
            "label": "Set 7 · Q64"
           }
          ]
         },
         {
          "html": "With a rise in temperature the capillary rise or fall of a liquid will decrease.",
          "sources": [
           {
            "id": "PAST-15-018",
            "label": "Set 15 · Q18"
           }
          ]
         },
         {
          "html": "A liquid does not wet a solid when the angle of contact is obtuse.",
          "sources": [
           {
            "id": "PAST-18-022",
            "label": "Set 18 · Q22"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-15-017",
          "label": "Set 15 · Q17"
         },
         {
          "id": "PAST-09-042",
          "label": "Set 9 · Q42"
         },
         {
          "id": "PAST-05-065",
          "label": "Set 5 · Q65"
         },
         {
          "id": "PAST-07-064",
          "label": "Set 7 · Q64"
         },
         {
          "id": "PAST-15-018",
          "label": "Set 15 · Q18"
         },
         {
          "id": "PAST-18-022",
          "label": "Set 18 · Q22"
         }
        ]
       },
       {
        "id": "vapour-pressure-and-cavitation",
        "title": "Vapour pressure, cavitation and matching properties to effects",
        "html": "<p>Every liquid has a <em>vapour pressure</em>, the pressure at which it boils at the given temperature. Where the local absolute pressure in a flow falls to it, as at a pump eye or on a turbine blade, vapour cavities form and then collapse violently: <em>cavitation</em>, which pits metal surfaces.</p><p>Each property links to an effect: capillarity comes from surface tension, viscosity resists shear forces, and specific gravity compares a density with that of water.</p><p>Vapour pressure rises steeply with temperature: for water it is about 2.3 kPa at 20°C, 12 kPa at 50°C and 101.3 kPa at 100°C, which is why water boils at 100°C only under standard atmospheric pressure and at a lower temperature on a mountain.</p><p>Cavitation appears wherever velocity is high and pressure low: the suction side of pumps, runner exits and draft tubes of reaction turbines, valves and sudden contractions, and spillway surfaces where flow separates. The collapsing bubbles cause pitting, noise, vibration and a fall in efficiency.</p>",
        "formulas": [
         {
          "label": "Thoma cavitation number",
          "tex": "\\sigma = \\dfrac{H_a - H_v - H_s}{H}"
         },
         {
          "label": "Net positive suction head available",
          "tex": "\\text{NPSH}_a = H_a - H_v - H_s - h_{f}"
         }
        ],
        "moreHtml": "<p>The remedy is to keep the absolute pressure everywhere above the vapour pressure. Pumps are given a limited suction lift and enough net positive suction head; reaction turbines are set low, with limited draft-tube height; flow passages are made smooth, and worn areas are built up with cavitation-resistant stainless steel.</p><p>For turbines the margin is measured by Thoma's cavitation number \\(\\sigma\\), built from the atmospheric head \\(H_a\\), vapour head \\(H_v\\), suction height \\(H_s\\) and net head \\(H\\). Cavitation is avoided while \\(\\sigma\\) stays above the critical value for the runner type, which rises with specific speed.</p><table><thead><tr><th scope='col'>Property</th><th scope='col'>Typical effect</th></tr></thead><tbody><tr><td>Viscosity</td><td>Shear stress, pipe friction, drag</td></tr><tr><td>Surface tension</td><td>Capillarity, drops and bubbles</td></tr><tr><td>Compressibility</td><td>Water hammer, speed of sound</td></tr><tr><td>Vapour pressure</td><td>Boiling and cavitation</td></tr><tr><td>Specific gravity</td><td>Buoyancy and manometer readings</td></tr></tbody></table>",
        "points": [
         {
          "html": "The match is A-d, B-a, C-c, D-b: capillarity with surface tension, vapour pressure with cavitation, viscosity with shear forces, specific gravity with the density of water.",
          "sources": [
           {
            "id": "PAST-09-064",
            "label": "Set 9 · Q64"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-09-064",
          "label": "Set 9 · Q64"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Newton's law of viscosity",
        "tex": "\\tau = \\mu \\dfrac{du}{dy}"
       },
       {
        "label": "Kinematic viscosity",
        "tex": "\\nu = \\dfrac{\\mu}{\\rho}"
       },
       {
        "label": "Bulk modulus",
        "tex": "K = -\\dfrac{dp}{dV/V}"
       },
       {
        "label": "Liquid drop",
        "tex": "\\Delta p = \\dfrac{2T}{R}"
       },
       {
        "label": "Soap bubble",
        "tex": "\\Delta p = \\dfrac{4T}{R}"
       },
       {
        "label": "Capillary height",
        "tex": "h = \\dfrac{4\\sigma\\cos\\theta}{\\rho g d}"
       },
       {
        "label": "Specific weight and specific gravity",
        "tex": "\\gamma = \\rho g, \\qquad S = \\dfrac{\\rho}{\\rho_w}"
       },
       {
        "label": "Speed of a pressure wave",
        "tex": "c = \\sqrt{K/\\rho}"
       },
       {
        "label": "Thoma cavitation number",
        "tex": "\\sigma = \\dfrac{H_a - H_v - H_s}{H}"
       }
      ],
      "cautions": [
       {
        "id": "bulk-modulus-option-print",
        "status": "corrected",
        "prompt": "The paper prints the intended bulk-modulus option with the wrong power of ten",
        "html": "<p>The working gives</p>\\[K = \\dfrac{5 \\times 10^4}{0.1/4} = 2 \\times 10^6\\ \\text{N/m}^2\\]<p>The option printed as \\(2.00 \\times 10^5\\) is read here as \\(2.00 \\times 10^6\\), the value the key's own working reaches.</p>",
        "sources": [
         {
          "id": "PAST-13-062",
          "label": "Set 13 · Q62"
         }
        ]
       },
       {
        "id": "kinematic-viscosity-unit-print",
        "status": "corrected",
        "prompt": "The paper prints one unit of kinematic viscosity as m/s squared",
        "html": "<p>That is a misprint for m<sup>2</sup>/s. Kinematic viscosity \\(\\nu = \\mu/\\rho\\) is measured in m<sup>2</sup>/s or in stokes (cm<sup>2</sup>/s); N·s/m<sup>2</sup> belongs to dynamic viscosity.</p>",
        "sources": [
         {
          "id": "PAST-17-048",
          "label": "Set 17 · Q48"
         }
        ]
       }
      ],
      "gaps": [
       "Non-Newtonian models, vapour-pressure values and the speed of sound are explained for understanding; the past papers test them only qualitatively."
      ]
     },
     "ACiE0302": {
      "code": "ACiE0302",
      "questionCount": 20,
      "format": 2,
      "summary": "<p>Hydrostatics studies fluids at rest, where only pressure acts. This subchapter derives the hydrostatic law and piezometric head, applies Pascal's law to the hydraulic press, and separates absolute, gauge and vacuum pressure together with the manometers and mechanical gauges that measure them. It then finds the total force and centre of pressure on plane and curved surfaces, including pressure diagrams, and closes with buoyancy, the metacentre and the stability of floating and submerged bodies.</p>",
      "blocks": [
       {
        "id": "pressure-head-and-pascals-law",
        "title": "Pressure with depth, piezometric head and Pascal's law",
        "html": "<p>In a liquid at rest the pressure rises linearly with depth, \\(p = \\gamma h\\), and acts equally in all directions. The pressure head gained going down exactly matches the elevation head lost, so the <em>piezometric head</em> \\(p/\\gamma + z\\) is the same at every point of a static liquid.</p><p>A pressure can be expressed as a head of any liquid by dividing by its specific weight. By <em>Pascal's law</em> a pressure applied to an enclosed fluid is transmitted undiminished, so a hydraulic press multiplies force in the ratio of the ram and plunger areas.</p><p>The hydrostatic law comes from the equilibrium of a small vertical prism: the only forces on it are the pressures on its ends and its own weight, so \\(dp/dz = -\\gamma\\) with \\(z\\) measured upward. The pressure at a depth therefore does not depend on the shape or size of the container, the <em>hydrostatic paradox</em>: vessels of different shapes filled to the same depth have the same pressure on equal bases.</p><p>Pressure at a point is the same in every direction because a fluid at rest cannot sustain shear. Jacks, presses, lifts and brakes all rely on Pascal's law.</p>",
        "formulas": [
         {
          "label": "Hydrostatic pressure and piezometric head",
          "tex": "p = \\gamma h, \\qquad \\dfrac{p}{\\gamma} + z = \\text{constant}"
         },
         {
          "label": "Hydraulic press",
          "tex": "\\dfrac{F}{a} = \\dfrac{W}{A}"
         },
         {
          "label": "Hydrostatic law",
          "tex": "\\dfrac{dp}{dz} = -\\rho g = -\\gamma"
         },
         {
          "label": "Pressure head in another liquid",
          "tex": "h_2 = h_1 \\dfrac{S_1}{S_2}"
         }
        ],
        "example": {
         "title": "Worked examples: head of oil and a hydraulic press",
         "html": "<p>4.9 N/cm<sup>2</sup> is 49 000 N/m<sup>2</sup>; in oil of specific gravity 0.85, \\(h = p/(\\rho g)\\) with \\(\\rho = 850\\) kg/m<sup>3</sup>, which is about 5.88 m.</p><p>A 35 kN load on a 30 cm ram, with a 2 cm plunger:</p>\\[F = 35\\,000 \\times \\left(\\dfrac{2}{30}\\right)^2 \\approx 155.5\\ \\text{N}\\]"
        },
        "moreHtml": "<p>Heads convert between liquids through their specific gravities: a head \\(h_1\\) of a liquid with specific gravity \\(S_1\\) equals \\(h_1 S_1/S_2\\) of another. Standard atmospheric pressure, 101.3 kPa, is 10.33 m of water or 760 mm of mercury.</p><p>In a hydraulic press the force gain \\(W/F = A/a\\) is paid for in distance: the ram rises only \\(a/A\\) of the plunger stroke, so work is conserved. A lever on the plunger multiplies the force again by its leverage ratio.</p><p>In a gas, or a liquid whose density varies, \\(dp/dz = -\\rho g\\) must be integrated with \\(\\rho\\) changing; near the ground the atmosphere loses about 12 Pa of pressure per metre of height.</p>",
        "points": [
         {
          "html": "For a static fluid the piezometric head remains constant at all points in the liquid.",
          "sources": [
           {
            "id": "PAST-04-073",
            "label": "Set 4 · Q73"
           }
          ]
         },
         {
          "html": "The water pressure 1 m below the water table is \\(9.81 \\times 1\\) = 9.81 kN/m<sup>2</sup>.",
          "sources": [
           {
            "id": "PAST-14-070",
            "label": "Set 14 · Q70"
           }
          ]
         },
         {
          "html": "A pressure of 4.9 N/cm<sup>2</sup> corresponds to about 5.83 m of oil of specific gravity 0.85, the nearest option.",
          "sources": [
           {
            "id": "PAST-13-066",
            "label": "Set 13 · Q66"
           }
          ]
         },
         {
          "html": "A press with a 30 cm ram and 2 cm plunger needs about 155.5 N at the plunger to lift 35 kN.",
          "sources": [
           {
            "id": "PAST-13-065",
            "label": "Set 13 · Q65"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-073",
          "label": "Set 4 · Q73"
         },
         {
          "id": "PAST-14-070",
          "label": "Set 14 · Q70"
         },
         {
          "id": "PAST-13-066",
          "label": "Set 13 · Q66"
         },
         {
          "id": "PAST-13-065",
          "label": "Set 13 · Q65"
         }
        ]
       },
       {
        "id": "absolute-gauge-pressure-and-gauges",
        "title": "Absolute, gauge and suction pressure, and how they are measured",
        "html": "<p>Pressure is measured from two datums. <em>Absolute pressure</em> is counted from a perfect vacuum; <em>gauge pressure</em> is counted from the local atmosphere. A suction or vacuum pressure is a gauge pressure below atmospheric, so it is subtracted. A barometer reading in mm of mercury converts to kPa through \\(p = \\rho g h\\) with mercury at 13 600 kg/m<sup>3</sup>; 760 mm is about 101.4 kPa.</p><p>A Bourdon gauge deflects with the difference between the fluid and the surrounding air, so it reads gauge pressure. A U-tube manometer balances the pressure against a column of heavy liquid, reading high and vacuum pressures that a piezometer cannot.</p><p>Manometers balance a pressure against liquid columns: the piezometer, a plain vertical tube for small positive pressures in liquids; the U-tube with mercury; the inclined manometer for small differences; the <em>differential</em> manometer joining two points; and the inverted U-tube with a light liquid for small differences in a liquid. Mechanical gauges, the Bourdon tube, diaphragm and bellows, deflect under pressure and are read on a dial.</p><p>A manometer is solved by stepping from one end to the other: add \\(\\gamma h\\) going down a column, subtract it going up, and equate pressures at one level in a continuous liquid.</p>",
        "formulas": [
         {
          "label": "Absolute pressure",
          "tex": "p_{\\text{abs}} = p_{\\text{atm}} + p_{\\text{gauge}}"
         },
         {
          "label": "Vacuum (suction) pressure",
          "tex": "p_{\\text{vac}} = p_{\\text{atm}} - p_{\\text{abs}}"
         },
         {
          "label": "U-tube manometer, head at the pipe centre",
          "tex": "h_A = S_m\\,x - S\\,y"
         },
         {
          "label": "Differential manometer, pipes at one level",
          "tex": "p_A - p_B = (S_m - S)\\,\\gamma_w\\,x"
         }
        ],
        "example": {
         "title": "Worked example: suction under a 740 mm barometer",
         "html": "<p>The atmosphere, in kPa:</p>\\[p_{\\text{atm}} = 0.740 \\times 13\\,600 \\times 9.81 \\approx 98.7\\]<p>So 10 kPa suction leaves \\(98.7 - 10 \\approx 88.7\\) kPa absolute.</p>"
        },
        "moreHtml": "<p>For a U-tube holding mercury of specific gravity \\(S_m\\) on a pipe carrying a liquid of specific gravity \\(S\\), with the pipe centre a height \\(y\\) above the lower mercury surface and a deflection \\(x\\), the pressure head at the pipe centre in metres of water is \\(S_m x - S y\\).</p><p>A differential manometer between two pipes at one level gives \\(p_A - p_B = (S_m - S)\\gamma_w x\\). With water over mercury the factor is 12.6, so every 10 mm of mercury deflection is about 1.24 kPa.</p><p>Tilting the reading limb at an angle \\(\\theta\\) to the horizontal stretches the reading by \\(1/\\sin\\theta\\), which improves sensitivity. A barometer is a mercury column sealed at the top, so it reads absolute atmospheric pressure.</p>",
        "points": [
         {
          "html": "The correct relation is \\(P_{\\text{abs}} = P_{\\text{atm}} + P_{\\text{gauge}}\\), with gauge readings signed.",
          "sources": [
           {
            "id": "PAST-10-025",
            "label": "Set 10 · Q25"
           }
          ]
         },
         {
          "html": "A suction of 100 kPa under a 760 mm mercury atmosphere leaves an absolute pressure of about 1.4 kPa.",
          "sources": [
           {
            "id": "PAST-11-065",
            "label": "Set 11 · Q65"
           }
          ]
         },
         {
          "html": "With the barometer at 740 mm of mercury, 10 kPa of suction equals 88.72 kPa absolute.",
          "sources": [
           {
            "id": "PAST-12-007",
            "label": "Set 12 · Q7"
           },
           {
            "id": "PAST-18-044",
            "label": "Set 18 · Q44"
           }
          ]
         },
         {
          "html": "A Bourdon gauge measures gauge pressure, relative to the surrounding atmosphere.",
          "sources": [
           {
            "id": "PAST-15-023",
            "label": "Set 15 · Q23"
           },
           {
            "id": "PAST-17-049",
            "label": "Set 17 · Q49"
           }
          ]
         },
         {
          "html": "A simple U-tube manometer measures the gauge pressure at a point, including high and negative (vacuum) pressures.",
          "sources": [
           {
            "id": "PAST-R2083-001",
            "label": "2083 recall · Q1"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-10-025",
          "label": "Set 10 · Q25"
         },
         {
          "id": "PAST-11-065",
          "label": "Set 11 · Q65"
         },
         {
          "id": "PAST-12-007",
          "label": "Set 12 · Q7"
         },
         {
          "id": "PAST-18-044",
          "label": "Set 18 · Q44"
         },
         {
          "id": "PAST-15-023",
          "label": "Set 15 · Q23"
         },
         {
          "id": "PAST-17-049",
          "label": "Set 17 · Q49"
         },
         {
          "id": "PAST-R2083-001",
          "label": "2083 recall · Q1"
         }
        ]
       },
       {
        "id": "hydrostatic-forces-and-centre-of-pressure",
        "title": "Hydrostatic force, centre of pressure and curved surfaces",
        "html": "<p>The total force on a submerged plane equals the pressure at its centroid times its area. It acts at the <em>centre of pressure</em>, which is deeper than the centroid because pressure grows with depth; for a vertical rectangle with its top edge at the free surface it lies at two thirds of the depth.</p><p>On a curved surface, the force in any direction equals the pressure times the area projected on a plane normal to that direction. The axial force of a pressure on a hemispherical end is therefore the pressure times the circle it projects onto.</p><p>For a plane inclined at \\(\\theta\\) to the free surface the force is still \\(\\gamma A\\bar{h}\\), and the centre of pressure moves closer to the centroid as the plane is set deeper; on a horizontal plane the two coincide.</p><p>A <em>pressure diagram</em> gives the same results graphically. On a vertical wall holding water of depth \\(H\\) the pressure grows from zero to \\(\\gamma H\\), so the force per metre width is the triangle's area, \\(\\gamma H^2/2\\), through its centroid at \\(H/3\\) above the base.</p><p>On a curved surface the vertical component equals the weight of liquid, real or imagined, standing above it up to the free surface.</p>",
        "formulas": [
         {
          "label": "Total force and centre of pressure",
          "tex": "F = \\gamma A \\bar{h}, \\qquad h_p = \\bar{h} + \\dfrac{I_G}{A\\bar{h}}"
         },
         {
          "label": "Centre of pressure on an inclined plane",
          "tex": "h_p = \\bar{h} + \\dfrac{I_G \\sin^2\\theta}{A\\bar{h}}"
         },
         {
          "label": "Thrust on a vertical wall per metre and its height",
          "tex": "P = \\dfrac{\\gamma H^2}{2}, \\qquad \\bar{y} = \\dfrac{H}{3}"
         },
         {
          "label": "Components on a curved surface",
          "tex": "F_H = \\gamma A_v \\bar{h}_v, \\qquad F_V = \\gamma V_{\\text{above}}"
         }
        ],
        "example": {
         "title": "Worked example: vertical rectangle at the surface",
         "html": "<p>A rectangle 2.5 m wide and 3 m deep has \\(\\bar{h} = 1.5\\) m and \\(I_G = 2.5 \\times 3^3/12 = 5.625\\ \\text{m}^4\\):</p>\\[h_p = 1.5 + \\dfrac{5.625}{7.5 \\times 1.5} = 2\\ \\text{m}\\]"
        },
        "moreHtml": "<p>Because the centre of pressure lies below the centroid, gate hinges are placed with it in mind: a gate hinged exactly at its centre of pressure needs no moment to hold it, while one hinged above that point tends to swing open as the water rises.</p><p>For a dam holding water to its crest at \\(H = 10\\) m, the horizontal thrust per metre is \\(9.81 \\times 10^2/2 \\approx 490\\) kN, acting 3.33 m above the base. A full stability check adds the uplift under the base and the weight of water on a sloping upstream face.</p><p>The horizontal component on a curved gate acts at the centre of pressure of its vertical projection, and the vertical component through the centroid of the liquid volume above it; their resultant passes through the centre of a circular gate.</p>",
        "points": [
         {
          "html": "A 2.5 m × 3 m rectangle held vertically with its top at the water surface has its centre of pressure 2 m deep.",
          "sources": [
           {
            "id": "PAST-05-067",
            "label": "Set 5 · Q67"
           }
          ]
         },
         {
          "html": "A gas at pressure \\(P_0\\) pushes a hemispherical end of radius R axially with \\(\\pi P_0 R^2\\), pressure times the projected circle.",
          "sources": [
           {
            "id": "PAST-08-071",
            "label": "Set 8 · Q71"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-067",
          "label": "Set 5 · Q67"
         },
         {
          "id": "PAST-08-071",
          "label": "Set 8 · Q71"
         }
        ]
       },
       {
        "id": "buoyancy-and-weight",
        "title": "Buoyancy, apparent weight and weight under a different gravity",
        "html": "<p>A body in a fluid feels an upward thrust equal to the weight of fluid it displaces, <em>Archimedes' principle</em>. This buoyant force acts vertically upward through the centre of buoyancy, the centroid of the displaced volume, opposite to the body's weight.</p><p>The weight lost when a body is weighed in water equals the weight of an equal volume of water, which gives its specific gravity. Weight itself is mass times local gravity, so on the moon, with about one sixth of Earth's gravity, it falls to one sixth.</p><p>A floating body sinks until it displaces its own weight, so the fraction of its volume below the surface equals the ratio of its density to the fluid's: ice of specific gravity 0.92 floats with about 92% submerged in fresh water. A fully submerged body sinks, rises or hovers as its weight exceeds, falls short of or equals the buoyant force, which does not change with depth in an incompressible liquid.</p><p>The apparent weight of a submerged body is its true weight minus the buoyant force.</p>",
        "formulas": [
         {
          "label": "Buoyancy and specific gravity from weighing",
          "tex": "F_B = \\gamma V, \\qquad G = \\dfrac{W_{\\text{air}}}{W_{\\text{air}} - W_{\\text{water}}}"
         },
         {
          "label": "Fraction of a floating body submerged",
          "tex": "\\dfrac{V_{\\text{sub}}}{V} = \\dfrac{\\rho_{\\text{body}}}{\\rho_{\\text{fluid}}}"
         }
        ],
        "example": {
         "title": "Worked example: specific gravity by weighing",
         "html": "<p>60 N in air and 40 N in water: the loss of 20 N is the buoyancy, so \\(G = 60/20 = 3\\).</p>"
        },
        "moreHtml": "<p>Buoyancy follows from the hydrostatic law: the pressure on the underside of a submerged body exceeds that on its top, and summed over the whole surface the net vertical force equals the weight of the displaced fluid, while the horizontal forces cancel.</p><p>The centre of buoyancy is the centroid of the displaced volume, which generally differs from the body's centre of gravity; for a floating body only the underwater part counts.</p><p>Hydrometers use flotation: the stem sinks deeper in a lighter liquid, so the waterline reading gives specific gravity. A ship floats higher in dense sea water than in fresh river water, which is why load lines differ between the two.</p>",
        "points": [
         {
          "html": "Buoyancy is the force that acts opposite in direction to the weight of an object submerged in a fluid.",
          "sources": [
           {
            "id": "PAST-08-033",
            "label": "Set 8 · Q33"
           }
          ]
         },
         {
          "html": "The buoyant force acts in the vertically upward direction, through the centre of buoyancy.",
          "sources": [
           {
            "id": "PAST-16-008",
            "label": "Set 16 · Q8"
           }
          ]
         },
         {
          "html": "A block weighing 60 N in air and 40 N in water has a specific gravity of 3.",
          "sources": [
           {
            "id": "PAST-12-067",
            "label": "Set 12 · Q67"
           }
          ]
         },
         {
          "html": "A person of 100 N weight on Earth weighs 16.67 N where gravity is one sixth as strong.",
          "sources": [
           {
            "id": "PAST-13-078",
            "label": "Set 13 · Q78"
           }
          ]
         },
         {
          "html": "A 120 kN weight on earth becomes 20 kN on the moon.",
          "sources": [
           {
            "id": "PAST-18-064",
            "label": "Set 18 · Q64"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-08-033",
          "label": "Set 8 · Q33"
         },
         {
          "id": "PAST-16-008",
          "label": "Set 16 · Q8"
         },
         {
          "id": "PAST-12-067",
          "label": "Set 12 · Q67"
         },
         {
          "id": "PAST-13-078",
          "label": "Set 13 · Q78"
         },
         {
          "id": "PAST-18-064",
          "label": "Set 18 · Q64"
         }
        ]
       },
       {
        "id": "metacentre-and-floating-stability",
        "title": "Metacentric height and the stability of floating bodies",
        "html": "<p>When a floating body heels slightly, its centre of buoyancy shifts, and the new line of buoyancy crosses the axis at the <em>metacentre</em> M. The distance BM equals the second moment of the waterline area about the tilt axis divided by the displaced volume.</p><p>The <em>metacentric height</em> GM = BM − BG decides stability. A floating body is stable when M lies above its centre of gravity G, neutral when they coincide and unstable when M is below.</p><p>A fully submerged body behaves differently: its centre of buoyancy does not move when it tilts, so it is stable only when B lies above G. A floating body can be stable even with G above B, because heeling shifts B sideways and weight and buoyancy form a righting couple, provided M stays above G.</p><p>The righting moment at a small heel \\(\\theta\\) is \\(W \\cdot GM\\sin\\theta\\). A large GM rights the body strongly but makes it roll quickly and uncomfortably, so ships keep a moderate GM, commonly 0.3 to 1.5 m.</p>",
        "formulas": [
         {
          "label": "Metacentric height",
          "tex": "GM = BM - BG = \\dfrac{I}{V} - BG"
         },
         {
          "label": "Righting moment at a small heel",
          "tex": "M_r = W \\cdot GM \\sin\\theta"
         },
         {
          "label": "Period of rolling",
          "tex": "T = 2\\pi\\sqrt{\\dfrac{k^2}{g \\cdot GM}}"
         },
         {
          "label": "Metacentric height by an inclining test",
          "tex": "GM = \\dfrac{w\\,x}{W\\tan\\theta}"
         }
        ],
        "example": {
         "title": "Worked example: stability of a rectangular pontoon",
         "html": "<p>A pontoon 6 m wide floats at a draft of 1.5 m with its centre of gravity 1.2 m above the bottom. B is at half the draft, 0.75 m.</p>\\[\\begin{aligned} BM &amp;= \\dfrac{b^2}{12d} = \\dfrac{36}{18} = 2.0\\ \\text{m} \\\\ BG &amp;= 1.2 - 0.75 = 0.45\\ \\text{m} \\\\ GM &amp;= 2.0 - 0.45 = 1.55\\ \\text{m} \\end{aligned}\\]<p>GM is positive, so the pontoon is stable.</p>"
        },
        "moreHtml": "<p>BM is found from the waterline plane. \\(I\\) is taken about the longitudinal axis through its centroid, the axis of rolling, because that gives the smaller value and so the critical case. For a rectangular pontoon of breadth \\(b\\) floating at draft \\(d\\), \\(BM = b^2/(12d)\\).</p><p>GM is found experimentally with an inclining test: a known weight \\(w\\) is moved across the deck a distance \\(x\\), the angle of heel is measured, and \\(GM = wx/(W\\tan\\theta)\\).</p><p>The period of rolling, \\(T = 2\\pi\\sqrt{k^2/(g\\,GM)}\\) with \\(k\\) the radius of gyration, shows the trade-off: a larger GM means a shorter, sharper roll.</p>",
        "points": [
         {
          "html": "The correct expression is \\(GM = I/V - BG\\).",
          "sources": [
           {
            "id": "PAST-06-037",
            "label": "Set 6 · Q37"
           }
          ]
         },
         {
          "html": "A floating body is in stable equilibrium when its metacentre is above the centroid (the centre of gravity).",
          "sources": [
           {
            "id": "PAST-07-031",
            "label": "Set 7 · Q31"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-037",
          "label": "Set 6 · Q37"
         },
         {
          "id": "PAST-07-031",
          "label": "Set 7 · Q31"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Hydrostatic pressure",
        "tex": "p = \\gamma h"
       },
       {
        "label": "Piezometric head",
        "tex": "\\dfrac{p}{\\gamma} + z = \\text{constant}"
       },
       {
        "label": "Absolute pressure",
        "tex": "p_{\\text{abs}} = p_{\\text{atm}} + p_{\\text{gauge}}"
       },
       {
        "label": "Hydraulic press",
        "tex": "\\dfrac{F}{a} = \\dfrac{W}{A}"
       },
       {
        "label": "Force on a plane",
        "tex": "F = \\gamma A \\bar{h}"
       },
       {
        "label": "Centre of pressure",
        "tex": "h_p = \\bar{h} + \\dfrac{I_G}{A\\bar{h}}"
       },
       {
        "label": "Buoyancy",
        "tex": "F_B = \\gamma V"
       },
       {
        "label": "Metacentric height",
        "tex": "GM = \\dfrac{I}{V} - BG"
       },
       {
        "label": "Hydrostatic law",
        "tex": "\\dfrac{dp}{dz} = -\\gamma"
       },
       {
        "label": "Differential manometer",
        "tex": "p_A - p_B = (S_m - S)\\,\\gamma_w\\,x"
       },
       {
        "label": "Centre of pressure, inclined plane",
        "tex": "h_p = \\bar{h} + \\dfrac{I_G \\sin^2\\theta}{A\\bar{h}}"
       }
      ],
      "cautions": [
       {
        "id": "oil-head-rounding",
        "status": "review",
        "prompt": "The listed answer for the head of oil is slightly below the computed value",
        "html": "<p>\\(49\\,000/(850 \\times 9.81)\\) gives about 5.88 m. The paper's 5.83 m is the nearest option, so it is kept as the answer.</p>",
        "sources": [
         {
          "id": "PAST-13-066",
          "label": "Set 13 · Q66"
         }
        ]
       }
      ],
      "gaps": [
       "Pressure diagrams and differential manometers are explained here, but the past papers set no numerical questions on them."
      ]
     },
     "ACiE0303": {
      "code": "ACiE0303",
      "questionCount": 26,
      "format": 2,
      "summary": "<p>Fluid kinematics describes how a fluid moves and fluid dynamics why it moves that way. This subchapter classifies flows and defines streamlines, applies conservation of mass as the continuity equation in stream-tube and point forms, with the stream function and velocity potential, and develops conservation of energy as Bernoulli's equation, its assumptions and its real-fluid form. It then draws energy and hydraulic grade lines, explains the Pitot tube, venturimeter, orifices, mouthpieces and notches, and applies the momentum principle to jets, bends, drag and propulsion.</p>",
      "blocks": [
       {
        "id": "continuity-equation",
        "title": "Conservation of mass: the continuity equation",
        "html": "<p>In steady flow the mass passing every section of a stream tube per second is the same. For a compressible fluid this means \\(\\rho AV\\) is constant; for an incompressible one the density cancels and the discharge \\(AV\\) is constant, so a narrower section has a faster flow.</p><p>At a point, the same law says the velocity field has zero divergence when the fluid is incompressible. In two dimensions the rates of stretching in x and y must cancel. If the flow is also irrotational, a velocity potential \\(\\phi\\) exists and it satisfies the Laplace equation.</p><p>Flows are classified in pairs. <em>Steady</em> flow does not change with time at a point, <em>unsteady</em> flow does; <em>uniform</em> flow has the same velocity at every section, <em>non-uniform</em> flow does not. Flow may also be laminar or turbulent, compressible or incompressible, rotational or irrotational, and one-, two- or three-dimensional according to how many coordinates the velocity depends on.</p><p>A <em>streamline</em> is everywhere tangent to the velocity, a <em>pathline</em> traces one particle and a <em>streakline</em> joins all particles that passed one point; in steady flow the three coincide. No flow crosses a streamline, so a bundle of them forms a stream tube carrying a fixed discharge.</p>",
        "formulas": [
         {
          "label": "Continuity along a stream tube",
          "tex": "\\rho_1 A_1 V_1 = \\rho_2 A_2 V_2"
         },
         {
          "label": "Incompressible flow at a point",
          "tex": "\\nabla \\cdot \\mathbf{u} = \\dfrac{\\partial u}{\\partial x} + \\dfrac{\\partial v}{\\partial y} + \\dfrac{\\partial w}{\\partial z} = 0"
         },
         {
          "label": "Laplace equation, x–z plane",
          "tex": "\\dfrac{\\partial^2 \\phi}{\\partial x^2} + \\dfrac{\\partial^2 \\phi}{\\partial z^2} = 0"
         },
         {
          "label": "Stream function",
          "tex": "u = \\dfrac{\\partial \\psi}{\\partial y}, \\qquad v = -\\dfrac{\\partial \\psi}{\\partial x}"
         },
         {
          "label": "Rotation about the z-axis",
          "tex": "\\omega_z = \\tfrac{1}{2}\\left(\\dfrac{\\partial v}{\\partial x} - \\dfrac{\\partial u}{\\partial y}\\right)"
         }
        ],
        "example": {
         "title": "Worked example: is the field continuous?",
         "html": "<p>For \\(u = ax^2 + bxy\\) and \\(v = cxy + dy^2\\):</p>\\[\\begin{aligned} \\dfrac{\\partial u}{\\partial x} &amp;= 2ax + by \\\\ \\dfrac{\\partial v}{\\partial y} &amp;= cx + 2dy \\\\ \\text{sum} &amp;= (2a + c)x + (b + 2d)y = 0 \\end{aligned}\\]"
        },
        "moreHtml": "<p>In two-dimensional incompressible flow a <em>stream function</em> \\(\\psi\\) exists with \\(u = \\partial\\psi/\\partial y\\) and \\(v = -\\partial\\psi/\\partial x\\). It satisfies continuity automatically, its contours are streamlines, and the difference in \\(\\psi\\) between two streamlines is the discharge between them per unit width.</p><p>If the flow is also irrotational, a <em>velocity potential</em> \\(\\phi\\) exists with \\(u = -\\partial\\phi/\\partial x\\) and \\(v = -\\partial\\phi/\\partial y\\); some texts drop the minus signs. Equipotential lines cross the streamlines at right angles, forming the flow net used for seepage under dams.</p><p>Rotation of a fluid element is measured by \\(\\omega_z\\); the flow is irrotational where it is zero, which is the condition for a velocity potential to exist.</p>",
        "points": [
         {
          "html": "For steady flow of a compressible fluid, continuity is \\(\\rho_1A_1V_1 = \\rho_2A_2V_2\\).",
          "sources": [
           {
            "id": "PAST-12-006",
            "label": "Set 12 · Q6"
           }
          ]
         },
         {
          "html": "Steady, incompressible two-dimensional flow satisfies \\(\\partial u/\\partial x + \\partial v/\\partial y = 0\\).",
          "sources": [
           {
            "id": "PAST-14-018",
            "label": "Set 14 · Q18"
           },
           {
            "id": "PAST-18-040",
            "label": "Set 18 · Q40"
           }
          ]
         },
         {
          "html": "The incompressibility condition used with the Navier–Stokes equations is \\(\\nabla \\cdot \\mathbf{u} = 0\\).",
          "sources": [
           {
            "id": "PAST-10-072",
            "label": "Set 10 · Q72"
           }
          ]
         },
         {
          "html": "The field \\(u = ax^2 + bxy\\), \\(v = cxy + dy^2\\) is continuous only if \\((2a + c)x + (b + 2d)y = 0\\).",
          "sources": [
           {
            "id": "PAST-16-019",
            "label": "Set 16 · Q19"
           }
          ]
         },
         {
          "html": "In the x–z plane the Laplace equation is \\(\\partial^2\\phi/\\partial x^2 + \\partial^2\\phi/\\partial z^2 = 0\\).",
          "sources": [
           {
            "id": "PAST-14-036",
            "label": "Set 14 · Q36"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-12-006",
          "label": "Set 12 · Q6"
         },
         {
          "id": "PAST-14-018",
          "label": "Set 14 · Q18"
         },
         {
          "id": "PAST-18-040",
          "label": "Set 18 · Q40"
         },
         {
          "id": "PAST-10-072",
          "label": "Set 10 · Q72"
         },
         {
          "id": "PAST-16-019",
          "label": "Set 16 · Q19"
         },
         {
          "id": "PAST-14-036",
          "label": "Set 14 · Q36"
         }
        ]
       },
       {
        "id": "bernoulli-equation-and-assumptions",
        "title": "Bernoulli's equation: meaning, terms and assumptions",
        "html": "<p>Bernoulli's equation is the law of conservation of energy for an ideal fluid. Each of its terms, pressure head, velocity head and elevation head, is measured in metres and is energy, or work done, per unit weight of fluid. Their sum, the total head, stays constant along a streamline; in rotational flow different streamlines can carry different constants.</p><p>It assumes steady, incompressible, frictionless flow along a streamline. It fails for viscous flow with friction losses, but it does not need uniform velocity: the velocity may change from section to section. In a constant-area pipe the velocity head is fixed, so pressure falls as height rises.</p><p>The equation comes from Euler's equation of motion along a streamline, which balances the pressure, inertia and gravity forces on a fluid element; integrating it at constant density gives Bernoulli's equation.</p><p>For a real fluid between two sections the head loss \\(h_L\\) is added on the downstream side; a pump adds head and a turbine removes it. Where the velocity varies across a section, the velocity head is multiplied by the kinetic-energy correction factor \\(\\alpha\\), about 1.05 in turbulent and 2 in laminar pipe flow.</p>",
        "formulas": [
         {
          "label": "Bernoulli's equation",
          "tex": "\\dfrac{p}{\\gamma} + \\dfrac{V^2}{2g} + z = \\text{constant}"
         },
         {
          "label": "Euler's equation along a streamline",
          "tex": "\\dfrac{dp}{\\rho} + V\\,dV + g\\,dz = 0"
         },
         {
          "label": "Energy equation for a real fluid",
          "tex": "\\begin{aligned} &\\dfrac{p_1}{\\gamma} + \\dfrac{V_1^2}{2g} + z_1 \\\\ &= \\dfrac{p_2}{\\gamma} + \\dfrac{V_2^2}{2g} + z_2 + h_L \\end{aligned}"
         },
         {
          "label": "Torricelli's theorem",
          "tex": "V = \\sqrt{2gh}"
         }
        ],
        "example": {
         "title": "Worked example: pressure at a raised, narrower section",
         "html": "<p>A pipe carries 0.1 m<sup>3</sup>/s from a 300 mm section at 150 kPa to a 150 mm section 5 m higher. Losses are neglected.</p>\\[\\begin{aligned} V_1 &amp;= \\dfrac{0.1}{0.0707} = 1.41\\ \\text{m/s} \\\\ V_2 &amp;= 4V_1 = 5.66\\ \\text{m/s} \\\\ \\dfrac{p_2}{\\gamma} &amp;= 15.29 + 0.10 - 1.63 - 5 \\\\ &amp;= 8.76\\ \\text{m} \\\\ p_2 &amp;= 8.76 \\times 9.81 \\approx 85.9\\ \\text{kPa} \\end{aligned}\\]"
        },
        "moreHtml": "<p>Torricelli's result \\(V = \\sqrt{2gh}\\) for a jet from a tank is Bernoulli's equation written between the free surface, where the velocity and gauge pressure are zero, and the vena contracta of the jet, where the pressure is atmospheric.</p><p>A <em>siphon</em> carries water over a ridge higher than the supply. Its summit runs below atmospheric pressure, so the summit height above the supply is limited, in practice to about 7 to 8 m of water, before dissolved air comes out of solution and the flow breaks.</p><p>The constant is the same on every streamline only in irrotational flow; otherwise heads are compared along one streamline. Venturimeters, orifice meters, Pitot tubes and the lift of an aerofoil are all applications.</p>",
        "points": [
         {
          "html": "Bernoulli's principle rests on the law of conservation of energy.",
          "sources": [
           {
            "id": "PAST-18-056",
            "label": "Set 18 · Q56"
           }
          ]
         },
         {
          "html": "Each term of Bernoulli's equation is a total energy per unit weight, a head in metres.",
          "sources": [
           {
            "id": "PAST-09-023",
            "label": "Set 9 · Q23"
           }
          ]
         },
         {
          "html": "In pipe flow each Bernoulli term is the work done per unit weight of the fluid.",
          "sources": [
           {
            "id": "PAST-11-058",
            "label": "Set 11 · Q58"
           }
          ]
         },
         {
          "html": "Bernoulli's equation says the energy is constant along one streamline, and it can be different on another streamline.",
          "sources": [
           {
            "id": "PAST-04-025",
            "label": "Set 4 · Q25"
           }
          ]
         },
         {
          "html": "Bernoulli's equation cannot be used for viscous flow, where friction dissipates energy.",
          "sources": [
           {
            "id": "PAST-07-036",
            "label": "Set 7 · Q36"
           }
          ]
         },
         {
          "html": "The velocity being the same at every section (uniform flow) is not a Bernoulli assumption.",
          "sources": [
           {
            "id": "PAST-R2083-010",
            "label": "2083 recall · Q10"
           }
          ]
         },
         {
          "html": "For steady flow in a pipe of constant section, pressure decreases with height.",
          "sources": [
           {
            "id": "PAST-05-015",
            "label": "Set 5 · Q15"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-18-056",
          "label": "Set 18 · Q56"
         },
         {
          "id": "PAST-09-023",
          "label": "Set 9 · Q23"
         },
         {
          "id": "PAST-11-058",
          "label": "Set 11 · Q58"
         },
         {
          "id": "PAST-04-025",
          "label": "Set 4 · Q25"
         },
         {
          "id": "PAST-07-036",
          "label": "Set 7 · Q36"
         },
         {
          "id": "PAST-R2083-010",
          "label": "2083 recall · Q10"
         },
         {
          "id": "PAST-05-015",
          "label": "Set 5 · Q15"
         }
        ]
       },
       {
        "id": "energy-and-hydraulic-grade-lines",
        "title": "Energy grade line and hydraulic grade line",
        "html": "<p>Plotting the heads along a pipe gives two lines. The <em>hydraulic grade line</em> joins the levels \\(p/\\gamma + z\\) to which water would rise in piezometers. The <em>energy grade line</em>, or total energy line, lies above it by the velocity head.</p><p>The gap between the two lines is therefore the velocity head, large where the pipe is narrow and small where it is wide. The energy line falls steadily in the direction of flow because of friction and other losses.</p><p>Over a length of uniform pipe the two lines run parallel, falling at the friction slope. At a sudden enlargement the hydraulic grade line rises, because velocity head turns back into pressure head, while the energy line still drops by the expansion loss; at a contraction or a valve both lines drop sharply. A pump lifts both lines by its head and a turbine lowers them.</p><p>Where the pipe rises above the hydraulic grade line its pressure is below atmospheric. If it climbs about 8 m or more above that line, the water may vaporise and the flow break.</p>",
        "formulas": [
         {
          "label": "Gap between the lines",
          "tex": "\\text{EGL} - \\text{HGL} = \\dfrac{V^2}{2g}"
         },
         {
          "label": "Hydraulic grade line",
          "tex": "\\text{HGL} = \\dfrac{p}{\\gamma} + z"
         },
         {
          "label": "Total energy line",
          "tex": "\\text{TEL} = \\dfrac{p}{\\gamma} + z + \\dfrac{V^2}{2g}"
         },
         {
          "label": "Friction slope",
          "tex": "S_f = \\dfrac{h_f}{L}"
         }
        ],
        "moreHtml": "<p>For a reservoir feeding a pipe that discharges to air, the energy line starts at the reservoir level, drops by the entrance loss, half a velocity head for a sharp entry, and then slopes down with friction. The hydraulic grade line runs one velocity head below it and ends at the outlet level, where the pressure is atmospheric.</p><p>For a pipe entering a second reservoir, the exit loss is a whole velocity head, so the energy line meets the downstream water surface at the outlet.</p><p>The slope of the energy line, head loss per unit length, is the <em>friction slope</em> \\(S_f\\). In an open channel the free surface itself is the hydraulic grade line.</p>",
        "points": [
         {
          "html": "EGL minus HGL gives the velocity head, \\(V^2/2g\\).",
          "sources": [
           {
            "id": "PAST-06-016",
            "label": "Set 6 · Q16"
           }
          ]
         },
         {
          "html": "The vertical gap from the hydraulic grade line up to the total head line is the velocity head.",
          "sources": [
           {
            "id": "PAST-08-045",
            "label": "Set 8 · Q45"
           }
          ]
         },
         {
          "html": "The total energy line stands above the hydraulic grade line by the velocity head.",
          "sources": [
           {
            "id": "PAST-15-016",
            "label": "Set 15 · Q16"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-016",
          "label": "Set 6 · Q16"
         },
         {
          "id": "PAST-08-045",
          "label": "Set 8 · Q45"
         },
         {
          "id": "PAST-15-016",
          "label": "Set 15 · Q16"
         }
        ]
       },
       {
        "id": "flow-measurement",
        "title": "Flow measurement: Pitot tube, venturimeter and orifices",
        "html": "<p>A <em>Pitot tube</em> faces into the flow and senses stagnation pressure; the rise above the static level is the velocity head, so it measures the velocity at a point. A <em>venturimeter</em> narrows the pipe to a throat: by continuity the velocity is highest there and the pressure lowest, and the pressure difference gives the discharge.</p><p>A jet from an orifice follows a parabolic path, so its horizontal throw gives the coefficient of velocity. A large orifice is treated as a set of thin strips, integrating the velocity over its depth between the heads at its top and bottom edges.</p><p>An orifice has three coefficients: contraction \\(C_c\\), the vena contracta area over the orifice area, about 0.62 to 0.64; velocity \\(C_v\\), about 0.97 to 0.99; and discharge \\(C_d = C_c C_v\\), about 0.61 to 0.62 for a sharp edge. An external cylindrical mouthpiece raises \\(C_d\\) to about 0.82.</p><p>A venturimeter's discharge coefficient, 0.95 to 0.98, is high because its long divergent cone recovers most of the pressure; an orifice meter is cheaper but wastes more head. Channels are gauged with notches and weirs, whose discharge grows as \\(H^{3/2}\\) for a rectangular notch and \\(H^{5/2}\\) for a triangular one.</p>",
        "formulas": [
         {
          "label": "Pitot tube",
          "tex": "V = \\sqrt{2gh}"
         },
         {
          "label": "Coefficient of velocity from the jet path",
          "tex": "C_v = \\dfrac{x}{2\\sqrt{yH}}"
         },
         {
          "label": "Large rectangular orifice",
          "tex": "Q = \\tfrac{2}{3} C_d b \\sqrt{2g}\\,\\left(H_2^{3/2} - H_1^{3/2}\\right)"
         },
         {
          "label": "Venturimeter discharge",
          "tex": "Q = \\dfrac{C_d A_1 A_2 \\sqrt{2gh}}{\\sqrt{A_1^2 - A_2^2}}"
         },
         {
          "label": "Rectangular and triangular notches",
          "tex": "\\begin{aligned} Q_{\\text{rect}} &= \\tfrac{2}{3} C_d L\\sqrt{2g}\\,H^{3/2} \\\\ Q_{\\text{tri}} &= \\tfrac{8}{15} C_d \\sqrt{2g}\\,\\tan\\tfrac{\\theta}{2}\\,H^{5/2} \\end{aligned}"
         }
        ],
        "example": {
         "title": "Worked examples: jet throw and a large orifice",
         "html": "<p>A jet under a 1 m head falls 1 m while travelling 1.8 m: \\(C_v = 1.8/(2\\sqrt{1 \\times 1}) = 0.90\\).</p><p>An orifice 3.2 m wide and 1.7 m deep with its top 3.3 m below the water has \\(H_1 = 3.3\\) m and \\(H_2 = 5.0\\) m, and \\(\\tfrac{2}{3}(0.6)(3.2)\\sqrt{2g} \\approx 5.67\\):</p>\\[\\begin{aligned} Q &amp;= 5.67 \\times (11.18 - 5.99) \\\\ &amp;\\approx 29.4\\ \\text{m}^3/\\text{s} \\end{aligned}\\]"
        },
        "moreHtml": "<p>For a venturimeter read by a differential manometer holding a liquid of specific gravity \\(S_m\\) under a flowing liquid of specific gravity \\(S\\), the head difference is \\(h = x(S_m/S - 1)\\). It does not depend on whether the meter is horizontal, inclined or vertical, because the manometer measures the piezometric difference.</p><p>A Pitot-static tube combines the stagnation and static openings in one probe, so its manometer reads the velocity head directly. Current meters measure river velocities from the speed of a rotating cup or propeller, and a rotameter gives discharge from the height of a float in a tapered tube.</p><p>Francis's formula allows for the end contractions of a rectangular weir by reducing its effective length by \\(0.1nH\\), with \\(n\\) the number of contractions.</p>",
        "points": [
         {
          "html": "A Pitot tube is used to measure the velocity of flow at a point.",
          "sources": [
           {
            "id": "PAST-10-056",
            "label": "Set 10 · Q56"
           }
          ]
         },
         {
          "html": "In a venturimeter the liquid moves faster at the throat than at the inlet: its velocity is higher.",
          "sources": [
           {
            "id": "PAST-16-038",
            "label": "Set 16 · Q38"
           }
          ]
         },
         {
          "html": "The throat is the portion of a venturimeter with the highest velocity and lowest pressure.",
          "sources": [
           {
            "id": "PAST-16-071",
            "label": "Set 16 · Q71"
           }
          ]
         },
         {
          "html": "A jet from a full 1 m jar set 1 m above the floor that lands 1.8 m away has a coefficient of velocity of 0.90.",
          "sources": [
           {
            "id": "PAST-06-074",
            "label": "Set 6 · Q74"
           }
          ]
         },
         {
          "html": "A 3.2 m by 1.7 m orifice under 3.3 m of water above its top edge, with \\(C_d = 0.6\\), discharges about 29.4 m<sup>3</sup>/s.",
          "sources": [
           {
            "id": "PAST-14-067",
            "label": "Set 14 · Q67"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-10-056",
          "label": "Set 10 · Q56"
         },
         {
          "id": "PAST-16-038",
          "label": "Set 16 · Q38"
         },
         {
          "id": "PAST-16-071",
          "label": "Set 16 · Q71"
         },
         {
          "id": "PAST-06-074",
          "label": "Set 6 · Q74"
         },
         {
          "id": "PAST-14-067",
          "label": "Set 14 · Q67"
         }
        ]
       },
       {
        "id": "momentum-principle-jets-and-drag",
        "title": "The momentum principle, jets on plates, drag and jet propulsion",
        "html": "<p>The impulse–momentum principle says the net force on the fluid in a control volume equals the rate of change of its momentum. It gives the force of a jet on a plate and the thrust on a pipe bend. A venturimeter is analysed with energy and continuity instead.</p><p>A jet striking a fixed flat plate normally turns through 90° and spreads along the plate, losing all its normal momentum, so the force is \\(\\rho a V^2\\). The same principle underlies jet propulsion, which suits ships in very shallow water where a screw propeller would strike the bed. The drag of a complete body such as an aircraft also includes interference drag, where its parts meet.</p><p>The equation is applied separately in each direction to the fluid inside the control volume, and the force on the pipe or plate is equal and opposite. A single plate moving away from the jet at speed \\(u\\) receives \\(\\rho a(V-u)^2\\); a series of plates on a wheel receives \\(\\rho aV(V-u)\\) because the whole jet discharge is used.</p><p>Drag on an immersed body combines skin friction from wall shear and form drag from flow separation behind it; streamlining reduces form drag.</p>",
        "formulas": [
         {
          "label": "Jet on a fixed plate, normal impact",
          "tex": "F = \\rho a V^2"
         },
         {
          "label": "Momentum equation",
          "tex": "\\sum F = \\rho Q\\,(V_2 - V_1)"
         },
         {
          "label": "Jet on moving plates",
          "tex": "\\begin{aligned} F_{\\text{single}} &= \\rho a (V-u)^2 \\\\ F_{\\text{series}} &= \\rho a V (V-u) \\end{aligned}"
         },
         {
          "label": "Drag and lift",
          "tex": "\\begin{aligned} F_D &= C_D A\\,\\dfrac{\\rho V^2}{2} \\\\ F_L &= C_L A\\,\\dfrac{\\rho V^2}{2} \\end{aligned}"
         }
        ],
        "example": {
         "title": "Worked example: jet velocity from the plate force",
         "html": "<p>A 2 kN force from a jet of area 0.02 m<sup>2</sup>: \\(2000 = 1000 \\times 0.02 \\times V^2\\), so \\(V^2 = 100\\) and \\(V = 10\\) m/s.</p>"
        },
        "moreHtml": "<p>A jet striking an inclined fixed plate at angle \\(\\theta\\) gives a normal force \\(\\rho aV^2\\sin\\theta\\). On a fixed curved vane that turns the jet back through nearly 180° the force approaches \\(2\\rho aV^2\\), twice the flat-plate value, which is why Pelton buckets reverse the jet.</p><p>For a pipe bend the momentum equation also includes the pressure forces on the two end sections; anchor blocks at bends are designed for the resulting thrust.</p><p>Work done by a jet on moving vanes is greatest when the vane speed is half the jet speed. Lift acts at right angles to the approaching flow and follows the same form as drag, with a lift coefficient in place of the drag coefficient.</p>",
        "points": [
         {
          "html": "The momentum principle is not applied to the venturi meter, which is analysed with Bernoulli's equation.",
          "sources": [
           {
            "id": "PAST-08-034",
            "label": "Set 8 · Q34"
           }
          ]
         },
         {
          "html": "After striking a vertical stationary plate, the jet moves along the plate.",
          "sources": [
           {
            "id": "PAST-10-053",
            "label": "Set 10 · Q53"
           }
          ]
         },
         {
          "html": "A jet of 0.02 m<sup>2</sup> area producing 2 kN on a fixed plate has a velocity of 10 m/s.",
          "sources": [
           {
            "id": "PAST-11-066",
            "label": "Set 11 · Q66"
           }
          ]
         },
         {
          "html": "The drag coefficient of a complete aircraft includes interference drag, where its parts meet.",
          "sources": [
           {
            "id": "PAST-14-054",
            "label": "Set 14 · Q54"
           }
          ]
         },
         {
          "html": "Ships in very shallow water use jet propulsion to avoid damage of the propeller on the bed.",
          "sources": [
           {
            "id": "PAST-14-055",
            "label": "Set 14 · Q55"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-08-034",
          "label": "Set 8 · Q34"
         },
         {
          "id": "PAST-10-053",
          "label": "Set 10 · Q53"
         },
         {
          "id": "PAST-11-066",
          "label": "Set 11 · Q66"
         },
         {
          "id": "PAST-14-054",
          "label": "Set 14 · Q54"
         },
         {
          "id": "PAST-14-055",
          "label": "Set 14 · Q55"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Continuity",
        "tex": "\\rho_1 A_1 V_1 = \\rho_2 A_2 V_2"
       },
       {
        "label": "2-D incompressible continuity",
        "tex": "\\dfrac{\\partial u}{\\partial x} + \\dfrac{\\partial v}{\\partial y} = 0"
       },
       {
        "label": "Laplace equation",
        "tex": "\\nabla^2 \\phi = 0"
       },
       {
        "label": "Bernoulli",
        "tex": "\\dfrac{p}{\\gamma} + \\dfrac{V^2}{2g} + z = \\text{constant}"
       },
       {
        "label": "Pitot tube",
        "tex": "V = \\sqrt{2gh}"
       },
       {
        "label": "Coefficient of velocity",
        "tex": "C_v = \\dfrac{x}{2\\sqrt{yH}}"
       },
       {
        "label": "Large orifice",
        "tex": "Q = \\tfrac{2}{3} C_d b \\sqrt{2g}\\,\\left(H_2^{3/2} - H_1^{3/2}\\right)"
       },
       {
        "label": "Jet on a fixed plate",
        "tex": "F = \\rho a V^2"
       },
       {
        "label": "Venturimeter",
        "tex": "Q = \\dfrac{C_d A_1 A_2 \\sqrt{2gh}}{\\sqrt{A_1^2 - A_2^2}}"
       },
       {
        "label": "Torricelli",
        "tex": "V = \\sqrt{2gh}"
       },
       {
        "label": "Momentum equation",
        "tex": "\\sum F = \\rho Q\\,(V_2 - V_1)"
       },
       {
        "label": "Drag force",
        "tex": "F_D = C_D A\\,\\dfrac{\\rho V^2}{2}"
       }
      ],
      "cautions": [
       {
        "id": "laplace-options-printed-twice",
        "status": "review",
        "prompt": "The paper prints two options of the Laplace-equation question identically",
        "html": "<p>Two of the options are printed the same. The answer kept is the true form for irrotational flow in the x–z plane, \\(\\partial^2\\phi/\\partial x^2 + \\partial^2\\phi/\\partial z^2 = 0\\).</p>",
        "sources": [
         {
          "id": "PAST-14-036",
          "label": "Set 14 · Q36"
         }
        ]
       }
      ],
      "gaps": [
       "Flow nets and the Navier–Stokes equations are outside these notes; the stream function and velocity potential are introduced only as far as continuity and the Laplace equation need them."
      ]
     },
     "ACiE0304": {
      "code": "ACiE0304",
      "questionCount": 19,
      "format": 2,
      "summary": "<p>Flow in closed conduits is driven by a pressure difference and resisted by viscosity. This subchapter uses the Reynolds number to separate laminar, transitional and turbulent flow, derives the Hagen–Poiseuille results for laminar flow, and applies the Darcy–Weisbach equation with the Moody diagram, smooth and rough pipes and empirical formulas to turbulent flow. It then adds minor losses at fittings, combines pipes in series, in parallel and in networks, and explains water hammer, the critical closure time and the devices that control surges.</p>",
      "blocks": [
       {
        "id": "laminar-pipe-flow",
        "title": "Laminar pipe flow and the laminar friction factor",
        "html": "<p>In fully developed laminar flow in a circular pipe the velocity profile is a parabola: zero at the wall and greatest at the axis, where it is twice the mean velocity. The shear stress, by contrast, varies linearly, from zero at the centre to its maximum at the wall.</p><p>The Hagen–Poiseuille equation, which assumes steady laminar flow of an incompressible Newtonian fluid, gives the head loss. Written in Darcy form it makes the friction factor \\(f = 64/Re\\); the coefficient of friction used with \\(4f'\\), the Fanning value, is a quarter of that, \\(16/Re\\).</p><p>Whether pipe flow is laminar depends on the Reynolds number, the ratio of inertia to viscous forces. Below about 2000 the flow is laminar, from 2000 to 4000 it is transitional, and above 4000 it is turbulent. Laminar flow occurs in small tubes, slow flows and viscous oils; water mains are almost always turbulent.</p><p>In laminar flow the head loss varies directly with the velocity. The parabolic profile is fully developed after an entrance length of about \\(0.058\\,Re\\,D\\), and the kinetic-energy and momentum correction factors are 2 and 4/3.</p>",
        "formulas": [
         {
          "label": "Shear stress and centreline velocity",
          "tex": "\\tau = \\left(-\\dfrac{dp}{dx}\\right)\\dfrac{r}{2}, \\qquad u_{\\text{max}} = 2\\bar{V}"
         },
         {
          "label": "Hagen–Poiseuille head loss",
          "tex": "h_f = \\dfrac{32\\mu V L}{\\gamma D^2}"
         },
         {
          "label": "Laminar friction factors",
          "tex": "f = \\dfrac{64}{Re}, \\qquad f' = \\dfrac{f}{4} = \\dfrac{16}{Re}"
         },
         {
          "label": "Reynolds number",
          "tex": "Re = \\dfrac{\\rho V D}{\\mu} = \\dfrac{VD}{\\nu}"
         },
         {
          "label": "Laminar discharge (Hagen–Poiseuille)",
          "tex": "Q = \\dfrac{\\pi D^4\\,\\Delta p}{128\\,\\mu L}"
         }
        ],
        "example": {
         "title": "Worked example: head loss in laminar oil flow",
         "html": "<p>Oil with \\(\\nu = 1.0 \\times 10^{-4}\\) m<sup>2</sup>/s flows at 1.0 m/s in a 100 mm pipe 100 m long.</p>\\[\\begin{aligned} Re &amp;= \\dfrac{1.0 \\times 0.1}{1.0 \\times 10^{-4}} = 1000 \\\\ f &amp;= \\dfrac{64}{1000} = 0.064 \\\\ h_f &amp;= 0.064 \\times \\dfrac{100}{0.1} \\times \\dfrac{1.0^2}{19.62} \\\\ &amp;= 0.064 \\times 1000 \\times 0.051 \\approx 3.26\\ \\text{m} \\end{aligned}\\]"
        },
        "moreHtml": "<p>The parabolic profile follows from a force balance on a cylinder of fluid of radius \\(r\\): the pressure difference on its ends is resisted by shear on its curved surface, so \\(\\tau = (-dp/dx)\\,r/2\\). With \\(\\tau = -\\mu\\,du/dr\\) the velocity becomes \\(u = u_{\\max}(1 - r^2/R^2)\\).</p><p>Integrating the profile gives the discharge: at a fixed pressure drop it varies as the fourth power of the diameter, so halving the bore cuts the flow to a sixteenth. The same analysis between fixed parallel plates a gap \\(t\\) apart gives \\(u_{\\max} = 1.5\\bar{V}\\) and a head loss of \\(12\\mu VL/(\\gamma t^2)\\).</p>",
        "points": [
         {
          "html": "In laminar pipe flow the shear stress distribution is linear with zero value at the centre, maximum at the wall.",
          "sources": [
           {
            "id": "PAST-05-052",
            "label": "Set 5 · Q52"
           }
          ]
         },
         {
          "html": "Under viscous (laminar) conditions the axis velocity is 2 times the mean velocity.",
          "sources": [
           {
            "id": "PAST-07-079",
            "label": "Set 7 · Q79"
           }
          ]
         },
         {
          "html": "The Hagen–Poiseuille equation assumes the flow is laminar.",
          "sources": [
           {
            "id": "PAST-14-053",
            "label": "Set 14 · Q53"
           }
          ]
         },
         {
          "html": "The coefficient of friction for laminar flow is 16/Re, a quarter of the Darcy factor.",
          "sources": [
           {
            "id": "PAST-06-032",
            "label": "Set 6 · Q32"
           }
          ]
         },
         {
          "html": "The Darcy friction factor for laminar flow is 64/Re.",
          "sources": [
           {
            "id": "PAST-15-021",
            "label": "Set 15 · Q21"
           }
          ]
         },
         {
          "html": "In \\(h_f = 4f'LV^2/(2gD)\\), laminar flow gives \\(f' = 16/Re\\).",
          "sources": [
           {
            "id": "PAST-R2083-020",
            "label": "2083 recall · Q20"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-052",
          "label": "Set 5 · Q52"
         },
         {
          "id": "PAST-07-079",
          "label": "Set 7 · Q79"
         },
         {
          "id": "PAST-14-053",
          "label": "Set 14 · Q53"
         },
         {
          "id": "PAST-06-032",
          "label": "Set 6 · Q32"
         },
         {
          "id": "PAST-15-021",
          "label": "Set 15 · Q21"
         },
         {
          "id": "PAST-R2083-020",
          "label": "2083 recall · Q20"
         }
        ]
       },
       {
        "id": "turbulent-friction-and-darcy-weisbach",
        "title": "Friction in turbulent flow, the Darcy–Weisbach equation and roughness",
        "html": "<p>In turbulent flow the friction loss follows the Darcy–Weisbach equation, so it varies approximately as the square of the velocity. Replacing V with \\(4Q/\\pi D^2\\) gives the same loss in terms of discharge, with the constant \\(\\pi^2 g/8 \\approx 12.1\\).</p><p>The friction factor is read from the Moody diagram against the Reynolds number and the relative roughness \\(e/D\\), where e is the average height of the roughness projections on the wall. Prandtl's mixing length, the distance over which turbulent eddies carry momentum, grows with distance from the wall and is zero at the wall itself.</p><p>Next to the wall a thin <em>laminar sublayer</em> survives. When the roughness is buried in it the pipe is <em>hydraulically smooth</em> and \\(f\\) depends on Re alone; when the projections pierce it, and in the fully rough zone, \\(f\\) depends only on \\(e/D\\). Commercial pipes mostly lie in the transition between the two, described by the Colebrook–White equation that the Moody diagram plots.</p><p>Engineers designing water mains often use the empirical Hazen–Williams formula, whose coefficient \\(C\\) is about 130 to 140 for new smooth pipes and falls as pipes age.</p>",
        "formulas": [
         {
          "label": "Darcy–Weisbach equation",
          "tex": "h_f = \\dfrac{f L V^2}{2 g D} = \\dfrac{f L Q^2}{12.1\\, D^5}"
         },
         {
          "label": "Blasius, smooth pipes up to Re ≈ 100 000",
          "tex": "f = \\dfrac{0.316}{Re^{1/4}}"
         },
         {
          "label": "Wall shear stress and shear velocity",
          "tex": "\\tau_0 = \\dfrac{f\\rho V^2}{8}, \\qquad u_* = \\sqrt{\\dfrac{\\tau_0}{\\rho}}"
         },
         {
          "label": "Hazen–Williams velocity (SI)",
          "tex": "V = 0.849\\,C\\,R^{0.63} S^{0.54}"
         }
        ],
        "example": {
         "title": "Worked example: friction loss in a main",
         "html": "<p>A 200 mm pipe 500 m long carries 0.05 m<sup>3</sup>/s with \\(f = 0.02\\).</p>\\[\\begin{aligned} V &amp;= \\dfrac{0.05}{0.0314} = 1.59\\ \\text{m/s} \\\\ h_f &amp;= 0.02 \\times \\dfrac{500}{0.2} \\times \\dfrac{1.59^2}{19.62} \\\\ &amp;= 0.02 \\times 2500 \\times 0.129 \\approx 6.46\\ \\text{m} \\end{aligned}\\]<p>The discharge form gives the same result:</p>\\[h_f = \\dfrac{0.02 \\times 500 \\times 0.05^2}{12.1 \\times 0.2^5} \\approx 6.46\\ \\text{m}\\]"
        },
        "moreHtml": "<p>The wall shear stress follows from the friction factor, and the <em>shear velocity</em> \\(u_*\\) built from it sets the sublayer thickness, about \\(11.6\\nu/u_*\\). Because the sublayer thins as the velocity rises, the same pipe can behave as smooth at low flows and rough at high flows.</p><p>The turbulent velocity profile is much flatter than the laminar parabola, following a logarithmic or seventh-power law, with a maximum only about 1.2 times the mean. Head loss varies as \\(V^{1.75}\\) in smooth pipes and as \\(V^2\\) in fully rough pipes.</p><p>The Chezy coefficient of a pipe is tied to the friction factor by \\(C = \\sqrt{8g/f}\\).</p>",
        "points": [
         {
          "html": "The frictional resistance of a pipe varies approximately with the square of velocity.",
          "sources": [
           {
            "id": "PAST-07-051",
            "label": "Set 7 · Q51"
           }
          ]
         },
         {
          "html": "\\(h_f = fLQ^2/(12.1D^5)\\) is the Darcy–Weisbach equation written in terms of discharge.",
          "sources": [
           {
            "id": "PAST-08-037",
            "label": "Set 8 · Q37"
           }
          ]
         },
         {
          "html": "In the Moody diagram, e is the surface roughness height of the pipe wall.",
          "sources": [
           {
            "id": "PAST-12-008",
            "label": "Set 12 · Q8"
           }
          ]
         },
         {
          "html": "Prandtl's mixing length is zero at the pipe wall and grows away from it.",
          "sources": [
           {
            "id": "PAST-09-036",
            "label": "Set 9 · Q36"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-07-051",
          "label": "Set 7 · Q51"
         },
         {
          "id": "PAST-08-037",
          "label": "Set 8 · Q37"
         },
         {
          "id": "PAST-12-008",
          "label": "Set 12 · Q8"
         },
         {
          "id": "PAST-09-036",
          "label": "Set 9 · Q36"
         }
        ]
       },
       {
        "id": "minor-losses",
        "title": "Minor losses: entrance, exit and sudden expansion",
        "html": "<p>Fittings and changes of section cause <em>minor losses</em>, each written as a multiple of a velocity head. At a sharp entrance from a tank the loss is about half a velocity head; at the exit into a tank the whole velocity head is lost, so the entrance loss is half the exit loss.</p><p>At a sudden enlargement the jet separates and mixes. Momentum and energy together, the Borda–Carnot result, give a loss equal to the velocity head of the difference in velocities.</p><p>At a sudden contraction the loss arises as the flow re-expands after the vena contracta; it is about \\(0.5V_2^2/2g\\) for a large area ratio and less for a mild one. Bends, elbows, tees and valves each have their own coefficient \\(k\\): about 0.04 for a well-rounded bell-mouth entry, 0.9 for a 90° elbow and 0.2 for a fully open gate valve.</p><p>Minor losses matter in short pipes with many fittings; in pipes longer than about 1000 diameters they are small beside friction. A fitting can be replaced by an <em>equivalent length</em> of straight pipe that causes the same loss.</p>",
        "formulas": [
         {
          "label": "Entrance and exit losses",
          "tex": "h_{\\text{entry}} = 0.5\\dfrac{V^2}{2g}, \\qquad h_{\\text{exit}} = \\dfrac{V^2}{2g}"
         },
         {
          "label": "Sudden expansion",
          "tex": "h_L = \\dfrac{(V_1 - V_2)^2}{2g}"
         },
         {
          "label": "Sudden contraction",
          "tex": "h_c = \\left(\\dfrac{1}{C_c} - 1\\right)^2 \\dfrac{V_2^2}{2g}"
         },
         {
          "label": "Equivalent length of a fitting",
          "tex": "L_e = \\dfrac{k D}{f}"
         }
        ],
        "example": {
         "title": "Worked example: loss at a sudden enlargement",
         "html": "<p>0.1 m<sup>3</sup>/s passes from a 150 mm to a 300 mm pipe.</p>\\[\\begin{aligned} V_1 &amp;= \\dfrac{0.1}{0.0177} = 5.66\\ \\text{m/s} \\\\ V_2 &amp;= \\dfrac{V_1}{4} = 1.41\\ \\text{m/s} \\\\ h_L &amp;= \\dfrac{(5.66 - 1.41)^2}{2 \\times 9.81} \\approx 0.92\\ \\text{m} \\end{aligned}\\]"
        },
        "moreHtml": "<p>The Borda–Carnot loss comes from applying the momentum equation to the eddying zone after an enlargement, where the pressure on the annular step stays at the upstream value, and then the energy equation. Written as \\(kV_1^2/2g\\), it has \\(k = (1 - A_1/A_2)^2\\); for discharge into a large tank \\(A_2\\) is effectively infinite and \\(k = 1\\), the exit loss.</p><p>Gradual expansions lose far less: a diffuser with a total cone angle of about 6° to 8° recovers most of the velocity head, which is why the outlet cone of a venturimeter is long and gentle.</p>",
        "points": [
         {
          "html": "The head loss at the entrance of a pipe is half that at its exit.",
          "sources": [
           {
            "id": "PAST-04-056",
            "label": "Set 4 · Q56"
           },
           {
            "id": "PAST-15-020",
            "label": "Set 15 · Q20"
           }
          ]
         },
         {
          "html": "The sudden expansion loss is \\((V_1 - V_2)^2/2g\\).",
          "sources": [
           {
            "id": "PAST-08-059",
            "label": "Set 8 · Q59"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-056",
          "label": "Set 4 · Q56"
         },
         {
          "id": "PAST-15-020",
          "label": "Set 15 · Q20"
         },
         {
          "id": "PAST-08-059",
          "label": "Set 8 · Q59"
         }
        ]
       },
       {
        "id": "pipes-in-series-and-parallel",
        "title": "Pipes in series and in parallel",
        "html": "<p>Pipes in <em>series</em> carry the same discharge one after another, so the total head loss is the sum of the individual losses. If the diameters are equal the velocity is the same too, and the line behaves as one pipe of the combined length.</p><p>Pipes in <em>parallel</em> join the same two junctions, so each has the same head loss and their discharges add up. Two identical parallel pipes each carry half the flow, and since head loss varies as \\(LQ^2\\) the equivalent single pipe of the same diameter is a quarter as long.</p><p>A series line can be replaced by an <em>equivalent pipe</em> of one diameter that gives the same loss at the same discharge; with a common friction factor, Dupuit's equation matches \\(L/D^5\\).</p><p>A looped <em>network</em> obeys two rules: at every junction inflow equals outflow, and around every closed loop the signed head losses add to zero. The <em>Hardy Cross</em> method starts from flows that satisfy the first rule and corrects each loop in turn until the second holds. Branching pipes joining three reservoirs are solved with the same two rules at the junction.</p>",
        "formulas": [
         {
          "label": "Dupuit's equivalent pipe",
          "tex": "\\dfrac{L}{D^5} = \\dfrac{L_1}{D_1^5} + \\dfrac{L_2}{D_2^5} + \\dfrac{L_3}{D_3^5}"
         },
         {
          "label": "Hardy Cross loop correction",
          "tex": "\\Delta Q = -\\dfrac{\\sum r Q |Q|^{n-1}}{n \\sum r |Q|^{n-1}}"
         },
         {
          "label": "Maximum power transmission",
          "tex": "h_f = \\dfrac{H}{3}, \\qquad \\eta_{\\max} = \\dfrac{2}{3}"
         }
        ],
        "example": {
         "title": "Worked example: two identical pipes in parallel",
         "html": "<p>Each pipe carries \\(Q/2\\) with the same loss as one pipe carrying Q over length \\(L_e\\):</p>\\[L_e Q^2 = L\\left(\\dfrac{Q}{2}\\right)^2, \\qquad L_e = \\dfrac{L}{4}\\]"
        },
        "moreHtml": "<p>For two parallel pipes of the same length and friction factor, equal head loss with \\(h_f \\propto Q^2/D^5\\) means \\(Q \\propto D^{5/2}\\): a pipe of twice the diameter carries about 5.7 times the flow of the smaller one.</p><p>In the three-reservoir problem the unknown is the piezometric head at the junction. It is adjusted until the flows it drives in the three pipes balance, with the pipe to the middle reservoir flowing in whichever direction that head requires.</p><p>Power delivered through a pipe, \\(\\gamma Q(H - h_f)\\), is greatest when the friction loss is one third of the supply head, so the transmission efficiency is then two thirds.</p>",
        "points": [
         {
          "html": "In a parallel combination the head loss is the same in all pipes, and the discharges add.",
          "sources": [
           {
            "id": "PAST-11-018",
            "label": "Set 11 · Q18"
           }
          ]
         },
         {
          "html": "A single pipe equivalent to two identical parallel pipes of length L has length L/4.",
          "sources": [
           {
            "id": "PAST-10-077",
            "label": "Set 10 · Q77"
           }
          ]
         },
         {
          "html": "When pipes are connected in series the discharge will be constant through each.",
          "sources": [
           {
            "id": "PAST-16-039",
            "label": "Set 16 · Q39"
           }
          ]
         },
         {
          "html": "In series pipes of equal diameter, discharge and velocity are the same in each pipe, and the total head loss is the sum of the individual losses.",
          "sources": [
           {
            "id": "PAST-R2083-023",
            "label": "2083 recall · Q23"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-11-018",
          "label": "Set 11 · Q18"
         },
         {
          "id": "PAST-10-077",
          "label": "Set 10 · Q77"
         },
         {
          "id": "PAST-16-039",
          "label": "Set 16 · Q39"
         },
         {
          "id": "PAST-R2083-023",
          "label": "2083 recall · Q23"
         }
        ]
       },
       {
        "id": "water-hammer",
        "title": "Water hammer: pressure rise and wave speed",
        "html": "<p>Closing a valve stops the moving water and raises the pressure, a surge called <em>water hammer</em>. For gradual closure, slower than the wave's round trip, the rise follows from decelerating the column over the closure time.</p><p>The pressure wave travels at the speed of sound in water, reduced by the elasticity of the pipe wall. For a thin elastic pipe the speed depends on the ratio of the water's bulk modulus to the stiffness of the wall.</p><p>Closure counts as <em>sudden</em> when it takes less than \\(2L/C\\), the time for the wave to reach the reservoir and return. The rise is then the full Joukowsky value \\(\\rho CV\\), whatever the pipe length: water at 1 m/s with a wave speed of 1000 m/s gives about 1 MPa, some 100 m of head.</p><p>Surges are limited by closing valves slowly, by <em>surge tanks</em> that give the decelerating water somewhere to go on long penstocks, and by air vessels, relief valves and bursting discs on pumping mains.</p>",
        "formulas": [
         {
          "label": "Gradual closure",
          "tex": "h = \\dfrac{L V}{g T}"
         },
         {
          "label": "Wave speed in an elastic pipe",
          "tex": "C = \\dfrac{\\sqrt{K/\\rho}}{\\sqrt{1 + KD/(E t)}}"
         },
         {
          "label": "Sudden closure (Joukowsky)",
          "tex": "\\Delta p = \\rho\\,C\\,V, \\qquad h = \\dfrac{CV}{g}"
         },
         {
          "label": "Critical closure time",
          "tex": "T_c = \\dfrac{2L}{C}"
         }
        ],
        "example": {
         "title": "Worked examples: closure velocity and wave speed",
         "html": "<p>A 20 m rise in a 1 km pipe closed over 10 s, using \\(V = hgT/L\\):</p>\\[V = \\dfrac{20 \\times 9.81 \\times 10}{1000} \\approx 2\\ \\text{m/s}\\]<p>For D = 0.4 m and t = 4 mm, \\(KD/Et = 1\\) and \\(\\sqrt{K/\\rho} = 1449\\) m/s, so \\(C = 1449/\\sqrt{2} \\approx 1025\\) m/s, about 1000 m/s.</p>"
        },
        "moreHtml": "<p>After a sudden closure the high-pressure wave runs up to the reservoir, reflects as a low-pressure wave and returns, so the pressure at the valve swings between high and low every \\(2L/C\\) until friction damps it. If the low phase falls to vapour pressure, the water column separates and then rejoins violently.</p><p>A rigid pipe carries the wave at \\(\\sqrt{K/\\rho}\\), about 1440 m/s in water. A thin, elastic pipe stretches under the surge, so the wave is slower and the pressure rise smaller.</p><p>A surge tank is placed as close to the turbine as the ground allows, so that only the short penstock beyond it feels the full water hammer.</p>",
        "points": [
         {
          "html": "A 20 m water-hammer rise from a 10 s closure of a valve on a 1 km pipe means the water was flowing at about 2 m/s.",
          "sources": [
           {
            "id": "PAST-04-063",
            "label": "Set 4 · Q63"
           }
          ]
         },
         {
          "html": "In a 40 cm steel pipe with 4 mm walls, water hammer travels at about 1000 m/s.",
          "sources": [
           {
            "id": "PAST-05-066",
            "label": "Set 5 · Q66"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-063",
          "label": "Set 4 · Q63"
         },
         {
          "id": "PAST-05-066",
          "label": "Set 5 · Q66"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Hagen–Poiseuille",
        "tex": "h_f = \\dfrac{32\\mu V L}{\\gamma D^2}"
       },
       {
        "label": "Laminar friction factor",
        "tex": "f = \\dfrac{64}{Re}"
       },
       {
        "label": "Darcy–Weisbach",
        "tex": "h_f = \\dfrac{f L V^2}{2 g D}"
       },
       {
        "label": "In terms of discharge",
        "tex": "h_f = \\dfrac{f L Q^2}{12.1\\, D^5}"
       },
       {
        "label": "Sudden expansion",
        "tex": "h_L = \\dfrac{(V_1 - V_2)^2}{2g}"
       },
       {
        "label": "Water hammer, gradual closure",
        "tex": "h = \\dfrac{L V}{g T}"
       },
       {
        "label": "Wave speed",
        "tex": "C = \\dfrac{\\sqrt{K/\\rho}}{\\sqrt{1 + KD/(E t)}}"
       },
       {
        "label": "Reynolds number",
        "tex": "Re = \\dfrac{VD}{\\nu}"
       },
       {
        "label": "Sudden closure (Joukowsky)",
        "tex": "\\Delta p = \\rho\\,C\\,V"
       },
       {
        "label": "Dupuit's equivalent pipe",
        "tex": "\\dfrac{L}{D^5} = \\sum \\dfrac{L_i}{D_i^5}"
       },
       {
        "label": "Hardy Cross correction",
        "tex": "\\Delta Q = -\\dfrac{\\sum r Q |Q|^{n-1}}{n \\sum r |Q|^{n-1}}"
       }
      ],
      "cautions": [],
      "gaps": [
       "Pipe networks and surge tanks are explained here, but the past papers set no numerical questions on them."
      ]
     },
     "ACiE0305": {
      "code": "ACiE0305",
      "questionCount": 31,
      "format": 2,
      "summary": "<p>Open-channel flow has a free surface at atmospheric pressure, so gravity drives it and the depth adjusts to the flow. This subchapter describes channel geometry and the most economical sections, classifies flow in time and space and by the Reynolds and Froude numbers, and computes uniform flow with Manning's and Chezy's formulas, including boundary shear and the start of sediment motion.</p><p>It then develops specific energy and specific force, critical and alternate depths, gradually varied flow profiles and their controls, and the hydraulic jump as an energy dissipator.</p>",
      "blocks": [
       {
        "id": "channel-geometry-and-efficient-sections",
        "title": "Channel geometry and the most economical sections",
        "html": "<p>A channel section is described by its flow area A, its wetted perimeter P, the length of boundary in contact with water, and the hydraulic radius \\(R = A/P\\). For a trapezoid of bed width B, depth y and side slope z horizontal to 1 vertical, each sloping side is \\(y\\sqrt{1 + z^2}\\) long. In a wide rectangular channel the sides hardly count, so R is practically the depth.</p><p>The most economical section carries a given discharge with the least wetted perimeter. For a trapezoid, half the top width equals one sloping side, so the top width is double the sloping-side length, and \\(R = y/2\\). The best triangular section has 45° sides and \\(R = y/2\\sqrt{2}\\).</p><p>Two more elements describe a section: the top width T and the <em>hydraulic depth</em> \\(D = A/T\\), used in the Froude number. The best rectangle is twice as wide as it is deep. The best trapezoid of all is half a regular hexagon, with sides at 60° to the horizontal, and every best section has its sides tangent to a semicircle centred on the water surface.</p><p>A circular conduit flowing part full carries its greatest velocity at about 0.81 of its diameter and its greatest discharge at about 0.94, not when full, because near the crown the perimeter grows faster than the area.</p>",
        "formulas": [
         {
          "label": "Trapezoidal area",
          "tex": "A = (B + zy)y"
         },
         {
          "label": "Trapezoidal wetted perimeter",
          "tex": "P = B + 2y\\sqrt{1 + z^2}"
         },
         {
          "label": "Most economical triangle",
          "tex": "A = y^2, \\quad P = 2\\sqrt{2}\\,y, \\quad R = \\dfrac{y}{2\\sqrt{2}}"
         },
         {
          "label": "Best rectangular section",
          "tex": "b = 2y, \\qquad R = \\dfrac{y}{2}"
         },
         {
          "label": "Best trapezoidal section",
          "tex": "\\dfrac{B + 2zy}{2} = y\\sqrt{1 + z^2}, \\qquad R = \\dfrac{y}{2}"
         }
        ],
        "example": {
         "title": "Worked example: the most economical rectangle",
         "html": "<p>Design the best rectangular channel for 10 m<sup>3</sup>/s with n = 0.015 and a slope of 1 in 1000. With b = 2y, the area is \\(2y^2\\) and R = y/2:</p>\\[\\begin{aligned} 10 &amp;= \\dfrac{1}{0.015}\\,(2y^2)\\left(\\dfrac{y}{2}\\right)^{2/3}\\sqrt{0.001} \\\\ y^{8/3} &amp;= 3.76, \\qquad y \\approx 1.64\\ \\text{m} \\end{aligned}\\]<p>so the bed width is about 3.29 m.</p>"
        },
        "moreHtml": "<p>The economical section comes from minimising P at a fixed area. For a trapezoid, setting \\(dP/dy = 0\\) with A and z constant gives \\(B + 2zy = 2y\\sqrt{1 + z^2}\\), which says that half the top width equals a sloping side; substituting back gives \\(R = y/2\\) for any side slope.</p><p>In practice the side slope is set by the stability of the bank material rather than by economy: about 1.5H:1V in firm earth and 2H:1V or flatter in sandy soil. Lined channels can have steeper sides, and a freeboard is added above the design depth.</p>",
        "points": [
         {
          "html": "The wetted perimeter of a trapezoid with bed width B, depth y and side slope z:1 is \\(B + 2y\\sqrt{1 + z^2}\\).",
          "sources": [
           {
            "id": "PAST-08-077",
            "label": "Set 8 · Q77"
           },
           {
            "id": "PAST-17-076",
            "label": "Set 17 · Q76"
           }
          ]
         },
         {
          "html": "In a wide rectangular channel the hydraulic radius is practically the flow depth y.",
          "sources": [
           {
            "id": "PAST-11-028",
            "label": "Set 11 · Q28"
           }
          ]
         },
         {
          "html": "In the most economical trapezoidal section the top width is double the side slope length, the length of one sloping side.",
          "sources": [
           {
            "id": "PAST-04-048",
            "label": "Set 4 · Q48"
           }
          ]
         },
         {
          "html": "The hydraulic radius of the most economical triangular channel is \\(y/2\\sqrt{2}\\).",
          "sources": [
           {
            "id": "PAST-07-065",
            "label": "Set 7 · Q65"
           },
           {
            "id": "PAST-15-064",
            "label": "Set 15 · Q64"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-08-077",
          "label": "Set 8 · Q77"
         },
         {
          "id": "PAST-17-076",
          "label": "Set 17 · Q76"
         },
         {
          "id": "PAST-11-028",
          "label": "Set 11 · Q28"
         },
         {
          "id": "PAST-04-048",
          "label": "Set 4 · Q48"
         },
         {
          "id": "PAST-07-065",
          "label": "Set 7 · Q65"
         },
         {
          "id": "PAST-15-064",
          "label": "Set 15 · Q64"
         }
        ]
       },
       {
        "id": "flow-types-froude-and-reynolds",
        "title": "Types of flow, the Froude number and the Reynolds number",
        "html": "<p>Open-channel flow is <em>uniform</em> if the depth does not change along the channel and <em>steady</em> if it does not change with time. Gradually varied flow, such as a backwater curve, is steady but non-uniform. Based on the hydraulic radius, flow is laminar below a Reynolds number of about 500 and turbulent above about 2000.</p><p>The <em>Froude number</em> uses the hydraulic mean depth \\(D = A/T\\), area over top width. Flow is subcritical when \\(Fr \\lt 1\\), critical at 1 and supercritical when \\(Fr \\gt 1\\). On a steep slope the normal depth lies below the critical depth, so uniform flow there is supercritical.</p><p>The Froude number compares the flow velocity with the speed of a small surface wave, \\(\\sqrt{gD}\\). In subcritical flow such waves can travel upstream, so the depth is controlled from downstream; in supercritical flow they are swept away, so control lies upstream. Near critical flow the surface is wavy and unstable.</p><p>Flow is <em>rapidly varied</em> where the depth changes abruptly over a short length, as in a hydraulic jump or over a weir, and <em>unsteady</em> in floods and surges.</p>",
        "formulas": [
         {
          "label": "Froude number",
          "tex": "Fr = \\dfrac{V}{\\sqrt{gD}}, \\qquad D = \\dfrac{A}{T}"
         },
         {
          "label": "Speed of a small surface wave",
          "tex": "c = \\sqrt{gD}"
         },
         {
          "label": "Channel Reynolds number",
          "tex": "Re = \\dfrac{VR}{\\nu}"
         }
        ],
        "example": {
         "title": "Worked examples: hydraulic depth and Froude number",
         "html": "<p>A triangle with 2H:1V sides has \\(A = 2y^2\\) and \\(T = 4y\\), so \\(D = y/2\\).</p><p>With Q = 261.03 m<sup>3</sup>/s, A = 42 m<sup>2</sup> and T = 6 m: \\(V = 6.22\\) m/s and \\(D = 7\\) m, so \\(Fr = 6.22/\\sqrt{9.81 \\times 7} \\approx 0.75\\).</p>"
        },
        "moreHtml": "<p>The channel Reynolds number is usually written with the hydraulic radius. Using 4R, the hydraulic diameter, instead moves the limits to about 2000 and 8000, in line with pipes. Practically all canal and river flows are turbulent.</p><p>The two numbers combine into four regimes: subcritical-laminar, subcritical-turbulent, supercritical-laminar and supercritical-turbulent. The laminar regimes appear only in thin sheet flows, such as rain running off a paved surface.</p><p>Slopes are classed by comparing normal and critical depths: mild when \\(y_n \\gt y_c\\), critical when they are equal and steep when \\(y_n \\lt y_c\\).</p>",
        "points": [
         {
          "html": "Gradually varied flow is steady non-uniform flow: depth changes along the channel, not with time.",
          "sources": [
           {
            "id": "PAST-07-057",
            "label": "Set 7 · Q57"
           }
          ]
         },
         {
          "html": "Channel flow is laminar when \\(Re \\lt 500\\).",
          "sources": [
           {
            "id": "PAST-18-050",
            "label": "Set 18 · Q50"
           }
          ]
         },
         {
          "html": "The Froude number uses the hydraulic mean depth, area divided by top width.",
          "sources": [
           {
            "id": "PAST-08-026",
            "label": "Set 8 · Q26"
           }
          ]
         },
         {
          "html": "For a triangular channel with 2H:1V side slopes, \\(Fr = V/\\sqrt{g \\cdot y/2}\\).",
          "sources": [
           {
            "id": "PAST-05-004",
            "label": "Set 5 · Q4"
           }
          ]
         },
         {
          "html": "Supercritical flow has \\(Fr \\gt 1\\).",
          "sources": [
           {
            "id": "PAST-10-020",
            "label": "Set 10 · Q20"
           },
           {
            "id": "PAST-14-006",
            "label": "Set 14 · Q6"
           }
          ]
         },
         {
          "html": "Supercritical flow occurs in a channel with a steep slope.",
          "sources": [
           {
            "id": "PAST-15-019",
            "label": "Set 15 · Q19"
           }
          ]
         },
         {
          "html": "A channel passing 261.03 m<sup>3</sup>/s through 42 m<sup>2</sup> with a 6 m top width has a Froude number of 0.75.",
          "sources": [
           {
            "id": "PAST-18-073",
            "label": "Set 18 · Q73"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-07-057",
          "label": "Set 7 · Q57"
         },
         {
          "id": "PAST-18-050",
          "label": "Set 18 · Q50"
         },
         {
          "id": "PAST-08-026",
          "label": "Set 8 · Q26"
         },
         {
          "id": "PAST-05-004",
          "label": "Set 5 · Q4"
         },
         {
          "id": "PAST-10-020",
          "label": "Set 10 · Q20"
         },
         {
          "id": "PAST-14-006",
          "label": "Set 14 · Q6"
         },
         {
          "id": "PAST-15-019",
          "label": "Set 15 · Q19"
         },
         {
          "id": "PAST-18-073",
          "label": "Set 18 · Q73"
         }
        ]
       },
       {
        "id": "manning-and-chezy-uniform-flow",
        "title": "Uniform flow: Manning's and Chezy's formulas",
        "html": "<p>Uniform flow is worked out with Manning's or Chezy's formula. Equating the two gives Chezy's C in terms of Manning's n. In Manning's formula velocity varies as \\(\\sqrt{S}/n\\), so doubling n needs four times the slope for the same velocity.</p><p>Manning's rugosity reflects the boundary roughness; for a bed of loose grains Strickler relates it to the grain size d in metres. Most exam problems find R from A and P, then solve Manning's formula for the slope or for n.</p><p>Uniform flow develops where the component of the water's weight down the slope just balances the boundary shear. The bed, water surface and energy line are then parallel, the depth is the <em>normal depth</em>, and the average boundary shear is \\(\\gamma RS\\).</p><p>Typical values of n are 0.012 to 0.015 for concrete, 0.022 to 0.030 for clean earth channels and 0.030 to 0.050 or more for natural streams with stones and weeds. The discharge can be written with the <em>conveyance</em> K, which depends only on the section.</p>",
        "formulas": [
         {
          "label": "Manning and Chezy",
          "tex": "V = \\dfrac{1}{n} R^{2/3} S^{1/2}, \\qquad V = C\\sqrt{RS}"
         },
         {
          "label": "Link and Strickler's rugosity",
          "tex": "C = \\dfrac{R^{1/6}}{n}, \\qquad n = \\dfrac{d^{1/6}}{24}"
         },
         {
          "label": "Boundary shear in uniform flow",
          "tex": "\\tau_0 = \\gamma R S"
         },
         {
          "label": "Conveyance",
          "tex": "Q = K\\sqrt{S}, \\qquad K = \\dfrac{A R^{2/3}}{n}"
         },
         {
          "label": "Shields parameter",
          "tex": "\\theta = \\dfrac{\\tau_0}{(\\gamma_s - \\gamma)\\,d}"
         }
        ],
        "example": {
         "title": "Worked examples: slope and rugosity",
         "html": "<p>A = 8 m<sup>2</sup>, P = 8 m, Q = 33.33 m<sup>3</sup>/s, n = 0.012: R = 1 m and V = 4.17 m/s, so \\(S = (0.012 \\times 4.17)^2 \\approx 0.0025\\), 1 in 400.</p><p>A trapezoid 3 m wide, 2 m deep, sides 1H:2V: A = 8 m<sup>2</sup> and P = 7.47 m, so R = 1.07 m. At 2.5 m/s on 1 in 1000:</p>\\[n = \\dfrac{1.047 \\times 0.0316}{2.5} \\approx 0.013\\]"
        },
        "moreHtml": "<p>In an erodible channel the bed grains begin to move when the boundary shear exceeds a critical value. Shields expressed this as a dimensionless shear stress plotted against the particle Reynolds number \\(u_* d/\\nu\\); for coarse sand and gravel the critical value is roughly 0.05, so larger grains need proportionally more shear.</p><p>Stable earth channels are designed so that \\(\\gamma RS\\) stays below the critical tractive force of the bed and banks, with a lower allowance on the sloping sides. Alluvial canals that carry sediment are designed instead by regime theories, which choose a section and slope that neither silt nor scour.</p>",
        "points": [
         {
          "html": "Chezy's C relates to Manning's n as \\(C = R^{1/6}/n\\).",
          "sources": [
           {
            "id": "PAST-16-014",
            "label": "Set 16 · Q14"
           }
          ]
         },
         {
          "html": "If Manning's n is doubled, the slope must quadruple to keep the same velocity.",
          "sources": [
           {
            "id": "PAST-09-071",
            "label": "Set 9 · Q71"
           }
          ]
         },
         {
          "html": "A section of 8 m<sup>2</sup> area and 8 m wetted perimeter carrying 33.33 m<sup>3</sup>/s with n = 0.012 needs a bed slope of 1 in 400.",
          "sources": [
           {
            "id": "PAST-10-073",
            "label": "Set 10 · Q73"
           },
           {
            "id": "PAST-18-072",
            "label": "Set 18 · Q72"
           }
          ]
         },
         {
          "html": "A triangular section of 66.72 m<sup>2</sup> and 24.03 m perimeter carrying 117.6 cumec at 1 in 500 has n = 0.05.",
          "sources": [
           {
            "id": "PAST-12-071",
            "label": "Set 12 · Q71"
           }
          ]
         },
         {
          "html": "A 3 m wide, 2 m deep trapezoid with 1H:2V sides flowing at 2.5 m/s on 1 in 1000 has Manning's n = 0.013.",
          "sources": [
           {
            "id": "PAST-17-067",
            "label": "Set 17 · Q67"
           }
          ]
         },
         {
          "html": "A 4 m wide channel 3 m deep with specific energy 3.13 m and C = 50 has a bed slope of about 1 in 1200.",
          "sources": [
           {
            "id": "PAST-14-078",
            "label": "Set 14 · Q78"
           }
          ]
         },
         {
          "html": "For 6 cm particles, Strickler's relation gives Manning's rugosity of 0.026.",
          "sources": [
           {
            "id": "PAST-15-065",
            "label": "Set 15 · Q65"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-16-014",
          "label": "Set 16 · Q14"
         },
         {
          "id": "PAST-09-071",
          "label": "Set 9 · Q71"
         },
         {
          "id": "PAST-10-073",
          "label": "Set 10 · Q73"
         },
         {
          "id": "PAST-18-072",
          "label": "Set 18 · Q72"
         },
         {
          "id": "PAST-12-071",
          "label": "Set 12 · Q71"
         },
         {
          "id": "PAST-17-067",
          "label": "Set 17 · Q67"
         },
         {
          "id": "PAST-14-078",
          "label": "Set 14 · Q78"
         },
         {
          "id": "PAST-15-065",
          "label": "Set 15 · Q65"
         }
        ]
       },
       {
        "id": "specific-energy-critical-depth-and-profiles",
        "title": "Specific energy, critical and alternate depths, and GVF profiles",
        "html": "<p>The <em>specific energy</em> is the energy per unit weight measured from the channel bed, depth plus velocity head. For a given discharge it is least at the <em>critical depth</em>, where \\(Fr = 1\\); equally, at critical depth a given specific energy passes the greatest discharge. Above the minimum, every specific energy can be carried at two depths, one subcritical and one supercritical: the <em>alternate depths</em>.</p><p>In a rectangular channel carrying q per unit width, the minimum specific energy is \\(1.5y_c\\) and the critical velocity head is half the critical depth. The <em>specific force</em>, momentum flux plus hydrostatic force per unit weight, is also least at critical depth.</p><p>Gradually varied flow profiles are named by the slope, M, S, C, H or A for mild, steep, critical, horizontal and adverse, and by zone: zone 1 lies above both normal and critical depths, zone 2 between them and zone 3 below both. An M1 backwater curve forms behind a weir and an M3 curve below a sluice gate.</p><p>Where a mild channel breaks into a steep one, the flow passes through critical depth at the break, giving an M2 curve upstream and an S2 curve downstream.</p>",
        "formulas": [
         {
          "label": "Specific energy",
          "tex": "E = y + \\dfrac{V^2}{2g}"
         },
         {
          "label": "Critical depth, rectangular channel",
          "tex": "y_c = \\left(\\dfrac{q^2}{g}\\right)^{1/3}, \\qquad E_{\\min} = 1.5\\,y_c"
         },
         {
          "label": "Critical flow, any section",
          "tex": "\\dfrac{Q^2 T}{g A^3} = 1"
         },
         {
          "label": "Specific force",
          "tex": "M = \\dfrac{Q^2}{gA} + A\\bar{z}"
         },
         {
          "label": "Gradually varied flow equation",
          "tex": "\\dfrac{dy}{dx} = \\dfrac{S_0 - S_f}{1 - Fr^2}"
         }
        ],
        "example": {
         "title": "Worked example: critical depth and minimum energy",
         "html": "<p>A rectangular channel carries 4 m<sup>3</sup>/s per metre width.</p>\\[\\begin{aligned} y_c &amp;= \\left(\\dfrac{4^2}{9.81}\\right)^{1/3} = 1.18\\ \\text{m} \\\\ E_{\\min} &amp;= 1.5 \\times 1.18 = 1.77\\ \\text{m} \\\\ V_c &amp;= \\dfrac{4}{1.18} = 3.40\\ \\text{m/s} \\end{aligned}\\]<p>As a check, \\(V_c^2/2g = 0.59\\) m, half the critical depth.</p>"
        },
        "moreHtml": "<p>The gradually varied flow equation explains each shape. In zone 1, \\(S_f \\lt S_0\\) and the flow is subcritical, so the depth increases downstream and the surface tends towards horizontal. In zone 2 of a mild slope, \\(S_f \\gt S_0\\), so the depth falls towards critical, as in the drawdown to a free overfall.</p><p>Controls such as weirs, gates, free overfalls and slope breaks fix the depth at a point. Subcritical profiles are computed upstream from a downstream control and supercritical ones downstream from an upstream control, by the direct-step or standard-step method.</p><p>A raised hump or a narrowing can choke a channel: if the specific energy available is less than the minimum needed there, the upstream depth rises until it is enough.</p>",
        "points": [
         {
          "html": "Alternate depths are those which occur at the same specific energy for a given discharge.",
          "sources": [
           {
            "id": "PAST-10-030",
            "label": "Set 10 · Q30"
           }
          ]
         },
         {
          "html": "The critical depth is where specific energy is least and discharge greatest.",
          "sources": [
           {
            "id": "PAST-14-013",
            "label": "Set 14 · Q13"
           }
          ]
         },
         {
          "html": "A mild slope followed by a steep slope gives M2 and S2 profiles.",
          "sources": [
           {
            "id": "PAST-16-058",
            "label": "Set 16 · Q58"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-10-030",
          "label": "Set 10 · Q30"
         },
         {
          "id": "PAST-14-013",
          "label": "Set 14 · Q13"
         },
         {
          "id": "PAST-16-058",
          "label": "Set 16 · Q58"
         }
        ]
       },
       {
        "id": "hydraulic-jump",
        "title": "The hydraulic jump: sequent depths, energy loss and types",
        "html": "<p>A <em>hydraulic jump</em> is the sudden rise from shallow supercritical flow to deep subcritical flow, with violent turbulence that dissipates energy. The depths before and after, the sequent or conjugate depths, have equal specific force and are linked in a rectangular channel by the Bélanger equation.</p><p>Jumps are classed by the approach Froude number: undular 1 to 1.7, weak 1.7 to 2.5, oscillating 2.5 to 4.5, steady 4.5 to 9 and strong above 9. The steady jump is the best for stilling basins. A jump is about 5 to 7 times its height long.</p><p>A jump is analysed with the momentum equation because its energy loss is not known in advance. The loss grows quickly with the approach Froude number, from a few per cent in an undular jump to over 70% in a strong one.</p><p>Jumps dissipate energy below spillways, gates and falls so that the bed downstream is not scoured; they also raise water levels for diversion and mix chemicals in treatment works. A jump forms where the tailwater depth equals the sequent depth: with less tailwater it is swept downstream, and with more it is drowned.</p>",
        "formulas": [
         {
          "label": "Sequent depth ratio",
          "tex": "\\dfrac{y_2}{y_1} = 0.5\\left[\\sqrt{1 + 8F_1^2} - 1\\right]"
         },
         {
          "label": "Energy lost in the jump",
          "tex": "E_L = \\dfrac{(y_2 - y_1)^3}{4y_1 y_2}"
         },
         {
          "label": "Length of the jump",
          "tex": "L_j \\approx 6(y_2 - y_1)"
         },
         {
          "label": "Momentum balance across a jump",
          "tex": "\\begin{aligned} &amp;\\dfrac{q^2}{g y_1} + \\dfrac{y_1^2}{2} \\\\ &amp;= \\dfrac{q^2}{g y_2} + \\dfrac{y_2^2}{2} \\end{aligned}"
         }
        ],
        "example": {
         "title": "Worked examples: approach Froude number and energy loss",
         "html": "<p>A ratio of 16.48 gives \\(\\sqrt{1 + 8F^2} = 33.96\\), so \\(F^2 \\approx 144\\) and \\(F \\approx 12\\).</p><p>Sequent depths 0.25 m and 1.25 m:</p>\\[E_L = \\dfrac{1^3}{4 \\times 0.25 \\times 1.25} = 0.8\\ \\text{m}\\]"
        },
        "moreHtml": "<p>The Bélanger equation comes from equating the specific force per unit width before and after the jump and solving the resulting quadratic for \\(y_2/y_1\\).</p><p>A stilling basin is sized to hold the jump over the whole range of discharges. Its floor is set low enough, or chute blocks, baffles and an end sill are added, to supply the tailwater the jump needs. The height of the jump is \\(y_2 - y_1\\), and the relative loss \\(E_L/E_1\\) measures its efficiency as a dissipator.</p>",
        "points": [
         {
          "html": "The sequent depth formula is \\(y_2/y_1 = 0.5\\{\\sqrt{8F^2 + 1} - 1\\}\\).",
          "sources": [
           {
            "id": "PAST-09-007",
            "label": "Set 9 · Q7"
           }
          ]
         },
         {
          "html": "A sequent depth ratio of 16.48 means an approach Froude number of about 12.",
          "sources": [
           {
            "id": "PAST-09-065",
            "label": "Set 9 · Q65"
           },
           {
            "id": "PAST-17-075",
            "label": "Set 17 · Q75"
           }
          ]
         },
         {
          "html": "A jump between 0.25 m and 1.25 m depths loses 0.8 m of energy.",
          "sources": [
           {
            "id": "PAST-12-073",
            "label": "Set 12 · Q73"
           }
          ]
         },
         {
          "html": "A steady jump forms for approach Froude numbers of 4.5–9.",
          "sources": [
           {
            "id": "PAST-09-028",
            "label": "Set 9 · Q28"
           }
          ]
         },
         {
          "html": "The length of a hydraulic jump is 5-7 times the jump height.",
          "sources": [
           {
            "id": "PAST-04-034",
            "label": "Set 4 · Q34"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-09-007",
          "label": "Set 9 · Q7"
         },
         {
          "id": "PAST-09-065",
          "label": "Set 9 · Q65"
         },
         {
          "id": "PAST-17-075",
          "label": "Set 17 · Q75"
         },
         {
          "id": "PAST-12-073",
          "label": "Set 12 · Q73"
         },
         {
          "id": "PAST-09-028",
          "label": "Set 9 · Q28"
         },
         {
          "id": "PAST-04-034",
          "label": "Set 4 · Q34"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Hydraulic radius",
        "tex": "R = \\dfrac{A}{P}"
       },
       {
        "label": "Trapezoid perimeter",
        "tex": "P = B + 2y\\sqrt{1 + z^2}"
       },
       {
        "label": "Froude number",
        "tex": "Fr = \\dfrac{V}{\\sqrt{gD}}"
       },
       {
        "label": "Manning",
        "tex": "V = \\dfrac{1}{n} R^{2/3} S^{1/2}"
       },
       {
        "label": "Chezy",
        "tex": "V = C\\sqrt{RS}"
       },
       {
        "label": "Chezy–Manning link",
        "tex": "C = \\dfrac{R^{1/6}}{n}"
       },
       {
        "label": "Strickler",
        "tex": "n = \\dfrac{d^{1/6}}{24}"
       },
       {
        "label": "Specific energy",
        "tex": "E = y + \\dfrac{V^2}{2g}"
       },
       {
        "label": "Sequent depths",
        "tex": "\\dfrac{y_2}{y_1} = 0.5\\left[\\sqrt{1 + 8F_1^2} - 1\\right]"
       },
       {
        "label": "Energy lost in a jump",
        "tex": "E_L = \\dfrac{(y_2 - y_1)^3}{4y_1 y_2}"
       },
       {
        "label": "Critical depth, rectangular",
        "tex": "y_c = \\left(\\dfrac{q^2}{g}\\right)^{1/3}"
       },
       {
        "label": "Boundary shear",
        "tex": "\\tau_0 = \\gamma R S"
       },
       {
        "label": "Gradually varied flow",
        "tex": "\\dfrac{dy}{dx} = \\dfrac{S_0 - S_f}{1 - Fr^2}"
       },
       {
        "label": "Best rectangle",
        "tex": "b = 2y, \\qquad R = \\dfrac{y}{2}"
       }
      ],
      "cautions": [
       {
        "id": "wetted-perimeter-repeated-option-set8",
        "status": "review",
        "prompt": "The paper repeats the correct wetted-perimeter option as the last choice",
        "html": "<p>The correct expression \\(B + 2y\\sqrt{1 + z^2}\\) is printed twice. The repeat is read as None of these, so the first printing is the answer.</p>",
        "sources": [
         {
          "id": "PAST-08-077",
          "label": "Set 8 · Q77"
         }
        ]
       },
       {
        "id": "wetted-perimeter-repeated-option-set17",
        "status": "review",
        "prompt": "The paper repeats the correct wetted-perimeter option as the last choice",
        "html": "<p>As in Set 8, \\(B + 2y\\sqrt{1 + z^2}\\) appears twice; the first printing is the answer and the repeat is read as None of these.</p>",
        "sources": [
         {
          "id": "PAST-17-076",
          "label": "Set 17 · Q76"
         }
        ]
       },
       {
        "id": "rugosity-cusec-print",
        "status": "review",
        "prompt": "The paper gives the discharge in cusec",
        "html": "<p>Cumec (m<sup>3</sup>/s) is intended: the section is in metres, and 117.6 m<sup>3</sup>/s is the discharge that gives n = 0.05.</p>",
        "sources": [
         {
          "id": "PAST-12-071",
          "label": "Set 12 · Q71"
         }
        ]
       }
      ],
      "gaps": [
       "Specific force, mobile-boundary design and the Shields diagram are explained here, but the past papers set no questions on them."
      ]
     },
     "ACiE0306": {
      "code": "ACiE0306",
      "questionCount": 24,
      "format": 2,
      "summary": "<p>Hydrology follows water round the hydrologic cycle, from the atmosphere to the land and back to the sea. This subchapter explains condensation and the types of precipitation, measures rainfall with gauges and averages it over a catchment, and turns it into runoff through losses, the time of concentration and the rational method.</p><p>It then builds flood hydrographs with the unit hydrograph and the S-curve, measures river flow and sediment, describes the rivers of Nepal, and estimates design floods from return periods, Gumbel's method and risk.</p>",
      "blocks": [
       {
        "id": "hydrology-and-precipitation",
        "title": "Hydrology, condensation and the types of precipitation",
        "html": "<p>Hydrology is the science of how water occurs, circulates and is distributed over the earth and through its atmosphere, the hydrologic cycle. Water vapour condenses when air cools to its dew point: above 0°C it forms liquid dew, below freezing it deposits directly as ice crystals, frost.</p><p>Precipitation needs air to rise and cool. <em>Convective</em> precipitation comes from surface heating, <em>orographic</em> from air forced over mountains, and <em>cyclonic</em> or frontal precipitation from air lifted where it converges into a low-pressure area. At a cold front the advancing cold air wedges under warmer air and lifts it steeply, so the rain is heavy but falls over a small area.</p><p>The cycle links evaporation from oceans and land, transpiration from plants, condensation, precipitation, infiltration, percolation to groundwater and runoff back to the sea. Over any period, a catchment's <em>water balance</em> says that precipitation less evapotranspiration and runoff equals the change in storage in soil, groundwater, lakes and snow.</p><p>Precipitation falls as rain, drizzle, snow, sleet or hail. In Nepal about 80% of the annual rain comes with the summer monsoon, from June to September, and orographic lifting by the Mahabharat range and the Himalaya makes totals vary sharply over short distances.</p>",
        "formulas": [
         {
          "label": "Catchment water balance",
          "tex": "P - E - R = \\Delta S"
         },
         {
          "label": "Lake evaporation from a pan",
          "tex": "E_L = C_p\\,E_{\\text{pan}}, \\qquad C_p \\approx 0.7"
         }
        ],
        "moreHtml": "<p>Condensation needs both cooling to the dew point and nuclei, such as dust, salt or smoke particles, on which droplets form. Droplets grow into raindrops by colliding and merging in warm clouds, or by the growth of ice crystals at the expense of supercooled droplets in cold clouds.</p><p>A warm front lifts warm air gently over a long wedge of cold air, so its rain is lighter but widespread and long-lasting, unlike the brief heavy showers of a cold front. Convective storms are local and intense, typical of hot afternoons in the plains.</p><p>Evaporation from open water is measured with pans such as the Class A pan, whose readings are multiplied by a pan coefficient of about 0.7.</p>",
        "points": [
         {
          "html": "Hydrology is the science of how the waters of the earth and its atmosphere occur, circulate and are distributed.",
          "sources": [
           {
            "id": "PAST-16-048",
            "label": "Set 16 · Q48"
           }
          ]
         },
         {
          "html": "Condensation below freezing point is known as frost.",
          "sources": [
           {
            "id": "PAST-06-003",
            "label": "Set 6 · Q3"
           }
          ]
         },
         {
          "html": "If the dew point is above 0°C, dew will form.",
          "sources": [
           {
            "id": "PAST-06-067",
            "label": "Set 6 · Q67"
           }
          ]
         },
         {
          "html": "Lifting of an air mass by a pressure difference gives cyclonic precipitation.",
          "sources": [
           {
            "id": "PAST-10-059",
            "label": "Set 10 · Q59"
           }
          ]
         },
         {
          "html": "Cold frontal precipitation comes from an advancing cold air mass meeting warmer air; cold fronts move faster than warm fronts.",
          "sources": [
           {
            "id": "PAST-13-024",
            "label": "Set 13 · Q24"
           }
          ]
         },
         {
          "html": "Cold frontal precipitation means a small catchment area with heavy precipitation.",
          "sources": [
           {
            "id": "PAST-15-022",
            "label": "Set 15 · Q22"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-16-048",
          "label": "Set 16 · Q48"
         },
         {
          "id": "PAST-06-003",
          "label": "Set 6 · Q3"
         },
         {
          "id": "PAST-06-067",
          "label": "Set 6 · Q67"
         },
         {
          "id": "PAST-10-059",
          "label": "Set 10 · Q59"
         },
         {
          "id": "PAST-13-024",
          "label": "Set 13 · Q24"
         },
         {
          "id": "PAST-15-022",
          "label": "Set 15 · Q22"
         }
        ]
       },
       {
        "id": "rain-gauges-and-average-rainfall",
        "title": "Rain gauges and the average rainfall over a catchment",
        "html": "<p>Rain gauges are of two kinds. A non-recording gauge only collects the total; a <em>recording</em> or self-registering gauge traces the cumulative rainfall against time, giving intensity and duration as well as depth, which makes it the more accurate type.</p><p>The average depth over a catchment is found by the arithmetic mean, by Thiessen polygons that weight each gauge by its area, or by <em>isohyets</em>, contours of equal rainfall. Isohyets can be drawn to follow the terrain, so the isohyetal method is the most accurate, especially in hilly catchments.</p><p>The Thiessen polygons are built from the perpendicular bisectors of the lines joining neighbouring gauges, so each gauge represents the area nearer to it than to any other. The method suits flat ground and needs redrawing only when a gauge is added or lost.</p><p>A missing record is estimated from three or more nearby stations by the <em>normal ratio</em> method, which scales each neighbour's reading by the ratio of normal annual rainfalls. A <em>double-mass curve</em> plots a station's cumulative rainfall against that of a group of stations; a break in slope reveals a change in the gauge's site or exposure, and the record is corrected in proportion to the slopes.</p>",
        "formulas": [
         {
          "label": "Thiessen average",
          "tex": "\\bar{P} = \\dfrac{\\sum P_i A_i}{\\sum A_i}"
         },
         {
          "label": "Isohyetal average",
          "tex": "\\bar{P} = \\dfrac{\\sum A_i\\,(P_i + P_{i+1})/2}{\\sum A_i}"
         },
         {
          "label": "Normal ratio method",
          "tex": "P_x = \\dfrac{N_x}{m}\\sum_{i=1}^{m} \\dfrac{P_i}{N_i}"
         },
         {
          "label": "Optimum number of gauges",
          "tex": "N = \\left(\\dfrac{C_v}{\\varepsilon}\\right)^2"
         }
        ],
        "example": {
         "title": "Worked examples: Thiessen average and a missing record",
         "html": "<p>Gauges reading 40, 60 and 80 mm have Thiessen areas of 30, 50 and 20 km<sup>2</sup>:</p>\\[\\begin{aligned} \\bar{P} &amp;= \\dfrac{1200 + 3000 + 1600}{100} \\\\ &amp;= 58\\ \\text{mm} \\end{aligned}\\]<p>Station X, normal annual rainfall 1000 mm, missed a storm. Neighbours with normals of 900, 1100 and 1200 mm recorded 90, 110 and 96 mm:</p>\\[\\begin{aligned} P_x &amp;= \\dfrac{1000}{3}\\,(0.10 + 0.10 + 0.08) \\\\ &amp;\\approx 93\\ \\text{mm} \\end{aligned}\\]"
        },
        "moreHtml": "<p>The standard non-recording gauge is the Symons type, read once a day. Recording gauges include the tipping-bucket, weighing-bucket and natural-syphon types; the tipping bucket suits telemetry, and the weighing type can also record snow.</p><p>A gauge should stand on level, open ground, at least twice the height of any obstruction away from it. The number of gauges needed for a given accuracy follows from the coefficient of variation of the existing gauge readings, in per cent, and the allowable error in the mean, often 10%.</p>",
        "points": [
         {
          "html": "The isohyetal method gives an accurate average rainfall for a hilly catchment, following the terrain.",
          "sources": [
           {
            "id": "PAST-04-035",
            "label": "Set 4 · Q35"
           }
          ]
         },
         {
          "html": "The isohyetal method is the most accurate way to find average precipitation.",
          "sources": [
           {
            "id": "PAST-13-023",
            "label": "Set 13 · Q23"
           }
          ]
         },
         {
          "html": "The recording type of rain gauge is very accurate, giving depth, intensity and duration.",
          "sources": [
           {
            "id": "PAST-04-036",
            "label": "Set 4 · Q36"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-035",
          "label": "Set 4 · Q35"
         },
         {
          "id": "PAST-13-023",
          "label": "Set 13 · Q23"
         },
         {
          "id": "PAST-04-036",
          "label": "Set 4 · Q36"
         }
        ]
       },
       {
        "id": "catchment-response-and-rational-method",
        "title": "Catchment shape, time of concentration and the rational method",
        "html": "<p>The <em>time of concentration</em> is the longest time rain takes to reach the outlet, from the hydraulically most remote point. A storm lasting that long makes the whole catchment contribute, so the rational method takes the design intensity for a duration equal to it.</p><p>Catchment shape matters. A fern-shaped, elongated catchment has a long main stream with short tributaries joining along it; a fan-shaped one has short streams converging near the outlet and peaks higher and earlier. With I in mm/h and A in hectares, the rational peak is \\(Q = CIA/360\\) in m<sup>3</sup>/s.</p><p>Not all rain runs off. Interception, depression storage, evaporation and above all infiltration are taken first, and the <em>effective rainfall</em> left over produces the direct runoff. The φ-index is the constant loss rate above which all rain runs off; Horton's equation describes an infiltration capacity that decays from an initial to a steady value.</p><p>The runoff coefficient C is about 0.7 to 0.95 for roofs and pavements, 0.3 to 0.5 for suburban areas and 0.1 to 0.3 for parks and forest. The rational method is reliable only for small catchments, typically under about 50 km<sup>2</sup>.</p>",
        "formulas": [
         {
          "label": "Rational method (I in mm/h, A in ha)",
          "tex": "Q = \\dfrac{C I A}{360}"
         },
         {
          "label": "Kirpich time of concentration (minutes)",
          "tex": "t_c = 0.01947\\,L^{0.77} S^{-0.385}"
         },
         {
          "label": "Horton's infiltration capacity",
          "tex": "f = f_c + (f_0 - f_c)\\,e^{-kt}"
         },
         {
          "label": "φ-index over the effective duration",
          "tex": "\\phi = \\dfrac{P - R}{t_e}"
         }
        ],
        "example": {
         "title": "Worked examples: rational peak discharge",
         "html": "<p>225 ha, C = 0.33, I = 7.78 cm/h = 77.8 mm/h:</p>\\[Q = \\dfrac{0.33 \\times 77.8 \\times 225}{360} \\approx 16\\ \\text{m}^3/\\text{s}\\]<p>72 ha, C = 0.5, I = 100 mm/h: \\(Q = 0.5 \\times 100 \\times 72/360 = 10\\) m<sup>3</sup>/s.</p>"
        },
        "moreHtml": "<p>The rational method assumes rain that is uniform in space and time and lasts at least the time of concentration, so that the whole catchment contributes at once; the peak is then a fraction C of the rainfall rate over the area. A longer storm has a lower intensity, and a shorter one lets only part of the catchment contribute, so both give smaller peaks.</p><p>Runoff depends on the storm, its intensity, duration and spread, and on the catchment: its area, shape, slope, soils, land use and wetness before the storm. The Kirpich formula estimates the time of concentration from the length L of the main stream in metres and its average slope S.</p>",
        "points": [
         {
          "html": "The stream length of a fern shaped catchment is more than that of a fan-shaped one.",
          "sources": [
           {
            "id": "PAST-05-005",
            "label": "Set 5 · Q5"
           }
          ]
         },
         {
          "html": "Time of concentration is the maximum time taken by rain water to reach the outlet of the basin.",
          "sources": [
           {
            "id": "PAST-11-056",
            "label": "Set 11 · Q56"
           }
          ]
         },
         {
          "html": "The rational method applies when the duration of rainfall equals the time of concentration.",
          "sources": [
           {
            "id": "PAST-08-028",
            "label": "Set 8 · Q28"
           }
          ]
         },
         {
          "html": "A 225 ha catchment with C = 0.33 under 7.78 cm/h gives a rational peak of about 16 m<sup>3</sup>/s.",
          "sources": [
           {
            "id": "PAST-14-066",
            "label": "Set 14 · Q66"
           }
          ]
         },
         {
          "html": "72 ha under 10 cm/h with a runoff coefficient of 0.5 yields a storm-water peak of 10 m<sup>3</sup>/s.",
          "sources": [
           {
            "id": "PAST-18-038",
            "label": "Set 18 · Q38"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-005",
          "label": "Set 5 · Q5"
         },
         {
          "id": "PAST-11-056",
          "label": "Set 11 · Q56"
         },
         {
          "id": "PAST-08-028",
          "label": "Set 8 · Q28"
         },
         {
          "id": "PAST-14-066",
          "label": "Set 14 · Q66"
         },
         {
          "id": "PAST-18-038",
          "label": "Set 18 · Q38"
         }
        ]
       },
       {
        "id": "hydrographs-and-unit-hydrograph",
        "title": "Hydrographs and the unit hydrograph",
        "html": "<p>A flood hydrograph has a rising limb, a peak and a recession limb. The recession limb is the drainage of water already stored in the basin, so it depends on basin characteristics and is independent of the storm that caused it.</p><p>A <em>unit hydrograph</em> is the direct runoff hydrograph from 1 cm of effective rainfall of a given duration. Its ordinates are the direct runoff ordinates divided by the effective runoff depth. For a longer duration the same volume is spread out, so the base period increases and the peak decreases.</p><p>A hydrograph combines <em>direct runoff</em> from the storm with <em>base flow</em> from groundwater, which is separated first, for example by a straight line from the start of the rise to a point N days after the peak. The <em>lag time</em> runs from the centroid of effective rainfall to the peak.</p><p>The method rests on <em>linearity</em>, so ordinates are proportional to the effective rainfall, and <em>time invariance</em>, so the same storm always gives the same response. A D-hour UH is converted to a whole multiple of D by lagging and adding copies, or to any duration through the <em>S-curve</em>, the runoff from continuous effective rain.</p>",
        "formulas": [
         {
          "label": "Unit hydrograph ordinate",
          "tex": "u(t) = \\dfrac{\\text{DRH}(t)}{\\text{effective runoff depth (cm)}}"
         },
         {
          "label": "Base-flow separation time (days, A in km²)",
          "tex": "N = 0.83\\,A^{0.2}"
         },
         {
          "label": "T-hour UH from the S-curve",
          "tex": "u_T(t) = \\dfrac{D}{T}\\left[S(t) - S(t - T)\\right]"
         },
         {
          "label": "Snyder's basin lag",
          "tex": "t_p = C_t\\,(L L_c)^{0.3}"
         }
        ],
        "example": {
         "title": "Worked example: a flood peak from the unit hydrograph",
         "html": "<p>The 4-hour UH of a catchment peaks at 60 m<sup>3</sup>/s. A 4-hour storm gives 5 cm of rain with a φ-index of 0.25 cm/h, over a base flow of 20 m<sup>3</sup>/s.</p>\\[\\begin{aligned} P_e &amp;= 5 - 0.25 \\times 4 = 4\\ \\text{cm} \\\\ Q_p &amp;= 4 \\times 60 + 20 = 260\\ \\text{m}^3/\\text{s} \\end{aligned}\\]"
        },
        "moreHtml": "<p>For a complex storm the direct runoff is built by <em>convolution</em>: each block of effective rainfall produces the UH scaled by its depth and lagged to its start, and the results are added. The base flow is then added back.</p><p>The S-curve is shifted by the new duration T and subtracted from itself, and the difference is multiplied by D/T. The area under any UH is 1 cm over the catchment, a useful check on the ordinates.</p><p>For ungauged catchments, synthetic unit hydrographs such as Snyder's relate the basin lag to the length L of the main stream and the length \\(L_c\\) to the point nearest the centroid, with a regional coefficient \\(C_t\\).</p>",
        "points": [
         {
          "html": "The recession limb of a hydrograph is independent of storm characteristics.",
          "sources": [
           {
            "id": "PAST-12-062",
            "label": "Set 12 · Q62"
           }
          ]
         },
         {
          "html": "Unit hydrograph ordinates are the DRH ordinates divided by the effective runoff depth.",
          "sources": [
           {
            "id": "PAST-10-024",
            "label": "Set 10 · Q24"
           }
          ]
         },
         {
          "html": "A longer unit-hydrograph duration does both: the base period increases and the peak ordinate decreases.",
          "sources": [
           {
            "id": "PAST-11-022",
            "label": "Set 11 · Q22"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-12-062",
          "label": "Set 12 · Q62"
         },
         {
          "id": "PAST-10-024",
          "label": "Set 10 · Q24"
         },
         {
          "id": "PAST-11-022",
          "label": "Set 11 · Q22"
         }
        ]
       },
       {
        "id": "stream-flow-sediment-and-nepal-rivers",
        "title": "Rating curves, sediment load and the rivers of Nepal",
        "html": "<p>River flow is recorded as stage, the water level, and converted to discharge through a <em>rating curve</em>, the stage–discharge relation of a gauging site. Rivers also carry sediment: <em>bed load</em> rolls, slides and bounces along the bed, while suspended load is held in the flow by turbulence. Whether a grain stays suspended depends on the stream's energy against its fall velocity.</p><p>By topography, Nepal's rivers fall into three groups: the snow-fed Koshi, Gandaki, Karnali and Mahakali, medium rivers rising in the Mahabharat range, and small seasonal Siwalik rivers. For ungauged rivers the DHM 2004 regional method gives the better flow estimates.</p><p>Discharge is measured by the <em>area–velocity</em> method: the section is divided by verticals, and the mean velocity in each is read with a current meter at 0.6 of the depth, or averaged from readings at 0.2 and 0.8 of the depth. Floats, dilution gauging with a tracer and, for floods, the slope–area method are alternatives.</p><p>The rating curve is usually fitted as a power law in the stage above that of zero flow, and it shifts when the channel scours or silts.</p>",
        "formulas": [
         {
          "label": "Area–velocity discharge",
          "tex": "Q = \\sum_i a_i\\,\\bar{v}_i"
         },
         {
          "label": "Rating curve",
          "tex": "Q = C_r\\,(G - a)^{\\beta}"
         },
         {
          "label": "Current meter calibration",
          "tex": "v = a N_s + b"
         }
        ],
        "moreHtml": "<p>A current meter's cups or propeller turn at a rate proportional to the velocity, with constants found by towing the meter through still water. The velocity profile in a vertical is roughly logarithmic, which is why a single reading at 0.6 of the depth below the surface gives the mean.</p><p>The total sediment load is the bed load plus the suspended load, and the fine wash load from the catchment travels almost entirely in suspension. Himalayan rivers carry very high loads in the monsoon, which governs the design of intakes, settling basins and reservoirs in Nepal.</p>",
        "points": [
         {
          "html": "The discharge–stage relationship of a gauging site is known as the rating curve.",
          "sources": [
           {
            "id": "PAST-15-024",
            "label": "Set 15 · Q24"
           }
          ]
         },
         {
          "html": "Sediment moving by rolling, sliding and bouncing along the bed is bed load.",
          "sources": [
           {
            "id": "PAST-06-033",
            "label": "Set 6 · Q33"
           }
          ]
         },
         {
          "html": "Which material travels as suspended load depends on the energy of the stream.",
          "sources": [
           {
            "id": "PAST-11-012",
            "label": "Set 11 · Q12"
           }
          ]
         },
         {
          "html": "DHM 2004 gives the more accurate flow characteristics for the rivers of Nepal.",
          "sources": [
           {
            "id": "PAST-05-017",
            "label": "Set 5 · Q17"
           }
          ]
         },
         {
          "html": "By topography, the rivers of Nepal are classified into 3 groups.",
          "sources": [
           {
            "id": "PAST-16-064",
            "label": "Set 16 · Q64"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-15-024",
          "label": "Set 15 · Q24"
         },
         {
          "id": "PAST-06-033",
          "label": "Set 6 · Q33"
         },
         {
          "id": "PAST-11-012",
          "label": "Set 11 · Q12"
         },
         {
          "id": "PAST-05-017",
          "label": "Set 5 · Q17"
         },
         {
          "id": "PAST-16-064",
          "label": "Set 16 · Q64"
         }
        ]
       },
       {
        "id": "flood-probability",
        "title": "Design floods, return period and the Gumbel distribution",
        "html": "<p>A flood with return period T is equalled or exceeded on average once in T years, so its annual exceedance probability is \\(1/T\\). Raising the design flood lengthens T and therefore reduces the probability of damage in any year, though over a long design life the chance of at least one exceedance can still be large.</p><p>Flood peaks are often fitted with the Gumbel extreme-value distribution, whose cumulative probability has a double exponential form.</p><p>In a frequency analysis the annual maximum floods of n years are ranked, and the flood of rank m is given the Weibull return period \\((n + 1)/m\\). Gumbel's method then gives the flood of any return period as the mean plus a frequency factor times the standard deviation.</p><p>The chance that a structure sees its design flood at least once in its life is the risk, and its complement is the <em>reliability</em>. A culvert designed for the 25-year flood has a 33% chance of meeting it in a 10-year life.</p>",
        "formulas": [
         {
          "label": "Gumbel distribution",
          "tex": "F(x) = \\exp\\left[-e^{-(x - \\mu)/\\beta}\\right]"
         },
         {
          "label": "Risk over n years",
          "tex": "R = 1 - \\left(1 - \\dfrac{1}{T}\\right)^n"
         },
         {
          "label": "Weibull plotting position",
          "tex": "T = \\dfrac{n + 1}{m}"
         },
         {
          "label": "Gumbel flood of return period T",
          "tex": "x_T = \\bar{x} + K_T\\,\\sigma"
         },
         {
          "label": "Gumbel frequency factor, long records",
          "tex": "\\begin{aligned} K_T &amp;= -\\dfrac{\\sqrt{6}}{\\pi}\\Big[\\,0.5772 \\\\ &amp;\\qquad + \\ln\\ln\\dfrac{T}{T - 1}\\Big] \\end{aligned}"
         }
        ],
        "example": {
         "title": "Worked example: Gumbel probability",
         "html": "<p>With \\(\\mu = 0\\) and \\(\\beta = 1\\):</p>\\[\\begin{aligned} F(2) &amp;= \\exp(-e^{-2}) \\\\ &amp;= \\exp(-0.135) \\approx 0.87 \\end{aligned}\\]<p>The nearest option is 0.864.</p>"
        },
        "moreHtml": "<p>For very long records the frequency factor takes the form shown below; for shorter records, tabulated values of the reduced mean and reduced standard deviation replace 0.5772 and \\(\\pi/\\sqrt{6}\\). A 100-year flood is not one that comes once a century: it has a 1% chance in every year.</p><p>The design flood is chosen by the consequences of failure. Large dams are designed for the probable maximum flood, barrages and major bridges for floods of about 100 years or more, and culverts and storm drains for 10 to 50 years.</p>",
        "points": [
         {
          "html": "Increasing the design flood decreases the annual probability of damage.",
          "sources": [
           {
            "id": "PAST-09-012",
            "label": "Set 9 · Q12"
           }
          ]
         },
         {
          "html": "For a Gumbel distribution with \\(\\mu = 0\\), \\(\\beta = 1\\), the chance that X does not exceed 2 is about 0.864.",
          "sources": [
           {
            "id": "PAST-12-078",
            "label": "Set 12 · Q78"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-09-012",
          "label": "Set 9 · Q12"
         },
         {
          "id": "PAST-12-078",
          "label": "Set 12 · Q78"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Rational method",
        "tex": "Q = \\dfrac{C I A}{360}"
       },
       {
        "label": "Annual exceedance probability",
        "tex": "P = \\dfrac{1}{T}"
       },
       {
        "label": "Risk over n years",
        "tex": "R = 1 - \\left(1 - \\dfrac{1}{T}\\right)^n"
       },
       {
        "label": "Gumbel distribution",
        "tex": "F(x) = \\exp\\left[-e^{-(x - \\mu)/\\beta}\\right]"
       },
       {
        "label": "Thiessen average",
        "tex": "\\bar{P} = \\dfrac{\\sum P_i A_i}{\\sum A_i}"
       },
       {
        "label": "φ-index",
        "tex": "\\phi = \\dfrac{P - R}{t_e}"
       },
       {
        "label": "T-hour UH from the S-curve",
        "tex": "u_T = \\dfrac{D}{T}\\left[S(t) - S(t - T)\\right]"
       },
       {
        "label": "Weibull plotting position",
        "tex": "T = \\dfrac{n + 1}{m}"
       },
       {
        "label": "Gumbel flood",
        "tex": "x_T = \\bar{x} + K_T\\,\\sigma"
       }
      ],
      "cautions": [
       {
        "id": "gumbel-probability-rounding",
        "status": "review",
        "prompt": "The listed Gumbel probability differs slightly from the computed value",
        "html": "<p>\\(\\exp(-e^{-2})\\) is about 0.873. The paper's 0.864 is the nearest option; 1.124 cannot be a probability at all.</p>",
        "sources": [
         {
          "id": "PAST-12-078",
          "label": "Set 12 · Q78"
         }
        ]
       }
      ],
      "gaps": [
       "Flood routing and groundwater hydrology from the syllabus are not examined in these papers, and synthetic unit hydrographs are outlined only briefly."
      ]
     }
    });
})();
