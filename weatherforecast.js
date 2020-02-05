"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var currentlocation_1 = require("./currentlocation");
var weatherts_1 = require("./weatherts");
var getapi_1 = require("./getapi");
var WeatherForecast = /** @class */ (function (_super) {
    __extends(WeatherForecast, _super);
    function WeatherForecast() {
        var _this = _super.call(this) || this;
        _this.weather = new weatherts_1.WeatherDisplay();
        var currentloc = new currentlocation_1.CurrentLocation();
        return _this;
    }
    WeatherForecast.prototype.weatherForecastOfCurrentLocation = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.weather.longitude = position.coords.longitude;
            _this.weather.latitude = position.coords.latitude;
            _this.bindDataFromApiForWeatherForecast(position);
        });
    };
    WeatherForecast.prototype.weatherForecast = function () {
        var _this = this;
        // It fetches the current location or the location enetred by user and calls weatherFore to display the weather forecast.
        if ((document.getElementById("locs").value) === "") {
            this.weatherForecastOfCurrentLocation();
        }
        else {
            var location_1 = (document.getElementById("locs").value);
            var URL_1 = 'http://api.weatherstack.com/current?access_key=e3a07aed460ae8a3dddf8c3b9182c739&query=' + location_1;
            this.getApiCall(URL_1).then(function (data) {
                _this.weather.latitude = data['location']['lat'];
                _this.weather.longitude = data['location']['lon'];
                _this.bindDataFromApiForWeatherForecast(_this.weather);
                return data;
            });
        }
    };
    WeatherForecast.prototype.convertDateToFormat = function () {
        var date = new Date(this.time * 1000);
        var date1 = date.getDate();
        var year = date.getFullYear();
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var month = months[date.getMonth()];
        var formattedDate = date1 + '-' + month + '-' + year;
        return formattedDate;
    };
    WeatherForecast.prototype.bindDataFromApiForWeatherForecast = function (position) {
        var _this = this;
        var URL = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9799c5aedd90c08edac7f8af73c81ba9/' + this.weather.latitude + ',' + this.weather.longitude;
        this.getApiCall(URL).then(function (data) {
            var hourdata = '';
            var length = Object.keys(data['daily']['data']).length;
            var childCount = document.getElementById("weatherDetails").childElementCount;
            for (var i = 0; i < length; i++) {
                document.getElementById("val1").innerHTML = "";
                document.getElementById("val2").innerHTML = "";
                document.getElementById("val3").innerHTML = "";
                document.getElementById("val4").innerHTML = "";
                _this.time = data['daily']['data'][i]['time'];
                _this.weather.temperature = data['daily']['data'][i]['temperatureLow'];
                _this.pressure = data['daily']['data'][i]['pressure'];
                _this.weather.description = data['daily']['data'][i]['summary'];
                var formattedDate = _this.convertDateToFormat();
                _this.weather.temperatureConvert();
                hourdata = " " + formattedDate + "<br><b>Temp </b>:- " + _this.weather.temp + "<br><b>Pressure is</b>:- " + _this.pressure + "<br><b>Summary is :-</b>" + _this.weather.description + " <br>";
                var displayData = document.createElement("div");
                displayData.innerHTML = '<b><u>Date is:</b></u>' + '<br>' + hourdata;
                displayData.classList.add("Details");
                displayData.setAttribute("id", "det" + i);
                if (childCount > 0) {
                    var node = document.getElementById("det" + i);
                    node.parentNode.replaceChild(displayData, node);
                }
                else {
                    document.getElementById("weatherDetails").appendChild(displayData);
                    childCount = childCount - 1;
                }
            }
        });
    };
    return WeatherForecast;
}(getapi_1.GetApi));
exports.WeatherForecast = WeatherForecast;
window.WeatherForecast = WeatherForecast;
