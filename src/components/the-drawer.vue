<template>
  <div class="drawer-container" @click="toggleDrawer">
    <div class="drawer-content" @click.stop="">
      Drawer
    </div>
  </div>
</template>

<script>

export default {
  name: 'Drawer',
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
</style>
