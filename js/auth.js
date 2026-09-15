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
// SESSION MANAGEMENT
// ============================================================
function checkSession() {
    var session = sessionStorage.getItem('courseguide_session');
    if (session === 'authenticated') {
        showInfo();
        return true;
    }
    return false;
}

// ============================================================
// SCREEN NAVIGATION
// ============================================================
function showInfo() {
    loginScreen.classList.remove('active');
    infoScreen.classList.add('active');
    appScreen.classList.remove('active');
}

function showApp() {
    loginScreen.classList.remove('active');
    infoScreen.classList.remove('active');
    appScreen.classList.add('active');
}

// ============================================================
// LOGIN HANDLER
// ============================================================
function handleLogin() {
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();

    loginError.classList.add('hidden');

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        // Remember me
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('courseguide_username', username);
        } else {
            localStorage.removeItem('courseguide_username');
        }

        // Set session
        sessionStorage.setItem('courseguide_session', 'authenticated');

        // Go to info screen
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
    sessionStorage.removeItem('courseguide_session');
    appScreen.classList.remove('active');
    infoScreen.classList.remove('active');
    loginScreen.classList.add('active');
    passwordInput.value = '';
    loginError.classList.add('hidden');
}

// ============================================================
// INITIALIZATION
// ============================================================
function initAuth() {
    // Check if session exists
    if (checkSession()) {
        return;
    }

    // Pre-fill remembered username
    var remembered = localStorage.getItem('courseguide_username');
    if (remembered) {
        usernameInput.value = remembered;
        rememberMeCheckbox.checked = true;
    }

    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleLogin();
    });

    // Enter key on password field
    passwordInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleLogin();
        }
    });

    // Logout button
    logoutBtn.addEventListener('click', function() {
        logout();
    });

    // Next button (info screen → app screen)
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            showApp();
        });
    }
}