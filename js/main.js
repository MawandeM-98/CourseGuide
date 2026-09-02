// ============================================================
// COURSEGUIDE - MAIN APP
// ============================================================

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

function init() {
    loadTheme();
    initAuth();
    renderCards();
    initQuiz();
    themeToggle.addEventListener('click', toggleTheme);
    console.log('📚 CourseGuide loaded successfully!');
}

document.addEventListener('DOMContentLoaded', init);