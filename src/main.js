/// vue ecosystem package
import { createApp } from "vue";
import router from "./router";
import pinia from "./stores";

/// some UI libs and utils libs
import Antd from "ant-design-vue";

/// import style files
import "./global.less";
import "ant-design-vue/dist/antd.css";

// comment below line, if you don't need mock
import "./mock";

// since we direct setting axios options, so we need to import this file to init axios
// once we create a true axios instance, this could be unnecessary, in simple project I
// recommend this solution, cause abstract a high level axios instance is high level skill
import "@/api/interceptor";

import App from "./App.vue";
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(Antd);

app.mount("#app");

/// vue project entry file, all code will run first while we execute
