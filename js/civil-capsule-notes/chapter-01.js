(function () {
    "use strict";
    window.CIVIL_CAPSULE_NOTE_TOPICS = window.CIVIL_CAPSULE_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_CAPSULE_NOTE_TOPICS, {
      "ACiE0101": {
        "code": "ACiE0101",
        "questionCount": 42,
        "format": 2,
        "summary": "<p>Engineering materials deals with the composition, properties, selection and uses of cement, lime, stone, brick, timber, metals, paints and bituminous compounds. The capsule questions test cement raw materials, clinker phases and hydration, lime and surkhi mortars, how stone is classified and selected, brick earth and firing defects, timber seasoning, the route from ore to metal, the effect of carbon and chromium on steel, tensile behaviour, paint constituents and two short property calculations.</p>",
        "blocks": [
          {
            "id": "cement-raw-meal-and-clinker-phases",
            "title": "Portland cement raw meal and clinker phases",
            "html": "<p>Portland cement starts as a <em>raw meal</em> of two complementary materials. Limestone supplies the calcium carbonate, while clay or shale supplies most of the silica, alumina and iron oxide. Burning the blend in a kiln produces clinker. Gypsum is not a raw-meal ingredient; it is added when the clinker is ground, to regulate setting. Coal at a cement works is principally fuel.</p><table><thead><tr><th scope='col'>Clinker phase</th><th scope='col'>Behaviour on hydration</th></tr></thead><tbody><tr><th scope='row'>C<sub>3</sub>S, tricalcium silicate</th><td>Hydrates relatively fast; the principal source of early strength</td></tr><tr><th scope='row'>C<sub>2</sub>S, dicalcium silicate</th><td>Hydrates slowly; contributes strength at later ages</td></tr><tr><th scope='row'>C<sub>3</sub>A, tricalcium aluminate</th><td>Reacts very rapidly with much heat, but fast reaction is not a large strength contribution</td></tr><tr><th scope='row'>C<sub>4</sub>AF, tetracalcium aluminoferrite</th><td>Contributes relatively little strength</td></tr></tbody></table><p>The silicate phases hydrate to <em>calcium silicate hydrate</em>, abbreviated C-S-H. This gel network binds the paste and supplies most of its strength. Calcium hydroxide forms alongside it but is not the main strength-giving product.</p>",
            "formulas": [
              {
                "label": "Idealised hydration of tricalcium silicate",
                "tex": "2\\,\\mathrm{C_3S} + 6\\,\\mathrm{H} \\rightarrow \\mathrm{C_3S_2H_3} + 3\\,\\mathrm{CH}",
                "where": "<p>Cement chemists' shorthand: C is CaO, S is SiO<sub>2</sub> and H is H<sub>2</sub>O. C<sub>3</sub>S<sub>2</sub>H<sub>3</sub> stands for C-S-H, whose real composition varies, and CH is calcium hydroxide.</p>"
              }
            ],
            "moreHtml": "<p>Reasoning pattern: when two cements of similar fineness and curing differ in early strength gain, look first at their C<sub>3</sub>S proportion. C<sub>3</sub>A reacts fastest, but its speed appears mainly as heat and stiffening, which gypsum is added to control, rather than as the main strength network.</p>",
            "points": [
              {
                "html": "Conventional Portland-cement raw meal combines limestone, the main calcium source, with clay or shale, which supplies most of the silica and alumina; gypsum and coal are not raw-meal ingredients.",
                "sources": [
                  {
                    "id": "CAP4-01-00010",
                    "label": "p. 2; topic 1 point 10"
                  }
                ]
              },
              {
                "html": "A higher proportion of tricalcium silicate, C<sub>3</sub>S, is the main reason one Portland cement gains strength faster over the first few days.",
                "sources": [
                  {
                    "id": "CAP4-01-00003",
                    "label": "p. 2; topic 1 point 3"
                  }
                ]
              },
              {
                "html": "Calcium silicate hydrate, C-S-H, is the hydration product that forms most of the binding network and strength of cement paste; calcium hydroxide is secondary.",
                "sources": [
                  {
                    "id": "CAP4-01-00016",
                    "label": "p. 2; topic 1 point 16"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00010",
                "label": "p. 2; topic 1 point 10"
              },
              {
                "id": "CAP4-01-00003",
                "label": "p. 2; topic 1 point 3"
              },
              {
                "id": "CAP4-01-00016",
                "label": "p. 2; topic 1 point 16"
              }
            ]
          },
          {
            "id": "hydration-gypsum-and-heat",
            "title": "Hydration chemistry, gypsum control and heat release",
            "html": "<p><em>Hydration</em> is a chemical reaction between the cement compounds and water. Mixing only brings them together; the water then takes part in reactions that form new solid products, and these interlock to bind the paste. Drying cannot explain hardening, and a paste does not become chemically inert once it has formed.</p><p>The reactions are <em>exothermic</em>. Fresh paste warms because hydration releases heat, not because of evaporation or simple wetting, and heat release begins together with the chemical change once water is added.</p><p>Freshly ground clinker would stiffen almost at once because C<sub>3</sub>A reacts very rapidly with water, a fault called <em>flash set</em>. A controlled dose of gypsum supplies sulfate that moderates the aluminate reaction and extends the setting time to a workable value. The dose is optimised: gypsum does not replace clinker as a strength phase, and adding more is not an unlimited improvement.</p>",
            "moreHtml": "<p>Keep three ideas apart: the trigger, which is adding water; the process, chemical hydration producing C-S-H and calcium hydroxide; and the symptoms, which are heat, stiffening and strength gain. A definition that stops at forming a paste describes only the trigger.</p>",
            "points": [
              {
                "html": "Hydration differs from simple wetting because water participates in chemical reactions with the cement compounds, forming new binding products.",
                "sources": [
                  {
                    "id": "CAP4-01-00031",
                    "label": "p. 2; topic 1 point 31"
                  }
                ]
              },
              {
                "html": "Fresh cement paste warms because hydration initiates exothermic chemical reactions that release heat, not because of evaporation or physical wetting.",
                "sources": [
                  {
                    "id": "CAP4-01-00142",
                    "label": "p. 5; topic 1 point 135"
                  }
                ]
              },
              {
                "html": "Gypsum is added in a controlled dose to regulate aluminate (C<sub>3</sub>A) hydration and prevent flash set, extending the setting time to a workable value.",
                "sources": [
                  {
                    "id": "CAP4-01-00025",
                    "label": "p. 2; topic 1 point 25"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00031",
                "label": "p. 2; topic 1 point 31"
              },
              {
                "id": "CAP4-01-00142",
                "label": "p. 5; topic 1 point 135"
              },
              {
                "id": "CAP4-01-00025",
                "label": "p. 2; topic 1 point 25"
              }
            ]
          },
          {
            "id": "cement-soundness-storage-and-special-cements",
            "title": "Soundness limits, storage losses and special cements",
            "html": "<p>Some cement faults appear only after hardening. Free magnesia hydrates slowly, so an excess can cause <em>delayed expansion</em> that disrupts hardened concrete, and such cement is called unsound. Specifications therefore limit total MgO and require soundness testing. The capsule quotes 6% for OPC, but the figure that applies must come from the governing cement specification.</p><p>Poor storage harms cement as well. Humid air causes <em>prehydration</em>: particles react early, persistent hard lumps form and the remaining strength-producing capacity falls. Storage time alone fixes no percentage loss. Exposure and packaging matter, and doubtful stock should be retested rather than sieved and assumed sound.</p><p><em>White Portland cement</em> is made with low contents of colouring oxides. It suits pale decorative finishes and cement-based paints; low iron does not mean zero iron.</p><p>Keep <em>quick setting</em>, which is early stiffening, apart from <em>rapid hardening</em>, which is early strength gain. A quick-setting binder may help a particular underwater repair, but placement, cohesion and washout control decide whether underwater work succeeds.</p>",
            "points": [
              {
                "html": "Limits on total MgO in cement guard against delayed expansion and unsoundness caused by slowly hydrating free magnesia; the numerical limit comes from the governing specification.",
                "sources": [
                  {
                    "id": "CAP4-01-00128",
                    "label": "p. 5; topic 1 point 121"
                  }
                ]
              },
              {
                "html": "Cement that has taken up humid air and caked into hard lumps has suffered prehydration, which may reduce its strength-producing capacity; retest such stock before use.",
                "sources": [
                  {
                    "id": "CAP4-01-00023",
                    "label": "p. 2; topic 1 point 23"
                  }
                ]
              },
              {
                "html": "White Portland cement, made low in colouring oxides, is the starting binder for pale cement-based finishes and paints that must avoid the grey of ordinary cement.",
                "sources": [
                  {
                    "id": "CAP4-01-00020",
                    "label": "p. 2; topic 1 point 20"
                  }
                ]
              },
              {
                "html": "Quick setting concerns stiffening, whereas rapid hardening concerns strength gain; quick-setting cement alone does not guarantee a successful underwater repair.",
                "sources": [
                  {
                    "id": "CAP4-05-00036",
                    "label": "p. 20; topic 5 point 35"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00128",
                "label": "p. 5; topic 1 point 121"
              },
              {
                "id": "CAP4-01-00023",
                "label": "p. 2; topic 1 point 23"
              },
              {
                "id": "CAP4-01-00020",
                "label": "p. 2; topic 1 point 20"
              },
              {
                "id": "CAP4-05-00036",
                "label": "p. 20; topic 5 point 35"
              }
            ]
          },
          {
            "id": "plaster-of-paris-and-lime-mortars",
            "title": "Plaster of Paris and lime mortars",
            "html": "<p><em>Plaster of Paris</em> is made by controlled calcination of gypsum. Heating drives off part of the crystal water and converts calcium sulfate dihydrate into the <em>hemihydrate</em>. Mixed with water, the powder rehydrates to interlocking gypsum crystals, which is why it sets again. Carbonating lime or fusing silica with limestone are unrelated processes.</p><p>Lime mortars harden in two ways. Air lime, also called fat lime, hardens mainly by carbonation, so it needs access to air. <em>Hydraulic lime</em> contains constituents that react with water, so it can gain strength in persistently damp conditions with little air. Choose hydraulic lime for damp work without treating it as the only lime used in mortar.</p>",
            "formulas": [
              {
                "label": "Calcination of gypsum to plaster of Paris",
                "tex": "\\begin{aligned} &\\mathrm{CaSO_4 \\cdot 2H_2O} \\\\ &\\rightarrow \\mathrm{CaSO_4 \\cdot \\tfrac{1}{2}H_2O} + \\tfrac{3}{2}\\,\\mathrm{H_2O} \\end{aligned}",
                "where": "<p>Setting reverses the change: the hemihydrate takes up water again and crystallises as the dihydrate.</p>"
              }
            ],
            "points": [
              {
                "html": "Plaster of Paris is made by partial dehydration of gypsum to the hemihydrate; mixing it with water rehydrates it to gypsum, so it sets again.",
                "sources": [
                  {
                    "id": "CAP4-01-00001",
                    "label": "p. 2; topic 1 point 1"
                  }
                ]
              },
              {
                "html": "Hydraulic lime, which reacts with water, is preferred to pure air lime where mortar must bind in persistently damp conditions with little air.",
                "sources": [
                  {
                    "id": "CAP4-01-00009",
                    "label": "p. 2; topic 1 point 9"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00001",
                "label": "p. 2; topic 1 point 1"
              },
              {
                "id": "CAP4-01-00009",
                "label": "p. 2; topic 1 point 9"
              }
            ]
          },
          {
            "id": "surkhi-in-lime-mortars",
            "title": "Surkhi: burnt-clay powder in traditional mortar",
            "html": "<p><em>Surkhi</em> is finely ground burnt clay, most often crushed brick, used in traditional lime mortars. It can replace part of the sand where the mortar specification allows.</p><p>Its value goes beyond filling space. Inert sand only packs between the other particles. A suitably reactive surkhi also contains silica and alumina that combine with lime in the presence of moisture, forming additional cementitious products. This is a <em>pozzolanic</em> reaction.</p><p>The binding contribution is conditional. Reactivity depends on the clay's composition, the firing it received and the fineness of grinding, so surkhi is not interchangeable with sand in every mix.</p>",
            "points": [
              {
                "html": "Surkhi is finely powdered burnt clay, commonly crushed brick, used as a traditional mortar ingredient.",
                "sources": [
                  {
                    "id": "CAP4-01-00144",
                    "label": "p. 5; topic 1 point 137"
                  }
                ]
              },
              {
                "html": "Unlike inert sand, suitably reactive surkhi supplies reactive silica and alumina that can form cementitious products with lime in the presence of moisture.",
                "sources": [
                  {
                    "id": "CAP4-01-00145",
                    "label": "p. 5; topic 1 point 137"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00144",
                "label": "p. 5; topic 1 point 137"
              },
              {
                "id": "CAP4-01-00145",
                "label": "p. 5; topic 1 point 137"
              }
            ]
          },
          {
            "id": "rock-origin-and-composition",
            "title": "Classifying building stone by origin and by composition",
            "html": "<p>A <em>natural building stone</em> is cut from existing rock by quarrying and then dressed to size. It is not fired like brick, bound with cement like artificial stone or cured in an autoclave like an aerated block.</p><p>Stone is classified in two independent ways, and the two are easily confused:</p><table><thead><tr><th scope='col'>Basis</th><th scope='col'>Groups</th><th scope='col'>Examples</th></tr></thead><tbody><tr><th scope='row'>Geological origin</th><td>Igneous, sedimentary, metamorphic</td><td>Basalt is extrusive igneous; quartzite is metamorphic</td></tr><tr><th scope='row'>Chemical composition</th><td>Siliceous, calcareous, argillaceous</td><td>Quartzite is siliceous because quartz is silica</td></tr></tbody></table><p>Quartzite forms when quartz-rich sandstone recrystallises under heat and pressure <em>without melting</em>; melting and crystallisation would describe an igneous origin. Basalt is fine-grained because basaltic lava cooled quickly at the surface, which makes it <em>extrusive</em> rather than intrusive. Calcareous means carbonate-rich and argillaceous means clay-rich.</p>",
            "moreHtml": "<p>A rock name describes geology, not local availability or fitness for a job. Whether a particular source can supply suitable stone or aggregate is settled by geological investigation and material testing.</p>",
            "points": [
              {
                "html": "Quarrying existing rock and dressing the blocks to size gives natural building stone; no firing or cement binding is involved.",
                "sources": [
                  {
                    "id": "CAP4-01-00019",
                    "label": "p. 2; topic 1 point 19"
                  }
                ]
              },
              {
                "html": "By chemical composition quartzite is a siliceous stone, because its quartz is silica; metamorphic describes its origin instead.",
                "sources": [
                  {
                    "id": "CAP4-01-00007",
                    "label": "p. 2; topic 1 point 7"
                  }
                ]
              },
              {
                "html": "Quartz-rich sandstone recrystallised by heat and pressure without melting becomes quartzite, a metamorphic rock.",
                "sources": [
                  {
                    "id": "CAP4-01-00147",
                    "label": "p. 5; topic 1 point 139"
                  }
                ]
              },
              {
                "html": "Basalt, dense and fine-grained because basaltic lava cooled rapidly at the surface, is an extrusive igneous rock.",
                "sources": [
                  {
                    "id": "CAP4-01-00021",
                    "label": "p. 2; topic 1 point 21"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00019",
                "label": "p. 2; topic 1 point 19"
              },
              {
                "id": "CAP4-01-00007",
                "label": "p. 2; topic 1 point 7"
              },
              {
                "id": "CAP4-01-00147",
                "label": "p. 5; topic 1 point 139"
              },
              {
                "id": "CAP4-01-00021",
                "label": "p. 2; topic 1 point 21"
              }
            ]
          },
          {
            "id": "stone-hardness-and-self-weight",
            "title": "Stone hardness and density in practical selection",
            "html": "<p><em>Scratch hardness</em> depends largely on the minerals a stone contains. Granite rich in quartz and feldspar commonly resists scratching better than limestone, whose main mineral, calcite, is much softer. Hardness is a separate property from compressive strength and density, so neither of those values alone ranks stones for scratch or abrasion resistance. Slate and conglomerate cannot be ranked universally by name, because their mineralogy, fabric, clasts and natural cement vary.</p><p>Density matters where weight does structural work. A <em>gravity retaining wall</em> resists overturning and sliding largely through its self-weight, so a denser sound stone raises the resisting moment and the normal force that mobilises base friction.</p><p>Some quantities do not change: the friction coefficient itself, the unit weight of the retained soil and the water pressure at a given depth. Bearing pressure and drainage still need checking.</p>",
            "points": [
              {
                "html": "Granite commonly benefits from its harder mineral constituents: quartz and feldspar resist scratching better than the calcite that makes up limestone.",
                "sources": [
                  {
                    "id": "CAP4-01-00146",
                    "label": "p. 5; topic 1 point 138"
                  }
                ]
              },
              {
                "html": "A denser sound stone helps a gravity retaining wall because its added self-weight can increase stabilizing actions, the resisting moment and the normal force behind base friction.",
                "sources": [
                  {
                    "id": "CAP4-01-00057",
                    "label": "p. 3; topic 1 point 54"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00146",
                "label": "p. 5; topic 1 point 138"
              },
              {
                "id": "CAP4-01-00057",
                "label": "p. 3; topic 1 point 54"
              }
            ]
          },
          {
            "id": "brick-earth-and-firing-defects",
            "title": "Brick earth composition, colour and firing defects",
            "html": "<p>Good brick earth balances plastic clay with non-plastic material. Clay-rich earth shrinks heavily as it dries and tends to crack or warp. A controlled addition of clean <em>sand</em> gives a relatively rigid skeleton and dilutes the shrinking fraction, so drying shrinkage and warping fall. Too much sand is also harmful because cohesion drops, and sand is neither a binder nor a substitute for firing.</p><p>The usual red colour of fired clay comes mainly from <em>iron oxide</em> developed in adequately oxidising firing. The exact shade still depends on composition and kiln atmosphere; silica and alumina play other roles in the ceramic body.</p><p>Firing can also create defects:</p><ul><li><em>Bloating</em>: swelling caused by gas trapped in a softened body during burning.</li><li>Efflorescence: salt deposits on the surface.</li><li>Lime popping: local disruption by reactive lime particles.</li><li>Lamination: separation into layers.</li></ul>",
            "points": [
              {
                "html": "A controlled addition of clean sand to clay-rich brick earth reduces drying shrinkage and warping; too much sand weakens cohesion.",
                "sources": [
                  {
                    "id": "CAP4-01-00013",
                    "label": "p. 2; topic 1 point 13"
                  }
                ]
              },
              {
                "html": "Iron oxide chiefly gives clay bricks their red colour when firing is adequately oxidising.",
                "sources": [
                  {
                    "id": "CAP4-01-00028",
                    "label": "p. 2; topic 1 point 28"
                  }
                ]
              },
              {
                "html": "Bloating is swelling of a brick caused by gas trapped inside a softened body during burning.",
                "sources": [
                  {
                    "id": "CAP4-01-00030",
                    "label": "p. 2; topic 1 point 30"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00013",
                "label": "p. 2; topic 1 point 13"
              },
              {
                "id": "CAP4-01-00028",
                "label": "p. 2; topic 1 point 28"
              },
              {
                "id": "CAP4-01-00030",
                "label": "p. 2; topic 1 point 30"
              }
            ]
          },
          {
            "id": "brick-quality-size-and-terracotta",
            "title": "Brick quality indicators, nominal sizes and terracotta",
            "html": "<p>Brick inspection looks for a consistent set of signs: low tested <em>water absorption</em>, regular plane faces and sharp, sound arrises, the edges of the brick. A brick that is highly absorbent, warped or crumbling at the edges fails at least one sign even if the others look good. These signs point to sound burning and workmanship, but they are not an acceptance certificate; specified strength, dimensions, durability and test limits still govern.</p><p>Brick size is specified by its dimensions: length, width and height. The <em>actual size</em> describes the unit itself, while the <em>nominal</em> or coordinating size adds the specified mortar-joint allowance. The difference is the joint, not strength grade, mass or absorption.</p><p><em>Terracotta</em> is moulded, fired clay used for ornamental units such as cornices, with a characteristic earthen look. Terrazzo is a composite finish containing stone chips, while plaster and fibre cement rely on other binders.</p>",
            "points": [
              {
                "html": "The most favourable brick report combines low tested absorption, regular faces and sharp arrises, though specified strength and test limits still govern acceptance.",
                "sources": [
                  {
                    "id": "CAP4-01-00133",
                    "label": "p. 5; topic 1 point 127"
                  }
                ]
              },
              {
                "html": "Actual and nominal brick dimensions differ by the specified mortar-joint allowance, not by strength grade, mass or absorption.",
                "sources": [
                  {
                    "id": "CAP4-01-00125",
                    "label": "p. 5; topic 1 point 119"
                  }
                ]
              },
              {
                "html": "Terracotta, moulded and fired clay, suits ornamental units such as cornices with a characteristic earthen appearance.",
                "sources": [
                  {
                    "id": "CAP4-01-00044",
                    "label": "pp. 3, 5; topic 1 point 42; topic 1 point 125"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00133",
                "label": "p. 5; topic 1 point 127"
              },
              {
                "id": "CAP4-01-00125",
                "label": "p. 5; topic 1 point 119"
              },
              {
                "id": "CAP4-01-00044",
                "label": "pp. 3, 5; topic 1 point 42; topic 1 point 125"
              }
            ]
          },
          {
            "id": "timber-seasoning",
            "title": "Timber seasoning and drying defects",
            "html": "<p>Green timber holds far more moisture than it will keep in service. <em>Seasoning</em> removes the excess so that the moisture content approaches the equilibrium the wood will reach in its surroundings. This reduces later shrinkage, warping and distortion of joinery.</p><p>Seasoning is not waterproofing. Seasoned timber still gains or loses moisture as the humidity changes, and seasoning does not replace fibres with preservative salts.</p><p>Fast methods need control. In <em>electrical seasoning</em> the wood is heated internally. If drying is rapid and poorly controlled, steep moisture gradients cause uneven shrinkage, and the tensile drying stresses can open checks and splits along the grain. Splitting is a risk governed by temperature, moisture gradient and drying control, not an inevitable result. Fungal decay, insect galleries and mineral stain have other causes.</p>",
            "points": [
              {
                "html": "Seasoning green timber before fabrication aims to bring its moisture closer to the service equilibrium, limiting later shrinkage and distortion.",
                "sources": [
                  {
                    "id": "CAP4-01-00014",
                    "label": "p. 2; topic 1 point 14"
                  }
                ]
              },
              {
                "html": "Rapid, poorly controlled electrical seasoning can cause splitting along the grain, because steep moisture gradients create tensile drying stresses; splitting is a risk, not a certainty.",
                "sources": [
                  {
                    "id": "CAP4-01-00006",
                    "label": "p. 2; topic 1 point 6"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00014",
                "label": "p. 2; topic 1 point 14"
              },
              {
                "id": "CAP4-01-00006",
                "label": "p. 2; topic 1 point 6"
              }
            ]
          },
          {
            "id": "ore-dressing-concentration-metallurgy",
            "title": "From ore to metal: dressing, concentration and metallurgy",
            "html": "<p><em>Metallurgy</em> is the broad field that covers ore treatment, extraction and refining of metals, alloy production, and the study of how processing controls metal properties. Its operations are easiest to remember as a sequence:</p><ol><li><em>Ore dressing and concentration</em>, together called beneficiation: physical preparation before extraction. Washing adhering clay off iron-ore lumps is dressing; rejecting waste gangue so that the useful mineral fraction rises is concentration.</li><li><em>Extraction</em>: smelting or reduction converts the mineral, often an oxide, into metal.</li><li><em>Refining</em>: removes impurities from metal that has already been extracted.</li><li><em>Alloying and processing</em>: adjusts composition and structure for service.</li></ol><p>Concentration removes impurities from the ore; refining removes them from the metal. Washing clay from ore reduces no metal oxide, so it is not smelting. Annealing, tempering and homogenisation treat the metal later and are not ore-processing steps.</p>",
            "points": [
              {
                "html": "Metallurgy is the broad field covering ore treatment, extraction and refining of metals and alloy production, not a single ore-processing step.",
                "sources": [
                  {
                    "id": "CAP4-01-00024",
                    "label": "p. 2; topic 1 point 24"
                  }
                ]
              },
              {
                "html": "Ore concentration separates waste gangue so that a larger share of the ore is useful mineral before smelting.",
                "sources": [
                  {
                    "id": "CAP4-01-00026",
                    "label": "p. 2; topic 1 point 26"
                  }
                ]
              },
              {
                "html": "Washing adhering clay off iron-ore lumps before they reach the furnace is ore dressing; it reduces no oxide to metal.",
                "sources": [
                  {
                    "id": "CAP4-01-00029",
                    "label": "p. 2; topic 1 point 29"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00024",
                "label": "p. 2; topic 1 point 24"
              },
              {
                "id": "CAP4-01-00026",
                "label": "p. 2; topic 1 point 26"
              },
              {
                "id": "CAP4-01-00029",
                "label": "p. 2; topic 1 point 29"
              }
            ]
          },
          {
            "id": "carbon-and-chromium-in-steel",
            "title": "Carbon and chromium: how composition shapes steel",
            "html": "<p>In plain-carbon steels processed in comparable ways, <em>carbon</em> strongly affects the microstructure. More carbon generally raises the attainable hardness and strength but reduces ductility and weldability. It barely changes the elastic modulus, so a higher-carbon steel is not noticeably stiffer in the elastic range.</p><p>Heat treatment, alloying and processing also move these properties, so carbon is the controlling variable only when those factors are held comparable.</p><p><em>Stainless steel</em> depends chiefly on <em>chromium</em>, which promotes a thin, protective chromium-rich oxide film on the surface, called the passive film. Nickel is useful in many stainless grades but is not compulsory in every family, and high carbon alone gives no stainless behaviour. Manganese and sulfur are not responsible for passivity.</p>",
            "moreHtml": "<p>Treat composition questions as trade-offs: a gain in hardness and strength usually costs ductility and ease of welding. Be wary of a memorised carbon percentage band offered as the definition of all steels; the dependable point is the direction of the trend.</p>",
            "points": [
              {
                "html": "Raising the carbon content of comparably processed plain-carbon steel gives greater hardness with reduced ductility and weldability, and hardly any change in elastic modulus.",
                "sources": [
                  {
                    "id": "CAP4-01-00034",
                    "label": "p. 2; topic 1 point 34"
                  }
                ]
              },
              {
                "html": "Across comparable plain-carbon steels, more carbon brings higher hardness and strength with reduced ductility and weldability; heat treatment and alloying also matter.",
                "sources": [
                  {
                    "id": "CAP4-05-00077",
                    "label": "p. 21; topic 5 point 76"
                  }
                ]
              },
              {
                "html": "Chromium is the alloying element that enables the passive, chromium-rich oxide film of stainless steel; nickel is not compulsory in every stainless family.",
                "sources": [
                  {
                    "id": "CAP4-01-00033",
                    "label": "p. 2; topic 1 point 33"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00034",
                "label": "p. 2; topic 1 point 34"
              },
              {
                "id": "CAP4-05-00077",
                "label": "p. 21; topic 5 point 76"
              },
              {
                "id": "CAP4-01-00033",
                "label": "p. 2; topic 1 point 33"
              }
            ]
          },
          {
            "id": "ductility-malleability-and-creep",
            "title": "Ductility, malleability and creep in tensile behaviour",
            "html": "<p><em>Ductility</em> is the capacity to undergo appreciable permanent, plastic elongation in tension before fracture; drawing metal into wire depends on it. <em>Malleability</em> is the comparable capacity under compression, as in hammering or rolling sheet. Hardness, the resistance to indentation or scratching, and elastic stiffness, the recoverable deformation per unit stress, are different properties again.</p><p><em>Creep</em> is time-dependent: deformation keeps increasing while a sustained load or stress is maintained. Its counterpart is <em>stress relaxation</em>, in which the deformation is held fixed and the stress falls with time.</p><p>A short, rapid tensile test cannot characterise long-term creep by itself; creep data come from sustained-load observation. Brittle fracture without prior extension and instantaneous elastic recovery are the opposite of creep.</p>",
            "points": [
              {
                "html": "Appreciable permanent elongation in tension before fracture demonstrates ductility; malleability is the corresponding capacity under compression.",
                "sources": [
                  {
                    "id": "CAP4-01-00032",
                    "label": "p. 2; topic 1 point 32"
                  }
                ]
              },
              {
                "html": "Slow, continuing extension under a tensile load held for a long period is creep; stress relaxation is falling stress at fixed strain.",
                "sources": [
                  {
                    "id": "CAP4-01-00132",
                    "label": "p. 5; topic 1 point 126"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00032",
                "label": "p. 2; topic 1 point 32"
              },
              {
                "id": "CAP4-01-00132",
                "label": "p. 5; topic 1 point 126"
              }
            ]
          },
          {
            "id": "paint-constituents-and-bituminous-fillers",
            "title": "Paint constituents, lacquer, red-lead primer and bituminous fillers",
            "html": "<p>A paint is a system whose constituents have distinct jobs:</p><table><thead><tr><th scope='col'>Constituent</th><th scope='col'>Function</th></tr></thead><tbody><tr><th scope='row'>Pigment</th><td>Colour and hiding power (opacity)</td></tr><tr><th scope='row'>Binder or vehicle</th><td>Forms the continuous film that holds pigment to the surface</td></tr><tr><th scope='row'>Thinner</th><td>Adjusts application viscosity, then evaporates</td></tr><tr><th scope='row'>Drier</th><td>Promotes curing of the film</td></tr></tbody></table><p>A conventional <em>nitrocellulose lacquer</em> dries initially by evaporation of its volatile solvent, leaving the dissolved resin as a film. It does not rely mainly on oxidation of a drying oil such as linseed oil. Nitrocellulose is the resin, not the solvent.</p><p><em>Red lead</em>, lead tetroxide, appears in old steelwork schedules as a corrosion-inhibiting primer pigment. Lead is toxic, so this identifies a historical material and is not a recommendation.</p><p><em>Plastic bitumen</em> fills small non-structural cracks because it adheres and accommodates limited movement while reducing water entry. It seals a crack but does not restore the capacity of a fractured member.</p>",
            "points": [
              {
                "html": "Changing a paint's colour and hiding power while keeping the same film-forming resin means changing its pigment.",
                "sources": [
                  {
                    "id": "CAP4-01-00008",
                    "label": "pp. 2, 5, 6; topic 1 point 8; topic 1 point 140"
                  }
                ]
              },
              {
                "html": "A conventional nitrocellulose lacquer dries initially by evaporation of its volatile solvent, not by oxidation of a drying oil.",
                "sources": [
                  {
                    "id": "CAP4-01-00011",
                    "label": "p. 2; topic 1 point 11"
                  }
                ]
              },
              {
                "html": "The red lead of a historical anticorrosive primer is lead tetroxide, Pb<sub>3</sub>O<sub>4</sub>; lead is toxic, so this identifies an old material only.",
                "sources": [
                  {
                    "id": "CAP4-01-00027",
                    "label": "p. 2; topic 1 point 27"
                  }
                ]
              },
              {
                "html": "Plastic bituminous compound suits small non-structural cracks because it offers adhesion with some deformation capacity; it seals the crack without restoring strength.",
                "sources": [
                  {
                    "id": "CAP4-01-00015",
                    "label": "p. 2; topic 1 point 15"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00008",
                "label": "pp. 2, 5, 6; topic 1 point 8; topic 1 point 140"
              },
              {
                "id": "CAP4-01-00011",
                "label": "p. 2; topic 1 point 11"
              },
              {
                "id": "CAP4-01-00027",
                "label": "p. 2; topic 1 point 27"
              },
              {
                "id": "CAP4-01-00015",
                "label": "p. 2; topic 1 point 15"
              }
            ]
          },
          {
            "id": "worked-property-calculations",
            "title": "Worked property calculations: bulk density and light speed",
            "html": "<p>Several material properties reduce to one defining ratio, and most slips come from inverting it.</p><ul><li><em>Bulk density</em> is mass divided by the total volume of a specimen, including its internal voids.</li><li><em>Refractive index</em> is the speed of light in vacuum divided by its speed in the material, so the speed inside is found by dividing by the index, not multiplying.</li></ul><p>Sense-check each result. An index greater than 1 must slow light, so a speed above that in vacuum is impossible. A density below 1000 kg/m<sup>3</sup> means the material is lighter than an equal volume of water.</p><p>Product classes such as MDF must be read from a named standard. Refractive index also varies with wavelength, so a quoted value applies at a stated wavelength.</p>",
            "formulas": [
              {
                "label": "Bulk density",
                "tex": "\\rho = \\dfrac{m}{V}",
                "where": "<p>\\(m\\) is the specimen mass and \\(V\\) its total volume, voids included.</p>"
              },
              {
                "label": "Speed of light in a medium",
                "tex": "v = \\dfrac{c}{n}",
                "where": "<p>\\(n\\) is the refractive index at the stated wavelength and \\(c\\) the speed of light in vacuum.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: a fibreboard and a diamond",
              "html": "<p>A dry fibreboard specimen of 7.2 kg occupies 0.010 m<sup>3</sup>:</p>\\[\\rho = \\dfrac{7.2}{0.010} = 720\\ \\text{kg/m}^3\\]<p>For diamond with \\(n = 2.42\\) at the stated wavelength and \\(c = 3.00 \\times 10^8\\ \\text{m/s}\\):</p>\\[\\begin{aligned} v &amp;= \\dfrac{3.00 \\times 10^8}{2.42} \\\\ &amp;= 1.24 \\times 10^8\\ \\text{m/s} \\end{aligned}\\]<p>Multiplying \\(c\\) by \\(n\\) instead would give 7.26 × 10<sup>8</sup> m/s, faster than light in vacuum, which is impossible.</p>"
            },
            "points": [
              {
                "html": "A dry fibreboard specimen of 7.2 kg occupying 0.010 m<sup>3</sup> has a measured bulk density of 720 kg/m<sup>3</sup>.",
                "sources": [
                  {
                    "id": "CAP4-01-00018",
                    "label": "p. 2; topic 1 point 18"
                  }
                ]
              },
              {
                "html": "Light travels at about 1.24 × 10<sup>8</sup> m/s in diamond of refractive index 2.42, from \\(v = c/n\\) with \\(c = 3.00 \\times 10^8\\) m/s.",
                "sources": [
                  {
                    "id": "CAP4-05-00050",
                    "label": "p. 20; topic 5 point 49"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00018",
                "label": "p. 2; topic 1 point 18"
              },
              {
                "id": "CAP4-05-00050",
                "label": "p. 20; topic 5 point 49"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Bulk density",
            "tex": "\\rho = \\dfrac{m}{V}",
            "note": "Total specimen volume, internal voids included."
          },
          {
            "label": "Speed of light in a medium",
            "tex": "v = \\dfrac{c}{n}",
            "note": "The index applies at a stated wavelength."
          },
          {
            "label": "Plaster of Paris from gypsum",
            "tex": "\\begin{aligned} &\\mathrm{CaSO_4 \\cdot 2H_2O} \\\\ &\\rightarrow \\mathrm{CaSO_4 \\cdot \\tfrac{1}{2}H_2O} + \\tfrac{3}{2}\\,\\mathrm{H_2O} \\end{aligned}",
            "note": "Setting reverses the change."
          },
          {
            "label": "Idealised hydration of tricalcium silicate",
            "tex": "2\\,\\mathrm{C_3S} + 6\\,\\mathrm{H} \\rightarrow \\mathrm{C_3S_2H_3} + 3\\,\\mathrm{CH}",
            "note": "Cement chemists' notation; real C-S-H composition varies."
          }
        ],
        "cautions": [
          {
            "id": "caution-electric-seasoning-splitting",
            "status": "review",
            "prompt": "Splitting is the drawback of electric seasoning of timber",
            "html": "<p>Qualified. The capsule presents splitting as an unconditional drawback. Rapid, poorly controlled drying can set up moisture gradients that split the wood, but temperature, gradients and drying control decide the risk; electrical seasoning does not inevitably split timber.</p>",
            "sources": [
              {
                "id": "CAP4-01-00006",
                "label": "p. 2; topic 1 point 6"
              }
            ]
          },
          {
            "id": "caution-mortar-lime-always-hydraulic",
            "status": "review",
            "prompt": "Lime used as mortar is hydraulic lime",
            "html": "<p>Too broad. Hydraulic lime is the better binder for persistently damp work with limited air, but air-lime mortar, which hardens largely by carbonation, remains suitable for other applications. Mortar lime is not exclusively hydraulic.</p>",
            "sources": [
              {
                "id": "CAP4-01-00009",
                "label": "p. 2; topic 1 point 9"
              }
            ]
          },
          {
            "id": "caution-lacquer-spirit-varnish",
            "status": "corrected",
            "prompt": "Lacquer is spirit varnish",
            "html": "<p>Corrected. Equating every lacquer with spirit varnish is loose historical shorthand, not a precise definition. The tested mechanism is that a solventborne lacquer dries initially by evaporation of its volatile solvent; nitrocellulose is the film-forming resin, not the solvent.</p>",
            "sources": [
              {
                "id": "CAP4-01-00011",
                "label": "p. 2; topic 1 point 11"
              }
            ]
          },
          {
            "id": "caution-mdf-density-range",
            "status": "corrected",
            "prompt": "MDF minimum density is 600 to 800 kg/m3, but prefer 960 kg/m3 in the exam",
            "html": "<p>Corrected. The capsule states a range and then contradicts it with a preferred 960 kg/m<sup>3</sup>. Neither figure is adopted as a universal MDF minimum. Compute the measured density from mass and volume, and classify a product only against a named standard.</p>",
            "sources": [
              {
                "id": "CAP4-01-00018",
                "label": "p. 2; topic 1 point 18"
              }
            ]
          },
          {
            "id": "caution-basalt-availability",
            "status": "review",
            "prompt": "Basalt is the aggregate type not available in Nepal",
            "html": "<p>Unverified. The categorical geographic claim is not supported by the reviewed material and is not repeated as fact. The testable point is basalt's origin as a fine-grained extrusive igneous rock; the availability of any rock needs geological investigation and testing.</p>",
            "sources": [
              {
                "id": "CAP4-01-00021",
                "label": "p. 2; topic 1 point 21"
              }
            ]
          },
          {
            "id": "caution-cement-strength-after-storage",
            "status": "review",
            "prompt": "The strength of cement decreases after storage",
            "html": "<p>Qualified. Loss of strength-producing capacity follows moisture exposure and prehydration, not storage duration as such. No fixed loss applies to well-protected cement; exposure, packaging and appropriate retesting decide whether stored cement is usable.</p>",
            "sources": [
              {
                "id": "CAP4-01-00023",
                "label": "p. 2; topic 1 point 23"
              }
            ]
          },
          {
            "id": "caution-red-lead-primer",
            "status": "review",
            "prompt": "Red lead is the pigment used in paints for corrosion resistance",
            "html": "<p>Historical identification only. Red lead, lead tetroxide, is retained as the pigment of an old anticorrosive primer. Lead is toxic, and no current approval, legal acceptability or recommendation for lead coatings is implied.</p>",
            "sources": [
              {
                "id": "CAP4-01-00027",
                "label": "p. 2; topic 1 point 27"
              }
            ]
          },
          {
            "id": "caution-hydration-definition",
            "status": "corrected",
            "prompt": "Cement hydration involves mixing with water to form a paste",
            "html": "<p>Corrected. The capsule reduces hydration to the mixing step. Hydration is the chemical reaction of cement constituents with water; forming a paste only starts it, and the reaction products, not evaporation, create the binding structure.</p>",
            "sources": [
              {
                "id": "CAP4-01-00031",
                "label": "p. 2; topic 1 point 31"
              }
            ]
          },
          {
            "id": "caution-steel-carbon-range",
            "status": "corrected",
            "prompt": "The carbon content present in steel is 0.15% to 1.5%",
            "html": "<p>Corrected. The quoted band is not the universal carbon range of all steels, so it is not used as a classification. The dependable point is the trend: more carbon generally gives more hardness and strength with less ductility and weldability.</p>",
            "sources": [
              {
                "id": "CAP4-01-00034",
                "label": "p. 2; topic 1 point 34"
              }
            ]
          },
          {
            "id": "caution-opc-magnesia-limit",
            "status": "review",
            "prompt": "6% magnesia is the maximum allowed in ordinary Portland cement",
            "html": "<p>Specification-dependent. The 6% figure is used only as a stipulated specification value; no current NS or IS edition or adoption has been verified for it. The tested principle is that excessive slowly hydrating free magnesia threatens soundness through delayed expansion.</p>",
            "sources": [
              {
                "id": "CAP4-01-00128",
                "label": "p. 5; topic 1 point 121"
              }
            ]
          },
          {
            "id": "caution-surkhi-sand-replacement",
            "status": "review",
            "prompt": "Surkhi is burnt clay powder used in place of sand",
            "html": "<p>Conditional. Surkhi can replace part of the fine material where specified, and a suitably reactive surkhi also contributes pozzolanic binding with lime. Its reactivity depends on clay composition, firing and fineness, so it is not universally interchangeable with sand.</p>",
            "sources": [
              {
                "id": "CAP4-01-00145",
                "label": "p. 5; topic 1 point 137"
              }
            ]
          },
          {
            "id": "caution-granite-hardness-ranking",
            "status": "review",
            "prompt": "Granite has a higher hardness coefficient than limestone, slate and conglomerate",
            "html": "<p>Qualified. The reviewed item supports only the mineral-based tendency for quartz- and feldspar-rich granite to resist scratching better than calcite-rich limestone. No verified universal hardness coefficient or ranking over every slate and conglomerate is asserted.</p>",
            "sources": [
              {
                "id": "CAP4-01-00146",
                "label": "p. 5; topic 1 point 138"
              }
            ]
          },
          {
            "id": "caution-quick-setting-underwater",
            "status": "review",
            "prompt": "Quick setting cement is used for underwater construction",
            "html": "<p>A possible application, not a prescription. Setting describes the loss of plasticity, whereas hardening describes the growth of strength. A quick-setting binder may suit a specific underwater repair, but ordinary underwater concreting also depends on placement, cohesion and washout control.</p>",
            "sources": [
              {
                "id": "CAP4-05-00036",
                "label": "p. 20; topic 5 point 35"
              }
            ]
          },
          {
            "id": "caution-diamond-refractive-index",
            "status": "review",
            "prompt": "The refractive index of diamond is 2.42",
            "html": "<p>Qualified. The value applies at a stated wavelength because refractive index varies with wavelength; it is not a universal constant. The review also records that placing this optical property in the materials topic is a broad mapping that may be reconsidered.</p>",
            "sources": [
              {
                "id": "CAP4-05-00050",
                "label": "p. 20; topic 5 point 49"
              }
            ]
          },
          {
            "id": "caution-carbon-maximum-influence",
            "status": "review",
            "prompt": "Maximum influence on steel is carbon",
            "html": "<p>Narrowed. The vague claim is limited to comparable plain-carbon steels, where carbon strongly governs hardness, strength, ductility and weldability. Heat treatment, alloying and processing also matter, so carbon is not the sole control in every steel.</p>",
            "sources": [
              {
                "id": "CAP4-05-00077",
                "label": "p. 21; topic 5 point 76"
              }
            ]
          }
        ],
        "gaps": [
          "Tiles, tar and asphalt mixtures named in the syllabus have no capsule question in this topic; bitumen appears only as a crack-filling compound.",
          "Thermal properties such as conductivity and thermal expansion, and chemical-resistance comparisons, are not tested by these capsule items.",
          "Lime manufacture and slaking, varnish types other than lacquer and systematic alloy classifications lie outside the questions covered here.",
          "The diamond refractive-index item is an optical property placed in this topic by broad mapping rather than a core civil-material test."
        ]
      },
      "ACiE0102": {
        "code": "ACiE0102",
        "questionCount": 17,
        "format": 2,
        "summary": "<p>This subchapter covers the standard laboratory tests for civil engineering materials and how their results are read against specification limits. The capsule questions test the Vicat and Le Chatelier cement tests, the mortar briquette, brick compression and water absorption, aggregate moisture states and the bulking of sand, bulk density, fineness modulus and grading zones, and the tensile testing and ductility of reinforcing steel.</p>",
        "blocks": [
          {
            "id": "vicat-consistency-and-setting-times",
            "title": "Vicat apparatus: standard consistency and setting times",
            "html": "<p>The <em>Vicat apparatus</em> serves two linked cement-paste tests, each with its own attachment and procedure.</p><ol><li><em>Standard consistency</em>: the water content is varied until a plunger penetrates the paste to the prescribed depth. That water content defines the paste used for later tests.</li><li><em>Setting times</em>: the plunger is replaced by the prescribed needle attachments, which identify the initial and final set under the specified procedure.</li></ol><p>A shared frame does not make the procedures interchangeable. Other apparatus answer different questions: the Le Chatelier mould measures expansion for soundness, the Blaine apparatus assesses fineness indirectly by air permeability, and the slump cone measures the consistency of fresh concrete rather than cement paste.</p><p>Reading a specification limit is a separate skill. A requirement that the initial setting time be <em>not less than</em> a stated value is a minimum: results below it fail, and results at or above it comply.</p>",
            "example": {
              "title": "Worked check: a 30-minute minimum initial set",
              "html": "<p>Suppose the governing specification sets 30 minutes as the lowest acceptable initial setting time.</p><ul><li>A paste that initially sets at 25 minutes gives \\(25 \\lt 30\\), so it fails.</li><li>A paste that initially sets later than 30 minutes complies.</li></ul><p>The minimum protects working time for mixing, transport, placing and compaction. It does not predict that every OPC sample sets at exactly 30 minutes, and the test conditions must be those of the governing specification.</p>"
            },
            "points": [
              {
                "html": "Standard consistency of cement paste is found with the Vicat apparatus, by adjusting the water until its plunger reaches the prescribed penetration.",
                "sources": [
                  {
                    "id": "CAP4-01-00036",
                    "label": "p. 2; topic 1 point 36"
                  }
                ]
              },
              {
                "html": "Fitting the prescribed needle attachments in place of the Vicat plunger allows the initial and final setting times of the paste to be assessed.",
                "sources": [
                  {
                    "id": "CAP4-01-00037",
                    "label": "p. 2; topic 1 point 36"
                  }
                ]
              },
              {
                "html": "Against a minimum initial setting time of 30 minutes, an initial set at 25 minutes fails; the limit is a minimum, not an exact setting time.",
                "sources": [
                  {
                    "id": "CAP4-01-00012",
                    "label": "p. 2; topic 1 point 12"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00036",
                "label": "p. 2; topic 1 point 36"
              },
              {
                "id": "CAP4-01-00037",
                "label": "p. 2; topic 1 point 36"
              },
              {
                "id": "CAP4-01-00012",
                "label": "p. 2; topic 1 point 12"
              }
            ]
          },
          {
            "id": "soundness-and-briquette-tension",
            "title": "Le Chatelier soundness and briquette tension tests",
            "html": "<p><em>Soundness</em> is a cement's freedom from harmful expansion after setting. In the <em>Le Chatelier test</em>, paste is cast in a split cylindrical mould fitted with two indicator arms. After the prescribed heating, the change in separation of the arm tips measures the expansion. The test does not determine setting time, fineness or compressive strength, and it is not a complete diagnosis of every expansion mechanism.</p><p>The traditional <em>briquette test</em> measures the direct tensile strength of mortar. A briquette with a reduced central neck is held in grips and pulled apart. Failure occurs across the neck, so tensile strength equals the breaking load divided by the neck area.</p><p>The briquette test is distinct from flexural tension, direct shear and compression. It is best remembered as a classical test geometry rather than as current universal acceptance practice.</p>",
            "formulas": [
              {
                "label": "Briquette tensile strength",
                "tex": "f_t = \\dfrac{P}{A_{\\text{neck}}}",
                "where": "<p>\\(P\\) is the breaking load and \\(A_{\\text{neck}}\\) the cross-sectional area at the reduced neck.</p>"
              }
            ],
            "points": [
              {
                "html": "Le Chatelier expansion, read from the widening of the indicator-arm tips on the split mould after heating, is the test of cement soundness.",
                "sources": [
                  {
                    "id": "CAP4-01-00043",
                    "label": "p. 2; topic 1 point 41"
                  }
                ]
              },
              {
                "html": "A necked mortar briquette pulled apart in grips measures direct tensile strength: the breaking load divided by the neck area.",
                "sources": [
                  {
                    "id": "CAP4-05-00114",
                    "label": "p. 22; topic 5 point 112"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00043",
                "label": "p. 2; topic 1 point 41"
              },
              {
                "id": "CAP4-05-00114",
                "label": "p. 22; topic 5 point 112"
              }
            ]
          },
          {
            "id": "brick-compressive-strength-test",
            "title": "Brick compressive strength: preparation and calculation",
            "html": "<p>The <em>compressive strength</em> of a prepared brick specimen is the failure load divided by the loaded area. Convert kilonewtons to newtons before dividing by square millimetres, and remember that 1 N/mm<sup>2</sup> equals 1 MPa. A misplaced decimal gives values ten times too small or too large.</p><p>Before loading, the frog and bearing faces are prepared as the procedure specifies, for example by filling the frog with 1:1 cement-sand mortar. The purpose is a true bearing face and consistent load transfer. The preparation does not alter the brick, measure its absorption or remove the need to measure the loaded area.</p><p>Compare the result with the limit that actually applies. A single specimen does not replace the sampling rules of a specification.</p>",
            "formulas": [
              {
                "label": "Compressive strength",
                "tex": "f_c = \\dfrac{P}{A}",
                "where": "<p>\\(P\\) is the failure load in newtons and \\(A\\) the loaded area in mm<sup>2</sup>, giving N/mm<sup>2</sup>, that is MPa.</p>"
              }
            ],
            "example": {
              "title": "Worked example: 231 kN on 21,000 square millimetres",
              "html": "<p>The project minimum is 10.5 N/mm<sup>2</sup>, and the specimen carries 231 kN at failure.</p>\\[\\begin{aligned} f_c &amp;= \\dfrac{231\\,000\\ \\text{N}}{21\\,000\\ \\text{mm}^2} \\\\ &amp;= 11.0\\ \\text{N/mm}^2 \\end{aligned}\\]<p>Since 11.0 exceeds 10.5, this specimen is above the stated limit.</p>"
            },
            "points": [
              {
                "html": "A prepared brick that fails under 231 kN on a 21,000 mm<sup>2</sup> loaded area has a compressive strength of 11.0 N/mm<sup>2</sup>, above a stated 10.5 N/mm<sup>2</sup> limit.",
                "sources": [
                  {
                    "id": "CAP4-01-00035",
                    "label": "p. 2; topic 1 point 35"
                  }
                ]
              },
              {
                "html": "Filling the frog with the specified 1:1 cement-sand mortar gives a prepared bearing face for consistent load transfer; it is not a strength value.",
                "sources": [
                  {
                    "id": "CAP4-01-00039",
                    "label": "p. 2; topic 1 point 38"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00035",
                "label": "p. 2; topic 1 point 35"
              },
              {
                "id": "CAP4-01-00039",
                "label": "p. 2; topic 1 point 38"
              }
            ]
          },
          {
            "id": "brick-water-absorption-test",
            "title": "Brick water absorption on a dry-mass basis",
            "html": "<p><em>Water absorption</em> expresses the mass of water a brick takes up during the specified immersion as a percentage of its <em>dry</em> mass. The brick is dried, weighed, immersed as prescribed, wiped to remove surface water and weighed again.</p><p>The denominator is always the dry mass. Dividing the gain by the wet mass gives a smaller percentage and can wrongly pass a brick that fails. Lower absorption generally indicates a denser, better-burnt brick, but the acceptance limit must come from the specification or brief that applies.</p>",
            "formulas": [
              {
                "label": "Water absorption",
                "tex": "W_a = \\dfrac{W_{\\text{wet}} - W_{\\text{dry}}}{W_{\\text{dry}}} \\times 100\\%"
              }
            ],
            "example": {
              "title": "Worked example: a 3.00 kg brick against a 15% limit",
              "html": "<p>Dry mass 3.00 kg; mass after the specified soaking and wiping 3.48 kg.</p>\\[\\begin{aligned} W_a &amp;= \\dfrac{3.48 - 3.00}{3.00} \\times 100\\% \\\\ &amp;= 16\\% \\end{aligned}\\]<p>At 16% the brick fails the stated 15% limit. Taking the wet mass as the base would give 0.48/3.48, about 13.8%, and wrongly pass it.</p>"
            },
            "points": [
              {
                "html": "A brick of 3.00 kg dry mass weighing 3.48 kg after immersion absorbs 16% on a dry-mass basis, so it fails the stated 15% limit.",
                "sources": [
                  {
                    "id": "CAP4-01-00038",
                    "label": "p. 2; topic 1 point 37"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00038",
                "label": "p. 2; topic 1 point 37"
              }
            ]
          },
          {
            "id": "aggregate-moisture-states-and-bulking",
            "title": "Aggregate moisture states and the bulking of sand",
            "html": "<p>Aggregate moisture is described by states, and concrete water calculations depend on them:</p><table><thead><tr><th scope='col'>State</th><th scope='col'>Accessible pores</th><th scope='col'>Surface</th></tr></thead><tbody><tr><th scope='row'>Oven dry</th><td>Empty</td><td>Dry</td></tr><tr><th scope='row'>Air dry</th><td>Partly filled</td><td>Dry</td></tr><tr><th scope='row'>Saturated surface dry (SSD)</th><td>Filled with water</td><td>No free moisture</td></tr><tr><th scope='row'>Wet</th><td>Filled</td><td>Free surface water</td></tr></tbody></table><p>SSD needs <em>saturated</em> pores, not merely some moisture in them; air-dry aggregate can still absorb mixing water.</p><p><em>Bulking</em> is the increase in volume of moist sand. Thin moisture films and menisci hold the grains apart, so the same sand occupies more space. Flooding destroys the films and the grains settle back. Divide the increase by the flooded, unbulked volume. The cause is surface films between grains, not water absorbed into the pores.</p>",
            "formulas": [
              {
                "label": "Bulking of sand",
                "tex": "B = \\dfrac{V_{\\text{moist}} - V_{\\text{flooded}}}{V_{\\text{flooded}}} \\times 100\\%"
              }
            ],
            "example": {
              "title": "Worked example: 125 litres loose, 100 litres flooded",
              "html": "\\[\\begin{aligned} B &amp;= \\dfrac{125 - 100}{100} \\times 100\\% \\\\ &amp;= 25\\% \\end{aligned}\\]<p>Dividing by the moist volume instead would give 20%, which understates the bulking. The effect matters whenever sand is batched by volume.</p>"
            },
            "moreHtml": "<p>Separate the cause from measurement influences. The physical cause of bulking is moisture-related grain separation, and its size depends on moisture content and sand grading. Vessel diameter relative to grain size, the filling procedure and the strike-off method do not cause bulking, but an unsuitable container or inconsistent packing can distort the measured apparent volume. Standardised apparatus keeps results comparable.</p>",
            "points": [
              {
                "html": "Aggregate is saturated surface dry when its accessible pores are filled with water and its surface carries no free moisture.",
                "sources": [
                  {
                    "id": "CAP4-02-00007",
                    "label": "p. 6; topic 2 point 6"
                  }
                ]
              },
              {
                "html": "Moist sand filling 125 litres loosely but 100 litres after flooding shows 25% bulking: the increase divided by the flooded volume.",
                "sources": [
                  {
                    "id": "CAP4-02-00043",
                    "label": "p. 7; topic 2 point 39"
                  }
                ]
              },
              {
                "html": "The principal physical cause of bulking is moisture films and menisci separating grains; container size and packing influence only the measured volume.",
                "sources": [
                  {
                    "id": "CAP4-02-00166",
                    "label": "p. 10; topic 2 point 146"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00007",
                "label": "p. 6; topic 2 point 6"
              },
              {
                "id": "CAP4-02-00043",
                "label": "p. 7; topic 2 point 39"
              },
              {
                "id": "CAP4-02-00166",
                "label": "p. 10; topic 2 point 146"
              }
            ]
          },
          {
            "id": "bulk-density-fineness-and-grading-zones",
            "title": "Bulk density, fineness modulus and grading zones",
            "html": "<p><em>Bulk density</em> is the mass of aggregate that fills a unit volume of a container, so it includes the voids between particles. It therefore depends on packing and on the prescribed loose or compacted filling procedure.</p><p>A vessel that is narrow relative to particle size adds <em>wall effects</em>, because grains cannot pack as closely against the wall. Identical aggregate can thus give different results unless a standard measure and method are used. Particle specific gravity is a separate, intrinsic property that the container does not change.</p><p><em>Fineness modulus</em> is calculated from the cumulative percentages retained on a specified sieve series. A higher value, such as 3.0 against 2.3, generally indicates coarser overall grading. It is a grading index, not a density or plasticity measure, and different grading curves can share one value.</p><p>In the four-zone IS 383 grading convention for fine aggregate, Zone I is the coarse end and Zone IV the fine end. Zones describe grading only; they are not soil-classification sand sizes and do not by themselves guarantee concrete suitability.</p>",
            "formulas": [
              {
                "label": "Fineness modulus",
                "tex": "\\mathrm{FM} = \\dfrac{\\sum C_i}{100}",
                "where": "<p>\\(C_i\\) is the cumulative percentage retained on each sieve of the specified standard series.</p>"
              }
            ],
            "points": [
              {
                "html": "Measured bulk density includes interparticle voids, so packing and wall effects can change the measured void content even when the aggregate is identical.",
                "sources": [
                  {
                    "id": "CAP4-02-00136",
                    "label": "p. 9; topic 2 point 122"
                  }
                ]
              },
              {
                "html": "A fineness modulus of 3.0 rather than 2.3 on the same sieve series generally indicates a coarser overall grading, not a higher particle density.",
                "sources": [
                  {
                    "id": "CAP4-02-00148",
                    "label": "p. 10; topic 2 point 131"
                  }
                ]
              },
              {
                "html": "In the four-zone IS 383 fine-aggregate grading convention, Zone I is coarser than Zone IV.",
                "sources": [
                  {
                    "id": "CAP4-02-00021",
                    "label": "p. 6; topic 2 point 18"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-02-00136",
                "label": "p. 9; topic 2 point 122"
              },
              {
                "id": "CAP4-02-00148",
                "label": "p. 10; topic 2 point 131"
              },
              {
                "id": "CAP4-02-00021",
                "label": "p. 6; topic 2 point 18"
              }
            ]
          },
          {
            "id": "reinforcement-tensile-testing",
            "title": "Tensile testing of reinforcement and ductility measures",
            "html": "<p>For routine quality control of reinforcing bars, the <em>uniaxial tensile test</em> directly measures the yield or proof stress, the ultimate tensile strength and the elongation. Bend and rebend tests, among other specified checks, supplement it by assessing behaviour in bending; they do not provide those strength values. Compression is not a routine rebar acceptance test, although it would be too absolute to claim it is never performed for research.</p><p>On an idealised mild-steel curve, the <em>yield plateau</em> follows the elastic line: strain increases substantially while stress stays nearly constant. Strain hardening later raises the stress again towards the ultimate value. Steels without a distinct plateau are commonly characterised by a <em>proof stress</em> at a specified permanent strain.</p><p>Ductility is quantified by elongation and by the <em>percentage reduction in area</em> at the fracture neck. A larger reduction generally indicates greater ductility in comparable tests; the remaining-area percentage is not the ductility measure.</p>",
            "formulas": [
              {
                "label": "Percentage reduction in area",
                "tex": "RA = \\dfrac{A_0 - A_f}{A_0} \\times 100\\%",
                "where": "<p>\\(A_0\\) is the original cross-sectional area and \\(A_f\\) the minimum area at the neck after fracture.</p>"
              },
              {
                "label": "Percentage elongation",
                "tex": "e = \\dfrac{L_f - L_0}{L_0} \\times 100\\%",
                "where": "<p>\\(L_0\\) is the original gauge length and \\(L_f\\) the gauge length after fracture.</p>"
              }
            ],
            "example": {
              "title": "Worked example: an area of 100 mm² necking to 64 mm²",
              "html": "\\[\\begin{aligned} RA &amp;= \\dfrac{100 - 64}{100} \\times 100\\% \\\\ &amp;= 36\\% \\end{aligned}\\]<p>The 64% that remains is the residual area, not the reduction. A larger reduction in area generally signals a more ductile steel in comparable tests.</p>"
            },
            "points": [
              {
                "html": "For routine rebar quality control, the uniaxial tensile test measures yield or proof stress, ultimate strength and elongation directly; bend and rebend tests supplement it.",
                "sources": [
                  {
                    "id": "CAP4-05-00104",
                    "label": "p. 22; topic 5 point 103"
                  }
                ]
              },
              {
                "html": "On the yield plateau of mild steel, strain increases substantially at nearly constant stress; stress rises again only during later strain hardening.",
                "sources": [
                  {
                    "id": "CAP4-05-00040",
                    "label": "p. 20; topic 5 point 39"
                  }
                ]
              },
              {
                "html": "A tensile specimen whose area falls from 100 mm<sup>2</sup> to 64 mm<sup>2</sup> at the neck shows a 36% reduction in area, a measure of its ductility.",
                "sources": [
                  {
                    "id": "CAP4-05-00130",
                    "label": "p. 23; topic 5 point 131"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00104",
                "label": "p. 22; topic 5 point 103"
              },
              {
                "id": "CAP4-05-00040",
                "label": "p. 20; topic 5 point 39"
              },
              {
                "id": "CAP4-05-00130",
                "label": "p. 23; topic 5 point 131"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Compressive strength",
            "tex": "f_c = \\dfrac{P}{A}",
            "note": "1 N/mm<sup>2</sup> equals 1 MPa."
          },
          {
            "label": "Water absorption",
            "tex": "W_a = \\dfrac{W_{\\text{wet}} - W_{\\text{dry}}}{W_{\\text{dry}}} \\times 100\\%",
            "note": "Always on the dry-mass base."
          },
          {
            "label": "Bulking of sand",
            "tex": "B = \\dfrac{V_{\\text{moist}} - V_{\\text{flooded}}}{V_{\\text{flooded}}} \\times 100\\%",
            "note": "Divide by the flooded, unbulked volume."
          },
          {
            "label": "Fineness modulus",
            "tex": "\\mathrm{FM} = \\dfrac{\\sum C_i}{100}",
            "note": "A higher value means a coarser grading."
          },
          {
            "label": "Briquette tensile strength",
            "tex": "f_t = \\dfrac{P}{A_{\\text{neck}}}"
          },
          {
            "label": "Percentage reduction in area",
            "tex": "RA = \\dfrac{A_0 - A_f}{A_0} \\times 100\\%",
            "note": "The original area is the base."
          },
          {
            "label": "Percentage elongation",
            "tex": "e = \\dfrac{L_f - L_0}{L_0} \\times 100\\%"
          }
        ],
        "cautions": [
          {
            "id": "caution-opc-initial-setting-time",
            "status": "review",
            "prompt": "The initial setting time of ordinary Portland cement is 30 minutes",
            "html": "<p>Read as a minimum. Thirty minutes is treated as a stated lower limit, not an exact setting time for every OPC sample, and it has not been independently verified as a current Nepal requirement. Use the governing specification and its test conditions.</p>",
            "sources": [
              {
                "id": "CAP4-01-00012",
                "label": "p. 2; topic 1 point 12"
              }
            ]
          },
          {
            "id": "caution-first-class-brick-strength",
            "status": "review",
            "prompt": "Compressive strength of first-class brick should not be less than 10.5 N/mm2",
            "html": "<p>Project criterion only. The 10.5 N/mm<sup>2</sup> value is used as an explicitly stated project limit; the capsule does not establish it as a common NS or IS first-class boundary, and one specimen does not replace sampling rules.</p>",
            "sources": [
              {
                "id": "CAP4-01-00035",
                "label": "p. 2; topic 1 point 35"
              }
            ]
          },
          {
            "id": "caution-first-class-brick-absorption",
            "status": "review",
            "prompt": "Water absorption of first-class bricks should not exceed 15%",
            "html": "<p>Supplied limit only. The 15% figure is used as a criterion given in the problem, not as a verified universal first-class limit. The tested skill is the absorption calculation on a dry-mass basis.</p>",
            "sources": [
              {
                "id": "CAP4-01-00038",
                "label": "p. 2; topic 1 point 37"
              }
            ]
          },
          {
            "id": "caution-frog-mortar-proportion",
            "status": "review",
            "prompt": "Mortar placed in the frog for a brick compression test is 1:1 cement to sand",
            "html": "<p>Stipulated preparation. The 1:1 frog filling is treated as a requirement of the stated procedure. The applicable edition, specimen conditioning and loading details must still govern any real test.</p>",
            "sources": [
              {
                "id": "CAP4-01-00039",
                "label": "p. 2; topic 1 point 38"
              }
            ]
          },
          {
            "id": "caution-ssd-definition",
            "status": "corrected",
            "prompt": "SSD aggregate contains moisture in its pores and has a dry surface",
            "html": "<p>Corrected. Some moisture in the pores is not enough. Saturated surface dry means the accessible pores are filled with water and the surface carries no free moisture; partly filled pores describe air-dry aggregate, which can still absorb mixing water.</p>",
            "sources": [
              {
                "id": "CAP4-02-00007",
                "label": "p. 6; topic 2 point 6"
              }
            ]
          },
          {
            "id": "caution-bulking-mechanism",
            "status": "corrected",
            "prompt": "Bulking of sand is an increase in volume due to moisture absorption",
            "html": "<p>Corrected. Bulking is caused by moisture films and menisci separating the grains, not by water absorbed into aggregate pores. Flooding removes the films and eliminates the bulking effect.</p>",
            "sources": [
              {
                "id": "CAP4-02-00043",
                "label": "p. 7; topic 2 point 39"
              }
            ]
          },
          {
            "id": "caution-bulk-density-container",
            "status": "corrected",
            "prompt": "Bulk density of aggregates does not depend on the size and shape of the container",
            "html": "<p>Corrected. Measured bulk density includes interparticle voids, so packing, filling procedure and wall effects in a small container can change it. Only the intrinsic grain density is independent of the container; standardised measures make results comparable.</p>",
            "sources": [
              {
                "id": "CAP4-02-00136",
                "label": "p. 9; topic 2 point 122"
              }
            ]
          },
          {
            "id": "caution-bulking-container",
            "status": "review",
            "prompt": "Bulking of aggregate does not depend on the size and shape of the container",
            "html": "<p>Qualified. The container is not the physical cause of bulking, which is moisture-related grain separation. However, an unsuitable container or a different packing procedure can change the measured apparent volume, so apparatus and method must be standardised.</p>",
            "sources": [
              {
                "id": "CAP4-02-00166",
                "label": "p. 10; topic 2 point 146"
              }
            ]
          },
          {
            "id": "caution-post-yield-trend",
            "status": "corrected",
            "prompt": "After the yield point, strain in a test sample increases more slowly than stress",
            "html": "<p>Corrected. The capsule reverses the characteristic post-yield trend. On a mild-steel yield plateau, strain increases substantially while stress stays nearly constant; stress rises again only during later strain hardening.</p>",
            "sources": [
              {
                "id": "CAP4-05-00040",
                "label": "p. 20; topic 5 point 39"
              }
            ]
          },
          {
            "id": "caution-rebar-compression-test",
            "status": "review",
            "prompt": "Compression tests are not conducted on rebar",
            "html": "<p>Limited to routine testing. Compression is not the routine material-acceptance test for reinforcement; tensile testing with bend or rebend checks is. An absolute ban on compression experiments for any purpose is not asserted.</p>",
            "sources": [
              {
                "id": "CAP4-05-00104",
                "label": "p. 22; topic 5 point 103"
              }
            ]
          }
        ],
        "gaps": [
          "Cement fineness, cement compressive-strength procedures and specific gravity appear only as contrasts; no capsule question tests them directly.",
          "Aggregate crushing, impact and abrasion tests, listed under aggregate testing, are not covered by these capsule items.",
          "Numerical acceptance limits quoted by the capsule are treated as stated criteria; current NS and IS editions and adoption have not been verified here."
        ]
      },
      "ACiE0103": {
        "code": "ACiE0103",
        "questionCount": 33,
        "format": 2,
        "summary": "<p>Building technology covers how buildings are put together: masonry, carpentry, plastering and painting, roofs, floors, damp-proofing and the planning controls of building by-laws. The capsule questions test formwork and shoring, plaster backgrounds, brick laying, bonding and dry rubble, stone dressing and joints, arch and wall terms, damp-proof courses, roof edges and waterproofing, battens and timber joints, stairs and floor layers, planning ratios, code-governed details, and the protection of cement and paint from moisture.</p>",
        "blocks": [
          {
            "id": "formwork-and-shoring",
            "title": "Formwork selection and temporary shoring",
            "html": "<p>Choosing formwork balances first cost against the number of reuses. <em>Steel panels</em> are rigid, hold consistent dimensions and survive many cycles when they are cleaned and maintained. Their higher initial cost and weight are therefore justified for many identical pours, such as repeated wall panels. Steel is not automatically the cheapest material: for a single pour, timber boarding, plywood or particleboard sheathing may be more economical.</p><p>Temporary works also protect existing structures. <em>Shoring</em> is the temporary arrangement, often inclined props, that supports an unsafe or threatened structure, such as a masonry wall disturbed by excavation beside it. Related terms differ:</p><ul><li><em>Underpinning</em> strengthens or extends existing foundations.</li><li><em>Scaffolding</em> gives workers and materials access.</li><li><em>Centering</em> supports an arch or similar construction until it becomes self-supporting.</li></ul>",
            "points": [
              {
                "html": "For many identical concrete pours, properly maintained steel panels suit repeated use and hold their dimensions, which justifies their higher first cost.",
                "sources": [
                  {
                    "id": "CAP4-01-00002",
                    "label": "p. 2; topic 1 point 2"
                  }
                ]
              },
              {
                "html": "Temporary inclined props that support a masonry wall made unsafe by nearby excavation are called shoring; underpinning instead strengthens foundations.",
                "sources": [
                  {
                    "id": "CAP4-01-00004",
                    "label": "p. 2; topic 1 point 4"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00002",
                "label": "p. 2; topic 1 point 2"
              },
              {
                "id": "CAP4-01-00004",
                "label": "p. 2; topic 1 point 4"
              }
            ]
          },
          {
            "id": "plaster-background-preparation",
            "title": "Preparing smooth backgrounds for plaster: key and hacking",
            "html": "<p>Plaster adheres through mechanical key and controlled suction, so the background matters as much as the mix. A smooth concrete surface should be clean, sound and suitably roughened, then dampened in a controlled way so that excessive suction does not draw water out of the fresh plaster.</p><p>Contamination defeats bond whatever the roughness. Loose dust, release oil left from formwork and a film of standing water all weaken adhesion, and a thicker coat cannot bridge them.</p><p><em>Hacking</em> is cutting shallow indentations into a smooth background to create that key, using the approved surface-preparation method. Neighbouring terms mean different operations:</p><ul><li><em>Pointing</em> finishes the exposed mortar joints of masonry.</li><li><em>Screeding</em> controls level or thickness using guides.</li><li><em>Floating</em> works the surface of plaster after it has been applied.</li></ul>",
            "points": [
              {
                "html": "Plaster bonds best to a smooth concrete wall prepared as a clean, suitably roughened and dampened background; dust, release oil and standing water weaken adhesion.",
                "sources": [
                  {
                    "id": "CAP4-01-00005",
                    "label": "p. 2; topic 1 point 5"
                  }
                ]
              },
              {
                "html": "Hacking is cutting shallow indentations into a smooth background so that plaster gains a mechanical key.",
                "sources": [
                  {
                    "id": "CAP4-01-00053",
                    "label": "p. 3; topic 1 point 50"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00005",
                "label": "p. 2; topic 1 point 5"
              },
              {
                "id": "CAP4-01-00053",
                "label": "p. 3; topic 1 point 50"
              }
            ]
          },
          {
            "id": "brick-frog-and-prewetting",
            "title": "Laying bricks: the frog, prewetting and clean beds",
            "html": "<p>The <em>frog</em> is the shallow depression moulded into a brick's bed face; it can receive mortar and help key the joint. Other brick terms name different features: an arris is an edge, a quoin is a corner of the masonry and a closer is a cut brick used to maintain the bond.</p><p>Absorbent bricks laid dry draw water out of the fresh mortar. Controlled <em>prewetting</em> reduces this suction, so the mortar keeps enough water for hydration and bond development and spreads evenly.</p><p>Two follow-up steps make prewetting work. Loose dust is removed, because it would act as a weak separating layer. Free surface water is allowed to drain, because a water film on the bed face also separates brick from mortar. Cleaning and suction control are complementary, and prewetting does not replace proper curing afterwards.</p>",
            "points": [
              {
                "html": "The frog is the shallow depression in a brick's bed face that can receive mortar and help key the joint.",
                "sources": [
                  {
                    "id": "CAP4-01-00017",
                    "label": "p. 2; topic 1 point 17"
                  }
                ]
              },
              {
                "html": "Appropriately prewetting absorbent bricks reduces premature loss of mortar water into the brick, leaving water for hydration and bond.",
                "sources": [
                  {
                    "id": "CAP4-01-00126",
                    "label": "p. 5; topic 1 point 120"
                  }
                ]
              },
              {
                "html": "Removing loose dust and draining free surface water after prewetting improves mortar contact without a separating water film on the bed face.",
                "sources": [
                  {
                    "id": "CAP4-01-00127",
                    "label": "p. 5; topic 1 point 120"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00017",
                "label": "p. 2; topic 1 point 17"
              },
              {
                "id": "CAP4-01-00126",
                "label": "p. 5; topic 1 point 120"
              },
              {
                "id": "CAP4-01-00127",
                "label": "p. 5; topic 1 point 120"
              }
            ]
          },
          {
            "id": "raking-bond-and-dry-rubble",
            "title": "Bonding thick brick walls and building dry rubble",
            "html": "<p>Thick brick walls need bonding through their interior as well as across their faces. <em>Raking bond</em> introduces diagonal courses inside the wall, between the face courses, to improve longitudinal bonding within the core. It is not a damp-proof course, a sloping weathering surface or a movement joint, which serve other purposes. No universal ranking makes raking bond the weakest bond regardless of wall thickness, loading and workmanship.</p><p><em>Dry rubble masonry</em> has no mortar, so its stability depends on the stones themselves. The critical workmanship is selecting and interlocking stones, giving each a sound bearing contact and providing bonding through the thickness of the wall.</p><p>Small packing pieces may fill voids but must not become the main support of large stones, and aligned vertical joints weaken the wall; an even face colour is a secondary concern.</p>",
            "points": [
              {
                "html": "Diagonal raking courses in a thick brick wall improve longitudinal bonding within the wall's interior; no universal ranking makes raking bond the weakest.",
                "sources": [
                  {
                    "id": "CAP4-01-00048",
                    "label": "p. 3; topic 1 point 45"
                  }
                ]
              },
              {
                "html": "Without mortar, a dry-rubble wall depends on selecting and interlocking stones with sound bearing contacts and through-wall bonding; small packing pieces cannot replace them.",
                "sources": [
                  {
                    "id": "CAP4-01-00130",
                    "label": "p. 5; topic 1 point 123"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00048",
                "label": "p. 3; topic 1 point 45"
              },
              {
                "id": "CAP4-01-00130",
                "label": "p. 5; topic 1 point 123"
              }
            ]
          },
          {
            "id": "stone-dressing-and-joints",
            "title": "Dressing and jointing building stone",
            "html": "<p>Some stones are easier to work while they retain their quarry moisture, sometimes called quarry sap, and harden as they dry on exposure. For such stones, <em>dressing soon after quarrying</em> is generally easier. This is a material-dependent preference, not a rule that every stone must be dressed at once under all site conditions. Prolonged weathering or repeated wetting and freezing in storage only makes working harder or damages the stone.</p><p>The type of dressing follows the required geometry. <em>Circular dressing</em> shapes exposed faces to a curved profile, as the blocks of a cylindrical pillar need. Boasted plane faces, rough rock-faced finishes and drafted margins around a pitched face do not produce that geometry.</p><p>Joints between dressed stones can be shaped to interlock. In a <em>rebated joint</em>, complementary steps are cut along the mating edges so the stones overlap instead of meeting in a plain butt joint. Such interlock can resist relative displacement, but arches do not universally require rebates. Dowels and cramps are separate metal connectors.</p>",
            "points": [
              {
                "html": "Stone that hardens as it loses quarry moisture is generally easier to dress soon after quarrying, before substantial drying.",
                "sources": [
                  {
                    "id": "CAP4-01-00058",
                    "label": "p. 3; topic 1 point 55"
                  }
                ]
              },
              {
                "html": "Circular dressing shapes stone faces to a curved profile, as the blocks of a cylindrical pillar require.",
                "sources": [
                  {
                    "id": "CAP4-01-00059",
                    "label": "p. 3; topic 1 point 56"
                  }
                ]
              },
              {
                "html": "A rebated joint has complementary steps cut along the mating edges of adjacent stones, so they overlap rather than butt together.",
                "sources": [
                  {
                    "id": "CAP4-05-00092",
                    "label": "p. 22; topic 5 point 91"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00058",
                "label": "p. 3; topic 1 point 55"
              },
              {
                "id": "CAP4-01-00059",
                "label": "p. 3; topic 1 point 56"
              },
              {
                "id": "CAP4-05-00092",
                "label": "p. 22; topic 5 point 91"
              }
            ]
          },
          {
            "id": "arches-corbels-and-wall-roles",
            "title": "Arch terms, corbels and the load role of walls",
            "html": "<p>Arch vocabulary separates <em>locations</em> from <em>units</em>. The <em>crown</em> is the highest central region of the arch, whereas the keystone is the central wedge-shaped unit placed there. The springing is where the curve begins, and the skewback is the inclined bearing surface that supports the arch.</p><p>A <em>corbel</em> is a short structural projection from a wall or support that carries a concentrated bearing load, such as the seat of a roof truss. Decorative or protective elements differ: a frieze is an architectural band, a cornice is a projecting decorative course and coping caps the top of a wall.</p><p>Walls also differ in structural role. A masonry <em>panel</em> or infill wall in a framed building carries neither floors nor roof, so it is non-load-bearing for those gravity loads. It still carries its own weight and must resist and transfer applicable lateral loads, so non-load-bearing does not mean unloaded. Occupying a frame bay does not by itself make a panel a designed shear wall.</p>",
            "points": [
              {
                "html": "The crown is the highest central region of an arch; the keystone is the central wedge-shaped unit placed there.",
                "sources": [
                  {
                    "id": "CAP4-05-00091",
                    "label": "p. 22; topic 5 point 90"
                  }
                ]
              },
              {
                "html": "A corbel is a short structural projection from a wall that gives a roof truss its bearing seat; a frieze is only an architectural band.",
                "sources": [
                  {
                    "id": "CAP4-01-00052",
                    "label": "p. 3; topic 1 point 49"
                  }
                ]
              },
              {
                "html": "A masonry infill panel in a framed building is non-load-bearing for the supported floors and roof, though it carries its self-weight and lateral loads.",
                "sources": [
                  {
                    "id": "CAP4-05-00011",
                    "label": "p. 19; topic 5 point 11"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00091",
                "label": "p. 22; topic 5 point 90"
              },
              {
                "id": "CAP4-01-00052",
                "label": "p. 3; topic 1 point 49"
              },
              {
                "id": "CAP4-05-00011",
                "label": "p. 19; topic 5 point 11"
              }
            ]
          },
          {
            "id": "damp-proof-courses",
            "title": "Damp-proof courses, rising damp and bypass routes",
            "html": "<p><em>Rising damp</em> is ground moisture drawn up through porous masonry by capillary action, a major cause of dampness in buildings. The direct remedy is a <em>damp-proof course</em> (DPC) that is continuous, interrupts the capillary path and links correctly with the floor's damp barrier. Roof ventilation, decorative cornices or thicker porous plaster at the wall base do not stop ground-fed moisture.</p><p>A DPC works only while nothing bridges it. Mortar bridges, gaps in the barrier, raised external ground and render running continuously from below the DPC to above it all create an alternative capillary route. A concrete DPC can meet its compressive grade and still fail as a damp barrier when bypassed, because strength compliance says nothing about the continuity of the detail.</p><p>In the stated IS convention, <em>M15</em> denotes a characteristic compressive strength of 15 N/mm<sup>2</sup>, that is 15 MPa, measured on cubes at 28 days. It is not a mean strength, a cylinder strength or a seven-day result, and it specifies neither thickness nor waterproofing performance.</p>",
            "formulas": [
              {
                "label": "Characteristic strength of M15 concrete",
                "tex": "f_{ck} = 15\\ \\text{N/mm}^2",
                "where": "<p>Characteristic compressive strength of cubes tested at 28 days; 1 N/mm<sup>2</sup> equals 1 MPa.</p>"
              }
            ],
            "points": [
              {
                "html": "Rising damp through porous masonry is interrupted most directly by a continuous, correctly linked damp-proof course that joins the floor barrier.",
                "sources": [
                  {
                    "id": "CAP4-01-00163",
                    "label": "p. 6; topic 1 point 156"
                  }
                ]
              },
              {
                "html": "M15 denotes a characteristic 28-day cube compressive strength of 15 MPa; choosing it for a plinth DPC is a project decision, not a waterproofing rating.",
                "sources": [
                  {
                    "id": "CAP4-04-00108",
                    "label": "p. 19; topic 4 point 108"
                  }
                ]
              },
              {
                "html": "Render running continuously past a plinth DPC lets capillary moisture rise through the render around the barrier, whatever the concrete grade.",
                "sources": [
                  {
                    "id": "CAP4-04-00109",
                    "label": "p. 19; topic 4 point 108"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00163",
                "label": "p. 6; topic 1 point 156"
              },
              {
                "id": "CAP4-04-00108",
                "label": "p. 19; topic 4 point 108"
              },
              {
                "id": "CAP4-04-00109",
                "label": "p. 19; topic 4 point 108"
              }
            ]
          },
          {
            "id": "roof-edges-gutters-and-terraces",
            "title": "Roof edges, gutter linings and tiled terraces",
            "html": "<p>Pitched-roof terms describe where surfaces meet. The <em>eaves</em> form the lower horizontal edge, where the rafters end and a gutter is fixed. The ridge is the high intersection of two slopes, a hip is an external sloping intersection and a valley is an internal intersection that collects water.</p><p>Gutter details give each material its own function. Where a gutter is formed in cement-sand mortar and given a compatible <em>bituminous lining</em>, the mortar shapes and smooths the channel and its falls, while the lining limits water penetration. Simply mixing cement, sand and bitumen together is not a general gutter specification.</p><p>Waterproofing is a property of the whole assembly. A tiled roof terrace can leak even when its tiles absorb little water, because water enters through joints, cracks and interfaces. Continuous, compatible waterproofing at joints and junctions, together with drainage, is required; thicker tiles, stronger bedding mortar or sealing only the tile faces cannot replace it.</p>",
            "points": [
              {
                "html": "Eaves, not eves, name the lower edge of a pitched roof, where the rafters end and a gutter is fixed.",
                "sources": [
                  {
                    "id": "CAP4-05-00082",
                    "label": "pp. 21, 22; topic 5 point 82; topic 5 point 119"
                  }
                ]
              },
              {
                "html": "In a gutter of cement-sand mortar with a bituminous lining, the mortar forms the falls and the lining limits water penetration.",
                "sources": [
                  {
                    "id": "CAP4-01-00051",
                    "label": "p. 3; topic 1 point 48"
                  }
                ]
              },
              {
                "html": "A tiled terrace stays watertight only if the assembly has continuous waterproofing at joints and interfaces; low-absorption tiles alone cannot achieve that.",
                "sources": [
                  {
                    "id": "CAP4-01-00050",
                    "label": "p. 3; topic 1 point 47"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00082",
                "label": "pp. 21, 22; topic 5 point 82; topic 5 point 119"
              },
              {
                "id": "CAP4-01-00051",
                "label": "p. 3; topic 1 point 48"
              },
              {
                "id": "CAP4-01-00050",
                "label": "p. 3; topic 1 point 47"
              }
            ]
          },
          {
            "id": "roof-battens-and-schedules",
            "title": "Roof battens and reading a batten schedule",
            "html": "<p><em>Battens</em> are relatively small strips of sawn timber fixed across rafters to support roof coverings such as tiles. They differ from the main members of a roof frame: principal rafters form the inclined members of a truss, wall plates run along the wall top to receive the rafters, and tie beams join the feet of the principal rafters.</p><p>A batten's size must meet the actual roof schedule. Thickness and breadth are separate dimensions, so each is checked against its own requirement. The capsule's claim that neither dimension may exceed 50 mm is not a verified general definition of a batten.</p>",
            "example": {
              "title": "Worked check: a thickness limit and a fixed breadth",
              "html": "<p>The schedule caps batten thickness at 50 mm and, as a separate requirement, fixes the breadth at 75 mm.</p><ul><li>A section 45 mm thick by 75 mm broad has \\(45 \\le 50\\) and the required breadth, so it complies.</li><li>A 60 mm thickness fails, since \\(60 \\gt 50\\).</li><li>Reversing the figures, 75 mm thick by 45 mm broad, confuses thickness with breadth and meets neither requirement.</li></ul>"
            },
            "points": [
              {
                "html": "Roof battens are narrow sawn timber strips fixed across rafters to carry tiles; their size follows the roof specification, not a universal 50 mm cap.",
                "sources": [
                  {
                    "id": "CAP4-05-00089",
                    "label": "p. 22; topic 5 point 88"
                  }
                ]
              },
              {
                "html": "Under a schedule limiting thickness to 50 mm and fixing a 75 mm breadth, a section 45 mm thick by 75 mm broad meets both requirements.",
                "sources": [
                  {
                    "id": "CAP4-05-00090",
                    "label": "p. 22; topic 5 point 89"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00089",
                "label": "p. 22; topic 5 point 88"
              },
              {
                "id": "CAP4-05-00090",
                "label": "p. 22; topic 5 point 89"
              }
            ]
          },
          {
            "id": "timber-joints",
            "title": "Carpentry joints: tongue and groove, mortise and tenon, half lap",
            "html": "<p>Timber joints are recognised by their geometry:</p><table><thead><tr><th scope='col'>Joint</th><th scope='col'>Geometry</th><th scope='col'>Typical use</th></tr></thead><tbody><tr><th scope='row'>Tongue and groove</th><td>A continuous ridge along one board edge enters a matching continuous channel in the next board</td><td>Floorboards and boarding</td></tr><tr><th scope='row'>Mortise and tenon</th><td>A localised end projection fits a socket</td><td>Frame members joined end to side</td></tr><tr><th scope='row'>Half lap</th><td>Half the thickness is removed from each member, so the faces stay flush</td><td>Framing intersections</td></tr></tbody></table><p>A description such as one part recessed to take a projection on another fits both tongue and groove and mortise and tenon; the continuous edge geometry is what identifies tongue and groove. A flush half lap still needs adequate remaining section, suitable grain direction and fastening, because appearance alone does not prove strength.</p>",
            "points": [
              {
                "html": "Boards joined by a continuous tongue along one edge entering a matching continuous groove in the next use a tongue-and-groove joint.",
                "sources": [
                  {
                    "id": "CAP4-05-00098",
                    "label": "p. 22; topic 5 point 97"
                  }
                ]
              },
              {
                "html": "Cutting away half the thickness of each of two equal crossing members so their faces stay flush forms a half-lap joint, common at framing intersections.",
                "sources": [
                  {
                    "id": "CAP4-05-00100",
                    "label": "p. 22; topic 5 point 99"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00098",
                "label": "p. 22; topic 5 point 97"
              },
              {
                "id": "CAP4-05-00100",
                "label": "p. 22; topic 5 point 99"
              }
            ]
          },
          {
            "id": "stair-treads-and-floor-layers",
            "title": "Counting stair treads and layering a concrete floor",
            "html": "<p>In a stair flight, <em>risers</em> are the vertical rises and <em>treads</em> the horizontal steps. When the flight ends at an upper landing that supplies the final horizontal surface, the landing replaces the last tread. Under that convention the flight has one tread fewer than it has risers. Counting the landing as a tread is a different convention, so state which one is in use.</p><p>A conventional concrete ground floor is built in layers from the bottom up. The ground is prepared and compacted, a sub-base is formed and any specified damp-proofing is provided. The <em>base concrete course</em> is then placed to support the wearing finish, which comes last together with any sealer or polishing treatment. This sequence assumes that layered system over a prepared sub-base; it is not universal for every floor type.</p>",
            "formulas": [
              {
                "label": "Treads in a flight ending at a landing",
                "tex": "N_t = N_r - 1",
                "where": "<p>\\(N_t\\) is the number of treads and \\(N_r\\) the number of risers, when the landing gives the final horizontal surface.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a flight of 12 risers",
              "html": "<p>The upper landing provides the last horizontal surface, so it takes the place of a tread:</p>\\[N_t = 12 - 1 = 11\\]<p>The flight therefore has 11 separate treads plus the landing.</p>"
            },
            "points": [
              {
                "html": "A flight of 12 risers ending at an upper landing has 11 separate treads, because the landing supplies the final horizontal surface.",
                "sources": [
                  {
                    "id": "CAP4-01-00047",
                    "label": "p. 3; topic 1 point 44"
                  }
                ]
              },
              {
                "html": "Over a prepared sub-base, a conventional concrete floor receives its base concrete course first, and the wearing finish is laid on it afterwards.",
                "sources": [
                  {
                    "id": "CAP4-09-00130",
                    "label": "p. 36; topic 9 point 123"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00047",
                "label": "p. 3; topic 1 point 44"
              },
              {
                "id": "CAP4-09-00130",
                "label": "p. 36; topic 9 point 123"
              }
            ]
          },
          {
            "id": "ground-coverage-and-circulation",
            "title": "Planning ratios: ground coverage and circulation area",
            "html": "<p><em>Ground coverage</em> compares a building's footprint with its plot area. The maximum footprint is the permitted coverage fraction times the plot area, and setbacks or other controls may reduce it further. Coverage concerns the footprint only; floor-area ratio, which counts floor area over all storeys, is a different control.</p><p>Planning also allows space for movement inside a building. <em>Horizontal circulation</em> covers corridors and passages, whereas stairs and lifts provide vertical circulation. An allowance for horizontal circulation is taken as a percentage of the plinth area.</p><p>Percentages of this kind are planning assumptions. The capsule's ranges of 60 to 75% for coverage and 10 to 15% for circulation are not verified legal or code requirements, so use the value that actually applies to the site or brief.</p>",
            "formulas": [
              {
                "label": "Maximum footprint from ground coverage",
                "tex": "A_{\\text{fp}} = c \\times A_{\\text{plot}}",
                "where": "<p>\\(c\\) is the permitted coverage fraction and \\(A_{\\text{plot}}\\) the plot area.</p>"
              },
              {
                "label": "Horizontal circulation allowance",
                "tex": "A_{\\text{circ}} = p \\times A_{\\text{plinth}}",
                "where": "<p>\\(p\\) is the assumed fraction for corridors and passages.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: coverage and circulation",
              "html": "<p>An approval permits 60% coverage on a 400 m<sup>2</sup> plot:</p>\\[A_{\\text{fp}} = 0.60 \\times 400 = 240\\ \\text{m}^2\\]<p>A brief allows 12% of a 250 m<sup>2</sup> plinth area for corridors and passages:</p>\\[A_{\\text{circ}} = 0.12 \\times 250 = 30\\ \\text{m}^2\\]<p>Tighter setbacks could still reduce the footprint below 240 m<sup>2</sup>.</p>"
            },
            "points": [
              {
                "html": "With 60% maximum ground coverage on a 400 m<sup>2</sup> plot, the permitted footprint is 240 m<sup>2</sup>, before any tighter setback limit.",
                "sources": [
                  {
                    "id": "CAP4-01-00056",
                    "label": "p. 3; topic 1 point 53"
                  }
                ]
              },
              {
                "html": "Allowing 12% of a 250 m<sup>2</sup> plinth area for corridors and passages gives 30 m<sup>2</sup> of horizontal circulation.",
                "sources": [
                  {
                    "id": "CAP4-01-00090",
                    "label": "p. 4; topic 1 point 88"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00056",
                "label": "p. 3; topic 1 point 53"
              },
              {
                "id": "CAP4-01-00090",
                "label": "p. 4; topic 1 point 88"
              }
            ]
          },
          {
            "id": "clear-openings-and-gas-routes",
            "title": "Code-governed details: door clear openings and concealed gas pipes",
            "html": "<p>Code and accessibility checks compare the <em>clear opening</em> and other usable dimensions with the requirement that applies. A door labelled 750 mm on a drawing may describe the leaf or frame, yet the usable gap measured with the leaf open can be smaller, for example 710 mm.</p><p>The reviewer compares that clear opening with the requirement for the occupancy, accessibility category, jurisdiction and edition. Nominal leaf width, the structural masonry opening and the frame's outside width do not measure clear passage.</p><p>Service routes raise similar questions. A <em>gas pipe</em> in an inaccessible floor void can conceal leaks, so the designer must resolve the governing gas code's rules on routing, pipe material, joint types, protection, ventilation and access. A sleeve does not automatically permit every concealed joint, a pressure test alone does not approve any route, and water-service rules cannot replace the gas code.</p>",
            "points": [
              {
                "html": "For a toilet door drawn as 750 mm but measuring 710 mm clear, compare the actual clear opening with the applicable access requirement, not the label.",
                "sources": [
                  {
                    "id": "CAP4-06-00072",
                    "label": "p. 25; topic 6 point 70"
                  }
                ]
              },
              {
                "html": "A gas pipe in an inaccessible floor void needs the applicable gas-code routing, joint protection and access requirements resolved, rather than a blanket rule.",
                "sources": [
                  {
                    "id": "CAP4-01-00054",
                    "label": "p. 3; topic 1 point 51"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-06-00072",
                "label": "p. 25; topic 6 point 70"
              },
              {
                "id": "CAP4-01-00054",
                "label": "p. 3; topic 1 point 51"
              }
            ]
          },
          {
            "id": "cement-storage-and-paint-blistering",
            "title": "Keeping moisture away: cement storage and paint blistering",
            "html": "<p>Moisture damages both stored materials and applied finishes. Bagged cement must be protected from liquid water and from atmospheric dampness, which cause prehydration and caking. The sound arrangement is a <em>dry, weatherproof store</em> with bags stacked on a raised support and kept clear of damp walls, with older stock used first.</p><p>Open-sided damp stores, bags on bare ground, contact with wet external walls and uncovered platforms exposed to dew or rain each open a moisture pathway.</p><p>In paintwork, <em>blistering</em> produces rounded raised bubbles when moisture or vapour pressure beneath the film helps break adhesion, typically over a damp substrate. Blistering can have other causes, but trapped moisture is the classic one. Distinguish it from chalking (powdering of the surface), sagging (downward flow of wet paint) and brush marking (retained application texture).</p>",
            "points": [
              {
                "html": "Bagged cement is best kept in a dry weatherproof store, with raised stacks protected from damp walls, so that it does not prehydrate and cake.",
                "sources": [
                  {
                    "id": "CAP4-01-00141",
                    "label": "p. 5; topic 1 point 134"
                  }
                ]
              },
              {
                "html": "Blistering, raised bubbles in a paint film, is the defect classically caused by moisture trapped under paint on a damp substrate.",
                "sources": [
                  {
                    "id": "CAP4-01-00151",
                    "label": "p. 6; topic 1 point 144"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00141",
                "label": "p. 5; topic 1 point 134"
              },
              {
                "id": "CAP4-01-00151",
                "label": "p. 6; topic 1 point 144"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Treads in a flight ending at a landing",
            "tex": "N_t = N_r - 1",
            "note": "The landing supplies the final horizontal surface."
          },
          {
            "label": "Maximum footprint from ground coverage",
            "tex": "A_{\\text{fp}} = c \\times A_{\\text{plot}}",
            "note": "Footprint only, not floor area over all storeys."
          },
          {
            "label": "Horizontal circulation allowance",
            "tex": "A_{\\text{circ}} = p \\times A_{\\text{plinth}}",
            "note": "Corridors and passages; stairs and lifts are vertical circulation."
          },
          {
            "label": "Characteristic strength of M15 concrete",
            "tex": "f_{ck} = 15\\ \\text{N/mm}^2",
            "note": "Cube strength at 28 days."
          }
        ],
        "cautions": [
          {
            "id": "caution-raking-bond-weakest",
            "status": "corrected",
            "prompt": "The weakest bond in a building is raking bond",
            "html": "<p>Corrected. The weakest-bond claim is unsupported. Raking bond is used to provide diagonal internal bonding in thick brick walls; strength depends on thickness, loading and workmanship, not on a universal ranking of bonds.</p>",
            "sources": [
              {
                "id": "CAP4-01-00048",
                "label": "p. 3; topic 1 point 45"
              }
            ]
          },
          {
            "id": "caution-waterproof-tiles",
            "status": "review",
            "prompt": "The purpose of waterproof tiles is to prevent water from entering",
            "html": "<p>Qualified. Low-absorption tiles alone do not make a tiled assembly watertight. Joints, cracks and interfaces need continuous compatible waterproofing and drainage.</p>",
            "sources": [
              {
                "id": "CAP4-01-00050",
                "label": "p. 3; topic 1 point 47"
              }
            ]
          },
          {
            "id": "caution-gutter-materials",
            "status": "review",
            "prompt": "Cement, sand and bitumen are used in the rainwater gutter of a roof",
            "html": "<p>Interpreted as a designed system. The listed materials are read as a stipulated gutter detail with separate roles, mortar forming the falls and a compatible bituminous lining limiting penetration, not as an unexplained universal mixture.</p>",
            "sources": [
              {
                "id": "CAP4-01-00051",
                "label": "p. 3; topic 1 point 48"
              }
            ]
          },
          {
            "id": "caution-frieze-versus-corbel",
            "status": "corrected",
            "prompt": "A projecting piece usually provided to support a truss is a frieze",
            "html": "<p>Corrected. The bearing projection that supports a truss is a corbel. A frieze is an architectural band, not a structural bearing seat.</p>",
            "sources": [
              {
                "id": "CAP4-01-00052",
                "label": "p. 3; topic 1 point 49"
              }
            ]
          },
          {
            "id": "caution-gas-pipe-under-floor",
            "status": "review",
            "prompt": "Gas pipe cannot be provided underneath a floor",
            "html": "<p>Not asserted as law. No gas regulation or jurisdiction is supplied, so the categorical prohibition is not treated as a rule. Permissible routing depends on the governing gas code, pipe material, joints, protection and access.</p>",
            "sources": [
              {
                "id": "CAP4-01-00054",
                "label": "p. 3; topic 1 point 51"
              }
            ]
          },
          {
            "id": "caution-plinth-area-plot-ratio",
            "status": "review",
            "prompt": "As per regulations, the plinth area should occupy about 60 to 75% of the plot",
            "html": "<p>Not a verified legal threshold. The universal 60 to 75% range is replaced by a site-specific coverage assumption and is not presented as a current Nepal regulation; the governing approval and setbacks decide the permitted footprint.</p>",
            "sources": [
              {
                "id": "CAP4-01-00056",
                "label": "p. 3; topic 1 point 53"
              }
            ]
          },
          {
            "id": "caution-stone-dressing-timing",
            "status": "review",
            "prompt": "The dressing of stone is done immediately after quarrying",
            "html": "<p>Qualified. Early dressing is easier for stones that harden as they lose quarry moisture. The absolute timing statement is limited to such stones and is not a requirement for every stone under all site conditions.</p>",
            "sources": [
              {
                "id": "CAP4-01-00058",
                "label": "p. 3; topic 1 point 55"
              }
            ]
          },
          {
            "id": "caution-circular-finishing-pillars",
            "status": "review",
            "prompt": "The circular finishing commonly applied in construction is pillars",
            "html": "<p>Interpretation of incomplete wording. The capsule phrase is incomplete; the reviewed item reads it as circular stone dressing for pillar blocks. This is a defensible interpretation, not a claim that the missing original wording has been recovered.</p>",
            "sources": [
              {
                "id": "CAP4-01-00059",
                "label": "p. 3; topic 1 point 56"
              }
            ]
          },
          {
            "id": "caution-horizontal-circulation-range",
            "status": "review",
            "prompt": "Horizontal circulation is 10 to 15% of plinth area",
            "html": "<p>Heuristic only. The 10 to 15% range is treated as a planning rule of thumb, not a compulsory building requirement. The tested skill is applying a stated allowance and separating horizontal from vertical circulation.</p>",
            "sources": [
              {
                "id": "CAP4-01-00090",
                "label": "p. 4; topic 1 point 88"
              }
            ]
          },
          {
            "id": "caution-dry-rubble-skill",
            "status": "review",
            "prompt": "Dry rubble masonry requires the highest level of skill for laying",
            "html": "<p>Unsupported ranking. The source does not establish dry rubble as universally the most skill-demanding masonry type. The item instead tests the structural principle that, without mortar, bearing, interlock and through-bonding come from stone selection and placement.</p>",
            "sources": [
              {
                "id": "CAP4-01-00130",
                "label": "p. 5; topic 1 point 123"
              }
            ]
          },
          {
            "id": "caution-m15-dpc-grade",
            "status": "review",
            "prompt": "M15 grade concrete is used for the DPC at plinth level",
            "html": "<p>Project selection, not a mandate. The capsule gives no governing DPC specification, so M15 is treated as a stated project selection rather than a universally required grade. The current local specification remains open for review.</p>",
            "sources": [
              {
                "id": "CAP4-04-00108",
                "label": "p. 19; topic 4 point 108"
              }
            ]
          },
          {
            "id": "caution-eaves-spelling",
            "status": "corrected",
            "prompt": "The lowest edge of the sloping surface of a roof is called eves",
            "html": "<p>Spelling corrected. The term is eaves, the lower edge of a pitched roof where the rafters end. Two duplicate capsule definitions of this roof edge are combined in the reviewed item.</p>",
            "sources": [
              {
                "id": "CAP4-05-00082",
                "label": "pp. 21, 22; topic 5 point 82; topic 5 point 119"
              }
            ]
          },
          {
            "id": "caution-batten-both-dimensions",
            "status": "review",
            "prompt": "A batten is timber whose thickness and breadth should not exceed 50 mm",
            "html": "<p>Not a universal classification. The claim that neither dimension of a batten may exceed 50 mm is not accepted as a general timber definition, and its trade-standard provenance remains unidentified. Batten sizes must follow the actual roof specification.</p>",
            "sources": [
              {
                "id": "CAP4-05-00089",
                "label": "p. 22; topic 5 point 88"
              }
            ]
          },
          {
            "id": "caution-batten-maximum-thickness",
            "status": "review",
            "prompt": "The maximum thickness of a timber batten is 50 mm",
            "html": "<p>Schedule condition only. The 50 mm limit is used only as an expressly stipulated schedule requirement. The standard behind the capsule figure is not identified, so it is not treated as a universal maximum.</p>",
            "sources": [
              {
                "id": "CAP4-05-00090",
                "label": "p. 22; topic 5 point 89"
              }
            ]
          },
          {
            "id": "caution-rebated-joints-in-arches",
            "status": "review",
            "prompt": "Rebated joints are used for stone masonry in arches",
            "html": "<p>Not a mandatory rule. The item is recast to test rebated-joint geometry. Rebates can resist relative displacement, but the blanket claim that arch masonry uses them is not treated as a design requirement.</p>",
            "sources": [
              {
                "id": "CAP4-05-00092",
                "label": "p. 22; topic 5 point 91"
              }
            ]
          },
          {
            "id": "caution-tongue-and-groove-description",
            "status": "review",
            "prompt": "A joint where one part is recessed to fit a projection on another is tongue and groove",
            "html": "<p>Clarified. The capsule description is vague enough to fit a mortise and tenon as well. Tongue and groove is identified by a continuous tongue along one board edge entering a matching continuous groove.</p>",
            "sources": [
              {
                "id": "CAP4-05-00098",
                "label": "p. 22; topic 5 point 97"
              }
            ]
          },
          {
            "id": "caution-half-lap-stray-fragment",
            "status": "review",
            "prompt": "Half lap joints are commonly used in frame, printed with the fragment 0.85bD",
            "html": "<p>Extraction artefact. The fragment 0.85bD printed after this point belongs to the next reinforcement formula, not to timber joints. The joint fact itself stands: half-lap joints are common at framing intersections.</p>",
            "sources": [
              {
                "id": "CAP4-05-00100",
                "label": "p. 22; topic 5 point 99"
              }
            ]
          },
          {
            "id": "caution-toilet-door-width",
            "status": "review",
            "prompt": "The minimum width of a toilet door is 750 mm",
            "html": "<p>Unverified dimension. The capsule supplies no clause establishing a universal 750 mm toilet-door minimum. Applicability depends on occupancy, accessibility requirements, jurisdiction and edition, and the check concerns the actual clear opening.</p>",
            "sources": [
              {
                "id": "CAP4-06-00072",
                "label": "p. 25; topic 6 point 70"
              }
            ]
          },
          {
            "id": "caution-flooring-first-step",
            "status": "review",
            "prompt": "The first step in flooring is the base coat",
            "html": "<p>Assumed system stated. The sequence applies to a conventional concrete floor over a prepared sub-base, where base concrete precedes the wearing finish. Ground preparation comes earlier, and the sequence is not universal for every floor type.</p>",
            "sources": [
              {
                "id": "CAP4-09-00130",
                "label": "p. 36; topic 9 point 123"
              }
            ]
          }
        ],
        "gaps": [
          "Brick bond patterns other than raking bond, and stone-masonry classes beyond dry rubble, are not tested by these capsule items.",
          "Plastering and painting procedures, coat sequences and curing receive limited coverage, mainly through background preparation and blistering.",
          "Concrete roofing systems and detailed building by-law provisions are not covered; the planning percentages here are stated assumptions rather than verified rules."
        ]
      },
      "ACiE0104": {
        "code": "ACiE0104",
        "questionCount": 24,
        "format": 2,
        "summary": "<p>Geometric properties of sections describe where the area or mass of a shape is centred and how that area is spread about an axis. The capsule questions test centroids of triangles, trapezoids and semicircles, centres of gravity of cones and hemispheres, how pyramids and prisms are recognised, second moments of rectangles, triangles, circles, annuli and semicircles, the parallel- and perpendicular-axis theorems, the section modulus of a hollow circle and the radius of gyration.</p>",
        "blocks": [
          {
            "id": "centroids-of-plane-areas",
            "title": "Centroids of plane areas: triangle, trapezoid and semicircle",
            "html": "<p>The <em>centroid</em> of a plane area is its area-weighted mean position. For a homogeneous lamina of uniform thickness in a uniform gravitational field, every element's weight is proportional to its area, so the centre of gravity coincides with the centroid.</p><p>This holds for every uniform triangle, right-angled or not. The centroid lies where the three medians meet, one third of the height from each side, measured perpendicular to that side. In a right triangle the midpoint of the hypotenuse is the <em>circumcentre</em>, a different point.</p><p>Where the width varies linearly, strip weighting gives standard results. A trapezoid's centroid lies nearer its wider parallel side. A semicircle's centroid lies on its axis of symmetry about 0.424R from the flat diameter, closer to that edge than half the radius, because more of the area sits near it.</p>",
            "formulas": [
              {
                "label": "Triangle centroid from a side",
                "tex": "\\bar{y} = \\dfrac{h}{3}",
                "where": "<p>\\(h\\) is the height measured perpendicular to that side.</p>"
              },
              {
                "label": "Trapezoid centroid from side b",
                "tex": "\\bar{y} = \\dfrac{h\\,(b + 2a)}{3\\,(a + b)}",
                "where": "<p>\\(b\\) and \\(a\\) are the parallel sides and \\(h\\) the height between them.</p>"
              },
              {
                "label": "Semicircular area centroid from the diameter",
                "tex": "\\bar{y} = \\dfrac{4R}{3\\pi} = \\dfrac{2d}{3\\pi}"
              }
            ],
            "example": {
              "title": "Worked examples: a trapezoid and a semicircle",
              "html": "<p>Trapezoid with bottom side b = 6 m, top side a = 3 m and height h = 4 m:</p>\\[\\begin{aligned}\\bar{y} &amp;= \\dfrac{4\\,(6 + 2 \\times 3)}{3\\,(3 + 6)} = \\dfrac{48}{27} \\\\ &amp;= \\dfrac{16}{9} = 1.778\\ \\text{m}\\end{aligned}\\]<p>That is below mid-height, as it must be with the wider side at the bottom.</p><p>Semicircle of diameter 300 mm:</p>\\[\\bar{y} = \\dfrac{2 \\times 300}{3\\pi} = 63.66\\ \\text{mm}\\]<p>measured from the diameter towards the curved edge.</p>"
            },
            "points": [
              {
                "html": "The centre of gravity of a uniform right-triangular lamina and its area centroid coincide at the intersection of the medians; the hypotenuse midpoint is the circumcentre.",
                "sources": [
                  {
                    "id": "CAP4-01-00060",
                    "label": "p. 3; topic 1 point 57"
                  }
                ]
              },
              {
                "html": "A trapezoid with parallel sides of 6 m at the bottom and 3 m at the top, 4 m apart, has its centroid 1.778 m above the bottom side.",
                "sources": [
                  {
                    "id": "CAP4-01-00082",
                    "label": "p. 4; topic 1 point 80"
                  }
                ]
              },
              {
                "html": "A semicircular area of 300 mm diameter has its centroid 63.66 mm from the flat diameter, from \\(2d/(3\\pi)\\).",
                "sources": [
                  {
                    "id": "CAP4-01-00134",
                    "label": "p. 5; topic 1 point 128"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00060",
                "label": "p. 3; topic 1 point 57"
              },
              {
                "id": "CAP4-01-00082",
                "label": "p. 4; topic 1 point 80"
              },
              {
                "id": "CAP4-01-00134",
                "label": "p. 5; topic 1 point 128"
              }
            ]
          },
          {
            "id": "centres-of-gravity-of-solids",
            "title": "Centres of gravity of solids: cones and hemispheres",
            "html": "<p>For a solid body the weighting is by volume, or by mass for a uniform material, and the result depends on whether the body is solid or a thin shell. Always state the reference end: a centre of gravity h/4 above the base is 3h/4 below the apex.</p><table><thead><tr><th scope='col'>Body</th><th scope='col'>Slice weight varies as</th><th scope='col'>From the base</th></tr></thead><tbody><tr><th scope='row'>Solid right circular cone</th><td>Slice area, \\((1 - z/h)^2\\)</td><td>h/4</td></tr><tr><th scope='row'>Thin uniform conical shell, no base plate</th><td>Circumference, \\(1 - z/h\\)</td><td>h/3</td></tr><tr><th scope='row'>Solid hemisphere, radius r</th><td>Slice area, \\(r^2 - z^2\\)</td><td>3r/8</td></tr><tr><th scope='row'>Thin hemispherical shell</th><td>Zone area, constant per unit height</td><td>r/2</td></tr></tbody></table><p>A solid cone's material is concentrated near its broad base, which pulls the centre of gravity down to a quarter of the height. A shell's material follows the circumference and sits higher, at a third. A base plate or a varying wall thickness changes both results, and 4r/(3π) belongs to a semicircular plane area, never to a hemisphere.</p>",
            "formulas": [
              {
                "label": "Centre of gravity along the axis",
                "tex": "\\bar{z} = \\dfrac{\\int z\\, A(z)\\, dz}{\\int A(z)\\, dz}",
                "where": "<p>\\(A(z)\\) is the slice area, or the strip circumference for a shell, at height \\(z\\) above the base.</p>"
              }
            ],
            "example": {
              "title": "Worked reasoning: why the solid cone gives h/4",
              "html": "<p>Write \\(u = z/h\\). The slice area of a solid cone is proportional to \\((1 - u)^2\\), so</p>\\[\\begin{aligned}\\bar{z} &amp;= h\\,\\dfrac{\\int_0^1 u\\,(1 - u)^2\\,du}{\\int_0^1 (1 - u)^2\\,du} \\\\ &amp;= h \\times \\dfrac{1/12}{1/3} = \\dfrac{h}{4}\\end{aligned}\\]<p>For the thin shell the weight follows \\(1 - u\\), giving \\(h \\times (1/6)/(1/2) = h/3\\). Slices of area \\(\\pi(r^2 - z^2)\\) give 3r/8 for the solid hemisphere.</p>"
            },
            "points": [
              {
                "html": "A homogeneous solid right circular cone has its centre of gravity on the axis at \\(h/4\\) above the base plane, or \\(3h/4\\) below the apex.",
                "sources": [
                  {
                    "id": "CAP4-01-00066",
                    "label": "p. 3; topic 1 point 63"
                  }
                ]
              },
              {
                "html": "A thin uniform conical shell without a base plate has its centre of gravity at \\(h/3\\) from the base, because its weight follows the circumference.",
                "sources": [
                  {
                    "id": "CAP4-01-00067",
                    "label": "p. 3; topic 1 point 63"
                  }
                ]
              },
              {
                "html": "A homogeneous solid hemisphere has its centre of gravity \\(3r/8\\) from the flat base along the symmetry axis; a thin hemispherical shell gives \\(r/2\\).",
                "sources": [
                  {
                    "id": "CAP4-01-00070",
                    "label": "p. 3; topic 1 point 66"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00066",
                "label": "p. 3; topic 1 point 63"
              },
              {
                "id": "CAP4-01-00067",
                "label": "p. 3; topic 1 point 63"
              },
              {
                "id": "CAP4-01-00070",
                "label": "p. 3; topic 1 point 66"
              }
            ]
          },
          {
            "id": "pyramids-and-prisms",
            "title": "Recognising solids: pyramids and prisms",
            "html": "<p>Solids are named by how their faces are arranged, not merely by the shapes of the faces.</p><ul><li>A <em>pyramid</em> has one polygonal base and triangular side faces that all meet at a single common apex. With a triangular base it is a triangular pyramid. Call it a regular tetrahedron only if all its faces and edges satisfy the regularity conditions.</li><li>A <em>prism</em> has two congruent, parallel end faces joined by lateral faces that are parallelograms. With triangular ends and rectangular lateral faces it is a right triangular prism.</li></ul><p>Two traps follow. A pyramid's side faces converge to a point, the apex, not merely towards an axis. And a solid built only of congruent triangles is not thereby a prism: a regular octahedron consists entirely of triangles, whereas a prism's lateral faces are parallelograms.</p><p>A truncated pyramid or cone has lost its apex, so its side faces no longer meet at a point.</p>",
            "points": [
              {
                "html": "A solid with a triangular base and three triangular side faces meeting at one apex is a triangular pyramid; it is a regular tetrahedron only if every face and edge is regular.",
                "sources": [
                  {
                    "id": "CAP4-01-00071",
                    "label": "p. 3; topic 1 point 67"
                  }
                ]
              },
              {
                "html": "Two congruent parallel triangular ends linked by three rectangular faces make a right triangular prism; the arrangement of faces, not the use of triangles, defines a prism.",
                "sources": [
                  {
                    "id": "CAP4-01-00072",
                    "label": "p. 3; topic 1 point 68"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00071",
                "label": "p. 3; topic 1 point 67"
              },
              {
                "id": "CAP4-01-00072",
                "label": "p. 3; topic 1 point 68"
              }
            ]
          },
          {
            "id": "triangle-second-moments",
            "title": "Second moments of a triangle and the parallel-axis theorem",
            "html": "<p>The <em>second moment of area</em> measures how widely an area is spread about an axis, and the dimension that is cubed is always the one perpendicular to that axis. For a triangle of base b and height h, horizontal strips of width \\(b(1 - y/h)\\) integrated upward from the base give \\(bh^3/12\\).</p><p>The <em>parallel-axis theorem</em> links any axis to the parallel centroidal axis. The triangle's centroid lies h/3 above the base and 2h/3 below the apex, so the centroidal moment is \\(bh^3/36\\) and the moment about the line through the apex parallel to the base is \\(bh^3/4\\).</p><p>The centroidal value is the smallest in any family of parallel axes, because moving the axis away from the centroid only ever adds \\(Ae^2\\). The base value is three times the centroidal one.</p>",
            "formulas": [
              {
                "label": "Definition of the second moment of area",
                "tex": "I = \\int y^2\\, dA",
                "where": "<p>\\(y\\) is the distance of the element \\(dA\\) from the axis.</p>"
              },
              {
                "label": "Parallel-axis theorem",
                "tex": "I = I_G + A e^2",
                "where": "<p>\\(I_G\\) is about the parallel centroidal axis and \\(e\\) is the distance between the two axes.</p>"
              },
              {
                "label": "Triangle: base, centroid and apex line",
                "tex": "\\begin{aligned} I_{\\text{base}} &= \\dfrac{bh^3}{12} \\\\ I_G &= \\dfrac{bh^3}{36} \\\\ I_{\\text{apex}} &= \\dfrac{bh^3}{4} \\end{aligned}"
              }
            ],
            "example": {
              "title": "Worked reasoning: moving the axis twice",
              "html": "<p>Remove the transfer term to reach the centroid, h/3 above the base, then add one for the apex line, 2h/3 from the centroid:</p>\\[\\begin{aligned}I_G &amp;= \\dfrac{bh^3}{12} - \\dfrac{bh}{2}\\left(\\dfrac{h}{3}\\right)^2 = \\dfrac{bh^3}{36} \\\\ I_{\\text{apex}} &amp;= \\dfrac{bh^3}{36} + \\dfrac{bh}{2}\\left(\\dfrac{2h}{3}\\right)^2 = \\dfrac{bh^3}{4}\\end{aligned}\\]<p>The ratio of the apex-line moment to the centroidal moment is \\((1/4)/(1/36) = 9\\).</p>"
            },
            "points": [
              {
                "html": "About its base line, a triangle of base b and height h has second moment \\(bh^3/12\\); the cubed dimension is the one perpendicular to the axis.",
                "sources": [
                  {
                    "id": "CAP4-01-00061",
                    "label": "p. 3; topic 1 point 58"
                  }
                ]
              },
              {
                "html": "A triangle of base b and height d has second moment \\(bd^3/36\\) about the centroidal axis parallel to the base.",
                "sources": [
                  {
                    "id": "CAP4-01-00078",
                    "label": "pp. 3, 4; topic 1 point 73"
                  }
                ]
              },
              {
                "html": "A triangle's second moment about the line through its apex parallel to the base, \\(bh^3/4\\), is 9 times its centroidal value \\(bh^3/36\\).",
                "sources": [
                  {
                    "id": "CAP4-01-00075",
                    "label": "p. 3; topic 1 point 70"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00061",
                "label": "p. 3; topic 1 point 58"
              },
              {
                "id": "CAP4-01-00078",
                "label": "pp. 3, 4; topic 1 point 73"
              },
              {
                "id": "CAP4-01-00075",
                "label": "p. 3; topic 1 point 70"
              }
            ]
          },
          {
            "id": "rectangle-second-moments",
            "title": "Rectangles: moments about the base and with a concentric hole",
            "html": "<p>For a rectangle of width b and depth d, the second moment about its horizontal centroidal axis is \\(bd^3/12\\). Moving the axis to the bottom edge adds the transfer term \\(bd\\,(d/2)^2 = bd^3/4\\), giving \\(bd^3/3\\). Leaving out the shift misses the contribution of the offset area, and exchanging the dimensions to \\(db^3/3\\) would describe a vertical edge instead.</p><p>Second moments about the same axis can be added and subtracted. For an outer rectangle B wide and D deep with a centred opening b wide and d deep, the opening's moment is subtracted, never added.</p><p>Concentricity is what makes this simple form valid. With an eccentric hole, locate the combined centroid first and transfer each part with the parallel-axis theorem.</p>",
            "formulas": [
              {
                "label": "Rectangle about its centroidal axis",
                "tex": "I_G = \\dfrac{bd^3}{12}"
              },
              {
                "label": "Rectangle about its base edge",
                "tex": "I_{\\text{base}} = \\dfrac{bd^3}{3}"
              },
              {
                "label": "Concentric hollow rectangle",
                "tex": "I = \\dfrac{BD^3 - bd^3}{12}",
                "where": "<p>about the common horizontal centroidal axis, with the opening b wide and d deep.</p>"
              }
            ],
            "example": {
              "title": "Worked reasoning: shifting the axis to the base",
              "html": "\\[\\begin{aligned}I_{\\text{base}} &amp;= \\dfrac{bd^3}{12} + bd\\left(\\dfrac{d}{2}\\right)^2 \\\\ &amp;= \\dfrac{bd^3}{12} + \\dfrac{3bd^3}{12} = \\dfrac{bd^3}{3}\\end{aligned}\\]<p>For a rectangle 200 mm wide and 300 mm deep, \\(I_G = 4.5 \\times 10^8\\ \\text{mm}^4\\) and the base value is \\(1.8 \\times 10^9\\ \\text{mm}^4\\), four times larger.</p>"
            },
            "points": [
              {
                "html": "About its bottom horizontal edge, a rectangle of width b and depth d has second moment \\(bd^3/3\\): the centroidal \\(bd^3/12\\) plus the transfer term \\(bd^3/4\\).",
                "sources": [
                  {
                    "id": "CAP4-01-00065",
                    "label": "pp. 3, 4; topic 1 point 62; topic 1 point 78"
                  }
                ]
              },
              {
                "html": "A rectangle B wide and D deep with a concentric b by d opening has \\((BD^3 - bd^3)/12\\) about the common horizontal centroidal axis.",
                "sources": [
                  {
                    "id": "CAP4-01-00079",
                    "label": "p. 4; topic 1 point 75"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00065",
                "label": "pp. 3, 4; topic 1 point 62; topic 1 point 78"
              },
              {
                "id": "CAP4-01-00079",
                "label": "p. 4; topic 1 point 75"
              }
            ]
          },
          {
            "id": "circular-diametral-and-polar-moments",
            "title": "Circular areas: diametral, polar and annular moments",
            "html": "<p>For a full circle of diameter d, the second moment about any diameter in its plane is \\(\\pi d^4/64\\), which is \\(\\pi R^4/4\\) in radius form.</p><p>The <em>polar second moment</em> is taken about the axis perpendicular to the section at its centre. By the perpendicular-axis theorem it is the sum of two perpendicular diametral moments, so it is twice the diametral value. Both are area properties with units of length to the fourth power, not mass moments of inertia.</p><p>An <em>annulus</em>, or hollow circle, is handled by subtraction about the common axis. Combining the radius form with the diameter denominator is a frequent slip, and so is quoting the polar value for a diametral one.</p><p>Family check: semicircle about its diameter \\(\\pi d^4/128\\), full circle about a diameter \\(\\pi d^4/64\\), polar \\(\\pi d^4/32\\). An expression in \\(d^3\\) is a section modulus, not a second moment.</p>",
            "formulas": [
              {
                "label": "Circle about a diameter",
                "tex": "I_d = \\dfrac{\\pi d^4}{64} = \\dfrac{\\pi R^4}{4}"
              },
              {
                "label": "Polar second moment of a circle",
                "tex": "J = 2 I_d = \\dfrac{\\pi d^4}{32}"
              },
              {
                "label": "Annulus about a diameter",
                "tex": "I = \\dfrac{\\pi\\,(R^4 - r^4)}{4}",
                "where": "<p>With outer and inner diameters D and d the same quantity is \\(\\pi(D^4 - d^4)/64\\).</p>"
              }
            ],
            "example": {
              "title": "Worked examples: a solid circle and an annulus",
              "html": "<p>For a solid circle of 100 mm diameter:</p>\\[I_d = \\dfrac{\\pi \\times 100^4}{64} = 4.909 \\times 10^6\\ \\text{mm}^4\\]<p>and \\(J = 9.817 \\times 10^6\\ \\text{mm}^4\\). For an annulus with R = 50 mm and r = 40 mm:</p>\\[\\begin{aligned}I &amp;= \\dfrac{\\pi\\,(50^4 - 40^4)}{4} \\\\ &amp;= 2.898 \\times 10^6\\ \\text{mm}^4\\end{aligned}\\]<p>The diameter form \\(\\pi(100^4 - 80^4)/64\\) gives the same value.</p>"
            },
            "points": [
              {
                "html": "A full circle of diameter d has second moment \\(\\pi d^4/64\\) about any diameter lying in its plane; the polar value doubles it.",
                "sources": [
                  {
                    "id": "CAP4-01-00077",
                    "label": "p. 3; topic 1 point 72"
                  }
                ]
              },
              {
                "html": "The polar second moment of a solid circular section about the axis normal to it through its centre is \\(\\pi d^4/32\\), the sum of two diametral moments.",
                "sources": [
                  {
                    "id": "CAP4-01-00150",
                    "label": "p. 6; topic 1 point 143"
                  }
                ]
              },
              {
                "html": "An annulus with outer radius R and inner radius r has \\(\\pi(R^4 - r^4)/4\\) about a diameter; written with diameters the denominator becomes 64.",
                "sources": [
                  {
                    "id": "CAP4-01-00064",
                    "label": "p. 3; topic 1 point 61"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00077",
                "label": "p. 3; topic 1 point 72"
              },
              {
                "id": "CAP4-01-00150",
                "label": "p. 6; topic 1 point 143"
              },
              {
                "id": "CAP4-01-00064",
                "label": "p. 3; topic 1 point 61"
              }
            ]
          },
          {
            "id": "semicircle-area-moment-versus-hemisphere",
            "title": "Semicircles: area moment versus solid-hemisphere mass inertia",
            "html": "<p>A semicircular area shares its flat diameter with the full circle, so it contributes exactly half of the circle's second moment about that line: half of \\(\\pi R^4/4\\) is \\(\\pi R^4/8\\). Substituting \\(R = d/2\\) introduces a factor of 16 and gives the equivalent \\(\\pi d^4/128\\). The units, length to the fourth power, mark it as a property of a plane area.</p><p>A <em>solid hemisphere</em> is a three-dimensional body, and its rotational inertia is a mass property with units of mass times length squared. Halving a sphere through its centre halves both the mass and the inertia about a diameter in the cut plane, so the sphere's relation carries over to the hemisphere about a diameter in its flat base.</p><p>Dimensions settle which is which. \\(\\pi R^4/8\\) contains no mass, so it cannot be a mass moment of inertia, and it is neither a volume nor a first moment of area, which both have units of length cubed.</p>",
            "formulas": [
              {
                "label": "Semicircle about its flat diameter",
                "tex": "I = \\dfrac{\\pi R^4}{8} = \\dfrac{\\pi d^4}{128}"
              },
              {
                "label": "Solid hemisphere about a base diameter",
                "tex": "I_m = \\dfrac{2}{5}\\, M R^2"
              }
            ],
            "example": {
              "title": "Worked example: a 10 kg solid hemisphere",
              "html": "<p>For M = 10 kg and R = 0.20 m, about a diameter in the flat base:</p>\\[I_m = \\dfrac{2}{5} \\times 10 \\times 0.20^2 = 0.16\\ \\text{kg m}^2\\]<p>The result carries kilograms, which a plane-area moment such as \\(\\pi R^4/8\\) never does.</p>"
            },
            "points": [
              {
                "html": "A semicircular area of radius R has second moment \\(\\pi R^4/8 = \\pi d^4/128\\) about its flat diametric edge, half the full circle's value.",
                "sources": [
                  {
                    "id": "CAP4-01-00076",
                    "label": "pp. 3, 4; topic 1 point 71; topic 1 point 74"
                  }
                ]
              },
              {
                "html": "\\(\\pi R^4/8\\) is the second moment of a semicircular area about its flat diameter, in units of length to the fourth power, not a hemisphere's mass inertia.",
                "sources": [
                  {
                    "id": "CAP4-01-00148",
                    "label": "p. 6; topic 1 point 141"
                  }
                ]
              },
              {
                "html": "A 10 kg solid hemisphere with a 0.20 m radius has mass inertia \\(2MR^2/5 = 0.16\\) kg m² about a diameter lying in its flat base.",
                "sources": [
                  {
                    "id": "CAP4-01-00149",
                    "label": "p. 6; topic 1 point 141"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00076",
                "label": "pp. 3, 4; topic 1 point 71; topic 1 point 74"
              },
              {
                "id": "CAP4-01-00148",
                "label": "p. 6; topic 1 point 141"
              },
              {
                "id": "CAP4-01-00149",
                "label": "p. 6; topic 1 point 141"
              }
            ]
          },
          {
            "id": "perpendicular-axis-and-section-modulus",
            "title": "Perpendicular-axis theorem and the elastic section modulus",
            "html": "<p>The <em>perpendicular-axis theorem</em> for a plane area states that the polar second moment about an axis z normal to the plane equals the sum of the moments about two perpendicular in-plane axes x and y through the same point O. It follows from \\(r^2 = x^2 + y^2\\) for every element, so it holds for any plane area, not only circles. Its mass form applies to planar laminas, not to thick solids.</p><p>The <em>elastic section modulus</em> converts a second moment into bending resistance by dividing by the distance from the neutral axis to the extreme fibre. For a concentric hollow circle bent about a centroidal diameter, that distance is D/2.</p><p>Two slips to avoid: dividing by D instead of D/2 gives a denominator of 64D, and dividing the polar moment instead gives the torsional modulus \\(\\pi(D^4 - d^4)/(16D)\\).</p>",
            "formulas": [
              {
                "label": "Perpendicular-axis theorem",
                "tex": "J_O = I_x + I_y"
              },
              {
                "label": "Elastic section modulus",
                "tex": "Z = \\dfrac{I}{y_{\\text{max}}}"
              },
              {
                "label": "Hollow circular section about a diameter",
                "tex": "Z = \\dfrac{\\pi\\,(D^4 - d^4)}{32D}"
              }
            ],
            "example": {
              "title": "Worked example: a tube of 100 mm outer and 80 mm inner diameter",
              "html": "\\[\\begin{aligned}I &amp;= \\dfrac{\\pi\\,(100^4 - 80^4)}{64} \\\\ &amp;= 2.898 \\times 10^6\\ \\text{mm}^4 \\\\ Z &amp;= \\dfrac{I}{50} = 5.796 \\times 10^4\\ \\text{mm}^3\\end{aligned}\\]<p>The same modulus follows directly from \\(\\pi(D^4 - d^4)/(32D)\\) with D = 100 mm.</p>"
            },
            "points": [
              {
                "html": "For a plane area with perpendicular in-plane axes x and y meeting at O, the valid perpendicular-axis relation is \\(J_O = I_x + I_y\\), for any shape.",
                "sources": [
                  {
                    "id": "CAP4-01-00069",
                    "label": "p. 3; topic 1 point 65"
                  }
                ]
              },
              {
                "html": "A concentric hollow circular section has elastic section modulus \\(Z = \\frac{\\pi(D^4 - d^4)}{32D}\\) about a centroidal diameter: I divided by D/2.",
                "sources": [
                  {
                    "id": "CAP4-01-00063",
                    "label": "pp. 3, 4; topic 1 point 60; topic 1 point 79"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00069",
                "label": "p. 3; topic 1 point 65"
              },
              {
                "id": "CAP4-01-00063",
                "label": "pp. 3, 4; topic 1 point 60; topic 1 point 79"
              }
            ]
          },
          {
            "id": "radius-of-gyration",
            "title": "Radius of gyration: definition and proportional reasoning",
            "html": "<p>The <em>radius of gyration</em> k is the distance at which the whole area could be concentrated to give the same second moment about a stated axis. Note that I/A equals \\(k^2\\), not k.</p><p>Proportional reasoning holds one quantity fixed:</p><ul><li>At fixed area, k varies as \\(\\sqrt{I}\\): four times the second moment gives \\(\\sqrt{4} = 2\\) times the radius of gyration, not four times.</li><li>At fixed second moment, k varies as \\(1/\\sqrt{A}\\): four times the area gives half the radius of gyration.</li></ul><p>Because it measures how effectively an area is spread from an axis, the radius of gyration is the property used when the slenderness of compression members is assessed. It always refers to a specified axis, so a section generally has different values about different axes.</p>",
            "formulas": [
              {
                "label": "Radius of gyration",
                "tex": "k = \\sqrt{\\dfrac{I}{A}}",
                "where": "<p>equivalently \\(I = Ak^2\\).</p>"
              },
              {
                "label": "Comparing two sections",
                "tex": "\\dfrac{k_2}{k_1} = \\sqrt{\\dfrac{I_2}{I_1}\\cdot\\dfrac{A_1}{A_2}}"
              }
            ],
            "example": {
              "title": "Worked example: radius of gyration from I and A",
              "html": "<p>An area of 2,500 mm² with a second moment of 1,000,000 mm⁴ about the stated axis gives</p>\\[k = \\sqrt{\\dfrac{1\\,000\\,000}{2500}} = \\sqrt{400} = 20\\ \\text{mm}\\]<p>Quoting I/A = 400 mm² as the radius confuses \\(k^2\\) with k.</p>"
            },
            "points": [
              {
                "html": "An area of 2,500 mm² with second moment 1,000,000 mm⁴ about an axis has radius of gyration \\(\\sqrt{400} = 20\\) mm about that axis.",
                "sources": [
                  {
                    "id": "CAP4-01-00081",
                    "label": "p. 4; topic 1 point 77"
                  }
                ]
              },
              {
                "html": "At equal area, a section with four times the second moment has a radius of gyration twice the first, since k varies as \\(\\sqrt{I}\\).",
                "sources": [
                  {
                    "id": "CAP4-01-00073",
                    "label": "p. 3; topic 1 point 69"
                  }
                ]
              },
              {
                "html": "At equal second moment, a section with four times the area has one-half the radius of gyration, since k varies as \\(1/\\sqrt{A}\\).",
                "sources": [
                  {
                    "id": "CAP4-01-00074",
                    "label": "p. 3; topic 1 point 69"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00081",
                "label": "p. 4; topic 1 point 77"
              },
              {
                "id": "CAP4-01-00073",
                "label": "p. 3; topic 1 point 69"
              },
              {
                "id": "CAP4-01-00074",
                "label": "p. 3; topic 1 point 69"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Parallel-axis theorem",
            "tex": "I = I_G + A e^2"
          },
          {
            "label": "Perpendicular-axis theorem, plane area",
            "tex": "J_O = I_x + I_y"
          },
          {
            "label": "Radius of gyration",
            "tex": "k = \\sqrt{\\dfrac{I}{A}}"
          },
          {
            "label": "Elastic section modulus",
            "tex": "Z = \\dfrac{I}{y_{\\text{max}}}"
          },
          {
            "label": "Rectangle, centroidal and base axes",
            "tex": "I_G = \\dfrac{bd^3}{12}, \\quad I_{\\text{base}} = \\dfrac{bd^3}{3}"
          },
          {
            "label": "Concentric hollow rectangle",
            "tex": "I = \\dfrac{BD^3 - bd^3}{12}"
          },
          {
            "label": "Triangle: base, centroid and apex line",
            "tex": "\\begin{aligned} I_{\\text{base}} &= \\dfrac{bh^3}{12} \\\\ I_G &= \\dfrac{bh^3}{36} \\\\ I_{\\text{apex}} &= \\dfrac{bh^3}{4} \\end{aligned}"
          },
          {
            "label": "Circle about a diameter",
            "tex": "I_d = \\dfrac{\\pi d^4}{64}"
          },
          {
            "label": "Circle, polar second moment",
            "tex": "J = \\dfrac{\\pi d^4}{32}"
          },
          {
            "label": "Annulus about a diameter",
            "tex": "I = \\dfrac{\\pi\\,(R^4 - r^4)}{4}"
          },
          {
            "label": "Semicircle about its flat diameter",
            "tex": "I = \\dfrac{\\pi R^4}{8} = \\dfrac{\\pi d^4}{128}"
          },
          {
            "label": "Hollow circular section modulus",
            "tex": "Z = \\dfrac{\\pi\\,(D^4 - d^4)}{32D}"
          },
          {
            "label": "Trapezoid centroid from side b",
            "tex": "\\bar{y} = \\dfrac{h\\,(b + 2a)}{3\\,(a + b)}"
          },
          {
            "label": "Semicircular area centroid",
            "tex": "\\bar{y} = \\dfrac{4R}{3\\pi}",
            "note": "Measured from the flat diameter."
          },
          {
            "label": "Solid cone and solid hemisphere",
            "tex": "\\bar{z}_{\\text{cone}} = \\dfrac{h}{4}, \\quad \\bar{z}_{\\text{hemi}} = \\dfrac{3r}{8}",
            "note": "From the base; a thin conical shell gives h/3 and a thin hemispherical shell r/2."
          },
          {
            "label": "Solid hemisphere, mass inertia about a base diameter",
            "tex": "I_m = \\dfrac{2}{5}\\, M R^2"
          }
        ],
        "cautions": [
          {
            "id": "caution-right-triangle-centroid",
            "status": "corrected",
            "prompt": "The CG and geometric centre do not coincide in a right-angled triangle",
            "html": "<p>The capsule point is wrong for a uniform lamina. In uniform gravity the centre of gravity and the area centroid of any homogeneous triangle, right-angled or not, coincide at the intersection of the medians. The midpoint of the hypotenuse is the circumcentre of a right triangle, a different point from the centroid.</p>",
            "sources": [
              {
                "id": "CAP4-01-00060",
                "label": "p. 3; topic 1 point 57"
              }
            ]
          },
          {
            "id": "caution-annulus-moment-denominator",
            "status": "review",
            "prompt": "MOI of a hollow circular section in terms of outer and inner radii",
            "html": "<p>The extracted capsule point dropped the denominator that the full page retains. Written with radii about a diameter, the annulus moment is \\(\\pi(R^4 - r^4)/4\\); written with diameters, the denominator becomes 64. Pairing the radius form with the diameter denominator gives a value 16 times too small.</p>",
            "sources": [
              {
                "id": "CAP4-01-00064",
                "label": "p. 3; topic 1 point 61"
              }
            ]
          },
          {
            "id": "caution-hollow-cone-centroid",
            "status": "review",
            "prompt": "The CG of a hollow cone is h/3 from its base",
            "html": "<p>The h/3 result applies to a thin, uniform conical shell consisting only of the lateral surface, with no base plate. It does not apply to every hollow body: a base plate, a thick wall or a varying thickness moves the centre of gravity.</p>",
            "sources": [
              {
                "id": "CAP4-01-00067",
                "label": "p. 3; topic 1 point 63"
              }
            ]
          },
          {
            "id": "caution-perpendicular-axis-scope",
            "status": "corrected",
            "prompt": "The perpendicular axis theorem is used to calculate the MOI of circular lamina",
            "html": "<p>The capsule implies the theorem is limited to circles. \\(J_O = I_x + I_y\\) holds for any plane area, because \\(r^2 = x^2 + y^2\\) for every element; a circle is simply a convenient case in which symmetry makes \\(I_x = I_y\\). The mass form of the theorem requires a planar lamina.</p>",
            "sources": [
              {
                "id": "CAP4-01-00069",
                "label": "p. 3; topic 1 point 65"
              }
            ]
          },
          {
            "id": "caution-hemisphere-centroid",
            "status": "review",
            "prompt": "The centre of gravity of a hemisphere is 3r/8",
            "html": "<p>The extracted capsule text lost the fraction. 3r/8 from the flat base is correct for a homogeneous solid hemisphere; a thin hemispherical shell gives r/2, and 4r/(3π) belongs to a semicircular plane area.</p>",
            "sources": [
              {
                "id": "CAP4-01-00070",
                "label": "p. 3; topic 1 point 66"
              }
            ]
          },
          {
            "id": "caution-pyramid-definition",
            "status": "corrected",
            "prompt": "A solid with an equilateral triangle base and faces converging towards its axis is a pyramid",
            "html": "<p>A pyramid's side faces meet at a single apex rather than merely converging towards an axis; the faces of a truncated pyramid converge but never meet. A triangular pyramid is also not a regular tetrahedron unless all its faces and edges satisfy the regularity conditions.</p>",
            "sources": [
              {
                "id": "CAP4-01-00071",
                "label": "p. 3; topic 1 point 67"
              }
            ]
          },
          {
            "id": "caution-prism-definition",
            "status": "corrected",
            "prompt": "The shape made up of uniform triangles is a prism",
            "html": "<p>A solid made solely of congruent triangles is not thereby a prism; a regular octahedron is a counterexample. A right triangular prism has two congruent parallel triangular ends joined by rectangular faces, so the arrangement of the faces is decisive.</p>",
            "sources": [
              {
                "id": "CAP4-01-00072",
                "label": "p. 3; topic 1 point 68"
              }
            ]
          },
          {
            "id": "caution-radius-of-gyration-formula",
            "status": "corrected",
            "prompt": "The formula of radius of gyration is k2 = AI",
            "html": "<p>The extracted capsule fraction reads like a product of area and second moment. From the definition \\(I = Ak^2\\) and a check of dimensions, the relation is \\(k^2 = I/A\\), so \\(k = \\sqrt{I/A}\\), which has units of length.</p>",
            "sources": [
              {
                "id": "CAP4-01-00081",
                "label": "p. 4; topic 1 point 77"
              }
            ]
          },
          {
            "id": "caution-semicircle-centroid-extraction",
            "status": "corrected",
            "prompt": "The centroid of a semicircle about its diametric base, extracted as 23d",
            "html": "<p>The extracted capsule fraction is garbled. Integration gives \\(4R/(3\\pi)\\), equivalently \\(2d/(3\\pi)\\), measured from the diameter towards the curved edge; for a 300 mm diameter this is 63.66 mm.</p>",
            "sources": [
              {
                "id": "CAP4-01-00134",
                "label": "p. 5; topic 1 point 128"
              }
            ]
          },
          {
            "id": "caution-hemisphere-versus-semicircle-moment",
            "status": "corrected",
            "prompt": "The moment of inertia of a solid hemisphere about its base is πR4/8",
            "html": "<p>\\(\\pi R^4/8\\) is the second moment of a semicircular plane area about its flat diameter, with units of length to the fourth power. A solid hemisphere's mass inertia about a base diameter is \\(2MR^2/5\\) and needs the mass, so the capsule attaches an area formula to a solid body.</p>",
            "sources": [
              {
                "id": "CAP4-01-00148",
                "label": "p. 6; topic 1 point 141"
              }
            ]
          }
        ],
        "gaps": [
          "Centres of gravity of built-up plane figures and standard rolled steel sections, named in the syllabus, are not tested by these capsule items.",
          "Product of inertia, principal axes and second moments about inclined axes are not covered.",
          "Most items test standard formulas or single substitutions; multi-part composite-section calculations are not practised here."
        ]
      },
      "ACiE0105": {
        "code": "ACiE0105",
        "questionCount": 40,
        "format": 2,
        "summary": "<p>Surveying fixes positions, distances, directions and elevations on the ground. The capsule questions test plane versus geodetic work and well-conditioned triangles, chaining, ranging and the optical square, plane-table radiation and coordinate areas, levelling practice and booking, curvature and refraction, bubble sensitivity, face readings, bearings and declination, traverse misclosure and Bowditch adjustment, total station and tacheometric reductions, subtense distances, contours, topographic surveys, the GPS constellation and GIS analysis.</p>",
        "blocks": [
          {
            "id": "plane-geodetic-and-well-conditioned-triangles",
            "title": "Plane versus geodetic surveying and well-conditioned triangles",
            "html": "<p><em>Plane surveying</em> treats the Earth's surface as a plane and neglects its curvature. That approximation holds over a suitably limited area at the accuracy required; it is not a claim that the Earth is flat. <em>Geodetic surveying</em> explicitly allows for curvature and the geometry of the reference surface, so it is used for extensive regional control networks where a plane would introduce unacceptable error.</p><p>In triangulation, the shape of each triangle controls how angular errors propagate into the computed sides. Very acute or very obtuse angles amplify small measurement errors, so conventional guidance keeps every angle of a <em>well-conditioned triangle</em> between about 30° and 120°. An equilateral triangle is especially well conditioned.</p>",
            "formulas": [
              {
                "label": "Well-conditioned triangle test",
                "tex": "\\begin{aligned} &\\theta_1 + \\theta_2 + \\theta_3 = 180^\\circ \\\\ &30^\\circ \\le \\theta_i \\le 120^\\circ \\end{aligned}"
              }
            ],
            "example": {
              "title": "Worked check: two sets of triangle angles",
              "html": "<p>Angles of 40°, 60° and 80° total 180° and all lie within 30° to 120°, so the triangle is well conditioned. Angles of 25°, 45° and 110° also total 180°, but the 25° angle falls below the limit, so that triangle is poorly conditioned.</p>"
            },
            "points": [
              {
                "html": "A regional network too extensive to treat as a plane needs geodetic surveying, which accounts for Earth curvature; plane surveying neglects it over limited areas.",
                "sources": [
                  {
                    "id": "CAP4-01-00088",
                    "label": "pp. 4, 6; topic 1 point 86; topic 1 point 142"
                  }
                ]
              },
              {
                "html": "Angles of 40 degrees, 60 degrees and 80 degrees make a well-conditioned survey triangle: they total 180 degrees and each lies within the 30 to 120 degree guidance.",
                "sources": [
                  {
                    "id": "CAP4-01-00062",
                    "label": "pp. 3, 5; topic 1 point 59; topic 1 point 114"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00088",
                "label": "pp. 4, 6; topic 1 point 86; topic 1 point 142"
              },
              {
                "id": "CAP4-01-00062",
                "label": "pp. 3, 5; topic 1 point 59; topic 1 point 114"
              }
            ]
          },
          {
            "id": "chaining-ranging-and-line-ranger",
            "title": "Chaining, ranging and the line ranger",
            "html": "<p>Measuring a straight survey line involves two operations. <em>Ranging</em> establishes intermediate points on the straight line between the end stations, and <em>chaining</em> measures the length along it. They depend on different conditions: ranging needs visibility, whereas chaining needs physical access along the line.</p><p>An unfordable river between two mutually visible stations therefore obstructs chaining but not ranging. The line can still be ranged across the water, and its length is found by an indirect method rather than by laying the chain across. Obstacles are classified by which of the two operations they obstruct.</p><p>The <em>line ranger</em> is a small optical instrument that helps place an intermediate ranging rod exactly on the line joining two visible end rods. It is an alignment aid only: perpendicular offsets are set with an optical square or cross-staff, and the line ranger measures neither reduced levels nor magnetic declination.</p>",
            "points": [
              {
                "html": "An unfordable river between mutually visible stations obstructs chaining but not direct ranging: visibility permits ranging, while chaining needs physical access.",
                "sources": [
                  {
                    "id": "CAP4-01-00098",
                    "label": "p. 4; topic 1 point 93"
                  }
                ]
              },
              {
                "html": "A line ranger assists the alignment of an intermediate rod between two visible end rods, placing it on their straight line; it does not set right-angle offsets.",
                "sources": [
                  {
                    "id": "CAP4-01-00156",
                    "label": "p. 6; topic 1 point 149"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00098",
                "label": "p. 4; topic 1 point 93"
              },
              {
                "id": "CAP4-01-00156",
                "label": "p. 6; topic 1 point 149"
              }
            ]
          },
          {
            "id": "optical-square-double-reflection",
            "title": "The optical square: double reflection and the 45° mirror angle",
            "html": "<p>A conventional mirror <em>optical square</em> sets out right angles for offsets using the principle of <em>double reflection</em>. A ray reflected successively at two plane mirrors is deviated through twice the angle between the mirror planes, whatever its angle of incidence.</p><p>To turn the line of sight through 90°, the mirrors must therefore be fixed at 45° to each other. Mirrors at 90° would deviate the ray through 180°, sending it back the way it came.</p><p>The principle is reflection, not refraction through a lens, diffraction through a slit or total internal reflection in a liquid. Because the deviation does not depend on how the instrument is held, the ranging rod on the chain line and the offset point appear to coincide exactly when the offset is perpendicular.</p>",
            "formulas": [
              {
                "label": "Deviation by two plane mirrors",
                "tex": "\\delta = 2\\theta",
                "where": "<p>\\(\\delta\\) is the deviation of the ray and \\(\\theta\\) the angle between the mirror planes.</p>"
              }
            ],
            "example": {
              "title": "Worked example: setting the mirror angle",
              "html": "<p>A right-angle offset needs \\(\\delta = 90^\\circ\\), so \\(2\\theta = 90^\\circ\\) and \\(\\theta = 45^\\circ\\). The same construction with mirrors at 50° would turn sight lines through 100°, not a right angle.</p>"
            },
            "points": [
              {
                "html": "A conventional mirror optical square sets a right-angle sight by successive reflection at two plane mirrors, the principle of double reflection.",
                "sources": [
                  {
                    "id": "CAP4-01-00157",
                    "label": "p. 6; topic 1 point 150"
                  }
                ]
              },
              {
                "html": "For a 90° deviation by double reflection, the two mirror planes of an optical square must be set at 45 degrees to each other.",
                "sources": [
                  {
                    "id": "CAP4-01-00159",
                    "label": "p. 6; topic 1 point 152"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00157",
                "label": "p. 6; topic 1 point 150"
              },
              {
                "id": "CAP4-01-00159",
                "label": "p. 6; topic 1 point 152"
              }
            ]
          },
          {
            "id": "plotting-detail-and-areas",
            "title": "Plotting detail and computing plan areas",
            "html": "<p>In plane tabling, <em>radiation</em> plots every detail point visible from a single station: a ray is drawn towards each point and its measured distance is scaled along the ray. It requires the points to be visible and their distances measurable. <em>Intersection</em> instead locates points from rays drawn at two stations, and <em>resection</em> locates the table's own station from control already plotted.</p><p>Areas are best computed numerically from coordinates. List the vertices in order around the figure, form the cross products of successive pairs and halve the absolute sum. The method avoids graphical scaling errors, but it cannot repair inaccurate field measurements, control or adjustment.</p><p>Units follow the coordinates. For a GIS layer stored in a projected system with metre units, a directly computed planar area is in square metres. Coordinates in degrees need a suitable projection or a geodesic method first.</p>",
            "formulas": [
              {
                "label": "Coordinate (shoelace) area",
                "tex": "A = \\dfrac{1}{2}\\left|\\sum \\left(x_i y_{i+1} - x_{i+1} y_i\\right)\\right|",
                "where": "<p>The vertices are listed in order, with the last joined back to the first.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a four-sided parcel",
              "html": "<p>Vertices in order: (0, 0), (40, 0), (30, 20) and (0, 20), in metres.</p>\\[\\begin{aligned}\\textstyle\\sum x_i y_{i+1} &amp;= 800 + 600 = 1400 \\\\ \\textstyle\\sum x_{i+1} y_i &amp;= 0 \\\\ A &amp;= \\tfrac{1}{2}\\,|1400 - 0| = 700\\ \\text{m}^2\\end{aligned}\\]<p>In the first sum only 40 × 20 and 30 × 20 are non-zero, and every product in the second sum is zero.</p><p>Check: the parcel is a trapezoid with parallel sides of 40 m and 30 m, 20 m apart, so its area is 35 × 20 = 700 m².</p>"
            },
            "points": [
              {
                "html": "Plotting every visible detail point by rays and scaled distances from a single plane-table setup is radiation; intersection needs rays from two stations.",
                "sources": [
                  {
                    "id": "CAP4-01-00158",
                    "label": "p. 6; topic 1 point 151"
                  }
                ]
              },
              {
                "html": "Coordinates (0, 0), (40, 0), (30, 20) and (0, 20) in metres give a parcel area of 700 m² by the coordinate method.",
                "sources": [
                  {
                    "id": "CAP4-01-00152",
                    "label": "p. 6; topic 1 point 145"
                  }
                ]
              },
              {
                "html": "A GIS polygon held in projected coordinates with metre units has its directly computed planar area in square metres.",
                "sources": [
                  {
                    "id": "CAP4-01-00068",
                    "label": "p. 3; topic 1 point 64"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00158",
                "label": "p. 6; topic 1 point 151"
              },
              {
                "id": "CAP4-01-00152",
                "label": "p. 6; topic 1 point 145"
              },
              {
                "id": "CAP4-01-00068",
                "label": "p. 3; topic 1 point 64"
              }
            ]
          },
          {
            "id": "levelling-benchmarks-sights-and-level",
            "title": "Levelling fundamentals: benchmarks, sight types and the dumpy level",
            "html": "<p><em>Differential levelling</em> determines the elevation difference between points using a horizontal line of sight and staff readings. Chaining measures lengths and compass traversing measures directions, so neither replaces it. Elevations are tied to a datum through <em>benchmarks</em>: durable marked points of established reduced level that give recoverable elevation control. Such control can be established before detailed work and extended during it.</p><p>Staff readings are classified by their role in a setup, not by compass direction:</p><ul><li><em>Backsight</em>: the first reading of a setup, taken on a point of known or previously found RL.</li><li><em>Intermediate sight</em>: any reading between the first and the last.</li><li><em>Foresight</em>: the last reading before the instrument is moved or the work ends. At a change point, the same point then receives a backsight from the next setup.</li></ul><p>A <em>dumpy level</em> gives a horizontal line of sight. It is most convenient on fairly flat ground but still works on slopes: the telescope stays horizontal, and shorter sights, suitable staff ranges and additional setups are used.</p>",
            "points": [
              {
                "html": "Differential levelling fixes the height difference between two points from staff readings taken on a horizontal line of sight.",
                "sources": [
                  {
                    "id": "CAP4-01-00155",
                    "label": "p. 6; topic 1 point 148"
                  }
                ]
              },
              {
                "html": "A benchmark is a stable, referenced mark of known reduced level that provides recoverable elevation control; it may be set before detailed work or extended during it.",
                "sources": [
                  {
                    "id": "CAP4-01-00099",
                    "label": "p. 4; topic 1 point 94"
                  }
                ]
              },
              {
                "html": "The final staff reading of a completed setup, taken just before the instrument moves, is a foresight; at a change point a backsight follows from the next setup.",
                "sources": [
                  {
                    "id": "CAP4-01-00161",
                    "label": "p. 6; topic 1 point 154"
                  }
                ]
              },
              {
                "html": "A dumpy level still works on steeper hillsides, but shorter sights and more setups may be needed; its telescope stays horizontal rather than following the slope.",
                "sources": [
                  {
                    "id": "CAP4-01-00105",
                    "label": "p. 4; topic 1 point 100"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00155",
                "label": "p. 6; topic 1 point 148"
              },
              {
                "id": "CAP4-01-00099",
                "label": "p. 4; topic 1 point 94"
              },
              {
                "id": "CAP4-01-00161",
                "label": "p. 6; topic 1 point 154"
              },
              {
                "id": "CAP4-01-00105",
                "label": "p. 4; topic 1 point 100"
              }
            ]
          },
          {
            "id": "reducing-levels-and-arithmetic-check",
            "title": "Reducing levels: height of collimation, rise and fall, and the arithmetic check",
            "html": "<p>Two booking methods convert staff readings into reduced levels.</p><table><thead><tr><th scope='col'>Method</th><th scope='col'>Working</th><th scope='col'>Best suited to</th></tr></thead><tbody><tr><th scope='row'>Height of instrument, also called height of collimation</th><td>Add the backsight to the known RL to get the sight-line elevation, then subtract each later reading</td><td>Many intermediate sights from one setup</td></tr><tr><th scope='row'>Rise and fall</th><td>Compare consecutive readings within a setup; a smaller later reading means a rise</td><td>Differential and check levelling, with a fuller check</td></tr></tbody></table><p>The two names in the first row describe one method, not two. A larger staff reading means lower ground under the same line of sight.</p><p>The <em>arithmetic check</em> confirms the booking: the sum of backsights minus the sum of foresights equals the last RL minus the first, and in rise and fall the total rise minus the total fall must agree. It detects arithmetic slips, not field errors.</p>",
            "formulas": [
              {
                "label": "Height of instrument",
                "tex": "\\text{HI} = \\text{RL} + \\text{BS}"
              },
              {
                "label": "Reduced level of a sighted point",
                "tex": "\\text{RL} = \\text{HI} - \\text{staff reading}"
              },
              {
                "label": "Arithmetic check",
                "tex": "\\sum \\text{BS} - \\sum \\text{FS} = \\Delta\\text{RL}",
                "where": "<p>\\(\\Delta\\text{RL}\\) is the last RL minus the first.</p>"
              },
              {
                "label": "Rise and fall check",
                "tex": "\\sum \\text{Rise} - \\sum \\text{Fall} = \\Delta\\text{RL}"
              }
            ],
            "example": {
              "title": "Worked examples: an intermediate sight and a closing RL",
              "html": "<p>Benchmark RL 100.0 m, backsight 1.4 m, then an intermediate sight of 2.1 m from that setup:</p>\\[\\begin{aligned}\\text{HI} &amp;= 100.0 + 1.4 = 101.4\\ \\text{m} \\\\ \\text{RL} &amp;= 101.4 - 2.1 = 99.3\\ \\text{m}\\end{aligned}\\]<p>A run starting at RL 100.000 m with backsights totalling 6.500 m and foresights totalling 5.800 m must close at</p>\\[\\begin{aligned}\\text{RL}_{\\text{last}} &amp;= 100.000 + 6.500 - 5.800 \\\\ &amp;= 100.700\\ \\text{m}\\end{aligned}\\]"
            },
            "points": [
              {
                "html": "The height-of-instrument method, also called the height-of-collimation method, uses one sight-line elevation per setup and suits many intermediate sights.",
                "sources": [
                  {
                    "id": "CAP4-01-00106",
                    "label": "p. 4; topic 1 point 101"
                  }
                ]
              },
              {
                "html": "With a benchmark at RL 100.0 m, a 1.4 m backsight and a 2.1 m intermediate sight, the height of collimation is 101.4 m and the point's RL is 99.3 m.",
                "sources": [
                  {
                    "id": "CAP4-01-00107",
                    "label": "p. 4; topic 1 point 101"
                  }
                ]
              },
              {
                "html": "The rise-and-fall method books the rise or fall between consecutive points; its total rise minus total fall must equal the last RL minus the first.",
                "sources": [
                  {
                    "id": "CAP4-01-00162",
                    "label": "p. 6; topic 1 point 155"
                  }
                ]
              },
              {
                "html": "A run from RL 100.000 m with 6.500 m of backsights and 5.800 m of foresights must end at RL 100.700 m to satisfy the arithmetic check.",
                "sources": [
                  {
                    "id": "CAP4-01-00089",
                    "label": "p. 4; topic 1 point 87"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00106",
                "label": "p. 4; topic 1 point 101"
              },
              {
                "id": "CAP4-01-00107",
                "label": "p. 4; topic 1 point 101"
              },
              {
                "id": "CAP4-01-00162",
                "label": "p. 6; topic 1 point 155"
              },
              {
                "id": "CAP4-01-00089",
                "label": "p. 4; topic 1 point 87"
              }
            ]
          },
          {
            "id": "curvature-refraction-and-bubble-sensitivity",
            "title": "Equal sights, curvature and refraction, and bubble-tube sensitivity",
            "html": "<p>Over longer sights a level's horizontal line of sight departs from the level surface because of <em>Earth curvature</em>, and the line bends because of atmospheric <em>refraction</em>. Curvature makes staff readings too large and refraction partly offsets it; both grow roughly with the square of the sight length.</p><p>When the backsight and foresight lengths match and the air along both sights behaves similarly, each reading carries nearly the same systematic error. Their common contributions then approximately cancel when the foresight is subtracted from the backsight. Neither effect disappears physically, and unequal atmospheric conditions can leave residual refraction, so setting the level midway is good practice rather than a guarantee.</p><p>The sensitivity of a <em>bubble tube</em> follows from arc geometry. A small tilt moves the bubble along the arc by the radius times the tilt angle, so a larger radius gives a larger movement for the same tilt and a more sensitive tube.</p>",
            "formulas": [
              {
                "label": "Bubble-tube sensitivity",
                "tex": "\\theta = \\dfrac{s}{R}",
                "where": "<p>\\(s\\) is the bubble movement along the arc, \\(R\\) the radius of curvature of the tube and \\(\\theta\\) the tilt in radians.</p>"
              }
            ],
            "example": {
              "title": "Worked example: one 2 mm division on a 100 m radius",
              "html": "\\[\\theta = \\dfrac{0.002}{100} = 2 \\times 10^{-5}\\ \\text{rad} = 20\\ \\mu\\text{rad}\\]<p>That is about 4 seconds of arc per division. The 100 m radius is a stated example, not a universal specification.</p>"
            },
            "points": [
              {
                "html": "With equal backsight and foresight lengths and comparable air, the common contributions of curvature and refraction approximately cancel in the computed height difference.",
                "sources": [
                  {
                    "id": "CAP4-01-00083",
                    "label": "p. 4; topic 1 point 81"
                  }
                ]
              },
              {
                "html": "A bubble tube of 100 m radius with 2 mm divisions tilts about 20 microradians per division, since \\(\\theta = s/R\\).",
                "sources": [
                  {
                    "id": "CAP4-03-00019",
                    "label": "p. 11; topic 3 point 16"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00083",
                "label": "p. 4; topic 1 point 81"
              },
              {
                "id": "CAP4-03-00019",
                "label": "p. 11; topic 3 point 16"
              }
            ]
          },
          {
            "id": "face-readings-bearings-and-declination",
            "title": "Angles and directions: face readings, included angles and declination",
            "html": "<p>Observing a target on both faces of a theodolite provides a check and helps eliminate instrumental errors. On an ideal zenith circle with complementary full-circle graduations, the two face readings of one target sum to 360°, so face right is 360° minus face left. Real index error disturbs the ideal sum.</p><p>An <em>included angle</em> from bearings must use directions measured from the common station. At B the direction to A is the back bearing of AB, found by adding or subtracting 180°. Subtracting the two fore bearings directly ignores that reversal and gives the wrong angle.</p><p><em>Magnetic declination</em> converts magnetic bearings to true bearings. Taking east declination as positive and west as negative, the true bearing is the magnetic bearing plus the declination.</p>",
            "formulas": [
              {
                "label": "Ideal face readings on a zenith circle",
                "tex": "\\text{FL} + \\text{FR} = 360^\\circ"
              },
              {
                "label": "Back bearing",
                "tex": "\\text{BB} = \\text{FB} \\pm 180^\\circ"
              },
              {
                "label": "True bearing from magnetic bearing",
                "tex": "\\theta_{\\text{true}} = \\theta_{\\text{mag}} + \\delta",
                "where": "<p>\\(\\delta\\) is the declination, positive east and negative west.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: three angle reductions",
              "html": "<ol><li>Face right for a face-left reading of 98°30′30″: write 360° as 359°59′60″, then 359°59′60″ − 98°30′30″ = 261°29′30″.</li><li>Included angle ABC with AB = 146°30′ and BC = 68°30′: the back bearing BA is 326°30′, its difference from BC is 258°, so the smaller angle is 360° − 258° = 102°.</li><li>True bearing for a magnetic bearing of 32° with declination 10°15′ W: 32° − 10°15′ = 21°45′.</li></ol>"
            },
            "points": [
              {
                "html": "For an ideal theodolite reading 98°30′30″ on face left, the face-right zenith reading is 261 degrees 29 minutes 30 seconds, because the two sum to 360°.",
                "sources": [
                  {
                    "id": "CAP4-01-00085",
                    "label": "p. 4; topic 1 point 83"
                  }
                ]
              },
              {
                "html": "With whole-circle bearings AB 146°30′ and BC 68°30′, the smaller included angle ABC is 102 degrees, found from the back bearing BA of 326°30′.",
                "sources": [
                  {
                    "id": "CAP4-01-00096",
                    "label": "p. 4; topic 1 point 91"
                  }
                ]
              },
              {
                "html": "A magnetic bearing of 32° with a declination of 10°15′ west gives a true bearing of 21 degrees 45 minutes.",
                "sources": [
                  {
                    "id": "CAP4-01-00101",
                    "label": "p. 4; topic 1 point 96"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00085",
                "label": "p. 4; topic 1 point 83"
              },
              {
                "id": "CAP4-01-00096",
                "label": "p. 4; topic 1 point 91"
              },
              {
                "id": "CAP4-01-00101",
                "label": "p. 4; topic 1 point 96"
              }
            ]
          },
          {
            "id": "traverse-misclosure-direction",
            "title": "Closed-traverse misclosure: quadrant, closing line and bearing",
            "html": "<p>In a closed traverse, the sums of latitudes (north positive) and departures (east positive) should both be zero. Any remainder forms the <em>misclosure vector</em>, which runs from the start to the computed end point. Its signs fix the quadrant: net north latitude with net west departure places the computed endpoint northwest of the start.</p><p>The <em>closing line</em> that returns from the computed endpoint to the start is the negative of that vector, so a northwest misclosure needs a southeast closing line. Always state which vector is meant; using the same quadrant for both reverses the sign of the correction.</p><p>The bearing of the error vector comes from its components, with the signs deciding the quadrant. The ratio of departure to latitude alone cannot distinguish opposite quadrants, so use the two-argument arctangent.</p>",
            "formulas": [
              {
                "label": "Misclosure length",
                "tex": "e = \\sqrt{(\\Sigma L)^2 + (\\Sigma D)^2}"
              },
              {
                "label": "Misclosure bearing",
                "tex": "\\theta = \\operatorname{atan2}(\\Sigma D,\\ \\Sigma L)",
                "where": "<p>\\(\\Sigma L\\) and \\(\\Sigma D\\) are the signed latitude and departure sums; the result is a clockwise bearing from north.</p>"
              }
            ],
            "example": {
              "title": "Worked example: latitude −3 m and departure +4 m",
              "html": "<ol><li>Signs: south and east, so the vector lies in the southeast quadrant.</li><li>Angle from south: \\(\\arctan(4/3) = 53.13^\\circ\\).</li><li>Whole-circle bearing: 180° − 53.13° = 126.87°.</li><li>Length: \\(\\sqrt{3^2 + 4^2} = 5\\) m.</li></ol>"
            },
            "points": [
              {
                "html": "Net northward latitude with net westward departure puts the computed endpoint northwest of the start: the start-to-end error vector lies in the northwest quadrant.",
                "sources": [
                  {
                    "id": "CAP4-01-00091",
                    "label": "p. 4; topic 1 point 89"
                  }
                ]
              },
              {
                "html": "The closing line from a computed endpoint lying northwest of the start must run southeast, the reverse of the misclosure vector.",
                "sources": [
                  {
                    "id": "CAP4-01-00092",
                    "label": "p. 4; topic 1 point 89"
                  }
                ]
              },
              {
                "html": "Net latitude −3 m and net departure +4 m give a southeast error vector with whole-circle bearing 126.87 degrees, that is 180° − arctan(4/3).",
                "sources": [
                  {
                    "id": "CAP4-01-00097",
                    "label": "p. 4; topic 1 point 92"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00091",
                "label": "p. 4; topic 1 point 89"
              },
              {
                "id": "CAP4-01-00092",
                "label": "p. 4; topic 1 point 89"
              },
              {
                "id": "CAP4-01-00097",
                "label": "p. 4; topic 1 point 92"
              }
            ]
          },
          {
            "id": "bowditch-adjustment",
            "title": "Bowditch rule for adjusting a closed traverse",
            "html": "<p>The <em>Bowditch rule</em>, also called the compass rule, distributes a traverse's misclosure in proportion to side lengths. It is applied separately to latitudes and departures, and each correction carries the opposite sign to the misclosure it removes, so that the adjusted sums become zero.</p><p>Typical slips are keeping the misclosure's own sign, applying the whole misclosure to one side and exchanging the latitude and departure values. Summed over every side, the corrections must total exactly the negative of each misclosure, which is a useful check.</p>",
            "formulas": [
              {
                "label": "Bowditch correction to one side",
                "tex": "\\begin{aligned} C_L &= -\\Sigma L \\times \\dfrac{l}{P} \\\\ C_D &= -\\Sigma D \\times \\dfrac{l}{P} \\end{aligned}",
                "where": "<p>\\(l\\) is the side length, \\(P\\) the perimeter, and \\(\\Sigma L\\) and \\(\\Sigma D\\) the signed misclosures.</p>"
              }
            ],
            "example": {
              "title": "Worked example: a 120 m side of a 600 m traverse",
              "html": "<p>Latitude misclosure +0.30 m, departure misclosure −0.20 m, perimeter 600 m.</p><ol><li>Length fraction: 120/600 = 0.20.</li><li>Latitude correction: −0.30 × 0.20 = −0.06 m.</li><li>Departure correction: −(−0.20) × 0.20 = +0.04 m.</li></ol><p>Over all sides the corrections sum to −0.30 m and +0.20 m, cancelling the misclosure.</p>"
            },
            "points": [
              {
                "html": "Under the Bowditch rule, a 120 m side of a 600 m traverse with misclosures of +0.30 m in latitude and −0.20 m in departure takes corrections of latitude −0.06 m and departure +0.04 m.",
                "sources": [
                  {
                    "id": "CAP4-01-00129",
                    "label": "p. 5; topic 1 point 122"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00129",
                "label": "p. 5; topic 1 point 122"
              }
            ]
          },
          {
            "id": "total-station-observations",
            "title": "Total station: what it observes and how points are reduced",
            "html": "<p>A conventional <em>total station</em> directly observes three quantities: the horizontal angle, the vertical or zenith angle and the <em>slope distance</em> measured electronically. Horizontal distance, height difference and coordinates are derived from these, while station coordinates, instrument height and target height are entered or established separately.</p><p>For an elevation angle, the horizontal component is the slope distance times the cosine and the vertical component the slope distance times the sine. With a zenith angle the sine and cosine exchange roles.</p><p>To find a target's ground RL, follow the heights in order: station ground RL plus instrument height gives the axis RL; adding the vertical component gives the prism-centre RL; subtracting the prism height gives the target ground RL. The target height is subtracted, not added.</p><p>Electronic angle and distance measurement with data recording makes the total station well suited to coordinate-based digital cadastral work, though control, boundary evidence and legal procedure still apply.</p>",
            "formulas": [
              {
                "label": "Components of a slope distance",
                "tex": "H = S\\cos\\alpha, \\quad V = S\\sin\\alpha",
                "where": "<p>\\(\\alpha\\) is the elevation angle above horizontal and \\(S\\) the slope distance.</p>"
              },
              {
                "label": "Target ground RL",
                "tex": "\\text{RL}_{\\text{t}} = \\text{RL}_{\\text{s}} + h_i + V - h_t",
                "where": "<p>\\(h_i\\) is the instrument height and \\(h_t\\) the prism height above the target ground point.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: components and a target level",
              "html": "<p>A 50 m slope distance at 30° elevation:</p>\\[\\begin{aligned}H &amp;= 50\\cos 30^\\circ = 43.30\\ \\text{m} \\\\ V &amp;= 50\\sin 30^\\circ = 25.00\\ \\text{m}\\end{aligned}\\]<p>From ground at RL 100.0 m with a 1.5 m instrument height, and a prism centre 3.0 m above the axis and 1.8 m above its own ground point:</p><ol><li>Axis RL: 100.0 + 1.5 = 101.5 m.</li><li>Prism-centre RL: 101.5 + 3.0 = 104.5 m.</li><li>Target ground RL: 104.5 − 1.8 = 102.7 m.</li></ol>"
            },
            "points": [
              {
                "html": "A conventional total station observes the horizontal angle, the vertical angle and the slope distance; horizontal distance, heights and coordinates are derived or entered.",
                "sources": [
                  {
                    "id": "CAP4-01-00093",
                    "label": "p. 4; topic 1 point 90"
                  }
                ]
              },
              {
                "html": "A 50 m slope distance at 30° elevation resolves into 43.30 m horizontal and 25.00 m vertical, from \\(S\\cos\\alpha\\) and \\(S\\sin\\alpha\\).",
                "sources": [
                  {
                    "id": "CAP4-01-00094",
                    "label": "p. 4; topic 1 point 90"
                  }
                ]
              },
              {
                "html": "Station ground at RL 100.0 m, a 1.5 m instrument and a prism 3.0 m above the axis and 1.8 m above its ground point place the target ground at RL 102.7 m.",
                "sources": [
                  {
                    "id": "CAP4-01-00095",
                    "label": "p. 4; topic 1 point 90"
                  }
                ]
              },
              {
                "html": "The total station is the instrument that combines electronic angle and distance measurement with recording of boundary-point coordinates for digital cadastral work.",
                "sources": [
                  {
                    "id": "CAP4-01-00160",
                    "label": "p. 6; topic 1 point 153"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00093",
                "label": "p. 4; topic 1 point 90"
              },
              {
                "id": "CAP4-01-00094",
                "label": "p. 4; topic 1 point 90"
              },
              {
                "id": "CAP4-01-00095",
                "label": "p. 4; topic 1 point 90"
              },
              {
                "id": "CAP4-01-00160",
                "label": "p. 6; topic 1 point 153"
              }
            ]
          },
          {
            "id": "tacheometry-and-subtense",
            "title": "Stadia tacheometry and subtense-bar distances",
            "html": "<p>In <em>stadia tacheometry</em> with a vertical staff, the staff intercept s, multiplying constant K, additive constant C and vertical angle \\(\\theta\\) give the horizontal distance. Multiplying that distance by \\(\\tan\\theta\\) gives the vertical component, from the instrument axis to the point cut by the central hair.</p><p>The vertical component is not yet a ground level. The staff-foot RL is the axis RL plus the vertical component minus the central reading. Dropping the factor of one half or adding the central reading are the usual slips.</p><p>A <em>subtense bar</em> of known length is set perpendicular to the line of sight and the angle it subtends is measured. Half the bar and half the angle form a right triangle. The method suits short distances, typically up to about 150 to 200 m, and its precision depends on the bar length and the angular accuracy.</p>",
            "formulas": [
              {
                "label": "Tacheometric horizontal distance",
                "tex": "D = Ks\\cos^2\\theta + C\\cos\\theta"
              },
              {
                "label": "Tacheometric vertical component",
                "tex": "V = \\dfrac{Ks}{2}\\sin 2\\theta + C\\sin\\theta"
              },
              {
                "label": "Staff-foot reduced level",
                "tex": "\\text{RL}_{\\text{foot}} = \\text{RL}_{\\text{axis}} + V - h",
                "where": "<p>\\(h\\) is the central-hair staff reading.</p>"
              },
              {
                "label": "Subtense-bar distance",
                "tex": "D = \\dfrac{b/2}{\\tan(\\alpha/2)}",
                "where": "<p>\\(b\\) is the bar length and \\(\\alpha\\) the total angle it subtends.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: a staff-foot level and a subtense distance",
              "html": "<p>K = 100, C = 0, intercept 2.000 m, \\(\\theta = 30^\\circ\\), axis at RL 150.000 m, central reading 1.500 m:</p>\\[\\begin{aligned}V &amp;= \\dfrac{100 \\times 2}{2}\\sin 60^\\circ = 86.603\\ \\text{m} \\\\ \\text{RL} &amp;= 150.000 + 86.603 - 1.500 \\\\ &amp;= 235.103\\ \\text{m}\\end{aligned}\\]<p>The horizontal distance is \\(200\\cos^2 30^\\circ = 150\\) m. For a 2.00 m bar subtending 1.00°:</p>\\[D = \\dfrac{1.00}{\\tan 0.50^\\circ} = 114.59\\ \\text{m}\\]"
            },
            "points": [
              {
                "html": "With a vertical staff, the height of the central-hair point above the instrument axis is \\((Ks/2)\\sin 2\\theta + C\\sin\\theta\\), a vertical component rather than a ground RL.",
                "sources": [
                  {
                    "id": "CAP4-01-00108",
                    "label": "p. 5; topic 1 point 102"
                  }
                ]
              },
              {
                "html": "With K = 100, C = 0, a 2.000 m intercept at 30° and the axis at RL 150.000 m, a 1.500 m central reading puts the staff foot at RL 235.103 m.",
                "sources": [
                  {
                    "id": "CAP4-01-00109",
                    "label": "p. 5; topic 1 point 102"
                  }
                ]
              },
              {
                "html": "A 2.00 m subtense bar subtending 1.00° gives a horizontal distance of 114.59 m: half the bar divided by the tangent of half the angle.",
                "sources": [
                  {
                    "id": "CAP4-01-00139",
                    "label": "p. 5; topic 1 point 132"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00108",
                "label": "p. 5; topic 1 point 102"
              },
              {
                "id": "CAP4-01-00109",
                "label": "p. 5; topic 1 point 102"
              },
              {
                "id": "CAP4-01-00139",
                "label": "p. 5; topic 1 point 132"
              }
            ]
          },
          {
            "id": "contour-properties-and-uses",
            "title": "Contours: spacing, interval, cliffs and uses",
            "html": "<p>Contours join points of equal elevation, and their geometry encodes slope. Slope is rise over run, so on one map with a fixed contour interval and scale, closely spaced contours mean steeper ground and widely spaced contours gentler ground. Spacing is measured along the direction of slope.</p><p>Contours of different elevations normally never meet. On an ideal <em>vertical cliff</em>, however, a finite rise occurs over zero horizontal run, so several contours coincide along the cliff trace in plan. Crossing contours describe a different geometry, an overhang.</p><p>The <em>contour interval</em> is set by purpose. Large-scale engineering plans generally use smaller intervals than small-scale regional maps to show finer detail, but relief, required accuracy and cost also matter; no exact inverse proportion links interval and scale.</p><p>A <em>contour plan</em> is the natural base for reading slopes, ridges, valleys and likely surface drainage paths. It supports that interpretation but does not measure subsurface flow or drainage capacity.</p>",
            "formulas": [
              {
                "label": "Ground slope between contours",
                "tex": "\\text{slope} = \\dfrac{\\text{contour interval}}{\\text{horizontal spacing}}"
              }
            ],
            "example": {
              "title": "Worked example: reading slope from spacing",
              "html": "<p>With a 2 m contour interval, contours 20 m apart on the ground give a slope of 2/20, or 1 in 10. Where they close up to 5 m apart the slope is 2/5, or 1 in 2.5, four times steeper.</p>"
            },
            "points": [
              {
                "html": "On one map with the same contour interval, much closer contour spacing along the slope indicates a steeper ground slope.",
                "sources": [
                  {
                    "id": "CAP4-01-00104",
                    "label": "p. 4; topic 1 point 99"
                  }
                ]
              },
              {
                "html": "Contours of several elevations on an ideal vertical cliff coincide along the cliff trace in plan; crossing contours indicate an overhang instead.",
                "sources": [
                  {
                    "id": "CAP4-01-00100",
                    "label": "p. 4; topic 1 point 95"
                  }
                ]
              },
              {
                "html": "A detailed large-scale engineering plan generally calls for a smaller contour interval than a small-scale regional map, subject to relief, purpose and survey accuracy.",
                "sources": [
                  {
                    "id": "CAP4-01-00138",
                    "label": "p. 5; topic 1 point 131"
                  }
                ]
              },
              {
                "html": "A contour plan is the natural base for inferring slopes and probable surface drainage paths from its lines of equal elevation.",
                "sources": [
                  {
                    "id": "CAP4-01-00102",
                    "label": "p. 4; topic 1 point 97"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00104",
                "label": "p. 4; topic 1 point 99"
              },
              {
                "id": "CAP4-01-00100",
                "label": "p. 4; topic 1 point 95"
              },
              {
                "id": "CAP4-01-00138",
                "label": "p. 5; topic 1 point 131"
              },
              {
                "id": "CAP4-01-00102",
                "label": "p. 4; topic 1 point 97"
              }
            ]
          },
          {
            "id": "topographic-gps-and-gis",
            "title": "Topographic surveys, the GPS constellation and GIS analysis",
            "html": "<p>A <em>topographic survey</em> maps terrain relief together with natural and built surface features such as streams and buildings. It supplies base information for alignment and site design, but it does not replace subsurface soil investigation or traffic-volume surveys, which are separate investigations.</p><p>For <em>GPS</em>, distinguish the constellation design from the operating fleet. The traditional design has six orbital planes with four baseline slots each, giving 24 slots. Official GPS programme information also describes the 2011 Expandable 24 configuration as effectively 27 slots and notes that extra satellites are flown, so the number operating at a given time can exceed 24.</p><p>Neither layout figure is a live fleet count or the number visible from a receiver. An ordinary three-dimensional fix, which also solves for receiver-clock bias, needs at least four suitable satellite observations.</p><p><em>GIS</em> capability includes data transfer and attribute handling, but spatial analysis specifically evaluates relationships between geometries. Selecting parcels by recorded land use, joining owner records on parcel IDs and exporting a table do not compare locations.</p>",
            "points": [
              {
                "html": "A topographic survey most directly supplies the ground relief and surface detail, such as streams and buildings, needed before alignment design; soil and traffic studies are separate.",
                "sources": [
                  {
                    "id": "CAP4-01-00086",
                    "label": "p. 4; topic 1 point 84"
                  }
                ]
              },
              {
                "html": "The traditional GPS layout has 24 baseline slots in six orbital planes, but the operating fleet can be larger; 24 is neither a live count nor a visibility requirement.",
                "sources": [
                  {
                    "id": "CAP4-01-00084",
                    "label": "p. 4; topic 1 point 82"
                  }
                ]
              },
              {
                "html": "Identifying parcels that intersect a flood-hazard polygon evaluates a spatial relationship between geometries, unlike attribute filters, joins or table export.",
                "sources": [
                  {
                    "id": "CAP4-01-00087",
                    "label": "p. 4; topic 1 point 85"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00086",
                "label": "p. 4; topic 1 point 84"
              },
              {
                "id": "CAP4-01-00084",
                "label": "p. 4; topic 1 point 82"
              },
              {
                "id": "CAP4-01-00087",
                "label": "p. 4; topic 1 point 85"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Height of instrument",
            "tex": "\\text{HI} = \\text{RL} + \\text{BS}"
          },
          {
            "label": "Reduced level of a sighted point",
            "tex": "\\text{RL} = \\text{HI} - \\text{IS or FS}"
          },
          {
            "label": "Arithmetic check",
            "tex": "\\sum \\text{BS} - \\sum \\text{FS} = \\Delta\\text{RL}",
            "note": "\\(\\Delta\\text{RL}\\) is the last RL minus the first; total rise minus total fall gives the same value."
          },
          {
            "label": "Ideal face readings",
            "tex": "\\text{FL} + \\text{FR} = 360^\\circ"
          },
          {
            "label": "Back bearing",
            "tex": "\\text{BB} = \\text{FB} \\pm 180^\\circ"
          },
          {
            "label": "True bearing",
            "tex": "\\theta_{\\text{true}} = \\theta_{\\text{mag}} + \\delta",
            "note": "Declination positive east, negative west."
          },
          {
            "label": "Misclosure length and bearing",
            "tex": "\\begin{aligned} e &= \\sqrt{(\\Sigma L)^2 + (\\Sigma D)^2} \\\\ \\theta &= \\operatorname{atan2}(\\Sigma D,\\ \\Sigma L) \\end{aligned}"
          },
          {
            "label": "Bowditch correction",
            "tex": "C_L = -\\Sigma L\\,\\dfrac{l}{P}, \\quad C_D = -\\Sigma D\\,\\dfrac{l}{P}"
          },
          {
            "label": "Total station components",
            "tex": "H = S\\cos\\alpha, \\quad V = S\\sin\\alpha"
          },
          {
            "label": "Target ground RL",
            "tex": "\\text{RL}_{\\text{t}} = \\text{RL}_{\\text{s}} + h_i + V - h_t"
          },
          {
            "label": "Tacheometric horizontal distance",
            "tex": "D = Ks\\cos^2\\theta + C\\cos\\theta"
          },
          {
            "label": "Tacheometric vertical component",
            "tex": "V = \\dfrac{Ks}{2}\\sin 2\\theta + C\\sin\\theta"
          },
          {
            "label": "Staff-foot RL",
            "tex": "\\text{RL}_{\\text{foot}} = \\text{RL}_{\\text{axis}} + V - h"
          },
          {
            "label": "Subtense bar",
            "tex": "D = \\dfrac{b/2}{\\tan(\\alpha/2)}"
          },
          {
            "label": "Coordinate area",
            "tex": "A = \\dfrac{1}{2}\\left|\\sum \\left(x_i y_{i+1} - x_{i+1} y_i\\right)\\right|"
          },
          {
            "label": "Optical square",
            "tex": "\\delta = 2\\theta",
            "note": "Deviation equals twice the angle between the mirrors."
          },
          {
            "label": "Bubble-tube sensitivity",
            "tex": "\\theta = \\dfrac{s}{R}"
          },
          {
            "label": "Slope from contours",
            "tex": "\\text{slope} = \\dfrac{\\text{interval}}{\\text{spacing}}"
          }
        ],
        "cautions": [
          {
            "id": "caution-gis-area-unit",
            "status": "review",
            "prompt": "In computer mapping, area is typically measured in the unit of square",
            "html": "<p>Square alone is not a complete unit. A planar area computed from projected coordinates in metres is in square metres; geographic coordinates in degrees need a suitable projection or a geodesic area method before an area in length units can be quoted.</p>",
            "sources": [
              {
                "id": "CAP4-01-00068",
                "label": "p. 3; topic 1 point 64"
              }
            ]
          },
          {
            "id": "caution-midpoint-level-errors",
            "status": "review",
            "prompt": "If the level is located at the midpoint, curvature and refraction errors are eliminated",
            "html": "<p>Midpoint placement cancels the common contributions of curvature and refraction in the computed height difference; it does not abolish either effect on each individual reading. Unequal atmospheric conditions along the two sights can still leave residual refraction.</p>",
            "sources": [
              {
                "id": "CAP4-01-00083",
                "label": "p. 4; topic 1 point 81"
              }
            ]
          },
          {
            "id": "caution-gps-satellite-count",
            "status": "review",
            "prompt": "24 satellites are used for GPS by the US Department of Defense",
            "html": "<p>Twenty-four is the traditional baseline slot count, not a live fleet census: the expandable configuration has effectively 27 slots and extra satellites are flown. The review checked official GPS programme information, including a fact sheet dated October 2020, and presents no dated fleet figure as a current count.</p>",
            "sources": [
              {
                "id": "CAP4-01-00084",
                "label": "p. 4; topic 1 point 82"
              }
            ]
          },
          {
            "id": "caution-topographic-survey-purpose",
            "status": "corrected",
            "prompt": "Topography survey is done for soil, traffic and engineering",
            "html": "<p>A topographic survey maps relief and natural or built surface features for engineering use. Soil investigation and traffic measurement are separate investigations with their own methods, not products of a topographic survey.</p>",
            "sources": [
              {
                "id": "CAP4-01-00086",
                "label": "p. 4; topic 1 point 84"
              }
            ]
          },
          {
            "id": "caution-gis-data-transfer",
            "status": "corrected",
            "prompt": "Transferring data does not determine the capability of GIS",
            "html": "<p>Data transfer is a valid GIS capability, so the absolute exclusion is rejected. The useful distinction is that transfer, attribute selection and table joins are not themselves spatial analysis, which evaluates relationships between geometries such as intersection.</p>",
            "sources": [
              {
                "id": "CAP4-01-00087",
                "label": "p. 4; topic 1 point 85"
              }
            ]
          },
          {
            "id": "caution-closing-line-quadrant",
            "status": "review",
            "prompt": "When north latitudes and west departures exceed their opposites, the closing line lies in the NW quadrant",
            "html": "<p>Northwest is correct only for the start-to-computed-end misclosure vector. The closing line that actually runs back from the computed endpoint to the start points southeast, so state which vector is meant before applying any correction.</p>",
            "sources": [
              {
                "id": "CAP4-01-00092",
                "label": "p. 4; topic 1 point 89"
              }
            ]
          },
          {
            "id": "caution-total-station-readings",
            "status": "corrected",
            "prompt": "Total station readings are horizontal angle, horizontal distance, vertical distance, station height and instrument height",
            "html": "<p>The capsule mixes observations with derived and entered values. A total station observes the horizontal angle, the vertical angle and the slope distance; horizontal and vertical distances are derived from them, and station and instrument heights are supplied data.</p>",
            "sources": [
              {
                "id": "CAP4-01-00093",
                "label": "p. 4; topic 1 point 90"
              }
            ]
          },
          {
            "id": "caution-closing-error-tangent",
            "status": "review",
            "prompt": "tan θ = departure/latitude gives the direction of closing error",
            "html": "<p>The tangent ratio alone cannot distinguish opposite quadrants: a latitude of −3 m with a departure of +4 m gives the same ratio as +3 m with −4 m, yet the vectors point in opposite directions. Use the signs of the sums, or atan2(departure, latitude), to fix the bearing.</p>",
            "sources": [
              {
                "id": "CAP4-01-00097",
                "label": "p. 4; topic 1 point 92"
              }
            ]
          },
          {
            "id": "caution-benchmark-timing",
            "status": "corrected",
            "prompt": "The bench marks are fixed during the detailed survey",
            "html": "<p>The capsule implies exclusive timing. A benchmark's purpose is recoverable elevation control, which may be established before detailed surveying begins and can also be extended during it; no single survey stage exclusively defines benchmarks.</p>",
            "sources": [
              {
                "id": "CAP4-01-00099",
                "label": "p. 4; topic 1 point 94"
              }
            ]
          },
          {
            "id": "caution-dumpy-level-terrain",
            "status": "review",
            "prompt": "The dumpy level is most suitable for levelling survey on flat terrain",
            "html": "<p>Flat terrain makes a dumpy level convenient, but it is neither an exclusive operating requirement nor proof of universal superiority. On slopes the level still works with shorter sights, suitable staff ranges and more setups, its telescope staying horizontal.</p>",
            "sources": [
              {
                "id": "CAP4-01-00105",
                "label": "p. 4; topic 1 point 100"
              }
            ]
          },
          {
            "id": "caution-hi-and-collimation-methods",
            "status": "corrected",
            "prompt": "Height of Instrument method and Collimation method are adopted when there are many intermediate stations",
            "html": "<p>Height of instrument and height of collimation are two names for one reduction method, not two separate methods. Its single sight-line elevation per setup makes it convenient when there are many intermediate sights.</p>",
            "sources": [
              {
                "id": "CAP4-01-00106",
                "label": "p. 4; topic 1 point 101"
              }
            ]
          },
          {
            "id": "caution-tacheometric-elevation-formula",
            "status": "corrected",
            "prompt": "The formula to calculate elevation in tacheometric surveying is Ks sin 2θ + C sin θ",
            "html": "<p>The extracted point lost the factor of one half that the full page supplies: the vertical component is \\((Ks/2)\\sin 2\\theta + C\\sin\\theta\\). It gives the height of the central-hair point above or below the instrument axis, not a ground RL, which also needs the axis RL and the central reading.</p>",
            "sources": [
              {
                "id": "CAP4-01-00108",
                "label": "p. 5; topic 1 point 102"
              }
            ]
          },
          {
            "id": "caution-bowditch-sign",
            "status": "corrected",
            "prompt": "Bowditch correction equals total error × length of that side/perimeter",
            "html": "<p>The capsule's rule omits the sign. Each correction is the negative of the total misclosure multiplied by side length over perimeter, so it opposes the corresponding misclosure and the adjusted sums close to zero.</p>",
            "sources": [
              {
                "id": "CAP4-01-00129",
                "label": "p. 5; topic 1 point 122"
              }
            ]
          },
          {
            "id": "caution-contour-interval-scale",
            "status": "corrected",
            "prompt": "Contour interval is inversely proportional to the scale of the map",
            "html": "<p>Exact inverse proportionality is replaced by a qualified tendency. Detailed large-scale plans often use smaller intervals, but relief, purpose, required accuracy and cost also govern the interval; no single equation fixes it from the scale.</p>",
            "sources": [
              {
                "id": "CAP4-01-00138",
                "label": "p. 5; topic 1 point 131"
              }
            ]
          },
          {
            "id": "caution-subtense-range",
            "status": "review",
            "prompt": "Short distances up to 150 to 200 m are typically determined by a subtense bar",
            "html": "<p>The 150 to 200 m range is a typical teaching range rather than a hard physical limit. Precision depends on the bar geometry and the accuracy of the angular measurement, so the working range follows from the accuracy required.</p>",
            "sources": [
              {
                "id": "CAP4-01-00139",
                "label": "p. 5; topic 1 point 132"
              }
            ]
          },
          {
            "id": "caution-coordinate-method-accuracy",
            "status": "review",
            "prompt": "The coordinate method is the accurate method of plotting traverse area",
            "html": "<p>Computing an area from coordinates removes graphical measuring errors, but its accuracy still depends on the field measurements, control and adjustment behind the coordinates; computation cannot repair inaccurate survey data.</p>",
            "sources": [
              {
                "id": "CAP4-01-00152",
                "label": "p. 6; topic 1 point 145"
              }
            ]
          },
          {
            "id": "caution-cadastral-total-station",
            "status": "review",
            "prompt": "The instrument used in digital cadastral survey is the total station",
            "html": "<p>A total station suits digital cadastral work, but it is not the sole permitted technology for every such survey, and control, boundary evidence and legal procedures remain necessary whichever instrument is used.</p>",
            "sources": [
              {
                "id": "CAP4-01-00160",
                "label": "p. 6; topic 1 point 153"
              }
            ]
          },
          {
            "id": "caution-bubble-tube-radius",
            "status": "review",
            "prompt": "The radius of curvature of the bubble tube is generally kept at 100 m",
            "html": "<p>The 100 m radius is a stated example, not a universal bubble-tube specification, and the capsule cites no instrument standard. The item was moved into surveying from another capsule topic.</p>",
            "sources": [
              {
                "id": "CAP4-03-00019",
                "label": "p. 11; topic 3 point 16"
              }
            ]
          }
        ],
        "gaps": [
          "Simple circular curves, listed in the syllabus, have no capsule question in this topic.",
          "Chain and tape corrections, compass local attraction and plane-table orientation methods are not tested by these capsule items.",
          "GPS and GIS appear only through constellation layout, area units and spatial-versus-attribute operations; positioning methods and accuracy classes are not covered."
        ]
      },
      "ACiE0106": {
        "code": "ACiE0106",
        "questionCount": 29,
        "format": 2,
        "summary": "<p>Estimating predicts what construction will cost, rate analysis builds the unit rates it uses, specifications define the quality required and valuation assesses what an existing property is worth. The capsule questions test estimate types and purposes, plinth-area and carpet-area arithmetic, revised-estimate triggers and percentage deviations, cement, water and dry-volume quantities, binding-wire and labour allowances, the long-wall short-wall method, measurement units, rate-analysis percentages, and salvage and forced-sale values.</p>",
        "blocks": [
          {
            "id": "estimate-purpose-and-preliminary-stage",
            "title": "Why estimates are prepared and the preliminary budget estimate",
            "html": "<p>An <em>estimate</em> predicts the probable cost of construction for a defined scope, price basis and set of assumptions. It supports planning, approval, funding and procurement. It does not guarantee the final price or the property's market value, it cannot prevent later variations, and it never replaces the drawings and technical specifications that define the work.</p><p>Estimates grow more detailed as information grows:</p><ol><li><em>Preliminary or budget estimate</em>: prepared when only the approximate size and general specification are known, often from area or unit rates, to judge funding feasibility.</li><li><em>Detailed estimate</em>: built from quantities measured on complete drawings and priced through rate analysis.</li><li><em>Revised and supplementary estimates</em>: prepared when a sanctioned cost is exceeded beyond the permitted margin, or when approved extra scope is added.</li><li><em>Final account</em>: records what the completed work actually cost.</li></ol><p>Match the estimate to the information available: a detailed bill cannot exist before measured drawings, and a final account cannot precede completion.</p>",
            "points": [
              {
                "html": "A construction cost estimate is prepared before tendering to assess the probable expenditure for the defined scope; it is not a guaranteed price or a substitute for drawings.",
                "sources": [
                  {
                    "id": "CAP4-01-00164",
                    "label": "p. 6; topic 1 point 157"
                  }
                ]
              },
              {
                "html": "At the feasibility stage, when a project is defined only by its approximate size and general specification, the appropriate estimate is a preliminary or budget estimate.",
                "sources": [
                  {
                    "id": "CAP4-01-00165",
                    "label": "p. 6; topic 1 point 158"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00164",
                "label": "p. 6; topic 1 point 157"
              },
              {
                "id": "CAP4-01-00165",
                "label": "p. 6; topic 1 point 158"
              }
            ]
          },
          {
            "id": "plinth-area-estimates",
            "title": "Plinth-area estimates, comparable rates and carpet area",
            "html": "<p>A <em>plinth-area estimate</em> multiplies a building's plinth area by a rate per square metre derived from a comparable building. The rate is meaningful only when the comparator matches in locality, height, construction and specification, and when its price level has been brought up to date. Equal floor area alone does not make two buildings comparable: different services, much higher finishes or an old unadjusted rate all distort the result.</p><p>Once the rate is adjusted the arithmetic is simple. Separately priced services, contingencies or site works are added only if the supplied rate excludes them and the estimating basis requires them.</p><p><em>Carpet area</em> and plinth area include different parts of a building, so carpet area is the smaller. Feasibility studies sometimes assume a ratio between them, but the real ratio depends on walls, circulation and layout, so any percentage must be stated as an assumption.</p>",
            "formulas": [
              {
                "label": "Plinth-area estimate",
                "tex": "C = A_{\\text{p}} \\times r",
                "where": "<p>\\(A_{\\text{p}}\\) is the plinth area and \\(r\\) the adjusted comparable rate per square metre.</p>"
              },
              {
                "label": "Assumed carpet area",
                "tex": "A_{\\text{c}} = k\\,A_{\\text{p}}",
                "where": "<p>\\(k\\) is the stated carpet-to-plinth ratio.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: a plinth-area cost and a carpet area",
              "html": "<p>A plinth area of 180 m² at an adjusted rate of Rs. 32,000 per m²:</p>\\[C = 180 \\times 32\\,000 = 5\\,760\\,000\\]<p>That is Rs. 5,760,000. With carpet area assumed at 60% of a 200 m² plinth area:</p>\\[A_{\\text{c}} = 0.60 \\times 200 = 120\\ \\text{m}^2\\]"
            },
            "points": [
              {
                "html": "The most defensible comparator for a plinth-area rate is a similar local building with comparable height and specifications, adjusted to the current price level.",
                "sources": [
                  {
                    "id": "CAP4-01-00045",
                    "label": "p. 3; topic 1 point 43"
                  }
                ]
              },
              {
                "html": "A 180 m² plinth area at an adjusted comparable rate of Rs. 32,000 per m² gives a plinth-area estimate of Rs. 5,760,000.",
                "sources": [
                  {
                    "id": "CAP4-01-00046",
                    "label": "p. 3; topic 1 point 43"
                  }
                ]
              },
              {
                "html": "If carpet area is assumed to be 60% of a 200 m² plinth area, the carpet area used is 120 m²; the ratio is a stated assumption, not a rule.",
                "sources": [
                  {
                    "id": "CAP4-01-00055",
                    "label": "p. 3; topic 1 point 52"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00045",
                "label": "p. 3; topic 1 point 43"
              },
              {
                "id": "CAP4-01-00046",
                "label": "p. 3; topic 1 point 43"
              },
              {
                "id": "CAP4-01-00055",
                "label": "p. 3; topic 1 point 52"
              }
            ]
          },
          {
            "id": "cost-control-revisions-and-final-cost",
            "title": "Cost control after sanction: revised estimates, deviations and final cost",
            "html": "<p>Percentage questions depend on the <em>comparison base</em>. Always express the change as a percentage of a named base, and read the governing procedure for any threshold rather than assuming one.</p><p>Where a stated procedure calls for a <em>revised estimate</em> once the forecast rises more than 5% above the sanctioned cost, the forecast is compared with the sanction. A revised estimate seeks fresh approval; it does not automatically authorise a contract variation or extra expenditure. The 5% figure is supplied with each exercise, not an established current Nepal rule.</p><p>Comparing an estimate with the actual cost is a different comparison: with actual cost as the base, the deviation is measured against what was spent.</p><p>The <em>final cost</em> of a project is not necessarily known the moment work is physically complete. Actual costs accrue as work proceeds, but variation valuations, final claims and outstanding liabilities must be reconciled in the final account first.</p>",
            "formulas": [
              {
                "label": "Percentage deviation",
                "tex": "\\Delta\\% = 100 \\times \\dfrac{\\text{new} - \\text{base}}{\\text{base}}"
              }
            ],
            "example": {
              "title": "Worked examples: two revision triggers and an accuracy check",
              "html": "<ol><li>Sanction Rs. 1,000,000 and forecast Rs. 1,080,000: the rise is Rs. 80,000, which is 8% of the sanction and above the stated 5%, so a revised estimate is triggered.</li><li>Sanction NRs 20 million and forecast NRs 21.2 million: 100 × 1.2/20 = 6%, so a revised estimate is again required.</li><li>Estimate Rs. 5.4 million against an actual cost of Rs. 5.0 million, on the actual-cost base: 100 × 0.4/5.0 = 8% above actual. On the estimate base the figure would be 7.41%, which describes a different comparison.</li></ol>"
            },
            "points": [
              {
                "html": "Against a sanctioned Rs. 1,000,000, a forecast of Rs. 1,080,000 is an 8% overrun, which triggers a revised estimate under a stated more-than-5% rule.",
                "sources": [
                  {
                    "id": "CAP4-01-00120",
                    "label": "p. 5; topic 1 point 113"
                  }
                ]
              },
              {
                "html": "With sanction at NRs 20 million and a forecast of NRs 21.2 million, prepare a revised estimate because the increase is 6%, above the stated 5% threshold.",
                "sources": [
                  {
                    "id": "CAP4-10-00057",
                    "label": "p. 39; topic 10 point 56"
                  }
                ]
              },
              {
                "html": "An estimate of Rs. 5.4 million against an actual cost of Rs. 5.0 million exceeds the actual cost by 8% when actual cost is the comparison base.",
                "sources": [
                  {
                    "id": "CAP4-01-00124",
                    "label": "p. 5; topic 1 point 118"
                  }
                ]
              },
              {
                "html": "Physical completion does not fix the final cost: while variation valuations and final claims are unsettled, the final cost awaits reconciliation of outstanding liabilities.",
                "sources": [
                  {
                    "id": "CAP4-10-00065",
                    "label": "p. 39; topic 10 point 64"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00120",
                "label": "p. 5; topic 1 point 113"
              },
              {
                "id": "CAP4-10-00057",
                "label": "p. 39; topic 10 point 56"
              },
              {
                "id": "CAP4-01-00124",
                "label": "p. 5; topic 1 point 118"
              },
              {
                "id": "CAP4-10-00065",
                "label": "p. 39; topic 10 point 64"
              }
            ]
          },
          {
            "id": "dry-volume-and-cement-bags",
            "title": "Dry volume of concrete and theoretical cement bags",
            "html": "<p>Loose dry ingredients occupy more volume than the concrete they make, because fine particles fill voids and the mix consolidates. Estimators therefore apply a <em>dry-volume factor</em> to the finished volume, often quoted as an increase of 50 to 55%. The factor actually adopted must be stated; it is an estimating convention, not a physical constant or a substitute for measured batch yield.</p><p>For a nominal mix proportioned by loose volume, each ingredient takes its share of the dry volume in proportion to its part of the mix. Cement volume then converts to mass through its loose bulk density, and mass to 50 kg bags. Buying whole bags is a separate procurement decision.</p><p>The same density fixes the bulk volume of one bag. That is a loose volume including the air between particles; particle density would give the much smaller volume of the solid grains alone.</p>",
            "formulas": [
              {
                "label": "Dry loose volume",
                "tex": "V_{\\text{dry}} = f \\times V",
                "where": "<p>\\(f\\) is the adopted dry-volume factor and \\(V\\) the finished concrete volume.</p>"
              },
              {
                "label": "Volume of one ingredient",
                "tex": "V_i = V_{\\text{dry}} \\times \\dfrac{p_i}{\\sum p}",
                "where": "<p>\\(p_i\\) is that ingredient's part of the nominal mix.</p>"
              },
              {
                "label": "Cement bags",
                "tex": "n = \\dfrac{\\rho_b V_c}{50}",
                "where": "<p>\\(\\rho_b\\) is the loose bulk density of cement in kg/m³ and \\(V_c\\) its loose volume.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: dry volume, cement bags and one bag's volume",
              "html": "<p>Dry volume for 2.0 m³ of concrete with a factor of 1.54: \\(1.54 \\times 2.0 = 3.08\\ \\text{m}^3\\).</p><p>Cement for 1.00 m³ of 1:1.5:3 concrete, whose parts sum to 5.5, with loose cement at 1,440 kg/m³:</p>\\[\\begin{aligned}V_c &amp;= 1.54/5.5 = 0.28\\ \\text{m}^3 \\\\ m_c &amp;= 0.28 \\times 1440 = 403.2\\ \\text{kg} \\\\ n &amp;= 403.2/50 = 8.064 \\approx 8.06\\end{aligned}\\]<p>That is 8.06 bags before rounding; sand takes 0.42 m³ and coarse aggregate 0.84 m³. One 50 kg bag at the same density occupies 50/1,440 = 0.0347 m³.</p>"
            },
            "points": [
              {
                "html": "With an adopted dry-volume factor of 1.54, 2.0 m³ of finished concrete needs 3.08 m³ of dry loose ingredients.",
                "sources": [
                  {
                    "id": "CAP4-05-00026",
                    "label": "p. 20; topic 5 point 25"
                  }
                ]
              },
              {
                "html": "With a 1.54 dry-volume factor, loose cement at 1,440 kg/m³ and 50 kg bags, 1.00 m³ of 1:1.5:3 concrete needs a theoretical 8.06 bags before procurement rounding.",
                "sources": [
                  {
                    "id": "CAP4-01-00110",
                    "label": "p. 5; topic 1 point 103"
                  }
                ]
              },
              {
                "html": "One 50 kg bag of cement occupies about 0.0347 m³ of bulk volume when its loose bulk density is taken as 1,440 kg/m³.",
                "sources": [
                  {
                    "id": "CAP4-01-00119",
                    "label": "p. 5; topic 1 point 112"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-05-00026",
                "label": "p. 20; topic 5 point 25"
              },
              {
                "id": "CAP4-01-00110",
                "label": "p. 5; topic 1 point 103"
              },
              {
                "id": "CAP4-01-00119",
                "label": "p. 5; topic 1 point 112"
              }
            ]
          },
          {
            "id": "water-and-cement-by-mass",
            "title": "Water and cement quantities by mass",
            "html": "<p>The <em>water-cement ratio</em> is a ratio of masses, so a volume of loose cement must first be converted to mass using its bulk density. Water mass then follows from the ratio, and 1 kg of water occupies 1 L. Loose bulk density must not be confused with the particle density of cement.</p><p>When the total batch mass is known, a <em>mass balance</em> gives the cement directly. Subtract the aggregate from the batch mass to leave cement plus water, then split that remainder using the ratio. Dividing the whole remainder by 50, or forgetting that water shares it, gives a wrong bag count.</p><p>Both methods ignore admixtures, entrained air and any other constituents unless they are stated, and both need consistent mass units throughout.</p>",
            "formulas": [
              {
                "label": "Water from the water-cement ratio",
                "tex": "m_w = (w/c)\\, m_c"
              },
              {
                "label": "Mass balance for cement",
                "tex": "m_c = \\dfrac{m_{\\text{batch}} - m_{\\text{agg}}}{1 + w/c}"
              }
            ],
            "example": {
              "title": "Worked examples: water volume and a mass balance",
              "html": "<p>For 2.00 m³ of loose cement at 1,440 kg/m³ and a ratio of 0.80:</p>\\[\\begin{aligned}m_c &amp;= 2.00 \\times 1440 = 2880\\ \\text{kg} \\\\ m_w &amp;= 0.80 \\times 2880 = 2304\\ \\text{kg}\\end{aligned}\\]<p>That is 2,304 L of water. For a 2 m³ batch at 2,350 kg/m³ with 3,860 kg of aggregate and a ratio of 0.40:</p>\\[\\begin{aligned}m_c &amp;= \\dfrac{4700 - 3860}{1.40} = 600\\ \\text{kg} \\\\ n &amp;= 600/50 = 12\\end{aligned}\\]<p>That is 12 bags of cement, and the water is 240 kg.</p>"
            },
            "points": [
              {
                "html": "Two cubic metres of loose cement at 1,440 kg/m³ weigh 2,880 kg, so a mass ratio of 0.80 calls for 2,304 kg, that is 2,304 L, of mixing water.",
                "sources": [
                  {
                    "id": "CAP4-01-00117",
                    "label": "p. 5; topic 1 point 110"
                  }
                ]
              },
              {
                "html": "A 2 m³ batch at 2,350 kg/m³ with 3,860 kg of aggregate and a water-cement ratio of 0.40 contains 600 kg of cement, which is 12 bags of 50 kg.",
                "sources": [
                  {
                    "id": "CAP4-01-00115",
                    "label": "p. 5; topic 1 point 108"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00117",
                "label": "p. 5; topic 1 point 110"
              },
              {
                "id": "CAP4-01-00115",
                "label": "p. 5; topic 1 point 108"
              }
            ]
          },
          {
            "id": "binding-wire-allowance",
            "title": "Reinforcement allowances: binding wire",
            "html": "<p>Estimates allow <em>binding wire</em> for tying reinforcement as a percentage of the reinforcement mass. The capsule's allowance of 1 kg per quintal equals 1%, because one metric quintal is 100 kg.</p><p>Unit slips create the usual errors: treating a quintal as 10 kg or 1,000 kg shifts the result by a factor of ten. Actual consumption depends on bar sizes, spacing, the tie pattern and wastage, so the allowance is an estimating assumption, not a structural requirement or a consumption law for every reinforcement cage.</p>",
            "formulas": [
              {
                "label": "Binding-wire allowance",
                "tex": "m_{\\text{wire}} = 0.01 \\times m_{\\text{steel}}",
                "where": "<p>equivalent to 1 kg per quintal of 100 kg.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: two reinforcement quantities",
              "html": "<ul><li>600 kg of reinforcement: 600/100 × 1 = 6 kg of wire.</li><li>750 kg of reinforcement: 0.01 × 750 = 7.5 kg of wire.</li></ul><p>Both apply the same 1% allowance to the stated reinforcement mass.</p>"
            },
            "points": [
              {
                "html": "At 1 kg of binding wire per quintal of 100 kg, 600 kg of reinforcement is allowed 6 kg of wire.",
                "sources": [
                  {
                    "id": "CAP4-01-00111",
                    "label": "p. 5; topic 1 point 104"
                  }
                ]
              },
              {
                "html": "A binding-wire allowance of 1% of reinforcement mass budgets 7.5 kg of wire for 750 kg of reinforcement.",
                "sources": [
                  {
                    "id": "CAP4-05-00045",
                    "label": "p. 20; topic 5 point 44"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00111",
                "label": "p. 5; topic 1 point 104"
              },
              {
                "id": "CAP4-05-00045",
                "label": "p. 20; topic 5 point 44"
              }
            ]
          },
          {
            "id": "masonry-lengths-and-brick-volume",
            "title": "Measuring masonry: long-wall short-wall method and brick volume",
            "html": "<p>The <em>long-wall short-wall method</em> avoids double-counting the corners of a building. Long walls are measured out-to-out and short walls in-to-in. For a simple rectangular course of width b, the long wall is the centre-line length plus b and the short wall is the centre-line length minus b. Recalculate for every course whose width changes, such as each footing step.</p><p>Unit volumes need careful conversion: turn each dimension into metres before multiplying. The actual brick size excludes mortar, and counting bricks in masonry also needs the specified joints and allowances. Misplacing one decimal gives answers ten times too large or too small.</p>",
            "formulas": [
              {
                "label": "Long walls, out-to-out",
                "tex": "L_{\\text{long}} = L_c + b"
              },
              {
                "label": "Short walls, in-to-in",
                "tex": "L_{\\text{short}} = L_c - b",
                "where": "<p>\\(L_c\\) is the centre-line length and \\(b\\) the course width.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: wall lengths and one brick",
              "html": "<p>Centre-line lengths 6.0 m and 4.0 m with a 0.30 m course:</p><ul><li>long wall: 6.0 + 0.30 = 6.30 m;</li><li>short wall: 4.0 − 0.30 = 3.70 m.</li></ul><p>Check: 2 × 6.30 + 2 × 3.70 = 20.0 m, equal to the centre-line perimeter 2 × (6.0 + 4.0). A brick of 240 mm × 115 mm × 57 mm has volume</p>\\[\\begin{aligned}V &amp;= 0.240 \\times 0.115 \\times 0.057 \\\\ &amp;= 0.0015732\\ \\text{m}^3\\end{aligned}\\]"
            },
            "points": [
              {
                "html": "With centre-line lengths of 6.0 m and 4.0 m and a 0.30 m course, the long wall is 6.30 m out-to-out and the short wall 3.70 m in-to-in.",
                "sources": [
                  {
                    "id": "CAP4-01-00112",
                    "label": "p. 5; topic 1 point 105"
                  }
                ]
              },
              {
                "html": "A brick with stipulated actual dimensions of 240 mm × 115 mm × 57 mm, without mortar, has a geometric volume of 0.0015732 m³.",
                "sources": [
                  {
                    "id": "CAP4-01-00121",
                    "label": "p. 5; topic 1 point 115"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00112",
                "label": "p. 5; topic 1 point 105"
              },
              {
                "id": "CAP4-01-00121",
                "label": "p. 5; topic 1 point 115"
              }
            ]
          },
          {
            "id": "measurement-units-and-specifications",
            "title": "Units of measurement and the role of specifications",
            "html": "<p>A bill of quantities describes each item and its unit, and the unit follows the governing measurement specification. Thin <em>half-brick partition walls</em> are commonly billed by area in m<sup>2</sup>, with the thickness fixed in the item description, whereas thicker masonry is usually measured by volume in m<sup>3</sup>.</p><p>Shallow <em>surface dressing</em>, meaning clearing and trimming across a defined plan extent with no separately measured excavation, is likewise measured by area; deeper excavation may be a separate volume item. The contract defines depth limits, inclusions and exclusions.</p><p>A quantity and a rate say nothing about quality. The <em>technical specifications</em> define materials, mix proportions, surface preparation, workmanship, procedures and acceptance criteria, and they are coordinated with the drawings and the bill of quantities. Only the specification tells a contractor which mortar, preparation and acceptance tests apply to an item of plaster.</p>",
            "points": [
              {
                "html": "A half-brick partition billed as an area item, with its thickness stated separately in the description, is measured in m<sup>2</sup>.",
                "sources": [
                  {
                    "id": "CAP4-01-00116",
                    "label": "p. 5; topic 1 point 109"
                  }
                ]
              },
              {
                "html": "Shallow surface dressing defined over a stated plan extent, with no measured excavation, is measured by area in square metres.",
                "sources": [
                  {
                    "id": "CAP4-01-00123",
                    "label": "p. 5; topic 1 point 117"
                  }
                ]
              },
              {
                "html": "The mortar proportions, surface preparation and acceptance criteria for plaster listed in a BOQ are normally supplied by the technical specifications.",
                "sources": [
                  {
                    "id": "CAP4-10-00063",
                    "label": "p. 39; topic 10 point 62"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00116",
                "label": "p. 5; topic 1 point 109"
              },
              {
                "id": "CAP4-01-00123",
                "label": "p. 5; topic 1 point 117"
              },
              {
                "id": "CAP4-10-00063",
                "label": "p. 39; topic 10 point 62"
              }
            ]
          },
          {
            "id": "labour-output-and-crew-days",
            "title": "Labour output and crew-days in scheduling",
            "html": "<p>Labour requirement follows from quantity and output: divide the quantity by the output per labour-day. The output must name the unit of labour and the support it assumes. Multiplying instead of dividing is the common slip.</p><p>Such outputs are assumptions tied to crew composition and conditions. Access, material handling, wall details, mixing and transport all change productivity. An output of 5 m³ of concrete per day describes a supported crew with mixing and transport, not a single unaided mason, and it is not an intrinsic property of the mix proportion.</p>",
            "formulas": [
              {
                "label": "Labour requirement",
                "tex": "N = \\dfrac{Q}{q}",
                "where": "<p>\\(Q\\) is the quantity of work and \\(q\\) the assumed output per mason-day or crew-day.</p>"
              }
            ],
            "example": {
              "title": "Worked examples: brickwork and concrete",
              "html": "<ul><li>Foundation brickwork at an assumed 1.25 m³ per mason-day, helpers supplied: 10/1.25 = 8 mason-days for 10 m³.</li><li>1:2:4 concrete at an assumed 5.0 m³ per supported crew-day: 20/5.0 = 4 crew-days for 20 m³.</li></ul>"
            },
            "points": [
              {
                "html": "At an assumed 1.25 m³ of foundation brickwork per mason-day, with helpers supplied, 10 m³ needs 8 mason-days.",
                "sources": [
                  {
                    "id": "CAP4-01-00113",
                    "label": "p. 5; topic 1 point 106"
                  }
                ]
              },
              {
                "html": "At an assumed 5.0 m³ of 1:2:4 concrete per supported crew-day, 20 m³ needs 4 crew-days.",
                "sources": [
                  {
                    "id": "CAP4-01-00118",
                    "label": "p. 5; topic 1 point 111"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00113",
                "label": "p. 5; topic 1 point 106"
              },
              {
                "id": "CAP4-01-00118",
                "label": "p. 5; topic 1 point 111"
              }
            ]
          },
          {
            "id": "rate-analysis-allowances",
            "title": "Rate-analysis allowances: small tools and office overheads",
            "html": "<p>Rate analysis adds allowances as percentages of a defined base, and the base is where most errors occur. Read the schedule and apply each percentage to its stated base only: a tools allowance on unskilled labour is not a percentage of total labour.</p><p>A small-tools allowance does not automatically cover separately priced major plant, and real schedules may prescribe different allowances or cost equipment directly. Overheads such as office-management expense are entered once on their stated base; double counting them inflates a rate just as omitting them deflates it.</p><p>The 3% and 4% figures here are norms supplied with each exercise, not verified current rate-analysis rules.</p>",
            "formulas": [
              {
                "label": "Percentage allowance",
                "tex": "\\text{allowance} = p \\times \\text{stated base}"
              }
            ],
            "example": {
              "title": "Worked examples: three allowances",
              "html": "<ul><li>Tools at 3% of unskilled labour, with unskilled labour Rs. 20,000 and skilled Rs. 30,000: 0.03 × 20,000 = Rs. 600.</li><li>The same norm with unskilled labour NRs 4,000 and skilled NRs 6,000 per unit: 0.03 × 4,000 = NRs 120 per unit; 3% of all labour would give NRs 300, a different basis.</li><li>Office management at 4% of a NRs 25 million direct-cost base: 0.04 × 25 = NRs 1.00 million, entered once.</li></ul>"
            },
            "points": [
              {
                "html": "A schedule allowing tools at 3% of unskilled labour gives Rs. 600 when unskilled labour costs Rs. 20,000, whatever the skilled labour cost.",
                "sources": [
                  {
                    "id": "CAP4-01-00122",
                    "label": "p. 5; topic 1 point 116"
                  }
                ]
              },
              {
                "html": "With small tools at 3% of unskilled labour and unskilled labour at NRs 4,000 per unit, the allowance is NRs 120 per unit.",
                "sources": [
                  {
                    "id": "CAP4-10-00122",
                    "label": "p. 40; topic 10 point 115"
                  }
                ]
              },
              {
                "html": "Office management allowed at 4% of a NRs 25 million direct-cost base is NRs 1.00 million, entered once without a second overhead allowance.",
                "sources": [
                  {
                    "id": "CAP4-10-00066",
                    "label": "p. 39; topic 10 point 65"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00122",
                "label": "p. 5; topic 1 point 116"
              },
              {
                "id": "CAP4-10-00122",
                "label": "p. 40; topic 10 point 115"
              },
              {
                "id": "CAP4-10-00066",
                "label": "p. 39; topic 10 point 65"
              }
            ]
          },
          {
            "id": "valuation-salvage-and-forced-sale",
            "title": "Valuation: fair value, salvage value and forced-sale value",
            "html": "<p><em>Valuation</em> estimates the fair value of an existing property for a stated purpose at a specified date, using evidence such as its condition, income and market transactions. It differs from an estimate, which predicts construction cost, and from rate analysis, which builds a unit rate; neither automatically equals market value.</p><table><thead><tr><th scope='col'>Term</th><th scope='col'>Meaning in building valuation</th></tr></thead><tbody><tr><th scope='row'>Salvage value</th><td>Value at the end of useful life, sold intact without dismantling</td></tr><tr><th scope='row'>Scrap value</th><td>Value of the materials recovered after dismantling</td></tr><tr><th scope='row'>Distress or forced-sale value</th><td>Price when a property must be sold at once under pressure, with inadequate market exposure</td></tr><tr><th scope='row'>Market value</th><td>Price expected in an orderly sale with normal exposure and bargaining</td></tr></tbody></table><p>A forced sale usually depresses the price, but there is no universal fixed percentage reduction from market value. Engineering-economy usage may define net disposal value differently, so always state the valuation basis being used.</p>",
            "points": [
              {
                "html": "Judging what an existing property is fairly worth on a stated date, from its condition, income and market evidence, is valuation, not estimating or rate analysis.",
                "sources": [
                  {
                    "id": "CAP4-01-00114",
                    "label": "p. 5; topic 1 point 107"
                  }
                ]
              },
              {
                "html": "Under the building-valuation convention, the value of a property at the end of its useful life, sold intact rather than dismantled, is its salvage value.",
                "sources": [
                  {
                    "id": "CAP4-10-00019",
                    "label": "p. 38; topic 10 point 19"
                  }
                ]
              },
              {
                "html": "An immediate sale under financial pressure with inadequate market exposure yields a distress or forced-sale value, with no fixed percentage cut from market value.",
                "sources": [
                  {
                    "id": "CAP4-10-00162",
                    "label": "p. 41; topic 10 point 153"
                  }
                ]
              }
            ],
            "sources": [
              {
                "id": "CAP4-01-00114",
                "label": "p. 5; topic 1 point 107"
              },
              {
                "id": "CAP4-10-00019",
                "label": "p. 38; topic 10 point 19"
              },
              {
                "id": "CAP4-10-00162",
                "label": "p. 41; topic 10 point 153"
              }
            ]
          }
        ],
        "formulaSheet": [
          {
            "label": "Plinth-area estimate",
            "tex": "C = A_{\\text{p}} \\times r"
          },
          {
            "label": "Percentage deviation",
            "tex": "\\Delta\\% = 100 \\times \\dfrac{\\text{new} - \\text{base}}{\\text{base}}",
            "note": "Always name the comparison base."
          },
          {
            "label": "Dry loose volume",
            "tex": "V_{\\text{dry}} = f \\times V"
          },
          {
            "label": "Volume of one ingredient",
            "tex": "V_i = V_{\\text{dry}} \\times \\dfrac{p_i}{\\sum p}"
          },
          {
            "label": "Cement mass and bags",
            "tex": "m_c = \\rho_b V_c, \\quad n = \\dfrac{m_c}{50}"
          },
          {
            "label": "Bulk volume of one 50 kg bag",
            "tex": "V_{\\text{bag}} = \\dfrac{50}{\\rho_b}",
            "note": "0.0347 m³ at 1,440 kg/m³."
          },
          {
            "label": "Water from the water-cement ratio",
            "tex": "m_w = (w/c)\\, m_c"
          },
          {
            "label": "Mass balance for cement",
            "tex": "m_c = \\dfrac{m_{\\text{batch}} - m_{\\text{agg}}}{1 + w/c}"
          },
          {
            "label": "Long-wall short-wall lengths",
            "tex": "L_{\\text{long}} = L_c + b, \\quad L_{\\text{short}} = L_c - b"
          },
          {
            "label": "Labour requirement",
            "tex": "N = \\dfrac{Q}{q}"
          },
          {
            "label": "Percentage allowance",
            "tex": "\\text{allowance} = p \\times \\text{stated base}"
          },
          {
            "label": "Binding-wire allowance",
            "tex": "m_{\\text{wire}} = 0.01 \\times m_{\\text{steel}}"
          }
        ],
        "cautions": [
          {
            "id": "caution-carpet-area-ratio",
            "status": "review",
            "prompt": "The carpet area of a residential building is 50 to 65% of plinth area",
            "html": "<p>The range is at most a preliminary planning heuristic, not a measurement rule. Carpet and plinth areas include different parts of a building, and their ratio varies with walls, circulation and layout, so any percentage used must be stated as an assumption.</p>",
            "sources": [
              {
                "id": "CAP4-01-00055",
                "label": "p. 3; topic 1 point 52"
              }
            ]
          },
          {
            "id": "caution-eight-bags-per-cubic-metre",
            "status": "review",
            "prompt": "For 1 m3 of 1:1.5:3 PCC, 8 bags of cement are required",
            "html": "<p>Eight bags is an approximation that rests on unstated values. With a 1.54 dry-volume factor and loose cement at 1,440 kg/m³, the theoretical figure is 8.06 bags before rounding; the factor, the density and the rounding step must all be explicit.</p>",
            "sources": [
              {
                "id": "CAP4-01-00110",
                "label": "p. 5; topic 1 point 103"
              }
            ]
          },
          {
            "id": "caution-mason-output-brickwork",
            "status": "review",
            "prompt": "Brickwork with mortar in foundation per mason per day is 1.25 m3",
            "html": "<p>The stated outturn is used only as a scheduling assumption with the required helpers supplied. It is not a verified universal labour norm, and actual output depends on wall details, access, handling and workmanship.</p>",
            "sources": [
              {
                "id": "CAP4-01-00113",
                "label": "p. 5; topic 1 point 106"
              }
            ]
          },
          {
            "id": "caution-half-brick-wall-unit",
            "status": "review",
            "prompt": "A half brick wall is not measured in cubic metres",
            "html": "<p>The negative statement is replaced by an explicit basis: thin partition masonry is commonly an area item with its thickness fixed in the description. It is not an exceptionless rule; the governing measurement specification decides the billing unit.</p>",
            "sources": [
              {
                "id": "CAP4-01-00116",
                "label": "p. 5; topic 1 point 109"
              }
            ]
          },
          {
            "id": "caution-water-volume-missing-density",
            "status": "review",
            "prompt": "If w/c = 0.8 and the volume of cement is 2 m3, the water required is 2304 L",
            "html": "<p>The 2,304 L result needs loose cement to weigh 1,440 kg/m³, a bulk density the capsule omits. The water-cement ratio is by mass, so the cement volume must first be converted to mass before the ratio is applied.</p>",
            "sources": [
              {
                "id": "CAP4-01-00117",
                "label": "p. 5; topic 1 point 110"
              }
            ]
          },
          {
            "id": "caution-concrete-output-per-mason",
            "status": "review",
            "prompt": "The expected outturn of 1:2:4 cement concrete per mason per day is 5.0 m3",
            "html": "<p>The capsule's labour unit is incomplete. The figure is read as the output of a supported, mason-led crew with mixing and transport, and 5 m³ per day is treated as a stated scheduling assumption rather than an established norm.</p>",
            "sources": [
              {
                "id": "CAP4-01-00118",
                "label": "p. 5; topic 1 point 111"
              }
            ]
          },
          {
            "id": "caution-cement-bag-volume",
            "status": "review",
            "prompt": "The volume of cement in a 50 kg bag is 0.0347 m3",
            "html": "<p>0.0347 m³ holds only when loose cement is taken at 1,440 kg/m³. It is not an invariant bag dimension: a different bulk density changes it, and particle density would give the far smaller solid-grain volume.</p>",
            "sources": [
              {
                "id": "CAP4-01-00119",
                "label": "p. 5; topic 1 point 112"
              }
            ]
          },
          {
            "id": "caution-revised-estimate-five-percent",
            "status": "review",
            "prompt": "A revised estimate is prepared when the original sanctioned estimate differs by more than 5%",
            "html": "<p>The source does not establish a current Nepal 5% rule, so the threshold is supplied explicitly for the exercise. Actual approval rules depend on the authority, the contract and the applicable procedures.</p>",
            "sources": [
              {
                "id": "CAP4-01-00120",
                "label": "p. 5; topic 1 point 113"
              }
            ]
          },
          {
            "id": "caution-nbc-brick-size",
            "status": "review",
            "prompt": "As per NBC, the standard size of brick is 240 mm × 115 mm × 57 mm",
            "html": "<p>The dimensions are used here as stipulated values. The capsule gives no NBC edition or clause, so the attribution to the building code should be verified before any code-based reuse.</p>",
            "sources": [
              {
                "id": "CAP4-01-00121",
                "label": "p. 5; topic 1 point 115"
              }
            ]
          },
          {
            "id": "caution-tools-three-percent-schedule",
            "status": "review",
            "prompt": "In rate analysis, the cost of tools and equipment is taken as 3% of unskilled labour cost",
            "html": "<p>The 3% allowance applies only because the supplied schedule states it; it is not verified as a current general rate-analysis rule. Other schedules may prescribe different allowances or cost plant directly.</p>",
            "sources": [
              {
                "id": "CAP4-01-00122",
                "label": "p. 5; topic 1 point 116"
              }
            ]
          },
          {
            "id": "caution-estimate-versus-actual-wording",
            "status": "corrected",
            "prompt": "The estimated cost should not be greater than 10% of the actual cost of the project",
            "html": "<p>The capsule wording is defective: read literally, it would cap the estimate at one tenth of the actual cost. No universal accuracy tolerance is asserted here; the deviation is defined explicitly as a percentage of a named comparison base.</p>",
            "sources": [
              {
                "id": "CAP4-01-00124",
                "label": "p. 5; topic 1 point 118"
              }
            ]
          },
          {
            "id": "caution-dry-volume-increase",
            "status": "review",
            "prompt": "Cement, sand and coarse aggregate are increased by 50 to 55% to get the dry volume of concrete",
            "html": "<p>The 50 to 55% increase is an approximate estimating allowance for void filling and consolidation, so the factor actually adopted must be stated. It is not an exact physical constant or a replacement for measured batch yield.</p>",
            "sources": [
              {
                "id": "CAP4-05-00026",
                "label": "p. 20; topic 5 point 25"
              }
            ]
          },
          {
            "id": "caution-binding-wire-quintal",
            "status": "review",
            "prompt": "The binding wire required for 1 quintal of reinforcement work is 1 kg",
            "html": "<p>One kilogram per quintal, equal to 1% by mass, is treated as an explicitly adopted estimating allowance, not an exact quantity for every reinforcement cage; bar sizes, tie pattern and wastage change actual use.</p>",
            "sources": [
              {
                "id": "CAP4-05-00045",
                "label": "p. 20; topic 5 point 44"
              }
            ]
          },
          {
            "id": "caution-revised-estimate-fraction",
            "status": "review",
            "prompt": "A revised estimate is prepared when the sanctioned detailed estimate is exceeded by 0.05",
            "html": "<p>The fraction 0.05 is read as 5%, but it is not asserted as universal current Nepal law; the governing agency rule is an explicit assumption of the calculation. A revised estimate also seeks approval rather than authorising extra spending by itself.</p>",
            "sources": [
              {
                "id": "CAP4-10-00057",
                "label": "p. 39; topic 10 point 56"
              }
            ]
          },
          {
            "id": "caution-actual-cost-at-completion",
            "status": "review",
            "prompt": "The actual cost of a building is found at the time of completion of the work",
            "html": "<p>Physical completion is not necessarily financial closeout. Actual costs are recorded as they are incurred, but the definitive final cost awaits reconciliation of variations, claims and liabilities in the final account.</p>",
            "sources": [
              {
                "id": "CAP4-10-00065",
                "label": "p. 39; topic 10 point 64"
              }
            ]
          },
          {
            "id": "caution-office-management-four-percent",
            "status": "review",
            "prompt": "4% of total project cost is typically estimated for office management expenses",
            "html": "<p>The fixed 4% is retained only as a supplied assumption with a defined base; it is not a universal office-management percentage, and double counting with other overhead allowances must be avoided.</p>",
            "sources": [
              {
                "id": "CAP4-10-00066",
                "label": "p. 39; topic 10 point 65"
              }
            ]
          },
          {
            "id": "caution-tools-three-percent-norm",
            "status": "review",
            "prompt": "The cost of tools and equipment is taken as 3% of unskilled labour cost",
            "html": "<p>Three per cent of unskilled labour is an adopted norm, not universal Nepal rate-analysis law. It covers small tools rather than separately priced major equipment, which is costed on its own.</p>",
            "sources": [
              {
                "id": "CAP4-10-00122",
                "label": "p. 40; topic 10 point 115"
              }
            ]
          }
        ],
        "gaps": [
          "Detailed quantity take-off of complete buildings, abstracts of cost and contingency provisions are not tested by these capsule items.",
          "Types of specifications, such as general versus detailed, are not covered; only the purpose of technical specifications appears.",
          "Valuation methods such as rental capitalisation, depreciation and sinking-fund calculations have no capsule question here.",
          "Numerical allowances, outputs and thresholds are treated as supplied assumptions; current Nepal norms and legal rules are not verified."
        ]
      }
    });
})();
