const routes = [
  {
    path: "/",
    name: "home",
    // lazy load, so we do not need to import components
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
  },

  // * this could redirect to home page when you input unregistered
  // route but this could not redirect when you input a registry route
  // without a component, this scene will be happen extremely low
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/home/index.vue"),
  },
];

export default routes;
