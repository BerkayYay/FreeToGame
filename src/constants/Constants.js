// this js file contains all the constants used in the application
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const colors = {
  primary: '#507DBC',
  secondary: '#000',
  tertiary: '#857885',
  neutral: '#FFFFFF',
  info: '#6B9EFF',
  success: '#4AD747',
  warning: '#FFCC48',
  danger: '#F66464',
  dark: '#252525',
  disable: '#BBBBBB',
};

const sizes = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  // font sizes
  h1: 64,
  h2: 48,
  h3: 32,
  subtitle1: 24,
  subtitle2: 20,
  subtitle3: 16,
  body1: 16,
  body2: 14,
  body3: 13,
  body4: 10,
  button: 16,
  button2: 13,
  // app dimensions
  width,
  height,
};

const fonts = {
  h1: {
    fontFamily: 'Comfortaa-Medium',
    fontWeight: '500',
    lineHeight: 0,
    letterSpacing: 0,
  },
  h2: {
    fontFamily: 'Comfortaa-Bold',
    fontWeight: 'bold',
    lineHeight: 0,
    letterSpacing: 0,
  },
  h3: {
    fontFamily: 'Comfortaa-Bold',
    fontWeight: 'bold',
    lineHeight: 0,
    letterSpacing: 0,
  },
  subtitle1: {
    fontFamily: 'Comfortaa-Medium',
    fontWeight: '500',
    lineHeight: 0,
    letterSpacing: 0,
  },
  subtitle2: {
    fontFamily: 'Comfortaa-Medium',
    fontWeight: '500',
    lineHeight: 0,
    letterSpacing: 0,
  },
  subtitle3: {
    fontFamily: 'Comfortaa-Bold',
    fontWeight: 'bold',
    lineHeight: 0,
    letterSpacing: 0,
  },
  body1: {
    fontFamily: 'Comfortaa-Regular',
    fontWeight: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
  },
  body2: {
    fontFamily: 'Comfortaa-Regular',
    fontWeight: 'normal',
    lineHeight: 18,
    letterSpacing: 0,
  },
  body3: {
    fontFamily: 'Comfortaa-Regular',
    fontWeight: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
  },
  body4: {
    fontFamily: 'Comfortaa-Regular',
    fontWeight: 'normal',
    lineHeight: 18,
    letterSpacing: 0,
  },
  button: {
    fontFamily: 'Comfortaa-Bold',
    fontWeight: 'bold',
    lineHeight: 0,
    letterSpacing: 0,
  },
  button2: {
    fontFamily: 'Comfortaa-Bold',
    fontWeight: 'bold',
    lineHeight: 0,
    letterSpacing: 0,
  },
};
export {colors, sizes, fonts};
