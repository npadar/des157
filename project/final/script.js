// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  // all other js here
  mapboxgl.accessToken = 'pk.eyJ1IjoibnBhZGFyIiwiYSI6ImNpejY1dmxmdTA1M28ycXF3NWxlNTBoMWQifQ._ksyjUDnYSaz47HApqK2LQ';
  var loader = document.getElementById('loader');
  //var map = L.mapbox.map('map', 'mapbox.dark');
  //map.legendControl.addLegend(document.getElementById('legend').innerHTML);

  var bounds = [
    [-74.04728500751165, 40.68392799015035], // Southwest coordinates
    [-73.91058699000139, 40.87764500765852]  // Northeast coordinates
  ];

  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/npadar/ciz92kc6i001n2ss2tfsqtz36',
      zoom: 1.4,
      center: [4.899, 20.372]
  });

  //map.legendControl.addLegend(document.getElementById('legend').innerHTML);

//CENTER MAP ON CLICK
  map.on('click', function (e) {
    // Use queryRenderedFeatures to get features at a click event's point
    // Use layer option to avoid getting results from other layers
    var features = map.queryRenderedFeatures(e.point, { layers: ['ce'] });
    // if there are features within the given radius of the click event,
    // fly to the location of the click event
    if (features.length) {
        // Get coordinates from the symbol and center the map on those coordinates
        map.flyTo({center: features[0].geometry.coordinates});
    }
  });

  map.on('click', function (e) {
    var features2 = map.queryRenderedFeatures(e.point, { layers: ['en'] });
    if (features2.length) {
        map.flyTo({center: features2[0].geometry.coordinates});
    }
  });

  map.on('click', function (e) {
    var features3 = map.queryRenderedFeatures(e.point, { layers: ['vu'] });
    if (features3.length) {
        map.flyTo({center: features3[0].geometry.coordinates});
    }
  });

//POPUP BOXES when user clicks on dots

  //FEATURE 1: CE
  map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['ce'] // replace this with the name of the layer
  });
  if (!features.length) {
    return;
  }
  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h3 title="World Wildlife Fund">' + feature.properties.Name + '</h3><p>' + feature.properties.Status + '</p><p>' +
    feature.properties.Description + '</p><img src="' + feature.properties.Image + '" alt="image" title="World Wildlife Fund">')
    //.setLngLat(feature.geometry.coordinates)
    .addTo(map);
  });

  //FEATURES 2: EN
  map.on('click', function(e) {
    var features2 = map.queryRenderedFeatures(e.point, {
      layers: ['en']
    });
    if (!features2.length) {
      return;
    }

    var feature2 = features2[0];

    var popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature2.geometry.coordinates)
      .setHTML('<h3 title="World Wildlife Fund">' + feature2.properties.Name + '</h3><p>' + feature2.properties.Status + '</p><p>' +
      feature2.properties.Description + '</p><img src="' + feature2.properties.Image + '" alt="image" title="World Wildlife Fund">')
      //.setLngLat(feature.geometry.coordinates)
      .addTo(map);
    });

    //FEATURES 3:VU
    map.on('click', function(e) {
      var features3 = map.queryRenderedFeatures(e.point, {
        layers: ['vu']
      });
      if (!features3.length) {
        return;
      }

      var feature3 = features3[0];

      var popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature3.geometry.coordinates)
        .setHTML('<h3 title="World Wildlife Fund">' + feature3.properties.Name + '</h3><p>' + feature3.properties.Status + '</p><p>' +
        feature3.properties.Description + '</p><img src="' + feature3.properties.Image + '" alt="image" title="World Wildlife Fund">')
        //.setLngLat(feature.geometry.coordinates)
        .addTo(map);
      });

      map.legendControl.addLegend(document.getElementById('legend').innerHTML);

}); //end
