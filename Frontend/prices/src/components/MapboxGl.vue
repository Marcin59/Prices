<template>
  <div id="map"></div>
</template>

<script>
import Mapbox from "mapbox-gl";

export default {
  components: {
  },
  data() {
    return {
      places: [
        {
          lngLat: [16.31097321289832, 53.522456455353364],
          title: 'Dom'
        },
        {
          lngLat: [16.301342863152456, 53.52624949432777],
          title: 'Lotnisko'
        },
      ],
      mapbox: null
    };
  },
  mounted() {
    // We need to set mapbox-gl library here in order to use it in template
    var self = this
    Mapbox.accessToken = "pk.eyJ1IjoibWlrZWhhbWlsdG9uMDAiLCJhIjoiNDVjS2puUSJ9.aLvWM5BnllUGJ0e6nwMSEg"
    this.mapbox = new Mapbox.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [19.0333300, 52.0577500],
        zoom: 6
    })
    this.mapbox.addControl(new Mapbox.FullscreenControl());
    this.mapbox.on('load', function () {
        // Add a source for the state polygons.
        self.mapbox.addSource('states', {
            'type': 'geojson',
            'data':
                'https://raw.githubusercontent.com/ppatrzyk/polska-geojson/master/powiaty/powiaty-max.geojson'
        });
 
        // Add a layer showing the state polygons. [// Dodaj warstwę pokazującą regiony stanów.] 
        self.mapbox.addLayer({
            'id': 'states-layer',
            'type': 'fill',
            'source': 'states',
            'paint': {
            'fill-color': 'rgba(200, 100, 240, 0.4)',
            'fill-outline-color': 'rgba(200, 100, 240, 1)'
            }
        });
 
        // When a click event occurs on a feature in the states layer, open a popup at the
        // location of the click, with description HTML from its properties.
        self.mapbox.on('click', 'states-layer', function (e) {
            new Mapbox.Popup()
                .setLngLat(e.lngLat)
                .setHTML(e.features[0].properties.nazwa)
                .addTo(self.mapbox);
        });
 
        // Change the cursor to a pointer when the mouse is over the states layer.
        self.mapbox.on('mouseenter', 'states-layer', function () {
            self.mapbox.getCanvas().style.cursor = 'pointer';
        });
 
        // Change it back to a pointer when it leaves.
        self.mapbox.on('mouseleave', 'states-layer', function () {
            self.mapbox.getCanvas().style.cursor = '';
        });
        });
  },
};
</script>

<style>
@import 'https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css';

.mapboxgl-popup {
  height: 200px;
  width: 100px;
  text-align: center;
}

#map {
    width: 100%;
    height: 939px !important;
}
</style>