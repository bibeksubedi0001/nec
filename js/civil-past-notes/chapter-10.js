(function () {
    "use strict";
    window.CIVIL_PAST_NOTE_TOPICS = window.CIVIL_PAST_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_PAST_NOTE_TOPICS, {
     "AALL1001": {
      "code": "AALL1001",
      "questionCount": 16,
      "format": 2,
      "summary": "<p>This subchapter covers the basics of engineering drawing. The past-paper questions test A-series sheets, their area and proportions, centre lines, the size, slope and aspect ratio of lettering, the diameter symbol, set-square angles, freehand circles, the planes and quadrants of orthographic projection, oblique views, the top view of a pyramid, and simple solids.</p>",
      "blocks": [
       {
        "id": "drawing-sheets",
        "title": "Drawing sheets: A-series sizes",
        "html": "<p>Drawing paper follows the ISO A-series, designated by the letter A: A0, A1 and so on down to A4. A0 measures 841 × 1189 mm, an area of 1 m<sup>2</sup>, and each smaller size is made by halving the long side, which halves the area.</p><p>The shape survives halving only if the sides are in the ratio 1 : \\(\\sqrt{2}\\), so the width of every A sheet is \\(1/\\sqrt{2}\\) times its length, for example 210 × 297 mm for A4.</p>",
        "formulas": [
         {
          "label": "A-series proportions and area",
          "tex": "\\dfrac{w}{l} = \\dfrac{1}{\\sqrt{2}}, \\qquad A_n = 2^{-n}\\ \\text{m}^2"
         }
        ],
        "points": [
         {
          "html": "Drawing paper is designated by the letter A, as in A0 to A4.",
          "sources": [
           {
            "id": "PAST-12-044",
            "label": "Set 12 · Q44"
           }
          ]
         },
         {
          "html": "The area of A0 paper is 1 m<sup>2</sup>.",
          "sources": [
           {
            "id": "PAST-14-029",
            "label": "Set 14 · Q29"
           }
          ]
         },
         {
          "html": "An A-series sheet has a width of \\(1/\\sqrt{2}\\) times the length of the paper.",
          "sources": [
           {
            "id": "PAST-16-051",
            "label": "Set 16 · Q51"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-12-044",
          "label": "Set 12 · Q44"
         },
         {
          "id": "PAST-14-029",
          "label": "Set 14 · Q29"
         },
         {
          "id": "PAST-16-051",
          "label": "Set 16 · Q51"
         }
        ]
       },
       {
        "id": "lines-lettering-and-symbols",
        "title": "Lines, lettering and dimensioning symbols",
        "html": "<p>Each line type has a meaning. Visible edges are continuous thick lines, hidden edges short dashed lines and break lines thin wavy lines; centre lines and lines of symmetry are thin chain lines of alternate long dashes and dots.</p><p>The size of a letter means its height, for example 3.5, 5 or 7 mm, and its aspect ratio is its height to width. Inclined lettering slopes at 75° to the horizontal, 15° from the vertical. In dimensioning a diameter is shown by the symbol Ø before the value and a radius by R.</p>",
        "points": [
         {
          "html": "A centre line is drawn as a thin chain line (long dash and dot).",
          "sources": [
           {
            "id": "PAST-06-004",
            "label": "Set 6 · Q4"
           }
          ]
         },
         {
          "html": "The size of a letter means its height.",
          "sources": [
           {
            "id": "PAST-08-055",
            "label": "Set 8 · Q55"
           }
          ]
         },
         {
          "html": "Inclined lettering is drawn with a 75-degree slope to the horizontal.",
          "sources": [
           {
            "id": "PAST-09-037",
            "label": "Set 9 · Q37"
           }
          ]
         },
         {
          "html": "The aspect ratio of a letter is its height to width.",
          "sources": [
           {
            "id": "PAST-10-001",
            "label": "Set 10 · Q1"
           }
          ]
         },
         {
          "html": "A diameter is shown in dimensioning by the symbol Ø before the value.",
          "sources": [
           {
            "id": "PAST-15-080",
            "label": "Set 15 · Q80"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-004",
          "label": "Set 6 · Q4"
         },
         {
          "id": "PAST-08-055",
          "label": "Set 8 · Q55"
         },
         {
          "id": "PAST-09-037",
          "label": "Set 9 · Q37"
         },
         {
          "id": "PAST-10-001",
          "label": "Set 10 · Q1"
         },
         {
          "id": "PAST-15-080",
          "label": "Set 15 · Q80"
         }
        ]
       },
       {
        "id": "instruments-and-sketching",
        "title": "Set squares and freehand sketching",
        "html": "<p>The 45° set square and the 30°–60° set square, used alone or together, give only multiples of 15°: 15°, 30°, 45°, 60°, 75°, 90° and so on. Any other angle, such as 20°, needs a protractor or an adjustable set square.</p><p>A circle is sketched freehand by fixing its centre and radial lines, marking points at the radius on them, and joining the points with short arcs.</p>",
        "points": [
         {
          "html": "A 20-degree angle cannot be drawn with the standard set squares.",
          "sources": [
           {
            "id": "PAST-13-010",
            "label": "Set 13 · Q10"
           }
          ]
         },
         {
          "html": "A circle is sketched freehand by fixing a fixed point and arc: centre, radius marks, then short arcs.",
          "sources": [
           {
            "id": "PAST-07-023",
            "label": "Set 7 · Q23"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-13-010",
          "label": "Set 13 · Q10"
         },
         {
          "id": "PAST-07-023",
          "label": "Set 7 · Q23"
         }
        ]
       },
       {
        "id": "projections",
        "title": "Orthographic, oblique and pictorial views",
        "html": "<p>In orthographic projection the front view falls on the vertical plane (VP), the top view or plan on the horizontal plane (HP) and the side view on the profile plane (PP). A point above the HP and in front of the VP lies in the first quadrant, the basis of first-angle projection.</p><p>Pictorial views show three faces at once. In an <em>oblique</em> drawing the front face is parallel to the picture plane, so it appears in true shape, with receding lines at an angle. Viewed from above along its axis, a hexagonal pyramid standing on its base shows a true hexagon with lines from its centre, the apex, to each corner.</p>",
        "points": [
         {
          "html": "The top view of an orthographic drawing lies on the HP.",
          "sources": [
           {
            "id": "PAST-08-061",
            "label": "Set 8 · Q61"
           }
          ]
         },
         {
          "html": "A point above the HP and in front of the VP is in the first quadrant.",
          "sources": [
           {
            "id": "PAST-14-039",
            "label": "Set 14 · Q39"
           }
          ]
         },
         {
          "html": "An oblique sketch shows the front in true shape.",
          "sources": [
           {
            "id": "PAST-09-069",
            "label": "Set 9 · Q69"
           }
          ]
         },
         {
          "html": "The plan of an upright hexagonal pyramid is a regular hexagon with lines joining its centre to every corner.",
          "sources": [
           {
            "id": "PAST-15-078",
            "label": "Set 15 · Q78"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-08-061",
          "label": "Set 8 · Q61"
         },
         {
          "id": "PAST-14-039",
          "label": "Set 14 · Q39"
         },
         {
          "id": "PAST-09-069",
          "label": "Set 9 · Q69"
         },
         {
          "id": "PAST-15-078",
          "label": "Set 15 · Q78"
         }
        ]
       },
       {
        "id": "solids",
        "title": "Simple solids",
        "html": "<p>A <em>prism</em> has two equal, parallel end faces joined by rectangular sides, so every section parallel to its base is the same shape; a triangular prism is made up of uniform triangles. A <em>pyramid</em> has a polygonal base whose triangular faces converge to an apex on its axis, so its sections shrink towards the apex; with an equilateral triangle as base it is a triangular pyramid. A cone is the pyramid's circular counterpart.</p>",
        "points": [
         {
          "html": "A solid on a triangular base whose faces meet at an apex on the axis is a pyramid.",
          "sources": [
           {
            "id": "PAST-05-016",
            "label": "Set 5 · Q16"
           }
          ]
         },
         {
          "html": "A triangular prism is made up of uniform triangles, the same at every section.",
          "sources": [
           {
            "id": "PAST-07-010",
            "label": "Set 7 · Q10"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-016",
          "label": "Set 5 · Q16"
         },
         {
          "id": "PAST-07-010",
          "label": "Set 7 · Q10"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "A-series side ratio",
        "tex": "\\dfrac{w}{l} = \\dfrac{1}{\\sqrt{2}}"
       },
       {
        "label": "Area of sheet An",
        "tex": "A_n = 2^{-n}\\ \\text{m}^2"
       }
      ],
      "cautions": [
       {
        "id": "centre-line-figure-reworded",
        "status": "review",
        "prompt": "The paper's figure is not reproduced, so the question is reworded",
        "html": "<p>The paper shows the line types as sketches. A centre line is a thin chain line of alternate long dashes and dots; visible edges are continuous thick lines and hidden edges dashed.</p>",
        "sources": [
         {
          "id": "PAST-06-004",
          "label": "Set 6 · Q4"
         }
        ]
       },
       {
        "id": "pyramid-top-view-reworded",
        "status": "review",
        "prompt": "The paper gives the options as sketches; the question is reworded",
        "html": "<p>Seen along its vertical axis, a hexagonal pyramid on its base shows its base as a true hexagon, with the slant edges running from the apex at the centre to each corner.</p>",
        "sources": [
         {
          "id": "PAST-15-078",
          "label": "Set 15 · Q78"
         }
        ]
       }
      ],
      "gaps": [
       "Scales, isometric projection in detail and sectional drawing from the syllabus are only touched on in these papers."
      ]
     },
     "AALL1002": {
      "code": "AALL1002",
      "questionCount": 27,
      "format": 2,
      "summary": "<p>This subchapter covers engineering economics. The past-paper questions test the time value of money, compounding and compound interest, nominal, effective and continuous rates, cash-flow diagrams, gradients and sinking funds, IRR, B/C ratio and incremental analysis, risk and capital budgeting, shares and the acid-test ratio, and salvage, book, market and distress values.</p>",
      "blocks": [
       {
        "id": "time-value-and-interest",
        "title": "Time value of money and interest rates",
        "html": "<p>Money now is worth more than the same amount later because it can earn interest; the <em>time value of money</em> is the relation between money and time. <em>Compounding</em> finds the future sum of a present investment, and discounting brings future sums back to the present. When the rate changes from year to year, the growth factors are multiplied.</p><p>A nominal rate compounded several times a year gives a higher effective annual rate. With continuous compounding the growth over a period is the exponential of the nominal rate for that period.</p>",
        "formulas": [
         {
          "label": "Future value",
          "tex": "F = P(1 + i)^n"
         },
         {
          "label": "Effective annual rate",
          "tex": "r = \\left(1 + \\dfrac{i}{n}\\right)^n - 1"
         }
        ],
        "example": {
         "title": "Worked examples: compound interest and effective rates",
         "html": "<p>Rs 10,000 at 4%, 5% and 6%:</p>\\[\\begin{aligned} &amp;10\\,000 \\times 1.04 \\times 1.05 \\times 1.06 \\\\ &amp;\\quad = 11\\,575.20 \\end{aligned}\\]<p>So the interest is Rs 1575.20.</p><p>10% nominal, quarterly: \\(1.025^4 - 1 \\approx 10.38\\%\\). Continuous, per month: \\(e^{0.10/12} - 1 \\approx 0.84\\%\\).</p>"
        },
        "points": [
         {
          "html": "The time value of money is the relation between money and time.",
          "sources": [
           {
            "id": "PAST-08-057",
            "label": "Set 8 · Q57"
           }
          ]
         },
         {
          "html": "Finding the future sum of a present investment is compounding.",
          "sources": [
           {
            "id": "PAST-13-027",
            "label": "Set 13 · Q27"
           }
          ]
         },
         {
          "html": "Rs 10,000 at 4%, 5% and 6% in successive years earns compound interest of Rs 1575.20.",
          "sources": [
           {
            "id": "PAST-05-063",
            "label": "Set 5 · Q63"
           }
          ]
         },
         {
          "html": "The effective interest rate is \\(r = (1 + i/n)^n - 1\\).",
          "sources": [
           {
            "id": "PAST-13-017",
            "label": "Set 13 · Q17"
           }
          ]
         },
         {
          "html": "10% nominal with quarterly compounding is an effective 10.38% per annum.",
          "sources": [
           {
            "id": "PAST-14-072",
            "label": "Set 14 · Q72"
           }
          ]
         },
         {
          "html": "10% nominal with continuous compounding gives a monthly rate of 0.84%.",
          "sources": [
           {
            "id": "PAST-17-071",
            "label": "Set 17 · Q71"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-08-057",
          "label": "Set 8 · Q57"
         },
         {
          "id": "PAST-13-027",
          "label": "Set 13 · Q27"
         },
         {
          "id": "PAST-05-063",
          "label": "Set 5 · Q63"
         },
         {
          "id": "PAST-13-017",
          "label": "Set 13 · Q17"
         },
         {
          "id": "PAST-14-072",
          "label": "Set 14 · Q72"
         },
         {
          "id": "PAST-17-071",
          "label": "Set 17 · Q71"
         }
        ]
       },
       {
        "id": "cash-flows-and-sinking-funds",
        "title": "Cash-flow diagrams, gradients and sinking funds",
        "html": "<p>A cash-flow diagram shows receipts, inflows or income as upward arrows and disbursements, outflows or expenses as downward arrows, each at its own date. A cost that starts at a and rises by b every year is a uniform gradient: in year n it is a + (n − 1)b.</p><p>A <em>sinking fund</em> is built up by regular deposits, with interest, to rebuild or replace a structure when its economic life is over. The sinking fund factor converts the future sum needed into equal year-end deposits.</p>",
        "formulas": [
         {
          "label": "Gradient cost in year n",
          "tex": "C_n = a + (n - 1)b"
         },
         {
          "label": "Sinking fund factor",
          "tex": "\\dfrac{A}{F} = \\dfrac{i}{(1 + i)^n - 1}"
         }
        ],
        "points": [
         {
          "html": "All of the above describe a cash-flow diagram: upward arrows are positive flows, inflows and income, downward the reverse.",
          "sources": [
           {
            "id": "PAST-17-028",
            "label": "Set 17 · Q28"
           }
          ]
         },
         {
          "html": "A base cost a rising by b each year reaches a+(n-1)b in year n.",
          "sources": [
           {
            "id": "PAST-04-054",
            "label": "Set 4 · Q54"
           }
          ]
         },
         {
          "html": "Maintenance starting at a and growing by b a year costs a + (n − 1) b in the n-th year.",
          "sources": [
           {
            "id": "PAST-07-072",
            "label": "Set 7 · Q72"
           }
          ]
         },
         {
          "html": "The sinking fund factor is \\(i/[(1 + i)^n - 1]\\).",
          "sources": [
           {
            "id": "PAST-12-045",
            "label": "Set 12 · Q45"
           }
          ]
         },
         {
          "html": "A sinking fund is the fund for rebuilding a structure when its economic life is over.",
          "sources": [
           {
            "id": "PAST-09-022",
            "label": "Set 9 · Q22"
           },
           {
            "id": "PAST-11-030",
            "label": "Set 11 · Q30"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-17-028",
          "label": "Set 17 · Q28"
         },
         {
          "id": "PAST-04-054",
          "label": "Set 4 · Q54"
         },
         {
          "id": "PAST-07-072",
          "label": "Set 7 · Q72"
         },
         {
          "id": "PAST-12-045",
          "label": "Set 12 · Q45"
         },
         {
          "id": "PAST-09-022",
          "label": "Set 9 · Q22"
         },
         {
          "id": "PAST-11-030",
          "label": "Set 11 · Q30"
         }
        ]
       },
       {
        "id": "project-appraisal",
        "title": "IRR, B/C ratio, incremental analysis and risk",
        "html": "<p>The <em>internal rate of return</em> is the discount rate at which the net present value is zero. It accounts for the time value of money and gives one percentage to compare with the cost of capital, so it is the method most business firms use. A project is acceptable when its benefit–cost ratio is at least one.</p><p>In <em>incremental analysis</em> the project with the lower, minimum investment is the base alternative, and each costlier one is justified only if its increment earns the MARR. Capital budgeting is irreversible, committing large funds to long-lived assets. <em>Risk</em> is the variability of the rate of return.</p>",
        "formulas": [
         {
          "label": "IRR and acceptance",
          "tex": "NPV(i^*) = 0, \\qquad \\dfrac{B}{C} \\ge 1"
         }
        ],
        "points": [
         {
          "html": "IRR is the rate found when NPV is equal to zero.",
          "sources": [
           {
            "id": "PAST-04-075",
            "label": "Set 4 · Q75"
           }
          ]
         },
         {
          "html": "Business enterprises mostly adopt the IRR method.",
          "sources": [
           {
            "id": "PAST-06-051",
            "label": "Set 6 · Q51"
           }
          ]
         },
         {
          "html": "The minimum benefit cost ratio for accepting a project is one.",
          "sources": [
           {
            "id": "PAST-11-019",
            "label": "Set 11 · Q19"
           }
          ]
         },
         {
          "html": "Incremental analysis starts from the minimum initial investment.",
          "sources": [
           {
            "id": "PAST-04-015",
            "label": "Set 4 · Q15"
           }
          ]
         },
         {
          "html": "The base alternative in incremental analysis is the project having lower investment.",
          "sources": [
           {
            "id": "PAST-05-023",
            "label": "Set 5 · Q23"
           }
          ]
         },
         {
          "html": "Capital budgeting is irreversible without heavy loss.",
          "sources": [
           {
            "id": "PAST-10-015",
            "label": "Set 10 · Q15"
           }
          ]
         },
         {
          "html": "Variability in the rate of return is known as risk.",
          "sources": [
           {
            "id": "PAST-09-024",
            "label": "Set 9 · Q24"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-075",
          "label": "Set 4 · Q75"
         },
         {
          "id": "PAST-06-051",
          "label": "Set 6 · Q51"
         },
         {
          "id": "PAST-11-019",
          "label": "Set 11 · Q19"
         },
         {
          "id": "PAST-04-015",
          "label": "Set 4 · Q15"
         },
         {
          "id": "PAST-05-023",
          "label": "Set 5 · Q23"
         },
         {
          "id": "PAST-10-015",
          "label": "Set 10 · Q15"
         },
         {
          "id": "PAST-09-024",
          "label": "Set 9 · Q24"
         }
        ]
       },
       {
        "id": "shares-and-ratios",
        "title": "Shares and financial ratios",
        "html": "<p>When a company is wound up, debenture holders, who are creditors, are paid first and preference shareholders next; ordinary, primary or equity, shareholders are paid last, so their investment is the riskiest.</p><p>Liquidity is judged by ratios. The <em>acid test</em> or quick ratio divides quick assets, current assets less stock and prepaid items, by current liabilities; about 1 : 1 is considered satisfactory.</p>",
        "formulas": [
         {
          "label": "Acid test ratio",
          "tex": "\\text{acid test} = \\dfrac{\\text{quick assets}}{\\text{current liabilities}}"
         }
        ],
        "points": [
         {
          "html": "Primary (ordinary) shares are the unsafe shares, paid last in liquidation.",
          "sources": [
           {
            "id": "PAST-04-016",
            "label": "Set 4 · Q16"
           }
          ]
         },
         {
          "html": "Quick assets divided by current liabilities is the acid test ratio.",
          "sources": [
           {
            "id": "PAST-05-060",
            "label": "Set 5 · Q60"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-016",
          "label": "Set 4 · Q16"
         },
         {
          "id": "PAST-05-060",
          "label": "Set 5 · Q60"
         }
        ]
       },
       {
        "id": "valuation-and-depreciation",
        "title": "Values of property and depreciation",
        "html": "<p>A property can have several values. Its <em>book value</em> is the original cost less the depreciation charged so far; with straight-line depreciation the same amount is charged each year. <em>Salvage value</em> is its estimated value at the end of its useful life without being dismantled, and scrap value the value of its dismantled materials.</p><p><em>Market value</em> is the price it would fetch when offered on the open market. <em>Distress value</em> is the lower price obtained when the owner is forced to sell urgently, below the market value.</p>",
        "formulas": [
         {
          "label": "Book value, straight line",
          "tex": "BV_n = P - nD"
         }
        ],
        "example": {
         "title": "Worked example: book value",
         "html": "<p>A Rs 10,000 machine depreciating Rs 1600 a year loses \\(5 \\times 1600 = 8000\\) in 5 years, leaving a book value of Rs 2000.</p>"
        },
        "points": [
         {
          "html": "Salvage value is the estimated value of a built-up property at the end of its useful life without being dismantled.",
          "sources": [
           {
            "id": "PAST-06-053",
            "label": "Set 6 · Q53"
           }
          ]
         },
         {
          "html": "A Rs 10000 machine depreciating Rs 1600 a year has a book value of Rs 2000 after 5 years.",
          "sources": [
           {
            "id": "PAST-07-063",
            "label": "Set 7 · Q63"
           },
           {
            "id": "PAST-18-063",
            "label": "Set 18 · Q63"
           }
          ]
         },
         {
          "html": "The value a property fetches on the open market is its market value.",
          "sources": [
           {
            "id": "PAST-18-029",
            "label": "Set 18 · Q29"
           }
          ]
         },
         {
          "html": "Selling below the market value gives the distress value.",
          "sources": [
           {
            "id": "PAST-18-030",
            "label": "Set 18 · Q30"
           }
          ]
         },
         {
          "html": "A forced, urgent sale at a depressed price realises the distress value.",
          "sources": [
           {
            "id": "PAST-R2083-013",
            "label": "2083 recall · Q13"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-053",
          "label": "Set 6 · Q53"
         },
         {
          "id": "PAST-07-063",
          "label": "Set 7 · Q63"
         },
         {
          "id": "PAST-18-063",
          "label": "Set 18 · Q63"
         },
         {
          "id": "PAST-18-029",
          "label": "Set 18 · Q29"
         },
         {
          "id": "PAST-18-030",
          "label": "Set 18 · Q30"
         },
         {
          "id": "PAST-R2083-013",
          "label": "2083 recall · Q13"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Future value",
        "tex": "F = P(1 + i)^n"
       },
       {
        "label": "Effective rate",
        "tex": "r = \\left(1 + \\dfrac{i}{n}\\right)^n - 1"
       },
       {
        "label": "Sinking fund factor",
        "tex": "\\dfrac{A}{F} = \\dfrac{i}{(1 + i)^n - 1}"
       },
       {
        "label": "Gradient cost",
        "tex": "C_n = a + (n - 1)b"
       },
       {
        "label": "Book value",
        "tex": "BV_n = P - nD"
       }
      ],
      "cautions": [
       {
        "id": "cash-flow-diagram-options",
        "status": "review",
        "prompt": "The options all describe the same convention",
        "html": "<p>Upward arrows on a cash-flow diagram are receipts, inflows, income or positive flows; downward arrows are disbursements, outflows or expenses. The three options describe one convention, so all of them are right.</p>",
        "sources": [
         {
          "id": "PAST-17-028",
          "label": "Set 17 · Q28"
         }
        ]
       }
      ],
      "gaps": [
       "Discounted payback, MARR selection and taxation in Nepal from the syllabus are not examined in these papers."
      ]
     },
     "AALL1003": {
      "code": "AALL1003",
      "questionCount": 29,
      "format": 2,
      "summary": "<p>This subchapter covers project planning and scheduling. The past-paper questions test the first stage of formulation, where risk and appraisal fit and where money is spent, progressive elaboration, bar and milestone charts, critical ratio scheduling, network rules and dummies, forward and backward passes, the critical path, total, free and interfering floats, PERT estimates, and resource levelling and smoothing.</p>",
      "blocks": [
       {
        "id": "project-life-cycle",
        "title": "Project formulation and the life cycle",
        "html": "<p>A project starts with setting objectives; planning, implementation, control and evaluation follow. Risks and uncertainties are analysed in detail at the feasibility study, before the decision to invest. A financial institution relies on project appraisal, a comprehensive check of technical, financial, economic, market and managerial viability, to manage its risk.</p><p>Most of the money and manpower is spent in the execution phase, when the actual construction takes place. Plans are not fixed at the start: <em>progressive elaboration</em> refines them continually as more information becomes available.</p>",
        "points": [
         {
          "html": "The first stage in project formulation is setting objectives.",
          "sources": [
           {
            "id": "PAST-06-052",
            "label": "Set 6 · Q52"
           }
          ]
         },
         {
          "html": "Detailed risk analysis is done in the feasibility study.",
          "sources": [
           {
            "id": "PAST-07-012",
            "label": "Set 7 · Q12"
           }
          ]
         },
         {
          "html": "For a financial institution, appraisal is the key study for managing a project's risk.",
          "sources": [
           {
            "id": "PAST-07-024",
            "label": "Set 7 · Q24"
           }
          ]
         },
         {
          "html": "Most money and manpower are needed in the execution phase.",
          "sources": [
           {
            "id": "PAST-09-008",
            "label": "Set 9 · Q8"
           }
          ]
         },
         {
          "html": "Continuous betterment of planning and detailing with time is progressive elaboration.",
          "sources": [
           {
            "id": "PAST-15-057",
            "label": "Set 15 · Q57"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-052",
          "label": "Set 6 · Q52"
         },
         {
          "id": "PAST-07-012",
          "label": "Set 7 · Q12"
         },
         {
          "id": "PAST-07-024",
          "label": "Set 7 · Q24"
         },
         {
          "id": "PAST-09-008",
          "label": "Set 9 · Q8"
         },
         {
          "id": "PAST-15-057",
          "label": "Set 15 · Q57"
         }
        ]
       },
       {
        "id": "bar-and-milestone-charts",
        "title": "Bar charts, milestone charts and job priorities",
        "html": "<p>The bar chart, developed by Henry Gantt around 1917, was the first method of project planning; milestone charts, and later CPM and PERT in 1957 to 1958, followed. A bar chart shows when each job runs but not how the jobs depend on one another.</p><p>A milestone chart only marks key events on the bars, so it still cannot show interdependencies, delays or jobs running ahead of schedule. Priorities among jobs can be set and kept up to date by <em>critical ratio scheduling</em>, which ranks jobs by the ratio of time remaining to work remaining.</p>",
        "points": [
         {
          "html": "The bar chart was the first project planning method to be invented.",
          "sources": [
           {
            "id": "PAST-05-019",
            "label": "Set 5 · Q19"
           }
          ]
         },
         {
          "html": "None of these statements applies to a milestone chart: it cannot show dependencies, delays or early jobs.",
          "sources": [
           {
            "id": "PAST-07-043",
            "label": "Set 7 · Q43"
           }
          ]
         },
         {
          "html": "Critical ratio scheduling establishes and maintains priorities among the jobs of a project.",
          "sources": [
           {
            "id": "PAST-07-044",
            "label": "Set 7 · Q44"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-019",
          "label": "Set 5 · Q19"
         },
         {
          "id": "PAST-07-043",
          "label": "Set 7 · Q43"
         },
         {
          "id": "PAST-07-044",
          "label": "Set 7 · Q44"
         }
        ]
       },
       {
        "id": "network-rules",
        "title": "Activities, events and dummies in a network",
        "html": "<p>In an activity-on-arrow network each arrow is an activity, the time-consuming part of a project, and each node is an event, an instant with no duration marking the start or end of jobs. The tail of an arrow is the start of its activity and the head its end, but arrows are not drawn to any time scale.</p><p>A <em>dummy</em> is a zero-duration activity that consumes no time or resources. It has head and tail events like any activity, and is used only to show a dependency or give parallel activities unique event numbers. The earliest start of an activity is the early time of the node it leaves, and its latest finish the late time of the node it enters.</p>",
        "points": [
         {
          "html": "A dummy does not consume resources or time.",
          "sources": [
           {
            "id": "PAST-08-002",
            "label": "Set 8 · Q2"
           }
          ]
         },
         {
          "html": "The incorrect statement is that arrows are drawn from left to right to scale; they are not scaled.",
          "sources": [
           {
            "id": "PAST-10-079",
            "label": "Set 10 · Q79"
           }
          ]
         },
         {
          "html": "It is incorrect that the activity which consumes maximum time is called a node; a node is an event.",
          "sources": [
           {
            "id": "PAST-11-059",
            "label": "Set 11 · Q59"
           }
          ]
         },
         {
          "html": "None of the three definitions of earliest start, latest finish and latest start is incorrect.",
          "sources": [
           {
            "id": "PAST-11-057",
            "label": "Set 11 · Q57"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-08-002",
          "label": "Set 8 · Q2"
         },
         {
          "id": "PAST-10-079",
          "label": "Set 10 · Q79"
         },
         {
          "id": "PAST-11-059",
          "label": "Set 11 · Q59"
         },
         {
          "id": "PAST-11-057",
          "label": "Set 11 · Q57"
         }
        ]
       },
       {
        "id": "cpm-passes-and-critical-path",
        "title": "Forward and backward passes and the critical path",
        "html": "<p>The forward pass finds the earliest times: an activity's earliest finish is its earliest start plus its duration, and an activity with several predecessors starts at the maximum of their earliest finishes. The backward pass finds the latest times: an event with several following activities takes the minimum of their latest starts.</p><p>The <em>critical path</em> is always the longest path through the network; its length is the project duration, and its activities have zero float.</p>",
        "formulas": [
         {
          "label": "Forward and backward passes",
          "tex": "EF = ES + t, \\qquad LS = LF - t"
         }
        ],
        "example": {
         "title": "Worked examples: passes",
         "html": "<p>Predecessors finishing at 12, 15 and 10: \\(ES(Y) = \\max(12, 15, 10) = 15\\).</p><p>Successors starting at 12, 19 and 10: M's latest finish is \\(\\min(12, 19, 10) = 10\\).</p>"
        },
        "points": [
         {
          "html": "In the forward pass EF = ES + Duration.",
          "sources": [
           {
            "id": "PAST-16-069",
            "label": "Set 16 · Q69"
           }
          ]
         },
         {
          "html": "The minimum value is taken in the backward pass.",
          "sources": [
           {
            "id": "PAST-06-069",
            "label": "Set 6 · Q69"
           }
          ]
         },
         {
          "html": "If P, Q and R follow M and can start at 12, 19 and 10, M's latest finish is 10.",
          "sources": [
           {
            "id": "PAST-13-069",
            "label": "Set 13 · Q69"
           }
          ]
         },
         {
          "html": "Predecessors A, B and C finishing at 12, 15 and 10 give Y an earliest start of 15.",
          "sources": [
           {
            "id": "PAST-14-069",
            "label": "Set 14 · Q69"
           }
          ]
         },
         {
          "html": "The critical path is always the longest path through the network.",
          "sources": [
           {
            "id": "PAST-18-004",
            "label": "Set 18 · Q4"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-16-069",
          "label": "Set 16 · Q69"
         },
         {
          "id": "PAST-06-069",
          "label": "Set 6 · Q69"
         },
         {
          "id": "PAST-13-069",
          "label": "Set 13 · Q69"
         },
         {
          "id": "PAST-14-069",
          "label": "Set 14 · Q69"
         },
         {
          "id": "PAST-18-004",
          "label": "Set 18 · Q4"
         }
        ]
       },
       {
        "id": "floats",
        "title": "Total, free and interfering float",
        "html": "<p><em>Total float</em> is the maximum time available for an activity minus its duration: how far it can slip without delaying the project. <em>Free float</em> is the delay possible without delaying the early start of any following activity. The difference between them is the <em>interfering float</em>, which, if used, delays the successors.</p>",
        "formulas": [
         {
          "label": "Total float",
          "tex": "TF = LS - ES"
         },
         {
          "label": "Interfering float",
          "tex": "IF = TF - FF"
         }
        ],
        "points": [
         {
          "html": "The maximum time available for an activity minus the time it needs is its total float.",
          "sources": [
           {
            "id": "PAST-04-067",
            "label": "Set 4 · Q67"
           }
          ]
         },
         {
          "html": "Free float is the amount of time a task can be delayed without impacting other tasks in the path.",
          "sources": [
           {
            "id": "PAST-12-046",
            "label": "Set 12 · Q46"
           }
          ]
         },
         {
          "html": "With EST = 5, LST = 7 and a duration of 1, the total float is 2.",
          "sources": [
           {
            "id": "PAST-12-066",
            "label": "Set 12 · Q66"
           }
          ]
         },
         {
          "html": "Interfering float = Total float − Free float.",
          "sources": [
           {
            "id": "PAST-17-027",
            "label": "Set 17 · Q27"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-067",
          "label": "Set 4 · Q67"
         },
         {
          "id": "PAST-12-046",
          "label": "Set 12 · Q46"
         },
         {
          "id": "PAST-12-066",
          "label": "Set 12 · Q66"
         },
         {
          "id": "PAST-17-027",
          "label": "Set 17 · Q27"
         }
        ]
       },
       {
        "id": "pert",
        "title": "PERT: three time estimates",
        "html": "<p>PERT is probabilistic: each activity has an optimistic, a most likely and a pessimistic time, assumed to follow a beta distribution curve. The expected time weights the most likely time four times, and the standard deviation is a sixth of the range. CPM, by contrast, is deterministic, with a single time estimate; the two were developed independently.</p>",
        "formulas": [
         {
          "label": "Expected time and standard deviation",
          "tex": "t_e = \\dfrac{t_o + 4t_m + t_p}{6}, \\qquad \\sigma = \\dfrac{t_p - t_o}{6}"
         }
        ],
        "example": {
         "title": "Worked examples: PERT estimates",
         "html": "<p>\\(t_o = 2\\), \\(t_m = 3\\), \\(t_p = 10\\) days: \\(t_e = (2 + 12 + 10)/6 = 4\\) days.</p><p>\\(t_o = 15\\) and \\(t_p = 30\\) days: \\(\\sigma = 15/6 = 2.5\\) days.</p>"
        },
        "points": [
         {
          "html": "PERT time estimates follow the beta distribution curve.",
          "sources": [
           {
            "id": "PAST-10-027",
            "label": "Set 10 · Q27"
           }
          ]
         },
         {
          "html": "The PERT expected time is \\(T_e = (T_o + T_p + 4T_m)/6\\).",
          "sources": [
           {
            "id": "PAST-11-080",
            "label": "Set 11 · Q80"
           }
          ]
         },
         {
          "html": "Optimistic 15 days and pessimistic 30 days give a standard deviation of 2.5.",
          "sources": [
           {
            "id": "PAST-14-068",
            "label": "Set 14 · Q68"
           }
          ]
         },
         {
          "html": "Pessimistic 10, optimistic 2 and most likely 3 days give an expected time of 4 days.",
          "sources": [
           {
            "id": "PAST-18-070",
            "label": "Set 18 · Q70"
           }
          ]
         },
         {
          "html": "The wrong statement is that CPM is probabilistic in nature; it is deterministic.",
          "sources": [
           {
            "id": "PAST-16-022",
            "label": "Set 16 · Q22"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-10-027",
          "label": "Set 10 · Q27"
         },
         {
          "id": "PAST-11-080",
          "label": "Set 11 · Q80"
         },
         {
          "id": "PAST-14-068",
          "label": "Set 14 · Q68"
         },
         {
          "id": "PAST-18-070",
          "label": "Set 18 · Q70"
         },
         {
          "id": "PAST-16-022",
          "label": "Set 16 · Q22"
         }
        ]
       },
       {
        "id": "resource-levelling-and-smoothing",
        "title": "Resource levelling and smoothing",
        "html": "<p>When resources are limited, activities are rescheduled. In <em>resource levelling</em> the resources available are the constraint, and the project duration may have to extend. In <em>resource smoothing</em> time is the constraint: non-critical activities are shifted within their floats to even out the peaks of demand without affecting the project duration.</p>",
        "points": [
         {
          "html": "In resource levelling the constraint is the resources available.",
          "sources": [
           {
            "id": "PAST-04-014",
            "label": "Set 4 · Q14"
           }
          ]
         },
         {
          "html": "Resource smoothing is an adjustment of resources without affecting project duration.",
          "sources": [
           {
            "id": "PAST-09-039",
            "label": "Set 9 · Q39"
           },
           {
            "id": "PAST-11-079",
            "label": "Set 11 · Q79"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-014",
          "label": "Set 4 · Q14"
         },
         {
          "id": "PAST-09-039",
          "label": "Set 9 · Q39"
         },
         {
          "id": "PAST-11-079",
          "label": "Set 11 · Q79"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Earliest finish",
        "tex": "EF = ES + t"
       },
       {
        "label": "Latest start",
        "tex": "LS = LF - t"
       },
       {
        "label": "Total float",
        "tex": "TF = LS - ES"
       },
       {
        "label": "Interfering float",
        "tex": "IF = TF - FF"
       },
       {
        "label": "PERT expected time",
        "tex": "t_e = \\dfrac{t_o + 4t_m + t_p}{6}"
       },
       {
        "label": "PERT standard deviation",
        "tex": "\\sigma = \\dfrac{t_p - t_o}{6}"
       }
      ],
      "cautions": [],
      "gaps": [
       "Project classification, monitoring and evaluation and earned-value control from the syllabus are only touched on in these papers."
      ]
     },
     "AALL1004": {
      "code": "AALL1004",
      "questionCount": 17,
      "format": 2,
      "summary": "<p>This subchapter covers managing projects, their risks and their contracts. The past-paper questions test the measures of project performance, SPI and CPI, the definition of risk, mitigation and risk-averse measures, what risk management includes, pre-qualification, sealed quotations, bidding periods and bid validity, consultant selection, sub-contracting, the fast-track contract and specifications.</p>",
      "blocks": [
       {
        "id": "performance-and-earned-value",
        "title": "Project performance and earned value",
        "html": "<p>Project performance is judged on the triple constraint: completion on time, within cost and to the specified quality. Earned value analysis measures progress against the plan at a status date using the planned value, BCWS, the earned value, BCWP, and the actual cost, ACWP.</p><p>The schedule performance index is earned value over planned value, and the cost performance index earned value over actual cost. An index below 1 means behind schedule or over budget respectively.</p>",
        "formulas": [
         {
          "label": "Schedule performance index",
          "tex": "SPI = \\dfrac{BCWP}{BCWS}"
         },
         {
          "label": "Cost performance index",
          "tex": "CPI = \\dfrac{BCWP}{ACWP}"
         }
        ],
        "points": [
         {
          "html": "Project performance consists of all of the above: time, cost and quality.",
          "sources": [
           {
            "id": "PAST-07-013",
            "label": "Set 7 · Q13"
           }
          ]
         },
         {
          "html": "SPI is BCWP/BCWS, that is earned value over planned value.",
          "sources": [
           {
            "id": "PAST-13-007",
            "label": "Set 13 · Q7"
           }
          ]
         },
         {
          "html": "With SPI and CPI both below 1, the project is behind the schedule and over budget.",
          "sources": [
           {
            "id": "PAST-14-040",
            "label": "Set 14 · Q40"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-07-013",
          "label": "Set 7 · Q13"
         },
         {
          "id": "PAST-13-007",
          "label": "Set 13 · Q7"
         },
         {
          "id": "PAST-14-040",
          "label": "Set 14 · Q40"
         }
        ]
       },
       {
        "id": "risk-management",
        "title": "Risk and its management",
        "html": "<p>In project management, <em>risk</em> is an uncertain event that, if it occurs, has a positive or negative effect on project objectives: an opportunity or a threat. Risk assessment identifies and characterises hazards; risk communication exchanges information and opinions; risk management evaluates the policy alternatives and chooses among them.</p><p>Responses include avoidance, transfer, for example by insurance, acceptance and <em>mitigation</em>: strategies that reduce the likelihood or impact of identified risks to a threshold level. A risk-averse person diversifies resources, insures against risk events and values information that reduces uncertainty.</p>",
        "points": [
         {
          "html": "Risk is an uncertain event that, if it occurs, has a positive or negative effect on project objectives.",
          "sources": [
           {
            "id": "PAST-14-041",
            "label": "Set 14 · Q41"
           }
          ]
         },
         {
          "html": "Mitigation is the implementation of strategies to reduce the impact or likelihood of identified risks.",
          "sources": [
           {
            "id": "PAST-09-068",
            "label": "Set 9 · Q68"
           }
          ]
         },
         {
          "html": "Reducing a risk to a threshold level is mitigation.",
          "sources": [
           {
            "id": "PAST-12-047",
            "label": "Set 12 · Q47"
           }
          ]
         },
         {
          "html": "Risk management includes the evaluation of policy alternatives.",
          "sources": [
           {
            "id": "PAST-11-060",
            "label": "Set 11 · Q60"
           }
          ]
         },
         {
          "html": "A risk-averse person uses A, B and D only: diversification, insurance and the value of information.",
          "sources": [
           {
            "id": "PAST-11-010",
            "label": "Set 11 · Q10"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-14-041",
          "label": "Set 14 · Q41"
         },
         {
          "id": "PAST-09-068",
          "label": "Set 9 · Q68"
         },
         {
          "id": "PAST-12-047",
          "label": "Set 12 · Q47"
         },
         {
          "id": "PAST-11-060",
          "label": "Set 11 · Q60"
         },
         {
          "id": "PAST-11-010",
          "label": "Set 11 · Q10"
         }
        ]
       },
       {
        "id": "procurement-and-tendering",
        "title": "Procurement and tendering in Nepal",
        "html": "<p>Before bidding, the implementing agency may screen firms on experience, capacity, equipment and finances; this <em>pre-qualification</em> lets only eligible firms tender, while post-qualification checks the lowest bidder afterwards. Under Nepal's procurement rules at the time, work up to about Rs 2 million could be bought by sealed quotation; larger contracts need tenders.</p><p>National competitive bidding allows at least 30 days for bid submission and international bidding 45 days. Under Rule 54 of the Public Procurement Regulation 2064, bids with a cost estimate up to Rs 10 crore stay valid for 90 days, and larger ones 120 days. Consultants are selected on both quality and cost.</p>",
        "points": [
         {
          "html": "The agency's check of a firm's eligibility to carry out the contract is pre-qualification.",
          "sources": [
           {
            "id": "PAST-08-015",
            "label": "Set 8 · Q15"
           }
          ]
         },
         {
          "html": "Pre-qualification screens a firm's experience, capacity and resources before it may bid.",
          "sources": [
           {
            "id": "PAST-15-059",
            "label": "Set 15 · Q59"
           }
          ]
         },
         {
          "html": "Sealed quotations are used for projects up to 2 million rupees.",
          "sources": [
           {
            "id": "PAST-12-050",
            "label": "Set 12 · Q50"
           }
          ]
         },
         {
          "html": "A national competitive bidding notice gives at least 30 days for bid submission.",
          "sources": [
           {
            "id": "PAST-14-042",
            "label": "Set 14 · Q42"
           }
          ]
         },
         {
          "html": "A bid with a cost estimate of Rs 9 crore needs a validity of 90 days.",
          "sources": [
           {
            "id": "PAST-R2083-009",
            "label": "2083 recall · Q9"
           }
          ]
         },
         {
          "html": "A consultancy is selected on quality and cost together.",
          "sources": [
           {
            "id": "PAST-13-044",
            "label": "Set 13 · Q44"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-08-015",
          "label": "Set 8 · Q15"
         },
         {
          "id": "PAST-15-059",
          "label": "Set 15 · Q59"
         },
         {
          "id": "PAST-12-050",
          "label": "Set 12 · Q50"
         },
         {
          "id": "PAST-14-042",
          "label": "Set 14 · Q42"
         },
         {
          "id": "PAST-R2083-009",
          "label": "2083 recall · Q9"
         },
         {
          "id": "PAST-13-044",
          "label": "Set 13 · Q44"
         }
        ]
       },
       {
        "id": "contracts-and-documents",
        "title": "Contracts and contract documents",
        "html": "<p>When part of the contract work is assigned to another firm it is <em>sub-contracting</em>, and the main contractor stays responsible to the client; a joint venture, by contrast, is a partnership formed to bid for and carry out the whole contract.</p><p>The Kathmandu–Terai fast track was handed to the Nepal Army to build with government funds, the Army handling design, procurement, subcontracting and construction. Among contract documents, the specifications define quality and workmanship, the drawings give dimensions and the bill of quantities gives quantities.</p>",
        "points": [
         {
          "html": "Assigning part of the contract work to another party is sub-contracting.",
          "sources": [
           {
            "id": "PAST-05-073",
            "label": "Set 5 · Q73"
           }
          ]
         },
         {
          "html": "After handover the fast-track contract covered build, design, procurement, subcontracting and all works by the Army.",
          "sources": [
           {
            "id": "PAST-06-073",
            "label": "Set 6 · Q73"
           }
          ]
         },
         {
          "html": "Quality and workmanship are defined in the specifications.",
          "sources": [
           {
            "id": "PAST-15-060",
            "label": "Set 15 · Q60"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-073",
          "label": "Set 5 · Q73"
         },
         {
          "id": "PAST-06-073",
          "label": "Set 6 · Q73"
         },
         {
          "id": "PAST-15-060",
          "label": "Set 15 · Q60"
         }
        ]
       }
      ],
      "formulaSheet": [
       {
        "label": "Schedule performance index",
        "tex": "SPI = \\dfrac{BCWP}{BCWS}"
       },
       {
        "label": "Cost performance index",
        "tex": "CPI = \\dfrac{BCWP}{ACWP}"
       }
      ],
      "cautions": [
       {
        "id": "fast-track-contract-key",
        "status": "corrected",
        "prompt": "The published key calls the arrangement BOT",
        "html": "<p>The Kathmandu–Terai fast track is built by the Nepal Army with government funds, the Army handling design, procurement, subcontracting and construction, an EPC-type arrangement. No private party finances, owns or operates it, so it is not BOT or BOOT.</p>",
        "sources": [
         {
          "id": "PAST-06-073",
          "label": "Set 6 · Q73"
         }
        ]
       }
      ],
      "gaps": [
       "Management information systems and project financing from the syllabus are not examined in these papers."
      ]
     },
     "AALL1005": {
      "code": "AALL1005",
      "questionCount": 7,
      "format": 2,
      "summary": "<p>This subchapter covers the professional side of engineering. The seven past-paper questions test what makes a profession, what the rules of ethics are called, the number of articles in the NEC code of conduct before and after its 2079 BS revision, daily working hours under the Labour Act, and the fines for violating copyright and patient rights.</p>",
      "blocks": [
       {
        "id": "profession-and-ethics",
        "title": "The profession, ethics and the NEC code of conduct",
        "html": "<p>A profession rests on specialised knowledge. Its members are organised into associations, follow published authoritative standards of performance and ethics, and enjoy a high level of public trust. The rules of ethics are sometimes called moral law: principles of right conduct that guide behaviour, though, unlike legal law, the state does not enforce them.</p><p>The Nepal Engineering Council's professional code of conduct had 8 articles; its 2079 BS revision raised the number to 11. The Nepal Engineers' Association supports members professionally, while NEC registers engineers and oversees their conduct.</p>",
        "points": [
         {
          "html": "All of the above are characteristics of a profession: public trust, associations and published standards.",
          "sources": [
           {
            "id": "PAST-04-022",
            "label": "Set 4 · Q22"
           }
          ]
         },
         {
          "html": "The rules of ethics are also called law, in the sense of moral law.",
          "sources": [
           {
            "id": "PAST-11-049",
            "label": "Set 11 · Q49"
           }
          ]
         },
         {
          "html": "At the time of the paper, the NEC code of conduct had 8 articles.",
          "sources": [
           {
            "id": "PAST-10-006",
            "label": "Set 10 · Q6"
           }
          ]
         },
         {
          "html": "NEC's code of conduct, revised in 2079 BS, has 11 articles.",
          "sources": [
           {
            "id": "PAST-11-004",
            "label": "Set 11 · Q4"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-022",
          "label": "Set 4 · Q22"
         },
         {
          "id": "PAST-11-049",
          "label": "Set 11 · Q49"
         },
         {
          "id": "PAST-10-006",
          "label": "Set 10 · Q6"
         },
         {
          "id": "PAST-11-004",
          "label": "Set 11 · Q4"
         }
        ]
       },
       {
        "id": "laws-affecting-practice",
        "title": "Laws on working hours, copyright and patient rights",
        "html": "<p>Engineers work within wider laws. Nepal's Labour Act 2074 limits normal working time to 8 hours a day and 48 hours a week; overtime is paid extra and capped, and a half-hour rest follows five hours of continuous work.</p><p>The Copyright Act 2059 punishes a first offence with a fine of NPR 10,000 to NPR 100,000, up to six months' imprisonment, or both; repeat offences attract heavier penalties. The papers also quote a fine of up to Rs 500000 for violating patient rights, a law-based question outside core engineering.</p>",
        "points": [
         {
          "html": "The Labour Act limits normal work to 8 hours a day.",
          "sources": [
           {
            "id": "PAST-15-058",
            "label": "Set 15 · Q58"
           }
          ]
         },
         {
          "html": "A first copyright violation is fined NPR 10,000 to NPR 100,000, or six months in prison, or both.",
          "sources": [
           {
            "id": "PAST-18-013",
            "label": "Set 18 · Q13"
           }
          ]
         },
         {
          "html": "The source quotes a fine of up to Rs 500000 for violating patient rights.",
          "sources": [
           {
            "id": "PAST-11-026",
            "label": "Set 11 · Q26"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-15-058",
          "label": "Set 15 · Q58"
         },
         {
          "id": "PAST-18-013",
          "label": "Set 18 · Q13"
         },
         {
          "id": "PAST-11-026",
          "label": "Set 11 · Q26"
         }
        ]
       }
      ],
      "cautions": [
       {
        "id": "patient-rights-fine",
        "status": "review",
        "prompt": "This is a law-based question outside core engineering",
        "html": "<p>The figure of Rs 5,00,000 for the main offence, with Rs 2,50,000 for attempt or abetment, is the one the source quotes. Check the current law if the question appears again.</p>",
        "sources": [
         {
          "id": "PAST-11-026",
          "label": "Set 11 · Q26"
         }
        ]
       }
      ],
      "gaps": [
       "Environment and society, the regulatory environment, contemporary engineering issues and occupational health and safety from the syllabus are only touched on in these papers."
      ]
     },
     "AALL1006": {
      "code": "AALL1006",
      "questionCount": 35,
      "format": 2,
      "summary": "<p>This subchapter covers the Nepal Engineering Council and its law. The past-paper questions test when NEC was formed and its regulation issued, its status, purpose and reporting, who appoints its officers and their qualifications, the council's composition, registration categories and numbers, recognition of colleges, fines, and the Nepal Engineers' Association and other bodies.</p>",
      "blocks": [
       {
        "id": "nec-establishment-and-status",
        "title": "Establishment, status and purpose of NEC",
        "html": "<p>The Nepal Engineering Council was constituted under the Nepal Engineering Council Act, 2055 BS, 1998 AD; the Nepal Engineering Council Regulation followed in 2057 BS, and the Act's first amendment came into effect on 2079/05/05. NEC is an autonomous statutory body with perpetual succession.</p><p>Its purpose, stated in the preamble, is to make the engineering profession effective by mobilising it in a more systematic and scientific way, and to register engineers according to their qualifications. The Council frames regulations, which take effect with the approval of the Government of Nepal, and submits its annual report to the Government. Company law, intellectual property rights and building codes are also regulatory instruments.</p>",
        "points": [
         {
          "html": "The Government of Nepal formed the Nepal Engineering Council under the NEC Act of 2055 BS.",
          "sources": [
           {
            "id": "PAST-04-009",
            "label": "Set 4 · Q9"
           }
          ]
         },
         {
          "html": "Nepal Engineering Council is an autonomous body with perpetual succession.",
          "sources": [
           {
            "id": "PAST-16-011",
            "label": "Set 16 · Q11"
           },
           {
            "id": "PAST-17-010",
            "label": "Set 17 · Q10"
           }
          ]
         },
         {
          "html": "The Nepal Engineering Council Regulation started from 2057 BS.",
          "sources": [
           {
            "id": "PAST-17-029",
            "label": "Set 17 · Q29"
           }
          ]
         },
         {
          "html": "The first amendment of the NEC Act took effect on 2079/05/05.",
          "sources": [
           {
            "id": "PAST-17-006",
            "label": "Set 17 · Q6"
           }
          ]
         },
         {
          "html": "NEC's function is to make the engineering profession effective by mobilizing it in a more systematic and scientific way, and to register engineers by their qualifications.",
          "sources": [
           {
            "id": "PAST-14-027",
            "label": "Set 14 · Q27"
           }
          ]
         },
         {
          "html": "NEC submits its annual report to the Government of Nepal.",
          "sources": [
           {
            "id": "PAST-14-044",
            "label": "Set 14 · Q44"
           }
          ]
         },
         {
          "html": "NEC's rules and regulations are approved by the Government of Nepal.",
          "sources": [
           {
            "id": "PAST-16-040",
            "label": "Set 16 · Q40"
           }
          ]
         },
         {
          "html": "All of the above, company law, intellectual property rights and building codes, are regulatory instruments.",
          "sources": [
           {
            "id": "PAST-14-052",
            "label": "Set 14 · Q52"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-04-009",
          "label": "Set 4 · Q9"
         },
         {
          "id": "PAST-16-011",
          "label": "Set 16 · Q11"
         },
         {
          "id": "PAST-17-010",
          "label": "Set 17 · Q10"
         },
         {
          "id": "PAST-17-029",
          "label": "Set 17 · Q29"
         },
         {
          "id": "PAST-17-006",
          "label": "Set 17 · Q6"
         },
         {
          "id": "PAST-14-027",
          "label": "Set 14 · Q27"
         },
         {
          "id": "PAST-14-044",
          "label": "Set 14 · Q44"
         },
         {
          "id": "PAST-16-040",
          "label": "Set 16 · Q40"
         },
         {
          "id": "PAST-14-052",
          "label": "Set 14 · Q52"
         }
        ]
       },
       {
        "id": "nec-officers",
        "title": "Chairperson, vice-chairperson and registrar",
        "html": "<p>The Government of Nepal nominates both the chairperson and the vice-chairperson of the Council. The chairperson must hold at least a bachelor's degree in engineering with 15 years of engineering experience; the vice-chairperson needs a bachelor's degree with 10 years. The key gives the same minimum, a bachelor's degree with 10 years' experience, for the registrar.</p><p>Er. Bindeshwar Yadav was the first registrar of NEC, and Er. Ram Babu Sharma its first chairman.</p>",
        "points": [
         {
          "html": "The chairman of NEC is appointed by the Government of Nepal.",
          "sources": [
           {
            "id": "PAST-12-069",
            "label": "Set 12 · Q69"
           }
          ]
         },
         {
          "html": "The chairman of NEC needs a bachelor degree and engineering experience of 15 years.",
          "sources": [
           {
            "id": "PAST-05-021",
            "label": "Set 5 · Q21"
           }
          ]
         },
         {
          "html": "The vice chairman of NEC is nominated by GoN.",
          "sources": [
           {
            "id": "PAST-09-032",
            "label": "Set 9 · Q32"
           }
          ]
         },
         {
          "html": "The vice chairman must be a B.E. holder with 10 years of experience.",
          "sources": [
           {
            "id": "PAST-17-009",
            "label": "Set 17 · Q9"
           }
          ]
         },
         {
          "html": "The registrar of NEC needs at least a bachelor's degree + 10 years' experience.",
          "sources": [
           {
            "id": "PAST-15-056",
            "label": "Set 15 · Q56"
           }
          ]
         },
         {
          "html": "Bindeshwar Yadav was the first registrar of NEC.",
          "sources": [
           {
            "id": "PAST-08-001",
            "label": "Set 8 · Q1"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-12-069",
          "label": "Set 12 · Q69"
         },
         {
          "id": "PAST-05-021",
          "label": "Set 5 · Q21"
         },
         {
          "id": "PAST-09-032",
          "label": "Set 9 · Q32"
         },
         {
          "id": "PAST-17-009",
          "label": "Set 17 · Q9"
         },
         {
          "id": "PAST-15-056",
          "label": "Set 15 · Q56"
         },
         {
          "id": "PAST-08-001",
          "label": "Set 8 · Q1"
         }
        ]
       },
       {
        "id": "council-composition",
        "title": "Composition of the council",
        "html": "<p>The council brings together members from several routes: officers nominated by the Government, two engineers nominated by the Council itself, five engineers elected by the Nepal Engineers' Association, members from academia, and ex-officio members, among them the President of NEA.</p><p>The source key counts two women members on the council formed in 2079, and notes that the Act intends more. If the council is dissolved, the Government must form a new one within three months.</p>",
        "points": [
         {
          "html": "NEC itself nominates 2 of the council's members.",
          "sources": [
           {
            "id": "PAST-06-066",
            "label": "Set 6 · Q66"
           },
           {
            "id": "PAST-14-014",
            "label": "Set 14 · Q14"
           },
           {
            "id": "PAST-18-075",
            "label": "Set 18 · Q75"
           }
          ]
         },
         {
          "html": "The Nepal Engineers' Association directly elects 5 members to the council.",
          "sources": [
           {
            "id": "PAST-17-025",
            "label": "Set 17 · Q25"
           }
          ]
         },
         {
          "html": "The President of NEA is an ex-officio member of NEC.",
          "sources": [
           {
            "id": "PAST-10-034",
            "label": "Set 10 · Q34"
           }
          ]
         },
         {
          "html": "The key counts 2 female members on the NEC council of 2079.",
          "sources": [
           {
            "id": "PAST-07-002",
            "label": "Set 7 · Q2"
           }
          ]
         },
         {
          "html": "After the council is dissolved, a new one must be formed within 3 months.",
          "sources": [
           {
            "id": "PAST-10-080",
            "label": "Set 10 · Q80"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-06-066",
          "label": "Set 6 · Q66"
         },
         {
          "id": "PAST-14-014",
          "label": "Set 14 · Q14"
         },
         {
          "id": "PAST-18-075",
          "label": "Set 18 · Q75"
         },
         {
          "id": "PAST-17-025",
          "label": "Set 17 · Q25"
         },
         {
          "id": "PAST-10-034",
          "label": "Set 10 · Q34"
         },
         {
          "id": "PAST-07-002",
          "label": "Set 7 · Q2"
         },
         {
          "id": "PAST-10-080",
          "label": "Set 10 · Q80"
         }
        ]
       },
       {
        "id": "registration-of-engineers",
        "title": "Registration of engineers",
        "html": "<p>NEC registers General Engineers in category A, Professional Engineers in category B and Foreign Engineers in category C. A general engineer needs a bachelor's degree in engineering from a recognised institution and a pass in the licensing examination; no experience is required at that level.</p><p>A foreign, non-Nepali citizen engineer working in Nepal, for example under an engineering institution, must also register. NEC's records gave 61 registered professional engineers by 2078/12/31. The amended Act sets a fine of up to Rs 25000 under section 30(c) for violating its rules.</p>",
        "points": [
         {
          "html": "Category A of NEC registration is for the General Engineer.",
          "sources": [
           {
            "id": "PAST-05-020",
            "label": "Set 5 · Q20"
           }
          ]
         },
         {
          "html": "A general engineer needs a bachelor's degree to register with NEC.",
          "sources": [
           {
            "id": "PAST-17-026",
            "label": "Set 17 · Q26"
           }
          ]
         },
         {
          "html": "NEC defines a non-Nepali engineer as a non-Nepali engineer working under engineering institutions in Nepal.",
          "sources": [
           {
            "id": "PAST-08-063",
            "label": "Set 8 · Q63"
           }
          ]
         },
         {
          "html": "61 professional engineers were registered by 2078/12/31.",
          "sources": [
           {
            "id": "PAST-09-059",
            "label": "Set 9 · Q59"
           }
          ]
         },
         {
          "html": "Section 30(c) of the amended NEC Act fines rule violations up to Rs 25000.",
          "sources": [
           {
            "id": "PAST-15-079",
            "label": "Set 15 · Q79"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-05-020",
          "label": "Set 5 · Q20"
         },
         {
          "id": "PAST-17-026",
          "label": "Set 17 · Q26"
         },
         {
          "id": "PAST-08-063",
          "label": "Set 8 · Q63"
         },
         {
          "id": "PAST-09-059",
          "label": "Set 9 · Q59"
         },
         {
          "id": "PAST-15-079",
          "label": "Set 15 · Q79"
         }
        ]
       },
       {
        "id": "recognition-of-institutions",
        "title": "Recognition of engineering institutions",
        "html": "<p>NEC frames policy, recognises engineering colleges and their programmes and sets the basic conditions of student admission, but opening and running colleges is not its job. Per the source key, a college needs at least 70% in NEC's evaluation to be recognised, and permanently recognised institutions are inspected every two years.</p><p>Master's programmes have been recognised since 2076/09/06, and bachelor's programmes since 2066/06/23. Most NEC-recognised engineering colleges are in Bagmati Province, largely in the Kathmandu valley.</p>",
        "points": [
         {
          "html": "Opening the college is not a function of NEC; recognising institutions is.",
          "sources": [
           {
            "id": "PAST-09-009",
            "label": "Set 9 · Q9"
           }
          ]
         },
         {
          "html": "A college needs at least 70% in NEC's evaluation for recognition.",
          "sources": [
           {
            "id": "PAST-09-079",
            "label": "Set 9 · Q79"
           }
          ]
         },
         {
          "html": "Permanently approved institutions are inspected every two years.",
          "sources": [
           {
            "id": "PAST-16-049",
            "label": "Set 16 · Q49"
           }
          ]
         },
         {
          "html": "NEC began recognising master's programmes on 2076/09/06.",
          "sources": [
           {
            "id": "PAST-18-014",
            "label": "Set 18 · Q14"
           }
          ]
         },
         {
          "html": "Bagmati Province has the most NEC-recognised engineering colleges.",
          "sources": [
           {
            "id": "PAST-13-013",
            "label": "Set 13 · Q13"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-09-009",
          "label": "Set 9 · Q9"
         },
         {
          "id": "PAST-09-079",
          "label": "Set 9 · Q79"
         },
         {
          "id": "PAST-16-049",
          "label": "Set 16 · Q49"
         },
         {
          "id": "PAST-18-014",
          "label": "Set 18 · Q14"
         },
         {
          "id": "PAST-13-013",
          "label": "Set 13 · Q13"
         }
        ]
       },
       {
        "id": "nea-and-other-bodies",
        "title": "The Nepal Engineers' Association and other bodies",
        "html": "<p>The Nepal Engineers' Association, founded in 1962, is a registered professional society, which the key places under the Government's social service registration law; it was not created by the NEC Act. Per the source key it has three categories of membership.</p><p>Other established engineering organisations in Nepal include SOPHEN, the Society of Public Health Engineers, and SCAEF, the Society of Consulting Architectural and Engineering Firms.</p>",
        "points": [
         {
          "html": "NEA was founded under the Social Service Act of the Government of Nepal.",
          "sources": [
           {
            "id": "PAST-17-005",
            "label": "Set 17 · Q5"
           }
          ]
         },
         {
          "html": "NEA has 3 categories of membership, per the key.",
          "sources": [
           {
            "id": "PAST-12-048",
            "label": "Set 12 · Q48"
           }
          ]
         },
         {
          "html": "The Society of Electrical &amp; Electronics Association (SEEN) is not a professional engineering body, per the key.",
          "sources": [
           {
            "id": "PAST-06-077",
            "label": "Set 6 · Q77"
           }
          ]
         }
        ],
        "sources": [
         {
          "id": "PAST-17-005",
          "label": "Set 17 · Q5"
         },
         {
          "id": "PAST-12-048",
          "label": "Set 12 · Q48"
         },
         {
          "id": "PAST-06-077",
          "label": "Set 6 · Q77"
         }
        ]
       }
      ],
      "cautions": [
       {
        "id": "women-members-key",
        "status": "corrected",
        "prompt": "The count of women on the council depends on the term",
        "html": "<p>The source key gives two women members for the council formed in 2079 and notes that the Act intends more women members. The council's make-up changes with each term, so check the current NEC list.</p>",
        "sources": [
         {
          "id": "PAST-07-002",
          "label": "Set 7 · Q2"
         }
        ]
       }
      ],
      "gaps": [
       "Detailed Regulation procedures beyond these facts are not examined in these papers."
      ]
     }
    });
})();
