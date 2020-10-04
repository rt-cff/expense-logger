<template>
  <div class="header">
    <menu-icon />
  </div>
</template>

<script>
import MenuIcon from '../icons/menu.vue';

export default {
  name: 'Header',
  components: {
    MenuIcon,
  },
  setup() {
  }
}
</script>

<style scoped>
.header {
  height: 2em;
  background: #806d6d;
  color: white;
  padding: 0.5em 1em;
}
</style>
