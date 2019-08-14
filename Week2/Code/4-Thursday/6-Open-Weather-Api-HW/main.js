console.log('main.js is connected!');

/*

Here's an overview of the steps you'll follow to get your app to work...

STEPS

1. when the page loads
  - add an event listener to the button
2. When the button is clicked
  - grab the input
  - store the value
  - make an API request based on the input value
3. When the API response is returned
  - grab all the appropriate DOM elements
  - append the data to the DOM

*/
const makeCall = function(zip) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=caabadbc1db789407b07a6c67653297b`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
        console.log(response);
        updateDOM(response);
    })
    .catch((err) => {
        console.log(err);
    })
}

function initialCall() {
    const zip = document.querySelector('.zip').value
    if (zip > 0 && zip < 99999) {
        const data = makeCall(zip);
    }
}

function updateDOM(data) {
    const name = document.querySelector('.name');
    const temp = document.querySelector('.temp');
    const description = document.querySelector('.description');
    const min = document.querySelector('.min');
    const max = document.querySelector('.max');
    const sunriseElement = document.querySelector('.sunrise');
    const sunsetElement = document.querySelector('.sunset');

    const sunrise = new Date(data.sys.sunrise * 1000);
    const sunset = new Date(data.sys.sunset * 1000);

    data.main.temp < 40
        ? temp.style.color = 'blue'
        : temp.style.color = 'black'
    data.main.temp > 90
        ? temp.style.color = 'red'
        : temp.style.color = 'black'

    name.innerText = `Name: ${data.name}`;
    temp.innerText = `Temperature: ${data.main.temp}`;
    description.innerText = `Description: ${data.weather[0].description}`;
    min.innerText = `Min-Temperature: ${data.main.temp_min}`;
    max.innerText = `Max-Temperature: ${data.main.temp_max}`;
    sunriseElement.innerText = `Sunrise: ${sunrise}`;
    sunsetElement.innerText = `Sunset: ${sunset}`;

}

const button = document.querySelector('button');
button.addEventListener('click', initialCall);
