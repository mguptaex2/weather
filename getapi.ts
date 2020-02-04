import { WeatherDisplay } from "./weatherts";

export class GetApi 
{
    
    async getApiCall(URL:any) {

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
                let weather = new WeatherDisplay();
                weather.city = data['location']['name'];
                weather.country = data['location']['country'];
                weather.temperature = data['current']['temperature'];
                weather.description = data['current']['weather_descriptions'];
                weather.latitude = data['location']['lat'];
                weather.longitude = data['location']['lon'];
                weather.displayWeatherOnHtml();
            });

    }
    
}
(<any>window). GetApi =  GetApi;