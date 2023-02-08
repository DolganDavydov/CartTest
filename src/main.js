import Vue from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import store from "@/store";
import components from "@/components/iu";

Vue.config.productionTip = false;

const app = Vue;

components.forEach((component) => {
  app.component(component.name, component);
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
