const button = document.querySelector('button');
button.addEventListener('click', convertTemp);

function convertTemp() {
    let farenheit = document.querySelector('input').value;
    let celsius = (farenheit - 32) / 1.8;
    let kelvin = celsius + 273.15;

    console.log("Fahrenheit: " + farenheit);
    console.log("Celcius: " + celsius);
    console.log("Kelvin: " + kelvin);
}
