<template functional>
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" fill="none" class="chevron" :class="props.direction">
    <path stroke="currentColor" d="m.766.5 5 5 5-5" />
  </svg>
</template>

<script>
export default {
  name: 'baseIcon',
  props: {
    direction: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value);
      },
    },
  },
};
</script>

<style
  lang="scss"
>
.chevron {
  transform-origin: 50%;

  &.left {
    transform: rotate(90deg);
  }

  &.right {
    transform: rotate(270deg);
  }
}
</style>