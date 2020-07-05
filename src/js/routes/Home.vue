<template>
  <img alt="Vue logo" :src="logoPath"/>
  <HelloWorld msg="Vue 3.0 + Vite + GitHub Actions experiment"/>
  <br/>
  <p>Environment: <strong>{{ env }}</strong></p>
  <p>Base path: <strong>{{ basePath }}</strong></p>
  <p>Custom env variable test: <strong>{{ customEnvVarTest }}</strong></p>
</template>

<script>
  import logoPath from '../../assets/logo.png';

  export default {

    name: 'App',

    data () {
      return {
        logoPath,
        env: import.meta.env.MODE,
        customEnvVarTest: import.meta.env.VITE_TEST,
        basePath: import.meta.env.BASE_URL,
      };
    },

  };
</script>