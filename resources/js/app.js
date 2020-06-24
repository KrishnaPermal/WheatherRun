require('./bootstrap');

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Meteo from '../js/components/Meteo.vue';

Vue.component('Meteo', Meteo);
Vue.use(Vuetify);

    const app = new Vue({
        el: '#app',
        vuetify: new Vuetify({})
    });

    export default new Vuetify(app);

    