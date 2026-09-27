(function () {
    "use strict";
    window.CIVIL_PAST_NOTE_TOPICS = window.CIVIL_PAST_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_PAST_NOTE_TOPICS, {
     "ACiE0301": {
      "code": "ACiE0301",
      "questionCount": 23,
      "format": 2,
      "summary": "<p>This subchapter covers the physical properties of fluids. The past-paper questions test Newtonian and real fluids, viscosity and its units, dimensions and the density of water, compressibility and bulk modulus, surface tension in drops and bubbles, capillary rise and depression, contact angle, and the link between vapour pressure and cavitation.</p>",
      "blocks": [
       {
        "id": "newtonian-fluids-and-viscosity",
        "title": "Newtonian fluids, viscosity and its units",
        "html": "<p>Viscosity is a fluid's resistance to shear. In a <em>Newtonian fluid</em> such as water or air the shear stress is directly proportional to the velocity gradient, and the constant of proportionality is the dynamic viscosity \\(\\mu\\). Real, non-ideal fluids all have viscosity; some are Newtonian and some are not.</p><p>Dividing \\(\\mu\\) by density gives the <em>kinematic viscosity</em> \\(\\nu\\), measured in m<sup>2</sup>/s or stokes. In liquids viscosity comes from cohesion, which weakens on heating, so it falls as temperature rises; in gases it rises.</p>",
        "formulas": [
         {
          "label": "Newton's law of viscosity",
          "tex": "\\tau = \\mu \\dfrac{du}{dy}"
         },
         {
          "label": "Kinematic viscosity",
          "tex": "\\nu = \\dfrac{\\mu}{\\rho}, \\qquad [\\nu] = L^2 T^{-1}"
         }
        ],
        "example": {
         "title": "Worked example: shear stress from a velocity profile",
         "html": "<p>For \\(u = 2y - y^2\\), the gradient is \\(du/dy = 2 - 2y\\). With 8.5 poise, that is \\(\\mu = 0.85\\ \\text{Pa·s}\\):</p>\\[\\begin{aligned} \\dfrac{du}{dy}\\Big|_{0.15} &amp;= 2 - 0.3 = 1.7\\ \\text{s}^{-1} \\\\ \\tau &amp;= 0.85 \\times 1.7 = 1.445\\ \\text{N/m}^2 \\end{aligned}\\]"
        },
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
        "html": "<p>Water is densest, about 1000 kg/m<sup>3</sup>, at about 4°C; below that it expands again, which is why ice floats. Weight is mass times gravitational acceleration, so the same body weighs about one sixth as much on the moon.</p><p>The fundamental quantities of mechanics are tied together by Newton's second law, \\(F = ma\\). Force therefore has dimensions \\(MLT^{-2}\\), and either the MLT or the FLT system can be used.</p>",
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
        "html": "<p>The <em>bulk modulus</em> \\(K\\) is the pressure rise needed per unit fractional drop in volume. A large K means a stiff, nearly incompressible fluid; compressibility is its reciprocal.</p><p>Liquids are nearly incompressible, water having a bulk modulus of about 2.1 GPa, while gases compress easily. The bulk modulus of a liquid increases with pressure, because the compressed liquid is harder to squeeze further, and it varies with temperature.</p>",
        "formulas": [
         {
          "label": "Bulk modulus",
          "tex": "K = -\\dfrac{dp}{dV/V}"
         }
        ],
        "example": {
         "title": "Worked example: bulk modulus",
         "html": "<p>A pressure rise of \\(5 \\times 10^4\\ \\text{N/m}^2\\) squeezes 4 cm<sup>3</sup> to 3.9 cm<sup>3</sup>:</p>\\[K = \\dfrac{5 \\times 10^4}{0.1/4} = 2 \\times 10^6\\ \\text{N/m}^2\\]"
        },
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
        "html": "<p>Surface tension is the pull along a liquid surface caused by unbalanced cohesion at the interface. It draws a free drop into the shape with the least surface for its volume, a sphere, which is why raindrops are round.</p><p>A curved surface holds a pressure difference. A liquid drop has one surface, a soap bubble two, so the excess pressure in a bubble is twice that in a drop of the same radius. Both vary inversely with size, so a smaller bubble has the higher inside pressure.</p>",
        "formulas": [
         {
          "label": "Excess pressure, liquid drop",
          "tex": "\\Delta p = \\dfrac{2T}{R} = \\dfrac{4T}{d}"
         },
         {
          "label": "Excess pressure, soap bubble",
          "tex": "\\Delta p = \\dfrac{4T}{R} = \\dfrac{8T}{d}"
         }
        ],
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
        "html": "<p>A liquid rises or falls in a narrow tube because of surface tension together with adhesion to the tube wall. The height depends inversely on the inner radius of the tube, not on its length or outer radius, so halving a rise or depression needs twice the diameter.</p><p>The contact angle decides the direction. An acute angle, as for water on glass, means the liquid wets the surface and rises; an obtuse angle, as for mercury, means it does not wet and is depressed. Surface tension falls on heating, so capillary rise decreases with temperature.</p>",
        "formulas": [
         {
          "label": "Capillary rise or depression",
          "tex": "h = \\dfrac{4\\sigma\\cos\\theta}{\\rho g d}"
         }
        ],
        "example": {
         "title": "Worked examples: capillary height and diameter",
         "html": "<p>Since \\(hd\\) is constant, a 1.2 mm tube depressed 8 mm in mercury gives 4 mm with \\(d = 1.2 \\times 8/4 = 2.4\\) mm.</p><p>If the rise in P is 2/3 of that in Q, then \\(d_P/d_Q = h_Q/h_P = 3/2\\).</p>"
        },
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
        "html": "<p>Every liquid has a <em>vapour pressure</em>, the pressure at which it boils at the given temperature. Where the local absolute pressure in a flow falls to it, as at a pump eye or on a turbine blade, vapour cavities form and then collapse violently: <em>cavitation</em>, which pits metal surfaces.</p><p>Each property links to an effect: capillarity comes from surface tension, viscosity resists shear forces, and specific gravity compares a density with that of water.</p>",
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
       "Specific volume and ideal-fluid definitions from the syllabus are only touched on in these papers."
      ]
     },
     "ACiE0302": {
      "code": "ACiE0302",
      "questionCount": 20,
      "format": 2,
      "summary": "<p>This subchapter covers fluids at rest. The past-paper questions test piezometric head and pressure with depth, Pascal's law in the hydraulic press, absolute, gauge and suction pressure, Bourdon gauges and U-tube manometers, the centre of pressure and forces on curved ends, buoyancy and weight, and the metacentric height of floating bodies.</p>",
      "blocks": [
       {
        "id": "pressure-head-and-pascals-law",
        "title": "Pressure with depth, piezometric head and Pascal's law",
        "html": "<p>In a liquid at rest the pressure rises linearly with depth, \\(p = \\gamma h\\), and acts equally in all directions. The pressure head gained going down exactly matches the elevation head lost, so the <em>piezometric head</em> \\(p/\\gamma + z\\) is the same at every point of a static liquid.</p><p>A pressure can be expressed as a head of any liquid by dividing by its specific weight. By <em>Pascal's law</em> a pressure applied to an enclosed fluid is transmitted undiminished, so a hydraulic press multiplies force in the ratio of the ram and plunger areas.</p>",
        "formulas": [
         {
          "label": "Hydrostatic pressure and piezometric head",
          "tex": "p = \\gamma h, \\qquad \\dfrac{p}{\\gamma} + z = \\text{constant}"
         },
         {
          "label": "Hydraulic press",
          "tex": "\\dfrac{F}{a} = \\dfrac{W}{A}"
         }
        ],
        "example": {
         "title": "Worked examples: head of oil and a hydraulic press",
         "html": "<p>4.9 N/cm<sup>2</sup> is 49 000 N/m<sup>2</sup>; in oil of specific gravity 0.85, \\(h = p/(\\rho g)\\) with \\(\\rho = 850\\) kg/m<sup>3</sup>, which is about 5.88 m.</p><p>A 35 kN load on a 30 cm ram, with a 2 cm plunger:</p>\\[F = 35\\,000 \\times \\left(\\dfrac{2}{30}\\right)^2 \\approx 155.5\\ \\text{N}\\]"
        },
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
        "html": "<p>Pressure is measured from two datums. <em>Absolute pressure</em> is counted from a perfect vacuum; <em>gauge pressure</em> is counted from the local atmosphere. A suction or vacuum pressure is a gauge pressure below atmospheric, so it is subtracted. A barometer reading in mm of mercury converts to kPa through \\(p = \\rho g h\\) with mercury at 13 600 kg/m<sup>3</sup>; 760 mm is about 101.4 kPa.</p><p>A Bourdon gauge deflects with the difference between the fluid and the surrounding air, so it reads gauge pressure. A U-tube manometer balances the pressure against a column of heavy liquid, reading high and vacuum pressures that a piezometer cannot.</p>",
        "formulas": [
         {
          "label": "Absolute pressure",
          "tex": "p_{\\text{abs}} = p_{\\text{atm}} + p_{\\text{gauge}}"
         },
         {
          "label": "Vacuum (suction) pressure",
          "tex": "p_{\\text{vac}} = p_{\\text{atm}} - p_{\\text{abs}}"
         }
        ],
        "example": {
         "title": "Worked example: suction under a 740 mm barometer",
         "html": "<p>The atmosphere, in kPa:</p>\\[p_{\\text{atm}} = 0.740 \\times 13\\,600 \\times 9.81 \\approx 98.7\\]<p>So 10 kPa suction leaves \\(98.7 - 10 \\approx 88.7\\) kPa absolute.</p>"
        },
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
        "html": "<p>The total force on a submerged plane equals the pressure at its centroid times its area. It acts at the <em>centre of pressure</em>, which is deeper than the centroid because pressure grows with depth; for a vertical rectangle with its top edge at the free surface it lies at two thirds of the depth.</p><p>On a curved surface, the force in any direction equals the pressure times the area projected on a plane normal to that direction. The axial force of a pressure on a hemispherical end is therefore the pressure times the circle it projects onto.</p>",
        "formulas": [
         {
          "label": "Total force and centre of pressure",
          "tex": "F = \\gamma A \\bar{h}, \\qquad h_p = \\bar{h} + \\dfrac{I_G}{A\\bar{h}}"
         }
        ],
        "example": {
         "title": "Worked example: vertical rectangle at the surface",
         "html": "<p>A rectangle 2.5 m wide and 3 m deep has \\(\\bar{h} = 1.5\\) m and \\(I_G = 2.5 \\times 3^3/12 = 5.625\\ \\text{m}^4\\):</p>\\[h_p = 1.5 + \\dfrac{5.625}{7.5 \\times 1.5} = 2\\ \\text{m}\\]"
        },
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
        "html": "<p>A body in a fluid feels an upward thrust equal to the weight of fluid it displaces, <em>Archimedes' principle</em>. This buoyant force acts vertically upward through the centre of buoyancy, the centroid of the displaced volume, opposite to the body's weight.</p><p>The weight lost when a body is weighed in water equals the weight of an equal volume of water, which gives its specific gravity. Weight itself is mass times local gravity, so on the moon, with about one sixth of Earth's gravity, it falls to one sixth.</p>",
        "formulas": [
         {
          "label": "Buoyancy and specific gravity from weighing",
          "tex": "F_B = \\gamma V, \\qquad G = \\dfrac{W_{\\text{air}}}{W_{\\text{air}} - W_{\\text{water}}}"
         }
        ],
        "example": {
         "title": "Worked example: specific gravity by weighing",
         "html": "<p>60 N in air and 40 N in water: the loss of 20 N is the buoyancy, so \\(G = 60/20 = 3\\).</p>"
        },
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
        "html": "<p>When a floating body heels slightly, its centre of buoyancy shifts, and the new line of buoyancy crosses the axis at the <em>metacentre</em> M. The distance BM equals the second moment of the waterline area about the tilt axis divided by the displaced volume.</p><p>The <em>metacentric height</em> GM = BM − BG decides stability. A floating body is stable when M lies above its centre of gravity G, neutral when they coincide and unstable when M is below.</p>",
        "formulas": [
         {
          "label": "Metacentric height",
          "tex": "GM = BM - BG = \\dfrac{I}{V} - BG"
         }
        ],
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
       "Pressure diagrams and differential manometer calculations from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0303": {
      "code": "ACiE0303",
      "questionCount": 26,
      "format": 2,
      "summary": "<p>This subchapter covers fluids in motion. The past-paper questions test the continuity equation in its one- and two-dimensional forms, the Laplace equation, Bernoulli's equation with its meaning and assumptions, energy and hydraulic grade lines, the Pitot tube, venturimeter and orifices, and the momentum principle for jets, with drag and jet propulsion.</p>",
      "blocks": [
       {
        "id": "continuity-equation",
        "title": "Conservation of mass: the continuity equation",
        "html": "<p>In steady flow the mass passing every section of a stream tube per second is the same. For a compressible fluid this means \\(\\rho AV\\) is constant; for an incompressible one the density cancels and the discharge \\(AV\\) is constant, so a narrower section has a faster flow.</p><p>At a point, the same law says the velocity field has zero divergence when the fluid is incompressible. In two dimensions the rates of stretching in x and y must cancel. If the flow is also irrotational, a velocity potential \\(\\phi\\) exists and it satisfies the Laplace equation.</p>",
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
         }
        ],
        "example": {
         "title": "Worked example: is the field continuous?",
         "html": "<p>For \\(u = ax^2 + bxy\\) and \\(v = cxy + dy^2\\):</p>\\[\\begin{aligned} \\dfrac{\\partial u}{\\partial x} &amp;= 2ax + by \\\\ \\dfrac{\\partial v}{\\partial y} &amp;= cx + 2dy \\\\ \\text{sum} &amp;= (2a + c)x + (b + 2d)y = 0 \\end{aligned}\\]"
        },
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
        "html": "<p>Bernoulli's equation is the law of conservation of energy for an ideal fluid. Each of its terms, pressure head, velocity head and elevation head, is measured in metres and is energy, or work done, per unit weight of fluid. Their sum, the total head, stays constant along a streamline; in rotational flow different streamlines can carry different constants.</p><p>It assumes steady, incompressible, frictionless flow along a streamline. It fails for viscous flow with friction losses, but it does not need uniform velocity: the velocity may change from section to section. In a constant-area pipe the velocity head is fixed, so pressure falls as height rises.</p>",
        "formulas": [
         {
          "label": "Bernoulli's equation",
          "tex": "\\dfrac{p}{\\gamma} + \\dfrac{V^2}{2g} + z = \\text{constant}"
         }
        ],
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
        "html": "<p>Plotting the heads along a pipe gives two lines. The <em>hydraulic grade line</em> joins the levels \\(p/\\gamma + z\\) to which water would rise in piezometers. The <em>energy grade line</em>, or total energy line, lies above it by the velocity head.</p><p>The gap between the two lines is therefore the velocity head, large where the pipe is narrow and small where it is wide. The energy line falls steadily in the direction of flow because of friction and other losses.</p>",
        "formulas": [
         {
          "label": "Gap between the lines",
          "tex": "\\text{EGL} - \\text{HGL} = \\dfrac{V^2}{2g}"
         }
        ],
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
        "html": "<p>A <em>Pitot tube</em> faces into the flow and senses stagnation pressure; the rise above the static level is the velocity head, so it measures the velocity at a point. A <em>venturimeter</em> narrows the pipe to a throat: by continuity the velocity is highest there and the pressure lowest, and the pressure difference gives the discharge.</p><p>A jet from an orifice follows a parabolic path, so its horizontal throw gives the coefficient of velocity. A large orifice is treated as a set of thin strips, integrating the velocity over its depth between the heads at its top and bottom edges.</p>",
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
         }
        ],
        "example": {
         "title": "Worked examples: jet throw and a large orifice",
         "html": "<p>A jet under a 1 m head falls 1 m while travelling 1.8 m: \\(C_v = 1.8/(2\\sqrt{1 \\times 1}) = 0.90\\).</p><p>An orifice 3.2 m wide and 1.7 m deep with its top 3.3 m below the water has \\(H_1 = 3.3\\) m and \\(H_2 = 5.0\\) m, and \\(\\tfrac{2}{3}(0.6)(3.2)\\sqrt{2g} \\approx 5.67\\):</p>\\[\\begin{aligned} Q &amp;= 5.67 \\times (11.18 - 5.99) \\\\ &amp;\\approx 29.4\\ \\text{m}^3/\\text{s} \\end{aligned}\\]"
        },
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
        "html": "<p>The impulse–momentum principle says the net force on the fluid in a control volume equals the rate of change of its momentum. It gives the force of a jet on a plate and the thrust on a pipe bend. A venturimeter is analysed with energy and continuity instead.</p><p>A jet striking a fixed flat plate normally turns through 90° and spreads along the plate, losing all its normal momentum, so the force is \\(\\rho a V^2\\). The same principle underlies jet propulsion, which suits ships in very shallow water where a screw propeller would strike the bed. The drag of a complete body such as an aircraft also includes interference drag, where its parts meet.</p>",
        "formulas": [
         {
          "label": "Jet on a fixed plate, normal impact",
          "tex": "F = \\rho a V^2"
         }
        ],
        "example": {
         "title": "Worked example: jet velocity from the plate force",
         "html": "<p>A 2 kN force from a jet of area 0.02 m<sup>2</sup>: \\(2000 = 1000 \\times 0.02 \\times V^2\\), so \\(V^2 = 100\\) and \\(V = 10\\) m/s.</p>"
        },
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
       "Flow classification and the stream function from the syllabus are only touched on in these papers."
      ]
     },
     "ACiE0304": {
      "code": "ACiE0304",
      "questionCount": 19,
      "format": 2,
      "summary": "<p>This subchapter covers flow in pipes. The past-paper questions test laminar flow and the Hagen–Poiseuille results, the laminar friction factor in its Darcy and Fanning forms, friction in turbulent flow and the Darcy–Weisbach equation, relative roughness and mixing length, entrance, exit and expansion losses, pipes in series and parallel, and water hammer.</p>",
      "blocks": [
       {
        "id": "laminar-pipe-flow",
        "title": "Laminar pipe flow and the laminar friction factor",
        "html": "<p>In fully developed laminar flow in a circular pipe the velocity profile is a parabola: zero at the wall and greatest at the axis, where it is twice the mean velocity. The shear stress, by contrast, varies linearly, from zero at the centre to its maximum at the wall.</p><p>The Hagen–Poiseuille equation, which assumes steady laminar flow of an incompressible Newtonian fluid, gives the head loss. Written in Darcy form it makes the friction factor \\(f = 64/Re\\); the coefficient of friction used with \\(4f'\\), the Fanning value, is a quarter of that, \\(16/Re\\).</p>",
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
         }
        ],
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
        "html": "<p>In turbulent flow the friction loss follows the Darcy–Weisbach equation, so it varies approximately as the square of the velocity. Replacing V with \\(4Q/\\pi D^2\\) gives the same loss in terms of discharge, with the constant \\(\\pi^2 g/8 \\approx 12.1\\).</p><p>The friction factor is read from the Moody diagram against the Reynolds number and the relative roughness \\(e/D\\), where e is the average height of the roughness projections on the wall. Prandtl's mixing length, the distance over which turbulent eddies carry momentum, grows with distance from the wall and is zero at the wall itself.</p>",
        "formulas": [
         {
          "label": "Darcy–Weisbach equation",
          "tex": "h_f = \\dfrac{f L V^2}{2 g D} = \\dfrac{f L Q^2}{12.1\\, D^5}"
         }
        ],
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
        "html": "<p>Fittings and changes of section cause <em>minor losses</em>, each written as a multiple of a velocity head. At a sharp entrance from a tank the loss is about half a velocity head; at the exit into a tank the whole velocity head is lost, so the entrance loss is half the exit loss.</p><p>At a sudden enlargement the jet separates and mixes. Momentum and energy together, the Borda–Carnot result, give a loss equal to the velocity head of the difference in velocities.</p>",
        "formulas": [
         {
          "label": "Entrance and exit losses",
          "tex": "h_{\\text{entry}} = 0.5\\dfrac{V^2}{2g}, \\qquad h_{\\text{exit}} = \\dfrac{V^2}{2g}"
         },
         {
          "label": "Sudden expansion",
          "tex": "h_L = \\dfrac{(V_1 - V_2)^2}{2g}"
         }
        ],
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
        "html": "<p>Pipes in <em>series</em> carry the same discharge one after another, so the total head loss is the sum of the individual losses. If the diameters are equal the velocity is the same too, and the line behaves as one pipe of the combined length.</p><p>Pipes in <em>parallel</em> join the same two junctions, so each has the same head loss and their discharges add up. Two identical parallel pipes each carry half the flow, and since head loss varies as \\(LQ^2\\) the equivalent single pipe of the same diameter is a quarter as long.</p>",
        "example": {
         "title": "Worked example: two identical pipes in parallel",
         "html": "<p>Each pipe carries \\(Q/2\\) with the same loss as one pipe carrying Q over length \\(L_e\\):</p>\\[L_e Q^2 = L\\left(\\dfrac{Q}{2}\\right)^2, \\qquad L_e = \\dfrac{L}{4}\\]"
        },
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
        "html": "<p>Closing a valve stops the moving water and raises the pressure, a surge called <em>water hammer</em>. For gradual closure, slower than the wave's round trip, the rise follows from decelerating the column over the closure time.</p><p>The pressure wave travels at the speed of sound in water, reduced by the elasticity of the pipe wall. For a thin elastic pipe the speed depends on the ratio of the water's bulk modulus to the stiffness of the wall.</p>",
        "formulas": [
         {
          "label": "Gradual closure",
          "tex": "h = \\dfrac{L V}{g T}"
         },
         {
          "label": "Wave speed in an elastic pipe",
          "tex": "C = \\dfrac{\\sqrt{K/\\rho}}{\\sqrt{1 + KD/(E t)}}"
         }
        ],
        "example": {
         "title": "Worked examples: closure velocity and wave speed",
         "html": "<p>A 20 m rise in a 1 km pipe closed over 10 s, using \\(V = hgT/L\\):</p>\\[V = \\dfrac{20 \\times 9.81 \\times 10}{1000} \\approx 2\\ \\text{m/s}\\]<p>For D = 0.4 m and t = 4 mm, \\(KD/Et = 1\\) and \\(\\sqrt{K/\\rho} = 1449\\) m/s, so \\(C = 1449/\\sqrt{2} \\approx 1025\\) m/s, about 1000 m/s.</p>"
        },
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
       }
      ],
      "cautions": [],
      "gaps": [
       "Pipe network analysis and surge tanks from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0305": {
      "code": "ACiE0305",
      "questionCount": 31,
      "format": 2,
      "summary": "<p>This subchapter covers flow with a free surface. The past-paper questions test channel geometry and the most economical sections, flow classification with the Froude and Reynolds numbers, Manning's and Chezy's formulas and rugosity, specific energy, critical and alternate depths, gradually varied flow profiles and the hydraulic jump.</p>",
      "blocks": [
       {
        "id": "channel-geometry-and-efficient-sections",
        "title": "Channel geometry and the most economical sections",
        "html": "<p>A channel section is described by its flow area A, its wetted perimeter P, the length of boundary in contact with water, and the hydraulic radius \\(R = A/P\\). For a trapezoid of bed width B, depth y and side slope z horizontal to 1 vertical, each sloping side is \\(y\\sqrt{1 + z^2}\\) long. In a wide rectangular channel the sides hardly count, so R is practically the depth.</p><p>The most economical section carries a given discharge with the least wetted perimeter. For a trapezoid, half the top width equals one sloping side, so the top width is double the sloping-side length, and \\(R = y/2\\). The best triangular section has 45° sides and \\(R = y/2\\sqrt{2}\\).</p>",
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
         }
        ],
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
        "html": "<p>Open-channel flow is <em>uniform</em> if the depth does not change along the channel and <em>steady</em> if it does not change with time. Gradually varied flow, such as a backwater curve, is steady but non-uniform. Based on the hydraulic radius, flow is laminar below a Reynolds number of about 500 and turbulent above about 2000.</p><p>The <em>Froude number</em> uses the hydraulic mean depth \\(D = A/T\\), area over top width. Flow is subcritical when \\(Fr \\lt 1\\), critical at 1 and supercritical when \\(Fr \\gt 1\\). On a steep slope the normal depth lies below the critical depth, so uniform flow there is supercritical.</p>",
        "formulas": [
         {
          "label": "Froude number",
          "tex": "Fr = \\dfrac{V}{\\sqrt{gD}}, \\qquad D = \\dfrac{A}{T}"
         }
        ],
        "example": {
         "title": "Worked examples: hydraulic depth and Froude number",
         "html": "<p>A triangle with 2H:1V sides has \\(A = 2y^2\\) and \\(T = 4y\\), so \\(D = y/2\\).</p><p>With Q = 261.03 m<sup>3</sup>/s, A = 42 m<sup>2</sup> and T = 6 m: \\(V = 6.22\\) m/s and \\(D = 7\\) m, so \\(Fr = 6.22/\\sqrt{9.81 \\times 7} \\approx 0.75\\).</p>"
        },
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
        "html": "<p>Uniform flow is worked out with Manning's or Chezy's formula. Equating the two gives Chezy's C in terms of Manning's n. In Manning's formula velocity varies as \\(\\sqrt{S}/n\\), so doubling n needs four times the slope for the same velocity.</p><p>Manning's rugosity reflects the boundary roughness; for a bed of loose grains Strickler relates it to the grain size d in metres. Most exam problems find R from A and P, then solve Manning's formula for the slope or for n.</p>",
        "formulas": [
         {
          "label": "Manning and Chezy",
          "tex": "V = \\dfrac{1}{n} R^{2/3} S^{1/2}, \\qquad V = C\\sqrt{RS}"
         },
         {
          "label": "Link and Strickler's rugosity",
          "tex": "C = \\dfrac{R^{1/6}}{n}, \\qquad n = \\dfrac{d^{1/6}}{24}"
         }
        ],
        "example": {
         "title": "Worked examples: slope and rugosity",
         "html": "<p>A = 8 m<sup>2</sup>, P = 8 m, Q = 33.33 m<sup>3</sup>/s, n = 0.012: R = 1 m and V = 4.17 m/s, so \\(S = (0.012 \\times 4.17)^2 \\approx 0.0025\\), 1 in 400.</p><p>A trapezoid 3 m wide, 2 m deep, sides 1H:2V: A = 8 m<sup>2</sup> and P = 7.47 m, so R = 1.07 m. At 2.5 m/s on 1 in 1000:</p>\\[n = \\dfrac{1.047 \\times 0.0316}{2.5} \\approx 0.013\\]"
        },
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
        "html": "<p>The <em>specific energy</em> is the energy per unit weight measured from the channel bed, depth plus velocity head. For a given discharge it is least at the <em>critical depth</em>, where \\(Fr = 1\\); equally, at critical depth a given specific energy passes the greatest discharge. Above the minimum, every specific energy can be carried at two depths, one subcritical and one supercritical: the <em>alternate depths</em>.</p><p>Gradually varied flow profiles are named by the slope, M for mild and S for steep, and by the zone the depth lies in. Where a mild channel breaks into a steep one, the flow passes through critical depth at the break, drawing down as an M2 curve upstream and an S2 curve downstream.</p>",
        "formulas": [
         {
          "label": "Specific energy",
          "tex": "E = y + \\dfrac{V^2}{2g}"
         }
        ],
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
        "html": "<p>A <em>hydraulic jump</em> is the sudden rise from shallow supercritical flow to deep subcritical flow, with violent turbulence that dissipates energy. The depths before and after, the sequent or conjugate depths, have equal specific force and are linked in a rectangular channel by the Bélanger equation.</p><p>Jumps are classed by the approach Froude number: undular 1 to 1.7, weak 1.7 to 2.5, oscillating 2.5 to 4.5, steady 4.5 to 9 and strong above 9. The steady jump is the best for stilling basins. A jump is about 5 to 7 times its height long.</p>",
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
         }
        ],
        "example": {
         "title": "Worked examples: approach Froude number and energy loss",
         "html": "<p>A ratio of 16.48 gives \\(\\sqrt{1 + 8F^2} = 33.96\\), so \\(F^2 \\approx 144\\) and \\(F \\approx 12\\).</p><p>Sequent depths 0.25 m and 1.25 m:</p>\\[E_L = \\dfrac{1^3}{4 \\times 0.25 \\times 1.25} = 0.8\\ \\text{m}\\]"
        },
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
       "Specific force, mobile-boundary channel design, inception of motion and the Shields diagram from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0306": {
      "code": "ACiE0306",
      "questionCount": 24,
      "format": 2,
      "summary": "<p>This subchapter covers the science of water on and above the land. The past-paper questions test the meaning of hydrology, dew, frost and the types of precipitation, rain gauges and averaging methods, catchment shape and time of concentration, the rational method, hydrographs and unit hydrographs, rating curves, sediment load, Nepali regional methods and river groups, and flood probability.</p>",
      "blocks": [
       {
        "id": "hydrology-and-precipitation",
        "title": "Hydrology, condensation and the types of precipitation",
        "html": "<p>Hydrology is the science of how water occurs, circulates and is distributed over the earth and through its atmosphere, the hydrologic cycle. Water vapour condenses when air cools to its dew point: above 0°C it forms liquid dew, below freezing it deposits directly as ice crystals, frost.</p><p>Precipitation needs air to rise and cool. <em>Convective</em> precipitation comes from surface heating, <em>orographic</em> from air forced over mountains, and <em>cyclonic</em> or frontal precipitation from air lifted where it converges into a low-pressure area. At a cold front the advancing cold air wedges under warmer air and lifts it steeply, so the rain is heavy but falls over a small area.</p>",
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
        "html": "<p>Rain gauges are of two kinds. A non-recording gauge only collects the total; a <em>recording</em> or self-registering gauge traces the cumulative rainfall against time, giving intensity and duration as well as depth, which makes it the more accurate type.</p><p>The average depth over a catchment is found by the arithmetic mean, by Thiessen polygons that weight each gauge by its area, or by <em>isohyets</em>, contours of equal rainfall. Isohyets can be drawn to follow the terrain, so the isohyetal method is the most accurate, especially in hilly catchments.</p>",
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
        "html": "<p>The <em>time of concentration</em> is the longest time rain takes to reach the outlet, from the hydraulically most remote point. A storm lasting that long makes the whole catchment contribute, so the rational method takes the design intensity for a duration equal to it.</p><p>Catchment shape matters. A fern-shaped, elongated catchment has a long main stream with short tributaries joining along it; a fan-shaped one has short streams converging near the outlet and peaks higher and earlier. With I in mm/h and A in hectares, the rational peak is \\(Q = CIA/360\\) in m<sup>3</sup>/s.</p>",
        "formulas": [
         {
          "label": "Rational method (I in mm/h, A in ha)",
          "tex": "Q = \\dfrac{C I A}{360}"
         }
        ],
        "example": {
         "title": "Worked examples: rational peak discharge",
         "html": "<p>225 ha, C = 0.33, I = 7.78 cm/h = 77.8 mm/h:</p>\\[Q = \\dfrac{0.33 \\times 77.8 \\times 225}{360} \\approx 16\\ \\text{m}^3/\\text{s}\\]<p>72 ha, C = 0.5, I = 100 mm/h: \\(Q = 0.5 \\times 100 \\times 72/360 = 10\\) m<sup>3</sup>/s.</p>"
        },
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
        "html": "<p>A flood hydrograph has a rising limb, a peak and a recession limb. The recession limb is the drainage of water already stored in the basin, so it depends on basin characteristics and is independent of the storm that caused it.</p><p>A <em>unit hydrograph</em> is the direct runoff hydrograph from 1 cm of effective rainfall of a given duration. Its ordinates are the direct runoff ordinates divided by the effective runoff depth. For a longer duration the same volume is spread out, so the base period increases and the peak decreases.</p>",
        "formulas": [
         {
          "label": "Unit hydrograph ordinate",
          "tex": "u(t) = \\dfrac{\\text{DRH}(t)}{\\text{effective runoff depth (cm)}}"
         }
        ],
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
        "html": "<p>River flow is recorded as stage, the water level, and converted to discharge through a <em>rating curve</em>, the stage–discharge relation of a gauging site. Rivers also carry sediment: <em>bed load</em> rolls, slides and bounces along the bed, while suspended load is held in the flow by turbulence. Whether a grain stays suspended depends on the stream's energy against its fall velocity.</p><p>By topography, Nepal's rivers fall into three groups: the snow-fed Koshi, Gandaki, Karnali and Mahakali, medium rivers rising in the Mahabharat range, and small seasonal Siwalik rivers. For ungauged rivers the DHM 2004 regional method gives the better flow estimates.</p>",
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
        "html": "<p>A flood with return period T is equalled or exceeded on average once in T years, so its annual exceedance probability is \\(1/T\\). Raising the design flood lengthens T and therefore reduces the probability of damage in any year, though over a long design life the chance of at least one exceedance can still be large.</p><p>Flood peaks are often fitted with the Gumbel extreme-value distribution, whose cumulative probability has a double exponential form.</p>",
        "formulas": [
         {
          "label": "Gumbel distribution",
          "tex": "F(x) = \\exp\\left[-e^{-(x - \\mu)/\\beta}\\right]"
         },
         {
          "label": "Risk over n years",
          "tex": "R = 1 - \\left(1 - \\dfrac{1}{T}\\right)^n"
         }
        ],
        "example": {
         "title": "Worked example: Gumbel probability",
         "html": "<p>With \\(\\mu = 0\\) and \\(\\beta = 1\\):</p>\\[\\begin{aligned} F(2) &amp;= \\exp(-e^{-2}) \\\\ &amp;= \\exp(-0.135) \\approx 0.87 \\end{aligned}\\]<p>The nearest option is 0.864.</p>"
        },
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
       "Synthetic unit hydrographs, flood routing and groundwater hydrology from the syllabus are not examined in these papers."
      ]
     }
    });
})();
