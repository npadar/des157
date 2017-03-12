// JavaScript Document
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  // all other js here
  var mymap = L.map('mapid').setView([51.505, -0.09], 13);
  console.log("here");

  L.tileLayer('https://api.mapbox.com/styles/v1/npadar/cj06109d800512smj99b5z75n/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibnBhZGFyIiwiYSI6ImNpejY1dmxmdTA1M28ycXF3NWxlNTBoMWQifQ._ksyjUDnYSaz47HApqK2LQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox://styles/npadar/cj06109d800512smj99b5z75n',
    accessToken: 'pk.eyJ1IjoibnBhZGFyIiwiYSI6ImNpejY1dmxmdTA1M28ycXF3NWxlNTBoMWQifQ._ksyjUDnYSaz47HApqK2LQ'
}).addTo(mymap);

var info = document.getElementById('info');
var content = '<div class="tabs">' +

            '<div class="tab" id="tab-1">' +
            '<div class="content">' +
            '<b>Tab 1 content</b>' +
            '</div>' +
            '</div>' +

            '<div class="tab" id="tab-2">' +
            '<div class="content">' +
            '<b>Tab 2 content</b>' +
            '</div>' +
            '</div>' +

            '<div class="tab" id="tab-3">' +
            '<div class="content">' +
            '<b>Tab 3 content</b>' +
            '</div>' +
            '</div>' +

            '<ul class="tabs-link">' +
            '<li class="tab-link"> <a href="#tab-1"><span>Tab 1</span></a></li>' +
            '<li class="tab-link"> <a href="#tab-2"><span>Tab 2</span></a></li>' +
            '<li class="tab-link"> <a href="#tab-3"><span>Tab 3</span></a></li>' +
            '</ul>' +
        '</div>';

var polygon1 = L.circle([51.508, -0.11], 500, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(mymap).bindPopup(content);

var polygon2 = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap).bindPopup(content);

}); //end
