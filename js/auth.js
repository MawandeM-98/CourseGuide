// ============================================================
// COURSEGUIDE - AUTHENTICATION
// ============================================================

const VALID_USERNAME = 'learner';
const VALID_PASSWORD = 'learner123';

var loginScreen = document.getElementById('loginScreen');
var infoScreen = document.getElementById('infoScreen');
var appScreen = document.getElementById('appScreen');
var loginForm = document.getElementById('loginForm');
var loginError = document.getElementById('loginError');
var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
var rememberMeCheckbox = document.getElementById('rememberMe');
var logoutBtn = document.getElementById('logoutBtn');
var nextBtn = document.getElementById('nextBtn');

// ============================================================
// SESSION STATE
// Tracks WHERE the user is, not just IF they are logged in
// ============================================================
const SESSION_KEY = 'courseguide_session';
const SCREEN_KEY = 'courseguide_screen';

function isAuthenticated() {
    return sessionStorage.getItem(SESSION_KEY) === 'authenticated';
}

function getCurrentScreen() {
    return sessionStorage.getItem(SCREEN_KEY) || 'login';
}

function setCurrentScreen(screenName) {
    sessionStorage.setItem(SCREEN_KEY, screenName);
}

// ============================================================
// SCREEN NAVIGATION
// ============================================================
function showLogin() {
    loginScreen.classList.add('active');
    infoScreen.classList.remove('active');
    appScreen.classList.remove('active');
}

function showInfo() {
    loginScreen.classList.remove('active');
    infoScreen.classList.add('active');
    appScreen.classList.remove('active');
    setCurrentScreen('info');
}

function showApp() {
    loginScreen.classList.remove('active');
    infoScreen.classList.remove('active');
    appScreen.classList.add('active');
    setCurrentScreen('app');
}

// ============================================================
// SESSION CHECK — Restores the correct screen
// ============================================================
function checkSession() {
    if (!isAuthenticated()) {
        showLogin();
        return false;
    }

    // User is logged in — restore their LAST screen
    var screen = getCurrentScreen();
    if (screen === 'app') {
        showApp();
    } else {
        showInfo();
    }
    return true;
}

// ============================================================
// LOGIN HANDLER
// ============================================================
function handleLogin() {
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();

    loginError.classList.add('hidden');

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('courseguide_username', username);
        } else {
            localStorage.removeItem('courseguide_username');
        }

        sessionStorage.setItem(SESSION_KEY, 'authenticated');
        showInfo();
    } else {
        loginError.classList.remove('hidden');
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// ============================================================
// LOGOUT HANDLER
// ============================================================
function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SCREEN_KEY);
    showLogin();
    passwordInput.value = '';
    loginError.classList.add('hidden');
}

// ============================================================
// INITIALIZATION
// ============================================================
function initAuth() {
    // Pre-fill remembered username
    var remembered = localStorage.getItem('courseguide_username');
    if (remembered) {
        usernameInput.value = remembered;
        rememberMeCheckbox.checked = true;
    }

    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }

    // Enter key on password field
    if (passwordInput) {
        passwordInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleLogin();
            }
        });
    }

    // Logout button
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            logout();
        });
    }

    // ✅ NEXT button — bound unconditionally, always works
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('✅ Next button clicked → going to app');
            showApp();
        });
    }

    // ✅ Restore previous screen if logged in
    checkSession();
}