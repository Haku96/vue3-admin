/// vue ecosystem package
import { createApp } from "vue";
import { createPinia } from "pinia";

/// some UI libs and utils libs
import Antd from "ant-design-vue";

/// import style files
import "./global.less";
import "ant-design-vue/dist/antd.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(Antd);
app.use(createPinia());

app.mount("#app");
