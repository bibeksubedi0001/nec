(function () {
    "use strict";
    window.CIVIL_CAPSULE_NOTE_TOPICS = window.CIVIL_CAPSULE_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_CAPSULE_NOTE_TOPICS, {
      "ACiE0301": {
        "code": "ACiE0301",
        "questionCount": 29,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation used in this topic</th></tr></thead><tbody><tr><th scope='row'>Newton's law of viscosity</th><td>τ = μ (du/dy); du/dy has dimensions T<sup>−1</sup></td></tr><tr><th scope='row'>Kinematic viscosity</th><td>ν = μ/ρ; dimensions L<sup>2</sup>T<sup>−1</sup> (m<sup>2</sup>/s)</td></tr><tr><th scope='row'>Power-law fluid</th><td>τ = k (du/dy)<sup>n</sup>; apparent viscosity μ<sub>app</sub> = τ/(du/dy) = k (du/dy)<sup>n−1</sup></td></tr><tr><th scope='row'>Weight-related properties</th><td>γ = ρg; v = 1/ρ; SG = ρ/ρ<sub>water,ref</sub>; W = mg with mass unchanged between locations</td></tr><tr><th scope='row'>Bulk modulus</th><td>K = −dp/(dV/V); volume-strain magnitude = dp/K; compressibility = 1/K</td></tr><tr><th scope='row'>Excess pressure</th><td>liquid drop Δp = 2σ/R; thin soap bubble Δp = 4σ/R</td></tr><tr><th scope='row'>Capillary rise</th><td>h = 2σ cos θ/(ρ g r) = 4σ cos θ/(ρ g d)</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "fluids-deform-continuously-under-shear",
            "title": "Why a fluid deforms continuously and how viscosity resists shear",
            "html": "<p>A <strong>fluid</strong> cannot hold a shear stress in static equilibrium. Apply a steady tangential stress to a Newtonian liquid and it keeps deforming: Newton's law of viscosity, <strong>τ = μ (du/dy)</strong>, fixes a constant shear rate τ/μ, and a constant rate integrated over time means the angular strain grows without limit. A linearly elastic solid behaves differently: a given shear stress produces a fixed strain, which disappears when the load is removed.</p><p>The classic picture is an oil film between a fixed plate and a plate dragged at speed U. The film shears with velocity gradient du/dy ≈ U/t across its thickness t, and the tangential resistance per unit area is τ = μU/t. <strong>Dynamic viscosity μ</strong> is therefore the material property that links shear stress to velocity gradient. Density plays no part in this relation, so two oils of equal density can develop quite different stresses at the same gradient and temperature; the ratio of their stresses equals the ratio of their viscosities.</p><p>For a Newtonian fluid at a fixed state, μ is simply the ratio τ/(du/dy). Doubling the imposed shear rate doubles the stress and leaves μ unchanged; a viscosity that changed with shear rate would signal non-Newtonian behaviour.</p>",
            "moreHtml": "<p>Illustrative check: a 0.5 mm oil film with μ = 0.08 Pa s under a plate moving at 0.25 m/s has du/dy = 0.25/0.0005 = 500 s<sup>−1</sup> and τ = 0.08 × 500 = 40 Pa. Doubling the plate speed gives 1000 s<sup>−1</sup> and 80 Pa, so μ stays 80/1000 = 0.08 Pa s. The linear velocity profile assumes a thin film with no pressure gradient along it.</p>",
            "sources": [
              {
                "id": "CAP4-03-00021",
                "label": "p. 11; topic 3 point 18"
              },
              {
                "id": "CAP4-03-00015",
                "label": "p. 11; topic 3 point 12"
              },
              {
                "id": "CAP4-03-00008",
                "label": "pp. 10, 11; topic 3 point 6"
              },
              {
                "id": "CAP4-03-00058",
                "label": "p. 12; topic 3 point 55"
              }
            ]
          },
          {
            "id": "viscosity-dimensions-and-temperature",
            "title": "Dimensions of velocity gradient and viscosity, and how temperature changes viscosity",
            "html": "<p>Dimensional bookkeeping prevents unit slips in viscosity problems. A <strong>velocity gradient</strong> du/dy divides a velocity (L T<sup>−1</sup>) by a length (L), leaving <strong>T<sup>−1</sup></strong>: it is a rate of shear deformation, measured in s<sup>−1</sup>, not a velocity or an acceleration. Since τ = μ(du/dy) and stress has dimensions M L<sup>−1</sup> T<sup>−2</sup>, dynamic viscosity μ = τ/(du/dy) has dimensions <strong>M L<sup>−1</sup> T<sup>−1</sup></strong>, with SI unit Pa s (N s/m<sup>2</sup>).</p><p><strong>Kinematic viscosity</strong> ν = μ/ρ divides M L<sup>−1</sup> T<sup>−1</sup> by density, M L<sup>−3</sup>. Mass cancels and the result is <strong>L<sup>2</sup> T<sup>−1</sup></strong>, i.e. m<sup>2</sup>/s. It is the property that appears in the Reynolds number VD/ν, so it must be entered in m<sup>2</sup>/s, never in Pa s.</p><p>Temperature affects liquids and gases in opposite directions over ordinary operating ranges. Heating a liquid weakens the cohesive resistance between its molecules, so a lubricating oil or water becomes less viscous. In a dilute gas, viscosity arises mainly from molecular momentum exchange between layers, which intensifies as the molecules move faster, so gas viscosity usually rises with temperature. Treat these as usual trends at stated conditions, not as laws for every complex fluid.</p>",
            "moreHtml": "<p>Unit reminders: 1 Pa s = 10 poise and 1 m<sup>2</sup>/s = 10<sup>4</sup> stokes. A liquid with μ = 0.0012 Pa s and ρ = 1000 kg/m<sup>3</sup> has ν = 0.0012/1000 = 1.2 × 10<sup>−6</sup> m<sup>2</sup>/s.</p>",
            "sources": [
              {
                "id": "CAP4-03-00016",
                "label": "p. 11; topic 3 point 13"
              },
              {
                "id": "CAP4-03-00018",
                "label": "p. 11; topic 3 point 15"
              },
              {
                "id": "CAP4-03-00017",
                "label": "p. 11; topic 3 point 14"
              }
            ]
          },
          {
            "id": "newtonian-and-non-newtonian-behaviour",
            "title": "Newtonian and non-Newtonian fluids: reading a flow curve",
            "html": "<p>A <strong>flow curve</strong> plots shear stress against shear rate at a fixed temperature. A <strong>Newtonian</strong> fluid gives a straight line through the origin whose slope is the constant viscosity μ. Any curvature, or an intercept on the stress axis, rules out the constant-μ Newtonian model, although the curve's shape is still needed to name the non-Newtonian type.</p><ul><li><strong>Power-law fluids</strong>: τ = k (du/dy)<sup>n</sup>. The apparent viscosity μ<sub>app</sub> = τ/(du/dy) = k (du/dy)<sup>n−1</sup>. For n &lt; 1 it falls with shear rate (pseudoplastic or shear-thinning); for n &gt; 1 it rises (dilatant or shear-thickening); n = 1 recovers the Newtonian case with μ = k.</li><li><strong>Yield-stress fluids</strong>: the material resists flow until a finite stress is exceeded, after which its resistance varies with rate. The Bingham idealization, τ = τ<sub>y</sub> + μ<sub>p</sub>(du/dy) for τ &gt; τ<sub>y</sub>, is the simplest example. Pastes such as peanut butter commonly behave this way, but the actual law must be fitted to the particular sample and temperature.</li></ul><p>An exponent of two on shear rate with no stress intercept therefore describes a shear-thickening fluid without a yield stress. The coefficient k carries units of Pa s<sup>n</sup>, so k itself is not the apparent viscosity except when n = 1.</p>",
            "moreHtml": "<p>Illustrative check: for a shear-thinning fluid with k = 0.2 Pa s<sup>0.5</sup> and n = 0.5 at a shear rate of 16 s<sup>−1</sup>, τ = 0.2 × 16<sup>0.5</sup> = 0.8 Pa and μ<sub>app</sub> = 0.8/16 = 0.05 Pa s. At 64 s<sup>−1</sup>, τ = 0.2 × 8 = 1.6 Pa and μ<sub>app</sub> = 0.025 Pa s, confirming that its apparent viscosity falls as it is sheared faster.</p>",
            "sources": [
              {
                "id": "CAP4-03-00012",
                "label": "p. 11; topic 3 point 9"
              },
              {
                "id": "CAP4-03-00013",
                "label": "p. 11; topic 3 point 10"
              },
              {
                "id": "CAP4-03-00119",
                "label": "p. 14; topic 3 point 117"
              },
              {
                "id": "CAP4-03-00120",
                "label": "p. 14; topic 3 point 117"
              }
            ]
          },
          {
            "id": "density-specific-volume-and-gravity",
            "title": "Density, specific weight, specific volume, specific gravity and weight",
            "html": "<p>Four closely related properties describe how much matter a fluid packs into space. <strong>Density</strong> ρ is mass per unit volume (kg/m<sup>3</sup>). <strong>Specific weight</strong> γ = ρg is weight per unit volume (N/m<sup>3</sup>) and therefore depends on local gravity. <strong>Specific volume</strong> v = 1/ρ is volume per unit mass (m<sup>3</sup>/kg), so a denser fluid has a smaller specific volume. <strong>Specific gravity</strong> of a liquid is the dimensionless ratio of its density to the density of water at a stated reference temperature; dividing by water's specific weight, or by any specific volume, would not give a pure number.</p><p>Mass is an intrinsic amount of matter, whereas weight W = mg changes with gravitational acceleration. If one location's g is taken as a fixed multiple of another's, weights scale by that same multiple while the mass stays the same.</p><p>Water is anomalous near freezing. At ordinary pressure pure freshwater reaches its <strong>maximum density near 4 °C</strong>; warming above that temperature, or cooling below it, lowers the density. Because volume equals mass divided by density, a fixed mass of water occupies its smallest volume near 4 °C.</p>",
            "moreHtml": "<p>Illustrative check with g = 9.81 m/s<sup>2</sup> and a water reference of 1000 kg/m<sup>3</sup>: a liquid of density 900 kg/m<sup>3</sup> has γ = 900 × 9.81 = 8829 N/m<sup>3</sup>, v = 1/900 = 0.001111 m<sup>3</sup>/kg and SG = 900/1000 = 0.90. A 50 kg mass weighs 490.5 N where g = 9.81 m/s<sup>2</sup>, but it remains 50 kg wherever it is taken.</p>",
            "sources": [
              {
                "id": "CAP4-03-00007",
                "label": "pp. 10, 11; topic 3 point 6"
              },
              {
                "id": "CAP4-03-00014",
                "label": "p. 11; topic 3 point 11"
              },
              {
                "id": "CAP4-03-00010",
                "label": "p. 11; topic 3 point 7"
              },
              {
                "id": "CAP4-03-00131",
                "label": "p. 14; topic 3 point 128"
              }
            ]
          },
          {
            "id": "compressibility-and-bulk-modulus",
            "title": "Compressibility and bulk modulus of liquids and gases",
            "html": "<p><strong>Bulk modulus</strong> K = −dp/(dV/V) measures a fluid's resistance to volume change; the minus sign makes K positive because an increase in pressure reduces volume. Its reciprocal, 1/K, is the <strong>compressibility</strong>. For a small pressure increment the magnitude of the volumetric strain is simply dp/K, so a stiffer fluid compresses less.</p><p>Liquid water has a far larger bulk modulus than air at ordinary conditions. That is why elementary soil mechanics treats pore water as nearly incompressible compared with entrapped air, while still recognising that water is not perfectly incompressible and that mineral solids can be stiffer than water. An <strong>ideal incompressible liquid</strong> is the limit in which a finite pressure increment causes no volume change: K tends to infinity and compressibility tends to zero. Real liquids have large but finite bulk moduli.</p><p>Measured liquid bulk moduli commonly increase as the operating pressure rises. When K is larger, the same additional pressure increment produces a smaller fractional volume change. This is a frequently observed trend at the stated temperature, not something that follows from the definition of K itself.</p>",
            "moreHtml": "<p>Illustrative check: for a liquid with an assumed K = 2.0 GPa, raising the pressure by 10 MPa changes its volume by 10/2000 = 0.005, i.e. 0.5 %. If K at the higher pressure were measured as 2.5 GPa, a further 10 MPa increment would compress it by only 10/2500 = 0.4 %. The same increment applied to a gas would produce a far larger strain.</p>",
            "sources": [
              {
                "id": "CAP4-02-00066",
                "label": "p. 8; topic 2 point 61"
              },
              {
                "id": "CAP4-03-00011",
                "label": "p. 11; topic 3 point 8"
              },
              {
                "id": "CAP4-03-00121",
                "label": "p. 14; topic 3 point 119"
              }
            ]
          },
          {
            "id": "surface-tension-drops-and-bubbles",
            "title": "Surface tension, spherical drops and the excess pressure in drops and bubbles",
            "html": "<p><strong>Surface tension</strong> σ (N/m) is the force per unit length acting along a liquid interface, equivalently the energy needed to create unit area of new surface. With constant σ, surface energy is proportional to interfacial area. A small isolated drop, on which gravity and air drag are negligible, therefore takes the shape that encloses its volume with the least area: a <strong>sphere</strong>.</p><p>A curved interface supports a pressure difference. Cutting a drop of radius R through its centre and balancing forces on one half gives Δp πR<sup>2</sup> = σ 2πR, so the <strong>excess pressure inside a liquid drop</strong> is Δp = 2σ/R. A <strong>soap bubble</strong> is a thin film with two interfaces, inner and outer, so the surface-tension force is doubled and Δp = 4σ/R. Using the single-interface drop expression for a bubble halves the answer.</p><p>Both results are excess pressures: the difference between the inside and the surrounding air. To obtain the absolute pressure inside, add the surrounding absolute pressure. Smaller drops and bubbles have larger excess pressures because Δp varies inversely with R.</p>",
            "moreHtml": "<p>Illustrative check with an assumed σ = 0.07 N/m: a drop of radius 0.5 mm has Δp = 2 × 0.07/0.0005 = 280 Pa. A soap bubble of radius 20 mm with a film tension of 0.03 N/m on each interface has Δp = 4 × 0.03/0.020 = 6 Pa above the surrounding pressure.</p>",
            "sources": [
              {
                "id": "CAP4-03-00023",
                "label": "p. 11; topic 3 point 20"
              },
              {
                "id": "CAP4-03-00024",
                "label": "p. 11; topic 3 point 21"
              }
            ]
          },
          {
            "id": "capillary-force-balance",
            "title": "Capillary rise: force balance, contact angle and the governing equation",
            "html": "<p><strong>Capillarity</strong> is an interfacial effect produced by surface tension and wetting at a solid wall. Where the meniscus meets the tube, surface tension pulls along the liquid surface at the <strong>contact angle</strong> θ, measured through the liquid. For a wetting liquid (θ &lt; 90°) that pull has an upward vertical component, and it is this component, not viscosity, gravity or any excess air pressure, that supports the raised column. Viscosity only affects how quickly equilibrium is approached.</p><p>For a vertical circular tube of internal radius r, the contact line has length 2πr, so the upward force is 2πr σ cos θ. Neglecting the small meniscus volume, the raised column weighs ρ g πr<sup>2</sup> h. Equating the two gives</p><p><strong>h = 2σ cos θ/(ρ g r) = 4σ cos θ/(ρ g d)</strong></p><p>The sign of cos θ decides the direction. A wetting liquid rises; a nonwetting liquid (θ &gt; 90°) is depressed below the reservoir level; and when θ = 90° the vertical component vanishes, so with finite σ there is no rise or depression at all. Density enters only through the weight of the column: it cannot supply the upward contact-line force.</p>",
            "moreHtml": "<p>The equation assumes a clean tube of uniform bore, a large reservoir that holds the outside level fixed, static equilibrium and a spherical meniscus. It gives the equilibrium height, not the height produced by pouring a chosen volume of liquid into the tube.</p>",
            "sources": [
              {
                "id": "CAP4-03-00003",
                "label": "p. 10; topic 3 point 3"
              },
              {
                "id": "CAP4-03-00005",
                "label": "p. 10; topic 3 point 5"
              },
              {
                "id": "CAP4-03-00009",
                "label": "pp. 10, 11; topic 3 point 6"
              },
              {
                "id": "CAP4-03-00124",
                "label": "p. 14; topic 3 point 122"
              }
            ]
          },
          {
            "id": "capillary-scaling-and-temperature",
            "title": "Using capillary proportionality: tube size, diameter ratios and surface-tension changes",
            "html": "<p>Most capillary problems need proportional reasoning rather than full substitution. From h = 2σ cos θ/(ρ g r), with the same liquid, wetting condition and gravity, <strong>h is inversely proportional to radius</strong>: the upward force grows with r while the column weight grows with r<sup>2</sup>. The product h × d is then constant, so for two tubes dipping into the same reservoir, d<sub>1</sub>/d<sub>2</sub> = h<sub>2</sub>/h<sub>1</sub>. This ratio applies to reservoir-fed equilibrium heights; it says nothing about tubes filled with equal poured volumes.</p><p>At fixed radius, density and contact angle, h is <strong>directly proportional to σ</strong>. Heating usually lowers surface tension, so a given percentage fall in σ gives the same percentage fall in capillary rise. A general temperature rule, however, would also have to check how density and wetting change.</p><p>The same reasoning covers depression. For a nonwetting liquid cos θ is negative and h is a signed, negative displacement. Lowering a positive σ makes h less negative: the depressed level moves up toward the reservoir level but does not cross it while θ stays above 90° and density is unchanged.</p>",
            "moreHtml": "<p>Illustrative checks: halving a tube's radius doubles the rise, for example from 12 mm to 24 mm. If a tube of 0.6 mm bore gives a 50 mm rise, a 1.5 mm tube in the same reservoir gives 50 × 0.6/1.5 = 20 mm. A 15 % fall in σ, with density and wetting unchanged, turns a 40 mm rise into 0.85 × 40 = 34 mm and a 10 mm depression into 8.5 mm.</p>",
            "sources": [
              {
                "id": "CAP4-03-00001",
                "label": "p. 10; topic 3 point 1"
              },
              {
                "id": "CAP4-03-00002",
                "label": "p. 10; topic 3 point 2"
              },
              {
                "id": "CAP4-03-00004",
                "label": "p. 10; topic 3 point 4"
              },
              {
                "id": "CAP4-03-00148",
                "label": "p. 10; topic 3 point 4"
              }
            ]
          },
          {
            "id": "vapour-pressure-cavitation-property-map",
            "title": "Vapour pressure, cavitation and matching fluid properties to phenomena",
            "html": "<p><strong>Vapour pressure</strong> is the pressure at which a liquid and its vapour coexist at a given temperature. If the local <em>absolute</em> pressure in a flowing liquid falls to approximately this value, vapour cavities form; this is <strong>cavitation</strong>. It occurs where velocities are high and pressures low, for example near pump impellers or on suction lines. The relevant threshold is therefore set by the vapour pressure at the operating temperature. Viscosity influences friction losses, and bulk modulus or specific gravity describe other behaviour, but none of them is the phase-change threshold.</p><p>A useful revision device is to pair each property with the phenomenon it governs:</p><table><thead><tr><th scope='col'>Property</th><th scope='col'>Phenomenon or role</th></tr></thead><tbody><tr><th scope='row'>Surface tension</th><td>Capillary rise or depression; curved menisci</td></tr><tr><th scope='row'>Vapour pressure</th><td>Onset of cavitation at low absolute pressure</td></tr><tr><th scope='row'>Dynamic viscosity</th><td>Shear stress between fluid layers</td></tr><tr><th scope='row'>Specific gravity</th><td>Density relative to reference water</td></tr></tbody></table><p>Because each pairing rests on what the property physically controls, it holds whatever order the items are listed in.</p>",
            "moreHtml": "<p>Vapour pressure rises with temperature, so a warm liquid reaches its cavitation threshold at a higher absolute pressure than a cold one. Always compare absolute pressure, not gauge pressure, with the vapour pressure.</p>",
            "sources": [
              {
                "id": "CAP4-03-00006",
                "label": "pp. 10, 11; topic 3 point 6"
              },
              {
                "id": "CAP4-03-00007",
                "label": "pp. 10, 11; topic 3 point 6"
              },
              {
                "id": "CAP4-03-00008",
                "label": "pp. 10, 11; topic 3 point 6"
              },
              {
                "id": "CAP4-03-00009",
                "label": "pp. 10, 11; topic 3 point 6"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-water-minimum-compressibility",
            "status": "corrected",
            "prompt": "Water at room temperature has the minimum compressibility",
            "html": "<p>The capsule point gives no comparison set or thermodynamic condition for this minimum, and room temperature is not a universal minimum-compressibility condition. What can be relied on is the comparison used in soil mechanics: air is far more compressible than liquid water, whose bulk modulus is much greater, so pore water is treated as nearly incompressible relative to entrapped air. Water is still not perfectly incompressible, and mineral solids can be stiffer.</p>",
            "sources": [
              {
                "id": "CAP4-02-00066",
                "label": "p. 8; topic 2 point 61"
              }
            ]
          },
          {
            "id": "caution-capillary-diameter-ratio",
            "status": "corrected",
            "prompt": "Capillary heights in the ratio 2/3 imply tube diameters in the ratio 3:2",
            "html": "<p>The extracted capsule text drops the denominator of the height ratio; the complete page gives 2/3. With the same liquid, contact angle and gravity, h × d is constant, so the diameter ratio is the inverse of the height ratio, 3:2. The result compares equilibrium rises from a common reservoir, not columns formed by pouring equal volumes into each tube.</p>",
            "sources": [
              {
                "id": "CAP4-03-00002",
                "label": "p. 10; topic 3 point 2"
              }
            ]
          },
          {
            "id": "caution-capillarity-temperature-trend",
            "status": "review",
            "prompt": "Capillary rise or fall decreases with rise in temperature",
            "html": "<p>This is a usual trend, not an unconditional law for every liquid and temperature range. The rise is proportional to σ cos θ/ρ, so a fall in surface tension reduces it only while density and contact angle change little. A universal statement would have to account for all three.</p>",
            "sources": [
              {
                "id": "CAP4-03-00004",
                "label": "p. 10; topic 3 point 4"
              }
            ]
          },
          {
            "id": "caution-capillary-force-statement-incomplete",
            "status": "review",
            "prompt": "Capillary rise of water depends upon the force responsible",
            "html": "<p>The capsule point is incomplete as printed and names no force or quantity. The underlying relation is the equilibrium between the vertical surface-tension force 2πr σ cos θ and the column weight ρ g πr<sup>2</sup> h; no missing source data has been assumed beyond that standard force balance.</p>",
            "sources": [
              {
                "id": "CAP4-03-00005",
                "label": "p. 10; topic 3 point 5"
              }
            ]
          },
          {
            "id": "caution-bulk-modulus-pressure-trend",
            "status": "review",
            "prompt": "Bulk modulus of a liquid increases with pressure",
            "html": "<p>An increase of K with pressure is a common measured trend for liquids, but it is state- and path-dependent rather than a consequence of the definition K = −dp/(dV/V). Use the measured K for the actual temperature and pressure range; the only general conclusion is that a larger K means a smaller volume strain for the same pressure increment.</p>",
            "sources": [
              {
                "id": "CAP4-03-00011",
                "label": "p. 11; topic 3 point 8"
              }
            ]
          },
          {
            "id": "caution-soap-bubble-excess-pressure",
            "status": "corrected",
            "prompt": "The pressure inside a soap bubble of radius R is 4T/R",
            "html": "<p>4T/R, written 4σ/R in these notes, is the <strong>excess</strong> of internal pressure over the surrounding air, not the absolute internal pressure. It follows from the two interfaces of a thin film; a single-interface liquid drop has excess pressure 2σ/R. Add the surrounding absolute pressure to obtain the absolute internal pressure.</p>",
            "sources": [
              {
                "id": "CAP4-03-00024",
                "label": "p. 11; topic 3 point 21"
              }
            ]
          },
          {
            "id": "caution-capillary-depression-heating",
            "status": "review",
            "prompt": "Capillary fall of a nonwetting liquid also decreases when it is heated",
            "html": "<p>The bracketed fall case holds only under stated conditions. With a contact angle that stays above 90° and unchanged density and tube radius, a lower but still positive σ makes the signed displacement less negative, so the depression shrinks toward the reservoir level without reversing into a rise. If heating also changed density or wetting, the outcome would have to be recalculated.</p>",
            "sources": [
              {
                "id": "CAP4-03-00148",
                "label": "p. 10; topic 3 point 4"
              }
            ]
          }
        ],
        "gaps": [
          "The capsule points supply no property tables, so densities, viscosities, surface tensions and vapour pressures at stated temperatures must come from a reliable data source.",
          "Cavitation is covered only as the vapour-pressure threshold; suction-head margins and cavitation damage are not developed in this topic.",
          "The temperature at which water is least compressible is not established by the capsule and is not asserted in these notes.",
          "Non-Newtonian coverage stops at recognising power-law and yield-stress behaviour; fitting rheological models to measured data is outside these questions."
        ]
      },
      "ACiE0302": {
        "code": "ACiE0302",
        "questionCount": 17,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation used in this topic</th></tr></thead><tbody><tr><th scope='row'>Pressure references</th><td>p<sub>abs</sub> = p<sub>atm</sub> + p<sub>gauge</sub> with signed gauge pressure; a vacuum magnitude is subtracted</td></tr><tr><th scope='row'>Hydrostatic variation</th><td>dp/dz = −ρg; p = p<sub>0</sub> + ρgh; z + p/(ρg) = constant</td></tr><tr><th scope='row'>Differential manometer</th><td>Δp = (ρ<sub>m</sub> − ρ) g h for equal-elevation taps</td></tr><tr><th scope='row'>Plane surface</th><td>F = ρ g h<sub>c</sub> A; h<sub>p</sub> = h<sub>c</sub> + I<sub>G</sub> sin<sup>2</sup>θ/(A h<sub>c</sub>)</td></tr><tr><th scope='row'>Uniform net pressure on a curved surface</th><td>resultant along an axis = p × area projected normal to that axis</td></tr><tr><th scope='row'>Buoyancy</th><td>F<sub>B</sub> = ρ g V<sub>displaced</sub>; apparent weight = W − F<sub>B</sub></td></tr><tr><th scope='row'>Metacentric height</th><td>BM = I/V; GM = BM − BG with G above B; initially stable if GM &gt; 0</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "absolute-gauge-pressure-and-pressure-at-a-point",
            "title": "Pressure at a point: absolute and gauge references, Bourdon gauges and Pascal's law",
            "html": "<p>Pressure can be quoted against two references. <strong>Absolute pressure</strong> is measured from a perfect vacuum; <strong>gauge pressure</strong> is measured from the local atmosphere. With gauge pressure taken as a signed quantity, <strong>p<sub>abs</sub> = p<sub>atm</sub> + p<sub>gauge</sub></strong>. A suction or vacuum reading is simply a negative gauge pressure; if a vacuum is instead reported as a positive magnitude, that magnitude is subtracted from atmospheric pressure. The atmospheric term never takes an arbitrary plus-or-minus sign.</p><p>An ordinary <strong>Bourdon gauge</strong> contains a curved tube that tends to straighten as the pressure difference between its inside and the surrounding case grows. With the case vented to atmosphere, the pointer indicates gauge pressure; instruments that read absolute pressure need a different reference arrangement.</p><p><strong>Pascal's law</strong> states that in a fluid at rest the pressure at a point is the same in every direction. In a moving viscous fluid the normal stresses on differently oriented planes can differ, because viscous stresses are directional. That does not make pressure a vector: the stress tensor splits into an isotropic pressure part, which is a scalar, and a viscous part that depends on how the fluid is deforming.</p>",
            "moreHtml": "<p>Illustrative check with a local atmosphere of 101 kPa absolute: a gauge reading of +150 kPa means 251 kPa absolute, and a vacuum of 40 kPa, reported as a magnitude, means 101 − 40 = 61 kPa absolute. Both are the same signed relation, with gauge pressures of +150 kPa and −40 kPa.</p>",
            "sources": [
              {
                "id": "CAP4-03-00026",
                "label": "p. 11; topic 3 point 23"
              },
              {
                "id": "CAP4-03-00033",
                "label": "p. 11; topic 3 point 30"
              },
              {
                "id": "CAP4-03-00027",
                "label": "p. 11; topic 3 point 24"
              }
            ]
          },
          {
            "id": "hydrostatic-pressure-and-piezometric-head",
            "title": "Pressure variation with depth and the constancy of piezometric head",
            "html": "<p>In a fluid at rest under uniform gravity, a vertical force balance on a small element gives <strong>dp/dz = −ρg</strong>, with z measured upward. For a liquid of constant density this integrates to <strong>p/(ρg) + z = constant</strong> throughout a connected body of that liquid. The sum is the <strong>piezometric head</strong>: pressure alone increases downward, elevation alone increases upward, and the two trade off exactly so that their sum does not change.</p><p>Measured from a free surface at atmospheric pressure, the gauge pressure at depth h is <strong>p = ρgh</strong>. With ρ = 1000 kg/m<sup>3</sup>, each metre of water adds ρg pascals, so the value of g must be stated: 9.81 m/s<sup>2</sup> gives 9810 Pa per metre, whereas 9.8 m/s<sup>2</sup> gives 9800 Pa. Mixing the two in one line of working is an arithmetic error, not a physical difference.</p><p>Pressure head, p/(ρg), expresses a pressure as an equivalent height of the liquid concerned, which is why piezometers and manometers read heads directly.</p>",
            "moreHtml": "<p>Illustrative check: 4 m below a free water surface, p = 1000 × 9.81 × 4 = 39240 Pa = 39.24 kPa gauge. A point 1.5 m higher in the same tank has p = 1000 × 9.81 × 2.5 = 24.525 kPa, and both points share the same piezometric level, that of the free surface.</p>",
            "sources": [
              {
                "id": "CAP4-03-00029",
                "label": "p. 11; topic 3 point 26"
              },
              {
                "id": "CAP4-03-00030",
                "label": "p. 11; topic 3 point 27"
              }
            ]
          },
          {
            "id": "manometer-readings",
            "title": "Manometers: open U-tubes and differential mercury gauges",
            "html": "<p>A manometer is read by walking through the connected fluid columns from one end to the other: add ρgh for every step downward, subtract ρgh for every step upward, and equate the result to the pressure at the far end. Horizontal steps within one continuous fluid change nothing.</p><p><strong>Open U-tube.</strong> When one limb is tapped into a gas pipe and the other left open to the air, the gas pushes its own limb down. If the gas-side level is lower by h, the gas is above atmospheric pressure by ρ<sub>m</sub>gh, where ρ<sub>m</sub> is the density of the manometer liquid; gas density is usually negligible. A higher gas-side level would indicate suction. The result is a gauge pressure; add atmospheric pressure for an absolute value.</p><p><strong>Differential manometer.</strong> When two taps at the same elevation on a water pipe are joined through a mercury U-tube, a mercury-level difference h is balanced not only by mercury but also by the water columns above it. Walking the circuit gives <strong>Δp = (ρ<sub>Hg</sub> − ρ<sub>w</sub>) g h</strong>. Using the mercury density alone ignores the water filling the rest of both limbs and overestimates the pressure difference.</p>",
            "moreHtml": "<p>Illustrative checks with g = 9.81 m/s<sup>2</sup>: a 0.10 m mercury difference between equal-elevation water taps gives (13600 − 1000) × 9.81 × 0.10 = 12360.6 Pa ≈ 12.36 kPa. A water U-tube with its gas side 0.10 m lower indicates 1000 × 9.81 × 0.10 = 981 Pa gauge. If the taps are at different elevations, their elevation difference must be included in the walk-through.</p>",
            "sources": [
              {
                "id": "CAP4-03-00101",
                "label": "p. 13; topic 3 point 100"
              },
              {
                "id": "CAP4-03-00113",
                "label": "p. 13; topic 3 point 110"
              }
            ]
          },
          {
            "id": "hydrostatic-forces-and-centre-of-pressure",
            "title": "Hydrostatic force on submerged surfaces and the centre of pressure",
            "html": "<p>On a plane surface of area A in a liquid of constant density, the resultant hydrostatic force equals the pressure at the area centroid times the area: <strong>F = ρ g h<sub>c</sub> A</strong>, where h<sub>c</sub> is the vertical depth of the centroid and atmospheric pressure acting on both faces cancels. The force does not act at the centroid. Because pressure increases with depth, the lower part of an inclined or vertical surface carries more load, and the <strong>centre of pressure</strong> lies deeper:</p><p><strong>h<sub>p</sub> = h<sub>c</sub> + I<sub>G</sub> sin<sup>2</sup>θ/(A h<sub>c</sub>)</strong></p><p>Here I<sub>G</sub> is the second moment of area about the centroidal axis parallel to the line where the plane meets the free surface, and θ is the plane's inclination to the horizontal. The correction is positive for any non-horizontal plane and shrinks as the surface is submerged more deeply. The reference point is the geometric <em>area centroid</em>, not the centre of gravity of the gate, which could differ if the gate's mass is non-uniform. On a horizontal plane the pressure is uniform, so the centre of pressure coincides with the centroid.</p><p>For curved surfaces, resolve components. A uniform net pressure p on a hemispherical dome gives an axial resultant equal to p times the projected circular area, πr<sup>2</sup>, not p times the curved area 2πr<sup>2</sup>, because the inclined surface forces partly cancel. Depth-varying hydrostatic pressure on a curved surface must instead be integrated, or handled through its projected-area and liquid-weight components.</p>",
            "moreHtml": "<p>Illustrative check: a vertical rectangular gate 2 m wide and 3 m high has its top edge at the water surface. Then h<sub>c</sub> = 1.5 m, A = 6 m<sup>2</sup> and F = 1000 × 9.81 × 1.5 × 6 = 88290 N ≈ 88.3 kN. With I<sub>G</sub> = 2 × 3<sup>3</sup>/12 = 4.5 m<sup>4</sup> and sin 90° = 1, h<sub>p</sub> = 1.5 + 4.5/(6 × 1.5) = 2.0 m, two-thirds of the depth.</p>",
            "sources": [
              {
                "id": "CAP4-03-00123",
                "label": "p. 14; topic 3 point 121"
              },
              {
                "id": "CAP4-03-00028",
                "label": "p. 11; topic 3 point 25"
              }
            ]
          },
          {
            "id": "buoyancy-archimedes-and-melting-ice",
            "title": "Buoyancy: displaced-liquid weight, direction, depth independence and floating ice",
            "html": "<p>Integrating hydrostatic pressure over the closed surface of a submerged body cancels the horizontal components and leaves an upward resultant equal to the weight of the displaced liquid: <strong>F<sub>B</sub> = ρ g V<sub>displaced</sub></strong> (Archimedes' principle). It is set by the liquid's density and the displaced volume, not by the body's own weight, and it acts whether or not the body is in equilibrium.</p><ul><li><strong>Direction.</strong> Pressure is greater beneath a body than above it, so hydrostatic buoyancy acts upward, opposite gravity. A body moving through the liquid also experiences drag and dynamic pressure forces that depend on the relative motion; those are separate and reverse with the motion, whereas buoyancy does not.</li><li><strong>Depth.</strong> Moving a rigid, fully submerged body deeper raises the pressure on its top and bottom by the same amount. With constant liquid density and unchanged displaced volume, the buoyant force stays constant.</li><li><strong>Floating bodies.</strong> A floating body displaces its own weight of liquid.</li></ul><p>The last point explains melting ice. Floating pure ice of mass m displaces m/ρ<sub>w</sub> of freshwater, exactly the volume of meltwater that mass produces, so the water level stays the same, provided evaporation and temperature-driven density changes are neglected. The conclusion does not transfer automatically to ice floating in a liquid of different density, or to a solid that sinks.</p>",
            "moreHtml": "<p>Illustrative check: a 0.02 m<sup>3</sup> rigid block fully submerged in freshwater receives 1000 × 9.81 × 0.02 = 196.2 N of buoyancy at 1 m depth and the same 196.2 N at 10 m depth, even though the absolute pressure on it has risen by about 88 kPa.</p>",
            "sources": [
              {
                "id": "CAP4-03-00025",
                "label": "p. 11; topic 3 point 22"
              },
              {
                "id": "CAP4-03-00134",
                "label": "p. 14; topic 3 point 130"
              },
              {
                "id": "CAP4-03-00135",
                "label": "p. 14; topic 3 point 131"
              },
              {
                "id": "CAP4-03-00111",
                "label": "pp. 13, 15; topic 3 point 108; topic 3 point 141"
              }
            ]
          },
          {
            "id": "apparent-weight-in-two-liquids",
            "title": "Apparent weight in two liquids: finding a body's volume and true weight",
            "html": "<p>A body suspended fully submerged has an <strong>apparent weight</strong> equal to its true weight minus the buoyant force: W<sub>app</sub> = W − ρ g V. Weighing the same rigid body in two liquids of known density gives two equations in two unknowns, the true weight W and the volume V.</p><p>Subtracting the equations eliminates W: the difference between the apparent weights equals the difference between the buoyant forces, (ρ<sub>1</sub> − ρ<sub>2</sub>) g V. The volume therefore depends on the <em>density difference</em> between the liquids, not on either density alone. Once V, or equivalently the buoyancy in one liquid, is known, W follows by adding that buoyancy back to the corresponding apparent weight. A body always appears lighter in the denser liquid, and neither submerged reading is its true weight.</p><p>Writing the buoyancy in water as B shortens the algebra: W = W<sub>app,water</sub> + B and W = W<sub>app,oil</sub> + SG<sub>oil</sub> × B. Equating the two gives B, and then W and V = B/(ρ<sub>w</sub>g). Keep the second liquid's specific gravity referenced to the same water density used for B.</p>",
            "moreHtml": "<p>Illustrative check: a body reads 60 N in water and 70 N in oil of specific gravity 0.90. Then 0.10B = 10 N, so B = 100 N and W = 60 + 100 = 160 N. Its volume is 100/(1000 × 9.81) = 0.01019 m<sup>3</sup> ≈ 10.19 litres.</p>",
            "sources": [
              {
                "id": "CAP4-03-00132",
                "label": "p. 14; topic 3 point 129"
              },
              {
                "id": "CAP4-03-00133",
                "label": "p. 14; topic 3 point 129"
              }
            ]
          },
          {
            "id": "floating-stability-metacentric-height",
            "title": "Stability of floating bodies: centre of buoyancy, metacentre and GM",
            "html": "<p>When a floating body heels through a small angle, the shape of its displaced volume changes and the <strong>centre of buoyancy</strong> B moves toward the more deeply immersed side. The line of the buoyant force then crosses the body's original vertical centreline at the <strong>metacentre</strong> M. The distance from B to M is</p><p><strong>BM = I/V</strong></p><p>where I is the second moment of the <em>waterplane area</em> about the heel axis and V is the displaced volume. The <strong>metacentric height</strong> is GM = BM − BG when the centre of gravity G lies above B; add BG instead when G lies below B.</p><ul><li>GM &gt; 0: M above G. Weight and buoyancy form a restoring couple, so the body is stable.</li><li>GM = 0: neutral equilibrium.</li><li>GM &lt; 0: M below G. The couple increases the heel, so the body is unstable.</li></ul><p>This criterion describes initial, small-angle stability and uses the centre of gravity. A geometric centroid can stand in for G only when the mass is distributed uniformly enough for the two points to coincide. The second moment must be the waterplane-area moment, not a mass or volume moment.</p>",
            "moreHtml": "<p>Illustrative check: a rectangular pontoon 6 m long and 3 m wide floats at 1 m draught, so V = 18 m<sup>3</sup> and B is 0.5 m above the keel. About the long axis, I = 6 × 3<sup>3</sup>/12 = 13.5 m<sup>4</sup> and BM = 13.5/18 = 0.75 m. If G is 1.0 m above the keel, BG = 0.5 m and GM = 0.75 − 0.5 = 0.25 m, so the pontoon is initially stable in roll.</p>",
            "sources": [
              {
                "id": "CAP4-03-00031",
                "label": "p. 11; topic 3 point 28"
              },
              {
                "id": "CAP4-03-00032",
                "label": "p. 11; topic 3 point 29"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-absolute-gauge-relation",
            "status": "corrected",
            "prompt": "Absolute pressure equals gauge pressure plus or minus atmospheric pressure",
            "html": "<p>The capsule's ± on the atmospheric term is misleading. For signed gauge pressure the relation is p<sub>abs</sub> = p<sub>atm</sub> + p<sub>gauge</sub>, with a vacuum entering as a negative gauge value. Only when a vacuum is reported as a positive magnitude is that magnitude subtracted from atmospheric pressure.</p>",
            "sources": [
              {
                "id": "CAP4-03-00026",
                "label": "p. 11; topic 3 point 23"
              }
            ]
          },
          {
            "id": "caution-pressure-direction-viscous-flow",
            "status": "corrected",
            "prompt": "Pressure at a point is not the same in all directions when the fluid is viscous and moving",
            "html": "<p>The capsule point confuses pressure with total normal stress. In a deforming viscous fluid the normal traction can differ between planes because viscous stresses are directional, but pressure itself is the scalar, isotropic part of the stress tensor. Equal normal stress in every direction holds wherever shear stresses are absent, as in a fluid at rest.</p>",
            "sources": [
              {
                "id": "CAP4-03-00027",
                "label": "p. 11; topic 3 point 24"
              }
            ]
          },
          {
            "id": "caution-hemisphere-uniform-pressure",
            "status": "review",
            "prompt": "The force on a hemispherical surface under pressure P0 is πr²P0",
            "html": "<p>πr<sup>2</sup>P<sub>0</sub> is the resultant along the dome's axis for a uniform <strong>net</strong> pressure: pressure times projected area. It is not pressure times the curved area. Where hydrostatic pressure varies with depth over the dome, the resultant must be found by integration or from projected-area and liquid-weight components.</p>",
            "sources": [
              {
                "id": "CAP4-03-00028",
                "label": "p. 11; topic 3 point 25"
              }
            ]
          },
          {
            "id": "caution-one-metre-water-pressure",
            "status": "corrected",
            "prompt": "Pressure 1 m below a water surface is 1000 × 9.8 × 1 = 9810 Pa",
            "html": "<p>The printed arithmetic mixes two values of g: 1000 × 9.8 × 1 equals 9800 Pa, while 9810 Pa requires g = 9.81 m/s<sup>2</sup>. Either figure is acceptable only when the gravitational acceleration used is stated and applied consistently; these notes use 9.81 m/s<sup>2</sup>.</p>",
            "sources": [
              {
                "id": "CAP4-03-00030",
                "label": "p. 11; topic 3 point 27"
              }
            ]
          },
          {
            "id": "caution-metacentre-above-centre-of-gravity",
            "status": "corrected",
            "prompt": "A floating body is stable if its metacentre is above the centroid",
            "html": "<p>The stability test compares the metacentre with the <strong>centre of gravity</strong> G, not an unspecified centroid, and it describes initial stability for small angles of heel: the body is initially stable when GM &gt; 0. A geometric centroid is equivalent to G only for a suitably uniform mass distribution.</p>",
            "sources": [
              {
                "id": "CAP4-03-00032",
                "label": "p. 11; topic 3 point 29"
              }
            ]
          },
          {
            "id": "caution-melting-ice-level",
            "status": "corrected",
            "prompt": "Water level after floating ice melts, printed in one point as remains the change",
            "html": "<p>Two capsule points duplicate the floating-ice fact, and the second is garbled as 'remains the change'. The corrected statement is that the level stays <strong>unchanged</strong> for pure ice floating freely in freshwater, neglecting evaporation and temperature-related density changes, because the ice displaces exactly the volume of water its melt produces.</p>",
            "sources": [
              {
                "id": "CAP4-03-00111",
                "label": "pp. 13, 15; topic 3 point 108; topic 3 point 141"
              }
            ]
          },
          {
            "id": "caution-centre-of-pressure-reference",
            "status": "corrected",
            "prompt": "On an inclined submerged plane the centre of pressure is below the centre of gravity",
            "html": "<p>The correct reference point is the <strong>area centroid</strong> of the plane, not the centre of gravity of the gate. For a non-horizontal plane under net hydrostatic loading, the centre of pressure lies deeper than the centroid by I<sub>G</sub> sin<sup>2</sup>θ/(A h<sub>c</sub>). The centre of gravity coincides with the centroid only for a uniform gate.</p>",
            "sources": [
              {
                "id": "CAP4-03-00123",
                "label": "p. 14; topic 3 point 121"
              }
            ]
          },
          {
            "id": "caution-buoyancy-moving-sphere",
            "status": "review",
            "prompt": "A ball dropping through a fluid experiences buoyancy vertically upward",
            "html": "<p>True for hydrostatic buoyancy itself, which acts upward whatever the direction of motion. A moving sphere also experiences drag and dynamic pressure forces that depend on its velocity relative to the fluid; these must be treated separately rather than folded into buoyancy.</p>",
            "sources": [
              {
                "id": "CAP4-03-00134",
                "label": "p. 14; topic 3 point 130"
              }
            ]
          }
        ],
        "gaps": [
          "Forces on curved gates with depth-varying pressure are touched only through the uniform-pressure hemisphere; full curved-surface integration and pressure diagrams are not worked.",
          "Stability coverage is limited to initial small-angle metacentric stability; large-angle righting behaviour and the stability of fully submerged bodies are not examined by these questions.",
          "Inclined-tube manometers, micromanometers and the calibration uncertainty of pressure gauges are outside the capsule items."
        ]
      },
      "ACiE0303": {
        "code": "ACiE0303",
        "questionCount": 23,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation used in this topic</th></tr></thead><tbody><tr><th scope='row'>Steady mass flow</th><td>ρ<sub>1</sub>A<sub>1</sub>V<sub>1</sub> = ρ<sub>2</sub>A<sub>2</sub>V<sub>2</sub>; incompressible A<sub>1</sub>V<sub>1</sub> = A<sub>2</sub>V<sub>2</sub> = Q</td></tr><tr><th scope='row'>Local continuity</th><td>∂ρ/∂t + ∇·(ρu) = 0; incompressible ∂u/∂x + ∂v/∂y + ∂w/∂z = 0</td></tr><tr><th scope='row'>Bernoulli (ideal)</th><td>p/(ρg) + V<sup>2</sup>/(2g) + z = H = constant</td></tr><tr><th scope='row'>Energy equation (real)</th><td>H<sub>1</sub> = H<sub>2</sub> + h<sub>L</sub> with no pump or turbine</td></tr><tr><th scope='row'>Momentum</th><td>ΣF = ρQ(V<sub>out</sub> − V<sub>in</sub>) as vectors; normal jet on a fixed flat plate F = ρAV<sup>2</sup></td></tr><tr><th scope='row'>Pitot-static tube</th><td>V = C<sub>v</sub> √(2Δp/ρ)</td></tr><tr><th scope='row'>Venturi or orifice meter</th><td>Q = C<sub>d</sub> A<sub>1</sub>A<sub>2</sub> √(2gΔh)/√(A<sub>1</sub><sup>2</sup> − A<sub>2</sub><sup>2</sup>)</td></tr><tr><th scope='row'>Kinematic similarity</th><td>Q<sub>r</sub> = L<sub>r</sub><sup>2</sup> V<sub>r</sub></td></tr></tbody></table>",
        "blocks": [
          {
            "id": "flow-classification-and-continuity",
            "title": "Steady and uniform flow, and the continuity equation for pipes and ducts",
            "html": "<p>Two independent questions classify a flow. Is it <strong>steady</strong>, meaning nothing changes with time at a fixed point? Is it <strong>uniform</strong>, meaning nothing changes with position along the flow at a given instant? A constant discharge through a fixed conical reducer is steady, because each section's velocity does not change with time, but it is <strong>nonuniform</strong>, because V = Q/A changes as the area changes. A constant discharge does not imply a constant speed along the conduit.</p><p><strong>Continuity</strong> expresses conservation of mass for a control volume without leakage. In steady flow the mass rate entering equals the mass rate leaving: <strong>ρ<sub>1</sub>A<sub>1</sub>V<sub>1</sub> = ρ<sub>2</sub>A<sub>2</sub>V<sub>2</sub></strong>. For a liquid of constant density this reduces to A<sub>1</sub>V<sub>1</sub> = A<sub>2</sub>V<sub>2</sub> = Q, so mean velocity varies inversely with area: halving the area doubles the speed. The narrowest section of a Venturi therefore carries the highest mean speed, and in the ideal energy model its static pressure is the lowest. For a gas whose density changes, equal volume discharge is wrong; equate the mass flows and let the density ratio adjust the velocity.</p>",
            "moreHtml": "<p>Illustrative checks: water at 1.5 m/s in a 0.30 m pipe that narrows to 0.15 m speeds up to 1.5 × (0.30/0.15)<sup>2</sup> = 6.0 m/s. A gas entering at 3 kg/m<sup>3</sup> through 0.05 m<sup>2</sup> at 10 m/s carries 1.5 kg/s; at an outlet where the density is 1.5 kg/m<sup>3</sup> and the area 0.04 m<sup>2</sup>, the speed must be 1.5/(1.5 × 0.04) = 25 m/s.</p>",
            "sources": [
              {
                "id": "CAP4-03-00125",
                "label": "p. 14; topic 3 point 123"
              },
              {
                "id": "CAP4-03-00040",
                "label": "p. 11; topic 3 point 37"
              },
              {
                "id": "CAP4-03-00039",
                "label": "p. 11; topic 3 point 36"
              },
              {
                "id": "CAP4-03-00050",
                "label": "p. 12; topic 3 point 47"
              }
            ]
          },
          {
            "id": "differential-continuity-incompressibility",
            "title": "Local form of continuity and the incompressibility condition",
            "html": "<p>At a point, conservation of mass reads <strong>∂ρ/∂t + ∇·(ρu) = 0</strong>. This general statement holds for steady or unsteady, one-, two- or three-dimensional, laminar or turbulent flow. The velocity divergence ∇·u is the fractional rate at which a moving fluid element changes its volume, so a fluid whose elements keep their volume, as in incompressible motion, requires</p><p><strong>∇·u = ∂u/∂x + ∂v/∂y + ∂w/∂z = 0</strong></p><p>This reduction needs neither steadiness nor two-dimensionality; steady two-dimensional incompressible flow is only one case it covers. It constrains velocity <em>gradients</em>: if two of the normal gradients are known at a point, the third is fixed, but the velocity components themselves are not.</p><p>Keep three conditions apart. Zero divergence means no volumetric expansion, the incompressibility condition. Zero curl, ∇ × u = 0, means irrotational flow. Zero local time derivative, ∂u/∂t = 0, means steady flow. A flow can satisfy any one of these without the others.</p>",
            "moreHtml": "<p>Illustrative check: if u = 3x and v = −y, with coefficients in s<sup>−1</sup>, then ∂u/∂x = 3 s<sup>−1</sup> and ∂v/∂y = −1 s<sup>−1</sup>, so incompressibility demands ∂w/∂z = −2 s<sup>−1</sup>, for example w = −2z. The sum 3 − 1 − 2 is zero at every point.</p>",
            "sources": [
              {
                "id": "CAP4-03-00035",
                "label": "pp. 11, 14; topic 3 point 32; topic 3 point 139"
              },
              {
                "id": "CAP4-03-00143",
                "label": "p. 14; topic 3 point 140"
              },
              {
                "id": "CAP4-03-00109",
                "label": "p. 13; topic 3 point 106"
              }
            ]
          },
          {
            "id": "bernoulli-heads-and-streamlines",
            "title": "Bernoulli's equation: pressure, velocity and elevation heads and where the constant applies",
            "html": "<p>For steady, inviscid, incompressible flow with no machines, Bernoulli's equation in head form is</p><p><strong>p/(ρg) + V<sup>2</sup>/(2g) + z = H</strong></p><p>Each term has units of length and represents one <strong>component</strong> of mechanical energy per unit weight of fluid: pressure head, velocity head and elevation (datum) head. Only their sum is the <strong>total head</strong> H. The piezometric head is the partial sum z + p/(ρg), which leaves out the velocity head. State the datum for z and whether p is gauge or absolute; both shift the individual numbers, though not their differences.</p><p>Where does one constant apply? The basic derivation integrates Euler's equation <em>along a streamline</em>, so in rotational flow the constant may differ from one streamline to another. If the flow is also <strong>irrotational</strong>, the derivation holds across streamlines and a single Bernoulli constant applies throughout a connected region. Different streamlines therefore need not carry different constants; they may, but only when the flow is rotational.</p>",
            "moreHtml": "<p>Illustrative check: at a section 5 m above datum with gauge pressure 29.43 kPa and speed 2.0 m/s, the heads are z = 5 m, p/(ρg) = 29430/9810 = 3.0 m and V<sup>2</sup>/(2g) = 4/19.62 = 0.204 m. Total head is 8.204 m, while the piezometric head is 8.0 m.</p>",
            "sources": [
              {
                "id": "CAP4-03-00034",
                "label": "p. 11; topic 3 point 31"
              },
              {
                "id": "CAP4-03-00126",
                "label": "p. 14; topic 3 point 124"
              },
              {
                "id": "CAP4-03-00041",
                "label": "p. 11; topic 3 point 38"
              }
            ]
          },
          {
            "id": "energy-equation-head-loss-and-diffusers",
            "title": "Real flows: head loss in the energy equation and pressure recovery in diffusers",
            "html": "<p>Viscosity dissipates mechanical energy as heat, so the lossless Bernoulli form cannot be applied unchanged to a real pipe. The engineering <strong>energy equation</strong> keeps the same heads and adds a positive loss term: for flow from section 1 to section 2 with no pump or turbine, <strong>H<sub>1</sub> = H<sub>2</sub> + h<sub>L</sub></strong>. Friction therefore makes the downstream total head smaller, never larger. Energy is still conserved overall; the dissipated part simply leaves the mechanical budget.</p><p>The same equation explains why flow can move from low to high static pressure. In a horizontal diffuser the stream slows, so its velocity head falls. With z<sub>1</sub> = z<sub>2</sub> and unit kinetic-energy factors,</p><p><strong>(p<sub>2</sub> − p<sub>1</sub>)/(ρg) = (V<sub>1</sub><sup>2</sup> − V<sub>2</sub><sup>2</sup>)/(2g) − h<sub>L</sub></strong></p><p>If the drop in velocity head exceeds the loss, static pressure rises along the flow even though the total head falls. Fluid does not have to travel from higher to lower static pressure; without added work it travels from higher to lower total head.</p>",
            "moreHtml": "<p>Illustrative check: a horizontal diffuser slows water from 5 m/s to 2 m/s with an assumed loss of 0.30 m. The velocity-head drop is (25 − 4)/19.62 = 1.070 m, so the pressure head rises by 1.070 − 0.30 = 0.770 m, about 7.56 kPa, while the total head falls by 0.30 m.</p>",
            "sources": [
              {
                "id": "CAP4-03-00042",
                "label": "p. 11; topic 3 point 39"
              },
              {
                "id": "CAP4-03-00136",
                "label": "p. 14; topic 3 point 132"
              }
            ]
          },
          {
            "id": "vertical-pipe-pressure-and-elevation",
            "title": "Flow in a vertical pipe of constant area: how pressure changes with height",
            "html": "<p>In a constant-area pipe, continuity makes the mean velocity the same at every section, so the velocity heads in Bernoulli's equation cancel between any two sections. Without friction or machines the equation collapses to <strong>p/(ρg) + z = constant</strong>, exactly the hydrostatic relation: <strong>pressure decreases as elevation increases</strong>, dp/dz = −ρg.</p><p>This holds whether the water moves upward or downward. It is tempting to think that water flowing downward must lose pressure as it descends, but its fall in elevation head is matched by an equal rise in pressure head. Between two sections a vertical distance Δz apart, the lower section's pressure exceeds the upper section's by ρgΔz.</p><p>Friction modifies the picture predictably. For downward flow, a loss h<sub>L</sub> between the sections reduces the pressure gain to ρg(Δz − h<sub>L</sub>); for upward flow, pressure falls with height by ρg(Δz + h<sub>L</sub>). In both cases the elevation effect has the same sign.</p>",
            "moreHtml": "<p>Illustrative check: in a frictionless constant-area vertical pipe, a section 5 m below another has a pressure higher by 1000 × 9.81 × 5 = 49050 Pa ≈ 49.05 kPa, regardless of the flow direction.</p>",
            "sources": [
              {
                "id": "CAP4-03-00061",
                "label": "p. 12; topic 3 point 57"
              },
              {
                "id": "CAP4-03-00147",
                "label": "p. 15; topic 3 point 144"
              }
            ]
          },
          {
            "id": "momentum-jets-plates-and-venturi",
            "title": "Momentum principle: jet forces on plates and control volumes around meters",
            "html": "<p>For a steady control volume, the resultant external force equals the net rate of momentum outflow: <strong>ΣF = ρQ(V<sub>out</sub> − V<sub>in</sub>)</strong>, applied component by component as vectors. External forces include pressures on the control surfaces, reactions from walls or plates, and weight.</p><p>A horizontal jet striking a large, smooth, stationary flat plate at right angles cannot pass through it. The plate destroys the jet's normal velocity and the water spreads out tangentially over the plate. In the jet direction the momentum flux ρQV = ρAV<sup>2</sup> is removed, so the force on the plate is <strong>F = ρAV<sup>2</sup></strong>. The speed along the plate may stay nearly unchanged; the change of direction is what produces the force. A curved vane that turned the jet completely back would ideally double it.</p><p>Momentum conservation applies to every flow, including a Venturi meter. A control volume around the converging section must balance the change in momentum flux against the pressure forces on its ends and the wall reaction. Venturi discharge equations use continuity with the energy equation because that route conveniently relates pressure difference to flow, not because the momentum principle fails there.</p>",
            "moreHtml": "<p>Illustrative check: a 50 mm diameter jet at 20 m/s has A = π × 0.05<sup>2</sup>/4 = 0.001963 m<sup>2</sup>, Q = 0.03927 m<sup>3</sup>/s and a mass rate of 39.27 kg/s. Striking a fixed plate normally it exerts 39.27 × 20 ≈ 785 N; an ideal full reversal would give about 1571 N.</p>",
            "sources": [
              {
                "id": "CAP4-03-00047",
                "label": "p. 12; topic 3 point 44"
              },
              {
                "id": "CAP4-03-00048",
                "label": "p. 12; topic 3 point 45"
              },
              {
                "id": "CAP4-03-00036",
                "label": "p. 11; topic 3 point 33"
              }
            ]
          },
          {
            "id": "inertia-force-and-model-similarity",
            "title": "Inertia-force conventions and geometric, kinematic and dynamic similarity",
            "html": "<p>Newton's second law says that the resultant of the <em>real</em> external forces on a fluid mass equals ma. The d'Alembert convention moves that term across and introduces a fictitious <strong>inertial force −ma</strong>, so the problem can be written as an equilibrium balance. The inertial force is not an additional physical cause of acceleration. Some texts loosely call the accelerating resultant ma the 'inertia force'; whichever label is used, keep its sign and meaning explicit. Fluid momentum equations and the force ratios of dimensional analysis rely on the same distinction.</p><p>Hydraulic models are related to prototypes by three levels of similarity:</p><ul><li><strong>Geometric</strong>: all corresponding lengths share one scale ratio L<sub>r</sub>.</li><li><strong>Kinematic</strong>: corresponding velocities share one ratio V<sub>r</sub>, so streamline patterns are similar. Discharge then scales as area times velocity, Q<sub>r</sub> = L<sub>r</sub><sup>2</sup>V<sub>r</sub>; 'similar discharge' means this consistent scaling, not equal numerical discharge.</li><li><strong>Dynamic</strong>: ratios of corresponding forces are equal, achieved by matching the relevant dimensionless force groups.</li></ul>",
            "moreHtml": "<p>Illustrative check: if a model's lengths are 1/25 of the prototype's and its velocities 1/5, discharge scales by (1/25)<sup>2</sup> × (1/5) = 1/3125. A prototype flow of 3125 m<sup>3</sup>/s would correspond to 1 m<sup>3</sup>/s in the model.</p>",
            "sources": [
              {
                "id": "CAP4-03-00141",
                "label": "p. 14; topic 3 point 137"
              },
              {
                "id": "CAP4-03-00049",
                "label": "p. 12; topic 3 point 46"
              }
            ]
          },
          {
            "id": "pitot-tubes-point-velocity",
            "title": "Pitot and Pitot-static tubes: measuring velocity at a point",
            "html": "<p>A <strong>Pitot tube</strong> faces into the flow and brings the fluid at its mouth to rest. The pressure there is the <strong>stagnation pressure</strong>, which exceeds the local static pressure by the dynamic pressure ρV<sup>2</sup>/2. A <strong>Pitot-static tube</strong> senses both at once, and their difference gives the local speed:</p><p><strong>V = C<sub>v</sub> √(2Δp/ρ)</strong></p><p>with C<sub>v</sub> close to one for a well-designed probe. Convert the pressure difference to pascals before substituting; if it is read on a differential manometer, Δp = (ρ<sub>m</sub> − ρ)gh.</p><p>Each reading is a <em>local</em> velocity at the probe position. A single reading is not automatically the mean velocity, nor does it give the total discharge without area information. To estimate discharge, traverse the probe across the section and integrate the measured velocities over the area, or weight readings at chosen positions by the areas they represent.</p>",
            "moreHtml": "<p>Illustrative check: in water, a stagnation-minus-static difference of 4.5 kPa with C<sub>v</sub> = 1 gives V = √(2 × 4500/1000) = √9 = 3.0 m/s. Leaving the difference in kPa would understate the speed by a factor of about 32.</p>",
            "sources": [
              {
                "id": "CAP4-03-00052",
                "label": "p. 12; topic 3 point 49"
              },
              {
                "id": "CAP4-03-00077",
                "label": "p. 12; topic 3 point 75"
              }
            ]
          },
          {
            "id": "venturi-orifice-meters-and-nappe",
            "title": "Venturi and orifice meters, discharge coefficients and the nappe over a weir",
            "html": "<p>A <strong>Venturi meter</strong> accelerates the flow into a throat of smaller area. Continuity makes the throat speed the largest, and the energy equation links the corresponding drop in piezometric head Δh to the discharge:</p><p><strong>Q = C<sub>d</sub> A<sub>1</sub>A<sub>2</sub> √(2gΔh)/√(A<sub>1</sub><sup>2</sup> − A<sub>2</sub><sup>2</sup>)</strong></p><p>The discharge coefficient C<sub>d</sub> corrects the ideal result for losses and non-uniform velocity. An <strong>orifice meter</strong> replaces the smooth contraction with a sharp-edged plate. The jet contracts to a vena contracta and then mixes violently downstream, so losses are larger and C<sub>d</sub> is much lower. A range of about 0.62 to 0.65 is a common preliminary textbook estimate for a conventional sharp-edged orifice meter, but the actual value depends on Reynolds number, diameter ratio, edge condition and tapping positions, so calibration or an applicable standard governs design. A Venturi generally has a much higher coefficient.</p><p>For measurement over a sharp-crested weir or notch, the free sheet of water passing over the crest is the <strong>nappe</strong>. The crest is the solid overflow edge, afflux is the rise in upstream water level caused by the structure, and tailwater is the water body or level downstream.</p>",
            "moreHtml": "<p>Because Q varies with √Δh, halving the discharge through a given meter reduces the measured head difference to one quarter of its former value.</p>",
            "sources": [
              {
                "id": "CAP4-03-00050",
                "label": "p. 12; topic 3 point 47"
              },
              {
                "id": "CAP4-03-00056",
                "label": "p. 12; topic 3 point 53"
              },
              {
                "id": "CAP4-03-00038",
                "label": "pp. 11, 12; topic 3 point 35; topic 3 point 66"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-bernoulli-term-meaning",
            "status": "corrected",
            "prompt": "Each term of Bernoulli's equation represents total energy per unit weight",
            "html": "<p>Each term is only a <strong>component</strong> of mechanical energy per unit weight: pressure head, velocity head or elevation head. Their sum is the total head. Calling each term the total energy confuses a part with the whole.</p>",
            "sources": [
              {
                "id": "CAP4-03-00034",
                "label": "p. 11; topic 3 point 31"
              }
            ]
          },
          {
            "id": "caution-momentum-venturi",
            "status": "corrected",
            "prompt": "The momentum principle is not applicable to a Venturi meter",
            "html": "<p>This exclusion is false. Momentum conservation applies to a Venturi control volume like any other, with wall reactions and pressure forces balancing the change in momentum flux. The usual discharge formula relies on continuity and the energy equation only for convenience.</p>",
            "sources": [
              {
                "id": "CAP4-03-00036",
                "label": "p. 11; topic 3 point 33"
              }
            ]
          },
          {
            "id": "caution-bernoulli-constant-between-streamlines",
            "status": "corrected",
            "prompt": "Bernoulli energy is constant along one streamline and different on another",
            "html": "<p>The capsule overstates the difference. In rotational flow the Bernoulli constant may vary between streamlines, but in irrotational flow, under the same steady, inviscid and incompressible assumptions, one constant applies throughout a connected region. Different streamlines are not required to have different constants.</p>",
            "sources": [
              {
                "id": "CAP4-03-00041",
                "label": "p. 11; topic 3 point 38"
              }
            ]
          },
          {
            "id": "caution-bernoulli-viscous-flow",
            "status": "review",
            "prompt": "Bernoulli's equation is not to be used for viscous flow",
            "html": "<p>Only the lossless form is unsuitable as it stands. Real viscous flows are analysed with the extended energy equation, H<sub>1</sub> = H<sub>2</sub> + h<sub>L</sub>, adding pump or turbine heads where present. Viscous dissipation does not invalidate energy conservation.</p>",
            "sources": [
              {
                "id": "CAP4-03-00042",
                "label": "p. 11; topic 3 point 39"
              }
            ]
          },
          {
            "id": "caution-kinematic-similarity-discharge",
            "status": "review",
            "prompt": "Kinematic similarity means similarity of discharge and streamline pattern",
            "html": "<p>'Similarity of discharge' should be read as consistent scaling, Q<sub>r</sub> = L<sub>r</sub><sup>2</sup>V<sub>r</sub>, not as equal numerical discharge in model and prototype. Matching force ratios is the separate requirement of dynamic similarity.</p>",
            "sources": [
              {
                "id": "CAP4-03-00049",
                "label": "p. 12; topic 3 point 46"
              }
            ]
          },
          {
            "id": "caution-orifice-meter-coefficient",
            "status": "review",
            "prompt": "The coefficient of discharge for an orifice meter is 0.62 to 0.65",
            "html": "<p>This is an indicative textbook range for a conventional sharp-edged orifice meter, not an edition-independent calibration requirement. The coefficient depends on Reynolds number, diameter ratio, edge sharpness and tapping arrangement; use calibration or the governing standard for design.</p>",
            "sources": [
              {
                "id": "CAP4-03-00056",
                "label": "p. 12; topic 3 point 53"
              }
            ]
          },
          {
            "id": "caution-downward-flow-pressure-height",
            "status": "corrected",
            "prompt": "In steady downward flow through a constant-area pipe, pressure increases with height",
            "html": "<p>This capsule point contradicts another capsule point stating that pressure decreases with height. Continuity plus lossless Bernoulli settles the matter: the equal velocities cancel, leaving p/(ρg) + z constant, so pressure <strong>decreases</strong> with height regardless of the flow direction.</p>",
            "sources": [
              {
                "id": "CAP4-03-00061",
                "label": "p. 12; topic 3 point 57"
              }
            ]
          },
          {
            "id": "caution-continuity-validity",
            "status": "review",
            "prompt": "The continuity equation is valid for a steady, two-dimensional, incompressible flow",
            "html": "<p>True as one example, but it is not an exclusive condition. The general mass balance ∂ρ/∂t + ∇·(ρu) = 0 covers unsteady, three-dimensional and compressible flow, and the divergence-free form ∇·u = 0 covers incompressible flow whether steady or not.</p>",
            "sources": [
              {
                "id": "CAP4-03-00109",
                "label": "p. 13; topic 3 point 106"
              }
            ]
          },
          {
            "id": "caution-inertial-force-label",
            "status": "review",
            "prompt": "The net force producing acceleration of a fluid body is called inertial force",
            "html": "<p>The capsule uses the label loosely. The real resultant external force equals ma; the d'Alembert inertial force is the fictitious −ma introduced to write an equilibrium balance. Either convention can be used, but the two must not be conflated or given the same sign.</p>",
            "sources": [
              {
                "id": "CAP4-03-00141",
                "label": "p. 14; topic 3 point 137"
              }
            ]
          }
        ],
        "gaps": [
          "Flow-classification questions cover only steady versus uniform combinations; streamline, pathline and streakline definitions and flow nets are not examined.",
          "Momentum applications stop at a jet on a fixed flat plate; moving vanes, forces on pipe bends and jet propulsion are not treated.",
          "Flow-measurement coverage gives no numerical Venturi coefficient, notch equations or meter installation requirements."
        ]
      },
      "ACiE0304": {
        "code": "ACiE0304",
        "questionCount": 21,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation used in this topic</th></tr></thead><tbody><tr><th scope='row'>Grade lines</th><td>HGL = z + p/(ρg); EGL = HGL + αV<sup>2</sup>/(2g)</td></tr><tr><th scope='row'>Reynolds number</th><td>Re = ρVD/μ = VD/ν</td></tr><tr><th scope='row'>Laminar pipe flow</th><td>f<sub>D</sub> = 64/Re; f<sub>F</sub> = 16/Re; V = u<sub>max</sub>/2; h<sub>f</sub> = 32μLV/(ρgD<sup>2</sup>)</td></tr><tr><th scope='row'>Darcy-Weisbach</th><td>h<sub>f</sub> = f<sub>D</sub>(L/D)V<sup>2</sup>/(2g) = 8f<sub>D</sub>LQ<sup>2</sup>/(gπ<sup>2</sup>D<sup>5</sup>) ≈ f<sub>D</sub>LQ<sup>2</sup>/(12.1D<sup>5</sup>) in SI</td></tr><tr><th scope='row'>Local losses</th><td>h = KV<sup>2</sup>/(2g); sudden expansion h = (V<sub>1</sub> − V<sub>2</sub>)<sup>2</sup>/(2g); exit into a large reservoir K = 1</td></tr><tr><th scope='row'>Series and parallel</th><td>series: same Q, h = Σh<sub>i</sub>; parallel: same h, Q = ΣQ<sub>i</sub></td></tr><tr><th scope='row'>Continuity sizing</th><td>A = Q/V; D = √(4A/π)</td></tr><tr><th scope='row'>Manning, full pipe</th><td>V = R<sup>2/3</sup>S<sup>1/2</sup>/n with R = D/4</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "energy-and-hydraulic-grade-lines",
            "title": "Energy grade line and hydraulic grade line: what their positions mean",
            "html": "<p>Plotting heads along a pipeline turns the energy equation into a picture. The <strong>hydraulic grade line</strong> (HGL) joins the piezometric levels z + p/(ρg), the heights to which water would rise in piezometers. The <strong>energy grade line</strong> (EGL, or total energy line) lies above it by the velocity head αV<sup>2</sup>/(2g); with α = 1 the vertical gap at any section is simply V<sup>2</sup>/(2g). The gap is a local velocity head, not the accumulated friction loss, which appears instead as the fall of the EGL along the pipe. The EGL can only fall in the direction of flow unless a pump adds energy.</p><p>The HGL's position relative to the pipe centreline reveals the pressure: its height above the centreline equals the gauge pressure head p<sub>gauge</sub>/(ρg). Where the pipe rises above the HGL, as at a siphon summit, the gauge pressure is negative and the pipe is under suction. That is not automatically a failure. Flow continues while the absolute pressure stays positive and safely above the liquid's vapour pressure; cavitation or air release becomes a concern only as the absolute pressure approaches that limit. The HGL is therefore not always above the centreline.</p>",
            "moreHtml": "<p>Illustrative check: if the HGL at a siphon crest is 3 m below the centreline, the gauge pressure is −1000 × 9.81 × 3 = −29.43 kPa. With an assumed local atmosphere of 100 kPa absolute, the absolute pressure is 70.57 kPa, still far above zero.</p>",
            "sources": [
              {
                "id": "CAP4-03-00037",
                "label": "p. 11; topic 3 point 34"
              },
              {
                "id": "CAP4-03-00102",
                "label": "p. 13; topic 3 point 101"
              }
            ]
          },
          {
            "id": "laminar-pipe-flow-results",
            "title": "Fully developed laminar pipe flow: velocity profile, friction factor and head loss",
            "html": "<p>The Hagen-Poiseuille case is a Newtonian, incompressible fluid moving steadily in laminar, fully developed flow along a straight circular pipe whose wall allows no slip. Several exact results follow from it.</p><ul><li><strong>Velocity profile.</strong> The profile is parabolic, u = u<sub>max</sub>(1 − r<sup>2</sup>/R<sup>2</sup>), and integrating it over the area gives a mean speed V = u<sub>max</sub>/2. The factor of two is special to this case; turbulent, developing and non-Newtonian profiles have other ratios.</li><li><strong>Friction factor.</strong> With Re based on mean speed and diameter, the Darcy factor is <strong>f<sub>D</sub> = 64/Re</strong> and the Fanning factor is <strong>f<sub>F</sub> = 16/Re</strong>. The Darcy factor is always four times the Fanning factor, so a bare '16/Re' is correct only in the Fanning convention or with a loss formula carrying the matching factor of four.</li><li><strong>Head loss.</strong> Substituting f<sub>D</sub> = 64μ/(ρVD) into Darcy-Weisbach gives h<sub>f</sub> = 32μLV/(ρgD<sup>2</sup>).</li></ul><p>The last result shows why laminar loss grows only <em>linearly</em> with velocity: the V<sup>2</sup> in Darcy-Weisbach is offset by a friction factor that falls as 1/V. Doubling the mean speed, with the same fluid and pipe, doubles the friction head loss.</p>",
            "moreHtml": "<p>Illustrative check: at Re = 1600, f<sub>D</sub> = 64/1600 = 0.04 and f<sub>F</sub> = 16/1600 = 0.01. A laminar profile with a centreline speed of 0.6 m/s has a mean speed of 0.3 m/s.</p>",
            "sources": [
              {
                "id": "CAP4-03-00043",
                "label": "pp. 11, 15; topic 3 point 40; topic 3 point 145"
              },
              {
                "id": "CAP4-03-00139",
                "label": "p. 14; topic 3 point 135"
              },
              {
                "id": "CAP4-03-00059",
                "label": "p. 12; topic 3 point 56"
              }
            ]
          },
          {
            "id": "darcy-weisbach-friction-loss",
            "title": "Darcy-Weisbach friction loss in velocity and discharge form",
            "html": "<p>The <strong>Darcy-Weisbach equation</strong> gives the friction head loss in a full pipe of length L and diameter D:</p><p><strong>h<sub>f</sub> = f<sub>D</sub>(L/D) V<sup>2</sup>/(2g)</strong></p><p>where f<sub>D</sub> is the dimensionless Darcy friction factor; a Fanning factor must be multiplied by four before use in this form. Fittings are handled separately as local losses.</p><p>When discharge rather than velocity is known, substitute V = 4Q/(πD<sup>2</sup>). Squaring gives V<sup>2</sup> = 16Q<sup>2</sup>/(π<sup>2</sup>D<sup>4</sup>), and</p><p><strong>h<sub>f</sub> = 8f<sub>D</sub>LQ<sup>2</sup>/(gπ<sup>2</sup>D<sup>5</sup>)</strong></p><p>In SI units with g = 9.81 m/s<sup>2</sup>, gπ<sup>2</sup>/8 ≈ 12.1, so h<sub>f</sub> ≈ f<sub>D</sub>LQ<sup>2</sup>/(12.1D<sup>5</sup>). The 12.1 is an SI approximation tied to the Darcy convention, not a universal dimensionless constant. The D<sup>5</sup> dependence shows how strongly diameter controls loss at a given discharge.</p><p>In the <strong>fully rough</strong> turbulent regime the friction factor is effectively constant, so h<sub>f</sub> varies with V<sup>2</sup>: doubling the speed quadruples the loss. That exact square law should not be assumed where f still changes with Reynolds number.</p>",
            "moreHtml": "<p>Illustrative check: a 500 m pipe of 0.30 m diameter carries water at 1.5 m/s with f<sub>D</sub> = 0.018. Then h<sub>f</sub> = 0.018 × (500/0.30) × (1.5<sup>2</sup>/19.62) = 3.44 m. The discharge is 1.5 × π × 0.30<sup>2</sup>/4 = 0.1060 m<sup>3</sup>/s, and the discharge form 8 × 0.018 × 500 × 0.1060<sup>2</sup>/(9.81 × π<sup>2</sup> × 0.30<sup>5</sup>) returns the same 3.44 m.</p>",
            "sources": [
              {
                "id": "CAP4-03-00062",
                "label": "p. 12; topic 3 point 58"
              },
              {
                "id": "CAP4-03-00053",
                "label": "p. 12; topic 3 point 50"
              },
              {
                "id": "CAP4-03-00060",
                "label": "p. 12; topic 3 point 56"
              }
            ]
          },
          {
            "id": "moody-chart-roughness-and-mixing-length",
            "title": "Moody chart regimes, relative roughness and near-wall turbulence",
            "html": "<p>The Moody chart plots the Darcy friction factor against Reynolds number, with <strong>relative roughness ε/D</strong> as the parameter. For the ratio to be dimensionless, ε must be a length: the <strong>equivalent absolute roughness height</strong> of the wall, not the wall thickness, a friction factor or a viscosity.</p><table><thead><tr><th scope='col'>Regime</th><th scope='col'>Friction factor depends on</th><th scope='col'>Loss scaling in a fixed pipe</th></tr></thead><tbody><tr><th scope='row'>Laminar</th><td>Re only, 64/Re</td><td>h<sub>f</sub> ∝ V</td></tr><tr><th scope='row'>Transitional turbulent</th><td>Re and ε/D</td><td>between V and V<sup>2</sup></td></tr><tr><th scope='row'>Fully rough turbulent</th><td>ε/D only</td><td>h<sub>f</sub> ∝ V<sup>2</sup></td></tr></tbody></table><p>On the fully rough branch the viscous, Reynolds-number term in the turbulent resistance law becomes negligible because the roughness elements protrude through the thin near-wall viscous layer. The curves flatten and f depends essentially on ε/D. Both Re and roughness matter in the broader transitional zone, but not in this limit.</p><p>Prandtl's <strong>mixing length</strong> represents turbulent momentum exchange by the distance over which eddies carry fluid across the flow. An impermeable wall suppresses wall-normal motion, so in the idealized near-wall model the mixing length grows in proportion to distance from the wall and tends to zero at the wall itself; it is not a constant equal to the pipe radius or diameter.</p>",
            "moreHtml": "<p>Reading the chart: compute Re and ε/D, then locate the regime. If the point lies on a flat, fully rough curve, a change of flow rate changes the loss with the square of velocity; in laminar flow the loss changes in simple proportion to velocity.</p>",
            "sources": [
              {
                "id": "CAP4-03-00057",
                "label": "p. 12; topic 3 point 54"
              },
              {
                "id": "CAP4-03-00140",
                "label": "p. 14; topic 3 point 136"
              },
              {
                "id": "CAP4-03-00060",
                "label": "p. 12; topic 3 point 56"
              },
              {
                "id": "CAP4-03-00051",
                "label": "p. 12; topic 3 point 48"
              }
            ]
          },
          {
            "id": "sudden-expansion-contraction-exit-losses",
            "title": "Local losses at sudden expansions, sudden contractions and pipe exits",
            "html": "<p>Local or minor losses arise where the flow separates and then mixes turbulently to re-occupy the conduit. The <strong>sudden expansion</strong> is the classic case. Applying momentum and energy between the small pipe and a downstream section where the flow has re-attached gives the <strong>Borda-Carnot loss</strong>:</p><p><strong>h<sub>L</sub> = (V<sub>1</sub> − V<sub>2</sub>)<sup>2</sup>/(2g)</strong></p><p>This is not the difference of the two velocity heads, (V<sub>1</sub><sup>2</sup> − V<sub>2</sub><sup>2</sup>)/(2g), because part of the kinetic head is recovered as pressure through the expansion.</p><p>At a <strong>pipe exit into a large reservoir</strong>, V<sub>2</sub> becomes negligible and the whole velocity head is dissipated: K<sub>exit</sub> = 1 and h = V<sup>2</sup>/(2g). A free jet that still carries its kinetic energy beyond the outlet plane is a different boundary condition.</p><p>At a <strong>sudden contraction</strong>, the fluid accelerates into the smaller pipe and separates at the sharp edge, forming a vena contracta narrower than the pipe. The acceleration itself converts pressure into velocity with little loss. Most of the loss comes afterwards, when the contracted jet re-expands and mixes to fill the pipe, which is effectively an expansion from the vena contracta. The contraction's geometry therefore controls its coefficient.</p>",
            "moreHtml": "<p>Treating the re-expansion from a vena contracta of area C<sub>c</sub>A<sub>2</sub> as a Borda-Carnot expansion gives h = (1/C<sub>c</sub> − 1)<sup>2</sup>V<sub>2</sub><sup>2</sup>/(2g). Illustrative check for an expansion: a pipe that doubles in diameter quarters the speed, so 4 m/s becomes 1 m/s and h = (4 − 1)<sup>2</sup>/19.62 = 0.459 m, while the velocity heads differ by 0.765 m; the remaining 0.306 m reappears as pressure head.</p>",
            "sources": [
              {
                "id": "CAP4-03-00054",
                "label": "p. 12; topic 3 point 51"
              },
              {
                "id": "CAP4-06-00094",
                "label": "p. 25; topic 6 point 95"
              },
              {
                "id": "CAP4-03-00115",
                "label": "p. 14; topic 3 point 113"
              }
            ]
          },
          {
            "id": "loss-coefficients-fittings-valves-entrances",
            "title": "Loss coefficients for bends, valves and entrances",
            "html": "<p>Most fittings are handled with a loss coefficient K:</p><p><strong>h<sub>L</sub> = K V<sup>2</sup>/(2g)</strong></p><p>Three rules keep the calculation honest. First, use the velocity at the section for which the coefficient was defined, usually the pipe speed at the fitting. Second, K belongs to a particular geometry and condition: a 90° elbow's value depends on its radius and construction, and a valve's value changes strongly with its opening. A figure quoted for one fitting is an input for that fitting, not a universal constant for every bend or valve. Third, the result is a <strong>head loss</strong>, energy lost per unit weight. It is not a loss of discharge: in a steady, unbranched incompressible line the same discharge passes before and after a valve, while the energy grade line drops across it.</p><p>Entrance shape matters too. A smoothly rounded <strong>bell-mouth</strong> entrance guides the converging streamlines with little separation, so its entrance loss is much smaller than that of a sharp-edged flush opening, a re-entrant pipe or an abrupt stepped contraction. That makes it preferable when entrance loss is the objective; whether it is best overall for a sluiceway also depends on structural, debris, cavitation and operating requirements.</p>",
            "moreHtml": "<p>Illustrative check: a fitting with an assumed K = 1.5 in a pipe flowing at 2 m/s loses 1.5 × 2<sup>2</sup>/19.62 = 0.306 m of head. Local losses add along a line, so three such fittings contribute about 0.92 m.</p>",
            "sources": [
              {
                "id": "CAP4-03-00108",
                "label": "p. 13; topic 3 point 105"
              },
              {
                "id": "CAP4-03-00144",
                "label": "p. 15; topic 3 point 142"
              },
              {
                "id": "CAP4-03-00118",
                "label": "p. 14; topic 3 point 116"
              }
            ]
          },
          {
            "id": "pipes-in-series-and-parallel",
            "title": "Pipes in series and in parallel: discharge and head-loss conditions",
            "html": "<p>Two network rules follow from conservation of mass and the single value of head at a junction.</p><ul><li><strong>Series.</strong> When the flow is steady and incompressible and nothing is drawn off along the way, the <em>same discharge</em> passes through every segment. Speeds differ with each segment's area, and each segment contributes its own loss, so the total head loss is the sum of the individual friction and local losses. Equal discharge does not mean equal velocity or equal loss.</li><li><strong>Parallel.</strong> Branches that leave one junction and rejoin at another all span the same difference in junction head, so each branch carries the <em>same total head loss</em>. The total discharge is the sum of the branch flows. The branches may differ in material, diameter and length; those properties decide how the flow divides, not whether the head losses match.</li></ul><p>Writing each branch loss as h = rQ<sup>2</sup>, with r = 8f<sub>D</sub>L/(gπ<sup>2</sup>D<sup>5</sup>) for friction, a parallel pair satisfies r<sub>1</sub>Q<sub>1</sub><sup>2</sup> = r<sub>2</sub>Q<sub>2</sub><sup>2</sup>, so each branch discharge is proportional to 1/√r. In series, the resistances simply add at the common discharge.</p>",
            "moreHtml": "<p>Illustrative check: two parallel pipes of equal length and friction factor have diameters D and 2D. At equal head loss Q ∝ D<sup>5/2</sup>, so the larger pipe carries 2<sup>2.5</sup> = 5.66 times the smaller pipe's flow, about 85 % of the total.</p>",
            "sources": [
              {
                "id": "CAP4-03-00045",
                "label": "p. 11; topic 3 point 42"
              },
              {
                "id": "CAP4-03-00046",
                "label": "p. 12; topic 3 point 43"
              }
            ]
          },
          {
            "id": "pipe-sizing-continuity-and-manning-roughness",
            "title": "Sizing a pipe from continuity and the effect of roughness on the required gradient",
            "html": "<p>The simplest sizing step uses continuity alone. A required discharge Q at a chosen mean speed V fixes the flow area A = Q/V, and for a full circular pipe A = πD<sup>2</sup>/4 gives <strong>D = √(4A/π)</strong>. Keep area, radius and diameter distinct: reporting the area as a diameter, or forgetting that the radius is half the diameter, are common slips.</p><p>For gravity conduits flowing full, <strong>Manning's equation</strong>, V = R<sup>2/3</sup>S<sup>1/2</sup>/n with hydraulic radius R = D/4, links roughness to the energy gradient S. At a fixed diameter both the area and R are fixed, and a fixed discharge then fixes V. The equation requires √S/n to stay constant, so <strong>S ∝ n<sup>2</sup></strong>: doubling the roughness coefficient demands four times the gradient to carry the same flow at the same speed. This follows from the Manning model; it is not a general rule that the required gradient grows linearly with roughness.</p>",
            "moreHtml": "<p>Illustrative checks: carrying 0.5 m<sup>3</sup>/s at 1.0 m/s needs A = 0.5 m<sup>2</sup> and D = √(4 × 0.5/π) = 0.798 m. If a lining ages from n = 0.012 to n = 0.015 at the same diameter and discharge, the required gradient rises by the factor (0.015/0.012)<sup>2</sup> = 1.5625, about 56 %.</p>",
            "sources": [
              {
                "id": "CAP4-03-00142",
                "label": "p. 14; topic 3 point 138"
              },
              {
                "id": "CAP4-03-00116",
                "label": "p. 14; topic 3 point 114"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-laminar-friction-convention",
            "status": "review",
            "prompt": "The coefficient of friction for laminar flow is 16/Re",
            "html": "<p>The capsule repeats 16/Re without naming the convention. It is the <strong>Fanning</strong> factor; the Darcy factor used in h<sub>f</sub> = f(L/D)V<sup>2</sup>/(2g) is 64/Re, four times larger. Both assume steady, fully developed laminar flow of a Newtonian fluid in a circular pipe.</p>",
            "sources": [
              {
                "id": "CAP4-03-00043",
                "label": "pp. 11, 15; topic 3 point 40; topic 3 point 145"
              }
            ]
          },
          {
            "id": "caution-parallel-pipes-material",
            "status": "review",
            "prompt": "Pipes of the same material connected in parallel have the same loss of head",
            "html": "<p>Equal head loss in parallel branches follows from their shared end junctions, not from the pipes being of the same material. Branches of different material, diameter or length still share the head loss; those properties only change how the discharge divides.</p>",
            "sources": [
              {
                "id": "CAP4-03-00046",
                "label": "p. 12; topic 3 point 43"
              }
            ]
          },
          {
            "id": "caution-darcy-12-1-coefficient",
            "status": "review",
            "prompt": "Darcy-Weisbach head loss is written fLQ²/(12.1D⁵)",
            "html": "<p>The recovered denominator 12.1D<sup>5</sup> equals gπ<sup>2</sup>D<sup>5</sup>/8 with g = 9.81 m/s<sup>2</sup>. It is an SI approximation that assumes the Darcy friction factor, not a universal dimensionless coefficient; other unit systems or a Fanning factor change it.</p>",
            "sources": [
              {
                "id": "CAP4-03-00053",
                "label": "p. 12; topic 3 point 50"
              }
            ]
          },
          {
            "id": "caution-sudden-expansion-formula",
            "status": "corrected",
            "prompt": "Sudden expansion head loss equals (V1 − V2)²/(2g)",
            "html": "<p>The capsule's extracted fraction is broken. The loss has been reconstructed independently from momentum and energy as (V<sub>1</sub> − V<sub>2</sub>)<sup>2</sup>/(2g), the Borda-Carnot result. It must not be replaced by the difference of the velocity heads, which ignores pressure recovery.</p>",
            "sources": [
              {
                "id": "CAP4-03-00054",
                "label": "p. 12; topic 3 point 51"
              }
            ]
          },
          {
            "id": "caution-velocity-power-law-for-friction",
            "status": "review",
            "prompt": "Frictional resistance is proportional to velocity in laminar flow and to its square in turbulent flow",
            "html": "<p>The laminar part holds for fully developed laminar pipe flow. The turbulent square law requires an effectively constant friction factor, as in fully rough flow; where f still varies with Reynolds number, the loss rises with an exponent between one and two.</p>",
            "sources": [
              {
                "id": "CAP4-03-00060",
                "label": "p. 12; topic 3 point 56"
              }
            ]
          },
          {
            "id": "caution-hgl-above-centreline",
            "status": "corrected",
            "prompt": "The hydraulic grade line in pipe flow is always above the pipe centre line",
            "html": "<p>False. The HGL lies below the centreline wherever the gauge pressure is negative, as at a siphon summit. Such suction is permissible provided the absolute pressure remains positive and above the vapour pressure.</p>",
            "sources": [
              {
                "id": "CAP4-03-00102",
                "label": "p. 13; topic 3 point 101"
              }
            ]
          },
          {
            "id": "caution-elbow-loss-coefficient",
            "status": "review",
            "prompt": "A 90° elbow loses KV²/(2g) with K = 0.9",
            "html": "<p>K = 0.9 is a supplied fitting value, not a universal coefficient for every 90° bend. Real elbow coefficients depend on bend radius, construction and flow conditions, and must be used with the velocity for which they were defined.</p>",
            "sources": [
              {
                "id": "CAP4-03-00108",
                "label": "p. 13; topic 3 point 105"
              }
            ]
          },
          {
            "id": "caution-exit-loss-condition",
            "status": "review",
            "prompt": "The head loss at the exit of a pipe is V²/(2g)",
            "html": "<p>This is the loss for a pipe discharging into a large reservoir, where the pipe velocity head is dissipated and K = 1. A free jet that keeps its kinetic energy beyond the outlet plane is a different boundary condition and should not automatically be charged the same loss.</p>",
            "sources": [
              {
                "id": "CAP4-03-00115",
                "label": "p. 14; topic 3 point 113"
              }
            ]
          },
          {
            "id": "caution-bell-mouth-superiority",
            "status": "review",
            "prompt": "The superior type of sluiceway entrance in a dam is the bell mouth",
            "html": "<p>'Superior' should be tied to entrance-loss performance: a smooth bell mouth minimises separation and local loss. Selecting an entrance overall also depends on structural, debris, cavitation and operating requirements, which the capsule point does not address.</p>",
            "sources": [
              {
                "id": "CAP4-03-00118",
                "label": "p. 14; topic 3 point 116"
              }
            ]
          },
          {
            "id": "caution-velocity-ratio-two",
            "status": "review",
            "prompt": "The ratio of maximum to average velocity of viscous flow in a circular pipe is 2",
            "html": "<p>The ratio of two holds only for the Hagen-Poiseuille case: a Newtonian, incompressible fluid in steady, laminar, fully developed flow along a straight circular pipe whose wall allows no slip. Turbulent, developing and non-Newtonian flows are also viscous but have different ratios.</p>",
            "sources": [
              {
                "id": "CAP4-03-00139",
                "label": "p. 14; topic 3 point 135"
              }
            ]
          },
          {
            "id": "caution-fully-rough-friction-dependence",
            "status": "corrected",
            "prompt": "In fully rough turbulent pipe flow the Darcy factor depends on both Reynolds number and relative roughness",
            "html": "<p>In the fully rough limit the Reynolds-number term becomes negligible and f depends essentially on ε/D alone. Dependence on both variables describes the transitional turbulent zone, not the fully rough branch.</p>",
            "sources": [
              {
                "id": "CAP4-03-00140",
                "label": "p. 14; topic 3 point 136"
              }
            ]
          },
          {
            "id": "caution-valve-discharge-loss",
            "status": "corrected",
            "prompt": "Discharge loss at a butterfly valve is KV²/(2g)",
            "html": "<p>KV<sup>2</sup>/(2g) is a <strong>head</strong> loss, energy per unit weight, not a loss of discharge; the same discharge passes through a valve in a steady unbranched line. K also depends on the valve opening and on the reference velocity.</p>",
            "sources": [
              {
                "id": "CAP4-03-00144",
                "label": "p. 15; topic 3 point 142"
              }
            ]
          }
        ],
        "gaps": [
          "Unsteady pipe flow, water hammer and relief devices such as surge tanks and relief valves are listed in the syllabus but not tested by these capsule questions.",
          "No questions cover pipe-network balancing, equivalent-pipe calculations or explicit turbulent friction-factor equations of the Colebrook type.",
          "Typical roughness heights, fitting coefficients and valve curves are not supplied by the capsule; values used in these notes are stated assumptions."
        ]
      },
      "ACiE0305": {
        "code": "ACiE0305",
        "questionCount": 33,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation used in this topic</th></tr></thead><tbody><tr><th scope='row'>Section properties</th><td>R = A/P; D = A/T; trapezoid A = (B + zy)y, P = B + 2y√(1 + z<sup>2</sup>), T = B + 2zy</td></tr><tr><th scope='row'>Uniform flow</th><td>Manning V = R<sup>2/3</sup>S<sup>1/2</sup>/n; Chezy V = C√(RS); C = R<sup>1/6</sup>/n</td></tr><tr><th scope='row'>Strickler-type estimate</th><td>n = d<sup>1/6</sup>/21.1 with d in metres (empirical)</td></tr><tr><th scope='row'>Froude number and critical flow</th><td>Fr = V/√(gD); critical when Q<sup>2</sup>T/(gA<sup>3</sup>) = 1; section factor Z = A√D = Q/√g</td></tr><tr><th scope='row'>Rectangular channel</th><td>E = y + q<sup>2</sup>/(2gy<sup>2</sup>); y<sub>c</sub> = (q<sup>2</sup>/g)<sup>1/3</sup>; E<sub>c</sub> = 1.5y<sub>c</sub></td></tr><tr><th scope='row'>Hydraulic jump, rectangular</th><td>y<sub>2</sub>/y<sub>1</sub> = [√(1 + 8Fr<sub>1</sub><sup>2</sup>) − 1]/2; head loss (y<sub>2</sub> − y<sub>1</sub>)<sup>3</sup>/(4y<sub>1</sub>y<sub>2</sub>)</td></tr><tr><th scope='row'>Overflow structures</th><td>Q = C L H<sup>3/2</sup>; local outlet loss h = KV<sub>ref</sub><sup>2</sup>/(2g)</td></tr><tr><th scope='row'>Sediment threshold</th><td>τ<sub>c</sub> = θ<sub>c</sub>(ρ<sub>s</sub> − ρ)gd; uniform-flow bed shear τ<sub>0</sub> = ρgRS</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "channel-section-geometry",
            "title": "Channel geometry: flow area, wetted perimeter, hydraulic radius and hydraulic depth",
            "html": "<p>Open-channel formulas use a small set of geometric properties of the wetted cross-section:</p><ul><li><strong>Flow area</strong> A and <strong>top width</strong> T at the free surface.</li><li><strong>Wetted perimeter</strong> P: the length of boundary in contact with the water. The free surface is not part of it.</li><li><strong>Hydraulic radius</strong> R = A/P, used in friction and uniform-flow equations.</li><li><strong>Hydraulic depth</strong> D = A/T, used in the Froude number.</li></ul><p>For a trapezoid of bottom width B, depth y and side slope z horizontal to 1 vertical, each submerged side has length y√(1 + z<sup>2</sup>), so <strong>A = (B + zy)y</strong>, <strong>P = B + 2y√(1 + z<sup>2</sup>)</strong> and <strong>T = B + 2zy</strong>.</p><p>For a rectangle, R = By/(B + 2y). When the width is much larger than the depth, the sidewall contribution 2y becomes negligible and <strong>R ≈ y</strong>, the usual wide-channel approximation. This differs from the best hydraulic rectangle, B = 2y, for which R = y/2.</p><p>Which length belongs in Fr = V/√(gD)? The speed of a small shallow-water gravity wave in a general section is √(gA/T), so the Froude length is the hydraulic depth A/T. Hydraulic radius A/P and hydraulic diameter 4A/P serve other purposes.</p>",
            "moreHtml": "<p>Illustrative check: a trapezoid with B = 3 m, y = 1.5 m and z = 2 has A = (3 + 3) × 1.5 = 9 m<sup>2</sup>, P = 3 + 3√5 = 9.708 m, R = 9/9.708 = 0.927 m, T = 3 + 6 = 9 m and D = 9/9 = 1.0 m. R and D differ even for the same section.</p>",
            "sources": [
              {
                "id": "CAP4-03-00075",
                "label": "p. 12; topic 3 point 73"
              },
              {
                "id": "CAP4-03-00064",
                "label": "p. 12; topic 3 point 60"
              },
              {
                "id": "CAP4-03-00065",
                "label": "p. 12; topic 3 point 61; topic 3 point 72"
              }
            ]
          },
          {
            "id": "hydraulically-efficient-sections",
            "title": "Hydraulically efficient sections: semicircle, best rectangle, trapezoid and triangle",
            "html": "<p>For a fixed flow area, roughness and slope, uniform-flow conveyance increases with hydraulic radius. The <strong>most efficient</strong> section therefore minimises the wetted perimeter for the given area. Among all shapes with a free top surface the <strong>semicircle</strong> does this, so it is the mathematical hydraulic optimum. Construction cost, bank stability and lining constraints often favour other practical sections.</p><table><thead><tr><th scope='col'>Best section</th><th scope='col'>Geometry</th><th scope='col'>Hydraulic radius</th></tr></thead><tbody><tr><th scope='row'>Semicircle of radius r</th><td>depth y = r</td><td>R = r/2 = y/2</td></tr><tr><th scope='row'>Rectangle</th><td>B = 2y</td><td>R = y/2</td></tr><tr><th scope='row'>Trapezoid, given z</th><td>T/2 = y√(1 + z<sup>2</sup>)</td><td>R = y/2</td></tr><tr><th scope='row'>Triangle</th><td>1H:1V sides, 90° vertex</td><td>R = y/(2√2)</td></tr></tbody></table><p>For the best trapezoid with a prescribed side slope, half the top width equals the length of one submerged sloping side, so the top width is the <em>sum of the two sloping-side lengths</em>. A side-slope ratio is dimensionless and cannot itself be added to give a width. For the best triangle, A = y<sup>2</sup> and P = 2√2 y, so R = y/(2√2) ≈ 0.354y; the trapezoid's R = y/2 does not transfer to the triangle.</p>",
            "moreHtml": "<p>Illustrative check for a best trapezoid with z = 1 and y = 2 m: each sloping side is 2√2 = 2.828 m, so T = 5.657 m and B = T − 2zy = 1.657 m. Then A = (1.657 + 2) × 2 = 7.314 m<sup>2</sup>, P = 1.657 + 5.657 = 7.314 m and R = 1.0 m = y/2, as expected. If the side slope may also be chosen freely, the best trapezoid is half of a regular hexagon.</p>",
            "sources": [
              {
                "id": "CAP4-03-00129",
                "label": "p. 14; topic 3 point 126"
              },
              {
                "id": "CAP4-03-00066",
                "label": "p. 12; topic 3 point 62"
              },
              {
                "id": "CAP4-03-00079",
                "label": "p. 12; topic 3 point 77"
              }
            ]
          },
          {
            "id": "manning-chezy-uniform-flow",
            "title": "Uniform flow with Manning and Chezy: dimensions and sensitivity to roughness",
            "html": "<p>In uniform flow, the component of gravity along the slope balances boundary resistance, and depth, velocity and area stay constant along the reach. Two empirical equations are standard:</p><ul><li><strong>Chezy</strong>: V = C√(RS). Because V has dimensions L T<sup>−1</sup> and √(RS) has L<sup>1/2</sup>, C has dimensions <strong>L<sup>1/2</sup> T<sup>−1</sup></strong> (m<sup>1/2</sup>/s). It is not dimensionless.</li><li><strong>Manning</strong> (SI): V = R<sup>2/3</sup>S<sup>1/2</sup>/n. Rearranging, n = R<sup>2/3</sup>S<sup>1/2</sup>/V has dimensions L<sup>2/3</sup>/(L T<sup>−1</sup>) = <strong>T L<sup>−1/3</sup></strong>, written s/m<sup>1/3</sup>. It is neither dimensionless like the Darcy factor nor dimensionally identical to Chezy's C.</li></ul><p>Comparing the two equations gives C = R<sup>1/6</sup>/n.</p><p>Manning's equation shows how strongly roughness governs the slope needed for a given flow. If the area, hydraulic radius and discharge must stay the same, V is fixed, so √S must be proportional to n and <strong>S ∝ n<sup>2</sup></strong>. Doubling n therefore requires four times the energy slope. The conclusion depends on keeping both the geometry and the flow unchanged.</p>",
            "moreHtml": "<p>Illustrative check: a rectangular channel 4 m wide flowing 1 m deep with n = 0.015 and S = 0.0009 has A = 4 m<sup>2</sup>, P = 6 m and R = 0.667 m. Then V = 0.667<sup>2/3</sup> × 0.03/0.015 = 1.53 m/s and Q ≈ 6.1 m<sup>3</sup>/s. The equivalent Chezy coefficient is 0.667<sup>1/6</sup>/0.015 ≈ 62 m<sup>1/2</sup>/s.</p>",
            "sources": [
              {
                "id": "CAP4-03-00044",
                "label": "p. 11; topic 3 point 41"
              },
              {
                "id": "CAP4-03-00110",
                "label": "p. 13; topic 3 point 107"
              },
              {
                "id": "CAP4-03-00072",
                "label": "p. 12; topic 3 point 69"
              }
            ]
          },
          {
            "id": "estimating-manning-roughness",
            "title": "Estimating Manning's n: tabulated ranges and the Strickler grain-size relation",
            "html": "<p>Choosing n is usually the least certain step in a uniform-flow calculation, and two routes are common.</p><p><strong>Tabulated ranges.</strong> Textbook tables give indicative values for boundary materials. For clean, smooth-finished concrete an n of about 0.011 to 0.013 is a common preliminary estimate. Joints, deterioration, sediment deposits and vegetation raise the effective roughness, so a tabulated range is a starting point rather than a guaranteed field value or a prescribed standard.</p><p><strong>Grain-size relations.</strong> For beds of loose granular material, a Strickler-type relation links n to a representative grain size. One common SI form is n = d<sup>1/6</sup>/21.1 with d in metres. The steps are simple but easy to slip on: convert the grain size to metres first, then take the sixth root, then divide. The relation is empirical, so the grain-size definition and bed condition must match those used in its calibration, and bedforms or vegetation are not represented.</p><p>Carry enough digits to round the result correctly rather than truncating it.</p>",
            "moreHtml": "<p>Illustrative check: for a 20 mm representative grain, d = 0.020 m, d<sup>1/6</sup> = 0.521 and n = 0.521/21.1 = 0.0247. Entering 20 instead of 0.020 would give 0.078, an obviously unrealistic roughness.</p>",
            "sources": [
              {
                "id": "CAP4-03-00137",
                "label": "p. 14; topic 3 point 133"
              },
              {
                "id": "CAP4-03-00055",
                "label": "p. 12; topic 3 point 52"
              }
            ]
          },
          {
            "id": "froude-number-wave-celerity",
            "title": "Froude number, wave celerity and subcritical, critical and supercritical flow",
            "html": "<p>The <strong>Froude number</strong> Fr = V/√(gD), with D = A/T, compares the mean flow speed with the speed √(gD) at which a small surface gravity wave travels relative to the water in the shallow-water approximation.</p><ul><li><strong>Fr &lt; 1, subcritical</strong>: the flow is slower than the wave, so a disturbance can travel upstream and downstream controls influence the flow.</li><li><strong>Fr = 1, critical</strong>: an upstream-directed wave is held stationary.</li><li><strong>Fr &gt; 1, supercritical</strong>: the flow outruns the wave, so even a wave directed upstream relative to the water is swept downstream relative to the bed, and control comes from upstream.</li></ul><p>The Froude number compares inertia with gravity; it does not measure viscosity. Using hydraulic radius instead of hydraulic depth in the denominator gives the wrong wave-speed scale.</p><p>For a symmetric triangular channel of side slope z, A = zy<sup>2</sup> and T = 2zy, so D = y/2 whatever the slope and <strong>Fr = V/√(gy/2)</strong>. For a rectangle D = y, and for a wide channel D and R both approach y.</p>",
            "moreHtml": "<p>Illustrative check: a triangular channel with 1H:1V sides flowing 2 m deep at 1.5 m/s has D = 1 m and Fr = 1.5/√9.81 = 0.48, so the flow is subcritical. The same speed in a 0.1 m deep rectangular flow gives Fr = 1.5/√0.981 = 1.51, which is supercritical.</p>",
            "sources": [
              {
                "id": "CAP4-03-00073",
                "label": "p. 12; topic 3 point 70"
              },
              {
                "id": "CAP4-03-00065",
                "label": "p. 12; topic 3 point 61; topic 3 point 72"
              },
              {
                "id": "CAP4-03-00081",
                "label": "p. 13; topic 3 point 80"
              }
            ]
          },
          {
            "id": "critical-flow-condition-section-factor",
            "title": "The general critical-flow condition and the section factor for critical flow",
            "html": "<p>Squaring the Froude number and substituting V = Q/A gives, for any prismatic section with unit kinetic-energy correction,</p><p><strong>Fr<sup>2</sup> = Q<sup>2</sup>T/(gA<sup>3</sup>)</strong></p><p>so critical flow satisfies <strong>Q<sup>2</sup>T/(gA<sup>3</sup>) = 1</strong>. T is the free-surface top width; replacing it with the wetted perimeter P is a common mistake. For a rectangle of width B, T = B and A = By, and the condition reduces to y<sub>c</sub> = (q<sup>2</sup>/g)<sup>1/3</sup> with q = Q/B.</p><p>Rearranging the critical condition as Q/√g = A√(A/T) defines the <strong>section factor for critical flow</strong>, <strong>Z = A√D</strong>, where A is the wetted flow area and D the hydraulic depth. Z has dimensions of length<sup>5/2</sup>. For a given channel shape Z depends on depth alone, so critical depth can be found as the depth at which Z equals Q/√g. This channel section factor is unrelated to the dimensionless form factor of a drainage basin, which uses basin area and basin length.</p>",
            "moreHtml": "<p>Illustrative check: a rectangle 3 m wide carrying 12 m<sup>3</sup>/s has q = 4 m<sup>2</sup>/s and y<sub>c</sub> = (16/9.81)<sup>1/3</sup> = 1.177 m. At that depth A = 3.531 m<sup>2</sup>, D = 1.177 m and Z = 3.531 × √1.177 = 3.83 m<sup>5/2</sup>, matching Q/√g = 12/3.132 = 3.83.</p>",
            "sources": [
              {
                "id": "CAP4-03-00103",
                "label": "p. 13; topic 3 point 102"
              },
              {
                "id": "CAP4-03-00104",
                "label": "p. 13; topic 3 point 103"
              }
            ]
          },
          {
            "id": "specific-energy-and-alternate-depths",
            "title": "Specific energy: minimum energy, maximum discharge and alternate depths",
            "html": "<p><strong>Specific energy</strong> is the energy per unit weight measured from the channel bed, E = y + V<sup>2</sup>/(2g). For a rectangular channel carrying q per unit width, <strong>E = y + q<sup>2</sup>/(2gy<sup>2</sup>)</strong>. The relation can be read two ways, and both lead to critical flow.</p><ul><li><strong>Fixed discharge.</strong> dE/dy = 1 − q<sup>2</sup>/(gy<sup>3</sup>) = 1 − Fr<sup>2</sup>, which vanishes at Fr = 1. Critical depth therefore gives the <em>minimum</em> specific energy for the given discharge.</li><li><strong>Fixed specific energy.</strong> Writing q<sup>2</sup> = 2gy<sup>2</sup>(E − y) and maximising gives y = 2E/3, where again q<sup>2</sup>/(gy<sup>3</sup>) = 1. Critical flow carries the <em>maximum</em> discharge for the available energy.</li></ul><p>At critical depth in a rectangle, V<sub>c</sub><sup>2</sup>/g = y<sub>c</sub>, so the velocity head is y<sub>c</sub>/2 and <strong>E<sub>c</sub> = 1.5y<sub>c</sub></strong>, a head in metres.</p><p>For any energy above the minimum, the E-y curve gives two possible depths at the same discharge: a shallow supercritical depth and a deep subcritical one. These are <strong>alternate depths</strong>. They differ from conjugate or sequent depths, which share the same specific force across a hydraulic jump and generally have different energies.</p>",
            "moreHtml": "<p>Illustrative check for q = 4 m<sup>2</sup>/s: y<sub>c</sub> = 1.177 m and E<sub>c</sub> = 1.766 m. For E = 2.50 m, the depths 0.667 m and 2.353 m both satisfy y + 16/(19.62y<sup>2</sup>) ≈ 2.50 m, so they are alternate depths on opposite sides of critical depth.</p>",
            "sources": [
              {
                "id": "CAP4-03-00068",
                "label": "p. 12; topic 3 point 64"
              },
              {
                "id": "CAP4-03-00069",
                "label": "p. 12; topic 3 point 65"
              },
              {
                "id": "CAP4-03-00074",
                "label": "pp. 12, 14; topic 3 point 71; topic 3 point 112; topic 3 point 118"
              },
              {
                "id": "CAP4-03-00117",
                "label": "p. 14; topic 3 point 115"
              }
            ]
          },
          {
            "id": "hydraulic-jump-sequent-depths",
            "title": "Hydraulic jump: sequent depths, energy loss, jump types and length",
            "html": "<p>A <strong>hydraulic jump</strong> is an abrupt transition from supercritical to subcritical flow with an intense turbulent roller. Energy is dissipated, so the energy equation cannot link the two depths, but momentum can. For a horizontal rectangular channel, neglecting bed friction over the short jump and using unit momentum correction, equal specific force upstream and downstream gives the <strong>sequent (conjugate) depth ratio</strong></p><p><strong>y<sub>2</sub>/y<sub>1</sub> = [√(1 + 8Fr<sub>1</sub><sup>2</sup>) − 1]/2</strong></p><p>This formula belongs to the rectangular case; other section shapes need their own specific-force balance. The head lost in the jump is <strong>ΔE = (y<sub>2</sub> − y<sub>1</sub>)<sup>3</sup>/(4y<sub>1</sub>y<sub>2</sub>)</strong>.</p><p>The conventional textbook classification by approach Froude number is: undular about 1 to 1.7, weak about 1.7 to 2.5, oscillating about 2.5 to 4.5, steady about 4.5 to 9, and strong beyond about 9. These are empirical bands, not sharp physical boundaries, and a 'steady' jump still has an unsteady turbulent roller.</p><p>For preliminary screening, jump length is often estimated as roughly five to seven times the <strong>jump height</strong>, y<sub>2</sub> − y<sub>1</sub>. Such a rough rule does not replace a stilling-basin design based on the actual flow and tailwater.</p>",
            "moreHtml": "<p>Illustrative check: with y<sub>1</sub> = 0.40 m and Fr<sub>1</sub> = 5, y<sub>2</sub>/y<sub>1</sub> = (√201 − 1)/2 = 6.589, so y<sub>2</sub> = 2.635 m. The jump height is 2.235 m, the head loss is 2.235<sup>3</sup>/(4 × 0.40 × 2.635) ≈ 2.65 m and the rough length range is about 11 to 16 m. Fr<sub>1</sub> = 5 lies in the steady-jump band.</p>",
            "sources": [
              {
                "id": "CAP4-03-00070",
                "label": "p. 12; topic 3 point 67"
              },
              {
                "id": "CAP4-03-00071",
                "label": "p. 12; topic 3 point 68"
              },
              {
                "id": "CAP4-03-00078",
                "label": "p. 12; topic 3 point 76"
              },
              {
                "id": "CAP4-03-00074",
                "label": "pp. 12, 14; topic 3 point 71; topic 3 point 112; topic 3 point 118"
              }
            ]
          },
          {
            "id": "gradually-varied-flow-profiles",
            "title": "Gradually varied flow: classification, slope types and M and S profiles",
            "html": "<p><strong>Gradually varied flow</strong> (GVF) is steady flow whose depth changes slowly along the channel, so hydrostatic pressure and uniform-flow friction laws still apply locally. Its full classification is steady, nonuniform and gradually varied. Note the logic: steadiness is a separate observation that nothing changes with time at fixed sections; gradual variation along the channel alone would not prove it.</p><p>Profiles are named by comparing the actual depth y with the normal depth y<sub>n</sub> and critical depth y<sub>c</sub>. On a <strong>mild</strong> slope y<sub>n</sub> &gt; y<sub>c</sub>; on a <strong>steep</strong> slope y<sub>n</sub> &lt; y<sub>c</sub>.</p><table><thead><tr><th scope='col'>Profile</th><th scope='col'>Depth ordering</th><th scope='col'>Typical setting</th></tr></thead><tbody><tr><th scope='row'>M1</th><td>y &gt; y<sub>n</sub> &gt; y<sub>c</sub></td><td>Backwater behind a dam or weir</td></tr><tr><th scope='row'>M2</th><td>y<sub>n</sub> &gt; y &gt; y<sub>c</sub></td><td>Drawdown toward a free overfall or slope break</td></tr><tr><th scope='row'>S2</th><td>y<sub>c</sub> &gt; y &gt; y<sub>n</sub></td><td>Drawdown from critical depth on a steep reach</td></tr></tbody></table><p>Where a long reach of mild slope is followed by a long steep reach and the downstream end discharges freely, critical depth occurs near the slope break. Upstream, the flow draws down from its larger normal depth toward critical depth (M2); downstream, it falls from critical depth toward the smaller steep normal depth (S2). A submerged control or imposed tailwater can change this pattern, so the slope change alone does not fix the profiles.</p>",
            "moreHtml": "<p>The remaining zones complete the family: M3 lies below critical depth on a mild slope, for example downstream of a sluice gate; S1 lies above both reference depths on a steep slope; and S3 lies below normal depth on a steep slope.</p>",
            "sources": [
              {
                "id": "CAP4-03-00082",
                "label": "p. 13; topic 3 point 81"
              },
              {
                "id": "CAP4-03-00122",
                "label": "p. 14; topic 3 point 120"
              },
              {
                "id": "CAP4-03-00063",
                "label": "p. 12; topic 3 point 59"
              }
            ]
          },
          {
            "id": "weirs-and-spillway-outlets",
            "title": "Weirs and spillway outlets: head-discharge scaling and local loss coefficients",
            "html": "<p>Overflow structures follow a common form, <strong>Q = C L H<sup>3/2</sup></strong>, where L is the effective crest length and H the total head above the crest. The 3/2 power comes from critical-type flow over the control: discharge per unit width is depth times velocity, the depth grows in proportion to H and the velocity with √H. If C and L stay constant, multiplying the head by k multiplies the discharge by k<sup>3/2</sup>. For an ogee spillway, however, C varies with the ratio of actual head to design head, so a constant C is an assumption that must be stated.</p><p>A <strong>broad-crested weir</strong> has a crest long enough for the flow to become nearly parallel, so critical depth forms on the crest and acts as the control. With a smooth, rounded entrance and a crest short enough to keep friction small, separation and dissipation between the approach and the control are limited, and a low-loss energy equation works well. Friction, entrance geometry, submergence and any downstream dissipation still matter, so this is a conditional advantage rather than a universal ranking of weirs.</p><p>At a spillway or channel outlet, local dissipation is often written h<sub>L</sub> = KV<sub>ref</sub><sup>2</sup>/(2g). A tabulated K is valid only for compatible outlet geometry, submergence and reference velocity, and the expression describes dissipated head, not lost discharge.</p>",
            "moreHtml": "<p>Derivation for an ideal broad-crested weir: critical depth on the crest is 2H/3 and the crest velocity is √(g × 2H/3), so q = √g (2H/3)<sup>3/2</sup> ≈ 1.705H<sup>3/2</sup> in SI units before any discharge coefficient. Illustrative check: with constant C and L, doubling the head raises the discharge 2<sup>1.5</sup> = 2.83 times.</p>",
            "sources": [
              {
                "id": "CAP4-03-00067",
                "label": "pp. 12, 13; topic 3 point 63; topic 3 point 78"
              },
              {
                "id": "CAP4-03-00080",
                "label": "p. 13; topic 3 point 79"
              },
              {
                "id": "CAP4-03-00145",
                "label": "p. 15; topic 3 point 142"
              }
            ]
          },
          {
            "id": "sediment-incipient-motion-shields",
            "title": "Sediment: incipient motion, the Shields diagram and bed load",
            "html": "<p>Flow over a loose, noncohesive bed exerts a mean <strong>boundary shear stress</strong>, which for uniform flow is τ<sub>0</sub> = ρgRS. Grains begin to move when this stress exceeds a critical value. The <strong>Shields diagram</strong> expresses the threshold in dimensionless form: the Shields parameter θ = τ/[(ρ<sub>s</sub> − ρ)gd] at incipient motion, θ<sub>c</sub>, is plotted against a particle-scale Reynolds number. Rearranged, the critical shear stress is</p><p><strong>τ<sub>c</sub> = θ<sub>c</sub>(ρ<sub>s</sub> − ρ)gd</strong></p><p>Two details are essential: use the submerged density difference ρ<sub>s</sub> − ρ rather than the grain density alone, and convert the grain diameter to metres. θ<sub>c</sub> must be read for the particular sediment and flow condition; it is not universal. The diagram concerns the start of grain motion, not critical depth in open-channel flow, settling velocity or sediment concentration.</p><p>Once grains move, transport is divided by mechanism. <strong>Bed load</strong> grains stay in or near contact with the bed, moving by rolling or sliding and by short hops close to it (saltation). <strong>Suspended load</strong> is held up in the water column by turbulence against settling. <strong>Dissolved load</strong> travels as solutes rather than as grains.</p>",
            "moreHtml": "<p>Illustrative check with an assumed θ<sub>c</sub> = 0.05, ρ<sub>s</sub> = 2650 kg/m<sup>3</sup> and d = 5 mm: τ<sub>c</sub> = 0.05 × 1650 × 9.81 × 0.005 ≈ 4.05 Pa. A wide channel 2 m deep reaches this bed shear when S = 4.05/(1000 × 9.81 × 2) ≈ 0.00021.</p>",
            "sources": [
              {
                "id": "CAP4-03-00127",
                "label": "p. 14; topic 3 point 125"
              },
              {
                "id": "CAP4-03-00128",
                "label": "p. 14; topic 3 point 125"
              },
              {
                "id": "CAP4-03-00146",
                "label": "p. 15; topic 3 point 143"
              }
            ]
          },
          {
            "id": "bank-stability-tractive-force",
            "title": "Grains on channel banks: why the side-slope threshold is lower than the bed threshold",
            "html": "<p>A grain on a sloping bank is harder to keep in place than an identical grain on a horizontal bed. The simple tractive-force model assumes that the drag exerted by the flow is directed downstream along the channel and neglects lift. On the bed, friction has to resist only the drag. On a bank inclined at angle φ, the grain's submerged weight W′ has a component W′ sin φ down the slope, and the contact normal force falls to W′ cos φ. The resultant of the drag and this downslope pull must now be resisted by a smaller frictional capacity, so the drag, and hence the flow shear, needed to start motion is lower.</p><p>The reduction depends on the bank angle and on the sediment's angle of repose θ. A fixed factor such as 0.75 times the bed threshold can be used only as an explicit assumption in a particular calculation; it is not a universal ratio of incipient-motion stresses for all banks. The shear applied by the flow, which varies around the wetted perimeter, must also be distinguished from the critical shear the bank material can resist.</p>",
            "moreHtml": "<p>Balancing forces in this model gives the tractive-force ratio K = τ<sub>bank</sub>/τ<sub>bed</sub> = √(1 − sin<sup>2</sup>φ/sin<sup>2</sup>θ), valid for φ &lt; θ. With an assumed repose angle of 35°, a 3H:1V bank gives K ≈ 0.83 while a 2H:1V bank gives K ≈ 0.63, which is why no single factor fits every bank. A stipulated factor of 0.75 applied to a bed threshold of 6 Pa would give 4.5 Pa.</p>",
            "sources": [
              {
                "id": "CAP4-03-00022",
                "label": "p. 11; topic 3 point 19"
              },
              {
                "id": "CAP4-03-00149",
                "label": "p. 11; topic 3 point 19"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-bank-shear-factor",
            "status": "review",
            "prompt": "The average shear stress required to move a grain on the bank is 0.75 Tc",
            "html": "<p>The capsule gives no bank slope, angle of repose or definition separating applied average shear from critical shear. The 0.75 factor is therefore used here only as an explicit assumption in a stipulated calculation, and the original claim needs verification against its source before being relied on.</p>",
            "sources": [
              {
                "id": "CAP4-03-00022",
                "label": "p. 11; topic 3 point 19"
              }
            ]
          },
          {
            "id": "caution-strickler-rounding",
            "status": "corrected",
            "prompt": "The Strickler estimate for a 6 cm grain gives Manning's n = 0.029",
            "html": "<p>Recomputing, (0.06)<sup>1/6</sup>/21.1 = 0.02965, which rounds to 0.0297 at four decimal places; the printed 0.029 truncates rather than rounds. The relation itself is a stipulated empirical estimate, not a universal roughness law.</p>",
            "sources": [
              {
                "id": "CAP4-03-00055",
                "label": "p. 12; topic 3 point 52"
              }
            ]
          },
          {
            "id": "caution-mild-to-steep-profiles",
            "status": "review",
            "prompt": "A change from mild to steep slope forms an M2 and S2 profile",
            "html": "<p>This is the usual pattern for long reaches with a free critical control at the slope break and no downstream submergence. A submerged control or imposed tailwater can alter the profiles, so the slope change alone does not uniquely fix them.</p>",
            "sources": [
              {
                "id": "CAP4-03-00063",
                "label": "p. 12; topic 3 point 59"
              }
            ]
          },
          {
            "id": "caution-best-triangle-radius",
            "status": "corrected",
            "prompt": "The most economical triangular section has hydraulic radius y/(2√2)",
            "html": "<p>The capsule text loses the radical. Independent derivation for the optimal 1H:1V triangle gives A = y<sup>2</sup> and P = 2√2 y, so R = y/(2√2) ≈ 0.354y. The trapezoid result R = y/2 does not apply to the triangle.</p>",
            "sources": [
              {
                "id": "CAP4-03-00066",
                "label": "p. 12; topic 3 point 62"
              }
            ]
          },
          {
            "id": "caution-broad-crested-weir-loss",
            "status": "corrected",
            "prompt": "Head loss is minimum in a broad-crested weir",
            "html": "<p>The two capsule points on broad-crested weirs imply a universal ranking that is not supported. The defensible statement is conditional: with a smooth entrance and a crest short enough for friction to be small, losses between the approach and the crest control are small. Submergence, roughness and downstream dissipation still count.</p>",
            "sources": [
              {
                "id": "CAP4-03-00067",
                "label": "pp. 12, 13; topic 3 point 63; topic 3 point 78"
              }
            ]
          },
          {
            "id": "caution-sequent-depth-formula",
            "status": "corrected",
            "prompt": "Sequent depth ratio y2/y1 = 0.5[√(1 + 8Fr1²) − 1]",
            "html": "<p>The radical is lost in the capsule's extracted text and has been restored independently from the momentum balance. The formula applies to a hydraulic jump in a horizontal rectangular channel with negligible bed friction, not to arbitrary section shapes.</p>",
            "sources": [
              {
                "id": "CAP4-03-00070",
                "label": "p. 12; topic 3 point 67"
              }
            ]
          },
          {
            "id": "caution-trapezoid-wetted-perimeter",
            "status": "corrected",
            "prompt": "Weighted perimeter of a trapezoidal section is B + 2y√(1 + z²)",
            "html": "<p>The capsule prints 'weighted' perimeter and drops the square root. The correct term is <strong>wetted</strong> perimeter, and each sloping side contributes y√(1 + z<sup>2</sup>), as restored from the section geometry. The free-surface top width is not included.</p>",
            "sources": [
              {
                "id": "CAP4-03-00075",
                "label": "p. 12; topic 3 point 73"
              }
            ]
          },
          {
            "id": "caution-jump-length-rule",
            "status": "review",
            "prompt": "The length of a hydraulic jump is 5 to 7 times the jump height",
            "html": "<p>This is a rough empirical range for preliminary screening, not an exact universal equation. Stilling-basin design should use the actual approach flow, Froude number and tailwater conditions.</p>",
            "sources": [
              {
                "id": "CAP4-03-00078",
                "label": "p. 12; topic 3 point 76"
              }
            ]
          },
          {
            "id": "caution-best-trapezoid-top-width",
            "status": "corrected",
            "prompt": "In the most economical trapezoidal section, top width equals the sum of the side slopes",
            "html": "<p>The top width equals the sum of the two submerged <strong>sloping-side lengths</strong>, each y√(1 + z<sup>2</sup>), not the sum of the side slopes. A side slope is a dimensionless ratio and cannot form a width.</p>",
            "sources": [
              {
                "id": "CAP4-03-00079",
                "label": "p. 12; topic 3 point 77"
              }
            ]
          },
          {
            "id": "caution-triangular-froude-number",
            "status": "review",
            "prompt": "The Froude number of a triangular channel with 2H:1V side slopes is V/√(gy/2)",
            "html": "<p>The capsule formula is garbled in the extract and has been reconstructed from triangular geometry, not from the source image. The geometry gives D = y/2 for any symmetric triangle, so Fr = V/√(gy/2) independently of the side slope.</p>",
            "sources": [
              {
                "id": "CAP4-03-00081",
                "label": "p. 13; topic 3 point 80"
              }
            ]
          },
          {
            "id": "caution-gvf-steadiness",
            "status": "review",
            "prompt": "Gradually varied open-channel flow is steady non-uniform flow",
            "html": "<p>Gradual variation along the channel establishes nonuniformity but not steadiness. Steadiness is a separate condition, that measurements at fixed sections do not change with time; standard GVF analysis assumes both.</p>",
            "sources": [
              {
                "id": "CAP4-03-00082",
                "label": "p. 13; topic 3 point 81"
              }
            ]
          },
          {
            "id": "caution-section-factor-vs-basin-form-factor",
            "status": "corrected",
            "prompt": "The form factor of a channel section is the square root of hydraulic depth times basin area",
            "html": "<p>The capsule conflates two different quantities. A channel's critical-flow <strong>section factor</strong> is Z = A√D, using the wetted flow area A. A drainage basin's <strong>form factor</strong> is basin area divided by the square of basin length, a dimensionless shape measure. Basin area does not belong in the channel section factor.</p>",
            "sources": [
              {
                "id": "CAP4-03-00104",
                "label": "p. 13; topic 3 point 103"
              }
            ]
          },
          {
            "id": "caution-semicircle-efficiency",
            "status": "review",
            "prompt": "The most efficient channel section is semicircular",
            "html": "<p>The semicircle is the mathematical hydraulic optimum, minimising wetted perimeter for a given area. It is not automatically the least-cost section or a stable earth-channel design; construction, lining and bank-stability constraints may favour trapezoidal or other shapes.</p>",
            "sources": [
              {
                "id": "CAP4-03-00129",
                "label": "p. 14; topic 3 point 126"
              }
            ]
          },
          {
            "id": "caution-spillway-outlet-loss",
            "status": "review",
            "prompt": "Discharge loss at the end of an open-channel spillway is KV²/(2g)",
            "html": "<p>The expression describes a <strong>head</strong> loss at the outlet, not a loss of discharge. The capsule supplies no shared coefficient or outlet condition, so a tabulated K may be used only when outlet geometry, submergence and reference velocity match the calculation.</p>",
            "sources": [
              {
                "id": "CAP4-03-00145",
                "label": "p. 15; topic 3 point 142"
              }
            ]
          },
          {
            "id": "caution-bank-threshold-physics",
            "status": "corrected",
            "prompt": "Bank grains start moving at a universal 0.75 times the bed critical shear",
            "html": "<p>No universal multiplier exists. On an inclined bank the downslope pull of the grain's submerged weight consumes part of the available friction, so the allowable flow shear falls by an amount that depends on the bank inclination and the sediment's friction angle. Applied bank shear must also be distinguished from critical shear.</p>",
            "sources": [
              {
                "id": "CAP4-03-00149",
                "label": "p. 11; topic 3 point 19"
              }
            ]
          }
        ],
        "gaps": [
          "Gradually varied flow is tested only through the M1, M2 and S2 cases; profile computation methods such as direct-step integration are not covered.",
          "Sediment coverage is limited to the Shields threshold and the bed-load definition; transport-rate formulas, regime theory and suspended-load calculations are not examined.",
          "No questions address unsteady open-channel flow, surges or stilling-basin design beyond rough jump-length screening.",
          "Manning roughness values are indicative; the capsule supplies no roughness table beyond smooth-finished concrete."
        ]
      },
      "ACiE0306": {
        "code": "ACiE0306",
        "questionCount": 27,
        "formulaSheet": "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation used in this topic</th></tr></thead><tbody><tr><th scope='row'>Isohyetal areal rainfall</th><td>mean depth = Σ(A<sub>i</sub>P<sub>i</sub>)/ΣA<sub>i</sub></td></tr><tr><th scope='row'>Basin form factor</th><td>F<sub>f</sub> = A<sub>b</sub>/L<sub>b</sub><sup>2</sup> (dimensionless)</td></tr><tr><th scope='row'>Unit hydrograph</th><td>UH ordinate = DRH ordinate/direct-runoff depth in cm; DRH = total flow − baseflow</td></tr><tr><th scope='row'>Duration change by superposition</th><td>base of an nD-hour UH = base of the D-hour UH + (n − 1)D</td></tr><tr><th scope='row'>Rational method</th><td>Q = CIA/36 (I in cm/h, A in ha); CIA/360 (I in mm/h, A in ha); 0.278CIA (I in mm/h, A in km<sup>2</sup>)</td></tr><tr><th scope='row'>Time of concentration</th><td>T<sub>c</sub> = T<sub>e</sub> + T<sub>f</sub> (entry time plus travel time)</td></tr><tr><th scope='row'>Return period</th><td>p = 1/T; chance of at least one exceedance in n years = 1 − (1 − 1/T)<sup>n</sup></td></tr><tr><th scope='row'>Deficit storage</th><td>V = Σ(demand − inflow) × Δt</td></tr><tr><th scope='row'>Flood clearance</th><td>RL of lowest bridge point − RL of design HFL, on one datum</td></tr></tbody></table>",
        "blocks": [
          {
            "id": "hydrology-scope-and-dew-formation",
            "title": "Hydrology, the hydrologic cycle and how dew forms",
            "html": "<p><strong>Hydrology</strong> is the science of the occurrence, circulation and distribution of water in the earth-atmosphere system. It follows water through the <strong>hydrologic cycle</strong>: evaporation and transpiration carry moisture into the atmosphere, condensation and precipitation return it, and on land it infiltrates, recharges groundwater storage, runs off over the surface and drains to rivers and the sea. A study that traces rainfall, infiltration, groundwater and river discharge across a basin is therefore hydrological. Hydraulics, by contrast, concerns the mechanics of flowing water, hydrostatics deals with fluids at rest, and rheology with how materials deform.</p><p>For a catchment over any period, a <strong>water balance</strong> accounts for these movements: inflow minus outflow equals the change in storage.</p><p><strong>Dew</strong> is condensation directly onto a cooled surface, not falling precipitation. The <strong>dew point</strong> is the temperature to which air must be cooled, at constant moisture content, to become saturated. Dew forms when an exposed surface cools to or below the dew point of the adjacent air, which then saturates and deposits water. A dew point above 0 °C does not by itself guarantee dew: the surface must actually cool enough. When the dew point and the surface stay above freezing, the condensate is liquid.</p>",
            "moreHtml": "<p>Illustrative check: air with a dew point of 8 °C over a leaf that cools from 15 °C to 9 °C overnight does not saturate at the leaf, so no dew forms; further cooling of the leaf to 7 °C would allow liquid dew to condense.</p>",
            "sources": [
              {
                "id": "CAP4-03-00083",
                "label": "p. 13; topic 3 point 82"
              },
              {
                "id": "CAP4-03-00020",
                "label": "p. 11; topic 3 point 17"
              }
            ]
          },
          {
            "id": "precipitation-lifting-mechanisms",
            "title": "Precipitation mechanisms: cyclonic lifting, cold fronts and warm fronts",
            "html": "<p>Precipitation needs moist air to rise, expand and cool until it saturates, followed by condensation and droplet growth. Hydrology classifies events by what lifts the air:</p><ul><li><strong>Cyclonic</strong>: air converges toward a low-pressure system and ascends, producing widespread rain. Frontal precipitation is a form of cyclonic lifting along the boundary between air masses.</li><li><strong>Convective</strong>: buoyant, unstable air rises, often after surface heating, giving local intense showers.</li><li><strong>Orographic</strong>: terrain forces the air up the windward side of mountains.</li></ul><p>At a <strong>cold front</strong>, an advancing mass of denser cold air undercuts the warm moist air ahead of it and pushes it upward. Lifted and cooled, the warm air can reach saturation and produce precipitation, provided moisture and instability allow clouds to develop. Because a cold front is steep and lifts air rapidly, it often gives a relatively <strong>narrow band</strong> of short, intense showers that moves with the front. At a gently sloping <strong>warm front</strong>, warm air rides slowly up over cold air and typically spreads lighter, more prolonged rain over a wider area.</p><p>These are tendencies governed by frontal speed, moisture and instability. Catchment size is not part of the definition of cold-frontal precipitation.</p>",
            "moreHtml": "<p>Dew and frost form by condensation on cooled surfaces rather than by lifting of air, so they are not classed with these precipitation mechanisms.</p>",
            "sources": [
              {
                "id": "CAP4-03-00091",
                "label": "p. 13; topic 3 point 90"
              },
              {
                "id": "CAP4-03-00092",
                "label": "p. 13; topic 3 point 91"
              },
              {
                "id": "CAP4-03-00093",
                "label": "p. 13; topic 3 point 92"
              }
            ]
          },
          {
            "id": "rain-gauges-isohyets-double-mass",
            "title": "Measuring rainfall: recording gauges, isohyets, areal averages and consistency checks",
            "html": "<p><strong>Gauges.</strong> A non-recording, manually read gauge gives only the accumulated depth between readings, typically daily. A <strong>recording gauge</strong> logs cumulative depth or increments against time, so it reveals how the rain was distributed in time and allows short-duration intensities to be computed, which drainage and flood design need. Recording does not by itself make a gauge more accurate: wind undercatch, calibration, resolution, mechanism losses and maintenance still affect the record.</p><p><strong>Areal rainfall.</strong> An <strong>isohyet</strong> joins points that received equal rainfall depth over the same interval; isobars join equal pressure and isochrones equal travel time. In the <strong>isohyetal method</strong>, the area between successive isohyets is multiplied by the mean depth of that band and the sum is divided by the total area: mean depth = Σ(A<sub>i</sub>P<sub>i</sub>)/ΣA<sub>i</sub>. The method can represent spatial and terrain effects, but its accuracy depends on the observations and on how the contours are drawn; it is not automatically the most accurate method for every basin.</p><p><strong>Consistency.</strong> A <strong>double-mass curve</strong> plots a station's cumulative rainfall against the cumulative mean of a group of consistent neighbouring stations. A consistent record plots as a straight line; a change of slope suggests a changed relationship, perhaps from relocation or altered exposure, which should be investigated before any correction is applied.</p>",
            "moreHtml": "<p>Illustrative check: bands of 3, 5 and 2 km<sup>2</sup> with mean depths of 30, 50 and 70 mm give (3 × 30 + 5 × 50 + 2 × 70)/10 = 48 mm. If a real change in exposure is confirmed, the affected part of the record is commonly scaled by the ratio of the double-mass slopes on either side of the break.</p>",
            "sources": [
              {
                "id": "CAP4-03-00100",
                "label": "p. 13; topic 3 point 99"
              },
              {
                "id": "CAP4-03-00088",
                "label": "p. 13; topic 3 point 87"
              },
              {
                "id": "CAP4-03-00090",
                "label": "p. 13; topic 3 point 89"
              },
              {
                "id": "CAP4-03-00086",
                "label": "p. 13; topic 3 point 85"
              }
            ]
          },
          {
            "id": "rating-curves-and-hydrograph-recession",
            "title": "Stage-discharge rating curves and the recession limb of a hydrograph",
            "html": "<p>Continuous discharge records are rarely measured directly. A gauging station records <strong>stage</strong>, the water-surface elevation above a fixed gauge datum, and converts it to discharge with a <strong>rating curve</strong> calibrated from paired stage and discharge measurements. The relationship holds only while the hydraulic control stays stable. Scour or deposition shifts it, backwater from downstream can raise stage without extra flow, and during rising and falling floods a looped relationship can mean that one stage does not always correspond to one discharge. Ratings therefore need periodic check measurements.</p><p>A flood <strong>hydrograph</strong> built from such records has a rising limb, a crest and a <strong>recession limb</strong>. After rainfall input stops, the recession is fed mainly by the gradual emptying of basin storage: surface detention, channel storage, soil water and groundwater. Its shape is therefore largely a basin property, which is why recession curves help to separate baseflow and to anticipate low flows. It is not wholly independent of the storm, though: antecedent wetness and the storm's spatial and temporal distribution decide how much storage is filled, and which flow paths are active, when the recession begins.</p>",
            "sources": [
              {
                "id": "CAP4-03-00094",
                "label": "p. 13; topic 3 point 93"
              },
              {
                "id": "CAP4-03-00096",
                "label": "p. 13; topic 3 point 95"
              }
            ]
          },
          {
            "id": "catchment-shape-and-form-factor",
            "title": "Catchment shape, basin form factor and flood-peak response",
            "html": "<p>Basin shape influences how runoff from different parts of a catchment arrives at the outlet. The <strong>basin form factor</strong> is the ratio of mean basin width to axial basin length. Since mean width is A<sub>b</sub>/L<sub>b</sub>,</p><p><strong>F<sub>f</sub> = A<sub>b</sub>/L<sub>b</sub><sup>2</sup></strong></p><p>which is a dimensionless plan-shape measure. An elongated, <strong>fern-shaped</strong> basin with a long main stream fed by short tributaries has a low form factor; a compact, <strong>fan-shaped</strong> basin whose tributaries converge near the outlet has a high one.</p><p>For equal areas, comparable slopes and a spatially uniform storm, the elongated basin generally has longer main travel paths and its tributary contributions arrive spread out in time. Its hydrograph peak is therefore usually lower and later, with a longer base. The fan-shaped basin tends to synchronise arrivals and produce a sharper, higher peak. Shape is only one influence: drainage arrangement, slope, storage and storm movement can modify or even reverse this tendency.</p><p>The basin form factor should not be confused with the channel section factor for critical flow, A√D, which has dimensions and uses the wetted flow area of a channel cross-section.</p>",
            "moreHtml": "<p>Illustrative check: two 200 km<sup>2</sup> basins with axial lengths of 25 km and 15 km have form factors 200/625 = 0.32 and 200/225 = 0.89. The first is the more elongated and would be expected to give the more attenuated peak.</p>",
            "sources": [
              {
                "id": "CAP4-03-00087",
                "label": "p. 13; topic 3 point 86"
              },
              {
                "id": "CAP4-03-00105",
                "label": "p. 13; topic 3 point 103"
              }
            ]
          },
          {
            "id": "unit-hydrograph-derivation-and-duration",
            "title": "Unit hydrographs: deriving ordinates and changing the rainfall duration",
            "html": "<p>A <strong>unit hydrograph</strong> (UH) of duration D is the direct-runoff hydrograph produced by 1 cm, or another unit depth, of effective rainfall falling uniformly over the catchment in D hours. The method assumes the catchment responds linearly and does not change with time, so runoff ordinates scale with runoff depth and the responses to successive bursts add.</p><p><strong>Deriving a UH.</strong> First separate baseflow from the observed flood hydrograph to obtain the <strong>direct-runoff hydrograph</strong> (DRH). Find the direct-runoff depth as the DRH volume divided by the catchment area. Then divide every DRH ordinate by that depth in centimetres. The rainfall duration names the UH; it is never the divisor.</p><p><strong>Changing the duration.</strong> A UH for duration nD can be built from D-hour UHs when n is an integer: superpose n copies, each lagged by D hours from the previous one, and divide the sum by n so that the runoff depth remains one unit. The lagged copies extend the support, so the base lengthens by (n − 1)D and the peak generally becomes lower and broader. For non-integer ratios the S-curve method is used.</p>",
            "moreHtml": "<p>Illustrative checks: a flood peaking at 170 m<sup>3</sup>/s over a baseflow of 20 m<sup>3</sup>/s, from 2.5 cm of direct runoff, gives a UH peak of (170 − 20)/2.5 = 60 m<sup>3</sup>/s. A 3-hour UH with a 12-hour base yields a 6-hour UH whose base is 12 + 3 = 15 hours.</p>",
            "sources": [
              {
                "id": "CAP4-03-00097",
                "label": "p. 13; topic 3 point 96"
              },
              {
                "id": "CAP4-03-00085",
                "label": "p. 13; topic 3 point 84"
              }
            ]
          },
          {
            "id": "rational-method-time-of-concentration",
            "title": "Rational method: time of concentration, design intensity and unit conversions",
            "html": "<p>The <strong>rational method</strong> estimates the peak runoff from a small catchment as Q = CIA, where C is a runoff coefficient, I the design rainfall intensity and A the area. Its key idea is that the peak occurs when the whole catchment is contributing, which first happens after the <strong>time of concentration</strong> T<sub>c</sub>, the travel time from the hydraulically most remote point to the outlet. In conventional design the intensity is therefore read from an intensity-duration-frequency relation for a duration equal to T<sub>c</sub> at the chosen return period. Rain may last longer than T<sub>c</sub>; equality is a design selection, not a condition for runoff to occur.</p><p>Along the controlling path, T<sub>c</sub> is the sum of successive travel segments. In urban drainage it is the <strong>entry (inlet) time</strong> to the first inlet plus the <strong>travel time</strong> through drains or channels, T<sub>c</sub> = T<sub>e</sub> + T<sub>f</sub>. Taking only the longer segment omits part of the path.</p><p>Units decide the constant. Since 1 cm/h over 1 hectare is 100 m<sup>3</sup>/h = 1/36 m<sup>3</sup>/s, <strong>Q = CIA/36</strong> with I in cm/h and A in hectares. With I in mm/h the divisor becomes 360 for hectares, and Q = 0.278CIA for square kilometres.</p><p>Short-duration intensity fits often take the form I = a/(t + b). Such a formula needs its units, location, return period and valid duration range before use; evaluate its denominator first.</p>",
            "moreHtml": "<p>Illustrative check: C = 0.5, I = 50 mm/h and A = 2 km<sup>2</sup> give Q = 0.278 × 0.5 × 50 × 2 ≈ 13.9 m<sup>3</sup>/s. With an assumed local fit I = 900/(t + 15) in mm/h and a time of concentration of 5 + 25 = 30 minutes, the design intensity is 900/45 = 20 mm/h.</p>",
            "sources": [
              {
                "id": "CAP4-03-00098",
                "label": "p. 13; topic 3 point 97"
              },
              {
                "id": "CAP4-03-00099",
                "label": "p. 13; topic 3 point 98"
              },
              {
                "id": "CAP4-03-00112",
                "label": "p. 13; topic 3 point 109"
              },
              {
                "id": "CAP4-03-00138",
                "label": "p. 14; topic 3 point 134"
              }
            ]
          },
          {
            "id": "return-period-and-regional-flood-relation",
            "title": "Return period, exceedance probability and evaluating a regional two-year flood relation",
            "html": "<p>For a stationary annual-maximum series, the <strong>return period</strong> T of a flood magnitude is the reciprocal of its annual exceedance probability: <strong>p = 1/T</strong>. A two-year flood therefore has a 50 % chance of being equalled or exceeded in any one year. Return period is a statistical frequency, not a forecast of calendar spacing: a two-year flood can occur in consecutive years or be absent for several. Over a design life of n years, the probability of at least one exceedance is <strong>1 − (1 − 1/T)<sup>n</sup></strong>.</p><p>For ungauged catchments, regional relations estimate flood quantiles from catchment characteristics. The capsule quotes a two-year flood relation attributed to a WECS/DHM method, Q<sub>2</sub> = 1.8767(A<sub>3000</sub> + 1)<sup>0.8783</sup>, with Q<sub>2</sub> in m<sup>3</sup>/s and A<sub>3000</sub> the part of the catchment lying below 3000 m, in km<sup>2</sup>. Evaluate it in order: add one to the area, raise the result to the power 0.8783, then multiply by the coefficient. Treat it as an exercise relation whose edition, calibration range and unit definitions still need checking against the original method, and remember that a frequency estimate is not real-time flood forecasting.</p>",
            "moreHtml": "<p>Illustrative checks: a 50-year flood has p = 0.02 per year, and over 25 years the chance of at least one exceedance is 1 − 0.98<sup>25</sup> ≈ 0.40. Applying the quoted relation to A<sub>3000</sub> = 49 km<sup>2</sup> gives 1.8767 × 50<sup>0.8783</sup> ≈ 58.3 m<sup>3</sup>/s.</p>",
            "sources": [
              {
                "id": "CAP4-03-00107",
                "label": "p. 13; topic 3 point 104"
              },
              {
                "id": "CAP4-03-00106",
                "label": "p. 13; topic 3 point 104"
              }
            ]
          },
          {
            "id": "nepal-rivers-and-regional-methods",
            "title": "Nepal context: rivers by source region and regional methods for ungauged catchments",
            "html": "<p>A commonly taught grouping classifies Nepal's rivers by where they originate, from the highest source belt to the lowest:</p><ol><li><strong>High Himalayan rivers</strong>: the major rivers whose sources lie in the High Himalaya.</li><li><strong>Mahabharat (middle-hill) rivers</strong>: rivers originating in the Mahabharat range.</li><li><strong>Siwalik rivers</strong>: smaller streams rising in the Siwalik hills.</li></ol><p>The capsule states only that there are three groups. This origin-based scheme is the usual teaching interpretation, not a statutory classification, a stream-order system or a guarantee of flow in any season.</p><p>For ungauged catchments, <strong>regional methods</strong> transfer empirical runoff relationships from gauged catchments with similar climate and runoff behaviour. When a method assigns a catchment to a mapped hydrological region, the region should give the equations and coefficients to use and the range of catchments over which they were calibrated; administrative boundaries are no substitute. Before a regional estimate is used for design, test whether the method's calibration covers the site, including basin size, elevation and any extrapolation, and cross-check it against whatever local flow observations exist. An agency name or publication year does not by itself establish accuracy at a particular site, and local measurements should not be discarded merely because they disagree with the regional estimate.</p>",
            "moreHtml": "<p>Two capsule claims are recorded here as unverified: that one such method divides Nepal into seven zones, and that a method labelled DHM 2004 gives accurate flows. The original manuals must be consulted for the region map, edition and validation data.</p>",
            "sources": [
              {
                "id": "CAP4-03-00084",
                "label": "p. 13; topic 3 point 83"
              },
              {
                "id": "CAP4-02-00137",
                "label": "p. 9; topic 2 point 123"
              },
              {
                "id": "CAP4-03-00089",
                "label": "p. 13; topic 3 point 88"
              }
            ]
          },
          {
            "id": "reservoir-storage-for-dry-season-deficit",
            "title": "Storage to bridge a dry-season deficit: a simple mass balance",
            "html": "<p>When a stream's dry-season flow falls below demand, an <strong>impounding reservoir</strong> can store wet-season surplus and release it during the deficit. The required active storage comes from a mass balance over the critical period: the reservoir must supply the difference between demand and inflow for as long as that difference persists,</p><p><strong>V = Σ(demand − inflow) × Δt</strong></p><p>with flows in m<sup>3</sup>/s and time in seconds; one day is 86400 s. Summing cumulative inflow and demand over a longer record, as in a mass-curve analysis, extends the same idea to variable flows.</p><p>Two conditions keep the result meaningful. First, the reservoir must be able to refill: storage moves water from wet periods to dry ones but cannot create water if the dependable total supply is inadequate. Second, real reservoirs lose water to evaporation and seepage and carry dead storage, all of which increase the gross capacity required. Storage is also only one possible response to a seasonal deficit; other sources or demand management may be feasible.</p>",
            "moreHtml": "<p>Illustrative check: an inflow of 2 m<sup>3</sup>/s against a demand of 5 m<sup>3</sup>/s for 20 days needs (5 − 2) × 20 × 86400 = 5184000 m<sup>3</sup>, about 5.18 million m<sup>3</sup> of active storage before losses.</p>",
            "sources": [
              {
                "id": "CAP4-03-00114",
                "label": "p. 14; topic 3 point 111"
              }
            ]
          },
          {
            "id": "bridge-clearance-above-design-flood",
            "title": "Bridge clearance above the design high-flood level",
            "html": "<p>A bridge's flood clearance, or freeboard, is the vertical distance between the <strong>design high-flood level</strong> (HFL) and the specified lowest point of the superstructure. It is a difference of elevations referred to the <strong>same datum</strong>: clearance = RL of the lowest bridge point − RL of the design HFL. The reference point and loading condition named in the design brief matter, because a flexible deck can sit at different levels under different loads.</p><p>The water level seen when a site is surveyed in the dry season cannot establish adequate clearance, because it says nothing about the level reached in the flood the bridge is designed for. Clearance must be checked against the design HFL, with the allowances for floating debris, uncertainty in the flood estimate and structural behaviour that the governing brief specifies. Freeboard is measured up from that water surface, not from the channel bed.</p><p>The capsule cites 5 m as the minimum freeboard for a trail bridge. Treat such a figure as the requirement of a particular brief or manual: the bridge type, design flood, debris allowance, reference point and manual edition must be confirmed before it is applied, and a clearance that only equals the minimum meets it without any spare margin.</p>",
            "moreHtml": "<p>Illustrative check: with the design HFL at RL 212.30 m and the lowest specified point at RL 216.80 m, the clearance is 216.80 − 212.30 = 4.50 m, which would fall short of a 5 m requirement.</p>",
            "sources": [
              {
                "id": "CAP4-10-00194",
                "label": "p. 42; rural point 18"
              },
              {
                "id": "CAP4-10-00195",
                "label": "p. 42; rural point 18"
              }
            ]
          }
        ],
        "cautions": [
          {
            "id": "caution-mip-seven-zones",
            "status": "review",
            "prompt": "Based on the MIP method, Nepal is divided into seven zones",
            "html": "<p>The capsule gives no map, edition or definition for this count, and nearby hydrology notes do not corroborate it. The zone count must be verified against the original MIP manual; these notes teach only the principle that the correct hydrological region supplies the applicable relationships.</p>",
            "sources": [
              {
                "id": "CAP4-02-00137",
                "label": "p. 9; topic 2 point 123"
              }
            ]
          },
          {
            "id": "caution-dew-point-above-freezing",
            "status": "corrected",
            "prompt": "If the dew point is above 0 °C, dew will form",
            "html": "<p>The statement omits the essential condition: an exposed surface must cool to or below the dew point so that the adjacent air saturates. A dew point above freezing only means that the condensate would be liquid if cooling to saturation occurs.</p>",
            "sources": [
              {
                "id": "CAP4-03-00020",
                "label": "p. 11; topic 3 point 17"
              }
            ]
          },
          {
            "id": "caution-nepal-river-groups",
            "status": "review",
            "prompt": "Rivers of Nepal are classified into three groups",
            "html": "<p>The capsule gives only the number three. The origin-based High Himalayan, Mahabharat and Siwalik grouping is the usual teaching scheme supplied here for clarity; it is not presented as an exclusive or statutory classification.</p>",
            "sources": [
              {
                "id": "CAP4-03-00084",
                "label": "p. 13; topic 3 point 83"
              }
            ]
          },
          {
            "id": "caution-dhm-2004-accuracy",
            "status": "review",
            "prompt": "The DHM 2004 method gives accurate flow characteristics for rivers of Nepal",
            "html": "<p>The publication, parameters and validation data behind 'DHM 2004' are not given, and other hydrology notes refer instead to a WECS/DHM 1990 method, so the attribution needs review. No accuracy ranking is asserted here; any regional estimate must be checked for applicability and against local observations.</p>",
            "sources": [
              {
                "id": "CAP4-03-00089",
                "label": "p. 13; topic 3 point 88"
              }
            ]
          },
          {
            "id": "caution-isohyetal-most-accurate",
            "status": "corrected",
            "prompt": "The isohyetal map method is the most accurate way to find average precipitation over an area",
            "html": "<p>No method is universally the most accurate. The isohyetal method can represent terrain-driven variation well when the contours are reliable, but its accuracy still depends on gauge density, data quality and how the isohyets are drawn.</p>",
            "sources": [
              {
                "id": "CAP4-03-00090",
                "label": "p. 13; topic 3 point 89"
              }
            ]
          },
          {
            "id": "caution-cold-front-definition",
            "status": "corrected",
            "prompt": "Cold frontal precipitation means a small catchment area with heavy precipitation",
            "html": "<p>Catchment area does not define cold-frontal precipitation. The defining process is forced ascent of warm moist air by an advancing cold air mass; the typical result is a relatively narrow band of short, intense rain whose extent and duration depend on frontal speed, moisture and instability.</p>",
            "sources": [
              {
                "id": "CAP4-03-00093",
                "label": "p. 13; topic 3 point 92"
              }
            ]
          },
          {
            "id": "caution-recession-independence",
            "status": "corrected",
            "prompt": "The recession limb of a hydrograph is independent of storm characteristics",
            "html": "<p>Absolute independence is too strong. The recession mainly reflects drainage of basin storage, but antecedent wetness and the storm's distribution determine how much storage is filled and which flow paths are active, so recession is largely, not entirely, a basin property.</p>",
            "sources": [
              {
                "id": "CAP4-03-00096",
                "label": "p. 13; topic 3 point 95"
              }
            ]
          },
          {
            "id": "caution-rational-method-duration",
            "status": "review",
            "prompt": "The rational method is applicable when rainfall duration equals the time of concentration",
            "html": "<p>Setting the design duration equal to T<sub>c</sub> is the conventional way of choosing the design intensity so that the whole catchment contributes. It is not a condition for runoff or mass conservation, and actual storms may be longer or shorter.</p>",
            "sources": [
              {
                "id": "CAP4-03-00098",
                "label": "p. 13; topic 3 point 97"
              }
            ]
          },
          {
            "id": "caution-recording-gauge-accuracy",
            "status": "corrected",
            "prompt": "The recording type of rain gauging is very accurate",
            "html": "<p>The blanket accuracy claim is unsupported. The real advantage of a recording gauge is temporal resolution, which yields rainfall intensities; wind exposure, calibration, resolution, mechanism losses and maintenance still determine how accurate it is.</p>",
            "sources": [
              {
                "id": "CAP4-03-00100",
                "label": "p. 13; topic 3 point 99"
              }
            ]
          },
          {
            "id": "caution-wecs-dhm-q2-relation",
            "status": "review",
            "prompt": "The WECS/DHM two-year flood formula is Q2 = 1.8767 (A3000 + 1) raised to 0.8783",
            "html": "<p>The capsule gives no edition, calibration domain or explicit unit definitions, so the attribution and the definition of A<sub>3000</sub> should be verified against the original method. The capsule also calls this flood forecasting; a return-period estimate is a frequency statement, not a real-time forecast.</p>",
            "sources": [
              {
                "id": "CAP4-03-00106",
                "label": "p. 13; topic 3 point 104"
              }
            ]
          },
          {
            "id": "caution-impounding-reservoir-need",
            "status": "review",
            "prompt": "An impounding reservoir is required when dry-season stream flow is less than demand",
            "html": "<p>Storage is one possible response to a seasonal deficit, not automatically the only feasible one. It works only if wet-season refill is adequate, and evaporation, seepage and dead storage must be added to the active volume.</p>",
            "sources": [
              {
                "id": "CAP4-03-00114",
                "label": "p. 14; topic 3 point 111"
              }
            ]
          },
          {
            "id": "caution-short-storm-intensity-formula",
            "status": "review",
            "prompt": "Rainfall intensity for storms shorter than 20 minutes is I = 760/(t + 10)",
            "html": "<p>The numerator 760 is recovered from the full capsule page because the point extract drops it. The original units, location, return period and authority are not stated; units used in exercises are assumptions, and the fit must not be used for design without its calibration context.</p>",
            "sources": [
              {
                "id": "CAP4-03-00138",
                "label": "p. 14; topic 3 point 134"
              }
            ]
          },
          {
            "id": "caution-trail-bridge-freeboard",
            "status": "review",
            "prompt": "The minimum freeboard in a trail bridge is 5 m",
            "html": "<p>Treat 5 m as a conditional minimum from a particular brief. The bridge type, design flood, debris allowance, reference point and manual edition should be verified before the figure is applied as a requirement.</p>",
            "sources": [
              {
                "id": "CAP4-10-00194",
                "label": "p. 42; rural point 18"
              }
            ]
          },
          {
            "id": "caution-basin-form-factor-definition",
            "status": "corrected",
            "prompt": "The form factor is the square root of hydraulic depth multiplied by basin area",
            "html": "<p>This capsule point mixes a channel quantity with a basin quantity. The basin form factor is basin area divided by the square of axial basin length, a dimensionless ratio; the square root of hydraulic depth belongs to the channel section factor A√D.</p>",
            "sources": [
              {
                "id": "CAP4-03-00105",
                "label": "p. 13; topic 3 point 103"
              }
            ]
          }
        ],
        "gaps": [
          "Groundwater hydrology is listed in the syllabus but not tested by these capsule questions; aquifer properties and well hydraulics are not covered here.",
          "Synthetic unit hydrographs, S-curve construction details and flood routing are not examined beyond changing duration by superposition.",
          "Flood-frequency analysis is limited to the return-period definition; fitting probability distributions to annual maxima is not covered.",
          "Several Nepal-specific capsule claims, including the MIP zone count, the DHM 2004 method, the WECS/DHM coefficients and the 5 m trail-bridge freeboard, remain unverified against their original manuals.",
          "Evaporation estimation, infiltration indices and the selection of runoff coefficients are not examined."
        ]
      }
    });
})();
