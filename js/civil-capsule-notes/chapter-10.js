(function () {
    "use strict";
    window.CIVIL_CAPSULE_NOTE_TOPICS = window.CIVIL_CAPSULE_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_CAPSULE_NOTE_TOPICS, {
      "AALL1001": {
        "code": "AALL1001",
        "questionCount": 33,
        "format": 2,
        "summary": "<p>Engineering drawings and its concepts covers Standard drawing sheets, dimensions, scales, line diagrams, orthographic and isometric projections, pictorial views and sectional drawing. The sections below reorganize the reviewed capsule material into concepts, calculations, qualifications and limits, with every mapped question linked to a key fact.</p>",
        "blocks": [
          {
            "id": "lettering-height-and-inclination",
            "title": "Lettering size, character proportions and inclined lettering",
            "html": "<p>In technical lettering, the stated size means the nominal height of the capital letters. If a title block calls for 5 mm lettering, a narrow capital I and a broad capital M both stand 5 mm tall. Their widths differ because every character has its own shape, and stroke thickness and spacing are further, separate parameters of the style.</p><p>Width therefore follows the proportions of the lettering standard or style adopted for the drawing. It is not fixed by one universal width ratio for all letters and another for all numerals.</p><p>Inclined lettering is conventionally sloped at 75° to its horizontal baseline. The vertical makes 90° with that baseline, so the strokes lean 90° − 75° = 15° from the vertical, toward the right. This describes the conventional sloping style only; not every permitted lettering style is inclined.</p>",
            "moreHtml": "<p>When checking such a figure, name the reference line first. An angle measured from the baseline and one measured from the vertical are complementary, so a 75° slope and a 15° lean describe the same stroke.</p>",
            "points": [
              {
                "html": "The key result is Nominal capital height of 5 mm.",
                "sources": [
                  {
                    "id": "CAP4-10-00001",
                    "label": "p. 37; topic 10 point 1"
                  }
                ]
              },
              {
                "html": "The key result is Use the chosen lettering standard's character proportions.",
                "sources": [
                  {
                    "id": "CAP4-10-00002",
                    "label": "p. 37; topic 10 point 2"
                  }
                ]
              },
              {
                "html": "The key result is 15 degrees toward the right.",
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
            "html": "<p>The A-series starts from an ideal A0 sheet of 1 m². Each smaller size comes from halving the long side of the one before, so every step halves the area: A1 is 1/2 m², A2 is 1/4 m², and A3, three halvings below A0, is 1/2<sup>3</sup> = 0.125 m². In general the ideal area of A<sub>n</sub> is 1/2<sup>n</sup> m².</p><p>Only one side ratio lets the shape survive the halving. Call the long side L and the short side S. After halving, the new sheet has long side S and short side L/2, and similarity requires L/S = S/(L/2). Cross-multiplying gives L<sup>2</sup> = 2S<sup>2</sup>, so L/S = √2. Put another way, dividing the long side by √2 gives the short side, about 0.707 of the long side.</p>",
            "moreHtml": "<p>Real sheets are trimmed to whole millimetres, so multiplying the printed dimensions gives an area close to, but not exactly equal to, the nominal value.</p>",
            "points": [
              {
                "html": "The key result is 0.125 square metre.",
                "sources": [
                  {
                    "id": "CAP4-10-00005",
                    "label": "p. 37; topic 10 point 5"
                  }
                ]
              },
              {
                "html": "The key result is Square root of 2 to 1.",
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
            "title": "Sheet designation, orientation, aspect ratio and permitted drawing formats",
            "html": "<p>An A-series designation names the trimmed dimensions of a sheet, not the way it is turned. Rotating an A3 sheet from portrait to landscape leaves it A3; only cutting or joining sheets changes the size. The letter A identifies a widely used paper series for drawings, which does not mean that every paper product belongs to it.</p><p>Orientation matters as soon as a ratio is quoted. With aspect ratio defined as width to height, a landscape graphic 180 mm wide and 120 mm high has 180:120, and dividing both terms by their common factor 60 gives 3:2. Turned to portrait, or quoted as height to width, the order reverses, so always state which dimension comes first.</p><p>A5, nominally 148 × 210 mm, is a genuine A-series size. A drawing-sheet standard, office practice or project specification may still restrict engineering drawings to a preferred set such as A0 to A4. Leaving A5 off such a list limits what that project accepts; it does not remove A5 from the paper series.</p>",
            "points": [
              {
                "html": "The key result is It remains unchanged because orientation does not set the size.",
                "sources": [
                  {
                    "id": "CAP4-10-00004",
                    "label": "p. 37; topic 10 point 4"
                  }
                ]
              },
              {
                "html": "The key result is 3:2. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-10-00158",
                    "label": "p. 41; topic 10 point 148"
                  }
                ]
              },
              {
                "html": "The key result is A5 is a standard A-series paper size but outside this project's allowed set.",
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
            "html": "<p>Dimensions quoted for a drawing board describe the board itself. A traditional D1 board listed as 1000 × 700 × 25 mm is read as the length, width and thickness of the support, not as a paper size, a border or a plotting scale. A purchaser should follow the specification actually issued rather than assume a universal current board standard.</p><p>The two fixed set squares provide 45°–45°–90° and 30°–60°–90° edges. Adding, subtracting or supplementing those angles always gives multiples of 15°: for instance 105° = 60° + 45°, 75° = 45° + 30° and 150° = 180° − 30°. An angle of 115° is not a multiple of 15°, so these fixed edges cannot set it directly; an adjustable or measuring instrument is needed.</p><p>A clinograph is such an adjustable device: an adjustable set square used in place of several fixed-angle squares to draw lines at chosen inclinations. It is not a magnetic compass, and it differs from a clinometer, which measures inclination.</p>",
            "points": [
              {
                "html": "The key result is Drawing lines at adjustable inclinations.",
                "sources": [
                  {
                    "id": "CAP4-01-00153",
                    "label": "p. 6; topic 1 point 146"
                  }
                ]
              },
              {
                "html": "The key result is Board length, width and thickness.",
                "sources": [
                  {
                    "id": "CAP4-10-00010",
                    "label": "p. 37; topic 10 point 7"
                  }
                ]
              },
              {
                "html": "The key result is 115 degrees.",
                "sources": [
                  {
                    "id": "CAP4-10-00015",
                    "label": "p. 37; topic 10 point 15"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00153",
                "label": "p. 6; topic 1 point 146"
              },
              {
                "id": "CAP4-10-00010",
                "label": "p. 37; topic 10 point 7"
              },
              {
                "id": "CAP4-10-00015",
                "label": "p. 37; topic 10 point 15"
              }
            ]
          },
          {
            "id": "compass-divider-french-curve-and-freehand-circles",
            "title": "Compass, divider, French curve and freehand circles",
            "html": "<p>Select a curve-drawing aid by the geometry it enforces. A compass is anchored at a known centre and carries its marking point at a fixed radius, so repeated arcs of one centre and radius stay consistent. A divider has two points and transfers or steps off distances; it carries no drawing lead.</p><p>A French curve has edges of continuously varying curvature. It is used to fair a smooth, noncircular profile through plotted points: a portion of its edge is fitted through several neighbouring points, then the template is moved to the next group so that successive segments overlap smoothly. A compass cannot reproduce such a profile because its radius is constant.</p><p>Freehand sketching relies on the definition of a circle as the locus of points at constant distance from a centre. The sketcher marks the centre, sets out several points at approximately equal radial distance and joins them with short, light arcs. Points at steadily increasing distance would suggest a spiral instead.</p>",
            "points": [
              {
                "html": "The key result is Approximately equal distance from the centre.",
                "sources": [
                  {
                    "id": "CAP4-10-00016",
                    "label": "p. 37; topic 10 point 16"
                  }
                ]
              },
              {
                "html": "The key result is Compass. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-10-00113",
                    "label": "p. 40; topic 10 point 106"
                  }
                ]
              },
              {
                "html": "The key result is French curve.",
                "sources": [
                  {
                    "id": "CAP4-10-00117",
                    "label": "p. 40; topic 10 point 110"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00016",
                "label": "p. 37; topic 10 point 16"
              },
              {
                "id": "CAP4-10-00113",
                "label": "p. 40; topic 10 point 106"
              },
              {
                "id": "CAP4-10-00117",
                "label": "p. 40; topic 10 point 110"
              }
            ]
          },
          {
            "id": "pencil-grades-and-line-contrast",
            "title": "Pencil grades and contrast between outlines and construction lines",
            "html": "<p>Graphite pencils follow the H and B grading system. Numbered H grades are harder and give lighter lines, numbered B grades are softer and darker, and HB is the conventional intermediate designation. A label such as HB1 is not a grade in this notation, although a manufacturer could print it as an unrelated product code.</p><p>Grading serves line hierarchy. Visible outlines must stand out, so a drafter may use a softer B pencil to make them dark while keeping construction lines faint with a harder grade. The grade alone does not make a line correct: sharpness, pressure, the paper surface and the specified drafting method also control width and darkness. B is therefore a common pencil for visible lines, not a universally mandatory one.</p>",
            "points": [
              {
                "html": "The key result is HB1. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-10-00017",
                    "label": "p. 38; topic 10 point 17"
                  }
                ]
              },
              {
                "html": "The key result is Visible outlines need stronger contrast than auxiliary lines.",
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
            "html": "<p>Each line type tells the reader what kind of boundary is shown. Visible outlines are continuous, edges concealed behind material in the current view are drawn as narrow dashed lines, and long-short chain lines mark axes and centres rather than boundaries. A blind recess behind the front face of an unsectioned block is therefore dashed in the front view.</p><p>Visibility belongs to the view, not to the edge. The same recess edge can be hidden when the object is seen from the front and directly visible from the side, so it is dashed in one view and continuous in the other with no change to the object.</p><p>A sectional view imagines the object cut by a plane and the nearer part removed. Section lines (hatching) go only on solid material that the cutting plane actually passes through. In a full section of a hollow sleeve the metal wall is hatched and the empty bore stays clear; surfaces seen beyond the cut are outlined but not hatched.</p>",
            "points": [
              {
                "html": "The key result is The metal intersected by the cutting plane.",
                "sources": [
                  {
                    "id": "CAP4-10-00007",
                    "label": "p. 37; topic 10 point 8"
                  }
                ]
              },
              {
                "html": "The key result is Narrow dashed lines.",
                "sources": [
                  {
                    "id": "CAP4-10-00008",
                    "label": "p. 37; topic 10 point 9"
                  }
                ]
              },
              {
                "html": "The key result is It is concealed from the front and visible from the side.",
                "sources": [
                  {
                    "id": "CAP4-10-00105",
                    "label": "p. 40; topic 10 point 97"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00007",
                "label": "p. 37; topic 10 point 8"
              },
              {
                "id": "CAP4-10-00008",
                "label": "p. 37; topic 10 point 9"
              },
              {
                "id": "CAP4-10-00105",
                "label": "p. 40; topic 10 point 97"
              }
            ]
          },
          {
            "id": "scales-representative-fraction-and-radius-symbol",
            "title": "Scales, representative fraction and the radius symbol",
            "html": "<p>A scale compares drawing length with actual length, and the representative fraction (RF) states that comparison with both lengths in the same unit. If 5 cm on a map represents 250 m, convert 250 m to 25000 cm first; then RF = 5/25000 = 1/5000, written 1:5000. Leaving the metres unconverted would give a false ratio of 1:50.</p><p>The same ratio sets a drawing scale. A 600 mm component that must appear 60 mm long needs 60/600 = 1/10, that is 1:10. This is a reducing scale because the drawing is smaller than the object, whereas 10:1 would enlarge it. Maps are normally drawn to reducing scales because ground distances are large.</p><p>Dimensions always state the size of the object, whatever the scale. The prefix R denotes a radius, so a curve marked R25 on a millimetre drawing has the curvature of a circle of diameter D = 2R = 50 mm. Its circumference is a different quantity.</p>",
            "points": [
              {
                "html": "The key result is 1:5000. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-10-00012",
                    "label": "p. 37; topic 10 point 12"
                  }
                ]
              },
              {
                "html": "The key result is 50 mm.",
                "sources": [
                  {
                    "id": "CAP4-10-00115",
                    "label": "p. 40; topic 10 point 108"
                  }
                ]
              },
              {
                "html": "The key result is 1:10. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-10-00143",
                    "label": "p. 41; topic 10 point 133"
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
                "id": "CAP4-10-00115",
                "label": "p. 40; topic 10 point 108"
              },
              {
                "id": "CAP4-10-00143",
                "label": "p. 41; topic 10 point 133"
              }
            ]
          },
          {
            "id": "orthographic-views-and-third-angle-layout",
            "title": "Choosing orthographic views and placing them in third-angle projection",
            "html": "<p>Each orthographic view shows two of the three principal dimensions, so views are selected by the information still missing. If a bracket's profile in height and depth cannot be read from its front and top views, the side view, which shows depth and height together, settles it directly. Three views are common for simple objects, but the number actually needed depends on how ambiguous the object is; it is not a fixed rule that every object needs exactly three.</p><table><thead><tr><th scope='col'>View</th><th scope='col'>Dimensions shown</th><th scope='col'>Third-angle position</th></tr></thead><tbody><tr><th scope='row'>Front</th><td>Width and height</td><td>Reference view</td></tr><tr><th scope='row'>Top</th><td>Width and depth</td><td>Above the front view</td></tr><tr><th scope='row'>Right side</th><td>Depth and height</td><td>Right of the front view</td></tr></tbody></table><p>In third-angle projection the projection plane lies between the observer and the object, which produces the layout above when the planes are unfolded. The truncated-cone (frustum) symbol printed on a drawing identifies the projection convention in use; it says nothing about whether the object drawn is itself a frustum.</p>",
            "points": [
              {
                "html": "The key result is A side view showing depth and height.",
                "sources": [
                  {
                    "id": "CAP4-10-00013",
                    "label": "p. 37; topic 10 point 13"
                  }
                ]
              },
              {
                "html": "The key result is Above and to the right, respectively.",
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
            "html": "<p>In an oblique drawing the front face lies parallel to the picture plane, so it is drawn in its true shape, to the scale of the drawing. A circular opening on that face stays a circle rather than becoming an ellipse, which is why oblique views suit objects with detailed front faces. Depth is drawn along inclined receding lines, at full or reduced length according to the oblique convention chosen, and there is no vanishing point.</p><p>Isometric views show the three principal axes equally foreshortened. An isometric drawing simply lays off true lengths along those axes for convenience. An isometric projection applies the isometric scale, multiplying each axial length by √(2/3) ≈ 0.8165. A 120 mm edge parallel to an axis therefore becomes 120 × √(2/3) = 97.98 mm; drawing it 120 mm long produces the isometric drawing instead.</p>",
            "points": [
              {
                "html": "The key result is In true shape at the drawing scale.",
                "sources": [
                  {
                    "id": "CAP4-10-00009",
                    "label": "p. 37; topic 10 point 10"
                  }
                ]
              },
              {
                "html": "The key result is 97.98 mm.",
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
            "html": "<p>Model an ideal right circular double cone with its vertex at the origin as x<sup>2</sup> + y<sup>2</sup> = k<sup>2</sup>z<sup>2</sup>. A cutting plane parallel to the axis but offset from it is x = c with c ≠ 0. Substituting gives k<sup>2</sup>z<sup>2</sup> − y<sup>2</sup> = c<sup>2</sup>, the equation of a hyperbola.</p><p>On the extended double cone the plane meets both nappes and shows both branches; a finite single cone shows only the portion it contains, and the plane must actually intersect the surface.</p><p>If the plane passes through the axis, then c = 0 and the equation factors into y = kz and y = −kz: two straight generators crossing at the vertex. This degenerate case is the reason the offset condition matters.</p><p>A plane parallel to the base, strictly between base and vertex, preserves the rotational symmetry and cuts a circle of smaller radius; at the vertex it would shrink to a point. A pictorial view of that section may look elliptical, yet its true shape is a circle.</p>",
            "points": [
              {
                "html": "The key result is Hyperbola. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-01-00140",
                    "label": "p. 5; topic 1 point 133"
                  }
                ]
              },
              {
                "html": "The key result is Hyperbola. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-10-00126",
                    "label": "p. 40; topic 10 point 118"
                  }
                ]
              },
              {
                "html": "The key result is It degenerates into two intersecting generators.",
                "sources": [
                  {
                    "id": "CAP4-10-00127",
                    "label": "p. 40; topic 10 point 118"
                  }
                ]
              },
              {
                "html": "The key result is Circle. This is the reviewed topic result.",
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
            "html": "<p>A locus follows from the rule that governs a moving point, so state the rule before naming the curve. The bob of an ideal planar pendulum stays at a fixed distance from a fixed pivot. It is confined to a circle, and a limited swing traces a circular arc; oscillation by itself creates no spiral.</p><p>An Archimedean spiral needs two uniform motions at once. The point moves outward along a ray at constant speed, r = r<sub>0</sub> + vt, while the ray turns steadily in one direction, θ = ωt. Eliminating t gives r = r<sub>0</sub> + (v/ω)θ. A point sliding along a swinging pendulum does not automatically obey this law, because the pendulum angle keeps reversing.</p><p>A circular helix is the space curve traced when a point circles a fixed axis at a constant radius and, at the same time, moves along that axis. A constant axial advance per revolution gives a constant pitch. Many other three-dimensional curves exist, so being three-dimensional does not by itself make a curve a helix.</p>",
            "points": [
              {
                "html": "The key result is An arc of a circle.",
                "sources": [
                  {
                    "id": "CAP4-10-00124",
                    "label": "p. 40; topic 10 point 117"
                  }
                ]
              },
              {
                "html": "The key result is Archimedean spiral.",
                "sources": [
                  {
                    "id": "CAP4-10-00125",
                    "label": "p. 40; topic 10 point 117"
                  }
                ]
              },
              {
                "html": "The key result is A circular helix of constant pitch.",
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
            "html": "<p>The extracted wording is corrupted mathematics. Keeping the shape under halving requires L/S = √2, so the short side equals the long side divided by √2, about 0.707 of it, not twelve times it. The printed page may have carried a correct formula that was damaged in extraction; the derived ratio is the defensible statement.</p>",
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
            "html": "<p>A spiral follows only when an extra motion law is supplied: uniform outward sliding along the rod together with uniform rotation in one direction, giving r = r<sub>0</sub> + (v/ω)θ. A reversing pendulum angle does not meet this law automatically, and the missing drawing is not assumed to provide it.</p>",
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
        "summary": "<p>Engineering Economics covers Project cash flow, discount and interest rates, time value of money, discounted payback, NPV, IRR and MARR, alternative comparison, depreciation and taxation in Nepal. The sections below reorganize the reviewed capsule material into concepts, calculations, qualifications and limits, with every mapped question linked to a key fact.</p>",
        "blocks": [
          {
            "id": "single-sum-compounding-and-discounting",
            "title": "Single-sum compounding and discounting",
            "html": "<p>Sums at different dates can be compared only after moving them to one date at a stated rate. Each period multiplies a balance by (1 + i), so a present sum P grows in n periods to F = P(1 + i)<sup>n</sup>. The multiplier (1 + i)<sup>n</sup> is the single-payment compound amount factor; its reciprocal 1/(1 + i)<sup>n</sup> discounts one future sum to the present.</p><p>At an effective 8% a year, NRs 100000 today is equivalent to 100000 × 1.08 = NRs 108000 one year later. Dividing by 1.08 instead addresses a different question, the present value of a future NRs 100000, which is NRs 92592.59.</p><p>The discount rate is the rate used to bring future sums to present value. A payment of NRs 133100 due in three years, discounted at 10%, is worth 133100/1.1<sup>3</sup> = 133100/1.331 = NRs 100000 today. Discounting is compounded period by period; subtracting three years of simple percentage does not give the same value.</p>",
            "points": [
              {
                "html": "The key result is (1+i)^n. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-10-00021",
                    "label": "p. 38; topic 10 point 21"
                  }
                ]
              },
              {
                "html": "The key result is NRs 108000.",
                "sources": [
                  {
                    "id": "CAP4-10-00025",
                    "label": "p. 38; topic 10 point 25"
                  }
                ]
              },
              {
                "html": "The key result is NRs 100000.",
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
            "title": "Compound interest earned and nominal versus effective annual rates",
            "html": "<p>Under compound interest, the interest earned in each period joins the balance and earns interest later; the rate itself need not change. NRs 20000 at a constant 10% for two years grows to 20000 × 1.1<sup>2</sup> = 24200. The interest is the growth alone, 24200 − 20000 = NRs 4200: 2000 in the first year and 2200 in the second, because the second year's interest is also earned on the first year's 2000. The principal is never counted as interest.</p><p>A nominal annual rate r compounded m times a year is not the effective yearly growth. The rate per period is r/m, and the effective annual rate is (1 + r/m)<sup>m</sup> − 1. For 12% compounded monthly the monthly rate is 0.12/12 = 0.01, and (1.01)<sup>12</sup> − 1 = 0.126825, about 12.6825%. Nominal and effective rates coincide only when compounding is annual.</p>",
            "points": [
              {
                "html": "The key result is NRs 4200.",
                "sources": [
                  {
                    "id": "CAP4-10-00031",
                    "label": "p. 38; topic 10 point 31"
                  }
                ]
              },
              {
                "html": "The key result is 12.6825%. This is the reviewed topic result.",
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
            "html": "<p>A sinking fund builds up equal end-of-period deposits so that a structure can be rebuilt or replaced when its economic life ends. The expression i/((1 + i)<sup>n</sup> − 1) is the sinking-fund factor, a pure number that converts a target future amount F into the equal deposit A: A = F × i/((1 + i)<sup>n</sup> − 1). To accumulate NRs 100000 in five years at 10%, 1.1<sup>5</sup> = 1.61051, so A = 100000 × 0.10/0.61051 = 16379.75, about NRs 16380 a year.</p><p>A cash flow that changes by the same amount every period is an arithmetic (linear) gradient. Receipts of 40000, 45000, 50000 and 55000 rise by a constant NRs 5000, while the percentage growth falls from 5000/40000 = 12.5% to 5000/45000 ≈ 11.1%, so the series is not a geometric gradient. For a base amount a rising by b each year, the amount in year n is a + (n − 1)b, and the undiscounted total over n years is n[2a + (n − 1)b]/2.</p>",
            "moreHtml": "<p>Keep the last term and the total apart. Maintenance of NRs 10000 rising by 2000 a year costs 10000 + 3 × 2000 = 16000 in year 4, but 10000 + 12000 + 14000 + 16000 = 52000 over the four years, which agrees with 4[2(10000) + 3(2000)]/2 = 52000.</p>",
            "points": [
              {
                "html": "The key result is NRs 16380.",
                "sources": [
                  {
                    "id": "CAP4-10-00027",
                    "label": "p. 38; topic 10 point 27"
                  }
                ]
              },
              {
                "html": "The key result is NRs 16000 and NRs 52000.",
                "sources": [
                  {
                    "id": "CAP4-10-00029",
                    "label": "p. 38; topic 10 point 29"
                  }
                ]
              },
              {
                "html": "The key result is An arithmetic gradient of NRs 5000 per year.",
                "sources": [
                  {
                    "id": "CAP4-10-00129",
                    "label": "p. 41; topic 10 point 120"
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
                "id": "CAP4-10-00029",
                "label": "p. 38; topic 10 point 29"
              },
              {
                "id": "CAP4-10-00129",
                "label": "p. 41; topic 10 point 120"
              }
            ]
          },
          {
            "id": "discounted-cash-flow-npv-and-benefit-cost",
            "title": "Discounted cash flow, net present value and the benefit-cost ratio",
            "html": "<p>Discounted cash flow (DCF) values a project or company by discounting each expected cash flow to one date and adding the results. Receipts of NRs 55000 after one year and NRs 60500 after two years, at 10%, are worth 55000/1.1 = 50000 plus 60500/1.1<sup>2</sup> = 50000, a total of NRs 100000 today. That is the value of the receipts only; the investment still has to be deducted.</p><p>Net present value makes the deduction: NPV = present value of inflows − present value of outflows, at the MARR. An independent project costing NRs 90000 now, with receipts worth NRs 100000, has NPV = +NRs 10000 and passes the test. Present-worth analysis is thus a standard decision tool.</p><p>The benefit-cost ratio compares the same quantities as a ratio. Present-valued benefits of NRs 15 million against costs of NRs 12 million give B/C = 15/12 = 1.25 and a net present benefit of +NRs 3 million. B/C above 1 passes, B/C = 1 is break-even, and among mutually exclusive alternatives the highest ratio does not by itself identify the best one.</p>",
            "points": [
              {
                "html": "The key result is B/C = 1.25 and NPV = +NRs 3 million.",
                "sources": [
                  {
                    "id": "CAP4-10-00028",
                    "label": "p. 38; topic 10 point 28"
                  }
                ]
              },
              {
                "html": "The key result is NRs 100000.",
                "sources": [
                  {
                    "id": "CAP4-10-00156",
                    "label": "p. 41; topic 10 point 146"
                  }
                ]
              },
              {
                "html": "The key result is NPV is +NRs 10000, so it passes the stated economic test.",
                "sources": [
                  {
                    "id": "CAP4-10-00157",
                    "label": "p. 41; topic 10 point 147"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00028",
                "label": "p. 38; topic 10 point 28"
              },
              {
                "id": "CAP4-10-00156",
                "label": "p. 41; topic 10 point 146"
              },
              {
                "id": "CAP4-10-00157",
                "label": "p. 41; topic 10 point 147"
              }
            ]
          },
          {
            "id": "irr-marr-and-justified-reinvestment",
            "title": "Internal rate of return, MARR and justified reinvestment",
            "html": "<p>The internal rate of return (IRR) is the discount rate at which NPV equals zero. For NRs 100000 invested now that returns NRs 121000 after exactly two years, −100000 + 121000/(1 + r)<sup>2</sup> = 0, so (1 + r)<sup>2</sup> = 1.21 and r = 10% per year. Splitting the 21% two-year gain into 10.5% a year would wrongly apply simple interest.</p><p>When a project is independent and its cash flows are conventional, so that it has a single IRR, compare that IRR with the minimum attractive rate of return (MARR). An IRR of 14% against a risk-appropriate MARR of 11% corresponds to positive NPV at the MARR, so the project is acceptable on this criterion. The rule is stated for that conventional case, and IRR alone is not the right ranking tool for mutually exclusive alternatives.</p><p>Retained profit is judged the same way. Reinvestment is justified when the risk-adjusted expected return on the incremental cash flows meets the relevant opportunity cost; keeping profit inside the business does not guarantee a higher return or growth in shareholder value.</p>",
            "points": [
              {
                "html": "The key result is 10% per year.",
                "sources": [
                  {
                    "id": "CAP4-10-00018",
                    "label": "p. 38; topic 10 point 18"
                  }
                ]
              },
              {
                "html": "The key result is Accept on this economic criterion because IRR exceeds MARR.",
                "sources": [
                  {
                    "id": "CAP4-10-00024",
                    "label": "p. 38; topic 10 point 24"
                  }
                ]
              },
              {
                "html": "The key result is A risk-adjusted expected return meeting the relevant opportunity-cost criterion.",
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
            "html": "<p>Alternatives are mutually exclusive when selecting one prevents the other, as when a site can take design A or design B but not both. They must be compared on a consistent service level and analysis period, because acceptance tests designed for independent projects cannot on their own identify the best exclusive alternative.</p><p>Incremental analysis ranks feasible alternatives by investment. The lower-investment alternative becomes the defender or base, and the costlier one is judged by its extra cash flows. If machine A costs NRs 400000 and machine B NRs 550000 for the same required service, examine the B − A cash flows at the MARR over a consistent period: B's extra NRs 150000 must be justified by incremental benefits. A lower first cost does not settle the decision.</p><p>Increments are found by subtracting signed cash flows. With outflows negative, time-zero flows of −680000 for B and −500000 for A give B − A = −680000 − (−500000) = −NRs 180000. The initial increment is zero only when both alternatives happen to need the same outlay.</p>",
            "points": [
              {
                "html": "The key result is Use A as defender and assess B minus A cash flows.",
                "sources": [
                  {
                    "id": "CAP4-10-00022",
                    "label": "p. 38; topic 10 point 22"
                  }
                ]
              },
              {
                "html": "The key result is -NRs 180000.",
                "sources": [
                  {
                    "id": "CAP4-10-00026",
                    "label": "p. 38; topic 10 point 26"
                  }
                ]
              },
              {
                "html": "The key result is Mutually exclusive.",
                "sources": [
                  {
                    "id": "CAP4-10-00121",
                    "label": "p. 40; topic 10 point 114"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00022",
                "label": "p. 38; topic 10 point 22"
              },
              {
                "id": "CAP4-10-00026",
                "label": "p. 38; topic 10 point 26"
              },
              {
                "id": "CAP4-10-00121",
                "label": "p. 40; topic 10 point 114"
              }
            ]
          },
          {
            "id": "capital-budgeting-scope-and-reversibility",
            "title": "Capital budgeting: long-term commitments, working capital and reversibility",
            "html": "<p>Capital budgeting evaluates long-term investment commitments, typically fixed assets such as a treatment plant, through their multi-year incremental cash flows. It is distinct from routine cash administration such as reconciling a cash drawer, recording petty cash or matching invoices, and it concerns more than an asset's purchase price.</p><p>A project's cash requirement includes the incremental working capital it creates, for example the extra inventory and receivables of a new manufacturing plant. Enter that investment when it occurs and its recovery when it is released, often at the end of the project. Excluding it because it is a current asset overstates value; including the firm's entire existing inventory would be equally wrong, since only the increment counts.</p><p>Capital decisions are often called difficult to reverse. A specialised, installed plant may be saleable only at a large loss, so a large part of the money committed may never be recovered. That is a practical degree of sunk-cost exposure, not a legal or physical impossibility of selling or abandoning the asset.</p>",
            "points": [
              {
                "html": "The key result is Much of the committed cost may be unrecoverable.",
                "sources": [
                  {
                    "id": "CAP4-10-00037",
                    "label": "p. 38; topic 10 point 37"
                  }
                ]
              },
              {
                "html": "The key result is Include incremental working-capital investment and any eventual recovery.",
                "sources": [
                  {
                    "id": "CAP4-10-00149",
                    "label": "p. 41; topic 10 point 139"
                  }
                ]
              },
              {
                "html": "The key result is Evaluating a treatment plant's multi-year incremental cash flows.",
                "sources": [
                  {
                    "id": "CAP4-10-00153",
                    "label": "p. 41; topic 10 point 142"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00037",
                "label": "p. 38; topic 10 point 37"
              },
              {
                "id": "CAP4-10-00149",
                "label": "p. 41; topic 10 point 139"
              },
              {
                "id": "CAP4-10-00153",
                "label": "p. 41; topic 10 point 142"
              }
            ]
          },
          {
            "id": "straight-line-depreciation-and-book-value",
            "title": "Straight-line depreciation, residual value and book value",
            "html": "<p>Straight-line depreciation charges the same amount every year: D = (cost − residual)/life. An asset costing NRs 1000000 with a residual value of NRs 100000 and a five-year life gives D = 900000/5 = NRs 180000 a year. After three full years the accumulated depreciation is 540000, leaving a book value of 1000000 − 540000 = NRs 460000.</p><p>The formula works equally for long-lived works once an accounting life is assumed. A dam costing NPR 100 million, with an assumed residual value of NPR 10 million and a 90-year life, is depreciated by (100 − 10)/90 = NPR 1.0 million a year, which is 1% of its original cost.</p><p>Both results rest on stated accounting assumptions. They say nothing about Nepal's tax-depreciation pools or rates, and a quoted percentage range for a type of structure is a rough convention rather than a physical rate of deterioration.</p>",
            "points": [
              {
                "html": "The key result is NPR 1.0 million.",
                "sources": [
                  {
                    "id": "CAP4-08-00016",
                    "label": "p. 30; topic 8 point 16"
                  }
                ]
              },
              {
                "html": "The key result is NRs 180000 and NRs 460000.",
                "sources": [
                  {
                    "id": "CAP4-10-00159",
                    "label": "p. 41; topic 10 point 149"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-08-00016",
                "label": "p. 30; topic 8 point 16"
              },
              {
                "id": "CAP4-10-00159",
                "label": "p. 41; topic 10 point 149"
              }
            ]
          },
          {
            "id": "liquidity-ratios-and-debentures",
            "title": "The acid-test ratio and debentures as company debt",
            "html": "<p>The acid-test (quick) ratio asks whether a firm can meet its current liabilities from its most liquid assets. Quick assets leave out inventory and prepaid expenses, which cannot readily be turned into cash. With current assets of NRs 900000, including 300000 of inventory and 60000 of prepayments, quick assets are 900000 − 300000 − 60000 = 540000. Against current liabilities of 450000, the quick ratio is 540000/450000 = 1.20, whereas the current ratio, which keeps inventory and prepayments, is 900000/450000 = 2.00.</p><p>A debenture is a debt instrument: the company borrows and promises interest and repayment of the principal. It is not an ordinary equity share carrying ownership or an assured dividend. Debentures may be secured or unsecured, depending on the terms of the instrument and the governing law, so the name alone reveals nothing about security.</p>",
            "points": [
              {
                "html": "The key result is 1.20. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-10-00020",
                    "label": "p. 38; topic 10 point 20"
                  }
                ]
              },
              {
                "html": "The key result is A debt instrument whose security depends on its terms.",
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
            "html": "<p>That fraction is the sinking-fund factor, a pure number linking a target amount to the equal periodic deposit, not the fund itself. The deposit is A = F × i/((1 + i)<sup>n</sup> − 1); for F = NRs 100000, i = 10% and n = 5 it is about NRs 16380. The reviewed version restores the denominator and keeps the factor distinct from the target fund F.</p>",
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
            "html": "<p>a + (n − 1)b is the amount in year n only, the last term of the arithmetic series. The undiscounted total is n[2a + (n − 1)b]/2; with a = 10000, b = 2000 and n = 4, the year-4 cost is 16000 but the four-year total is 52000.</p>",
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
        "summary": "<p>Project planning and scheduling covers Project classification and life cycle, planning, bar charts, CPM and PERT, resource levelling and smoothing, monitoring, evaluation and control. The sections below reorganize the reviewed capsule material into concepts, calculations, qualifications and limits, with every mapped question linked to a key fact.</p>",
        "blocks": [
          {
            "id": "projects-versus-operations-and-classification",
            "title": "Projects versus operations, and classifying a project by its service",
            "html": "<p>A project is a temporary undertaking that creates a defined result and then ends, whereas operations are ongoing and recurring. A road package in which one contractor builds many similar culverts is still a project, because the package as a whole has a finite delivery objective. Monthly payroll that continues indefinitely is an operation, even though every payment has a deadline. Repetition at activity level does not remove project character: a project is unique as a whole but may contain repetitive activities.</p><p>Projects are classified by the primary service delivered, not by the most visible construction work. When a centre's scope is mainly computing, data networking and communication services, housed in a new building, it is an information and communication technology (ICT) infrastructure project; the building is only a delivery component. An acronym such as ICTC is ambiguous until those functional facts are stated.</p>",
            "points": [
              {
                "html": "The key result is The road package has a defined temporary delivery objective.",
                "sources": [
                  {
                    "id": "CAP4-10-00068",
                    "label": "p. 39; topic 10 point 67"
                  }
                ]
              },
              {
                "html": "The key result is Information and communication technology infrastructure.",
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
            "html": "<p>Formulation turns an identified need into criteria for comparing solutions. Once a municipality recognises unreliable water supply, it should define service objectives and measurable outcomes before selecting a treatment technology, so that each alternative can be judged against them. Diagnosing the problem and setting objectives interact, and calling objective setting the first stage is no reason to skip understanding the actual need.</p><p>Well-formed objectives are SMART: specific, measurable, achievable, relevant and time-bound. Each quality adds something the others lack, since a measurable target can still be unrealistic, irrelevant or open-ended.</p><p>Compare a vague aim to improve road safety substantially with a target to cut recorded injury crashes at a defined junction by 20% within two years. The revision adds a place, a quantity and a deadline while keeping the safety purpose. Whether 20% is achievable still depends on baseline evidence; attaching a number does not by itself make an objective SMART.</p>",
            "points": [
              {
                "html": "The key result is Define the service objectives and measurable outcomes.",
                "sources": [
                  {
                    "id": "CAP4-10-00038",
                    "label": "p. 38; topic 10 point 38"
                  }
                ]
              },
              {
                "html": "The key result is SMART. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-10-00163",
                    "label": "p. 41; topic 10 point 154"
                  }
                ]
              },
              {
                "html": "The key result is Reduce the defined junction's recorded injury crashes by 20% within two years.",
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
            "title": "Execution-phase resources and the time, cost and quality view of performance",
            "html": "<p>In a conventional construction project the execution phase mobilises labour, plant and materials to build the works, so the largest site workforce and most construction spending are normally concentrated there. The exact profile varies, for example where major equipment is bought early.</p><p>Because execution depends on people, a shortage of skilled manpower exposes an immediate resource and competence bottleneck. If approved drawings and materials are ready but qualified welders are not, progress slows and quality is at risk. Replanning, recruiting competent staff or approved subcontracting may be needed, and adding untrained labour does not necessarily remove the constraint.</p><p>Project performance is judged on time, cost and quality, which are distinct dimensions. A bridge completed on schedule and under budget that then fails its specified load test has not performed acceptably: meeting two targets cannot compensate for failing required performance or safety. Scope and stakeholder outcomes also belong in a full assessment.</p>",
            "points": [
              {
                "html": "The key result is Time and cost targets alone do not establish acceptable quality.",
                "sources": [
                  {
                    "id": "CAP4-10-00051",
                    "label": "p. 39; topic 10 point 50"
                  }
                ]
              },
              {
                "html": "The key result is Execution of the works.",
                "sources": [
                  {
                    "id": "CAP4-10-00053",
                    "label": "p. 39; topic 10 point 52"
                  }
                ]
              },
              {
                "html": "The key result is An execution-phase resource and competence bottleneck.",
                "sources": [
                  {
                    "id": "CAP4-10-00160",
                    "label": "p. 41; topic 10 point 150"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00051",
                "label": "p. 39; topic 10 point 50"
              },
              {
                "id": "CAP4-10-00053",
                "label": "p. 39; topic 10 point 52"
              },
              {
                "id": "CAP4-10-00160",
                "label": "p. 41; topic 10 point 150"
              }
            ]
          },
          {
            "id": "bar-charts-cpm-and-crash-cost-slope",
            "title": "Bar charts, deterministic CPM and the crash cost slope",
            "html": "<p>A Gantt bar chart shows activities as horizontal bars on a time scale. Such charts were in use before CPM and PERT were developed in the mid-twentieth century; that is a historical comparison with the network methods, not a claim that bar charts were the first planning method of any kind. A bare bar chart does not display precedence relationships.</p><p>CPM is activity-oriented and classically uses deterministic, single-value durations. That makes it the natural setting for time-cost trade-off analysis, in which planners estimate how extra direct cost could shorten critical activities by crashing. The network drawing itself does not distinguish CPM from PERT; the treatment of durations does.</p><p>For an activity costing NRs 60000 at a normal 8 days and NRs 90000 at a crash duration of 5 days, over a linear crash range, the cost slope is (90000 − 60000)/(8 − 5) = NRs 10000 for each day of reduction. A purchased day shortens the project only if the activity is critical and still within its crash limit, and every current critical path must be checked.</p>",
            "points": [
              {
                "html": "The key result is Gantt bar chart.",
                "sources": [
                  {
                    "id": "CAP4-10-00044",
                    "label": "p. 38; topic 10 point 44"
                  }
                ]
              },
              {
                "html": "The key result is CPM with time-cost trade-off analysis.",
                "sources": [
                  {
                    "id": "CAP4-10-00046",
                    "label": "p. 38; topic 10 point 46"
                  }
                ]
              },
              {
                "html": "The key result is NRs 10000 per day saved.",
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
            "html": "<p>In an activity-on-arrow (AOA) network each arrow is an activity and each node is an event, the instant at which activities start or finish. An arrow from event 3 to event 5 labelled excavate, 4 days, means excavation starts at event 3 and finishes at event 5. Event numbers identify the logic; they are not calendar times.</p><p>An event marks the instant when all required predecessors are complete. It is a milestone that consumes no time and no resources. A real inspection or waiting period with nonzero duration must be drawn as an activity, even if it uses little labour.</p><p>A dummy arrow takes no time and uses no resources; it exists only to keep the logic correct. If C must follow both A and B while D follows A only, start D where A ends, start C where B ends, and draw a dummy from the end of A to the start of C; C then waits for both, and D stays independent of B.</p><p>Dummies can also give distinct identities to activities that would otherwise share the same pair of events. A genuine approval or waiting period must never be disguised as a dummy.</p>",
            "points": [
              {
                "html": "The key result is Zero duration and zero resource demand.",
                "sources": [
                  {
                    "id": "CAP4-10-00041",
                    "label": "p. 38; topic 10 point 41"
                  }
                ]
              },
              {
                "html": "The key result is The arrow is the activity; the nodes are start and finish events.",
                "sources": [
                  {
                    "id": "CAP4-10-00109",
                    "label": "p. 40; topic 10 point 102"
                  }
                ]
              },
              {
                "html": "The key result is To preserve the distinct precedence logic without adding physical work.",
                "sources": [
                  {
                    "id": "CAP4-10-00123",
                    "label": "p. 40; topic 10 point 116"
                  }
                ]
              },
              {
                "html": "The key result is An event or milestone.",
                "sources": [
                  {
                    "id": "CAP4-10-00144",
                    "label": "p. 41; topic 10 point 134"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00041",
                "label": "p. 38; topic 10 point 41"
              },
              {
                "id": "CAP4-10-00109",
                "label": "p. 40; topic 10 point 102"
              },
              {
                "id": "CAP4-10-00123",
                "label": "p. 40; topic 10 point 116"
              },
              {
                "id": "CAP4-10-00144",
                "label": "p. 41; topic 10 point 134"
              }
            ]
          },
          {
            "id": "forward-pass-and-critical-path",
            "title": "Forward pass, earliest times and the critical path",
            "html": "<p>The forward pass computes earliest times from the project start. An activity cannot begin until every predecessor has finished, so its earliest start is the largest of the predecessors' earliest finishes, and EF = ES + duration. With predecessors finishing on days 6 and 9 and a 4-day successor, ES = max(6, 9) = 9 and EF = 9 + 4 = 13.</p><p>Every required path must be completed, so the longest path controls the earliest project finish; it is the critical path. Paths of 9, 12 and 10 working days give completion at day 12, not at the sum of the three.</p><p>With paths A-B-D of 3 + 5 + 4 = 12 days and A-C-D of 3 + 7 + 4 = 14 days, the project takes 14 days, the sum of the durations along the critical path. Adding every distinct activity, 3 + 5 + 7 + 4 = 19, wrongly treats the parallel activities B and C as sequential.</p>",
            "moreHtml": "<p>Elapsed working-day notation, in which an activity starting at day 9 and lasting 4 days finishes at day 13, avoids the off-by-one adjustment needed with inclusive calendar dates.</p>",
            "points": [
              {
                "html": "The key result is The 12-day path.",
                "sources": [
                  {
                    "id": "CAP4-10-00040",
                    "label": "p. 38; topic 10 point 40"
                  }
                ]
              },
              {
                "html": "The key result is Day 9 and day 13.",
                "sources": [
                  {
                    "id": "CAP4-10-00048",
                    "label": "p. 38; topic 10 point 47"
                  }
                ]
              },
              {
                "html": "The key result is 14 days.",
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
                "id": "CAP4-10-00040",
                "label": "p. 38; topic 10 point 40"
              },
              {
                "id": "CAP4-10-00048",
                "label": "p. 38; topic 10 point 47"
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
            "html": "<p>The backward pass starts from the chosen project finish, usually the earliest completion from the forward pass, and works back to latest allowable times. An activity must finish in time for every successor, so its latest finish is the smallest of its successors' latest starts. With successors whose latest starts are days 18 and 15, LF = min(18, 15) = day 15.</p><p>Then LS = LF − duration, or equivalently LF = LS + duration, so an activity with LS = 9 and a 4-day duration has LF = 13.</p><p>In AOA event form, each outgoing activity supplies a candidate, the successor's latest time minus that activity's duration. Suppose event J has two outgoing activities of 4 and 5 days, ending at events whose latest times are 15 and 18. The candidates are 15 − 4 = 11 and 18 − 5 = 13, so the latest allowable time of J is the smaller, day 11.</p><p>Latest values therefore come from a backward pass, but that pass needs a finish boundary, which the forward pass commonly supplies. Both passes belong to the analysis.</p>",
            "points": [
              {
                "html": "The key result is Day 15.",
                "sources": [
                  {
                    "id": "CAP4-09-00060",
                    "label": "p. 35; topic 9 point 59"
                  }
                ]
              },
              {
                "html": "The key result is Day 11.",
                "sources": [
                  {
                    "id": "CAP4-10-00103",
                    "label": "p. 40; topic 10 point 95"
                  }
                ]
              },
              {
                "html": "The key result is A backward pass from the finish, using successor constraints.",
                "sources": [
                  {
                    "id": "CAP4-10-00141",
                    "label": "p. 41; topic 10 point 131"
                  }
                ]
              },
              {
                "html": "The key result is Day 13.",
                "sources": [
                  {
                    "id": "CAP4-10-00165",
                    "label": "p. 41; topic 10 point 155"
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
                "id": "CAP4-10-00103",
                "label": "p. 40; topic 10 point 95"
              },
              {
                "id": "CAP4-10-00141",
                "label": "p. 41; topic 10 point 131"
              },
              {
                "id": "CAP4-10-00165",
                "label": "p. 41; topic 10 point 155"
              }
            ]
          },
          {
            "id": "total-float-free-float-and-event-slack",
            "title": "Total float, free float and event slack",
            "html": "<p>Total float is the delay an activity can absorb without delaying the project finish. For ES = 4, a 5-day duration and LF = 12, EF = 9 and LS = 7, so TF = 12 − 9 = 7 − 4 = 3 days. Free float is the delay that still lets every successor start at its earliest time: an activity with EF = 7 whose earliest successor starts on day 10 has FF = 10 − 7 = 3 days.</p><table><thead><tr><th scope='col'>Measure</th><th scope='col'>Formula</th><th scope='col'>What it protects</th></tr></thead><tbody><tr><th scope='row'>Total float</th><td>LF − EF = LS − ES</td><td>The project finish</td></tr><tr><th scope='row'>Free float</th><td>Earliest successor ES − EF</td><td>Successors' earliest starts</td></tr><tr><th scope='row'>Event slack</th><td>Latest − earliest time of one event</td><td>The timing of that event</td></tr></tbody></table><p>In an ordinary zero-lag network whose finish is set at the earliest completion, TF ≥ FF, and the two can be equal. A critical activity with EF = LF = 8 and a successor starting on day 8 has TF = 0 and FF = 0. An event whose earliest and latest times are 8 and 11 has a slack of 11 − 8 = 3 days. Imposed deadlines can create negative float, which needs separate treatment.</p>",
            "points": [
              {
                "html": "The key result is 3 days.",
                "sources": [
                  {
                    "id": "CAP4-10-00036",
                    "label": "p. 38; topic 10 point 36"
                  }
                ]
              },
              {
                "html": "The key result is 3 days.",
                "sources": [
                  {
                    "id": "CAP4-10-00042",
                    "label": "p. 38; topic 10 point 42"
                  }
                ]
              },
              {
                "html": "The key result is Both can be zero, so TF need not be strictly greater than FF.",
                "sources": [
                  {
                    "id": "CAP4-10-00116",
                    "label": "p. 40; topic 10 point 109"
                  }
                ]
              },
              {
                "html": "The key result is 3 days.",
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
                "id": "CAP4-10-00036",
                "label": "p. 38; topic 10 point 36"
              },
              {
                "id": "CAP4-10-00042",
                "label": "p. 38; topic 10 point 42"
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
            "html": "<p>Classical PERT treats durations as uncertain and uses three estimates per activity: optimistic t<sub>o</sub>, most likely t<sub>m</sub> and pessimistic t<sub>p</sub>. The duration of an individual activity is approximated by a bounded beta-type distribution. A normal approximation may be used, under further assumptions, for the total duration of a path, not for each activity.</p><p>The expected duration weights the most likely estimate four times: t<sub>e</sub> = (t<sub>o</sub> + 4t<sub>m</sub> + t<sub>p</sub>)/6. For estimates of 2, 5 and 14 days, t<sub>e</sub> = (2 + 20 + 14)/6 = 36/6 = 6 days. Without the divisor the numerator, 36, is not a duration estimate at all.</p><p>Spread is described by the standard deviation, the positive square root of the variance. A variance of 16 days² gives √16 = 4 days; taking the root returns the units from squared time to time.</p>",
            "points": [
              {
                "html": "The key result is A bounded beta-type approximation using three estimates.",
                "sources": [
                  {
                    "id": "CAP4-10-00039",
                    "label": "p. 38; topic 10 point 39"
                  }
                ]
              },
              {
                "html": "The key result is 6 days.",
                "sources": [
                  {
                    "id": "CAP4-10-00050",
                    "label": "p. 39; topic 10 point 49"
                  }
                ]
              },
              {
                "html": "The key result is 4 days.",
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
            "html": "<p>Both techniques reshape resource demand, but they hold different things fixed. Resource levelling treats resource availability as the hard constraint. If two parallel tasks each need the only crane for their whole duration and no second crane exists, one must wait, and the project finish may move later to respect the limit.</p><p>Resource smoothing keeps the required project finish fixed and moves only noncritical work within its available float. Shifting a noncritical task two days inside its float to reduce a labour peak, while holding the finish date, is smoothing. It cannot always remove a peak: when float runs out, a hard resource limit can be met only by levelling.</p><p>A quick test separates them. If the finish date may change so that the resource limit is respected, the operation is levelling; if the finish date is protected and float is used, it is smoothing.</p>",
            "points": [
              {
                "html": "The key result is Resource levelling.",
                "sources": [
                  {
                    "id": "CAP4-10-00035",
                    "label": "p. 38; topic 10 point 35"
                  }
                ]
              },
              {
                "html": "The key result is Resource smoothing.",
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
            "title": "Monitoring and control: earned value terms, SPI and critical ratio",
            "html": "<p>Earned-value control compares three measures at a status date. BCWS, the planned value, is the budgeted cost of work scheduled; BCWP, the earned value, is the budgeted cost of work actually performed; ACWP is the actual cost incurred for that work. If completed work has a baseline value of NRs 400000 but actually cost NRs 460000, BCWP = 400000 and ACWP = 460000; completing the work does not turn its budget into its actual cost.</p><p>The schedule performance index is SPI = BCWP/BCWS. With BCWP = 600000 and BCWS = 800000, SPI = 0.75, meaning less work has been earned than planned. SPI compares budgeted values only, so it says nothing about actual spending and does not mean the finish date is exactly 25% late.</p><p>Critical ratio scheduling sets priorities among jobs using time remaining until due divided by work remaining. Job X, due in 6 days with 8 days of work left, has 6/8 = 0.75; job Y, due in 8 days with 4 days left, has 8/4 = 2. The smaller ratio goes first, so X is more urgent, and a ratio below 1 signals insufficient time at the assumed rate.</p>",
            "points": [
              {
                "html": "The key result is 0.75, indicating less earned work than planned.",
                "sources": [
                  {
                    "id": "CAP4-10-00032",
                    "label": "p. 38; topic 10 point 32"
                  }
                ]
              },
              {
                "html": "The key result is NRs 460000, the actual cost incurred.",
                "sources": [
                  {
                    "id": "CAP4-10-00034",
                    "label": "p. 38; topic 10 point 34"
                  }
                ]
              },
              {
                "html": "The key result is X, with a critical ratio of 0.75.",
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
                "id": "CAP4-10-00032",
                "label": "p. 38; topic 10 point 32"
              },
              {
                "id": "CAP4-10-00034",
                "label": "p. 38; topic 10 point 34"
              },
              {
                "id": "CAP4-10-00043",
                "label": "p. 38; topic 10 point 43"
              }
            ]
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
            "html": "<p>The extracted point lost its divisor. The expected PERT time is t<sub>e</sub> = (t<sub>o</sub> + 4t<sub>m</sub> + t<sub>p</sub>)/6, and the complete page text places 6 beneath the numerator. With 2, 5 and 14 days the numerator is 36 but the expected time is 6 days.</p>",
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
        "summary": "<p>Project management covers Information systems, risk analysis and management, project financing, tendering and contract management. The sections below reorganize the reviewed capsule material into concepts, calculations, qualifications and limits, with every mapped question linked to a key fact.</p>",
        "blocks": [
          {
            "id": "risk-as-variability-and-timing-of-analysis",
            "title": "Measuring risk as variability, and when to analyse project risk",
            "html": "<p>In finance, one common measure of risk is the variability of returns around their expected value. Two investments with the same 10% expected return can differ sharply. If the first returns 8% or 12% with equal probability, each outcome deviates by 2 points, so the variance is 0.5(2<sup>2</sup> + 2<sup>2</sup>) = 4 and the standard deviation 2 percentage points.</p><p>If the second returns 4% or 16%, each deviates by 6 points, the variance is 36 and the standard deviation 6 percentage points, so it is riskier on this measure. Variability is one financial risk measure, not a complete definition of project risk.</p><p>Detailed risk analysis is most useful during planning, while alternatives such as two possible intake sites remain open and controls can still shape the design. It is not a one-time formality: risks change through design, construction and operation, so the assessment is monitored and updated as design and evidence develop.</p>",
            "points": [
              {
                "html": "The key result is The second: standard deviations are 6 versus 2 percentage points.",
                "sources": [
                  {
                    "id": "CAP4-06-00078",
                    "label": "p. 25; topic 6 point 77"
                  }
                ]
              },
              {
                "html": "The key result is During planning, with updates as design and evidence change.",
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
            "html": "<p>Risk assessment estimates what can go wrong; risk management decides what to do about it. A utility that compares source substitution, treatment and exposure restrictions for a contaminated supply, weighing effectiveness, feasibility and stakeholder impacts, is managing risk. Hazard identification and exposure or toxicity assessment feed evidence into that decision rather than make it, and the chosen controls still need implementation and monitoring.</p><p>Treatment needs accountable owners. A risk manager coordinates identification, assessment and follow-up, but a mitigation that requires design changes and director-approved funding must be assigned to named owners with the authority, resources and deadline to deliver it. An action is closed on verified implementation, not when funding is approved.</p><p>Continuous improvement applies the same evidence loop to working processes: analyse recurring defects, trial a revised procedure, measure the results and standardise the change only if performance improves. It is broader than making plans more detailed over time, and an unmeasured change is not necessarily an improvement.</p>",
            "points": [
              {
                "html": "The key result is Risk management through evaluation of control alternatives.",
                "sources": [
                  {
                    "id": "CAP4-06-00085",
                    "label": "p. 25; topic 6 point 84"
                  }
                ]
              },
              {
                "html": "The key result is Assign action owners and resources, with risk-manager coordination and follow-up.",
                "sources": [
                  {
                    "id": "CAP4-06-00132",
                    "label": "p. 26; topic 6 point 136"
                  }
                ]
              },
              {
                "html": "The key result is Continuous improvement.",
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
            "html": "<p>Project appraisal evaluates a proposal's viability and risks before any commitment is made. A bank considering a loan looks at expected demand, construction risk, operating cash flow, security and debt-service capacity. For a financial institution this is the key study for managing its risk, because the central question is the quality and resilience of repayment cash flows, not an optimistic profit estimate or a completed site drawing.</p><p>The project sponsor is the senior representative who secures funding, champions the business case and resolves decisions beyond the project manager's authority. The sponsor links the project to its business justification and provides organisational support. The role is broader than processing invoices, and it does not mean that the sponsor personally lends every unit of the project's finance.</p>",
            "points": [
              {
                "html": "The key result is Project appraisal.",
                "sources": [
                  {
                    "id": "CAP4-10-00056",
                    "label": "p. 39; topic 10 point 55"
                  }
                ]
              },
              {
                "html": "The key result is Project sponsor.",
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
            "html": "<p>A contract is an agreement that creates legally enforceable obligations under the applicable law. Enforceability, including the legal requirements for forming a contract, is what separates it from an informal understanding; the size of the paper, the title of the document and the type of work do not. Whether writing is required depends on the governing law.</p><p>This explains the rule that all contracts are agreements, but not all agreements are contracts. Friends who agree socially to meet for lunch ordinarily have no intention of creating legal obligations. Their friendship would not, however, prevent them from making a separate, genuine commercial contract.</p><p>Disputes need not end in court. Depending on the governing law and a valid contract, negotiation, adjudication or arbitration can settle the merits. Where a contract provides negotiation followed by binding arbitration, courts may keep specified supervisory or enforcement roles, but litigation is not the inevitable final stage of every contract dispute.</p>",
            "points": [
              {
                "html": "The key result is Its agreement creates legally enforceable obligations.",
                "sources": [
                  {
                    "id": "CAP4-10-00058",
                    "label": "p. 39; topic 10 point 57"
                  }
                ]
              },
              {
                "html": "The key result is Arbitration can resolve the merits, with only limited court involvement.",
                "sources": [
                  {
                    "id": "CAP4-10-00107",
                    "label": "p. 40; topic 10 point 99"
                  }
                ]
              },
              {
                "html": "The key result is A contract requires an agreement that is legally enforceable.",
                "sources": [
                  {
                    "id": "CAP4-10-00134",
                    "label": "p. 41; topic 10 point 124"
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
                "id": "CAP4-10-00107",
                "label": "p. 40; topic 10 point 99"
              },
              {
                "id": "CAP4-10-00134",
                "label": "p. 41; topic 10 point 124"
              }
            ]
          },
          {
            "id": "subcontracting-mobilisation-advance-and-liquidated-damages",
            "title": "Subcontracting, mobilisation advance and liquidated damages",
            "html": "<p>In subcontracting, a main contractor engages a specialist through a separate agreement to perform a defined part of its works, such as the electrical installation. The main contractor keeps its contract with the employer and is not released from its obligations; consent and responsibility follow the governing contract. Novating the entire contract, or transferring the employer's obligation to pay, are different arrangements.</p><p>A mobilisation advance is paid by the client after the agreement is signed and before substantial work begins, so that the contractor can deploy people and equipment. It is normally administered with agreed security and recovery provisions and is neither payment for measured work nor an unconditional extra fee.</p><p>Liquidated damages are damages agreed in the contract for delay beyond the completion date. Take a valid contract whose delay damages are 0.05% of a NRs 40 million price for each assessable day, with a ceiling of 10% of the price. The daily amount is 40000000 × 0.0005 = NRs 20000.</p><p>Completion 30 days after the original date with an approved 10-day extension leaves, on the stated assumption, 20 assessable days, so the damages are 20 × 20000 = NRs 400000, well below the cap of 0.10 × 40000000 = NRs 4000000.</p>",
            "points": [
              {
                "html": "The key result is Subcontracting. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-10-00052",
                    "label": "p. 39; topic 10 point 51"
                  }
                ]
              },
              {
                "html": "The key result is NRs 400000.",
                "sources": [
                  {
                    "id": "CAP4-10-00108",
                    "label": "p. 40; topic 10 point 100; topic 10 point 101"
                  }
                ]
              },
              {
                "html": "The key result is Mobilisation advance.",
                "sources": [
                  {
                    "id": "CAP4-10-00167",
                    "label": "p. 42; topic 10 point 157"
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
                "id": "CAP4-10-00108",
                "label": "p. 40; topic 10 point 100; topic 10 point 101"
              },
              {
                "id": "CAP4-10-00167",
                "label": "p. 42; topic 10 point 157"
              }
            ]
          },
          {
            "id": "epc-boot-ppp-and-organisational-labels",
            "title": "Delivery models and organisational labels: EPC, BOOT, PPP and semi-government",
            "html": "<p>EPC stands for engineering, procurement and construction: one package places design development, equipment and material sourcing, and delivery of the built facility with one party. The acronym settles nothing about ownership, operating rights or long-term financing.</p><p>BOOT (build-own-operate-transfer) is a concession in which the concessionaire builds the facility, owns and operates it for a defined period, and then transfers it. Handing the construction of a public road to a government body, even on a fast-track basis, involves none of these ownership and operation features and so is not evidence of BOOT.</p><p>A public-private partnership (PPP) is a contractual arrangement in which a public authority and a private entity delivering the project share defined responsibilities and allocated risks. Political parties can be stakeholders in public debate, but they are not the partners that define a PPP.</p><p>A label such as semi-government describes an organisation with mixed public and private involvement, but it is not one universal legal form. Actual management authority must be read from the constituting law, ownership and governance documents, not inferred from the label or an assumed ownership split.</p>",
            "points": [
              {
                "html": "The key result is Engineering, procurement and construction.",
                "sources": [
                  {
                    "id": "CAP4-10-00054",
                    "label": "p. 39; topic 10 point 53"
                  }
                ]
              },
              {
                "html": "The key result is The concessionaire builds, owns, operates and later transfers it.",
                "sources": [
                  {
                    "id": "CAP4-10-00055",
                    "label": "p. 39; topic 10 point 54"
                  }
                ]
              },
              {
                "html": "The key result is Its constituting law, ownership and governance documents.",
                "sources": [
                  {
                    "id": "CAP4-10-00111",
                    "label": "p. 40; topic 10 point 104"
                  }
                ]
              },
              {
                "html": "The key result is A public authority and a private project entity.",
                "sources": [
                  {
                    "id": "CAP4-10-00147",
                    "label": "p. 41; topic 10 point 137"
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
                "id": "CAP4-10-00111",
                "label": "p. 40; topic 10 point 104"
              },
              {
                "id": "CAP4-10-00147",
                "label": "p. 41; topic 10 point 137"
              }
            ]
          },
          {
            "id": "consultant-selection-rfp-and-prequalification",
            "title": "Consultant selection and bidder screening: QCBS, RFP and prequalification",
            "html": "<p>Quality- and Cost-Based Selection (QCBS) is a recognised method for selecting consultants. It combines the evaluation of technical quality with the evaluation of price, using weights disclosed in the procurement rules. The word quantity has no place in its name, and no particular weighting is presented here as statutory.</p><p>A Request for Proposal (RFP) is sent by the procuring entity to shortlisted consultants. It describes the services, the submission requirements and the evaluation criteria, and invites the technical and financial proposal that the procedure requires. It is not an invoice, a payment certificate or an assurance of award.</p><p>Prequalification is the implementing agency's check, before priced bids are invited, that firms are eligible and capable of carrying out a complex contract. Firms are screened against published criteria such as experience, key personnel, equipment and financial capacity. Prequalification neither awards the contract nor decides whether a later bid will be responsive.</p>",
            "points": [
              {
                "html": "The key result is Quality- and Cost-Based Selection.",
                "sources": [
                  {
                    "id": "CAP4-10-00059",
                    "label": "p. 39; topic 10 point 58"
                  }
                ]
              },
              {
                "html": "The key result is Prequalification. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-10-00062",
                    "label": "p. 39; topic 10 point 61"
                  }
                ]
              },
              {
                "html": "The key result is Request for Proposal.",
                "sources": [
                  {
                    "id": "CAP4-10-00112",
                    "label": "p. 40; topic 10 point 105"
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
                "id": "CAP4-10-00062",
                "label": "p. 39; topic 10 point 61"
              },
              {
                "id": "CAP4-10-00112",
                "label": "p. 40; topic 10 point 105"
              }
            ]
          },
          {
            "id": "procurement-methods-and-bid-validity",
            "title": "Procurement method thresholds and the meaning of bid validity",
            "html": "<p>The procurement method for Nepal public works must rest on its legal authority: the Public Procurement Act 2063 and Public Procurement Rules 2064, with their applicable amendments, together with the procurement conditions and relevant date. An estimate of NRs 18 million does not justify sealed quotations merely because a revision note mentions 20 million. A PPMO national competitive bidding template for works above NRs 20 million is a different instrument and does not establish a sealed-quotation ceiling of 20 million.</p><p>Bid validity is the period for which a bidder's offer remains binding under the bidding conditions, counted from the stated submission deadline; an issued Bid Data Sheet may specify 90 days. It is separate from the construction period, the defects liability period and the validity of the bid security, which may need to run beyond the bid-validity period.</p><p>Thresholds also demand careful units. One crore is ten million, so an estimate of 9 crore is NRs 90 million, below a stated band of up to NRs 100 million. That is arithmetic only: whether such a band applies must be checked in the operative rules and the issued Bid Data Sheet.</p>",
            "points": [
              {
                "html": "The key result is The applicable Act, amended Rules and procurement conditions.",
                "sources": [
                  {
                    "id": "CAP4-10-00045",
                    "label": "p. 38; topic 10 point 45"
                  }
                ]
              },
              {
                "html": "The key result is How long the offer must remain binding under the bidding conditions.",
                "sources": [
                  {
                    "id": "CAP4-10-00118",
                    "label": "p. 40; topic 10 point 111"
                  }
                ]
              },
              {
                "html": "The key result is It is NRs 90 million and falls within the stated band.",
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
            "html": "<p>A price adjustment needs more than a long contract period. Before certifying an adjustment on an 18-month contract with a valid clause based on published input indices, check the applicable clause, the eligible work, the base date and the indices with their weights. Duration may matter under an applicable procurement provision, but it neither calculates nor authorises a payment by itself, and neither a contractor's reported loss nor the latest price of one item is the basis.</p><p>Blacklisting is a statutory power. Under section 63(1) of the Public Procurement Act 2063 (the Law Commission's consolidated text, which includes the Second Amendment 2083), the Public Procurement Monitoring Office (PPMO) holds the power to blacklist on the statutory grounds, and section 63(5) leaves the further procedure to be prescribed. A procuring entity's recommendation is not itself the blacklisting decision, and company registration and professional regulation are separate powers held by other bodies.</p>",
            "points": [
              {
                "html": "The key result is The applicable clause, eligible work, base date and indices.",
                "sources": [
                  {
                    "id": "CAP4-10-00060",
                    "label": "p. 39; topic 10 point 59"
                  }
                ]
              },
              {
                "html": "The key result is Public Procurement Monitoring Office.",
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
        "summary": "<p>Engineering professional practice covers Environment and society, professional ethics, regulatory environment, contemporary engineering issues, occupational health and safety, and roles of the Nepal Engineers Association. The sections below reorganize the reviewed capsule material into concepts, calculations, qualifications and limits, with every mapped question linked to a key fact.</p>",
        "blocks": [
          {
            "id": "social-impact-and-toxicity-evaluation",
            "title": "Social impact assessment and the steps of toxicity evaluation",
            "html": "<p>Social impact assessment (SIA) examines how a new infrastructure project affects people: displaced households, divided community access, changed livelihoods, local institutions and vulnerable groups, and how these effects are distributed among groups. It works through participation and proposes mitigation. SIA complements environmental and technical studies; a large total economic benefit does not replace it.</p><p>Evaluating a chemical's toxicity begins with hazard identification, which asks whether the substance can cause an adverse effect at all, followed by dose-response assessment, which characterises how the effect changes with dose. Judging the risk in an actual situation needs further steps, exposure assessment and risk characterisation. These studies inform risk management decisions but do not make them.</p>",
            "points": [
              {
                "html": "The key result is Social impact assessment.",
                "sources": [
                  {
                    "id": "CAP4-10-00064",
                    "label": "p. 39; topic 10 point 63"
                  }
                ]
              },
              {
                "html": "The key result is Hazard identification followed by dose-response assessment.",
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
            "html": "<p>Ethics studies moral principles, responsibilities and justified conduct, including how they apply to social issues. When an engineer balances public safety, fair access and honest reporting in recommending a project, the moral basis of those judgments is an ethical question. Legal compliance and financial efficiency matter, but neither exhausts it.</p><p>Professionalism combines competence, ethical responsibility and service. Personal development is compatible with it: an engineer who seeks promotion by improving competence, while keeping public-safety and ethical duties paramount, strengthens rather than weakens the profession. Ambition becomes a problem only when it overrides those duties, for example through inaccurate certification to please an employer, and seeking advancement never replaces the continuing duty to maintain competence.</p>",
            "points": [
              {
                "html": "The key result is Compatible with professionalism when duties remain paramount.",
                "sources": [
                  {
                    "id": "CAP4-10-00076",
                    "label": "p. 39; topic 10 point 71"
                  }
                ]
              },
              {
                "html": "The key result is Ethics. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-10-00128",
                    "label": "p. 40; topic 10 point 119"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00076",
                "label": "p. 39; topic 10 point 71"
              },
              {
                "id": "CAP4-10-00128",
                "label": "p. 40; topic 10 point 119"
              }
            ]
          },
          {
            "id": "integrity-impartiality-and-vicarious-liability",
            "title": "Integrity, impartiality and an employer's vicarious liability",
            "html": "<p>Professional independence means assessing work honestly on its merits. An undisclosed payment from a supplier for approving nonconforming materials is an improper inducement: the engineer must reject it and follow the proper reporting process. The capsule states the principle as upholding the honour and dignity of the profession with zero tolerance for bribery, fraud and corruption.</p><p>The conduct principles of NEC Rule 18 do not turn such a payment into legitimate remuneration because it is privately agreed, offset against an invoice or financially helpful to the client.</p><p>Impartiality means applying the disclosed technical and ethical criteria equally. Two technically equivalent proposals from supporters of opposing political parties must be judged on the same criteria; an engineer's own politics, or an applicant's influence, never justifies biased certification, procurement assessment or treatment of clients.</p><p>Where a legal rule of vicarious liability applies, an employer bears responsibility for negligence that an employee commits while acting in the course of employment. Liability passes through the employment relationship under the governing law; it does not extend to every private act an employee performs outside that context.</p>",
            "points": [
              {
                "html": "The key result is Vicarious liability.",
                "sources": [
                  {
                    "id": "CAP4-10-00067",
                    "label": "p. 39; topic 10 point 66"
                  }
                ]
              },
              {
                "html": "The key result is Reject the inducement and follow the proper reporting process.",
                "sources": [
                  {
                    "id": "CAP4-10-00077",
                    "label": "p. 39; topic 10 point 72"
                  }
                ]
              },
              {
                "html": "The key result is The disclosed technical and ethical criteria applied impartially.",
                "sources": [
                  {
                    "id": "CAP4-10-00119",
                    "label": "p. 40; topic 10 point 112"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00067",
                "label": "p. 39; topic 10 point 66"
              },
              {
                "id": "CAP4-10-00077",
                "label": "p. 39; topic 10 point 72"
              },
              {
                "id": "CAP4-10-00119",
                "label": "p. 40; topic 10 point 112"
              }
            ]
          },
          {
            "id": "accident-records-and-ppe-in-control-hierarchy",
            "title": "Accident records and the place of PPE in the hierarchy of controls",
            "html": "<p>A workplace accident book keeps a dated, factual record of each accident: time, place, the people involved, what happened and the actions taken. Its professional purpose is to support investigation, required reporting and prevention. It may later serve as evidence, but it neither decides legal fault from the first entry nor replaces emergency response and preventive follow-up.</p><p>Where workers face falling objects and unguarded openings, personal protective equipment (PPE) such as helmets is necessary but is generally the last line of defence in the hierarchy of controls. Eliminate hazards where possible, install collective protection such as guarding for openings, and use suitable PPE alongside those measures.</p><p>The PPE itself must match the assessed risk and be properly selected, fitted, explained through training, inspected and enforced; a signed receipt for issued helmets proves none of this, and PPE is not something to provide only after an injury has shown that a hazard is real.</p>",
            "points": [
              {
                "html": "The key result is Maintain a dated factual record supporting investigation and reporting.",
                "sources": [
                  {
                    "id": "CAP4-09-00113",
                    "label": "p. 36; topic 9 point 109"
                  }
                ]
              },
              {
                "html": "The key result is Use suitable PPE alongside elimination, guarding and other effective controls.",
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
            "html": "<p>Copyright is a legal framework protecting original works of authorship. In an engineer's technical manual it protects the original expression, such as the wording and drawings, subject to the law's limits and exceptions. It does not protect the abstract idea or method explained, the numerical facts themselves, or structures built by applying the method.</p><p>This idea-expression distinction allows wide use of techniques. An engineer may apply a design method described in a copyrighted article and write an independently worded explanation of it. Popularity of the technique does not end copyright in the article, so copying its text or figures wholesale, or presenting the author's words as one's own, remains wrong. Patents, design rights, licences and exceptions raise separate questions.</p><p>For a first violation of section 25, section 27(1) of Nepal's Copyright Act 2059 provides a fine of NRs 10000 to 100000, imprisonment of up to six months, or both. The higher range of NRs 20000 to 200000 and up to one year applies to repeat violations. Confiscation and compensation under section 27 are additional matters that this penalty does not replace.</p>",
            "points": [
              {
                "html": "The key result is NRs 10000-100000 fine, up to 6 months' imprisonment, or both.",
                "sources": [
                  {
                    "id": "CAP4-10-00075",
                    "label": "p. 39; topic 10 point 70"
                  }
                ]
              },
              {
                "html": "The key result is The original expression, subject to the law's limits and exceptions.",
                "sources": [
                  {
                    "id": "CAP4-10-00104",
                    "label": "p. 40; topic 10 point 96"
                  }
                ]
              },
              {
                "html": "The key result is Apply the technique and write an independently worded explanation.",
                "sources": [
                  {
                    "id": "CAP4-10-00110",
                    "label": "p. 40; topic 10 point 103"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00075",
                "label": "p. 39; topic 10 point 70"
              },
              {
                "id": "CAP4-10-00104",
                "label": "p. 40; topic 10 point 96"
              },
              {
                "id": "CAP4-10-00110",
                "label": "p. 40; topic 10 point 103"
              }
            ]
          },
          {
            "id": "labour-act-working-time-and-rest",
            "title": "Labour Act 2074: ordinary working time and rest after five hours",
            "html": "<p>Nepal's labour-law framework studied here is the Labour Act, 2074. The year in its title identifies the enactment. It does not show that no later amendment, rule or notice affects the present position, because enactment and most recent amendment are different dates.</p><p>Section 28 limits ordinary working time to 8 hours a day and 48 hours a week. Overtime is regulated separately, so describing eight hours as an absolute ceiling covering every lawful overtime arrangement is misleading.</p><p>Section 28(2) requires a half-hour rest after five hours of continuous work. Where work must go on without stopping, subsection (3) provides breaks by rotation, and subsection (4) treats both kinds of break as part of ordinary working time. Continuous operation therefore affects how breaks are timetabled, not whether workers receive them.</p>",
            "points": [
              {
                "html": "The key result is 8 hours daily and 48 hours weekly.",
                "sources": [
                  {
                    "id": "CAP4-10-00073",
                    "label": "p. 39; topic 10 point 70"
                  }
                ]
              },
              {
                "html": "The key result is Half an hour counted as working time, with rotation for continuous operations.",
                "sources": [
                  {
                    "id": "CAP4-10-00074",
                    "label": "p. 39; topic 10 point 70"
                  }
                ]
              },
              {
                "html": "The key result is Labour Act, 2074.",
                "sources": [
                  {
                    "id": "CAP4-10-00161",
                    "label": "p. 41; topic 10 point 152"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00073",
                "label": "p. 39; topic 10 point 70"
              },
              {
                "id": "CAP4-10-00074",
                "label": "p. 39; topic 10 point 70"
              },
              {
                "id": "CAP4-10-00161",
                "label": "p. 41; topic 10 point 152"
              }
            ]
          },
          {
            "id": "ordinances-under-article-114",
            "title": "Ordinances under Article 114 of Nepal's Constitution",
            "html": "<p>An ordinance is a temporary legal instrument, and Article 114(2) of the Constitution limits how long it can operate. Clauses (a) and (b) deal with an ordinance ending earlier, through non-acceptance or repeal by the President. If neither has occurred, clause (c) makes the ordinance inactive sixty days after the prescribed meeting date of both Houses.</p><p>If the federal Houses first meet on different dates, the explanation to Article 114 counts from the meeting of whichever House meets later. The earlier House's meeting, the Cabinet's recommendation and the President's promulgation are not the trigger.</p><p>The sixty-day rule limits the life of an ordinance. It is not a general deadline within which every bill or act forwarded by the Council of Ministers must be passed. This reading follows the Law Commission consolidation of the Constitution through the Second Amendment 2077.</p>",
            "points": [
              {
                "html": "The key result is It becomes inactive sixty days after the prescribed meeting date of both Houses.",
                "sources": [
                  {
                    "id": "CAP4-10-00130",
                    "label": "p. 41; topic 10 point 121"
                  }
                ]
              },
              {
                "html": "The key result is The date on which the later House meets.",
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
            "title": "Companies Act 2063: one-person incorporation and the private-company shareholder cap",
            "html": "<p>Nepal's Companies Act 2063 permits a private company to be incorporated by a single shareholder under section 3(1), so two founding shareholders are not required. That permission concerns only the minimum ownership count. The company still has its statutory filing duties, and its separate legal personality and limited liability remain subject to the Act and its lawful exceptions.</p><p>The general upper limit is in section 9(1). In the consolidation that includes the 2081 amendment it is one hundred and one counted shareholders, replacing the older limit of 50. Under section 9(3), certain holders under employee share plans, qualifying former employees among them, are left out of the count, and section 9(1A) contains a separate transitional exception for transport businesses.</p><p>The cap is therefore not an exceptionless limit on every name in the share register, and it does not affect the section 3(1) permission to incorporate alone.</p>",
            "points": [
              {
                "html": "The key result is A private company need not begin with two shareholders.",
                "sources": [
                  {
                    "id": "CAP4-10-00151",
                    "label": "p. 41; topic 10 point 141"
                  }
                ]
              },
              {
                "html": "The key result is 101 counted shareholders.",
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
            "html": "<p>The Nepal Engineers' Association (NEA) describes itself as a professional association of Nepalese engineers registered under the Social Service Act, supporting professional development and advocacy. The Nepal Engineering Council (NEC) is the statutory engineering regulator, with the establishment and functions set out in sections 3–4 and 9 of its Act.</p><p>The two roles are not interchangeable. However NEA names or counts its membership categories, an association membership grade is not NEC registration and gives no authority to practise; an engineer who has not completed NEC registration cannot rely on membership instead.</p><p>NEA's official introduction also lists discipline-specific partner societies among national professional bodies, including the electrical engineers' society SEEN. SEEN is therefore an electrical-engineering professional society. Like NEA itself, it acquires none of NEC's statutory registration powers.</p>",
            "points": [
              {
                "html": "The key result is It is an electrical-engineering professional society.",
                "sources": [
                  {
                    "id": "CAP4-10-00069",
                    "label": "p. 39; topic 10 point 68"
                  }
                ]
              },
              {
                "html": "The key result is NEA represents the profession; NEC exercises statutory regulation.",
                "sources": [
                  {
                    "id": "CAP4-10-00070",
                    "label": "p. 39; topic 10 point 69"
                  }
                ]
              },
              {
                "html": "The key result is Association membership does not substitute for statutory registration.",
                "sources": [
                  {
                    "id": "CAP4-10-00072",
                    "label": "p. 39; topic 10 point 69"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00069",
                "label": "p. 39; topic 10 point 68"
              },
              {
                "id": "CAP4-10-00070",
                "label": "p. 39; topic 10 point 69"
              },
              {
                "id": "CAP4-10-00072",
                "label": "p. 39; topic 10 point 69"
              }
            ]
          },
          {
            "id": "nea-committee-term-and-quorum-arithmetic",
            "title": "NEA governance facts: executive committee term and quorum arithmetic",
            "html": "<p>NEA's official introduction page, as retrieved on 25 September 2026, gives its elected Central Executive Committee a two-year term. This is a dated statement about NEA, not about the tenure of Nepal Engineering Council members, and a later amendment of NEA's constitution could change it.</p><p>A quorum is the minimum attendance that a body's own rules require for valid business. Where a rule requires more than half of the membership, the quorum is the smallest whole number above half. For a 25-member committee half is 12.5, so at least 13 members must attend, and 12 falls short. Quorum depends on the particular body, the type of meeting and the denominator used, so a loose phrase such as more than 50 and above cannot fix it without those details.</p>",
            "points": [
              {
                "html": "The key result is Two years.",
                "sources": [
                  {
                    "id": "CAP4-10-00071",
                    "label": "p. 39; topic 10 point 69"
                  }
                ]
              },
              {
                "html": "The key result is 13 members.",
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
        "summary": "<p>Engineering Regulatory Body covers Nepal Engineering Council: Acts and Regulations. The sections below reorganize the reviewed capsule material into concepts, calculations, qualifications and limits, with every mapped question linked to a key fact.</p>",
        "blocks": [
          {
            "id": "nec-status-purpose-and-functions",
            "title": "NEC's statutory status, purpose and what falls outside its role",
            "html": "<p>The Nepal Engineering Council Act 2055 creates the Council in sections 3 and 4 and makes it an autonomous corporate body established by statute. Its public functions, conferred by statute, distinguish it from a voluntary professional association or a contractor, and its autonomy does not mean freedom to disregard the Act.</p><p>The purpose of the Act is to systematise engineering practice: organising the profession, recognising qualifications, and registering and regulating engineers, including standards of professional conduct. It does not set electricity tariffs, award public construction contracts or replace a university's power to confer academic degrees.</p><p>Routine construction supervision of a particular works contract, such as daily site supervision and certification, belongs to the project team appointed for that contract. NEC regulates qualification, education and conduct. It may examine a complaint arising from supervision without becoming the resident site supervisor.</p>",
            "points": [
              {
                "html": "The key result is An autonomous statutory corporate body.",
                "sources": [
                  {
                    "id": "CAP4-10-00078",
                    "label": "p. 39; topic 10 point 73"
                  }
                ]
              },
              {
                "html": "The key result is Systematise engineering practice through qualification, registration and regulation.",
                "sources": [
                  {
                    "id": "CAP4-10-00133",
                    "label": "p. 41; topic 10 point 123"
                  }
                ]
              },
              {
                "html": "The key result is Daily site supervision and certification under a works contract.",
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
            "html": "<p>Legal dates mark distinct events: authentication or publication, approval, Gazette notification, commencement and, often later, website upload. Section 1(2) of the NEC Act provides for commencement by Gazette notification, so a recorded authentication or publication date, such as the source-reported 2055/11/27, cannot automatically be treated as the commencement date.</p><p>For an amendment, its own commencement clause controls. Where an amendment to the NEC Regulations says it takes effect on government approval, the stated approval date governs even if its PDF is uploaded years later; an upload timestamp never changes an amendment's legal date.</p><p>An explanation must also use the right edition, reading the base text with every relevant amendment. The corrected notes identify the Third Amendment 2080 of the Regulations and a separate Fourth Amendment 2082, so a note that cites only the Second Amendment is incomplete for any provision those later amendments changed, even though the original regulation keeps its title.</p>",
            "points": [
              {
                "html": "The key result is The stated government-approval date.",
                "sources": [
                  {
                    "id": "CAP4-10-00095",
                    "label": "p. 40; topic 10 point 87"
                  }
                ]
              },
              {
                "html": "The key result is Later amendments can change the operative provision without changing the original regulation's title.",
                "sources": [
                  {
                    "id": "CAP4-10-00136",
                    "label": "p. 41; topic 10 point 126"
                  }
                ]
              },
              {
                "html": "The key result is Section 1(2) separately provides for Gazette-notified commencement.",
                "sources": [
                  {
                    "id": "CAP4-10-00139",
                    "label": "p. 41; topic 10 point 129"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00095",
                "label": "p. 40; topic 10 point 87"
              },
              {
                "id": "CAP4-10-00136",
                "label": "p. 41; topic 10 point 126"
              },
              {
                "id": "CAP4-10-00139",
                "label": "p. 41; topic 10 point 129"
              }
            ]
          },
          {
            "id": "chairperson-and-vice-chairperson",
            "title": "Chairperson and vice-chairperson: nomination and qualifications",
            "html": "<p>Under section 5 of the Act, the Council's chairperson and vice-chairperson are nominated by the Government of Nepal. Other seats have their own appointment routes, and the election of association representatives does not turn these offices into elected ones. The statutory titles are chairperson and vice-chairperson; no separate NEC president office should be inferred.</p><p>Eligibility counts only experience gained after the engineering bachelor's degree. Section 5(1)(a) requires the chairperson to have at least 15 years in the engineering profession after that degree. A graduate with 16 post-degree years qualifies, whereas 16 years in total, of which 4 came before graduation, give only 12 qualifying years. Section 5(1)(b) requires the vice-chairperson to have at least 10 years of engineering experience after the degree, and a diploma or a non-engineering degree does not meet the academic condition.</p><p>Meeting a threshold establishes eligibility only; the Government's nomination is still required for appointment.</p>",
            "points": [
              {
                "html": "The key result is Government of Nepal.",
                "sources": [
                  {
                    "id": "CAP4-10-00080",
                    "label": "pp. 39, 41; topic 10 point 74; topic 10 point 151"
                  }
                ]
              },
              {
                "html": "The key result is An engineering graduate with 16 years' engineering experience after the degree.",
                "sources": [
                  {
                    "id": "CAP4-10-00083",
                    "label": "p. 39; topic 10 point 77"
                  }
                ]
              },
              {
                "html": "The key result is Engineering bachelor's degree followed by at least 10 years' engineering experience.",
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
            "html": "<p>The registrar must have an engineering bachelor's degree followed by ten years of engineering experience, the same post-degree threshold as the vice-chairperson, but the appointment route is different. Under section 27(1), as amended in 2079, the Government of Nepal appoints the registrar on the basis of open competition. This is neither an ordinary Council staff appointment under section 34 nor a nomination by the NEA president, and ten years of service do not bring automatic promotion to the post.</p><p>Keep the offices apart when reading records. The chairperson leads the Council, while the registrar administers its executive work, so a historical list naming both identifies two different offices. The capsule names Ram Babu Sharma as the first head of the Council and Bindeshwar Yadav as the first registrar, but those identities have not been verified against official archival records and are not taught as recall facts.</p>",
            "points": [
              {
                "html": "The key result is The chair leads the Council; the registrar administers its executive work.",
                "sources": [
                  {
                    "id": "CAP4-10-00082",
                    "label": "p. 39; topic 10 point 76"
                  }
                ]
              },
              {
                "html": "The key result is By Government of Nepal on the basis of open competition.",
                "sources": [
                  {
                    "id": "CAP4-10-00085",
                    "label": "p. 39; topic 10 point 78"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00082",
                "label": "p. 39; topic 10 point 76"
              },
              {
                "id": "CAP4-10-00085",
                "label": "p. 39; topic 10 point 78"
              }
            ]
          },
          {
            "id": "nea-president-and-elected-representatives",
            "title": "Association-linked seats: the ex-officio president and elected representatives",
            "html": "<p>The Council-composition arrangement in section 5 links seats to the Nepal Engineers' Association in two different ways. The NEA president sits on the Council ex officio, that is, by virtue of holding the association office. The seat attaches to the office rather than to the person for life; it does not make that person the Council's chairperson, and it is not a temporary delegation from the registrar.</p><p>The five specified NEA representatives come through the prescribed election arrangement rather than by holding the presidency. Election-based and ex-officio membership are therefore separate routes, and neither implies that every Council member is directly elected or that an annual meeting converts elected seats into ex-officio ones.</p>",
            "points": [
              {
                "html": "The key result is Ex-officio membership.",
                "sources": [
                  {
                    "id": "CAP4-10-00081",
                    "label": "p. 39; topic 10 point 75"
                  }
                ]
              },
              {
                "html": "The key result is They arise by the prescribed election, rather than by holding the presidency.",
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
            "title": "Nominated seats and the allocation-specific minimum numbers of women",
            "html": "<p>The amended section 5 fixes the minimum number of women separately for each nomination group. Under section 5(1)(c) the Government of Nepal nominates seven members, including at least three women. Under section 5(1)(h), as amended in 2079, the Council itself nominates two engineers, at least one of whom must be a woman, each with the prescribed seven years of post-degree experience.</p><table><thead><tr><th scope='col'>Nomination group</th><th scope='col'>Seats</th><th scope='col'>Minimum women</th></tr></thead><tbody><tr><th scope='row'>Government of Nepal, section 5(1)(c)</th><td>7</td><td>3</td></tr><tr><th scope='row'>Council itself, section 5(1)(h)</th><td>2</td><td>1</td></tr></tbody></table><p>Because each minimum belongs to its group, they are not one pool. The two minima add to 3 + 1 = 4, yet four women placed entirely among the Government nominees would still leave the Council's pair non-compliant. A list with three women among the Government nominees and none among the Council nominees falls short by 1 − 0 = one woman, however many men are listed; relabelling a Government nominee on paper does not cure it.</p>",
            "points": [
              {
                "html": "The key result is Two engineers, including at least one woman.",
                "sources": [
                  {
                    "id": "CAP4-10-00088",
                    "label": "p. 40; topic 10 point 81"
                  }
                ]
              },
              {
                "html": "The key result is It falls short by one, irrespective of the total number of men.",
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
            "title": "Registration categories, non-Nepali engineers and the minimum route to practise",
            "html": "<p>Rules 3 and 3A of the NEC Regulations 2057, as amended through 2080, describe three registration categories: general registered engineer, professional engineer and non-Nepali engineer. They are regulatory routes with different eligibility and assessment requirements, not engineering disciplines, NEA membership grades or quality ranks.</p><p>The non-Nepali route turns on foreign nationality together with the employment-related registration conditions of Rule 10. A Nepali citizen holding an overseas degree is not a non-Nepali engineer, and employment in an engineering institution alone is neither a complete definition nor a licence.</p><p>The minimum basis for engineering practice in Nepal is a recognised engineering bachelor's degree plus completed registration with NEC. The Act's academic definition of engineer in section 2(d) and its registration requirement in section 11 are separate. The ordinary route runs through application, scrutiny, examination where required, recommendation, registration and certificate, so an application receipt, a degree or an NEA membership does not complete it.</p>",
            "points": [
              {
                "html": "The key result is General registered, professional and non-Nepali engineers.",
                "sources": [
                  {
                    "id": "CAP4-10-00086",
                    "label": "p. 39; topic 10 point 79"
                  }
                ]
              },
              {
                "html": "The key result is Nationality and the prescribed employment-related registration conditions.",
                "sources": [
                  {
                    "id": "CAP4-10-00087",
                    "label": "p. 40; topic 10 point 80"
                  }
                ]
              },
              {
                "html": "The key result is The individual must complete the applicable registration process.",
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
            "html": "<p>Under section 14(1) of the Act, as amended in 2079, the engineering-registration examination committee has five members: a Council member as coordinator, three Council members including one woman, and the registrar as member-secretary. Subject experts invited under section 14(4) are not additional prescribed seats, and the three-person conduct investigation committee is a separate body under Regulations Rule 20.</p><p>Statistics drawn from the register are snapshots. A count of professional engineers reported for 2078/12/31 can establish, at most, the number in that category on that date, and only after the register itself has been checked. New registrations, removals and corrections change the figure, so it is neither a current statistic nor a permanent maximum, and it says nothing about other categories or about recognised institutions. The capsule's reported 61 has not been authenticated.</p>",
            "points": [
              {
                "html": "The key result is A Council-member coordinator, three Council members including one woman, and the registrar.",
                "sources": [
                  {
                    "id": "CAP4-10-00090",
                    "label": "p. 40; topic 10 point 82"
                  }
                ]
              },
              {
                "html": "The key result is A count for that date, subject to verification of the register.",
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
            "title": "Recognition of engineering education: criteria, formal decisions and evidence",
            "html": "<p>NEC's education powers under Act 21A–21B and Rules 15–16 cover recognition of engineering programmes, including programme conditions, academic standards, staff and facilities, through a formal regulatory decision. One aggregate score cannot replace the individual mandatory criteria or the record of recognised programmes, so a college scoring 60% on average has not thereby proved recognition, let alone licensed its graduates.</p><p>Monitoring and recognition status are different. According to the corrected notes on Rule 15, an institution with temporary recognition must obtain permanent recognition by meeting the prescribed criteria within five years. An inspection visit during the year is not a permanent-recognition decision.</p><p>University affiliation and NEC recognition address different questions. A university's affiliation of a master's programme leaves open whether the programme meets NEC's recognition requirements, and neither the affiliation letter nor the degree replaces NEC as the registration authority.</p><p>A ranking of provinces by recognised institutions, such as a reported lead for Bagmati, needs a dated institution-level recognition list and a consistent counting unit, because colleges, campuses and programmes give different totals.</p>",
            "points": [
              {
                "html": "The key result is Recognition also depends on the applicable criteria and formal decision.",
                "sources": [
                  {
                    "id": "CAP4-10-00092",
                    "label": "p. 40; topic 10 point 84"
                  }
                ]
              },
              {
                "html": "The key result is The formal recognition decision and fulfillment of prescribed criteria.",
                "sources": [
                  {
                    "id": "CAP4-10-00093",
                    "label": "p. 40; topic 10 point 85"
                  }
                ]
              },
              {
                "html": "The key result is A dated institution-level recognition list grouped consistently by province.",
                "sources": [
                  {
                    "id": "CAP4-10-00094",
                    "label": "p. 40; topic 10 point 86"
                  }
                ]
              },
              {
                "html": "The key result is Whether the programme meets applicable NEC recognition requirements.",
                "sources": [
                  {
                    "id": "CAP4-10-00101",
                    "label": "p. 40; topic 10 point 93"
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
                "id": "CAP4-10-00094",
                "label": "p. 40; topic 10 point 86"
              },
              {
                "id": "CAP4-10-00101",
                "label": "p. 40; topic 10 point 93"
              }
            ]
          },
          {
            "id": "rule-18-professional-code-of-conduct",
            "title": "Rule 18: the professional code of conduct and its eleven lettered clauses",
            "html": "<p>The professional code of conduct for engineers is Rule 18, located in Chapter 4 of the NEC Regulations 2057, the chapter headed Professional Code of Conduct. Chapter 7 of the Regulations is Miscellaneous. Confusion arises because the separate Act places its section 29A in the Act's own Chapter 7; the Act and the Regulations must not be conflated.</p><p>Read through the Third Amendment 2080, Rule 18 contains the eight clauses (a) to (h) followed by three added prohibitions, (i) to (k), giving eleven lettered clauses. They are clauses of one rule, not eleven articles or Acts, and the rule number 18 is not a count of anything. Always state which amended version is being described.</p>",
            "points": [
              {
                "html": "The key result is Eleven lettered clauses, not eleven separate Acts.",
                "sources": [
                  {
                    "id": "CAP4-10-00079",
                    "label": "p. 39; topic 10 point 73"
                  }
                ]
              },
              {
                "html": "The key result is Rule 18 in Chapter 4.",
                "sources": [
                  {
                    "id": "CAP4-10-00142",
                    "label": "p. 41; topic 10 point 132"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00079",
                "label": "p. 39; topic 10 point 73"
              },
              {
                "id": "CAP4-10-00142",
                "label": "p. 41; topic 10 point 132"
              }
            ]
          },
          {
            "id": "offences-and-penalties-under-section-30",
            "title": "Offences and penalties under section 30 of the NEC Act",
            "html": "<p>Section 30 of the NEC Act 2055, read with the First Amendment 2079, separates kinds of contravention. Engineering practice without registration falls under section 30(1)–(2), which provides a fine of up to NRs 10000, imprisonment of up to three months, or both. These are maximum, alternative penalties, not a fixed tariff and not a registration fee.</p><p>Section 30(3) covers contraventions other than those dealt with in 30(2) and 30(2A), with a fine of up to NRs 25000. It is a maximum for that residual category, not a fixed charge for every violation and not a cap on liability under other laws. Lettered citations such as 30(b) or 30(c) blur these subsections and should be replaced by the numbered provisions.</p>",
            "points": [
              {
                "html": "The key result is Up to NRs 10000 fine, up to 3 months' imprisonment, or both.",
                "sources": [
                  {
                    "id": "CAP4-10-00096",
                    "label": "p. 40; topic 10 point 88"
                  }
                ]
              },
              {
                "html": "The key result is A maximum fine for contraventions other than those in 30(2) and 30(2A).",
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
            "html": "<p>Section 31(1) lists the grounds on which the Government of Nepal may dissolve the Council: failure to exercise its statutory powers, abuse of those powers, exercise beyond the powers conferred, and failure to perform its duties under the Act or the Rules. Section 31(2)–(4) then deals with interim custody and conduct of business, reconstitution and the return of assets. No extra notice period should be read into these provisions, and an individual engineer's private contractual dispute is not among the listed grounds.</p><p>Under section 31(3), another Council is to be constituted under section 5 generally within three months from dissolution. The word generally must not be dropped, and the period runs from dissolution. It is neither a minimum waiting time before reconstitution nor the term of the new Council.</p>",
            "points": [
              {
                "html": "The key result is A generally applicable reconstitution period running from dissolution.",
                "sources": [
                  {
                    "id": "CAP4-10-00097",
                    "label": "p. 40; topic 10 point 89"
                  }
                ]
              },
              {
                "html": "The key result is Failure to exercise statutory powers, abuse or excess of powers, or failure of statutory duties.",
                "sources": [
                  {
                    "id": "CAP4-10-00138",
                    "label": "p. 41; topic 10 point 128; topic 10 point 144"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-10-00097",
                "label": "p. 40; topic 10 point 89"
              },
              {
                "id": "CAP4-10-00138",
                "label": "p. 41; topic 10 point 128; topic 10 point 144"
              }
            ]
          },
          {
            "id": "rules-annual-report-and-audit",
            "title": "Council rules, the annual report and the audit of accounts",
            "html": "<p>Under section 37(1)–(2), NEC makes rules to implement the Act, and those rules take effect only on approval by the Government of Nepal. Subordinate instruments under section 37(3) form a separate category, and bylaws or guidelines cannot override the Act.</p><p>Section 37A, added in 2079, requires the Council to submit an annual report to the Government of Nepal every year within the month of Ashoj and to publish it. The report sets out the year's activities, administrative costs, income and expenditure, and planned programmes. An annual meeting is not the statutory timing trigger.</p><p>For the accounts, Rule 31(1) of the Regulations through the Third Amendment 2080 requires the Council itself to appoint an accredited auditor under prevailing law within three months of the end of the financial year, and Rule 31(2) requires a copy of the audit report to be submitted to the Government of Nepal. The three-month limit concerns the appointment only, and appointing an auditor does not allow finance staff to audit their own work.</p>",
            "points": [
              {
                "html": "The key result is Approval by Government of Nepal.",
                "sources": [
                  {
                    "id": "CAP4-10-00098",
                    "label": "p. 40; topic 10 point 90"
                  }
                ]
              },
              {
                "html": "The key result is Government of Nepal, within Ashoj each year.",
                "sources": [
                  {
                    "id": "CAP4-10-00100",
                    "label": "p. 40; topic 10 point 92"
                  }
                ]
              },
              {
                "html": "The key result is NEC appoints an accredited auditor under prevailing law within three months of financial year-end.",
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
        "summary": "<p>Civil and rural engineering (capsule) covers Rural-engineering capsule points outside the listed civil syllabus subchapters. The sections below reorganize the reviewed capsule material into concepts, calculations, qualifications and limits, with every mapped question linked to a key fact.</p>",
        "blocks": [
          {
            "id": "farmstead-zoning-and-animal-house-orientation",
            "title": "Farmstead zoning and orientation of long animal houses",
            "html": "<p>A farmstead combines a family home with crop and livestock work, so its layout should meet residential needs while separating functions that can contaminate one another. Domestic food preparation and sanitation facilities belong apart from animal areas and from the storage and mixing of pesticides and other farm chemicals.</p><p>Shared shelving for food and chemicals, a common wet area for animal washing and cooking, or chemical mixing above the household water tank all defeat that aim. A kitchen, bathroom, store and farm area are functional considerations, not a complete code-prescribed room schedule.</p><p>For a long animal shed in a hot, sunny region at low latitude, once ventilation has been checked separately and the goal is to keep low morning and evening sun off the long walls, the long axis is commonly run east-west. The broad walls then face mainly north and south, so the low sun strikes chiefly the short end walls. Wind direction, latitude, shading, roof form and drainage must still be assessed, and a temperature-duration figure cannot on its own fix the layout.</p>",
            "points": [
              {
                "html": "The key result is Separate domestic food and sanitation facilities from animal and chemical work areas.",
                "sources": [
                  {
                    "id": "CAP4-10-00176",
                    "label": "p. 42; rural point 4"
                  }
                ]
              },
              {
                "html": "The key result is East-west. This is the reviewed topic result.",
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
                "id": "CAP4-10-00176",
                "label": "p. 42; rural point 4"
              },
              {
                "id": "CAP4-10-00197",
                "label": "p. 42; rural point 20"
              }
            ]
          },
          {
            "id": "livestock-restraint-and-machine-milking",
            "title": "Livestock restraint crushes and the principle of machine milking",
            "html": "<p>A crush, or handling chute, restrains and positions one animal at a time so that routine treatment or examination can be carried out safely. Other facilities serve other purposes: collecting yards hold groups, loading ramps help move animals onto vehicles, and paddocks allow free movement. A milking parlour may use its own restraint arrangements rather than a crush.</p><p>A conventional milking cluster for a cow has four teat cups, one for each teat of the four udder quarters. The number is specific to the cow and to that equipment and should not be generalised to every dairy animal or special milking arrangement.</p><p>Machine milking uses a controlled vacuum to draw milk, while pulsating liners alternate between a milking phase and a rest or massage phase. It is not unregulated continuous suction, and excessive vacuum or faulty pulsation can injure teat tissue.</p>",
            "points": [
              {
                "html": "The key result is Four. This is the reviewed topic result.",
                "sources": [
                  {
                    "id": "CAP4-10-00177",
                    "label": "p. 42; rural point 5"
                  }
                ]
              },
              {
                "html": "The key result is A handling crush or chute.",
                "sources": [
                  {
                    "id": "CAP4-10-00188",
                    "label": "p. 42; rural point 12"
                  }
                ]
              },
              {
                "html": "The key result is Controlled vacuum extracts milk while pulsation alternates milking and massage.",
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
                "id": "CAP4-10-00177",
                "label": "p. 42; rural point 5"
              },
              {
                "id": "CAP4-10-00188",
                "label": "p. 42; rural point 12"
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
            "html": "<p>Fish may be held in two different product states. Chilling with melting ice keeps fresh fish near 0 °C, because at ordinary pressure melting freshwater ice stays close to that temperature. Frozen storage keeps an already frozen product well below freezing, and a freezer set point of −25 °C is one such frozen-storage specification.</p><p>A −25 °C set point is therefore a condition for a particular frozen product and storage plan. It is neither a universal best temperature for every fish product nor a rule for fresh fish, and melting ice cannot bring fish to that temperature at atmospheric pressure. Requirements depend on the product, the storage duration and validated controls. Freezing does not stop all deterioration, give unlimited shelf life or remove the need for hygiene, cold-chain control and temperature monitoring.</p>",
            "points": [
              {
                "html": "The key result is It is a frozen-storage specification for that product and storage plan.",
                "sources": [
                  {
                    "id": "CAP4-10-00182",
                    "label": "p. 42; rural point 9"
                  }
                ]
              },
              {
                "html": "The key result is Chilling near the ice-melting point and frozen storage are different product states.",
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
            "html": "<p>Intercultural operations are field tasks done in a standing, growing crop between establishment and harvest; weeding, hoeing and, where suitable, earthing-up are examples. Hoeing between established rows controls weeds without damaging the standing plants. Saying only that such work is done before harvesting is too broad: the crop stage, soil condition and purpose of the operation decide when it is appropriate, and it is not work done before sowing or on stored produce.</p><p>An entrance footbath on a poultry farm aims to reduce the spread of disease on footwear, as one part of a biosecurity system. It works only when footwear is cleaned first and the disinfectant is kept at the correct strength with adequate contact. Accumulated mud, dilution and a depleted or contaminated solution undermine it, and it never substitutes for other access controls or guarantees against transmission.</p>",
            "points": [
              {
                "html": "The key result is During crop growth between establishment and harvest.",
                "sources": [
                  {
                    "id": "CAP4-10-00178",
                    "label": "p. 42; rural point 6"
                  }
                ]
              },
              {
                "html": "The key result is Clean footwear first and maintain the correct disinfectant and contact conditions.",
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
