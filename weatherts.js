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
var weather_descriptions = /** @class */ (function () {
    function weather_descriptions() {
    }
    weather_descriptions.prototype.weather_descriptions = function (latitude, namevalue, country, tempvalue, descvalue, longitude, temp) {
        this.latitude = latitude;
        this.namevalue = namevalue;
        this.country = country;
        this.tempvalue = tempvalue;
        this.descvalue = descvalue;
        this.longitude = longitude;
        this.temp = temp;
    };
    weather_descriptions.prototype.settemp = function () {
        var ftemp = (this.tempvalue * 9 / 5) + 32;
        var ktemp = (this.tempvalue + 273.15);
        var value = document.getElementById('select').value;
        // console.log(value);
        if (value == "celsius") {
            // document.getElementById("val3").innerHTML = "temperature in celsius :- " + this.tempvalue.toFixed(2);
            // var t = this.tempvalue.toFixed(2);
            this.temp = "temperature in celsius :- " + this.tempvalue.toFixed(2);
        }
        else if (value == "kelvin") {
            // document.getElementById("val3").innerHTML = "temperature in kelvin :- " + ktemp.toFixed(2);
            this.temp = "temperature in kelvin :- " + ktemp.toFixed(2);
        }
        else {
            // document.getElementById("val3").innerHTML = " <br> temprature farenheit :-" + ftemp.toFixed(2);
            this.temp = "temprature in farenheit :-" + ftemp.toFixed(2);
        }
    };
    weather_descriptions.prototype.detectWeather = function () {
        var _this = this;
        var locate = (document.getElementById("locs").value);
        return fetch('http://api.weatherstack.com/current?access_key=e3a07aed460ae8a3dddf8c3b9182c739&query=' + locate)
            .then(function (response) {
            return response.json();
        }).then(function (data) {
            _this.namevalue = data['location']['name'];
            _this.country = data['location']['country'];
            _this.tempvalue = data['current']['temperature'];
            _this.descvalue = data['current']['weather_descriptions'];
            _this.latitude = data['location']['lat'];
            _this.longitude = data['location']['lon'];
            _this.settemp();
            document.getElementById("val2").textContent = "location :-" + _this.namevalue + "," + _this.country;
            document.getElementById("val3").innerHTML = _this.temp + " <br>";
            document.getElementById("val4").innerHTML = "description " + _this.descvalue;
            console.log(data);
            return data;
        })["catch"](function (error) {
            alert("valid not");
        });
    };
    return weather_descriptions;
}());
var currloc = /** @class */ (function (_super) {
    __extends(currloc, _super);
    function currloc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    currloc.prototype.currentLocation = function () {
        var _this = this;
        // if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.longitude = position.coords.longitude;
            _this.latitude = position.coords.latitude;
            _this.current1();
            console.log(position.coords);
        });
    };
    currloc.prototype.current1 = function () {
        var _this = this;
        console.log("hi");
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + this.latitude + '&lon=' + this.longitude + '&appid=058071b3c7be6c1ba2185d48585c50ad')
            .then(function (response) {
            console.log("1");
            return response.json();
        }).then(function (data) {
            _this.namevalue = data['name'];
            _this.country = data['country'];
            _this.tempvalue = data['main']['temp'];
            _this.descvalue = data['weather'][0]['description'];
            // document.getElementById("val1").innerHTML=country;
            document.getElementById("val2").innerHTML = "location :-" + _this.namevalue;
            (document.getElementById("locs").value) = _this.namevalue;
            console.log(_this.country);
            _this.tempvalue = +_this.tempvalue;
            _this.tempvalue = _this.tempvalue - 273.15;
            _this.settemp();
            document.getElementById("val3").innerHTML = _this.temp + " <br>";
            document.getElementById("val4").innerHTML = "description " + _this.descvalue;
            // let test = document.createElement("button");
            // test.textContent="hello";
            // document.getElementById("val4").appendChild(test);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    return currloc;
}(weather_descriptions));
var weatherforecast = /** @class */ (function (_super) {
    __extends(weatherforecast, _super);
    function weatherforecast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    weatherforecast.prototype.weatherforecast = function (time, pressure) {
        this.time = time;
        this.pressure = pressure;
    };
    weatherforecast.prototype.current = function () {
        var _this = this;
        // if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.longitude = position.coords.longitude;
            _this.latitude = position.coords.latitude;
            _this.weatherfore();
            console.log(position.coords);
        });
    };
    // current() {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(displayLocationInfo);
    //     }
    //     function displayLocationInfo(position) {
    //         this.longitude = position.coords.longitude;
    //         this.latitude = position.coords.latitude;
    //         console.log(this.lat);
    //         console.log(this.lng);
    //         this.weatherfore();
    // return fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9799c5aedd90c08edac7f8af73c81ba9/' + this.latitude + ',' + this.longitude)
    //     .then(response => {
    //         return response.json()
    //     }).then(data => {
    //         console.log('1');
    //         var hourdata = '';
    //         var length = Object.keys(data['daily']['data']).length;
    //         console.log(length);
    //         for (var i = 0; i < length; i++) {
    //             this.time = data['daily']['data'][i]['time'];
    //             this.tempvalue = data['daily']['data'][i]['temperatureLow'];
    //             this.pressure = data['daily']['data'][i]['pressure'];
    //             this.descvalue = data['daily']['data'][i]['summary'];
    //             // }
    //             var date = new Date(this.time * 1000);
    //             // var hours = date.getHours();
    //             // var minutes = "0" + date.getMinutes();
    //             // var seconds = "0" + date.getSeconds();
    //             var date1 = date.getDate();
    //             var year = date.getFullYear();
    //             var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //             var month = months[date.getMonth()];
    //             // Will display time in 10:30:23 format
    //             var formattedTime = date1 + '-' + month + '-' + year;
    //             this.settemp();
    //             hourdata = " " + formattedTime + "<br><b>Temp is</b>:- " +this.temp + "<br><b>Pressure is</b>:- " + this.pressure + "<br><b>Summary is :-</b>" + this.descvalue + " <br>";
    //             let temp22 = document.createElement("div");
    //             temp22.innerHTML = '<b><u>Date is:</b></u>' + '<br>' + hourdata;
    //             temp22.classList.add("Details");
    //             document.querySelector(".WeatherDays").appendChild(temp22);
    //         }
    //     })
    //     .catch((error: Error) => {
    //         alert("valid not");
    //     })
    // }
    // }
    weatherforecast.prototype.weatherForecast = function () {
        var _this = this;
        if ((document.getElementById("locs").value) == "") {
            this.current();
            console.log("1");
        }
        else {
            var locate = (document.getElementById("locs").value);
            return fetch('http://api.weatherstack.com/current?access_key=e3a07aed460ae8a3dddf8c3b9182c739&query=' + locate)
                .then(function (response) {
                return response.json();
            }).then(function (data) {
                _this.latitude = data['location']['lat'];
                _this.longitude = data['location']['lon'];
                _this.weatherfore();
            })["catch"](function (error) {
                alert("valid not");
            });
        }
    };
    weatherforecast.prototype.weatherfore = function () {
        var _this = this;
        return fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9799c5aedd90c08edac7f8af73c81ba9/' + this.latitude + ',' + this.longitude)
            .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log('1');
            var hourdata = '';
            var length = Object.keys(data['daily']['data']).length;
            console.log(length);
            for (var i = 0; i < length; i++) {
                _this.time = data['daily']['data'][i]['time'];
                _this.tempvalue = data['daily']['data'][i]['temperatureLow'];
                _this.pressure = data['daily']['data'][i]['pressure'];
                _this.descvalue = data['daily']['data'][i]['summary'];
                // }
                var date = new Date(_this.time * 1000);
                var date1 = date.getDate();
                var year = date.getFullYear();
                var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                var month = months[date.getMonth()];
                // Will display time in 10:30:23 format
                var formattedTime = date1 + '-' + month + '-' + year;
                _this.settemp();
                hourdata = " " + formattedTime + "<br><b>Temp </b>:- " + _this.temp + "<br><b>Pressure is</b>:- " + _this.pressure + "<br><b>Summary is :-</b>" + _this.descvalue + " <br>";
                var temp22 = document.createElement("div");
                temp22.innerHTML = '<b><u>Date is:</b></u>' + '<br>' + hourdata;
                temp22.classList.add("Details");
                document.querySelector(".WeatherDays").appendChild(temp22);
            }
        })["catch"](function (error) {
            alert("valid not");
        });
        // return data;
        // })
        // .catch((error: Error) => {
        //     alert("valid not");
        // })
    };
    return weatherforecast;
}(currloc));
