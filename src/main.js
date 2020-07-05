import { createApp } from 'vue';
import { router } from './js/router.js';
import { config } from './js/config.js';
import App from './js/App.vue';
import HelloWorld from './js/components/HelloWorld.vue';
import PreloadableRouterLink from './js/components/PreloadableRouterLink.vue';
import './css/index.css';

const app = createApp(App);

// Inject config into the Vue app, so it's available everywhere without the need to import config.js.
for (const [key, value] of Object.entries(config)) {
  app.config.globalProperties['$' + key] = value;
}

// Plugins
app.use(router);

// Components
app.component('HelloWorld', HelloWorld);
app.component('PreloadableRouterLink', PreloadableRouterLink);

// Mount app
app.mount('#app');

// GitHub Pages redirect hack for crawler-friendly SPAs
let { redirect } = sessionStorage;
delete sessionStorage.redirect;
if (redirect && redirect !== location.pathname) {
  redirect = redirect.replace(import.meta.env.BASE_URL, '/');

  if (config.debug) {
    console.log('Going to redirect to ' + redirect);
  }

  router.replace(redirect);
}