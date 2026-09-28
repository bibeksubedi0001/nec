(function () {
    "use strict";
    window.CIVIL_CAPSULE_NOTE_TOPICS = window.CIVIL_CAPSULE_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_CAPSULE_NOTE_TOPICS, {
      "ACiE0301": {
        "code": "ACiE0301",
        "questionCount": 29,
        "format": 2,
        "summary": "<p>This subchapter introduces the properties that set fluids apart and govern how they behave: continuous deformation under shear and viscosity, Newtonian and non-Newtonian flow curves, density-based quantities, compressibility, surface tension, capillarity and vapour pressure. The capsule questions test viscosity dimensions and temperature trends, rheological models, specific volume and weight, bulk modulus, drop and bubble pressures, capillary scaling and the cavitation threshold.</p>",
        "blocks": [
          {
            "id": "fluids-deform-under-shear",
            "title": "What makes a fluid: continuous deformation and Newton's law of viscosity",
            "html": "<p>A <em>fluid</em> cannot hold a shear stress with a fixed deformation. Under a steady tangential stress it keeps deforming for as long as the stress acts, whereas a linearly elastic solid takes up a fixed strain and recovers it on unloading.</p><p>For a <em>Newtonian</em> fluid the shear stress is proportional to the velocity gradient across the flow. The constant of proportionality is the <em>dynamic viscosity</em> \\(\\mu\\), the property that links tangential resistance to velocity gradient. Density does not enter this law, so two oils of equal density can develop different stresses at the same gradient and temperature.</p><p>In a thin oil film between a fixed plate and a plate sliding at speed \\(U\\), the velocity varies almost linearly across the film thickness \\(h\\). The gradient is then \\(U/h\\) and the resisting stress \\(\\mu U/h\\).</p><p>At a fixed state, \\(\\mu\\) is stress divided by shear rate. When the shear rate doubles and the stress doubles with it, the viscosity is unchanged; a viscosity that varied with shear rate would mark non-Newtonian behaviour.</p>",
            "formulas": [
              {
                "label": "Newton's law of viscosity",
                "tex": "\\tau = \\mu \\dfrac{du}{dy}",
                "where": "<p>\\(du/dy\\) is the velocity gradient normal to the flow, the rate of shear deformation.</p>"
              },
              {
                "label": "Thin film with a linear velocity profile",
                "tex": "\\tau = \\mu \\dfrac{U}{h}"
              },
              {
                "label": "Shear strain under a constant stress",
                "tex": "\\phi = \\dfrac{\\tau}{\\mu}\\, t",
                "where": "<p>\\(\\phi\\) is the angular shear strain accumulated after time \\(t\\); it grows without limit while \\(\\tau\\) acts.</p>"
              }
            ],
            "example": {
              "title": "Worked example: shearing an oil film",
              "html": "<p>A 0.5 mm oil film with \\(\\mu = 0.08\\ \\text{Pa s}\\) lies under a plate moving at 0.25 m/s.</p>\\[\\begin{aligned}\\dfrac{du}{dy} &amp;= \\dfrac{0.25}{0.0005} = 500\\ \\text{s}^{-1} \\\\ \\tau &amp;= 0.08 \\times 500 = 40\\ \\text{Pa}\\end{aligned}\\]<p>At twice the plate speed the gradient is 1000 s<sup>−1</sup> and the stress 80 Pa, so \\(\\mu = 80/1000 = 0.08\\) Pa s again.</p>"
            },
            "points": [
              {
                "html": "A fluid is a substance that undergoes continuous deformation under the action of a shearing stress.",
                "sources": [
                  {
                    "id": "CAP4-03-00021",
                    "label": "p. 11; topic 3 point 18"
                  }
                ]
              },
              {
                "html": "The resistance to flow of a fluid is called viscosity.",
                "sources": [
                  {
                    "id": "CAP4-03-00015",
                    "label": "p. 11; topic 3 point 12"
                  }
                ]
              },
              {
                "html": "In matching fluid properties with related phenomena, viscosity is matched with shear forces.",
                "sources": [
                  {
                    "id": "CAP4-03-00008",
                    "label": "pp. 10, 11; topic 3 point 6"
                  }
                ]
              },
              {
                "html": "Fluids which undergo strain rates proportional to the applied shear stress are termed Newtonian fluids.",
                "sources": [
                  {
                    "id": "CAP4-03-00058",
                    "label": "p. 12; topic 3 point 55"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00021",
                "label": "p. 11; topic 3 point 18"
              },
              {
                "id": "CAP4-03-00015",
                "label": "p. 11; topic 3 point 12"
              },
              {
                "id": "CAP4-03-00008",
                "label": "pp. 10, 11; topic 3 point 6"
              },
              {
                "id": "CAP4-03-00058",
                "label": "p. 12; topic 3 point 55"
              }
            ]
          },
          {
            "id": "viscosity-dimensions-and-temperature",
            "title": "Dimensions of velocity gradient and viscosity, and the effect of temperature",
            "html": "<p>Dimensional bookkeeping catches unit slips in viscosity work. A <em>velocity gradient</em> \\(du/dy\\) divides a velocity, L T<sup>−1</sup>, by a length, L, and leaves T<sup>−1</sup>. It is a rate of shear deformation, measured in s<sup>−1</sup>, not a velocity or an acceleration.</p><p>Shear stress has dimensions M L<sup>−1</sup> T<sup>−2</sup>, so dynamic viscosity \\(\\mu = \\tau/(du/dy)\\) has dimensions M L<sup>−1</sup> T<sup>−1</sup> and the SI unit Pa s. <em>Kinematic viscosity</em> \\(\\nu = \\mu/\\rho\\) divides this by density, M L<sup>−3</sup>. Mass cancels, leaving L<sup>2</sup> T<sup>−1</sup>, in m<sup>2</sup>/s; enter \\(\\nu\\) in those units, never in Pa s, for instance in a Reynolds number.</p><p>Heating affects liquids and gases in opposite directions over ordinary ranges. In a liquid it weakens the cohesive resistance between molecules, so a lubricating oil thins. In a dilute gas, viscosity arises mainly from molecular momentum exchange between layers, which intensifies as the molecules move faster, so the viscosity usually rises. Treat both as usual trends at stated conditions, not laws for every complex fluid.</p>",
            "formulas": [
              {
                "label": "Dimensions of dynamic viscosity",
                "tex": "\\begin{aligned}\\dim\\mu &= \\dfrac{\\mathrm{ML^{-1}T^{-2}}}{\\mathrm{T^{-1}}} \\\\ &= \\mathrm{ML^{-1}T^{-1}}\\end{aligned}"
              },
              {
                "label": "Kinematic viscosity",
                "tex": "\\nu = \\dfrac{\\mu}{\\rho}, \\qquad \\dim\\nu = \\mathrm{L^{2}T^{-1}}"
              }
            ],
            "moreHtml": "<p>Unit reminders: 1 Pa s = 10 poise and 1 m<sup>2</sup>/s = 10<sup>4</sup> stokes. A liquid with \\(\\mu = 0.0012\\ \\text{Pa s}\\) and density 1000 kg/m<sup>3</sup> has \\(\\nu = 1.2 \\times 10^{-6}\\ \\text{m}^2\\text{/s}\\).</p>",
            "points": [
              {
                "html": "The dimensional formula of velocity gradient is \\(\\mathrm{M^0L^0T^{-1}}\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00018",
                    "label": "p. 11; topic 3 point 15"
                  }
                ]
              },
              {
                "html": "The dimension of kinematic viscosity is \\(\\mathrm{M^0L^2T^{-1}}\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00016",
                    "label": "p. 11; topic 3 point 13"
                  }
                ]
              },
              {
                "html": "The viscosity of a liquid decreases with increase in temperature.",
                "sources": [
                  {
                    "id": "CAP4-03-00017",
                    "label": "p. 11; topic 3 point 14"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00018",
                "label": "p. 11; topic 3 point 15"
              },
              {
                "id": "CAP4-03-00016",
                "label": "p. 11; topic 3 point 13"
              },
              {
                "id": "CAP4-03-00017",
                "label": "p. 11; topic 3 point 14"
              }
            ]
          },
          {
            "id": "newtonian-and-non-newtonian-fluids",
            "title": "Newtonian and non-Newtonian fluids: reading a flow curve",
            "html": "<p>A <em>flow curve</em> plots shear stress against shear rate at a fixed temperature. A Newtonian fluid gives a straight line through the origin whose slope is its constant dynamic viscosity. Curvature, or an intercept on the stress axis, rules out that model, although the shape of the curve is still needed to name the non-Newtonian type.</p><ul><li><em>Power-law fluids</em> have an apparent viscosity, stress divided by shear rate, that falls with shear rate when \\(n \\lt 1\\) (pseudoplastic or shear-thinning) and rises when \\(n \\gt 1\\) (dilatant or shear-thickening). The exponent \\(n = 1\\) recovers the Newtonian case.</li><li><em>Yield-stress fluids</em> resist flow until a finite stress is exceeded, and then their resistance varies with rate. The Bingham plastic is the simplest idealization. Pastes such as peanut butter commonly behave this way, but the actual law must be fitted to the sample and temperature.</li></ul><p>The consistency coefficient \\(k\\) has units of Pa s<sup>n</sup>, so it equals the apparent viscosity only when \\(n = 1\\).</p>",
            "formulas": [
              {
                "label": "Power-law fluid",
                "tex": "\\tau = k\\left(\\dfrac{du}{dy}\\right)^{n}"
              },
              {
                "label": "Apparent viscosity",
                "tex": "\\mu_{\\text{app}} = \\dfrac{\\tau}{du/dy} = k\\left(\\dfrac{du}{dy}\\right)^{n-1}"
              },
              {
                "label": "Bingham plastic, above the yield stress",
                "tex": "\\tau = \\tau_y + \\mu_p \\dfrac{du}{dy}"
              }
            ],
            "example": {
              "title": "Worked example: a power-law fluid with exponent two",
              "html": "<p>Take \\(\\tau = 0.05\\,(du/dy)^2\\) with the coefficient in Pa s<sup>2</sup>, sheared at 4 s<sup>−1</sup>.</p>\\[\\begin{aligned}\\tau &amp;= 0.05 \\times 4^2 = 0.80\\ \\text{Pa} \\\\ \\mu_{\\text{app}} &amp;= \\dfrac{0.80}{4} = 0.20\\ \\text{Pa s}\\end{aligned}\\]<p>At 8 s<sup>−1</sup> the stress is 3.2 Pa and the apparent viscosity 0.40 Pa s. Apparent viscosity doubles when the shear rate doubles and there is no yield intercept, so the law describes shear thickening.</p>"
            },
            "points": [
              {
                "html": "A non-Newtonian fluid is one which does not follow Newton's law of viscosity.",
                "sources": [
                  {
                    "id": "CAP4-03-00012",
                    "label": "p. 11; topic 3 point 9"
                  }
                ]
              },
              {
                "html": "Peanut butter is an example of a Non-Newtonian fluid.",
                "sources": [
                  {
                    "id": "CAP4-03-00013",
                    "label": "p. 11; topic 3 point 10"
                  }
                ]
              },
              {
                "html": "If the relationship between shear stress and rate of deformation is \\(\\tau = 0.05\\left(\\dfrac{du}{dy}\\right)^2\\), the type of fluid is dilatant.",
                "sources": [
                  {
                    "id": "CAP4-03-00119",
                    "label": "p. 14; topic 3 point 117"
                  }
                ]
              },
              {
                "html": "A fluid obeys \\(\\tau = K\\dot{\\gamma}^2\\) with \\(K = 0.05\\) Pa s<sup>2</sup>. At shear rate 4 s<sup>-1</sup>, its apparent dynamic viscosity is 0.20 Pa s.",
                "sources": [
                  {
                    "id": "CAP4-03-00120",
                    "label": "p. 14; topic 3 point 117"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00012",
                "label": "p. 11; topic 3 point 9"
              },
              {
                "id": "CAP4-03-00013",
                "label": "p. 11; topic 3 point 10"
              },
              {
                "id": "CAP4-03-00119",
                "label": "p. 14; topic 3 point 117"
              },
              {
                "id": "CAP4-03-00120",
                "label": "p. 14; topic 3 point 117"
              }
            ]
          },
          {
            "id": "density-weight-and-specific-properties",
            "title": "Density, specific weight, specific volume, specific gravity and weight",
            "html": "<p>Four related properties describe how much matter a fluid packs into space. <em>Density</em> \\(\\rho\\) is mass per unit volume, in kg/m<sup>3</sup>. <em>Specific weight</em> \\(\\gamma = \\rho g\\) is weight per unit volume, in N/m<sup>3</sup>, and depends on local gravity. <em>Specific volume</em> is volume per unit mass, the reciprocal of density, so a denser fluid has a smaller specific volume.</p><p>The <em>specific gravity</em> of a liquid is the dimensionless ratio of its density to the density of water at a stated reference temperature. Dividing by water's specific weight, or by any specific volume, would not give a pure number.</p><p>Mass is an intrinsic amount of matter, while weight \\(W = mg\\) changes with gravitational acceleration. If one location's \\(g\\) is a fixed multiple of another's, weights scale by that multiple and the mass stays the same.</p><p>Water is anomalous near freezing. At ordinary pressure pure freshwater is densest near 4 °C, and both warming and cooling from there lower its density. Because volume is mass divided by density, a fixed mass of water occupies its smallest volume near 4 °C.</p>",
            "formulas": [
              {
                "label": "Specific weight",
                "tex": "\\gamma = \\rho g"
              },
              {
                "label": "Specific volume",
                "tex": "v = \\dfrac{1}{\\rho}"
              },
              {
                "label": "Specific gravity of a liquid",
                "tex": "SG = \\dfrac{\\rho}{\\rho_{w}}",
                "where": "<p>\\(\\rho_{w}\\) is the density of water at the stated reference temperature.</p>"
              },
              {
                "label": "Weight",
                "tex": "W = mg"
              }
            ],
            "example": {
              "title": "Worked examples: specific volume of an oil and a weight on the Moon",
              "html": "<p>For an oil of density 800 kg/m<sup>3</sup>:</p>\\[v = \\dfrac{1}{800} = 0.00125\\ \\text{m}^3\\text{/kg}\\]<p>For a body that weighs 120 N on the Moon, with Earth's gravity taken as six times the Moon's, the mass is unchanged and so</p>\\[W_{\\text{Earth}} = 6 \\times 120 = 720\\ \\text{N}\\]"
            },
            "points": [
              {
                "html": "In matching fluid properties with related phenomena, specific gravity is matched with density of water.",
                "sources": [
                  {
                    "id": "CAP4-03-00007",
                    "label": "pp. 10, 11; topic 3 point 6"
                  }
                ]
              },
              {
                "html": "Specific volume is defined as the reciprocal of density.",
                "sources": [
                  {
                    "id": "CAP4-03-00014",
                    "label": "p. 11; topic 3 point 11"
                  }
                ]
              },
              {
                "html": "The density of water is maximum at 4 °C.",
                "sources": [
                  {
                    "id": "CAP4-03-00010",
                    "label": "p. 11; topic 3 point 7"
                  }
                ]
              },
              {
                "html": "If the weight of a body on the moon's surface is 120 N, the weight of the same body on the earth's surface is 720 N.",
                "sources": [
                  {
                    "id": "CAP4-03-00131",
                    "label": "p. 14; topic 3 point 128"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00007",
                "label": "pp. 10, 11; topic 3 point 6"
              },
              {
                "id": "CAP4-03-00014",
                "label": "p. 11; topic 3 point 11"
              },
              {
                "id": "CAP4-03-00010",
                "label": "p. 11; topic 3 point 7"
              },
              {
                "id": "CAP4-03-00131",
                "label": "p. 14; topic 3 point 128"
              }
            ]
          },
          {
            "id": "compressibility-and-bulk-modulus",
            "title": "Compressibility and bulk modulus of liquids and gases",
            "html": "<p>The <em>bulk modulus</em> \\(K\\) measures a fluid's resistance to a change of volume. The minus sign in its definition makes \\(K\\) positive, because a rise in pressure reduces the volume. Its reciprocal is the <em>compressibility</em>. For a small pressure increment the magnitude of the volume strain is \\(dp/K\\), so a stiffer fluid compresses less.</p><p>Liquid water has a far larger bulk modulus than air at ordinary conditions. Soil mechanics therefore models pore water as practically incompressible relative to trapped air, while recognising that water is not perfectly incompressible and that mineral solids can be stiffer than water.</p><p>An <em>ideal incompressible liquid</em> is the limit in which a finite pressure increment causes no change of volume: \\(K\\) tends to infinity and compressibility to zero. Real liquids have large but finite bulk moduli.</p><p>Measured liquid bulk moduli commonly increase with operating pressure, so a further increment of the same size produces a smaller fractional volume change. That is an observed trend at the stated temperature, not a consequence of the definition.</p>",
            "formulas": [
              {
                "label": "Bulk modulus",
                "tex": "K = -\\dfrac{dp}{dV/V}"
              },
              {
                "label": "Compressibility",
                "tex": "\\beta = \\dfrac{1}{K}"
              },
              {
                "label": "Volume strain for a small increment",
                "tex": "\\left|\\dfrac{\\Delta V}{V}\\right| \\approx \\dfrac{\\Delta p}{K}"
              }
            ],
            "example": {
              "title": "Worked example: one increment at two stiffnesses",
              "html": "<p>Take an assumed \\(K = 2.0\\ \\text{GPa}\\) and a pressure rise of 10 MPa. The volume strain is \\(10/2000 = 0.005\\), that is 0.5%.</p><p>If \\(K\\) at the higher pressure were measured as 2.5 GPa, a further 10 MPa would compress the liquid by only \\(10/2500 = 0.004\\), or 0.4%. The same increment applied to a gas would produce a far larger strain.</p>"
            },
            "points": [
              {
                "html": "Water has its minimum compressibility at room temperature.",
                "sources": [
                  {
                    "id": "CAP4-02-00066",
                    "label": "p. 8; topic 2 point 61"
                  }
                ]
              },
              {
                "html": "The value of bulk modulus for an incompressible liquid is infinite.",
                "sources": [
                  {
                    "id": "CAP4-03-00121",
                    "label": "p. 14; topic 3 point 119"
                  }
                ]
              },
              {
                "html": "The bulk modulus of a liquid increases with increase in pressure.",
                "sources": [
                  {
                    "id": "CAP4-03-00011",
                    "label": "p. 11; topic 3 point 8"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00066",
                "label": "p. 8; topic 2 point 61"
              },
              {
                "id": "CAP4-03-00121",
                "label": "p. 14; topic 3 point 119"
              },
              {
                "id": "CAP4-03-00011",
                "label": "p. 11; topic 3 point 8"
              }
            ]
          },
          {
            "id": "surface-tension-drops-and-bubbles",
            "title": "Surface tension, spherical drops and excess pressure in drops and bubbles",
            "html": "<p><em>Surface tension</em> \\(\\sigma\\), in N/m, is the force per unit length acting along a liquid interface, or equivalently the energy needed to create unit area of new surface. With \\(\\sigma\\) constant, surface energy is proportional to interfacial area. A small drop on which gravity and air drag have negligible effect therefore takes the shape that encloses its volume with the least area: a sphere.</p><p>A curved interface supports a pressure difference. Cutting a drop of radius \\(R\\) through its centre and balancing forces on one half gives \\(\\Delta p\\,\\pi R^2 = 2\\pi R\\,\\sigma\\), so the excess pressure inside a drop is \\(2\\sigma/R\\).</p><p>A soap bubble is a thin film with an inner and an outer interface. The surface-tension force doubles and the excess pressure becomes \\(4\\sigma/R\\); using the single-interface drop result would halve it. Both are excess pressures over the surrounding air, so add the surrounding absolute pressure to obtain the absolute pressure inside. Smaller drops and bubbles have larger excess pressures.</p>",
            "formulas": [
              {
                "label": "Excess pressure inside a liquid drop",
                "tex": "\\Delta p = \\dfrac{2\\sigma}{R}"
              },
              {
                "label": "Excess pressure inside a soap bubble",
                "tex": "\\Delta p = \\dfrac{4\\sigma}{R}",
                "where": "<p>The film has two interfaces; \\(\\Delta p\\) is the excess over the surrounding pressure, not the absolute internal pressure.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a soap bubble of radius 10 mm",
              "html": "<p>With \\(\\sigma = 0.025\\ \\text{N/m}\\) at each surface of the film and \\(R = 0.010\\ \\text{m}\\):</p>\\[\\Delta p = \\dfrac{4 \\times 0.025}{0.010} = 10\\ \\text{Pa}\\]<p>The single-interface drop expression would give 5 Pa, half the value for a two-interface film.</p>"
            },
            "points": [
              {
                "html": "The spherical shape of water drops is due to the property of surface tension.",
                "sources": [
                  {
                    "id": "CAP4-03-00023",
                    "label": "p. 11; topic 3 point 20"
                  }
                ]
              },
              {
                "html": "The excess pressure inside a soap bubble of radius \\(R\\) is \\(\\dfrac{4T}{R}\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00024",
                    "label": "p. 11; topic 3 point 21"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00023",
                "label": "p. 11; topic 3 point 20"
              },
              {
                "id": "CAP4-03-00024",
                "label": "p. 11; topic 3 point 21"
              }
            ]
          },
          {
            "id": "capillary-rise-force-balance",
            "title": "Capillary rise: force balance, contact angle and the governing equation",
            "html": "<p><em>Capillarity</em> is an interfacial effect produced by surface tension and wetting at a solid wall. Where the meniscus meets the tube, surface tension pulls along the liquid surface at the <em>contact angle</em> \\(\\theta\\), taken inside the liquid. For a wetting liquid, with \\(\\theta \\lt 90^\\circ\\), that pull has an upward vertical component, and this component carries the raised column. Viscosity only affects how quickly equilibrium is reached, and density contributes only the weight of the column.</p><p>For a vertical circular tube of internal radius \\(r\\), the contact line is \\(2\\pi r\\) long, so the upward force is \\(2\\pi r\\,\\sigma\\cos\\theta\\). Ignoring the liquid in the meniscus itself, the raised column weighs \\(\\rho g\\,\\pi r^2 h\\). Equating the two gives the capillary equation.</p><p>The sign of \\(\\cos\\theta\\) sets the direction. A wetting liquid rises; a nonwetting liquid, with \\(\\theta \\gt 90^\\circ\\), is depressed below the reservoir level; and at exactly 90° the vertical component vanishes, so there is neither rise nor depression even though the surface tension is finite.</p>",
            "formulas": [
              {
                "label": "Force balance on the raised column",
                "tex": "2\\pi r\\,\\sigma\\cos\\theta = \\rho g\\,\\pi r^2 h"
              },
              {
                "label": "Capillary rise",
                "tex": "h = \\dfrac{2\\sigma\\cos\\theta}{\\rho g r} = \\dfrac{4\\sigma\\cos\\theta}{\\rho g d}",
                "where": "<p>\\(r\\) is the internal radius and \\(d\\) the internal diameter; a negative \\(h\\) is a depression.</p>"
              }
            ],
            "moreHtml": "<p>The equation assumes a clean tube of uniform bore, a large reservoir that keeps the outside level fixed, static equilibrium and a spherical meniscus. It gives an equilibrium height, not the height produced by pouring a chosen volume of liquid into the tube.</p>",
            "points": [
              {
                "html": "The rise of a liquid in a capillary tube is due to surface tension.",
                "sources": [
                  {
                    "id": "CAP4-03-00003",
                    "label": "p. 10; topic 3 point 3"
                  }
                ]
              },
              {
                "html": "In a capillary tube of radius \\(r\\), the force balance for a capillary rise \\(h\\) is \\(2\\pi r\\sigma\\cos\\theta = \\rho g\\,\\pi r^2 h\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00005",
                    "label": "p. 10; topic 3 point 5"
                  }
                ]
              },
              {
                "html": "In matching fluid properties with related phenomena, capillarity is matched with surface tension.",
                "sources": [
                  {
                    "id": "CAP4-03-00009",
                    "label": "pp. 10, 11; topic 3 point 6"
                  }
                ]
              },
              {
                "html": "If a capillary tube is dipped into a liquid and the levels of the liquid inside and outside are the same, the angle of contact is 90°.",
                "sources": [
                  {
                    "id": "CAP4-03-00124",
                    "label": "p. 14; topic 3 point 122"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00003",
                "label": "p. 10; topic 3 point 3"
              },
              {
                "id": "CAP4-03-00005",
                "label": "p. 10; topic 3 point 5"
              },
              {
                "id": "CAP4-03-00009",
                "label": "pp. 10, 11; topic 3 point 6"
              },
              {
                "id": "CAP4-03-00124",
                "label": "p. 14; topic 3 point 122"
              }
            ]
          },
          {
            "id": "capillary-scaling-and-temperature",
            "title": "Capillary proportionality: tube size, diameter ratios and surface-tension changes",
            "html": "<p>Most capillary problems need proportional reasoning rather than full substitution. With the same liquid, wetting condition and gravity, \\(h\\) varies inversely with the tube radius: the upward force grows with \\(r\\) while the column weight grows with \\(r^2\\). The product \\(hd\\) is then constant, so for two tubes dipping into one reservoir the diameter ratio is the inverse of the height ratio. This holds for reservoir-fed equilibrium heights, not for tubes filled with equal poured volumes.</p><p>At fixed radius, density and contact angle, \\(h\\) is directly proportional to \\(\\sigma\\). Heating usually lowers surface tension, so a given percentage fall in \\(\\sigma\\) produces the same percentage fall in rise. A general temperature rule would also have to check changes in density and wetting.</p><p>The same reasoning covers depression. For a nonwetting liquid \\(\\cos\\theta\\) is negative and \\(h\\) is a signed, negative displacement. Lowering a positive \\(\\sigma\\) makes \\(h\\) less negative: the depressed level moves up toward the reservoir level but does not cross it while \\(\\theta\\) stays above 90° and the density is unchanged.</p>",
            "formulas": [
              {
                "label": "Inverse dependence on tube size",
                "tex": "h \\propto \\dfrac{1}{r}, \\qquad h_1 d_1 = h_2 d_2"
              },
              {
                "label": "Dependence on surface tension",
                "tex": "\\dfrac{h_2}{h_1} = \\dfrac{\\sigma_2}{\\sigma_1}",
                "where": "<p>Radius, density and contact angle are held constant.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: a tripled radius, a height ratio and a weaker surface tension",
              "html": "<ol><li>An 18 mm rise becomes \\(18/3 = 6\\ \\text{mm}\\) when the tube radius is tripled, neglecting meniscus volume.</li><li>Rises in the ratio \\(h_P/h_Q = 2/3\\) give \\(d_P/d_Q = h_Q/h_P = 3/2\\), a diameter ratio of 3:2.</li><li>A 10% fall in \\(\\sigma\\) multiplies \\(h\\) by 0.90, so the rise decreases by 10%.</li><li>For a nonwetting liquid the same fall turns a 10 mm depression into a 9 mm one: the level rises toward the reservoir surface but stays below it.</li></ol>"
            },
            "points": [
              {
                "html": "The rise of a liquid in a capillary tube depends on the inner radius of the tube.",
                "sources": [
                  {
                    "id": "CAP4-03-00001",
                    "label": "p. 10; topic 3 point 1"
                  }
                ]
              },
              {
                "html": "Two capillary tubes P and Q are dipped in water. The height of water in P is 2/3 of the height in Q. The ratio of their diameters is 3:2.",
                "sources": [
                  {
                    "id": "CAP4-03-00002",
                    "label": "p. 10; topic 3 point 2"
                  }
                ]
              },
              {
                "html": "For a liquid, the capillary rise (or fall) decreases with a rise in temperature.",
                "sources": [
                  {
                    "id": "CAP4-03-00004",
                    "label": "p. 10; topic 3 point 4"
                  }
                ]
              },
              {
                "html": "With a rise in temperature, the capillary rise of a liquid decreases because its surface tension decreases.",
                "sources": [
                  {
                    "id": "CAP4-03-00148",
                    "label": "p. 10; topic 3 point 4"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00001",
                "label": "p. 10; topic 3 point 1"
              },
              {
                "id": "CAP4-03-00002",
                "label": "p. 10; topic 3 point 2"
              },
              {
                "id": "CAP4-03-00004",
                "label": "p. 10; topic 3 point 4"
              },
              {
                "id": "CAP4-03-00148",
                "label": "p. 10; topic 3 point 4"
              }
            ]
          },
          {
            "id": "vapour-pressure-cavitation-and-property-roles",
            "title": "Vapour pressure, cavitation and matching properties to phenomena",
            "html": "<p><em>Vapour pressure</em> is the pressure at which a liquid and its vapour coexist at a given temperature. If the local absolute pressure in a flowing liquid falls to about this value, vapour cavities form; this is <em>cavitation</em>. It occurs where velocities are high and pressures low, for example near pump impellers and in suction lines. Viscosity affects friction losses, and bulk modulus and specific gravity describe other behaviour, but none of them is the phase-change threshold.</p><p>A useful revision device pairs each property with what it physically controls:</p><table><thead><tr><th scope='col'>Property</th><th scope='col'>Phenomenon or role</th></tr></thead><tbody><tr><th scope='row'>Surface tension</th><td>Capillary rise or depression, curved menisci</td></tr><tr><th scope='row'>Vapour pressure</th><td>Onset of cavitation at low absolute pressure</td></tr><tr><th scope='row'>Dynamic viscosity</th><td>Shear stress between fluid layers</td></tr><tr><th scope='row'>Specific gravity</th><td>Density relative to reference water</td></tr></tbody></table><p>Because each pairing rests on what the property does, it holds in whatever order the items are listed.</p>",
            "moreHtml": "<p>Vapour pressure rises with temperature, so a warm liquid reaches its cavitation threshold at a higher absolute pressure than a cold one. Always compare absolute pressure, not gauge pressure, with the vapour pressure.</p>",
            "points": [
              {
                "html": "In matching fluid properties with related phenomena, vapour pressure is matched with cavitation.",
                "sources": [
                  {
                    "id": "CAP4-03-00006",
                    "label": "pp. 10, 11; topic 3 point 6"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00006",
                "label": "pp. 10, 11; topic 3 point 6"
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
            "tex": "\\nu = \\dfrac{\\mu}{\\rho}",
            "note": "Dimensions L<sup>2</sup>T<sup>−1</sup>; unit m<sup>2</sup>/s."
          },
          {
            "label": "Power-law fluid",
            "tex": "\\tau = k\\left(\\dfrac{du}{dy}\\right)^{n}",
            "note": "Shear-thinning for \\(n \\lt 1\\), shear-thickening for \\(n \\gt 1\\)."
          },
          {
            "label": "Apparent viscosity",
            "tex": "\\mu_{\\text{app}} = \\dfrac{\\tau}{du/dy}"
          },
          {
            "label": "Specific weight and specific volume",
            "tex": "\\gamma = \\rho g, \\qquad v = \\dfrac{1}{\\rho}"
          },
          {
            "label": "Specific gravity of a liquid",
            "tex": "SG = \\dfrac{\\rho}{\\rho_{w}}",
            "note": "Water density at the stated reference temperature."
          },
          {
            "label": "Bulk modulus",
            "tex": "K = -\\dfrac{dp}{dV/V}",
            "note": "Compressibility is its reciprocal."
          },
          {
            "label": "Excess pressure in a liquid drop",
            "tex": "\\Delta p = \\dfrac{2\\sigma}{R}"
          },
          {
            "label": "Excess pressure in a soap bubble",
            "tex": "\\Delta p = \\dfrac{4\\sigma}{R}"
          },
          {
            "label": "Capillary rise",
            "tex": "h = \\dfrac{4\\sigma\\cos\\theta}{\\rho g d}"
          }
        ],
        "cautions": [],
        "gaps": [
          "The capsule points supply no property tables, so densities, viscosities, surface tensions and vapour pressures at stated temperatures must come from a reliable data source.",
          "Cavitation is covered only as the vapour-pressure threshold; suction-head margins and cavitation damage are not developed in this topic.",
          "Non-Newtonian coverage stops at recognising power-law and yield-stress behaviour; fitting rheological models to measured data is outside these questions."
        ]
      },
      "ACiE0302": {
        "code": "ACiE0302",
        "questionCount": 17,
        "format": 2,
        "summary": "<p>Hydrostatics deals with fluids at rest: how pressure is referenced and measured, how it grows with depth, the forces it puts on submerged surfaces, and buoyancy and the stability of floating bodies. The capsule questions test signed gauge pressure, manometer readings, the centre of pressure, Archimedes' principle in several forms and the metacentric-height test.</p>",
        "blocks": [
          {
            "id": "absolute-and-gauge-pressure",
            "title": "Absolute and gauge pressure, and what a Bourdon gauge reads",
            "html": "<p>Pressure is quoted against one of two references. <em>Absolute pressure</em> is measured from a perfect vacuum, while <em>gauge pressure</em> is measured from the local atmosphere. Treat gauge pressure as a signed quantity: positive above atmospheric, negative for suction.</p><p>With that convention the atmospheric term is always added. Only a vacuum reported as a positive magnitude is subtracted from atmospheric pressure, and it describes the same state as a negative gauge reading.</p><p>An ordinary <em>Bourdon gauge</em> has a curved, flattened tube that straightens as the pressure inside exceeds the pressure around it. Its case is vented to the atmosphere, so the pointer shows gauge pressure. Instruments that read absolute pressure need a sealed vacuum reference instead.</p>",
            "formulas": [
              {
                "label": "Absolute pressure",
                "tex": "p_{\\text{abs}} = p_{\\text{atm}} + p_{\\text{gauge}}",
                "where": "<p>\\(p_{\\text{gauge}}\\) is signed: positive above atmospheric pressure, negative for suction or vacuum.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a suction line",
              "html": "<p>A suction-line gauge reads −25 kPa where the atmosphere is 95 kPa absolute.</p><ol><li>Keep the sign with the gauge reading: \\(p_{\\text{gauge}} = -25\\ \\text{kPa}\\).</li><li>Add the atmospheric term: \\(p_{\\text{abs}} = 95 + (-25) = 70\\ \\text{kPa}\\).</li></ol><p>Quoting the same state as a 25 kPa vacuum gives 95 − 25 = 70 kPa absolute, the same result.</p>"
            },
            "points": [
              {
                "html": "The relation between absolute pressure, atmospheric pressure and gauge pressure is \\(P_\\mathrm{abs} = P_\\mathrm{atm} + P_\\mathrm{gauge}\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00026",
                    "label": "p. 11; topic 3 point 23"
                  }
                ]
              },
              {
                "html": "A Bourdon gauge is used to measure gauge pressure.",
                "sources": [
                  {
                    "id": "CAP4-03-00033",
                    "label": "p. 11; topic 3 point 30"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00026",
                "label": "p. 11; topic 3 point 23"
              },
              {
                "id": "CAP4-03-00033",
                "label": "p. 11; topic 3 point 30"
              }
            ]
          },
          {
            "id": "pascals-law-scalar-pressure",
            "title": "Pascal's law: pressure is a scalar",
            "html": "<p><em>Pascal's law</em> states that at a point in a fluid at rest the pressure is the same in every direction. Pressure has magnitude but no direction of its own; it pushes normally on whatever surface it meets.</p><p>In a moving viscous fluid the normal stress on differently oriented planes can differ. That difference belongs to the <em>viscous stresses</em>, which depend on how the fluid is deforming.</p>",
            "points": [
              {
                "html": "The pressure at a point in a fluid will not be the same in all directions when the fluid is viscous and moving.",
                "sources": [
                  {
                    "id": "CAP4-03-00027",
                    "label": "p. 11; topic 3 point 24"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00027",
                "label": "p. 11; topic 3 point 24"
              }
            ]
          },
          {
            "id": "pressure-variation-with-depth",
            "title": "Pressure variation with depth and piezometric head",
            "html": "<p>A vertical force balance on a small element of static fluid shows that pressure falls as you move up, with \\(z\\) measured upward. For a liquid of constant density this integrates to a constant <em>piezometric head</em> throughout a connected body of that liquid.</p><p>Pressure alone rises with depth and elevation alone rises with height, and the two trade off exactly. Measured from an atmospheric free surface, the gauge pressure at depth \\(h\\) is \\(\\rho g h\\).</p><p>State the value of \\(g\\) you use. Taking 9.81 m/s² or 9.8 m/s² gives slightly different answers, and mixing them in one line of working is an arithmetic slip, not a physical difference.</p>",
            "formulas": [
              {
                "label": "Hydrostatic equation",
                "tex": "\\dfrac{dp}{dz} = -\\rho g"
              },
              {
                "label": "Piezometric head is constant",
                "tex": "z + \\dfrac{p}{\\rho g} = \\text{constant}"
              },
              {
                "label": "Gauge pressure at depth h",
                "tex": "p = \\rho g h"
              }
            ],
            "example": {
              "title": "Worked example: one metre of water",
              "html": "<p>With \\(\\rho = 1000\\ \\text{kg/m}^3\\) and \\(g = 9.81\\ \\text{m/s}^2\\), the gauge pressure 1.0 m below the surface is</p>\\[p = 1000 \\times 9.81 \\times 1.0 = 9810\\ \\text{Pa}\\]<p>Using \\(g = 9.8\\ \\text{m/s}^2\\) would give 9800 Pa instead.</p>"
            },
            "points": [
              {
                "html": "For a static fluid, the piezometric head remains constant at all points in the liquid.",
                "sources": [
                  {
                    "id": "CAP4-03-00029",
                    "label": "p. 11; topic 3 point 26"
                  }
                ]
              },
              {
                "html": "The pressure at a depth of 1 m below the water surface is 9810 Pa.",
                "sources": [
                  {
                    "id": "CAP4-03-00030",
                    "label": "p. 11; topic 3 point 27"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00029",
                "label": "p. 11; topic 3 point 26"
              },
              {
                "id": "CAP4-03-00030",
                "label": "p. 11; topic 3 point 27"
              }
            ]
          },
          {
            "id": "manometers",
            "title": "Manometers: open U-tubes and differential gauges",
            "html": "<p>Read any manometer by walking through the connected fluid columns from one end to the other: add \\(\\rho g h\\) for each step down, subtract it for each step up, and equate the total to the pressure at the far end. Horizontal steps within one continuous fluid change nothing.</p><ul><li><em>Open U-tube on a gas line.</em> If the gas-side level is pushed down by \\(h\\), the gas is above atmospheric pressure by \\(\\rho_m g h\\). Gas density is usually negligible, and a raised gas-side level means suction.</li><li><em>Differential gauge between two taps.</em> For taps at the same elevation on a water pipe, the water in both limbs partly balances the mercury, so the density difference replaces the mercury density.</li></ul>",
            "formulas": [
              {
                "label": "Open U-tube, gas gauge pressure",
                "tex": "p_{\\text{gas}} = \\rho_m g h",
                "where": "<p>\\(\\rho_m\\) is the manometer-liquid density and \\(h\\) the level difference, with the gas side lower.</p>"
              },
              {
                "label": "Differential gauge, equal-elevation taps",
                "tex": "\\Delta p = (\\rho_{\\text{Hg}} - \\rho_w)\\, g\\, h"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<p>Mercury gauge between equal-elevation water taps with a 0.15 m level difference:</p>\\[\\begin{aligned}\\Delta p &amp;= (13600 - 1000) \\times 9.81 \\times 0.15 \\\\ &amp;= 18\\,540.9\\ \\text{Pa} \\approx 18.54\\ \\text{kPa}\\end{aligned}\\]<p>Water U-tube with the gas side 0.25 m lower:</p>\\[p = 1000 \\times 9.81 \\times 0.25 = 2452.5\\ \\text{Pa}\\]<p>That is about +2.45 kPa gauge. Using the mercury density alone in the first case would overstate the difference as 20.01 kPa.</p>"
            },
            "points": [
              {
                "html": "A U-tube (differential) manometer is used to measure the pressure difference between two points.",
                "sources": [
                  {
                    "id": "CAP4-03-00101",
                    "label": "p. 13; topic 3 point 100"
                  }
                ]
              },
              {
                "html": "The instrument used to measure the gas pressure in a pipe is the u-tube manometer.",
                "sources": [
                  {
                    "id": "CAP4-03-00113",
                    "label": "p. 13; topic 3 point 110"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00101",
                "label": "p. 13; topic 3 point 100"
              },
              {
                "id": "CAP4-03-00113",
                "label": "p. 13; topic 3 point 110"
              }
            ]
          },
          {
            "id": "forces-on-submerged-surfaces",
            "title": "Hydrostatic force on plane and curved surfaces",
            "html": "<p>On a plane surface in a constant-density liquid, the resultant hydrostatic force equals the pressure at the area centroid times the area. Atmospheric pressure acts on both faces and cancels, so only the liquid's gauge pressure counts.</p><p>The force does not act at the centroid. Pressure increases with depth, so the lower part of an inclined or vertical plane carries more load and the <em>centre of pressure</em> lies deeper than the centroid. The offset shrinks as the plane is submerged more deeply and vanishes only for a horizontal plane.</p><p>The reference point is the geometric area centroid, which coincides with a gate's centre of gravity only when the gate is uniform.</p><p>For a curved surface under a <em>uniform net pressure</em>, the force component along any axis equals the pressure times the area projected normal to that axis. Over a hemispherical dome the axial resultant is \\(p\\pi r^2\\), not pressure times the curved area \\(2\\pi r^2\\).</p>",
            "formulas": [
              {
                "label": "Resultant force on a plane",
                "tex": "F = \\rho g \\bar{h} A"
              },
              {
                "label": "Depth of the centre of pressure",
                "tex": "h_p = \\bar{h} + \\dfrac{I_G \\sin^2\\theta}{A\\,\\bar{h}}",
                "where": "<p>\\(\\bar{h}\\) is the centroid depth, \\(I_G\\) the second moment of area about the centroidal axis parallel to the surface line, and \\(\\theta\\) the inclination of the plane to the horizontal.</p>"
              },
              {
                "label": "Uniform pressure on a hemisphere, along its axis",
                "tex": "F_{\\text{axis}} = p\\,\\pi r^2"
              }
            ],
            "points": [
              {
                "html": "For an inclined plane submerged in a liquid, the centre of pressure on one side of the plane is below the centre of gravity.",
                "sources": [
                  {
                    "id": "CAP4-03-00123",
                    "label": "p. 14; topic 3 point 121"
                  }
                ]
              },
              {
                "html": "The force on a hemispherical part of radius \\(r\\) acted on by a pressure \\(P_0\\) is \\(\\pi r^2P_0\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00028",
                    "label": "p. 11; topic 3 point 25"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00123",
                "label": "p. 14; topic 3 point 121"
              },
              {
                "id": "CAP4-03-00028",
                "label": "p. 11; topic 3 point 25"
              }
            ]
          },
          {
            "id": "buoyancy-archimedes",
            "title": "Buoyancy and Archimedes' principle",
            "html": "<p>Integrating hydrostatic pressure over the whole surface of a submerged body gives a net upward force, the <em>buoyant force</em>. Horizontal components cancel, and the vertical resultant equals the weight of liquid displaced. This holds whether the body floats, is held under or is sinking.</p><p>Buoyancy depends only on the liquid density, gravity and the displaced volume. A rigid body therefore keeps the same buoyant force at any depth in a constant-density liquid: pressure grows on its top and bottom alike, so their difference does not change.</p><p>Buoyancy acts upward, opposite gravity, because pressure is higher below the body. A body moving through the liquid also feels drag and dynamic pressure forces that depend on its motion. Treat those separately, since buoyancy does not reverse when the motion does.</p>",
            "formulas": [
              {
                "label": "Buoyant force",
                "tex": "F_B = \\rho g V_{\\text{disp}}"
              }
            ],
            "example": {
              "title": "Worked reasoning: melting ice",
              "html": "<p>Floating ice of mass \\(m\\) displaces water of the same weight, a volume \\(m/\\rho_w\\). When it melts it becomes exactly that volume of water, so the level remains unchanged. The result assumes pure ice in fresh water and ignores evaporation and temperature effects; it does not carry over to ice floating in a denser liquid or to a sinking solid.</p>"
            },
            "points": [
              {
                "html": "The resultant force on a body due to the fluid surrounding it is called the buoyant force.",
                "sources": [
                  {
                    "id": "CAP4-03-00025",
                    "label": "p. 11; topic 3 point 22"
                  }
                ]
              },
              {
                "html": "As a stone sinks deeper into a lake, the upthrust (buoyant force) acting on it remains constant.",
                "sources": [
                  {
                    "id": "CAP4-03-00135",
                    "label": "p. 14; topic 3 point 131"
                  }
                ]
              },
              {
                "html": "When a spherical ball drops through a fluid, it experiences buoyancy in the vertically upward direction.",
                "sources": [
                  {
                    "id": "CAP4-03-00134",
                    "label": "p. 14; topic 3 point 130"
                  }
                ]
              },
              {
                "html": "When a block of ice floating on water in a container melts, the level of water in the container remains the same.",
                "sources": [
                  {
                    "id": "CAP4-03-00111",
                    "label": "pp. 13, 15; topic 3 point 108; topic 3 point 141"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00025",
                "label": "p. 11; topic 3 point 22"
              },
              {
                "id": "CAP4-03-00135",
                "label": "p. 14; topic 3 point 131"
              },
              {
                "id": "CAP4-03-00134",
                "label": "p. 14; topic 3 point 130"
              },
              {
                "id": "CAP4-03-00111",
                "label": "pp. 13, 15; topic 3 point 108; topic 3 point 141"
              }
            ]
          },
          {
            "id": "apparent-weight-two-liquids",
            "title": "Apparent weight: volume and true weight from two liquids",
            "html": "<p>A body suspended fully submerged has an apparent weight equal to its true weight minus the buoyant force. Weighing the same body in two liquids gives two such equations with the same displaced volume, so the difference between the readings equals the difference between the buoyant forces.</p><p>That difference yields the volume directly. The true weight then follows from either equation and always exceeds both submerged readings. Using one liquid's full density in place of the density difference is the usual slip.</p>",
            "formulas": [
              {
                "label": "Apparent weight",
                "tex": "W_{\\text{app}} = W - \\rho g V"
              },
              {
                "label": "Same body in two liquids",
                "tex": "W_{\\text{app},2} - W_{\\text{app},1} = (\\rho_1 - \\rho_2)\\, g V"
              }
            ],
            "example": {
              "title": "Worked example: 50 N in water, 80 N in oil of SG 0.80",
              "html": "<ol><li>Difference of readings: \\(80 - 50 = 30\\ \\text{N}\\), which equals \\((1000 - 800)\\,g V\\).</li><li>Volume: \\(V = 30/1962 = 0.01529\\ \\text{m}^3\\), about 15.29 litres.</li><li>Water buoyancy: \\(B = 9810 \\times 0.01529 \\approx 150\\ \\text{N}\\).</li><li>True weight: \\(W = 50 + 150 = 200\\ \\text{N}\\).</li></ol>"
            },
            "points": [
              {
                "html": "An object weighs 50 N in water and 80 N in an oil of specific gravity 0.8. Its volume is 15.3 litres.",
                "sources": [
                  {
                    "id": "CAP4-03-00132",
                    "label": "p. 14; topic 3 point 129"
                  }
                ]
              },
              {
                "html": "The same readings give a true weight of 200 N: \\(W = 50 + B = 80 + 0.80B\\) makes the water buoyancy 150 N.",
                "sources": [
                  {
                    "id": "CAP4-03-00133",
                    "label": "p. 14; topic 3 point 129"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00132",
                "label": "p. 14; topic 3 point 129"
              },
              {
                "id": "CAP4-03-00133",
                "label": "p. 14; topic 3 point 129"
              }
            ]
          },
          {
            "id": "metacentric-stability",
            "title": "Stability of floating bodies: metacentric height",
            "html": "<p>When a floating body heels through a small angle, the centre of buoyancy B moves toward the immersed side. The line of the buoyant force then crosses the body's centreline at the <em>metacentre</em> M. The body is initially stable if M lies above the centre of gravity G, because weight and buoyancy then form a restoring couple.</p><p>The metacentric radius BM is the second moment of the <em>waterplane area</em> about the heel axis divided by the displaced volume. The metacentric height GM then follows from BM and the separation BG. The test uses the centre of gravity, not a geometric centroid, and describes small-angle behaviour only.</p>",
            "formulas": [
              {
                "label": "Metacentric radius",
                "tex": "BM = \\dfrac{I}{V_{\\text{disp}}}"
              },
              {
                "label": "Metacentric height, G above B",
                "tex": "GM = BM - BG",
                "where": "<p>Initial stability requires \\(GM \\gt 0\\), that is M above G.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a vessel displacing 20 m³",
              "html": "<p>With \\(I = 12\\ \\text{m}^4\\) and \\(V = 20\\ \\text{m}^3\\), \\(BM = 12/20 = 0.60\\ \\text{m}\\). With G 0.40 m above B, \\(GM = 0.60 - 0.40 = 0.20\\ \\text{m}\\), so the vessel is initially stable.</p>"
            },
            "points": [
              {
                "html": "A vessel displacing 20 m³ with a 12 m⁴ waterplane second moment and G 0.40 m above B has \\(BM = 0.60\\) m and a metacentric height GM of 0.20 m.",
                "sources": [
                  {
                    "id": "CAP4-03-00031",
                    "label": "p. 11; topic 3 point 28"
                  }
                ]
              },
              {
                "html": "A floating body attains stable equilibrium if its metacentre is above its centre of gravity.",
                "sources": [
                  {
                    "id": "CAP4-03-00032",
                    "label": "p. 11; topic 3 point 29"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00031",
                "label": "p. 11; topic 3 point 28"
              },
              {
                "id": "CAP4-03-00032",
                "label": "p. 11; topic 3 point 29"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Absolute pressure",
            "tex": "p_{\\text{abs}} = p_{\\text{atm}} + p_{\\text{gauge}}"
          },
          {
            "label": "Hydrostatic equation",
            "tex": "\\dfrac{dp}{dz} = -\\rho g"
          },
          {
            "label": "Piezometric head",
            "tex": "z + \\dfrac{p}{\\rho g} = \\text{constant}"
          },
          {
            "label": "Differential manometer",
            "tex": "\\Delta p = (\\rho_m - \\rho)\\, g\\, h",
            "note": "Taps at equal elevation."
          },
          {
            "label": "Force on a plane surface",
            "tex": "F = \\rho g \\bar{h} A"
          },
          {
            "label": "Centre of pressure",
            "tex": "h_p = \\bar{h} + \\dfrac{I_G \\sin^2\\theta}{A\\,\\bar{h}}"
          },
          {
            "label": "Buoyant force",
            "tex": "F_B = \\rho g V_{\\text{disp}}"
          },
          {
            "label": "Apparent weight",
            "tex": "W_{\\text{app}} = W - F_B"
          },
          {
            "label": "Metacentric height",
            "tex": "GM = \\dfrac{I}{V} - BG",
            "note": "Initially stable when GM is positive."
          }
        ],
        "cautions": [],
        "gaps": [
          "Forces on curved gates with depth-varying pressure are touched only through the uniform-pressure hemisphere; full curved-surface integration and pressure diagrams are not worked.",
          "Stability coverage is limited to initial small-angle metacentric stability; large-angle righting behaviour and the stability of fully submerged bodies are not examined by these questions.",
          "Inclined-tube manometers, micromanometers and the calibration uncertainty of pressure gauges are outside the capsule items."
        ]
      },
      "ACiE0303": {
        "code": "ACiE0303",
        "questionCount": 23,
        "format": 2,
        "summary": "<p>Hydro-kinematics describes how a fluid moves and hydro-dynamics why: flow classification, conservation of mass in integral and local form, Bernoulli's equation and its extension to real flows, the momentum principle and flow measurement. The capsule questions test steady and uniform flow, continuity calculations, the incompressibility condition, the meaning of Bernoulli's heads, pressure changes in pipes and diffusers, jet forces, model similarity, Pitot tubes and meter coefficients.</p>",
        "blocks": [
          {
            "id": "flow-classification-and-continuity",
            "title": "Steady versus uniform flow, and the continuity equation for pipes and ducts",
            "html": "<p>Two independent questions classify a flow. Is it <em>steady</em>, with nothing changing in time at a fixed point? Is it <em>uniform</em>, with nothing changing from place to place along the flow at a given instant? A fixed discharge through a conical reducer is steady, because each section's velocity is constant in time, but nonuniform, because \\(V = Q/A\\) changes as the area changes.</p><p><em>Continuity</em> expresses conservation of mass for a control volume without leakage. In steady flow the mass rate entering equals the mass rate leaving. For a liquid of constant density this reduces to a constant volume discharge, so mean velocity varies inversely with area: halving the area doubles the speed. The narrowest section of a Venturi therefore carries the highest mean speed and, in the ideal energy model, the lowest static pressure.</p><p>For a gas whose density changes, equal volume discharge is wrong. Equate the mass flows and let the density ratio adjust the velocity.</p>",
            "formulas": [
              {
                "label": "Steady mass flow",
                "tex": "\\rho_1 A_1 V_1 = \\rho_2 A_2 V_2"
              },
              {
                "label": "Constant density",
                "tex": "A_1 V_1 = A_2 V_2 = Q"
              }
            ],
            "example": {
              "title": "Worked examples: a liquid contraction and a gas duct",
              "html": "<p>Liquid entering a contraction at 2 m/s, with the outlet area half the inlet area:</p>\\[V_2 = \\dfrac{A_1}{A_2}\\,V_1 = 2 \\times 2 = 4\\ \\text{m/s}\\]<p>Gas entering at 4 kg/m<sup>3</sup> through 0.03 m<sup>2</sup> at 20 m/s and leaving at 2 kg/m<sup>3</sup> through 0.02 m<sup>2</sup>:</p>\\[\\begin{aligned}\\dot{m} &amp;= 4 \\times 0.03 \\times 20 = 2.4\\ \\text{kg/s} \\\\ V_2 &amp;= \\dfrac{2.4}{2 \\times 0.02} = 60\\ \\text{m/s}\\end{aligned}\\]<p>Equating volume flows instead would give 30 m/s, ignoring the halving of density.</p>"
            },
            "points": [
              {
                "html": "When water flows through a frustum of a cone at a constant rate, the flow is steady and non-uniform.",
                "sources": [
                  {
                    "id": "CAP4-03-00125",
                    "label": "p. 14; topic 3 point 123"
                  }
                ]
              },
              {
                "html": "With constant density \\(A_1V_1 = A_2V_2\\), so halving the area doubles the mean speed: 2 m/s entering becomes 4 m/s at the outlet.",
                "sources": [
                  {
                    "id": "CAP4-03-00040",
                    "label": "p. 11; topic 3 point 37"
                  }
                ]
              },
              {
                "html": "For a gas, equate mass flows: 2.4 kg/s entering at 4 kg/m<sup>3</sup>, 0.03 m<sup>2</sup> and 20 m/s leaves at 60 m/s through 0.02 m<sup>2</sup> at 2 kg/m<sup>3</sup>.",
                "sources": [
                  {
                    "id": "CAP4-03-00039",
                    "label": "p. 11; topic 3 point 36"
                  }
                ]
              },
              {
                "html": "In a venturi meter, the highest velocity occurs at the throat.",
                "sources": [
                  {
                    "id": "CAP4-03-00050",
                    "label": "p. 12; topic 3 point 47"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00125",
                "label": "p. 14; topic 3 point 123"
              },
              {
                "id": "CAP4-03-00040",
                "label": "p. 11; topic 3 point 37"
              },
              {
                "id": "CAP4-03-00039",
                "label": "p. 11; topic 3 point 36"
              },
              {
                "id": "CAP4-03-00050",
                "label": "p. 12; topic 3 point 47"
              }
            ]
          },
          {
            "id": "local-continuity-and-incompressibility",
            "title": "Local form of continuity and the incompressibility condition",
            "html": "<p>At a point, conservation of mass is written as a partial differential equation that holds for steady or unsteady, one-, two- or three-dimensional, laminar or turbulent flow. The <em>velocity divergence</em> \\(\\nabla\\cdot\\mathbf{u}\\) is the fractional rate at which a moving fluid element changes its volume. A fluid whose elements keep their volume, as in incompressible motion, therefore needs zero divergence.</p><p>It constrains velocity gradients: if two normal gradients are known at a point, the third is fixed, but the velocity components themselves are not.</p><p>Keep three conditions apart:</p><ul><li>zero divergence, \\(\\nabla\\cdot\\mathbf{u} = 0\\): no volumetric expansion, the incompressibility condition;</li><li>zero curl, \\(\\nabla\\times\\mathbf{u} = 0\\): irrotational flow;</li><li>zero local time derivative, \\(\\partial\\mathbf{u}/\\partial t = 0\\): steady flow.</li></ul><p>A flow can satisfy any one of these without the others.</p>",
            "formulas": [
              {
                "label": "General local mass balance",
                "tex": "\\dfrac{\\partial \\rho}{\\partial t} + \\nabla\\cdot(\\rho\\,\\mathbf{u}) = 0"
              },
              {
                "label": "Incompressibility condition",
                "tex": "\\begin{aligned}\\nabla\\cdot\\mathbf{u} &= \\dfrac{\\partial u}{\\partial x} + \\dfrac{\\partial v}{\\partial y} + \\dfrac{\\partial w}{\\partial z} \\\\ &= 0\\end{aligned}"
              }
            ],
            "example": {
              "title": "Worked example: the missing velocity gradient",
              "html": "<p>At a point in incompressible flow \\(\\partial u/\\partial x = 2\\ \\text{s}^{-1}\\) and \\(\\partial v/\\partial y = -5\\ \\text{s}^{-1}\\).</p>\\[2 - 5 + \\dfrac{\\partial w}{\\partial z} = 0 \\;\\Rightarrow\\; \\dfrac{\\partial w}{\\partial z} = 3\\ \\text{s}^{-1}\\]<p>This fixes the gradient of \\(w\\) at that point, not the value of \\(w\\) itself.</p>"
            },
            "points": [
              {
                "html": "The incompressibility condition in the Navier–Stokes equations is \\(\\nabla\\cdot\\mathbf{u} = 0\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00035",
                    "label": "pp. 11, 14; topic 3 point 32; topic 3 point 139"
                  }
                ]
              },
              {
                "html": "In three-dimensional incompressible flow with \\(\\partial u/\\partial x = 2\\) s<sup>-1</sup> and \\(\\partial v/\\partial y = -5\\) s<sup>-1</sup>, continuity requires \\(\\partial w/\\partial z = 3\\) s<sup>-1</sup>.",
                "sources": [
                  {
                    "id": "CAP4-03-00143",
                    "label": "p. 14; topic 3 point 140"
                  }
                ]
              },
              {
                "html": "The continuity equation \\(\\dfrac{\\partial u}{\\partial x} + \\dfrac{\\partial v}{\\partial y} = 0\\) is valid for steady, two-dimensional, incompressible flow.",
                "sources": [
                  {
                    "id": "CAP4-03-00109",
                    "label": "p. 13; topic 3 point 106"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00035",
                "label": "pp. 11, 14; topic 3 point 32; topic 3 point 139"
              },
              {
                "id": "CAP4-03-00143",
                "label": "p. 14; topic 3 point 140"
              },
              {
                "id": "CAP4-03-00109",
                "label": "p. 13; topic 3 point 106"
              }
            ]
          },
          {
            "id": "bernoulli-heads-and-streamlines",
            "title": "Bernoulli's equation: the three heads and where one constant applies",
            "html": "<p>For steady, inviscid, incompressible flow with no machines, Bernoulli's equation in head form adds three terms, each with units of length. Each is one component of mechanical energy per unit weight of fluid: <em>pressure head</em>, <em>velocity head</em> and <em>elevation head</em>. Only their sum is the <em>total head</em> \\(H\\). The <em>piezometric head</em> is the partial sum \\(z + p/(\\rho g)\\), which leaves out the velocity head.</p><p>State the datum for \\(z\\) and whether \\(p\\) is gauge or absolute. Both conventions shift the individual numbers, though not the differences between sections.</p><p>Where does one constant apply? The basic derivation integrates Euler's equation along a streamline, so in rotational flow the constant may differ from one streamline to another. If the flow is also <em>irrotational</em>, the result holds across streamlines and a single Bernoulli constant applies throughout a connected region. Different streamlines therefore may, but need not, carry different constants.</p>",
            "formulas": [
              {
                "label": "Bernoulli's equation in head form",
                "tex": "\\dfrac{p}{\\rho g} + \\dfrac{V^2}{2g} + z = H"
              },
              {
                "label": "Piezometric head",
                "tex": "h_{\\text{pz}} = z + \\dfrac{p}{\\rho g}"
              }
            ],
            "example": {
              "title": "Worked example: adding the heads at a section",
              "html": "<p>With an elevation head of 2 m, a gauge-pressure head of 3 m and a velocity head of 4 m, taking the kinetic-energy factor as one:</p>\\[H = 2 + 3 + 4 = 9\\ \\text{m}\\]<p>The piezometric head, \\(2 + 3 = 5\\ \\text{m}\\), omits the velocity head. Both values refer to the stated datum and to gauge pressure.</p>"
            },
            "points": [
              {
                "html": "In Bernoulli's equation, each term represents energy per unit weight.",
                "sources": [
                  {
                    "id": "CAP4-03-00034",
                    "label": "p. 11; topic 3 point 31"
                  }
                ]
              },
              {
                "html": "The total head is equal to velocity head + pressure head + datum head.",
                "sources": [
                  {
                    "id": "CAP4-03-00126",
                    "label": "p. 14; topic 3 point 124"
                  }
                ]
              },
              {
                "html": "According to Bernoulli's equation, the total energy is constant along a streamline but may differ from one streamline to another.",
                "sources": [
                  {
                    "id": "CAP4-03-00041",
                    "label": "p. 11; topic 3 point 38"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00034",
                "label": "p. 11; topic 3 point 31"
              },
              {
                "id": "CAP4-03-00126",
                "label": "p. 14; topic 3 point 124"
              },
              {
                "id": "CAP4-03-00041",
                "label": "p. 11; topic 3 point 38"
              }
            ]
          },
          {
            "id": "energy-equation-head-loss-and-diffusers",
            "title": "Real flows: head loss in the energy equation and pressure recovery in diffusers",
            "html": "<p>Viscosity dissipates mechanical energy as heat, so the lossless Bernoulli form cannot be applied unchanged to a real pipe. The engineering <em>energy equation</em> keeps the same heads and adds a positive loss term \\(h_L\\) between an upstream and a downstream section, plus pump or turbine heads where machines are present. Friction therefore makes the downstream total head smaller, never larger. Energy is still conserved; the dissipated part simply leaves the mechanical budget.</p><p>The same equation explains how flow can move from low to high static pressure. In a horizontal diffuser the stream slows, so its velocity head falls. If that fall exceeds the loss, static pressure rises along the flow even though total head falls.</p><p>Fluid does not have to travel from higher to lower static pressure; without added work it travels from higher to lower total head.</p>",
            "formulas": [
              {
                "label": "Energy equation, no pump or turbine",
                "tex": "H_1 = H_2 + h_L"
              },
              {
                "label": "Horizontal diffuser, unit energy factors",
                "tex": "\\dfrac{p_2 - p_1}{\\rho g} = \\dfrac{V_1^2 - V_2^2}{2g} - h_L"
              }
            ],
            "example": {
              "title": "Worked example: pressure recovery in a diffuser",
              "html": "<p>A horizontal diffuser slows water from 5 m/s to 2 m/s with an assumed loss of 0.30 m.</p>\\[\\begin{aligned}\\dfrac{V_1^2 - V_2^2}{2g} &amp;= \\dfrac{25 - 4}{19.62} = 1.070\\ \\text{m} \\\\ \\dfrac{p_2 - p_1}{\\rho g} &amp;= 1.070 - 0.30 = 0.770\\ \\text{m}\\end{aligned}\\]<p>The static pressure rises by about 7.56 kPa while the total head falls by the 0.30 m loss.</p>"
            },
            "points": [
              {
                "html": "Bernoulli's equation is not to be used for viscous flow.",
                "sources": [
                  {
                    "id": "CAP4-03-00042",
                    "label": "p. 11; topic 3 point 39"
                  }
                ]
              },
              {
                "html": "In flow through a diverging cone, it is possible for flow to occur from low to high pressure.",
                "sources": [
                  {
                    "id": "CAP4-03-00136",
                    "label": "p. 14; topic 3 point 132"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00042",
                "label": "p. 11; topic 3 point 39"
              },
              {
                "id": "CAP4-03-00136",
                "label": "p. 14; topic 3 point 132"
              }
            ]
          },
          {
            "id": "vertical-pipe-pressure-and-elevation",
            "title": "Flow in a vertical pipe of constant area: how pressure changes with height",
            "html": "<p>In a constant-area pipe, continuity makes the mean velocity the same at every section, so the velocity heads cancel between any two sections. Without friction or machines, Bernoulli's equation then collapses to the hydrostatic relation: pressure decreases as elevation increases.</p><p>This holds whether the water moves upward or downward. It is tempting to think that water flowing down must lose pressure as it descends, but its fall in elevation head is matched by an equal rise in pressure head. Between two sections a vertical distance \\(\\Delta z\\) apart, the lower pressure exceeds the upper by \\(\\rho g\\,\\Delta z\\).</p><p>Friction modifies this predictably. For downward flow a loss \\(h_L\\) between the sections reduces the pressure gain to \\(\\rho g(\\Delta z - h_L)\\); for upward flow pressure falls with height by \\(\\rho g(\\Delta z + h_L)\\). The elevation effect keeps the same sign in both cases.</p>",
            "formulas": [
              {
                "label": "Equal velocities, no losses",
                "tex": "\\dfrac{p}{\\rho g} + z = \\text{constant}"
              },
              {
                "label": "Pressure difference over a height",
                "tex": "p_{\\text{lower}} - p_{\\text{upper}} = \\rho g\\,\\Delta z"
              }
            ],
            "example": {
              "title": "Worked example: two sections 3 m apart",
              "html": "<p>For water with \\(\\rho = 1000\\ \\text{kg/m}^3\\) and \\(g = 9.81\\ \\text{m/s}^2\\), frictionless and with equal velocities:</p>\\[\\begin{aligned}p_{\\text{lower}} - p_{\\text{upper}} &amp;= 1000 \\times 9.81 \\times 3 \\\\ &amp;= 29\\,430\\ \\text{Pa} \\\\ &amp;= +29.43\\ \\text{kPa}\\end{aligned}\\]<p>The sign is the same for upward and downward flow.</p>"
            },
            "points": [
              {
                "html": "Water is flowing down steadily in a pipe of constant cross-section. According to Bernoulli's principle, the pressure increases as the water flows downward.",
                "sources": [
                  {
                    "id": "CAP4-03-00061",
                    "label": "p. 12; topic 3 point 57"
                  }
                ]
              },
              {
                "html": "Between sections 3 m apart vertically in such a pipe, the lower pressure exceeds the upper by 1000 × 9.81 × 3 = 29430 Pa, that is +29.43 kPa.",
                "sources": [
                  {
                    "id": "CAP4-03-00147",
                    "label": "p. 15; topic 3 point 144"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00061",
                "label": "p. 12; topic 3 point 57"
              },
              {
                "id": "CAP4-03-00147",
                "label": "p. 15; topic 3 point 144"
              }
            ]
          },
          {
            "id": "momentum-jets-plates-and-venturi",
            "title": "Momentum principle: jet forces on plates and control volumes around meters",
            "html": "<p>For a steady control volume, the resultant external force equals the net rate of momentum outflow, applied component by component as vectors. External forces include pressures on the control surfaces, reactions from walls or plates, and weight.</p><p>A horizontal jet striking a large, smooth, fixed flat plate at right angles cannot pass through it. The plate destroys the jet's normal velocity and the water spreads tangentially over the plate. In the jet direction the whole incoming momentum flux is removed, so the force on the plate is \\(\\rho A V^2\\). The speed along the plate may stay nearly unchanged; the change of direction produces the force. A curved vane that turned the jet completely back would ideally double it.</p><p>Momentum conservation applies to every flow, including a Venturi meter. A control volume around its converging section balances the change in momentum flux against the pressure forces on its ends and the wall reaction.</p>",
            "formulas": [
              {
                "label": "Steady momentum equation",
                "tex": "\\sum \\mathbf{F} = \\rho Q\\,(\\mathbf{V}_{\\text{out}} - \\mathbf{V}_{\\text{in}})"
              },
              {
                "label": "Normal jet on a fixed flat plate",
                "tex": "F = \\rho Q V = \\rho A V^2"
              }
            ],
            "example": {
              "title": "Worked example: force of a 10 m/s jet on a fixed plate",
              "html": "<p>A water jet of area 0.002 m<sup>2</sup> meets the plate normally and leaves along it.</p>\\[\\begin{aligned}\\rho A V &amp;= 1000 \\times 0.002 \\times 10 \\\\ &amp;= 20\\ \\text{kg/s} \\\\ F &amp;= 20 \\times 10 = 200\\ \\text{N}\\end{aligned}\\]<p>The normal velocity falls from 10 m/s to zero, so the whole momentum flux in the jet direction is removed.</p>"
            },
            "points": [
              {
                "html": "When a jet strikes a stationary vertical plate normally, after striking the jet moves along the plate.",
                "sources": [
                  {
                    "id": "CAP4-03-00047",
                    "label": "p. 12; topic 3 point 44"
                  }
                ]
              },
              {
                "html": "A water jet of 0.002 m<sup>2</sup> at 10 m/s carries 20 kg/s, and destroying its normal velocity puts \\(\\rho A V^2 = 200\\) N on the plate.",
                "sources": [
                  {
                    "id": "CAP4-03-00048",
                    "label": "p. 12; topic 3 point 45"
                  }
                ]
              },
              {
                "html": "The momentum principle is not applicable to the venturi meter.",
                "sources": [
                  {
                    "id": "CAP4-03-00036",
                    "label": "p. 11; topic 3 point 33"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00047",
                "label": "p. 12; topic 3 point 44"
              },
              {
                "id": "CAP4-03-00048",
                "label": "p. 12; topic 3 point 45"
              },
              {
                "id": "CAP4-03-00036",
                "label": "p. 11; topic 3 point 33"
              }
            ]
          },
          {
            "id": "inertia-force-and-model-similarity",
            "title": "Inertia-force conventions and geometric, kinematic and dynamic similarity",
            "html": "<p>Newton's second law says that the resultant of the real external forces on a fluid mass equals \\(m\\mathbf{a}\\). The d'Alembert convention moves that term across and introduces a fictitious <em>inertial force</em> \\(-m\\mathbf{a}\\), so the problem can be written as an equilibrium balance. Some texts loosely call the accelerating resultant the inertia force; whichever label is used, keep its sign and meaning explicit.</p><p>Hydraulic models relate to prototypes through three levels of similarity:</p><ul><li><em>Geometric</em>: all corresponding lengths share one scale ratio \\(L_r\\).</li><li><em>Kinematic</em>: corresponding velocities share one ratio \\(V_r\\), so streamline patterns are similar. Discharge then scales as area times velocity; similar discharge means this consistent scaling, not equal numerical discharge.</li><li><em>Dynamic</em>: ratios of corresponding forces are equal, achieved by matching the relevant dimensionless force groups.</li></ul>",
            "formulas": [
              {
                "label": "Real forces and the d'Alembert balance",
                "tex": "\\begin{aligned}\\sum \\mathbf{F}_{\\text{real}} &= m\\mathbf{a} \\\\ \\sum \\mathbf{F}_{\\text{real}} + (-m\\mathbf{a}) &= 0\\end{aligned}"
              },
              {
                "label": "Discharge scale under kinematic similarity",
                "tex": "Q_r = L_r^2\\, V_r"
              }
            ],
            "example": {
              "title": "Worked example: scaling a model discharge",
              "html": "<p>A model with lengths 1/25 and velocities 1/5 of the prototype values has</p>\\[Q_r = \\left(\\dfrac{1}{25}\\right)^2 \\times \\dfrac{1}{5} = \\dfrac{1}{3125}\\]<p>A prototype flow of 3125 m<sup>3</sup>/s therefore corresponds to 1 m<sup>3</sup>/s in the model.</p>"
            },
            "points": [
              {
                "html": "The net force acting on a fluid body which is responsible for producing acceleration is called the inertial force.",
                "sources": [
                  {
                    "id": "CAP4-03-00141",
                    "label": "p. 14; topic 3 point 137"
                  }
                ]
              },
              {
                "html": "The kinematic similarity between model and prototype is the similarity of discharge and streamline pattern.",
                "sources": [
                  {
                    "id": "CAP4-03-00049",
                    "label": "p. 12; topic 3 point 46"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00141",
                "label": "p. 14; topic 3 point 137"
              },
              {
                "id": "CAP4-03-00049",
                "label": "p. 12; topic 3 point 46"
              }
            ]
          },
          {
            "id": "pitot-tubes-point-velocity",
            "title": "Pitot and Pitot-static tubes: measuring velocity at a point",
            "html": "<p>A <em>Pitot tube</em> faces into the flow and brings the fluid at its mouth to rest. The pressure there is the <em>stagnation pressure</em>, which exceeds the local static pressure by the dynamic pressure \\(\\rho V^2/2\\). A <em>Pitot-static tube</em> senses both, and their difference gives the local speed. The velocity coefficient is close to one for a well-designed probe. Convert the pressure difference to pascals before substituting; a differential manometer reading \\(h\\) gives \\(\\Delta p = (\\rho_m - \\rho)gh\\).</p><p>Each reading is a local velocity at the probe position. A single reading is not automatically the mean velocity, nor does it give the discharge without area information. To estimate discharge, traverse the probe across the section and integrate the measured velocities over the area, or weight readings at chosen positions by the areas they represent.</p>",
            "formulas": [
              {
                "label": "Pitot-static tube",
                "tex": "V = C_v\\sqrt{\\dfrac{2\\,\\Delta p}{\\rho}}",
                "where": "<p>\\(\\Delta p\\) is stagnation minus static pressure, in Pa, and \\(C_v\\) the velocity coefficient.</p>"
              },
              {
                "label": "Discharge from a velocity traverse",
                "tex": "Q = \\int_A V\\, dA \\approx \\sum V_i\\, \\Delta A_i"
              }
            ],
            "example": {
              "title": "Worked example: a 2.0 kPa Pitot-static reading in water",
              "html": "<p>With \\(\\Delta p = 2000\\ \\text{Pa}\\), \\(\\rho = 1000\\ \\text{kg/m}^3\\) and \\(C_v = 1\\):</p>\\[V = \\sqrt{\\dfrac{2 \\times 2000}{1000}} = \\sqrt{4} = 2.0\\ \\text{m/s}\\]<p>Substituting 2.0 without converting kPa to Pa would understate the speed by a factor of about 32.</p>"
            },
            "points": [
              {
                "html": "A pitot tube is used to measure the velocity of flow.",
                "sources": [
                  {
                    "id": "CAP4-03-00052",
                    "label": "p. 12; topic 3 point 49"
                  }
                ]
              },
              {
                "html": "A pitot-static tube measures the velocity at a point of fluid in a stream.",
                "sources": [
                  {
                    "id": "CAP4-03-00077",
                    "label": "p. 12; topic 3 point 75"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00052",
                "label": "p. 12; topic 3 point 49"
              },
              {
                "id": "CAP4-03-00077",
                "label": "p. 12; topic 3 point 75"
              }
            ]
          },
          {
            "id": "venturi-orifice-meters-and-nappe",
            "title": "Venturi and orifice meters, discharge coefficients and the nappe over a weir",
            "html": "<p>A <em>Venturi meter</em> accelerates the flow into a throat of smaller area. Continuity makes the throat speed the largest, and the energy equation links the corresponding drop in piezometric head \\(\\Delta h\\) to the discharge. The <em>discharge coefficient</em> \\(C_d\\) corrects the ideal result for losses and non-uniform velocity.</p><p>An <em>orifice meter</em> replaces the smooth contraction with a sharp-edged plate. The jet contracts to a vena contracta and then mixes violently downstream, so losses are larger and \\(C_d\\) is much lower than for a Venturi. For an ordinary sharp-edged orifice plate, textbooks give about 0.62 to 0.65 as a first estimate. The actual value depends on Reynolds number, diameter ratio, edge condition and tapping positions, so calibration or an applicable standard governs design.</p><p>Over a sharp-crested weir or notch, the free sheet of water leaving the crest is the <em>nappe</em>. The crest is the solid overflow edge, afflux is the rise in upstream level caused by the structure, and tailwater is the water body or level downstream.</p>",
            "formulas": [
              {
                "label": "Venturi or orifice meter discharge",
                "tex": "Q = \\dfrac{C_d\\, A_1 A_2 \\sqrt{2g\\,\\Delta h}}{\\sqrt{A_1^2 - A_2^2}}",
                "where": "<p>\\(\\Delta h\\) is the drop in piezometric head between the inlet and the throat or vena contracta tapping.</p>"
              }
            ],
            "moreHtml": "<p>Because \\(Q\\) varies with \\(\\sqrt{\\Delta h}\\), halving the discharge through a given meter reduces the measured head difference to one quarter of its former value.</p>",
            "points": [
              {
                "html": "The coefficient of discharge for an orifice meter is in the range 0.62 to 0.65.",
                "sources": [
                  {
                    "id": "CAP4-03-00056",
                    "label": "p. 12; topic 3 point 53"
                  }
                ]
              },
              {
                "html": "The sheet of water flowing over a weir or notch is called the nappe.",
                "sources": [
                  {
                    "id": "CAP4-03-00038",
                    "label": "pp. 11, 12; topic 3 point 35; topic 3 point 66"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00056",
                "label": "p. 12; topic 3 point 53"
              },
              {
                "id": "CAP4-03-00038",
                "label": "pp. 11, 12; topic 3 point 35; topic 3 point 66"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Steady mass flow",
            "tex": "\\rho_1 A_1 V_1 = \\rho_2 A_2 V_2"
          },
          {
            "label": "Incompressible continuity",
            "tex": "A_1 V_1 = A_2 V_2 = Q"
          },
          {
            "label": "Local mass balance",
            "tex": "\\dfrac{\\partial \\rho}{\\partial t} + \\nabla\\cdot(\\rho\\,\\mathbf{u}) = 0"
          },
          {
            "label": "Incompressibility",
            "tex": "\\nabla\\cdot\\mathbf{u} = 0"
          },
          {
            "label": "Bernoulli's equation",
            "tex": "\\dfrac{p}{\\rho g} + \\dfrac{V^2}{2g} + z = H",
            "note": "Steady, inviscid, incompressible flow with no machines."
          },
          {
            "label": "Energy equation for real flow",
            "tex": "H_1 = H_2 + h_L",
            "note": "No pump or turbine between the sections."
          },
          {
            "label": "Steady momentum equation",
            "tex": "\\sum \\mathbf{F} = \\rho Q\\,(\\mathbf{V}_{\\text{out}} - \\mathbf{V}_{\\text{in}})"
          },
          {
            "label": "Normal jet on a fixed flat plate",
            "tex": "F = \\rho A V^2"
          },
          {
            "label": "Pitot-static tube",
            "tex": "V = C_v\\sqrt{\\dfrac{2\\,\\Delta p}{\\rho}}"
          },
          {
            "label": "Venturi or orifice meter",
            "tex": "Q = \\dfrac{C_d\\, A_1 A_2 \\sqrt{2g\\,\\Delta h}}{\\sqrt{A_1^2 - A_2^2}}"
          },
          {
            "label": "Kinematic similarity",
            "tex": "Q_r = L_r^2\\, V_r"
          }
        ],
        "cautions": [],
        "gaps": [
          "Flow-classification questions cover only steady versus uniform combinations; streamline, pathline and streakline definitions and flow nets are not examined.",
          "Momentum applications stop at a jet on a fixed flat plate; moving vanes, forces on pipe bends and jet propulsion are not treated.",
          "Flow-measurement coverage gives no numerical Venturi coefficient, notch equations or meter installation requirements."
        ]
      },
      "ACiE0304": {
        "code": "ACiE0304",
        "questionCount": 21,
        "format": 2,
        "summary": "<p>Pipe flow applies the energy and momentum equations to closed conduits flowing full. This subchapter covers energy and hydraulic grade lines, laminar Hagen-Poiseuille results, Darcy-Weisbach friction, Moody-chart regimes, local losses at expansions, contractions, exits, fittings and entrances, pipes in series and parallel, and pipe sizing. The capsule questions test grade-line meaning, friction-factor conventions, loss calculations, how losses scale with velocity, network rules and the effect of Manning roughness.</p>",
        "blocks": [
          {
            "id": "energy-and-hydraulic-grade-lines",
            "title": "Energy grade line and hydraulic grade line: what their positions mean",
            "html": "<p>Plotting heads along a pipeline turns the energy equation into a picture. The <em>hydraulic grade line</em> (HGL) joins the piezometric levels \\(z + p/(\\rho g)\\), the heights to which water would rise in piezometers. The <em>energy grade line</em> (EGL, or total energy line) lies above it by the velocity head; with a kinetic-energy factor of one the vertical gap is simply \\(V^2/(2g)\\).</p><p>That gap is a local velocity head, not the accumulated friction loss, which appears instead as the fall of the EGL along the pipe. The EGL can only fall in the direction of flow unless a pump adds energy.</p><p>The HGL's height above the centreline equals the gauge pressure head. In pipe flow, the HGL is always above the centre line of the pipe.</p>",
            "formulas": [
              {
                "label": "Hydraulic grade line",
                "tex": "\\text{HGL} = z + \\dfrac{p}{\\rho g}"
              },
              {
                "label": "Energy grade line",
                "tex": "\\text{EGL} = \\text{HGL} + \\alpha\\,\\dfrac{V^2}{2g}",
                "where": "<p>\\(\\alpha\\) is the kinetic-energy correction factor, taken as one here.</p>"
              },
              {
                "label": "Gauge pressure from the HGL position",
                "tex": "\\dfrac{p_{\\text{gauge}}}{\\rho g} = \\text{HGL} - z_{\\text{pipe}}"
              }
            ],
            "example": {
              "title": "Worked example: an HGL 2 m below a siphon summit",
              "html": "<p>If the HGL stands 2 m above the pipe centreline, the gauge pressure there is</p>\\[\\begin{aligned}p_{\\text{gauge}} &amp;= 1000 \\times 9.81 \\times 2 \\\\ &amp;= 19\\,620\\ \\text{Pa}\\end{aligned}\\]<p>that is, about 19.6 kPa of positive gauge pressure.</p>"
            },
            "points": [
              {
                "html": "The difference between the total energy line and the hydraulic grade line represents the velocity head.",
                "sources": [
                  {
                    "id": "CAP4-03-00037",
                    "label": "p. 11; topic 3 point 34"
                  }
                ]
              },
              {
                "html": "In pipe flow, the hydraulic grade line (HGL) is always above the centre line of the pipe.",
                "sources": [
                  {
                    "id": "CAP4-03-00102",
                    "label": "p. 13; topic 3 point 101"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00037",
                "label": "p. 11; topic 3 point 34"
              },
              {
                "id": "CAP4-03-00102",
                "label": "p. 13; topic 3 point 101"
              }
            ]
          },
          {
            "id": "laminar-pipe-flow-results",
            "title": "Fully developed laminar pipe flow: velocity profile, friction factor and head loss",
            "html": "<p>The Hagen-Poiseuille case is a Newtonian, incompressible fluid moving steadily in laminar, fully developed flow along a straight circular pipe whose wall allows no slip. Several exact results follow.</p><ul><li><em>Velocity profile.</em> The profile is parabolic, and integrating it over the area gives a mean speed of half the centreline speed. That ratio is special to this case; turbulent, developing and non-Newtonian profiles have other ratios.</li><li><em>Friction factor.</em> With Re defined on the mean speed and the diameter, the Darcy factor is 64/Re and the Fanning factor 16/Re. The Darcy factor is always four times the Fanning factor, so a bare 16/Re is right only in the Fanning convention.</li><li><em>Head loss.</em> Substituting the laminar factor into Darcy-Weisbach gives the Hagen-Poiseuille loss.</li></ul><p>That loss grows only linearly with velocity: the \\(V^2\\) in Darcy-Weisbach is offset by a friction factor that falls as \\(1/V\\). Doubling the mean speed in the same pipe doubles the friction loss.</p>",
            "formulas": [
              {
                "label": "Laminar velocity profile",
                "tex": "u = u_{\\max}\\left(1 - \\dfrac{r^2}{R^2}\\right)"
              },
              {
                "label": "Mean speed",
                "tex": "V = \\dfrac{u_{\\max}}{2}"
              },
              {
                "label": "Laminar friction factors",
                "tex": "f_D = \\dfrac{64}{\\mathrm{Re}}, \\qquad f_F = \\dfrac{16}{\\mathrm{Re}}",
                "where": "<p>\\(\\mathrm{Re} = VD/\\nu\\), based on the mean speed and the pipe diameter.</p>"
              },
              {
                "label": "Hagen-Poiseuille head loss",
                "tex": "h_f = \\dfrac{32\\,\\mu L V}{\\rho g D^2}"
              }
            ],
            "example": {
              "title": "Worked examples: laminar mean speed and the effect of doubling speed",
              "html": "<ol><li>A parabolic laminar profile with a centreline speed of 4 m/s has a mean speed of \\(4/2 = 2\\ \\text{m/s}\\).</li><li>With the same fluid and pipe, \\(h_f \\propto V\\), so doubling the mean speed multiplies the friction loss by 2, not 4.</li><li>At Re = 1600, \\(f_D = 64/1600 = 0.04\\) and \\(f_F = 16/1600 = 0.01\\).</li></ol>"
            },
            "points": [
              {
                "html": "The coefficient of friction for laminar flow is \\(\\dfrac{16}{\\mathrm{Re}}\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00043",
                    "label": "pp. 11, 15; topic 3 point 40; topic 3 point 145"
                  }
                ]
              },
              {
                "html": "The ratio of maximum velocity to average velocity of a viscous fluid flowing through a circular pipe is 2.",
                "sources": [
                  {
                    "id": "CAP4-03-00139",
                    "label": "p. 14; topic 3 point 135"
                  }
                ]
              },
              {
                "html": "The frictional resistance for fluids in motion is proportional to the velocity in laminar flow.",
                "sources": [
                  {
                    "id": "CAP4-03-00059",
                    "label": "p. 12; topic 3 point 56"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00043",
                "label": "pp. 11, 15; topic 3 point 40; topic 3 point 145"
              },
              {
                "id": "CAP4-03-00139",
                "label": "p. 14; topic 3 point 135"
              },
              {
                "id": "CAP4-03-00059",
                "label": "p. 12; topic 3 point 56"
              }
            ]
          },
          {
            "id": "darcy-weisbach-friction-loss",
            "title": "Darcy-Weisbach friction loss in velocity and discharge form",
            "html": "<p>The <em>Darcy-Weisbach equation</em> gives the friction head loss in a full pipe of length \\(L\\) and diameter \\(D\\), with \\(f_D\\) the dimensionless Darcy friction factor. A Fanning factor must be multiplied by four before it is used in this form, and fittings are handled separately as local losses.</p><p>When discharge rather than velocity is known, substitute \\(V = 4Q/(\\pi D^2)\\). Squaring gives \\(16Q^2/(\\pi^2 D^4)\\), which produces the factor 8 and the fifth power of diameter in the discharge form. In SI units with \\(g = 9.81\\ \\text{m/s}^2\\), \\(g\\pi^2/8 \\approx 12.1\\). The \\(D^5\\) term shows how strongly diameter controls loss at a given discharge.</p><p>In the fully rough turbulent regime the friction factor is effectively constant, so \\(h_f\\) varies with \\(V^2\\) and doubling the speed quadruples the loss. That exact square law should not be assumed where \\(f\\) still changes with Reynolds number.</p>",
            "formulas": [
              {
                "label": "Darcy-Weisbach, velocity form",
                "tex": "h_f = f_D\\,\\dfrac{L}{D}\\,\\dfrac{V^2}{2g}"
              },
              {
                "label": "Darcy-Weisbach, discharge form",
                "tex": "h_f = \\dfrac{8 f_D L Q^2}{g\\pi^2 D^5} \\approx \\dfrac{f_D L Q^2}{12.1\\,D^5}",
                "where": "<p>The 12.1 form assumes SI units and the Darcy factor.</p>"
              }
            ],
            "example": {
              "title": "Worked example: friction loss in a 100 m pipe",
              "html": "<p>For \\(L = 100\\ \\text{m}\\), \\(D = 0.20\\ \\text{m}\\), \\(V = 2\\ \\text{m/s}\\) and \\(f_D = 0.020\\):</p>\\[\\begin{aligned}h_f &amp;= 0.020 \\times \\dfrac{100}{0.20} \\times \\dfrac{2^2}{19.62} \\\\ &amp;= 2.04\\ \\text{m}\\end{aligned}\\]<p>If the flow were fully rough and the speed doubled with \\(f_D\\) unchanged, the loss would be four times as large.</p>"
            },
            "moreHtml": "<p>Both forms agree. A 500 m pipe of 0.30 m diameter carrying water at 1.5 m/s with \\(f_D = 0.018\\) loses 3.44 m by the velocity form. Its discharge is 0.1060 m<sup>3</sup>/s, and the discharge form returns the same 3.44 m.</p>",
            "points": [
              {
                "html": "A 100 m pipe of 0.20 m bore carrying water at 2 m/s with a Darcy factor of 0.020 loses about 2.04 m of head to friction, fittings excluded.",
                "sources": [
                  {
                    "id": "CAP4-03-00062",
                    "label": "p. 12; topic 3 point 58"
                  }
                ]
              },
              {
                "html": "The head loss formula \\(h_f = \\dfrac{fLQ^2}{12.1D^5}\\) is given by Darcy–Weisbach.",
                "sources": [
                  {
                    "id": "CAP4-03-00053",
                    "label": "p. 12; topic 3 point 50"
                  }
                ]
              },
              {
                "html": "In turbulent flow, the frictional resistance for fluids in motion is proportional to the square of the velocity.",
                "sources": [
                  {
                    "id": "CAP4-03-00060",
                    "label": "p. 12; topic 3 point 56"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00062",
                "label": "p. 12; topic 3 point 58"
              },
              {
                "id": "CAP4-03-00053",
                "label": "p. 12; topic 3 point 50"
              },
              {
                "id": "CAP4-03-00060",
                "label": "p. 12; topic 3 point 56"
              }
            ]
          },
          {
            "id": "moody-chart-roughness-and-mixing-length",
            "title": "Moody chart regimes, relative roughness and near-wall turbulence",
            "html": "<p>The Moody chart plots the Darcy friction factor against Reynolds number, with <em>relative roughness</em> \\(\\varepsilon/D\\) as the parameter. For the ratio to be dimensionless, \\(\\varepsilon\\) must be a length: the equivalent absolute roughness height of the wall, not the wall thickness, a friction factor or a viscosity.</p><table><thead><tr><th scope='col'>Regime</th><th scope='col'>Friction factor depends on</th><th scope='col'>Loss in a fixed pipe</th></tr></thead><tbody><tr><th scope='row'>Laminar</th><td>Re only, 64/Re</td><td>\\(h_f \\propto V\\)</td></tr><tr><th scope='row'>Transitional turbulent</th><td>Re and \\(\\varepsilon/D\\)</td><td>between \\(V\\) and \\(V^2\\)</td></tr><tr><th scope='row'>Fully rough turbulent</th><td>\\(\\varepsilon/D\\) only</td><td>\\(h_f \\propto V^2\\)</td></tr></tbody></table><p>On the fully rough branch the roughness elements protrude through the thin near-wall viscous layer, so the viscous Reynolds-number term in the resistance law becomes negligible and the curves flatten.</p><p>Prandtl's <em>mixing length</em> represents turbulent momentum exchange by the distance over which eddies carry fluid across the flow. An impermeable wall suppresses wall-normal motion, so in the idealized near-wall model the mixing length grows in proportion to wall distance and vanishes at the wall itself; it is not a constant equal to the pipe radius or diameter.</p>",
            "formulas": [
              {
                "label": "Near-wall mixing length",
                "tex": "l = \\kappa\\, y",
                "where": "<p>\\(y\\) is the distance from the wall and \\(\\kappa \\approx 0.4\\) the von Kármán constant, so \\(l\\) vanishes at the wall.</p>"
              }
            ],
            "moreHtml": "<p>Reading the chart: compute Re and \\(\\varepsilon/D\\), then locate the regime. If the point lies on a flat, fully rough curve, a change of flow rate changes the loss with the square of velocity; in laminar flow the loss changes in simple proportion to velocity.</p>",
            "points": [
              {
                "html": "In the parameter \\(e/D\\) of the Moody diagram, \\(e\\) represents the surface roughness height.",
                "sources": [
                  {
                    "id": "CAP4-03-00057",
                    "label": "p. 12; topic 3 point 54"
                  }
                ]
              },
              {
                "html": "In turbulent pipe flow, the Darcy friction factor \\(f\\) depends on both Reynolds number and relative roughness.",
                "sources": [
                  {
                    "id": "CAP4-03-00140",
                    "label": "p. 14; topic 3 point 136"
                  }
                ]
              },
              {
                "html": "Prandtl's mixing length is zero at the pipe wall.",
                "sources": [
                  {
                    "id": "CAP4-03-00051",
                    "label": "p. 12; topic 3 point 48"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00057",
                "label": "p. 12; topic 3 point 54"
              },
              {
                "id": "CAP4-03-00140",
                "label": "p. 14; topic 3 point 136"
              },
              {
                "id": "CAP4-03-00051",
                "label": "p. 12; topic 3 point 48"
              }
            ]
          },
          {
            "id": "sudden-expansion-contraction-exit-losses",
            "title": "Local losses at sudden expansions, sudden contractions and pipe exits",
            "html": "<p>Local or minor losses arise where the flow separates and then mixes turbulently to re-occupy the conduit. The <em>sudden expansion</em> is the classic case. Momentum and energy applied between the small pipe and a downstream section where the flow has re-attached give the <em>Borda-Carnot loss</em>. It is not the difference of the two velocity heads, because part of the kinetic head is recovered as pressure through the expansion.</p><p>At a pipe exit into a large reservoir the downstream speed is negligible and the whole velocity head is dissipated, so the exit coefficient is one. A free jet that still carries its kinetic energy beyond the outlet plane is a different boundary condition.</p><p>At a <em>sudden contraction</em> the fluid accelerates into the smaller pipe and separates at the sharp edge, forming a vena contracta narrower than the pipe. The acceleration itself converts pressure into velocity with little loss. Most of the loss comes afterwards, when the contracted jet re-expands and mixes to fill the pipe, effectively an expansion from the vena contracta; the contraction's geometry controls its coefficient.</p>",
            "formulas": [
              {
                "label": "Sudden expansion, Borda-Carnot",
                "tex": "h_L = \\dfrac{(V_1 - V_2)^2}{2g}"
              },
              {
                "label": "Exit into a large reservoir",
                "tex": "h_{\\text{exit}} = \\dfrac{V^2}{2g}"
              },
              {
                "label": "Sudden contraction treated as re-expansion",
                "tex": "h_L = \\left(\\dfrac{1}{C_c} - 1\\right)^2 \\dfrac{V_2^2}{2g}",
                "where": "<p>\\(C_c\\) is the vena contracta area as a fraction of the smaller pipe area, and \\(V_2\\) the speed in that pipe.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: a sudden expansion and an exit into a reservoir",
              "html": "<p>Speeds of 6 m/s before and 2 m/s after a sudden expansion:</p>\\[h_L = \\dfrac{(6 - 2)^2}{19.62} = \\dfrac{16}{19.62} = 0.815\\ \\text{m}\\]<p>Subtracting the velocity heads instead would give 1.631 m, ignoring the 0.815 m recovered as pressure head. A pipe discharging at 4 m/s into a large reservoir loses its full velocity head:</p>\\[h_{\\text{exit}} = \\dfrac{4^2}{19.62} = 0.815\\ \\text{m}\\]"
            },
            "points": [
              {
                "html": "With mean speeds of 6 and 2 m/s either side of a sudden expansion, the Borda-Carnot loss is \\((6 - 2)^2/19.62\\), about 0.815 m.",
                "sources": [
                  {
                    "id": "CAP4-03-00054",
                    "label": "p. 12; topic 3 point 51"
                  }
                ]
              },
              {
                "html": "In pipe flow, the minor loss due to a sudden contraction is mainly due to expansion of the flow after the vena contracta.",
                "sources": [
                  {
                    "id": "CAP4-06-00094",
                    "label": "p. 25; topic 6 point 95"
                  }
                ]
              },
              {
                "html": "A pipe discharging at 4 m/s into a large reservoir loses its whole velocity head, \\(16/19.62\\) or 0.815 m, with an exit coefficient of one.",
                "sources": [
                  {
                    "id": "CAP4-03-00115",
                    "label": "p. 14; topic 3 point 113"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00054",
                "label": "p. 12; topic 3 point 51"
              },
              {
                "id": "CAP4-06-00094",
                "label": "p. 25; topic 6 point 95"
              },
              {
                "id": "CAP4-03-00115",
                "label": "p. 14; topic 3 point 113"
              }
            ]
          },
          {
            "id": "loss-coefficients-fittings-valves-entrances",
            "title": "Loss coefficients for bends, valves and entrances",
            "html": "<p>Most fittings are handled with a loss coefficient \\(K\\). Three rules keep the calculation honest.</p><ul><li>Use the velocity at the section for which the coefficient was defined, usually the pipe speed at the fitting.</li><li>\\(K\\) belongs to a particular geometry and condition.</li><li>The result is a head loss, energy lost per unit weight, not a loss of discharge. In a steady unbranched incompressible line the same discharge passes before and after a valve while the energy grade line drops across it.</li></ul><p>Entrance shape matters too. A smoothly rounded <em>bell-mouth</em> entrance guides converging streamlines with little separation, so its loss is much smaller than that of a square-edged or re-entrant inlet. That makes it preferable when entrance loss is the objective; overall selection for a sluiceway also depends on structural, debris, cavitation and operating requirements.</p>",
            "formulas": [
              {
                "label": "Local loss at a fitting",
                "tex": "h_L = K\\,\\dfrac{V^2}{2g}",
                "where": "<p>\\(V\\) is the reference velocity for which \\(K\\) was specified.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: an elbow and a butterfly valve",
              "html": "<p>Elbow with a specified \\(K = 0.90\\) at 3 m/s:</p>\\[h_L = 0.90 \\times \\dfrac{3^2}{19.62} = 0.413\\ \\text{m}\\]<p>Butterfly valve with \\(K = 0.40\\) at its stated opening and 5 m/s:</p>\\[h_L = 0.40 \\times \\dfrac{5^2}{19.62} = 0.510\\ \\text{m}\\]<p>Both are losses of head; the discharge leaving each fitting equals the discharge entering it.</p>"
            },
            "moreHtml": "<p>Local losses add along a line. A fitting with an assumed \\(K = 1.5\\) in a pipe flowing at 2 m/s loses 0.306 m of head, so three such fittings contribute about 0.92 m.</p>",
            "points": [
              {
                "html": "An elbow with a specified K of 0.90 at a pipe speed of 3 m/s adds a local head loss of 0.413 m.",
                "sources": [
                  {
                    "id": "CAP4-03-00108",
                    "label": "p. 13; topic 3 point 105"
                  }
                ]
              },
              {
                "html": "A butterfly valve with K = 0.40 at 5 m/s causes a head loss of 0.510 m, an energy loss per unit weight; the discharge through it is unchanged.",
                "sources": [
                  {
                    "id": "CAP4-03-00144",
                    "label": "p. 15; topic 3 point 142"
                  }
                ]
              },
              {
                "html": "The superior type of entrance of a sluiceway in a dam structure is the bell-mouth entrance.",
                "sources": [
                  {
                    "id": "CAP4-03-00118",
                    "label": "p. 14; topic 3 point 116"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00108",
                "label": "p. 13; topic 3 point 105"
              },
              {
                "id": "CAP4-03-00144",
                "label": "p. 15; topic 3 point 142"
              },
              {
                "id": "CAP4-03-00118",
                "label": "p. 14; topic 3 point 116"
              }
            ]
          },
          {
            "id": "pipes-in-series-and-parallel",
            "title": "Pipes in series and in parallel: discharge and head-loss conditions",
            "html": "<p>Two network rules follow from conservation of mass and the single value of head at a junction.</p><ul><li><em>Series.</em> With steady incompressible flow and nothing drawn off on the way, the same discharge passes through every segment. Speeds differ with each segment's area, and each segment contributes its own loss, so the total head loss is the sum of the individual friction and local losses. Equal discharge does not mean equal velocity or equal loss.</li><li><em>Parallel.</em> Branches that leave one junction and rejoin at another all span the same difference in junction head, so each carries the same total head loss. The total discharge is the sum of the branch flows. The branches may differ in material, diameter and length; those properties decide how the flow divides, not whether the head losses match.</li></ul><p>Writing each branch loss as \\(h = rQ^2\\), a parallel pair satisfies \\(r_1Q_1^2 = r_2Q_2^2\\), so each branch discharge varies as \\(1/\\sqrt{r}\\). In series the resistances simply add at the common discharge.</p>",
            "formulas": [
              {
                "label": "Pipes in series",
                "tex": "Q_1 = Q_2 = Q_3, \\qquad h = \\sum h_i"
              },
              {
                "label": "Pipes in parallel",
                "tex": "h_1 = h_2 = h, \\qquad Q = \\sum Q_i"
              },
              {
                "label": "Friction resistance of one pipe",
                "tex": "h = rQ^2, \\qquad r = \\dfrac{8 f_D L}{g\\pi^2 D^5}"
              }
            ],
            "example": {
              "title": "Worked example: flow split between two parallel pipes",
              "html": "<p>Two parallel pipes of equal length and friction factor have diameters \\(D\\) and \\(2D\\). Equal head loss with \\(r \\propto 1/D^5\\) gives \\(Q \\propto D^{5/2}\\):</p>\\[\\dfrac{Q_{2D}}{Q_{D}} = 2^{2.5} = 5.66\\]<p>The larger pipe therefore carries about 85% of the total flow.</p>"
            },
            "points": [
              {
                "html": "When three pipes are connected in series, the discharge is the same through each pipe.",
                "sources": [
                  {
                    "id": "CAP4-03-00045",
                    "label": "p. 11; topic 3 point 42"
                  }
                ]
              },
              {
                "html": "When pipes of the same material are connected in parallel, the loss of head in each pipe is the same as the total loss of head.",
                "sources": [
                  {
                    "id": "CAP4-03-00046",
                    "label": "p. 12; topic 3 point 43"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00045",
                "label": "p. 11; topic 3 point 42"
              },
              {
                "id": "CAP4-03-00046",
                "label": "p. 12; topic 3 point 43"
              }
            ]
          },
          {
            "id": "pipe-sizing-continuity-and-manning-roughness",
            "title": "Sizing a pipe from continuity and the effect of roughness on the required gradient",
            "html": "<p>The simplest sizing step uses continuity alone. A required discharge at a chosen mean speed fixes the flow area \\(A = Q/V\\), and a full circular pipe of that area has \\(D = \\sqrt{4A/\\pi}\\). Keep area, radius and diameter distinct: reporting the area as a diameter, or forgetting that the radius is half the diameter, are common slips.</p><p>For gravity conduits flowing full, <em>Manning's equation</em> links roughness to the energy gradient \\(S\\), with hydraulic radius \\(D/4\\). At a fixed diameter the area and hydraulic radius are fixed, and a fixed discharge then fixes the velocity.</p><p>Manning's equation then requires \\(\\sqrt{S}/n\\) to stay constant, so \\(S \\propto n^2\\): doubling the roughness coefficient needs four times the gradient to carry the same flow at the same speed. That follows from the Manning model; it is not a rule that the required gradient grows linearly with roughness.</p>",
            "formulas": [
              {
                "label": "Diameter from continuity",
                "tex": "A = \\dfrac{Q}{V}, \\qquad D = \\sqrt{\\dfrac{4A}{\\pi}}"
              },
              {
                "label": "Manning's equation, full circular pipe",
                "tex": "V = \\dfrac{1}{n}\\,R^{2/3} S^{1/2}, \\qquad R = \\dfrac{D}{4}"
              },
              {
                "label": "Gradient needed for the same flow",
                "tex": "\\dfrac{S_2}{S_1} = \\left(\\dfrac{n_2}{n_1}\\right)^2"
              }
            ],
            "example": {
              "title": "Worked examples: sizing from continuity and a rougher lining",
              "html": "<p>For 35 m<sup>3</sup>/s at a mean speed of 1.4 m/s:</p>\\[\\begin{aligned}A &amp;= \\dfrac{35}{1.4} = 25\\ \\text{m}^2 \\\\ D &amp;= \\sqrt{\\dfrac{4 \\times 25}{\\pi}} = 5.64\\ \\text{m}\\end{aligned}\\]<p>At fixed diameter and discharge in Manning's equation, raising \\(n\\) from 0.010 to 0.020 multiplies the required gradient by \\((0.020/0.010)^2 = 4\\).</p>"
            },
            "moreHtml": "<p>Carrying 0.5 m<sup>3</sup>/s at 1.0 m/s needs 0.5 m<sup>2</sup> of area and a diameter of 0.798 m. If a lining ages from \\(n = 0.012\\) to \\(n = 0.015\\) at the same diameter and discharge, the required gradient rises by the factor 1.5625, about 56%.</p>",
            "points": [
              {
                "html": "For a discharge of \\(Q = 35\\) m<sup>3</sup>/s at a velocity of \\(V = 1.4\\) m/s, the diameter of the pipe is 5.64 m.",
                "sources": [
                  {
                    "id": "CAP4-03-00142",
                    "label": "p. 14; topic 3 point 138"
                  }
                ]
              },
              {
                "html": "When the coefficient of rugosity is increased from 0.01 to 0.02, the gradient of a pipe of a given diameter carrying the same flow at the same velocity should be increased by 4 times.",
                "sources": [
                  {
                    "id": "CAP4-03-00116",
                    "label": "p. 14; topic 3 point 114"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00142",
                "label": "p. 14; topic 3 point 138"
              },
              {
                "id": "CAP4-03-00116",
                "label": "p. 14; topic 3 point 114"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Hydraulic and energy grade lines",
            "tex": "\\text{EGL} = \\text{HGL} + \\dfrac{V^2}{2g}",
            "note": "HGL is \\(z + p/(\\rho g)\\); kinetic-energy factor one."
          },
          {
            "label": "Reynolds number",
            "tex": "\\mathrm{Re} = \\dfrac{VD}{\\nu}"
          },
          {
            "label": "Laminar friction factors",
            "tex": "f_D = \\dfrac{64}{\\mathrm{Re}}, \\qquad f_F = \\dfrac{16}{\\mathrm{Re}}"
          },
          {
            "label": "Laminar mean speed",
            "tex": "V = \\dfrac{u_{\\max}}{2}"
          },
          {
            "label": "Hagen-Poiseuille head loss",
            "tex": "h_f = \\dfrac{32\\,\\mu L V}{\\rho g D^2}"
          },
          {
            "label": "Darcy-Weisbach",
            "tex": "h_f = f_D\\,\\dfrac{L}{D}\\,\\dfrac{V^2}{2g}"
          },
          {
            "label": "Darcy-Weisbach, discharge form",
            "tex": "h_f = \\dfrac{8 f_D L Q^2}{g\\pi^2 D^5}",
            "note": "About \\(f_D L Q^2/(12.1 D^5)\\) in SI units."
          },
          {
            "label": "Sudden expansion",
            "tex": "h_L = \\dfrac{(V_1 - V_2)^2}{2g}"
          },
          {
            "label": "Fittings and exits",
            "tex": "h_L = K\\,\\dfrac{V^2}{2g}",
            "note": "Exit into a large reservoir: K = 1."
          },
          {
            "label": "Series and parallel pipes",
            "tex": "\\begin{aligned}\\text{series: } &Q \\text{ common},\\ h = \\sum h_i \\\\ \\text{parallel: } &h \\text{ common},\\ Q = \\sum Q_i\\end{aligned}"
          },
          {
            "label": "Diameter from continuity",
            "tex": "D = \\sqrt{\\dfrac{4Q}{\\pi V}}"
          },
          {
            "label": "Manning roughness effect",
            "tex": "\\dfrac{S_2}{S_1} = \\left(\\dfrac{n_2}{n_1}\\right)^2",
            "note": "Same full pipe, discharge and velocity."
          }
        ],
        "cautions": [],
        "gaps": [
          "Unsteady pipe flow, water hammer and relief devices such as surge tanks and relief valves are listed in the syllabus but not tested by these capsule questions.",
          "No questions cover pipe-network balancing, equivalent-pipe calculations or explicit turbulent friction-factor equations of the Colebrook type."
        ]
      },
      "ACiE0305": {
        "code": "ACiE0305",
        "questionCount": 33,
        "format": 2,
        "summary": "<p>This subchapter covers open-channel hydraulics: section geometry and efficient shapes, uniform flow with Manning and Chezy, the Froude number and critical flow, specific energy and hydraulic jumps, gradually varied flow profiles, weirs and outlets, and the start of sediment motion. The questions combine short calculations with the definitions and conditions each formula needs.</p>",
        "blocks": [
          {
            "id": "channel-section-geometry",
            "title": "Channel geometry: area, wetted perimeter, hydraulic radius and depth",
            "html": "<p>Open-channel formulas use a small set of properties of the wetted cross-section:</p><ul><li>Flow area A and top width T at the free surface.</li><li>Wetted perimeter P, the boundary length in contact with the water. The free surface is not part of it.</li><li>Hydraulic radius \\(R = A/P\\), used in friction and uniform-flow equations.</li><li>Hydraulic depth \\(D = A/T\\), used in the Froude number.</li></ul><p>For a trapezoid of bottom width B, depth y and side slope z horizontal to 1 vertical, each submerged side has length \\(y\\sqrt{1 + z^2}\\).</p><p>For a rectangle, \\(R = By/(B + 2y)\\). When the width is much larger than the depth, the sidewalls add little and \\(R \\approx y\\), the wide-channel approximation. This differs from the best hydraulic rectangle, \\(B = 2y\\), for which \\(R = y/2\\).</p>",
            "formulas": [
              {
                "label": "Hydraulic radius and hydraulic depth",
                "tex": "R = \\dfrac{A}{P},\\quad D = \\dfrac{A}{T}"
              },
              {
                "label": "Trapezoid area and top width",
                "tex": "A = (B + zy)y,\\quad T = B + 2zy"
              },
              {
                "label": "Trapezoid wetted perimeter",
                "tex": "P = B + 2y\\sqrt{1 + z^2}"
              }
            ],
            "example": {
              "title": "Worked example: B = 4 m, y = 2 m, sides 1.5H:1V",
              "html": "<p>Each sloping side is \\(2\\sqrt{1 + 1.5^2} = 2\\sqrt{3.25} = 3.606\\) m, so</p>\\[P = 4 + 4\\sqrt{3.25} = 11.211\\ \\text{m}\\]<p>The top width is not added: it is a free surface, not a wetted boundary.</p>"
            },
            "moreHtml": "<p>A trapezoid with B = 3 m, y = 1.5 m and z = 2 has A = 9 m², P = 9.708 m and R = 0.927 m, while T = 9 m and D = 1.0 m. R and D differ even for the same section.</p>",
            "points": [
              {
                "html": "A trapezoid with B = 4 m, y = 2 m and 1.5H:1V sides has a wetted perimeter of \\(4 + 4\\sqrt{3.25}\\) = 11.211 m.",
                "sources": [
                  {
                    "id": "CAP4-03-00075",
                    "label": "p. 12; topic 3 point 73"
                  }
                ]
              },
              {
                "html": "The hydraulic radius for a wide rectangular channel section is equal to the depth of flow.",
                "sources": [
                  {
                    "id": "CAP4-03-00064",
                    "label": "p. 12; topic 3 point 60"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00075",
                "label": "p. 12; topic 3 point 73"
              },
              {
                "id": "CAP4-03-00064",
                "label": "p. 12; topic 3 point 60"
              }
            ]
          },
          {
            "id": "hydraulically-efficient-sections",
            "title": "Hydraulically efficient sections: semicircle, rectangle, trapezoid and triangle",
            "html": "<p>For a fixed flow area, roughness and slope, uniform-flow conveyance increases with hydraulic radius, so the most efficient section minimizes the wetted perimeter for the given area. Among all shapes with a free top surface the semicircle does this. It is the mathematical optimum; cost, bank stability and lining often favour other practical sections.</p><table><thead><tr><th scope='col'>Best section</th><th scope='col'>Geometry</th><th scope='col'>Hydraulic radius</th></tr></thead><tbody><tr><th scope='row'>Semicircle, radius r</th><td>depth y = r</td><td>R = y/2</td></tr><tr><th scope='row'>Rectangle</th><td>B = 2y</td><td>R = y/2</td></tr><tr><th scope='row'>Trapezoid, given z</th><td>half the top width equals one sloping side</td><td>R = y/2</td></tr><tr><th scope='row'>Triangle</th><td>1H:1V sides, 90° vertex</td><td>\\(R = y/(2\\sqrt{2})\\)</td></tr></tbody></table><p>For the best trapezoid, the top width is the sum of the two submerged sloping-side lengths; a side-slope ratio is dimensionless and cannot itself form a width. For the best triangle, \\(A = y^2\\) and \\(P = 2\\sqrt{2}\\,y\\), so the trapezoid's y/2 does not carry over.</p>",
            "formulas": [
              {
                "label": "Best trapezoid",
                "tex": "\\dfrac{T}{2} = y\\sqrt{1 + z^2}"
              },
              {
                "label": "Best triangle",
                "tex": "R = \\dfrac{y}{2\\sqrt{2}} \\approx 0.354y"
              }
            ],
            "example": {
              "title": "Worked example: sloping sides of 2.5 m",
              "html": "<p>For the optimum trapezoid, \\(T = 2 \\times 2.5 = 5.0\\) m. A check with z = 1 and y = 2 m: each side is 2.828 m, T = 5.657 m, B = 1.657 m, A = P = 7.314 and R = 1.0 m = y/2.</p>"
            },
            "points": [
              {
                "html": "The most efficient channel section is semi-circular.",
                "sources": [
                  {
                    "id": "CAP4-03-00129",
                    "label": "p. 14; topic 3 point 126"
                  }
                ]
              },
              {
                "html": "The hydraulic radius of the most economical triangular channel section of depth \\(y\\) is \\(\\dfrac{y}{2\\sqrt{2}}\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00066",
                    "label": "p. 12; topic 3 point 62"
                  }
                ]
              },
              {
                "html": "In the most economical trapezoidal section, the top width is equal to the sum of the two sloping sides.",
                "sources": [
                  {
                    "id": "CAP4-03-00079",
                    "label": "p. 12; topic 3 point 77"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00129",
                "label": "p. 14; topic 3 point 126"
              },
              {
                "id": "CAP4-03-00066",
                "label": "p. 12; topic 3 point 62"
              },
              {
                "id": "CAP4-03-00079",
                "label": "p. 12; topic 3 point 77"
              }
            ]
          },
          {
            "id": "manning-chezy-uniform-flow",
            "title": "Uniform flow with Manning and Chezy: dimensions and sensitivity to roughness",
            "html": "<p>In uniform flow, the component of gravity along the slope balances boundary resistance, and depth, velocity and area stay constant along the reach. Two empirical equations are standard, and neither coefficient is dimensionless.</p><ul><li><em>Chezy.</em> V has dimensions L T<sup>−1</sup> and \\(\\sqrt{RS}\\) has L<sup>1/2</sup>, so C carries m<sup>1/2</sup>/s.</li><li><em>Manning (SI).</em> Rearranging for n gives dimensions T L<sup>−1/3</sup>, written s/m<sup>1/3</sup>. It is neither like the dimensionless Darcy factor nor like Chezy's C.</li></ul><p>Manning's equation shows how strongly roughness governs the slope needed for a given flow. If area, hydraulic radius and discharge stay the same, V is fixed, so \\(\\sqrt{S}\\) is proportional to n and doubling n needs four times the energy slope.</p>",
            "formulas": [
              {
                "label": "Chezy",
                "tex": "V = C\\sqrt{RS}"
              },
              {
                "label": "Manning, SI",
                "tex": "V = \\dfrac{R^{2/3}S^{1/2}}{n}"
              },
              {
                "label": "Linking the coefficients",
                "tex": "C = \\dfrac{R^{1/6}}{n}"
              },
              {
                "label": "Fixed geometry and discharge",
                "tex": "S \\propto n^2"
              }
            ],
            "example": {
              "title": "Worked example: roughness doubles",
              "html": "<p>With area, hydraulic radius and discharge unchanged, the slope scales with \\(n^2\\): an original 0.001 becomes \\(0.001 \\times 2^2 = 0.004\\).</p>"
            },
            "moreHtml": "<p>A rectangular channel 4 m wide flowing 1 m deep with n = 0.015 and S = 0.0009 has R = 0.667 m, V = 1.53 m/s and Q ≈ 6.1 m³/s; its equivalent Chezy coefficient is about 62 m<sup>1/2</sup>/s.</p>",
            "points": [
              {
                "html": "The dimension of Manning's rugosity coefficient is \\(\\mathrm{M^0L^{-1/3}T}\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00044",
                    "label": "p. 11; topic 3 point 41"
                  }
                ]
              },
              {
                "html": "The dimension of Chezy's coefficient \\(C\\) is \\(\\mathrm{L^{1/2}T^{-1}}\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00110",
                    "label": "p. 13; topic 3 point 107"
                  }
                ]
              },
              {
                "html": "If Manning's \\(n\\) is doubled, then to carry the same discharge in the same section the slope should be quadrupled.",
                "sources": [
                  {
                    "id": "CAP4-03-00072",
                    "label": "p. 12; topic 3 point 69"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00044",
                "label": "p. 11; topic 3 point 41"
              },
              {
                "id": "CAP4-03-00110",
                "label": "p. 13; topic 3 point 107"
              },
              {
                "id": "CAP4-03-00072",
                "label": "p. 12; topic 3 point 69"
              }
            ]
          },
          {
            "id": "estimating-manning-roughness",
            "title": "Estimating Manning's n: tabulated ranges and the Strickler relation",
            "html": "<p>Choosing n is usually the least certain step in a uniform-flow calculation.</p><ul><li><em>Tabulated ranges.</em> For clean, smooth-finished concrete an n of about 0.011 to 0.013 is a common preliminary estimate. Joints, deterioration, sediment and vegetation raise the effective roughness, so a table gives a starting point, not a guaranteed field value.</li><li><em>Grain-size relations.</em> For beds of loose granular material, a Strickler-type relation links n to a representative grain size. Convert the grain size to metres first, then take the sixth root, then divide.</li></ul><p>The relation is empirical: the grain-size definition and bed condition must match its calibration, and bedforms and vegetation are not represented. Carry enough digits to round correctly rather than truncate.</p>",
            "formulas": [
              {
                "label": "Strickler-type estimate, d in metres",
                "tex": "n = \\dfrac{d^{1/6}}{21.1}"
              }
            ],
            "example": {
              "title": "Worked example: a 6 cm grain",
              "html": "<ol><li>Convert: d = 6 cm = 0.06 m.</li><li>\\(0.06^{1/6} = 0.6257\\).</li><li>\\(n = 0.6257/21.1 = 0.02965\\), which rounds to 0.0297.</li></ol><p>Entering 6 instead of 0.06 gives an absurd roughness.</p>"
            },
            "points": [
              {
                "html": "Manning's rugosity coefficient \\(n\\) for smooth finished concrete is 0.011 to 0.013.",
                "sources": [
                  {
                    "id": "CAP4-03-00137",
                    "label": "p. 14; topic 3 point 133"
                  }
                ]
              },
              {
                "html": "If the particle size is 6 cm, Manning's rugosity coefficient from \\(n = \\dfrac{d^{1/6}}{21.1}\\) is 0.029.",
                "sources": [
                  {
                    "id": "CAP4-03-00055",
                    "label": "p. 12; topic 3 point 52"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00137",
                "label": "p. 14; topic 3 point 133"
              },
              {
                "id": "CAP4-03-00055",
                "label": "p. 12; topic 3 point 52"
              }
            ]
          },
          {
            "id": "froude-number-wave-celerity",
            "title": "Froude number, wave speed and the three flow regimes",
            "html": "<p>The Froude number compares the mean flow speed with the speed at which a small surface gravity wave travels relative to the water in the shallow-water approximation. That wave speed is \\(\\sqrt{gA/T}\\), so the length in the Froude number is the hydraulic depth \\(D = A/T\\), not the hydraulic radius.</p><ul><li><em>Fr &lt; 1, subcritical</em>: a disturbance can travel upstream, and downstream controls influence the flow.</li><li><em>Fr = 1, critical</em>: an upstream-directed wave is held stationary.</li><li><em>Fr &gt; 1, supercritical</em>: the flow outruns the wave, so even a wave directed upstream is swept downstream, and control comes from upstream.</li></ul><p>For a symmetric triangular channel of side slope z, \\(A = zy^2\\) and \\(T = 2zy\\), so \\(D = y/2\\) whatever the slope.</p>",
            "formulas": [
              {
                "label": "Froude number",
                "tex": "Fr = \\dfrac{V}{\\sqrt{gD}},\\quad D = \\dfrac{A}{T}"
              },
              {
                "label": "Symmetric triangle",
                "tex": "Fr = \\dfrac{V}{\\sqrt{gy/2}}"
              }
            ],
            "example": {
              "title": "Worked example: a triangular channel",
              "html": "<p>1H:1V sides, 2 m deep, 1.5 m/s: D = 1 m and \\(Fr = 1.5/\\sqrt{9.81} = 0.48\\), so the flow is subcritical. The same speed in a 0.1 m deep rectangular flow gives Fr = 1.51, supercritical.</p>"
            },
            "points": [
              {
                "html": "The condition for supercritical flow is \\(\\mathrm{Fr} \\gt 1\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00073",
                    "label": "p. 12; topic 3 point 70"
                  }
                ]
              },
              {
                "html": "The length parameter used in defining the Froude number of open-channel flow is the hydraulic mean depth.",
                "sources": [
                  {
                    "id": "CAP4-03-00065",
                    "label": "p. 12; topic 3 point 61; topic 3 point 72"
                  }
                ]
              },
              {
                "html": "The Froude number of a triangular channel of depth \\(y\\) with side slope 2H: 1V is \\(\\dfrac{V}{\\sqrt{gy/2}}\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00081",
                    "label": "p. 13; topic 3 point 80"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00073",
                "label": "p. 12; topic 3 point 70"
              },
              {
                "id": "CAP4-03-00065",
                "label": "p. 12; topic 3 point 61; topic 3 point 72"
              },
              {
                "id": "CAP4-03-00081",
                "label": "p. 13; topic 3 point 80"
              }
            ]
          },
          {
            "id": "critical-flow-condition-section-factor",
            "title": "The general critical-flow condition and the section factor",
            "html": "<p>Squaring the Froude number and substituting \\(V = Q/A\\) gives, for any prismatic section with unit kinetic-energy correction, a dimensionless group that equals one at critical flow. T is the free-surface top width; replacing it with the wetted perimeter is a common mistake. For a rectangle the condition reduces to the familiar critical-depth formula.</p><p>Rearranged, the critical condition defines the <em>section factor</em> for critical flow, \\(Z = A\\sqrt{D}\\), with A the wetted flow area and D the hydraulic depth. Z has dimensions of length<sup>5/2</sup> and depends on depth alone for a given shape, so critical depth is where Z equals \\(Q/\\sqrt{g}\\). It is unrelated to the dimensionless form factor of a drainage basin.</p>",
            "formulas": [
              {
                "label": "Critical flow, any section",
                "tex": "\\dfrac{Q^2T}{gA^3} = 1"
              },
              {
                "label": "Section factor",
                "tex": "Z = A\\sqrt{D} = \\dfrac{Q}{\\sqrt{g}}"
              },
              {
                "label": "Rectangle, q = Q/B",
                "tex": "y_c = \\left(\\dfrac{q^2}{g}\\right)^{1/3}"
              }
            ],
            "example": {
              "title": "Worked example: a 3 m rectangle carrying 12 m³/s",
              "html": "<p>q = 4 m²/s, so \\(y_c = (16/9.81)^{1/3} = 1.177\\) m. Then A = 3.531 m² and \\(Z = 3.531\\sqrt{1.177} = 3.83\\), matching \\(Q/\\sqrt{g} = 12/3.132 = 3.83\\).</p>"
            },
            "points": [
              {
                "html": "The condition for critical flow in a channel of any section is that \\(\\dfrac{Q^2T}{gA^3}\\) equals 1.",
                "sources": [
                  {
                    "id": "CAP4-03-00103",
                    "label": "p. 13; topic 3 point 102"
                  }
                ]
              },
              {
                "html": "The form factor of a channel section is given by \\(A\\sqrt{D}\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00104",
                    "label": "p. 13; topic 3 point 103"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00103",
                "label": "p. 13; topic 3 point 102"
              },
              {
                "id": "CAP4-03-00104",
                "label": "p. 13; topic 3 point 103"
              }
            ]
          },
          {
            "id": "specific-energy-and-alternate-depths",
            "title": "Specific energy: minimum energy, maximum discharge and alternate depths",
            "html": "<p><em>Specific energy</em> is the energy per unit weight measured from the channel bed. For a rectangle carrying q per unit width it can be read two ways, and both lead to critical flow.</p><ul><li><em>Fixed discharge.</em> The derivative \\(dE/dy = 1 - Fr^2\\) vanishes at Fr = 1, so critical depth gives the minimum specific energy.</li><li><em>Fixed specific energy.</em> Maximizing q gives \\(y = 2E/3\\), again critical flow, so critical flow carries the maximum discharge for the available energy.</li></ul><p>At critical depth in a rectangle the velocity head is \\(y_c/2\\). For any energy above the minimum, the E–y curve gives two depths at the same discharge, a shallow supercritical one and a deep subcritical one: the <em>alternate depths</em>. They differ from sequent depths, which share the same specific force across a jump.</p>",
            "formulas": [
              {
                "label": "Specific energy, rectangle",
                "tex": "E = y + \\dfrac{q^2}{2gy^2}"
              },
              {
                "label": "Minimum specific energy, rectangle",
                "tex": "E_c = 1.5\\,y_c"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<p>Critical depth 2.0 m: \\(E_c = 2.0 + 1.0 = 3.0\\) m of head.</p><p>For q = 4 m²/s and E = 2.50 m, the depths 0.667 m and 2.353 m both satisfy the energy equation: they are alternate depths on opposite sides of \\(y_c = 1.177\\) m.</p>"
            },
            "points": [
              {
                "html": "In open-channel flow, at critical depth the discharge is maximum for a given specific energy.",
                "sources": [
                  {
                    "id": "CAP4-03-00068",
                    "label": "p. 12; topic 3 point 64"
                  }
                ]
              },
              {
                "html": "At the critical depth of flow in an open channel, the specific energy is minimum.",
                "sources": [
                  {
                    "id": "CAP4-03-00069",
                    "label": "p. 12; topic 3 point 65"
                  }
                ]
              },
              {
                "html": "For a given discharge in an open channel, the two depths having the same specific energy are called alternate depths.",
                "sources": [
                  {
                    "id": "CAP4-03-00074",
                    "label": "pp. 12, 14; topic 3 point 71; topic 3 point 112; topic 3 point 118"
                  }
                ]
              },
              {
                "html": "A rectangular channel with critical depth 2.0 m has a minimum specific energy of 1.5 × 2.0 = 3.0 m.",
                "sources": [
                  {
                    "id": "CAP4-03-00117",
                    "label": "p. 14; topic 3 point 115"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00068",
                "label": "p. 12; topic 3 point 64"
              },
              {
                "id": "CAP4-03-00069",
                "label": "p. 12; topic 3 point 65"
              },
              {
                "id": "CAP4-03-00074",
                "label": "pp. 12, 14; topic 3 point 71; topic 3 point 112; topic 3 point 118"
              },
              {
                "id": "CAP4-03-00117",
                "label": "p. 14; topic 3 point 115"
              }
            ]
          },
          {
            "id": "hydraulic-jump-sequent-depths",
            "title": "Hydraulic jump: sequent depths, energy loss, jump types and length",
            "html": "<p>A <em>hydraulic jump</em> is an abrupt change from supercritical to subcritical flow with an intense turbulent roller. Energy is dissipated, so the energy equation cannot link the two depths, but momentum can. For a horizontal rectangular channel, neglecting bed friction over the short jump, equal specific force upstream and downstream gives the sequent-depth ratio below; other shapes need their own balance.</p><table><thead><tr><th scope='col'>Approach Froude number</th><th scope='col'>Conventional jump type</th></tr></thead><tbody><tr><td>about 1 to 1.7</td><td>undular</td></tr><tr><td>about 1.7 to 2.5</td><td>weak</td></tr><tr><td>about 2.5 to 4.5</td><td>oscillating</td></tr><tr><td>about 4.5 to 9</td><td>steady</td></tr><tr><td>beyond about 9</td><td>strong</td></tr></tbody></table><p>These are empirical bands, not sharp boundaries. The length of a hydraulic jump is taken as five to seven times the height of the jump.</p>",
            "formulas": [
              {
                "label": "Sequent depths, horizontal rectangle",
                "tex": "\\dfrac{y_2}{y_1} = \\dfrac{\\sqrt{1 + 8Fr_1^2} - 1}{2}"
              },
              {
                "label": "Head lost in the jump",
                "tex": "\\Delta E = \\dfrac{(y_2 - y_1)^3}{4y_1y_2}"
              },
              {
                "label": "Screening length",
                "tex": "L_j \\approx (5\\ \\text{to}\\ 7)(y_2 - y_1)"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>\\(y_1 = 1.00\\) m, \\(Fr_1 = 3.00\\): \\(y_2/y_1 = (\\sqrt{73} - 1)/2 = 3.772\\), so \\(y_2 = 3.772\\) m.</li><li>Depths 0.5 m and 2.5 m: jump height 2.0 m, so the screening length is 10 to 14 m.</li></ol>"
            },
            "points": [
              {
                "html": "A jump in a horizontal rectangular channel with \\(y_1\\) = 1.00 m and \\(Fr_1\\) = 3.00 has a conjugate depth of 3.772 m.",
                "sources": [
                  {
                    "id": "CAP4-03-00070",
                    "label": "p. 12; topic 3 point 67"
                  }
                ]
              },
              {
                "html": "The value of Froude number for a steady hydraulic jump is 4.5 to 9.",
                "sources": [
                  {
                    "id": "CAP4-03-00071",
                    "label": "p. 12; topic 3 point 68"
                  }
                ]
              },
              {
                "html": "The length of a hydraulic jump is equal to 5 to 7 times the height of the jump.",
                "sources": [
                  {
                    "id": "CAP4-03-00078",
                    "label": "p. 12; topic 3 point 76"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00070",
                "label": "p. 12; topic 3 point 67"
              },
              {
                "id": "CAP4-03-00071",
                "label": "p. 12; topic 3 point 68"
              },
              {
                "id": "CAP4-03-00078",
                "label": "p. 12; topic 3 point 76"
              }
            ]
          },
          {
            "id": "gradually-varied-flow-profiles",
            "title": "Gradually varied flow: classification and M and S profiles",
            "html": "<p><em>Gradually varied flow</em> is steady flow whose depth changes slowly along the channel, so hydrostatic pressure and uniform-flow friction laws still apply locally.</p><p>Profiles compare the actual depth y with normal depth \\(y_n\\) and critical depth \\(y_c\\). On a mild slope \\(y_n \\gt y_c\\); on a steep slope \\(y_n \\lt y_c\\).</p><table><thead><tr><th scope='col'>Profile</th><th scope='col'>Depth ordering</th><th scope='col'>Typical setting</th></tr></thead><tbody><tr><th scope='row'>M1</th><td>\\(y \\gt y_n \\gt y_c\\)</td><td>Backwater behind a dam or weir</td></tr><tr><th scope='row'>M2</th><td>\\(y_n \\gt y \\gt y_c\\)</td><td>Drawdown toward a free overfall</td></tr><tr><th scope='row'>S2</th><td>\\(y_c \\gt y \\gt y_n\\)</td><td>Drawdown from critical depth on a steep reach</td></tr></tbody></table><p>Where a long mild reach meets a long steep reach with free outfall, critical depth forms near the slope break: M2 upstream and S2 downstream. A submerged control or tailwater can change this.</p>",
            "moreHtml": "<p>The rest of the family: M3 lies below critical depth on a mild slope, as downstream of a sluice gate; S1 lies above both reference depths on a steep slope; S3 lies below normal depth on a steep slope.</p>",
            "points": [
              {
                "html": "When the flow in an open channel is gradually varied, the flow is said to be steady non-uniform flow.",
                "sources": [
                  {
                    "id": "CAP4-03-00082",
                    "label": "p. 13; topic 3 point 81"
                  }
                ]
              },
              {
                "html": "In an M1 profile of gradually varied flow, \\(y \\gt y_0 \\gt y_c\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00122",
                    "label": "p. 14; topic 3 point 120"
                  }
                ]
              },
              {
                "html": "When the bed slope changes from a mild slope to a steep slope, the profiles formed are M2 and S2.",
                "sources": [
                  {
                    "id": "CAP4-03-00063",
                    "label": "p. 12; topic 3 point 59"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00082",
                "label": "p. 13; topic 3 point 81"
              },
              {
                "id": "CAP4-03-00122",
                "label": "p. 14; topic 3 point 120"
              },
              {
                "id": "CAP4-03-00063",
                "label": "p. 12; topic 3 point 59"
              }
            ]
          },
          {
            "id": "weirs-and-spillway-outlets",
            "title": "Weirs and spillway outlets: head-discharge scaling and local losses",
            "html": "<p>Overflow structures follow a common form, with L the effective crest length and H the total head above the crest. The 3/2 power comes from critical-type flow over the control: the depth grows with H and the velocity with \\(\\sqrt{H}\\). If C and L stay constant, multiplying the head by k multiplies the discharge by \\(k^{3/2}\\). For an ogee spillway C varies with the ratio of actual to design head, so constancy is an assumption.</p><p>A <em>broad-crested weir</em> has a crest long enough for nearly parallel flow, so critical depth forms on it. With a smooth, rounded entrance and a crest short enough to keep friction small, separation and dissipation are limited.</p><p>A local outlet loss coefficient is valid only for compatible geometry, submergence and reference velocity, and it describes dissipated head, not lost discharge.</p>",
            "formulas": [
              {
                "label": "Weir discharge",
                "tex": "Q = C L H^{3/2}"
              },
              {
                "label": "Local outlet loss",
                "tex": "h_L = \\dfrac{K V_{\\text{ref}}^2}{2g}"
              }
            ],
            "example": {
              "title": "Worked example: the head quadruples",
              "html": "<p>With C and L constant, \\(Q_2/Q_1 = 4^{3/2} = 8\\). For an ideal broad-crested weir, critical depth on the crest is 2H/3, which gives \\(q \\approx 1.705H^{3/2}\\) in SI units before any coefficient.</p>"
            },
            "points": [
              {
                "html": "The head loss is minimum in a broad-crested weir.",
                "sources": [
                  {
                    "id": "CAP4-03-00067",
                    "label": "pp. 12, 13; topic 3 point 63; topic 3 point 78"
                  }
                ]
              },
              {
                "html": "The discharge passing over an ogee weir is proportional to \\(H^{3/2}\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00080",
                    "label": "p. 13; topic 3 point 79"
                  }
                ]
              },
              {
                "html": "The loss of head at the end of an open channel spillway or at a butterfly valve is given by \\(K\\dfrac{V^2}{2g}\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00145",
                    "label": "p. 15; topic 3 point 142"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00067",
                "label": "pp. 12, 13; topic 3 point 63; topic 3 point 78"
              },
              {
                "id": "CAP4-03-00080",
                "label": "p. 13; topic 3 point 79"
              },
              {
                "id": "CAP4-03-00145",
                "label": "p. 15; topic 3 point 142"
              }
            ]
          },
          {
            "id": "sediment-incipient-motion-shields",
            "title": "Sediment: incipient motion, the Shields diagram and bed load",
            "html": "<p>Flow over a loose, noncohesive bed exerts a mean boundary shear stress, and grains begin to move when it exceeds a critical value. The <em>Shields diagram</em> expresses the threshold in dimensionless form: the Shields parameter at incipient motion is plotted against a particle-scale Reynolds number.</p><p>Two details are essential: use the submerged density difference rather than the grain density alone, and convert the grain diameter to metres.</p><p>Once grains move, <em>bed load</em> stays near the bed, rolling, sliding and making short saltation hops. Suspended load is held up by turbulence, and dissolved load travels as solutes.</p>",
            "formulas": [
              {
                "label": "Uniform-flow bed shear",
                "tex": "\\tau_0 = \\rho g R S"
              },
              {
                "label": "Critical shear from the Shields parameter",
                "tex": "\\tau_c = \\theta_c(\\rho_s - \\rho)\\,g\\,d"
              }
            ],
            "example": {
              "title": "Worked example: a 2 mm grain",
              "html": "<p>With \\(\\theta_c = 0.050\\), \\(\\rho_s = 2650\\) kg/m³ and d = 0.002 m:</p>\\[\\begin{aligned}\\tau_c &amp;= 0.050 \\times 1650 \\times 9.81 \\times 0.002\\\\ &amp;= 1.62\\ \\text{Pa}\\end{aligned}\\]"
            },
            "points": [
              {
                "html": "The Shields diagram is used to determine the critical shear stress for sediment transport.",
                "sources": [
                  {
                    "id": "CAP4-03-00127",
                    "label": "p. 14; topic 3 point 125"
                  }
                ]
              },
              {
                "html": "With \\(\\theta_c\\) = 0.050, grain density 2650 kg/m³ and d = 2 mm, the critical shear is about 1.62 Pa.",
                "sources": [
                  {
                    "id": "CAP4-03-00128",
                    "label": "p. 14; topic 3 point 125"
                  }
                ]
              },
              {
                "html": "Sediments that move by rolling, sliding and bouncing along the bed are called bed load.",
                "sources": [
                  {
                    "id": "CAP4-03-00146",
                    "label": "p. 15; topic 3 point 143"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00127",
                "label": "p. 14; topic 3 point 125"
              },
              {
                "id": "CAP4-03-00128",
                "label": "p. 14; topic 3 point 125"
              },
              {
                "id": "CAP4-03-00146",
                "label": "p. 15; topic 3 point 143"
              }
            ]
          },
          {
            "id": "bank-stability-tractive-force",
            "title": "Grains on channel banks: why the side-slope threshold is lower",
            "html": "<p>A grain on a sloping bank is harder to keep in place than an identical grain on a horizontal bed. The simple tractive-force model takes the drag from the flow as acting downstream along the channel and neglects lift. On a bank inclined at angle φ, the grain's submerged weight pulls it down the slope while the contact normal force falls, so the drag needed to start motion is lower.</p><p>The reduction depends on the bank angle and on the sediment's angle of repose θ. A fixed factor such as 0.75 can be used only as an explicit assumption in a particular calculation, not as a universal ratio. The shear the flow applies must also be distinguished from the critical shear the bank can resist.</p>",
            "formulas": [
              {
                "label": "Tractive-force ratio, bank angle below repose angle",
                "tex": "K = \\dfrac{\\tau_{\\text{bank}}}{\\tau_{\\text{bed}}} = \\sqrt{1 - \\dfrac{\\sin^2\\phi}{\\sin^2\\theta}}"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<p>A stipulated factor of 0.75 on a 4 Pa bed threshold gives \\(0.75 \\times 4 = 3\\) Pa. With a 35° angle of repose, the formula gives K ≈ 0.83 for a 3H:1V bank but ≈ 0.63 for a 2H:1V bank, which is why no single factor fits every bank.</p>"
            },
            "points": [
              {
                "html": "If the critical shear stress of a channel is \\(\\tau_c\\), the average shear stress required to move a grain on the bank is \\(0.75\\tau_c\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00022",
                    "label": "p. 11; topic 3 point 19"
                  }
                ]
              },
              {
                "html": "The average shear stress required to move a grain on the bank of a channel is 75% of the critical shear stress on the bed.",
                "sources": [
                  {
                    "id": "CAP4-03-00149",
                    "label": "p. 11; topic 3 point 19"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00022",
                "label": "p. 11; topic 3 point 19"
              },
              {
                "id": "CAP4-03-00149",
                "label": "p. 11; topic 3 point 19"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Hydraulic radius and depth",
            "tex": "R = \\dfrac{A}{P},\\quad D = \\dfrac{A}{T}"
          },
          {
            "label": "Trapezoid wetted perimeter",
            "tex": "P = B + 2y\\sqrt{1 + z^2}"
          },
          {
            "label": "Manning, SI",
            "tex": "V = \\dfrac{R^{2/3}S^{1/2}}{n}"
          },
          {
            "label": "Chezy",
            "tex": "V = C\\sqrt{RS}"
          },
          {
            "label": "Strickler estimate",
            "tex": "n = \\dfrac{d^{1/6}}{21.1}"
          },
          {
            "label": "Froude number",
            "tex": "Fr = \\dfrac{V}{\\sqrt{gD}}"
          },
          {
            "label": "Critical flow",
            "tex": "\\dfrac{Q^2T}{gA^3} = 1"
          },
          {
            "label": "Section factor",
            "tex": "Z = A\\sqrt{D}"
          },
          {
            "label": "Critical depth, rectangle",
            "tex": "y_c = \\left(\\dfrac{q^2}{g}\\right)^{1/3}"
          },
          {
            "label": "Specific energy, rectangle",
            "tex": "E = y + \\dfrac{q^2}{2gy^2}"
          },
          {
            "label": "Minimum specific energy",
            "tex": "E_c = 1.5\\,y_c"
          },
          {
            "label": "Sequent depths",
            "tex": "\\dfrac{y_2}{y_1} = \\dfrac{\\sqrt{1 + 8Fr_1^2} - 1}{2}"
          },
          {
            "label": "Jump head loss",
            "tex": "\\Delta E = \\dfrac{(y_2 - y_1)^3}{4y_1y_2}"
          },
          {
            "label": "Weir discharge",
            "tex": "Q = C L H^{3/2}"
          },
          {
            "label": "Bed shear",
            "tex": "\\tau_0 = \\rho g R S"
          },
          {
            "label": "Critical shear",
            "tex": "\\tau_c = \\theta_c(\\rho_s - \\rho)\\,g\\,d"
          }
        ],
        "cautions": [],
        "gaps": [
          "Gradually varied flow is tested only through the M1, M2 and S2 cases; profile computation methods such as direct-step integration are not covered.",
          "Sediment coverage is limited to the Shields threshold and the bed-load definition; transport-rate formulas, regime theory and suspended-load calculations are not examined.",
          "No questions address unsteady open-channel flow, surges or stilling-basin design beyond rough jump-length screening.",
          "Manning roughness values are indicative; the capsule supplies no roughness table beyond smooth-finished concrete."
        ]
      },
      "ACiE0306": {
        "code": "ACiE0306",
        "questionCount": 27,
        "format": 2,
        "summary": "<p>This subchapter covers engineering hydrology: the hydrologic cycle and dew, precipitation mechanisms, rainfall measurement and areal averages, rating curves and hydrograph recession, catchment shape, unit hydrographs, the rational method, return periods and regional flood relations, Nepal's river groups, storage for a dry-season deficit and bridge clearance above the design flood.</p>",
        "blocks": [
          {
            "id": "hydrology-scope-and-dew-formation",
            "title": "Hydrology, the hydrologic cycle and how dew forms",
            "html": "<p><em>Hydrology</em> is the science of the occurrence, circulation and distribution of water in the earth–atmosphere system. It follows water through the hydrologic cycle: evaporation and transpiration carry moisture up, condensation and precipitation return it, and on land it infiltrates, recharges groundwater, runs off and drains to rivers and the sea. Hydraulics concerns the mechanics of flowing water, hydrostatics fluids at rest, and rheology how materials deform.</p><p>Dew is condensation directly onto a cooled surface, not falling precipitation. The <em>dew point</em> is the temperature to which air must be cooled, at constant moisture content, to become saturated. If the dew point is above 0 °C, then dew will form. When both stay above freezing, the condensate is liquid.</p>",
            "formulas": [
              {
                "label": "Catchment water balance over a period",
                "tex": "\\text{inflow} - \\text{outflow} = \\Delta S",
                "where": "ΔS is the change in storage within the catchment over the same period."
              }
            ],
            "points": [
              {
                "html": "The branch of science which deals with the occurrence, circulation and distribution of the waters of the earth and its atmosphere is hydrology.",
                "sources": [
                  {
                    "id": "CAP4-03-00083",
                    "label": "p. 13; topic 3 point 82"
                  }
                ]
              },
              {
                "html": "If the dew point is above 0 °C, then dew will form.",
                "sources": [
                  {
                    "id": "CAP4-03-00020",
                    "label": "p. 11; topic 3 point 17"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00083",
                "label": "p. 13; topic 3 point 82"
              },
              {
                "id": "CAP4-03-00020",
                "label": "p. 11; topic 3 point 17"
              }
            ]
          },
          {
            "id": "precipitation-lifting-mechanisms",
            "title": "Precipitation mechanisms: cyclonic lifting, cold fronts and warm fronts",
            "html": "<p>Precipitation needs moist air to rise, expand and cool until it saturates, followed by condensation and droplet growth. Events are classified by what lifts the air:</p><ul><li><em>Cyclonic</em>: air converges toward a low-pressure system and ascends, giving widespread rain. Frontal precipitation is a form of cyclonic lifting.</li><li><em>Convective</em>: buoyant, unstable air rises, often after surface heating, giving local intense showers.</li><li><em>Orographic</em>: terrain forces the air up the windward side of mountains.</li></ul><p>At a cold front, denser advancing cold air undercuts the warm moist air ahead and pushes it up. Because a cold front is steep and lifts air rapidly, it often gives a relatively narrow band of short, intense showers. A gently sloping warm front lifts warm air slowly over cold air and spreads lighter, longer rain over a wider area. Catchment size is not part of the definition.</p>",
            "moreHtml": "<p>Dew and frost form by condensation on cooled surfaces rather than by lifting of air, so they are not classed with these precipitation mechanisms.</p>",
            "points": [
              {
                "html": "Precipitation caused by the lifting of an air mass due to a pressure difference is called cyclonic precipitation.",
                "sources": [
                  {
                    "id": "CAP4-03-00091",
                    "label": "p. 13; topic 3 point 90"
                  }
                ]
              },
              {
                "html": "Cold frontal precipitation is formed when an advancing cold air mass meets warmer air.",
                "sources": [
                  {
                    "id": "CAP4-03-00092",
                    "label": "p. 13; topic 3 point 91"
                  }
                ]
              },
              {
                "html": "Cold frontal precipitation is characterised by heavy precipitation over a small catchment area.",
                "sources": [
                  {
                    "id": "CAP4-03-00093",
                    "label": "p. 13; topic 3 point 92"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00091",
                "label": "p. 13; topic 3 point 90"
              },
              {
                "id": "CAP4-03-00092",
                "label": "p. 13; topic 3 point 91"
              },
              {
                "id": "CAP4-03-00093",
                "label": "p. 13; topic 3 point 92"
              }
            ]
          },
          {
            "id": "rain-gauges-isohyets-double-mass",
            "title": "Measuring rainfall: recording gauges, isohyets and consistency checks",
            "html": "<p><em>Gauges.</em> A manually read gauge gives only the depth accumulated between readings, typically daily. A recording gauge logs depth against time, so it shows how the rain was distributed in time and allows the short-duration intensities that drainage and flood design need.</p><p><em>Areal rainfall.</em> An <em>isohyet</em> joins points that received equal rainfall depth over the same interval; isobars join equal pressure and isochrones equal travel time. The isohyetal method weights each band's mean depth by its area. It can represent terrain effects, but its accuracy depends on the data and on how the contours are drawn.</p><p><em>Consistency.</em> A <em>double-mass curve</em> plots a station's cumulative rainfall against the cumulative mean of consistent neighbours. A change of slope suggests a changed relationship, perhaps from relocation, to be investigated before correcting.</p>",
            "formulas": [
              {
                "label": "Isohyetal mean depth",
                "tex": "\\bar{P} = \\dfrac{\\sum A_i P_i}{\\sum A_i}",
                "where": "A<sub>i</sub> is the area between two successive isohyets and P<sub>i</sub> the mean depth of that band."
              }
            ],
            "example": {
              "title": "Worked example: two isohyetal bands",
              "html": "<p>A 5 km<sup>2</sup> basin has a 2 km<sup>2</sup> band averaging 40 mm and a 3 km<sup>2</sup> band averaging 60 mm:</p>\\[\\bar{P} = \\dfrac{2 \\times 40 + 3 \\times 60}{5} = 52\\ \\text{mm}\\]"
            },
            "points": [
              {
                "html": "The rain gauging method that is very accurate is the recording type.",
                "sources": [
                  {
                    "id": "CAP4-03-00100",
                    "label": "p. 13; topic 3 point 99"
                  }
                ]
              },
              {
                "html": "The imaginary lines joining points of equal rainfall are called isohyets.",
                "sources": [
                  {
                    "id": "CAP4-03-00088",
                    "label": "p. 13; topic 3 point 87"
                  }
                ]
              },
              {
                "html": "The most accurate method to determine the average precipitation depth over an area is the isohyetal method.",
                "sources": [
                  {
                    "id": "CAP4-03-00090",
                    "label": "p. 13; topic 3 point 89"
                  }
                ]
              },
              {
                "html": "The double mass curve technique is used to check the consistency of rain gauge records.",
                "sources": [
                  {
                    "id": "CAP4-03-00086",
                    "label": "p. 13; topic 3 point 85"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00100",
                "label": "p. 13; topic 3 point 99"
              },
              {
                "id": "CAP4-03-00088",
                "label": "p. 13; topic 3 point 87"
              },
              {
                "id": "CAP4-03-00090",
                "label": "p. 13; topic 3 point 89"
              },
              {
                "id": "CAP4-03-00086",
                "label": "p. 13; topic 3 point 85"
              }
            ]
          },
          {
            "id": "rating-curves-and-hydrograph-recession",
            "title": "Stage-discharge rating curves and the recession limb of a hydrograph",
            "html": "<p>A gauging station records <em>stage</em>, the water-surface elevation above a fixed gauge datum, and converts it to discharge with a <em>rating curve</em> calibrated from paired stage and discharge measurements. The relationship holds only while the hydraulic control stays stable. Scour or deposition shifts it, backwater can raise stage without extra flow, and during floods a looped relationship means one stage need not always give one discharge, so ratings need periodic checks.</p><p>A flood hydrograph has a rising limb, a crest and a recession limb. After rainfall stops, the recession is fed mainly by the gradual emptying of basin storage: surface detention, channel storage, soil water and groundwater. Its shape is therefore largely a basin property, useful for separating baseflow and anticipating low flows.</p>",
            "points": [
              {
                "html": "The discharge–stage relationship at a gauging site is known as the rating curve.",
                "sources": [
                  {
                    "id": "CAP4-03-00094",
                    "label": "p. 13; topic 3 point 93"
                  }
                ]
              },
              {
                "html": "The recession limb of a hydrograph is independent of storm characteristics.",
                "sources": [
                  {
                    "id": "CAP4-03-00096",
                    "label": "p. 13; topic 3 point 95"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00094",
                "label": "p. 13; topic 3 point 93"
              },
              {
                "id": "CAP4-03-00096",
                "label": "p. 13; topic 3 point 95"
              }
            ]
          },
          {
            "id": "catchment-shape-and-form-factor",
            "title": "Catchment shape, basin form factor and flood-peak response",
            "html": "<p>Basin shape influences how runoff from different parts of a catchment arrives at the outlet. The <em>basin form factor</em> is the ratio of mean basin width to axial basin length; since mean width is area over length, it is a dimensionless plan-shape measure. An elongated, fern-shaped basin has a low form factor; a compact, fan-shaped basin whose tributaries meet near the outlet has a high one.</p><p>For equal areas, comparable slopes and a spatially uniform storm, the elongated basin generally has longer main travel paths and its tributary contributions arrive spread out in time, so its peak is usually lower and later. The fan-shaped basin tends to synchronize arrivals and give a sharper, higher peak. Drainage arrangement, slope, storage and storm movement can modify this.</p><p>For a channel section, the form factor is \\(A\\sqrt{D}\\), the product of the area and the square root of the hydraulic depth.</p>",
            "formulas": [
              {
                "label": "Basin form factor",
                "tex": "F_f = \\dfrac{A_b}{L_b^2}",
                "where": "A<sub>b</sub> is the basin plan area and L<sub>b</sub> the axial basin length."
              }
            ],
            "example": {
              "title": "Worked example: two 200 km² basins",
              "html": "<p>With axial lengths of 25 km and 15 km, \\(F_f = 200/625 = 0.32\\) and \\(200/225 = 0.89\\). The first is more elongated and would be expected to give the more attenuated peak.</p>"
            },
            "points": [
              {
                "html": "As compared with a fan-shaped catchment, a fern-shaped catchment will have a longer stream.",
                "sources": [
                  {
                    "id": "CAP4-03-00087",
                    "label": "p. 13; topic 3 point 86"
                  }
                ]
              },
              {
                "html": "The form factor \\(A\\sqrt{D}\\) of a channel section is the product of the area and the square root of the hydraulic depth.",
                "sources": [
                  {
                    "id": "CAP4-03-00105",
                    "label": "p. 13; topic 3 point 103"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00087",
                "label": "p. 13; topic 3 point 86"
              },
              {
                "id": "CAP4-03-00105",
                "label": "p. 13; topic 3 point 103"
              }
            ]
          },
          {
            "id": "unit-hydrograph-derivation-and-duration",
            "title": "Unit hydrographs: deriving ordinates and changing the duration",
            "html": "<p>A <em>unit hydrograph</em> (UH) of duration D is the direct-runoff hydrograph produced by 1 cm of effective rainfall falling uniformly over the catchment in D hours. The method assumes a linear, time-invariant catchment, so ordinates scale with runoff depth and responses to successive bursts add.</p><ol><li>Separate baseflow from the observed hydrograph to get the direct-runoff hydrograph (DRH).</li><li>Find the direct-runoff depth as DRH volume over catchment area.</li><li>Divide every DRH ordinate by that depth in centimetres. The rainfall duration names the UH; it is never the divisor.</li></ol><p>A UH for duration nD, with n an integer, is built by superposing n copies of the D-hour UH, each lagged by D hours, and dividing the sum by n. The base lengthens by \\((n - 1)D\\) and the peak becomes lower and broader. Non-integer ratios need the S-curve method.</p>",
            "formulas": [
              {
                "label": "Unit-hydrograph ordinate",
                "tex": "u = \\dfrac{Q - Q_b}{d}",
                "where": "Q is the total flow, Q<sub>b</sub> the baseflow and d the direct-runoff depth in cm."
              },
              {
                "label": "Base of the nD-hour unit hydrograph",
                "tex": "T_{nD} = T_D + (n - 1)D"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>A peak of 75 m<sup>3</sup>/s over 15 m<sup>3</sup>/s baseflow from 3 cm of runoff: \\(u = (75 - 15)/3 = 20\\) m<sup>3</sup>/s.</li><li>A 2-hour UH with an 8-hour base, averaged with a copy lagged 2 hours, gives a 4-hour UH whose base is 8 + 2 = 10 hours.</li></ol>"
            },
            "points": [
              {
                "html": "A 75 m<sup>3</sup>/s peak with 15 m<sup>3</sup>/s baseflow and 3 cm of direct runoff gives a 1 cm unit-hydrograph peak of 20 m<sup>3</sup>/s.",
                "sources": [
                  {
                    "id": "CAP4-03-00097",
                    "label": "p. 13; topic 3 point 96"
                  }
                ]
              },
              {
                "html": "As the duration of a unit hydrograph increases, its base period increases.",
                "sources": [
                  {
                    "id": "CAP4-03-00085",
                    "label": "p. 13; topic 3 point 84"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00097",
                "label": "p. 13; topic 3 point 96"
              },
              {
                "id": "CAP4-03-00085",
                "label": "p. 13; topic 3 point 84"
              }
            ]
          },
          {
            "id": "rational-method-time-of-concentration",
            "title": "Rational method: time of concentration, design intensity and units",
            "html": "<p>The <em>rational method</em> estimates the peak runoff from a small catchment from a runoff coefficient C, a design intensity I and the area A. The peak occurs when the whole catchment contributes, which first happens after the <em>time of concentration</em>, the travel time from the hydraulically most remote point to the outlet. So the intensity is read from an intensity–duration–frequency relation for a duration equal to that time. Rain may last longer; equality is a design selection, not a condition for runoff.</p><p>In urban drainage the time of concentration is the entry time to the first inlet plus the travel time through the drains; taking only the longer segment omits part of the path.</p><p>Units decide the constant: 1 cm/h over 1 hectare is 100 m<sup>3</sup>/h, or 1/36 m<sup>3</sup>/s. Short-storm fits of the form \\(I = a/(t + b)\\) need their units, location, return period and valid range stated; evaluate the denominator first.</p>",
            "formulas": [
              {
                "label": "Rational method, I in cm/h and A in hectares",
                "tex": "Q = \\dfrac{CIA}{36}",
                "where": "With I in mm/h the divisor is 360 for hectares; with I in mm/h and A in km<sup>2</sup>, Q = 0.278CIA."
              },
              {
                "label": "Time of concentration",
                "tex": "T_c = T_e + T_f",
                "where": "T<sub>e</sub> is the entry or inlet time and T<sub>f</sub> the travel time in drains or channels."
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>C = 0.60, I = 3 cm/h, A = 120 ha: \\(Q = 0.60 \\times 3 \\times 120/36 = 6.0\\) m<sup>3</sup>/s.</li><li>Entry time 7 min and drain travel 18 min: \\(T_c = 25\\) min.</li><li>An assumed fit \\(I = 760/(t + 10)\\) at t = 10 min gives 760/20 = 38 mm/h.</li></ol>"
            },
            "points": [
              {
                "html": "The rational method is applicable when the duration of rainfall is equal to the time of concentration.",
                "sources": [
                  {
                    "id": "CAP4-03-00098",
                    "label": "p. 13; topic 3 point 97"
                  }
                ]
              },
              {
                "html": "With C = 0.60, I = 3 cm/h and A = 120 ha, the rational method gives Q = CIA/36 = 6.0 m<sup>3</sup>/s.",
                "sources": [
                  {
                    "id": "CAP4-03-00099",
                    "label": "p. 13; topic 3 point 98"
                  }
                ]
              },
              {
                "html": "An entry time of 7 minutes plus 18 minutes of drain travel gives a time of concentration of 25 minutes.",
                "sources": [
                  {
                    "id": "CAP4-03-00112",
                    "label": "p. 13; topic 3 point 109"
                  }
                ]
              },
              {
                "html": "The assumed short-storm fit \\(I = 760/(t + 10)\\) predicts 760/20 = 38 mm/h at t = 10 minutes.",
                "sources": [
                  {
                    "id": "CAP4-03-00138",
                    "label": "p. 14; topic 3 point 134"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00098",
                "label": "p. 13; topic 3 point 97"
              },
              {
                "id": "CAP4-03-00099",
                "label": "p. 13; topic 3 point 98"
              },
              {
                "id": "CAP4-03-00112",
                "label": "p. 13; topic 3 point 109"
              },
              {
                "id": "CAP4-03-00138",
                "label": "p. 14; topic 3 point 134"
              }
            ]
          },
          {
            "id": "return-period-and-regional-flood-relation",
            "title": "Return period, exceedance probability and a regional two-year flood relation",
            "html": "<p>For a stationary annual-maximum series, the <em>return period</em> T of a flood is the reciprocal of its annual exceedance probability. A two-year flood therefore has a 50% chance of being equalled or exceeded in any one year. Return period is a statistical frequency, not a forecast of calendar spacing: a two-year flood can occur in consecutive years or be absent for several.</p><p>For ungauged catchments, regional relations estimate flood quantiles from catchment characteristics. The WECS/DHM method gives a two-year relation, with \\(Q_2\\) in m<sup>3</sup>/s and \\(A_{3000}\\) the catchment area below 3000 m, in km<sup>2</sup>. Evaluate it in order: add one to the area, raise to the power, then multiply.</p>",
            "formulas": [
              {
                "label": "Annual exceedance probability",
                "tex": "p = \\dfrac{1}{T}"
              },
              {
                "label": "At least one exceedance in n years",
                "tex": "P_n = 1 - \\left(1 - \\dfrac{1}{T}\\right)^n"
              },
              {
                "label": "Quoted regional two-year flood relation",
                "tex": "Q_2 = 1.8767\\,(A_{3000} + 1)^{0.8783}"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>T = 2 years: p = 1/2 = 0.50 in any one year.</li><li>\\(A_{3000} = 99\\) km<sup>2</sup>: add one to get 100, then \\(100^{0.8783} = 57.09\\) and \\(Q_2 = 1.8767 \\times 57.09 = 107.15\\) m<sup>3</sup>/s.</li><li>A 50-year flood over 25 years: \\(1 - 0.98^{25} \\approx 0.40\\).</li></ol>"
            },
            "points": [
              {
                "html": "In the WECS/DHM method, the formula \\(Q = 1.8767\\,x^{0.8783}\\), with \\(x = A_{3000} + 1\\), is used for the flood of 2 years return period.",
                "sources": [
                  {
                    "id": "CAP4-03-00107",
                    "label": "p. 13; topic 3 point 104"
                  }
                ]
              },
              {
                "html": "In the WECS/DHM method, the 2-year flood is \\(Q_2 = 1.8767\\,x^{0.8783}\\) with \\(x = A_{3000} + 1\\), where \\(A_{3000}\\) is the basin area below 3000 m elevation in km<sup>2</sup>. For \\(A_{3000} = 99\\) km<sup>2</sup>, \\(Q_2\\) is 107.15 m<sup>3</sup>/s.",
                "sources": [
                  {
                    "id": "CAP4-03-00106",
                    "label": "p. 13; topic 3 point 104"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00107",
                "label": "p. 13; topic 3 point 104"
              },
              {
                "id": "CAP4-03-00106",
                "label": "p. 13; topic 3 point 104"
              }
            ]
          },
          {
            "id": "nepal-rivers-and-regional-methods",
            "title": "Nepal context: rivers by source region and regional methods",
            "html": "<p>A commonly taught grouping classifies Nepal's rivers by where they originate, from the highest source belt to the lowest:</p><ol><li>High Himalayan rivers, the major rivers rising in the High Himalaya.</li><li>Mahabharat (middle-hill) rivers, rising in the Mahabharat range.</li><li>Siwalik rivers, smaller streams rising in the Siwalik hills.</li></ol><p>As per the geography of Nepal, rivers are thus classified into three groups.</p><p>For ungauged catchments, regional methods transfer empirical runoff relationships from gauged catchments with similar climate and runoff behaviour. The mapped region should give the equations, coefficients and calibration range; administrative boundaries are no substitute.</p>",
            "moreHtml": "<p>The MIP method divides Nepal into seven zones, and the DHM 2004 method gives accurate flow characteristics for the rivers of Nepal.</p>",
            "points": [
              {
                "html": "As per the geography of Nepal, rivers are classified into 3 groups.",
                "sources": [
                  {
                    "id": "CAP4-03-00084",
                    "label": "p. 13; topic 3 point 83"
                  }
                ]
              },
              {
                "html": "Based on the MIP method, Nepal is divided into 7 zones.",
                "sources": [
                  {
                    "id": "CAP4-02-00137",
                    "label": "p. 9; topic 2 point 123"
                  }
                ]
              },
              {
                "html": "The method that gives accurate flow characteristics in the context of rivers of Nepal is DHM 2004.",
                "sources": [
                  {
                    "id": "CAP4-03-00089",
                    "label": "p. 13; topic 3 point 88"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00084",
                "label": "p. 13; topic 3 point 83"
              },
              {
                "id": "CAP4-02-00137",
                "label": "p. 9; topic 2 point 123"
              },
              {
                "id": "CAP4-03-00089",
                "label": "p. 13; topic 3 point 88"
              }
            ]
          },
          {
            "id": "reservoir-storage-for-dry-season-deficit",
            "title": "Storage to bridge a dry-season deficit: a simple mass balance",
            "html": "<p>When a stream's dry-season flow falls below demand, an impounding reservoir can store wet-season surplus and release it during the deficit. The required active storage is the difference between demand and inflow, summed for as long as the difference persists, with flows in m<sup>3</sup>/s and time in seconds; one day is 86400 s. A mass-curve analysis extends the same idea to variable flows.</p><p>Two conditions keep the result meaningful. The reservoir must be able to refill: storage moves water from wet periods to dry ones but cannot create water. And real reservoirs lose water to evaporation and seepage and carry dead storage, all of which raise the gross capacity. Storage is also only one possible response; other sources or demand management may work.</p>",
            "formulas": [
              {
                "label": "Active storage over the critical period",
                "tex": "V = \\sum (\\text{demand} - \\text{inflow})\\,\\Delta t"
              }
            ],
            "example": {
              "title": "Worked example: a ten-day deficit",
              "html": "<p>Inflow 1 m<sup>3</sup>/s against demand 3 m<sup>3</sup>/s for 10 days:</p>\\[\\begin{aligned}V &amp;= (3 - 1) \\times 10 \\times 86400\\\\ &amp;= 1.728 \\times 10^6\\ \\text{m}^3\\end{aligned}\\]<p>That is 1.728 million m<sup>3</sup> before losses.</p>"
            },
            "points": [
              {
                "html": "The construction of an impounding reservoir is required when the rate of flow in the stream in the dry season is less than the demand.",
                "sources": [
                  {
                    "id": "CAP4-03-00114",
                    "label": "p. 14; topic 3 point 111"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-03-00114",
                "label": "p. 14; topic 3 point 111"
              }
            ]
          },
          {
            "id": "bridge-clearance-above-design-flood",
            "title": "Bridge clearance above the design high-flood level",
            "html": "<p>A bridge's flood clearance, or freeboard, is the vertical distance between the design high-flood level (HFL) and the specified lowest point of the superstructure. It is a difference of elevations on the same datum. The reference point and loading condition in the brief matter, because a flexible deck sits at different levels under different loads.</p><p>The water level seen on a dry-season survey says nothing about the level reached in the design flood, so it cannot establish adequate clearance. Clearance is checked against the design HFL, with the allowances for debris, flood-estimate uncertainty and structural behaviour that the brief specifies, and it is measured up from that water surface, not from the bed.</p><p>The minimum freeboard in a trail bridge is 5 m. A clearance that only equals it has no spare margin.</p>",
            "formulas": [
              {
                "label": "Flood clearance",
                "tex": "c = \\text{RL}_{\\text{bridge}} - \\text{RL}_{\\text{HFL}}"
              }
            ],
            "example": {
              "title": "Worked example",
              "html": "<p>HFL at RL 104.5 m and lowest bridge point at RL 109.5 m: c = 109.5 − 104.5 = 5.0 m. With the HFL at RL 212.30 m and the lowest point at RL 216.80 m, c = 4.50 m would fall short of 5 m.</p>"
            },
            "points": [
              {
                "html": "The minimum freeboard in a trail bridge is 5 m.",
                "sources": [
                  {
                    "id": "CAP4-10-00194",
                    "label": "p. 42; rural point 18"
                  }
                ]
              },
              {
                "html": "The freeboard of a trail bridge, at least 5 m, is measured between the lowest point of the bridge and the highest flood level.",
                "sources": [
                  {
                    "id": "CAP4-10-00195",
                    "label": "p. 42; rural point 18"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00194",
                "label": "p. 42; rural point 18"
              },
              {
                "id": "CAP4-10-00195",
                "label": "p. 42; rural point 18"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Isohyetal mean depth",
            "tex": "\\bar{P} = \\dfrac{\\sum A_i P_i}{\\sum A_i}"
          },
          {
            "label": "Basin form factor",
            "tex": "F_f = \\dfrac{A_b}{L_b^2}"
          },
          {
            "label": "Unit-hydrograph ordinate",
            "tex": "u = \\dfrac{Q - Q_b}{d}"
          },
          {
            "label": "Base after changing duration",
            "tex": "T_{nD} = T_D + (n - 1)D"
          },
          {
            "label": "Rational method, cm/h and ha",
            "tex": "Q = \\dfrac{CIA}{36}"
          },
          {
            "label": "Rational method, mm/h and km²",
            "tex": "Q = 0.278\\,CIA"
          },
          {
            "label": "Time of concentration",
            "tex": "T_c = T_e + T_f"
          },
          {
            "label": "Exceedance probability",
            "tex": "p = \\dfrac{1}{T}"
          },
          {
            "label": "Risk over n years",
            "tex": "P_n = 1 - \\left(1 - \\dfrac{1}{T}\\right)^n"
          },
          {
            "label": "Deficit storage",
            "tex": "V = \\sum (\\text{demand} - \\text{inflow})\\,\\Delta t"
          },
          {
            "label": "Flood clearance",
            "tex": "c = \\text{RL}_{\\text{bridge}} - \\text{RL}_{\\text{HFL}}"
          }
        ],
        "cautions": [],
        "gaps": [
          "Groundwater hydrology is listed in the syllabus but not tested by these capsule questions; aquifer properties and well hydraulics are not covered here.",
          "Synthetic unit hydrographs, S-curve construction details and flood routing are not examined beyond changing duration by superposition.",
          "Flood-frequency analysis is limited to the return-period definition; fitting probability distributions to annual maxima is not covered.",
          "Evaporation estimation, infiltration indices and the selection of runoff coefficients are not examined."
        ]
      }
    });
})();
