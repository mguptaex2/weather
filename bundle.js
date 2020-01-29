var WeatherForecast =
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
var t = new GetApi();


/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWF0aGVyRm9yZWNhc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vV2VhdGhlckZvcmVjYXN0Ly4vY3VycmVudGxvY2F0aW9uLnRzIiwid2VicGFjazovL1dlYXRoZXJGb3JlY2FzdC8uL3dlYXRoZXJmb3JlY2FzdC50cyIsIndlYnBhY2s6Ly9XZWF0aGVyRm9yZWNhc3QvLi93ZWF0aGVydHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsMkVBQW1DO0FBRW5DO0lBQXFDLG1DQUFNO0lBQTNDOztJQThCQSxDQUFDO0lBNUJHLCtDQUFxQixHQUFyQjtRQUFBLGlCQVVDO1FBUk8sNENBQTRDO1FBQzVDLFNBQVMsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsVUFBQyxRQUFRO1lBRTdDLEtBQUksQ0FBQyxTQUFT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Q0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzNELEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUVMLGFBQUM7QUFBRCxDQUFDLENBNUIyQixjQUFjLEdBNEJ6QztBQTVCWSx3QkFBTTtBQTZCbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dlYXRoZXJmb3JlY2FzdC50c1wiKTtcbiIsImltcG9ydCB7R2V0QXBpfSBmcm9tIFwiLi93ZWF0aGVydHNcIjsgXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VycmVudExvY2F0aW9uIGV4dGVuZHMgR2V0QXBpICB7XHJcblxyXG4gICAgY3VycmVudExvY2F0aW9uT2ZVc2VyKCkgXHJcbiAgICB7XHJcbiAgICAgICAgICAgIC8vaXQgdGVsbHMgdGhlIGN1cnJlbnQgbG9jYXRpb24gb2YgdGhlIHVzZXIuXHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMubGF0aXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5nZXRDdXJyZW50V2VhdGhlcigpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudFdlYXRoZXIoKVxyXG4gICAge1xyXG4gICAgICAgIC8vSXQgZGlzcGxheXMgdGhlIHdlYXRoZXIgb2YgY3V1cmVudCBsb2NhdGlvbi5cclxuICAgICAgICBsZXQgVVJMID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0nICsgdGhpcy5sYXRpdHVkZSArICcmbG9uPScgKyB0aGlzLmxvbmdpdHVkZSArICcmYXBwaWQ9MDU4MDcxYjNjN2JlNmMxYmEyMTg1ZDQ4NTg1YzUwYWQnXHJcbiAgICAgICAgdGhpcy5nZXRBcGlDYWxsKFVSTCkudGhlbihkYXRhID0+IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNpdHkgPSBkYXRhWyduYW1lJ107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50cnkgPSBkYXRhWydzeXMnXVsnY291bnRyeSddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IGRhdGFbJ21haW4nXVsndGVtcCddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRhdGFbJ3dlYXRoZXInXVswXVsnZGVzY3JpcHRpb24nXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSB0aGlzLnRlbXBlcmF0dXJlIC0gMjczLjE1O1xyXG4gICAgICAgICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY3NcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpID0gdGhpcy5jaXR5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5V2VhdGhlck9uSHRtbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn1cclxuLy8gbGV0IGNsID0gbmV3IEN1cnJlbnRMb2NhdGlvbigpOyIsImltcG9ydCB7Q3VycmVudExvY2F0aW9ufSBmcm9tIFwiLi9jdXJyZW50bG9jYXRpb25cIjsgXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXJGb3JlY2FzdCBleHRlbmRzIEN1cnJlbnRMb2NhdGlvblxyXG4ge1xyXG4gICAgICAgIHRpbWU6IGFueTtcclxuICAgICAgICBwcmVzc3VyZTogYW55O1xyXG5cclxuICAgIHdlYXRoZXJGb3JlY2FzdE9mQ3VycmVudExvY2F0aW9uKCkgXHJcbiAgICB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+XHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9uZ2l0dWRlID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGF0aXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmREYXRhRnJvbUFwaUZvcldlYXRoZXJGb3JlY2FzdCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB3ZWF0aGVyRm9yZWNhc3QoKSBcclxuICAgIHtcclxuICAgICAgICAvLyBJdCBmZXRjaGVzIHRoZSBjdXJyZW50IGxvY2F0aW9uIG9yIHRoZSBsb2NhdGlvbiBlbmV0cmVkIGJ5IHVzZXIgYW5kIGNhbGxzIHdlYXRoZXJGb3JlIHRvIGRpc3BsYXkgdGhlIHdlYXRoZXIgZm9yZWNhc3QuXHJcbiAgICAgICAgaWYgKCgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NzXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKSA9PT0gXCJcIikgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLndlYXRoZXJGb3JlY2FzdE9mQ3VycmVudExvY2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb24gPSAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jc1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGxldCBVUkwgPSAnaHR0cDovL2FwaS53ZWF0aGVyc3RhY2suY29tL2N1cnJlbnQ/YWNjZXNzX2tleT1lM2EwN2FlZDQ2MGFlOGEzZGRkZjhjM2I5MTgyYzczOSZxdWVyeT0nICsgbG9jYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QXBpQ2FsbChVUkwpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhdGl0dWRlID0gZGF0YVsnbG9jYXRpb24nXVsnbGF0J107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IGRhdGFbJ2xvY2F0aW9uJ11bJ2xvbiddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kRGF0YUZyb21BcGlGb3JXZWF0aGVyRm9yZWNhc3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnZlcnREYXRlVG9Gb3JtYXQoKSB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnRpbWUgKiAxMDAwKTtcclxuICAgICAgICB2YXIgZGF0ZTEgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICB2YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xyXG4gICAgICAgIHZhciBtb250aCA9IG1vbnRoc1tkYXRlLmdldE1vbnRoKCldO1xyXG4gICAgICAgIHZhciBmb3JtYXR0ZWREYXRlID0gZGF0ZTEgKyAnLScgKyBtb250aCArICctJyArIHllYXI7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZERhdGU7XHJcbiAgICB9XHJcbiAgICBiaW5kRGF0YUZyb21BcGlGb3JXZWF0aGVyRm9yZWNhc3QoKSB7XHJcbiAgICAgICAgbGV0IFVSTCA9ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL2FwaS5kYXJrc2t5Lm5ldC9mb3JlY2FzdC85Nzk5YzVhZWRkOTBjMDhlZGFjN2Y4YWY3M2M4MWJhOS8nICsgdGhpcy5sYXRpdHVkZSArICcsJyArIHRoaXMubG9uZ2l0dWRlO1xyXG4gICAgICAgIHRoaXMuZ2V0QXBpQ2FsbChVUkwpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBob3VyZGF0YSA9ICcnO1xyXG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gT2JqZWN0LmtleXMoZGF0YVsnZGFpbHknXVsnZGF0YSddKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBjaGlsZENvdW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlckRldGFpbHNcIilhcyBIVE1MRWxlbWVudCkuY2hpbGRFbGVtZW50Q291bnQ7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbDFcIilhcyBIVE1MRWxlbWVudCkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbDJcIilhcyBIVE1MRWxlbWVudCkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbDNcIilhcyBIVE1MRWxlbWVudCkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbDRcIikgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSBkYXRhWydkYWlseSddWydkYXRhJ11baV1bJ3RpbWUnXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSBkYXRhWydkYWlseSddWydkYXRhJ11baV1bJ3RlbXBlcmF0dXJlTG93J107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzdXJlID0gZGF0YVsnZGFpbHknXVsnZGF0YSddW2ldWydwcmVzc3VyZSddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRhdGFbJ2RhaWx5J11bJ2RhdGEnXVtpXVsnc3VtbWFyeSddO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlZERhdGUgPSB0aGlzLmNvbnZlcnREYXRlVG9Gb3JtYXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcGVyYXR1cmVDb252ZXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBob3VyZGF0YSA9IFwiIFwiICsgZm9ybWF0dGVkRGF0ZSArIFwiPGJyPjxiPlRlbXAgPC9iPjotIFwiICsgdGhpcy50ZW1wICsgXCI8YnI+PGI+UHJlc3N1cmUgaXM8L2I+Oi0gXCIgKyB0aGlzLnByZXNzdXJlICsgXCI8YnI+PGI+U3VtbWFyeSBpcyA6LTwvYj5cIiArIHRoaXMuZGVzY3JpcHRpb24gKyBcIiA8YnI+XCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGlzcGxheURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheURhdGEuaW5uZXJIVE1MID0gJzxiPjx1PkRhdGUgaXM6PC9iPjwvdT4nICsgJzxicj4nICsgaG91cmRhdGE7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5RGF0YS5jbGFzc0xpc3QuYWRkKFwiRGV0YWlsc1wiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlEYXRhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGV0XCIgKyBpKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZENvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICgobm9kZSBhcyBIVE1MRWxlbWVudCkucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCkucmVwbGFjZUNoaWxkKGRpc3BsYXlEYXRhLCAobm9kZSBhcyBIVE1MRWxlbWVudCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyRGV0YWlsc1wiKWFzIEhUTUxFbGVtZW50KS5hcHBlbmRDaGlsZChkaXNwbGF5RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb3VudCA9IGNoaWxkQ291bnQgLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlVGVtcGVyYXR1cmUoKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgaWYgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJEZXRhaWxzXCIpYXMgSFRNTEVsZW1lbnQpLmNoaWxkRWxlbWVudENvdW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXJGb3JlY2FzdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kRGF0YUZyb21BcGkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmxldCB3ZiA9IG5ldyBXZWF0aGVyRm9yZWNhc3QoKTsiLCJcclxuIGV4cG9ydCBjbGFzcyBXZWF0aGVyRGlzcGxheSB7XHJcblxyXG4gICAgY2l0eTogc3RyaW5nO1xyXG4gICAgY291bnRyeTogc3RyaW5nO1xyXG4gICAgdGVtcGVyYXR1cmU6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xyXG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgICB0ZW1wOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jaXR5ID0gXCJcIjtcclxuICAgICAgICB0aGlzLmNvdW50cnkgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSAwO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlwiO1xyXG4gICAgICAgIHRoaXMubGF0aXR1ZGUgPSAwO1xyXG4gICAgICAgIHRoaXMubG9uZ2l0dWRlID0gMDtcclxuICAgICAgICB0aGlzLnRlbXAgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgdGVtcGVyYXR1cmVDb252ZXJ0KClcclxuICAgICB7XHJcbiAgICAgICAgLy9pdCB3aWxsIGNhbGN1bGF0ZSB0aGUgdGVtcGVyYXR1cmUgdmFsdWVzIGluIGNlbHNpdXMgLGZhcmVuaGVpdCBhbmQga2VsdmluLlxyXG4gICAgICAgIGxldCBmYXJlbmhlaXR0ZW1wZXJhdHVyZTogbnVtYmVyID0gKHRoaXMudGVtcGVyYXR1cmUgKiA5IC8gNSkgKyAzMjtcclxuICAgICAgICBsZXQga2VsdmludGVtcGVyYXR1cmU6IG51bWJlciA9ICh0aGlzLnRlbXBlcmF0dXJlICsgMjczLjE1KTtcclxuICAgICAgICBsZXQgdmFsdWUgPSAoPEhUTUxTZWxlY3RFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QnKSkudmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IFwiY2Vsc2l1c1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcCA9IFwiVGVtcGVyYXR1cmUgaW4gY2Vsc2l1cyA6LSBcIiArIHRoaXMudGVtcGVyYXR1cmUudG9GaXhlZCgyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT0gXCJrZWx2aW5cIikge1xyXG4gICAgICAgICAgICB0aGlzLnRlbXAgPSBcIlRlbXBlcmF0dXJlIGluIGtlbHZpbiA6LSBcIiArIGtlbHZpbnRlbXBlcmF0dXJlLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRlbXAgPSBcIlRlbXBlcmF0dXJlIGluIGZhcmVuaGVpdCA6LVwiICsgZmFyZW5oZWl0dGVtcGVyYXR1cmUudG9GaXhlZCgyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgZGlzcGxheVdlYXRoZXJPbkh0bWwoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRlbXBlcmF0dXJlQ29udmVydCgpO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbDJcIikgYXMgSFRNTEVsZW1lbnQpLnRleHRDb250ZW50ID0gXCJsb2NhdGlvbiA6LVwiICsgdGhpcy5jaXR5ICsgXCIsXCIgKyB0aGlzLmNvdW50cnk7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsM1wiKWFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSB0aGlzLnRlbXAgKyBcIiA8YnI+XCI7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsNFwiKWFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSBcImRlc2NyaXB0aW9uIFwiICsgdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEFwaSBleHRlbmRzIFdlYXRoZXJEaXNwbGF5XHJcbntcclxuICAgIFxyXG4gICAgYXN5bmMgZ2V0QXBpQ2FsbChVUkw6YW55KSB7XHJcblxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICBiaW5kRGF0YUZyb21BcGkoKVxyXG4gICAge1xyXG4gICAgICAgIC8vaXQgd2lsbCBmZXRjaCB0aGUgZGF0YSBhY2NvcmRpbmcgdG8gdGhlIGZldGNoZWQgcmVzcG9uc2UgZnJvbSB0aGUgdXNlci5cclxuICAgICAgICBsZXQgbG9jYXRpb24gPSAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jc1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgICAgICAgbGV0IFVSTCA9ICdodHRwOi8vYXBpLndlYXRoZXJzdGFjay5jb20vY3VycmVudD9hY2Nlc3Nfa2V5PWUzYTA3YWVkNDYwYWU4YTNkZGRmOGMzYjkxODJjNzM5JnF1ZXJ5PScgKyBsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLmdldEFwaUNhbGwoVVJMKS50aGVuKGRhdGEgPT4gXHJcbiAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNpdHkgPSBkYXRhWydsb2NhdGlvbiddWyduYW1lJ107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50cnkgPSBkYXRhWydsb2NhdGlvbiddWydjb3VudHJ5J107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBlcmF0dXJlID0gZGF0YVsnY3VycmVudCddWyd0ZW1wZXJhdHVyZSddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRhdGFbJ2N1cnJlbnQnXVsnd2VhdGhlcl9kZXNjcmlwdGlvbnMnXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGF0aXR1ZGUgPSBkYXRhWydsb2NhdGlvbiddWydsYXQnXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9uZ2l0dWRlID0gZGF0YVsnbG9jYXRpb24nXVsnbG9uJ107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlXZWF0aGVyT25IdG1sKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG59XHJcbmxldCB0ID0gbmV3IEdldEFwaSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9