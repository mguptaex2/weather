class currloc {
    namevalue: any;
    country: any;
    tempvalue: number;
    descvalue: any;
    lat: any;
    lng: any;
    currloc(namevalue: any, country: any, tempvalue: number, descvalue: any, lat: any, lng: any) {
        this.namevalue = namevalue;
        this.country = country;
        this.tempvalue = tempvalue;
        this.descvalue = descvalue;
        this.lat = lat;
        this.lng = lng;



    }

    // tempconvert() {

    //     var tempc = this.tempvalue - 273.15;
    //     console.log(typeof (tempc));
    //     var ftemp = (tempc * 9 / 5) + 32;

    // }
    currentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(displayLocationInfo);
        }

        function displayLocationInfo(position) {
            this.lng = position.coords.longitude;
            this.lat = position.coords.latitude;

            // console.log(lng);
            // console.log(lat);
            fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + this.lat + '&lon=' + this.lng + '&appid=058071b3c7be6c1ba2185d48585c50ad')
                .then(response => {
                    console.log("1")
                    return response.json()
                }).then(data => {
                    this.namevalue = data['name'];
                    this.country = data['country'];
                    this.tempvalue = data['main']['temp'];
                    this.descvalue = data['weather'][0]['description'];
                    // document.getElementById("val1").innerHTML=country;
                    document.getElementById("val2").innerHTML = "location :-" + this.namevalue ;
                    ((document.getElementById("locs") as HTMLInputElement).value) = this.namevalue;
                    console.log(this.country);
                    this.tempvalue=(this.tempvalue.toFixed(2));
                    // var kelvin = 273;
                    var tempc = (this.tempvalue - 273.15);
                    console.log(typeof (tempc));
                    var ftemp = (tempc * 9 / 5) + 32;
                    // this.tempconvert();
                    let value = (<HTMLSelectElement>document.getElementById('select')).value;
                console.log(value);
                if(value =="celsius")
                {
                    document.getElementById("val3").innerHTML = "temperature in celsius :- " + tempc.toFixed(2) ;
                }
               
               else if(value =="kelvin")
                {
                    document.getElementById("val3").innerHTML = "temperature in kelvin :- " + this.tempvalue ;
                }
                else{
                    document.getElementById("val3").innerHTML =  " <br> temprature farenheit :-" + ftemp.toFixed(2);
                }
                    // document.getElementById("val3").innerHTML = "temperature in celsius :- " + tempc.toFixed(2) + " <br> temprature farenheit :-" + ftemp.toFixed(2);
                    document.getElementById("val4").innerHTML = "description " + this.descvalue;
                    // let test = document.createElement("button");
                    // test.textContent="hello";
                   // document.getElementById("val4").appendChild(test);
                })
                
                
                .catch((error: Error) => {

                    console.log(error);
                })
        }
    }
}
let current = new currloc();