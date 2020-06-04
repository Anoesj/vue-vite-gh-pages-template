import { createRouter, createWebHistory } from 'vue-router';

const routerHistory = createWebHistory(process.env.BASE_URL);

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: () => import('./routes/Home.vue'),
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('./routes/Page404.vue'),
    },
  ],
});

export { router };