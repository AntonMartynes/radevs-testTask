import { getListOfBookings } from '../../api';

const state = {
  bookingList: null,
};

const actions = {
  async fetch({ state }) {
    if (!state.bookingList) {
      state.bookingList = await getListOfBookings();
    }

    return state.bookingList;
  },
};

export default {
  namespaced: true,
  state,
  actions,
};
