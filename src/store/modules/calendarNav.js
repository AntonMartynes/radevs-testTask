import moment from 'moment';

const SET_CURRENT_WEEK = 'SET_CURRENT_WEEK';
const DATE_FORMAT = 'YYYY-MM-DD';

const generateWeekArray = (date) =>
  Array.from({ length: 7 }, (_, i) =>
    moment(date).add(i, 'days').format(DATE_FORMAT)
  );

const state = {
  today: moment().format(DATE_FORMAT),
  startOfCurrentWeek: moment().startOf('week').format(DATE_FORMAT),
  currentWeek: '',
  week: Array.from({ length: 7 }, () => ''),
};

const getters = {};

const mutations = {
  [SET_CURRENT_WEEK]: (state, date) => {
    state.week = generateWeekArray(date);
    state.currentWeek = date;
  },
};

const actions = {
  setCurrentWeek({ commit }, date) {
    commit(SET_CURRENT_WEEK, date);
  },

  prevWeek({ state, dispatch }) {
    const prevWeekStart = moment(state.currentWeek, DATE_FORMAT)
      .subtract(1, 'week')
      .startOf('week')
      .format(DATE_FORMAT);
    dispatch('setCurrentWeek', prevWeekStart);
  },

  nextWeek({ state, dispatch }) {
    const nextWeekStart = moment(state.currentWeek, DATE_FORMAT)
      .add(1, 'week')
      .startOf('week')
      .format(DATE_FORMAT);
    dispatch('setCurrentWeek', nextWeekStart);
  },

  presentWeek({ state, dispatch }) {
    dispatch('setCurrentWeek', state.startOfCurrentWeek);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
