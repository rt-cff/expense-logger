import { createWebHashHistory, createRouter } from "vue-router";
import ExpensePage from './pages/expense.vue'
import IncomePage from './pages/income.vue'
import SummaryPage from './pages/summary.vue'
import SettingsPage from './pages/settings.vue'

const routes = [
  {
    path: '/expense', 
    name: 'expense',
    alias: '/',
    component: ExpensePage
  },
  {
    path: '/income', 
    name: 'income',
    component: IncomePage
  },
  {
    path: '/summary', 
    name: 'summary',
    component: SummaryPage
  },
  {
    path: '/settings', 
    name: 'settings',
    component: SettingsPage
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
