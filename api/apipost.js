import axios from 'axios';
export let api = axios.create({
  baseURL: 'https://private-133eb-fakeapi9.apiary-mock.com',
  timeout: 30000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const login = newData => {
  return api.post('/demo', {
    date: newData.date,
    checkinTime: newData.checkinTime,
  });
};
