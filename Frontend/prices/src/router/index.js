import Vue from 'vue';
import Router from 'vue-router';
import Map from '@/views/Map.vue';

Vue.use(Router);

const routes = [
  {
    path: '',
    name: 'Map',
    component: Map,
  },
];

export default new Router({
  routes,
  mode: 'history',
});