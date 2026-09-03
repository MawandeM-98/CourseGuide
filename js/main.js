// ============================================================
// COURSEGUIDE - MAIN APP
// ============================================================

// ----- SUBJECT CONFIGURATION (MUST BE FIRST) -----
const SUBJECTS = [
    { id: 'mathematics', name: 'Mathematics', icon: '📐', color: '#6c63ff' },
    { id: 'geography', name: 'Geography', icon: '🌍', color: '#2ecc71' },
    { id: 'life-sciences', name: 'Life Sciences', icon: '🧬', color: '#e74c3c' },
    { id: 'physics', name: 'Physics', icon: '⚡', color: '#f39c12' },
    { id: 'accounting', name: 'Accounting', icon: '💰', color: '#3498db' },
    { id: 'business-studies', name: 'Business Studies', icon: '📊', color: '#9b59b6' }
];

// Global registry for questions (populated by each subject file)
window.SUBJECT_QUESTIONS = window.SUBJECT_QUESTIONS || {};

// ----- THEME CONTROLS -----
var themeToggle = document.getElementById('themeToggle');
var body = document.body;
var currentTheme = 'glass'; // 'glass' or 'coffee'

function setTheme(theme) {
    currentTheme = theme;
    body.classList.remove('theme-glass', 'theme-coffee');
    if (theme === 'glass') {
        body.classList.add('theme-glass');
        themeToggle.innerHTML = '🌙';
    } else {
        body.classList.add('theme-coffee');
        themeToggle.innerHTML = '☕';
    }
    localStorage.setItem('courseguide_theme', theme);
}

function toggleTheme() {
    var newTheme = currentTheme === 'glass' ? 'coffee' : 'glass';
    setTheme(newTheme);
}

function loadTheme() {
    var saved = localStorage.getItem('courseguide_theme');
    if (saved === 'coffee') {
        setTheme('coffee');
    } else {
        setTheme('glass');
    }
}

// ----- INIT -----
function init() {
    loadTheme();
    initAuth();
    renderCards();      // Now SUBJECTS is defined
    initQuiz();
    themeToggle.addEventListener('click', toggleTheme);
    console.log('📚 CourseGuide loaded successfully!');
}

document.addEventListener('DOMContentLoaded', init);