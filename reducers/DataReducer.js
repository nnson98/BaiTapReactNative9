import {
  GET_DATA_AIL,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from '../actions/DataActions';

const initialState = {fetching: false, data: null, err: null};

export const getData = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };
    case GET_DATA_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };
    case GET_DATA_AIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
    default:
      return state;
  }
};
