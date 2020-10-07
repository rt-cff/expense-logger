<template>
  <div class="drawer-container" @click="toggleDrawer">
    <div class="drawer-content" @click.stop="">
      <div><shopping-cart-icon />Expense</div>
      <div><dollar-sign-icon />Income</div>
      <div><bar-chart-2-icon />Summary</div>
      <div><settings-icon />Setting</div>
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
</style>
