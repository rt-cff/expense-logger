<template>
  <Container>
    <template v-slot:header-content>
      <span>Summary</span>
    </template>
  </Container>
</template>

<script>
import Container from '../components/the-container.vue'

export default {
  name: 'SummaryPage',
  functional: true,
  components: {
    Container
  }
}
</script>

<style>

</style>
