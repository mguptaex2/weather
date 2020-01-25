class weather_descriptions {

    latitude: number;
    namevalue: string;
    country: string;
    tempvalue: number;
    descvalue: string;
    longitude: number;
    temp:string
    weather_descriptions(latitude: number, namevalue: string, country: string, tempvalue: number, descvalue: string, longitude: number,temp:string) {
        this.latitude = latitude;
        this.namevalue = namevalue;
        this.country = country;
        this.tempvalue = tempvalue;
        this.descvalue = descvalue;
        this.longitude = longitude;
        this.temp = temp;
    }


    settemp() {

        let ftemp: number = (this.tempvalue * 9 / 5) + 32;
        let ktemp: number = (this.tempvalue + 273.15);
        let value = (<HTMLSelectElement>document.getElementById('select')).value;
        // console.log(value);
        if (value == "celsius") {
            // document.getElementById("val3").innerHTML = "temperature in celsius :- " + this.tempvalue.toFixed(2);
            // var t = this.tempvalue.toFixed(2);
             this.temp = "temperature in celsius :- " + this.tempvalue.toFixed(2);
        }

        else if (value == "kelvin") {
            // document.getElementById("val3").innerHTML = "temperature in kelvin :- " + ktemp.toFixed(2);
            this.temp =  "temperature in kelvin :- " + ktemp.toFixed(2);
        }
        else {
            // document.getElementById("val3").innerHTML = " <br> temprature farenheit :-" + ftemp.toFixed(2);
            this.temp = "temprature in farenheit :-" + ftemp.toFixed(2);
        }
    }
    detectWeather() {
        let locate: string = ((document.getElementById("locs") as HTMLInputElement).value);
        return fetch('http://api.weatherstack.com/current?access_key=e3a07aed460ae8a3dddf8c3b9182c739&query=' + locate)
            .then(response => {
                return response.json()
            }).then(data => {


                this.namevalue = data['location']['name'];
                this.country = data['location']['country'];
                this.tempvalue = data['current']['temperature'];
                this.descvalue = data['current']['weather_descriptions'];
                this.latitude = data['location']['lat'];
                this.longitude = data['location']['lon'];
                this.settemp();

                document.getElementById("val2").textContent = "location :-" + this.namevalue + "," + this.country;
                document.getElementById("val3").innerHTML =  this.temp + " <br>";
                document.getElementById("val4").innerHTML = "description " + this.descvalue;
                console.log(data)
                return data;
            })
            .catch((error: Error) => {
                alert("valid not");
            })

    }
}

class currloc extends weather_descriptions {
    
    currentLocation() {
        // if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            this.longitude = position.coords.longitude;
            this.latitude = position.coords.latitude;
            this.current1();
            console.log(position.coords);
        });

    }

    current1() {
        console.log("hi");
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + this.latitude + '&lon=' + this.longitude + '&appid=058071b3c7be6c1ba2185d48585c50ad')
            .then(response => {
                console.log("1")
                return response.json()
            }).then(data => {
                this.namevalue = data['name'];
                this.country = data['country'];
                this.tempvalue = data['main']['temp'];
                this.descvalue = data['weather'][0]['description'];
                // document.getElementById("val1").innerHTML=country;
                document.getElementById("val2").innerHTML = "location :-" + this.namevalue;
                ((document.getElementById("locs") as HTMLInputElement).value) = this.namevalue;
                console.log(this.country);

                this.tempvalue = +this.tempvalue;
                this.tempvalue = this.tempvalue - 273.15;
                this.settemp();
                document.getElementById("val3").innerHTML =  this.temp + " <br>";
                document.getElementById("val4").innerHTML = "description " + this.descvalue;
                // let test = document.createElement("button");
                // test.textContent="hello";
                // document.getElementById("val4").appendChild(test);
            })


            .catch((error: Error) => {

                console.log(error);
            })
    }
}

class weatherforecast extends currloc{
    time: any;
    pressure: any;
    weatherforecast(time: any, pressure: any)
    
    {
        this.time = time;
        this.pressure = pressure;
    
    }

    current() {
        // if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            this.longitude = position.coords.longitude;
            this.latitude = position.coords.latitude;
            this.weatherfore();
            console.log(position.coords);
        });

    }


    weatherForecast() {

        if (((document.getElementById("locs") as HTMLInputElement).value) == "") {
            this.current();
            console.log("1");
        }
        else {
            let locate: string = ((document.getElementById("locs") as HTMLInputElement).value);

            return fetch('http://api.weatherstack.com/current?access_key=e3a07aed460ae8a3dddf8c3b9182c739&query=' + locate)
                .then(response => {
                    return response.json()
                }).then(data => {
                    this.latitude = data['location']['lat'];
                    this.longitude = data['location']['lon'];
                    this.weatherfore();
                })
                .catch((error: Error) => {
                    alert("valid not");
                })
            }
        }
        weatherfore()
        {
                    return fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9799c5aedd90c08edac7f8af73c81ba9/' + this.latitude + ',' + this.longitude)
                        .then(response => {

                            return response.json()
                        }).then(data => {
                            console.log('1');

                            var hourdata = '';

                            var length = Object.keys(data['daily']['data']).length;
                            console.log(length);

                            for (var i = 0; i < length; i++) {
                                this.time = data['daily']['data'][i]['time'];
                                this.tempvalue = data['daily']['data'][i]['temperatureLow'];
                                this.pressure = data['daily']['data'][i]['pressure'];
                                this.descvalue = data['daily']['data'][i]['summary'];
                                // }
                                var date = new Date(this.time * 1000);

                                var date1 = date.getDate();
                                var year = date.getFullYear();
                                var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                                var month = months[date.getMonth()];

                                // Will display time in 10:30:23 format
                                var formattedTime = date1 + '-' + month + '-' + year;
                                this.settemp();
                        
                                hourdata = " " + formattedTime + "<br><b>Temp </b>:- "+this.temp  + "<br><b>Pressure is</b>:- " + this.pressure + "<br><b>Summary is :-</b>" + this.descvalue + " <br>";
                                let temp22 = document.createElement("div");
                                temp22.innerHTML = '<b><u>Date is:</b></u>' + '<br>' + hourdata;
                                temp22.classList.add("Details");
                                document.querySelector(".WeatherDays").appendChild(temp22);

                            }
                        })
                        .catch((error: Error) => {
                            alert("valid not");
                        })
                    }
}

