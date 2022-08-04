

async function getData(city){
// get reposne from api
   try{
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ab5e65a7ba8c4d09e98693083f39c45`, {mode: 'cors'})
    const data = await response.json()
    // convert data into useable data
    let info = transformData(data);

    return info;

   }catch (e){
    
   }

};

function transformData(data){
    const information = {
        city: data.name,
        state: data.sys.country,
        weatherType: data.weather[0].main,
        feelsLike: data.main.feels_like,
        currentTemp: data.main.temp,
        lowestTemp: data.main.temp_min,
        highestTemp: data.main.temp_max,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon
        
        
    };
    return information;
}




export {getData, transformData};