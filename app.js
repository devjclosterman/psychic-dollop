import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import AppContainer from './containers/AppContainer'; // Replace with your root component

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
