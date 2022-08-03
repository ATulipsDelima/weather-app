import { toFahrenheit } from "./degreeConverter.js";
const assignData = (data)=>{
    const location = document.getElementById("location");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    location.textContent = data.city + "," + data.state;
    humidity.textContent = "Humidity: " + data.humidity  + "%";
    wind.textContent = "wind: " + data.windSpeed + " mph"

    // assing degree data (fahrenhiet by default)
    toFahrenheit(data.currentTemp, data.lowestTemp, data.highestTemp);

    dayOrNight(data.icon)

}

const dayOrNight = (icon) =>{

    // get image icon element
    const image = document.getElementById("weather-pic"); 
    console.log(image)
    // get letter from icon data (d or n)
    console.log(icon[2]);

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
            console.log(true)
            image.src = "./weather_icons/broken_clouds_day_night.png"
            break;
        case "09d":
        case "09n":
            console.log(true)
            image.src = "./weather_icons/shower_rain_day_night.png"
            break;

        case "13d":
        case "13n":
            console.log(true)
            image.src = "./weather_icons/snow_day_night.png"
            break;

        case "11d":
        case "11n":
            console.log(true)
            image.src = "./weather_icons/thunderstorm_day_night.png"
            break;

        case "50d":
        case "50n":
            console.log(true)
            image.src = "./weather_icons/mist_day_night.png"
            break;
        default:
            console.log("cant work")
    }
}

export {assignData}