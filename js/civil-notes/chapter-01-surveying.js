(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_NOTE_TOPICS, {
        ACiE0105: {
            code: "ACiE0105",
            questionCount: 112,
            formulaSheet: "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation and basis</th></tr></thead><tbody><tr><th scope='row'>Error and correction</th><td>error = recorded − true; correction = true − recorded (opposite signs).</td></tr><tr><th scope='row'>Bearing conversion</th><td>True bearing = magnetic bearing + signed declination.</td></tr><tr><th scope='row'>Traverse components</th><td>latitude = l cos θ; departure = l sin θ.</td></tr><tr><th scope='row'>Height of collimation</th><td>HI = known RL + BS; RL = HI − FS.</td></tr><tr><th scope='row'>Sea-level correction</th><td>C = −LH/R; arc length x ≈ Rθ for a small angle.</td></tr></tbody></table>",
            blocks: [
                {
                    id: "survey-framework",
                    title: "Survey control and triangular frameworks",
                    html: "<p><strong>Surveying</strong> establishes relative positions; levelling supplies elevations. Establish control before details. Plane surveying neglects local curvature; geodetic surveying includes it. Cadastral surveys establish parcel boundaries; topographic surveys describe relief and surface features.</p><p>Chain surveying suits small, open, fairly level sites with simple details and large-scale plans. Its triangular framework uses measured sides, not necessarily measured angles. Prefer nearly equilateral triangles, conventionally with angles between 30° and 120°. Model 1 Q12's 35°, 80°, 65° also sum correctly to 180°.</p>",
                    moreHtml: "<p>Reconnoitre, select and reference stations, then measure. A <strong>base line</strong> anchors the framework; a <strong>tie line</strong> locates subsidiary details; an independently measured <strong>check line</strong> tests the plotted geometry.</p>",
                    sources: [
                        { id: "BASI674-00032", set: 4, question: 6 },
                        { id: "BASI674-00074", set: 1, question: 1 },
                        { id: "BASI674-00217", set: 1, question: 7 },
                        { id: "BASI674-00218", set: 18, question: 3 },
                        { id: "BASI674-00222", set: 18, question: 7 },
                        { id: "BASI674-00223", set: 18, question: 8 },
                        { id: "BASI674-00226", set: 18, question: 11 },
                        { id: "BASI674-00247", set: 20, question: 6 },
                        { id: "BASI674-00255", set: 20, question: 13 },
                        { id: "BASI674-00258", set: 21, question: 3 },
                        { id: "BASI674-00331", set: 1, question: 12 },
                        { id: "BASI674-00339", set: 27, question: 2 },
                        { id: "BASI674-00345", set: 27, question: 8 },
                        { id: "BASI674-00349", set: 27, question: 12 },
                        { id: "BASI674-00351", set: 28, question: 1 }
                    ]
                },
                {
                    id: "ranging-offsets-and-chains",
                    title: "Ranging, offsets and chain construction",
                    html: "<p><strong>Ranging</strong> aligns intermediate points; <strong>chainage</strong> is distance along a survey line; <strong>offsets</strong> locate lateral details. Record offset length, side and chainage together. A river can obstruct chaining but allow ranging; a building obstructs both. An intervening hill can require reciprocal ranging.</p>" +
                        "<table><thead><tr><th scope='col'>Instrument</th><th scope='col'>Function</th></tr></thead><tbody><tr><td>Line ranger</td><td>Alignment, not perpendicular offsets</td></tr><tr><td>Cross-staff</td><td>Right angles; French type also 45°</td></tr><tr><td>Optical square</td><td>Mirrors at 45° give 90° by double reflection</td></tr><tr><td>Tape</td><td>Measures offset length</td></tr></tbody></table>" +
                        "<p>Metric links are 0.20 m: 20 m chains have 100; 30 m chains have 150. Gunter's chain has 100 links over 66 ft. Straighten bent links and retest; distinguish links from distance markers.</p>",
                    sources: [
                        { id: "BASI674-00057", set: 6, question: 5 },
                        { id: "BASI674-00078", set: 7, question: 12 },
                        { id: "BASI674-00224", set: 18, question: 9 },
                        { id: "BASI674-00225", set: 18, question: 10 },
                        { id: "BASI674-00229", set: 19, question: 1 },
                        { id: "BASI674-00232", set: 19, question: 4 },
                        { id: "BASI674-00242", set: 20, question: 1 },
                        { id: "BASI674-00243", set: 20, question: 2 },
                        { id: "BASI674-00244", set: 20, question: 3 },
                        { id: "BASI674-00246", set: 20, question: 5 },
                        { id: "BASI674-00250", set: 20, question: 8 },
                        { id: "BASI674-00253", set: 20, question: 11 },
                        { id: "BASI674-00254", set: 20, question: 12 },
                        { id: "BASI674-00336", set: 26, question: 12 },
                        { id: "BASI674-00337", set: 26, question: 13 },
                        { id: "BASI674-00338", set: 27, question: 1 }
                    ]
                },
                {
                    id: "errors-and-distance-corrections",
                    title: "Errors, correction signs and corrected areas",
                    html: "<p>Define <strong>error = recorded − true</strong>, but <strong>correction = true − recorded</strong>. Add corrections to observations. Repeated bias accumulates; uncertainty in a sum of independent random measurements grows roughly as √n for n comparable observations. </p><table><thead><tr><th scope='col'>Cause</th><th scope='col'>Distance correction</th></tr></thead><tbody><tr><td>Overlong calibrated chain</td><td>Positive</td></tr><tr><td>Short chain, sag or misalignment</td><td>Negative</td></tr></tbody></table><p>Multiply recorded distance by actual/nominal chain length; multiply area by that ratio <em>squared</em>. Model 7 Q10: 100 × (100.8/100)<sup>2</sup> = <strong>101.6064 acres</strong>.</p><p>For slope length L and height difference h, horizontal distance is √(L<sup>2</sup> − h<sup>2</sup>); signed correction is approximately −h<sup>2</sup>/(2L). Illustrating Model 21 Q2 with L = 30 m and h = 3 m gives −0.1504 m exactly, versus −0.1500 m approximately. Model 7 Q11's 0.015α<sup>2</sup> links is a positive <em>magnitude</em> for 100 links with α in degrees: subtract it.</p>",
                    moreHtml: "<p>Blunders need detection, not averaging. Permissible error is an acceptance limit. Low-expansion Invar reduces temperature effects.</p>",
                    sources: [
                        { id: "BASI674-00075", set: 7, question: 9 },
                        { id: "BASI674-00076", set: 7, question: 10 },
                        { id: "BASI674-00077", set: 7, question: 11 },
                        { id: "BASI674-00219", set: 18, question: 4 },
                        { id: "BASI674-00227", set: 18, question: 12 },
                        { id: "BASI674-00230", set: 19, question: 2 },
                        { id: "BASI674-00231", set: 19, question: 3 },
                        { id: "BASI674-00245", set: 20, question: 4 },
                        { id: "BASI674-00248", set: 1, question: 8 },
                        { id: "BASI674-00249", set: 20, question: 7 },
                        { id: "BASI674-00251", set: 20, question: 9 },
                        { id: "BASI674-00252", set: 20, question: 10 },
                        { id: "BASI674-00256", set: 21, question: 1 },
                        { id: "BASI674-00257", set: 21, question: 2 },
                        { id: "BASI674-00350", set: 27, question: 13 }
                    ]
                },
                {
                    id: "bearings-and-directions",
                    title: "Bearings, declination and included angles",
                    html: "<p>Whole-circle bearings run clockwise from north. Reduced bearings specify a quadrant and an angle no greater than 90°.</p>" +
                        "<table><thead><tr><th scope='col'>Reduced bearing</th><th scope='col'>Whole-circle bearing</th></tr></thead><tbody><tr><td>N θ E</td><td>θ</td></tr><tr><td>S θ E</td><td>180° − θ</td></tr><tr><td>S θ W</td><td>180° + θ</td></tr><tr><td>N θ W</td><td>360° − θ</td></tr></tbody></table>" +
                        "<p>Model 19 Q6: N 87° W becomes 273°. <strong>True bearing = magnetic bearing + signed declination</strong>, east positive. Model 6 Q8: 32° − 10°15′ = 21°45′. Local attraction is nearby magnetic disturbance, not declination; compare fore and back bearings for a 180° difference.</p>" +
                        "<p>A back bearing differs by 180°, reduced modulo 360°. At B, compare <strong>BA with BC</strong>. Model 6 Q3 gives BA = 326°30′ and BC = 68°30′; their smaller angle is 102°. Model 26 Q8 similarly gives 160°, not the 20° change between forward directions.</p>",
                    sources: [
                        { id: "BASI674-00055", set: 6, question: 3 },
                        { id: "BASI674-00060", set: 6, question: 8 },
                        { id: "BASI674-00233", set: 19, question: 5 },
                        { id: "BASI674-00234", set: 19, question: 6 },
                        { id: "BASI674-00332", set: 26, question: 8 },
                        { id: "BASI674-00344", set: 27, question: 7 }
                    ]
                },
                {
                    id: "traverse-closure",
                    title: "Traverse components and closure direction",
                    html: "<p>For length l and whole-circle bearing θ, <strong>latitude = l cos θ</strong> and <strong>departure = l sin θ</strong>, north and east positive. Both algebraic sums should vanish around a closed traverse.</p>" +
                        "<p>Residuals e<sub>N</sub>, e<sub>E</sub> give misclosure √(e<sub>N</sub><sup>2</sup> + e<sub>E</sub><sup>2</sup>). Direction satisfies tan δ = e<sub>E</sub>/e<sub>N</sub>; component signs or atan2(e<sub>E</sub>, e<sub>N</sub>) resolve the quadrant. Model 6 Q1 and Model 7 Q8 produce a NW start-to-computed-end residual, but a SE return-to-start line.</p>",
                    sources: [
                        { id: "BASI674-00053", set: 6, question: 1 },
                        { id: "BASI674-00056", set: 6, question: 4 },
                        { id: "BASI674-00073", set: 7, question: 8 }
                    ]
                },
                {
                    id: "instruments-and-optics",
                    title: "Theodolites, total stations and telescope readings",
                    html: "<p>Theodolites measure horizontal and vertical angles; traditional instrument size means horizontal graduated-circle diameter. <strong>EDM</strong> means electronic distance measurement. Total stations observe angles and slope distance, deriving horizontal/vertical components; instrument and target heights are entered separately.</p>" +
                        "<p>With elevation angle v measured from horizontal and slope distance S, H = S cos v; elevation difference is S sin v plus instrument height minus target height. For zenith angle z, H = S sin z instead. Model 5 Q8's ideal opposite-face zenith reading is 360° − 98°30′30″ = <strong>261°29′30″</strong>.</p>" +
                        "<p>Focus the eyepiece on the cross-hairs, then the target image; shifting the eye must cause no relative movement. Parallax removal is temporary adjustment. The reticle is before the eyepiece; internal focusing moves a negative lens. Horizontal-sight stadia distance is D = Ks + C, where K = f/i, i is hair spacing and s is the staff intercept.</p>",
                    sources: [
                        { id: "BASI674-00047", set: 5, question: 8 },
                        { id: "BASI674-00054", set: 6, question: 2 },
                        { id: "BASI674-00084", set: 8, question: 5 },
                        { id: "BASI674-00239", set: 19, question: 11 },
                        { id: "BASI674-00240", set: 19, question: 12 },
                        { id: "BASI674-00241", set: 19, question: 13 },
                        { id: "BASI674-00261", set: 21, question: 6 },
                        { id: "BASI674-00334", set: 26, question: 10 },
                        { id: "BASI674-00340", set: 27, question: 3 },
                        { id: "BASI674-00348", set: 27, question: 11 }
                    ]
                },
                {
                    id: "level-datums-and-observations",
                    title: "Datums, benchmarks and staff-reading roles",
                    html: "<p>A <strong>datum</strong> is the elevation reference; <strong>RL</strong> is height relative to it; a <strong>benchmark</strong> is a stable marked point with known RL. Mean sea level approximates a level datum. A horizontal line is locally tangent; a level line curves, remaining normal to local gravity.</p>",
                    moreHtml: "<p>A backsight establishes the sight-line elevation; an intermediate sight measures detail; a foresight precedes moving the instrument. A change point receives FS, then BS from the next setup. Secure project benchmarks during detailed work, but control can be established earlier.</p>",
                    sources: [
                        { id: "BASI674-00058", set: 6, question: 6 },
                        { id: "BASI674-00081", set: 8, question: 2 },
                        { id: "BASI674-00082", set: 8, question: 3 },
                        { id: "BASI674-00085", set: 8, question: 6 },
                        { id: "BASI674-00087", set: 8, question: 8 },
                        { id: "BASI674-00089", set: 8, question: 10 },
                        { id: "BASI674-00263", set: 21, question: 8 },
                        { id: "BASI674-00268", set: 1, question: 9 }
                    ]
                },
                {
                    id: "levelling-methods-and-checks",
                    title: "Levelling methods and arithmetic checks",
                    html: "<table><thead><tr><th scope='col'>Method</th><th scope='col'>Purpose</th></tr></thead><tbody><tr><td>Simple</td><td>One setup between points</td></tr><tr><td>Differential</td><td>Transfer elevations through several setups</td></tr><tr><td>Fly</td><td>Rapid benchmark transfer, chiefly BS/FS</td></tr><tr><td>Reciprocal</td><td>Opposite-bank observations across an obstacle</td></tr></tbody></table><p><strong>HI = known RL + BS</strong>; another RL = HI − IS or FS. In rise-and-fall reduction, compare readings from the same setup: a smaller later reading means a rise. </p><p>The check is ΣBS − ΣFS = RL<sub>last</sub> − RL<sub>first</sub>. Rise-and-fall additionally checks Σrise − Σfall against that difference, including intermediate reductions. Arithmetic agreement does not prove field accuracy.</p><p>Illustrating Model 5 Q12: start at 100.000 m, BS 1.500 m, FS 2.200 m. HI = 101.500 m; next RL = 99.300 m. Both checked differences equal <strong>−0.700 m</strong>.</p>",
                    moreHtml: "<p>Do not compare FS and the next BS on the same change point as different ground elevations.</p>",
                    sources: [
                        { id: "BASI674-00051", set: 5, question: 12 },
                        { id: "BASI674-00079", set: 7, question: 13 },
                        { id: "BASI674-00083", set: 8, question: 4 },
                        { id: "BASI674-00088", set: 8, question: 9 },
                        { id: "BASI674-00259", set: 21, question: 4 },
                        { id: "BASI674-00262", set: 21, question: 7 },
                        { id: "BASI674-00265", set: 21, question: 10 },
                        { id: "BASI674-00270", set: 22, question: 1 },
                        { id: "BASI674-00327", set: 26, question: 4 },
                        { id: "BASI674-00346", set: 27, question: 9 },
                        { id: "BASI674-00347", set: 27, question: 10 }
                    ]
                },
                {
                    id: "curvature-refraction-and-sea-level",
                    title: "Curvature, refraction and sea-level reduction",
                    html: "<p><strong>Corrections added to staff readings</strong>, with distance d in kilometres and results in metres: curvature C<sub>c</sub> = −0.0785d<sup>2</sup>; refraction C<sub>r</sub> ≈ +0.0112d<sup>2</sup>; combined ≈ −0.0673d<sup>2</sup>. Refraction offsets about one-seventh of curvature; atmospheric conditions vary. At 1 km, subtract 0.0673 m from the reading, so RL = HI − reading increases by 0.0673 m.</p>" +
                        "<p>Equal BS/FS distances cancel common curvature, refraction and collimation effects under comparable conditions. Reciprocal levelling averages the two B-minus-A height differences observed from opposite banks when equal sights are impossible. With a and b denoting readings on A and B, average (a<sub>1</sub> − b<sub>1</sub>) and (a<sub>2</sub> − b<sub>2</sub>).</p>" +
                        "<p>A horizontal length L at height H above sea level reduces approximately by <strong>C = −LH/R</strong>, with Earth's radius R and all lengths in consistent units.</p>",
                    sources: [
                        { id: "BASI674-00045", set: 5, question: 6 },
                        { id: "BASI674-00086", set: 8, question: 7 },
                        { id: "BASI674-00235", set: 19, question: 7 },
                        { id: "BASI674-00267", set: 21, question: 12 },
                        { id: "BASI674-00269", set: 21, question: 13 },
                        { id: "BASI674-00271", set: 22, question: 2 }
                    ]
                },
                {
                    id: "bubble-tube-adjustment",
                    title: "Bubble adjustment and sensitivity",
                    html: "<p>An adjusted bubble level has its bubble axis parallel to the line of collimation. When centred, both are horizontal. Greater longitudinal radius gives more bubble movement for the same tilt: <strong>x ≈ Rθ</strong>, θ in radians. The bank's 100 m radius is illustrative, not universal. Low viscosity helps response; the bank's asserted viscosity/diameter proportionalities are not universal sensitivity laws.</p>",
                    sources: [
                        { id: "BASI674-00080", set: 8, question: 1 },
                        { id: "BASI674-00260", set: 21, question: 5 },
                        { id: "BASI674-00264", set: 21, question: 9 },
                        { id: "BASI674-00266", set: 21, question: 11 },
                        { id: "WATE701-00010", set: 2, question: 57 }
                    ]
                },
                {
                    id: "topographic-contours",
                    title: "Reading contours and choosing a survey method",
                    html: "<p>A <strong>contour</strong> joins equal elevations; contour interval is their vertical separation. Close spacing means steep ground, wide spacing gentle ground, and even spacing uniform slope. </p>",
                    moreHtml: "<p>Closed contours increasing inward indicate a hill; decreasing inward indicate a depression. Contours coincide at a vertical cliff; overhangs are the crossing exception.</p><p>Direct contouring locates specified elevations in the field: accurate but slow. Indirect methods interpolate from surveyed spot heights. Topographic ground models support engineering, drainage and soil/traffic studies, but do not themselves measure soil properties or traffic flow.</p>",
                    sources: [
                        { id: "BASI674-00048", set: 5, question: 9 },
                        { id: "BASI674-00059", set: 6, question: 7 },
                        { id: "BASI674-00236", set: 19, question: 8 },
                        { id: "BASI674-00237", set: 19, question: 9 },
                        { id: "BASI674-00238", set: 19, question: 10 },
                        { id: "BASI674-00333", set: 26, question: 9 }
                    ]
                },
                {
                    id: "plane-table-work",
                    title: "Plane-table setup and resection",
                    html: "<p>Level with a spirit level; centre with a plumbing fork and plumb bob; orient so plotted lines parallel their ground counterparts. An <strong>alidade</strong> sights and draws rays; a compass supplies magnetic orientation.</p>",
                    moreHtml: "<p><strong>Resection</strong> locates the table using already plotted control points. The two-point problem normally needs an auxiliary station or extra orientation information; three-point resection uses three known targets. Inaccessible targets may remain visible. Backsighting commonly orients a known station; additional control points are not forbidden.</p>",
                    sources: [
                        { id: "BASI674-00335", set: 26, question: 11 },
                        { id: "BASI674-00341", set: 27, question: 4 },
                        { id: "BASI674-00342", set: 27, question: 5 },
                        { id: "BASI674-00343", set: 27, question: 6 },
                        { id: "BASI674-00352", set: 28, question: 2 }
                    ]
                },
                {
                    id: "circular-curve-geometry",
                    title: "Circular curves and unit-sensitive formulas",
                    html: "<p>For radius R and central angle Δ:</p>" +
                        "<ul><li>Tangent length T = R tan(Δ/2).</li><li>Long chord = 2R sin(Δ/2).</li><li>Mid-ordinate M = R[1 − cos(Δ/2)].</li><li>External distance E = R[sec(Δ/2) − 1].</li><li>Arc length = RΔ for radians, or πRΔ/180 for degrees.</li></ul>" +
                        "<p>Model 5 Q11 and Model 7 Q7: if Δ = 10°24′ = 10.4° and R = 10.26 m, the mid-ordinate is <strong>0.04223 m</strong>.</p>" +
                        "<p>If degree of curve D subtends a standard <em>arc</em> a, R = 180a/(πD). Model 5 Q13 gives about 241.14 m only for a = 100 m; a = 30 m gives 72.34 m. A standard <em>chord</em> c instead requires R = c/[2 sin(D/2)]. Always establish the definition and angular units.</p>",
                    sources: [
                        { id: "BASI674-00050", set: 5, question: 11 },
                        { id: "BASI674-00052", set: 5, question: 13 },
                        { id: "BASI674-00072", set: 7, question: 7 }
                    ]
                },
                {
                    id: "gps-and-gis",
                    title: "GPS and GIS: tested facts and limited coverage",
                    html: "<p><strong>GPS</strong> uses satellite signal travel times. A conventional three-dimensional solution needs four independent satellite ranges for three coordinates plus receiver-clock bias. Model 5 Q7's 24 satellites describes the nominal constellation design, not a guaranteed current count or unobstructed visibility.</p>",
                    moreHtml: "<p><strong>GIS</strong> connects location with attributes for capture, storage, retrieval, spatial analysis and mapping. Import, export and data transfer are also possible: the repeated bank question concerns distinctive capabilities, not an absolute ban on transferring data. Applied positioning and GIS workflows are not tested in these extracts.</p>",
                    sources: [
                        { id: "BASI674-00046", set: 5, question: 7 },
                        { id: "BASI674-00049", set: 5, question: 10 },
                        { id: "BASI674-00071", set: 7, question: 6 }
                    ]
                }
            ],
            gaps: [
                "GPS/GIS coverage is only one nominal satellite-count item and two repeated capability items. No field positioning, coordinate-system/projection, accuracy-control or applied GIS analysis exercise is supplied.",
                "No numerical traverse adjustment, complete levelling field book or curve-setting-out procedure is supplied. Numerical extensions of definition questions are labelled as illustrations."
            ],
            cautions: [
                {
                    "id": "check-basi674-00248",
                    "status": "review",
                    "prompt": "Every 20 m chain should be accurate to within",
                    "html": "<p><strong>The accuracy tolerance needs a named chain specification.</strong> The keyed plus-or-minus 5 mm for 20 m is a bank convention, not a verified current requirement for every chain and calibration condition.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00248",
                            "set": 1,
                            "question": 8
                        }
                    ]
                },
                {
                    "id": "check-basi674-00050",
                    "status": "review",
                    "prompt": "Find the perpendicular distance if the radius of the curve is 10.26 m and the angle is θ = 10° 24'.",
                    "html": "<p><strong>The requested perpendicular distance is not defined.</strong> If it means mid-ordinate for a 10-degree-24-minute central angle, R[1 - cos(theta/2)] gives about 0.042 m. Other offsets use different geometry.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00050",
                            "set": 5,
                            "question": 11
                        }
                    ]
                },
                {
                    "id": "check-basi674-00052",
                    "status": "review",
                    "prompt": "Find the value of radius of curvature if D is given as 23.76",
                    "html": "<p>Model 5 Q13 omits the standard arc/chord definition; its 241.16 m choice is only approximate under the 100 m arc assumption.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00052",
                            "set": 5,
                            "question": 13
                        }
                    ]
                },
                {
                    "id": "check-basi674-00053",
                    "status": "corrected",
                    "prompt": "In a closed traverse, total north latitude exceeds south latitude and total west departure exceeds east departure. In which quadrant is the closing line drawn from the computed end point back to the start?",
                    "html": "<p><strong>Corrected: south-east closing line, option B.</strong> The accumulated misclosure is north-west; the computed-end-to-start correction vector is south-east.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00053",
                            "set": 6,
                            "question": 1
                        }
                    ]
                },
                {
                    "id": "check-basi674-00072",
                    "status": "review",
                    "prompt": "Find the perpendicular distance if the radius of the curve is 10.26 m and the angle is 0 = 10° 24'.",
                    "html": "<p><strong>The requested perpendicular distance is not defined.</strong> If it means mid-ordinate for a 10-degree-24-minute central angle, R[1 - cos(theta/2)] gives about 0.042 m. Other offsets use different geometry.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00072",
                            "set": 7,
                            "question": 7
                        }
                    ]
                },
                {
                    "id": "check-basi674-00073",
                    "status": "corrected",
                    "prompt": "A traverse has excess north latitude and excess west departure. The closing line is defined from the computed final station back to the starting station. What is its quadrant?",
                    "html": "<p><strong>Corrected: south-east, option B.</strong> The stem explicitly requests the return-to-start closing vector, which is opposite the north-west misclosure.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00073",
                            "set": 7,
                            "question": 8
                        }
                    ]
                },
                {
                    "id": "check-basi674-00080",
                    "status": "review",
                    "prompt": "In an adjusted level when the bubble is centered the axis of the bubble tube become parallel to",
                    "html": "<p><strong>Levelling terminology:</strong> Model 8 Q1 offers synonymous sight/collimation choices; Q2 blurs local horizontal and curved level lines. </p>",
                    "sources": [
                        {
                            "id": "BASI674-00080",
                            "set": 8,
                            "question": 1
                        }
                    ]
                },
                {
                    "id": "check-basi674-00081",
                    "status": "review",
                    "prompt": "The line normal to the plumb line is known as",
                    "html": "<p><strong>Local tangent versus curved surface.</strong> A horizontal line is normal to the local plumb line at a point. A level line follows a curved equipotential surface; those descriptions are not interchangeable over a finite distance.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00081",
                            "set": 8,
                            "question": 2
                        }
                    ]
                },
                {
                    "id": "check-basi674-00219",
                    "status": "review",
                    "prompt": "Permissible limits of error in chaining for measurement on rough or hilly ground is",
                    "html": "<p><strong>Permissible relative error depends on the survey purpose and specification.</strong> The rough-ground 1:250 key is a textbook convention here, not an established universal tolerance for hilly surveys.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00219",
                            "set": 18,
                            "question": 4
                        }
                    ]
                },
                {
                    "id": "check-basi674-00227",
                    "status": "review",
                    "prompt": "Incorrect marking the end of chain length is an example of",
                    "html": "<p><strong>Marking error is cumulative only if it is systematically biased.</strong> Repeated shifts in one direction accumulate; random marking errors can compensate. The stem does not establish which pattern occurs.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00227",
                            "set": 18,
                            "question": 12
                        }
                    ]
                },
                {
                    "id": "check-basi674-00231",
                    "status": "corrected",
                    "prompt": "When a sagging tape reading is used without applying sag correction, the recorded-distance error is",
                    "html": "<p><strong>Corrected: positive recorded-distance error, option A.</strong> Sag makes the measured curve longer than the horizontal span. Its correction is negative, but the uncorrected error is positive.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00231",
                            "set": 19,
                            "question": 3
                        }
                    ]
                },
                {
                    "id": "check-basi674-00251",
                    "status": "corrected",
                    "prompt": "Positive error is caused if",
                    "html": "<p><strong>Corrected: all listed causes, option D.</strong> A short chain, uncorrected slope or sag, and a misaligned measuring path can each make the recorded horizontal distance too large.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00251",
                            "set": 20,
                            "question": 9
                        }
                    ]
                },
                {
                    "id": "check-basi674-00253",
                    "status": "review",
                    "prompt": "If a chain is found very short on testing, it can be adjusted by",
                    "html": "<p><strong>Choose a remedy after identifying why the chain is short.</strong> Straightening bent links can restore length, while damaged rings or a wrong assembly need a different repair. Recheck the chain against its standard after adjustment.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00253",
                            "set": 20,
                            "question": 11
                        }
                    ]
                },
                {
                    "id": "check-basi674-00254",
                    "status": "review",
                    "prompt": "Chalmage is the distance measured",
                    "html": "<p><strong>Spelling and meaning:</strong> “Chalmage” is intended to mean chainage, the distance measured along an alignment from its designated starting datum.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00254",
                            "set": 20,
                            "question": 12
                        }
                    ]
                },
                {
                    "id": "check-basi674-00262",
                    "status": "review",
                    "prompt": "Which of the following leveling carried out to determine the elevation difference between two points on the surface to earth?",
                    "html": "<p><strong>The observation sequence distinguishes levelling methods.</strong> Differential levelling transfers elevation through setups; simple levelling uses one setup. Merely finding an elevation difference does not uniquely specify the method.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00262",
                            "set": 21,
                            "question": 7
                        }
                    ]
                },
                {
                    "id": "check-basi674-00263",
                    "status": "review",
                    "prompt": "The surface of zero elevation around the earth, which is slightly irregular and curved, is known as",
                    "html": "<p><strong>A vertical datum is not the observed sea surface everywhere.</strong> The geoid is an equipotential reference surface approximating mean sea level; a horizontal surface is only a local tangent. The source uses MSL loosely.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00263",
                            "set": 21,
                            "question": 8
                        }
                    ]
                },
                {
                    "id": "check-basi674-00265",
                    "status": "review",
                    "prompt": "Which of the following leveling method is used to determine difference of elevation of two points that are quiet apart?",
                    "html": "<p>Obstacles justify reciprocal observations; rapid benchmark transfer justifies fly levelling.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00265",
                            "set": 21,
                            "question": 10
                        }
                    ]
                },
                {
                    "id": "check-basi674-00267",
                    "status": "review",
                    "prompt": "Which of the following is the CORRECT ratio of refraction correction to curvature correction?",
                    "html": "<p><strong>Refraction signs:</strong> Model 21 Q12's explanation reverses staff-reading correction signs relative to Q13. </p><p>The 1/7 ratio compares magnitudes; signed refraction and curvature corrections have opposite signs.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00267",
                            "set": 21,
                            "question": 12
                        }
                    ]
                },
                {
                    "id": "check-basi674-00269",
                    "status": "review",
                    "prompt": "Which of the following is true for the correction for curvature?",
                    "html": "<p><strong>Keep the correction convention explicit.</strong> For a distant staff reading, the curvature correction is negative and the ordinary refraction correction positive. Their directions are opposite; a 1/7 comparison concerns magnitudes.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00269",
                            "set": 21,
                            "question": 13
                        }
                    ]
                },
                {
                    "id": "check-basi674-00327",
                    "status": "review",
                    "prompt": "Which of the following expression is used for calculation of ha of a point?",
                    "html": "<p>Model 26 Q4's HI − BS recovers the backsight point, not every unknown point.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00327",
                            "set": 26,
                            "question": 4
                        }
                    ]
                },
                {
                    "id": "check-basi674-00335",
                    "status": "review",
                    "prompt": "Orientation of plane-table, by solving two-point problem, is adopted only when",
                    "html": "<p><strong>Plane-table wording:</strong> Model 26 Q11 confuses inaccessible with invisible control. </p>",
                    "sources": [
                        {
                            "id": "BASI674-00335",
                            "set": 26,
                            "question": 11
                        }
                    ]
                },
                {
                    "id": "check-basi674-00336",
                    "status": "review",
                    "prompt": "In a metric chain, number of links per meter run can be",
                    "html": "<p><strong>Links per metre:</strong> a conventional 0.2 m metric-chain link gives five links per metre. Thus 20 m and 30 m chains have 100 and 150 links respectively, not 100 links each.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00336",
                            "set": 26,
                            "question": 12
                        }
                    ]
                },
                {
                    "id": "check-basi674-00337",
                    "status": "review",
                    "prompt": "The distance between two brass rings in a surveyor’s chain is",
                    "html": "<p><strong>Marker identity matters.</strong> Individual chain links, brass rings and distance tallies are different features. Their spacing needs the specified chain type; a marker interval should not be substituted for link length.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00337",
                            "set": 26,
                            "question": 13
                        }
                    ]
                },
                {
                    "id": "check-basi674-00341",
                    "status": "review",
                    "prompt": "... instrument is used to sight to an object.",
                    "html": "<p>Model 27 Q4's compass fits its options, but an alidade is the plane-table sighting tool. </p>",
                    "sources": [
                        {
                            "id": "BASI674-00341",
                            "set": 27,
                            "question": 4
                        }
                    ]
                },
                {
                    "id": "check-basi674-00346",
                    "status": "review",
                    "prompt": "In leveling, the first and last point are at a far distance.",
                    "html": "<p><strong>Distance alone does not establish fly levelling.</strong> Rapid benchmark transfer is fly levelling; detailed elevation transfer is differential levelling. Reciprocal observations address obstacles and systematic-error cancellation.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00346",
                            "set": 27,
                            "question": 9
                        }
                    ]
                },
                {
                    "id": "check-basi674-00352",
                    "status": "review",
                    "prompt": "Which of the below is not a method of doing resection?",
                    "html": "<p>Model 28 Q2's named-method exclusion does not make four-point resection impossible.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00352",
                            "set": 28,
                            "question": 2
                        }
                    ]
                }
            ]
        },
        ACiE0106: {
            code: "ACiE0106",
            questionCount: 64,
            formulaSheet: "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Relation and basis</th></tr></thead><tbody><tr><th scope='row'>Wall quantity</th><td>volume = length × breadth × height/depth; long-wall/short-wall or centre-line lengths.</td></tr><tr><th scope='row'>Earthwork section</th><td>Trapezoidal cutting area A = bh + mh<sup>2</sup> (b base, h depth, m side slope).</td></tr><tr><th scope='row'>Average end areas</th><td>Volume V = L(A<sub>1</sub> + A<sub>2</sub>)/2 between sections spaced L apart.</td></tr><tr><th scope='row'>Brickwork</th><td>≈ 500 bricks/m<sup>3</sup> of standard brickwork including mortar.</td></tr><tr><th scope='row'>Cranked bar</th><td>Extra length per 45° crank = d(√2 − 1), with d the crank offset.</td></tr><tr><th scope='row'>Straight-line depreciation</th><td>Annual = (cost − scrap value)/useful life.</td></tr></tbody></table>",
            blocks: [
                {
                    id: "estimate-types-and-approval",
                    title: "Estimate types, work value and approval",
                    html: "<p><strong>Estimation</strong> predicts expenditure before execution. A detailed estimate prices measured items under earthwork, concrete, masonry, roofing, finishes, timber, steel and services; reliable drawings and specifications make it stronger than a rough estimate.</p><table><thead><tr><th scope='col'>Estimate</th><th scope='col'>Use</th></tr></thead><tbody><tr><td>Preliminary</td><td>Feasibility; area or volume rates</td></tr><tr><td>Revised</td><td>Update an inadequate sanctioned cost</td></tr><tr><td>Supplementary</td><td>Additional, previously unprovided work</td></tr><tr><td>Maintenance</td><td>Upkeep and repairs</td></tr></tbody></table>",
                    moreHtml: "<p>Administrative approval accepts proposed expenditure. In bank terminology, work value excludes contingencies, work-charged establishment and tools/plant allowances; actual cost includes expenditure actually incurred.</p>",
                    sources: [
                        { id: "BASI674-00360", set: 28, question: 10 },
                        { id: "BASI674-00375", set: 29, question: 12 },
                        { id: "BASI674-00385", set: 30, question: 7 },
                        { id: "BASI674-00389", set: 30, question: 11 },
                        { id: "BASI674-00417", set: 32, question: 11 }
                    ]
                },
                {
                    id: "area-bases-and-plinth-estimates",
                    title: "Area definitions and preliminary building cost",
                    html: "<p><strong>Plinth area</strong> is covered built-up area at floor level, including walls. <strong>Carpet area</strong> measures usable interior space under a declared convention, excluding walls and open courtyards/balconies. Floor-area inclusions must be stated rather than assumed.</p>" +
                        "<p>Plinth estimates use area × a comparable building's adjusted area rate; cube-rate estimates use building volume. Model 6 Q12 assumes P = 100 + 0.5P, with no separate wall-area term. Thus P = 200 m<sup>2</sup>; 200 × Rs. 40,000 = <strong>Rs. 8,000,000, or 80 lakh</strong>. This simplified area model is not a universal measurement rule.</p>",
                    sources: [
                        { id: "BASI674-00023", set: 3, question: 10 },
                        { id: "BASI674-00064", set: 6, question: 12 },
                        { id: "BASI674-00358", set: 28, question: 8 },
                        { id: "BASI674-00398", set: 31, question: 6 },
                        { id: "BASI674-00400", set: 31, question: 8 },
                        { id: "BASI674-00420", set: 32, question: 13 }
                    ]
                },
                {
                    id: "wall-quantity-methods",
                    title: "Long-wall, short-wall and centre-line quantities",
                    html: "<p>Record dimensions as <strong>length × breadth × height/depth</strong>. For layer width b, long-wall out-to-out length is L<sub>c</sub> + b; short-wall in-to-in length is L<sub>c</sub> − b. Illustrating Model 6 Q11: a 6 m centre-to-centre span and 0.30 m width give 6.30 m or 5.70 m respectively. Recalculate for each footing layer.</p>" +
                        "<p>Centre-line quantity is corrected total centre-line length × cross-sectional area. Group differing wall sections separately; remove junction overlaps, often half the main wall's layer width at a partition end. Uniform circular or symmetric polygonal plans suit this method.</p>",
                    sources: [
                        { id: "BASI674-00063", set: 6, question: 11 },
                        { id: "BASI674-00369", set: 29, question: 6 },
                        { id: "BASI674-00370", set: 29, question: 7 },
                        { id: "BASI674-00380", set: 30, question: 3 },
                        { id: "BASI674-00390", set: 30, question: 12 },
                        { id: "BASI674-00402", set: 31, question: 10 }
                    ]
                },
                {
                    id: "measurement-units",
                    title: "Measurement units follow the complete item",
                    html: "<p>Choose units from the <strong>specified item</strong>, not merely its material name.</p>" +
                        "<table><thead><tr><th scope='col'>Unit</th><th scope='col'>Typical items</th></tr></thead><tbody><tr><td>m</td><td>Pipes; brick edging</td></tr><tr><td>m<sup>2</sup></td><td>DPC, formwork, glass coping, thin stone facing</td></tr><tr><td>m<sup>2</sup>, thickness stated</td><td>Half-brick/hollow-block walls, honeycomb work, brick soling, floor layers</td></tr><tr><td>m<sup>3</sup></td><td>Foundation concrete; substantial masonry</td></tr><tr><td>kg or quintal</td><td>Reinforcement; 1 quintal = 100 kg</td></tr></tbody></table>" +
                        "<p>Source rounding examples use 0.01 m for dimensions and 0.01 m<sup>2</sup> for areas. Volume must have cubic units; precision and payment units remain specification-dependent.</p>",
                    sources: [
                        { id: "BASI674-00357", set: 28, question: 7 },
                        { id: "BASI674-00364", set: 29, question: 1 },
                        { id: "BASI674-00365", set: 29, question: 2 },
                        { id: "BASI674-00374", set: 29, question: 11 },
                        { id: "BASI674-00381", set: 30, question: 4 },
                        { id: "BASI674-00382", set: 1, question: 13 },
                        { id: "BASI674-00383", set: 30, question: 5 },
                        { id: "BASI674-00386", set: 30, question: 8 },
                        { id: "BASI674-00387", set: 30, question: 9 },
                        { id: "BASI674-00394", set: 31, question: 2 },
                        { id: "BASI674-00397", set: 31, question: 5 },
                        { id: "BASI674-00404", set: 31, question: 12 }
                    ]
                },
                {
                    id: "earthwork-payment-and-services",
                    title: "Lead, payment bases and service-item inclusions",
                    html: "<p><strong>Lead</strong> concerns horizontal haul; <strong>lift</strong> concerns vertical movement. Use the contract's measurement basis. A rate per 100 m<sup>3</sup> multiplies Q/100, not Q. Specified shallow surface work may use area instead of volume.</p>",
                    moreHtml: "<p>Separate pipes by placement, diameter and material. Fitting items may include fixing; gullies, siphons and traps may include bedding and connections. Wall cutting, setting out, clearance and excavation steps are included only where the item says so; avoid both omissions and double payment.</p>",
                    sources: [
                        { id: "BASI674-00355", set: 28, question: 5 },
                        { id: "BASI674-00366", set: 29, question: 3 },
                        { id: "BASI674-00372", set: 29, question: 9 },
                        { id: "BASI674-00373", set: 29, question: 10 },
                        { id: "BASI674-00376", set: 29, question: 13 },
                        { id: "BASI674-00378", set: 30, question: 1 },
                        { id: "BASI674-00393", set: 1, question: 14 },
                        { id: "BASI674-00399", set: 31, question: 7 }
                    ]
                },
                {
                    id: "concrete-material-quantities",
                    title: "Concrete dry-volume and cement calculations",
                    html: "<p>Nominal mix ratios divide <strong>dry loose ingredients</strong>, not finished concrete directly. Use the bank's assumptions: dry factor 1.54, cement bulk density 1440 kg/m<sup>3</sup>, and 50 kg bags.</p>" +
                        "<ul><li>Model 6 Q9, 1 m<sup>3</sup> of 1:1.5:3: cement volume = 1.54/5.5 = 0.28 m<sup>3</sup>; bags = 0.28 × 1440/50 = <strong>8.064</strong>.</li><li>Model 28 Q4, 1:2:4: cement volume = 1.54/7 = 0.22 m<sup>3</sup>; bags = <strong>6.336</strong>. The 6.5 option is approximate.</li></ul>" +
                        "<p>For 1:2:4, coarse aggregate = 0.88 × finished volume. Convert area to volume using thickness first; the dry factor is an estimating assumption, not a universal material constant.</p>",
                    sources: [
                        { id: "BASI674-00061", set: 6, question: 9 },
                        { id: "BASI674-00354", set: 28, question: 4 },
                        { id: "BASI674-00421", set: 33, question: 1 },
                        { id: "DESI787-00021", set: 4, question: 25 }
                    ]
                },
                {
                    id: "brickwork-mortar-and-tiles",
                    title: "Brick counts, mortar and effective roof coverage",
                    html: "<p>Model 28 Q3's 190 × 90 × 90 mm bricks, <em>assuming 10 mm joints</em>, form 0.20 × 0.10 × 0.10 m modules: <strong>500 bricks/m<sup>3</sup></strong>. Wet mortar = 1 − 500 × 0.19 × 0.09 × 0.09 = 0.2305 m<sup>3</sup>. An assumed dry factor 1.33 gives 0.3066 m<sup>3</sup>, about 0.30.</p>" +
                        "<p>Handmade-brick quantities depend on actual dimensions and wastage. Roofing-tile counts depend on effective cover after laps, not gross tile area; the bank's 15 tiles/m<sup>2</sup> is product-dependent.</p>",
                    sources: [
                        { id: "BASI674-00098", set: 9, question: 6 },
                        { id: "BASI674-00124", set: 11, question: 5 },
                        { id: "BASI674-00353", set: 28, question: 3 }
                    ]
                },
                {
                    id: "rate-analysis-and-specifications",
                    title: "Resource rates, labour output and specifications",
                    html: "<p><strong>Unit rate</strong> sums resource quantities × prices, then applicable plant, haul, overheads and other stated allowances. Mix, quality, availability and transport affect cost; do not apply an unexplained universal percentage.</p><p>Labour days = quantity/output. Bank assumptions: foundation brickwork 1.25 m<sup>3</sup> per mason-day gives 0.8 mason-day/m<sup>3</sup>; 12 mm plaster at 8 m<sup>2</sup>/day gives 0.125 day/m<sup>2</sup>; 25 mm concrete flooring at 7.5 m<sup>2</sup>/day gives about 0.133 day/m<sup>2</sup>. These are not verified local schedules.</p>",
                    moreHtml: "<p><em>Syllabus supplement:</em> general specifications outline quality and work classes; detailed specifications define materials, proportions, execution, tests, acceptance and measurement. They make pricing comparable and obligations enforceable; the bank tests their effect on rates, not a full specification-writing exercise.</p>",
                    sources: [
                        { id: "BASI674-00065", set: 6, question: 13 },
                        { id: "BASI674-00356", set: 28, question: 6 },
                        { id: "BASI674-00359", set: 28, question: 9 },
                        { id: "BASI674-00388", set: 30, question: 10 },
                        { id: "BASI674-00395", set: 31, question: 3 }
                    ]
                },
                {
                    id: "earthwork-section-volumes",
                    title: "Earthwork sections, area rules and volume formulas",
                    html: "<p>For formation width b, depth h and equal side slopes m horizontal to 1 vertical on level cross-ground, section area <strong>A = bh + mh<sup>2</sup></strong>. Let L separate end areas A<sub>1</sub>, A<sub>2</sub>, with midpoint area A<sub>m</sub>.</p>" +
                        "<table><thead><tr><th scope='col'>Method</th><th scope='col'>Volume</th></tr></thead><tbody><tr><td>Mid-section</td><td>LA<sub>m</sub></td></tr><tr><td>Average end-area</td><td>L(A<sub>1</sub> + A<sub>2</sub>)/2</td></tr><tr><td>Prismoidal</td><td>L(A<sub>1</sub> + 4A<sub>m</sub> + A<sub>2</sub>)/6</td></tr></tbody></table>" +
                        "<p>Average end-area is exact for linearly varying area, not merely parallel sections. Mid-depth is the average only for linear depth variation; its area generally differs from average end-area. Composite Simpson's rule needs equal spacing and even intervals, with weights 1, 4, 2, …, 4, 1 times spacing/3. It integrates quadratic/cubic variation exactly, not every irregular profile.</p>" +
                        "<p>For plan areas, use boundary ordinates instead of section areas: results become m<sup>2</sup>, not m<sup>3</sup>. Model 28 Q13's road box cutting is 1000 × 8 × (0.15 + 0.10) = <strong>2000 m<sup>3</sup></strong>.</p>",
                    sources: [
                        { id: "BASI674-00328", set: 26, question: 5 },
                        { id: "BASI674-00329", set: 26, question: 6 },
                        { id: "BASI674-00330", set: 26, question: 7 },
                        { id: "BASI674-00361", set: 28, question: 11 },
                        { id: "BASI674-00363", set: 28, question: 13 },
                        { id: "BASI674-00367", set: 29, question: 4 },
                        { id: "BASI674-00368", set: 29, question: 5 },
                        { id: "BASI674-00392", set: 31, question: 1 }
                    ]
                },
                {
                    id: "reinforcement-take-off",
                    title: "Cranked bars and binding-wire allowances",
                    html: "<p>For each 45° crank with vertical centreline rise d, extra length above its horizontal projection is <strong>d(√2 − 1)</strong>, about 0.414d. Let L be the horizontal projection of the actual bar path, not simply the beam's effective span. For two such cranks the geometric length is L + 0.828d, conventionally rounded to L + 2 × 0.42d. Derive cutting length from the reinforcement detail, accounting for cover, anchorage and bends without double-counting. Model 6 Q10's 1 kg binding wire per 100 kg reinforcement is an allowance; tie frequency and bar layout determine actual demand.</p>",
                    sources: [
                        { id: "BASI674-00062", set: 6, question: 10 },
                        { id: "BASI674-00396", set: 31, question: 4 }
                    ]
                },
                {
                    id: "valuation-and-depreciation",
                    title: "Price, cost, worth and depreciation",
                    html: "<p><strong>Price</strong> is money paid; <strong>cost</strong> is expenditure to create or replace; <strong>value</strong> is estimated worth for a stated purpose and date. They need not coincide. Valuation considers condition, location, rights, income and market evidence. Model 31 Q14 uses comparable sales for open land, adjusted for plot differences.</p><p><strong>Depreciation</strong> reflects deterioration or obsolescence, not simply a falling sale price. As an illustrative extension of Model 7 Q1, straight-line annual depreciation = (cost − residual)/life. With cost Rs. 900,000, residual Rs. 100,000 and 40 years, it is Rs. 20,000/year; after ten years, book value is Rs. 700,000, <em>not automatically market value</em>. Do not depreciate land mechanically like a building.</p>",
                    moreHtml: "<p><strong>Scrap</strong> concerns recovered demolition materials; <strong>salvage</strong> concerns terminal resale/reuse value. State whether removal costs are deducted. <strong>Speculative value</strong> anticipates resale profit; a <strong>distress sale</strong> occurs under pressure, often below market value. Neither establishes an ordinary market valuation by itself.</p>",
                    sources: [
                        { id: "BASI674-00066", set: 7, question: 1 },
                        { id: "BASI674-00406", set: 31, question: 14 },
                        { id: "BASI674-00412", set: 32, question: 6 },
                        { id: "BASI674-00418", set: 1, question: 15 },
                        { id: "BASI674-00419", set: 32, question: 12 }
                    ]
                }
            ],
            gaps: [
                "Specification purposes/types are in the syllabus, but no dedicated item tests general versus detailed specifications; that distinction here is syllabus supplementation.",
                "No complete priced rate analysis, official local schedule, or numerical depreciation/income-capitalisation exercise is supplied. The depreciation example is illustrative, not original question data."
            ],
            cautions: [
                {
                    "id": "check-basi674-00418",
                    "status": "review",
                    "prompt": "When a property is purchased with an d_{eq} to sell it off at a profit is termed as",
                    "html": "<p><strong>Corrupted wording:</strong> Model 1 Q15 contains an unexplained d_eq fragment. The intended purchase-for-resale-profit concept is speculative value; the fragment is not a valuation formula.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00418",
                            "set": 1,
                            "question": 15
                        }
                    ]
                },
                {
                    "id": "check-basi674-00098",
                    "status": "review",
                    "prompt": "Number of handmade bricks required to make a brick masonry of 1 cu. m",
                    "html": "<p><strong>Unsupported quantity norms:</strong> Model 9 Q6's 560 handmade bricks/m<sup>3</sup> is not established as an official local norm by a supplied schedule. </p>",
                    "sources": [
                        {
                            "id": "BASI674-00098",
                            "set": 9,
                            "question": 6
                        }
                    ]
                },
                {
                    "id": "check-basi674-00124",
                    "status": "review",
                    "prompt": "How many Mangalore tiles are required to cover 1 square metre of roof?",
                    "html": "<p>Model 11 Q5's tile count requires product dimensions and laps.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00124",
                            "set": 11,
                            "question": 5
                        }
                    ]
                },
                {
                    "id": "check-basi674-00353",
                    "status": "review",
                    "prompt": "Calculate the volume (cubic metre) of dry mortar required for 1 cubic metre brick work. Brick size: 190mm x 90 mm x 90mm",
                    "html": "<p><strong>Mortar explanation error:</strong> Model 28 Q3 divides by bare brick volume, filling the whole cubic metre with bricks and leaving no joints. Use joint-inclusive modules and an explicit dry-volume factor.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00353",
                            "set": 28,
                            "question": 3
                        }
                    ]
                },
                {
                    "id": "check-basi674-00358",
                    "status": "review",
                    "prompt": "The plinth area of a building not includes",
                    "html": "<p>Model 28 Q8's porch/shaft treatment needs a named measurement convention. </p><p>Do not infer legal area inclusions or current code limits from these keys.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00358",
                            "set": 28,
                            "question": 8
                        }
                    ]
                },
                {
                    "id": "check-basi674-00366",
                    "status": "review",
                    "prompt": "Pick up the incorrect statement from the following:",
                    "html": "<p><strong>Schedule-dependent statement.</strong> Preliminary-work inclusions and measurement rules depend on the governing schedule and specification. The supplied source does not establish a current Nepal rule.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00366",
                            "set": 29,
                            "question": 3
                        }
                    ]
                },
                {
                    "id": "check-basi674-00369",
                    "status": "review",
                    "prompt": "Referring of given figure, pick up the correct statement from the following: (Figure described: Long wall 6.80m, Short wall 4.80m, center line lengths implied)",
                    "html": "<p><strong>Incomplete geometry:</strong> Model 29 Q6 has no usable original wall diagram; its stated lengths do not establish the claimed quantities. </p>",
                    "sources": [
                        {
                            "id": "BASI674-00369",
                            "set": 29,
                            "question": 6
                        }
                    ]
                },
                {
                    "id": "check-basi674-00372",
                    "status": "review",
                    "prompt": "The following item of earth work is not measured separately.",
                    "html": "<p><strong>Unverified schedule rules:</strong> The 5% revised-estimate trigger, lead bands, preliminary-work inclusions, shallow-excavation cutoffs and rounding rules require their governing authority/specification. </p><p>The extracts do not establish current Nepal schedules or code editions.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00372",
                            "set": 29,
                            "question": 9
                        }
                    ]
                },
                {
                    "id": "check-basi674-00373",
                    "status": "review",
                    "prompt": "The excavation exceeding 1.5 m in width and 10 sq.m in plan area with a depth not exceeding 30 cm, is termed as",
                    "html": "<p><strong>Measurement category needs its specification.</strong> The width, plan-area and shallow-depth thresholds distinguish surface excavation in the bank convention. Use square-metre payment only where the adopted item definition requires it.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00373",
                            "set": 29,
                            "question": 10
                        }
                    ]
                },
                {
                    "id": "check-basi674-00378",
                    "status": "review",
                    "prompt": "Pick up the excavation where measurements are made in square meters for payment:",
                    "html": "<p><strong>Measurement category needs its specification.</strong> The width, plan-area and shallow-depth thresholds distinguish surface excavation in the bank convention. Use square-metre payment only where the adopted item definition requires it.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00378",
                            "set": 30,
                            "question": 1
                        }
                    ]
                },
                {
                    "id": "check-basi674-00380",
                    "status": "review",
                    "prompt": "In long and short wall method of estimation, the length of long wall is the centre to centre distance between the walls and",
                    "html": "<p>Q3's full-width addition equals half-width at each end. </p><p>These are not reliable single-answer distinctions.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00380",
                            "set": 30,
                            "question": 3
                        }
                    ]
                },
                {
                    "id": "check-basi674-00381",
                    "status": "review",
                    "prompt": "The measurement is not made in square meters in case of:",
                    "html": "<p>Q4's unspecified brickwork can also be volumetric. </p><p>These are not reliable single-answer distinctions.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00381",
                            "set": 30,
                            "question": 4
                        }
                    ]
                },
                {
                    "id": "check-basi674-00383",
                    "status": "review",
                    "prompt": "The area is measured correct to the near:",
                    "html": "<p><strong>Rounding precision is specified, not universal.</strong> Apply the relevant measurement rules to area, length and volume separately. The bank does not identify a current governing edition.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00383",
                            "set": 30,
                            "question": 5
                        }
                    ]
                },
                {
                    "id": "check-basi674-00385",
                    "status": "review",
                    "prompt": "Due to change in price level, a revised estimate is prepared if the sanctioned estimate exceeds:",
                    "html": "<p><strong>Unverified schedule rules:</strong> The 5% revised-estimate trigger, lead bands, preliminary-work inclusions, shallow-excavation cutoffs and rounding rules require their governing authority/specification. </p><p>The extracts do not establish current Nepal schedules or code editions.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00385",
                            "set": 30,
                            "question": 7
                        }
                    ]
                },
                {
                    "id": "check-basi674-00386",
                    "status": "review",
                    "prompt": "While preparing a detailed estimate:",
                    "html": "<p><strong>Non-unique choices:</strong> Model 30 Q8 has valid length and area statements but mislabels volume as square metres. </p><p>These are not reliable single-answer distinctions.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00386",
                            "set": 30,
                            "question": 8
                        }
                    ]
                },
                {
                    "id": "check-basi674-00392",
                    "status": "review",
                    "prompt": "A portion of an embankment having a uniform up-gradient 1 in 500 is circular with radius 1000 m of the centre line. It subtends 180° at the centre. If the height of the bank is 1 m at the lower end, and side slopes 2 : 1, the earth work involved.",
                    "html": "<p>Model 31 Q1 omits formation width and ground profile, so 27,500 m<sup>3</sup> cannot be derived reliably.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00392",
                            "set": 31,
                            "question": 1
                        }
                    ]
                },
                {
                    "id": "check-basi674-00394",
                    "status": "review",
                    "prompt": "The concrete work for the following part of the building of specified thickness is measured in square meters:",
                    "html": "<p>Q2 does not establish a universal floor-versus-roof concrete distinction; thickness and the specified payable item control measurement.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00394",
                            "set": 31,
                            "question": 2
                        }
                    ]
                },
                {
                    "id": "check-basi674-00396",
                    "status": "review",
                    "prompt": "The total length of a cranked bar through a distance (d) at 45° in case of a beam of effective length L, is",
                    "html": "<p><strong>Bar-length basis:</strong> Model 31 Q4 calls L the beam's effective length. Effective span alone does not establish a bar's projected or cutting length; cover, anchorage and the actual bar path must come from the detail.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00396",
                            "set": 31,
                            "question": 4
                        }
                    ]
                },
                {
                    "id": "check-basi674-00397",
                    "status": "review",
                    "prompt": "The measurement is made for stone work in square metre in case of",
                    "html": "<p><strong>Item scope matters:</strong> Model 31 Q5 wrongly generalises area measurement to stone columns, lintels and copings. </p>",
                    "sources": [
                        {
                            "id": "BASI674-00397",
                            "set": 31,
                            "question": 5
                        }
                    ]
                },
                {
                    "id": "check-basi674-00398",
                    "status": "review",
                    "prompt": "Carpet area does not include the area of",
                    "html": "<p><strong>Area-definition conflict:</strong> Model 31 Q6/Q8 use inconsistent carpet/floor-area reasoning. </p><p>Do not infer legal area inclusions or current code limits from these keys.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00398",
                            "set": 31,
                            "question": 6
                        }
                    ]
                },
                {
                    "id": "check-basi674-00400",
                    "status": "review",
                    "prompt": "Pick up the incorrect statement from the following.",
                    "html": "<p><strong>Area convention required.</strong> Carpet, floor and plinth area include different spaces. Identify the measurement standard before accepting exclusions or percentage relationships in these statements.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00400",
                            "set": 31,
                            "question": 8
                        }
                    ]
                },
                {
                    "id": "check-basi674-00421",
                    "status": "review",
                    "prompt": "The volume (in m³) of coarse aggregate required to make 100 m² of 1 : 2 : 4 concrete is",
                    "html": "<p><strong>Missing thickness:</strong> Model 33 Q1 specifies 100 m<sup>2</sup> of concrete but asks aggregate volume. Its 88 m<sup>3</sup> key assumes 100 m<sup>3</sup> of finished concrete; area alone is insufficient.</p>",
                    "sources": [
                        {
                            "id": "BASI674-00421",
                            "set": 33,
                            "question": 1
                        }
                    ]
                }
            ]
        }
    });
})();