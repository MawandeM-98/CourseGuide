// ============================================================
// COURSEGUIDE - DATA
// All subjects and their questions
// ============================================================

// Subject configuration
const SUBJECTS = [
    { id: 'mathematics', name: 'Mathematics', icon: '📐', color: '#6c63ff' },
    { id: 'geography', name: 'Geography', icon: '🌍', color: '#2ecc71' },
    { id: 'life-sciences', name: 'Life Sciences', icon: '🧬', color: '#e74c3c' },
    { id: 'physics', name: 'Physics', icon: '⚡', color: '#f39c12' },
    { id: 'accounting', name: 'Accounting', icon: '💰', color: '#3498db' },
    { id: 'business-studies', name: 'Business Studies', icon: '📊', color: '#9b59b6' }
];

// Questions for each subject
const QUESTIONS = {
    mathematics: [
        {
            question: "What is the value of (2 + 3) × 4?",
            options: ["12", "16", "20", "24"],
            correct: 2,
            explanation: "First solve the brackets: 2 + 3 = 5, then multiply by 4: 5 × 4 = 20."
        },
        {
            question: "What is the square root of 144?",
            options: ["10", "11", "12", "13"],
            correct: 2,
            explanation: "12 × 12 = 144, so the square root of 144 is 12."
        },
        {
            question: "What is 15% of 200?",
            options: ["25", "30", "35", "40"],
            correct: 1,
            explanation: "15% of 200 = (15/100) × 200 = 30."
        }
    ],
    geography: [
        {
            question: "What is the capital of South Africa?",
            options: ["Cape Town", "Pretoria", "Johannesburg", "Durban"],
            correct: 1,
            explanation: "Pretoria is the administrative capital of South Africa."
        },
        {
            question: "Which ocean borders South Africa to the east?",
            options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Southern Ocean"],
            correct: 2,
            explanation: "The Indian Ocean borders South Africa to the east."
        },
        {
            question: "What is the longest river in Africa?",
            options: ["Congo River", "Niger River", "Nile River", "Zambezi River"],
            correct: 2,
            explanation: "The Nile River is the longest river in Africa."
        }
    ],
    'life-sciences': [
        {
            question: "What is the basic unit of life?",
            options: ["Atom", "Molecule", "Cell", "Tissue"],
            correct: 2,
            explanation: "The cell is the basic unit of life."
        },
        {
            question: "What process do plants use to make their own food?",
            options: ["Respiration", "Photosynthesis", "Fermentation", "Transpiration"],
            correct: 1,
            explanation: "Photosynthesis is the process where plants use sunlight, water, and carbon dioxide to make food."
        },
        {
            question: "Which organ pumps blood throughout the human body?",
            options: ["Liver", "Lungs", "Heart", "Brain"],
            correct: 2,
            explanation: "The heart is the organ responsible for pumping blood."
        }
    ],
    physics: [
        {
            question: "What is the SI unit of force?",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            correct: 1,
            explanation: "The SI unit of force is the Newton (N)."
        },
        {
            question: "What is the speed of light approximately?",
            options: ["300,000 km/s", "150,000 km/s", "600,000 km/s", "30,000 km/s"],
            correct: 0,
            explanation: "The speed of light is approximately 300,000 km/s."
        },
        {
            question: "What is the law of inertia also known as?",
            options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravity"],
            correct: 0,
            explanation: "Newton's First Law is also known as the law of inertia."
        }
    ],
    accounting: [
        {
            question: "What is the accounting equation?",
            options: ["Assets = Liabilities + Expenses", "Assets = Liabilities + Owner's Equity", "Assets = Revenue - Expenses", "Liabilities = Assets + Owner's Equity"],
            correct: 1,
            explanation: "The accounting equation is: Assets = Liabilities + Owner's Equity."
        },
        {
            question: "What is a debit?",
            options: ["Money going out of an account", "Money coming into an account", "A type of credit", "A financial statement"],
            correct: 0,
            explanation: "A debit is an entry that increases assets or decreases liabilities."
        },
        {
            question: "What is the purpose of a trial balance?",
            options: ["To calculate profit", "To check if debits equal credits", "To prepare financial statements", "To list all expenses"],
            correct: 1,
            explanation: "A trial balance verifies that total debits equal total credits."
        }
    ],
    'business-studies': [
        {
            question: "What is a sole proprietorship?",
            options: ["A business owned by one person", "A business owned by two or more people", "A business with shareholders", "A government-owned business"],
            correct: 0,
            explanation: "A sole proprietorship is a business owned and operated by one person."
        },
        {
            question: "What is a SWOT analysis used for?",
            options: ["Financial planning", "Strategic analysis", "Marketing research", "Accounting"],
            correct: 1,
            explanation: "SWOT analysis is used for strategic planning: Strengths, Weaknesses, Opportunities, Threats."
        },
        {
            question: "What is the primary goal of most businesses?",
            options: ["Profit maximization", "Customer satisfaction", "Employee happiness", "Environmental protection"],
            correct: 0,
            explanation: "The primary goal of most businesses is to maximize profit."
        }
    ]
};

const QUESTIONS_PER_QUIZ = 10;

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getRandomQuestions(subjectId, count) {
    count = count || QUESTIONS_PER_QUIZ;
    const allQuestions = QUESTIONS[subjectId] || [];
    const shuffled = shuffleArray(allQuestions);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}