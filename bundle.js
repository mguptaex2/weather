/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./weatherforecast.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./currentlocation.ts":
/*!****************************!*\
  !*** ./currentlocation.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var weatherts_1 = __webpack_require__(/*! ./weatherts */ "./weatherts.ts");
var getapi_1 = __webpack_require__(/*! ./getapi */ "./getapi.ts");
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


/***/ }),

/***/ "./getapi.ts":
/*!*******************!*\
  !*** ./getapi.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var weatherts_1 = __webpack_require__(/*! ./weatherts */ "./weatherts.ts");
var GetApi = /** @class */ (function () {
    function GetApi() {
    }
    GetApi.prototype.getApiCall = function (URL) {
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
    GetApi.prototype.bindDataFromApi = function () {
        //it will fetch the data according to the fetched response from the user.
        var location = (document.getElementById("locs").value);
        var URL = 'http://api.weatherstack.com/current?access_key=e3a07aed460ae8a3dddf8c3b9182c739&query=' + location;
        this.getApiCall(URL).then(function (data) {
            var weather = new weatherts_1.WeatherDisplay();
            weather.city = data['location']['name'];
            weather.country = data['location']['country'];
            weather.temperature = data['current']['temperature'];
            weather.description = data['current']['weather_descriptions'];
            weather.latitude = data['location']['lat'];
            weather.longitude = data['location']['lon'];
            weather.displayWeatherOnHtml();
        });
    };
    return GetApi;
}());
exports.GetApi = GetApi;
window.GetApi = GetApi;


/***/ }),

/***/ "./temperature.ts":
/*!************************!*\
  !*** ./temperature.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getapi_1 = __webpack_require__(/*! ./getapi */ "./getapi.ts");
var weatherforecast_1 = __webpack_require__(/*! ./weatherforecast */ "./weatherforecast.ts");
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


/***/ }),

/***/ "./weatherforecast.ts":
/*!****************************!*\
  !*** ./weatherforecast.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var currentlocation_1 = __webpack_require__(/*! ./currentlocation */ "./currentlocation.ts");
var weatherts_1 = __webpack_require__(/*! ./weatherts */ "./weatherts.ts");
var getapi_1 = __webpack_require__(/*! ./getapi */ "./getapi.ts");
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


/***/ }),

