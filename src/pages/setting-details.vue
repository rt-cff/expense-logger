<template>
  <Container>
    <template v-slot:header-menu-icon>
      <ChevronLeftIcon @click="$router.back()"/>
    </template>
    <template v-slot:header-content>
      <span>{{item.label}}</span>
    </template>
    <template v-slot:content>
      <component :is="item.component" />
    </template>
  </Container>
</template>

<script>
import { SettingsItemsList } from '../config/settings-items-list'
import ChevronLeftIcon from '../icons/chevron-left.vue'
import Container from '../components/the-container.vue'
import SettingDetailsCategory from '../pages/setting-details-category.vue'

export default {
  name: 'SettingDetails',
  components: {
    Container,
    SettingDetailsCategory,
    ChevronLeftIcon,
  },
  props: {
    id: String,
  },
  setup({ id }) {
    const item = SettingsItemsList.find(l => l.id === id)

    return {
      item
    }
  }
}
</script>

<style scoped>

</style>
