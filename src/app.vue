<template>
  <router-view />
</template>

<script>
import useState from './composite/use-state'
import { provide, toRef } from 'vue'

export default {
  name: 'App',
  components: {
  },
  setup() {
    const { state, shiftDate } = useState()

    provide('date', toRef(state, 'date'))
    provide('shiftDate', shiftDate)
    
    return {
    }
  }
}
</script>
