// ============================================================
// COURSEGUIDE - MAIN APP
// ============================================================

const SUBJECTS = [
    { id: 'life-sciences', name: 'Life Sciences', icon: '🧬', color: '#e74c3c' },
    { id: 'geography', name: 'Geography', icon: '🌍', color: '#2ecc71' },
    { id: 'mathematics', name: 'Mathematics', icon: '📐', color: '#6c63ff' },
    { id: 'physics', name: 'Physics', icon: '⚡', color: '#f39c12' },
    { id: 'accounting', name: 'Accounting', icon: '💰', color: '#3498db' },
    { id: 'business-studies', name: 'Business Studies', icon: '📊', color: '#9b59b6' }
];

// Global registry
window.SUBJECT_QUESTIONS = window.SUBJECT_QUESTIONS || {};

var themeToggle = document.getElementById('themeToggle');
var body = document.body;
var currentTheme = 'glass';

function setTheme(theme) {
    currentTheme = theme;
    body.classList.remove('theme-glass', 'theme-coffee');
    if (theme === 'glass') {
        body.classList.add('theme-glass');
        themeToggle.innerHTML = '🌙';
    } else {
        body.classList.add('theme-coffee');
        themeToggle.innerHTML = '☁️';
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

function init() {
    loadTheme();
    initAuth();
    renderCards();
    initQuiz();
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    console.log('📚 CourseGuide loaded successfully!');
    console.log('📦 Subjects available:', Object.keys(window.SUBJECT_QUESTIONS));
}

document.addEventListener('DOMContentLoaded', init);