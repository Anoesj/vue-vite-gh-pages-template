import { createApp } from 'vue';
import { router } from './router.js';
import App from './App.vue';
import './index.css';

const app = createApp(App);
app.use(router);
app.mount('#app');

let { redirect } = sessionStorage;
delete sessionStorage.redirect;
if (redirect && redirect !== location.pathname) {
  redirect = redirect.replace(process.env.BASE_URL, '/')
  console.log('Going to redirect to ' + redirect);
  router.replace(redirect);
}