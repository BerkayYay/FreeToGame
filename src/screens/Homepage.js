import {View, Text} from 'react-native';
import React from 'react';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import {sizes} from '../constants/Constants';
import FlashMessage from 'react-native-flash-message';

const Homepage = () => {
  return (
    <View style={{flex: 1}}>
      <Header title="GameHub" />
      <Body />
      <FlashMessage position="top" statusBarHeight={sizes.height * 0.05} />
    </View>
  );
};

export default Homepage;
