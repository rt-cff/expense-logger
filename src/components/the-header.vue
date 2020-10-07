<template>
  <div class="header">
    <menu-icon class="menu-icon" @click="toggleDrawer"/>
    <div class="date">{{date}}</div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import MenuIcon from '../icons/menu.vue'
import { format } from 'date-fns'

export default {
  name: 'Header',
  components: {
    MenuIcon,
  },
  props: {
    toggleDrawer: Function,
  },
  setup() {
    const dateObj = inject('date')
    const date = computed(() => format(dateObj.value, 'yyyy/MM/dd'))

    return {
      date,
    }
  },
}
</script>

<style scoped>
.header {
  height: 2em;
  background: #806d6d;
  color: white;
  padding: 0.5em 1em;
  text-align: unset;
  display: flex;
  justify-content: start;
  align-items: center;
}

.menu-icon {
  margin-left: -10px;
  margin-right: 10px;
}
</style>
