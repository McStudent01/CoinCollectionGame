document.addEventListener("DOMContentLoaded", function() {
    function geoFindMe() {
        const status = document.querySelector("#status");
        const mapLink = document.querySelector("#map-link");

        mapLink.href = "";
        mapLink.textContent = "";
        let imageKey = "";

        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            status.textContent = "";
            if (longitude > 30) {
                temperatureText = "hot";
                imageKey = "hot";
            } else if (longitude >= 10 && longitude <= 30) {
                temperatureText = "warm";
                 imageKey = "warm";
            } else {
                temperatureText = "cold";
                imageKey = "cold";
            }
            mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
            mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} ° , Whew, it's ${temperatureText} where you are!`;
        }

        function error() {
            status.textContent = "Unable to retrieve your location";
        }

        if (!navigator.geolocation) {
            status.textContent = "Geolocation is not supported by your browser";
        } else {
            status.textContent = "Locating…";
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    document.querySelector("#find-me").addEventListener("click", geoFindMe);
    
});
