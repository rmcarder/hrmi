mapboxgl.accessToken = 'pk.eyJ1Ijoicm1jYXJkZXIiLCJhIjoiY2oyczl4ejRhMDAzejJ3bzFmYXViYXhpMiJ9.MIQ29ttLqnfy5ZDwyKclug';

var tract=0;

var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  zoom: 3,
  types: 'country',
});

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/rmcarder/cj2s919rw00002sogl9xsofqc',
  zoom: 2,
  hash:true,
  center: [32,12],
  minZoom: 2,
  // We only need to preserve drawing buffer if we implement printing
  // otherwise it is a performance drawback
  // preserveDrawingBuffer: true
  attributionControl: false
});

//map.addControl(new mapboxgl.AttributionControl(), 'bottom-left');
d3.select('#search')
  .node()
  .appendChild(geocoder.onAdd(map));

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
    'layout': {'visibility':'visible'},
    paint: {
            'fill-color': {
                property: 'SERF',
                type: 'exponential',
                stops: [
               
                    [.001, 'rgba(255,255,255,0)'],
                    [50, '#a50026'],
                    [55, '#d73027'],
                    [60, '#f46d43'],
                    [65, '#fdae61'],
                    [70, '#fee090'],
                    [75, '#ffffbf'],
                    [80, '#e0f3f8'],
                    [85, '#abd9e9'],
                    [90, '#74add1'],
                    [95, '#4575b4'],
                    [100, '#313695']]
            },
            'fill-opacity': {
              stops:[[0,0.5],[8,0.5],[10,0]]
            }
        }

},"airport-label"
);

map.addLayer({
    "id": "Educatn",
    "type": "fill",
    "source": "maps",
    "source-layer":"Output-74ybcd",
    "maxzoom": 10,
    'layout': {'visibility':'none'},
    paint: {
            'fill-color': {
                property: 'Educatn',
                type: 'exponential',
                stops: [
               
               [.001, 'rgba(255,255,255,0)'],
                    [50, '#a50026'],
                    [55, '#d73027'],
                    [60, '#f46d43'],
                    [65, '#fdae61'],
                    [70, '#fee090'],
                    [75, '#ffffbf'],
                    [80, '#e0f3f8'],
                    [85, '#abd9e9'],
                    [90, '#74add1'],
                    [95, '#4575b4'],
                    [100, '#313695']]
            },
            'fill-opacity': {
              stops:[[0,0.5],[8,0.5],[10,0]]
            }
        }

},"airport-label"
);
map.addLayer({
    "id": "Health",
    "type": "fill",
    "source": "maps",
    "source-layer":"Output-74ybcd",
    "maxzoom": 10,
    'layout': {'visibility':'none'},
    paint: {
            'fill-color': {
                property: 'Health',
                type: 'exponential',
                stops: [
               
               [.001, 'rgba(255,255,255,0)'],
                    [50, '#a50026'],
                    [55, '#d73027'],
                    [60, '#f46d43'],
                    [65, '#fdae61'],
                    [70, '#fee090'],
                    [75, '#ffffbf'],
                    [80, '#e0f3f8'],
                    [85, '#abd9e9'],
                    [90, '#74add1'],
                    [95, '#4575b4'],
                    [100, '#313695']]
            },
            'fill-opacity': {
              stops:[[0,0.5],[8,0.5],[10,0]]
            }
        }

},"airport-label"
);
map.addLayer({
    "id": "Housing",
    "type": "fill",
    "source": "maps",
    "source-layer":"Output-74ybcd",
    "maxzoom": 10,
    'layout': {'visibility':'none'},
    paint: {
            'fill-color': {
                property: 'Housing',
                type: 'exponential',
                stops: [
               
               [.001, 'rgba(255,255,255,0)'],
                    [50, '#a50026'],
                    [55, '#d73027'],
                    [60, '#f46d43'],
                    [65, '#fdae61'],
                    [70, '#fee090'],
                    [75, '#ffffbf'],
                    [80, '#e0f3f8'],
                    [85, '#abd9e9'],
                    [90, '#74add1'],
                    [95, '#4575b4'],
                    [100, '#313695']]
            },
            'fill-opacity': {
              stops:[[0,0.5],[8,0.5],[10,0]]
            }
        }

},"airport-label"
);
map.addLayer({
    "id": "Food",
    "type": "fill",
    "source": "maps",
    "source-layer":"Output-74ybcd",
    "maxzoom": 10,
    'layout': {'visibility':'none'},
    paint: {
            'fill-color': {
                property: 'Food',
                type: 'exponential',
                stops: [
               
               [.001, 'rgba(255,255,255,0)'],
                    [50, '#a50026'],
                    [55, '#d73027'],
                    [60, '#f46d43'],
                    [65, '#fdae61'],
                    [70, '#fee090'],
                    [75, '#ffffbf'],
                    [80, '#e0f3f8'],
                    [85, '#abd9e9'],
                    [90, '#74add1'],
                    [95, '#4575b4'],
                    [100, '#313695']]
            },
            'fill-opacity': {
              stops:[[0,0.5],[8,0.5],[10,0]]
            }
        }

},"airport-label"
);
map.addLayer({
    "id": "Work",
    "type": "fill",
    "source": "maps",
    "source-layer":"Output-74ybcd",
    "maxzoom": 10,
    'layout': {'visibility':'none'},
    paint: {
            'fill-color': {
                property: 'Work',
                type: 'exponential',
                stops: [
               
               [.001, 'rgba(255,255,255,0)'],
                    [50, '#a50026'],
                    [55, '#d73027'],
                    [60, '#f46d43'],
                    [65, '#fdae61'],
                    [70, '#fee090'],
                    [75, '#ffffbf'],
                    [80, '#e0f3f8'],
                    [85, '#abd9e9'],
                    [90, '#74add1'],
                    [95, '#4575b4'],
                    [100, '#313695']]
            },
            'fill-opacity': {
              stops:[[0,0.5],[8,0.5],[10,0]]
            }
        }

},"airport-label"
);         


var toggleableLayerIds = [ 'Overall','Educatn','Health','Housing','Food','Work'];

    var toggleableLayers = [
      { ids: ['county'], name: 'Overall'},
      { ids: ['Educatn'], name: 'Education'},
      { ids: ['Health'], name: 'Health'},
      { ids: ['Housing'], name: 'Housing'},
      { ids: ['Food'], name: 'Food'},
      { ids: ['Work'], name: 'Work'},
    ];

    var menu = document.getElementById('menu');

    function hideAllLayers() {
      toggleableLayers.forEach(function(layer, i) {
        var stink = menu.children[i];
        stink.className = '';
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
           layers: ['county', 'Educatn','Health','Housing','Food','Work']
        });

          updateSidebar(county[0].properties);

          console.log('Select county', county[0].properties);
        
      });

  map.getCanvas().style.cursor = 'default';



});


