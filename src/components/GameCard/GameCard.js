import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './GameCard.style';

const GameCard = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{uri: item.thumbnail}} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.releaseDate}>{item.release_date}</Text>
      </View>
      <Text style={styles.description}>{item.short_description}</Text>
      <Text style={styles.platfrom}>{item.platform}</Text>
      <Text style={styles.genre}>{item.genre}</Text>
    </View>
  );
};

export default GameCard;
