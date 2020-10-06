import { ref, computed, watch } from 'vue';

export default function useTouchX(leftAction, rightAction) {
  const xStart = ref(0), xEnd = ref(0)
  const diff = computed(() => {
    if(xStart.value > 0 && xEnd.value > 0)
      return xEnd.value - xStart.value
    return 0
  })

  const onTouchStart = function(e) {
    xStart.value = e.touches[0].pageX
    xEnd.value = 0
  }

  const onTouchEnd = function(e) {
    xEnd.value = e.changedTouches[0].pageX
  }

  watch(
    diff,
    diff => {
      if(diff === 0)
        return

      if(diff > 0)
        leftAction()
      else
        rightAction()
    }
  )

  return {
    onTouchStart,
    onTouchEnd,
  }
}
