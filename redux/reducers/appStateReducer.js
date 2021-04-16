import { SET_LOADING } from '../types';

const INITIAL_STATE = {
  loading: true,
};

const appStateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appStateReducer;
