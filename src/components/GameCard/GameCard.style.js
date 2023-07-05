import {StyleSheet} from 'react-native';
import {colors, fonts, sizes} from '../../constants/Constants';

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: sizes.height * 0.25,
    borderRadius: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: sizes.base,
  },
  title: {
    fontFamily: fonts.subtitle2.fontFamily,
    fontSize: sizes.subtitle2,
    fontWeight: 'bold',
    lineHeight: fonts.subtitle2.lineHeight,
    letterSpacing: fonts.subtitle2.letterSpacing,
    color: colors.secondary,
  },
  releaseDate: {
    fontFamily: fonts.subtitle2.fontFamily,
    fontSize: sizes.subtitle2,
    fontWeight: 'bold',
    lineHeight: fonts.subtitle2.lineHeight,
    letterSpacing: fonts.subtitle2.letterSpacing,
    color: colors.secondary,
  },
  description: {
    fontFamily: fonts.body2.fontFamily,
    fontSize: sizes.body2,
    fontWeight: fonts.body2.fontWeight,
    lineHeight: fonts.body2.lineHeight,
    letterSpacing: fonts.body2.letterSpacing,
    color: colors.secondary,
  },

  platfrom: {
    fontFamily: fonts.body2.fontFamily,
    fontSize: sizes.body2,
    fontWeight: fonts.body2.fontWeight,
    lineHeight: fonts.body2.lineHeight,
    letterSpacing: fonts.body2.letterSpacing,
    color: colors.secondary,
  },
  genre: {
    fontFamily: fonts.body2.fontFamily,
    fontSize: sizes.body2,
    fontWeight: fonts.body2.fontWeight,
    lineHeight: fonts.body2.lineHeight,
    letterSpacing: fonts.body2.letterSpacing,
    color: colors.secondary,
  },
});

export default styles;
