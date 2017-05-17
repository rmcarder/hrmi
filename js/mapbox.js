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
    style: 'mapbox://styles/rmcarder/cizru0urw00252ro740x73cea',
  zoom: 1,
  hash:true,
  center: [0,0],
  minZoom: 3,
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
                    [10, '#f0f9e8'],
                    [20, '#ccebc5'],
                    [30, '#a8ddb5'],
                    [40, '#7bccc4'],
                    [50, '#4eb3d3'],
                    [60, '#2b8cbe'],
                    [70, '#08589e'],
                    [90, '#08589e'],
                    [100, '#08589e'],
                    [110, '#08589e'],
                    [120, '#08589e'],
                    [130, '#08589e']]
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


