import { SET_LOADING } from '../types';

export const setLoading = (state) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: state,
  });
};
