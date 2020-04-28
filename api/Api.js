import axios from 'axios';
export const api = axios
  .get('https://private-133eb-fakeapi9.apiary-mock.com/demo')
  .then(function(response) {
    return response.data;
    //console.log(response.data);
  })
  .catch(function(err) {
    console.log(err);
  });
export const getData = () => {
  return api;
};
