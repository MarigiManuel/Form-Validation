const registrationForm = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear previous error messages
    clearErrors();

    // Validate name
    if (nameInput.value.trim() === '') {
        displayError(nameError, 'Name is required');
    }

    // Validate email
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        displayError(emailError, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        displayError(emailError, 'Invalid email format');
    }

    // Validate password
    const passwordValue = passwordInput.value.trim();
    if (passwordValue === '') {
        displayError(passwordError, 'Password is required');
    } else if (passwordValue.length < 8) {
        displayError(passwordError, 'Password must be at least 8 characters');
    }

    // If there are no errors, the form is valid
    if (!nameError.textContent && !emailError.textContent && !passwordError.textContent) {
        alert('Registration successful!');
        registrationForm.reset();
    }
});

function displayError(element, message) {
    element.textContent = message;
}

function clearErrors() {
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
}

function isValidEmail(email) {
    // A simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
