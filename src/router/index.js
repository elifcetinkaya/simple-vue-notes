import Vue from 'vue'
import Router from 'vue-router'
import AddNote from "../components/AddNote.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: AddNote
    }
  ]
})