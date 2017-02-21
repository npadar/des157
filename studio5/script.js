// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  // all other js here
  mapboxgl.accessToken = 'pk.eyJ1IjoibnBhZGFyIiwiYSI6ImNpejY1dmxmdTA1M28ycXF3NWxlNTBoMWQifQ._ksyjUDnYSaz47HApqK2LQ';

  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/npadar/ciz92kc6i001n2ss2tfsqtz36',
      zoom: 1,
      center: [4.899, 52.372]
  });

  /*var map = L.mapbox.map('map', 'mapbox.dark');
  map.legendControl.addLegend(document.getElementById('legend').innerHTML);
  */

  //when use clicks on dots
  map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['conservation-status'] // replace this with the name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h3 title="World Wildlife Fund">' + feature.properties.Species + '</h3><p>' + feature.properties.Status + '</p><p>' +
    feature.properties.Description + '</p><img src="' + feature.properties.Image + '" alt="image" title="World Wildlife Fund">')
    //.setLngLat(feature.geometry.coordinates)
    .addTo(map);
  });



});
