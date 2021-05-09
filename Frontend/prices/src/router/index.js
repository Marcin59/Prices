import Vue from 'vue';
import Router from 'vue-router';
import Map from '@/components/HelloWorld.vue';

Vue.use(Router);

const routes = [
  {
    path: '/Map',
    name: 'Map',
    component: Map,
  },
];

export default new Router({
  routes,
  mode: 'history',
});