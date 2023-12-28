**Weather App:**

  This simple weather app allows users to check the current weather conditions of a city. It uses the OpenWeatherMap API to fetch weather data and displays it on the web page.
  Using HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js

**Prerequisites:**

  Before using this app, make sure you have the following:
    OpenWeatherMap API key: Get your API key by signing up on the OpenWeatherMap website.
	install Node.js

**Setup:**

	Clone or download the repository to your local machine.
 	Run command on your terminal : npm init
	Open the main.js file in a web browser.
	Replace YOUR_API_KEY in the JavaScript code with your OpenWeatherMap API key.
		let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=YOUR_API_KEY`;

**Usage:**

	Now run comand : node src/app.js 
	Open Browser and type url: localhost:8000/
	Enter the name of the city in the input field.
	Click the "Get Weather" button to fetch and display the weather information.
