<template>
  <Container>
    <template v-slot:header-content>
      <span>Settings</span>
    </template>
    <template v-slot:content>
      Some Content in Settings
    </template>
  </Container>
</template>

<script>
import Container from '../components/the-container.vue'

export default {
  name: 'SummaryPage',
  components: {
    Container,
  },
  setup() {
    return {
    }
  }
}
</script>

<style>

</style>
