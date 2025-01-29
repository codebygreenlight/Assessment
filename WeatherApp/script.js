// OpenWeatherMap API configuration
const API_KEY = '1234567890abcdef1234567890abcdef'; // Replace with your API key from OpenWeatherMap
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM elements
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const cityElement = document.querySelector('.city');
const dateElement = document.querySelector('.date');
const tempElement = document.querySelector('.temp');
const weatherIcon = document.querySelector('.weather-icon');
const conditionElement = document.querySelector('.condition');
const humidityElement = document.querySelector('.humidity span');
const windElement = document.querySelector('.wind span');

// Fetch weather data
async function getWeatherData(city) {
    try {
        showLoading();
        const response = await fetch(
            `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`
        );
        
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        updateWeatherUI(data);
    } catch (error) {
        showError(error.message);
    }
}

// Update UI with weather data
function updateWeatherUI(data) {
    // Update city name
    cityElement.textContent = `Weather in ${data.name}, ${data.sys.country}`;
    
    // Update date
    dateElement.textContent = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Update temperature
    tempElement.textContent = Math.round(data.main.temp);
    
    // Update weather icon
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = data.weather[0].description;
    
    // Update condition
    conditionElement.textContent = data.weather[0].description;
    
    // Update additional info
    humidityElement.textContent = `${data.main.humidity}%`;
    windElement.textContent = `${Math.round(data.wind.speed)} km/h`;
    
    // Show weather info
    document.querySelector('.weather-info').style.display = 'block';
}

// Show error message
function showError(message) {
    cityElement.textContent = message;
    document.querySelector('.weather-info').style.display = 'none';
    
    if (message.includes('401')) {
        cityElement.textContent = 'Invalid API key. Please check your OpenWeatherMap API key.';
    }
}

// Event listeners
searchButton.addEventListener('click', () => {
    const city = searchInput.value.trim();
    if (city) {
        getWeatherData(city);
    }
});

searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const city = searchInput.value.trim();
        if (city) {
            getWeatherData(city);
        }
    }
});

// Initial state
document.querySelector('.weather-info').style.display = 'none';

// Optional: Get user's location weather on load
function getLocationWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            try {
                const { latitude, longitude } = position.coords;
                const response = await fetch(
                    `${BASE_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
                );
                
                if (!response.ok) throw new Error('Location not found');
                
                const data = await response.json();
                updateWeatherUI(data);
            } catch (error) {
                showError('Unable to fetch location weather');
            }
        }, () => {
            // If user denies location access
            getWeatherData('London'); // Default city
        });
    }
}

// Uncomment to enable location-based weather on load
// getLocationWeather();

// Add these functions after your existing code
function showLoading() {
    cityElement.textContent = 'Loading...';
    document.querySelector('.weather-info').style.display = 'none';
} 