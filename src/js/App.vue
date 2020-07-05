<template>
  <nav>
    <template v-for="(routePath, routeName, index) of menuLinks">
      <preloadable-router-link
        :to="routePath"
        :key="index"
      >{{ routeName }}</preloadable-router-link>
      <span class="separator" :key="index" v-if="index < menuLinksAmount - 1"> | </span>
    </template>
  </nav>

  <main>
    <router-view/>
  </main>

  <footer>
    <p>
      Grab this template at: <a href="https://github.com/Anoesj/vue-vite-gh-pages-template/">https://github.com/Anoesj/vue-vite-gh-pages-template/</a>
    </p>
  </footer>
</template>

<script>
  export default {

    data () {
      return {
        menuLinks: {
          'Home': '/',
          'Contact': '/contact',
          'Non-existent route': '/asdfghjkl',
        },
      };
    },

    computed: {
      menuLinksAmount () {
        return Object.keys(this.menuLinks).length;
      },
    },

  };
</script>