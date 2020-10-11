import { createWebHashHistory, createRouter } from "vue-router";
import ExpensePage from './pages/expense.vue'

const routes = [
  {
    path: '/', 
    component: ExpensePage
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
