 var latitude;

function detectWeather<T>(): Promise<T> {
    let locate: string = ((document.getElementById("locs") as HTMLInputElement).value);
    return fetch('http://api.weatherstack.com/current?access_key=e3a07aed460ae8a3dddf8c3b9182c739&query=' + locate)
        .then(response => {
            return response.json()
        }).then(data => {


            let namevalue: any = data['location']['name'];
            let country: any = data['location']['country'];
            let tempvalue: any = data['current']['temperature'];
            let descvalue: any = data['current']['weather_descriptions'];
              var latitude = data['location']['lat'];
               var longitude = data['location']['lon'];
            //   exvar latitude = '';
             
            
            
            // if(data['weather'].indexOf['rain'] >= 0) 
            // {        skycons.set("animated-icon", Skycons.RAIN);    }
            // else if (weather.indexOf("sunny") >= 0) 
            // {        skycons.set("animated-icon", Skycons.CLEAR_DAY);    }

            console.log(namevalue);
            console.log(country);
           
            let ftemp: number = (tempvalue * 9 / 5) + 32;
            document.getElementById("val2").textContent = "location :-" + namevalue + "," + country;
            //document.getElementById("val1").innerHTML=country;
            document.getElementById("val3").innerHTML = "temperature in celsius :- " + tempvalue + " <br> temprature farenheit :-" + ftemp;
            document.getElementById("val4").innerHTML = "description " + descvalue;




            console.log(data)
            return data;
        })
        .catch((error: Error) => {
            alert("valid not");
        })

}
<<<<<<< HEAD
=======


>>>>>>> cd0a1c05d68f574d0f449abd3696fdaf85259df5

