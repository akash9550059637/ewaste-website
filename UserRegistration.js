// UserRegistration.js

// Function to handle form submission
function handleRegistrationFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the registration form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform form validation (you can customize this part)
    if (!name || !email || !password) {
        alert('Please fill in all the required fields.');
        return;
    }

    // Create a user object with the form data
    const user = {
        name,
        email,
        password,
    };

    // Simulate sending the user data to the server (replace with actual AJAX/Fetch)
    // For this example, we'll log the user object to the console
    console.log('User Registration Data:', user);

    // Clear the form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';

    // You can also add logic here to send the user data to your server for registration

    // Display a success message to the user (customize as needed)
    alert('Registration successful!');
}

// Add an event listener to the registration form
const registrationForm = document.getElementById('registration-form');
registrationForm.addEventListener('submit', handleRegistrationFormSubmit);
