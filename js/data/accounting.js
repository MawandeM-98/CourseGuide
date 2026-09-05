// ============================================================
// ACCOUNTING — Placeholder Questions
// ============================================================

const ACCOUNTING_QUESTIONS = [
    {
        question: "The accounting equation is:",
        options: ["Assets = Liabilities − Equity", "Assets = Liabilities + Equity", "Equity = Assets + Liabilities", "Liabilities = Assets + Equity"],
        correct: 1,
        explanation: "The fundamental accounting equation is Assets = Liabilities + Owner's Equity."
    },
    {
        question: "A debit entry in an asset account generally:",
        options: ["decreases the balance", "increases the balance", "has no effect", "closes the account"],
        correct: 1,
        explanation: "Asset accounts normally increase with a debit entry."
    },
    {
        question: "Which financial statement shows a business's profit or loss over a period?",
        options: ["Balance Sheet", "Income Statement", "Cash Flow Statement", "Trial Balance"],
        correct: 1,
        explanation: "The Income Statement (Statement of Comprehensive Income) reports revenue, expenses and resulting profit or loss."
    },
    {
        question: "Depreciation is best described as:",
        options: ["an increase in asset value", "the allocation of an asset's cost over its useful life", "a type of liability", "a cash payment only"],
        correct: 1,
        explanation: "Depreciation systematically allocates the cost of a tangible asset over its useful life."
    },
    {
        question: "A trial balance is used to:",
        options: ["record daily transactions", "check that total debits equal total credits", "calculate tax owed", "value inventory"],
        correct: 1,
        explanation: "A trial balance lists all ledger balances to confirm that total debits equal total credits."
    }
];

window.SUBJECT_QUESTIONS = window.SUBJECT_QUESTIONS || {};
window.SUBJECT_QUESTIONS['accounting'] = ACCOUNTING_QUESTIONS;
console.log('✅ Accounting loaded:', window.SUBJECT_QUESTIONS['accounting'].length, 'questions');