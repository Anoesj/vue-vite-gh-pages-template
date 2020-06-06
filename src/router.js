import { createRouter, createWebHistory } from 'vue-router';

console.log(
  `BASE_URL: ${process.env.BASE_URL}\n` +
  `location.pathname: ${location.pathname}`
);

const routerHistory = createWebHistory(process.env.BASE_URL);

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: () => import('./routes/Home.vue'),
    },
    {
      path: '/contact',
      component: () => import('./routes/Contact.vue'),
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('./routes/Page404.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (from.path === to.path) {
    debugger;
  }

  console.log(`%c${from ? from.path + ' ' : ''}→ ${to.path}`, 'background-color: #dee5ec; color: LightSlateGrey; padding: 2px 6px; border-radius: 3px;');
  next();
})

export { router };