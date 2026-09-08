(function () {
  "use strict";

  const registry = window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
  Object.assign(registry, {
    ACiE0205: {
      code: "ACiE0205",
      questionCount: 40,
      formulaSheet: "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation and basis</th></tr></thead><tbody><tr><th scope='row'>Spread-footing area</th><td>A ≈ V/p<sub>allow</sub> for a service load and allowable pressure.</td></tr><tr><th scope='row'>Combined-footing resultant</th><td>x<sub>R</sub> = Σ(V<sub>i</sub>x<sub>i</sub>)/ΣV<sub>i</sub>; plan chosen so the resultant is central.</td></tr><tr><th scope='row'>Rankine minimum depth</th><td>D = (p/γ)[(1 − sinφ)/(1 + sinφ)]<sup>2</sup>.</td></tr><tr><th scope='row'>Pile capacity</th><td>Q<sub>u</sub> = A<sub>b</sub>q<sub>b</sub> + ΣA<sub>s,i</sub>f<sub>s,i</sub> (base plus shaft).</td></tr></tbody></table>",
      blocks: [
        {
          id: "foundation-functions-and-classification",
          title: "Foundation functions and shallow/deep classification",
          html: "<p>A <strong>foundation</strong> transfers structural actions to ground while controlling bearing failure, sliding, uplift and damaging movement. Spreading load is only one function: acceptable settlement and stability are equally necessary.</p>" +
            "<table><thead><tr><th scope='col'>Class</th><th scope='col'>Load-transfer concept</th></tr></thead><tbody>" +
            "<tr><th scope='row'>Shallow</th><td>Spread footings and ordinary mats transmit loads mainly through their bases near the surface.</td></tr>" +
            "<tr><th scope='row'>Deep</th><td>Piles, shafts and wells mobilise deeper ground through base resistance, shaft resistance, or both.</td></tr>" +
            "</tbody></table><p>D<sub>f</sub> is embedment to the base; B is footing width. D<sub>f</sub>/B ≤ 1 is a classical shallow-footing convention, not a universal classification boundary or fixed depth in metres. Crossing that ratio does not automatically create a pile.</p>",
          sources: [
            { id: "SOIL136-00064", set: 6, question: 45 },
            { id: "SOIL136-00065", set: 6, question: 46 },
            { id: "SOIL136-00394", set: 30, question: 43 },
            { id: "SOIL136-00395", set: 30, question: 44 }
          ]
        },
        {
          id: "foundation-investigation-and-selection",
          title: "What foundation investigation must establish",
          html: "<p>Selection joins the load schedule, column/wall layout and movement tolerance to the ground model. Investigation considers stratigraphy, fill, weak layers, groundwater variation, strength, compressibility, neighbouring foundations and erosion/scour or expansive-ground hazards. Logs, representative samples, appropriate field/laboratory tests and interpreted profiles are evidence, not interchangeable checkboxes.</p>" +
            "<p>Low SPT N can indicate loose sand, but soil identification, test corrections and layer thickness matter. Compaction may help suitable granular deposits; deep foundations may bypass weak layers. Neither follows automatically from N &lt; 5. Soil organisms are not a primary bearing parameter, but organic deposits and roots can matter.</p>",
          sources: [
            { id: "SOIL136-00392", set: 1, question: 48 },
            { id: "SOIL136-00436", set: 33, question: 41 }
          ]
        },
        {
          id: "spread-footings-and-pressure-area",
          title: "Spread footings and a first area calculation",
          html: "<p>An <strong>isolated spread footing</strong> supports one column; a <strong>strip footing</strong> supports a load-bearing wall continuously. A larger base reduces average pressure, but structural bending, shear, eccentricity and settlement still require assessment.</p>" +
            "<p>For concentric vertical service loading, <strong>A ≈ V/p<sub>allow</sub></strong>. V is force in kN, p<sub>allow</sub> pressure in kPa = kN/m<sup>2</sup>, and A is m<sup>2</sup>. Include relevant footing/backfill weights and keep gross or net conventions consistent.</p>" +
            "<p><strong>Illustrative added numbers:</strong> V = 600 kN and p<sub>allow</sub> = 150 kPa give A = 4 m<sup>2</sup>, or B = 2 m for a square. This is preliminary sizing, not a completed design.</p>",
          sources: [
            { id: "SOIL136-00067", set: 7, question: 36 },
            { id: "SOIL136-00388", set: 30, question: 38 },
            { id: "SOIL136-00396", set: 30, question: 45 },
            { id: "SOIL136-00397", set: 30, question: 46 }
          ]
        },
        {
          id: "combined-footing-resultants",
          title: "Combined footing shape follows the resultant",
          html: "<p>A <strong>combined footing</strong> supports two or more columns on one base. Closely spaced columns or a boundary can make separate centred pads impractical. For approximately uniform contact pressure, the base-area centroid should coincide with the vertical load resultant.</p>" +
            "<p><strong>x<sub>R</sub> = Σ(V<sub>i</sub>x<sub>i</sub>)/ΣV<sub>i</sub></strong>, with all distances from one datum. Equal symmetrically positioned loads suit a rectangle; a trapezoid can shift the area centroid towards a heavier column. Unequal loads do not forbid a rectangle if its position and dimensions accommodate the resultant.</p>",
          sources: [
            { id: "SOIL136-00070", set: 7, question: 39 },
            { id: "SOIL136-00389", set: 30, question: 39 },
            { id: "SOIL136-00403", set: 31, question: 37 },
            { id: "SOIL136-00409", set: 31, question: 43 }
          ]
        },
        {
          id: "strap-footing-load-path",
          title: "Strap footing: two pads linked by a beam",
          html: "<p>A <strong>strap or cantilever footing</strong> connects separate pads with a stiff beam that transfers moment and shear. It can balance an eccentric boundary-column footing through the neighbouring pad, particularly when a continuous combined base would be uneconomical.</p>",
          moreHtml: "<p>In the conventional idealisation, the strap <strong>does not bear on soil</strong>; reactions act under the pads. A beam intentionally supported by ground needs a different analysis. Long column spacing and unequal loads are possible selection factors, not sufficient reasons by themselves.</p>",
          sources: [
            { id: "DESI787-00168", set: 1, question: 30 },
            { id: "SOIL136-00063", set: 6, question: 44 },
            { id: "SOIL136-00402", set: 31, question: 36 },
            { id: "SOIL136-00412", set: 31, question: 46 },
            { id: "SOIL136-00413", set: 32, question: 35 }
          ]
        },
        {
          id: "mat-raft-options-and-limitations",
          title: "Mat/raft foundations: selection and forms",
          html: "<p>A <strong>mat or raft</strong> supports many columns/walls over much of a building footprint. Heavy loading, low allowable pressure, overlapping pads or variable ground can favour a raft. The bank's 50% pad-area rule is an economic screening convention, not a mandatory threshold.</p>",
          moreHtml: "<p>Forms include flat plates, plates thickened beneath columns, beam-and-slab mats and cellular/box rafts. A <strong>piled raft</strong> shares load with piles and is not simply a shallow mat. Raft stiffness may reduce differential settlement but cannot eliminate compression of deep weak layers.</p>",
          sources: [
            { id: "SOIL136-00068", set: 7, question: 37 },
            { id: "SOIL136-00069", set: 7, question: 38 },
            { id: "SOIL136-00414", set: 32, question: 36 },
            { id: "SOIL136-00428", set: 33, question: 33 }
          ]
        },
        {
          id: "rankine-foundation-depth-example",
          title: "Rankine depth expression: units and limitations",
          html: "<p>The bank uses the idealised cohesionless-ground expression <strong>D = (p/γ)[(1 − sin φ)/(1 + sin φ)]<sup>2</sup></strong>. Here p is bearing pressure in kN/m<sup>2</sup>, γ is unit weight in kN/m<sup>3</sup>, and D is metres.</p>" +
            "<p><strong>Bank worked example:</strong> p = 180 kPa, γ = 20 kN/m<sup>3</sup>, φ = 30°. The squared ratio is (1/3)<sup>2</sup>; D = 9/9 = <strong>1 m</strong>.</p>" +
            "<p>This Rankine calculation is not a modern site-depth prescription. Competent strata, groundwater, seasonal movement and scour can govern. A remembered 500 mm minimum establishes none of those conditions.</p>",
          sources: [
            { id: "SOIL136-00053", set: 6, question: 34 },
            { id: "SOIL136-00071", set: 7, question: 40 },
            { id: "SOIL136-00072", set: 7, question: 41 },
            { id: "SOIL136-00091", set: 8, question: 46 }
          ]
        },
        {
          id: "piles-groups-and-downdrag",
          title: "Pile transfer, group action and downdrag",
          html: "<p>End-bearing piles mobilise strong ground near the toe; friction piles mobilise shaft resistance, usually with some toe contribution. A cap can distribute loads and moments among a group, but single piles also exist. </p>",
          moreHtml: "<p>Overlapping stress zones mean group capacity and settlement cannot be inferred by simply multiplying one-pile results.</p><p><strong>Supplementary foundation concepts:</strong> under-reamed piles have enlarged bulbs that increase base/anchorage resistance; suitability for expansive-ground or uplift problems depends on the movement profile. <strong>Negative skin friction</strong> occurs when surrounding soil settles faster than the pile, producing downward drag rather than useful upward resistance.</p>",
          sources: [{ id: "SOIL136-00066", set: 7, question: 35 }]
        },
        {
          id: "wells-and-caisson-terminology",
          title: "Wells, shafts and caissons",
          html: "<table><thead><tr><th scope='col'>Foundation</th><th scope='col'>Distinguishing feature</th></tr></thead><tbody>" +
            "<tr><th scope='row'>Well/open caisson</th><td>Open during sinking; material is excavated internally. Steining is the permanent vertical wall.</td></tr>" +
            "<tr><th scope='row'>Box caisson</th><td>Closed bottom, usually open top; placed on a prepared bearing bed.</td></tr>" +
            "<tr><th scope='row'>Pneumatic caisson</th><td>Pressurised working chamber excludes water for excavation; specialised construction, not a site instruction.</td></tr>" +
            "</tbody></table><p>A drilled pier/shaft may be called a caisson in some usage, but it is not necessarily a sunk well. Shape selection considers pier dimensions, soil, sinking behaviour and cost. Wells are traditional bridge foundations in some regions, not universally the most common choice.</p>",
          sources: [
            { id: "SOIL136-00338", set: 26, question: 44 },
            { id: "SOIL136-00339", set: 26, question: 45 },
            { id: "SOIL136-00340", set: 26, question: 46 },
            { id: "SOIL136-00390", set: 30, question: 40 },
            { id: "SOIL136-00391", set: 30, question: 41 },
            { id: "SOIL136-00439", set: 33, question: 44 },
            { id: "SOIL136-00440", set: 33, question: 45 }
          ]
        },
        {
          id: "well-shapes-and-sinking",
          title: "Well shapes: symmetry versus pier geometry",
          html: "<p>Circular, rectangular, double-D and dumb-bell plans serve different pier layouts. Circular symmetry favours uniform sinking, but heterogeneous strata can still cause tilt. An elongated pier may require an uneconomically large circular diameter. </p>",
          moreHtml: "<p>Double-D wells have two D-shaped cells; they are not simply two complete circles. Economy depends on geometry and sinking conditions, not the name alone.</p>",
          sources: [
            { id: "SOIL136-00341", set: 26, question: 47 },
            { id: "SOIL136-00342", set: 26, question: 48 },
            { id: "SOIL136-00343", set: 27, question: 34 },
            { id: "SOIL136-00438", set: 33, question: 43 }
          ]
        },
        {
          id: "machine-foundation-actions",
          title: "Machine foundations carry static and dynamic actions",
          html: "<p>Machine weight produces static loading; operating imbalance, impacts or reciprocating motion produce dynamic actions. Bearing pressure alone does not assess vibration. The foundation-soil system also has stiffness, mass and damping; resonance and transmitted movement matter. The bank identifies the load classes but supplies no vibration-design calculation.</p>",
          sources: [{ id: "SOIL136-00393", set: 30, question: 42 }]
        }
      ],
      gaps: [
        "No complete foundation investigation report, borehole layout or site-specific selection comparison is supplied.",
        "Spread/mat structural sizing and settlement compatibility are not worked designs in this bank.",
        "Under-reaming, downdrag and group interaction above are supplementary concepts, not separately tested assigned questions."
      ],
      cautions: [
          {
              "id": "check-soil136-00053",
              "status": "review",
              "prompt": "Bearing stress is 180kN/m³, unit weight = 20kN/m³, internal angle of friction = 30 degree then according to Rankine's theory what is the min depth of foundation?",
              "html": "<p><strong>Rankine unit errors:</strong> the extracts misprint pressure as kN/m<sup>3</sup> or unit weight as kN/m<sup>2</sup>. </p><p>The corrected dimensions above are essential.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00053",
                      "set": 6,
                      "question": 34
                  }
              ]
          },
          {
              "id": "check-soil136-00063",
              "status": "review",
              "prompt": "When do strap footings are used in the foundation?",
              "html": "<p><strong>Footing shortcuts:</strong> unequal loads do not uniquely select a strap or trapezoid. </p>",
              "sources": [
                  {
                      "id": "SOIL136-00063",
                      "set": 6,
                      "question": 44
                  }
              ]
          },
          {
              "id": "check-soil136-00068",
              "status": "review",
              "prompt": "Mat foundation is provided when...",
              "html": "<p><strong>Raft qualification:</strong> variable ground and large pad coverage motivate comparison, not automatic adoption. </p><p>A piled raft is a combined load-sharing system.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00068",
                      "set": 7,
                      "question": 37
                  }
              ]
          },
          {
              "id": "check-soil136-00069",
              "status": "review",
              "prompt": "Which of the following is not among the common types of Mat foundation?",
              "html": "<p><strong>A piled raft is a load-sharing system.</strong> It combines raft and pile action. Whether a list calls it a mat type depends on the stated classification; it is not simply an ordinary unpiled flat raft.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00069",
                      "set": 7,
                      "question": 38
                  }
              ]
          },
          {
              "id": "check-soil136-00071",
              "status": "review",
              "prompt": "How much minimum depth below soil, footing is provided?",
              "html": "<p><strong>No universal 500 mm minimum.</strong> Founding depth depends on competent stratum, groundwater, erosion, frost where relevant, adjacent works and the applicable local requirements.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00071",
                      "set": 7,
                      "question": 40
                  }
              ]
          },
          {
              "id": "check-soil136-00072",
              "status": "review",
              "prompt": "The minimum depth of foundation, according to Rankine's formula will be: - (Given that q = 180 KN/m², γ = 20 KN/m² and Φ = 30°)",
              "html": "<p><strong>Repair units before calculating.</strong> In Rankine's expression, q is pressure in kN/m<sup>2</sup> and soil unit weight is in kN/m<sup>3</sup>. With 180, 20 and 30 degrees on those bases, the empirical depth is 1 m.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00072",
                      "set": 7,
                      "question": 41
                  }
              ]
          },
          {
              "id": "check-soil136-00091",
              "status": "review",
              "prompt": "The minimum depth of foundation, according to Rankine’s formula will be: - (Given that q = 180 KN/m², y = 20 KN/m² and Φ = 30°)",
              "html": "<p><strong>Repair units before calculating.</strong> In Rankine's expression, q is pressure in kN/m<sup>2</sup> and soil unit weight is in kN/m<sup>3</sup>. With 180, 20 and 30 degrees on those bases, the empirical depth is 1 m.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00091",
                      "set": 8,
                      "question": 46
                  }
              ]
          },
          {
              "id": "check-soil136-00339",
              "status": "review",
              "prompt": "What are the types of caissons that can be used as a foundation?",
              "html": "<p><strong>Caisson terminology:</strong> closed-bottom boxes and pneumatic chambers are distinct. </p>",
              "sources": [
                  {
                      "id": "SOIL136-00339",
                      "set": 26,
                      "question": 45
                  }
              ]
          },
          {
              "id": "check-soil136-00342",
              "status": "review",
              "prompt": "A disadvantage in using circular shape of well foundation is ______",
              "html": "<p><strong>Shape disadvantages need the loading and site.</strong> Circular wells can be efficient in some directions and restrictive in others. No generic shape label establishes a universal disadvantage or least-cost solution.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00342",
                      "set": 26,
                      "question": 48
                  }
              ]
          },
          {
              "id": "check-soil136-00343",
              "status": "review",
              "prompt": "The most economical shape, of a well for the construction of large pier is ______",
              "html": "<p>Pier/caisson synonyms, circular disadvantages, double-D economy and bridge popularity are context-dependent.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00343",
                      "set": 27,
                      "question": 34
                  }
              ]
          },
          {
              "id": "check-soil136-00389",
              "status": "review",
              "prompt": "How many types of combined footing are possible?",
              "html": "<p>Counting three combined-footing types depends on including straps in that family.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00389",
                      "set": 30,
                      "question": 39
                  }
              ]
          },
          {
              "id": "check-soil136-00391",
              "status": "review",
              "prompt": "Pier foundation is also called:",
              "html": "<p>Pier/caisson synonyms, circular disadvantages, double-D economy and bridge popularity are context-dependent.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00391",
                      "set": 30,
                      "question": 41
                  }
              ]
          },
          {
              "id": "check-soil136-00395",
              "status": "review",
              "prompt": "A foundation is said to be shallow if its depth is ______ than its width.",
              "html": "<p><strong>Depth-to-width is a classification guide.</strong> A shallow foundation transfers load near the surface; D<sub>f</sub>/B around one is a conventional distinction, not a universal mechanism boundary.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00395",
                      "set": 30,
                      "question": 44
                  }
              ]
          },
          {
              "id": "check-soil136-00402",
              "status": "review",
              "prompt": "When do strap footings are used in foundation?",
              "html": "<p><strong>Footing shortcuts:</strong> unequal loads do not uniquely select a strap or trapezoid. </p>",
              "sources": [
                  {
                      "id": "SOIL136-00402",
                      "set": 31,
                      "question": 36
                  }
              ]
          },
          {
              "id": "check-soil136-00403",
              "status": "review",
              "prompt": "When two column loads are unequal, which of the possible footing can be provided?",
              "html": "<p><strong>Footing shortcuts:</strong> unequal loads do not uniquely select a strap or trapezoid. </p><p>Counting three combined-footing types depends on including straps in that family.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00403",
                      "set": 31,
                      "question": 37
                  }
              ]
          },
          {
              "id": "check-soil136-00409",
              "status": "review",
              "prompt": "A combined footing may be rectangular in shape if both the columns carry ______.",
              "html": "<p><strong>Footing shortcuts:</strong> unequal loads do not uniquely select a strap or trapezoid. </p>",
              "sources": [
                  {
                      "id": "SOIL136-00409",
                      "set": 31,
                      "question": 43
                  }
              ]
          },
          {
              "id": "check-soil136-00428",
              "status": "review",
              "prompt": "The foundation that is used when the soil mass is sufficiently erratic?",
              "html": "<p><strong>Raft qualification:</strong> variable ground and large pad coverage motivate comparison, not automatic adoption. </p><p>A piled raft is a combined load-sharing system.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00428",
                      "set": 33,
                      "question": 33
                  }
              ]
          },
          {
              "id": "check-soil136-00436",
              "status": "review",
              "prompt": "If the penetration resistance N is less than 5, which of the following measures can be adopted?",
              "html": "<p><strong>SPT limitation:</strong> N &lt; 5 alone cannot establish soil type, allowable pressure or the appropriate improvement/foundation solution.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00436",
                      "set": 33,
                      "question": 41
                  }
              ]
          },
          {
              "id": "check-soil136-00440",
              "status": "review",
              "prompt": "______ forms the most common type of deep foundation for bridges?",
              "html": "<p><strong>Bridge foundation choice is site-dependent.</strong> Wells, caissons and piles are all used. A claimed most-common type requires a region and practice context, not a universal design rule.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00440",
                      "set": 33,
                      "question": 45
                  }
              ]
          }
      ]
    },
    ACiE0206: {
      code: "ACiE0206",
      questionCount: 76,
      formulaSheet: "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation and basis</th></tr></thead><tbody><tr><th scope='row'>Terzaghi (strip)</th><td>q<sub>u</sub> = cN<sub>c</sub> + qN<sub>q</sub> + 0.5γBN<sub>γ</sub>; N factors depend on φ.</td></tr><tr><th scope='row'>Undrained clay (strip)</th><td>q<sub>u</sub> = 5.7c<sub>u</sub> + q<sub>0</sub>.</td></tr><tr><th scope='row'>Water-table correction</th><td>γ' = γ<sub>sat</sub> − γ<sub>w</sub>; γ<sub>avg</sub> ≈ γ' + (d/B)(γ − γ').</td></tr><tr><th scope='row'>Subgrade reaction</th><td>k<sub>s</sub> = p/s.</td></tr><tr><th scope='row'>Total settlement</th><td>S = S<sub>i</sub> + S<sub>c</sub> + S<sub>s</sub>.</td></tr><tr><th scope='row'>Immediate settlement</th><td>S<sub>i</sub> = p<sub>net</sub>B(1 − ν<sup>2</sup>)I/E<sub>s</sub>.</td></tr><tr><th scope='row'>Primary consolidation (NC)</th><td>S<sub>c</sub> = HC<sub>c</sub>log<sub>10</sub>(σ'<sub>f</sub>/σ'<sub>0</sub>)/(1 + e<sub>0</sub>).</td></tr><tr><th scope='row'>Over-consolidation</th><td>OCR = σ'<sub>p</sub>/σ'<sub>v0</sub>.</td></tr><tr><th scope='row'>Time factor</th><td>T<sub>v</sub> = c<sub>v</sub>t/H<sub>dr</sub><sup>2</sup>; degree U = S<sub>c</sub>(t)/S<sub>c</sub>(∞).</td></tr></tbody></table>",
      blocks: [
        {
          id: "bearing-pressure-definitions",
          title: "Gross, net, ultimate, safe and allowable",
          html: "<p>Bearing capacity concerns shear failure; settlement may govern earlier. Keep every pressure on the same stress basis. Let q<sub>0</sub> denote pre-excavation overburden at base level.</p>" +
            "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Meaning or expression</th></tr></thead><tbody>" +
            "<tr><th scope='row'>Gross ultimate q<sub>u</sub></th><td>Base pressure at bearing failure.</td></tr>" +
            "<tr><th scope='row'>Net ultimate q<sub>nu</sub></th><td>q<sub>u</sub> − q<sub>0</sub>.</td></tr>" +
            "<tr><th scope='row'>Net safe q<sub>ns</sub></th><td>q<sub>nu</sub>/F for a net-capacity safety factor F.</td></tr>" +
            "<tr><th scope='row'>Gross safe</th><td>q<sub>0</sub> + q<sub>ns</sub> under that convention.</td></tr>" +
            "<tr><th scope='row'>Allowable pressure</th><td>Lesser of shear-safe and settlement-limited pressures on matching bases.</td></tr>" +
            "</tbody></table><p>Equality with the governing limit is possible. Net applied pressure is gross applied pressure minus removed overburden, for rafts of <strong>any width</strong>. Force Q = pressure × area; kN is not kPa.</p>",
          sources: [
            { id: "SOIL136-00331", set: 26, question: 37 },
            { id: "SOIL136-00386", set: 30, question: 36 },
            { id: "SOIL136-00400", set: 31, question: 34 },
            { id: "SOIL136-00432", set: 33, question: 37 },
            { id: "SOIL136-00437", set: 33, question: 42 }
          ]
        },
        {
          id: "bearing-capacity-evidence-and-factors",
          title: "Capacity depends on the ground and the foundation",
          html: "<p>Strength, drainage, groundwater, layering, footing geometry, embedment, load inclination/eccentricity and nearby slopes affect resistance. Laboratory strength parameters support analysis; corrected SPT correlations and appropriate load tests provide different evidence. A pile test does not directly measure shallow-footing capacity.</p>" +
            "<p>The bank's 450 kPa for soft rock and 100 kPa for soft clay are unverified presumptive values, not material constants. Weathering, discontinuities and compressibility can dominate.</p>",
          sources: [
            { id: "SOIL136-00073", set: 7, question: 42 },
            { id: "SOIL136-00074", set: 7, question: 43 },
            { id: "SOIL136-00082", set: 8, question: 37 },
            { id: "SOIL136-00083", set: 8, question: 38 }
          ]
        },
        {
          id: "general-local-punching-failure",
          title: "Three soil bearing-failure patterns",
          html: "<table><thead><tr><th scope='col'>Mode</th><th scope='col'>Typical behaviour</th></tr></thead><tbody>" +
            "<tr><th scope='row'>General shear</th><td>Dense/stiff, relatively incompressible ground; continuous rupture from footing edge to surface, heave and a distinct peak, often sudden.</td></tr>" +
            "<tr><th scope='row'>Local shear</th><td>More compressible ground; partial plastic mechanism, incomplete surface rupture and progressive large settlement without a sharp peak.</td></tr>" +
            "<tr><th scope='row'>Punching</th><td>Highly compressible ground; footing sinks with concentrated shearing near its sides and little surface heave.</td></tr>" +
            "</tbody></table><p>Density/consistency helps interpretation but does not determine the mode alone. Embedment, loading and stratification matter. The quoted relative density D<sub>r</sub> &lt; 35% is approximate, not a universal transition.</p>",
          sources: [
            { id: "SOIL136-00354", set: 27, question: 45 },
            { id: "SOIL136-00355", set: 27, question: 46 },
            { id: "SOIL136-00356", set: 28, question: 35 },
            { id: "SOIL136-00357", set: 1, question: 46 },
            { id: "SOIL136-00358", set: 28, question: 36 },
            { id: "SOIL136-00359", set: 28, question: 37 },
            { id: "SOIL136-00360", set: 28, question: 38 },
            { id: "SOIL136-00361", set: 28, question: 39 },
            { id: "SOIL136-00362", set: 28, question: 40 },
            { id: "SOIL136-00363", set: 28, question: 41 },
            { id: "SOIL136-00364", set: 28, question: 42 },
            { id: "SOIL136-00368", set: 28, question: 46 },
            { id: "SOIL136-00373", set: 29, question: 35 }
          ]
        },
        {
          id: "terzaghi-classical-equations",
          title: "Classical Terzaghi theory and consistent factors",
          html: "<p>The classical general-shear model assumes homogeneous, isotropic ground, a rough horizontal shallow base, level ground and vertical concentric loading. The original strip mechanism contains a central wedge, radial shear zones and passive zones; square-footing expressions are shape modifications.</p><p><strong>Strip:</strong> q<sub>u</sub> = cN<sub>c</sub> + q<sub>0</sub>N<sub>q</sub> + 0.5γBN<sub>γ</sub>.</p><p><strong>Classical square:</strong> q<sub>u</sub> = 1.3cN<sub>c</sub> + q<sub>0</sub>N<sub>q</sub> + 0.4γBN<sub>γ</sub>.</p><p>c and q<sub>0</sub> are kPa, γ is kN/m<sup>3</sup>, B is m. Dimensionless N-factors depend on φ and the selected formulation. Use one internally consistent factor set. </p>",
          moreHtml: "<p>Terzaghi built on earlier plasticity work; historical/table claims cannot replace the missing reference. Embedment surcharge is included, but separate depth/inclination factors and layered/slope effects are not supplied by this equation.</p>",
          sources: [
            { id: "SOIL136-00046", set: 5, question: 41 },
            { id: "SOIL136-00076", set: 7, question: 45 },
            { id: "SOIL136-00077", set: 7, question: 46 },
            { id: "SOIL136-00079", set: 8, question: 34 },
            { id: "SOIL136-00365", set: 28, question: 43 },
            { id: "SOIL136-00367", set: 28, question: 45 },
            { id: "SOIL136-00369", set: 1, question: 47 },
            { id: "SOIL136-00370", set: 28, question: 47 },
            { id: "SOIL136-00371", set: 28, question: 48 },
            { id: "SOIL136-00372", set: 29, question: 34 },
            { id: "SOIL136-00374", set: 29, question: 36 },
            { id: "SOIL136-00375", set: 29, question: 37 }
          ]
        },
        {
          id: "cohesive-and-cohesionless-capacity",
          title: "Undrained clay and drained cohesionless soil",
          html: "<p>For an undrained, purely cohesive <strong>strip</strong> calculation, use c<sub>u</sub>, φ<sub>u</sub> = 0 and total overburden q<sub>0</sub>. Classical Terzaghi factors are N<sub>c</sub> = 5.7, N<sub>q</sub> = 1 and N<sub>γ</sub> = 0: <strong>q<sub>u</sub> = 5.7c<sub>u</sub> + q<sub>0</sub></strong>. Width-independent pressure does not mean width-independent load or settlement.</p>" +
            "<p>Prandtl's ideal strip result N<sub>c</sub> = π + 2 ≈ 5.14 belongs to another formulation. For drained sand, c′ ≈ 0 leaves surcharge and unit-weight terms; use φ′ and effective stresses. Local-shear reductions require their own consistent parameters/factors.</p>",
          sources: [
            { id: "SOIL136-00078", set: 7, question: 47 },
            { id: "SOIL136-00366", set: 28, question: 44 }
          ]
        },
        {
          id: "water-table-bearing-corrections",
          title: "Water table: correct stresses, not the entire capacity",
          html: "<p>In drained analysis, <strong>γ′ = γ<sub>sat</sub> − γ<sub>w</sub></strong> below groundwater. If water lies z metres below ground but above the base, q′<sub>0</sub> = γz + γ′(D<sub>f</sub> − z); use the appropriate moist γ above water.</p><p>Water below the base leaves that surcharge unchanged but affects the γBN<sub>γ</sub> term. A common approximation averages unit weights over about B beneath the base. R<sub>w1</sub>/R<sub>w2</sub> label these surcharge/sub-base corrections in the bank; they are not universal halving factors. </p><p>For water d below the base, 0 ≤ d ≤ B, <strong>γ<sub>avg</sub> ≈ γ′ + (d/B)(γ − γ′)</strong>. <strong>Illustrative added values:</strong> γ = 18, γ<sub>sat</sub> = 20, γ<sub>w</sub> = 10 kN/m<sup>3</sup>, B = 2 m and d = 1 m give γ′ = 10 and γ<sub>avg</sub> = 14 kN/m<sup>3</sup>. Beyond B, this approximation applies no sub-base correction.</p>",
          moreHtml: "<p>Account consistently for water pressure/uplift when converting effective resistance to total applied loading; do not double-correct.</p>",
          sources: [{ id: "SOIL136-00081", set: 8, question: 36 }]
        },
        {
          id: "gross-net-safety-factor-example",
          title: "Worked safety-factor convention check",
          html: "<p><strong>Illustrative added values applied to the bank's clay formula:</strong> c<sub>u</sub> = 20 kPa, q<sub>0</sub> = 40 kPa, F = 3. Strip q<sub>u</sub> = 154 kPa; q<sub>nu</sub> = 114 kPa. Factoring <em>net</em> capacity gives q<sub>ns</sub> = 38 kPa and gross safe pressure = 78 kPa. Factoring <em>gross</em> capacity instead gives 154/3 = 51.3 kPa: a different convention. A settlement limit can reduce either permitted result further.</p>",
          sources: [
            { id: "SOIL136-00078", set: 7, question: 47 },
            { id: "SOIL136-00386", set: 30, question: 36 }
          ]
        },
        {
          id: "plate-load-width-and-settlement",
          title: "Plate tests: pressure scaling is not settlement scaling",
          html: "<p>For comparable homogeneous ground at equal applied pressure, classic estimates use plate width B<sub>p</sub>, footing width B<sub>f</sub> and plate settlement S<sub>p</sub>:</p><p><strong>Clay:</strong> S<sub>f</sub> ≈ S<sub>p</sub>B<sub>f</sub>/B<sub>p</sub>.</p><p><strong>Sand:</strong> S<sub>f</sub> ≈ S<sub>p</sub>[B<sub>f</sub>(B<sub>p</sub> + 0.3)/(B<sub>p</sub>(B<sub>f</sub> + 0.3))]<sup>2</sup>, with widths and 0.3 in metres.</p><p><strong>Illustrative added values:</strong> B<sub>p</sub> = 0.3 m, B<sub>f</sub> = 1.2 m, S<sub>p</sub> = 10 mm give sand S<sub>f</sub> = 25.6 mm, versus clay's 40 mm.</p>",
          moreHtml: "<p>Ideal clay net ultimate pressure is approximately width-independent; sand capacity scales with width only when the unit-weight term dominates. A short plate test misses deeper weak strata and long-term consolidation.</p>",
          sources: [
            { id: "SOIL136-00075", set: 7, question: 44 },
            { id: "SOIL136-00080", set: 8, question: 35 }
          ]
        },
        {
          id: "subgrade-reaction-and-housel",
          title: "Subgrade reaction and Housel's empirical relation",
          html: "<p><strong>k<sub>s</sub> = p/s</strong> is subgrade reaction modulus: pressure divided by settlement, giving kN/m<sup>3</sup> when s is metres. It depends on soil response, loaded geometry and stress level, not solely soil identity. Groundwater can change it through stiffness/effective stress.</p>" +
            "<p>Housel's <strong>Q = Aq + Ps</strong> uses A in m<sup>2</sup>, q in kPa, perimeter P in m and perimeter coefficient s in kN/m, giving Q in kN. Here s is <em>not settlement</em>. Coefficients require calibration at a common settlement.</p>",
          sources: [
            { id: "SOIL136-00387", set: 30, question: 37 },
            { id: "TRAN808-00067", set: 8, question: 80 }
          ]
        },
        {
          id: "settlement-components-and-distortion",
          title: "Settlement components, uniformity and damage",
          html: "<p>Settlement is downward foundation movement. <strong>S = S<sub>i</sub> + S<sub>c</sub> + S<sub>s</sub></strong>: immediate distortion, primary consolidation and secondary compression. Uniform settlement can affect services and levels; differential movement also distorts the structure.</p>",
          moreHtml: "<p>The bank's differential-settlement ratio is <strong>ΔS/L</strong>, dimensionless with matching units, not a rate per time. Rigorous angular-distortion assessment distinguishes rigid-body tilt from distortion. Neither a total-settlement value alone nor a fixed fraction of it defines acceptable differential movement. Limits depend on structural sensitivity, spacing and serviceability requirements.</p>",
          sources: [
            { id: "SOIL136-00332", set: 26, question: 38 },
            { id: "SOIL136-00333", set: 26, question: 39 },
            { id: "SOIL136-00334", set: 26, question: 40 },
            { id: "SOIL136-00335", set: 26, question: 41 },
            { id: "SOIL136-00336", set: 26, question: 42 },
            { id: "SOIL136-00337", set: 26, question: 43 },
            { id: "SOIL136-00404", set: 31, question: 38 },
            { id: "SOIL136-00405", set: 31, question: 39 },
            { id: "SOIL136-00431", set: 33, question: 36 }
          ]
        },
        {
          id: "elastic-immediate-settlement",
          title: "Elastic settlement and influence-factor conventions",
          html: "<p>A common elastic half-space expression is <strong>S<sub>i</sub> = p<sub>net</sub>B(1 − ν<sup>2</sup>)I/E<sub>s</sub></strong>. Matching pressure units for p and E give S in B's length units; ν and I are dimensionless. Geometry, rigidity, embedment and the chosen settlement location determine I.</p>" +
            "<p>The bank's 0.82 is a conventional rigid-square surface factor with this normalisation. Compression-test stress–strain behaviour informs E<sub>s</sub>, but drainage and strain range must match; constrained oedometer modulus is not automatically Young's modulus. The malformed rectangular-factor item lacks a usable definition/table.</p>" +
            "<p><strong>Illustrative added inputs with the bank's I = 0.82:</strong> p<sub>net</sub> = 100 kPa, B = 2 m, ν = 0.30 and E<sub>s</sub> = 20 MPa = 20,000 kPa give S<sub>i</sub> = 0.007462 m = 7.46 mm.</p>",
          sources: [
            { id: "SOIL136-00027", set: 4, question: 35 },
            { id: "SOIL136-00406", set: 31, question: 40 },
            { id: "SOIL136-00407", set: 31, question: 41 },
            { id: "SOIL136-00408", set: 31, question: 42 },
            { id: "SOIL136-00410", set: 31, question: 44 }
          ]
        },
        {
          id: "consolidation-pore-pressure-and-mass",
          title: "Consolidation: excess pore pressure and conservation",
          html: "<p>For saturated soil, <strong>σ′ = σ − u</strong>. An ideal sudden undrained load increment initially raises excess u; under sustained total stress, drainage transfers that increment to effective stress as the skeleton compresses. </p><p>In one-dimensional compression with incompressible solids/water, solid volume and mass remain constant; lost bulk volume equals expelled water volume. Thus <strong>S<sub>c</sub> = H<sub>0</sub>(e<sub>0</sub> − e<sub>f</sub>)/(1 + e<sub>0</sub>)</strong>. H<sub>0</sub> is initial thickness; e = V<sub>voids</sub>/V<sub>solids</sub> is void ratio. </p>",
          moreHtml: "<p>At primary completion, <strong>excess u</strong> dissipates, not the hydrostatic pore pressure. Sand usually drains rapidly; clay can consolidate without groundwater being at the surface.</p><p>Sample mass decreases as water exits. Secondary compression or secondary time effect is continuing fabric creep, not air-expulsion compaction.</p>",
          sources: [
            { id: "SOIL136-00025", set: 3, question: 46 },
            { id: "SOIL136-00035", set: 4, question: 43 },
            { id: "SOIL136-00193", set: 16, question: 40 },
            { id: "SOIL136-00194", set: 16, question: 41 },
            { id: "SOIL136-00195", set: 16, question: 42 }
          ]
        },
        {
          id: "preconsolidation-and-ocr",
          title: "Stress history: effective stress, not past total pressure",
          html: "<p><strong>OCR = σ′<sub>p</sub>/σ′<sub>v0</sub></strong>, where σ′<sub>p</sub> is maximum past vertical effective stress and σ′<sub>v0</sub> is its present value. Normally consolidated soil has OCR ≈ 1; overconsolidated soil has OCR &gt; 1. Underconsolidation concerns incomplete drainage under existing loading.</p><p>Erosion or removal of former ice/loading can unload soil. With other stresses comparable, <strong>lowering groundwater reduces u and increases σ′</strong>, promoting consolidation; it does not automatically create OCR &gt; 1. </p>",
          moreHtml: "<p>A <em>past lower</em> water table followed by a rise can leave higher historical effective stress and hence overconsolidation.</p>",
          sources: [
            { id: "SOIL136-00022", set: 3, question: 43 },
            { id: "SOIL136-00028", set: 4, question: 36 },
            { id: "SOIL136-00086", set: 8, question: 41 }
          ]
        },
        {
          id: "oedometer-indices-and-units",
          title: "Oedometer results: magnitude versus rate",
          html: "<p>An oedometer restrains lateral strain and records compression versus time through loading/unloading stages. The e–log stress curve identifies virgin/recompression behaviour and preconsolidation stress; time curves estimate consolidation rate.</p>" +
            "<table><thead><tr><th scope='col'>Parameter</th><th scope='col'>Definition and units</th></tr></thead><tbody>" +
            "<tr><th scope='row'>C<sub>c</sub>, C<sub>r</sub></th><td>Positive −Δe/Δlog<sub>10</sub>σ′ slopes for virgin compression/recompression; dimensionless.</td></tr>" +
            "<tr><th scope='row'>a<sub>v</sub></th><td>−Δe/Δσ′; inverse pressure, e.g. kPa<sup>−1</sup>.</td></tr>" +
            "<tr><th scope='row'>m<sub>v</sub></th><td>a<sub>v</sub>/(1 + e<sub>0</sub>); volumetric strain per stress increment, kPa<sup>−1</sup>.</td></tr>" +
            "<tr><th scope='row'>c<sub>v</sub></th><td>k/(m<sub>v</sub>γ<sub>w</sub>); length<sup>2</sup>/time, e.g. m<sup>2</sup>/year.</td></tr>" +
            "</tbody></table><p>k is hydraulic conductivity in length/time. Parameters vary with stress range; c<sub>v</sub> controls rate, not final settlement alone.</p>",
          sources: [
            { id: "SOIL136-00038", set: 4, question: 46 },
            { id: "SOIL136-00186", set: 15, question: 45 }
          ]
        },
        {
          id: "nc-oc-consolidation-settlement",
          title: "Settlement calculation across the preconsolidation stress",
          html: "<p>For a uniform normally consolidated layer, <strong>S<sub>c</sub> = HC<sub>c</sub>log<sub>10</sub>(σ′<sub>f</sub>/σ′<sub>0</sub>)/(1 + e<sub>0</sub>)</strong>. Stresses are positive effective stresses in matching units; H is initial thickness.</p>" +
            "<p>For overconsolidated soil staying below σ′<sub>p</sub>, replace C<sub>c</sub> by C<sub>r</sub>. Crossing σ′<sub>p</sub> requires two contributions: <strong>S<sub>c</sub> = H/(1 + e<sub>0</sub>) × [C<sub>r</sub>log<sub>10</sub>(σ′<sub>p</sub>/σ′<sub>0</sub>) + C<sub>c</sub>log<sub>10</sub>(σ′<sub>f</sub>/σ′<sub>p</sub>)]</strong>.</p>" +
            "<p><strong>Illustrative added NC values:</strong> H = 2 m, e<sub>0</sub> = 1, C<sub>c</sub> = 0.3, stresses 100 to 200 kPa give S<sub>c</sub> = 0.3 log<sub>10</sub>2 = 0.0903 m. For varying ground/stress, subdivide and <strong>sum</strong> layer settlements; alternatively use Σm<sub>v,i</sub>Δσ′<sub>i</sub>H<sub>i</sub> over valid stress intervals.</p>",
          sources: [{ id: "SOIL136-00196", set: 16, question: 43 }]
        },
        {
          id: "consolidation-time-and-drainage",
          title: "Time factor and single/double drainage",
          html: "<p><strong>T<sub>v</sub> = c<sub>v</sub>t/H<sub>dr</sub><sup>2</sup></strong>; H<sub>dr</sub> is the longest drainage path: H for single drainage, H/2 for double drainage. Average <strong>U = S<sub>c</sub>(t)/S<sub>c</sub>(∞)</strong> is a nonlinear function of T<sub>v</sub>.</p>" +
            "<p>For uniform initial excess pressure, constant c<sub>v</sub> and ideal one-dimensional drainage, T<sub>50</sub> ≈ 0.197 and T<sub>90</sub> ≈ 0.848. Log-time/square-root-time test interpretations commonly identify these stages.</p>" +
            "<p><strong>Illustrative added values:</strong> H = 4 m, c<sub>v</sub> = 2 m<sup>2</sup>/year give double-drainage t<sub>90</sub> = 0.848 × 2<sup>2</sup>/2 = 1.696 years. Single drainage takes four times as long, 6.784 years, under otherwise identical assumptions.</p>",
          sources: [
            { id: "SOIL136-00040", set: 5, question: 35 },
            { id: "SOIL136-00108", set: 10, question: 37 }
          ]
        },
        {
          id: "pile-resistance-and-driving-formulas",
          title: "Pile capacity and limitations of driving formulas",
          html: "<p>Axial ultimate pile resistance is a force: <strong>Q<sub>u</sub> = A<sub>b</sub>q<sub>b</sub> + ΣA<sub>s,i</sub>f<sub>s,i</sub></strong>, combining toe and shaft resistance. Areas in m<sup>2</sup> and stresses in kPa give kN. </p><p>Engineering News and Hiley are historical driving formulas. For an ideal drop ram, <strong>E = W<sub>r</sub>h</strong>; kN × m gives kJ, while mass requires mgh. </p>",
          moreHtml: "<p>Structural resistance and service settlement remain separate checks. Static soil-based methods and full-scale <em>pile</em> tests differ from plate tests.</p><p>Delivered energy includes losses. Simple formulas suit some coarse-grained conditions better than clays, but uncertain dynamic-to-static correlation, setup/relaxation and future settlement prevent unconditional capacity predictions.</p>",
          sources: [
            { id: "SOIL136-00420", set: 32, question: 42 },
            { id: "SOIL136-00421", set: 32, question: 43 },
            { id: "SOIL136-00422", set: 32, question: 44 },
            { id: "SOIL136-00423", set: 32, question: 45 },
            { id: "SOIL136-00424", set: 32, question: 46 },
            { id: "SOIL136-00425", set: 1, question: 49 },
            { id: "SOIL136-00426", set: 32, question: 47 },
            { id: "SOIL136-00427", set: 32, question: 48 }
          ]
        }
      ],
      gaps: [
        "No complete bearing-capacity input set, groundwater profile or load–settlement record supports a site-specific calculation.",
        "Consolidation test curves, layer stress distributions and creep parameters are absent; added numerical examples illustrate theory rather than recover bank answers.",
        "No governing settlement criteria or current local design requirements are supplied."
      ],
      cautions: [
          {
              "id": "check-soil136-00357",
              "status": "review",
              "prompt": "Which of the following is a characteristic of general shear failure?",
              "html": "<p><strong>Failure-mode wording:</strong> general shear is associated with relatively low compressibility; the all-of-the-mentioned wording is misleading. </p>",
              "sources": [
                  {
                      "id": "SOIL136-00357",
                      "set": 1,
                      "question": 46
                  }
              ]
          },
          {
              "id": "check-soil136-00022",
              "status": "review",
              "prompt": "The soil which has been acted upon by stress greater than present stress is called",
              "html": "<p><strong>Overconsolidation refers to effective-stress history.</strong> A past maximum effective stress greater than the present value gives OCR greater than one. A falling water table alone does not establish that history.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00022",
                      "set": 3,
                      "question": 43
                  }
              ]
          },
          {
              "id": "check-soil136-00025",
              "status": "review",
              "prompt": "Consolidation settlement is calculated for",
              "html": "<p><strong>Primary consolidation dissipates excess pore pressure.</strong> Hydrostatic pore pressure remains at equilibrium. Settlement calculations need the compressible layers, drainage conditions and effective-stress increment, not groundwater fixed at ground level.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00025",
                      "set": 3,
                      "question": 46
                  }
              ]
          },
          {
              "id": "check-soil136-00046",
              "status": "review",
              "prompt": "The angle subtended by rigid cone below foundation with respect to horizontal is",
              "html": "<p><strong>Wedge-angle ambiguity:</strong> Terzaghi's original rough-strip construction uses wedge faces at φ to horizontal; Prandtl-type constructions use 45° + φ/2. The unspecified rigid-cone stem cannot justify conflating these or borrowing a triaxial failure-plane angle.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00046",
                      "set": 5,
                      "question": 41
                  }
              ]
          },
          {
              "id": "check-soil136-00075",
              "status": "review",
              "prompt": "Settlements formula for cohesion less formula from plate load test",
              "html": "<p><strong>Plate-test miskey:</strong> the linear settlement relation is the classic clay estimate, not the classic sand formula. </p><p>Sand's nonlinear +0.3 m expression is already offered in the source options. </p>",
              "sources": [
                  {
                      "id": "SOIL136-00075",
                      "set": 7,
                      "question": 44
                  }
              ]
          },
          {
              "id": "check-soil136-00076",
              "status": "review",
              "prompt": "Formula for Ultimate bearing capacity of square footing?",
              "html": "<p><strong>Do not mix bearing-capacity methods.</strong> The classical Terzaghi square-footing cohesion term is 1.3cN<sub>c</sub>. A 1.2 coefficient needs a separately identified method and consistent remaining factors.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00076",
                      "set": 7,
                      "question": 45
                  }
              ]
          },
          {
              "id": "check-soil136-00077",
              "status": "review",
              "prompt": "The bearing capacity of square footing is",
              "html": "<p><strong>Classical Terzaghi square footing:</strong> the cohesion term is 1.3cN<sub>c</sub>. The expression gives a pressure; multiply by loaded area to obtain a resultant load.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00077",
                      "set": 7,
                      "question": 46
                  }
              ]
          },
          {
              "id": "check-soil136-00080",
              "status": "review",
              "prompt": "Bearing capacity formula for cohesionless soil from the plate load test",
              "html": "<p><strong>Plate-test miskey:</strong> the linear settlement relation is the classic clay estimate, not the classic sand formula. </p><p>Sand's nonlinear +0.3 m expression is already offered in the source options. </p><p>Capacity scaling also needs its stated assumptions.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00080",
                      "set": 8,
                      "question": 35
                  }
              ]
          },
          {
              "id": "check-soil136-00082",
              "status": "review",
              "prompt": "Soft rocks bearing capacity",
              "html": "<p><strong>Rock description alone is insufficient.</strong> The keyed soft-rock bearing pressure is only a bank heuristic. Weathering, discontinuities, orientation, groundwater and settlement control the usable pressure.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00082",
                      "set": 8,
                      "question": 37
                  }
              ]
          },
          {
              "id": "check-soil136-00083",
              "status": "review",
              "prompt": "The bearing capacity of soft clay in kPa is",
              "html": "<p><strong>Unverified limits:</strong> 450/100 kPa, F = 3, 25/50/20 mm and 1/300 are bank conventions, not universal requirements. </p>",
              "sources": [
                  {
                      "id": "SOIL136-00083",
                      "set": 8,
                      "question": 38
                  }
              ]
          },
          {
              "id": "check-tran808-00067",
              "status": "review",
              "prompt": "The coefficient of subgrade doesn't depend upon",
              "html": "<p><strong>Subgrade misstatement:</strong> absence of groundwater in k<sub>s</sub> = p/s does not imply physical independence from groundwater.</p>",
              "sources": [
                  {
                      "id": "TRAN808-00067",
                      "set": 8,
                      "question": 80
                  }
              ]
          },
          {
              "id": "check-soil136-00108",
              "status": "review",
              "prompt": "Degree of consolidation is",
              "html": "<p><strong>Consolidation definitions:</strong> T<sub>v</sub>, not U, is proportional to t/H<sub>dr</sub><sup>2</sup>. a<sub>v</sub> is an e–stress slope; the e–log stress slope defines C<sub>c</sub> on virgin loading.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00108",
                      "set": 10,
                      "question": 37
                  }
              ]
          },
          {
              "id": "check-soil136-00186",
              "status": "review",
              "prompt": "Pick up correct statement from the following:",
              "html": "<p><strong>Time factor and degree of consolidation differ.</strong> T<sub>v</sub> = c<sub>v</sub>t/H<sub>dr</sub><sup>2</sup>; U is a function of T<sub>v</sub>, not generally proportional to it. The e-log stress slope defines C<sub>c</sub>, not a<sub>v</sub>.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00186",
                      "set": 15,
                      "question": 45
                  }
              ]
          },
          {
              "id": "check-soil136-00194",
              "status": "review",
              "prompt": "By which process some compression of soil takes place, after the hydrostatic pressure reduces to zero?",
              "html": "<p><strong>Groundwater wording:</strong> a falling water table does not by itself establish overconsolidation. </p><p>Primary consolidation dissipates excess pressure, not hydrostatic pressure; groundwater need not be at ground level.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00194",
                      "set": 16,
                      "question": 41
                  }
              ]
          },
          {
              "id": "check-soil136-00334",
              "status": "review",
              "prompt": "The allowable pressure, that should be selected for a maximum settlement is ______.",
              "html": "<p><strong>Settlement limits are project-specific.</strong> Structure sensitivity and the governing criteria determine acceptable total and differential settlement. A total-settlement limit does not by itself determine a differential limit.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00334",
                      "set": 26,
                      "question": 40
                  }
              ]
          },
          {
              "id": "check-soil136-00335",
              "status": "review",
              "prompt": "The maximum allowable settlement for warehouses are ______.",
              "html": "<p><strong>Settlement limits are project-specific.</strong> Structure sensitivity and the governing criteria determine acceptable total and differential settlement. A total-settlement limit does not by itself determine a differential limit.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00335",
                      "set": 26,
                      "question": 41
                  }
              ]
          },
          {
              "id": "check-soil136-00336",
              "status": "review",
              "prompt": "For simple spread footing on clayey soil, the differential settlement should not exceed ______.",
              "html": "<p>A 50 mm total limit does not derive a 20 mm differential limit.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00336",
                      "set": 26,
                      "question": 42
                  }
              ]
          },
          {
              "id": "check-soil136-00359",
              "status": "review",
              "prompt": "Punching shear may occur in loose sand with density less than ______",
              "html": "<p>Soft/medium synonyms and relative-density cutoffs do not uniquely distinguish local from punching failure.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00359",
                      "set": 28,
                      "question": 37
                  }
              ]
          },
          {
              "id": "check-soil136-00360",
              "status": "review",
              "prompt": "Local shear failure is associated with soils having ______",
              "html": "<p><strong>Failure-mode wording:</strong> general shear is associated with relatively low compressibility; the all-of-the-mentioned wording is misleading. </p>",
              "sources": [
                  {
                      "id": "SOIL136-00360",
                      "set": 28,
                      "question": 38
                  }
              ]
          },
          {
              "id": "check-soil136-00365",
              "status": "review",
              "prompt": "The concept of analysis of bearing capacity failure was first developed by ______",
              "html": "<p><strong>Historical claims:</strong> Prandtl preceded Terzaghi's soil-foundation adaptation. </p>",
              "sources": [
                  {
                      "id": "SOIL136-00365",
                      "set": 28,
                      "question": 43
                  }
              ]
          },
          {
              "id": "check-soil136-00368",
              "status": "review",
              "prompt": "For purely cohesive soil, local shear failure may be assumed to occur when the soil is......",
              "html": "<p>Soft/medium synonyms and relative-density cutoffs do not uniquely distinguish local from punching failure.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00368",
                      "set": 28,
                      "question": 46
                  }
              ]
          },
          {
              "id": "check-soil136-00370",
              "status": "review",
              "prompt": "Which of the following are original Terzaghi values for N_γ?",
              "html": "<p><strong>Historical table not supplied.</strong> The claimed original N<sub>gamma</sub> values require the original table and friction-angle convention. Do not infer historical attribution from a different modern correlation.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00370",
                      "set": 28,
                      "question": 47
                  }
              ]
          },
          {
              "id": "check-soil136-00373",
              "status": "review",
              "prompt": "Local shear failure generally occurs in ______",
              "html": "<p><strong>Failure patterns are not fixed density labels.</strong> Local shear is associated with intermediate deformation behaviour; punching and general shear depend on compressibility, geometry and stress conditions. A loose verbal soil class does not uniquely establish the mode.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00373",
                      "set": 29,
                      "question": 35
                  }
              ]
          },
          {
              "id": "check-soil136-00374",
              "status": "review",
              "prompt": "The curve for N_γ and φ for the transition state from φ = 28° and φ = 38° was given by...",
              "html": "<p>The alleged original N<sub>γ</sub> angles and Peck transition-curve attribution lack the source table; their keyed historical details cannot be independently established here.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00374",
                      "set": 29,
                      "question": 36
                  }
              ]
          },
          {
              "id": "check-soil136-00386",
              "status": "review",
              "prompt": "The value of factor of safety used, for finding safe bearing capacity is ______",
              "html": "<p><strong>Factor of safety needs a design basis.</strong> Three is a common textbook value in allowable-stress examples, not a universal requirement for all bearing-capacity methods and load cases.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00386",
                      "set": 30,
                      "question": 36
                  }
              ]
          },
          {
              "id": "check-soil136-00407",
              "status": "review",
              "prompt": "The influence factor for rigid square footing is ______.",
              "html": "<p>Its keyed 1.06 is not derivable; even 0.82 requires the stated square-footing convention.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00407",
                      "set": 31,
                      "question": 41
                  }
              ]
          },
          {
              "id": "check-soil136-00410",
              "status": "review",
              "prompt": "The influence factor \\( N \\)/\\( r \\) of rigid rectangular footing with \\( \\frac{1}{n} = 1.5 \\) is ______.",
              "html": "<p><strong>Missing factor definition:</strong> the rectangular item's N/r and 1/n notation does not establish geometry or normalisation. </p>",
              "sources": [
                  {
                      "id": "SOIL136-00410",
                      "set": 31,
                      "question": 44
                  }
              ]
          },
          {
              "id": "check-soil136-00421",
              "status": "review",
              "prompt": "The load carrying capacity of a pile can be determined by which of the following methods?",
              "html": "<p><strong>Pile-test wording:</strong> plate is not pile; state likely means static. </p><p>Unreliable simple formulas in clay do not invalidate properly interpreted instrumented dynamic pile testing.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00421",
                      "set": 32,
                      "question": 43
                  }
              ]
          },
          {
              "id": "check-soil136-00422",
              "status": "review",
              "prompt": "Which of the following are some of the commonly used dynamic formula?",
              "html": "<p><strong>Dynamic formula is not instrumented testing.</strong> Simple pile-driving formulas require their empirical assumptions and units. Their limitations, especially in clay, do not invalidate a properly interpreted instrumented dynamic pile test.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00422",
                      "set": 32,
                      "question": 44
                  }
              ]
          },
          {
              "id": "check-soil136-00423",
              "status": "review",
              "prompt": "When a pile hammer hits the pile, the total driving energy is equal to ______.",
              "html": "<p><strong>Ram and hammer terminology overlaps.</strong> In a drop-hammer system, the falling ram is the impacting hammer mass. The choices need a clear component distinction before only one can be treated as correct.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00423",
                      "set": 32,
                      "question": 45
                  }
              ]
          },
          {
              "id": "check-soil136-00426",
              "status": "review",
              "prompt": "The dynamic formula is valueless for which of the following type of soil:",
              "html": "<p>Unreliable simple formulas in clay do not invalidate properly interpreted instrumented dynamic pile testing.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00426",
                      "set": 32,
                      "question": 47
                  }
              ]
          },
          {
              "id": "check-soil136-00431",
              "status": "review",
              "prompt": "If a maximum settlement of 50 mm is permitted for a raft, the differential settlement must not exceed",
              "html": "<p>A 50 mm total limit does not derive a 20 mm differential limit.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00431",
                      "set": 33,
                      "question": 36
                  }
              ]
          },
          {
              "id": "check-soil136-00432",
              "status": "review",
              "prompt": "The net ultimate bearing capacity for raft may be determined by",
              "html": "<p><strong>Incomplete raft items:</strong> Akerpiton probably means Skempton, but the missing equation cannot be reconstructed confidently. </p>",
              "sources": [
                  {
                      "id": "SOIL136-00432",
                      "set": 33,
                      "question": 37
                  }
              ]
          },
          {
              "id": "check-soil136-00437",
              "status": "review",
              "prompt": "The net pressure can be calculated for raft having width greater than ______",
              "html": "<p>The unexplained 6 m threshold cannot restrict the definition of net pressure.</p>",
              "sources": [
                  {
                      "id": "SOIL136-00437",
                      "set": 33,
                      "question": 42
                  }
              ]
          }
      ]
    }
  });
})();