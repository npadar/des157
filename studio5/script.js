// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  // all other js here
  mapboxgl.accessToken = 'pk.eyJ1IjoibnBhZGFyIiwiYSI6ImNpejY1dmxmdTA1M28ycXF3NWxlNTBoMWQifQ._ksyjUDnYSaz47HApqK2LQ';
  //L.mapboxgl.accessToken = 'pk.eyJ1IjoibnBhZGFyIiwiYSI6ImNpejY1dmxmdTA1M28ycXF3NWxlNTBoMWQifQ._ksyjUDnYSaz47HApqK2LQ';

  //mapboxgl.accessToken = 'npadar.ciz8x6bve019c33qikw21foa2-242wn'
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/npadar/ciz92kc6i001n2ss2tfsqtz36',
      zoom: 1,
      center: [4.899, 52.372]
  });

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
    .setHTML('<h3>' + feature.properties.Species + '</h3><p>' + feature.properties.Status + '</p><p>' +
    feature.properties.Description + '</p><img src="' + feature.properties.Image + '" alt="">')
    //.setLngLat(feature.geometry.coordinates)
    .addTo(map);
  });

});
