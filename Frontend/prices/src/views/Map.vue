<template>
  <div id="map-container">
    <MapboxGl/>
  </div>
</template>

<script>
import MapboxGl from "@/components/MapboxGl.vue"

export default {
  components: {
    MapboxGl
  },
  data() {
    return {
    };
  },
};
</script>

<style>

#map-container {
    height: 100vh;
    width: auto;
    margin: 0;
    padding: 0;
}

</style>