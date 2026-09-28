window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["capsule-04"] = {
  "title": "NEC Quick Revision Capsule - Structural Mechanics",
  "negativeMarking": 0,
  "chapters": [
    {
      "id": "ACiE0401",
      "name": "Shear forces and bending moments",
      "subject": "Structural Mechanics",
      "questions": [
        {
          "id": "CAP4-04-00001",
          "src": "CAP4-04-00001",
          "text": "If a bending moment \\(M\\) acts at each support of a simply supported beam, the SFD has ordinates ______ at all sections.",
          "options": [
            {
              "key": "a",
              "text": "Equal to \\(M\\)"
            },
            {
              "key": "b",
              "text": "Zero"
            },
            {
              "key": "c",
              "text": "Equal to \\(\\dfrac{M}{L}\\)"
            },
            {
              "key": "d",
              "text": "Equal to \\(\\dfrac{2M}{L}\\)"
            }
          ],
          "answer": "b",
          "explanation": "Equal and opposite end moments on a simply supported beam produce no support reactions, so there is no shear anywhere: the SFD has zero ordinates at all sections, while the bending moment is a constant \\(M\\).<p>Capsule 4th ed., p. 15; topic 4 point 1.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 1",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n1"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00002",
          "src": "CAP4-04-00002",
          "text": "If the shear force along a section of a beam is zero, the bending moment at that section is ______.",
          "options": [
            {
              "key": "a",
              "text": "Discontinuous"
            },
            {
              "key": "b",
              "text": "Equal to the shear force"
            },
            {
              "key": "c",
              "text": "Zero"
            },
            {
              "key": "d",
              "text": "Either maximum or minimum"
            }
          ],
          "answer": "d",
          "explanation": "Since \\(V = \\dfrac{dM}{dx}\\), a section where the shear force is zero is a turning point of the bending moment diagram, so the bending moment there is either a maximum or a minimum.<p>Capsule 4th ed., p. 15; topic 4 point 2.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 2",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n2"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00005",
          "src": "CAP4-04-00005",
          "text": "While designing a beam, the bending moment at the ______ is important.",
          "options": [
            {
              "key": "a",
              "text": "Ends of an overhang"
            },
            {
              "key": "b",
              "text": "Quarter-span points"
            },
            {
              "key": "c",
              "text": "Supports"
            },
            {
              "key": "d",
              "text": "Centre"
            }
          ],
          "answer": "d",
          "explanation": "For simply supported beams under symmetrical loads, the bending moment is greatest at the centre, so the bending moment at mid-span governs the design of the section.<p>Capsule 4th ed., p. 15; topic 4 point 5.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 5",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n5"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00006",
          "src": "CAP4-04-00006",
          "text": "The relation between shear force \\(S\\) and bending moment \\(M\\) is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(S = \\dfrac{d^2M}{dx^2}\\)"
            },
            {
              "key": "b",
              "text": "\\(M = \\dfrac{dS}{dx}\\)"
            },
            {
              "key": "c",
              "text": "\\(\\dfrac{dM}{dS} = x\\)"
            },
            {
              "key": "d",
              "text": "\\(S = \\dfrac{dM}{dx}\\)"
            }
          ],
          "answer": "d",
          "explanation": "The rate of change of bending moment along a beam equals the shear force, \\(S = \\dfrac{dM}{dx}\\); likewise, the rate of change of shear force equals the intensity of loading.<p>Capsule 4th ed., p. 15; topic 4 point 6.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 6",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n6"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00008",
          "src": "CAP4-04-00008",
          "text": "In a simply supported beam AB of span \\(L\\), two equal point loads \\(P\\) act at a distance \\(L/3\\) from each support. The shear force at a distance \\(L/6\\) from support A is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{P}{2}\\)"
            },
            {
              "key": "b",
              "text": "\\(0\\)"
            },
            {
              "key": "c",
              "text": "\\(P\\)"
            },
            {
              "key": "d",
              "text": "\\(2P\\)"
            }
          ],
          "answer": "c",
          "explanation": "By symmetry each reaction is \\(P\\). At \\(\\dfrac{L}{6}\\) from A, before the first load, the only force to the left of the section is the reaction at A, so the shear force there is \\(P\\).<p>Capsule 4th ed., p. 15; topic 4 point 8.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 8",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n8"
            ]
          },
          "topic": "ACiE0401",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00011",
          "src": "CAP4-04-00011",
          "text": "An abrupt change in the bending moment diagram occurs where a ______ is applied.",
          "options": [
            {
              "key": "a",
              "text": "Uniformly varying load"
            },
            {
              "key": "b",
              "text": "Point load"
            },
            {
              "key": "c",
              "text": "Couple"
            },
            {
              "key": "d",
              "text": "Uniformly distributed load"
            }
          ],
          "answer": "c",
          "explanation": "A concentrated couple causes a sudden jump in the bending moment diagram equal to the couple, while the shear force is unchanged. A point load causes a sudden jump in the shear force diagram instead.<p>Capsule 4th ed., p. 15; topic 4 point 11.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 11",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n11"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00012",
          "src": "CAP4-04-00012",
          "text": "A positive (sagging) bending moment bends a beam into a shape that is ______.",
          "options": [
            {
              "key": "a",
              "text": "S-shaped"
            },
            {
              "key": "b",
              "text": "Convex upward"
            },
            {
              "key": "c",
              "text": "Straight"
            },
            {
              "key": "d",
              "text": "Convex downward"
            }
          ],
          "answer": "d",
          "explanation": "Under a positive (sagging) bending moment the beam bends convex downward, with the top fibres in compression and the bottom fibres in tension. A hogging moment bends it convex upward.<p>Capsule 4th ed., p. 15; topic 4 point 12.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 12",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n12"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00013",
          "src": "CAP4-04-00013",
          "text": "If a simply supported beam carries a UDL across its entire span, the shear force ______.",
          "options": [
            {
              "key": "a",
              "text": "Varies parabolically"
            },
            {
              "key": "b",
              "text": "Is constant"
            },
            {
              "key": "c",
              "text": "Changes linearly"
            },
            {
              "key": "d",
              "text": "Is zero throughout"
            }
          ],
          "answer": "c",
          "explanation": "With a uniformly distributed load \\(w\\), the shear force \\(V(x) = \\dfrac{wL}{2} - wx\\) changes linearly from \\(+\\dfrac{wL}{2}\\) to \\(-\\dfrac{wL}{2}\\), while the bending moment varies parabolically.<p>Capsule 4th ed., p. 15; topic 4 point 13.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 13",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n13"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00014",
          "src": "CAP4-04-00014",
          "text": "When the bending moment is constant over a beam, the shear force over the entire span is ______.",
          "options": [
            {
              "key": "a",
              "text": "Zero"
            },
            {
              "key": "b",
              "text": "Maximum"
            },
            {
              "key": "c",
              "text": "Linearly varying"
            },
            {
              "key": "d",
              "text": "Constant and non-zero"
            }
          ],
          "answer": "a",
          "explanation": "Shear force is the rate of change of bending moment, so a constant bending moment means \\(\\dfrac{dM}{dx} = 0\\) and the shear force is zero throughout; this condition is called pure bending.<p>Capsule 4th ed., pp. 15, 17; topic 4 point 14; topic 4 point 63.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 15, 17; topic 4 point 14; topic 4 point 63",
            "pages": [
              15,
              17
            ],
            "points": [
              "capsule-t04-p015-n14",
              "capsule-t04-p017-n63"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00015",
          "src": "CAP4-04-00015",
          "text": "A moment \\(M\\) acts at the free end of a cantilever beam. The maximum bending moment developed in the beam is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{M}{2}\\)"
            },
            {
              "key": "b",
              "text": "\\(2M\\)"
            },
            {
              "key": "c",
              "text": "\\(M\\)"
            },
            {
              "key": "d",
              "text": "Zero"
            }
          ],
          "answer": "c",
          "explanation": "An end couple on a cantilever produces the same bending moment \\(M\\) at every section and no shear force, so the maximum bending moment in the beam is \\(M\\).<p>Capsule 4th ed., p. 15; topic 4 point 15.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 15",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n15"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00026",
          "src": "CAP4-04-00026",
          "text": "For a simply supported beam with a concentrated load at the midpoint, the shape of the BMD is a ______.",
          "options": [
            {
              "key": "a",
              "text": "Rectangle"
            },
            {
              "key": "b",
              "text": "Parabola"
            },
            {
              "key": "c",
              "text": "Trapezium"
            },
            {
              "key": "d",
              "text": "Triangle"
            }
          ],
          "answer": "d",
          "explanation": "A central point load gives straight-line bending moment diagrams from each support to the load, forming a triangle with its maximum, \\(\\dfrac{WL}{4}\\), at mid-span. A UDL gives a parabola.<p>Capsule 4th ed., p. 16; topic 4 point 25.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 25",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n25"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00049",
          "src": "CAP4-04-00049",
          "text": "The bending moment at the end supports of a simply supported beam is ______.",
          "options": [
            {
              "key": "a",
              "text": "Equal to the support reaction"
            },
            {
              "key": "b",
              "text": "Equal to \\(\\dfrac{WL}{8}\\)"
            },
            {
              "key": "c",
              "text": "Zero"
            },
            {
              "key": "d",
              "text": "Maximum"
            }
          ],
          "answer": "c",
          "explanation": "The hinge and roller supports of a simply supported beam cannot resist moment, so the bending moment at the end supports is zero; it is greatest within the span.<p>Capsule 4th ed., p. 17; topic 4 point 47.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 47",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n47"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00050",
          "src": "CAP4-04-00050",
          "text": "In a simply supported beam with a UDL, the absolute maximum shear force occurs ______.",
          "options": [
            {
              "key": "a",
              "text": "Uniformly along the span"
            },
            {
              "key": "b",
              "text": "At mid-span"
            },
            {
              "key": "c",
              "text": "At the quarter points"
            },
            {
              "key": "d",
              "text": "Near the supports"
            }
          ],
          "answer": "d",
          "explanation": "The shear force, \\(V = \\dfrac{wL}{2} - wx\\), is greatest in magnitude, \\(\\dfrac{wL}{2}\\), next to the supports and zero at mid-span, where the bending moment is maximum.<p>Capsule 4th ed., p. 17; topic 4 point 48.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 48",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n48"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00071",
          "src": "CAP4-04-00071",
          "text": "The point of contraflexure is the point where the bending moment ______.",
          "options": [
            {
              "key": "a",
              "text": "Changes sign"
            },
            {
              "key": "b",
              "text": "Equals the shear force"
            },
            {
              "key": "c",
              "text": "Is minimum"
            },
            {
              "key": "d",
              "text": "Is maximum"
            }
          ],
          "answer": "a",
          "explanation": "At a point of contraflexure the bending moment passes through zero and changes sign, so the curvature of the beam reverses there.<p>Capsule 4th ed., pp. 17, 18; topic 4 point 69; topic 4 point 78.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 17, 18; topic 4 point 69; topic 4 point 78",
            "pages": [
              17,
              18
            ],
            "points": [
              "capsule-t04-p017-n69",
              "capsule-t04-p018-n78"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00078",
          "src": "CAP4-04-00078",
          "text": "If the shear force diagram of a simply supported beam is parabolic, the load on the beam is ______.",
          "options": [
            {
              "key": "a",
              "text": "A point load"
            },
            {
              "key": "b",
              "text": "A couple"
            },
            {
              "key": "c",
              "text": "A uniformly distributed load"
            },
            {
              "key": "d",
              "text": "A linearly varying distributed load"
            }
          ],
          "answer": "d",
          "explanation": "The load intensity is the rate of change of shear force, so a parabolic SFD means a linearly varying load. A UDL gives a linear SFD, and point loads give steps in it.<p>Capsule 4th ed., p. 18; topic 4 point 76.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 76",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n76"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00090",
          "src": "CAP4-04-00090",
          "text": "When a UDL longer than the span covers a simply supported beam entirely, the maximum bending moment occurs at the ______.",
          "options": [
            {
              "key": "a",
              "text": "Centre"
            },
            {
              "key": "b",
              "text": "Third points"
            },
            {
              "key": "c",
              "text": "Supports"
            },
            {
              "key": "d",
              "text": "Quarter points"
            }
          ],
          "answer": "a",
          "explanation": "With the whole span uniformly loaded, the shear force is zero at mid-span, so the maximum bending moment, \\(\\dfrac{wL^2}{8}\\), occurs at the centre.<p>Capsule 4th ed., p. 18; topic 4 point 90.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 90",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n90"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00091",
          "src": "CAP4-04-00091",
          "text": "If the shear force is constant throughout a portion of a beam, the bending moment there is ______.",
          "options": [
            {
              "key": "a",
              "text": "Linear"
            },
            {
              "key": "b",
              "text": "Parabolic"
            },
            {
              "key": "c",
              "text": "Constant"
            },
            {
              "key": "d",
              "text": "Zero"
            }
          ],
          "answer": "a",
          "explanation": "The bending moment changes at a rate equal to the shear force, \\(\\dfrac{dM}{dx} = V\\), so a constant shear force gives a linearly varying bending moment.<p>Capsule 4th ed., p. 18; topic 4 point 91.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 91",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n91"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00092",
          "src": "CAP4-04-00092",
          "text": "A simply supported beam with a UDL of \\(w\\) kN/m over its span \\(L\\) has a maximum bending moment \\(M\\). If the span is doubled, the maximum bending moment becomes ______.",
          "options": [
            {
              "key": "a",
              "text": "8M"
            },
            {
              "key": "b",
              "text": "4M"
            },
            {
              "key": "c",
              "text": "2M"
            },
            {
              "key": "d",
              "text": "M"
            }
          ],
          "answer": "b",
          "explanation": "For full-span UDL, \\[M_{\\max} = \\dfrac{wL^2}{8}\\] Holding \\(w\\) fixed and replacing \\(L\\) by \\(2L\\) multiplies the moment by \\(2^2 = 4\\). The total load also doubles, so this is not a comparison at constant total force.<p>Capsule 4th ed., p. 18; topic 4 point 93.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 93",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n93"
            ]
          },
          "topic": "ACiE0401",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00093",
          "src": "CAP4-04-00093",
          "text": "For a simply supported beam with a UDL of intensity \\(w\\), the maximum bending moment is proportional to ______.",
          "options": [
            {
              "key": "a",
              "text": "The square root of the span"
            },
            {
              "key": "b",
              "text": "The square of the span"
            },
            {
              "key": "c",
              "text": "The cube of the span"
            },
            {
              "key": "d",
              "text": "The span"
            }
          ],
          "answer": "b",
          "explanation": "The maximum bending moment is \\(\\dfrac{wL^2}{8}\\), so for a given intensity \\(w\\) it is proportional to the square of the span; doubling the span gives four times the moment.<p>Capsule 4th ed., p. 18; topic 4 point 93.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 93",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n93"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00104",
          "src": "CAP4-04-00104",
          "text": "The shear force diagram of a cantilever beam with a point load at the free end is a ______.",
          "options": [
            {
              "key": "a",
              "text": "Rectangle"
            },
            {
              "key": "b",
              "text": "Parabola"
            },
            {
              "key": "c",
              "text": "Trapezium"
            },
            {
              "key": "d",
              "text": "Triangle"
            }
          ],
          "answer": "a",
          "explanation": "A tip point load \\(W\\) gives the same shear force \\(W\\) at every section of the cantilever, so the SFD is a rectangle, while the BMD is a triangle.<p>Capsule 4th ed., p. 19; topic 4 point 105.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 4 point 105",
            "pages": [
              19
            ],
            "points": [
              "capsule-t04-p019-n105"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00110",
          "src": "CAP4-04-00110",
          "text": "A simply supported beam of length \\(a\\) carries a load varying from zero at one end to \\(w\\) at the other. The shear force is zero at a distance ______ from the least loaded end.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{2a}{3}\\)"
            },
            {
              "key": "b",
              "text": "\\(\\dfrac{a}{3}\\)"
            },
            {
              "key": "c",
              "text": "\\(\\dfrac{a}{\\sqrt{3}}\\)"
            },
            {
              "key": "d",
              "text": "\\(\\dfrac{a}{2}\\)"
            }
          ],
          "answer": "c",
          "explanation": "The reaction at the unloaded end is \\(\\dfrac{wa}{6}\\), and the load between that end and a section at \\(x\\) is \\(\\dfrac{wx^2}{2a}\\). Equating them gives \\(x^2 = \\dfrac{a^2}{3}\\), so \\(x = \\dfrac{a}{\\sqrt{3}}\\), about \\(0.577a\\).<p>Capsule 4th ed., p. 19; topic 4 point 109; topic 4 point 121.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 4 point 109; topic 4 point 121",
            "pages": [
              19
            ],
            "points": [
              "capsule-t04-p019-n109",
              "capsule-t04-p019-n121"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00118",
          "src": "CAP4-04-00118",
          "text": "When a point load is applied to a cantilever beam at its free end, the bending moment diagram is a ______.",
          "options": [
            {
              "key": "a",
              "text": "Triangle"
            },
            {
              "key": "b",
              "text": "Trapezium"
            },
            {
              "key": "c",
              "text": "Parabola"
            },
            {
              "key": "d",
              "text": "Rectangle"
            }
          ],
          "answer": "a",
          "explanation": "Under a tip load \\(W\\), the bending moment varies linearly from zero at the free end to \\(WL\\) at the fixed end, so the BMD is a triangle; the SFD is a rectangle.<p>Capsule 4th ed., p. 19; topic 4 point 119.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 4 point 119",
            "pages": [
              19
            ],
            "points": [
              "capsule-t04-p019-n119"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00046",
          "src": "CAP4-05-00046",
          "text": "The bending moment in a statically determinate beam is not a function of the ______ of the beam.",
          "options": [
            {
              "key": "a",
              "text": "Loading"
            },
            {
              "key": "b",
              "text": "Cross-section"
            },
            {
              "key": "c",
              "text": "Support conditions"
            },
            {
              "key": "d",
              "text": "Span"
            }
          ],
          "answer": "b",
          "explanation": "In a statically determinate beam the bending moment follows from equilibrium alone, that is, from the loads, span and supports, so it does not depend on the cross-section; the section only affects the stresses.<p>Capsule 4th ed., p. 20; topic 5 point 45.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 45",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n45"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00052",
          "src": "CAP4-05-00052",
          "text": "A cantilever beam of span \\(L\\) m carries a couple \\(M_0\\) at its free end. The maximum bending moment is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{M_0}{L}\\)"
            },
            {
              "key": "b",
              "text": "\\(M_0L\\)"
            },
            {
              "key": "c",
              "text": "\\(M_0\\)"
            },
            {
              "key": "d",
              "text": "\\(\\dfrac{M_0}{2}\\)"
            }
          ],
          "answer": "c",
          "explanation": "A couple at the free end produces the same bending moment \\(M_0\\) at every section of the cantilever and no shear, so the maximum bending moment is \\(M_0\\), whatever the span.<p>Capsule 4th ed., p. 20; topic 5 point 51.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 51",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n51"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00070",
          "src": "CAP4-05-00070",
          "text": "The word \"magnitude\" means ______.",
          "options": [
            {
              "key": "a",
              "text": "Position"
            },
            {
              "key": "b",
              "text": "Duration"
            },
            {
              "key": "c",
              "text": "Enormity (size)"
            },
            {
              "key": "d",
              "text": "Direction"
            }
          ],
          "answer": "c",
          "explanation": "Magnitude means greatness of size or extent, that is, enormity; for a force it is the size of the force, separate from its direction and point of application.<p>Capsule 4th ed., p. 21; topic 5 point 68.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 68",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n68"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00108",
          "src": "CAP4-05-00108",
          "text": "The middle span of a simply supported beam is designed to resist ______.",
          "options": [
            {
              "key": "a",
              "text": "Bending moment"
            },
            {
              "key": "b",
              "text": "Torsion"
            },
            {
              "key": "c",
              "text": "Shear force"
            },
            {
              "key": "d",
              "text": "Axial force"
            }
          ],
          "answer": "a",
          "explanation": "In a simply supported beam the bending moment is greatest near mid-span, where the shear force is least, so the middle span is designed to resist bending moment; the regions near the supports are checked for shear.<p>Capsule 4th ed., p. 22; topic 5 point 106.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 106",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n106"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00110",
          "src": "CAP4-05-00110",
          "text": "When a moment \\(M\\) is applied at the centre of a cantilever beam, the shear force and bending moment at the fixed end are respectively ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(0\\) and \\(\\dfrac{M}{2}\\)"
            },
            {
              "key": "b",
              "text": "\\(M\\) and \\(0\\)"
            },
            {
              "key": "c",
              "text": "\\(0\\) and \\(M\\)"
            },
            {
              "key": "d",
              "text": "\\(\\dfrac{M}{2}\\) and \\(M\\)"
            }
          ],
          "answer": "c",
          "explanation": "A couple has no vertical component, so the shear force is zero everywhere; between the couple and the fixed end the bending moment equals \\(M\\). At the fixed end, therefore, the shear force is 0 and the bending moment is \\(M\\).<p>Capsule 4th ed., p. 22; topic 5 point 108.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 108",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n108"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00111",
          "src": "CAP4-05-00111",
          "text": "A flexural member (beam) is designed for the maximum bending moment at the ______.",
          "options": [
            {
              "key": "a",
              "text": "Quarter-span points"
            },
            {
              "key": "b",
              "text": "Ends of an overhang"
            },
            {
              "key": "c",
              "text": "Centre"
            },
            {
              "key": "d",
              "text": "Supports"
            }
          ],
          "answer": "c",
          "explanation": "For a simply supported beam under ordinary loads, the maximum bending moment occurs at the centre of the span, so the beam is designed for the bending moment there.<p>Capsule 4th ed., p. 22; topic 5 point 109.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 109",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n109"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00138",
          "src": "CAP4-05-00138",
          "text": "A simply supported beam carries two equal point loads \\(W\\) at a distance of \\(L/3\\) from either support. The bending moment at mid-span is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{WL}{8}\\)"
            },
            {
              "key": "b",
              "text": "\\(\\dfrac{WL}{4}\\)"
            },
            {
              "key": "c",
              "text": "\\(\\dfrac{WL}{6}\\)"
            },
            {
              "key": "d",
              "text": "\\(\\dfrac{WL}{3}\\)"
            }
          ],
          "answer": "d",
          "explanation": "Each reaction is \\(W\\), so at mid-span \\[\\begin{aligned} M &amp;= W \\times \\dfrac{L}{2} - W \\times \\dfrac{L}{6} \\\\ &amp;= \\dfrac{WL}{3} \\end{aligned}\\] This moment is constant between the two loads.<p>Capsule 4th ed., p. 23; topic 5 point 139.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 139",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n139"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-10-00179",
          "src": "CAP4-10-00179",
          "text": "As structural components, suspension bridges utilise ______.",
          "options": [
            {
              "key": "a",
              "text": "Vertical struts, vertical cantilevers and vertical columns"
            },
            {
              "key": "b",
              "text": "Arches only"
            },
            {
              "key": "c",
              "text": "Trusses only"
            },
            {
              "key": "d",
              "text": "Floating pontoons"
            }
          ],
          "answer": "a",
          "explanation": "In a suspension bridge the deck is hung from the main cables, and vertical members such as struts, cantilevers and columns carry the loads down to the foundations.<p>Capsule 4th ed., p. 42; rural point 7.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 42; rural point 7",
            "pages": [
              42
            ],
            "points": [
              "capsule-t10-p042-n7"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        },
        {
          "id": "CAP4-10-00193",
          "src": "CAP4-10-00193",
          "text": "A suspended trail bridge is also called ______.",
          "options": [
            {
              "key": "a",
              "text": "An N-type bridge"
            },
            {
              "key": "b",
              "text": "A D-type bridge"
            },
            {
              "key": "c",
              "text": "A T-type bridge"
            },
            {
              "key": "d",
              "text": "An S-type bridge"
            }
          ],
          "answer": "b",
          "explanation": "In Nepal's trail bridge standards, the suspended bridge, whose walkway hangs in a sag between the anchorages, is called the D-type, while the suspension bridge with towers is the N-type.<p>Capsule 4th ed., p. 42; rural point 17.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 42; rural point 17",
            "pages": [
              42
            ],
            "points": [
              "capsule-t10-p042-n17"
            ]
          },
          "topic": "ACiE0401",
          "kind": "recall"
        }
      ]
    },
    {
      "id": "ACiE0402",
      "name": "Stress and strain analysis",
      "subject": "Structural Mechanics",
      "questions": [
        {
          "id": "CAP4-04-00009",
          "src": "CAP4-04-00009",
          "text": "The ductility of a material ______ with an increase in the percentage reduction in area of a specimen under a tensile test.",
          "options": [
            {
              "key": "a",
              "text": "Decreases"
            },
            {
              "key": "b",
              "text": "Remains the same"
            },
            {
              "key": "c",
              "text": "Increases"
            },
            {
              "key": "d",
              "text": "Becomes zero"
            }
          ],
          "answer": "c",
          "explanation": "Percentage reduction in area measures how much a specimen necks before fracture. A larger reduction means more plastic deformation before breaking, so ductility increases with it.<p>Capsule 4th ed., p. 15; topic 4 point 9.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 9",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n9"
            ]
          },
          "topic": "ACiE0402",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00018",
          "src": "CAP4-04-00018",
          "text": "For a homogeneous isotropic linear-elastic material, \\(E = 210\\) GPa and \\(G = 84\\) GPa. What Poisson ratio is consistent with these measurements?",
          "options": [
            {
              "key": "a",
              "text": "0.40"
            },
            {
              "key": "b",
              "text": "0.25"
            },
            {
              "key": "c",
              "text": "1.25"
            },
            {
              "key": "d",
              "text": "0.50"
            }
          ],
          "answer": "b",
          "explanation": "Isotropic elasticity requires \\(E = 2G(1 + \\nu)\\). Therefore \\[\\nu = \\dfrac{210}{2 \\times 84} - 1 = 0.25\\] The value 1.25 is \\(1 + \\nu\\), not \\(\\nu\\); the relation should not be imposed on an arbitrary anisotropic material.<p>Capsule 4th ed., p. 15; topic 4 point 17.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 17",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n17"
            ]
          },
          "topic": "ACiE0402",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00019",
          "src": "CAP4-04-00019",
          "text": "The planes which carry no shear stress and are subjected to normal stresses only are known as ______.",
          "options": [
            {
              "key": "a",
              "text": "Neutral planes"
            },
            {
              "key": "b",
              "text": "Planes of maximum shear"
            },
            {
              "key": "c",
              "text": "Principal planes"
            },
            {
              "key": "d",
              "text": "Oblique planes"
            }
          ],
          "answer": "c",
          "explanation": "Principal planes are the planes on which the shear stress is zero; the normal stresses acting on them are the principal stresses, the maximum and minimum normal stresses at the point.<p>Capsule 4th ed., pp. 15, 19; topic 4 point 18; topic 4 point 117.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 15, 19; topic 4 point 18; topic 4 point 117",
            "pages": [
              15,
              19
            ],
            "points": [
              "capsule-t04-p015-n18",
              "capsule-t04-p019-n117"
            ]
          },
          "topic": "ACiE0402",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00020",
          "src": "CAP4-04-00020",
          "text": "The shear stress on the principal plane subjected to the maximum principal stress is ______.",
          "options": [
            {
              "key": "a",
              "text": "Half the principal stress"
            },
            {
              "key": "b",
              "text": "Maximum"
            },
            {
              "key": "c",
              "text": "Zero"
            },
            {
              "key": "d",
              "text": "Equal to the principal stress"
            }
          ],
          "answer": "c",
          "explanation": "On every principal plane the shear stress is zero, including the plane carrying the maximum principal stress; the maximum shear stress acts on planes at 45° to the principal planes.<p>Capsule 4th ed., p. 15; topic 4 point 19.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 19",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n19"
            ]
          },
          "topic": "ACiE0402",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00022",
          "src": "CAP4-04-00022",
          "text": "When a circular shaft is subjected to torsion, the shear stress at the centre of the shaft is ______.",
          "options": [
            {
              "key": "a",
              "text": "Zero"
            },
            {
              "key": "b",
              "text": "Equal to the average stress"
            },
            {
              "key": "c",
              "text": "Maximum"
            },
            {
              "key": "d",
              "text": "Infinite"
            }
          ],
          "answer": "a",
          "explanation": "Torsional shear stress is proportional to the distance from the axis, \\(\\tau = \\dfrac{Tr}{J}\\), so it is zero at the centre of the shaft and maximum at its outer surface.<p>Capsule 4th ed., p. 15; topic 4 point 21.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 21",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n21"
            ]
          },
          "topic": "ACiE0402",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00054",
          "src": "CAP4-04-00054",
          "text": "At a plane-stress point, \\(\\sigma_x = 60\\) MPa tension, \\(\\sigma_y = 0\\) and \\(\\tau_{xy} = 40\\) MPa. What is the major principal stress?",
          "options": [
            {
              "key": "a",
              "text": "110 MPa"
            },
            {
              "key": "b",
              "text": "100 MPa"
            },
            {
              "key": "c",
              "text": "50 MPa"
            },
            {
              "key": "d",
              "text": "80 MPa"
            }
          ],
          "answer": "d",
          "explanation": "The Mohr-circle centre and radius are \\[C = \\dfrac{60 + 0}{2} = 30\\ \\text{MPa}\\] \\[R = \\sqrt{30^2 + 40^2} = 50\\ \\text{MPa}\\] Thus \\[\\sigma_1 = 30 + 50 = 80\\ \\text{MPa}\\] and \\(\\sigma_2 = 30 - 50 = -20\\) MPa. Adding the full \\(\\sigma_x\\) to the radius would incorrectly give 110 MPa.<p>Capsule 4th ed., p. 17; topic 4 point 52.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 52",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n52"
            ]
          },
          "topic": "ACiE0402",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00059",
          "src": "CAP4-04-00059",
          "text": "Modulus of rigidity is defined as the ratio of ______.",
          "options": [
            {
              "key": "a",
              "text": "Direct stress to volumetric strain"
            },
            {
              "key": "b",
              "text": "Lateral strain to longitudinal strain"
            },
            {
              "key": "c",
              "text": "Normal stress to normal strain"
            },
            {
              "key": "d",
              "text": "Shear stress to shear strain"
            }
          ],
          "answer": "d",
          "explanation": "The modulus of rigidity, or shear modulus, \\(G\\), is shear stress divided by shear strain. Young's modulus relates normal stress and strain, Poisson's ratio the lateral and longitudinal strains, and the bulk modulus direct stress and volumetric strain.<p>Capsule 4th ed., p. 17; topic 4 point 58; topic 4 point 61.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 58; topic 4 point 61",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n58",
              "capsule-t04-p017-n61"
            ]
          },
          "topic": "ACiE0402",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00064",
          "src": "CAP4-04-00064",
          "text": "The ratio of linear stress to linear strain is called ______.",
          "options": [
            {
              "key": "a",
              "text": "Modulus of rigidity"
            },
            {
              "key": "b",
              "text": "Poisson's ratio"
            },
            {
              "key": "c",
              "text": "Modulus of elasticity"
            },
            {
              "key": "d",
              "text": "Bulk modulus"
            }
          ],
          "answer": "c",
          "explanation": "Within the elastic limit, linear (direct) stress divided by linear strain is the modulus of elasticity, Young's modulus \\(E\\). Shear stress divided by shear strain is the modulus of rigidity.<p>Capsule 4th ed., p. 17; topic 4 point 64.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 64",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n64"
            ]
          },
          "topic": "ACiE0402",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00070",
          "src": "CAP4-04-00070",
          "text": "Hooke's law is valid up to the ______.",
          "options": [
            {
              "key": "a",
              "text": "Yield point"
            },
            {
              "key": "b",
              "text": "Proportional limit"
            },
            {
              "key": "c",
              "text": "Elastic limit"
            },
            {
              "key": "d",
              "text": "Ultimate stress"
            }
          ],
          "answer": "b",
          "explanation": "Hooke's law, stress proportional to strain, holds only up to the proportional limit. Beyond it, up to the elastic limit, the material may still recover fully, but stress is no longer proportional to strain.<p>Capsule 4th ed., p. 17; topic 4 point 68.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 68",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n68"
            ]
          },
          "topic": "ACiE0402",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00075",
          "src": "CAP4-04-00075",
          "text": "The major principal stress produced by normal stresses \\(f_x\\), \\(f_y\\) and shear stress \\(\\tau\\) is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{f_x + f_y}{2}\\) \\(-\\dfrac{\\sqrt{(f_x - f_y)^2 + 4\\tau^2}}{2}\\)"
            },
            {
              "key": "b",
              "text": "\\(\\dfrac{f_x + f_y}{2} + \\tau\\)"
            },
            {
              "key": "c",
              "text": "\\(\\dfrac{f_x + f_y}{2}\\) \\(+\\dfrac{\\sqrt{(f_x - f_y)^2 + 4\\tau^2}}{2}\\)"
            },
            {
              "key": "d",
              "text": "\\(\\dfrac{f_x - f_y}{2}\\) \\(+\\dfrac{\\sqrt{(f_x + f_y)^2 + 4\\tau^2}}{2}\\)"
            }
          ],
          "answer": "c",
          "explanation": "The principal stresses are the centre of Mohr's circle plus or minus its radius; the major principal stress is \\[\\begin{aligned} \\sigma_1 &amp;= \\dfrac{f_x + f_y}{2} \\\\ &amp;\\quad + \\dfrac{1}{2}\\sqrt{(f_x - f_y)^2 + 4\\tau^2} \\end{aligned}\\] The minus sign gives the minor principal stress.<p>Capsule 4th ed., p. 17; topic 4 point 73.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 73",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n73"
            ]
          },
          "topic": "ACiE0402",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00076",
          "src": "CAP4-04-00076",
          "text": "The property by which a material elongates considerably under a tensile load is called ______.",
          "options": [
            {
              "key": "a",
              "text": "Hardness"
            },
            {
              "key": "b",
              "text": "Ductility"
            },
            {
              "key": "c",
              "text": "Brittleness"
            },
            {
              "key": "d",
              "text": "Malleability"
            }
          ],
          "answer": "b",
          "explanation": "Ductility is the property that lets a material undergo considerable elongation under a tensile load before fracture, as mild steel does; brittle materials break with little elongation.<p>Capsule 4th ed., p. 17; topic 4 point 74.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 74",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n74"
            ]
          },
          "topic": "ACiE0402",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00080",
          "src": "CAP4-04-00080",
          "text": "An isotropic linear-elastic solid has Young's modulus 200 GPa and Poisson ratio 0.25. Which shear modulus is consistent with these properties?",
          "options": [
            {
              "key": "a",
              "text": "80 GPa"
            },
            {
              "key": "b",
              "text": "125 GPa"
            },
            {
              "key": "c",
              "text": "400 GPa"
            },
            {
              "key": "d",
              "text": "100 GPa"
            }
          ],
          "answer": "a",
          "explanation": "Use \\[\\begin{aligned} G &amp;= \\dfrac{E}{2(1 + \\nu)} = \\dfrac{200}{2 \\times 1.25} \\\\ &amp;= 80\\ \\text{GPa} \\end{aligned}\\] not \\(\\dfrac{E(1 + \\nu)}{2}\\). This isotropic elastic identity is not a universal relation for anisotropic materials.<p>Capsule 4th ed., p. 18; topic 4 point 79.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 79",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n79"
            ]
          },
          "topic": "ACiE0402",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00082",
          "src": "CAP4-04-00082",
          "text": "The maximum stress that a material can resist is called the ______.",
          "options": [
            {
              "key": "a",
              "text": "Ultimate stress"
            },
            {
              "key": "b",
              "text": "Breaking stress"
            },
            {
              "key": "c",
              "text": "Yield stress"
            },
            {
              "key": "d",
              "text": "Proof stress"
            }
          ],
          "answer": "a",
          "explanation": "Ultimate stress is the maximum stress a material can resist, the highest point of its stress–strain curve; for a ductile material the breaking stress at fracture is lower.<p>Capsule 4th ed., p. 18; topic 4 point 81.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 81",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n81"
            ]
          },
          "topic": "ACiE0402",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00095",
          "src": "CAP4-04-00095",
          "text": "The correct sequence of points on the stress–strain curve is ______.",
          "options": [
            {
              "key": "a",
              "text": "Proportional limit, yield point, elastic limit, breaking point"
            },
            {
              "key": "b",
              "text": "Yield point, proportional limit, elastic limit, breaking point"
            },
            {
              "key": "c",
              "text": "Elastic limit, proportional limit, yield point, breaking point"
            },
            {
              "key": "d",
              "text": "Proportional limit, elastic limit, yield point, breaking point"
            }
          ],
          "answer": "d",
          "explanation": "Along the stress–strain curve of mild steel the proportional limit (PL) comes first, then the elastic limit (EL), the yield point (YP) and finally the breaking point.<p>Capsule 4th ed., p. 18; topic 4 point 95.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 95",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n95"
            ]
          },
          "topic": "ACiE0402",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00100",
          "src": "CAP4-04-00100",
          "text": "The maximum shear stress induced in a member subjected to an axial load is equal to ______ the maximum normal stress.",
          "options": [
            {
              "key": "a",
              "text": "Half of"
            },
            {
              "key": "b",
              "text": "Twice"
            },
            {
              "key": "c",
              "text": "One-quarter of"
            },
            {
              "key": "d",
              "text": "Equal to"
            }
          ],
          "answer": "a",
          "explanation": "Under a uniaxial stress \\(\\sigma\\), the maximum shear stress, \\(\\dfrac{\\sigma}{2}\\), acts on planes inclined at 45° to the axis, so it is half of the maximum normal stress.<p>Capsule 4th ed., pp. 18, 19; topic 4 point 100; topic 4 point 114.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 18, 19; topic 4 point 100; topic 4 point 114",
            "pages": [
              18,
              19
            ],
            "points": [
              "capsule-t04-p018-n100",
              "capsule-t04-p019-n114"
            ]
          },
          "topic": "ACiE0402",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00107",
          "src": "CAP4-04-00107",
          "text": "In a circular shaft under torsion, the shear stress is maximum at the ______.",
          "options": [
            {
              "key": "a",
              "text": "Neutral axis"
            },
            {
              "key": "b",
              "text": "Outermost fibres"
            },
            {
              "key": "c",
              "text": "Centre"
            },
            {
              "key": "d",
              "text": "Mid-radius"
            }
          ],
          "answer": "b",
          "explanation": "Torsional shear stress, \\(\\tau = \\dfrac{Tr}{J}\\), increases linearly with the radius, so it is maximum at the outermost fibres of the shaft and zero at its centre.<p>Capsule 4th ed., p. 19; topic 4 point 107.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 4 point 107",
            "pages": [
              19
            ],
            "points": [
              "capsule-t04-p019-n107"
            ]
          },
          "topic": "ACiE0402",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00142",
          "src": "CAP4-05-00142",
          "text": "The correct formula for Poisson's ratio \\(\\mu\\) based on Young's modulus \\(E\\) and bulk modulus \\(K\\) is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\mu = \\dfrac{3K + E}{6K}\\)"
            },
            {
              "key": "b",
              "text": "\\(\\mu = \\dfrac{3K - E}{6K}\\)"
            },
            {
              "key": "c",
              "text": "\\(\\mu = \\dfrac{E - 2K}{2K}\\)"
            },
            {
              "key": "d",
              "text": "\\(\\mu = \\dfrac{E}{2K} + 1\\)"
            }
          ],
          "answer": "b",
          "explanation": "From \\(E = 3K(1 - 2\\mu)\\), Poisson's ratio is \\(\\mu = \\dfrac{3K - E}{6K}\\), which can also be written as \\(\\dfrac{1}{2} - \\dfrac{E}{6K}\\).<p>Capsule 4th ed., p. 23; topic 5 point 143.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 143",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n143"
            ]
          },
          "topic": "ACiE0402",
          "kind": "recall"
        }
      ]
    },
    {
      "id": "ACiE0403",
      "name": "Theory of flexure and columns",
      "subject": "Structural Mechanics",
      "questions": [
        {
          "id": "CAP4-01-00154",
          "src": "CAP4-01-00154",
          "text": "The moment of inertia of a section represents its resistance against ______.",
          "options": [
            {
              "key": "a",
              "text": "Bending"
            },
            {
              "key": "b",
              "text": "Axial tension"
            },
            {
              "key": "c",
              "text": "Direct shear"
            },
            {
              "key": "d",
              "text": "Crushing"
            }
          ],
          "answer": "a",
          "explanation": "The moment of inertia (second moment of area) of a section represents its resistance against bending: the larger the moment of inertia, the smaller the bending stress and deflection for a given moment.<p>Capsule 4th ed., p. 6; topic 1 point 147.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 1 point 147",
            "pages": [
              6
            ],
            "points": [
              "capsule-t01-p006-n147"
            ]
          },
          "topic": "ACiE0403",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00003",
          "src": "CAP4-04-00003",
          "text": "At the neutral axis of a simply supported beam, the bending stress and shear stress are respectively ______.",
          "options": [
            {
              "key": "a",
              "text": "Maximum and zero"
            },
            {
              "key": "b",
              "text": "Zero and maximum"
            },
            {
              "key": "c",
              "text": "Zero and zero"
            },
            {
              "key": "d",
              "text": "Maximum and maximum"
            }
          ],
          "answer": "b",
          "explanation": "Bending stress varies linearly from zero at the neutral axis to a maximum at the extreme fibres, while the shear stress is maximum at the neutral axis and zero at the extreme fibres.<p>Capsule 4th ed., p. 15; topic 4 point 3.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 3",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n3"
            ]
          },
          "topic": "ACiE0403",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00007",
          "src": "CAP4-04-00007",
          "text": "A prismatic simply supported beam has \\(L = 4\\) m and \\(EI = 8000\\) kN m<sup>2</sup>. A 12 kN load acts at midspan. Neglecting shear deformation, what is the maximum downward deflection?",
          "options": [
            {
              "key": "a",
              "text": "8.00 mm"
            },
            {
              "key": "b",
              "text": "2.00 mm"
            },
            {
              "key": "c",
              "text": "0.50 mm"
            },
            {
              "key": "d",
              "text": "1.25 mm"
            }
          ],
          "answer": "b",
          "explanation": "For a central point load, \\[\\begin{aligned} \\delta &amp;= \\dfrac{PL^3}{48EI} = \\dfrac{12 \\times 4^3}{48 \\times 8000} \\\\ &amp;= 0.002\\ \\text{m} = 2.00\\ \\text{mm} \\end{aligned}\\] The denominator 192 would apply to a fixed-fixed beam, not this pin-roller beam.<p>Capsule 4th ed., p. 15; topic 4 point 7.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 7",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n7"
            ]
          },
          "topic": "ACiE0403",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00021",
          "src": "CAP4-04-00021",
          "text": "For a rectangular beam, the maximum shear stress is ______ times the average shear stress.",
          "options": [
            {
              "key": "a",
              "text": "1.5"
            },
            {
              "key": "b",
              "text": "1.33"
            },
            {
              "key": "c",
              "text": "1.125"
            },
            {
              "key": "d",
              "text": "2.0"
            }
          ],
          "answer": "a",
          "explanation": "In a rectangular section the shear stress varies parabolically across the depth, with its maximum at the neutral axis equal to 1.5 times the average shear stress; for a circular section the ratio is four-thirds.<p>Capsule 4th ed., p. 15; topic 4 point 20.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 20",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n20"
            ]
          },
          "topic": "ACiE0403",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00023",
          "src": "CAP4-04-00023",
          "text": "Section modulus does not have the same unit as ______.",
          "options": [
            {
              "key": "a",
              "text": "Modulus of elasticity"
            },
            {
              "key": "b",
              "text": "Volume"
            },
            {
              "key": "c",
              "text": "Plastic modulus"
            },
            {
              "key": "d",
              "text": "First moment of area"
            }
          ],
          "answer": "a",
          "explanation": "Section modulus \\(Z = \\dfrac{I}{y}\\) has the unit mm<sup>3</sup>, the same as a volume, a first moment of area or the plastic modulus. Modulus of elasticity is a stress, measured in N per mm<sup>2</sup>, so its unit is different.<p>Capsule 4th ed., p. 15; topic 4 point 22.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 22",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n22"
            ]
          },
          "topic": "ACiE0403",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00024",
          "src": "CAP4-04-00024",
          "text": "In pure bending, the stress distribution across the depth of a beam is ______.",
          "options": [
            {
              "key": "a",
              "text": "Parabolic"
            },
            {
              "key": "b",
              "text": "Linear"
            },
            {
              "key": "c",
              "text": "Hyperbolic"
            },
            {
              "key": "d",
              "text": "Uniform"
            }
          ],
          "answer": "b",
          "explanation": "In pure bending, plane sections remain plane, so the strain, and within the elastic range the bending stress, varies linearly with distance from the neutral axis.<p>Capsule 4th ed., p. 15; topic 4 point 23.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 23",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n23"
            ]
          },
          "topic": "ACiE0403",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00027",
          "src": "CAP4-04-00027",
          "text": "The effective length of a column of length \\(L\\) with both ends fixed is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{L}{2}\\)"
            },
            {
              "key": "b",
              "text": "\\(\\dfrac{L}{\\sqrt{2}}\\)"
            },
            {
              "key": "c",
              "text": "\\(L\\)"
            },
            {
              "key": "d",
              "text": "\\(2L\\)"
            }
          ],
          "answer": "a",
          "explanation": "A column fixed at both ends buckles with points of contraflexure at its quarter points, so its effective length is \\(\\dfrac{L}{2}\\). Pinned ends give \\(L\\), a fixed and a free end give \\(2L\\), and a fixed and a pinned end give \\(\\dfrac{L}{\\sqrt{2}}\\).<p>Capsule 4th ed., pp. 16, 18; topic 4 point 26; topic 4 point 82.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 16, 18; topic 4 point 26; topic 4 point 82",
            "pages": [
              16,
              18
            ],
            "points": [
              "capsule-t04-p016-n26",
              "capsule-t04-p018-n82"
            ]
          },
          "topic": "ACiE0403",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00028",
          "src": "CAP4-04-00028",
          "text": "A simply supported beam A of length \\(l\\) carries a central point load \\(W\\); beam B carries a UDL with total load \\(W\\). The ratio of the maximum deflection of A to that of B is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{4}{5}\\)"
            },
            {
              "key": "b",
              "text": "\\(\\dfrac{5}{8}\\)"
            },
            {
              "key": "c",
              "text": "\\(\\dfrac{2}{1}\\)"
            },
            {
              "key": "d",
              "text": "\\(\\dfrac{8}{5}\\)"
            }
          ],
          "answer": "d",
          "explanation": "For the point load and for the same total load spread uniformly, \\[\\delta_A = \\dfrac{WL^3}{48EI}\\] \\[\\delta_B = \\dfrac{5WL^3}{384EI}\\] Cancelling the shared factors gives \\[\\dfrac{\\delta_A}{\\delta_B} = \\dfrac{384}{48 \\times 5} = \\dfrac{8}{5}\\] Equal total force does not mean equal deflection.<p>Capsule 4th ed., p. 16; topic 4 point 27.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 27",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n27"
            ]
          },
          "topic": "ACiE0403",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00029",
          "src": "CAP4-04-00029",
          "text": "If the width of a simply supported beam carrying an isolated load at its centre is doubled, the deflection at the centre ______.",
          "options": [
            {
              "key": "a",
              "text": "It becomes one-half of its original value"
            },
            {
              "key": "b",
              "text": "It becomes twice its original value"
            },
            {
              "key": "c",
              "text": "It becomes one-eighth of its original value"
            },
            {
              "key": "d",
              "text": "It remains unchanged"
            }
          ],
          "answer": "a",
          "explanation": "For bending about the horizontal centroidal axis, \\(I = \\dfrac{bd^3}{12}\\). Doubling width doubles \\(I\\), and \\[\\delta = \\dfrac{PL^3}{48EI}\\] is inversely proportional to \\(I\\), so the deflection halves. The factor one-eighth would follow from doubling depth, not width.<p>Capsule 4th ed., p. 16; topic 4 point 28.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 28",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n28"
            ]
          },
          "topic": "ACiE0403",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00030",
          "src": "CAP4-04-00030",
          "text": "A prismatic cantilever has length 3 m and \\(EI = 9000\\) kN m<sup>2</sup>. With a 9 kN downward tip force, what tip deflection does Euler-Bernoulli theory predict?",
          "options": [
            {
              "key": "a",
              "text": "27.0 mm downward"
            },
            {
              "key": "b",
              "text": "3.00 mm downward"
            },
            {
              "key": "c",
              "text": "9.00 mm downward"
            },
            {
              "key": "d",
              "text": "0.563 mm downward"
            }
          ],
          "answer": "c",
          "explanation": "A cantilever with a tip force has \\[\\begin{aligned} \\delta &amp;= \\dfrac{PL^3}{3EI} = \\dfrac{9 \\times 27}{3 \\times 9000} \\\\ &amp;= 0.009\\ \\text{m} = 9\\ \\text{mm} \\end{aligned}\\] downward. The simple-beam central-load denominator 48 does not apply to this support arrangement.<p>Capsule 4th ed., p. 16; topic 4 point 29.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 29",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n29"
            ]
          },
          "topic": "ACiE0403",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00031",
          "src": "CAP4-04-00031",
          "text": "A fixed-fixed prismatic beam of span 4 m and \\(EI = 8000\\) kN m<sup>2</sup> carries a total downward uniform load \\(W = 24\\) kN. What is its central deflection, neglecting shear deformation?",
          "options": [
            {
              "key": "a",
              "text": "2.50 mm"
            },
            {
              "key": "b",
              "text": "0.50 mm"
            },
            {
              "key": "c",
              "text": "2.00 mm"
            },
            {
              "key": "d",
              "text": "0.125 mm"
            }
          ],
          "answer": "b",
          "explanation": "\\(W\\) is total load, so \\(w = \\dfrac{W}{L} = 6\\) kN per m. For fixed ends, \\[\\delta = \\dfrac{wL^4}{384EI} = \\dfrac{WL^3}{384EI}\\] which gives \\[\\begin{aligned} \\delta &amp;= \\dfrac{24 \\times 4^3}{384 \\times 8000} \\\\ &amp;= 0.0005\\ \\text{m} = 0.50\\ \\text{mm} \\end{aligned}\\] The factor 5 belongs to a simply supported beam under uniform load.<p>Capsule 4th ed., p. 16; topic 4 point 30.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 30",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n30"
            ]
          },
          "topic": "ACiE0403",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00033",
          "src": "CAP4-04-00033",
          "text": "If one end of a column is kept free and the other end fixed, the ratio of its effective length to its actual length is ______.",
          "options": [
            {
              "key": "a",
              "text": "2"
            },
            {
              "key": "b",
              "text": "0.707"
            },
            {
              "key": "c",
              "text": "1"
            },
            {
              "key": "d",
              "text": "0.5"
            }
          ],
          "answer": "a",
          "explanation": "A column fixed at one end and free at the other buckles like half of a pin-ended column of twice its length, so its effective length is \\(2L\\) and the ratio is 2.<p>Capsule 4th ed., p. 16; topic 4 point 32.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 32",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n32"
            ]
          },
          "topic": "ACiE0403",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00051",
          "src": "CAP4-04-00051",
          "text": "In the conjugate beam method, a fixed support of the actual beam is considered as a ______ in the conjugate beam.",
          "options": [
            {
              "key": "a",
              "text": "Fixed end"
            },
            {
              "key": "b",
              "text": "Internal hinge"
            },
            {
              "key": "c",
              "text": "Free end"
            },
            {
              "key": "d",
              "text": "Hinged support"
            }
          ],
          "answer": "c",
          "explanation": "A fixed end has zero slope and zero deflection in the actual beam, so the conjugate beam must have zero shear and zero moment there, which is a free end. Conversely, a free end becomes a fixed end.<p>Capsule 4th ed., p. 17; topic 4 point 49.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 49",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n49"
            ]
          },
          "topic": "ACiE0403",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00058",
          "src": "CAP4-04-00058",
          "text": "A fixed-fixed beam has span 4 m, constant \\(EI = 8000\\) kN m<sup>2</sup> and a 12 kN downward central point load. Neglecting shear deformation, what is the central deflection?",
          "options": [
            {
              "key": "a",
              "text": "0.25 mm downward"
            },
            {
              "key": "b",
              "text": "2.00 mm downward"
            },
            {
              "key": "c",
              "text": "1.00 mm downward"
            },
            {
              "key": "d",
              "text": "0.50 mm downward"
            }
          ],
          "answer": "d",
          "explanation": "For immovable fixed ends, \\[\\begin{aligned} \\delta &amp;= \\dfrac{PL^3}{192EI} = \\dfrac{12 \\times 64}{192 \\times 8000} \\\\ &amp;= 0.0005\\ \\text{m} = 0.50\\ \\text{mm} \\end{aligned}\\] Fixing both rotations reduces this central-point-load deflection to one-quarter of the corresponding simply supported value.<p>Capsule 4th ed., p. 17; topic 4 point 57.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 57",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n57"
            ]
          },
          "topic": "ACiE0403",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00065",
          "src": "CAP4-04-00065",
          "text": "The equation of flexure (bending equation) is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{M}{y} = \\dfrac{\\sigma}{I} = \\dfrac{E}{R}\\)"
            },
            {
              "key": "b",
              "text": "\\(\\dfrac{T}{J} = \\dfrac{\\tau}{r} = \\dfrac{G\\theta}{L}\\)"
            },
            {
              "key": "c",
              "text": "\\(\\dfrac{M}{I} = \\dfrac{E}{y} = \\dfrac{\\sigma}{R}\\)"
            },
            {
              "key": "d",
              "text": "\\(\\dfrac{M}{I} = \\dfrac{\\sigma}{y} = \\dfrac{E}{R}\\)"
            }
          ],
          "answer": "d",
          "explanation": "The flexure equation, \\(\\dfrac{M}{I} = \\dfrac{\\sigma}{y} = \\dfrac{E}{R}\\), relates the bending moment, the bending stress at distance \\(y\\) from the neutral axis and the radius of curvature. The torsion equation has the similar form \\(\\dfrac{T}{J} = \\dfrac{\\tau}{r} = \\dfrac{G\\theta}{L}\\).<p>Capsule 4th ed., p. 17; topic 4 point 65.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 65",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n65"
            ]
          },
          "topic": "ACiE0403",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00066",
          "src": "CAP4-04-00066",
          "text": "A beam segment in small-strain pure bending has constant \\(EI = 10000\\) kN m<sup>2</sup> and moment magnitude 50 kN m. What is its curvature radius?",
          "options": [
            {
              "key": "a",
              "text": "50 m"
            },
            {
              "key": "b",
              "text": "0.005 m"
            },
            {
              "key": "c",
              "text": "500 m"
            },
            {
              "key": "d",
              "text": "200 m"
            }
          ],
          "answer": "d",
          "explanation": "The other part of the flexure relation is \\(\\dfrac{M}{I} = \\dfrac{E}{R}\\), so the curvature is \\[\\begin{aligned} \\dfrac{1}{R} &amp;= \\dfrac{M}{EI} = \\dfrac{50}{10{,}000} \\\\ &amp;= 0.005\\ \\text{m}^{-1} \\end{aligned}\\] Its reciprocal gives \\(R = 200\\) m. Curvature and radius are reciprocal quantities, not interchangeable numerical answers.<p>Capsule 4th ed., p. 17; topic 4 point 65.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 65",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n65"
            ]
          },
          "topic": "ACiE0403",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00074",
          "src": "CAP4-04-00074",
          "text": "Euler's buckling load for a column with one end fixed and the other end hinged is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{4\\pi^2EI}{L^2}\\)"
            },
            {
              "key": "b",
              "text": "\\(\\dfrac{2\\pi^2EI}{L^2}\\)"
            },
            {
              "key": "c",
              "text": "\\(\\dfrac{\\pi^2EI}{4L^2}\\)"
            },
            {
              "key": "d",
              "text": "\\(\\dfrac{\\pi^2EI}{L^2}\\)"
            }
          ],
          "answer": "b",
          "explanation": "With one end fixed and the other hinged, the effective length is \\(\\dfrac{L}{\\sqrt{2}}\\), so Euler's load becomes \\(P = \\dfrac{2\\pi^2EI}{L^2}\\), twice that of a column hinged at both ends.<p>Capsule 4th ed., p. 17; topic 4 point 72.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 72",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n72"
            ]
          },
          "topic": "ACiE0403",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00119",
          "src": "CAP4-04-00119",
          "text": "An ideal straight pin-ended column has length 5 m and \\(EI = 2000\\) kN m<sup>2</sup> about its weakest buckling axis. What is its lowest Euler critical load?",
          "options": [
            {
              "key": "a",
              "text": "789.6 kN"
            },
            {
              "key": "b",
              "text": "197.4 kN"
            },
            {
              "key": "c",
              "text": "1579.1 kN"
            },
            {
              "key": "d",
              "text": "3158.3 kN"
            }
          ],
          "answer": "a",
          "explanation": "Both hinges give effective length \\(L\\), so \\[\\begin{aligned} P_{cr} &amp;= \\dfrac{\\pi^2 EI}{L^2} = \\dfrac{\\pi^2 \\times 2000}{25} \\\\ &amp;= 789.6\\ \\text{kN} \\end{aligned}\\] The fixed-free value would be one-quarter as large and the fixed-fixed value four times as large. Euler assumes a slender elastic column with ideal loading and restraints.<p>Capsule 4th ed., p. 19; topic 4 point 120.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 4 point 120",
            "pages": [
              19
            ],
            "points": [
              "capsule-t04-p019-n120"
            ]
          },
          "topic": "ACiE0403",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00120",
          "src": "CAP4-04-00120",
          "text": "A simply supported beam has span 4 m, constant \\(EI = 8000\\) kN m<sup>2</sup> and total load \\(W = 24\\) kN uniformly distributed over the span. What is its maximum elastic deflection, neglecting shear deformation?",
          "options": [
            {
              "key": "a",
              "text": "4.00 mm"
            },
            {
              "key": "b",
              "text": "2.50 mm"
            },
            {
              "key": "c",
              "text": "0.50 mm"
            },
            {
              "key": "d",
              "text": "10.0 mm"
            }
          ],
          "answer": "b",
          "explanation": "Because \\(W\\) is total force, \\(w = \\dfrac{W}{L} = 6\\) kN per m. The simple-beam UDL result is \\[\\delta_{\\max} = \\dfrac{5wL^4}{384EI} = \\dfrac{5WL^3}{384EI}\\] Substitution gives \\[\\begin{aligned} \\delta_{\\max} &amp;= \\dfrac{5 \\times 24 \\times 64}{384 \\times 8000} \\\\ &amp;= 0.0025\\ \\text{m} = 2.50\\ \\text{mm} \\end{aligned}\\] at midspan; 0.50 mm is the fixed-fixed result.<p>Capsule 4th ed., p. 19; topic 4 point 122.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 4 point 122",
            "pages": [
              19
            ],
            "points": [
              "capsule-t04-p019-n122"
            ]
          },
          "topic": "ACiE0403",
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00051",
          "src": "CAP4-05-00051",
          "text": "The bending stress on the neutral axis of a beam cross-section is ______.",
          "options": [
            {
              "key": "a",
              "text": "Maximum tensile"
            },
            {
              "key": "b",
              "text": "Zero"
            },
            {
              "key": "c",
              "text": "Equal to the average stress"
            },
            {
              "key": "d",
              "text": "Maximum compressive"
            }
          ],
          "answer": "b",
          "explanation": "Bending strain is proportional to the distance from the neutral axis, so the bending stress is zero on the neutral axis and greatest at the extreme fibres.<p>Capsule 4th ed., p. 20; topic 5 point 50.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 20; topic 5 point 50",
            "pages": [
              20
            ],
            "points": [
              "capsule-t05-p020-n50"
            ]
          },
          "topic": "ACiE0403",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00063",
          "src": "CAP4-05-00063",
          "text": "The nature of the crippling load in a column is ______.",
          "options": [
            {
              "key": "a",
              "text": "Compressive"
            },
            {
              "key": "b",
              "text": "Tensile"
            },
            {
              "key": "c",
              "text": "Shear"
            },
            {
              "key": "d",
              "text": "Torsional"
            }
          ],
          "answer": "a",
          "explanation": "The crippling (buckling) load is the axial compressive load at which a column becomes unstable and bends laterally.<p>Capsule 4th ed., p. 21; topic 5 point 61.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 21; topic 5 point 61",
            "pages": [
              21
            ],
            "points": [
              "capsule-t05-p021-n61"
            ]
          },
          "topic": "ACiE0403",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00119",
          "src": "CAP4-05-00119",
          "text": "Slenderness ratio is the ratio of ______.",
          "options": [
            {
              "key": "a",
              "text": "Effective length to least radius of gyration"
            },
            {
              "key": "b",
              "text": "Least radius of gyration to effective length"
            },
            {
              "key": "c",
              "text": "Effective length to least lateral dimension"
            },
            {
              "key": "d",
              "text": "Actual length to greatest radius of gyration"
            }
          ],
          "answer": "a",
          "explanation": "The slenderness ratio \\(\\dfrac{L_e}{r_{\\min}}\\) is the effective length of the column divided by its least radius of gyration; the larger it is, the more easily the column buckles.<p>Capsule 4th ed., p. 22; topic 5 point 117.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 117",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n117"
            ]
          },
          "topic": "ACiE0403",
          "kind": "recall"
        }
      ]
    },
    {
      "id": "ACiE0404",
      "name": "Determinate structures-1",
      "subject": "Structural Mechanics",
      "questions": [
        {
          "id": "CAP4-04-00025",
          "src": "CAP4-04-00025",
          "text": "Virtual work refers to the virtual work done by ______.",
          "options": [
            {
              "key": "a",
              "text": "Actual forces during actual displacements"
            },
            {
              "key": "b",
              "text": "Actual forces during virtual displacements"
            },
            {
              "key": "c",
              "text": "Virtual forces with zero displacement"
            },
            {
              "key": "d",
              "text": "Friction forces during real motion"
            }
          ],
          "answer": "b",
          "explanation": "In the principle of virtual displacements, virtual work is the work done by the actual forces during imaginary (virtual) displacements compatible with the supports; for a body in equilibrium it is zero.<p>Capsule 4th ed., p. 16; topic 4 point 24.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 24",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n24"
            ]
          },
          "topic": "ACiE0404",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00032",
          "src": "CAP4-04-00032",
          "text": "A simply supported elastic beam has span 4 m and \\(EI = 8000\\) kN m<sup>2</sup>. A central force grows quasistatically from zero to 12 kN. What bending strain energy is stored at the final load?",
          "options": [
            {
              "key": "a",
              "text": "24 J"
            },
            {
              "key": "b",
              "text": "6 J"
            },
            {
              "key": "c",
              "text": "48 J"
            },
            {
              "key": "d",
              "text": "12 J"
            }
          ],
          "answer": "d",
          "explanation": "The final central deflection is \\[\\delta = \\dfrac{PL^3}{48EI} = 0.002\\ \\text{m}\\] For a linear system under gradual loading, \\[\\begin{aligned} U &amp;= \\dfrac{P\\delta}{2} = \\dfrac{12 \\times 0.002}{2} \\\\ &amp;= 0.012\\ \\text{kN m} = 12\\ \\text{J} \\end{aligned}\\] Equivalently \\(U = \\dfrac{P^2 L^3}{96EI}\\); the load must be squared.<p>Capsule 4th ed., p. 16; topic 4 point 31.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 31",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n31"
            ]
          },
          "topic": "ACiE0404",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00060",
          "src": "CAP4-04-00060",
          "text": "The maximum energy which can be stored in a body up to the elastic limit is called ______.",
          "options": [
            {
              "key": "a",
              "text": "Toughness"
            },
            {
              "key": "b",
              "text": "Proof resilience"
            },
            {
              "key": "c",
              "text": "Strain hardening"
            },
            {
              "key": "d",
              "text": "Modulus of resilience"
            }
          ],
          "answer": "b",
          "explanation": "Proof resilience is the maximum strain energy a body can store up to the elastic limit. The same energy per unit volume is the modulus of resilience, and toughness is the energy absorbed up to fracture.<p>Capsule 4th ed., p. 17; topic 4 point 59.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 59",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n59"
            ]
          },
          "topic": "ACiE0404",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00061",
          "src": "CAP4-04-00061",
          "text": "Proof resilience is the maximum energy that can be stored in a body up to its ______.",
          "options": [
            {
              "key": "a",
              "text": "Yield point"
            },
            {
              "key": "b",
              "text": "Elastic limit"
            },
            {
              "key": "c",
              "text": "Breaking point"
            },
            {
              "key": "d",
              "text": "Ultimate stress"
            }
          ],
          "answer": "b",
          "explanation": "Proof resilience is the maximum strain energy a body can store up to the elastic limit; within this limit the energy is fully recovered when the load is removed.<p>Capsule 4th ed., p. 17; topic 4 point 59.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 59",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n59"
            ]
          },
          "topic": "ACiE0404",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00068",
          "src": "CAP4-04-00068",
          "text": "If \\(m_1\\) and \\(m_2\\) are the members of the two individual trusses of a compound truss, the truss is statically determinate if ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(m = m_1 + m_2 + 2\\)"
            },
            {
              "key": "b",
              "text": "\\(m = m_1 + m_2 + 3\\)"
            },
            {
              "key": "c",
              "text": "\\(m = m_1 + m_2 + 1\\)"
            },
            {
              "key": "d",
              "text": "\\(m = m_1 + m_2\\)"
            }
          ],
          "answer": "b",
          "explanation": "Two simple trusses joined into a compound truss need three connecting members to fix their relative position, so the compound truss is determinate when \\(m = m_1 + m_2 + 3\\).<p>Capsule 4th ed., p. 17; topic 4 point 67.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 67",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n67"
            ]
          },
          "topic": "ACiE0404",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00069",
          "src": "CAP4-04-00069",
          "text": "Two simple trusses having 7 and 9 members are combined into a compound truss. For the compound truss to be statically determinate, its total number of members should be ______.",
          "options": [
            {
              "key": "a",
              "text": "18"
            },
            {
              "key": "b",
              "text": "19"
            },
            {
              "key": "c",
              "text": "17"
            },
            {
              "key": "d",
              "text": "16"
            }
          ],
          "answer": "b",
          "explanation": "A compound truss is determinate when \\(m = m_1 + m_2 + 3\\): \\[\\begin{aligned} m &amp;= 7 + 9 + 3 \\\\ &amp;= 19 \\end{aligned}\\]<p>Capsule 4th ed., p. 17; topic 4 point 67.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 67",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n67"
            ]
          },
          "topic": "ACiE0404",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00089",
          "src": "CAP4-04-00089",
          "text": "The degree of static indeterminacy of a propped cantilever beam is ______.",
          "options": [
            {
              "key": "a",
              "text": "3"
            },
            {
              "key": "b",
              "text": "2"
            },
            {
              "key": "c",
              "text": "0"
            },
            {
              "key": "d",
              "text": "1"
            }
          ],
          "answer": "d",
          "explanation": "A propped cantilever has four reaction components, three at the fixed end and one at the prop, but only three equations of equilibrium, so it is statically indeterminate to degree 1.<p>Capsule 4th ed., p. 18; topic 4 point 89.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 89",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n89"
            ]
          },
          "topic": "ACiE0404",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00102",
          "src": "CAP4-04-00102",
          "text": "Castigliano's first theorem is applicable when the system behaves ______.",
          "options": [
            {
              "key": "a",
              "text": "Rigidly"
            },
            {
              "key": "b",
              "text": "Plastically"
            },
            {
              "key": "c",
              "text": "Elastically"
            },
            {
              "key": "d",
              "text": "Viscously"
            }
          ],
          "answer": "c",
          "explanation": "Castigliano's theorem, deflection equals the partial derivative of the strain energy with respect to the load, is based on elastic strain energy, so it applies only when the system behaves elastically.<p>Capsule 4th ed., p. 18; topic 4 point 102.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 102",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n102"
            ]
          },
          "topic": "ACiE0404",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00103",
          "src": "CAP4-04-00103",
          "text": "The degree of kinematic indeterminacy of a pin-jointed plane frame is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(m + r - 2j\\)"
            },
            {
              "key": "b",
              "text": "\\(2j + 3\\)"
            },
            {
              "key": "c",
              "text": "\\(3j - 3\\)"
            },
            {
              "key": "d",
              "text": "\\(2j - 3\\)"
            }
          ],
          "answer": "d",
          "explanation": "Each joint of a plane pin-jointed frame has two independent translations; removing the three support restraints leaves a kinematic indeterminacy of \\(2j - 3\\). The static indeterminacy, by contrast, is \\(m + r - 2j\\).<p>Capsule 4th ed., p. 18; topic 4 point 104.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 104",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n104"
            ]
          },
          "topic": "ACiE0404",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00114",
          "src": "CAP4-04-00114",
          "text": "A rigid-jointed plane frame is stable and statically determinate if ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(3m + r = 2j\\)"
            },
            {
              "key": "b",
              "text": "\\(m + r = 3j\\)"
            },
            {
              "key": "c",
              "text": "\\(m + r = 2j\\)"
            },
            {
              "key": "d",
              "text": "\\(3m + r = 3j\\)"
            }
          ],
          "answer": "d",
          "explanation": "Each member of a rigid-jointed plane frame has three unknown internal forces and each joint gives three equilibrium equations, so the frame is statically determinate when \\(3m + r = 3j\\). For a pin-jointed truss the condition is \\(m + r = 2j\\).<p>Capsule 4th ed., p. 19; topic 4 point 113.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 4 point 113",
            "pages": [
              19
            ],
            "points": [
              "capsule-t04-p019-n113"
            ]
          },
          "topic": "ACiE0404",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00117",
          "src": "CAP4-04-00117",
          "text": "The strain energy stored in a body by a suddenly applied load, compared with the same load applied gradually, is ______.",
          "options": [
            {
              "key": "a",
              "text": "Half"
            },
            {
              "key": "b",
              "text": "Twice"
            },
            {
              "key": "c",
              "text": "Equal"
            },
            {
              "key": "d",
              "text": "Four times"
            }
          ],
          "answer": "d",
          "explanation": "A suddenly applied load produces twice the stress of the same load applied gradually, and strain energy is proportional to the square of the stress, so four times the strain energy is stored.<p>Capsule 4th ed., p. 19; topic 4 point 118.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 4 point 118",
            "pages": [
              19
            ],
            "points": [
              "capsule-t04-p019-n118"
            ]
          },
          "topic": "ACiE0404",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00097",
          "src": "CAP4-05-00097",
          "text": "The ratio of strain energy stored in a body due to a suddenly applied load to that due to a gradually applied load is ______.",
          "options": [
            {
              "key": "a",
              "text": "4"
            },
            {
              "key": "b",
              "text": "2"
            },
            {
              "key": "c",
              "text": "0.5"
            },
            {
              "key": "d",
              "text": "1"
            }
          ],
          "answer": "a",
          "explanation": "A suddenly applied load causes twice the stress of the same load applied gradually, and strain energy varies with the square of the stress, so the ratio is \\(2^2 = 4\\).<p>Capsule 4th ed., p. 22; topic 5 point 96.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 96",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n96"
            ]
          },
          "topic": "ACiE0404",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00127",
          "src": "CAP4-05-00127",
          "text": "The maximum load a beam can sustain before permanent deformation is called ______.",
          "options": [
            {
              "key": "a",
              "text": "Modulus of rupture"
            },
            {
              "key": "b",
              "text": "Proof resilience"
            },
            {
              "key": "c",
              "text": "Fatigue limit"
            },
            {
              "key": "d",
              "text": "Toughness"
            }
          ],
          "answer": "b",
          "explanation": "Proof resilience corresponds to the limit up to which a member can be loaded without permanent deformation; it is measured as the maximum strain energy stored up to the elastic limit.<p>Capsule 4th ed., p. 23; topic 5 point 126.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 126",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n126"
            ]
          },
          "topic": "ACiE0404",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00135",
          "src": "CAP4-05-00135",
          "text": "The effect of a temperature change on a load-carrying three-hinged arch is that it ______.",
          "options": [
            {
              "key": "a",
              "text": "Produces tensile stress only"
            },
            {
              "key": "b",
              "text": "Produces no stress"
            },
            {
              "key": "c",
              "text": "Doubles the horizontal thrust"
            },
            {
              "key": "d",
              "text": "Produces large bending stresses"
            }
          ],
          "answer": "b",
          "explanation": "A three-hinged arch is statically determinate: the crown hinge lets it rise or fall freely as its length changes with temperature, so a temperature change produces no stress.<p>Capsule 4th ed., p. 23; topic 5 point 136.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 136",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n136"
            ]
          },
          "topic": "ACiE0404",
          "kind": "recall"
        }
      ]
    },
    {
      "id": "ACiE0405",
      "name": "Determinate structures-2",
      "subject": "Structural Mechanics",
      "questions": [
        {
          "id": "CAP4-04-00034",
          "src": "CAP4-04-00034",
          "text": "A weightless three-hinged arch has horizontal span \\(L\\) and a crown hinge at its horizontal midpoint. Its only load is a downward force \\(W\\) at the crown, which is \\(h_1\\) above the left springing and \\(h_2\\) above the right springing, both rises positive. What inward horizontal thrust \\(H\\) follows from zero moment at the crown?",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{WL}{2(h_1 - h_2)}\\)"
            },
            {
              "key": "b",
              "text": "\\(\\dfrac{2W(h_1 + h_2)}{L}\\)"
            },
            {
              "key": "c",
              "text": "\\(\\dfrac{WL}{2(h_1 + h_2)}\\)"
            },
            {
              "key": "d",
              "text": "\\(\\dfrac{WL}{h_1 + h_2}\\)"
            }
          ],
          "answer": "c",
          "explanation": "Taking moments of each half about the crown gives \\[V_A\\dfrac{L}{2} = Hh_1\\] \\[V_B\\dfrac{L}{2} = Hh_2\\] Adding, with \\(V_A + V_B = W\\), yields \\[\\dfrac{2H(h_1 + h_2)}{L} = W\\] \\[H = \\dfrac{WL}{2(h_1 + h_2)}\\] Squaring a height sum in this denominator would give incorrect force-per-length units.<p>Capsule 4th ed., p. 16; topic 4 point 33.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 33",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n33"
            ]
          },
          "topic": "ACiE0405",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00035",
          "src": "CAP4-04-00035",
          "text": "When a UDL longer than the span of a girder moves from left to right, the maximum bending moment at the mid-section occurs when the UDL ______.",
          "options": [
            {
              "key": "a",
              "text": "Has its head at mid-span"
            },
            {
              "key": "b",
              "text": "Has its tail at mid-span"
            },
            {
              "key": "c",
              "text": "Covers half the span"
            },
            {
              "key": "d",
              "text": "Occupies the whole span"
            }
          ],
          "answer": "d",
          "explanation": "Every part of the span contributes positively to the mid-span bending moment of a simply supported girder, so a UDL longer than the span gives the maximum moment when it occupies the whole span.<p>Capsule 4th ed., pp. 16, 18; topic 4 point 34; topic 4 point 92.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 16, 18; topic 4 point 34; topic 4 point 92",
            "pages": [
              16,
              18
            ],
            "points": [
              "capsule-t04-p016-n34",
              "capsule-t04-p018-n92"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00036",
          "src": "CAP4-04-00036",
          "text": "The ILD for bending moment at a section of a cantilever beam, for a moving unit load, is a ______ between the free end and the section.",
          "options": [
            {
              "key": "a",
              "text": "Rectangle"
            },
            {
              "key": "b",
              "text": "Zero line"
            },
            {
              "key": "c",
              "text": "Triangle"
            },
            {
              "key": "d",
              "text": "Parabola"
            }
          ],
          "answer": "c",
          "explanation": "A unit load at a distance \\(a\\) beyond the section, towards the free end, produces a moment \\(a\\) at the section, so the ILD is a triangle between the section and the free end. Loads between the section and the fixed support cause no moment there.<p>Capsule 4th ed., p. 16; topic 4 point 35.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 35",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n35"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00037",
          "src": "CAP4-04-00037",
          "text": "The maximum bending moment in a three-hinged arch under a point load occurs on either side of its crown at ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{L}{3\\sqrt{2}}\\)"
            },
            {
              "key": "b",
              "text": "\\(\\dfrac{L}{4}\\)"
            },
            {
              "key": "c",
              "text": "\\(\\dfrac{L}{6}\\)"
            },
            {
              "key": "d",
              "text": "\\(\\dfrac{L}{2\\sqrt{3}}\\)"
            }
          ],
          "answer": "d",
          "explanation": "For a symmetrical three-hinged parabolic arch under a rolling point load, the absolute maximum bending moment occurs at sections \\(\\dfrac{L}{2\\sqrt{3}}\\), about \\(0.29L\\), on either side of the crown.<p>Capsule 4th ed., p. 16; topic 4 point 36.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 36",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n36"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00038",
          "src": "CAP4-04-00038",
          "text": "A two-hinged arch is ______ structure.",
          "options": [
            {
              "key": "a",
              "text": "A statically determinate"
            },
            {
              "key": "b",
              "text": "An unstable"
            },
            {
              "key": "c",
              "text": "A statically indeterminate"
            },
            {
              "key": "d",
              "text": "A pin-jointed truss"
            }
          ],
          "answer": "c",
          "explanation": "A two-hinged arch has four reaction components, two at each hinge, but only three equations of equilibrium, so it is statically indeterminate to the first degree. A three-hinged arch is determinate.<p>Capsule 4th ed., p. 16; topic 4 point 38.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 38",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n38"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00041",
          "src": "CAP4-04-00041",
          "text": "The bending moment in an arch is zero when the line of thrust ______.",
          "options": [
            {
              "key": "a",
              "text": "Coincides with the axis of the arch"
            },
            {
              "key": "b",
              "text": "Is perpendicular to the arch axis"
            },
            {
              "key": "c",
              "text": "Is horizontal"
            },
            {
              "key": "d",
              "text": "Passes through the crown only"
            }
          ],
          "answer": "a",
          "explanation": "The bending moment at any section of an arch equals the thrust times the distance between the line of thrust and the arch axis, so it is zero where the line of thrust coincides with the axis.<p>Capsule 4th ed., pp. 16, 17; topic 4 point 39; topic 4 point 53.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 16, 17; topic 4 point 39; topic 4 point 53",
            "pages": [
              16,
              17
            ],
            "points": [
              "capsule-t04-p016-n39",
              "capsule-t04-p017-n53"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00046",
          "src": "CAP4-04-00046",
          "text": "The horizontal thrust in a two-hinged semicircular arch of radius \\(R\\) subjected to a UDL of \\(w\\) per unit length over the left half span is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{wR}{2}\\)"
            },
            {
              "key": "b",
              "text": "\\(\\dfrac{4wR}{3\\pi}\\)"
            },
            {
              "key": "c",
              "text": "\\(wR\\)"
            },
            {
              "key": "d",
              "text": "\\(\\dfrac{2wR}{3\\pi}\\)"
            }
          ],
          "answer": "d",
          "explanation": "A UDL over the whole span of a two-hinged semicircular arch gives \\(H = \\dfrac{4wR}{3\\pi}\\). By symmetry, loading only the left half gives half of this, \\(\\dfrac{2wR}{3\\pi}\\).<p>Capsule 4th ed., p. 16; topic 4 point 44.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 44",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n44"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00047",
          "src": "CAP4-04-00047",
          "text": "Two-hinged semicircular arches A, B and C of radii 5 m, 7.5 m and 10 m carry the same concentrated crown load \\(W\\). The ratio of their horizontal thrusts is ______.",
          "options": [
            {
              "key": "a",
              "text": "4 : 9 : 16"
            },
            {
              "key": "b",
              "text": "6 : 4 : 3"
            },
            {
              "key": "c",
              "text": "2 : 3 : 4"
            },
            {
              "key": "d",
              "text": "1 : 1 : 1"
            }
          ],
          "answer": "d",
          "explanation": "For a two-hinged semicircular arch with a central point load, \\(H = \\dfrac{W}{\\pi}\\), which is independent of the radius, so the three arches have equal horizontal thrusts, 1 : 1 : 1.<p>Capsule 4th ed., p. 16; topic 4 point 45.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 45",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n45"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00052",
          "src": "CAP4-04-00052",
          "text": "The ILD for horizontal thrust of a three-hinged arch of span \\(L\\) and rise \\(h\\) is a triangle whose maximum ordinate at the centre equals ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{h}{4L}\\)"
            },
            {
              "key": "b",
              "text": "\\(\\dfrac{4h}{L}\\)"
            },
            {
              "key": "c",
              "text": "\\(\\dfrac{L}{4h}\\)"
            },
            {
              "key": "d",
              "text": "\\(\\dfrac{L}{2h}\\)"
            }
          ],
          "answer": "c",
          "explanation": "The horizontal thrust is \\(H = \\dfrac{M_c}{h}\\), where \\(M_c\\) is the simple-beam moment at the crown. That moment's ILD is a triangle with a peak of \\(\\dfrac{L}{4}\\), so the ILD for \\(H\\) is a triangle with a peak of \\(\\dfrac{L}{4h}\\) at the centre.<p>Capsule 4th ed., p. 17; topic 4 point 50.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 50",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n50"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00062",
          "src": "CAP4-04-00062",
          "text": "The ILD for the reaction at the fixed support of a cantilever beam is ______.",
          "options": [
            {
              "key": "a",
              "text": "A triangle with unit ordinate at the support"
            },
            {
              "key": "b",
              "text": "A triangle with unit ordinate at the free end"
            },
            {
              "key": "c",
              "text": "Zero throughout the span"
            },
            {
              "key": "d",
              "text": "A rectangle of unit ordinate throughout the span"
            }
          ],
          "answer": "d",
          "explanation": "Wherever a unit load stands on a cantilever, the vertical reaction at the fixed support equals 1, so the ILD for the reaction has a constant unit ordinate over the whole span.<p>Capsule 4th ed., p. 17; topic 4 point 60.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 60",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n60"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00063",
          "src": "CAP4-04-00063",
          "text": "The maximum bending moment due to a train of wheel loads on a simply supported girder always occurs ______.",
          "options": [
            {
              "key": "a",
              "text": "At mid-span"
            },
            {
              "key": "b",
              "text": "Under a wheel load"
            },
            {
              "key": "c",
              "text": "At the supports"
            },
            {
              "key": "d",
              "text": "Midway between two wheels"
            }
          ],
          "answer": "b",
          "explanation": "Between concentrated wheel loads the bending moment varies linearly, so its maximum can only occur at a load point; the maximum bending moment due to a train of wheel loads therefore always occurs under a wheel load.<p>Capsule 4th ed., p. 17; topic 4 point 62.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 62",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n62"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00073",
          "src": "CAP4-04-00073",
          "text": "In an influence line diagram, the ______ remains fixed while the position of the load changes.",
          "options": [
            {
              "key": "a",
              "text": "Unit load"
            },
            {
              "key": "b",
              "text": "Support reaction line"
            },
            {
              "key": "c",
              "text": "Section considered"
            },
            {
              "key": "d",
              "text": "Bending moment diagram"
            }
          ],
          "answer": "c",
          "explanation": "An influence line shows how a response at a fixed section, such as a reaction, shear or moment, varies as a unit load moves across the structure: the section stays fixed and the load position changes.<p>Capsule 4th ed., p. 17; topic 4 point 71.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 71",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n71"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00081",
          "src": "CAP4-04-00081",
          "text": "The ILD for shear force at a section of a cantilever is ______.",
          "options": [
            {
              "key": "a",
              "text": "A triangle between the free end and the section"
            },
            {
              "key": "b",
              "text": "Zero everywhere"
            },
            {
              "key": "c",
              "text": "A rectangle of unit ordinate between the free end and the section"
            },
            {
              "key": "d",
              "text": "A rectangle between the fixed end and the section"
            }
          ],
          "answer": "c",
          "explanation": "A unit load between the section and the free end produces a shear force of 1 at the section, while a load between the section and the fixed end produces none, so the ILD is a rectangle of unit ordinate from the section to the free end.<p>Capsule 4th ed., p. 18; topic 4 point 80.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 80",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n80"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00088",
          "src": "CAP4-04-00088",
          "text": "For an arch of total span \\(2l\\) carrying a load \\(W\\) at a distance \\(a\\) from the left support, the vertical reaction at the right support is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{Wa}{2l}\\)"
            },
            {
              "key": "b",
              "text": "\\(\\dfrac{W}{2}\\)"
            },
            {
              "key": "c",
              "text": "\\(\\dfrac{Wa}{l}\\)"
            },
            {
              "key": "d",
              "text": "\\(\\dfrac{W(2l - a)}{2l}\\)"
            }
          ],
          "answer": "a",
          "explanation": "Taking moments about the left support, \\(V_B \\times 2l = W \\times a\\), so the right reaction is \\(\\dfrac{Wa}{2l}\\) and the left reaction is \\(W - \\dfrac{Wa}{2l}\\).<p>Capsule 4th ed., p. 18; topic 4 point 88.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 88",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n88"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00094",
          "src": "CAP4-04-00094",
          "text": "A three-hinged arch has level supports, a midspan crown hinge, span 20 m and rise 5 m. A UDL of 4 kN/m covers its whole horizontal span. What horizontal reaction acts at each support?",
          "options": [
            {
              "key": "a",
              "text": "20 kN inward"
            },
            {
              "key": "b",
              "text": "40 kN outward"
            },
            {
              "key": "c",
              "text": "80 kN inward"
            },
            {
              "key": "d",
              "text": "40 kN inward"
            }
          ],
          "answer": "d",
          "explanation": "The corresponding simple-beam crown moment is \\[\\begin{aligned} M_0 &amp;= \\dfrac{wL^2}{8} = \\dfrac{4 \\times 400}{8} \\\\ &amp;= 200\\ \\text{kN m} \\end{aligned}\\] Zero moment at the crown hinge requires \\(Hh = 200\\), hence \\[H = \\dfrac{200}{5} = 40\\ \\text{kN}\\] Each support pushes inward on the arch; the arch pushes outward on its supports.<p>Capsule 4th ed., p. 18; topic 4 point 94.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 94",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n94"
            ]
          },
          "topic": "ACiE0405",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00096",
          "src": "CAP4-04-00096",
          "text": "The maximum shear force in a three-hinged parabolic arch usually occurs at the ______.",
          "options": [
            {
              "key": "a",
              "text": "Quarter-span sections"
            },
            {
              "key": "b",
              "text": "Springings"
            },
            {
              "key": "c",
              "text": "One-third span sections"
            },
            {
              "key": "d",
              "text": "Crown"
            }
          ],
          "answer": "b",
          "explanation": "Under ordinary loading of a three-hinged parabolic arch, the radial shear force is greatest near the supports, so the maximum shear force usually occurs at the springings.<p>Capsule 4th ed., p. 18; topic 4 point 96.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 96",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n96"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00111",
          "src": "CAP4-04-00111",
          "text": "The locus of the reaction of a two-hinged semicircular arch under a moving point load is a ______.",
          "options": [
            {
              "key": "a",
              "text": "Straight line"
            },
            {
              "key": "b",
              "text": "Hyperbola"
            },
            {
              "key": "c",
              "text": "Parabola"
            },
            {
              "key": "d",
              "text": "Circle"
            }
          ],
          "answer": "a",
          "explanation": "For a two-hinged semicircular arch, the two reaction lines always meet on a horizontal straight line at a height of \\(\\dfrac{\\pi R}{2}\\) above the springings, wherever the load is placed; this line is the reaction locus.<p>Capsule 4th ed., p. 19; topic 4 point 110.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 4 point 110",
            "pages": [
              19
            ],
            "points": [
              "capsule-t04-p019-n110"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00115",
          "src": "CAP4-04-00115",
          "text": "A three-hinged arch is hinged at ______.",
          "options": [
            {
              "key": "a",
              "text": "The supports and anywhere in the arch"
            },
            {
              "key": "b",
              "text": "The supports only"
            },
            {
              "key": "c",
              "text": "The crown only"
            },
            {
              "key": "d",
              "text": "The quarter points only"
            }
          ],
          "answer": "a",
          "explanation": "A three-hinged arch has hinges at both supports and a third hinge anywhere in the arch rib, usually at the crown. The third hinge adds the zero-moment condition that makes the arch statically determinate.<p>Capsule 4th ed., p. 19; topic 4 point 115.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 4 point 115",
            "pages": [
              19
            ],
            "points": [
              "capsule-t04-p019-n115"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00109",
          "src": "CAP4-05-00109",
          "text": "The normal thrust at any section along the tangent to the centre line of an arch is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(H\\cos\\theta - V\\sin\\theta\\)"
            },
            {
              "key": "b",
              "text": "\\(H\\cos\\theta + V\\sin\\theta\\)"
            },
            {
              "key": "c",
              "text": "\\(H\\sin\\theta + V\\cos\\theta\\)"
            },
            {
              "key": "d",
              "text": "\\(H\\sin\\theta - V\\cos\\theta\\)"
            }
          ],
          "answer": "b",
          "explanation": "Resolving the horizontal thrust \\(H\\) and the vertical shear \\(V\\) along the tangent at angle \\(\\theta\\) gives the normal thrust \\(N = H\\cos\\theta + V\\sin\\theta\\); resolving them normal to the axis gives the radial shear.<p>Capsule 4th ed., p. 22; topic 5 point 107.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 22; topic 5 point 107",
            "pages": [
              22
            ],
            "points": [
              "capsule-t05-p022-n107"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00137",
          "src": "CAP4-05-00137",
          "text": "The ILD for shear force or bending moment at a section shows the variation of that quantity at the section as ______.",
          "options": [
            {
              "key": "a",
              "text": "A unit load traverses the span from left to right"
            },
            {
              "key": "b",
              "text": "The load intensity increases on a fixed span"
            },
            {
              "key": "c",
              "text": "The span length changes"
            },
            {
              "key": "d",
              "text": "The section moves along the span under a fixed load"
            }
          ],
          "answer": "a",
          "explanation": "An ILD for shear force or bending moment at a section plots the value at that one section as a unit load moves across the span from left to right.<p>Capsule 4th ed., p. 23; topic 5 point 138.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 138",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n138"
            ]
          },
          "topic": "ACiE0405",
          "kind": "recall"
        }
      ]
    },
    {
      "id": "ACiE0406",
      "name": "Indeterminate structures",
      "subject": "Structural Mechanics",
      "questions": [
        {
          "id": "CAP4-01-00080",
          "src": "CAP4-01-00080",
          "text": "The shape factor of a rectangular section is ______.",
          "options": [
            {
              "key": "a",
              "text": "1.5"
            },
            {
              "key": "b",
              "text": "1.7"
            },
            {
              "key": "c",
              "text": "1.0"
            },
            {
              "key": "d",
              "text": "2.0"
            }
          ],
          "answer": "a",
          "explanation": "The shape factor is the ratio of the plastic section modulus to the elastic section modulus. For a rectangle, \\(Z_p = \\dfrac{bd^2}{4}\\) and \\(Z_e = \\dfrac{bd^2}{6}\\), so the shape factor is 1.5. A solid circle has about 1.7 and a diamond section 2.0.<p>Capsule 4th ed., p. 4; topic 1 point 76.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 4; topic 1 point 76",
            "pages": [
              4
            ],
            "points": [
              "capsule-t01-p004-n76"
            ]
          },
          "topic": "ACiE0406",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00010",
          "src": "CAP4-04-00010",
          "text": "A beam is said to be continuous if it is supported on ______.",
          "options": [
            {
              "key": "a",
              "text": "More than two supports"
            },
            {
              "key": "b",
              "text": "One fixed and one roller support"
            },
            {
              "key": "c",
              "text": "One fixed support"
            },
            {
              "key": "d",
              "text": "Two supports"
            }
          ],
          "answer": "a",
          "explanation": "A continuous beam rests on more than two supports and is continuous over the interior supports. A simply supported beam has two supports, a cantilever one fixed support, and a propped cantilever a fixed and a roller support.<p>Capsule 4th ed., p. 15; topic 4 point 10.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 10",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n10"
            ]
          },
          "topic": "ACiE0406",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00016",
          "src": "CAP4-04-00016",
          "text": "In a propped cantilever beam under uniform load, the internal plastic hinge is located at a distance of ______ from the propped end.",
          "options": [
            {
              "key": "a",
              "text": "\\(0.586L\\)"
            },
            {
              "key": "b",
              "text": "\\(0.414L\\)"
            },
            {
              "key": "c",
              "text": "\\(0.25L\\)"
            },
            {
              "key": "d",
              "text": "\\(0.5L\\)"
            }
          ],
          "answer": "b",
          "explanation": "At collapse, a propped cantilever under uniform load forms one plastic hinge at the fixed end and an internal (sagging) hinge at \\((\\sqrt{2} - 1)L = 0.414L\\) from the propped end.<p>Capsule 4th ed., p. 15; topic 4 point 16.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 16",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n16"
            ]
          },
          "topic": "ACiE0406",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00017",
          "src": "CAP4-04-00017",
          "text": "In a propped cantilever of span \\(L\\), the internal plastic hinge at \\(0.414L\\) from the propped end lies at ______ from the fixed end.",
          "options": [
            {
              "key": "a",
              "text": "\\(0.5L\\)"
            },
            {
              "key": "b",
              "text": "\\(0.75L\\)"
            },
            {
              "key": "c",
              "text": "\\(0.414L\\)"
            },
            {
              "key": "d",
              "text": "\\(0.586L\\)"
            }
          ],
          "answer": "d",
          "explanation": "The internal hinge is \\(0.414L\\) from the propped end, so its distance from the fixed end is \\[L - 0.414L = 0.586L\\]<p>Capsule 4th ed., p. 15; topic 4 point 16.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 15; topic 4 point 16",
            "pages": [
              15
            ],
            "points": [
              "capsule-t04-p015-n16"
            ]
          },
          "topic": "ACiE0406",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00042",
          "src": "CAP4-04-00042",
          "text": "The stiffness matrix method is also called the ______ method.",
          "options": [
            {
              "key": "a",
              "text": "Force"
            },
            {
              "key": "b",
              "text": "Flexibility"
            },
            {
              "key": "c",
              "text": "Displacement"
            },
            {
              "key": "d",
              "text": "Consistent deformation"
            }
          ],
          "answer": "c",
          "explanation": "In the stiffness, or displacement, method the unknowns are the joint displacements, found from \\([K]\\{d\\} = \\{F\\}\\). The flexibility, or force, method takes the redundant forces as unknowns.<p>Capsule 4th ed., p. 16; topic 4 point 40.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 40",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n40"
            ]
          },
          "topic": "ACiE0406",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00043",
          "src": "CAP4-04-00043",
          "text": "The stiffness of end A of a member when the far end B is a vertical guided roller is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{3EI}{L}\\)"
            },
            {
              "key": "b",
              "text": "\\(\\dfrac{2EI}{L}\\)"
            },
            {
              "key": "c",
              "text": "\\(\\dfrac{4EI}{L}\\)"
            },
            {
              "key": "d",
              "text": "\\(\\dfrac{EI}{L}\\)"
            }
          ],
          "answer": "d",
          "explanation": "With the far end free to slide but not to rotate, a unit rotation of end A needs a moment of only \\(\\dfrac{EI}{L}\\). A fixed far end gives \\(\\dfrac{4EI}{L}\\), and a hinged far end \\(\\dfrac{3EI}{L}\\).<p>Capsule 4th ed., p. 16; topic 4 point 41.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 41",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n41"
            ]
          },
          "topic": "ACiE0406",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00044",
          "src": "CAP4-04-00044",
          "text": "The simultaneous equations of the slope deflection method can be solved by iteration in the ______ method.",
          "options": [
            {
              "key": "a",
              "text": "Column analogy"
            },
            {
              "key": "b",
              "text": "Unit load"
            },
            {
              "key": "c",
              "text": "Moment distribution"
            },
            {
              "key": "d",
              "text": "Conjugate beam"
            }
          ],
          "answer": "c",
          "explanation": "The moment distribution method of Hardy Cross is an iterative way of solving the slope deflection equations: the joint moments are balanced and carried over repeatedly until they converge.<p>Capsule 4th ed., pp. 16, 18; topic 4 point 42; topic 4 point 103.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 16, 18; topic 4 point 42; topic 4 point 103",
            "pages": [
              16,
              18
            ],
            "points": [
              "capsule-t04-p016-n42",
              "capsule-t04-p018-n103"
            ]
          },
          "topic": "ACiE0406",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00045",
          "src": "CAP4-04-00045",
          "text": "In plastic analysis of structures, the segment between any two successive plastic hinges is assumed to deform as a ______ material.",
          "options": [
            {
              "key": "a",
              "text": "Rigid"
            },
            {
              "key": "b",
              "text": "Viscous"
            },
            {
              "key": "c",
              "text": "Brittle"
            },
            {
              "key": "d",
              "text": "Elastic"
            }
          ],
          "answer": "a",
          "explanation": "In plastic analysis, all rotation is concentrated at the plastic hinges, and the segments between successive hinges are assumed to remain rigid while the collapse mechanism forms.<p>Capsule 4th ed., p. 16; topic 4 point 43.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 16; topic 4 point 43",
            "pages": [
              16
            ],
            "points": [
              "capsule-t04-p016-n43"
            ]
          },
          "topic": "ACiE0406",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00048",
          "src": "CAP4-04-00048",
          "text": "For a two-hinged arch having constant \\(EI\\), the horizontal thrust \\(H\\) in terms of the beam moment \\(M\\) is given by ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{\\int My^2\\,ds/EI}{\\int y^2\\,ds/EI}\\)"
            },
            {
              "key": "b",
              "text": "\\(\\dfrac{\\int My\\,ds/EI}{\\int y^2\\,ds/EI}\\)"
            },
            {
              "key": "c",
              "text": "\\(\\dfrac{\\int M\\,ds/EI}{\\int y\\,ds/EI}\\)"
            },
            {
              "key": "d",
              "text": "\\(\\dfrac{\\int My\\,ds/EI}{\\int y\\,ds/EI}\\)"
            }
          ],
          "answer": "b",
          "explanation": "Compatibility of the span of a two-hinged arch gives \\[H = \\dfrac{\\int My\\,\\dfrac{ds}{EI}}{\\int y^2\\,\\dfrac{ds}{EI}}\\] where \\(M\\) is the simple-beam bending moment and \\(y\\) the height of the arch axis.<p>Capsule 4th ed., p. 17; topic 4 point 46.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 46",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n46"
            ]
          },
          "topic": "ACiE0406",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00055",
          "src": "CAP4-04-00055",
          "text": "An unloaded prismatic member has \\(EI = 16000\\) kN m<sup>2</sup> and length 4 m. Both ends are held against transverse translation, and its far end is hinged. What is the near-end rotational stiffness?",
          "options": [
            {
              "key": "a",
              "text": "16000 kN m/rad"
            },
            {
              "key": "b",
              "text": "4000 kN m/rad"
            },
            {
              "key": "c",
              "text": "12000 kN m/rad"
            },
            {
              "key": "d",
              "text": "8000 kN m/rad"
            }
          ],
          "answer": "c",
          "explanation": "With no chord rotation, the zero far-end moment condition gives \\(\\theta_B = -\\dfrac{\\theta_A}{2}\\). Substituting in \\[M_A = \\dfrac{2EI}{L}(2\\theta_A + \\theta_B)\\] gives \\[\\begin{aligned} \\dfrac{M_A}{\\theta_A} &amp;= \\dfrac{3EI}{L} = \\dfrac{3 \\times 16{,}000}{4} \\\\ &amp;= 12{,}000\\ \\text{kN m/rad} \\end{aligned}\\] A fixed far end would give \\(\\dfrac{4EI}{L}\\).<p>Capsule 4th ed., p. 17; topic 4 point 54.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 54",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n54"
            ]
          },
          "topic": "ACiE0406",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00057",
          "src": "CAP4-04-00057",
          "text": "The moment distribution method was introduced by ______.",
          "options": [
            {
              "key": "a",
              "text": "Otto Mohr"
            },
            {
              "key": "b",
              "text": "Hardy Cross"
            },
            {
              "key": "c",
              "text": "Castigliano"
            },
            {
              "key": "d",
              "text": "Muller-Breslau"
            }
          ],
          "answer": "b",
          "explanation": "Hardy Cross introduced the moment distribution method in 1930 as an iterative way to analyse continuous beams and rigid frames.<p>Capsule 4th ed., p. 17; topic 4 point 56.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 56",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n56"
            ]
          },
          "topic": "ACiE0406",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00067",
          "src": "CAP4-04-00067",
          "text": "A parabolic two-hinged arch of span \\(L\\) and rise \\(h\\) carries a concentrated load \\(W\\) at the crown. The horizontal thrust is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{5WL}{64h}\\)"
            },
            {
              "key": "b",
              "text": "\\(\\dfrac{WL^2}{8h}\\)"
            },
            {
              "key": "c",
              "text": "\\(\\dfrac{25WL}{128h}\\)"
            },
            {
              "key": "d",
              "text": "\\(\\dfrac{WL}{4h}\\)"
            }
          ],
          "answer": "c",
          "explanation": "For a two-hinged parabolic arch with a central point load, compatibility of the span gives \\(H = \\dfrac{25WL}{128h}\\), slightly less than the thrust \\(\\dfrac{WL}{4h}\\) of a three-hinged arch under the same load.<p>Capsule 4th ed., p. 17; topic 4 point 66.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 66",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n66"
            ]
          },
          "topic": "ACiE0406",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00072",
          "src": "CAP4-04-00072",
          "text": "The shape factor of a diamond-shaped cross-section under flexure is ______.",
          "options": [
            {
              "key": "a",
              "text": "1.7"
            },
            {
              "key": "b",
              "text": "1.5"
            },
            {
              "key": "c",
              "text": "1.14"
            },
            {
              "key": "d",
              "text": "2"
            }
          ],
          "answer": "d",
          "explanation": "For a diamond (rhombus) section bent about its diagonal, \\(Z_p = \\dfrac{bd^2}{12}\\) and \\(Z_e = \\dfrac{bd^2}{24}\\), so the shape factor is 2. A rectangle has 1.5, a solid circle about 1.7 and an I-section about 1.14.<p>Capsule 4th ed., p. 17; topic 4 point 70.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 17; topic 4 point 70",
            "pages": [
              17
            ],
            "points": [
              "capsule-t04-p017-n70"
            ]
          },
          "topic": "ACiE0406",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00077",
          "src": "CAP4-04-00077",
          "text": "A UVL varying from zero at one end to \\(w\\) at the other is applied on a two-hinged parabolic arch of span \\(l\\) and rise \\(h\\). The horizontal thrust is ______.",
          "options": [
            {
              "key": "a",
              "text": "\\(\\dfrac{wl^2}{12h}\\)"
            },
            {
              "key": "b",
              "text": "\\(\\dfrac{wl^2}{8h}\\)"
            },
            {
              "key": "c",
              "text": "\\(\\dfrac{wl^2}{4h}\\)"
            },
            {
              "key": "d",
              "text": "\\(\\dfrac{wl^2}{16h}\\)"
            }
          ],
          "answer": "d",
          "explanation": "A UVL from zero to \\(w\\) and its mirror image together form a full UDL \\(w\\), which gives \\(H = \\dfrac{wl^2}{8h}\\). By symmetry each triangular load produces half of this, \\(\\dfrac{wl^2}{16h}\\).<p>Capsule 4th ed., p. 18; topic 4 point 75.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 75",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n75"
            ]
          },
          "topic": "ACiE0406",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00079",
          "src": "CAP4-04-00079",
          "text": "Two active members at a joint have rotational stiffnesses 6000 and 4000 kN m/rad. The joint's unbalanced moment is +50 kN m. What balancing increment goes to the stiffer member?",
          "options": [
            {
              "key": "a",
              "text": "-25 kN m"
            },
            {
              "key": "b",
              "text": "+30 kN m"
            },
            {
              "key": "c",
              "text": "-30 kN m"
            },
            {
              "key": "d",
              "text": "-20 kN m"
            }
          ],
          "answer": "c",
          "explanation": "The stiffer member's distribution factor is \\[\\dfrac{6000}{6000 + 4000} = 0.60\\] Balancing opposes the unbalance, so its increment is \\[-0.60 \\times 50 = -30\\ \\text{kN m}\\] and the other member receives −20 kN m. The factors sum to one, and the increments sum to −50 kN m.<p>Capsule 4th ed., p. 18; topic 4 point 77.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 77",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n77"
            ]
          },
          "topic": "ACiE0406",
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00097",
          "src": "CAP4-04-00097",
          "text": "In a two-hinged parabolic arch, an increase in temperature will ______ the horizontal thrust.",
          "options": [
            {
              "key": "a",
              "text": "Reverse"
            },
            {
              "key": "b",
              "text": "Not change"
            },
            {
              "key": "c",
              "text": "Decrease"
            },
            {
              "key": "d",
              "text": "Increase"
            }
          ],
          "answer": "d",
          "explanation": "A rise in temperature makes the arch try to expand, but the hinges keep the span fixed, so an additional horizontal thrust develops and the thrust increases; a fall in temperature decreases it.<p>Capsule 4th ed., p. 18; topic 4 point 97.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 18; topic 4 point 97",
            "pages": [
              18
            ],
            "points": [
              "capsule-t04-p018-n97"
            ]
          },
          "topic": "ACiE0406",
          "kind": "recall"
        },
        {
          "id": "CAP4-04-00116",
          "src": "CAP4-04-00116",
          "text": "A symmetrical two-hinged parabolic arch subjected to a UDL over the entire horizontal span is subjected to ______.",
          "options": [
            {
              "key": "a",
              "text": "Bending moment and shear force only"
            },
            {
              "key": "b",
              "text": "Bending moment only"
            },
            {
              "key": "c",
              "text": "Normal thrust only"
            },
            {
              "key": "d",
              "text": "Shear force only"
            }
          ],
          "answer": "c",
          "explanation": "Under a full-span UDL the parabolic arch axis coincides with the line of thrust, so the bending moment and radial shear are zero everywhere and the arch carries only normal thrust.<p>Capsule 4th ed., p. 19; topic 4 point 116.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 19; topic 4 point 116",
            "pages": [
              19
            ],
            "points": [
              "capsule-t04-p019-n116"
            ]
          },
          "topic": "ACiE0406",
          "kind": "recall"
        },
        {
          "id": "CAP4-05-00128",
          "src": "CAP4-05-00128",
          "text": "The distribution factor is the ratio of ______.",
          "options": [
            {
              "key": "a",
              "text": "The stiffness of a member to its length"
            },
            {
              "key": "b",
              "text": "The carry-over moment to the fixed-end moment"
            },
            {
              "key": "c",
              "text": "The stiffness of a member to the total stiffness of the members at the joint"
            },
            {
              "key": "d",
              "text": "The total stiffness at the joint to the stiffness of a member"
            }
          ],
          "answer": "c",
          "explanation": "In moment distribution, the distribution factor of a member is its stiffness divided by the sum of the stiffnesses of all members at the joint, \\(\\dfrac{k}{\\sum k}\\); the factors at a joint add up to 1.<p>Capsule 4th ed., p. 23; topic 5 point 127.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 23; topic 5 point 127",
            "pages": [
              23
            ],
            "points": [
              "capsule-t05-p023-n127"
            ]
          },
          "topic": "ACiE0406",
          "kind": "recall"
        }
      ]
    }
  ]
};
