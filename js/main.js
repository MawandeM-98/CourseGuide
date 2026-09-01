// ============================================================
// COURSEGUIDE - MAIN APP
// Plain Script - NO export
// ============================================================

// DOM elements
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// ----- THEME TOGGLE -----
var currentTheme = 'glass'; // 'glass' or 'blue'

function setTheme(theme) {
    currentTheme = theme;
    body.classList.remove('theme-glass', 'theme-blue');
    if (theme === 'glass') {
        body.classList.add('theme-glass');
        themeToggle.innerHTML = '🌙';
    } else {
        body.classList.add('theme-blue');
        themeToggle.innerHTML = '☀️';
    }
    localStorage.setItem('courseguide_theme', theme);
}

function toggleTheme() {
    var newTheme = currentTheme === 'glass' ? 'blue' : 'glass';
    setTheme(newTheme);
}

// Load saved theme
function loadTheme() {
    var saved = localStorage.getItem('courseguide_theme');
    if (saved === 'blue') {
        setTheme('blue');
    } else {
        setTheme('glass');
    }
}

// ----- INIT -----
function init() {
    // Load theme
    loadTheme();

    // Initialize authentication
    initAuth();

    // Render subject cards
    renderCards();

    // Initialize quiz
    initQuiz();

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    console.log('📚 CourseGuide loaded successfully!');
}

// Start app when DOM is ready
document.addEventListener('DOMContentLoaded', init);