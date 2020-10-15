<template>
  <div class="content" 
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <slot name="content"/>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    onTouchStart: {
      type: Function,
      default: () => {},
    },
    onTouchEnd: {
      type: Function,
      default: () => {},
    }
  },
}
</script>

<style>
  .content {
    height: -webkit-fill-available;
    background: #eb835e;
    color: white;
    padding: 1em 2em;
  }
</style>
