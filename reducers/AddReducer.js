import {ADD_DATA} from '../actions/DataActions';

export const addReducers = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.newData];
    default:
      return state;
  }
};
