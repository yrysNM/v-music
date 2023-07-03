import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VeeValidatePlugin from './includes/validation'
import App from './App.vue'
import router from './router'

import { auth } from './includes/firebase'
import Icon from './directives/icon'

import './assets/base.css'
import './assets/main.css'

let app;

auth.onAuthStateChanged(() => {

    if (!app) {

        app = createApp(App)

        app.use(createPinia())
        app.use(router)
        app.use(VeeValidatePlugin, { foo: 100 })
        app.directive("icon", Icon);

        app.mount('#app')
    }

}); 