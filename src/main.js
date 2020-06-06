import { createApp } from 'vue';
import { router } from './js/router.js';
import { config } from './js/config';
import App from './js/App.vue';
import HelloWorld from './js/components/HelloWorld.vue';
import PreloadableRouterLink from './js/components/PreloadableRouterLink.vue';
import './css/index.css';

const app = createApp(App);

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
  redirect = redirect.replace(process.env.BASE_URL, '/');

  if (config.debug) {
    console.log('Going to redirect to ' + redirect);
  }

  router.replace(redirect);
}