// ============================================================
// COURSEGUIDE - QUIZ ENGINE
// ============================================================

import { SUBJECTS, getRandomQuestions, QUESTIONS_PER_QUIZ } from './data.js';

// State
let currentSubject = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;
let isAnswered = false;

// DOM elements
const cardsGrid = document.getElementById('cardsGrid');
const subjectsView = document.getElementById('subjectsView');
const quizView = document.getElementById('quizView');
const quizSubjectTitle = document.getElementById('quizSubjectTitle');
const questionContainer = document.getElementById('questionContainer');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const quizScore = document.getElementById('quizScore');
const backToSubjectsBtn = document.getElementById('backToSubjects');

// Render subject cards
export function renderCards() {
    cardsGrid.innerHTML = '';
    SUBJECTS.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.subject = subject.id;
        card.innerHTML = `
            <span class="card-icon">${subject.icon}</span>
            <h3 class="card-title">${subject.name}</h3>
            <span class="card-subject">Click to start quiz</span>
        `;
        card.addEventListener('click', () => startQuiz(subject.id));
        cardsGrid.appendChild(card);
    });
}

// Start a quiz for a subject
function startQuiz(subjectId) {
    const subject = SUBJECTS.find(s => s.id === subjectId);
    if (!subject) return;

    currentSubject = subject;
    currentQuestions = getRandomQuestions(subjectId);
    
    if (currentQuestions.length === 0) {
        alert('No questions available for this subject yet. Please add questions in data.js.');
        return;
    }

    totalQuestions = currentQuestions.length;
    currentQuestionIndex = 0;
    score = 0;
    isAnswered = false;

    // Switch view
    subjectsView.classList.remove('active');
    quizView.classList.add('active');
    quizSubjectTitle.textContent = subject.name;

    renderQuestion();
}

// Render current question
function renderQuestion() {
    if (currentQuestionIndex >= totalQuestions) {
        showResults();
        return;
    }

    const q = currentQuestions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    isAnswered = false;

    // Update progress
    const progress = (currentQuestionIndex / totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Question ${questionNumber} of ${totalQuestions}`;
    quizScore.textContent = `Score: ${score} / ${totalQuestions}`;

    const letters = ['A', 'B', 'C', 'D'];
    let html = `
        <div class="question-text">${q.question}</div>
        <div class="options-grid" id="optionsGrid">
    `;
    
    q.options.forEach((option, index) => {
        html += `
            <button class="option-btn" data-index="${index}">
                <span class="option-letter">${letters[index]}.</span> ${option}
            </button>
        `;
    });

    html += `
        </div>
        <div class="explanation-box" id="explanationBox"></div>
        <button class="next-btn" id="nextQuestionBtn" style="display:none;">Next Question →</button>
    `;

    questionContainer.innerHTML = html;

    // Add event listeners to options
    const optionButtons = questionContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
    });

    // Next button
    const nextBtn = document.getElementById('nextQuestionBtn');
    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        renderQuestion();
    });
}

// Handle answer selection
function handleAnswer(selectedIndex) {
    if (isAnswered) return;
    isAnswered = true;

    const q = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === q.correct;
    
    if (isCorrect) score++;

    // Disable all options
    const optionBtns = questionContainer.querySelectorAll('.option-btn');
    optionBtns.forEach((btn, i) => {
        btn.disabled = true;
        const index = parseInt(btn.dataset.index);
        if (index === q.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('wrong');
        }
        if (index === selectedIndex) {
            btn.classList.add('selected');
        }
    });

    // Show explanation
    const explanationBox = document.getElementById('explanationBox');
    const resultText = isCorrect ? '✅ Correct!' : '❌ Incorrect.';
    explanationBox.innerHTML = `
        <strong>${resultText}</strong>
        <p style="margin-top: 8px;">${q.explanation}</p>
    `;
    explanationBox.classList.add('visible');

    // Show next button
    document.getElementById('nextQuestionBtn').style.display = 'block';

    // Update score display
    quizScore.textContent = `Score: ${score} / ${totalQuestions}`;
}

// Show results at the end of quiz
function showResults() {
    const percentage = Math.round((score / totalQuestions) * 100);
    let emoji = '😊';
    let message = 'Good effort! Keep learning!';
    if (percentage >= 80) { emoji = '🌟'; message = 'Excellent! You\'re a star!'; }
    else if (percentage >= 60) { emoji = '👏'; message = 'Great work! Keep going!'; }
    else if (percentage >= 40) { emoji = '📚'; message = 'Keep practicing, you\'re getting there!'; }
    else { emoji = '💪'; message = 'Don\'t give up! Review and try again!'; }

    // Update progress to full
    progressFill.style.width = '100%';
    progressText.textContent = 'Quiz Complete! 🎉';

    const letters = ['A', 'B', 'C', 'D'];
    let html = `
        <div style="text-align: center; padding: 20px 0;">
            <div style="font-size: 64px; margin-bottom: 16px;">${emoji}</div>
            <h2 style="font-size: 24px; margin-bottom: 8px;">Quiz Complete!</h2>
            <p style="font-size: 18px; margin-bottom: 4px;">${message}</p>
            <p style="font-size: 32px; font-weight: 700; margin: 16px 0;">${score} / ${totalQuestions}</p>
            <p style="font-size: 16px; opacity: 0.6;">${percentage}% correct</p>
            <button class="next-btn" id="retryQuizBtn" style="display: inline-block; margin-top: 16px;">🔄 Try Again</button>
            <button class="next-btn" id="backToSubjectsFromQuiz" style="display: inline-block; margin-top: 16px; margin-left: 12px; background: rgba(255,255,255,0.1);">📚 Back to Subjects</button>
        </div>
    `;

    // Show review of questions
    html += `<div style="margin-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px;">`;
    html += `<h3 style="margin-bottom: 16px;">Review Your Answers</h3>`;
    currentQuestions.forEach((q, i) => {
        const userCorrect = q.correct === q.userAnswer; // We need to track user answers
        // For simplicity, we'll show the correct answer
        html += `
            <div style="padding: 12px 16px; margin-bottom: 10px; border-radius: 10px; background: rgba(255,255,255,0.04);">
                <p style="font-weight: 500; margin-bottom: 4px;">Q${i+1}: ${q.question}</p>
                <p style="font-size: 14px; opacity: 0.7;">✅ Correct answer: ${q.options[q.correct]}</p>
            </div>
        `;
    });
    html += `</div>`;

    questionContainer.innerHTML = html;

    document.getElementById('retryQuizBtn')?.addEventListener('click', () => startQuiz(currentSubject.id));
    document.getElementById('backToSubjectsFromQuiz')?.addEventListener('click', goBackToSubjects);
}

// Go back to subjects view
function goBackToSubjects() {
    quizView.classList.remove('active');
    subjectsView.classList.add('active');
}

// Initialize quiz events
export function initQuiz() {
    backToSubjectsBtn.addEventListener('click', goBackToSubjects);
}