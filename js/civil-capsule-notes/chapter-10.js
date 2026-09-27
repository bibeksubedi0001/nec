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
            "html": "<p>In technical lettering, the stated size means the nominal height of the capital letters. If a title block calls for 5 mm lettering, a narrow capital I and a broad capital M both stand 5 mm tall. Their widths differ because every character has its own shape, and stroke thickness and spacing are separate parameters of the style.</p><p>Width therefore follows the proportions of the lettering standard or style adopted for the drawing. It is not fixed by one universal width ratio for all letters and another for all numerals.</p><p>Inclined lettering is conventionally sloped at 75° to its horizontal baseline. The vertical makes 90° with the baseline, so the strokes lean 15° from the vertical, toward the right. Not every permitted lettering style is inclined.</p>",
            "formulas": [
              {
                "label": "Lean of inclined lettering from the vertical",
                "tex": "90^\\circ - 75^\\circ = 15^\\circ"
              }
            ],
            "moreHtml": "<p>When checking such a figure, name the reference line first. Angles measured from the baseline and from the vertical are complementary, so a 75° slope and a 15° lean describe the same stroke.</p>",
            "points": [
              {
                "html": "With 5 mm lettering, a narrow I and a wide M share a nominal capital height of 5 mm; only their widths differ.",
                "sources": [
                  {
                    "id": "CAP4-10-00001",
                    "label": "p. 37; topic 10 point 1"
                  }
                ]
              },
              {
                "html": "No universal letter or numeral width ratio applies: use the chosen lettering standard's character proportions.",
                "sources": [
                  {
                    "id": "CAP4-10-00002",
                    "label": "p. 37; topic 10 point 2"
                  }
                ]
              },
              {
                "html": "Lettering sloped 75° to its baseline leans 15 degrees toward the right from the vertical.",
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
                "html": "Three halvings from the 1 m<sup>2</sup> A0 sheet leave an ideal A3 area of \\(1/2^3\\) = 0.125 square metre.",
                "sources": [
                  {
                    "id": "CAP4-10-00005",
                    "label": "p. 37; topic 10 point 5"
                  }
                ]
              },
              {
                "html": "A sheet keeps its shape when halved only if its sides are in the ratio of the square root of 2 to 1.",
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
                "html": "Turning a sheet from portrait to landscape leaves its A-series designation unchanged, because orientation does not set the size.",
                "sources": [
                  {
                    "id": "CAP4-10-00004",
                    "label": "p. 37; topic 10 point 4"
                  }
                ]
              },
              {
                "html": "A landscape graphic 180 mm wide and 120 mm high has a width-to-height aspect ratio of 3:2.",
                "sources": [
                  {
                    "id": "CAP4-10-00158",
                    "label": "p. 41; topic 10 point 148"
                  }
                ]
              },
              {
                "html": "A5 is a standard A-series paper size but outside a project's allowed set when that project accepts only A0 to A4.",
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
            "html": "<p>Dimensions quoted for a drawing board describe the board itself. A traditional D1 board listed as 1000 × 700 × 25 mm is read as the length, width and thickness of the support, not as a paper size, a border or a plotting scale. Follow the specification actually issued rather than assume a universal board standard.</p><p>The two fixed set squares provide 45°–45°–90° and 30°–60°–90° edges. Adding, subtracting or supplementing those angles always gives multiples of 15°: 105° = 60° + 45°, 75° = 45° + 30° and 150° = 180° − 30°. An angle of 115° is not a multiple of 15°, so the fixed edges cannot set it directly.</p><p>A <em>clinograph</em> is an adjustable set square used in place of several fixed-angle squares to draw lines at chosen inclinations. It is not a magnetic compass, and it differs from a clinometer, which measures inclination.</p>",
            "points": [
              {
                "html": "A D1 board listed as 1000 × 700 × 25 mm gives the board length, width and thickness, not a sheet size.",
                "sources": [
                  {
                    "id": "CAP4-10-00010",
                    "label": "p. 37; topic 10 point 7"
                  }
                ]
              },
              {
                "html": "Fixed 45° and 30°–60° set squares give only multiples of 15°, so 115 degrees cannot be set directly.",
                "sources": [
                  {
                    "id": "CAP4-10-00015",
                    "label": "p. 37; topic 10 point 15"
                  }
                ]
              },
              {
                "html": "A clinograph is an adjustable set square whose function is drawing lines at adjustable inclinations; it is not a compass.",
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
                "html": "A compass keeps a fixed radius about a known centre, so it suits repeated arcs of one centre and radius.",
                "sources": [
                  {
                    "id": "CAP4-10-00113",
                    "label": "p. 40; topic 10 point 106"
                  }
                ]
              },
              {
                "html": "A French curve fairs a smooth noncircular profile through plotted points in short, overlapping segments.",
                "sources": [
                  {
                    "id": "CAP4-10-00117",
                    "label": "p. 40; topic 10 point 110"
                  }
                ]
              },
              {
                "html": "Guide points for a freehand circle should lie at approximately equal distance from the centre.",
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
            "html": "<p>Graphite pencils follow the H and B grading system. Numbered H grades are harder and give lighter lines, numbered B grades are softer and darker, and HB is the conventional intermediate designation. A label such as HB1 is not a grade in this notation, although a manufacturer could print it as an unrelated product code.</p><p>Grading serves line hierarchy. Visible outlines must stand out, so a drafter may use a softer B pencil to make them dark while keeping construction lines faint with a harder grade. The grade alone does not make a line correct: sharpness, pressure, the paper and the specified drafting method also control width and darkness. B is a common pencil for visible lines, not a mandatory one.</p>",
            "points": [
              {
                "html": "HB1 is not a conventional grade in the H/B system, in which HB is the intermediate designation.",
                "sources": [
                  {
                    "id": "CAP4-10-00017",
                    "label": "p. 38; topic 10 point 17"
                  }
                ]
              },
              {
                "html": "A softer B pencil is used for outlines because visible outlines need stronger contrast than auxiliary lines.",
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
                "html": "The concealed edges of a blind recess in an unsectioned block are drawn with narrow dashed lines.",
                "sources": [
                  {
                    "id": "CAP4-10-00008",
                    "label": "p. 37; topic 10 point 9"
                  }
                ]
              },
              {
                "html": "An edge shown dashed in the front view and continuous in a side view is concealed from the front and visible from the side.",
                "sources": [
                  {
                    "id": "CAP4-10-00105",
                    "label": "p. 40; topic 10 point 97"
                  }
                ]
              },
              {
                "html": "In a full section of a hollow sleeve, only the metal intersected by the cutting plane is hatched; the bore stays clear.",
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
                "html": "A map on which 5 cm represents 250 m, that is 25000 cm, has a representative fraction of 1:5000.",
                "sources": [
                  {
                    "id": "CAP4-10-00012",
                    "label": "p. 37; topic 10 point 12"
                  }
                ]
              },
              {
                "html": "A 600 mm component that must be drawn 60 mm long needs a 1:10 reducing scale.",
                "sources": [
                  {
                    "id": "CAP4-10-00143",
                    "label": "p. 41; topic 10 point 133"
                  }
                ]
              },
              {
                "html": "A curve labelled R25 on a millimetre drawing matches a full circle of diameter 50 mm.",
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
                "html": "When front and top views leave the height–depth profile unclear, a side view showing depth and height resolves it.",
                "sources": [
                  {
                    "id": "CAP4-10-00013",
                    "label": "p. 37; topic 10 point 13"
                  }
                ]
              },
              {
                "html": "In third-angle projection the top view and right-side view sit above and to the right of the front view, respectively.",
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
                "html": "An oblique drawing shows a front face parallel to the picture plane in true shape at the drawing scale, so its circle stays a circle.",
                "sources": [
                  {
                    "id": "CAP4-10-00009",
                    "label": "p. 37; topic 10 point 10"
                  }
                ]
              },
              {
                "html": "A 120 mm axial edge in a true isometric projection is drawn 120 × \\(\\sqrt{2/3}\\) = 97.98 mm long.",
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
                "html": "A plane parallel to the axis but not containing it cuts the two nappes of an extended double cone in a hyperbola.",
                "sources": [
                  {
                    "id": "CAP4-01-00140",
                    "label": "p. 5; topic 1 point 133"
                  }
                ]
              },
              {
                "html": "The axis-parallel plane x = c with c ≠ 0 gives \\(k^2z^2 - y^2 = c^2\\), a nondegenerate hyperbola.",
                "sources": [
                  {
                    "id": "CAP4-10-00126",
                    "label": "p. 40; topic 10 point 118"
                  }
                ]
              },
              {
                "html": "A plane through the axis, c = 0, degenerates into two intersecting generators, \\(y = kz\\) and \\(y = -kz\\).",
                "sources": [
                  {
                    "id": "CAP4-10-00127",
                    "label": "p. 40; topic 10 point 118"
                  }
                ]
              },
              {
                "html": "A plane parallel to the base, strictly between base and vertex, cuts a circle of smaller radius.",
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
            "html": "<p>A locus follows from the rule that governs a moving point, so state the rule before naming the curve. The bob of an ideal planar pendulum stays at a fixed distance from a fixed pivot. It is confined to a circle, and a limited swing traces a circular arc; oscillation by itself creates no spiral.</p><p>An <em>Archimedean spiral</em> needs two uniform motions at once: the point moves outward along a ray at constant speed while the ray turns steadily in one direction. A point sliding along a swinging pendulum does not automatically obey this law, because the pendulum angle keeps reversing.</p><p>A <em>circular helix</em> is traced when a point circles a fixed axis at constant radius while moving along that axis. A constant advance per revolution gives a constant pitch. Being three-dimensional does not by itself make a curve a helix.</p>",
            "formulas": [
              {
                "label": "Archimedean spiral",
                "tex": "r = r_0 + \\dfrac{v}{\\omega}\\,\\theta",
                "where": "It follows from r = r<sub>0</sub> + vt and θ = ωt by eliminating t."
              }
            ],
            "points": [
              {
                "html": "An ideal pendulum bob held at a fixed distance from its pivot traces an arc of a circle during a swing.",
                "sources": [
                  {
                    "id": "CAP4-10-00124",
                    "label": "p. 40; topic 10 point 117"
                  }
                ]
              },
              {
                "html": "Uniform outward motion along a uniformly rotating ray traces an Archimedean spiral.",
                "sources": [
                  {
                    "id": "CAP4-10-00125",
                    "label": "p. 40; topic 10 point 117"
                  }
                ]
              },
              {
                "html": "Circling a fixed axis at constant radius while advancing a constant distance per turn traces a circular helix of constant pitch.",
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
        "cautions": [
          {
            "id": "caution-letter-aspect-ratios",
            "status": "corrected",
            "prompt": "Capsule: letters and numbers have fixed aspect ratios of 1:2 and 1:3",
            "html": "<p>The capsule turns style-dependent proportions into universal rules. Character widths differ within one alphabet, for example between I and M, and between lettering styles. No general engineering-lettering requirement fixes every letter at 1:2 or every numeral at 1:3; use the proportions of the adopted standard. The dependable convention is that lettering size means capital height.</p>",
            "sources": [
              {
                "id": "CAP4-10-00002",
                "label": "p. 37; topic 10 point 2"
              }
            ]
          },
          {
            "id": "caution-a-series-side-ratio-text",
            "status": "corrected",
            "prompt": "Capsule: the width of a standard A-series sheet is 12 times its length",
            "html": "<p>The extracted wording is corrupted mathematics. Keeping the shape under halving requires \\(L/S = \\sqrt{2}\\), so the short side equals the long side divided by \\(\\sqrt{2}\\), about 0.707 of it, not twelve times it. The printed page may have carried a correct formula that was damaged in extraction; the derived ratio is the defensible statement.</p>",
            "sources": [
              {
                "id": "CAP4-10-00006",
                "label": "p. 37; topic 10 point 6"
              }
            ]
          },
          {
            "id": "caution-clinograph-not-compass",
            "status": "corrected",
            "prompt": "Capsule: a clinograph is a type of compass",
            "html": "<p>In engineering drawing a clinograph is an adjustable set square for drawing lines at chosen inclinations, replacing several fixed-angle squares. It neither measures magnetic bearings nor draws circles, and it should not be confused with a clinometer, which measures inclination. The correction confines the term to its drafting meaning.</p>",
            "sources": [
              {
                "id": "CAP4-01-00153",
                "label": "p. 6; topic 1 point 146"
              }
            ]
          },
          {
            "id": "caution-a5-drawing-sheet",
            "status": "review",
            "prompt": "Capsule: A5 is not a standard designated size for engineering drawing sheets",
            "html": "<p>Read this as a statement about a restricted list of drawing sheets, not about paper. A5, nominally 148 × 210 mm, belongs to the standard A-series. Drawing standards and projects commonly prefer A0 to A4, but no mandatory Nepal format clause was inspected, so treat the exclusion as a standard-specific or project-specific restriction to be checked.</p>",
            "sources": [
              {
                "id": "CAP4-10-00166",
                "label": "p. 41; topic 10 point 156"
              }
            ]
          },
          {
            "id": "caution-d1-board-standard",
            "status": "review",
            "prompt": "Capsule: the standard D1 drawing board measures 1000 × 700 × 25 mm",
            "html": "<p>The figures are kept only as a supplied board specification giving length, width and thickness. The applicable standard and its edition were not verified, so do not present the size as a current universal requirement; rely on the specification in the actual procurement document.</p>",
            "sources": [
              {
                "id": "CAP4-10-00010",
                "label": "p. 37; topic 10 point 7"
              }
            ]
          },
          {
            "id": "caution-pencil-b-visible-lines",
            "status": "review",
            "prompt": "Capsule: pencil B is used to draw visible lines",
            "html": "<p>This is a common practice rather than a rule. A softer B grade helps make outlines dark, but sharpness, pressure, paper and the specified drafting method also decide line width and darkness. The grade alone neither makes a line compliant nor rules out another suitable grade.</p>",
            "sources": [
              {
                "id": "CAP4-10-00120",
                "label": "p. 40; topic 10 point 113"
              }
            ]
          },
          {
            "id": "caution-frustum-third-angle",
            "status": "review",
            "prompt": "Capsule: the object frustum of cone is a third-angle orthogonal projection",
            "html": "<p>The extracted sentence is garbled and its diagram was not inspected. A truncated-cone symbol is the conventional mark identifying the projection method, and the object drawn need not be a frustum. What can be stated safely is the third-angle layout: top view above the front view and right-side view to its right.</p>",
            "sources": [
              {
                "id": "CAP4-10-00014",
                "label": "p. 37; topic 10 point 14"
              }
            ]
          },
          {
            "id": "caution-hyperbola-double-cone",
            "status": "review",
            "prompt": "Capsule (p. 5): cutting a right circular cone parallel to its axis gives a hyperbola",
            "html": "<p>Accept this only with its conditions. The plane must be offset from the axis, because a plane through the axis gives a degenerate pair of lines. The statement is complete for an extended double cone, whose two nappes supply both branches; the reviewed version adds the nondegenerate, offset-plane condition explicitly.</p>",
            "sources": [
              {
                "id": "CAP4-01-00140",
                "label": "p. 5; topic 1 point 133"
              }
            ]
          },
          {
            "id": "caution-hyperbola-finite-cone",
            "status": "review",
            "prompt": "Capsule (p. 40): a cone cut parallel to its axis of symmetry forms a hyperbola",
            "html": "<p>The repeated claim needs the same qualification. The plane must be parallel to the axis, offset from it and must actually meet the surface. A finite single cone then shows only the part of the curve lying within it, while a plane through the vertex degenerates into two intersecting generators.</p>",
            "sources": [
              {
                "id": "CAP4-10-00126",
                "label": "p. 40; topic 10 point 118"
              }
            ]
          },
          {
            "id": "caution-pendulum-not-spiral",
            "status": "corrected",
            "prompt": "Capsule: a point moving along an oscillating pendulum traces a spiral",
            "html": "<p>For an ideal pendulum bob held at a fixed distance from a fixed pivot, the locus is a circular arc. The capsule's moving-point wording is ambiguous and is not evidence of a unique spiral; oscillation alone never produces one.</p>",
            "sources": [
              {
                "id": "CAP4-10-00124",
                "label": "p. 40; topic 10 point 117"
              }
            ]
          },
          {
            "id": "caution-spiral-needs-uniform-rotation",
            "status": "review",
            "prompt": "Sliding-point reading of the capsule: the moving point traces an Archimedean spiral",
            "html": "<p>A spiral follows only when an extra motion law is supplied: uniform outward sliding along the rod together with uniform rotation in one direction, giving \\(r = r_0 + (v/\\omega)\\theta\\). A reversing pendulum angle does not meet this law automatically, and the missing drawing is not assumed to provide it.</p>",
            "sources": [
              {
                "id": "CAP4-10-00125",
                "label": "p. 40; topic 10 point 117"
              }
            ]
          },
          {
            "id": "caution-helix-definition",
            "status": "corrected",
            "prompt": "Capsule: the three-dimensional curve is known as a helix",
            "html": "<p>The statement is too broad. A circular helix is one particular space curve, combining constant radius about a fixed axis with axial advance, and its pitch is constant when the advance per revolution is constant. Most three-dimensional curves are not helices.</p>",
            "sources": [
              {
                "id": "CAP4-10-00146",
                "label": "p. 41; topic 10 point 136"
              }
            ]
          }
        ],
        "gaps": [
          "The capsule points cover lettering, sheet sizes, instruments, line types, scales, basic projections and simple loci; dimensioning practice beyond the radius symbol, line diagrams and full sectioning conventions are not tested.",
          "No capsule drawings were inspected, so claims that depended on missing figures, such as the frustum projection statement and the pendulum locus, are taught only in their conditional form.",
          "Standard editions for sheet formats, lettering proportions and drawing-board sizes were not verified; the notes teach principles rather than current clause values."
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
                "html": "The factor \\((1 + i)^n\\) converts a single present amount into its future value after n periods.",
                "sources": [
                  {
                    "id": "CAP4-10-00021",
                    "label": "p. 38; topic 10 point 21"
                  }
                ]
              },
              {
                "html": "At an effective 8%, NRs 100000 today is equivalent to NRs 108000 exactly one year later.",
                "sources": [
                  {
                    "id": "CAP4-10-00025",
                    "label": "p. 38; topic 10 point 25"
                  }
                ]
              },
              {
                "html": "NRs 133100 due in three years, discounted at 10%, has a present value of NRs 100000.",
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
                "html": "NRs 20000 at 10% compound interest for two years grows to 24200, so the interest earned is NRs 4200.",
                "sources": [
                  {
                    "id": "CAP4-10-00031",
                    "label": "p. 38; topic 10 point 31"
                  }
                ]
              },
              {
                "html": "A nominal 12% compounded monthly gives an effective annual rate of \\(1.01^{12} - 1\\), about 12.6825%.",
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
                "html": "Accumulating NRs 100000 in five years at 10% needs equal yearly deposits of about NRs 16380.",
                "sources": [
                  {
                    "id": "CAP4-10-00027",
                    "label": "p. 38; topic 10 point 27"
                  }
                ]
              },
              {
                "html": "Receipts of 40000, 45000, 50000 and 55000 form an arithmetic gradient of NRs 5000 per year.",
                "sources": [
                  {
                    "id": "CAP4-10-00129",
                    "label": "p. 41; topic 10 point 120"
                  }
                ]
              },
              {
                "html": "Maintenance of NRs 10000 rising by 2000 a year costs NRs 16000 in year 4 and NRs 52000 in total over years 1 to 4.",
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
                "html": "Receipts of NRs 55000 at year 1 and NRs 60500 at year 2, discounted at 10%, are worth NRs 100000 today.",
                "sources": [
                  {
                    "id": "CAP4-10-00156",
                    "label": "p. 41; topic 10 point 146"
                  }
                ]
              },
              {
                "html": "A project costing NRs 90000 with receipts worth NRs 100000 has NPV of +NRs 10000, so it passes the stated economic test.",
                "sources": [
                  {
                    "id": "CAP4-10-00157",
                    "label": "p. 41; topic 10 point 147"
                  }
                ]
              },
              {
                "html": "Benefits of NRs 15 million against costs of NRs 12 million give B/C = 1.25 and NPV = +NRs 3 million.",
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
            "html": "<p>The <em>internal rate of return</em> (IRR) is the discount rate at which NPV equals zero. Splitting a multi-year gain evenly between the years would wrongly apply simple interest.</p><p>When a project is independent and its cash flows are conventional, so that it has a single IRR, compare that IRR with the <em>minimum attractive rate of return</em> (MARR). IRR above a risk-appropriate MARR corresponds to positive NPV at the MARR, so the project is acceptable on this criterion. IRR alone is not the right ranking tool for mutually exclusive alternatives.</p><p>Retained profit is judged the same way. Reinvestment is justified when the risk-adjusted expected return on the incremental cash flows meets the relevant opportunity cost; keeping profit in the business does not guarantee a higher return.</p>",
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
                "html": "NRs 100000 invested now returning NRs 121000 after two years has \\((1 + r)^2 = 1.21\\), an IRR of 10% per year.",
                "sources": [
                  {
                    "id": "CAP4-10-00018",
                    "label": "p. 38; topic 10 point 18"
                  }
                ]
              },
              {
                "html": "With conventional flows and a unique IRR of 14% against an 11% MARR, accept on this economic criterion because IRR exceeds MARR.",
                "sources": [
                  {
                    "id": "CAP4-10-00024",
                    "label": "p. 38; topic 10 point 24"
                  }
                ]
              },
              {
                "html": "Reinvesting profit is justified by a risk-adjusted expected return meeting the relevant opportunity-cost criterion.",
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
                "html": "Designs A and B for one site, where building one prevents the other, are mutually exclusive alternatives.",
                "sources": [
                  {
                    "id": "CAP4-10-00121",
                    "label": "p. 40; topic 10 point 114"
                  }
                ]
              },
              {
                "html": "For machines costing NRs 400000 (A) and NRs 550000 (B), use A as defender and assess B minus A cash flows at the MARR.",
                "sources": [
                  {
                    "id": "CAP4-10-00022",
                    "label": "p. 38; topic 10 point 22"
                  }
                ]
              },
              {
                "html": "Signed time-zero flows of −680000 for B and −500000 for A give an initial increment B − A of −NRs 180000.",
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
            "html": "<p><em>Capital budgeting</em> evaluates long-term investment commitments, typically fixed assets such as a treatment plant, through their multi-year incremental cash flows. It is distinct from routine cash administration such as reconciling a cash drawer or matching invoices, and it concerns more than an asset's purchase price.</p><p>A project's cash requirement includes the incremental working capital it creates, such as the extra inventory and receivables of a new plant. Enter that investment when it occurs and its recovery when it is released. Excluding it because it is a current asset overstates value, and including the firm's whole existing inventory is equally wrong.</p><p>Capital decisions are often called difficult to reverse. A specialised, installed plant may sell only at a large loss, so much of the money committed may never be recovered. That is sunk-cost exposure, not a legal or physical impossibility of sale.</p>",
            "points": [
              {
                "html": "Evaluating a treatment plant's multi-year incremental cash flows is capital budgeting, not routine cash administration.",
                "sources": [
                  {
                    "id": "CAP4-10-00153",
                    "label": "p. 41; topic 10 point 142"
                  }
                ]
              },
              {
                "html": "A new plant's project cash flows should include incremental working-capital investment and any eventual recovery.",
                "sources": [
                  {
                    "id": "CAP4-10-00149",
                    "label": "p. 41; topic 10 point 139"
                  }
                ]
              },
              {
                "html": "A capital decision is hard to reverse because much of the committed cost may be unrecoverable on resale.",
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
                "html": "An asset costing NRs 1000000 with NRs 100000 residual over five years is charged NRs 180000 a year, leaving NRs 460000 after three years.",
                "sources": [
                  {
                    "id": "CAP4-10-00159",
                    "label": "p. 41; topic 10 point 149"
                  }
                ]
              },
              {
                "html": "A NPR 100 million dam with a NPR 10 million residual over 90 years is depreciated by NPR 1.0 million a year.",
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
                "html": "Current assets of 900000 less 300000 inventory and 60000 prepayments, against 450000 of liabilities, give a quick ratio of 1.20.",
                "sources": [
                  {
                    "id": "CAP4-10-00020",
                    "label": "p. 38; topic 10 point 20"
                  }
                ]
              },
              {
                "html": "A debenture is a debt instrument whose security depends on its terms, not an ordinary equity share.",
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
        "cautions": [
          {
            "id": "caution-dam-depreciation-range",
            "status": "review",
            "prompt": "Capsule: the annual depreciation of a hydropower dam is about 0.5–1.5%",
            "html": "<p>The range is at best a rough convention. Annual depreciation follows from the assumed accounting life and residual value: NPR 100 million cost, NPR 10 million residual value and a 90-year life give exactly 1% of cost a year. Do not treat the range as a universal deterioration rate or as a current tax rule.</p>",
            "sources": [
              {
                "id": "CAP4-08-00016",
                "label": "p. 30; topic 8 point 16"
              }
            ]
          },
          {
            "id": "caution-debenture-security",
            "status": "corrected",
            "prompt": "Capsule: debentures are unsafe shares that do not require security",
            "html": "<p>A debenture is borrowing by the company, not a share. Secured and unsecured forms both exist, and which applies depends on the instrument and the jurisdiction. Describing it as an unsafe share that never needs security confuses debt with equity.</p>",
            "sources": [
              {
                "id": "CAP4-10-00023",
                "label": "p. 38; topic 10 point 23"
              }
            ]
          },
          {
            "id": "caution-irr-popularity",
            "status": "review",
            "prompt": "Capsule: IRR is mostly adopted in business enterprises",
            "html": "<p>IRR is widely used, but the popularity claim is unsubstantiated and is not a decision rule. What can be relied on is the qualified test: with conventional cash flows and a unique IRR, IRR above MARR matches positive NPV. IRR alone can mislead when ranking mutually exclusive alternatives.</p>",
            "sources": [
              {
                "id": "CAP4-10-00024",
                "label": "p. 38; topic 10 point 24"
              }
            ]
          },
          {
            "id": "caution-incremental-zero-investment",
            "status": "corrected",
            "prompt": "Capsule: for incremental analysis the initial investment must be zero",
            "html": "<p>There is no such requirement. The initial increment is the difference between the two signed time-zero cash flows, for example −680000 − (−500000) = −180000. It is zero only when both alternatives require the same initial outlay.</p>",
            "sources": [
              {
                "id": "CAP4-10-00026",
                "label": "p. 38; topic 10 point 26"
              }
            ]
          },
          {
            "id": "caution-sinking-fund-factor-versus-fund",
            "status": "corrected",
            "prompt": "Capsule: the sinking fund formula is i/((1 + i)ⁿ − 1)",
            "html": "<p>That fraction is the sinking-fund factor, a pure number linking a target amount to the equal periodic deposit, not the fund itself. The deposit is \\(A = F\\,i/[(1 + i)^n - 1]\\); for F = NRs 100000, i = 10% and n = 5 it is about NRs 16380. The reviewed version restores the denominator and keeps the factor distinct from the target fund F.</p>",
            "sources": [
              {
                "id": "CAP4-10-00027",
                "label": "p. 38; topic 10 point 27"
              }
            ]
          },
          {
            "id": "caution-gradient-term-versus-total",
            "status": "corrected",
            "prompt": "Capsule: the total cost of maintenance over n years is a + (n − 1)b",
            "html": "<p>\\(a + (n - 1)b\\) is the amount in year n only, the last term of the arithmetic series. The undiscounted total is \\(n[2a + (n - 1)b]/2\\); with a = 10000, b = 2000 and n = 4, the year-4 cost is 16000 but the four-year total is 52000.</p>",
            "sources": [
              {
                "id": "CAP4-10-00029",
                "label": "p. 38; topic 10 point 29"
              }
            ]
          },
          {
            "id": "caution-compound-interest-rate",
            "status": "corrected",
            "prompt": "Capsule: compound interest adds the principal to the future worth at an increasing interest rate",
            "html": "<p>Compounding does not need a rising rate: interest is earned on previously accumulated interest at a constant rate. The principal is not interest either. NRs 20000 at 10% for two years earns NRs 4200 of interest, while the NRs 24200 balance includes the principal.</p>",
            "sources": [
              {
                "id": "CAP4-10-00031",
                "label": "p. 38; topic 10 point 31"
              }
            ]
          },
          {
            "id": "caution-capital-budgeting-irreversible",
            "status": "review",
            "prompt": "Capsule: capital budgeting is irreversible",
            "html": "<p>Treat irreversibility as a matter of degree. Specialised investments are costly to reverse because much of the outlay cannot be recovered on resale, but sale or abandonment is not generally impossible. The real concern is exposure to sunk cost.</p>",
            "sources": [
              {
                "id": "CAP4-10-00037",
                "label": "p. 38; topic 10 point 37"
              }
            ]
          },
          {
            "id": "caution-working-capital-in-capital-budgeting",
            "status": "corrected",
            "prompt": "Capsule: capital budgeting is not for investment in current assets",
            "html": "<p>Capital projects often need incremental current-asset investment, such as the inventory and receivables of a new plant. That working capital and its eventual recovery belong in the project cash flows; leaving them out because they are current assets overstates the project's value.</p>",
            "sources": [
              {
                "id": "CAP4-10-00149",
                "label": "p. 41; topic 10 point 139"
              }
            ]
          },
          {
            "id": "caution-reinvestment-higher-rate",
            "status": "corrected",
            "prompt": "Capsule: profit earned by a business is managed by reinvesting it at a higher rate for growth",
            "html": "<p>A higher return on reinvested profit is not automatic. Reinvestment is justified only when the risk-adjusted expected return on the incremental cash flows meets the opportunity-cost criterion set by the available alternatives.</p>",
            "sources": [
              {
                "id": "CAP4-10-00150",
                "label": "p. 41; topic 10 point 140"
              }
            ]
          },
          {
            "id": "caution-present-worth-decision-tool",
            "status": "corrected",
            "prompt": "Capsule: the present worth method is not typically considered a project decision-making tool",
            "html": "<p>Present-worth analysis is a standard economic decision method, so the capsule's statement is incorrect. An independent project costing NRs 90000 whose receipts are worth NRs 100000 at the MARR has NPV = +NRs 10000 and passes the test.</p>",
            "sources": [
              {
                "id": "CAP4-10-00157",
                "label": "p. 41; topic 10 point 147"
              }
            ]
          }
        ],
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
                "html": "A finite road package with many similar culverts is a project because it has a defined temporary delivery objective; indefinite payroll is an operation.",
                "sources": [
                  {
                    "id": "CAP4-10-00068",
                    "label": "p. 39; topic 10 point 67"
                  }
                ]
              },
              {
                "html": "A centre whose main service is computing, data and communication is an information and communication technology infrastructure project.",
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
            "html": "<p>Formulation turns an identified need into criteria for comparing solutions. Once a municipality recognises unreliable water supply, it should define service objectives and measurable outcomes before selecting a treatment technology, so that each alternative can be judged against them. Diagnosing the problem and setting objectives interact; calling objective setting the first stage is no reason to skip understanding the need.</p><p>Well-formed objectives are <em>SMART</em>: specific, measurable, achievable, relevant and time-bound. Each quality adds something the others lack, since a measurable target can still be unrealistic, irrelevant or open-ended.</p><p>A vague aim to improve road safety substantially becomes assessable as a target to cut recorded injury crashes at a defined junction by 20% within two years: it gains a place, a quantity and a deadline. Whether 20% is achievable still depends on baseline evidence.</p>",
            "points": [
              {
                "html": "Before choosing a treatment technology, the municipality should define the service objectives and measurable outcomes.",
                "sources": [
                  {
                    "id": "CAP4-10-00038",
                    "label": "p. 38; topic 10 point 38"
                  }
                ]
              },
              {
                "html": "Objectives that are specific, measurable, achievable, relevant and time-bound are summed up by the acronym SMART.",
                "sources": [
                  {
                    "id": "CAP4-10-00163",
                    "label": "p. 41; topic 10 point 154"
                  }
                ]
              },
              {
                "html": "A measurable, time-bound revision is: reduce the defined junction's recorded injury crashes by 20% within two years.",
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
                "html": "The largest site workforce and most construction spending are normally concentrated in execution of the works.",
                "sources": [
                  {
                    "id": "CAP4-10-00053",
                    "label": "p. 39; topic 10 point 52"
                  }
                ]
              },
              {
                "html": "Ready drawings and materials but too few skilled welders expose an execution-phase resource and competence bottleneck.",
                "sources": [
                  {
                    "id": "CAP4-10-00160",
                    "label": "p. 41; topic 10 point 150"
                  }
                ]
              },
              {
                "html": "A bridge on time and within budget that fails its load test shows that time and cost targets alone do not establish acceptable quality.",
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
            "html": "<p>A <em>Gantt bar chart</em> shows activities as horizontal bars on a time scale. Such charts were in use before CPM and PERT were developed in the mid-twentieth century; that is a comparison with the network methods, not a claim that bar charts were the first planning method of any kind. A bare bar chart does not show precedence.</p><p><em>CPM</em> is activity-oriented and classically uses deterministic, single-value durations. That makes it the natural setting for time-cost trade-off analysis, in which planners estimate how extra direct cost could shorten critical activities by crashing. The network drawing itself does not distinguish CPM from PERT; the treatment of durations does.</p><p>A purchased day shortens the project only if the activity is critical and within its crash limit, and every current critical path must be checked.</p>",
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
                "html": "The Gantt bar chart, with time-scaled horizontal bars, predates the development of CPM and PERT.",
                "sources": [
                  {
                    "id": "CAP4-10-00044",
                    "label": "p. 38; topic 10 point 44"
                  }
                ]
              },
              {
                "html": "Fixed durations plus a study of buying time with extra direct cost describe CPM with time-cost trade-off analysis.",
                "sources": [
                  {
                    "id": "CAP4-10-00046",
                    "label": "p. 38; topic 10 point 46"
                  }
                ]
              },
              {
                "html": "An activity costing NRs 60000 at 8 days and NRs 90000 at 5 days has a cost slope of NRs 10000 per day saved.",
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
                "html": "In AOA notation, the arrow is the activity; the nodes are start and finish events.",
                "sources": [
                  {
                    "id": "CAP4-10-00109",
                    "label": "p. 40; topic 10 point 102"
                  }
                ]
              },
              {
                "html": "An event, or milestone, marks the moment when every required predecessor of a node is complete; it takes no time.",
                "sources": [
                  {
                    "id": "CAP4-10-00144",
                    "label": "p. 41; topic 10 point 134"
                  }
                ]
              },
              {
                "html": "A dummy arrow has zero duration and zero resource demand; it only preserves logic.",
                "sources": [
                  {
                    "id": "CAP4-10-00041",
                    "label": "p. 38; topic 10 point 41"
                  }
                ]
              },
              {
                "html": "When C follows A and B but D follows A only, a dummy is used to preserve the distinct precedence logic without adding physical work.",
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
                "html": "Predecessors finishing on days 6 and 9 and a 4-day successor give ES on day 9 and EF on day 13.",
                "sources": [
                  {
                    "id": "CAP4-10-00048",
                    "label": "p. 38; topic 10 point 47"
                  }
                ]
              },
              {
                "html": "With path durations of 9, 12 and 10 days, the 12-day path controls the earliest completion.",
                "sources": [
                  {
                    "id": "CAP4-10-00040",
                    "label": "p. 38; topic 10 point 40"
                  }
                ]
              },
              {
                "html": "Paths A-B-D of 12 days and A-C-D of 14 days give an earliest project duration of 14 days.",
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
                "html": "Successors with latest starts on days 18 and 15 give a latest finish of day 15, the minimum.",
                "sources": [
                  {
                    "id": "CAP4-09-00060",
                    "label": "p. 35; topic 9 point 59"
                  }
                ]
              },
              {
                "html": "An activity with LS on day 9 and a 4-day duration has its latest finish on day 13.",
                "sources": [
                  {
                    "id": "CAP4-10-00165",
                    "label": "p. 41; topic 10 point 155"
                  }
                ]
              },
              {
                "html": "Event J with candidates 15 − 4 = 11 and 18 − 5 = 13 has a latest allowable time of day 11.",
                "sources": [
                  {
                    "id": "CAP4-10-00103",
                    "label": "p. 40; topic 10 point 95"
                  }
                ]
              },
              {
                "html": "Latest starts and finishes come from a backward pass from the finish, using successor constraints.",
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
                "html": "With ES on day 4, a 5-day duration and LF on day 12, the total float is 12 − 9 = 3 days.",
                "sources": [
                  {
                    "id": "CAP4-10-00042",
                    "label": "p. 38; topic 10 point 42"
                  }
                ]
              },
              {
                "html": "An activity with EF on day 7 whose earliest successor starts on day 10 has 3 days of free float.",
                "sources": [
                  {
                    "id": "CAP4-10-00036",
                    "label": "p. 38; topic 10 point 36"
                  }
                ]
              },
              {
                "html": "EF = LF = 8 with a successor at ES = 8 shows both floats can be zero, so TF need not be strictly greater than FF.",
                "sources": [
                  {
                    "id": "CAP4-10-00116",
                    "label": "p. 40; topic 10 point 109"
                  }
                ]
              },
              {
                "html": "An event with earliest time 8 days and latest time 11 days has an event slack of 3 days.",
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
                "html": "Classical PERT models an individual activity by a bounded beta-type approximation using three estimates.",
                "sources": [
                  {
                    "id": "CAP4-10-00039",
                    "label": "p. 38; topic 10 point 39"
                  }
                ]
              },
              {
                "html": "Estimates of 2, 5 and 14 days give a PERT expected duration of 36/6 = 6 days.",
                "sources": [
                  {
                    "id": "CAP4-10-00050",
                    "label": "p. 39; topic 10 point 49"
                  }
                ]
              },
              {
                "html": "An activity-duration variance of 16 days<sup>2</sup> gives a standard deviation of 4 days.",
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
                "html": "Two parallel tasks sharing the only crane, with no spare available, call for resource levelling even if completion moves.",
                "sources": [
                  {
                    "id": "CAP4-10-00035",
                    "label": "p. 38; topic 10 point 35"
                  }
                ]
              },
              {
                "html": "Shifting a noncritical task within its float to cut a labour peak, with the finish date held, is resource smoothing.",
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
                "html": "Work with a baseline value of NRs 400000 that actually cost NRs 460000 has ACWP of NRs 460000, the actual cost incurred.",
                "sources": [
                  {
                    "id": "CAP4-10-00034",
                    "label": "p. 38; topic 10 point 34"
                  }
                ]
              },
              {
                "html": "BCWP of NRs 600000 against BCWS of NRs 800000 gives SPI = 0.75, indicating less earned work than planned.",
                "sources": [
                  {
                    "id": "CAP4-10-00032",
                    "label": "p. 38; topic 10 point 32"
                  }
                ]
              },
              {
                "html": "Job X, with 6 days to due and 8 days of work, is more urgent than Y, with a critical ratio of 0.75 against 2.",
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
        "cautions": [
          {
            "id": "caution-repetitiveness-and-projects",
            "status": "review",
            "prompt": "Capsule: repetitiveness is not a characteristic of a project",
            "html": "<p>This holds for the project as a whole, which is temporary and delivers a defined result, but not for its activities. A road package with many similar culverts remains a project; repetition at activity level does not turn it into an operation.</p>",
            "sources": [
              {
                "id": "CAP4-10-00068",
                "label": "p. 39; topic 10 point 67"
              }
            ]
          },
          {
            "id": "caution-objective-setting-first-stage",
            "status": "review",
            "prompt": "Capsule: setting objectives is the first stage in project formulation",
            "html": "<p>Objectives must precede the comparison of solutions, but they rest on a diagnosed need. Problem identification and objective setting are iterative, so the first-stage label should not be used to skip understanding the actual problem.</p>",
            "sources": [
              {
                "id": "CAP4-10-00038",
                "label": "p. 38; topic 10 point 38"
              }
            ]
          },
          {
            "id": "caution-ictc-acronym",
            "status": "review",
            "prompt": "Capsule: an ICTC building is typically considered an information and communication technology project",
            "html": "<p>The class depends on the functional scope, not on the acronym. When the facility delivers computing, data and communication services, ICT infrastructure is the right class. No universal meaning of ICTC is claimed, and an unexplained acronym should not decide the category.</p>",
            "sources": [
              {
                "id": "CAP4-10-00154",
                "label": "p. 41; topic 10 point 143"
              }
            ]
          },
          {
            "id": "caution-bar-chart-invented-first",
            "status": "review",
            "prompt": "Capsule: the bar chart method of project planning was invented first",
            "html": "<p>Supported only in the narrow sense that Gantt-style bar charts predate CPM and PERT. The universal claim that bar charts were the first planning method of any kind is unsupported and should not be memorised.</p>",
            "sources": [
              {
                "id": "CAP4-10-00044",
                "label": "p. 38; topic 10 point 44"
              }
            ]
          },
          {
            "id": "caution-pert-divisor",
            "status": "corrected",
            "prompt": "Capsule, as extracted: Te = T0 + Tp + 4Tm",
            "html": "<p>The extracted point lost its divisor. The expected PERT time is \\(t_e = (t_o + 4t_m + t_p)/6\\), and the complete page text places 6 beneath the numerator. With 2, 5 and 14 days the numerator is 36 but the expected time is 6 days.</p>",
            "sources": [
              {
                "id": "CAP4-10-00050",
                "label": "p. 39; topic 10 point 49"
              }
            ]
          },
          {
            "id": "caution-backward-pass-only",
            "status": "review",
            "prompt": "Capsule: calculating LS and LF involves only a backward pass",
            "html": "<p>LS and LF are indeed produced by the backward pass, with LS = LF − duration and the minimum rule. That pass still needs a finish boundary, commonly the earliest completion from the forward pass, so the word only must not be read as making the forward pass unnecessary.</p>",
            "sources": [
              {
                "id": "CAP4-10-00141",
                "label": "p. 41; topic 10 point 131"
              }
            ]
          },
          {
            "id": "caution-free-float-definition",
            "status": "review",
            "prompt": "Capsule: free float is the delay that does not affect other tasks in the path",
            "html": "<p>Make the definition precise: free float is the delay that leaves every successor able to start at its earliest start, FF = earliest successor ES − EF. A delay within total float but beyond free float leaves the project finish unchanged while still pushing successors later.</p>",
            "sources": [
              {
                "id": "CAP4-10-00036",
                "label": "p. 38; topic 10 point 36"
              }
            ]
          },
          {
            "id": "caution-tf-strictly-greater",
            "status": "corrected",
            "prompt": "Capsule: in CPM, total float is always strictly greater than free float",
            "html": "<p>Under ordinary zero-lag assumptions with the finish set at the earliest completion, TF ≥ FF, not strictly greater. Critical activities commonly have TF = FF = 0. Deadline constraints that produce negative float need separate treatment.</p>",
            "sources": [
              {
                "id": "CAP4-10-00116",
                "label": "p. 40; topic 10 point 109"
              }
            ]
          },
          {
            "id": "caution-slack-definition",
            "status": "corrected",
            "prompt": "Capsule: slack is the time between the latest finish of a previous activity and the earliest start of a new activity",
            "html": "<p>Event slack compares the latest and earliest times of the same event, for example 11 − 8 = 3 days. Subtracting some earlier activity's latest finish from a later activity's earliest start does not, in general, define slack.</p>",
            "sources": [
              {
                "id": "CAP4-10-00155",
                "label": "p. 41; topic 10 point 145"
              }
            ]
          }
        ],
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
            "html": "<p>In finance, one common measure of risk is the variability of returns around their expected value, measured by the standard deviation. Two investments with the same expected return can differ sharply in spread. Variability is one financial risk measure, not a complete definition of project risk, which also involves hazards and uncertain events.</p><p>Detailed risk analysis is most useful during planning, while alternatives such as two possible intake sites remain open and controls can still shape the design. It is not a one-time formality: risks change through design, construction and operation, so the assessment is monitored and updated as design and evidence develop.</p>",
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
                "html": "Returns of 4% or 16% are riskier than 8% or 12% at the same mean: the second's standard deviations are 6 versus 2 percentage points.",
                "sources": [
                  {
                    "id": "CAP4-06-00078",
                    "label": "p. 25; topic 6 point 77"
                  }
                ]
              },
              {
                "html": "Detailed risk analysis should first shape the intake-site choice during planning, with updates as design and evidence change.",
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
                "html": "Weighing control options such as source substitution, treatment and exposure limits is risk management through evaluation of control alternatives.",
                "sources": [
                  {
                    "id": "CAP4-06-00085",
                    "label": "p. 25; topic 6 point 84"
                  }
                ]
              },
              {
                "html": "A mitigation needing design changes and director funding calls for assigned action owners and resources, with risk-manager coordination and follow-up.",
                "sources": [
                  {
                    "id": "CAP4-06-00132",
                    "label": "p. 26; topic 6 point 136"
                  }
                ]
              },
              {
                "html": "Analysing defects, trialling a new procedure, measuring the results and standardising only on improvement is continuous improvement.",
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
                "html": "A bank examining demand, construction risk, operating cash flow and debt-service capacity before lending is carrying out project appraisal.",
                "sources": [
                  {
                    "id": "CAP4-10-00056",
                    "label": "p. 39; topic 10 point 55"
                  }
                ]
              },
              {
                "html": "The senior figure who secures funding, champions the business case and settles escalated decisions is the project sponsor.",
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
            "html": "<p>A <em>contract</em> is an agreement that creates legally enforceable obligations under the applicable law. Enforceability, including the legal requirements for forming a contract, separates it from an informal understanding; the size of the paper, the title of the document and the type of work do not. Whether writing is required depends on the governing law.</p><p>Hence all contracts are agreements, but not all agreements are contracts. Friends who agree socially to meet for lunch ordinarily have no intention of creating legal obligations, although their friendship would not prevent a separate commercial contract.</p><p>Disputes need not end in court. Depending on the governing law and a valid contract, negotiation, adjudication or arbitration can settle the merits. Where a contract provides negotiation followed by binding arbitration, courts may keep specified supervisory or enforcement roles, but litigation is not the inevitable final stage.</p>",
            "points": [
              {
                "html": "An arrangement is a contract rather than an informal understanding when its agreement creates legally enforceable obligations.",
                "sources": [
                  {
                    "id": "CAP4-10-00058",
                    "label": "p. 39; topic 10 point 57"
                  }
                ]
              },
              {
                "html": "A social lunch plan is not a contract because a contract requires an agreement that is legally enforceable.",
                "sources": [
                  {
                    "id": "CAP4-10-00134",
                    "label": "p. 41; topic 10 point 124"
                  }
                ]
              },
              {
                "html": "With negotiation followed by binding arbitration, arbitration can resolve the merits, with only limited court involvement.",
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
                "html": "A main contractor engaging a specialist for the electrical portion while keeping its own contract is subcontracting.",
                "sources": [
                  {
                    "id": "CAP4-10-00052",
                    "label": "p. 39; topic 10 point 51"
                  }
                ]
              },
              {
                "html": "An advance paid before substantial work so the contractor can mobilise, with security and recovery terms, is a mobilisation advance.",
                "sources": [
                  {
                    "id": "CAP4-10-00167",
                    "label": "p. 42; topic 10 point 157"
                  }
                ]
              },
              {
                "html": "Delay damages of 0.05% a day on NRs 40 million over 20 assessable days total NRs 400000, below the 10% cap.",
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
                "html": "In a delivery package, EPC denotes engineering, procurement and construction by one party.",
                "sources": [
                  {
                    "id": "CAP4-10-00054",
                    "label": "p. 39; topic 10 point 53"
                  }
                ]
              },
              {
                "html": "BOOT differs from a mere construction assignment because the concessionaire builds, owns, operates and later transfers the facility.",
                "sources": [
                  {
                    "id": "CAP4-10-00055",
                    "label": "p. 39; topic 10 point 54"
                  }
                ]
              },
              {
                "html": "The core contractual partnership of a PPP is between a public authority and a private project entity.",
                "sources": [
                  {
                    "id": "CAP4-10-00147",
                    "label": "p. 41; topic 10 point 137"
                  }
                ]
              },
              {
                "html": "The management authority of a semi-government body is defined by its constituting law, ownership and governance documents.",
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
                "html": "Evaluating technical merit together with price under disclosed weights is Quality- and Cost-Based Selection.",
                "sources": [
                  {
                    "id": "CAP4-10-00059",
                    "label": "p. 39; topic 10 point 58"
                  }
                ]
              },
              {
                "html": "RFP means Request for Proposal: it invites shortlisted consultants to submit the proposals the procedure requires.",
                "sources": [
                  {
                    "id": "CAP4-10-00112",
                    "label": "p. 40; topic 10 point 105"
                  }
                ]
              },
              {
                "html": "Screening firms against published capability criteria before priced bids are invited is prequalification.",
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
            "html": "<p>The procurement method for Nepal public works must rest on its legal authority: the Public Procurement Act 2063 and Public Procurement Rules 2064, with their applicable amendments, together with the procurement conditions and relevant date. An estimate of NRs 18 million does not justify sealed quotations merely because a revision note mentions 20 million, and a PPMO bidding template for works above NRs 20 million does not set a sealed-quotation ceiling.</p><p><em>Bid validity</em> is the period for which a bidder's offer stays binding under the bidding conditions, counted from the stated submission deadline; an issued Bid Data Sheet may specify 90 days. It is separate from the construction period, the defects liability period and the validity of the bid security.</p><p>Thresholds also demand careful units: one crore is ten million. Whether a band applies must still be checked in the operative rules and the issued Bid Data Sheet.</p>",
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
                "html": "The procurement method must rest on the applicable Act, amended Rules and procurement conditions, not on an estimate near a quoted figure.",
                "sources": [
                  {
                    "id": "CAP4-10-00045",
                    "label": "p. 38; topic 10 point 45"
                  }
                ]
              },
              {
                "html": "A 90-day bid validity governs how long the offer must remain binding under the bidding conditions.",
                "sources": [
                  {
                    "id": "CAP4-10-00118",
                    "label": "p. 40; topic 10 point 111"
                  }
                ]
              },
              {
                "html": "An estimate of 9 crore is NRs 90 million and falls within a stated band of up to NRs 100 million.",
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
            "html": "<p>A price adjustment needs more than a long contract period. Before certifying an adjustment on an 18-month contract with a valid clause based on published input indices, check the applicable clause, the eligible work, the base date and the indices with their weights. Duration may matter under an applicable provision, but it neither calculates nor authorises a payment by itself, and neither a contractor's reported loss nor the latest price of one item is the basis.</p><p>Blacklisting is a statutory power. Under section 63(1) of the Public Procurement Act 2063, in the Law Commission's consolidated text including the Second Amendment 2083, the Public Procurement Monitoring Office (PPMO) holds the power to blacklist on the statutory grounds, and section 63(5) leaves further procedure to be prescribed. A procuring entity's recommendation is not itself the decision.</p>",
            "points": [
              {
                "html": "Before certifying a price adjustment, check the applicable clause, eligible work, base date and indices with their weights.",
                "sources": [
                  {
                    "id": "CAP4-10-00060",
                    "label": "p. 39; topic 10 point 59"
                  }
                ]
              },
              {
                "html": "Under section 63 of the Public Procurement Act 2063, the blacklisting power belongs to the Public Procurement Monitoring Office.",
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
        "cautions": [
          {
            "id": "caution-return-variability-definition",
            "status": "review",
            "prompt": "Capsule: variability in the rate of return is known as risk",
            "html": "<p>Acceptable as a financial definition, since the standard deviation of returns is one risk measure. It is not a complete definition of project risk, which also involves hazards and uncertain events that return variability does not capture.</p>",
            "sources": [
              {
                "id": "CAP4-06-00078",
                "label": "p. 25; topic 6 point 77"
              }
            ]
          },
          {
            "id": "caution-risk-manager-sector",
            "status": "review",
            "prompt": "Capsule: the risk manager sector is responsible for risk mitigation",
            "html": "<p>A risk manager coordinates and follows up, but mitigation is delivered by named action owners with suitable authority, resources and deadlines, such as designers, managers, contractors or operators. The vague risk-manager sector is not a complete accountability model.</p>",
            "sources": [
              {
                "id": "CAP4-06-00132",
                "label": "p. 26; topic 6 point 136"
              }
            ]
          },
          {
            "id": "caution-sealed-quotation-ceiling",
            "status": "review",
            "prompt": "Capsule: sealed quotations are used for projects up to 20 million",
            "html": "<p>The current sealed-quotation ceiling was not verified, and a scale confusion is probable, so the figure must not be endorsed. The PPMO works bidding template for above NRs 20 million is a different instrument. Determine the method from the Public Procurement Act 2063, Rules 2064 and their applicable amendments, and check the exact ceiling in the operative text.</p>",
            "sources": [
              {
                "id": "CAP4-10-00045",
                "label": "p. 38; topic 10 point 45"
              }
            ]
          },
          {
            "id": "caution-boot-fast-track",
            "status": "review",
            "prompt": "Capsule: a BOOT contract was used when the Government handed the fast-track project to Nepal Army",
            "html": "<p>Handing construction to a government organisation does not by itself show build-own-operate-transfer features. The project's actual contract form was not verified, so this claim should not be used as an example of BOOT.</p>",
            "sources": [
              {
                "id": "CAP4-10-00055",
                "label": "p. 39; topic 10 point 54"
              }
            ]
          },
          {
            "id": "caution-qcbs-name",
            "status": "corrected",
            "prompt": "Capsule: quantity and cost-based selection is not used for selecting a consultant",
            "html": "<p>The genuine method is Quality- and Cost-Based Selection, and it is used for selecting consultants. The capsule's malformed word quantity should not discredit QCBS; its weights come from the disclosed evaluation rules, and none is asserted here as statutory.</p>",
            "sources": [
              {
                "id": "CAP4-10-00059",
                "label": "p. 39; topic 10 point 58"
              }
            ]
          },
          {
            "id": "caution-price-adjustment-twelve-months",
            "status": "review",
            "prompt": "Capsule: price adjustment is provided for projects lasting more than 12 months",
            "html": "<p>The blanket duration entitlement is not certified as current law. Entitlement, formula, index weights, eligible work and dates must come from the governing law and the contract, and the exact amended price-adjustment provision needs verification.</p>",
            "sources": [
              {
                "id": "CAP4-10-00060",
                "label": "p. 39; topic 10 point 59"
              }
            ]
          },
          {
            "id": "caution-litigation-ultimate",
            "status": "corrected",
            "prompt": "Capsule: the ultimate method of resolving any dispute with a contractor is litigation",
            "html": "<p>Litigation is not an inevitable final stage. A valid contract and the governing law may provide negotiation, adjudication or binding arbitration that resolves the merits, with courts keeping only specified supervisory or enforcement roles.</p>",
            "sources": [
              {
                "id": "CAP4-10-00107",
                "label": "p. 40; topic 10 point 99"
              }
            ]
          },
          {
            "id": "caution-liquidated-damages-rates",
            "status": "review",
            "prompt": "Capsule: liquidated damage is the penalty for delaying the work beyond the agreed date",
            "html": "<p>Liquidated damages are an agreed contractual remedy for delay, subject to law, rather than an arbitrary penalty independent of entitlement. The 0.05% per day and 10% cap are stated contract assumptions matching the identified PPMO September 2026 NCB works (1S2E) standard bidding document example, GCC and SCC 55.1; they are not universal law.</p>",
            "sources": [
              {
                "id": "CAP4-10-00108",
                "label": "p. 40; topic 10 point 100; topic 10 point 101"
              }
            ]
          },
          {
            "id": "caution-bid-validity-band",
            "status": "review",
            "prompt": "Capsule: the bid validity period for estimates up to 100 million is 90 days",
            "html": "<p>The NRs 100 million band was not verified against the current amended procurement rules. A 90-day period can be stated safely only as a condition written in an issued Bid Data Sheet, and it governs how long the offer binds, not completion time or defects liability.</p>",
            "sources": [
              {
                "id": "CAP4-10-00118",
                "label": "p. 40; topic 10 point 111"
              }
            ]
          },
          {
            "id": "caution-nine-crore-band",
            "status": "review",
            "prompt": "Capsule: the bid validity period for an estimate of 9 crores is 90 days",
            "html": "<p>The unit conversion is sound, since 9 crore is NRs 90 million and falls inside a band of up to 100 million. The conversion does not validate the band itself, which remains an unverified source threshold; follow the operative rules and the issued Bid Data Sheet.</p>",
            "sources": [
              {
                "id": "CAP4-10-00137",
                "label": "p. 41; topic 10 point 127"
              }
            ]
          },
          {
            "id": "caution-ppp-political-parties",
            "status": "corrected",
            "prompt": "Capsule: political parties do not participate in PPP projects",
            "html": "<p>A PPP is defined by its contract between a public authority and a private entity, not by excluding political groups. Parties may still take part in public debate as stakeholders, so the capsule's blanket prohibition is not a defining feature.</p>",
            "sources": [
              {
                "id": "CAP4-10-00147",
                "label": "p. 41; topic 10 point 137"
              }
            ]
          }
        ],
        "gaps": [
          "Information systems for project management, the first item of this syllabus topic, are not tested by these capsule questions.",
          "Current procurement thresholds, bid-validity bands, sealed-quotation ceilings and price-adjustment eligibility were not verified; the notes teach how to locate the governing provision rather than the values.",
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
                "html": "Displacement, divided access and changed livelihoods, and their spread among groups, are examined by social impact assessment.",
                "sources": [
                  {
                    "id": "CAP4-10-00064",
                    "label": "p. 39; topic 10 point 63"
                  }
                ]
              },
              {
                "html": "Asking first whether a chemical can harm and then how its effect varies with dose is hazard identification followed by dose-response assessment.",
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
                "html": "The moral basis of weighing public safety, fair access and honest reporting is the subject of ethics.",
                "sources": [
                  {
                    "id": "CAP4-10-00128",
                    "label": "p. 40; topic 10 point 119"
                  }
                ]
              },
              {
                "html": "Seeking promotion by improving competence is compatible with professionalism when public-safety and ethical duties remain paramount.",
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
            "html": "<p>Professional independence means assessing work honestly on its merits. An undisclosed payment from a supplier for approving nonconforming materials is an improper inducement: the engineer must reject it and follow the proper reporting process. The capsule's principle is to uphold the honour and dignity of the profession with zero tolerance for bribery, fraud and corruption. NEC Rule 18's conduct principles do not turn such a payment into legitimate remuneration because it is privately agreed or offset against an invoice.</p><p><em>Impartiality</em> means applying the disclosed technical and ethical criteria equally. An engineer's own politics, or an applicant's influence, never justifies biased certification, procurement assessment or treatment of clients.</p><p>Under a rule of <em>vicarious liability</em>, an employer bears responsibility for negligence that an employee commits in the course of employment. It does not extend to every private act outside that context.</p>",
            "points": [
              {
                "html": "Offered an undisclosed payment to pass nonconforming materials, the engineer must reject the inducement and follow the proper reporting process.",
                "sources": [
                  {
                    "id": "CAP4-10-00077",
                    "label": "p. 39; topic 10 point 72"
                  }
                ]
              },
              {
                "html": "Equivalent proposals from rival political supporters are judged by the disclosed technical and ethical criteria applied impartially.",
                "sources": [
                  {
                    "id": "CAP4-10-00119",
                    "label": "p. 40; topic 10 point 112"
                  }
                ]
              },
              {
                "html": "Employer responsibility for an employee's negligence in the course of employment is vicarious liability.",
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
                "html": "A workplace accident book should maintain a dated factual record supporting investigation and reporting.",
                "sources": [
                  {
                    "id": "CAP4-09-00113",
                    "label": "p. 36; topic 9 point 109"
                  }
                ]
              },
              {
                "html": "Against falling objects and unguarded openings, use suitable PPE alongside elimination, guarding and other effective controls.",
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
                "html": "Copyright in a technical manual protects the original expression, subject to the law's limits and exceptions, not the method.",
                "sources": [
                  {
                    "id": "CAP4-10-00104",
                    "label": "p. 40; topic 10 point 96"
                  }
                ]
              },
              {
                "html": "To respect the idea-expression line, apply the technique and write an independently worded explanation.",
                "sources": [
                  {
                    "id": "CAP4-10-00110",
                    "label": "p. 40; topic 10 point 103"
                  }
                ]
              },
              {
                "html": "A first section 25 violation carries a NRs 10000 to 100000 fine, up to 6 months' imprisonment, or both.",
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
                "html": "The 2074 BS labour-law framework comes from the Labour Act, 2074; the title year is the enactment, not the last amendment.",
                "sources": [
                  {
                    "id": "CAP4-10-00161",
                    "label": "p. 41; topic 10 point 152"
                  }
                ]
              },
              {
                "html": "Section 28 limits ordinary working time to 8 hours daily and 48 hours weekly, with overtime regulated separately.",
                "sources": [
                  {
                    "id": "CAP4-10-00073",
                    "label": "p. 39; topic 10 point 70"
                  }
                ]
              },
              {
                "html": "Five continuous hours earn half an hour counted as working time, with rotation for continuous operations.",
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
            "html": "<p>An <em>ordinance</em> is a temporary legal instrument, and Article 114(2) of the Constitution limits how long it can operate.</p><ul><li>Clauses (a) and (b) deal with an ordinance ending earlier, through non-acceptance or repeal by the President.</li><li>If neither has occurred, clause (c) makes the ordinance inactive sixty days after the prescribed meeting date of both Houses.</li><li>If the Houses first meet on different dates, the explanation counts from the meeting of whichever House meets later; the earlier meeting, the Cabinet's recommendation and the promulgation are not the trigger.</li></ul><p>The sixty-day rule limits the life of an ordinance. It is not a general deadline within which every bill forwarded by the Council of Ministers must be passed. This reading follows the Law Commission consolidation through the Second Amendment 2077.</p>",
            "points": [
              {
                "html": "Under Article 114(2)(c), an ordinance not ended earlier becomes inactive sixty days after the prescribed meeting date of both Houses.",
                "sources": [
                  {
                    "id": "CAP4-10-00130",
                    "label": "p. 41; topic 10 point 121"
                  }
                ]
              },
              {
                "html": "If the Houses first meet on different dates, the sixty-day clock starts from the date on which the later House meets.",
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
                "html": "Because one shareholder may incorporate it, a private company need not begin with two shareholders.",
                "sources": [
                  {
                    "id": "CAP4-10-00151",
                    "label": "p. 41; topic 10 point 141"
                  }
                ]
              },
              {
                "html": "Section 9(1) of the Companies Act 2063, as amended in 2081, sets a general cap of 101 counted shareholders.",
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
            "html": "<p>The <em>Nepal Engineers' Association</em> (NEA) describes itself as a professional association of Nepalese engineers registered under the Social Service Act, supporting professional development and advocacy. The <em>Nepal Engineering Council</em> (NEC) is the statutory engineering regulator, established with the functions set out in sections 3–4 and 9 of its Act.</p><p>The two roles are not interchangeable. However NEA names or counts its membership categories, an association grade is not NEC registration and gives no authority to practise.</p><p>NEA's official introduction also lists discipline-specific partner societies among national professional bodies, including the electrical engineers' society SEEN. SEEN is therefore an electrical-engineering professional society; like NEA itself, it has none of NEC's registration powers.</p>",
            "points": [
              {
                "html": "NEA represents the profession; NEC exercises statutory regulation of engineering practice.",
                "sources": [
                  {
                    "id": "CAP4-10-00070",
                    "label": "p. 39; topic 10 point 69"
                  }
                ]
              },
              {
                "html": "An NEA grade without NEC registration confers no right to practise: association membership does not substitute for statutory registration.",
                "sources": [
                  {
                    "id": "CAP4-10-00072",
                    "label": "p. 39; topic 10 point 69"
                  }
                ]
              },
              {
                "html": "SEEN, listed by NEA among partner societies, is an electrical-engineering professional society without NEC powers.",
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
            "html": "<p>NEA's official introduction page, as retrieved on 25 September 2026, gives its elected Central Executive Committee a two-year term. This is a dated statement about NEA, not about the tenure of NEC members, and a later amendment of NEA's constitution could change it.</p><p>A <em>quorum</em> is the minimum attendance that a body's own rules require for valid business. Where a rule requires more than half of the membership, the quorum is the smallest whole number above half. Quorum depends on the body, the type of meeting and the denominator, so a loose phrase such as more than 50 and above cannot fix it.</p>",
            "formulas": [
              {
                "label": "More-than-half quorum for N members",
                "tex": "q = \\left\\lfloor \\dfrac{N}{2} \\right\\rfloor + 1"
              }
            ],
            "example": {
              "title": "Worked example: a 25-member committee",
              "html": "<p>Half of 25 is 12.5, so \\(q = 12 + 1 = 13\\) members must attend; 12 falls short. This is arithmetic for a stated rule, not an actual NEA quorum.</p>"
            },
            "points": [
              {
                "html": "NEA's introduction page, retrieved 25 September 2026, gives its Central Executive Committee a term of two years.",
                "sources": [
                  {
                    "id": "CAP4-10-00071",
                    "label": "p. 39; topic 10 point 69"
                  }
                ]
              },
              {
                "html": "A more-than-half quorum for a 25-member committee needs at least 13 members, since half is 12.5.",
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
        "cautions": [
          {
            "id": "caution-accident-book-legal-status",
            "status": "review",
            "prompt": "Capsule: the accident book is a legal document recording workplace accidents",
            "html": "<p>The record is valuable evidence and supports investigation and reporting, but no universal legal status or current Nepal reporting deadline was verified. Keep entries factual and dated, and do not treat an entry as automatically settling liability.</p>",
            "sources": [
              {
                "id": "CAP4-09-00113",
                "label": "p. 36; topic 9 point 109"
              }
            ]
          },
          {
            "id": "caution-seen-professional-body",
            "status": "corrected",
            "prompt": "Capsule: SEEN is not a professional engineering body",
            "html": "<p>NEA's official introduction, retrieved on 25 September 2026, lists the electrical engineers' society SEEN among discipline-specific professional societies. The capsule's exclusion, and its malformed expansion of the name, are therefore unreliable. Being a professional society still gives SEEN no NEC registration powers.</p>",
            "sources": [
              {
                "id": "CAP4-10-00069",
                "label": "p. 39; topic 10 point 68"
              }
            ]
          },
          {
            "id": "caution-nea-executive-term",
            "status": "review",
            "prompt": "Capsule: the tenure of an NEA executive member is 2 years",
            "html": "<p>The two-year term is supported by NEA's introduction page for its Central Executive Committee, as retrieved on 25 September 2026. A webpage is not a guarantee against a later constitutional amendment, so date the fact whenever it is quoted.</p>",
            "sources": [
              {
                "id": "CAP4-10-00071",
                "label": "p. 39; topic 10 point 69"
              }
            ]
          },
          {
            "id": "caution-nea-membership-categories",
            "status": "review",
            "prompt": "Capsule: there are 3 categories of NEA membership",
            "html": "<p>NEA's official introduction and FAQ did not establish the claimed three-category list, so the count is unresolved and is not taught as fact. The operative NEA constitution should be checked for category names. Whatever the count, association membership does not substitute for NEC registration.</p>",
            "sources": [
              {
                "id": "CAP4-10-00072",
                "label": "p. 39; topic 10 point 69"
              }
            ]
          },
          {
            "id": "caution-eight-hour-maximum",
            "status": "review",
            "prompt": "Capsule: the maximum working hour in a day is 8 hours",
            "html": "<p>Labour Act 2074 section 28 limits ordinary working time to 8 hours a day and 48 hours a week, while overtime is regulated separately. Calling 8 hours an absolute maximum including lawful overtime is misleading. Later amendments and exceptions were not independently consolidated for this point.</p>",
            "sources": [
              {
                "id": "CAP4-10-00073",
                "label": "p. 39; topic 10 point 70"
              }
            ]
          },
          {
            "id": "caution-individual-growth",
            "status": "corrected",
            "prompt": "Capsule: individual growth is not a characteristic of a profession",
            "html": "<p>Personal growth is not inherently unprofessional. Improving competence supports professional aims provided public safety and ethical duties remain paramount, so the capsule's absolute exclusion is not a defensible definition of a profession.</p>",
            "sources": [
              {
                "id": "CAP4-10-00076",
                "label": "p. 39; topic 10 point 71"
              }
            ]
          },
          {
            "id": "caution-mass-used-ideas",
            "status": "corrected",
            "prompt": "Capsule: design ideas in an article that are mass-used are not protected by copyright",
            "html": "<p>The correct test is the idea-expression distinction, not popularity. Ideas and methods are unprotected whether or not they are widely used, while the article's original expression stays protected even when the technique it explains is popular.</p>",
            "sources": [
              {
                "id": "CAP4-10-00110",
                "label": "p. 40; topic 10 point 103"
              }
            ]
          },
          {
            "id": "caution-ordinance-sixty-days",
            "status": "corrected",
            "prompt": "Capsule: any act forwarded by the Council of Ministers should be passed by parliament within 60 days",
            "html": "<p>Article 114(2)(c) concerns ordinances. One that has not already ended under clause (a) or (b) becomes inactive sixty days after the prescribed meeting of both Houses, counted from the later House's meeting when the dates differ. It is not a deadline for ordinary bills.</p>",
            "sources": [
              {
                "id": "CAP4-10-00130",
                "label": "p. 41; topic 10 point 121"
              }
            ]
          },
          {
            "id": "caution-private-company-fifty-limit",
            "status": "corrected",
            "prompt": "Capsule: a private limited company can have a minimum of 1 and a maximum of 50 members",
            "html": "<p>The minimum of one is right under section 3(1), but the general maximum in section 9(1) of the Companies Act 2063, in the consolidation including the 2081 amendment, is 101 counted shareholders. The older limit of 50 was replaced, and statutory counting exclusions and a transitional exception apply.</p>",
            "sources": [
              {
                "id": "CAP4-10-00152",
                "label": "p. 41; topic 10 point 141"
              }
            ]
          },
          {
            "id": "caution-labour-act-enacted-amended",
            "status": "corrected",
            "prompt": "Capsule: the current labour act was enacted or amended in 2074 BS",
            "html": "<p>2074 is the enactment year in the title of the Labour Act, 2074. The title year does not show when the Act was last amended, and later amendments, rules or notices may affect the present law; no exhaustive current consolidation is claimed.</p>",
            "sources": [
              {
                "id": "CAP4-10-00161",
                "label": "p. 41; topic 10 point 152"
              }
            ]
          },
          {
            "id": "caution-ppe-mandatory-measure",
            "status": "review",
            "prompt": "Capsule: the mandatory safety measure on construction sites is personal protective equipment",
            "html": "<p>PPE is important but sits at the bottom of the hierarchy of controls, as set out in the CDC and NIOSH Hierarchy of Controls (2024). It must accompany elimination, guarding and other effective controls rather than replace them.</p>",
            "sources": [
              {
                "id": "CAP4-10-00170",
                "label": "p. 42; topic 10 point 160"
              }
            ]
          },
          {
            "id": "caution-nea-quorum",
            "status": "review",
            "prompt": "Capsule: the quorum for a meeting of the NEA is more than 50 and above",
            "html": "<p>The phrase does not say whether it means percent or persons, which body is meant, central committee or general assembly, or whether a first or reconvened meeting is covered. No actual NEA quorum is claimed; only the arithmetic for a stated more-than-half rule, 13 of 25, is taught.</p>",
            "sources": [
              {
                "id": "CAP4-10-00171",
                "label": "p. 42; topic 10 point 161"
              }
            ]
          }
        ],
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
                "html": "Sections 3 and 4 of the NEC Act 2055 make the Council an autonomous statutory corporate body.",
                "sources": [
                  {
                    "id": "CAP4-10-00078",
                    "label": "p. 39; topic 10 point 73"
                  }
                ]
              },
              {
                "html": "The Act's purpose is to systematise engineering practice through qualification, registration and regulation.",
                "sources": [
                  {
                    "id": "CAP4-10-00133",
                    "label": "p. 41; topic 10 point 123"
                  }
                ]
              },
              {
                "html": "Daily site supervision and certification under a works contract is the project team's job, not NEC's regulatory function.",
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
            "html": "<p>Legal dates mark distinct events: authentication or publication, approval, Gazette notification, commencement and, often later, website upload.</p><ul><li><em>The Act.</em> Section 1(2) provides for commencement by Gazette notification, so a recorded authentication or publication date, such as the source-reported 2055/11/27, cannot automatically be treated as the commencement date.</li><li><em>Amendments.</em> An amendment's own commencement clause controls. Where an amendment to the Regulations takes effect on government approval, the stated approval date governs even if its PDF is uploaded years later.</li><li><em>Editions.</em> Read the base text with every relevant amendment. The corrected notes identify the Third Amendment 2080 of the Regulations and a separate Fourth Amendment 2082, so a note citing only the Second Amendment is incomplete for provisions those later amendments changed, even though the original regulation keeps its title.</li></ul>",
            "points": [
              {
                "html": "A recorded date of 2055/11/27 is not automatically the commencement, because section 1(2) separately provides for Gazette-notified commencement.",
                "sources": [
                  {
                    "id": "CAP4-10-00139",
                    "label": "p. 41; topic 10 point 129"
                  }
                ]
              },
              {
                "html": "An amendment that takes effect on approval commences on the stated government-approval date, whatever its upload date.",
                "sources": [
                  {
                    "id": "CAP4-10-00095",
                    "label": "p. 40; topic 10 point 87"
                  }
                ]
              },
              {
                "html": "Later amendments can change the operative provision without changing the original regulation's title, so the Third and Fourth Amendments must be read.",
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
                "html": "The Government of Nepal nominates the Council's chairperson and vice-chairperson under section 5.",
                "sources": [
                  {
                    "id": "CAP4-10-00080",
                    "label": "pp. 39, 41; topic 10 point 74; topic 10 point 151"
                  }
                ]
              },
              {
                "html": "An engineering graduate with 16 years' engineering experience after the degree meets the 15-year chairperson threshold.",
                "sources": [
                  {
                    "id": "CAP4-10-00083",
                    "label": "p. 39; topic 10 point 77"
                  }
                ]
              },
              {
                "html": "The vice-chairperson needs an engineering bachelor's degree followed by at least 10 years' engineering experience.",
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
            "html": "<p>The <em>registrar</em> must have an engineering bachelor's degree followed by ten years of engineering experience, the same post-degree threshold as the vice-chairperson, but the appointment route differs. Under section 27(1), as amended in 2079, the Government of Nepal appoints the registrar on the basis of open competition. This is neither an ordinary Council staff appointment under section 34 nor a nomination by the NEA president, and ten years of service bring no automatic promotion to the post.</p><p>Keep the offices apart when reading records. The chairperson leads the Council, while the registrar administers its executive work, so a historical list naming both identifies two different offices. The capsule's names for the first holders have not been verified against official records and are not taught as recall facts.</p>",
            "points": [
              {
                "html": "Under section 27(1) as amended in 2079, the registrar is appointed by the Government of Nepal on the basis of open competition.",
                "sources": [
                  {
                    "id": "CAP4-10-00085",
                    "label": "p. 39; topic 10 point 78"
                  }
                ]
              },
              {
                "html": "In a list of office holders, the chair leads the Council; the registrar administers its executive work.",
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
                "html": "The NEA president's Council seat, held by virtue of that association office, is ex-officio membership.",
                "sources": [
                  {
                    "id": "CAP4-10-00081",
                    "label": "p. 39; topic 10 point 75"
                  }
                ]
              },
              {
                "html": "The five NEA representatives arise by the prescribed election, rather than by holding the presidency.",
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
                "html": "Under section 5(1)(h) as amended in 2079, the Council itself nominates two engineers, including at least one woman.",
                "sources": [
                  {
                    "id": "CAP4-10-00088",
                    "label": "p. 40; topic 10 point 81"
                  }
                ]
              },
              {
                "html": "With no woman in the Council pair, that group falls short by one, irrespective of the total number of men listed.",
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
            "html": "<p>Rules 3 and 3A of the NEC Regulations 2057, as amended through 2080, describe three registration categories: general registered engineer, professional engineer and non-Nepali engineer. They are regulatory routes with different eligibility and assessment requirements, not engineering disciplines, NEA membership grades or quality ranks.</p><p>The non-Nepali route turns on foreign nationality together with the employment-related registration conditions of Rule 10. A Nepali citizen with an overseas degree is not a non-Nepali engineer, and employment in an engineering institution alone is neither a complete definition nor a licence.</p><p>The minimum basis for practice in Nepal is a recognised engineering bachelor's degree plus completed NEC registration. The Act's academic definition in section 2(d) and its registration requirement in section 11 are separate. The route runs through application, scrutiny, examination where required, recommendation, registration and certificate.</p>",
            "points": [
              {
                "html": "The three registration categories are general registered, professional and non-Nepali engineers.",
                "sources": [
                  {
                    "id": "CAP4-10-00086",
                    "label": "p. 39; topic 10 point 79"
                  }
                ]
              },
              {
                "html": "For a foreign engineer, the non-Nepali route turns on nationality and the prescribed employment-related registration conditions.",
                "sources": [
                  {
                    "id": "CAP4-10-00087",
                    "label": "p. 40; topic 10 point 80"
                  }
                ]
              },
              {
                "html": "A degree and a submitted application are not enough: the individual must complete the applicable registration process.",
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
            "html": "<p>Under section 14(1) of the Act, as amended in 2079, the engineering-registration examination committee has five members:</p><ul><li>a Council member as coordinator;</li><li>three Council members, including one woman;</li><li>the registrar as member-secretary.</li></ul><p>Subject experts invited under section 14(4) are not additional prescribed seats, and the three-person conduct investigation committee is a separate body under Regulations Rule 20.</p><p>Statistics drawn from the register are snapshots. A count of professional engineers reported for 2078/12/31 can establish, at most, the number in that category on that date, and only after the register itself has been checked. New registrations, removals and corrections change the figure, so it is neither a current statistic nor a maximum. The capsule's reported 61 has not been authenticated.</p>",
            "points": [
              {
                "html": "Section 14(1) sets a Council-member coordinator, three Council members including one woman, and the registrar on the examination committee.",
                "sources": [
                  {
                    "id": "CAP4-10-00090",
                    "label": "p. 40; topic 10 point 82"
                  }
                ]
              },
              {
                "html": "A reported 61 professional engineers on 2078/12/31 gives at most a count for that date, subject to verification of the register.",
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
            "html": "<p>NEC's education powers under Act 21A–21B and Rules 15–16 cover recognition of engineering programmes, including programme conditions, academic standards, staff and facilities, through a formal regulatory decision. One aggregate score cannot replace the individual mandatory criteria or the record of recognised programmes.</p><p>Monitoring and recognition status are different. According to the corrected notes on Rule 15, an institution with temporary recognition must obtain permanent recognition by meeting the prescribed criteria within five years; an inspection visit is not a permanent-recognition decision.</p><p>University affiliation and NEC recognition answer different questions. A university's affiliation of a master's programme leaves open whether the programme meets NEC's requirements.</p><p>A ranking of provinces by recognised institutions, such as a reported lead for Bagmati, needs a dated institution-level list and a consistent counting unit, because colleges, campuses and programmes give different totals.</p>",
            "points": [
              {
                "html": "A 60% aggregate score does not prove recognition, which also depends on the applicable criteria and formal decision.",
                "sources": [
                  {
                    "id": "CAP4-10-00092",
                    "label": "p. 40; topic 10 point 84"
                  }
                ]
              },
              {
                "html": "Before advertising permanent recognition, check the formal recognition decision and fulfilment of prescribed criteria.",
                "sources": [
                  {
                    "id": "CAP4-10-00093",
                    "label": "p. 40; topic 10 point 85"
                  }
                ]
              },
              {
                "html": "A university affiliation leaves open whether the programme meets applicable NEC recognition requirements.",
                "sources": [
                  {
                    "id": "CAP4-10-00101",
                    "label": "p. 40; topic 10 point 93"
                  }
                ]
              },
              {
                "html": "A claimed Bagmati lead needs a dated institution-level recognition list grouped consistently by province.",
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
            "html": "<p>The professional code of conduct for engineers is <em>Rule 18</em>, located in Chapter 4 of the NEC Regulations 2057, the chapter headed Professional Code of Conduct. Chapter 7 of the Regulations is Miscellaneous. Confusion arises because the separate Act places its section 29A in the Act's own Chapter 7; the Act and the Regulations must not be conflated.</p><p>Read through the Third Amendment 2080, Rule 18 contains the eight clauses (a) to (h) followed by three added prohibitions, (i) to (k), giving eleven lettered clauses. They are clauses of one rule, not eleven articles or Acts, and the rule number 18 is not a count of anything. Always state which amended version is being described.</p>",
            "points": [
              {
                "html": "The professional code of conduct is Rule 18 in Chapter 4 of the NEC Regulations 2057, not in Chapter 7.",
                "sources": [
                  {
                    "id": "CAP4-10-00142",
                    "label": "p. 41; topic 10 point 132"
                  }
                ]
              },
              {
                "html": "Rule 18's clauses (a)–(h) plus (i)–(k) make eleven lettered clauses, not eleven separate Acts.",
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
                "html": "Unregistered practice under section 30(2) carries up to NRs 10000 fine, up to 3 months' imprisonment, or both.",
                "sources": [
                  {
                    "id": "CAP4-10-00096",
                    "label": "p. 40; topic 10 point 88"
                  }
                ]
              },
              {
                "html": "Section 30(3)'s NRs 25000 is a maximum fine for contraventions other than those in 30(2) and 30(2A).",
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
                "html": "Section 31(1) covers failure to exercise statutory powers, abuse or excess of powers, or failure of statutory duties.",
                "sources": [
                  {
                    "id": "CAP4-10-00138",
                    "label": "p. 41; topic 10 point 128; topic 10 point 144"
                  }
                ]
              },
              {
                "html": "Section 31(3) sets a generally applicable reconstitution period of three months running from dissolution.",
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
            "html": "<ul><li><em>Rules.</em> Under section 37(1)–(2), NEC makes rules to implement the Act, and they take effect only on approval by the Government of Nepal. Subordinate instruments under section 37(3) form a separate category, and bylaws or guidelines cannot override the Act.</li><li><em>Annual report.</em> Section 37A, added in 2079, requires the Council to submit an annual report to the Government of Nepal every year within the month of Ashoj and to publish it. It covers the year's activities, administrative costs, income and expenditure, and planned programmes. An annual meeting is not the timing trigger.</li><li><em>Audit.</em> Rule 31(1) of the Regulations through the Third Amendment 2080 requires the Council to appoint an accredited auditor under prevailing law within three months of the end of the financial year, and Rule 31(2) requires a copy of the audit report to go to the Government of Nepal. The three-month limit concerns the appointment only.</li></ul>",
            "points": [
              {
                "html": "Rules made under section 37(1)–(2) take effect only on approval by the Government of Nepal.",
                "sources": [
                  {
                    "id": "CAP4-10-00098",
                    "label": "p. 40; topic 10 point 90"
                  }
                ]
              },
              {
                "html": "Under section 37A, the annual report goes to the Government of Nepal, within Ashoj each year, and is also published.",
                "sources": [
                  {
                    "id": "CAP4-10-00100",
                    "label": "p. 40; topic 10 point 92"
                  }
                ]
              },
              {
                "html": "Under Rule 31, NEC appoints an accredited auditor under prevailing law within three months of financial year-end.",
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
        "cautions": [
          {
            "id": "caution-conduct-articles-count",
            "status": "corrected",
            "prompt": "Capsule: the professional codes of conduct issued by NEC have 11 articles",
            "html": "<p>The eleven are lettered clauses of one rule: Rule 18's clauses (a) to (h) plus (i) to (k) in the Regulations as amended through the Third Amendment 2080. Articles, clauses and rule numbers are not interchangeable.</p>",
            "sources": [
              {
                "id": "CAP4-10-00079",
                "label": "p. 39; topic 10 point 73"
              }
            ]
          },
          {
            "id": "caution-first-office-holders",
            "status": "review",
            "prompt": "Capsule: Er. Ram Babu Sharma was the first president of NEC and Bindeshwar Yadav the first registrar",
            "html": "<p>These historical identities were not independently verified; first-Council appointment and registrar records should be checked before they are quoted. Note also that the statutory head of the Council is the chairperson, an office distinct from the registrar who runs the executive work.</p>",
            "sources": [
              {
                "id": "CAP4-10-00082",
                "label": "p. 39; topic 10 point 76"
              }
            ]
          },
          {
            "id": "caution-chair-and-vice-chair-titles",
            "status": "review",
            "prompt": "Capsule: the Government of Nepal nominates the chairman and VP, or vice president, of NEC",
            "html": "<p>The nominating authority is right: section 5 assigns both nominations to the Government of Nepal. Use the statutory titles, chairperson and vice-chairperson, because the Act creates no separate president or vice-president office for the Council.</p>",
            "sources": [
              {
                "id": "CAP4-10-00080",
                "label": "pp. 39, 41; topic 10 point 74; topic 10 point 151"
              }
            ]
          },
          {
            "id": "caution-chairperson-title-and-timing",
            "status": "review",
            "prompt": "Capsule: a bachelor's degree and 15 years of engineering experience are required to be Chairman and President of NEC",
            "html": "<p>Section 5(1)(a) requires at least 15 years in the engineering profession after the engineering bachelor's degree, so experience gained before graduation does not count. The Act names a chairperson; no separate NEC president office should be inferred from the capsule's wording.</p>",
            "sources": [
              {
                "id": "CAP4-10-00083",
                "label": "p. 39; topic 10 point 77"
              }
            ]
          },
          {
            "id": "caution-registrar-appointment-route",
            "status": "review",
            "prompt": "Capsule: a bachelor's degree with 10 years of experience is the qualification of the VC and the Registrar of NEC",
            "html": "<p>The shared post-degree threshold is right, but the offices are filled differently. The Government of Nepal nominates the vice-chairperson, whereas section 27(1), as amended in 2079, has the Government appoint the registrar through open competition. A wrong section 23 citation and an implied Council appointment were repaired in review; ordinary staff appointments fall under section 34.</p>",
            "sources": [
              {
                "id": "CAP4-10-00085",
                "label": "p. 39; topic 10 point 78"
              }
            ]
          },
          {
            "id": "caution-category-letters",
            "status": "review",
            "prompt": "Capsule: engineers are registered in category A as general, B as professional and C as foreign engineers",
            "html": "<p>The three category names are right, but the letters are only labels. They are not separate legal quality grades; the categories differ in their eligibility and assessment requirements rather than in rank.</p>",
            "sources": [
              {
                "id": "CAP4-10-00086",
                "label": "p. 39; topic 10 point 79"
              }
            ]
          },
          {
            "id": "caution-non-nepali-definition",
            "status": "corrected",
            "prompt": "Capsule: a non-Nepali engineer is a non-Nepali engineer working under engineering institutions",
            "html": "<p>The definition is incomplete. The category depends on foreign nationality and on the employment-related registration conditions of Regulations Rule 10. Working in an engineering institution is neither a complete definition nor a licence, and a Nepali citizen with a foreign degree is not in this category.</p>",
            "sources": [
              {
                "id": "CAP4-10-00087",
                "label": "p. 40; topic 10 point 80"
              }
            ]
          },
          {
            "id": "caution-council-nominees-count",
            "status": "corrected",
            "prompt": "Capsule: the number of members nominated by NEC is 3",
            "html": "<p>Amended section 5(1)(h) gives the Council two nominees, who must be engineers with seven years of post-degree experience and must include at least one woman. Three is not the amended allocation; the seven Government nominees under section 5(1)(c) are a separate group.</p>",
            "sources": [
              {
                "id": "CAP4-10-00088",
                "label": "p. 40; topic 10 point 81"
              }
            ]
          },
          {
            "id": "caution-four-women-quota",
            "status": "corrected",
            "prompt": "Capsule: the minimum number of female members in the NEC committee is 4",
            "html": "<p>Four is only the sum of two separate minima: at least three women among the seven Government nominees and at least one among the two Council nominees. Each group must meet its own minimum, so four is not a fungible Council-wide quota.</p>",
            "sources": [
              {
                "id": "CAP4-10-00089",
                "label": "p. 40; topic 10 point 81"
              }
            ]
          },
          {
            "id": "caution-professional-engineer-count",
            "status": "review",
            "prompt": "Capsule: 61 professional engineers had been registered by 2078/12/31",
            "html": "<p>The count has not been verified against the register or an annual report for that date. Even if confirmed, it is a dated snapshot for one category, not a current figure or a permanent maximum.</p>",
            "sources": [
              {
                "id": "CAP4-10-00091",
                "label": "p. 40; topic 10 point 83"
              }
            ]
          },
          {
            "id": "caution-sixty-percent-score",
            "status": "review",
            "prompt": "Capsule: a college should score at least 60% on average to get affiliation from NEC",
            "html": "<p>This shortcut is not endorsed. The applicable recognition bylaw, scoring rubric and minima for mandatory categories were not verified, and a formal recognition decision is required in any case. University affiliation and NEC recognition are distinct.</p>",
            "sources": [
              {
                "id": "CAP4-10-00092",
                "label": "p. 40; topic 10 point 84"
              }
            ]
          },
          {
            "id": "caution-inspection-frequency",
            "status": "review",
            "prompt": "Capsule: for temporary affiliation, NEC supervises a college once a year",
            "html": "<p>The once-yearly frequency was not independently verified; Rules 15–16 and the current monitoring bylaw should be checked. Whatever the frequency, an inspection is not a decision granting permanent recognition.</p>",
            "sources": [
              {
                "id": "CAP4-10-00093",
                "label": "p. 40; topic 10 point 85"
              }
            ]
          },
          {
            "id": "caution-bagmati-ranking",
            "status": "review",
            "prompt": "Capsule: Bagmati province has the largest number of colleges affiliated by NEC",
            "html": "<p>The ranking is unresolved. It needs dated NEC data on recognised institutions and a stated counting unit, whether college, campus or programme, before any province can be said to lead.</p>",
            "sources": [
              {
                "id": "CAP4-10-00094",
                "label": "p. 40; topic 10 point 86"
              }
            ]
          },
          {
            "id": "caution-first-amendment-date",
            "status": "review",
            "prompt": "Capsule: the first amendment of the NEC regulation was made on 2064/02/17",
            "html": "<p>The date has not been independently verified. The primary amendment's cover and commencement clause should be checked; the date must not be inferred from an upload filename or a website timestamp.</p>",
            "sources": [
              {
                "id": "CAP4-10-00095",
                "label": "p. 40; topic 10 point 87"
              }
            ]
          },
          {
            "id": "caution-section-30b-penalty",
            "status": "corrected",
            "prompt": "Capsule: violating sub-section 30(b) of the NEC Act 2055 is punished with an NRs 10000 fine",
            "html": "<p>The unregistered-practice offence sits in section 30(1)–(2) and carries a fine of up to NRs 10000, imprisonment of up to three months, or both. The label 30(b) and a fixed fine omit these distinctions, and the amount is neither an automatic tariff nor a registration fee.</p>",
            "sources": [
              {
                "id": "CAP4-10-00096",
                "label": "p. 40; topic 10 point 88"
              }
            ]
          },
          {
            "id": "caution-reconstitution-minimum",
            "status": "corrected",
            "prompt": "Capsule: the minimum period allowed for forming a new council after NEC is dissolved is 3 months",
            "html": "<p>Section 31(3) says another Council is constituted generally within three months from dissolution. That is a qualified outer period running from dissolution, not a minimum waiting time and not the new Council's term.</p>",
            "sources": [
              {
                "id": "CAP4-10-00097",
                "label": "p. 40; topic 10 point 89"
              }
            ]
          },
          {
            "id": "caution-rules-approval-scope",
            "status": "review",
            "prompt": "Capsule: approval for change in the rules and regulations of NEC is granted by the Government of Nepal",
            "html": "<p>Correct for rules made under section 37(1)–(2), which take effect on Government approval. Subordinate instruments under section 37(3), such as bylaws and guidelines, are a separate category, so not every NEC instrument follows an identical approval route, and none may override the Act.</p>",
            "sources": [
              {
                "id": "CAP4-10-00098",
                "label": "p. 40; topic 10 point 90"
              }
            ]
          },
          {
            "id": "caution-section-30c-penalty",
            "status": "corrected",
            "prompt": "Capsule: under section 30(c) of the amended NEC Act, the punishment for violating rules is 25000",
            "html": "<p>Section 30(3) provides a fine of up to NRs 25000 for contraventions other than those in 30(2) and 30(2A). It is a maximum for a residual category, not a fixed amount for every violation.</p>",
            "sources": [
              {
                "id": "CAP4-10-00099",
                "label": "p. 40; topic 10 point 91"
              }
            ]
          },
          {
            "id": "caution-annual-report-trigger",
            "status": "corrected",
            "prompt": "Capsule: after NEC's annual meeting, the report is submitted to the Government",
            "html": "<p>Section 37A, added in 2079, requires the report to reach the Government of Nepal within the month of Ashoj every year, and NEC must also publish it. The annual meeting is not the statutory timing trigger.</p>",
            "sources": [
              {
                "id": "CAP4-10-00100",
                "label": "p. 40; topic 10 point 92"
              }
            ]
          },
          {
            "id": "caution-masters-bylaw-date",
            "status": "review",
            "prompt": "Capsule: NEC's master's programme affiliation sub-regulations were formulated on 2076/09/06",
            "html": "<p>The date remains unverified. The bylaw's official title, approval record and operative edition should be obtained before relying on it, so the date is deliberately not taught as a recall fact.</p>",
            "sources": [
              {
                "id": "CAP4-10-00101",
                "label": "p. 40; topic 10 point 93"
              }
            ]
          },
          {
            "id": "caution-directly-elected-five",
            "status": "review",
            "prompt": "Capsule: five members are directly elected to the Council from the Nepal Engineers' Association",
            "html": "<p>Section 5 provides five NEA representatives through a prescribed election arrangement, separate from the president's ex-officio seat. The exact election wording and any later composition amendments should be confirmed in the operative text, and it does not follow that all Council members are elected.</p>",
            "sources": [
              {
                "id": "CAP4-10-00135",
                "label": "p. 41; topic 10 point 125"
              }
            ]
          },
          {
            "id": "caution-second-amendment-date",
            "status": "review",
            "prompt": "Capsule: the second amendment of the NEC regulation was made on 2069/03/15",
            "html": "<p>The date was not independently verified; the official cover and commencement clause should be checked. More importantly, the Second Amendment is not the current text, because the Third Amendment 2080 and the Fourth Amendment 2082 must also be read.</p>",
            "sources": [
              {
                "id": "CAP4-10-00136",
                "label": "p. 41; topic 10 point 126"
              }
            ]
          },
          {
            "id": "caution-dissolution-grounds",
            "status": "review",
            "prompt": "Capsule: NEC is dissolved by the Government for non-compliance with government regulation and standard",
            "html": "<p>Use the statutory list rather than a paraphrase. Section 31(1) covers failure to exercise powers, abuse of powers, exceeding the powers conferred and failure to perform duties under the Act or Rules; a loose phrase about government standards should be checked against that list.</p>",
            "sources": [
              {
                "id": "CAP4-10-00138",
                "label": "p. 41; topic 10 point 128; topic 10 point 144"
              }
            ]
          },
          {
            "id": "caution-promulgation-date",
            "status": "review",
            "prompt": "Capsule: the NEC Act was promulgated on 2055/11/27",
            "html": "<p>The date is source-reported and was not authenticated here. Even as an authentication or publication date, it does not settle commencement, which section 1(2) ties to Gazette notification; the official heading and the notification should be verified separately.</p>",
            "sources": [
              {
                "id": "CAP4-10-00139",
                "label": "p. 41; topic 10 point 129"
              }
            ]
          },
          {
            "id": "caution-code-of-conduct-location",
            "status": "corrected",
            "prompt": "Capsule: the engineers' code of conduct is in chapter 7, article 38 of the NEC Regulation",
            "html": "<p>Both numbers are wrong. The code is Rule 18, which sits in Chapter 4 (Professional Code of Conduct) of the Regulations 2057 as amended through the Third Amendment 2080. Chapter 7 of the Regulations is Miscellaneous, and it is the separate Act whose Chapter 7 contains section 29A.</p>",
            "sources": [
              {
                "id": "CAP4-10-00142",
                "label": "p. 41; topic 10 point 132"
              }
            ]
          }
        ],
        "gaps": [
          "Registration fees, examination schedules, renewal and disciplinary procedure are not tested by these capsule points.",
          "Several capsule dates and statistics, including amendment dates, the count of 61 professional engineers, the first office holders, the 60% score and the Bagmati ranking, remain unverified and are taught only as claims to check.",
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
            "html": "<p>A <em>farmstead</em> combines a family home with crop and livestock work, so its layout should meet residential needs while separating functions that can contaminate one another. Domestic food preparation and sanitation facilities belong apart from animal areas and from the storage and mixing of pesticides and other farm chemicals.</p><p>Shared shelving for food and chemicals, a common wet area for animal washing and cooking, or chemical mixing above the household water tank all defeat that aim. A kitchen, bathroom, store and farm area are functional considerations, not a complete code-prescribed room schedule.</p>",
            "points": [
              {
                "html": "Sound farmstead zoning should separate domestic food and sanitation facilities from animal and chemical work areas.",
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
                "html": "In a hot, sunny low-latitude region, a long animal house commonly runs east-west so low sun falls mainly on its short end walls.",
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
                "html": "Restraining one animal safely for treatment or examination is the job of a handling crush or chute.",
                "sources": [
                  {
                    "id": "CAP4-10-00188",
                    "label": "p. 42; rural point 12"
                  }
                ]
              },
              {
                "html": "A conventional cow milking cluster has four teat cups, one for each teat of the udder quarters.",
                "sources": [
                  {
                    "id": "CAP4-10-00177",
                    "label": "p. 42; rural point 5"
                  }
                ]
              },
              {
                "html": "Machine milking works by a controlled vacuum that extracts milk while pulsation alternates milking and massage phases.",
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
            "html": "<p>Fish may be held in two different product states.</p><ul><li><em>Chilling</em> with melting ice keeps fresh fish near 0 °C, because at ordinary pressure melting freshwater ice stays close to that temperature.</li><li><em>Frozen storage</em> keeps an already frozen product well below freezing; a freezer set point of −25 °C is one such specification.</li></ul><p>A −25 °C set point is a condition for a particular frozen product and storage plan. It is neither a universal best temperature for every fish product nor a rule for fresh fish, and melting ice cannot reach it at atmospheric pressure. Freezing does not stop all deterioration, give unlimited shelf life or remove the need for hygiene, cold-chain control and temperature monitoring.</p>",
            "points": [
              {
                "html": "A −25 °C freezer set point is a frozen-storage specification for that product and storage plan, not a universal rule.",
                "sources": [
                  {
                    "id": "CAP4-10-00182",
                    "label": "p. 42; rural point 9"
                  }
                ]
              },
              {
                "html": "Ice chilling near the melting point of ice and frozen storage at −25 °C are different product states, not one process.",
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
            "html": "<p><em>Intercultural operations</em> are field tasks done in a standing, growing crop between establishment and harvest; weeding, hoeing and, where suitable, earthing-up are examples. Hoeing between established rows controls weeds without harming the plants. Saying only that such work is done before harvesting is too broad: crop stage, soil condition and purpose decide the timing, and it is not work done before sowing or on stored produce.</p><p>An entrance <em>footbath</em> on a poultry farm aims to reduce the spread of disease on footwear, as one part of a biosecurity system. It works only when footwear is cleaned first and the disinfectant is kept at the correct strength with adequate contact. Mud, dilution and a depleted solution undermine it, and it never replaces other access controls.</p>",
            "points": [
              {
                "html": "Intercultural operations such as hoeing between rows are done during crop growth between establishment and harvest.",
                "sources": [
                  {
                    "id": "CAP4-10-00178",
                    "label": "p. 42; rural point 6"
                  }
                ]
              },
              {
                "html": "A poultry footbath is credible only if workers clean footwear first and maintain the correct disinfectant and contact conditions.",
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
        "cautions": [
          {
            "id": "caution-farmhouse-essentials",
            "status": "review",
            "prompt": "Capsule: the essential parts of a farm house are kitchen, bathroom, store house and farm",
            "html": "<p>These are functional considerations for a farmstead, not a universal code-prescribed room schedule. The important principle is separating domestic food and sanitation from animal and chemical work areas. The point is additional rural material, not an official civil syllabus subchapter.</p>",
            "sources": [
              {
                "id": "CAP4-10-00176",
                "label": "p. 42; rural point 4"
              }
            ]
          },
          {
            "id": "caution-intercultural-timing",
            "status": "review",
            "prompt": "Capsule: the favourable time for intercultural operation is before harvesting",
            "html": "<p>Before harvesting is too broad. The operations take place in a growing crop between establishment and harvest, and their timing depends on crop stage, soil condition and purpose.</p>",
            "sources": [
              {
                "id": "CAP4-10-00178",
                "label": "p. 42; rural point 6"
              }
            ]
          },
          {
            "id": "caution-fish-minus-25",
            "status": "review",
            "prompt": "Capsule: the approximate storage temperature of fish is −25 °C",
            "html": "<p>The −25 °C figure is retained only as a supplied frozen-storage condition for a particular product and plan. It is not a universal food-storage rule, and chilling fresh fish with melting ice, near 0 °C, is a different process.</p>",
            "sources": [
              {
                "id": "CAP4-10-00182",
                "label": "p. 42; rural point 9"
              }
            ]
          },
          {
            "id": "caution-crush-milking",
            "status": "review",
            "prompt": "Capsule: structures for restraining animals during routine practices such as spraying and milking are called crushes",
            "html": "<p>Crushes do restrain individual animals for routine procedures, but not every milking installation must use one; a milking parlour may rely on other appropriate restraint arrangements.</p>",
            "sources": [
              {
                "id": "CAP4-10-00188",
                "label": "p. 42; rural point 12"
              }
            ]
          },
          {
            "id": "caution-orientation-trigger",
            "status": "review",
            "prompt": "Capsule: if the temperature is 30–35 °C for more than 5 hours a day, animal housing is oriented east-west",
            "html": "<p>The temperature-duration trigger is not a verified universal rule. East-west orientation is favoured for the stated solar-control objective in hot, low-latitude conditions once ventilation has been checked, and wind, latitude and site factors still decide the layout.</p>",
            "sources": [
              {
                "id": "CAP4-10-00197",
                "label": "p. 42; rural point 20"
              }
            ]
          }
        ],
        "gaps": [
          "These nine capsule points form a rural-engineering appendix outside the ten official civil syllabus subchapters; they are not a complete rural or agricultural engineering syllabus.",
          "No design standards for animal housing, cold stores or farm buildings were verified; temperatures and orientations are taught only under the conditions stated."
        ]
      }
    });
})();
