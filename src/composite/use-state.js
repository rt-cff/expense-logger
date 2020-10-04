import { reactive, onMounted, onUnmounted } from 'vue';

export default function useState() {
  const state = reactive({
    showDrawer: false,
    date: new Date(),
  })

  const toggleDrawer = () => {
    state.showDrawer = !state.showDrawer
  }

  onMounted(() => {
    console.log('mounted')
  })

  onUnmounted(() => {
    console.log('un-mounted')
  })

  return {
    state,
    toggleDrawer,
  }
}
