class weather_descriptions {

    latitude: number;
    namevalue: string;
    country: string;
    tempvalue: number;
    descvalue: string;
    longitude: number;
    weather_descriptions(latitude: number, namevalue: string, country: string, tempvalue: number, descvalue: string, longitude: number) {
        this.latitude = latitude;
        this.namevalue = namevalue;
        this.country = country;
        this.tempvalue = tempvalue;
        this.descvalue = descvalue;
        this.longitude = longitude;
    }


    settemp() {

        let ftemp: number = (this.tempvalue * 9 / 5) + 32;
        let ktemp: number = (this.tempvalue + 273.15);
        let value = (<HTMLSelectElement>document.getElementById('select')).value;
        // console.log(value);
        if (value == "celsius") {
            document.getElementById("val3").innerHTML = "temperature in celsius :- " + this.tempvalue;
        }

        else if (value == "kelvin") {
            document.getElementById("val3").innerHTML = "temperature in kelvin :- " + ktemp;
        }
        else {
            document.getElementById("val3").innerHTML = " <br> temprature farenheit :-" + ftemp;
        }
    }
    detectWeather() {
        let locate: string = ((document.getElementById("locs") as HTMLInputElement).value);
        return fetch('http://api.weatherstack.com/current?access_key=e3a07aed460ae8a3dddf8c3b9182c739&query=' + locate)
            .then(response => {
                return response.json()
            }).then(data => {


                this.namevalue = data['location']['name'];
                this.country = data['location']['country'];
                this.tempvalue = data['current']['temperature'];
                this.descvalue = data['current']['weather_descriptions'];
                this.latitude = data['location']['lat'];
                this.longitude = data['location']['lon'];
                this.settemp();

                document.getElementById("val2").textContent = "location :-" + this.namevalue + "," + this.country;
                // document.getElementById("val3").innerHTML = "temperature in celsius :- " + this.tempvalue + " <br> temprature farenheit :-" + ftemp;
                document.getElementById("val4").innerHTML = "description " + this.descvalue;
                console.log(data)
                return data;
            })
            .catch((error: Error) => {
                alert("valid not");
            })

    }
}
let wd = new weather_descriptions();
