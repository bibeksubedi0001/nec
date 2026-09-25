window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["capsule-02"] = {
  "title": "NEC Quick Revision Capsule - Soil Mechanics and Foundation Engineering",
  "negativeMarking": 0,
  "chapters": [
    {
      "id": "ACiE0201",
      "name": "Soil properties and laboratory tests",
      "subject": "Soil Mechanics and Foundation Engineering",
      "questions": [
        {
          "id": "CAP4-02-00002",
          "src": "CAP4-02-00002",
          "text": "A moist soil specimen weighs 240 g excluding its container and weighs 192 g after oven drying. What is its gravimetric water content?",
          "options": [
            {
              "key": "a",
              "text": "80%"
            },
            {
              "key": "b",
              "text": "125%"
            },
            {
              "key": "c",
              "text": "25%"
            },
            {
              "key": "d",
              "text": "20%"
            }
          ],
          "answer": "c",
          "explanation": "Water mass is 240 - 192 = 48 g. Gravimetric water content uses dry solids as the denominator: w = 48/192 = 0.25 = 25%. Dividing by moist mass would incorrectly give 20%.<p>Capsule 4th ed., p. 6; topic 2 point 2.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 2",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n2"
            ]
          },
          "topic": "ACiE0201",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00003",
          "src": "CAP4-02-00003",
          "text": "A USCS soil is predominantly sand and contains 20% fines by dry mass. The fines have PI = 15% and plot above the A-line. Which symbol should appear?",
          "options": [
            {
              "key": "a",
              "text": "SM"
            },
            {
              "key": "b",
              "text": "SC"
            },
            {
              "key": "c",
              "text": "SP"
            },
            {
              "key": "d",
              "text": "SW"
            }
          ],
          "answer": "b",
          "explanation": "The soil is coarse-grained and sand-dominated. More than 12% fines requires fines-based classification; PI above 7% and an above-A-line position identify clayey fines, hence SC. The stated values exclude the intermediate-fines and borderline-plasticity dual-symbol cases.<p>Capsule 4th ed., p. 6; topic 2 point 3.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 3",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n3"
            ]
          },
          "topic": "ACiE0201",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00004",
          "src": "CAP4-02-00004",
          "text": "A soil specimen has 40 cm<sup>3</sup> of voids, including 10 cm<sup>3</sup> of air. What is its degree of saturation?",
          "options": [
            {
              "key": "a",
              "text": "75%"
            },
            {
              "key": "b",
              "text": "33.3%"
            },
            {
              "key": "c",
              "text": "25%"
            },
            {
              "key": "d",
              "text": "133.3%"
            }
          ],
          "answer": "a",
          "explanation": "Water occupies the remaining 40 - 10 = 30 cm<sup>3</sup>. Degree of saturation is water volume divided by total void volume, so S = 30/40 = 75%. Air content here is 25%, not the degree of saturation.<p>Capsule 4th ed., p. 6; topic 2 point 4.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 4",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n4"
            ]
          },
          "topic": "ACiE0201",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00005",
          "src": "CAP4-02-00005",
          "text": "An inorganic fine-grained soil has LL = 60% and PI = 20%. Using the USCS A-line PI = 0.73(LL - 20), which classification fits?",
          "options": [
            {
              "key": "a",
              "text": "CH"
            },
            {
              "key": "b",
              "text": "MH"
            },
            {
              "key": "c",
              "text": "CL"
            },
            {
              "key": "d",
              "text": "ML"
            }
          ],
          "answer": "b",
          "explanation": "At LL = 60%, the A-line ordinate is 0.73(60 - 20) = 29.2%. PI = 20% lies below it, indicating silty behavior. LL exceeds 50%, giving H rather than L; the stated inorganic condition excludes OH.<p>Source note: Page 6 point 5 confuses A-line position with plasticity level and organic identification. Below the A-line does not by itself establish low plasticity or organic content.</p><p>Capsule 4th ed., p. 6; topic 2 point 5.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 5",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n5"
            ]
          },
          "topic": "ACiE0201",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00006",
          "src": "CAP4-02-00006",
          "text": "A fine soil plots below the A-line. Which additional evidence is needed before assigning an organic USCS symbol rather than an inorganic silt symbol?",
          "options": [
            {
              "key": "a",
              "text": "A particle-size curve showing all grains passing the fines sieve"
            },
            {
              "key": "b",
              "text": "Organic-identification evidence, including the prescribed drying comparison"
            },
            {
              "key": "c",
              "text": "A natural water content exceeding the measured plastic limit"
            },
            {
              "key": "d",
              "text": "A liquid limit above the L/H boundary without further identification"
            }
          ],
          "answer": "b",
          "explanation": "Below-A-line behavior does not establish organic origin. USCS organic identification includes the effect of oven drying on liquid limit, together with the relevant identification procedure. Liquid limit separately distinguishes L from H.<p>Capsule 4th ed., p. 6; topic 2 point 5.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 5",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n5"
            ]
          },
          "topic": "ACiE0201",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00008",
          "src": "CAP4-02-00008",
          "text": "During drying of a remoulded clay pat, volume first decreases and then remains constant despite further water loss. Which boundary is identified at the start of the constant-volume portion?",
          "options": [
            {
              "key": "a",
              "text": "Plastic limit"
            },
            {
              "key": "b",
              "text": "Optimum moisture content"
            },
            {
              "key": "c",
              "text": "Liquid limit"
            },
            {
              "key": "d",
              "text": "Shrinkage limit"
            }
          ],
          "answer": "d",
          "explanation": "The shrinkage limit is the water content below which further drying produces no further volume reduction in the standard idealization. Water can still leave, with air replacing it; constant volume does not mean the pat is already oven dry.<p>Capsule 4th ed., p. 6; topic 2 point 7.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 7",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n7"
            ]
          },
          "topic": "ACiE0201",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00009",
          "src": "CAP4-02-00009",
          "text": "Dark soil is recovered from a Kathmandu Valley site. Which conclusion is defensible before mineralogical, index and organic-content investigations?",
          "options": [
            {
              "key": "a",
              "text": "A lake-deposit origin establishes negligible compressibility"
            },
            {
              "key": "b",
              "text": "A valley location establishes a uniformly organic soil profile"
            },
            {
              "key": "c",
              "text": "Dark colour alone cannot establish expansive black cotton soil"
            },
            {
              "key": "d",
              "text": "Dark colour establishes an expansive smectite-rich clay layer"
            }
          ],
          "answer": "c",
          "explanation": "Kathmandu Valley includes varied lacustrine and alluvial deposits. Colour alone does not establish expansive mineralogy or an organic classification; site-specific sampling and tests are needed to distinguish these behaviors.<p>Source note: Page 6 point 8 overgeneralizes the entire valley as black cotton and organic soil; audited local notes explicitly reject colour-based identification.</p><p>Capsule 4th ed., p. 6; topic 2 point 8.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 8",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n8"
            ]
          },
          "topic": "ACiE0201",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00010",
          "src": "CAP4-02-00010",
          "text": "A site investigation confirms a soft organic layer beneath a proposed fill. Which risk deserves particular attention even if the layer has a dark colour similar to nearby mineral clay?",
          "options": [
            {
              "key": "a",
              "text": "Negligible settlement because the deposit is already wet"
            },
            {
              "key": "b",
              "text": "Predictable swelling determined solely by its black colour"
            },
            {
              "key": "c",
              "text": "Large compression and continuing secondary settlement"
            },
            {
              "key": "d",
              "text": "Uniformly high bearing resistance from organic bonding"
            }
          ],
          "answer": "c",
          "explanation": "Organic soils can be highly compressible and exhibit substantial creep after primary consolidation. The design concern follows measured organic content and mechanical behavior, not an assumption that dark soil is necessarily expansive black cotton soil.<p>Capsule 4th ed., p. 6; topic 2 point 8.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 8",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n8"
            ]
          },
          "topic": "ACiE0201",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00011",
          "src": "CAP4-02-00011",
          "text": "A dry soil sample has 62% by mass passing the 0.075 mm sieve. Under USCS, which major division and sieve interpretation are appropriate?",
          "options": [
            {
              "key": "a",
              "text": "Fine-grained; the fines are retained on the sieve"
            },
            {
              "key": "b",
              "text": "Coarse-grained; the fines pass the sieve"
            },
            {
              "key": "c",
              "text": "Coarse-grained; the fines are retained on the sieve"
            },
            {
              "key": "d",
              "text": "Fine-grained; the fines pass the sieve"
            }
          ],
          "answer": "d",
          "explanation": "More than half the dry mass passes the No. 200 sieve, so this soil is fine-grained in USCS. The 75 micrometre boundary equals 0.075 mm; the source reverses passing and retained material.<p>Source note: Page 6 point 9: replace &#39;retains&#39; with &#39;passes&#39; for the fines fraction; classify the whole soil by the mass fraction, not a single grain.</p><p>Capsule 4th ed., p. 6; topic 2 point 9.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 9",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n9"
            ]
          },
          "topic": "ACiE0201",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00012",
          "src": "CAP4-02-00012",
          "text": "A grading curve gives D10 = 0.12 mm and D60 = 0.84 mm. What is the coefficient of uniformity?",
          "options": [
            {
              "key": "a",
              "text": "0.72"
            },
            {
              "key": "b",
              "text": "0.143"
            },
            {
              "key": "c",
              "text": "5.88"
            },
            {
              "key": "d",
              "text": "7.0"
            }
          ],
          "answer": "d",
          "explanation": "Cu = D60/D10 = 0.84/0.12 = 7.0, a dimensionless diameter ratio. D10 means 10% finer by mass, not 10% retained; reversing the ratio gives 0.143.<p>Capsule 4th ed., p. 6; topic 2 point 10.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 10",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n10"
            ]
          },
          "topic": "ACiE0201",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00013",
          "src": "CAP4-02-00013",
          "text": "A clean sand has Cu = 7 and Cc = 0.6. How should its grading be classified under USCS?",
          "options": [
            {
              "key": "a",
              "text": "SM, because Cu is greater than four"
            },
            {
              "key": "b",
              "text": "SW, because Cu alone exceeds six"
            },
            {
              "key": "c",
              "text": "SC, because Cc is less than unity"
            },
            {
              "key": "d",
              "text": "SP, because the curvature requirement fails"
            }
          ],
          "answer": "d",
          "explanation": "Well-graded clean sand must satisfy both Cu at least 6 and Cc between 1 and 3. This sample passes the Cu check but fails Cc, so it is SP. C and M describe fines behavior, not a failed grading ratio.<p>Source note: Page 6 point 11 omits the simultaneous Cc requirement; the Cu boundary is conventionally stated as at least 6.</p><p>Capsule 4th ed., p. 6; topic 2 point 11.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 11",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n11"
            ]
          },
          "topic": "ACiE0201",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00014",
          "src": "CAP4-02-00014",
          "text": "For a clean sand, D10 = 0.10 mm, D30 = 0.40 mm and D60 = 0.80 mm. What are Cc and the resulting USCS grading symbol?",
          "options": [
            {
              "key": "a",
              "text": "Cc = 0.5; SP"
            },
            {
              "key": "b",
              "text": "Cc = 2; SW"
            },
            {
              "key": "c",
              "text": "Cc = 5; SP"
            },
            {
              "key": "d",
              "text": "Cc = 4; SW"
            }
          ],
          "answer": "b",
          "explanation": "Cc = D30 squared/(D10 D60) = 0.16/0.08 = 2. Cu = 0.80/0.10 = 8. Both clean-sand grading conditions hold: Cu at least 6 and Cc from 1 to 3, so the symbol is SW.<p>Capsule 4th ed., p. 6; topic 2 point 12.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 12",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n12"
            ]
          },
          "topic": "ACiE0201",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00015",
          "src": "CAP4-02-00015",
          "text": "As water content increases, which sequence describes the consistency states of a remoulded fine-grained soil?",
          "options": [
            {
              "key": "a",
              "text": "Solid, plastic, semi-solid, liquid"
            },
            {
              "key": "b",
              "text": "Semi-solid, solid, liquid, plastic"
            },
            {
              "key": "c",
              "text": "Plastic, semi-solid, liquid, solid"
            },
            {
              "key": "d",
              "text": "Solid, semi-solid, plastic, liquid"
            }
          ],
          "answer": "d",
          "explanation": "Increasing water passes the shrinkage, plastic and liquid limits in that order. These divide four consistency states; the terminology does not mean a phase diagram contains four physical constituents.<p>Capsule 4th ed., p. 6; topic 2 point 13.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 13",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n13"
            ]
          },
          "topic": "ACiE0201",
          "kind": "recall"
        },
        {
          "id": "CAP4-02-00016",
          "src": "CAP4-02-00016",
          "text": "An unsaturated soil is described as plastic on the consistency chart. How many constituents are represented in its conventional phase diagram?",
          "options": [
            {
              "key": "a",
              "text": "Four: solid, semi-solid, plastic and liquid"
            },
            {
              "key": "b",
              "text": "Two: solids and water only"
            },
            {
              "key": "c",
              "text": "Three: solids, water and air"
            },
            {
              "key": "d",
              "text": "Two: solids and air only"
            }
          ],
          "answer": "c",
          "explanation": "An unsaturated soil has solids, pore water and pore air. The four Atterberg consistency states describe mechanical response as water content changes, not four phases coexisting in the soil mass.<p>Source note: Page 6 point 13 is qualified as four consistency states, not four phases.</p><p>Capsule 4th ed., p. 6; topic 2 point 13.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 13",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n13"
            ]
          },
          "topic": "ACiE0201",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00018",
          "src": "CAP4-02-00018",
          "text": "In an IS-style particle-size description using a 0.075 mm sand-fines boundary, how should a 0.06 mm particle be described by size alone?",
          "options": [
            {
              "key": "a",
              "text": "Sand-sized, because it is visible under magnification"
            },
            {
              "key": "b",
              "text": "Organic, because it passes the sand-fines boundary"
            },
            {
              "key": "c",
              "text": "Clay-sized, because all fines have clay-sized grains"
            },
            {
              "key": "d",
              "text": "Silt-sized, without establishing a USCS M symbol"
            }
          ],
          "answer": "d",
          "explanation": "The stated size convention places 0.06 mm below the 0.075 mm sand boundary and within the silt-sized range. A size name is not equivalent to USCS behavioral classification; plasticity and organic identification remain separate.<p>Source note: Page 6 point 15 is classification-system dependent; not every system uses 0.075 mm as the upper silt-size limit.</p><p>Capsule 4th ed., p. 6; topic 2 point 15.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 15",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n15"
            ]
          },
          "topic": "ACiE0201",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00019",
          "src": "CAP4-02-00019",
          "text": "A core cutter of volume 1000 cm<sup>3</sup> recovers 1800 g of moist, stone-free soil. Its water content is 20%. What dry density follows?",
          "options": [
            {
              "key": "a",
              "text": "2.16 g/cm<sup>3</sup>"
            },
            {
              "key": "b",
              "text": "1.44 g/cm<sup>3</sup>"
            },
            {
              "key": "c",
              "text": "1.80 g/cm<sup>3</sup>"
            },
            {
              "key": "d",
              "text": "1.50 g/cm<sup>3</sup>"
            }
          ],
          "answer": "d",
          "explanation": "The cutter gives in-situ bulk density 1800/1000 = 1.80 g/cm<sup>3</sup>. Dry density is 1.80/(1 + 0.20) = 1.50 g/cm<sup>3</sup>. The method is unsuitable where gravel or very hard ground prevents representative undisturbed cutting.<p>Capsule 4th ed., p. 6; topic 2 point 16.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 16",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n16"
            ]
          },
          "topic": "ACiE0201",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00020",
          "src": "CAP4-02-00020",
          "text": "A soil has void ratio 0.81, specific gravity of solids 2.70 and water content 30%. What degree of saturation is implied?",
          "options": [
            {
              "key": "a",
              "text": "81%"
            },
            {
              "key": "b",
              "text": "100%"
            },
            {
              "key": "c",
              "text": "30%"
            },
            {
              "key": "d",
              "text": "90%"
            }
          ],
          "answer": "b",
          "explanation": "The phase identity is Se = wGs with w and S as decimal ratios. Thus S = 0.30(2.70)/0.81 = 1.00. At full saturation e = wGs, not e = w unless Gs happens to equal unity.<p>Source note: Page 6 point 17 has incomplete wording: equality is between e and the product wGs.</p><p>Capsule 4th ed., p. 6; topic 2 point 17.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 17",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n17"
            ]
          },
          "topic": "ACiE0201",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00023",
          "src": "CAP4-02-00023",
          "text": "A USCS sand contains 8% passing the No. 200 sieve. What does that sieve result establish before plasticity testing of the fines?",
          "options": [
            {
              "key": "a",
              "text": "The amount of silt, with no possible clay contribution"
            },
            {
              "key": "b",
              "text": "The amount of clay, with no possible silt contribution"
            },
            {
              "key": "c",
              "text": "The amount of fines, but not whether they are silty or clayey"
            },
            {
              "key": "d",
              "text": "The plasticity index of the sand's entire coarse fraction"
            }
          ],
          "answer": "c",
          "explanation": "The 75 micrometre sieve separates the coarse fraction from fines. It does not separate silt behavior from clay behavior. For a sand with this intermediate fines content, grading and fines plasticity inform the applicable dual symbol.<p>Capsule 4th ed., p. 7; topic 2 point 20.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 20",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n20"
            ]
          },
          "topic": "ACiE0201",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00024",
          "src": "CAP4-02-00024",
          "text": "A density bottle test contains 50 g of dry soil solids. The solids displace 20 g of water at the test temperature. What is the specific gravity of the soil solids?",
          "options": [
            {
              "key": "a",
              "text": "3.50"
            },
            {
              "key": "b",
              "text": "0.40"
            },
            {
              "key": "c",
              "text": "2.50"
            },
            {
              "key": "d",
              "text": "1.50"
            }
          ],
          "answer": "c",
          "explanation": "Specific gravity compares the mass of solids with an equal volume of water. Gs = 50/20 = 2.50. Entrapped air must be removed; the bottle test determines particle specific gravity, not the bulk density of a porous soil mass.<p>Capsule 4th ed., p. 7; topic 2 point 21.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 21",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n21"
            ]
          },
          "topic": "ACiE0201",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00029",
          "src": "CAP4-02-00029",
          "text": "A low-permeability specimen produces too little discharge for convenient constant-head collection. Which laboratory approach uses a measurable decline in a small standpipe?",
          "options": [
            {
              "key": "a",
              "text": "Constant-head permeability test"
            },
            {
              "key": "b",
              "text": "Unconfined compression test"
            },
            {
              "key": "c",
              "text": "Falling-head permeability test"
            },
            {
              "key": "d",
              "text": "Hydrometer sedimentation test"
            }
          ],
          "answer": "c",
          "explanation": "A small standpipe converts a small water volume into an observable head change. Integrating Darcy's law gives k = aL ln(h1/h2)/(At). Saturation, leakage control and suitable equipment are essential, particularly for very low-permeability clays.<p>Capsule 4th ed., p. 7; topic 2 point 26.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 26",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n26"
            ]
          },
          "topic": "ACiE0201",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00030",
          "src": "CAP4-02-00030",
          "text": "A constant-head test collects 120 cm<sup>3</sup> in 60 s through a sand specimen of length 10 cm and area 20 cm<sup>2</sup>, under 30 cm head loss. What is k?",
          "options": [
            {
              "key": "a",
              "text": "3.0000 cm/s"
            },
            {
              "key": "b",
              "text": "0.0333 cm/s"
            },
            {
              "key": "c",
              "text": "0.3000 cm/s"
            },
            {
              "key": "d",
              "text": "0.0033 cm/s"
            }
          ],
          "answer": "b",
          "explanation": "For steady saturated laminar flow, k = VL/(Aht) = 120(10)/(20 times 30 times 60) = 0.0333 cm/s. Coarse soils usually provide conveniently measurable discharge for this method; volume must first be related to collection time.<p>Capsule 4th ed., p. 7; topic 2 point 27.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 27",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n27"
            ]
          },
          "topic": "ACiE0201",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00109",
          "src": "CAP4-02-00109",
          "text": "Water persists as a thin film held close to soil-particle surfaces after free gravitational drainage. Which older term most closely describes that surface-associated water?",
          "options": [
            {
              "key": "a",
              "text": "Pellicular or adsorbed-film water"
            },
            {
              "key": "b",
              "text": "Bulk water carrying no surface attraction"
            },
            {
              "key": "c",
              "text": "Artesian water defined only by a confined aquifer"
            },
            {
              "key": "d",
              "text": "Freely draining gravitational water"
            }
          ],
          "answer": "a",
          "explanation": "Pellicular water refers to surface-associated films retained by molecular attraction. Its resistance to gravity drainage differs from free gravitational water. Terminology varies, so the described physical retention mechanism is more useful than the label alone.<p>Source note: Page 9 point 99 overextends the term to all gravity-retained water; capillary retention is also important.</p><p>Capsule 4th ed., p. 9; topic 2 point 99.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 99",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n99"
            ]
          },
          "topic": "ACiE0201",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00110",
          "src": "CAP4-02-00110",
          "text": "After gravitational drainage, soil still contains water in small pores as well as films near particle surfaces. Why is it inaccurate to describe all remaining water as adsorbed film water?",
          "options": [
            {
              "key": "a",
              "text": "Gravity drainage necessarily empties every small pore"
            },
            {
              "key": "b",
              "text": "Capillary menisci also retain water against gravity"
            },
            {
              "key": "c",
              "text": "Any water left after drainage must be chemically bound in minerals"
            },
            {
              "key": "d",
              "text": "Only positive artesian pressure can retain pore water"
            }
          ],
          "answer": "b",
          "explanation": "Surface tension and curved air-water interfaces can retain capillary water in pores, while adsorption retains films near mineral surfaces. Both resist gravity drainage, but they are different mechanisms and should not be collapsed into one pellicular-water category.<p>Capsule 4th ed., p. 9; topic 2 point 99.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 99",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n99"
            ]
          },
          "topic": "ACiE0201",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00135",
          "src": "CAP4-02-00135",
          "text": "A soil contains 70% sand, 5% gravel and 25% fines. Its inorganic fines have LL = 40% and PI = 20%, clearly above the A-line. What is the USCS group symbol?",
          "options": [
            {
              "key": "a",
              "text": "SC"
            },
            {
              "key": "b",
              "text": "CL"
            },
            {
              "key": "c",
              "text": "GC"
            },
            {
              "key": "d",
              "text": "SM"
            }
          ],
          "answer": "a",
          "explanation": "The coarse fraction exceeds half the mass and is predominantly sand, so S applies. Fines exceed the clean-sand range and are clayey: the A-line at LL = 40 is 0.73(40 - 20) = 14.6, below PI = 20. Thus SC applies, not CL for the entire soil.<p>Capsule 4th ed., p. 9; topic 2 point 121.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 121",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n121"
            ]
          },
          "topic": "ACiE0201",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00150",
          "src": "CAP4-02-00150",
          "text": "A fully saturated soil has gravimetric water content 24% and grain specific gravity 2.75. What is its void ratio?",
          "options": [
            {
              "key": "a",
              "text": "66"
            },
            {
              "key": "b",
              "text": "0.24"
            },
            {
              "key": "c",
              "text": "0.66"
            },
            {
              "key": "d",
              "text": "0.0873"
            }
          ],
          "answer": "c",
          "explanation": "The phase identity is Se = wGs. At full saturation S = 1, hence e = 0.24(2.75) = 0.66. Water content must be used as a decimal, not the number 24. This source is the second, separately retained entry numbered 132.<p>Capsule 4th ed., p. 10; topic 2 point 132.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 132",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n132-occ2"
            ]
          },
          "topic": "ACiE0201",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00170",
          "src": "CAP4-02-00170",
          "text": "Following the rolling and kneading procedure of IS 2720 Part 5:1985, a soil thread reaches the crumbling endpoint after having been rolled to 3 mm diameter. Which water-content boundary is being determined?",
          "options": [
            {
              "key": "a",
              "text": "Shrinkage limit between solid and semi-solid behavior"
            },
            {
              "key": "b",
              "text": "Liquid limit between plastic and liquid behavior"
            },
            {
              "key": "c",
              "text": "Optimum moisture content at maximum compacted dry density"
            },
            {
              "key": "d",
              "text": "Plastic limit between semi-solid and plastic behavior"
            }
          ],
          "answer": "d",
          "explanation": "The water content at the prescribed crumbling endpoint gives the plastic limit, the semi-solid/plastic boundary. Clause 7.3 permits crumbling above 3 mm if the thread had just been rolled to 3 mm; the operator must not artificially force failure at exactly that diameter.<p>Source note: Page 10 point 150 is qualified using archived IS 2720 Part 5:1985 clause 7.3, including its endpoint exception. Other standards can use different nominal diameters; no current adoption claim is made.</p><p>Capsule 4th ed., p. 10; topic 2 point 150.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 150",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n150"
            ]
          },
          "topic": "ACiE0201",
          "kind": "application"
        }
      ]
    },
    {
      "id": "ACiE0202",
      "name": "Stresses on soil and seepage",
      "subject": "Soil Mechanics and Foundation Engineering",
      "questions": [
        {
          "id": "CAP4-02-00025",
          "src": "CAP4-02-00025",
          "text": "A laboratory follows IS 2720 Part 7:1980 light compaction with a 310 mm rammer drop. Which nominal rammer mass belongs to that method?",
          "options": [
            {
              "key": "a",
              "text": "4.9 kg"
            },
            {
              "key": "b",
              "text": "63.5 kg"
            },
            {
              "key": "c",
              "text": "2.6 kg"
            },
            {
              "key": "d",
              "text": "2.5 kg"
            }
          ],
          "answer": "c",
          "explanation": "The named IS light-compaction method uses a nominal 2.6 kg rammer. The approximately 2.5 kg ASTM standard-effort rammer and 4.9 kg IS heavy-compaction rammer belong to other protocols; method names and masses should not be mixed.<p>Source note: Page 7 point 22 is retained for IS 2720 Part 7:1980 clauses 1.1 and 5.1.2, checked in archived standard text. This is not a universal Standard Proctor mass or a claim of current Nepal adoption.</p><p>Capsule 4th ed., p. 7; topic 2 point 22.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 22",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n22"
            ]
          },
          "topic": "ACiE0202",
          "kind": "recall"
        },
        {
          "id": "CAP4-02-00026",
          "src": "CAP4-02-00026",
          "text": "A square-element flow net in homogeneous isotropic soil has 3 flow channels and 12 potential drops. With k = 0.0002 m/s and head loss 6 m, what is discharge per metre width?",
          "options": [
            {
              "key": "a",
              "text": "0.0048 m<sup>3</sup>/s per m"
            },
            {
              "key": "b",
              "text": "0.0012 m<sup>3</sup>/s per m"
            },
            {
              "key": "c",
              "text": "0.0001 m<sup>3</sup>/s per m"
            },
            {
              "key": "d",
              "text": "0.0003 m<sup>3</sup>/s per m"
            }
          ],
          "answer": "d",
          "explanation": "Each drop is H/Nd and parallel flow channels add discharge. Thus q = kH(Nf/Nd) = 0.0002(6)(3/12) = 0.0003 m<sup>2</sup>/s, equivalently m<sup>3</sup>/s per metre width. Reversing the channel/drop ratio overestimates flow.<p>Source note: Page 7 point 23 has damaged fraction order; restored from Darcy flow through square elements.</p><p>Capsule 4th ed., p. 7; topic 2 point 23.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 23",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n23"
            ]
          },
          "topic": "ACiE0202",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00027",
          "src": "CAP4-02-00027",
          "text": "Field dry unit weight is 18.0 kN/m<sup>3</sup> and the specified laboratory maximum dry unit weight is 19.2 kN/m<sup>3</sup>. What relative compaction should be reported?",
          "options": [
            {
              "key": "a",
              "text": "6.25%"
            },
            {
              "key": "b",
              "text": "1.20%"
            },
            {
              "key": "c",
              "text": "106.67%"
            },
            {
              "key": "d",
              "text": "93.75%"
            }
          ],
          "answer": "d",
          "explanation": "Relative compaction = field dry unit weight/reference maximum dry unit weight times 100 = 18.0/19.2 times 100 = 93.75%. It is not relative density, which uses maximum and minimum void ratios of granular soil.<p>Capsule 4th ed., p. 7; topic 2 point 24.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 24",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n24"
            ]
          },
          "topic": "ACiE0202",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00028",
          "src": "CAP4-02-00028",
          "text": "A cohesive fill needs kneading action through a controlled thin lift. Which roller is the most appropriate initial trial among these alternatives?",
          "options": [
            {
              "key": "a",
              "text": "Sheepsfoot or padfoot roller"
            },
            {
              "key": "b",
              "text": "Light vibratory plate suited to clean sand"
            },
            {
              "key": "c",
              "text": "Grid roller intended chiefly for coarse rock fill"
            },
            {
              "key": "d",
              "text": "Smooth steel roller without vibration"
            }
          ],
          "answer": "a",
          "explanation": "Sheepsfoot and padfoot rollers concentrate pressure and provide kneading suited to cohesive soils. Moisture conditioning, lift thickness and a trial section still determine effectiveness; the roller name alone does not establish achieved dry density.<p>Source note: Page 7 point 25: &#39;Ship footed&#39; is a transcription/spelling defect for sheepsfoot.</p><p>Capsule 4th ed., p. 7; topic 2 point 25.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 25",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n25"
            ]
          },
          "topic": "ACiE0202",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00032",
          "src": "CAP4-02-00032",
          "text": "An oedometer increment reduces void ratio from 0.80 to 0.76 as effective stress rises by 100 kPa. What is the coefficient of volume compressibility for that increment?",
          "options": [
            {
              "key": "a",
              "text": "0.000720 kPa<sup>-1</sup>"
            },
            {
              "key": "b",
              "text": "0.000400 kPa<sup>-1</sup>"
            },
            {
              "key": "c",
              "text": "0.022222 kPa<sup>-1</sup>"
            },
            {
              "key": "d",
              "text": "0.000222 kPa<sup>-1</sup>"
            }
          ],
          "answer": "d",
          "explanation": "av = 0.04/100 = 0.000400 kPa<sup>-1</sup> measures void-ratio decrease per stress increase. Volume strain divides that decrease by 1 + e0, so mv = av/1.80 = 0.000222 kPa<sup>-1</sup>.<p>Source note: Page 7 point 29 confuses av with mv: strain/stress defines volume compressibility, whereas av uses void-ratio change.</p><p>Capsule 4th ed., p. 7; topic 2 point 29.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 29",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n29"
            ]
          },
          "topic": "ACiE0202",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00033",
          "src": "CAP4-02-00033",
          "text": "Upward seepage through a saturated, cohesionless soil column increases until the seepage force balances its submerged weight. Which condition marks incipient boiling in the ideal model?",
          "options": [
            {
              "key": "a",
              "text": "The hydraulic head becomes uniform along the column"
            },
            {
              "key": "b",
              "text": "Vertical effective stress reduces to zero"
            },
            {
              "key": "c",
              "text": "Pore-water pressure reduces to zero"
            },
            {
              "key": "d",
              "text": "Total vertical stress reduces to zero"
            }
          ],
          "answer": "b",
          "explanation": "Upward seepage subtracts from the submerged-weight contribution to effective stress. At i = gamma'/gamma_w, the grain-contact support vanishes in the unconfined idealization. Total stress and pore pressure need not vanish, and downward seepage increases effective stress.<p>Capsule 4th ed., p. 7; topic 2 point 30.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 30",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n30"
            ]
          },
          "topic": "ACiE0202",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00037",
          "src": "CAP4-02-00037",
          "text": "In a flow net drawn in the physical plane for homogeneous isotropic soil, how does a flow line intersect an equipotential line?",
          "options": [
            {
              "key": "a",
              "text": "At the soil's friction angle"
            },
            {
              "key": "b",
              "text": "At 45 degrees"
            },
            {
              "key": "c",
              "text": "At a right angle"
            },
            {
              "key": "d",
              "text": "Tangentially at every point"
            }
          ],
          "answer": "c",
          "explanation": "An equipotential has constant hydraulic head. The head gradient is normal to it, and isotropic hydraulic conductivity makes discharge parallel to that gradient. Physical-plane orthogonality is not generally valid for anisotropic conductivity without a coordinate transformation.<p>Capsule 4th ed., p. 7; topic 2 point 34.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 34",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n34"
            ]
          },
          "topic": "ACiE0202",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00038",
          "src": "CAP4-02-00038",
          "text": "Moist unsaturated fill is rolled rapidly at nearly unchanged water content and becomes denser. Which phase-volume change primarily explains the compaction?",
          "options": [
            {
              "key": "a",
              "text": "Drainage of all pore water"
            },
            {
              "key": "b",
              "text": "Reduction of air-filled void volume"
            },
            {
              "key": "c",
              "text": "Increase in total void volume"
            },
            {
              "key": "d",
              "text": "Compression of solid mineral grains"
            }
          ],
          "answer": "b",
          "explanation": "Ordinary compaction rearranges particles and primarily expels air while water content remains approximately constant. This differs from primary consolidation of saturated soil, where drainage of pore water permits volume reduction under sustained loading.<p>Capsule 4th ed., p. 7; topic 2 point 35.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 35",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n35"
            ]
          },
          "topic": "ACiE0202",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00039",
          "src": "CAP4-02-00039",
          "text": "A roller trial at fixed soil moisture and lift thickness records dry density after successive passes. Why is a plateau useful when selecting the production pass count?",
          "options": [
            {
              "key": "a",
              "text": "The plateau proves roller mass has no effect on compaction"
            },
            {
              "key": "b",
              "text": "Further passes give little added density under those trial conditions"
            },
            {
              "key": "c",
              "text": "Each later pass must increase density by the same fixed amount"
            },
            {
              "key": "d",
              "text": "The plateau permits any travel speed without further checking"
            }
          ],
          "answer": "b",
          "explanation": "Passes usually give diminishing density gains. A trial identifies an effective combination of roller load, speed and repetitions for the soil and lift; overrolling may be wasteful or damaging. Changing roller mass or speed changes that calibrated combination.<p>Capsule 4th ed., p. 7; topic 2 point 36.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 36",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n36"
            ]
          },
          "topic": "ACiE0202",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00040",
          "src": "CAP4-02-00040",
          "text": "A contractor replaces a trial-approved roller with a heavier machine and doubles its travel speed while retaining the pass count. What is needed before accepting equivalent compaction?",
          "options": [
            {
              "key": "a",
              "text": "A new trial and field dry-density checks for the changed operation"
            },
            {
              "key": "b",
              "text": "Acceptance based on doubled speed regardless of contact action"
            },
            {
              "key": "c",
              "text": "Acceptance based on unchanged pass count regardless of density"
            },
            {
              "key": "d",
              "text": "Acceptance based on increased machine weight regardless of speed"
            }
          ],
          "answer": "a",
          "explanation": "Roller weight, speed and pass count all affect stress application and compactive action. A heavier roller does not automatically compensate for faster travel; achieved density at controlled moisture and lift thickness is the discriminating evidence.<p>Capsule 4th ed., p. 7; topic 2 point 36.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 36",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n36"
            ]
          },
          "topic": "ACiE0202",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00045",
          "src": "CAP4-02-00045",
          "text": "Hydrostatic ponding above an already saturated level ground surface increases by 2 m. At a fixed point in the soil, with no seepage or other load change and gamma_w = 10 kN/m<sup>3</sup>, what happens to vertical effective stress?",
          "options": [
            {
              "key": "a",
              "text": "It increases by 40 kPa"
            },
            {
              "key": "b",
              "text": "It is unchanged"
            },
            {
              "key": "c",
              "text": "It decreases by 20 kPa"
            },
            {
              "key": "d",
              "text": "It increases by 20 kPa"
            }
          ],
          "answer": "b",
          "explanation": "The additional water adds 10 times 2 = 20 kPa to total stress and also 20 kPa to hydrostatic pore pressure. Since sigma' = sigma - u, the changes cancel. A water-table rise within previously unsaturated soil is a different problem.<p>Capsule 4th ed., p. 7; topic 2 point 41.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 41",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n41"
            ]
          },
          "topic": "ACiE0202",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00049",
          "src": "CAP4-02-00049",
          "text": "A saturated cohesionless soil has Gs = 2.68 and void ratio e = 0.68. Neglect surcharge and confinement effects. What upward hydraulic gradient produces the ideal quick condition?",
          "options": [
            {
              "key": "a",
              "text": "2.47"
            },
            {
              "key": "b",
              "text": "1.60"
            },
            {
              "key": "c",
              "text": "0.63"
            },
            {
              "key": "d",
              "text": "1.00"
            }
          ],
          "answer": "d",
          "explanation": "At the quick condition the upward seepage force equals submerged weight. Hence ic = (Gs - 1)/(1 + e) = (2.68 - 1)/(1 + 0.68) = 1.68/1.68 = 1.00. Gs is dimensionless; the numerator subtracts 1, not the numerical value of water unit weight.<p>Source note: Page 7 point 45 prints/extracts &#39;2.68 - 10&#39;; dimensional reasoning requires 2.68 - 1.</p><p>Capsule 4th ed., p. 7; topic 2 point 45.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 45",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n45"
            ]
          },
          "topic": "ACiE0202",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00050",
          "src": "CAP4-02-00050",
          "text": "An earthwork specification calls for mechanically densifying each lift before placing the next. Which operation directly addresses that requirement?",
          "options": [
            {
              "key": "a",
              "text": "Rolling or tamping at a controlled moisture content"
            },
            {
              "key": "b",
              "text": "Measuring grain specific gravity without changing the fill"
            },
            {
              "key": "c",
              "text": "Waiting only for drainage under the fill's self-weight"
            },
            {
              "key": "d",
              "text": "Increasing water content without applying mechanical effort"
            }
          ],
          "answer": "a",
          "explanation": "Compaction is mechanical densification, commonly achieved by rolling, tamping or vibration appropriate to the soil. Consolidation under sustained stress is a separate drainage-dependent process, so waiting alone does not satisfy a prescribed compaction operation.<p>Capsule 4th ed., p. 7; topic 2 point 46.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 46",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n46"
            ]
          },
          "topic": "ACiE0202",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00055",
          "src": "CAP4-02-00055",
          "text": "A point is 5 m below the water surface in hydrostatic saturated soil. With gamma_w = 10 kN/m<sup>3</sup>, what is its gauge pore-water pressure?",
          "options": [
            {
              "key": "a",
              "text": "0 kPa"
            },
            {
              "key": "b",
              "text": "100 kPa"
            },
            {
              "key": "c",
              "text": "50 kPa"
            },
            {
              "key": "d",
              "text": "5 kPa"
            }
          ],
          "answer": "c",
          "explanation": "Hydrostatic gauge pore pressure is u = gamma_w h = 10 times 5 = 50 kPa. It is pressure in the water phase, not the stress carried by grain contacts; effective stress requires subtracting u from total normal stress.<p>Capsule 4th ed., p. 7; topic 2 point 51.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 51",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n51"
            ]
          },
          "topic": "ACiE0202",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00056",
          "src": "CAP4-02-00056",
          "text": "A level soil profile has a 2 m upper layer with total unit weight 18 kN/m<sup>3</sup> over a 3 m layer with total unit weight 20 kN/m<sup>3</sup>. What vertical total geostatic stress acts at 5 m depth, without surcharge?",
          "options": [
            {
              "key": "a",
              "text": "90 kPa"
            },
            {
              "key": "b",
              "text": "96 kPa"
            },
            {
              "key": "c",
              "text": "38 kPa"
            },
            {
              "key": "d",
              "text": "100 kPa"
            }
          ],
          "answer": "b",
          "explanation": "Geostatic stress is produced by self-weight. Sum each layer's unit weight times thickness: sigma_v = 18(2) + 20(3) = 96 kPa. This is total stress; a groundwater profile would additionally be needed to obtain effective stress.<p>Capsule 4th ed., p. 7; topic 2 point 52.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 52",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n52"
            ]
          },
          "topic": "ACiE0202",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00063",
          "src": "CAP4-02-00063",
          "text": "Two unconfined saturated cohesionless soils have the same grain specific gravity but different void ratios. Which has the lower ideal critical upward hydraulic gradient?",
          "options": [
            {
              "key": "a",
              "text": "The soil with the larger void ratio"
            },
            {
              "key": "b",
              "text": "The one with greater permeability, regardless of void ratio"
            },
            {
              "key": "c",
              "text": "The soil with the smaller void ratio"
            },
            {
              "key": "d",
              "text": "They must have equal critical gradients"
            }
          ],
          "answer": "a",
          "explanation": "The quick-condition balance gives ic = (Gs - 1)/(1 + e). At fixed Gs, increasing e reduces submerged weight per unit volume and therefore reduces ic. Permeability controls discharge and timing but does not enter this ideal static threshold.<p>Source note: Page 8 point 58&#39;s G - 1 numerator is separated from its fraction in the extraction; the restored expression follows force equilibrium.</p><p>Capsule 4th ed., p. 8; topic 2 point 58.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 58",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n58"
            ]
          },
          "topic": "ACiE0202",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00072",
          "src": "CAP4-02-00072",
          "text": "A saturated soil has total normal stress 150 kPa and pore-water pressure 60 kPa. Which pair gives neutral stress and effective normal stress?",
          "options": [
            {
              "key": "a",
              "text": "60 kPa and 210 kPa"
            },
            {
              "key": "b",
              "text": "150 kPa and 90 kPa"
            },
            {
              "key": "c",
              "text": "90 kPa and 60 kPa"
            },
            {
              "key": "d",
              "text": "60 kPa and 90 kPa"
            }
          ],
          "answer": "d",
          "explanation": "Neutral stress is the older term for pore-water pressure, u = 60 kPa. Effective normal stress is sigma' = 150 - 60 = 90 kPa. Hydrostatic pore pressure acts normally in all directions and does not by itself provide soil shear resistance.<p>Capsule 4th ed., p. 8; topic 2 point 66.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 66",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n66"
            ]
          },
          "topic": "ACiE0202",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00080",
          "src": "CAP4-02-00080",
          "text": "A trial section of clean granular fill requires densification by particle rearrangement. Which roller action is normally most effective?",
          "options": [
            {
              "key": "a",
              "text": "Kneading alone from a light sheepsfoot roller"
            },
            {
              "key": "b",
              "text": "Water spraying alone without mechanical energy"
            },
            {
              "key": "c",
              "text": "Static finishing alone with a very light roller"
            },
            {
              "key": "d",
              "text": "Vibration from a suitable smooth-drum roller"
            }
          ],
          "answer": "d",
          "explanation": "Vibration promotes rearrangement and denser packing of suitable coarse-grained soils. Frequency, amplitude, moisture and lift thickness must be matched to the material; sheepsfoot kneading is chiefly associated with cohesive-fill compaction.<p>Capsule 4th ed., p. 8; topic 2 point 74.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 74",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n74"
            ]
          },
          "topic": "ACiE0202",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00084",
          "src": "CAP4-02-00084",
          "text": "A compaction plan copies a 150 mm lift thickness from a revision note for every soil and machine. What is the defensible engineering response?",
          "options": [
            {
              "key": "a",
              "text": "Select lift thickness solely from the absence of surface roller tracks"
            },
            {
              "key": "b",
              "text": "Accept the lift when its surface density alone meets the target"
            },
            {
              "key": "c",
              "text": "Define the thickness basis and verify full-depth density in a trial"
            },
            {
              "key": "d",
              "text": "Scale lift thickness directly with roller mass without another trial"
            }
          ],
          "answer": "c",
          "explanation": "Effective lift thickness depends on soil, moisture, equipment and the required density through the layer. Loose thickness differs from compacted thickness. A quoted 150 mm value can be a project requirement, but is not a universal physical limit.<p>Source note: Page 8 point 78 omits material, equipment, specification and the loose-versus-compacted distinction.</p><p>Capsule 4th ed., p. 8; topic 2 point 78.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 78",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n78"
            ]
          },
          "topic": "ACiE0202",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00139",
          "src": "CAP4-02-00139",
          "text": "The same soil is compacted under standard and higher modified laboratory efforts. What general shift of the dry-density versus water-content peak is expected?",
          "options": [
            {
              "key": "a",
              "text": "Lower maximum dry density and lower optimum moisture content"
            },
            {
              "key": "b",
              "text": "Higher maximum dry density and lower optimum moisture content"
            },
            {
              "key": "c",
              "text": "Lower maximum dry density and higher optimum moisture content"
            },
            {
              "key": "d",
              "text": "Higher maximum dry density and higher optimum moisture content"
            }
          ],
          "answer": "b",
          "explanation": "Greater compactive effort generally enables denser packing at a lower optimum moisture content, moving the peak upward and leftward. This is the usual trend for the same soil, not a fixed numerical change or an assurance that every field roller reproduces the laboratory curve.<p>Capsule 4th ed., p. 9; topic 2 point 125.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 125",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n125"
            ]
          },
          "topic": "ACiE0202",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00140",
          "src": "CAP4-02-00140",
          "text": "Two compaction protocols use the same mould volume and blows per layer. The first uses 2.6 kg falling 0.31 m on 3 layers; the second uses 4.9 kg falling 0.45 m on 5 layers. Approximately what is their second-to-first energy ratio?",
          "options": [
            {
              "key": "a",
              "text": "4.56"
            },
            {
              "key": "b",
              "text": "7.60"
            },
            {
              "key": "c",
              "text": "2.74"
            },
            {
              "key": "d",
              "text": "1.88"
            }
          ],
          "answer": "a",
          "explanation": "Energy per mould is proportional to rammer mass times fall times blows per layer times number of layers. The common factors cancel: ratio = 4.9(0.45)(5)/[2.6(0.31)(3)] = 4.56. Comparing rammer masses alone misses drop height and layer count.<p>Capsule 4th ed., p. 9; topic 2 point 125.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 125",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n125"
            ]
          },
          "topic": "ACiE0202",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00141",
          "src": "CAP4-02-00141",
          "text": "Two soils have the same field dry unit weight of 18 kN/m<sup>3</sup>, but their specified laboratory maxima are 20 and 19 kN/m<sup>3</sup>. Which conclusion follows?",
          "options": [
            {
              "key": "a",
              "text": "Relative compaction can be obtained without any laboratory reference"
            },
            {
              "key": "b",
              "text": "Their relative compactions must match because field densities match"
            },
            {
              "key": "c",
              "text": "Their relative compactions differ because each soil has its own reference maximum"
            },
            {
              "key": "d",
              "text": "The soil with the higher maximum automatically has greater relative compaction"
            }
          ],
          "answer": "c",
          "explanation": "Relative compaction is field dry unit weight divided by the chosen laboratory maximum for that soil and method. The ratios are 18/20 = 90% and 18/19 = 94.74%. Soil type matters through its reference curve, and the selected effort must also be specified.<p>Capsule 4th ed., p. 10; topic 2 point 126.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 126",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n126"
            ]
          },
          "topic": "ACiE0202",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00142",
          "src": "CAP4-02-00142",
          "text": "A saturated coarse gravel test develops inertial flow so discharge is no longer proportional to hydraulic gradient. Why is constant-k Darcy flow no longer adequate?",
          "options": [
            {
              "key": "a",
              "text": "Saturation alone does not guarantee the laminar linear-flow regime"
            },
            {
              "key": "b",
              "text": "Darcy's linear law requires turbulent rather than viscous flow"
            },
            {
              "key": "c",
              "text": "Hydraulic gradient must be replaced by gravimetric water content"
            },
            {
              "key": "d",
              "text": "Steady conditions guarantee a constant conductivity at any flow velocity"
            }
          ],
          "answer": "a",
          "explanation": "The elementary relation q = kiA assumes a linear viscous-flow regime. Saturation and steady conditions alone do not exclude inertial effects at high velocities. Conductivity may also vary in unsaturated flow, so its generalized treatment needs additional constitutive information.<p>Source note: Page 10 point 127 omits the central laminar/linear-flow condition and overstates saturation/steadiness as universal restrictions.</p><p>Capsule 4th ed., p. 10; topic 2 point 127.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 127",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n127"
            ]
          },
          "topic": "ACiE0202",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00143",
          "src": "CAP4-02-00143",
          "text": "For steady saturated Darcy flow, k = 0.0003 m/s, hydraulic gradient i = 0.4 and gross area A = 2 m<sup>2</sup>. What discharge follows?",
          "options": [
            {
              "key": "a",
              "text": "0.00024 m<sup>3</sup>/s"
            },
            {
              "key": "b",
              "text": "0.00012 m<sup>3</sup>/s"
            },
            {
              "key": "c",
              "text": "0.00150 m<sup>3</sup>/s"
            },
            {
              "key": "d",
              "text": "0.00060 m<sup>3</sup>/s"
            }
          ],
          "answer": "a",
          "explanation": "Darcy discharge is q = kiA = 0.0003(0.4)(2) = 0.00024 m<sup>3</sup>/s. The quantity ki is discharge velocity based on gross cross-section; actual mean pore-water velocity additionally depends on the effective flow porosity.<p>Capsule 4th ed., p. 10; topic 2 point 127.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 127",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n127"
            ]
          },
          "topic": "ACiE0202",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00168",
          "src": "CAP4-02-00168",
          "text": "Total hydraulic head decreases from 12 m to 8 m over a 20 m seepage path. What is the average hydraulic gradient along that path?",
          "options": [
            {
              "key": "a",
              "text": "0.20"
            },
            {
              "key": "b",
              "text": "0.60"
            },
            {
              "key": "c",
              "text": "0.40"
            },
            {
              "key": "d",
              "text": "5.00"
            }
          ],
          "answer": "a",
          "explanation": "Hydraulic gradient is total head loss divided by flow-path length: i = (12 - 8)/20 = 0.20. Use head difference, including elevation and pressure contributions as appropriate, rather than either absolute head or merely vertical soil thickness.<p>Capsule 4th ed., p. 10; topic 2 point 148.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 148",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n148"
            ]
          },
          "topic": "ACiE0202",
          "kind": "calculation"
        },
        {
          "id": "CAP4-03-00076",
          "src": "CAP4-03-00076",
          "text": "In a two-dimensional seepage flow net, what is the strip bounded by two adjacent flow lines called?",
          "options": [
            {
              "key": "a",
              "text": "A flow channel"
            },
            {
              "key": "b",
              "text": "An equipotential drop"
            },
            {
              "key": "c",
              "text": "A pressure contour"
            },
            {
              "key": "d",
              "text": "A phreatic surface"
            }
          ],
          "answer": "a",
          "explanation": "Adjacent flow lines bound a flow channel, across whose sides no flow passes in the ideal net. Adjacent equipotential lines instead define a head drop; their intersections with flow lines form the net's curvilinear cells.<p>Capsule 4th ed., p. 12; topic 3 point 74.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 12; topic 3 point 74",
            "pages": [
              12
            ],
            "points": [
              "capsule-t03-p012-n74"
            ]
          },
          "topic": "ACiE0202",
          "kind": "application"
        }
      ]
    },
    {
      "id": "ACiE0203",
      "name": "Shear strength of soil and stability of slopes",
      "subject": "Soil Mechanics and Foundation Engineering",
      "questions": [
        {
          "id": "CAP4-02-00041",
          "src": "CAP4-02-00041",
          "text": "For a cohesionless infinite slope, compare dry conditions with full saturation and steady seepage parallel to the slope. If gamma_sat = 20 and gamma_w = 10 kN/m<sup>3</sup>, what is F_seepage/F_dry at unchanged friction and slope angles?",
          "options": [
            {
              "key": "a",
              "text": "1.00"
            },
            {
              "key": "b",
              "text": "0.50"
            },
            {
              "key": "c",
              "text": "0.25"
            },
            {
              "key": "d",
              "text": "2.00"
            }
          ],
          "answer": "b",
          "explanation": "Fdry = tan(phi)/tan(beta). For parallel seepage with the water surface at the slope surface, Fseepage = (gamma'/gamma_sat)Fdry. Thus the ratio is (20 - 10)/20 = 0.50. It is not a universal factor for cohesive slopes or arbitrary water levels.<p>Source note: Page 7 point 37 is valid only with the stated cohesionless infinite-slope and seepage assumptions and appropriate unit-weight ratio.</p><p>Capsule 4th ed., p. 7; topic 2 point 37.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 37",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n37"
            ]
          },
          "topic": "ACiE0203",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00042",
          "src": "CAP4-02-00042",
          "text": "Rain infiltrates an initially unsaturated clay slope and reduces matric suction without changing its geometry. Which mechanism can reduce its shear resistance?",
          "options": [
            {
              "key": "a",
              "text": "A necessary increase in the intrinsic friction angle"
            },
            {
              "key": "b",
              "text": "An increase in effective confinement from rising pore pressure"
            },
            {
              "key": "c",
              "text": "An increase in preconsolidation stress caused by wetting alone"
            },
            {
              "key": "d",
              "text": "Loss of suction-related apparent strength"
            }
          ],
          "answer": "d",
          "explanation": "Wetting can remove suction that contributed to unsaturated strength; subsequent positive pore pressure can further reduce effective stress. The response depends on drainage, fabric and stress history, so wetting is not a universal fixed reduction of intrinsic cohesion.<p>Source note: Page 7 point 38 is qualified to a physically defined wetting mechanism.</p><p>Capsule 4th ed., p. 7; topic 2 point 38.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 38",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n38"
            ]
          },
          "topic": "ACiE0203",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00047",
          "src": "CAP4-02-00047",
          "text": "A strength-reduction calculation uses c = 30 kPa and a factor of safety of 1.5. What is mobilized cohesion cm, and what does it represent?",
          "options": [
            {
              "key": "a",
              "text": "45 kPa; the mobilized cohesive contribution"
            },
            {
              "key": "b",
              "text": "20 kPa; the complete frictional shear resistance"
            },
            {
              "key": "c",
              "text": "30 kPa; the effective normal stress"
            },
            {
              "key": "d",
              "text": "20 kPa; the mobilized cohesive contribution"
            }
          ],
          "answer": "d",
          "explanation": "cm = c/F = 30/1.5 = 20 kPa. In a frictional soil the mobilized resistance also includes sigma' tan(phi_m), with tan(phi_m) = tan(phi)/F under uniform reduction. Thus cm is not generally the complete applied shear stress.<p>Source note: Page 7 point 43 misidentifies cm; it denotes mobilized cohesion in the slope-stability context, consistent with point 120.</p><p>Capsule 4th ed., p. 7; topic 2 point 43.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 43",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n43"
            ]
          },
          "topic": "ACiE0203",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00051",
          "src": "CAP4-02-00051",
          "text": "Several consolidated-undrained triaxial tests record cell pressure, deviator stress and pore pressure at failure. Can they provide an effective-stress failure envelope?",
          "options": [
            {
              "key": "a",
              "text": "Yes; use total principal stresses without any pore-pressure adjustment"
            },
            {
              "key": "b",
              "text": "Yes; subtract measured pore pressure from total principal stresses"
            },
            {
              "key": "c",
              "text": "No; undrained shearing always prevents effective-stress interpretation"
            },
            {
              "key": "d",
              "text": "No; pore pressure can only be measured in completely drained soil"
            }
          ],
          "answer": "b",
          "explanation": "Measured u gives sigma1' = sigma1 - u and sigma3' = sigma3 - u for each CU test. Effective failure circles can then define c' and phi'. Without pore-pressure data, a total-stress test generally cannot provide that conversion.<p>Source note: Page 7 point 47 is false as a blanket statement: CU tests with pore-pressure measurement provide effective parameters.</p><p>Capsule 4th ed., p. 7; topic 2 point 47.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 47",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n47"
            ]
          },
          "topic": "ACiE0203",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00052",
          "src": "CAP4-02-00052",
          "text": "Two in-plane compressive principal stresses are 180 and 60 kPa. What are the centre and radius of their Mohr circle?",
          "options": [
            {
              "key": "a",
              "text": "Centre 60 kPa; radius 120 kPa"
            },
            {
              "key": "b",
              "text": "Centre 240 kPa; radius 60 kPa"
            },
            {
              "key": "c",
              "text": "Centre 120 kPa; radius 120 kPa"
            },
            {
              "key": "d",
              "text": "Centre 120 kPa; radius 60 kPa"
            }
          ],
          "answer": "d",
          "explanation": "The centre is the mean normal stress, (180 + 60)/2 = 120 kPa. The radius is half the difference, (180 - 60)/2 = 60 kPa, which is the maximum shear for that in-plane stress pair. Absolute three-dimensional maximum shear requires all principal stresses.<p>Capsule 4th ed., p. 7; topic 2 point 48.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 48",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n48"
            ]
          },
          "topic": "ACiE0203",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00057",
          "src": "CAP4-02-00057",
          "text": "Normal and shear tractions on all orientations through a point in a two-dimensional stress field are plotted on sigma-tau axes. Which construction represents their locus?",
          "options": [
            {
              "key": "a",
              "text": "Consolidation time curve"
            },
            {
              "key": "b",
              "text": "Compaction curve"
            },
            {
              "key": "c",
              "text": "Coulomb straight-line failure envelope"
            },
            {
              "key": "d",
              "text": "Mohr circle"
            }
          ],
          "answer": "d",
          "explanation": "The stress-transformation equations describe a circle centred at the mean of the two normal stresses. A Mohr-Coulomb envelope is instead a material failure criterion; it is not the locus of transformed tractions for one fixed stress state.<p>Capsule 4th ed., p. 7; topic 2 point 53.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 53",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n53"
            ]
          },
          "topic": "ACiE0203",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00060",
          "src": "CAP4-02-00060",
          "text": "A self-supporting saturated clay specimen fails at an unconfined compressive stress of 90 kPa. Under the undrained phi_u = 0 idealization, what shear strength is inferred?",
          "options": [
            {
              "key": "a",
              "text": "90 kPa"
            },
            {
              "key": "b",
              "text": "45 kPa"
            },
            {
              "key": "c",
              "text": "180 kPa"
            },
            {
              "key": "d",
              "text": "30 kPa"
            }
          ],
          "answer": "b",
          "explanation": "Unconfined compression has zero lateral total stress. The failure Mohr-circle radius is (qu - 0)/2, so su = 90/2 = 45 kPa for saturated phi_u = 0 clay. This conversion is not generally applicable to frictional or unsaturated specimens.<p>Source note: Page 7 point 55&#39;s &#39;Unconfined Confined&#39; wording is corrected to unconfined compression.</p><p>Capsule 4th ed., p. 7; topic 2 point 55.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 55",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n55"
            ]
          },
          "topic": "ACiE0203",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00062",
          "src": "CAP4-02-00062",
          "text": "Using compression-positive stresses, sigma_x = 120 kPa, sigma_y = 40 kPa and tau_xy = 30 kPa. What is the major in-plane principal stress?",
          "options": [
            {
              "key": "a",
              "text": "110 kPa"
            },
            {
              "key": "b",
              "text": "160 kPa"
            },
            {
              "key": "c",
              "text": "130 kPa"
            },
            {
              "key": "d",
              "text": "50 kPa"
            }
          ],
          "answer": "c",
          "explanation": "The mean is (120 + 40)/2 = 80 kPa. Radius = sqrt[((120 - 40)/2)^2 + 30^2] = sqrt(1600 + 900) = 50 kPa. The major principal stress is mean plus radius, 130 kPa; the minor is 30 kPa.<p>Source note: Page 7 point 57 loses the square root and fraction layout in extraction; the stress-transformation identity restores them.</p><p>Capsule 4th ed., pp. 7, 8; topic 2 point 57.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 7, 8; topic 2 point 57",
            "pages": [
              7,
              8
            ],
            "points": [
              "capsule-t02-p007-n57"
            ]
          },
          "topic": "ACiE0203",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00065",
          "src": "CAP4-02-00065",
          "text": "During an undrained constant-volume compression test, initial area is 1000 mm<sup>2</sup> and axial compressive strain is 20%. What corrected area is used for axial stress?",
          "options": [
            {
              "key": "a",
              "text": "1250 mm<sup>2</sup>"
            },
            {
              "key": "b",
              "text": "800 mm<sup>2</sup>"
            },
            {
              "key": "c",
              "text": "1200 mm<sup>2</sup>"
            },
            {
              "key": "d",
              "text": "1000 mm<sup>2</sup>"
            }
          ],
          "answer": "a",
          "explanation": "Constant volume gives A0 L0 = Ac L0(1 - epsilon), hence Ac = A0/(1 - epsilon) = 1000/0.80 = 1250 mm<sup>2</sup>. Dividing load by the original area would overestimate the stress as the specimen shortens and widens.<p>Capsule 4th ed., p. 8; topic 2 point 60.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 60",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n60"
            ]
          },
          "topic": "ACiE0203",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00067",
          "src": "CAP4-02-00067",
          "text": "A fully embedded vane has diameter D = 0.10 m and height H = 0.10 m. Corrected failure torque is 20 pi N m. Assuming uniform shear on its cylindrical side and both ends, what undrained strength follows?",
          "options": [
            {
              "key": "a",
              "text": "30 kPa"
            },
            {
              "key": "b",
              "text": "15 kPa"
            },
            {
              "key": "c",
              "text": "40 kPa"
            },
            {
              "key": "d",
              "text": "60 kPa"
            }
          ],
          "answer": "a",
          "explanation": "The side and two ends give T = su pi D^2(H/2 + D/6). Here the geometric factor is pi/1500 m<sup>3</sup>; su = 20 pi divided by (pi/1500) = 30000 Pa = 30 kPa. Omitting the end resistance gives an erroneous 40 kPa.<p>Source note: Page 8 point 62&#39;s formula is restored by integrating side and end resisting moments; rod-friction correction and full embedment are stated.</p><p>Capsule 4th ed., p. 8; topic 2 point 62.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 62",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n62"
            ]
          },
          "topic": "ACiE0203",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00068",
          "src": "CAP4-02-00068",
          "text": "For a fully embedded vane with H = D and uniform undrained strength, what fraction of ideal failure torque comes from the two horizontal ends together?",
          "options": [
            {
              "key": "a",
              "text": "One third"
            },
            {
              "key": "b",
              "text": "Three quarters"
            },
            {
              "key": "c",
              "text": "One half"
            },
            {
              "key": "d",
              "text": "One quarter"
            }
          ],
          "answer": "d",
          "explanation": "Side torque is su pi D^3/2, while both ends contribute su pi D^3/6. Their sum is 2su pi D^3/3, so the end fraction is (1/6)/(2/3) = 1/4. Treating all torque as side resistance overestimates the inferred strength.<p>Capsule 4th ed., p. 8; topic 2 point 62.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 62",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n62"
            ]
          },
          "topic": "ACiE0203",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00070",
          "src": "CAP4-02-00070",
          "text": "On a conventional Mohr diagram, which coordinate describes a point's distance horizontally from the shear-stress axis?",
          "options": [
            {
              "key": "a",
              "text": "The physical rotation angle of the plane"
            },
            {
              "key": "b",
              "text": "Normal stress on the represented plane"
            },
            {
              "key": "c",
              "text": "The hydraulic pressure head at the plane"
            },
            {
              "key": "d",
              "text": "Shear stress on the represented plane"
            }
          ],
          "answer": "b",
          "explanation": "The horizontal coordinate is normal stress sigma and the vertical coordinate is shear stress tau. Each point corresponds to tractions on an orientation; an angle is represented geometrically around the circle, not as either stress-axis coordinate.<p>Capsule 4th ed., p. 8; topic 2 point 64.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 64",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n64"
            ]
          },
          "topic": "ACiE0203",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00071",
          "src": "CAP4-02-00071",
          "text": "For comparable saturated clay specimens represented by a total-stress phi_u = 0 envelope with cu = 25 kPa, what failure shear stress does that envelope predict at total normal stress 100 kPa?",
          "options": [
            {
              "key": "a",
              "text": "100 kPa"
            },
            {
              "key": "b",
              "text": "25 kPa"
            },
            {
              "key": "c",
              "text": "75 kPa"
            },
            {
              "key": "d",
              "text": "125 kPa"
            }
          ],
          "answer": "b",
          "explanation": "The chosen total-stress model gives tau_f = cu + sigma tan(phi_u) = 25 + 100 tan(0) = 25 kPa. This is an undrained idealization for the specified soil state, not a claim that real clay strength never changes with consolidation history.<p>Capsule 4th ed., p. 8; topic 2 point 65.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 65",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n65"
            ]
          },
          "topic": "ACiE0203",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00073",
          "src": "CAP4-02-00073",
          "text": "A very soft saturated clay cannot stand as an unsupported specimen after extraction. Which test is the most suitable quick in-situ strength option among those listed?",
          "options": [
            {
              "key": "a",
              "text": "Consolidated-drained triaxial testing of a prepared cylinder"
            },
            {
              "key": "b",
              "text": "Field vane shear test"
            },
            {
              "key": "c",
              "text": "Unconfined compression on an unsupported intact cylinder"
            },
            {
              "key": "d",
              "text": "Drained direct shear after extracting and trimming the specimen"
            }
          ],
          "answer": "b",
          "explanation": "A field vane can measure the undrained strength of suitable very soft fine-grained soil without requiring a self-supporting cylinder. Unconfined compression is useful only when a representative specimen can stand unsupported; saturation alone does not make it universally preferred.<p>Source note: Page 8 point 67&#39;s blanket recommendation is corrected using specimen condition and test suitability.</p><p>Capsule 4th ed., p. 8; topic 2 point 67.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 67",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n67"
            ]
          },
          "topic": "ACiE0203",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00074",
          "src": "CAP4-02-00074",
          "text": "Two physical plane orientations differ by 25 degrees in a two-dimensional stress transformation. What is the magnitude of the corresponding central angle on Mohr's circle?",
          "options": [
            {
              "key": "a",
              "text": "25 degrees"
            },
            {
              "key": "b",
              "text": "50 degrees"
            },
            {
              "key": "c",
              "text": "12.5 degrees"
            },
            {
              "key": "d",
              "text": "100 degrees"
            }
          ],
          "answer": "b",
          "explanation": "Stress-transformation terms contain cos(2 theta) and sin(2 theta), so the circle angle has magnitude twice the physical rotation: 2 times 25 = 50 degrees. Its direction depends on the adopted shear-sign and plane-orientation convention.<p>Capsule 4th ed., p. 8; topic 2 point 68.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 68",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n68"
            ]
          },
          "topic": "ACiE0203",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00077",
          "src": "CAP4-02-00077",
          "text": "Which combination best describes the simplified Bishop method for a trial circular slip surface?",
          "options": [
            {
              "key": "a",
              "text": "Only overall horizontal-force equilibrium with no slice equilibrium"
            },
            {
              "key": "b",
              "text": "Overall moment equilibrium with all interslice normal forces neglected"
            },
            {
              "key": "c",
              "text": "Overall moment equilibrium with interslice shear forces neglected"
            },
            {
              "key": "d",
              "text": "A prescribed planar slip with no rotational moment calculation"
            }
          ],
          "answer": "c",
          "explanation": "Simplified Bishop uses vertical equilibrium of slices and overall moment equilibrium about the circular centre, neglecting interslice shear while retaining interslice normal-force effects. It does not satisfy every force-equilibrium equation as a fully rigorous method would.<p>Capsule 4th ed., p. 8; topic 2 point 71.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 71",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n71"
            ]
          },
          "topic": "ACiE0203",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00079",
          "src": "CAP4-02-00079",
          "text": "A drained failure point has effective normal stress 100 kPa and shear stress 70 kPa. If tan(phi') = 0.5, what cohesion intercept follows from a linear Mohr-Coulomb envelope?",
          "options": [
            {
              "key": "a",
              "text": "20 kPa"
            },
            {
              "key": "b",
              "text": "120 kPa"
            },
            {
              "key": "c",
              "text": "35 kPa"
            },
            {
              "key": "d",
              "text": "50 kPa"
            }
          ],
          "answer": "a",
          "explanation": "Rearrange tau_f = c' + sigma_n' tan(phi'): c' = 70 - 100(0.5) = 20 kPa. Subtract the frictional part using effective normal stress; adding it would not recover the intercept of the failure line.<p>Capsule 4th ed., p. 8; topic 2 point 73.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 73",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n73"
            ]
          },
          "topic": "ACiE0203",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00081",
          "src": "CAP4-02-00081",
          "text": "A dry cohesionless infinite slope is steepened while its friction angle remains unchanged. How does its factor of safety change in the simple planar model?",
          "options": [
            {
              "key": "a",
              "text": "It decreases because tan(beta) increases"
            },
            {
              "key": "b",
              "text": "It becomes independent of friction angle"
            },
            {
              "key": "c",
              "text": "It increases because tan(beta) increases"
            },
            {
              "key": "d",
              "text": "It stays fixed because cohesion remains zero"
            }
          ],
          "answer": "a",
          "explanation": "The dry cohesionless expression is F = tan(phi')/tan(beta). Steepening increases the denominator and therefore reduces F. Flattening can improve this idealized stability, although real slopes also require groundwater and geological assessment.<p>Capsule 4th ed., p. 8; topic 2 point 75.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 75",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n75"
            ]
          },
          "topic": "ACiE0203",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00082",
          "src": "CAP4-02-00082",
          "text": "A saturated triaxial specimen is allowed to consolidate under cell pressure and is then sheared slowly with drainage open so excess pore pressure remains negligible. Which test is this?",
          "options": [
            {
              "key": "a",
              "text": "Unconsolidated undrained"
            },
            {
              "key": "b",
              "text": "Consolidated drained"
            },
            {
              "key": "c",
              "text": "Unconfined compression"
            },
            {
              "key": "d",
              "text": "Consolidated undrained"
            }
          ],
          "answer": "b",
          "explanation": "CD permits drainage during consolidation and shearing. A suitably slow strain rate must make drainage effective, not merely keep a valve open. Drained does not mean dry, nor does it require hydrostatic or imposed back pressure to be zero.<p>Capsule 4th ed., p. 8; topic 2 point 76.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 76",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n76"
            ]
          },
          "topic": "ACiE0203",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00083",
          "src": "CAP4-02-00083",
          "text": "Equal isotropic pore pressure is subtracted from both principal total stresses of a saturated soil. How do the corresponding Mohr circle's centre and radius change?",
          "options": [
            {
              "key": "a",
              "text": "The centre is unchanged; the radius decreases by u"
            },
            {
              "key": "b",
              "text": "The centre shifts left by u; the radius is unchanged"
            },
            {
              "key": "c",
              "text": "The centre and radius both decrease by u"
            },
            {
              "key": "d",
              "text": "The centre shifts right by u; the radius doubles"
            }
          ],
          "answer": "b",
          "explanation": "Subtracting u lowers the mean normal stress by u. The principal-stress difference is unchanged because (sigma1 - u) - (sigma3 - u) = sigma1 - sigma3, so the radius and maximum shear stress for the pair remain unchanged.<p>Capsule 4th ed., p. 8; topic 2 point 77.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 77",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n77"
            ]
          },
          "topic": "ACiE0203",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00094",
          "src": "CAP4-02-00094",
          "text": "The maximum and minimum principal stresses at a soil point are 220 and 80 kPa. What is the maximum shear stress?",
          "options": [
            {
              "key": "a",
              "text": "300 kPa"
            },
            {
              "key": "b",
              "text": "150 kPa"
            },
            {
              "key": "c",
              "text": "70 kPa"
            },
            {
              "key": "d",
              "text": "140 kPa"
            }
          ],
          "answer": "c",
          "explanation": "Maximum shear is half the greatest principal-stress difference: (220 - 80)/2 = 70 kPa. The 140 kPa difference is the diameter of the corresponding Mohr circle, while 150 kPa is its centre coordinate.<p>Source note: Point 86&#39;s point-level extract omits the divisor 2, but the full page 8 text includes it; this is an extraction defect, not evidence of a printed formula error.</p><p>Capsule 4th ed., p. 8; topic 2 point 86.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 86",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n86"
            ]
          },
          "topic": "ACiE0203",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00100",
          "src": "CAP4-02-00100",
          "text": "A drained shear-strength envelope has slope 0.577 on axes with equal normal-stress and shear-stress scales. Approximately what material parameter does this imply?",
          "options": [
            {
              "key": "a",
              "text": "Internal friction angle of 30 degrees"
            },
            {
              "key": "b",
              "text": "Cohesion intercept of 0.577 kPa"
            },
            {
              "key": "c",
              "text": "At-rest earth-pressure coefficient of 0.577"
            },
            {
              "key": "d",
              "text": "Dilation angle of 60 degrees"
            }
          ],
          "answer": "a",
          "explanation": "The Mohr-Coulomb form is tau_f = c' + sigma_n' tan(phi'), so envelope slope equals tan(phi'). arctan(0.577) is approximately 30 degrees. This friction angle is not automatically the dilation angle or an earth-pressure coefficient.<p>Capsule 4th ed., p. 9; topic 2 point 91.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 91",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n91"
            ]
          },
          "topic": "ACiE0203",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00128",
          "src": "CAP4-02-00128",
          "text": "Two linear Mohr-Coulomb envelopes have the same intercept, but one is steeper on equally scaled sigma'-tau axes. What differs directly between their strength parameters?",
          "options": [
            {
              "key": "a",
              "text": "The flatter envelope necessarily has a larger friction angle"
            },
            {
              "key": "b",
              "text": "Their friction angles are equal because the intercepts match"
            },
            {
              "key": "c",
              "text": "The steeper envelope has a larger friction angle"
            },
            {
              "key": "d",
              "text": "The steeper envelope necessarily has greater cohesion"
            }
          ],
          "answer": "c",
          "explanation": "The intercept is c' and the slope is tan(phi'). Equal intercepts therefore mean equal cohesion parameters, while a larger slope means a larger friction angle. This graphical envelope inclination is not the spatial inclination of a soil failure plane.<p>Capsule 4th ed., p. 9; topic 2 point 115.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 115",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n115"
            ]
          },
          "topic": "ACiE0203",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00131",
          "src": "CAP4-02-00131",
          "text": "For a nondegenerate two-dimensional stress state, which pair of plane orientations relative to a principal plane carries the two opposite signs of maximum in-plane shear?",
          "options": [
            {
              "key": "a",
              "text": "45 degrees and 135 degrees"
            },
            {
              "key": "b",
              "text": "45 degrees and 90 degrees"
            },
            {
              "key": "c",
              "text": "0 degrees and 90 degrees"
            },
            {
              "key": "d",
              "text": "30 degrees and 60 degrees"
            }
          ],
          "answer": "a",
          "explanation": "Maximum in-plane shear occurs 90 degrees around Mohr's circle from a principal-stress point, equivalent to 45 degrees physically. The conjugate plane is 90 degrees farther physically, at 135 degrees, and carries the opposite shear sign under a consistent convention.<p>Capsule 4th ed., p. 9; topic 2 point 118.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 118",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n118"
            ]
          },
          "topic": "ACiE0203",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00134",
          "src": "CAP4-02-00134",
          "text": "A Taylor stability chart applicable to a specified purely cohesive slope gives Sn = 0.10. Soil cohesion is 36 kPa, unit weight 18 kN/m<sup>3</sup> and slope height 10 m. Using Sn = cm/(gamma H), what cohesion safety factor follows?",
          "options": [
            {
              "key": "a",
              "text": "0.5"
            },
            {
              "key": "b",
              "text": "1.0"
            },
            {
              "key": "c",
              "text": "3.6"
            },
            {
              "key": "d",
              "text": "2.0"
            }
          ],
          "answer": "d",
          "explanation": "The required mobilized cohesion is cm = Sn gamma H = 0.10(18)(10) = 18 kPa. The cohesion factor is c/cm = 36/18 = 2.0. Sn is dimensionless and chart conditions must match slope geometry, drainage and the assumed strength model.<p>Capsule 4th ed., p. 9; topic 2 point 120.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 120",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n120"
            ]
          },
          "topic": "ACiE0203",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00138",
          "src": "CAP4-02-00138",
          "text": "A Bishop-type null-indicator arrangement is connected to a saturated specimen during undrained triaxial shearing. What is its intended measurement principle?",
          "options": [
            {
              "key": "a",
              "text": "Infer pore pressure by equating it to the measured cell pressure"
            },
            {
              "key": "b",
              "text": "Balance line pressure while returning the null indicator to its datum"
            },
            {
              "key": "c",
              "text": "Read pore pressure directly from the axial load proving ring"
            },
            {
              "key": "d",
              "text": "Allow continuous specimen drainage into a graduated volume burette"
            }
          ],
          "answer": "b",
          "explanation": "The pore-pressure line is balanced so that the measurement requires negligible water movement from the specimen. This supports undrained effective-stress interpretation. Bishop pore-pressure apparatus is not the same application as Bishop's slope-stability method.<p>Capsule 4th ed., p. 9; topic 2 point 124.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 124",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n124"
            ]
          },
          "topic": "ACiE0203",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00149",
          "src": "CAP4-02-00149",
          "text": "At failure in a direct shear test, shear force is 180 N and the corrected overlap area is 30 cm<sup>2</sup>. What nominal failure shear stress is measured?",
          "options": [
            {
              "key": "a",
              "text": "600 kPa"
            },
            {
              "key": "b",
              "text": "6 kPa"
            },
            {
              "key": "c",
              "text": "60 kPa"
            },
            {
              "key": "d",
              "text": "0.6 kPa"
            }
          ],
          "answer": "c",
          "explanation": "The overlap area is 30 times 0.0001 = 0.003 m<sup>2</sup>. Nominal shear stress is 180/0.003 = 60000 Pa = 60 kPa. The box imposes a failure plane and stresses are nonuniform, so this is an average measured stress on that plane.<p>Capsule 4th ed., p. 10; topic 2 point 132.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 132",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n132"
            ]
          },
          "topic": "ACiE0203",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00151",
          "src": "CAP4-02-00151",
          "text": "A saturated cohesive specimen is loaded rapidly in unconfined compression so drainage during loading is negligible. Which stress interpretation is appropriate for the usual qu/2 strength estimate?",
          "options": [
            {
              "key": "a",
              "text": "Hydrostatic pore pressure equal to the axial failure stress"
            },
            {
              "key": "b",
              "text": "Undrained total-stress strength under a phi_u = 0 idealization"
            },
            {
              "key": "c",
              "text": "Drained effective-stress friction angle from axial load alone"
            },
            {
              "key": "d",
              "text": "At-rest lateral stress from a zero-lateral-strain test"
            }
          ],
          "answer": "b",
          "explanation": "The rapid test with negligible drainage gives an undrained total-stress strength for a suitable saturated cohesive specimen. With zero lateral total stress and phi_u = 0, su = qu/2. It does not directly determine effective c' and phi' without further information.<p>Capsule 4th ed., p. 10; topic 2 point 133.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 133",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n133"
            ]
          },
          "topic": "ACiE0203",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00162",
          "src": "CAP4-02-00162",
          "text": "An ordinary direct shear box is used to infer the weakest possible shear plane in a natural soil containing oriented fabric. What limitation must be recognized?",
          "options": [
            {
              "key": "a",
              "text": "The box fixes the tested orientation, which may not be the weakest"
            },
            {
              "key": "b",
              "text": "The peak stress is independent of the specimen's fabric orientation"
            },
            {
              "key": "c",
              "text": "The box split always aligns with the natural major principal plane"
            },
            {
              "key": "d",
              "text": "Overlap-area correction removes all effects of fabric orientation"
            }
          ],
          "answer": "a",
          "explanation": "Relative movement of the box halves imposes a plane, which may not be the weakest orientation of a natural soil. Edge stresses are nonuniform and routine pore-pressure control is limited. Test orientation and drainage must therefore match the intended interpretation.<p>Source note: Page 10 point 143 reads &#39;Direct shear failure is not generally used for trees.&#39; The final noun and intended comparison cannot be resolved from all extracted text. This is an explicitly substituted, defensible direct-shear limitation; parent must review the exact original point, and no interpretation about trees or root strength is claimed.</p><p>Capsule 4th ed., p. 10; topic 2 point 143.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 143",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n143"
            ]
          },
          "topic": "ACiE0203",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00169",
          "src": "CAP4-02-00169",
          "text": "Clean cohesionless soil is represented by c' = 0 and phi' = 30 degrees. If effective normal stress on a potential plane is 120 kPa, what drained shear strength follows?",
          "options": [
            {
              "key": "a",
              "text": "69.3 kPa"
            },
            {
              "key": "b",
              "text": "120.0 kPa"
            },
            {
              "key": "c",
              "text": "0 kPa"
            },
            {
              "key": "d",
              "text": "207.8 kPa"
            }
          ],
          "answer": "a",
          "explanation": "For the specified cohesionless model, tau_f = sigma_n' tan(phi') = 120 tan(30 degrees) = 69.3 kPa. Zero cohesion does not mean zero shear strength when effective confinement exists; pore pressure matters through its reduction of effective normal stress.<p>Capsule 4th ed., p. 10; topic 2 point 149.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 149",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n149"
            ]
          },
          "topic": "ACiE0203",
          "kind": "calculation"
        }
      ]
    },
    {
      "id": "ACiE0204",
      "name": "Soil exploration, earth pressure and retaining structures",
      "subject": "Soil Mechanics and Foundation Engineering",
      "questions": [
        {
          "id": "CAP4-01-00131",
          "src": "CAP4-01-00131",
          "text": "A standard Dutch-cone tip has an included apex angle of 60 degrees. What is the angle between its axis and one straight generator in an axial section?",
          "options": [
            {
              "key": "a",
              "text": "45 degrees"
            },
            {
              "key": "b",
              "text": "120 degrees"
            },
            {
              "key": "c",
              "text": "30 degrees"
            },
            {
              "key": "d",
              "text": "60 degrees"
            }
          ],
          "answer": "c",
          "explanation": "The axis bisects the cone's included apex angle, giving a semi-angle of 60/2 = 30 degrees. Confusing the full angle with the half-angle changes the cone geometry; this is a cone-penetration tip, not an SPT split spoon.<p>Capsule 4th ed., p. 5; topic 1 point 124.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 5; topic 1 point 124",
            "pages": [
              5
            ],
            "points": [
              "capsule-t01-p005-n124"
            ]
          },
          "topic": "ACiE0204",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00017",
          "src": "CAP4-02-00017",
          "text": "An electrical-resistivity survey suggests a conductive layer beneath a site. What is the appropriate next interpretation?",
          "options": [
            {
              "key": "a",
              "text": "Correlate the indirect anomaly with boreholes and groundwater chemistry"
            },
            {
              "key": "b",
              "text": "Adopt a bearing pressure directly from the measured electrode spacing"
            },
            {
              "key": "c",
              "text": "Classify the layer as clay solely from its low electrical resistance"
            },
            {
              "key": "d",
              "text": "Treat the inferred layer boundary as an undisturbed recovered sample"
            }
          ],
          "answer": "a",
          "explanation": "Electrical resistivity is an indirect geophysical exploration method. Conductivity can reflect clay, saturation or dissolved salts, so the ground model needs geological and intrusive corroboration rather than a unique soil identification from resistivity alone.<p>Capsule 4th ed., p. 6; topic 2 point 14.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 14",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n14"
            ]
          },
          "topic": "ACiE0204",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00069",
          "src": "CAP4-02-00069",
          "text": "For Rankine active failure in level cohesionless backfill with vertical major principal stress and phi = 30 degrees, what is the failure-plane inclination to the horizontal?",
          "options": [
            {
              "key": "a",
              "text": "45 degrees"
            },
            {
              "key": "b",
              "text": "75 degrees"
            },
            {
              "key": "c",
              "text": "60 degrees"
            },
            {
              "key": "d",
              "text": "30 degrees"
            }
          ],
          "answer": "c",
          "explanation": "The Mohr-Coulomb failure plane makes 45 + phi/2 with the major principal plane. Here that principal plane is horizontal, so the angle is 45 + 30/2 = 60 degrees. This result must not be transferred indiscriminately to a differently assumed footing wedge.<p>Source note: Page 8 point 63 calls an unspecified foundation &#39;rigid cone&#39; 45 + phi/2. The geometry/model is unresolved in text; this question explicitly tests the defensible Rankine failure-plane relation, not an unseen cone diagram.</p><p>Capsule 4th ed., p. 8; topic 2 point 63.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 63",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n63"
            ]
          },
          "topic": "ACiE0204",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00075",
          "src": "CAP4-02-00075",
          "text": "A sampler cutting edge has outside diameter 55 mm and inside diameter 50 mm. What is its area ratio?",
          "options": [
            {
              "key": "a",
              "text": "17.36%"
            },
            {
              "key": "b",
              "text": "121%"
            },
            {
              "key": "c",
              "text": "21%"
            },
            {
              "key": "d",
              "text": "10%"
            }
          ],
          "answer": "c",
          "explanation": "Area ratio = (Do^2 - Di^2)/Di^2 times 100 = (3025 - 2500)/2500 times 100 = 21%. It compares displaced metal area with sample area; using outside area as denominator gives the wrong 17.36% convention.<p>Capsule 4th ed., p. 8; topic 2 point 69.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 69",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n69"
            ]
          },
          "topic": "ACiE0204",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00076",
          "src": "CAP4-02-00076",
          "text": "Under the traditional SPT dilatancy procedure, which material-state combination can require the correction after overburden correction gives Nc greater than 15?",
          "options": [
            {
              "key": "a",
              "text": "Dry coarse gravel above the water table"
            },
            {
              "key": "b",
              "text": "Unsaturated coarse sand with low blow count"
            },
            {
              "key": "c",
              "text": "Stiff plastic clay irrespective of blow count"
            },
            {
              "key": "d",
              "text": "Saturated fine sand or nonplastic silt"
            }
          ],
          "answer": "d",
          "explanation": "Rapid penetration in saturated fine sand or nonplastic silt can generate transient pore-pressure effects and elevated resistance. The traditional correction is conditional on material, saturation and corrected count; it is not applied to every sand or every high N value.<p>Capsule 4th ed., p. 8; topic 2 point 70.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 70",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n70"
            ]
          },
          "topic": "ACiE0204",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00078",
          "src": "CAP4-02-00078",
          "text": "A checklist for correcting an SPT result includes energy ratio, borehole diameter, rod length and meniscus reading. Which item belongs to a different type of laboratory measurement?",
          "options": [
            {
              "key": "a",
              "text": "Drill-rod length"
            },
            {
              "key": "b",
              "text": "Hammer energy ratio"
            },
            {
              "key": "c",
              "text": "Borehole diameter"
            },
            {
              "key": "d",
              "text": "Meniscus reading"
            }
          ],
          "answer": "d",
          "explanation": "SPT resistance requires attention to delivered hammer energy and equipment conditions such as borehole diameter, rods and sampler. A meniscus correction concerns liquid-level readings, for example in hydrometer work, and is not an SPT blow-count correction.<p>Capsule 4th ed., p. 8; topic 2 point 72.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 72",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n72"
            ]
          },
          "topic": "ACiE0204",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00086",
          "src": "CAP4-02-00086",
          "text": "A retaining-wall backfill has a thick weak layer over dense sand. Why is one homogeneous Rankine pressure distribution potentially misleading?",
          "options": [
            {
              "key": "a",
              "text": "Only the upper layer contributes lateral pressure at every depth along the wall"
            },
            {
              "key": "b",
              "text": "Strength and unit weight vary with depth and require layer-specific treatment"
            },
            {
              "key": "c",
              "text": "The same active coefficient necessarily applies throughout both distinct layers"
            },
            {
              "key": "d",
              "text": "A homogeneous coefficient automatically incorporates every buried layer boundary"
            }
          ],
          "answer": "b",
          "explanation": "The simple homogeneous model uses uniform soil properties. Distinct layers can change vertical effective stress and lateral-pressure response, so applying one strength and unit weight to the whole profile may misrepresent pressures and failure conditions.<p>Capsule 4th ed., p. 8; topic 2 point 80.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 80",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n80"
            ]
          },
          "topic": "ACiE0204",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00088",
          "src": "CAP4-02-00088",
          "text": "A borehole stops because the selected auger cannot penetrate a hard layer, but deeper weak strata may lie within the foundation's influence zone. What should govern the investigation depth?",
          "options": [
            {
              "key": "a",
              "text": "The ground model and foundation influence, using a suitable alternative method"
            },
            {
              "key": "b",
              "text": "The standard length of one sampler regardless of stratigraphy"
            },
            {
              "key": "c",
              "text": "The maximum depth attainable by the first selected auger alone"
            },
            {
              "key": "d",
              "text": "The water level at the moment of drilling alone"
            }
          ],
          "answer": "a",
          "explanation": "Required exploration depth follows foundation loads, geometry, geology and potentially compressible or unstable layers. The boring method is selected to meet that requirement. Method limitations can obstruct investigation but do not define an adequate design depth.<p>Source note: Page 8 point 81 is interpreted as a design-planning principle, not a claim that boring equipment has unlimited capability.</p><p>Capsule 4th ed., p. 8; topic 2 point 81.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 81",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n81"
            ]
          },
          "topic": "ACiE0204",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00089",
          "src": "CAP4-02-00089",
          "text": "In the Rankine c'-phi' active-pressure extension, Ka = 0.25, c' = 10 kPa and vertical effective stress is 100 kPa. What lateral effective pressure is predicted before adding any water pressure?",
          "options": [
            {
              "key": "a",
              "text": "15 kPa"
            },
            {
              "key": "b",
              "text": "20 kPa"
            },
            {
              "key": "c",
              "text": "25 kPa"
            },
            {
              "key": "d",
              "text": "35 kPa"
            }
          ],
          "answer": "a",
          "explanation": "The expression is sigma_ha' = Ka sigma_v' - 2c' sqrt(Ka). Thus pressure is 0.25(100) - 2(10)(0.5) = 25 - 10 = 15 kPa. The cohesion term contains sqrt(Ka), not Ka; hydrostatic water pressure is added separately.<p>Source note: Page 8 point 82 loses the square root on Ka in the cohesion term.</p><p>Capsule 4th ed., p. 8; topic 2 point 82.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 82",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n82"
            ]
          },
          "topic": "ACiE0204",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00090",
          "src": "CAP4-02-00090",
          "text": "A Rankine c'-phi' calculation predicts negative lateral effective pressure near the top of a backfill. Which physical interpretation is appropriate for ordinary soil against a wall?",
          "options": [
            {
              "key": "a",
              "text": "A dependable tensile force pulling the wall back into the soil"
            },
            {
              "key": "b",
              "text": "A zone of passive failure even though the wall moves away from the soil"
            },
            {
              "key": "c",
              "text": "A zone where hydrostatic water pressure must also be negative"
            },
            {
              "key": "d",
              "text": "A potential tension-crack zone, with crack-water pressure assessed separately"
            }
          ],
          "answer": "d",
          "explanation": "Ordinary soil-wall contact cannot reliably transmit the predicted tensile traction. The ideal negative-pressure zone indicates potential separation or cracking. Water can fill a crack and exert positive pressure, so the algebraic negative value is not a stabilizing design force.<p>Capsule 4th ed., p. 8; topic 2 point 82.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 82",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n82"
            ]
          },
          "topic": "ACiE0204",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00091",
          "src": "CAP4-02-00091",
          "text": "A retaining-wall analysis graphically compares trial soil wedges under irregular backfill and surcharge. Which classical construction is associated with this approach?",
          "options": [
            {
              "key": "a",
              "text": "Mohr's stress-transformation circle"
            },
            {
              "key": "b",
              "text": "Newmark's vertical-stress influence chart"
            },
            {
              "key": "c",
              "text": "Culmann's graphical construction"
            },
            {
              "key": "d",
              "text": "Casagrande's logarithm-of-time construction"
            }
          ],
          "answer": "c",
          "explanation": "Culmann's graphical method implements Coulomb-type wedge force equilibrium and can accommodate irregular surfaces and loads. For active pressure, the critical trial wedge requires the maximum wall thrust. It is unrelated to structural column buckling.<p>Source note: Page 8 point 83&#39;s &#39;Cullman&#39; and &#39;column wedge&#39; are corrected to Culmann and Coulomb wedge.</p><p>Capsule 4th ed., p. 8; topic 2 point 83.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 83",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n83"
            ]
          },
          "topic": "ACiE0204",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00092",
          "src": "CAP4-02-00092",
          "text": "A retaining wall yields sufficiently away from level backfill. Which limiting lateral-pressure state is mobilized?",
          "options": [
            {
              "key": "a",
              "text": "At-rest pressure, because wall movement has no effect"
            },
            {
              "key": "b",
              "text": "Zero pressure, because separation removes all soil weight"
            },
            {
              "key": "c",
              "text": "Active pressure, lower than the compatible at-rest pressure"
            },
            {
              "key": "d",
              "text": "Passive pressure, higher than the compatible at-rest pressure"
            }
          ],
          "answer": "c",
          "explanation": "Outward wall movement permits lateral soil expansion and mobilizes the active limit. Movement into the soil mobilizes passive resistance; a wall prevented from yielding may remain closer to at-rest conditions rather than reaching active pressure.<p>Capsule 4th ed., p. 8; topic 2 point 84.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 84",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n84"
            ]
          },
          "topic": "ACiE0204",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00093",
          "src": "CAP4-02-00093",
          "text": "For dry, homogeneous, level cohesionless backfill against a smooth vertical wall, phi' = 30 degrees. What Rankine active coefficient should be used?",
          "options": [
            {
              "key": "a",
              "text": "1/2"
            },
            {
              "key": "b",
              "text": "1/3"
            },
            {
              "key": "c",
              "text": "2/3"
            },
            {
              "key": "d",
              "text": "3"
            }
          ],
          "answer": "b",
          "explanation": "Ka = (1 - sin(phi'))/(1 + sin(phi')). With sin(30 degrees) = 0.5, Ka = 0.5/1.5 = 1/3. The reciprocal is Kp = 3; 1 - sin(phi') = 1/2 is Jaky's normally consolidated at-rest estimate, not Ka.<p>Capsule 4th ed., p. 8; topic 2 point 85.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 85",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n85"
            ]
          },
          "topic": "ACiE0204",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00097",
          "src": "CAP4-02-00097",
          "text": "The elementary Rankine solution is applied to level cohesionless backfill at a smooth vertical wall. Which wall-interface condition is implied?",
          "options": [
            {
              "key": "a",
              "text": "Wall-friction angle equal to soil friction angle"
            },
            {
              "key": "b",
              "text": "Wall-friction angle equal to half the soil friction angle"
            },
            {
              "key": "c",
              "text": "Resultant soil thrust parallel to the vertical wall"
            },
            {
              "key": "d",
              "text": "Zero wall-friction angle and horizontal soil thrust"
            }
          ],
          "answer": "d",
          "explanation": "A smooth vertical boundary has delta = 0, so the contact traction is normal to the wall and horizontal for the stated level-backfill case. Rough-wall friction or different backfill geometry requires an appropriate modified analysis.<p>Capsule 4th ed., p. 8; topic 2 point 88.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 88",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n88"
            ]
          },
          "topic": "ACiE0204",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00098",
          "src": "CAP4-02-00098",
          "text": "For an ideal isotropic linear-elastic soil under zero lateral strain, Poisson's ratio is 0.40. What at-rest coefficient follows from that constitutive model?",
          "options": [
            {
              "key": "a",
              "text": "1.500"
            },
            {
              "key": "b",
              "text": "0.400"
            },
            {
              "key": "c",
              "text": "0.667"
            },
            {
              "key": "d",
              "text": "0.600"
            }
          ],
          "answer": "c",
          "explanation": "Under lateral restraint the elastic relation gives K0 = nu/(1 - nu) = 0.40/0.60 = 0.667. It is a model-specific estimate, not a universal law for real soils with plastic strain or overconsolidation.<p>Source note: Page 8 point 89&#39;s separated numerator is restored; distinguish this elastic relation from Jaky&#39;s empirical normally consolidated relation.</p><p>Capsule 4th ed., pp. 8, 9; topic 2 point 89.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 8, 9; topic 2 point 89",
            "pages": [
              8,
              9
            ],
            "points": [
              "capsule-t02-p008-n89"
            ]
          },
          "topic": "ACiE0204",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00099",
          "src": "CAP4-02-00099",
          "text": "Level cohesionless backfill has phi' = 30 degrees. Under the smooth-wall Rankine passive idealization, what horizontal effective stress corresponds to vertical effective stress 60 kPa?",
          "options": [
            {
              "key": "a",
              "text": "20 kPa"
            },
            {
              "key": "b",
              "text": "30 kPa"
            },
            {
              "key": "c",
              "text": "180 kPa"
            },
            {
              "key": "d",
              "text": "90 kPa"
            }
          ],
          "answer": "c",
          "explanation": "Kp = (1 + sin(phi'))/(1 - sin(phi')) = 1.5/0.5 = 3. Thus sigma_hp' = 3(60) = 180 kPa. Passive resistance requires sufficient wall movement into the soil; it is not the pressure state at a stationary wall.<p>Capsule 4th ed., p. 9; topic 2 point 90.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 90",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n90"
            ]
          },
          "topic": "ACiE0204",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00146",
          "src": "CAP4-02-00146",
          "text": "For saturated fine sand, the applicable traditional SPT procedure gives overburden-corrected Nc = 27. Using Nd = 15 + 0.5(Nc - 15), what dilatancy-corrected count follows?",
          "options": [
            {
              "key": "a",
              "text": "13.5"
            },
            {
              "key": "b",
              "text": "27"
            },
            {
              "key": "c",
              "text": "21"
            },
            {
              "key": "d",
              "text": "42"
            }
          ],
          "answer": "c",
          "explanation": "The threshold conditions are met: saturated fine sand and Nc greater than 15. Thus Nd = 15 + 0.5(27 - 15) = 15 + 6 = 21. Halving the entire Nc gives the incorrect 13.5; the procedure halves only the excess over 15.<p>Capsule 4th ed., p. 10; topic 2 point 130.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 130",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n130"
            ]
          },
          "topic": "ACiE0204",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00147",
          "src": "CAP4-02-00147",
          "text": "Saturated nonplastic silt has overburden-corrected SPT count Nc = 12. Under the traditional dilatancy rule that operates only for Nc greater than 15, what count remains after this step?",
          "options": [
            {
              "key": "a",
              "text": "12"
            },
            {
              "key": "b",
              "text": "15"
            },
            {
              "key": "c",
              "text": "13.5"
            },
            {
              "key": "d",
              "text": "6"
            }
          ],
          "answer": "a",
          "explanation": "The stated threshold is not exceeded, so no dilatancy adjustment is applied and the count remains 12. Extrapolating 15 + 0.5(Nc - 15) below its prescribed range would incorrectly increase the result to 13.5.<p>Capsule 4th ed., p. 10; topic 2 point 130.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 130",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n130"
            ]
          },
          "topic": "ACiE0204",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00152",
          "src": "CAP4-02-00152",
          "text": "An observation well is screened in an unconfined aquifer and allowed to equilibrate. What does its stabilized water level primarily indicate?",
          "options": [
            {
              "key": "a",
              "text": "The drilling-fluid level before the well has equilibrated"
            },
            {
              "key": "b",
              "text": "The piezometric head of every deeper confined aquifer"
            },
            {
              "key": "c",
              "text": "The highest seasonal groundwater level regardless of observation date"
            },
            {
              "key": "d",
              "text": "Groundwater level near the screened interval"
            }
          ],
          "answer": "d",
          "explanation": "A suitably installed and equilibrated observation well monitors groundwater level. Screen depth, aquifer confinement, seasonal timing and drilling disturbance matter: a confined piezometric level is not automatically the local water table, and one reading need not capture seasonal extremes.<p>Capsule 4th ed., p. 10; topic 2 point 134.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 134",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n134"
            ]
          },
          "topic": "ACiE0204",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00156",
          "src": "CAP4-02-00156",
          "text": "Very soft clay tends to flow into an open sampling tube prematurely and may be lost during withdrawal. Which sampler feature is especially useful?",
          "options": [
            {
              "key": "a",
              "text": "A controlled piston with a suitable thin-walled tube"
            },
            {
              "key": "b",
              "text": "An open auger flight used as an undisturbed sampler"
            },
            {
              "key": "c",
              "text": "A coarse gravel catcher used without disturbance assessment"
            },
            {
              "key": "d",
              "text": "A thick split spoon driven with repeated heavy blows"
            }
          ],
          "answer": "a",
          "explanation": "A piston helps control entry and retain very soft soil during tube sampling, reducing unwanted movement and disturbance when properly operated. Thin walls and good technique still matter; calling a sample undisturbed does not mean its stress history is perfectly preserved.<p>Capsule 4th ed., p. 10; topic 2 point 138.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 138",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n138"
            ]
          },
          "topic": "ACiE0204",
          "kind": "application"
        }
      ]
    },
    {
      "id": "ACiE0205",
      "name": "Fundamentals of foundation",
      "subject": "Soil Mechanics and Foundation Engineering",
      "questions": [
        {
          "id": "CAP4-02-00001",
          "src": "CAP4-02-00001",
          "text": "A long load-bearing wall transfers an approximately uniform line load to competent shallow soil. Which foundation idealization best represents its continuous base far from the ends?",
          "options": [
            {
              "key": "a",
              "text": "A pile cap distributing load to deep individual supports"
            },
            {
              "key": "b",
              "text": "An isolated footing with two-way spreading from one column"
            },
            {
              "key": "c",
              "text": "A strap footing joining two discrete column bases"
            },
            {
              "key": "d",
              "text": "A strip footing with predominantly transverse action"
            }
          ],
          "answer": "d",
          "explanation": "A continuous footing whose length greatly exceeds its width behaves approximately as a strip away from its ends. Its load and bearing response are commonly considered per unit length; a strap instead connects discrete footings.<p>Capsule 4th ed., p. 6; topic 2 point 1.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 6; topic 2 point 1",
            "pages": [
              6
            ],
            "points": [
              "capsule-t02-p006-n1"
            ]
          },
          "topic": "ACiE0205",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00022",
          "src": "CAP4-02-00022",
          "text": "A boundary prevents centring an edge footing under its column, while an interior column can provide balancing action. Which arrangement uses a connecting beam normally designed without soil support?",
          "options": [
            {
              "key": "a",
              "text": "Single isolated footing"
            },
            {
              "key": "b",
              "text": "Strap footing"
            },
            {
              "key": "c",
              "text": "Cellular raft foundation"
            },
            {
              "key": "d",
              "text": "Continuous strip footing"
            }
          ],
          "answer": "b",
          "explanation": "A rigid strap transfers moment between separate bases and helps balance the edge-column eccentricity. Large column spacing can make a solid combined footing uneconomical, but spacing alone is not the defining reason for a strap footing.<p>Source note: Page 7 point 19 is qualified: eccentricity and the load-transfer arrangement, not simply a long spacing, control selection.</p><p>Capsule 4th ed., p. 7; topic 2 point 19.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 19",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n19"
            ]
          },
          "topic": "ACiE0205",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00095",
          "src": "CAP4-02-00095",
          "text": "A basement excavation removes 9000 kN of soil and is replaced by a building and foundation weighing 9000 kN over the same footprint. In the gross-weight compensation sense, how is the foundation classified?",
          "options": [
            {
              "key": "a",
              "text": "Fully compensated"
            },
            {
              "key": "b",
              "text": "Overcompensated with a net weight reduction"
            },
            {
              "key": "c",
              "text": "Partly compensated with a positive added weight"
            },
            {
              "key": "d",
              "text": "Uncompensated because a basement is present"
            }
          ],
          "answer": "a",
          "explanation": "Full compensation means the added building-plus-foundation weight equals the removed soil weight, giving zero net added gross weight under the stated comparison. Groundwater forces, construction unloading/reloading and differential response still require assessment.<p>Capsule 4th ed., p. 8; topic 2 point 87.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 87",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n87"
            ]
          },
          "topic": "ACiE0205",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00096",
          "src": "CAP4-02-00096",
          "text": "Does equality of excavated soil weight and completed building weight guarantee zero movement for a compensated raft?",
          "options": [
            {
              "key": "a",
              "text": "No; full compensation necessarily doubles the final gross pressure"
            },
            {
              "key": "b",
              "text": "Yes; equality of gross weights eliminates every effective-stress change"
            },
            {
              "key": "c",
              "text": "No; heave, reloading, groundwater and differential response can still occur"
            },
            {
              "key": "d",
              "text": "Yes; compensation makes soil stiffness and drainage irrelevant"
            }
          ],
          "answer": "c",
          "explanation": "Compensation is a load-balance concept, not a zero-settlement theorem. Excavation can cause heave, construction reloads the soil, and water and spatial stiffness differences affect movements even when the final average net gross load is small.<p>Capsule 4th ed., p. 8; topic 2 point 87.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 87",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n87"
            ]
          },
          "topic": "ACiE0205",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00101",
          "src": "CAP4-02-00101",
          "text": "A reinforced concrete slab spreads loads from most building columns directly onto near-surface ground, without piles. Which foundation category best describes it?",
          "options": [
            {
              "key": "a",
              "text": "Deep friction-pile group"
            },
            {
              "key": "b",
              "text": "Deep end-bearing pile foundation"
            },
            {
              "key": "c",
              "text": "Sunk well foundation"
            },
            {
              "key": "d",
              "text": "Shallow mat or raft foundation"
            }
          ],
          "answer": "d",
          "explanation": "A mat or raft transfers loads through a broad slab to relatively shallow soil. A piled raft is a different combined system because piles also carry load. Plan area or building weight alone does not make an ordinary ground-bearing raft a deep foundation.<p>Capsule 4th ed., p. 9; topic 2 point 92.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 92",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n92"
            ]
          },
          "topic": "ACiE0205",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00102",
          "src": "CAP4-02-00102",
          "text": "A foundation transfers building load past weak surface deposits through slender elements mobilizing shaft and toe resistance at depth. Which system is described?",
          "options": [
            {
              "key": "a",
              "text": "Isolated spread footing"
            },
            {
              "key": "b",
              "text": "Pile foundation"
            },
            {
              "key": "c",
              "text": "Wall strip footing"
            },
            {
              "key": "d",
              "text": "Unpiled raft foundation"
            }
          ],
          "answer": "b",
          "explanation": "Piles are deep-foundation elements. Load can be resisted by shaft friction, toe bearing or a combination; reaching hard rock is not essential to every pile foundation. Shallow footings instead bear over a broad base near the surface.<p>Capsule 4th ed., p. 9; topic 2 point 93.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 93",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n93"
            ]
          },
          "topic": "ACiE0205",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00103",
          "src": "CAP4-02-00103",
          "text": "A designer proposes one large-diameter pile beneath a column. Is the proposal invalid solely because piles are often installed in groups?",
          "options": [
            {
              "key": "a",
              "text": "Yes; every pile foundation must contain exactly three piles"
            },
            {
              "key": "b",
              "text": "Yes; a pile cap can transfer load only to an even number of piles"
            },
            {
              "key": "c",
              "text": "No; a single pile may be valid if all design and construction checks pass"
            },
            {
              "key": "d",
              "text": "No; a single pile is automatically adequate without lateral checks"
            }
          ],
          "answer": "c",
          "explanation": "Pile groups are common for capacity, layout and moment resistance, but individual piles are also used. A single-pile design needs axial, lateral, moment, settlement, structural and construction-tolerance checks; group use is not a defining requirement.<p>Source note: Page 9 point 94 is not universal: pile foundations need not always be groups.</p><p>Capsule 4th ed., p. 9; topic 2 point 94.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 94",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n94"
            ]
          },
          "topic": "ACiE0205",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00104",
          "src": "CAP4-02-00104",
          "text": "A centrally loaded footing carries 1200 kN from the column plus 120 kN of footing and overlying fill. The applicable gross allowable pressure is 150 kPa. What minimum area follows from average bearing pressure alone?",
          "options": [
            {
              "key": "a",
              "text": "8.8 m<sup>2</sup>"
            },
            {
              "key": "b",
              "text": "9.6 m<sup>2</sup>"
            },
            {
              "key": "c",
              "text": "8.0 m<sup>2</sup>"
            },
            {
              "key": "d",
              "text": "7.2 m<sup>2</sup>"
            }
          ],
          "answer": "a",
          "explanation": "Use matching gross load and gross allowable pressure: A = (1200 + 120)/150 = 8.8 m<sup>2</sup>. Soil properties and settlement determine the allowable pressure. Structural bending, shear and any nonuniform contact require further checks.<p>Capsule 4th ed., p. 9; topic 2 point 95.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 95",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n95"
            ]
          },
          "topic": "ACiE0205",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00105",
          "src": "CAP4-02-00105",
          "text": "Heavy column loads on relatively weak shallow soil make separate footings occupy most of the building footprint. Which alternative is reasonable to evaluate first?",
          "options": [
            {
              "key": "a",
              "text": "A strap beam assumed to eliminate all ground compression"
            },
            {
              "key": "b",
              "text": "Smaller isolated pads with deliberately higher contact pressure"
            },
            {
              "key": "c",
              "text": "An unreinforced floor slab assumed to carry column moments"
            },
            {
              "key": "d",
              "text": "A raft, checked for overall and differential settlement"
            }
          ],
          "answer": "d",
          "explanation": "A raft can provide a continuous bearing area when individual pads become large or overlap. The often-quoted half-footprint criterion is an economic rule of thumb, not a mandatory code trigger; bearing, flexure, punching and settlements still govern viability.<p>Source note: Page 9 point 96&#39;s 50% figure is treated as a heuristic, not an automatic requirement.</p><p>Capsule 4th ed., p. 9; topic 2 point 96.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 96",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n96"
            ]
          },
          "topic": "ACiE0205",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00106",
          "src": "CAP4-02-00106",
          "text": "A raft reduces average contact pressure, but a thick highly compressible clay layer extends well beneath it. Which concern remains unresolved by selecting the raft alone?",
          "options": [
            {
              "key": "a",
              "text": "Zero net foundation load solely because the base is a raft"
            },
            {
              "key": "b",
              "text": "Net pressure increasing solely because bearing area increased"
            },
            {
              "key": "c",
              "text": "Consolidation settlement of the deeper clay"
            },
            {
              "key": "d",
              "text": "Complete exclusion of the deeper layer from the stress bulb"
            }
          ],
          "answer": "c",
          "explanation": "A wide raft can transmit stress to a substantial depth. Spreading loads and reducing differential movement do not eliminate consolidation of a deep weak layer; a settlement analysis may still require improvement, load reduction or another foundation system.<p>Capsule 4th ed., p. 9; topic 2 point 96.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 96",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n96"
            ]
          },
          "topic": "ACiE0205",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00107",
          "src": "CAP4-02-00107",
          "text": "A mat consists of a continuous slab made locally deeper beneath columns, without a connecting beam grid or enclosed cells. Which conventional description best fits?",
          "options": [
            {
              "key": "a",
              "text": "Cellular box raft"
            },
            {
              "key": "b",
              "text": "Separate pads with nonbearing straps"
            },
            {
              "key": "c",
              "text": "Beam-and-slab raft"
            },
            {
              "key": "d",
              "text": "Flat plate thickened beneath columns"
            }
          ],
          "answer": "d",
          "explanation": "Local column-zone thickening is a recognized mat form that increases stiffness and punching resistance. Beam-and-slab and cellular rafts are other distinct configurations; the source's 'double flat plate thickened' is not a sufficiently defined structural arrangement.<p>Source note: Page 9 point 97 uses undefined terminology. The question tests clearly described mat forms rather than declaring every possible double-slab system invalid.</p><p>Capsule 4th ed., p. 9; topic 2 point 97.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 97",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n97"
            ]
          },
          "topic": "ACiE0205",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00108",
          "src": "CAP4-02-00108",
          "text": "Two adjacent columns are carried by one common spread base, while the rest of the building has separate foundations. What is the most specific conventional name?",
          "options": [
            {
              "key": "a",
              "text": "Strap footing with separate bases"
            },
            {
              "key": "b",
              "text": "Isolated single-column footing"
            },
            {
              "key": "c",
              "text": "Whole-building raft foundation"
            },
            {
              "key": "d",
              "text": "Combined footing"
            }
          ],
          "answer": "d",
          "explanation": "A combined footing supports two or more columns on a common base. A strap arrangement retains separate bases connected by a beam; a raft extends more broadly beneath the structure. The physical arrangement matters more than column count alone.<p>Capsule 4th ed., p. 9; topic 2 point 98.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 98",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n98"
            ]
          },
          "topic": "ACiE0205",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00111",
          "src": "CAP4-02-00111",
          "text": "Required isolated bases beneath two nearby columns overlap in plan. Which design change most directly addresses the overlap while retaining a shallow common bearing base?",
          "options": [
            {
              "key": "a",
              "text": "Reduce each base without rechecking contact pressure"
            },
            {
              "key": "b",
              "text": "Add a nominal tie beam and ignore the overlapping bearing areas"
            },
            {
              "key": "c",
              "text": "Replace them with a properly proportioned combined footing"
            },
            {
              "key": "d",
              "text": "Keep both independent bases occupying the same soil volume"
            }
          ],
          "answer": "c",
          "explanation": "A combined footing unifies the bearing area and is proportioned for the resultant of the column loads. Simply superimposing independent footing designs double-counts soil support; structural action and contact-pressure compatibility require a unified design.<p>Capsule 4th ed., p. 9; topic 2 point 100.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 100",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n100"
            ]
          },
          "topic": "ACiE0205",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00112",
          "src": "CAP4-02-00112",
          "text": "A proposed footing in expansive clay is placed 0.9 m deep solely because a revision note lists that minimum. Which additional information is most directly needed to evaluate seasonal movement risk?",
          "options": [
            {
              "key": "a",
              "text": "The current water-table level treated as the only seasonal moisture boundary"
            },
            {
              "key": "b",
              "text": "The saturated water content used as a substitute for shrink-swell testing"
            },
            {
              "key": "c",
              "text": "The active moisture-change depth and measured shrink-swell behavior"
            },
            {
              "key": "d",
              "text": "The laboratory compaction optimum as the sole founding-depth criterion"
            }
          ],
          "answer": "c",
          "explanation": "Expansive-ground behavior depends on mineralogy, moisture fluctuations, vegetation and the active zone. A nominal 0.9 m embedment cannot establish protection from seasonal movement or adequate bearing. Site conditions and applicable requirements govern founding depth.<p>Source note: Page 9 point 101&#39;s universal 0.9 m clay-foundation minimum is unsupported; no current code threshold is asserted.</p><p>Capsule 4th ed., p. 9; topic 2 point 101.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 101",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n101"
            ]
          },
          "topic": "ACiE0205",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00113",
          "src": "CAP4-02-00113",
          "text": "Two equal column loads act at equal distances from the opposite ends of a rectangular combined footing. Neglect other eccentric loads. Why is uniform average contact pressure a compatible first idealization?",
          "options": [
            {
              "key": "a",
              "text": "Soil pressure must act only directly beneath the two columns"
            },
            {
              "key": "b",
              "text": "A rectangle guarantees uniform pressure for any column positions"
            },
            {
              "key": "c",
              "text": "The load resultant coincides with the footing's plan centroid"
            },
            {
              "key": "d",
              "text": "Equal loads eliminate all bending moments inside the footing"
            }
          ],
          "answer": "c",
          "explanation": "Equal symmetrically placed loads have a resultant at the midpoint, aligned with the rectangular area centroid. This removes overall eccentricity in the simple rigid-footing model. Unequal edge distances or other moments can destroy that condition despite equal column loads.<p>Source note: Page 9 point 102 omits layout and resultant-centroid conditions; equal loads alone do not dictate footing shape.</p><p>Capsule 4th ed., p. 9; topic 2 point 102.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 102",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n102"
            ]
          },
          "topic": "ACiE0205",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00114",
          "src": "CAP4-02-00114",
          "text": "A bridge pier site has competent material at a shallow level below the assessed scour zone, and excavation can be safely dewatered. Which system bears on a spread base constructed in the exposed excavation?",
          "options": [
            {
              "key": "a",
              "text": "Deep drilled-shaft foundation"
            },
            {
              "key": "b",
              "text": "Open spread foundation"
            },
            {
              "key": "c",
              "text": "Driven pile group with a cap"
            },
            {
              "key": "d",
              "text": "Sunk well foundation"
            }
          ],
          "answer": "b",
          "explanation": "An open spread foundation can suit a bridge where competent material, scour protection, excavation stability and groundwater control permit it. Bridge foundations are not universally open; deep alluvium or severe scour may favor piles, shafts or wells.<p>Source note: Page 9 point 103 describes a possible bridge foundation, not a universal choice.</p><p>Capsule 4th ed., p. 9; topic 2 point 103.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 103",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n103"
            ]
          },
          "topic": "ACiE0205",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00115",
          "src": "CAP4-02-00115",
          "text": "Which three site hazards respectively explain founding below vulnerable river-bed material, below a frost-active zone, and below an organic surface layer?",
          "options": [
            {
              "key": "a",
              "text": "Capillary rise, frost heave and lateral squeezing"
            },
            {
              "key": "b",
              "text": "Scour, primary consolidation and capillary rise"
            },
            {
              "key": "c",
              "text": "Piping, frost heave and dense-gravel dilation"
            },
            {
              "key": "d",
              "text": "Scour, frost heave and compressible topsoil"
            }
          ],
          "answer": "d",
          "explanation": "Scour can remove soil supporting the foundation, freezing can heave frost-susceptible ground, and organic topsoil is often compressible and unsuitable for bearing. Relevant hazards must be considered together rather than choosing embedment from bearing pressure alone.<p>Capsule 4th ed., p. 9; topic 2 point 104.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 104",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n104"
            ]
          },
          "topic": "ACiE0205",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00117",
          "src": "CAP4-02-00117",
          "text": "A footing base is 500 mm below ground but still lies within loose uncontrolled fill. Which assessment is correct?",
          "options": [
            {
              "key": "a",
              "text": "The fill can use natural-soil parameters when its colour matches"
            },
            {
              "key": "b",
              "text": "An adequate shear safety factor removes the need for settlement checks"
            },
            {
              "key": "c",
              "text": "A dense surface crust establishes adequate support for the whole fill"
            },
            {
              "key": "d",
              "text": "The nominal embedment does not establish competent bearing support"
            }
          ],
          "answer": "d",
          "explanation": "Founding depth must reach or create support suitable for load and movement requirements. Uncontrolled fill can remain weak or compressible below a nominal depth. The 500 mm figure is not a substitute for investigation, improvement or applicable design rules.<p>Source note: Page 9 point 106&#39;s blanket minimum is not endorsed as current law or sufficient design.</p><p>Capsule 4th ed., p. 9; topic 2 point 106.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 106",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n106"
            ]
          },
          "topic": "ACiE0205",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00119",
          "src": "CAP4-02-00119",
          "text": "For preliminary axial sizing only, a 1200 kN column load is shared equally by identical piers with allowable axial load 250 kN each. Ignoring group reductions and cap weight for this exercise, what minimum integer count is needed?",
          "options": [
            {
              "key": "a",
              "text": "6"
            },
            {
              "key": "b",
              "text": "4"
            },
            {
              "key": "c",
              "text": "5"
            },
            {
              "key": "d",
              "text": "3"
            }
          ],
          "answer": "c",
          "explanation": "The axial count must be at least 1200/250 = 4.8, rounded upward to 5. Real design also checks layout, group response, moments, lateral loads, cap action and settlement; no universal number of piers can be specified for every column.<p>Source note: Page 9 point 108&#39;s fixed count of three is unsupported and may confuse piers with a common pile-group arrangement. This explicit example is not a reconstruction of missing source data.</p><p>Capsule 4th ed., p. 9; topic 2 point 108.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 108",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n108"
            ]
          },
          "topic": "ACiE0205",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00167",
          "src": "CAP4-02-00167",
          "text": "In the historical Rankine depth expression Df = (p/gamma)[(1 - sin(phi))/(1 + sin(phi))]^2, use p = 180 kPa, gamma = 20 kN/m<sup>3</sup> and phi = 30 degrees. What calculated depth follows?",
          "options": [
            {
              "key": "a",
              "text": "1.0 m"
            },
            {
              "key": "b",
              "text": "3.0 m"
            },
            {
              "key": "c",
              "text": "9.0 m"
            },
            {
              "key": "d",
              "text": "81.0 m"
            }
          ],
          "answer": "a",
          "explanation": "p/gamma = 180/20 = 9 m. The bracket is (1 - 0.5)/(1 + 0.5) = 1/3; squaring gives 1/9. Therefore Df = 9/9 = 1 m. This historical expression does not replace checks for competent strata, scour, frost, groundwater and settlement.<p>Source note: Page 10 point 147&#39;s fraction is restored and the equation is explicitly identified as a historical idealization rather than a sufficient modern depth prescription.</p><p>Capsule 4th ed., p. 10; topic 2 point 147.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 147",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n147"
            ]
          },
          "topic": "ACiE0205",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00171",
          "src": "CAP4-02-00171",
          "text": "A project explicitly requires at least 500 mm embedment below final adjacent ground level. A footing base is 800 mm below the original ground, which will be lowered by 400 mm. Does the final embedment meet that stated requirement?",
          "options": [
            {
              "key": "a",
              "text": "No; final embedment is 400 mm, short by 100 mm"
            },
            {
              "key": "b",
              "text": "Yes; final embedment increases to 1200 mm"
            },
            {
              "key": "c",
              "text": "Yes; final embedment remains 800 mm"
            },
            {
              "key": "d",
              "text": "No; final embedment becomes 300 mm, short by 200 mm"
            }
          ],
          "answer": "a",
          "explanation": "The final ground surface moves downward by 400 mm, leaving embedment 800 - 400 = 400 mm. That is 100 mm less than the supplied project minimum. A nominal minimum is assessed from the correct datum and does not independently establish bearing or settlement adequacy.<p>Source note: Page 10 point 151 repeats an unqualified 500 mm recommendation. The value is used only as an explicit project requirement, not a universal current-code rule.</p><p>Capsule 4th ed., p. 10; topic 2 point 151.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 151",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n151"
            ]
          },
          "topic": "ACiE0205",
          "kind": "calculation"
        }
      ]
    },
    {
      "id": "ACiE0206",
      "name": "Bearing capacity and foundation settlements",
      "subject": "Soil Mechanics and Foundation Engineering",
      "questions": [
        {
          "id": "CAP4-02-00031",
          "src": "CAP4-02-00031",
          "text": "A clay layer previously sustained 240 kPa vertical effective stress but now sustains 120 kPa. What are its OCR and consolidation state?",
          "options": [
            {
              "key": "a",
              "text": "OCR = 0.5; overconsolidated"
            },
            {
              "key": "b",
              "text": "OCR = 2; normally consolidated"
            },
            {
              "key": "c",
              "text": "OCR = 2; overconsolidated"
            },
            {
              "key": "d",
              "text": "OCR = 1; normally consolidated"
            }
          ],
          "answer": "c",
          "explanation": "OCR = maximum past vertical effective stress/current vertical effective stress = 240/120 = 2. A value above unity indicates overconsolidation. Total stress alone is insufficient because pore pressure changes effective stress history.<p>Capsule 4th ed., p. 7; topic 2 point 28.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 28",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n28"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00034",
          "src": "CAP4-02-00034",
          "text": "A saturated clay layer lies below a groundwater table that is 2 m beneath ground level. A new embankment adds sustained stress. Is primary consolidation settlement excluded by this water-table position?",
          "options": [
            {
              "key": "a",
              "text": "No; drainage and effective-stress increase can still compress the clay"
            },
            {
              "key": "b",
              "text": "Yes; primary consolidation requires ponding above the ground surface"
            },
            {
              "key": "c",
              "text": "No; but settlement is independent of clay compressibility and stress"
            },
            {
              "key": "d",
              "text": "Yes; only immediate settlement is possible below a buried water table"
            }
          ],
          "answer": "a",
          "explanation": "Consolidation depends on drainage of excess pore water and the resulting effective-stress change in the compressible layer. The groundwater table determines initial stresses; it need not coincide with the ground surface.<p>Source note: Page 7 point 31 incorrectly reads as a restriction to groundwater at ground level.</p><p>Capsule 4th ed., p. 7; topic 2 point 31.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 31",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n31"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00035",
          "src": "CAP4-02-00035",
          "text": "A footing shows distortion immediately after loading saturated clay, before appreciable drainage. Which framework is commonly used for a first estimate of that settlement component?",
          "options": [
            {
              "key": "a",
              "text": "Critical-gradient balance using submerged unit weight alone"
            },
            {
              "key": "b",
              "text": "Secondary compression using a long-term creep index alone"
            },
            {
              "key": "c",
              "text": "Elastic deformation with appropriate undrained stiffness"
            },
            {
              "key": "d",
              "text": "Primary consolidation using elapsed drainage time alone"
            }
          ],
          "answer": "c",
          "explanation": "Immediate settlement is commonly estimated from an elastic solution with stiffness, Poisson ratio and influence factors appropriate to geometry and drainage. It can involve distortion without appreciable volume loss and is distinct from subsequent primary consolidation.<p>Capsule 4th ed., p. 7; topic 2 point 32.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 32",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n32"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00036",
          "src": "CAP4-02-00036",
          "text": "Erosion removes a thick overburden from a clay deposit while groundwater conditions stabilize. Which stress-history change is most likely if the earlier effective stress exceeded the remaining effective stress?",
          "options": [
            {
              "key": "a",
              "text": "The clay becomes overconsolidated"
            },
            {
              "key": "b",
              "text": "The maximum past effective stress is erased"
            },
            {
              "key": "c",
              "text": "The clay necessarily retains OCR equal to one"
            },
            {
              "key": "d",
              "text": "The clay necessarily becomes underconsolidated"
            }
          ],
          "answer": "a",
          "explanation": "Unloading lowers current effective overburden but does not erase the previous maximum. The preconsolidation stress can therefore exceed the present stress, giving OCR greater than one. Erosion and excavation are common causes of mechanical overconsolidation.<p>Capsule 4th ed., p. 7; topic 2 point 33.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 33",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n33"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00044",
          "src": "CAP4-02-00044",
          "text": "After rapid loading of saturated clay, total vertical stress is held constant while excess pore pressure dissipates. What accompanies primary consolidation?",
          "options": [
            {
              "key": "a",
              "text": "Water drains, effective stress rises and volume decreases"
            },
            {
              "key": "b",
              "text": "Water drains while effective stress remains unchanged"
            },
            {
              "key": "c",
              "text": "Water remains trapped while effective stress rises and volume decreases"
            },
            {
              "key": "d",
              "text": "Water drains, effective stress falls and volume decreases"
            }
          ],
          "answer": "a",
          "explanation": "With total stress fixed, sigma' = sigma - u increases as excess u falls. Water leaves the pores and the skeleton compresses. The voids themselves are not expelled, and this time-dependent process is distinct from rapid air-expelling compaction.<p>Capsule 4th ed., p. 7; topic 2 point 40.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 40",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n40"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00046",
          "src": "CAP4-02-00046",
          "text": "A laboratory must estimate one-dimensional compression and consolidation rate of a clay under successive vertical stress increments. Which apparatus provides the relevant restrained-deformation test?",
          "options": [
            {
              "key": "a",
              "text": "Constant-head permeameter"
            },
            {
              "key": "b",
              "text": "Direct shear box"
            },
            {
              "key": "c",
              "text": "Density bottle"
            },
            {
              "key": "d",
              "text": "Oedometer"
            }
          ],
          "answer": "d",
          "explanation": "The oedometer restrains lateral strain in a ring and records axial deformation and its time development under vertical loading. It supports compressibility and consolidation-rate interpretation; it does not directly supply an unconstrained Young's modulus.<p>Capsule 4th ed., p. 7; topic 2 point 42.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 42",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n42"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00048",
          "src": "CAP4-02-00048",
          "text": "Primary consolidation settlement at time t is 36 mm, and the final primary consolidation settlement is 60 mm. What is the average degree of consolidation?",
          "options": [
            {
              "key": "a",
              "text": "40%"
            },
            {
              "key": "b",
              "text": "60%"
            },
            {
              "key": "c",
              "text": "24%"
            },
            {
              "key": "d",
              "text": "166.7%"
            }
          ],
          "answer": "b",
          "explanation": "Average degree of consolidation U = Sc(t)/Sc(final) = 36/60 = 0.60. The numerator and denominator must refer to the same primary-consolidation component, excluding immediate settlement and secondary compression.<p>Capsule 4th ed., p. 7; topic 2 point 44.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 44",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n44"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00053",
          "src": "CAP4-02-00053",
          "text": "An initially 20 mm thick oedometer specimen drains freely from both its top and bottom faces. What initial drainage-path length should enter the time-factor equation?",
          "options": [
            {
              "key": "a",
              "text": "20 mm"
            },
            {
              "key": "b",
              "text": "40 mm"
            },
            {
              "key": "c",
              "text": "5 mm"
            },
            {
              "key": "d",
              "text": "10 mm"
            }
          ],
          "answer": "d",
          "explanation": "The longest path to a drainage face is half the specimen thickness for double drainage: Hdr = 20/2 = 10 mm. With only one drainage face it would be 20 mm. The quoted specimen thickness is illustrative, not a universal apparatus dimension.<p>Source note: Page 7 point 49 describes a typical size; the question supplies the actual size rather than asserting a mandatory 20 mm thickness.</p><p>Capsule 4th ed., p. 7; topic 2 point 49.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 49",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n49"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00054",
          "src": "CAP4-02-00054",
          "text": "A plate load test is performed with groundwater below the test plate, but the seasonal water table may rise into the future footing's influence zone. Which interpretation is appropriate?",
          "options": [
            {
              "key": "a",
              "text": "A water table below the plate makes any plate test physically impossible"
            },
            {
              "key": "b",
              "text": "Plate width eliminates the need to assess deeper compressible layers"
            },
            {
              "key": "c",
              "text": "Testing is possible, but design must assess the changed groundwater condition"
            },
            {
              "key": "d",
              "text": "The measured curve already covers every possible future groundwater level"
            }
          ],
          "answer": "c",
          "explanation": "A test can be carried out with groundwater below the plate, subject to safe excavation and procedure. Its response represents the tested stress, geometry and groundwater conditions; scale effects, depth of influence and seasonal changes limit direct extrapolation.<p>Source note: Page 7 point 50 does not establish groundwater independence of a plate-test interpretation.</p><p>Capsule 4th ed., p. 7; topic 2 point 50.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 50",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n50"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00058",
          "src": "CAP4-02-00058",
          "text": "A footing is 2 m wide. In the conventional linear water-table correction over one footing width below its base, water lies 1 m below the base, gamma = 18 and gamma' = 10 kN/m<sup>3</sup>. Which average unit weight enters the N_gamma term?",
          "options": [
            {
              "key": "a",
              "text": "28 kN/m<sup>3</sup>"
            },
            {
              "key": "b",
              "text": "14 kN/m<sup>3</sup>"
            },
            {
              "key": "c",
              "text": "10 kN/m<sup>3</sup>"
            },
            {
              "key": "d",
              "text": "18 kN/m<sup>3</sup>"
            }
          ],
          "answer": "b",
          "explanation": "Half of the conventional B-deep zone is above water and half below: gamma_eff = 10 + (1/2)(18 - 10) = 14 kN/m<sup>3</sup>. This is an approximate interpolation for the unit-weight term, not a sharp physical cutoff on all groundwater effects.<p>Source note: Page 7 point 54 is qualified as a conventional correction range, not a universal boundary of the failure mechanism.</p><p>Capsule 4th ed., p. 7; topic 2 point 54.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 54",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n54"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00059",
          "src": "CAP4-02-00059",
          "text": "Groundwater rises from below a footing base to above it. In a drained bearing-capacity calculation, which terms need reconsideration?",
          "options": [
            {
              "key": "a",
              "text": "Effective overburden at the base and the soil unit-weight term"
            },
            {
              "key": "b",
              "text": "Only the cohesion term, leaving surcharge and unit weight unchanged"
            },
            {
              "key": "c",
              "text": "Only the footing plan area, leaving effective stresses unchanged"
            },
            {
              "key": "d",
              "text": "Only the safety factor, leaving all ultimate-capacity inputs unchanged"
            }
          ],
          "answer": "a",
          "explanation": "Water above the base changes effective surcharge and the effective unit weight in the failure zone. A correction below the base concerns chiefly the N_gamma term; it does not remove the need to evaluate base-level effective overburden when water rises higher.<p>Capsule 4th ed., p. 7; topic 2 point 54.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 54",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n54"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00061",
          "src": "CAP4-02-00061",
          "text": "A plate test on homogeneous undrained clay gives ultimate bearing pressure 400 kPa. For a geometrically comparable 2 m square footing, assume the same pressure capacity and ignore embedment differences. What is its ultimate load?",
          "options": [
            {
              "key": "a",
              "text": "100 kN"
            },
            {
              "key": "b",
              "text": "1600 kN"
            },
            {
              "key": "c",
              "text": "400 kN"
            },
            {
              "key": "d",
              "text": "800 kN"
            }
          ],
          "answer": "b",
          "explanation": "Under the stated ideal clay scaling, ultimate pressure is unchanged, not ultimate load. The footing area is 2 times 2 = 4 m<sup>2</sup>, so Qu = qu A = 400(4) = 1600 kN. Settlement and stratification still require separate assessment.<p>Source note: Page 7 point 56&#39;s equality refers to bearing pressures under comparable conditions, not identical total failure loads.</p><p>Capsule 4th ed., p. 7; topic 2 point 56.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 7; topic 2 point 56",
            "pages": [
              7
            ],
            "points": [
              "capsule-t02-p007-n56"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00064",
          "src": "CAP4-02-00064",
          "text": "For comparable shallow foundations on homogeneous sand, use the approximate surface-footing pressure scaling quf/qup = Bf/Bp. A 0.5 m plate fails at 150 kPa; what pressure is estimated for Bf = 2 m?",
          "options": [
            {
              "key": "a",
              "text": "2400 kPa"
            },
            {
              "key": "b",
              "text": "37.5 kPa"
            },
            {
              "key": "c",
              "text": "600 kPa"
            },
            {
              "key": "d",
              "text": "150 kPa"
            }
          ],
          "answer": "c",
          "explanation": "The supplied approximation gives quf = 150(2/0.5) = 600 kPa. This linear pressure scaling follows a dominant width-dependent bearing term; it is not an exact general plate-test law for layered ground, differing embedment or settlement prediction.<p>Source note: Page 8 point 59 has ambiguous fraction order; Bf/Bp is used with explicit limited assumptions.</p><p>Capsule 4th ed., p. 8; topic 2 point 59.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 59",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n59"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00087",
          "src": "CAP4-02-00087",
          "text": "A calculation combines Terzaghi's original rough-strip footing construction with a central-wedge angle taken from a Prandtl-type mechanism. Which distinction should be checked?",
          "options": [
            {
              "key": "a",
              "text": "Terzaghi uses phi; the Prandtl-type angle is 45 + phi/2 to horizontal"
            },
            {
              "key": "b",
              "text": "Both models require a central-wedge angle of 45 degrees for all soils"
            },
            {
              "key": "c",
              "text": "Both models require a central-wedge angle equal to twice phi"
            },
            {
              "key": "d",
              "text": "Terzaghi uses 45 + phi/2; the Prandtl-type angle is phi to horizontal"
            }
          ],
          "answer": "a",
          "explanation": "The nearby audited foundation notes distinguish Terzaghi's original wedge faces at phi to horizontal from Prandtl-type constructions at 45 + phi/2. A failure-plane relation cannot be transferred between assumed mechanisms without checking the model.<p>Source note: Page 8 point 63: the unqualified &#39;rigid cone&#39; angle is model-dependent. No source image was reviewed; the correction is supported by the existing audited wedge-angle note.</p><p>Capsule 4th ed., p. 8; topic 2 point 63.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 8; topic 2 point 63",
            "pages": [
              8
            ],
            "points": [
              "capsule-t02-p008-n63"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00116",
          "src": "CAP4-02-00116",
          "text": "A project's verified serviceability specification limits total settlement of its isolated footing on sand to 40 mm. The predicted total settlement is 45 mm. What does this comparison establish?",
          "options": [
            {
              "key": "a",
              "text": "The footing passes if shear bearing capacity alone is adequate"
            },
            {
              "key": "b",
              "text": "The stated total-settlement criterion is exceeded by 5 mm"
            },
            {
              "key": "c",
              "text": "The stated total-settlement criterion is met with 5 mm reserve"
            },
            {
              "key": "d",
              "text": "The footing fails by shear because settlement exceeds 40 mm"
            }
          ],
          "answer": "b",
          "explanation": "The prediction exceeds the expressly supplied project limit by 45 - 40 = 5 mm. This establishes a serviceability noncompliance, not proof of shear failure. A settlement value needs a specified structure, foundation type and applicable criterion.<p>Source note: Page 9 point 105 attributes 40 mm to an unspecified IS code. Edition, table and structural category are unverified; 40 mm is supplied here only as a project assumption for comparison.</p><p>Capsule 4th ed., p. 9; topic 2 point 105.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 105",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n105"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00118",
          "src": "CAP4-02-00118",
          "text": "A raft carries uneven column loads over variable soft soil. Can weak soil alone justify a uniform contact-pressure assumption?",
          "options": [
            {
              "key": "a",
              "text": "Yes; a stiff raft enforces uniform pressure rather than compatible movement"
            },
            {
              "key": "b",
              "text": "No; relative stiffness, load layout and ground response must be assessed"
            },
            {
              "key": "c",
              "text": "Yes; equal average soil strength enforces equal contact pressure"
            },
            {
              "key": "d",
              "text": "No; contact pressure must simply follow each column's load proportion"
            }
          ],
          "answer": "b",
          "explanation": "Contact pressure follows soil-structure interaction. Relative rigidity, load layout, stratigraphy and nonlinear yielding influence it; weak soil alone does not specify a unique distribution. Uniform pressure is an analysis idealization that needs justification.<p>Source note: Page 9 point 107&#39;s universal weak-soil pressure claim is rejected.</p><p>Capsule 4th ed., p. 9; topic 2 point 107.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 107",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n107"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00120",
          "src": "CAP4-02-00120",
          "text": "Use classical Terzaghi factors for a strip footing in undrained phi_u = 0 clay. If cu = 20 kPa and total overburden at base level is 40 kPa, what gross ultimate bearing pressure follows?",
          "options": [
            {
              "key": "a",
              "text": "154 kPa"
            },
            {
              "key": "b",
              "text": "78 kPa"
            },
            {
              "key": "c",
              "text": "142.8 kPa"
            },
            {
              "key": "d",
              "text": "114 kPa"
            }
          ],
          "answer": "a",
          "explanation": "For this formulation Nc = 5.7, Nq = 1 and N_gamma = 0. Thus qu = 5.7(20) + 40 = 154 kPa. The net ultimate value is 114 kPa; using 5.14 would mix in another ideal strip formulation.<p>Capsule 4th ed., p. 9; topic 2 point 109.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 109",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n109"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00121",
          "src": "CAP4-02-00121",
          "text": "A preliminary note lists 440 kPa as the bearing capacity of 'soft rock'. What is needed before using a rock-foundation design pressure?",
          "options": [
            {
              "key": "a",
              "text": "Rock-mass characterization and checks for discontinuities, weathering and settlement"
            },
            {
              "key": "b",
              "text": "A neighbouring site's design pressure adopted without comparing jointing and weathering"
            },
            {
              "key": "c",
              "text": "The structural service load divided by area and treated as the allowable ground pressure"
            },
            {
              "key": "d",
              "text": "An intact-fragment compression value adopted directly as the allowable rock-mass pressure"
            }
          ],
          "answer": "a",
          "explanation": "Rock-mass performance depends on joints, weathering, weak seams, orientation, confinement and deformation, not merely a soft-rock label. A presumptive pressure requires an applicable source and conditions; it is not an intrinsic material constant.<p>Source note: Page 9 point 110&#39;s 440 kPa is unverified. Nearby audited notes also reject an unqualified soft-rock presumptive value rather than endorsing a replacement number.</p><p>Capsule 4th ed., p. 9; topic 2 point 110.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 110",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n110"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00122",
          "src": "CAP4-02-00122",
          "text": "Use classical Terzaghi's square-footing equation with c' = 10 kPa, phi' = 20 degrees, effective base surcharge q' = 18 kPa, gamma = 18 kN/m<sup>3</sup> and B = 2 m. Groundwater is well below the failure zone. Using rounded factors Nc = 17.7, Nq = 7.4 and N_gamma = 5, what gross ultimate pressure follows?",
          "options": [
            {
              "key": "a",
              "text": "382.2 kPa"
            },
            {
              "key": "b",
              "text": "417.3 kPa"
            },
            {
              "key": "c",
              "text": "435.3 kPa"
            },
            {
              "key": "d",
              "text": "453.3 kPa"
            }
          ],
          "answer": "c",
          "explanation": "For a square footing, qu = 1.3c'Nc + q'Nq + 0.4 gamma B N_gamma. The terms are 230.1, 133.2 and 72 kPa, giving 435.3 kPa. The factors belong to one rounded classical 20-degree row; using a circular or strip shape coefficient changes the result.<p>Capsule 4th ed., p. 9; topic 2 point 111.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 111",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n111"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00123",
          "src": "CAP4-02-00123",
          "text": "Under the limited homogeneous-sand approximation quf/qup = Bf/Bp, geometrically similar square footing width is three times plate width. What is the ratio of ultimate total loads?",
          "options": [
            {
              "key": "a",
              "text": "9"
            },
            {
              "key": "b",
              "text": "27"
            },
            {
              "key": "c",
              "text": "1"
            },
            {
              "key": "d",
              "text": "3"
            }
          ],
          "answer": "b",
          "explanation": "Ultimate pressure increases by a factor of 3 under the stated approximation, while plan area increases by 3 squared = 9. Therefore ultimate total load increases by 3 times 9 = 27. Pressure scaling and total-load scaling are different.<p>Source note: Page 9 point 112 repeats the approximate sand pressure-width relation; this question separately tests its pressure-versus-load implication under explicit similarity assumptions.</p><p>Capsule 4th ed., p. 9; topic 2 point 112.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 112",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n112"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00124",
          "src": "CAP4-02-00124",
          "text": "Two sites have the same median sand grain size but different density, groundwater and footing shape. Can equal bearing capacity be inferred from grain size alone?",
          "options": [
            {
              "key": "a",
              "text": "Yes; footing shape affects settlement but never bearing resistance"
            },
            {
              "key": "b",
              "text": "No; strength, stress conditions and footing geometry also affect capacity"
            },
            {
              "key": "c",
              "text": "Yes; median grain size uniquely determines every bearing factor"
            },
            {
              "key": "d",
              "text": "No; only the weight of the building determines soil capacity"
            }
          ],
          "answer": "b",
          "explanation": "Particle size is only part of the soil description. Density and fabric influence strength; groundwater changes effective stress, while footing width, shape and embedment influence the failure mechanism. Grain size alone cannot determine bearing pressure.<p>Capsule 4th ed., p. 9; topic 2 point 113.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 113",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n113"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00125",
          "src": "CAP4-02-00125",
          "text": "For ideal surface strip footings on the same homogeneous cohesionless soil, c' = 0 and surcharge is zero. In qu = 0.5 gamma B N_gamma, what happens to ultimate pressure when B doubles with all other inputs fixed?",
          "options": [
            {
              "key": "a",
              "text": "It doubles"
            },
            {
              "key": "b",
              "text": "It halves"
            },
            {
              "key": "c",
              "text": "It quadruples"
            },
            {
              "key": "d",
              "text": "It remains unchanged"
            }
          ],
          "answer": "a",
          "explanation": "Under the explicitly stated model, qu is proportional to B, so doubling width doubles pressure capacity. This demonstrates a footing-size effect. Total load also depends on area; a different shape requires its corresponding shape coefficients.<p>Capsule 4th ed., p. 9; topic 2 point 113.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 113",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n113"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00126",
          "src": "CAP4-02-00126",
          "text": "Which unit-weight term belongs to the classical Terzaghi circular-footing pressure equation when B denotes footing diameter?",
          "options": [
            {
              "key": "a",
              "text": "0.5 gamma B N_gamma"
            },
            {
              "key": "b",
              "text": "0.3 gamma N_gamma"
            },
            {
              "key": "c",
              "text": "0.4 gamma B N_gamma"
            },
            {
              "key": "d",
              "text": "0.3 gamma B N_gamma"
            }
          ],
          "answer": "d",
          "explanation": "The circular expression is qu = 1.3cNc + qNq + 0.3 gamma B N_gamma. Multiplying unit weight by diameter is necessary to produce pressure units. The 0.4 and 0.5 coefficients belong to the classical square and strip forms respectively.<p>Source note: Page 9 point 114 omits footing diameter B from the unit-weight term, making its printed/extracted expression dimensionally inconsistent.</p><p>Capsule 4th ed., p. 9; topic 2 point 114.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 114",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n114"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00127",
          "src": "CAP4-02-00127",
          "text": "For a circular footing use c' = 10 kPa, phi' = 20 degrees, effective base surcharge q' = 18 kPa, gamma = 18 kN/m<sup>3</sup> and diameter B = 2 m. Groundwater is well below the failure zone. Using rounded classical Terzaghi factors Nc = 17.7, Nq = 7.4 and N_gamma = 5, what gross ultimate pressure follows?",
          "options": [
            {
              "key": "a",
              "text": "435.3 kPa"
            },
            {
              "key": "b",
              "text": "364.2 kPa"
            },
            {
              "key": "c",
              "text": "390.3 kPa"
            },
            {
              "key": "d",
              "text": "417.3 kPa"
            }
          ],
          "answer": "d",
          "explanation": "The cohesive contribution is 1.3(10)(17.7) = 230.1 kPa; surcharge contributes 18(7.4) = 133.2 kPa. The circular unit-weight term is 0.3(18)(2)(5) = 54 kPa. Total qu = 230.1 + 133.2 + 54 = 417.3 kPa, using the supplied rounded factors consistently.<p>Capsule 4th ed., p. 9; topic 2 point 114.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 114",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n114"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00129",
          "src": "CAP4-02-00129",
          "text": "Net ultimate bearing capacity is 450 kPa and the specified shear safety factor is 3. The net pressure meeting settlement requirements is 110 kPa. What net allowable pressure governs?",
          "options": [
            {
              "key": "a",
              "text": "150 kPa"
            },
            {
              "key": "b",
              "text": "260 kPa"
            },
            {
              "key": "c",
              "text": "36.7 kPa"
            },
            {
              "key": "d",
              "text": "110 kPa"
            }
          ],
          "answer": "d",
          "explanation": "Net shear-safe pressure is 450/3 = 150 kPa. The settlement limit is lower, so the governing net allowable pressure is min(150,110) = 110 kPa. Use matching net or gross bases and do not apply the shear safety factor again to the settlement limit.<p>Capsule 4th ed., p. 9; topic 2 point 116.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 116",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n116"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00132",
          "src": "CAP4-02-00132",
          "text": "Using the common Terzaghi rectangular shape interpolation, which expression gives net ultimate bearing pressure for width B, length L and base overburden q?",
          "options": [
            {
              "key": "a",
              "text": "(1 + 0.3B/L)cNc + q(Nq - 1) + 0.5 gamma B N_gamma(1 + 0.2B/L)"
            },
            {
              "key": "b",
              "text": "(1 + 0.3B/L)cNc + qNq + 0.5 gamma B N_gamma(1 - 0.2B/L)"
            },
            {
              "key": "c",
              "text": "(1 + 0.3B/L)cNc + q(Nq - 1) + 0.5 gamma B N_gamma(1 - 0.2B/L)"
            },
            {
              "key": "d",
              "text": "(1 - 0.3B/L)cNc + q(Nq - 1) + 0.5 gamma B N_gamma(1 - 0.2B/L)"
            }
          ],
          "answer": "c",
          "explanation": "Net capacity subtracts q from the gross expression, producing q(Nq - 1). The cohesive factor is 1 + 0.3B/L and the unit-weight factor is 1 - 0.2B/L. At B/L = 1 these recover square coefficients 1.3 and 0.4; at B/L approaching zero they recover strip coefficients.<p>Source note: Page 9 point 119 has a plus sign and a detached shape term where the common interpolation requires multiplication by 1 - 0.2B/L. This is a stated textbook interpolation, not a current-code design prescription.</p><p>Capsule 4th ed., p. 9; topic 2 point 119.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 119",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n119"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00133",
          "src": "CAP4-02-00133",
          "text": "Use the common Terzaghi rectangular net-capacity interpolation with B/L = 0.5, cNc = 200 kPa, q = 18 kPa, Nq = 10 and 0.5 gamma B N_gamma = 90 kPa. What net ultimate pressure follows?",
          "options": [
            {
              "key": "a",
              "text": "413 kPa"
            },
            {
              "key": "b",
              "text": "473 kPa"
            },
            {
              "key": "c",
              "text": "509 kPa"
            },
            {
              "key": "d",
              "text": "491 kPa"
            }
          ],
          "answer": "b",
          "explanation": "The cohesive term is (1 + 0.3 times 0.5)(200) = 230 kPa. Net surcharge is 18(10 - 1) = 162 kPa. The unit-weight contribution is 90(1 - 0.2 times 0.5) = 81 kPa. Sum = 473 kPa; adding 18 gives gross pressure 491 kPa.<p>Capsule 4th ed., p. 9; topic 2 point 119.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 9; topic 2 point 119",
            "pages": [
              9
            ],
            "points": [
              "capsule-t02-p009-n119"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00144",
          "src": "CAP4-02-00144",
          "text": "A footing on relatively compressible sand develops progressive settlement and partial rupture zones without a distinct peak or a complete surface-reaching mechanism. Which bearing failure mode best matches?",
          "options": [
            {
              "key": "a",
              "text": "Interface sliding without a bearing rupture mechanism"
            },
            {
              "key": "b",
              "text": "Local shear failure"
            },
            {
              "key": "c",
              "text": "Punching bearing failure with shear confined near the footing perimeter"
            },
            {
              "key": "d",
              "text": "General shear failure"
            }
          ],
          "answer": "b",
          "explanation": "Local shear involves partial development of the bearing mechanism and progressive large settlement. General shear has more continuous rupture and a clearer peak; very compressible soils may instead show punching with little heave. Relative density alone does not fix the mode.<p>Source note: Page 10 point 128&#39;s &#39;loose soil means local shear&#39; is qualified by the observed mechanism; very loose ground can punch.</p><p>Capsule 4th ed., p. 10; topic 2 point 128.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 128",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n128"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00145",
          "src": "CAP4-02-00145",
          "text": "A verified project criterion allows 65 mm total settlement for a particular isolated footing on clay. Predicted total settlement is 60 mm, but differential-settlement checks are not yet done. What can be concluded?",
          "options": [
            {
              "key": "a",
              "text": "The 5 mm reserve is the permissible differential settlement"
            },
            {
              "key": "b",
              "text": "Every foundation serviceability check automatically passes"
            },
            {
              "key": "c",
              "text": "The total-settlement check fails by 5 mm"
            },
            {
              "key": "d",
              "text": "The total-settlement check passes, but overall serviceability is not yet established"
            }
          ],
          "answer": "d",
          "explanation": "The supplied total limit exceeds the prediction by 65 - 60 = 5 mm. Differential movement, angular distortion and other project requirements still need checking. Passing a total-settlement limit is not equivalent to a complete serviceability approval.<p>Source note: Page 10 point 129 gives 65 mm under an unspecified IS code. Its edition, table and structural category remain unverified; the value is a stated project assumption here, not a claimed universal current limit.</p><p>Capsule 4th ed., p. 10; topic 2 point 129.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 129",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n129"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00154",
          "src": "CAP4-02-00154",
          "text": "Matched plate tests at 120 kPa give 6 mm settlement before groundwater rises and 12 mm afterward. What secant subgrade-reaction moduli follow, and does the result support groundwater independence?",
          "options": [
            {
              "key": "a",
              "text": "20000 then 10000 kN/m<sup>3</sup>; no"
            },
            {
              "key": "b",
              "text": "20000 then 40000 kN/m<sup>3</sup>; no"
            },
            {
              "key": "c",
              "text": "20 then 10 kN/m<sup>3</sup>; no"
            },
            {
              "key": "d",
              "text": "20000 then 20000 kN/m<sup>3</sup>; yes"
            }
          ],
          "answer": "a",
          "explanation": "ks = pressure/settlement gives 120/0.006 = 20000 and 120/0.012 = 10000 kN/m<sup>3</sup>. The supplied observations contradict independence. Groundwater can alter effective stress and stiffness, but these invented test results do not imply a universal halving rule.<p>Source note: Page 10 point 136&#39;s claim of water-table independence is corrected.</p><p>Capsule 4th ed., p. 10; topic 2 point 136.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 136",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n136"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00155",
          "src": "CAP4-02-00155",
          "text": "An overconsolidated clay is reloaded, but final effective stress remains below its preconsolidation stress. Which compression behavior is generally expected relative to virgin loading of a comparable normally consolidated clay?",
          "options": [
            {
              "key": "a",
              "text": "Virgin compression even though past maximum stress is not exceeded"
            },
            {
              "key": "b",
              "text": "Higher compressibility solely because OCR exceeds one"
            },
            {
              "key": "c",
              "text": "Lower compressibility along the recompression branch"
            },
            {
              "key": "d",
              "text": "Exactly zero settlement regardless of stress increment"
            }
          ],
          "answer": "c",
          "explanation": "Reloading below preconsolidation stress generally follows a stiffer recompression branch and produces less settlement for a comparable stress increment. If loading exceeds the past maximum, virgin compression contributes; overconsolidation alone does not guarantee a small total settlement.<p>Source note: Page 10 point 137&#39;s lower-settlement claim is conditional on comparable soils and the loading interval relative to preconsolidation stress.</p><p>Capsule 4th ed., p. 10; topic 2 point 137.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 137",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n137"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00157",
          "src": "CAP4-02-00157",
          "text": "A designer doubles the centred vertical service load on an unchanged footing while retaining the same soil parameters and drainage model. Which statement distinguishes demand from ideal bearing resistance?",
          "options": [
            {
              "key": "a",
              "text": "Net ultimate pressure must rise by the increase in service contact pressure"
            },
            {
              "key": "b",
              "text": "Applied pressure is unchanged because footing width is unchanged"
            },
            {
              "key": "c",
              "text": "Ultimate soil resistance must double to equal the new applied pressure"
            },
            {
              "key": "d",
              "text": "Applied pressure rises; the model's resistance is not defined by that demand"
            }
          ],
          "answer": "d",
          "explanation": "For unchanged area, applied pressure P/A doubles, reducing the safety margin if resistance inputs are unchanged. Bearing capacity is resistance, not the imposed demand. Loading inclination, eccentricity, history or rate can alter the capacity model and cannot be ignored in a broader claim.<p>Source note: Page 10 point 139 is qualified: the current load magnitude is distinct from resistance, but loading conditions can affect bearing capacity.</p><p>Capsule 4th ed., p. 10; topic 2 point 139.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 139",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n139"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00158",
          "src": "CAP4-02-00158",
          "text": "Some design guidance permits a larger total settlement for a raft on clay than for an isolated footing. What is the defensible interpretation?",
          "options": [
            {
              "key": "a",
              "text": "Greater tolerance of uniform movement, subject to distortion limits"
            },
            {
              "key": "b",
              "text": "Automatic acceptance of any differential movement below the total limit"
            },
            {
              "key": "c",
              "text": "A larger ultimate bearing capacity established by the settlement limit"
            },
            {
              "key": "d",
              "text": "Elimination of differential movement by choosing a raft foundation"
            }
          ],
          "answer": "a",
          "explanation": "Acceptable movement depends on structural form, rigidity, services and differential distortion. A raft may redistribute loads and tolerate a larger total movement in a specified category, but this is not a universal permission or proof that its actual settlement will be small.<p>Source note: Page 10 point 140 gives no code, edition or structural category; only the conditional serviceability principle is tested.</p><p>Capsule 4th ed., p. 10; topic 2 point 140.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 140",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n140"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00159",
          "src": "CAP4-02-00159",
          "text": "Under a shallow footing in approximately homogeneous ground, which behavior is most characteristic of punching bearing failure?",
          "options": [
            {
              "key": "a",
              "text": "Concrete cone failure around a column with the soil remaining elastic"
            },
            {
              "key": "b",
              "text": "Large penetration with localized side shearing and little surface heave"
            },
            {
              "key": "c",
              "text": "A distinct peak with a continuous rupture surface and pronounced heave"
            },
            {
              "key": "d",
              "text": "Pure horizontal slip with no vertical footing movement"
            }
          ],
          "answer": "b",
          "explanation": "Soil punching involves penetration into highly compressible ground with limited surface disturbance. Dense sand or stiff clay commonly shows general shear in a shallow homogeneous case, although embedment or a strong layer over weak soil can change the mode. Soil punching is distinct from structural punching of the footing slab.<p>Source note: Page 10 point 141&#39;s dense-sand/stiff-clay association is not a reliable general classification; special stratification or embedment can permit punching and must be stated.</p><p>Capsule 4th ed., p. 10; topic 2 point 141.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 141",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n141"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00163",
          "src": "CAP4-02-00163",
          "text": "Use the elastic half-space estimate Si = qB(1 - nu^2)I/Es. For q = 100 kPa, B = 2 m, nu = 0.30, I = 1.0 and Es = 20000 kPa, what immediate settlement follows?",
          "options": [
            {
              "key": "a",
              "text": "9.1 mm"
            },
            {
              "key": "b",
              "text": "10.9 mm"
            },
            {
              "key": "c",
              "text": "10.0 mm"
            },
            {
              "key": "d",
              "text": "91.0 mm"
            }
          ],
          "answer": "a",
          "explanation": "Si = 100(2)(1 - 0.30^2)(1)/20000 = 0.0091 m = 9.1 mm. Using 1 + nu^2 gives the wrong 10.9 mm. The influence factor and modulus must match geometry, rigidity, drainage and the strain range of the chosen model.<p>Source note: Page 10 point 144 has a damaged factor shown as 1 + mu^2 and omits the defined influence factor. The standard elastic expression uses 1 - nu^2; all inputs are supplied explicitly.</p><p>Capsule 4th ed., p. 10; topic 2 point 144.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 144",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n144"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00164",
          "src": "CAP4-02-00164",
          "text": "A rigid rectangular footing is 3 m long and 2 m wide, with vertical load 900 kN and moment 180 kN m causing pressure variation across its width. Assuming linear full contact, what are maximum and minimum pressures?",
          "options": [
            {
              "key": "a",
              "text": "300 kPa and 0 kPa"
            },
            {
              "key": "b",
              "text": "240 kPa and 60 kPa"
            },
            {
              "key": "c",
              "text": "150 kPa and 150 kPa"
            },
            {
              "key": "d",
              "text": "180 kPa and 120 kPa"
            }
          ],
          "answer": "b",
          "explanation": "Eccentricity e = M/P = 180/900 = 0.20 m, within B/6 = 0.333 m. Mean pressure is 900/(3 times 2) = 150 kPa. Extremes are 150[1 +/- 6(0.20)/2], giving 240 and 60 kPa; moment makes loading eccentric.<p>Capsule 4th ed., p. 10; topic 2 point 145.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 145",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n145"
            ]
          },
          "topic": "ACiE0206",
          "kind": "calculation"
        },
        {
          "id": "CAP4-02-00165",
          "src": "CAP4-02-00165",
          "text": "For a no-tension soil contact, a footing's load eccentricity exceeds B/6 in the bending direction. What does a negative minimum pressure from the linear full-contact formula indicate?",
          "options": [
            {
              "key": "a",
              "text": "Use the absolute value of the negative pressure as extra bearing resistance"
            },
            {
              "key": "b",
              "text": "Set the negative edge pressure to zero while retaining the original maximum"
            },
            {
              "key": "c",
              "text": "Ignore the moment and use mean pressure over the full footing area"
            },
            {
              "key": "d",
              "text": "Recalculate a compression-only contact area satisfying force and moment balance"
            }
          ],
          "answer": "d",
          "explanation": "The middle-third condition keeps the linear pressure diagram nonnegative. Beyond it, the full-contact formula predicts tension, which ordinary soil contact cannot sustain. The compression-only contact area and corresponding pressures must be re-evaluated.<p>Capsule 4th ed., p. 10; topic 2 point 145.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 145",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n145"
            ]
          },
          "topic": "ACiE0206",
          "kind": "application"
        }
      ]
    }
  ]
};
