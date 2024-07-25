require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

Vue.component('app', require('./components/app.vue').default)

const app = new Vue({
    el: '#app'
});
