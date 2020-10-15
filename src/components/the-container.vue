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
    <Content 
      :onTouchStart="onTouchStart"
      :onTouchEnd="onTouchEnd"
    >
      <template v-slot:content>
        <slot name="content" />
      </template>
    </Content>
    <Footer v-if="hasFooter"/>
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
    onTouchStart: Function,
    onTouchEnd: Function,
    hasFooter: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const showDrawer = ref(false)

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
