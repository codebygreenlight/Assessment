// Check if current time is within working hours
function checkWorkingHours() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = now.getHours();

    // Check if it's a weekday (Monday-Friday) and between 9:00-17:00
    const isWorkingDay = day >= 1 && day <= 5;
    const isWorkingHour = hour >= 9 && hour < 17;

    if (!isWorkingDay || !isWorkingHour) {
        // Redirect to out-of-hours page
        window.location.href = 'closed.html';
    }
}

// Run check when page loads
document.addEventListener('DOMContentLoaded', checkWorkingHours); 