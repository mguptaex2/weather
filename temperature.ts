import { GetApi } from "./getapi";
import {WeatherForecast} from "./weatherforecast";


export class TemperatureConverter
{
    temperature : number = 0;
    temp : string = ""; 
    constructor()
    {
        this.temperatureConvert();
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
    changeTemperature()
    {
        
             if ((document.getElementById("weatherDetails")as HTMLElement).childElementCount)
            {
                let forecast = new WeatherForecast(); 
                forecast.weatherForecast();
        
            }
            else
            {
                let api = new GetApi();
                api.bindDataFromApi();
            }
    }
}
(<any>window).TemperatureConverter =  TemperatureConverter;