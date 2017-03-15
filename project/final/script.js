// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here
    mapboxgl.accessToken = 'pk.eyJ1IjoibnBhZGFyIiwiYSI6ImNpejY1dmxmdTA1M28ycXF3NWxlNTBoMWQifQ._ksyjUDnYSaz47HApqK2LQ';
    var loader = document.getElementById('loader');
    var title = document.getElementById('title');
    var ce = document.getElementById('ce');
    var en = document.getElementById('en');
    var nt = document.getElementById('nt');
    var vu = document.getElementById('vu');
    var lc = document.getElementById('lc');

    var bounds = [
        [-165.959,66.503], // Southwest coordinates
        [167.998,65.866] // Northeast coordinates
    ];

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/npadar/ciz92kc6i001n2ss2tfsqtz36',
        zoom: 0.85,
        center: [4.899, 20.372],
        dragPan: false,
        maxZoom: 1,
        /*renderWorldCopies: false*/
    });

    //add zoom
    map.addControl(new mapboxgl.NavigationControl());

    //POPUP BOXES when user clicks on dots

    //FEATURE 1: CE
    map.on('click', function(e) {
        //title.style.opacity = 0;

        var features = map.queryRenderedFeatures(e.point, {
            layers: ['ce'] // replace this with the name of the layer
        });
        if (!features.length) {
            return;
        }
        var feature = features[0];

        var popup = new mapboxgl.Popup({
                offset: [0, -15]
                //anchor: 'bottom'
            })
            .setLngLat(feature.geometry.coordinates)
            .setHTML('<h3 title="World Wildlife Fund">' + feature.properties.Name + '</h3><p class="status" style="background-color:rgb(214, 81, 81);color:white">' + feature.properties.Status + '</p><p>' +
                feature.properties.Description + '</p><img src="' + feature.properties.Image + '" alt="image" title="@World Wildlife Fund">' +
                '<h2> Threats </h2>' +
                '<p>' + feature.properties.Threats + '</p><h2> How to Help </h2><p>' + feature.properties.Help + '<a href="' + feature.properties.Link + '">WWF</a></p>')
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
                offset: [0, -15],
                anchor: 'right'
            })
            .setLngLat(feature2.geometry.coordinates)
            .setHTML('<h3 title="World Wildlife Fund">' + feature2.properties.Name + '</h3><p class="status" style="background-color:rgb(208, 135, 57); color:white;">' + feature2.properties.Status + '</p><p>' +
                feature2.properties.Description + '</p><img src="' + feature2.properties.Image + '" alt="image" title="@World Wildlife Fund">'
                + '<h2> Threats </h2><p>' + feature2.properties.Threats + '</p><h2> How to Help </h2><p>' + feature2.properties.Help + '<a href="' + feature2.properties.Link + '">WWF</a></p>')
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
                offset: [0, -15],
                anchor: 'bottom'
            })
            .setLngLat(feature3.geometry.coordinates)
            .setHTML('<h3 title="World Wildlife Fund">' + feature3.properties.Name + '</h3><p class="status" style="background-color:rgb(235, 222, 107); color:white;">' + feature3.properties.Status + '</p><p>' +
                feature3.properties.Description + '</p><img src="' + feature3.properties.Image + '" alt="image" title="@World Wildlife Fund">' +
                '<h2> Threats </h2><p>' + feature3.properties.Threats + '</p><h2> How to Help </h2><p>' + feature3.properties.Help + '<a href="' + feature3.properties.Link + '">WWF</a></p>')
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
            .setHTML('<h3 title="World Wildlife Fund">' + feature4.properties.Name + '</h3><p class="status" style="background-color:rgb(173, 224, 97); color:white;">' + feature4.properties.Status + '</p><p>' +
                feature4.properties.Description + '</p><img src="' + feature4.properties.Image + '" alt="image" title="@World Wildlife Fund">' +
                '<h2> Threats </h2><p>' + feature4.properties.Threats + '</p><h2> How to Help </h2><p>' + feature4.properties.Help + '<a href="' + feature4.properties.Link + '">defenders.org</a></p>')
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
            .setHTML('<h3 title="World Wildlife Fund">' + feature5.properties.Name + '</h3><p class="status" style="background-color:rgb(130, 138, 242);color:white;">' + feature5.properties.Status + '</p><p>' +
                feature5.properties.Description + '</p><img src="' + feature5.properties.Image + '" alt="image" title="@World Wildlife Fund">'
                + '<h2> Threats </h2><p>' + feature5.properties.Threats + '</p><h2> How to Help </h2><p>' + feature5.properties.Help + '<a href="' + feature5.properties.Link + '">WWF</a></p>')
            .addTo(map);
    });

    //CE layer toggle
    ce.addEventListener("click", function() {
        console.log("clicked");

        var visibility = map.getLayoutProperty('ce', 'visibility');
        console.log("here");
        if (visibility === 'visible') {
            map.setLayoutProperty('ce', 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty('ce', 'visibility', 'visible');
        }
    });

    //EN layer toggle
    en.addEventListener("click", function() {
        console.log("clicked");

        var visibility = map.getLayoutProperty('en', 'visibility');
        console.log("here");
        if (visibility === 'visible') {
            map.setLayoutProperty('en', 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty('en', 'visibility', 'visible');
        }
    });

    //VU layer toggle
    vu.addEventListener("click", function() {
        console.log("clicked");

        var visibility = map.getLayoutProperty('vu', 'visibility');
        console.log("here");
        if (visibility === 'visible') {
            map.setLayoutProperty('vu', 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty('vu', 'visibility', 'visible');
        }
    });

    //NT layer toggle
    nt.addEventListener("click", function() {
        console.log("clicked");

        var visibility = map.getLayoutProperty('nt', 'visibility');
        console.log("here");
        if (visibility === 'visible') {
            map.setLayoutProperty('nt', 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty('nt', 'visibility', 'visible');
        }
    });

    //LC layer toggle
    lc.addEventListener("click", function() {
        console.log("clicked");

        var visibility = map.getLayoutProperty('lc', 'visibility');
        console.log("here");
        if (visibility === 'visible') {
            map.setLayoutProperty('lc', 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty('lc', 'visibility', 'visible');
        }
    });

    /*var markers = feature.featureLayer().addTo(map);
    var info = document.getElementById('info');

    markers.eachLayer(function(m) {
      // Shorten m.feature.properties to p for convenience.
      var p = m.feature.properties;
      console.log(p);

      var tabs = document.createElement('div');
      tabs.className = 'tabs-ui';

      for (var key in p) {
          var tab = document.createElement('div');
          tab.className = 'tab';

          var input = document.createElement('input');
          input.type = 'radio';
          input.id = idify(key);
          input.name = 'tab-group'; // For your own needs, you might want this to be unique.
          if (key === 'Name') input.setAttribute('checked', true);

          tab.appendChild(input);

          tab.innerHTML += '<label for=' + idify(key) + '>' + key + '</label>' +
          '<div class="content">' +
              p[key] +
          '</div>';

          tabs.appendChild(tab);
      }

      m.bindPopup(tabs);
  });*/


}); //end
