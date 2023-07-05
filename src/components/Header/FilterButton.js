import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './FilterButton.style';

const FilterButton = ({onPress, buttonText, isSelected}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        isSelected ? styles.selectedButton : null,
      ]}
      onPress={onPress}>
      <Text style={styles.modalButton}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default FilterButton;
