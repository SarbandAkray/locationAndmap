document.addEventListener("DOMContentLoaded",()=>{
    navigator.geolocation.getCurrentPosition((possition)=>{
        fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+possition.coords.latitude+'&longitude='+possition.coords.longitude+'&localityLanguage=ku')
        .then(response => response.json())
        .then(data =>{
            document.getElementById("continet").innerHTML=data.continent;
            document.getElementById("country").innerHTML=data.countryName;
            var city = document.getElementById("city");
            if (data.localityInfo.administrative[2].name =="حەولێر"){
                city.innerHTML="هەولێر";
            }
            
            var map = L.map('map').setView([possition.coords.latitude,possition.coords.longitude], 18);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19
            }).addTo(map);
            var marker = L.marker([possition.coords.latitude,possition.coords.longitude]).addTo(map);
            
        });
    },
    (err)=>{
         document.getElementById("card").innerHTML ="<h1 style='color : red;'>error: </h1> <h1 style='color : red;'>please enable location in your browser</h1>";
    }
    );
    })
