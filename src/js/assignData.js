import { toFahrenheit, toMilePerHour } from "./metricConverter.js";
const assignData = (data)=>{
    const location = document.getElementById("location");
    const humidity = document.getElementById("humidity");
    const ccondition = document.getElementById("weather-description")

    location.textContent = data.city + "," + data.state;
    humidity.textContent = "Humidity: " + data.humidity  + "%";
    ccondition.textContent = data.weatherType;

    // assing degree data (fahrenhiet by default)
    toFahrenheit(data.currentTemp, data.lowestTemp, data.highestTemp);
     // get icon for current weather
    dayOrNight(data.icon)
    // assing wind speed (to mph)
    toMilePerHour(data.windSpeed); 

}

const dayOrNight = (icon) =>{

    // get image icon element
    const image = document.getElementById("weather-pic"); 
    // get letter from icon data (d or n)

    switch(icon){
        case "01d":
            image.src = "./weather_icons/clear_sky_day.png"
            break;

        case "01n": 
            image.src = "./weather_icons/clear_sky_night.png"
            break;

        case "02d":
            image.src = "./weather_icons/few_clouds_day.png"
            break;

        case "02n":
            image.src = "./weather_icons/few_clouds_night.png"
            break;
        case "10d":
            image.src = "./weather_icons/rain_day.png"
            break;

        case "10n":
            image.src = "./weather_icons/rain_night.png"
            break;
        case "03d":
        case "03n":
            image.src = "./weather_icons/scattered_clouds_day_night.png"
            break;

        case "04d":
        case "04n":
            image.src = "./weather_icons/broken_clouds_day_night.png"
            break;
        case "09d":
        case "09n":
            image.src = "./weather_icons/shower_rain_day_night.png"
            break;

        case "13d":
        case "13n":
            image.src = "./weather_icons/snow_day_night.png"
            break;

        case "11d":
        case "11n":
            image.src = "./weather_icons/thunderstorm_day_night.png"
            break;

        case "50d":
        case "50n":
            image.src = "./weather_icons/mist_day_night.png"
            break;
        default:
            console.log("cant work")
    }
}

export {assignData}