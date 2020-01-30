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
var weatherts_1 = __webpack_require__(/*! ./weatherts */ "./weatherts.ts");
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
window.CurrentLocation = CurrentLocation;
// let cl = new CurrentLocation();


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
                document.getElementById("val1").innerHTML = "";
                document.getElementById("val2").innerHTML = "";
                document.getElementById("val3").innerHTML = "";
                document.getElementById("val4").innerHTML = "";
                _this.time = data['daily']['data'][i]['time'];
                _this.temperature = data['daily']['data'][i]['temperatureLow'];
                _this.pressure = data['daily']['data'][i]['pressure'];
                _this.description = data['daily']['data'][i]['summary'];
                var formattedDate = _this.convertDateToFormat();
                _this.temperatureConvert();
                hourdata = " " + formattedDate + "<br><b>Temp </b>:- " + _this.temp + "<br><b>Pressure is</b>:- " + _this.pressure + "<br><b>Summary is :-</b>" + _this.description + " <br>";
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
    WeatherForecast.prototype.changeTemperature = function () {
        if (document.getElementById("weatherDetails").childElementCount) {
            this.weatherForecast();
        }
        else {
            this.bindDataFromApi();
        }
    };
    return WeatherForecast;
}(currentlocation_1.CurrentLocation));
exports.default = WeatherForecast;
window.WeatherForecast = WeatherForecast;
var wf = new WeatherForecast();


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
var WeatherDisplay = /** @class */ (function () {
    function WeatherDisplay() {
        this.city = "";
        this.country = "";
        this.temperature = 0;
        this.description = "";
        this.latitude = 0;
        this.longitude = 0;
        this.temp = "";
    }
    WeatherDisplay.prototype.temperatureConvert = function () {
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
    WeatherDisplay.prototype.displayWeatherOnHtml = function () {
        this.temperatureConvert();
        document.getElementById("val2").textContent = "location :-" + this.city + "," + this.country;
        document.getElementById("val3").innerHTML = this.temp + " <br>";
        document.getElementById("val4").innerHTML = "description " + this.description;
    };
    return WeatherDisplay;
}());
exports.WeatherDisplay = WeatherDisplay;
var GetApi = /** @class */ (function (_super) {
    __extends(GetApi, _super);
    function GetApi() {
        return _super !== null && _super.apply(this, arguments) || this;
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
        var _this = this;
        //it will fetch the data according to the fetched response from the user.
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
    return GetApi;
}(WeatherDisplay));
exports.GetApi = GetApi;
// let t = new GetApi();
window.GetApi = GetApi;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3VycmVudGxvY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3dlYXRoZXJmb3JlY2FzdC50cyIsIndlYnBhY2s6Ly8vLi93ZWF0aGVydHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSwyRUFBbUM7QUFFbkM7SUFBcUMsbUNBQU07SUFBM0M7O0lBOEJBLENBQUM7SUE1QkcsK0NBQXFCLEdBQXJCO1FBQUEsaUJBVUM7UUFSTyw0Q0FBNEM7UUFDNUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFDLFFBQVE7WUFFN0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUMzQyxLQUFJLENBQUMsUUFBUSxHQUFH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LFNBQVMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDM0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFFWCxDQUFDO0lBRUwsYUFBQztBQUFELENBQUMsQ0E1QjJCLGNBQWMsR0E0QnpDO0FBNUJZLHdCQUFNO0FBNkJuQix3QkFBd0I7QUFDbEIsTUFBTyxDQUFFLE1BQU0sR0FBSSxNQUFNLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWF0aGVyZm9yZWNhc3QudHNcIik7XG4iLCJpbXBvcnQge0dldEFwaX0gZnJvbSBcIi4vd2VhdGhlcnRzXCI7IFxyXG5cclxuZXhwb3J0IGNsYXNzIEN1cnJlbnRMb2NhdGlvbiBleHRlbmRzIEdldEFwaSAge1xyXG5cclxuICAgIGN1cnJlbnRMb2NhdGlvbk9mVXNlcigpIFxyXG4gICAge1xyXG4gICAgICAgICAgICAvL2l0IHRlbGxzIHRoZSBjdXJyZW50IGxvY2F0aW9uIG9mIHRoZSB1c2VyLlxyXG4gICAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIHRoaXMubG9uZ2l0dWRlID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuICAgICAgICAgICAgICAgICB0aGlzLmxhdGl0dWRlID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFdlYXRoZXIoKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRXZWF0aGVyKClcclxuICAgIHtcclxuICAgICAgICAvL0l0IGRpc3BsYXlzIHRoZSB3ZWF0aGVyIG9mIGN1dXJlbnQgbG9jYXRpb24uXHJcbiAgICAgICAgbGV0IFVSTCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JyArIHRoaXMubGF0aXR1ZGUgKyAnJmxvbj0nICsgdGhpcy5sb25naXR1ZGUgKyAnJmFwcGlkPTA1ODA3MWIzYzdiZTZjMWJhMjE4NWQ0ODU4NWM1MGFkJ1xyXG4gICAgICAgIHRoaXMuZ2V0QXBpQ2FsbChVUkwpLnRoZW4oZGF0YSA9PiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaXR5ID0gZGF0YVsnbmFtZSddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5ID0gZGF0YVsnc3lzJ11bJ2NvdW50cnknXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSBkYXRhWydtYWluJ11bJ3RlbXAnXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkYXRhWyd3ZWF0aGVyJ11bMF1bJ2Rlc2NyaXB0aW9uJ107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBlcmF0dXJlID0gdGhpcy50ZW1wZXJhdHVyZSAtIDI3My4xNTtcclxuICAgICAgICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NzXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKSA9IHRoaXMuY2l0eTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVdlYXRoZXJPbkh0bWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59XHJcbig8YW55PndpbmRvdykuIEN1cnJlbnRMb2NhdGlvbiA9ICBDdXJyZW50TG9jYXRpb247XHJcbi8vIGxldCBjbCA9IG5ldyBDdXJyZW50TG9jYXRpb24oKTsiLCJpbXBvcnQge0N1cnJlbnRMb2NhdGlvbn0gZnJvbSBcIi4vY3VycmVudGxvY2F0aW9uXCI7IFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyRm9yZWNhc3QgZXh0ZW5kcyBDdXJyZW50TG9jYXRpb25cclxuIHtcclxuICAgICAgICB0aW1lOiBhbnk7XHJcbiAgICAgICAgcHJlc3N1cmU6IGFueTtcclxuXHJcbiAgICB3ZWF0aGVyRm9yZWNhc3RPZkN1cnJlbnRMb2NhdGlvbigpIFxyXG4gICAge1xyXG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PlxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhdGl0dWRlID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kRGF0YUZyb21BcGlGb3JXZWF0aGVyRm9yZWNhc3QoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgd2VhdGhlckZvcmVjYXN0KCkgXHJcbiAgICB7XHJcbiAgICAgICAgLy8gSXQgZmV0Y2hlcyB0aGUgY3VycmVudCBsb2NhdGlvbiBvciB0aGUgbG9jYXRpb24gZW5ldHJlZCBieSB1c2VyIGFuZCBjYWxscyB3ZWF0aGVyRm9yZSB0byBkaXNwbGF5IHRoZSB3ZWF0aGVyIGZvcmVjYXN0LlxyXG4gICAgICAgIGlmICgoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jc1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSkgPT09IFwiXCIpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy53ZWF0aGVyRm9yZWNhc3RPZkN1cnJlbnRMb2NhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY3NcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gICAgICAgICAgICBsZXQgVVJMID0gJ2h0dHA6Ly9hcGkud2VhdGhlcnN0YWNrLmNvbS9jdXJyZW50P2FjY2Vzc19rZXk9ZTNhMDdhZWQ0NjBhZThhM2RkZGY4YzNiOTE4MmM3MzkmcXVlcnk9JyArIGxvY2F0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmdldEFwaUNhbGwoVVJMKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXRpdHVkZSA9IGRhdGFbJ2xvY2F0aW9uJ11bJ2xhdCddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBkYXRhWydsb2NhdGlvbiddWydsb24nXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmluZERhdGFGcm9tQXBpRm9yV2VhdGhlckZvcmVjYXN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb252ZXJ0RGF0ZVRvRm9ybWF0KCkge1xyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUodGhpcy50aW1lICogMTAwMCk7XHJcbiAgICAgICAgdmFyIGRhdGUxID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgdmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcclxuICAgICAgICB2YXIgbW9udGggPSBtb250aHNbZGF0ZS5nZXRNb250aCgpXTtcclxuICAgICAgICB2YXIgZm9ybWF0dGVkRGF0ZSA9IGRhdGUxICsgJy0nICsgbW9udGggKyAnLScgKyB5ZWFyO1xyXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xyXG4gICAgfVxyXG4gICAgYmluZERhdGFGcm9tQXBpRm9yV2VhdGhlckZvcmVjYXN0KCkge1xyXG4gICAgICAgIGxldCBVUkwgPSAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9hcGkuZGFya3NreS5uZXQvZm9yZWNhc3QvOTc5OWM1YWVkZDkwYzA4ZWRhYzdmOGFmNzNjODFiYTkvJyArIHRoaXMubGF0aXR1ZGUgKyAnLCcgKyB0aGlzLmxvbmdpdHVkZTtcclxuICAgICAgICB0aGlzLmdldEFwaUNhbGwoVVJMKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB2YXIgaG91cmRhdGEgPSAnJztcclxuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IE9iamVjdC5rZXlzKGRhdGFbJ2RhaWx5J11bJ2RhdGEnXSkubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgY2hpbGRDb3VudCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJEZXRhaWxzXCIpYXMgSFRNTEVsZW1lbnQpLmNoaWxkRWxlbWVudENvdW50O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWwxXCIpYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWwyXCIpYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWwzXCIpYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWw0XCIpIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lID0gZGF0YVsnZGFpbHknXVsnZGF0YSddW2ldWyd0aW1lJ107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBlcmF0dXJlID0gZGF0YVsnZGFpbHknXVsnZGF0YSddW2ldWyd0ZW1wZXJhdHVyZUxvdyddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc3VyZSA9IGRhdGFbJ2RhaWx5J11bJ2RhdGEnXVtpXVsncHJlc3N1cmUnXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkYXRhWydkYWlseSddWydkYXRhJ11baV1bJ3N1bW1hcnknXTtcclxuICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZWREYXRlID0gdGhpcy5jb252ZXJ0RGF0ZVRvRm9ybWF0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBlcmF0dXJlQ29udmVydCgpO1xyXG4gICAgICAgICAgICAgICAgaG91cmRhdGEgPSBcIiBcIiArIGZvcm1hdHRlZERhdGUgKyBcIjxicj48Yj5UZW1wIDwvYj46LSBcIiArIHRoaXMudGVtcCArIFwiPGJyPjxiPlByZXNzdXJlIGlzPC9iPjotIFwiICsgdGhpcy5wcmVzc3VyZSArIFwiPGJyPjxiPlN1bW1hcnkgaXMgOi08L2I+XCIgKyB0aGlzLmRlc2NyaXB0aW9uICsgXCIgPGJyPlwiO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpc3BsYXlEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlEYXRhLmlubmVySFRNTCA9ICc8Yj48dT5EYXRlIGlzOjwvYj48L3U+JyArICc8YnI+JyArIGhvdXJkYXRhO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheURhdGEuY2xhc3NMaXN0LmFkZChcIkRldGFpbHNcIik7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5RGF0YS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRldFwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0XCIgKyBpKTtcclxuICAgICAgICAgICAgICAgICAgICAoKG5vZGUgYXMgSFRNTEVsZW1lbnQpLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpLnJlcGxhY2VDaGlsZChkaXNwbGF5RGF0YSwgKG5vZGUgYXMgSFRNTEVsZW1lbnQpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlckRldGFpbHNcIilhcyBIVE1MRWxlbWVudCkuYXBwZW5kQ2hpbGQoZGlzcGxheURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ291bnQgPSBjaGlsZENvdW50IC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNoYW5nZVRlbXBlcmF0dXJlKClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgIGlmICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyRGV0YWlsc1wiKWFzIEhUTUxFbGVtZW50KS5jaGlsZEVsZW1lbnRDb3VudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyRm9yZWNhc3QoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmluZERhdGFGcm9tQXBpKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG4oPGFueT53aW5kb3cpLldlYXRoZXJGb3JlY2FzdCAgPSAgV2VhdGhlckZvcmVjYXN0IDtcclxubGV0IHdmID0gbmV3IFdlYXRoZXJGb3JlY2FzdCgpOyIsIlxyXG4gZXhwb3J0IGNsYXNzIFdlYXRoZXJEaXNwbGF5IHtcclxuXHJcbiAgICBjaXR5OiBzdHJpbmc7XHJcbiAgICBjb3VudHJ5OiBzdHJpbmc7XHJcbiAgICB0ZW1wZXJhdHVyZTogbnVtYmVyO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGxhdGl0dWRlOiBudW1iZXI7XHJcbiAgICBsb25naXR1ZGU6IG51bWJlcjtcclxuICAgIHRlbXA6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNpdHkgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY291bnRyeSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IDA7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IDA7XHJcbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSAwO1xyXG4gICAgICAgIHRoaXMudGVtcCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICB0ZW1wZXJhdHVyZUNvbnZlcnQoKVxyXG4gICAgIHtcclxuICAgICAgICAvL2l0IHdpbGwgY2FsY3VsYXRlIHRoZSB0ZW1wZXJhdHVyZSB2YWx1ZXMgaW4gY2Vsc2l1cyAsZmFyZW5oZWl0IGFuZCBrZWx2aW4uXHJcbiAgICAgICAgbGV0IGZhcmVuaGVpdHRlbXBlcmF0dXJlOiBudW1iZXIgPSAodGhpcy50ZW1wZXJhdHVyZSAqIDkgLyA1KSArIDMyO1xyXG4gICAgICAgIGxldCBrZWx2aW50ZW1wZXJhdHVyZTogbnVtYmVyID0gKHRoaXMudGVtcGVyYXR1cmUgKyAyNzMuMTUpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9ICg8SFRNTFNlbGVjdEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdCcpKS52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUgPT0gXCJjZWxzaXVzXCIpIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wID0gXCJUZW1wZXJhdHVyZSBpbiBjZWxzaXVzIDotIFwiICsgdGhpcy50ZW1wZXJhdHVyZS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PSBcImtlbHZpblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcCA9IFwiVGVtcGVyYXR1cmUgaW4ga2VsdmluIDotIFwiICsga2VsdmludGVtcGVyYXR1cmUudG9GaXhlZCgyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcCA9IFwiVGVtcGVyYXR1cmUgaW4gZmFyZW5oZWl0IDotXCIgKyBmYXJlbmhlaXR0ZW1wZXJhdHVyZS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgICBkaXNwbGF5V2VhdGhlck9uSHRtbCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmVDb252ZXJ0KCk7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsMlwiKSBhcyBIVE1MRWxlbWVudCkudGV4dENvbnRlbnQgPSBcImxvY2F0aW9uIDotXCIgKyB0aGlzLmNpdHkgKyBcIixcIiArIHRoaXMuY291bnRyeTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWwzXCIpYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IHRoaXMudGVtcCArIFwiIDxicj5cIjtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWw0XCIpYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IFwiZGVzY3JpcHRpb24gXCIgKyB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0QXBpIGV4dGVuZHMgV2VhdGhlckRpc3BsYXlcclxue1xyXG4gICAgXHJcbiAgICBhc3luYyBnZXRBcGlDYWxsKFVSTDphbnkpIHtcclxuXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMKTtcclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIGJpbmREYXRhRnJvbUFwaSgpXHJcbiAgICB7XHJcbiAgICAgICAgLy9pdCB3aWxsIGZldGNoIHRoZSBkYXRhIGFjY29yZGluZyB0byB0aGUgZmV0Y2hlZCByZXNwb25zZSBmcm9tIHRoZSB1c2VyLlxyXG4gICAgICAgIGxldCBsb2NhdGlvbiA9ICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NzXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuICAgICAgICBsZXQgVVJMID0gJ2h0dHA6Ly9hcGkud2VhdGhlcnN0YWNrLmNvbS9jdXJyZW50P2FjY2Vzc19rZXk9ZTNhMDdhZWQ0NjBhZThhM2RkZGY4YzNiOTE4MmM3MzkmcXVlcnk9JyArIGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuZ2V0QXBpQ2FsbChVUkwpLnRoZW4oZGF0YSA9PiBcclxuICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2l0eSA9IGRhdGFbJ2xvY2F0aW9uJ11bJ25hbWUnXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRyeSA9IGRhdGFbJ2xvY2F0aW9uJ11bJ2NvdW50cnknXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSBkYXRhWydjdXJyZW50J11bJ3RlbXBlcmF0dXJlJ107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGF0YVsnY3VycmVudCddWyd3ZWF0aGVyX2Rlc2NyaXB0aW9ucyddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXRpdHVkZSA9IGRhdGFbJ2xvY2F0aW9uJ11bJ2xhdCddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBkYXRhWydsb2NhdGlvbiddWydsb24nXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVdlYXRoZXJPbkh0bWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLy8gbGV0IHQgPSBuZXcgR2V0QXBpKCk7XHJcbig8YW55PndpbmRvdykuIEdldEFwaSA9ICBHZXRBcGk7Il0sInNvdXJjZVJvb3QiOiIifQ==