<template>
  <img alt="Vue logo" src="../assets/logo.png"/>
  <HelloWorld msg="Hello Vue 3.0 + Vite"/>
  <p>Environment: {{ env }}</p>
  <p>Custom env variable test: {{ customEnvVarTest }}</p>
</template>

<script>
  import HelloWorld from '../components/HelloWorld.vue';

  export default {
    name: 'App',
    data () {
      return {
        env: process.env.NODE_ENV,
        customEnvVarTest: process.env.VUE_APP_TEST,
      };
    },
    components: {
      HelloWorld,
    },
  };
</script>