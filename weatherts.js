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
var Weather_descriptions = /** @class */ (function () {
    function Weather_descriptions() {
    }
    Weather_descriptions.prototype.setTemp = function () {
        //it will calculate the temperature values in celsius ,farenheit and kelvin.
        var ftemp = (this.tempvalue * 9 / 5) + 32;
        var ktemp = (this.tempvalue + 273.15);
        var value = document.getElementById('select').value;
        if (value == "celsius") {
            this.temp = "temperature in celsius :- " + this.tempvalue.toFixed(2);
        }
        else if (value == "kelvin") {
            this.temp = "temperature in kelvin :- " + ktemp.toFixed(2);
        }
        else {
            this.temp = "temprature in farenheit :-" + ftemp.toFixed(2);
        }
    };
    Weather_descriptions.prototype.detectWeather = function () {
        return __awaiter(this, void 0, void 0, function () {
            var locate, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        locate = (document.getElementById("locs").value);
                        return [4 /*yield*/, fetch('http://api.weatherstack.com/current?access_key=e3a07aed460ae8a3dddf8c3b9182c739&query=' + locate)];
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
    Weather_descriptions.prototype.setWeather = function () {
        var _this = this;
        this.detectWeather().then(function (data) {
            _this.namevalue = data['location']['name'];
            _this.country = data['location']['country'];
            _this.tempvalue = data['current']['temperature'];
            _this.descvalue = data['current']['weather_descriptions'];
            _this.latitude = data['location']['lat'];
            _this.longitude = data['location']['lon'];
            _this.setTemp();
            document.getElementById("val2").textContent = "location :-" + _this.namevalue + "," + _this.country;
            document.getElementById("val3").innerHTML = _this.temp + " <br>";
            document.getElementById("val4").innerHTML = "description " + _this.descvalue;
            console.log(data);
        });
    };
    return Weather_descriptions;
}());
var Currloc = /** @class */ (function (_super) {
    __extends(Currloc, _super);
    function Currloc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Currloc.prototype.currentLocation = function () {
        //it tells the current location of the user.
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.longitude = position.coords.longitude;
            _this.latitude = position.coords.latitude;
            _this.getCurrentWeather();
        });
    };
    Currloc.prototype.currentWeath = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + this.latitude + '&lon=' + this.longitude + '&appid=058071b3c7be6c1ba2185d48585c50ad')];
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
    Currloc.prototype.getCurrentWeather = function () {
        var _this = this;
        this.currentWeath().then(function (data) {
            _this.namevalue = data['name'];
            _this.country = data['sys']['country'];
            _this.tempvalue = data['main']['temp'];
            _this.descvalue = data['weather'][0]['description'];
            document.getElementById("val2").innerHTML = "location :-" + _this.namevalue;
            (document.getElementById("locs").value) = _this.namevalue;
            console.log(_this.country);
            _this.tempvalue = +_this.tempvalue;
            _this.tempvalue = _this.tempvalue - 273.15;
            _this.setTemp();
            document.getElementById("val3").innerHTML = _this.temp + " <br>";
            document.getElementById("val4").innerHTML = "description " + _this.descvalue;
        });
    };
    return Currloc;
}(Weather_descriptions));
var WeatherForecast = /** @class */ (function (_super) {
    __extends(WeatherForecast, _super);
    function WeatherForecast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WeatherForecast.prototype.weatherForecast = function () {
        var _this = this;
        // It fetches the current location or the location enetred by user and calls weatherFore to dispay the weather forecast.
        if ((document.getElementById("locs").value) === "") {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.longitude = position.coords.longitude;
                _this.latitude = position.coords.latitude;
                _this.weatherFore();
                console.log(position.coords);
            });
        }
        else {
            this.detectWeather().then(function (data) {
                _this.latitude = data['location']['lat'];
                _this.longitude = data['location']['lon'];
                _this.weatherFore();
            });
        }
    };
    WeatherForecast.prototype.weatherFore = function () {
        var _this = this;
        //It shows the weather forecast of a particular city or the user's current location.
        return fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9799c5aedd90c08edac7f8af73c81ba9/' + this.latitude + ',' + this.longitude)
            .then(function (response) {
            return response.json();
        }).then(function (data) {
            var hourdata = '';
            var length = Object.keys(data['daily']['data']).length;
            console.log(length);
            var childCount = document.getElementById("weatherDetails").childElementCount;
            for (var i = 0; i < length; i++) {
                _this.time = data['daily']['data'][i]['time'];
                _this.tempvalue = data['daily']['data'][i]['temperatureLow'];
                _this.pressure = data['daily']['data'][i]['pressure'];
                _this.descvalue = data['daily']['data'][i]['summary'];
                var date = new Date(_this.time * 1000);
                var date1 = date.getDate();
                var year = date.getFullYear();
                var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                var month = months[date.getMonth()];
                var formattedTime = date1 + '-' + month + '-' + year;
                _this.setTemp();
                hourdata = " " + formattedTime + "<br><b>Temp </b>:- " + _this.temp + "<br><b>Pressure is</b>:- " + _this.pressure + "<br><b>Summary is :-</b>" + _this.descvalue + " <br>";
                var temp22 = document.createElement("div");
                temp22.innerHTML = '<b><u>Date is:</b></u>' + '<br>' + hourdata;
                temp22.classList.add("Details");
                temp22.setAttribute("id", "det" + i);
                if (childCount === 8) {
                    console.log("replaccing child1");
                    var node = document.getElementById("det" + i);
                    node.parentNode.replaceChild(temp22, node);
                }
                else {
                    document.getElementById("weatherDetails").appendChild(temp22);
                }
            }
        })["catch"](function (error) {
            alert("valid not");
        });
    };
    return WeatherForecast;
}(Currloc));
