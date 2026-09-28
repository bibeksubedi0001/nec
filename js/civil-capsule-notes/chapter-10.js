(function () {
    "use strict";
    window.CIVIL_CAPSULE_NOTE_TOPICS = window.CIVIL_CAPSULE_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_CAPSULE_NOTE_TOPICS, {
      "AALL1001": {
        "code": "AALL1001",
        "questionCount": 33,
        "format": 2,
        "summary": "<p>This subchapter covers the basics of engineering drawing: lettering, A-series sheets and formats, drawing instruments and pencils, line types and sectioning, scales and the representative fraction, orthographic views in third-angle projection, oblique and isometric pictorial views, sections of a cone, and loci traced by moving points.</p>",
        "blocks": [
          {
            "id": "lettering-height-and-inclination",
            "title": "Lettering size, character proportions and inclined lettering",
            "html": "<p>In technical lettering, the stated size means the nominal height of the capital letters. If a title block calls for 5 mm lettering, a narrow capital I and a broad capital M both stand 5 mm tall.</p><p>The aspect ratio (width to height) is 1 : 2 for letters and 1 : 3 for numbers.</p><p>Inclined lettering is conventionally sloped at 75° to its horizontal baseline. The vertical makes 90° with the baseline, so the strokes lean 15° from the vertical, toward the right. Not every permitted lettering style is inclined.</p>",
            "formulas": [
              {
                "label": "Lean of inclined lettering from the vertical",
                "tex": "90^\\circ - 75^\\circ = 15^\\circ"
              }
            ],
            "moreHtml": "<p>When checking such a figure, name the reference line first. Angles measured from the baseline and from the vertical are complementary, so a 75° slope and a 15° lean describe the same stroke.</p>",
            "points": [
              {
                "html": "The size of a letter means its height.",
                "sources": [
                  {
                    "id": "CAP4-10-00001",
                    "label": "p. 37; topic 10 point 1"
                  }
                ]
              },
              {
                "html": "The aspect ratio (width to height) of letters and numbers is, respectively, 1: 2 and 1: 3.",
                "sources": [
                  {
                    "id": "CAP4-10-00002",
                    "label": "p. 37; topic 10 point 2"
                  }
                ]
              },
              {
                "html": "The inclination of inclined lettering is 75° to the horizontal.",
                "sources": [
                  {
                    "id": "CAP4-10-00003",
                    "label": "p. 37; topic 10 point 3"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00001",
                "label": "p. 37; topic 10 point 1"
              },
              {
                "id": "CAP4-10-00002",
                "label": "p. 37; topic 10 point 2"
              },
              {
                "id": "CAP4-10-00003",
                "label": "p. 37; topic 10 point 3"
              }
            ]
          },
          {
            "id": "a-series-area-and-side-ratio",
            "title": "A-series sheets: halving the area while keeping the shape",
            "html": "<p>The A-series starts from an ideal A0 sheet of 1 m<sup>2</sup>. Each smaller size comes from halving the long side of the one before, so every step halves the area: A1 is 1/2 m<sup>2</sup>, A2 is 1/4 m<sup>2</sup>, and A3, three halvings below A0, is 0.125 m<sup>2</sup>.</p><p>Only one side ratio lets the shape survive the halving. Call the long side L and the short side S. After halving, the new sheet has long side S and short side L/2, and similarity requires the two ratios to be equal. Dividing the long side by \\(\\sqrt{2}\\) gives the short side, about 0.707 of the long side.</p>",
            "formulas": [
              {
                "label": "Ideal area of sheet An",
                "tex": "A_n = \\dfrac{1}{2^n}\\ \\text{m}^2"
              },
              {
                "label": "Similarity after halving",
                "tex": "\\dfrac{L}{S} = \\dfrac{S}{L/2} \\;\\Rightarrow\\; \\dfrac{L}{S} = \\sqrt{2}"
              }
            ],
            "example": {
              "title": "Worked example: A3 from A0",
              "html": "<p>A0 to A1 to A2 to A3 is three halvings, so \\(A_3 = 1/2^3 = 0.125\\) m<sup>2</sup>. Real sheets are trimmed to whole millimetres, so the printed dimensions give an area close to, but not exactly, this nominal value.</p>"
            },
            "points": [
              {
                "html": "The area of an A0 size paper is 1 m<sup>2</sup>.",
                "sources": [
                  {
                    "id": "CAP4-10-00005",
                    "label": "p. 37; topic 10 point 5"
                  }
                ]
              },
              {
                "html": "The width of standard A-series drawing paper, such as A4, A3 and A2, is \\(\\dfrac{1}{\\sqrt{2}}\\) times its length.",
                "sources": [
                  {
                    "id": "CAP4-10-00006",
                    "label": "p. 37; topic 10 point 6"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00005",
                "label": "p. 37; topic 10 point 5"
              },
              {
                "id": "CAP4-10-00006",
                "label": "p. 37; topic 10 point 6"
              }
            ]
          },
          {
            "id": "sheet-designation-orientation-and-formats",
            "title": "Sheet designation, orientation, aspect ratio and drawing formats",
            "html": "<p>An A-series designation names the trimmed dimensions of a sheet, not the way it is turned. Rotating an A3 sheet from portrait to landscape leaves it A3; only cutting or joining sheets changes the size. The letter A identifies a widely used paper series for drawings, which does not mean every paper product belongs to it.</p><p>Orientation matters as soon as a ratio is quoted. With aspect ratio defined as width to height, turning the sheet or quoting height to width reverses the order, so always state which dimension comes first.</p><p>A5, nominally 148 × 210 mm, is a genuine A-series size. A drawing standard or project specification may still restrict engineering drawings to a preferred set such as A0 to A4. Leaving A5 off such a list limits what the project accepts; it does not remove A5 from the paper series.</p>",
            "example": {
              "title": "Worked example: an aspect ratio",
              "html": "<p>A landscape graphic 180 mm wide and 120 mm high has width:height = 180:120. Dividing both terms by the common factor 60 gives 3:2; in portrait it would be 2:3.</p>"
            },
            "points": [
              {
                "html": "Standard drawing paper is designated by the letter A.",
                "sources": [
                  {
                    "id": "CAP4-10-00004",
                    "label": "p. 37; topic 10 point 4"
                  }
                ]
              },
              {
                "html": "In drawing, the aspect ratio refers to the ratio of width to height.",
                "sources": [
                  {
                    "id": "CAP4-10-00158",
                    "label": "p. 41; topic 10 point 148"
                  }
                ]
              },
              {
                "html": "A5 is not a standard designated size for an engineering drawing sheet.",
                "sources": [
                  {
                    "id": "CAP4-10-00166",
                    "label": "p. 41; topic 10 point 156"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00004",
                "label": "p. 37; topic 10 point 4"
              },
              {
                "id": "CAP4-10-00158",
                "label": "p. 41; topic 10 point 148"
              },
              {
                "id": "CAP4-10-00166",
                "label": "p. 41; topic 10 point 156"
              }
            ]
          },
          {
            "id": "drawing-board-set-squares-and-clinograph",
            "title": "Drawing board, set-square angles and the clinograph",
            "html": "<p>Dimensions quoted for a drawing board describe the board itself. A traditional D1 board listed as 1000 × 700 × 25 mm is read as the length, width and thickness of the support, not as a paper size, a border or a plotting scale.</p><p>The two fixed set squares provide 45°–45°–90° and 30°–60°–90° edges. Adding, subtracting or supplementing those angles always gives multiples of 15°: 105° = 60° + 45°, 75° = 45° + 30° and 150° = 180° − 30°. An angle of 115° is not a multiple of 15°, so the fixed edges cannot set it directly.</p><p>A <em>clinograph</em> is an adjustable set square used in place of several fixed-angle squares to draw lines at chosen inclinations. It is not a magnetic compass, and it differs from a clinometer, which measures inclination.</p>",
            "points": [
              {
                "html": "The standard size of a drawing board of designation D1 is \\(1000 \\times 700 \\times 25\\) mm.",
                "sources": [
                  {
                    "id": "CAP4-10-00010",
                    "label": "p. 37; topic 10 point 7"
                  }
                ]
              },
              {
                "html": "115° cannot be made with the help of set squares.",
                "sources": [
                  {
                    "id": "CAP4-10-00015",
                    "label": "p. 37; topic 10 point 15"
                  }
                ]
              },
              {
                "html": "A clinograph is a type of compass.",
                "sources": [
                  {
                    "id": "CAP4-01-00153",
                    "label": "p. 6; topic 1 point 146"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00010",
                "label": "p. 37; topic 10 point 7"
              },
              {
                "id": "CAP4-10-00015",
                "label": "p. 37; topic 10 point 15"
              },
              {
                "id": "CAP4-01-00153",
                "label": "p. 6; topic 1 point 146"
              }
            ]
          },
          {
            "id": "compass-divider-french-curve-and-freehand-circles",
            "title": "Compass, divider, French curve and freehand circles",
            "html": "<p>Select a curve-drawing aid by the geometry it enforces.</p><ul><li>A <em>compass</em> is anchored at a known centre and carries its marking point at a fixed radius, so repeated arcs of one centre and radius stay consistent.</li><li>A <em>divider</em> has two points and transfers or steps off distances; it carries no drawing lead.</li><li>A <em>French curve</em> has edges of continuously varying curvature. It fairs a smooth, noncircular profile through plotted points: part of its edge is fitted through neighbouring points, then the template is moved on so that successive segments overlap smoothly.</li></ul><p>Freehand sketching uses the definition of a circle as the locus of points at constant distance from a centre. Mark the centre, set out several points at about equal radial distance and join them with short, light arcs. Points at steadily increasing distance would suggest a spiral instead.</p>",
            "points": [
              {
                "html": "A compass is a drawing instrument used for drawing circles and arcs.",
                "sources": [
                  {
                    "id": "CAP4-10-00113",
                    "label": "p. 40; topic 10 point 106"
                  }
                ]
              },
              {
                "html": "A French curve is used to draw smooth free-form curves.",
                "sources": [
                  {
                    "id": "CAP4-10-00117",
                    "label": "p. 40; topic 10 point 110"
                  }
                ]
              },
              {
                "html": "The technique for drawing a circle in a free hand sketch is fixing a centre point and drawing arcs through points marked at the radius.",
                "sources": [
                  {
                    "id": "CAP4-10-00016",
                    "label": "p. 37; topic 10 point 16"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00113",
                "label": "p. 40; topic 10 point 106"
              },
              {
                "id": "CAP4-10-00117",
                "label": "p. 40; topic 10 point 110"
              },
              {
                "id": "CAP4-10-00016",
                "label": "p. 37; topic 10 point 16"
              }
            ]
          },
          {
            "id": "pencil-grades-and-line-contrast",
            "title": "Pencil grades and contrast between outlines and construction lines",
            "html": "<p>Graphite pencils follow the H and B grading system. Numbered H grades are harder and give lighter lines, numbered B grades are softer and darker, and HB is the conventional intermediate designation. A label such as HB1 is not a grade in this notation, although a manufacturer could print it as an unrelated product code.</p><p>Grading serves line hierarchy. Visible outlines must stand out, so a drafter may use a softer B pencil to make them dark while keeping construction lines faint with a harder grade. The grade alone does not make a line correct: sharpness, pressure, the paper and the specified drafting method also control width and darkness.</p>",
            "points": [
              {
                "html": "HB1 is not a pencil grade.",
                "sources": [
                  {
                    "id": "CAP4-10-00017",
                    "label": "p. 38; topic 10 point 17"
                  }
                ]
              },
              {
                "html": "A B pencil is used to draw visible lines.",
                "sources": [
                  {
                    "id": "CAP4-10-00120",
                    "label": "p. 40; topic 10 point 113"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00017",
                "label": "p. 38; topic 10 point 17"
              },
              {
                "id": "CAP4-10-00120",
                "label": "p. 40; topic 10 point 113"
              }
            ]
          },
          {
            "id": "hidden-lines-visibility-and-section-hatching",
            "title": "Hidden lines, view-dependent visibility and section hatching",
            "html": "<p>Each line type tells the reader what kind of boundary is shown. Visible outlines are continuous, edges concealed behind material in the current view are drawn as narrow dashed lines, and long-short chain lines mark axes and centres rather than boundaries.</p><p>Visibility belongs to the view, not to the edge. The same recess edge can be hidden when the object is seen from the front and directly visible from the side, so it is dashed in one view and continuous in the other with no change to the object.</p><p>A <em>sectional view</em> imagines the object cut by a plane and the nearer part removed. Hatching goes only on solid material the cutting plane actually passes through. In a full section of a hollow sleeve the metal wall is hatched and the empty bore stays clear; surfaces seen beyond the cut are outlined but not hatched.</p>",
            "points": [
              {
                "html": "Hidden lines are drawn as dashed narrow lines.",
                "sources": [
                  {
                    "id": "CAP4-10-00008",
                    "label": "p. 37; topic 10 point 9"
                  }
                ]
              },
              {
                "html": "A hidden line represents features that cannot be seen in the current view.",
                "sources": [
                  {
                    "id": "CAP4-10-00105",
                    "label": "p. 40; topic 10 point 97"
                  }
                ]
              },
              {
                "html": "Section lines are used to show that the object has been cut and then viewed.",
                "sources": [
                  {
                    "id": "CAP4-10-00007",
                    "label": "p. 37; topic 10 point 8"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00008",
                "label": "p. 37; topic 10 point 9"
              },
              {
                "id": "CAP4-10-00105",
                "label": "p. 40; topic 10 point 97"
              },
              {
                "id": "CAP4-10-00007",
                "label": "p. 37; topic 10 point 8"
              }
            ]
          },
          {
            "id": "scales-representative-fraction-and-radius-symbol",
            "title": "Scales, representative fraction and the radius symbol",
            "html": "<p>A scale compares drawing length with actual length, and the <em>representative fraction</em> (RF) states that comparison with both lengths in the same unit. Leaving metres unconverted against centimetres gives a false ratio.</p><p>A scale such as 1:10 is a reducing scale because the drawing is smaller than the object, whereas 10:1 would enlarge it. Maps are normally drawn to reducing scales because ground distances are large.</p><p>Dimensions always state the size of the object, whatever the scale. The prefix R denotes a radius, so a curve marked R25 on a millimetre drawing has the curvature of a circle of diameter 50 mm. Its circumference is a different quantity.</p>",
            "formulas": [
              {
                "label": "Representative fraction",
                "tex": "\\text{RF} = \\dfrac{\\text{drawing length}}{\\text{actual length}}",
                "where": "Both lengths must be in the same unit."
              },
              {
                "label": "Radius and diameter",
                "tex": "D = 2R"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>5 cm on a map represents 250 m = 25000 cm, so RF = 5/25000 = 1:5000, not 1:50.</li><li>A 600 mm component drawn 60 mm long needs 60/600 = 1:10.</li><li>R25 gives \\(D = 2 \\times 25 = 50\\) mm.</li></ol>"
            },
            "points": [
              {
                "html": "Maps are drawn to a reducing scale.",
                "sources": [
                  {
                    "id": "CAP4-10-00012",
                    "label": "p. 37; topic 10 point 12"
                  }
                ]
              },
              {
                "html": "Among the scales 2: 1, 5: 1, 20: 1 and 1: 10, the reducing scale is 1: 10.",
                "sources": [
                  {
                    "id": "CAP4-10-00143",
                    "label": "p. 41; topic 10 point 133"
                  }
                ]
              },
              {
                "html": "In dimensioning, the symbol R represents the radius.",
                "sources": [
                  {
                    "id": "CAP4-10-00115",
                    "label": "p. 40; topic 10 point 108"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00012",
                "label": "p. 37; topic 10 point 12"
              },
              {
                "id": "CAP4-10-00143",
                "label": "p. 41; topic 10 point 133"
              },
              {
                "id": "CAP4-10-00115",
                "label": "p. 40; topic 10 point 108"
              }
            ]
          },
          {
            "id": "orthographic-views-and-third-angle-layout",
            "title": "Choosing orthographic views and placing them in third-angle projection",
            "html": "<p>Each orthographic view shows two of the three principal dimensions, so views are chosen by the information still missing. If a bracket's height-and-depth profile cannot be read from its front and top views, the side view settles it directly. Three views are common, but the number needed depends on how ambiguous the object is.</p><table><thead><tr><th scope='col'>View</th><th scope='col'>Dimensions shown</th><th scope='col'>Third-angle position</th></tr></thead><tbody><tr><th scope='row'>Front</th><td>Width and height</td><td>Reference view</td></tr><tr><th scope='row'>Top</th><td>Width and depth</td><td>Above the front view</td></tr><tr><th scope='row'>Right side</th><td>Depth and height</td><td>Right of the front view</td></tr></tbody></table><p>In third-angle projection the projection plane lies between the observer and the object, which gives this layout when the planes are unfolded. The truncated-cone symbol on a drawing identifies the projection convention; it says nothing about the shape of the object drawn.</p>",
            "points": [
              {
                "html": "In orthographic projection, the additional third view generally drawn for simple objects is the side view.",
                "sources": [
                  {
                    "id": "CAP4-10-00013",
                    "label": "p. 37; topic 10 point 13"
                  }
                ]
              },
              {
                "html": "The symbol used to indicate third angle orthographic projection shows a frustum of a cone.",
                "sources": [
                  {
                    "id": "CAP4-10-00014",
                    "label": "p. 37; topic 10 point 14"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00013",
                "label": "p. 37; topic 10 point 13"
              },
              {
                "id": "CAP4-10-00014",
                "label": "p. 37; topic 10 point 14"
              }
            ]
          },
          {
            "id": "oblique-and-isometric-pictorial-views",
            "title": "Oblique drawing, isometric drawing and isometric projection",
            "html": "<p>In an <em>oblique drawing</em> the front face lies parallel to the picture plane, so it is drawn in its true shape at the drawing scale. A circular opening on that face stays a circle rather than becoming an ellipse, which is why oblique views suit objects with detailed front faces. Depth is drawn along inclined receding lines, at full or reduced length according to the convention chosen.</p><p>Isometric views show the three principal axes equally foreshortened. An <em>isometric drawing</em> simply lays off true lengths along the axes for convenience. An <em>isometric projection</em> applies the isometric scale to each axial length.</p>",
            "formulas": [
              {
                "label": "Isometric scale",
                "tex": "l_{\\text{iso}} = l\\sqrt{2/3} \\approx 0.8165\\,l"
              }
            ],
            "example": {
              "title": "Worked example: a 120 mm edge",
              "html": "<p>In a true isometric projection, a 120 mm axial edge becomes \\(120 \\times \\sqrt{2/3} = 97.98\\) mm. Drawing it 120 mm long produces the isometric drawing instead.</p>"
            },
            "points": [
              {
                "html": "An oblique sketch shows the front of an object in true shape.",
                "sources": [
                  {
                    "id": "CAP4-10-00009",
                    "label": "p. 37; topic 10 point 10"
                  }
                ]
              },
              {
                "html": "If an isometric drawing is made using an isometric scale, the drawing is called an isometric projection.",
                "sources": [
                  {
                    "id": "CAP4-10-00011",
                    "label": "p. 37; topic 10 point 11"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00009",
                "label": "p. 37; topic 10 point 10"
              },
              {
                "id": "CAP4-10-00011",
                "label": "p. 37; topic 10 point 11"
              }
            ]
          },
          {
            "id": "conic-sections-of-a-right-circular-cone",
            "title": "Sections of a right circular cone: hyperbola, line pair and circle",
            "html": "<p>Model an ideal right circular double cone with its vertex at the origin. A cutting plane parallel to the axis but offset from it is x = c with c ≠ 0, and substituting gives a hyperbola. On the extended double cone the plane meets both nappes and shows both branches; a finite single cone shows only the part it contains, and the plane must actually meet the surface.</p><p>If the plane passes through the axis, then c = 0 and the equation factors into \\(y = kz\\) and \\(y = -kz\\): two straight generators crossing at the vertex. This degenerate case is why the offset condition matters.</p><p>A plane parallel to the base, strictly between base and vertex, keeps the rotational symmetry and cuts a circle of smaller radius; at the vertex it shrinks to a point. A pictorial view of that section may look elliptical, yet its true shape is a circle.</p>",
            "formulas": [
              {
                "label": "Double cone",
                "tex": "x^2 + y^2 = k^2 z^2"
              },
              {
                "label": "Section by the plane x = c",
                "tex": "k^2 z^2 - y^2 = c^2"
              }
            ],
            "points": [
              {
                "html": "A plane parallel to the axis of symmetry of a right circular cone cuts it in a hyperbola.",
                "sources": [
                  {
                    "id": "CAP4-01-00140",
                    "label": "p. 5; topic 1 point 133"
                  }
                ]
              },
              {
                "html": "When a right circular cone is cut parallel to its axis of symmetry, the conic formed is a hyperbola.",
                "sources": [
                  {
                    "id": "CAP4-10-00126",
                    "label": "p. 40; topic 10 point 118"
                  }
                ]
              },
              {
                "html": "The section of a right circular cone is a hyperbola when the cutting plane is parallel to the axis of the cone.",
                "sources": [
                  {
                    "id": "CAP4-10-00127",
                    "label": "p. 40; topic 10 point 118"
                  }
                ]
              },
              {
                "html": "When a cone is cut parallel to its base, the cross-section is a circle.",
                "sources": [
                  {
                    "id": "CAP4-10-00132",
                    "label": "p. 41; topic 10 point 122"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00140",
                "label": "p. 5; topic 1 point 133"
              },
              {
                "id": "CAP4-10-00126",
                "label": "p. 40; topic 10 point 118"
              },
              {
                "id": "CAP4-10-00127",
                "label": "p. 40; topic 10 point 118"
              },
              {
                "id": "CAP4-10-00132",
                "label": "p. 41; topic 10 point 122"
              }
            ]
          },
          {
            "id": "loci-circle-arc-archimedean-spiral-and-helix",
            "title": "Loci from motion rules: pendulum arc, Archimedean spiral and helix",
            "html": "<p>A locus follows from the rule that governs a moving point, so state the rule before naming the curve. A point moving along a pendulum from one end to the other while the pendulum oscillates traces a spiral, because its distance from the pivot changes as the pendulum turns.</p><p>An <em>Archimedean spiral</em> needs two uniform motions at once: the point moves outward along a ray at constant speed while the ray turns steadily in one direction.</p><p>A <em>circular helix</em> is traced when a point circles a fixed axis at constant radius while moving along that axis. A constant advance per revolution gives a constant pitch. Being three-dimensional does not by itself make a curve a helix.</p>",
            "formulas": [
              {
                "label": "Archimedean spiral",
                "tex": "r = r_0 + \\dfrac{v}{\\omega}\\,\\theta",
                "where": "It follows from r = r<sub>0</sub> + vt and θ = ωt by eliminating t."
              }
            ],
            "points": [
              {
                "html": "The locus traced by a point moving along a pendulum from one end to the other, while the pendulum oscillates, is a spiral.",
                "sources": [
                  {
                    "id": "CAP4-10-00124",
                    "label": "p. 40; topic 10 point 117"
                  }
                ]
              },
              {
                "html": "A point moving along a line that turns about a fixed centre, while its distance from the centre changes, traces a spiral.",
                "sources": [
                  {
                    "id": "CAP4-10-00125",
                    "label": "p. 40; topic 10 point 117"
                  }
                ]
              },
              {
                "html": "The helix is a three-dimensional curve.",
                "sources": [
                  {
                    "id": "CAP4-10-00146",
                    "label": "p. 41; topic 10 point 136"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00124",
                "label": "p. 40; topic 10 point 117"
              },
              {
                "id": "CAP4-10-00125",
                "label": "p. 40; topic 10 point 117"
              },
              {
                "id": "CAP4-10-00146",
                "label": "p. 41; topic 10 point 136"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Inclined lettering lean",
            "tex": "90^\\circ - 75^\\circ = 15^\\circ"
          },
          {
            "label": "Ideal A-series area",
            "tex": "A_n = \\dfrac{1}{2^n}\\ \\text{m}^2"
          },
          {
            "label": "A-series side ratio",
            "tex": "\\dfrac{L}{S} = \\sqrt{2}"
          },
          {
            "label": "Representative fraction",
            "tex": "\\text{RF} = \\dfrac{\\text{drawing length}}{\\text{actual length}}"
          },
          {
            "label": "Radius symbol",
            "tex": "D = 2R"
          },
          {
            "label": "Isometric scale",
            "tex": "l_{\\text{iso}} = l\\sqrt{2/3}"
          },
          {
            "label": "Cone section by x = c",
            "tex": "k^2 z^2 - y^2 = c^2"
          },
          {
            "label": "Archimedean spiral",
            "tex": "r = r_0 + \\dfrac{v}{\\omega}\\,\\theta"
          }
        ],
        "cautions": [],
        "gaps": [
          "The capsule points cover lettering, sheet sizes, instruments, line types, scales, basic projections and simple loci; dimensioning practice beyond the radius symbol, line diagrams and full sectioning conventions are not tested."
        ]
      },
      "AALL1002": {
        "code": "AALL1002",
        "questionCount": 24,
        "format": 2,
        "summary": "<p>This subchapter covers engineering economics: compounding and discounting single sums, compound interest and effective rates, sinking funds and arithmetic gradients, discounted cash flow, NPV and the benefit-cost ratio, IRR against MARR, incremental comparison of mutually exclusive alternatives, capital budgeting, straight-line depreciation, and the quick ratio and debentures.</p>",
        "blocks": [
          {
            "id": "single-sum-compounding-and-discounting",
            "title": "Single-sum compounding and discounting",
            "html": "<p>Sums at different dates can be compared only after moving them to one date at a stated rate. Each period multiplies a balance by (1 + i), so a present sum P grows in n periods to a future sum F. The multiplier \\((1 + i)^n\\) is the single-payment compound amount factor; its reciprocal discounts one future sum to the present.</p><p>The <em>discount rate</em> is the rate used to bring future sums to present value. Discounting is compounded period by period; subtracting three years of simple percentage does not give the same value.</p>",
            "formulas": [
              {
                "label": "Compound amount",
                "tex": "F = P(1 + i)^n"
              },
              {
                "label": "Present worth",
                "tex": "P = \\dfrac{F}{(1 + i)^n}"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>At an effective 8%, NRs 100000 today equals \\(100000 \\times 1.08\\) = NRs 108000 in one year. Dividing by 1.08 answers a different question: the present value of a future NRs 100000, which is NRs 92592.59.</li><li>NRs 133100 due in three years at 10%: \\(133100/1.1^3 = 133100/1.331\\) = NRs 100000.</li></ol>"
            },
            "points": [
              {
                "html": "The term \\((1 + i)^n\\) is called the single payment compound amount factor.",
                "sources": [
                  {
                    "id": "CAP4-10-00021",
                    "label": "p. 38; topic 10 point 21"
                  }
                ]
              },
              {
                "html": "The time value of money is the relation between money and time.",
                "sources": [
                  {
                    "id": "CAP4-10-00025",
                    "label": "p. 38; topic 10 point 25"
                  }
                ]
              },
              {
                "html": "The rate used to convert a future sum into its present value is called the discount rate.",
                "sources": [
                  {
                    "id": "CAP4-10-00030",
                    "label": "p. 38; topic 10 point 30"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00021",
                "label": "p. 38; topic 10 point 21"
              },
              {
                "id": "CAP4-10-00025",
                "label": "p. 38; topic 10 point 25"
              },
              {
                "id": "CAP4-10-00030",
                "label": "p. 38; topic 10 point 30"
              }
            ]
          },
          {
            "id": "compound-interest-and-effective-annual-rate",
            "title": "Compound interest earned and nominal versus effective rates",
            "html": "<p>Under compound interest, the interest earned in each period joins the balance and earns interest later; the rate itself need not change. The interest is the growth alone, so the principal is never counted as interest.</p><p>A nominal annual rate r compounded m times a year is not the effective yearly growth. The rate per period is r/m, and the effective annual rate follows from compounding it m times. Nominal and effective rates coincide only when compounding is annual.</p>",
            "formulas": [
              {
                "label": "Effective annual rate",
                "tex": "i_{\\text{eff}} = \\left(1 + \\dfrac{r}{m}\\right)^m - 1"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>NRs 20000 at 10% for two years grows to \\(20000 \\times 1.1^2 = 24200\\). The interest is 24200 − 20000 = NRs 4200: 2000 in the first year and 2200 in the second.</li><li>12% compounded monthly: the monthly rate is 0.01, and \\(1.01^{12} - 1 = 0.126825\\), about 12.6825%.</li></ol>"
            },
            "points": [
              {
                "html": "In compound interest, interest is added to the principal and earns further interest.",
                "sources": [
                  {
                    "id": "CAP4-10-00031",
                    "label": "p. 38; topic 10 point 31"
                  }
                ]
              },
              {
                "html": "The effective annual interest rate for a nominal annual rate \\(r\\) compounded \\(m\\) times a year is \\(\\left(1 + \\dfrac{r}{m}\\right)^m - 1\\).",
                "sources": [
                  {
                    "id": "CAP4-10-00033",
                    "label": "p. 38; topic 10 point 33"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00031",
                "label": "p. 38; topic 10 point 31"
              },
              {
                "id": "CAP4-10-00033",
                "label": "p. 38; topic 10 point 33"
              }
            ]
          },
          {
            "id": "sinking-funds-and-arithmetic-gradients",
            "title": "Series cash flows: sinking-fund deposits and arithmetic gradients",
            "html": "<p>A <em>sinking fund</em> builds up equal end-of-period deposits so that a structure can be replaced when its economic life ends. The fraction \\(i/[(1 + i)^n - 1]\\) is the sinking-fund factor, a pure number that converts a target future amount F into the equal deposit A; it is not the fund itself.</p><p>A cash flow that changes by the same amount every period is an <em>arithmetic gradient</em>. Receipts of 40000, 45000, 50000 and 55000 rise by a constant NRs 5000, while the percentage growth falls from 12.5% to about 11.1%, so the series is not geometric. For a base amount a rising by b each year, keep the last term and the total apart.</p>",
            "formulas": [
              {
                "label": "Sinking-fund deposit",
                "tex": "A = F\\,\\dfrac{i}{(1 + i)^n - 1}"
              },
              {
                "label": "Amount in year n",
                "tex": "a_n = a + (n - 1)b"
              },
              {
                "label": "Undiscounted total over n years",
                "tex": "S_n = \\dfrac{n\\,[2a + (n - 1)b]}{2}"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<p>NRs 100000 in five years at 10%: \\(1.1^5 = 1.61051\\), so</p>\\[\\begin{aligned}A &amp;= 100000 \\times 0.10/0.61051\\\\ &amp;= 16379.75\\end{aligned}\\]<p>about NRs 16380 a year.</p><p>Maintenance of NRs 10000 rising by 2000: year 4 costs \\(10000 + 3 \\times 2000 = 16000\\), while the four-year total is \\(4[20000 + 6000]/2 = 52000\\).</p>"
            },
            "points": [
              {
                "html": "A sinking fund is a fund for rebuilding a structure when its economic life is over, and its factor is \\(\\dfrac{i}{(1 + i)^n - 1}\\).",
                "sources": [
                  {
                    "id": "CAP4-10-00027",
                    "label": "p. 38; topic 10 point 27"
                  }
                ]
              },
              {
                "html": "A cash flow that increases or decreases by a constant amount every period forms a linear gradient series.",
                "sources": [
                  {
                    "id": "CAP4-10-00129",
                    "label": "p. 41; topic 10 point 120"
                  }
                ]
              },
              {
                "html": "If \\(a\\) is the base amount of expenditure and \\(b\\) the increase in operation cost each year, the cost of maintenance in the \\(n\\)th year is \\(a + (n - 1)b\\).",
                "sources": [
                  {
                    "id": "CAP4-10-00029",
                    "label": "p. 38; topic 10 point 29"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00027",
                "label": "p. 38; topic 10 point 27"
              },
              {
                "id": "CAP4-10-00129",
                "label": "p. 41; topic 10 point 120"
              },
              {
                "id": "CAP4-10-00029",
                "label": "p. 38; topic 10 point 29"
              }
            ]
          },
          {
            "id": "discounted-cash-flow-npv-and-benefit-cost",
            "title": "Discounted cash flow, net present value and the benefit-cost ratio",
            "html": "<p><em>Discounted cash flow</em> (DCF) values a project or company by discounting each expected cash flow to one date and adding the results. That gives the value of the receipts only; the investment still has to be deducted.</p><p><em>Net present value</em> makes the deduction at the MARR. A positive NPV means an independent project passes the test, so present-worth analysis is a standard decision tool.</p><p>The <em>benefit-cost ratio</em> compares the same quantities as a ratio. B/C above 1 passes, B/C = 1 is break-even, and among mutually exclusive alternatives the highest ratio does not by itself identify the best one.</p>",
            "formulas": [
              {
                "label": "Net present value",
                "tex": "\\text{NPV} = \\text{PV}_{\\text{in}} - \\text{PV}_{\\text{out}}"
              },
              {
                "label": "Benefit-cost ratio",
                "tex": "B/C = \\dfrac{\\text{PV of benefits}}{\\text{PV of costs}}"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>NRs 55000 after one year and NRs 60500 after two, at 10%: 55000/1.1 = 50000 and \\(60500/1.1^2 = 50000\\), a total of NRs 100000.</li><li>If the project costs NRs 90000 now, NPV = 100000 − 90000 = +NRs 10000.</li><li>Benefits NRs 15 million, costs NRs 12 million: B/C = 1.25, net benefit +NRs 3 million.</li></ol>"
            },
            "points": [
              {
                "html": "The method commonly used by business enterprises when valuing companies or projects is discounted cash flow (DCF).",
                "sources": [
                  {
                    "id": "CAP4-10-00156",
                    "label": "p. 41; topic 10 point 146"
                  }
                ]
              },
              {
                "html": "In project decision making by the present worth method, an independent project is accepted when its net present worth is greater than zero.",
                "sources": [
                  {
                    "id": "CAP4-10-00157",
                    "label": "p. 41; topic 10 point 147"
                  }
                ]
              },
              {
                "html": "The criterion for the acceptance of a project is \\(\\dfrac{B}{C} \\gt 1\\).",
                "sources": [
                  {
                    "id": "CAP4-10-00028",
                    "label": "p. 38; topic 10 point 28"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00156",
                "label": "p. 41; topic 10 point 146"
              },
              {
                "id": "CAP4-10-00157",
                "label": "p. 41; topic 10 point 147"
              },
              {
                "id": "CAP4-10-00028",
                "label": "p. 38; topic 10 point 28"
              }
            ]
          },
          {
            "id": "irr-marr-and-justified-reinvestment",
            "title": "Internal rate of return, MARR and justified reinvestment",
            "html": "<p>The <em>internal rate of return</em> (IRR) is the discount rate at which NPV equals zero. Splitting a multi-year gain evenly between the years would wrongly apply simple interest.</p><p>When a project is independent and its cash flows are conventional, so that it has a single IRR, compare that IRR with the <em>minimum attractive rate of return</em> (MARR). IRR above a risk-appropriate MARR corresponds to positive NPV at the MARR, so the project is acceptable on this criterion. IRR alone is not the right ranking tool for mutually exclusive alternatives.</p><p>Retained profit is judged the same way.</p>",
            "formulas": [
              {
                "label": "Definition of IRR",
                "tex": "\\text{NPV}(r^{*}) = 0"
              }
            ],
            "example": {
              "title": "Worked example: NRs 100000 returning NRs 121000 after two years",
              "html": "\\[-100000 + \\dfrac{121000}{(1 + r)^2} = 0\\]<p>So \\((1 + r)^2 = 1.21\\) and r = 10% per year, not 10.5%.</p>"
            },
            "points": [
              {
                "html": "IRR is the discount rate at which the NPV is equal to zero.",
                "sources": [
                  {
                    "id": "CAP4-10-00018",
                    "label": "p. 38; topic 10 point 18"
                  }
                ]
              },
              {
                "html": "The IRR method is mostly adopted in business enterprises.",
                "sources": [
                  {
                    "id": "CAP4-10-00024",
                    "label": "p. 38; topic 10 point 24"
                  }
                ]
              },
              {
                "html": "Profit earned by a business should be managed by reinvesting it at a higher rate for growth.",
                "sources": [
                  {
                    "id": "CAP4-10-00150",
                    "label": "p. 41; topic 10 point 140"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00018",
                "label": "p. 38; topic 10 point 18"
              },
              {
                "id": "CAP4-10-00024",
                "label": "p. 38; topic 10 point 24"
              },
              {
                "id": "CAP4-10-00150",
                "label": "p. 41; topic 10 point 140"
              }
            ]
          },
          {
            "id": "mutually-exclusive-and-incremental-analysis",
            "title": "Mutually exclusive alternatives and incremental analysis",
            "html": "<p>Alternatives are <em>mutually exclusive</em> when selecting one prevents the other, as when a site can take design A or design B but not both. They must be compared on a consistent service level and analysis period, because acceptance tests for independent projects cannot on their own identify the best exclusive option.</p><p>Incremental analysis ranks feasible alternatives by investment. The lower-investment alternative becomes the defender, and the costlier one is judged by its extra cash flows at the MARR over a consistent period. A lower first cost does not settle the decision.</p><p>Increments are found by subtracting signed cash flows. The initial increment is zero only when both alternatives need the same outlay.</p>",
            "formulas": [
              {
                "label": "Incremental cash flow in year t",
                "tex": "\\Delta CF_t = CF_{B,t} - CF_{A,t}"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>Machine A costs NRs 400000 and B NRs 550000 for the same service: B's extra NRs 150000 must be justified by the B − A benefits.</li><li>Time-zero flows of −680000 for B and −500000 for A: \\(-680000 - (-500000)\\) = −NRs 180000.</li></ol>"
            },
            "points": [
              {
                "html": "When a company can choose only one option among multiple alternatives, the alternatives are mutually exclusive.",
                "sources": [
                  {
                    "id": "CAP4-10-00121",
                    "label": "p. 40; topic 10 point 114"
                  }
                ]
              },
              {
                "html": "In incremental analysis, the project having the lower investment is selected as the base alternative.",
                "sources": [
                  {
                    "id": "CAP4-10-00022",
                    "label": "p. 38; topic 10 point 22"
                  }
                ]
              },
              {
                "html": "In incremental analysis, the comparison starts from the do-nothing alternative, whose initial investment is zero.",
                "sources": [
                  {
                    "id": "CAP4-10-00026",
                    "label": "p. 38; topic 10 point 26"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00121",
                "label": "p. 40; topic 10 point 114"
              },
              {
                "id": "CAP4-10-00022",
                "label": "p. 38; topic 10 point 22"
              },
              {
                "id": "CAP4-10-00026",
                "label": "p. 38; topic 10 point 26"
              }
            ]
          },
          {
            "id": "capital-budgeting-scope-and-reversibility",
            "title": "Capital budgeting: long-term commitments, working capital and reversibility",
            "html": "<p><em>Capital budgeting</em> evaluates long-term investment commitments in fixed assets, such as a treatment plant, through their multi-year incremental cash flows. It is distinct from routine cash administration such as reconciling a cash drawer or matching invoices, and it concerns more than an asset's purchase price.</p><p>It is not concerned with investment in current assets such as inventory and receivables. Capital budgeting decisions are irreversible: a specialised, installed plant may sell only at a large loss, so much of the money committed may never be recovered.</p>",
            "points": [
              {
                "html": "Capital budgeting involves investment in fixed assets.",
                "sources": [
                  {
                    "id": "CAP4-10-00153",
                    "label": "p. 41; topic 10 point 142"
                  }
                ]
              },
              {
                "html": "Capital budgeting is not concerned with investment in current assets.",
                "sources": [
                  {
                    "id": "CAP4-10-00149",
                    "label": "p. 41; topic 10 point 139"
                  }
                ]
              },
              {
                "html": "Capital budgeting decisions are irreversible in nature.",
                "sources": [
                  {
                    "id": "CAP4-10-00037",
                    "label": "p. 38; topic 10 point 37"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00153",
                "label": "p. 41; topic 10 point 142"
              },
              {
                "id": "CAP4-10-00149",
                "label": "p. 41; topic 10 point 139"
              },
              {
                "id": "CAP4-10-00037",
                "label": "p. 38; topic 10 point 37"
              }
            ]
          },
          {
            "id": "straight-line-depreciation-and-book-value",
            "title": "Straight-line depreciation, residual value and book value",
            "html": "<p><em>Straight-line depreciation</em> charges the same amount every year: cost less residual value, divided by the life. The book value after k years is the cost less k annual charges.</p><p>The formula works equally for long-lived works once an accounting life is assumed. Both results rest on stated accounting assumptions: they say nothing about Nepal's tax-depreciation pools or rates, and a quoted percentage range for a type of structure is a rough convention rather than a physical rate of deterioration.</p>",
            "formulas": [
              {
                "label": "Annual charge",
                "tex": "D = \\dfrac{C - S}{N}",
                "where": "C is the cost, S the residual value and N the life in years."
              },
              {
                "label": "Book value after k years",
                "tex": "BV_k = C - kD"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>Cost NRs 1000000, residual NRs 100000, five-year life: D = 900000/5 = NRs 180000. After three years, BV = 1000000 − 540000 = NRs 460000.</li><li>A dam costing NPR 100 million with a NPR 10 million residual over 90 years: D = 90/90 = NPR 1.0 million a year, 1% of cost.</li></ol>"
            },
            "points": [
              {
                "html": "The depreciation method used when an equal amount is depreciated every year is the straight-line method.",
                "sources": [
                  {
                    "id": "CAP4-10-00159",
                    "label": "p. 41; topic 10 point 149"
                  }
                ]
              },
              {
                "html": "The annual depreciation of a dam in a hydropower plant is about 0.5–1.5%.",
                "sources": [
                  {
                    "id": "CAP4-08-00016",
                    "label": "p. 30; topic 8 point 16"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00159",
                "label": "p. 41; topic 10 point 149"
              },
              {
                "id": "CAP4-08-00016",
                "label": "p. 30; topic 8 point 16"
              }
            ]
          },
          {
            "id": "liquidity-ratios-and-debentures",
            "title": "The acid-test ratio and debentures as company debt",
            "html": "<p>The <em>acid-test</em> (quick) ratio asks whether a firm can meet its current liabilities from its most liquid assets. Quick assets leave out inventory and prepaid expenses, which cannot readily be turned into cash. The current ratio, by contrast, keeps them in.</p><p>A <em>debenture</em> is a debt instrument: the company borrows and promises interest and repayment of the principal. It is not an ordinary equity share carrying ownership or an assured dividend. Debentures may be secured or unsecured, depending on the terms of the instrument and the governing law, so the name alone reveals nothing about security.</p>",
            "formulas": [
              {
                "label": "Quick ratio",
                "tex": "Q_r = \\dfrac{CA - I - P_e}{CL}",
                "where": "CA is current assets, I inventory, P<sub>e</sub> prepaid expenses and CL current liabilities."
              }
            ],
            "example": {
              "title": "Worked example",
              "html": "<p>Current assets NRs 900000 including 300000 inventory and 60000 prepayments; current liabilities 450000. Quick assets are 540000, so \\(Q_r = 540000/450000 = 1.20\\), while the current ratio is 2.00.</p>"
            },
            "points": [
              {
                "html": "The ratio obtained by dividing quick assets by current liabilities is called the acid test ratio.",
                "sources": [
                  {
                    "id": "CAP4-10-00020",
                    "label": "p. 38; topic 10 point 20"
                  }
                ]
              },
              {
                "html": "Debentures are an unsafe share that does not require security.",
                "sources": [
                  {
                    "id": "CAP4-10-00023",
                    "label": "p. 38; topic 10 point 23"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00020",
                "label": "p. 38; topic 10 point 20"
              },
              {
                "id": "CAP4-10-00023",
                "label": "p. 38; topic 10 point 23"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Compound amount",
            "tex": "F = P(1 + i)^n"
          },
          {
            "label": "Present worth",
            "tex": "P = \\dfrac{F}{(1 + i)^n}"
          },
          {
            "label": "Effective annual rate",
            "tex": "i_{\\text{eff}} = \\left(1 + \\dfrac{r}{m}\\right)^m - 1"
          },
          {
            "label": "Sinking-fund deposit",
            "tex": "A = F\\,\\dfrac{i}{(1 + i)^n - 1}"
          },
          {
            "label": "Gradient amount in year n",
            "tex": "a_n = a + (n - 1)b"
          },
          {
            "label": "Gradient total",
            "tex": "S_n = \\dfrac{n\\,[2a + (n - 1)b]}{2}"
          },
          {
            "label": "Net present value",
            "tex": "\\text{NPV} = \\text{PV}_{\\text{in}} - \\text{PV}_{\\text{out}}"
          },
          {
            "label": "Benefit-cost ratio",
            "tex": "B/C = \\dfrac{\\text{PV of benefits}}{\\text{PV of costs}}"
          },
          {
            "label": "Straight-line charge",
            "tex": "D = \\dfrac{C - S}{N}"
          },
          {
            "label": "Quick ratio",
            "tex": "Q_r = \\dfrac{CA - I - P_e}{CL}"
          }
        ],
        "cautions": [],
        "gaps": [
          "Nepal's taxation and tax-depreciation rules are not taught by these capsule points; the depreciation examples rest on stated accounting assumptions only.",
          "Discounted payback period, uniform-series present-worth factors and annual-worth comparison appear in the syllabus but are not directly tested by these capsule questions.",
          "The IRR discussion assumes conventional cash flows with a unique IRR; multiple-root cases and IRR-based ranking of exclusive alternatives are not worked here."
        ]
      },
      "AALL1003": {
        "code": "AALL1003",
        "questionCount": 34,
        "format": 2,
        "summary": "<p>This subchapter covers project planning and scheduling: what makes work a project, formulation and SMART objectives, execution and the time, cost and quality view of performance, bar charts and CPM crashing, activity-on-arrow networks, forward and backward passes, floats and slack, PERT estimates, resource levelling and smoothing, and earned-value and critical-ratio control.</p>",
        "blocks": [
          {
            "id": "projects-versus-operations-and-classification",
            "title": "Projects versus operations, and classifying a project by its service",
            "html": "<p>A <em>project</em> is a temporary undertaking that creates a defined result and then ends, whereas operations are ongoing and recurring. A road package in which one contractor builds many similar culverts is still a project, because the package as a whole has a finite delivery objective. Monthly payroll that continues indefinitely is an operation, even though every payment has a deadline. A project is unique as a whole but may contain repetitive activities.</p><p>Projects are classified by the primary service delivered, not by the most visible construction work. When a centre's scope is mainly computing, data networking and communication services, housed in a new building, it is an information and communication technology (ICT) infrastructure project; the building is only a delivery component. An acronym such as ICTC is ambiguous until those functional facts are stated.</p>",
            "points": [
              {
                "html": "Repetitiveness is not a characteristic of a project.",
                "sources": [
                  {
                    "id": "CAP4-10-00068",
                    "label": "p. 39; topic 10 point 67"
                  }
                ]
              },
              {
                "html": "An ICTC building is typically considered an information and communication technology project.",
                "sources": [
                  {
                    "id": "CAP4-10-00154",
                    "label": "p. 41; topic 10 point 143"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00068",
                "label": "p. 39; topic 10 point 67"
              },
              {
                "id": "CAP4-10-00154",
                "label": "p. 41; topic 10 point 143"
              }
            ]
          },
          {
            "id": "project-formulation-and-smart-objectives",
            "title": "Project formulation and SMART objectives",
            "html": "<p>Formulation turns an identified need into criteria for comparing solutions. Once a municipality recognises unreliable water supply, it should define service objectives and measurable outcomes before selecting a treatment technology, so that each alternative can be judged against them.</p><p>Well-formed objectives are <em>SMART</em>: specific, measurable, achievable, relevant and time-bound. Each quality adds something the others lack, since a measurable target can still be unrealistic, irrelevant or open-ended.</p><p>A vague aim to improve road safety substantially becomes assessable as a target to cut recorded injury crashes at a defined junction by 20% within two years: it gains a place, a quantity and a deadline. Whether 20% is achievable still depends on baseline evidence.</p>",
            "points": [
              {
                "html": "The first stage in project formulation is setting objectives.",
                "sources": [
                  {
                    "id": "CAP4-10-00038",
                    "label": "p. 38; topic 10 point 38"
                  }
                ]
              },
              {
                "html": "The acronym SMART stands for specific, measurable, achievable, relevant, time-bound.",
                "sources": [
                  {
                    "id": "CAP4-10-00163",
                    "label": "p. 41; topic 10 point 154"
                  }
                ]
              },
              {
                "html": "In a SMART objective, the letter T stands for time-bound.",
                "sources": [
                  {
                    "id": "CAP4-10-00164",
                    "label": "p. 41; topic 10 point 154"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00038",
                "label": "p. 38; topic 10 point 38"
              },
              {
                "id": "CAP4-10-00163",
                "label": "p. 41; topic 10 point 154"
              },
              {
                "id": "CAP4-10-00164",
                "label": "p. 41; topic 10 point 154"
              }
            ]
          },
          {
            "id": "execution-phase-and-performance-dimensions",
            "title": "Execution-phase resources and the time, cost and quality view",
            "html": "<p>In a conventional construction project the <em>execution</em> phase mobilises labour, plant and materials to build the works, so the largest site workforce and most construction spending are normally concentrated there. The exact profile varies, for example where major equipment is bought early.</p><p>Because execution depends on people, a shortage of skilled manpower exposes an immediate resource and competence bottleneck. If drawings and materials are ready but qualified welders are not, progress slows and quality is at risk. Replanning, recruiting competent staff or approved subcontracting may be needed; untrained labour does not remove the constraint.</p><p>Performance is judged on time, cost and quality, which are distinct. A bridge completed on schedule and under budget that fails its specified load test has not performed acceptably. Scope and stakeholder outcomes also belong in a full assessment.</p>",
            "points": [
              {
                "html": "In a project, most of the money and manpower are required in the execution phase.",
                "sources": [
                  {
                    "id": "CAP4-10-00053",
                    "label": "p. 39; topic 10 point 52"
                  }
                ]
              },
              {
                "html": "Insufficient skilled manpower primarily affects the execution phase of a project.",
                "sources": [
                  {
                    "id": "CAP4-10-00160",
                    "label": "p. 41; topic 10 point 150"
                  }
                ]
              },
              {
                "html": "Project performance consists of time, cost and quality.",
                "sources": [
                  {
                    "id": "CAP4-10-00051",
                    "label": "p. 39; topic 10 point 50"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00053",
                "label": "p. 39; topic 10 point 52"
              },
              {
                "id": "CAP4-10-00160",
                "label": "p. 41; topic 10 point 150"
              },
              {
                "id": "CAP4-10-00051",
                "label": "p. 39; topic 10 point 50"
              }
            ]
          },
          {
            "id": "bar-charts-cpm-and-crash-cost-slope",
            "title": "Bar charts, deterministic CPM and the crash cost slope",
            "html": "<p>A <em>Gantt bar chart</em> shows activities as horizontal bars on a time scale. Such charts were in use before CPM and PERT were developed in the mid-twentieth century. A bare bar chart does not show precedence.</p><p><em>CPM</em> is activity-oriented and classically uses deterministic, single-value durations. That makes it the natural setting for time-cost trade-off analysis, in which planners estimate how extra direct cost could shorten critical activities by crashing. The network drawing itself does not distinguish CPM from PERT; the treatment of durations does.</p><p>A purchased day shortens the project only if the activity is critical and within its crash limit, and every current critical path must be checked.</p>",
            "formulas": [
              {
                "label": "Crash cost slope",
                "tex": "\\text{slope} = \\dfrac{C_c - C_n}{D_n - D_c}",
                "where": "C<sub>c</sub> and C<sub>n</sub> are the crash and normal costs; D<sub>n</sub> and D<sub>c</sub> the normal and crash durations."
              }
            ],
            "example": {
              "title": "Worked example: crashing from 8 to 5 days",
              "html": "<p>NRs 60000 at a normal 8 days and NRs 90000 at a crash 5 days, over a linear range:</p>\\[\\text{slope} = \\dfrac{90000 - 60000}{8 - 5} = 10000\\]<p>That is NRs 10000 for each day saved.</p>"
            },
            "points": [
              {
                "html": "The project planning method that was invented first is the bar chart.",
                "sources": [
                  {
                    "id": "CAP4-10-00044",
                    "label": "p. 38; topic 10 point 44"
                  }
                ]
              },
              {
                "html": "The critical path method (CPM) of project planning is activity oriented and deterministic, with a focus on time–cost trade-off.",
                "sources": [
                  {
                    "id": "CAP4-10-00046",
                    "label": "p. 38; topic 10 point 46"
                  }
                ]
              },
              {
                "html": "CPM is the network method that is deterministic and activity oriented.",
                "sources": [
                  {
                    "id": "CAP4-10-00047",
                    "label": "p. 38; topic 10 point 46"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00044",
                "label": "p. 38; topic 10 point 44"
              },
              {
                "id": "CAP4-10-00046",
                "label": "p. 38; topic 10 point 46"
              },
              {
                "id": "CAP4-10-00047",
                "label": "p. 38; topic 10 point 46"
              }
            ]
          },
          {
            "id": "aoa-activities-events-and-dummies",
            "title": "Activity-on-arrow notation: activities, events and dummy arrows",
            "html": "<p>In an <em>activity-on-arrow</em> (AOA) network each arrow is an activity and each node is an event, the instant at which activities start or finish. An arrow from event 3 to event 5 labelled excavate, 4 days, means excavation starts at event 3 and finishes at event 5. Event numbers identify the logic; they are not calendar times.</p><p>An <em>event</em> marks the instant when all required predecessors are complete. It is a milestone that consumes no time and no resources; a real inspection or waiting period with nonzero duration must be drawn as an activity.</p><p>A <em>dummy</em> arrow takes no time and uses no resources; it exists only to keep the logic correct. If C must follow both A and B while D follows A only, start D where A ends, start C where B ends, and draw a dummy from the end of A to the start of C. Dummies can also give distinct identities to activities that would share the same pair of events.</p>",
            "points": [
              {
                "html": "In an activity-on-arrow (AOA) network, the arrows represent activities, while the nodes represent their start and end.",
                "sources": [
                  {
                    "id": "CAP4-10-00109",
                    "label": "p. 40; topic 10 point 102"
                  }
                ]
              },
              {
                "html": "The start and end of an activity in a CPM network is called an event.",
                "sources": [
                  {
                    "id": "CAP4-10-00144",
                    "label": "p. 41; topic 10 point 134"
                  }
                ]
              },
              {
                "html": "A dummy activity does not consume resources.",
                "sources": [
                  {
                    "id": "CAP4-10-00041",
                    "label": "p. 38; topic 10 point 41"
                  }
                ]
              },
              {
                "html": "A dummy activity is used in a network for grammatical and logical purposes.",
                "sources": [
                  {
                    "id": "CAP4-10-00123",
                    "label": "p. 40; topic 10 point 116"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00109",
                "label": "p. 40; topic 10 point 102"
              },
              {
                "id": "CAP4-10-00144",
                "label": "p. 41; topic 10 point 134"
              },
              {
                "id": "CAP4-10-00041",
                "label": "p. 38; topic 10 point 41"
              },
              {
                "id": "CAP4-10-00123",
                "label": "p. 40; topic 10 point 116"
              }
            ]
          },
          {
            "id": "forward-pass-and-critical-path",
            "title": "Forward pass, earliest times and the critical path",
            "html": "<p>The <em>forward pass</em> computes earliest times from the project start. An activity cannot begin until every predecessor has finished, so its earliest start is the largest of the predecessors' earliest finishes.</p><p>Every required path must be completed, so the longest path controls the earliest project finish; it is the <em>critical path</em>. The project duration is the sum of the durations along that path, not the sum of all activities: adding parallel activities treats them as sequential.</p>",
            "formulas": [
              {
                "label": "Earliest start",
                "tex": "ES = \\max(EF_{\\text{pred}})"
              },
              {
                "label": "Earliest finish",
                "tex": "EF = ES + D"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>Predecessors finish on days 6 and 9 and the successor takes 4 days: ES = max(6, 9) = 9 and EF = 13.</li><li>Paths of 9, 12 and 10 days: completion at day 12, not at their sum.</li><li>A-B-D = 3 + 5 + 4 = 12 and A-C-D = 3 + 7 + 4 = 14, so the project takes 14 days; adding all activities, 19, is wrong.</li></ol>"
            },
            "moreHtml": "<p>Elapsed working-day notation, in which an activity starting at day 9 and lasting 4 days finishes at day 13, avoids the off-by-one adjustment needed with inclusive calendar dates.</p>",
            "points": [
              {
                "html": "The formula used to calculate the earliest finish time (EF) of an activity during the forward pass is \\(\\mathrm{EF} = \\mathrm{ES} + t\\).",
                "sources": [
                  {
                    "id": "CAP4-10-00048",
                    "label": "p. 38; topic 10 point 47"
                  }
                ]
              },
              {
                "html": "The critical path of a project network is the longest path.",
                "sources": [
                  {
                    "id": "CAP4-10-00040",
                    "label": "p. 38; topic 10 point 40"
                  }
                ]
              },
              {
                "html": "In CPM, the expected project duration is determined by the sum of the durations of the activities on the critical path.",
                "sources": [
                  {
                    "id": "CAP4-10-00148",
                    "label": "p. 41; topic 10 point 138"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00048",
                "label": "p. 38; topic 10 point 47"
              },
              {
                "id": "CAP4-10-00040",
                "label": "p. 38; topic 10 point 40"
              },
              {
                "id": "CAP4-10-00148",
                "label": "p. 41; topic 10 point 138"
              }
            ]
          },
          {
            "id": "backward-pass-latest-times",
            "title": "Backward pass: latest finish and latest start by the minimum rule",
            "html": "<p>The <em>backward pass</em> starts from the chosen project finish, usually the earliest completion from the forward pass, and works back to latest allowable times. An activity must finish in time for every successor, so its latest finish is the smallest of its successors' latest starts.</p><p>In AOA event form, each outgoing activity supplies a candidate: the successor event's latest time minus that activity's duration. The latest time of the event is the smallest candidate.</p><p>Latest values therefore come from a backward pass, but that pass needs a finish boundary, which the forward pass commonly supplies. Both passes belong to the analysis.</p>",
            "formulas": [
              {
                "label": "Latest finish",
                "tex": "LF = \\min(LS_{\\text{succ}})"
              },
              {
                "label": "Latest start",
                "tex": "LS = LF - D"
              },
              {
                "label": "Latest time of event J",
                "tex": "L_J = \\min_k\\,(L_k - d_{Jk})"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>Successors with latest starts on days 18 and 15: LF = min(18, 15) = day 15.</li><li>LS = 9 and a 4-day duration: LF = 9 + 4 = day 13.</li><li>Event J with outgoing activities of 4 and 5 days to events at 15 and 18: candidates 11 and 13, so L = day 11.</li></ol>"
            },
            "points": [
              {
                "html": "In the backward pass of a CPM network, the minimum value is taken.",
                "sources": [
                  {
                    "id": "CAP4-09-00060",
                    "label": "p. 35; topic 9 point 59"
                  }
                ]
              },
              {
                "html": "The latest time by which an activity must be completed without delaying the total project duration is the latest finish time.",
                "sources": [
                  {
                    "id": "CAP4-10-00165",
                    "label": "p. 41; topic 10 point 155"
                  }
                ]
              },
              {
                "html": "In a CPM backward pass, an event leads through activities of 4 and 5 days to events with latest times of day 15 and day 18. The latest time of the event is day 11.",
                "sources": [
                  {
                    "id": "CAP4-10-00103",
                    "label": "p. 40; topic 10 point 95"
                  }
                ]
              },
              {
                "html": "The latest start (LS) and latest finish (LF) of activities are calculated by a backward pass through the network.",
                "sources": [
                  {
                    "id": "CAP4-10-00141",
                    "label": "p. 41; topic 10 point 131"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-09-00060",
                "label": "p. 35; topic 9 point 59"
              },
              {
                "id": "CAP4-10-00165",
                "label": "p. 41; topic 10 point 155"
              },
              {
                "id": "CAP4-10-00103",
                "label": "p. 40; topic 10 point 95"
              },
              {
                "id": "CAP4-10-00141",
                "label": "p. 41; topic 10 point 131"
              }
            ]
          },
          {
            "id": "total-float-free-float-and-event-slack",
            "title": "Total float, free float and event slack",
            "html": "<p><em>Total float</em> is the delay an activity can absorb without delaying the project finish. <em>Free float</em> is the delay that still lets every successor start at its earliest time.</p><table><thead><tr><th scope='col'>Measure</th><th scope='col'>Formula</th><th scope='col'>What it protects</th></tr></thead><tbody><tr><th scope='row'>Total float</th><td>LF − EF = LS − ES</td><td>The project finish</td></tr><tr><th scope='row'>Free float</th><td>Earliest successor ES − EF</td><td>Successors' earliest starts</td></tr><tr><th scope='row'>Event slack</th><td>Latest − earliest time of one event</td><td>The timing of that event</td></tr></tbody></table><p>In an ordinary zero-lag network whose finish is set at the earliest completion, TF ≥ FF, and the two can be equal; critical activities commonly have both zero. Imposed deadlines can create negative float, which needs separate treatment.</p>",
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>ES = 4, D = 5, LF = 12: EF = 9 and LS = 7, so TF = 12 − 9 = 7 − 4 = 3 days.</li><li>EF = 7 and earliest successor start 10: FF = 3 days.</li><li>EF = LF = 8 with a successor at ES = 8: TF = FF = 0.</li><li>Event times 8 and 11: slack = 3 days.</li></ol>"
            },
            "points": [
              {
                "html": "The difference between the maximum time available and the actual time needed to perform an activity is known as total float.",
                "sources": [
                  {
                    "id": "CAP4-10-00042",
                    "label": "p. 38; topic 10 point 42"
                  }
                ]
              },
              {
                "html": "The amount of time a task can be delayed without impacting other tasks in the path is called free float.",
                "sources": [
                  {
                    "id": "CAP4-10-00036",
                    "label": "p. 38; topic 10 point 36"
                  }
                ]
              },
              {
                "html": "In the critical path method, the total float (TF) of an activity is greater than or equal to its free float (FF).",
                "sources": [
                  {
                    "id": "CAP4-10-00116",
                    "label": "p. 40; topic 10 point 109"
                  }
                ]
              },
              {
                "html": "The time difference between the latest finish of a previous activity and the earliest start of a new activity is called slack.",
                "sources": [
                  {
                    "id": "CAP4-10-00155",
                    "label": "p. 41; topic 10 point 145"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00042",
                "label": "p. 38; topic 10 point 42"
              },
              {
                "id": "CAP4-10-00036",
                "label": "p. 38; topic 10 point 36"
              },
              {
                "id": "CAP4-10-00116",
                "label": "p. 40; topic 10 point 109"
              },
              {
                "id": "CAP4-10-00155",
                "label": "p. 41; topic 10 point 145"
              }
            ]
          },
          {
            "id": "pert-three-estimates-and-spread",
            "title": "PERT: three time estimates, expected duration and standard deviation",
            "html": "<p>Classical <em>PERT</em> treats durations as uncertain and uses three estimates per activity: optimistic, most likely and pessimistic. The duration of an individual activity is approximated by a bounded beta-type distribution. A normal approximation may be used, under further assumptions, for the total duration of a path, not for each activity.</p><p>The expected duration weights the most likely estimate four times. Without the divisor the numerator is not a duration at all. Spread is described by the standard deviation, the positive square root of the variance, which returns the units from squared time to time.</p>",
            "formulas": [
              {
                "label": "PERT expected time",
                "tex": "t_e = \\dfrac{t_o + 4t_m + t_p}{6}"
              },
              {
                "label": "Standard deviation",
                "tex": "\\sigma = \\sqrt{\\sigma^2}"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>Estimates of 2, 5 and 14 days: the numerator is 2 + 20 + 14 = 36, so \\(t_e = 36/6 = 6\\) days.</li><li>A variance of 16 days<sup>2</sup> gives \\(\\sigma = \\sqrt{16} = 4\\) days.</li></ol>"
            },
            "points": [
              {
                "html": "In PERT analysis, the time estimates of activities and the probability of their occurrence follow a beta distribution curve.",
                "sources": [
                  {
                    "id": "CAP4-10-00039",
                    "label": "p. 38; topic 10 point 39"
                  }
                ]
              },
              {
                "html": "The relationship between the time estimates \\(t_o\\), \\(t_m\\) and \\(t_p\\) for the expected time of a PERT activity is \\(t_e = \\dfrac{t_o + 4t_m + t_p}{6}\\).",
                "sources": [
                  {
                    "id": "CAP4-10-00050",
                    "label": "p. 39; topic 10 point 49"
                  }
                ]
              },
              {
                "html": "Standard deviation is equal to \\((\\text{variance})^{1/2}\\).",
                "sources": [
                  {
                    "id": "CAP4-10-00114",
                    "label": "p. 40; topic 10 point 107"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00039",
                "label": "p. 38; topic 10 point 39"
              },
              {
                "id": "CAP4-10-00050",
                "label": "p. 39; topic 10 point 49"
              },
              {
                "id": "CAP4-10-00114",
                "label": "p. 40; topic 10 point 107"
              }
            ]
          },
          {
            "id": "resource-levelling-versus-smoothing",
            "title": "Resource levelling versus resource smoothing",
            "html": "<p>Both techniques reshape resource demand, but they hold different things fixed.</p><ul><li><em>Resource levelling</em> treats resource availability as the hard constraint. If two parallel tasks each need the only crane for their whole duration and no second crane exists, one must wait, and the project finish may move later to respect the limit.</li><li><em>Resource smoothing</em> keeps the required project finish fixed and moves only noncritical work within its available float. It cannot always remove a peak: when float runs out, a hard resource limit can be met only by levelling.</li></ul><p>A quick test separates them. If the finish date may change so that the resource limit is respected, the operation is levelling; if the finish date is protected and float is used, it is smoothing.</p>",
            "points": [
              {
                "html": "In resource levelling, the constraint is resources.",
                "sources": [
                  {
                    "id": "CAP4-10-00035",
                    "label": "p. 38; topic 10 point 35"
                  }
                ]
              },
              {
                "html": "The adjustment of resources in a project without affecting the project duration is called resource smoothing.",
                "sources": [
                  {
                    "id": "CAP4-10-00049",
                    "label": "p. 38; topic 10 point 48"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00035",
                "label": "p. 38; topic 10 point 35"
              },
              {
                "id": "CAP4-10-00049",
                "label": "p. 38; topic 10 point 48"
              }
            ]
          },
          {
            "id": "monitoring-earned-value-and-critical-ratio",
            "title": "Monitoring and control: earned value, SPI and critical ratio",
            "html": "<p>Earned-value control compares three measures at a status date.</p><ul><li><em>BCWS</em>, the planned value: budgeted cost of work scheduled.</li><li><em>BCWP</em>, the earned value: budgeted cost of work actually performed.</li><li><em>ACWP</em>: the actual cost incurred for that work. Completing the work does not turn its budget into its actual cost.</li></ul><p>The schedule performance index compares budgeted values only, so it says nothing about actual spending and does not mean the finish date is late by a fixed percentage.</p><p><em>Critical ratio</em> scheduling sets priorities among jobs using time remaining until due divided by work remaining. The smaller ratio goes first, and a ratio below 1 signals insufficient time at the assumed rate.</p>",
            "formulas": [
              {
                "label": "Schedule performance index",
                "tex": "SPI = \\dfrac{BCWP}{BCWS}"
              },
              {
                "label": "Critical ratio",
                "tex": "CR = \\dfrac{\\text{time until due}}{\\text{work remaining}}"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>Work budgeted at NRs 400000 that actually cost NRs 460000: BCWP = 400000, ACWP = 460000.</li><li>BCWP = 600000 and BCWS = 800000: SPI = 0.75.</li><li>Job X, due in 6 days with 8 days of work: CR = 0.75; job Y, 8/4 = 2. X goes first.</li></ol>"
            },
            "points": [
              {
                "html": "The actual cost incurred for the work performed by a company in a project is called actual cost of work performed (ACWP).",
                "sources": [
                  {
                    "id": "CAP4-10-00034",
                    "label": "p. 38; topic 10 point 34"
                  }
                ]
              },
              {
                "html": "The schedule performance index (SPI) is the ratio of BCWP to BCWS.",
                "sources": [
                  {
                    "id": "CAP4-10-00032",
                    "label": "p. 38; topic 10 point 32"
                  }
                ]
              },
              {
                "html": "The technique for establishing and maintaining priorities among the various jobs of a project is known as critical ratio scheduling.",
                "sources": [
                  {
                    "id": "CAP4-10-00043",
                    "label": "p. 38; topic 10 point 43"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00034",
                "label": "p. 38; topic 10 point 34"
              },
              {
                "id": "CAP4-10-00032",
                "label": "p. 38; topic 10 point 32"
              },
              {
                "id": "CAP4-10-00043",
                "label": "p. 38; topic 10 point 43"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Forward pass",
            "tex": "ES = \\max(EF_{\\text{pred}})"
          },
          {
            "label": "Backward pass",
            "tex": "LF = \\min(LS_{\\text{succ}})"
          },
          {
            "label": "Total float",
            "tex": "TF = LF - EF = LS - ES"
          },
          {
            "label": "Free float",
            "tex": "FF = \\min(ES_{\\text{succ}}) - EF"
          },
          {
            "label": "PERT expected time",
            "tex": "t_e = \\dfrac{t_o + 4t_m + t_p}{6}"
          },
          {
            "label": "Crash cost slope",
            "tex": "\\text{slope} = \\dfrac{C_c - C_n}{D_n - D_c}"
          },
          {
            "label": "Schedule performance index",
            "tex": "SPI = \\dfrac{BCWP}{BCWS}"
          },
          {
            "label": "Critical ratio",
            "tex": "CR = \\dfrac{\\text{time until due}}{\\text{work remaining}}"
          }
        ],
        "cautions": [],
        "gaps": [
          "Monitoring and control appear only through earned-value terms, SPI and critical ratio; cost variance, CPI and forecasting are not tested by these capsule points.",
          "PERT path variance and the probability of meeting a target date are not computed; only the expected activity time and a standard deviation from a given variance are covered.",
          "Resource histograms, levelling procedures, life-cycle models and project classification schemes beyond the ICT example lie outside these capsule questions."
        ]
      },
      "AALL1004": {
        "code": "AALL1004",
        "questionCount": 25,
        "format": 2,
        "summary": "<p>This subchapter covers project management: risk as return variability and when to analyse it, risk owners and continuous improvement, lender appraisal and the sponsor, contracts and dispute routes, subcontracting, advances and liquidated damages, delivery models such as EPC, BOOT and PPP, consultant selection, and Nepal procurement rules on method, bid validity, price adjustment and blacklisting.</p>",
        "blocks": [
          {
            "id": "risk-as-variability-and-timing-of-analysis",
            "title": "Measuring risk as variability, and when to analyse project risk",
            "html": "<p>In finance, one common measure of risk is the variability of returns around their expected value, measured by the standard deviation. Two investments with the same expected return can differ sharply in spread.</p><p>Detailed risk analysis is most useful during planning, while alternatives such as two possible intake sites remain open and controls can still shape the design. It is not a one-time formality: risks change through design, construction and operation, so the assessment is monitored and updated as design and evidence develop.</p>",
            "formulas": [
              {
                "label": "Variance of a discrete return distribution",
                "tex": "\\sigma^2 = \\sum p_k\\,(x_k - \\mu)^2"
              },
              {
                "label": "Standard deviation",
                "tex": "\\sigma = \\sqrt{\\sigma^2}"
              }
            ],
            "example": {
              "title": "Worked example: two investments with a 10% mean",
              "html": "<ol><li>Returns of 8% or 12%, equally likely: each deviates by 2 points, so \\(\\sigma^2 = 0.5(2^2 + 2^2) = 4\\) and σ = 2 points.</li><li>Returns of 4% or 16%: deviations of 6, so \\(\\sigma^2 = 36\\) and σ = 6 points. The second is riskier on this measure.</li></ol>"
            },
            "points": [
              {
                "html": "Variability in the rate of return is known as risk.",
                "sources": [
                  {
                    "id": "CAP4-06-00078",
                    "label": "p. 25; topic 6 point 77"
                  }
                ]
              },
              {
                "html": "Detailed risk analysis is done in the planning phase of a project.",
                "sources": [
                  {
                    "id": "CAP4-06-00081",
                    "label": "p. 25; topic 6 point 80"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00078",
                "label": "p. 25; topic 6 point 77"
              },
              {
                "id": "CAP4-06-00081",
                "label": "p. 25; topic 6 point 80"
              }
            ]
          },
          {
            "id": "risk-management-owners-and-continuous-improvement",
            "title": "Risk management decisions, accountable owners and continuous improvement",
            "html": "<p>Risk assessment estimates what can go wrong; <em>risk management</em> decides what to do about it. A utility weighing source substitution, treatment and exposure restrictions for a contaminated supply, by effectiveness, feasibility and stakeholder impacts, is managing risk. Hazard identification and exposure or toxicity assessment feed evidence into that decision, and the chosen controls still need implementation and monitoring.</p><p>Treatment needs accountable owners. A risk manager coordinates identification, assessment and follow-up, but a mitigation that needs design changes and director-approved funding must be assigned to named owners with the authority, resources and deadline to deliver it. An action is closed on verified implementation, not on funding approval.</p><p><em>Continuous improvement</em> applies the same evidence loop to working processes: analyse recurring defects, trial a revised procedure, measure the results and standardise only if performance improves. An unmeasured change is not necessarily an improvement.</p>",
            "points": [
              {
                "html": "\"Risk management\" is a process that includes evaluation of policy alternatives.",
                "sources": [
                  {
                    "id": "CAP4-06-00085",
                    "label": "p. 25; topic 6 point 84"
                  }
                ]
              },
              {
                "html": "The risk manager is responsible for risk mitigation.",
                "sources": [
                  {
                    "id": "CAP4-06-00132",
                    "label": "p. 26; topic 6 point 136"
                  }
                ]
              },
              {
                "html": "Continuous betterment in planning and detailing with time is called continuous improvement.",
                "sources": [
                  {
                    "id": "CAP4-10-00061",
                    "label": "p. 39; topic 10 point 60"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00085",
                "label": "p. 25; topic 6 point 84"
              },
              {
                "id": "CAP4-06-00132",
                "label": "p. 26; topic 6 point 136"
              },
              {
                "id": "CAP4-10-00061",
                "label": "p. 39; topic 10 point 60"
              }
            ]
          },
          {
            "id": "project-appraisal-and-sponsor",
            "title": "Project appraisal by lenders and the role of the project sponsor",
            "html": "<p><em>Project appraisal</em> evaluates a proposal's viability and risks before any commitment is made. A bank considering a loan looks at expected demand, construction risk, operating cash flow, security and debt-service capacity. For a financial institution this is the key study for managing its risk, because the central question is the quality and resilience of repayment cash flows, not an optimistic profit estimate or a completed site drawing.</p><p>The <em>project sponsor</em> is the senior representative who secures funding, champions the business case and resolves decisions beyond the project manager's authority. The sponsor links the project to its business justification and provides organisational support. The role is broader than processing invoices, and the sponsor need not personally lend the project's finance.</p>",
            "points": [
              {
                "html": "For a financial institution, the most important study of a project to be taken for risk management is appraisal.",
                "sources": [
                  {
                    "id": "CAP4-10-00056",
                    "label": "p. 39; topic 10 point 55"
                  }
                ]
              },
              {
                "html": "The party that offers the financial resources to fund a project is the sponsor.",
                "sources": [
                  {
                    "id": "CAP4-10-00106",
                    "label": "p. 40; topic 10 point 98"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00056",
                "label": "p. 39; topic 10 point 55"
              },
              {
                "id": "CAP4-10-00106",
                "label": "p. 40; topic 10 point 98"
              }
            ]
          },
          {
            "id": "contracts-agreements-and-dispute-routes",
            "title": "Contracts, agreements and routes for resolving disputes",
            "html": "<p>A <em>contract</em> is an agreement that creates legally enforceable obligations under the applicable law. Enforceability, including the legal requirements for forming a contract, separates it from an informal understanding; the size of the paper, the title of the document and the type of work do not. Whether writing is required depends on the governing law.</p><p>Hence all contracts are agreements, but not all agreements are contracts. Friends who agree socially to meet for lunch ordinarily have no intention of creating legal obligations, although their friendship would not prevent a separate commercial contract.</p><p>Disputes need not end in court. Depending on the governing law and a valid contract, negotiation, adjudication or arbitration can settle the merits.</p>",
            "points": [
              {
                "html": "A legal document between two parties to do or not to do something is called a contract.",
                "sources": [
                  {
                    "id": "CAP4-10-00058",
                    "label": "p. 39; topic 10 point 57"
                  }
                ]
              },
              {
                "html": "The relation between contract and agreement is that all contracts are agreements, but all agreements are not contracts.",
                "sources": [
                  {
                    "id": "CAP4-10-00134",
                    "label": "p. 41; topic 10 point 124"
                  }
                ]
              },
              {
                "html": "The ultimate method of resolving any dispute with a contractor is litigation.",
                "sources": [
                  {
                    "id": "CAP4-10-00107",
                    "label": "p. 40; topic 10 point 99"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00058",
                "label": "p. 39; topic 10 point 57"
              },
              {
                "id": "CAP4-10-00134",
                "label": "p. 41; topic 10 point 124"
              },
              {
                "id": "CAP4-10-00107",
                "label": "p. 40; topic 10 point 99"
              }
            ]
          },
          {
            "id": "subcontracting-mobilisation-advance-and-liquidated-damages",
            "title": "Subcontracting, mobilisation advance and liquidated damages",
            "html": "<p>In <em>subcontracting</em>, a main contractor engages a specialist through a separate agreement to perform a defined part of its works, such as the electrical installation. The main contractor keeps its contract with the employer and is not released from its obligations. Novating the whole contract, or transferring the employer's duty to pay, are different arrangements.</p><p>A <em>mobilisation advance</em> is paid by the client after the agreement is signed and before substantial work begins, so that the contractor can deploy people and equipment. It is administered with agreed security and recovery provisions and is neither payment for measured work nor an extra fee.</p><p><em>Liquidated damages</em> are damages agreed in the contract for delay beyond the completion date, subject to law and to any stated cap.</p>",
            "formulas": [
              {
                "label": "Liquidated damages as stated in a contract",
                "tex": "LD = P\\,r\\,n \\le c\\,P",
                "where": "P is the contract price, r the daily rate, n the assessable days and c the cap fraction."
              }
            ],
            "example": {
              "title": "Worked example: a NRs 40 million contract",
              "html": "<p>Rate 0.05% a day, cap 10%. The daily amount is 40000000 × 0.0005 = NRs 20000. Completion 30 days late with an approved 10-day extension leaves 20 assessable days, so LD = 20 × 20000 = NRs 400000, well below the NRs 4000000 cap.</p>"
            },
            "points": [
              {
                "html": "If part of the contract work is assigned to another party, it is called sub-contracting.",
                "sources": [
                  {
                    "id": "CAP4-10-00052",
                    "label": "p. 39; topic 10 point 51"
                  }
                ]
              },
              {
                "html": "The amount of money paid to the contractor by the client after signing the agreement and before the execution of work is known as mobilisation advance.",
                "sources": [
                  {
                    "id": "CAP4-10-00167",
                    "label": "p. 42; topic 10 point 157"
                  }
                ]
              },
              {
                "html": "The damages for delay in work beyond the agreed date are termed liquidated damages.",
                "sources": [
                  {
                    "id": "CAP4-10-00108",
                    "label": "p. 40; topic 10 point 100; topic 10 point 101"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00052",
                "label": "p. 39; topic 10 point 51"
              },
              {
                "id": "CAP4-10-00167",
                "label": "p. 42; topic 10 point 157"
              },
              {
                "id": "CAP4-10-00108",
                "label": "p. 40; topic 10 point 100; topic 10 point 101"
              }
            ]
          },
          {
            "id": "epc-boot-ppp-and-organisational-labels",
            "title": "Delivery models and labels: EPC, BOOT, PPP and semi-government",
            "html": "<ul><li><em>EPC</em> stands for engineering, procurement and construction: one package places design development, equipment and material sourcing, and delivery of the built facility with one party. It settles nothing about ownership, operation or long-term financing.</li><li><em>BOOT</em> (build-own-operate-transfer) is a concession in which the concessionaire builds the facility, owns and operates it for a defined period, then transfers it. Handing the construction of a public road to a government body, even fast-track, has none of these features.</li><li>A <em>public-private partnership</em> (PPP) is a contract in which a public authority and a private project entity share defined responsibilities and allocated risks. Political parties can be stakeholders in public debate but are not the partners that define a PPP.</li></ul><p>A label such as semi-government describes mixed public and private involvement but is not one legal form. Actual management authority must be read from the constituting law, ownership and governance documents.</p>",
            "points": [
              {
                "html": "EPC contract stands for engineering, procurement and construction.",
                "sources": [
                  {
                    "id": "CAP4-10-00054",
                    "label": "p. 39; topic 10 point 53"
                  }
                ]
              },
              {
                "html": "The Government of Nepal handed over the fast-track project, first planned under a BOOT type of contract, to the Nepal Army.",
                "sources": [
                  {
                    "id": "CAP4-10-00055",
                    "label": "p. 39; topic 10 point 54"
                  }
                ]
              },
              {
                "html": "A political party does not participate in a PPP project.",
                "sources": [
                  {
                    "id": "CAP4-10-00147",
                    "label": "p. 41; topic 10 point 137"
                  }
                ]
              },
              {
                "html": "A semi-government organisation is defined as a mix of government and private management with partial government control.",
                "sources": [
                  {
                    "id": "CAP4-10-00111",
                    "label": "p. 40; topic 10 point 104"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00054",
                "label": "p. 39; topic 10 point 53"
              },
              {
                "id": "CAP4-10-00055",
                "label": "p. 39; topic 10 point 54"
              },
              {
                "id": "CAP4-10-00147",
                "label": "p. 41; topic 10 point 137"
              },
              {
                "id": "CAP4-10-00111",
                "label": "p. 40; topic 10 point 104"
              }
            ]
          },
          {
            "id": "consultant-selection-rfp-and-prequalification",
            "title": "Consultant selection and bidder screening: QCBS, RFP and prequalification",
            "html": "<ul><li><em>Quality- and Cost-Based Selection</em> (QCBS) is a recognised method for selecting consultants. It combines the evaluation of technical quality with that of price, using weights disclosed in the procurement rules. The word quantity has no place in its name, and no weighting is presented here as statutory.</li><li>A <em>Request for Proposal</em> (RFP) is sent by the procuring entity to shortlisted consultants. It describes the services, submission requirements and evaluation criteria, and invites the technical and financial proposal the procedure requires. It is not an invoice, a payment certificate or an assurance of award.</li><li><em>Prequalification</em> is the implementing agency's check, before priced bids are invited, that firms are eligible and capable of a complex contract, against published criteria such as experience, key personnel, equipment and financial capacity. It neither awards the contract nor decides whether a later bid is responsive.</li></ul>",
            "points": [
              {
                "html": "Quantity and cost-based selection is not used for selecting a consultant.",
                "sources": [
                  {
                    "id": "CAP4-10-00059",
                    "label": "p. 39; topic 10 point 58"
                  }
                ]
              },
              {
                "html": "RFP stands for request for proposal.",
                "sources": [
                  {
                    "id": "CAP4-10-00112",
                    "label": "p. 40; topic 10 point 105"
                  }
                ]
              },
              {
                "html": "The assessment done by the implementing agency to check the eligibility of a firm to carry out the contract is called pre-qualification.",
                "sources": [
                  {
                    "id": "CAP4-10-00062",
                    "label": "p. 39; topic 10 point 61"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00059",
                "label": "p. 39; topic 10 point 58"
              },
              {
                "id": "CAP4-10-00112",
                "label": "p. 40; topic 10 point 105"
              },
              {
                "id": "CAP4-10-00062",
                "label": "p. 39; topic 10 point 61"
              }
            ]
          },
          {
            "id": "procurement-methods-and-bid-validity",
            "title": "Procurement method thresholds and the meaning of bid validity",
            "html": "<p>The procurement method for Nepal public works must rest on its legal authority: the Public Procurement Act 2063 and Public Procurement Rules 2064, with their applicable amendments, together with the procurement conditions and relevant date.</p><p><em>Bid validity</em> is the period for which a bidder's offer stays binding under the bidding conditions, counted from the stated submission deadline; an issued Bid Data Sheet may specify 90 days. It is separate from the construction period, the defects liability period and the validity of the bid security.</p><p>Thresholds also demand careful units: one crore is ten million. Whether a band applies must still be checked in the operative rules and the issued Bid Data Sheet.</p>",
            "formulas": [
              {
                "label": "Crore to rupees",
                "tex": "1\\ \\text{crore} = 10^7 = 10\\ \\text{million}"
              }
            ],
            "example": {
              "title": "Worked example: a 9 crore estimate",
              "html": "<p>9 crore = 9 × 10 million = NRs 90 million, which lies below a stated band of up to NRs 100 million. That is arithmetic only; it does not validate the band itself.</p>"
            },
            "points": [
              {
                "html": "Sealed quotations are used for projects up to NRs 20 million.",
                "sources": [
                  {
                    "id": "CAP4-10-00045",
                    "label": "p. 38; topic 10 point 45"
                  }
                ]
              },
              {
                "html": "The bid validity period for a bid having an estimated cost up to NRs 100 million is 90 days.",
                "sources": [
                  {
                    "id": "CAP4-10-00118",
                    "label": "p. 40; topic 10 point 111"
                  }
                ]
              },
              {
                "html": "The bid validity period for a bid having an estimated cost of 9 crores is 90 days.",
                "sources": [
                  {
                    "id": "CAP4-10-00137",
                    "label": "p. 41; topic 10 point 127"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00045",
                "label": "p. 38; topic 10 point 45"
              },
              {
                "id": "CAP4-10-00118",
                "label": "p. 40; topic 10 point 111"
              },
              {
                "id": "CAP4-10-00137",
                "label": "p. 41; topic 10 point 127"
              }
            ]
          },
          {
            "id": "price-adjustment-and-ppmo-blacklisting",
            "title": "Price adjustment clauses and PPMO's blacklisting power",
            "html": "<p>A price adjustment needs more than a long contract period. Before certifying an adjustment on an 18-month contract with a valid clause based on published input indices, check the applicable clause, the eligible work, the base date and the indices with their weights.</p><p>Blacklisting is a statutory power. Under section 63(1) of the Public Procurement Act 2063, in the Law Commission's consolidated text including the Second Amendment 2083, the Public Procurement Monitoring Office (PPMO) holds the power to blacklist on the statutory grounds, and section 63(5) leaves further procedure to be prescribed. A procuring entity's recommendation is not itself the decision.</p>",
            "points": [
              {
                "html": "There is a provision for price adjustment for projects with a duration of more than 12 months.",
                "sources": [
                  {
                    "id": "CAP4-10-00060",
                    "label": "p. 39; topic 10 point 59"
                  }
                ]
              },
              {
                "html": "As per the public procurement act and regulation, the authority to blacklist a contractor lies with the PPMO.",
                "sources": [
                  {
                    "id": "CAP4-10-00168",
                    "label": "p. 42; topic 10 point 158"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00060",
                "label": "p. 39; topic 10 point 59"
              },
              {
                "id": "CAP4-10-00168",
                "label": "p. 42; topic 10 point 158"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Variance of returns",
            "tex": "\\sigma^2 = \\sum p_k\\,(x_k - \\mu)^2"
          },
          {
            "label": "Standard deviation",
            "tex": "\\sigma = \\sqrt{\\sigma^2}"
          },
          {
            "label": "Liquidated damages",
            "tex": "LD = P\\,r\\,n \\le c\\,P"
          },
          {
            "label": "Crore to rupees",
            "tex": "1\\ \\text{crore} = 10^7"
          }
        ],
        "cautions": [],
        "gaps": [
          "Information systems for project management, the first item of this syllabus topic, are not tested by these capsule questions.",
          "Project financing appears only through lender appraisal, sponsorship and delivery models; debt and equity structuring is not treated."
        ]
      },
      "AALL1005": {
        "code": "AALL1005",
        "questionCount": 24,
        "format": 2,
        "summary": "<p>This subchapter covers engineering professional practice: social impact assessment and toxicity evaluation, ethics, integrity and impartiality, vicarious liability, accident records and PPE, copyright, working time under the Labour Act 2074, ordinances under Article 114, private-company shareholder rules, and the separate roles of the Nepal Engineers' Association and the Nepal Engineering Council.</p>",
        "blocks": [
          {
            "id": "social-impact-and-toxicity-evaluation",
            "title": "Social impact assessment and the steps of toxicity evaluation",
            "html": "<p><em>Social impact assessment</em> (SIA) examines how a new infrastructure project affects people: displaced households, divided community access, changed livelihoods, local institutions and vulnerable groups, and how these effects are distributed among groups. It works through participation and proposes mitigation. SIA complements environmental and technical studies; a large total economic benefit does not replace it.</p><p>Evaluating a chemical's toxicity follows ordered steps:</p><ol><li><em>Hazard identification</em>: can the substance cause an adverse effect at all?</li><li><em>Dose-response assessment</em>: how does the effect change with dose?</li><li>Exposure assessment and risk characterisation, needed to judge risk in an actual situation.</li></ol><p>These studies inform risk management decisions but do not make them.</p>",
            "points": [
              {
                "html": "The process often used to analyse the potential social effects of a new infrastructure project is social impact assessment.",
                "sources": [
                  {
                    "id": "CAP4-10-00064",
                    "label": "p. 39; topic 10 point 63"
                  }
                ]
              },
              {
                "html": "The steps involved in the evaluation of toxicity are hazard identification and dose–response evaluation.",
                "sources": [
                  {
                    "id": "CAP4-10-00140",
                    "label": "p. 41; topic 10 point 130"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00064",
                "label": "p. 39; topic 10 point 63"
              },
              {
                "id": "CAP4-10-00140",
                "label": "p. 41; topic 10 point 130"
              }
            ]
          },
          {
            "id": "ethics-and-professionalism",
            "title": "Ethics and professionalism, including personal development",
            "html": "<p><em>Ethics</em> studies moral principles, responsibilities and justified conduct, including how they apply to social issues. When an engineer balances public safety, fair access and honest reporting in recommending a project, the moral basis of those judgments is an ethical question. Legal compliance and financial efficiency matter, but neither exhausts it.</p><p><em>Professionalism</em> combines competence, ethical responsibility and service. Personal development is compatible with it: an engineer who seeks promotion by improving competence, while keeping public-safety and ethical duties paramount, strengthens the profession. Ambition becomes a problem only when it overrides those duties, for example through inaccurate certification to please an employer.</p>",
            "points": [
              {
                "html": "In terms of social science, ethics is the study of how moral values and principles apply to social issues.",
                "sources": [
                  {
                    "id": "CAP4-10-00128",
                    "label": "p. 40; topic 10 point 119"
                  }
                ]
              },
              {
                "html": "Individual growth is not a characteristic of a profession.",
                "sources": [
                  {
                    "id": "CAP4-10-00076",
                    "label": "p. 39; topic 10 point 71"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00128",
                "label": "p. 40; topic 10 point 119"
              },
              {
                "id": "CAP4-10-00076",
                "label": "p. 39; topic 10 point 71"
              }
            ]
          },
          {
            "id": "integrity-impartiality-and-vicarious-liability",
            "title": "Integrity, impartiality and an employer's vicarious liability",
            "html": "<p>Professional independence means assessing work honestly on its merits. An undisclosed payment from a supplier for approving nonconforming materials is an improper inducement: the engineer must reject it and follow the proper reporting process. The principle is to uphold the honour and dignity of the profession with zero tolerance for bribery, fraud and corruption. NEC Rule 18's conduct principles do not turn such a payment into legitimate remuneration because it is privately agreed or offset against an invoice.</p><p><em>Impartiality</em> means applying the disclosed technical and ethical criteria equally. An engineer's own politics, or an applicant's influence, never justifies biased certification, procurement assessment or treatment of clients.</p><p>Under a rule of <em>vicarious liability</em>, an employer bears responsibility for negligence that an employee commits in the course of employment. It does not extend to every private act outside that context.</p>",
            "points": [
              {
                "html": "An engineer shall act so as to uphold and enhance the honour and dignity of the engineering profession and shall act with zero tolerance for bribery, fraud and corruption.",
                "sources": [
                  {
                    "id": "CAP4-10-00077",
                    "label": "p. 39; topic 10 point 72"
                  }
                ]
              },
              {
                "html": "Bias towards political parties is not considered a professional quality of an engineer.",
                "sources": [
                  {
                    "id": "CAP4-10-00119",
                    "label": "p. 40; topic 10 point 112"
                  }
                ]
              },
              {
                "html": "If an employee does wrong at work and the employer has to take responsibility for it, this is known as vicarious liability.",
                "sources": [
                  {
                    "id": "CAP4-10-00067",
                    "label": "p. 39; topic 10 point 66"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00077",
                "label": "p. 39; topic 10 point 72"
              },
              {
                "id": "CAP4-10-00119",
                "label": "p. 40; topic 10 point 112"
              },
              {
                "id": "CAP4-10-00067",
                "label": "p. 39; topic 10 point 66"
              }
            ]
          },
          {
            "id": "accident-records-and-ppe-in-control-hierarchy",
            "title": "Accident records and the place of PPE in the hierarchy of controls",
            "html": "<p>A workplace accident book keeps a dated, factual record of each accident: time, place, the people involved, what happened and the actions taken. Its professional purpose is to support investigation, required reporting and prevention. It may later serve as evidence, but it neither decides legal fault nor replaces emergency response and preventive follow-up.</p><p>Where workers face falling objects and unguarded openings, <em>personal protective equipment</em> (PPE) such as helmets is necessary but is generally the last line of defence in the hierarchy of controls:</p><ol><li>Eliminate hazards where possible.</li><li>Install collective protection, such as guarding for openings.</li><li>Use suitable PPE alongside those measures.</li></ol><p>PPE must match the assessed risk and be properly selected, fitted, explained, inspected and enforced; a signed receipt for issued helmets proves none of this.</p>",
            "points": [
              {
                "html": "The legal document that records the details of an accident in the workplace is the accident book.",
                "sources": [
                  {
                    "id": "CAP4-09-00113",
                    "label": "p. 36; topic 9 point 109"
                  }
                ]
              },
              {
                "html": "The safety measure that is mandatory on construction sites is personal protective equipment.",
                "sources": [
                  {
                    "id": "CAP4-10-00170",
                    "label": "p. 42; topic 10 point 160"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-09-00113",
                "label": "p. 36; topic 9 point 109"
              },
              {
                "id": "CAP4-10-00170",
                "label": "p. 42; topic 10 point 160"
              }
            ]
          },
          {
            "id": "copyright-expression-ideas-and-penalties",
            "title": "Copyright: original expression, underlying ideas and the first-offence penalty",
            "html": "<p><em>Copyright</em> protects original works of authorship. In an engineer's technical manual it protects the original expression, such as the wording and drawings, subject to the law's limits and exceptions. It does not protect the abstract idea or method explained, the numerical facts, or structures built by applying the method.</p><p>This idea-expression distinction allows wide use of techniques. An engineer may apply a design method described in a copyrighted article and write an independently worded explanation of it. Popularity of the technique does not end copyright in the article, so copying its text or figures wholesale remains wrong.</p><table><thead><tr><th scope='col'>Copyright Act 2059, section 27</th><th scope='col'>Fine</th><th scope='col'>Imprisonment</th></tr></thead><tbody><tr><th scope='row'>First violation of section 25</th><td>NRs 10000 to 100000</td><td>Up to six months, or both</td></tr><tr><th scope='row'>Repeat violation</th><td>NRs 20000 to 200000</td><td>Up to one year, or both</td></tr></tbody></table><p>Confiscation and compensation are additional matters.</p>",
            "points": [
              {
                "html": "Copyright is a legal framework that protects original works of authorship.",
                "sources": [
                  {
                    "id": "CAP4-10-00104",
                    "label": "p. 40; topic 10 point 96"
                  }
                ]
              },
              {
                "html": "Design ideas in an article that are in mass use are not protected by copyright.",
                "sources": [
                  {
                    "id": "CAP4-10-00110",
                    "label": "p. 40; topic 10 point 103"
                  }
                ]
              },
              {
                "html": "The punishment for infringement of copyright for the first time is imprisonment up to 6 months, a fine of Rs 10,000 to Rs 1 lakh, or both.",
                "sources": [
                  {
                    "id": "CAP4-10-00075",
                    "label": "p. 39; topic 10 point 70"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00104",
                "label": "p. 40; topic 10 point 96"
              },
              {
                "id": "CAP4-10-00110",
                "label": "p. 40; topic 10 point 103"
              },
              {
                "id": "CAP4-10-00075",
                "label": "p. 39; topic 10 point 70"
              }
            ]
          },
          {
            "id": "labour-act-working-time-and-rest",
            "title": "Labour Act 2074: ordinary working time and rest after five hours",
            "html": "<p>Nepal's labour-law framework studied here is the <em>Labour Act, 2074</em>. The year in its title identifies the enactment; it does not show that no later amendment, rule or notice affects the present position.</p><ul><li><em>Section 28(1)</em> limits ordinary working time to 8 hours a day and 48 hours a week. Overtime is regulated separately, so calling eight hours an absolute ceiling covering every lawful overtime arrangement is misleading.</li><li><em>Section 28(2)</em> requires a half-hour rest after five hours of continuous work.</li><li><em>Section 28(3)</em> provides breaks by rotation where work must go on without stopping, and <em>28(4)</em> counts both kinds of break as ordinary working time.</li></ul><p>Continuous operation therefore affects how breaks are timetabled, not whether workers receive them.</p>",
            "points": [
              {
                "html": "According to Nepali legislation, the current labour act was enacted in 2074 BS.",
                "sources": [
                  {
                    "id": "CAP4-10-00161",
                    "label": "p. 41; topic 10 point 152"
                  }
                ]
              },
              {
                "html": "As per labour law, the maximum working hours of a worker in a day is 8 hours.",
                "sources": [
                  {
                    "id": "CAP4-10-00073",
                    "label": "p. 39; topic 10 point 70"
                  }
                ]
              },
              {
                "html": "As per labour law, workers are not allowed to work continuously for more than 5 hours.",
                "sources": [
                  {
                    "id": "CAP4-10-00074",
                    "label": "p. 39; topic 10 point 70"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00161",
                "label": "p. 41; topic 10 point 152"
              },
              {
                "id": "CAP4-10-00073",
                "label": "p. 39; topic 10 point 70"
              },
              {
                "id": "CAP4-10-00074",
                "label": "p. 39; topic 10 point 70"
              }
            ]
          },
          {
            "id": "ordinances-under-article-114",
            "title": "Ordinances under Article 114 of Nepal's Constitution",
            "html": "<p>An <em>ordinance</em> is a temporary legal instrument, and Article 114(2) of the Constitution limits how long it can operate.</p><ul><li>Clauses (a) and (b) deal with an ordinance ending earlier, through non-acceptance or repeal by the President.</li><li>If neither has occurred, clause (c) makes the ordinance inactive sixty days after the prescribed meeting date of both Houses.</li><li>If the Houses first meet on different dates, the explanation counts from the meeting of whichever House meets later; the earlier meeting, the Cabinet's recommendation and the promulgation are not the trigger.</li></ul><p>The sixty-day rule limits the life of an ordinance. This reading follows the Law Commission consolidation through the Second Amendment 2077.</p>",
            "points": [
              {
                "html": "Any ordinance forwarded by the Council of Ministers should be passed by parliament within 60 days.",
                "sources": [
                  {
                    "id": "CAP4-10-00130",
                    "label": "p. 41; topic 10 point 121"
                  }
                ]
              },
              {
                "html": "If an ordinance forwarded by the Council of Ministers is not passed by parliament within 60 days, it becomes ineffective.",
                "sources": [
                  {
                    "id": "CAP4-10-00131",
                    "label": "p. 41; topic 10 point 121"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00130",
                "label": "p. 41; topic 10 point 121"
              },
              {
                "id": "CAP4-10-00131",
                "label": "p. 41; topic 10 point 121"
              }
            ]
          },
          {
            "id": "companies-act-private-company-shareholders",
            "title": "Companies Act 2063: one-person incorporation and the shareholder cap",
            "html": "<p>Nepal's <em>Companies Act 2063</em> permits a private company to be incorporated by a single shareholder under section 3(1), so two founding shareholders are not required. That permission concerns only the minimum ownership count; the company keeps its statutory filing duties, and its separate personality and limited liability remain subject to the Act.</p><p>The general upper limit is in section 9(1). In the consolidation that includes the 2081 amendment it is 101 counted shareholders, replacing the older limit of 50. Under section 9(3), certain employee-share-plan holders, including qualifying former employees, are left out of the count, and section 9(1A) has a transitional exception for transport businesses. The cap is therefore not an exceptionless limit on every name in the register.</p>",
            "points": [
              {
                "html": "According to the Companies Act of Nepal, the minimum and maximum numbers of members required for a private limited company are 1 and 50.",
                "sources": [
                  {
                    "id": "CAP4-10-00151",
                    "label": "p. 41; topic 10 point 141"
                  }
                ]
              },
              {
                "html": "According to the Companies Act of Nepal, the minimum number of members required for a private limited company is 1.",
                "sources": [
                  {
                    "id": "CAP4-10-00152",
                    "label": "p. 41; topic 10 point 141"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00151",
                "label": "p. 41; topic 10 point 141"
              },
              {
                "id": "CAP4-10-00152",
                "label": "p. 41; topic 10 point 141"
              }
            ]
          },
          {
            "id": "nea-and-nec-association-versus-regulator",
            "title": "NEA and NEC: professional association versus statutory regulator",
            "html": "<p>The <em>Nepal Engineers' Association</em> (NEA) describes itself as a professional association of Nepalese engineers registered under the Social Service Act, supporting professional development and advocacy. The <em>Nepal Engineering Council</em> (NEC) is the statutory engineering regulator, established with the functions set out in sections 3–4 and 9 of its Act.</p><p>The two roles are not interchangeable. An association grade is not NEC registration and gives no authority to practise.</p><p>NEA's official introduction also lists discipline-specific partner societies among national professional bodies, including the electrical engineers' society SEEN. SEEN is therefore an electrical-engineering professional society; like NEA itself, it has none of NEC's registration powers.</p>",
            "points": [
              {
                "html": "The Nepal Engineers' Association (NEA) is a social service and independent organisation of Nepalese engineers.",
                "sources": [
                  {
                    "id": "CAP4-10-00070",
                    "label": "p. 39; topic 10 point 69"
                  }
                ]
              },
              {
                "html": "The number of categories of membership in the Nepal Engineers' Association is 3.",
                "sources": [
                  {
                    "id": "CAP4-10-00072",
                    "label": "p. 39; topic 10 point 69"
                  }
                ]
              },
              {
                "html": "SEEN is not a professional engineering body.",
                "sources": [
                  {
                    "id": "CAP4-10-00069",
                    "label": "p. 39; topic 10 point 68"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00070",
                "label": "p. 39; topic 10 point 69"
              },
              {
                "id": "CAP4-10-00072",
                "label": "p. 39; topic 10 point 69"
              },
              {
                "id": "CAP4-10-00069",
                "label": "p. 39; topic 10 point 68"
              }
            ]
          },
          {
            "id": "nea-committee-term-and-quorum-arithmetic",
            "title": "NEA governance facts: committee term and quorum arithmetic",
            "html": "<p>The elected Central Executive Committee of the Nepal Engineers' Association has a tenure of 2 years.</p><p>A <em>quorum</em> is the minimum attendance that a body's own rules require for valid business. Where a rule requires more than half of the membership, the quorum is the smallest whole number above half.</p>",
            "formulas": [
              {
                "label": "More-than-half quorum for N members",
                "tex": "q = \\left\\lfloor \\dfrac{N}{2} \\right\\rfloor + 1"
              }
            ],
            "example": {
              "title": "Worked example: a 25-member committee",
              "html": "<p>Half of 25 is 12.5, so \\(q = 12 + 1 = 13\\) members must attend; 12 falls short. The quorum for a meeting of the NEA likewise requires more than 50% of the members.</p>"
            },
            "points": [
              {
                "html": "The tenure of an executive member of the Nepal Engineers' Association is 2 years.",
                "sources": [
                  {
                    "id": "CAP4-10-00071",
                    "label": "p. 39; topic 10 point 69"
                  }
                ]
              },
              {
                "html": "The quorum required to conduct a meeting of the NEA is more than 50% of the members.",
                "sources": [
                  {
                    "id": "CAP4-10-00171",
                    "label": "p. 42; topic 10 point 161"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00071",
                "label": "p. 39; topic 10 point 69"
              },
              {
                "id": "CAP4-10-00171",
                "label": "p. 42; topic 10 point 161"
              }
            ]
          }
        ],
        "cautions": [],
        "gaps": [
          "Environment-and-society coverage is limited to social impact assessment and toxicity steps; environmental impact assessment procedure and environmental law are not tested by these capsule points.",
          "Contemporary engineering issues and the full range of NEA roles and activities are touched only through SEEN, the committee term and the association-regulator distinction.",
          "Labour, copyright, constitutional and company-law points are read from identified editions; later amendments, rules and notices were not exhaustively consolidated."
        ]
      },
      "AALL1006": {
        "code": "AALL1006",
        "questionCount": 33,
        "format": 2,
        "summary": "<p>This subchapter covers the Nepal Engineering Council as regulator: its statutory status and purpose, reading the Act and Regulations by edition and date, the chairperson, vice-chairperson, registrar and association-linked seats, minimum seats for women, registration categories and the route to practise, the examination committee, recognition of engineering education, the Rule 18 code of conduct, penalties, dissolution, rules, the annual report and audit.</p>",
        "blocks": [
          {
            "id": "nec-status-purpose-and-functions",
            "title": "NEC's statutory status, purpose and what falls outside its role",
            "html": "<p>The Nepal Engineering Council Act 2055 creates the Council in sections 3 and 4 and makes it an <em>autonomous corporate body</em> established by statute. Its public functions, conferred by statute, distinguish it from a voluntary professional association or a contractor, and its autonomy does not mean freedom to disregard the Act.</p><p>The purpose of the Act is to systematise engineering practice: organising the profession, recognising qualifications, and registering and regulating engineers, including standards of professional conduct. It does not set electricity tariffs, award public construction contracts or replace a university's power to confer degrees.</p><p>Routine construction supervision of a particular works contract, such as daily site supervision and certification, belongs to the project team appointed for that contract. NEC regulates qualification, education and conduct; it may examine a complaint arising from supervision without becoming the site supervisor.</p>",
            "points": [
              {
                "html": "The Nepal Engineering Council (NEC), a government and autonomous body, was established in 2055 BS.",
                "sources": [
                  {
                    "id": "CAP4-10-00078",
                    "label": "p. 39; topic 10 point 73"
                  }
                ]
              },
              {
                "html": "The purpose of the Nepal Engineering Council Act 2055 is to regulate and systematise the engineering profession through qualification, registration and conduct standards.",
                "sources": [
                  {
                    "id": "CAP4-10-00133",
                    "label": "p. 41; topic 10 point 123"
                  }
                ]
              },
              {
                "html": "Construction supervision is not a function of NEC.",
                "sources": [
                  {
                    "id": "CAP4-10-00169",
                    "label": "p. 42; topic 10 point 159"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00078",
                "label": "p. 39; topic 10 point 73"
              },
              {
                "id": "CAP4-10-00133",
                "label": "p. 41; topic 10 point 123"
              },
              {
                "id": "CAP4-10-00169",
                "label": "p. 42; topic 10 point 159"
              }
            ]
          },
          {
            "id": "reading-nec-law-by-edition-and-date",
            "title": "Reading NEC law by edition: authentication, commencement and amendments",
            "html": "<p>Legal dates mark distinct events: authentication or publication, approval, Gazette notification, commencement and, often later, website upload.</p><ul><li><em>The Act.</em> The NEC Act was promulgated on 2055/11/27, and section 1(2) provides for its commencement by Gazette notification.</li><li><em>Amendments.</em> An amendment's own commencement clause controls. Where an amendment to the Regulations takes effect on government approval, the stated approval date governs even if its PDF is uploaded years later.</li><li><em>Editions.</em> Read the base text with every relevant amendment.</li></ul>",
            "points": [
              {
                "html": "The NEC Act was promulgated on 2055/11/27.",
                "sources": [
                  {
                    "id": "CAP4-10-00139",
                    "label": "p. 41; topic 10 point 129"
                  }
                ]
              },
              {
                "html": "The first amendment of the NEC regulation was made on 2064-02-17.",
                "sources": [
                  {
                    "id": "CAP4-10-00095",
                    "label": "p. 40; topic 10 point 87"
                  }
                ]
              },
              {
                "html": "The second amendment of the NEC regulation was made on 2069/03/15.",
                "sources": [
                  {
                    "id": "CAP4-10-00136",
                    "label": "p. 41; topic 10 point 126"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00139",
                "label": "p. 41; topic 10 point 129"
              },
              {
                "id": "CAP4-10-00095",
                "label": "p. 40; topic 10 point 87"
              },
              {
                "id": "CAP4-10-00136",
                "label": "p. 41; topic 10 point 126"
              }
            ]
          },
          {
            "id": "chairperson-and-vice-chairperson",
            "title": "Chairperson and vice-chairperson: nomination and qualifications",
            "html": "<p>Under section 5 of the Act, the Council's <em>chairperson</em> and <em>vice-chairperson</em> are nominated by the Government of Nepal. Other seats have their own appointment routes, and the election of association representatives does not turn these offices into elected ones. The statutory titles are chairperson and vice-chairperson; no separate NEC president office should be inferred.</p><table><thead><tr><th scope='col'>Office</th><th scope='col'>Academic condition</th><th scope='col'>Experience after the degree</th></tr></thead><tbody><tr><th scope='row'>Chairperson, 5(1)(a)</th><td>Engineering bachelor's degree</td><td>At least 15 years</td></tr><tr><th scope='row'>Vice-chairperson, 5(1)(b)</th><td>Engineering bachelor's degree</td><td>At least 10 years</td></tr></tbody></table><p>Only experience gained after the engineering degree counts, and a diploma or non-engineering degree does not meet the academic condition. Meeting a threshold establishes eligibility only; the Government's nomination is still required.</p>",
            "example": {
              "title": "Worked example: counting qualifying years",
              "html": "<p>A graduate with 16 post-degree years qualifies for chairperson. Someone with 16 years in total, 4 of them before graduation, has only 16 − 4 = 12 qualifying years and falls short of 15.</p>"
            },
            "points": [
              {
                "html": "The chairman and vice-chairman of NEC are nominated by the government of Nepal.",
                "sources": [
                  {
                    "id": "CAP4-10-00080",
                    "label": "pp. 39, 41; topic 10 point 74; topic 10 point 151"
                  }
                ]
              },
              {
                "html": "The requirement for being the chairman (president) of NEC is a bachelor's degree in engineering and 15 years of engineering experience.",
                "sources": [
                  {
                    "id": "CAP4-10-00083",
                    "label": "p. 39; topic 10 point 77"
                  }
                ]
              },
              {
                "html": "The qualification required for the vice-chairman of NEC is a bachelor's degree in engineering with 10 years of experience.",
                "sources": [
                  {
                    "id": "CAP4-10-00084",
                    "label": "p. 39; topic 10 point 78"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00080",
                "label": "pp. 39, 41; topic 10 point 74; topic 10 point 151"
              },
              {
                "id": "CAP4-10-00083",
                "label": "p. 39; topic 10 point 77"
              },
              {
                "id": "CAP4-10-00084",
                "label": "p. 39; topic 10 point 78"
              }
            ]
          },
          {
            "id": "registrar-appointment-and-role",
            "title": "The registrar: qualification, appointment route and executive role",
            "html": "<p>The <em>registrar</em> must have an engineering bachelor's degree followed by ten years of engineering experience, the same post-degree threshold as the vice-chairperson, but the appointment route differs. Under section 27(1), as amended in 2079, the Government of Nepal appoints the registrar on the basis of open competition. This is neither an ordinary Council staff appointment under section 34 nor a nomination by the NEA president, and ten years of service bring no automatic promotion to the post.</p><p>Keep the offices apart when reading records. The chairperson leads the Council, while the registrar administers its executive work, so a historical list naming both identifies two different offices. The first president of NEC was Er. Ram Babu Sharma, and its first registrar was Bindeshwar Yadav.</p>",
            "points": [
              {
                "html": "The qualification required for the registrar of NEC is a bachelor's degree in engineering with 10 years of experience.",
                "sources": [
                  {
                    "id": "CAP4-10-00085",
                    "label": "p. 39; topic 10 point 78"
                  }
                ]
              },
              {
                "html": "The first president and the first registrar of NEC were, respectively, Er. Ram Babu Sharma and Bindeshwar Yadav.",
                "sources": [
                  {
                    "id": "CAP4-10-00082",
                    "label": "p. 39; topic 10 point 76"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00085",
                "label": "p. 39; topic 10 point 78"
              },
              {
                "id": "CAP4-10-00082",
                "label": "p. 39; topic 10 point 76"
              }
            ]
          },
          {
            "id": "nea-president-and-elected-representatives",
            "title": "Association-linked seats: the ex-officio president and elected representatives",
            "html": "<p>The Council-composition arrangement in section 5 links seats to the Nepal Engineers' Association in two different ways.</p><ul><li>The NEA president sits on the Council <em>ex officio</em>, that is, by virtue of holding the association office. The seat attaches to the office, not to the person for life; it does not make that person the Council's chairperson, and it is not a delegation from the registrar.</li><li>The five specified NEA representatives come through the prescribed election arrangement rather than by holding the presidency.</li></ul><p>Election-based and ex-officio membership are therefore separate routes, and neither implies that every Council member is directly elected or that an annual meeting converts elected seats into ex-officio ones.</p>",
            "points": [
              {
                "html": "The president of NEA is an ex-officio member of NEC.",
                "sources": [
                  {
                    "id": "CAP4-10-00081",
                    "label": "p. 39; topic 10 point 75"
                  }
                ]
              },
              {
                "html": "The number of members directly elected to the Council from the Nepal Engineers' Association is 5.",
                "sources": [
                  {
                    "id": "CAP4-10-00135",
                    "label": "p. 41; topic 10 point 125"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00081",
                "label": "p. 39; topic 10 point 75"
              },
              {
                "id": "CAP4-10-00135",
                "label": "p. 41; topic 10 point 125"
              }
            ]
          },
          {
            "id": "nominated-seats-and-womens-minima",
            "title": "Nominated seats and the minimum number of women in each group",
            "html": "<p>The amended section 5 fixes the minimum number of women separately for each nomination group.</p><table><thead><tr><th scope='col'>Nomination group</th><th scope='col'>Seats</th><th scope='col'>Minimum women</th></tr></thead><tbody><tr><th scope='row'>Government of Nepal, section 5(1)(c)</th><td>7</td><td>3</td></tr><tr><th scope='row'>Council itself, section 5(1)(h), amended 2079</th><td>2</td><td>1</td></tr></tbody></table><p>The Council's two nominees must also be engineers with the prescribed seven years of post-degree experience. Because each minimum belongs to its group, they are not one pool: the minima add to 3 + 1 = 4, yet four women placed entirely among the Government nominees would still leave the Council's pair non-compliant. Relabelling a Government nominee on paper does not cure it.</p>",
            "example": {
              "title": "Worked example: a non-compliant list",
              "html": "<p>Three women among the Government nominees and none among the Council nominees: the Government group is compliant, but the Council group falls short by 1 − 0 = 1 woman, however many men are listed.</p>"
            },
            "points": [
              {
                "html": "The number of members nominated by NEC itself is 3.",
                "sources": [
                  {
                    "id": "CAP4-10-00088",
                    "label": "p. 40; topic 10 point 81"
                  }
                ]
              },
              {
                "html": "The minimum number of female members in the NEC committee is 4.",
                "sources": [
                  {
                    "id": "CAP4-10-00089",
                    "label": "p. 40; topic 10 point 81"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00088",
                "label": "p. 40; topic 10 point 81"
              },
              {
                "id": "CAP4-10-00089",
                "label": "p. 40; topic 10 point 81"
              }
            ]
          },
          {
            "id": "registration-categories-and-route-to-practise",
            "title": "Registration categories, non-Nepali engineers and the route to practise",
            "html": "<p>Rules 3 and 3A of the NEC Regulations 2057, as amended through 2080, describe three registration categories: general registered engineer, professional engineer and non-Nepali engineer. They are regulatory routes with different eligibility and assessment requirements, not engineering disciplines, NEA membership grades or quality ranks.</p><p>The non-Nepali route turns on foreign nationality together with the employment-related registration conditions of Rule 10.</p><p>The minimum basis for practice in Nepal is a recognised engineering bachelor's degree plus completed NEC registration. The Act's academic definition in section 2(d) and its registration requirement in section 11 are separate. The route runs through application, scrutiny, examination where required, recommendation, registration and certificate.</p>",
            "points": [
              {
                "html": "Engineers registered in NEC categories A, B and C are, respectively, general engineer, professional engineer and foreign engineer.",
                "sources": [
                  {
                    "id": "CAP4-10-00086",
                    "label": "p. 39; topic 10 point 79"
                  }
                ]
              },
              {
                "html": "According to NEC, a non-Nepali engineer is a non-Nepali engineer working under an engineering institution.",
                "sources": [
                  {
                    "id": "CAP4-10-00087",
                    "label": "p. 40; topic 10 point 80"
                  }
                ]
              },
              {
                "html": "The minimum qualification required for engineering practice in Nepal is a bachelor's degree in engineering and registration in NEC.",
                "sources": [
                  {
                    "id": "CAP4-10-00145",
                    "label": "p. 41; topic 10 point 135"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00086",
                "label": "p. 39; topic 10 point 79"
              },
              {
                "id": "CAP4-10-00087",
                "label": "p. 40; topic 10 point 80"
              },
              {
                "id": "CAP4-10-00145",
                "label": "p. 41; topic 10 point 135"
              }
            ]
          },
          {
            "id": "examination-committee-and-register-counts",
            "title": "Registration examination committee and dated register counts",
            "html": "<p>Under section 14(1) of the Act, as amended in 2079, the engineering-registration examination committee has five members:</p><ul><li>a Council member as coordinator;</li><li>three Council members, including one woman;</li><li>the registrar as member-secretary.</li></ul><p>Subject experts invited under section 14(4) are not additional prescribed seats, and the three-person conduct investigation committee is a separate body under Regulations Rule 20.</p><p>Statistics drawn from the register are snapshots. By 2078/12/31, 61 professional engineers were registered in NEC.</p>",
            "points": [
              {
                "html": "The number of members involved in the exam committee of NEC is 5.",
                "sources": [
                  {
                    "id": "CAP4-10-00090",
                    "label": "p. 40; topic 10 point 82"
                  }
                ]
              },
              {
                "html": "The number of professional engineers registered in NEC by 2078/12/31 was 61.",
                "sources": [
                  {
                    "id": "CAP4-10-00091",
                    "label": "p. 40; topic 10 point 83"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00090",
                "label": "p. 40; topic 10 point 82"
              },
              {
                "id": "CAP4-10-00091",
                "label": "p. 40; topic 10 point 83"
              }
            ]
          },
          {
            "id": "recognition-of-engineering-education",
            "title": "Recognition of engineering education: criteria, decisions and evidence",
            "html": "<p>NEC's education powers under Act 21A–21B and Rules 15–16 cover recognition of engineering programmes, including programme conditions, academic standards, staff and facilities, through a formal regulatory decision. One aggregate score cannot replace the individual mandatory criteria or the record of recognised programmes.</p><p>Monitoring and recognition status are different.</p><p>University affiliation and NEC recognition answer different questions. A university's affiliation of a master's programme leaves open whether the programme meets NEC's requirements.</p><p>A ranking of provinces by recognised institutions, such as a reported lead for Bagmati, needs a dated institution-level list and a consistent counting unit, because colleges, campuses and programmes give different totals.</p>",
            "points": [
              {
                "html": "To get affiliation from NEC, a college should score at least 60% on average.",
                "sources": [
                  {
                    "id": "CAP4-10-00092",
                    "label": "p. 40; topic 10 point 84"
                  }
                ]
              },
              {
                "html": "For temporary affiliation, the supervision of a college by NEC is conducted once a year.",
                "sources": [
                  {
                    "id": "CAP4-10-00093",
                    "label": "p. 40; topic 10 point 85"
                  }
                ]
              },
              {
                "html": "The master's programme affiliation related sub-regulation of NEC was formulated on 2076-09-06.",
                "sources": [
                  {
                    "id": "CAP4-10-00101",
                    "label": "p. 40; topic 10 point 93"
                  }
                ]
              },
              {
                "html": "The province with the largest number of institutional colleges affiliated by NEC is Bagmati Province.",
                "sources": [
                  {
                    "id": "CAP4-10-00094",
                    "label": "p. 40; topic 10 point 86"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00092",
                "label": "p. 40; topic 10 point 84"
              },
              {
                "id": "CAP4-10-00093",
                "label": "p. 40; topic 10 point 85"
              },
              {
                "id": "CAP4-10-00101",
                "label": "p. 40; topic 10 point 93"
              },
              {
                "id": "CAP4-10-00094",
                "label": "p. 40; topic 10 point 86"
              }
            ]
          },
          {
            "id": "rule-18-professional-code-of-conduct",
            "title": "Rule 18: the professional code of conduct and its eleven clauses",
            "html": "<p>In the NEC Regulation, the code of conduct of engineers is set out in chapter 7, article 38. It lays down the duties of registered engineers towards the public, their clients and the profession.</p><p>The professional code of conduct issued by NEC has 11 articles. Always state which amended version of the Regulation is being described.</p>",
            "points": [
              {
                "html": "In the NEC Regulation, the code of conduct of engineers is mentioned in chapter 7, article 38.",
                "sources": [
                  {
                    "id": "CAP4-10-00142",
                    "label": "p. 41; topic 10 point 132"
                  }
                ]
              },
              {
                "html": "The professional code of conduct issued by NEC has 11 articles.",
                "sources": [
                  {
                    "id": "CAP4-10-00079",
                    "label": "p. 39; topic 10 point 73"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00142",
                "label": "p. 41; topic 10 point 132"
              },
              {
                "id": "CAP4-10-00079",
                "label": "p. 39; topic 10 point 73"
              }
            ]
          },
          {
            "id": "offences-and-penalties-under-section-30",
            "title": "Offences and penalties under section 30 of the NEC Act",
            "html": "<p>Section 30 of the NEC Act 2055, read with the First Amendment 2079, separates kinds of contravention.</p><table><thead><tr><th scope='col'>Provision</th><th scope='col'>Contravention</th><th scope='col'>Maximum penalty</th></tr></thead><tbody><tr><th scope='row'>Section 30(1)–(2)</th><td>Engineering practice without registration</td><td>Fine up to NRs 10000, imprisonment up to three months, or both</td></tr><tr><th scope='row'>Section 30(3)</th><td>Contraventions other than those in 30(2) and 30(2A)</td><td>Fine up to NRs 25000</td></tr></tbody></table><p>These are maximum, alternative penalties, not a fixed tariff and not a registration fee. The 30(3) amount is a maximum for a residual category, not a cap on liability under other laws. Lettered citations such as 30(b) or 30(c) blur these subsections and should be replaced by the numbered provisions.</p>",
            "points": [
              {
                "html": "If an engineer violates sub-section 30(b) of the NEC Act 2055, the punishment is a fine of NRs 10,000.",
                "sources": [
                  {
                    "id": "CAP4-10-00096",
                    "label": "p. 40; topic 10 point 88"
                  }
                ]
              },
              {
                "html": "As per the NEC Act (amended 2079), section 30(c), the punishment for violation of rules is a fine of NRs 25,000.",
                "sources": [
                  {
                    "id": "CAP4-10-00099",
                    "label": "p. 40; topic 10 point 91"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00096",
                "label": "p. 40; topic 10 point 88"
              },
              {
                "id": "CAP4-10-00099",
                "label": "p. 40; topic 10 point 91"
              }
            ]
          },
          {
            "id": "dissolution-and-reconstitution-of-the-council",
            "title": "Dissolution and reconstitution of the Council under section 31",
            "html": "<p>Section 31(1) lists the grounds on which the Government of Nepal may dissolve the Council:</p><ul><li>failure to exercise its statutory powers;</li><li>abuse of those powers;</li><li>exercise beyond the powers conferred;</li><li>failure to perform its duties under the Act or the Rules.</li></ul><p>Section 31(2)–(4) then deals with interim custody and conduct of business, reconstitution and the return of assets. No extra notice period should be read in, and an engineer's private contractual dispute is not a listed ground.</p><p>Under section 31(3), another Council is to be constituted under section 5 generally within three months from dissolution. The word generally must not be dropped, and the period runs from dissolution; it is neither a minimum waiting time nor the new Council's term.</p>",
            "points": [
              {
                "html": "The Government of Nepal may dissolve the NEC when the committee of NEC works against the Act and regulations.",
                "sources": [
                  {
                    "id": "CAP4-10-00138",
                    "label": "p. 41; topic 10 point 128; topic 10 point 144"
                  }
                ]
              },
              {
                "html": "The period allocated by GoN for the formation of a new council after the dissolution of the current NEC is 3 months.",
                "sources": [
                  {
                    "id": "CAP4-10-00097",
                    "label": "p. 40; topic 10 point 89"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00138",
                "label": "p. 41; topic 10 point 128; topic 10 point 144"
              },
              {
                "id": "CAP4-10-00097",
                "label": "p. 40; topic 10 point 89"
              }
            ]
          },
          {
            "id": "rules-annual-report-and-audit",
            "title": "Council rules, the annual report and the audit of accounts",
            "html": "<ul><li><em>Rules.</em> Under section 37(1)–(2), NEC makes rules to implement the Act, and they take effect only on approval by the Government of Nepal. Subordinate instruments under section 37(3) form a separate category, and bylaws or guidelines cannot override the Act.</li><li><em>Annual report.</em> Section 37A, added in 2079, requires the Council to submit an annual report to the Government of Nepal every year within the month of Ashoj and to publish it. It covers the year's activities, administrative costs, income and expenditure, and planned programmes.</li><li><em>Audit.</em> Rule 31(1) of the Regulations through the Third Amendment 2080 requires the Council to appoint an accredited auditor under prevailing law within three months of the end of the financial year, and Rule 31(2) requires a copy of the audit report to go to the Government of Nepal. The three-month limit concerns the appointment only.</li></ul>",
            "points": [
              {
                "html": "Approval for changes in the rules and regulations of the Nepal Engineering Council is granted by the government of Nepal.",
                "sources": [
                  {
                    "id": "CAP4-10-00098",
                    "label": "p. 40; topic 10 point 90"
                  }
                ]
              },
              {
                "html": "After the annual meeting of NEC, the report is submitted to the government of Nepal.",
                "sources": [
                  {
                    "id": "CAP4-10-00100",
                    "label": "p. 40; topic 10 point 92"
                  }
                ]
              },
              {
                "html": "The auditor of the Nepal Engineering Council is appointed by NEC itself.",
                "sources": [
                  {
                    "id": "CAP4-10-00102",
                    "label": "p. 40; topic 10 point 94"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00098",
                "label": "p. 40; topic 10 point 90"
              },
              {
                "id": "CAP4-10-00100",
                "label": "p. 40; topic 10 point 92"
              },
              {
                "id": "CAP4-10-00102",
                "label": "p. 40; topic 10 point 94"
              }
            ]
          }
        ],
        "cautions": [],
        "gaps": [
          "Registration fees, examination schedules, renewal and disciplinary procedure are not tested by these capsule points.",
          "The notes follow the NEC Act 2055 with the First Amendment 2079 and the Regulations 2057 through the Third Amendment 2080, noting the separate Fourth Amendment 2082; later changes were not consolidated."
        ]
      },
      "additional-capsule-rural": {
        "code": "additional-capsule-rural",
        "questionCount": 9,
        "format": 2,
        "summary": "<p>These rural-engineering capsule points sit outside the ten listed civil subchapters. They cover farmstead zoning and the orientation of long animal houses, livestock restraint crushes and machine milking, chilled versus frozen fish storage, intercultural crop operations and poultry-farm footbaths as part of biosecurity.</p>",
        "blocks": [
          {
            "id": "farmstead-zoning",
            "title": "Farmstead zoning: separating home, animals and farm chemicals",
            "html": "<p>A <em>farmstead</em> combines a family home with crop and livestock work, so its layout should meet residential needs while separating functions that can contaminate one another. Domestic food preparation and sanitation facilities belong apart from animal areas and from the storage and mixing of pesticides and other farm chemicals.</p><p>Shared shelving for food and chemicals, a common wet area for animal washing and cooking, or chemical mixing above the household water tank all defeat that aim.</p>",
            "points": [
              {
                "html": "The essential things to be built in a farm house as a residential building are kitchen, bathroom, store house and farm.",
                "sources": [
                  {
                    "id": "CAP4-10-00176",
                    "label": "p. 42; rural point 4"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00176",
                "label": "p. 42; rural point 4"
              }
            ]
          },
          {
            "id": "animal-house-orientation",
            "title": "Orienting a long animal house against low sun",
            "html": "<p>For a long animal shed in a hot, sunny region at low latitude, once ventilation has been checked separately and the goal is to keep low morning and evening sun off the long walls, the long axis is commonly run east-west. The broad walls then face mainly north and south, so the low sun strikes chiefly the short end walls.</p><p>Wind direction, latitude, shading, roof form and drainage must still be assessed, and a temperature-duration figure cannot on its own fix the layout.</p>",
            "points": [
              {
                "html": "If the temperature is 30–35°C for more than 5 hours a day, the orientation of an animal house should be east–west.",
                "sources": [
                  {
                    "id": "CAP4-10-00197",
                    "label": "p. 42; rural point 20"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00197",
                "label": "p. 42; rural point 20"
              }
            ]
          },
          {
            "id": "livestock-restraint-and-machine-milking",
            "title": "Livestock restraint crushes and the principle of machine milking",
            "html": "<p>A <em>crush</em>, or handling chute, restrains and positions one animal at a time so that routine treatment or examination can be carried out safely. Collecting yards hold groups, loading ramps help move animals onto vehicles, and paddocks allow free movement. A milking parlour may use its own restraint arrangements rather than a crush.</p><p>A conventional milking cluster for a cow has four teat cups, one for each teat of the four udder quarters. The number is specific to the cow and to that equipment.</p><p><em>Machine milking</em> uses a controlled vacuum to draw milk, while pulsating liners alternate between a milking phase and a rest or massage phase. It is not unregulated continuous suction, and excessive vacuum or faulty pulsation can injure teat tissue.</p>",
            "points": [
              {
                "html": "Structures used for restraining animals when carrying out routine livestock practices like spraying and milking are called crushes.",
                "sources": [
                  {
                    "id": "CAP4-10-00188",
                    "label": "p. 42; rural point 12"
                  }
                ]
              },
              {
                "html": "The number of teat cups used to extract milk from a cow by mechanical means is 4.",
                "sources": [
                  {
                    "id": "CAP4-10-00177",
                    "label": "p. 42; rural point 5"
                  }
                ]
              },
              {
                "html": "The principle of mechanical milking is to use a vacuum to extract milk from the cow's teat.",
                "sources": [
                  {
                    "id": "CAP4-10-00196",
                    "label": "p. 42; rural point 19"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00188",
                "label": "p. 42; rural point 12"
              },
              {
                "id": "CAP4-10-00177",
                "label": "p. 42; rural point 5"
              },
              {
                "id": "CAP4-10-00196",
                "label": "p. 42; rural point 19"
              }
            ]
          },
          {
            "id": "fish-chilling-versus-frozen-storage",
            "title": "Chilled fresh fish versus frozen storage at −25 °C",
            "html": "<p>Fish may be held in two different product states.</p><ul><li><em>Chilling</em> with melting ice keeps fresh fish near 0 °C, because at ordinary pressure melting freshwater ice stays close to that temperature.</li><li><em>Frozen storage</em> keeps an already frozen product well below freezing; a freezer set point of −25 °C is one such specification.</li></ul><p>The approximate storage temperature of fish is −25 °C. Freezing does not stop all deterioration, give unlimited shelf life or remove the need for hygiene, cold-chain control and temperature monitoring.</p>",
            "points": [
              {
                "html": "The approximate storage temperature of fish is \\(-25\\)°C.",
                "sources": [
                  {
                    "id": "CAP4-10-00182",
                    "label": "p. 42; rural point 9"
                  }
                ]
              },
              {
                "html": "Fish is stored frozen at about \\(-25\\)°C mainly to slow down bacterial and enzymatic spoilage.",
                "sources": [
                  {
                    "id": "CAP4-10-00183",
                    "label": "p. 42; rural point 9"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00182",
                "label": "p. 42; rural point 9"
              },
              {
                "id": "CAP4-10-00183",
                "label": "p. 42; rural point 9"
              }
            ]
          },
          {
            "id": "intercultural-operations-and-footbaths",
            "title": "Intercultural crop operations and entrance footbaths for biosecurity",
            "html": "<p><em>Intercultural operations</em> are field tasks done in a standing, growing crop between establishment and harvest; weeding, hoeing and, where suitable, earthing-up are examples. Hoeing between established rows controls weeds without harming the plants.</p><p>An entrance <em>footbath</em> on a poultry farm aims to reduce the spread of disease on footwear, as one part of a biosecurity system. It works only when footwear is cleaned first and the disinfectant is kept at the correct strength with adequate contact. Mud, dilution and a depleted solution undermine it, and it never replaces other access controls.</p>",
            "points": [
              {
                "html": "The favourable time for intercultural operations of a crop is before harvesting, while the crop is growing.",
                "sources": [
                  {
                    "id": "CAP4-10-00178",
                    "label": "p. 42; rural point 6"
                  }
                ]
              },
              {
                "html": "The footbath at the entrance of a poultry farm is placed to prevent the spread of diseases.",
                "sources": [
                  {
                    "id": "CAP4-10-00192",
                    "label": "p. 42; rural point 16"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00178",
                "label": "p. 42; rural point 6"
              },
              {
                "id": "CAP4-10-00192",
                "label": "p. 42; rural point 16"
              }
            ]
          }
        ],
        "cautions": [],
        "gaps": [
          "These nine capsule points form a rural-engineering appendix outside the ten official civil syllabus subchapters; they are not a complete rural or agricultural engineering syllabus."
        ]
      }
    });
})();
