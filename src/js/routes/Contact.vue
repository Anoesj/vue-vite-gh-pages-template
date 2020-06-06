<template>
  <img alt="Vue logo" :src="logoPath"/>
  <h2>Contact page</h2>
</template>

<script>
  import logoPath from '../../assets/logo.png';

  export default {

    name: 'App',

    data () {
      return {
        logoPath,
      };
    },

  };
</script>