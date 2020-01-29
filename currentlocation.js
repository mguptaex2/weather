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
var weatherts_1 = require("./weatherts");
var CurrentLocation = /** @class */ (function (_super) {
    __extends(CurrentLocation, _super);
    function CurrentLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrentLocation.prototype.currentLocationOfUser = function () {
        var _this = this;
        //it tells the current location of the user.
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.longitude = position.coords.longitude;
            _this.latitude = position.coords.latitude;
            _this.getCurrentWeather();
        });
    };
    CurrentLocation.prototype.getCurrentWeather = function () {
        var _this = this;
        //It displays the weather of cuurent location.
        var URL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + this.latitude + '&lon=' + this.longitude + '&appid=058071b3c7be6c1ba2185d48585c50ad';
        this.getApiCall(URL).then(function (data) {
            _this.city = data['name'];
            _this.country = data['sys']['country'];
            _this.temperature = data['main']['temp'];
            _this.description = data['weather'][0]['description'];
            _this.temperature = _this.temperature - 273.15;
            (document.getElementById("locs").value) = _this.city;
            _this.displayWeatherOnHtml();
        });
    };
    return CurrentLocation;
}(weatherts_1.GetApi));
exports.CurrentLocation = CurrentLocation;
// let cl = new CurrentLocation();
