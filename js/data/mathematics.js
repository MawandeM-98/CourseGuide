// ============================================================
// MATHEMATICS — 200 Questions
// ============================================================

if (typeof window.SUBJECT_QUESTIONS === 'undefined') {
    window.SUBJECT_QUESTIONS = {};
}

var MATHEMATICS_QUESTIONS = [
    // ============================================================
    // SECTION A — NUMBER PATTERNS, SEQUENCES & SERIES (1-20)
    // ============================================================
    {
        question: "The next term in the sequence 3; 7; 11; 15;... is:",
        options: ["18", "19", "20", "21"],
        correct: 1,
        explanation: "The common difference is 4, so 15 + 4 = 19."
    },
    {
        question: "The nth term of 5; 8; 11; 14;... is:",
        options: ["3n+2", "3n+5", "5n+3", "2n+3"],
        correct: 0,
        explanation: "Tₙ = a + (n−1)d = 5 + 3(n−1) = 3n + 2."
    },
    {
        question: "Find the 20th term of 4; 9; 14; 19;... .",
        options: ["94", "95", "99", "104"],
        correct: 2,
        explanation: "T₂₀ = 4 + 19(5) = 99."
    },
    {
        question: "The common difference of an arithmetic sequence is:",
        options: ["Tₙ/Tₙ₋₁", "Tₙ − Tₙ₋₁", "Tₙ + Tₙ₋₁", "Tₙ × Tₙ₋₁"],
        correct: 1,
        explanation: "Common difference d = Tₙ − Tₙ₋₁."
    },
    {
        question: "If Tₙ = 7n − 2, then T₁ is:",
        options: ["5", "7", "9", "12"],
        correct: 0,
        explanation: "T₁ = 7(1) − 2 = 5."
    },
    {
        question: "The sequence 2; 6; 18; 54;... is:",
        options: ["arithmetic", "geometric", "quadratic", "linear"],
        correct: 1,
        explanation: "Each term is multiplied by 3 (common ratio = 3)."
    },
    {
        question: "The common ratio of 3; 12; 48; 192 is:",
        options: ["3", "4", "6", "9"],
        correct: 1,
        explanation: "12 ÷ 3 = 4, 48 ÷ 12 = 4, 192 ÷ 48 = 4."
    },
    {
        question: "The nth term of 2; 6; 18; 54;... is:",
        options: ["2(3)ⁿ", "2(3)ⁿ⁻¹", "3(2)ⁿ⁻¹", "6(3)ⁿ"],
        correct: 1,
        explanation: "Tₙ = arⁿ⁻¹ = 2(3)ⁿ⁻¹."
    },
    {
        question: "The 6th term of 2; 6; 18; 54;... is:",
        options: ["162", "243", "486", "729"],
        correct: 2,
        explanation: "T₆ = 2(3)⁵ = 2 × 243 = 486."
    },
    {
        question: "The sum of the first 10 terms of 2; 4; 6;... is:",
        options: ["100", "110", "120", "200"],
        correct: 1,
        explanation: "S₁₀ = 10/2 × (2 + 20) = 5 × 22 = 110."
    },
    {
        question: "The sum of the first 20 positive integers is:",
        options: ["190", "200", "210", "220"],
        correct: 2,
        explanation: "S₂₀ = 20/2 × (1 + 20) = 10 × 21 = 210."
    },
    {
        question: "The sum of the first 5 terms of 3; 6; 12; 24;... is:",
        options: ["45", "63", "75", "93"],
        correct: 1,
        explanation: "S₅ = 3(2⁵ − 1)/(2 − 1) = 3(32 − 1) = 93."
    },
    {
        question: "For a geometric sequence with a = 5 and r = 2, T₆ equals:",
        options: ["80", "100", "160", "320"],
        correct: 2,
        explanation: "T₆ = 5(2)⁵ = 5 × 32 = 160."
    },
    {
        question: "A geometric sequence has a = 81 and r = 1/3. The fourth term is:",
        options: ["1", "3", "9", "27"],
        correct: 1,
        explanation: "T₄ = 81(1/3)³ = 81 × 1/27 = 3."
    },
    {
        question: "The sum to infinity exists when:",
        options: ["r > 1", "r = 1", "|r| < 1", "r < −1"],
        correct: 2,
        explanation: "The sum to infinity converges only when |r| < 1."
    },
    {
        question: "Find the sum to infinity of 12 + 6 + 3 + 1.5 + ... .",
        options: ["18", "20", "24", "30"],
        correct: 2,
        explanation: "S∞ = 12/(1 − 1/2) = 12 × 2 = 24."
    },
    {
        question: "If S∞ = 20 and a = 5, the common ratio is:",
        options: ["0.25", "0.5", "0.75", "1.25"],
        correct: 2,
        explanation: "20 = 5/(1 − r) → 20(1 − r) = 5 → 1 − r = 0.25 → r = 0.75."
    },
    {
        question: "If the second differences of a sequence are constant, the sequence is:",
        options: ["linear", "arithmetic", "quadratic", "geometric"],
        correct: 2,
        explanation: "Constant second differences indicate a quadratic sequence."
    },
    {
        question: "The sequence 2; 5; 10; 17; 26 has first differences:",
        options: ["2; 4; 6; 8", "3; 5; 7; 9", "1; 3; 5; 7", "4; 5; 6; 7"],
        correct: 1,
        explanation: "5 − 2 = 3, 10 − 5 = 5, 17 − 10 = 7, 26 − 17 = 9."
    },
    {
        question: "The nth term of 1; 4; 9; 16; 25;... is:",
        options: ["n + 1", "2n", "n²", "n³"],
        correct: 2,
        explanation: "1², 2², 3², 4², 5²... so Tₙ = n²."
    },

    // ============================================================
    // SECTION B — FINANCE, GROWTH & DECAY (21-30)
    // ============================================================
    {
        question: "Simple interest is calculated using:",
        options: ["A = P(1 + i)ⁿ", "I = Pin", "A = P + i + n", "I = P/i"],
        correct: 1,
        explanation: "Simple interest: I = Pin."
    },
    {
        question: "R10 000 is invested at 8% simple interest for 3 years. Interest earned is:",
        options: ["R800", "R1 600", "R2 400", "R3 200"],
        correct: 2,
        explanation: "I = Pin = 10000 × 0.08 × 3 = R2 400."
    },
    {
        question: "The final amount in Question 22 is:",
        options: ["R10 800", "R11 600", "R12 400", "R13 200"],
        correct: 2,
        explanation: "A = P + I = 10000 + 2400 = R12 400."
    },
    {
        question: "Compound growth is calculated using:",
        options: ["A = P(1 + i)ⁿ", "A = P + i + n", "A = Pin", "A = P(1 − i)n"],
        correct: 0,
        explanation: "Compound growth: A = P(1 + i)ⁿ."
    },
    {
        question: "R5 000 grows by 10% annually. After 2 years:",
        options: ["R5 500", "R6 000", "R6 050", "R6 100"],
        correct: 2,
        explanation: "A = 5000(1.1)² = 5000 × 1.21 = R6 050."
    },
    {
        question: "Depreciation at a fixed percentage is an example of:",
        options: ["arithmetic growth", "geometric growth", "linear growth", "constant growth"],
        correct: 1,
        explanation: "Fixed percentage depreciation is exponential/geometric decay."
    },
    {
        question: "An asset worth R200 000 depreciates by 15% per year. Its value after one year is:",
        options: ["R170 000", "R175 000", "R185 000", "R230 000"],
        correct: 0,
        explanation: "A = 200000(0.85) = R170 000."
    },
    {
        question: "The multiplier for a 12% decrease is:",
        options: ["1.12", "0.88", "0.12", "−0.12"],
        correct: 1,
        explanation: "1 − 0.12 = 0.88."
    },
    {
        question: "The multiplier for a 7% increase is:",
        options: ["0.93", "1.07", "7", "1.7"],
        correct: 1,
        explanation: "1 + 0.07 = 1.07."
    },
    {
        question: "An amount doubles every 5 years. This is best described as:",
        options: ["linear growth", "exponential growth", "arithmetic growth", "constant growth"],
        correct: 1,
        explanation: "Doubling at regular intervals is exponential growth."
    },

    // ============================================================
    // SECTION C — FUNCTIONS AND GRAPHS (31-60)
    // ============================================================
    {
        question: "The y-intercept of y = 2x + 5 is:",
        options: ["2", "5", "−2", "−5"],
        correct: 1,
        explanation: "The y-intercept is the constant term when x = 0: y = 5."
    },
    {
        question: "The gradient of y = −3x + 7 is:",
        options: ["7", "3", "−3", "−7"],
        correct: 2,
        explanation: "The gradient is the coefficient of x: m = −3."
    },
    {
        question: "A line with gradient 0 is:",
        options: ["vertical", "horizontal", "diagonal", "undefined"],
        correct: 1,
        explanation: "A gradient of 0 means a horizontal line."
    },
    {
        question: "The gradient of a vertical line is:",
        options: ["0", "1", "−1", "undefined"],
        correct: 3,
        explanation: "Vertical lines have undefined gradient."
    },
    {
        question: "The equation of a line with gradient 4 passing through (0,3) is:",
        options: ["y = 4x + 3", "y = 3x + 4", "y = 4x − 3", "y = −4x + 3"],
        correct: 0,
        explanation: "Using y = mx + c: m = 4, c = 3 → y = 4x + 3."
    },
    {
        question: "The x-intercept of y = 2x − 8 is:",
        options: ["−4", "2", "4", "8"],
        correct: 2,
        explanation: "Set y = 0: 0 = 2x − 8 → 2x = 8 → x = 4."
    },
    {
        question: "Two lines are parallel if their gradients are:",
        options: ["reciprocals", "equal", "opposite only", "zero"],
        correct: 1,
        explanation: "Parallel lines have equal gradients."
    },
    {
        question: "Two non-vertical lines are perpendicular if:",
        options: ["m₁ = m₂", "m₁ + m₂ = 1", "m₁m₂ = −1", "m₁m₂ = 1"],
        correct: 2,
        explanation: "Perpendicular lines have gradients whose product is −1."
    },
    {
        question: "The turning point of y = x² − 4x + 3 has x-coordinate:",
        options: ["−2", "1", "2", "4"],
        correct: 2,
        explanation: "x = −b/(2a) = 4/(2) = 2."
    },
    {
        question: "The turning point of y = x² − 4x + 3 is:",
        options: ["(2,−1)", "(−2,−1)", "(2,1)", "(−2,1)"],
        correct: 0,
        explanation: "x = 2, y = 4 − 8 + 3 = −1 → (2,−1)."
    },
    {
        question: "The axis of symmetry of y = x² + 6x + 2 is:",
        options: ["x = 3", "x = −3", "x = 6", "x = −6"],
        correct: 1,
        explanation: "x = −b/(2a) = −6/2 = −3."
    },
    {
        question: "A parabola with a > 0:",
        options: ["opens downward", "opens upward", "is always horizontal", "has no turning point"],
        correct: 1,
        explanation: "If a > 0, the parabola opens upward."
    },
    {
        question: "A parabola with a < 0:",
        options: ["opens upward", "opens downward", "is linear", "has no axis of symmetry"],
        correct: 1,
        explanation: "If a < 0, the parabola opens downward."
    },
    {
        question: "The roots of x² − 5x + 6 = 0 are:",
        options: ["1 and 6", "−2 and −3", "2 and 3", "0 and 6"],
        correct: 2,
        explanation: "(x − 2)(x − 3) = 0 → x = 2, 3."
    },
    {
        question: "The discriminant of x² − 4x + 4 = 0 is:",
        options: ["−4", "0", "4", "16"],
        correct: 1,
        explanation: "Δ = (−4)² − 4(1)(4) = 16 − 16 = 0."
    },
    {
        question: "A quadratic has two distinct real roots when:",
        options: ["b² − 4ac < 0", "b² − 4ac = 0", "b² − 4ac > 0", "a = 0"],
        correct: 2,
        explanation: "Two distinct real roots when discriminant > 0."
    },
    {
        question: "If the discriminant is zero, the graph:",
        options: ["does not meet the x-axis", "touches the x-axis once", "crosses twice", "is a straight line"],
        correct: 1,
        explanation: "Discriminant = 0 means one repeated root (touches x-axis)."
    },
    {
        question: "The function y = 2/x has vertical asymptote:",
        options: ["x = 2", "x = −2", "x = 0", "y = 0"],
        correct: 2,
        explanation: "The denominator cannot be zero, so x ≠ 0."
    },
    {
        question: "The horizontal asymptote of y = 3/x + 4 is:",
        options: ["x = 4", "y = 4", "x = 3", "y = 3"],
        correct: 1,
        explanation: "As x → ∞, 3/x → 0, so y → 4."
    },
    {
        question: "The function y = 2ˣ has y-intercept:",
        options: ["0", "1", "2", "−1"],
        correct: 0,
        explanation: "When x = 0, y = 2⁰ = 1."
    },
    {
        question: "The function y = 2ˣ is:",
        options: ["decreasing", "increasing", "constant", "undefined for positive x"],
        correct: 1,
        explanation: "y = 2ˣ is an increasing exponential function."
    },
    {
        question: "The horizontal asymptote of y = 2ˣ + 3 is:",
        options: ["x = 3", "y = 3", "y = −3", "x = −3"],
        correct: 1,
        explanation: "As x → −∞, 2ˣ → 0, so y → 3."
    },
    {
        question: "The inverse of f(x) = 2x + 4 is:",
        options: ["2x − 4", "(x − 4)/2", "(x + 4)/2", "4x + 2"],
        correct: 1,
        explanation: "y = 2x + 4 → x = 2y + 4 → y = (x − 4)/2."
    },
    {
        question: "If f(x) = x², then f(3) is:",
        options: ["3", "6", "9", "12"],
        correct: 2,
        explanation: "3² = 9."
    },
    {
        question: "If f(x) = 2x − 1, then f(−3) is:",
        options: ["−7", "−5", "5", "7"],
        correct: 0,
        explanation: "2(−3) − 1 = −6 − 1 = −7."
    },
    {
        question: "The domain of f(x) = 1/(x − 3) excludes:",
        options: ["0", "1", "2", "3"],
        correct: 3,
        explanation: "x − 3 = 0 → x = 3, so 3 is excluded from the domain."
    },
    {
        question: "The range of y = x² + 2 is:",
        options: ["y < 2", "y > 2", "y ≥ 2", "all real numbers"],
        correct: 2,
        explanation: "x² ≥ 0, so x² + 2 ≥ 2."
    },
    {
        question: "The transformation y = f(x) + 5 moves a graph:",
        options: ["5 units left", "5 units right", "5 units up", "5 units down"],
        correct: 2,
        explanation: "Adding a constant to f(x) shifts the graph vertically upward."
    },
    {
        question: "The transformation y = f(x − 3) moves the graph:",
        options: ["3 units left", "3 units right", "3 units up", "3 units down"],
        correct: 1,
        explanation: "f(x − 3) shifts the graph 3 units to the right."
    },
    {
        question: "The transformation y = −f(x) reflects a graph in the:",
        options: ["x-axis", "y-axis", "y = x", "origin only"],
        correct: 0,
        explanation: "−f(x) reflects across the x-axis."
    },

    // ============================================================
    // SECTION D — LOGARITHMS AND EXPONENTS (61-70)
    // ============================================================
    {
        question: "logₐ a equals:",
        options: ["0", "1", "a", "a²"],
        correct: 1,
        explanation: "logₐ a = 1."
    },
    {
        question: "log₂ 8 =",
        options: ["2", "3", "4", "8"],
        correct: 1,
        explanation: "2³ = 8, so log₂ 8 = 3."
    },
    {
        question: "log₁₀ 1000 =",
        options: ["1", "2", "3", "10"],
        correct: 2,
        explanation: "10³ = 1000, so log₁₀ 1000 = 3."
    },
    {
        question: "If 2ˣ = 32, then x =",
        options: ["4", "5", "6", "8"],
        correct: 1,
        explanation: "2⁵ = 32."
    },
    {
        question: "If 3ˣ = 1/27, then:",
        options: ["x = 3", "x = −3", "x = −2", "x = 27"],
        correct: 1,
        explanation: "1/27 = 3⁻³, so x = −3."
    },
    {
        question: "logₐ(xy) =",
        options: ["logₐx − logₐy", "logₐx + logₐy", "logₐ(x + y)", "xy logₐ"],
        correct: 1,
        explanation: "logₐ(xy) = logₐx + logₐy."
    },
    {
        question: "logₐ(x/y) =",
        options: ["logₐx + logₐy", "logₐx − logₐy", "logₐ(x − y)", "x/y"],
        correct: 1,
        explanation: "logₐ(x/y) = logₐx − logₐy."
    },
    {
        question: "logₐ(xⁿ) =",
        options: ["n logₐx", "logₐ(x + n)", "logₐ(x)/n", "x logₐn"],
        correct: 0,
        explanation: "logₐ(xⁿ) = n logₐx."
    },
    {
        question: "Solve 5ˣ = 125.",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "5³ = 125, so x = 3."
    },
    {
        question: "Solve 2ˣ⁺¹ = 16.",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "2⁴ = 16, so x + 1 = 4 → x = 3."
    },

    // ============================================================
    // SECTION E — FINANCIAL MATHEMATICS (71-80)
    // ============================================================
    {
        question: "A monthly interest rate of 1% corresponds to an annual nominal rate of:",
        options: ["1%", "6%", "12%", "100%"],
        correct: 2,
        explanation: "1% × 12 = 12% per year."
    },
    {
        question: "An investment grows from R20 000 to R22 000. The percentage increase is:",
        options: ["5%", "10%", "15%", "20%"],
        correct: 1,
        explanation: "(2000/20000) × 100 = 10%."
    },
    {
        question: "An item costing R4 000 increases by 15%. New price:",
        options: ["R4 150", "R4 400", "R4 600", "R5 000"],
        correct: 2,
        explanation: "4000 × 1.15 = R4 600."
    },
    {
        question: "A R10 000 investment earns 6% compound interest annually for one year. Amount:",
        options: ["R10 060", "R10 600", "R11 000", "R16 000"],
        correct: 1,
        explanation: "10000 × 1.06 = R10 600."
    },
    {
        question: "If inflation is 8%, the purchasing power of money generally:",
        options: ["increases", "decreases", "remains unchanged", "doubles"],
        correct: 1,
        explanation: "Inflation reduces the purchasing power of money."
    },
    {
        question: "Present value refers to:",
        options: ["future value only", "value of future money in today's terms", "interest only", "inflation only"],
        correct: 1,
        explanation: "Present value is the current value of a future amount."
    },
    {
        question: "A nominal annual interest rate is divided by 12 to obtain:",
        options: ["effective annual rate", "monthly rate when compounded monthly", "inflation rate", "depreciation rate"],
        correct: 1,
        explanation: "Nominal rate ÷ 12 = monthly interest rate."
    },
    {
        question: "An annuity involves:",
        options: ["a single payment only", "regular equal payments", "no interest", "no time period"],
        correct: 1,
        explanation: "An annuity consists of regular equal payments."
    },
    {
        question: "If payments occur at the end of each period, the annuity is:",
        options: ["annuity due", "ordinary annuity", "perpetuity only", "depreciation"],
        correct: 1,
        explanation: "Payments at the end of each period = ordinary annuity."
    },
    {
        question: "A loan repayment generally consists of:",
        options: ["interest only", "principal and interest", "inflation only", "tax only"],
        correct: 1,
        explanation: "Loan repayments consist of both principal and interest portions."
    },

    // ============================================================
    // SECTION F — DIFFERENTIAL CALCULUS (81-100)
    // ============================================================
    {
        question: "The derivative of xⁿ is:",
        options: ["nxⁿ⁻¹", "xⁿ⁺¹", "nxⁿ", "xⁿ⁻¹"],
        correct: 0,
        explanation: "d/dx(xⁿ) = nxⁿ⁻¹."
    },
    {
        question: "d/dx(x³) =",
        options: ["x²", "2x²", "3x²", "3x³"],
        correct: 2,
        explanation: "d/dx(x³) = 3x²."
    },
    {
        question: "d/dx(5x²) =",
        options: ["5x", "10x", "10x²", "25x"],
        correct: 1,
        explanation: "5 × 2x = 10x."
    },
    {
        question: "The derivative of a constant is:",
        options: ["1", "the constant", "0", "undefined"],
        correct: 2,
        explanation: "d/dx(c) = 0."
    },
    {
        question: "If f(x) = x² − 4x + 3, then f'(x) =",
        options: ["x − 4", "2x − 4", "2x + 4", "x² − 4"],
        correct: 1,
        explanation: "f'(x) = 2x − 4."
    },
    {
        question: "The gradient of f(x) = x² at x = 3 is:",
        options: ["3", "6", "9", "12"],
        correct: 1,
        explanation: "f'(x) = 2x, so f'(3) = 6."
    },
    {
        question: "A stationary point occurs where:",
        options: ["f(x) = 0", "f'(x) = 0", "f''(x) = 0 always", "x = 0"],
        correct: 1,
        explanation: "Stationary points occur where f'(x) = 0."
    },
    {
        question: "The stationary points of f(x) = x² − 6x + 5 occur when:",
        options: ["x = 1", "x = 2", "x = 3", "x = 6"],
        correct: 2,
        explanation: "f'(x) = 2x − 6 = 0 → x = 3."
    },
    {
        question: "For f(x) = x², the stationary point is:",
        options: ["maximum", "minimum", "inflection point", "asymptote"],
        correct: 1,
        explanation: "f''(x) = 2 > 0, so it's a minimum."
    },
    {
        question: "For f(x) = −x², the stationary point is:",
        options: ["maximum", "minimum", "neither", "asymptote"],
        correct: 0,
        explanation: "f''(x) = −2 < 0, so it's a maximum."
    },
    {
        question: "If f'(x) > 0, the function is generally:",
        options: ["increasing", "decreasing", "constant", "undefined"],
        correct: 0,
        explanation: "A positive derivative indicates an increasing function."
    },
    {
        question: "If f'(x) < 0, the function is generally:",
        options: ["increasing", "decreasing", "constant", "quadratic"],
        correct: 1,
        explanation: "A negative derivative indicates a decreasing function."
    },
    {
        question: "For f(x) = x³ − 3x, f'(x) =",
        options: ["3x² − 3", "x² − 3", "3x − 3", "x³ − 3"],
        correct: 0,
        explanation: "f'(x) = 3x² − 3."
    },
    {
        question: "The stationary points of f(x) = x³ − 3x occur at:",
        options: ["x = 0, 1", "x = −1, 1", "x = −3, 3", "x = 1, 3"],
        correct: 1,
        explanation: "3x² − 3 = 0 → x² = 1 → x = ±1."
    },
    {
        question: "The second derivative of x³ is:",
        options: ["3x", "6x", "6", "x²"],
        correct: 1,
        explanation: "First derivative: 3x², second derivative: 6x."
    },
    {
        question: "A point where concavity changes may be:",
        options: ["an intercept", "an inflection point", "an asymptote", "a root only"],
        correct: 1,
        explanation: "Inflection points are where concavity changes."
    },
    {
        question: "The gradient of a tangent to a curve at x = a is:",
        options: ["f(a)", "f'(a)", "f''(a)", "a/f(a)"],
        correct: 1,
        explanation: "The derivative at x = a gives the tangent gradient."
    },
    {
        question: "The equation of a tangent with gradient m through (x₁, y₁) is:",
        options: ["y = mx", "y − y₁ = m(x − x₁)", "y + x₁ = m − y₁", "x − x₁ = m(y − y₁)"],
        correct: 1,
        explanation: "Point-slope form: y − y₁ = m(x − x₁)."
    },
    {
        question: "The derivative of 4x³ − 2x + 7 is:",
        options: ["12x² − 2", "12x² + 2", "4x² − 2", "12x³ − 2"],
        correct: 0,
        explanation: "d/dx(4x³ − 2x + 7) = 12x² − 2."
    },
    {
        question: "The gradient of y = 2x² + 3x − 1 at x = 2 is:",
        options: ["7", "9", "11", "13"],
        correct: 2,
        explanation: "y' = 4x + 3, so y'(2) = 4(2) + 3 = 11."
    },

    // ============================================================
    // SECTION G — TRIGONOMETRY (101-120)
    // ============================================================
    {
        question: "sin 30° =",
        options: ["0", "1/2", "√2/2", "1"],
        correct: 1,
        explanation: "sin 30° = 1/2."
    },
    {
        question: "cos 60° =",
        options: ["0", "1/2", "√3/2", "1"],
        correct: 1,
        explanation: "cos 60° = 1/2."
    },
    {
        question: "tan 45° =",
        options: ["0", "1/2", "1", "√3"],
        correct: 2,
        explanation: "tan 45° = 1."
    },
    {
        question: "sin 90° =",
        options: ["0", "0.5", "1", "−1"],
        correct: 2,
        explanation: "sin 90° = 1."
    },
    {
        question: "cos 180° =",
        options: ["−1", "0", "1", "1/2"],
        correct: 0,
        explanation: "cos 180° = −1."
    },
    {
        question: "sin(−30°) =",
        options: ["1/2", "−1/2", "√3/2", "−1"],
        correct: 1,
        explanation: "sin is an odd function: sin(−30°) = −sin 30° = −1/2."
    },
    {
        question: "cos(−60°) =",
        options: ["−1/2", "1/2", "−1", "1"],
        correct: 1,
        explanation: "cos is an even function: cos(−60°) = cos 60° = 1/2."
    },
    {
        question: "The period of y = sin x is:",
        options: ["90°", "180°", "270°", "360°"],
        correct: 3,
        explanation: "sin x has period 360°."
    },
    {
        question: "The amplitude of y = 4 sin x is:",
        options: ["1", "2", "4", "8"],
        correct: 2,
        explanation: "Amplitude = |4| = 4."
    },
    {
        question: "The maximum value of y = 3 cos x is:",
        options: ["−3", "0", "1", "3"],
        correct: 3,
        explanation: "cos x ≤ 1, so max is 3."
    },
    {
        question: "The minimum value of y = 2 sin x is:",
        options: ["−2", "−1", "0", "2"],
        correct: 0,
        explanation: "sin x ≥ −1, so min is −2."
    },
    {
        question: "The period of y = sin 2x is:",
        options: ["90°", "180°", "360°", "720°"],
        correct: 1,
        explanation: "Period = 360° / 2 = 180°."
    },
    {
        question: "The period of y = cos 3x is:",
        options: ["60°", "90°", "120°", "180°"],
        correct: 2,
        explanation: "Period = 360° / 3 = 120°."
    },
    {
        question: "Solve sin x = 0 for 0° ≤ x ≤ 360°.",
        options: ["0°, 180°, 360°", "90°, 270°", "0°, 90°, 180°", "180°, 360°"],
        correct: 0,
        explanation: "sin x = 0 at 0°, 180°, 360°."
    },
    {
        question: "Solve cos x = 0 for 0° ≤ x ≤ 360°.",
        options: ["0°, 180°", "90°, 270°", "45°, 225°", "180°, 360°"],
        correct: 1,
        explanation: "cos x = 0 at 90°, 270°."
    },
    {
        question: "Solve tan x = 1 for 0° ≤ x ≤ 360°.",
        options: ["45° only", "45°, 225°", "135°, 315°", "90°, 270°"],
        correct: 1,
        explanation: "tan x = 1 at 45°, 225°."
    },
    {
        question: "The identity sin²x + cos²x equals:",
        options: ["0", "1", "2", "tan x"],
        correct: 1,
        explanation: "sin²x + cos²x = 1."
    },
    {
        question: "1 + tan²x =",
        options: ["sin²x", "cos²x", "sec²x", "cot²x"],
        correct: 2,
        explanation: "1 + tan²x = sec²x."
    },
    {
        question: "If sin θ = 3/5 and θ is acute, then cos θ =",
        options: ["2/5", "3/5", "4/5", "5/4"],
        correct: 2,
        explanation: "cos²θ = 1 − 9/25 = 16/25 → cos θ = 4/5."
    },
    {
        question: "If tan θ = 3/4, then for an acute angle:",
        options: ["sin θ = 3/5", "sin θ = 4/5", "cos θ = 3/5", "cos θ = 4/5"],
        correct: 0,
        explanation: "For 3-4-5 triangle, sin θ = 3/5."
    },

    // ============================================================
    // SECTION H — TRIG IDENTITIES & EQUATIONS (121-130)
    // ============================================================
    {
        question: "sin(90° − x) =",
        options: ["sin x", "cos x", "−cos x", "tan x"],
        correct: 1,
        explanation: "sin(90° − x) = cos x."
    },
    {
        question: "cos(90° − x) =",
        options: ["sin x", "cos x", "−sin x", "tan x"],
        correct: 0,
        explanation: "cos(90° − x) = sin x."
    },
    {
        question: "sin(180° − x) =",
        options: ["−sin x", "sin x", "cos x", "−cos x"],
        correct: 1,
        explanation: "sin(180° − x) = sin x."
    },
    {
        question: "cos(180° − x) =",
        options: ["cos x", "−cos x", "sin x", "−sin x"],
        correct: 1,
        explanation: "cos(180° − x) = −cos x."
    },
    {
        question: "If tan x = 4/3, then sec²x =",
        options: ["9/16", "16/9", "25/9", "25/16"],
        correct: 2,
        explanation: "1 + tan²x = 1 + 16/9 = 25/9."
    },
    {
        question: "Solve 2 sin x = 1 for 0° ≤ x ≤ 360°.",
        options: ["30°, 150°", "30°, 330°", "60°, 120°", "45°, 135°"],
        correct: 0,
        explanation: "sin x = 1/2 → x = 30°, 150°."
    },
    {
        question: "Solve 2 cos x = −1.",
        options: ["60°, 300°", "120°, 240°", "30°, 330°", "90°, 270°"],
        correct: 1,
        explanation: "cos x = −1/2 → x = 120°, 240°."
    },
    {
        question: "Solve tan x = −1.",
        options: ["45°, 225°", "135°, 315°", "90°, 270°", "0°, 180°"],
        correct: 1,
        explanation: "tan x = −1 at 135°, 315°."
    },
    {
        question: "The general solution of sin x = 0 is:",
        options: ["x = 90° + k180°", "x = k180°", "x = 45° + k360°", "x = 180° + k90°"],
        correct: 1,
        explanation: "sin x = 0 → x = k180°."
    },
    {
        question: "The general solution of tan x = 0 is:",
        options: ["x = 90° + k180°", "x = k180°", "x = 45° + k90°", "x = 180° + k360°"],
        correct: 1,
        explanation: "tan x = 0 → x = k180°."
    },

    // ============================================================
    // SECTION I — TRIGONOMETRY IN TRIANGLES (131-140)
    // ============================================================
    {
        question: "The sine rule is:",
        options: ["a/sin A = b/sin B = c/sin C", "a² = b² + c²", "a = b + c", "sin A = a + b"],
        correct: 0,
        explanation: "The sine rule: a/sin A = b/sin B = c/sin C."
    },
    {
        question: "The cosine rule is:",
        options: ["a² = b² + c² − 2bc cos A", "a = b + c", "a² = b² − c²", "a = bc cos A"],
        correct: 0,
        explanation: "The cosine rule: a² = b² + c² − 2bc cos A."
    },
    {
        question: "The area of a triangle using two sides and included angle is:",
        options: ["ab cos C", "½ab sin C", "2ab sin C", "ab/sin C"],
        correct: 1,
        explanation: "Area = ½ab sin C."
    },
    {
        question: "A triangle has sides 6 and 8 with included angle 30°. Its area is:",
        options: ["6", "12", "24", "48"],
        correct: 1,
        explanation: "Area = ½ × 6 × 8 × sin 30° = 24 × 0.5 = 12."
    },
    {
        question: "A right triangle has legs 6 and 8. Its hypotenuse is:",
        options: ["9", "10", "12", "14"],
        correct: 1,
        explanation: "√(6² + 8²) = √(36 + 64) = √100 = 10."
    },
    {
        question: "The angle opposite the longest side of a triangle is:",
        options: ["smallest", "largest", "always 90°", "always 45°"],
        correct: 1,
        explanation: "The longest side is opposite the largest angle."
    },
    {
        question: "If two sides and the included angle are known, the most appropriate rule is usually:",
        options: ["sine rule", "cosine rule", "tangent rule only", "Pythagoras only"],
        correct: 1,
        explanation: "Use cosine rule when two sides and included angle are known."
    },
    {
        question: "If two angles and one side are known, the most appropriate rule is usually:",
        options: ["cosine rule", "sine rule", "Pythagoras", "quadratic formula"],
        correct: 1,
        explanation: "Use sine rule when two angles and one side are known."
    },
    {
        question: "The exterior angle of a triangle equals:",
        options: ["one interior angle", "sum of the two opposite interior angles", "half the triangle", "180° always"],
        correct: 1,
        explanation: "An exterior angle equals the sum of the two opposite interior angles."
    },
    {
        question: "The sum of the interior angles of a triangle is:",
        options: ["90°", "180°", "270°", "360°"],
        correct: 1,
        explanation: "The sum of interior angles of a triangle is 180°."
    },

    // ============================================================
    // SECTION J — ANALYTICAL GEOMETRY (141-160)
    // ============================================================
    {
        question: "The distance between (x₁, y₁) and (x₂, y₂) is:",
        options: ["√((x₂−x₁)² + (y₂−y₁)²)", "x₂−x₁+y₂−y₁", "x₁x₂+y₁y₂", "(y₂−y₁)/(x₂−x₁)"],
        correct: 0,
        explanation: "Distance formula: √((x₂−x₁)² + (y₂−y₁)²)."
    },
    {
        question: "The distance between (1,2) and (4,6) is:",
        options: ["3", "4", "5", "6"],
        correct: 2,
        explanation: "√((4−1)² + (6−2)²) = √(9 + 16) = √25 = 5."
    },
    {
        question: "The midpoint of (2,4) and (6,8) is:",
        options: ["(4,6)", "(8,12)", "(2,2)", "(3,4)"],
        correct: 0,
        explanation: "Midpoint = ((2+6)/2, (4+8)/2) = (4,6)."
    },
    {
        question: "The gradient between (2,3) and (6,11) is:",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "m = (11−3)/(6−2) = 8/4 = 2."
    },
    {
        question: "The equation of a circle centred at the origin with radius 5 is:",
        options: ["x² + y² = 5", "x² + y² = 10", "x² + y² = 25", "x + y = 25"],
        correct: 2,
        explanation: "x² + y² = r² = 25."
    },
    {
        question: "The centre of (x−3)² + (y+2)² = 16 is:",
        options: ["(3,2)", "(−3,2)", "(3,−2)", "(−3,−2)"],
        correct: 2,
        explanation: "Centre = (3, −2)."
    },
    {
        question: "The radius of the circle in Question 146 is:",
        options: ["2", "4", "8", "16"],
        correct: 1,
        explanation: "r² = 16 → r = 4."
    },
    {
        question: "The tangent to a circle at a point is:",
        options: ["parallel to radius", "perpendicular to radius", "equal to radius", "always horizontal"],
        correct: 1,
        explanation: "A tangent is perpendicular to the radius at the point of contact."
    },
    {
        question: "If a radius has gradient 2, the tangent gradient is:",
        options: ["2", "−2", "1/2", "−1/2"],
        correct: 3,
        explanation: "m_tangent = −1/m_radius = −1/2."
    },
    {
        question: "The midpoint of a diameter of a circle is:",
        options: ["on the circumference", "the centre", "outside the circle", "always the origin"],
        correct: 1,
        explanation: "The midpoint of a diameter is the centre of the circle."
    },
    {
        question: "The equation y = mx + c represents:",
        options: ["circle", "straight line", "parabola", "hyperbola"],
        correct: 1,
        explanation: "y = mx + c is the equation of a straight line."
    },
    {
        question: "A line through (2,5) with gradient 3 has equation:",
        options: ["y = 3x − 1", "y = 3x + 1", "y = 2x + 3", "y = 5x + 3"],
        correct: 0,
        explanation: "y − 5 = 3(x − 2) → y = 3x − 1."
    },
    {
        question: "The gradient of a line perpendicular to y = ½x + 4 is:",
        options: ["2", "−2", "1/2", "−1/2"],
        correct: 1,
        explanation: "m_perp = −1/m = −1/(1/2) = −2."
    },
    {
        question: "If two lines have gradients 2 and −1/2, they are:",
        options: ["parallel", "perpendicular", "identical", "horizontal"],
        correct: 1,
        explanation: "2 × (−1/2) = −1, so they are perpendicular."
    },
    {
        question: "If A(1,2), B(5,2), the length AB is:",
        options: ["2", "3", "4", "5"],
        correct: 2,
        explanation: "5 − 1 = 4."
    },
    {
        question: "The midpoint of a chord of a circle is joined to the centre. This line is:",
        options: ["parallel to chord", "perpendicular to chord", "tangent to circle", "a diameter always"],
        correct: 1,
        explanation: "The line from centre to midpoint of a chord is perpendicular to the chord."
    },
    {
        question: "The angle between a tangent and radius at the point of contact is:",
        options: ["0°", "45°", "90°", "180°"],
        correct: 2,
        explanation: "Tangent ⊥ radius, so angle = 90°."
    },
    {
        question: "A point lies on the circle x² + y² = 25 if:",
        options: ["x² + y² = 5", "x² + y² = 10", "x² + y² = 25", "x + y = 25"],
        correct: 2,
        explanation: "The circle equation is x² + y² = 25."
    },
    {
        question: "The centre of x² + y² − 6x + 4y − 12 = 0 is:",
        options: ["(−3,2)", "(3,−2)", "(−3,−2)", "(3,2)"],
        correct: 1,
        explanation: "Complete square: (x−3)² + (y+2)² = 25 → centre (3,−2)."
    },
    {
        question: "The radius of the circle in Question 159 is:",
        options: ["3", "4", "5", "6"],
        correct: 2,
        explanation: "r² = 25 → r = 5."
    },

    // ============================================================
    // SECTION K — EUCLIDEAN GEOMETRY (161-170)
    // ============================================================
    {
        question: "The angle at the centre subtended by an arc is:",
        options: ["half the angle at the circumference", "twice the angle at the circumference", "equal to circumference angle", "always 90°"],
        correct: 1,
        explanation: "Angle at centre = 2 × angle at circumference."
    },
    {
        question: "Angles subtended by the same chord at the circumference are:",
        options: ["supplementary", "equal", "complementary", "unrelated"],
        correct: 1,
        explanation: "Angles in the same segment are equal."
    },
    {
        question: "The angle in a semicircle is:",
        options: ["30°", "45°", "90°", "180°"],
        correct: 2,
        explanation: "An angle in a semicircle is 90°."
    },
    {
        question: "Opposite angles of a cyclic quadrilateral are:",
        options: ["equal", "supplementary", "complementary", "always 90°"],
        correct: 1,
        explanation: "Opposite angles of a cyclic quadrilateral sum to 180°."
    },
    {
        question: "If one angle of a cyclic quadrilateral is 110°, its opposite angle is:",
        options: ["70°", "80°", "90°", "110°"],
        correct: 0,
        explanation: "Opposite angles sum to 180° → 180° − 110° = 70°."
    },
    {
        question: "The tangent-chord theorem relates:",
        options: ["tangent and chord angle to angle in alternate segment", "radius to diameter", "area to circumference", "two parallel lines only"],
        correct: 0,
        explanation: "The tangent-chord theorem: angle between tangent and chord equals angle in alternate segment."
    },
    {
        question: "If the angle between tangent and chord is 50°, the angle in the alternate segment is:",
        options: ["25°", "40°", "50°", "100°"],
        correct: 2,
        explanation: "The angle in the alternate segment equals the tangent-chord angle."
    },
    {
        question: "Tangents drawn from the same external point to a circle are:",
        options: ["unequal", "equal", "perpendicular", "parallel"],
        correct: 1,
        explanation: "Tangents from the same point are equal in length."
    },
    {
        question: "If PA and PB are tangents from P and PA = 12 cm, then PB is:",
        options: ["6 cm", "10 cm", "12 cm", "24 cm"],
        correct: 2,
        explanation: "Tangents from the same point are equal."
    },
    {
        question: "A radius drawn to the point where a tangent touches a circle is:",
        options: ["parallel to tangent", "perpendicular to tangent", "equal to tangent", "unrelated"],
        correct: 1,
        explanation: "The radius is perpendicular to the tangent at the point of contact."
    },

    // ============================================================
    // SECTION L — PROBABILITY (171-180)
    // ============================================================
    {
        question: "The probability of an impossible event is:",
        options: ["0", "0.5", "1", "2"],
        correct: 0,
        explanation: "P(impossible) = 0."
    },
    {
        question: "The probability of a certain event is:",
        options: ["0", "0.25", "0.5", "1"],
        correct: 3,
        explanation: "P(certain) = 1."
    },
    {
        question: "If P(A) = 0.3, then P(A') =",
        options: ["0.3", "0.5", "0.7", "1.3"],
        correct: 2,
        explanation: "P(A') = 1 − 0.3 = 0.7."
    },
    {
        question: "For mutually exclusive events A and B:",
        options: ["P(A ∩ B) = 1", "P(A ∩ B) = 0", "P(A) = P(B)", "P(A + B) = 0"],
        correct: 1,
        explanation: "Mutually exclusive events cannot occur together, so P(A ∩ B) = 0."
    },
    {
        question: "If P(A) = 0.4, P(B) = 0.5, and A and B are mutually exclusive, P(A ∪ B) is:",
        options: ["0.1", "0.2", "0.9", "1.0"],
        correct: 2,
        explanation: "P(A ∪ B) = P(A) + P(B) = 0.4 + 0.5 = 0.9."
    },
    {
        question: "If A and B are independent:",
        options: ["P(A ∩ B) = P(A) + P(B)", "P(A ∩ B) = P(A)P(B)", "P(A ∩ B) = 0", "P(A) = P(B)"],
        correct: 1,
        explanation: "For independent events, P(A ∩ B) = P(A)P(B)."
    },
    {
        question: "If P(A) = 0.6 and P(B) = 0.5 and they are independent, P(A ∩ B) =",
        options: ["0.1", "0.3", "0.5", "1.1"],
        correct: 1,
        explanation: "P(A ∩ B) = 0.6 × 0.5 = 0.3."
    },
    {
        question: "A fair die is rolled. Probability of getting an even number is:",
        options: ["1/6", "1/3", "1/2", "2/3"],
        correct: 2,
        explanation: "Even numbers: 2,4,6 → 3/6 = 1/2."
    },
    {
        question: "A card is randomly selected from a standard 52-card deck. Probability of an ace is:",
        options: ["1/52", "1/26", "4/52", "13/52"],
        correct: 2,
        explanation: "There are 4 aces → 4/52."
    },
    {
        question: "A bag contains 3 red and 2 blue balls. Probability of selecting red is:",
        options: ["2/5", "3/5", "1/2", "3/2"],
        correct: 1,
        explanation: "P(red) = 3/5."
    },

    // ============================================================
    // SECTION M — CONDITIONAL PROBABILITY (181-190)
    // ============================================================
    {
        question: "Conditional probability P(A|B) is:",
        options: ["P(A∩B)/P(B)", "P(A)+P(B)", "P(A)P(B)", "P(A)−P(B)"],
        correct: 0,
        explanation: "P(A|B) = P(A∩B)/P(B)."
    },
    {
        question: "If P(A∩B) = 0.2 and P(B) = 0.5, then P(A|B) =",
        options: ["0.1", "0.2", "0.4", "0.7"],
        correct: 2,
        explanation: "P(A|B) = 0.2/0.5 = 0.4."
    },
    {
        question: "If two events are independent:",
        options: ["P(A|B) = P(A)", "P(A|B) = 0", "P(A|B) = 1", "P(A|B) = P(B) always"],
        correct: 0,
        explanation: "For independent events, P(A|B) = P(A)."
    },
    {
        question: "A tree diagram is especially useful for:",
        options: ["differentiation", "compound probability", "coordinate geometry", "financial depreciation only"],
        correct: 1,
        explanation: "Tree diagrams are used for compound probability."
    },
    {
        question: "A fair coin is tossed twice. Probability of getting two heads is:",
        options: ["1/4", "1/2", "3/4", "1"],
        correct: 0,
        explanation: "P(HH) = 1/2 × 1/2 = 1/4."
    },
    {
        question: "A fair die is rolled twice. Probability of getting two sixes is:",
        options: ["1/6", "1/12", "1/36", "2/6"],
        correct: 2,
        explanation: "P(6,6) = 1/6 × 1/6 = 1/36."
    },
    {
        question: "The probability of at least one head when a fair coin is tossed twice is:",
        options: ["1/4", "1/2", "3/4", "1"],
        correct: 2,
        explanation: "P(at least one head) = 1 − P(no heads) = 1 − 1/4 = 3/4."
    },
    {
        question: "The complement of 'at least one success' is:",
        options: ["exactly one success", "no successes", "two successes", "all successes"],
        correct: 1,
        explanation: "The complement of 'at least one' is 'none'."
    },
    {
        question: "If the probability of rain is 0.25, the probability of no rain is:",
        options: ["0.25", "0.5", "0.75", "1.25"],
        correct: 2,
        explanation: "P(no rain) = 1 − 0.25 = 0.75."
    },
    {
        question: "If P(A) = 0.7 and P(B|A) = 0.4, then P(A∩B) =",
        options: ["0.28", "0.3", "0.4", "1.1"],
        correct: 0,
        explanation: "P(A∩B) = P(A)P(B|A) = 0.7 × 0.4 = 0.28."
    },

    // ============================================================
    // SECTION N — STATISTICS (191-200)
    // ============================================================
    {
        question: "The mean of 2, 4, 6, 8, 10 is:",
        options: ["5", "6", "7", "8"],
        correct: 1,
        explanation: "Mean = (2+4+6+8+10)/5 = 30/5 = 6."
    },
    {
        question: "The median of 3, 7, 9, 12, 15 is:",
        options: ["7", "8", "9", "12"],
        correct: 2,
        explanation: "Median is the middle value: 9."
    },
    {
        question: "The mode is:",
        options: ["middle value", "most frequent value", "largest value", "smallest value"],
        correct: 1,
        explanation: "The mode is the most frequently occurring value."
    },
    {
        question: "The range of 4, 7, 12, 15, 20 is:",
        options: ["15", "16", "20", "24"],
        correct: 0,
        explanation: "Range = 20 − 4 = 16."
    },
    {
        question: "The interquartile range is:",
        options: ["Q₁ + Q₃", "Q₃ − Q₁", "Q₃/Q₁", "Q₁ − Q₃"],
        correct: 1,
        explanation: "Interquartile range = Q₃ − Q₁."
    },
    {
        question: "A data set with a large standard deviation is:",
        options: ["tightly clustered around the mean", "more spread out", "always normally distributed", "necessarily skewed"],
        correct: 1,
        explanation: "A large standard deviation indicates greater spread."
    },
    {
        question: "In a perfectly symmetric distribution:",
        options: ["mean = median", "mean > median always", "mean < median always", "mode = 0 always"],
        correct: 0,
        explanation: "In a symmetric distribution, mean = median."
    },
    {
        question: "A positive correlation means:",
        options: ["as one variable increases, the other tends to increase", "both variables decrease", "there is no relationship", "one variable must remain constant"],
        correct: 0,
        explanation: "Positive correlation: variables move in the same direction."
    },
    {
        question: "A correlation coefficient close to −1 indicates:",
        options: ["strong positive correlation", "strong negative correlation", "no correlation", "perfect randomness"],
        correct: 1,
        explanation: "r = −1 indicates perfect negative correlation."
    },
    {
        question: "A correlation coefficient r = 0.95 indicates:",
        options: ["strong negative correlation", "weak negative correlation", "strong positive correlation", "no relationship"],
        correct: 2,
        explanation: "r = 0.95 is close to 1, indicating strong positive correlation."
    }
];



window.SUBJECT_QUESTIONS = window.SUBJECT_QUESTIONS || {};
window.SUBJECT_QUESTIONS['mathematics'] = MATHEMATICS_QUESTIONS;
console.log('✅ Mathematics loaded:', window.SUBJECT_QUESTIONS['mathematics'].length, 'questions');