const adminCredentials = {
    username: 'admin',
    password: 'admin123'
};

// Admin login form submission
document.getElementById('admin-login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        // Set admin login status in localStorage
        localStorage.setItem('isAdminLoggedIn', 'true');
        // Redirect to admin booking page
        window.location.href = 'admin-booking.html';
    } else {
        alert('Invalid credentials! Please try again.');
    }
});
