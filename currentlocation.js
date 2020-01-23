var currloc = /** @class */ (function () {
    function currloc() {
    }
    currloc.prototype.currloc = function (namevalue, country, tempvalue, descvalue, lat, lng) {
        this.namevalue = namevalue;
        this.country = country;
        this.tempvalue = tempvalue;
        this.descvalue = descvalue;
        this.lat = lat;
        this.lng = lng;
    };
    // tempconvert() {
    //     var tempc = this.tempvalue - 273.15;
    //     console.log(typeof (tempc));
    //     var ftemp = (tempc * 9 / 5) + 32;
    // }
    currloc.prototype.currentLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(displayLocationInfo);
        }
        function displayLocationInfo(position) {
            var _this = this;
            this.lng = position.coords.longitude;
            this.lat = position.coords.latitude;
            // console.log(lng);
            // console.log(lat);
            fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + this.lat + '&lon=' + this.lng + '&appid=058071b3c7be6c1ba2185d48585c50ad')
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
                console.log(_this.country);
                _this.tempvalue = (_this.tempvalue.toFixed(2));
                // var kelvin = 273;
                var tempc = (_this.tempvalue - 273.15);
                console.log(typeof (tempc));
                var ftemp = (tempc * 9 / 5) + 32;
                // this.tempconvert();
                document.getElementById("val3").innerHTML = "temperature in celsius :- " + tempc.toFixed(2) + " <br> temprature farenheit :-" + ftemp.toFixed(2);
                document.getElementById("val4").innerHTML = "description " + _this.descvalue;
                // let test = document.createElement("button");
                // test.textContent="hello";
                // document.getElementById("val4").appendChild(test);
            })["catch"](function (error) {
                console.log(error);
            });
        }
    };
    return currloc;
}());
var current = new currloc();
