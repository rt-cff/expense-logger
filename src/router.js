import { createWebHashHistory, createRouter } from "vue-router";
import ExpensePage from './pages/expense.vue'
import IncomePage from './pages/income.vue'
import SummaryPage from './pages/summary.vue'
import SettingPage from './pages/setting.vue'
import SettingDetailsPage from './pages/setting-details.vue'

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
    path: '/setting', 
    name: 'setting',
    component: SettingPage
  },
  {
    path: '/setting/:id',
    name: 'setting-details',
    component: SettingDetailsPage,
    props: true,
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
