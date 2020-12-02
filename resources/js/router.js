import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

import Home from './views/Home';
import Projects from './views/Projects';
import Project from './views/Project';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/projects/:id',
    component: Project
  }
];

export default new vueRouter({
  mode: "history",
  routes
});