/***/ "./weatherts.ts":
/*!**********************!*\
  !*** ./weatherts.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var temperature_1 = __webpack_require__(/*! ./temperature */ "./temperature.ts");
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
// export class GetApi 
// {
//     async getApiCall(URL:any) {
//         let response = await fetch(URL);
//         let data = await response.json();
//         return data;
//     }
//     bindDataFromApi()
//     {
//         //it will fetch the data according to the fetched response from the user.
//         let location = ((document.getElementById("locs") as HTMLInputElement).value);
//         let URL = 'http://api.weatherstack.com/current?access_key=e3a07aed460ae8a3dddf8c3b9182c739&query=' + location;
//         this.getApiCall(URL).then(data => 
//             {
//                 let weather = new WeatherDisplay();
//                 weather.city = data['location']['name'];
//                 weather.country = data['location']['country'];
//                 weather.temperature = data['current']['temperature'];
//                 weather.description = data['current']['weather_descriptions'];
//                 weather.latitude = data['location']['lat'];
//                 weather.longitude = data['location']['lon'];
//                 weather.displayWeatherOnHtml();
//             });
//     }
// }
// // let t = new GetApi();
window.WeatherDisplay = WeatherDisplay;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3VycmVudGxvY2F0aW9uLnRzIiwid2VicGFjazovLy8uL2dldGFwaS50cyIsIndlYnBhY2s6Ly8vLi90ZW1wZXJhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi93ZWF0aGVyZm9yZWNhc3QudHMiLCJ3ZWJwYWNrOi8vLy4vd2VhdGhlcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSwyRUFBNEM7QUFDNUMsa0VBQWtDO0FBRWxDO0lBQUE7SUFpQ0EsQ0FBQztJQWhDRywrQ0FBcUIsR0FBckI7UUFFUSw0Q0FBNEM7UUFDNUMsSUFBRyxTQUFTLENBQUMsV0FBVyxFQUN2QjtZQUNHLFNBQVMsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDcEU7YUFFRDtZQUNBLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQy9CO0lBQ1QsQ0FBQztJQUVELDJDQUFpQixHQUFqQixVQUFrQixRQUFZO1FBRTFCLDhDQUE4QztRQUM5QyxJQUFJLE9BQU8sR0FBRyxJQUFJLDBCQUFjLEVBQUUsQ0FBQztRQUNuQyxJQUFJLEdBQUcsR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLHNEQUFzRCxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyx5Q0FBeUM7UUFFN0ssR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBSTtZQUVyQixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QixPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4RCxPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1lBQ25ELENBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztZQUM3RSxPQUFPLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUVYLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUM7QUFqQ1ksMENBQWU7QUFrQ3RCLE1BQU8sQ0FBRSxlQUFlLEdBQUksZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ2xELDJFQUE2QztBQUU3QztJQUFBO0lBNEJBLENBQUM7SUF6QlMsMkJBQVUsR0FBaEIsVUFBaUIsR0FBTzs7Ozs7NEJBRUwscUJBQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQzs7d0JBQTNCLFFBQVEsR0FBRyxTQUFnQjt3QkFDcEIscUJBQU0sUUFBUSxDQUFDLElBQUksRUFBRTs7d0JBQTVCLElBQUksR0FBRyxTQUFxQjt3QkFDaEMsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFDRCxnQ0FBZSxHQUFmO1FBRUkseUVBQXlFO1FBQ3pFLElBQUksUUFBUSxHQUFHLENBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0UsSUFBSSxHQUFHLEdBQUcsd0ZBQXdGLEdBQUcsUUFBUSxDQUFDO1FBQzlHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUk7WUFFdEIsSUFBSSxPQUFPLEdBQUcsSUFBSSwwQkFBYyxFQUFFLENBQUM7WUFDbkMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDckQsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5RCxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUVYLENBQUM7SUFFTCxhQUFDO0FBQUQsQ0FBQztBQTVCWSx3QkFBTTtBQTZCYixNQUFPLENBQUUsTUFBTSxHQUFJLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JoQyxrRUFBa0M7QUFDbEMsNkZBQWtEO0FBR2xEO0lBSUk7UUFGQSxnQkFBVyxHQUFZLENBQUMsQ0FBQztRQUN6QixTQUFJLEdBQVksRUFBRSxDQUFDO1FBR2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNELGlEQUFrQixHQUFsQjtRQUVJLDRFQUE0RTtRQUM1RSxJQUFJLG9CQUFvQixHQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ25FLElBQUksaUJBQWlCLEdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzVELElBQUksS0FBSyxHQUF1QixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBRSxDQUFDLEtBQUssQ0FBQztRQUN6RSxJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxRTthQUNJLElBQUksS0FBSyxJQUFJLFFBQVEsRUFBRTtZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLDJCQUEyQixHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxRTthQUNJO1lBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyw2QkFBNkIsR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0U7SUFDTCxDQUFDO0lBQ0QsZ0RBQWlCLEdBQWpCO1FBR1MsSUFBSyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFnQixDQUFDLGlCQUFpQixFQUNoRjtZQUNJLElBQUksUUFBUSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO1lBQ3JDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUU5QjthQUVEO1lBQ0ksSUFBSSxHQUFHLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztZQUN2QixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDVCxDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDO0FBdkNZLG9EQUFvQjtBQXdDM0IsTUFBTyxDQUFDLG9CQUFvQixHQUFJLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUMzRCw2RkFBa0Q7QUFDbEQsMkVBQThDO0FBQzlDLGtFQUFrQztBQUNsQztJQUFzQyxtQ0FBTTtJQUtwQztRQUFBLFlBRUksaUJBQU8sU0FHVjtRQUZHLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSwwQkFBYyxFQUFFLENBQUM7UUFDcEMsSUFBSSxVQUFVLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7O0lBQzNDLENBQUM7SUFFTCwwREFBZ0MsR0FBaEM7UUFBQSxpQkFTQztRQVBHLFNBQVMsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsVUFBQyxRQUFRO1lBRTFDLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ25ELEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2pELEtBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RCxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFDRCx5Q0FBZSxHQUFmO1FBQUEsaUJBbUJDO1FBakJHLHlIQUF5SDtRQUN6SCxJQUFJLENBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQXNCLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUN4RTtZQUNHLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO1NBQzFDO2FBRUE7WUFDRyxJQUFJLFVBQVEsR0FBRyxDQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdFLElBQUksS0FBRyxHQUFHLHdGQUF3RixHQUFHLFVBQVEsQ0FBQztZQUM5RyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFJO2dCQUMxQixLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hELEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakQsS0FBSSxDQUFDLGlDQUFpQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDckQsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7U0FFTjtJQUNMLENBQUM7SUFDRCw2Q0FBbUIsR0FBbkI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xHLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNwQyxJQUFJLGFBQWEsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ3JELE9BQU8sYUFBYSxDQUFDO0lBQ3pCLENBQUM7SUFDRCwyREFBaUMsR0FBakMsVUFBa0MsUUFBWTtRQUE5QyxpQkFrQ0M7UUFqQ0csSUFBSSxHQUFHLEdBQUcsd0dBQXdHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQzFLLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUk7WUFDMUIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3ZELElBQUksVUFBVSxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQWdCLENBQUMsaUJBQWlCLENBQUM7WUFDN0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQWdCLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDOUQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQWdCLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDOUQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQWdCLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDOUQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQWlCLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDaEUsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzdDLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN0RSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDckQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLGFBQWEsR0FBRyxLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDL0MsS0FBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUNsQyxRQUFRLEdBQUcsR0FBRyxHQUFHLGFBQWEsR0FBRyxxQkFBcUIsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRywyQkFBMkIsR0FBRyxLQUFJLENBQUMsUUFBUSxHQUFHLDBCQUEwQixHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztnQkFDM0wsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEQsV0FBVyxDQUFDLFNBQVMsR0FBRyx3QkFBd0IsR0FBRyxNQUFNLEdBQUcsUUFBUSxDQUFDO2dCQUNyRSxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDckMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLFVBQVUsR0FBRyxDQUFDLEVBQUU7b0JBQ2hCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUM1QyxJQUFvQixDQUFDLFVBQTBCLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRyxJQUFvQixDQUFDLENBQUM7aUJBRXRHO3FCQUNLO29CQUNELFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQWdCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNuRixVQUFVLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztpQkFFL0I7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0FBQyxDQXZGcUMsZUFBTSxHQXVGM0M7QUF2RmEsMENBQWU7QUF3RnZCLE1BQU8sQ0FBQyxlQUFlLEdBQUssZUFBZSxDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZuRCxpRkFBcUQ7QUFFcEQ7SUFBb0Msa0NBQW9CO0lBU3JEO1FBQUEsWUFFSSxpQkFBTyxTQVFWO1FBUEcsS0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixLQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7SUFDbkIsQ0FBQztJQUdELDZDQUFvQixHQUFwQjtRQUVJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFpQixDQUFDLFdBQVcsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3RyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBZ0IsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFDL0UsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQWdCLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBRWxHLENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQ0EvQm9DLGtDQUFvQixHQStCeEQ7QUEvQmEsd0NBQWM7QUFnQzVCLHVCQUF1QjtBQUN2QixJQUFJO0FBRUosa0NBQWtDO0FBRWxDLDJDQUEyQztBQUMzQyw0Q0FBNEM7QUFDNUMsdUJBQXVCO0FBQ3ZCLFFBQVE7QUFDUix3QkFBd0I7QUFDeEIsUUFBUTtBQUNSLG9GQUFvRjtBQUNwRix3RkFBd0Y7QUFDeEYseUhBQXlIO0FBQ3pILDZDQUE2QztBQUM3QyxnQkFBZ0I7QUFDaEIsc0RBQXNEO0FBQ3RELDJEQUEyRDtBQUMzRCxpRUFBaUU7QUFDakUsd0VBQXdFO0FBQ3hFLGlGQUFpRjtBQUNqRiw4REFBOEQ7QUFDOUQsK0RBQStEO0FBQy9ELGtEQUFrRDtBQUNsRCxrQkFBa0I7QUFFbEIsUUFBUTtBQUVSLElBQUk7QUFDSiwyQkFBMkI7QUFDckIsTUFBTyxDQUFFLGNBQWMsR0FBSSxjQUFjLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWF0aGVyZm9yZWNhc3QudHNcIik7XG4iLCJpbXBvcnQgeyBXZWF0aGVyRGlzcGxheX0gZnJvbSBcIi4vd2VhdGhlcnRzXCI7IFxyXG5pbXBvcnQgeyBHZXRBcGkgfSBmcm9tIFwiLi9nZXRhcGlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW50TG9jYXRpb24gICB7XHJcbiAgICBjdXJyZW50TG9jYXRpb25PZlVzZXIoKSBcclxuICAgIHtcclxuICAgICAgICAgICAgLy9pdCB0ZWxscyB0aGUgY3VycmVudCBsb2NhdGlvbiBvZiB0aGUgdXNlci5cclxuICAgICAgICAgICAgaWYobmF2aWdhdG9yLmdlb2xvY2F0aW9uKVxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbih0aGlzLmdldEN1cnJlbnRXZWF0aGVyKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBhbGVydChcIk5vdCBzdXBwb3J0aW5nIGJyb3dzZXJcIik7XHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudFdlYXRoZXIocG9zaXRpb246YW55KVxyXG4gICAge1xyXG4gICAgICAgIC8vSXQgZGlzcGxheXMgdGhlIHdlYXRoZXIgb2YgY3V1cmVudCBsb2NhdGlvbi5cclxuICAgICAgICBsZXQgd2VhdGhlciA9IG5ldyBXZWF0aGVyRGlzcGxheSgpO1xyXG4gICAgICAgIGxldCBhcGkgPSBuZXcgR2V0QXBpKCk7XHJcbiAgICAgICAgbGV0IFVSTCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JyArIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSArICcmbG9uPScgKyBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlICsgJyZhcHBpZD0wNTgwNzFiM2M3YmU2YzFiYTIxODVkNDg1ODVjNTBhZCdcclxuICAgICBcclxuICAgICAgICBhcGkuZ2V0QXBpQ2FsbChVUkwpLnRoZW4oZGF0YSA9PiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2VhdGhlci5jaXR5ID0gZGF0YVsnbmFtZSddO1xyXG4gICAgICAgICAgICAgICAgd2VhdGhlci5jb3VudHJ5ID0gZGF0YVsnc3lzJ11bJ2NvdW50cnknXTtcclxuICAgICAgICAgICAgICAgIHdlYXRoZXIudGVtcGVyYXR1cmUgPSBkYXRhWydtYWluJ11bJ3RlbXAnXTtcclxuICAgICAgICAgICAgICAgIHdlYXRoZXIuZGVzY3JpcHRpb24gPSBkYXRhWyd3ZWF0aGVyJ11bMF1bJ2Rlc2NyaXB0aW9uJ107XHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyLnRlbXBlcmF0dXJlID0gd2VhdGhlci50ZW1wZXJhdHVyZSAtIDI3My4xNTtcclxuICAgICAgICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NzXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKSA9IHdlYXRoZXIuY2l0eTtcclxuICAgICAgICAgICAgICAgIHdlYXRoZXIuZGlzcGxheVdlYXRoZXJPbkh0bWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59XHJcbig8YW55PndpbmRvdykuIEN1cnJlbnRMb2NhdGlvbiA9ICBDdXJyZW50TG9jYXRpb247XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgV2VhdGhlckRpc3BsYXkgfSBmcm9tIFwiLi93ZWF0aGVydHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRBcGkgXHJcbntcclxuICAgIFxyXG4gICAgYXN5bmMgZ2V0QXBpQ2FsbChVUkw6YW55KSB7XHJcblxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICBiaW5kRGF0YUZyb21BcGkoKVxyXG4gICAge1xyXG4gICAgICAgIC8vaXQgd2lsbCBmZXRjaCB0aGUgZGF0YSBhY2NvcmRpbmcgdG8gdGhlIGZldGNoZWQgcmVzcG9uc2UgZnJvbSB0aGUgdXNlci5cclxuICAgICAgICBsZXQgbG9jYXRpb24gPSAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jc1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgICAgICAgbGV0IFVSTCA9ICdodHRwOi8vYXBpLndlYXRoZXJzdGFjay5jb20vY3VycmVudD9hY2Nlc3Nfa2V5PWUzYTA3YWVkNDYwYWU4YTNkZGRmOGMzYjkxODJjNzM5JnF1ZXJ5PScgKyBsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLmdldEFwaUNhbGwoVVJMKS50aGVuKGRhdGEgPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCB3ZWF0aGVyID0gbmV3IFdlYXRoZXJEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyLmNpdHkgPSBkYXRhWydsb2NhdGlvbiddWyduYW1lJ107XHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyLmNvdW50cnkgPSBkYXRhWydsb2NhdGlvbiddWydjb3VudHJ5J107XHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyLnRlbXBlcmF0dXJlID0gZGF0YVsnY3VycmVudCddWyd0ZW1wZXJhdHVyZSddO1xyXG4gICAgICAgICAgICAgICAgd2VhdGhlci5kZXNjcmlwdGlvbiA9IGRhdGFbJ2N1cnJlbnQnXVsnd2VhdGhlcl9kZXNjcmlwdGlvbnMnXTtcclxuICAgICAgICAgICAgICAgIHdlYXRoZXIubGF0aXR1ZGUgPSBkYXRhWydsb2NhdGlvbiddWydsYXQnXTtcclxuICAgICAgICAgICAgICAgIHdlYXRoZXIubG9uZ2l0dWRlID0gZGF0YVsnbG9jYXRpb24nXVsnbG9uJ107XHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyLmRpc3BsYXlXZWF0aGVyT25IdG1sKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG59XHJcbig8YW55PndpbmRvdykuIEdldEFwaSA9ICBHZXRBcGk7IiwiaW1wb3J0IHsgR2V0QXBpIH0gZnJvbSBcIi4vZ2V0YXBpXCI7XHJcbmltcG9ydCB7V2VhdGhlckZvcmVjYXN0fSBmcm9tIFwiLi93ZWF0aGVyZm9yZWNhc3RcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGVtcGVyYXR1cmVDb252ZXJ0ZXJcclxue1xyXG4gICAgdGVtcGVyYXR1cmUgOiBudW1iZXIgPSAwO1xyXG4gICAgdGVtcCA6IHN0cmluZyA9IFwiXCI7IFxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmVDb252ZXJ0KCk7XHJcbiAgICB9XHJcbiAgICB0ZW1wZXJhdHVyZUNvbnZlcnQoKVxyXG4gICAgIHtcclxuICAgICAgICAvL2l0IHdpbGwgY2FsY3VsYXRlIHRoZSB0ZW1wZXJhdHVyZSB2YWx1ZXMgaW4gY2Vsc2l1cyAsZmFyZW5oZWl0IGFuZCBrZWx2aW4uXHJcbiAgICAgICAgbGV0IGZhcmVuaGVpdHRlbXBlcmF0dXJlOiBudW1iZXIgPSAodGhpcy50ZW1wZXJhdHVyZSAqIDkgLyA1KSArIDMyO1xyXG4gICAgICAgIGxldCBrZWx2aW50ZW1wZXJhdHVyZTogbnVtYmVyID0gKHRoaXMudGVtcGVyYXR1cmUgKyAyNzMuMTUpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9ICg8SFRNTFNlbGVjdEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdCcpKS52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUgPT0gXCJjZWxzaXVzXCIpIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wID0gXCJUZW1wZXJhdHVyZSBpbiBjZWxzaXVzIDotIFwiICsgdGhpcy50ZW1wZXJhdHVyZS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PSBcImtlbHZpblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcCA9IFwiVGVtcGVyYXR1cmUgaW4ga2VsdmluIDotIFwiICsga2VsdmludGVtcGVyYXR1cmUudG9GaXhlZCgyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcCA9IFwiVGVtcGVyYXR1cmUgaW4gZmFyZW5oZWl0IDotXCIgKyBmYXJlbmhlaXR0ZW1wZXJhdHVyZS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZVRlbXBlcmF0dXJlKClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgIGlmICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyRGV0YWlsc1wiKWFzIEhUTUxFbGVtZW50KS5jaGlsZEVsZW1lbnRDb3VudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvcmVjYXN0ID0gbmV3IFdlYXRoZXJGb3JlY2FzdCgpOyBcclxuICAgICAgICAgICAgICAgIGZvcmVjYXN0LndlYXRoZXJGb3JlY2FzdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFwaSA9IG5ldyBHZXRBcGkoKTtcclxuICAgICAgICAgICAgICAgIGFwaS5iaW5kRGF0YUZyb21BcGkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbig8YW55PndpbmRvdykuVGVtcGVyYXR1cmVDb252ZXJ0ZXIgPSAgVGVtcGVyYXR1cmVDb252ZXJ0ZXI7IiwiaW1wb3J0IHtDdXJyZW50TG9jYXRpb259IGZyb20gXCIuL2N1cnJlbnRsb2NhdGlvblwiOyBcclxuaW1wb3J0IHsgIFdlYXRoZXJEaXNwbGF5IH0gZnJvbSBcIi4vd2VhdGhlcnRzXCI7XHJcbmltcG9ydCB7IEdldEFwaSB9IGZyb20gXCIuL2dldGFwaVwiO1xyXG5leHBvcnQgIGNsYXNzIFdlYXRoZXJGb3JlY2FzdCBleHRlbmRzIEdldEFwaVxyXG4ge1xyXG4gICAgICAgIHRpbWU6IGFueTtcclxuICAgICAgICBwcmVzc3VyZTogYW55O1xyXG4gICAgICAgIHdlYXRoZXI6IGFueVxyXG4gICAgICAgIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMud2VhdGhlciA9IG5ldyBXZWF0aGVyRGlzcGxheSgpO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudGxvYyA9IG5ldyBDdXJyZW50TG9jYXRpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgd2VhdGhlckZvcmVjYXN0T2ZDdXJyZW50TG9jYXRpb24oKSBcclxuICAgIHtcclxuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT5cclxuICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyLmxvbmdpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIubGF0aXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmREYXRhRnJvbUFwaUZvcldlYXRoZXJGb3JlY2FzdChwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHdlYXRoZXJGb3JlY2FzdCgpIFxyXG4gICAge1xyXG4gICAgICAgIC8vIEl0IGZldGNoZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24gb3IgdGhlIGxvY2F0aW9uIGVuZXRyZWQgYnkgdXNlciBhbmQgY2FsbHMgd2VhdGhlckZvcmUgdG8gZGlzcGxheSB0aGUgd2VhdGhlciBmb3JlY2FzdC5cclxuICAgICAgICBpZiAoKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY3NcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpID09PSBcIlwiKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgdGhpcy53ZWF0aGVyRm9yZWNhc3RPZkN1cnJlbnRMb2NhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY3NcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gICAgICAgICAgICBsZXQgVVJMID0gJ2h0dHA6Ly9hcGkud2VhdGhlcnN0YWNrLmNvbS9jdXJyZW50P2FjY2Vzc19rZXk9ZTNhMDdhZWQ0NjBhZThhM2RkZGY4YzNiOTE4MmM3MzkmcXVlcnk9JyArIGxvY2F0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmdldEFwaUNhbGwoVVJMKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyLmxhdGl0dWRlID0gZGF0YVsnbG9jYXRpb24nXVsnbGF0J107XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXIubG9uZ2l0dWRlID0gZGF0YVsnbG9jYXRpb24nXVsnbG9uJ107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmREYXRhRnJvbUFwaUZvcldlYXRoZXJGb3JlY2FzdCh0aGlzLndlYXRoZXIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb252ZXJ0RGF0ZVRvRm9ybWF0KCkge1xyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUodGhpcy50aW1lICogMTAwMCk7XHJcbiAgICAgICAgdmFyIGRhdGUxID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgdmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcclxuICAgICAgICB2YXIgbW9udGggPSBtb250aHNbZGF0ZS5nZXRNb250aCgpXTtcclxuICAgICAgICB2YXIgZm9ybWF0dGVkRGF0ZSA9IGRhdGUxICsgJy0nICsgbW9udGggKyAnLScgKyB5ZWFyO1xyXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xyXG4gICAgfVxyXG4gICAgYmluZERhdGFGcm9tQXBpRm9yV2VhdGhlckZvcmVjYXN0KHBvc2l0aW9uOmFueSkge1xyXG4gICAgICAgIGxldCBVUkwgPSAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9hcGkuZGFya3NreS5uZXQvZm9yZWNhc3QvOTc5OWM1YWVkZDkwYzA4ZWRhYzdmOGFmNzNjODFiYTkvJyArIHRoaXMud2VhdGhlci5sYXRpdHVkZSArICcsJyArIHRoaXMud2VhdGhlci5sb25naXR1ZGU7XHJcbiAgICAgICAgdGhpcy5nZXRBcGlDYWxsKFVSTCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgdmFyIGhvdXJkYXRhID0gJyc7XHJcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBPYmplY3Qua2V5cyhkYXRhWydkYWlseSddWydkYXRhJ10pLmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGNoaWxkQ291bnQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyRGV0YWlsc1wiKWFzIEhUTUxFbGVtZW50KS5jaGlsZEVsZW1lbnRDb3VudDtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsMVwiKWFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsMlwiKWFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsM1wiKWFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsNFwiKSBhcyBIVE1MRWxlbWVudCkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZSA9IGRhdGFbJ2RhaWx5J11bJ2RhdGEnXVtpXVsndGltZSddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyLnRlbXBlcmF0dXJlID0gZGF0YVsnZGFpbHknXVsnZGF0YSddW2ldWyd0ZW1wZXJhdHVyZUxvdyddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc3VyZSA9IGRhdGFbJ2RhaWx5J11bJ2RhdGEnXVtpXVsncHJlc3N1cmUnXTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlci5kZXNjcmlwdGlvbiA9IGRhdGFbJ2RhaWx5J11bJ2RhdGEnXVtpXVsnc3VtbWFyeSddO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlZERhdGUgPSB0aGlzLmNvbnZlcnREYXRlVG9Gb3JtYXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlci50ZW1wZXJhdHVyZUNvbnZlcnQoKTtcclxuICAgICAgICAgICAgICAgIGhvdXJkYXRhID0gXCIgXCIgKyBmb3JtYXR0ZWREYXRlICsgXCI8YnI+PGI+VGVtcCA8L2I+Oi0gXCIgKyB0aGlzLndlYXRoZXIudGVtcCArIFwiPGJyPjxiPlByZXNzdXJlIGlzPC9iPjotIFwiICsgdGhpcy5wcmVzc3VyZSArIFwiPGJyPjxiPlN1bW1hcnkgaXMgOi08L2I+XCIgKyB0aGlzLndlYXRoZXIuZGVzY3JpcHRpb24gKyBcIiA8YnI+XCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGlzcGxheURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheURhdGEuaW5uZXJIVE1MID0gJzxiPjx1PkRhdGUgaXM6PC9iPjwvdT4nICsgJzxicj4nICsgaG91cmRhdGE7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5RGF0YS5jbGFzc0xpc3QuYWRkKFwiRGV0YWlsc1wiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlEYXRhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGV0XCIgKyBpKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZENvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICgobm9kZSBhcyBIVE1MRWxlbWVudCkucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCkucmVwbGFjZUNoaWxkKGRpc3BsYXlEYXRhLCAobm9kZSBhcyBIVE1MRWxlbWVudCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyRGV0YWlsc1wiKWFzIEhUTUxFbGVtZW50KS5hcHBlbmRDaGlsZChkaXNwbGF5RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb3VudCA9IGNoaWxkQ291bnQgLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuKDxhbnk+d2luZG93KS5XZWF0aGVyRm9yZWNhc3QgID0gIFdlYXRoZXJGb3JlY2FzdCA7XHJcbiIsImltcG9ydCB7IFRlbXBlcmF0dXJlQ29udmVydGVyIH0gZnJvbSBcIi4vdGVtcGVyYXR1cmVcIjtcclxuXHJcbiBleHBvcnQgY2xhc3MgV2VhdGhlckRpc3BsYXkgZXh0ZW5kcyBUZW1wZXJhdHVyZUNvbnZlcnRlciB7XHJcblxyXG4gICAgY2l0eTogc3RyaW5nO1xyXG4gICAgY291bnRyeTogc3RyaW5nO1xyXG4gICAgdGVtcGVyYXR1cmU6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xyXG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgICB0ZW1wOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNpdHkgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY291bnRyeSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IDA7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IDA7XHJcbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSAwO1xyXG4gICAgICAgIHRoaXMudGVtcCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgXHJcbiAgICBkaXNwbGF5V2VhdGhlck9uSHRtbCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmVDb252ZXJ0KCk7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsMlwiKSBhcyBIVE1MRWxlbWVudCkudGV4dENvbnRlbnQgPSBcImxvY2F0aW9uIDotXCIgKyB0aGlzLmNpdHkgKyBcIixcIiArIHRoaXMuY291bnRyeTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWwzXCIpYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IHRoaXMudGVtcCArIFwiIDxicj5cIjtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWw0XCIpYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IFwiZGVzY3JpcHRpb24gXCIgKyB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG4vLyBleHBvcnQgY2xhc3MgR2V0QXBpIFxyXG4vLyB7XHJcbiAgICBcclxuLy8gICAgIGFzeW5jIGdldEFwaUNhbGwoVVJMOmFueSkge1xyXG5cclxuLy8gICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpO1xyXG4vLyAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4vLyAgICAgICAgIHJldHVybiBkYXRhO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgYmluZERhdGFGcm9tQXBpKClcclxuLy8gICAgIHtcclxuLy8gICAgICAgICAvL2l0IHdpbGwgZmV0Y2ggdGhlIGRhdGEgYWNjb3JkaW5nIHRvIHRoZSBmZXRjaGVkIHJlc3BvbnNlIGZyb20gdGhlIHVzZXIuXHJcbi8vICAgICAgICAgbGV0IGxvY2F0aW9uID0gKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY3NcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4vLyAgICAgICAgIGxldCBVUkwgPSAnaHR0cDovL2FwaS53ZWF0aGVyc3RhY2suY29tL2N1cnJlbnQ/YWNjZXNzX2tleT1lM2EwN2FlZDQ2MGFlOGEzZGRkZjhjM2I5MTgyYzczOSZxdWVyeT0nICsgbG9jYXRpb247XHJcbi8vICAgICAgICAgdGhpcy5nZXRBcGlDYWxsKFVSTCkudGhlbihkYXRhID0+IFxyXG4vLyAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgd2VhdGhlciA9IG5ldyBXZWF0aGVyRGlzcGxheSgpO1xyXG4vLyAgICAgICAgICAgICAgICAgd2VhdGhlci5jaXR5ID0gZGF0YVsnbG9jYXRpb24nXVsnbmFtZSddO1xyXG4vLyAgICAgICAgICAgICAgICAgd2VhdGhlci5jb3VudHJ5ID0gZGF0YVsnbG9jYXRpb24nXVsnY291bnRyeSddO1xyXG4vLyAgICAgICAgICAgICAgICAgd2VhdGhlci50ZW1wZXJhdHVyZSA9IGRhdGFbJ2N1cnJlbnQnXVsndGVtcGVyYXR1cmUnXTtcclxuLy8gICAgICAgICAgICAgICAgIHdlYXRoZXIuZGVzY3JpcHRpb24gPSBkYXRhWydjdXJyZW50J11bJ3dlYXRoZXJfZGVzY3JpcHRpb25zJ107XHJcbi8vICAgICAgICAgICAgICAgICB3ZWF0aGVyLmxhdGl0dWRlID0gZGF0YVsnbG9jYXRpb24nXVsnbGF0J107XHJcbi8vICAgICAgICAgICAgICAgICB3ZWF0aGVyLmxvbmdpdHVkZSA9IGRhdGFbJ2xvY2F0aW9uJ11bJ2xvbiddO1xyXG4vLyAgICAgICAgICAgICAgICAgd2VhdGhlci5kaXNwbGF5V2VhdGhlck9uSHRtbCgpO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuXHJcbi8vICAgICB9XHJcbiAgICBcclxuLy8gfVxyXG4vLyAvLyBsZXQgdCA9IG5ldyBHZXRBcGkoKTtcclxuKDxhbnk+d2luZG93KS4gV2VhdGhlckRpc3BsYXkgPSAgV2VhdGhlckRpc3BsYXk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=