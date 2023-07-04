import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VeeValidatePlugin from './includes/validation'
import App from './App.vue'
import router from './router'

import { auth } from './includes/firebase'
import Icon from './directives/icon'
import i18n from "./includes/i18n";

import './assets/base.css'
import './assets/main.css'

let app;

auth.onAuthStateChanged(() => {

    if (!app) {

        app = createApp(App)

        app.use(createPinia())
        app.use(router)
        app.use(VeeValidatePlugin, { foo: 100 })
        app.use(i18n);
        app.directive("icon", Icon);

        app.mount('#app')
    }

}); 