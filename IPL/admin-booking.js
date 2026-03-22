// Function to display bookings from localStorage
function displayBookings() {
    const bookingList = document.getElementById('booking-list');
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    if (bookings.length === 0) {
        bookingList.innerHTML = '<p class="text-center">No bookings made yet.</p>';
    } else {
        bookingList.innerHTML = bookings.map(booking => `
            <div class="booking-item p-3 mb-2 bg-light border rounded">
                <strong>Username:</strong> ${booking.username} <br>
                <strong>Booking Date:</strong> ${booking.bookingDate} <br>
                <strong>Tickets:</strong> ${booking.tickets} <br>
            </div>
        `).join('');
    }
}

// Admin logout functionality
function logoutAdmin() {
    localStorage.removeItem('isAdminLoggedIn');
    window.location.href = 'index.html'; // Redirect to home page
}

// Check if admin is logged in, else redirect to login page
if (localStorage.getItem('isAdminLoggedIn') !== 'true') {
    window.location.href = 'admin-login.html'; // Redirect to login page
} else {
    displayBookings(); // Display bookings if admin is logged in
}
