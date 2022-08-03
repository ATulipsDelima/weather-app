import {getData, transformData} from './getData.js';
import { assignData } from './assignData.js';
import {toFahrenheit, toCelsius} from './degreeConverter.js';


let searchBtn = document.getElementById("search-btn")

//keep track of current datta
let currentCityData = null;

console.log(process.env.API_KEY)



searchBtn.addEventListener('click', async ()=>{
    let search_input = document.getElementById("search-bar");


    if(search_input.value === ""){
        alert("City not found.")
    }else{
        // get json data, and convert to object
        let data =  await getData(search_input.value);
        console.log(data);
        if(data === undefined){
            alert("City not found.");
        } else{
            currentCityData = data
            assignData(data);
        }
        
    }
    
})


// assign data to DOM elements

