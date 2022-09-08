import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { defineCustomElements } from '@dgfip/dsfr-core';
import store from './store/store';
import Home from './components/Home.vue';
import Message from './components/Message.vue';
import Search from './components/Search.vue';

Vue.config.productionTip = false;

Vue.config.ignoredElements = [/fr-\w*/];

defineCustomElements();

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/search', component: Search },
    { path: '/message', component: Message },
    { path: '/home', component: Home },
  ],
});

Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
