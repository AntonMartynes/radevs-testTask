<template>
  <header class="timeline__header">
    <div class="timeline__days">
      <div class="timeline__day" :class="{
        'timeline__day--active': item === today
      }" v-for="(item, index) in items" :key="index">
        {{ item }}
        <div class="timeline__day__separator"></div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'calendarHeader',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState('calendarNav', [
      'today',
    ]),
  },
};
</script>

<style
  lang="scss"
  scoped
>
@import '../../styles/mixins';

.timeline {
  &__header {
    margin-left: var(--left-space);
    border: var(--border);
    border-bottom: none;
  }

  &__days {
    display: grid;
    grid-template-columns: var(--week-grid);
  }

  &__day {
    @include center;
    display: flex;
    flex-direction: column;
    border-left: var(--border);
    height: var(--space-extra-big);
    color: var(--color-black);

    &__separator {
      content: '';
      width: 100%;
      height: 10%;
      border-bottom: var(--border);
    }

    &--active {
      background-color: var(--color-info);
    }
  }
}
</style>