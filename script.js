//inialize variables
const apiKey = "621f8dbf5d6c5771baf7547c8bfdd9fd";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

//add an event listener to searchBtn, so when the user clicks, getWeather() will run
searchBtn.addEventListener("click", getWeather);

//function to get weather details from api
function getWeather() {
	//initalize variables
	const city = cityInput.value;
	
	
	//check if city is empty
	if(city == "") {
		window.alert("Enter a city");
	}
	
	//clear textbox
	cityInput.value = ""; 
	
	//holds openweather url
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
	
	fetch(url)
		.then(response => response.json())
		.then(data => {
			document.getElementById("cityName").textContent = data.name; //get cityName from openweather
			document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°F`; //get temp from openweather
			document.getElementById("description").textContent = data.weather[0].description; //get description from openweather
			
			const iconCode = data.weather[0].icon;
			document.getElementById("icon").src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`; //get icon from openweather
		})
		.catch(error => { //error handling
			document.getElementById("cityName").textContent = "City not found.";
			document.getElementById("temperature").textContent = "";
			document.getElementById("description").textContent = "";
			document.getElementById("icon").src = "";
		});
	
}