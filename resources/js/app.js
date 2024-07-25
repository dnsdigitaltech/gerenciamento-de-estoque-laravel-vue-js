require('./bootstrap');

import Vue from 'vue';

Vue.component('main-app', require('./components/mainApp.vue').default)

const app = new Vue({
    el: '#app'
});
