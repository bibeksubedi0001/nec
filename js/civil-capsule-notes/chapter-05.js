(function () {
    "use strict";
    window.CIVIL_CAPSULE_NOTE_TOPICS = window.CIVIL_CAPSULE_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_CAPSULE_NOTE_TOPICS, {
      "ACiE0501": {
        "code": "ACiE0501",
        "questionCount": 18,
        "format": 2,
        "summary": "<p>Loads and load combinations covers the actions a structure is designed for: permanent dead load, imposed occupancy load, snow, wind and earthquake, and the rules for combining them. The capsule questions test how actions are classified, which IS 875:1987 part supplies each load, the roof snow relation, how wind pressure scales with speed and site factors, NBC 104 wind zones, storey shear and its sharing between frames, and the combination of wind, earthquake and orthogonal seismic effects.</p>",
        "blocks": [
          {
            "id": "permanent-and-imposed-actions",
            "title": "Permanent dead actions versus imposed occupancy loads",
            "html": "<p>Classifying a load answers two separate questions: how long the action persists, and in which direction it acts.</p><p>The <em>self-weight</em> of a floor slab, a fixed wall, a screed or a fixed ceiling follows from the member's geometry and the unit weight of its material, and it is present throughout the service life. It is therefore a <em>permanent action</em>, recorded as dead load in an ordinary load schedule; IS 800:2007 clause 5.3.1 classifies self-weight this way.</p><p>People, furniture and movable stock change with use, so they form the <em>imposed</em> or occupancy load. In a classroom during an examination the students are imposed load, while the slab, screed and fixed ceiling are dead load.</p><table><thead><tr><th scope='col'>Action</th><th scope='col'>Dead load?</th><th scope='col'>Gravity load?</th></tr></thead><tbody><tr><td>Self-weight of a slab, fixed wall, screed or fixed ceiling</td><td>Yes, permanent</td><td>Yes</td></tr><tr><td>Occupants, furniture and movable stock</td><td>No, imposed</td><td>Yes</td></tr><tr><td>Wind suction, earthquake inertia, restrained shrinkage</td><td>No</td><td>No</td></tr></tbody></table><p>Permanent and gravity therefore describe different aspects of an action. Dead load acts downward under gravity, but so does occupancy load, which is not permanent.</p>",
            "moreHtml": "<p>Calling self-weight permanent does not make its value exact: uncertainty in dimensions and unit weights is still covered by the applicable design factors. Nor does it mean the structure can never respond dynamically, because the same permanent mass takes part in vibration and earthquake response.</p>",
            "points": [
              {
                "html": "Self-weight of a structure refers to its permanent static load.",
                "sources": [
                  {
                    "id": "CAP4-04-00086",
                    "label": "p. 18; topic 4 point 86"
                  }
                ]
              },
              {
                "html": "According to the classification of actions by the IS code, load due to self-weight is a permanent action.",
                "sources": [
                  {
                    "id": "CAP4-05-00004",
                    "label": "p. 19; topic 5 point 4"
                  }
                ]
              },
              {
                "html": "Students in a class are not a type of dead load.",
                "sources": [
                  {
                    "id": "CAP4-05-00005",
                    "label": "p. 19; topic 5 point 5"
                  }
                ]
              },
              {
                "html": "Dead load is considered as a gravity load.",
                "sources": [
                  {
                    "id": "CAP4-05-00102",
                    "label": "p. 22; topic 5 point 101"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00086",
                "label": "p. 18; topic 4 point 86"
              },
              {
                "id": "CAP4-05-00004",
                "label": "p. 19; topic 5 point 4"
              },
              {
                "id": "CAP4-05-00005",
                "label": "p. 19; topic 5 point 5"
              },
              {
                "id": "CAP4-05-00102",
                "label": "p. 22; topic 5 point 101"
              }
            ]
          },
          {
            "id": "is-875-parts-and-load-patterns",
            "title": "IS 875:1987 parts, unit weights and imposed-load patterns",
            "html": "<p>The 1987 IS 875 series places each ordinary design load in its own part, and one part cannot stand in for another.</p><table><thead><tr><th scope='col'>IS 875 part (1987)</th><th scope='col'>Action covered</th></tr></thead><tbody><tr><td>Part 1</td><td>Dead loads and unit weights of materials</td></tr><tr><td>Part 2</td><td>Imposed (occupancy) loads</td></tr><tr><td>Part 3</td><td>Wind loads</td></tr><tr><td>Part 4</td><td>Snow loads</td></tr><tr><td>Part 5</td><td>Special loads and combinations</td></tr></tbody></table><p>A dead-load estimate multiplies actual member dimensions by material unit weights from Part 1; calling a figure a conservative dead load is no substitute for that calculation. Occupancy-related distributed and concentrated floor loads come from Part 2.</p><p>Imposed load can vary in both <em>magnitude and position</em>. Stock moved between warehouse bays, or a crowd gathering in one part of a hall, leaves loaded and unloaded spans side by side. In continuous beams and slabs this <em>pattern loading</em> can produce larger span moments or support reactions than loading the whole floor, so one uniform arrangement need not envelope every member action.</p>",
            "moreHtml": "<p>For a two-span continuous beam under uniform imposed load, the largest sagging moment in a span occurs with that span loaded and the other span empty, while the largest hogging moment over the central support needs both spans loaded. Each governing arrangement is therefore checked separately.</p>",
            "points": [
              {
                "html": "IS 875 Part 1 provides dead loads.",
                "sources": [
                  {
                    "id": "CAP4-05-00006",
                    "label": "p. 19; topic 5 point 6"
                  }
                ]
              },
              {
                "html": "The IS code for live (imposed) load calculation is IS 875 Part 2.",
                "sources": [
                  {
                    "id": "CAP4-05-00008",
                    "label": "p. 19; topic 5 point 8"
                  }
                ]
              },
              {
                "html": "With time, live loads can vary in position as well as magnitude.",
                "sources": [
                  {
                    "id": "CAP4-05-00007",
                    "label": "p. 19; topic 5 point 7"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00006",
                "label": "p. 19; topic 5 point 6"
              },
              {
                "id": "CAP4-05-00008",
                "label": "p. 19; topic 5 point 8"
              },
              {
                "id": "CAP4-05-00007",
                "label": "p. 19; topic 5 point 7"
              }
            ]
          },
          {
            "id": "snow-load-on-roofs",
            "title": "Roof snow load from ground snow and the roof-shape coefficient",
            "html": "<p>IS 875 Part 4:1987 clause 3.1 gives the roof snow load as the site's ground snow load multiplied by a <em>shape coefficient</em>, and the result acts on the horizontal plan area of the roof. The coefficient is dimensionless and depends on the roof geometry and on the distribution case being checked. It multiplies the ground value; it is neither an added pressure nor a divisor.</p><p>Replacing such a blanket entry needs the site's ground snow load and the applicable roof-shape and distribution factors.</p><p>Drift and unbalanced snow cases, where required, are separate checks with their own coefficients.</p>",
            "formulas": [
              {
                "label": "Roof snow load on plan area",
                "tex": "S = \\mu\\, S_0",
                "where": "<p>\\(S_0\\) is the site ground snow load and \\(\\mu\\) the dimensionless roof-shape coefficient for the case considered.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a uniform snow case",
              "html": "<p>With a ground snow load \\(S_0 = 2.4\\ \\text{kN/m}^2\\) and a shape coefficient \\(\\mu = 0.75\\):</p>\\[S = 0.75 \\times 2.4 = 1.80\\ \\text{kN/m}^2\\]<p>This intensity acts on the horizontal plan area. Dividing by the coefficient instead would give 3.20 kN/m², overstating the load.</p>"
            },
            "points": [
              {
                "html": "With a ground snow load of 2.4 kN/m² and a roof-shape coefficient of 0.75, the uniform roof snow intensity from \\(S = \\mu S_0\\) is 1.80 kN/m² on plan area.",
                "sources": [
                  {
                    "id": "CAP4-05-00002",
                    "label": "p. 19; topic 5 point 2"
                  }
                ]
              },
              {
                "html": "In a roof truss, the value of snow load is taken as 2.5 N/m<sup>2</sup> per mm depth of snow.",
                "sources": [
                  {
                    "id": "CAP4-05-00003",
                    "label": "p. 19; topic 5 point 3"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00002",
                "label": "p. 19; topic 5 point 2"
              },
              {
                "id": "CAP4-05-00003",
                "label": "p. 19; topic 5 point 3"
              }
            ]
          },
          {
            "id": "wind-velocity-pressure",
            "title": "Wind velocity pressure, design wind speed and the square law",
            "html": "<p>Wind pressure comes from the kinetic energy of moving air, so velocity pressure is proportional to the square of the wind speed. With the air-density basis and pressure coefficients unchanged, the pressure ratio is the square of the speed ratio. Doubling a percentage speed increase misses the extra quadratic term.</p><p>IS 875 Part 3:1987 first converts the regional basic wind speed \\(V_b\\) into a design wind speed \\(V_z\\) through three dimensionless factors:</p><ul><li>\\(k_1\\), the probability factor or risk coefficient;</li><li>\\(k_2\\), the terrain, height and structure-size factor;</li><li>\\(k_3\\), the topography factor.</li></ul><p>The velocity pressure then follows from \\(V_z\\). The force on a particular surface still needs pressure coefficients and the loaded area.</p>",
            "formulas": [
              {
                "label": "Pressure ratio for a change of wind speed",
                "tex": "\\dfrac{p_2}{p_1} = \\left(\\dfrac{V_2}{V_1}\\right)^2"
              },
              {
                "label": "Design wind speed",
                "tex": "V_z = V_b\\, k_1 k_2 k_3"
              },
              {
                "label": "Design wind pressure, IS 875 Part 3:1987",
                "tex": "p_z = 0.6\\, V_z^2",
                "where": "<p>\\(p_z\\) in N/m² with \\(V_z\\) in m/s.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: a faster wind and a site factor",
              "html": "<p>A 20% rise in design speed at unchanged coefficients:</p>\\[\\dfrac{p_2}{p_1} = 1.20^2 = 1.44\\]<p>so the pressure rises by 44%, not 40%.</p><p>With \\(V_b = 50\\ \\text{m/s}\\), \\(k_1 = k_3 = 1\\) and \\(k_2 = 1.2\\):</p>\\[\\begin{aligned} V_z &amp;= 50 \\times 1 \\times 1.2 \\times 1 = 60\\ \\text{m/s} \\\\ p_z &amp;= 0.6 \\times 60^2 = 2160\\ \\text{Pa} \\end{aligned}\\]<p>That is 2.16 kPa.</p>"
            },
            "points": [
              {
                "html": "Velocity pressure is proportional to speed squared, so a 20% rise in design wind speed raises it by 44%, since \\(1.20^2 = 1.44\\).",
                "sources": [
                  {
                    "id": "CAP4-05-00009",
                    "label": "p. 19; topic 5 point 9"
                  }
                ]
              },
              {
                "html": "Wind pressure is independent of structure factor and terrain.",
                "sources": [
                  {
                    "id": "CAP4-05-00131",
                    "label": "p. 23; topic 5 point 132"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00009",
                "label": "p. 19; topic 5 point 9"
              },
              {
                "id": "CAP4-05-00131",
                "label": "p. 23; topic 5 point 132"
              }
            ]
          },
          {
            "id": "wind-zones-and-site-behaviour",
            "title": "NBC 104:1994 basic wind speed zones and site-specific wind behaviour",
            "html": "<p>A basic wind speed is a regional reference value, not the design speed at a particular structure. The Nepal amendments in NBC 104:1994 give two basic speeds:</p><table><thead><tr><th scope='col'>NBC 104:1994 zone</th><th scope='col'>Basic wind speed</th></tr></thead><tbody><tr><td>Higher-hill and mountain zone, including areas above 3000 m</td><td>55 m/s</td></tr><tr><td>Lower zone</td><td>47 m/s</td></tr></tbody></table><p>A site is placed in a zone by the code's geographical description, including any specially windy areas; elevation alone is not the complete rule. After the zone is chosen, the design-speed factors still modify the basic value before any pressure is calculated.</p><p>Light, flexible structures need the same site-specific thinking. A trail bridge at an exposed site responds to wind through its geometry, stiffness, exposure and aerodynamic behaviour, so lateral stability and dynamic effects can matter even at moderate spans.</p>",
            "points": [
              {
                "html": "The speed of wind in hilly areas of Nepal above 3000 m is taken as 55 m/s.",
                "sources": [
                  {
                    "id": "CAP4-05-00010",
                    "label": "p. 19; topic 5 point 10"
                  }
                ]
              },
              {
                "html": "In general, a wind guy arrangement is not required for trail bridges with spans up to 120 m.",
                "sources": [
                  {
                    "id": "CAP4-10-00191",
                    "label": "p. 42; rural point 15"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00010",
                "label": "p. 19; topic 5 point 10"
              },
              {
                "id": "CAP4-10-00191",
                "label": "p. 42; rural point 15"
              }
            ]
          },
          {
            "id": "earthquake-inertia-and-storey-shear",
            "title": "Earthquake inertia forces, storey shear and sharing between frames",
            "html": "<p>When the ground accelerates horizontally, each floor mass resists the motion and develops a horizontal <em>inertia force</em>. The floor diaphragms collect these forces and pass them to the vertical lateral-load-resisting system of frames, walls or bracing.</p><p>That system carries the accumulated <em>storey shear</em> down to the foundation, together with the associated bending and axial effects. Horizontal shear is a principal seismic effect but not the only one, because ground motion can also have vertical components.</p><p>How a storey shear divides between vertical elements depends on the structural model. If a rigid floor translates without twisting, every frame at that level has the same lateral displacement, so in a linear-elastic analysis each frame force is proportional to its lateral stiffness. The stiffer frame attracts more force. Torsion, a flexible diaphragm or nonlinear response would need a different distribution model.</p>",
            "formulas": [
              {
                "label": "Storey shear shared by lateral stiffness",
                "tex": "V_i = V\\,\\dfrac{k_i}{\\sum k}",
                "where": "<p>Valid for a rigid floor translating without torsion, with linear-elastic frames of lateral stiffness \\(k_i\\).</p>"
              }
            ],
            "example": {
              "title": "Worked example: two frames of stiffness 3k and k",
              "html": "<p>A 120 kN storey shear is shared by two parallel frames whose total stiffness is \\(4k\\).</p>\\[\\begin{aligned} V_1 &amp;= 120 \\times \\tfrac{3}{4} = 90\\ \\text{kN} \\\\ V_2 &amp;= 120 \\times \\tfrac{1}{4} = 30\\ \\text{kN} \\end{aligned}\\]<p>The two shares add back to 120 kN, as equilibrium requires, and the stiffer frame takes three times the force of the other.</p>"
            },
            "points": [
              {
                "html": "During an earthquake, the forces generated in a building are mainly horizontal shear forces.",
                "sources": [
                  {
                    "id": "CAP4-05-00013",
                    "label": "p. 20; topic 5 point 13"
                  }
                ]
              },
              {
                "html": "Two vertical frames with lateral stiffnesses \\(3k\\) and \\(k\\) are connected by a rigid floor. The proportion of earthquake force transferred to them is 3: 1.",
                "sources": [
                  {
                    "id": "CAP4-05-00113",
                    "label": "p. 22; topic 5 point 111"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00013",
                "label": "p. 20; topic 5 point 13"
              },
              {
                "id": "CAP4-05-00113",
                "label": "p. 22; topic 5 point 111"
              }
            ]
          },
          {
            "id": "combining-wind-and-earthquake",
            "title": "Load combinations: wind or earthquake as alternatives, and the 100/30 rule",
            "html": "<p>A load combination states which actions are assumed to act together. For ordinary steel-building design, IS 800:2007 clause 3.5.2 does not combine extreme wind and earthquake simultaneously. Each is checked as an <em>alternative environmental action</em> with the prescribed gravity loads and factors.</p><p>This is a concurrence assumption of the design method, not a claim that the two can never coincide physically, and neither case may be skipped.</p><p>Earthquake shaking can arrive from any horizontal direction. Where IS 1893 Part 1:2016 clause 6.3.2.2 requires directional combination for non-parallel lateral systems, the full effect of one direction is combined with 30% of the orthogonal effect. The axes are then interchanged, and the signs are chosen to make the response being checked most adverse.</p>",
            "formulas": [
              {
                "label": "Orthogonal effects, x direction at full value",
                "tex": "E = \\pm E_x \\pm 0.3\\,E_y"
              },
              {
                "label": "Orthogonal effects, axes interchanged",
                "tex": "E = \\pm 0.3\\,E_x \\pm E_y",
                "where": "<p>Take the most adverse of all the sign and axis cases; gravity effects are added separately.</p>"
              }
            ],
            "example": {
              "title": "Worked example: axial effects of 80 kN and 30 kN",
              "html": "<ol><li>Full \\(x\\) effect with 30% of \\(y\\): \\(80 + 0.3 \\times 30 = 89\\ \\text{kN}\\).</li><li>Full \\(y\\) effect with 30% of \\(x\\): \\(0.3 \\times 80 + 30 = 54\\ \\text{kN}\\).</li></ol><p>The larger positive envelope, 89 kN, governs in that sense. Opposite-sign combinations are checked for the reverse response, and any gravity effect is added separately.</p>"
            },
            "points": [
              {
                "html": "The combination dead load + wind load + earthquake load is not a possible load combination.",
                "sources": [
                  {
                    "id": "CAP4-05-00001",
                    "label": "p. 19; topic 5 point 1"
                  }
                ]
              },
              {
                "html": "In a non-parallel system of seismic design, 100% of the design seismic force in one direction and 30% of the force in the orthogonal direction are considered.",
                "sources": [
                  {
                    "id": "CAP4-05-00087",
                    "label": "p. 22; topic 5 point 87"
                  }
                ]
              },
              {
                "html": "Separate earthquake analyses give a member force of 80 kN for the X direction and 30 kN for the Y direction. Using the 100% + 30% rule with X as the main direction, the design force is 89 kN.",
                "sources": [
                  {
                    "id": "CAP4-05-00088",
                    "label": "p. 22; topic 5 point 87"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00001",
                "label": "p. 19; topic 5 point 1"
              },
              {
                "id": "CAP4-05-00087",
                "label": "p. 22; topic 5 point 87"
              },
              {
                "id": "CAP4-05-00088",
                "label": "p. 22; topic 5 point 87"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Roof snow load",
            "tex": "S = \\mu\\, S_0",
            "note": "On horizontal plan area, IS 875 Part 4:1987."
          },
          {
            "label": "Pressure ratio for a change of wind speed",
            "tex": "\\dfrac{p_2}{p_1} = \\left(\\dfrac{V_2}{V_1}\\right)^2",
            "note": "Coefficients and air-density basis unchanged."
          },
          {
            "label": "Design wind speed",
            "tex": "V_z = V_b\\, k_1 k_2 k_3"
          },
          {
            "label": "Design wind pressure",
            "tex": "p_z = 0.6\\, V_z^2",
            "note": "In N/m² with \\(V_z\\) in m/s, IS 875 Part 3:1987."
          },
          {
            "label": "Storey shear sharing",
            "tex": "V_i = V\\,\\dfrac{k_i}{\\sum k}",
            "note": "Rigid floor, no torsion, linear-elastic frames."
          },
          {
            "label": "Orthogonal seismic effects",
            "tex": "\\begin{aligned} &\\pm E_x \\pm 0.3\\,E_y \\\\ &\\pm 0.3\\,E_x \\pm E_y \\end{aligned}",
            "note": "Keep the most adverse result, IS 1893 Part 1:2016 clause 6.3.2.2."
          }
        ],
        "cautions": [],
        "gaps": [
          "The capsule items give no imposed-load values, imposed-load reduction rules, or the factored load combinations and partial safety factors themselves.",
          "Wind coverage stops at velocity pressure: pressure coefficients, gust or dynamic effects and the tabulated values of k1, k2 and k3 are not covered.",
          "Earthquake coverage is limited to the load path, stiffness sharing and the 100/30 directional rule; zone factors, response spectra, base shear and torsion are not covered.",
          "Snow drift and unbalanced snow cases are mentioned only as separate checks, without their coefficients."
        ]
      },
      "ACiE0502": {
        "code": "ACiE0502",
        "questionCount": 34,
        "format": 2,
        "summary": "<p>Concrete technology covers the materials of concrete, its fresh and hardened properties, mix proportions, testing and the IS 456:2000 provisions that control quality. The capsule questions test mixing water and cement storage, grouts, aggregate moisture corrections and alkali-silica reaction, the water-cement ratio, compaction and bleeding, the slump test and superplasticizers, nominal mix ratios, grade designations, destructive and indirect tests, modulus, flexural strength and creep, and curing and formwork stripping.</p>",
        "blocks": [
          {
            "id": "mixing-water-quality",
            "title": "Mixing water: potable is not the same as portable",
            "html": "<p>Water chemistry affects setting, strength and durability, so mixing water is judged by its quality, not by its appearance or by how it is delivered.</p><ul><li><em>Potable</em> means fit for drinking, and potable water is generally considered satisfactory for concrete.</li><li><em>Portable</em> only means movable. Water arriving by tanker says nothing about its chemistry, cleanliness or compatibility with the intended concrete.</li></ul><p>IS 456:2000 clause 5.4 allows other water to be used when it satisfies the specified impurity limits and the comparative setting-time and strength requirements. Clear, colourless water can still carry harmful dissolved substances, so appearance proves nothing. Equally, a source is not rejected merely because it is not drinking water, and adding extra cement is no substitute for testing.</p><p>One stated requirement is a pH not less than 6. Water of pH 5.5 therefore fails that check, while water that passes it must still meet the other impurity, setting and strength provisions.</p>",
            "points": [
              {
                "html": "The water to be used in concrete should be similar to potable water.",
                "sources": [
                  {
                    "id": "CAP4-05-00020",
                    "label": "p. 20; topic 5 point 19"
                  }
                ]
              },
              {
                "html": "The pH value of water used in making cement concrete should not be less than 6.",
                "sources": [
                  {
                    "id": "CAP4-05-00034",
                    "label": "p. 20; topic 5 point 33"
                  }
                ]
              },
              {
                "html": "The water used in construction should be potable water.",
                "sources": [
                  {
                    "id": "CAP4-06-00131",
                    "label": "p. 26; topic 6 point 135"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00020",
                "label": "p. 20; topic 5 point 19"
              },
              {
                "id": "CAP4-05-00034",
                "label": "p. 20; topic 5 point 33"
              },
              {
                "id": "CAP4-06-00131",
                "label": "p. 26; topic 6 point 135"
              }
            ]
          },
          {
            "id": "cement-storage-and-grouts",
            "title": "Storing bagged cement and distinguishing neat from sanded grout",
            "html": "<p>Cement starts to hydrate as soon as it takes up moisture, forming lumps and losing quality before it reaches the mixer. Bagged cement is therefore stacked on a raised, dry platform clear of the floor, where dampness from below would otherwise be absorbed. The platform limits moisture uptake, but the store must still exclude rain and wall dampness, and prolonged storage should be avoided.</p><p>A grout is a fluid cementitious mixture whose make-up suits its use:</p><table><thead><tr><th scope='col'>Grout</th><th scope='col'>Constituents</th></tr></thead><tbody><tr><td>Neat cement grout</td><td>Cement and water, with any specified admixtures; no fine aggregate</td></tr><tr><td>Sanded cement grout</td><td>Cement, water and fine aggregate</td></tr></tbody></table><p>A narrow duct may be filled with a specified neat grout, and coarse aggregate is not an ingredient of a neat grout.</p>",
            "points": [
              {
                "html": "Cement bags on site should be stored on a raised platform.",
                "sources": [
                  {
                    "id": "CAP4-05-00019",
                    "label": "p. 20; topic 5 point 18"
                  }
                ]
              },
              {
                "html": "Grout is a mixture of water, cement and sand.",
                "sources": [
                  {
                    "id": "CAP4-05-00014",
                    "label": "p. 20; topic 5 point 14"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00019",
                "label": "p. 20; topic 5 point 18"
              },
              {
                "id": "CAP4-05-00014",
                "label": "p. 20; topic 5 point 14"
              }
            ]
          },
          {
            "id": "aggregate-moisture-and-reactivity",
            "title": "Aggregates: the SSD reference state, moisture corrections and reactive silica",
            "html": "<p>Mix proportions are normally stated for aggregate in the <em>saturated-surface-dry</em> (SSD) condition: the permeable pores are filled but no free water sits on the surface. SSD aggregate neither absorbs mixing water nor contributes any, which makes it a convenient reference.</p><p>Stockpiled aggregate is usually drier or wetter than SSD. Absorption and moisture content are both expressed on oven-dry mass, so the correction goes through the dry mass. The batch mass is adjusted, and the free surface water, the moisture above absorption, is deducted from the water added at the mixer.</p><p>Aggregate mineralogy also matters for durability. When reactive silica-bearing aggregate meets sufficient alkalis and moisture, an <em>alkali-silica reaction</em> forms a gel that absorbs water, expands and cracks the concrete. Reactivity, alkali availability and moisture all matter. Alkalis also reduce the workability of fresh concrete significantly.</p>",
            "formulas": [
              {
                "label": "Oven-dry mass from SSD mass",
                "tex": "M_{\\text{dry}} = \\dfrac{M_{\\text{SSD}}}{1 + a}",
                "where": "<p>\\(a\\) is the absorption and \\(w\\) the actual moisture content, both as fractions of oven-dry mass.</p>"
              },
              {
                "label": "Wet batch mass",
                "tex": "M_{\\text{wet}} = M_{\\text{dry}}\\,(1 + w)"
              },
              {
                "label": "Free surface water to deduct",
                "tex": "W_{\\text{free}} = M_{\\text{dry}}\\,(w - a)"
              }
            ],
            "example": {
              "title": "Worked example: 102 kg of SSD sand",
              "html": "<p>Absorption is 2% and actual moisture 5%, both on oven-dry mass.</p><ol><li>Dry mass: \\(102/1.02 = 100\\ \\text{kg}\\).</li><li>Wet batch mass: \\(100 \\times 1.05 = 105\\ \\text{kg}\\).</li><li>Free water: \\(100 \\times (0.05 - 0.02) = 3\\ \\text{kg}\\).</li></ol><p>Weigh out 105 kg of the damp sand and add 3 kg less water at the mixer.</p>"
            },
            "points": [
              {
                "html": "The moisture condition of aggregate assumed for use in concrete is saturated surface dry.",
                "sources": [
                  {
                    "id": "CAP4-05-00016",
                    "label": "p. 20; topic 5 point 16"
                  }
                ]
              },
              {
                "html": "Aggregate in the saturated surface dry condition has pores filled with water and a dry surface.",
                "sources": [
                  {
                    "id": "CAP4-05-00017",
                    "label": "p. 20; topic 5 point 16"
                  }
                ]
              },
              {
                "html": "The main contribution of alkalis in concrete is to reduce the workability significantly.",
                "sources": [
                  {
                    "id": "CAP4-05-00124",
                    "label": "p. 23; topic 5 point 124"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00016",
                "label": "p. 20; topic 5 point 16"
              },
              {
                "id": "CAP4-05-00017",
                "label": "p. 20; topic 5 point 16"
              },
              {
                "id": "CAP4-05-00124",
                "label": "p. 23; topic 5 point 124"
              }
            ]
          },
          {
            "id": "water-cement-ratio-compaction-bleeding",
            "title": "Water-cement ratio, compaction and bleeding in fresh concrete",
            "html": "<p>The <em>water-cement ratio</em> is a major control on strength, because water not consumed by hydration leaves capillary pores behind after the concrete dries. Once a mix already has enough water for workability, adding more at the same cement mass raises the ratio and generally lowers strength, even when compaction and curing are equally good.</p><p>That relation assumes the concrete is properly mixed, placed, compacted and cured. A very low ratio does not guarantee strength if the mix is too harsh to consolidate, because large entrapped voids can cancel the benefit.</p><p><em>Compaction</em>, usually by controlled vibration, expels entrapped air and consolidates the concrete around aggregate, reinforcement and formwork. It is not meant to remove deliberately entrained microscopic air or to separate mortar from coarse aggregate, and excessive vibration can spoil uniformity.</p><p>After placing, the solids settle and water rises; a film of water on the surface shows <em>bleeding</em>. Excessive bleeding leaves weak surface laitance and internal water channels and can impair bond. It is a physical separation, distinct from the hydration reaction and from later carbonation.</p>",
            "points": [
              {
                "html": "If enough water for workability has already been added, increasing the water–cement ratio further makes the strength of concrete decrease.",
                "sources": [
                  {
                    "id": "CAP4-05-00015",
                    "label": "p. 20; topic 5 point 15"
                  }
                ]
              },
              {
                "html": "The strength of concrete mainly depends on the water–cement ratio.",
                "sources": [
                  {
                    "id": "CAP4-05-00030",
                    "label": "p. 20; topic 5 point 29"
                  }
                ]
              },
              {
                "html": "Compacting of concrete is done to remove air bubbles.",
                "sources": [
                  {
                    "id": "CAP4-05-00031",
                    "label": "p. 20; topic 5 point 30"
                  }
                ]
              },
              {
                "html": "The property of concrete in which water tends to rise to the surface during placing and compacting is called bleeding.",
                "sources": [
                  {
                    "id": "CAP4-05-00120",
                    "label": "p. 22; topic 5 point 120"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00015",
                "label": "p. 20; topic 5 point 15"
              },
              {
                "id": "CAP4-05-00030",
                "label": "p. 20; topic 5 point 29"
              },
              {
                "id": "CAP4-05-00031",
                "label": "p. 20; topic 5 point 30"
              },
              {
                "id": "CAP4-05-00120",
                "label": "p. 22; topic 5 point 120"
              }
            ]
          },
          {
            "id": "slump-test",
            "title": "Slump test: what it measures and when its result is meaningful",
            "html": "<p>In the slump test a standard mould is filled with concrete and lifted, and the settlement of the unsupported concrete is measured. <em>Slump</em> is the vertical drop from the mould height to the prescribed point on the slumped specimen, reported in millimetres; it is a length, not a strength or a percentage.</p><p>Slump directly measures <em>consistency</em> and serves as one indicator within workability control. Workability is broader, covering cohesion and the ease of placing and compacting. Two batches with equal slump therefore have similar consistency but not necessarily equal strength, proportions or segregation resistance.</p><p>The test is most informative for a cohesive, plastic mix that gives a <em>true slump</em>. Other mixes need another suitable assessment:</p><ul><li>a very dry mix keeps the mould shape;</li><li>a segregating mix shears to one side;</li><li>a very fluid mix collapses completely.</li></ul><p>Cement richness alone is not the criterion for using the test.</p>",
            "formulas": [
              {
                "label": "Slump",
                "tex": "s = H_{\\text{mould}} - h_{\\text{slumped}}",
                "where": "<p>\\(h_{\\text{slumped}}\\) is the height of the prescribed point on the slumped concrete above the base.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a 300 mm mould",
              "html": "<p>After the mould is lifted, the original centre of the top surface has dropped to 225 mm above the base.</p>\\[s = 300 - 225 = 75\\ \\text{mm}\\]<p>The slump is reported as 75 mm.</p>"
            },
            "points": [
              {
                "html": "The result of the slump test is expressed in the unit of mm.",
                "sources": [
                  {
                    "id": "CAP4-01-00143",
                    "label": "p. 5; topic 1 point 136"
                  }
                ]
              },
              {
                "html": "The slump test gives good results for rich mixes.",
                "sources": [
                  {
                    "id": "CAP4-05-00023",
                    "label": "p. 20; topic 5 point 21"
                  }
                ]
              },
              {
                "html": "The slump test of concrete is a measure of its consistency (workability).",
                "sources": [
                  {
                    "id": "CAP4-05-00024",
                    "label": "p. 20; topic 5 point 22; topic 5 point 23"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00143",
                "label": "p. 5; topic 1 point 136"
              },
              {
                "id": "CAP4-05-00023",
                "label": "p. 20; topic 5 point 21"
              },
              {
                "id": "CAP4-05-00024",
                "label": "p. 20; topic 5 point 22; topic 5 point 23"
              }
            ]
          },
          {
            "id": "consistency-for-vibration-and-superplasticizers",
            "title": "Choosing consistency for vibrated placement, and superplasticizers",
            "html": "<p>The required consistency depends on the member, reinforcement congestion and the placing method. A trial mix above 50 mm intended for vibration among congested bars is judged against the specified consistency, its cohesion and the placement requirements, and vibration must not segregate it.</p><p>Where more flow is needed, simply adding water raises the water-cement ratio and lowers strength. A compatible <em>superplasticizer</em> disperses the cement particles so that the same slump is reached with less water, which is high-range water reduction. It may instead raise the flow at similar water content.</p><p>Other admixtures do different jobs: a retarder delays setting, an accelerator speeds it, and air entrainment mainly improves freeze-thaw resistance. Superplasticizer dosage, compatibility with the cement and segregation resistance must be verified by trials.</p>",
            "points": [
              {
                "html": "While compacting concrete with a mechanical vibrator, the slump should not exceed 5.0 cm.",
                "sources": [
                  {
                    "id": "CAP4-05-00025",
                    "label": "p. 20; topic 5 point 24"
                  }
                ]
              },
              {
                "html": "Superplasticizer is used in concrete to reduce the quantity of mixing water.",
                "sources": [
                  {
                    "id": "CAP4-05-00035",
                    "label": "p. 20; topic 5 point 34"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00025",
                "label": "p. 20; topic 5 point 24"
              },
              {
                "id": "CAP4-05-00035",
                "label": "p. 20; topic 5 point 34"
              }
            ]
          },
          {
            "id": "mix-proportions-mass-and-volume",
            "title": "Nominal mix ratios: mass basis, volume basis and the M20 shorthand",
            "html": "<p>A ratio such as 1:2:4 lists cement, fine aggregate and coarse aggregate, but it cannot be batched until its basis is known.</p><ul><li><em>By mass</em>: the cement mass, found from the free water and the water-cement ratio, fixes every other quantity.</li><li><em>By loose volume</em>: each volume must be converted to mass with compatible <em>bulk densities</em>. Particle specific gravity or the density of the finished concrete cannot supply those separate loose masses.</li></ul><p>In elementary estimating, 1:1.5:3 by loose volume is the traditional nominal shorthand associated with M20.</p>",
            "formulas": [
              {
                "label": "Cement mass from free water",
                "tex": "C = \\dfrac{W}{w/c}",
                "where": "<p>\\(W\\) is the free-water mass and \\(w/c\\) the free water-cement ratio by mass.</p>"
              },
              {
                "label": "Ingredient mass on a mass-ratio basis",
                "tex": "M_i = r_i\\, C",
                "where": "<p>\\(r_i\\) is the ingredient's number in the ratio, with cement taken as 1.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a 1:2:4 mix by mass",
              "html": "<p>Take 9 litres of free water at 1 kg/litre and a free water-cement ratio of 0.45.</p>\\[\\begin{aligned} C &amp;= \\dfrac{9}{0.45} = 20\\ \\text{kg} \\\\ S &amp;= 2 \\times 20 = 40\\ \\text{kg} \\\\ G &amp;= 4 \\times 20 = 80\\ \\text{kg} \\end{aligned}\\]<p>The 80 kg of coarse aggregate depends entirely on the mass assumption. Read as a loose-volume ratio, the same data do not fix it until bulk densities are known.</p>"
            },
            "points": [
              {
                "html": "The weight of coarse aggregate required for a concrete mix of 1: 2: 4, with a water–cement ratio of 0.45 and 9 litres of water, is 80 kg.",
                "sources": [
                  {
                    "id": "CAP4-05-00106",
                    "label": "p. 22; topic 5 point 105"
                  }
                ]
              },
              {
                "html": "For a concrete mix of 1: 2: 4 with a water–cement ratio of 0.45 and 9 litres of water, the weight of cement required is 20 kg.",
                "sources": [
                  {
                    "id": "CAP4-05-00107",
                    "label": "p. 22; topic 5 point 105"
                  }
                ]
              },
              {
                "html": "The typical concrete mix proportion for an RCC roof slab is 1: 1.5: 3.",
                "sources": [
                  {
                    "id": "CAP4-05-00139",
                    "label": "p. 23; topic 5 point 140"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00106",
                "label": "p. 22; topic 5 point 105"
              },
              {
                "id": "CAP4-05-00107",
                "label": "p. 22; topic 5 point 105"
              },
              {
                "id": "CAP4-05-00139",
                "label": "p. 23; topic 5 point 140"
              }
            ]
          },
          {
            "id": "grades-and-early-age-strength",
            "title": "Concrete grades: characteristic strength, early results and minimum grades",
            "html": "<p>A grade designation such as M20 means a <em>characteristic 28-day cube compressive strength</em> of 20 MPa. A seven-day result is only an early indicator: its relation to the 28-day value depends on the cement, mix and curing, and its use depends on the specified acceptance procedure.</p><p>IS 456:2000 groups grades in Table 2 and sets durability minimums in Table 5:</p><table><thead><tr><th scope='col'>Provision</th><th scope='col'>Content</th></tr></thead><tbody><tr><td>Table 2, standard grades</td><td>M25 to M55</td></tr><tr><td>Table 2, high-strength grades</td><td>M60 to M80, so the group begins at M60</td></tr><tr><td>Table 5, reinforced concrete in mild exposure</td><td>Minimum grade M20</td></tr></tbody></table><p>Table 2 is a classification within that edition, not a research definition or a physical upper limit on strength.</p>",
            "example": {
              "title": "Worked example: a seven-day ratio",
              "html": "<p>A trial mix reaches 12.5 MPa at seven days, compared with 20 MPa:</p>\\[\\dfrac{12.5}{20} \\times 100 = 62.5\\%\\]<p>This is only a monitoring ratio.</p>"
            },
            "points": [
              {
                "html": "In the compressive strength test, the minimum strength developed by a cube of M20 concrete in 7 days is 12.5 MPa.",
                "sources": [
                  {
                    "id": "CAP4-01-00040",
                    "label": "p. 2; topic 1 point 39"
                  }
                ]
              },
              {
                "html": "An M20 concrete cube must develop at least 12.5 MPa in 7 days. This 7-day minimum is 62.5% of its 28-day characteristic strength.",
                "sources": [
                  {
                    "id": "CAP4-01-00041",
                    "label": "p. 2; topic 1 point 39"
                  }
                ]
              },
              {
                "html": "For high strength concrete, the minimum grade is M60.",
                "sources": [
                  {
                    "id": "CAP4-05-00123",
                    "label": "p. 22; topic 5 point 123"
                  }
                ]
              },
              {
                "html": "The nominal mix required for an RCC roof is M20 (1: 1.5: 3).",
                "sources": [
                  {
                    "id": "CAP4-05-00018",
                    "label": "p. 20; topic 5 point 17"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00040",
                "label": "p. 2; topic 1 point 39"
              },
              {
                "id": "CAP4-01-00041",
                "label": "p. 2; topic 1 point 39"
              },
              {
                "id": "CAP4-05-00123",
                "label": "p. 22; topic 5 point 123"
              },
              {
                "id": "CAP4-05-00018",
                "label": "p. 20; topic 5 point 17"
              }
            ]
          },
          {
            "id": "testing-hardened-concrete",
            "title": "Testing hardened concrete: destructive tests, specimen shape, loading rate and pullout",
            "html": "<p>The <em>cube compression test</em> is destructive: the specimen is loaded to failure to find its crushing load. Rebound-hammer and ultrasonic pulse-velocity tests are indirect non-destructive assessments, and an electromagnetic cover survey locates reinforcement rather than measuring strength.</p><p>Specimen shape changes the result. Friction at the loading platens restrains the ends of a specimen. A cube is short, so a large proportion of it is confined and its apparent strength rises. A standard cylinder has a greater height-to-width ratio, leaving more material away from end restraint, so its strength is generally lower. No single conversion factor is exact for all concretes.</p><p>Procedures state a loading rate as a stress rate, which is converted into a machine force rate through the loaded area.</p><p>In the <em>pullout test</em> an embedded headed insert is pulled against a surface reaction ring until the surrounding concrete fails locally. The failure field is complex, so the measured pullout resistance is correlated with in-place compressive strength; it is not a direct tensile strength found by dividing force by insert area.</p>",
            "formulas": [
              {
                "label": "Machine force rate from a stress rate",
                "tex": "\\dfrac{dF}{dt} = A\\,\\dfrac{d\\sigma}{dt}"
              }
            ],
            "example": {
              "title": "Worked example: 14 N/mm² per minute on a 150 mm cube",
              "html": "<ol><li>Loaded area: \\(150 \\times 150 = 22\\,500\\ \\text{mm}^2\\).</li><li>Force rate: \\(14 \\times 22\\,500\\) N/min, that is 315 kN/min.</li><li>Per second: \\(315/60 = 5.25\\ \\text{kN/s}\\).</li></ol>"
            },
            "points": [
              {
                "html": "The type of destructive test for concrete is the compression test.",
                "sources": [
                  {
                    "id": "CAP4-01-00042",
                    "label": "p. 2; topic 1 point 40"
                  }
                ]
              },
              {
                "html": "The cylinder strength of concrete is less than its cube strength because of the difference in the slenderness ratio of the specimens.",
                "sources": [
                  {
                    "id": "CAP4-05-00032",
                    "label": "p. 20; topic 5 point 31"
                  }
                ]
              },
              {
                "html": "The loading rate used in the compressive strength test of concrete is 14 N/mm<sup>2</sup> per minute.",
                "sources": [
                  {
                    "id": "CAP4-04-00101",
                    "label": "p. 18; topic 4 point 101"
                  }
                ]
              },
              {
                "html": "The pullout test is not a tensile strength test of concrete.",
                "sources": [
                  {
                    "id": "CAP4-04-00084",
                    "label": "p. 18; topic 4 point 84"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00042",
                "label": "p. 2; topic 1 point 40"
              },
              {
                "id": "CAP4-05-00032",
                "label": "p. 20; topic 5 point 31"
              },
              {
                "id": "CAP4-04-00101",
                "label": "p. 18; topic 4 point 101"
              },
              {
                "id": "CAP4-04-00084",
                "label": "p. 18; topic 4 point 84"
              }
            ]
          },
          {
            "id": "modulus-flexural-strength-creep",
            "title": "Elastic modulus, flexural strength and creep of hardened concrete",
            "html": "<p>IS 456:2000 estimates two properties from the characteristic cube strength \\(f_{ck}\\), with all values in N/mm², and both depend on its <em>square root</em>. Clause 6.2.2 gives the flexural strength \\(f_{cr}\\), and clause 6.2.3.1 the short-term static modulus \\(E_c\\).</p><p>These are estimates. The actual modulus depends on the aggregate and the mix, and flexural strength is a tensile property, distinct from stiffness. Leaving out the square root is the common slip.</p><p>Under sustained compressive stress, concrete keeps shortening after its immediate elastic strain. Measured against a matching unloaded specimen, which isolates shrinkage, the additional load-dependent, time-dependent strain is <em>creep</em>. Creep has recoverable and irreversible parts, so describing all of it as plastic strain is too narrow. It also differs from <em>relaxation</em>, in which stress falls while the strain is held fixed.</p>",
            "formulas": [
              {
                "label": "Flexural strength, IS 456:2000 clause 6.2.2",
                "tex": "f_{cr} = 0.7\\sqrt{f_{ck}}"
              },
              {
                "label": "Short-term static modulus, clause 6.2.3.1",
                "tex": "E_c = 5000\\sqrt{f_{ck}}",
                "where": "<p>\\(f_{ck}\\), \\(f_{cr}\\) and \\(E_c\\) are all in N/mm².</p>"
              }
            ],
            "example": {
              "title": "Worked examples: flexural strength at 36 N/mm² and the M25 modulus",
              "html": "<p>For \\(f_{ck} = 36\\ \\text{N/mm}^2\\):</p>\\[\\begin{aligned}f_{cr} &amp;= 0.7\\sqrt{36} \\\\\\ &amp;= 0.7 \\times 6 \\\\\\ &amp;= 4.2\\ \\text{N/mm}^2\\end{aligned}\\]<p>Without the square root, \\(0.7 \\times 36\\) would give 25.2 N/mm², far too high.</p><p>For M25:</p>\\[E_c = 5000\\sqrt{25} = 25\\,000\\ \\text{N/mm}^2\\]<p>That is 25000 MPa, an estimate that the actual aggregate and mix can change.</p>"
            },
            "points": [
              {
                "html": "IS 456:2000 estimates flexural strength as \\(0.7\\sqrt{f_{ck}}\\), so \\(f_{ck}\\) = 36 N/mm² gives 4.2 N/mm²; omitting the root gives an incorrect 25.2.",
                "sources": [
                  {
                    "id": "CAP4-04-00083",
                    "label": "p. 18; topic 4 point 83"
                  }
                ]
              },
              {
                "html": "For M25, \\(E_c = 5000\\sqrt{f_{ck}}\\) gives an estimated short-term static modulus of 25000 MPa.",
                "sources": [
                  {
                    "id": "CAP4-05-00141",
                    "label": "p. 23; topic 5 point 142"
                  }
                ]
              },
              {
                "html": "The gradual increase of plastic strain with time at constant load is called creep.",
                "sources": [
                  {
                    "id": "CAP4-04-00087",
                    "label": "p. 18; topic 4 point 87"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00083",
                "label": "p. 18; topic 4 point 83"
              },
              {
                "id": "CAP4-05-00141",
                "label": "p. 23; topic 5 point 142"
              },
              {
                "id": "CAP4-04-00087",
                "label": "p. 18; topic 4 point 87"
              }
            ]
          },
          {
            "id": "curing-thermal-control-and-stripping",
            "title": "Curing, thermal control of large pours and formwork stripping times",
            "html": "<p><em>Curing</em> keeps newly placed concrete at a moisture content and temperature that allow hydration to continue, so that strength and durability develop and premature drying is prevented. That general purpose applies even when there is no unusually large temperature gradient.</p><p>Thermal control is one part of curing for large pours. A hot core and a cooler surface create a temperature difference that can crack the concrete. An insulating blanket slows surface cooling and reduces the core-to-surface difference, but it does not remove the heat of hydration. It has to be combined with limits on maximum temperature, monitoring and moisture retention.</p><p>Formwork removal depends on the strength gained, not only on elapsed time. Under the normal conditions of IS 456:2000 clause 11.3.1, namely ordinary Portland cement, adequate curing and a temperature of at least 15 °C, the listed period for vertical formwork to column sides is 16-24 hours. It does not apply to load-bearing beam soffits or props, and actual site conditions and adequate strength still govern.</p>",
            "points": [
              {
                "html": "The primary purpose of curing is to reduce the heat loss of freshly placed concrete to the atmosphere and to reduce the temperature gradient across its cross-section.",
                "sources": [
                  {
                    "id": "CAP4-01-00135",
                    "label": "p. 5; topic 1 point 129"
                  }
                ]
              },
              {
                "html": "The primary purpose of curing freshly placed concrete is to reduce its heat loss to the atmosphere and the temperature gradient across its section.",
                "sources": [
                  {
                    "id": "CAP4-01-00136",
                    "label": "p. 5; topic 1 point 129"
                  }
                ]
              },
              {
                "html": "The formwork of column sides can be removed after 24 hours.",
                "sources": [
                  {
                    "id": "CAP4-05-00069",
                    "label": "p. 21; topic 5 point 67"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00135",
                "label": "p. 5; topic 1 point 129"
              },
              {
                "id": "CAP4-01-00136",
                "label": "p. 5; topic 1 point 129"
              },
              {
                "id": "CAP4-05-00069",
                "label": "p. 21; topic 5 point 67"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Flexural strength estimate",
            "tex": "f_{cr} = 0.7\\sqrt{f_{ck}}",
            "note": "IS 456:2000 clause 6.2.2, both in N/mm²."
          },
          {
            "label": "Short-term static modulus",
            "tex": "E_c = 5000\\sqrt{f_{ck}}",
            "note": "IS 456:2000 clause 6.2.3.1, both in N/mm²."
          },
          {
            "label": "Slump",
            "tex": "s = H_{\\text{mould}} - h_{\\text{slumped}}",
            "note": "A length in millimetres."
          },
          {
            "label": "Oven-dry aggregate mass",
            "tex": "M_{\\text{dry}} = \\dfrac{M_{\\text{SSD}}}{1 + a}"
          },
          {
            "label": "Wet batch mass",
            "tex": "M_{\\text{wet}} = M_{\\text{dry}}\\,(1 + w)"
          },
          {
            "label": "Free water to deduct",
            "tex": "W_{\\text{free}} = M_{\\text{dry}}\\,(w - a)",
            "note": "Absorption and moisture as fractions of oven-dry mass."
          },
          {
            "label": "Cement mass from free water",
            "tex": "C = \\dfrac{W}{w/c}",
            "note": "Each other ingredient is its ratio number times the cement mass, for a mass ratio."
          },
          {
            "label": "Force rate from stress rate",
            "tex": "\\dfrac{dF}{dt} = A\\,\\dfrac{d\\sigma}{dt}"
          }
        ],
        "cautions": [],
        "gaps": [
          "Cement types and their tests, aggregate grading and the bulking of sand are not covered by these capsule items.",
          "No design-mix procedure, such as target mean strength and standard deviation, and no statistical acceptance criteria for cube results are covered.",
          "Admixtures other than superplasticizers, and durability mechanisms other than alkali-silica reaction, are mentioned only in passing.",
          "Non-destructive tests are named, but their procedures, calibration and interpretation are not taught."
        ]
      },
      "ACiE0503": {
        "code": "ACiE0503",
        "questionCount": 28,
        "format": 2,
        "summary": "<p>This subchapter covers reinforced-concrete beams and slabs under IS 456:2000: design stresses and partial factors, concrete strain limits, flexural failure modes, composite action, shear reinforcement, steel limits and bar notation, cover, development length and hooks, and deflection limits. The questions mix short calculations with corrections of capsule statements that dropped part of a code rule.</p>",
        "blocks": [
          {
            "id": "partial-factors-and-design-stresses",
            "title": "Design stresses from characteristic strengths and partial factors",
            "html": "<p>Limit-state design starts from <em>characteristic strengths</em> and reduces them by a material partial safety factor \\(\\gamma_m\\). The factor allows for uncertainty in material behaviour and in the resistance model. It is not the flexural strength of concrete, and uncertainty in the loads is handled separately through load factors.</p><ul><li><em>Concrete.</em> IS 456:2000 takes the strength in the structure as \\(0.67f_{ck}\\) and then divides it by \\(\\gamma_m = 1.5\\), so \\(0.67f_{ck}\\) alone is not yet the design value.</li><li><em>Steel.</em> Once reinforcement has strained enough to reach its design plateau, the rounded design stress is \\(0.87f_y\\). It is a steel stress, not a concrete tensile strength; bars below the plateau strain take their stress from the design stress–strain relation.</li></ul>",
            "formulas": [
              {
                "label": "Peak design stress of concrete",
                "tex": "f_{cd} = \\dfrac{0.67f_{ck}}{\\gamma_m},\\quad \\gamma_m = 1.5"
              },
              {
                "label": "Design plateau of reinforcement",
                "tex": "f_{yd} = 0.87f_y"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>\\(f_{ck} = 30\\) MPa: \\(0.67 \\times 30/1.5 = 13.4\\) MPa. Stopping at \\(0.67 \\times 30 = 20.1\\) MPa omits the material factor.</li><li>Fe415: \\(0.87 \\times 415 = 361.05\\) MPa.</li></ol>"
            },
            "moreHtml": "<p>The coefficient 0.36 in the stress-block force \\(C = 0.36f_{ck}bx_u\\) comes from integrating the parabolic-rectangular design stress over the compression depth. It is a force coefficient, not the peak stress.</p>",
            "points": [
              {
                "html": "The design strength of concrete is reduced by neglecting its flexural strength.",
                "sources": [
                  {
                    "id": "CAP4-05-00140",
                    "label": "p. 23; topic 5 point 141"
                  }
                ]
              },
              {
                "html": "For design purposes, the compressive strength of concrete in the structure is assumed to be 0.67 times the characteristic strength.",
                "sources": [
                  {
                    "id": "CAP4-05-00136",
                    "label": "p. 23; topic 5 point 137"
                  }
                ]
              },
              {
                "html": "The maximum tensile stress in steel for limit state design of an RC beam is \\(0.87f_y\\).",
                "sources": [
                  {
                    "id": "CAP4-05-00049",
                    "label": "p. 20; topic 5 point 48"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00140",
                "label": "p. 23; topic 5 point 141"
              },
              {
                "id": "CAP4-05-00136",
                "label": "p. 23; topic 5 point 137"
              },
              {
                "id": "CAP4-05-00049",
                "label": "p. 20; topic 5 point 48"
              }
            ]
          },
          {
            "id": "strain-limits-and-stress-block",
            "title": "Concrete strain limits and the parabolic-rectangular curve",
            "html": "<p>IS 456:2000 idealizes concrete in compression by a curve that rises parabolically up to a strain of 0.002 and then stays at a constant design stress up to the flexural strain limit. In bending, failure is taken to occur when the extreme compression fibre reaches 0.0035 (clause 38.1). Under pure axial compression the section strains uniformly and the limit is 0.002 instead.</p><p>Keep two ideas apart. The stress–strain curve describes the material; the <em>stress block</em> is the distribution over the compression depth of a particular section, found by applying that curve to the linear strain profile. Neither 0.0035 nor 0.002 is a permissible service strain.</p><p>This idealization belongs to concrete in IS 456:2000 limit-state bending. Prestressed-concrete provisions sit in the applicable edition of IS 1343.</p>",
            "formulas": [
              {
                "label": "Ultimate strain, extreme fibre in bending",
                "tex": "\\varepsilon_{cu} = 0.0035"
              },
              {
                "label": "End of parabola; pure axial compression",
                "tex": "\\varepsilon_{c0} = 0.002"
              }
            ],
            "points": [
              {
                "html": "The maximum compressive strain in concrete in bending compression is taken as 0.0035.",
                "sources": [
                  {
                    "id": "CAP4-04-00098",
                    "label": "p. 18; topic 4 point 98"
                  }
                ]
              },
              {
                "html": "The shape of the idealised stress–strain curve for concrete prescribed by IS 456 is rectangular-parabolic.",
                "sources": [
                  {
                    "id": "CAP4-04-00113",
                    "label": "p. 19; topic 4 point 112"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00098",
                "label": "p. 18; topic 4 point 98"
              },
              {
                "id": "CAP4-04-00113",
                "label": "p. 19; topic 4 point 112"
              }
            ]
          },
          {
            "id": "flexural-failure-modes",
            "title": "Cracking, under- and over-reinforced behaviour, and doubly reinforced beams",
            "html": "<p>As bending increases on an initially uncracked beam, the first event is flexural cracking, when the tensile concrete stress reaches its cracking strength. The under- or over-reinforced label describes the later ultimate failure sequence:</p><ul><li><em>Under-reinforced</em>: the tension steel yields before the concrete crushes, giving ductile behaviour.</li><li><em>Over-reinforced</em>: the concrete reaches its ultimate strain while the steel is still below yield; failure is compression-controlled with limited ductility.</li><li><em>Balanced</em>: both limits are reached together in the classical idealization.</li></ul><p>Adding tension steel beyond the ductility limit deepens the compression zone. An analysis may predict a larger moment, but that capacity is brittle and cannot assume full steel stress. When depth is restricted, the remedy is a larger or a <em>doubly reinforced</em> section, in which designed compression steel is counted in the moment resistance; nominal hanger bars alone do not qualify.</p>",
            "points": [
              {
                "html": "The cracking and crushing of concrete occurs first, before the steel yields, in an over-reinforced section.",
                "sources": [
                  {
                    "id": "CAP4-05-00039",
                    "label": "p. 20; topic 5 point 38"
                  }
                ]
              },
              {
                "html": "A section in which the concrete reaches its collapse strain before the steel reaches its yield strain is over-reinforced.",
                "sources": [
                  {
                    "id": "CAP4-05-00029",
                    "label": "pp. 20, 21, 23; topic 5 point 28; topic 5 point 71; topic 5 point 128"
                  }
                ]
              },
              {
                "html": "The moment of resistance of an over-reinforced section is more than that of a balanced section.",
                "sources": [
                  {
                    "id": "CAP4-05-00041",
                    "label": "p. 20; topic 5 point 40"
                  }
                ]
              },
              {
                "html": "A doubly reinforced beam has steel in both the compression and tension zones.",
                "sources": [
                  {
                    "id": "CAP4-05-00037",
                    "label": "p. 20; topic 5 point 36"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00039",
                "label": "p. 20; topic 5 point 38"
              },
              {
                "id": "CAP4-05-00029",
                "label": "pp. 20, 21, 23; topic 5 point 28; topic 5 point 71; topic 5 point 128"
              },
              {
                "id": "CAP4-05-00041",
                "label": "p. 20; topic 5 point 40"
              },
              {
                "id": "CAP4-05-00037",
                "label": "p. 20; topic 5 point 36"
              }
            ]
          },
          {
            "id": "transformed-section-and-composite-action",
            "title": "Composite action: modular ratio, thermal compatibility and shear flow",
            "html": "<p>Reinforced concrete works because bonded steel and concrete strain together. Their coefficients of thermal expansion are broadly similar, so a uniform temperature change causes little differential strain between them. This does not remove stresses from external restraint or temperature gradients, and it does not make the two materials equally stiff.</p><p>Elastic analysis handles the stiffness difference with a <em>transformed section</em>: the steel area is multiplied by the modular ratio to give an equivalent concrete area. A code's working-stress modular ratio that allows for long-term effects is a different, stated convention.</p><p>In the cracked transformed section of a singly reinforced rectangular beam, tensile concrete is ignored. The first moment of the effective area changes quadratically within the compression zone and stays constant down to the steel level, so the shear-flow diagram is parabolic above the neutral axis and constant below it.</p>",
            "formulas": [
              {
                "label": "Modular ratio",
                "tex": "m = \\dfrac{E_s}{E_c}"
              },
              {
                "label": "Elastic shear flow",
                "tex": "q = \\dfrac{VQ}{I}"
              }
            ],
            "example": {
              "title": "Worked example: instantaneous modular ratio",
              "html": "<p>With \\(E_s = 200\\) GPa and \\(E_c = 25\\) GPa, \\(m = 200/25 = 8\\), so each square millimetre of steel counts as 8 mm² of concrete.</p>"
            },
            "points": [
              {
                "html": "Modular ratio is the ratio of modulus of elasticity of steel to that of concrete.",
                "sources": [
                  {
                    "id": "CAP4-05-00095",
                    "label": "p. 22; topic 5 point 94"
                  }
                ]
              },
              {
                "html": "Steel is preferred over other materials as reinforcement in concrete because the coefficients of thermal expansion of steel and concrete are almost the same.",
                "sources": [
                  {
                    "id": "CAP4-05-00074",
                    "label": "p. 21; topic 5 point 73"
                  }
                ]
              },
              {
                "html": "For an RCC beam, the shape of the shear stress diagram is parabolic above the neutral axis and rectangular below it.",
                "sources": [
                  {
                    "id": "CAP4-04-00053",
                    "label": "p. 17; topic 4 point 51"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00095",
                "label": "p. 22; topic 5 point 94"
              },
              {
                "id": "CAP4-05-00074",
                "label": "p. 21; topic 5 point 73"
              },
              {
                "id": "CAP4-04-00053",
                "label": "p. 17; topic 4 point 51"
              }
            ]
          },
          {
            "id": "shear-in-rc-beams",
            "title": "Shear in RC beams: diagonal tension, concrete mechanisms and stirrups",
            "html": "<p>Shear combined with bending produces inclined principal tensile stresses, so cracks near supports run diagonally. Adequately anchored stirrups crossing an inclined crack carry tension across it and tie together a truss-like load path in which inclined concrete struts carry compression.</p><p>After diagonal cracking, stirrups are not the only mechanism. Shear is also carried by the uncracked compression zone, aggregate interlock across the crack and dowel action of the longitudinal bars. Simplified design adds a concrete contribution to a steel contribution and limits the shear stress so the struts do not crush.</p><p>IS 456:2000 clause 26.5.1.4 recognizes vertical stirrups, inclined stirrups, and bent-up bars used together with stirrups, subject to its angle and anchorage rules. A bar is effective only if it crosses the potential cracks and is anchored.</p>",
            "points": [
              {
                "html": "During ultimate shear failure of an RCC beam, the resistance provided is due to shear reinforcement only.",
                "sources": [
                  {
                    "id": "CAP4-04-00004",
                    "label": "p. 15; topic 4 point 4"
                  }
                ]
              },
              {
                "html": "Shear reinforcement in RCC is provided to resist diagonal tension.",
                "sources": [
                  {
                    "id": "CAP4-04-00112",
                    "label": "p. 19; topic 4 point 111"
                  }
                ]
              },
              {
                "html": "Stirrups are provided in an RC beam mainly to resist diagonal tension and prevent shear failure.",
                "sources": [
                  {
                    "id": "CAP4-05-00042",
                    "label": "p. 20; topic 5 point 41; topic 5 point 52"
                  }
                ]
              },
              {
                "html": "Shear reinforcement in a beam is provided in the form of vertical stirrups, inclined stirrups and bent-up bars.",
                "sources": [
                  {
                    "id": "CAP4-05-00099",
                    "label": "p. 22; topic 5 point 98"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00004",
                "label": "p. 15; topic 4 point 4"
              },
              {
                "id": "CAP4-04-00112",
                "label": "p. 19; topic 4 point 111"
              },
              {
                "id": "CAP4-05-00042",
                "label": "p. 20; topic 5 point 41; topic 5 point 52"
              },
              {
                "id": "CAP4-05-00099",
                "label": "p. 22; topic 5 point 98"
              }
            ]
          },
          {
            "id": "beam-reinforcement-limits-and-notation",
            "title": "Beam tension-steel limits and bar notation",
            "html": "<p>IS 456:2000 clause 26.5.1.1 bounds beam tension reinforcement from both sides, and the two bounds use different depths. The minimum uses the effective depth d with \\(f_y\\) in MPa; the maximum uses the overall depth D. The maximum is only an upper detailing bound, and a ductility or strength check can govern well before it.</p><p>In reinforcement schedules the symbol φ denotes nominal bar diameter. A note such as '4 bars, φ16' means four bars each of 16 mm diameter. The count and the diameter are separate quantities; neither gives the clear spacing, and the total area must be calculated.</p>",
            "formulas": [
              {
                "label": "Minimum tension steel",
                "tex": "A_{s,\\min} = \\dfrac{0.85\\,bd}{f_y}"
              },
              {
                "label": "Maximum tension steel",
                "tex": "A_{s,\\max} = 0.04\\,bD"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>b = 250 mm, d = 400 mm, Fe500: \\(0.85 \\times 250 \\times 400/500 = 170\\) mm².</li><li>b = 250 mm, D = 500 mm: \\(0.04 \\times 250 \\times 500 = 5000\\) mm². Using d = 450 mm would wrongly give 4500 mm².</li><li>Four φ16 bars: \\(4 \\times \\pi \\times 16^2/4 \\approx 804\\) mm².</li></ol>"
            },
            "points": [
              {
                "html": "For b = 250 mm, d = 400 mm and Fe500, the minimum tension steel \\(0.85bd/f_y\\) is 170.0 mm².",
                "sources": [
                  {
                    "id": "CAP4-05-00101",
                    "label": "p. 22; topic 5 point 100"
                  }
                ]
              },
              {
                "html": "The maximum area of tension reinforcement in a beam shall not exceed \\(0.04bD\\).",
                "sources": [
                  {
                    "id": "CAP4-05-00043",
                    "label": "p. 20; topic 5 point 42"
                  }
                ]
              },
              {
                "html": "In reinforcement details, the symbol \\(\\phi\\) denotes the diameter of a bar.",
                "sources": [
                  {
                    "id": "CAP4-05-00044",
                    "label": "p. 20; topic 5 point 43"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00101",
                "label": "p. 22; topic 5 point 100"
              },
              {
                "id": "CAP4-05-00043",
                "label": "p. 20; topic 5 point 42"
              },
              {
                "id": "CAP4-05-00044",
                "label": "p. 20; topic 5 point 43"
              }
            ]
          },
          {
            "id": "slab-cover-and-thickness",
            "title": "Nominal cover in slabs and the checks that set slab thickness",
            "html": "<p>Under IS 456:2000 Table 16 the mild-exposure baseline is 20 mm, and Note 1 allows a 5 mm reduction where main bars do not exceed 12 mm. Cover must also be at least the bar diameter (clause 26.4.1).</p><p>It must satisfy flexure, one-way shear, punching shear around columns, deflection, cover and practical bar placement. A slab that passes its flexural check may still fail punching shear at a column.</p>",
            "points": [
              {
                "html": "The minimum cover for bars in RCC slabs should be 15 mm or the bar diameter, whichever is greater.",
                "sources": [
                  {
                    "id": "CAP4-05-00047",
                    "label": "p. 20; topic 5 point 46"
                  }
                ]
              },
              {
                "html": "In a slab, the minimum thickness is designed to resist shear.",
                "sources": [
                  {
                    "id": "CAP4-05-00038",
                    "label": "p. 20; topic 5 point 37"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00047",
                "label": "p. 20; topic 5 point 46"
              },
              {
                "id": "CAP4-05-00038",
                "label": "p. 20; topic 5 point 37"
              }
            ]
          },
          {
            "id": "development-length-and-compression-laps",
            "title": "Development length from bond equilibrium, and compression laps",
            "html": "<p>A bar can carry its design force only if enough of it is embedded to pass that force to the concrete by bond. This embedded length is the <em>development length</em>. Equating the bar force to the bond force along a straight bar gives the formula below: it grows with bar diameter and stress and falls as the design bond stress rises. It is not a span, a cover dimension or a fixed multiple valid for every bar.</p><p>A lap passes force from one bar to the next by the same bond mechanism. IS 456:2000 clause 26.2.5.1 requires a compression lap of at least the compression development length and not less than 24φ; the larger governs.</p>",
            "formulas": [
              {
                "label": "Development length",
                "tex": "L_d = \\dfrac{\\phi\\,\\sigma_s}{4\\tau_{bd}}"
              },
              {
                "label": "Compression lap",
                "tex": "L_{\\text{lap}} \\ge \\max(L_d,\\ 24\\phi)"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<p>A 16 mm bar developing 300 MPa with a design bond stress of 1.5 MPa:</p>\\[L_d = \\dfrac{16 \\times 300}{4 \\times 1.5} = 800\\ \\text{mm}\\]<p>A 20 mm compression bar with \\(L_d = 620\\) mm: 24 × 20 = 480 mm, so the lap is the larger value, 620 mm.</p>"
            },
            "points": [
              {
                "html": "The length required for full transfer of bar stress to concrete is called development length.",
                "sources": [
                  {
                    "id": "CAP4-05-00021",
                    "label": "pp. 20, 23; topic 5 point 20; topic 5 point 129"
                  }
                ]
              },
              {
                "html": "The length of a steel bar that needs to be embedded in concrete to achieve the desired bond strength is called development length.",
                "sources": [
                  {
                    "id": "CAP4-05-00022",
                    "label": "pp. 20, 23; topic 5 point 20; topic 5 point 129"
                  }
                ]
              },
              {
                "html": "The lap length of reinforcement in compression shall not be less than \\(24\\phi\\), where \\(\\phi\\) is the bar diameter.",
                "sources": [
                  {
                    "id": "CAP4-05-00081",
                    "label": "pp. 21, 22; topic 5 point 81; topic 5 point 93"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00021",
                "label": "pp. 20, 23; topic 5 point 20; topic 5 point 129"
              },
              {
                "id": "CAP4-05-00022",
                "label": "pp. 20, 23; topic 5 point 20; topic 5 point 129"
              },
              {
                "id": "CAP4-05-00081",
                "label": "pp. 21, 22; topic 5 point 81; topic 5 point 93"
              }
            ]
          },
          {
            "id": "hooks-and-anchorage-credit",
            "title": "Standard hooks: an anchorage credit, not a complete anchorage",
            "html": "<p>Where the straight embedment is too short, a bend or hook can add anchorage. IS 456:2000 clause 26.2.2.1 credits a standard U-type tension hook with an anchorage value of 16φ. This credit is not the physical curved length of the hook, and it does not mean the whole required development length equals 16φ.</p><p>The designer first finds the required development length from the bar force and design bond strength, then checks whether the available straight embedment plus any admissible hook credit supplies it. Bend dimensions, confinement and support conditions have their own rules.</p>",
            "formulas": [
              {
                "label": "Standard U-type hook credit",
                "tex": "L_{\\text{hook}} = 16\\phi"
              }
            ],
            "points": [
              {
                "html": "If the diameter of a reinforcement bar is \\(d\\), the anchorage value of a U-type hook alone is \\(16d\\).",
                "sources": [
                  {
                    "id": "CAP4-05-00053",
                    "label": "p. 21; topic 5 point 53"
                  }
                ]
              },
              {
                "html": "The minimum value of anchorage provided at the end of an RCC section is \\(16\\phi\\).",
                "sources": [
                  {
                    "id": "CAP4-05-00122",
                    "label": "p. 22; topic 5 point 122"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00053",
                "label": "p. 21; topic 5 point 53"
              },
              {
                "id": "CAP4-05-00122",
                "label": "p. 22; topic 5 point 122"
              }
            ]
          },
          {
            "id": "deflection-limits",
            "title": "Deflection limits for RC beams, IS 456:2000 clause 23.2",
            "html": "<p>Serviceability requires beams to be stiff enough, and clause 23.2 sets two separate limits for normal cases.</p><table><thead><tr><th scope='col'>Limit</th><th scope='col'>Criterion</th><th scope='col'>What it covers</th></tr></thead><tbody><tr><th scope='row'>Total final deflection, 23.2(a)</th><td>span/250</td><td>All relevant loads including time-dependent effects, from the as-cast support level</td></tr><tr><th scope='row'>After partitions and finishes, 23.2(b)</th><td>smaller of span/350 and 20 mm</td><td>The increment after partitions and finishes are installed</td></tr></tbody></table><p>The two criteria answer different questions and are not interchangeable, and neither is an unattributed span/325 rule.</p>",
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>6.0 m beam, total limit: \\(6000/250 = 24\\) mm.</li><li>9 m beam, post-finish increment: \\(9000/350 = 25.71\\) mm, but the 20 mm cap is smaller, so 20 mm controls.</li></ol>"
            },
            "points": [
              {
                "html": "For simply supported beams, the maximum permitted deflection is \\(\\dfrac{1}{325}\\) of the span.",
                "sources": [
                  {
                    "id": "CAP4-05-00125",
                    "label": "p. 23; topic 5 point 125"
                  }
                ]
              },
              {
                "html": "A simply supported beam has a span of 6.5 m. Its maximum permitted deflection, at \\(\\dfrac{1}{325}\\) of the span, is 20 mm.",
                "sources": [
                  {
                    "id": "CAP4-05-00126",
                    "label": "p. 23; topic 5 point 125"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00125",
                "label": "p. 23; topic 5 point 125"
              },
              {
                "id": "CAP4-05-00126",
                "label": "p. 23; topic 5 point 125"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Concrete design stress",
            "tex": "f_{cd} = \\dfrac{0.67f_{ck}}{1.5}"
          },
          {
            "label": "Steel design stress",
            "tex": "f_{yd} = 0.87f_y"
          },
          {
            "label": "Strain limits",
            "tex": "\\varepsilon_{cu} = 0.0035,\\quad \\varepsilon_{c0} = 0.002"
          },
          {
            "label": "Modular ratio",
            "tex": "m = \\dfrac{E_s}{E_c}"
          },
          {
            "label": "Shear flow",
            "tex": "q = \\dfrac{VQ}{I}"
          },
          {
            "label": "Minimum tension steel",
            "tex": "A_{s,\\min} = \\dfrac{0.85\\,bd}{f_y}"
          },
          {
            "label": "Maximum tension steel",
            "tex": "A_{s,\\max} = 0.04\\,bD"
          },
          {
            "label": "Development length",
            "tex": "L_d = \\dfrac{\\phi\\,\\sigma_s}{4\\tau_{bd}}"
          },
          {
            "label": "Compression lap",
            "tex": "L_{\\text{lap}} \\ge \\max(L_d,\\ 24\\phi)"
          },
          {
            "label": "Standard hook credit",
            "tex": "L_{\\text{hook}} = 16\\phi"
          },
          {
            "label": "Total deflection limit",
            "tex": "\\delta_{\\text{total}} \\le \\dfrac{L}{250}"
          },
          {
            "label": "Post-finish deflection limit",
            "tex": "\\delta \\le \\min\\left(\\dfrac{L}{350},\\ 20\\ \\text{mm}\\right)"
          }
        ],
        "cautions": [],
        "gaps": [
          "Complete flexural design (limiting neutral-axis depth, limiting moment of resistance and flanged beams) is not covered by these capsule items.",
          "Design shear strength of concrete, the maximum shear stress and the stirrup spacing formulas are not given.",
          "Tension lap lengths, bar curtailment and tabulated design bond stresses are not covered.",
          "Two-way slabs, span-to-effective-depth ratios and crack-width checks are not covered; working-stress design appears only through the modular ratio."
        ]
      },
      "ACiE0504": {
        "code": "ACiE0504",
        "questionCount": 21,
        "format": 2,
        "summary": "<p>This subchapter covers reinforced concrete columns, isolated and combined footings and the basics of prestressed concrete under IS 456:2000 and IS 1343:2012. The capsule items test concrete strain limits, slender-column behaviour, column steel percentages, bar counts and cover, the helical-column credit, equivalent footing actions, minimum footing steel and shear checks, combined-footing geometry, prestressing grades and old strength units, parabolic load balancing and prestress losses.</p>",
        "blocks": [
          {
            "id": "column-strain-limits-and-slenderness",
            "title": "Concrete strain limits in columns and the effect of slenderness",
            "html": "<p>IS 456:2000 idealizes concrete failure by a limiting strain, and the limit depends on how strain is distributed over the section. Under pure axial compression the whole section shortens uniformly, and the limiting strain is 0.002 (clause 39.1).</p><p>In flexure the strain varies linearly with depth, and failure is taken when the extreme compression fibre reaches 0.0035 (clause 38.1). The two values describe different strain profiles, so neither can stand in for the other.</p><p>Slenderness adds a geometric effect. When a slender column carrying \\(P\\) deflects sideways by \\(\\delta\\), the axial force gains a lever arm and adds a <em>second-order moment</em> of about \\(P\\delta\\), which increases the deflection further.</p><p>A stability assessment therefore keeps the direct stress \\(P/A\\), the first-order bending moment and this magnification together.</p>",
            "formulas": [
              {
                "label": "Limiting concrete strains",
                "tex": "\\varepsilon_{\\text{axial}} = 0.002, \\quad \\varepsilon_{\\text{cu}} = 0.0035",
                "where": "<p>\\(\\varepsilon_{\\text{axial}}\\) applies to uniform axial strain and \\(\\varepsilon_{\\text{cu}}\\) to the extreme fibre in bending.</p>"
              },
              {
                "label": "Moment including the second-order term",
                "tex": "M \\approx M_1 + P\\,\\delta",
                "where": "<p>\\(M_1\\) is the first-order moment and \\(\\delta\\) the lateral deflection of the column.</p>"
              },
              {
                "label": "Elastic stress in a deflected column",
                "tex": "\\sigma_{\\max} = \\dfrac{P}{A} + \\dfrac{M_1 + P\\,\\delta}{Z}"
              }
            ],
            "moreHtml": "<p>Clause 39.1 also covers compression with bending when the whole section stays in compression. The strain at the more compressed face is then limited to \\(0.0035 - 0.75\\,\\varepsilon_{\\min}\\), where \\(\\varepsilon_{\\min}\\) is the strain at the less compressed face. For a uniform profile both face strains are equal, so \\(1.75\\,\\varepsilon = 0.0035\\) and \\(\\varepsilon = 0.002\\), which reconciles the two limits.</p>",
            "points": [
              {
                "html": "The maximum compressive strain in concrete in axial compression is taken as 0.002.",
                "sources": [
                  {
                    "id": "CAP4-05-00027",
                    "label": "p. 20; topic 5 point 26"
                  }
                ]
              },
              {
                "html": "In the case of long columns, the direct stress is negligible compared with the bending stress.",
                "sources": [
                  {
                    "id": "CAP4-05-00056",
                    "label": "p. 21; topic 5 point 56"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00027",
                "label": "p. 20; topic 5 point 26"
              },
              {
                "id": "CAP4-05-00056",
                "label": "p. 21; topic 5 point 56"
              }
            ]
          },
          {
            "id": "column-longitudinal-steel",
            "title": "Longitudinal steel in RC columns: area bounds, lapped bars and bar counts",
            "html": "<p>IS 456:2000 clause 26.5.3.1 fixes the longitudinal reinforcement of a column as a share of its gross area. Apart from the special case of a column that is larger than its load requires, the ordinary rules are:</p><ul><li>at least 0.8% and at most 6% of the gross area;</li><li>a note advising that the steel should usually stay within 4% where bars from the storey below are lapped, because the overlapping bars congest the section;</li><li>at least 4 bars in a rectangular column and 6 bars in a circular one.</li></ul><p>A fraction written as 0.04 means 4%, not 0.04%. The 6% figure is a detailing bound, not an optimum or a required amount, and the 4% advice is a practical recommendation rather than a target.</p><p>Bar counts are likewise necessary but not sufficient: total area, bar diameter, peripheral spacing, cover and transverse restraint must also comply.</p>",
            "formulas": [
              {
                "label": "Ordinary area bounds",
                "tex": "0.008\\,A_g \\le A_{sc} \\le 0.06\\,A_g",
                "where": "<p>\\(A_{sc}\\) is the longitudinal steel area and \\(A_g\\) the gross area of the column.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a 400 mm square column",
              "html": "<p>The gross area of a 400 mm × 400 mm section is \\(A_g = 160\\,000\\ \\text{mm}^2\\).</p>\\[\\begin{aligned} 0.8\\%: &amp;\\quad 0.008\\,A_g = 1280\\ \\text{mm}^2 \\\\ 4\\%: &amp;\\quad 0.04\\,A_g = 6400\\ \\text{mm}^2 \\\\ 6\\%: &amp;\\quad 0.06\\,A_g = 9600\\ \\text{mm}^2 \\end{aligned}\\]<p>A design with 2.5% steel, 4000 mm², lies inside the ordinary bounds; its laps, spacing and capacity are still checked.</p>"
            },
            "points": [
              {
                "html": "The maximum theoretical percentage of longitudinal reinforcement in an RCC column is 6% of the gross area.",
                "sources": [
                  {
                    "id": "CAP4-05-00057",
                    "label": "p. 21; topic 5 point 57"
                  }
                ]
              },
              {
                "html": "In practice, the maximum percentage of longitudinal reinforcement in a column is 4%.",
                "sources": [
                  {
                    "id": "CAP4-05-00033",
                    "label": "p. 20; topic 5 point 32"
                  }
                ]
              },
              {
                "html": "In practice, the maximum percentage of rebar in a compression member is 2%.",
                "sources": [
                  {
                    "id": "CAP4-05-00143",
                    "label": "p. 22; topic 5 point 118"
                  }
                ]
              },
              {
                "html": "The minimum number of longitudinal bars in an RCC rectangular column must be 4.",
                "sources": [
                  {
                    "id": "CAP4-05-00121",
                    "label": "p. 22; topic 5 point 121"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00057",
                "label": "p. 21; topic 5 point 57"
              },
              {
                "id": "CAP4-05-00033",
                "label": "p. 20; topic 5 point 32"
              },
              {
                "id": "CAP4-05-00143",
                "label": "p. 22; topic 5 point 118"
              },
              {
                "id": "CAP4-05-00121",
                "label": "p. 22; topic 5 point 121"
              }
            ]
          },
          {
            "id": "column-cover-and-helical-credit",
            "title": "Nominal cover for columns and the conditional credit for helical reinforcement",
            "html": "<p>For the longitudinal bars of an ordinary column, the IS 456:2000 detailing rule used here asks for a nominal cover of at least 40 mm and not less than the bar diameter. With 20 mm bars in a 300 mm square column, the larger of 40 mm and 20 mm governs, so the cover is 40 mm.</p><p>The separate relaxation for small columns with small bars does not apply at that size, and exposure or fire rating can demand more. The figure is a length in millimetres, so '40' quoted without units or conditions is incomplete.</p><p>A closely spaced <em>helix</em> confines the core concrete and delays its failure. Clause 39.4 therefore lets the strength of a helically reinforced column be taken as 1.05 times that of a similar column with lateral ties.</p><p>The credit applies only when the helix meets the specified detailing: volumetric ratio, pitch and anchorage. A circular outline, a single circular tie or an unchecked spiral does not earn it.</p>",
            "formulas": [
              {
                "label": "Nominal cover to column bars",
                "tex": "c_{\\text{nom}} \\ge \\max(40\\ \\text{mm},\\ \\phi)",
                "where": "<p>\\(\\phi\\) is the longitudinal bar diameter; exposure and fire requirements can govern instead.</p>"
              },
              {
                "label": "Helical reinforcement credit",
                "tex": "P_{\\text{helix}} = 1.05\\,P_{\\text{tied}}",
                "where": "<p>Valid only when the helix satisfies the clause 39.4 detailing conditions.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: cover and helix credit",
              "html": "<ol><li>Cover for 20 mm bars: \\(\\max(40, 20) = 40\\ \\text{mm}\\).</li><li>A compliant helix on a column whose tied design resistance is 1200 kN: \\(1.05 \\times 1200 = 1260\\ \\text{kN}\\).</li></ol><p>The credit is a 5% increase. Adding 5 kN, or applying 10%, misreads the factor.</p>"
            },
            "points": [
              {
                "html": "The minimum clear cover for a column is 40 mm.",
                "sources": [
                  {
                    "id": "CAP4-04-00056",
                    "label": "p. 17; topic 4 point 55"
                  }
                ]
              },
              {
                "html": "The strength of a column with helical reinforcement shall be 1.05 times the strength of a similar column with lateral ties.",
                "sources": [
                  {
                    "id": "CAP4-05-00060",
                    "label": "p. 21; topic 5 point 59"
                  }
                ]
              },
              {
                "html": "A column with lateral ties has a strength of 1200 kN. A similar column with helical reinforcement has a strength of 1260 kN.",
                "sources": [
                  {
                    "id": "CAP4-05-00061",
                    "label": "p. 21; topic 5 point 59"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00056",
                "label": "p. 17; topic 4 point 55"
              },
              {
                "id": "CAP4-05-00060",
                "label": "p. 21; topic 5 point 59"
              },
              {
                "id": "CAP4-05-00061",
                "label": "p. 21; topic 5 point 59"
              }
            ]
          },
          {
            "id": "isolated-footing-actions-and-checks",
            "title": "Isolated footings: eccentric column loads, minimum mesh and shear checks",
            "html": "<p>A column load that misses the footing centroid by an eccentricity \\(e\\) is statically equivalent to the same force at the centroid together with a couple \\(M = Pe\\). The footing is designed for both actions: the moment is added to the axial load, never substituted for it, and it makes the bearing pressure under the base non-uniform.</p><p>The footing slab must carry at least the solid-slab minimum reinforcement, which IS 456:2000 clause 34.5.1 adopts. With HYSD bars that is 0.12% of the gross section in each direction (0.15% for mild steel bars), and bending demand can call for more.</p><p>The bottom mesh works in flexure and controls cracking. In foundation design, the shear strength is resisted by the transverse bars, and the footing is checked for one-way (beam) shear and punching (two-way) shear around the column. Shear reinforcement, where used, needs its own effective, anchored detail.</p>",
            "formulas": [
              {
                "label": "Eccentric load moved to the centroid",
                "tex": "N = P, \\qquad M = P\\,e"
              },
              {
                "label": "Minimum footing steel with HYSD bars",
                "tex": "A_{\\text{st,min}} = 0.0012\\,b\\,D",
                "where": "<p>\\(b\\) is the width and \\(D\\) the overall depth of the section considered, in each direction.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: equivalent actions and minimum mesh",
              "html": "<p>A 500 kN column load acting 0.12 m from the centroid:</p>\\[M = 500 \\times 0.12 = 60\\ \\text{kN m}\\]<p>The footing therefore carries 500 kN axially together with 60 kN m.</p><p>A strip 1000 mm wide and 400 mm thick, reinforced with Fe415 bars:</p>\\[\\begin{aligned} A_{\\text{st,min}} &amp;= 0.0012 \\times 1000 \\times 400 \\\\ &amp;= 480\\ \\text{mm}^2 \\end{aligned}\\]<p>That area is needed in each direction.</p>"
            },
            "points": [
              {
                "html": "An eccentric footing is subjected to axial load and bending moment.",
                "sources": [
                  {
                    "id": "CAP4-01-00137",
                    "label": "p. 5; topic 1 point 130"
                  }
                ]
              },
              {
                "html": "The minimum percentage of reinforcement required in a footing with Fe415 grade steel is 0.12%.",
                "sources": [
                  {
                    "id": "CAP4-05-00062",
                    "label": "p. 21; topic 5 point 60"
                  }
                ]
              },
              {
                "html": "In foundation design, the shear strength is resisted by transverse bars.",
                "sources": [
                  {
                    "id": "CAP4-05-00064",
                    "label": "p. 21; topic 5 point 62"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00137",
                "label": "p. 5; topic 1 point 130"
              },
              {
                "id": "CAP4-05-00062",
                "label": "p. 21; topic 5 point 60"
              },
              {
                "id": "CAP4-05-00064",
                "label": "p. 21; topic 5 point 62"
              }
            ]
          },
          {
            "id": "combined-footings",
            "title": "Combined footings and the reason for a trapezoidal plan",
            "html": "<p>A <em>combined footing</em> is a single footing slab designed as the common base of two or more selected columns. It suits columns that stand close together, or an exterior column whose pad cannot spread past a property line. A strap footing is different: it keeps separate pads and links them with a beam. A raft generally carries a large group of columns, or the whole building, on one wider base.</p><p>Proportioning puts the centroid of the footing area on the line of action of the resultant column load. In the idealized model of a rigid footing in full, linear contact, the bearing pressure is then uniform.</p><p>With unequal loads and limits at both ends of the base, a rectangle may be unable to bring its centroid under the resultant. A <em>trapezoidal plan</em>, wider at the heavier end, moves the area centroid toward that load.</p><p>Unequal loads do not force a trapezoid, and aligning the centroid neither removes shear and bending in the slab nor makes the pressure independent of real soil behaviour.</p>",
            "formulas": [
              {
                "label": "Position of the load resultant",
                "tex": "\\bar{x}_R = \\dfrac{\\sum P_i\\,x_i}{\\sum P_i}"
              },
              {
                "label": "Centroid of a trapezoidal plan",
                "tex": "\\bar{x} = \\dfrac{L}{3} \\cdot \\dfrac{a + 2b}{a + b}",
                "where": "<p>Measured from the end of width \\(a\\); \\(b\\) is the width at the other end and \\(L\\) the length.</p>"
              }
            ],
            "example": {
              "title": "Worked example: sizing the end widths",
              "html": "<p>Loads of 800 kN and 1200 kN stand 4 m apart, and both ends are restricted, so the base is 5 m long with 0.5 m projections. From the lighter end:</p>\\[\\begin{aligned} \\bar{x}_R &amp;= \\dfrac{800 \\times 0.5 + 1200 \\times 4.5}{2000} \\\\ &amp;= 2.9\\ \\text{m} \\end{aligned}\\]<p>A rectangle has its centroid at 2.5 m, which misses the resultant. Setting the trapezoid centroid to 2.9 m gives \\((a + 2b)/(a + b) = 1.74\\), so \\(b \\approx 2.85\\,a\\): the heavier end must be almost three times as wide.</p>"
            },
            "points": [
              {
                "html": "When one footing accommodates two or more columns, it is usually called a combined footing.",
                "sources": [
                  {
                    "id": "CAP4-05-00066",
                    "label": "p. 21; topic 5 point 64"
                  }
                ]
              },
              {
                "html": "When two column loads are unequal, a trapezoidal combined footing can be provided.",
                "sources": [
                  {
                    "id": "CAP4-05-00054",
                    "label": "p. 21; topic 5 point 54"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00066",
                "label": "p. 21; topic 5 point 64"
              },
              {
                "id": "CAP4-05-00054",
                "label": "p. 21; topic 5 point 54"
              }
            ]
          },
          {
            "id": "prestressing-principle-and-grades",
            "title": "Why concrete is prestressed and the minimum grades for prestressed work",
            "html": "<p>Concrete cracks at a low tensile stress. In <em>prestressed concrete</em> a tendon is stretched and its force is transferred to the member, so the concrete starts life in deliberate compression, with a bending effect as well when the tendon is eccentric. Later loads must first cancel this stored compression before any tension appears, which is how tensile stresses and cracking are controlled.</p><p>Ordinary passive bars pick up force only as the member deforms under load; an actively tensioned tendon applies its force from transfer onwards.</p><p>Prestressed work needs stronger concrete than the M20 minimum of ordinary reinforced concrete in mild exposure. IS 1343:2012, clause 6.1 with Note 2 of Table 1, sets M40 for pre-tensioned and M30 for post-tensioned members, before any higher exposure requirement. These are characteristic 28-day cube grades; the strength and stresses at transfer are separate checks.</p>",
            "formulas": [
              {
                "label": "Old strength units in SI",
                "tex": "1\\ \\text{kgf/cm}^2 = \\dfrac{9.80665}{100}\\ \\text{N/mm}^2"
              }
            ],
            "example": {
              "title": "Worked example: converting an old 350 kgf/cm² figure",
              "html": "<p>Older texts write kg/cm², meaning kilogram-force per square centimetre. One kilogram-force is 9.80665 N and one square centimetre is 100 mm².</p>\\[\\begin{aligned} f &amp;= \\dfrac{350 \\times 9.80665}{100} \\\\ &amp;= 34.323275\\ \\text{N/mm}^2 \\\\ &amp;\\approx 34.32\\ \\text{MPa} \\end{aligned}\\]<p>The result matches neither IS 1343 grade, and converting it says nothing about the strength needed at transfer.</p>"
            },
            "points": [
              {
                "html": "The purpose of reinforcement in prestressed concrete is to impart initial compressive stress in the concrete.",
                "sources": [
                  {
                    "id": "CAP4-05-00065",
                    "label": "p. 21; topic 5 point 63"
                  }
                ]
              },
              {
                "html": "The minimum cube strength of concrete used for a prestressed member is 350 kg/cm<sup>2</sup>.",
                "sources": [
                  {
                    "id": "CAP4-05-00058",
                    "label": "p. 21; topic 5 point 58"
                  }
                ]
              },
              {
                "html": "The minimum cube strength of concrete for a prestressed member, 350 kg/cm<sup>2</sup>, is about 35 MPa.",
                "sources": [
                  {
                    "id": "CAP4-05-00059",
                    "label": "p. 21; topic 5 point 58"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00065",
                "label": "p. 21; topic 5 point 63"
              },
              {
                "id": "CAP4-05-00058",
                "label": "p. 21; topic 5 point 58"
              },
              {
                "id": "CAP4-05-00059",
                "label": "p. 21; topic 5 point 58"
              }
            ]
          },
          {
            "id": "tendon-profile-load-balancing",
            "title": "Tendon profiles and load balancing in simply supported prestressed beams",
            "html": "<p>A curved tendon under force \\(P\\) presses on the concrete wherever it changes direction. For a shallow profile the equivalent transverse load per unit length is \\(P\\) times the curvature of the tendon.</p><p>To balance a uniform downward load while the prestress stays constant, the curvature must be constant, and a curve of constant curvature in this shallow sense is a <em>parabola</em>. With zero eccentricity at both supports of a symmetric simple span, the parabola dips furthest below the centroid at midspan.</p><p>Other profiles give other load patterns. A straight tendon has no curvature and so no distributed transverse load, although an eccentric one still applies end moments. A harped tendon, made of straight lengths meeting at deviators, applies concentrated forces there instead of a uniform load.</p><p>The parabola is an ideal starting point. A real layout must still satisfy losses, stress limits at transfer and service, anchorage and every other load case.</p>",
            "formulas": [
              {
                "label": "Parabolic tendon profile",
                "tex": "e(x) = \\dfrac{4\\,e_{\\text{mid}}\\,x\\,(L - x)}{L^2}",
                "where": "<p>\\(e_{\\text{mid}}\\) is the midspan eccentricity below the centroid and \\(x\\) the distance from a support.</p>"
              },
              {
                "label": "Balanced upward load",
                "tex": "w_{\\text{bal}} = \\dfrac{8\\,P\\,e_{\\text{mid}}}{L^2}"
              }
            ],
            "example": {
              "title": "Worked example: a 10 m span",
              "html": "<p>Take \\(P = 1000\\ \\text{kN}\\), \\(e_{\\text{mid}} = 0.25\\ \\text{m}\\) and \\(L = 10\\ \\text{m}\\).</p>\\[\\begin{aligned} w_{\\text{bal}} &amp;= \\dfrac{8 \\times 1000 \\times 0.25}{10^2} \\\\ &amp;= 20\\ \\text{kN/m, upward} \\end{aligned}\\]<p>The curvature magnitude is \\(8e_{\\text{mid}}/L^2 = 0.02\\ \\text{m}^{-1}\\). The anchorage forces at the ends complete the equilibrium of the tendon.</p>"
            },
            "points": [
              {
                "html": "For a prestressed concrete simply supported beam under a UDL over the entire span, the cable should ideally be parabolic, with zero eccentricity at the ends and maximum at mid-span.",
                "sources": [
                  {
                    "id": "CAP4-04-00105",
                    "label": "p. 19; topic 4 point 106"
                  }
                ]
              },
              {
                "html": "For a prestressed simply supported beam under a UDL, the eccentricity of the ideal parabolic cable is maximum at the centre of the span.",
                "sources": [
                  {
                    "id": "CAP4-04-00106",
                    "label": "p. 19; topic 4 point 106"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00105",
                "label": "p. 19; topic 4 point 106"
              },
              {
                "id": "CAP4-04-00106",
                "label": "p. 19; topic 4 point 106"
              }
            ]
          },
          {
            "id": "prestress-losses",
            "title": "Prestress losses: immediate and time-dependent mechanisms",
            "html": "<p>The tendon force falls from its initial value to a smaller <em>effective prestress</em>. The losses are easiest to remember by when they occur:</p><table><thead><tr><th scope='col'>Stage</th><th scope='col'>Mechanisms</th></tr></thead><tbody><tr><td>During tensioning and at transfer</td><td>Elastic shortening of the concrete, duct friction, anchorage seating</td></tr><tr><td>With time, after transfer</td><td>Creep of the concrete, shrinkage of the concrete, relaxation of the steel</td></tr></tbody></table><p>Creep and shrinkage shorten the concrete along the tendon, so the stretched steel loses strain and stress. <em>Relaxation</em> is a loss of steel stress while the strain is held constant.</p><p>Which mechanisms act, and how large each is, depends on the prestressing system, materials and sequence; duct friction, for instance, arises only where tendons run in ducts.</p>",
            "formulas": [
              {
                "label": "Effective prestress after losses",
                "tex": "f_{pe} = (1 - \\eta)\\,f_{pi}",
                "where": "<p>\\(\\eta\\) is the total loss as a fraction of the initial stress \\(f_{pi}\\).</p>"
              }
            ],
            "example": {
              "title": "Worked example: an 18% calculated loss",
              "html": "<p>The initial stress is 1200 MPa and the calculated loss is 18%, so the retained fraction is \\(1 - 0.18 = 0.82\\).</p>\\[f_{pe} = 0.82 \\times 1200 = 984\\ \\text{MPa}\\]<p>The 216 MPa difference is the loss itself, not the stress that remains in the tendon.</p>"
            },
            "points": [
              {
                "html": "The total loss in prestressed concrete is approximately 15–25% of the initial prestress.",
                "sources": [
                  {
                    "id": "CAP4-05-00132",
                    "label": "p. 23; topic 5 point 133"
                  }
                ]
              },
              {
                "html": "A tendon has an initial prestressing force of 1000 kN. With a total loss of 20%, the effective prestressing force is 800 kN.",
                "sources": [
                  {
                    "id": "CAP4-05-00133",
                    "label": "p. 23; topic 5 point 133"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00132",
                "label": "p. 23; topic 5 point 133"
              },
              {
                "id": "CAP4-05-00133",
                "label": "p. 23; topic 5 point 133"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Eccentric load at the footing centroid",
            "tex": "M = P\\,e"
          },
          {
            "label": "Limiting concrete strains",
            "tex": "\\varepsilon_{\\text{axial}} = 0.002, \\quad \\varepsilon_{\\text{cu}} = 0.0035",
            "note": "Uniform axial strain and extreme fibre in bending."
          },
          {
            "label": "Column longitudinal steel",
            "tex": "0.008\\,A_g \\le A_{sc} \\le 0.06\\,A_g",
            "note": "Usually at most 4% where bars are lapped; at least 4 bars in rectangular and 6 in circular columns."
          },
          {
            "label": "Nominal cover to column bars",
            "tex": "c_{\\text{nom}} \\ge \\max(40\\ \\text{mm},\\ \\phi)"
          },
          {
            "label": "Helical column credit",
            "tex": "P_{\\text{helix}} = 1.05\\,P_{\\text{tied}}",
            "note": "Only with compliant helical detailing."
          },
          {
            "label": "Minimum footing steel, HYSD bars",
            "tex": "A_{\\text{st,min}} = 0.0012\\,b\\,D",
            "note": "In each direction."
          },
          {
            "label": "Resultant of column loads",
            "tex": "\\bar{x}_R = \\dfrac{\\sum P_i\\,x_i}{\\sum P_i}"
          },
          {
            "label": "Centroid of a trapezoid from the end of width a",
            "tex": "\\bar{x} = \\dfrac{L}{3} \\cdot \\dfrac{a + 2b}{a + b}"
          },
          {
            "label": "Parabolic tendon profile",
            "tex": "e(x) = \\dfrac{4\\,e_{\\text{mid}}\\,x\\,(L - x)}{L^2}"
          },
          {
            "label": "Balanced upward load",
            "tex": "w_{\\text{bal}} = \\dfrac{8\\,P\\,e_{\\text{mid}}}{L^2}"
          },
          {
            "label": "Effective prestress",
            "tex": "f_{pe} = (1 - \\eta)\\,f_{pi}"
          },
          {
            "label": "Old strength units",
            "tex": "1\\ \\text{kgf/cm}^2 = 0.0980665\\ \\text{MPa}"
          }
        ],
        "cautions": [],
        "gaps": [
          "Axial-load capacity formulas for short columns, minimum eccentricity and the interaction of axial load with bending are not covered by these capsule items.",
          "Tie diameter and pitch rules, effective-length factors and the slenderness limit separating short and long columns are not given.",
          "Bearing-pressure distribution under moment, critical sections for bending and shear, and design shear strengths of footings are not covered.",
          "Calculation of individual prestress losses, permissible stresses at transfer and service, and anchorage-zone design are not covered."
        ]
      },
      "ACiE0505": {
        "code": "ACiE0505",
        "questionCount": 23,
        "format": 2,
        "summary": "<p>This subchapter covers steel design: working-stress checks, bolted and welded connections, built-up and tubular columns, roof trusses and purlins, and the local behaviour of beam webs under concentrated loads and shear. The capsule items test permissible stress, friction-grip versus bearing bolts, edge distances, fillet-weld orientation, throat and length, spot welding, long joints, laced and battened columns, lacing angles, batten overlap, purlin placement and moments, truss economy and span choice, and web crippling and buckling.</p>",
        "blocks": [
          {
            "id": "working-and-permissible-stress",
            "title": "Working-stress checks: calculated stress against permissible stress",
            "html": "<p>Working-stress design compares two different stresses. The <em>working stress</em> is the stress actually calculated under service loads, that is, the demand. The <em>permissible stress</em> is the allowed upper bound for it, found by dividing a limiting material stress by a factor of safety.</p><p>A check is satisfactory when the calculated stress does not exceed the permissible limit. The two are equal only when a member is fully utilized, not by definition, and both must be expressed in the same units.</p><p>For a ductile, yield-based tension check the permissible stress sits below yield. Dividing by the factor of safety lowers the allowance; multiplying by it would push the allowance above yield, which defeats the purpose.</p>",
            "formulas": [
              {
                "label": "Permissible stress from yield",
                "tex": "\\sigma_{\\text{allow}} = \\dfrac{f_y}{FS}",
                "where": "<p>\\(FS\\) is the stated factor of safety.</p>"
              },
              {
                "label": "Satisfactory working-stress check",
                "tex": "\\sigma_{\\text{calc}} \\le \\sigma_{\\text{allow}}"
              }
            ],
            "example": {
              "title": "Worked example: yield stress 240 MPa with a factor of 1.6",
              "html": "<p>A tension check stipulates a factor of safety of 1.6 on a yield stress of 240 MPa.</p>\\[\\sigma_{\\text{allow}} = \\dfrac{240}{1.6} = 150\\ \\text{MPa}\\]<p>The allowance is safely below yield. Multiplying instead, \\(240 \\times 1.6 = 384\\ \\text{MPa}\\), would wrongly place it above yield.</p>"
            },
            "points": [
              {
                "html": "In working stress design, the permissible stress is less than the yield stress.",
                "sources": [
                  {
                    "id": "CAP4-04-00099",
                    "label": "p. 18; topic 4 point 99"
                  }
                ]
              },
              {
                "html": "Permissible stress in steel is taken as the working stress.",
                "sources": [
                  {
                    "id": "CAP4-05-00072",
                    "label": "p. 21; topic 5 point 70"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00099",
                "label": "p. 18; topic 4 point 99"
              },
              {
                "id": "CAP4-05-00072",
                "label": "p. 21; topic 5 point 70"
              }
            ]
          },
          {
            "id": "bolted-connections-bearing-and-friction",
            "title": "Bolted connections: bearing and friction-grip action, and edge distances",
            "html": "<p>High-strength bolts can carry load in two distinct ways:</p><ul><li><em>Bearing type</em>: the plates slip until the bolt shanks bear on the sides of the holes, and force passes by bolt shear and plate bearing.</li><li><em>Slip-resistant or friction-grip type</em>: the bolts are pretensioned to clamp the plies together, and force passes by friction on the faying surfaces without slip at the design limit state.</li></ul><p>Which mechanism a joint uses is set by its specified pretension, the preparation of its faying surfaces and the design mechanism chosen. The high strength of the bolt material, or the shape of its head, does not by itself make a joint slip-resistant.</p><p>Under repeated reversal of load, a bearing joint can shuffle back and forth through its hole clearance. Pretensioned high-strength friction-grip bolts with suitable faying surfaces stop that slip, provided installation tension, hole details and the slip-resistance limit state are all controlled.</p><p>Holes also need enough surrounding metal. IS 800:2007 clause 10.2.4.2 sets the minimum edge distance, measured from the hole centre, as a multiple of the hole diameter that depends on how the edge was made.</p>",
            "formulas": [
              {
                "label": "Edge distance, rolled or machine-flame-cut edge",
                "tex": "e_{\\min} = 1.5\\,d_0"
              },
              {
                "label": "Edge distance, sheared or hand-flame-cut edge",
                "tex": "e_{\\min} = 1.7\\,d_0",
                "where": "<p>\\(d_0\\) is the hole diameter; distances run from the hole centre to the edge.</p>"
              },
              {
                "label": "Friction transfer in principle",
                "tex": "V_{\\text{slip}} \\propto \\mu\\,n_e\\,F_0",
                "where": "<p>\\(\\mu\\) is the slip factor of the faying surfaces, \\(n_e\\) the number of effective interfaces and \\(F_0\\) the bolt pretension; code expressions add further factors.</p>"
              }
            ],
            "example": {
              "title": "Worked example: edge distance for a 22 mm hole",
              "html": "<ol><li>Rolled or machine-flame-cut edge: \\(1.5 \\times 22 = 33\\ \\text{mm}\\).</li><li>Sheared or hand-flame-cut edge: \\(1.7 \\times 22 = 37.4\\ \\text{mm}\\).</li></ol><p>Both distances run from the centre of the hole to the edge of the plate.</p>"
            },
            "points": [
              {
                "html": "For the reversal of stresses, the most suitable bolt is a high-strength friction grip bolt.",
                "sources": [
                  {
                    "id": "CAP4-05-00078",
                    "label": "p. 21; topic 5 point 77"
                  }
                ]
              },
              {
                "html": "High strength bolts are used for both slip resistant and bearing type connections.",
                "sources": [
                  {
                    "id": "CAP4-05-00103",
                    "label": "p. 22; topic 5 point 102"
                  }
                ]
              },
              {
                "html": "The minimum edge and end distance for a rolled or machine flame cut edge is 1.5 times the hole diameter.",
                "sources": [
                  {
                    "id": "CAP4-05-00079",
                    "label": "p. 21; topic 5 point 79"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00078",
                "label": "p. 21; topic 5 point 77"
              },
              {
                "id": "CAP4-05-00103",
                "label": "p. 22; topic 5 point 102"
              },
              {
                "id": "CAP4-05-00079",
                "label": "p. 21; topic 5 point 79"
              }
            ]
          },
          {
            "id": "fillet-weld-geometry",
            "title": "Fillet welds: orientation, effective throat and minimum effective length",
            "html": "<p>A fillet weld is named by the direction of its axis relative to the load. A <em>side</em> or <em>longitudinal</em> fillet lies along the lapped plate's edge with its axis parallel to the force; an <em>end</em> or <em>transverse</em> fillet lies across the force. Orientation describes how load is transferred, not by itself how much the weld can resist.</p><p>Weld strength is worked out on the <em>effective throat</em>. A design calculation takes the throat as a coefficient \\(K\\) times the weld size, using the value of \\(K\\) that its governing provision specifies for the angle between the fusion faces.</p><p>That coefficient differs from the pure geometry of an ideal equal-leg weld, whose throat is \\(s\\cos(\\theta/2)\\). The two figures are different quantities.</p><p>IS 800:2007 clause 10.5.4.1 also requires the effective length of a fillet weld to be at least four times its size. Deposited length and end allowances must not be confused with effective full-size length.</p>",
            "formulas": [
              {
                "label": "Effective throat with a specified coefficient",
                "tex": "t_e = K\\,s"
              },
              {
                "label": "Geometric throat of an ideal equal-leg weld",
                "tex": "t_g = s\\cos\\dfrac{\\theta}{2}",
                "where": "<p>\\(s\\) is the weld size and \\(\\theta\\) the angle between the fusion faces.</p>"
              },
              {
                "label": "Minimum effective length",
                "tex": "L_{\\text{eff}} \\ge 4\\,s"
              }
            ],
            "example": {
              "title": "Worked examples: throat and length checks",
              "html": "<ol><li>A specified \\(K = 0.70\\) with an 8 mm weld: \\(t_e = 0.70 \\times 8 = 5.6\\ \\text{mm}\\).</li><li>Ideal geometry at 70°: \\(8\\cos 35^\\circ \\approx 6.55\\ \\text{mm}\\), a different quantity.</li><li>A 6 mm weld needs \\(4 \\times 6 = 24\\ \\text{mm}\\) of effective length, so 20 mm fails.</li></ol>"
            },
            "points": [
              {
                "html": "A fillet weld whose axis is parallel to the direction of the applied load is known as a side fillet weld.",
                "sources": [
                  {
                    "id": "CAP4-05-00076",
                    "label": "p. 21; topic 5 point 75"
                  }
                ]
              },
              {
                "html": "The effective throat thickness of a fillet weld is \\(k\\) times the weld size. For a 70° angle between the fusion faces, the value of \\(k\\) is 0.7.",
                "sources": [
                  {
                    "id": "CAP4-05-00115",
                    "label": "p. 22; topic 5 point 114"
                  }
                ]
              },
              {
                "html": "The effective length of a fillet weld should not be less than four times the weld size.",
                "sources": [
                  {
                    "id": "CAP4-05-00080",
                    "label": "p. 21; topic 5 point 80"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00076",
                "label": "p. 21; topic 5 point 75"
              },
              {
                "id": "CAP4-05-00115",
                "label": "p. 22; topic 5 point 114"
              },
              {
                "id": "CAP4-05-00080",
                "label": "p. 21; topic 5 point 80"
              }
            ]
          },
          {
            "id": "spot-welding-and-long-joints",
            "title": "Resistance spot welding of thin sheets and the behaviour of long welded lap joints",
            "html": "<p><em>Resistance spot welding</em> joins overlapping thin sheets. Electrodes clamp the sheets and pass a current, and the electrical resistance at the interface heats the metal locally until a discrete weld nugget forms. The process is chosen to suit sheet thickness, access and the connection required; two plates lying one over the other do not by themselves dictate it.</p><p>Butt welds in a prepared groove, arc-welded fillets and continuous submerged-arc seams are different processes.</p><p>A simple estimate of a lap joint's capacity multiplies the throat area of the weld by a uniform design stress along its whole length. In a long end-loaded joint that overestimates the capacity: the connected parts strain differently along the overlap, so load transfer concentrates near the ends of the weld.</p><p>Long-joint provisions reduce the effectiveness to allow for this. The effect does not mean that capacity falls with every added millimetre of weld, and no fixed multiple of plate thickness should be assumed as a universal failure threshold without the governing provision.</p>",
            "points": [
              {
                "html": "Spot welding is used when two plates are placed one below the other.",
                "sources": [
                  {
                    "id": "CAP4-05-00073",
                    "label": "p. 21; topic 5 point 72"
                  }
                ]
              },
              {
                "html": "The strength of a weld can significantly decrease when the weld length is greater than \\(16t\\).",
                "sources": [
                  {
                    "id": "CAP4-05-00134",
                    "label": "p. 23; topic 5 point 134"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00073",
                "label": "p. 21; topic 5 point 72"
              },
              {
                "id": "CAP4-05-00134",
                "label": "p. 23; topic 5 point 134"
              }
            ]
          },
          {
            "id": "laced-and-battened-columns",
            "title": "Laced and battened columns: effective slenderness, lacing angle and batten overlap",
            "html": "<p>A built-up column joins two or more main components with <em>lacing</em> (inclined bars) or <em>battens</em> (plates) so that they act as one member. The connecting system is not rigid in shear, so shear deformation adds to the buckling deflection and the column behaves as if it were more slender than its geometry suggests.</p><p>One stated design model allows for this by multiplying the actual maximum slenderness by 1.05 for lacing and 1.10 for battens. In an otherwise comparable model the battened column then has the higher effective slenderness and the lower calculated compression resistance. Different sections, details or failure modes prevent a universal ranking of real columns.</p><p>Lacing inclination is specified from the column's longitudinal axis, so an angle measured from the transverse axis must first be converted to its complement.</p><p>Welded batten plates must overlap the main members by not less than \\(4t\\), where \\(t\\) is the batten-plate thickness (IS 800:2007 clause 7.7.4.1). Meeting the bound exactly satisfies it; the weld strength and other dimensions are checked separately.</p>",
            "formulas": [
              {
                "label": "Effective slenderness of a laced column",
                "tex": "\\lambda_e = 1.05\\,\\lambda"
              },
              {
                "label": "Effective slenderness of a battened column",
                "tex": "\\lambda_e = 1.10\\,\\lambda",
                "where": "<p>\\(\\lambda\\) is the actual maximum slenderness; both multipliers belong to the stated model.</p>"
              },
              {
                "label": "Lacing angle from the longitudinal axis",
                "tex": "\\alpha_L = 90^\\circ - \\alpha_T",
                "where": "<p>\\(\\alpha_T\\) is the acute angle to the transverse axis in the same plane.</p>"
              },
              {
                "label": "Minimum overlap of a welded batten",
                "tex": "\\text{overlap} \\ge 4\\,t"
              }
            ],
            "example": {
              "title": "Worked examples: slenderness, lacing angle and overlap",
              "html": "<ol><li>Actual slenderness 100: laced \\(1.05 \\times 100 = 105\\), battened \\(1.10 \\times 100 = 110\\).</li><li>A lacing bar at 55° to the transverse axis makes \\(90^\\circ - 55^\\circ = 35^\\circ\\) with the longitudinal axis, below a specified 40–70° range.</li><li>An 8 mm batten plate needs an overlap of at least \\(4 \\times 8 = 32\\ \\text{mm}\\).</li></ol>"
            },
            "points": [
              {
                "html": "For the same load, unsupported length and end conditions, a laced column is stronger than a battened column.",
                "sources": [
                  {
                    "id": "CAP4-05-00067",
                    "label": "pp. 21, 22; topic 5 point 65; topic 5 point 113"
                  }
                ]
              },
              {
                "html": "The angle of inclination of a lacing bar with the longitudinal axis of a column should preferably be between 40° and 70°.",
                "sources": [
                  {
                    "id": "CAP4-05-00048",
                    "label": "p. 20; topic 5 point 47"
                  }
                ]
              },
              {
                "html": "In welded connections, the overlap of batten plates with the main members should be not less than \\(4t\\), where \\(t\\) is the thickness of the batten plate.",
                "sources": [
                  {
                    "id": "CAP4-05-00071",
                    "label": "p. 21; topic 5 point 69; topic 5 point 78"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00067",
                "label": "pp. 21, 22; topic 5 point 65; topic 5 point 113"
              },
              {
                "id": "CAP4-05-00048",
                "label": "p. 20; topic 5 point 47"
              },
              {
                "id": "CAP4-05-00071",
                "label": "p. 21; topic 5 point 69; topic 5 point 78"
              }
            ]
          },
          {
            "id": "tubular-sections-for-columns",
            "title": "Tubular sections: efficient buckling resistance about every axis",
            "html": "<p>A column's buckling resistance about any axis depends on its slenderness: the effective length divided by the radius of gyration \\(r\\) about that axis. A larger \\(r\\) for the same area means a less slender, stronger column.</p><p>A <em>tubular section</em> places its material far from the centroid in every direction, so it can provide favourable radii of gyration about both principal axes. That suits a column that could buckle about different axes. An open section such as an I-section is much stiffer about its major axis than its minor axis, and the weaker axis then governs.</p><p>A tubular section is therefore the most economical section for a column. High torsional stiffness does not replace the flexural-buckling checks, and gross area alone does not fix column resistance.</p>",
            "formulas": [
              {
                "label": "Radius of gyration",
                "tex": "r = \\sqrt{\\dfrac{I}{A}}"
              },
              {
                "label": "Slenderness",
                "tex": "\\lambda = \\dfrac{K L}{r}",
                "where": "<p>\\(KL\\) is the effective length for the end conditions considered.</p>"
              },
              {
                "label": "Circular hollow section",
                "tex": "r = \\dfrac{\\sqrt{D^2 + d^2}}{4}",
                "where": "<p>\\(D\\) and \\(d\\) are the outer and inner diameters; a solid round has \\(r = D/4\\).</p>"
              }
            ],
            "example": {
              "title": "Worked example: a tube against a solid bar of equal area",
              "html": "<p>A tube of 100 mm outer and 90 mm inner diameter has an area of about 1492 mm², and</p>\\[r = \\dfrac{\\sqrt{100^2 + 90^2}}{4} \\approx 33.6\\ \\text{mm}\\]<p>A solid round of the same area is about 43.6 mm across, so \\(r \\approx 10.9\\ \\text{mm}\\). With the same material, the tube's radius of gyration is about three times larger.</p>"
            },
            "points": [
              {
                "html": "The most economical section for a column is a tubular section.",
                "sources": [
                  {
                    "id": "CAP4-05-00068",
                    "label": "p. 21; topic 5 point 66"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00068",
                "label": "p. 21; topic 5 point 66"
              }
            ]
          },
          {
            "id": "purlins-and-rafter-actions",
            "title": "Purlin placement, rafter actions and the purlin bending moment",
            "html": "<p>An ideal pin-jointed truss carries only axial forces because its loads arrive at the joints. Roof loads reach the truss through the purlins, so purlins are preferably placed at the panel points of the top chord, the principal rafter. Each chord member then remains a two-force member.</p><p>If a purlin sits between joints, its transverse force also bends the chord segment. A chord in compression then acts as a <em>beam-column</em> and must be designed for axial compression plus local bending. Even with joint loading, eccentric connections, member continuity and lateral restraint of the chord need attention, and wind uplift can reverse the chord forces.</p><p>The purlin itself spans between trusses as a bending member. A moment coefficient other than the simply supported one reflects continuity and loading assumptions and cannot be used without them. On a sloping roof the load has components in two planes, so real purlins may need bending checks about both axes.</p>",
            "formulas": [
              {
                "label": "Simply supported purlin under full-span UDL",
                "tex": "M_{\\max} = \\dfrac{w L^2}{8}"
              }
            ],
            "example": {
              "title": "Worked example: a 4 m purlin",
              "html": "<p>Treat the purlin as simply supported over 4 m, loaded by 2 kN/m in a single plane:</p>\\[M_{\\max} = \\dfrac{2 \\times 4^2}{8} = 4.0\\ \\text{kN m}\\]<p>A smaller coefficient such as one-tenth would need its own continuity and loading assumptions before it could be used.</p>"
            },
            "points": [
              {
                "html": "When purlins are placed between the panel points, the principal rafter is to be designed for axial compression and bending moment.",
                "sources": [
                  {
                    "id": "CAP4-05-00086",
                    "label": "p. 21; topic 5 point 86"
                  }
                ]
              },
              {
                "html": "Generally, purlins are placed at the panel points so as to avoid bending moment in the rafter.",
                "sources": [
                  {
                    "id": "CAP4-05-00096",
                    "label": "p. 22; topic 5 point 95"
                  }
                ]
              },
              {
                "html": "The maximum bending moment for the design of purlins can be taken as \\(\\dfrac{WL}{10}\\).",
                "sources": [
                  {
                    "id": "CAP4-05-00112",
                    "label": "p. 22; topic 5 point 110"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00086",
                "label": "p. 21; topic 5 point 86"
              },
              {
                "id": "CAP4-05-00096",
                "label": "p. 22; topic 5 point 95"
              },
              {
                "id": "CAP4-05-00112",
                "label": "p. 22; topic 5 point 110"
              }
            ]
          },
          {
            "id": "truss-spacing-economy-and-span-choice",
            "title": "Truss spacing for minimum cost and choosing a truss for a given span",
            "html": "<p>For a fixed roof area, placing trusses closer together increases their number but shortens the purlin spans. Suppose the combined cost of the trusses varies inversely with their spacing \\(s\\), while the purlin cost grows with the square of the spacing. Minimizing the sum then fixes a definite ratio between the two costs.</p><p>To minimize the total cost, the cost of the trusses is twice the cost of the purlins.</p><p>A truss carries its main loads through an arrangement of axial-force members and can be designed for many spans. A truss bridge is preferred for spans of up to 32 m.</p>",
            "formulas": [
              {
                "label": "Illustrative cost model",
                "tex": "T = \\dfrac{A}{s}, \\qquad P = B\\,s^2",
                "where": "<p>\\(A\\) and \\(B\\) are positive constants and \\(s\\) the truss spacing.</p>"
              },
              {
                "label": "Condition for minimum total cost",
                "tex": "\\dfrac{d(T + P)}{ds} = -\\dfrac{A}{s^2} + 2Bs = 0"
              }
            ],
            "example": {
              "title": "Worked derivation: the cost ratio",
              "html": "<ol><li>Setting the derivative to zero gives \\(A/s^2 = 2Bs\\).</li><li>Multiplying by \\(s\\): \\(A/s = 2Bs^2\\), that is \\(T = 2P\\).</li><li>The second derivative, \\(2A/s^3 + 2B\\), is positive, so this is a minimum.</li></ol><p>At the economical spacing the trusses cost twice as much as the purlins, so \\(T/P = 2\\).</p>"
            },
            "points": [
              {
                "html": "To minimize the total cost of a roof truss, the ratio of the cost of the truss to the cost of the purlins shall be 2.",
                "sources": [
                  {
                    "id": "CAP4-05-00012",
                    "label": "p. 20; topic 5 point 12"
                  }
                ]
              },
              {
                "html": "A truss bridge is preferred for a span range of up to 32 m.",
                "sources": [
                  {
                    "id": "CAP4-10-00175",
                    "label": "p. 42; rural point 3"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00012",
                "label": "p. 20; topic 5 point 12"
              },
              {
                "id": "CAP4-10-00175",
                "label": "p. 42; rural point 3"
              }
            ]
          },
          {
            "id": "beam-webs-under-concentrated-loads-and-shear",
            "title": "Steel beam webs: crippling, local buckling, shear buckling and load dispersion",
            "html": "<p>A concentrated load or reaction entering a beam over a short bearing length creates high local compressive stress where the force spreads from the flange into the web. Two local failures are distinguished:</p><ul><li><em>Web crippling</em>: local yielding or crushing of the web material next to the load.</li><li><em>Local web buckling</em>: a slender web bows sideways under the local compression before its material is fully crushed.</li></ul><p>A third instability arises away from concentrated loads: <em>shear buckling</em> of a deep, slender web panel, driven by the diagonal compression that accompanies in-plane shear. 'Web buckling' without a stated load case is therefore incomplete.</p><p>None of these is lateral-torsional buckling of the whole span or tensile yielding of a flange. Bearing stiffeners and adequate web proportions provide a stable load path.</p><p>Local checks assume that the load spreads through the flange and web at some dispersion angle. At 45° the horizontal spread on each side equals the vertical travel, unless the end of the beam cuts it short.</p>",
            "formulas": [
              {
                "label": "Spread width at 45 degrees on both sides",
                "tex": "b_{\\text{eff}} = b + 2h",
                "where": "<p>\\(b\\) is the bearing length and \\(h\\) the vertical depth through which the load spreads.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a 45 degree spread",
              "html": "<p>An 80 mm bearing length, a 120 mm spread depth and nothing cutting the spread short on either side:</p>\\[b_{\\text{eff}} = 80 + 2 \\times 120 = 320\\ \\text{mm}\\]<p>Code web-bearing, crippling and buckling checks use their own specified geometry, so this is an idealization, not a code rule.</p>"
            },
            "points": [
              {
                "html": "Web crippling in a steel beam occurs due to failure of the web under a concentrated load.",
                "sources": [
                  {
                    "id": "CAP4-05-00075",
                    "label": "p. 21; topic 5 point 74"
                  }
                ]
              },
              {
                "html": "Web buckling occurs in a beam due to excessive compressive force under a concentrated load.",
                "sources": [
                  {
                    "id": "CAP4-05-00117",
                    "label": "p. 22; topic 5 point 116"
                  }
                ]
              },
              {
                "html": "Web buckling of a steel beam under a concentrated load is prevented by providing bearing stiffeners.",
                "sources": [
                  {
                    "id": "CAP4-05-00118",
                    "label": "p. 22; topic 5 point 116"
                  }
                ]
              },
              {
                "html": "In web buckling of a steel beam, the angle of dispersion of a concentrated load from the flange to the web is 45° with the horizontal.",
                "sources": [
                  {
                    "id": "CAP4-05-00129",
                    "label": "p. 23; topic 5 point 130; topic 5 point 135"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00075",
                "label": "p. 21; topic 5 point 74"
              },
              {
                "id": "CAP4-05-00117",
                "label": "p. 22; topic 5 point 116"
              },
              {
                "id": "CAP4-05-00118",
                "label": "p. 22; topic 5 point 116"
              },
              {
                "id": "CAP4-05-00129",
                "label": "p. 23; topic 5 point 130; topic 5 point 135"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Permissible stress from yield",
            "tex": "\\sigma_{\\text{allow}} = \\dfrac{f_y}{FS}"
          },
          {
            "label": "Working-stress check",
            "tex": "\\sigma_{\\text{calc}} \\le \\sigma_{\\text{allow}}"
          },
          {
            "label": "Minimum edge distance",
            "tex": "e_{\\min} = 1.5\\,d_0 \\ \\text{or}\\ 1.7\\,d_0",
            "note": "1.5 for rolled or machine-flame-cut edges, 1.7 for sheared or hand-flame-cut edges."
          },
          {
            "label": "Effective throat",
            "tex": "t_e = K\\,s",
            "note": "K as specified by the governing provision."
          },
          {
            "label": "Geometric throat, equal legs",
            "tex": "t_g = s\\cos\\dfrac{\\theta}{2}"
          },
          {
            "label": "Fillet weld effective length",
            "tex": "L_{\\text{eff}} \\ge 4\\,s"
          },
          {
            "label": "Welded batten overlap",
            "tex": "\\text{overlap} \\ge 4\\,t"
          },
          {
            "label": "Lacing angle",
            "tex": "\\alpha_L = 90^\\circ - \\alpha_T"
          },
          {
            "label": "Effective slenderness, stated model",
            "tex": "\\lambda_e = 1.05\\,\\lambda \\ \\text{or}\\ 1.10\\,\\lambda",
            "note": "Laced or battened respectively."
          },
          {
            "label": "Radius of gyration and slenderness",
            "tex": "r = \\sqrt{I/A}, \\qquad \\lambda = KL/r"
          },
          {
            "label": "Simply supported purlin moment",
            "tex": "M_{\\max} = \\dfrac{w L^2}{8}"
          },
          {
            "label": "Economical truss spacing",
            "tex": "T = 2P",
            "note": "<p>Only for the model \\(T = A/s\\) and \\(P = Bs^2\\).</p>"
          },
          {
            "label": "Load spread at 45 degrees",
            "tex": "b_{\\text{eff}} = b + 2h"
          }
        ],
        "cautions": [],
        "gaps": [
          "Design strengths of tension members, compression members (buckling curves) and beams under IS 800:2007 are not covered by these capsule items.",
          "Bolt shear, bearing and slip-resistance formulas, pitch and gauge rules, and weld design strengths are not given.",
          "Column bases (slab and gusseted bases) and combined axial-and-bending checks for beam-columns are not covered.",
          "Section classification and the properties of standard rolled sections are not covered."
        ]
      },
      "ACiE0506": {
        "code": "ACiE0506",
        "questionCount": 12,
        "format": 2,
        "summary": "<p>This subchapter covers timber and masonry structures: how timber strength depends on grain direction, the slenderness convention for solid timber columns, masonry walls under eccentric load, cavity walls and bed-joint shear, lime mortars, and Nepal's low-strength masonry guidance and building regulation. The questions test definitions, a few code limits and short stress calculations.</p>",
        "blocks": [
          {
            "id": "timber-grain-direction",
            "title": "Timber strength depends on load direction relative to the grain",
            "html": "<p>Timber is <em>anisotropic</em>: its long, aligned fibres make it stronger in some directions than in others. In direct compression, resistance parallel to the grain, where the fibres are loaded along their length, is generally greater than compression or bearing across the grain, where the fibres are crushed sideways.</p><p>High strength along the fibres does not mean high resistance to every action. Splitting and longitudinal shear separate the fibres from one another and are governed by separate properties. A design value must therefore match both the stress direction and the failure mode being checked.</p>",
            "points": [
              {
                "html": "The strength of timber is maximum in the direction parallel to the grain.",
                "sources": [
                  {
                    "id": "CAP4-05-00083",
                    "label": "p. 21; topic 5 point 83"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00083",
                "label": "p. 21; topic 5 point 83"
              }
            ]
          },
          {
            "id": "solid-timber-columns",
            "title": "Solid timber columns: the S/d limit and circular sections",
            "html": "<p>IS 883:2016 expresses the slenderness of a solid timber column as S/d: the unsupported length divided by the least lateral dimension of the section, not length divided by radius of gyration. For pin-ended solid columns, clause 7.6.1.4 caps this ratio at 50. Other end restraints need a modified length, and capacity checks are still required below the cap.</p><p>Clause 7.6.1.5 limits a circular solid column: its permissible load must not exceed that of the square column of equal cross-sectional area. This is a timber-code rule, not a general rule for RC or steel columns.</p>",
            "formulas": [
              {
                "label": "Pin-ended solid timber column, IS 883:2016",
                "tex": "\\dfrac{S}{d} \\le 50",
                "where": "<p>S is the unsupported length and d the least lateral dimension.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a 3.6 m post of 100 mm × 150 mm",
              "html": "<ol><li>Use the least dimension: \\(S/d = 3600/100 = 36\\), below 50.</li><li>Using the larger dimension, 3600/150 = 24, answers the wrong question.</li><li>The least radius of gyration, \\(100/\\sqrt{12} \\approx 28.9\\) mm, gives L/r ≈ 124.7, a different slenderness definition that must not be compared with 50.</li></ol>"
            },
            "points": [
              {
                "html": "In a solid timber column, the slenderness ratio should not exceed 50.",
                "sources": [
                  {
                    "id": "CAP4-05-00093",
                    "label": "p. 22; topic 5 point 92"
                  }
                ]
              },
              {
                "html": "For a solid timber column, the slenderness ratio limited to 50 is the unsupported length divided by the least lateral dimension.",
                "sources": [
                  {
                    "id": "CAP4-05-00094",
                    "label": "p. 22; topic 5 point 92"
                  }
                ]
              },
              {
                "html": "The permissible load on a circular timber column should not exceed the permitted load on a square column of equivalent cross-sectional area.",
                "sources": [
                  {
                    "id": "CAP4-05-00055",
                    "label": "p. 21; topic 5 point 55"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00093",
                "label": "p. 22; topic 5 point 92"
              },
              {
                "id": "CAP4-05-00094",
                "label": "p. 22; topic 5 point 92"
              },
              {
                "id": "CAP4-05-00055",
                "label": "p. 21; topic 5 point 55"
              }
            ]
          },
          {
            "id": "masonry-eccentric-compression",
            "title": "Masonry walls under eccentric vertical load",
            "html": "<p>When a vertical load acts at eccentricity e from the centre of a wall of thickness t, the uncracked section carries a uniform stress plus bending. Both faces stay in compression while e stays within t/6, the middle third of the thickness.</p><p>Because bending concentrates stress at one face, IS 1905:1987 clause 5.4.1.4 allows a higher edge-stress allowance when e/t lies between 1/24 and 1/6: the otherwise applicable compressive allowance may be increased by 25%. The concession does not add capacity automatically; the actual extreme stress and all other factors must still be checked.</p><p>A code permission to ignore a small bending contribution in one check does not make that bending physically zero.</p>",
            "formulas": [
              {
                "label": "Extreme stresses, uncracked rectangle",
                "tex": "\\sigma = \\dfrac{P}{A}\\left(1 \\pm \\dfrac{6e}{t}\\right)"
              },
              {
                "label": "No tension across the thickness",
                "tex": "e \\le \\dfrac{t}{6}"
              },
              {
                "label": "Edge-stress allowance, IS 1905 clause 5.4.1.4",
                "tex": "f_{\\text{edge}} = 1.25\\,f_{\\text{allow}}",
                "where": "<p>For an eccentricity ratio e/t between 1/24 and 1/6.</p>"
              }
            ],
            "example": {
              "title": "Worked examples",
              "html": "<ol><li>Average stress 0.60 MPa with e = t/24: \\(6e/t = 1/4\\), so the extreme stresses are \\(0.60 \\times 1.25 = 0.75\\) MPa and \\(0.60 \\times 0.75 = 0.45\\) MPa, both compressive.</li><li>e/t = 1/12 with an applicable allowance of 0.80 MPa: the edge allowance is \\(1.25 \\times 0.80 = 1.00\\) MPa.</li></ol>"
            },
            "points": [
              {
                "html": "The permissible compressive stress of a wall is 0.80 MPa. With an eccentric load of eccentricity ratio above 1/24, the increased permissible stress is 1.00 MPa.",
                "sources": [
                  {
                    "id": "CAP4-04-00040",
                    "label": "p. 16; topic 4 point 37"
                  }
                ]
              },
              {
                "html": "In the design of a wall subjected to eccentric load with eccentricity ratio greater than 1/24, the permissible stress may be increased by 25%.",
                "sources": [
                  {
                    "id": "CAP4-04-00039",
                    "label": "p. 16; topic 4 point 37"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-04-00040",
                "label": "p. 16; topic 4 point 37"
              },
              {
                "id": "CAP4-04-00039",
                "label": "p. 16; topic 4 point 37"
              }
            ]
          },
          {
            "id": "cavity-wall-effective-thickness",
            "title": "Effective thickness of a tied cavity wall",
            "html": "<p>A tied cavity wall has two leaves separated by a cavity, and slenderness or stress checks need one effective thickness. In the exercise model used here, it is whichever is greater: the thickness of the stronger leaf, or two-thirds of the combined thickness of both leaves. The empty cavity is not added.</p><p>The rule that actually applies to a project depends on the ties, the loading, the restraint and the governing standard, so this model should not be quoted as a universal code provision.</p>",
            "formulas": [
              {
                "label": "Effective thickness, exercise model",
                "tex": "t_{\\text{eff}} = \\max\\left(t_s,\\ \\tfrac{2}{3}(t_1 + t_2)\\right)"
              }
            ],
            "example": {
              "title": "Worked example: leaves of 150 mm and 100 mm",
              "html": "<p>\\(\\tfrac{2}{3}(150 + 100) = 166.7\\) mm, which exceeds the 150 mm stronger leaf, so 166.7 mm governs. Adding the cavity width to the leaves would overstate the thickness.</p>"
            },
            "points": [
              {
                "html": "In a cavity wall with both leaves load bearing, the stronger leaf is 150 mm thick and the other leaf is 100 mm thick. The effective thickness is 166.7 mm.",
                "sources": [
                  {
                    "id": "CAP4-01-00049",
                    "label": "p. 3; topic 1 point 46"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00049",
                "label": "p. 3; topic 1 point 46"
              }
            ]
          },
          {
            "id": "bed-joint-shear",
            "title": "Shear resistance of mortar bed joints",
            "html": "<p>Horizontal shear along a mortar bed joint of unreinforced masonry is resisted by bond and friction. Normal compression across the joint increases the frictional resistance to sliding, so the shear a joint can carry depends on the vertical stress as well as on the mortar.</p><p>The value must come from the applicable masonry provision and its conditions.</p>",
            "points": [
              {
                "html": "For masonry built in 1: 1: 6 cement–lime–sand mortar, the permissible horizontal shear stress on the area of a mortar bed joint is 0.15 MPa.",
                "sources": [
                  {
                    "id": "CAP4-05-00028",
                    "label": "p. 20; topic 5 point 27"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00028",
                "label": "p. 20; topic 5 point 27"
              }
            ]
          },
          {
            "id": "lime-mortars-hydraulic-and-non-hydraulic",
            "title": "Lime mortars: hardening by hydration or by carbonation",
            "html": "<p>Lime mortars harden by two different mechanisms.</p><ul><li><em>Non-hydraulic lime</em> hardens mainly by carbonation, reacting slowly with carbon dioxide from the air, so it needs access to air.</li><li><em>Hydraulic lime</em> contains compounds that react with water, so it can set and harden in persistently damp conditions.</li></ul><p>That is why hydraulic lime may be chosen for a compatible masonry mortar that must harden in damp locations.</p>",
            "points": [
              {
                "html": "Lime mortar is generally made with hydraulic lime.",
                "sources": [
                  {
                    "id": "CAP4-05-00116",
                    "label": "p. 22; topic 5 point 115"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00116",
                "label": "p. 22; topic 5 point 115"
              }
            ]
          },
          {
            "id": "low-strength-masonry-and-bands",
            "title": "Low-strength masonry guidance and gable bands",
            "html": "<p>The Nepal National Building Code contains separate documents for different kinds of construction. NBC 203:2015, Guidelines for Earthquake Resistant Building Construction, addresses low-strength masonry, including mud-mortar construction within its stated scope and its height and configuration limits. It is not a substitute for engineered seismic design, and a guideline does not apply beyond its scope limits.</p><p>Seismic bands tie the tops of masonry walls together. Where a masonry gable rises above the eaves-level band, a <em>gable band</em> runs along the sloping top edges of the gable and connects with the horizontal band and the roof anchorage, restraining the top of the gable masonry.</p>",
            "points": [
              {
                "html": "NBC 203 deals with earthquake resistant design of low strength masonry buildings.",
                "sources": [
                  {
                    "id": "CAP4-05-00084",
                    "label": "p. 21; topic 5 point 84"
                  }
                ]
              },
              {
                "html": "In a house, the gable band is provided at roof level.",
                "sources": [
                  {
                    "id": "CAP4-05-00105",
                    "label": "p. 22; topic 5 point 104"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00084",
                "label": "p. 21; topic 5 point 84"
              },
              {
                "id": "CAP4-05-00105",
                "label": "p. 22; topic 5 point 104"
              }
            ]
          },
          {
            "id": "building-act-and-nbc",
            "title": "The Building Act versus the Nepal National Building Code",
            "html": "<p>Building regulation in Nepal has two layers. The Building Act and its implementation framework provide the legal basis, while the Nepal National Building Code organizes the technical provisions on building performance and construction.</p><p>Approved drawings do not replace the applicable Act and NBC requirements, and a code title alone does not establish that a particular project complies. No current approval threshold or legal amendment is asserted here.</p>",
            "points": [
              {
                "html": "The law that governs the standards of construction of structural and non-structural buildings in Nepal is the building code.",
                "sources": [
                  {
                    "id": "CAP4-05-00085",
                    "label": "p. 21; topic 5 point 85"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00085",
                "label": "p. 21; topic 5 point 85"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Solid timber column limit",
            "tex": "\\dfrac{S}{d} \\le 50"
          },
          {
            "label": "Eccentric compression",
            "tex": "\\sigma = \\dfrac{P}{A}\\left(1 \\pm \\dfrac{6e}{t}\\right)"
          },
          {
            "label": "No tension",
            "tex": "e \\le \\dfrac{t}{6}"
          },
          {
            "label": "Edge-stress allowance",
            "tex": "f_{\\text{edge}} = 1.25\\,f_{\\text{allow}}",
            "note": "For e/t between 1/24 and 1/6."
          },
          {
            "label": "Cavity wall, exercise model",
            "tex": "t_{\\text{eff}} = \\max\\left(t_s,\\ \\tfrac{2}{3}(t_1 + t_2)\\right)"
          }
        ],
        "cautions": [],
        "gaps": [
          "Timber beam design (bending, shear, bearing and deflection checks) and permissible timber stresses are not covered by these capsule items.",
          "Basic compressive stresses of masonry, stress-reduction and area factors, and wall slenderness limits are not given.",
          "Mandatory rules of thumb for masonry (opening limits, wall lengths, band sizes) and masonry failure modes are not covered in detail.",
          "Mud and cement mortars are not taught; only the hydraulic versus non-hydraulic lime distinction is covered."
        ]
      }
    });
})();
