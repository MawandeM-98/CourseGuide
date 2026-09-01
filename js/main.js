// ============================================================
// COURSEGUIDE - MAIN APP
// ============================================================

import { renderCards, initQuiz } from './quiz.js';
import { initAuth, checkSession } from './auth.js';

// DOM elements
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// ----- THEME TOGGLE -----
let currentTheme = 'glass'; // 'glass' or 'blue'

function setTheme(theme) {
    currentTheme = theme;
    body.classList.remove('theme-glass', 'theme-blue');
    body.classList.add(theme === 'glass' ? 'theme-glass' : 'theme-blue');
    themeToggle.innerHTML = theme === 'glass' ? '🌙' : '☀️';
    localStorage.setItem('courseguide_theme', theme);
}

function toggleTheme() {
    const newTheme = currentTheme === 'glass' ? 'blue' : 'glass';
    setTheme(newTheme);
}

// Load saved theme
function loadTheme() {
    const saved = localStorage.getItem('courseguide_theme');
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