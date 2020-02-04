import {CurrentLocation} from "./currentlocation"; 
import {  WeatherDisplay } from "./weatherts";
import { GetApi } from "./getapi";
export  class WeatherForecast extends GetApi
 {
        time: any;
        pressure: any;
        weather: any
        constructor()
        {
            super();
            this.weather = new WeatherDisplay();
            let currentloc = new CurrentLocation();
        }

    weatherForecastOfCurrentLocation() 
    {
        navigator.geolocation.getCurrentPosition((position) =>
         {
                this.weather.longitude = position.coords.longitude;
                this.weather.latitude = position.coords.latitude;
                this.bindDataFromApiForWeatherForecast(position);
            
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
                this.weather.latitude = data['location']['lat'];
                this.weather.longitude = data['location']['lon'];
                this.bindDataFromApiForWeatherForecast(this.weather);
                return data;
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
    bindDataFromApiForWeatherForecast(position:any) {
        let URL = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9799c5aedd90c08edac7f8af73c81ba9/' + this.weather.latitude + ',' + this.weather.longitude;
        this.getApiCall(URL).then(data => {
            var hourdata = '';
            var length = Object.keys(data['daily']['data']).length;
            var childCount = (document.getElementById("weatherDetails")as HTMLElement).childElementCount;
            for (var i = 0; i < length; i++) {
                (document.getElementById("val1")as HTMLElement).innerHTML = "";
                (document.getElementById("val2")as HTMLElement).innerHTML = "";
                (document.getElementById("val3")as HTMLElement).innerHTML = "";
                (document.getElementById("val4") as HTMLElement).innerHTML = "";
                this.time = data['daily']['data'][i]['time'];
                this.weather.temperature = data['daily']['data'][i]['temperatureLow'];
                this.pressure = data['daily']['data'][i]['pressure'];
                this.weather.description = data['daily']['data'][i]['summary'];
                var formattedDate = this.convertDateToFormat();
                this.weather.temperatureConvert();
                hourdata = " " + formattedDate + "<br><b>Temp </b>:- " + this.weather.temp + "<br><b>Pressure is</b>:- " + this.pressure + "<br><b>Summary is :-</b>" + this.weather.description + " <br>";
                var displayData = document.createElement("div");
                displayData.innerHTML = '<b><u>Date is:</b></u>' + '<br>' + hourdata;
                displayData.classList.add("Details");
                displayData.setAttribute("id", "det" + i);
                if (childCount > 0) {
                    let node = document.getElementById("det" + i);
                    ((node as HTMLElement).parentNode as HTMLElement).replaceChild(displayData, (node as HTMLElement));

                }
                 else {
                    (document.getElementById("weatherDetails")as HTMLElement).appendChild(displayData);
                    childCount = childCount - 1;

                }
            }
        });
    }
    
}
(<any>window).WeatherForecast  =  WeatherForecast ;
