// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here
    mapboxgl.accessToken = 'pk.eyJ1IjoibnBhZGFyIiwiYSI6ImNpejY1dmxmdTA1M28ycXF3NWxlNTBoMWQifQ._ksyjUDnYSaz47HApqK2LQ';
    var loader = document.getElementById('loader');

    var bounds = [
        [-74.04728500751165, 40.68392799015035], // Southwest coordinates
        [-73.91058699000139, 40.87764500765852] // Northeast coordinates
    ];

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/npadar/ciz92kc6i001n2ss2tfsqtz36',
        zoom: 0.9,
        center: [4.899, 20.372]
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

        var popup = new mapboxgl.Popup({
                offset: [0, -15]
            })
            .setLngLat(feature.geometry.coordinates)
            .setHTML('<h3 title="World Wildlife Fund">' + feature.properties.Name + '</h3><p>' + feature.properties.Status + '</p><p>' +
                feature.properties.Description + '</p><img src="' + feature.properties.Image + '" alt="image" title="World Wildlife Fund">' +
                '<p>' + feature.properties.Threats + '</p><p>' + feature.properties.Help + '</p>')
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

        var popup = new mapboxgl.Popup({
                offset: [0, -15]
            })
            .setLngLat(feature2.geometry.coordinates)
            .setHTML('<h3 title="World Wildlife Fund">' + feature2.properties.Name + '</h3><p>' + feature2.properties.Status + '</p><p>' +
                feature2.properties.Description + '</p><img src="' + feature2.properties.Image + '" alt="image" title="World Wildlife Fund">')
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

        var popup = new mapboxgl.Popup({
                offset: [0, -15]
            })
            .setLngLat(feature3.geometry.coordinates)
            .setHTML('<h3 title="World Wildlife Fund">' + feature3.properties.Name + '</h3><p>' + feature3.properties.Status + '</p><p>' +
                feature3.properties.Description + '</p><img src="' + feature3.properties.Image + '" alt="image" title="World Wildlife Fund">')
            .addTo(map);
    });

    //FEATURES 4:NT
    map.on('click', function(e) {
        var features4 = map.queryRenderedFeatures(e.point, {
            layers: ['nt']
        });
        if (!features4.length) {
            return;
        }

        var feature4 = features4[0];

        var popup = new mapboxgl.Popup({
                offset: [0, -15]
            })
            .setLngLat(feature4.geometry.coordinates)
            .setHTML('<h3 title="World Wildlife Fund">' + feature4.properties.Name + '</h3><p>' + feature4.properties.Status + '</p><p>' +
                feature4.properties.Description + '</p><img src="' + feature4.properties.Image + '" alt="image" title="World Wildlife Fund">')
            .addTo(map);
    });

    //FEATURES 5: LC
    map.on('click', function(e) {
        var features5 = map.queryRenderedFeatures(e.point, {
            layers: ['lc']
        });
        if (!features5.length) {
            return;
        }

        var feature5 = features5[0];

        var popup = new mapboxgl.Popup({
                offset: [0, -15]
            })
            .setLngLat(feature5.geometry.coordinates)
            .setHTML('<h3 title="World Wildlife Fund">' + feature5.properties.Name + '</h3><p>' + feature5.properties.Status + '</p><p>' +
                feature5.properties.Description + '</p><img src="' + feature5.properties.Image + '" alt="image" title="World Wildlife Fund">')
            .addTo(map);
    });

    //myLayer.eachLayer(function (marker) {
    //  var p = marker.feature.properties;
    //}
    //map.legendControl.addLegend(document.getElementById('legend').innerHTML);

    /*var toggleableLayerIds = [ 'ce', 'en', 'vu', 'nt', 'lc' ]; //all the layers
    console.log(toggleableLayerIds);

    for (var i = 0; i < toggleableLayerIds.length; i++) { //loop through all layers
    var id = toggleableLayerIds[i];
    console.log(id);

    var link = document.createElement('a'); //creates an <a>
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        console.log("clickedLayer");
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
  }*/

}); //end
