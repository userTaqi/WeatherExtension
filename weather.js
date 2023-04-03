document.querySelector("[data-btn]").addEventListener("click", fun);

function fun() {
  // Set the city and API key variables
  const city = document.querySelector("[data-city]").value;
  const key = "";

  // Construct the API URL with the city and API key variables
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
  // Use the fetch() method to retrieve the data from the API

  fetch(url)
    .then((response) => response.json()) // Convert the response to JSON format
    .then((data) => {
      // Extract the temperature in Celsius from the object in the data
      const temp_c = data.current.temp_c;
      const temp_f = data.current.temp_f;
      const imageSource = "https:" + data.current.condition.icon;
      const location = data.location.country + ", " + data.location.name;
      const localTime = data.location.localtime;

      // Update the text content of the elements with the values
      document.querySelector("[data-img]").setAttribute("src", imageSource);
      document.querySelector("[data-c]").textContent = temp_c + "°C";
      document.querySelector("[data-f]").textContent = temp_f + "°F";
      document.querySelector("[data-location]").textContent = location;
      document.querySelector("[data-localtime]").textContent = localTime;
    })
    .catch((error) => console.log(error)); // Log any errors that occur during the process
}
