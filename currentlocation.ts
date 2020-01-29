import {GetApi} from "./weatherts"; 

export class CurrentLocation extends GetApi  {

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
// let cl = new CurrentLocation();