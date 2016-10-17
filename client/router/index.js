/**
 * Created by toma on 05.10.16..
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import OodletView from '../views/OodletView.vue';
import HistoryView from '../views/HistoryView.vue';
import SettingsView from '../views/SettingsView.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
  { path: '/login', component: LoginView },
  { path: '/', component: OodletView },
  { path: '/history', component: HistoryView },
  { path: '/settings', component: SettingsView }
];

let router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  console.log('From ' + from.path);
  console.log('To ' + to.path);

  next();
});

export default router;