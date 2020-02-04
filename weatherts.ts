import { TemperatureConverter } from "./temperature";

 export class WeatherDisplay extends TemperatureConverter {

    city: string;
    country: string;
    temperature: number;
    description: string;
    latitude: number;
    longitude: number;
    temp: string;
    constructor()
    {
        super();
        this.city = "";
        this.country = "";
        this.temperature = 0;
        this.description = "";
        this.latitude = 0;
        this.longitude = 0;
        this.temp = "";
    }
    
   
    displayWeatherOnHtml() 
    {
        this.temperatureConvert();
        (document.getElementById("val2") as HTMLElement).textContent = "location :-" + this.city + "," + this.country;
        (document.getElementById("val3")as HTMLElement).innerHTML = this.temp + " <br>";
        (document.getElementById("val4")as HTMLElement).innerHTML = "description " + this.description;
        
    }

}

(<any>window). WeatherDisplay =  WeatherDisplay;
