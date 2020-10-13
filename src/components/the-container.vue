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
    <Content :shiftDate="shiftDate" />
    <Footer />
  </div>
  <Drawer v-if="showDrawer" :toggleDrawer="toggleDrawer"/>
</div>
</template>

<script>
import { ref, inject } from 'vue'
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
  props: {
  },
  setup(props, { slots }) {
    const showDrawer = ref(false)
    const shiftDate = inject('shiftDate')

    const toggleDrawer = () => {
      showDrawer.value = !showDrawer.value
    }

    const hasHeaderContentSlot = () => {
      return !!slots['header-content']
    }

    return {
      hasHeaderContentSlot,
      showDrawer,
      toggleDrawer,
      shiftDate,
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
