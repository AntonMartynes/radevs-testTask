<template>
  <base-modal v-model="localValue" :title="item?.name" class="timeline__modal" @onClose="onCloseModal">
    <ul class="timeline-contacts">
      <li v-if="item?.phone" class="timeline-contacts__item">
        <a :href="`tel:${item?.phone}`" class="timeline-contacts__link">
          {{ item?.phone }}
        </a>
      </li>
      <li v-if="item?.email" class="timeline-contacts__item">
        <a :href="`mailto:${item?.email}`" class="timeline-contacts__link">
          {{ item?.email }}
        </a>
      </li>
    </ul>
    <ul class="timeline-contacts">
      <li v-if="item?.typeOfApartments" class="timeline-contacts__item timeline-contacts__item--room">
        {{ item?.typeOfApartments }}
      </li>
      <li class="timeline-contacts__item">
        <strong>Number of guests</strong>
      </li>
      <li v-if="item?.guestInfo?.adults" class="timeline-contacts__item">
        Adults: {{ item?.guestInfo?.adults }}
      </li>
      <li class="timeline-contacts__item">
        Children: {{ item?.guestInfo?.children }}
      </li>
    </ul>
  </base-modal>
</template>

<script>
import baseModal from '../../components/modals/baseModal.vue';

export default {
  name: 'calendarModal',
  components: {
    baseModal
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    onCloseModal(type) {
      this.$emit('onClose', type);
    },
  },
};
</script>

<style
  lang="scss"
  scoped
>
@import '../../styles/mixins';

.timeline-contacts {
  @include list-reset();

  &:not(:last-of-type) {
    margin-bottom: var(--space-big);
  }

  &__link {
    color: var(--color-primary);
    text-decoration: none;
  }

  &__item {
    color: var(--color-primary);

    &--room {
      padding-bottom: var(--space-small);
    }
  }
}
</style>