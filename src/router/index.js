import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import routes from "./routes";

// config NProgress，cancel spinner
NProgress.configure({ showSpinner: false });

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/// use async we can skip router.afterEach, it's much simple
router.beforeEach(async (_to, _from, next) => {
  NProgress.start();
  await next();
  NProgress.done();
});

export default router;
