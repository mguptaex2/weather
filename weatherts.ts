
 export class WeatherDisplay {

    city: string;
    country: string;
    temperature: number;
    description: string;
    latitude: number;
    longitude: number;
    temp: string;
    constructor()
    {
        this.city = "";
        this.country = "";
        this.temperature = 0;
        this.description = "";
        this.latitude = 0;
        this.longitude = 0;
        this.temp = "";
    }
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
        (document.getElementById("val2") as HTMLElement).textContent = "location :-" + this.city + "," + this.country;
        (document.getElementById("val3")as HTMLElement).innerHTML = this.temp + " <br>";
        (document.getElementById("val4")as HTMLElement).innerHTML = "description " + this.description;
        
    }

}
export class GetApi extends WeatherDisplay
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
let t = new GetApi();
