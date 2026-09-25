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
          "text": "A weightless pin-roller beam carries equal end couples of magnitude M acting in opposite rotational senses, with no transverse loads. What are its internal shear and bending-moment magnitude away from the ends?",
          "options": [
            {
              "key": "a",
              "text": "Constant shear 2M/L; moment changing sign"
            },
            {
              "key": "b",
              "text": "Zero shear; constant moment M"
            },
            {
              "key": "c",
              "text": "Constant shear M/L; moment rising to M"
            },
            {
              "key": "d",
              "text": "Zero shear; zero bending moment"
            }
          ],
          "answer": "b",
          "explanation": "The applied couples cancel in overall moment equilibrium, so both vertical reactions are zero. Every interior cut therefore has zero shear and a bending moment of magnitude M. Equal couples acting in the same rotational sense would require a reaction pair instead.<p>Source note: Point 1 omits the required opposing senses of the end couples.</p><p>Capsule 4th ed., p. 15; topic 4 point 1.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00002",
          "src": "CAP4-04-00002",
          "text": "On a smooth beam segment, shear is positive just before a section and negative just after it, passing continuously through zero. Under V = dM/dx, what does this establish?",
          "options": [
            {
              "key": "a",
              "text": "A jump in bending moment"
            },
            {
              "key": "b",
              "text": "A point of contraflexure"
            },
            {
              "key": "c",
              "text": "A local minimum of bending moment"
            },
            {
              "key": "d",
              "text": "A local maximum of bending moment"
            }
          ],
          "answer": "d",
          "explanation": "Positive shear means M is increasing; negative shear means M is decreasing. Their change from positive to negative establishes a local maximum. Merely finding V = 0 is insufficient: M may remain constant over an interval or have a stationary point without an extremum.<p>Source note: Point 2 is qualified by a shear sign change; zero shear alone is not sufficient.</p><p>Capsule 4th ed., p. 15; topic 4 point 2.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00005",
          "src": "CAP4-04-00005",
          "text": "A simply supported 6 m beam carries only a 24 kN point load 2 m from its left support. Which section has the largest bending moment for flexural design?",
          "options": [
            {
              "key": "a",
              "text": "At the right support, where rotation is free"
            },
            {
              "key": "b",
              "text": "At the left support, where shear is largest"
            },
            {
              "key": "c",
              "text": "At midspan, 3 m from the left support"
            },
            {
              "key": "d",
              "text": "Under the load, 2 m from the left support"
            }
          ],
          "answer": "d",
          "explanation": "The reactions are 16 kN and 8 kN. Shear changes from +16 to -8 kN at the load, so moment peaks there at 16 x 2 = 32 kN m. Midspan moment is only 24 kN m. The centre is critical for many symmetric loads, but not for every beam.<p>Source note: Corrects point 5&#39;s unrestricted midspan-design shortcut.</p><p>Capsule 4th ed., p. 15; topic 4 point 5.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00006",
          "src": "CAP4-04-00006",
          "text": "A beam segment has moment M(x) = 18x - 3x^2 kN m, where x is in metres. Using V = dM/dx, what is the shear at x = 2 m?",
          "options": [
            {
              "key": "a",
              "text": "-6 kN"
            },
            {
              "key": "b",
              "text": "+12 kN"
            },
            {
              "key": "c",
              "text": "+24 kN"
            },
            {
              "key": "d",
              "text": "+6 kN"
            }
          ],
          "answer": "d",
          "explanation": "Differentiate the moment function, rather than divide M by x: V(x) = 18 - 6x. At x = 2 m this gives +6 kN. The moment itself is 24 kN m, which has different units and is not the shear.<p>Capsule 4th ed., p. 15; topic 4 point 6.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00008",
          "src": "CAP4-04-00008",
          "text": "Two downward loads P act at x = L/3 and x = 2L/3 on a simply supported beam AB of span L. Taking upward forces on the left free body as positive, what is the shear at x = L/6?",
          "options": [
            {
              "key": "a",
              "text": "+P/2"
            },
            {
              "key": "b",
              "text": "0"
            },
            {
              "key": "c",
              "text": "+P"
            },
            {
              "key": "d",
              "text": "-P"
            }
          ],
          "answer": "c",
          "explanation": "Symmetry makes each reaction equal to P because the total load is 2P. The section at L/6 lies before either load, so its left free body contains only the reaction P. Between the two loads, by contrast, shear is zero.<p>Source note: The full page text restores the L/3 load distance omitted by the point-level extraction.</p><p>Capsule 4th ed., p. 15; topic 4 point 8.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00011",
          "src": "CAP4-04-00011",
          "text": "A concentrated couple is applied at an interior point of a beam, with no point force there. Which local change occurs across that point?",
          "options": [
            {
              "key": "a",
              "text": "Moment remains continuous; shear develops a slope change"
            },
            {
              "key": "b",
              "text": "Shear jumps; moment remains continuous"
            },
            {
              "key": "c",
              "text": "Moment jumps; shear remains continuous"
            },
            {
              "key": "d",
              "text": "Both diagrams remain continuous with unchanged slopes"
            }
          ],
          "answer": "c",
          "explanation": "An infinitesimal free body around the couple requires a finite change in internal moment to balance it. With no concentrated transverse force, there is no shear jump. The jump's sign depends on the adopted moment and couple conventions.<p>Capsule 4th ed., p. 15; topic 4 point 11.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00012",
          "src": "CAP4-04-00012",
          "text": "An initially straight homogeneous horizontal beam undergoes elastic bending alone. Under the sagging-positive convention, which fibre behaviour corresponds to a positive bending moment?",
          "options": [
            {
              "key": "a",
              "text": "Both extreme fibres lengthen by the same amount"
            },
            {
              "key": "b",
              "text": "Top fibres lengthen and bottom fibres shorten"
            },
            {
              "key": "c",
              "text": "Both extreme fibres shorten by the same amount"
            },
            {
              "key": "d",
              "text": "Top fibres shorten and bottom fibres lengthen"
            }
          ],
          "answer": "d",
          "explanation": "Sagging bending produces compression above and tension below the neutral axis, so the elastic curve is concave upward, also described as convex downward. This describes beam curvature, not the shape or plotting side of the bending-moment graph.<p>Capsule 4th ed., p. 15; topic 4 point 12.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00013",
          "src": "CAP4-04-00013",
          "text": "A simply supported beam carries a constant downward load intensity w over its full span L. Using V = dM/dx and downward w positive, which shear function applies inside the span?",
          "options": [
            {
              "key": "a",
              "text": "V(x) = wL/2 - wx^2/L"
            },
            {
              "key": "b",
              "text": "V(x) = wx(L - x)/2"
            },
            {
              "key": "c",
              "text": "V(x) = wL/2 - wx"
            },
            {
              "key": "d",
              "text": "V(x) = wL/2 throughout"
            }
          ],
          "answer": "c",
          "explanation": "Each reaction is wL/2, and the load to the left of a cut at x is wx. Thus V = wL/2 - wx is linear, with slope -w. The quadratic expression wx(L - x)/2 represents moment, not shear.<p>Capsule 4th ed., p. 15; topic 4 point 13.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00014",
          "src": "CAP4-04-00014",
          "text": "A prismatic beam has a nonzero constant bending moment over an interval containing no concentrated actions. Which internal force must vanish throughout that interval?",
          "options": [
            {
              "key": "a",
              "text": "Transverse shear force"
            },
            {
              "key": "b",
              "text": "Longitudinal normal stress at every fibre"
            },
            {
              "key": "c",
              "text": "Axial force, regardless of other loading"
            },
            {
              "key": "d",
              "text": "Bending moment at every section"
            }
          ],
          "answer": "a",
          "explanation": "The relation V = dM/dx gives zero shear when M is constant. Nonzero constant moment still produces bending stresses and curvature. A separate axial load can coexist with it, so no conclusion about axial force follows from the moment diagram alone.<p>Capsule 4th ed., pp. 15, 17; topic 4 point 14; topic 4 point 63.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00015",
          "src": "CAP4-04-00015",
          "text": "A weightless cantilever of length L carries only an end couple M at its free tip. Where is the largest internal bending-moment magnitude?",
          "options": [
            {
              "key": "a",
              "text": "Only at midspan, with magnitude M/2"
            },
            {
              "key": "b",
              "text": "Only at the fixed end, with magnitude M"
            },
            {
              "key": "c",
              "text": "At every section, with magnitude M"
            },
            {
              "key": "d",
              "text": "At every section, with magnitude 2M"
            }
          ],
          "answer": "c",
          "explanation": "A cut anywhere in the cantilever must balance the same tip couple. Its moment diagram is therefore rectangular, of constant magnitude M, and its shear is zero. Unlike a tip force, a tip couple does not give a moment that grows with distance from the tip.<p>Capsule 4th ed., p. 15; topic 4 point 15.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00026",
          "src": "CAP4-04-00026",
          "text": "A simply supported beam of span L carries only a downward central point load P. Which bending-moment diagram follows from equilibrium?",
          "options": [
            {
              "key": "a",
              "text": "A parabola with central peak PL/8"
            },
            {
              "key": "b",
              "text": "A rectangle of constant magnitude PL/4"
            },
            {
              "key": "c",
              "text": "Two straight segments with a jump PL/2 at the load"
            },
            {
              "key": "d",
              "text": "Two straight segments meeting at a central peak PL/4"
            }
          ],
          "answer": "d",
          "explanation": "Each reaction is P/2. Moment rises linearly from zero to (P/2)(L/2) = PL/4 and then falls linearly to zero. A point force changes shear abruptly but does not introduce a moment jump, so the triangular diagram remains continuous.<p>Capsule 4th ed., p. 16; topic 4 point 25.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00049",
          "src": "CAP4-04-00049",
          "text": "A pin-roller beam ends at its supports, carries transverse loads within the span, and has no applied end couples. What bending moments occur at its end sections?",
          "options": [
            {
              "key": "a",
              "text": "Equal hogging moments at both ends"
            },
            {
              "key": "b",
              "text": "Equal sagging moments at both ends"
            },
            {
              "key": "c",
              "text": "Zero at both ends"
            },
            {
              "key": "d",
              "text": "Zero only at the roller end"
            }
          ],
          "answer": "c",
          "explanation": "Neither ideal support supplies a reaction couple, and no applied end couple or overhang creates an end-section moment. Therefore both end moments vanish. A simple support beneath a continuous beam is different: it does not force the beam's internal moment there to be zero.<p>Source note: Point 47 is qualified to exclude applied end couples, as used in point 1.</p><p>Capsule 4th ed., p. 17; topic 4 point 47.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00050",
          "src": "CAP4-04-00050",
          "text": "A simply supported 8 m beam carries 5 kN/m uniformly over its full span. Where does the greatest absolute internal shear occur, and what is its magnitude?",
          "options": [
            {
              "key": "a",
              "text": "Just inside either support; 10 kN"
            },
            {
              "key": "b",
              "text": "At midspan; 20 kN"
            },
            {
              "key": "c",
              "text": "Just inside the left support only; 40 kN"
            },
            {
              "key": "d",
              "text": "Just inside either support; 20 kN"
            }
          ],
          "answer": "d",
          "explanation": "The total load is 40 kN and each reaction is 20 kN. V(x) = 20 - 5x kN varies from +20 to -20 kN, reaching zero at midspan. Its largest magnitude is 20 kN immediately inside either support, although the signed ordinates differ.<p>Capsule 4th ed., p. 17; topic 4 point 48.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00071",
          "src": "CAP4-04-00071",
          "text": "A continuous beam's moment changes smoothly from -8 kN m to +6 kN m through an interior zero, with EI positive. What occurs at that zero?",
          "options": [
            {
              "key": "a",
              "text": "A point of contraflexure with reversed curvature"
            },
            {
              "key": "b",
              "text": "A maximum moment because the moment is zero"
            },
            {
              "key": "c",
              "text": "A manufactured hinge permitting independent rotations"
            },
            {
              "key": "d",
              "text": "A plastic hinge with exhausted moment capacity"
            }
          ],
          "answer": "a",
          "explanation": "Contraflexure requires a change of moment sign, and curvature M/EI changes sign with it. The beam can remain physically continuous with continuous rotation. Merely touching zero without a sign change would not establish contraflexure, nor does zero moment create a hinge.<p>Source note: Points 69 and 78 repeat the sign-change definition.</p><p>Capsule 4th ed., pp. 17, 18; topic 4 point 69; topic 4 point 78.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00078",
          "src": "CAP4-04-00078",
          "text": "On a beam interval, V(x) = 12 - x^2 kN with x in metres. Taking downward load intensity q positive and dV/dx = -q, what distributed load acts there?",
          "options": [
            {
              "key": "a",
              "text": "q(x) = 2 kN/m downward"
            },
            {
              "key": "b",
              "text": "q(x) = 2x kN/m upward"
            },
            {
              "key": "c",
              "text": "q(x) = x^2 kN/m downward"
            },
            {
              "key": "d",
              "text": "q(x) = 2x kN/m downward"
            }
          ],
          "answer": "d",
          "explanation": "Differentiate the parabolic shear function: dV/dx = -2x. Thus q = -dV/dx = 2x kN/m downward, a linearly varying distribution. Integrating V would determine moment, not load intensity.<p>Capsule 4th ed., p. 18; topic 4 point 76.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00090",
          "src": "CAP4-04-00090",
          "text": "A long UDL fully covers a simply supported 6 m span at intensity 12 kN/m. What is the largest sagging bending moment and where does it occur?",
          "options": [
            {
              "key": "a",
              "text": "54 kN m at midspan"
            },
            {
              "key": "b",
              "text": "36 kN m at quarter span"
            },
            {
              "key": "c",
              "text": "108 kN m at midspan"
            },
            {
              "key": "d",
              "text": "54 kN m at a support"
            }
          ],
          "answer": "a",
          "explanation": "V = w(L/2 - x) becomes zero at x = L/2. Substitution into M = wx(L-x)/2 gives Mmax = wL^2/8 = 12 x 36/8 = 54 kN m. Full-span uniform intensity and simple end conditions justify the midspan location.<p>Capsule 4th ed., p. 18; topic 4 point 90.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00091",
          "src": "CAP4-04-00091",
          "text": "Between two beam sections 3 m apart, shear is constant at -4 kN and there is no applied couple. If the left-section moment is +10 kN m and dM/dx = V, what is the right-section moment?",
          "options": [
            {
              "key": "a",
              "text": "-2 kN m"
            },
            {
              "key": "b",
              "text": "+6 kN m"
            },
            {
              "key": "c",
              "text": "+22 kN m"
            },
            {
              "key": "d",
              "text": "-12 kN m"
            }
          ],
          "answer": "a",
          "explanation": "The moment change is the signed shear-diagram area: delta M = V delta x = -4 x 3 = -12 kN m. Add this to the initial +10 to obtain -2 kN m. Constant shear gives a linear moment variation; -12 is the change, not the final moment.<p>Capsule 4th ed., p. 18; topic 4 point 91.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00092",
          "src": "CAP4-04-00092",
          "text": "A simply supported beam under full-span UDL has maximum moment M. Its span is doubled while load intensity per metre stays unchanged. What is the new maximum moment?",
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
          "explanation": "For full-span UDL, Mmax = wL^2/8. Holding w fixed and replacing L by 2L multiplies moment by four. The total load also doubles, so this is not a comparison at constant total force.<p>Capsule 4th ed., p. 18; topic 4 point 93.</p>",
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
          "text": "Two simple beams carry the same total force W spread uniformly over their respective spans L and 2L. If the first has maximum moment M, what is the second's maximum moment?",
          "options": [
            {
              "key": "a",
              "text": "M/2"
            },
            {
              "key": "b",
              "text": "2M"
            },
            {
              "key": "c",
              "text": "M"
            },
            {
              "key": "d",
              "text": "4M"
            }
          ],
          "answer": "b",
          "explanation": "At fixed total force W, the intensity is W/L, so Mmax = WL/8. Doubling span then doubles moment because the intensity halves. The fourfold rule applies only when intensity per metre, rather than total load, is unchanged.<p>Capsule 4th ed., p. 18; topic 4 point 93.</p>",
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
          "id": "CAP4-04-00104",
          "src": "CAP4-04-00104",
          "text": "A weightless cantilever carries only a downward tip force P. What does its internal shear-magnitude diagram look like between root and tip?",
          "options": [
            {
              "key": "a",
              "text": "A rectangle of height P"
            },
            {
              "key": "b",
              "text": "A parabola rising from zero to P"
            },
            {
              "key": "c",
              "text": "A rectangle of height PL"
            },
            {
              "key": "d",
              "text": "A triangle rising from zero to P"
            }
          ],
          "answer": "a",
          "explanation": "Every section's free-side segment contains the same tip force P and no distributed load, so shear magnitude is P throughout. The lever arm varies with the cut, but that changes bending moment rather than shear. Shear units are force, not force times length.<p>Capsule 4th ed., p. 19; topic 4 point 105.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00110",
          "src": "CAP4-04-00110",
          "text": "A simply supported 6 m beam carries a triangular load rising from zero at A to 12 kN/m at B. How far from A is the interior zero-shear section?",
          "options": [
            {
              "key": "a",
              "text": "3.000 m"
            },
            {
              "key": "b",
              "text": "2.000 m"
            },
            {
              "key": "c",
              "text": "3.464 m"
            },
            {
              "key": "d",
              "text": "4.000 m"
            }
          ],
          "answer": "c",
          "explanation": "Total load is 12 x 6/2 = 36 kN, acting 4 m from A. Thus RA = 12 kN. Since q(x) = 2x, accumulated load to x is x^2, giving V = 12 - x^2. Hence x = sqrt(12) = 6/sqrt(3) = 3.464 m, not L/3, L/2 or the load-resultant location 2L/3.<p>Source note: Pages 19 points 109 and 121 duplicate the same rule. Extraction shows a/3 without a recoverable radical; equilibrium requires a/sqrt(3). No image review claimed.</p><p>Capsule 4th ed., p. 19; topic 4 point 109; topic 4 point 121.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00118",
          "src": "CAP4-04-00118",
          "text": "A 3 m cantilever carries a 10 kN downward force at its free end. With sagging moment positive, how does bending moment vary from the fixed root to the free tip?",
          "options": [
            {
              "key": "a",
              "text": "Linearly from -30 kN m to zero"
            },
            {
              "key": "b",
              "text": "Parabolically from -15 kN m to zero"
            },
            {
              "key": "c",
              "text": "Constant at -30 kN m throughout"
            },
            {
              "key": "d",
              "text": "Linearly from +30 kN m to zero"
            }
          ],
          "answer": "a",
          "explanation": "At distance x from the fixed root, the free-side force gives M(x) = -P(L-x) = -10(3-x) kN m. It is hogging and linear, from -30 at the root to zero at the tip. A UDL, unlike this point force, would produce a parabolic moment diagram.<p>Capsule 4th ed., p. 19; topic 4 point 119.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00046",
          "src": "CAP4-05-00046",
          "text": "A simply supported beam is analysed in first-order statics under a fixed externally specified load, with self-weight excluded. If its section depth changes, which quantity remains fixed by equilibrium alone?",
          "options": [
            {
              "key": "a",
              "text": "Its curvature along the span"
            },
            {
              "key": "b",
              "text": "Its bending-moment diagram"
            },
            {
              "key": "c",
              "text": "Its midspan displacement"
            },
            {
              "key": "d",
              "text": "Its extreme-fibre bending stress"
            }
          ],
          "answer": "b",
          "explanation": "For this statically determinate beam, reactions and bending moments follow from loads and geometry, not EI. Section changes alter stress and deformation. If self-weight changes or the system is indeterminate, the same blanket independence cannot be assumed.<p>Source note: Page 20 point 45 is limited to a determinate first-order model with unchanged loads.</p><p>Capsule 4th ed., p. 20; topic 5 point 45.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-05-00052",
          "src": "CAP4-05-00052",
          "text": "A cantilever carries only a 12 kN m couple at its free end; self-weight is neglected. What are the internal shear and bending-moment magnitude away from the ends?",
          "options": [
            {
              "key": "a",
              "text": "Linearly varying shear and parabolic moment"
            },
            {
              "key": "b",
              "text": "Constant 12 kN shear and zero moment"
            },
            {
              "key": "c",
              "text": "Zero shear and constant 12 kN m moment"
            },
            {
              "key": "d",
              "text": "Zero shear and linearly varying moment"
            }
          ],
          "answer": "c",
          "explanation": "A pure end couple introduces no transverse force, so shear is zero. Moment equilibrium gives the same 12 kN m moment magnitude at every section. The maximum therefore equals the applied couple and does not multiply by span.<p>Capsule 4th ed., p. 20; topic 5 point 51.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-05-00070",
          "src": "CAP4-05-00070",
          "text": "A calculation reports a vertical force component of -18 kN, with upward positive. What are its magnitude and direction?",
          "options": [
            {
              "key": "a",
              "text": "18 kN upward"
            },
            {
              "key": "b",
              "text": "-18 kN upward"
            },
            {
              "key": "c",
              "text": "18 kN downward"
            },
            {
              "key": "d",
              "text": "-18 kN downward"
            }
          ],
          "answer": "c",
          "explanation": "Magnitude is the non-negative size of the vector, here 18 kN. The negative component indicates downward direction under the stated convention. In technical usage, magnitude means size, not the moral or qualitative meaning of 'enormity'.<p>Source note: Page 21 point 68 is corrected through a structural-force example and mapped to ACiE0401.</p><p>Capsule 4th ed., p. 21; topic 5 point 68.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-05-00108",
          "src": "CAP4-05-00108",
          "text": "A simply supported beam carries a uniform downward load over its entire span. Which description of its midspan internal actions is correct?",
          "options": [
            {
              "key": "a",
              "text": "Maximum sagging moment and zero shear"
            },
            {
              "key": "b",
              "text": "Zero moment and maximum positive shear"
            },
            {
              "key": "c",
              "text": "Maximum hogging moment and maximum shear"
            },
            {
              "key": "d",
              "text": "Zero moment and zero shear throughout the beam"
            }
          ],
          "answer": "a",
          "explanation": "Symmetry gives equal reactions and zero shear at midspan. Since the bending-moment slope equals shear, the sagging moment reaches its maximum there. The conclusion requires the stated loading, not just the words simply supported.<p>Capsule 4th ed., p. 22; topic 5 point 106.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-05-00110",
          "src": "CAP4-05-00110",
          "text": "A cantilever carries only a 9 kN m couple at its midspan, with self-weight ignored. What are the fixed-end shear and bending-moment magnitude?",
          "options": [
            {
              "key": "a",
              "text": "0 kN and 4.5 kN m"
            },
            {
              "key": "b",
              "text": "9 kN and 0 kN m"
            },
            {
              "key": "c",
              "text": "0 kN and 9 kN m"
            },
            {
              "key": "d",
              "text": "4.5 kN and 9 kN m"
            }
          ],
          "answer": "c",
          "explanation": "The applied couple has no net transverse force, so the fixed-end shear is zero. Moment equilibrium requires a 9 kN m reaction couple. Internal moment is constant between the fixed end and the applied couple and zero beyond it to the free end.<p>Source note: Page 22 point 108&#39;s concatenated &#39;0M&#39; is interpreted as zero shear and moment M, justified independently by equilibrium.</p><p>Capsule 4th ed., p. 22; topic 5 point 108.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-05-00111",
          "src": "CAP4-05-00111",
          "text": "A cantilever of span 3 m carries a 10 kN downward tip load and no other load. Where is the maximum bending-moment magnitude and what is it?",
          "options": [
            {
              "key": "a",
              "text": "At the free end, 15 kN m"
            },
            {
              "key": "b",
              "text": "At midspan, 15 kN m"
            },
            {
              "key": "c",
              "text": "At the fixed end, 30 kN m"
            },
            {
              "key": "d",
              "text": "At midspan, 30 kN m"
            }
          ],
          "answer": "c",
          "explanation": "The moment magnitude increases linearly from zero at the tip to PL = 10 x 3 = 30 kN m at the fixed end. A beam's maximum moment is not always at its centre; support and load configuration determine the critical section.<p>Source note: Page 22 point 109&#39;s universal centre-of-beam claim is corrected with a determinate counterexample.</p><p>Capsule 4th ed., p. 22; topic 5 point 109.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00138",
          "src": "CAP4-05-00138",
          "text": "A simply supported 9 m beam carries two 30 kN downward point loads, one 3 m from each support. Neglecting self-weight, what is its midspan bending moment?",
          "options": [
            {
              "key": "a",
              "text": "135 kN m"
            },
            {
              "key": "b",
              "text": "45 kN m"
            },
            {
              "key": "c",
              "text": "67.5 kN m"
            },
            {
              "key": "d",
              "text": "90 kN m"
            }
          ],
          "answer": "d",
          "explanation": "Symmetry gives reactions of 30 kN each. At midspan, M = 30 x 4.5 - 30 x (4.5 - 3) = 90 kN m. Shear is zero between the two loads, giving a constant moment WL/3 when W denotes each individual load, not their sum.<p>Source note: Full page 23 text recovers the load distance L/3. The extracted W3L is reconstructed as WL/3 by independent equilibrium, not by image inspection.</p><p>Capsule 4th ed., p. 23; topic 5 point 139.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-10-00179",
          "src": "CAP4-10-00179",
          "text": "In a conventional suspension bridge, which load path best describes how gravity loads from the deck reach the foundations?",
          "options": [
            {
              "key": "a",
              "text": "Deck to tension hangers and main cables, then towers and anchorages"
            },
            {
              "key": "b",
              "text": "Deck to compression-only hangers, with no main cable force"
            },
            {
              "key": "c",
              "text": "Deck directly to wind guys, with towers carrying no load"
            },
            {
              "key": "d",
              "text": "Deck to unsupported vertical cantilevers without anchorages"
            }
          ],
          "answer": "a",
          "explanation": "Hangers and main cables primarily carry tension; towers carry mainly compression and anchorages resist cable forces. The capsule's list of vertical struts, cantilevers and columns does not correctly describe the primary suspended load path.<p>Source note: Appendix p42 n7 corrected: actual element force roles, not an unsupported list of vertical members.</p><p>Capsule 4th ed., p. 42; rural point 7.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-10-00193",
          "src": "CAP4-10-00193",
          "text": "A hypothetical trail-bridge catalogue calls its suspended form D-type. Its walkway is supported at nearly constant offsets from sagging main cables between end anchorages. Which longitudinal walkway profile follows from those supplied facts?",
          "options": [
            {
              "key": "a",
              "text": "A level walkway regardless of cable sag"
            },
            {
              "key": "b",
              "text": "A sagging walkway broadly following the main cables"
            },
            {
              "key": "c",
              "text": "A convex-up arch between the anchorages"
            },
            {
              "key": "d",
              "text": "A straight inclined walkway regardless of cable sag"
            }
          ],
          "answer": "b",
          "explanation": "With nearly constant vertical offsets, the walkway follows the sagging cable profile. A level deck would need a different support geometry, such as varying hanger lengths. The D-type label is supplied for this example; the mechanics do not establish a Nepal statutory classification.<p>Source note: Appendix p42 n17: unverified real-world D-type convention replaced with explicit hypothetical catalogue facts and a defensible load-path/profile principle. Exact local manual remains a SOURCE uncertainty, not a keyed legal claim.</p><p>Capsule 4th ed., p. 42; rural point 17.</p>",
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
          "kind": "application"
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
          "text": "Two comparable tensile specimens each start with area 100 mm^2. Their minimum areas at fracture are 60 mm^2 and 75 mm^2. What does the reduction-of-area measure indicate?",
          "options": [
            {
              "key": "a",
              "text": "The second is more ductile: reductions are 40% and 25%"
            },
            {
              "key": "b",
              "text": "The first is more ductile: reductions are 60% and 75%"
            },
            {
              "key": "c",
              "text": "The first is more ductile: reductions are 40% and 25%"
            },
            {
              "key": "d",
              "text": "They have equal ductility because initial areas match"
            }
          ],
          "answer": "c",
          "explanation": "Percentage reduction of area is 100(A0 - Af)/A0, giving 40% and 25%. Greater local plastic contraction before fracture indicates greater ductility under comparable tests; it does not by itself establish a larger elastic modulus or ultimate strength.<p>Capsule 4th ed., p. 15; topic 4 point 9.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00018",
          "src": "CAP4-04-00018",
          "text": "For a homogeneous isotropic linear-elastic material, E = 210 GPa and G = 84 GPa. What Poisson ratio is consistent with these measurements?",
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
          "explanation": "Isotropic elasticity requires E = 2G(1 + nu). Therefore nu = 210/(2 x 84) - 1 = 0.25. The value 1.25 is 1 + nu, not nu; the relation should not be imposed on an arbitrary anisotropic material.<p>Capsule 4th ed., p. 15; topic 4 point 17.</p>",
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
          "text": "At a stressed point, the traction on a particular plane is exactly perpendicular to that plane. What identifies this plane?",
          "options": [
            {
              "key": "a",
              "text": "It is necessarily an unstressed plane"
            },
            {
              "key": "b",
              "text": "It is a maximum-shear plane with zero normal traction"
            },
            {
              "key": "c",
              "text": "It is a principal plane with zero shear traction"
            },
            {
              "key": "d",
              "text": "It is necessarily the plane of maximum compression"
            }
          ],
          "answer": "c",
          "explanation": "Perpendicular traction has only a normal component, so the tangential shear component is zero. That is the defining property of a principal plane. Its normal stress may be major, intermediate or minor and need not be compressive or zero.<p>Capsule 4th ed., pp. 15, 19; topic 4 point 18; topic 4 point 117.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00020",
          "src": "CAP4-04-00020",
          "text": "A plane-stress state has major and minor in-plane principal stresses of 80 MPa and 20 MPa. What shear stress acts on the plane carrying the 80 MPa principal stress?",
          "options": [
            {
              "key": "a",
              "text": "30 MPa"
            },
            {
              "key": "b",
              "text": "20 MPa"
            },
            {
              "key": "c",
              "text": "0 MPa"
            },
            {
              "key": "d",
              "text": "40 MPa"
            }
          ],
          "answer": "c",
          "explanation": "Principal planes have zero shear traction. The in-plane maximum shear is (80 - 20)/2 = 30 MPa on rotated planes. Plane stress also has an out-of-plane principal stress of zero, so the absolute three-dimensional maximum is (80 - 0)/2 = 40 MPa. Neither maximum acts on the 80 MPa principal plane.<p>Capsule 4th ed., p. 15; topic 4 point 19.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00022",
          "src": "CAP4-04-00022",
          "text": "A solid circular shaft is subjected to Saint-Venant elastic torsion only. What is the shear stress on its longitudinal axis?",
          "options": [
            {
              "key": "a",
              "text": "Zero, because radial distance is zero"
            },
            {
              "key": "b",
              "text": "Equal to the maximum surface shear"
            },
            {
              "key": "c",
              "text": "Equal to average shear over the cross-section"
            },
            {
              "key": "d",
              "text": "Undefined, because polar moment is zero there"
            }
          ],
          "answer": "a",
          "explanation": "For a circular shaft, tau(r) = Tr/J. At the axis r = 0, hence tau = 0. J is a property of the entire cross-section and is not zero at the axis. This statement refers to torsional shear, not stresses from an additional axial load.<p>Capsule 4th ed., p. 15; topic 4 point 21.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00054",
          "src": "CAP4-04-00054",
          "text": "At a plane-stress point, sigma_x = 60 MPa tension, sigma_y = 0 and tau_xy = 40 MPa. What is the major principal stress?",
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
          "explanation": "The Mohr-circle centre is (60 + 0)/2 = 30 MPa and radius is sqrt(30^2 + 40^2) = 50 MPa. Thus sigma_1 = 30 + 50 = 80 MPa and sigma_2 = -20 MPa. Adding the full sigma_x to the radius would incorrectly give 110 MPa.<p>Source note: Corrects the missing half on the mean-stress term in page 17 point 52.</p><p>Capsule 4th ed., p. 17; topic 4 point 52.</p>",
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
          "text": "A linear-elastic material develops shear stress 30 MPa at engineering shear strain 0.0004 rad. What shear modulus follows?",
          "options": [
            {
              "key": "a",
              "text": "12 GPa"
            },
            {
              "key": "b",
              "text": "37.5 GPa"
            },
            {
              "key": "c",
              "text": "150 GPa"
            },
            {
              "key": "d",
              "text": "75 GPa"
            }
          ],
          "answer": "d",
          "explanation": "Shear modulus, also called modulus of rigidity, is G = tau/gamma for engineering shear strain gamma. Thus G = 30/0.0004 = 75000 MPa = 75 GPa. Confusing engineering shear strain with the tensor component epsilon_xy = gamma/2 introduces a factor-of-two error.<p>Source note: Points 58 and 61 duplicate the definition of shear modulus.</p><p>Capsule 4th ed., p. 17; topic 4 point 58; topic 4 point 61.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00064",
          "src": "CAP4-04-00064",
          "text": "An axially loaded specimen has longitudinal stress 120 MPa and longitudinal strain 0.0006 within its proportional range. Which property and value follow directly?",
          "options": [
            {
              "key": "a",
              "text": "Shear modulus, 200 GPa"
            },
            {
              "key": "b",
              "text": "Bulk modulus, 72 GPa"
            },
            {
              "key": "c",
              "text": "Young's modulus, 200 GPa"
            },
            {
              "key": "d",
              "text": "Young's modulus, 72 GPa"
            }
          ],
          "answer": "c",
          "explanation": "Young's modulus is the ratio of axial normal stress to corresponding longitudinal strain in linear uniaxial response. E = 120/0.0006 = 200000 MPa = 200 GPa. Shear and bulk moduli require different stress-strain measures.<p>Capsule 4th ed., p. 17; topic 4 point 64.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00070",
          "src": "CAP4-04-00070",
          "text": "A specimen can recover fully after unloading from a stress where its stress-strain curve is already nonlinear. Which limit has certainly been exceeded, even though the elastic limit need not have been?",
          "options": [
            {
              "key": "a",
              "text": "The fracture stress"
            },
            {
              "key": "b",
              "text": "The proportional limit"
            },
            {
              "key": "c",
              "text": "The ultimate tensile strength"
            },
            {
              "key": "d",
              "text": "The offset yield stress"
            }
          ],
          "answer": "b",
          "explanation": "Hooke's linear law requires stress proportional to strain and therefore ends at the proportional limit. Elasticity means recoverability and can extend into nonlinear response. Choosing limit-state design does not extend the material's proportional range.<p>Source note: Point 68 concerns a constitutive limit, not a special exception introduced by limit-state design.</p><p>Capsule 4th ed., p. 17; topic 4 point 68.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00075",
          "src": "CAP4-04-00075",
          "text": "A plane-stress element has sigma_x = 70 MPa, sigma_y = 10 MPa and tau_xy = 40 MPa. What are its in-plane principal stresses?",
          "options": [
            {
              "key": "a",
              "text": "120 MPa and 20 MPa"
            },
            {
              "key": "b",
              "text": "110 MPa and -30 MPa"
            },
            {
              "key": "c",
              "text": "90 MPa and -10 MPa"
            },
            {
              "key": "d",
              "text": "80 MPa and 0 MPa"
            }
          ],
          "answer": "c",
          "explanation": "The mean is (70 + 10)/2 = 40 MPa and Mohr radius is sqrt(((70 - 10)/2)^2 + 40^2) = 50 MPa. Thus the eigenvalues are 40 +/- 50, or 90 and -10 MPa. Principal directions follow stress transformation; they are not necessarily geometric diagonals.<p>Source note: Restores the principal-stress expression in point 73 and removes its unjustified diagonal-plane restriction.</p><p>Capsule 4th ed., p. 17; topic 4 point 73.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00076",
          "src": "CAP4-04-00076",
          "text": "Two tensile specimens elongate under load. One returns fully to its original length; the other sustains substantial permanent elongation before fracture. Which observation specifically demonstrates ductility?",
          "options": [
            {
              "key": "a",
              "text": "A steep initial stress-strain slope alone"
            },
            {
              "key": "b",
              "text": "The substantial plastic elongation before fracture"
            },
            {
              "key": "c",
              "text": "Any recoverable elongation under a small load"
            },
            {
              "key": "d",
              "text": "A high fracture stress with negligible extension"
            }
          ],
          "answer": "b",
          "explanation": "Ductility is the capacity for appreciable plastic deformation before fracture, commonly measured by percentage elongation or reduction of area. Elastic extension alone occurs in brittle as well as ductile materials and does not establish ductility.<p>Source note: Corrects point 74: elongation by itself is not the definition of ductility.</p><p>Capsule 4th ed., p. 17; topic 4 point 74.</p>",
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
          "kind": "application"
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
          "explanation": "Use G = E/[2(1 + nu)], not E(1 + nu)/2. Substitution gives G = 200/[2 x 1.25] = 80 GPa. This isotropic elastic identity is not a universal relation for anisotropic materials.<p>Capsule 4th ed., p. 18; topic 4 point 79.</p>",
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
          "text": "A tensile test reaches a peak force of 60 kN on a specimen whose original area is 200 mm^2. It later fractures after necking at a smaller force. What is its engineering ultimate tensile strength?",
          "options": [
            {
              "key": "a",
              "text": "300 MPa"
            },
            {
              "key": "b",
              "text": "600 MPa"
            },
            {
              "key": "c",
              "text": "200 MPa"
            },
            {
              "key": "d",
              "text": "120 MPa"
            }
          ],
          "answer": "a",
          "explanation": "Engineering ultimate tensile strength is maximum recorded force divided by original cross-sectional area: 60000/200 = 300 MPa. It is not the fracture load divided by the necked area, which is a different true-stress quantity, and it need not coincide with yield stress.<p>Source note: Point 81 is made precise by identifying engineering tensile stress and original area.</p><p>Capsule 4th ed., p. 18; topic 4 point 81.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00095",
          "src": "CAP4-04-00095",
          "text": "For a conventional ductile mild-steel engineering tensile curve with distinct limits, which progression correctly includes the peak-load stage before rupture?",
          "options": [
            {
              "key": "a",
              "text": "Yield, proportional limit, elastic limit, fracture, ultimate stress"
            },
            {
              "key": "b",
              "text": "Proportional limit, yield, fracture, ultimate stress, elastic limit"
            },
            {
              "key": "c",
              "text": "Elastic limit, proportional limit, ultimate stress, yield, fracture"
            },
            {
              "key": "d",
              "text": "Proportional limit, elastic limit, yield, ultimate stress, fracture"
            }
          ],
          "answer": "d",
          "explanation": "Linear proportional behaviour ends first, followed by the recoverability limit and yielding in this idealized sequence. Strain hardening leads to peak engineering stress, then necking proceeds toward fracture. These stages may not be sharply separated in every material; the source list omitted ultimate stress.<p>Source note: Point 95&#39;s abbreviated sequence is expanded to include ultimate tensile stress and qualified to the conventional ductile-steel curve.</p><p>Capsule 4th ed., p. 18; topic 4 point 95.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00100",
          "src": "CAP4-04-00100",
          "text": "A uniform bar carries 80 kN axial tension over area 800 mm^2 with no other stress components. What is the maximum shear stress over all plane orientations, and where does it act?",
          "options": [
            {
              "key": "a",
              "text": "50 MPa on planes inclined 45 degrees to the transverse section"
            },
            {
              "key": "b",
              "text": "50 MPa on planes parallel to the bar axis"
            },
            {
              "key": "c",
              "text": "25 MPa on planes inclined 45 degrees to the transverse section"
            },
            {
              "key": "d",
              "text": "100 MPa on the transverse section"
            }
          ],
          "answer": "a",
          "explanation": "Axial stress is P/A = 80000/800 = 100 MPa, and the principal stresses are 100, 0 and 0 MPa. The maximum shear magnitude is (100 - 0)/2 = 50 MPa. It acts on planes halfway between the principal orientations, at 45 degrees; principal planes themselves have zero shear.<p>Source note: Points 100 and 114 duplicate the uniaxial maximum-shear rule.</p><p>Capsule 4th ed., pp. 18, 19; topic 4 point 100; topic 4 point 114.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00107",
          "src": "CAP4-04-00107",
          "text": "A solid circular shaft of diameter 100 mm transmits torque 2 kN m in elastic Saint-Venant torsion. What is the maximum torsional shear stress and its radial location?",
          "options": [
            {
              "key": "a",
              "text": "20.37 MPa halfway to the surface"
            },
            {
              "key": "b",
              "text": "10.19 MPa at the outer surface"
            },
            {
              "key": "c",
              "text": "5.09 MPa at the outer surface"
            },
            {
              "key": "d",
              "text": "10.19 MPa at the longitudinal axis"
            }
          ],
          "answer": "b",
          "explanation": "For a solid circle, J = pi D^4/32 and tau = Tr/J grows linearly with radius. At r = D/2, tau_max = 16T/(pi D^3) = 16 x 2 x 10^6/(pi x 100^3) = 10.19 MPa. The axis has zero torsional shear, not the maximum.<p>Capsule 4th ed., p. 19; topic 4 point 107.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00142",
          "src": "CAP4-05-00142",
          "text": "For a homogeneous isotropic linear-elastic material, Young's modulus is 150 GPa and bulk modulus is 100 GPa. What Poisson's ratio follows?",
          "options": [
            {
              "key": "a",
              "text": "0.125"
            },
            {
              "key": "b",
              "text": "0.25"
            },
            {
              "key": "c",
              "text": "0.333"
            },
            {
              "key": "d",
              "text": "0.375"
            }
          ],
          "answer": "b",
          "explanation": "The bulk-modulus relation is E = 3K(1 - 2nu). Rearranging gives nu = (3K - E)/(6K), so nu = (300 - 150)/600 = 0.25. The expression involving 2K and a plus one in the source is incorrect; E = 2G(1 + nu) instead involves shear modulus G.<p>Source note: Page 23 point 143 has a false bulk-modulus formula, with the numerator E also split across extraction boundaries. Corrected independently from isotropic elasticity.</p><p>Capsule 4th ed., p. 23; topic 5 point 143.</p>",
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
          "kind": "calculation"
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
          "text": "Two beams have identical material modulus, span, supports and loading. If the second has twice the relevant second moment of area, how does its elastic bending deflection compare?",
          "options": [
            {
              "key": "a",
              "text": "It is half as large"
            },
            {
              "key": "b",
              "text": "It is twice as large"
            },
            {
              "key": "c",
              "text": "It is unchanged"
            },
            {
              "key": "d",
              "text": "It is four times as large"
            }
          ],
          "answer": "a",
          "explanation": "Elastic flexural stiffness is EI, not I alone. For this otherwise identical linear-elastic system, deflection varies inversely with EI, so doubling I halves deflection.<p>Source note: p6 n147: clarified that area inertia is the geometric factor in bending stiffness; material modulus and the bending axis also matter.</p><p>Capsule 4th ed., p. 6; topic 1 point 147.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00003",
          "src": "CAP4-04-00003",
          "text": "At a section of a homogeneous rectangular beam carrying nonzero shear V and bending moment M, where are the zero longitudinal bending stress and maximum transverse shear stress located in elementary elastic theory?",
          "options": [
            {
              "key": "a",
              "text": "Both at the extreme tension fibre"
            },
            {
              "key": "b",
              "text": "Both at the centroidal neutral axis"
            },
            {
              "key": "c",
              "text": "Neutral axis and extreme compression fibre, respectively"
            },
            {
              "key": "d",
              "text": "Extreme compression fibre and neutral axis, respectively"
            }
          ],
          "answer": "b",
          "explanation": "Longitudinal bending-stress magnitude is |My|/I and vanishes at the centroidal neutral axis y = 0. For a solid rectangle the transverse shear distribution is parabolic and peaks there. This maximum-shear statement is section-dependent, not a consequence of simply supported end conditions.<p>Source note: Point 3 needs a cross-section assumption and nonzero shear; pure bending has no transverse shear.</p><p>Capsule 4th ed., p. 15; topic 4 point 3.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00007",
          "src": "CAP4-04-00007",
          "text": "A prismatic simply supported beam has L = 4 m and EI = 8000 kN m^2. A 12 kN load acts at midspan. Neglecting shear deformation, what is the maximum downward deflection?",
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
          "explanation": "For a central point load, delta = PL^3/(48EI). Substitution gives 12 x 4^3/(48 x 8000) = 0.002 m = 2.00 mm. The denominator 192 would apply to a fixed-fixed beam, not this pin-roller beam.<p>Capsule 4th ed., p. 15; topic 4 point 7.</p>",
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
          "text": "A solid rectangular beam section 100 mm wide and 200 mm deep carries shear V = 40 kN. What is its maximum elastic transverse shear stress?",
          "options": [
            {
              "key": "a",
              "text": "3.0 MPa"
            },
            {
              "key": "b",
              "text": "2.0 MPa"
            },
            {
              "key": "c",
              "text": "6.0 MPa"
            },
            {
              "key": "d",
              "text": "1.5 MPa"
            }
          ],
          "answer": "a",
          "explanation": "Area is 100 x 200 = 20000 mm^2, so average shear is 40000/20000 = 2 MPa. The parabolic rectangular-section distribution has peak 1.5 times its average, giving 3 MPa at the neutral axis.<p>Capsule 4th ed., p. 15; topic 4 point 20.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00023",
          "src": "CAP4-04-00023",
          "text": "An engineer uses millimetres and newtons in the bending formula sigma = M/Z. Which units correctly distinguish elastic section modulus Z from Young's modulus E?",
          "options": [
            {
              "key": "a",
              "text": "Z: mm^3; E: N/mm^2"
            },
            {
              "key": "b",
              "text": "Z: mm^4; E: N/mm^2"
            },
            {
              "key": "c",
              "text": "Z: N/mm^2; E: mm^3"
            },
            {
              "key": "d",
              "text": "Z: mm^3; E: N mm^2"
            }
          ],
          "answer": "a",
          "explanation": "Elastic section modulus is Z = I/c, where c is the distance from the neutral axis to the extreme fibre on the side being checked; asymmetric sections can have different values on opposite sides. Length^4 divided by length gives length^3. Young's modulus is stress divided by dimensionless strain, so it has stress units.<p>Capsule 4th ed., p. 15; topic 4 point 22.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00024",
          "src": "CAP4-04-00024",
          "text": "A homogeneous beam remains within its linear-elastic range in pure bending, with plane sections remaining plane. How does longitudinal normal stress vary through the depth?",
          "options": [
            {
              "key": "a",
              "text": "Parabolically with distance from the neutral axis"
            },
            {
              "key": "b",
              "text": "Linearly with distance from the neutral axis"
            },
            {
              "key": "c",
              "text": "As two constant blocks separated by the neutral axis"
            },
            {
              "key": "d",
              "text": "Uniformly with one sign over the entire depth"
            }
          ],
          "answer": "b",
          "explanation": "For sagging-positive M and y measured upward, plane sections give epsilon_x = -y/R and tensile-positive sigma_x = E epsilon_x = -My/I. Stress therefore varies linearly, with compression above and tension below the neutral axis. Fully plastic stress blocks require yielding and are not this elastic distribution.<p>Source note: Point 23 requires linear elasticity; pure bending alone does not exclude plasticity.</p><p>Capsule 4th ed., p. 15; topic 4 point 23.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00027",
          "src": "CAP4-04-00027",
          "text": "An ideal straight prismatic column of actual length L is fixed against rotation and lateral displacement at both ends. What effective length enters its lowest Euler buckling load?",
          "options": [
            {
              "key": "a",
              "text": "L/2"
            },
            {
              "key": "b",
              "text": "L/sqrt(2)"
            },
            {
              "key": "c",
              "text": "L"
            },
            {
              "key": "d",
              "text": "2L"
            }
          ],
          "answer": "a",
          "explanation": "The lowest fixed-fixed buckling mode has an equivalent pin-ended length L/2. Substitution in Pcr = pi^2 EI/Le^2 gives 4pi^2 EI/L^2. Actual frame restraint and sway may produce a different effective-length factor.<p>Source note: Restores L/2 from the damaged L2 extraction.</p><p>Capsule 4th ed., pp. 16, 18; topic 4 point 26; topic 4 point 82.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00028",
          "src": "CAP4-04-00028",
          "text": "Two simply supported beams have the same L and EI. Beam A carries a central point load W; beam B carries total load W spread uniformly. What is delta_A/delta_B, neglecting shear deformation?",
          "options": [
            {
              "key": "a",
              "text": "4/5"
            },
            {
              "key": "b",
              "text": "5/8"
            },
            {
              "key": "c",
              "text": "2/1"
            },
            {
              "key": "d",
              "text": "8/5"
            }
          ],
          "answer": "d",
          "explanation": "For the point load, delta_A = WL^3/(48EI); for total uniform load W, delta_B = 5WL^3/(384EI). Cancelling the shared factors gives 384/(48 x 5) = 8/5. Equal total force does not mean equal deflection.<p>Capsule 4th ed., p. 16; topic 4 point 27.</p>",
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
          "text": "The width b of a rectangular simply supported beam is doubled while depth, span, E and central point load stay unchanged. What happens to its elastic midspan deflection?",
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
          "explanation": "For bending about the horizontal centroidal axis, I = bd^3/12. Doubling width doubles I, and delta = PL^3/(48EI) is inversely proportional to I. The factor one-eighth would follow from doubling depth, not width.<p>Capsule 4th ed., p. 16; topic 4 point 28.</p>",
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
          "text": "A prismatic cantilever has length 3 m and EI = 9000 kN m^2. With a 9 kN downward tip force, what tip deflection does Euler-Bernoulli theory predict?",
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
          "explanation": "A cantilever with a tip force has delta = PL^3/(3EI). Thus delta = 9 x 27/(3 x 9000) = 0.009 m = 9 mm downward. The simple-beam central-load denominator 48 does not apply to this support arrangement.<p>Capsule 4th ed., p. 16; topic 4 point 29.</p>",
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
          "text": "A fixed-fixed prismatic beam of span 4 m and EI = 8000 kN m^2 carries a total downward uniform load W = 24 kN. What is its central deflection, neglecting shear deformation?",
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
          "explanation": "W is total load, so w = W/L = 6 kN/m. For fixed ends, delta = wL^4/(384EI) = WL^3/(384EI) = 0.0005 m. The factor 5 belongs to a simply supported beam under uniform load.<p>Capsule 4th ed., p. 16; topic 4 point 30.</p>",
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
          "text": "An ideal column fixed at its base and completely free at its top has actual length L. Relative to a pin-ended column with the same L and EI, what are its effective length and Euler load?",
          "options": [
            {
              "key": "a",
              "text": "2L and one-quarter of the pin-ended load"
            },
            {
              "key": "b",
              "text": "sqrt(2)L and one-half of the pin-ended load"
            },
            {
              "key": "c",
              "text": "L/2 and four times the pin-ended load"
            },
            {
              "key": "d",
              "text": "L and the same pin-ended load"
            }
          ],
          "answer": "a",
          "explanation": "A fixed-free column has effective-length factor K = 2. Since Pcr varies as 1/(KL)^2, its Euler load is one-quarter of pi^2 EI/L^2. This assumes a conservative axial force and the specified ideal restraints.<p>Capsule 4th ed., p. 16; topic 4 point 32.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00051",
          "src": "CAP4-04-00051",
          "text": "At a fixed end of a real beam, both slope and deflection are zero. Which end condition must the conjugate beam have so that its shear and moment reproduce those two zeros?",
          "options": [
            {
              "key": "a",
              "text": "A fixed end"
            },
            {
              "key": "b",
              "text": "A rotation-restrained sliding end"
            },
            {
              "key": "c",
              "text": "A free end"
            },
            {
              "key": "d",
              "text": "A simple support"
            }
          ],
          "answer": "c",
          "explanation": "Conjugate-beam shear corresponds to real-beam slope, and conjugate-beam moment to real-beam deflection. A free end has both shear and moment zero, matching the real fixed-end conditions. Conversely, a real free end generally maps to a conjugate fixed end.<p>Capsule 4th ed., p. 17; topic 4 point 49.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00058",
          "src": "CAP4-04-00058",
          "text": "A fixed-fixed beam has span 4 m, constant EI = 8000 kN m^2 and a 12 kN downward central point load. Neglecting shear deformation, what is the central deflection?",
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
          "explanation": "For immovable fixed ends, delta = PL^3/(192EI) = 12 x 64/(192 x 8000) = 0.0005 m = 0.50 mm. Fixing both rotations reduces this central-point-load deflection to one-quarter of the corresponding simply supported value.<p>Capsule 4th ed., p. 17; topic 4 point 57.</p>",
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
          "text": "A homogeneous elastic beam has I = 80 x 10^6 mm^4 and bending moment 40 kN m. What is the bending-stress magnitude at a fibre 100 mm from the neutral axis?",
          "options": [
            {
              "key": "a",
              "text": "5 MPa"
            },
            {
              "key": "b",
              "text": "100 MPa"
            },
            {
              "key": "c",
              "text": "500 MPa"
            },
            {
              "key": "d",
              "text": "50 MPa"
            }
          ],
          "answer": "d",
          "explanation": "The flexure relation M/I = sigma/y gives sigma = My/I. Convert 40 kN m to 40 x 10^6 N mm, then sigma = (40 x 10^6)(100)/(80 x 10^6) = 50 N/mm^2. Fibre side and moment sign determine whether it is tension or compression.<p>Capsule 4th ed., p. 17; topic 4 point 65.</p>",
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
          "id": "CAP4-04-00066",
          "src": "CAP4-04-00066",
          "text": "A beam segment in small-strain pure bending has constant EI = 10000 kN m^2 and moment magnitude 50 kN m. What is its curvature radius?",
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
          "explanation": "The other part of the flexure relation is M/I = E/R, so curvature 1/R = M/(EI) = 50/10000 = 0.005 per metre. Its reciprocal gives R = 200 m. Curvature and radius are reciprocal quantities, not interchangeable numerical answers.<p>Capsule 4th ed., p. 17; topic 4 point 65.</p>",
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
          "text": "For an ideal nonsway fixed-pinned Euler column, the first nonzero root of tan(alpha) = alpha is 4.49341. Relative to the pinned-pinned load pi^2 EI/L^2, what is its exact-model buckling-load factor to three decimals?",
          "options": [
            {
              "key": "a",
              "text": "4.000"
            },
            {
              "key": "b",
              "text": "2.046"
            },
            {
              "key": "c",
              "text": "0.699"
            },
            {
              "key": "d",
              "text": "2.000"
            }
          ],
          "answer": "b",
          "explanation": "The fixed-pinned eigenvalue gives Pcr = alpha^2 EI/L^2. Dividing by pi^2 EI/L^2 yields (4.49341/pi)^2 = 2.046, and K = pi/alpha = 0.699. The commonly quoted 2pi^2 EI/L^2 corresponds to the approximate K = 1/sqrt(2), not the exact eigenvalue.<p>Source note: Point 72 states the conventional approximation as an equality; this question distinguishes exact from approximate ideal-column results.</p><p>Capsule 4th ed., p. 17; topic 4 point 72.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00119",
          "src": "CAP4-04-00119",
          "text": "An ideal straight pin-ended column has length 5 m and EI = 2000 kN m^2 about its weakest buckling axis. What is its lowest Euler critical load?",
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
          "explanation": "Both hinges give effective length L, so Pcr = pi^2 EI/L^2 = pi^2 x 2000/25 = 789.6 kN. The fixed-free value would be one-quarter as large and the fixed-fixed value four times as large. Euler assumes a slender elastic column with ideal loading and restraints.<p>Capsule 4th ed., p. 19; topic 4 point 120.</p>",
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
          "text": "A simply supported beam has span 4 m, constant EI = 8000 kN m^2 and total load W = 24 kN uniformly distributed over the span. What is its maximum elastic deflection, neglecting shear deformation?",
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
          "explanation": "Because W is total force, w = W/L = 6 kN/m. The simple-beam UDL result is delta_max = 5wL^4/(384EI) = 5WL^3/(384EI). Substitution gives 5 x 24 x 64/(384 x 8000) = 0.0025 m = 2.50 mm at midspan; 0.50 mm is the fixed-fixed result.<p>Capsule 4th ed., p. 19; topic 4 point 122.</p>",
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
          "text": "In homogeneous linear-elastic pure bending without axial force, what is the longitudinal bending stress on the neutral axis?",
          "options": [
            {
              "key": "a",
              "text": "The maximum tensile stress"
            },
            {
              "key": "b",
              "text": "Zero"
            },
            {
              "key": "c",
              "text": "The section-average shear stress"
            },
            {
              "key": "d",
              "text": "The maximum compressive stress"
            }
          ],
          "answer": "b",
          "explanation": "Elastic bending stress varies as My/I, so it vanishes where the distance y from the neutral axis is zero. This concerns longitudinal bending stress; shear stress need not vanish there under a different loading case with transverse shear.<p>Capsule 4th ed., p. 20; topic 5 point 50.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-05-00063",
          "src": "CAP4-05-00063",
          "text": "The classical Euler crippling load of a slender straight column corresponds to instability under which type of applied action?",
          "options": [
            {
              "key": "a",
              "text": "Axial compression"
            },
            {
              "key": "b",
              "text": "Axial tension"
            },
            {
              "key": "c",
              "text": "Pure torsion"
            },
            {
              "key": "d",
              "text": "Transverse shear without axial force"
            }
          ],
          "answer": "a",
          "explanation": "Euler buckling is loss of lateral stability under axial compression. The critical load depends on flexural stiffness and effective length; it is different from tensile rupture or local bearing failure, despite other uses of the word crippling.<p>Capsule 4th ed., p. 21; topic 5 point 61.</p>",
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
          "text": "A column has equal effective lengths of 3000 mm about both principal axes and radii of gyration of 50 mm and 30 mm. What is its governing geometric slenderness Le/r?",
          "options": [
            {
              "key": "a",
              "text": "100"
            },
            {
              "key": "b",
              "text": "160"
            },
            {
              "key": "c",
              "text": "37.5"
            },
            {
              "key": "d",
              "text": "60"
            }
          ],
          "answer": "a",
          "explanation": "The axis ratios are 3000/50 = 60 and 3000/30 = 100, so the larger value 100 governs this geometric comparison. Each axis generally requires its own effective length; using the smaller radius blindly is valid here because the effective lengths are equal.<p>Capsule 4th ed., p. 22; topic 5 point 117.</p>",
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
          "kind": "calculation"
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
          "text": "In the virtual-displacement form of the principle of virtual work, which pairing is used to test equilibrium?",
          "options": [
            {
              "key": "a",
              "text": "Actual forces with arbitrary finite displacements"
            },
            {
              "key": "b",
              "text": "Actual forces with admissible virtual displacements"
            },
            {
              "key": "c",
              "text": "Virtual forces with unrelated virtual displacements"
            },
            {
              "key": "d",
              "text": "Only support reactions with actual permanent settlements"
            }
          ],
          "answer": "b",
          "explanation": "A virtual displacement is infinitesimal and kinematically admissible, respecting the displacement constraints. Actual forces perform virtual work through it. For a deformable body in equilibrium, external virtual work equals internal virtual work; virtual-force methods are a dual formulation.<p>Capsule 4th ed., p. 16; topic 4 point 24.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00032",
          "src": "CAP4-04-00032",
          "text": "A simply supported elastic beam has span 4 m and EI = 8000 kN m^2. A central force grows quasistatically from zero to 12 kN. What bending strain energy is stored at the final load?",
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
          "explanation": "The final central deflection is PL^3/(48EI) = 0.002 m. For a linear system under gradual loading, U = P delta/2 = 0.012 kN m = 12 J. Equivalently U = P^2 L^3/(96EI); the load must be squared.<p>Capsule 4th ed., p. 16; topic 4 point 31.</p>",
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
          "text": "A spring can store at most 18 J and return completely to its original shape after unloading. What is the name for this limiting recoverable energy of the whole spring?",
          "options": [
            {
              "key": "a",
              "text": "Modulus of toughness"
            },
            {
              "key": "b",
              "text": "Proof resilience"
            },
            {
              "key": "c",
              "text": "Ultimate tensile strength"
            },
            {
              "key": "d",
              "text": "Modulus of resilience"
            }
          ],
          "answer": "b",
          "explanation": "Proof resilience is the maximum strain energy stored without permanent deformation. It is a total energy, measured here in joules. Dividing it by material volume gives modulus of resilience; toughness instead concerns energy absorption extending toward fracture.<p>Capsule 4th ed., p. 17; topic 4 point 59.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00061",
          "src": "CAP4-04-00061",
          "text": "A bar remains uniformly linear elastic up to 200 MPa, with E = 200 GPa and volume 100000 mm^3. What is its proof resilience in this idealization?",
          "options": [
            {
              "key": "a",
              "text": "20 J"
            },
            {
              "key": "b",
              "text": "10 J"
            },
            {
              "key": "c",
              "text": "0.10 J"
            },
            {
              "key": "d",
              "text": "100 J"
            }
          ],
          "answer": "b",
          "explanation": "Limiting energy density is sigma_e^2/(2E) = 200^2/(2 x 200000) = 0.10 N/mm^2. Multiplying by 100000 mm^3 gives 10000 N mm = 10 J. The value 0.10 is energy per volume, not the whole bar's stored energy.<p>Capsule 4th ed., p. 17; topic 4 point 59.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00068",
          "src": "CAP4-04-00068",
          "text": "Two disjoint internally determinate planar subtrusses have 7 and 9 members. Three bars independently restrain their relative rigid-body motions without adding joints. With suitable external supports, how many members does the resulting compound truss have?",
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
              "text": "22"
            },
            {
              "key": "d",
              "text": "16"
            }
          ],
          "answer": "b",
          "explanation": "The three independent connectors restrain two relative translations and one relative rotation. Therefore m = m1 + m2 + 3 = 7 + 9 + 3 = 19. This count assumes the stated disjoint construction and independent geometry, not arbitrary joining of two trusses.<p>Capsule 4th ed., p. 17; topic 4 point 67.</p>",
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
          "id": "CAP4-04-00069",
          "src": "CAP4-04-00069",
          "text": "Two rigid planar subtrusses are connected only by three mutually parallel pin-ended bars. Why is their member count alone insufficient to prove stability?",
          "options": [
            {
              "key": "a",
              "text": "Internal determinacy automatically fixes relative rotation"
            },
            {
              "key": "b",
              "text": "The connectors can leave a relative transverse mechanism"
            },
            {
              "key": "c",
              "text": "Pin-ended connectors cannot transmit any axial force"
            },
            {
              "key": "d",
              "text": "Three bars always supply four independent constraints"
            }
          ],
          "answer": "b",
          "explanation": "Each connector supplies an axial constraint along its own direction. Three parallel directions do not independently restrain both translations and rotation of one subtruss relative to the other; a transverse first-order motion can remain. Stability requires independent geometry, not just three extra members.<p>Capsule 4th ed., p. 17; topic 4 point 67.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00089",
          "src": "CAP4-04-00089",
          "text": "A planar beam is fixed at A and has a vertical roller prop at B, with no internal releases. How many independent redundants remain after applying the three whole-beam equilibrium equations?",
          "options": [
            {
              "key": "a",
              "text": "Zero"
            },
            {
              "key": "b",
              "text": "Three"
            },
            {
              "key": "c",
              "text": "Two"
            },
            {
              "key": "d",
              "text": "One"
            }
          ],
          "answer": "d",
          "explanation": "The fixed end contributes horizontal reaction, vertical reaction and a couple; the prop adds one vertical reaction. Four reaction unknowns minus three independent equilibrium equations leave one redundant. A compatibility condition, such as zero vertical displacement at the prop, determines it.<p>Capsule 4th ed., p. 18; topic 4 point 89.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00102",
          "src": "CAP4-04-00102",
          "text": "An initially unstressed linear-elastic structure has strain energy U(P) = 0.002P^2 kN m, with force P in kN. What displacement conjugate to P follows at P = 5 kN from the energy derivative?",
          "options": [
            {
              "key": "a",
              "text": "5 mm"
            },
            {
              "key": "b",
              "text": "10 mm"
            },
            {
              "key": "c",
              "text": "20 mm"
            },
            {
              "key": "d",
              "text": "50 mm"
            }
          ],
          "answer": "c",
          "explanation": "For the stated conservative linear-elastic system, delta = dU/dP = 0.004P m. At P = 5 kN this gives 0.020 m = 20 mm. Dividing U by P would miss the factor two. In nonlinear elasticity, load derivatives generally require complementary energy instead.<p>Source note: Point 102&#39;s first-theorem numbering varies across texts. The question identifies the actual derivative and assumptions, following chapter-04-determinate.js, castigliano-energy-derivative-formulas.</p><p>Capsule 4th ed., p. 18; topic 4 point 102.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00103",
          "src": "CAP4-04-00103",
          "text": "A stable planar pin-jointed truss has seven joints and three independent restrained translational coordinates. Before solving its elastic displacement equations, how many free nodal displacement coordinates remain?",
          "options": [
            {
              "key": "a",
              "text": "7"
            },
            {
              "key": "b",
              "text": "14"
            },
            {
              "key": "c",
              "text": "18"
            },
            {
              "key": "d",
              "text": "11"
            }
          ],
          "answer": "d",
          "explanation": "Each ideal plane-truss joint has two translations and no rotational coordinate in the axial-only model. Thus the free displacement count is 2j - r = 14 - 3 = 11. The shortcut 2j - 3 assumes exactly three independent support restraints; other support arrangements change it.<p>Source note: Point 104&#39;s 2j - 3 is not universal; independent support restraints and the truss idealization are explicit.</p><p>Capsule 4th ed., p. 18; topic 4 point 104.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00114",
          "src": "CAP4-04-00114",
          "text": "A connected rigid-jointed plane frame without internal moment releases satisfies 3m + r = 3j, but its geometry has not been checked. What can be concluded from this equality alone?",
          "options": [
            {
              "key": "a",
              "text": "It must contain exactly three redundant support reactions"
            },
            {
              "key": "b",
              "text": "It is necessarily a mechanism with no resisting stiffness"
            },
            {
              "key": "c",
              "text": "It is necessarily stable and statically determinate"
            },
            {
              "key": "d",
              "text": "Its determinacy count is zero, but stability still needs verification"
            }
          ],
          "answer": "d",
          "explanation": "For this model the counting difference is Dc = 3m + r - 3j. Zero is a necessary count for an ordinary stable determinate frame, but dependent constraints can allow a mechanism and a self-stress state to coexist. The equilibrium matrix must have the required rank; counting alone cannot prove stability.<p>Source note: Corrects point 113&#39;s implication that the equality alone proves both stability and determinacy; no internal releases are assumed.</p><p>Capsule 4th ed., p. 19; topic 4 point 113.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00117",
          "src": "CAP4-04-00117",
          "text": "An initially unstressed undamped linear spring-mass system of stiffness 100 kN/m receives a suddenly applied maintained force of 2 kN with zero drop height. What peak strain energy is stored, assuming the response stays elastic?",
          "options": [
            {
              "key": "a",
              "text": "40 J"
            },
            {
              "key": "b",
              "text": "20 J"
            },
            {
              "key": "c",
              "text": "160 J"
            },
            {
              "key": "d",
              "text": "80 J"
            }
          ],
          "answer": "d",
          "explanation": "Static displacement is W/k = 0.02 m. At the first peak, W delta = k delta^2/2 gives delta = 2W/k = 0.04 m. Thus Umax = k delta^2/2 = 0.08 kN m = 80 J, four times the gradual-load energy of 20 J. Damping, finite rise time or yielding changes this ideal factor.<p>Source note: Point 118&#39;s factor four refers to the peak in an undamped linear zero-drop sudden-load model, not the final settled energy in every structure.</p><p>Capsule 4th ed., p. 19; topic 4 point 118.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00097",
          "src": "CAP4-05-00097",
          "text": "An undamped linear-elastic spring receives the same force P either gradually or as a suddenly applied constant step, without drop height. What is the ratio of maximum stored strain energies, sudden to gradual?",
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
          "explanation": "Gradual loading gives displacement P/k and energy P squared/(2k). For a sudden step, energy balance gives maximum displacement 2P/k, so maximum stored energy is four times the gradual value. This is the transient peak, not a damped final equilibrium comparison.<p>Capsule 4th ed., p. 22; topic 5 point 96.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00127",
          "src": "CAP4-05-00127",
          "text": "A uniformly stressed bar of volume 1.00 x 10<sup>6</sup> mm<sup>3</sup> is linear-elastic up to 250 MPa and has E = 200000 MPa. What is its proof resilience, defined as maximum recoverable elastic strain energy?",
          "options": [
            {
              "key": "a",
              "text": "156250 J"
            },
            {
              "key": "b",
              "text": "156.25 J"
            },
            {
              "key": "c",
              "text": "0.15625 J"
            },
            {
              "key": "d",
              "text": "1250 J"
            }
          ],
          "answer": "b",
          "explanation": "Elastic energy density is stress squared/(2E) = 250 squared/(2 x 200000) = 0.15625 N/mm<sup>2</sup>. Multiplying by volume gives 156250 N mm = 156.25 J. Proof resilience is energy; energy per volume is modulus of resilience, and neither is a load.<p>Source note: Page 23 point 126 incorrectly defines proof resilience as maximum load. The corrected quantity and its distinction from modulus of resilience are explicit.</p><p>Capsule 4th ed., p. 23; topic 5 point 126.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-05-00135",
          "src": "CAP4-05-00135",
          "text": "An ideal three-hinged arch undergoes a uniform temperature rise, with hinges free to accommodate the associated small geometric movement. In first-order analysis, what additional internal stress is generated solely by that temperature change?",
          "options": [
            {
              "key": "a",
              "text": "A compulsory uniform compressive stress of E alpha delta-T"
            },
            {
              "key": "b",
              "text": "No additional thermal stress"
            },
            {
              "key": "c",
              "text": "A compulsory bending stress identical to a fixed arch"
            },
            {
              "key": "d",
              "text": "A compulsory uniform tensile stress of E alpha delta-T"
            }
          ],
          "answer": "b",
          "explanation": "The statically determinate three-hinged arrangement can accommodate uniform thermal expansion through hinge rotation and geometric change without restraint stress in the ideal model. Existing load stresses remain; restrained hinges, temperature gradients or significant geometry changes require separate consideration.<p>Source note: Page 23 point 136 is limited to added uniform-temperature effects in the ideal freely accommodating model, not absence of all stress in a loaded arch.</p><p>Capsule 4th ed., p. 23; topic 5 point 136.</p>",
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
          "kind": "application"
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
          "text": "A weightless three-hinged arch has horizontal span L and a crown hinge at its horizontal midpoint. Its only load is a downward force W at the crown, which is h1 above the left springing and h2 above the right springing, both rises positive. What inward horizontal thrust H follows from zero moment at the crown?",
          "options": [
            {
              "key": "a",
              "text": "WL/[2(h1-h2)]"
            },
            {
              "key": "b",
              "text": "2W(h1+h2)/L"
            },
            {
              "key": "c",
              "text": "WL/[2(h1+h2)]"
            },
            {
              "key": "d",
              "text": "WL/(h1+h2)"
            }
          ],
          "answer": "c",
          "explanation": "Taking moments of each half about the crown gives V_A(L/2) = Hh1 and V_B(L/2) = Hh2. Adding V_A + V_B = W yields 2H(h1+h2)/L = W, so H = WL/[2(h1+h2)]. Squaring a height sum in this denominator would give incorrect force-per-length units.<p>Source note: Page 16 point 33 denominator cannot be reliably decoded from text. This is an independent equilibrium reconstruction with explicitly defined crown rises, not a claim to have verified the printed typography.</p><p>Capsule 4th ed., p. 16; topic 4 point 33.</p>",
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
          "text": "A uniformly distributed moving load is longer than the span of a simply supported girder. Which placement gives the absolute maximum bending moment on the girder?",
          "options": [
            {
              "key": "a",
              "text": "The leading edge is exactly at midspan"
            },
            {
              "key": "b",
              "text": "The trailing edge is exactly at midspan"
            },
            {
              "key": "c",
              "text": "Only the left half of the span is covered"
            },
            {
              "key": "d",
              "text": "The load covers the entire span"
            }
          ],
          "answer": "d",
          "explanation": "For a simple span, the moment influence line is positive over the whole span and reaches its largest value at midspan. When the moving UDL is longer than the span, full-span coverage captures the entire positive influence-line area and therefore maximizes the absolute bending moment.<p>Capsule 4th ed., pp. 16, 18; topic 4 point 34; topic 4 point 92.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00036",
          "src": "CAP4-04-00036",
          "text": "For bending moment at a chosen section of a cantilever, what is the qualitative influence line due to a unit moving load?",
          "options": [
            {
              "key": "a",
              "text": "Zero on the fixed-side interval; constant on the free-side interval"
            },
            {
              "key": "b",
              "text": "Linear on the fixed-side interval; zero on the free-side interval"
            },
            {
              "key": "c",
              "text": "Zero on the fixed-side interval; linear on the free-side interval"
            },
            {
              "key": "d",
              "text": "Linear on both intervals, with a peak at the chosen section"
            }
          ],
          "answer": "c",
          "explanation": "A unit load contributes section moment only when it lies between the section and the free end. Its lever arm then changes linearly, so the ordinate's magnitude grows from zero at the section to a maximum at the free end. For a downward load and sagging-positive moment these ordinates are negative. The rectangular shape belongs to shear, not moment.<p>Source note: Point 35 is correctly a bending-moment ILD statement; the rectangle applies to cantilever shear ILD instead.</p><p>Capsule 4th ed., p. 16; topic 4 point 35.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00037",
          "src": "CAP4-04-00037",
          "text": "For a symmetric three-hinged parabolic arch of horizontal span L with level supports and a midspan crown hinge carrying only a rolling downward point load, where does the positive bending-moment envelope attain its peak relative to the crown?",
          "options": [
            {
              "key": "a",
              "text": "Exactly at the crown hinge"
            },
            {
              "key": "b",
              "text": "At a distance L/4 on either side of the crown"
            },
            {
              "key": "c",
              "text": "At the springings"
            },
            {
              "key": "d",
              "text": "At a distance L/(2sqrt(3)) on either side of the crown"
            }
          ],
          "answer": "d",
          "explanation": "Place P at the section s on the left half. Crown equilibrium gives H = Ps/(2h), so M = Ps(L-s)(L-2s)/L^2. With t = s/L, maximizing t - 3t^2 + 2t^3 gives 1 - 6t + 6t^2 = 0. Hence s = L/2 - L/(2sqrt(3)); reflection gives the other peak. This is an envelope result, not a rule for any fixed point load.<p>Source note: Point 36 omits the rolling point-load and parabolic-arch conditions needed for the L/(2sqrt(3)) result.</p><p>Capsule 4th ed., p. 16; topic 4 point 36.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00038",
          "src": "CAP4-04-00038",
          "text": "A stable planar arch has a pin at each springing and no internal hinge. With four reaction components but only three global equilibrium equations, what additional relation determines its horizontal thrust?",
          "options": [
            {
              "key": "a",
              "text": "Zero moment at an assumed crown hinge"
            },
            {
              "key": "b",
              "text": "Zero vertical reaction at the higher springing"
            },
            {
              "key": "c",
              "text": "Compatibility of the restrained horizontal span"
            },
            {
              "key": "d",
              "text": "Equality of the two vertical reactions for every load"
            }
          ],
          "answer": "c",
          "explanation": "A two-hinged arch is statically indeterminate to degree one. Equilibrium leaves one redundant force, commonly horizontal thrust. The support-spacing compatibility condition supplies the missing equation; a crown hinge must not be invented.<p>Capsule 4th ed., p. 16; topic 4 point 38.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00041",
          "src": "CAP4-04-00041",
          "text": "At an arch section, the corresponding simple-beam moment is M0 and the arch ordinate is y above the support chord. With horizontal thrust H, which condition eliminates bending at that section?",
          "options": [
            {
              "key": "a",
              "text": "The thrust-line ordinate M0/H equals y"
            },
            {
              "key": "b",
              "text": "The section lies on the straight line joining the hinges"
            },
            {
              "key": "c",
              "text": "The thrust line is parallel to, but offset from, the rib axis"
            },
            {
              "key": "d",
              "text": "The horizontal thrust equals the vertical reaction"
            }
          ],
          "answer": "a",
          "explanation": "The arch moment is M = M0 - Hy = H(y_thrust - y). It vanishes when the thrust line passes through the section's axis. Mere parallelism leaves a moment arm. The straight chord joining the hinges is not generally the curved rib axis.<p>Source note: Corrects point 53&#39;s ambiguous hinge-axis wording; points 39 and 53 duplicate the coincident-thrust-line condition.</p><p>Capsule 4th ed., pp. 16, 17; topic 4 point 39; topic 4 point 53.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00046",
          "src": "CAP4-04-00046",
          "text": "A two-hinged semicircular arch of radius 6 m and constant EI carries 3 kN/m over its left half, measured horizontally. With immovable supports and bending deformation only, what horizontal thrust develops?",
          "options": [
            {
              "key": "a",
              "text": "5.73 kN"
            },
            {
              "key": "b",
              "text": "7.64 kN"
            },
            {
              "key": "c",
              "text": "9.00 kN"
            },
            {
              "key": "d",
              "text": "3.82 kN"
            }
          ],
          "answer": "d",
          "explanation": "For the full horizontal UDL, compatibility gives H = 4wR/(3pi). Symmetry and superposition make one-half loading give half this thrust: H = 2wR/(3pi) = 36/(3pi) = 3.82 kN. UDL per metre of curved rib and finite axial flexibility are different models.<p>Source note: Point 44 requires constant EI, fixed span and neglect of axial/shear deformation; see chapter-04-determinate.js, two-hinged-compatibility-and-semicircle-thrust.</p><p>Capsule 4th ed., p. 16; topic 4 point 44.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00047",
          "src": "CAP4-04-00047",
          "text": "Three two-hinged semicircular arches have radii 5 m, 7.5 m and 10 m. Each has uniform EI and carries the same crown force P. With fixed support spacing and bending-only compatibility, how do their horizontal thrusts compare?",
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
          "explanation": "The compatibility numerator for crown loading is PR^3/2 and the denominator is pi R^3/2, so H = P/pi. Radius cancels, giving equal thrusts. This independence does not extend to arbitrary nonuniform stiffness, axial shortening, temperature change or support movement.<p>Capsule 4th ed., p. 16; topic 4 point 45.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00052",
          "src": "CAP4-04-00052",
          "text": "A three-hinged arch has level springings, span 24 m and a midspan crown hinge 6 m above them. What is the peak horizontal-thrust influence-line ordinate for a unit downward moving force?",
          "options": [
            {
              "key": "a",
              "text": "4.00, at quarter span"
            },
            {
              "key": "b",
              "text": "0.25, at the crown"
            },
            {
              "key": "c",
              "text": "1.00, at the crown"
            },
            {
              "key": "d",
              "text": "2.00, at either springing"
            }
          ],
          "answer": "c",
          "explanation": "The crown simple-beam moment ILD is triangular with peak L/4. Since H = M0(crown)/h, divide every ordinate by h. The peak is L/(4h) = 24/24 = 1.00 at midspan. This reaction-per-load ordinate is dimensionless, not a length or a moment.<p>Source note: Restores L/(4h) from the damaged 4Lh extraction in point 50; crown hinge position is stated.</p><p>Capsule 4th ed., p. 17; topic 4 point 50.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00062",
          "src": "CAP4-04-00062",
          "text": "A unit downward force moves anywhere along a weightless cantilever. What is the influence line for its upward vertical support reaction, rather than its support moment?",
          "options": [
            {
              "key": "a",
              "text": "Constant ordinate zero over the span"
            },
            {
              "key": "b",
              "text": "Linear from zero at the root to L at the tip"
            },
            {
              "key": "c",
              "text": "Linear from +1 at the root to zero at the tip"
            },
            {
              "key": "d",
              "text": "Constant ordinate +1 over the span"
            }
          ],
          "answer": "d",
          "explanation": "Vertical equilibrium requires a unit upward reaction irrespective of the load position. Hence its ILD is a unit-height rectangle. The reaction moment changes with the load's lever arm, so its influence line is linear; the two support responses must be distinguished.<p>Capsule 4th ed., p. 17; topic 4 point 60.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00063",
          "src": "CAP4-04-00063",
          "text": "A simple span carries only a train of downward concentrated wheel loads. Why can the largest sagging moment for a particular placement always be found at a wheel section, although it may also extend over an interval?",
          "options": [
            {
              "key": "a",
              "text": "Moment has a finite jump at each wheel"
            },
            {
              "key": "b",
              "text": "Moment is piecewise linear between wheels"
            },
            {
              "key": "c",
              "text": "Every wheel section has zero bending moment"
            },
            {
              "key": "d",
              "text": "The shear between every pair of wheels is zero"
            }
          ],
          "answer": "b",
          "explanation": "Between wheels there is no distributed load, so shear is constant and moment is linear. A positive maximum therefore occurs at a change of slope under a wheel, or on a zero-shear plateau whose ends include wheel sections. A point force changes shear, not moment discontinuously.<p>Source note: Point 62&#39;s always-under-a-wheel rule allows a constant-moment plateau and assumes downward point loads without additional distributed loading or couples.</p><p>Capsule 4th ed., p. 17; topic 4 point 62.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00073",
          "src": "CAP4-04-00073",
          "text": "An engineer keeps section C fixed and records its bending moment while a unit axle is placed successively along a bridge. What does the resulting graph represent?",
          "options": [
            {
              "key": "a",
              "text": "The bending-moment diagram for one fixed axle position"
            },
            {
              "key": "b",
              "text": "The moment envelope for an unrestricted axle train"
            },
            {
              "key": "c",
              "text": "The influence line for bending moment at C"
            },
            {
              "key": "d",
              "text": "The deflected shape under a stationary unit axle"
            }
          ],
          "answer": "c",
          "explanation": "An influence line varies the position of one unit load while retaining the response location and response type. A bending-moment diagram instead varies the section location for one fixed loading. A multi-axle envelope needs additional load placement and superposition.<p>Capsule 4th ed., p. 17; topic 4 point 71.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00081",
          "src": "CAP4-04-00081",
          "text": "For shear at a fixed section C of a cantilever, take downward load on the free-side segment as positive. What is the influence-line ordinate for a unit load root-side of C and tip-side of C, respectively?",
          "options": [
            {
              "key": "a",
              "text": "+1 and 0"
            },
            {
              "key": "b",
              "text": "+1 and the load's distance from C"
            },
            {
              "key": "c",
              "text": "0 and +1"
            },
            {
              "key": "d",
              "text": "0 and the load's distance from C"
            }
          ],
          "answer": "c",
          "explanation": "A cut at C isolates the free-side segment. A unit load root-side of C is absent from that free body and contributes zero; a tip-side unit load requires unit shear. The ILD is therefore a unit rectangle on the free-side interval, unlike the linearly varying moment ILD.<p>Capsule 4th ed., p. 18; topic 4 point 80.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00088",
          "src": "CAP4-04-00088",
          "text": "An arch has level springings A and B separated horizontally by 18 m. A 90 kN downward force acts 6 m from A, with no other loads. What are the vertical reactions at A and B?",
          "options": [
            {
              "key": "a",
              "text": "60 kN and 30 kN"
            },
            {
              "key": "b",
              "text": "90 kN and 30 kN"
            },
            {
              "key": "c",
              "text": "45 kN and 45 kN"
            },
            {
              "key": "d",
              "text": "30 kN and 60 kN"
            }
          ],
          "answer": "a",
          "explanation": "For level springings, the horizontal reactions create no net moment about either springing. Taking moments about A gives VB x 18 = 90 x 6, so VB = 30 kN and VA = 90 - 30 = 60 kN. With span 2l and distance a from A, VB = Wa/(2l), not necessarily the left reaction.<p>Source note: Point 88&#39;s W2la is damaged and does not identify the support or distance origin; both are explicit here.</p><p>Capsule 4th ed., p. 18; topic 4 point 88.</p>",
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
          "kind": "calculation"
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
          "explanation": "The corresponding simple-beam crown moment is wL^2/8 = 4 x 400/8 = 200 kN m. Zero moment at the crown hinge requires Hh = 200, hence H = 40 kN. Each support pushes inward on the arch; the arch pushes outward on its supports.<p>Capsule 4th ed., p. 18; topic 4 point 94.</p>",
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
          "text": "A three-hinged parabolic arch with level springings and a midspan crown hinge carries only a full-span UDL per unit horizontal length. In first-order analysis, what radial shear acts along the rib, including near its springings?",
          "options": [
            {
              "key": "a",
              "text": "Constant and equal to the total applied load"
            },
            {
              "key": "b",
              "text": "Zero throughout"
            },
            {
              "key": "c",
              "text": "Maximum at the crown and zero at both springings"
            },
            {
              "key": "d",
              "text": "Maximum at both springings and zero only at the crown"
            }
          ],
          "answer": "b",
          "explanation": "For this funicular loading, H = wL^2/(8h) and V = H tan(theta). Therefore radial shear Q = V cos(theta) - H sin(theta) is zero everywhere. The global vertical component V is generally nonzero; confusing V with local radial shear causes the springing shortcut.<p>Source note: Corrects point 96&#39;s unsupported universal springing-maximum statement; other loading patterns require evaluation of Q along the actual arch.</p><p>Capsule 4th ed., p. 18; topic 4 point 96.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00111",
          "src": "CAP4-04-00111",
          "text": "A weightless two-hinged semicircular arch has radius R, constant EI and immovable springings. Under one downward vertical point load moving strictly inside the span, with bending-only compatibility and no initial or thermal strain, what is the spatial locus of the intersection of the two reaction lines?",
          "options": [
            {
              "key": "a",
              "text": "A horizontal line at height pi R/2 above the springing line"
            },
            {
              "key": "b",
              "text": "A parabola with crown height R above the springing line"
            },
            {
              "key": "c",
              "text": "A semicircle of radius R coincident with the rib axis"
            },
            {
              "key": "d",
              "text": "A vertical line through the crown for every load position"
            }
          ],
          "answer": "a",
          "explanation": "With A at x = 0, B at x = 2R and load P at x = a, VA = P(2R-a)/(2R) and H = Pa(2R-a)/(pi R^2). The reaction lines meet on x = a at height aVA/H = pi R/2, independent of a. This spatial locus is not the different plot of reaction-vector endpoints in force space.<p>Source note: Point 110 lacks a locus definition and stiffness assumptions; these follow chapter-04-determinate.js, semicircular-reaction-locus-defined. Interior load positions are used; endpoints are limiting cases.</p><p>Capsule 4th ed., p. 19; topic 4 point 110.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00115",
          "src": "CAP4-04-00115",
          "text": "A designer places an arch's third hinge away from the crown, while retaining pinned springings. Which condition can still make the ideal arch a stable statically determinate three-hinged system?",
          "options": [
            {
              "key": "a",
              "text": "The three hinge locations are noncollinear and restraint is adequate"
            },
            {
              "key": "b",
              "text": "The internal hinge must be vertically above one springing"
            },
            {
              "key": "c",
              "text": "The three hinges must lie on their common straight support chord"
            },
            {
              "key": "d",
              "text": "Both springings must be changed to free sliding rollers"
            }
          ],
          "answer": "a",
          "explanation": "A three-hinged arch has two springing hinges and one internal hinge; the internal hinge need not be at the crown. Its zero-moment condition supplies the extra equation, provided the hinge geometry and support arrangement are stable. Collinear hinges produce a degenerate mechanism for this idealization.<p>Source note: Point 115&#39;s anywhere qualification requires nondegenerate geometry and appropriate restraints.</p><p>Capsule 4th ed., p. 19; topic 4 point 115.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-05-00109",
          "src": "CAP4-05-00109",
          "text": "At an arch section, a compressive resultant has components H horizontally and V vertically in chosen positive directions. The local tangent unit vector is (cos theta, sin theta). What is the resultant's tangential component?",
          "options": [
            {
              "key": "a",
              "text": "H cos theta - V sin theta"
            },
            {
              "key": "b",
              "text": "H cos theta + V sin theta"
            },
            {
              "key": "c",
              "text": "H sin theta + V cos theta"
            },
            {
              "key": "d",
              "text": "H sin theta - V cos theta"
            }
          ],
          "answer": "b",
          "explanation": "Project the resultant (H,V) onto the tangent (cos theta,sin theta) using their dot product. This gives H cos theta + V sin theta. Signed components and the chosen tangent direction must be retained; the other projection gives local shear.<p>Capsule 4th ed., p. 22; topic 5 point 107.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-05-00137",
          "src": "CAP4-05-00137",
          "text": "An engineer plots bending moment at one fixed bridge section while a unit point load is moved across the span. What is being plotted?",
          "options": [
            {
              "key": "a",
              "text": "An influence line for moment at that section"
            },
            {
              "key": "b",
              "text": "The deflected shape under a uniform temperature rise"
            },
            {
              "key": "c",
              "text": "A stress-strain curve for the bridge material"
            },
            {
              "key": "d",
              "text": "A bending-moment diagram for one stationary load case"
            }
          ],
          "answer": "a",
          "explanation": "An influence line varies the position of a moving unit load and records one response at a fixed section. A bending-moment diagram instead varies the section position while holding the applied load arrangement fixed. The two horizontal coordinates have different meanings.<p>Capsule 4th ed., p. 23; topic 5 point 138.</p>",
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
          "kind": "application"
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
          "text": "For a rectangular section of width b and depth d in ideal elastic-perfectly-plastic bending, what is the ratio of plastic moment to first-yield moment?",
          "options": [
            {
              "key": "a",
              "text": "1.50"
            },
            {
              "key": "b",
              "text": "1.25"
            },
            {
              "key": "c",
              "text": "1.00"
            },
            {
              "key": "d",
              "text": "2.00"
            }
          ],
          "answer": "a",
          "explanation": "The elastic section modulus is bd<sup>2</sup>/6 and the plastic modulus is bd<sup>2</sup>/4. Their ratio, and hence M<sub>p</sub>/M<sub>y</sub> for equal yield stress, is 1.5; buckling and strain-hardening effects are excluded.<p>Capsule 4th ed., p. 4; topic 1 point 76.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00010",
          "src": "CAP4-04-00010",
          "text": "One unbroken beam passes over supports A, B and C and can transfer bending moment through B. How is this beam classified?",
          "options": [
            {
              "key": "a",
              "text": "A continuous two-span beam"
            },
            {
              "key": "b",
              "text": "A three-hinged arch with a flat axis"
            },
            {
              "key": "c",
              "text": "A propped single-span cantilever"
            },
            {
              "key": "d",
              "text": "Two independent simply supported beams"
            }
          ],
          "answer": "a",
          "explanation": "An unbroken beam spanning across more than two supports is continuous. Two separate beams merely meeting at B would not provide the stated moment continuity. A simple support under a continuous beam does not create an internal hinge in the beam.<p>Capsule 4th ed., p. 15; topic 4 point 10.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00016",
          "src": "CAP4-04-00016",
          "text": "An ideal ductile propped cantilever of span L has equal, uniform sagging and hogging plastic moment capacity and a downward full-span UDL. At flexural collapse, where is the interior sagging plastic hinge measured from the prop?",
          "options": [
            {
              "key": "a",
              "text": "L/4, approximately 0.250L"
            },
            {
              "key": "b",
              "text": "(sqrt(2) - 1)L, approximately 0.414L"
            },
            {
              "key": "c",
              "text": "(2 - sqrt(2))L, approximately 0.586L"
            },
            {
              "key": "d",
              "text": "L/2, approximately 0.500L"
            }
          ],
          "answer": "b",
          "explanation": "Let the hinge be a from the fixed end and b = L - a from the prop. Virtual work gives w = 2Mp(2/a + 1/b)/L. Minimizing over a yields a = sqrt(2)b, hence b = (sqrt(2) - 1)L. This is a plastic mechanism, not an elastic zero-moment section.<p>Source note: Point 16 omitted full UDL, uniform Mp and the plastic-collapse interpretation.</p><p>Capsule 4th ed., p. 15; topic 4 point 16.</p>",
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
          "id": "CAP4-04-00017",
          "src": "CAP4-04-00017",
          "text": "Before yielding, a prismatic propped cantilever of span L with an unyielding prop under a downward full-span UDL has an elastic point of contraflexure. Neglecting shear deformation, how far is it from its fixed end?",
          "options": [
            {
              "key": "a",
              "text": "L/2"
            },
            {
              "key": "b",
              "text": "0.586L"
            },
            {
              "key": "c",
              "text": "0.414L"
            },
            {
              "key": "d",
              "text": "L/4"
            }
          ],
          "answer": "d",
          "explanation": "Compatibility gives the prop reaction 3wL/8. At distance z from the prop, M = (3wL/8)z - wz^2/2; the interior root is z = 3L/4. Therefore the zero crossing is L/4 from the fixed end, distinct from the collapse hinge location.<p>Capsule 4th ed., p. 15; topic 4 point 16.</p>",
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
          "text": "An analyst assembles Kd = F for a restrained elastic frame and solves for the unknown joint translations and rotations. Which classification describes this analysis?",
          "options": [
            {
              "key": "a",
              "text": "A flexibility or force method"
            },
            {
              "key": "b",
              "text": "A limit-analysis mechanism method"
            },
            {
              "key": "c",
              "text": "A stiffness or displacement method"
            },
            {
              "key": "d",
              "text": "A force-polygon graphical method"
            }
          ],
          "answer": "c",
          "explanation": "The primary unknowns in Kd = F are compatible nodal displacements d. Member forces are recovered from those movements and the stiffness relations. A force or flexibility method instead selects redundant forces and enforces displacement compatibility.<p>Capsule 4th ed., p. 16; topic 4 point 40.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00043",
          "src": "CAP4-04-00043",
          "text": "An unloaded prismatic beam AB of length L and flexural rigidity EI has A restrained against transverse translation. B cannot rotate but slides transversely without force. If a small rotation theta is imposed at A, what is M_A/theta?",
          "options": [
            {
              "key": "a",
              "text": "3EI/L"
            },
            {
              "key": "b",
              "text": "2EI/L"
            },
            {
              "key": "c",
              "text": "4EI/L"
            },
            {
              "key": "d",
              "text": "EI/L"
            }
          ],
          "answer": "d",
          "explanation": "With zero transverse force, the internal moment is constant. Its curvature integrates to a relative end rotation theta = ML/EI, giving rotational stiffness EI/L. Restraining B's translation as well would give 4EI/L, while a translation-fixed hinge at B gives 3EI/L.<p>Source note: Page 16 point 41 does not define the guide fully. The authored restraints explicitly match the EI/L case in chapter-04-indeterminate.js, rotational-stiffness-and-end-constraints.</p><p>Capsule 4th ed., p. 16; topic 4 point 41.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00044",
          "src": "CAP4-04-00044",
          "text": "With frame sway appropriately accounted for, repeatedly balancing joint moments and carrying increments to adjacent joints converges to which equations' solution?",
          "options": [
            {
              "key": "a",
              "text": "Only the three whole-frame equilibrium equations"
            },
            {
              "key": "b",
              "text": "Only compatibility equations for redundant axial forces"
            },
            {
              "key": "c",
              "text": "The joint-equilibrium equations of slope-deflection"
            },
            {
              "key": "d",
              "text": "The nonlinear equations of a plastic-collapse mechanism"
            }
          ],
          "answer": "c",
          "explanation": "Moment distribution is an iterative solution of the elastic joint-equilibrium system obtained from slope-deflection relations. Stiffness factors govern how each imbalance is shared. A sway frame also needs translational equilibrium; suppressing sway would solve a different model.<p>Source note: Points 42 and 103 repeat the same method equivalence.</p><p>Capsule 4th ed., pp. 16, 18; topic 4 point 42; topic 4 point 103.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00045",
          "src": "CAP4-04-00045",
          "text": "In the rigid-plastic mechanism idealization of beam collapse, how is the motion between two successive plastic hinges represented?",
          "options": [
            {
              "key": "a",
              "text": "Rigid-segment motion with plastic rotation concentrated at hinges"
            },
            {
              "key": "b",
              "text": "Independent axial sliding without rotation at either hinge"
            },
            {
              "key": "c",
              "text": "Elastic bending only, with each hinge retaining zero rotation"
            },
            {
              "key": "d",
              "text": "Uniform plastic curvature throughout every intervening segment"
            }
          ],
          "answer": "a",
          "explanation": "The mechanism model neglects elastic deformation compared with the large plastic rotations. Segments therefore move as rigid bodies while relative rotation occurs at hinges carrying their plastic moment capacity. This is a collapse idealization, not a claim that the real segments have infinite elastic stiffness.<p>Capsule 4th ed., p. 16; topic 4 point 43.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00048",
          "src": "CAP4-04-00048",
          "text": "For a two-hinged arch with level immovable springings and no initial or thermal strain, let M0 be the released simple-beam moment, x the horizontal coordinate from the left springing, y the height above the support chord and dmu = ds/(EI). Under linear-elastic bending-only compatibility, which whole-arch expression determines inward horizontal thrust H?",
          "options": [
            {
              "key": "a",
              "text": "H = integral(M0 y^2 dmu)/integral(y^3 dmu)"
            },
            {
              "key": "b",
              "text": "H = integral(M0 y dmu)/integral(y^2 dmu)"
            },
            {
              "key": "c",
              "text": "H = integral(M0 y dmu)/integral(x^2 dmu)"
            },
            {
              "key": "d",
              "text": "H = integral(M0 dmu)/integral(y dmu)"
            }
          ],
          "answer": "b",
          "explanation": "Write M = M0 - Hy and U = integral(M^2 dmu)/2. Differentiating with respect to redundant H and imposing zero horizontal movement gives integral((M0 - Hy)y dmu) = 0. Thus H is the stated weighted ratio, integrated along the whole arch; it is not a separate local thrust at each point.<p>Source note: Page 17 point 46 is corrupted in both point and page extraction. Reconstructed from compatibility, not a claimed reading of the printed formula. ds is arc length.</p><p>Capsule 4th ed., p. 17; topic 4 point 46.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00055",
          "src": "CAP4-04-00055",
          "text": "An unloaded prismatic member has EI = 16000 kN m^2 and length 4 m. Both ends are held against transverse translation, and its far end is hinged. What is the near-end rotational stiffness?",
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
          "explanation": "With no chord rotation, the zero far-end moment condition gives theta_B = -theta_A/2. Substituting in M_A = (2EI/L)(2theta_A + theta_B) gives M_A/theta_A = 3EI/L = 12000 kN m/rad. A fixed far end would give 4EI/L.<p>Capsule 4th ed., p. 17; topic 4 point 54.</p>",
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
          "text": "A historical note credits the development of moment distribution, the iterative balancing method for continuous beams and rigid frames. Which engineer should it name?",
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
              "text": "Alberto Castigliano"
            },
            {
              "key": "d",
              "text": "Heinrich Muller-Breslau"
            }
          ],
          "answer": "b",
          "explanation": "Hardy Cross introduced moment distribution for indeterminate structures. Castigliano is associated with energy derivatives, Muller-Breslau with influence-line construction, and Mohr with graphical stress and structural methods; these are different contributions.<p>Capsule 4th ed., p. 17; topic 4 point 56.</p>",
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
          "text": "For a shallow two-hinged parabolic arch, use ds approximately dx, constant EI and bending-only compatibility with fixed supports. A 32 kN crown load acts on span 16 m and rise 2 m. What horizontal thrust results?",
          "options": [
            {
              "key": "a",
              "text": "80 kN"
            },
            {
              "key": "b",
              "text": "40 kN"
            },
            {
              "key": "c",
              "text": "50 kN"
            },
            {
              "key": "d",
              "text": "64 kN"
            }
          ],
          "answer": "c",
          "explanation": "Using y = 4hx(L-x)/L^2 and M0 = Px/2 on the left half, symmetry gives integral(M0 y dx) = 5PhL^2/48 and integral(y^2 dx) = 8h^2L/15. Their ratio is H = 25PL/(128h) = 50 kN. Keeping exact arc-length weighting with constant EI generally changes this coefficient.<p>Source note: Page 17 point 66 coefficient is unreadable as 2152W8hL. The question explicitly uses the shallow-arch horizontal-integration approximation; original typography remains for parent review.</p><p>Capsule 4th ed., p. 17; topic 4 point 66.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00072",
          "src": "CAP4-04-00072",
          "text": "A solid rhombus has horizontal diagonal b and vertical diagonal d. For elastic-perfectly plastic flexure about its horizontal centroidal diagonal, what is the section shape factor Zp/Ze?",
          "options": [
            {
              "key": "a",
              "text": "1.00"
            },
            {
              "key": "b",
              "text": "1.50"
            },
            {
              "key": "c",
              "text": "1.70"
            },
            {
              "key": "d",
              "text": "2.00"
            }
          ],
          "answer": "d",
          "explanation": "The width at height y is b(1 - 2|y|/d). Integration gives I = bd^3/48 and Ze = I/(d/2) = bd^2/24. The plastic modulus is integral(|y| dA) = bd^2/12, so Zp/Ze = 2. This assumes the stated bending axis, equal tensile/compressive yield strength and no axial force.<p>Capsule 4th ed., p. 17; topic 4 point 70.</p>",
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
          "kind": "calculation"
        },
        {
          "id": "CAP4-04-00077",
          "src": "CAP4-04-00077",
          "text": "A symmetric two-hinged parabolic arch of span 12 m and rise 3 m carries a horizontal-projection load increasing linearly from zero to 8 kN/m. With symmetric EI, immovable supports and bending-only compatibility, what is its horizontal thrust?",
          "options": [
            {
              "key": "a",
              "text": "12 kN"
            },
            {
              "key": "b",
              "text": "48 kN"
            },
            {
              "key": "c",
              "text": "36 kN"
            },
            {
              "key": "d",
              "text": "24 kN"
            }
          ],
          "answer": "d",
          "explanation": "A triangular load and its reflected copy sum to a full-span 8 kN/m UDL. Their thrusts are equal by symmetry and add by linearity. Each is therefore half of wL^2/(8h): H = wL^2/(16h) = 8 x 144/(16 x 3) = 24 kN. The rise h must not be confused with the thrust H.<p>Source note: Point 75&#39;s denominator 16H uses ambiguous notation; define rise separately and specify symmetry and deformation assumptions.</p><p>Capsule 4th ed., p. 18; topic 4 point 75.</p>",
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
          "kind": "calculation"
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
          "explanation": "The stiffer member's distribution factor is 6000/(6000 + 4000) = 0.60. Balancing opposes the unbalance, so its increment is -0.60 x 50 = -30 kN m; the other receives -20 kN m. The factors sum to one, and the increments sum to -50 kN m.<p>Capsule 4th ed., p. 18; topic 4 point 77.</p>",
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
          "text": "A two-hinged arch with positive thermal expansion coefficient is heated uniformly while its springings remain at fixed spacing. In small-displacement elastic compatibility, what happens to its inward horizontal thrust?",
          "options": [
            {
              "key": "a",
              "text": "It reverses direction for every positive temperature rise"
            },
            {
              "key": "b",
              "text": "It remains unchanged because the arch has two hinges"
            },
            {
              "key": "c",
              "text": "It decreases because both end rotations are free"
            },
            {
              "key": "d",
              "text": "It increases to oppose free span expansion"
            }
          ],
          "answer": "d",
          "explanation": "Uniform heating would increase the free horizontal span by alpha deltaT L. Fixed spacing requires an opposing elastic displacement. With positive horizontal flexibility fHH, the thermal thrust increment is deltaH = alpha deltaT L/fHH, directed inward. A movable springing or temperature gradient is a different case.<p>Source note: Point 97 is restricted to uniform heating, positive expansion coefficient, fixed span and a stable linear model.</p><p>Capsule 4th ed., p. 18; topic 4 point 97.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-04-00116",
          "src": "CAP4-04-00116",
          "text": "A symmetric two-hinged parabolic arch has fixed span L and rise h and carries a full horizontal UDL w. With bending-only compatibility and no thermal change, which internal actions result?",
          "options": [
            {
              "key": "a",
              "text": "Compression and sagging bending, with zero radial shear only at the crown"
            },
            {
              "key": "b",
              "text": "Compression and constant radial shear, with zero bending"
            },
            {
              "key": "c",
              "text": "Compression along the tangent, with zero bending and radial shear"
            },
            {
              "key": "d",
              "text": "Bending alone, with zero normal thrust and radial shear"
            }
          ],
          "answer": "c",
          "explanation": "Here y = 4hx(L-x)/L^2, M0 = wx(L-x)/2 and H = wL^2/(8h), giving M0 - Hy = 0. Also V = H tan(theta), so radial Q = V cos(theta) - H sin(theta) = 0. The resultant is tangent compression; retaining axial shortening or changing the loading can disturb this funicular state.<p>Source note: Point 116 is valid only for the specified horizontal UDL and first-order bending-only compatibility model, not an arbitrary loaded parabolic arch.</p><p>Capsule 4th ed., p. 19; topic 4 point 116.</p>",
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
          "kind": "application"
        },
        {
          "id": "CAP4-05-00128",
          "src": "CAP4-05-00128",
          "text": "At a moment-distribution joint, three members have rotational stiffnesses 20, 30 and 50 kN m/rad under the applicable far-end conditions. What is the distribution factor for the 30 kN m/rad member?",
          "options": [
            {
              "key": "a",
              "text": "0.70"
            },
            {
              "key": "b",
              "text": "0.50"
            },
            {
              "key": "c",
              "text": "0.30"
            },
            {
              "key": "d",
              "text": "0.60"
            }
          ],
          "answer": "c",
          "explanation": "A member's distribution factor equals its rotational stiffness divided by the sum at the joint: 30/(20 + 30 + 50) = 0.30. The factors sum to one. The denominator is not the stiffness of one neighbouring member or a carry-over factor.<p>Source note: Page 23 point 127 truncates the denominator. Restored the sum of stiffnesses of members participating at the joint, using their actual far-end conditions.</p><p>Capsule 4th ed., p. 23; topic 5 point 127.</p>",
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
          "kind": "calculation"
        }
      ]
    }
  ]
};
