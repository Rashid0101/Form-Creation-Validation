document.addEventListener('DOMContentLoaded', () => {
    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault();

        // Retrieve and trim user inputs
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        const messages = [];

        // Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Validate email
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must contain both "@" and "." characters.');
        }

        // Validate password
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display feedback
        const feedbackDiv = document.getElementById('form-feedback');
        if (!feedbackDiv) {
            console.error('Error: Feedback div element not found.');
            return;
        }

        feedbackDiv.style.display = 'block'; // Make the feedback div visible
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green for success
            feedbackDiv.style.backgroundColor = '#d4edda'; // Light green background
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545'; // Red for error
            feedbackDiv.style.backgroundColor = '#f8d7da'; // Light red background
        }
    }

    // Form and feedback div selection
    const form = document.getElementById('registration-form');
    if (!form) {
        console.error('Error: Form element not found.');
        return;
    }

    // Add event listener for form submission
    form.addEventListener('submit', handleFormSubmit);
});
