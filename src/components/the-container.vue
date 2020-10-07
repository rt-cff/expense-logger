<template>
<div class="container">
  <div class="content-container">
    <Header :toggleDrawer="toggleDrawer"/>
    <Content :shiftDate="shiftDate"/>
    <Footer />
  </div>
  <Drawer v-if="state.showDrawer"/>
</div>
</template>

<script>
import { computed, provide, toRef } from 'vue'
import useState from '../composite/use-state'
import Header from './the-header.vue'
import Content from './the-content.vue'
import Drawer from './the-drawer.vue'
import Footer from './the-footer.vue'

export default {
  name: 'Container',
  components: {
    Header,
    Content,
    Drawer,
    Footer
  },
  setup() {
    const { state, toggleDrawer, shiftDate } = useState()

    provide('date', toRef(state, 'date'))
    //provide('shiftDate', shiftDate)

    return {
      state,
      toggleDrawer,
      shiftDate,
    }
  }
}
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
