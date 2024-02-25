<template>
  <nav class="timeline__nav">
    <ul class="timeline__list">
      <li class="timeline__item">
        <base-button @click="$emit('prev')">
          <base-icon />
        </base-button>
      </li>
      <li class="timeline__item">
        <base-button @click="$emit('next')">
          <base-icon direction="right" />
        </base-button>
      </li>
      <li class="timeline__item">
        <base-button @click="$emit('today')">
          Today
        </base-button>
      </li>
    </ul>
  </nav>
</template>

<script>
import baseButton from '../../components/buttons/baseButton.vue';
import baseIcon from '../../components/icons/baseIcon.vue';

export default {
  name: 'calendarNav',
  components: {
    baseButton,
    baseIcon,
  },
};
</script>

<style
  lang="scss"
  scoped
>
@import '../../styles/mixins';

.timeline {
  &__nav {
    margin-bottom: var(--space-medium);
  }

  &__list {
    display: flex;
    gap: var(--space-medium);
    @include list-reset();
  }
}
</style>