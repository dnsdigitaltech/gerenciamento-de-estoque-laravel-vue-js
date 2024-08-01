let login = require('./components/auth/login.vue').default;
let register = require('./components/auth/register.vue').default;
let forget = require('./components/auth/forget.vue').default;
let logout = require('./components/auth/logout.vue').default;

//End Authentication
let dashboard = require('./components/dashboard.vue').default;

export const routes = [
    { path: '/', component: login, name: '/' },
    { path: '/cadastrar', component: register, name: 'register' },
    { path: '/nova-senha', component: forget, name: 'forget' },
    { path: '/logout', component: logout, name: 'logout' },
    { path: '/dashboard', component: dashboard, name: 'dashboard' },
]