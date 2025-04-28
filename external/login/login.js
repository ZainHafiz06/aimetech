document.addEventListener('DOMContentLoaded', () => {
    // Tab switching
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.tab;

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetId) {
                    content.classList.add('active');
                }
            });

            // Clear any existing error messages
            hideError();
        });
    });

    // Form validation and submission
    const signInForm = document.getElementById('signin-form');
    const signUpForm = document.getElementById('signup-form');

    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;

        // Basic validation
        if (!validateEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }

        if (password.length < 8) {
            showError('Password must be at least 8 characters');
            return;
        }

        // Here you would typically make an API call to your backend
        console.log('Sign in:', { email, password });
        
        // For demo purposes, simulate success
        window.location.href = '/dashboard';
    });

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        // Basic validation
        if (name.length < 2) {
            showError('Name must be at least 2 characters');
            return;
        }

        if (!validateEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }

        if (password.length < 8) {
            showError('Password must be at least 8 characters');
            return;
        }

        if (password !== confirmPassword) {
            showError('Passwords do not match');
            return;
        }

        // Here you would typically make an API call to your backend
        console.log('Sign up:', { name, email, password });
        
        // For demo purposes, simulate success
        window.location.href = '/dashboard';
    });

    // Google sign in
    const googleButton = document.querySelector('.google-button');
    googleButton.addEventListener('click', () => {
        // Here you would typically initiate OAuth flow
        console.log('Google sign in clicked');
    });
});

// Helper functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(message) {
    const alert = document.getElementById('error-alert');
    const alertMessage = alert.querySelector('.alert-message');
    alertMessage.textContent = message;
    alert.classList.remove('hidden');
}

function hideError() {
    const alert = document.getElementById('error-alert');
    alert.classList.add('hidden');
}