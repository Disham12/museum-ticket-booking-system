// Function to store booking data in localStorage
function storeBookingData(username, bookingDate, tickets, totalPrice) {
    const bookingData = { username, bookingDate, tickets, totalPrice };
    let allBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    allBookings.push(bookingData);
    localStorage.setItem('bookings', JSON.stringify(allBookings));
}

// Function to update total price based on the number of tickets
function updatePrice() {
    const ticketCount = document.getElementById('tickets').value;
    const pricePerTicket = 100;  // Price per ticket in INR
    const totalPrice = ticketCount * pricePerTicket;
    document.getElementById('total-price').value = `${totalPrice} INR`;
}

// Handle booking form submission
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const bookingDate = document.getElementById('booking-date').value;
    const tickets = document.getElementById('tickets').value;

    const pricePerTicket = 100;
    const totalPrice = tickets * pricePerTicket;

    // Store the booking data
    storeBookingData(username, bookingDate, tickets, totalPrice);

    // Show the booking confirmation and payment info
    document.getElementById('payment-status-container').style.display = 'block'; // Make payment status container visible

    // Set the final price text
    document.getElementById('final-price').textContent = totalPrice;

    // Disable the form after submission (not resetting immediately)
    document.getElementById('booking-form').querySelectorAll('input, button').forEach(el => el.disabled = true);

    // Show a message asking the user to confirm that booking is complete or proceed to home.
    // Here we don't reset the form right away
    // The user will either refresh the page or manually reset the form (if needed)
});
