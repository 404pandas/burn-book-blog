const signupFormHandler = async function (event) {
  event.preventDefault();

  // Select input elements
  const usernameElement = document.querySelector('#username-input-signup');
  const passwordElement = document.querySelector('#password-input-signup');

  // Get values from input elements
  const username = usernameElement.value;
  const password = passwordElement.value;

  // Client-side validation: Check if password is at least 11 characters long
  if (password.length < 11) {
    document.getElementById('password-error').textContent =
      'Password must be at least 11 characters long.';
    return; // Stop further execution
  }

  // If password is valid, clear any previous error message
  document.getElementById('password-error').textContent = '';

  try {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }), // Use object shorthand
    });

    if (response.ok) {
      // Redirect to dashboard if signup is successful
      document.location.replace('/dashboard');
    } else {
      // Display error message if signup fails
      const data = await response.json();
      alert(data.message || 'Failed to sign up, please try again');
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle network errors or other exceptions
    alert('An unexpected error occurred. Please try again later.');
  }
};

// Add event listener to signup form
document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
