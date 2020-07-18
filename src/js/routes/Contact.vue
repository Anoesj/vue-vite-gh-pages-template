<template>
  <img alt="Vue logo" width="200" height="200" :src="logoPath"/>
  <h2>Contact page</h2>
</template>

<script>
  import logoPath from '../../assets/logo.png';

  export default {

    name: 'Contact',

    data () {
      return {
        logoPath,
      };
    },

  };
</script>