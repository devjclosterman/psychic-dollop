// actionTypes.js
export const START_STOPWATCH = 'START_STOPWATCH';
export const STOP_STOPWATCH = 'STOP_STOPWATCH';

// stopwatchActions.js
import { START_STOPWATCH, STOP_STOPWATCH } from './actionTypes';

export const startStopwatch = () => ({
  type: START_STOPWATCH
});

export const stopStopwatch = () => ({
  type: STOP_STOPWATCH
});
