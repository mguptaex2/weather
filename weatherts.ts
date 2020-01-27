class Weather_descriptions {

    latitude: number;
    namevalue: string;
    country: string;
    tempvalue: number;
    descvalue: string;
    longitude: number;
    temp: string;

    setTemp() {
        //it will calculate the temperature values in celsius ,farenheit and kelvin.

        let ftemp: number = (this.tempvalue * 9 / 5) + 32;
        let ktemp: number = (this.tempvalue + 273.15);
        let value = (<HTMLSelectElement>document.getElementById('select')).value;
        if (value == "celsius") {

            this.temp = "temperature in celsius :- " + this.tempvalue.toFixed(2);
        }

        else if (value == "kelvin") {

            this.temp = "temperature in kelvin :- " + ktemp.toFixed(2);
        }
        else {

            this.temp = "temprature in farenheit :-" + ftemp.toFixed(2);
        }
    }
    async detectWeather() {
        let locate = ((document.getElementById("locs") as HTMLInputElement).value);
        let response = await fetch('http://api.weatherstack.com/current?access_key=e3a07aed460ae8a3dddf8c3b9182c739&query=' + locate);
        let data = await response.json();
        return data;
    }
    setWeather() {

        this.detectWeather().then(data => {

            this.namevalue = data['location']['name'];
            this.country = data['location']['country'];
            this.tempvalue = data['current']['temperature'];
            this.descvalue = data['current']['weather_descriptions'];
            this.latitude = data['location']['lat'];
            this.longitude = data['location']['lon'];
            this.setTemp();

            document.getElementById("val2").textContent = "location :-" + this.namevalue + "," + this.country;
            document.getElementById("val3").innerHTML = this.temp + " <br>";
            document.getElementById("val4").innerHTML = "description " + this.descvalue;
            console.log(data)
        });
    }

}

class Currloc extends Weather_descriptions {

    currentLocation() {
        //it tells the current location of the user.
        
            navigator.geolocation.getCurrentPosition((position) => {
            this.longitude = position.coords.longitude;
            this.latitude = position.coords.latitude;
            this.getCurrentWeather();
           
        });
       }

    

    async currentWeath() {
        

        //It fetches the latitude and longitude from the currentLocation method and displays the data of the current location.   
        let response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + this.latitude + '&lon=' + this.longitude + '&appid=058071b3c7be6c1ba2185d48585c50ad');
        let data = await response.json();
        return data;

    }
    getCurrentWeather() {
        this.currentWeath().then(data => {
            this.namevalue = data['name'];
            this.country = data['sys']['country'];
            this.tempvalue = data['main']['temp'];
            this.descvalue = data['weather'][0]['description'];
            
            document.getElementById("val2").innerHTML = "location :-" + this.namevalue;
            ((document.getElementById("locs") as HTMLInputElement).value) = this.namevalue;
            console.log(this.country);

            this.tempvalue = +this.tempvalue;
            this.tempvalue = this.tempvalue - 273.15;
            this.setTemp();
            document.getElementById("val3").innerHTML = this.temp + " <br>";
            document.getElementById("val4").innerHTML = "description " + this.descvalue;

        });
       
    }
}

class WeatherForecast extends Currloc {
    time: any;
    pressure: any;
    
        weatherForecast() {
        // It fetches the current location or the location enetred by user and calls weatherFore to dispay the weather forecast.
        if (((document.getElementById("locs") as HTMLInputElement).value) === "") {
            navigator.geolocation.getCurrentPosition((position) => {
                this.longitude = position.coords.longitude;
                this.latitude = position.coords.latitude;
                this.weatherFore();
                console.log(position.coords);
            });
              
            
        }
        else {
            
            this.detectWeather().then(data => {
                this.latitude = data['location']['lat'];
                this.longitude = data['location']['lon'];
                this.weatherFore();
            });
              
        }
    }
    weatherFore() {
       
        //It shows the weather forecast of a particular city or the user's current location.
        return fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9799c5aedd90c08edac7f8af73c81ba9/' + this.latitude + ',' + this.longitude)
            .then(response => {
                return response.json()
            }).then(data => {
                var hourdata = '';
                var length = Object.keys(data['daily']['data']).length;
                console.log(length);
                var childCount=document.getElementById("weatherDetails").childElementCount;

                for (var i = 0; i < length; i++)
                 {
                    this.time = data['daily']['data'][i]['time'];
                    this.tempvalue = data['daily']['data'][i]['temperatureLow'];
                    this.pressure = data['daily']['data'][i]['pressure'];
                    this.descvalue = data['daily']['data'][i]['summary'];
                    var date = new Date(this.time * 1000);
                    var date1 = date.getDate();
                    var year = date.getFullYear();
                    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    var month = months[date.getMonth()];
                    
                    var formattedTime = date1 + '-' + month + '-' + year;
                    this.setTemp();
                    hourdata = " " + formattedTime + "<br><b>Temp </b>:- " + this.temp + "<br><b>Pressure is</b>:- " + this.pressure + "<br><b>Summary is :-</b>" + this.descvalue + " <br>";
                    var temp22 = document.createElement("div");
                    temp22.innerHTML = '<b><u>Date is:</b></u>' + '<br>' + hourdata;
                    temp22.classList.add("Details");
                    temp22.setAttribute("id","det"+i);
                    if(childCount === 8){
                        console.log("replaccing child1");
                     let node = document.getElementById("det"+i);
                        node.parentNode.replaceChild(temp22,node);
                    }else{
                        document.getElementById("weatherDetails").appendChild(temp22);
                    }
                  

                }
                
            })
            .catch((error: Error) => {
                alert("valid not");
            })
    }
}

