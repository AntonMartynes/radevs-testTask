<template>
  <div class="timeline">
    <calendar-nav @prev="prevWeek" @next="nextWeek" @today="presentWeek" />
    <calendar-header :items="week" />
    <div class="timeline__body">
      <calendar-row v-for="(item, index) in bookingFormatData" :key="index" :row-data="item" @show-info="showUserInfo" />
    </div>
    <calendar-modal v-model="showUserModal" :item="userInfo" @onClose="resetUserInfo" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import calendarHeader from './calendarComponents/calendarHeader.vue';
import calendarModal from './calendarComponents/calendarModal.vue';
import calendarNav from './calendarComponents/calendarNav.vue';
import calendarRow from './calendarComponents/calendarRow.vue';

export default {
  name: 'theCalendar',
  components: {
    calendarHeader,
    calendarModal,
    calendarNav,
    calendarRow,
  },
  async created() {
    this.setCurrentWeek(this.startOfCurrentWeek);
    await this.fetch();
  },
  data() {
    return {
      userInfo: null,
      showUserModal: false,
    };
  },
  computed: {
    ...mapState('fetchCalendar', [
      'bookingList',
    ]),
    ...mapState('calendarNav', [
      'currentWeek',
      'week',
      'startOfCurrentWeek',
    ]),
    bookingRangeList() {
      if (!this.bookingList || this.bookingList.length === 0) {
        return [];
      }

      return this.bookingList.filter((item) => this.week.includes(item?.start)
        || this.week.includes(item?.end));
    },
    hotelsList() {
      if (!this.bookingList || this.bookingList.length === 0) {
        return [];
      }

      return [...new Set(this.bookingList.map((item) => item?.roomDetails?.name))];
    },
    bookingFormatData() {
      return this.hotelsList.map((item) => ({
        title: item,
        data: this.bookingRangeList.filter((el) => el?.roomDetails?.name === item),
      })).sort((a, b) => a.title.localeCompare(b.title));
    },
  },
  methods: {
    ...mapActions('calendarNav', [
      'setCurrentWeek',
      'prevWeek',
      'nextWeek',
      'presentWeek',
    ]),
    ...mapActions('fetchCalendar', [
      'fetch',
    ]),
    showUserInfo(id) {
      this.userInfo = this.bookingRangeList.find((item) => item.id === id);
      this.showUserModal = true;
    },
    resetUserInfo() {
      this.userInfo = null;
    },
  },
};
</script>

<style
  lang="scss"
  scoped
>
.timeline {
  --cell-width: calc(100% / 7);
  --left-space: 200px;
  --week-grid: repeat(7, 1fr);
}
</style>