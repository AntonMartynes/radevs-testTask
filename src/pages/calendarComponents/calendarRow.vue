<template>
  <div class="timeline__row">
    <div class="timeline__name">
      {{ rowData?.title }}
    </div>
    <div class="timeline__main">
      <base-button v-for="({ name, start, end, id }, index) in rowData.data" :key="index" class="timeline__btn" :style="{
        width: `calc(var(--cell-width) * ${getBookingPeriod(start, end) || 1})`,
        left: `calc(var(--cell-width) * ${getBookingOffset(start)})`
      }" variant="secondary" @click="$emit('show-info', id)">
        {{ name }}
      </base-button>
      <div class="timeline__cell" v-for="item in 7" :key="item" />
    </div>
  </div>
</template>

<script>
import baseButton from '../../components/buttons/baseButton.vue';
import moment from 'moment';
import { mapState } from 'vuex';

export default {
  name: 'calendarRow',
  components: {
    baseButton,
  },
  props: {
    rowData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState('calendarNav', [
      'currentWeek',
    ]),
  },
  methods: {
    getBookingPeriod(start, end) {
      const startDate = moment(start);
      const endDate = moment(end);
      return endDate?.diff(startDate, 'days');
    },

    getBookingOffset(start) {
      const startDate = moment(start);
      const currentWeek = moment(this.currentWeek);

      return startDate?.diff(currentWeek, 'days');
    },
  },
};
</script>

<style
  lang="scss"
  scoped
>
.timeline {
  &__main {
    position: relative;
    height: var(--space-extra-big);
    display: grid;
    grid-template-columns: var(--week-grid);
    overflow: hidden;
  }

  &__row {
    display: grid;
    grid-template-columns: var(--left-space) 1fr;
    border: var(--border);
  }

  &__name {
    display: flex;
    align-items: center;
    padding-left: var(--space-big);
    color: #91BE7F;
  }

  &__cell {
    border-left: var(--border);
  }

  &__btn {
    position: absolute;
    top: 15%;
    margin-left: calc(var(--cell-width) / 2);
  }
}
</style>