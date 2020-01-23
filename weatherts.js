var latitude;
// declare var longitude;
function weatherForecast() {
    var lati = detectWeather();
    console.log(lati);
}
function detectWeather() {
    var locate = (document.getElementById("locs").value);
    return fetch('http://api.weatherstack.com/current?access_key=e3a07aed460ae8a3dddf8c3b9182c739&query=' + locate)
        .then(function (response) {
        return response.json();
    }).then(function (data) {
        var namevalue = data['location']['name'];
        var country = data['location']['country'];
        var tempvalue = data['current']['temperature'];
        var descvalue = data['current']['weather_descriptions'];
        var latitude = data['location']['lat'];
        var longitude = data['location']['lon'];
        //   exvar latitude = '';
        // if(data['weather'].indexOf['rain'] >= 0) 
        // {        skycons.set("animated-icon", Skycons.RAIN);    }
        // else if (weather.indexOf("sunny") >= 0) 
        // {        skycons.set("animated-icon", Skycons.CLEAR_DAY);    }
        console.log(namevalue);
        console.log(country);
        var ftemp = (tempvalue * 9 / 5) + 32;
        document.getElementById("val2").textContent = "location :-" + namevalue + "," + country;
        //document.getElementById("val1").innerHTML=country;
        document.getElementById("val3").innerHTML = "temperature in celsius :- " + tempvalue + " <br> temprature farenheit :-" + ftemp;
        document.getElementById("val4").innerHTML = "description " + descvalue;
        console.log(data);
        return data;
    })["catch"](function (error) {
        alert("valid not");
    });
}
