(function () {
    "use strict";
    window.CIVIL_CAPSULE_NOTE_TOPICS = window.CIVIL_CAPSULE_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_CAPSULE_NOTE_TOPICS, {
      "ACiE0401": {
        "code": "ACiE0401",
        "questionCount": 31,
        "format": 2,
        "summary": "<p>This subchapter builds shear-force and bending-moment diagrams for statically determinate beams and cantilevers from equilibrium alone. The capsule questions test sign conventions, the differential links between load, shear and moment, zero-shear sections and contraflexure, point forces and applied couples, the standard point-load and uniform-load results and how they scale with span, zero shear under a triangular load, and the load path of suspension bridges.</p>",
        "blocks": [
          {
            "id": "sign-conventions-and-magnitudes",
            "title": "Sign conventions: sagging curvature and signed force components",
            "html": "<p>Every shear and moment calculation starts from a declared sign convention. Under the common <em>sagging-positive</em> rule, a positive bending moment shortens the top fibres and lengthens the bottom fibres of an initially straight horizontal beam. The elastic curve is then concave upward, which some texts describe as convex downward.</p><p>That statement describes the curvature of the beam itself, not the side of the axis on which a moment diagram is drawn. Plotting habits differ between books, so read the sign labels on any diagram. Hogging moment reverses the picture: tension at the top and compression at the bottom, as at the root of a cantilever carrying downward load.</p><p>A computed component carries a sign only relative to the chosen positive direction. With upward taken positive, a vertical component of −18 kN is a force of 18 kN acting downward. Its <em>magnitude</em> is the non-negative size of the vector, and the minus sign reports direction. In mechanics, magnitude simply means size, not enormity.</p>",
            "points": [
              {
                "html": "Under the sagging-positive convention a positive moment makes the top fibres shorten and the bottom fibres lengthen, so the beam curves concave upward.",
                "sources": [
                  {
                    "id": "CAP4-04-00012",
                    "label": "p. 15; topic 4 point 12"
                  }
                ]
              },
              {
                "html": "A component of −18 kN with upward positive has magnitude 18 kN and acts downward; magnitude is the non-negative size of the vector.",
                "sources": [
                  {
                    "id": "CAP4-05-00070",
                    "label": "p. 21; topic 5 point 68"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00012",
                "label": "p. 15; topic 4 point 12"
              },
              {
                "id": "CAP4-05-00070",
                "label": "p. 21; topic 5 point 68"
              }
            ]
          },
          {
            "id": "load-shear-moment-relations",
            "title": "Differential relations linking load, shear and bending moment",
            "html": "<p>Equilibrium of a short beam slice gives two working rules. Shear is the slope of the moment diagram, and the slope of the shear diagram is minus the load intensity, with downward load taken positive. Differentiating moves down the chain from moment to shear to load; integrating moves back up.</p><p>In integral form, the change of moment between two sections equals the signed area of the shear diagram between them, provided no concentrated couple acts in between. Likewise, the change of shear equals minus the load applied between the sections.</p><p>These relations also exclude some combinations. Where the moment is constant over an interval free of concentrated actions, its slope is zero, so the transverse shear force vanishes there. Bending stress and curvature still exist, and an independent axial force may coexist: the moment diagram alone says nothing about axial force.</p>",
            "formulas": [
              {
                "label": "Shear is the slope of the moment diagram",
                "tex": "V = \\dfrac{dM}{dx}"
              },
              {
                "label": "Load is minus the slope of the shear diagram",
                "tex": "\\dfrac{dV}{dx} = -q",
                "where": "<p>\\(q\\) is the load intensity, taken positive downward.</p>"
              },
              {
                "label": "Moment change from the shear-diagram area",
                "tex": "M_2 - M_1 = \\int_{x_1}^{x_2} V\\,dx",
                "where": "<p>Valid when no concentrated couple acts between the two sections.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: moving along the chain",
              "html": "<ol><li>Moment to shear: with \\(M(x) = 18x - 3x^2\\) kN·m, differentiation gives \\(V(x) = 18 - 6x\\). At x = 2 m the shear is +6 kN. The moment there is 24 kN·m, a different quantity in different units; dividing M by x is not a route to shear.</li><li>Shear to load: with \\(V(x) = 12 - x^2\\) kN, \\(dV/dx = -2x\\), so \\(q = 2x\\) kN/m acting downward. A parabolic shear diagram signals a linearly varying load.</li><li>Shear area to moment: a constant shear of −4 kN over 3 m changes the moment by −4 × 3 = −12 kN·m. Starting from +10 kN·m, the moment at the far section is −2 kN·m; the −12 kN·m is the change, not the final value.</li></ol>"
            },
            "points": [
              {
                "html": "Differentiating \\(M(x) = 18x - 3x^2\\) kN·m gives \\(V = 18 - 6x\\), so the shear at x = 2 m is +6 kN.",
                "sources": [
                  {
                    "id": "CAP4-04-00006",
                    "label": "p. 15; topic 4 point 6"
                  }
                ]
              },
              {
                "html": "A parabolic shear function \\(V = 12 - x^2\\) kN implies \\(q = -dV/dx = 2x\\) kN/m acting downward, a linearly varying load.",
                "sources": [
                  {
                    "id": "CAP4-04-00078",
                    "label": "p. 18; topic 4 point 76"
                  }
                ]
              },
              {
                "html": "A constant shear of −4 kN over 3 m lowers the moment by 12 kN·m, so +10 kN·m at one section becomes −2 kN·m at the other.",
                "sources": [
                  {
                    "id": "CAP4-04-00091",
                    "label": "p. 18; topic 4 point 91"
                  }
                ]
              },
              {
                "html": "Where the bending moment is constant over an interval with no concentrated actions, the transverse shear force is zero throughout that interval.",
                "sources": [
                  {
                    "id": "CAP4-04-00014",
                    "label": "pp. 15, 17; topic 4 point 14; topic 4 point 63"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00006",
                "label": "p. 15; topic 4 point 6"
              },
              {
                "id": "CAP4-04-00078",
                "label": "p. 18; topic 4 point 76"
              },
              {
                "id": "CAP4-04-00091",
                "label": "p. 18; topic 4 point 91"
              },
              {
                "id": "CAP4-04-00014",
                "label": "pp. 15, 17; topic 4 point 14; topic 4 point 63"
              }
            ]
          },
          {
            "id": "zero-shear-extremes-contraflexure",
            "title": "Zero shear, moment extremes and points of contraflexure",
            "html": "<p>Because shear is the slope of the moment diagram, the sign of \\(V\\) shows whether \\(M\\) is rising or falling. Where shear passes from positive to negative through zero, the moment stops rising and starts falling, which establishes a <em>local maximum</em> of bending moment. A change from negative to positive marks a local minimum.</p><p>Zero shear alone is not enough. The moment may stay constant over a whole interval, or the slope may touch zero without changing sign, giving a stationary point that is not an extremum. Check the sign of the shear on each side.</p><p>A <em>point of contraflexure</em> is a section where the bending moment changes sign. Curvature changes sign with it, so the beam bends the other way beyond that section, yet it stays physically continuous with a continuous slope. Zero moment does not create a hinge, and a moment that only touches zero without changing sign is not contraflexure.</p>",
            "formulas": [
              {
                "label": "Curvature follows the bending moment",
                "tex": "\\dfrac{1}{R} = \\dfrac{M}{EI}",
                "where": "<p>With \\(EI\\) positive, curvature and moment always share a sign.</p>"
              }
            ],
            "example": {
              "title": "Worked reasoning: a sign change in a continuous beam",
              "html": "<p>Suppose the moment in a continuous beam runs smoothly from −8 kN·m to +6 kN·m and crosses zero at one interior section, with \\(EI\\) positive.</p><ol><li>The moment changes sign there, so the section is a point of contraflexure.</li><li>Curvature \\(M/EI\\) reverses from hogging to sagging across it.</li><li>Rotation stays continuous, so no hinge is present and no moment capacity has been exhausted.</li></ol>"
            },
            "points": [
              {
                "html": "Shear changing from positive to negative through zero establishes a local maximum of bending moment; zero shear without a sign change does not.",
                "sources": [
                  {
                    "id": "CAP4-04-00002",
                    "label": "p. 15; topic 4 point 2"
                  }
                ]
              },
              {
                "html": "Where the moment changes sign smoothly, as from −8 to +6 kN·m, the section is a point of contraflexure with reversed curvature, not a hinge.",
                "sources": [
                  {
                    "id": "CAP4-04-00071",
                    "label": "pp. 17, 18; topic 4 point 69; topic 4 point 78"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00002",
                "label": "p. 15; topic 4 point 2"
              },
              {
                "id": "CAP4-04-00071",
                "label": "pp. 17, 18; topic 4 point 69; topic 4 point 78"
              }
            ]
          },
          {
            "id": "couples-on-simple-beams",
            "title": "Applied couples on simple beams: end couples, interior jumps and end moments",
            "html": "<p>A couple has no net force, so it enters moment equilibrium without disturbing vertical force balance. Put equal end couples of magnitude \\(M\\) on a pin-roller beam, one clockwise and one anticlockwise. They cancel in overall moment equilibrium, both reactions are zero, and every interior section carries zero shear and a constant moment of magnitude \\(M\\): uniform bending.</p><p>Couples in the same rotational sense would instead need a reaction pair, giving constant nonzero shear.</p><p>A concentrated couple applied inside the span makes the moment diagram jump by the value of the couple, while the shear remains continuous because no transverse force acts there. The direction of the jump depends on the sign conventions adopted.</p><p>Without applied end couples, a pin-roller beam that ends at its supports and carries only transverse loads within the span has zero moment at both ends, because ideal pins and rollers supply no reaction couple. A simple support beneath a continuous beam is different: it restrains deflection but does not force the internal moment there to zero.</p>",
            "formulas": [
              {
                "label": "Same-sense end couples need a reaction pair",
                "tex": "R_A = R_B = \\dfrac{2M}{L}",
                "where": "<p>The two reactions act in opposite directions and form the couple that balances \\(2M\\).</p>"
              },
              {
                "label": "Moment jump at an applied couple",
                "tex": "|\\Delta M| = M_0",
                "where": "<p>\\(M_0\\) is the concentrated couple; the shear is continuous across it.</p>"
              }
            ],
            "moreHtml": "<p>Same-sense case in detail: with both end couples clockwise, moments about the left support give \\(R_B = 2M/L\\) upward and an equal downward reaction at A. Taking sagging as positive, the internal moment \\(M(x) = M - 2Mx/L\\) runs from +M at the left end through zero at midspan to −M at the right end.</p>",
            "points": [
              {
                "html": "Equal end couples of opposite rotational sense on a pin-roller beam give zero shear and a constant moment of magnitude \\(M\\) at every interior section.",
                "sources": [
                  {
                    "id": "CAP4-04-00001",
                    "label": "p. 15; topic 4 point 1"
                  }
                ]
              },
              {
                "html": "An interior concentrated couple makes the moment jump by its value while the shear remains continuous, since no transverse force acts there.",
                "sources": [
                  {
                    "id": "CAP4-04-00011",
                    "label": "p. 15; topic 4 point 11"
                  }
                ]
              },
              {
                "html": "A pin-roller beam that ends at its supports, with only transverse span loads and no applied end couples, has zero bending moment at both ends.",
                "sources": [
                  {
                    "id": "CAP4-04-00049",
                    "label": "p. 17; topic 4 point 47"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00001",
                "label": "p. 15; topic 4 point 1"
              },
              {
                "id": "CAP4-04-00011",
                "label": "p. 15; topic 4 point 11"
              },
              {
                "id": "CAP4-04-00049",
                "label": "p. 17; topic 4 point 47"
              }
            ]
          },
          {
            "id": "couples-on-cantilevers",
            "title": "Couples on cantilevers: constant moment without shear",
            "html": "<p>A cantilever loaded only by a couple shows that moment and shear are independent quantities. Cut the beam anywhere between the root and the couple and keep the free-side segment. It contains the couple and nothing else, so equilibrium requires zero shear and an internal moment equal to the couple. The moment diagram is a rectangle.</p><ul><li><em>Couple at the tip.</em> Every section carries the full couple, so the maximum moment equals the applied couple. Unlike a tip force, a tip couple does not produce a moment that grows with distance from the tip.</li><li><em>Couple at midspan.</em> The fixed end supplies an equal reaction couple and no vertical reaction. The internal moment is constant from the root to the couple and zero from the couple to the free end, because the outer segment carries no load.</li></ul><p>Self-weight is ignored in these idealizations; including it would add shear and a parabolic moment component.</p>",
            "formulas": [
              {
                "label": "Cantilever between the root and an applied couple",
                "tex": "V = 0,\\quad M = M_0",
                "where": "<p>\\(M_0\\) is the applied couple; beyond a midspan couple the moment is zero.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: a couple at the tip and at midspan",
              "html": "<p>With a 12 kN·m couple at the free end, the segment beyond any cut holds only that couple. Hence \\(V = 0\\) and the moment magnitude is 12 kN·m everywhere; it does not multiply by the span.</p><p>With a 9 kN·m couple at midspan, vertical equilibrium gives a fixed-end shear of 0 kN, and moment equilibrium gives a 9 kN·m reaction couple. The moment is 9 kN·m from the root to the couple and zero beyond it.</p>"
            },
            "points": [
              {
                "html": "A cantilever with only a tip couple \\(M\\) carries the largest moment at every section, with magnitude \\(M\\), and zero shear.",
                "sources": [
                  {
                    "id": "CAP4-04-00015",
                    "label": "p. 15; topic 4 point 15"
                  }
                ]
              },
              {
                "html": "A 12 kN·m tip couple on a cantilever gives zero shear and a constant 12 kN·m moment along the whole beam.",
                "sources": [
                  {
                    "id": "CAP4-05-00052",
                    "label": "p. 20; topic 5 point 51"
                  }
                ]
              },
              {
                "html": "A 9 kN·m couple at a cantilever's midspan produces 0 kN shear and a 9 kN·m moment at the fixed end.",
                "sources": [
                  {
                    "id": "CAP4-05-00110",
                    "label": "p. 22; topic 5 point 108"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00015",
                "label": "p. 15; topic 4 point 15"
              },
              {
                "id": "CAP4-05-00052",
                "label": "p. 20; topic 5 point 51"
              },
              {
                "id": "CAP4-05-00110",
                "label": "p. 22; topic 5 point 108"
              }
            ]
          },
          {
            "id": "point-loads-simple-span",
            "title": "Point loads on a simple span: triangular diagrams and the design section",
            "html": "<p>For a statically determinate beam, reactions and bending moments follow from statics alone. A point load makes the shear jump by the value of the load, while the moment diagram stays continuous and changes slope at the load.</p><p>With the load at the centre, each reaction is \\(P/2\\) and the moment rises linearly to a peak of \\(PL/4\\), then falls linearly back to zero: two straight segments meeting at a central apex.</p><p>The critical section is read from the diagram, not assumed to be at midspan. For an off-centre load the moment peaks under the load, where the shear changes sign. Midspan governs many symmetric load cases, not all of them.</p><p>A determinate moment diagram depends only on loads and geometry. Changing the section depth, with the applied load unchanged and self-weight excluded, leaves the bending-moment diagram unchanged; it alters bending stress, curvature and deflection instead. That independence fails if self-weight changes with the section, or if the structure is indeterminate so that member stiffness shares the load.</p>",
            "formulas": [
              {
                "label": "Left reaction, load P at distance a from A",
                "tex": "R_A = \\dfrac{P(L-a)}{L}"
              },
              {
                "label": "Moment under an off-centre point load",
                "tex": "M_{\\text{max}} = \\dfrac{Pa(L-a)}{L}"
              },
              {
                "label": "Central point load",
                "tex": "M_{\\text{max}} = \\dfrac{PL}{4}"
              }
            ],
            "example": {
              "title": "Worked example: 24 kN placed 2 m from the left end of a 6 m span",
              "html": "<ol><li>Reactions: \\(R_A = 24 \\times 4/6 = 16\\) kN and \\(R_B = 24 - 16 = 8\\) kN.</li><li>Shear is +16 kN left of the load and −8 kN right of it, so the moment peaks under the load, 2 m from the left support.</li><li>Peak moment: 16 × 2 = 32 kN·m. At midspan the moment is only 8 × 3 = 24 kN·m.</li></ol><p>Designing for the midspan value here would understate the governing moment by a quarter.</p>"
            },
            "points": [
              {
                "html": "A central point load \\(P\\) on a simple span gives a bending-moment diagram of two straight segments meeting at a central peak of \\(PL/4\\).",
                "sources": [
                  {
                    "id": "CAP4-04-00026",
                    "label": "p. 16; topic 4 point 25"
                  }
                ]
              },
              {
                "html": "For 24 kN at 2 m on a 6 m simple span, the largest moment, 32 kN·m, occurs under the load, 2 m from the left support, not at midspan.",
                "sources": [
                  {
                    "id": "CAP4-04-00005",
                    "label": "p. 15; topic 4 point 5"
                  }
                ]
              },
              {
                "html": "In a determinate beam under a fixed load with self-weight excluded, changing the section depth leaves the bending-moment diagram unchanged.",
                "sources": [
                  {
                    "id": "CAP4-05-00046",
                    "label": "p. 20; topic 5 point 45"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00026",
                "label": "p. 16; topic 4 point 25"
              },
              {
                "id": "CAP4-04-00005",
                "label": "p. 15; topic 4 point 5"
              },
              {
                "id": "CAP4-05-00046",
                "label": "p. 20; topic 5 point 45"
              }
            ]
          },
          {
            "id": "third-point-loads",
            "title": "Two equal loads at the third points: a shear-free middle zone",
            "html": "<p>Place two equal downward loads \\(W\\) at one third of the span from each support of a simple beam. Symmetry makes each reaction equal to one load, \\(W\\).</p><p>The shear diagram has three steps: \\(+W\\) from the left support to the first load, zero between the loads, and \\(-W\\) beyond the second load. Any section in the first third, such as one at \\(L/6\\), therefore carries the full reaction as shear.</p><p>Zero shear between the loads means a constant moment over the middle third. Its value is \\(WL/3\\), where \\(W\\) is each individual load rather than their sum. Symmetric two-point loading is therefore a convenient way to create a region of pure bending.</p>",
            "formulas": [
              {
                "label": "Middle-third moment, equal loads W at the third points",
                "tex": "M = \\dfrac{WL}{3}",
                "where": "<p>\\(W\\) is each load, not the total \\(2W\\); the value holds throughout the middle third.</p>"
              }
            ],
            "example": {
              "title": "Worked example: 30 kN at each third point of a 9 m span",
              "html": "<ol><li>Each reaction equals one load: 30 kN.</li><li>At midspan, 4.5 m from the left support, the left free body holds the reaction and the first load, which lies 1.5 m from the section.</li><li>Moment: \\(30 \\times 4.5 - 30 \\times 1.5 = 90\\) kN·m.</li><li>Check: \\(WL/3 = 30 \\times 9/3 = 90\\) kN·m.</li></ol>"
            },
            "points": [
              {
                "html": "With equal loads \\(P\\) at the third points of a simple span, the shear at \\(L/6\\) from support A is \\(+P\\), the full reaction; between the loads it is zero.",
                "sources": [
                  {
                    "id": "CAP4-04-00008",
                    "label": "p. 15; topic 4 point 8"
                  }
                ]
              },
              {
                "html": "Two 30 kN loads, each 3 m from a support of a 9 m simple span, give a constant 90 kN·m over the middle third, equal to \\(WL/3\\) with \\(W\\) as each load.",
                "sources": [
                  {
                    "id": "CAP4-05-00138",
                    "label": "p. 23; topic 5 point 139"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00008",
                "label": "p. 15; topic 4 point 8"
              },
              {
                "id": "CAP4-05-00138",
                "label": "p. 23; topic 5 point 139"
              }
            ]
          },
          {
            "id": "full-span-udl",
            "title": "Full-span UDL on a simple span: linear shear, parabolic moment",
            "html": "<p>For a simple span carrying uniform intensity \\(w\\) over its full length \\(L\\), each reaction is \\(wL/2\\) and the load to the left of a cut at \\(x\\) is \\(wx\\). The shear is therefore linear with slope \\(-w\\), and the moment is a parabola. The quadratic expression belongs to moment; confusing it with shear is a common slip.</p><ul><li><em>Greatest shear magnitude</em> occurs just inside either support. The signed values there are equal and opposite, \\(+wL/2\\) and \\(-wL/2\\).</li><li><em>Greatest moment</em> occurs where the shear is zero. Symmetry puts that at midspan, so midspan carries the maximum sagging moment and zero shear, which is why the middle region of such a beam is proportioned for bending.</li></ul><p>The midspan location relies on full-span uniform intensity with simple end conditions, not on the words simply supported alone. A moving uniform load longer than the span reproduces this case once it covers the whole span.</p>",
            "formulas": [
              {
                "label": "Shear under a full-span UDL",
                "tex": "V(x) = \\dfrac{wL}{2} - wx"
              },
              {
                "label": "Bending moment under a full-span UDL",
                "tex": "M(x) = \\dfrac{wx(L-x)}{2}"
              },
              {
                "label": "Maximum moment at midspan",
                "tex": "M_{\\text{max}} = \\dfrac{wL^2}{8}"
              }
            ],
            "example": {
              "title": "Worked examples: 5 kN/m on 8 m and 12 kN/m on 6 m",
              "html": "<p>For 5 kN/m over 8 m the total load is 40 kN and each reaction is 20 kN. Then \\(V = 20 - 5x\\) kN runs from +20 kN to −20 kN, so the greatest shear magnitude, 20 kN, occurs just inside either support.</p><p>For 12 kN/m over 6 m, the shear vanishes at x = 3 m and</p>\\[M_{\\text{max}} = \\dfrac{12 \\times 6^2}{8} = 54\\ \\text{kN·m}\\]<p>at midspan.</p>"
            },
            "moreHtml": "<p>Derivation: integrating the shear from zero moment at the left support gives \\(M = wLx/2 - wx^2/2\\), which factorises to \\(wx(L-x)/2\\). Setting \\(dM/dx = 0\\) gives \\(x = L/2\\), and substitution returns \\(wL^2/8\\).</p>",
            "points": [
              {
                "html": "Under a full-span UDL the shear inside the span is \\(V(x) = wL/2 - wx\\), a straight line of slope \\(-w\\); the quadratic \\(wx(L-x)/2\\) is the moment.",
                "sources": [
                  {
                    "id": "CAP4-04-00013",
                    "label": "p. 15; topic 4 point 13"
                  }
                ]
              },
              {
                "html": "For 5 kN/m on an 8 m simple span the greatest shear magnitude, 20 kN, occurs just inside either support.",
                "sources": [
                  {
                    "id": "CAP4-04-00050",
                    "label": "p. 17; topic 4 point 48"
                  }
                ]
              },
              {
                "html": "A 12 kN/m UDL covering a 6 m simple span gives a largest sagging moment of 54 kN·m at midspan.",
                "sources": [
                  {
                    "id": "CAP4-04-00090",
                    "label": "p. 18; topic 4 point 90"
                  }
                ]
              },
              {
                "html": "At midspan of a simple span under full-span UDL the beam carries its maximum sagging moment and zero shear.",
                "sources": [
                  {
                    "id": "CAP4-05-00108",
                    "label": "p. 22; topic 5 point 106"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00013",
                "label": "p. 15; topic 4 point 13"
              },
              {
                "id": "CAP4-04-00050",
                "label": "p. 17; topic 4 point 48"
              },
              {
                "id": "CAP4-04-00090",
                "label": "p. 18; topic 4 point 90"
              },
              {
                "id": "CAP4-05-00108",
                "label": "p. 22; topic 5 point 106"
              }
            ]
          },
          {
            "id": "span-scaling-udl",
            "title": "Scaling the UDL maximum moment: fixed intensity versus fixed total load",
            "html": "<p>The result \\(M_{\\text{max}} = wL^2/8\\) hides a trap about what stays constant when the span changes. Load per metre and total load spread over the span are different statements, and they scale differently.</p><table><thead><tr><th scope='col'>Quantity held fixed</th><th scope='col'>Maximum moment</th><th scope='col'>Effect of doubling the span</th></tr></thead><tbody><tr><td>Intensity \\(w\\) per metre</td><td>\\(wL^2/8\\)</td><td>Four times larger; total load also doubles</td></tr><tr><td>Total load \\(W\\) spread uniformly</td><td>\\(WL/8\\)</td><td>Twice as large; intensity halves</td></tr></tbody></table><p>With fixed \\(w\\), both the load and its lever arm grow with the span, so the moment scales with \\(L^2\\). With fixed \\(W\\), only the lever arm grows, so the moment scales with \\(L\\).</p>",
            "formulas": [
              {
                "label": "Two forms of the UDL maximum",
                "tex": "M_{\\text{max}} = \\dfrac{wL^2}{8} = \\dfrac{WL}{8}",
                "where": "<p>\\(W = wL\\) is the total load on the span.</p>"
              }
            ],
            "example": {
              "title": "Worked example: doubling the span both ways",
              "html": "<p>Fixed intensity: replacing \\(L\\) by \\(2L\\) gives \\(w(2L)^2/8 = 4 \\times wL^2/8\\), so the maximum becomes 4M.</p><p>Fixed total load: replacing \\(L\\) by \\(2L\\) gives \\(W(2L)/8 = 2 \\times WL/8\\), so the maximum becomes 2M.</p>"
            },
            "points": [
              {
                "html": "Doubling the span of a simple beam while keeping the UDL intensity per metre unchanged raises the maximum moment from \\(M\\) to 4M.",
                "sources": [
                  {
                    "id": "CAP4-04-00092",
                    "label": "p. 18; topic 4 point 93"
                  }
                ]
              },
              {
                "html": "If the same total load is spread uniformly over twice the span, the maximum moment only doubles, to 2M, because the intensity halves.",
                "sources": [
                  {
                    "id": "CAP4-04-00093",
                    "label": "p. 18; topic 4 point 93"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00092",
                "label": "p. 18; topic 4 point 93"
              },
              {
                "id": "CAP4-04-00093",
                "label": "p. 18; topic 4 point 93"
              }
            ]
          },
          {
            "id": "varying-load-zero-shear",
            "title": "Linearly varying load: zero shear at L/√3 from the unloaded end",
            "html": "<p>Let the intensity rise linearly from zero at support A to \\(w\\) at support B over a simple span \\(L\\). The total load \\(wL/2\\) acts \\(2L/3\\) from A, so moments about B give \\(R_A = wL/6\\). The load accumulated up to a section at \\(x\\) is \\(wx^2/(2L)\\), and subtracting it from the reaction gives the shear.</p><p>Setting that shear to zero puts the section at \\(L/\\sqrt{3}\\), about \\(0.577L\\) from the unloaded end. Shear changes from positive to negative there, so it is also the section of maximum moment. It is not at \\(L/3\\), not at midspan and not under the load resultant at \\(2L/3\\).</p><p>The chain also runs in reverse: a parabolic shear diagram implies a linearly varying load.</p>",
            "formulas": [
              {
                "label": "Reaction at the unloaded end",
                "tex": "R_A = \\dfrac{wL}{6}"
              },
              {
                "label": "Shear under the triangular load",
                "tex": "V(x) = \\dfrac{wL}{6} - \\dfrac{wx^2}{2L}"
              },
              {
                "label": "Zero-shear section",
                "tex": "x_0 = \\dfrac{L}{\\sqrt{3}} \\approx 0.577L"
              },
              {
                "label": "Maximum moment",
                "tex": "M_{\\text{max}} = \\dfrac{wL^2}{9\\sqrt{3}}"
              }
            ],
            "example": {
              "title": "Worked example: 6 m span, intensity rising to 12 kN/m",
              "html": "<ol><li>Total load: 12 × 6/2 = 36 kN, acting 4 m from A, so \\(R_A = 36 \\times 2/6 = 12\\) kN.</li><li>Intensity at x: \\(q = 2x\\) kN/m, so the load accumulated up to x is \\(x^2\\) kN.</li><li>Shear: \\(V = 12 - x^2 = 0\\) at \\(x = \\sqrt{12} \\approx 3.464\\) m from A.</li></ol><p>The maximum moment at that section is</p>\\[\\begin{aligned} M &amp;= 12(3.464) - \\dfrac{3.464^3}{3} \\\\ &amp;\\approx 27.7\\ \\text{kN·m} \\end{aligned}\\]"
            },
            "points": [
              {
                "html": "Under a load rising linearly from zero to 12 kN/m over a 6 m simple span, the shear vanishes 3.464 m from the unloaded end, at \\(L/\\sqrt{3}\\).",
                "sources": [
                  {
                    "id": "CAP4-04-00110",
                    "label": "p. 19; topic 4 point 109; topic 4 point 121"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00110",
                "label": "p. 19; topic 4 point 109; topic 4 point 121"
              }
            ]
          },
          {
            "id": "cantilever-tip-force",
            "title": "Cantilever with a tip force: rectangular shear and linear hogging moment",
            "html": "<p>Cut a weightless cantilever anywhere and keep the free-side segment. With only a downward tip force \\(P\\), that segment always contains the same force and no distributed load, so the shear diagram is a rectangle of height \\(P\\). Shear carries force units; a height of \\(PL\\) would be a moment, not a shear.</p><p>The lever arm of the tip force, however, grows with distance from the tip, so the moment grows linearly. Under the sagging-positive convention it is hogging: zero at the tip and largest at the fixed end, where its magnitude is \\(PL\\). The moment diagram is a triangle.</p><p>The maximum moment of a beam is therefore not always at its centre; supports and load arrangement decide the critical section. A uniform load on the same cantilever would instead give linearly varying shear and a parabolic moment diagram.</p>",
            "formulas": [
              {
                "label": "Shear under a tip force",
                "tex": "V(x) = P"
              },
              {
                "label": "Moment, x measured from the root",
                "tex": "M(x) = -P(L - x)"
              },
              {
                "label": "Root moment magnitude",
                "tex": "|M|_{\\text{max}} = PL"
              }
            ],
            "example": {
              "title": "Worked example: 10 kN at the tip of a 3 m cantilever",
              "html": "<ol><li>Shear: 10 kN at every section.</li><li>Moment: \\(M(x) = -10(3 - x)\\) kN·m, with x measured from the root.</li><li>At the root: −30 kN·m; at midspan: −15 kN·m; at the tip: zero.</li></ol><p>The moment therefore varies linearly from −30 kN·m at the fixed end to zero, and its largest magnitude, 30 kN·m, is at the fixed end rather than the centre.</p>"
            },
            "points": [
              {
                "html": "A cantilever carrying only a downward tip force \\(P\\) has a shear diagram that is a rectangle of height \\(P\\) from root to tip.",
                "sources": [
                  {
                    "id": "CAP4-04-00104",
                    "label": "p. 19; topic 4 point 105"
                  }
                ]
              },
              {
                "html": "With a 10 kN tip force on a 3 m cantilever, the sagging-positive moment varies linearly from −30 kN·m at the root to zero at the tip.",
                "sources": [
                  {
                    "id": "CAP4-04-00118",
                    "label": "p. 19; topic 4 point 119"
                  }
                ]
              },
              {
                "html": "For the same 10 kN tip force on a 3 m cantilever, the maximum moment magnitude is 30 kN·m at the fixed end, not at the centre.",
                "sources": [
                  {
                    "id": "CAP4-05-00111",
                    "label": "p. 22; topic 5 point 109"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00104",
                "label": "p. 19; topic 4 point 105"
              },
              {
                "id": "CAP4-04-00118",
                "label": "p. 19; topic 4 point 119"
              },
              {
                "id": "CAP4-05-00111",
                "label": "p. 22; topic 5 point 109"
              }
            ]
          },
          {
            "id": "suspension-bridge-load-path",
            "title": "Suspension bridges: tension cables, compression towers and walkway profile",
            "html": "<p>In a conventional suspension bridge, gravity load from the deck travels through <em>hangers</em> in tension into the sagging <em>main cables</em>, also in tension. The cables pass over <em>towers</em>, which act mainly in compression, and end in <em>anchorages</em> that resist the cable pull and deliver it to the ground.</p><p>Describing the system as a set of vertical struts, vertical cantilevers and columns misrepresents this primary load path: the suspended elements work in tension, not as compression members.</p><p>The walkway profile follows from the support geometry. If a walkway hangs at nearly constant offsets below sagging main cables stretched between end anchorages, it sags broadly with the cables. A level deck would need a different geometry, such as hangers of varying length. Type names used in trail-bridge catalogues are conventions of particular manuals; the mechanics alone do not establish any official classification.</p>",
            "points": [
              {
                "html": "Deck gravity load passes to tension hangers and main cables, then to compression towers and to anchorages that resist the cable pull.",
                "sources": [
                  {
                    "id": "CAP4-10-00179",
                    "label": "p. 42; rural point 7"
                  }
                ]
              },
              {
                "html": "A walkway hung at nearly constant offsets below sagging main cables forms a sagging walkway broadly following the main cables.",
                "sources": [
                  {
                    "id": "CAP4-10-00193",
                    "label": "p. 42; rural point 17"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00179",
                "label": "p. 42; rural point 7"
              },
              {
                "id": "CAP4-10-00193",
                "label": "p. 42; rural point 17"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Shear from moment",
            "tex": "V = \\dfrac{dM}{dx}"
          },
          {
            "label": "Load from shear",
            "tex": "\\dfrac{dV}{dx} = -q",
            "note": "Downward load intensity taken positive."
          },
          {
            "label": "Moment change over an interval",
            "tex": "M_2 - M_1 = \\int_{x_1}^{x_2} V\\,dx",
            "note": "No concentrated couple between the sections."
          },
          {
            "label": "Curvature and moment",
            "tex": "\\dfrac{1}{R} = \\dfrac{M}{EI}"
          },
          {
            "label": "Off-centre point load, left reaction",
            "tex": "R_A = \\dfrac{P(L-a)}{L}"
          },
          {
            "label": "Off-centre point load, peak moment",
            "tex": "M_{\\text{max}} = \\dfrac{Pa(L-a)}{L}"
          },
          {
            "label": "Central point load",
            "tex": "M_{\\text{max}} = \\dfrac{PL}{4}"
          },
          {
            "label": "Equal loads at the third points",
            "tex": "M = \\dfrac{WL}{3}",
            "note": "W is each load; constant over the middle third."
          },
          {
            "label": "Full-span UDL, shear",
            "tex": "V(x) = \\dfrac{wL}{2} - wx"
          },
          {
            "label": "Full-span UDL, moment",
            "tex": "M(x) = \\dfrac{wx(L-x)}{2}"
          },
          {
            "label": "Full-span UDL, maximum moment",
            "tex": "M_{\\text{max}} = \\dfrac{wL^2}{8} = \\dfrac{WL}{8}"
          },
          {
            "label": "Triangular load, zero-shear section",
            "tex": "x_0 = \\dfrac{L}{\\sqrt{3}} \\approx 0.577L",
            "note": "Measured from the unloaded end, where the reaction is \\(wL/6\\)."
          },
          {
            "label": "Cantilever with a tip force",
            "tex": "M(x) = -P(L - x)",
            "note": "Hogging, with largest magnitude \\(PL\\) at the fixed end."
          },
          {
            "label": "Couple on a cantilever",
            "tex": "V = 0,\\quad M = M_0"
          }
        ],
        "cautions": [
          {
            "id": "caution-end-couples-opposite-senses",
            "status": "review",
            "prompt": "A bending moment M at each support of a simply supported beam gives zero shear force at all sections",
            "html": "<p>True only when the two end couples act in opposite rotational senses, so that they cancel in overall moment equilibrium; the reactions are then zero and the moment is a constant \\(M\\). Couples in the same sense need a reaction pair of \\(2M/L\\), which gives constant nonzero shear.</p>",
            "sources": [
              {
                "id": "CAP4-04-00001",
                "label": "p. 15; topic 4 point 1"
              }
            ]
          },
          {
            "id": "caution-zero-shear-extremum",
            "status": "review",
            "prompt": "Where the shear force is zero, the bending moment is either a maximum or a minimum",
            "html": "<p>An extremum is established only when the shear changes sign through zero: positive to negative for a maximum, negative to positive for a minimum. Zero shear alone may mark an interval of constant moment or a stationary point that is not an extremum.</p>",
            "sources": [
              {
                "id": "CAP4-04-00002",
                "label": "p. 15; topic 4 point 2"
              }
            ]
          },
          {
            "id": "caution-midspan-design-shortcut",
            "status": "corrected",
            "prompt": "The bending moment at the centre is the value that matters when designing a beam",
            "html": "<p>Corrected: flexural design uses the largest moment wherever it occurs, read from the moment diagram. A 24 kN load 2 m from one support of a 6 m simple span peaks under the load at 32 kN·m, against 24 kN·m at midspan. Midspan governs many symmetric cases only.</p>",
            "sources": [
              {
                "id": "CAP4-04-00005",
                "label": "p. 15; topic 4 point 5"
              }
            ]
          },
          {
            "id": "caution-third-point-shear-extraction",
            "status": "review",
            "prompt": "Two equal loads P near both supports give a shear force of P at a short distance from support A",
            "html": "<p>The point-level extraction drops the fractions. The full page text places the loads at \\(L/3\\) from each support and the section at \\(L/6\\) from A. With that geometry each reaction is \\(P\\), and any section before the first load carries shear \\(+P\\).</p>",
            "sources": [
              {
                "id": "CAP4-04-00008",
                "label": "p. 15; topic 4 point 8"
              }
            ]
          },
          {
            "id": "caution-zero-end-moments",
            "status": "review",
            "prompt": "The bending moment at the end supports of a simply supported beam is zero",
            "html": "<p>This holds when the beam ends at its supports and carries no applied end couples or overhangs, since ideal pins and rollers supply no reaction couple. An applied end couple produces an equal end moment, and a simple support beneath a continuous beam does not force the internal moment to zero.</p>",
            "sources": [
              {
                "id": "CAP4-04-00049",
                "label": "p. 17; topic 4 point 47"
              }
            ]
          },
          {
            "id": "caution-varying-load-zero-shear",
            "status": "review",
            "prompt": "For a load varying from zero to w over span a, shear is zero at a/√3 from the least loaded end",
            "html": "<p>The extracted capsule text loses the radical and can be misread as a/3. Equilibrium requires \\(a/\\sqrt{3} \\approx 0.577a\\), which is 3.464 m for a 6 m span; a/3 would be wrong. The printed typography was not checked against the page image.</p>",
            "sources": [
              {
                "id": "CAP4-04-00110",
                "label": "p. 19; topic 4 point 109; topic 4 point 121"
              }
            ]
          },
          {
            "id": "caution-moment-independent-of-section",
            "status": "review",
            "prompt": "Bending moment in a beam is not a function of the cross-section of the beam",
            "html": "<p>Valid for a statically determinate beam in first-order analysis with the applied loads unchanged. If self-weight changes with the section, or the structure is indeterminate so that member stiffness distributes the load, the moments can change.</p>",
            "sources": [
              {
                "id": "CAP4-05-00046",
                "label": "p. 20; topic 5 point 45"
              }
            ]
          },
          {
            "id": "caution-magnitude-meaning",
            "status": "corrected",
            "prompt": "The word magnitude means enormity",
            "html": "<p>Corrected: in mechanics, magnitude is the non-negative size of a vector quantity. A component of −18 kN with upward positive has magnitude 18 kN and acts downward; the everyday sense of enormity does not apply.</p>",
            "sources": [
              {
                "id": "CAP4-05-00070",
                "label": "p. 21; topic 5 point 68"
              }
            ]
          },
          {
            "id": "caution-midspan-designed-for-bending",
            "status": "review",
            "prompt": "The middle span of a simply supported beam is designed to resist bending moments",
            "html": "<p>Midspan carries the maximum sagging moment, with zero shear, under symmetric loading such as a full-span UDL. The words simply supported alone do not fix the critical section: an off-centre point load moves the peak under the load.</p>",
            "sources": [
              {
                "id": "CAP4-05-00108",
                "label": "p. 22; topic 5 point 106"
              }
            ]
          },
          {
            "id": "caution-cantilever-midspan-couple",
            "status": "review",
            "prompt": "A moment M applied at the centre of a cantilever gives a fixed-end shear force and bending moment of 0M",
            "html": "<p>The run-together 0M is read as zero shear and a moment of magnitude \\(M\\). Equilibrium supports that reading independently: a couple adds no transverse force, so the fixed end supplies only a reaction couple equal to the applied one.</p>",
            "sources": [
              {
                "id": "CAP4-05-00110",
                "label": "p. 22; topic 5 point 108"
              }
            ]
          },
          {
            "id": "caution-designed-at-centre",
            "status": "corrected",
            "prompt": "A flexural member is designed for the maximum bending moment at its centre",
            "html": "<p>Corrected: the design moment is the maximum wherever it occurs. A cantilever with a tip force has zero moment at the tip and its maximum at the fixed end, 30 kN·m for 10 kN on 3 m, not at the centre.</p>",
            "sources": [
              {
                "id": "CAP4-05-00111",
                "label": "p. 22; topic 5 point 109"
              }
            ]
          },
          {
            "id": "caution-third-point-midspan-moment",
            "status": "review",
            "prompt": "Two equal loads W at L/3 from either support give a midspan bending moment of WL/3",
            "html": "<p>The load distance comes from the full page text, and the extracted W3L is reconstructed as \\(WL/3\\) by equilibrium, not by image inspection. With \\(W\\) as each load, 30 kN loads on a 9 m span give 90 kN·m, which agrees with \\(WL/3\\).</p>",
            "sources": [
              {
                "id": "CAP4-05-00138",
                "label": "p. 23; topic 5 point 139"
              }
            ]
          },
          {
            "id": "caution-suspension-bridge-members",
            "status": "corrected",
            "prompt": "Suspension bridges use vertical struts, vertical cantilevers and vertical columns as structural components",
            "html": "<p>Corrected: the primary load path runs from the deck to tension hangers and main cables, then to compression towers and to anchorages that resist the cable pull. A list of vertical compression members does not describe how the suspended system carries load.</p>",
            "sources": [
              {
                "id": "CAP4-10-00179",
                "label": "p. 42; rural point 7"
              }
            ]
          },
          {
            "id": "caution-d-type-label",
            "status": "review",
            "prompt": "Suspended trail bridges are also called D-type",
            "html": "<p>This designation could not be verified against a trail-bridge manual, so it is not taught as an established classification. The dependable point is mechanical: a walkway hung at nearly constant offsets below sagging cables will itself sag.</p>",
            "sources": [
              {
                "id": "CAP4-10-00193",
                "label": "p. 42; rural point 17"
              }
            ]
          }
        ],
        "gaps": [
          "Axial-force diagrams, inclined members and frames are not examined; the questions cover horizontal beams under transverse loads and couples only.",
          "Overhanging beams, internal hinges and combined point-plus-distributed loading are not worked, so superposition of mixed load cases needs separate practice.",
          "The suspension-bridge items describe load paths qualitatively; cable forces, sag ratios and tower design lie outside this capsule coverage.",
          "The D-type trail-bridge designation remains unverified against any official manual."
        ]
      },
      "ACiE0402": {
        "code": "ACiE0402",
        "questionCount": 17,
        "format": 2,
        "summary": "<p>This subchapter covers the elastic constants and their isotropic relations, principal stresses and planes found from Mohr's circle, the planes of maximum shear, the stages of the engineering stress-strain curve with ductility measures, and elastic torsion of solid circular shafts. The capsule questions test moduli from test data, Poisson's ratio from pairs of constants, zero shear on principal planes, principal-stress values, ultimate strength, reduction of area and the torsional shear distribution.</p>",
        "blocks": [
          {
            "id": "moduli-from-test-data",
            "title": "Moduli from test data: Young's modulus and modulus of rigidity",
            "html": "<p>Each elastic modulus pairs one kind of stress with its own matching strain, measured within the linear range. Strain is dimensionless, so every modulus carries stress units; converting MPa to GPa, a division by 1000, completes most calculations.</p><ul><li><em>Young's modulus</em> \\(E\\), the modulus of elasticity, is axial normal stress divided by the corresponding longitudinal strain in uniaxial loading within the proportional range.</li><li><em>Modulus of rigidity</em> \\(G\\), the shear modulus, is shear stress divided by engineering shear strain \\(\\gamma\\), the total change of a right angle in radians.</li></ul><p>Two traps recur. The tensor shear-strain component equals \\(\\gamma/2\\), so using it in place of \\(\\gamma\\) doubles the computed \\(G\\). The bulk modulus \\(K\\) pairs hydrostatic pressure with volumetric strain, so neither it nor \\(G\\) can come from a single axial stress and strain pair.</p>",
            "formulas": [
              {
                "label": "Young's modulus",
                "tex": "E = \\dfrac{\\sigma}{\\varepsilon}"
              },
              {
                "label": "Modulus of rigidity",
                "tex": "G = \\dfrac{\\tau}{\\gamma}",
                "where": "<p>\\(\\gamma\\) is the engineering shear strain; the tensor component is \\(\\varepsilon_{xy} = \\gamma/2\\).</p>"
              }
            ],
            "example": {
              "title": "Worked examples: an axial test and a shear test",
              "html": "<p>Axial test in the proportional range, 120 MPa at a strain of 0.0006:</p>\\[\\begin{aligned} E &amp;= \\dfrac{120}{0.0006} = 200\\,000\\ \\text{MPa} \\\\ &amp;= 200\\ \\text{GPa} \\end{aligned}\\]<p>Shear test, 30 MPa at an engineering shear strain of 0.0004 rad:</p>\\[\\begin{aligned} G &amp;= \\dfrac{30}{0.0004} = 75\\,000\\ \\text{MPa} \\\\ &amp;= 75\\ \\text{GPa} \\end{aligned}\\]<p>Using the tensor component 0.0002 instead of 0.0004 would give 150 GPa, twice the true value.</p>"
            },
            "points": [
              {
                "html": "A longitudinal stress of 120 MPa with strain 0.0006 in the proportional range gives Young's modulus, 200 GPa.",
                "sources": [
                  {
                    "id": "CAP4-04-00064",
                    "label": "p. 17; topic 4 point 64"
                  }
                ]
              },
              {
                "html": "A shear stress of 30 MPa with an engineering shear strain of 0.0004 rad gives a shear modulus of 75 GPa.",
                "sources": [
                  {
                    "id": "CAP4-04-00059",
                    "label": "p. 17; topic 4 point 58; topic 4 point 61"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00064",
                "label": "p. 17; topic 4 point 64"
              },
              {
                "id": "CAP4-04-00059",
                "label": "p. 17; topic 4 point 58; topic 4 point 61"
              }
            ]
          },
          {
            "id": "isotropic-constant-relations",
            "title": "Isotropic relations linking E, G, K and Poisson's ratio",
            "html": "<p>For a homogeneous, isotropic, linear-elastic material only two elastic constants are independent. Any two therefore fix the others through two identities, one involving the shear modulus \\(G\\) and one the bulk modulus \\(K\\).</p><p>Keep the forms straight. The factor \\(1 + \\nu\\) belongs with \\(G\\), and the factor \\(1 - 2\\nu\\) belongs with \\(K\\); an expression built from \\(2K\\) plus one is not a valid elastic identity. When solving for \\(G\\), divide \\(E\\) by \\(2(1 + \\nu)\\). Multiplying instead gives a value that contradicts the stated Poisson ratio.</p><p>All of these identities assume isotropy. Anisotropic materials need direction-dependent constants, and the relations must not be imposed on them.</p>",
            "formulas": [
              {
                "label": "Relation with the shear modulus",
                "tex": "E = 2G(1 + \\nu)"
              },
              {
                "label": "Relation with the bulk modulus",
                "tex": "E = 3K(1 - 2\\nu)"
              },
              {
                "label": "Poisson's ratio from E and G",
                "tex": "\\nu = \\dfrac{E}{2G} - 1"
              },
              {
                "label": "Poisson's ratio from E and K",
                "tex": "\\nu = \\dfrac{3K - E}{6K}"
              }
            ],
            "example": {
              "title": "Worked examples: three pairs of constants",
              "html": "<ol><li>\\(E = 210\\) GPa and \\(G = 84\\) GPa: \\(\\nu = 210/168 - 1 = 0.25\\). The intermediate 1.25 is \\(1 + \\nu\\), not \\(\\nu\\).</li><li>\\(E = 200\\) GPa and \\(\\nu = 0.25\\): \\(G = 200/2.5 = 80\\) GPa. Multiplying, \\(E(1 + \\nu)/2\\), would give 125 GPa.</li><li>\\(E = 150\\) GPa and \\(K = 100\\) GPa: \\(\\nu = (300 - 150)/600 = 0.25\\).</li></ol>"
            },
            "moreHtml": "<p>Eliminating \\(E\\) links the other two constants:</p>\\[\\dfrac{K}{G} = \\dfrac{2(1 + \\nu)}{3(1 - 2\\nu)}\\]<p>This is about 1.67 at \\(\\nu = 0.25\\). As \\(\\nu\\) approaches 0.5 the factor \\(1 - 2\\nu\\) approaches zero and \\(K\\) grows without limit, the incompressible limit.</p>",
            "points": [
              {
                "html": "Isotropic \\(E = 210\\) GPa and \\(G = 84\\) GPa require \\(\\nu = E/(2G) - 1 = 0.25\\); the value 1.25 is \\(1 + \\nu\\).",
                "sources": [
                  {
                    "id": "CAP4-04-00018",
                    "label": "p. 15; topic 4 point 17"
                  }
                ]
              },
              {
                "html": "With \\(E = 200\\) GPa and \\(\\nu = 0.25\\), the consistent shear modulus is \\(G = E/[2(1 + \\nu)] = 80\\) GPa.",
                "sources": [
                  {
                    "id": "CAP4-04-00080",
                    "label": "p. 18; topic 4 point 79"
                  }
                ]
              },
              {
                "html": "With \\(E = 150\\) GPa and \\(K = 100\\) GPa, the relation \\(E = 3K(1 - 2\\nu)\\) gives a Poisson's ratio of 0.25.",
                "sources": [
                  {
                    "id": "CAP4-05-00142",
                    "label": "p. 23; topic 5 point 143"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00018",
                "label": "p. 15; topic 4 point 17"
              },
              {
                "id": "CAP4-04-00080",
                "label": "p. 18; topic 4 point 79"
              },
              {
                "id": "CAP4-05-00142",
                "label": "p. 23; topic 5 point 143"
              }
            ]
          },
          {
            "id": "principal-planes-maximum-shear",
            "title": "Principal planes, zero shear and the planes of maximum shear",
            "html": "<p>A <em>principal plane</em> is a plane on which the traction is purely normal, so the shear traction on it is zero. The normal stress it carries is a <em>principal stress</em>. Planes are orientations and principal stresses are values, so the two terms are not interchangeable. A principal stress may be the major, intermediate or minor value, and it may be tensile, compressive or zero.</p><p>Maximum shear acts on planes midway between principal directions, at 45° to them, never on the principal planes themselves. In plane stress the out-of-plane principal stress is zero, and it must be counted when the absolute maximum shear is wanted.</p><p>Uniaxial tension is the simplest case: the principal stresses are the axial stress and two zeros. The maximum shear is half the axial stress, on planes inclined at 45° to the transverse section, while the transverse section itself and planes parallel to the axis carry no shear.</p>",
            "formulas": [
              {
                "label": "In-plane maximum shear",
                "tex": "\\tau_{\\text{max}} = \\dfrac{\\sigma_1 - \\sigma_2}{2}"
              },
              {
                "label": "Absolute maximum shear",
                "tex": "\\tau_{\\text{abs}} = \\dfrac{\\sigma_{\\text{max}} - \\sigma_{\\text{min}}}{2}",
                "where": "<p>Use the largest and smallest of all three principal stresses, including the zero out-of-plane value in plane stress.</p>"
              },
              {
                "label": "Uniaxial stress",
                "tex": "\\tau_{\\text{max}} = \\dfrac{\\sigma}{2}",
                "where": "<p>Acts on planes at 45° to the transverse section.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: principal stresses of 80 and 20 MPa, and a bar in tension",
              "html": "<p>Plane stress whose in-plane principal stresses are 80 MPa and 20 MPa:</p><ul><li>The plane carrying 80 MPa is a principal plane, so its shear is 0 MPa.</li><li>In-plane maximum shear: (80 − 20)/2 = 30 MPa, on planes at 45° to the principal planes.</li><li>Absolute maximum shear, counting the zero out-of-plane stress: (80 − 0)/2 = 40 MPa.</li></ul><p>A bar carrying 80 kN over 800 mm² has \\(\\sigma = 80\\,000/800 = 100\\) MPa and principal stresses of 100, 0 and 0 MPa. Its maximum shear is 100/2 = 50 MPa, on planes inclined at 45° to the transverse section.</p>"
            },
            "points": [
              {
                "html": "A plane whose traction is purely normal is a principal plane with zero shear traction; its normal stress may be major, intermediate or minor.",
                "sources": [
                  {
                    "id": "CAP4-04-00019",
                    "label": "pp. 15, 19; topic 4 point 18; topic 4 point 117"
                  }
                ]
              },
              {
                "html": "The plane carrying the 80 MPa principal stress has 0 MPa shear; the 30 MPa in-plane and 40 MPa absolute maxima act on other planes.",
                "sources": [
                  {
                    "id": "CAP4-04-00020",
                    "label": "p. 15; topic 4 point 19"
                  }
                ]
              },
              {
                "html": "An 80 kN axial tension on 800 mm² gives 100 MPa and a maximum shear of 50 MPa on planes inclined 45 degrees to the transverse section.",
                "sources": [
                  {
                    "id": "CAP4-04-00100",
                    "label": "pp. 18, 19; topic 4 point 100; topic 4 point 114"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00019",
                "label": "pp. 15, 19; topic 4 point 18; topic 4 point 117"
              },
              {
                "id": "CAP4-04-00020",
                "label": "p. 15; topic 4 point 19"
              },
              {
                "id": "CAP4-04-00100",
                "label": "pp. 18, 19; topic 4 point 100; topic 4 point 114"
              }
            ]
          },
          {
            "id": "mohr-circle-principal-stresses",
            "title": "Principal stresses from the Mohr-circle centre and radius",
            "html": "<p>For a plane-stress element with normal stresses \\(\\sigma_x\\), \\(\\sigma_y\\) and shear \\(\\tau_{xy}\\), Mohr's circle is centred at the mean stress, with a radius set by half the normal-stress difference and the shear. The principal stresses are the centre plus and minus the radius, and the in-plane maximum shear equals the radius.</p><p>The commonest slip is to add the full \\(\\sigma_x\\) to the radius instead of the mean stress \\(\\sigma_x/2\\) when only one normal stress acts. A quick check is that the two principal stresses always add up to \\(\\sigma_x + \\sigma_y\\).</p><p>Principal directions come from stress transformation. They are not automatically the geometric diagonals of the element; they lie at 45° to the axes only when \\(\\sigma_x = \\sigma_y\\) with shear present.</p>",
            "formulas": [
              {
                "label": "Mohr-circle centre, the mean stress",
                "tex": "C = \\dfrac{\\sigma_x + \\sigma_y}{2}"
              },
              {
                "label": "Mohr-circle radius",
                "tex": "R = \\sqrt{\\left(\\dfrac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}"
              },
              {
                "label": "Principal stresses",
                "tex": "\\sigma_{1,2} = C \\pm R",
                "where": "<p>The in-plane maximum shear equals \\(R\\).</p>"
              },
              {
                "label": "Principal direction",
                "tex": "\\tan 2\\theta_p = \\dfrac{2\\tau_{xy}}{\\sigma_x - \\sigma_y}"
              }
            ],
            "example": {
              "title": "Worked examples: two elements with 40 MPa shear",
              "html": "<p>Element with \\(\\sigma_x = 60\\) MPa, \\(\\sigma_y = 0\\) and \\(\\tau_{xy} = 40\\) MPa:</p>\\[\\begin{aligned} C &amp;= 30\\ \\text{MPa} \\\\ R &amp;= \\sqrt{30^2 + 40^2} = 50\\ \\text{MPa} \\\\ \\sigma_{1,2} &amp;= 30 \\pm 50 \\\\ &amp;= 80\\ \\text{or}\\ -20\\ \\text{MPa} \\end{aligned}\\]<p>Element with \\(\\sigma_x = 70\\) MPa, \\(\\sigma_y = 10\\) MPa and \\(\\tau_{xy} = 40\\) MPa: \\(C = 40\\) MPa and again \\(R = 50\\) MPa, so the principal stresses are 90 MPa and −10 MPa.</p><p>Checks: 80 − 20 = 60 and 90 − 10 = 80, the sums of the normal stresses. Adding the full 60 MPa to the radius would wrongly give 110 MPa.</p>"
            },
            "moreHtml": "<p>In both examples \\(\\tan 2\\theta_p = 80/60\\), so \\(2\\theta_p \\approx 53.1^\\circ\\) and the major principal plane lies about 26.6° from the x-plane, not at 45°. Substituting that angle in the transformation equation recovers 80 MPa and 90 MPa respectively.</p>",
            "points": [
              {
                "html": "For \\(\\sigma_x = 60\\) MPa, \\(\\sigma_y = 0\\) and \\(\\tau_{xy} = 40\\) MPa the circle has centre 30 MPa and radius 50 MPa, so the major principal stress is 80 MPa.",
                "sources": [
                  {
                    "id": "CAP4-04-00054",
                    "label": "p. 17; topic 4 point 52"
                  }
                ]
              },
              {
                "html": "For \\(\\sigma_x = 70\\), \\(\\sigma_y = 10\\) and \\(\\tau_{xy} = 40\\) MPa the principal stresses are 40 ± 50, that is 90 MPa and −10 MPa.",
                "sources": [
                  {
                    "id": "CAP4-04-00075",
                    "label": "p. 17; topic 4 point 73"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00054",
                "label": "p. 17; topic 4 point 52"
              },
              {
                "id": "CAP4-04-00075",
                "label": "p. 17; topic 4 point 73"
              }
            ]
          },
          {
            "id": "stress-strain-curve-stages",
            "title": "Stages of the engineering stress-strain curve and ultimate strength",
            "html": "<p>For a conventional ductile mild-steel tensile test with distinct limits, the engineering stress-strain curve passes these stages in order:</p><ol><li><em>Proportional limit</em>: end of the straight portion where Hooke's law, stress proportional to strain, applies.</li><li><em>Elastic limit</em>: the largest stress from which unloading still gives full recovery; the response may already be slightly nonlinear.</li><li><em>Yield</em>: onset of appreciable plastic flow.</li><li><em>Ultimate stress</em>: the peak engineering stress after strain hardening, followed by necking.</li><li><em>Fracture</em>, the breaking point.</li></ol><p>Proportionality and elasticity are different properties. A specimen that recovers completely after unloading from the curved part of the diagram has passed its proportional limit without necessarily passing its elastic limit. Hooke's law ending at the proportional limit is a material fact, not a rule created by limit-state design. Many materials do not show sharply separated stages.</p>",
            "formulas": [
              {
                "label": "Engineering ultimate tensile strength",
                "tex": "\\sigma_u = \\dfrac{P_{\\text{max}}}{A_0}",
                "where": "<p>\\(A_0\\) is the original cross-sectional area, not the necked area.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a 60 kN peak force on 200 mm²",
              "html": "<p>Engineering ultimate tensile strength uses the peak recorded force and the original area:</p>\\[\\sigma_u = \\dfrac{60\\,000\\ \\text{N}}{200\\ \\text{mm}^2} = 300\\ \\text{MPa}\\]<p>The later, smaller fracture force divided by the necked area is a true-stress measure, and neither value generally equals the yield stress.</p>"
            },
            "points": [
              {
                "html": "Full recovery after unloading from a nonlinear part of the curve shows the proportional limit has been passed, while the elastic limit may not have been.",
                "sources": [
                  {
                    "id": "CAP4-04-00070",
                    "label": "p. 17; topic 4 point 68"
                  }
                ]
              },
              {
                "html": "For conventional ductile mild steel the order is proportional limit, elastic limit, yield, ultimate stress, then fracture.",
                "sources": [
                  {
                    "id": "CAP4-04-00095",
                    "label": "p. 18; topic 4 point 95"
                  }
                ]
              },
              {
                "html": "A 60 kN peak force on an original area of 200 mm² gives an engineering ultimate tensile strength of 300 MPa.",
                "sources": [
                  {
                    "id": "CAP4-04-00082",
                    "label": "p. 18; topic 4 point 81"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00070",
                "label": "p. 17; topic 4 point 68"
              },
              {
                "id": "CAP4-04-00095",
                "label": "p. 18; topic 4 point 95"
              },
              {
                "id": "CAP4-04-00082",
                "label": "p. 18; topic 4 point 81"
              }
            ]
          },
          {
            "id": "ductility-measures",
            "title": "Ductility: permanent elongation and reduction of area",
            "html": "<p><em>Ductility</em> is the capacity to undergo appreciable plastic deformation before fracture. Elongation alone does not define it: every material stretches elastically under tension, brittle ones included, and that elastic stretch disappears on unloading. What demonstrates ductility is substantial permanent elongation before rupture.</p><p>Two standard measures compare specimens tested under comparable conditions: the percentage elongation of the gauge length and the percentage reduction of area, where the final area is the minimum area at fracture. The reduction, not the final area itself, is the measure.</p><p>A large reduction of area reflects large local plastic contraction, or necking. It does not by itself imply a higher elastic modulus or ultimate strength: a steep initial slope shows stiffness, and a high fracture stress with negligible extension describes a strong but brittle response.</p>",
            "formulas": [
              {
                "label": "Percentage reduction of area",
                "tex": "\\text{RA} = \\dfrac{A_0 - A_f}{A_0} \\times 100\\%"
              },
              {
                "label": "Percentage elongation",
                "tex": "\\text{EL} = \\dfrac{L_f - L_0}{L_0} \\times 100\\%",
                "where": "<p>\\(L_0\\) and \\(L_f\\) are the original and final gauge lengths.</p>"
              }
            ],
            "example": {
              "title": "Worked example: two specimens starting at 100 mm²",
              "html": "<ol><li>First specimen, 60 mm² at fracture: RA = (100 − 60)/100 × 100% = 40%.</li><li>Second specimen, 75 mm² at fracture: RA = (100 − 75)/100 × 100% = 25%.</li></ol><p>The first specimen shows the larger plastic contraction, so it is the more ductile of the two under comparable tests.</p>"
            },
            "points": [
              {
                "html": "Specimens of 100 mm² that fracture at 60 mm² and 75 mm² show reductions of area of 40% and 25%, so the first is more ductile.",
                "sources": [
                  {
                    "id": "CAP4-04-00009",
                    "label": "p. 15; topic 4 point 9"
                  }
                ]
              },
              {
                "html": "Ductility is demonstrated by substantial plastic elongation before fracture, not by recoverable elastic stretch.",
                "sources": [
                  {
                    "id": "CAP4-04-00076",
                    "label": "p. 17; topic 4 point 74"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00009",
                "label": "p. 15; topic 4 point 9"
              },
              {
                "id": "CAP4-04-00076",
                "label": "p. 17; topic 4 point 74"
              }
            ]
          },
          {
            "id": "torsion-circular-shaft",
            "title": "Torsion of circular shafts: shear grows linearly from the axis",
            "html": "<p>In elastic Saint-Venant torsion of a circular shaft, cross-sections rotate as rigid discs and shear strain grows in proportion to the radial distance from the axis. The torsional shear stress therefore grows linearly with radius, and \\(J\\), the polar second moment of the whole section, sets its scale.</p><ul><li>On the longitudinal axis the radial distance is zero, so the torsional shear stress is zero. \\(J\\) belongs to the entire section and is not zero at the axis; the zero comes from \\(r\\).</li><li>At the outer surface, \\(r = D/2\\), the stress reaches its maximum. Halfway to the surface it is half the maximum.</li></ul><p>These statements concern torsional shear only. An added axial load or bending moment superimposes normal stresses, which need not vanish at the axis.</p>",
            "formulas": [
              {
                "label": "Torsion formula",
                "tex": "\\tau = \\dfrac{Tr}{J}"
              },
              {
                "label": "Polar second moment, solid circle",
                "tex": "J = \\dfrac{\\pi D^4}{32}"
              },
              {
                "label": "Maximum torsional shear, solid circle",
                "tex": "\\tau_{\\text{max}} = \\dfrac{16T}{\\pi D^3}"
              }
            ],
            "example": {
              "title": "Worked example: 2 kN·m on a 100 mm solid shaft",
              "html": "<p>With \\(T = 2 \\times 10^6\\) N·mm and \\(D = 100\\) mm,</p>\\[\\begin{aligned} \\tau_{\\text{max}} &amp;= \\dfrac{16 \\times 2 \\times 10^6}{\\pi \\times 100^3} \\\\ &amp;= \\dfrac{32}{\\pi} \\approx 10.19\\ \\text{MPa} \\end{aligned}\\]<p>This acts at the outer surface. Halfway to the surface the stress is about 5.09 MPa, and on the axis it is zero.</p>"
            },
            "points": [
              {
                "html": "In elastic torsion of a solid circular shaft the shear stress on the axis is zero, because the radial distance there is zero.",
                "sources": [
                  {
                    "id": "CAP4-04-00022",
                    "label": "p. 15; topic 4 point 21"
                  }
                ]
              },
              {
                "html": "A 2 kN·m torque on a 100 mm solid shaft gives a maximum shear of 10.19 MPa at the outer surface, from \\(16T/(\\pi D^3)\\).",
                "sources": [
                  {
                    "id": "CAP4-04-00107",
                    "label": "p. 19; topic 4 point 107"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00022",
                "label": "p. 15; topic 4 point 21"
              },
              {
                "id": "CAP4-04-00107",
                "label": "p. 19; topic 4 point 107"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Young's modulus",
            "tex": "E = \\dfrac{\\sigma}{\\varepsilon}"
          },
          {
            "label": "Modulus of rigidity",
            "tex": "G = \\dfrac{\\tau}{\\gamma}",
            "note": "Use the engineering shear strain."
          },
          {
            "label": "Isotropic relation with G",
            "tex": "E = 2G(1 + \\nu)"
          },
          {
            "label": "Isotropic relation with K",
            "tex": "E = 3K(1 - 2\\nu)"
          },
          {
            "label": "Mohr-circle centre",
            "tex": "C = \\dfrac{\\sigma_x + \\sigma_y}{2}"
          },
          {
            "label": "Mohr-circle radius",
            "tex": "R = \\sqrt{\\left(\\dfrac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}"
          },
          {
            "label": "Principal stresses",
            "tex": "\\sigma_{1,2} = C \\pm R"
          },
          {
            "label": "Principal direction",
            "tex": "\\tan 2\\theta_p = \\dfrac{2\\tau_{xy}}{\\sigma_x - \\sigma_y}"
          },
          {
            "label": "Absolute maximum shear",
            "tex": "\\tau_{\\text{abs}} = \\dfrac{\\sigma_{\\text{max}} - \\sigma_{\\text{min}}}{2}",
            "note": "Count the zero out-of-plane stress in plane stress."
          },
          {
            "label": "Uniaxial maximum shear",
            "tex": "\\tau_{\\text{max}} = \\dfrac{\\sigma}{2}",
            "note": "On planes at 45° to the transverse section."
          },
          {
            "label": "Engineering ultimate tensile strength",
            "tex": "\\sigma_u = \\dfrac{P_{\\text{max}}}{A_0}"
          },
          {
            "label": "Percentage reduction of area",
            "tex": "\\text{RA} = \\dfrac{A_0 - A_f}{A_0} \\times 100\\%"
          },
          {
            "label": "Torsion formula",
            "tex": "\\tau = \\dfrac{Tr}{J}"
          },
          {
            "label": "Solid shaft, maximum torsional shear",
            "tex": "\\tau_{\\text{max}} = \\dfrac{16T}{\\pi D^3}",
            "note": "At the outer surface; zero on the axis."
          }
        ],
        "cautions": [
          {
            "id": "caution-principal-stress-mean-term",
            "status": "corrected",
            "prompt": "Direct stress σx with shear τxy gives a maximum normal stress of σx + ½√(σx² + 4τxy²)",
            "html": "<p>Corrected: the mean-stress term is \\(\\sigma_x/2\\), not \\(\\sigma_x\\). The maximum normal stress is</p>\\[\\sigma_1 = \\dfrac{\\sigma_x}{2} + \\dfrac{1}{2}\\sqrt{\\sigma_x^2 + 4\\tau_{xy}^2}\\]<p>With 60 MPa and 40 MPa this gives 30 + 50 = 80 MPa, not 110 MPa.</p>",
            "sources": [
              {
                "id": "CAP4-04-00054",
                "label": "p. 17; topic 4 point 52"
              }
            ]
          },
          {
            "id": "caution-hooke-limit-state",
            "status": "review",
            "prompt": "In limit state design, Hooke's law is valid up to the proportional limit",
            "html": "<p>The proportional limit is a material property that bounds Hooke's linear law in any analysis; limit-state design neither creates nor extends it. Elastic recovery can continue beyond the proportional limit into nonlinear response.</p>",
            "sources": [
              {
                "id": "CAP4-04-00070",
                "label": "p. 17; topic 4 point 68"
              }
            ]
          },
          {
            "id": "caution-principal-diagonal-plane",
            "status": "corrected",
            "prompt": "The major principal stress is produced on the diagonal plane",
            "html": "<p>Corrected: principal planes follow from stress transformation and are generally not the geometric diagonals of the element. The restored expression, mean stress plus Mohr radius, gives 90 MPa for \\(\\sigma_x = 70\\), \\(\\sigma_y = 10\\) and \\(\\tau_{xy} = 40\\) MPa, on a plane about 26.6° from the x-plane.</p>",
            "sources": [
              {
                "id": "CAP4-04-00075",
                "label": "p. 17; topic 4 point 73"
              }
            ]
          },
          {
            "id": "caution-ductility-definition",
            "status": "corrected",
            "prompt": "The property in which elongation of a material occurs due to a tensile load is called ductility",
            "html": "<p>Corrected: elastic elongation occurs in brittle materials too. Ductility is the capacity for substantial plastic, permanent deformation before fracture, measured by percentage elongation or reduction of area.</p>",
            "sources": [
              {
                "id": "CAP4-04-00076",
                "label": "p. 17; topic 4 point 74"
              }
            ]
          },
          {
            "id": "caution-ultimate-stress-definition",
            "status": "review",
            "prompt": "The maximum stress a material can resist is called ultimate stress",
            "html": "<p>Made precise: engineering ultimate tensile strength is the maximum recorded force divided by the original area, 300 MPa for 60 kN on 200 mm². The fracture force over the necked area is a different, true-stress quantity.</p>",
            "sources": [
              {
                "id": "CAP4-04-00082",
                "label": "p. 18; topic 4 point 81"
              }
            ]
          },
          {
            "id": "caution-stress-strain-sequence",
            "status": "review",
            "prompt": "The sequence of the stress-strain curve is proportional limit, elastic limit, yield point, breaking point",
            "html": "<p>The capsule list omits the ultimate stress, the peak reached after strain hardening and before necking. The complete idealized order describes a conventional ductile mild-steel curve; many materials do not show sharply separated stages.</p>",
            "sources": [
              {
                "id": "CAP4-04-00095",
                "label": "p. 18; topic 4 point 95"
              }
            ]
          },
          {
            "id": "caution-bulk-modulus-poisson",
            "status": "corrected",
            "prompt": "Poisson's ratio from Young's modulus and bulk modulus is given by an expression in 2K + 1",
            "html": "<p>Corrected: the isotropic relation is \\(E = 3K(1 - 2\\nu)\\), so \\(\\nu = (3K - E)/(6K)\\), and \\(E = 150\\) GPa with \\(K = 100\\) GPa gives 0.25. The relation containing \\(1 + \\nu\\) is \\(E = 2G(1 + \\nu)\\) and involves the shear modulus, not \\(K\\).</p>",
            "sources": [
              {
                "id": "CAP4-05-00142",
                "label": "p. 23; topic 5 point 143"
              }
            ]
          }
        ],
        "gaps": [
          "Stress transformation at arbitrary plane angles, strain transformation and strain rosettes are not examined numerically.",
          "Torsion is limited to solid circular shafts; hollow shafts, angle of twist, power transmission and non-circular sections are not covered.",
          "Stress-strain behaviour is described for idealized ductile steel; offset yield determination, true-stress curves and temperature or loading-rate effects are not treated.",
          "Thin cylinders, combined bending with torsion and failure theories lie outside these questions."
        ]
      },
      "ACiE0403": {
        "code": "ACiE0403",
        "questionCount": 22,
        "format": 2,
        "summary": "<p>This subchapter covers elastic bending and ideal column buckling: the flexure formula and the linear stress distribution, section modulus, flexural rigidity and curvature, transverse shear in rectangular sections, standard deflections under different end restraints, the conjugate-beam support rules, and Euler loads with effective lengths and slenderness. The capsule questions test stress and curvature calculations, deflection coefficients and ratios, effective-length factors, exact and approximate fixed-pinned loads, and the governing slenderness ratio.</p>",
        "blocks": [
          {
            "id": "flexure-formula",
            "title": "The flexure formula: linear bending stress and the neutral axis",
            "html": "<p>Elementary beam theory assumes that plane sections remain plane, that the material is homogeneous and linear-elastic, and that deformations are small. Strain then varies linearly with the distance \\(y\\) from the neutral axis, and so does stress. With sagging-positive \\(M\\) and \\(y\\) measured upward, the top fibres are in compression and the bottom fibres in tension.</p><p>The three ratios of the <em>flexure formula</em> tie moment, stress and curvature together. Its stress part gives the bending stress at any fibre; its curvature part is used in the next section.</p><p>At the neutral axis \\(y = 0\\), so the longitudinal bending stress there is zero when no axial force acts. Shear stress need not vanish there when the beam also carries transverse shear.</p><p>Linearity needs elastic behaviour. Pure bending alone does not guarantee it: after yielding the stress distribution becomes nonlinear, approaching rectangular blocks at full plasticity.</p>",
            "formulas": [
              {
                "label": "Flexure formula",
                "tex": "\\dfrac{M}{I} = \\dfrac{\\sigma}{y} = \\dfrac{E}{R}"
              },
              {
                "label": "Bending stress at a fibre",
                "tex": "\\sigma = \\dfrac{My}{I}",
                "where": "<p>\\(y\\) is the distance from the neutral axis; the fibre side and the moment sign decide tension or compression.</p>"
              },
              {
                "label": "Elastic stress with signs",
                "tex": "\\sigma_x = -\\dfrac{My}{I}",
                "where": "<p>Sagging-positive \\(M\\), \\(y\\) measured upward and tension positive.</p>"
              }
            ],
            "example": {
              "title": "Worked example: 40 kN·m on a section with I of 80 million mm⁴",
              "html": "<p>The moment 40 kN·m is \\(40 \\times 10^6\\) N·mm. For a fibre 100 mm from the neutral axis,</p>\\[\\sigma = \\dfrac{(40 \\times 10^6)(100)}{80 \\times 10^6} = 50\\ \\text{MPa}\\]<p>Whether this is tension or compression depends on which side of the axis the fibre lies and on the sign of the moment.</p>"
            },
            "points": [
              {
                "html": "In linear-elastic pure bending with plane sections remaining plane, longitudinal stress varies linearly with distance from the neutral axis.",
                "sources": [
                  {
                    "id": "CAP4-04-00024",
                    "label": "p. 15; topic 4 point 23"
                  }
                ]
              },
              {
                "html": "With no axial force present, fibres on the neutral axis carry zero longitudinal bending stress, because \\(y = 0\\) there.",
                "sources": [
                  {
                    "id": "CAP4-05-00051",
                    "label": "p. 20; topic 5 point 50"
                  }
                ]
              },
              {
                "html": "A 40 kN·m moment with \\(I = 80 \\times 10^6\\) mm⁴ gives a bending stress of 50 MPa in a fibre 100 mm from the neutral axis.",
                "sources": [
                  {
                    "id": "CAP4-04-00065",
                    "label": "p. 17; topic 4 point 65"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00024",
                "label": "p. 15; topic 4 point 23"
              },
              {
                "id": "CAP4-05-00051",
                "label": "p. 20; topic 5 point 50"
              },
              {
                "id": "CAP4-04-00065",
                "label": "p. 17; topic 4 point 65"
              }
            ]
          },
          {
            "id": "section-properties-flexural-rigidity",
            "title": "Section modulus, flexural rigidity and curvature",
            "html": "<p>Three quantities are easily confused. The <em>second moment of area</em> \\(I\\), in length<sup>4</sup>, measures how area is distributed about the bending axis. The <em>elastic section modulus</em> \\(Z = I/c\\), in length<sup>3</sup>, converts moment to extreme-fibre stress. Here \\(c\\) is the distance from the neutral axis to the fibre being checked, so an unsymmetrical section has different values for its two faces.</p><p><em>Young's modulus</em> \\(E\\) is a material property with stress units, because strain is dimensionless. In newtons and millimetres, \\(Z\\) is in mm<sup>3</sup> and \\(E\\) in N/mm<sup>2</sup>, so the two never share units.</p><p>Bending stiffness is the product \\(EI\\), the <em>flexural rigidity</em>: \\(I\\) is its geometric part and \\(E\\) its material part, with \\(I\\) taken about the actual bending axis. Curvature equals \\(M/EI\\), and for otherwise identical linear-elastic beams the deflection is inversely proportional to \\(EI\\). Doubling \\(I\\) halves the deflection.</p><p>For a rectangle bending about its horizontal centroidal axis, doubling the width doubles \\(I\\), while doubling the depth multiplies it by eight.</p>",
            "formulas": [
              {
                "label": "Elastic section modulus",
                "tex": "Z = \\dfrac{I}{c}",
                "where": "<p>\\(c\\) is the distance from the neutral axis to the extreme fibre being checked.</p>"
              },
              {
                "label": "Extreme-fibre stress",
                "tex": "\\sigma = \\dfrac{M}{Z}"
              },
              {
                "label": "Curvature",
                "tex": "\\dfrac{1}{R} = \\dfrac{M}{EI}"
              },
              {
                "label": "Rectangle about its centroidal axis",
                "tex": "I = \\dfrac{bd^3}{12}"
              }
            ],
            "example": {
              "title": "Worked examples: a curvature radius and a wider beam",
              "html": "<p>A segment in pure bending with \\(EI = 10\\,000\\) kN·m² carries 50 kN·m:</p>\\[\\begin{aligned} \\dfrac{1}{R} &amp;= \\dfrac{50}{10\\,000} = 0.005\\ \\text{m}^{-1} \\\\ R &amp;= 200\\ \\text{m} \\end{aligned}\\]<p>Curvature and radius are reciprocals, not interchangeable numbers.</p><p>For a rectangular simply supported beam under a central load, doubling the width \\(b\\) doubles \\(bd^3/12\\), so the midspan deflection becomes one-half of its original value. Doubling the depth would reduce it to one-eighth.</p>"
            },
            "points": [
              {
                "html": "In newton and millimetre units the elastic section modulus \\(Z = I/c\\) is in mm<sup>3</sup>, while Young's modulus \\(E\\) is in N/mm<sup>2</sup>.",
                "sources": [
                  {
                    "id": "CAP4-04-00023",
                    "label": "p. 15; topic 4 point 22"
                  }
                ]
              },
              {
                "html": "For otherwise identical beams, doubling the relevant second moment of area makes the elastic deflection half as large, since deflection varies as \\(1/EI\\).",
                "sources": [
                  {
                    "id": "CAP4-01-00154",
                    "label": "p. 6; topic 1 point 147"
                  }
                ]
              },
              {
                "html": "Doubling the width of a rectangular simply supported beam doubles \\(I = bd^3/12\\), so its central-load deflection becomes one-half of its original value.",
                "sources": [
                  {
                    "id": "CAP4-04-00029",
                    "label": "p. 16; topic 4 point 28"
                  }
                ]
              },
              {
                "html": "With \\(EI = 10\\,000\\) kN·m² and a 50 kN·m moment the curvature is 0.005 per metre, so the radius of curvature is 200 m.",
                "sources": [
                  {
                    "id": "CAP4-04-00066",
                    "label": "p. 17; topic 4 point 65"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00023",
                "label": "p. 15; topic 4 point 22"
              },
              {
                "id": "CAP4-01-00154",
                "label": "p. 6; topic 1 point 147"
              },
              {
                "id": "CAP4-04-00029",
                "label": "p. 16; topic 4 point 28"
              },
              {
                "id": "CAP4-04-00066",
                "label": "p. 17; topic 4 point 65"
              }
            ]
          },
          {
            "id": "rectangular-shear-stress",
            "title": "Transverse shear stress in rectangular beams and the neutral axis",
            "html": "<p>When a beam carries shear \\(V\\) as well as moment, transverse shear stresses act over the cross-section. For a solid rectangle the distribution is parabolic: zero at the top and bottom fibres and largest at the centroidal neutral axis, where it reaches one and a half times the average shear stress.</p><p>In a homogeneous rectangular beam the centroidal neutral axis is therefore where the longitudinal bending stress is zero and, with nonzero shear, where the transverse shear stress is greatest. Both are properties of the section. The second needs a rectangular or similar shape, and it has nothing to do with whether the beam is simply supported.</p><p>A region of pure bending carries no transverse shear at all, and other section shapes distribute shear differently.</p>",
            "formulas": [
              {
                "label": "Average shear stress",
                "tex": "\\tau_{\\text{avg}} = \\dfrac{V}{bd}"
              },
              {
                "label": "Peak shear in a solid rectangle",
                "tex": "\\tau_{\\text{max}} = 1.5\\,\\tau_{\\text{avg}} = \\dfrac{3V}{2bd}",
                "where": "<p>The peak acts at the centroidal neutral axis.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a 100 mm by 200 mm section carrying 40 kN",
              "html": "<ol><li>Area: \\(100 \\times 200 = 20\\,000\\) mm².</li><li>Average shear: \\(40\\,000/20\\,000 = 2\\) MPa.</li><li>Peak at the neutral axis: 1.5 × 2 = 3.0 MPa.</li></ol><p>Quoting the average, 2 MPa, as the maximum would understate the peak by a third.</p>"
            },
            "points": [
              {
                "html": "In a homogeneous rectangular beam carrying shear and moment, zero bending stress and the greatest transverse shear stress both occur at the centroidal neutral axis.",
                "sources": [
                  {
                    "id": "CAP4-04-00003",
                    "label": "p. 15; topic 4 point 3"
                  }
                ]
              },
              {
                "html": "A 100 mm by 200 mm rectangle carrying 40 kN has an average shear of 2 MPa and a peak of 3.0 MPa at the neutral axis.",
                "sources": [
                  {
                    "id": "CAP4-04-00021",
                    "label": "p. 15; topic 4 point 20"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00003",
                "label": "p. 15; topic 4 point 3"
              },
              {
                "id": "CAP4-04-00021",
                "label": "p. 15; topic 4 point 20"
              }
            ]
          },
          {
            "id": "simple-span-deflections",
            "title": "Standard deflections of simply supported beams",
            "html": "<p>Two simple-span results, with shear deformation neglected, cover most questions: a central point load and a load spread uniformly over the whole span. For a given total load, both grow with the cube of the span and are inversely proportional to the flexural rigidity \\(EI\\).</p><p>Check whether \\(W\\) is a total force or an intensity. With intensity \\(w\\) per metre, the uniform-load result is written with \\(wL^4\\); with total load \\(W = wL\\), it is written with \\(WL^3\\). Mixing the two forms is the usual slip.</p><p>Equal total force does not mean equal deflection. Concentrating a load at midspan bends the beam more than spreading the same total force uniformly, in the ratio 8 to 5.</p>",
            "formulas": [
              {
                "label": "Central point load",
                "tex": "\\delta = \\dfrac{PL^3}{48EI}"
              },
              {
                "label": "Uniform load over the whole span",
                "tex": "\\delta = \\dfrac{5wL^4}{384EI} = \\dfrac{5WL^3}{384EI}",
                "where": "<p>\\(w\\) is the intensity per metre and \\(W = wL\\) the total load.</p>"
              },
              {
                "label": "Central load against the same total load spread",
                "tex": "\\dfrac{\\delta_A}{\\delta_B} = \\dfrac{1/48}{5/384} = \\dfrac{8}{5}"
              }
            ],
            "example": {
              "title": "Worked examples: a 4 m span with EI of 8000 kN·m²",
              "html": "<p>Central point load of 12 kN:</p>\\[\\begin{aligned} \\delta &amp;= \\dfrac{12 \\times 4^3}{48 \\times 8000} = 0.0020\\ \\text{m} \\\\ &amp;= 2.00\\ \\text{mm} \\end{aligned}\\]<p>Total uniform load of 24 kN, so that \\(w = 6\\) kN/m:</p>\\[\\begin{aligned} \\delta &amp;= \\dfrac{5 \\times 24 \\times 4^3}{384 \\times 8000} = 0.0025\\ \\text{m} \\\\ &amp;= 2.50\\ \\text{mm} \\end{aligned}\\]<p>The fixed-fixed denominators 192 and 384 without the factor 5 would give 0.50 mm in both cases, which belongs to a different beam.</p>"
            },
            "points": [
              {
                "html": "A 12 kN central load on a 4 m simple span with \\(EI = 8000\\) kN·m² deflects 2.00 mm at midspan, from \\(PL^3/(48EI)\\).",
                "sources": [
                  {
                    "id": "CAP4-04-00007",
                    "label": "p. 15; topic 4 point 7"
                  }
                ]
              },
              {
                "html": "A total uniform load of 24 kN on the same simple span gives a maximum deflection of 2.50 mm, from \\(5WL^3/(384EI)\\).",
                "sources": [
                  {
                    "id": "CAP4-04-00120",
                    "label": "p. 19; topic 4 point 122"
                  }
                ]
              },
              {
                "html": "A central load \\(W\\) deflects a simple beam 8/5 times as much as the same total load \\(W\\) spread uniformly over the span.",
                "sources": [
                  {
                    "id": "CAP4-04-00028",
                    "label": "p. 16; topic 4 point 27"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00007",
                "label": "p. 15; topic 4 point 7"
              },
              {
                "id": "CAP4-04-00120",
                "label": "p. 19; topic 4 point 122"
              },
              {
                "id": "CAP4-04-00028",
                "label": "p. 16; topic 4 point 27"
              }
            ]
          },
          {
            "id": "cantilever-fixed-deflections",
            "title": "Cantilever and fixed-fixed deflections: the effect of end restraint",
            "html": "<p>End restraint changes the deflection coefficient dramatically, so identify the supports before choosing a formula.</p><ul><li><em>Cantilever with a tip force.</em> The free end deflects \\(PL^3/(3EI)\\), far more than a simple span of the same length; the simple-beam denominator 48 does not apply.</li><li><em>Fixed-fixed, central force.</em> Fixing both end rotations cuts the central deflection to \\(PL^3/(192EI)\\), one-quarter of the simple-span value.</li><li><em>Fixed-fixed, uniform load.</em> With total load \\(W\\), the central deflection is \\(WL^3/(384EI)\\), one-fifth of the simple-span value; the factor 5 belongs to the simply supported case.</li></ul><p>All three assume a prismatic, linear-elastic member with rigid, immovable restraints, and they neglect shear deformation.</p>",
            "formulas": [
              {
                "label": "Cantilever with a tip force",
                "tex": "\\delta = \\dfrac{PL^3}{3EI}"
              },
              {
                "label": "Fixed-fixed, central point load",
                "tex": "\\delta = \\dfrac{PL^3}{192EI}"
              },
              {
                "label": "Fixed-fixed, total uniform load W",
                "tex": "\\delta = \\dfrac{WL^3}{384EI} = \\dfrac{wL^4}{384EI}"
              }
            ],
            "example": {
              "title": "Worked examples: three restrained members",
              "html": "<p>Cantilever, 3 m long with \\(EI = 9000\\) kN·m², carrying 9 kN at the tip:</p>\\[\\delta = \\dfrac{9 \\times 3^3}{3 \\times 9000} = 0.009\\ \\text{m}\\]<p>That is 9.00 mm downward. Fixed-fixed beam, 4 m long with \\(EI = 8000\\) kN·m², carrying 12 kN at the centre:</p>\\[\\delta = \\dfrac{12 \\times 4^3}{192 \\times 8000} = 0.0005\\ \\text{m}\\]<p>That is 0.50 mm downward. The same fixed-fixed beam under a 24 kN total uniform load, \\(w = 6\\) kN/m:</p>\\[\\delta = \\dfrac{24 \\times 4^3}{384 \\times 8000} = 0.0005\\ \\text{m}\\]<p>That is also 0.50 mm.</p>"
            },
            "points": [
              {
                "html": "A 9 kN tip force on a 3 m cantilever with \\(EI = 9000\\) kN·m² gives a tip deflection of 9.00 mm downward, from \\(PL^3/(3EI)\\).",
                "sources": [
                  {
                    "id": "CAP4-04-00030",
                    "label": "p. 16; topic 4 point 29"
                  }
                ]
              },
              {
                "html": "A 12 kN central load on a 4 m fixed-fixed beam with \\(EI = 8000\\) kN·m² deflects 0.50 mm downward, from \\(PL^3/(192EI)\\).",
                "sources": [
                  {
                    "id": "CAP4-04-00058",
                    "label": "p. 17; topic 4 point 57"
                  }
                ]
              },
              {
                "html": "A 24 kN total uniform load on the same fixed-fixed beam gives a central deflection of 0.50 mm, from \\(WL^3/(384EI)\\).",
                "sources": [
                  {
                    "id": "CAP4-04-00031",
                    "label": "p. 16; topic 4 point 30"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00030",
                "label": "p. 16; topic 4 point 29"
              },
              {
                "id": "CAP4-04-00058",
                "label": "p. 17; topic 4 point 57"
              },
              {
                "id": "CAP4-04-00031",
                "label": "p. 16; topic 4 point 30"
              }
            ]
          },
          {
            "id": "conjugate-beam-supports",
            "title": "Conjugate-beam method: translating the supports",
            "html": "<p>The <em>conjugate-beam method</em> finds slopes and deflections by loading an imaginary beam of the same span with the \\(M/EI\\) diagram of the real beam. Conjugate shear then equals real slope, and conjugate moment equals real deflection.</p><p>The supports must be translated so that these correspondences hold at every end:</p><table><thead><tr><th scope='col'>Real support</th><th scope='col'>Real slope and deflection</th><th scope='col'>Conjugate support</th></tr></thead><tbody><tr><td>Fixed end</td><td>Both zero</td><td>Free end, with zero shear and moment</td></tr><tr><td>Free end</td><td>Both generally nonzero</td><td>Fixed end</td></tr><tr><td>Simple end support</td><td>Slope nonzero, deflection zero</td><td>Simple end support</td></tr></tbody></table><p>A real fixed end therefore becomes a conjugate free end, and the conjugate of a cantilever is a cantilever fixed at the opposite end.</p>",
            "points": [
              {
                "html": "A real fixed end, with zero slope and zero deflection, maps to a free end on the conjugate beam, where shear and moment are both zero.",
                "sources": [
                  {
                    "id": "CAP4-04-00051",
                    "label": "p. 17; topic 4 point 49"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00051",
                "label": "p. 17; topic 4 point 49"
              }
            ]
          },
          {
            "id": "euler-buckling-effective-length",
            "title": "Euler buckling: compressive instability and effective length",
            "html": "<p>The Euler crippling load is the axial compression at which an ideal straight, slender, elastic column loses lateral stability. It is not a tensile, torsional or shear failure, and it differs from local bearing crushing. The lowest critical load uses \\(I\\) about the weakest buckling axis and the <em>effective length</em> \\(L_e = KL\\), the length of the equivalent pin-ended column.</p><table><thead><tr><th scope='col'>End conditions</th><th scope='col'>Effective length</th><th scope='col'>Load relative to pinned-pinned</th></tr></thead><tbody><tr><td>Pinned at both ends</td><td>\\(L\\)</td><td>1</td></tr><tr><td>Fixed at both ends, no sway</td><td>\\(L/2\\)</td><td>4</td></tr><tr><td>Fixed base, free top</td><td>\\(2L\\)</td><td>1/4</td></tr></tbody></table><p>These are ideal-restraint values for a conservative axial load. Real frame restraint and sway can produce different effective-length factors.</p>",
            "formulas": [
              {
                "label": "Euler critical load",
                "tex": "P_{\\text{cr}} = \\dfrac{\\pi^2 EI}{L_e^2}",
                "where": "<p>\\(I\\) about the weakest buckling axis; \\(L_e = KL\\).</p>"
              },
              {
                "label": "Both ends fixed",
                "tex": "P_{\\text{cr}} = \\dfrac{\\pi^2 EI}{(L/2)^2} = \\dfrac{4\\pi^2 EI}{L^2}"
              },
              {
                "label": "Fixed base, free top",
                "tex": "P_{\\text{cr}} = \\dfrac{\\pi^2 EI}{(2L)^2} = \\dfrac{\\pi^2 EI}{4L^2}"
              }
            ],
            "example": {
              "title": "Worked example: a 5 m column with EI of 2000 kN·m²",
              "html": "<p>Pinned at both ends, \\(L_e = 5\\) m:</p>\\[P_{\\text{cr}} = \\dfrac{\\pi^2 \\times 2000}{25} \\approx 789.6\\ \\text{kN}\\]<p>Fixed at the base and free at the top, \\(L_e = 10\\) m, the same member reaches only about 197.4 kN, one-quarter as much. Fixed at both ends, \\(L_e = 2.5\\) m, it reaches about 3158 kN, four times as much.</p>"
            },
            "points": [
              {
                "html": "The Euler crippling load is the critical axial compression at which a slender straight column loses lateral stability.",
                "sources": [
                  {
                    "id": "CAP4-05-00063",
                    "label": "p. 21; topic 5 point 61"
                  }
                ]
              },
              {
                "html": "An ideal column fixed against rotation and translation at both ends has effective length \\(L/2\\), so its Euler load is \\(4\\pi^2 EI/L^2\\).",
                "sources": [
                  {
                    "id": "CAP4-04-00027",
                    "label": "pp. 16, 18; topic 4 point 26; topic 4 point 82"
                  }
                ]
              },
              {
                "html": "A column fixed at the base and free at the top has effective length \\(2L\\) and one-quarter of the pin-ended Euler load.",
                "sources": [
                  {
                    "id": "CAP4-04-00033",
                    "label": "p. 16; topic 4 point 32"
                  }
                ]
              },
              {
                "html": "A pin-ended column 5 m long with \\(EI = 2000\\) kN·m² has a lowest Euler load of 789.6 kN, from \\(\\pi^2 EI/L^2\\).",
                "sources": [
                  {
                    "id": "CAP4-04-00119",
                    "label": "p. 19; topic 4 point 120"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00063",
                "label": "p. 21; topic 5 point 61"
              },
              {
                "id": "CAP4-04-00027",
                "label": "pp. 16, 18; topic 4 point 26; topic 4 point 82"
              },
              {
                "id": "CAP4-04-00033",
                "label": "p. 16; topic 4 point 32"
              },
              {
                "id": "CAP4-04-00119",
                "label": "p. 19; topic 4 point 120"
              }
            ]
          },
          {
            "id": "fixed-pinned-column",
            "title": "Fixed-pinned columns: exact and approximate buckling factors",
            "html": "<p>For an ideal non-sway column fixed at one end and pinned at the other, the buckling condition is \\(\\tan\\alpha = \\alpha\\), with \\(\\alpha = L\\sqrt{P/EI}\\). Its first nonzero root, \\(\\alpha = 4.49341\\), gives the exact critical load.</p><p>Dividing by the pinned-pinned load gives a factor of about 2.046, which corresponds to an effective-length factor \\(K = \\pi/\\alpha \\approx 0.699\\). The familiar \\(2\\pi^2 EI/L^2\\) comes from the approximation \\(L_e = L/\\sqrt{2}\\), with \\(K \\approx 0.707\\): close, but not the exact eigenvalue. Note which result a calculation is meant to use.</p>",
            "formulas": [
              {
                "label": "Buckling condition, fixed-pinned",
                "tex": "\\tan\\alpha = \\alpha, \\quad \\alpha = L\\sqrt{\\dfrac{P}{EI}}"
              },
              {
                "label": "Exact critical load",
                "tex": "P_{\\text{cr}} = \\dfrac{\\alpha^2 EI}{L^2}"
              },
              {
                "label": "Factor relative to pinned-pinned",
                "tex": "\\left(\\dfrac{\\alpha}{\\pi}\\right)^2 = \\left(\\dfrac{4.49341}{\\pi}\\right)^2 \\approx 2.046"
              },
              {
                "label": "Conventional approximation",
                "tex": "P_{\\text{cr}} \\approx \\dfrac{2\\pi^2 EI}{L^2}"
              }
            ],
            "example": {
              "title": "Worked example: the load factor from the first root",
              "html": "<ol><li>Ratio of the root to \\(\\pi\\): \\(4.49341/\\pi = 1.4303\\).</li><li>Load factor: \\(1.4303^2 \\approx 2.046\\), so \\(P_{\\text{cr}} \\approx 2.046\\,\\pi^2 EI/L^2\\).</li><li>Effective-length factor: \\(K = \\pi/4.49341 \\approx 0.699\\), against 0.707 for the conventional \\(L/\\sqrt{2}\\).</li></ol>"
            },
            "points": [
              {
                "html": "The first root 4.49341 of \\(\\tan\\alpha = \\alpha\\) gives a fixed-pinned Euler load 2.046 times the pinned-pinned value, with \\(K \\approx 0.699\\).",
                "sources": [
                  {
                    "id": "CAP4-04-00074",
                    "label": "p. 17; topic 4 point 72"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00074",
                "label": "p. 17; topic 4 point 72"
              }
            ]
          },
          {
            "id": "slenderness-ratio",
            "title": "Slenderness ratio: which axis governs",
            "html": "<p>Columns are compared by their <em>slenderness ratio</em>, the effective length divided by the radius of gyration \\(r = \\sqrt{I/A}\\). A higher ratio means a lower Euler stress, so the axis with the larger ratio governs buckling.</p><p>Each principal axis generally has its own effective length and its own radius of gyration, so compute the ratio for each axis and take the larger. Dividing by the least radius of gyration is a valid shortcut only when the effective lengths about the two axes are equal.</p>",
            "formulas": [
              {
                "label": "Radius of gyration",
                "tex": "r = \\sqrt{\\dfrac{I}{A}}"
              },
              {
                "label": "Slenderness ratio",
                "tex": "\\lambda = \\dfrac{L_e}{r}"
              },
              {
                "label": "Euler stress",
                "tex": "\\sigma_{\\text{cr}} = \\dfrac{\\pi^2 E}{(L_e/r)^2}"
              }
            ],
            "example": {
              "title": "Worked example: a common effective length of 3000 mm",
              "html": "<p>With radii of gyration of 50 mm and 30 mm about the two principal axes:</p><ul><li>First axis: 3000/50 = 60.</li><li>Second axis: 3000/30 = 100.</li></ul><p>The larger ratio, 100, governs. Here it also comes from the least radius of gyration, because the effective lengths are equal.</p>"
            },
            "points": [
              {
                "html": "Radii of gyration of 50 mm and 30 mm with a common 3000 mm effective length give ratios of 60 and 100, so the governing slenderness is 100.",
                "sources": [
                  {
                    "id": "CAP4-05-00119",
                    "label": "p. 22; topic 5 point 117"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00119",
                "label": "p. 22; topic 5 point 117"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Flexure formula",
            "tex": "\\dfrac{M}{I} = \\dfrac{\\sigma}{y} = \\dfrac{E}{R}"
          },
          {
            "label": "Section modulus and extreme-fibre stress",
            "tex": "Z = \\dfrac{I}{c}, \\quad \\sigma = \\dfrac{M}{Z}"
          },
          {
            "label": "Curvature",
            "tex": "\\dfrac{1}{R} = \\dfrac{M}{EI}"
          },
          {
            "label": "Rectangle about its centroidal axis",
            "tex": "I = \\dfrac{bd^3}{12}"
          },
          {
            "label": "Peak shear in a solid rectangle",
            "tex": "\\tau_{\\text{max}} = \\dfrac{3V}{2bd}",
            "note": "At the neutral axis, 1.5 times the average."
          },
          {
            "label": "Simple span, central point load",
            "tex": "\\delta = \\dfrac{PL^3}{48EI}"
          },
          {
            "label": "Simple span, total uniform load W",
            "tex": "\\delta = \\dfrac{5WL^3}{384EI}"
          },
          {
            "label": "Cantilever, tip force",
            "tex": "\\delta = \\dfrac{PL^3}{3EI}"
          },
          {
            "label": "Fixed-fixed, central point load",
            "tex": "\\delta = \\dfrac{PL^3}{192EI}"
          },
          {
            "label": "Fixed-fixed, total uniform load W",
            "tex": "\\delta = \\dfrac{WL^3}{384EI}"
          },
          {
            "label": "Euler critical load",
            "tex": "P_{\\text{cr}} = \\dfrac{\\pi^2 EI}{L_e^2}",
            "note": "Effective length L pinned-pinned, L/2 fixed-fixed, 2L fixed-free."
          },
          {
            "label": "Fixed-pinned, exact",
            "tex": "P_{\\text{cr}} = \\dfrac{\\alpha^2 EI}{L^2}",
            "note": "With \\(\\alpha = 4.49341\\), about 2.046 times the pinned-pinned load."
          },
          {
            "label": "Slenderness ratio",
            "tex": "\\lambda = \\dfrac{L_e}{r}, \\quad r = \\sqrt{\\dfrac{I}{A}}",
            "note": "The larger axis ratio governs."
          }
        ],
        "cautions": [
          {
            "id": "caution-inertia-bending-resistance",
            "status": "review",
            "prompt": "Moment of inertia represents resistance against bending",
            "html": "<p>\\(I\\) is only the geometric part of bending stiffness. Stiffness is \\(EI\\), so the material modulus matters too, and \\(I\\) must be taken about the actual bending axis. For otherwise identical beams, doubling \\(I\\) halves the deflection.</p>",
            "sources": [
              {
                "id": "CAP4-01-00154",
                "label": "p. 6; topic 1 point 147"
              }
            ]
          },
          {
            "id": "caution-neutral-axis-shear-maximum",
            "status": "review",
            "prompt": "For a simply supported beam, the neutral axis is where bending stress is zero and shear stress is maximum",
            "html": "<p>The shear part depends on the section shape and needs nonzero shear; it holds for a solid rectangle whatever the supports. Pure bending has no transverse shear, and other section shapes can distribute shear differently.</p>",
            "sources": [
              {
                "id": "CAP4-04-00003",
                "label": "p. 15; topic 4 point 3"
              }
            ]
          },
          {
            "id": "caution-linear-stress-pure-bending",
            "status": "review",
            "prompt": "In pure bending, the stress distribution in the beam is linear",
            "html": "<p>Linear only while the material remains linear-elastic with plane sections staying plane. Pure bending does not exclude yielding; beyond first yield the distribution becomes nonlinear and approaches rectangular plastic stress blocks.</p>",
            "sources": [
              {
                "id": "CAP4-04-00024",
                "label": "p. 15; topic 4 point 23"
              }
            ]
          },
          {
            "id": "caution-fixed-fixed-effective-length",
            "status": "review",
            "prompt": "The equivalent length of a column with both ends fixed is L/2",
            "html": "<p>The extracted capsule text shows L2, which must be read as \\(L/2\\), not \\(L^2\\) or \\(2L\\). The value applies to an ideal non-sway column with both ends fully fixed; real frame restraint and sway can change the effective-length factor.</p>",
            "sources": [
              {
                "id": "CAP4-04-00027",
                "label": "pp. 16, 18; topic 4 point 26; topic 4 point 82"
              }
            ]
          },
          {
            "id": "caution-central-versus-spread-ratio",
            "status": "review",
            "prompt": "The ratio of maximum deflections for a central load W and the same total load W spread uniformly is 85, as extracted",
            "html": "<p>The run-together 85 is read as the ratio 8/5, which the standard results confirm independently: \\((1/48)/(5/384) = 384/240\\) for simply supported beams of equal span and \\(EI\\). The central load deflects the beam more.</p>",
            "sources": [
              {
                "id": "CAP4-04-00028",
                "label": "p. 16; topic 4 point 27"
              }
            ]
          },
          {
            "id": "caution-width-doubling-deflection",
            "status": "review",
            "prompt": "Doubling the width of a simply supported beam with a central load changes its central deflection by 21, as extracted",
            "html": "<p>The run-together 21 is read as one-half. Doubling the width doubles \\(I = bd^3/12\\) about the horizontal axis, and the deflection is inversely proportional to \\(I\\). Doubling the depth instead would reduce the deflection to one-eighth.</p>",
            "sources": [
              {
                "id": "CAP4-04-00029",
                "label": "p. 16; topic 4 point 28"
              }
            ]
          },
          {
            "id": "caution-fixed-pinned-euler",
            "status": "review",
            "prompt": "Euler buckling load for one end fixed and the other hinged is 2π²EI/L²",
            "html": "<p>This is the conventional approximation using \\(L_e = L/\\sqrt{2}\\). The exact ideal-column eigenvalue gives about \\(2.046\\,\\pi^2 EI/L^2\\), with \\(K \\approx 0.699\\), so note which result a calculation expects.</p>",
            "sources": [
              {
                "id": "CAP4-04-00074",
                "label": "p. 17; topic 4 point 72"
              }
            ]
          },
          {
            "id": "caution-least-radius-slenderness",
            "status": "review",
            "prompt": "Slenderness ratio is the effective length of a column divided by its least radius of gyration",
            "html": "<p>Using the least radius is correct when the effective lengths about both principal axes are equal. Otherwise compute \\(L_e/r\\) for each axis with its own effective length and take the larger ratio.</p>",
            "sources": [
              {
                "id": "CAP4-05-00119",
                "label": "p. 22; topic 5 point 117"
              }
            ]
          }
        ],
        "gaps": [
          "Unsymmetrical bending, composite or reinforced sections and the shear-centre concept are not examined.",
          "Deflections are limited to standard coefficient formulas and the conjugate-beam support rule; double integration and moment-area derivations are not worked.",
          "Column questions cover ideal Euler theory only; eccentric loading, initial imperfections, the Rankine formula and code design curves are outside this coverage.",
          "Shear-stress distributions for I, T and circular sections are not covered."
        ]
      },
      "ACiE0404": {
        "code": "ACiE0404",
        "questionCount": 14,
        "format": 2,
        "summary": "<p>Determinate structures-1 covers Degree of determinacy, energy methods, virtual work, and deflection of beams and portal frames. The sections below reorganize the reviewed capsule material into concepts, calculations, qualifications and limits, with every mapped question linked to a key fact.</p>",
        "blocks": [
          {
            "id": "virtual-work-and-castigliano",
            "title": "Virtual work and Castigliano's energy derivative",
            "html": "<p>The principle of virtual displacements tests equilibrium by pairing the <em>actual</em> forces with an imagined, infinitesimal and kinematically admissible virtual displacement, one that respects every support and continuity constraint. For a deformable body in equilibrium, the external virtual work of those forces equals the internal virtual work for every such displacement.</p><p>Finite, arbitrary or constraint-violating movements do not qualify, and settlements that actually occur are real rather than virtual. The dual principle of virtual forces pairs a virtual force system with the actual displacements and underlies the unit-load method for deflections.</p><p>Energy methods also give displacements directly. For a conservative, linear-elastic structure, the displacement at and in the direction of a load P equals ∂U/∂P. If U = 0.002P<sup>2</sup> kN·m, then δ = 0.004P m, which is 0.020 m = 20 mm at P = 5 kN; dividing U by P would give half of this. Texts number Castigliano's theorems differently, so identify the derivative rather than rely on the label. For nonlinear elasticity, load derivatives must be taken of complementary energy.</p>",
            "points": [
              {
                "html": "The key result is Actual forces with admissible virtual displacements.",
                "sources": [
                  {
                    "id": "CAP4-04-00025",
                    "label": "p. 16; topic 4 point 24"
                  }
                ]
              },
              {
                "html": "The key result is 20 mm.",
                "sources": [
                  {
                    "id": "CAP4-04-00102",
                    "label": "p. 18; topic 4 point 102"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00025",
                "label": "p. 16; topic 4 point 24"
              },
              {
                "id": "CAP4-04-00102",
                "label": "p. 18; topic 4 point 102"
              }
            ]
          },
          {
            "id": "gradual-loading-strain-energy",
            "title": "Strain energy under gradual loading: beams and uniformly stressed bars",
            "html": "<p>When a load grows slowly from zero on a linear-elastic structure, its force–displacement graph is a straight line and the stored energy is the triangle beneath it: U = Pδ/2, not Pδ.</p><ul><li>Beam: a 4 m simple span with EI = 8000 kN·m<sup>2</sup> and a central load of 12 kN deflects PL<sup>3</sup>/(48EI) = 0.002 m, so U = 12 × 0.002/2 = 0.012 kN·m = 12 J. The same result follows from U = P<sup>2</sup>L<sup>3</sup>/(96EI) = 144 × 64/768000 = 0.012 kN·m; the load appears squared.</li><li>Uniformly stressed bar: the energy per unit volume is σ<sup>2</sup>/(2E). Stressed to 200 MPa with E = 200000 MPa, the density is 40000/400000 = 0.10 N/mm<sup>2</sup>, that is 0.10 N·mm per mm<sup>3</sup>; over 100000 mm<sup>3</sup> the total is 10000 N·mm = 10 J.</li></ul><p>Unit conversion matters: 1 kN·m = 1000 J and 1 N·mm = 0.001 J. A density such as 0.10 N/mm<sup>2</sup> is energy per volume, not the stored energy of the whole member.</p>",
            "points": [
              {
                "html": "The key result is 12 J.",
                "sources": [
                  {
                    "id": "CAP4-04-00032",
                    "label": "p. 16; topic 4 point 31"
                  }
                ]
              },
              {
                "html": "The key result is 10 J.",
                "sources": [
                  {
                    "id": "CAP4-04-00061",
                    "label": "p. 17; topic 4 point 59"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00032",
                "label": "p. 16; topic 4 point 31"
              },
              {
                "id": "CAP4-04-00061",
                "label": "p. 17; topic 4 point 59"
              }
            ]
          },
          {
            "id": "resilience-definitions",
            "title": "Proof resilience, modulus of resilience and toughness",
            "html": "<p>Resilience is elastic strain energy that is recovered on unloading. Three related terms must be kept apart:</p><ul><li>Proof resilience: the maximum strain energy a body can store without permanent deformation, a total energy in joules. A spring that can store at most 18 J and still return to its original shape has a proof resilience of 18 J.</li><li>Modulus of resilience: proof resilience per unit volume, σ<sub>e</sub><sup>2</sup>/(2E) for uniform stress up to the elastic limit σ<sub>e</sub>.</li><li>Toughness: energy absorbed up to fracture, including plastic work, so it extends far beyond the elastic range.</li></ul><p>Proof resilience is an energy, not a load. A bar of 1.00 × 10<sup>6</sup> mm<sup>3</sup> that stays elastic up to 250 MPa, with E = 200000 MPa, has an energy density of 250<sup>2</sup>/(2 × 200000) = 0.15625 N/mm<sup>2</sup> and therefore a proof resilience of 156250 N·mm = 156.25 J. Neither number is a force, and the ultimate tensile strength is a stress, not an energy.</p>",
            "points": [
              {
                "html": "The key result is Proof resilience.",
                "sources": [
                  {
                    "id": "CAP4-04-00060",
                    "label": "p. 17; topic 4 point 59"
                  }
                ]
              },
              {
                "html": "The key result is 156.25 J.",
                "sources": [
                  {
                    "id": "CAP4-05-00127",
                    "label": "p. 23; topic 5 point 126"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00060",
                "label": "p. 17; topic 4 point 59"
              },
              {
                "id": "CAP4-05-00127",
                "label": "p. 23; topic 5 point 126"
              }
            ]
          },
          {
            "id": "sudden-loading-energy",
            "title": "Suddenly applied loads: double displacement, four times the energy",
            "html": "<p>A load applied suddenly and then maintained, with zero drop height, does work Pδ from the first instant, while the spring stores only kδ<sup>2</sup>/2. At the first peak of an undamped linear system, energy balance Pδ<sub>max</sub> = kδ<sub>max</sub><sup>2</sup>/2 gives δ<sub>max</sub> = 2P/k, twice the static displacement. Because stored energy grows with the square of displacement, the peak energy is four times the gradual-load value, and the peak stress is twice the static stress.</p><p>Example: stiffness 100 kN/m and a 2 kN force. Applied gradually, δ = 0.02 m and U = 100 × 0.02<sup>2</sup>/2 = 0.02 kN·m = 20 J. Applied suddenly, δ<sub>max</sub> = 0.04 m and U<sub>max</sub> = 100 × 0.04<sup>2</sup>/2 = 0.08 kN·m = 80 J.</p><p>The factor four describes the transient peak of this idealized model. Damping lets the motion settle at the static displacement, a finite rise time reduces the peak, and yielding breaks the linear assumption; a load dropped from a height adds kinetic energy and raises the factor further.</p>",
            "points": [
              {
                "html": "The key result is 80 J.",
                "sources": [
                  {
                    "id": "CAP4-04-00117",
                    "label": "p. 19; topic 4 point 118"
                  }
                ]
              },
              {
                "html": "The key result is 4. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-05-00097",
                    "label": "p. 22; topic 5 point 96"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00117",
                "label": "p. 19; topic 4 point 118"
              },
              {
                "id": "CAP4-05-00097",
                "label": "p. 22; topic 5 point 96"
              }
            ]
          },
          {
            "id": "truss-determinacy-counts",
            "title": "Counting truss members, restraints and free displacements",
            "html": "<p>Truss counts are necessary checks, never proofs of stability on their own.</p><ul><li>Compound truss: two separate, internally determinate plane subtrusses need three independent connecting constraints to fix their relative motion, covering two relative translations and one relative rotation. Subtrusses of 7 and 9 members joined by three bars without new joints give m = m<sub>1</sub> + m<sub>2</sub> + 3 = 19.</li><li>Geometry matters: three connecting bars that are all parallel, or otherwise dependent, do not restrain the three relative motions independently. Each bar resists movement only along its own line, so a small transverse relative movement can remain; the count is satisfied, yet the assembly is a mechanism.</li><li>Kinematic count: each joint of an ideal pin-jointed plane truss has two translations and no rotational coordinate in the axial-only model, so the number of free displacement coordinates is 2j − r. Seven joints with three independent restraints leave 14 − 3 = 11 unknown displacements. The shortcut 2j − 3 assumes exactly three support restraints; other support arrangements change it.</li></ul>",
            "points": [
              {
                "html": "The key result is 19. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-04-00068",
                    "label": "p. 17; topic 4 point 67"
                  }
                ]
              },
              {
                "html": "The key result is The connectors can leave a relative transverse mechanism.",
                "sources": [
                  {
                    "id": "CAP4-04-00069",
                    "label": "p. 17; topic 4 point 67"
                  }
                ]
              },
              {
                "html": "The key result is 11. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-04-00103",
                    "label": "p. 18; topic 4 point 104"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00068",
                "label": "p. 17; topic 4 point 67"
              },
              {
                "id": "CAP4-04-00069",
                "label": "p. 17; topic 4 point 67"
              },
              {
                "id": "CAP4-04-00103",
                "label": "p. 18; topic 4 point 104"
              }
            ]
          },
          {
            "id": "indeterminacy-stability-temperature",
            "title": "Degree of indeterminacy, stability checks and stress-free thermal movement",
            "html": "<p>For a planar structure, the degree of static indeterminacy is the number of unknown forces in excess of the independent equilibrium equations. A beam fixed at one end and propped at the other has four reaction components, two forces and a couple at the fixed end plus one vertical force at the prop, against three equations, so it has one redundant. A compatibility condition, such as zero vertical deflection at the prop, supplies the missing equation.</p><p>For a connected rigid-jointed plane frame without internal releases, the counting difference is D<sub>c</sub> = 3m + r − 3j. A zero result is necessary for an ordinary stable determinate frame but not sufficient: dependent constraints can leave a mechanism in one part while another part is self-stressed. Stability needs a geometric rank check, not the equality alone.</p><p>Determinate structures accommodate small imposed movements freely. An ideal three-hinged arch under a uniform temperature change adjusts its geometry through small hinge rotations, so in first-order analysis the temperature change adds no stress, while the load stresses remain. Restrained hinges, temperature gradients or significant geometry change need separate treatment, and a two-hinged arch, being indeterminate, does develop thermal thrust.</p>",
            "points": [
              {
                "html": "The key result is One. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-04-00089",
                    "label": "p. 18; topic 4 point 89"
                  }
                ]
              },
              {
                "html": "The key result is Its determinacy count is zero, but stability still needs verification.",
                "sources": [
                  {
                    "id": "CAP4-04-00114",
                    "label": "p. 19; topic 4 point 113"
                  }
                ]
              },
              {
                "html": "The key result is No additional thermal stress.",
                "sources": [
                  {
                    "id": "CAP4-05-00135",
                    "label": "p. 23; topic 5 point 136"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00089",
                "label": "p. 18; topic 4 point 89"
              },
              {
                "id": "CAP4-04-00114",
                "label": "p. 19; topic 4 point 113"
              },
              {
                "id": "CAP4-05-00135",
                "label": "p. 23; topic 5 point 136"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-compound-truss-count",
            "status": "review",
            "prompt": "A compound truss is determinate and stable if m = m1 + m2 + 3",
            "html": "<p>The count is necessary, not sufficient. The three connectors must restrain two relative translations and one relative rotation independently; three parallel bars leave a transverse mechanism even though the member count is satisfied.</p>",
            "sources": [
              {
                "id": "CAP4-04-00069",
                "label": "p. 17; topic 4 point 67"
              }
            ]
          },
          {
            "id": "caution-castigliano-numbering",
            "status": "review",
            "prompt": "Castigliano's first theorem is applicable when the system behaves elastically",
            "html": "<p>Texts number Castigliano's theorems differently. The result used here, displacement = ∂U/∂P, requires a conservative linear-elastic system; for nonlinear elasticity the load derivative must be taken of complementary energy.</p>",
            "sources": [
              {
                "id": "CAP4-04-00102",
                "label": "p. 18; topic 4 point 102"
              }
            ]
          },
          {
            "id": "caution-truss-kinematic-count",
            "status": "review",
            "prompt": "The degree of kinematic indeterminacy of a pin-jointed plane frame is 2j − 3",
            "html": "<p>The general count is 2j − r, where r is the number of independent support restraints. It reduces to 2j − 3 only when exactly three restraints are provided, as for a simply supported plane truss.</p>",
            "sources": [
              {
                "id": "CAP4-04-00103",
                "label": "p. 18; topic 4 point 104"
              }
            ]
          },
          {
            "id": "caution-frame-count-stability",
            "status": "corrected",
            "prompt": "A rigid-jointed plane frame is stable and statically determinate if 3m + r = 3j",
            "html": "<p>Corrected: the equality only makes the counting difference zero. Dependent constraints can allow a mechanism and a self-stress state together, so stability and determinacy also require a geometric rank check.</p>",
            "sources": [
              {
                "id": "CAP4-04-00114",
                "label": "p. 19; topic 4 point 113"
              }
            ]
          },
          {
            "id": "caution-sudden-load-factor",
            "status": "review",
            "prompt": "Strain energy from a suddenly applied load is four times that from gradual loading",
            "html": "<p>The factor four is the first transient peak of an undamped linear system under a zero-drop step load. Damping, a finite rise time or yielding change it, and once motion has died away the stored energy equals the gradual value.</p>",
            "sources": [
              {
                "id": "CAP4-04-00117",
                "label": "p. 19; topic 4 point 118"
              }
            ]
          },
          {
            "id": "caution-proof-resilience-load",
            "status": "corrected",
            "prompt": "The maximum load a beam can sustain before permanent deformation is called proof resilience",
            "html": "<p>Corrected: proof resilience is the maximum recoverable strain energy, measured in joules, not a load. Per unit volume it is the modulus of resilience; the 250 MPa bar example stores 156.25 J.</p>",
            "sources": [
              {
                "id": "CAP4-05-00127",
                "label": "p. 23; topic 5 point 126"
              }
            ]
          },
          {
            "id": "caution-three-hinged-temperature",
            "status": "review",
            "prompt": "Temperature change produces no stress in a load-carrying three-hinged arch",
            "html": "<p>Only the added stress from a uniform temperature change is zero, in the ideal first-order model with freely rotating hinges. Load stresses remain, and restrained hinges, gradients or large geometry changes need separate analysis.</p>",
            "sources": [
              {
                "id": "CAP4-05-00135",
                "label": "p. 23; topic 5 point 136"
              }
            ]
          }
        ],
        "gaps": [
          "No portal-frame deflection problem is included, although the syllabus lists it; unit-load or energy calculations for frames need separate practice.",
          "Deflections by the unit-load method, the moment-area theorems and the reciprocal theorem are not worked numerically.",
          "Space-truss and space-frame determinacy counts are not examined.",
          "Impact loads with a drop height are mentioned only qualitatively."
        ]
      },
      "ACiE0405": {
        "code": "ACiE0405",
        "questionCount": 20,
        "format": 2,
        "summary": "<p>Determinate structures-2 covers Influence lines for simple structures under point loads and UDL; analysis of two-hinged arches, as listed in the supplied syllabus. The sections below reorganize the reviewed capsule material into concepts, calculations, qualifications and limits, with every mapped question linked to a key fact.</p>",
        "blocks": [
          {
            "id": "influence-line-concept",
            "title": "What an influence line shows, and how it differs from a moment diagram",
            "html": "<p>An influence line fixes two things, the response type (a reaction, a shear or a bending moment) and the section where it is measured, then records how that response changes as a single unit load moves across the structure. Its horizontal coordinate is the <em>position of the load</em>.</p><p>A bending-moment diagram does the opposite: it fixes one loading arrangement and plots the moment at every section, so its horizontal coordinate is the <em>position of the section</em>. The two graphs can look alike, which is why confusing them is a classic error.</p><p>Influence lines serve moving loads. Multiplying an ordinate by a point load gives that load's contribution, and multiplying the area under a segment by a uniform intensity gives a distributed load's contribution; the most unfavourable placement follows from where the ordinates are largest. An envelope for a train of several axles needs this placement and superposition, not a single reading. Deflected shapes and material stress–strain curves are unrelated graphs.</p>",
            "points": [
              {
                "html": "The key result is The influence line for bending moment at C.",
                "sources": [
                  {
                    "id": "CAP4-04-00073",
                    "label": "p. 17; topic 4 point 71"
                  }
                ]
              },
              {
                "html": "The key result is An influence line for moment at that section.",
                "sources": [
                  {
                    "id": "CAP4-05-00137",
                    "label": "p. 23; topic 5 point 138"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00073",
                "label": "p. 17; topic 4 point 71"
              },
              {
                "id": "CAP4-05-00137",
                "label": "p. 23; topic 5 point 138"
              }
            ]
          },
          {
            "id": "cantilever-influence-lines",
            "title": "Influence lines on a cantilever: support reaction, shear and moment",
            "html": "<p>A cantilever makes influence lines easy to build, because every response comes from the free-side free body.</p><table><thead><tr><th scope='col'>Response</th><th scope='col'>Unit load between root and section C</th><th scope='col'>Unit load between C and the tip</th></tr></thead><tbody><tr><td>Vertical support reaction</td><td>+1</td><td>+1</td></tr><tr><td>Shear at C</td><td>0</td><td>+1, a rectangle</td></tr><tr><td>Moment at C</td><td>0</td><td>Linear, zero at C and largest at the tip</td></tr></tbody></table><p>The vertical reaction always equals the unit load by vertical equilibrium, so its influence line is a unit rectangle over the whole span; the <em>support moment</em>, by contrast, varies with the load's lever arm and is linear. For a section C, a load on the root side lies outside the free-side free body and contributes nothing.</p><p>A load on the tip side contributes unit shear, taking downward load on the free-side segment as positive, and a moment equal to its distance from C, so the moment ordinates grow linearly from zero at C to their largest value at the free end. With downward load and sagging-positive moment these moment ordinates are negative, since the cantilever hogs.</p>",
            "points": [
              {
                "html": "The key result is Zero on the fixed-side interval; linear on the free-side interval.",
                "sources": [
                  {
                    "id": "CAP4-04-00036",
                    "label": "p. 16; topic 4 point 35"
                  }
                ]
              },
              {
                "html": "The key result is Constant ordinate +1 over the span.",
                "sources": [
                  {
                    "id": "CAP4-04-00062",
                    "label": "p. 17; topic 4 point 60"
                  }
                ]
              },
              {
                "html": "The key result is 0 and +1.",
                "sources": [
                  {
                    "id": "CAP4-04-00081",
                    "label": "p. 18; topic 4 point 80"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00036",
                "label": "p. 16; topic 4 point 35"
              },
              {
                "id": "CAP4-04-00062",
                "label": "p. 17; topic 4 point 60"
              },
              {
                "id": "CAP4-04-00081",
                "label": "p. 18; topic 4 point 80"
              }
            ]
          },
          {
            "id": "moving-loads-simple-span",
            "title": "Moving loads on a simple span: long uniform loads and wheel trains",
            "html": "<p>For a simple span, the influence line for moment at any section is a triangle that is positive over the whole span, with the tallest peak, L/4, belonging to the midspan section. Two placement rules follow.</p><ul><li>Uniform load longer than the span: covering the entire span captures the whole positive influence area, so full coverage produces the absolute maximum bending moment, which occurs at midspan and equals wL<sup>2</sup>/8. Covering only part of the span, or stopping an edge of the load at midspan, leaves positive area unused.</li><li>Train of concentrated wheel loads: between wheels there is no distributed load, so shear is constant and moment varies linearly. A positive maximum can therefore occur only where the slope changes, under a wheel, or along a zero-shear plateau whose ends are wheel sections. Evaluating the moment under each wheel for each trial position is enough to find the peak.</li></ul><p>The wheel rule assumes downward point loads only. An added distributed load or applied couple removes the piecewise-linear shape, and the rule must then be re-examined.</p>",
            "points": [
              {
                "html": "The key result is The load covers the entire span.",
                "sources": [
                  {
                    "id": "CAP4-04-00035",
                    "label": "pp. 16, 18; topic 4 point 34; topic 4 point 92"
                  }
                ]
              },
              {
                "html": "The key result is Moment is piecewise linear between wheels.",
                "sources": [
                  {
                    "id": "CAP4-04-00063",
                    "label": "p. 17; topic 4 point 62"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00035",
                "label": "pp. 16, 18; topic 4 point 34; topic 4 point 92"
              },
              {
                "id": "CAP4-04-00063",
                "label": "p. 17; topic 4 point 62"
              }
            ]
          },
          {
            "id": "three-hinged-arch-statics",
            "title": "Three-hinged arches: hinge placement and crown-hinge equilibrium",
            "html": "<p>A three-hinged arch has a hinge at each springing and one internal hinge. The pinned springings supply four reaction components, and the three equilibrium equations plus the zero-moment condition at the internal hinge make the arch statically determinate. The internal hinge is usually at the crown but need not be, provided the three hinges are not collinear and the supports restrain the arch adequately; collinear hinges form a degenerate mechanism.</p><ul><li>Vertical reactions with level springings: the horizontal reactions have no moment about either springing, so the vertical reactions match those of a simple beam. With springings 18 m apart and 90 kN applied 6 m from A, V<sub>B</sub> = 90 × 6/18 = 30 kN and V<sub>A</sub> = 60 kN. In general V<sub>B</sub> = Wa/(2l) for span 2l with a measured from A.</li><li>Thrust from the crown hinge: H = M<sub>0,crown</sub>/h. A full-span UDL of 4 kN/m on a 20 m span with 5 m rise gives M<sub>0</sub> = 4 × 400/8 = 200 kN·m and H = 200/5 = 40 kN; each support pushes inward on the arch, and the arch pushes outward on its supports.</li><li>Springings at different levels: for a crown load W, with the crown h<sub>1</sub> above the left and h<sub>2</sub> above the right springing, H = WL/(2(h<sub>1</sub> + h<sub>2</sub>)).</li></ul>",
            "moreHtml": "<p>Derivation of the unequal-level result: moments of each half about the crown hinge give V<sub>A</sub>(L/2) = Hh<sub>1</sub> and V<sub>B</sub>(L/2) = Hh<sub>2</sub>, the crown load itself having no lever arm. Adding and using V<sub>A</sub> + V<sub>B</sub> = W gives 2H(h<sub>1</sub> + h<sub>2</sub>)/L = W. A squared height sum in the denominator would give force per length, not force.</p>",
            "points": [
              {
                "html": "The key result is WL/[2(h1+h2)]. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-04-00034",
                    "label": "p. 16; topic 4 point 33"
                  }
                ]
              },
              {
                "html": "The key result is 60 kN and 30 kN.",
                "sources": [
                  {
                    "id": "CAP4-04-00088",
                    "label": "p. 18; topic 4 point 88"
                  }
                ]
              },
              {
                "html": "The key result is 40 kN inward.",
                "sources": [
                  {
                    "id": "CAP4-04-00094",
                    "label": "p. 18; topic 4 point 94"
                  }
                ]
              },
              {
                "html": "The key result is The three hinge locations are noncollinear and restraint is adequate.",
                "sources": [
                  {
                    "id": "CAP4-04-00115",
                    "label": "p. 19; topic 4 point 115"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00034",
                "label": "p. 16; topic 4 point 33"
              },
              {
                "id": "CAP4-04-00088",
                "label": "p. 18; topic 4 point 88"
              },
              {
                "id": "CAP4-04-00094",
                "label": "p. 18; topic 4 point 94"
              },
              {
                "id": "CAP4-04-00115",
                "label": "p. 19; topic 4 point 115"
              }
            ]
          },
          {
            "id": "three-hinged-ild-envelope",
            "title": "Three-hinged arch influence lines and the rolling-load moment envelope",
            "html": "<p>For a three-hinged arch with level springings and a midspan crown hinge, H = M<sub>0,crown</sub>/h for every load position. The influence line for thrust is therefore the crown simple-beam moment influence line divided by the rise: a triangle with peak L/(4h) at the crown. For a 24 m span and 6 m rise the peak ordinate is 24/(4 × 6) = 1.00, a dimensionless ratio of thrust to load, not a length or a moment.</p><p>A rolling point load on a symmetric parabolic three-hinged arch produces a bending-moment envelope, the largest moment each section can ever experience. With the load P at section s on the left half, crown equilibrium gives H = Ps/(2h), and with y = 4hs(L − s)/L<sup>2</sup> the moment there is M = Ps(L − s)(L − 2s)/L<sup>2</sup>.</p><p>Writing t = s/L, the maximum requires 1 − 6t + 6t<sup>2</sup> = 0, so the envelope peaks at L/(2√3) ≈ 0.289L on either side of the crown. This is an envelope property of the parabolic arch under a rolling load, not the location of the maximum for an arbitrary fixed load.</p>",
            "moreHtml": "<p>The peak section lies at t = 1/2 − 1/(2√3) ≈ 0.211 of the span from the nearer springing, where the envelope moment is PL·t(1 − t)(1 − 2t) = PL/(6√3) ≈ 0.096PL.</p>",
            "points": [
              {
                "html": "The key result is At a distance L/(2sqrt(3)) on either side of the crown.",
                "sources": [
                  {
                    "id": "CAP4-04-00037",
                    "label": "p. 16; topic 4 point 36"
                  }
                ]
              },
              {
                "html": "The key result is 1.00, at the crown.",
                "sources": [
                  {
                    "id": "CAP4-04-00052",
                    "label": "p. 17; topic 4 point 50"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00037",
                "label": "p. 16; topic 4 point 36"
              },
              {
                "id": "CAP4-04-00052",
                "label": "p. 17; topic 4 point 50"
              }
            ]
          },
          {
            "id": "thrust-line-and-arch-actions",
            "title": "Line of thrust, normal thrust and radial shear in arches",
            "html": "<p>At any arch section M = M<sub>0</sub> − Hy = H(y<sub>t</sub> − y), where y<sub>t</sub> = M<sub>0</sub>/H is the ordinate of the line of thrust. Bending vanishes only where the thrust line passes through the rib axis. A thrust line parallel to the axis but offset still leaves a lever arm, and the straight chord joining the hinges is generally not the curved rib axis.</p><p>Resolve the section resultant (H, V) along the local tangent (cos θ, sin θ) and normal to it:</p><ul><li>Normal thrust N = H cos θ + V sin θ, the tangential projection;</li><li>Radial shear Q = V cos θ − H sin θ, the other projection, with signs following the chosen positive directions.</li></ul><p>For a parabolic three-hinged arch with level springings, a midspan crown hinge and a full-span load per horizontal metre, H = wL<sup>2</sup>/(8h) and the vertical shear force equals H tan θ at every section. Hence Q = 0 everywhere, springings included, and M = 0 as well: the parabola is the funicular shape for this load and carries it in pure compression.</p><p>The global vertical component V is not zero, so mistaking V for the local radial shear produces a false maximum at the springings. Other load patterns do cause radial shear, which must be evaluated along the actual arch.</p>",
            "points": [
              {
                "html": "The key result is The thrust-line ordinate M0/H equals y.",
                "sources": [
                  {
                    "id": "CAP4-04-00041",
                    "label": "pp. 16, 17; topic 4 point 39; topic 4 point 53"
                  }
                ]
              },
              {
                "html": "The key result is Zero throughout.",
                "sources": [
                  {
                    "id": "CAP4-04-00096",
                    "label": "p. 18; topic 4 point 96"
                  }
                ]
              },
              {
                "html": "The key result is H cos theta + V sin theta.",
                "sources": [
                  {
                    "id": "CAP4-05-00109",
                    "label": "p. 22; topic 5 point 107"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00041",
                "label": "pp. 16, 17; topic 4 point 39; topic 4 point 53"
              },
              {
                "id": "CAP4-04-00096",
                "label": "p. 18; topic 4 point 96"
              },
              {
                "id": "CAP4-05-00109",
                "label": "p. 22; topic 5 point 107"
              }
            ]
          },
          {
            "id": "two-hinged-semicircular-arches",
            "title": "Two-hinged semicircular arches: one redundant, compatibility and reaction locus",
            "html": "<p>A stable arch pinned at both springings with no internal hinge has four reaction components and three equilibrium equations, so it is indeterminate to degree one. With the horizontal thrust H as the redundant, the missing equation is compatibility: the springings do not move apart. Inventing a crown hinge would analyse a different structure.</p><p>For a semicircular rib of radius R with constant EI and immovable supports, considering bending deformation only:</p><ul><li>A crown point load P gives H = P/π. The radius cancels, so arches of radii 5 m, 7.5 m and 10 m under the same crown load have equal thrusts, 1 : 1 : 1. This independence does not survive nonuniform stiffness, axial shortening, temperature change or support movement.</li><li>A uniform load w per horizontal metre over the whole span gives H = 4wR/(3π); by symmetry and superposition, loading only the left half gives half of it, H = 2wR/(3π). For R = 6 m and w = 3 kN/m this is 36/(3π) ≈ 3.82 kN.</li><li>A point load P at distance a from the left springing gives V<sub>A</sub> = P(2R − a)/(2R) and H = Pa(2R − a)/(πR<sup>2</sup>). The two reaction lines meet directly above the load at height (a·V<sub>A</sub>)/H = πR/2, whatever the value of a, so the intersection moves along a horizontal straight line.</li></ul>",
            "moreHtml": "<p>In general H = (∫M<sub>0</sub>y ds)/(∫y<sup>2</sup> ds) for constant EI and bending only. For the semicircle ∫y<sup>2</sup> ds = πR<sup>3</sup>/2, and a crown load gives ∫M<sub>0</sub>y ds = PR<sup>3</sup>/2, hence H = P/π. A load specified per metre of curved rib instead of per horizontal metre, or a model with finite axial flexibility, gives different results.</p>",
            "points": [
              {
                "html": "The key result is Compatibility of the restrained horizontal span.",
                "sources": [
                  {
                    "id": "CAP4-04-00038",
                    "label": "p. 16; topic 4 point 38"
                  }
                ]
              },
              {
                "html": "The key result is 3.82 kN.",
                "sources": [
                  {
                    "id": "CAP4-04-00046",
                    "label": "p. 16; topic 4 point 44"
                  }
                ]
              },
              {
                "html": "The key result is 1 : 1 : 1.",
                "sources": [
                  {
                    "id": "CAP4-04-00047",
                    "label": "p. 16; topic 4 point 45"
                  }
                ]
              },
              {
                "html": "The key result is A horizontal line at height pi R/2 above the springing line.",
                "sources": [
                  {
                    "id": "CAP4-04-00111",
                    "label": "p. 19; topic 4 point 110"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00038",
                "label": "p. 16; topic 4 point 38"
              },
              {
                "id": "CAP4-04-00046",
                "label": "p. 16; topic 4 point 44"
              },
              {
                "id": "CAP4-04-00047",
                "label": "p. 16; topic 4 point 45"
              },
              {
                "id": "CAP4-04-00111",
                "label": "p. 19; topic 4 point 110"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-unequal-springings-thrust",
            "status": "review",
            "prompt": "Three-hinged arch with supports at heights h1 and h2 and a central load W: thrust WL divided by a function of h1 + h2",
            "html": "<p>The printed denominator cannot be decoded reliably from the extracted text. Equilibrium, with h<sub>1</sub> and h<sub>2</sub> measured from each springing up to the crown, gives H = WL/(2(h<sub>1</sub> + h<sub>2</sub>)); a squared height sum would give wrong units.</p>",
            "sources": [
              {
                "id": "CAP4-04-00034",
                "label": "p. 16; topic 4 point 33"
              }
            ]
          },
          {
            "id": "caution-rolling-load-envelope",
            "status": "review",
            "prompt": "Maximum bending moment in a three-hinged arch under point load occurs on either side of the crown at a fixed distance",
            "html": "<p>The L/(2√3) result needs a symmetric parabolic arch with level supports and a midspan crown hinge, and it describes the envelope under a rolling point load. It is not the maximum-moment location for an arbitrary fixed point load.</p>",
            "sources": [
              {
                "id": "CAP4-04-00037",
                "label": "p. 16; topic 4 point 36"
              }
            ]
          },
          {
            "id": "caution-thrust-hinge-axis",
            "status": "corrected",
            "prompt": "In a two-hinged arch, the moment is zero where the thrust axis and the hinge axis coincide",
            "html": "<p>Corrected: bending vanishes where the line of thrust passes through the arch's own rib axis, since M = H(y<sub>t</sub> − y). The straight line joining the hinges is generally not the rib axis, and parallel offset lines still leave a moment.</p>",
            "sources": [
              {
                "id": "CAP4-04-00041",
                "label": "pp. 16, 17; topic 4 point 39; topic 4 point 53"
              }
            ]
          },
          {
            "id": "caution-half-span-semicircle-thrust",
            "status": "review",
            "prompt": "Two-hinged semicircular arch with UDL w over the left half: horizontal thrust 2wR/(3π)",
            "html": "<p>Valid for constant EI, immovable springings, load per horizontal metre and bending deformation only. The extracted capsule text shows only 3 in the denominator; π must be included, giving about 3.82 kN for R = 6 m and w = 3 kN/m.</p>",
            "sources": [
              {
                "id": "CAP4-04-00046",
                "label": "p. 16; topic 4 point 44"
              }
            ]
          },
          {
            "id": "caution-thrust-ild-peak",
            "status": "review",
            "prompt": "The horizontal-thrust ILD of a three-hinged arch is a triangle with central ordinate L/(4h)",
            "html": "<p>The extracted 4Lh is damaged; the dimensionally consistent value is L/(4h), a thrust-per-unit-load ratio. It assumes level springings with the internal hinge at the midspan crown, which the capsule wording does not state.</p>",
            "sources": [
              {
                "id": "CAP4-04-00052",
                "label": "p. 17; topic 4 point 50"
              }
            ]
          },
          {
            "id": "caution-wheel-load-rule",
            "status": "review",
            "prompt": "Maximum bending moment due to a train of wheel loads always occurs under a wheel load",
            "html": "<p>True for downward point loads alone, because the moment is piecewise linear between wheels. The maximum may extend over a zero-shear plateau between wheels, and an added distributed load or couple voids the rule.</p>",
            "sources": [
              {
                "id": "CAP4-04-00063",
                "label": "p. 17; topic 4 point 62"
              }
            ]
          },
          {
            "id": "caution-arch-vertical-reaction",
            "status": "review",
            "prompt": "Vertical reaction of an arch with load W at distance a on total span 2l is Wa/(2l)",
            "html": "<p>The extracted W2la does not say which support is meant or where a is measured from. With level springings and a measured from A, Wa/(2l) is the reaction at B, and A carries the remainder: 60 kN and 30 kN for 90 kN at 6 m on 18 m.</p>",
            "sources": [
              {
                "id": "CAP4-04-00088",
                "label": "p. 18; topic 4 point 88"
              }
            ]
          },
          {
            "id": "caution-parabolic-arch-springing-shear",
            "status": "corrected",
            "prompt": "Maximum shear force in a three-hinged parabolic arch usually occurs at the springings",
            "html": "<p>Corrected: under a full-span horizontal UDL the parabolic three-hinged arch is funicular and its radial shear is zero everywhere, springings included. For other loads, radial shear must be evaluated along the arch rather than assumed largest at the springings.</p>",
            "sources": [
              {
                "id": "CAP4-04-00096",
                "label": "p. 18; topic 4 point 96"
              }
            ]
          },
          {
            "id": "caution-reaction-locus",
            "status": "review",
            "prompt": "The locus of reaction of a two-hinged semicircular arch is a straight line",
            "html": "<p>The claim needs a definition and assumptions. For constant EI, immovable springings and bending-only compatibility, the intersection of the two reaction lines under a moving vertical load lies on a horizontal line πR/2 above the springings, for interior load positions.</p>",
            "sources": [
              {
                "id": "CAP4-04-00111",
                "label": "p. 19; topic 4 point 110"
              }
            ]
          },
          {
            "id": "caution-third-hinge-anywhere",
            "status": "review",
            "prompt": "A three-hinged arch is hinged at the supports and anywhere in the arch",
            "html": "<p>The internal hinge need not be at the crown, but the three hinges must not be collinear and the supports must restrain the arch adequately; collinear hinges give a degenerate mechanism.</p>",
            "sources": [
              {
                "id": "CAP4-04-00115",
                "label": "p. 19; topic 4 point 115"
              }
            ]
          }
        ],
        "gaps": [
          "Shear influence lines for simple and overhanging spans, and the Muller-Breslau construction, are not examined.",
          "Numerical use of influence-line ordinates and areas for multi-axle trains, including absolute maximum moment positioning, is not worked.",
          "Two-hinged arch coverage here is limited to semicircular ribs with constant EI; rib shortening, temperature and support movement are not quantified.",
          "Arches with springings at different levels are covered only for a crown load."
        ]
      },
      "ACiE0406": {
        "code": "ACiE0406",
        "questionCount": 18,
        "format": 2,
        "summary": "<p>Indeterminate structures covers Flexibility, two-hinged parabolic arches, slope-deflection, moment distribution, stiffness methods, continuous-beam influence lines and elementary plastic analysis. The sections below reorganize the reviewed capsule material into concepts, calculations, qualifications and limits, with every mapped question linked to a key fact.</p>",
        "blocks": [
          {
            "id": "continuous-beams-method-families",
            "title": "Continuous beams and the force versus displacement method families",
            "html": "<p>A continuous beam is one unbroken member running over more than two supports, so it transmits bending moment across its interior supports. Two separate beams that merely meet over a middle support do not; they are two simple spans. An interior simple support restrains deflection but creates no hinge in a continuous beam.</p><p>Indeterminate structures are solved by one of two method families:</p><ul><li>Force (flexibility) methods take redundant forces as the unknowns and enforce compatibility of displacements, for example zero deflection at a prop or zero spreading of arch springings.</li><li>Displacement (stiffness) methods take joint translations and rotations as the unknowns and enforce equilibrium. Assembling Kd = F and solving for the nodal displacements d is the stiffness matrix method; member forces are then recovered from those displacements through the member stiffness relations.</li></ul><p>Slope-deflection and moment distribution belong to the displacement family, whereas limit analysis of collapse mechanisms and graphical force polygons are different tools altogether.</p>",
            "points": [
              {
                "html": "The key result is A continuous two-span beam.",
                "sources": [
                  {
                    "id": "CAP4-04-00010",
                    "label": "p. 15; topic 4 point 10"
                  }
                ]
              },
              {
                "html": "The key result is A stiffness or displacement method.",
                "sources": [
                  {
                    "id": "CAP4-04-00042",
                    "label": "p. 16; topic 4 point 40"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00010",
                "label": "p. 15; topic 4 point 10"
              },
              {
                "id": "CAP4-04-00042",
                "label": "p. 16; topic 4 point 40"
              }
            ]
          },
          {
            "id": "rotational-stiffness-end-conditions",
            "title": "Rotational stiffness and far-end conditions: 4EI/L, 3EI/L and EI/L",
            "html": "<p>The rotational stiffness of a member end is the moment needed per unit rotation there, and it depends on how the far end is held. For a prismatic member with no span load and both ends held against transverse translation, slope-deflection gives M<sub>A</sub> = (2EI/L)(2θ<sub>A</sub> + θ<sub>B</sub>).</p><ul><li>Far end fixed, θ<sub>B</sub> = 0: M<sub>A</sub>/θ<sub>A</sub> = 4EI/L.</li><li>Far end hinged: zero far-end moment requires θ<sub>B</sub> = −θ<sub>A</sub>/2, giving M<sub>A</sub>/θ<sub>A</sub> = 3EI/L. With EI = 16000 kN·m<sup>2</sup> and L = 4 m this is 12000 kN·m/rad, against 16000 kN·m/rad for a fixed far end.</li><li>Far end guided, prevented from rotating but free to slide transversely without force: with no transverse force the internal moment is constant, and integrating the curvature gives a relative end rotation θ = ML/(EI), so the stiffness is only EI/L.</li></ul><p>The more freedom the far end has, the smaller the stiffness. Choosing the correct far-end condition matters because these stiffnesses decide how moment is shared at a joint.</p>",
            "points": [
              {
                "html": "The key result is EI/L. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-04-00043",
                    "label": "p. 16; topic 4 point 41"
                  }
                ]
              },
              {
                "html": "The key result is 12000 kN m/rad.",
                "sources": [
                  {
                    "id": "CAP4-04-00055",
                    "label": "p. 17; topic 4 point 54"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00043",
                "label": "p. 16; topic 4 point 41"
              },
              {
                "id": "CAP4-04-00055",
                "label": "p. 17; topic 4 point 54"
              }
            ]
          },
          {
            "id": "moment-distribution",
            "title": "Moment distribution: distribution factors, balancing and what the iteration solves",
            "html": "<p>Moment distribution, introduced by Hardy Cross, releases and rebalances joints in turn. At a joint, each member takes a share of the unbalanced moment in proportion to its rotational stiffness, evaluated with its actual far-end condition: DF<sub>i</sub> = k<sub>i</sub>/Σk, where the sum covers all members meeting at that joint, so the factors add to one.</p><ul><li>Stiffnesses of 20, 30 and 50 kN·m/rad: the factor for the 30 kN·m/rad member is 30/(20 + 30 + 50) = 0.30.</li><li>Stiffnesses of 6000 and 4000 kN·m/rad with an unbalance of +50 kN·m: factors 0.6 and 0.4 and balancing increments of −30 kN·m and −20 kN·m. The increments oppose the unbalance and add to −50 kN·m.</li></ul><p>Carrying increments to the far ends and repeating the balancing converges to the solution of the joint-equilibrium equations of the slope-deflection method; the procedure is an iterative way of solving those simultaneous equations. For a frame that sways, translational equilibrium must be included as well, otherwise a different, non-sway model is being solved. Castigliano (energy derivatives), Muller-Breslau (influence-line construction) and Mohr (graphical stress and structural methods) are associated with other contributions.</p>",
            "points": [
              {
                "html": "The key result is The joint-equilibrium equations of slope-deflection.",
                "sources": [
                  {
                    "id": "CAP4-04-00044",
                    "label": "pp. 16, 18; topic 4 point 42; topic 4 point 103"
                  }
                ]
              },
              {
                "html": "The key result is Hardy Cross.",
                "sources": [
                  {
                    "id": "CAP4-04-00057",
                    "label": "p. 17; topic 4 point 56"
                  }
                ]
              },
              {
                "html": "The key result is -30 kN m.",
                "sources": [
                  {
                    "id": "CAP4-04-00079",
                    "label": "p. 18; topic 4 point 77"
                  }
                ]
              },
              {
                "html": "The key result is 0.30. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-05-00128",
                    "label": "p. 23; topic 5 point 127"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00044",
                "label": "pp. 16, 18; topic 4 point 42; topic 4 point 103"
              },
              {
                "id": "CAP4-04-00057",
                "label": "p. 17; topic 4 point 56"
              },
              {
                "id": "CAP4-04-00079",
                "label": "p. 18; topic 4 point 77"
              },
              {
                "id": "CAP4-05-00128",
                "label": "p. 23; topic 5 point 127"
              }
            ]
          },
          {
            "id": "two-hinged-arch-compatibility",
            "title": "Two-hinged arch thrust from compatibility, with parabolic examples",
            "html": "<p>Release the horizontal thrust of a two-hinged arch with level, immovable springings and write the moment as M = M<sub>0</sub> − Hy, where M<sub>0</sub> is the released simple-beam moment and y the rib height above the support chord. With U = ∫M<sup>2</sup> dμ/2 and dμ = ds/(EI), zero horizontal movement requires ∂U/∂H = 0, that is ∫(M<sub>0</sub> − Hy)y dμ = 0.</p><p>Hence H = (∫M<sub>0</sub>y dμ)/(∫y<sup>2</sup> dμ), integrated over the whole arch: one thrust for the whole arch, not a separate local value at each point.</p><ul><li>Shallow parabola, crown load W: with y = 4hx(L − x)/L<sup>2</sup>, ds ≈ dx and constant EI, the integrals are 5WhL<sup>2</sup>/48 and 8h<sup>2</sup>L/15, giving H = 25WL/(128h). For 32 kN on a 16 m span with 2 m rise, H = 25 × 32 × 16/(128 × 2) = 50 kN.</li><li>Triangular load rising from zero to w across the span: it and its mirror image add to a full UDL w, and by symmetry and linearity each carries half of wL<sup>2</sup>/(8h). Hence H = wL<sup>2</sup>/(16h); for 8 kN/m on a 12 m span with 3 m rise, H = 8 × 144/48 = 24 kN. Keep the rise h distinct from the thrust H.</li></ul><p>Retaining the exact arc-length weighting instead of ds ≈ dx generally changes the coefficient.</p>",
            "points": [
              {
                "html": "The key result is H = integral(M0 y dmu)/integral(y^2 dmu).",
                "sources": [
                  {
                    "id": "CAP4-04-00048",
                    "label": "p. 17; topic 4 point 46"
                  }
                ]
              },
              {
                "html": "The key result is 50 kN.",
                "sources": [
                  {
                    "id": "CAP4-04-00067",
                    "label": "p. 17; topic 4 point 66"
                  }
                ]
              },
              {
                "html": "The key result is 24 kN.",
                "sources": [
                  {
                    "id": "CAP4-04-00077",
                    "label": "p. 18; topic 4 point 75"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00048",
                "label": "p. 17; topic 4 point 46"
              },
              {
                "id": "CAP4-04-00067",
                "label": "p. 17; topic 4 point 66"
              },
              {
                "id": "CAP4-04-00077",
                "label": "p. 18; topic 4 point 75"
              }
            ]
          },
          {
            "id": "parabolic-arch-funicular-temperature",
            "title": "Parabolic two-hinged arches: funicular UDL and temperature thrust",
            "html": "<p>For a symmetric two-hinged parabolic arch carrying a uniform load w over its full horizontal span, the compatibility thrust is H = wL<sup>2</sup>/(8h). Then M<sub>0</sub> = wx(L − x)/2 and Hy = [wL<sup>2</sup>/(8h)][4hx(L − x)/L<sup>2</sup>] = wx(L − x)/2, so M = 0 everywhere.</p><p>Because the vertical shear equals H tan θ at every section, the radial shear is zero too: the rib carries pure normal thrust, compression along the tangent. This funicular state belongs to that loading and to the first-order, bending-only model; retaining axial shortening or changing the load pattern disturbs it.</p><p>A uniform temperature rise would lengthen the free span by αΔT L. If the springings cannot move apart, an elastic displacement must cancel that expansion, so the inward thrust increases by ΔH = (αΔT·L)/f<sub>HH</sub>, where f<sub>HH</sub> is the horizontal flexibility of the released arch. By the same reasoning uniform cooling reduces the thrust. A movable springing or a temperature gradient through the rib is a different case.</p>",
            "points": [
              {
                "html": "The key result is It increases to oppose free span expansion.",
                "sources": [
                  {
                    "id": "CAP4-04-00097",
                    "label": "p. 18; topic 4 point 97"
                  }
                ]
              },
              {
                "html": "The key result is Compression along the tangent, with zero bending and radial shear.",
                "sources": [
                  {
                    "id": "CAP4-04-00116",
                    "label": "p. 19; topic 4 point 116"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00097",
                "label": "p. 18; topic 4 point 97"
              },
              {
                "id": "CAP4-04-00116",
                "label": "p. 19; topic 4 point 116"
              }
            ]
          },
          {
            "id": "plastic-hinges-shape-factor",
            "title": "Plastic hinges, the rigid-segment mechanism and shape factor",
            "html": "<p>Plastic analysis assumes an elastic–perfectly plastic material. As the moment grows, a section yields from its extreme fibres inward until it reaches the plastic moment M<sub>p</sub> = f<sub>y</sub>Z<sub>p</sub> and then rotates freely at that moment, forming a plastic hinge.</p><p>In the collapse-mechanism idealization, elastic deformations are negligible beside the large hinge rotations, so the segments between successive hinges move as rigid bodies while all relative rotation is concentrated at the hinges. This is a modelling simplification, not a claim that the segments are infinitely stiff.</p><p>The shape factor Z<sub>p</sub>/Z<sub>e</sub> = M<sub>p</sub>/M<sub>y</sub> measures the reserve beyond first yield, assuming equal tension and compression yield, no axial force and no buckling or strain hardening:</p><ul><li>Rectangle b × d: Z<sub>e</sub> = bd<sup>2</sup>/6 and Z<sub>p</sub> = bd<sup>2</sup>/4, so the ratio is 1.5.</li><li>Solid rhombus with horizontal diagonal b and vertical diagonal d, bent about the horizontal diagonal: the width at height y is b(1 − 2|y|/d), so I = bd<sup>3</sup>/48, Z<sub>e</sub> = I/(d/2) = bd<sup>2</sup>/24 and Z<sub>p</sub> = ∫|y| dA = bd<sup>2</sup>/12, giving 2.0.</li></ul>",
            "points": [
              {
                "html": "The key result is 1.50. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-01-00080",
                    "label": "p. 4; topic 1 point 76"
                  }
                ]
              },
              {
                "html": "The key result is Rigid-segment motion with plastic rotation concentrated at hinges.",
                "sources": [
                  {
                    "id": "CAP4-04-00045",
                    "label": "p. 16; topic 4 point 43"
                  }
                ]
              },
              {
                "html": "The key result is 2.00. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-04-00072",
                    "label": "p. 17; topic 4 point 70"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00080",
                "label": "p. 4; topic 1 point 76"
              },
              {
                "id": "CAP4-04-00045",
                "label": "p. 16; topic 4 point 43"
              },
              {
                "id": "CAP4-04-00072",
                "label": "p. 17; topic 4 point 70"
              }
            ]
          },
          {
            "id": "propped-cantilever-elastic-plastic",
            "title": "Propped cantilever under UDL: elastic contraflexure versus collapse hinge",
            "html": "<p>Two special sections of a propped cantilever carrying a full-span UDL are often confused.</p><ul><li>Elastic stage: compatibility, zero deflection at an unyielding prop, gives a prop reaction of 3wL/8. Measuring z from the prop, M = (3wL/8)z − wz<sup>2</sup>/2, which returns to zero at z = 3L/4. The point of contraflexure is therefore L/4 from the fixed end, with shear deformation neglected.</li><li>Plastic collapse: with equal, uniform sagging and hogging capacity M<sub>p</sub>, hinges form at the fixed end and at an interior section a from the fixed end and b = L − a from the prop. Virtual work gives w = 2M<sub>p</sub>(2/a + 1/b)/L; minimizing this collapse load over a gives a = √2·b, hence b = (√2 − 1)L ≈ 0.414L from the prop.</li></ul><p>The 0.414L section is a plastic hinge in a collapse mechanism, not an elastic zero-moment section, and the L/4 contraflexure point is not a hinge at all. The collapse location also depends on the full-span UDL and uniform M<sub>p</sub>; other loads or capacities move it.</p>",
            "moreHtml": "<p>Supporting values: the elastic fixed-end moment is (3wL/8)L − wL<sup>2</sup>/2 = −wL<sup>2</sup>/8, and the largest sagging moment is 9wL<sup>2</sup>/128 at 3L/8 from the prop. Substituting b = (√2 − 1)L and a = (2 − √2)L into the virtual-work equation gives the collapse load w<sub>c</sub> = (6 + 4√2)M<sub>p</sub>/L<sup>2</sup> ≈ 11.66M<sub>p</sub>/L<sup>2</sup>.</p>",
            "points": [
              {
                "html": "The key result is (sqrt(2) - 1)L, approximately 0.414L.",
                "sources": [
                  {
                    "id": "CAP4-04-00016",
                    "label": "p. 15; topic 4 point 16"
                  }
                ]
              },
              {
                "html": "The key result is L/4. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-04-00017",
                    "label": "p. 15; topic 4 point 16"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00016",
                "label": "p. 15; topic 4 point 16"
              },
              {
                "id": "CAP4-04-00017",
                "label": "p. 15; topic 4 point 16"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-propped-hinge-location",
            "status": "review",
            "prompt": "In a propped cantilever, the internal hinge is located 0.414L from the propped end",
            "html": "<p>Holds only for plastic collapse under a full-span UDL with uniform, equal sagging and hogging plastic moment. It is a plastic-hinge location, distinct from the elastic contraflexure point L/4 from the fixed end.</p>",
            "sources": [
              {
                "id": "CAP4-04-00016",
                "label": "p. 15; topic 4 point 16"
              }
            ]
          },
          {
            "id": "caution-guided-far-end",
            "status": "review",
            "prompt": "Stiffness of end A when the far end B is a vertically guided roller is EI/L",
            "html": "<p>The capsule does not define the guide fully. EI/L applies when B cannot rotate but slides transversely without force; restraining B's translation as well gives 4EI/L, and a translation-fixed hinge at B gives 3EI/L.</p>",
            "sources": [
              {
                "id": "CAP4-04-00043",
                "label": "p. 16; topic 4 point 41"
              }
            ]
          },
          {
            "id": "caution-two-hinged-thrust-formula",
            "status": "review",
            "prompt": "Horizontal thrust of a two-hinged arch with constant EI is a ratio of integrals of M·y and y²",
            "html": "<p>The capsule formula is corrupted in both extractions. The version taught here, H = (∫M<sub>0</sub>y dμ)/(∫y<sup>2</sup> dμ) with dμ = ds/(EI) and ds the arc length, is reconstructed from compatibility rather than read from the printed page.</p>",
            "sources": [
              {
                "id": "CAP4-04-00048",
                "label": "p. 17; topic 4 point 46"
              }
            ]
          },
          {
            "id": "caution-parabolic-crown-coefficient",
            "status": "review",
            "prompt": "Parabolic two-hinged arch with crown load W: horizontal thrust 25WL/(128h)",
            "html": "<p>The printed coefficient is unreadable in the extraction. The value 25/128 follows from the shallow-arch approximation ds ≈ dx with constant EI; exact arc-length weighting changes it, and the original typography remains unconfirmed.</p>",
            "sources": [
              {
                "id": "CAP4-04-00067",
                "label": "p. 17; topic 4 point 66"
              }
            ]
          },
          {
            "id": "caution-uvl-thrust-notation",
            "status": "review",
            "prompt": "Two-hinged parabolic arch under a load varying from zero to w: thrust wL² over 16 times the rise",
            "html": "<p>The capsule writes the denominator as 16H, which confuses rise with thrust. With rise h, symmetric stiffness, immovable supports and bending-only compatibility, H = wL<sup>2</sup>/(16h), 24 kN in the worked example.</p>",
            "sources": [
              {
                "id": "CAP4-04-00077",
                "label": "p. 18; topic 4 point 75"
              }
            ]
          },
          {
            "id": "caution-temperature-thrust",
            "status": "review",
            "prompt": "In a two-hinged parabolic arch, an increase in temperature increases the horizontal thrust",
            "html": "<p>True for uniform heating of a material with a positive expansion coefficient when the springings keep a fixed spacing, in a stable linear model. A movable springing or a temperature gradient needs separate treatment.</p>",
            "sources": [
              {
                "id": "CAP4-04-00097",
                "label": "p. 18; topic 4 point 97"
              }
            ]
          },
          {
            "id": "caution-normal-thrust-only",
            "status": "review",
            "prompt": "A symmetric two-hinged parabolic arch under UDL on the entire span carries normal thrust only",
            "html": "<p>Valid only for a uniform load over the whole horizontal span with first-order, bending-only compatibility. Other load patterns, or allowing for axial shortening, introduce bending and radial shear.</p>",
            "sources": [
              {
                "id": "CAP4-04-00116",
                "label": "p. 19; topic 4 point 116"
              }
            ]
          },
          {
            "id": "caution-distribution-factor-denominator",
            "status": "corrected",
            "prompt": "The distribution factor is the ratio of the stiffness of a member to that of a member",
            "html": "<p>Corrected: the denominator is the sum of the rotational stiffnesses of all members meeting at the joint, each with its actual far-end condition. With 20, 30 and 50 kN·m/rad, the 30 kN·m/rad member takes 0.30.</p>",
            "sources": [
              {
                "id": "CAP4-05-00128",
                "label": "p. 23; topic 5 point 127"
              }
            ]
          }
        ],
        "gaps": [
          "Influence lines for continuous beams, listed in the syllabus, are not examined by these questions.",
          "Carry-over factors, fixed-end moments and complete numerical moment-distribution tables are not worked.",
          "Sway frames appear only qualitatively; slope-deflection with chord rotation and stiffness-matrix assembly are not practised numerically.",
          "Plastic analysis is limited to shape factors and the propped cantilever; fixed beams, frames and combined mechanisms lie outside this coverage."
        ]
      }
    });
})();
