import {StyleSheet} from 'react-native';
import {fonts, sizes, colors} from '../../constants/Constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.neutral,
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: fonts.h3.fontFamily,
    fontSize: sizes.h3,
    fontWeight: fonts.h3.fontWeight,
    lineHeight: fonts.h3.lineHeight,
    letterSpacing: fonts.h3.letterSpacing,
    textAlign: 'center',
    color: colors.primary,
  },
  filterContainer: {
    padding: 10,
    margin: 5,
    width: sizes.width * 0.2,
  },
  filterTitleText: {
    fontFamily: fonts.subtitle3.fontFamily,
    fontSize: sizes.subtitle3,
    fontWeight: fonts.subtitle3.fontWeight,
    lineHeight: fonts.subtitle3.lineHeight,
    letterSpacing: fonts.subtitle3.letterSpacing,
    textAlign: 'center',
    color: colors.tertiary,
    width: sizes.width * 0.3,
  },
  closeFilterButton: {
    width: sizes.width * 0.1,
    height: sizes.height * 0.05,
    backgroundColor: colors.neutral,
    justifyContent: 'center',
    marginRight: sizes.width * 0.05,
    top: 0,
  },
  applyFilterButton: {
    width: sizes.width * 0.2,
    height: sizes.height * 0.06,
    backgroundColor: colors.success,
    borderRadius: 10,
    paddingTop: 5,
  },
  clearFilterButton: {
    width: sizes.width * 0.2,
    height: sizes.height * 0.06,
    backgroundColor: colors.danger,
    borderRadius: 10,
  },
  filterButton: {
    color: colors.dark,
    fontFamily: fonts.button2.fontFamily,
    fontSize: sizes.button2,
    fontWeight: fonts.button2.fontWeight,
    lineHeight: fonts.button2.lineHeight,
    letterSpacing: fonts.button2.letterSpacing,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: colors.neutral,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    backgroundColor: colors.neutral,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '20%',
  },
  modalButton: {
    margin: 5,
    padding: 5,
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
});

export default styles;
