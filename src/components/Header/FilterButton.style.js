import {StyleSheet} from 'react-native';
import {colors, fonts, sizes} from '../../constants/Constants';

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 5,
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: sizes.width * 0.3,
    height: sizes.height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    color: colors.neutral,
    fontFamily: fonts.h3.fontFamily,
    fontSize: sizes.subtitle3,
    fontWeight: fonts.h3.fontWeight,
    lineHeight: fonts.h3.lineHeight,
    letterSpacing: fonts.h3.letterSpacing,
    textAlign: 'center',
  },
  selectedButton: {
    backgroundColor: colors.success,
  },
});

export default styles;
