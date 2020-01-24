
class weatherforecast {
    time: any;
    temperature: any;
    pressure: any;
    summary; any;
    lat: number;
    lng: number;
    weatherforecast(time: any, temperature: any, pressure: any, summary: any, lat: number, lng: number)
    // lat : weather_descriptions,
    // lng : weather_descriptions)
    {
        this.time = time;
        this.temperature = temperature;
        this.pressure = pressure;
        this.summary = summary;
        this.lat = lat;
        this.lng = lng;
        // this.lat = ;
        // this.lng = lng;

    }


    current() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(displayLocationInfo);
        }

        function displayLocationInfo(position) {
            this.lng = position.coords.longitude;
            this.lat = position.coords.latitude;
            console.log(this.lat);
            console.log(this.lng);
            //  latlng(this.lat,this.lng); 
            return fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9799c5aedd90c08edac7f8af73c81ba9/' + this.lat + ',' + this.lng)
                .then(response => {

                    return response.json()
                }).then(data => {
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
                        this.time = data['daily']['data'][i]['time'];
                        this.temperature = data['daily']['data'][i]['temperatureLow'];
                        this.pressure = data['daily']['data'][i]['pressure'];
                        this.summary = data['daily']['data'][i]['summary'];
                        // }
                        var date = new Date(this.time * 1000);

                        // var hours = date.getHours();
                        // var minutes = "0" + date.getMinutes();
                        // var seconds = "0" + date.getSeconds();
                        var date1 = date.getDate();
                        var year = date.getFullYear();
                        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                        var month = months[date.getMonth()];

                        // Will display time in 10:30:23 format
                        var formattedTime = date1 + '-' + month + '-' + year;
                        var tempc = (this.temperature - 32) * 5 / 9;
                        
                        let ktemp: number = (tempc + 273.15);
                        let value = (<HTMLSelectElement>document.getElementById('select')).value;
                        console.log(value);
                        if (value == "celsius") {
                            var temp = "temperature in celsius :- " + tempc.toFixed(2);
                        }
                        
                        else if (value == "kelvin") {
                            var temp = "temperature in kelvin :- " + ktemp.toFixed(2);
                        }
                        else {
                            var temp = " <br> temprature in farenheit :-" + this.temperature.toFixed(2);
                        }
                        // var temp = " " + tempc.toFixed(2) + "c (celsius) " + this.temperature.toFixed(2) + "f(farenheit) ";
                        hourdata = " " + formattedTime + "<br><b>Temp is</b>:- " + temp + "<br><b>Pressure is</b>:- " + this.pressure + "<br><b>Summary is :-</b>" + this.summary + " <br>";
                        let temp22 = document.createElement("div");
                        temp22.innerHTML = '<b><u>Date is:</b></u>' + '<br>' + hourdata;
                        temp22.classList.add("Details");
                        document.querySelector(".WeatherDays").appendChild(temp22);

                    }
                    // var date1 = date.getDate();
                    // var year = date.getFullYear();
                    // var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    // var month = months[date.getMonth()];

                    // // document.querySelector(".Details").innerHTML = '<b><u>Date is:</b></u>' + date1 + '-' + month + '-' + year + '<br>' + hourdata;

                })
                .catch((error: Error) => {
                    alert("valid not");
                })

        }

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
                    this.lat = data['location']['lat'];
                    this.lng = data['location']['lon'];
                    return fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9799c5aedd90c08edac7f8af73c81ba9/' + this.lat + ',' + this.lng)
                        .then(response => {

                            return response.json()
                        }).then(data => {
                            console.log('1');

                            var hourdata = '';

                            var length = Object.keys(data['daily']['data']).length;
                            console.log(length);

                            for (var i = 0; i < length; i++) {
                                this.time = data['daily']['data'][i]['time'];
                                this.temperature = data['daily']['data'][i]['temperatureLow'];
                                this.pressure = data['daily']['data'][i]['pressure'];
                                this.summary = data['daily']['data'][i]['summary'];
                                // }
                                var date = new Date(this.time * 1000);

                                var date1 = date.getDate();
                                var year = date.getFullYear();
                                var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                                var month = months[date.getMonth()];

                                // Will display time in 10:30:23 format
                                var formattedTime = date1 + '-' + month + '-' + year;
                                var tempc = (this.temperature - 32) * 5 / 9;
                               
                                let ktemp: number = (tempc + 273.15);
                                // console.log(value);
                                let value = (<HTMLSelectElement>document.getElementById('select')).value;
                                if (value == "celsius") {
                                    var temp = "temperature in celsius :- " + tempc.toFixed(2);
                                }
                               
                               else if (value == "kelvin") {
                                    var temp = "temperature in kelvin :- " + ktemp.toFixed(2);
                                }
                                else {
                                    var temp = " <br> temprature in farenheit :-" + this.temperature.toFixed(2);
                                }
                                // var temp = " " + tempc.toFixed(2) + "c (celsius) " + this.temperature.toFixed(2) + "f(farenheit) ";
                                hourdata = " " + formattedTime + "<br>:- " + temp + "<br><b>Pressure is</b>:- " + this.pressure + "<br><b>Summary is :-</b>" + this.summary + " <br>";
                                let temp22 = document.createElement("div");
                                temp22.innerHTML = '<b><u>Date is:</b></u>' + '<br>' + hourdata;
                                temp22.classList.add("Details");
                                document.querySelector(".WeatherDays").appendChild(temp22);

                            }


                        })
                        .catch((error: Error) => {
                            alert("valid not");
                        })
                    // return data;


                })
                .catch((error: Error) => {
                    alert("valid not");
                })

        }
    }


}

let wf = new weatherforecast();