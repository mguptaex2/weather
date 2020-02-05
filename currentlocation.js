"use strict";
exports.__esModule = true;
var weatherts_1 = require("./weatherts");
var getapi_1 = require("./getapi");
var CurrentLocation = /** @class */ (function () {
    function CurrentLocation() {
    }
    CurrentLocation.prototype.currentLocationOfUser = function () {
        //it tells the current location of the user.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCurrentWeather);
        }
        else {
            alert("Not supporting browser");
        }
    };
    CurrentLocation.prototype.getCurrentWeather = function (position) {
        //It displays the weather of cuurent location.
        var weather = new weatherts_1.WeatherDisplay();
        var api = new getapi_1.GetApi();
        var URL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=058071b3c7be6c1ba2185d48585c50ad';
        api.getApiCall(URL).then(function (data) {
            weather.city = data['name'];
            weather.country = data['sys']['country'];
            weather.temperature = data['main']['temp'];
            weather.description = data['weather'][0]['description'];
            weather.temperature = weather.temperature - 273.15;
            (document.getElementById("locs").value) = weather.city;
            weather.displayWeatherOnHtml();
        });
    };
    return CurrentLocation;
}());
exports.CurrentLocation = CurrentLocation;
window.CurrentLocation = CurrentLocation;
