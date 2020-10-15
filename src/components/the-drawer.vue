<template>
  <div class="drawer-container" @click="toggleDrawer">
    <div class="drawer-content" @click.stop="">
      <router-link :to="{ name: 'expense' }"  custom v-slot="{ navigate, isActive, isExactActive }">
        <div 
          :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
          @click="navigate" 
          @keypress.enter="navigate" 
          role="link"
        >
          <shopping-cart-icon />
          Expense
        </div>
      </router-link>
      <router-link :to="{ name: 'income' }"  custom v-slot="{ navigate, isActive, isExactActive }">
        <div 
          :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
          @click="navigate" 
          @keypress.enter="navigate" 
          role="link"
        >
          <dollar-sign-icon />
          Income
        </div>
      </router-link>
      <router-link :to="{ name: 'summary' }"  custom v-slot="{ navigate, isActive, isExactActive }">
        <div 
          :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
          @click="navigate" 
          @keypress.enter="navigate" 
          role="link"
        >
          <bar-chart-2-icon />
          Summary
        </div>
      </router-link>
      <router-link :to="{ name: 'setting' }"  custom v-slot="{ navigate, isActive, isExactActive }">
        <div 
          :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
          @click="navigate" 
          @keypress.enter="navigate" 
          role="link"
        >
          <settings-icon />
          Setting
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import DollarSignIcon from '../icons/dollar-sign.vue'
import ShoppingCartIcon from '../icons/shopping-cart.vue'
import BarChart2Icon from '../icons/bar-chart-2.vue'
import SettingsIcon from '../icons/settings.vue'

export default {
  name: 'Drawer',
  components: {
    DollarSignIcon,
    ShoppingCartIcon,
    BarChart2Icon,
    SettingsIcon,
  },
  props: {
    toggleDrawer: Function
  },
  setup() {

  }
}
</script>

<style scoped>
.drawer-container {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  margin-top: 2em;
}

.drawer-content {
  z-index: 999;
  width: 60vw;
  height: 100vh;
  background: lightyellow;
}

.drawer-content > * {
  height: 3em;
  padding: 1em;
  text-align: left;
  border-bottom: 0.5px solid lightgrey;
}

.drawer-content svg {
  height: 1em;
  width: 1em;
  margin-right: 7px;
}

div.router-link-active, div.router-link-exact-active {
  background: lightblue;
}
</style>
