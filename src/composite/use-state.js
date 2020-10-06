import { reactive, onMounted, onUnmounted } from 'vue';

export default function useState() {
  const state = reactive({
    showDrawer: false,
    date: new Date(),
  })

  const toggleDrawer = () => {
    state.showDrawer = !state.showDrawer
  }

  // true for tmr, false for ytd
  const shiftDate = (dir) => {
    const newDate = new Date(state.date)

    if(dir === true)
      newDate.setHours(24)
    if(dir === false)
      newDate.setHours(-24)

    state.date = newDate
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
    shiftDate,
  }
}
