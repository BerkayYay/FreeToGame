import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from './src/components/Header/Header';
import Main from './src/components/Body/Body';
import Homepage from './src/screens/Homepage';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
};

export default App;
