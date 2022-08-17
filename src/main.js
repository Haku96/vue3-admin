/// vue ecosystem package
import { createApp } from "vue";
import router from "./router";
import pinia from "./stores";

/// import style files
import "./global.less";

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

app.mount("#app");

/// vue project entry file, all code will run first while we execute
