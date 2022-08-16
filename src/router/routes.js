const routes = [
  {
    path: "/",
    redirect: "login",
  },
  {
    path: "/login",
    name: "login",
    // lazy load, so we do not need to import components
    component: () => import("@/views/login/index.vue"),
    meta: {
      requiresAuth: false,
    },
  },
];

export default routes;
