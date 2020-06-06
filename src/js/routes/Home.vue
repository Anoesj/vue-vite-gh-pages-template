<template>
  <img alt="Vue logo" :src="logoPath"/>
  <HelloWorld msg="Vue 3.0 + Vite + GitHub Actions experiment"/>
  <br/>
  <p>Environment: <strong>{{ env }}</strong></p>
  <p>Base path: <strong>{{ basePath }}</strong></p>
  <p>Custom env variable test: <strong>{{ customEnvVarTest }}</strong></p>
  <br/>
  <p v-if="env === 'production'">
    (GitHub Pages doesn't support SPAs out-of-the-box, so if you reload the page while on a subroute, it will not work, because we didn't apply any GHPages SPA hacks)
  </p>
</template>

<script>
  import logoPath from '../../assets/logo.png';

  export default {

    name: 'App',

    data () {
      return {
        logoPath,
        env: process.env.NODE_ENV,
        customEnvVarTest: process.env.VUE_APP_TEST,
        basePath: process.env.BASE_URL,
      };
    },

  };
</script>