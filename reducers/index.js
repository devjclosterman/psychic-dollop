import { combineReducers } from 'redux';
import stopwatchReducer from '/reducers';

const rootReducer = combineReducers({
    stopwatch: stopwatchReducer
    //add other reducers here 
});

export default rootReducer;