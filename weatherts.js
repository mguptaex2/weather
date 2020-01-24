var weather_descriptions = /** @class */ (function () {
    function weather_descriptions() {
    }
    weather_descriptions.prototype.weather_descriptions = function (latitude, namevalue, country, tempvalue, descvalue, longitude) {
        this.latitude = latitude;
        this.namevalue = namevalue;
        this.country = country;
        this.tempvalue = tempvalue;
        this.descvalue = descvalue;
        this.longitude = longitude;
    };
    weather_descriptions.prototype.settemp = function () {
        var ftemp = (this.tempvalue * 9 / 5) + 32;
        var ktemp = (this.tempvalue + 273.15);
        var value = document.getElementById('select').value;
        console.log(value);
        if (value == "celsius") {
            document.getElementById("val3").innerHTML = "temperature in celsius :- " + this.tempvalue;
        }
        else if (value == "kelvin") {
            document.getElementById("val3").innerHTML = "temperature in kelvin :- " + ktemp;
        }
        else {
            document.getElementById("val3").innerHTML = " <br> temprature farenheit :-" + ftemp;
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
            // let ftemp: number = (this.tempvalue * 9 / 5) + 32;
            // let ktemp: number = (this.tempvalue +273.15);
            // let value = (<HTMLSelectElement>document.getElementById('select')).value;
            // console.log(value);
            // if(value =="celsius")
            // {
            //     document.getElementById("val3").innerHTML = "temperature in celsius :- " + this.tempvalue ;
            // }
            // // if(((document.getElementById("celsius") as HTMLInputElement).value) =="celsius"){
            // //     document.getElementById("val3").innerHTML = "temperature in celsius :- " + this.tempvalue ;
            // // }
            // else if(value =="kelvin")
            // {
            //     document.getElementById("val3").innerHTML = "temperature in kelvin :- " + ktemp ;
            // }
            // else{
            //     document.getElementById("val3").innerHTML =  " <br> temprature farenheit :-" + ftemp;
            // }
            document.getElementById("val2").textContent = "location :-" + _this.namevalue + "," + _this.country;
            // document.getElementById("val3").innerHTML = "temperature in celsius :- " + this.tempvalue + " <br> temprature farenheit :-" + ftemp;
            document.getElementById("val4").innerHTML = "description " + _this.descvalue;
            console.log(data);
            return data;
        })["catch"](function (error) {
            alert("valid not");
        });
    };
    return weather_descriptions;
}());
var wd = new weather_descriptions();
