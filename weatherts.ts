
class WeatherDisplay {

    city: string;
    country: string;
    temperature: number;
    description: string;
    latitude: number;
    longitude: number;
    temp: string;
    temperatureConvert()
     {
        //it will calculate the temperature values in celsius ,farenheit and kelvin.
        let farenheittemperature: number = (this.temperature * 9 / 5) + 32;
        let kelvintemperature: number = (this.temperature + 273.15);
        let value = (<HTMLSelectElement>document.getElementById('select')).value;
        if (value == "celsius") {
            this.temp = "Temperature in celsius :- " + this.temperature.toFixed(2);
        }
        else if (value == "kelvin") {
            this.temp = "Temperature in kelvin :- " + kelvintemperature.toFixed(2);
        }
        else {
            this.temp = "Temperature in farenheit :-" + farenheittemperature.toFixed(2);
        }
    }
   
    displayWeatherOnHtml() 
    {
        this.temperatureConvert();
        document.getElementById("val2").textContent = "location :-" + this.city + "," + this.country;
        document.getElementById("val3").innerHTML = this.temp + " <br>";
        document.getElementById("val4").innerHTML = "description " + this.description;
        if (document.getElementById("weatherDetails"))
         {
               document.getElementById("weatherDetails").remove();
         }

    }

}
class GetApi extends WeatherDisplay
{
    async getApiCall(URL) {

        let response = await fetch(URL);
        let data = await response.json();
        return data;
    }
    bindDataFromApi()
    {
        //it will fetch the data according to the fetched response from the user.
        let location = ((document.getElementById("locs") as HTMLInputElement).value);
        let URL = 'http://api.weatherstack.com/current?access_key=e3a07aed460ae8a3dddf8c3b9182c739&query=' + location;
        this.getApiCall(URL).then(data => 
            {

                this.city = data['location']['name'];
                this.country = data['location']['country'];
                this.temperature = data['current']['temperature'];
                this.description = data['current']['weather_descriptions'];
                this.latitude = data['location']['lat'];
                this.longitude = data['location']['lon'];
                this.displayWeatherOnHtml();
            });

    }
}
class CurrentLocation extends GetApi {

    currentLocationOfUser() 
    {
            //it tells the current location of the user.
            navigator.geolocation.getCurrentPosition((position) =>
            {
                 this.longitude = position.coords.longitude;
                 this.latitude = position.coords.latitude;
                 this.getCurrentWeather();

            });
    }

    getCurrentWeather()
    {
        //It displays the weather of cuurent location.
        let URL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + this.latitude + '&lon=' + this.longitude + '&appid=058071b3c7be6c1ba2185d48585c50ad'
        this.getApiCall(URL).then(data => 
            {
                this.city = data['name'];
                this.country = data['sys']['country'];
                this.temperature = data['main']['temp'];
                this.description = data['weather'][0]['description'];
                this.temperature = this.temperature - 273.15;
                ((document.getElementById("locs") as HTMLInputElement).value) = this.city;
                this.displayWeatherOnHtml();
            });

    }
}
class WeatherForecast extends CurrentLocation
 {
        time: any;
        pressure: any;

    weatherForecastOfCurrentLocation() 
    {
        navigator.geolocation.getCurrentPosition((position) =>
         {
                this.longitude = position.coords.longitude;
                this.latitude = position.coords.latitude;
                this.bindDataFromApiForWeatherForecast();
            
         });
    }
    weatherForecast() 
    {
        // It fetches the current location or the location enetred by user and calls weatherFore to display the weather forecast.
        if (((document.getElementById("locs") as HTMLInputElement).value) === "") 
        {
            this.weatherForecastOfCurrentLocation();
        }
        else
         {
            let location = ((document.getElementById("locs") as HTMLInputElement).value);
            let URL = 'http://api.weatherstack.com/current?access_key=e3a07aed460ae8a3dddf8c3b9182c739&query=' + location;
            this.getApiCall(URL).then(data => {
                this.latitude = data['location']['lat'];
                this.longitude = data['location']['lon'];
                this.bindDataFromApiForWeatherForecast();
            });

        }
    }
    convertDateToFormat() {
        var date = new Date(this.time * 1000);
        var date1 = date.getDate();
        var year = date.getFullYear();
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var month = months[date.getMonth()];
        var formattedDate = date1 + '-' + month + '-' + year;
        return formattedDate;
    }
    bindDataFromApiForWeatherForecast() {
        let URL = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9799c5aedd90c08edac7f8af73c81ba9/' + this.latitude + ',' + this.longitude;
        this.getApiCall(URL).then(data => {
            var hourdata = '';
            var length = Object.keys(data['daily']['data']).length;
            var childCount = document.getElementById("weatherDetails").childElementCount;
            for (var i = 0; i < length; i++) {
                this.time = data['daily']['data'][i]['time'];
                this.temperature = data['daily']['data'][i]['temperatureLow'];
                this.pressure = data['daily']['data'][i]['pressure'];
                this.description = data['daily']['data'][i]['summary'];
                var formattedDate = this.convertDateToFormat();
                this.temperatureConvert();
                hourdata = " " + formattedDate + "<br><b>Temp </b>:- " + this.temp + "<br><b>Pressure is</b>:- " + this.pressure + "<br><b>Summary is :-</b>" + this.description + " <br>";
                var displayData = document.createElement("div");
                displayData.innerHTML = '<b><u>Date is:</b></u>' + '<br>' + hourdata;
                displayData.classList.add("Details");
                displayData.setAttribute("id", "det" + i);
                if (childCount > 0) {
                    let node = document.getElementById("det" + i);
                    node.parentNode.replaceChild(displayData, node);

                }
                 else {
                    document.getElementById("weatherDetails").appendChild(displayData);
                    childCount = childCount - 1;

                }
            }
        });
    }
    changeTemperature()
    {
        
             if (document.getElementById("weatherDetails"))
            {
                this.weatherForecast();
        
            }
            else
            {
                this.bindDataFromApi();
            }
    }
}

