import { combineReducers } from 'redux';
import appStateReducer from './reducers/appStateReducer';

const rootReducer = combineReducers({
  appState: appStateReducer,
});

export default rootReducer;
