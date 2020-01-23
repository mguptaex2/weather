var weatherforecast = /** @class */ (function () {
    function weatherforecast() {
    }
    weatherforecast.prototype.weatherforecast = function (time, temperature, pressure, summary) {
        this.time = time;
        this.temperature = temperature;
        this.pressure = pressure;
        this.summary = summary;
    };
    weatherforecast.prototype.weatherForecast = function () {
        var _this = this;
        var locate = (document.getElementById("locs").value);
        return fetch('http://api.weatherstack.com/current?access_key=e3a07aed460ae8a3dddf8c3b9182c739&query=' + locate)
            .then(function (response) {
            return response.json();
        }).then(function (data) {
            var lat = data['location']['lat'];
            var lng = data['location']['lon'];
            return fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9799c5aedd90c08edac7f8af73c81ba9/' + lat + ',' + lng)
                .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log('1');
                var hourdata = '';
                //    hourly(){
                // var length = Object.keys(data['hourly']['data']).length;
                // console.log(length);
                // for (var i = 0; i < length; i++) {
                //     var time = data['hourly']['data'][i]['time'];
                //     var temperature = data['hourly']['data'][i]['temperature'];
                //     var pressure = data['hourly']['data'][i]['pressure'];
                //     var summary = data['hourly']['data'][i]['summary'];
                //     console.log(time);
                //     // }
                //                 currently()
                // {
                //     var time = data['currently']['time'];
                //     var Temperature = data['currently']['temperature'];
                //     var pressure = data['currently']['pressure']; 
                //     var summary = data['currently']['summary'];
                // // }
                //                 daily()
                //                 {
                var length = Object.keys(data['daily']['data']).length;
                console.log(length);
                for (var i = 0; i < length; i++) {
                    _this.time = data['daily']['data'][i]['time'];
                    _this.temperature = data['daily']['data'][i]['temperatureLow'];
                    _this.pressure = data['daily']['data'][i]['pressure'];
                    _this.summary = data['daily']['data'][i]['summary'];
                    // }
                    var date = new Date(_this.time * 1000);
                    // var hours = date.getHours();
                    // var minutes = "0" + date.getMinutes();
                    // var seconds = "0" + date.getSeconds();
                    var date1 = date.getDate();
                    var year = date.getFullYear();
                    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    var month = months[date.getMonth()];
                    // Will display time in 10:30:23 format
                    var formattedTime = date1 + ':' + month + ':' + year;
                    var tempc = (_this.temperature - 32) * 5 / 9;
                    var temp = " " + tempc.toFixed(2) + "c (celsius) " + _this.temperature.toFixed(2) + "f(farenheit) ";
                    hourdata = "<b><u>Date:-</b></u>" + formattedTime + "<br><b>Temp is</b>:- " + temp + "<br><b>Pressure is</b>:- " + _this.pressure + "<br><b>Summary is :-</b>" + _this.summary + " <br>";
                    var temp22 = document.createElement("div");
                    temp22.innerHTML = '<b><u>Date is:</b></u>' + '<br>' + hourdata;
                    temp22.classList.add("Details");
                    document.querySelector(".WeatherDays").appendChild(temp22);
                }
                // var date1 = date.getDate();
                // var year = date.getFullYear();
                // var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                // var month = months[date.getMonth()];
                // // document.querySelector(".Details").innerHTML = '<b><u>Date is:</b></u>' + date1 + '-' + month + '-' + year + '<br>' + hourdata;
            })["catch"](function (error) {
                alert("valid not");
            });
            return data;
        })["catch"](function (error) {
            alert("valid not");
        });
    };
    return weatherforecast;
}());
var wf = new weatherforecast();
