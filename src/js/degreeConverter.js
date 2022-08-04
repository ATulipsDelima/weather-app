const toFahrenheit = (current, low, high)=>{
    // get DOM elements
    const currentTemp = document.getElementById("current-temp");
    const lowTemp = document.getElementById("low");
    const highTemp = document.getElementById("high");

    // converts kelvins to fahrenhiet
    const currentF = Math.round(1.8 * (current - 273.15) +32);
    const lowF = Math.round(1.8 * (low - 273.15) +32);
    const highF = Math.round(1.8 * (high - 273.15) +32);


    //assidn data to elements

    currentTemp.textContent = currentF + " \u00B0";
    lowTemp.textContent = "Low: " + lowF;
    highTemp.textContent = "High: " + highF;
}

const toCelsius = (current, low, high)=>{
    // get DOM elements
    const currentTemp = document.getElementById("current-temp");
    const lowTemp = document.getElementById("low");
    const highTemp = document.getElementById("high");

    // converts kelvins to celsius
    const currentF = Math.round(current - 273.15);
    const lowF = Math.round(low - 273.15);
    const highF = Math.round(high - 273.15);


    //assidn data to elements

    currentTemp.textContent = currentF + " \u00B0";
    lowTemp.textContent = "Low: " + lowF;
    highTemp.textContent = "High: " + highF;
}

export {toFahrenheit, toCelsius}