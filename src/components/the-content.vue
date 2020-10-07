<template>
  <div class="content" 
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div>
      Content
    </div>
  </div>
</template>

<script>
import { computed, inject } from 'vue'
import useState from '../composite/use-state'
import useTouchX from '../composite/use-touch-x'

export default {
  name: 'Content',
  props: {
    shiftDate: Function,
  },
  setup({ shiftDate }) {
    const { onTouchStart, onTouchEnd } = useTouchX(() => shiftDate(false), () => shiftDate(true))
    
    return {
      onTouchStart, 
      onTouchEnd,
    }
  },
}
</script>

<style scoped>
.content {
  height: -webkit-fill-available;
  background: #eb835e;
  color: white;
  padding: 1em 2em;
}
</style>
