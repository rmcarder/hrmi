mapboxgl.accessToken = 'pk.eyJ1Ijoicm1jYXJkZXIiLCJhIjoiY2oyczl4ejRhMDAzejJ3bzFmYXViYXhpMiJ9.MIQ29ttLqnfy5ZDwyKclug';

var tract=0;

var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  zoom: 14,
  types: 'region,postcode,district,place',
  country: 'US'
});

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/rmcarder/cj2s919rw00002sogl9xsofqc',
  zoom: 2,
  hash:true,
  center: [12,90],
  minZoom: 2,
  // We only need to preserve drawing buffer if we implement printing
  // otherwise it is a performance drawback
  // preserveDrawingBuffer: true
  attributionControl: false
});

//map.addControl(new mapboxgl.AttributionControl(), 'bottom-left');
map.addControl(geocoder, 'top-left');
map.on('load', function() {

map.addSource("maps", {
"type": "vector",
"url": "mapbox://rmcarder.455pbkfs"
});


map.addLayer({
    "id": "county",
    "type": "fill",
    "source": "maps",
    "source-layer":"Output-74ybcd",
    "maxzoom": 10,
    paint: {
            'fill-color': {
                property: 'SERF',
                type: 'exponential',
                stops: [
                    [9, '#a50026'],
                    [18, '#d73027'],
                    [27, '#f46d43'],
                    [36, '#fdae61'],
                    [45, '#fee08b'],
                    [54, '#ffffbf'],
                    [63, '#d9ef8b'],
                    [72, '#a6d96a'],
                    [81, '#66bd63'],
                    [90, '#1a9850'],
                    [100, '#006837']]
            },
            'fill-opacity': {
              stops:[[0,0.5],[8,0.5],[10,0]]
            }
        }

},"airport-label"
);


var toggleableLayerIds = [ 'Country'
              ];

    var toggleableLayers = [
      { ids: ['county'], name: 'Country'},
    ];

    var menu = document.getElementById('menu');

    function hideAllLayers() {
      toggleableLayers.forEach(function(layer, i) {
        var link = menu.children[i];
        link.className = '';
        layer.ids.forEach(function(layerId) {
          map.setLayoutProperty(layerId, 'visibility', 'none');
        });
      });
    }

    toggleableLayers.forEach(function(layer) {
        var link = document.createElement('a');
        link.href = '#';
        link.className = '';
        link.textContent = layer.name;

        link.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            hideAllLayers();
            this.className = 'active';
            layer.ids.forEach(function(layerId) {
              map.setLayoutProperty(layerId, 'visibility', 'visible');
            });
        };

        menu.appendChild(link);
    });

map.on('mousemove', function (e) {
        var county = map.queryRenderedFeatures(e.point, {
           layers: ['county']
        });

          updateSidebar(county[0].properties);

          console.log('Select county', county[0].properties);
        
      });

  map.getCanvas().style.cursor = 'default';



});


