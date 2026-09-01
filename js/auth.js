// ============================================================
// COURSEGUIDE - AUTHENTICATION
// Login logic - FIXED
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

// Check if user was previously logged in (session storage)
export function checkSession() {
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
export function initAuth() {
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

    // Enter key also works
    passwordInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleLogin();
        }
    });

    // Logout
    logoutBtn.addEventListener('click', function() {
        logout();
    });
}

function handleLogin() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Clear previous error
    loginError.classList.add('hidden');

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        // Success
        // Remember me
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('courseguide_username', username);
        } else {
            localStorage.removeItem('courseguide_username');
        }

        // Set session
        sessionStorage.setItem('courseguide_session', 'authenticated');
        
        showApp();
    } else {
        // Fail
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
    // Keep remembered username
}