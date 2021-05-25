import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor, recepiesActions } from './src/store';
import AppScreen from './src/screens/AppScreen';

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppScreen />
      </PersistGate>
    </Provider>
  );
};

export default (App);
