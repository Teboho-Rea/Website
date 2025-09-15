// A simple script to handle form validation and submission.

document.addEventListener('DOMContentLoaded', () => {
    // Select the form element
    const form = document.querySelector('form');
    // Select all form groups that might have an error message
    const formGroups = form.querySelectorAll('.form-group');
    // Select the message display area (optional)
    const messageArea = document.createElement('div');
    form.appendChild(messageArea);

    // Function to show an error message for a specific input field
    const showError = (input, message) => {
        // Find the parent form-group element
        const formGroup = input.parentElement;
        // Check if an error message already exists
        let error = formGroup.querySelector('.error-message');
        if (!error) {
            // Create a new error message element if one doesn't exist
            error = document.createElement('span');
            error.className = 'error-message';
            formGroup.appendChild(error);
        }
        error.textContent = message;
        input.classList.add('invalid');
    };

    // Function to clear any error message for a specific input field
    const clearError = (input) => {
        const formGroup = input.parentElement;
        const error = formGroup.querySelector('.error-message');
        if (error) {
            error.textContent = '';
        }
        input.classList.remove('invalid');
    };

    // Listen for the form's submit event
    form.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior (page reload)
        event.preventDefault();

        // Clear previous error messages
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            clearError(input);
        });

        // Get the values from the form inputs
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();
        let hasError = false;

        // Perform validation
        if (name === '') {
            showError(form.querySelector('#name'), 'Name is required.');
            hasError = true;
        }

        if (email === '') {
            showError(form.querySelector('#email'), 'Email is required.');
            hasError = true;
        } else if (!isValidEmail(email)) {
            showError(form.querySelector('#email'), 'Please enter a valid email address.');
            hasError = true;
        }

        if (message === '') {
            showError(form.querySelector('#message'), 'Message is required.');
            hasError = true;
        }

        // If no errors, proceed with form submission logic
        if (!hasError) {
            // Here, you would typically send the data to a server using the fetch API.
            // For this example, we will just show a success message.
            console.log('Form submitted successfully!');
            messageArea.textContent = 'Thank you for your message! We will get back to you soon.';
            messageArea.style.color = 'green';
            messageArea.style.marginTop = '10px';
            
            // Clear the form after successful submission
            form.reset();
        }
    });

    // Simple email validation function
    const isValidEmail = (email) => {
        // A simple regex for email validation
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
});