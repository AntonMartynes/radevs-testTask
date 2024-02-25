<template>
  <div id="app">
    <base-container>
      <the-calendar />
    </base-container>
  </div>
</template>

<script>
import TheCalendar from './pages/TheCalendar.vue';
import baseContainer from './components/container/baseContainer.vue';

export default {
  name: 'App',
  components: {
    TheCalendar,
    baseContainer,
  },

  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style lang="scss"></style>