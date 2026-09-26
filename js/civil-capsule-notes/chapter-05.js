(function () {
    "use strict";
    window.CIVIL_CAPSULE_NOTE_TOPICS = window.CIVIL_CAPSULE_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_CAPSULE_NOTE_TOPICS, {
      "ACiE0501": {
        "code": "ACiE0501",
        "questionCount": 18,
        "formulaSheet": "<p><strong>Roof snow load (IS 875 Part 4:1987):</strong> S = μS<sub>0</sub> on horizontal plan area, where S<sub>0</sub> is the site ground snow load and μ the dimensionless roof-shape coefficient.</p><p><strong>Design wind speed and pressure (IS 875 Part 3:1987):</strong> V<sub>z</sub> = V<sub>b</sub>k<sub>1</sub>k<sub>2</sub>k<sub>3</sub>; p<sub>z</sub> = 0.6V<sub>z</sub><sup>2</sup> in N/m<sup>2</sup> with V<sub>z</sub> in m/s.</p><p><strong>Speed scaling with unchanged coefficients:</strong> p<sub>2</sub>/p<sub>1</sub> = (V<sub>2</sub>/V<sub>1</sub>)<sup>2</sup>.</p><p><strong>Storey shear sharing (rigid floor, no torsion, linear-elastic):</strong> V<sub>i</sub> = V k<sub>i</sub>/Σk.</p><p><strong>Orthogonal earthquake effects (IS 1893 Part 1:2016 clause 6.3.2.2):</strong> ±E<sub>x</sub> ± 0.3E<sub>y</sub> and ±0.3E<sub>x</sub> ± E<sub>y</sub>, keeping the most adverse result.</p>",
        "blocks": [
          {
            "id": "permanent-and-imposed-actions",
            "title": "Permanent (dead) actions versus imposed occupancy loads",
            "html": "<p>Classifying a load answers two separate questions: how long the action persists, and in which direction it acts. The <strong>self-weight</strong> of a floor slab, a fixed wall, a screed or a fixed ceiling is set by the member's geometry and the unit weight of its material, and it is present throughout the service life. It is therefore a <strong>permanent action</strong>, called dead load in an ordinary load schedule; IS 800:2007 clause 5.3.1 classifies self-weight in this way. People, furniture and movable stock change with use, so they form the <strong>imposed (occupancy) load</strong>. In a classroom during an examination, the students are imposed load while the slab, screed and ceiling are dead load.</p><p>'Permanent' and 'gravity' describe different aspects of an action. Dead load acts downward under gravity, but so does occupancy load, which is not permanent. Wind suction on cladding, earthquake inertia and restrained shrinkage are neither dead load nor ordinary gravity load.</p>",
            "moreHtml": "<p>Calling self-weight permanent does not make its value exact: dimensional and unit-weight uncertainty is still covered by the applicable design factors. Nor does it mean the structure can never respond dynamically, because the same permanent mass takes part in vibration and earthquake response.</p>",
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
            "id": "is-875-parts-and-imposed-patterns",
            "title": "Using the IS 875:1987 parts: unit weights, imposed loads and load patterns",
            "html": "<p>The 1987 IS 875 series places each ordinary design load in its own part. A dead-load estimate multiplies the actual member dimensions by material unit weights taken from <strong>Part 1 (dead loads)</strong>; calling a figure 'conservative' is no substitute for that calculation. Occupancy-related distributed and concentrated floor loads come from <strong>Part 2 (imposed loads)</strong>, and these actions cannot be substituted for one another.</p><table><thead><tr><th scope='col'>IS 875 part (1987)</th><th scope='col'>Action covered</th></tr></thead><tbody><tr><td>Part 1</td><td>Dead loads and unit weights of materials</td></tr><tr><td>Part 2</td><td>Imposed (occupancy) loads</td></tr><tr><td>Part 3</td><td>Wind loads</td></tr><tr><td>Part 4</td><td>Snow loads</td></tr></tbody></table><p>Imposed load can vary in both <strong>magnitude and position</strong>. Stock moved between warehouse bays, or a crowd gathering in part of a hall, leaves loaded and unloaded spans side by side. In continuous beams and slabs this <strong>pattern loading</strong> can produce larger span moments or support reactions than loading the whole floor, so a single uniform arrangement does not necessarily envelope every member action.</p>",
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
            "title": "Snow load on roofs from ground snow and roof-shape coefficients",
            "html": "<p>IS 875 Part 4:1987 (clause 3.1) gives the roof snow load as <strong>S = μS<sub>0</sub></strong>, acting on the horizontal plan area of the roof. S<sub>0</sub> is the ground snow load for the site, and μ is a dimensionless shape coefficient that depends on the roof geometry and on the distribution case being checked. The coefficient multiplies the ground value; it is neither an added pressure nor a divisor.</p><p><em>Worked example.</em> For a specified uniform case with S<sub>0</sub> = 2.4 kN/m<sup>2</sup> and μ = 0.75, S = 0.75 × 2.4 = 1.80 kN/m<sup>2</sup> of plan area. Drift and unbalanced snow cases, where required, are separate checks with their own coefficients.</p><p>Because S depends on both the site and the roof shape, one intensity applied to every roof truss at every site cannot be justified. Replacing such a blanket entry needs the site's ground snow load and the applicable shape and distribution factors; changing the unit printed beside the number would not make it valid.</p>",
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
            "title": "Wind velocity pressure grows with the square of design wind speed",
            "html": "<p>Wind pressure comes from the kinetic energy of moving air, so <strong>velocity pressure is proportional to V<sup>2</sup></strong>. With the air-density basis and pressure coefficients unchanged, the pressure ratio is the square of the speed ratio. A 20% rise in design speed gives 1.20<sup>2</sup> = 1.44, a 44% rise in pressure; doubling the percentage (40%) misses the extra quadratic term.</p><p>IS 875 Part 3:1987 first turns the basic wind speed into a <strong>design wind speed V<sub>z</sub> = V<sub>b</sub>k<sub>1</sub>k<sub>2</sub>k<sub>3</sub></strong>. The factors are dimensionless: k<sub>1</sub> addresses risk, k<sub>2</sub> terrain, height and structure size, and k<sub>3</sub> topography. The velocity pressure is then <strong>p<sub>z</sub> = 0.6V<sub>z</sub><sup>2</sup></strong> in N/m<sup>2</sup> with V<sub>z</sub> in m/s.</p><p><em>Worked example.</em> With V<sub>b</sub> = 50 m/s, k<sub>1</sub> = k<sub>3</sub> = 1 and k<sub>2</sub> = 1.2, V<sub>z</sub> = 50 × 1.2 = 60 m/s and p<sub>z</sub> = 0.6 × 60<sup>2</sup> = 2160 Pa = 2.16 kPa. Terrain, height and structure size therefore change the pressure through k<sub>2</sub>. The force on a particular surface still needs pressure coefficients and the loaded area.</p>",
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
            "id": "basic-wind-speed-zones-and-site-effects",
            "title": "Basic wind speed zones in NBC 104:1994 and site-specific wind behaviour",
            "html": "<p>A basic wind speed is a regional reference value, not the design speed at a particular structure. The Nepal amendments in <strong>NBC 104:1994</strong> assign <strong>55 m/s</strong> to the higher-hill and mountain zone, which includes areas above 3000 m, and <strong>47 m/s</strong> to the lower zone. A site is placed in a zone by the code's geographical description, including any specially windy areas; elevation alone is not the complete rule. After the zone is chosen, the design-speed factors still modify the basic value before any pressure is calculated.</p><p>Light, flexible structures need the same site-specific thinking. A trail bridge at an exposed site responds to wind through its geometry, stiffness, exposure and aerodynamic behaviour, so lateral stability and dynamic effects can matter even at moderate spans. A remembered span below which wind guys are 'not required' can only belong to a particular standard bridge system under stated conditions. The span number alone neither removes wind forces nor guarantees dynamic stability.</p>",
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
            "html": "<p>When the ground accelerates horizontally, each floor mass resists the motion and develops a horizontal <strong>inertia force</strong>. The floor diaphragms collect these forces and pass them to the vertical lateral-load-resisting system (frames, walls or bracing), which carries the accumulated <strong>storey shear</strong> down to the foundation together with the associated bending and axial effects. Horizontal shear is a principal seismic effect, but not the only one: ground motion can also have vertical components.</p><p>How a storey shear divides between vertical elements depends on the structural model. If a rigid floor translates without twisting, every frame at that level undergoes the same lateral displacement, so in a linear-elastic analysis each frame force is proportional to its lateral stiffness: <strong>V<sub>i</sub> = V k<sub>i</sub>/Σk</strong>.</p><p><em>Worked example.</em> A 120 kN storey shear shared by two parallel frames of stiffness 3k and k gives 120 × 3/4 = 90 kN and 120 × 1/4 = 30 kN. The stiffer frame attracts more force. Torsion, a flexible diaphragm or nonlinear response would need a different distribution model.</p>",
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
            "id": "combining-wind-and-earthquake-actions",
            "title": "Load combinations: alternative wind or earthquake and the 100/30 directional rule",
            "html": "<p>A load combination states which actions are assumed to act together. For ordinary steel-building design, <strong>IS 800:2007 clause 3.5.2</strong> does not combine extreme wind and earthquake simultaneously: each is checked as an <strong>alternative environmental action</strong> with the prescribed gravity loads and factors. This is a concurrence assumption of the design method, not a claim that the two can never physically coincide, and neither case may be skipped.</p><p>Earthquake shaking can arrive from any horizontal direction. Where <strong>IS 1893 Part 1:2016 clause 6.3.2.2</strong> requires directional combination for non-parallel lateral systems, the full (100%) effect of one direction is combined with 30% of the orthogonal effect, the two axes are then interchanged, and the signs are chosen to make the response being checked most adverse.</p><p><em>Worked example.</em> A member's axial effects from the two horizontal earthquake cases are 80 kN and 30 kN. The positive envelopes are 80 + 0.3 × 30 = 89 kN and 0.3 × 80 + 30 = 54 kN, so 89 kN governs in that sense. Opposite-sign combinations must also be checked, and gravity effects are added separately.</p>",
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
        "cautions": [
          {
            "id": "wind-with-earthquake-not-impossible",
            "status": "corrected",
            "prompt": "Dead load, wind load and earthquake load cannot possibly be combined",
            "html": "<p>'Not possible' is too absolute. IS 800:2007 clause 3.5.2 excludes simultaneous wind and earthquake from its ordinary design combinations as a concurrence assumption, and each remains a separate alternative case with the gravity loads. The statement holds only with that code and the ordinary design situation named.</p>",
            "sources": [
              {
                "id": "CAP4-05-00001",
                "label": "p. 19; topic 5 point 1"
              }
            ]
          },
          {
            "id": "no-universal-roof-snow-value",
            "status": "corrected",
            "prompt": "The snow load on a roof truss is taken as 2.5 N/m² everywhere",
            "html": "<p>No site-independent roof snow intensity exists. Under IS 875 Part 4:1987 the roof value S = μS<sub>0</sub> needs the site's ground snow load and the roof-shape and distribution coefficients. Changing N to kN would still not create a valid universal figure, and no replacement number is implied.</p>",
            "sources": [
              {
                "id": "CAP4-05-00003",
                "label": "p. 19; topic 5 point 3"
              }
            ]
          },
          {
            "id": "nbc-104-zone-assignment",
            "status": "review",
            "prompt": "Wind speed in hilly areas of Nepal above 3000 m is taken as 55 m/s",
            "html": "<p>Keep this only as the NBC 104:1994 basic wind speed of its higher-hill and mountain zone (the lower zone is 47 m/s). Site assignment follows the code's geographical description and special windy areas, not elevation alone, and the design-speed factors still apply.</p>",
            "sources": [
              {
                "id": "CAP4-05-00010",
                "label": "p. 19; topic 5 point 10"
              }
            ]
          },
          {
            "id": "unresolved-vertical-structure-fraction",
            "status": "review",
            "prompt": "The proportion of earthquake force transferred to the vertical structure is 31",
            "html": "<p>This figure is unresolved: it may be damaged fraction text or may omit the definition of the component meant. No universal fraction is taught here. What is reliable is the load path: storey shear passes to the vertical resisting elements and, for a rigid non-twisting floor, divides in proportion to their lateral stiffness. The original claim needs checking against its source.</p>",
            "sources": [
              {
                "id": "CAP4-05-00113",
                "label": "p. 22; topic 5 point 111"
              }
            ]
          },
          {
            "id": "wind-pressure-depends-on-terrain",
            "status": "corrected",
            "prompt": "Wind pressure is independent of structure factor and terrain",
            "html": "<p>False for the IS 875 Part 3:1987 procedure. The terrain, height and structure-size factor k<sub>2</sub> enters V<sub>z</sub> = V<sub>b</sub>k<sub>1</sub>k<sub>2</sub>k<sub>3</sub>, and p<sub>z</sub> = 0.6V<sub>z</sub><sup>2</sup>, so raising k<sub>2</sub> from 1.0 to 1.2 multiplies the pressure by 1.44. Factors from later editions should not be mixed into the 1987 procedure.</p>",
            "sources": [
              {
                "id": "CAP4-05-00131",
                "label": "p. 23; topic 5 point 132"
              }
            ]
          },
          {
            "id": "trail-bridge-wind-guy-span",
            "status": "review",
            "prompt": "Wind guys are generally not required for trail bridges up to 120 m span",
            "html": "<p>No universal exemption up to 120 m is endorsed. Wind resistance of a flexible trail bridge depends on its system, stiffness, exposure and aerodynamic response. Such a rule could belong only to a specific standard bridge design and its stated conditions; the named manual, bridge type and wind conditions need verification.</p>",
            "sources": [
              {
                "id": "CAP4-10-00191",
                "label": "p. 42; rural point 15"
              }
            ]
          }
        ],
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
        "formulaSheet": "<p><strong>Flexural strength estimate (IS 456:2000 clause 6.2.2):</strong> f<sub>cr</sub> = 0.7√f<sub>ck</sub>, both in N/mm<sup>2</sup>.</p><p><strong>Short-term static modulus (IS 456:2000 clause 6.2.3.1):</strong> E<sub>c</sub> = 5000√f<sub>ck</sub>, both in N/mm<sup>2</sup>.</p><p><strong>Slump:</strong> mould height − height of the prescribed point on the slumped concrete, in mm.</p><p><strong>Aggregate moisture (percentages of oven-dry mass):</strong> dry mass = SSD mass/(1 + absorption); wet batch mass = dry mass × (1 + moisture); free water = dry mass × (moisture − absorption), deducted from the added water.</p><p><strong>Mass-ratio batching:</strong> cement = free water/(w/c); each other ingredient = its ratio number × cement mass.</p><p><strong>Test loading rate:</strong> force rate = stress rate × loaded area.</p>",
        "blocks": [
          {
            "id": "mixing-water-quality",
            "title": "Mixing water: potable is not the same as portable",
            "html": "<p>Water chemistry affects setting, strength and durability, so mixing water is judged by its quality, not by its appearance or by how it is delivered. <strong>Potable</strong> means fit for drinking, and potable water is generally considered satisfactory for concrete. <strong>Portable</strong> only means movable: water arriving by tanker says nothing about its chemistry, cleanliness or compatibility with the intended concrete.</p><p>IS 456:2000 clause 5.4 allows other water to be used when it satisfies the specified impurity limits and the comparative setting-time and strength requirements. Clear, colourless water can still carry harmful dissolved substances, so appearance proves nothing; equally, a source is not rejected merely because it is not drinking water. Adding extra cement is no substitute for testing.</p><p>One stated requirement is a <strong>pH not less than 6</strong>. Water of pH 5.5 therefore fails that check, while water that passes it must still meet the other impurity, setting and strength provisions.</p>",
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
            "html": "<p>Cement begins to hydrate as soon as it takes up moisture, forming lumps and losing quality before it ever reaches the mixer. Bagged cement is therefore stacked on a <strong>raised, dry platform</strong> rather than directly on a floor, where dampness from below would be absorbed. The platform limits moisture uptake, but the store must still exclude rain and wall dampness, and prolonged storage should be avoided.</p><p>A grout is a fluid cementitious mixture whose make-up suits its use. A <strong>neat cement grout</strong> consists of cement and water, with admixtures where specified, and contains no fine aggregate; a grout specified for filling a narrow duct may be of this kind. A <strong>sanded cement grout</strong> also contains fine aggregate. 'Water, cement and sand' therefore describes one kind of grout, not the compulsory composition of every grout, and coarse aggregate is not an ingredient of a neat grout.</p>",
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
            "html": "<p>Mix proportions are normally stated for aggregate in the <strong>saturated-surface-dry (SSD)</strong> condition: the permeable pores are filled but no free water sits on the surface. SSD aggregate neither absorbs mixing water nor contributes any, which makes it a convenient reference. Stockpiled aggregate is usually drier or wetter, so batch masses and the added water are corrected.</p><p><em>Worked example.</em> A mix calls for 102 kg of SSD sand; absorption is 2% and actual moisture 5%, both on oven-dry mass. Dry mass = 102/1.02 = 100 kg. The wet batch mass is 100 × 1.05 = 105 kg, and the free surface water is 100 × (0.05 − 0.02) = 3 kg, so 3 kg less water is added at the mixer.</p><p>Aggregate mineralogy also matters for durability. When <strong>reactive silica</strong>-bearing aggregate meets sufficient alkalis and moisture, an <strong>alkali-silica reaction</strong> forms a gel that absorbs water, expands and cracks the concrete. Reactivity, alkali availability and moisture all matter. This durability risk, not a general large loss of fresh workability, is the defining concern with alkalis.</p>",
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
            "html": "<p>The <strong>water-cement ratio</strong> is a major control on strength because water not consumed by hydration leaves capillary pores behind after the concrete dries. Once a mix already has enough water for workability, adding more at the same cement mass raises the ratio and generally lowers strength, even when compaction and curing are equally good.</p><p>That relation assumes the concrete is properly mixed, placed, compacted and cured. A very low ratio does not guarantee strength if the mix is too harsh to consolidate, because large entrapped voids can cancel the benefit. <strong>Compaction</strong>, usually by controlled vibration, expels entrapped air and consolidates the concrete around aggregate, reinforcement and formwork. It is not intended to remove deliberately entrained microscopic air or to separate the mortar from the coarse aggregate, and excessive vibration can spoil uniformity.</p><p>After placing, the solids settle and water rises; a film of water on the surface shows <strong>bleeding</strong>. Excessive bleeding leaves weak surface laitance and internal water channels and can impair bond. Bleeding is a physical separation, distinct from the hydration reaction and from later carbonation.</p>",
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
            "id": "slump-consistency-and-workability",
            "title": "Slump test: what it measures and how far its result can be trusted",
            "html": "<p>In the slump test a standard mould is filled with concrete and lifted, and the settlement of the unsupported concrete is measured. <strong>Slump</strong> is the vertical drop from the mould height to the prescribed point on the slumped specimen, reported in millimetres. For a 300 mm mould whose displaced top centre ends 225 mm above the base, slump = 300 − 225 = 75 mm.</p><p>Slump directly measures <strong>consistency</strong> and serves as one indicator within workability control. Workability is broader, covering cohesion and the ease of placing and compacting, so two batches with equal slump have similar consistency but not necessarily equal strength, proportions or segregation resistance.</p><p>The test is most informative for a cohesive, plastic mix that gives a <strong>true slump</strong>; a very dry mix that keeps the mould shape, a segregating mix that shears or a very fluid mix that collapses needs another assessment. There is no universal 50 mm ceiling for vibrated concrete: the required consistency depends on the member, reinforcement congestion and placing method, and vibration must not segregate the mix.</p><p>For more flow without extra water, a compatible <strong>superplasticizer</strong> disperses the cement particles so that the same slump is reached with less water (high-range water reduction), or flow increases at similar water content. Dosage, compatibility and segregation resistance must be verified by trials.</p>",
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
              },
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
            "html": "<p>A ratio such as 1:2:4 lists cement, fine aggregate and coarse aggregate, but it cannot be batched until its <strong>basis</strong> is known. If it is a ratio by mass, the cement mass fixes every other quantity. If it is a ratio of loose volumes, each volume must be converted to mass with compatible <strong>bulk densities</strong>; particle specific gravity or the density of the finished concrete cannot supply those separate loose masses.</p><p><em>Worked example (mass basis).</em> With 9 litres of free water (9 kg at 1 kg/litre) and a free water-cement ratio of 0.45, cement = 9/0.45 = 20 kg. A 1:2:4 mass ratio then needs 2 × 20 = 40 kg of fine aggregate and 4 × 20 = 80 kg of coarse aggregate. The 80 kg figure depends entirely on the mass assumption; read as a volume ratio, the same data do not determine it.</p><p>In elementary estimating, <strong>1:1.5:3 by loose volume</strong> is the traditional nominal shorthand associated with M20. It guarantees no measured strength and is not a universal specification for roof slabs: water content, material properties, batching, compaction, curing and acceptance testing still govern performance.</p>",
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
            "html": "<p>A grade designation such as <strong>M20</strong> means a <strong>characteristic 28-day cube compressive strength</strong> of 20 MPa. A seven-day result is only an early indicator: how it relates to the 28-day value depends on the cement, mix and curing, and its use depends on the specified acceptance procedure. No universal seven-day minimum proves or disproves compliance. For example, 12.5 MPa at seven days is 100 × 12.5/20 = 62.5% of 20 MPa, a useful monitoring ratio but neither a strength-development law nor an acceptance criterion, and it does not reclassify the concrete as another grade.</p><p>IS 456:2000 Table 2 groups grades: <strong>M25 to M55 are standard grades</strong>, and the <strong>high-strength group begins at M60</strong> (M60 to M80 are listed). This is a classification within that edition, not a research definition or a physical upper limit on achievable strength.</p><p>Durability sets minimum grades. IS 456:2000 Table 5 requires at least <strong>M20 for reinforced concrete in mild exposure</strong>; more severe exposure or structural demand can require a higher grade. Being a roof slab does not make one nominal mix adequate for every load and environment.</p>",
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
            "html": "<p>The <strong>cube compression test</strong> is destructive: the specimen is loaded to failure to find its crushing load. Rebound-hammer and ultrasonic pulse-velocity tests are indirect non-destructive assessments, and an electromagnetic cover survey locates reinforcement rather than measuring strength.</p><p>Specimen shape changes the result. Friction at the loading platens restrains the ends of a specimen. A cube is short, so a large proportion of it is confined and its apparent strength rises; a standard cylinder has a greater height-to-width ratio, leaving more material away from end restraint, so its strength is generally lower. No single conversion factor is exact for all concretes.</p><p>Procedures specify a loading rate as a stress rate, which must be converted into a machine force rate. <em>Worked example.</em> For 14 N/mm<sup>2</sup> per minute on a 150 mm cube, area = 150 × 150 = 22500 mm<sup>2</sup>, so force rate = 14 × 22500 = 315000 N/min = 315 kN/min = 5.25 kN/s.</p><p>In the <strong>pullout test</strong> an embedded headed insert is pulled against a surface reaction ring until the surrounding concrete fails locally. The failure field is complex, so the measured pullout resistance is correlated with in-place compressive strength; it is not a direct tensile strength found by dividing force by insert area.</p>",
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
            "html": "<p>IS 456:2000 estimates two properties from the characteristic cube strength f<sub>ck</sub>, with all values in N/mm<sup>2</sup>, and both depend on its <strong>square root</strong>:</p><ul><li><strong>Flexural strength</strong> (clause 6.2.2): f<sub>cr</sub> = 0.7√f<sub>ck</sub>. For f<sub>ck</sub> = 36, f<sub>cr</sub> = 0.7 × 6 = 4.2 N/mm<sup>2</sup>; leaving out the root gives the incorrect 25.2 N/mm<sup>2</sup>.</li><li><strong>Short-term static modulus</strong> (clause 6.2.3.1): E<sub>c</sub> = 5000√f<sub>ck</sub>. For M25, E<sub>c</sub> = 5000 × 5 = 25000 N/mm<sup>2</sup>.</li></ul><p>These are estimates. The actual modulus depends on the aggregate and mix, and flexural strength is a tensile property, distinct from stiffness.</p><p>Under sustained compressive stress, concrete keeps shortening after its immediate elastic strain. Measured against a matching unloaded specimen, which isolates shrinkage, the additional load-dependent, time-dependent strain is <strong>creep</strong>. Creep has recoverable and irreversible parts, so describing all of it as plastic strain is too narrow. It also differs from <strong>relaxation</strong>, in which stress falls while the strain is held fixed.</p>",
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
            "html": "<p><strong>Curing</strong> keeps newly placed concrete at a moisture content and temperature that allow hydration to continue, so that strength and durability develop and premature drying is prevented. That general purpose applies even when there is no unusually large temperature gradient.</p><p>Thermal control is one part of curing for large pours. A hot core and a cooler surface create a temperature difference that can crack the concrete. An <strong>insulating blanket</strong> slows surface cooling and reduces the core-to-surface difference, but it does not remove the heat of hydration; it has to be combined with limits on maximum temperature, monitoring and moisture retention.</p><p>Formwork removal depends on the strength gained, not only on elapsed time. Under the normal conditions of IS 456:2000 clause 11.3.1 (ordinary Portland cement, adequate curing and a temperature of at least 15 °C), the listed period for <strong>vertical formwork to column sides is 16–24 hours</strong>. That period does not apply to load-bearing beam soffits or props, and actual site conditions and adequate strength still govern safe stripping.</p>",
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
        "cautions": [
          {
            "id": "no-fixed-seven-day-minimum",
            "status": "corrected",
            "prompt": "An M20 cube must develop at least 12.5 MPa in seven days",
            "html": "<p>The fixed seven-day minimum is rejected. M20 is defined by its characteristic 28-day cube strength of 20 MPa. A seven-day value is an early indicator whose meaning depends on the mix and the specified acceptance procedure; 12.5 MPa is 62.5% of 20 MPa but is not a universal pass mark.</p>",
            "sources": [
              {
                "id": "CAP4-01-00040",
                "label": "p. 2; topic 1 point 39"
              }
            ]
          },
          {
            "id": "curing-purpose-is-hydration",
            "status": "corrected",
            "prompt": "Curing primarily reduces heat loss and the temperature gradient of fresh concrete",
            "html": "<p>That describes only part of a thermal-control strategy. The general purpose of curing is to maintain moisture and temperature suitable for hydration so that strength develops and premature drying is prevented. Insulating against heat loss and gradients is one measure used for large pours.</p>",
            "sources": [
              {
                "id": "CAP4-01-00135",
                "label": "p. 5; topic 1 point 129"
              }
            ]
          },
          {
            "id": "flexural-strength-needs-square-root",
            "status": "corrected",
            "prompt": "Flexural and characteristic strength are related by fcr = 0.7 fck",
            "html": "<p>The square root is missing. IS 456:2000 clause 6.2.2 estimates f<sub>cr</sub> = 0.7√f<sub>ck</sub> in N/mm<sup>2</sup>. For f<sub>ck</sub> = 36 this gives 4.2 N/mm<sup>2</sup>, whereas the printed form would give the incorrect 25.2 N/mm<sup>2</sup>.</p>",
            "sources": [
              {
                "id": "CAP4-04-00083",
                "label": "p. 18; topic 4 point 83"
              }
            ]
          },
          {
            "id": "pullout-test-scope",
            "status": "review",
            "prompt": "The pullout test is not a tensile strength test of concrete",
            "html": "<p>Accept this for the embedded-insert pullout test used to assess in-place strength, whose resistance is correlated with compressive strength. Surface pull-off tensile tests, splitting tests and flexural tests are separate procedures, so the statement should not be extended to every test informally called a pull test.</p>",
            "sources": [
              {
                "id": "CAP4-04-00084",
                "label": "p. 18; topic 4 point 84"
              }
            ]
          },
          {
            "id": "creep-not-only-plastic",
            "status": "corrected",
            "prompt": "Creep is the gradual increase of plastic strain with time at constant load",
            "html": "<p>Creep is the additional time-dependent strain under sustained stress, beyond the immediate elastic strain and excluding unloaded shrinkage. It has recoverable and irreversible components, so 'plastic strain' is too restrictive. 'Sustained stress' is the precise condition, because a constant force does not always give a constant true stress.</p>",
            "sources": [
              {
                "id": "CAP4-04-00087",
                "label": "p. 18; topic 4 point 87"
              }
            ]
          },
          {
            "id": "loading-rate-without-standard",
            "status": "review",
            "prompt": "The loading rate in the compressive strength test is 14 N/mm² per minute",
            "html": "<p>The capsule names no test standard or edition for this rate. It is used here only as a stated input for converting stress rate to force rate (5.25 kN/s on a 150 mm cube); whether a current compression-test standard specifies it has not been verified.</p>",
            "sources": [
              {
                "id": "CAP4-04-00101",
                "label": "p. 18; topic 4 point 101"
              }
            ]
          },
          {
            "id": "neat-and-sanded-grout",
            "status": "corrected",
            "prompt": "Grout is a mixture of water, cement and sand",
            "html": "<p>Overgeneralized. A sanded cement grout contains fine aggregate, but a neat cement grout is cement and water, with specified admixtures, and no sand. The listed ingredients describe one kind of grout, not every grout.</p>",
            "sources": [
              {
                "id": "CAP4-05-00014",
                "label": "p. 20; topic 5 point 14"
              }
            ]
          },
          {
            "id": "ssd-is-a-reference-state",
            "status": "review",
            "prompt": "Aggregate used in concrete is in the saturated surface dry condition",
            "html": "<p>SSD is the reference condition for mix proportioning, not a requirement that delivered aggregate be physically SSD. Real aggregate is usually drier or wetter, and the batch masses and added water are corrected from its absorption and moisture content.</p>",
            "sources": [
              {
                "id": "CAP4-05-00016",
                "label": "p. 20; topic 5 point 16"
              }
            ]
          },
          {
            "id": "m20-grade-not-roof-recipe",
            "status": "corrected",
            "prompt": "The nominal mix required for RCC roofing is M20 grade concrete",
            "html": "<p>This conflates a concrete grade with a nominal roofing recipe. IS 456:2000 Table 5 sets M20 as the minimum grade for reinforced concrete in mild exposure, and harsher exposure or structural design can demand more. It is not one universal mix for every roof load and environment.</p>",
            "sources": [
              {
                "id": "CAP4-05-00018",
                "label": "p. 20; topic 5 point 17"
              }
            ]
          },
          {
            "id": "slump-test-scope",
            "status": "corrected",
            "prompt": "The slump test gives good results for rich mixes",
            "html": "<p>Cement richness is not the deciding criterion. The slump test is most useful for cohesive, plastic concrete that gives a true slump; very stiff, shearing or collapsing mixes need another suitable assessment.</p>",
            "sources": [
              {
                "id": "CAP4-05-00023",
                "label": "p. 20; topic 5 point 21"
              }
            ]
          },
          {
            "id": "slump-measures-consistency",
            "status": "review",
            "prompt": "The slump test is done for workability",
            "html": "<p>Acceptable only with a qualification. Slump directly measures consistency and serves as one indicator within workability control; workability also covers cohesion and placing and compaction behaviour. Equal slump does not prove equal strength, mix proportions or segregation resistance.</p>",
            "sources": [
              {
                "id": "CAP4-05-00024",
                "label": "p. 20; topic 5 point 22; topic 5 point 23"
              }
            ]
          },
          {
            "id": "no-universal-slump-ceiling-for-vibration",
            "status": "corrected",
            "prompt": "With a mechanical vibrator, slump should not exceed 5.0 cm",
            "html": "<p>A blanket 50 mm ceiling is not retained as a general code requirement. The required consistency depends on the member, reinforcement congestion and placing method; vibration must avoid segregation, and a suitable admixture can raise slump without excess water.</p>",
            "sources": [
              {
                "id": "CAP4-05-00025",
                "label": "p. 20; topic 5 point 24"
              }
            ]
          },
          {
            "id": "column-side-stripping-period",
            "status": "review",
            "prompt": "Formwork to column sides can be removed in 24 hours",
            "html": "<p>IS 456:2000 clause 11.3.1 lists 16–24 hours for vertical column-side forms only under its normal conditions (ordinary Portland cement, adequate curing, at least 15 °C). Adequate strength and site conditions govern, and the period does not apply to beam soffits or props.</p>",
            "sources": [
              {
                "id": "CAP4-05-00069",
                "label": "p. 21; topic 5 point 67"
              }
            ]
          },
          {
            "id": "mix-ratio-basis-unstated",
            "status": "review",
            "prompt": "Coarse aggregate for a 1:2:4 mix with w/c 0.45 and 9 litres of water",
            "html": "<p>The capsule gives no answer and does not say whether 1:2:4 is by mass or by loose volume. The 80 kg result holds only for a mass ratio with 9 kg of free water; a volume ratio additionally needs bulk densities.</p>",
            "sources": [
              {
                "id": "CAP4-05-00106",
                "label": "p. 22; topic 5 point 105"
              }
            ]
          },
          {
            "id": "alkalis-and-durability",
            "status": "corrected",
            "prompt": "The main contribution of alkalis is to reduce workability significantly",
            "html": "<p>Replaced by the durability mechanism. With reactive silica-bearing aggregate and moisture, alkalis can drive an expansive alkali-silica reaction. A universal significant loss of fresh workability is not the defining contribution of alkalis.</p>",
            "sources": [
              {
                "id": "CAP4-05-00124",
                "label": "p. 23; topic 5 point 124"
              }
            ]
          },
          {
            "id": "nominal-m20-shorthand",
            "status": "review",
            "prompt": "The typical mix proportion for an RCC roof slab is 1:1.5:3",
            "html": "<p>1:1.5:3 by loose volume is a traditional nominal shorthand for M20 in elementary estimating. It is not a current universal code recipe for every RCC roof and does not guarantee strength; materials, water, compaction, curing and acceptance testing decide performance.</p>",
            "sources": [
              {
                "id": "CAP4-05-00139",
                "label": "p. 23; topic 5 point 140"
              }
            ]
          },
          {
            "id": "portable-versus-potable",
            "status": "corrected",
            "prompt": "Portable water is used in construction",
            "html": "<p>The source appears to confuse portable (movable) with potable (fit to drink). Potable water is generally suitable for mixing concrete, and other water needs the applicable quality assessment. How water is transported says nothing about its suitability.</p>",
            "sources": [
              {
                "id": "CAP4-06-00131",
                "label": "p. 26; topic 6 point 135"
              }
            ]
          }
        ],
        "gaps": [
          "Cement types and their tests, aggregate grading and the bulking of sand are not covered by these capsule items.",
          "No design-mix procedure (target mean strength, standard deviation) and no statistical acceptance criteria for cube results are covered.",
          "Admixtures other than superplasticizers, and durability mechanisms other than alkali-silica reaction, are mentioned only in passing.",
          "Non-destructive tests are named, but their procedures, calibration and interpretation are not taught."
        ]
      },
      "ACiE0503": {
        "code": "ACiE0503",
        "questionCount": 28,
        "formulaSheet": "<p><strong>Limit-state design stresses (IS 456:2000):</strong> peak concrete design stress = 0.67f<sub>ck</sub>/γ<sub>m</sub> with γ<sub>m</sub> = 1.5; steel design plateau = 0.87f<sub>y</sub>.</p><p><strong>Concrete strain limits:</strong> 0.0035 at the extreme compression fibre in bending; 0.002 at the end of the parabolic branch and in pure axial compression.</p><p><strong>Elastic sections:</strong> modular ratio m = E<sub>s</sub>/E<sub>c</sub>; shear flow q = VQ/I.</p><p><strong>Beam tension steel (clause 26.5.1.1):</strong> minimum A<sub>s</sub> = 0.85bd/f<sub>y</sub>; maximum 0.04bD.</p><p><strong>Bond and anchorage:</strong> L<sub>d</sub> = φσ<sub>s</sub>/(4τ<sub>bd</sub>); compression lap ≥ the larger of L<sub>d</sub> and 24φ; standard U-type hook anchorage value = 16φ.</p><p><strong>Deflection (clause 23.2):</strong> total final ≤ span/250; after partitions and finishes ≤ the smaller of span/350 and 20 mm.</p>",
        "blocks": [
          {
            "id": "partial-factors-and-design-stresses",
            "title": "Limit-state design stresses from characteristic strengths and partial factors",
            "html": "<p>Limit-state design starts from <strong>characteristic strengths</strong> and reduces them by a <strong>material partial safety factor</strong> γ<sub>m</sub>. The factor allows for uncertainty in material behaviour and in the resistance model. It is not the flexural strength of concrete, and it does not replace the characteristic strength by a higher mean strength; uncertainty in the loads is handled separately through load factors.</p><p><em>Concrete.</em> IS 456:2000 takes the compressive strength in the structure as 0.67f<sub>ck</sub>, a reduction relating in-structure strength to cube strength, and then divides it by γ<sub>m</sub> = 1.5. For f<sub>ck</sub> = 30 MPa the peak design stress is 0.67 × 30/1.5 = 13.4 MPa, so 0.67f<sub>ck</sub> (20.1 MPa here) is not yet the design value.</p><p><em>Steel.</em> Once reinforcement has strained enough to reach its design plateau, the rounded design stress is <strong>0.87f<sub>y</sub></strong>; for Fe415 this is 0.87 × 415 = 361.05 MPa. It is a steel stress, not a concrete tensile strength, and bars below the plateau strain take their stress from the design stress-strain relation instead.</p>",
            "moreHtml": "<p>The coefficient 0.36 in the total concrete compressive force of the stress block (C = 0.36f<sub>ck</sub>bx<sub>u</sub>) comes from integrating the parabolic-rectangular design stress over the compression depth. It is a force coefficient, not the peak stress, so it must not be used where 0.67f<sub>ck</sub>/1.5 is meant.</p>",
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
            "title": "Concrete strain limits and the idealized parabolic-rectangular stress curve",
            "html": "<p>IS 456:2000 idealizes concrete in compression by a curve that rises <strong>parabolically up to a strain of 0.002</strong> and then stays at a constant design stress up to the flexural strain limit. In bending, failure is taken to occur when the extreme compression fibre reaches <strong>0.0035</strong> (clause 38.1); multiplied by 100 this is 0.35%. Under pure axial compression the section is strained uniformly and the limiting strain is <strong>0.002</strong> instead, so the two values are not interchangeable.</p><p>Keep two ideas apart. The stress-strain curve describes the material. The stress block describes how stress is distributed over the compression depth of a particular section, obtained by applying that curve to the linear strain profile across the depth. Neither 0.0035 nor 0.002 is a permissible routine service strain; both are ultimate-state idealizations.</p><p>This parabolic-rectangular idealization belongs to concrete in IS 456:2000 limit-state bending. Prestressed-concrete provisions are found in the applicable edition of IS 1343, so the curve should not be described as a prestressed-concrete rule of IS 456:1978.</p>",
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
            "html": "<p>As bending increases on an initially uncracked beam, the first event is <strong>flexural cracking</strong>, which begins when the tensile concrete stress reaches its cracking strength. The under- or over-reinforced label does not decide first cracking; it describes the later ultimate failure sequence:</p><ul><li><strong>Under-reinforced</strong>: tension steel yields before the concrete crushes, giving ductile behaviour.</li><li><strong>Over-reinforced</strong>: concrete reaches its ultimate compressive strain while the tension steel is still below yield; failure is compression-controlled with limited ductility.</li><li><strong>Balanced</strong>: in the classical idealization both limits are reached together.</li></ul><p>Adding tension steel beyond the ductility limit of a fixed-size singly reinforced beam deepens the compression zone. A compatible analysis may predict a larger moment, but that capacity is controlled by crushing, lacks ductility and cannot assume the steel reaches its full design stress. Strength alone does not justify the design; strain compatibility and the code's ductility limits govern.</p><p>When depth is restricted, the remedy is a larger section or a <strong>doubly reinforced section</strong>, in which designed compression steel as well as tension steel is counted in the moment resistance. Nominal top hanger bars alone do not make a beam doubly reinforced.</p>",
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
            "title": "Composite action: modular ratio, thermal compatibility and elastic shear flow",
            "html": "<p>Reinforced concrete works because bonded steel and concrete strain together. Their <strong>coefficients of thermal expansion are broadly similar</strong>, so a uniform temperature change causes little differential strain between them. This limits internal mismatch, but it does not remove stresses caused by external restraint or temperature gradients, and it does not make the two materials equally stiff.</p><p>Elastic (working-stress) analysis handles the stiffness difference with a <strong>transformed section</strong>: the steel area is multiplied by the <strong>modular ratio m = E<sub>s</sub>/E<sub>c</sub></strong> to give an equivalent concrete area. For an instantaneous calculation with E<sub>s</sub> = 200 GPa and E<sub>c</sub> = 25 GPa, m = 200/25 = 8. A code's working-stress modular ratio that allows for long-term effects is a different, stated convention.</p><p>In the cracked transformed section of a singly reinforced rectangular beam, tensile concrete is ignored. Shear flow q = VQ/I depends on the first moment Q of the effective area above the cut. Within the compression zone Q changes quadratically, so the diagram is <strong>parabolic above the neutral axis</strong>; between the neutral axis and the steel level no effective area is added, so it stays <strong>constant</strong>. With constant width b, the nominal shear stress q/b varies the same way. This is an elastic-model result, not a measured distribution in cracked concrete.</p>",
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
            "html": "<p>Shear combined with bending produces inclined <strong>principal tensile stresses</strong>, so cracks near supports run diagonally. Shear reinforcement is provided mainly to resist this <strong>diagonal tension</strong>. Adequately anchored stirrups crossing an inclined crack carry tension across it and tie together a truss-like load path in which inclined concrete struts carry compression.</p><p>After diagonal cracking, stirrups are not the only mechanism. Shear is also carried by the uncracked compression zone and struts, by aggregate interlock across the crack faces and by dowel action of the longitudinal bars. Simplified design adds a concrete contribution to a steel contribution and limits the shear stress so that the struts do not crush. Stirrups neither replace the longitudinal flexural steel nor prevent every crack.</p><p>IS 456:2000 clause 26.5.1.4 recognizes the following forms of beam shear reinforcement, subject to its angle, combination and anchorage rules:</p><ul><li>vertical stirrups;</li><li>inclined stirrups;</li><li>bent-up bars used together with stirrups.</li></ul><p>A bar is effective only if it crosses the potential inclined cracks and can develop its force through anchorage; placing a bar in some orientation does not by itself make it shear reinforcement.</p>",
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
            "title": "Beam tension-steel limits and reading bar notation",
            "html": "<p>IS 456:2000 clause 26.5.1.1 bounds beam tension reinforcement from both sides, and the two bounds use different depths:</p><ul><li><strong>Minimum</strong>: A<sub>s</sub> = 0.85bd/f<sub>y</sub>, with effective depth d and f<sub>y</sub> in MPa. For b = 250 mm, d = 400 mm and Fe500: 0.85 × 250 × 400/500 = 170 mm<sup>2</sup>.</li><li><strong>Maximum</strong>: 0.04bD, with overall depth D. For b = 250 mm and D = 500 mm: 0.04 × 250 × 500 = 5000 mm<sup>2</sup>. Substituting the effective depth of 450 mm would wrongly give 4500 mm<sup>2</sup>.</li></ul><p>The gross-area maximum is only an upper detailing bound: a more restrictive ductility or strength check can govern well before it is reached, and the overall depth D belongs to the maximum, not to the minimum formula.</p><p>In reinforcement schedules the symbol φ denotes <strong>nominal bar diameter</strong>. A note such as '4 bars, φ16' means four bars each of 16 mm diameter. The count and the diameter are separate quantities; neither gives the clear spacing, and the total area must be calculated (here 4 × π × 16<sup>2</sup>/4 ≈ 804 mm<sup>2</sup>).</p>",
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
            "title": "Nominal cover in slabs and the checks that govern slab thickness",
            "html": "<p>Nominal cover protects the reinforcement, and the value required depends on exposure, bar size and fire resistance rather than being one figure for all slabs. Under IS 456:2000 Table 16 the mild-exposure baseline is 20 mm, and Note 1 allows a 5 mm reduction where main bars do not exceed 12 mm. A mild-exposure slab with 10 mm main bars can therefore have 15 mm nominal cover, provided no fire or other requirement demands more. Nominal cover must also be at least the bar diameter (clause 26.4.1), which 15 mm satisfies for a 10 mm bar.</p><p>Slab thickness is not fixed by shear alone. It must satisfy every governing check: <strong>flexure</strong>, <strong>one-way shear</strong>, <strong>punching shear</strong> around columns, <strong>deflection</strong>, cover and practical bar placement. A slab that passes its flexural calculation may still fail punching shear at a column, so passing one check proves nothing about the others.</p>",
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
            "title": "Development length from bond equilibrium and compression lap length",
            "html": "<p>A bar can carry its design force only if enough of it is embedded to pass that force to the concrete by bond. This embedded length is the <strong>development length</strong> L<sub>d</sub>. Equating the bar force to the bond force over the embedded length of a straight bar of diameter φ gives (πφ<sup>2</sup>/4)σ<sub>s</sub> = πφL<sub>d</sub>τ<sub>bd</sub>, so</p><p><strong>L<sub>d</sub> = φσ<sub>s</sub>/(4τ<sub>bd</sub>)</strong>.</p><p>L<sub>d</sub> grows with bar diameter and bar stress and falls as the design bond stress rises; it is not a span, a cover dimension or a fixed multiple valid for every bar. <em>Worked example.</em> A 16 mm bar developing 300 MPa with an applicable design bond stress of 1.5 MPa needs L<sub>d</sub> = 16 × 300/(4 × 1.5) = 800 mm.</p><p>A lap passes force from one bar to the next through the same bond mechanism. IS 456:2000 clause 26.2.5.1 requires a <strong>compression lap</strong> of at least the compression development length and not less than 24φ. For a 20 mm bar with compression L<sub>d</sub> = 620 mm, 24 × 20 = 480 mm, so the lap is the larger value, 620 mm. Using 24φ alone would miss the governing bond requirement.</p>",
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
            "html": "<p>Where the straight embedment is too short, a bend or hook can add anchorage. IS 456:2000 clause 26.2.2.1 credits a standard <strong>U-type tension hook</strong> with an anchorage value of <strong>16φ</strong>, so for a 20 mm bar the equivalent credit is 16 × 20 = 320 mm. This credit is not the physical curved length of the hook, and it does not mean that the complete required development length is 320 mm.</p><p>Treating 16φ as the whole anchorage for every bar is therefore a misuse. The designer first finds the required development length from the bar force and the design bond strength, then checks whether the available straight embedment plus any admissible hook credit supplies it. Bend dimensions, confinement and support conditions have their own rules, and a bar is not anchored merely because it lies inside the concrete cover.</p>",
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
            "title": "Deflection limits for RC beams under IS 456:2000 clause 23.2",
            "html": "<p>Serviceability requires beams to be stiff enough, and IS 456:2000 clause 23.2 sets two separate limits for normal cases:</p><table><thead><tr><th scope='col'>Limit</th><th scope='col'>Criterion</th><th scope='col'>What it covers</th></tr></thead><tbody><tr><td>Total final deflection, clause 23.2(a)</td><td>span/250</td><td>All relevant loads including time-dependent effects, measured from the as-cast level of the supports</td></tr><tr><td>Deflection after partitions and finishes, clause 23.2(b)</td><td>smaller of span/350 and 20 mm</td><td>The increment occurring after partitions and finishes are installed</td></tr></tbody></table><p><em>Worked examples.</em> For a 6.0 m beam the total limit is 6000/250 = 24 mm. For a 9 m beam the post-finish increment is limited to 9000/350 = 25.71 mm or 20 mm, whichever is smaller, so 20 mm controls.</p><p>The two criteria answer different questions and are not interchangeable, and neither is an unattributed span/325 rule. The fixed 20 mm cap on the second limit reflects its purpose of limiting movement after partitions and finishes are in place.</p>",
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
        "cautions": [
          {
            "id": "shear-not-steel-only",
            "status": "corrected",
            "prompt": "In ultimate shear failure, resistance comes from shear reinforcement only",
            "html": "<p>Unsupported. Cracked reinforced concrete transfers shear through the compression zone and struts, aggregate interlock and dowel action as well as stirrups; design adds concrete and steel contributions and limits strut crushing. Assigning all ultimate shear resistance to stirrups is incorrect.</p>",
            "sources": [
              {
                "id": "CAP4-04-00004",
                "label": "p. 15; topic 4 point 4"
              }
            ]
          },
          {
            "id": "rcc-shear-diagram-model-limits",
            "status": "review",
            "prompt": "RCC shear stress diagram is parabolic above and rectangular below the neutral axis",
            "html": "<p>Valid only for the cracked elastic rectangular transformed-section model, and only between the neutral axis and the tension steel. It does not describe ultimate shear mechanisms or the actual stresses in cracked concrete.</p>",
            "sources": [
              {
                "id": "CAP4-04-00053",
                "label": "p. 17; topic 4 point 51"
              }
            ]
          },
          {
            "id": "flexural-strain-limit-edition",
            "status": "review",
            "prompt": "Maximum compressive strain in concrete in bending compression is 0.0035",
            "html": "<p>Correct when tied to its edition and limit state: IS 456:2000 clause 38.1 uses 0.0035 at the extreme fibre in limit-state bending. Pure axial compression uses 0.002 under clause 39.1, and neither value is a permissible service strain.</p>",
            "sources": [
              {
                "id": "CAP4-04-00098",
                "label": "p. 18; topic 4 point 98"
              }
            ]
          },
          {
            "id": "stress-strain-curve-edition",
            "status": "corrected",
            "prompt": "IS 456-1978 prescribes a rectangular-parabolic curve for prestressed concrete",
            "html": "<p>This mixes up materials and editions. The parabolic-rectangular curve (parabola to 0.002, plateau to 0.0035) is the IS 456:2000 idealization for concrete in limit-state bending. Prestressed-concrete provisions belong to the applicable IS 1343 edition, not to an asserted IS 456:1978 requirement.</p>",
            "sources": [
              {
                "id": "CAP4-04-00113",
                "label": "p. 19; topic 4 point 112"
              }
            ]
          },
          {
            "id": "slab-thickness-not-shear-only",
            "status": "corrected",
            "prompt": "The minimum slab thickness is designed to resist shear",
            "html": "<p>Incomplete. Slab thickness can be governed by bending, one-way shear, punching shear, deflection, cover or bar placement, and every governing strength and serviceability check must be satisfied.</p>",
            "sources": [
              {
                "id": "CAP4-05-00038",
                "label": "p. 20; topic 5 point 37"
              }
            ]
          },
          {
            "id": "first-cracking-is-tensile",
            "status": "corrected",
            "prompt": "Cracking of cement occurs first in an over-reinforced section",
            "html": "<p>Confused on two counts. First flexural cracking of any initially uncracked beam occurs when tensile concrete reaches its cracking strength, and it is the concrete that cracks, not the cement. Over-reinforced describes an ultimate failure in which concrete crushes before the steel yields.</p>",
            "sources": [
              {
                "id": "CAP4-05-00039",
                "label": "p. 20; topic 5 point 38"
              }
            ]
          },
          {
            "id": "over-reinforced-definition-and-ductility",
            "status": "review",
            "prompt": "In an over-reinforced section concrete reaches collapse strain before steel yields",
            "html": "<p>This is the correct classical definition, repeated in three places in the capsule, and it describes the ultimate failure sequence rather than which section cracks first. IS 456 ductility limits are stricter than merely ensuring that the steel yields first, so a section that is not over-reinforced is not automatically compliant.</p>",
            "sources": [
              {
                "id": "CAP4-05-00029",
                "label": "pp. 20, 21, 23; topic 5 point 28; topic 5 point 71; topic 5 point 128"
              }
            ]
          },
          {
            "id": "over-reinforced-moment-not-a-licence",
            "status": "review",
            "prompt": "An over-reinforced section has more moment of resistance than a balanced one",
            "html": "<p>A compatible analysis may predict a larger moment, but it is a brittle, crushing-controlled capacity with steel below its design stress. The comparison is not a licence to design over-reinforced beams; strain compatibility and code ductility limits still govern.</p>",
            "sources": [
              {
                "id": "CAP4-05-00041",
                "label": "p. 20; topic 5 point 40"
              }
            ]
          },
          {
            "id": "maximum-steel-needs-bd",
            "status": "corrected",
            "prompt": "Maximum tension reinforcement in beams shall not exceed 0.04",
            "html": "<p>The expression is incomplete. The IS 456:2000 clause 26.5.1.1 cap is 0.04bD, using the overall depth D. It is a gross-area upper bound, not the minimum-steel formula, and ductility or strength checks may be more restrictive.</p>",
            "sources": [
              {
                "id": "CAP4-05-00043",
                "label": "p. 20; topic 5 point 42"
              }
            ]
          },
          {
            "id": "slab-cover-conditions",
            "status": "review",
            "prompt": "Minimum cover for RCC slab bars is 15 mm or the bar diameter",
            "html": "<p>15 mm follows only under stated conditions: IS 456:2000 Table 16 mild exposure (20 mm) reduced by 5 mm under Note 1 for main bars not exceeding 12 mm, no fire or other requirement demanding more, and not less than the bar diameter. It is not a universal slab cover.</p>",
            "sources": [
              {
                "id": "CAP4-05-00047",
                "label": "p. 20; topic 5 point 46"
              }
            ]
          },
          {
            "id": "compression-lap-needs-ld",
            "status": "corrected",
            "prompt": "Lap length of compression reinforcement shall not be less than 24 diameters",
            "html": "<p>Half of the rule is missing. IS 456:2000 clause 26.2.5.1 requires a compression lap of at least the compression development length and not less than 24φ, and the larger value governs.</p>",
            "sources": [
              {
                "id": "CAP4-05-00081",
                "label": "pp. 21, 22; topic 5 point 81; topic 5 point 93"
              }
            ]
          },
          {
            "id": "shear-reinforcement-forms",
            "status": "corrected",
            "prompt": "Beam shear reinforcement is provided as vertical, inclined and bent-up bars",
            "html": "<p>'Vertical bars' should read vertical stirrups, and bent-up bars count only when used together with stirrups. IS 456:2000 clause 26.5.1.4 also attaches angle and anchorage conditions to each form.</p>",
            "sources": [
              {
                "id": "CAP4-05-00099",
                "label": "p. 22; topic 5 point 98"
              }
            ]
          },
          {
            "id": "minimum-steel-formula-restored",
            "status": "corrected",
            "prompt": "Minimum beam tension steel is a fraction over fy, split in the source text",
            "html": "<p>The fraction was split during extraction. The IS 456:2000 clause 26.5.1.1 minimum is A<sub>s</sub> = 0.85bd/f<sub>y</sub> with effective depth d; the capital D in the source numerator is corrected to d.</p>",
            "sources": [
              {
                "id": "CAP4-05-00101",
                "label": "p. 22; topic 5 point 100"
              }
            ]
          },
          {
            "id": "hook-credit-not-universal",
            "status": "corrected",
            "prompt": "The minimum anchorage at the end of an RCC section is 16 diameters",
            "html": "<p>16φ is the anchorage value credited to a properly detailed standard U-type tension hook. It is neither a universal minimum nor a complete development length; bar force, bond, available embedment and support rules must be checked.</p>",
            "sources": [
              {
                "id": "CAP4-05-00122",
                "label": "p. 22; topic 5 point 122"
              }
            ]
          },
          {
            "id": "deflection-span-325",
            "status": "corrected",
            "prompt": "Maximum permitted deflection of a simply supported beam is 1/325 of span",
            "html": "<p>The unattributed span/325 limit is not the IS 456:2000 provision. Clause 23.2(a) limits normal total final deflection to span/250, and clause 23.2(b) limits the increment after partitions and finishes to the smaller of span/350 and 20 mm.</p>",
            "sources": [
              {
                "id": "CAP4-05-00125",
                "label": "p. 23; topic 5 point 125"
              }
            ]
          },
          {
            "id": "design-stress-needs-gamma-m",
            "status": "corrected",
            "prompt": "For design, concrete strength is assumed to be 0.67 times characteristic strength",
            "html": "<p>The material partial factor is omitted. The IS 456:2000 peak design stress is 0.67f<sub>ck</sub>/γ<sub>m</sub> with γ<sub>m</sub> = 1.5; for f<sub>ck</sub> = 30 MPa this is 13.4 MPa, not 20.1 MPa.</p>",
            "sources": [
              {
                "id": "CAP4-05-00136",
                "label": "p. 23; topic 5 point 137"
              }
            ]
          },
          {
            "id": "partial-factor-not-flexural-strength",
            "status": "corrected",
            "prompt": "The design strength of concrete is reduced by its flexural strength",
            "html": "<p>This confuses two quantities. Design strength is the characteristic strength divided by a material partial safety factor that covers material and resistance-model uncertainty; flexural strength is a separate tensile property.</p>",
            "sources": [
              {
                "id": "CAP4-05-00140",
                "label": "p. 23; topic 5 point 141"
              }
            ]
          }
        ],
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
        "formulaSheet": "<p><strong>Eccentric load moved to the footing centroid:</strong> axial force P plus moment M = Pe.</p><p><strong>Column longitudinal steel (IS 456:2000 clause 26.5.3.1):</strong> 0.8% to 6% of gross area, usually not above 4% where bars are lapped; at least 4 bars in rectangular and 6 bars in circular columns.</p><p><strong>Helical columns (clause 39.4):</strong> resistance = 1.05 × comparable tied-column resistance, only when the helix complies.</p><p><strong>Footing minimum steel (HYSD bars, via the slab rule):</strong> 0.12% of gross area in each direction.</p><p><strong>Parabolic tendon:</strong> e(x) = 4e<sub>mid</sub>x(L − x)/L<sup>2</sup>; balanced load w<sub>bal</sub> = 8Pe<sub>mid</sub>/L<sup>2</sup>.</p><p><strong>Effective prestress:</strong> f<sub>pe</sub> = (1 − loss fraction) × f<sub>pi</sub>.</p><p><strong>Old units:</strong> 1 kgf/cm<sup>2</sup> = 9.80665/100 N/mm<sup>2</sup> ≈ 0.0981 MPa.</p>",
        "blocks": [
          {
            "id": "column-strain-and-slenderness",
            "title": "Axial-compression strain limit and slender-column behaviour",
            "html": "<p>In IS 456:2000 a column under pure axial compression is strained uniformly across its section, and its limiting concrete strain is <strong>0.002</strong> (clause 39.1). In bending the strain varies linearly across the depth, and failure is taken at <strong>0.0035</strong> in the extreme compression fibre (clause 38.1). The different strain distributions are why the two limits are not interchangeable: 0.002 belongs to uniform axial strain and 0.0035 to the extreme fibre in bending.</p><p>Slenderness adds a second effect. When a slender column carrying axial force P deflects sideways by δ, the axial force acts with an extra lever arm and produces an additional <strong>second-order moment</strong> of about Pδ, which increases the deflection further. A stability assessment must therefore keep the <strong>direct compression</strong> P/A together with the first-order bending and this magnification. Slenderness makes instability and second-order effects important; it does not make the direct stress negligible.</p>",
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
            "title": "Longitudinal steel in RC columns: percentage bounds, laps and bar counts",
            "html": "<p>IS 456:2000 clause 26.5.3.1 controls column longitudinal reinforcement as a percentage of the gross area, apart from special required-area exceptions:</p><ul><li><strong>Minimum 0.8%</strong> and <strong>maximum 6%</strong> of gross area (clause 26.5.3.1(a)).</li><li>A note advises that where bars from the storey below are <strong>lapped</strong>, the steel should usually not exceed <strong>4%</strong>, because the overlapping bars congest the section.</li><li>At least <strong>4 bars</strong> in a rectangular column and <strong>6 bars</strong> in a circular column.</li></ul><p>A fraction of 0.04 means 4%, not 0.04%. The 6% value is a detailing bound, not a theoretical optimum or a compulsory amount, and the 4% advice is a practical recommendation rather than a target. A column with 2.5% steel lies within the ordinary bounds and cannot be rejected merely for exceeding a remembered 2%, although its capacity, congestion, laps and detailing must still be checked.</p><p>Bar counts are necessary but not sufficient: total area, bar diameter, peripheral spacing, cover and transverse restraint must also comply.</p>",
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
            "id": "column-cover-and-helical-reinforcement",
            "title": "Column cover and the conditional strength credit for helical reinforcement",
            "html": "<p>For ordinary columns, the IS 456:2000 detailing requirement used here is a nominal cover of <strong>at least 40 mm and not less than the longitudinal bar diameter</strong>. For a 300 mm square column with 20 mm bars the minimum is the larger of 40 and 20, i.e. 40 mm. The code's separate relaxation for small columns does not apply to this size and bar, and exposure or fire requirements can demand more. The figure is in millimetres; quoting '40' without units or conditions is incomplete.</p><p><strong>Helical reinforcement</strong> confines the core concrete. IS 456:2000 clause 39.4 therefore allows the strength of a helically reinforced column to be taken as <strong>1.05 times</strong> that of a similar column with lateral ties, but only when the helix satisfies the prescribed volumetric ratio, pitch and anchorage requirements. A circular shape, a single circular tie or an unchecked spiral does not earn the credit.</p><p><em>Worked example.</em> If a fully compliant helical column's comparable tied-column design resistance is 1200 kN, the enhanced resistance is 1.05 × 1200 = 1260 kN: a 5% increase, not an extra 5 kN and not 10%.</p>",
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
            "title": "Isolated footings: eccentric loads, minimum mesh and shear checks",
            "html": "<p>A column load that does not act at the footing centroid can be replaced by the same force at the centroid plus a couple, so the <strong>equivalent actions are P and M = Pe</strong>. For 500 kN acting 0.12 m from the centroid, the footing carries 500 kN axially and M = 500 × 0.12 = 60 kN m. The moment is added to the axial load rather than replacing it, and it makes the bearing pressure non-uniform.</p><p>A footing slab needs at least the solid-slab minimum reinforcement, to which IS 456:2000 clause 34.5.1 refers. For HYSD bars this is 0.12% of the gross area in each direction. <em>Worked example.</em> A 1000 mm wide, 400 mm thick strip needs 0.0012 × 1000 × 400 = 480 mm<sup>2</sup> in each direction; bending demand can require more.</p><p>The horizontal bottom mesh resists flexure and controls cracking; it is not shear reinforcement. The footing depth and concrete shear resistance must satisfy both the <strong>one-way (beam) shear</strong> and the <strong>punching (two-way) shear</strong> checks. If specific shear reinforcement is used, it needs an effective anchored detail, not merely transverse bottom bars.</p>",
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
            "title": "Combined footings and why a trapezoidal plan can be chosen",
            "html": "<p>A <strong>combined footing</strong> is one footing slab designed as the common base of two or more selected columns, used for instance where boundary restrictions or closely spaced columns make separate pads impractical. It differs from a <strong>strap footing</strong>, in which separate pads are connected by a beam, and from a <strong>raft</strong>, which generally supports a substantial group of columns or the whole building on a larger common base.</p><p>In proportioning, the centroid of the footing area is made to coincide with the line of action of the resultant column load. In the idealized model of linear, full-contact bearing, the pressure is then uniform. With unequal column loads and a boundary that stops the footing from extending beyond the heavier column, a rectangle of uniform width may be unable to bring its centroid under the resultant. A <strong>trapezoidal plan</strong>, wider at the more heavily loaded end, shifts the area centroid toward the larger load.</p><p>Unequal loads do not require a trapezoid, and aligning the centroid neither removes shear and bending in the footing nor makes bearing pressure independent of real soil behaviour.</p>",
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
            "title": "Why concrete is prestressed and which minimum grades apply",
            "html": "<p>Concrete is weak in tension. In <strong>prestressed concrete</strong> a tendon is tensioned and its force is transferred to the member, introducing a deliberate <strong>initial compression</strong>, with a bending effect when the tendon is eccentric. Later loads must first cancel this compression before tension can develop, so tensile stresses and cracking are controlled. Ordinary passive reinforcement picks up force only as the member deforms under load, whereas an actively tensioned tendon applies its force from transfer.</p><p>Prestressed work uses higher minimum grades than the M20 minimum for reinforced concrete in mild exposure. <strong>IS 1343:2012</strong> clause 6.1 with Table 1 Note 2 gives <strong>M40 for pre-tensioned</strong> and <strong>M30 for post-tensioned</strong> concrete, before any higher exposure requirement. These are characteristic 28-day cube grades; the concrete strength and stresses at transfer are separate checks.</p><p>Older sources quote strength in kg/cm<sup>2</sup>, meaning kgf/cm<sup>2</sup>. With 1 kgf = 9.80665 N and 1 cm<sup>2</sup> = 100 mm<sup>2</sup>, 350 kgf/cm<sup>2</sup> = 350 × 9.80665/100 ≈ 34.32 N/mm<sup>2</sup> (MPa). Converting an old number does not establish a modern minimum grade or transfer strength.</p>",
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
            "html": "<p>A curved tendon under force P presses on the concrete wherever it changes direction. For a shallow profile, the equivalent transverse load per unit length equals P multiplied by the curvature of the profile. To balance a constant downward UDL with constant effective prestress, the curvature must be constant, so the profile is a <strong>parabola</strong>. With zero eccentricity at both ends of a symmetric simple span, the greatest downward eccentricity below the centroid occurs at midspan.</p><p>The parabola is e(x) = 4e<sub>mid</sub>x(L − x)/L<sup>2</sup>, whose curvature has magnitude 8e<sub>mid</sub>/L<sup>2</sup>. The balanced upward load is therefore <strong>w<sub>bal</sub> = 8Pe<sub>mid</sub>/L<sup>2</sup></strong>.</p><p><em>Worked example.</em> P = 1000 kN, e<sub>mid</sub> = 0.25 m and L = 10 m give w<sub>bal</sub> = 8 × 1000 × 0.25/100 = 20 kN/m upward. The tendon forces at the end anchorages must be included in the complete equilibrium model.</p><p>Other profiles give other load patterns: a straight tendon has no curvature and so no distributed transverse load (an eccentric one still applies end moments), while a harped tendon produces concentrated forces at its deviators rather than a uniform load.</p>",
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
            "html": "<p>The force in a tendon falls from its initial value to a smaller <strong>effective prestress</strong>. The losses can be grouped by when and how they occur:</p><table><thead><tr><th scope='col'>Group</th><th scope='col'>Mechanisms</th></tr></thead><tbody><tr><td>During tensioning and at transfer</td><td>Elastic shortening of the concrete, duct friction, anchorage seating</td></tr><tr><td>Time-dependent, after transfer</td><td>Creep of concrete, shrinkage of concrete, relaxation of steel</td></tr></tbody></table><p>Creep and shrinkage shorten the concrete along the tendon path, and <strong>relaxation</strong> reduces steel stress at sustained strain. Which mechanisms act and how large they are depends on the prestressing system, materials and sequence; duct friction, for example, concerns tendons tensioned inside ducts.</p><p><em>Worked example.</em> If calculation predicts an 18% total loss from an initial tendon stress of 1200 MPa, the retained fraction is 1 − 0.18 = 0.82 and the effective stress is 0.82 × 1200 = 984 MPa. The 216 MPa difference is the loss, not the remaining stress. A quoted approximate range such as 15–25% is not a universal requirement and cannot replace the calculated losses of a particular member.</p>",
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
        "cautions": [
          {
            "id": "column-cover-units-and-conditions",
            "status": "review",
            "prompt": "The minimum clear cover for a column is 40",
            "html": "<p>The value needs its units and conditions: at least 40 mm and not less than the bar diameter under the IS 456:2000 column provision, increased where exposure or fire requires, with a separate relaxation for small columns. It is not an unconditional cover for every column.</p>",
            "sources": [
              {
                "id": "CAP4-04-00056",
                "label": "p. 17; topic 4 point 55"
              }
            ]
          },
          {
            "id": "parabolic-tendon-ideal-case",
            "status": "review",
            "prompt": "The cable of a UDL-loaded simple prestressed beam should ideally be parabolic",
            "html": "<p>Correct as the ideal load-balancing profile for a full-span UDL with zero end eccentricities. Real tendon design also checks losses, stress limits, anchorage and other load cases, so this profile is a starting point rather than a complete design.</p>",
            "sources": [
              {
                "id": "CAP4-04-00105",
                "label": "p. 19; topic 4 point 106"
              }
            ]
          },
          {
            "id": "column-steel-0-04-means-4-percent",
            "status": "review",
            "prompt": "Maximum longitudinal reinforcement in a column in practice is 0.04",
            "html": "<p>Read 0.04 as the fraction 4%, and as the usual recommendation where bars are lapped (note to IS 456:2000 clause 26.5.3.1(a)), not a universal preferred percentage. The ordinary absolute maximum is 6% of gross area.</p>",
            "sources": [
              {
                "id": "CAP4-05-00033",
                "label": "p. 20; topic 5 point 32"
              }
            ]
          },
          {
            "id": "long-column-direct-stress",
            "status": "corrected",
            "prompt": "In long columns, direct stress is negligible compared with bending stress",
            "html": "<p>Not a general rule. The axial force still produces direct stress P/A and also magnifies bending through lateral displacement, so slender-column design must retain direct compression together with first- and second-order bending.</p>",
            "sources": [
              {
                "id": "CAP4-05-00056",
                "label": "p. 21; topic 5 point 56"
              }
            ]
          },
          {
            "id": "prestressed-grade-not-350",
            "status": "corrected",
            "prompt": "The minimum cube strength for a prestressed member is 350 kg/cm²",
            "html": "<p>The universal 350 kg/cm² figure is not retained. IS 1343:2012 gives M40 for pre-tensioned and M30 for post-tensioned concrete before exposure requirements. Read as kgf/cm², 350 is about 34.32 MPa, which matches neither grade, and transfer strength is a separate check.</p>",
            "sources": [
              {
                "id": "CAP4-05-00058",
                "label": "p. 21; topic 5 point 58"
              }
            ]
          },
          {
            "id": "helix-credit-conditions",
            "status": "review",
            "prompt": "A helically reinforced column is 1.05 times as strong as a tied column",
            "html": "<p>The 1.05 multiplier of IS 456:2000 clause 39.4 is conditional on the prescribed helical detailing, including volumetric ratio, pitch and anchorage. Without those checks the credit cannot be claimed.</p>",
            "sources": [
              {
                "id": "CAP4-05-00060",
                "label": "p. 21; topic 5 point 59"
              }
            ]
          },
          {
            "id": "footing-shear-not-by-transverse-bars",
            "status": "corrected",
            "prompt": "In foundation design, shear is resisted by transverse bars",
            "html": "<p>This confuses the flexural mesh with shear reinforcement. Footing bottom bars resist bending; one-way and punching shear are resisted by adequate depth and concrete shear strength, or by specifically detailed and anchored shear reinforcement.</p>",
            "sources": [
              {
                "id": "CAP4-05-00064",
                "label": "p. 21; topic 5 point 62"
              }
            ]
          },
          {
            "id": "prestress-loss-range-approximate",
            "status": "review",
            "prompt": "Total prestress loss is approximately 15–25% of the initial prestress",
            "html": "<p>Treat the range only as an approximate indication, not a universal requirement. Actual losses depend on the prestressing method, materials and time, and must be calculated for the member rather than assumed.</p>",
            "sources": [
              {
                "id": "CAP4-05-00132",
                "label": "p. 23; topic 5 point 133"
              }
            ]
          },
          {
            "id": "column-steel-not-limited-to-2-percent",
            "status": "corrected",
            "prompt": "The maximum rebar in a compression member in practice is 2%",
            "html": "<p>Unsupported, and it conflicts with the capsule's own 4% statement. IS 456:2000 clause 26.5.3.1(a) gives ordinary bounds of 0.8–6% of gross area, with a usual 4% where bars are lapped; 2% is not a universal upper limit.</p>",
            "sources": [
              {
                "id": "CAP4-05-00143",
                "label": "p. 22; topic 5 point 118"
              }
            ]
          }
        ],
        "gaps": [
          "Axial-load capacity formulas for short columns, minimum eccentricity and axial load with bending interaction are not covered by these capsule items.",
          "Tie diameter and pitch rules, effective-length factors and the slenderness limit separating short and long columns are not given.",
          "Bearing-pressure distribution under moment, critical sections for bending and shear, and design shear strengths of footings are not covered.",
          "Calculation of individual prestress losses, permissible stresses at transfer and service, and anchorage-zone design are not covered."
        ]
      },
      "ACiE0505": {
        "code": "ACiE0505",
        "questionCount": 23,
        "formulaSheet": "<p><strong>Working-stress check:</strong> calculated service stress ≤ permissible stress; with a stated factor of safety, σ<sub>allow</sub> = f<sub>y</sub>/FS.</p><p><strong>Minimum edge distance (IS 800:2007 clause 10.2.4.2):</strong> 1.5d<sub>0</sub> for rolled or machine-flame-cut edges and 1.7d<sub>0</sub> for sheared or hand-flame-cut edges, with d<sub>0</sub> the hole diameter.</p><p><strong>Fillet welds:</strong> effective throat = K × size with a specified K; ideal equal-leg geometric throat = s cos(θ/2) for fusion-face angle θ; effective length ≥ 4 × size (clause 10.5.4.1).</p><p><strong>Welded battens:</strong> overlap ≥ 4t (clause 7.7.4.1).</p><p><strong>Lacing angle:</strong> angle to the longitudinal axis = 90° − angle to the transverse axis.</p><p><strong>Simply supported purlin under UDL:</strong> M<sub>max</sub> = wL<sup>2</sup>/8.</p><p><strong>Truss spacing cost model:</strong> T = A/s and P = Bs<sup>2</sup> give T = 2P at minimum total cost.</p><p><strong>45° load dispersion:</strong> effective width = bearing length + 2 × vertical depth, where spread is unobstructed on both sides.</p>",
        "blocks": [
          {
            "id": "working-and-permissible-stress",
            "title": "Working-stress checks: calculated stress versus permissible stress",
            "html": "<p>Working-stress design compares two different stresses. The <strong>working (calculated) stress</strong> is the actual stress produced by service loads, that is, the demand. The <strong>permissible stress</strong> is its allowed upper bound, obtained by dividing a limiting material stress by a factor of safety. A check is satisfactory when the calculated stress does not exceed the permissible stress. The two are equal only when a member is fully utilized, not by definition, and both must be expressed in the same units.</p><p>For a ductile, yield-based tension check with a stipulated factor of 1.6, σ<sub>allow</sub> = f<sub>y</sub>/1.6. <em>Worked example.</em> With f<sub>y</sub> = 240 MPa, σ<sub>allow</sub> = 240/1.6 = 150 MPa, safely below yield; multiplying by the factor instead (384 MPa) would wrongly push the allowance above yield. The 1.6 is a supplied problem convention, not a universal current-code value, and other failure modes such as buckling can govern compression members.</p>",
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
            "title": "Bolted connections: bearing-type versus friction-grip action and edge distances",
            "html": "<p>High-strength bolts can transfer force in two ways. In a <strong>bearing-type</strong> connection the plates slip until the bolt shanks bear against the hole sides, and force passes by bolt shear and plate bearing. In a <strong>slip-resistant (friction-grip)</strong> connection the bolts are pretensioned to clamp the plates, and force passes by friction on the faying surfaces without slip at the design limit state. Which mechanism applies is fixed by the specified pretension, surface preparation and design method; the bolt's high strength or head shape does not by itself make a joint slip-resistant.</p><p>Under repeated load reversal, a bearing joint could slip back and forth through its hole clearance. <strong>Pretensioned high-strength friction-grip bolts</strong> with suitable faying surfaces directly prevent that slip, provided installation tension, hole details and the slip-resistance limit state are all controlled.</p><p>Holes also need enough surrounding material. IS 800:2007 clause 10.2.4.2 sets the minimum edge distance, measured from the hole centre to the edge, at <strong>1.5 times the hole diameter</strong> for rolled or machine-flame-cut edges and <strong>1.7 times</strong> for sheared or hand-flame-cut edges. For a 22 mm hole beside a rolled edge this is 1.5 × 22 = 33 mm; a sheared edge would need 1.7 × 22 = 37.4 mm.</p>",
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
            "html": "<p>A fillet weld is described by its orientation to the load. A <strong>side (longitudinal) fillet</strong> runs along the edge of a lap plate parallel to the applied force, while an <strong>end (transverse) fillet</strong> runs perpendicular to it. Orientation describes the geometry of load transfer, not by itself the design resistance.</p><p>Weld strength is calculated on the <strong>effective throat</strong>. A design calculation takes the throat as K × weld size with a specified coefficient K. With a specified K = 0.70 for a 70° angle between the fusion faces, an 8 mm weld has a throat of 0.70 × 8 = 5.6 mm. The exact geometric throat of an ideal equal-leg triangular weld is different: s cos(θ/2) = 8 cos 35° ≈ 6.55 mm. The design coefficient and the geometric ratio are not the same quantity, and the applicable code value must be verified before use.</p><p>IS 800:2007 clause 10.5.4.1 requires the <strong>effective length</strong> of a fillet weld to be at least <strong>four times the weld size</strong>. A 6 mm weld therefore needs at least 4 × 6 = 24 mm of effective full-size length, so 20 mm is insufficient. Deposited length and end allowances must not be confused with effective full-size length.</p>",
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
            "id": "weld-processes-and-long-joints",
            "title": "Spot welding of thin sheets and the behaviour of long welded lap joints",
            "html": "<p><strong>Resistance spot welding</strong> joins overlapping thin sheets by pressing them between electrodes and passing an electric current, so that local resistance heating forms discrete weld nuggets at the interface. It is selected for suitable sheet thicknesses and access, not simply because two plates lie one over the other; groove (butt) welds, arc fillet welds and continuous submerged-arc seam welds are different processes.</p><p>A simple capacity estimate for a lap joint multiplies the throat area by a uniform design stress along the whole weld. In a <strong>long end-loaded joint</strong> this can overestimate capacity, because the connected parts deform differently along the overlap and load transfer concentrates near the ends of the weld. Long-joint provisions account for this reduced effectiveness. The effect does not mean that total capacity falls with every increase in length, and no universal failure threshold expressed as a fixed multiple of plate thickness should be assumed without the actual governing provision.</p>",
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
            "title": "Laced and battened built-up columns: effective slenderness, lacing angle and overlap",
            "html": "<p>A built-up column joins two or more main components with <strong>lacing</strong> (inclined bars) or <strong>battens</strong> (plates) so that they act as one member. The connecting system is not rigid in shear, so shear deformation adds to the buckling deflection and the column behaves as if it were more slender. One stated design model multiplies the actual maximum slenderness by <strong>1.05 for lacing</strong> and <strong>1.10 for battens</strong>. For slenderness 100 these give 105 and 110, so in an otherwise comparable model the battened column has the lower calculated compression resistance. Different sections, details or failure modes prevent a universal ranking of real columns.</p><p>Lacing inclination is specified relative to the <strong>longitudinal axis</strong> of the column. If a specification asks for 40–70° and a bar makes 55° with the transverse axis in the same plane, its angle to the longitudinal axis is the complement, 90° − 55° = 35°, which is below the minimum. Measuring from the wrong axis would wrongly accept the detail.</p><p>Welded batten plates must overlap the main members by <strong>not less than 4t</strong>, where t is the batten-plate thickness (IS 800:2007 clause 7.7.4.1). An 8 mm plate needs at least 4 × 8 = 32 mm; exactly 32 mm satisfies this bound, and the weld strength and other connection dimensions are checked separately.</p>",
            "sources": [
              {
                "id": "CAP4-05-00048",
                "label": "p. 20; topic 5 point 47"
              },
              {
                "id": "CAP4-05-00067",
                "label": "pp. 21, 22; topic 5 point 65; topic 5 point 113"
              },
              {
                "id": "CAP4-05-00071",
                "label": "p. 21; topic 5 point 69; topic 5 point 78"
              }
            ]
          },
          {
            "id": "tubular-sections-for-columns",
            "title": "Tubular sections: efficient buckling resistance about several axes",
            "html": "<p>A column's buckling resistance depends on the radius of gyration r = √(I/A) about each axis on which it can buckle, because slenderness is the effective length divided by r. A <strong>tubular section</strong> spreads its material away from the centroid in every direction, so it provides <strong>favourable radii of gyration about all axes</strong>. That makes it efficient for a column that could buckle about different axes, whereas an open section such as an I-section is much stiffer about one axis than the other.</p><p>Structural efficiency is not the same as economy. Whether a tube is the cheapest section depends on local wall slenderness, the complexity of its connections, fabrication cost, corrosion protection and the loading. High torsional stiffness does not replace the flexural-buckling checks, and gross area alone does not determine column resistance.</p>",
            "sources": [
              {
                "id": "CAP4-05-00068",
                "label": "p. 21; topic 5 point 66"
              }
            ]
          },
          {
            "id": "purlins-and-rafter-actions",
            "title": "Purlin placement, rafter actions and purlin bending moment",
            "html": "<p>An ideal pin-jointed truss carries only axial forces because its loads are applied at the joints. Roof loads reach the truss through the purlins, so purlins are preferably placed at the <strong>panel points</strong> of the top chord (principal rafter). If a purlin sits between joints, its transverse force also bends the chord segment; a chord in compression then acts as a <strong>beam-column</strong> and must be designed for <strong>axial compression plus local bending</strong>. Even with joint loading, eccentric connections, member continuity and lateral restraint of the chord need attention, and wind uplift can reverse the chord forces.</p><p>The purlin itself spans between trusses as a bending member. In a stated simply supported model under full-span UDL, <strong>M<sub>max</sub> = wL<sup>2</sup>/8</strong>; for w = 2 kN/m over 4 m this is 2 × 4<sup>2</sup>/8 = 4.0 kN m. A different coefficient, such as one-tenth, reflects continuity and loading assumptions and cannot be used without them. On a sloping roof the load has components in two planes, so real purlins may need bending checks about both axes.</p>",
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
            "id": "truss-spacing-economy-and-span-selection",
            "title": "Truss spacing for minimum cost and choosing a truss for a given span",
            "html": "<p>For a fixed roof area, placing trusses closer together increases their number but shortens the purlin spans. A simple illustrative cost model takes the total truss cost as T = A/s and the purlin cost as P = Bs<sup>2</sup>, with A and B positive constants and s the truss spacing. Minimizing T + P gives d(T + P)/ds = −A/s<sup>2</sup> + 2Bs = 0, so A/s = 2Bs<sup>2</sup>, that is <strong>T = 2P</strong>. The second derivative 2A/s<sup>3</sup> + 2B is positive, confirming a minimum. The ratio 2 follows from these assumed cost laws; it is not a universal roof-design requirement.</p><p>The same caution applies to span limits. A truss carries major loads through an arrangement of axial-force members and can be designed for many spans. For a 32 m pedestrian crossing, a steel truss should be chosen on the basis of structural, loading, erection and economic checks. A figure such as 32 m may belong to a particular standardized rural bridge system; it is not an upper limit of the structural form, and a span below a remembered number does not by itself approve a design.</p>",
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
            "html": "<p>A concentrated load or reaction entering a beam over a short bearing length creates high local compressive stress where the force spreads from the flange into the web. Two local failures are distinguished:</p><ul><li><strong>Web crippling</strong> (local yielding or crushing): the web material next to the load fails in compression.</li><li><strong>Local web buckling</strong>: a slender web bows out of plane under the local compression before a full plastic crushing state is reached.</li></ul><p>A third instability occurs away from concentrated loads: <strong>shear buckling</strong> of a deep, slender web panel, driven by the diagonal principal compression that accompanies in-plane shear. 'Web buckling' without a stated load case is therefore incomplete. None of these is lateral-torsional buckling of the whole span or tensile yielding of a flange. Bearing stiffeners and adequate web geometry provide a stable load path.</p><p>Local checks assume that the load spreads through the flange and web at a dispersion angle. <em>Worked example (45° idealization).</em> At 45° the horizontal spread equals the vertical travel, so with a vertical depth of 120 mm and unobstructed spread on both sides of an 80 mm bearing length, the effective width is 80 + 2 × 120 = 320 mm. Nearness to the end of the beam truncates the spread, and code checks use their own specified geometry.</p>",
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
        "cautions": [
          {
            "id": "permissible-stress-factor-supplied",
            "status": "review",
            "prompt": "The permissible stress is less than the yield stress",
            "html": "<p>True for a ductile, yield-based working-stress check, where the permissible stress is yield stress divided by a factor of safety. The factor 1.6 used in the example is a supplied convention, not a certified current-code value for every material, member or design method.</p>",
            "sources": [
              {
                "id": "CAP4-04-00099",
                "label": "p. 18; topic 4 point 99"
              }
            ]
          },
          {
            "id": "truss-purlin-cost-ratio-model",
            "status": "review",
            "prompt": "For minimum roof cost, truss cost should be twice the purlin cost",
            "html": "<p>The ratio 2 follows only from an assumed cost model in which truss cost varies inversely with spacing and purlin cost with spacing squared. The capsule omits that model, so the ratio should not be presented as a general design rule.</p>",
            "sources": [
              {
                "id": "CAP4-05-00012",
                "label": "p. 20; topic 5 point 12"
              }
            ]
          },
          {
            "id": "lacing-angle-range-unverified",
            "status": "review",
            "prompt": "Lacing bars should preferably be inclined 40° to 70° to the column axis",
            "html": "<p>The 40–70° range is used here as an explicit specification. The exact text of IS 800:2007 clause 7.6.4 was not independently verified, so the range is not certified as a current universal requirement. In any case the angle is measured from the longitudinal axis.</p>",
            "sources": [
              {
                "id": "CAP4-05-00048",
                "label": "p. 20; topic 5 point 47"
              }
            ]
          },
          {
            "id": "laced-versus-battened-conditional",
            "status": "review",
            "prompt": "A laced column is stronger than a battened column for the same load",
            "html": "<p>Replaced by a conditional comparison: with stated slenderness multipliers of 1.05 (laced) and 1.10 (battened), the battened column has the higher effective slenderness in an otherwise comparable model. The factors were not independently verified against IS 800:2007 clauses 7.6.1.5 and 7.7.1.4, and real columns cannot be ranked universally.</p>",
            "sources": [
              {
                "id": "CAP4-05-00067",
                "label": "pp. 21, 22; topic 5 point 65; topic 5 point 113"
              }
            ]
          },
          {
            "id": "tubular-not-universally-economical",
            "status": "corrected",
            "prompt": "The most economical section for a column is tubular",
            "html": "<p>The universal economy claim is not supported. A tube offers favourable radii of gyration about all axes, but economy also depends on local slenderness, connections, fabrication, corrosion protection and loading.</p>",
            "sources": [
              {
                "id": "CAP4-05-00068",
                "label": "p. 21; topic 5 point 66"
              }
            ]
          },
          {
            "id": "batten-overlap-not-less-than-4t",
            "status": "corrected",
            "prompt": "Welded batten plates should overlap the main members by more than 4t",
            "html": "<p>'More than' should read 'not less than'. IS 800:2007 clause 7.7.4.1 sets the minimum overlap at 4t, so exactly 4t (32 mm for an 8 mm plate) satisfies it; the weld strength is a separate check.</p>",
            "sources": [
              {
                "id": "CAP4-05-00071",
                "label": "p. 21; topic 5 point 69; topic 5 point 78"
              }
            ]
          },
          {
            "id": "permissible-is-not-working-stress",
            "status": "corrected",
            "prompt": "Permissible stress in steel is taken as working stress",
            "html": "<p>The two are different quantities. Working stress is the calculated stress under service loads (the demand), and permissible stress is its allowed upper bound; they coincide only when a member is fully utilized.</p>",
            "sources": [
              {
                "id": "CAP4-05-00072",
                "label": "p. 21; topic 5 point 70"
              }
            ]
          },
          {
            "id": "purlin-moment-coefficient-unverified",
            "status": "review",
            "prompt": "The maximum bending moment for purlin design can be taken as WL/10",
            "html": "<p>The extracted text 'W10L' plausibly means WL/10, but its coefficient layout and support model are unverified. A fully specified simply supported model gives wL<sup>2</sup>/8; any other coefficient must come with its continuity and loading assumptions.</p>",
            "sources": [
              {
                "id": "CAP4-05-00112",
                "label": "p. 22; topic 5 point 110"
              }
            ]
          },
          {
            "id": "fillet-throat-coefficient-unverified",
            "status": "review",
            "prompt": "For a 70° angle between fusion faces, the throat coefficient k is 0.7",
            "html": "<p>K = 0.70 is used as an explicit calculation assumption; its IS 800:2007 Table 22 entry was not independently verified. It also differs from the ideal geometric ratio cos 35° ≈ 0.819, so actual design must use the verified applicable provision.</p>",
            "sources": [
              {
                "id": "CAP4-05-00115",
                "label": "p. 22; topic 5 point 114"
              }
            ]
          },
          {
            "id": "web-buckling-cause-incomplete",
            "status": "review",
            "prompt": "Web buckling occurs in a beam due to excessive (source sentence incomplete)",
            "html": "<p>The source sentence stops before naming the stress. Local web buckling under a concentrated load (local compression) and shear buckling of a web panel (in-plane shear) are different mechanisms, and the missing word should not be guessed.</p>",
            "sources": [
              {
                "id": "CAP4-05-00117",
                "label": "p. 22; topic 5 point 116"
              }
            ]
          },
          {
            "id": "dispersion-angle-provenance",
            "status": "review",
            "prompt": "Concentrated load disperses at 45° from flange to web in web buckling",
            "html": "<p>Used here only as an explicit 45° idealization for a calculation. No universal code dispersion rule or clause is asserted; the capsule statement's original source needs verification, and code web-bearing and buckling checks use their own geometry.</p>",
            "sources": [
              {
                "id": "CAP4-05-00129",
                "label": "p. 23; topic 5 point 130; topic 5 point 135"
              }
            ]
          },
          {
            "id": "long-weld-16t-threshold-unsupported",
            "status": "review",
            "prompt": "Weld strength decreases significantly when weld length exceeds 16t",
            "html": "<p>The 16t threshold and the meaning of t are unsupported. Long end-loaded joints can have non-uniform load transfer, which long-joint provisions address, but no replacement numerical threshold is given here; the intended provision needs checking.</p>",
            "sources": [
              {
                "id": "CAP4-05-00134",
                "label": "p. 23; topic 5 point 134"
              }
            ]
          },
          {
            "id": "truss-bridge-32-m-limit",
            "status": "review",
            "prompt": "The truss bridge is preferred for spans up to 32 m",
            "html": "<p>The 32 m range lacks a named trail-bridge catalogue and edition. It may apply to a particular standardized bridge system rather than to trusses in general, and its source should be verified before it is used as a design limit.</p>",
            "sources": [
              {
                "id": "CAP4-10-00175",
                "label": "p. 42; rural point 3"
              }
            ]
          }
        ],
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
        "formulaSheet": "<p><strong>Solid timber column slenderness (IS 883:2016 clause 7.6.1.4):</strong> S/d ≤ 50 for pin-ended solid columns, with S the unsupported length and d the least lateral dimension.</p><p><strong>Eccentric compression, uncracked rectangular section:</strong> σ = (P/A)(1 ± 6e/t); both faces stay in compression while e ≤ t/6.</p><p><strong>Eccentric-load allowance (IS 1905:1987 clause 5.4.1.4):</strong> for e/t between 1/24 and 1/6, edge-stress allowance = 1.25 × the otherwise applicable compressive allowance.</p><p><strong>Tied cavity wall (exercise model):</strong> t<sub>eff</sub> = the larger of the stronger leaf's thickness and (2/3)(t<sub>1</sub> + t<sub>2</sub>).</p>",
        "blocks": [
          {
            "id": "timber-grain-direction",
            "title": "Timber strength depends on load direction relative to the grain",
            "html": "<p>Timber is <strong>anisotropic</strong>: its long, aligned fibres make it stronger in some directions than in others. In direct compression, resistance <strong>parallel to the grain</strong>, where the fibres are loaded along their length, is generally greater than compression or bearing <strong>perpendicular to the grain</strong>, where the fibres are crushed sideways. A design value must therefore match both the direction of stress and the failure mode being checked.</p><p>High strength along the fibres does not imply high resistance to every other action. Splitting and longitudinal shear, which separate the fibres from one another, are governed by separate properties, so parallel-grain compression and longitudinal shear cannot share one strength value. Equal density does not make compressive strength independent of grain direction either. 'Strength is maximum parallel to the grain' is therefore a sound guide for direct compression, not a statement about every timber property.</p>",
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
            "html": "<p>IS 883:2016 expresses the slenderness of a solid timber column as <strong>S/d</strong>: the unsupported length divided by the <strong>least lateral dimension</strong> of the section, rather than length divided by radius of gyration. For pin-ended solid columns, clause 7.6.1.4 caps this ratio at <strong>50</strong>. Other end restraints need a suitably modified length, and capacity checks are still required below the cap.</p><p><em>Worked example.</em> A pin-ended post 3.6 m long with a 100 mm × 150 mm section has S/d = 3600/100 = 36, below 50. Using the larger dimension (3600/150 = 24) answers the wrong question. The least radius of gyration, 100/√12 ≈ 28.9 mm, would give L/r ≈ 124.7, which belongs to a different slenderness definition and must not be compared with the timber limit of 50.</p><p>Clause 7.6.1.5 of the same code limits the permissible load of a <strong>circular</strong> solid column: it must not exceed that of the corresponding <strong>square column of equal cross-sectional area</strong>. This is a timber-code rule, not a general rule for RC or steel columns, and it does not claim that equal-area circles and squares have identical radii of gyration.</p>",
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
            "html": "<p>When a vertical load acts at eccentricity e from the centre of a wall of thickness t, the uncracked rectangular section carries a uniform stress plus bending. The elastic extreme stresses are <strong>σ = (P/A)(1 ± 6e/t)</strong>. Both faces remain in compression while 6e/t does not exceed 1, that is, while e stays within t/6 (the middle third of the thickness).</p><p><em>Worked example.</em> With an average stress of 0.60 MPa and e = t/24, 6e/t = 1/4, so the extreme stresses are 0.60 × 1.25 = 0.75 MPa and 0.60 × 0.75 = 0.45 MPa, both compressive.</p><p>Because bending concentrates stress at one face, <strong>IS 1905:1987 clause 5.4.1.4</strong> allows a higher edge-stress allowance when the eccentricity ratio e/t lies between <strong>1/24 and 1/6</strong>: the otherwise applicable compressive allowance may be increased by <strong>25%</strong>. For e/t = 1/12 and an applicable allowance of 0.80 MPa, the edge allowance becomes 1.25 × 0.80 = 1.00 MPa. The concession does not add capacity automatically: the actual extreme stress and all other applicable factors must still be checked. Likewise, a code permission to ignore a small bending contribution in one check does not make that bending physically zero.</p>",
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
            "id": "cavity-walls-and-bed-joint-shear",
            "title": "Cavity-wall effective thickness and shear on mortar bed joints",
            "html": "<p>A tied cavity wall has two leaves separated by a cavity, and a slenderness or stress check needs a single <strong>effective thickness</strong>. In the exercise model used here, the effective thickness is the larger of the stronger leaf's thickness and two-thirds of the sum of the two leaf thicknesses; the cavity width itself is not added. <em>Worked example.</em> For leaves of 150 mm and 100 mm, (2/3) × (150 + 100) = 166.7 mm, which exceeds 150 mm, so 166.7 mm governs. The rule that actually applies depends on the ties, loading, restraint and governing standard.</p><p>Horizontal shear along a mortar <strong>bed joint</strong> of unreinforced masonry is resisted by bond and friction. Normal compression across the joint increases the frictional resistance to sliding, so the shear a joint can carry depends on the vertical stress as well as on the mortar. A nominal mortar proportion such as 1:1:6 (cement:lime:sand) is therefore not enough, by itself, to fix one universal permissible shear stress, and mortar cube strength is not the joint shear strength; the value must come from the applicable masonry provision and its conditions.</p>",
            "sources": [
              {
                "id": "CAP4-01-00049",
                "label": "p. 3; topic 1 point 46"
              },
              {
                "id": "CAP4-05-00028",
                "label": "p. 20; topic 5 point 27"
              }
            ]
          },
          {
            "id": "lime-mortars-hydraulic-and-non-hydraulic",
            "title": "Lime mortars: hardening by hydration versus carbonation",
            "html": "<p>Lime mortars harden by two different mechanisms. <strong>Non-hydraulic lime</strong> hardens mainly by <strong>carbonation</strong>, reacting slowly with carbon dioxide from the air, so its hardening depends on access to air. <strong>Hydraulic lime</strong> contains compounds that react with water (<strong>hydration</strong>), so it can set and harden in persistently damp conditions.</p><p>That is why hydraulic lime may be selected for a compatible masonry mortar that must harden in damp locations. It does not follow that every lime mortar is made with hydraulic lime: the lime type should suit the masonry units, the exposure and the required performance. Hardening is a chemical process in both cases rather than simple evaporation of water, and neither kind of lime makes mortar strength independent of the sand and of curing.</p>",
            "sources": [
              {
                "id": "CAP4-05-00116",
                "label": "p. 22; topic 5 point 115"
              }
            ]
          },
          {
            "id": "low-strength-masonry-bands-and-regulation",
            "title": "Low-strength masonry, gable bands and the Building Act versus the NBC",
            "html": "<p>The Nepal National Building Code contains separate documents for different kinds of construction. <strong>NBC 203:2015</strong>, Guidelines for Earthquake Resistant Building Construction, addresses <strong>low-strength masonry</strong>, including mud-mortar construction within its stated scope and its height and configuration limits. It is not a general substitute for engineered seismic design or an RC detailing code, and a guideline does not apply beyond its scope limits.</p><p>Seismic bands tie the tops of masonry walls together. Where a masonry <strong>gable</strong> rises above the eaves-level band, a <strong>gable band</strong> runs along the <strong>sloping top edges</strong> of the gable and connects with the horizontal band and the roof anchorage, restraining the top of the gable masonry beneath the pitched roof. Calling it merely a 'roof-level band' confuses it with the horizontal eaves or roof band and misses this gable restraint.</p><p>Regulation has two layers. The <strong>Building Act</strong> and its implementation framework provide the legal basis, while the <strong>Nepal National Building Code</strong> organizes the technical provisions on building performance and construction. Approved drawings do not replace the applicable Act and NBC requirements, and a code title alone does not establish that a particular project complies.</p>",
            "sources": [
              {
                "id": "CAP4-05-00084",
                "label": "p. 21; topic 5 point 84"
              },
              {
                "id": "CAP4-05-00105",
                "label": "p. 22; topic 5 point 104"
              },
              {
                "id": "CAP4-05-00085",
                "label": "p. 21; topic 5 point 85"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "cavity-wall-rule-exercise-only",
            "status": "review",
            "prompt": "Cavity-wall effective thickness is the larger of the stronger leaf or two-thirds of both",
            "html": "<p>Used here as a supplied exercise model, not certified as a universal or current code provision. Its originating clause should be confirmed, and the rule that applies depends on the ties, loading, restraint and governing standard.</p>",
            "sources": [
              {
                "id": "CAP4-01-00049",
                "label": "p. 3; topic 1 point 46"
              }
            ]
          },
          {
            "id": "eccentricity-ratio-restored",
            "status": "corrected",
            "prompt": "Permissible stress rises by 0.25 for an eccentricity ratio above 1 (ratio damaged)",
            "html": "<p>The ratio was damaged in extraction; the full page text reads 1/24. Under IS 1905:1987 clause 5.4.1.4 the 25% increase applies to the edge-stress allowance for e/t between 1/24 and 1/6. It is a permitted allowance rather than an automatic capacity increase, and no current Nepal adoption is implied.</p>",
            "sources": [
              {
                "id": "CAP4-04-00039",
                "label": "p. 16; topic 4 point 37"
              }
            ]
          },
          {
            "id": "bed-joint-shear-value-unverified",
            "status": "review",
            "prompt": "Permissible horizontal shear on a 1:1:6 mortar bed joint is 0.15 MPa",
            "html": "<p>The provenance of 0.15 MPa and any normal-stress condition attached to it are unverified. Joint shear resistance depends on bond, friction and normal compression under the applicable provision, and the mortar mix label alone does not fix one value.</p>",
            "sources": [
              {
                "id": "CAP4-05-00028",
                "label": "p. 20; topic 5 point 27"
              }
            ]
          },
          {
            "id": "circular-column-rule-is-timber",
            "status": "review",
            "prompt": "A circular column's permissible load must not exceed that of an equal-area square column",
            "html": "<p>The capsule omits the context. The rule is IS 883:2016 clause 7.6.1.5 for solid timber columns; it is not a general rule for RC or steel columns.</p>",
            "sources": [
              {
                "id": "CAP4-05-00055",
                "label": "p. 21; topic 5 point 55"
              }
            ]
          },
          {
            "id": "grain-strength-depends-on-mode",
            "status": "review",
            "prompt": "Strength of timber is maximum in the direction parallel to the grain",
            "html": "<p>Sound for direct compression and bearing, where parallel-grain resistance is generally greater. It is not a universal statement about every timber property: high longitudinal strength does not guarantee resistance to splitting or longitudinal shear.</p>",
            "sources": [
              {
                "id": "CAP4-05-00083",
                "label": "p. 21; topic 5 point 83"
              }
            ]
          },
          {
            "id": "building-act-versus-code",
            "status": "corrected",
            "prompt": "The law governing construction standards of buildings in Nepal is the building code",
            "html": "<p>This conflates the law with the technical code. The Building Act and its implementation framework provide the legal basis, and the Nepal National Building Code supplies technical provisions. No current approval threshold or legal amendment is asserted here.</p>",
            "sources": [
              {
                "id": "CAP4-05-00085",
                "label": "p. 21; topic 5 point 85"
              }
            ]
          },
          {
            "id": "timber-slenderness-definition",
            "status": "review",
            "prompt": "The slenderness ratio of a solid timber column should not exceed 50",
            "html": "<p>The limit needs its definition: under IS 883:2016 clause 7.6.1.4 it is S/d, the unsupported length over the least lateral dimension, for pin-ended solid columns. It must not be confused with a length over radius of gyration slenderness.</p>",
            "sources": [
              {
                "id": "CAP4-05-00093",
                "label": "p. 22; topic 5 point 92"
              }
            ]
          },
          {
            "id": "gable-band-location",
            "status": "corrected",
            "prompt": "The gable band in a house is provided at roof level",
            "html": "<p>The location is clarified: a gable band follows the sloping top edges of the masonry gable and connects with the horizontal band and roof anchorage. 'Roof level' confuses it with the horizontal eaves or roof band. No band dimensions or reinforcement are prescribed here.</p>",
            "sources": [
              {
                "id": "CAP4-05-00105",
                "label": "p. 22; topic 5 point 104"
              }
            ]
          },
          {
            "id": "lime-mortar-not-always-hydraulic",
            "status": "corrected",
            "prompt": "Lime mortar is generally made with hydraulic lime",
            "html": "<p>Overgeneralized. Hydraulic lime hardens by hydration and suits persistently damp conditions, whereas non-hydraulic lime hardens mainly by carbonation. Selecting the lime type depends on masonry compatibility, exposure and required performance.</p>",
            "sources": [
              {
                "id": "CAP4-05-00116",
                "label": "p. 22; topic 5 point 115"
              }
            ]
          }
        ],
        "gaps": [
          "Timber beam design (bending, shear, bearing and deflection checks) and permissible timber stresses are not covered by these capsule items.",
          "Basic compressive stresses of masonry, stress-reduction and area factors, and wall slenderness limits are not given.",
          "Mandatory rules of thumb for masonry (opening limits, wall lengths, band sizes) and masonry failure modes are not covered in detail.",
          "Mud and cement mortars are not taught; only the hydraulic versus non-hydraulic lime distinction is covered."
        ]
      }
    });
})();
