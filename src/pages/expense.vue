<template>
  <Container>
    <template v-slot:header-extra>
      <span>Header Extra</span>
    </template>
  </Container>
</template>

<script>
import { inject } from 'vue'
import Container from '../components/the-container.vue'
import Content from '../components/the-content.vue'

export default {
  name: 'ExpensePage',
  components: {
    Container,
    Content,
  }, 
  setup() {
    const shiftDate = inject('shiftDate')

    return {
      shiftDate,
    }
  }
}
</script>

<style>

</style>
