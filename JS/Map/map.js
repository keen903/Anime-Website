var map = L.map('map').setView([49.283570, -123.115020], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

    
var popup = L.popup()
    .setLatLng([49.283570, -123.115020])
    .setContent("You can apply here!")
    .openOn(map);
