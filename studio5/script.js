// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here
    mapboxgl.accessToken = 'pk.eyJ1IjoibnBhZGFyIiwiYSI6ImNpejY1dmxmdTA1M28ycXF3NWxlNTBoMWQifQ._ksyjUDnYSaz47HApqK2LQ';

    var map = new mapboxgl.Map ({
    container: 'map',
    style: 'mapbox://styles/mapbox/basic-v9',
    zoom: 0,
    center: [4.899, 52.372]
  });

});
