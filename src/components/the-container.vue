<template>
<div class="container">
  <div class="content-container">
    <Header :toggleDrawer="toggleDrawer">
      <template v-if="hasHeaderContentSlot()" v-slot:header-content>
        <slot name="header-content">
        </slot>
      </template>
      <template v-slot:header-extra>
        <slot name="header-extra" />
      </template>
    </Header>
    <Content :shiftDate="shiftDate"/>
    <Footer />
  </div>
  <Drawer v-if="state.showDrawer" :toggleDrawer="toggleDrawer"/>
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
  setup(props, { slots }) {
    const { state, toggleDrawer, shiftDate } = useState()

    provide('date', toRef(state, 'date'))
    
    const hasHeaderContentSlot = () => {
      return !!slots['header-content']
    }

    return {
      state,
      toggleDrawer,
      shiftDate,
      hasHeaderContentSlot,
    }
  },
}
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
