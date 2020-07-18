<template>
  <img alt="Vue logo" width="200" height="200" :src="logoPath"/>
  <HelloWorld :msg="$appName"/>
  <br/>
  <p>Environment: <strong>{{ $mode }}</strong></p>
  <p>Base path: <strong>{{ $basePath }}</strong></p>
  <p>Custom .env variable test: <strong>{{ customEnvVarTest }}</strong></p>
</template>

<script>
  import logoPath from '../../assets/logo.png';

  export default {

    name: 'Home',

    data () {
      return {
        logoPath,
        customEnvVarTest: import.meta.env.VITE_TEST,
      };
    },

  };
</script>