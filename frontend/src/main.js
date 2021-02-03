import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount("#app");

// new Vue({
//     router,
//     store,
//     vuetify,
//     render: h => h(App)
// }).$mount("#app");
