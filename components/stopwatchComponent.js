import React from 'react';
import { connect } from 'react-redux';
import { startStopwatch, stopStopwatch } from '../actions/stopwatchActions';

function StopwatchComponent({ isRunning, timeElapsed, startStopwatch, stopStopwatch }) {
  return (
    <div>
      <div>{isRunning ? 'Running' : 'Stopped'}</div>
      <div>Time Elapsed: {timeElapsed}</div>
      <button onClick={isRunning ? stopStopwatch : startStopwatch}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isRunning: state.stopwatch.isRunning,
  timeElapsed: state.stopwatch.timeElapsed
});

const mapDispatchToProps = {
  startStopwatch,
  stopStopwatch
};

export default connect(mapStateToProps, mapDispatchToProps)(StopwatchComponent);
