/**
 * Created by georgrokita on 02.02.17.
 */
function myMap() {
    var myCenter = new google.maps.LatLng(51.745520,14.326960);
    var mapCanvas = document.getElementById("googleMap");
    var mapOptions = {center: myCenter, zoom: 5,disableDefaultUI: true};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter, icon:'./img/Sprits_ZAP.png'});
    marker.setMap(map);
}



