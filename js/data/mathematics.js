// ============================================================
// MATHEMATICS — Placeholder Questions
// ============================================================

const MATHEMATICS_QUESTIONS = [
    {
        question: "Solve for x: 2x + 6 = 14",
        options: ["x = 2", "x = 4", "x = 6", "x = 8"],
        correct: 1,
        explanation: "2x + 6 = 14 → 2x = 8 → x = 4."
    },
    {
        question: "What is the value of π (pi) rounded to two decimal places?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        correct: 1,
        explanation: "π ≈ 3.14159..., which rounds to 3.14."
    },
    {
        question: "What is the gradient of a straight line given by y = 3x + 5?",
        options: ["3", "5", "8", "1/3"],
        correct: 0,
        explanation: "In y = mx + c form, m (the gradient) is 3."
    },
    {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "14"],
        correct: 2,
        explanation: "12 × 12 = 144."
    },
    {
        question: "What is the sum of the interior angles of a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        correct: 1,
        explanation: "The interior angles of any triangle always sum to 180°."
    }
];

window.SUBJECT_QUESTIONS = window.SUBJECT_QUESTIONS || {};
window.SUBJECT_QUESTIONS['mathematics'] = MATHEMATICS_QUESTIONS;
console.log('✅ Mathematics loaded:', window.SUBJECT_QUESTIONS['mathematics'].length, 'questions');