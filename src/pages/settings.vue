<template>
  <Container

  >
    <template v-slot:header-content>
      <span>Settings</span>
    </template>
    <template v-slot:content>
      <div class="item-list">
        <div 
          class="item"
          v-for="item in list"
          :key="item.type"
        >
          <component :is="item.icon"/> {{item.label}}
        </div>
      </div>
    </template>
  </Container>
</template>

<script>
import { SettingsItemsList } from '../config/settings-items-list'
import Container from '../components/the-container.vue'
import TagIcon from '../icons/tag.vue'

export default {
  name: 'SummaryPage',
  components: {
    Container,
    TagIcon,
  },
  setup() {
    return {
      list: SettingsItemsList
    }
  }
}
</script>

<style scoped>
  ::v-deep .content {
    background: lightyellow;
    color: lightslategrey;
    padding: 0px;
  }

  .item {
    text-align: left;
    padding: 15px 20px;
    border-bottom: 1px solid lightgrey;
  }

  .item svg {
    height: 1em;
    width: 1em;
    margin-right: 5px;
    vertical-align: text-bottom;
  }
</style>
