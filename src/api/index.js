import { axiosRequest } from '../axios';

export const getListOfBookings = async () => {
  const { data } = await axiosRequest.get('/bookings');

  return data;
};
