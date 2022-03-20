const weather = document.body.querySelector("div #weather");
weather.style.zIndex = "5";
weather.style.color = "white";
weather.style.position = "absolute";
weather.style.bottom = "0";
weather.style.left = "10";
weather.style.fontSize = "30px";
weather.style.fontFamily = "serif";

const API_KEY = "95304b381688b68adffdef19da1e66d0";

function onGeoSuccess(pos){
    var crd = pos.coords;
    const lat = crd.latitude;
    const lon = crd.longitude;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(apiUrl).then(response => response.json()).then(data => {
        console.log(data);
        weather.innerText = `${data.weather[0].main} \n ${data.wind.speed}m/s`;
    });
}

function onGeoError(){
    alert("Can't get you position !");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);


