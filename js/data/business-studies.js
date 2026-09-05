// ============================================================
// BUSINESS STUDIES — Placeholder Questions
// ============================================================

const BUSINESS_STUDIES_QUESTIONS = [
    {
        question: "Which business form has unlimited liability for its single owner?",
        options: ["Company", "Sole trader", "Cooperative", "Partnership"],
        correct: 1,
        explanation: "A sole trader has unlimited liability, meaning personal assets can be used to cover business debts."
    },
    {
        question: "The 4 Ps of the marketing mix are:",
        options: ["Product, Price, Place, Promotion", "Plan, Price, People, Profit", "Product, Profit, Place, People", "Price, Plan, Product, Promotion"],
        correct: 0,
        explanation: "The traditional marketing mix consists of Product, Price, Place and Promotion."
    },
    {
        question: "Which leadership style involves the leader making decisions with little input from employees?",
        options: ["Democratic", "Autocratic", "Laissez-faire", "Participative"],
        correct: 1,
        explanation: "An autocratic leader makes decisions unilaterally with minimal employee input."
    },
    {
        question: "SWOT analysis stands for:",
        options: ["Sales, Wages, Output, Tax", "Strengths, Weaknesses, Opportunities, Threats", "Supply, Wants, Output, Trade", "Strategy, Work, Objectives, Targets"],
        correct: 1,
        explanation: "SWOT analysis examines Strengths, Weaknesses, Opportunities and Threats."
    },
    {
        question: "Which of the following is a fixed cost?",
        options: ["Raw materials", "Rent", "Sales commission", "Packaging per unit"],
        correct: 1,
        explanation: "Rent stays the same regardless of production output, making it a fixed cost."
    }
];

window.SUBJECT_QUESTIONS = window.SUBJECT_QUESTIONS || {};
window.SUBJECT_QUESTIONS['business-studies'] = BUSINESS_STUDIES_QUESTIONS;
console.log('✅ Business Studies loaded:', window.SUBJECT_QUESTIONS['business-studies'].length, 'questions');