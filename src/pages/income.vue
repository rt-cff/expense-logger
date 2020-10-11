<template>
  <Container>
    <template v-slot:header-extra>
      <span>Header Extra</span>
    </template>
  </Container>
</template>

<script>
import Container from '../components/the-container.vue'

export default {
  name: 'IncomePage',
  functional: true,
  components: {
    Container
  }
}
</script>

<style>

</style>
