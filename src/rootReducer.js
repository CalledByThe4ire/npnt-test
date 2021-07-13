import { combineReducers } from 'redux';
import sliderReducer from '././store/slider/slider.slice';

const rootReducer = combineReducers({
  slider: sliderReducer,
});

export default rootReducer;
