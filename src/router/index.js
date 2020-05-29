import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Camera from '../views/Camera.vue';
import Editor from '../components/Editor.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/camera',
    name: 'Camera',
    component: Camera,
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
