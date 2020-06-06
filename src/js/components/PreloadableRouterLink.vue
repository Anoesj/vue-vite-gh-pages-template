<template>
  <router-link :to="to" @mouseenter="preloadRouteComponent" @touchstart="preloadRouteComponent">
    <slot></slot>
  </router-link>
</template>

<script>
  import { router } from '../router.js';
  import { config } from '../config.js';

  export default {

    props: {
      to: String,
    },

    methods: {
      preloadRouteComponent () {
        const route = router.resolve(this.to);
        if (route.matched.length) {
          const matchedRoute = route.matched[0];
          // If route component hasn't been dynamically imported yet, preload it on hover.
          if (typeof matchedRoute.components.default === 'function') {
            try {
              if (config.debug) console.log(`Preloading route record`, matchedRoute);
              matchedRoute.components.default();
            } catch (err) {}
          }
        }
      },
    },

  };
</script>