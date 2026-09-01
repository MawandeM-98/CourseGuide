// ============================================================
// COURSEGUIDE - AUTHENTICATION
// Login logic - FIXED (Plain Script)
// ============================================================

const VALID_USERNAME = 'learner';
const VALID_PASSWORD = 'learner123';

// DOM elements
const loginScreen = document.getElementById('loginScreen');
const appScreen = document.getElementById('appScreen');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('rememberMe');
const logoutBtn = document.getElementById('logoutBtn');

// Check if user was previously logged in
function checkSession() {
    const session = sessionStorage.getItem('courseguide_session');
    if (session === 'authenticated') {
        showApp();
        return true;
    }
    return false;
}

// Show the main app
function showApp() {
    loginScreen.classList.remove('active');
    appScreen.classList.add('active');
}

// Handle login
function handleLogin() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Clear previous error
    loginError.classList.add('hidden');

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        // Success
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('courseguide_username', username);
        } else {
            localStorage.removeItem('courseguide_username');
        }

        sessionStorage.setItem('courseguide_session', 'authenticated');
        showApp();
    } else {
        // Fail - show error
        loginError.classList.remove('hidden');
        passwordInput.value = '';
        passwordInput.focus();
    }
}

function logout() {
    sessionStorage.removeItem('courseguide_session');
    appScreen.classList.remove('active');
    loginScreen.classList.add('active');
    passwordInput.value = '';
    loginError.classList.add('hidden');
}

// Initialize auth
function initAuth() {
    // Check session on load
    if (checkSession()) {
        return;
    }

    // Check for remembered username
    const remembered = localStorage.getItem('courseguide_username');
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
}