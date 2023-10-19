import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import AddNote from "./components/AddNote.vue";
import MyNotes from "./components/MyNotes.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "AddNote",
      component: AddNote,
    },
    {
      path: "/my-notes",
      name: "MyNotes",
      component: MyNotes,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
