<template>
  <div class="header">
    <menu-icon class="menu-icon" @click="toggleDrawer"/>
    <div class="header-content">
      <slot name="header-content">
        <div class="date">{{date}}</div>
      </slot>
    </div>
    <div class="header-extra">
      <slot name="header-extra">ccc</slot>
    </div>
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
  padding: 0.5em 0.5em;
  text-align: unset;
  display: flex;
  justify-content: start;
  align-items: center;
}

.header-content {
  flex-grow:  1;
  padding: 0px 10px;
  display: flex;
}

.header-extra {
  display: flex;
}
</style>
