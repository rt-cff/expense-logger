<template>
  <Container
    :onTouchStart="onTouchStart"
    :onTouchEnd="onTouchEnd"
    hasFooter="true"
  >
    <template v-slot:header-extra>
      <span>Header Extra</span>
    </template>
    <template v-slot:content>
      Some Content in Income
    </template>
  </Container>
</template>

<script>
import { inject } from 'vue'
import useTouchX from '../composite/use-touch-x'
import Container from '../components/the-container.vue'

export default {
  name: 'IncomePage',
  components: {
    Container,
  },
  setup() {
    const shiftDate = inject('shiftDate')
    const { onTouchStart, onTouchEnd } = useTouchX(() => shiftDate(false), () => shiftDate(true))

    return {
      onTouchStart,
      onTouchEnd,
    }
  }
}
</script>

<style>

</style>
