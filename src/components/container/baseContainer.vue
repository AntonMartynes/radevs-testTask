<template functional>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'baseContainer',
};
</script>

<style
  lang="scss"
  scoped
>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-medium);
}
</style>