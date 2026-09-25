window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["capsule-03"] = {
  "title": "NEC Quick Revision Capsule - Basic Water Resources Engineering",
  "negativeMarking": 0,
  "chapters": [
    {
      "id": "ACiE0301",
      "name": "Fluids and their properties",
      "subject": "Basic Water Resources Engineering",
      "questions": [
        {
          "id": "CAP4-02-00066",
          "src": "CAP4-02-00066",
          "text": "At ordinary laboratory temperature and atmospheric initial pressure, why is pore water often treated as nearly incompressible compared with entrapped air in elementary soil mechanics?",
          "options": [
            {
              "key": "a",
              "text": "Water has a much larger bulk modulus than air"
            },
            {
              "key": "b",
              "text": "Water has exactly zero compressibility at room temperature"
            },
            {
              "key": "c",
              "text": "Water has minimum compressibility among every soil constituent"
            },
            {
              "key": "d",
              "text": "Water has a much smaller bulk modulus than air"
            }
          ],
          "answer": "a",
          "explanation": "Compressibility is the reciprocal of bulk modulus. Liquid water is far less compressible than air under these conditions, but it is not perfectly incompressible and mineral solids can be stiffer. Room temperature is not a universal minimum-compressibility condition.<p>Source note: Page 8 point 61 provides no comparison set or thermodynamic condition for &#39;minimum&#39;; replaced by the robust water-versus-air principle, not a claimed temperature of minimum compressibility.</p><p>Capsule 4th ed., p. 8; topic 2 point 61.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 61",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n61"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00001",
          "src": "CAP4-03-00001",
          "text": "Water rises 18 mm in a clean vertical capillary supplied by a large reservoir. If its internal radius is tripled while temperature and contact angle remain unchanged, what is the new equilibrium rise?",
          "options": [
            {
              "key": "a",
              "text": "2 mm"
            },
            {
              "key": "b",
              "text": "18 mm"
            },
            {
              "key": "c",
              "text": "6 mm"
            },
            {
              "key": "d",
              "text": "54 mm"
            }
          ],
          "answer": "c",
          "explanation": "The vertical surface-tension force scales with radius, whereas column weight scales with radius squared times height. Thus h is inversely proportional to radius and the new rise is 18/3 = 6 mm, neglecting meniscus volume.<p>Capsule 4th ed., p. 10; topic 3 point 1.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 3 point 1",
            "pages": [
              10
            ],
            "points": [
              "capsule-t03-p010-n1"
            ]
          },
          "topic": "ACiE0301",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00002",
          "src": "CAP4-03-00002",
          "text": "Two vertical glass capillaries dip into the same water reservoir with identical contact angles. Their equilibrium rises satisfy hP/hQ = 2/3. What is the ratio of internal diameters dP:dQ?",
          "options": [
            {
              "key": "a",
              "text": "3:2"
            },
            {
              "key": "b",
              "text": "4:9"
            },
            {
              "key": "c",
              "text": "2:3"
            },
            {
              "key": "d",
              "text": "9:4"
            }
          ],
          "answer": "a",
          "explanation": "For matching fluid, gravity and wetting conditions, h = 4 sigma cos(theta)/(rho g d), so hd is constant. Therefore dP/dQ = hQ/hP = 3/2. This is a reservoir-fed equilibrium, not a comparison of equal poured volumes.<p>Source note: Page 10 point 2 loses the denominator in its point extract; the complete page text and corrected local capillary notes retain 2/3.</p><p>Capsule 4th ed., p. 10; topic 3 point 2.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 3 point 2",
            "pages": [
              10
            ],
            "points": [
              "capsule-t03-p010-n2"
            ]
          },
          "topic": "ACiE0301",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00003",
          "src": "CAP4-03-00003",
          "text": "A wetting liquid rises in a narrow tube even though no pump is connected. Which interaction supplies the upward force at the tube's contact line?",
          "options": [
            {
              "key": "a",
              "text": "An excess atmospheric pressure inside the tube"
            },
            {
              "key": "b",
              "text": "The vertical component of surface tension"
            },
            {
              "key": "c",
              "text": "The liquid's upward gravitational force"
            },
            {
              "key": "d",
              "text": "Viscous shear from the stationary wall"
            }
          ],
          "answer": "b",
          "explanation": "Surface tension acts along the liquid interface and has an upward component for a wetting contact angle. This component supports the raised liquid column. Viscosity affects the approach to equilibrium but is not the static supporting force.<p>Capsule 4th ed., p. 10; topic 3 point 3.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 3 point 3",
            "pages": [
              10
            ],
            "points": [
              "capsule-t03-p010-n3"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00004",
          "src": "CAP4-03-00004",
          "text": "Heating a wetting liquid reduces its surface tension by 10% while changes in density and contact angle are negligible. In the same capillary, how does the equilibrium rise change?",
          "options": [
            {
              "key": "a",
              "text": "It decreases by 19%"
            },
            {
              "key": "b",
              "text": "It remains unchanged"
            },
            {
              "key": "c",
              "text": "It increases by 10%"
            },
            {
              "key": "d",
              "text": "It decreases by 10%"
            }
          ],
          "answer": "d",
          "explanation": "At fixed radius, density, contact angle and gravity, h is proportional to surface tension. Multiplying surface tension by 0.90 therefore multiplies h by 0.90. A universal temperature rule would require checking density and wetting changes as well.<p>Source note: Page 10 point 4 is a usual trend, not an unconditional law for every liquid and temperature range.</p><p>Capsule 4th ed., p. 10; topic 3 point 4.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 3 point 4",
            "pages": [
              10
            ],
            "points": [
              "capsule-t03-p010-n4"
            ]
          },
          "topic": "ACiE0301",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00005",
          "src": "CAP4-03-00005",
          "text": "For a vertical circular capillary of internal radius r, a liquid has surface tension sigma and contact angle theta measured through the liquid. Neglecting meniscus volume, which equation balances the raised column at equilibrium?",
          "options": [
            {
              "key": "a",
              "text": "2 pi r sigma cos(theta) = rho g pi r h"
            },
            {
              "key": "b",
              "text": "2 pi r sigma cos(theta) = rho g pi r squared h"
            },
            {
              "key": "c",
              "text": "2 pi r sigma sin(theta) = rho g pi r squared h"
            },
            {
              "key": "d",
              "text": "pi r squared sigma cos(theta) = rho g pi r squared h"
            }
          ],
          "answer": "b",
          "explanation": "The contact-line perimeter is 2 pi r, so the upward interfacial force is 2 pi r sigma cos(theta). The raised column weighs rho g pi r squared h. Equating these gives h = 2 sigma cos(theta)/(rho g r).<p>Source note: Page 10 point 5 is incomplete as a proposition; the question tests the underlying force balance without inventing missing source data.</p><p>Capsule 4th ed., p. 10; topic 3 point 5.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 3 point 5",
            "pages": [
              10
            ],
            "points": [
              "capsule-t03-p010-n5"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00006",
          "src": "CAP4-03-00006",
          "text": "A pump develops vapour cavities when its local absolute pressure becomes too low. Which fluid property sets the relevant pressure threshold at the operating temperature?",
          "options": [
            {
              "key": "a",
              "text": "Bulk modulus"
            },
            {
              "key": "b",
              "text": "Dynamic viscosity"
            },
            {
              "key": "c",
              "text": "Vapour pressure"
            },
            {
              "key": "d",
              "text": "Specific gravity"
            }
          ],
          "answer": "c",
          "explanation": "Cavitation becomes possible when local absolute pressure falls to approximately the liquid's vapour pressure. Viscosity influences losses but is not the phase-change pressure threshold.<p>Capsule 4th ed., pp. 10, 11; topic 3 point 6.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 10, 11; topic 3 point 6",
            "pages": [
              10,
              11
            ],
            "points": [
              "capsule-t03-p010-n6"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00007",
          "src": "CAP4-03-00007",
          "text": "An oil's specific gravity is to be calculated from its measured density. Which reference quantity belongs in the denominator under the conventional liquid definition?",
          "options": [
            {
              "key": "a",
              "text": "Water specific weight at the stated temperature"
            },
            {
              "key": "b",
              "text": "Oil specific volume at the measured temperature"
            },
            {
              "key": "c",
              "text": "Air density at the same atmospheric pressure"
            },
            {
              "key": "d",
              "text": "Water density at the stated reference temperature"
            }
          ],
          "answer": "d",
          "explanation": "Liquid specific gravity is the dimensionless ratio of liquid density to reference-water density. Dividing density by specific weight or specific volume would not produce the required dimensionless ratio.<p>Capsule 4th ed., pp. 10, 11; topic 3 point 6.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 10, 11; topic 3 point 6",
            "pages": [
              10,
              11
            ],
            "points": [
              "capsule-t03-p010-n6"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00008",
          "src": "CAP4-03-00008",
          "text": "Two Newtonian oils have the same density but develop different shear stresses at the same velocity gradient and temperature. Which property directly explains the difference?",
          "options": [
            {
              "key": "a",
              "text": "Vapour pressure"
            },
            {
              "key": "b",
              "text": "Dynamic viscosity"
            },
            {
              "key": "c",
              "text": "Surface tension"
            },
            {
              "key": "d",
              "text": "Specific gravity"
            }
          ],
          "answer": "b",
          "explanation": "Newton's viscosity law is shear stress = dynamic viscosity times velocity gradient. Equal gradients therefore produce stresses in proportion to dynamic viscosity, even when the densities match.<p>Capsule 4th ed., pp. 10, 11; topic 3 point 6.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 10, 11; topic 3 point 6",
            "pages": [
              10,
              11
            ],
            "points": [
              "capsule-t03-p010-n6"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00009",
          "src": "CAP4-03-00009",
          "text": "Which property-phenomenon pairing explains a curved meniscus rising above a reservoir in a clean narrow glass tube?",
          "options": [
            {
              "key": "a",
              "text": "Viscosity and static compressibility"
            },
            {
              "key": "b",
              "text": "Vapour pressure and hydrostatic thrust"
            },
            {
              "key": "c",
              "text": "Surface tension and capillarity"
            },
            {
              "key": "d",
              "text": "Specific gravity and fluid shear elasticity"
            }
          ],
          "answer": "c",
          "explanation": "Capillarity is an interfacial effect involving surface tension and wetting at the solid wall. Density controls the column weight, but density alone cannot provide the upward contact-line force.<p>Capsule 4th ed., pp. 10, 11; topic 3 point 6.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 10, 11; topic 3 point 6",
            "pages": [
              10,
              11
            ],
            "points": [
              "capsule-t03-p010-n6"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00010",
          "src": "CAP4-03-00010",
          "text": "Equal masses of pure liquid water at ordinary atmospheric pressure are held at 1, 4, 10 and 20 degrees Celsius. Which sample occupies the smallest volume?",
          "options": [
            {
              "key": "a",
              "text": "The 1-degree sample"
            },
            {
              "key": "b",
              "text": "The 10-degree sample"
            },
            {
              "key": "c",
              "text": "The 20-degree sample"
            },
            {
              "key": "d",
              "text": "The 4-degree sample"
            }
          ],
          "answer": "d",
          "explanation": "Volume equals mass divided by density. Pure freshwater has its maximum density near 4 degrees Celsius at ordinary pressure, so the equal-mass sample there has the smallest volume; cooling below this temperature reverses the usual contraction trend.<p>Capsule 4th ed., p. 11; topic 3 point 7.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 7",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n7"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00011",
          "src": "CAP4-03-00011",
          "text": "A liquid's measured bulk modulus increases as its operating pressure rises along a fixed-temperature path. For the same small additional pressure increment, what happens to the magnitude of its fractional volume change?",
          "options": [
            {
              "key": "a",
              "text": "It stays unchanged"
            },
            {
              "key": "b",
              "text": "It increases"
            },
            {
              "key": "c",
              "text": "It decreases"
            },
            {
              "key": "d",
              "text": "It changes from contraction to expansion"
            }
          ],
          "answer": "c",
          "explanation": "Bulk modulus K = -dp/(dV/V), so the magnitude of the small volume strain is dp/K. A larger measured K gives less compression. Increasing K with pressure is a common liquid trend, not a universal consequence of the definition.<p>Source note: p11 n8: pressure dependence is state- and path-dependent; qualified using measured K.</p><p>Capsule 4th ed., p. 11; topic 3 point 8.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 8",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n8"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00012",
          "src": "CAP4-03-00012",
          "text": "At a fixed temperature, a fluid's shear stress versus shear-rate curve is nonlinear through the origin. Which constitutive description is incompatible with these observations?",
          "options": [
            {
              "key": "a",
              "text": "A Newtonian fluid with constant dynamic viscosity"
            },
            {
              "key": "b",
              "text": "A shear-thickening power-law fluid"
            },
            {
              "key": "c",
              "text": "A shear-thinning power-law fluid"
            },
            {
              "key": "d",
              "text": "A fluid with shear-rate-dependent apparent viscosity"
            }
          ],
          "answer": "a",
          "explanation": "A Newtonian fluid obeys tau = mu times shear rate, with constant mu at the specified state, giving a straight line through the origin. Nonlinearity indicates non-Newtonian behavior; its curvature is needed to distinguish thinning from thickening.<p>Capsule 4th ed., p. 11; topic 3 point 9.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 9",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n9"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00013",
          "src": "CAP4-03-00013",
          "text": "A peanut-butter sample resists spreading until a finite stress is exceeded, then its apparent viscosity varies with spreading rate. Which model category should be investigated first?",
          "options": [
            {
              "key": "a",
              "text": "An inviscid incompressible-fluid model"
            },
            {
              "key": "b",
              "text": "A constant-viscosity Newtonian model"
            },
            {
              "key": "c",
              "text": "A non-Newtonian yield-stress model"
            },
            {
              "key": "d",
              "text": "A linearly elastic solid at every strain"
            }
          ],
          "answer": "c",
          "explanation": "The observed yield threshold and rate-dependent resistance are not represented by constant-mu Newtonian viscosity. Peanut butter commonly exhibits non-Newtonian behavior, but an exact rheological law must be fitted to the particular sample and temperature.<p>Capsule 4th ed., p. 11; topic 3 point 10.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 10",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n10"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00014",
          "src": "CAP4-03-00014",
          "text": "An oil has density 800 kg/m<sup>3</sup>. What is its specific volume?",
          "options": [
            {
              "key": "a",
              "text": "0.0125 m<sup>3</sup>/kg"
            },
            {
              "key": "b",
              "text": "800 m<sup>3</sup>/kg"
            },
            {
              "key": "c",
              "text": "1.25 m<sup>3</sup>/kg"
            },
            {
              "key": "d",
              "text": "0.00125 m<sup>3</sup>/kg"
            }
          ],
          "answer": "d",
          "explanation": "Specific volume is volume per unit mass, v = 1/rho. Thus v = 1/800 = 0.00125 m^3/kg. It is not specific gravity, which is a dimensionless density ratio.<p>Capsule 4th ed., p. 11; topic 3 point 11.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 11",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n11"
            ]
          },
          "topic": "ACiE0301",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00015",
          "src": "CAP4-03-00015",
          "text": "An oil film separates a moving plate from a fixed plate. Which material property relates the tangential resistance to the velocity gradient for Newtonian behavior?",
          "options": [
            {
              "key": "a",
              "text": "Vapour pressure"
            },
            {
              "key": "b",
              "text": "Dynamic viscosity"
            },
            {
              "key": "c",
              "text": "Surface tension"
            },
            {
              "key": "d",
              "text": "Bulk modulus"
            }
          ],
          "answer": "b",
          "explanation": "Viscosity describes resistance to shearing motion between adjacent fluid layers: tau = mu du/dy. Bulk modulus concerns volume compression, while surface tension concerns an interface rather than shear within the oil.<p>Capsule 4th ed., p. 11; topic 3 point 12.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 12",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n12"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00016",
          "src": "CAP4-03-00016",
          "text": "A flow calculation requires kinematic viscosity nu = mu/rho. Which dimensional formula should the input have?",
          "options": [
            {
              "key": "a",
              "text": "L<sup>2</sup>T<sup>-1</sup>"
            },
            {
              "key": "b",
              "text": "ML<sup>-3</sup>"
            },
            {
              "key": "c",
              "text": "ML<sup>-1</sup>T<sup>-1</sup>"
            },
            {
              "key": "d",
              "text": "L<sup>2</sup>T<sup>-2</sup>"
            }
          ],
          "answer": "a",
          "explanation": "Dynamic viscosity has dimensions M L^-1 T^-1 and density has M L^-3. Their ratio cancels mass and leaves L^2 T^-1, corresponding to m^2/s rather than Pa s.<p>Capsule 4th ed., p. 11; topic 3 point 13.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 13",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n13"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00017",
          "src": "CAP4-03-00017",
          "text": "Over an ordinary operating-temperature range, how does heating usually affect the dynamic viscosities of a lubricating liquid and a dilute gas?",
          "options": [
            {
              "key": "a",
              "text": "Both increase"
            },
            {
              "key": "b",
              "text": "Liquid decreases; gas increases"
            },
            {
              "key": "c",
              "text": "Liquid increases; gas decreases"
            },
            {
              "key": "d",
              "text": "Both decrease"
            }
          ],
          "answer": "b",
          "explanation": "Heating commonly weakens the cohesive resistance governing liquid viscosity, while increased molecular momentum transport raises dilute-gas viscosity. These are usual trends at stated operating conditions, not a law for every complex fluid.<p>Capsule 4th ed., p. 11; topic 3 point 14.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 14",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n14"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00018",
          "src": "CAP4-03-00018",
          "text": "In tau = mu du/dy, velocity u is measured in m/s and transverse coordinate y in metres. Which dimensions belong to du/dy?",
          "options": [
            {
              "key": "a",
              "text": "T<sup>-1</sup>"
            },
            {
              "key": "b",
              "text": "LT<sup>-2</sup>"
            },
            {
              "key": "c",
              "text": "LT<sup>-1</sup>"
            },
            {
              "key": "d",
              "text": "L<sup>-1</sup>T<sup>-1</sup>"
            }
          ],
          "answer": "a",
          "explanation": "Dividing the velocity dimension L/T by distance L gives 1/T. A velocity gradient is a rate of shear deformation, not a velocity or a translational acceleration.<p>Capsule 4th ed., p. 11; topic 3 point 15.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 15",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n15"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00021",
          "src": "CAP4-03-00021",
          "text": "A nonzero constant shear stress is maintained on an ordinary Newtonian liquid. How does its shear deformation behave while temperature and viscosity remain constant?",
          "options": [
            {
              "key": "a",
              "text": "Strain rate steadily falls to zero"
            },
            {
              "key": "b",
              "text": "Strain continues to accumulate with time"
            },
            {
              "key": "c",
              "text": "Strain stops at a fixed elastic value"
            },
            {
              "key": "d",
              "text": "Strain immediately returns to zero"
            }
          ],
          "answer": "b",
          "explanation": "Newton's law gives a nonzero constant strain rate tau/mu. Integrating that rate means strain continues to accumulate, unlike a linear elastic solid that supports a fixed shear stress with a fixed strain.<p>Capsule 4th ed., p. 11; topic 3 point 18.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 18",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n18"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00023",
          "src": "CAP4-03-00023",
          "text": "A very small isolated water drop is nearly spherical when gravity and air drag are negligible. Which energy argument explains this shape?",
          "options": [
            {
              "key": "a",
              "text": "Viscosity requires equal horizontal and vertical speeds"
            },
            {
              "key": "b",
              "text": "Vapour pressure removes the drop's surface energy"
            },
            {
              "key": "c",
              "text": "A sphere minimizes surface area at fixed volume"
            },
            {
              "key": "d",
              "text": "A sphere maximizes surface area at fixed volume"
            }
          ],
          "answer": "c",
          "explanation": "Surface energy is proportional to interfacial area for constant surface tension. The sphere encloses a specified volume with the least area, so it is favored when gravity, drag and other deforming forces are negligible.<p>Capsule 4th ed., p. 11; topic 3 point 20.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 20",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n20"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00024",
          "src": "CAP4-03-00024",
          "text": "A thin soap bubble has radius 10 mm and surface tension 0.025 N/m on each of its two interfaces. What is the excess internal pressure over the surrounding air?",
          "options": [
            {
              "key": "a",
              "text": "5 Pa"
            },
            {
              "key": "b",
              "text": "10 Pa"
            },
            {
              "key": "c",
              "text": "2.5 Pa"
            },
            {
              "key": "d",
              "text": "20 Pa"
            }
          ],
          "answer": "b",
          "explanation": "A thin soap film has two interfaces, giving excess pressure delta p = 4 sigma/R. Substitution gives 4(0.025)/0.010 = 10 Pa. The one-interface liquid-drop expression would incorrectly halve the result.<p>Source note: p11 n21: 4T/R is excess pressure, not absolute internal pressure.</p><p>Capsule 4th ed., p. 11; topic 3 point 21.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 21",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n21"
            ]
          },
          "topic": "ACiE0301",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00058",
          "src": "CAP4-03-00058",
          "text": "For a Newtonian oil at fixed temperature, doubling an imposed shear rate doubles the shear stress. What happens to the dynamic viscosity?",
          "options": [
            {
              "key": "a",
              "text": "It doubles"
            },
            {
              "key": "b",
              "text": "It halves"
            },
            {
              "key": "c",
              "text": "It becomes zero"
            },
            {
              "key": "d",
              "text": "It remains constant"
            }
          ],
          "answer": "d",
          "explanation": "Dynamic viscosity is the proportionality constant mu = tau/shear rate. When stress and rate both double, their ratio is unchanged. Shear-rate-dependent viscosity would instead be non-Newtonian behavior.<p>Capsule 4th ed., p. 12; topic 3 point 55.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 55",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n55"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00119",
          "src": "CAP4-03-00119",
          "text": "For positive shear rates, a fluid follows tau = 0.05 gammaDot<sup>2</sup>, with the coefficient in consistent units. Which rheological behavior does this law describe?",
          "options": [
            {
              "key": "a",
              "text": "Bingham behavior with a finite yield intercept"
            },
            {
              "key": "b",
              "text": "Dilatant or shear-thickening behavior"
            },
            {
              "key": "c",
              "text": "Constant-viscosity Newtonian behavior"
            },
            {
              "key": "d",
              "text": "Pseudoplastic or shear-thinning behavior"
            }
          ],
          "answer": "b",
          "explanation": "The power-law exponent is two, greater than one. Apparent viscosity is tau/gammaDot = 0.05 gammaDot, which increases with shear rate, identifying shear thickening. There is no finite yield intercept in the stated equation.<p>Capsule 4th ed., p. 14; topic 3 point 117.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 117",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n117"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00120",
          "src": "CAP4-03-00120",
          "text": "A fluid obeys tau = K gammaDot<sup>2</sup> with K = 0.05 Pa s<sup>2</sup>. At shear rate 4 s<sup>-1</sup>, what is its apparent dynamic viscosity?",
          "options": [
            {
              "key": "a",
              "text": "0.0125 Pa s"
            },
            {
              "key": "b",
              "text": "0.05 Pa s"
            },
            {
              "key": "c",
              "text": "0.80 Pa s"
            },
            {
              "key": "d",
              "text": "0.20 Pa s"
            }
          ],
          "answer": "d",
          "explanation": "First calculate tau = 0.05 times 4^2 = 0.80 Pa. Apparent viscosity is stress divided by shear rate, 0.80/4 = 0.20 Pa s. The consistency coefficient K has different units and is not itself the apparent viscosity.<p>Capsule 4th ed., p. 14; topic 3 point 117.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 117",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n117"
            ]
          },
          "topic": "ACiE0301",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00121",
          "src": "CAP4-03-00121",
          "text": "An ideal incompressible liquid has zero volume strain under a finite pressure increment. What limiting bulk modulus is consistent with this idealization?",
          "options": [
            {
              "key": "a",
              "text": "Bulk modulus equal to dynamic viscosity"
            },
            {
              "key": "b",
              "text": "Zero bulk modulus"
            },
            {
              "key": "c",
              "text": "Infinite bulk modulus"
            },
            {
              "key": "d",
              "text": "Finite negative bulk modulus"
            }
          ],
          "answer": "c",
          "explanation": "K = -dp/(dV/V). A finite dp combined with vanishing volume strain makes K tend to infinity, while compressibility 1/K tends to zero. Real liquids have large but finite bulk moduli and are only approximately incompressible.<p>Capsule 4th ed., p. 14; topic 3 point 119.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 119",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n119"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00124",
          "src": "CAP4-03-00124",
          "text": "An ideal circular capillary with nonzero surface tension has no equilibrium rise or depression relative to a large reservoir. Under the simple meniscus model, what is the contact angle measured through the liquid?",
          "options": [
            {
              "key": "a",
              "text": "90 degrees"
            },
            {
              "key": "b",
              "text": "180 degrees"
            },
            {
              "key": "c",
              "text": "45 degrees"
            },
            {
              "key": "d",
              "text": "0 degrees"
            }
          ],
          "answer": "a",
          "explanation": "The capillary relation is h = 2 sigma cos(theta)/(rho g r). With finite positive sigma, density, gravity and radius, h = 0 requires cos(theta) = 0, giving theta = 90 degrees. Wetting and nonwetting angles on either side produce rise or depression.<p>Capsule 4th ed., p. 14; topic 3 point 122.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 122",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n122"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00131",
          "src": "CAP4-03-00131",
          "text": "An object's weight is 120 N on the Moon. Assume Earth's gravitational acceleration is exactly six times the Moon's. What is its weight on Earth?",
          "options": [
            {
              "key": "a",
              "text": "4320 N"
            },
            {
              "key": "b",
              "text": "120 N"
            },
            {
              "key": "c",
              "text": "720 N"
            },
            {
              "key": "d",
              "text": "20 N"
            }
          ],
          "answer": "c",
          "explanation": "Mass does not change between locations, while weight is mg. Hence W_Earth/W_Moon = g_Earth/g_Moon = 6, giving 6 times 120 = 720 N. The factor six is the stated approximation, not a change in the object's mass.<p>Capsule 4th ed., p. 14; topic 3 point 128.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 128",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n128"
            ]
          },
          "topic": "ACiE0301",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00148",
          "src": "CAP4-03-00148",
          "text": "A nonwetting liquid is depressed below a large reservoir's surface in a narrow vertical capillary. Heating reduces surface tension while density, tube radius and the contact angle above 90 degrees remain unchanged. How does the equilibrium level move?",
          "options": [
            {
              "key": "a",
              "text": "It rises toward the reservoir level without reaching it"
            },
            {
              "key": "b",
              "text": "It rises above the reservoir level"
            },
            {
              "key": "c",
              "text": "It falls farther below the reservoir level"
            },
            {
              "key": "d",
              "text": "It stays at the original depressed level"
            }
          ],
          "answer": "a",
          "explanation": "The signed displacement is h = 2 sigma cos(theta)/(rho g r). For a nonwetting angle, cos(theta) is negative. Reducing positive sigma makes h less negative: the depression magnitude decreases, but its sign does not change while the contact angle remains above 90 degrees.<p>Source note: Independent review: explicitly covers the bracketed fall case in p10 n4. Surface tension remains positive; the stipulated unchanged density and wetting conditions are essential.</p><p>Capsule 4th ed., p. 10; topic 3 point 4.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 3 point 4",
            "pages": [
              10
            ],
            "points": [
              "capsule-t03-p010-n4"
            ]
          },
          "topic": "ACiE0301",
          "kind": "application"
        }
      ]
    },
    {
      "id": "ACiE0302",
      "name": "Hydrostatics",
      "subject": "Basic Water Resources Engineering",
      "questions": [
        {
          "id": "CAP4-03-00025",
          "src": "CAP4-03-00025",
          "text": "A closed rigid body is fully submerged in a homogeneous liquid at rest. What determines the resultant upward hydrostatic force?",
          "options": [
            {
              "key": "a",
              "text": "The weight of the displaced liquid"
            },
            {
              "key": "b",
              "text": "The pressure at the body's centroid alone"
            },
            {
              "key": "c",
              "text": "The weight of the submerged body"
            },
            {
              "key": "d",
              "text": "The liquid weight vertically above the body alone"
            }
          ],
          "answer": "a",
          "explanation": "Integrating hydrostatic pressure over the closed surface gives buoyancy rho g times displaced volume. Horizontal components cancel and the vertical resultant equals displaced-liquid weight, whether or not the body itself is floating in equilibrium.<p>Capsule 4th ed., p. 11; topic 3 point 22.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 22",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n22"
            ]
          },
          "topic": "ACiE0302",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00026",
          "src": "CAP4-03-00026",
          "text": "A suction-line gauge reads -25 kPa while local atmospheric pressure is 95 kPa absolute. What is the line's absolute pressure?",
          "options": [
            {
              "key": "a",
              "text": "120 kPa"
            },
            {
              "key": "b",
              "text": "70 kPa"
            },
            {
              "key": "c",
              "text": "-70 kPa"
            },
            {
              "key": "d",
              "text": "25 kPa"
            }
          ],
          "answer": "b",
          "explanation": "Signed gauge pressure is p_abs - p_atm. Therefore p_abs = 95 + (-25) = 70 kPa. A vacuum reading expressed as a positive magnitude would instead be subtracted; the atmospheric term is not assigned an arbitrary plus-or-minus sign.<p>Source note: p11 n23 corrected: p_abs = p_atm + p_gauge for signed gauge pressure.</p><p>Capsule 4th ed., p. 11; topic 3 point 23.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 23",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n23"
            ]
          },
          "topic": "ACiE0302",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00027",
          "src": "CAP4-03-00027",
          "text": "Normal stresses on differently oriented planes through a point in a moving viscous fluid need not be equal. Which interpretation distinguishes pressure from total stress correctly?",
          "options": [
            {
              "key": "a",
              "text": "Pressure is a vector; viscous stresses are scalar"
            },
            {
              "key": "b",
              "text": "All normal stresses must equal pressure in any flow"
            },
            {
              "key": "c",
              "text": "Pressure is undefined whenever viscosity is nonzero"
            },
            {
              "key": "d",
              "text": "Pressure is scalar; viscous stresses can be directional"
            }
          ],
          "answer": "d",
          "explanation": "The stress tensor contains an isotropic pressure part and a viscous part. Direction-dependent total normal traction may occur in a deforming viscous fluid, but this does not make the pressure itself direction-dependent.<p>Source note: p11 n24 confuses pressure with total normal stress; see corrected hydrostatics notes.</p><p>Capsule 4th ed., p. 11; topic 3 point 24.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 24",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n24"
            ]
          },
          "topic": "ACiE0302",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00028",
          "src": "CAP4-03-00028",
          "text": "A uniform net pressure p acts normally over a hemispherical dome of radius r. What is the magnitude of its resultant along the dome's symmetry axis?",
          "options": [
            {
              "key": "a",
              "text": "4p pi r<sup>2</sup>"
            },
            {
              "key": "b",
              "text": "p pi r<sup>2</sup>"
            },
            {
              "key": "c",
              "text": "2p pi r<sup>2</sup>"
            },
            {
              "key": "d",
              "text": "p pi r<sup>2</sup>/2"
            }
          ],
          "answer": "b",
          "explanation": "The axial components integrate to pressure times the projected circular area, pi r^2. The curved area is 2 pi r^2, but multiplying by that area ignores cancellation of the differently directed surface forces.<p>Source note: p11 n25 restated for uniform NET pressure; hydrostatic pressure varying with depth requires integration.</p><p>Capsule 4th ed., p. 11; topic 3 point 25.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 25",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n25"
            ]
          },
          "topic": "ACiE0302",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00029",
          "src": "CAP4-03-00029",
          "text": "In a connected homogeneous liquid at rest under uniform gravity, which quantity remains constant as elevation z changes?",
          "options": [
            {
              "key": "a",
              "text": "rho g z alone"
            },
            {
              "key": "b",
              "text": "p alone"
            },
            {
              "key": "c",
              "text": "z - p/(rho g)"
            },
            {
              "key": "d",
              "text": "z + p/(rho g)"
            }
          ],
          "answer": "d",
          "explanation": "Hydrostatic equilibrium gives dp/dz = -rho g. For constant density, integration yields p/(rho g) + z = constant, the piezometric head. Pressure alone increases downward rather than remaining constant.<p>Capsule 4th ed., p. 11; topic 3 point 26.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 26",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n26"
            ]
          },
          "topic": "ACiE0302",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00030",
          "src": "CAP4-03-00030",
          "text": "Using water density 1000 kg/m<sup>3</sup> and g = 9.81 m/s<sup>2</sup>, what gauge pressure occurs 1.0 m below an atmospheric free surface?",
          "options": [
            {
              "key": "a",
              "text": "981 Pa"
            },
            {
              "key": "b",
              "text": "9810 Pa"
            },
            {
              "key": "c",
              "text": "9800 Pa"
            },
            {
              "key": "d",
              "text": "98100 Pa"
            }
          ],
          "answer": "b",
          "explanation": "Gauge pressure is rho g h = 1000 times 9.81 times 1.0 = 9810 Pa. Using g = 9.8 would give 9800 Pa; the source mixes these two values, so the gravitational acceleration is stated explicitly here.<p>Source note: p11 n27 arithmetic repaired by matching g = 9.81 to 9810 Pa.</p><p>Capsule 4th ed., p. 11; topic 3 point 27.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 27",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n27"
            ]
          },
          "topic": "ACiE0302",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00031",
          "src": "CAP4-03-00031",
          "text": "A floating vessel displaces 20 m<sup>3</sup>. Its waterplane second moment about the heel axis is 12 m<sup>4</sup>, and G is 0.40 m above B. What is its initial metacentric height GM?",
          "options": [
            {
              "key": "a",
              "text": "0.60 m"
            },
            {
              "key": "b",
              "text": "1.00 m"
            },
            {
              "key": "c",
              "text": "0.20 m"
            },
            {
              "key": "d",
              "text": "-0.20 m"
            }
          ],
          "answer": "c",
          "explanation": "BM = I_waterplane/displaced volume = 12/20 = 0.60 m. Since G is above B, GM = BM - BG = 0.60 - 0.40 = 0.20 m. The relevant I is the waterplane-area moment, not a volume or mass moment.<p>Capsule 4th ed., p. 11; topic 3 point 28.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 28",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n28"
            ]
          },
          "topic": "ACiE0302",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00032",
          "src": "CAP4-03-00032",
          "text": "For a small heel of a freely floating body, which relative position gives a restoring hydrostatic moment?",
          "options": [
            {
              "key": "a",
              "text": "Metacentre M below centre of gravity G"
            },
            {
              "key": "b",
              "text": "Geometric centroid above the free surface"
            },
            {
              "key": "c",
              "text": "Centre of buoyancy B above metacentre M"
            },
            {
              "key": "d",
              "text": "Metacentre M above centre of gravity G"
            }
          ],
          "answer": "d",
          "explanation": "Initial stability requires GM greater than zero. Then the displaced buoyant-force line creates a restoring couple with weight. G is the centre of gravity; a geometric centroid is interchangeable with it only for an appropriate uniform mass distribution.<p>Source note: p11 n29: replace ambiguous &#39;centroid&#39; with centre of gravity and specify initial, small-angle stability.</p><p>Capsule 4th ed., p. 11; topic 3 point 29.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 29",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n29"
            ]
          },
          "topic": "ACiE0302",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00033",
          "src": "CAP4-03-00033",
          "text": "An ordinary vented-case Bourdon gauge is connected to a pressurized line. Which pressure does its calibrated pointer normally indicate?",
          "options": [
            {
              "key": "a",
              "text": "Line pressure relative to a perfect vacuum"
            },
            {
              "key": "b",
              "text": "Stagnation pressure minus line static pressure"
            },
            {
              "key": "c",
              "text": "Line pressure relative to ambient atmosphere"
            },
            {
              "key": "d",
              "text": "Liquid vapour pressure at line temperature"
            }
          ],
          "answer": "c",
          "explanation": "The Bourdon element deforms under the pressure difference between its inside and the surrounding case. With the case vented to atmosphere, this is gauge pressure; specialized absolute instruments use a different reference arrangement.<p>Capsule 4th ed., p. 11; topic 3 point 30.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 30",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n30"
            ]
          },
          "topic": "ACiE0302",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00101",
          "src": "CAP4-03-00101",
          "text": "A differential U-tube containing mercury joins two water-pipe taps at the same elevation. The mercury-level difference is 0.15 m. With densities 13600 and 1000 kg/m<sup>3</sup> and g = 9.81 m/s<sup>2</sup>, what is the pressure-difference magnitude?",
          "options": [
            {
              "key": "a",
              "text": "18.54 kPa"
            },
            {
              "key": "b",
              "text": "185.41 kPa"
            },
            {
              "key": "c",
              "text": "1.47 kPa"
            },
            {
              "key": "d",
              "text": "20.01 kPa"
            }
          ],
          "answer": "a",
          "explanation": "For equal-elevation taps containing water, delta p = (rho_Hg - rho_water)gh. This gives (13600-1000) times 9.81 times 0.15 = 18540.9 Pa = 18.54 kPa. Using mercury density alone fails to account for the displaced water columns.<p>Capsule 4th ed., p. 13; topic 3 point 100.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 100",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n100"
            ]
          },
          "topic": "ACiE0302",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00111",
          "src": "CAP4-03-00111",
          "text": "Pure ice floats freely in freshwater and then melts completely. Neglect evaporation and temperature-related density changes of the water. What happens to the water level?",
          "options": [
            {
              "key": "a",
              "text": "It falls by the ice's initially submerged volume"
            },
            {
              "key": "b",
              "text": "It rises by the ice's initially exposed volume"
            },
            {
              "key": "c",
              "text": "It rises by the entire original ice volume"
            },
            {
              "key": "d",
              "text": "It remains unchanged"
            }
          ],
          "answer": "d",
          "explanation": "Floating ice initially displaces water of equal weight. Ice mass m therefore displaces m/rho_water, exactly the volume of meltwater produced under the stated assumptions. This result does not automatically apply to a sinking solid or ice floating in a different-density liquid.<p>Source note: p13 n108 and p15 n141 duplicate the floating-ice fact; n141&#39;s &#39;remains the change&#39; corrected to unchanged.</p><p>Capsule 4th ed., pp. 13, 15; topic 3 point 108; topic 3 point 141.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 13, 15; topic 3 point 108; topic 3 point 141",
            "pages": [
              13,
              15
            ],
            "points": [
              "capsule-t03-p013-n108",
              "capsule-t03-p015-n141"
            ]
          },
          "topic": "ACiE0302",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00113",
          "src": "CAP4-03-00113",
          "text": "One limb of a water U-tube is connected to a gas line and the other is open to atmosphere. The gas-side water level is 0.25 m lower. Neglect gas density and use rho = 1000 kg/m<sup>3</sup>, g = 9.81 m/s<sup>2</sup>. What is the gas gauge pressure?",
          "options": [
            {
              "key": "a",
              "text": "-2.45 kPa"
            },
            {
              "key": "b",
              "text": "+2.45 kPa"
            },
            {
              "key": "c",
              "text": "+0.245 kPa"
            },
            {
              "key": "d",
              "text": "+24.5 kPa"
            }
          ],
          "answer": "b",
          "explanation": "The depressed gas-side level means the gas is above atmospheric pressure. The difference is rho g h = 1000 times 9.81 times 0.25 = 2452.5 Pa = 2.45 kPa gauge. Atmospheric pressure must be added separately for an absolute reading.<p>Capsule 4th ed., p. 13; topic 3 point 110.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 110",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n110"
            ]
          },
          "topic": "ACiE0302",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00123",
          "src": "CAP4-03-00123",
          "text": "An inclined plane gate is fully submerged in a constant-density liquid, with uniform atmospheric pressure canceled across it. Where is the hydrostatic centre of pressure relative to the gate's area centroid?",
          "options": [
            {
              "key": "a",
              "text": "At a smaller vertical depth"
            },
            {
              "key": "b",
              "text": "At the gate's mass centre regardless of shape"
            },
            {
              "key": "c",
              "text": "At a greater vertical depth"
            },
            {
              "key": "d",
              "text": "Always exactly at the area centroid"
            }
          ],
          "answer": "c",
          "explanation": "Hydrostatic pressure increases with depth, so deeper portions carry more force. The depth correction is IG sin^2(theta)/(A hbar), positive for a nonhorizontal gate. The relevant centroid is geometric area centroid, not necessarily the centre of gravity of a nonuniform gate.<p>Source note: p14 n121: centre of gravity replaced by area centroid; nonhorizontal plane and net hydrostatic loading specified.</p><p>Capsule 4th ed., p. 14; topic 3 point 121.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 121",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n121"
            ]
          },
          "topic": "ACiE0302",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00132",
          "src": "CAP4-03-00132",
          "text": "The same rigid body is fully submerged and suspended at rest, with apparent weights 50 N in water and 80 N in oil of specific gravity 0.80. Use water density 1000 kg/m<sup>3</sup> and g = 9.81 m/s<sup>2</sup>. What is its volume?",
          "options": [
            {
              "key": "a",
              "text": "3.82 litres"
            },
            {
              "key": "b",
              "text": "1.53 litres"
            },
            {
              "key": "c",
              "text": "15.29 litres"
            },
            {
              "key": "d",
              "text": "30.58 litres"
            }
          ],
          "answer": "c",
          "explanation": "The difference in apparent weights is the difference in buoyancies: 80-50 = (1000-800)gV. Thus V = 30/(200 times 9.81) = 0.0152905 m^3 = 15.29 litres. Using the oil's full density instead of the density difference gives the wrong result.<p>Capsule 4th ed., p. 14; topic 3 point 129.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 129",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n129"
            ]
          },
          "topic": "ACiE0302",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00133",
          "src": "CAP4-03-00133",
          "text": "A body fully submerged in water has apparent weight 50 N; in oil of specific gravity 0.80 it has apparent weight 80 N. Assuming the same displaced volume, what is its true weight, neglecting air buoyancy?",
          "options": [
            {
              "key": "a",
              "text": "200 N"
            },
            {
              "key": "b",
              "text": "130 N"
            },
            {
              "key": "c",
              "text": "150 N"
            },
            {
              "key": "d",
              "text": "80 N"
            }
          ],
          "answer": "a",
          "explanation": "Let B be its water buoyancy. True weight satisfies W = 50+B = 80+0.80B, so 0.20B = 30 and B = 150 N. Therefore W = 50+150 = 200 N. The larger submerged reading is still not the true weight.<p>Capsule 4th ed., p. 14; topic 3 point 129.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 129",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n129"
            ]
          },
          "topic": "ACiE0302",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00134",
          "src": "CAP4-03-00134",
          "text": "A sphere sinks vertically through a liquid. Which direction does the buoyancy associated with the hydrostatic pressure gradient act, separately from hydrodynamic drag?",
          "options": [
            {
              "key": "a",
              "text": "It reverses whenever the sphere's velocity reverses"
            },
            {
              "key": "b",
              "text": "Horizontally, perpendicular to gravity"
            },
            {
              "key": "c",
              "text": "Downward, along the sinking velocity"
            },
            {
              "key": "d",
              "text": "Upward, opposite gravity"
            }
          ],
          "answer": "d",
          "explanation": "The hydrostatic pressure gradient produces an upward buoyancy component because pressure is larger below the body. Drag depends on relative motion; buoyancy does not reverse when the body's direction of travel reverses.<p>Source note: p14 n130: separate hydrostatic buoyancy from additional dynamic pressure and viscous forces on a moving sphere.</p><p>Capsule 4th ed., p. 14; topic 3 point 130.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 130",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n130"
            ]
          },
          "topic": "ACiE0302",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00135",
          "src": "CAP4-03-00135",
          "text": "A fully submerged rigid stone moves from shallow to deeper water in a constant-density lake. Neglect compressibility and dynamic forces. How does its buoyant force change?",
          "options": [
            {
              "key": "a",
              "text": "It increases in proportion to total wetted surface pressure"
            },
            {
              "key": "b",
              "text": "It decreases as absolute pressure increases"
            },
            {
              "key": "c",
              "text": "It stays constant"
            },
            {
              "key": "d",
              "text": "It increases in proportion to absolute depth"
            }
          ],
          "answer": "c",
          "explanation": "Buoyancy is rho g V_displaced. With density, gravity and displaced volume unchanged, it is independent of absolute depth. Pressure grows at both the top and bottom, but the net hydrostatic resultant remains the same.<p>Capsule 4th ed., p. 14; topic 3 point 131.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 131",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n131"
            ]
          },
          "topic": "ACiE0302",
          "kind": "application"
        }
      ]
    },
    {
      "id": "ACiE0303",
      "name": "Hydro-kinematics and hydro-dynamics",
      "subject": "Basic Water Resources Engineering",
      "questions": [
        {
          "id": "CAP4-03-00034",
          "src": "CAP4-03-00034",
          "text": "In the ideal head-form Bernoulli equation, how should p/(rho g), V<sup>2</sup>/(2g) and z be interpreted?",
          "options": [
            {
              "key": "a",
              "text": "Separate force components per unit volume"
            },
            {
              "key": "b",
              "text": "Three dimensionless energy coefficients"
            },
            {
              "key": "c",
              "text": "Separate energy components per unit weight"
            },
            {
              "key": "d",
              "text": "Three separate values of total energy per unit mass"
            }
          ],
          "answer": "c",
          "explanation": "Pressure head, velocity head and elevation head each have units of length, equivalent to energy divided by weight. Their sum is total mechanical head; each individual term is not itself the total energy.<p>Source note: p11 n31 corrected: each term is a component; only their sum is total head.</p><p>Capsule 4th ed., p. 11; topic 3 point 31.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 31",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n31"
            ]
          },
          "topic": "ACiE0303",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00035",
          "src": "CAP4-03-00035",
          "text": "Which local kinematic condition represents zero volumetric expansion of an incompressible fluid element?",
          "options": [
            {
              "key": "a",
              "text": "Velocity gradient tensor equals zero"
            },
            {
              "key": "b",
              "text": "Local time derivative of velocity equals zero"
            },
            {
              "key": "c",
              "text": "Curl of velocity equals zero"
            },
            {
              "key": "d",
              "text": "Divergence of velocity equals zero"
            }
          ],
          "answer": "d",
          "explanation": "The divergence is the fractional rate of change of a material element's volume. Incompressibility therefore requires div(u) = 0. Zero curl means irrotational flow, and a zero local time derivative means steadiness; neither is the same condition.<p>Capsule 4th ed., pp. 11, 14; topic 3 point 32; topic 3 point 139.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 11, 14; topic 3 point 32; topic 3 point 139",
            "pages": [
              11,
              14
            ],
            "points": [
              "capsule-t03-p011-n32",
              "capsule-t03-p014-n139"
            ]
          },
          "topic": "ACiE0303",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00036",
          "src": "CAP4-03-00036",
          "text": "A Venturi's discharge is estimated from pressure difference using continuity and an energy equation. Which statement about applying momentum conservation to the same meter is defensible?",
          "options": [
            {
              "key": "a",
              "text": "It requires identical inlet and throat velocities"
            },
            {
              "key": "b",
              "text": "It fails because the pipe area changes"
            },
            {
              "key": "c",
              "text": "It remains valid when pressure and wall forces are included"
            },
            {
              "key": "d",
              "text": "It fails because static pressure is nonuniform"
            }
          ],
          "answer": "c",
          "explanation": "Momentum conservation applies to a Venturi control volume as to other flows. Wall reaction and pressure forces must balance momentum-flux changes. The usual discharge equation uses energy plus continuity for convenience, not because momentum is inapplicable.<p>Source note: p11 n33 false exclusion corrected.</p><p>Capsule 4th ed., p. 11; topic 3 point 33.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 33",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n33"
            ]
          },
          "topic": "ACiE0303",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00038",
          "src": "CAP4-03-00038",
          "text": "Water passes over a sharp-crested measuring weir and forms a free sheet before landing downstream. What is that sheet called?",
          "options": [
            {
              "key": "a",
              "text": "Afflux"
            },
            {
              "key": "b",
              "text": "Tailwater"
            },
            {
              "key": "c",
              "text": "Nappe"
            },
            {
              "key": "d",
              "text": "Crest"
            }
          ],
          "answer": "c",
          "explanation": "The nappe is the sheet of water passing over a weir or notch. The crest is the solid overflow edge, afflux is the upstream water-level rise, and tailwater is the downstream water body or level.<p>Capsule 4th ed., pp. 11, 12; topic 3 point 35; topic 3 point 66.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 11, 12; topic 3 point 35; topic 3 point 66",
            "pages": [
              11,
              12
            ],
            "points": [
              "capsule-t03-p011-n35",
              "capsule-t03-p012-n66"
            ]
          },
          "topic": "ACiE0303",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00039",
          "src": "CAP4-03-00039",
          "text": "A steady gas stream has inlet density 4 kg/m<sup>3</sup>, area 0.03 m<sup>2</sup> and speed 20 m/s. At an outlet of density 2 kg/m<sup>3</sup> and area 0.02 m<sup>2</sup>, what speed conserves mass without leakage?",
          "options": [
            {
              "key": "a",
              "text": "15 m/s"
            },
            {
              "key": "b",
              "text": "30 m/s"
            },
            {
              "key": "c",
              "text": "120 m/s"
            },
            {
              "key": "d",
              "text": "60 m/s"
            }
          ],
          "answer": "d",
          "explanation": "The inlet mass flow is rho A V = 4(0.03)(20) = 2.4 kg/s. Equating the outlet mass flow gives V = 2.4/[2(0.02)] = 60 m/s. Equal volume discharge would be wrong because density changes.<p>Capsule 4th ed., p. 11; topic 3 point 36.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 36",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n36"
            ]
          },
          "topic": "ACiE0303",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00040",
          "src": "CAP4-03-00040",
          "text": "Steady incompressible flow enters a pipe contraction at 2 m/s. The outlet area is half the inlet area and there are no branches. What is the outlet mean speed?",
          "options": [
            {
              "key": "a",
              "text": "4 m/s"
            },
            {
              "key": "b",
              "text": "2 m/s"
            },
            {
              "key": "c",
              "text": "1 m/s"
            },
            {
              "key": "d",
              "text": "8 m/s"
            }
          ],
          "answer": "a",
          "explanation": "Continuity gives A1 V1 = A2 V2. Hence V2 = (A1/A2)V1 = 2 times 2 = 4 m/s. Velocity varies inversely with area, not directly with it.<p>Capsule 4th ed., p. 11; topic 3 point 37.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 37",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n37"
            ]
          },
          "topic": "ACiE0303",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00041",
          "src": "CAP4-03-00041",
          "text": "In a steady inviscid incompressible flow under gravity, what additional property permits one Bernoulli constant to apply throughout a connected flow region rather than only along individual streamlines?",
          "options": [
            {
              "key": "a",
              "text": "Zero gauge pressure at the inlet"
            },
            {
              "key": "b",
              "text": "A horizontal datum"
            },
            {
              "key": "c",
              "text": "Uniform pipe diameter"
            },
            {
              "key": "d",
              "text": "Irrotational flow"
            }
          ],
          "answer": "d",
          "explanation": "The streamline form permits the Bernoulli constant to differ between streamlines in rotational flow. Irrotationality makes the constant common throughout a connected region under the stated assumptions. Different streamlines need not always have different constants.<p>Source note: p11 n38 overstates cross-streamline differences; irrotational exception included.</p><p>Capsule 4th ed., p. 11; topic 3 point 38.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 38",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n38"
            ]
          },
          "topic": "ACiE0303",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00042",
          "src": "CAP4-03-00042",
          "text": "A real viscous liquid flows steadily through a long pipe with no pump or turbine. How should an engineer relate the upstream and downstream mechanical heads?",
          "options": [
            {
              "key": "a",
              "text": "Use hydrostatic pressure variation alone"
            },
            {
              "key": "b",
              "text": "Set the two total heads equal despite friction"
            },
            {
              "key": "c",
              "text": "Include a positive head-loss term"
            },
            {
              "key": "d",
              "text": "Treat friction as an increase in downstream total head"
            }
          ],
          "answer": "c",
          "explanation": "The mechanical-energy equation is H1 = H2 + h_loss for the stated flow. Viscous dissipation prevents using the lossless Bernoulli form unchanged, but does not invalidate energy conservation or its extended engineering form.<p>Source note: p11 n39: distinguish lossless Bernoulli from the extended energy equation.</p><p>Capsule 4th ed., p. 11; topic 3 point 39.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 39",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n39"
            ]
          },
          "topic": "ACiE0303",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00047",
          "src": "CAP4-03-00047",
          "text": "A horizontal water jet strikes a large smooth stationary vertical plate normally. Neglect splash and losses immediately after impact. How is the outflow directed?",
          "options": [
            {
              "key": "a",
              "text": "Along the plate with doubled normal velocity"
            },
            {
              "key": "b",
              "text": "Back along the incident jet at equal speed"
            },
            {
              "key": "c",
              "text": "Through the plate with unchanged normal velocity"
            },
            {
              "key": "d",
              "text": "Along the plate with zero normal velocity"
            }
          ],
          "answer": "d",
          "explanation": "The impermeable plate removes the velocity component normal to it, while the fluid spreads tangentially along the surface. Momentum changes even if the ideal speed magnitude is approximately preserved; a flat plate does not reverse the entire jet like a curved bucket.<p>Capsule 4th ed., p. 12; topic 3 point 44.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 44",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n44"
            ]
          },
          "topic": "ACiE0303",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00048",
          "src": "CAP4-03-00048",
          "text": "A water jet of area 0.002 m<sup>2</sup> and speed 10 m/s strikes a stationary plate normally and leaves tangentially. With density 1000 kg/m<sup>3</sup>, what force acts on the plate in the jet direction?",
          "options": [
            {
              "key": "a",
              "text": "200 N"
            },
            {
              "key": "b",
              "text": "20 N"
            },
            {
              "key": "c",
              "text": "100 N"
            },
            {
              "key": "d",
              "text": "400 N"
            }
          ],
          "answer": "a",
          "explanation": "The intercepted mass rate is rho A V = 20 kg/s. The normal velocity drops from 10 to zero, so the force magnitude is 20 times 10 = 200 N, or rho A V^2. A full reversal would instead give twice this ideal force.<p>Capsule 4th ed., p. 12; topic 3 point 45.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 45",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n45"
            ]
          },
          "topic": "ACiE0303",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00049",
          "src": "CAP4-03-00049",
          "text": "A geometrically similar hydraulic model has corresponding velocity vectors in a constant model-to-prototype ratio. What further relation is consistent with kinematic similarity?",
          "options": [
            {
              "key": "a",
              "text": "Identical discharges regardless of scale and velocity ratio"
            },
            {
              "key": "b",
              "text": "Similar streamline patterns and Q ratio equal to area ratio times velocity ratio"
            },
            {
              "key": "c",
              "text": "Identical forces regardless of model dimensions"
            },
            {
              "key": "d",
              "text": "Equal Reynolds numbers regardless of fluid properties"
            }
          ],
          "answer": "b",
          "explanation": "Kinematic similarity preserves the scaled motion pattern. Because Q = A V, discharge scales as area times velocity, not necessarily one-to-one. Matching force ratios or relevant dimensionless force groups is the additional requirement of dynamic similarity.<p>Source note: p12 n46: &#39;similar discharge&#39; means consistent scaling, not equal numerical discharge.</p><p>Capsule 4th ed., p. 12; topic 3 point 46.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 46",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n46"
            ]
          },
          "topic": "ACiE0303",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00050",
          "src": "CAP4-03-00050",
          "text": "In a steady incompressible flow through a horizontal Venturi, which section has the greatest cross-sectional mean speed?",
          "options": [
            {
              "key": "a",
              "text": "The wide upstream section"
            },
            {
              "key": "b",
              "text": "The wide downstream section"
            },
            {
              "key": "c",
              "text": "Every section has the same mean speed"
            },
            {
              "key": "d",
              "text": "The minimum-area throat"
            }
          ],
          "answer": "d",
          "explanation": "The same discharge passes through each section, so V = Q/A is largest at the smallest area. In the ideal energy model, the increase in velocity head is accompanied by a decrease in static pressure head.<p>Capsule 4th ed., p. 12; topic 3 point 47.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 47",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n47"
            ]
          },
          "topic": "ACiE0303",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00052",
          "src": "CAP4-03-00052",
          "text": "A Pitot probe is moved across a large pipe to obtain a velocity traverse. What quantity does each properly calibrated reading represent?",
          "options": [
            {
              "key": "a",
              "text": "Local speed at the probe position"
            },
            {
              "key": "b",
              "text": "Total pipe discharge without area information"
            },
            {
              "key": "c",
              "text": "Mean speed across the entire pipe automatically"
            },
            {
              "key": "d",
              "text": "Fluid density independent of pressure measurements"
            }
          ],
          "answer": "a",
          "explanation": "A Pitot arrangement relates stagnation-minus-static pressure to local kinetic energy. A traverse and cross-sectional integration can estimate discharge, but one local reading is not automatically the cross-sectional mean or total flow.<p>Capsule 4th ed., p. 12; topic 3 point 49.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 49",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n49"
            ]
          },
          "topic": "ACiE0303",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00056",
          "src": "CAP4-03-00056",
          "text": "For a conventional sharp-edged orifice meter, which discharge-coefficient range is a plausible preliminary textbook estimate rather than a substitute for calibration?",
          "options": [
            {
              "key": "a",
              "text": "0.97 to 0.99"
            },
            {
              "key": "b",
              "text": "0.62 to 0.65"
            },
            {
              "key": "c",
              "text": "1.20 to 1.25"
            },
            {
              "key": "d",
              "text": "0.12 to 0.15"
            }
          ],
          "answer": "b",
          "explanation": "A conventional sharp-edged orifice meter commonly has Cd near 0.6, with 0.62-0.65 used as an indicative range. A Venturi generally has a much higher coefficient. Actual Cd depends on Reynolds number, diameter ratio, edge and tapping geometry.<p>Source note: p12 n53 is indicative, not an edition-independent calibration requirement.</p><p>Capsule 4th ed., p. 12; topic 3 point 53.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 53",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n53"
            ]
          },
          "topic": "ACiE0303",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00061",
          "src": "CAP4-03-00061",
          "text": "An incompressible liquid flows steadily downward in a constant-area vertical pipe. Neglect friction and machines. How does static pressure vary with upward elevation z?",
          "options": [
            {
              "key": "a",
              "text": "It depends only on the direction of flow"
            },
            {
              "key": "b",
              "text": "It is constant because speed is constant"
            },
            {
              "key": "c",
              "text": "It increases as z increases"
            },
            {
              "key": "d",
              "text": "It decreases as z increases"
            }
          ],
          "answer": "d",
          "explanation": "Continuity makes the mean speed constant. Bernoulli then gives p/(rho g) + z = constant, so dp/dz = -rho g. Pressure increases downward even though the flow moves downward; the source's opposite trend is incorrect.<p>Source note: p12 n57 contradicts p15 n144. Corrected using continuity plus lossless Bernoulli, not by selecting one printed statement arbitrarily.</p><p>Capsule 4th ed., p. 12; topic 3 point 57.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 57",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n57"
            ]
          },
          "topic": "ACiE0303",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00077",
          "src": "CAP4-03-00077",
          "text": "A Pitot-static tube in water reads stagnation pressure 2.0 kPa higher than local static pressure. With density 1000 kg/m<sup>3</sup> and velocity coefficient one, what local speed does it indicate?",
          "options": [
            {
              "key": "a",
              "text": "4.0 m/s"
            },
            {
              "key": "b",
              "text": "1.0 m/s"
            },
            {
              "key": "c",
              "text": "2.0 m/s"
            },
            {
              "key": "d",
              "text": "0.063 m/s"
            }
          ],
          "answer": "c",
          "explanation": "The differential pressure is rho V^2/2, so V = sqrt(2 delta p/rho) = sqrt(2 times 2000/1000) = 2.0 m/s. Pressure difference must be converted from kPa to Pa before substitution.<p>Capsule 4th ed., p. 12; topic 3 point 75.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 75",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n75"
            ]
          },
          "topic": "ACiE0303",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00109",
          "src": "CAP4-03-00109",
          "text": "A student says mass continuity is valid only for steady two-dimensional incompressible flow. Which correction is needed?",
          "options": [
            {
              "key": "a",
              "text": "Continuity is general; the divergence-free form is a special reduction"
            },
            {
              "key": "b",
              "text": "Unsteady flow has no control-volume mass balance"
            },
            {
              "key": "c",
              "text": "Compressible flow conserves volume but not mass"
            },
            {
              "key": "d",
              "text": "Continuity is restricted to laminar two-dimensional flow"
            }
          ],
          "answer": "a",
          "explanation": "The general local mass balance is partial rho/partial t + div(rho u) = 0. For incompressible motion it reduces to div(u) = 0, including unsteady three-dimensional cases. Steady two-dimensional flow is one valid case, not the only case.<p>Source note: p13 n106 true as an example but not an exclusive validity condition.</p><p>Capsule 4th ed., p. 13; topic 3 point 106.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 106",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n106"
            ]
          },
          "topic": "ACiE0303",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00125",
          "src": "CAP4-03-00125",
          "text": "Water passes at a constant discharge through a fixed conical pipe reducer. At every section the velocity is unchanged with time, but section areas differ. What is the mean-flow classification?",
          "options": [
            {
              "key": "a",
              "text": "Unsteady and uniform"
            },
            {
              "key": "b",
              "text": "Steady and uniform"
            },
            {
              "key": "c",
              "text": "Unsteady and nonuniform"
            },
            {
              "key": "d",
              "text": "Steady and nonuniform"
            }
          ],
          "answer": "d",
          "explanation": "No time change at a fixed section makes the flow steady. Since V = Q/A and area changes along the reducer, mean velocity changes with position, making the flow nonuniform. A fixed discharge does not imply a spatially constant speed.<p>Capsule 4th ed., p. 14; topic 3 point 123.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 123",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n123"
            ]
          },
          "topic": "ACiE0303",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00126",
          "src": "CAP4-03-00126",
          "text": "At a section, elevation head is 2 m, gauge-pressure head is 3 m and velocity head is 4 m, with kinetic-energy correction one. What is the total mechanical head on the stated datum and pressure reference?",
          "options": [
            {
              "key": "a",
              "text": "1 m"
            },
            {
              "key": "b",
              "text": "9 m"
            },
            {
              "key": "c",
              "text": "7 m"
            },
            {
              "key": "d",
              "text": "5 m"
            }
          ],
          "answer": "b",
          "explanation": "Total head is the sum of elevation, pressure and velocity heads: H = 2 + 3 + 4 = 9 m. Piezometric head would include only elevation plus pressure, giving 5 m.<p>Capsule 4th ed., p. 14; topic 3 point 124.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 124",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n124"
            ]
          },
          "topic": "ACiE0303",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00136",
          "src": "CAP4-03-00136",
          "text": "In a horizontal diffuser without a pump or turbine, a steady incompressible stream slows down. Take the kinetic-energy correction factor as one at both sections. The head loss is positive but smaller than the decrease in velocity head. What pressure change occurs along the flow?",
          "options": [
            {
              "key": "a",
              "text": "Static and total heads both increase without added work"
            },
            {
              "key": "b",
              "text": "Static pressure decreases while total head increases"
            },
            {
              "key": "c",
              "text": "Static pressure increases while total head decreases"
            },
            {
              "key": "d",
              "text": "Static pressure cannot increase anywhere along a flow"
            }
          ],
          "answer": "c",
          "explanation": "The energy equation gives p2/(rho g)-p1/(rho g) = (V1^2-V2^2)/(2g)-hL. A sufficiently large reduction in velocity head therefore recovers static pressure, even while losses reduce total head. Flow need not always move from higher to lower static pressure.<p>Capsule 4th ed., p. 14; topic 3 point 132.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 132",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n132"
            ]
          },
          "topic": "ACiE0303",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00141",
          "src": "CAP4-03-00141",
          "text": "For a material fluid mass m accelerating with vector a, how do Newton's second law and the d'Alembert inertial-force convention differ?",
          "options": [
            {
              "key": "a",
              "text": "Real net force is -ma; introduced inertial force is ma"
            },
            {
              "key": "b",
              "text": "Real net force is zero; introduced inertial force is -ma"
            },
            {
              "key": "c",
              "text": "Real net force is ma; introduced inertial force is -ma"
            },
            {
              "key": "d",
              "text": "Real net force is ma; introduced inertial force is ma"
            }
          ],
          "answer": "c",
          "explanation": "Newton's law states that the resultant real external force equals ma. Moving that term to a formal equilibrium balance introduces an inertial or pseudo-force -ma; it is not an additional real cause of acceleration. Fluid momentum equations use the same distinction.<p>Source note: p14 n137 loosely labels the real accelerating resultant &#39;inertial force&#39;; both conventions distinguished rather than conflated.</p><p>Capsule 4th ed., p. 14; topic 3 point 137.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 137",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n137"
            ]
          },
          "topic": "ACiE0303",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00143",
          "src": "CAP4-03-00143",
          "text": "At a point in three-dimensional incompressible flow, du/dx = 2 s<sup>-1</sup> and dv/dy = -5 s<sup>-1</sup>. What must dw/dz equal?",
          "options": [
            {
              "key": "a",
              "text": "3 s<sup>-1</sup>"
            },
            {
              "key": "b",
              "text": "-3 s<sup>-1</sup>"
            },
            {
              "key": "c",
              "text": "7 s<sup>-1</sup>"
            },
            {
              "key": "d",
              "text": "-7 s<sup>-1</sup>"
            }
          ],
          "answer": "a",
          "explanation": "Incompressibility requires du/dx + dv/dy + dw/dz = 0. Therefore 2 - 5 + dw/dz = 0, giving dw/dz = 3 s^-1. This constrains the velocity gradient, not the value of w itself.<p>Capsule 4th ed., p. 14; topic 3 point 140.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 140",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n140"
            ]
          },
          "topic": "ACiE0303",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00147",
          "src": "CAP4-03-00147",
          "text": "Water flows steadily down a constant-area vertical pipe without friction or machines. A lower section is 3 m below an upper section. For rho = 1000 kg/m<sup>3</sup> and g = 9.81 m/s<sup>2</sup>, what is p_lower minus p_upper?",
          "options": [
            {
              "key": "a",
              "text": "+29.43 kPa"
            },
            {
              "key": "b",
              "text": "0 kPa"
            },
            {
              "key": "c",
              "text": "-29.43 kPa"
            },
            {
              "key": "d",
              "text": "+3.00 kPa"
            }
          ],
          "answer": "a",
          "explanation": "The velocities are equal, so their Bernoulli velocity heads cancel. The 3 m drop in elevation becomes a 3 m increase in pressure head: delta p = rho g times 3 = 29430 Pa = +29.43 kPa. Pressure therefore decreases with increasing height.<p>Capsule 4th ed., p. 15; topic 3 point 144.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 3 point 144",
            "pages": [
              15
            ],
            "points": [
              "capsule-t03-p015-n144"
            ]
          },
          "topic": "ACiE0303",
          "kind": "calculation"
        }
      ]
    },
    {
      "id": "ACiE0304",
      "name": "Pipe flow",
      "subject": "Basic Water Resources Engineering",
      "questions": [
        {
          "id": "CAP4-03-00037",
          "src": "CAP4-03-00037",
          "text": "At a pipe section the kinetic-energy correction factor is taken as one. What does the vertical separation between the energy grade line and hydraulic grade line represent?",
          "options": [
            {
              "key": "a",
              "text": "Pressure head"
            },
            {
              "key": "b",
              "text": "Elevation head"
            },
            {
              "key": "c",
              "text": "Accumulated friction head"
            },
            {
              "key": "d",
              "text": "Velocity head"
            }
          ],
          "answer": "d",
          "explanation": "HGL = z + p/(rho g), while EGL adds V^2/(2g) when alpha = 1. Their separation is therefore velocity head at that section, not the cumulative head loss along the pipe.<p>Capsule 4th ed., p. 11; topic 3 point 34.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 34",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n34"
            ]
          },
          "topic": "ACiE0304",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00043",
          "src": "CAP4-03-00043",
          "text": "For steady, fully developed laminar flow of an incompressible Newtonian fluid in a straight circular pipe with no slip, which pair of friction factors uses Reynolds number based on mean speed and diameter?",
          "options": [
            {
              "key": "a",
              "text": "Darcy: 64/Re; Fanning: 64/Re"
            },
            {
              "key": "b",
              "text": "Darcy: 16/Re; Fanning: 16/Re"
            },
            {
              "key": "c",
              "text": "Darcy: 16/Re; Fanning: 64/Re"
            },
            {
              "key": "d",
              "text": "Darcy: 64/Re; Fanning: 16/Re"
            }
          ],
          "answer": "d",
          "explanation": "The Darcy factor is four times the Fanning factor. Hagen-Poiseuille flow gives f_D = 64/Re and f_F = 16/Re. The source's recovered 16/Re is defensible only with the Fanning convention or a matching four-factor loss formula.<p>Source note: p11 n40 and p15 n145 repeat 16/Re without naming the factor; both references retained and convention made explicit.</p><p>Capsule 4th ed., pp. 11, 15; topic 3 point 40; topic 3 point 145.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 11, 15; topic 3 point 40; topic 3 point 145",
            "pages": [
              11,
              15
            ],
            "points": [
              "capsule-t03-p011-n40",
              "capsule-t03-p015-n145"
            ]
          },
          "topic": "ACiE0304",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00045",
          "src": "CAP4-03-00045",
          "text": "Three unequal-diameter pipes are connected in series with steady incompressible flow and no withdrawals. Which relation must hold?",
          "options": [
            {
              "key": "a",
              "text": "Equal friction factor; velocities add"
            },
            {
              "key": "b",
              "text": "Equal discharge; individual head losses add"
            },
            {
              "key": "c",
              "text": "Equal head loss; branch discharges add"
            },
            {
              "key": "d",
              "text": "Equal velocity; individual head losses add"
            }
          ],
          "answer": "b",
          "explanation": "Mass conservation and constant density require the same volume discharge through every series segment. Speeds differ with area and each segment contributes its own head loss, so equal discharge does not imply equal velocity or equal loss.<p>Capsule 4th ed., p. 11; topic 3 point 42.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 42",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n42"
            ]
          },
          "topic": "ACiE0304",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00046",
          "src": "CAP4-03-00046",
          "text": "Two passive pipe branches of different materials connect the same upstream and downstream junctions. Under steady flow, which network condition applies?",
          "options": [
            {
              "key": "a",
              "text": "Equal total head loss along each branch"
            },
            {
              "key": "b",
              "text": "Equal velocity in each branch"
            },
            {
              "key": "c",
              "text": "Equal Darcy friction factor in each branch"
            },
            {
              "key": "d",
              "text": "Equal discharge in each branch"
            }
          ],
          "answer": "a",
          "explanation": "Each branch spans the same junction-head difference, so its total head loss must match that difference. Materials, diameters and lengths affect the branch discharges, not the shared endpoint-head condition. Total discharge is the sum of branch flows.<p>Source note: p12 n43: equal material is unnecessary for the parallel-head condition.</p><p>Capsule 4th ed., p. 12; topic 3 point 43.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 43",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n43"
            ]
          },
          "topic": "ACiE0304",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00051",
          "src": "CAP4-03-00051",
          "text": "In Prandtl's idealized mixing-length description near a smooth impermeable pipe wall, what happens to the mixing length as wall distance tends to zero?",
          "options": [
            {
              "key": "a",
              "text": "It tends to the pipe radius"
            },
            {
              "key": "b",
              "text": "It tends to zero"
            },
            {
              "key": "c",
              "text": "It tends to the pipe diameter"
            },
            {
              "key": "d",
              "text": "It grows without bound"
            }
          ],
          "answer": "b",
          "explanation": "The wall restricts wall-normal turbulent exchange. In the near-wall mixing-length model, the available mixing distance vanishes at the wall; it is not a constant equal to a pipe dimension throughout the flow.<p>Capsule 4th ed., p. 12; topic 3 point 48.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 48",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n48"
            ]
          },
          "topic": "ACiE0304",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00053",
          "src": "CAP4-03-00053",
          "text": "After substituting Q for mean velocity in Darcy-Weisbach, which expression gives head loss in a full circular pipe using Darcy factor fD?",
          "options": [
            {
              "key": "a",
              "text": "2 fD L Q<sup>2</sup>/(g pi<sup>2</sup>D<sup>5</sup>)"
            },
            {
              "key": "b",
              "text": "8 fD L Q/(g pi<sup>2</sup>D<sup>5</sup>)"
            },
            {
              "key": "c",
              "text": "8 fD L Q<sup>2</sup>/(g pi<sup>2</sup>D<sup>5</sup>)"
            },
            {
              "key": "d",
              "text": "8 fD L Q<sup>2</sup>/(g pi<sup>2</sup>D<sup>4</sup>)"
            }
          ],
          "answer": "c",
          "explanation": "Insert V = 4Q/(pi D^2) into hf = fD(L/D)V^2/(2g). Squaring produces 16Q^2/(pi^2 D^4), hence the factor 8 and D^5 denominator. In SI with g = 9.81, g pi^2/8 is about 12.1.<p>Source note: p12 n50: recovered denominator 12.1D^5 is an SI approximation using the Darcy convention, not a dimensionless universal coefficient.</p><p>Capsule 4th ed., p. 12; topic 3 point 50.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 50",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n50"
            ]
          },
          "topic": "ACiE0304",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00054",
          "src": "CAP4-03-00054",
          "text": "Mean speeds just before and after a sudden pipe expansion are 6 and 2 m/s. Under the Borda-Carnot assumptions and g = 9.81 m/s<sup>2</sup>, what is the expansion head loss?",
          "options": [
            {
              "key": "a",
              "text": "1.631 m"
            },
            {
              "key": "b",
              "text": "0.204 m"
            },
            {
              "key": "c",
              "text": "0.815 m"
            },
            {
              "key": "d",
              "text": "1.835 m"
            }
          ],
          "answer": "c",
          "explanation": "The loss is (V1 - V2)^2/(2g) = (6 - 2)^2/19.62 = 0.815 m. It is not the difference of the two velocity heads, because some kinetic head is recovered as pressure through the expansion.<p>Source note: p12 n51: broken fraction reconstructed independently as (V1-V2)^2/(2g).</p><p>Capsule 4th ed., p. 12; topic 3 point 51.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 51",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n51"
            ]
          },
          "topic": "ACiE0304",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00057",
          "src": "CAP4-03-00057",
          "text": "A Moody-chart input is written as epsilon/D. What must epsilon represent for this ratio to be dimensionless?",
          "options": [
            {
              "key": "a",
              "text": "Pipe-wall thickness divided by diameter"
            },
            {
              "key": "b",
              "text": "Fluid kinematic viscosity"
            },
            {
              "key": "c",
              "text": "Equivalent absolute wall-roughness height"
            },
            {
              "key": "d",
              "text": "Dimensionless Darcy friction factor"
            }
          ],
          "answer": "c",
          "explanation": "Relative roughness is an absolute roughness length divided by the internal diameter. Both numerator and denominator must have length units; wall thickness, friction factor and viscosity are different quantities.<p>Capsule 4th ed., p. 12; topic 3 point 54.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 54",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n54"
            ]
          },
          "topic": "ACiE0304",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00059",
          "src": "CAP4-03-00059",
          "text": "Compare two steady, fully developed laminar flows of the same incompressible Newtonian fluid through a fixed straight circular pipe with no slip. Mean speed doubles while fluid properties remain unchanged. By what factor does friction head loss change?",
          "options": [
            {
              "key": "a",
              "text": "2"
            },
            {
              "key": "b",
              "text": "0.5"
            },
            {
              "key": "c",
              "text": "4"
            },
            {
              "key": "d",
              "text": "1"
            }
          ],
          "answer": "a",
          "explanation": "Darcy-Weisbach contains V^2, but laminar fD = 64/Re varies inversely with V. The combined dependence is therefore linear in V, so doubling speed doubles head loss rather than quadrupling it.<p>Capsule 4th ed., p. 12; topic 3 point 56.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 56",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n56"
            ]
          },
          "topic": "ACiE0304",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00060",
          "src": "CAP4-03-00060",
          "text": "In a fully rough turbulent flow through a fixed pipe, the Darcy factor stays effectively constant as speed doubles. By what factor does friction head loss increase?",
          "options": [
            {
              "key": "a",
              "text": "16"
            },
            {
              "key": "b",
              "text": "2"
            },
            {
              "key": "c",
              "text": "8"
            },
            {
              "key": "d",
              "text": "4"
            }
          ],
          "answer": "d",
          "explanation": "With fD, L and D fixed, Darcy-Weisbach gives hf proportional to V^2. Doubling V therefore gives four times the head loss. The same exact exponent cannot be assumed for every turbulent regime where the friction factor still varies with Reynolds number.<p>Source note: p12 n56 split into laminar and turbulent cases; the square law requires an effectively constant friction factor.</p><p>Capsule 4th ed., p. 12; topic 3 point 56.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 56",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n56"
            ]
          },
          "topic": "ACiE0304",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00062",
          "src": "CAP4-03-00062",
          "text": "A 100 m long, 0.20 m diameter full pipe carries water at 2 m/s. Using Darcy factor 0.020 and g = 9.81 m/s<sup>2</sup>, what is its friction head loss, excluding fittings?",
          "options": [
            {
              "key": "a",
              "text": "8.15 m"
            },
            {
              "key": "b",
              "text": "2.04 m"
            },
            {
              "key": "c",
              "text": "0.51 m"
            },
            {
              "key": "d",
              "text": "0.204 m"
            }
          ],
          "answer": "b",
          "explanation": "Darcy-Weisbach gives hf = 0.020(100/0.20)(2^2/19.62) = 2.0387 m, approximately 2.04 m. A Fanning factor must not be substituted into this form without its required factor of four.<p>Capsule 4th ed., p. 12; topic 3 point 58.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 58",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n58"
            ]
          },
          "topic": "ACiE0304",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00102",
          "src": "CAP4-03-00102",
          "text": "At a siphon summit the HGL is 2 m below the pipe centreline. What does this position indicate, without by itself proving cavitation?",
          "options": [
            {
              "key": "a",
              "text": "The energy grade line must also be below the centreline"
            },
            {
              "key": "b",
              "text": "Gauge pressure is negative"
            },
            {
              "key": "c",
              "text": "Absolute pressure is necessarily negative"
            },
            {
              "key": "d",
              "text": "Flow must be zero"
            }
          ],
          "answer": "b",
          "explanation": "HGL height relative to the centreline equals p_gauge/(rho g). A lower HGL therefore indicates suction or negative gauge pressure. Absolute pressure can remain positive and above vapour pressure, so neither impossible flow nor cavitation follows automatically.<p>Source note: p13 n101 false &#39;always above&#39; statement corrected.</p><p>Capsule 4th ed., p. 13; topic 3 point 101.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 101",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n101"
            ]
          },
          "topic": "ACiE0304",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00108",
          "src": "CAP4-03-00108",
          "text": "A particular 90-degree elbow has a specified loss coefficient K = 0.90 based on pipe speed 3 m/s. With g = 9.81 m/s<sup>2</sup>, what local head loss should be included?",
          "options": [
            {
              "key": "a",
              "text": "0.459 m"
            },
            {
              "key": "b",
              "text": "0.826 m"
            },
            {
              "key": "c",
              "text": "0.413 m"
            },
            {
              "key": "d",
              "text": "0.138 m"
            }
          ],
          "answer": "c",
          "explanation": "Use hL = K V^2/(2g) = 0.90 times 9/19.62 = 0.41284 m. The velocity must match the coefficient's reference section. Real elbow K depends on geometry and conditions; 0.90 is supplied here rather than asserted for every 90-degree bend.<p>Source note: p13 n105: K = 0.9 is an assumed fitting value, not universal.</p><p>Capsule 4th ed., p. 13; topic 3 point 105.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 105",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n105"
            ]
          },
          "topic": "ACiE0304",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00115",
          "src": "CAP4-03-00115",
          "text": "Water leaves a pipe at 4 m/s into a much larger reservoir where its mean velocity becomes negligible. With unit kinetic-energy correction and g = 9.81 m/s<sup>2</sup>, what exit head loss is used?",
          "options": [
            {
              "key": "a",
              "text": "0 m"
            },
            {
              "key": "b",
              "text": "1.631 m"
            },
            {
              "key": "c",
              "text": "0.815 m"
            },
            {
              "key": "d",
              "text": "0.408 m"
            }
          ],
          "answer": "c",
          "explanation": "For discharge into a large reservoir, the pipe velocity head is dissipated, giving K_exit = 1 and h_exit = V^2/(2g) = 16/19.62 = 0.815 m. A free jet still carrying kinetic energy at the outlet plane is a different boundary condition.<p>Source note: p14 n113 qualified as a pipe-to-large-reservoir exit, not every free discharge.</p><p>Capsule 4th ed., p. 14; topic 3 point 113.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 113",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n113"
            ]
          },
          "topic": "ACiE0304",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00116",
          "src": "CAP4-03-00116",
          "text": "A full gravity conduit is evaluated with Manning's equation at fixed diameter and discharge. If n rises from 0.010 to 0.020, how must its energy gradient change to preserve the flow?",
          "options": [
            {
              "key": "a",
              "text": "Become half as large"
            },
            {
              "key": "b",
              "text": "Become twice as large"
            },
            {
              "key": "c",
              "text": "Become one-quarter as large"
            },
            {
              "key": "d",
              "text": "Become four times as large"
            }
          ],
          "answer": "d",
          "explanation": "At fixed diameter, both area and hydraulic radius remain fixed, and the given discharge fixes velocity. Since sqrt(S)/n must stay constant, S2/S1 = (0.020/0.010)^2 = 4. This is a Manning-model result, not a universal linear roughness rule.<p>Capsule 4th ed., p. 14; topic 3 point 114.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 114",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n114"
            ]
          },
          "topic": "ACiE0304",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00118",
          "src": "CAP4-03-00118",
          "text": "For a sluiceway intake where minimizing entrance separation and associated local head loss is the objective, which entrance shape is usually preferred?",
          "options": [
            {
              "key": "a",
              "text": "A re-entrant square-edged pipe"
            },
            {
              "key": "b",
              "text": "A smoothly rounded bell mouth"
            },
            {
              "key": "c",
              "text": "A sharp-edged flush opening"
            },
            {
              "key": "d",
              "text": "An abrupt stepped contraction"
            }
          ],
          "answer": "b",
          "explanation": "A smooth bell-mouth transition guides converging streamlines with less separation and contraction loss. That hydraulic advantage does not alone settle structural, debris, cavitation or operational requirements, so 'superior' must be tied to the stated objective.<p>Source note: p14 n116 qualified as entrance-loss performance rather than universal design superiority.</p><p>Capsule 4th ed., p. 14; topic 3 point 116.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 116",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n116"
            ]
          },
          "topic": "ACiE0304",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00139",
          "src": "CAP4-03-00139",
          "text": "An incompressible Newtonian fluid has steady, fully developed laminar flow through a straight circular pipe with no slip. If centreline speed is 4 m/s, what is the cross-sectional mean speed?",
          "options": [
            {
              "key": "a",
              "text": "1 m/s"
            },
            {
              "key": "b",
              "text": "8 m/s"
            },
            {
              "key": "c",
              "text": "4 m/s"
            },
            {
              "key": "d",
              "text": "2 m/s"
            }
          ],
          "answer": "d",
          "explanation": "The parabolic laminar profile integrates to V_mean = V_max/2, so 4/2 = 2 m/s. The ratio of two does not hold for every viscous flow; turbulent, developing and non-Newtonian profiles have different ratios.<p>Source note: p14 n135: essential fully developed Newtonian laminar circular-pipe conditions supplied.</p><p>Capsule 4th ed., p. 14; topic 3 point 135.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 135",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n135"
            ]
          },
          "topic": "ACiE0304",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00140",
          "src": "CAP4-03-00140",
          "text": "On the fully rough turbulent limiting branch of the Moody chart, which quantity controls the Darcy friction factor at fixed pipe geometry?",
          "options": [
            {
              "key": "a",
              "text": "Relative roughness, essentially independent of Reynolds number"
            },
            {
              "key": "b",
              "text": "Reynolds number and relative roughness both remain influential"
            },
            {
              "key": "c",
              "text": "Pipe diameter alone, independent of roughness height"
            },
            {
              "key": "d",
              "text": "Reynolds number alone, independent of relative roughness"
            }
          ],
          "answer": "a",
          "explanation": "In the fully rough limit, the viscous Reynolds-number term becomes negligible in the turbulent resistance relation. The friction factor then depends essentially on epsilon/D. Both Reynolds number and roughness matter in the broader transitional turbulent regime, not this limiting regime.<p>Source note: p14 n136 false dependence on both variables corrected using the fully rough limit.</p><p>Capsule 4th ed., p. 14; topic 3 point 136.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 136",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n136"
            ]
          },
          "topic": "ACiE0304",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00142",
          "src": "CAP4-03-00142",
          "text": "A full circular pipe must carry 35 m<sup>3</sup>/s at mean speed 1.4 m/s. What internal diameter follows from continuity?",
          "options": [
            {
              "key": "a",
              "text": "7.96 m"
            },
            {
              "key": "b",
              "text": "2.82 m"
            },
            {
              "key": "c",
              "text": "25.0 m"
            },
            {
              "key": "d",
              "text": "5.64 m"
            }
          ],
          "answer": "d",
          "explanation": "The required area is Q/V = 35/1.4 = 25 m^2. Since A = pi D^2/4, D = sqrt(4 times 25/pi) = 5.64190 m. The radius is half this value; area must not be reported as diameter.<p>Capsule 4th ed., p. 14; topic 3 point 138.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 138",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n138"
            ]
          },
          "topic": "ACiE0304",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00144",
          "src": "CAP4-03-00144",
          "text": "A butterfly valve has a stated loss coefficient K = 0.40 at its specified opening, based on pipe speed 5 m/s. For g = 9.81 m/s<sup>2</sup>, what head loss does it cause?",
          "options": [
            {
              "key": "a",
              "text": "5.10 m"
            },
            {
              "key": "b",
              "text": "0.510 m"
            },
            {
              "key": "c",
              "text": "1.274 m"
            },
            {
              "key": "d",
              "text": "0.102 m"
            }
          ],
          "answer": "b",
          "explanation": "hL = K V^2/(2g) = 0.40 times 25/19.62 = 0.50968 m. This is energy loss per unit weight, expressed as head, not a loss of discharge. In a steady unbranched incompressible line, the same discharge passes before and after the valve.<p>Source note: p15 n142 calls KV^2/(2g) &#39;discharge loss&#39;; corrected to head loss. K depends on valve opening and velocity reference.</p><p>Capsule 4th ed., p. 15; topic 3 point 142.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 3 point 142",
            "pages": [
              15
            ],
            "points": [
              "capsule-t03-p015-n142"
            ]
          },
          "topic": "ACiE0304",
          "kind": "calculation"
        },
        {
          "id": "CAP4-06-00094",
          "src": "CAP4-06-00094",
          "text": "Immediately downstream of a sharp pipe contraction, the jet narrows to a vena contracta and then fills the smaller pipe. Where does much of the associated local energy loss arise?",
          "options": [
            {
              "key": "a",
              "text": "Wall friction along the uniform downstream pipe counted as the contraction loss"
            },
            {
              "key": "b",
              "text": "Reversible pressure-to-velocity conversion during acceleration alone"
            },
            {
              "key": "c",
              "text": "Separation and turbulent mixing during re-expansion from the vena contracta"
            },
            {
              "key": "d",
              "text": "A hydrostatic elevation change at a horizontal contraction"
            }
          ],
          "answer": "c",
          "explanation": "The sharp edge produces separation, and the contracted jet subsequently expands and mixes to occupy the smaller pipe. That irreversible mixing accounts for much of the loss. Pressure reduction due to acceleration is not itself identical to loss of total mechanical head; contraction geometry controls the coefficient.<p>Capsule 4th ed., p. 25; topic 6 point 95.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 25; topic 6 point 95",
            "pages": [
              25
            ],
            "points": [
              "capsule-t06-p025-n95"
            ]
          },
          "topic": "ACiE0304",
          "kind": "application"
        }
      ]
    },
    {
      "id": "ACiE0305",
      "name": "Open channel flow",
      "subject": "Basic Water Resources Engineering",
      "questions": [
        {
          "id": "CAP4-03-00022",
          "src": "CAP4-03-00022",
          "text": "A particular bank-stability calculation specifies an allowable bank shear equal to 0.75 times the horizontal-bed threshold. If the bed threshold is 4 Pa, which bank limit follows from that specified reduction?",
          "options": [
            {
              "key": "a",
              "text": "5.33 Pa"
            },
            {
              "key": "b",
              "text": "4.75 Pa"
            },
            {
              "key": "c",
              "text": "3 Pa"
            },
            {
              "key": "d",
              "text": "1 Pa"
            }
          ],
          "answer": "c",
          "explanation": "The stipulated limit is 0.75 times 4 = 3 Pa. Bank inclination and sediment friction affect the reduction in an actual tractive-force design; 0.75 is not a universal ratio of incipient-motion stresses for all banks.<p>Source note: p11 n19: source gives no bank slope, angle of repose or definition distinguishing applied average shear from critical shear. Parent review of the original 0.75 claim required; this numerical item treats the factor as an explicit assumption.</p><p>Capsule 4th ed., p. 11; topic 3 point 19.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 19",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n19"
            ]
          },
          "topic": "ACiE0305",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00044",
          "src": "CAP4-03-00044",
          "text": "In the SI Manning equation V = R<sup>2/3</sup>S<sup>1/2</sup>/n, slope S is dimensionless. What dimensions must Manning's n have?",
          "options": [
            {
              "key": "a",
              "text": "L<sup>2</sup>T<sup>-1</sup>"
            },
            {
              "key": "b",
              "text": "TL<sup>-2/3</sup>"
            },
            {
              "key": "c",
              "text": "L<sup>1/2</sup>T<sup>-1</sup>"
            },
            {
              "key": "d",
              "text": "TL<sup>-1/3</sup>"
            }
          ],
          "answer": "d",
          "explanation": "Rearranging gives n = R^(2/3) sqrt(S)/V. Its dimensions are L^(2/3)/(L/T) = T L^(-1/3), commonly written s/m^(1/3). It is not the dimensionless Darcy friction factor.<p>Capsule 4th ed., p. 11; topic 3 point 41.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 41",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n41"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00055",
          "src": "CAP4-03-00055",
          "text": "For an illustrative Strickler estimate, use n = d<sup>1/6</sup>/21.1 with d in metres. If the representative grain size is 6 cm, what is n to four decimal places in this SI convention?",
          "options": [
            {
              "key": "a",
              "text": "0.0290"
            },
            {
              "key": "b",
              "text": "0.0297"
            },
            {
              "key": "c",
              "text": "0.0028"
            },
            {
              "key": "d",
              "text": "0.0639"
            }
          ],
          "answer": "b",
          "explanation": "Convert 6 cm to 0.06 m first. Then n = 0.06^(1/6)/21.1 = 0.0296535, which rounds to 0.0297. The coefficient is empirical and grain-size definition and bed condition must match the calibration.<p>Source note: p12 n52: recomputation corrects the quoted 0.029; equation treated as stipulated empirical relation, not a universal roughness law.</p><p>Capsule 4th ed., p. 12; topic 3 point 52.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 52",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n52"
            ]
          },
          "topic": "ACiE0305",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00063",
          "src": "CAP4-03-00063",
          "text": "A long mild channel reach changes to a long steep reach, with free downstream discharge and no tailwater submergence. Near a critical control at the slope break, which usual drawdown-profile pair develops?",
          "options": [
            {
              "key": "a",
              "text": "M3 upstream and S3 downstream"
            },
            {
              "key": "b",
              "text": "S2 upstream and M2 downstream"
            },
            {
              "key": "c",
              "text": "M2 upstream and S2 downstream"
            },
            {
              "key": "d",
              "text": "M1 upstream and S1 downstream"
            }
          ],
          "answer": "c",
          "explanation": "The mild reach approaches critical depth from below its larger normal depth, forming M2. The steep reach then drops from critical toward its smaller normal depth, forming S2. A submerged control or imposed tailwater can change this pattern.<p>Source note: p12 n59 qualified by boundary conditions; a slope change alone does not uniquely fix profiles.</p><p>Capsule 4th ed., p. 12; topic 3 point 59.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 59",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n59"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00064",
          "src": "CAP4-03-00064",
          "text": "For a rectangular channel of width B and depth y, which hydraulic-radius approximation becomes valid when B is much larger than y?",
          "options": [
            {
              "key": "a",
              "text": "R approximately equals y"
            },
            {
              "key": "b",
              "text": "R approximately equals B"
            },
            {
              "key": "c",
              "text": "R approximately equals B/2"
            },
            {
              "key": "d",
              "text": "R approximately equals y/2"
            }
          ],
          "answer": "a",
          "explanation": "R = A/P = By/(B + 2y). When B is much greater than y, the sidewall contribution 2y is negligible, giving R approximately y. The relation R = y/2 instead applies to the hydraulically economical rectangle B = 2y.<p>Capsule 4th ed., p. 12; topic 3 point 60.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 60",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n60"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00065",
          "src": "CAP4-03-00065",
          "text": "For a general open-channel cross-section with flow area A, top width T and wetted perimeter P, which length belongs in Fr = V/sqrt(gD)?",
          "options": [
            {
              "key": "a",
              "text": "D = A/T"
            },
            {
              "key": "b",
              "text": "D = 4A/P"
            },
            {
              "key": "c",
              "text": "D = T/2"
            },
            {
              "key": "d",
              "text": "D = A/P"
            }
          ],
          "answer": "a",
          "explanation": "The long gravity-wave speed in the hydrostatic shallow-water approximation is sqrt(gA/T), so the Froude length is hydraulic depth A/T. Hydraulic radius A/P and hydraulic diameter 4A/P serve different purposes.<p>Capsule 4th ed., p. 12; topic 3 point 61; topic 3 point 72.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 61; topic 3 point 72",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n61",
              "capsule-t03-p012-n72"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00066",
          "src": "CAP4-03-00066",
          "text": "A symmetric triangular channel is optimized to minimize wetted perimeter for a fixed flow area. At depth y, what is its hydraulic radius?",
          "options": [
            {
              "key": "a",
              "text": "y"
            },
            {
              "key": "b",
              "text": "y/sqrt(2)"
            },
            {
              "key": "c",
              "text": "y/(2 sqrt(2))"
            },
            {
              "key": "d",
              "text": "y/2"
            }
          ],
          "answer": "c",
          "explanation": "The optimal triangular section has side slope 1H:1V. Its area is y^2 and wetted perimeter is 2y sqrt(2), giving R = y/[2 sqrt(2)]. The optimum-trapezoid relation R = y/2 cannot simply be transferred to this triangle.<p>Source note: p12 n62 missing radical restored by independent area/perimeter derivation.</p><p>Capsule 4th ed., p. 12; topic 3 point 62.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 62",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n62"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00067",
          "src": "CAP4-03-00067",
          "text": "A broad-crested weir has a smooth rounded entrance and a crest long enough for approximately parallel flow but short enough that crest friction is small. Why can its entrance-to-control head loss be small?",
          "options": [
            {
              "key": "a",
              "text": "The crest recovers energy dissipated in a downstream jump"
            },
            {
              "key": "b",
              "text": "Crest width fixes loss independently of surface roughness"
            },
            {
              "key": "c",
              "text": "Critical depth forces upstream and downstream heads to match"
            },
            {
              "key": "d",
              "text": "Smooth transitions limit separation and dissipation"
            }
          ],
          "answer": "d",
          "explanation": "A well-shaped approach limits separation, allowing a low-loss energy approximation to the crest control. Friction, entrance geometry, submergence and downstream dissipation still matter. Broad-crested weirs do not universally have the smallest total loss of every weir type.<p>Source note: p12 n63 and p13 n78 share the broad-crest loss claim. Corrected to a conditional low-loss principle; no unsupported universal ranking retained.</p><p>Capsule 4th ed., pp. 12, 13; topic 3 point 63; topic 3 point 78.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 12, 13; topic 3 point 63; topic 3 point 78",
            "pages": [
              12,
              13
            ],
            "points": [
              "capsule-t03-p012-n63",
              "capsule-t03-p013-n78"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00068",
          "src": "CAP4-03-00068",
          "text": "For a fixed specific energy in a rectangular channel with kinetic-energy correction factor one, at which flow condition is the possible discharge per unit width greatest?",
          "options": [
            {
              "key": "a",
              "text": "Uniform flow at every possible bed slope"
            },
            {
              "key": "b",
              "text": "Deep subcritical flow approaching zero speed"
            },
            {
              "key": "c",
              "text": "Critical flow"
            },
            {
              "key": "d",
              "text": "Very shallow supercritical flow approaching zero depth"
            }
          ],
          "answer": "c",
          "explanation": "From q^2 = 2g y^2(E-y), maximizing with respect to y at fixed E gives y = 2E/3. At this depth q^2/(gy^3) = 1, which is the critical-flow condition, independent of a normal-depth specification.<p>Capsule 4th ed., p. 12; topic 3 point 64.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 64",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n64"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00069",
          "src": "CAP4-03-00069",
          "text": "Discharge is held fixed in a rectangular open channel with kinetic-energy correction factor one while possible flow depths are compared. At critical depth, what is extremized?",
          "options": [
            {
              "key": "a",
              "text": "Specific energy is minimized"
            },
            {
              "key": "b",
              "text": "Velocity is minimized"
            },
            {
              "key": "c",
              "text": "Flow area is maximized"
            },
            {
              "key": "d",
              "text": "Specific energy is maximized"
            }
          ],
          "answer": "a",
          "explanation": "E = y + q^2/(2gy^2) has a minimum where dE/dy = 1 - q^2/(gy^3) = 0. That is Fr = 1. Fixing discharge is essential; maximum discharge at fixed energy is the corresponding but different optimization.<p>Capsule 4th ed., p. 12; topic 3 point 65.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 65",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n65"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00070",
          "src": "CAP4-03-00070",
          "text": "A hydraulic jump forms in a horizontal rectangular channel with upstream depth 1.00 m and upstream Froude number 3.00. Neglect bed drag over the jump and use unit momentum correction. What is the conjugate downstream depth?",
          "options": [
            {
              "key": "a",
              "text": "36.000 m"
            },
            {
              "key": "b",
              "text": "3.772 m"
            },
            {
              "key": "c",
              "text": "4.272 m"
            },
            {
              "key": "d",
              "text": "8.000 m"
            }
          ],
          "answer": "b",
          "explanation": "Momentum balance gives y2/y1 = [sqrt(1 + 8Fr1^2) - 1]/2. With Fr1 = 3, the ratio is (sqrt(73)-1)/2 = 3.772. Multiplication by y1 = 1.00 m gives y2 = 3.772 m; energy is not conserved across the jump.<p>Source note: p12 n67 radical restored independently; formula is for a rectangular hydraulic jump, not arbitrary channel shapes.</p><p>Capsule 4th ed., p. 12; topic 3 point 67.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 67",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n67"
            ]
          },
          "topic": "ACiE0305",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00071",
          "src": "CAP4-03-00071",
          "text": "Using the conventional textbook classification, which approach-Froude-number band is associated with a well-developed steady hydraulic jump?",
          "options": [
            {
              "key": "a",
              "text": "Approximately 1 to 1.7"
            },
            {
              "key": "b",
              "text": "Approximately 4.5 to 9"
            },
            {
              "key": "c",
              "text": "Approximately 2.5 to 4.5"
            },
            {
              "key": "d",
              "text": "Approximately 1.7 to 2.5"
            }
          ],
          "answer": "b",
          "explanation": "The conventional bands are undular near 1-1.7, weak near 1.7-2.5, oscillating near 2.5-4.5 and steady near 4.5-9. These are empirical classifications, not sharp universal physical boundaries or proof that the turbulent roller is instantaneously steady.<p>Capsule 4th ed., p. 12; topic 3 point 68.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 68",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n68"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00072",
          "src": "CAP4-03-00072",
          "text": "A uniform-flow channel must retain the same area, hydraulic radius and discharge after Manning's n doubles. If its original energy slope was 0.001, what slope does Manning's equation require?",
          "options": [
            {
              "key": "a",
              "text": "0.004"
            },
            {
              "key": "b",
              "text": "0.00025"
            },
            {
              "key": "c",
              "text": "0.002"
            },
            {
              "key": "d",
              "text": "0.0005"
            }
          ],
          "answer": "a",
          "explanation": "With V and R fixed, V = R^(2/3)sqrt(S)/n requires sqrt(S) proportional to n. Therefore S must increase by 2^2 = 4, giving 0.004. The result requires the stated unchanged geometry and flow.<p>Capsule 4th ed., p. 12; topic 3 point 69.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 69",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n69"
            ]
          },
          "topic": "ACiE0305",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00073",
          "src": "CAP4-03-00073",
          "text": "An open-channel flow has Fr greater than one. How does its mean speed compare with the small surface-gravity-wave speed relative to the water?",
          "options": [
            {
              "key": "a",
              "text": "Mean speed is smaller; one wave can travel upstream"
            },
            {
              "key": "b",
              "text": "Mean speed is larger; both wave directions are carried downstream"
            },
            {
              "key": "c",
              "text": "Mean speed is unrelated to wave speed; Fr measures viscosity"
            },
            {
              "key": "d",
              "text": "Mean speed equals wave speed; the flow is critical"
            }
          ],
          "answer": "b",
          "explanation": "Fr = V/sqrt(gD). For Fr greater than one, V exceeds the relative wave speed, so even a wave directed upstream relative to the water is swept downstream relative to the bed. This defines supercritical flow in the shallow-water model.<p>Capsule 4th ed., p. 12; topic 3 point 70.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 70",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n70"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00074",
          "src": "CAP4-03-00074",
          "text": "At the same discharge and cross-section, two distinct flow depths have equal specific energy. How are these depths classified?",
          "options": [
            {
              "key": "a",
              "text": "Alternate depths, generally on opposite sides of critical depth"
            },
            {
              "key": "b",
              "text": "Conjugate depths, necessarily across a hydraulic jump"
            },
            {
              "key": "c",
              "text": "Critical depths, both at the energy minimum"
            },
            {
              "key": "d",
              "text": "Normal depths, necessarily at the same bed slope"
            }
          ],
          "answer": "a",
          "explanation": "Alternate depths lie on the shallow supercritical and deep subcritical branches of the same specific-energy curve. Conjugate or sequent depths instead share specific force under jump assumptions and generally have different energies.<p>Capsule 4th ed., pp. 12, 14; topic 3 point 71; topic 3 point 112; topic 3 point 118.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 12, 14; topic 3 point 71; topic 3 point 112; topic 3 point 118",
            "pages": [
              12,
              14
            ],
            "points": [
              "capsule-t03-p012-n71",
              "capsule-t03-p014-n112",
              "capsule-t03-p014-n118"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00075",
          "src": "CAP4-03-00075",
          "text": "A trapezoidal channel has bottom width 4 m, water depth 2 m and each side slope 1.5H:1V. What is the wetted perimeter?",
          "options": [
            {
              "key": "a",
              "text": "10.000 m"
            },
            {
              "key": "b",
              "text": "11.211 m"
            },
            {
              "key": "c",
              "text": "8.000 m"
            },
            {
              "key": "d",
              "text": "13.211 m"
            }
          ],
          "answer": "b",
          "explanation": "Each submerged sloping side is y sqrt(1+z^2) = 2 sqrt(3.25) m. Thus P = B + 2y sqrt(1+z^2) = 4 + 4 sqrt(3.25) = 11.211 m. The free-surface top width is not part of the wetted perimeter.<p>Source note: p12 n73: &#39;weighted&#39; corrected to wetted; missing square root restored from geometry.</p><p>Capsule 4th ed., p. 12; topic 3 point 73.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 73",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n73"
            ]
          },
          "topic": "ACiE0305",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00078",
          "src": "CAP4-03-00078",
          "text": "For preliminary screening only, a designer uses jump length between five and seven times the jump height. With upstream and downstream depths 0.5 and 2.5 m, what length range follows?",
          "options": [
            {
              "key": "a",
              "text": "10 to 14 m"
            },
            {
              "key": "b",
              "text": "2.5 to 3.5 m"
            },
            {
              "key": "c",
              "text": "15 to 21 m"
            },
            {
              "key": "d",
              "text": "12.5 to 17.5 m"
            }
          ],
          "answer": "a",
          "explanation": "Jump height is the depth difference, 2.5 - 0.5 = 2.0 m. Applying the stipulated multiplier gives 5(2) to 7(2), or 10-14 m. This empirical estimate does not replace a stilling-basin design based on actual flow and tailwater.<p>Source note: p12 n76 is a rough empirical range, not an exact universal jump-length equation.</p><p>Capsule 4th ed., p. 12; topic 3 point 76.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 76",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n76"
            ]
          },
          "topic": "ACiE0305",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00079",
          "src": "CAP4-03-00079",
          "text": "A trapezoidal channel is hydraulically optimal for a fixed area and prescribed side slope. Each submerged sloping side is 2.5 m long. What is the top width?",
          "options": [
            {
              "key": "a",
              "text": "1.25 m"
            },
            {
              "key": "b",
              "text": "5.0 m"
            },
            {
              "key": "c",
              "text": "7.5 m"
            },
            {
              "key": "d",
              "text": "2.5 m"
            }
          ],
          "answer": "b",
          "explanation": "For the optimum trapezoid, half the top width equals one submerged sloping-side length: T/2 = y sqrt(1+z^2). Thus T = 2 times 2.5 = 5.0 m. A side-slope ratio itself is dimensionless and cannot be added to produce a width.<p>Source note: p12 n77: &#39;sum of side slope&#39; corrected to sum of the two submerged sloping-side lengths.</p><p>Capsule 4th ed., p. 12; topic 3 point 77.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 77",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n77"
            ]
          },
          "topic": "ACiE0305",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00080",
          "src": "CAP4-03-00080",
          "text": "For free overflow over a fixed ogee weir, assume effective crest length and discharge coefficient stay constant. If total head above the crest becomes four times its original value, what is the discharge ratio?",
          "options": [
            {
              "key": "a",
              "text": "16"
            },
            {
              "key": "b",
              "text": "8"
            },
            {
              "key": "c",
              "text": "4"
            },
            {
              "key": "d",
              "text": "2"
            }
          ],
          "answer": "b",
          "explanation": "Using Q = C L H^(3/2), the discharge ratio is 4^(3/2) = 8. In real ogee operation the coefficient can vary with head relative to the design head, so constancy of C is an explicit assumption.<p>Capsule 4th ed., p. 13; topic 3 point 79.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 79",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n79"
            ]
          },
          "topic": "ACiE0305",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00081",
          "src": "CAP4-03-00081",
          "text": "A symmetric triangular channel has side slopes 2H:1V, depth y and mean speed V. Which expression gives its Froude number under the shallow-water approximation?",
          "options": [
            {
              "key": "a",
              "text": "V/sqrt(2gy)"
            },
            {
              "key": "b",
              "text": "V/sqrt(gy/2)"
            },
            {
              "key": "c",
              "text": "V/sqrt(gy/(2 sqrt(5)))"
            },
            {
              "key": "d",
              "text": "V/sqrt(gy)"
            }
          ],
          "answer": "b",
          "explanation": "For side slope z, area A = z y^2 and top width T = 2zy, so hydraulic depth A/T = y/2. Therefore Fr = V/sqrt(gy/2), independent of z. Using hydraulic radius instead gives the wrong wave-speed scale.<p>Source note: p13 n80: formula reconstructed from triangular geometry; no source image used.</p><p>Capsule 4th ed., p. 13; topic 3 point 80.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 80",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n80"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00082",
          "src": "CAP4-03-00082",
          "text": "A channel's water depth changes slowly along its length but measurements at every fixed section remain constant with time. How is this flow classified?",
          "options": [
            {
              "key": "a",
              "text": "Steady, nonuniform and gradually varied"
            },
            {
              "key": "b",
              "text": "Unsteady, uniform and gradually varied"
            },
            {
              "key": "c",
              "text": "Unsteady, nonuniform and rapidly varied"
            },
            {
              "key": "d",
              "text": "Steady, uniform and rapidly varied"
            }
          ],
          "answer": "a",
          "explanation": "Time-invariant measurements establish steadiness, spatial depth variation establishes nonuniformity, and slow spatial variation identifies gradually varied flow. Gradual spatial variation alone would not establish that a flow is steady.<p>Source note: p13 n81: steadiness is supplied as an independent condition, not inferred solely from gradual variation.</p><p>Capsule 4th ed., p. 13; topic 3 point 81.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 81",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n81"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00103",
          "src": "CAP4-03-00103",
          "text": "For a general open-channel section with unit kinetic-energy correction, which dimensionless expression equals one at critical flow?",
          "options": [
            {
              "key": "a",
              "text": "Q<sup>2</sup>P/(gA<sup>3</sup>)"
            },
            {
              "key": "b",
              "text": "gA<sup>3</sup>T/Q<sup>2</sup>"
            },
            {
              "key": "c",
              "text": "Q<sup>2</sup>/(gA<sup>2</sup>)"
            },
            {
              "key": "d",
              "text": "Q<sup>2</sup>T/(gA<sup>3</sup>)"
            }
          ],
          "answer": "d",
          "explanation": "Fr^2 = V^2/(gA/T). Inserting V = Q/A gives Fr^2 = Q^2 T/(gA^3), which is one at critical flow. T is the free-surface top width, not the wetted perimeter P.<p>Capsule 4th ed., p. 13; topic 3 point 102.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 102",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n102"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00104",
          "src": "CAP4-03-00104",
          "text": "Which quantity is the critical-flow section factor Z for a channel of cross-sectional area A and hydraulic depth D?",
          "options": [
            {
              "key": "a",
              "text": "A D<sup>2/3</sup>"
            },
            {
              "key": "b",
              "text": "A/D<sup>2</sup>"
            },
            {
              "key": "c",
              "text": "sqrt(A D)"
            },
            {
              "key": "d",
              "text": "A sqrt(D)"
            }
          ],
          "answer": "d",
          "explanation": "The critical condition can be written Q/sqrt(g) = A sqrt(A/T) = A sqrt(D), defining the section factor Z. Here A is the wetted cross-sectional area, not drainage-basin area; Z has units of length^(5/2).<p>Source note: p13 n103 conflates channel section factor with basin form factor. Split into two questions to teach both meanings.</p><p>Capsule 4th ed., p. 13; topic 3 point 103.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 103",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n103"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00110",
          "src": "CAP4-03-00110",
          "text": "Chezy's equation is V = C sqrt(RS), where R is hydraulic radius and S is dimensionless slope. What are the dimensions of C?",
          "options": [
            {
              "key": "a",
              "text": "L<sup>1/2</sup>T<sup>-1</sup>"
            },
            {
              "key": "b",
              "text": "TL<sup>-1/3</sup>"
            },
            {
              "key": "c",
              "text": "L<sup>-1/2</sup>T<sup>-1</sup>"
            },
            {
              "key": "d",
              "text": "L<sup>2</sup>T<sup>-1</sup>"
            }
          ],
          "answer": "a",
          "explanation": "C = V/sqrt(RS), so its dimensions are (L/T)/L^(1/2) = L^(1/2)/T. Chezy C is neither dimensionless nor dimensionally identical to Manning n.<p>Capsule 4th ed., p. 13; topic 3 point 107.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 107",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n107"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00117",
          "src": "CAP4-03-00117",
          "text": "Critical depth in a rectangular channel is 2.0 m. Taking the kinetic-energy correction factor as one, what is the minimum specific energy above the bed?",
          "options": [
            {
              "key": "a",
              "text": "1.0 m"
            },
            {
              "key": "b",
              "text": "4.0 m"
            },
            {
              "key": "c",
              "text": "2.0 m"
            },
            {
              "key": "d",
              "text": "3.0 m"
            }
          ],
          "answer": "d",
          "explanation": "At critical flow in a rectangle, Vc^2/g = yc. The velocity head is therefore yc/2, and Ec = yc + yc/2 = 1.5 times 2.0 = 3.0 m. The source's missing result unit is metres of head.<p>Capsule 4th ed., p. 14; topic 3 point 115.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 115",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n115"
            ]
          },
          "topic": "ACiE0305",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00122",
          "src": "CAP4-03-00122",
          "text": "A backwater profile lies above normal depth on a mild channel bed. Using y for actual depth, yn for normal depth and yc for critical depth, which ordering identifies an M1 profile?",
          "options": [
            {
              "key": "a",
              "text": "yn > y > yc"
            },
            {
              "key": "b",
              "text": "yn > yc > y"
            },
            {
              "key": "c",
              "text": "y > yn > yc"
            },
            {
              "key": "d",
              "text": "y > yc > yn"
            }
          ],
          "answer": "c",
          "explanation": "A mild bed has normal depth above critical depth, yn > yc. Zone 1 lies above both reference depths, so M1 requires y > yn > yc. A depth between yn and yc would be an M2 drawdown profile.<p>Capsule 4th ed., p. 14; topic 3 point 120.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 120",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n120"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00127",
          "src": "CAP4-03-00127",
          "text": "A sediment engineer uses the Shields diagram for noncohesive bed grains. What threshold is the diagram primarily used to estimate?",
          "options": [
            {
              "key": "a",
              "text": "Dimensionless critical bed shear for incipient motion"
            },
            {
              "key": "b",
              "text": "Universal settling velocity independent of grain size"
            },
            {
              "key": "c",
              "text": "Maximum suspended concentration at every discharge"
            },
            {
              "key": "d",
              "text": "Critical water depth for minimum specific energy"
            }
          ],
          "answer": "a",
          "explanation": "The Shields curve relates critical dimensionless shear tau_c/[(rho_s-rho)gd] to a particle-scale Reynolds number. It concerns the start of grain movement, not critical open-channel flow or a universal sediment concentration.<p>Capsule 4th ed., p. 14; topic 3 point 125.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 125",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n125"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00128",
          "src": "CAP4-03-00128",
          "text": "For a specified sediment condition, take critical Shields parameter 0.050, grain density 2650 kg/m<sup>3</sup>, water density 1000 kg/m<sup>3</sup>, grain diameter 2 mm and g = 9.81 m/s<sup>2</sup>. What critical shear follows?",
          "options": [
            {
              "key": "a",
              "text": "2.60 Pa"
            },
            {
              "key": "b",
              "text": "1618.65 Pa"
            },
            {
              "key": "c",
              "text": "0.162 Pa"
            },
            {
              "key": "d",
              "text": "1.62 Pa"
            }
          ],
          "answer": "d",
          "explanation": "tau_c = theta_c(rho_s-rho)gd = 0.050(2650-1000)(9.81)(0.002) = 1.61865 Pa. The submerged density difference and conversion of millimetres to metres are essential. The supplied Shields value is condition-specific, not universal.<p>Capsule 4th ed., p. 14; topic 3 point 125.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 125",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n125"
            ]
          },
          "topic": "ACiE0305",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00129",
          "src": "CAP4-03-00129",
          "text": "At a fixed flow area, roughness and energy slope, freely choosing a smooth open-channel boundary to minimize wetted perimeter gives which ideal section?",
          "options": [
            {
              "key": "a",
              "text": "A symmetric triangle with 1H:1V sides"
            },
            {
              "key": "b",
              "text": "A rectangle with width twice its depth"
            },
            {
              "key": "c",
              "text": "A half-hexagonal trapezoid"
            },
            {
              "key": "d",
              "text": "A semicircle"
            }
          ],
          "answer": "d",
          "explanation": "The semicircle minimizes wetted boundary length for a specified area with a free top surface. This maximizes hydraulic radius and conveyance under the stated assumptions. Construction cost, bank stability and lining constraints can favor another practical section.<p>Source note: p14 n126 is a mathematical hydraulic optimum, not a universal least-cost or stable-earth-channel design.</p><p>Capsule 4th ed., p. 14; topic 3 point 126.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 126",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n126"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00137",
          "src": "CAP4-03-00137",
          "text": "Which Manning n range is a plausible preliminary textbook estimate for a clean, smooth-finished concrete channel in the SI convention?",
          "options": [
            {
              "key": "a",
              "text": "0.011 to 0.013"
            },
            {
              "key": "b",
              "text": "0.030 to 0.050"
            },
            {
              "key": "c",
              "text": "0.0011 to 0.0013"
            },
            {
              "key": "d",
              "text": "0.11 to 0.13"
            }
          ],
          "answer": "a",
          "explanation": "Smooth-finished concrete commonly has an indicative Manning n around 0.011-0.013. Joints, deterioration, sediment and vegetation can raise effective roughness; an approximate material range is not a guaranteed field value or a prescribed universal standard.<p>Capsule 4th ed., p. 14; topic 3 point 133.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 133",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n133"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00145",
          "src": "CAP4-03-00145",
          "text": "An empirical spillway-outlet loss is written hL = K Vref<sup>2</sup>/(2g). Before using a tabulated K, which information must be compatible with the calculation?",
          "options": [
            {
              "key": "a",
              "text": "The same upstream depth but any degree of submergence"
            },
            {
              "key": "b",
              "text": "The same discharge but any chosen velocity section"
            },
            {
              "key": "c",
              "text": "The same crest width but any downstream outlet shape"
            },
            {
              "key": "d",
              "text": "Outlet geometry, submergence and the specified velocity reference"
            }
          ],
          "answer": "d",
          "explanation": "A local loss coefficient packages a particular flow configuration and reference velocity. Changing section, geometry or submergence can change its value. The equation represents head dissipation at the outlet, not a disappearance of water discharge.<p>Source note: p15 n142 also mentions an open-channel spillway; covered separately from the butterfly valve because no shared universal K or outlet condition is supplied.</p><p>Capsule 4th ed., p. 15; topic 3 point 142.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 3 point 142",
            "pages": [
              15
            ],
            "points": [
              "capsule-t03-p015-n142"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00146",
          "src": "CAP4-03-00146",
          "text": "Which set of grain motions is characteristic of sediment bed load rather than dissolved transport or sustained suspension?",
          "options": [
            {
              "key": "a",
              "text": "Rolling, sliding and short saltation hops near the bed"
            },
            {
              "key": "b",
              "text": "Suspension, turbulent diffusion and settling through the depth"
            },
            {
              "key": "c",
              "text": "Flotation, surface drift and rafting of buoyant debris"
            },
            {
              "key": "d",
              "text": "Dissolution, solute advection and molecular diffusion"
            }
          ],
          "answer": "a",
          "explanation": "Bed-load particles roll or slide in contact with the bed and make short bouncing or saltation hops close to it. Sustained suspended transport relies on turbulence supporting grains in the water column; dissolved load is transported as solutes, not grains.<p>Capsule 4th ed., p. 15; topic 3 point 143.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 3 point 143",
            "pages": [
              15
            ],
            "points": [
              "capsule-t03-p015-n143"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00149",
          "src": "CAP4-03-00149",
          "text": "In a simple tractive-force model, identical loose noncohesive grains rest on a horizontal bed and on an inclined bank below their angle of repose. Flow drag acts along the channel and lift is neglected. Why is the bank's incipient-motion shear threshold lower?",
          "options": [
            {
              "key": "a",
              "text": "Hydrostatic pressure removes grain-to-grain friction on the bank"
            },
            {
              "key": "b",
              "text": "The grain's submerged weight increases with bank inclination"
            },
            {
              "key": "c",
              "text": "The bank's inclination increases the grain's angle of repose"
            },
            {
              "key": "d",
              "text": "Downslope submerged weight uses part of the frictional resistance"
            }
          ],
          "answer": "d",
          "explanation": "On an inclined bank, submerged weight has a downslope component and the contact normal force is reduced. Flow drag and that weight component must together be resisted by friction. The allowable flow shear therefore depends on bank inclination and sediment friction angle, not on a universal 0.75 multiplier.<p>Source note: Independent review: adds the corrected physical principle missing from the source&#39;s unexplained 0.75 factor. Applied local or mean bank shear must also be distinguished from the material&#39;s critical shear threshold.</p><p>Capsule 4th ed., p. 11; topic 3 point 19.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 19",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n19"
            ]
          },
          "topic": "ACiE0305",
          "kind": "application"
        }
      ]
    },
    {
      "id": "ACiE0306",
      "name": "Hydrology",
      "subject": "Basic Water Resources Engineering",
      "questions": [
        {
          "id": "CAP4-02-00137",
          "src": "CAP4-02-00137",
          "text": "A regional MIP flow-estimation worksheet assigns an ungauged Nepal catchment to a mapped hydrological region. What should that region selection provide for a defensible calculation?",
          "options": [
            {
              "key": "a",
              "text": "A catchment runoff volume independent of catchment area and rainfall"
            },
            {
              "key": "b",
              "text": "A single season-independent flow rating valid for every catchment in the region"
            },
            {
              "key": "c",
              "text": "The appropriate regional runoff relationships and their applicability limits"
            },
            {
              "key": "d",
              "text": "The administrative province number as a universal runoff coefficient"
            }
          ],
          "answer": "c",
          "explanation": "Hydrological regionalization transfers relationships from catchments with relevant climatic and runoff characteristics. The correct map, method version and regional coefficients must be identified and checked against available flows; administrative boundaries are not a substitute.<p>Source note: Page 9 point 123 says MIP divides Nepal into seven zones. The supplied text gives no map, edition or definition and the nearby hydrology notes did not corroborate the count. Parent must verify that exact claim against the original MIP manual; this question tests regionalization without asserting seven as a verified fact.</p><p>Capsule 4th ed., p. 9; topic 2 point 123.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 123",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n123"
            ]
          },
          "topic": "ACiE0306",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00020",
          "src": "CAP4-03-00020",
          "text": "Air has a dew point of 6 degrees Celsius. A clean exposed surface cools from 12 to 5 degrees Celsius while remaining above freezing. What condition permits liquid dew to form?",
          "options": [
            {
              "key": "a",
              "text": "The surface cools below the dew point"
            },
            {
              "key": "b",
              "text": "The surface remains warmer than the dew point"
            },
            {
              "key": "c",
              "text": "The atmospheric pressure must become zero gauge"
            },
            {
              "key": "d",
              "text": "The air temperature merely remains above zero"
            }
          ],
          "answer": "a",
          "explanation": "Dew forms when the near-surface air becomes saturated as the surface reaches or falls below its dew point. A positive dew point alone does not guarantee dew; sufficient surface cooling is also required, and above-freezing conditions permit liquid condensation.<p>Source note: p11 n17 omits the required cooling-to-saturation condition.</p><p>Capsule 4th ed., p. 11; topic 3 point 17.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 11; topic 3 point 17",
            "pages": [
              11
            ],
            "points": [
              "capsule-t03-p011-n17"
            ]
          },
          "topic": "ACiE0306",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00083",
          "src": "CAP4-03-00083",
          "text": "A study traces rainfall, infiltration, groundwater storage and river discharge across a basin. Which discipline integrates the occurrence, circulation and distribution of this water?",
          "options": [
            {
              "key": "a",
              "text": "Hydrology"
            },
            {
              "key": "b",
              "text": "Fluid rheology"
            },
            {
              "key": "c",
              "text": "Hydraulics"
            },
            {
              "key": "d",
              "text": "Hydrostatics"
            }
          ],
          "answer": "a",
          "explanation": "Hydrology treats water's occurrence, movement, distribution and storage in the earth-atmosphere system. Hydraulics focuses on the mechanics of flow, hydrostatics on fluids at rest, and rheology on deformation and constitutive behavior.<p>Capsule 4th ed., p. 13; topic 3 point 82.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 82",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n82"
            ]
          },
          "topic": "ACiE0306",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00084",
          "src": "CAP4-03-00084",
          "text": "In the commonly taught three-group classification of Nepal's rivers by source region, which sequence identifies the source belts from highest to lowest?",
          "options": [
            {
              "key": "a",
              "text": "Terai plains, Siwalik hills, Tibetan plateau"
            },
            {
              "key": "b",
              "text": "High Himalaya, Mahabharat hills, Siwalik hills"
            },
            {
              "key": "c",
              "text": "Mahabharat hills, Siwalik hills, High Himalaya"
            },
            {
              "key": "d",
              "text": "Siwalik hills, High Himalaya, Mahabharat hills"
            }
          ],
          "answer": "b",
          "explanation": "The conventional origin-based grouping distinguishes major high-Himalayan rivers, middle-hill or Mahabharat-origin rivers, and smaller Siwalik-origin streams. This three-group teaching scheme is not a classification by river order, administrative province or a guarantee of a particular flow in every season.<p>Source note: p13 n83: source gives only the number three; explicit origin-based scheme supplied, not presented as an exclusive statutory classification.</p><p>Capsule 4th ed., p. 13; topic 3 point 83.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 83",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n83"
            ]
          },
          "topic": "ACiE0306",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00085",
          "src": "CAP4-03-00085",
          "text": "A 2-hour unit hydrograph has an 8-hour base. Under linear time-invariant assumptions, a 4-hour unit hydrograph is formed by averaging two copies staggered by 2 hours. What is the new base duration?",
          "options": [
            {
              "key": "a",
              "text": "16 hours"
            },
            {
              "key": "b",
              "text": "12 hours"
            },
            {
              "key": "c",
              "text": "8 hours"
            },
            {
              "key": "d",
              "text": "10 hours"
            }
          ],
          "answer": "d",
          "explanation": "The original response runs from hour 0 to 8; its shifted copy runs from hour 2 to 10. Averaging keeps a unit excess-rainfall depth but leaves support from hour 0 to 10. Longer rainfall duration thus broadens the base in this construction.<p>Capsule 4th ed., p. 13; topic 3 point 84.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 84",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n84"
            ]
          },
          "topic": "ACiE0306",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00086",
          "src": "CAP4-03-00086",
          "text": "A rain gauge is relocated and its cumulative rainfall versus cumulative neighboring-station mean changes slope. Which analysis specifically detects this possible record inconsistency?",
          "options": [
            {
              "key": "a",
              "text": "Stage-discharge rating"
            },
            {
              "key": "b",
              "text": "Flow-duration analysis"
            },
            {
              "key": "c",
              "text": "Double-mass analysis"
            },
            {
              "key": "d",
              "text": "Unit-hydrograph convolution"
            }
          ],
          "answer": "c",
          "explanation": "A double-mass curve compares cumulative totals from the target station and a consistent reference group. A slope change suggests a changed relationship, possibly due to relocation or exposure, but must be investigated before applying a correction.<p>Capsule 4th ed., p. 13; topic 3 point 85.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 85",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n85"
            ]
          },
          "topic": "ACiE0306",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00087",
          "src": "CAP4-03-00087",
          "text": "Two equal-area catchments have comparable slopes and runoff properties under a spatially uniform storm. One is elongated and fern-shaped; the other is compact and fan-shaped. Which response is generally expected from the elongated basin?",
          "options": [
            {
              "key": "a",
              "text": "A higher synchronized peak solely because its perimeter is longer"
            },
            {
              "key": "b",
              "text": "Longer main travel paths and a less synchronized runoff peak"
            },
            {
              "key": "c",
              "text": "Shorter main travel paths and a more synchronized runoff peak"
            },
            {
              "key": "d",
              "text": "Identical travel times because areas are equal"
            }
          ],
          "answer": "b",
          "explanation": "Elongation commonly lengthens the main drainage path and spreads tributary arrivals in time. A compact fan-shaped basin can concentrate arrivals more strongly. Actual response also depends on drainage arrangement, slope, storm motion and storage, so shape alone is not deterministic.<p>Capsule 4th ed., p. 13; topic 3 point 86.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 86",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n86"
            ]
          },
          "topic": "ACiE0306",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00088",
          "src": "CAP4-03-00088",
          "text": "On a map of one storm, a contour joins sites that each received 50 mm of rain during the same interval. What is this contour?",
          "options": [
            {
              "key": "a",
              "text": "An equipotential line"
            },
            {
              "key": "b",
              "text": "An isochrone"
            },
            {
              "key": "c",
              "text": "An isohyet"
            },
            {
              "key": "d",
              "text": "An isobar"
            }
          ],
          "answer": "c",
          "explanation": "Isohyets join equal precipitation depths for a common time interval. Isobars join equal atmospheric pressure, isochrones equal travel time, and equipotential lines equal hydraulic head in a flow net.<p>Capsule 4th ed., p. 13; topic 3 point 87.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 87",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n87"
            ]
          },
          "topic": "ACiE0306",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00089",
          "src": "CAP4-03-00089",
          "text": "An ungauged Nepalese catchment is assessed with a regional method labelled DHM 2004. What is the defensible next step before treating its flow estimates as suitable for design?",
          "options": [
            {
              "key": "a",
              "text": "Accept accuracy solely because DHM appears in the method name"
            },
            {
              "key": "b",
              "text": "Check regional applicability and compare with available local observations"
            },
            {
              "key": "c",
              "text": "Replace local observations whenever they differ from the estimate"
            },
            {
              "key": "d",
              "text": "Assume one calibration works at every elevation and basin size"
            }
          ],
          "answer": "b",
          "explanation": "Regional equations transfer empirical relationships from observed catchments. Their accuracy depends on calibration data, basin similarity and extrapolation. Agency attribution or a date alone cannot establish accuracy for a particular site or substitute for uncertainty assessment.<p>Source note: p13 n88: exact DHM 2004 publication, parameters and validation data are absent; nearby notes mention WECS/DHM 1990. Parent to review attribution. No unsupported accuracy ranking asserted.</p><p>Capsule 4th ed., p. 13; topic 3 point 88.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 88",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n88"
            ]
          },
          "topic": "ACiE0306",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00090",
          "src": "CAP4-03-00090",
          "text": "Reliable terrain-informed isohyets divide a 5 km<sup>2</sup> basin into a 2 km<sup>2</sup> band averaging 40 mm and a 3 km<sup>2</sup> band averaging 60 mm. What is the basin-average rainfall?",
          "options": [
            {
              "key": "a",
              "text": "48 mm"
            },
            {
              "key": "b",
              "text": "52 mm"
            },
            {
              "key": "c",
              "text": "50 mm"
            },
            {
              "key": "d",
              "text": "100 mm"
            }
          ],
          "answer": "b",
          "explanation": "Weight each band depth by its area: mean rainfall = (2 times 40 + 3 times 60)/5 = 52 mm. The isohyetal method can represent spatial and terrain variation, but its accuracy still depends on the observations and contour interpretation.<p>Source note: p13 n89: reject universal &#39;most accurate&#39; ranking; test the area-weighted method with explicitly reliable contours.</p><p>Capsule 4th ed., p. 13; topic 3 point 89.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 89",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n89"
            ]
          },
          "topic": "ACiE0306",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00091",
          "src": "CAP4-03-00091",
          "text": "Moist air converges toward a low-pressure system, rises and cools to produce widespread rainfall. Which lifting mechanism best describes this event?",
          "options": [
            {
              "key": "a",
              "text": "Surface-heating convection alone"
            },
            {
              "key": "b",
              "text": "Cyclonic lifting"
            },
            {
              "key": "c",
              "text": "Orographic lifting"
            },
            {
              "key": "d",
              "text": "Radiational surface condensation"
            }
          ],
          "answer": "b",
          "explanation": "Low-pressure convergence and associated ascent are characteristic of cyclonic precipitation. Orographic rain is forced by terrain, convection by buoyant instability often driven by heating, and dew is condensation at a cooled surface rather than falling precipitation.<p>Capsule 4th ed., p. 13; topic 3 point 90.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 90",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n90"
            ]
          },
          "topic": "ACiE0306",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00092",
          "src": "CAP4-03-00092",
          "text": "An advancing cold air mass undercuts warm moist air along a front. Which process most directly initiates cold-frontal precipitation?",
          "options": [
            {
              "key": "a",
              "text": "Descent and compression of the warm moist air"
            },
            {
              "key": "b",
              "text": "Warming of the cold air without vertical displacement"
            },
            {
              "key": "c",
              "text": "Evaporation of droplets caused by frontal lifting"
            },
            {
              "key": "d",
              "text": "Forced ascent and cooling of the warm moist air"
            }
          ],
          "answer": "d",
          "explanation": "The denser advancing cold air lifts the warm moist air. Expansion and cooling can bring it to saturation, causing condensation and precipitation if moisture and instability support cloud development.<p>Capsule 4th ed., p. 13; topic 3 point 91.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 91",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n91"
            ]
          },
          "topic": "ACiE0306",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00093",
          "src": "CAP4-03-00093",
          "text": "Compared with a typical gently sloping warm front, a steep cold front often produces which rainfall pattern when ample moisture and instability are present?",
          "options": [
            {
              "key": "a",
              "text": "No rain unless the receiving catchment is small"
            },
            {
              "key": "b",
              "text": "A narrower band with shorter, more intense bursts"
            },
            {
              "key": "c",
              "text": "A wider band with only prolonged light stratiform rain"
            },
            {
              "key": "d",
              "text": "Uniform rainfall restricted by the watershed boundary"
            }
          ],
          "answer": "b",
          "explanation": "Rapid lifting at a steep cold front can generate intense showers in a relatively narrow moving band. Catchment area does not define cold-frontal precipitation, and actual duration and intensity depend on frontal speed, moisture and instability.<p>Source note: p13 n92: &#39;small catchment area&#39; is not the definition; corrected to a conditional spatial and intensity tendency.</p><p>Capsule 4th ed., p. 13; topic 3 point 92.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 92",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n92"
            ]
          },
          "topic": "ACiE0306",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00094",
          "src": "CAP4-03-00094",
          "text": "A gauging station converts measured water-surface elevation into discharge using paired field measurements under a stable control. What is this calibrated relationship called?",
          "options": [
            {
              "key": "a",
              "text": "A unit hydrograph"
            },
            {
              "key": "b",
              "text": "A flow-duration curve"
            },
            {
              "key": "c",
              "text": "A stage-discharge rating curve"
            },
            {
              "key": "d",
              "text": "A rainfall mass curve"
            }
          ],
          "answer": "c",
          "explanation": "A rating curve relates stage above a fixed gauge datum to discharge while the control remains applicable. Sedimentation, backwater or unsteady-flow hysteresis can change that relationship, so one stage need not always determine one discharge.<p>Capsule 4th ed., p. 13; topic 3 point 93.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 93",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n93"
            ]
          },
          "topic": "ACiE0306",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00096",
          "src": "CAP4-03-00096",
          "text": "After rainfall input ceases, what primarily governs the recession limb of a streamflow hydrograph, while still allowing dependence on antecedent and event conditions?",
          "options": [
            {
              "key": "a",
              "text": "Drainage and release of water stored in the basin"
            },
            {
              "key": "b",
              "text": "Peak rainfall intensity alone, regardless of drainage"
            },
            {
              "key": "c",
              "text": "The runoff coefficient alone, regardless of prior wetness"
            },
            {
              "key": "d",
              "text": "Storm duration alone, regardless of stored basin water"
            }
          ],
          "answer": "a",
          "explanation": "Recession mainly reflects drainage of surface, soil and groundwater storage. Antecedent wetness and the storm's distribution affect the starting storage and participating flow paths, so absolute independence from storm characteristics is too strong.<p>Source note: p13 n95 absolute storm independence corrected using nearby hydrology notes.</p><p>Capsule 4th ed., p. 13; topic 3 point 95.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 95",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n95"
            ]
          },
          "topic": "ACiE0306",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00097",
          "src": "CAP4-03-00097",
          "text": "A 2-hour effective-rainfall event produces 3 cm of direct runoff and a peak total flow of 75 m<sup>3</sup>/s, including 15 m<sup>3</sup>/s baseflow. Under unit-hydrograph assumptions, what is the peak of the 2-hour, 1 cm unit hydrograph?",
          "options": [
            {
              "key": "a",
              "text": "20 m<sup>3</sup>/s"
            },
            {
              "key": "b",
              "text": "180 m<sup>3</sup>/s"
            },
            {
              "key": "c",
              "text": "25 m<sup>3</sup>/s"
            },
            {
              "key": "d",
              "text": "30 m<sup>3</sup>/s"
            }
          ],
          "answer": "a",
          "explanation": "Subtract baseflow first: the direct-runoff peak is 75 - 15 = 60 m^3/s. Dividing by the runoff depth of 3 cm in 1 cm units gives 60/3 = 20 m^3/s. Rainfall duration remains 2 hours; it is not the depth divisor.<p>Capsule 4th ed., p. 13; topic 3 point 96.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 96",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n96"
            ]
          },
          "topic": "ACiE0306",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00098",
          "src": "CAP4-03-00098",
          "text": "In conventional rational-method peak design for a small catchment, which rainfall duration is normally used to select the design intensity from an IDF relation?",
          "options": [
            {
              "key": "a",
              "text": "The recession duration of the receiving river"
            },
            {
              "key": "b",
              "text": "The return period expressed in hours"
            },
            {
              "key": "c",
              "text": "The time of concentration"
            },
            {
              "key": "d",
              "text": "The annual number of rainy days"
            }
          ],
          "answer": "c",
          "explanation": "The usual critical-duration calculation uses intensity for a duration equal to the time of concentration at the chosen return period, so the whole catchment contributes. Rain can last longer; exact equality is not a universal condition for rainfall-runoff processes to occur.<p>Source note: p13 n97: equality is the conventional design-intensity selection, not an exclusive domain of mass conservation or runoff.</p><p>Capsule 4th ed., p. 13; topic 3 point 97.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 97",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n97"
            ]
          },
          "topic": "ACiE0306",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00099",
          "src": "CAP4-03-00099",
          "text": "Use the rational method with runoff coefficient 0.60, design rainfall intensity 3 cm/h and catchment area 120 hectares. What peak discharge follows in m<sup>3</sup>/s?",
          "options": [
            {
              "key": "a",
              "text": "6.0"
            },
            {
              "key": "b",
              "text": "216.0"
            },
            {
              "key": "c",
              "text": "60.0"
            },
            {
              "key": "d",
              "text": "0.6"
            }
          ],
          "answer": "a",
          "explanation": "One hectare times one cm/h is 100 m^3/h = 1/36 m^3/s. Therefore Q = CIA/36 = 0.60 times 3 times 120/36 = 6.0 m^3/s. The divisor changes when rainfall is in mm/h or area is in square kilometres.<p>Capsule 4th ed., p. 13; topic 3 point 98.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 98",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n98"
            ]
          },
          "topic": "ACiE0306",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00100",
          "src": "CAP4-03-00100",
          "text": "A drainage study needs rainfall intensity during short bursts rather than only a daily total. What is the main advantage of a recording rain gauge over a daily manually read collector?",
          "options": [
            {
              "key": "a",
              "text": "It records the time distribution of rainfall"
            },
            {
              "key": "b",
              "text": "It measures basin-average rainfall from one site"
            },
            {
              "key": "c",
              "text": "It eliminates all wind-induced undercatch"
            },
            {
              "key": "d",
              "text": "It requires no calibration or maintenance"
            }
          ],
          "answer": "a",
          "explanation": "A recording gauge provides cumulative depth or increments against time, enabling intensity estimates. Recording does not by itself guarantee superior absolute accuracy: wind, calibration, resolution, tipping losses and maintenance can still bias observations.<p>Source note: p13 n99 unsupported blanket accuracy claim replaced by the defensible temporal-resolution advantage.</p><p>Capsule 4th ed., p. 13; topic 3 point 99.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 99",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n99"
            ]
          },
          "topic": "ACiE0306",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00105",
          "src": "CAP4-03-00105",
          "text": "A catchment has plan area Ab and axial basin length Lb. Which expression defines the usual dimensionless basin form factor?",
          "options": [
            {
              "key": "a",
              "text": "Ab sqrt(Lb)"
            },
            {
              "key": "b",
              "text": "Lb<sup>2</sup>/Ab"
            },
            {
              "key": "c",
              "text": "Ab/Lb<sup>2</sup>"
            },
            {
              "key": "d",
              "text": "sqrt(Ab Lb)"
            }
          ],
          "answer": "c",
          "explanation": "Basin form factor is mean basin width divided by axial length. Since mean width is Ab/Lb, the ratio is Ab/Lb^2. This dimensionless plan-shape measure is distinct from a channel's dimensional critical-flow section factor.<p>Capsule 4th ed., p. 13; topic 3 point 103.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 103",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n103"
            ]
          },
          "topic": "ACiE0306",
          "kind": "application"
        },
        {
          "id": "CAP4-03-00106",
          "src": "CAP4-03-00106",
          "text": "For a conditional regional-estimation exercise, use Q2 = 1.8767(A3000 + 1)<sup>0.8783</sup>, with Q2 in m<sup>3</sup>/s and A3000 the area below 3000 m elevation in km<sup>2</sup>. What Q2 follows for A3000 = 99 km<sup>2</sup>?",
          "options": [
            {
              "key": "a",
              "text": "213.00 m<sup>3</sup>/s"
            },
            {
              "key": "b",
              "text": "185.79 m<sup>3</sup>/s"
            },
            {
              "key": "c",
              "text": "105.27 m<sup>3</sup>/s"
            },
            {
              "key": "d",
              "text": "107.15 m<sup>3</sup>/s"
            }
          ],
          "answer": "d",
          "explanation": "First add one to obtain 100, then apply the exponent before multiplying: Q2 = 1.8767 times 100^0.8783 = 107.1507 m^3/s. This evaluates the stipulated empirical equation; it does not establish its accuracy, current adoption or site suitability.<p>Source note: p13 n104: source attributes this relation to WECS/DHM but gives no edition, calibration domain or explicit unit definitions. These are stated as exercise assumptions; parent should verify attribution and A3000 definition against the original method. A frequency estimate is not real-time flood forecasting.</p><p>Capsule 4th ed., p. 13; topic 3 point 104.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 104",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n104"
            ]
          },
          "topic": "ACiE0306",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00107",
          "src": "CAP4-03-00107",
          "text": "A two-year return-period flood is estimated from a stationary annual-maximum distribution. What is its annual exceedance probability?",
          "options": [
            {
              "key": "a",
              "text": "Exactly one flood in each two-year block"
            },
            {
              "key": "b",
              "text": "50% in any one year"
            },
            {
              "key": "c",
              "text": "A flood only after two flood-free years"
            },
            {
              "key": "d",
              "text": "25% in any one year"
            }
          ],
          "answer": "b",
          "explanation": "For an annual-maximum frequency distribution, return period T is the reciprocal of annual exceedance probability: p = 1/T = 1/2 = 0.50. It is a statistical frequency statement, not a forecast of the calendar spacing between floods.<p>Capsule 4th ed., p. 13; topic 3 point 104.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 104",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n104"
            ]
          },
          "topic": "ACiE0306",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00112",
          "src": "CAP4-03-00112",
          "text": "Runoff from the hydraulically most remote point takes 7 minutes to reach a drain inlet and 18 minutes to travel from that inlet to the outlet. What is the time of concentration along this controlling path?",
          "options": [
            {
              "key": "a",
              "text": "18 minutes"
            },
            {
              "key": "b",
              "text": "11 minutes"
            },
            {
              "key": "c",
              "text": "7 minutes"
            },
            {
              "key": "d",
              "text": "25 minutes"
            }
          ],
          "answer": "d",
          "explanation": "The travel segments occur successively, so Tc = inlet or entry time + conduit travel time = 7 + 18 = 25 minutes. Taking only the larger segment omits part of the controlling runoff path.<p>Capsule 4th ed., p. 13; topic 3 point 109.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 109",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n109"
            ]
          },
          "topic": "ACiE0306",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00114",
          "src": "CAP4-03-00114",
          "text": "A river supplies 1 m<sup>3</sup>/s during a ten-day dry spell while demand is 3 m<sup>3</sup>/s. Adequate wet-season surplus can be stored beforehand. Neglect all losses. What active storage would bridge this deficit?",
          "options": [
            {
              "key": "a",
              "text": "2.592 million m<sup>3</sup>"
            },
            {
              "key": "b",
              "text": "1.728 million m<sup>3</sup>"
            },
            {
              "key": "c",
              "text": "0.864 million m<sup>3</sup>"
            },
            {
              "key": "d",
              "text": "3.456 million m<sup>3</sup>"
            }
          ],
          "answer": "b",
          "explanation": "Storage must supply the difference between demand and inflow: (3-1) times 10 times 86400 = 1728000 m^3. An impounding reservoir can transfer wet-season surplus to a dry period; it cannot create water if dependable overall supply is inadequate.<p>Source note: p14 n111: storage is a possible response to a seasonal deficit, not automatically the only feasible solution. Adequate refill supply and losses must be checked.</p><p>Capsule 4th ed., p. 14; topic 3 point 111.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 111",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n111"
            ]
          },
          "topic": "ACiE0306",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00138",
          "src": "CAP4-03-00138",
          "text": "For an explicitly assumed local short-storm fit, I = 760/(t + 10), with I in mm/h and t in minutes for t below 20 minutes. What intensity does this fit predict at t = 10 minutes?",
          "options": [
            {
              "key": "a",
              "text": "38 mm/h"
            },
            {
              "key": "b",
              "text": "760 mm/h"
            },
            {
              "key": "c",
              "text": "76 mm/h"
            },
            {
              "key": "d",
              "text": "20 mm/h"
            }
          ],
          "answer": "a",
          "explanation": "The denominator is 10+10 = 20, so I = 760/20 = 38 mm/h. The full page restores the numerator missing from the point extract. Such an empirical fit needs a location, return period, units and calibration range before real design use.<p>Source note: p14 n134: 760 recovered from full page text. Original units, location, return period and authority remain unspecified; units here are explicit exercise assumptions, not claimed source verification. Parent review required.</p><p>Capsule 4th ed., p. 14; topic 3 point 134.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 14; topic 3 point 134",
            "pages": [
              14
            ],
            "points": [
              "capsule-t03-p014-n134"
            ]
          },
          "topic": "ACiE0306",
          "kind": "calculation"
        },
        {
          "id": "CAP4-10-00194",
          "src": "CAP4-10-00194",
          "text": "A particular trail-bridge brief requires at least 5 m vertical clearance above design high-water level. The HFL is RL 104.5 m and the specified lowest bridge point is RL 109.5 m under the stated loading condition. What clearance is provided?",
          "options": [
            {
              "key": "a",
              "text": "14.0 m, exceeding the stated minimum"
            },
            {
              "key": "b",
              "text": "5.0 m, exactly meeting the stated minimum"
            },
            {
              "key": "c",
              "text": "4.5 m, falling short of the stated minimum"
            },
            {
              "key": "d",
              "text": "9.5 m, exceeding the stated minimum"
            }
          ],
          "answer": "b",
          "explanation": "Clearance is the difference in elevations measured from the same datum: 109.5 - 104.5 = 5.0 m. The brief's reference point and loading condition matter; this is not verification that 5 m is a universal trail-bridge standard.<p>Source note: Appendix p42 n18: conditional minimum only; parent should verify bridge type, design flood, debris allowance, reference point and manual edition.</p><p>Capsule 4th ed., p. 42; rural point 18.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 42; rural point 18",
            "pages": [
              42
            ],
            "points": [
              "capsule-t10-p042-n18"
            ]
          },
          "topic": "ACiE0306",
          "kind": "calculation"
        },
        {
          "id": "CAP4-10-00195",
          "src": "CAP4-10-00195",
          "text": "Why should a bridge's flood-clearance check use the design high-water level rather than the water level observed on a dry-season survey day?",
          "options": [
            {
              "key": "a",
              "text": "The water-level datum becomes irrelevant once the span is fixed"
            },
            {
              "key": "b",
              "text": "Freeboard is measured from the channel bed rather than water level"
            },
            {
              "key": "c",
              "text": "Surveyed dry-season levels always exceed every flood level"
            },
            {
              "key": "d",
              "text": "Dry-season levels do not represent the adopted design-flood condition"
            }
          ],
          "answer": "d",
          "explanation": "The required clearance is related to the adopted flood condition, with allowances for debris, uncertainty and structural behaviour as specified. A low observed level cannot establish adequate clearance during the design event.<p>Capsule 4th ed., p. 42; rural point 18.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 42; rural point 18",
            "pages": [
              42
            ],
            "points": [
              "capsule-t10-p042-n18"
            ]
          },
          "topic": "ACiE0306",
          "kind": "application"
        }
      ]
    }
  ]
};
