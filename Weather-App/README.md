# Weather Dashboard Application

A simple and clean web application that provides real-time weather information for any city in the world. The user can enter a city name, and the dashboard will fetch and display the current weather conditions, including temperature, humidity, and wind speed.

This project is built with HTML, CSS, and vanilla JavaScript, using the OpenWeatherMap API to get live weather data.


## Features

-   Search for current weather by city name. For example, you can try your location, **Thiruporur**.
-   Displays temperature in Celsius, humidity percentage, and wind speed.
-   Clean user interface with a dark-themed container.
-   Handles errors gracefully for invalid or unfound city names.
-   Interactive search button with a hover effect.

## How It Works

The application uses an `async` JavaScript function to fetch data from the OpenWeatherMap API. When a user enters a city name and clicks 'Search', the app sends a request to the API with the specified city. The received JSON data is then parsed and injected dynamically into the HTML to display the weather report.


## Technologies Used

-   **HTML5**
-   **CSS3**
-   **JavaScript (ES6+)**: Uses `async/await` for handling asynchronous API calls and a `try...catch` block for error handling.
