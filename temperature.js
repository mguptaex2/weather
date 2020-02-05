"use strict";
exports.__esModule = true;
var getapi_1 = require("./getapi");
var weatherforecast_1 = require("./weatherforecast");
var TemperatureConverter = /** @class */ (function () {
    function TemperatureConverter() {
        this.temperature = 0;
        this.temp = "";
        this.temperatureConvert();
    }
    TemperatureConverter.prototype.temperatureConvert = function () {
        //it will calculate the temperature values in celsius ,farenheit and kelvin.
        var farenheittemperature = (this.temperature * 9 / 5) + 32;
        var kelvintemperature = (this.temperature + 273.15);
        var value = document.getElementById('select').value;
        if (value == "celsius") {
            this.temp = "Temperature in celsius :- " + this.temperature.toFixed(2);
        }
        else if (value == "kelvin") {
            this.temp = "Temperature in kelvin :- " + kelvintemperature.toFixed(2);
        }
        else {
            this.temp = "Temperature in farenheit :-" + farenheittemperature.toFixed(2);
        }
    };
    TemperatureConverter.prototype.changeTemperature = function () {
        if (document.getElementById("weatherDetails").childElementCount) {
            var forecast = new weatherforecast_1.WeatherForecast();
            forecast.weatherForecast();
        }
        else {
            var api = new getapi_1.GetApi();
            api.bindDataFromApi();
        }
    };
    return TemperatureConverter;
}());
exports.TemperatureConverter = TemperatureConverter;
window.TemperatureConverter = TemperatureConverter;
