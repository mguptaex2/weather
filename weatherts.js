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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var WeatherDisplay = /** @class */ (function () {
    function WeatherDisplay() {
    }
    WeatherDisplay.prototype.temperatureConvert = function () {
        //it will calculate the temperature values in celsius ,farenheit and kelvin.
        var ftemp = (this.temperature * 9 / 5) + 32;
        var ktemp = (this.temperature + 273.15);
        var value = document.getElementById('select').value;
        if (value == "celsius") {
            this.temp = "temperature in celsius :- " + this.temperature.toFixed(2);
            document.getElementById("val3").innerHTML = this.temp + " <br>";
        }
        else if (value == "kelvin") {
            this.temp = "temperature in kelvin :- " + ktemp.toFixed(2);
            document.getElementById("val3").innerHTML = this.temp + " <br>";
        }
        else {
            this.temp = "temperature in farenheit :-" + ftemp.toFixed(2);
            document.getElementById("val3").innerHTML = this.temp + " <br>";
        }
    };
    WeatherDisplay.prototype.getApiCall = function (URL) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(URL)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    WeatherDisplay.prototype.bindDataFromApi = function () {
        var _this = this;
        //it will display the data according to the fetched response from the user.
        var location = (document.getElementById("locs").value);
        var URL = 'http://api.weatherstack.com/current?access_key=e3a07aed460ae8a3dddf8c3b9182c739&query=' + location;
        this.getApiCall(URL).then(function (data) {
            _this.city = data['location']['name'];
            _this.country = data['location']['country'];
            _this.temperature = data['current']['temperature'];
            _this.description = data['current']['weather_descriptions'];
            _this.latitude = data['location']['lat'];
            _this.longitude = data['location']['lon'];
            _this.displayWeatherOnHtml();
        });
    };
    WeatherDisplay.prototype.displayWeatherOnHtml = function () {
        this.temperatureConvert();
        document.getElementById("val2").textContent = "location :-" + this.city + "," + this.country;
        // document.getElementById("val3").innerHTML = this.temp + " <br>";
        document.getElementById("val4").innerHTML = "description " + this.description;
        if (document.getElementById("weatherDetails")) {
            document.getElementById("weatherDetails").remove();
        }
    };
    return WeatherDisplay;
}());
var Currloc = /** @class */ (function (_super) {
    __extends(Currloc, _super);
    function Currloc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Currloc.prototype.currentLocationOfUser = function () {
        var _this = this;
        //it tells the current location of the user.
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.longitude = position.coords.longitude;
            _this.latitude = position.coords.latitude;
            _this.getCurrentWeather();
        });
    };
    Currloc.prototype.getCurrentWeather = function () {
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
    return Currloc;
}(WeatherDisplay));
var WeatherForecast = /** @class */ (function (_super) {
    __extends(WeatherForecast, _super);
    function WeatherForecast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WeatherForecast.prototype.weatherForecastOfCurrentLocation = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.longitude = position.coords.longitude;
            _this.latitude = position.coords.latitude;
            _this.bindDataFromApiForWeatherForecast();
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
                _this.latitude = data['location']['lat'];
                _this.longitude = data['location']['lon'];
                _this.bindDataFromApiForWeatherForecast();
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
    WeatherForecast.prototype.bindDataFromApiForWeatherForecast = function () {
        var _this = this;
        var URL = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9799c5aedd90c08edac7f8af73c81ba9/' + this.latitude + ',' + this.longitude;
        this.getApiCall(URL).then(function (data) {
            var hourdata = '';
            var length = Object.keys(data['daily']['data']).length;
            var childCount = document.getElementById("weatherDetails").childElementCount;
            for (var i = 0; i < length; i++) {
                _this.time = data['daily']['data'][i]['time'];
                _this.temperature = data['daily']['data'][i]['temperatureLow'];
                _this.pressure = data['daily']['data'][i]['pressure'];
                _this.description = data['daily']['data'][i]['summary'];
                var formattedDate = _this.convertDateToFormat();
                _this.temperatureConvert();
                hourdata = " " + formattedDate + "<br><b>Temp </b>:- " + _this.temp + "<br><b>Pressure is</b>:- " + _this.pressure + "<br><b>Summary is :-</b>" + _this.description + " <br>";
                var temp22 = document.createElement("div");
                temp22.innerHTML = '<b><u>Date is:</b></u>' + '<br>' + hourdata;
                temp22.classList.add("Details");
                temp22.setAttribute("id", "det" + i);
                if (childCount > 0) {
                    var node = document.getElementById("det" + i);
                    node.parentNode.replaceChild(temp22, node);
                }
                else {
                    document.getElementById("weatherDetails").appendChild(temp22);
                    childCount = childCount - 1;
                }
            }
        });
    };
    return WeatherForecast;
}(WeatherDisplay));
