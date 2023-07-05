import {StyleSheet} from 'react-native';
import {fonts, sizes} from '../../constants/Constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
