window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["capsule-07"] = {
  "title": "NEC Quick Revision Capsule - Irrigation and Drainage",
  "negativeMarking": 0,
  "chapters": [
    {
      "id": "ACiE0701",
      "name": "Water demand estimation",
      "subject": "Irrigation and Drainage",
      "questions": [
        {
          "id": "CAP4-03-00095",
          "src": "CAP4-03-00095",
          "text": "For crop irrigation scheduling, which part of rainfall is termed effective rainfall?",
          "options": [
            {
              "key": "a",
              "text": "The portion immediately lost as surface runoff"
            },
            {
              "key": "b",
              "text": "The entire gauge total regardless of deep drainage"
            },
            {
              "key": "c",
              "text": "Only the rainfall exceeding infiltration capacity"
            },
            {
              "key": "d",
              "text": "The portion available to meet crop evapotranspiration needs"
            }
          ],
          "answer": "d",
          "explanation": "Agricultural effective rainfall is the usable contribution to crop water needs after relevant losses and storage constraints. It differs from hydrologic effective rainfall or rainfall excess, which commonly means the portion producing direct runoff.<p>Source note: p13 n94 uses the irrigation meaning; distinguish it explicitly from unit-hydrograph rainfall excess.</p><p>Capsule 4th ed., p. 13; topic 3 point 94.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 13; topic 3 point 94",
            "pages": [
              13
            ],
            "points": [
              "capsule-t03-p013-n94"
            ]
          },
          "topic": "ACiE0701",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00001",
          "src": "CAP4-07-00001",
          "text": "A crop needs a total irrigation depth of 0.72 m over a 90-day base period, with continuous supply and no losses at the stated boundary. What is its duty?",
          "options": [
            {
              "key": "a",
              "text": "10.8 ha/cumec"
            },
            {
              "key": "b",
              "text": "1080 ha/cumec"
            },
            {
              "key": "c",
              "text": "777.6 ha/cumec"
            },
            {
              "key": "d",
              "text": "125 ha/cumec"
            }
          ],
          "answer": "b",
          "explanation": "One cumec supplies 86400 cubic metres per day. Dividing volume by depth and converting square metres to hectares gives D = 8.64B/delta = 8.64 x 90/0.72 = 1080 ha/cumec. The source's bare B/delta omits the unit-conversion factor.<p>Source note: Page 27 point 1: duty is proportional to B/delta, not numerically equal in the stated conventional units.</p><p>Capsule 4th ed., p. 27; topic 7 point 1.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 1",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n1"
            ]
          },
          "topic": "ACiE0701",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00002",
          "src": "CAP4-07-00002",
          "text": "A crop is sown on day 0, first irrigated on day 8, last irrigated on day 98 and harvested on day 112. What are its crop period and irrigation base period, respectively?",
          "options": [
            {
              "key": "a",
              "text": "104 days and 98 days"
            },
            {
              "key": "b",
              "text": "112 days and 90 days"
            },
            {
              "key": "c",
              "text": "112 days and 98 days"
            },
            {
              "key": "d",
              "text": "98 days and 90 days"
            }
          ],
          "answer": "b",
          "explanation": "The crop period extends from sowing to harvesting: 112 - 0 = 112 days. The base period here extends from the first to the last counted irrigation: 98 - 8 = 90 days. The two periods have different endpoints.<p>Capsule 4th ed., p. 27; topic 7 point 2.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 2",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n2"
            ]
          },
          "topic": "ACiE0701",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00003",
          "src": "CAP4-07-00003",
          "text": "A farmer compares established lowland rice with wheat, tobacco and chickpea for a field managed under shallow ponding. Which crop is generally best adapted to this condition?",
          "options": [
            {
              "key": "a",
              "text": "Bread wheat"
            },
            {
              "key": "b",
              "text": "Chickpea"
            },
            {
              "key": "c",
              "text": "Lowland rice"
            },
            {
              "key": "d",
              "text": "Flue-cured tobacco"
            }
          ],
          "answer": "c",
          "explanation": "Lowland rice has adaptations, including internal air spaces that aid root aeration, for flooded cultivation. This is tolerance of shallow ponding, not drought resistance or unlimited survival under complete submergence; variety and growth stage still matter.<p>Source note: Page 27 point 3: &#39;highest water resistance&#39; is undefined. The corrected question explicitly tests ordinary shallow-ponding tolerance among named crops, not a universal resistance ranking.</p><p>Capsule 4th ed., p. 27; topic 7 point 3.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 3",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n3"
            ]
          },
          "topic": "ACiE0701",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00004",
          "src": "CAP4-07-00004",
          "text": "The same 800 ha receives 0.8 cumec at the field inlet after 20% of the canal-head flow is lost in conveyance. What are the field-inlet and canal-head duties, respectively?",
          "options": [
            {
              "key": "a",
              "text": "1000 and 800 ha/cumec"
            },
            {
              "key": "b",
              "text": "640 and 800 ha/cumec"
            },
            {
              "key": "c",
              "text": "800 and 1000 ha/cumec"
            },
            {
              "key": "d",
              "text": "1000 and 1250 ha/cumec"
            }
          ],
          "answer": "a",
          "explanation": "Canal-head flow is 0.8/0.8 = 1.0 cumec. Since duty is A/Q, the two duties are 800/0.8 = 1000 and 800/1 = 800 ha/cumec. For the same area and period, losses make upstream duty lower, not higher.<p>Source note: Page 27 point 4: compare the same area and time boundary; unrelated fields or branches cannot be ranked merely by location.</p><p>Capsule 4th ed., p. 27; topic 7 point 4.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 4",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n4"
            ]
          },
          "topic": "ACiE0701",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00005",
          "src": "CAP4-07-00005",
          "text": "A water budget assigns seasonal irrigation depths of 1.8 m to sugarcane, 1.2 m to rice, 0.5 m to wheat and 0.4 m to tobacco. For equal 10 ha areas, which allocation is largest?",
          "options": [
            {
              "key": "a",
              "text": "Wheat: 50000 cubic metres"
            },
            {
              "key": "b",
              "text": "Tobacco: 40000 cubic metres"
            },
            {
              "key": "c",
              "text": "Sugarcane: 180000 cubic metres"
            },
            {
              "key": "d",
              "text": "Rice: 120000 cubic metres"
            }
          ],
          "answer": "c",
          "explanation": "Volume equals depth times area. Ten hectares is 100000 square metres, so sugarcane needs 1.8 x 100000 = 180000 cubic metres, the largest of these stated allocations. A long crop duration can produce a high total without the highest daily demand.<p>Source note: Page 27 point 5: depths are explicit illustrative planning inputs, not universal crop constants or a verified global maximum.</p><p>Capsule 4th ed., p. 27; topic 7 point 5.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 5",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n5"
            ]
          },
          "topic": "ACiE0701",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00006",
          "src": "CAP4-07-00006",
          "text": "After heavy irrigation, water drains from large connected pores while more tightly retained pore water remains. How is the rapidly draining fraction conventionally classified?",
          "options": [
            {
              "key": "a",
              "text": "Gravitational water"
            },
            {
              "key": "b",
              "text": "Chemically bound water"
            },
            {
              "key": "c",
              "text": "Residual capillary water"
            },
            {
              "key": "d",
              "text": "Hygroscopic water"
            }
          ],
          "answer": "a",
          "explanation": "Gravitational water is the drainable fraction that moves mainly under gravity after wetting. It is not a reliable long-term reserve, although roots may use some before it drains. Hygroscopic films are much more tightly held.<p>Capsule 4th ed., p. 27; topic 7 point 6.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 6",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n6"
            ]
          },
          "topic": "ACiE0701",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00007",
          "src": "CAP4-07-00007",
          "text": "A soil still contains capillary-held water after its crop reaches permanent wilting. What does this show about plant availability?",
          "options": [
            {
              "key": "a",
              "text": "Permanent wilting requires the complete absence of pore water"
            },
            {
              "key": "b",
              "text": "Every capillary-held fraction remains freely available"
            },
            {
              "key": "c",
              "text": "Capillary water becomes gravitational water at wilting"
            },
            {
              "key": "d",
              "text": "Some capillary water is held too tightly for effective uptake"
            }
          ],
          "answer": "d",
          "explanation": "Capillary retention describes a physical mechanism, not a guarantee of extractability. Much useful soil moisture is capillary-held, but roots cannot recover all of it as matric suction increases. Field capacity and wilting content delimit the conventional available reservoir.<p>Source note: Page 27 point 7: qualified the blanket claim that capillary water is usable.</p><p>Capsule 4th ed., p. 27; topic 7 point 7.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 7",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n7"
            ]
          },
          "topic": "ACiE0701",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00008",
          "src": "CAP4-07-00008",
          "text": "A uniform 0.60 m root zone has volumetric field capacity 0.32 and permanent wilting content 0.17. What is its total available water depth?",
          "options": [
            {
              "key": "a",
              "text": "102 mm"
            },
            {
              "key": "b",
              "text": "192 mm"
            },
            {
              "key": "c",
              "text": "90 mm"
            },
            {
              "key": "d",
              "text": "150 mm"
            }
          ],
          "answer": "c",
          "explanation": "Total available water is 1000(0.32 - 0.17) x 0.60 = 90 mm. The moisture difference is a volumetric fraction; multiplying by root depth converts it to stored water depth. Water remaining at wilting is excluded.<p>Source note: Page 27 points 8 and 11 state the same FC-minus-PWP fact and are deliberately covered together.</p><p>Capsule 4th ed., p. 27; topic 7 point 8; topic 7 point 11.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 8; topic 7 point 11",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n8",
              "capsule-t07-p027-n11"
            ]
          },
          "topic": "ACiE0701",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00009",
          "src": "CAP4-07-00009",
          "text": "At static equilibrium in an unloaded, isothermal soil, water stands in a fine wettable pore above a connected water table. Which mechanism supports this rise?",
          "options": [
            {
              "key": "a",
              "text": "Positive hydrostatic pressure above the water table"
            },
            {
              "key": "b",
              "text": "Capillary suction at the curved wetting meniscus"
            },
            {
              "key": "c",
              "text": "Excess pore pressure from rapid soil loading"
            },
            {
              "key": "d",
              "text": "Osmotic pressure across a root-cell membrane"
            }
          ],
          "answer": "b",
          "explanation": "Surface tension and wetting create a curved meniscus and negative pore-water pressure above the connected water table. This capillary suction supports the column. Neither a root membrane nor loading-induced excess pressure is required for this static rise.<p>Capsule 4th ed., p. 27; topic 7 point 9.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 9",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n9"
            ]
          },
          "topic": "ACiE0701",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00010",
          "src": "CAP4-07-00010",
          "text": "Two soils have equal total porosity but different pore-size distributions. Why can their field-capacity water contents differ?",
          "options": [
            {
              "key": "a",
              "text": "Field capacity is simply the fully saturated pore volume"
            },
            {
              "key": "b",
              "text": "Equal porosity requires equal saturated conductivity"
            },
            {
              "key": "c",
              "text": "Total porosity uniquely fixes retained water content"
            },
            {
              "key": "d",
              "text": "Their drainage and capillary retention differ"
            }
          ],
          "answer": "d",
          "explanation": "Large connected pores drain more readily, while smaller pores retain water at greater suction. Thus both pore volume and pore-size distribution, with profile and drainage conditions, influence field capacity. Total porosity alone is insufficient.<p>Capsule 4th ed., p. 27; topic 7 point 10.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 10",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n10"
            ]
          },
          "topic": "ACiE0701",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00011",
          "src": "CAP4-07-00011",
          "text": "A field water account records evaporation of 2 mm/day, transpiration of 4 mm/day and deep percolation of 3 mm/day. Neglecting tissue storage, what is consumptive use?",
          "options": [
            {
              "key": "a",
              "text": "3 mm/day"
            },
            {
              "key": "b",
              "text": "9 mm/day"
            },
            {
              "key": "c",
              "text": "7 mm/day"
            },
            {
              "key": "d",
              "text": "6 mm/day"
            }
          ],
          "answer": "d",
          "explanation": "Consumptive use is approximated here by evapotranspiration: 2 + 4 = 6 mm/day. Deep percolation moves water below the roots but is not atmospheric consumption and may become recoverable groundwater or return flow.<p>Capsule 4th ed., p. 27; topic 7 point 12.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 12",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n12"
            ]
          },
          "topic": "ACiE0701",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00012",
          "src": "CAP4-07-00012",
          "text": "A farm receives runoff during a short storm but needs irrigation several days later. Which facility most directly bridges this timing mismatch?",
          "options": [
            {
              "key": "a",
              "text": "A conveyance flume with negligible storage"
            },
            {
              "key": "b",
              "text": "A diversion intake with negligible pondage"
            },
            {
              "key": "c",
              "text": "A farm pond with usable storage"
            },
            {
              "key": "d",
              "text": "A field drain with unrestricted outflow"
            }
          ],
          "answer": "c",
          "explanation": "A farm pond stores part of the storm inflow for later release. Its useful yield still requires a volume balance allowing for evaporation, seepage and dead storage; a diversion or level-control structure alone does not supply that reserve.<p>Capsule 4th ed., p. 27; topic 7 point 13.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 13",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n13"
            ]
          },
          "topic": "ACiE0701",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00013",
          "src": "CAP4-07-00013",
          "text": "A repeating irrigation schedule changes from one watering every 12 days to one every 6 days. How do interval and frequency change?",
          "options": [
            {
              "key": "a",
              "text": "Interval and frequency both halve"
            },
            {
              "key": "b",
              "text": "Interval and frequency both double"
            },
            {
              "key": "c",
              "text": "Interval halves and frequency doubles"
            },
            {
              "key": "d",
              "text": "Interval doubles and frequency halves"
            }
          ],
          "answer": "c",
          "explanation": "Interval is elapsed time between waterings; frequency is events per unit time. For a regular schedule, frequency is the reciprocal of interval, so reducing 12 days to 6 days doubles the long-run frequency.<p>Source note: Page 27 point 14: interval and frequency describe related scheduling concepts but are not identical quantities.</p><p>Capsule 4th ed., p. 27; topic 7 point 14.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 14",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n14"
            ]
          },
          "topic": "ACiE0701",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00014",
          "src": "CAP4-07-00014",
          "text": "A crop has 120 mm total available root-zone water and a permitted depletion fraction of 0.40. Starting at field capacity with ET of 6 mm/day and no rain, when is irrigation due?",
          "options": [
            {
              "key": "a",
              "text": "After 48 days"
            },
            {
              "key": "b",
              "text": "After 12 days"
            },
            {
              "key": "c",
              "text": "After 8 days"
            },
            {
              "key": "d",
              "text": "After 20 days"
            }
          ],
          "answer": "c",
          "explanation": "Readily available water is 0.40 x 120 = 48 mm. At 6 mm/day it is depleted in 48/6 = 8 days. Field capacity by itself cannot determine an interval: wilting content, root depth, allowable depletion and net demand are also needed.<p>Source note: Page 27 point 15: replaced the incomplete field-capacity/requirement shortcut with an explicit depletion budget.</p><p>Capsule 4th ed., p. 27; topic 7 point 15.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 15",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n15"
            ]
          },
          "topic": "ACiE0701",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00027",
          "src": "CAP4-07-00027",
          "text": "At the same canal-head boundary, Rabi demand is 2.4 cumecs plus concurrent perennial demand of 0.6; Kharif demand is 3.0 plus concurrent perennial demand of 0.8. If seasons do not overlap, what peak capacity is needed?",
          "options": [
            {
              "key": "a",
              "text": "3.8 cumecs"
            },
            {
              "key": "b",
              "text": "6.8 cumecs"
            },
            {
              "key": "c",
              "text": "5.4 cumecs"
            },
            {
              "key": "d",
              "text": "3.0 cumecs"
            }
          ],
          "answer": "a",
          "explanation": "Compare concurrent seasonal totals: Rabi 2.4 + 0.6 = 3.0 and Kharif 3.0 + 0.8 = 3.8 cumecs. The governing peak is 3.8. Adding non-overlapping seasonal demands overstates capacity; ignoring perennials understates it.<p>Capsule 4th ed., p. 27; topic 7 point 27.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 27",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n27"
            ]
          },
          "topic": "ACiE0701",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00029",
          "src": "CAP4-07-00029",
          "text": "A 864 ha block needs 0.14 m net kor watering within 14 days. Overall delivery efficiency is 0.70 and the canal runs continuously. What canal-head discharge is required for this demand alone?",
          "options": [
            {
              "key": "a",
              "text": "1.000 cumec"
            },
            {
              "key": "b",
              "text": "0.700 cumec"
            },
            {
              "key": "c",
              "text": "1.429 cumecs"
            },
            {
              "key": "d",
              "text": "2.041 cumecs"
            }
          ],
          "answer": "c",
          "explanation": "Net volume is 864 x 10000 x 0.14 = 1209600 cubic metres. Fourteen days is 1209600 seconds, giving net flow 1.0 cumec. Canal-head flow is 1/0.70 = 1.429 cumecs; all other coincident demands must still be checked.<p>Source note: Page 27 point 29: kor depth alone is insufficient; area, matched period, efficiency and operating time are supplied. Kharif is not automatically governing for every scheme.</p><p>Capsule 4th ed., p. 27; topic 7 point 29.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 29",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n29"
            ]
          },
          "topic": "ACiE0701",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00031",
          "src": "CAP4-07-00031",
          "text": "A field needs 72 mm stored in its root zone. Application efficiency is 0.80 and conveyance efficiency is 0.90, each on its incoming-water basis. What gross depth must be diverted over the same area?",
          "options": [
            {
              "key": "a",
              "text": "80 mm"
            },
            {
              "key": "b",
              "text": "100 mm"
            },
            {
              "key": "c",
              "text": "90 mm"
            },
            {
              "key": "d",
              "text": "51.84 mm"
            }
          ],
          "answer": "b",
          "explanation": "Overall efficiency is 0.80 x 0.90 = 0.72. Gross diversion depth is 72/0.72 = 100 mm. Applying only one efficiency misses a loss stage; multiplying the net need by efficiency reverses the supply calculation.<p>Capsule 4th ed., p. 27; topic 7 point 31.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 31",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n31"
            ]
          },
          "topic": "ACiE0701",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00104",
          "src": "CAP4-07-00104",
          "text": "A scheme irrigates 2400 ha in Rabi and 1600 ha in Kharif. With crop ratio defined as Rabi area divided by Kharif area, what ratio follows?",
          "options": [
            {
              "key": "a",
              "text": "1.5"
            },
            {
              "key": "b",
              "text": "0.4"
            },
            {
              "key": "c",
              "text": "0.667"
            },
            {
              "key": "d",
              "text": "2.0"
            }
          ],
          "answer": "a",
          "explanation": "The specified crop ratio is 2400/1600 = 1.5, or 3:2. Reversing the order gives 2:3. The ratio depends on the actual cropping programme; neither 2 nor any other fixed value is an inherent law of irrigation.<p>Source note: Page 29 point 105: replaced the unsupported universal ratio of 2 with a defined area calculation.</p><p>Capsule 4th ed., p. 29; topic 7 point 105.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 105",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n105"
            ]
          },
          "topic": "ACiE0701",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00106",
          "src": "CAP4-07-00106",
          "text": "A crop requires its first substantial post-sowing watering during a short, critical establishment window. Which irrigation term refers to this watering requirement?",
          "options": [
            {
              "key": "a",
              "text": "Full-season delta"
            },
            {
              "key": "b",
              "text": "Crop harvesting period"
            },
            {
              "key": "c",
              "text": "Permanent wilting content"
            },
            {
              "key": "d",
              "text": "Kor watering"
            }
          ],
          "answer": "d",
          "explanation": "Kor watering is the initial important watering associated with establishment, to be delivered within the corresponding kor period. Its depth and timing depend on the crop and practice; a plant height of a few centimetres is descriptive, not a universal scheduling trigger.<p>Source note: Page 29 point 108: separated kor watering from an invariant plant-height rule and from pre-sowing or full-season requirements.</p><p>Capsule 4th ed., p. 29; topic 7 point 108.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 108",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n108"
            ]
          },
          "topic": "ACiE0701",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00109",
          "src": "CAP4-07-00109",
          "text": "Over a period, crop ET is 150 mm, total rain is 80 mm and only 50 mm of that rain usefully meets crop demand. With no other contributions, storage change or leaching need, what is net irrigation requirement?",
          "options": [
            {
              "key": "a",
              "text": "70 mm"
            },
            {
              "key": "b",
              "text": "150 mm"
            },
            {
              "key": "c",
              "text": "100 mm"
            },
            {
              "key": "d",
              "text": "230 mm"
            }
          ],
          "answer": "c",
          "explanation": "Under the stated simplified balance, NIR = ET - effective rainfall = 150 - 50 = 100 mm. Subtracting all 80 mm credits runoff or drainage that does not usefully meet crop demand. Upstream gross delivery requires separate loss allowances.<p>Capsule 4th ed., p. 29; topic 7 point 111.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 111",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n111"
            ]
          },
          "topic": "ACiE0701",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00114",
          "src": "CAP4-07-00114",
          "text": "A site's crop-period ET and effective rainfall, respectively, are rice 1.45 and 0.25 m, tobacco 0.70 and 0.20 m, wheat 0.60 and 0.15 m, and banana 1.85 and 0.45 m. Neglect other water-balance terms. Which crop needs the greatest net irrigation delta?",
          "options": [
            {
              "key": "a",
              "text": "Rice, 1.70 m"
            },
            {
              "key": "b",
              "text": "Banana, 1.85 m"
            },
            {
              "key": "c",
              "text": "Rice, 1.20 m"
            },
            {
              "key": "d",
              "text": "Banana, 1.40 m"
            }
          ],
          "answer": "d",
          "explanation": "Subtract effective rainfall from ET over each matched crop period: rice 1.20, tobacco 0.50, wheat 0.45 and banana 1.40 m. Banana governs this stated budget. Using ET alone or adding rainfall gives the distractors; no universal crop-name ranking follows.<p>Source note: Page 29 point 115: original illustrative water budgets replace the unconditional rice-over-banana ranking. These are not source measurements and exclude paddy land preparation, seepage, leaching and storage changes explicitly through the stated simplified balance.</p><p>Capsule 4th ed., p. 29; topic 7 point 115.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 115",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n115"
            ]
          },
          "topic": "ACiE0701",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00119",
          "src": "CAP4-07-00119",
          "text": "Two crops have equally deep root zones but readily available water of 36 mm and 60 mm because of different soil retention. At equal net demand of 6 mm/day and full initial storage, what irrigation intervals follow?",
          "options": [
            {
              "key": "a",
              "text": "6 days and 6 days"
            },
            {
              "key": "b",
              "text": "36 days and 60 days"
            },
            {
              "key": "c",
              "text": "6 days and 10 days"
            },
            {
              "key": "d",
              "text": "10 days and 6 days"
            }
          ],
          "answer": "c",
          "explanation": "With no other water inputs, interval equals available depletion allowance divided by daily demand: 36/6 = 6 days and 60/6 = 10 days. Soil storage changes the interval even when rooting depth and atmospheric demand are equal.<p>Source note: Page 30 point 120, soil factor: isolated storage influence while keeping the other inputs fixed.</p><p>Capsule 4th ed., p. 30; topic 7 point 120.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 30; topic 7 point 120",
            "pages": [
              30
            ],
            "points": [
              "capsule-t07-p030-n120"
            ]
          },
          "topic": "ACiE0701",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00120",
          "src": "CAP4-07-00120",
          "text": "With volumetric available-water difference 0.15 and permitted depletion fraction 0.40, crop A roots to 0.50 m and crop B to 1.00 m. Both use 5 mm/day with no rain. What intervals follow from full storage?",
          "options": [
            {
              "key": "a",
              "text": "5 days for A and 10 days for B"
            },
            {
              "key": "b",
              "text": "12 days for A and 6 days for B"
            },
            {
              "key": "c",
              "text": "15 days for A and 30 days for B"
            },
            {
              "key": "d",
              "text": "6 days for A and 12 days for B"
            }
          ],
          "answer": "d",
          "explanation": "TAW is 1000 x 0.15 x root depth: 75 and 150 mm. The permitted depletion is 0.40 times these amounts, or 30 and 60 mm. Dividing by 5 mm/day gives 6 and 12 days, demonstrating the influence of effective rooting depth.<p>Source note: Page 30 point 120, crop factor: illustrative root depths and depletion fractions are stated, not attached universally to named crops.</p><p>Capsule 4th ed., p. 30; topic 7 point 120.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 30; topic 7 point 120",
            "pages": [
              30
            ],
            "points": [
              "capsule-t07-p030-n120"
            ]
          },
          "topic": "ACiE0701",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00121",
          "src": "CAP4-07-00121",
          "text": "A field has a 48 mm depletion allowance. Hot, dry weather raises daily net crop-water demand from 4 mm to 8 mm, with other inputs unchanged. How should the interval from full storage change?",
          "options": [
            {
              "key": "a",
              "text": "From 6 days to 12 days"
            },
            {
              "key": "b",
              "text": "From 12 days to 6 days"
            },
            {
              "key": "c",
              "text": "Remain at 12 days"
            },
            {
              "key": "d",
              "text": "From 12 days to 24 days"
            }
          ],
          "answer": "b",
          "explanation": "At 4 mm/day, the allowance lasts 48/4 = 12 days. At 8 mm/day it lasts 48/8 = 6 days. Increased evaporative demand shortens the interval; rainfall or a changed depletion policy would require a revised water balance.<p>Source note: Page 30 point 120, climate factor: isolates a stated change in net demand.</p><p>Capsule 4th ed., p. 30; topic 7 point 120.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 30; topic 7 point 120",
            "pages": [
              30
            ],
            "points": [
              "capsule-t07-p030-n120"
            ]
          },
          "topic": "ACiE0701",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00122",
          "src": "CAP4-07-00122",
          "text": "Fertilization changes canopy growth and measured crop-water use. How should this affect irrigation scheduling?",
          "options": [
            {
              "key": "a",
              "text": "Shorten the interval in direct proportion to fertilizer mass"
            },
            {
              "key": "b",
              "text": "Update demand and depletion estimates using observed crop response"
            },
            {
              "key": "c",
              "text": "Keep the original schedule because soil texture is unchanged"
            },
            {
              "key": "d",
              "text": "Assume added fertilizer increases available soil water by the same fraction"
            }
          ],
          "answer": "b",
          "explanation": "Fertility can indirectly alter growth, rooting and water uptake, and excessive salts can add stress. Scheduling still follows measured or estimated demand and soil-water status. There is no universal direct fertilizer-to-frequency conversion.<p>Source note: Page 30 point 120, fertilizer qualification: indirect effects are distinguished from soil, crop and climate controls; all four listed factors receive explicit questions.</p><p>Capsule 4th ed., p. 30; topic 7 point 120.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 30; topic 7 point 120",
            "pages": [
              30
            ],
            "points": [
              "capsule-t07-p030-n120"
            ]
          },
          "topic": "ACiE0701",
          "kind": "application"
        },
        {
          "id": "CAP4-08-00035",
          "src": "CAP4-08-00035",
          "text": "Rainfall runoff from a small agricultural catchment must be saved for later supplemental irrigation. Which structure primarily performs that storage function?",
          "options": [
            {
              "key": "a",
              "text": "Canal measuring flume"
            },
            {
              "key": "b",
              "text": "Farm pond"
            },
            {
              "key": "c",
              "text": "Field drain"
            },
            {
              "key": "d",
              "text": "Canal cross-regulator"
            }
          ],
          "answer": "b",
          "explanation": "A farm pond stores runoff or diverted water for later farm use. A cross-regulator controls canal water level, a drain removes unwanted water, and a measuring flume gauges flow. Storage availability still depends on inflow, seepage, evaporation and withdrawal timing.<p>Capsule 4th ed., p. 31; topic 8 point 39.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 31; topic 8 point 39",
            "pages": [
              31
            ],
            "points": [
              "capsule-t08-p031-n39"
            ]
          },
          "topic": "ACiE0701",
          "kind": "application"
        }
      ]
    },
    {
      "id": "ACiE0702",
      "name": "Design of canals",
      "subject": "Irrigation and Drainage",
      "questions": [
        {
          "id": "CAP4-07-00015",
          "src": "CAP4-07-00015",
          "text": "A canal cut yields 1000 cubic metres measured in situ. If usable soil produces 0.90 cubic metre of compacted fill per in-situ cubic metre, what compacted bank volume balances the cut without borrow or waste?",
          "options": [
            {
              "key": "a",
              "text": "100 cubic metres"
            },
            {
              "key": "b",
              "text": "900 cubic metres"
            },
            {
              "key": "c",
              "text": "1111 cubic metres"
            },
            {
              "key": "d",
              "text": "1000 cubic metres"
            }
          ],
          "answer": "b",
          "explanation": "The usable compacted yield is 1000 x 0.90 = 900 cubic metres. Balanced earthwork means available excavation meets required fill on compatible volume bases, not equality between uncorrected in-situ and compacted volumes.<p>Source note: Page 27 point 16: the equal-cut/equal-fill shortcut assumes compatible density, usability and shrinkage bases.</p><p>Capsule 4th ed., p. 27; topic 7 point 16.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 16",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n16"
            ]
          },
          "topic": "ACiE0702",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00016",
          "src": "CAP4-07-00016",
          "text": "In Kennedy's empirical canal method, two designs have equal water depth but different sediment grades. Which parameter represents the sediment-related adjustment to reference critical velocity?",
          "options": [
            {
              "key": "a",
              "text": "Watercourse delivery efficiency"
            },
            {
              "key": "b",
              "text": "Froude number Fr"
            },
            {
              "key": "c",
              "text": "Manning roughness n"
            },
            {
              "key": "d",
              "text": "Critical-velocity ratio m"
            }
          ],
          "answer": "d",
          "explanation": "Kennedy's customary relation is V = 0.55 m y^0.64 in metre-second units. The multiplier m adjusts the reference velocity for sediment conditions. This critical velocity concerns silting and scour, not the Fr = 1 condition of critical open-channel flow.<p>Capsule 4th ed., p. 27; topic 7 point 17.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 17",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n17"
            ]
          },
          "topic": "ACiE0702",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00017",
          "src": "CAP4-07-00017",
          "text": "Sediment accumulates in a canal, reducing its available flow area below a fixed permitted water level and increasing resistance. With the available head unchanged, what is the likely capacity effect?",
          "options": [
            {
              "key": "a",
              "text": "Capacity is unchanged because the available head is unchanged"
            },
            {
              "key": "b",
              "text": "Conveyance capacity decreases"
            },
            {
              "key": "c",
              "text": "Capacity increases as deposits displace water"
            },
            {
              "key": "d",
              "text": "Capacity increases because reduced area implies faster flow"
            }
          ],
          "answer": "b",
          "explanation": "Deposit buildup reduces the effective section and can raise resistance, lowering the discharge conveyable under the stated head and water-level constraints. If operators maintain discharge instead, water levels may rise; silting does not dictate one outcome under every boundary condition.<p>Source note: Page 27 point 18: specified the controlling head and level conditions for a capacity decrease.</p><p>Capsule 4th ed., p. 27; topic 7 point 18.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 18",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n18"
            ]
          },
          "topic": "ACiE0702",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00018",
          "src": "CAP4-07-00018",
          "text": "Surveys show a reach gaining stored bed sediment over several seasons and its mean bed level rising. Which process is occurring?",
          "options": [
            {
              "key": "a",
              "text": "Degradation"
            },
            {
              "key": "b",
              "text": "Dynamic regime with zero net storage"
            },
            {
              "key": "c",
              "text": "Aggradation"
            },
            {
              "key": "d",
              "text": "Clear-water scour"
            }
          ],
          "answer": "c",
          "explanation": "Aggradation is net sediment accumulation that raises the bed. Degradation lowers it through net erosion. Sediment can move through a regime reach, but a sustained positive storage balance is inconsistent with an unchanged mean bed level.<p>Capsule 4th ed., p. 27; topic 7 point 19.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 19",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n19"
            ]
          },
          "topic": "ACiE0702",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00020",
          "src": "CAP4-07-00020",
          "text": "An ungated river diversion can receive useful supplies mainly when seasonal floods raise the river above its intake sill. Which traditional canal class best describes it?",
          "options": [
            {
              "key": "a",
              "text": "Lift-irrigation main"
            },
            {
              "key": "b",
              "text": "Subsurface interceptor drain"
            },
            {
              "key": "c",
              "text": "Inundation canal"
            },
            {
              "key": "d",
              "text": "Perennial controlled canal"
            }
          ],
          "answer": "c",
          "explanation": "An inundation canal depends on high river stages to admit water, typically during the flood season. A perennial system instead seeks dependable regulated supply over its operating season; the classification is about availability and control, not lining material.<p>Capsule 4th ed., p. 27; topic 7 point 21.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 21",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n21"
            ]
          },
          "topic": "ACiE0702",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00021",
          "src": "CAP4-07-00021",
          "text": "A fixed canal-head supply serves 600 ha at conveyance efficiency 0.60. Lining raises efficiency to 0.80; crop needs and field efficiency are unchanged and more land is hydraulically commandable. What area can the same supply now support?",
          "options": [
            {
              "key": "a",
              "text": "1000 ha"
            },
            {
              "key": "b",
              "text": "450 ha"
            },
            {
              "key": "c",
              "text": "720 ha"
            },
            {
              "key": "d",
              "text": "800 ha"
            }
          ],
          "answer": "d",
          "explanation": "Useful delivery rises in the ratio 0.80/0.60, so supported area is 600 x 0.80/0.60 = 800 ha. Water savings can expand irrigated area only if suitable land and adequate delivery levels exist; lining does not automatically change topographic command.<p>Source note: Page 27 point 22: distinguished irrigable area supported by supply from geometric command area.</p><p>Capsule 4th ed., p. 27; topic 7 point 22.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 22",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n22"
            ]
          },
          "topic": "ACiE0702",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00022",
          "src": "CAP4-07-00022",
          "text": "A canal bank crest is placed above its design water surface to accommodate waves, surges and operating fluctuations. What is this vertical allowance called?",
          "options": [
            {
              "key": "a",
              "text": "Freeboard"
            },
            {
              "key": "b",
              "text": "Hydraulic radius"
            },
            {
              "key": "c",
              "text": "Seepage head"
            },
            {
              "key": "d",
              "text": "Critical depth"
            }
          ],
          "answer": "a",
          "explanation": "Freeboard is the specified vertical margin above the design water level to the relevant bank or lining top. It reduces overtopping risk from fluctuations and waves. It is not part of the normal flow area at the design level.<p>Capsule 4th ed., p. 27; topic 7 point 23.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 23",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n23"
            ]
          },
          "topic": "ACiE0702",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00023",
          "src": "CAP4-07-00023",
          "text": "A concrete-lined canal has adequate freeboard but experiences freezing of water behind poorly drained lining panels. Which conclusion is defensible?",
          "options": [
            {
              "key": "a",
              "text": "Bank freeboard substitutes for drainage behind the lining"
            },
            {
              "key": "b",
              "text": "Freeboard alone does not prevent frost damage"
            },
            {
              "key": "c",
              "text": "Larger freeboard makes freeze-thaw durability checks unnecessary"
            },
            {
              "key": "d",
              "text": "Normal-flow capacity establishes the lining's frost resistance"
            }
          ],
          "answer": "b",
          "explanation": "Freeboard addresses water-level exceedance. Frost damage depends on moisture, freezing exposure, drainage and material/detailing resistance. Those mechanisms still require treatment even when the bank crest safely exceeds normal water levels.<p>Source note: Page 27 point 23: separately corrected the claim that freeboard itself provides safety against frost cracking.</p><p>Capsule 4th ed., p. 27; topic 7 point 23.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 23",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n23"
            ]
          },
          "topic": "ACiE0702",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00024",
          "src": "CAP4-07-00024",
          "text": "A proposed side-slope canal runs down the hillside parallel to natural drainage paths. Which conclusion is justified before the detailed survey?",
          "options": [
            {
              "key": "a",
              "text": "It necessarily commands both sides as a watershed canal does"
            },
            {
              "key": "b",
              "text": "Crossings may be few, but local drains must still be checked"
            },
            {
              "key": "c",
              "text": "The canal must intercept every drain as a contour canal does"
            },
            {
              "key": "d",
              "text": "The alignment class alone establishes that crossings are unnecessary"
            }
          ],
          "answer": "b",
          "explanation": "The ideal side-slope route can run parallel to drainage and avoid crossings. Local gullies, deviations and catchments may still intersect it. Excess ground fall can also require falls, so the alignment label is not a complete hydraulic design.<p>Source note: Page 27 point 24: replaced an absolute no-crossing claim with the terrain-dependent condition.</p><p>Capsule 4th ed., p. 27; topic 7 point 24.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 24",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n24"
            ]
          },
          "topic": "ACiE0702",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00025",
          "src": "CAP4-07-00025",
          "text": "Why can gravity canal irrigation be attractive on an extensive alluvial plain with a dependable elevated river supply?",
          "options": [
            {
              "key": "a",
              "text": "Gentle grades can command broad cultivable areas"
            },
            {
              "key": "b",
              "text": "The river sediment load guarantees stable unlined banks"
            },
            {
              "key": "c",
              "text": "Alluvial origin ensures negligible seepage without lining"
            },
            {
              "key": "d",
              "text": "Low ground slope makes drainage crossings unnecessary"
            }
          ],
          "answer": "a",
          "explanation": "Gentle terrain, broad agricultural land and a suitable supply level can make gravity distribution practical. Alluvial deposits vary widely in permeability and erosion resistance, so seepage, sediment and drainage assessments remain necessary.<p>Source note: Page 27 point 25: interpreted the circular wording &#39;preferred in alluvial canal&#39; as suitability on alluvial plains, with explicit conditions.</p><p>Capsule 4th ed., p. 27; topic 7 point 25.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 25",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n25"
            ]
          },
          "topic": "ACiE0702",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00028",
          "src": "CAP4-07-00028",
          "text": "In a conventional network with no authorized direct farm outlets on the main canal, how does the main canal serve irrigation?",
          "options": [
            {
              "key": "a",
              "text": "It supplies farms directly, bypassing distributary channels"
            },
            {
              "key": "b",
              "text": "It conveys supply to the distribution network"
            },
            {
              "key": "c",
              "text": "It serves as the collector for excess field drainage"
            },
            {
              "key": "d",
              "text": "It serves as seasonal storage rather than a conveyance route"
            }
          ],
          "answer": "b",
          "explanation": "The main canal carries water to branches and distributaries, which supply smaller channels and farms. Lack of direct farm offtakes does not mean the main canal has no irrigation function; it performs bulk conveyance.<p>Source note: Page 27 point 28: clarified &#39;not used for irrigation&#39; as no direct irrigation outlets in the stated network, not no irrigation purpose.</p><p>Capsule 4th ed., p. 27; topic 7 point 28.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 28",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n28"
            ]
          },
          "topic": "ACiE0702",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00030",
          "src": "CAP4-07-00030",
          "text": "A Nepal irrigation intake diverts sediment-rich monsoon flow into a low-velocity canal reach. Which problem should the engineer investigate first if the bed rises and capacity declines?",
          "options": [
            {
              "key": "a",
              "text": "A temporary backwater rise with no change in sediment storage"
            },
            {
              "key": "b",
              "text": "Bank scour caused by excess boundary shear alone"
            },
            {
              "key": "c",
              "text": "Net deposition from excess sediment supply"
            },
            {
              "key": "d",
              "text": "Progressive degradation from a bed-material deficit"
            }
          ],
          "answer": "c",
          "explanation": "If sediment input exceeds transport out of the reach, deposits accumulate and can reduce capacity. The mechanism is a sediment-budget imbalance, not a general defect named 'formation of alluvial soil'; other Nepal sites may have different dominant problems.<p>Source note: Page 27 point 30: replaced an unsupported nationwide generalization with a defined sedimentation scenario.</p><p>Capsule 4th ed., p. 27; topic 7 point 30.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 30",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n30"
            ]
          },
          "topic": "ACiE0702",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00032",
          "src": "CAP4-07-00032",
          "text": "Which reach best fits Lacey's ideal true-regime premise?",
          "options": [
            {
              "key": "a",
              "text": "Persistent bed lowering under a continuing sediment deficit"
            },
            {
              "key": "b",
              "text": "Adjustable alluvial bed and banks with sustained sediment balance"
            },
            {
              "key": "c",
              "text": "Rigid lined bed with freely eroding unprotected banks"
            },
            {
              "key": "d",
              "text": "A fixed rock channel whose section cannot adjust"
            }
          ],
          "answer": "b",
          "explanation": "True regime idealizes an adjustable alluvial boundary under sustained water discharge, sediment charge and grade, with no progressive deposition or scour. A systematic erosional imbalance contradicts that equilibrium even though sediment continues moving through a regime channel.<p>Capsule 4th ed., p. 27; topic 7 point 32.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 32",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n32"
            ]
          },
          "topic": "ACiE0702",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00034",
          "src": "CAP4-07-00034",
          "text": "Using the Lacey empirical resistance form V = C R^(2/3) S^(1/3), a second compatible case has eight times the hydraulic radius and one-eighth the slope, with C unchanged. What is the second-to-first velocity ratio?",
          "options": [
            {
              "key": "a",
              "text": "2.00"
            },
            {
              "key": "b",
              "text": "1.41"
            },
            {
              "key": "c",
              "text": "8.00"
            },
            {
              "key": "d",
              "text": "4.00"
            }
          ],
          "answer": "a",
          "explanation": "The radius factor is 8^(2/3) = 4 and the slope factor is (1/8)^(1/3) = 0.5, so the velocity ratio is 2. Manning's one-half slope exponent would instead give about 1.41. This empirical comparison does not hold every other regime quantity fixed.<p>Capsule 4th ed., p. 27; topic 7 point 34.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 34",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n34"
            ]
          },
          "topic": "ACiE0702",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00036",
          "src": "CAP4-07-00036",
          "text": "Sediment grains move along a channel bed by rolling, sliding and short hops rather than remaining dispersed through the water column. What transport mode is this?",
          "options": [
            {
              "key": "a",
              "text": "Dissolved load only"
            },
            {
              "key": "b",
              "text": "Wash load maintained in suspension"
            },
            {
              "key": "c",
              "text": "Floating debris transport"
            },
            {
              "key": "d",
              "text": "Bed load, including saltation"
            }
          ],
          "answer": "d",
          "explanation": "Bed load remains close to the bed and moves by traction and saltation. Suspended load is maintained higher in the flow by turbulence, while dissolved load is carried in solution. Short near-bed hops do not make grains dissolved or wash load.<p>Capsule 4th ed., p. 27; topic 7 point 36.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 36",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n36"
            ]
          },
          "topic": "ACiE0702",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00037",
          "src": "CAP4-07-00037",
          "text": "A symmetrical canal excavation has bottom width 4 m, cutting depth 2 m and side slopes 1.5 horizontal to 1 vertical beneath level ground. What is its cross-sectional cut area?",
          "options": [
            {
              "key": "a",
              "text": "8 square metres"
            },
            {
              "key": "b",
              "text": "11 square metres"
            },
            {
              "key": "c",
              "text": "20 square metres"
            },
            {
              "key": "d",
              "text": "14 square metres"
            }
          ],
          "answer": "d",
          "explanation": "The rectangle contributes 4 x 2 = 8 square metres. The two side triangles together contribute z d^2 = 1.5 x 2^2 = 6, giving 14 square metres. Cutting depth need not equal flow depth.<p>Source note: Page 27 point 37: unified the inconsistent y/d notation and explicitly defined the H:V side-slope convention.</p><p>Capsule 4th ed., p. 27; topic 7 point 37.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 37",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n37"
            ]
          },
          "topic": "ACiE0702",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00038",
          "src": "CAP4-07-00038",
          "text": "A 50 m canal reach has two identical side faces of vertical height 2 m and slope 1.5 H:1 V. Ignoring end faces and the bed, what lining area covers both slopes?",
          "options": [
            {
              "key": "a",
              "text": "650.00 square metres"
            },
            {
              "key": "b",
              "text": "180.28 square metres"
            },
            {
              "key": "c",
              "text": "300.00 square metres"
            },
            {
              "key": "d",
              "text": "360.56 square metres"
            }
          ],
          "answer": "d",
          "explanation": "Each sloping face has width 2 sqrt(1 + 1.5^2) = 3.60555 m. Both sides require 2 x 50 x 3.60555 = 360.56 square metres. Omitting the square root or counting only one face gives different results.<p>Source note: Page 27 point 38: the extracted expression loses the radical. Restored it by Pythagoras, with an explicit H:V convention; no image was reviewed.</p><p>Capsule 4th ed., p. 27; topic 7 point 38.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 38",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n38"
            ]
          },
          "topic": "ACiE0702",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00039",
          "src": "CAP4-07-00039",
          "text": "An engineer uses Garrett's canal-design diagrams to reduce trial calculations. Which sediment-velocity method underlies these traditional diagrams?",
          "options": [
            {
              "key": "a",
              "text": "Lacey's regime-perimeter method"
            },
            {
              "key": "b",
              "text": "Kennedy's method"
            },
            {
              "key": "c",
              "text": "Khosla's independent-variable method"
            },
            {
              "key": "d",
              "text": "Lane's weighted-creep method"
            }
          ],
          "answer": "b",
          "explanation": "Garrett's diagrams are graphical aids associated with Kennedy-based canal design. Their use retains the assumptions and calibration of that method; they are not diagrams for foundation seepage or a substitute for checking the resulting section.<p>Capsule 4th ed., p. 27; topic 7 point 39.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 39",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n39"
            ]
          },
          "topic": "ACiE0702",
          "kind": "recall"
        },
        {
          "id": "CAP4-07-00040",
          "src": "CAP4-07-00040",
          "text": "For a coarse noncohesive bed, adopt critical Shields parameter 0.056, grain density 2650 kg/m3, water density 1000 kg/m3, diameter 0.010 m and g = 9.81 m/s2. What critical bed shear follows?",
          "options": [
            {
              "key": "a",
              "text": "0.91 Pa"
            },
            {
              "key": "b",
              "text": "14.56 Pa"
            },
            {
              "key": "c",
              "text": "9.06 Pa"
            },
            {
              "key": "d",
              "text": "90.64 Pa"
            }
          ],
          "answer": "c",
          "explanation": "Shields parameter is bed shear divided by submerged grain weight per unit area: theta = tau/[(rho_s - rho)gd]. Thus tau = 0.056 x 1650 x 9.81 x 0.010 = 9.06444 Pa. This is an incipient-motion estimate before any design safety allowance.<p>Source note: Page 28 point 40: 0.056 is explicitly adopted for this coarse-bed example. The Shields threshold depends on flow/grain regime and is not mandatory for every alluvial canal.</p><p>Capsule 4th ed., p. 28; topic 7 point 40.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 40",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n40"
            ]
          },
          "topic": "ACiE0702",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00041",
          "src": "CAP4-07-00041",
          "text": "A surveyed watershed offers adequate command levels on both sides and natural drains slope away from it. Which canal alignment is attractive for minimizing drainage crossings?",
          "options": [
            {
              "key": "a",
              "text": "Hillside contour alignment"
            },
            {
              "key": "b",
              "text": "Valley-bottom alignment"
            },
            {
              "key": "c",
              "text": "Alignment along the main drainage channel"
            },
            {
              "key": "d",
              "text": "Ridge alignment"
            }
          ],
          "answer": "d",
          "explanation": "A ridge follows the drainage divide, so it can command both sides while avoiding drains that fall away from it. Adequate canal grade and field head must still be demonstrated; the preferred alignment is conditional on the actual terrain.<p>Capsule 4th ed., p. 28; topic 7 point 41.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 41",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n41"
            ]
          },
          "topic": "ACiE0702",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00043",
          "src": "CAP4-07-00043",
          "text": "A reviewer rejects a hydraulically adequate trapezoidal lined canal solely because its 40-cumec discharge is below 85 cumecs. Under the section-selection guidance of IS 10430:2000 Section 8.8.1, which assessment is justified?",
          "options": [
            {
              "key": "a",
              "text": "Rounded corners make a trapezoid unsuitable below 85 cumecs"
            },
            {
              "key": "b",
              "text": "A cup-shaped section is compulsory for a 40-cumec canal"
            },
            {
              "key": "c",
              "text": "Trapezoidal sections are permitted without that 85-cumec restriction"
            },
            {
              "key": "d",
              "text": "A triangular section is compulsory for every discharge below 85 cumecs"
            }
          ],
          "answer": "c",
          "explanation": "Section 8.8.1 permits trapezoidal lined canals with or without rounded corners for all types of lined canals. Hydraulic capacity, stable slopes and economic checks still apply. A discharge below 85 cumecs does not itself require a triangular section in this edition.<p>Source note: Page 28 point 43: checked against the archived text of IS 10430:2000, Section 8.8.1. The capsule&#39;s 85-cumec convention is not established by this reference; its historical origin remains unverified. No current Nepal adoption is claimed.</p><p>Capsule 4th ed., p. 28; topic 7 point 43.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 43",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n43"
            ]
          },
          "topic": "ACiE0702",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00100",
          "src": "CAP4-07-00100",
          "text": "A rectangular lined canal carries steady uniform flow with width 4 m, water depth 2 m, Manning n = 0.020 and bed slope 0.0004. What discharge does Manning's equation give?",
          "options": [
            {
              "key": "a",
              "text": "8.00 cumecs"
            },
            {
              "key": "b",
              "text": "16.00 cumecs"
            },
            {
              "key": "c",
              "text": "4.00 cumecs"
            },
            {
              "key": "d",
              "text": "12.70 cumecs"
            }
          ],
          "answer": "a",
          "explanation": "Area is 4 x 2 = 8 square metres and wetted perimeter is 4 + 2 x 2 = 8 m, so R = 1 m. Then Q = (1/0.020) x 8 x 1^(2/3) x sqrt(0.0004) = 8.00 cumecs. The free surface is excluded from wetted perimeter.<p>Source note: Page 29 point 101: Manning is a resistance relation under specified conditions, not a complete lined-canal design or an adjustable-alluvial regime theory.</p><p>Capsule 4th ed., p. 29; topic 7 point 101.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 101",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n101"
            ]
          },
          "topic": "ACiE0702",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00112",
          "src": "CAP4-07-00112",
          "text": "For a trial trapezoidal lined canal carrying 90 cumecs, a designer adopts mean velocity 2 m/s, water depth 3 m and side slopes 1.5 H:1 V. What bed width follows from continuity and section geometry alone?",
          "options": [
            {
              "key": "a",
              "text": "19.50 m"
            },
            {
              "key": "b",
              "text": "7.50 m"
            },
            {
              "key": "c",
              "text": "15.00 m"
            },
            {
              "key": "d",
              "text": "10.50 m"
            }
          ],
          "answer": "d",
          "explanation": "The required flow area is Q/V = 90/2 = 45 square metres. For a trapezoid A = y(b + zy), hence b = 45/3 - 1.5 x 3 = 10.50 m. This is a trial geometry, not proof that the available slope produces the adopted velocity or that lining is stable.<p>Source note: Page 29 point 113: tests large-canal trapezoidal sizing without endorsing an 84-cumec switch. Reviewed IS 10430:2000 Section 8.8.1 permits trapezoidal sections for all types of lined canals; the capsule&#39;s threshold origin remains unverified.</p><p>Capsule 4th ed., p. 29; topic 7 point 113.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 113",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n113"
            ]
          },
          "topic": "ACiE0702",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00113",
          "src": "CAP4-07-00113",
          "text": "In the Lacey relation V = sqrt(2 f R/5), a comparison increases f by a factor of four and R by a factor of nine. What velocity multiplier follows from this relation alone?",
          "options": [
            {
              "key": "a",
              "text": "36"
            },
            {
              "key": "b",
              "text": "13"
            },
            {
              "key": "c",
              "text": "3"
            },
            {
              "key": "d",
              "text": "6"
            }
          ],
          "answer": "d",
          "explanation": "Velocity varies with sqrt(fR), so its multiplier is sqrt(4 x 9) = 6. Treating V as directly proportional to the unsquared product would give 36. These are compatible comparative inputs, not a claim that all other regime quantities stay fixed.<p>Source note: Page 29 point 114: supplied the missing square-root dependence on the product of sediment factor and hydraulic radius.</p><p>Capsule 4th ed., p. 29; topic 7 point 114.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 114",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n114"
            ]
          },
          "topic": "ACiE0702",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00124",
          "src": "CAP4-07-00124",
          "text": "Using Kennedy's relation V = 0.55 m y^0.64 with water depth y = 0.75 m and critical-velocity ratio m = 1, what mean velocity results to three decimal places?",
          "options": [
            {
              "key": "a",
              "text": "0.550 m/s"
            },
            {
              "key": "b",
              "text": "0.675 m/s"
            },
            {
              "key": "c",
              "text": "0.413 m/s"
            },
            {
              "key": "d",
              "text": "0.458 m/s"
            }
          ],
          "answer": "d",
          "explanation": "Compute 0.75^0.64 = 0.831839, then multiply by 0.55 to obtain 0.457511 m/s, which rounds to 0.458 m/s. This is Kennedy's empirical sediment-stability velocity, not a particle's still-water settling speed or the Fr = 1 velocity.<p>Source note: Page 30 point 122: treated D as water depth, corrected &#39;critical velocity of setting&#39;, and reported proper three-decimal rounding rather than the source&#39;s 0.457 truncation.</p><p>Capsule 4th ed., p. 30; topic 7 point 122.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 30; topic 7 point 122",
            "pages": [
              30
            ],
            "points": [
              "capsule-t07-p030-n122"
            ]
          },
          "topic": "ACiE0702",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00128",
          "src": "CAP4-07-00128",
          "text": "Which quantity is a flow variable rather than a geometric property of a specified canal cross-section?",
          "options": [
            {
              "key": "a",
              "text": "Flow area A"
            },
            {
              "key": "b",
              "text": "Wetted perimeter P"
            },
            {
              "key": "c",
              "text": "Discharge Q"
            },
            {
              "key": "d",
              "text": "Hydraulic radius A/P"
            }
          ],
          "answer": "c",
          "explanation": "Discharge measures volume passing per unit time and equals area times mean velocity. Area, wetted perimeter and hydraulic radius describe the wetted section at a stated depth. Geometry constrains flow but does not alone specify its discharge.<p>Capsule 4th ed., p. 30; topic 7 point 127.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 30; topic 7 point 127",
            "pages": [
              30
            ],
            "points": [
              "capsule-t07-p030-n127"
            ]
          },
          "topic": "ACiE0702",
          "kind": "recall"
        },
        {
          "id": "CAP4-07-00129",
          "src": "CAP4-07-00129",
          "text": "Which canal system supplied the classic observations underlying Kennedy's empirical sediment-stability method?",
          "options": [
            {
              "key": "a",
              "text": "Western Yamuna Canal, northern India"
            },
            {
              "key": "b",
              "text": "Upper Bari Doab Canal, Punjab"
            },
            {
              "key": "c",
              "text": "Upper Ganges Canal, northern India"
            },
            {
              "key": "d",
              "text": "Sirhind Canal, Punjab"
            }
          ],
          "answer": "b",
          "explanation": "Kennedy's method arose from observations of the Upper Bari Doab Canal system in Punjab. That empirical origin explains why its coefficient and critical-velocity ratio require care when transferred to different sediment and channel conditions.<p>Capsule 4th ed., p. 30; topic 7 point 129.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 30; topic 7 point 129",
            "pages": [
              30
            ],
            "points": [
              "capsule-t07-p030-n129"
            ]
          },
          "topic": "ACiE0702",
          "kind": "recall"
        },
        {
          "id": "CAP4-07-00130",
          "src": "CAP4-07-00130",
          "text": "A gate operation accelerates flow in an erodible canal reach until the applied bed shear exceeds sediment resistance. What bed response is most likely?",
          "options": [
            {
              "key": "a",
              "text": "Deposition because increased velocity reduces transport capacity"
            },
            {
              "key": "b",
              "text": "No entrainment unless the reach is already carrying sediment"
            },
            {
              "key": "c",
              "text": "A regime section maintained automatically during gate changes"
            },
            {
              "key": "d",
              "text": "Scour and possible bed lowering"
            }
          ],
          "answer": "d",
          "explanation": "When hydraulic demand exceeds bed resistance, grains are entrained and a sediment deficit can cause scour. Increased velocity often accompanies increased erosive stress, but resistance, depth, turbulence and sediment supply also matter; velocity alone is not a universal threshold.<p>Source note: Page 30 point 130: stated the erosion-resistance condition behind the source&#39;s velocity-increase shorthand.</p><p>Capsule 4th ed., p. 30; topic 7 point 130.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 30; topic 7 point 130",
            "pages": [
              30
            ],
            "points": [
              "capsule-t07-p030-n130"
            ]
          },
          "topic": "ACiE0702",
          "kind": "application"
        }
      ]
    },
    {
      "id": "ACiE0703",
      "name": "Diversion headworks",
      "subject": "Irrigation and Drainage",
      "questions": [
        {
          "id": "CAP4-02-00160",
          "src": "CAP4-02-00160",
          "text": "Seepage beneath a weir transports foundation particles toward an unfiltered downstream exit, progressively creating channels and loss of support. Which failure mechanism is developing?",
          "options": [
            {
              "key": "a",
              "text": "Cavitation confined to the overflow crest"
            },
            {
              "key": "b",
              "text": "Piping and undermining"
            },
            {
              "key": "c",
              "text": "Structural flexural cracking without seepage"
            },
            {
              "key": "d",
              "text": "Hydrostatic uplift without particle transport"
            }
          ],
          "answer": "b",
          "explanation": "Piping is internal erosion driven by seepage, often initiated at an inadequately protected exit. Particle loss can undermine the floor or foundation. Filters, drainage and appropriate seepage control address this mechanism; floor weight alone does not prevent particle transport.<p>Capsule 4th ed., p. 10; topic 2 point 142.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 142",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n142"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-02-00161",
          "src": "CAP4-02-00161",
          "text": "A hydraulic floor remains intact but seepage pressure under it exceeds the available downward stabilizing action. Which distinct failure risk must be checked?",
          "options": [
            {
              "key": "a",
              "text": "Piping specifically caused by transported soil particles"
            },
            {
              "key": "b",
              "text": "Bearing failure caused by excessive downward contact pressure"
            },
            {
              "key": "c",
              "text": "Overturning caused by excessive lateral thrust alone"
            },
            {
              "key": "d",
              "text": "Uplift or flotation of the floor"
            }
          ],
          "answer": "d",
          "explanation": "Upward pore-water forces can lift or crack a floor when they exceed its stabilizing resistance. This is distinct from particle erosion and undermining, though the mechanisms may interact. Uplift analysis needs the pressure distribution and appropriate load combinations, not merely an average exit gradient.<p>Capsule 4th ed., p. 10; topic 2 point 142.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 10; topic 2 point 142",
            "pages": [
              10
            ],
            "points": [
              "capsule-t02-p010-n142"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00026",
          "src": "CAP4-07-00026",
          "text": "Two intake sites offer the same diversion head. Site X has unstable shoaling and interferes with vessel passage; site Y has a stable approach and separated navigation. Which is the better preliminary choice?",
          "options": [
            {
              "key": "a",
              "text": "Either site, because equal head implies equal intake reliability"
            },
            {
              "key": "b",
              "text": "Site Y, for its stable approach and separated navigation"
            },
            {
              "key": "c",
              "text": "Site X, because shoaling reduces the need for sediment exclusion"
            },
            {
              "key": "d",
              "text": "Site X, because vessel depth establishes stable intake conditions"
            }
          ],
          "answer": "b",
          "explanation": "A stable approach and avoidance of navigation conflict favor Y. Intake selection also considers low-flow access, sediment, scour and operation. Being in a natural river is not itself a defect; the actual channel behavior matters.<p>Source note: Page 27 point 26: the natural-channel/navigation statement lacks an identifiable comparison. This question tests explicit siting criteria; the intended original classification remains for parent review.</p><p>Capsule 4th ed., p. 27; topic 7 point 26.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 26",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n26"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00042",
          "src": "CAP4-07-00042",
          "text": "Two otherwise comparable intake reaches have suitable foundations and flood access. Reach X has enough dry-season head but migrating shoals; reach Y has a stable approach but its dry-season water level lies below the required gravity-intake level. What must the assessment recognize?",
          "options": [
            {
              "key": "a",
              "text": "X has a sediment-stability risk; Y lacks the required low-flow head"
            },
            {
              "key": "b",
              "text": "Both are adequate once their peak flood discharges are sufficient"
            },
            {
              "key": "c",
              "text": "Y is adequate because channel stability compensates for missing head"
            },
            {
              "key": "d",
              "text": "X is unsuitable because any natural river intake is unacceptable"
            }
          ],
          "answer": "a",
          "explanation": "Gravity diversion needs adequate seasonal head as well as a manageable sediment regime. X requires investigation of migrating shoals; Y cannot meet the stated low-flow gravity requirement without changing the scheme. An undefined reach label such as 'trough stage' establishes neither condition.<p>Source note: Page 28 point 42: &#39;trough stage&#39; is undefined; nearby corrected notes also retain an unresolved &#39;Through stage&#39; label. No equivalence or corrected spelling is asserted. Parent should verify the intended reach classification.</p><p>Capsule 4th ed., p. 28; topic 7 point 42.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 42",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n42"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00044",
          "src": "CAP4-07-00044",
          "text": "A barrage foundation exposes unprotected loose fine sand at the downstream seepage exit. Why is a conservative permissible-gradient assessment important?",
          "options": [
            {
              "key": "a",
              "text": "A small permeability by itself rules out erosion at the exit"
            },
            {
              "key": "b",
              "text": "Only total seepage discharge matters, not its local gradient"
            },
            {
              "key": "c",
              "text": "Seepage can mobilize grains and initiate internal erosion"
            },
            {
              "key": "d",
              "text": "Fine grains necessarily have lower mineral specific gravity"
            }
          ],
          "answer": "c",
          "explanation": "Unprotected fine sand may be readily eroded by emerging seepage. Permissible gradients and filters must reflect gradation, packing and erosion susceptibility. Finer grains of the same mineral do not have intrinsically lower solid specific gravity.<p>Source note: Page 28 point 44: retained fine-sand vulnerability without inventing a universal soil ranking or fixed safe-gradient table.</p><p>Capsule 4th ed., p. 28; topic 7 point 44.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 44",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n44"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00045",
          "src": "CAP4-07-00045",
          "text": "A conventional diversion-headworks layout must provide an upstream migration route for fish across the level difference. Which component and usual location fit that purpose?",
          "options": [
            {
              "key": "a",
              "text": "Silt excluder beneath the impervious floor"
            },
            {
              "key": "b",
              "text": "Canal escape at the main-channel tail"
            },
            {
              "key": "c",
              "text": "Undersluice gate within the fish resting pool"
            },
            {
              "key": "d",
              "text": "Fish ladder beside the divide wall"
            }
          ],
          "answer": "d",
          "explanation": "A fish ladder or pass provides a sequence of passable levels and resting zones; it is often arranged beside the divide wall in conventional headworks. Entrance attraction, velocities and species requirements govern whether it actually works.<p>Source note: Page 28 point 45: divide-wall adjacency is a conventional layout, not an exclusive location suitable for every species or site.</p><p>Capsule 4th ed., p. 28; topic 7 point 45.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 45",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n45"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00046",
          "src": "CAP4-07-00046",
          "text": "Which headworks component separates the undersluice pocket from the main weir bays and limits cross-currents between them?",
          "options": [
            {
              "key": "a",
              "text": "Upstream guide-bank nose"
            },
            {
              "key": "b",
              "text": "Divide wall"
            },
            {
              "key": "c",
              "text": "Downstream drainage collector"
            },
            {
              "key": "d",
              "text": "Canal fall crest"
            }
          ],
          "answer": "b",
          "explanation": "The divide wall separates the main overflow portion from the undersluice pocket, helping organize approach flow and sediment sluicing near the canal intake. It is distinct from guide banks, which steer the river through the overall waterway.<p>Source note: Page 28 points 46 and 69 are the same divide-wall fact and are intentionally merged.</p><p>Capsule 4th ed., p. 28; topic 7 point 46; topic 7 point 69.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 46; topic 7 point 69",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n46",
              "capsule-t07-p028-n69"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00047",
          "src": "CAP4-07-00047",
          "text": "In Khosla's ideal sharp-edge floor model, the downstream cutoff depth tends to zero while floor length and retained head remain positive. What happens to the local exit-gradient estimate?",
          "options": [
            {
              "key": "a",
              "text": "It becomes unbounded at the ideal exit edge"
            },
            {
              "key": "b",
              "text": "It becomes equal to soil permeability"
            },
            {
              "key": "c",
              "text": "It becomes zero throughout the foundation"
            },
            {
              "key": "d",
              "text": "It becomes uniformly infinite beneath the whole floor"
            }
          ],
          "answer": "a",
          "explanation": "The end-pile expression is G_E = H/(pi d sqrt(lambda)). As d tends to zero at fixed positive floor length, the denominator tends to zero. This is a localized mathematical edge singularity, not a uniform infinite gradient in real soil.<p>Source note: Page 28 point 47: restricted infinity to the ideal zero-cutoff sharp-edge limit, not a literal field-wide measurement.</p><p>Capsule 4th ed., p. 28; topic 7 point 47.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 47",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n47"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00048",
          "src": "CAP4-07-00048",
          "text": "A concrete weir accelerates overflow down a downstream glacis into a protected hydraulic-jump basin. Which profile family does this describe?",
          "options": [
            {
              "key": "a",
              "text": "Broad-crested weir without a downstream glacis"
            },
            {
              "key": "b",
              "text": "Sharp-crested measuring weir"
            },
            {
              "key": "c",
              "text": "Sloping-glacis weir"
            },
            {
              "key": "d",
              "text": "Vertical-drop weir"
            }
          ],
          "answer": "c",
          "explanation": "The sloping glacis carries the overflow to a designed stilling arrangement, where a hydraulic jump can dissipate energy. Its geometry and protection, not the date on a textbook, identify the profile family.<p>Source note: Page 28 point 48: replaced time-sensitive &#39;recent origin&#39; trivia with the actual sloping-weir hydraulic form.</p><p>Capsule 4th ed., p. 28; topic 7 point 48.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 48",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n48"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00049",
          "src": "CAP4-07-00049",
          "text": "An overflow crest is shaped to approximately follow the lower surface of a free nappe at a selected design head. What is the principal reason for this ogee profiling?",
          "options": [
            {
              "key": "a",
              "text": "A coefficient unchanged when operating head differs from design head"
            },
            {
              "key": "b",
              "text": "Efficient overflow with a compatible design-head pressure profile"
            },
            {
              "key": "c",
              "text": "A hydraulic jump formed on the crest at the design head"
            },
            {
              "key": "d",
              "text": "A submerged-flow rating determined by upstream head alone"
            }
          ],
          "answer": "b",
          "explanation": "An ogee profile is related to the design nappe, promoting efficient attached overflow at its intended head. Off-design head changes surface pressures and coefficient. The entire profile is not necessarily one parabola or the best form under every criterion.<p>Source note: Page 28 point 49: &#39;parabolic is most efficient&#39; was qualified using the nearby ogee discussion; no universal superiority or exact parabola is asserted.</p><p>Capsule 4th ed., p. 28; topic 7 point 49.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 49",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n49"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00050",
          "src": "CAP4-07-00050",
          "text": "A river contains sufficient seasonal flow but its water surface is too low to feed a gravity canal. What is the primary diversion function of a weir or barrage?",
          "options": [
            {
              "key": "a",
              "text": "Lower the canal tailwater without changing intake head"
            },
            {
              "key": "b",
              "text": "Supply pumping energy directly to water entering the canal"
            },
            {
              "key": "c",
              "text": "Raise the upstream level to provide diversion head"
            },
            {
              "key": "d",
              "text": "Provide full-season storage as the defining diversion function"
            }
          ],
          "answer": "c",
          "explanation": "A weir or barrage raises or controls the upstream water level so that water can enter the canal under available head. It redistributes hydraulic levels; it does not create water or guarantee complete sediment removal.<p>Capsule 4th ed., p. 28; topic 7 point 50.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 50",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n50"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00051",
          "src": "CAP4-07-00051",
          "text": "A diversion structure maintains its pond level chiefly through gates across low-sill bays, which can be opened widely during floods. How is it conventionally distinguished from a fixed-crest weir?",
          "options": [
            {
              "key": "a",
              "text": "It is a fixed weir because its flood bays have gates"
            },
            {
              "key": "b",
              "text": "It is a barrage because it has no movable control"
            },
            {
              "key": "c",
              "text": "It is a barrage with predominantly gated control"
            },
            {
              "key": "d",
              "text": "It is a canal escape because its sill is low"
            }
          ],
          "answer": "c",
          "explanation": "A barrage normally relies on gates over relatively low sills for level and flood-passage control. A weir relies mainly on its raised crest, although some weirs have shutters or gates. Mere presence of any gate is therefore an oversimplified distinction.<p>Source note: Page 28 point 51: qualified the absolute gates/no-gates classification.</p><p>Capsule 4th ed., p. 28; topic 7 point 51.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 51",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n51"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00052",
          "src": "CAP4-07-00052",
          "text": "A designer estimates seepage resistance by tracing the structure-soil contact around the floor and piles, rather than solving the head field through the soil. Which historical model is being used?",
          "options": [
            {
              "key": "a",
              "text": "Bligh's creep theory"
            },
            {
              "key": "b",
              "text": "Manning's open-channel resistance law"
            },
            {
              "key": "c",
              "text": "Shields' grain-entrainment criterion"
            },
            {
              "key": "d",
              "text": "Khosla's potential-flow method"
            }
          ],
          "answer": "a",
          "explanation": "Bligh idealizes a creep path along the foundation contact and relates resistance to that path length. Actual seepage occupies a two-dimensional or three-dimensional soil domain; the contact-path assumption is an empirical model, not literal confinement of all water.<p>Capsule 4th ed., p. 28; topic 7 point 52.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 52",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n52"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00053",
          "src": "CAP4-07-00053",
          "text": "Under Bligh's own unweighted creep convention, what effective-length contributions come from 12 m of horizontal contact and 12 m of vertical contact?",
          "options": [
            {
              "key": "a",
              "text": "12 m and 12 m"
            },
            {
              "key": "b",
              "text": "4 m and 12 m"
            },
            {
              "key": "c",
              "text": "12 m and 4 m"
            },
            {
              "key": "d",
              "text": "36 m and 12 m"
            }
          ],
          "answer": "a",
          "explanation": "Bligh assigns equal weight to each metre of horizontal and vertical contact. Both contribute 12 m, giving 24 m in total. Reducing the horizontal contribution to one-third belongs to Lane's different weighted-creep convention.<p>Source note: Page 28 point 53 and page 30 point 131 duplicate the equal-weighting fact and are merged.</p><p>Capsule 4th ed., pp. 28, 30; topic 7 point 53; topic 7 point 131.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 28, 30; topic 7 point 53; topic 7 point 131",
            "pages": [
              28,
              30
            ],
            "points": [
              "capsule-t07-p028-n53",
              "capsule-t07-p030-n131"
            ]
          },
          "topic": "ACiE0703",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00054",
          "src": "CAP4-07-00054",
          "text": "Which method combines standard floor-and-pile potential-flow solutions with corrections for interactions and geometry in traditional hydraulic-floor design?",
          "options": [
            {
              "key": "a",
              "text": "Kennedy's critical-velocity-ratio method"
            },
            {
              "key": "b",
              "text": "Bligh's uniform contact-creep approximation"
            },
            {
              "key": "c",
              "text": "Lacey's adjustable-channel regime method"
            },
            {
              "key": "d",
              "text": "Khosla's method of independent variables"
            }
          ],
          "answer": "d",
          "explanation": "Khosla's method uses standard analytical profiles and prescribed corrections, including pile interference, floor thickness and floor slope. It evaluates head distributions and gradients rather than treating every contact segment as an equivalent length.<p>Capsule 4th ed., p. 28; topic 7 point 54.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 54",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n54"
            ]
          },
          "topic": "ACiE0703",
          "kind": "recall"
        },
        {
          "id": "CAP4-07-00056",
          "src": "CAP4-07-00056",
          "text": "A weir body has weight W exactly equal to uplift U, with no other vertical forces or anchorage. What follows for its vertical foundation reaction?",
          "options": [
            {
              "key": "a",
              "text": "Reaction equal to W, since seepage does not affect contact"
            },
            {
              "key": "b",
              "text": "Reaction equal to U, with a flotation safety factor of two"
            },
            {
              "key": "c",
              "text": "Reaction equal to W plus U, with additional friction available"
            },
            {
              "key": "d",
              "text": "Zero reaction and no reserve against flotation"
            }
          ],
          "answer": "d",
          "explanation": "Vertical equilibrium gives N = W - U = 0. A gravity weir relies principally on self-weight, but equality of weight and uplift is neutral flotation under these assumptions, not a definition of safe gravity action.<p>Source note: Page 28 point 56: corrected the unsafe claim that complete weight-uplift balance defines a gravity weir.</p><p>Capsule 4th ed., p. 28; topic 7 point 56.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 56",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n56"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00057",
          "src": "CAP4-07-00057",
          "text": "A concrete structure weighs 1000 kN and has 300 kN uplift. With no other vertical forces, no cohesion and base friction coefficient 0.60, what sliding resistance comes from friction?",
          "options": [
            {
              "key": "a",
              "text": "420 kN"
            },
            {
              "key": "b",
              "text": "600 kN"
            },
            {
              "key": "c",
              "text": "180 kN"
            },
            {
              "key": "d",
              "text": "780 kN"
            }
          ],
          "answer": "a",
          "explanation": "The effective compressive normal force is 1000 - 300 = 700 kN. Frictional resistance is 0.60 x 700 = 420 kN. Ignoring uplift gives 600 kN and overstates the available resistance; a full stability assessment needs the driving forces too.<p>Capsule 4th ed., p. 28; topic 7 point 57.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 57",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n57"
            ]
          },
          "topic": "ACiE0703",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00058",
          "src": "CAP4-07-00058",
          "text": "A horizontal impervious floor is 42 m long with thin upstream and downstream cutoffs 4 m and 7 m deep. Counting both faces of each cutoff, what is Lane's weighted creep length?",
          "options": [
            {
              "key": "a",
              "text": "78 m"
            },
            {
              "key": "b",
              "text": "25 m"
            },
            {
              "key": "c",
              "text": "64 m"
            },
            {
              "key": "d",
              "text": "36 m"
            }
          ],
          "answer": "d",
          "explanation": "Vertical contact is 2 x 4 + 2 x 7 = 22 m. Lane weights horizontal contact by one-third, adding 42/3 = 14 m, so the weighted length is 36 m. Bligh would give the unweighted 22 + 42 = 64 m.<p>Source note: Page 28 point 58: complete page text shows the denominator 3 below L, which the extracted numbered point omits. This agrees with the corrected nearby Lane notes.</p><p>Capsule 4th ed., p. 28; topic 7 point 58.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 58",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n58"
            ]
          },
          "topic": "ACiE0703",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00059",
          "src": "CAP4-07-00059",
          "text": "For Khosla's ideal horizontal floor with a single downstream end pile, define alpha = b/d and lambda = [1 + sqrt(1 + alpha^2)]/2. Which expression gives the exit gradient for retained head H?",
          "options": [
            {
              "key": "a",
              "text": "H/[pi d sqrt(lambda)]"
            },
            {
              "key": "b",
              "text": "pi H/[d sqrt(lambda)]"
            },
            {
              "key": "c",
              "text": "H/[pi d lambda]"
            },
            {
              "key": "d",
              "text": "H sqrt(lambda)/(pi d)"
            }
          ],
          "answer": "a",
          "explanation": "The standard end-pile result is G_E = H/(pi d sqrt(lambda)). H and d use the same length unit, making the result dimensionless. Lambda is determined by floor-to-pile geometry, not a hydraulic-conductivity or soil-permeability factor.<p>Source note: Page 28 point 59: the PDF text damages the radical. Formula restored from the explicit isolated-end-pile relation in nearby corrected notes; no visual verification claimed.</p><p>Capsule 4th ed., p. 28; topic 7 point 59.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 59",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n59"
            ]
          },
          "topic": "ACiE0703",
          "kind": "recall"
        },
        {
          "id": "CAP4-07-00060",
          "src": "CAP4-07-00060",
          "text": "Which pair of hydraulic checks is central when choosing downstream cutoff penetration below a barrage floor?",
          "options": [
            {
              "key": "a",
              "text": "Mean floor uplift and crest discharge coefficient alone"
            },
            {
              "key": "b",
              "text": "Total creep length and upstream pond level alone"
            },
            {
              "key": "c",
              "text": "Permissible exit gradient and embedment after design scour"
            },
            {
              "key": "d",
              "text": "Mean scour depth and canal-head sill elevation alone"
            }
          ],
          "answer": "c",
          "explanation": "The cutoff must control emerging seepage gradients while remaining effective after scour removes surrounding bed material. Structural strength, construction, durability and soil variability also matter; naming two hydraulic checks does not exhaust design requirements.<p>Source note: Page 28 point 60: source supplies only a count of two. The two central hydraulic considerations are stated from nearby corrected notes without claiming an exhaustive two-item design rule.</p><p>Capsule 4th ed., p. 28; topic 7 point 60.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 60",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n60"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00072",
          "src": "CAP4-07-00072",
          "text": "Sediment-rich lower river layers are intercepted and led toward undersluices before they enter a canal head regulator. What is this device called?",
          "options": [
            {
              "key": "a",
              "text": "Canal settling basin"
            },
            {
              "key": "b",
              "text": "Canal cross regulator"
            },
            {
              "key": "c",
              "text": "Silt excluder"
            },
            {
              "key": "d",
              "text": "Canal silt ejector"
            }
          ],
          "answer": "c",
          "explanation": "An excluder acts in the river approach to keep sediment-rich flow out of the canal. An ejector removes sediment after entry into the canal. Location in the sediment pathway, rather than merely the word removal, distinguishes them.<p>Capsule 4th ed., p. 28; topic 7 point 75.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 75",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n75"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00096",
          "src": "CAP4-07-00096",
          "text": "A canal head regulator has gates closing onto an intake sill raised above the adjacent undersluice crest. What is the main sediment-related reason for the raised sill?",
          "options": [
            {
              "key": "a",
              "text": "Reduce admission of sediment-rich near-bed flow"
            },
            {
              "key": "b",
              "text": "Increase undersluice sill height to match the canal sill"
            },
            {
              "key": "c",
              "text": "Replace the upstream silt-exclusion system entirely"
            },
            {
              "key": "d",
              "text": "Pass the coarser bottom load preferentially into the canal"
            }
          ],
          "answer": "a",
          "explanation": "A raised canal-intake sill helps avoid the most sediment-rich lower river layers, while low undersluices provide a flushing path. Gates still control admission at the sill. The relative levels do not justify saying that head regulators have no gates.<p>Source note: Page 29 point 97: corrected the ambiguous no-gates-at-bed statement using a defined raised-sill layout; no absolute gate prohibition is taught.</p><p>Capsule 4th ed., p. 29; topic 7 point 97.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 97",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n97"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00105",
          "src": "CAP4-07-00105",
          "text": "Why is an undersluice crest commonly placed near riverbed level and below the canal intake sill?",
          "options": [
            {
              "key": "a",
              "text": "To obtain canal command by raising the undersluice pond alone"
            },
            {
              "key": "b",
              "text": "To hold bottom sediment permanently in the intake pocket"
            },
            {
              "key": "c",
              "text": "To provide a low-level path for sediment-rich flushing flow"
            },
            {
              "key": "d",
              "text": "To admit the heaviest bed material preferentially into the canal"
            }
          ],
          "answer": "c",
          "explanation": "Low undersluices can draw sediment-rich bottom water away from the intake pocket while the raised canal sill admits higher layers. Effective flushing still needs sufficient head and transport capacity. Exact crest elevation follows the surveyed bed and design layout.<p>Source note: Page 29 point 107: &#39;at bed level&#39; is a usual relative arrangement, not an immutable elevation in every mobile-bed river.</p><p>Capsule 4th ed., p. 29; topic 7 point 107.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 107",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n107"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00110",
          "src": "CAP4-07-00110",
          "text": "A preliminary undersluice brief requires the maximum of twice a 20-cumec canal flow, 12% of a 1000-cumec flood and an 80-cumec winter passage requirement. What numerical requirement governs before separate head-dependent rating checks?",
          "options": [
            {
              "key": "a",
              "text": "120 cumecs"
            },
            {
              "key": "b",
              "text": "40 cumecs"
            },
            {
              "key": "c",
              "text": "80 cumecs"
            },
            {
              "key": "d",
              "text": "240 cumecs"
            }
          ],
          "answer": "a",
          "explanation": "The three specified requirements are 2 x 20 = 40, 0.12 x 1000 = 120 and 80 cumecs. Their maximum is 120, not their sum of 240. The structure must still pass each requirement at the head and gate state applicable to that case.<p>Source note: Page 29 point 112: 12% is an explicit selection within the source&#39;s 10-15% preliminary range. Neither that range nor twice-canal flow is claimed as a universal adopted standard.</p><p>Capsule 4th ed., p. 29; topic 7 point 112.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 112",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n112"
            ]
          },
          "topic": "ACiE0703",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00111",
          "src": "CAP4-07-00111",
          "text": "Undersluices pass 120 cumecs at flood head, but must also pass 80 cumecs at a much smaller winter head. Does the flood-capacity result alone prove winter adequacy?",
          "options": [
            {
              "key": "a",
              "text": "No, the winter head and gate-opening rating must be checked"
            },
            {
              "key": "b",
              "text": "Yes, any larger flood discharge proves every lower-head case"
            },
            {
              "key": "c",
              "text": "No, winter flow must always be added to flood flow"
            },
            {
              "key": "d",
              "text": "Yes, undersluice discharge is independent of retained head"
            }
          ],
          "answer": "a",
          "explanation": "The available flow through a given opening depends on head and flow regime. A capacity of 120 at a high flood head does not establish 80 at a lower winter head. Separate operating cases prevent a simple maximum-of-numbers rule from hiding a low-head deficiency.<p>Source note: Page 29 point 112: separately tests the winter-flow qualification in the multi-condition source entry.</p><p>Capsule 4th ed., p. 29; topic 7 point 112.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 112",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n112"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00115",
          "src": "CAP4-07-00115",
          "text": "Which regulator is installed at the entrance of a canal taking off directly from a river to admit, meter or stop its supply?",
          "options": [
            {
              "key": "a",
              "text": "Canal head regulator"
            },
            {
              "key": "b",
              "text": "Drain outlet non-return valve"
            },
            {
              "key": "c",
              "text": "Parent-canal cross regulator"
            },
            {
              "key": "d",
              "text": "Canal escape regulator"
            }
          ],
          "answer": "a",
          "explanation": "The head regulator controls river-to-canal admission. A cross regulator instead spans a parent canal to control passage and upstream level; an escape controls surplus disposal. Position in the water route distinguishes these related functions.<p>Capsule 4th ed., p. 29; topic 7 point 116.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 116",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n116"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00117",
          "src": "CAP4-07-00117",
          "text": "For an ideal Khosla downstream end-pile case, retained head H = 6 m, pile depth d = 4 m and the explicitly geometric parameter lambda = 1.5. Using G_E = H/[pi d sqrt(lambda)], what is the exit gradient?",
          "options": [
            {
              "key": "a",
              "text": "1.500"
            },
            {
              "key": "b",
              "text": "0.318"
            },
            {
              "key": "c",
              "text": "0.403"
            },
            {
              "key": "d",
              "text": "0.390"
            }
          ],
          "answer": "d",
          "explanation": "Substitution gives 6/[pi x 4 x sqrt(1.5)] = 0.389848, rounding to 0.390. Lambda describes floor/pile geometry. If 1.5 were alpha = b/d instead, lambda would be different and the result would be 0.403332; conductivity is neither parameter.<p>Source note: Page 29 point 118: the source calls 1.5 a soil-permeability factor and gives only a characteristic path depth, so its original exit gradient is not uniquely derivable. The new stem explicitly supplies d and geometric lambda; 0.38 is not correct rounding under that repaired model.</p><p>Capsule 4th ed., p. 29; topic 7 point 118.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 118",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n118"
            ]
          },
          "topic": "ACiE0703",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00123",
          "src": "CAP4-07-00123",
          "text": "A barrage floor has excessive emerging seepage gradient at its downstream toe. What is the principal seepage purpose of a properly designed downstream sheet pile?",
          "options": [
            {
              "key": "a",
              "text": "Supply structural anchorage without changing the seepage field"
            },
            {
              "key": "b",
              "text": "Lengthen the emergence path and reduce local exit gradient"
            },
            {
              "key": "c",
              "text": "Keep upstream pond head but eliminate all underside uplift"
            },
            {
              "key": "d",
              "text": "Reduce local gradient by lowering soil conductivity alone"
            }
          ],
          "answer": "b",
          "explanation": "A downstream cutoff changes the seepage field and spreads the emergence path, reducing the local exit gradient. It may retain substantial pressures beneath parts of the floor, so uplift, filters and penetration after scour must still be assessed together.<p>Source note: Page 30 point 121 has only an incomplete question and no answer. The hydraulic purpose is supplied from the corrected nearby cutoff notes.</p><p>Capsule 4th ed., p. 30; topic 7 point 121.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 30; topic 7 point 121",
            "pages": [
              30
            ],
            "points": [
              "capsule-t07-p030-n121"
            ]
          },
          "topic": "ACiE0703",
          "kind": "application"
        }
      ]
    },
    {
      "id": "ACiE0704",
      "name": "River training works",
      "subject": "Irrigation and Drainage",
      "questions": [
        {
          "id": "CAP4-07-00019",
          "src": "CAP4-07-00019",
          "text": "A preliminary bank-protection check follows the IRC 89:1997 Section 7.4.5 assumption for a right-angle bend: maximum scour depth is twice the mean scour depth of 3.0 m below HFL. If HFL is RL 104.0 m, what scour-bed level follows?",
          "options": [
            {
              "key": "a",
              "text": "RL 101.0 m"
            },
            {
              "key": "b",
              "text": "RL 98.0 m"
            },
            {
              "key": "c",
              "text": "RL 102.5 m"
            },
            {
              "key": "d",
              "text": "RL 110.0 m"
            }
          ],
          "answer": "b",
          "explanation": "The assumed local depth is 2.0 x 3.0 = 6.0 m below HFL, hence scour-bed RL = 104.0 - 6.0 = 98.0 m. The multiplier is applied to depth from the stated water datum, not automatically to extra erosion below the existing bed.<p>Source note: Page 27 point 20: the reviewed text of IRC 89:1997 Section 7.4.5 supports 2.00 times mean scour depth for bank protection at a right-angle bend, with depth measured below HFL. This is edition- and scope-specific guidance, not current Nepal adoption or a universal river law; normal flow depth is not the mean scour depth.</p><p>Capsule 4th ed., p. 27; topic 7 point 20.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 20",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n20"
            ]
          },
          "topic": "ACiE0704",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00055",
          "src": "CAP4-07-00055",
          "text": "One flow class transports bed material at 10 kg/s for 100 hours annually; a rarer class transports 50 kg/s for 10 hours. Which class contributes more annual sediment transport in this simplified effective-discharge comparison?",
          "options": [
            {
              "key": "a",
              "text": "The 50 kg/s class: 1.8 million kg"
            },
            {
              "key": "b",
              "text": "The 50 kg/s class: 18.0 million kg"
            },
            {
              "key": "c",
              "text": "Both classes: 3.6 million kg each"
            },
            {
              "key": "d",
              "text": "The 10 kg/s class: 3.6 million kg"
            }
          ],
          "answer": "d",
          "explanation": "Transported mass equals rate times duration: 10 x 100 x 3600 = 3.6 million kg versus 50 x 10 x 3600 = 1.8 million kg. Channel-forming importance depends on magnitude and recurrence or duration, not automatically the largest instantaneous discharge.<p>Source note: Page 28 point 55: uses an explicit effective-discharge illustration; it does not identify a universal dominant flood return period.</p><p>Capsule 4th ed., p. 28; topic 7 point 55.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 55",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n55"
            ]
          },
          "topic": "ACiE0704",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00061",
          "src": "CAP4-07-00061",
          "text": "A river-training scheme is primarily intended to pass design floods with tolerable inundation and bank damage. Which traditional training category best describes this objective?",
          "options": [
            {
              "key": "a",
              "text": "Field drainage for root-zone aeration"
            },
            {
              "key": "b",
              "text": "Low-water training for navigation depth"
            },
            {
              "key": "c",
              "text": "Mean-water training for sediment balance"
            },
            {
              "key": "d",
              "text": "High-water training for discharge"
            }
          ],
          "answer": "d",
          "explanation": "High-water or discharge training addresses flood conveyance and protection. Low-water training focuses on navigable depth, while mean-water training concerns sediment behavior. Confinement may transfer flood risk rather than remove flood volume.<p>Capsule 4th ed., p. 28; topic 7 point 61.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 61",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n61"
            ]
          },
          "topic": "ACiE0704",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00062",
          "src": "CAP4-07-00062",
          "text": "Which embankment is not a river-training work by its stated primary function?",
          "options": [
            {
              "key": "a",
              "text": "A flood levee limiting river inundation of protected land"
            },
            {
              "key": "b",
              "text": "A canal bank retaining water within an irrigation channel"
            },
            {
              "key": "c",
              "text": "A guide bund steering river flow into bridge openings"
            },
            {
              "key": "d",
              "text": "A spur redirecting river current away from a bank"
            }
          ],
          "answer": "b",
          "explanation": "The canal bank's stated job is canal containment. Guide bunds, levees and spurs act directly on river flow or its floodplain. A real embankment can have combined functions, so classification follows its purpose rather than its material alone.<p>Capsule 4th ed., p. 28; topic 7 point 62.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 62",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n62"
            ]
          },
          "topic": "ACiE0704",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00063",
          "src": "CAP4-07-00063",
          "text": "A bank-toe apron must settle onto a developing scour face without behaving as one rigid slab. Which pair of materials can form such flexible protection when properly designed?",
          "options": [
            {
              "key": "a",
              "text": "Unreinforced monolithic concrete or bonded brick masonry"
            },
            {
              "key": "b",
              "text": "Bare filter fabric alone or impermeable membrane alone"
            },
            {
              "key": "c",
              "text": "Mortar-bound stone pitching or a continuous grouted-rock slab"
            },
            {
              "key": "d",
              "text": "Loose graded stone or suitably connected gabion mattresses"
            }
          ],
          "answer": "d",
          "explanation": "Loose stone can rearrange as the bed scours; designed gabion mattresses can deform and maintain coverage. Gabions are not the only solution, and connections, stone stability and bed behavior must permit launching. A rigid bonded slab does not launch in the same way.<p>Source note: Page 28 points 63 and 64 overlap on gabions. This shared question covers gabion and stone armour; a separate point-63 question covers geotextile function.</p><p>Capsule 4th ed., p. 28; topic 7 point 63; topic 7 point 64.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 63; topic 7 point 64",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n63",
              "capsule-t07-p028-n64"
            ]
          },
          "topic": "ACiE0704",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00064",
          "src": "CAP4-07-00064",
          "text": "A geotextile is installed beneath stone or gabion toe protection. What is its intended filter role when correctly selected and detailed?",
          "options": [
            {
              "key": "a",
              "text": "Provide the rigid structural support for launching mattresses"
            },
            {
              "key": "b",
              "text": "Provide a watertight membrane that traps backfill water"
            },
            {
              "key": "c",
              "text": "Replace the stone weight needed to resist flow drag"
            },
            {
              "key": "d",
              "text": "Retain soil while permitting drainage through the layer"
            }
          ],
          "answer": "d",
          "explanation": "A compatible geotextile can limit soil migration while allowing water through. It does not automatically replace heavy armour or remain intact under arbitrary launching deformation. Filter, armour and connections must be designed as a compatible system.<p>Source note: Page 28 point 63: distinguished geotextile filtration from stone/gabion armour rather than treating all listed materials as interchangeable.</p><p>Capsule 4th ed., p. 28; topic 7 point 63.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 63",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n63"
            ]
          },
          "topic": "ACiE0704",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00065",
          "src": "CAP4-07-00065",
          "text": "Flood currents approach a bridge obliquely and threaten to bypass its intended waterway. What is the principal role of guide banks?",
          "options": [
            {
              "key": "a",
              "text": "Intercept bed load before it enters a canal intake"
            },
            {
              "key": "b",
              "text": "Lead the current through the intended opening"
            },
            {
              "key": "c",
              "text": "Maintain the canal pond level by gated regulation"
            },
            {
              "key": "d",
              "text": "Reduce the incoming flood peak by reservoir detention"
            }
          ],
          "answer": "b",
          "explanation": "Guide banks organize approach and departure flow and protect the crossing approaches. They steer and confine flow locally; excessive constriction can instead increase afflux and scour, so waterway and morphology must be checked.<p>Capsule 4th ed., p. 28; topic 7 point 65.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 65",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n65"
            ]
          },
          "topic": "ACiE0704",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00066",
          "src": "CAP4-07-00066",
          "text": "Why is the upstream arm often longer than the downstream arm in a conventional guide-bank layout?",
          "options": [
            {
              "key": "a",
              "text": "Its length is set by a universal two-to-one arm ratio"
            },
            {
              "key": "b",
              "text": "It progressively captures and aligns the approaching current"
            },
            {
              "key": "c",
              "text": "It serves chiefly as storage that attenuates the flood hydrograph"
            },
            {
              "key": "d",
              "text": "It dissipates the exit jet after flow leaves the bridge"
            }
          ],
          "answer": "b",
          "explanation": "A longer upstream reach can intercept an oblique approach and guide it gradually toward the waterway. Downstream protection manages expansion and local attack. Actual proportions depend on the site, so the usual length inequality is not universal.<p>Source note: Page 28 points 66 and 67 are identical length comparisons and are merged, with the conventional rather than absolute scope stated.</p><p>Capsule 4th ed., p. 28; topic 7 point 66; topic 7 point 67.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 66; topic 7 point 67",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n66",
              "capsule-t07-p028-n67"
            ]
          },
          "topic": "ACiE0704",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00097",
          "src": "CAP4-07-00097",
          "text": "A survey labels a river 'snow-fed' and one of its reaches 'steep, confined and boulder-bedded'. What do these descriptions classify, respectively?",
          "options": [
            {
              "key": "a",
              "text": "Water-source regime and local reach characteristics"
            },
            {
              "key": "b",
              "text": "Local reach geometry and irrigation efficiency"
            },
            {
              "key": "c",
              "text": "Sediment concentration and barrage gate setting"
            },
            {
              "key": "d",
              "text": "Flood return period and crop water requirement"
            }
          ],
          "answer": "a",
          "explanation": "Snow-fed describes an important origin of the river's water supply. Gradient, confinement and bed material describe the reach itself. A single river may pass through very different reaches, so origin alone cannot define all their hydraulic characteristics.<p>Source note: Page 29 point 98: clarified the distinction between source-based river classification and local reach classification.</p><p>Capsule 4th ed., p. 29; topic 7 point 98.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 98",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n98"
            ]
          },
          "topic": "ACiE0704",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00098",
          "src": "CAP4-07-00098",
          "text": "A normal-scour estimate is 5 m below HFL at RL 100 m. The existing bed is RL 97 m. What are the estimated scoured-bed RL and additional lowering below the existing bed?",
          "options": [
            {
              "key": "a",
              "text": "RL 95 m and 5 m"
            },
            {
              "key": "b",
              "text": "RL 102 m and minus 5 m"
            },
            {
              "key": "c",
              "text": "RL 95 m and 2 m"
            },
            {
              "key": "d",
              "text": "RL 92 m and 5 m"
            }
          ],
          "answer": "c",
          "explanation": "The estimated bed level is 100 - 5 = RL 95 m. Relative to the existing bed at 97 m, this is 97 - 95 = 2 m of additional lowering. A scour depth from flood-water level must not be subtracted again from the old bed.<p>Capsule 4th ed., p. 29; topic 7 point 99.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 99",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n99"
            ]
          },
          "topic": "ACiE0704",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00099",
          "src": "CAP4-07-00099",
          "text": "Where is a conventional launching apron initially placed so that it can protect a bank toe as the adjacent riverbed scours?",
          "options": [
            {
              "key": "a",
              "text": "Only on the bank slope above the original bed"
            },
            {
              "key": "b",
              "text": "On the bed beyond the protected bank toe"
            },
            {
              "key": "c",
              "text": "Along the landside toe outside the river channel"
            },
            {
              "key": "d",
              "text": "Buried wholly below the predicted deepest scour level"
            }
          ],
          "answer": "b",
          "explanation": "The apron begins at the bed near and beyond the toe. As bed support is removed, suitable flexible material settles onto the new scour face. Crest protection or an upstream water-surface location cannot provide the same launching geometry.<p>Capsule 4th ed., p. 29; topic 7 point 100.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 100",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n100"
            ]
          },
          "topic": "ACiE0704",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00102",
          "src": "CAP4-07-00102",
          "text": "A sediment-carrying alluvial river erodes an outer bend and builds a point bar on the inner bend. Which interpretation fits this observation?",
          "options": [
            {
              "key": "a",
              "text": "Meander adjustment can occur in mobile alluvial boundaries"
            },
            {
              "key": "b",
              "text": "Outer erosion and inner deposition imply uniform bed aggradation"
            },
            {
              "key": "c",
              "text": "Point-bar growth establishes that sediment transport has ceased"
            },
            {
              "key": "d",
              "text": "The observation necessarily identifies a braided multi-channel reach"
            }
          ],
          "answer": "a",
          "explanation": "Curvature, secondary circulation, bank resistance and sediment transport can produce outer-bank erosion and inner-bank deposition. Meandering is entirely possible in alluvial rivers; not all alluvial channels must meander, since braided and straighter forms also occur.<p>Source note: Page 29 point 103: reversed the false impossibility claim without asserting that all alluvial channels meander.</p><p>Capsule 4th ed., p. 29; topic 7 point 103.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 103",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n103"
            ]
          },
          "topic": "ACiE0704",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00103",
          "src": "CAP4-07-00103",
          "text": "In the conventional orientation mnemonic, a spur's bank-root-to-tip vector points upstream of the bank normal. Which type is intended to push the main current away from the bank?",
          "options": [
            {
              "key": "a",
              "text": "Attracting spur"
            },
            {
              "key": "b",
              "text": "Repelling spur"
            },
            {
              "key": "c",
              "text": "Longitudinal guide bank"
            },
            {
              "key": "d",
              "text": "Normal or deflecting spur in this mnemonic"
            }
          ],
          "answer": "b",
          "explanation": "An upstream-pointing spur is termed repelling in the stated textbook convention. A downstream-pointing spur is attracting. Actual flow effects also depend on permeability, submergence and approach direction, so orientation alone is not a performance guarantee.<p>Source note: Page 29 point 104: defined the root-to-tip direction explicitly and used the conventional mnemonic, not a universal code classification.</p><p>Capsule 4th ed., p. 29; topic 7 point 104.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 104",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n104"
            ]
          },
          "topic": "ACiE0704",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00116",
          "src": "CAP4-07-00116",
          "text": "Inspection after a flood finds the deepest local hole near a guide-bank nose. Which mechanism best explains the need for especially robust protection there?",
          "options": [
            {
              "key": "a",
              "text": "Uniform reach-average scour unaffected by local geometry"
            },
            {
              "key": "b",
              "text": "Concentrated turning currents and local turbulence"
            },
            {
              "key": "c",
              "text": "A fall in grain specific gravity caused by the bend"
            },
            {
              "key": "d",
              "text": "A reduction in flow shear caused by nose stagnation alone"
            }
          ],
          "answer": "b",
          "explanation": "Approach flow turns and accelerates around a guide-bank nose, generating local turbulence and concentrated erosive attack. Nose scour can therefore exceed reach-average scour. Exact severity and protection require local hydraulic and bed information.<p>Source note: Page 29 point 117: nose vulnerability is a common local mechanism, not an invariant ranking for every flood geometry.</p><p>Capsule 4th ed., p. 29; topic 7 point 117.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 117",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n117"
            ]
          },
          "topic": "ACiE0704",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00118",
          "src": "CAP4-07-00118",
          "text": "Which description distinguishes a river spur from a longitudinal levee without imposing one universal orientation?",
          "options": [
            {
              "key": "a",
              "text": "It projects from the bank into the river, normally or obliquely"
            },
            {
              "key": "b",
              "text": "It runs longitudinally to exclude floods from protected land"
            },
            {
              "key": "c",
              "text": "It must be exactly perpendicular to the local current at every stage"
            },
            {
              "key": "d",
              "text": "It covers the bank slope without projecting into the channel"
            }
          ],
          "answer": "a",
          "explanation": "A spur or groyne projects into the river to influence the current. It may be normal to the bank or inclined upstream or downstream. A levee is primarily longitudinal flood containment; 'transverse' does not require an exact right angle in every design.<p>Source note: Page 30 point 119: corrected the universal perpendicular-only description.</p><p>Capsule 4th ed., p. 30; topic 7 point 119.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 30; topic 7 point 119",
            "pages": [
              30
            ],
            "points": [
              "capsule-t07-p030-n119"
            ]
          },
          "topic": "ACiE0704",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00125",
          "src": "CAP4-07-00125",
          "text": "A river carries abundant suspended sediment and a project seeks gradual deposition in a sheltered bank zone. Why might permeable spurs be considered?",
          "options": [
            {
              "key": "a",
              "text": "They increase local transport capacity to build the sheltered deposit"
            },
            {
              "key": "b",
              "text": "They sieve out suspended grains through openings smaller than every grain"
            },
            {
              "key": "c",
              "text": "They can slow local flow while admitting some water through"
            },
            {
              "key": "d",
              "text": "They force all flow around the tip without admitting throughflow"
            }
          ],
          "answer": "c",
          "explanation": "Permeable works add resistance and reduce local transport capacity, potentially encouraging deposition where suspended material is available. Their effectiveness depends on hydraulics and sediment properties; debris blockage and local scour can alter performance.<p>Source note: Page 30 point 123: treated suspended-load supply as a suitability consideration, not proof that permeable spurs are always best.</p><p>Capsule 4th ed., p. 30; topic 7 point 123.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 30; topic 7 point 123",
            "pages": [
              30
            ],
            "points": [
              "capsule-t07-p030-n123"
            ]
          },
          "topic": "ACiE0704",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00131",
          "src": "CAP4-07-00131",
          "text": "A river study identifies the flow range doing most long-term channel-shaping work by combining sediment-transport magnitude with occurrence duration. Which concept is being investigated?",
          "options": [
            {
              "key": "a",
              "text": "Dominant or channel-forming discharge"
            },
            {
              "key": "b",
              "text": "Arithmetic mean of daily discharges"
            },
            {
              "key": "c",
              "text": "Largest instantaneous recorded flood"
            },
            {
              "key": "d",
              "text": "Discharge exceeded for half the record"
            }
          ],
          "answer": "a",
          "explanation": "Dominant discharge concerns the flows that shape the channel over time. The related effective-discharge method compares integrated sediment transport by flow class. Neither the maximum, median nor mean discharge is automatically the channel-forming value.<p>Source note: Page 28 point 55: appended the missing terminology check. Question 55 already tests magnitude times duration, but did not require identification of dominant discharge.</p><p>Capsule 4th ed., p. 28; topic 7 point 55.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 55",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n55"
            ]
          },
          "topic": "ACiE0704",
          "kind": "application"
        }
      ]
    },
    {
      "id": "ACiE0705",
      "name": "Regulating and cross-drainage structures",
      "subject": "Irrigation and Drainage",
      "questions": [
        {
          "id": "CAP4-07-00033",
          "src": "CAP4-07-00033",
          "text": "Downstream canal demand suddenly stops while surplus water continues arriving. Which structure provides a controlled route for the surplus to a suitable natural drain?",
          "options": [
            {
              "key": "a",
              "text": "Canal escape"
            },
            {
              "key": "b",
              "text": "Proportional farm outlet"
            },
            {
              "key": "c",
              "text": "Silt excluder tunnel"
            },
            {
              "key": "d",
              "text": "Canal head regulator"
            }
          ],
          "answer": "a",
          "explanation": "A canal escape safely disposes of surplus canal water to a receiving drain or river with adequate capacity and protection. A regulator controls normal passage, while an excluder targets sediment; neither name by itself specifies a surplus-disposal route.<p>Source note: Page 27 point 33 and page 28 point 71 repeat the escape function and are deliberately covered together.</p><p>Capsule 4th ed., pp. 27, 28; topic 7 point 33; topic 7 point 71.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 27, 28; topic 7 point 33; topic 7 point 71",
            "pages": [
              27,
              28
            ],
            "points": [
              "capsule-t07-p027-n33",
              "capsule-t07-p028-n71"
            ]
          },
          "topic": "ACiE0705",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00035",
          "src": "CAP4-07-00035",
          "text": "A small hillside drain is deliberately admitted into a canal with spare capacity and acceptable water quality. Which arrangement allows the two flows to mix?",
          "options": [
            {
              "key": "a",
              "text": "Canal inlet"
            },
            {
              "key": "b",
              "text": "Superpassage"
            },
            {
              "key": "c",
              "text": "Aqueduct"
            },
            {
              "key": "d",
              "text": "Siphon aqueduct"
            }
          ],
          "answer": "a",
          "explanation": "An inlet admits drainage water into the canal instead of carrying the streams across separately. Spare capacity, sediment and water quality must be checked, with surplus disposal where necessary. Grade-separated aqueduct and superpassage arrangements keep the flows separate.<p>Capsule 4th ed., p. 27; topic 7 point 35.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 27; topic 7 point 35",
            "pages": [
              27
            ],
            "points": [
              "capsule-t07-p027-n35"
            ]
          },
          "topic": "ACiE0705",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00067",
          "src": "CAP4-07-00067",
          "text": "A rigid irrigation module maintains constant outlet discharge q as parent-channel depth Y varies within its operating range. What is sensitivity S = d ln q/d ln Y?",
          "options": [
            {
              "key": "a",
              "text": "1"
            },
            {
              "key": "b",
              "text": "Unbounded"
            },
            {
              "key": "c",
              "text": "0"
            },
            {
              "key": "d",
              "text": "0.5"
            }
          ],
          "answer": "c",
          "explanation": "Constant q gives d ln q = 0 for a nonzero depth change, so S = 0. This is conditional on a functioning module within its permitted head range; insufficient supply or excessive submergence can invalidate constant-discharge operation.<p>Capsule 4th ed., p. 28; topic 7 point 68.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 68",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n68"
            ]
          },
          "topic": "ACiE0705",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00068",
          "src": "CAP4-07-00068",
          "text": "Over a 2 km canal alignment, ground level falls 12 m but the designed reach bed slope is 1 in 1000. If the relative canal-to-ground level is to be retained, how much fall must be accommodated by designed drops?",
          "options": [
            {
              "key": "a",
              "text": "10 m"
            },
            {
              "key": "b",
              "text": "2 m"
            },
            {
              "key": "c",
              "text": "12 m"
            },
            {
              "key": "d",
              "text": "14 m"
            }
          ],
          "answer": "a",
          "explanation": "Distributed canal-bed fall is 2000/1000 = 2 m. The remaining ground fall is 12 - 2 = 10 m, to be accommodated by selected drop structures under the stated profile objective. Simply steepening the entire canal could cause excessive velocity.<p>Capsule 4th ed., p. 28; topic 7 point 70.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 70",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n70"
            ]
          },
          "topic": "ACiE0705",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00069",
          "src": "CAP4-07-00069",
          "text": "Two fall locations provide acceptable command and hydraulic performance. One reduces long lengths of high embankment and costly borrow. Which additional selection criterion favors it?",
          "options": [
            {
              "key": "a",
              "text": "Economy of earthwork and the overall longitudinal profile"
            },
            {
              "key": "b",
              "text": "Equal chainage spacing regardless of the earthwork profile"
            },
            {
              "key": "c",
              "text": "The smallest bed drop without considering required embankment"
            },
            {
              "key": "d",
              "text": "The lowest structure cost without considering approach earthwork"
            }
          ],
          "answer": "a",
          "explanation": "Fall siting balances command, safe hydraulics, foundations and cost. Better cut-fill balance and reduced embankment or borrow can favor one feasible location. Earthwork economy is a criterion, not permission to ignore scour or available head.<p>Capsule 4th ed., p. 28; topic 7 point 72.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 72",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n72"
            ]
          },
          "topic": "ACiE0705",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00070",
          "src": "CAP4-07-00070",
          "text": "At a fixed outlet setting, a small 4% increase in parent-canal discharge produces a 4% increase in outlet discharge. What is the approximate outlet flexibility and classification?",
          "options": [
            {
              "key": "a",
              "text": "0.5, half-proportional"
            },
            {
              "key": "b",
              "text": "0.0, rigid modular"
            },
            {
              "key": "c",
              "text": "1.0, locally proportional"
            },
            {
              "key": "d",
              "text": "4.0, hyper-proportional"
            }
          ],
          "answer": "c",
          "explanation": "Flexibility compares fractional changes: F is approximately (delta q/q)/(delta Q/Q) = 4%/4% = 1. Equal percentages, not equal absolute discharges, imply local proportionality. Sensitivity instead compares outlet discharge with parent water depth.<p>Capsule 4th ed., p. 28; topic 7 point 73.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 73",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n73"
            ]
          },
          "topic": "ACiE0705",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00071",
          "src": "CAP4-07-00071",
          "text": "During low supply, a branch canal lacks adequate offtake head although water is present in the parent canal. Which operation can raise the parent level just upstream of the offtake?",
          "options": [
            {
              "key": "a",
              "text": "Partly close a downstream cross regulator"
            },
            {
              "key": "b",
              "text": "Lower the downstream canal bed without control"
            },
            {
              "key": "c",
              "text": "Remove the parent channel's control gates"
            },
            {
              "key": "d",
              "text": "Fully open a nearby canal escape"
            }
          ],
          "answer": "a",
          "explanation": "A cross regulator across the parent channel controls downstream passage and can raise its upstream level, creating the required branch offtake head. Gate operation must remain within capacity and freeboard limits. A head regulator separately meters entry into the branch.<p>Source note: Page 28 point 74 and page 30 point 128 express the same level-raising function and are intentionally combined.</p><p>Capsule 4th ed., pp. 28, 30; topic 7 point 74; topic 7 point 128.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 28, 30; topic 7 point 74; topic 7 point 128",
            "pages": [
              28,
              30
            ],
            "points": [
              "capsule-t07-p028-n74",
              "capsule-t07-p030-n128"
            ]
          },
          "topic": "ACiE0705",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00073",
          "src": "CAP4-07-00073",
          "text": "Which structure addresses a canal crossing above a natural drain rather than controlling admission of river water at the canal head?",
          "options": [
            {
              "key": "a",
              "text": "Canal head regulator"
            },
            {
              "key": "b",
              "text": "Sediment-exclusion pocket"
            },
            {
              "key": "c",
              "text": "Intake control gate"
            },
            {
              "key": "d",
              "text": "Canal aqueduct"
            }
          ],
          "answer": "d",
          "explanation": "An aqueduct carries the canal across a lower drain, whereas the head regulator controls entry to the canal. These are different functions. A site may place several works nearby, so function is more reliable than an absolute claim about where aqueducts can never occur.<p>Source note: Page 28 point 76: replaced the absolute location prohibition with the structure&#39;s distinct purpose.</p><p>Capsule 4th ed., p. 28; topic 7 point 76.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 76",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n76"
            ]
          },
          "topic": "ACiE0705",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00074",
          "src": "CAP4-07-00074",
          "text": "A large canal meets a flashy drain at nearly equal bed levels. A justified scheme permits controlled mixing and regulates canal and drain exits during the short flood. Which arrangement is being considered?",
          "options": [
            {
              "key": "a",
              "text": "Free-flow aqueduct"
            },
            {
              "key": "b",
              "text": "Canal siphon with separated flows"
            },
            {
              "key": "c",
              "text": "Regulated level crossing"
            },
            {
              "key": "d",
              "text": "Free-flow superpassage"
            }
          ],
          "answer": "c",
          "explanation": "A level crossing allows the streams to meet at similar levels with regulating arrangements. Flashy drainage and a large canal can make it a candidate, but combined flood routing, sediment and acceptable mixing must be checked before selection.<p>Source note: Page 28 point 77: retained the stated large-canal, short-flood and near-equal-level conditions without calling them sufficient for automatic preference.</p><p>Capsule 4th ed., p. 28; topic 7 point 77.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 77",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n77"
            ]
          },
          "topic": "ACiE0705",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00075",
          "src": "CAP4-07-00075",
          "text": "For a superpassage, canal FSL is RL 99.0 m, the drain-trough underside is RL 99.8 m and the required clearance is 0.5 m. Does the lower canal meet this clearance check?",
          "options": [
            {
              "key": "a",
              "text": "Yes: available clearance is 0.8 m"
            },
            {
              "key": "b",
              "text": "It cannot be checked without the drain flood-water level"
            },
            {
              "key": "c",
              "text": "No: available clearance is only 0.3 m"
            },
            {
              "key": "d",
              "text": "Yes: available clearance is 1.3 m"
            }
          ],
          "answer": "a",
          "explanation": "The relevant air gap is trough underside minus canal water surface: 99.8 - 99.0 = 0.8 m, exceeding 0.5 m. Merely comparing canal FSL with the drain flood surface ignores the drain-trough structure and cannot establish free-flow clearance.<p>Source note: Page 28 point 78: supplied the actual underside and required clearance, strengthening the source&#39;s insufficient water-surface comparison.</p><p>Capsule 4th ed., p. 28; topic 7 point 78.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 28; topic 7 point 78",
            "pages": [
              28
            ],
            "points": [
              "capsule-t07-p028-n78"
            ]
          },
          "topic": "ACiE0705",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00076",
          "src": "CAP4-07-00076",
          "text": "A natural drain crosses in an upper trough, while the irrigation canal passes underneath with a free surface and adequate air clearance. What is the arrangement?",
          "options": [
            {
              "key": "a",
              "text": "Canal siphon"
            },
            {
              "key": "b",
              "text": "Superpassage"
            },
            {
              "key": "c",
              "text": "Aqueduct"
            },
            {
              "key": "d",
              "text": "Siphon aqueduct"
            }
          ],
          "answer": "b",
          "explanation": "Drain over canal with free-surface flow in the lower canal defines a superpassage. If the lower canal instead fills a pressure conduit, the arrangement is a canal siphon. Naming the upper stream alone is insufficient.<p>Source note: Page 29 point 79 contains two arrangements. Its superpassage fact duplicates page 30 point 124 and is merged here; its canal-siphon fact has a separate question.</p><p>Capsule 4th ed., pp. 29, 30; topic 7 point 79; topic 7 point 124.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., pp. 29, 30; topic 7 point 79; topic 7 point 124",
            "pages": [
              29,
              30
            ],
            "points": [
              "capsule-t07-p029-n79",
              "capsule-t07-p030-n124"
            ]
          },
          "topic": "ACiE0705",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00077",
          "src": "CAP4-07-00077",
          "text": "An irrigation canal is depressed into closed barrels beneath a drainage channel and runs full at the design discharge. Which cross-drainage type is this?",
          "options": [
            {
              "key": "a",
              "text": "Canal siphon"
            },
            {
              "key": "b",
              "text": "Level crossing"
            },
            {
              "key": "c",
              "text": "Siphon aqueduct"
            },
            {
              "key": "d",
              "text": "Superpassage"
            }
          ],
          "answer": "a",
          "explanation": "The lower pressurized stream is the canal, so this is a canal siphon, often called an inverted siphon. In a siphon aqueduct the lower pressure flow is drainage instead. Full pressure flow does not necessarily imply negative gauge pressure.<p>Source note: Page 29 point 79: expanded the ambiguous bare word &#39;syphon&#39; to canal siphon and identified the pressurized stream.</p><p>Capsule 4th ed., p. 29; topic 7 point 79.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 79",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n79"
            ]
          },
          "topic": "ACiE0705",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00078",
          "src": "CAP4-07-00078",
          "text": "Canal water passes in an upper trough and a natural drain passes below with a free surface at its design flood. What is this crossing called?",
          "options": [
            {
              "key": "a",
              "text": "Superpassage"
            },
            {
              "key": "b",
              "text": "Siphon aqueduct"
            },
            {
              "key": "c",
              "text": "Aqueduct"
            },
            {
              "key": "d",
              "text": "Canal siphon"
            }
          ],
          "answer": "c",
          "explanation": "An aqueduct carries canal water above drainage that has free-flow clearance below. A low drain bed alone is insufficient: its design flood surface must also fit beneath the actual underside of the canal structure.<p>Capsule 4th ed., p. 29; topic 7 point 80.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 80",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n80"
            ]
          },
          "topic": "ACiE0705",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00079",
          "src": "CAP4-07-00079",
          "text": "A canal crosses above a drain, but the drain must flow through full pressure barrels during the design flood. What type of structure is required?",
          "options": [
            {
              "key": "a",
              "text": "Superpassage"
            },
            {
              "key": "b",
              "text": "Siphon aqueduct"
            },
            {
              "key": "c",
              "text": "Ordinary aqueduct"
            },
            {
              "key": "d",
              "text": "Canal siphon"
            }
          ],
          "answer": "b",
          "explanation": "Canal over drain with the lower drain pressurized is a siphon aqueduct. Its design requires adequate head for barrel and local losses. The word siphon refers to the pressure undercrossing; it does not mean the canal itself is below the drain.<p>Capsule 4th ed., p. 29; topic 7 point 80.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 80",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n80"
            ]
          },
          "topic": "ACiE0705",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00095",
          "src": "CAP4-07-00095",
          "text": "A free pipe outlet remains controlled by upstream head while downstream water stays below its drowning limit. What is its conventional hydraulic class?",
          "options": [
            {
              "key": "a",
              "text": "Non-module necessarily controlled by both levels"
            },
            {
              "key": "b",
              "text": "Proportional module with flexibility always equal to one"
            },
            {
              "key": "c",
              "text": "Rigid module independent of both levels"
            },
            {
              "key": "d",
              "text": "Semi-module, historically called a flexible module"
            }
          ],
          "answer": "d",
          "explanation": "Free discharge isolates the outlet from downstream changes while upstream head still affects flow, so it is semi-modular. The historical adjective flexible does not specify mathematical flexibility F = 1; drowning can change the outlet's behavior.<p>Source note: Page 29 point 96: separated legacy flexible-module terminology from proportional outlet response.</p><p>Capsule 4th ed., p. 29; topic 7 point 96.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 96",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n96"
            ]
          },
          "topic": "ACiE0705",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00107",
          "src": "CAP4-07-00107",
          "text": "A canal branch requires an adjustable admission rate as parent water levels change. Which component directly controls the opening through which its supply passes?",
          "options": [
            {
              "key": "a",
              "text": "A fixed-area orifice without a gate"
            },
            {
              "key": "b",
              "text": "An ungated long-throated measuring flume"
            },
            {
              "key": "c",
              "text": "A gated regulator"
            },
            {
              "key": "d",
              "text": "A fixed broad-crested weir"
            }
          ],
          "answer": "c",
          "explanation": "A regulator changes the effective opening or control level to regulate discharge. The resulting flow depends on available upstream and downstream head and the device rating; setting a gate opening is not independent of hydraulic conditions.<p>Capsule 4th ed., p. 29; topic 7 point 109.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 109",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n109"
            ]
          },
          "topic": "ACiE0705",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00126",
          "src": "CAP4-07-00126",
          "text": "A rectangular-crest canal fall has a calibrated free-overflow rating Q = 1.5 L H^(3/2) in SI units. For effective crest length L = 8 m and energy head H = 1 m, what discharge does this rating predict?",
          "options": [
            {
              "key": "a",
              "text": "24 cumecs"
            },
            {
              "key": "b",
              "text": "12 cumecs"
            },
            {
              "key": "c",
              "text": "14 cumecs"
            },
            {
              "key": "d",
              "text": "8 cumecs"
            }
          ],
          "answer": "b",
          "explanation": "The stated rating gives Q = 1.5 x 8 x 1^(3/2) = 12 cumecs. A crest rating is only one check; a Sarda-type vertical fall also needs a safe downstream cistern, foundations and operating range. Being below a quoted capacity limit is not proof of adequacy.<p>Source note: Page 30 point 125: the 14-cumec rectangular Sarda limit remains an unverified legacy convention in the nearby corrected notes. The original question here uses an explicit calibrated rating, not that threshold as authority.</p><p>Capsule 4th ed., p. 30; topic 7 point 125.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 30; topic 7 point 125",
            "pages": [
              30
            ],
            "points": [
              "capsule-t07-p030-n125"
            ]
          },
          "topic": "ACiE0705",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00127",
          "src": "CAP4-07-00127",
          "text": "A proposed fall has a triangular masonry-body cross-section in the streamwise plane but a straight, level overflow crest across the canal. Does that make its opening a triangular V-notch?",
          "options": [
            {
              "key": "a",
              "text": "Yes: any triangular body necessarily gives a V-shaped opening"
            },
            {
              "key": "b",
              "text": "No: it must instead use a submerged-orifice rating at every head"
            },
            {
              "key": "c",
              "text": "Yes: the streamwise body angle sets the transverse notch angle"
            },
            {
              "key": "d",
              "text": "No: body profile and transverse flow-opening shape are different"
            }
          ],
          "answer": "d",
          "explanation": "A body's streamwise cross-section is not the shape of the transverse overflow opening. A V-notch has a triangular opening whose width changes with head. The stated level crest does not acquire that rating merely because the supporting body is triangular.<p>Source note: Page 30 point 126: exact triangular-crest geometry and the 85-cumec Sarda limit cannot be verified from available text. This explicit geometry question avoids inventing the unseen section or endorsing the limit; parent should check both.</p><p>Capsule 4th ed., p. 30; topic 7 point 126.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 30; topic 7 point 126",
            "pages": [
              30
            ],
            "points": [
              "capsule-t07-p030-n126"
            ]
          },
          "topic": "ACiE0705",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00132",
          "src": "CAP4-07-00132",
          "text": "A fall is identified as belonging to the Sarda family, but its quoted 14- or 85-cumec crest-selection limits have not been verified. Which downstream profile is characteristic of this family?",
          "options": [
            {
              "key": "a",
              "text": "Vertical drop into a protected cistern or pool"
            },
            {
              "key": "b",
              "text": "Parabolic Montague glacis guiding the flow downward"
            },
            {
              "key": "c",
              "text": "Straight glacis with an Inglis baffle platform and wall"
            },
            {
              "key": "d",
              "text": "A sequence of small stepped drops along a cascade"
            }
          ],
          "answer": "a",
          "explanation": "Sarda denotes a vertical-drop fall family. Inglis and Montague have different downstream profiles. Recognizing the family does not establish crest geometry or validate the capsule's quoted discharge limits; those require their own design reference.<p>Source note: Page 30 points 125 and 126: appended family identification missing from the earlier rating and body-plane questions. Both refer to the same Sarda family, while their distinct crest and threshold claims remain separately recorded.</p><p>Capsule 4th ed., p. 30; topic 7 point 125; topic 7 point 126.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 30; topic 7 point 125; topic 7 point 126",
            "pages": [
              30
            ],
            "points": [
              "capsule-t07-p030-n125",
              "capsule-t07-p030-n126"
            ]
          },
          "topic": "ACiE0705",
          "kind": "recall"
        }
      ]
    },
    {
      "id": "ACiE0706",
      "name": "Water logging and drainage",
      "subject": "Irrigation and Drainage",
      "questions": [
        {
          "id": "CAP4-07-00080",
          "src": "CAP4-07-00080",
          "text": "A saline but non-sodic field has a functioning drainage outlet and sufficient good-quality water. Which treatment directly exports dissolved salts from the root zone?",
          "options": [
            {
              "key": "a",
              "text": "Addition of fertilizer without a salt-water balance"
            },
            {
              "key": "b",
              "text": "Controlled leaching followed by drainage"
            },
            {
              "key": "c",
              "text": "Evaporation of ponded water with no salt outlet"
            },
            {
              "key": "d",
              "text": "Repeated wetting with no downward water movement"
            }
          ],
          "answer": "b",
          "explanation": "Leaching dissolves and carries salts below the root zone; drainage then removes the saline water. Flooding without an outlet can raise the water table and reconcentrate salts on drying. Sodic soil additionally requires sodium-status and amendment assessment.<p>Source note: Page 29 points 81 and 106 repeat leaching by wetting and drainage. They are merged with drainage and non-sodic conditions made explicit.</p><p>Capsule 4th ed., p. 29; topic 7 point 81; topic 7 point 106.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 81; topic 7 point 106",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n81",
              "capsule-t07-p029-n106"
            ]
          },
          "topic": "ACiE0706",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00081",
          "src": "CAP4-07-00081",
          "text": "A shallow open field drain carries storm runoff in the monsoon. Can the same drain carry excess surface irrigation water in a dry month if its outlet remains available?",
          "options": [
            {
              "key": "a",
              "text": "No, because the system's design season limits its physical operation"
            },
            {
              "key": "b",
              "text": "Yes, because surface inflow rather than season controls its use"
            },
            {
              "key": "c",
              "text": "Yes, but only if its invert is below the regional water table"
            },
            {
              "key": "d",
              "text": "No, because irrigation runoff requires subsurface collection"
            }
          ],
          "answer": "b",
          "explanation": "A shallow surface drain removes excess water arriving at the surface, whether from rainfall, run-on or irrigation. It may be most active in the wet season, but the calendar does not physically disable it in a dry month.<p>Source note: Page 29 point 82: corrected the absolute rainy-season-only assertion.</p><p>Capsule 4th ed., p. 29; topic 7 point 82.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 82",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n82"
            ]
          },
          "topic": "ACiE0706",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00082",
          "src": "CAP4-07-00082",
          "text": "In a hydraulically connected aquifer with recharge unchanged, pumping exports groundwater outside the affected area. What is its direct effect on a shallow water table?",
          "options": [
            {
              "key": "a",
              "text": "It tends to raise the table by increasing the saturated thickness"
            },
            {
              "key": "b",
              "text": "It changes seepage velocity but not groundwater head"
            },
            {
              "key": "c",
              "text": "It tends to lower the water table"
            },
            {
              "key": "d",
              "text": "It removes only retained capillary water without aquifer drawdown"
            }
          ],
          "answer": "c",
          "explanation": "Net groundwater withdrawal reduces storage and tends to lower the table, helping relieve waterlogging under the stated conditions. Excessive pumping may still cause depletion, subsidence or salinity problems; exported water is not assumed to return as local irrigation recharge.<p>Source note: Page 29 point 83: separated direct drawdown from approval of excessive pumping and specified the return-flow boundary.</p><p>Capsule 4th ed., p. 29; topic 7 point 83.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 83",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n83"
            ]
          },
          "topic": "ACiE0706",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00083",
          "src": "CAP4-07-00083",
          "text": "After rainfall, isolated hollows remain ponded although nearby higher fields drain. Which intervention addresses the immediate topographic cause?",
          "options": [
            {
              "key": "a",
              "text": "Provide graded connections from depressions to a viable outlet"
            },
            {
              "key": "b",
              "text": "Increase the receiving drain size without connecting the hollows"
            },
            {
              "key": "c",
              "text": "Smooth the hollows while retaining their closed outlet contours"
            },
            {
              "key": "d",
              "text": "Line the supply canal without changing surface drainage paths"
            }
          ],
          "answer": "a",
          "explanation": "Closed depressions trap surface water because there is no effective gravity outlet. Land shaping and connected surface drains can restore an escape path. The receiving level and subsurface conditions must also be checked before assuming the root zone will aerate.<p>Capsule 4th ed., p. 29; topic 7 point 84.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 84",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n84"
            ]
          },
          "topic": "ACiE0706",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00084",
          "src": "CAP4-07-00084",
          "text": "Tile drainage lowers a persistently shallow water table without adding soil. Why can crop yield improve?",
          "options": [
            {
              "key": "a",
              "text": "The soil's permanent wilting content becomes zero"
            },
            {
              "key": "b",
              "text": "The mineral soil's physical volume necessarily increases"
            },
            {
              "key": "c",
              "text": "A larger existing root-zone volume becomes adequately aerated"
            },
            {
              "key": "d",
              "text": "The pipe raises capillary supply while leaving the water table fixed"
            }
          ],
          "answer": "c",
          "explanation": "Lowering the water table can increase air-filled pores and the depth of soil that roots can exploit. The benefit is a larger usable, aerated root zone, not creation of new mineral soil volume. Yield still depends on crop, nutrients and water management.<p>Source note: Page 29 point 85: corrected &#39;increases volume of soil&#39; to increased effective aerated rooting volume.</p><p>Capsule 4th ed., p. 29; topic 7 point 85.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 85",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n85"
            ]
          },
          "topic": "ACiE0706",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00085",
          "src": "CAP4-07-00085",
          "text": "Perched water lies above a nearly impermeable horizon. A tile drain is installed below that horizon with no hydraulic connection through it. Why might the crop root zone remain wet?",
          "options": [
            {
              "key": "a",
              "text": "The pipe's depth alone guarantees drainage of every overlying layer"
            },
            {
              "key": "b",
              "text": "A free outfall automatically removes the perched-water barrier"
            },
            {
              "key": "c",
              "text": "The restrictive layer prevents sufficient flow to the drain"
            },
            {
              "key": "d",
              "text": "The main limitation must be pipe diameter, not soil connection"
            }
          ],
          "answer": "c",
          "explanation": "The water must reach the drain through a viable hydraulic path. A pipe isolated below a restrictive horizon may not collect perched water above it. Appropriate placement or connection is needed; low-permeability soil is not categorically impossible to drain.<p>Source note: Page 29 point 86: replaced an absolute placement rule with the actual hydraulic-disconnection mechanism.</p><p>Capsule 4th ed., p. 29; topic 7 point 86.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 86",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n86"
            ]
          },
          "topic": "ACiE0706",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00086",
          "src": "CAP4-07-00086",
          "text": "Which wet-field situation most clearly supports using subsurface tile drainage?",
          "options": [
            {
              "key": "a",
              "text": "A perched wet layer isolated from the proposed drain by an unbroken barrier"
            },
            {
              "key": "b",
              "text": "A wet root zone with an outfall above the target water-table elevation"
            },
            {
              "key": "c",
              "text": "Surface ponding above a sealed layer with no path to the proposed drains"
            },
            {
              "key": "d",
              "text": "A shallow water table with a connected soil-flow path and viable outlet"
            }
          ],
          "answer": "d",
          "explanation": "Tile drainage collects subsurface water through joints or perforations and conveys it to an outlet. Soil conductivity, hydraulic connection, drain depth and outfall level must support the required drawdown; the description 'wet soil' alone is insufficient.<p>Capsule 4th ed., p. 29; topic 7 point 87.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 87",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n87"
            ]
          },
          "topic": "ACiE0706",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00087",
          "src": "CAP4-07-00087",
          "text": "In a steady drainage-spacing model L^2 = K C, hold the recharge, allowed midpoint head and equivalent geometry represented by C fixed. If conductivity K quadruples, how does permissible spacing change?",
          "options": [
            {
              "key": "a",
              "text": "It remains unchanged"
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
              "text": "It doubles"
            }
          ],
          "answer": "d",
          "explanation": "Taking square roots gives L proportional to sqrt(K). Quadrupling K therefore multiplies L by sqrt(4) = 2, not four. In a full Hooghoudt solution, equivalent depth can also depend on spacing and must be updated consistently.<p>Source note: Page 29 point 88: corrected direct proportionality to K; square-root scaling is conditional on fixed equivalent geometry and other stated quantities.</p><p>Capsule 4th ed., p. 29; topic 7 point 88.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 88",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n88"
            ]
          },
          "topic": "ACiE0706",
          "kind": "calculation"
        },
        {
          "id": "CAP4-07-00088",
          "src": "CAP4-07-00088",
          "text": "A cropped field is shaped into raised strips separated by dead furrows that collect excess rainfall and irrigation water. What is this surface-drainage method?",
          "options": [
            {
              "key": "a",
              "text": "Bedding"
            },
            {
              "key": "b",
              "text": "Tile drainage"
            },
            {
              "key": "c",
              "text": "Mole drainage"
            },
            {
              "key": "d",
              "text": "Vertical well drainage"
            }
          ],
          "answer": "a",
          "explanation": "Bedding gives the field small surface relief so water moves off cropped beds into collecting furrows. Those furrows need connection to an outlet. It is a surface-shaping method, unlike buried tile, mole or pumped-well drainage.<p>Capsule 4th ed., p. 29; topic 7 point 89.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 89",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n89"
            ]
          },
          "topic": "ACiE0706",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00089",
          "src": "CAP4-07-00089",
          "text": "A shallow aquifer receives persistent seepage from an unlined canal, while natural groundwater outflow and pumping remain insufficient. What waterlogging mechanism follows?",
          "options": [
            {
              "key": "a",
              "text": "Lateral outflow necessarily increases enough to match all added recharge"
            },
            {
              "key": "b",
              "text": "Recharge exceeds removal and the water table rises"
            },
            {
              "key": "c",
              "text": "Recharge increases storage while groundwater level remains fixed"
            },
            {
              "key": "d",
              "text": "Seepage into the aquifer creates the same drawdown as pumping out"
            }
          ],
          "answer": "b",
          "explanation": "Canal seepage is an aquifer inflow. If total recharge exceeds removal, groundwater storage and level rise, potentially saturating or capillary-wetting the crop root zone. Lining or interception can reduce this component, but the whole water balance matters.<p>Capsule 4th ed., p. 29; topic 7 point 90.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 90",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n90"
            ]
          },
          "topic": "ACiE0706",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00090",
          "src": "CAP4-07-00090",
          "text": "A command area is repeatedly over-irrigated and its drainage cannot remove the resulting deep percolation. Which management change most directly reduces this cause of waterlogging?",
          "options": [
            {
              "key": "a",
              "text": "Reduce drain depth while maintaining the excess irrigation recharge"
            },
            {
              "key": "b",
              "text": "Keep each irrigation dose but shorten the watering interval"
            },
            {
              "key": "c",
              "text": "Match applications to crop deficits and improve drainage"
            },
            {
              "key": "d",
              "text": "Improve supply-canal capacity without changing field applications"
            }
          ],
          "answer": "c",
          "explanation": "Over-application can create excess groundwater recharge even where crops are productive. Scheduling to actual deficits and providing removal capacity addresses the imbalance. Extensive or intensive are not sufficient diagnoses without per-area inputs and drainage conditions.<p>Source note: Page 29 point 91 is grammatically damaged. Its resolvable principle is excessive irrigation relative to crop use and drainage; no blanket extensive-versus-intensive rule is inferred.</p><p>Capsule 4th ed., p. 29; topic 7 point 91.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 91",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n91"
            ]
          },
          "topic": "ACiE0706",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00091",
          "src": "CAP4-07-00091",
          "text": "A farmer doubles the frequency of an unchanged large irrigation dose while crop demand and drainage capacity remain fixed. Why is this not a reliable waterlogging remedy?",
          "options": [
            {
              "key": "a",
              "text": "Shorter intervals reduce seasonal volume even with an unchanged dose"
            },
            {
              "key": "b",
              "text": "The fixed drainage system must remove the additional recharge immediately"
            },
            {
              "key": "c",
              "text": "A smaller depletion before each dose prevents deep percolation"
            },
            {
              "key": "d",
              "text": "It can increase excess recharge beyond the removal capacity"
            }
          ],
          "answer": "d",
          "explanation": "With the dose unchanged, more frequent applications increase total supply and potentially excess percolation. Frequency alone neither prevents nor inevitably causes waterlogging: appropriately sized frequent applications can be efficient. The depth-time water balance governs.<p>Source note: Page 29 point 92: clarified that frequent irrigation is not intrinsically protective or intrinsically harmful.</p><p>Capsule 4th ed., p. 29; topic 7 point 92.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 92",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n92"
            ]
          },
          "topic": "ACiE0706",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00092",
          "src": "CAP4-07-00092",
          "text": "Waterlogged farmland must export excess field water to a receiving outfall. Which system is designed for that task rather than for disposing of surplus water still inside the supply canal?",
          "options": [
            {
              "key": "a",
              "text": "Canal escape alone"
            },
            {
              "key": "b",
              "text": "Field drainage network"
            },
            {
              "key": "c",
              "text": "Irrigation farm pond without an outlet"
            },
            {
              "key": "d",
              "text": "Canal head regulator"
            }
          ],
          "answer": "b",
          "explanation": "A drainage network collects excess surface or subsurface field water and conveys it to a viable outfall. A canal escape disposes of surplus supply-channel water; unless connected and designed accordingly, it does not drain the saturated farmland.<p>Capsule 4th ed., p. 29; topic 7 point 93.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 93",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n93"
            ]
          },
          "topic": "ACiE0706",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00093",
          "src": "CAP4-07-00093",
          "text": "An unlined surface drain needs a finite bed width and stable sloping earth banks. Which common section provides those features without assuming unsupported vertical soil faces?",
          "options": [
            {
              "key": "a",
              "text": "Triangular section with zero bed width"
            },
            {
              "key": "b",
              "text": "Semicircular section with curved walls"
            },
            {
              "key": "c",
              "text": "Trapezoidal section"
            },
            {
              "key": "d",
              "text": "Rectangular section with vertical earth walls"
            }
          ],
          "answer": "c",
          "explanation": "A trapezoid combines a bed width with selected stable side slopes and is practical for many open earth drains. It is not universally optimal: hydraulics, land, maintenance, lining and geotechnical stability determine the final shape and dimensions.<p>Source note: Page 29 point 94: practical suitability replaces an unqualified claim of universal optimality.</p><p>Capsule 4th ed., p. 29; topic 7 point 94.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 94",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n94"
            ]
          },
          "topic": "ACiE0706",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00094",
          "src": "CAP4-07-00094",
          "text": "A waterlogged field has measured soil pH 11. What conclusion is justified before specifying reclamation treatment?",
          "options": [
            {
              "key": "a",
              "text": "It is strongly alkaline; diagnose salinity and sodium status separately"
            },
            {
              "key": "b",
              "text": "The pH alone determines its exchangeable sodium percentage"
            },
            {
              "key": "c",
              "text": "The pH alone proves that leaching without amendment is sufficient"
            },
            {
              "key": "d",
              "text": "The pH alone gives its saturated-extract electrical conductivity"
            }
          ],
          "answer": "a",
          "explanation": "A pH of 11 indicates strong alkalinity and can severely constrain many crops. It does not alone measure dissolved-salt concentration or exchangeable sodium, and waterlogging does not inevitably produce that pH. Aeration and chemical diagnosis both matter.<p>Source note: Page 29 point 95: pH 11 is not a universal threshold defining waterlogging or infertility; saline, sodic and saturated conditions are distinguished.</p><p>Capsule 4th ed., p. 29; topic 7 point 95.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 95",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n95"
            ]
          },
          "topic": "ACiE0706",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00101",
          "src": "CAP4-07-00101",
          "text": "A field remains saturated and crop roots deteriorate even after all visible weeds are removed. Which direct waterlogging mechanism explains this?",
          "options": [
            {
              "key": "a",
              "text": "Slow oxygen supply through water-filled pores restricts root respiration"
            },
            {
              "key": "b",
              "text": "Saturation necessarily raises exchangeable sodium in every soil"
            },
            {
              "key": "c",
              "text": "Saturation alone proves osmotic stress from dissolved salts"
            },
            {
              "key": "d",
              "text": "Competition from weeds is the only remaining explanation"
            }
          ],
          "answer": "a",
          "explanation": "Water-filled pores greatly restrict oxygen diffusion relative to air-filled pores. Root and microbial respiration can then create oxygen deficiency and harmful reduced conditions. Weeds may accompany wetness, but they are not the fundamental or only cause of crop impairment.<p>Source note: Page 29 point 102: corrected the weed-only explanation of waterlogging-related loss of productivity.</p><p>Capsule 4th ed., p. 29; topic 7 point 102.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 102",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n102"
            ]
          },
          "topic": "ACiE0706",
          "kind": "application"
        },
        {
          "id": "CAP4-07-00133",
          "src": "CAP4-07-00133",
          "text": "In a simplified comparison, 60000 cubic metres infiltrates uniformly over either 100 ha or 200 ha in a week. Each hectare needs 30 mm and starts with no spare storage; neglect other flows. Which allocation avoids irrigation excess in this comparison?",
          "options": [
            {
              "key": "a",
              "text": "100 ha: 60 mm applied and zero excess"
            },
            {
              "key": "b",
              "text": "200 ha: 60 mm applied and 30 mm excess"
            },
            {
              "key": "c",
              "text": "100 ha: 30 mm applied and zero excess"
            },
            {
              "key": "d",
              "text": "200 ha: 30 mm applied and zero excess"
            }
          ],
          "answer": "d",
          "explanation": "Applied depth is volume divided by area: 60000/(100 x 10000) = 0.06 m and 60000/(200 x 10000) = 0.03 m. Against 30 mm need, the first case has 30 mm excess and the second none. Spreading a fixed supply can reduce over-application, but only with adequate crop supply and drainage.<p>Source note: Page 29 point 91: appended a conditional extensive-versus-concentrated irrigation comparison for the damaged source wording. It does not declare extensive irrigation universally safe or all intensive irrigation waterlogging-prone.</p><p>Capsule 4th ed., p. 29; topic 7 point 91.</p>",
          "source": {
            "kind": "capsule",
            "edition": 4,
            "reference": "Capsule 4th ed., p. 29; topic 7 point 91",
            "pages": [
              29
            ],
            "points": [
              "capsule-t07-p029-n91"
            ]
          },
          "topic": "ACiE0706",
          "kind": "calculation"
        }
      ]
    }
  ]
};
