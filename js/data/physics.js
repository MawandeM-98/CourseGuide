// ============================================================
// PHYSICS — Placeholder Questions
// ============================================================

const PHYSICS_QUESTIONS = [
    {
        question: "What is the SI unit of force?",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        correct: 1,
        explanation: "Force is measured in Newtons (N), named after Isaac Newton."
    },
    {
        question: "According to Newton's First Law, an object at rest will:",
        options: ["accelerate on its own", "stay at rest unless acted on by a force", "always start moving", "lose mass over time"],
        correct: 1,
        explanation: "Newton's First Law (law of inertia) states an object remains at rest or in uniform motion unless acted on by an external force."
    },
    {
        question: "What is the formula for calculating speed?",
        options: ["speed = mass × velocity", "speed = distance ÷ time", "speed = force × time", "speed = energy ÷ mass"],
        correct: 1,
        explanation: "Speed is distance travelled divided by the time taken."
    },
    {
        question: "Which type of energy is stored in a stretched elastic band?",
        options: ["Kinetic energy", "Elastic potential energy", "Thermal energy", "Nuclear energy"],
        correct: 1,
        explanation: "Elastic potential energy is stored when an object such as an elastic band is stretched or compressed."
    },
    {
        question: "What happens to the resistance of a wire if its length is doubled (all else constant)?",
        options: ["It halves", "It stays the same", "It doubles", "It quadruples"],
        correct: 2,
        explanation: "Resistance is directly proportional to length, so doubling the length doubles the resistance."
    }
];

window.SUBJECT_QUESTIONS = window.SUBJECT_QUESTIONS || {};
window.SUBJECT_QUESTIONS['physics'] = PHYSICS_QUESTIONS;
console.log('✅ Physics loaded:', window.SUBJECT_QUESTIONS['physics'].length, 'questions');