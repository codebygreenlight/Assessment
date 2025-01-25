const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Working hours middleware
const checkWorkingHours = (req, res, next) => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    // Check if it's a weekday (Monday-Friday) and between 9:00-17:00
    const isWorkingDay = day >= 1 && day <= 5;
    const isWorkingHour = hour >= 9 && hour < 17;

    if (!isWorkingDay || !isWorkingHour) {
        return res.sendFile(path.join(__dirname, 'public', 'closed.html'));
    }
    next();
};

// Apply middleware to routes
app.use('/', checkWorkingHours);

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Error handling
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 