import { WeatherDisplay} from "./weatherts"; 
import { GetApi } from "./getapi";

export class CurrentLocation   {
    currentLocationOfUser() 
    {
            //it tells the current location of the user.
            if(navigator.geolocation)
             {
                navigator.geolocation.getCurrentPosition(this.getCurrentWeather); 
            }
                else
            {
            alert("Not supporting browser");
            }    
    }

    getCurrentWeather(position:any)
    {
        //It displays the weather of cuurent location.
        let weather = new WeatherDisplay();
        let api = new GetApi();
        let URL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=058071b3c7be6c1ba2185d48585c50ad'
     
        api.getApiCall(URL).then(data => 
            {
                weather.city = data['name'];
                weather.country = data['sys']['country'];
                weather.temperature = data['main']['temp'];
                weather.description = data['weather'][0]['description'];
                weather.temperature = weather.temperature - 273.15;
                ((document.getElementById("locs") as HTMLInputElement).value) = weather.city;
                weather.displayWeatherOnHtml();
            });

    }
}
(<any>window). CurrentLocation =  CurrentLocation;


