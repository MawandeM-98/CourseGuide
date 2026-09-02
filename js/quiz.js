// ============================================================
// COURSEGUIDE - QUIZ ENGINE
// ============================================================

let currentSubject = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;
let isAnswered = false;

const cardsGrid = document.getElementById('cardsGrid');
const subjectsView = document.getElementById('subjectsView');
const quizView = document.getElementById('quizView');
const quizSubjectTitle = document.getElementById('quizSubjectTitle');
const questionContainer = document.getElementById('questionContainer');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const quizScore = document.getElementById('quizScore');
const backToSubjectsBtn = document.getElementById('backToSubjects');
const searchInput = document.getElementById('searchInput');

// Render subject cards
function renderCards(filter) {
    cardsGrid.innerHTML = '';
    var filteredSubjects = SUBJECTS;

    if (filter) {
        var searchTerm = filter.toLowerCase().trim();
        filteredSubjects = SUBJECTS.filter(function(subject) {
            return subject.name.toLowerCase().includes(searchTerm);
        });
    }

    if (filteredSubjects.length === 0) {
        cardsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; opacity: 0.6;">
                No subjects found matching "${filter}"
            </div>
        `;
        return;
    }

    filteredSubjects.forEach(function(subject, index) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.subject = subject.id;
        // Staggered heartbeat delay
        var delay = (index % 3) * 0.5;
        card.style.animationDelay = delay + 's';
        card.innerHTML = `
            <span class="card-icon">${subject.icon}</span>
            <h3 class="card-title">${subject.name}</h3>
            <span class="card-subject">Click to start quiz</span>
        `;
        card.addEventListener('click', function() {
            startQuiz(subject.id);
        });
        cardsGrid.appendChild(card);
    });
}

// Search filter
function initSearch() {
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            renderCards(this.value);
        });
    }
}

// Start a quiz for a subject
function startQuiz(subjectId) {
    var subject = SUBJECTS.find(function(s) {
        return s.id === subjectId;
    });
    if (!subject) return;

    currentSubject = subject;
    currentQuestions = getRandomQuestions(subjectId);

    if (currentQuestions.length === 0) {
        alert('No questions available for this subject yet.');
        return;
    }

    totalQuestions = currentQuestions.length;
    currentQuestionIndex = 0;
    score = 0;
    isAnswered = false;

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

    var q = currentQuestions[currentQuestionIndex];
    var questionNumber = currentQuestionIndex + 1;
    isAnswered = false;

    var progress = (currentQuestionIndex / totalQuestions) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = 'Question ' + questionNumber + ' of ' + totalQuestions;
    quizScore.textContent = 'Score: ' + score + ' / ' + totalQuestions;

    var letters = ['A', 'B', 'C', 'D'];
    var html = `
        <div class="question-text">${q.question}</div>
        <div class="options-grid" id="optionsGrid">
    `;

    q.options.forEach(function(option, index) {
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

    var optionButtons = questionContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            handleAnswer(parseInt(btn.dataset.index));
        });
    });

    var nextBtn = document.getElementById('nextQuestionBtn');
    nextBtn.addEventListener('click', function() {
        currentQuestionIndex++;
        renderQuestion();
    });
}

// Handle answer selection
function handleAnswer(selectedIndex) {
    if (isAnswered) return;
    isAnswered = true;

    var q = currentQuestions[currentQuestionIndex];
    var isCorrect = selectedIndex === q.correct;

    if (isCorrect) score++;

    var optionBtns = questionContainer.querySelectorAll('.option-btn');
    optionBtns.forEach(function(btn, i) {
        btn.disabled = true;
        var index = parseInt(btn.dataset.index);
        if (index === q.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('wrong');
        }
        if (index === selectedIndex) {
            btn.classList.add('selected');
        }
    });

    var explanationBox = document.getElementById('explanationBox');
    var resultText = isCorrect ? '✅ Correct!' : '❌ Incorrect.';
    explanationBox.innerHTML = `
        <strong>${resultText}</strong>
        <p style="margin-top: 8px;">${q.explanation}</p>
    `;
    explanationBox.classList.add('visible');

    document.getElementById('nextQuestionBtn').style.display = 'block';
    quizScore.textContent = 'Score: ' + score + ' / ' + totalQuestions;
}

// Show results
function showResults() {
    var percentage = Math.round((score / totalQuestions) * 100);
    var emoji = '😊';
    var message = 'Good effort! Keep learning!';
    if (percentage >= 80) { emoji = '🌟'; message = 'Excellent! You\'re a star!'; }
    else if (percentage >= 60) { emoji = '👏'; message = 'Great work! Keep going!'; }
    else if (percentage >= 40) { emoji = '📚'; message = 'Keep practicing, you\'re getting there!'; }
    else { emoji = '💪'; message = 'Don\'t give up! Review and try again!'; }

    progressFill.style.width = '100%';
    progressText.textContent = 'Quiz Complete! 🎉';

    var html = `
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

    html += `<div style="margin-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px;">`;
    html += `<h3 style="margin-bottom: 16px;">Review Your Answers</h3>`;
    currentQuestions.forEach(function(q, i) {
        html += `
            <div style="padding: 12px 16px; margin-bottom: 10px; border-radius: 10px; background: rgba(255,255,255,0.04);">
                <p style="font-weight: 500; margin-bottom: 4px;">Q${i+1}: ${q.question}</p>
                <p style="font-size: 14px; opacity: 0.7;">✅ Correct answer: ${q.options[q.correct]}</p>
            </div>
        `;
    });
    html += `</div>`;

    questionContainer.innerHTML = html;

    document.getElementById('retryQuizBtn').addEventListener('click', function() {
        startQuiz(currentSubject.id);
    });
    document.getElementById('backToSubjectsFromQuiz').addEventListener('click', goBackToSubjects);
}

function goBackToSubjects() {
    quizView.classList.remove('active');
    subjectsView.classList.add('active');
}

function initQuiz() {
    backToSubjectsBtn.addEventListener('click', goBackToSubjects);
    initSearch();
}