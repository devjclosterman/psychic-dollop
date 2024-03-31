// contains reducer functions
import { START_STOPWATCH, STOP_STOPWATCH } from '../actions/actionTypes';

const initialState = {
  isRunning: false,
  timeElapsed: 0
};

const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_STOPWATCH:
      return {
        ...state,
        isRunning: true
      };
    case STOP_STOPWATCH:
      return {
        ...state,
        isRunning: false
      };
    default:
      return state;
  }
};

export default stopwatchReducer;
