import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/styles/index.scss";
import App from "./App.vue";

const app = createApp(App);
const store = createPinia();
app.use(createPinia());
app.use(store);
app.mount("#app");
