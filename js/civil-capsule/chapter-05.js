window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["capsule-05"] = {
  "title": "NEC Quick Revision Capsule - Design of Structures",
  "negativeMarking": 0,
  "chapters": [
    {
      "id": "ACiE0501",
      "name": "Loads and load combinations",
      "subject": "Design of Structures",
      "questions": [
        {
          "id": "CAP4-04-00086",
          "src": "CAP4-04-00086",
          "text": "When classifying building actions, where does the calculated self-weight of a permanently installed concrete floor belong?",
          "options": [
            {
              "key": "a",
              "text": "Accidental impact action"
            },
            {
              "key": "b",
              "text": "Variable imposed occupancy load"
            },
            {
              "key": "c",
              "text": "Permanent action or dead load"
            },
            {
              "key": "d",
              "text": "Imposed temperature deformation"
            }
          ],
          "answer": "c",
          "explanation": "Self-weight follows the permanent member's geometry and material unit weight, so it is classified as a permanent action or dead load. People and movable contents are imposed loads. Calling self-weight permanent does not mean the structure's response can never become dynamic.<p>Capsule 4th ed., p. 18; topic 4 point 86.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 86",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n86"
            ]
          },
          "topic": "ACiE0501",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00001",
          "src": "CAP4-05-00001",
          "text": "An ordinary steel-building design follows IS 800:2007. How should extreme wind and earthquake actions be treated when forming its normal load combinations?",
          "options": [
            {
              "key": "a",
              "text": "Omit dead load whenever either action is present"
            },
            {
              "key": "b",
              "text": "Combine only the smaller action with dead load"
            },
            {
              "key": "c",
              "text": "Check them as alternative environmental actions"
            },
            {
              "key": "d",
              "text": "Add their separate maxima in every combination"
            }
          ],
          "answer": "c",
          "explanation": "IS 800:2007 clause 3.5.2 excludes simultaneous wind and earthquake from its ordinary design combinations. Each applicable alternative must still be checked with the prescribed gravity actions and factors. This is a design concurrence assumption, not a physical impossibility.<p>Source note: Corrects page 19 point 1: &#39;not possible&#39; is too absolute; the named code and ordinary design situation are essential.</p><p>Capsule 4th ed., p. 19; topic 5 point 1.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 5 point 1",
            "pages": [
              19
            ],
            "points": [
              "capsule-t05-p019-n1"
            ]
          },
          "topic": "ACiE0501",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00002",
          "src": "CAP4-05-00002",
          "text": "For a specified uniform snow case under IS 875 Part 4:1987, ground snow load is 2.4 kN/m<sup>2</sup> and the applicable roof-shape coefficient is 0.75. What vertical snow intensity acts on roof plan area?",
          "options": [
            {
              "key": "a",
              "text": "0.75 kN/m<sup>2</sup>"
            },
            {
              "key": "b",
              "text": "1.80 kN/m<sup>2</sup>"
            },
            {
              "key": "c",
              "text": "2.40 kN/m<sup>2</sup>"
            },
            {
              "key": "d",
              "text": "3.20 kN/m<sup>2</sup>"
            }
          ],
          "answer": "b",
          "explanation": "The specified relation is S = mu S0, so S = 0.75 x 2.4 = 1.80 kN/m<sup>2</sup> of horizontal plan area. The coefficient is dimensionless; it is neither an added pressure nor a divisor. Other required drift or unbalanced cases are separate checks.<p>Capsule 4th ed., p. 19; topic 5 point 2.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 5 point 2",
            "pages": [
              19
            ],
            "points": [
              "capsule-t05-p019-n2"
            ]
          },
          "topic": "ACiE0501",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00003",
          "src": "CAP4-05-00003",
          "text": "A roof-truss schedule assigns 2.5 N/m<sup>2</sup> as snow load to every site. Under IS 875 Part 4:1987, which information is needed to replace this unsupported entry?",
          "options": [
            {
              "key": "a",
              "text": "Roof dead weight and the steel partial safety factor"
            },
            {
              "key": "b",
              "text": "Floor occupancy and the imposed-load reduction factor"
            },
            {
              "key": "c",
              "text": "Ground snow loading and roof-shape/distribution factors"
            },
            {
              "key": "d",
              "text": "Basic wind speed and the external pressure coefficient"
            }
          ],
          "answer": "c",
          "explanation": "IS 875 Part 4:1987 clause 3.1 uses roof snow load S = mu S0 on horizontal plan area. Site ground snow load and the applicable roof shape and distribution are needed. Changing the printed unit from N to kN would not establish a valid universal snow load.<p>Source note: Page 19 point 3 has an unsupported site-independent snow intensity. No replacement numerical snow value is inferred.</p><p>Capsule 4th ed., p. 19; topic 5 point 3.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 5 point 3",
            "pages": [
              19
            ],
            "points": [
              "capsule-t05-p019-n3"
            ]
          },
          "topic": "ACiE0501",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00004",
          "src": "CAP4-05-00004",
          "text": "A concrete floor's own weight remains present throughout its service life. In the IS 800:2007 action classification, how is this action normally classified?",
          "options": [
            {
              "key": "a",
              "text": "Construction-only action"
            },
            {
              "key": "b",
              "text": "Variable occupancy action"
            },
            {
              "key": "c",
              "text": "Permanent action"
            },
            {
              "key": "d",
              "text": "Accidental impact action"
            }
          ],
          "answer": "c",
          "explanation": "Self-weight is a permanent action under IS 800:2007 clause 5.3.1. It persists during service, unlike changing occupancy. Permanent classification does not mean that uncertainty in dimensions or unit weight is ignored.<p>Capsule 4th ed., p. 19; topic 5 point 4.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 5 point 4",
            "pages": [
              19
            ],
            "points": [
              "capsule-t05-p019-n4"
            ]
          },
          "topic": "ACiE0501",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00005",
          "src": "CAP4-05-00005",
          "text": "A classroom floor supports a screed, fixed ceiling and students taking an examination. Which contribution belongs to occupancy imposed load rather than dead load?",
          "options": [
            {
              "key": "a",
              "text": "Weight of the floor screed"
            },
            {
              "key": "b",
              "text": "Weight of the fixed ceiling"
            },
            {
              "key": "c",
              "text": "Weight of the students"
            },
            {
              "key": "d",
              "text": "Weight of the concrete slab"
            }
          ],
          "answer": "c",
          "explanation": "People using the classroom produce occupancy imposed load; they are not permanent parts of the building. The slab, screed and fixed ceiling contribute to the permanent dead-load schedule.<p>Capsule 4th ed., p. 19; topic 5 point 5.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 5 point 5",
            "pages": [
              19
            ],
            "points": [
              "capsule-t05-p019-n5"
            ]
          },
          "topic": "ACiE0501",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00006",
          "src": "CAP4-05-00006",
          "text": "Which part of IS 875:1987 supplies material unit weights for estimating the self-weight of walls and floor finishes?",
          "options": [
            {
              "key": "a",
              "text": "Part 1: Dead loads"
            },
            {
              "key": "b",
              "text": "Part 4: Snow loads"
            },
            {
              "key": "c",
              "text": "Part 2: Imposed loads"
            },
            {
              "key": "d",
              "text": "Part 5: Special loads and combinations"
            }
          ],
          "answer": "a",
          "explanation": "IS 875 Part 1:1987 covers dead loads and unit weights. A designer combines appropriate weights with actual dimensions; a blanket description such as 'conservative dead load' does not replace that calculation.<p>Capsule 4th ed., p. 19; topic 5 point 6.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 5 point 6",
            "pages": [
              19
            ],
            "points": [
              "capsule-t05-p019-n6"
            ]
          },
          "topic": "ACiE0501",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00007",
          "src": "CAP4-05-00007",
          "text": "Movable stock is transferred between bays of a warehouse. Why may checking only one full-floor imposed-load pattern miss a governing member action?",
          "options": [
            {
              "key": "a",
              "text": "Relocating stock changes dead load rather than imposed load"
            },
            {
              "key": "b",
              "text": "Imposed load can change both magnitude and position"
            },
            {
              "key": "c",
              "text": "Imposed load changes magnitude but its position remains fixed"
            },
            {
              "key": "d",
              "text": "Full-floor loading must maximize every member action"
            }
          ],
          "answer": "b",
          "explanation": "Occupancy and movable stock vary in amount and location. Pattern loading can govern moments or reactions, especially in continuous systems, so a single uniformly loaded arrangement need not envelope every response.<p>Capsule 4th ed., p. 19; topic 5 point 7.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 5 point 7",
            "pages": [
              19
            ],
            "points": [
              "capsule-t05-p019-n7"
            ]
          },
          "topic": "ACiE0501",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00008",
          "src": "CAP4-05-00008",
          "text": "An engineer needs the occupancy-based distributed and concentrated floor loads in the 1987 IS 875 series. Which part should be consulted?",
          "options": [
            {
              "key": "a",
              "text": "Part 1"
            },
            {
              "key": "b",
              "text": "Part 3"
            },
            {
              "key": "c",
              "text": "Part 4"
            },
            {
              "key": "d",
              "text": "Part 2"
            }
          ],
          "answer": "d",
          "explanation": "IS 875 Part 2:1987 deals with imposed loads, including occupancy-related floor loading. Part 1 concerns dead loads, Part 3 wind and Part 4 snow; these actions cannot be substituted for one another.<p>Capsule 4th ed., p. 19; topic 5 point 8.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 5 point 8",
            "pages": [
              19
            ],
            "points": [
              "capsule-t05-p019-n8"
            ]
          },
          "topic": "ACiE0501",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00009",
          "src": "CAP4-05-00009",
          "text": "With air-density basis and pressure coefficients unchanged, design wind speed rises by 20%. By what percentage does the corresponding velocity pressure rise?",
          "options": [
            {
              "key": "a",
              "text": "40%"
            },
            {
              "key": "b",
              "text": "44%"
            },
            {
              "key": "c",
              "text": "64%"
            },
            {
              "key": "d",
              "text": "20%"
            }
          ],
          "answer": "b",
          "explanation": "Velocity pressure is proportional to speed squared. The pressure ratio is 1.20 squared = 1.44, giving a 44% increase. Doubling the percentage increase misses the additional quadratic term.<p>Capsule 4th ed., p. 19; topic 5 point 9.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 5 point 9",
            "pages": [
              19
            ],
            "points": [
              "capsule-t05-p019-n9"
            ]
          },
          "topic": "ACiE0501",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00010",
          "src": "CAP4-05-00010",
          "text": "In the Nepal amendments of NBC 104:1994, which basic wind speed is assigned to the higher-hill and mountain zone that includes areas above 3000 m?",
          "options": [
            {
              "key": "a",
              "text": "33 m/s"
            },
            {
              "key": "b",
              "text": "47 m/s"
            },
            {
              "key": "c",
              "text": "55 m/s"
            },
            {
              "key": "d",
              "text": "39 m/s"
            }
          ],
          "answer": "c",
          "explanation": "NBC 104:1994 identifies the higher zone with 55 m/s and the lower zone with 47 m/s. This is a basic-speed classification: actual site assignment also respects the geographical description and special windy areas, and design-speed factors still apply.<p>Source note: Page 19 point 10 is retained only with NBC 104:1994 attribution; elevation alone is not the complete site-assignment rule.</p><p>Capsule 4th ed., p. 19; topic 5 point 10.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 5 point 10",
            "pages": [
              19
            ],
            "points": [
              "capsule-t05-p019-n10"
            ]
          },
          "topic": "ACiE0501",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00013",
          "src": "CAP4-05-00013",
          "text": "During horizontal ground acceleration, a building's floor masses develop horizontal inertia forces. Which action must its vertical lateral-resisting system transfer toward the foundation?",
          "options": [
            {
              "key": "a",
              "text": "Overturning moment with no associated storey shear"
            },
            {
              "key": "b",
              "text": "Vertical inertia only, despite horizontal acceleration"
            },
            {
              "key": "c",
              "text": "Gravity axial force only, without lateral demand"
            },
            {
              "key": "d",
              "text": "Storey shear associated with those inertia forces"
            }
          ],
          "answer": "d",
          "explanation": "Floor inertia is transmitted through diaphragms and the lateral-resisting system as storey shear, bending and associated axial effects. Earthquakes can also have vertical components; horizontal shear is important but is not their only structural effect.<p>Capsule 4th ed., p. 20; topic 5 point 13.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 13",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n13"
            ]
          },
          "topic": "ACiE0501",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00087",
          "src": "CAP4-05-00087",
          "text": "For the non-parallel lateral-system condition in IS 1893 Part 1:2016 clause 6.3.2.2, which horizontal directional combination procedure is required?",
          "options": [
            {
              "key": "a",
              "text": "50% of each effect, with neither axis ever taken at its full design value"
            },
            {
              "key": "b",
              "text": "100% of one effect with 30% of the other, interchanging axes and adverse signs"
            },
            {
              "key": "c",
              "text": "100% of one effect with 30% of the other, using only the first axis and positive signs"
            },
            {
              "key": "d",
              "text": "100% of each effect added together in only one fixed positive direction"
            }
          ],
          "answer": "b",
          "explanation": "The specified procedure considers the 100/30 combinations in both axis orders and the signs that maximize the response being checked. It is not a licence to check only one positive combination or to omit gravity and any other required seismic components.<p>Capsule 4th ed., p. 22; topic 5 point 87.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 87",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n87"
            ]
          },
          "topic": "ACiE0501",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00088",
          "src": "CAP4-05-00088",
          "text": "For one member, separate horizontal earthquake cases produce axial-effect magnitudes of 80 kN and 30 kN. Applying both 100/30 axis orders with adverse signs, what is the largest positive seismic effect?",
          "options": [
            {
              "key": "a",
              "text": "54 kN"
            },
            {
              "key": "b",
              "text": "89 kN"
            },
            {
              "key": "c",
              "text": "110 kN"
            },
            {
              "key": "d",
              "text": "77 kN"
            }
          ],
          "answer": "b",
          "explanation": "The two positive envelopes are 80 + 0.30 x 30 = 89 kN and 0.30 x 80 + 30 = 54 kN. Their maximum is 89 kN. Signed alternatives must also be considered for opposite response; this calculation excludes any gravity contribution.<p>Capsule 4th ed., p. 22; topic 5 point 87.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 87",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n87"
            ]
          },
          "topic": "ACiE0501",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00102",
          "src": "CAP4-05-00102",
          "text": "Which permanent building action is also a gravity load in an ordinary load schedule?",
          "options": [
            {
              "key": "a",
              "text": "Horizontal ground-acceleration inertia"
            },
            {
              "key": "b",
              "text": "Restrained shrinkage in a floor slab"
            },
            {
              "key": "c",
              "text": "Wind suction on roof cladding"
            },
            {
              "key": "d",
              "text": "Self-weight of a fixed concrete wall"
            }
          ],
          "answer": "d",
          "explanation": "Self-weight acts through gravity and is normally a permanent dead load. 'Permanent' and 'gravity' describe different aspects of an action; an imposed occupancy load may also act vertically through gravity without being permanent.<p>Capsule 4th ed., p. 22; topic 5 point 101.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 101",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n101"
            ]
          },
          "topic": "ACiE0501",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00113",
          "src": "CAP4-05-00113",
          "text": "A rigid floor translates without torsion and transfers 120 kN horizontal storey shear to two parallel vertical frames with lateral stiffnesses 3k and k. In the linear-elastic model, how is that shear shared?",
          "options": [
            {
              "key": "a",
              "text": "30 kN and 90 kN"
            },
            {
              "key": "b",
              "text": "60 kN and 60 kN"
            },
            {
              "key": "c",
              "text": "120 kN and 40 kN"
            },
            {
              "key": "d",
              "text": "90 kN and 30 kN"
            }
          ],
          "answer": "d",
          "explanation": "Equal floor translation makes each frame force proportional to its lateral stiffness. The shares are 3/4 and 1/4 of 120 kN, giving 90 and 30 kN. Torsion, diaphragm flexibility or nonlinear response would require a different distribution model.<p>Source note: Page 22 point 111&#39;s &#39;proportion ... vertical structure is 31&#39; is unresolved: it may be damaged fraction text or omit a component definition. This explicitly introduced example tests transfer to vertical resisting frames, not an asserted universal vertical-seismic fraction; parent review required for the original claim.</p><p>Capsule 4th ed., p. 22; topic 5 point 111.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 111",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n111"
            ]
          },
          "topic": "ACiE0501",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00131",
          "src": "CAP4-05-00131",
          "text": "In the IS 875 Part 3:1987 velocity-pressure procedure, Vb = 50 m/s, k1 = k3 = 1 and the applicable terrain-height-size factor k2 = 1.2. What pressure pz = 0.6Vz squared results?",
          "options": [
            {
              "key": "a",
              "text": "3.00 kPa"
            },
            {
              "key": "b",
              "text": "1.50 kPa"
            },
            {
              "key": "c",
              "text": "1.80 kPa"
            },
            {
              "key": "d",
              "text": "2.16 kPa"
            }
          ],
          "answer": "d",
          "explanation": "Design speed is Vz = 50 x 1 x 1.2 x 1 = 60 m/s. Hence pz = 0.6 x 60 squared = 2160 Pa = 2.16 kPa. Terrain, height and structure size affect the relevant factor; final surface forces additionally require pressure coefficients and area.<p>Source note: Page 23 point 132 falsely makes wind pressure independent of terrain and structure factors. The explicitly stated 1987 procedure corrects that claim without mixing later-edition factors.</p><p>Capsule 4th ed., p. 23; topic 5 point 132.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 132",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n132"
            ]
          },
          "topic": "ACiE0501",
          "kind": "calculation"
        },
        {
          "id": "CAP4-10-00191",
          "src": "CAP4-10-00191",
          "text": "A 100 m flexible trail bridge lies at an exposed windy site. Why is span below 120 m alone insufficient to justify omitting wind guys?",
          "options": [
            {
              "key": "a",
              "text": "Pedestrian loading automatically cancels all lateral wind forces"
            },
            {
              "key": "b",
              "text": "Lateral and dynamic wind behaviour depends on the bridge system and site"
            },
            {
              "key": "c",
              "text": "Wind loads vanish whenever span is less than 120 m"
            },
            {
              "key": "d",
              "text": "Cable self-weight makes every short bridge dynamically stable"
            }
          ],
          "answer": "b",
          "explanation": "Wind resistance and stability depend on geometry, stiffness, exposure, aerodynamic response and the applicable standard design. A no-wind-guy span rule may apply only to a particular system under specified conditions.<p>Source note: Appendix p42 n15: no universal exemption up to 120 m endorsed; parent should verify the named trail-bridge manual, type and wind conditions.</p><p>Capsule 4th ed., p. 42; rural point 15.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 42; rural point 15",
            "pages": [
              42
            ],
            "points": [
              "capsule-t10-p042-n15"
            ]
          },
          "topic": "ACiE0501",
          "kind": "application"
        }
      ]
    },
    {
      "id": "ACiE0502",
      "name": "Concrete technology",
      "subject": "Design of Structures",
      "questions": [
        {
          "id": "CAP4-01-00040",
          "src": "CAP4-01-00040",
          "text": "An M20 concrete cube gives 12.5 MPa at seven days. What can be concluded from the grade designation alone?",
          "options": [
            {
              "key": "a",
              "text": "The cube necessarily passes because every M20 mix has a 12.5 MPa minimum at seven days"
            },
            {
              "key": "b",
              "text": "The cube necessarily fails because M20 requires 20 MPa at seven days"
            },
            {
              "key": "c",
              "text": "The result alone does not establish 28-day grade compliance"
            },
            {
              "key": "d",
              "text": "The result reclassifies the concrete permanently as grade M12.5"
            }
          ],
          "answer": "c",
          "explanation": "M20 refers to a characteristic 28-day cube strength of 20 MPa. A seven-day result is an early indicator whose interpretation depends on the mix and specified acceptance procedure; 12.5 MPa is not a universal seven-day minimum.<p>Source note: p2 n39: rejected the fixed seven-day minimum and retained grade versus early-strength interpretation.</p><p>Capsule 4th ed., p. 2; topic 1 point 39.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 2; topic 1 point 39",
            "pages": [
              2
            ],
            "points": [
              "capsule-t01-p002-n39"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-01-00041",
          "src": "CAP4-01-00041",
          "text": "If a trial mix gives 12.5 MPa at seven days and its comparison strength is 20 MPa, what percentage of that comparison value has been reached?",
          "options": [
            {
              "key": "a",
              "text": "67.0%"
            },
            {
              "key": "b",
              "text": "37.5%"
            },
            {
              "key": "c",
              "text": "62.5%"
            },
            {
              "key": "d",
              "text": "160.0%"
            }
          ],
          "answer": "c",
          "explanation": "The ratio is 100 x 12.5/20 = 62.5%. This arithmetic does not turn the ratio into a mandatory strength-development law or a concrete acceptance criterion.<p>Capsule 4th ed., p. 2; topic 1 point 39.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 2; topic 1 point 39",
            "pages": [
              2
            ],
            "points": [
              "capsule-t01-p002-n39"
            ]
          },
          "topic": "ACiE0502",
          "kind": "calculation"
        },
        {
          "id": "CAP4-01-00042",
          "src": "CAP4-01-00042",
          "text": "Which concrete test destroys the tested specimen by loading it to failure?",
          "options": [
            {
              "key": "a",
              "text": "Cube compression test"
            },
            {
              "key": "b",
              "text": "Ultrasonic pulse-velocity test"
            },
            {
              "key": "c",
              "text": "Electromagnetic cover survey"
            },
            {
              "key": "d",
              "text": "Rebound-hammer test"
            }
          ],
          "answer": "a",
          "explanation": "The compression test crushes the specimen to determine its failure load. Rebound and ultrasonic methods are indirect nondestructive assessments, while a cover survey locates reinforcement rather than measuring failure strength.<p>Capsule 4th ed., p. 2; topic 1 point 40.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 2; topic 1 point 40",
            "pages": [
              2
            ],
            "points": [
              "capsule-t01-p002-n40"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-01-00135",
          "src": "CAP4-01-00135",
          "text": "Why must newly placed concrete be cured even when there is no unusually large temperature gradient?",
          "options": [
            {
              "key": "a",
              "text": "To replace compaction by later surface wetting"
            },
            {
              "key": "b",
              "text": "To remove hydration water as quickly as possible"
            },
            {
              "key": "c",
              "text": "To maintain moisture and temperature suitable for hydration"
            },
            {
              "key": "d",
              "text": "To stop all cement-water reactions after initial set"
            }
          ],
          "answer": "c",
          "explanation": "Curing maintains conditions that allow hydration and strength development and limits premature moisture loss. Thermal control can be part of curing, but reducing heat loss alone is not its general primary definition.<p>Source note: p5 n129: corrected the general curing purpose; the source describes only part of a thermal-control strategy.</p><p>Capsule 4th ed., p. 5; topic 1 point 129.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 5; topic 1 point 129",
            "pages": [
              5
            ],
            "points": [
              "capsule-t01-p005-n129"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-01-00136",
          "src": "CAP4-01-00136",
          "text": "An insulating curing blanket is used on a large concrete pour whose core remains hot. What can controlled insulation help reduce?",
          "options": [
            {
              "key": "a",
              "text": "The entire heat of hydration generated in the core"
            },
            {
              "key": "b",
              "text": "The need to monitor maximum concrete temperature"
            },
            {
              "key": "c",
              "text": "Rapid surface cooling and core-to-surface temperature difference"
            },
            {
              "key": "d",
              "text": "All shrinkage regardless of moisture conditions"
            }
          ],
          "answer": "c",
          "explanation": "Insulation can moderate surface cooling and the thermal gradient that promotes cracking. It does not eliminate heat generation and must be coordinated with temperature limits, monitoring and moisture-retention measures.<p>Capsule 4th ed., p. 5; topic 1 point 129.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 5; topic 1 point 129",
            "pages": [
              5
            ],
            "points": [
              "capsule-t01-p005-n129"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-01-00143",
          "src": "CAP4-01-00143",
          "text": "In a true slump test, a mould is 300 mm high and the displaced original centre of the concrete's top is 225 mm above the base after lifting. What slump should be reported?",
          "options": [
            {
              "key": "a",
              "text": "300 mm"
            },
            {
              "key": "b",
              "text": "525 mm"
            },
            {
              "key": "c",
              "text": "75 mm"
            },
            {
              "key": "d",
              "text": "225 mm"
            }
          ],
          "answer": "c",
          "explanation": "Slump is the vertical reduction from mould height to the prescribed point on the slumped specimen: 300 - 225 = 75 mm. It is a length, normally reported in millimetres, not a strength or percentage.<p>Capsule 4th ed., p. 5; topic 1 point 136.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 5; topic 1 point 136",
            "pages": [
              5
            ],
            "points": [
              "capsule-t01-p005-n136"
            ]
          },
          "topic": "ACiE0502",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00083",
          "src": "CAP4-04-00083",
          "text": "Using the IS 456:2000 clause 6.2.2 estimate, what flexural strength corresponds to characteristic cube strength fck = 36 N/mm^2?",
          "options": [
            {
              "key": "a",
              "text": "6.0 N/mm^2"
            },
            {
              "key": "b",
              "text": "4.2 N/mm^2"
            },
            {
              "key": "c",
              "text": "25.2 N/mm^2"
            },
            {
              "key": "d",
              "text": "30.0 N/mm^2"
            }
          ],
          "answer": "b",
          "explanation": "The empirical relation is fcr = 0.7 sqrt(fck), with both strengths expressed in N/mm^2. Thus fcr = 0.7 x 6 = 4.2 N/mm^2. Multiplying 0.7 by fck without the square root gives the incorrect 25.2; flexural strength is also distinct from elastic modulus.<p>Source note: Restores the missing square root in point 83. Secondary reference: chapter-05-concrete.js, concrete-elastic-and-flexural-properties, IS 456:2000 6.2.2.</p><p>Capsule 4th ed., p. 18; topic 4 point 83.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 83",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n83"
            ]
          },
          "topic": "ACiE0502",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00084",
          "src": "CAP4-04-00084",
          "text": "A concrete test pulls an embedded headed insert against a surface reaction ring until local failure occurs. How should this result normally be interpreted?",
          "options": [
            {
              "key": "a",
              "text": "A pullout resistance requiring correlation for compressive strength"
            },
            {
              "key": "b",
              "text": "A direct uniaxial tensile strength from force divided by insert area"
            },
            {
              "key": "c",
              "text": "A splitting tensile strength from a diametrically loaded cylinder"
            },
            {
              "key": "d",
              "text": "A flexural tensile strength from the maximum beam moment"
            }
          ],
          "answer": "a",
          "explanation": "The embedded-insert pullout test creates a complex local failure field; its measured resistance can be correlated with in-place compressive strength. It is not a uniform direct-tension specimen test. Pull-off surface tensile tests, splitting tests and flexural tests are separate procedures.<p>Source note: Point 84 is restricted to embedded-insert concrete strength assessment, not every test informally called pullout.</p><p>Capsule 4th ed., p. 18; topic 4 point 84.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 84",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n84"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-04-00087",
          "src": "CAP4-04-00087",
          "text": "A concrete specimen under sustained compressive stress continues shortening after its immediate elastic shortening; a matched unloaded specimen is used to subtract shrinkage. What does the additional load-dependent strain represent?",
          "options": [
            {
              "key": "a",
              "text": "Drying shrinkage"
            },
            {
              "key": "b",
              "text": "Instantaneous elastic strain"
            },
            {
              "key": "c",
              "text": "Creep"
            },
            {
              "key": "d",
              "text": "Stress relaxation at fixed strain"
            }
          ],
          "answer": "c",
          "explanation": "Creep is additional time-dependent strain under sustained stress, distinct from immediate elastic strain and unloaded shrinkage. Stress relaxation instead describes decreasing stress under a prescribed strain. Creep can include recoverable and irreversible components, so calling all of it plastic strain is too restrictive.<p>Source note: Corrects point 87&#39;s blanket plastic-strain description and states sustained stress rather than assuming constant force always gives constant true stress.</p><p>Capsule 4th ed., p. 18; topic 4 point 87.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 87",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n87"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-04-00101",
          "src": "CAP4-04-00101",
          "text": "A stated laboratory procedure requires compressive stress to increase at 14 N/mm^2 per minute on a 150 mm cube. What machine load-increase rate corresponds to that specified stress rate?",
          "options": [
            {
              "key": "a",
              "text": "315 kN/s"
            },
            {
              "key": "b",
              "text": "0.35 kN/s"
            },
            {
              "key": "c",
              "text": "21.0 kN/s"
            },
            {
              "key": "d",
              "text": "5.25 kN/s"
            }
          ],
          "answer": "d",
          "explanation": "The loaded area is 150 x 150 = 22500 mm^2. Required force rate is 14 x 22500 = 315000 N/min = 315 kN/min. Dividing by 60 gives 5.25 kN/s. The rate is a given procedure input here, not a certification that every current compression-test standard specifies it.<p>Source note: Page 18 point 101 gives no test standard or edition. Its 14 MPa/min is used only as an explicit input; current procedural applicability remains for parent verification.</p><p>Capsule 4th ed., p. 18; topic 4 point 101.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 101",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n101"
            ]
          },
          "topic": "ACiE0502",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00014",
          "src": "CAP4-05-00014",
          "text": "A narrow duct is filled with a specified neat cement grout. Which constituent distinguishes that grout from a sanded cement grout?",
          "options": [
            {
              "key": "a",
              "text": "Cement is absent from the neat grout"
            },
            {
              "key": "b",
              "text": "Fine aggregate is absent from the neat grout"
            },
            {
              "key": "c",
              "text": "Water is absent from the neat grout"
            },
            {
              "key": "d",
              "text": "Coarse aggregate is essential in the neat grout"
            }
          ],
          "answer": "b",
          "explanation": "Neat cement grout uses cement and water, with suitable admixtures where specified; sanded grout also contains fine aggregate. Therefore water, cement and sand describe a possible grout, not the mandatory composition of every grout.<p>Source note: Page 20 point 14 is overgeneralized; neat and sanded cement grouts are distinguished.</p><p>Capsule 4th ed., p. 20; topic 5 point 14.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 14",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n14"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00015",
          "src": "CAP4-05-00015",
          "text": "Two otherwise comparable concrete batches are fully compacted and equally cured. The second receives extra water at unchanged cement mass after adequate workability was already achieved. What strength trend is expected?",
          "options": [
            {
              "key": "a",
              "text": "Higher strength from a larger cement quantity"
            },
            {
              "key": "b",
              "text": "Lower strength from increased capillary porosity"
            },
            {
              "key": "c",
              "text": "Higher strength because bleeding improves bonding"
            },
            {
              "key": "d",
              "text": "Unchanged strength because compaction is complete"
            }
          ],
          "answer": "b",
          "explanation": "Unnecessary water increases the water-cement ratio and leaves more capillary pore space after hydration and drying, generally reducing strength. The stated compaction and curing conditions prevent poor consolidation from confusing this comparison.<p>Capsule 4th ed., p. 20; topic 5 point 15.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 15",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n15"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00016",
          "src": "CAP4-05-00016",
          "text": "An aggregate is at saturated-surface-dry condition. Which description of its water is correct for concrete batching?",
          "options": [
            {
              "key": "a",
              "text": "Permeable pores filled; no free surface water"
            },
            {
              "key": "b",
              "text": "Permeable pores filled; excess surface water present"
            },
            {
              "key": "c",
              "text": "Permeable pores partly filled; surface water absent"
            },
            {
              "key": "d",
              "text": "Permeable pores empty; no free surface water"
            }
          ],
          "answer": "a",
          "explanation": "SSD aggregate has filled permeable pores but no excess moisture on its surface. It is a convenient mix-proportioning reference; actual aggregate may be drier or wetter and then needs batch-mass and mixing-water corrections.<p>Source note: Page 20 point 16 does not require all delivered aggregate to be physically SSD.</p><p>Capsule 4th ed., p. 20; topic 5 point 16.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 16",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n16"
            ]
          },
          "topic": "ACiE0502",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00017",
          "src": "CAP4-05-00017",
          "text": "A mix requires 102 kg of SSD fine aggregate. Absorption is 2% and actual moisture is 5%, both on oven-dry mass. What aggregate mass and free-water correction should be used?",
          "options": [
            {
              "key": "a",
              "text": "105 kg aggregate; reduce added water by 3 kg"
            },
            {
              "key": "b",
              "text": "105 kg aggregate; increase added water by 3 kg"
            },
            {
              "key": "c",
              "text": "102 kg aggregate; reduce added water by 5 kg"
            },
            {
              "key": "d",
              "text": "107.1 kg aggregate; reduce added water by 5.1 kg"
            }
          ],
          "answer": "a",
          "explanation": "Dry aggregate mass is 102/1.02 = 100 kg. Wet batch mass is 100 x 1.05 = 105 kg, and free surface water is 100 x (0.05 - 0.02) = 3 kg. Deduct that free water from the water otherwise added to the mixer.<p>Capsule 4th ed., p. 20; topic 5 point 16.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 16",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n16"
            ]
          },
          "topic": "ACiE0502",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00018",
          "src": "CAP4-05-00018",
          "text": "For reinforced concrete in mild exposure under IS 456:2000 Table 5, what minimum concrete grade applies before any higher strength or durability demand is considered?",
          "options": [
            {
              "key": "a",
              "text": "M10"
            },
            {
              "key": "b",
              "text": "M20"
            },
            {
              "key": "c",
              "text": "M25"
            },
            {
              "key": "d",
              "text": "M15"
            }
          ],
          "answer": "b",
          "explanation": "Table 5 gives M20 as the minimum grade for reinforced concrete in mild exposure. Exposure and structural design may demand a higher grade. Being a roof slab does not make one nominal mix sufficient for all loading and environmental conditions.<p>Source note: Page 20 point 17 conflates a concrete grade with a universally required nominal roofing mix. The question specifies exposure and edition.</p><p>Capsule 4th ed., p. 20; topic 5 point 17.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 17",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n17"
            ]
          },
          "topic": "ACiE0502",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00019",
          "src": "CAP4-05-00019",
          "text": "Why should bagged cement in a site store be kept on a raised dry platform rather than directly on the floor?",
          "options": [
            {
              "key": "a",
              "text": "To promote early hydration and improve bagged strength"
            },
            {
              "key": "b",
              "text": "To limit moisture uptake and premature hydration"
            },
            {
              "key": "c",
              "text": "To replace the need for a weatherproof enclosure"
            },
            {
              "key": "d",
              "text": "To let rising floor moisture pre-condition the cement"
            }
          ],
          "answer": "b",
          "explanation": "Contact with a damp floor can cause moisture absorption, lump formation and premature hydration. A raised dry platform helps preserve cement quality, but protection from rain, wall dampness and prolonged storage is still necessary.<p>Capsule 4th ed., p. 20; topic 5 point 18.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 18",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n18"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00020",
          "src": "CAP4-05-00020",
          "text": "Under IS 456:2000 clause 5.4, how should a proposed non-potable source of concrete mixing water be assessed?",
          "options": [
            {
              "key": "a",
              "text": "Check specified impurity and performance requirements"
            },
            {
              "key": "b",
              "text": "Reject it solely because it is not drinking water"
            },
            {
              "key": "c",
              "text": "Accept it after adding extra cement without testing"
            },
            {
              "key": "d",
              "text": "Accept it whenever it looks clear and colourless"
            }
          ],
          "answer": "a",
          "explanation": "Potable water is generally considered satisfactory, but the provision also allows assessment against specified limits and comparative setting and strength requirements. Appearance alone cannot reveal harmful dissolved substances or establish suitability.<p>Capsule 4th ed., p. 20; topic 5 point 19.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 19",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n19"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00023",
          "src": "CAP4-05-00023",
          "text": "Which concrete would normally give the most useful conventional slump result for routine consistency control?",
          "options": [
            {
              "key": "a",
              "text": "A very fluid mix collapsing completely"
            },
            {
              "key": "b",
              "text": "A segregating mix giving a shear slump"
            },
            {
              "key": "c",
              "text": "A cohesive plastic mix giving a true slump"
            },
            {
              "key": "d",
              "text": "A very dry mix retaining the mould shape"
            }
          ],
          "answer": "c",
          "explanation": "The conventional slump test is most informative for a cohesive plastic concrete that produces a true slump. Cement richness alone is not a sufficient criterion; very stiff, shearing or collapsing mixes may require another appropriate assessment.<p>Source note: Page 20 point 21 is qualified by consistency and cohesion rather than cement richness alone.</p><p>Capsule 4th ed., p. 20; topic 5 point 21.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 21",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n21"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00024",
          "src": "CAP4-05-00024",
          "text": "Two concrete batches have equal measured slump. What can be concluded without further tests?",
          "options": [
            {
              "key": "a",
              "text": "Their water-cement ratios and aggregate grading must be identical"
            },
            {
              "key": "b",
              "text": "Their compressive strengths and durability must be identical"
            },
            {
              "key": "c",
              "text": "Their segregation resistance and passing ability must be identical"
            },
            {
              "key": "d",
              "text": "Their measured consistency is similar, not necessarily their full workability"
            }
          ],
          "answer": "d",
          "explanation": "Slump directly indicates consistency and is used as an indicator within workability control. Workability also includes cohesion, placement and compaction behaviour; equal slump does not prove equal strength, mix proportions or resistance to segregation.<p>Source note: Page 20 points 22 and 23 describe the same test; this combined item distinguishes direct consistency measurement from broader workability.</p><p>Capsule 4th ed., p. 20; topic 5 point 22; topic 5 point 23.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 22; topic 5 point 23",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n22",
              "capsule-t05-p020-n23"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00025",
          "src": "CAP4-05-00025",
          "text": "A trial mix has a slump above 50 mm and is to be mechanically vibrated in congested reinforcement. Which decision is technically justified?",
          "options": [
            {
              "key": "a",
              "text": "Omit vibration solely because the slump exceeds 50 mm"
            },
            {
              "key": "b",
              "text": "Reject every vibrated mix above 50 mm regardless of specification"
            },
            {
              "key": "c",
              "text": "Assess specified consistency, cohesion and placement requirements"
            },
            {
              "key": "d",
              "text": "Increase water until vibration cannot change the surface"
            }
          ],
          "answer": "c",
          "explanation": "There is no universal 50 mm maximum for all vibrated concrete. Required consistency depends on the member, congestion and placement process, while vibration must avoid segregation. A suitable admixture can produce higher slump without excessive water.<p>Source note: Page 20 point 24&#39;s blanket 5 cm ceiling is not retained as a general code requirement.</p><p>Capsule 4th ed., p. 20; topic 5 point 24.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 24",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n24"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00030",
          "src": "CAP4-05-00030",
          "text": "A contractor claims that a very low water-cement ratio guarantees strong concrete even when the mix cannot be consolidated. What is the flaw in that argument?",
          "options": [
            {
              "key": "a",
              "text": "Strength depends on cement mass alone once the ratio is low"
            },
            {
              "key": "b",
              "text": "Entrapped voids can offset the benefit of the lower ratio"
            },
            {
              "key": "c",
              "text": "The ratio-strength relation remains sufficient despite large voids"
            },
            {
              "key": "d",
              "text": "Reduced mixing water compensates exactly for any compaction loss"
            }
          ],
          "answer": "b",
          "explanation": "Water-cement ratio is a major strength variable, but only with adequate mixing, placement, compaction and curing. A harsh poorly consolidated mix can retain large voids and lose strength despite its low nominal water-cement ratio.<p>Capsule 4th ed., p. 20; topic 5 point 29.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 29",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n29"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00031",
          "src": "CAP4-05-00031",
          "text": "What is the principal purpose of properly controlled vibration during placement of ordinary concrete?",
          "options": [
            {
              "key": "a",
              "text": "Evaporate enough water to set the cement immediately"
            },
            {
              "key": "b",
              "text": "Expel entrapped air and consolidate around reinforcement"
            },
            {
              "key": "c",
              "text": "Separate coarse aggregate from the mortar fraction"
            },
            {
              "key": "d",
              "text": "Remove all intentionally entrained microscopic air"
            }
          ],
          "answer": "b",
          "explanation": "Compaction removes unwanted entrapped air and closes voids around aggregate, bars and formwork. It is not intended to segregate the mix or destroy all deliberately entrained air; excessive vibration can harm uniformity.<p>Capsule 4th ed., p. 20; topic 5 point 30.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 30",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n30"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00032",
          "src": "CAP4-05-00032",
          "text": "Standard cylinders and cubes made from the same concrete give different compressive strengths. Why is cylinder strength generally lower under comparable testing conditions?",
          "options": [
            {
              "key": "a",
              "text": "A fixed material safety factor is applied only to cylinder results"
            },
            {
              "key": "b",
              "text": "Specimen geometry changes platen-restraint influence"
            },
            {
              "key": "c",
              "text": "Cube and cylinder strengths use different curing ages by definition"
            },
            {
              "key": "d",
              "text": "Cylinder loaded area alone explains a smaller calculated stress"
            }
          ],
          "answer": "b",
          "explanation": "The cylinder's greater height-to-width ratio leaves more of the specimen away from end restraint. Friction at loading platens confines a larger proportion of a cube, raising its apparent compressive strength. No single conversion factor is exact for all concretes.<p>Capsule 4th ed., p. 20; topic 5 point 31.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 31",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n31"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00034",
          "src": "CAP4-05-00034",
          "text": "Concrete mixing water has pH 5.5. Under IS 456:2000 clause 5.4, how does it compare with the stated pH requirement?",
          "options": [
            {
              "key": "a",
              "text": "It is below the minimum pH of 6"
            },
            {
              "key": "b",
              "text": "It exceeds the maximum pH of 5"
            },
            {
              "key": "c",
              "text": "It satisfies a required pH range of 5 to 6"
            },
            {
              "key": "d",
              "text": "It is acceptable because pH is not considered"
            }
          ],
          "answer": "a",
          "explanation": "IS 456:2000 requires pH not less than 6, so 5.5 fails that requirement. Passing the pH check alone would not establish suitability: the other impurity, setting and strength provisions remain relevant.<p>Capsule 4th ed., p. 20; topic 5 point 33.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 33",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n33"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00035",
          "src": "CAP4-05-00035",
          "text": "A designer wants the same concrete slump with less mixing water at unchanged cement content. Which admixture function directly addresses that objective?",
          "options": [
            {
              "key": "a",
              "text": "High-range water reduction by a superplasticizer"
            },
            {
              "key": "b",
              "text": "Set delay by a retarder without water-reducing action"
            },
            {
              "key": "c",
              "text": "Early setting by an accelerator without water-reducing action"
            },
            {
              "key": "d",
              "text": "Freeze-thaw protection as the primary role of air entrainment"
            }
          ],
          "answer": "a",
          "explanation": "A compatible superplasticizer disperses cement particles so the required consistency can be achieved with less water. It may alternatively increase flow at similar water content, but dosage, compatibility and segregation resistance need trial verification.<p>Capsule 4th ed., p. 20; topic 5 point 34.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 34",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n34"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00069",
          "src": "CAP4-05-00069",
          "text": "Under the normal OPC, adequate-curing and temperature-at-least-15 C conditions in IS 456:2000 clause 11.3.1, what period is listed for removing vertical forms from column sides?",
          "options": [
            {
              "key": "a",
              "text": "3-4 hours"
            },
            {
              "key": "b",
              "text": "7-14 days"
            },
            {
              "key": "c",
              "text": "21-28 days"
            },
            {
              "key": "d",
              "text": "16-24 hours"
            }
          ],
          "answer": "d",
          "explanation": "The listed normal-condition period for vertical column forms is 16-24 hours. Adequate strength and actual site conditions still govern safe stripping. This is not a rule for removing load-bearing beam soffits or props.<p>Source note: Page 21 point 67&#39;s fixed 24 hours is qualified by clause 11.3/11.3.1 conditions and formwork type.</p><p>Capsule 4th ed., p. 21; topic 5 point 67.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 67",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n67"
            ]
          },
          "topic": "ACiE0502",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00106",
          "src": "CAP4-05-00106",
          "text": "Assume a cement:sand:coarse-aggregate mix ratio of 1:2:4 BY MASS, free water-cement ratio 0.45, and 9 litres of free water at 1 kg/litre. What coarse-aggregate mass is required?",
          "options": [
            {
              "key": "a",
              "text": "80 kg"
            },
            {
              "key": "b",
              "text": "20 kg"
            },
            {
              "key": "c",
              "text": "40 kg"
            },
            {
              "key": "d",
              "text": "36 kg"
            }
          ],
          "answer": "a",
          "explanation": "Free water mass is 9 kg, so cement mass is 9/0.45 = 20 kg. A 1:2:4 mass ratio then requires 4 x 20 = 80 kg of coarse aggregate. The mass basis and free-water meaning are explicit additions to the incomplete source.<p>Source note: Page 22 point 105 gives no answer and does not identify whether 1:2:4 is by mass or loose volume. The 80 kg answer is conditional on the stated mass basis.</p><p>Capsule 4th ed., p. 22; topic 5 point 105.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 105",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n105"
            ]
          },
          "topic": "ACiE0502",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00107",
          "src": "CAP4-05-00107",
          "text": "If a concrete ratio 1:2:4 instead denotes loose VOLUMES, why does knowing only the free water and mass water-cement ratio not uniquely determine coarse-aggregate mass?",
          "options": [
            {
              "key": "a",
              "text": "Coarse-aggregate mass is four times cement mass regardless of batching basis"
            },
            {
              "key": "b",
              "text": "Particle specific gravities alone fix loose bulk volumes irrespective of packing"
            },
            {
              "key": "c",
              "text": "Concrete's finished density alone fixes the separate loose ingredient masses"
            },
            {
              "key": "d",
              "text": "Bulk-density information is needed to convert the volume ratio to masses"
            }
          ],
          "answer": "d",
          "explanation": "Water and mass water-cement ratio can determine cement mass, but the volumetric ingredient ratio requires compatible bulk densities to convert cement and aggregate loose volumes into masses. A volumetric ratio cannot silently be used as a mass ratio.<p>Capsule 4th ed., p. 22; topic 5 point 105.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 105",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n105"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00120",
          "src": "CAP4-05-00120",
          "text": "After fresh concrete is placed, its solid particles settle and a film of water rises to the top surface. What phenomenon is observed?",
          "options": [
            {
              "key": "a",
              "text": "Bleeding"
            },
            {
              "key": "b",
              "text": "Autogenous shrinkage"
            },
            {
              "key": "c",
              "text": "Carbonation"
            },
            {
              "key": "d",
              "text": "Hydration"
            }
          ],
          "answer": "a",
          "explanation": "Bleeding is upward movement of water as the fresh concrete's solids settle. Excessive bleeding can create weak laitance and channels and impair bond; it is not the water-consuming hydration reaction or a later carbonation process.<p>Capsule 4th ed., p. 22; topic 5 point 120.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 120",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n120"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00123",
          "src": "CAP4-05-00123",
          "text": "In the grade classification printed in IS 456:2000 Table 2, which grade begins the listed high-strength concrete group?",
          "options": [
            {
              "key": "a",
              "text": "M80"
            },
            {
              "key": "b",
              "text": "M60"
            },
            {
              "key": "c",
              "text": "M40"
            },
            {
              "key": "d",
              "text": "M55"
            }
          ],
          "answer": "b",
          "explanation": "Table 2 lists M60-M80 in its high-strength group, while M25-M55 are standard grades. This is a classification in the named edition, not a universal research definition of high-strength concrete or an upper physical limit on achievable strength.<p>Capsule 4th ed., p. 22; topic 5 point 123.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 123",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n123"
            ]
          },
          "topic": "ACiE0502",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00124",
          "src": "CAP4-05-00124",
          "text": "Concrete contains reactive silica-bearing aggregate, sufficient alkalis and moisture. Which durability mechanism is the principal concern associated with that combination?",
          "options": [
            {
              "key": "a",
              "text": "Chloride-induced corrosion of reinforcement"
            },
            {
              "key": "b",
              "text": "Expansive alkali-silica reaction"
            },
            {
              "key": "c",
              "text": "Sulfate attack producing secondary ettringite"
            },
            {
              "key": "d",
              "text": "Carbonation-induced loss of alkalinity"
            }
          ],
          "answer": "b",
          "explanation": "Alkalis can react with susceptible silica to form a moisture-absorbing gel that expands and damages concrete. Reactivity, moisture and alkali availability matter. A universal significant reduction in fresh workability is not the defining contribution of alkalis.<p>Source note: Page 23 point 124&#39;s workability claim is replaced by the conditional alkali-aggregate durability mechanism.</p><p>Capsule 4th ed., p. 23; topic 5 point 124.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 124",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n124"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00139",
          "src": "CAP4-05-00139",
          "text": "Which cement:sand:coarse-aggregate volumetric shorthand is conventionally associated with a nominal M20 mix in elementary estimating practice?",
          "options": [
            {
              "key": "a",
              "text": "1:2:4"
            },
            {
              "key": "b",
              "text": "1:3:6"
            },
            {
              "key": "c",
              "text": "1:1:2"
            },
            {
              "key": "d",
              "text": "1:1.5:3"
            }
          ],
          "answer": "d",
          "explanation": "The traditional nominal M20 shorthand is 1:1.5:3 by loose volume. A ratio is not a guaranteed measured strength or a universal roof-slab specification: water content, material properties, batching, compaction, curing and acceptance testing still govern performance.<p>Source note: Page 23 point 140 is explicitly labelled a traditional nominal shorthand, not a current universal code recipe for all RCC roofs.</p><p>Capsule 4th ed., p. 23; topic 5 point 140.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 140",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n140"
            ]
          },
          "topic": "ACiE0502",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00141",
          "src": "CAP4-05-00141",
          "text": "Using IS 456:2000 clause 6.2.3.1, what estimated short-term static modulus Ec corresponds to M25 concrete?",
          "options": [
            {
              "key": "a",
              "text": "125000 MPa"
            },
            {
              "key": "b",
              "text": "25000 MPa"
            },
            {
              "key": "c",
              "text": "22361 MPa"
            },
            {
              "key": "d",
              "text": "5000 MPa"
            }
          ],
          "answer": "b",
          "explanation": "The estimate is Ec = 5000 times the square root of fck, with both in N/mm<sup>2</sup>. For M25, square root of 25 is 5, giving 25000 MPa. Actual modulus depends on the aggregate and mix; this is not a measured universal value for every M25 batch.<p>Capsule 4th ed., p. 23; topic 5 point 142.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 142",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n142"
            ]
          },
          "topic": "ACiE0502",
          "kind": "calculation"
        },
        {
          "id": "CAP4-06-00131",
          "src": "CAP4-06-00131",
          "text": "A concrete-mixing water supply is described only as portable because it arrives by tanker. Which clarification is relevant to its suitability?",
          "options": [
            {
              "key": "a",
              "text": "Potable describes drinking-water quality; transportability alone says nothing about suitability"
            },
            {
              "key": "b",
              "text": "Portable describes compliance with concrete-water limits rather than delivery method"
            },
            {
              "key": "c",
              "text": "Portable and potable are equivalent water-quality classifications"
            },
            {
              "key": "d",
              "text": "Potable describes any water transported in a dedicated clean tanker"
            }
          ],
          "answer": "a",
          "explanation": "Portable means movable; potable means fit for drinking. Potable water is generally suitable for concrete mixing, while other water needs the applicable material-quality assessment and tests. Delivery method does not establish chemistry, cleanliness or compatibility with the intended concrete use.<p>Source note: Page 26 point 135 appears to confuse portable with potable; the question discloses the distinction rather than silently preserving the typo as an engineering rule.</p><p>Capsule 4th ed., p. 26; topic 6 point 135.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 26; topic 6 point 135",
            "pages": [
              26
            ],
            "points": [
              "capsule-t06-p026-n135"
            ]
          },
          "topic": "ACiE0502",
          "kind": "application"
        }
      ]
    },
    {
      "id": "ACiE0503",
      "name": "RCC structures-1",
      "subject": "Design of Structures",
      "questions": [
        {
          "id": "CAP4-04-00004",
          "src": "CAP4-04-00004",
          "text": "An RCC beam has developed diagonal cracks but has not crushed its concrete compression field. Which model best explains its remaining shear resistance?",
          "options": [
            {
              "key": "a",
              "text": "Only stirrup steel contributes after the first diagonal crack"
            },
            {
              "key": "b",
              "text": "Longitudinal steel alone carries shear by direct tension"
            },
            {
              "key": "c",
              "text": "Concrete mechanisms and shear reinforcement act together"
            },
            {
              "key": "d",
              "text": "Only uncracked tensile concrete carries the applied shear"
            }
          ],
          "answer": "c",
          "explanation": "Cracked reinforced concrete can transfer shear through its compression zone or struts, aggregate interlock, dowel action and stirrups. Simplified design separates concrete and steel contributions and limits crushing. It is incorrect to assign all ultimate shear resistance universally to stirrups alone.<p>Source note: Corrects the unsupported steel-only ultimate-shear claim in point 4.</p><p>Capsule 4th ed., p. 15; topic 4 point 4.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 4",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n4"
            ]
          },
          "topic": "ACiE0503",
          "kind": "application"
        },
        {
          "id": "CAP4-04-00053",
          "src": "CAP4-04-00053",
          "text": "For a cracked singly reinforced rectangular beam in elementary transformed-section theory, tensile concrete is neglected. How does the longitudinal shear-flow diagram vary above the neutral axis and between that axis and the tensile-steel level?",
          "options": [
            {
              "key": "a",
              "text": "Parabolic above; zero between the axis and steel"
            },
            {
              "key": "b",
              "text": "Constant above; linear between the axis and steel"
            },
            {
              "key": "c",
              "text": "Parabolic above; constant between the axis and steel"
            },
            {
              "key": "d",
              "text": "Linear above; parabolic between the axis and steel"
            }
          ],
          "answer": "c",
          "explanation": "Shear flow q = VQ/I depends on the first moment Q of effective area above the cut. Within the compression zone Q changes quadratically. Below the neutral axis Q stays constant until the steel level because tensile concrete is neglected. For constant width b, nominal shear stress q/b has the same variation; this is not a universal measured distribution in cracked concrete.<p>Source note: Point 51&#39;s broad RCC statement is restricted to the cracked elastic rectangular transformed-section model and the interval above the steel; it does not describe all ultimate shear mechanisms.</p><p>Capsule 4th ed., p. 17; topic 4 point 51.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 51",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n51"
            ]
          },
          "topic": "ACiE0503",
          "kind": "application"
        },
        {
          "id": "CAP4-04-00098",
          "src": "CAP4-04-00098",
          "text": "In IS 456:2000 limit-state flexural design, which extreme concrete compression strain is used at failure, as distinct from the uniform axial-compression value?",
          "options": [
            {
              "key": "a",
              "text": "0.0035, or 0.35%"
            },
            {
              "key": "b",
              "text": "0.00035, or 0.035%"
            },
            {
              "key": "c",
              "text": "0.0020, or 0.20%"
            },
            {
              "key": "d",
              "text": "0.0350, or 3.50%"
            }
          ],
          "answer": "a",
          "explanation": "Clause 38.1 uses 0.0035 at the extreme compression fibre in bending. Multiplying by 100 converts it to 0.35%. The pure axial-compression idealization uses 0.002 instead; neither value is a permissible routine service strain for every concrete member.<p>Source note: Edition and bending limit state stated explicitly; nearby chapter-05-rcc-beams.js contrasts the axial case in chapter-05-rcc-columns.js.</p><p>Capsule 4th ed., p. 18; topic 4 point 98.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 98",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n98"
            ]
          },
          "topic": "ACiE0503",
          "kind": "application"
        },
        {
          "id": "CAP4-04-00112",
          "src": "CAP4-04-00112",
          "text": "After a reinforced-concrete beam develops an inclined web crack, what is the primary role of adequately anchored stirrups crossing that crack?",
          "options": [
            {
              "key": "a",
              "text": "Carry tension across the inclined crack as part of the shear load path"
            },
            {
              "key": "b",
              "text": "Eliminate every shear contribution from the concrete and longitudinal bars"
            },
            {
              "key": "c",
              "text": "Carry the entire bending moment without longitudinal reinforcement"
            },
            {
              "key": "d",
              "text": "Replace the compression strut with concrete in direct tension"
            }
          ],
          "answer": "a",
          "explanation": "Shear creates principal tensile stresses that can cause diagonal cracking. Stirrups crossing the crack carry tensile force and tie the internal truss-like load path together. Concrete compression, aggregate interlock and bar dowel action can still contribute; stirrups are not the sole universal shear mechanism.<p>Capsule 4th ed., p. 19; topic 4 point 111.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 4 point 111",
            "pages": [
              19
            ],
            "points": [
              "capsule-t04-p019-n111"
            ]
          },
          "topic": "ACiE0503",
          "kind": "application"
        },
        {
          "id": "CAP4-04-00113",
          "src": "CAP4-04-00113",
          "text": "In the idealized concrete compression stress-strain relationship used for IS 456:2000 limit-state bending, how does stress vary as compression strain rises from zero to the extreme-fibre limit?",
          "options": [
            {
              "key": "a",
              "text": "Constant stress from zero strain to 0.002, then a linear rise"
            },
            {
              "key": "b",
              "text": "Parabolic rise to strain 0.0035 with no plateau"
            },
            {
              "key": "c",
              "text": "Parabolic rise to strain 0.002, then a plateau to 0.0035"
            },
            {
              "key": "d",
              "text": "Linear rise to strain 0.0035, followed by an abrupt drop"
            }
          ],
          "answer": "c",
          "explanation": "The idealization has an initial parabolic branch reaching its design plateau at strain 0.002, followed by a constant-stress branch up to the flexural strain limit 0.0035. It represents concrete in compression, not prestressing steel. The actual material curve and the resulting spatial stress block are distinct concepts.<p>Source note: Page 19 point 112 conflates prestressed concrete with IS 456:1978. Uses the identified IS 456:2000 concrete idealization; prestressed design provisions belong to the applicable IS 1343 edition, not an asserted 1978 requirement.</p><p>Capsule 4th ed., p. 19; topic 4 point 112.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 4 point 112",
            "pages": [
              19
            ],
            "points": [
              "capsule-t04-p019-n112"
            ]
          },
          "topic": "ACiE0503",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00021",
          "src": "CAP4-05-00021",
          "text": "What is the embedded length needed to transfer a reinforcing bar's specified force into the surrounding concrete through bond called?",
          "options": [
            {
              "key": "a",
              "text": "Effective span"
            },
            {
              "key": "b",
              "text": "Clear cover"
            },
            {
              "key": "c",
              "text": "Buckling length"
            },
            {
              "key": "d",
              "text": "Development length"
            }
          ],
          "answer": "d",
          "explanation": "Development length mobilizes the bond needed to transfer the specified bar stress to concrete. It depends on bar diameter, stress and design bond strength; it is not simply a span, cover dimension or a fixed multiple valid for every bar.<p>Source note: Duplicate development-length definitions at page 20 point 20 and page 23 point 129 are jointly covered; numerical application is also included.</p><p>Capsule 4th ed., pp. 20, 23; topic 5 point 20; topic 5 point 129.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 20, 23; topic 5 point 20; topic 5 point 129",
            "pages": [
              20,
              23
            ],
            "points": [
              "capsule-t05-p020-n20",
              "capsule-t05-p023-n129"
            ]
          },
          "topic": "ACiE0503",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00022",
          "src": "CAP4-05-00022",
          "text": "A 16 mm bar must develop 300 MPa stress. With an applicable design bond stress of 1.5 MPa, what development length follows from bond equilibrium for a straight bar?",
          "options": [
            {
              "key": "a",
              "text": "1600 mm"
            },
            {
              "key": "b",
              "text": "800 mm"
            },
            {
              "key": "c",
              "text": "200 mm"
            },
            {
              "key": "d",
              "text": "400 mm"
            }
          ],
          "answer": "b",
          "explanation": "Equate bar force, pi x diameter squared x stress/4, to bond force, pi x diameter x length x bond stress. Thus length = 16 x 300/(4 x 1.5) = 800 mm. The given bond stress is already the applicable design value.<p>Capsule 4th ed., pp. 20, 23; topic 5 point 20; topic 5 point 129.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 20, 23; topic 5 point 20; topic 5 point 129",
            "pages": [
              20,
              23
            ],
            "points": [
              "capsule-t05-p020-n20",
              "capsule-t05-p023-n129"
            ]
          },
          "topic": "ACiE0503",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00029",
          "src": "CAP4-05-00029",
          "text": "In a singly reinforced flexural section, concrete reaches its ultimate compressive strain while tensile steel is still below yield. What failure classification follows?",
          "options": [
            {
              "key": "a",
              "text": "Classically balanced, simultaneous limiting failure"
            },
            {
              "key": "b",
              "text": "Uncracked elastic behaviour with full reserve"
            },
            {
              "key": "c",
              "text": "Over-reinforced, compression-controlled failure"
            },
            {
              "key": "d",
              "text": "Under-reinforced, tension-yielding failure"
            }
          ],
          "answer": "c",
          "explanation": "Concrete crushing before tensile steel yields identifies the classical over-reinforced condition and limited ductility. Under-reinforced behaviour permits tensile yielding first. This is an ultimate failure sequence, not a statement about which section cracks first.<p>Source note: Duplicate failure-sequence facts at page 20 point 28, page 21 point 71 and page 23 point 128 are jointly covered. IS 456 ductility limits are stricter than mere first yield.</p><p>Capsule 4th ed., pp. 20, 21, 23; topic 5 point 28; topic 5 point 71; topic 5 point 128.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 20, 21, 23; topic 5 point 28; topic 5 point 71; topic 5 point 128",
            "pages": [
              20,
              21,
              23
            ],
            "points": [
              "capsule-t05-p020-n28",
              "capsule-t05-p021-n71",
              "capsule-t05-p023-n128"
            ]
          },
          "topic": "ACiE0503",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00037",
          "src": "CAP4-05-00037",
          "text": "A beam's depth is restricted, and its moment resistance explicitly includes designed compression steel as well as tension steel. What section type is being used?",
          "options": [
            {
              "key": "a",
              "text": "Singly reinforced section"
            },
            {
              "key": "b",
              "text": "Doubly reinforced section"
            },
            {
              "key": "c",
              "text": "Plain concrete section"
            },
            {
              "key": "d",
              "text": "Unreinforced masonry section"
            }
          ],
          "answer": "b",
          "explanation": "A doubly reinforced section uses designed steel in both compression and tension zones for the bending direction considered. Nominal top hanger bars alone do not establish that a compression-steel contribution has been included in resistance.<p>Capsule 4th ed., p. 20; topic 5 point 36.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 36",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n36"
            ]
          },
          "topic": "ACiE0503",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00038",
          "src": "CAP4-05-00038",
          "text": "An RC slab passes its flexural-strength calculation but fails its punching-shear check around a column. What does this show about selecting slab thickness?",
          "options": [
            {
              "key": "a",
              "text": "Thickness is determined solely by flexural reinforcement area"
            },
            {
              "key": "b",
              "text": "A flexural pass automatically makes punching shear acceptable"
            },
            {
              "key": "c",
              "text": "Thickness is determined solely by one-way shear at the edge"
            },
            {
              "key": "d",
              "text": "All governing strength and serviceability checks must be satisfied"
            }
          ],
          "answer": "d",
          "explanation": "Slab thickness can be governed by bending, one-way shear, punching shear, deflection, cover or bar placement. Passing one check does not establish compliance with the others; the capsule's shear-only statement is incomplete.<p>Source note: Page 20 point 37 is corrected to a governing-check approach rather than a universal shear-only thickness rule.</p><p>Capsule 4th ed., p. 20; topic 5 point 37.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 37",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n37"
            ]
          },
          "topic": "ACiE0503",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00039",
          "src": "CAP4-05-00039",
          "text": "What event governs first flexural cracking of an initially uncracked RC beam under increasing bending?",
          "options": [
            {
              "key": "a",
              "text": "Tensile concrete stress reaches its cracking strength"
            },
            {
              "key": "b",
              "text": "All tensile reinforcement necessarily fractures"
            },
            {
              "key": "c",
              "text": "Compression steel necessarily reaches its yield plateau"
            },
            {
              "key": "d",
              "text": "Concrete necessarily reaches ultimate compression strain"
            }
          ],
          "answer": "a",
          "explanation": "First flexural cracking starts when tensile concrete reaches its tensile resistance. Under- and over-reinforced classifications primarily distinguish later ultimate failure sequences; they do not identify first cracking merely from the label.<p>Source note: Page 20 point 38 confuses concrete cracking with ultimate compression-controlled failure and incorrectly calls it cracking of cement.</p><p>Capsule 4th ed., p. 20; topic 5 point 38.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 38",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n38"
            ]
          },
          "topic": "ACiE0503",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00041",
          "src": "CAP4-05-00041",
          "text": "A fixed-size singly reinforced RC beam receives more tension steel than its ductility limit permits. Even if a compatible analysis predicts increased ultimate moment, why is this not an acceptable design shortcut?",
          "options": [
            {
              "key": "a",
              "text": "Concrete crushing can precede adequate tensile-steel ductility"
            },
            {
              "key": "b",
              "text": "Moment resistance is exactly proportional to steel area at every ratio"
            },
            {
              "key": "c",
              "text": "The gross-area steel cap alone guarantees a ductile failure mode"
            },
            {
              "key": "d",
              "text": "The tensile steel can be assumed yielded at every reinforcement ratio"
            }
          ],
          "answer": "a",
          "explanation": "Beyond the limiting reinforcement, increased compression-zone depth can produce a larger but brittle crushing-controlled capacity. Strength alone is insufficient: strain compatibility and code ductility limits still govern. Redesign may require depth or designed compression reinforcement.<p>Source note: Page 20 point 40&#39;s strength comparison is not a licence to design an over-reinforced beam or assume steel remains at its full design stress.</p><p>Capsule 4th ed., p. 20; topic 5 point 40.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 40",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n40"
            ]
          },
          "topic": "ACiE0503",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00042",
          "src": "CAP4-05-00042",
          "text": "Inclined cracks develop near an RC beam support under shear. What is the principal role of adequately anchored stirrups crossing those cracks?",
          "options": [
            {
              "key": "a",
              "text": "Prevent every shrinkage crack throughout the slab"
            },
            {
              "key": "b",
              "text": "Carry tensile forces across diagonal shear cracks"
            },
            {
              "key": "c",
              "text": "Eliminate compression in the concrete struts"
            },
            {
              "key": "d",
              "text": "Replace all longitudinal flexural reinforcement"
            }
          ],
          "answer": "b",
          "explanation": "Shear creates diagonal principal tension. Stirrups crossing the cracks act as tensile ties with concrete compression fields, improving shear resistance and crack control. They do not eliminate all cracking or replace the beam's longitudinal reinforcement.<p>Source note: Duplicate shear-reinforcement purpose at page 20 points 41 and 52 is combined; allowable reinforcement forms are tested separately from point 98.</p><p>Capsule 4th ed., p. 20; topic 5 point 41; topic 5 point 52.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 41; topic 5 point 52",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n41",
              "capsule-t05-p020-n52"
            ]
          },
          "topic": "ACiE0503",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00043",
          "src": "CAP4-05-00043",
          "text": "An IS 456:2000 beam is 250 mm wide, 500 mm deep overall and 450 mm deep effectively. What is the clause 26.5.1.1 maximum tension-steel area based on gross section dimensions?",
          "options": [
            {
              "key": "a",
              "text": "1125 mm<sup>2</sup>"
            },
            {
              "key": "b",
              "text": "5000 mm<sup>2</sup>"
            },
            {
              "key": "c",
              "text": "1250 mm<sup>2</sup>"
            },
            {
              "key": "d",
              "text": "4500 mm<sup>2</sup>"
            }
          ],
          "answer": "b",
          "explanation": "The maximum is 0.04bD = 0.04 x 250 x 500 = 5000 mm<sup>2</sup>, using overall depth D. Substituting effective depth gives 4500 incorrectly. This upper area bound does not replace a more restrictive ductility or strength check.<p>Source note: Page 20 point 42 omits bD after 0.04. The completed expression is the gross-area cap, not the minimum-steel formula.</p><p>Capsule 4th ed., p. 20; topic 5 point 42.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 42",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n42"
            ]
          },
          "topic": "ACiE0503",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00044",
          "src": "CAP4-05-00044",
          "text": "A reinforcement note reads '4 bars, &phi;16', with dimensions in millimetres. What does the 16 specify?",
          "options": [
            {
              "key": "a",
              "text": "Clear spacing between bars"
            },
            {
              "key": "b",
              "text": "Total steel area of all bars"
            },
            {
              "key": "c",
              "text": "Nominal diameter of each bar"
            },
            {
              "key": "d",
              "text": "Radius of each bar"
            }
          ],
          "answer": "c",
          "explanation": "The phi symbol denotes bar diameter in a reinforcement schedule. The preceding count and the diameter are separate quantities; neither the clear spacing nor the combined steel area is specified by that diameter alone.<p>Capsule 4th ed., p. 20; topic 5 point 43.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 43",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n43"
            ]
          },
          "topic": "ACiE0503",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00047",
          "src": "CAP4-05-00047",
          "text": "For an RC slab in mild exposure with 10 mm main bars, assume no fire or other requirement demands greater cover. What nominal cover can follow from IS 456:2000 Table 16 and its Note 1?",
          "options": [
            {
              "key": "a",
              "text": "30 mm"
            },
            {
              "key": "b",
              "text": "15 mm"
            },
            {
              "key": "c",
              "text": "25 mm"
            },
            {
              "key": "d",
              "text": "10 mm"
            }
          ],
          "answer": "b",
          "explanation": "The mild-exposure baseline is 20 mm. Note 1 permits a 5 mm reduction where main bars do not exceed 12 mm, giving 15 mm; this also exceeds the 10 mm bar diameter. The result depends on the stated conditions and is not a universal slab cover.<p>Source note: Page 20 point 46 omits exposure, bar-size and fire qualifications. Nominal cover must also meet clause 26.4.1&#39;s diameter requirement.</p><p>Capsule 4th ed., p. 20; topic 5 point 46.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 46",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n46"
            ]
          },
          "topic": "ACiE0503",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00049",
          "src": "CAP4-05-00049",
          "text": "Using the rounded IS 456:2000 limit-state tensile-steel design plateau of 0.87fy, what stress is used for Fe415 steel after sufficient tensile strain has developed?",
          "options": [
            {
              "key": "a",
              "text": "361.05 MPa"
            },
            {
              "key": "b",
              "text": "278.05 MPa"
            },
            {
              "key": "c",
              "text": "477.25 MPa"
            },
            {
              "key": "d",
              "text": "415.00 MPa"
            }
          ],
          "answer": "a",
          "explanation": "The rounded design plateau is 0.87 x 415 = 361.05 MPa, representing the material-factor reduction. This is steel stress, not concrete tensile strength; reinforcement below the plateau strain must use its actual design stress-strain relation.<p>Capsule 4th ed., p. 20; topic 5 point 48.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 48",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n48"
            ]
          },
          "topic": "ACiE0503",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00053",
          "src": "CAP4-05-00053",
          "text": "For a standard U-type tension hook under IS 456:2000 clause 26.2.2.1, what anchorage value is credited to the hook alone when the bar diameter is 20 mm?",
          "options": [
            {
              "key": "a",
              "text": "480 mm"
            },
            {
              "key": "b",
              "text": "320 mm"
            },
            {
              "key": "c",
              "text": "160 mm"
            },
            {
              "key": "d",
              "text": "240 mm"
            }
          ],
          "answer": "b",
          "explanation": "The anchorage value of the standard U-type hook is 16 bar diameters, so its equivalent credit is 16 x 20 = 320 mm. This is not the physical curved length or a declaration that the complete required development length is always 320 mm.<p>Capsule 4th ed., p. 21; topic 5 point 53.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 53",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n53"
            ]
          },
          "topic": "ACiE0503",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00074",
          "src": "CAP4-05-00074",
          "text": "Why does the broadly similar thermal expansion of steel and concrete help ordinary reinforced-concrete action under uniform temperature change?",
          "options": [
            {
              "key": "a",
              "text": "It limits differential thermal strain between bonded materials"
            },
            {
              "key": "b",
              "text": "It permits full composite action without any bond transfer"
            },
            {
              "key": "c",
              "text": "It makes their thermal stresses equal despite different moduli"
            },
            {
              "key": "d",
              "text": "It prevents temperature-induced stress even under full restraint"
            }
          ],
          "answer": "a",
          "explanation": "Similar thermal expansion reduces internal mismatch when the bonded materials change temperature together. It does not eliminate restraint stresses or temperature gradients, and compatible thermal behaviour does not make their stiffnesses identical.<p>Capsule 4th ed., p. 21; topic 5 point 73.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 73",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n73"
            ]
          },
          "topic": "ACiE0503",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00081",
          "src": "CAP4-05-00081",
          "text": "A 20 mm compression bar has a calculated compression development length of 620 mm. Under IS 456:2000 clause 26.2.5.1, what minimum compression lap length follows?",
          "options": [
            {
              "key": "a",
              "text": "620 mm"
            },
            {
              "key": "b",
              "text": "960 mm"
            },
            {
              "key": "c",
              "text": "480 mm"
            },
            {
              "key": "d",
              "text": "320 mm"
            }
          ],
          "answer": "a",
          "explanation": "A compression lap must be at least the compression development length and not less than 24 diameters. Here 24 x 20 = 480 mm, so max(620, 480) = 620 mm. Using 24 diameters alone would miss the governing bond requirement.<p>Source note: Duplicate statements at page 21 point 81 and page 22 point 93 omit the development-length comparison; the complete rule is restored.</p><p>Capsule 4th ed., pp. 21, 22; topic 5 point 81; topic 5 point 93.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 21, 22; topic 5 point 81; topic 5 point 93",
            "pages": [
              21,
              22
            ],
            "points": [
              "capsule-t05-p021-n81",
              "capsule-t05-p022-n93"
            ]
          },
          "topic": "ACiE0503",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00095",
          "src": "CAP4-05-00095",
          "text": "For an instantaneous elastic transformed-section calculation, steel has modulus 200 GPa and concrete 25 GPa. What modular ratio transforms steel area into equivalent concrete area?",
          "options": [
            {
              "key": "a",
              "text": "225"
            },
            {
              "key": "b",
              "text": "8"
            },
            {
              "key": "c",
              "text": "0.125"
            },
            {
              "key": "d",
              "text": "175"
            }
          ],
          "answer": "b",
          "explanation": "The elastic modular ratio is Es/Ec = 200/25 = 8, so steel area is multiplied by eight for a concrete-reference transformed section. A code's effective working-stress modular ratio allowing long-term effects is a different stated convention.<p>Capsule 4th ed., p. 22; topic 5 point 94.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 94",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n94"
            ]
          },
          "topic": "ACiE0503",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00099",
          "src": "CAP4-05-00099",
          "text": "Which set identifies recognized forms of beam shear reinforcement in IS 456:2000 clause 26.5.1.4, subject to its angle, combination and anchorage rules?",
          "options": [
            {
              "key": "a",
              "text": "Vertical stirrups, inclined stirrups, and bent-up bars with stirrups"
            },
            {
              "key": "b",
              "text": "Inclined stirrups, straight top bars, and longitudinal side-face bars"
            },
            {
              "key": "c",
              "text": "Bottom straight bars, top hanger bars, and side-face bars alone"
            },
            {
              "key": "d",
              "text": "Vertical stirrups, distribution mesh, and unanchored bent-up bars"
            }
          ],
          "answer": "a",
          "explanation": "The provision recognizes vertical and inclined stirrups and bent-up bars used with stirrups. Reinforcement must cross the potential inclined cracks and develop its force through anchorage; merely placing a bar in any orientation does not make it effective shear reinforcement.<p>Source note: Page 22 point 98&#39;s &#39;vertical bars&#39; is clarified to stirrups and its bent-up-bar category retains the required combination with stirrups.</p><p>Capsule 4th ed., p. 22; topic 5 point 98.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 98",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n98"
            ]
          },
          "topic": "ACiE0503",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00101",
          "src": "CAP4-05-00101",
          "text": "A rectangular beam has width 250 mm, effective depth 400 mm and overall depth 450 mm, with Fe500 steel. What minimum tension-steel area follows from IS 456:2000 clause 26.5.1.1?",
          "options": [
            {
              "key": "a",
              "text": "170.0 mm<sup>2</sup>"
            },
            {
              "key": "b",
              "text": "4500.0 mm<sup>2</sup>"
            },
            {
              "key": "c",
              "text": "200.0 mm<sup>2</sup>"
            },
            {
              "key": "d",
              "text": "191.25 mm<sup>2</sup>"
            }
          ],
          "answer": "a",
          "explanation": "The minimum is Ast = 0.85bd/fy, using effective depth d and fy in MPa. Thus 0.85 x 250 x 400/500 = 170 mm<sup>2</sup>. Overall depth D belongs to the separate 0.04bD maximum, not this minimum formula.<p>Source note: Page 22 points 99-100 split the fraction during extraction. Restored the standard formula and corrected capital D in the source numerator to effective depth d.</p><p>Capsule 4th ed., p. 22; topic 5 point 100.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 100",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n100"
            ]
          },
          "topic": "ACiE0503",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00122",
          "src": "CAP4-05-00122",
          "text": "A designer specifies 16 bar diameters as the entire anchorage for every RC bar because that is the standard U-hook credit. What should replace this shortcut?",
          "options": [
            {
              "key": "a",
              "text": "Ignore anchorage whenever the bar remains inside concrete cover"
            },
            {
              "key": "b",
              "text": "Use 16 diameters regardless of stress and concrete bond strength"
            },
            {
              "key": "c",
              "text": "Check required development against available straight length and admissible hook credit"
            },
            {
              "key": "d",
              "text": "Use the hook's curved cutting length as the complete development requirement"
            }
          ],
          "answer": "c",
          "explanation": "The 16-diameter value is an equivalent anchorage credit for a properly detailed standard U-type tension hook, not a universal minimum or complete development length. Bar force, bond, available embedment and applicable bend, confinement and support rules must be checked.<p>Source note: Page 22 point 122 incorrectly generalizes the standard-hook value to all RCC end anchorage.</p><p>Capsule 4th ed., p. 22; topic 5 point 122.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 122",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n122"
            ]
          },
          "topic": "ACiE0503",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00125",
          "src": "CAP4-05-00125",
          "text": "For a 6.0 m RC beam, what normal final TOTAL deflection limit follows from IS 456:2000 clause 23.2(a), measured relative to the as-cast support level?",
          "options": [
            {
              "key": "a",
              "text": "20.0 mm"
            },
            {
              "key": "b",
              "text": "17.14 mm"
            },
            {
              "key": "c",
              "text": "24.0 mm"
            },
            {
              "key": "d",
              "text": "18.46 mm"
            }
          ],
          "answer": "c",
          "explanation": "The normal total-deflection limit is span/250, so 6000/250 = 24 mm, including the relevant time-dependent effects. The post-partition/finish increment has a separate limit. The capsule's unqualified span/325 is not this IS 456 total-deflection provision.<p>Source note: Full page 23 text recovers the missing denominator as 325. Replaced with the explicitly identified IS 456:2000 total-deflection criterion rather than endorsing an unattributed limit.</p><p>Capsule 4th ed., p. 23; topic 5 point 125.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 125",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n125"
            ]
          },
          "topic": "ACiE0503",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00126",
          "src": "CAP4-05-00126",
          "text": "An RC beam spans 9 m. Under IS 456:2000 clause 23.2(b), what normal maximum deflection increment after installation of partitions and finishes applies?",
          "options": [
            {
              "key": "a",
              "text": "27.69 mm"
            },
            {
              "key": "b",
              "text": "36.0 mm"
            },
            {
              "key": "c",
              "text": "25.71 mm"
            },
            {
              "key": "d",
              "text": "20.0 mm"
            }
          ],
          "answer": "d",
          "explanation": "The post-finish increment is limited to the smaller of span/350 and 20 mm. Here 9000/350 = 25.71 mm, so 20 mm controls. This limit is not interchangeable with the total span/250 criterion or an unqualified span/325 rule.<p>Capsule 4th ed., p. 23; topic 5 point 125.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 125",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n125"
            ]
          },
          "topic": "ACiE0503",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00136",
          "src": "CAP4-05-00136",
          "text": "Using the IS 456:2000 limit-state concrete stress-block convention, take fck = 30 MPa and material factor 1.5. What peak design compressive stress follows from 0.67fck divided by that factor?",
          "options": [
            {
              "key": "a",
              "text": "10.8 MPa"
            },
            {
              "key": "b",
              "text": "30.0 MPa"
            },
            {
              "key": "c",
              "text": "20.1 MPa"
            },
            {
              "key": "d",
              "text": "13.4 MPa"
            }
          ],
          "answer": "d",
          "explanation": "The 0.67 coefficient represents the in-structure strength reduction before the material factor. Dividing 0.67 x 30 by 1.5 gives 13.4 MPa. The 0.36 coefficient used in the integrated concrete force is a different stress-block quantity, not the peak stress.<p>Source note: Page 23 point 137 omits the subsequent material partial factor; 0.67fck is not the final peak design stress by itself.</p><p>Capsule 4th ed., p. 23; topic 5 point 137.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 137",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n137"
            ]
          },
          "topic": "ACiE0503",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00140",
          "src": "CAP4-05-00140",
          "text": "Why is a material partial safety factor used when deriving concrete design resistance from its characteristic strength in limit-state design?",
          "options": [
            {
              "key": "a",
              "text": "To allow for material and resistance-model uncertainties"
            },
            {
              "key": "b",
              "text": "To replace characteristic strength by the higher mean strength"
            },
            {
              "key": "c",
              "text": "To subtract the numerical flexural strength from cube strength"
            },
            {
              "key": "d",
              "text": "To account only for uncertainty in the external imposed load"
            }
          ],
          "answer": "a",
          "explanation": "A material partial factor reduces the strength used for design to allow for uncertainties in material behaviour and resistance assessment. Flexural tensile strength is a separate property, not the factor by which compressive design strength is reduced.<p>Source note: Page 23 point 141 confuses flexural strength with a design-strength reduction factor.</p><p>Capsule 4th ed., p. 23; topic 5 point 141.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 141",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n141"
            ]
          },
          "topic": "ACiE0503",
          "kind": "application"
        }
      ]
    },
    {
      "id": "ACiE0504",
      "name": "RCC structures-2",
      "subject": "Design of Structures",
      "questions": [
        {
          "id": "CAP4-01-00137",
          "src": "CAP4-01-00137",
          "text": "A vertical column load of 500 kN acts 0.12 m from a footing's centroid in one direction. What equivalent axial force and moment act at the centroid?",
          "options": [
            {
              "key": "a",
              "text": "60 kN and 500 kN m"
            },
            {
              "key": "b",
              "text": "500 kN and zero moment"
            },
            {
              "key": "c",
              "text": "500 kN and 4,166.7 kN m"
            },
            {
              "key": "d",
              "text": "500 kN and 60 kN m"
            }
          ],
          "answer": "d",
          "explanation": "Moving an eccentric force to the centroid requires an equal force and a couple M = Pe. Here M = 500 x 0.12 = 60 kN m; it does not replace the axial load with the moment.<p>Capsule 4th ed., p. 5; topic 1 point 130.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 5; topic 1 point 130",
            "pages": [
              5
            ],
            "points": [
              "capsule-t01-p005-n130"
            ]
          },
          "topic": "ACiE0504",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00056",
          "src": "CAP4-04-00056",
          "text": "For an ordinary 300 mm square column with 20 mm longitudinal bars, apply the IS 456:2000 column requirement of at least 40 mm cover and at least the bar diameter. If exposure and fire require no more, what minimum governs?",
          "options": [
            {
              "key": "a",
              "text": "20 mm"
            },
            {
              "key": "b",
              "text": "30 mm"
            },
            {
              "key": "c",
              "text": "25 mm"
            },
            {
              "key": "d",
              "text": "40 mm"
            }
          ],
          "answer": "d",
          "explanation": "The stated column check requires max(40, 20) = 40 mm. The value is in millimetres and must still be increased if other requirements govern. The separate small-column relaxation cannot be used for this 300 mm column with 20 mm bars.<p>Source note: Page 17 point 55 omits units and qualifications. The question states its IS 456:2000 detailing basis; 40 mm is not an unconditional cover for all columns, exposures or fire ratings.</p><p>Capsule 4th ed., p. 17; topic 4 point 55.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 55",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n55"
            ]
          },
          "topic": "ACiE0504",
          "kind": "application"
        },
        {
          "id": "CAP4-04-00105",
          "src": "CAP4-04-00105",
          "text": "In an ideal load-balancing design for a simply supported prestressed beam, tendon eccentricity is fixed at zero at both ends. Which profile balances a constant downward UDL with constant effective prestress?",
          "options": [
            {
              "key": "a",
              "text": "Two straight segments meeting at midspan with a sharp change of slope"
            },
            {
              "key": "b",
              "text": "A straight horizontal line below the centroid over the full span"
            },
            {
              "key": "c",
              "text": "A parabola below the centroid with maximum eccentricity at midspan"
            },
            {
              "key": "d",
              "text": "A circular arc selected without reference to its changing curvature"
            }
          ],
          "answer": "c",
          "explanation": "For a shallow tendon, equivalent transverse loading is proportional to P times profile curvature. Constant UDL therefore requires constant second derivative, giving a parabola. Zero end eccentricities and symmetry put maximum downward eccentricity at midspan. A harped tendon instead introduces concentrated deviator forces.<p>Source note: Point 106 is an ideal UDL load-balancing profile with specified end eccentricities; real tendon design also checks losses, stress limits, anchorage and other load cases.</p><p>Capsule 4th ed., p. 19; topic 4 point 106.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 4 point 106",
            "pages": [
              19
            ],
            "points": [
              "capsule-t04-p019-n106"
            ]
          },
          "topic": "ACiE0504",
          "kind": "application"
        },
        {
          "id": "CAP4-04-00106",
          "src": "CAP4-04-00106",
          "text": "A shallow parabolic tendon in a 10 m simple beam has zero end eccentricity, 0.25 m downward midspan eccentricity and effective force 1000 kN. What uniform upward equivalent load does it provide?",
          "options": [
            {
              "key": "a",
              "text": "10 kN/m"
            },
            {
              "key": "b",
              "text": "40 kN/m"
            },
            {
              "key": "c",
              "text": "20 kN/m"
            },
            {
              "key": "d",
              "text": "25 kN/m"
            }
          ],
          "answer": "c",
          "explanation": "The parabola e(x) = 4e_mid x(L-x)/L^2 has curvature magnitude 8e_mid/L^2. Multiplying by effective prestress gives w_bal = 8Pe_mid/L^2 = 8 x 1000 x 0.25/100 = 20 kN/m upward. End tendon forces must also be included in the complete equilibrium model.<p>Capsule 4th ed., p. 19; topic 4 point 106.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 4 point 106",
            "pages": [
              19
            ],
            "points": [
              "capsule-t04-p019-n106"
            ]
          },
          "topic": "ACiE0504",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00027",
          "src": "CAP4-05-00027",
          "text": "Which concrete strain pair matches the IS 456:2000 limit-state idealizations for pure axial compression and the extreme compression fibre in bending, respectively?",
          "options": [
            {
              "key": "a",
              "text": "0.002 and 0.002"
            },
            {
              "key": "b",
              "text": "0.0035 and 0.002"
            },
            {
              "key": "c",
              "text": "0.0035 and 0.0035"
            },
            {
              "key": "d",
              "text": "0.002 and 0.0035"
            }
          ],
          "answer": "d",
          "explanation": "Pure axial compression uses a uniform limiting strain of 0.002 under clause 39.1, whereas clause 38.1 uses 0.0035 at the extreme compression fibre in bending. The different strain distributions explain why these limits are not interchangeable.<p>Capsule 4th ed., p. 20; topic 5 point 26.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 26",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n26"
            ]
          },
          "topic": "ACiE0504",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00033",
          "src": "CAP4-05-00033",
          "text": "For a column whose longitudinal bars are lapped from the storey below, what practical percentage is usually recommended by the note to IS 456:2000 clause 26.5.3.1(a)?",
          "options": [
            {
              "key": "a",
              "text": "Always limit it to 0.04% of gross area"
            },
            {
              "key": "b",
              "text": "Require at least 6% of gross area"
            },
            {
              "key": "c",
              "text": "Universally limit it to 2% of gross area"
            },
            {
              "key": "d",
              "text": "Usually limit it to 4% of gross area"
            }
          ],
          "answer": "d",
          "explanation": "The note advises usually restricting longitudinal steel to 4% where bars are lapped because laps cause congestion. The ordinary absolute upper limit is 6%. A fraction of 0.04 means 4%, not 0.04%; the capsule's separate universal 2% claim is unsupported.<p>Source note: Page 20 point 32 is interpreted as a 4% lap-congestion recommendation, not a universal preferred steel percentage. The conflicting 2% claim at page 22 point 118 has a separate question.</p><p>Capsule 4th ed., p. 20; topic 5 point 32.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 32",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n32"
            ]
          },
          "topic": "ACiE0504",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00054",
          "src": "CAP4-05-00054",
          "text": "Unequal column loads and boundary restrictions make a uniform-width combined footing inconvenient. Why might a trapezoidal plan be selected?",
          "options": [
            {
              "key": "a",
              "text": "To eliminate all shear and bending in the footing"
            },
            {
              "key": "b",
              "text": "To make bearing pressure independent of soil behaviour"
            },
            {
              "key": "c",
              "text": "To force identical loads in the two columns"
            },
            {
              "key": "d",
              "text": "To align its area centroid with the applied resultant"
            }
          ],
          "answer": "d",
          "explanation": "Varying the footing width shifts the area centroid toward the greater resultant demand. Alignment can produce uniform pressure in an idealized linear full-contact model, but geometry, soil behaviour and structural checks still matter; unequal loads do not mandate a trapezoid.<p>Capsule 4th ed., p. 21; topic 5 point 54.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 54",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n54"
            ]
          },
          "topic": "ACiE0504",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00056",
          "src": "CAP4-05-00056",
          "text": "A slender column carries axial compression P and develops lateral displacement. What must a stability assessment retain?",
          "options": [
            {
              "key": "a",
              "text": "Direct compression alone with all lateral displacement ignored"
            },
            {
              "key": "b",
              "text": "Direct compression plus first- and second-order bending effects"
            },
            {
              "key": "c",
              "text": "Only the self-weight of transverse reinforcement"
            },
            {
              "key": "d",
              "text": "Bending stress alone with axial force set to zero"
            }
          ],
          "answer": "b",
          "explanation": "The axial force still produces P/A and also magnifies bending through lateral displacement. Slenderness makes instability and second-order effects important; it does not automatically make direct compression negligible.<p>Source note: Page 21 point 56&#39;s neglect of direct stress is not a general long-column design rule.</p><p>Capsule 4th ed., p. 21; topic 5 point 56.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 56",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n56"
            ]
          },
          "topic": "ACiE0504",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00057",
          "src": "CAP4-05-00057",
          "text": "Ignoring special required-area exceptions, which gross-area limits for column longitudinal steel are given by IS 456:2000 clause 26.5.3.1(a)?",
          "options": [
            {
              "key": "a",
              "text": "2% minimum and 8% maximum"
            },
            {
              "key": "b",
              "text": "0.8% minimum and 6% maximum"
            },
            {
              "key": "c",
              "text": "0.12% minimum and 4% maximum"
            },
            {
              "key": "d",
              "text": "0.15% minimum and 2% maximum"
            }
          ],
          "answer": "b",
          "explanation": "The ordinary column provision uses 0.8-6% of gross area. The maximum is a code detailing bound, not a theoretical optimum or a compulsory amount. Lap congestion, spacing, capacity and any more restrictive detailing remain separate checks.<p>Capsule 4th ed., p. 21; topic 5 point 57.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 57",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n57"
            ]
          },
          "topic": "ACiE0504",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00058",
          "src": "CAP4-05-00058",
          "text": "Under IS 1343:2012 clause 6.1 and Table 1 Note 2, which baseline grades apply to pre-tensioned and post-tensioned concrete respectively, before higher exposure requirements?",
          "options": [
            {
              "key": "a",
              "text": "M20 and M25"
            },
            {
              "key": "b",
              "text": "M40 and M30"
            },
            {
              "key": "c",
              "text": "M35 and M35"
            },
            {
              "key": "d",
              "text": "M30 and M40"
            }
          ],
          "answer": "b",
          "explanation": "The cited 2012 provisions give M40 for pre-tensioned and M30 for post-tensioned work. These are characteristic 28-day cube-strength grades; the actual concrete strength and stresses at prestress transfer require separate checks.<p>Source note: Page 21 point 58&#39;s universal 350 kg/cm2 is not retained. Prestressing method, edition, force units and transfer-versus-grade distinction are essential.</p><p>Capsule 4th ed., p. 21; topic 5 point 58.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 58",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n58"
            ]
          },
          "topic": "ACiE0504",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00059",
          "src": "CAP4-05-00059",
          "text": "Interpreting a historical concrete strength of 350 kg/cm<sup>2</sup> as 350 kgf/cm<sup>2</sup>, what is its SI value using 1 kgf = 9.80665 N?",
          "options": [
            {
              "key": "a",
              "text": "35.70 MPa"
            },
            {
              "key": "b",
              "text": "350.00 MPa"
            },
            {
              "key": "c",
              "text": "34.32 MPa"
            },
            {
              "key": "d",
              "text": "3.432 MPa"
            }
          ],
          "answer": "c",
          "explanation": "One square centimetre is 100 square millimetres. Thus 350 x 9.80665/100 = 34.323275 N/mm<sup>2</sup>, or about 34.32 MPa. Converting the old number does not establish a modern minimum concrete grade or transfer strength.<p>Capsule 4th ed., p. 21; topic 5 point 58.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 58",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n58"
            ]
          },
          "topic": "ACiE0504",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00060",
          "src": "CAP4-05-00060",
          "text": "An RC column has a helix but its required volumetric confinement ratio has not been checked. Can the IS 456:2000 clause 39.4 strength enhancement be applied immediately?",
          "options": [
            {
              "key": "a",
              "text": "No; compliant helical reinforcement never earns a strength credit"
            },
            {
              "key": "b",
              "text": "Yes; any circular column automatically receives 1.05"
            },
            {
              "key": "c",
              "text": "No; the 1.05 factor requires the specified helical detailing"
            },
            {
              "key": "d",
              "text": "Yes; a single circular tie automatically receives 1.05"
            }
          ],
          "answer": "c",
          "explanation": "The 1.05 multiplier is conditional on the prescribed helical reinforcement, including volumetric ratio, pitch and anchorage requirements. A circular shape or the mere presence of spiral steel is not sufficient to claim the enhancement.<p>Source note: Page 21 point 59 omits the conditions attached to the strength credit.</p><p>Capsule 4th ed., p. 21; topic 5 point 59.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 59",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n59"
            ]
          },
          "topic": "ACiE0504",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00061",
          "src": "CAP4-05-00061",
          "text": "A helically reinforced column satisfies every condition for the IS 456:2000 clause 39.4 enhancement. If the comparable tied-column design resistance is 1200 kN, what resistance follows from that enhancement alone?",
          "options": [
            {
              "key": "a",
              "text": "1320 kN"
            },
            {
              "key": "b",
              "text": "1260 kN"
            },
            {
              "key": "c",
              "text": "1140 kN"
            },
            {
              "key": "d",
              "text": "1205 kN"
            }
          ],
          "answer": "b",
          "explanation": "The permitted multiplier is 1.05, giving 1.05 x 1200 = 1260 kN. It is a 5% increase, not an addition of 5 kN or a 10% increase. The stem explicitly establishes compliance before applying the factor.<p>Capsule 4th ed., p. 21; topic 5 point 59.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 59",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n59"
            ]
          },
          "topic": "ACiE0504",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00062",
          "src": "CAP4-05-00062",
          "text": "Apply the IS 456:2000 slab minimum-steel rule to a 1000 mm wide, 400 mm thick uniform footing strip with Fe415 HYSD bars. What minimum area is required in each direction?",
          "options": [
            {
              "key": "a",
              "text": "480 mm<sup>2</sup>"
            },
            {
              "key": "b",
              "text": "240 mm<sup>2</sup>"
            },
            {
              "key": "c",
              "text": "600 mm<sup>2</sup>"
            },
            {
              "key": "d",
              "text": "4800 mm<sup>2</sup>"
            }
          ],
          "answer": "a",
          "explanation": "Clause 34.5.1 refers footing minimum reinforcement to the solid-slab requirement. For HYSD bars the minimum is 0.12% of gross area in each direction: 0.0012 x 1000 x 400 = 480 mm<sup>2</sup>. Bending demand can require more.<p>Capsule 4th ed., p. 21; topic 5 point 60.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 60",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n60"
            ]
          },
          "topic": "ACiE0504",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00064",
          "src": "CAP4-05-00064",
          "text": "An isolated RC footing has a bottom mesh in two horizontal directions. Why must one-way and punching shear still be checked separately?",
          "options": [
            {
              "key": "a",
              "text": "The transverse mesh alone replaces any required shear reinforcement"
            },
            {
              "key": "b",
              "text": "Punching resistance is determined only by bar area across the base"
            },
            {
              "key": "c",
              "text": "Providing minimum mesh automatically satisfies both shear checks"
            },
            {
              "key": "d",
              "text": "Horizontal flexural bars are not automatically shear reinforcement"
            }
          ],
          "answer": "d",
          "explanation": "The horizontal mesh principally resists flexure and controls cracking. Footing depth and concrete shear resistance must satisfy one-way and punching checks; specific shear reinforcement, when used, needs an effective anchored detail rather than merely transverse bottom bars.<p>Source note: Page 21 point 62 confuses transverse flexural bars with designed shear reinforcement.</p><p>Capsule 4th ed., p. 21; topic 5 point 62.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 62",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n62"
            ]
          },
          "topic": "ACiE0504",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00065",
          "src": "CAP4-05-00065",
          "text": "After a prestressing tendon is tensioned and its force transferred, what useful initial action does it introduce into the concrete member?",
          "options": [
            {
              "key": "a",
              "text": "Tension that necessarily opens all service cracks"
            },
            {
              "key": "b",
              "text": "Zero stress until every external load is applied"
            },
            {
              "key": "c",
              "text": "Compression that can offset later tensile stresses"
            },
            {
              "key": "d",
              "text": "Shear that replaces all axial and bending effects"
            }
          ],
          "answer": "c",
          "explanation": "Prestress introduces a deliberate compressive force, often with a bending effect when eccentric, to control tensile stresses and cracking under later loads. Ordinary passive reinforcement is not the same as an actively tensioned tendon.<p>Capsule 4th ed., p. 21; topic 5 point 63.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 63",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n63"
            ]
          },
          "topic": "ACiE0504",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00066",
          "src": "CAP4-05-00066",
          "text": "Two adjacent columns bear on one continuous footing slab designed as a common base. Which foundation description fits this arrangement?",
          "options": [
            {
              "key": "a",
              "text": "Two isolated footings joined only by a strap"
            },
            {
              "key": "b",
              "text": "Combined footing"
            },
            {
              "key": "c",
              "text": "Single-column pedestal without a footing slab"
            },
            {
              "key": "d",
              "text": "Single-column pad footing"
            }
          ],
          "answer": "b",
          "explanation": "A common footing supporting two or more selected columns is a combined footing. A strap arrangement instead uses separate pads connected by a beam. A raft generally supports a substantial group or the whole building over a larger common base.<p>Capsule 4th ed., p. 21; topic 5 point 64.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 64",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n64"
            ]
          },
          "topic": "ACiE0504",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00121",
          "src": "CAP4-05-00121",
          "text": "Under IS 456:2000 clause 26.5.3.1, what minimum longitudinal-bar counts apply to rectangular and circular RC columns respectively?",
          "options": [
            {
              "key": "a",
              "text": "4 and 6"
            },
            {
              "key": "b",
              "text": "6 and 4"
            },
            {
              "key": "c",
              "text": "8 and 6"
            },
            {
              "key": "d",
              "text": "4 and 4"
            }
          ],
          "answer": "a",
          "explanation": "The minimum is four bars in a rectangular column and six in a circular column. These are count requirements, not sufficient design criteria: total steel area, bar diameter, peripheral spacing, cover and transverse restraint must also comply.<p>Capsule 4th ed., p. 22; topic 5 point 121.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 121",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n121"
            ]
          },
          "topic": "ACiE0504",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00132",
          "src": "CAP4-05-00132",
          "text": "A prestress-loss calculation for one member predicts an 18% reduction from an initial tendon stress of 1200 MPa. What effective tendon stress remains?",
          "options": [
            {
              "key": "a",
              "text": "984 MPa"
            },
            {
              "key": "b",
              "text": "216 MPa"
            },
            {
              "key": "c",
              "text": "1016.95 MPa"
            },
            {
              "key": "d",
              "text": "1182 MPa"
            }
          ],
          "answer": "a",
          "explanation": "The retained fraction is 1 - 0.18 = 0.82, so effective stress is 0.82 x 1200 = 984 MPa. The 216 MPa value is the loss, not the remaining stress. The percentage is given for this member; 15-25% is not a universal loss requirement.<p>Source note: Page 23 point 133&#39;s approximate range is not treated as a substitute for calculated method-, material- and time-dependent losses.</p><p>Capsule 4th ed., p. 23; topic 5 point 133.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 133",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n133"
            ]
          },
          "topic": "ACiE0504",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00133",
          "src": "CAP4-05-00133",
          "text": "Which group consists of time-dependent mechanisms that can reduce prestress after transfer?",
          "options": [
            {
              "key": "a",
              "text": "Concrete creep, concrete shrinkage, and steel relaxation"
            },
            {
              "key": "b",
              "text": "Duct friction, anchorage seating, and initial elastic shortening"
            },
            {
              "key": "c",
              "text": "Concrete creep, duct friction, and immediate anchorage seating"
            },
            {
              "key": "d",
              "text": "Concrete shrinkage, initial elastic shortening, and duct friction"
            }
          ],
          "answer": "a",
          "explanation": "Concrete creep and shrinkage shorten the tendon path, while relaxation reduces steel stress at sustained strain. Friction, anchorage seating and elastic shortening concern other stages and mechanisms. Their contributions depend on the particular prestressing system and sequence.<p>Capsule 4th ed., p. 23; topic 5 point 133.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 133",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n133"
            ]
          },
          "topic": "ACiE0504",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00143",
          "src": "CAP4-05-00143",
          "text": "An ordinary RC column has longitudinal steel equal to 2.5% of gross area. A reviewer rejects it solely because 'the maximum is always 2%'. Under IS 456:2000 clause 26.5.3.1(a), what is the correct response?",
          "options": [
            {
              "key": "a",
              "text": "Accept the entire design because steel percentage alone is sufficient"
            },
            {
              "key": "b",
              "text": "Reject it because 2% is the universal upper bound for every column"
            },
            {
              "key": "c",
              "text": "2.5% is within the ordinary area bounds, but other checks remain"
            },
            {
              "key": "d",
              "text": "Reject it because every column must contain exactly 4% steel"
            }
          ],
          "answer": "c",
          "explanation": "The ordinary gross-area bounds are 0.8-6%, so 2.5% does not fail that check merely by exceeding 2%. Capacity, congestion, laps, detailing and any more restrictive applicable provisions must still be checked. The separate usual 4% lap recommendation is not a mandatory target.<p>Source note: Page 22 point 118&#39;s universal practical maximum of 2% is unsupported and conflicts with page 20 point 32. It receives its own corrected question rather than being counted as a duplicated fact.</p><p>Capsule 4th ed., p. 22; topic 5 point 118.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 118",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n118"
            ]
          },
          "topic": "ACiE0504",
          "kind": "application"
        }
      ]
    },
    {
      "id": "ACiE0505",
      "name": "Steel structures",
      "subject": "Design of Structures",
      "questions": [
        {
          "id": "CAP4-04-00099",
          "src": "CAP4-04-00099",
          "text": "A stipulated working-stress check sets permissible tensile stress equal to yield stress divided by 1.6. For fy = 240 MPa, what permissible stress should be used?",
          "options": [
            {
              "key": "a",
              "text": "240 MPa"
            },
            {
              "key": "b",
              "text": "144 MPa"
            },
            {
              "key": "c",
              "text": "384 MPa"
            },
            {
              "key": "d",
              "text": "150 MPa"
            }
          ],
          "answer": "d",
          "explanation": "The stated safety convention gives sigma_allow = 240/1.6 = 150 MPa, below yield. Multiplying by the factor would increase the allowance incorrectly. The factor is supplied for this problem, not asserted as a universal current-code value; buckling or other failure modes can govern other checks.<p>Source note: Point 99 is interpreted as permissible stress for a ductile yield-based working-stress check, not every material or design method.</p><p>Capsule 4th ed., p. 18; topic 4 point 99.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 99",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n99"
            ]
          },
          "topic": "ACiE0505",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00012",
          "src": "CAP4-05-00012",
          "text": "For a fixed roof area, an illustrative spacing model gives total truss cost T = A/s and purlin cost P = B times s squared, where A and B are positive constants and s is truss spacing. At minimum T + P, what is T/P?",
          "options": [
            {
              "key": "a",
              "text": "2"
            },
            {
              "key": "b",
              "text": "1"
            },
            {
              "key": "c",
              "text": "0.5"
            },
            {
              "key": "d",
              "text": "4"
            }
          ],
          "answer": "a",
          "explanation": "Differentiating A/s + Bs squared gives -A/s squared + 2Bs = 0. Thus A/s = 2Bs squared, so T = 2P. The positive second derivative confirms a minimum. The ratio follows from this assumed cost model, not a universal roof-design requirement.<p>Source note: Page 20 point 12 omits the cost model. Its ratio is tested under explicit inverse-spacing and square-spacing assumptions, not asserted for all trusses.</p><p>Capsule 4th ed., p. 20; topic 5 point 12.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 12",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n12"
            ]
          },
          "topic": "ACiE0505",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00048",
          "src": "CAP4-05-00048",
          "text": "A column-lacing specification requires an acute angle of 40-70 degrees to the longitudinal axis. A bar makes 55 degrees with the perpendicular transverse axis in the same plane. How does it compare with the specified interval?",
          "options": [
            {
              "key": "a",
              "text": "35 degrees longitudinally; below the specified minimum"
            },
            {
              "key": "b",
              "text": "55 degrees longitudinally; within the specified interval"
            },
            {
              "key": "c",
              "text": "55 degrees longitudinally; above the specified maximum"
            },
            {
              "key": "d",
              "text": "35 degrees longitudinally; within the specified interval"
            }
          ],
          "answer": "a",
          "explanation": "The acute angles to perpendicular axes are complementary. The longitudinal inclination is 90 - 55 = 35 degrees, below the specified 40-degree minimum. Using the measured transverse angle directly would incorrectly accept the detail; strength and stability still require separate checks.<p>Source note: Page 20 point 47&#39;s 40-70 degree range is an explicit specification for this exercise. The exact IS 800:2007 clause 7.6.4 text was unavailable for independent verification here; no current universal requirement is certified.</p><p>Capsule 4th ed., p. 20; topic 5 point 47.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 47",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n47"
            ]
          },
          "topic": "ACiE0505",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00067",
          "src": "CAP4-05-00067",
          "text": "Comparable built-up columns have actual maximum slenderness 100. A stated design model accounts for shear deformation by multiplying this by 1.05 for lacing and 1.10 for battens. What effective slenderness values result, laced then battened?",
          "options": [
            {
              "key": "a",
              "text": "110 and 105"
            },
            {
              "key": "b",
              "text": "150 and 200"
            },
            {
              "key": "c",
              "text": "105 and 110"
            },
            {
              "key": "d",
              "text": "100 and 100"
            }
          ],
          "answer": "c",
          "explanation": "Applying the stated multipliers gives 1.05 x 100 = 105 and 1.10 x 100 = 110. The larger battened allowance can reduce calculated compression resistance in an otherwise comparable model. Different sections, details or failure modes prevent a universal ranking of actual columns.<p>Source note: Duplicate claims at page 21 point 65 and page 22 point 113 are replaced by a conditional shear-flexibility comparison. The factors are supplied assumptions: exact IS 800:2007 clauses 7.6.1.5 and 7.7.1.4 were not independently retrievable here. Their use is not certified for every project or edition.</p><p>Capsule 4th ed., pp. 21, 22; topic 5 point 65; topic 5 point 113.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 21, 22; topic 5 point 65; topic 5 point 113",
            "pages": [
              21,
              22
            ],
            "points": [
              "capsule-t05-p021-n65",
              "capsule-t05-p022-n113"
            ]
          },
          "topic": "ACiE0505",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00068",
          "src": "CAP4-05-00068",
          "text": "Why can a tubular steel section be efficient for a column exposed to buckling about different axes?",
          "options": [
            {
              "key": "a",
              "text": "It maximizes major-axis stiffness for every equal-area section comparison"
            },
            {
              "key": "b",
              "text": "Its gross cross-sectional area alone determines its column resistance"
            },
            {
              "key": "c",
              "text": "Its high torsional stiffness can replace both flexural-buckling checks"
            },
            {
              "key": "d",
              "text": "It can provide favourable radii of gyration in both directions"
            }
          ],
          "answer": "d",
          "explanation": "Spreading material away from the centroid can provide efficient buckling resistance in multiple directions. Economy still depends on local slenderness, connections, fabrication, corrosion protection and loading; a tubular section is not universally the cheapest choice.<p>Source note: Page 21 point 66&#39;s universal economy claim is replaced with its defensible structural advantage.</p><p>Capsule 4th ed., p. 21; topic 5 point 66.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 66",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n66"
            ]
          },
          "topic": "ACiE0505",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00071",
          "src": "CAP4-05-00071",
          "text": "A welded batten plate is 8 mm thick. Under IS 800:2007 clause 7.7.4.1, what is its minimum overlap with the main member from the 4t requirement alone?",
          "options": [
            {
              "key": "a",
              "text": "16 mm"
            },
            {
              "key": "b",
              "text": "64 mm"
            },
            {
              "key": "c",
              "text": "32 mm"
            },
            {
              "key": "d",
              "text": "24 mm"
            }
          ],
          "answer": "c",
          "explanation": "The minimum overlap is 4t, with t the batten-plate thickness: 4 x 8 = 32 mm. Equality satisfies this particular 'not less than' bound; weld strength and the other connection dimensions require separate checks.<p>Source note: Duplicate overlap facts at page 21 points 69 and 78 are combined. &#39;More than 4t&#39; is corrected to &#39;not less than 4t&#39;.</p><p>Capsule 4th ed., p. 21; topic 5 point 69; topic 5 point 78.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 69; topic 5 point 78",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n69",
              "capsule-t05-p021-n78"
            ]
          },
          "topic": "ACiE0505",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00072",
          "src": "CAP4-05-00072",
          "text": "In working-stress design, how are the calculated service-load stress and permissible stress related in a satisfactory check?",
          "options": [
            {
              "key": "a",
              "text": "Calculated stress does not exceed the permissible limit"
            },
            {
              "key": "b",
              "text": "Calculated service stress is divided by the allowable stress twice"
            },
            {
              "key": "c",
              "text": "Permissible stress always equals the calculated service stress"
            },
            {
              "key": "d",
              "text": "Calculated stress must equal the ultimate material strength"
            }
          ],
          "answer": "a",
          "explanation": "The working stress is the actual stress calculated under service loading; permissible stress is its allowed upper bound in the method. They are equal only at a fully utilized check, not by definition, and both must use compatible stress units.<p>Source note: Page 21 point 70 is clarified to distinguish demand from allowable stress.</p><p>Capsule 4th ed., p. 21; topic 5 point 70.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 70",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n70"
            ]
          },
          "topic": "ACiE0505",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00073",
          "src": "CAP4-05-00073",
          "text": "Overlapping thin steel sheets are pressed between electrodes and joined by localized electrical-resistance heating. Which welding process is described?",
          "options": [
            {
              "key": "a",
              "text": "Butt welding along a prepared groove"
            },
            {
              "key": "b",
              "text": "Longitudinal arc fillet welding"
            },
            {
              "key": "c",
              "text": "Continuous submerged-arc seam welding"
            },
            {
              "key": "d",
              "text": "Resistance spot welding"
            }
          ],
          "answer": "d",
          "explanation": "Resistance spot welding forms discrete weld nuggets at overlapping sheet interfaces using current and electrode pressure. Simply placing two plates together does not dictate the process; thickness, access and connection requirements must suit it.<p>Capsule 4th ed., p. 21; topic 5 point 72.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 72",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n72"
            ]
          },
          "topic": "ACiE0505",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00075",
          "src": "CAP4-05-00075",
          "text": "A heavy point reaction enters a steel beam through a short flange bearing length. Which local failure is specifically associated with crushing or crippling of the web near that load?",
          "options": [
            {
              "key": "a",
              "text": "Lateral-torsional buckling of the full beam span"
            },
            {
              "key": "b",
              "text": "Tensile yielding of the flexural tension flange"
            },
            {
              "key": "c",
              "text": "Uniform shear yielding over the clear web depth"
            },
            {
              "key": "d",
              "text": "Web crippling at the load-introduction region"
            }
          ],
          "answer": "d",
          "explanation": "A concentrated reaction produces high local compressive stress where force spreads from the flange into the web. Local yielding or crippling can govern; bearing stiffeners and adequate load distribution address a different check from overall beam bending.<p>Capsule 4th ed., p. 21; topic 5 point 74.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 74",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n74"
            ]
          },
          "topic": "ACiE0505",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00076",
          "src": "CAP4-05-00076",
          "text": "A fillet weld runs along the edge of a lap plate, parallel to the applied tensile force. What orientation is this?",
          "options": [
            {
              "key": "a",
              "text": "Full-penetration butt weld"
            },
            {
              "key": "b",
              "text": "Side or longitudinal fillet weld"
            },
            {
              "key": "c",
              "text": "Plug weld through a circular hole"
            },
            {
              "key": "d",
              "text": "End or transverse fillet weld"
            }
          ],
          "answer": "b",
          "explanation": "A side or longitudinal fillet has its weld axis parallel to the load direction; a transverse end fillet is perpendicular. The orientation describes load transfer geometry, not by itself the available design resistance.<p>Capsule 4th ed., p. 21; topic 5 point 75.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 75",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n75"
            ]
          },
          "topic": "ACiE0505",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00078",
          "src": "CAP4-05-00078",
          "text": "A bolted connection sees repeated load reversal and slip must be prevented at the specified design limit state. Which arrangement most directly addresses that requirement?",
          "options": [
            {
              "key": "a",
              "text": "Fitted bearing bolts checked only for static ultimate shear"
            },
            {
              "key": "b",
              "text": "Ordinary bearing bolts checked only for static shear and bearing"
            },
            {
              "key": "c",
              "text": "Snug-tight high-strength bearing bolts in standard clearance holes"
            },
            {
              "key": "d",
              "text": "Pretensioned high-strength friction-grip bolts with suitable faying surfaces"
            }
          ],
          "answer": "d",
          "explanation": "A designed friction-grip joint transfers force by friction generated by bolt pretension, limiting slip under reversal. Bolt grade alone is insufficient: surface condition, installation tension, hole details and the selected slip-resistance limit state matter.<p>Capsule 4th ed., p. 21; topic 5 point 77.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 77",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n77"
            ]
          },
          "topic": "ACiE0505",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00079",
          "src": "CAP4-05-00079",
          "text": "For a 22 mm bolt hole adjacent to a rolled or machine-flame-cut edge, what minimum edge distance follows from IS 800:2007 clause 10.2.4.2?",
          "options": [
            {
              "key": "a",
              "text": "33.0 mm"
            },
            {
              "key": "b",
              "text": "37.4 mm"
            },
            {
              "key": "c",
              "text": "44.0 mm"
            },
            {
              "key": "d",
              "text": "30.0 mm"
            }
          ],
          "answer": "a",
          "explanation": "For the stated edge finish, the minimum is 1.5 times the hole diameter, giving 1.5 x 22 = 33 mm, measured from hole centre to edge. Sheared or hand-flame-cut edges use the larger 1.7 multiplier under the same clause.<p>Capsule 4th ed., p. 21; topic 5 point 79.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 79",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n79"
            ]
          },
          "topic": "ACiE0505",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00080",
          "src": "CAP4-05-00080",
          "text": "A 6 mm fillet weld has only 20 mm of effective full-size length. How does it compare with the IS 800:2007 clause 10.5.4.1 minimum effective-length requirement?",
          "options": [
            {
              "key": "a",
              "text": "It fails; the minimum is always 60 mm"
            },
            {
              "key": "b",
              "text": "It passes; only the deposited length matters"
            },
            {
              "key": "c",
              "text": "It fails; at least 24 mm effective length is required"
            },
            {
              "key": "d",
              "text": "It passes; twice the weld size is sufficient"
            }
          ],
          "answer": "c",
          "explanation": "Effective fillet-weld length must be at least four times the size: 4 x 6 = 24 mm. The provided effective length is 20 mm and fails. Deposited length and end allowances must not be confused with effective full-size length.<p>Capsule 4th ed., p. 21; topic 5 point 80.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 80",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n80"
            ]
          },
          "topic": "ACiE0505",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00086",
          "src": "CAP4-05-00086",
          "text": "A purlin transmits a transverse gravity force to the middle of a roof-truss top-chord panel rather than to its joint. Under a case where that chord is in compression, what design actions arise?",
          "options": [
            {
              "key": "a",
              "text": "Local bending with no axial compression"
            },
            {
              "key": "b",
              "text": "Pure axial compression with no local bending"
            },
            {
              "key": "c",
              "text": "Local shear only, with neither axial force nor bending"
            },
            {
              "key": "d",
              "text": "Axial compression plus local bending"
            }
          ],
          "answer": "d",
          "explanation": "Loading between joints bends the chord segment in addition to the axial force from truss action. Ideal pin-jointed truss analysis assumes joint loads; a mid-panel load violates that assumption and requires a beam-column assessment for the stated force direction.<p>Capsule 4th ed., p. 21; topic 5 point 86.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 86",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n86"
            ]
          },
          "topic": "ACiE0505",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00096",
          "src": "CAP4-05-00096",
          "text": "Why are roof-truss purlins preferably aligned with top-chord panel joints in an ideal pin-jointed truss model?",
          "options": [
            {
              "key": "a",
              "text": "To introduce roof loads at joints and avoid local chord bending"
            },
            {
              "key": "b",
              "text": "To eliminate bending within each purlin between trusses"
            },
            {
              "key": "c",
              "text": "To remove the need for lateral restraint of the top chord"
            },
            {
              "key": "d",
              "text": "To prevent wind uplift from ever reversing the chord force"
            }
          ],
          "answer": "a",
          "explanation": "Joint loading supports the idealization of two-force truss members. Moving the load between joints introduces local chord bending. Even at joints, eccentric connections, continuous-member effects and lateral restraint require appropriate design attention.<p>Capsule 4th ed., p. 22; topic 5 point 95.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 95",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n95"
            ]
          },
          "topic": "ACiE0505",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00103",
          "src": "CAP4-05-00103",
          "text": "Two connections use high-strength bolts, but only one is installed and designed as a slip-resistant joint. What determines whether its load transfer is treated as friction-grip or bearing type?",
          "options": [
            {
              "key": "a",
              "text": "Plate thickness alone, regardless of the design limit state"
            },
            {
              "key": "b",
              "text": "Bolt-head shape alone, regardless of hole or surface details"
            },
            {
              "key": "c",
              "text": "Bolt material strength alone, regardless of installation"
            },
            {
              "key": "d",
              "text": "The specified pretension, surface preparation and design mechanism"
            }
          ],
          "answer": "d",
          "explanation": "High-strength bolts can be used in bearing-type or properly specified slip-resistant connections. Friction-grip action requires controlled pretension and suitable faying surfaces; the material's high strength alone does not establish slip resistance.<p>Capsule 4th ed., p. 22; topic 5 point 102.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 102",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n102"
            ]
          },
          "topic": "ACiE0505",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00112",
          "src": "CAP4-05-00112",
          "text": "A purlin is idealized as simply supported over 4 m, carrying a transverse uniformly distributed load of 2 kN/m in one bending plane. What maximum moment follows from this stated model?",
          "options": [
            {
              "key": "a",
              "text": "3.2 kN m"
            },
            {
              "key": "b",
              "text": "2.0 kN m"
            },
            {
              "key": "c",
              "text": "8.0 kN m"
            },
            {
              "key": "d",
              "text": "4.0 kN m"
            }
          ],
          "answer": "d",
          "explanation": "For a simply supported member under full-span UDL, Mmax = wL squared/8 = 2 x 4 squared/8 = 4 kN m. A coefficient such as one-tenth cannot be used without its continuity and loading assumptions. Real sloping-roof purlins may require two-plane bending checks.<p>Source note: Page 22 point 110 is extracted as W10L, plausibly WL/10, but the original coefficient layout and support model are unverified. The authored answer uses a fully specified equilibrium model, not a claimed recovery of that expression.</p><p>Capsule 4th ed., p. 22; topic 5 point 110.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 110",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n110"
            ]
          },
          "topic": "ACiE0505",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00115",
          "src": "CAP4-05-00115",
          "text": "A fillet-weld design calculation explicitly specifies an effective-throat coefficient K = 0.70 for its 70-degree fusion-face angle. For an 8 mm weld size, what effective throat follows from this specified coefficient?",
          "options": [
            {
              "key": "a",
              "text": "4.0 mm"
            },
            {
              "key": "b",
              "text": "5.6 mm"
            },
            {
              "key": "c",
              "text": "8.0 mm"
            },
            {
              "key": "d",
              "text": "6.55 mm"
            }
          ],
          "answer": "b",
          "explanation": "Effective throat is the specified coefficient times weld size: 0.70 x 8 = 5.6 mm. For an ideal equal-leg triangular weld at 70 degrees, the geometric throat would instead be 8 cos(35 degrees), about 6.55 mm. The specified design coefficient and exact geometric ratio are different quantities.<p>Source note: Page 22 point 114 attributes K = 0.70 to a design convention. Its exact IS 800:2007 Table 22 entry has not been independently verified here, so K is supplied as an explicit calculation assumption rather than certified as a code requirement. Actual design must use the applicable verified provision.</p><p>Capsule 4th ed., p. 22; topic 5 point 114.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 114",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n114"
            ]
          },
          "topic": "ACiE0505",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00117",
          "src": "CAP4-05-00117",
          "text": "Near a concentrated support reaction, a slender steel-beam web bows out of plane under local compressive stress before reaching a full plastic crushing state. Which failure mechanism is indicated?",
          "options": [
            {
              "key": "a",
              "text": "Tensile rupture of the bottom flange"
            },
            {
              "key": "b",
              "text": "Local web buckling"
            },
            {
              "key": "c",
              "text": "Uniform plastic shear yielding across the web"
            },
            {
              "key": "d",
              "text": "Lateral-torsional buckling of the full span"
            }
          ],
          "answer": "b",
          "explanation": "Local compressive stresses introduced by a concentrated load can destabilize a slender web. This is distinct from local material crushing or overall lateral-torsional buckling. Bearing stiffeners and adequate web geometry can be needed to provide a stable load path.<p>Source note: Page 22 point 116 ends after &#39;excessive&#39; and lacks its controlling stress description. This question explicitly selects local compression; a separate question covers shear buckling without pretending to recover the missing source word.</p><p>Capsule 4th ed., p. 22; topic 5 point 116.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 116",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n116"
            ]
          },
          "topic": "ACiE0505",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00118",
          "src": "CAP4-05-00118",
          "text": "A deep slender web panel is subjected mainly to in-plane shear, away from a concentrated bearing load. Which instability must be distinguished from local web buckling under a support reaction?",
          "options": [
            {
              "key": "a",
              "text": "Local buckling of the compression-flange outstand"
            },
            {
              "key": "b",
              "text": "Shear buckling of the web panel"
            },
            {
              "key": "c",
              "text": "Local web crippling under a bearing plate"
            },
            {
              "key": "d",
              "text": "Overall lateral-torsional buckling of the beam"
            }
          ],
          "answer": "b",
          "explanation": "In-plane shear creates diagonal principal compression that can buckle a slender web panel. The associated shear-buckling check is different from the concentrated-reaction web-bearing or local buckling checks. 'Web buckling' without a load case is therefore incomplete.<p>Capsule 4th ed., p. 22; topic 5 point 116.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 116",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n116"
            ]
          },
          "topic": "ACiE0505",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00129",
          "src": "CAP4-05-00129",
          "text": "An illustrative web-buckling calculation assumes a concentrated load spreads at 45 degrees through a vertical depth of 120 mm, with unobstructed spread on both sides of an 80 mm bearing length. What effective spread width results?",
          "options": [
            {
              "key": "a",
              "text": "320 mm"
            },
            {
              "key": "b",
              "text": "240 mm"
            },
            {
              "key": "c",
              "text": "200 mm"
            },
            {
              "key": "d",
              "text": "160 mm"
            }
          ],
          "answer": "a",
          "explanation": "At 45 degrees, horizontal spread equals vertical travel. Each side adds 120 mm, giving 80 + 2 x 120 = 320 mm. End proximity can truncate the spread, and actual code web-bearing, buckling and stiffener rules must use their own specified geometry.<p>Source note: Duplicate page 23 points 130 and 135 are combined under an explicit 45-degree idealization. No universal code dispersion rule or unverified clause is asserted; its original code/model provenance remains for parent review.</p><p>Capsule 4th ed., p. 23; topic 5 point 130; topic 5 point 135.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 130; topic 5 point 135",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n130",
              "capsule-t05-p023-n135"
            ]
          },
          "topic": "ACiE0505",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00134",
          "src": "CAP4-05-00134",
          "text": "Why may a long end-loaded welded lap joint require a reduction from a simple uniform-stress throat-area capacity estimate?",
          "options": [
            {
              "key": "a",
              "text": "Plate thickness alone fixes a universal maximum effective length"
            },
            {
              "key": "b",
              "text": "Load is necessarily uniform along the weld by force equilibrium"
            },
            {
              "key": "c",
              "text": "Throat size automatically decreases as the weld is lengthened"
            },
            {
              "key": "d",
              "text": "Load transfer along the weld length can be nonuniform"
            }
          ],
          "answer": "d",
          "explanation": "Long joints can concentrate load transfer near their ends because connected parts deform differently along the overlap. Appropriate long-joint provisions account for reduced effectiveness; they do not establish a universal failure threshold of sixteen plate thicknesses or imply total capacity must fall with every increase in length.<p>Source note: Page 23 point 134&#39;s &#39;greater than 16t&#39; threshold and definition of t are unsupported. No numerical replacement threshold is invented; parent should check the original intended provision.</p><p>Capsule 4th ed., p. 23; topic 5 point 134.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 134",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n134"
            ]
          },
          "topic": "ACiE0505",
          "kind": "application"
        },
        {
          "id": "CAP4-10-00175",
          "src": "CAP4-10-00175",
          "text": "A designer considers a steel truss for a 32 m pedestrian crossing. Which justification is sounder than treating 32 m as a universal truss-bridge upper limit?",
          "options": [
            {
              "key": "a",
              "text": "Approve it solely because the span is below a remembered number"
            },
            {
              "key": "b",
              "text": "Select it because every truss becomes unstable above 32 m"
            },
            {
              "key": "c",
              "text": "Select it from structural, loading, erection and economic checks"
            },
            {
              "key": "d",
              "text": "Reject it because trusses work only in pure bending without axial forces"
            }
          ],
          "answer": "c",
          "explanation": "Trusses carry major loads through an arrangement of axial-force members and can be designed for many spans. A 32 m limit may belong to a particular standardised rural bridge system, not the structural form universally.<p>Source note: Appendix p42 n3: exact 32 m recommended range lacks a named trail-bridge catalogue and edition; parent should verify that source before adopting it as a design limit.</p><p>Capsule 4th ed., p. 42; rural point 3.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 42; rural point 3",
            "pages": [
              42
            ],
            "points": [
              "capsule-t10-p042-n3"
            ]
          },
          "topic": "ACiE0505",
          "kind": "application"
        }
      ]
    },
    {
      "id": "ACiE0506",
      "name": "Timber and masonry structures",
      "subject": "Design of Structures",
      "questions": [
        {
          "id": "CAP4-01-00049",
          "src": "CAP4-01-00049",
          "text": "For this tied cavity-wall exercise, take effective thickness as the larger of the stronger leaf's thickness and two-thirds of the sum of leaf thicknesses. The stronger leaf is 150 mm and the other is 100 mm. What is the effective thickness?",
          "options": [
            {
              "key": "a",
              "text": "150.0 mm"
            },
            {
              "key": "b",
              "text": "100.0 mm"
            },
            {
              "key": "c",
              "text": "250.0 mm"
            },
            {
              "key": "d",
              "text": "166.7 mm"
            }
          ],
          "answer": "d",
          "explanation": "Two-thirds of (150 + 100) is 166.7 mm, exceeding 150 mm. The cavity width is not added. This calculation uses an explicitly supplied model; actual masonry rules depend on ties, loading, restraint and the governing standard.<p>Source note: p3 n46: the source&#39;s effective-thickness rule is supplied as an exercise assumption, not certified as a universal or current code provision. Parent should confirm its originating clause before presenting it as such.</p><p>Capsule 4th ed., p. 3; topic 1 point 46.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 3; topic 1 point 46",
            "pages": [
              3
            ],
            "points": [
              "capsule-t01-p003-n46"
            ]
          },
          "topic": "ACiE0506",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00039",
          "src": "CAP4-04-00039",
          "text": "In an IS 1905:1987 clause 5.4.1.4 masonry check, load eccentricity e across wall thickness t gives e/t = 1/12, and the otherwise applicable compressive allowance is 0.80 MPa. What edge-stress allowance follows from the permitted eccentric-loading increase?",
          "options": [
            {
              "key": "a",
              "text": "1.00 MPa"
            },
            {
              "key": "b",
              "text": "0.85 MPa"
            },
            {
              "key": "c",
              "text": "0.60 MPa"
            },
            {
              "key": "d",
              "text": "1.20 MPa"
            }
          ],
          "answer": "a",
          "explanation": "Here 1/24 < e/t < 1/6. The stated provision permits a 25% increase in the applicable compressive allowance, giving 1.25 x 0.80 = 1.00 MPa. It does not increase capacity automatically: the actual extreme stress and all other applicable factors must still be checked.<p>Source note: Page 16 point 37: full page text restores 1/24. Basis: nearby chapter-05-timber-masonry.js, timber-masonry-eccentric-compression, citing IS 1905:1987 5.4.1.4; no current Nepal adoption claim.</p><p>Capsule 4th ed., p. 16; topic 4 point 37.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 37",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n37"
            ]
          },
          "topic": "ACiE0506",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00040",
          "src": "CAP4-04-00040",
          "text": "An uncracked rectangular wall has average compressive stress 0.60 MPa and load eccentricity e = t/24 across thickness t. Before applying any code concession, what are its elastic extreme stresses?",
          "options": [
            {
              "key": "a",
              "text": "0.90 MPa and 0.30 MPa, both compression"
            },
            {
              "key": "b",
              "text": "0.60 MPa and 0.60 MPa, both compression"
            },
            {
              "key": "c",
              "text": "1.20 MPa compression and zero stress"
            },
            {
              "key": "d",
              "text": "0.75 MPa and 0.45 MPa, both compression"
            }
          ],
          "answer": "d",
          "explanation": "For a rectangular section, sigma = (P/A)(1 +/- 6e/t). Since 6e/t = 1/4, the stresses are 0.60 x 1.25 = 0.75 MPa and 0.60 x 0.75 = 0.45 MPa. Permission to ignore a small bending contribution in a code check does not make that contribution physically zero.<p>Capsule 4th ed., p. 16; topic 4 point 37.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 37",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n37"
            ]
          },
          "topic": "ACiE0506",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00028",
          "src": "CAP4-05-00028",
          "text": "An unreinforced masonry bed joint is subject to horizontal shear. Why is a mortar mix label of 1:1:6 alone insufficient to assign one universal permissible shear stress?",
          "options": [
            {
              "key": "a",
              "text": "Normal compression must always be excluded from joint behaviour"
            },
            {
              "key": "b",
              "text": "The mix ratio directly specifies the wall's allowable lateral force"
            },
            {
              "key": "c",
              "text": "Mortar cube compressive strength alone equals allowable joint shear"
            },
            {
              "key": "d",
              "text": "Applicable provisions and normal compression also affect resistance"
            }
          ],
          "answer": "d",
          "explanation": "Joint shear is associated with bond and friction, and normal compression can increase sliding resistance. A permissible design stress must follow the applicable masonry provision and its conditions; a nominal mortar proportion alone does not justify the source's fixed 0.15 MPa.<p>Source note: Page 20 point 27: exact provenance and normal-stress condition for 0.15 MPa remain unverified. Tests the defensible joint-shear principle without certifying that threshold.</p><p>Capsule 4th ed., p. 20; topic 5 point 27.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 27",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n27"
            ]
          },
          "topic": "ACiE0506",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00055",
          "src": "CAP4-05-00055",
          "text": "Under IS 883:2016 clause 7.6.1.5, how is the permissible load of a circular solid timber column limited relative to the corresponding equal-area square column?",
          "options": [
            {
              "key": "a",
              "text": "It must use the square allowance times the circular bending form factor"
            },
            {
              "key": "b",
              "text": "It must equal the square allowance times the diameter-to-side ratio"
            },
            {
              "key": "c",
              "text": "It may reach 1.05 times the square-column allowance"
            },
            {
              "key": "d",
              "text": "It must not exceed the square-column allowance"
            }
          ],
          "answer": "d",
          "explanation": "The cited timber provision caps the circular-column permissible load by the corresponding equal-area square-column allowance. It is not a universal rule for RC or steel columns, nor proof that equal-area sections have identical radii of gyration.<p>Source note: Page 21 point 55 omits its timber-code context. Restored IS 883:2016 attribution and mapped to ACiE0506.</p><p>Capsule 4th ed., p. 21; topic 5 point 55.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 55",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n55"
            ]
          },
          "topic": "ACiE0506",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00083",
          "src": "CAP4-05-00083",
          "text": "Two comparable timber specimens are loaded in direct compression, one parallel and one perpendicular to straight grain. Which general design distinction is appropriate?",
          "options": [
            {
              "key": "a",
              "text": "Equal density makes compression strength independent of grain"
            },
            {
              "key": "b",
              "text": "Perpendicular-grain compressive resistance is generally greater"
            },
            {
              "key": "c",
              "text": "Parallel-grain compressive resistance is generally greater"
            },
            {
              "key": "d",
              "text": "Parallel compression and longitudinal shear use one strength value"
            }
          ],
          "answer": "c",
          "explanation": "Timber is anisotropic: direct resistance along the fibres is generally greater than cross-grain compression or bearing resistance. The appropriate property must match the stress direction and failure mode; high longitudinal strength does not imply high splitting or longitudinal-shear resistance.<p>Source note: Page 21 point 83 is qualified by loading mode; &#39;maximum parallel to grain&#39; is not a universal statement about every timber property.</p><p>Capsule 4th ed., p. 21; topic 5 point 83.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 83",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n83"
            ]
          },
          "topic": "ACiE0506",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00084",
          "src": "CAP4-05-00084",
          "text": "Which construction category is specifically addressed by NBC 203:2015, Guidelines for Earthquake Resistant Building Construction?",
          "options": [
            {
              "key": "a",
              "text": "All reinforced-concrete buildings without scope limits"
            },
            {
              "key": "b",
              "text": "All high-rise moment-resisting steel frames"
            },
            {
              "key": "c",
              "text": "Low-strength masonry within its stated scope"
            },
            {
              "key": "d",
              "text": "Every prestressed-concrete bridge system"
            }
          ],
          "answer": "c",
          "explanation": "NBC 203:2015 concerns low-strength masonry, including its specified mud-mortar construction scope and height and configuration limits. It is not a general substitute for engineered seismic design or an RC detailing code.<p>Capsule 4th ed., p. 21; topic 5 point 84.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 84",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n84"
            ]
          },
          "topic": "ACiE0506",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00085",
          "src": "CAP4-05-00085",
          "text": "In discussing building regulation in Nepal, which distinction between the Building Act and the Nepal National Building Code is sound?",
          "options": [
            {
              "key": "a",
              "text": "The NBC supplies the Act's legal framework; the Act supplies all member details"
            },
            {
              "key": "b",
              "text": "The Act supplies a legal framework; the NBC supplies technical provisions"
            },
            {
              "key": "c",
              "text": "Approved project drawings replace the applicable Act and NBC requirements"
            },
            {
              "key": "d",
              "text": "A single NBC guideline automatically applies beyond all of its scope limits"
            }
          ],
          "answer": "b",
          "explanation": "Building legislation and its implementation framework are distinct from the technical requirements organized in the Nepal National Building Code. Applicable NBC provisions address building performance and construction; a code title alone does not establish project-specific compliance.<p>Source note: Page 21 point 85 conflates a law with the technical code. No unverified current approval threshold or legal amendment is asserted.</p><p>Capsule 4th ed., p. 21; topic 5 point 85.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 85",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n85"
            ]
          },
          "topic": "ACiE0506",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00093",
          "src": "CAP4-05-00093",
          "text": "In the pin-ended solid-timber-column convention of IS 883:2016 clause 7.6.1.4, which ratio is limited to 50?",
          "options": [
            {
              "key": "a",
              "text": "Unsupported length divided by least lateral dimension"
            },
            {
              "key": "b",
              "text": "Cross-sectional area divided by unsupported length squared"
            },
            {
              "key": "c",
              "text": "Maximum bending moment divided by axial force"
            },
            {
              "key": "d",
              "text": "Unsupported length divided by least radius of gyration"
            }
          ],
          "answer": "a",
          "explanation": "The timber provision uses S/d, where d is the least lateral dimension, not the radius of gyration. Its solid-column cap is 50 in the stated length convention; other end restraints need suitable length modification and capacity checks remain necessary.<p>Source note: Page 22 point 92 omits the S/d definition. Do not confuse it with the Le/r convention in point 117.</p><p>Capsule 4th ed., p. 22; topic 5 point 92.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 92",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n92"
            ]
          },
          "topic": "ACiE0506",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00094",
          "src": "CAP4-05-00094",
          "text": "A pin-ended solid timber post is 3.6 m long with a 100 mm by 150 mm section. What S/d ratio is used for the IS 883:2016 solid-column geometric limit?",
          "options": [
            {
              "key": "a",
              "text": "50"
            },
            {
              "key": "b",
              "text": "124.7"
            },
            {
              "key": "c",
              "text": "24"
            },
            {
              "key": "d",
              "text": "36"
            }
          ],
          "answer": "d",
          "explanation": "Convert length to 3600 mm and use the least lateral dimension, 100 mm. Thus S/d = 3600/100 = 36, below the geometric cap of 50. Using 150 mm gives 24; using a radius of gyration answers a different slenderness definition.<p>Capsule 4th ed., p. 22; topic 5 point 92.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 92",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n92"
            ]
          },
          "topic": "ACiE0506",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00105",
          "src": "CAP4-05-00105",
          "text": "A masonry gable rises above the horizontal eaves-level band. Where does a gable band normally run to tie the top of that masonry beneath the pitched roof?",
          "options": [
            {
              "key": "a",
              "text": "Along the sloping top edges of the gable"
            },
            {
              "key": "b",
              "text": "Only along the roof ridge between the two gables"
            },
            {
              "key": "c",
              "text": "Only along the horizontal eaves at the base of the gable"
            },
            {
              "key": "d",
              "text": "Only along the horizontal lintel below the gable"
            }
          ],
          "answer": "a",
          "explanation": "The gable band follows the sloping upper outline of the masonry gable and connects with the relevant horizontal band and roof anchorage. Describing it merely as a roof-level band confuses it with the horizontal eaves or roof band and misses the gable restraint function.<p>Source note: Page 22 point 104&#39;s location is clarified; no unverified band dimensions or reinforcement schedule is prescribed.</p><p>Capsule 4th ed., p. 22; topic 5 point 104.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 104",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n104"
            ]
          },
          "topic": "ACiE0506",
          "kind": "application"
        },
        {
          "id": "CAP4-05-00116",
          "src": "CAP4-05-00116",
          "text": "Why may hydraulic lime be selected for a compatible masonry mortar that must harden in persistently damp conditions?",
          "options": [
            {
              "key": "a",
              "text": "It makes mortar strength independent of sand and curing"
            },
            {
              "key": "b",
              "text": "It hardens only by complete evaporation with no chemical reaction"
            },
            {
              "key": "c",
              "text": "Its hydraulic compounds can harden by reaction with water"
            },
            {
              "key": "d",
              "text": "It requires more atmospheric carbon dioxide than non-hydraulic lime"
            }
          ],
          "answer": "c",
          "explanation": "Hydraulic lime has constituents that harden through hydration, while non-hydraulic lime relies primarily on carbonation. The suitable lime type still depends on masonry compatibility, exposure and required performance; not every lime mortar must use hydraulic lime.<p>Source note: Page 22 point 115&#39;s generalization is replaced by a defined selection condition and the hydration/carbonation distinction.</p><p>Capsule 4th ed., p. 22; topic 5 point 115.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 115",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n115"
            ]
          },
          "topic": "ACiE0506",
          "kind": "application"
        }
      ]
    }
  ]
};
