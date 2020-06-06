<template>
  <nav>
    <template v-for="([routeName, routePath], index) of menuLinks">
      <preloadable-router-link
        :to="routePath"
        :key="index"
      >{{ routeName }}</preloadable-router-link>
      <span class="separator" :key="index" v-if="index < menuLinks.size - 1"> | </span>
    </template>
  </nav>

  <router-view/>
</template>

<script>
  export default {

    data () {
      return {
        menuLinks: new Map(Object.entries({
          'Home': '/',
          'Contact': '/contact',
          'Non-existent route': '/asdfghjkl',
        })),
      };
    },

  };
</script>