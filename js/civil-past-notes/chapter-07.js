(function () {
    "use strict";
    window.CIVIL_PAST_NOTE_TOPICS = window.CIVIL_PAST_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_PAST_NOTE_TOPICS, {
     "ACiE0701": {
      "code": "ACiE0701",
      "questionCount": 19,
      "format": 2,
      "summary": "<p>This subchapter covers how much water crops need and how it is expressed. The past-paper questions test available soil water and root-zone storage, consumptive use and the pan method, gross irrigation requirement, duty, delta and outlet factor, where duty is highest, irrigation interval and distribution efficiency, crops' water-use efficiency and tolerance of water-logging, and farm ponds.</p>",
      "blocks": [
       {
        "id": "soil-water",
        "title": "Soil water and root-zone storage",
        "html": "<p>Soil water comes in three forms. <em>Gravity</em> water drains out of the large pores soon after irrigation; <em>hygroscopic</em> water clings to the grains too tightly for roots to take; <em>capillary</em> water, held by surface tension in the fine pores, is what plants use. The water available to plants lies between field capacity, FC, and the permanent wilting point, PWP.</p><p>The depth of water held in a root zone of depth d is the moisture content by weight times the ratio of the soil's dry unit weight to that of water, times d.</p>",
        "formulas": [
         {
          "label": "Available water",
          "tex": "AW = FC - PWP"
         },
         {
          "label": "Depth of water held in the root zone",
          "tex": "d_w = \\dfrac{\\gamma_d}{\\gamma_w} F d"
         }
        ],
        "points": [
         {
          "html": "Capillary water is the type usable by plants.",
          "sources": [
           {
            "id": "PAST-06-015",
            "label": "Set 6 · Q15"
           }
          ]
         },
         {
          "html": "The soil water that crops can utilise is called capillary water.",
          "sources": [
           {
            "id": "PAST-11-047",
            "label": "Set 11 · Q47"
           }
          ]
         },
         {
          "html": "The water available for plants is FC − PWP, between field capacity and wilting point.",
          "sources": [
           {
            "id": "PAST-08-030",
            "label": "Set 8 · Q30"
           }
          ]
         },
         {
          "html": "With a dry unit weight of 17 kN/m<sup>3</sup>, F = 2.35 and a 9 m root zone, the water stored per unit area is 36.69 m<sup>3</sup>.",
          "sources": [
           {
            "id": "PAST-10-068",
            "label": "Set 10 · Q68"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-015",
          "label": "Set 6 · Q15"
         },
         {
          "id": "PAST-11-047",
          "label": "Set 11 · Q47"
         },
         {
          "id": "PAST-08-030",
          "label": "Set 8 · Q30"
         },
         {
          "id": "PAST-10-068",
          "label": "Set 10 · Q68"
         }
        ]
       },
       {
        "id": "crop-water-requirement",
        "title": "Consumptive use and irrigation requirement",
        "html": "<p><em>Consumptive use</em>, or evapotranspiration, is the water lost by evaporation from the soil and plant surfaces and by transpiration through the crop, plus a little built into plant tissue. It can be estimated from pan evaporation times a crop coefficient. The irrigation requirement therefore depends on all of crop, soil and climate.</p><p>The net irrigation requirement is consumptive use less effective rainfall. A canal must also carry the conveyance and application losses, so it is designed for the gross irrigation requirement, the net requirement divided by the efficiency.</p>",
        "formulas": [
         {
          "label": "Pan method and gross requirement",
          "tex": "C_u = k\\,E_{\\text{pan}}, \\qquad GIR = \\dfrac{NIR}{\\eta}"
         }
        ],
        "example": {
         "title": "Worked example: consumptive use from pan evaporation",
         "html": "<p>With k = 0.80 and 35 cm of pan evaporation in April, \\(C_u = 0.80 \\times 35 = 28\\) cm.</p>"
        },
        "points": [
         {
          "html": "Consumptive use counts the losses by evaporation and transpiration.",
          "sources": [
           {
            "id": "PAST-12-026",
            "label": "Set 12 · Q26"
           }
          ]
         },
         {
          "html": "A crop coefficient of 0.80 and 35 cm of pan evaporation give a consumptive use of 28.00 cm.",
          "sources": [
           {
            "id": "PAST-05-077",
            "label": "Set 5 · Q77"
           }
          ]
         },
         {
          "html": "The irrigation requirement depends on all of the above: crop, soil and climate.",
          "sources": [
           {
            "id": "PAST-10-045",
            "label": "Set 10 · Q45"
           }
          ]
         },
         {
          "html": "Canal flow is based on the gross irrigation requirement, including losses.",
          "sources": [
           {
            "id": "PAST-04-042",
            "label": "Set 4 · Q42"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-12-026",
          "label": "Set 12 · Q26"
         },
         {
          "id": "PAST-05-077",
          "label": "Set 5 · Q77"
         },
         {
          "id": "PAST-10-045",
          "label": "Set 10 · Q45"
         },
         {
          "id": "PAST-04-042",
          "label": "Set 4 · Q42"
         }
        ]
       },
       {
        "id": "duty-and-delta",
        "title": "Duty, delta and outlet factor",
        "html": "<p><em>Duty</em> is the area a unit discharge can irrigate over the base period, in hectares per cumec; <em>delta</em> is the total depth of water the crop receives. One cumec flowing for B days spreads 8.64B metres-hectare, which links the two. For rice the same relation with the kor depth and kor period gives the outlet factor.</p><p>Water is lost in conveyance, so the same discharge irrigates less land when measured at the head of a main canal than at the field. Duty is therefore highest in the field and lowest at the head of the main canal.</p>",
        "formulas": [
         {
          "label": "Duty and delta",
          "tex": "\\Delta = \\dfrac{8.64\\,B}{D}"
         }
        ],
        "example": {
         "title": "Worked examples: outlet factor and delta",
         "html": "<p>Kor depth 0.19 m in 14 days: \\(D = 8.64 \\times 14/0.19 \\approx 637\\) ha/cumec.</p><p>Duty 1500 ha/cumec over 120 days: \\(\\Delta = 8.64 \\times 120/1500 = 0.691\\) m.</p>"
        },
        "points": [
         {
          "html": "A kor depth of 190 mm in a 14-day kor period gives an outlet factor of 637 hectares per m<sup>3</sup>/s.",
          "sources": [
           {
            "id": "PAST-06-065",
            "label": "Set 6 · Q65"
           }
          ]
         },
         {
          "html": "A duty of 1500 hectares/cumec over a 120-day base period means a delta of 691 mm.",
          "sources": [
           {
            "id": "PAST-17-061",
            "label": "Set 17 · Q61"
           }
          ]
         },
         {
          "html": "Duty is highest in the field and lowest at the head of the main canal.",
          "sources": [
           {
            "id": "PAST-13-008",
            "label": "Set 13 · Q8"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-065",
          "label": "Set 6 · Q65"
         },
         {
          "id": "PAST-17-061",
          "label": "Set 17 · Q61"
         },
         {
          "id": "PAST-13-008",
          "label": "Set 13 · Q8"
         }
        ]
       },
       {
        "id": "irrigation-scheduling-and-efficiency",
        "title": "Irrigation interval and distribution efficiency",
        "html": "<p>The <em>irrigation interval</em>, or frequency, is the number of days between two irrigations: the readily available moisture in the root zone divided by the daily crop water use. For a given soil it is governed by the evapotranspiration rate.</p><p>How evenly water is spread over a field is measured by the <em>distribution efficiency</em>, which compares the mean deviation of the depths with the mean depth.</p>",
        "formulas": [
         {
          "label": "Irrigation interval",
          "tex": "f = \\dfrac{RAM}{C_u}"
         },
         {
          "label": "Distribution efficiency",
          "tex": "\\eta_d = \\left(1 - \\dfrac{y}{d}\\right) \\times 100"
         }
        ],
        "example": {
         "title": "Worked example: distribution efficiency",
         "html": "<p>Mean depth 1.5 cm and mean deviation 0.1 cm: \\(\\eta_d = 1 - 0.1/1.5\\), about 93%.</p>"
        },
        "points": [
         {
          "html": "The irrigation interval is determined by the evapotranspiration rate of the crop.",
          "sources": [
           {
            "id": "PAST-15-043",
            "label": "Set 15 · Q43"
           }
          ]
         },
         {
          "html": "Irrigation frequency is expressed in days between successive irrigations.",
          "sources": [
           {
            "id": "PAST-R2083-021",
            "label": "2083 recall · Q21"
           }
          ]
         },
         {
          "html": "A mean depth of 1.5 cm with a mean deviation of 0.1 cm gives a distribution efficiency of about 93%.",
          "sources": [
           {
            "id": "PAST-04-080",
            "label": "Set 4 · Q80"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-15-043",
          "label": "Set 15 · Q43"
         },
         {
          "id": "PAST-R2083-021",
          "label": "2083 recall · Q21"
         },
         {
          "id": "PAST-04-080",
          "label": "Set 4 · Q80"
         }
        ]
       },
       {
        "id": "crops-and-farm-ponds",
        "title": "Crops, water use and farm ponds",
        "html": "<p>Crops differ widely in water use. Millets, drought-hardy C<sub>4</sub> crops, produce the most grain per unit of water; paddy has the lowest water-use efficiency. Rice, by contrast, grows in standing water and tolerates a very high water table and water-logging, while wheat, maize and pulses need a well-drained, aerated root zone.</p><p>A <em>farm pond</em> is a small dug or embanked reservoir that collects runoff and stores water for supplementary irrigation, livestock and domestic use in the dry season.</p>",
        "points": [
         {
          "html": "Millet has the highest water use efficiency among these crops.",
          "sources": [
           {
            "id": "PAST-10-033",
            "label": "Set 10 · Q33"
           }
          ]
         },
         {
          "html": "Rice can withstand the maximum water table.",
          "sources": [
           {
            "id": "PAST-17-039",
            "label": "Set 17 · Q39"
           }
          ]
         },
         {
          "html": "Rice (paddy) has the highest resistance to water logging.",
          "sources": [
           {
            "id": "PAST-R2083-008",
            "label": "2083 recall · Q8"
           }
          ]
         },
         {
          "html": "A farm pond is used for water storage from harvested runoff.",
          "sources": [
           {
            "id": "PAST-08-003",
            "label": "Set 8 · Q3"
           },
           {
            "id": "PAST-15-045",
            "label": "Set 15 · Q45"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-10-033",
          "label": "Set 10 · Q33"
         },
         {
          "id": "PAST-17-039",
          "label": "Set 17 · Q39"
         },
         {
          "id": "PAST-R2083-008",
          "label": "2083 recall · Q8"
         },
         {
          "id": "PAST-08-003",
          "label": "Set 8 · Q3"
         },
         {
          "id": "PAST-15-045",
          "label": "Set 15 · Q45"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Available water",
        "tex": "AW = FC - PWP"
       },
       {
        "label": "Consumptive use, pan method",
        "tex": "C_u = k\\,E_{\\text{pan}}"
       },
       {
        "label": "Gross irrigation requirement",
        "tex": "GIR = \\dfrac{NIR}{\\eta}"
       },
       {
        "label": "Duty and delta",
        "tex": "\\Delta = \\dfrac{8.64\\,B}{D}"
       },
       {
        "label": "Distribution efficiency",
        "tex": "\\eta_d = \\left(1 - \\dfrac{y}{d}\\right) \\times 100"
       }
      ],
      "cautions": [
       {
        "id": "field-capacity-value",
        "status": "review",
        "prompt": "The paper gives the field capacity as 2.35",
        "html": "<p>A field capacity is normally a fraction, such as 0.235. The published answer uses 2.35 as given, which gives \\((17/9.8) \\times 2.35 \\times 9 \\approx 36.69\\) m<sup>3</sup> per unit area.</p>",
        "sources": [
         {
          "id": "PAST-10-068",
          "label": "Set 10 · Q68"
         }
        ]
       }
      ],
      "gaps": [
       "Water availability, command area, intensity of irrigation and canal design discharge from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0702": {
      "code": "ACiE0702",
      "questionCount": 26,
      "format": 2,
      "summary": "<p>This subchapter covers the layout and design of irrigation canals. The past-paper questions test canal types and alignments, canal capacity and duty on capacity, Kennedy's and Lacey's silt theories with the silt factor, regime velocity and slope, tractive force on the bed and side slopes, the Shields parameter, the effects of scour, and the benefits and economics of lining.</p>",
      "blocks": [
       {
        "id": "canal-types-and-alignment",
        "title": "Types of canal and their alignment",
        "html": "<p>A canal network runs from the headworks through the <em>main canal</em>, which only conveys water and normally irrigates nothing directly, to branch canals, distributaries, minors and watercourses that feed the fields. An <em>inundation canal</em> has no weir and draws water only when the river is high in flood. Large canal systems suit flat, fertile alluvial plains with perennial rivers.</p><p>A <em>ridge</em> or watershed canal runs along the ridge and a <em>side-slope</em> canal roughly parallel to the natural drains, so neither needs cross-drainage works; a <em>contour</em> canal cuts across every drain and needs them.</p>",
        "points": [
         {
          "html": "The main canal is not used directly for irrigation; distributaries and watercourses are.",
          "sources": [
           {
            "id": "PAST-08-029",
            "label": "Set 8 · Q29"
           }
          ]
         },
         {
          "html": "A canal that diverts the flood water of a river is an inundation canal.",
          "sources": [
           {
            "id": "PAST-11-053",
            "label": "Set 11 · Q53"
           }
          ]
         },
         {
          "html": "Both the side-slope and the watershed canal avoid cross-drainage structures.",
          "sources": [
           {
            "id": "PAST-09-033",
            "label": "Set 9 · Q33"
           }
          ]
         },
         {
          "html": "Canal irrigation is generally preferred in alluvial canal country, on flat fertile plains.",
          "sources": [
           {
            "id": "PAST-07-020",
            "label": "Set 7 · Q20"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-08-029",
          "label": "Set 8 · Q29"
         },
         {
          "id": "PAST-11-053",
          "label": "Set 11 · Q53"
         },
         {
          "id": "PAST-09-033",
          "label": "Set 9 · Q33"
         },
         {
          "id": "PAST-07-020",
          "label": "Set 7 · Q20"
         }
        ]
       },
       {
        "id": "canal-capacity",
        "title": "Canal capacity and duty on capacity",
        "html": "<p>A canal is sized for the maximum irrigation water requirement of its command during the crop calendar, not for the river's flood. Its head discharge follows from the culturable command area, the intensity of irrigation and the duty, corrected for the time factor and increased for transmission losses.</p><p>The duty on capacity is the cropped area divided by the head discharge, which includes the losses.</p>",
        "formulas": [
         {
          "label": "Head discharge and duty on capacity",
          "tex": "Q_{\\text{head}} = \\dfrac{Q_{\\text{outlet}}}{1 - \\text{losses}}, \\qquad D = \\dfrac{A}{Q_{\\text{head}}}"
         }
        ],
        "example": {
         "title": "Worked example: duty on capacity",
         "html": "<p>6.25 cumecs delivered with 25% losses needs \\(6.25/0.75 = 8.33\\) cumecs at the head, so \\(D = 5100/8.33 \\approx 612\\) ha/cumec.</p>"
        },
        "points": [
         {
          "html": "Channel capacity depends on all of the above: command area, losses, duty and time factor.",
          "sources": [
           {
            "id": "PAST-09-031",
            "label": "Set 9 · Q31"
           }
          ]
         },
         {
          "html": "The design canal discharge is based on the maximum irrigation water requirement.",
          "sources": [
           {
            "id": "PAST-09-054",
            "label": "Set 9 · Q54"
           }
          ]
         },
         {
          "html": "Delivering 6.25 cumecs to 5100 ha with 25% canal losses gives a duty on capacity of 612 ha/cumecs.",
          "sources": [
           {
            "id": "PAST-13-061",
            "label": "Set 13 · Q61"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-09-031",
          "label": "Set 9 · Q31"
         },
         {
          "id": "PAST-09-054",
          "label": "Set 9 · Q54"
         },
         {
          "id": "PAST-13-061",
          "label": "Set 13 · Q61"
         }
        ]
       },
       {
        "id": "kennedy-and-lacey-theories",
        "title": "Kennedy's and Lacey's silt theories",
        "html": "<p>Kennedy studied stable reaches of the Upper Bari Doab canal system in Punjab and gave a critical, non-silting and non-scouring, velocity \\(V_0 = 0.55\\,m D^{0.64}\\). He held that the silt-supporting eddies rise from the bed only; the key describes this as an unprotected bed with protected sides.</p><p>Lacey's regime theory says a channel in incoherent alluvium shapes itself to a true regime when discharge, silt charge and silt grade are constant and the bed can be scoured as easily as it is deposited. The <em>silt factor</em> \\(f = 1.76\\sqrt{d}\\), with d in mm, is 1 for standard silt of about 0.35 mm.</p>",
        "formulas": [
         {
          "label": "Silt factor and regime velocity",
          "tex": "f = 1.76\\sqrt{d_{\\text{mm}}}, \\qquad V = \\left(\\dfrac{Q f^2}{140}\\right)^{1/6}"
         },
         {
          "label": "Regime slope",
          "tex": "S = \\dfrac{f^{5/3}}{3340\\, Q^{1/6}}"
         },
         {
          "label": "Regime flow equation",
          "tex": "V = 10.8\\, R^{2/3} S^{1/3}"
         }
        ],
        "example": {
         "title": "Worked examples: Lacey velocity and slope",
         "html": "<p>Q = 5 m<sup>3</sup>/s, d = 0.5 mm: f = 1.245 and \\(V = (5 \\times 1.549/140)^{1/6}\\), about 0.617 m/s.</p><p>Q = 2 m<sup>3</sup>/s, d = 2 mm: f = 2.49, so \\(S = 4.57/(3340 \\times 1.12)\\), about 1 in 820.</p>"
        },
        "points": [
         {
          "html": "Kennedy's design takes the bed as unprotected and the side slope as protected.",
          "sources": [
           {
            "id": "PAST-16-031",
            "label": "Set 16 · Q31"
           }
          ]
         },
         {
          "html": "Kennedy's theory came from canals in Punjab, on the Upper Bari Doab canal system.",
          "sources": [
           {
            "id": "PAST-R2083-019",
            "label": "2083 recall · Q19"
           }
          ]
         },
         {
          "html": "A true regime does not hold if the channel can be scoured more easily than it can be deposited.",
          "sources": [
           {
            "id": "PAST-07-027",
            "label": "Set 7 · Q27"
           }
          ]
         },
         {
          "html": "For 2 mm particles Lacey's silt factor is about 2.5.",
          "sources": [
           {
            "id": "PAST-09-006",
            "label": "Set 9 · Q6"
           }
          ]
         },
         {
          "html": "The silt factor of 0.35 mm particles is 1, standard silt.",
          "sources": [
           {
            "id": "PAST-10-028",
            "label": "Set 10 · Q28"
           }
          ]
         },
         {
          "html": "Medium silt of 0.25 mm average size has a silt factor of 0.88.",
          "sources": [
           {
            "id": "PAST-13-071",
            "label": "Set 13 · Q71"
           }
          ]
         },
         {
          "html": "For 0.5 mm grains the silt factor is 1.245.",
          "sources": [
           {
            "id": "PAST-17-040",
            "label": "Set 17 · Q40"
           }
          ]
         },
         {
          "html": "A 5 m<sup>3</sup>/s channel in 0.5 mm sediment has a Lacey velocity of 0.617 m/s.",
          "sources": [
           {
            "id": "PAST-12-029",
            "label": "Set 12 · Q29"
           }
          ]
         },
         {
          "html": "With 2 mm particles and 2 m<sup>3</sup>/s, Lacey's longitudinal slope is 1 in 820.",
          "sources": [
           {
            "id": "PAST-06-062",
            "label": "Set 6 · Q62"
           }
          ]
         },
         {
          "html": "Lacey's regime velocity is proportional to \\(R^{2/3}S^{1/3}\\).",
          "sources": [
           {
            "id": "PAST-15-042",
            "label": "Set 15 · Q42"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-16-031",
          "label": "Set 16 · Q31"
         },
         {
          "id": "PAST-R2083-019",
          "label": "2083 recall · Q19"
         },
         {
          "id": "PAST-07-027",
          "label": "Set 7 · Q27"
         },
         {
          "id": "PAST-09-006",
          "label": "Set 9 · Q6"
         },
         {
          "id": "PAST-10-028",
          "label": "Set 10 · Q28"
         },
         {
          "id": "PAST-13-071",
          "label": "Set 13 · Q71"
         },
         {
          "id": "PAST-17-040",
          "label": "Set 17 · Q40"
         },
         {
          "id": "PAST-12-029",
          "label": "Set 12 · Q29"
         },
         {
          "id": "PAST-06-062",
          "label": "Set 6 · Q62"
         },
         {
          "id": "PAST-15-042",
          "label": "Set 15 · Q42"
         }
        ]
       },
       {
        "id": "tractive-force-and-incipient-motion",
        "title": "Tractive force, the Shields parameter and scour",
        "html": "<p>In steady uniform flow the downslope pull of the water's weight is balanced by shear on the boundary. The average tractive force is \\(\\tau_0 = \\gamma R S_0\\), tending to \\(\\gamma y S_0\\) in wide channels. On a side slope gravity helps move a grain, so less shear is needed there than on the bed.</p><p>The <em>Shields parameter</em> compares the bed shear with the grain's submerged weight; the Shields diagram gives its critical value against the particle Reynolds number, predicting incipient motion. A non-scouring channel in coarse alluvium keeps it below about 0.056. When the velocity is too high the canal scours: bed and banks erode, the bed and water level drop and the off-takes draw less, reducing the command.</p>",
        "formulas": [
         {
          "label": "Tractive force and Shields parameter",
          "tex": "\\tau_0 = \\gamma R S_0, \\qquad \\dfrac{\\tau_0}{(\\gamma_s - \\gamma_w)\\,d} = C_c"
         },
         {
          "label": "Critical shear on a side slope",
          "tex": "\\tau_s = \\tau_b \\cos\\theta \\sqrt{1 - \\dfrac{\\tan^2\\theta}{\\tan^2\\phi}}"
         }
        ],
        "example": {
         "title": "Worked examples: bed and side-slope shear",
         "html": "<p>10 m<sup>3</sup>/s in a rectangle with B = 3D on 1 in 3000 gives R ≈ 1.205 m, so \\(\\tau_0 = 9810 \\times 1.205/3000\\), about 3.94 N/m<sup>2</sup>.</p><p>On a 30° side with \\(\\phi = 37^\\circ\\): \\(\\tau_s = 2.91 \\times 0.866 \\times 0.64\\), about 1.61 N/m<sup>2</sup>.</p>"
        },
        "points": [
         {
          "html": "The tractive force at the bottom of a channel is \\(\\tau_0 = \\gamma R S_0\\).",
          "sources": [
           {
            "id": "PAST-17-042",
            "label": "Set 17 · Q42"
           }
          ]
         },
         {
          "html": "A 100 ha canal at 100 lps/ha on 1 in 3000 with n = 0.025 and B/D = 3 has an average boundary shear of 3.94 N/m<sup>2</sup>.",
          "sources": [
           {
            "id": "PAST-11-074",
            "label": "Set 11 · Q74"
           }
          ]
         },
         {
          "html": "A grain needing 2.91 N/m<sup>2</sup> on the bed moves at 1.61 N/m<sup>2</sup> on a 30° side slope with a 37° angle of repose.",
          "sources": [
           {
            "id": "PAST-16-047",
            "label": "Set 16 · Q47"
           }
          ]
         },
         {
          "html": "Tractive force against grain resistance is expressed by \\(\\tau_0/[(\\gamma_s - \\gamma_w)d] = C_c\\).",
          "sources": [
           {
            "id": "PAST-18-057",
            "label": "Set 18 · Q57"
           }
          ]
         },
         {
          "html": "Non-scouring channels in coarse alluvium need a Shields entrainment function \\(\\lt 0.056\\).",
          "sources": [
           {
            "id": "PAST-09-072",
            "label": "Set 9 · Q72"
           }
          ]
         },
         {
          "html": "The Shields diagram is used for predicting incipient motion of bed grains.",
          "sources": [
           {
            "id": "PAST-16-073",
            "label": "Set 16 · Q73"
           }
          ]
         },
         {
          "html": "When a canal scours, the bed and banks erode, the bed level drops and the water level at the off-takes falls, reducing the command.",
          "sources": [
           {
            "id": "PAST-R2083-006",
            "label": "2083 recall · Q6"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-17-042",
          "label": "Set 17 · Q42"
         },
         {
          "id": "PAST-11-074",
          "label": "Set 11 · Q74"
         },
         {
          "id": "PAST-16-047",
          "label": "Set 16 · Q47"
         },
         {
          "id": "PAST-18-057",
          "label": "Set 18 · Q57"
         },
         {
          "id": "PAST-09-072",
          "label": "Set 9 · Q72"
         },
         {
          "id": "PAST-16-073",
          "label": "Set 16 · Q73"
         },
         {
          "id": "PAST-R2083-006",
          "label": "2083 recall · Q6"
         }
        ]
       },
       {
        "id": "lined-canals",
        "title": "Lined canals: benefits and economics",
        "html": "<p>Lining cuts seepage, so less water is lost and waterlogging falls, and its smooth surface lets a smaller section carry the flow. The water saved and the higher attainable water level increase the command area.</p><p>Whether lining pays is judged by a benefit–cost ratio: the yearly value of the water saved against the yearly cost of the lining, depreciation or capital recovery plus maintenance.</p>",
        "example": {
         "title": "Worked example: benefit–cost ratio of lining",
         "html": "<p>1 km of canal with a 20 m perimeter needs 20 000 m<sup>2</sup> of lining costing Rs 8,00,000. It saves 0.06 cumec, worth Rs 18,000 a year. Depreciation over 40 years plus maintenance at 12 paisa/m<sup>2</sup> costs Rs 22,400 a year, so B/C ≈ 0.80.</p>"
        },
        "points": [
         {
          "html": "With a lined channel section the command area increases, as seepage losses fall.",
          "sources": [
           {
            "id": "PAST-05-014",
            "label": "Set 5 · Q14"
           }
          ]
         },
         {
          "html": "Lining at Rs 40/m<sup>2</sup> for a 20 m perimeter, lasting 40 years, gives a B/C ratio of about 0.8.",
          "sources": [
           {
            "id": "PAST-04-068",
            "label": "Set 4 · Q68"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-014",
          "label": "Set 5 · Q14"
         },
         {
          "id": "PAST-04-068",
          "label": "Set 4 · Q68"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Lacey's silt factor",
        "tex": "f = 1.76\\sqrt{d_{\\text{mm}}}"
       },
       {
        "label": "Lacey's velocity",
        "tex": "V = \\left(\\dfrac{Q f^2}{140}\\right)^{1/6}"
       },
       {
        "label": "Lacey's slope",
        "tex": "S = \\dfrac{f^{5/3}}{3340\\, Q^{1/6}}"
       },
       {
        "label": "Regime flow equation",
        "tex": "V = 10.8\\, R^{2/3} S^{1/3}"
       },
       {
        "label": "Kennedy's critical velocity",
        "tex": "V_0 = 0.55\\, m D^{0.64}"
       },
       {
        "label": "Tractive force",
        "tex": "\\tau_0 = \\gamma R S_0"
       }
      ],
      "cautions": [
       {
        "id": "lining-benefit-cost-key",
        "status": "corrected",
        "prompt": "The published key picks a higher B/C ratio that the data do not support",
        "html": "<p>For 1 km of canal the yearly benefit is Rs 18,000 and the yearly cost, depreciation plus maintenance, is Rs 22,400, so B/C ≈ 0.80. Discounting the capital at 6% would lower the ratio further, to about 0.32.</p>",
        "sources": [
         {
          "id": "PAST-04-068",
          "label": "Set 4 · Q68"
         }
        ]
       }
      ],
      "gaps": [
       "Canal networks in detail and the design of alluvial canal sections from the syllabus are only touched on in these papers."
      ]
     },
     "ACiE0703": {
      "code": "ACiE0703",
      "questionCount": 30,
      "format": 2,
      "summary": "<p>This subchapter covers the works that divert river water into a canal. The past-paper questions test weirs, barrages and dams, the divide wall, undersluices, fish ladders and silt excluders, discharge over weirs and ogee spillways, weir length and flood-wall level, the nappe, Bligh's, Lane's and Khosla's seepage theories and exit gradients, gates and the ski-jump dissipater.</p>",
      "blocks": [
       {
        "id": "headworks-components",
        "title": "Weirs, barrages and the parts of diversion headworks",
        "html": "<p>A weir or barrage raises the river level upstream so that water can be diverted into the canal at the required head. A weir does it mainly with a fixed raised crest; a barrage holds the pond with a series of gates over a low crest, so the presence of gates is the main difference. A dam, by contrast, is higher, stores water and passes floods only through spillways.</p><p>A <em>divide wall</em> at right angles to the weir separates the undersluices from the main weir and makes a still pocket in front of the head regulator; a fish ladder is built beside it. <em>Undersluices</em> sit at about river-bed level to scour silt from the canal head. A <em>silt excluder</em> in the bed just upstream of the head regulator passes silt-laden bottom water through the undersluices. Aqueducts belong along the canal, not at its head.</p>",
        "points": [
         {
          "html": "The main function of a weir or barrage is to increase water height upstream for diversion.",
          "sources": [
           {
            "id": "PAST-09-026",
            "label": "Set 9 · Q26"
           }
          ]
         },
         {
          "html": "The major difference between weirs and barrages is the presence of gates.",
          "sources": [
           {
            "id": "PAST-12-028",
            "label": "Set 12 · Q28"
           }
          ]
         },
         {
          "html": "All of the above distinguish a weir from a dam: flow over the crest, storage and height.",
          "sources": [
           {
            "id": "PAST-17-014",
            "label": "Set 17 · Q14"
           }
          ]
         },
         {
          "html": "A divide wall separates the undersluices from the main weir.",
          "sources": [
           {
            "id": "PAST-08-042",
            "label": "Set 8 · Q42"
           },
           {
            "id": "PAST-13-045",
            "label": "Set 13 · Q45"
           }
          ]
         },
         {
          "html": "A fish ladder is provided beside the divide wall.",
          "sources": [
           {
            "id": "PAST-11-041",
            "label": "Set 11 · Q41"
           }
          ]
         },
         {
          "html": "Undersluices are set at about the same height as the river bed level.",
          "sources": [
           {
            "id": "PAST-13-048",
            "label": "Set 13 · Q48"
           }
          ]
         },
         {
          "html": "A canal aqueduct cannot be provided at a head regulator; it is a cross-drainage work along the canal.",
          "sources": [
           {
            "id": "PAST-06-048",
            "label": "Set 6 · Q48"
           }
          ]
         },
         {
          "html": "The silt excluder, placed at the head of the regulator, removes silt before it enters the canal.",
          "sources": [
           {
            "id": "PAST-05-033",
            "label": "Set 5 · Q33"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-09-026",
          "label": "Set 9 · Q26"
         },
         {
          "id": "PAST-12-028",
          "label": "Set 12 · Q28"
         },
         {
          "id": "PAST-17-014",
          "label": "Set 17 · Q14"
         },
         {
          "id": "PAST-08-042",
          "label": "Set 8 · Q42"
         },
         {
          "id": "PAST-13-045",
          "label": "Set 13 · Q45"
         },
         {
          "id": "PAST-11-041",
          "label": "Set 11 · Q41"
         },
         {
          "id": "PAST-13-048",
          "label": "Set 13 · Q48"
         },
         {
          "id": "PAST-06-048",
          "label": "Set 6 · Q48"
         },
         {
          "id": "PAST-05-033",
          "label": "Set 5 · Q33"
         }
        ]
       },
       {
        "id": "weir-discharge-and-crest-shapes",
        "title": "Discharge over weirs, weir length and crest shapes",
        "html": "<p>The discharge over a weir or spillway crest varies as the head to the power 3/2. A crest shaped to the lower surface of a free jet, the ogee or parabolic profile, is the most efficient, with a high discharge coefficient. Over a broad crest the flow becomes nearly parallel at critical depth, with little disturbance, which the papers take as the smallest head loss. The sheet of water flowing over the crest is the <em>nappe</em> or vein.</p><p>The waterway of a weir is estimated from Lacey's wetted perimeter, but it cannot exceed the width of the river between its banks. The flood wall is the upstream bed level plus the weir height, the head over the crest and a freeboard.</p>",
        "formulas": [
         {
          "label": "Weir discharge and Lacey's waterway",
          "tex": "Q = C L H^{3/2}, \\qquad P = 4.75\\sqrt{Q}"
         }
        ],
        "example": {
         "title": "Worked examples: crest length and flood wall",
         "html": "<p>90 m<sup>3</sup>/s over an ogee crest with H = 1.6 m and C = 1.7: \\(L = 90/(1.7 \\times 1.6^{1.5}) \\approx 26\\) m.</p><p>A 30 m broad-crested weir, \\(C_w = 1.5\\), 2.5 m high on a bed at 1080 m: \\(H = (90/45)^{2/3} = 1.59\\) m, so the flood level is 1084.09 m and the wall top, with 1.2 m freeboard, about 1085.28 m.</p>"
        },
        "points": [
         {
          "html": "Discharge over an ogee weir is proportional to \\(H^{3/2}\\).",
          "sources": [
           {
            "id": "PAST-06-036",
            "label": "Set 6 · Q36"
           }
          ]
         },
         {
          "html": "90 m<sup>3</sup>/s over an ogee spillway with 1.6 m head and C = 1.7 needs a 26 m crest.",
          "sources": [
           {
            "id": "PAST-07-062",
            "label": "Set 7 · Q62"
           }
          ]
         },
         {
          "html": "A 30 m broad-crested weir 2.5 m high passing 90 m<sup>3</sup>/s from a 1080 m bed needs a flood wall at RL 1085.28 m.",
          "sources": [
           {
            "id": "PAST-05-071",
            "label": "Set 5 · Q71"
           },
           {
            "id": "PAST-18-078",
            "label": "Set 18 · Q78"
           }
          ]
         },
         {
          "html": "For a 4000 m<sup>3</sup>/s design flood in a river 280 m wide, the weir length is limited to 280 m.",
          "sources": [
           {
            "id": "PAST-05-074",
            "label": "Set 5 · Q74"
           },
           {
            "id": "PAST-15-073",
            "label": "Set 15 · Q73"
           }
          ]
         },
         {
          "html": "The parabolic (ogee) weir is the most efficient.",
          "sources": [
           {
            "id": "PAST-09-048",
            "label": "Set 9 · Q48"
           }
          ]
         },
         {
          "html": "Head loss is small over a broad crested weir.",
          "sources": [
           {
            "id": "PAST-14-012",
            "label": "Set 14 · Q12"
           }
          ]
         },
         {
          "html": "The sheet of water flowing over a weir is the nappe or vein.",
          "sources": [
           {
            "id": "PAST-16-072",
            "label": "Set 16 · Q72"
           }
          ]
         },
         {
          "html": "Nappe means the flowing water above the crest of a weir.",
          "sources": [
           {
            "id": "PAST-17-057",
            "label": "Set 17 · Q57"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-036",
          "label": "Set 6 · Q36"
         },
         {
          "id": "PAST-07-062",
          "label": "Set 7 · Q62"
         },
         {
          "id": "PAST-05-071",
          "label": "Set 5 · Q71"
         },
         {
          "id": "PAST-18-078",
          "label": "Set 18 · Q78"
         },
         {
          "id": "PAST-05-074",
          "label": "Set 5 · Q74"
         },
         {
          "id": "PAST-15-073",
          "label": "Set 15 · Q73"
         },
         {
          "id": "PAST-09-048",
          "label": "Set 9 · Q48"
         },
         {
          "id": "PAST-14-012",
          "label": "Set 14 · Q12"
         },
         {
          "id": "PAST-16-072",
          "label": "Set 16 · Q72"
         },
         {
          "id": "PAST-17-057",
          "label": "Set 17 · Q57"
         }
        ]
       },
       {
        "id": "seepage-theories",
        "title": "Seepage under weirs: Bligh, Lane and Khosla",
        "html": "<p>Water seeping under a weir floor can wash out grains at the exit, piping, and push up on the floor, uplift. <em>Bligh</em> assumed the water creeps along the outline of the base and the sheet piles, losing head uniformly, and gave horizontal and vertical creep equal weightage. <em>Lane</em> weighted vertical creep fully but horizontal creep at one third.</p><p><em>Khosla's</em> method of independent variables gives the residual uplift pressures at key points of the floor and the exit gradient, which governs piping. Fine sand is lifted most easily, so its safe exit gradient is the lowest, about 1/6 to 1/7.</p>",
        "formulas": [
         {
          "label": "Lane's weighted creep length",
          "tex": "L_w = \\sum V + \\tfrac{1}{3}\\sum H"
         },
         {
          "label": "Khosla: end pile of depth d under a floor of length b",
          "tex": "\\lambda = \\dfrac{1 + \\sqrt{1 + \\alpha^2}}{2}, \\quad \\alpha = \\dfrac{b}{d}"
         },
         {
          "label": "Residual pressure at the pile tip",
          "tex": "\\phi_D = \\dfrac{1}{\\pi}\\cos^{-1}\\left(\\dfrac{\\lambda - 1}{\\lambda}\\right)"
         }
        ],
        "example": {
         "title": "Worked examples: Lane's creep and Khosla's pressure",
         "html": "<p>Cutoffs 5 m and 8 m under a 54 m floor: \\(L_w = 2 \\times 5 + 54/3 + 2 \\times 8\\), which is 44 m.</p><p>A 60 m floor with an 8 m downstream pile: \\(\\alpha = 7.5\\), \\(\\lambda = 4.283\\) and \\(\\phi_D = (1/\\pi)\\cos^{-1}(0.767)\\), about 22.2%.</p>"
        },
        "points": [
         {
          "html": "Bligh's theory gives equal weightage to the horizontal and vertical creep.",
          "sources": [
           {
            "id": "PAST-05-056",
            "label": "Set 5 · Q56"
           }
          ]
         },
         {
          "html": "By Bligh's creep theory water percolates along the outline of the base of the foundation.",
          "sources": [
           {
            "id": "PAST-07-040",
            "label": "Set 7 · Q40"
           }
          ]
         },
         {
          "html": "With cutoffs of 5 m and 8 m under a 54 m floor, Lane's creep length is 44 m.",
          "sources": [
           {
            "id": "PAST-08-073",
            "label": "Set 8 · Q73"
           },
           {
            "id": "PAST-18-079",
            "label": "Set 18 · Q79"
           }
          ]
         },
         {
          "html": "A 60 m floor with an 8 m downstream pile has a residual head of 22.2% at the pile bottom.",
          "sources": [
           {
            "id": "PAST-11-073",
            "label": "Set 11 · Q73"
           }
          ]
         },
         {
          "html": "Khosla's theory calculates the uplift pressure and exit gradient under a floor.",
          "sources": [
           {
            "id": "PAST-16-013",
            "label": "Set 16 · Q13"
           }
          ]
         },
         {
          "html": "Fine sand has the lowest safe exit gradient by Khosla's theory.",
          "sources": [
           {
            "id": "PAST-12-030",
            "label": "Set 12 · Q30"
           },
           {
            "id": "PAST-16-030",
            "label": "Set 16 · Q30"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-056",
          "label": "Set 5 · Q56"
         },
         {
          "id": "PAST-07-040",
          "label": "Set 7 · Q40"
         },
         {
          "id": "PAST-08-073",
          "label": "Set 8 · Q73"
         },
         {
          "id": "PAST-18-079",
          "label": "Set 18 · Q79"
         },
         {
          "id": "PAST-11-073",
          "label": "Set 11 · Q73"
         },
         {
          "id": "PAST-16-013",
          "label": "Set 16 · Q13"
         },
         {
          "id": "PAST-12-030",
          "label": "Set 12 · Q30"
         },
         {
          "id": "PAST-16-030",
          "label": "Set 16 · Q30"
         }
        ]
       },
       {
        "id": "gates-and-energy-dissipaters",
        "title": "Gates and energy dissipaters",
        "html": "<p>Modern spillways and intakes mostly use fixed-wheel gates, vertical-lift gates whose wheels, on axles fixed to the gate, roll on guide tracks; radial gates are also common.</p><p>Below a weir or spillway the fast flow must lose its energy. A hydraulic jump in a stilling basin needs enough tailwater. When the tailwater is too low for a jump, the jump height exceeding the tailwater depth, a <em>ski-jump</em> bucket throws the jet clear so that it dissipates energy in the air and in a plunge pool downstream.</p>",
        "points": [
         {
          "html": "Fixed gates, the fixed-wheel type, are mostly used in modern hydraulic structures.",
          "sources": [
           {
            "id": "PAST-12-033",
            "label": "Set 12 · Q33"
           }
          ]
         },
         {
          "html": "The most common vertical-lift gates today are fixed wheel gates.",
          "sources": [
           {
            "id": "PAST-15-044",
            "label": "Set 15 · Q44"
           }
          ]
         },
         {
          "html": "A ski jump dissipater is used when the jump height exceeds the tailwater depth.",
          "sources": [
           {
            "id": "PAST-04-044",
            "label": "Set 4 · Q44"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-12-033",
          "label": "Set 12 · Q33"
         },
         {
          "id": "PAST-15-044",
          "label": "Set 15 · Q44"
         },
         {
          "id": "PAST-04-044",
          "label": "Set 4 · Q44"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Weir discharge",
        "tex": "Q = C L H^{3/2}"
       },
       {
        "label": "Lacey's waterway",
        "tex": "P = 4.75\\sqrt{Q}"
       },
       {
        "label": "Lane's weighted creep",
        "tex": "L_w = \\sum V + \\tfrac{1}{3}\\sum H"
       },
       {
        "label": "Khosla's parameter",
        "tex": "\\lambda = \\dfrac{1 + \\sqrt{1 + \\alpha^2}}{2}"
       },
       {
        "label": "Khosla's pile-tip pressure",
        "tex": "\\phi_D = \\dfrac{1}{\\pi}\\cos^{-1}\\left(\\dfrac{\\lambda - 1}{\\lambda}\\right)"
       }
      ],
      "cautions": [
       {
        "id": "ogee-discharge-key",
        "status": "corrected",
        "prompt": "The published key picks plain H, though its own formula uses H to the power 3/2",
        "html": "<p>For weirs and spillways \\(Q = CLH^{3/2}\\); \\(H^{5/2}\\) belongs to a triangular notch. The key letter points to plain H even though its own working uses \\(H^{3/2}\\).</p>",
        "sources": [
         {
          "id": "PAST-06-036",
          "label": "Set 6 · Q36"
         }
        ]
       }
      ],
      "gaps": [
       "Impervious-floor thickness design and silt ejectors in detail from the syllabus are only touched on in these papers."
      ]
     },
     "ACiE0704": {
      "code": "ACiE0704",
      "questionCount": 22,
      "format": 2,
      "summary": "<p>This subchapter covers how rivers behave and how they are trained. The past-paper questions test river stages, bed forms and the dominant discharge, the types and structures of river training, groynes, guide banks and their lengths and top level, Lacey's waterway and scour depth, and the width and material of launching aprons.</p>",
      "blocks": [
       {
        "id": "river-behaviour",
        "title": "River stages, bed forms and the dominant discharge",
        "html": "<p>A river erodes in its upper, rocky and boulder, stages, where slopes are steep, and deposits its load in the delta stage near its mouth, where slope and velocity are lowest. An alluvial bed moved by the flow takes the form of ripples, dunes or antidunes; meandering describes the channel's plan form, not a bed form.</p><p>The channel is shaped mostly by the <em>dominant discharge</em>, a flow of high enough magnitude and frequency to set the boundary; it is often close to the bankfull flow. Frequent moderate floods do more channel-forming work than rare large ones.</p>",
        "points": [
         {
          "html": "A river deposits its sediments in the delta stage.",
          "sources": [
           {
            "id": "PAST-11-051",
            "label": "Set 11 · Q51"
           }
          ]
         },
         {
          "html": "Meandered is a plan form, not a bed formation from sediment motion like ripples or dunes.",
          "sources": [
           {
            "id": "PAST-06-034",
            "label": "Set 6 · Q34"
           }
          ]
         },
         {
          "html": "The discharge that shapes a river boundary through its size and frequency is the dominant discharge.",
          "sources": [
           {
            "id": "PAST-06-076",
            "label": "Set 6 · Q76"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-11-051",
          "label": "Set 11 · Q51"
         },
         {
          "id": "PAST-06-034",
          "label": "Set 6 · Q34"
         },
         {
          "id": "PAST-06-076",
          "label": "Set 6 · Q76"
         }
        ]
       },
       {
        "id": "river-training-types-and-structures",
        "title": "Types of river training and training structures",
        "html": "<p>River training is classed into three types: high-water or flood training, low-water training for navigation depth, and mean-water training to keep the channel in shape. Its structures include spurs or groynes, guide banks, marginal bunds and launching aprons; a canal bund belongs to an irrigation canal, and the catchment area is the drainage basin, not a structure.</p><p>A <em>groyne</em> or spur projects from the bank to deflect the current away from it and train the flow along a desired course; silt settles between spurs and protects the bank.</p>",
        "points": [
         {
          "html": "There are 3 types of river training works: high-water, low-water and mean-water.",
          "sources": [
           {
            "id": "PAST-16-044",
            "label": "Set 16 · Q44"
           }
          ]
         },
         {
          "html": "The catchment area is not a component of river training works.",
          "sources": [
           {
            "id": "PAST-10-026",
            "label": "Set 10 · Q26"
           }
          ]
         },
         {
          "html": "A canal bund is not considered a river-training structure.",
          "sources": [
           {
            "id": "PAST-15-041",
            "label": "Set 15 · Q41"
           }
          ]
         },
         {
          "html": "A groyne is built to train the flow along a certain course, away from the bank.",
          "sources": [
           {
            "id": "PAST-11-046",
            "label": "Set 11 · Q46"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-16-044",
          "label": "Set 16 · Q44"
         },
         {
          "id": "PAST-10-026",
          "label": "Set 10 · Q26"
         },
         {
          "id": "PAST-15-041",
          "label": "Set 15 · Q41"
         },
         {
          "id": "PAST-11-046",
          "label": "Set 11 · Q46"
         }
        ]
       },
       {
        "id": "guide-banks",
        "title": "Guide banks: purpose, lengths and top level",
        "html": "<p>Guide banks confine and canalize the flow, training the river along a specified course through a bridge or barrage opening so that it cannot outflank the structure. The upstream bank is longer, about 1.0 to 1.5 times the waterway length L, commonly 1.25L; the downstream one is only 0.2 to 0.4L, commonly 0.25L.</p><p>The top of a guide bank is set at the high flood level plus a freeboard of about 1.5 to 2 m, allowing for waves and floating debris.</p>",
        "formulas": [
         {
          "label": "Guide-bank lengths",
          "tex": "L_{\\text{u/s}} \\approx 1.25L, \\qquad L_{\\text{d/s}} \\approx 0.25L"
         }
        ],
        "example": {
         "title": "Worked examples: bank lengths and top level",
         "html": "<p>For a 400 m barrage: upstream \\(1.25 \\times 400 = 500\\) m and downstream \\(0.25 \\times 400 = 100\\) m.</p><p>Bed at 113 m with a 5 m flood depth: HFL = 118 m, so with about 2 m of freeboard the top is at 120 m.</p>"
        },
        "points": [
         {
          "html": "Guide banks are provided to train the flow of a river along a specified course.",
          "sources": [
           {
            "id": "PAST-07-047",
            "label": "Set 7 · Q47"
           }
          ]
         },
         {
          "html": "Guide banks canalize the flow through the waterway.",
          "sources": [
           {
            "id": "PAST-13-056",
            "label": "Set 13 · Q56"
           }
          ]
         },
         {
          "html": "The upstream guide bank is greater in length than the downstream one.",
          "sources": [
           {
            "id": "PAST-04-079",
            "label": "Set 4 · Q79"
           }
          ]
         },
         {
          "html": "An upstream guide bank is typically 1.25L long.",
          "sources": [
           {
            "id": "PAST-17-008",
            "label": "Set 17 · Q8"
           }
          ]
         },
         {
          "html": "For a 400 m barrage the guide banks are about 500 m and 100 m upstream and downstream.",
          "sources": [
           {
            "id": "PAST-05-076",
            "label": "Set 5 · Q76"
           },
           {
            "id": "PAST-15-074",
            "label": "Set 15 · Q74"
           }
          ]
         },
         {
          "html": "With a 400 m long barrage, guide banks are u/s = 500 m and d/s = 100 m.",
          "sources": [
           {
            "id": "PAST-17-037",
            "label": "Set 17 · Q37"
           }
          ]
         },
         {
          "html": "With a bed at 113 m and 5 m maximum flood depth, the guide bund top is at RL 120 m.",
          "sources": [
           {
            "id": "PAST-08-072",
            "label": "Set 8 · Q72"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-07-047",
          "label": "Set 7 · Q47"
         },
         {
          "id": "PAST-13-056",
          "label": "Set 13 · Q56"
         },
         {
          "id": "PAST-04-079",
          "label": "Set 4 · Q79"
         },
         {
          "id": "PAST-17-008",
          "label": "Set 17 · Q8"
         },
         {
          "id": "PAST-05-076",
          "label": "Set 5 · Q76"
         },
         {
          "id": "PAST-15-074",
          "label": "Set 15 · Q74"
         },
         {
          "id": "PAST-17-037",
          "label": "Set 17 · Q37"
         },
         {
          "id": "PAST-08-072",
          "label": "Set 8 · Q72"
         }
        ]
       },
       {
        "id": "waterway-and-scour-depth",
        "title": "Lacey's waterway and scour depth",
        "html": "<p>The waterway of a bridge or barrage on an alluvial river is taken as Lacey's regime wetted perimeter, which depends only on the dominant discharge. The normal scour depth for a discharge intensity q per metre width follows from Lacey's formula with the silt factor f; it is measured below the high flood level.</p>",
        "formulas": [
         {
          "label": "Lacey's waterway",
          "tex": "P = 4.75\\sqrt{Q}"
         },
         {
          "label": "Lacey's scour depth",
          "tex": "R = 1.35\\left(\\dfrac{q^2}{f}\\right)^{1/3}"
         }
        ],
        "example": {
         "title": "Worked examples: waterway and scour depth",
         "html": "<p>3600 cumecs: \\(P = 4.75 \\times 60 = 285\\) m.</p><p>q = 3 m<sup>3</sup>/s/m and f = 1.2: \\(R = 1.35 \\times (9/1.2)^{1/3} \\approx 2.64\\) m.</p><p>96 m<sup>3</sup>/s over 12 m with f = 1: q = 8, so \\(R = 1.35 \\times 4 = 5.4\\) m.</p>"
        },
        "points": [
         {
          "html": "A dominant discharge of 3600 cumecs needs a bridge waterway of 285 m.",
          "sources": [
           {
            "id": "PAST-07-071",
            "label": "Set 7 · Q71"
           }
          ]
         },
         {
          "html": "Lacey's scour depth is \\(R = 1.35(q^2/f)^{1/3}\\).",
          "sources": [
           {
            "id": "PAST-13-038",
            "label": "Set 13 · Q38"
           }
          ]
         },
         {
          "html": "3 cumecs per metre width with a silt factor of 1.2 gives a scour depth of 2.64 m.",
          "sources": [
           {
            "id": "PAST-07-075",
            "label": "Set 7 · Q75"
           }
          ]
         },
         {
          "html": "96 m<sup>3</sup>/s in a 12 m wide channel with unit silt factor gives a regime scour depth of 5.4 m.",
          "sources": [
           {
            "id": "PAST-13-063",
            "label": "Set 13 · Q63"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-07-071",
          "label": "Set 7 · Q71"
         },
         {
          "id": "PAST-13-038",
          "label": "Set 13 · Q38"
         },
         {
          "id": "PAST-07-075",
          "label": "Set 7 · Q75"
         },
         {
          "id": "PAST-13-063",
          "label": "Set 13 · Q63"
         }
        ]
       },
       {
        "id": "launching-aprons",
        "title": "Launching aprons",
        "html": "<p>A launching apron is laid flat on the bed at the toe of a guide bank or weir. When the bed scours, it launches down into the scour hole and armours the slope, so it must be flexible: loose boulders or gabions, never rigid masonry or concrete. It is usually about 1.5 times the scour depth D below the bed in width.</p><p>For design the scour depth is often taken as twice Lacey's depth, measured below the water level.</p>",
        "points": [
         {
          "html": "A launching apron is made of gabion or loose boulders, which can settle into the scour hole.",
          "sources": [
           {
            "id": "PAST-05-034",
            "label": "Set 5 · Q34"
           }
          ]
         },
         {
          "html": "The width of a launching apron is generally 1.5D, D being the scour depth below the bed.",
          "sources": [
           {
            "id": "PAST-14-010",
            "label": "Set 14 · Q10"
           }
          ]
         },
         {
          "html": "For 6.5 m<sup>3</sup>/s/m with f = 1 and a 4.4 m tailwater, the design scour lies 5 m below the bed, the keyed answer.",
          "sources": [
           {
            "id": "PAST-17-073",
            "label": "Set 17 · Q73"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-034",
          "label": "Set 5 · Q34"
         },
         {
          "id": "PAST-14-010",
          "label": "Set 14 · Q10"
         },
         {
          "id": "PAST-17-073",
          "label": "Set 17 · Q73"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Lacey's waterway",
        "tex": "P = 4.75\\sqrt{Q}"
       },
       {
        "label": "Lacey's scour depth",
        "tex": "R = 1.35\\left(\\dfrac{q^2}{f}\\right)^{1/3}"
       },
       {
        "label": "Upstream guide bank",
        "tex": "L_{\\text{u/s}} \\approx 1.25L"
       },
       {
        "label": "Downstream guide bank",
        "tex": "L_{\\text{d/s}} \\approx 0.25L"
       },
       {
        "label": "Launching apron width",
        "tex": "W \\approx 1.5D"
       }
      ],
      "cautions": [
       {
        "id": "launching-apron-length",
        "status": "review",
        "prompt": "The key gives the design scour depth below the bed, not the launched length",
        "html": "<p>Lacey's depth is \\(1.35(6.5^2)^{1/3} \\approx 4.70\\) m, so the design scour lies \\(2 \\times 4.70 - 4.4 \\approx 5.0\\) m below the bed, the published answer. Laid at 2:1, the sloping launched length would be about \\(\\sqrt{5} \\times 5 \\approx 11\\) m.</p>",
        "sources": [
         {
          "id": "PAST-17-073",
          "label": "Set 17 · Q73"
         }
        ]
       }
      ],
      "gaps": [
       "Levees and watershed management from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0705": {
      "code": "ACiE0705",
      "questionCount": 15,
      "format": 2,
      "summary": "<p>This subchapter covers the structures that control and carry canal water. The past-paper questions test cross regulators and canal escapes, the sensitivity of a rigid module and canal inlets, when and where canal falls are needed and the Sarda fall crest, aqueducts and syphon aqueducts, and the number of siphon units and the head loss in a siphon flume.</p>",
      "blocks": [
       {
        "id": "regulators-and-escapes",
        "title": "Cross regulators and canal escapes",
        "html": "<p>A <em>cross regulator</em> is built across the parent canal just downstream of an off-take. Partly closing its gates heads up the water upstream, so the off-taking channels draw their full supply when the parent canal runs low. It can also shut off the reach below for repairs and helps absorb fluctuations in the system.</p><p>A <em>head regulator</em> controls the flow entering an off-take. A <em>canal escape</em> is the canal's safety valve: it releases surplus water into a natural drain so the banks are not overtopped.</p>",
        "points": [
         {
          "html": "A cross regulator is used to maintain the head for flow in the off-taking canal.",
          "sources": [
           {
            "id": "PAST-08-056",
            "label": "Set 8 · Q56"
           }
          ]
         },
         {
          "html": "Cross regulators do all of the above: head up water at low discharge, close supply downstream and absorb fluctuations.",
          "sources": [
           {
            "id": "PAST-09-027",
            "label": "Set 9 · Q27"
           }
          ]
         },
         {
          "html": "Downstream of an off-take, a cross regulator serves to increase the water head upstream when the main canal is running with low supplies.",
          "sources": [
           {
            "id": "PAST-13-049",
            "label": "Set 13 · Q49"
           }
          ]
         },
         {
          "html": "A cross regulator is mainly used to head up the water in the parent canal so the off-taking channels get their full supply when the parent canal runs low.",
          "sources": [
           {
            "id": "PAST-R2083-004",
            "label": "2083 recall · Q4"
           }
          ]
         },
         {
          "html": "Extra water is discharged from a canal by a canal escape.",
          "sources": [
           {
            "id": "PAST-05-032",
            "label": "Set 5 · Q32"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-08-056",
          "label": "Set 8 · Q56"
         },
         {
          "id": "PAST-09-027",
          "label": "Set 9 · Q27"
         },
         {
          "id": "PAST-13-049",
          "label": "Set 13 · Q49"
         },
         {
          "id": "PAST-R2083-004",
          "label": "2083 recall · Q4"
         },
         {
          "id": "PAST-05-032",
          "label": "Set 5 · Q32"
         }
        ]
       },
       {
        "id": "outlets-modules-and-inlets",
        "title": "Outlets, modules and canal inlets",
        "html": "<p>Outlets deliver canal water to the watercourses. A free outlet discharges independently of the water level downstream, while a submerged one depends on both levels. The <em>sensitivity</em> of an outlet is the rate of change of its discharge relative to the rate of change of the distributary water level; a rigid module gives a fixed discharge whatever the level, so its sensitivity is zero.</p><p>A <em>canal inlet</em> works the other way, admitting a small drain or stream into the canal so that the waters mix, provided the canal has spare capacity.</p>",
        "formulas": [
         {
          "label": "Sensitivity of an outlet",
          "tex": "S = \\dfrac{dq/q}{dH/H}"
         }
        ],
        "points": [
         {
          "html": "The sensitivity of a rigid module is 0, since its discharge does not change with the water level.",
          "sources": [
           {
            "id": "PAST-04-053",
            "label": "Set 4 · Q53"
           }
          ]
         },
         {
          "html": "A canal inlet lets drainage water mix with the canal.",
          "sources": [
           {
            "id": "PAST-12-027",
            "label": "Set 12 · Q27"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-053",
          "label": "Set 4 · Q53"
         },
         {
          "id": "PAST-12-027",
          "label": "Set 12 · Q27"
         }
        ]
       },
       {
        "id": "canal-falls",
        "title": "Canal falls",
        "html": "<p>A canal fall is needed where the ground slope exceeds the designed bed slope of the canal: without it the canal would run in ever-deeper filling. The fall drops the bed in a step and dissipates the energy in a cistern below. Falls are placed so that the full supply level still commands the land at every off-take and outlet, so the commanded area decides where they go in the main channel.</p><p>In a Sarda fall water drops vertically over a raised crest wall; a rectangular crest is used for discharges up to about 14 cumecs and a trapezoidal one for larger flows.</p>",
        "points": [
         {
          "html": "A canal fall is provided if the ground slope exceeds the designed bed slope.",
          "sources": [
           {
            "id": "PAST-10-019",
            "label": "Set 10 · Q19"
           }
          ]
         },
         {
          "html": "A Sarda fall may use a rectangular crest for discharges up to 14 cumecs.",
          "sources": [
           {
            "id": "PAST-10-058",
            "label": "Set 10 · Q58"
           }
          ]
         },
         {
          "html": "The commanded area decides the canal falls in the main channel, which must keep the land commanded.",
          "sources": [
           {
            "id": "PAST-15-039",
            "label": "Set 15 · Q39"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-10-019",
          "label": "Set 10 · Q19"
         },
         {
          "id": "PAST-10-058",
          "label": "Set 10 · Q58"
         },
         {
          "id": "PAST-15-039",
          "label": "Set 15 · Q39"
         }
        ]
       },
       {
        "id": "cross-drainage-works",
        "title": "Cross-drainage works: aqueducts and siphons",
        "html": "<p>Where a canal meets a natural drain, the choice of work depends on their levels. If the canal passes over the drain, it is an <em>aqueduct</em> when the drain's high flood level stays below the canal trough and the drain flows freely beneath, and a <em>syphon aqueduct</em> when the drain's HFL rises above the trough bottom and the drain passes under the canal under pressure.</p><p>If the drain passes over the canal it is a super passage, or a canal syphon when the canal runs full below. The capacity of a siphon unit follows the orifice equation, and friction loss in a flume follows Manning's formula.</p>",
        "formulas": [
         {
          "label": "Siphon unit discharge",
          "tex": "Q = C_d A \\sqrt{2gH}"
         },
         {
          "label": "Friction loss in a flume",
          "tex": "h_f = \\dfrac{n^2 V^2 L}{R^{4/3}}"
         }
        ],
        "example": {
         "title": "Worked examples: siphon units and flume loss",
         "html": "<p>A 5 m by 2.25 m throat with \\(C_d = 0.9\\) under 4.53 m passes about 95.4 m<sup>3</sup>/s, so 350 cumecs needs \\(350/95.4 = 3.7\\), that is four units.</p><p>A 10 m by 2 m flume has R = 20/14 = 1.43 m; at 2.5 m/s over 100 m with n = 0.015, \\(h_f \\approx 0.087\\) m.</p>"
        },
        "points": [
         {
          "html": "Works carrying a canal over a natural drain are the aqueduct and syphon aqueduct.",
          "sources": [
           {
            "id": "PAST-06-047",
            "label": "Set 6 · Q47"
           }
          ]
         },
         {
          "html": "When the canal trough stands above the stream's HFL, the crossing is an aqueduct.",
          "sources": [
           {
            "id": "PAST-17-017",
            "label": "Set 17 · Q17"
           }
          ]
         },
         {
          "html": "A syphon aqueduct is used when the high flood level of the drain is above the bottom of the canal trough, so the drain passes under the canal under pressure.",
          "sources": [
           {
            "id": "PAST-R2083-007",
            "label": "2083 recall · Q7"
           }
          ]
         },
         {
          "html": "A saddle siphon with a 5 m by 2.25 m throat under 4.53 m head needs four units for 350 cumecs.",
          "sources": [
           {
            "id": "PAST-04-004",
            "label": "Set 4 · Q4"
           }
          ]
         },
         {
          "html": "A 100 m siphon flume, 10 m wide and 2 m deep, at 2.5 m/s with n = 0.015 loses 87 mm of head.",
          "sources": [
           {
            "id": "PAST-04-062",
            "label": "Set 4 · Q62"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-047",
          "label": "Set 6 · Q47"
         },
         {
          "id": "PAST-17-017",
          "label": "Set 17 · Q17"
         },
         {
          "id": "PAST-R2083-007",
          "label": "2083 recall · Q7"
         },
         {
          "id": "PAST-04-004",
          "label": "Set 4 · Q4"
         },
         {
          "id": "PAST-04-062",
          "label": "Set 4 · Q62"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Outlet sensitivity",
        "tex": "S = \\dfrac{dq/q}{dH/H}"
       },
       {
        "label": "Siphon unit discharge",
        "tex": "Q = C_d A \\sqrt{2gH}"
       },
       {
        "label": "Manning friction loss",
        "tex": "h_f = \\dfrac{n^2 V^2 L}{R^{4/3}}"
       }
      ],
      "cautions": [],
      "gaps": [
       "Crest and impervious-floor design of regulators and pipe outlet design from the syllabus are not examined in these papers."
      ]
     },
     "ACiE0706": {
      "code": "ACiE0706",
      "questionCount": 12,
      "format": 2,
      "summary": "<p>This subchapter covers waterlogging and the drainage that relieves it. The past-paper questions test the causes of waterlogging, including canal seepage and over-irrigation, what does not cause it, the pH of alkaline waterlogged soils, leaching of saline soils, bedding and deep surface drains, and where tile drains work and what their spacing depends on.</p>",
      "blocks": [
       {
        "id": "causes-and-effects-of-waterlogging",
        "title": "Causes and effects of waterlogging",
        "html": "<p>Land becomes waterlogged when the water table rises into the root zone, because recharge from rain, canal seepage and deep percolation exceeds what outflow, drainage, evaporation and pumping remove. For a canal, seepage through its unlined bed and banks is the main cause. Frequent, excessive irrigation and poor drainage add to it; lining canals, lowering their full supply level and installing subsurface drains all help, and heavy pumping of groundwater lowers the water table.</p><p>Waterlogging brings salts to the surface. Soil above about pH 8.5 is alkaline, and at about 11 it is highly alkaline and practically infertile.</p>",
        "points": [
         {
          "html": "For a canal, waterlogging is caused by seepage through the canals.",
          "sources": [
           {
            "id": "PAST-12-059",
            "label": "Set 12 · Q59"
           },
           {
            "id": "PAST-18-059",
            "label": "Set 18 · Q59"
           }
          ]
         },
         {
          "html": "Excessive tapping of ground water lowers the water table and does not contribute to waterlogging.",
          "sources": [
           {
            "id": "PAST-15-040",
            "label": "Set 15 · Q40"
           }
          ]
         },
         {
          "html": "Frequent irrigation does not prevent waterlogging; it raises the water table.",
          "sources": [
           {
            "id": "PAST-08-010",
            "label": "Set 8 · Q10"
           }
          ]
         },
         {
          "html": "A waterlogged topsoil is alkaline and infertile at a pH of about 11.",
          "sources": [
           {
            "id": "PAST-07-059",
            "label": "Set 7 · Q59"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-12-059",
          "label": "Set 12 · Q59"
         },
         {
          "id": "PAST-18-059",
          "label": "Set 18 · Q59"
         },
         {
          "id": "PAST-15-040",
          "label": "Set 15 · Q40"
         },
         {
          "id": "PAST-08-010",
          "label": "Set 8 · Q10"
         },
         {
          "id": "PAST-07-059",
          "label": "Set 7 · Q59"
         }
        ]
       },
       {
        "id": "reclaiming-saline-soils",
        "title": "Reclaiming saline soils",
        "html": "<p>Saline soils carry excess soluble salts. They are improved by <em>leaching</em>: applying good-quality water that carries the salts below the root zone, with a working drain to remove it. Flooding without an outlet only raises the water table and the salts return to the surface. Gypsum or pyrite is used for sodic, alkali soils instead.</p>",
        "points": [
         {
          "html": "Saline soil can be improved by leaching with good water and drainage.",
          "sources": [
           {
            "id": "PAST-05-035",
            "label": "Set 5 · Q35"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-035",
          "label": "Set 5 · Q35"
         }
        ]
       },
       {
        "id": "surface-drainage",
        "title": "Surface drainage: bedding and open drains",
        "html": "<p>Surface drainage removes excess rain or irrigation water from the land surface. In <em>bedding</em>, a field is ploughed into raised beds separated by dead furrows, which collect the excess water and lead it away.</p><p>Open drains are usually trapezoidal with stable earth banks. Deep surface drains carry both surface runoff and seepage, with a small central channel for the dry-weather seepage, so they run at full section only in the rainy season.</p>",
        "points": [
         {
          "html": "Bedding uses dead furrows on cropped farms to drain excess irrigation or rain water.",
          "sources": [
           {
            "id": "PAST-06-046",
            "label": "Set 6 · Q46"
           }
          ]
         },
         {
          "html": "Dead furrows are the basis of bedding, a method of surface drainage.",
          "sources": [
           {
            "id": "PAST-11-052",
            "label": "Set 11 · Q52"
           }
          ]
         },
         {
          "html": "Deep surface drains are fully operative only in the rainy season.",
          "sources": [
           {
            "id": "PAST-16-020",
            "label": "Set 16 · Q20"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-046",
          "label": "Set 6 · Q46"
         },
         {
          "id": "PAST-11-052",
          "label": "Set 11 · Q52"
         },
         {
          "id": "PAST-16-020",
          "label": "Set 16 · Q20"
         }
        ]
       },
       {
        "id": "subsurface-tile-drainage",
        "title": "Subsurface tile drainage",
        "html": "<p>Tile drains are buried perforated pipes that lower a high water table and remove excess water from wet, waterlogged soils; field laterals lead to a collector and an outfall. They must lie in the pervious zone that holds the excess water; placed in or below a less pervious layer they stay dry, because the perched water cannot reach them.</p><p>Between parallel drains the water table forms a curved mound. Drain-spacing formulas such as Hooghoudt's make the spacing grow with the permeability K of the soil: more permeable soil allows wider spacing.</p>",
        "formulas": [
         {
          "label": "Drain spacing (Hooghoudt)",
          "tex": "S^2 = \\dfrac{4K(b^2 - a^2)}{R}"
         }
        ],
        "points": [
         {
          "html": "A tile drain is suitable for wet soil with a high water table.",
          "sources": [
           {
            "id": "PAST-08-031",
            "label": "Set 8 · Q31"
           }
          ]
         },
         {
          "html": "Tile drainage should not be placed under less pervious strata.",
          "sources": [
           {
            "id": "PAST-09-050",
            "label": "Set 9 · Q50"
           }
          ]
         },
         {
          "html": "Tile-drain spacing grows with the coefficient of permeability of the soil to be drained.",
          "sources": [
           {
            "id": "PAST-09-074",
            "label": "Set 9 · Q74"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-08-031",
          "label": "Set 8 · Q31"
         },
         {
          "id": "PAST-09-050",
          "label": "Set 9 · Q50"
         },
         {
          "id": "PAST-09-074",
          "label": "Set 9 · Q74"
         }
        ]
       }
      ],
      "cautions": [],
      "gaps": [
       "The design of surface and subsurface drainage systems in detail from the syllabus is not examined in these papers."
      ]
     }
    });
})();
