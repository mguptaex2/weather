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
var temperature_1 = require("./temperature");
var WeatherDisplay = /** @class */ (function (_super) {
    __extends(WeatherDisplay, _super);
    function WeatherDisplay() {
        var _this = _super.call(this) || this;
        _this.city = "";
        _this.country = "";
        _this.temperature = 0;
        _this.description = "";
        _this.latitude = 0;
        _this.longitude = 0;
        _this.temp = "";
        return _this;
    }
    WeatherDisplay.prototype.displayWeatherOnHtml = function () {
        this.temperatureConvert();
        document.getElementById("val2").textContent = "location :-" + this.city + "," + this.country;
        document.getElementById("val3").innerHTML = this.temp + " <br>";
        document.getElementById("val4").innerHTML = "description " + this.description;
    };
    return WeatherDisplay;
}(temperature_1.TemperatureConverter));
exports.WeatherDisplay = WeatherDisplay;
window.WeatherDisplay = WeatherDisplay;
