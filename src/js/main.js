import {getData, transformData} from './getData.js';
import { assignData } from './assignData.js';
import {toFahrenheit, toCelsius} from './metricConverter.js';


let searchBtn = document.getElementById("search-btn")

// get button to coggle F to C and vice versa
const degreeBtn = document.getElementById("current-deg")


const searchBar = document.getElementById("search-bar");
//keep track of current data (Atlanta by default)
let currentCityData;

getData('atlanta').then( res => assignData(res));

console.log(currentCityData)




// search bar event listners
searchBar.addEventListener('keyup', async (e)=>{

    if (e.key === 'Enter') {
        if(searchBar.value === ""){
            alert("City not found.")
        }else{
            // get json data, and convert to object
            let data =  await getData(searchBar.value);
    
            // clear input box
            searchBar.value = ""
            if(data === undefined){
                alert("City not found.");
                // clear input box
            searchBar.value = ""
            } else{
                currentCityData = data
                assignData(data);
            }
            
        }
    }
    
    
})

// search button event listener
searchBtn.addEventListener('click', async ()=>{
    let search_input = document.getElementById("search-bar");


    if(search_input.value === ""){
        alert("City not found.")
    }else{
        // get json data, and convert to object
        let data =  await getData(search_input.value);

        // clear input box
        search_input.value = ""
        if(data === undefined){
            alert("City not found.");
            // clear input box
        search_input.value = ""
        } else{
            currentCityData = data
            assignData(data);
        }
        
    }
    
})


// degree toggle funtionality
degreeBtn.addEventListener('click', (e)=>{
    if(e.target.classList.contains("celsius")){
        // convert to fahrenhiet
        e.target.classList.remove("celsius");
        e.target.textContent = "F";
        toFahrenheit(currentCityData.currentTemp, currentCityData.lowestTemp, currentCityData.highestTemp);
    }else{
        // convet to celsius
        e.target.classList.add("celsius");
        e.target.textContent = "C";
        toCelsius(currentCityData.currentTemp, currentCityData.lowestTemp, currentCityData.highestTemp);
    }
})


// assign data to DOM elements

async function defaultCity(city){

}
