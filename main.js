document.getElementById('searchButton').addEventListener('click', fetchWeather);


async function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '547cf29d4ca00d280851c7a3bcfb6b68';  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherDisplay').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    weatherDisplay.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <img src="${icon}" alt="${description}">
        <p>Temperature: ${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Condition: ${description}</p>
    `;
}
