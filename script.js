const APIkey="7c741a8b8d44ff51979ae21e88488cef";
const APIURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")

async function CheckWeather(city){
    const response = await fetch(APIURL +  city + `&appid=${APIkey}` );
    if(response.status =404)
    {
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
        
    }
    else{
        var data= await response.json()



    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + " °c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";
    if(data.weather[0].main == "Clouds"){
        weathericon.src= "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src= "images/clear.png"
    }
    else if(data.weather[0].main == "Haze"){
        weathericon.src= "images/clouds.png"
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src= "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src= "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src= "images/mist.png"
    }
    else if(data.weather[0].main == "Haze"){
        weathericon.src= "images/clouds.png"
    }
    document.querySelector(".weather").style.display = "block";

    }
    var data= await response.json()



    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";
    if(data.weather[0].main == "Clouds"){
        weathericon.src= "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src= "images/clear.png"
    }
    else if(data.weather[0].main == "Haze"){
        weathericon.src= "images/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src= "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src= "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src= "images/mist.png"
    }
    else if(data.weather[0].main == "Haze"){
        weathericon.src= "images/clouds.png"
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display ="none";

}

searchbtn.addEventListener("click", ()=>{
    CheckWeather(searchbox.value);
})
