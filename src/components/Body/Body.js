import {View, Text, SafeAreaView, FlatList, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Body.style';
import {getAllGames, getFilteredGames} from '../../services/ApiServices';
import {showError} from '../../helper/helpers';
import GameCard from '../GameCard/GameCard';
import {useDispatch, useSelector} from 'react-redux';
import {setGames, setSelectedCategory} from '../../redux/gameSlice';

const Body = () => {
  const dispatch = useDispatch();
  const games = useSelector(state => state.game.games);
  const selectedCategory = useSelector(state => state.game.selectedCategory);
  const selectedPlatform = useSelector(state => state.game.selectedPlatform);
  const selectedSortBy = useSelector(state => state.game.selectedSortBy);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const gameResponse = getFilteredGames(
      selectedPlatform,
      selectedCategory,
      selectedSortBy,
    );
    gameResponse
      .then(response => {
        dispatch(setGames(response));
      })
      .catch(error => {
        showError('Error', error);
      });
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    const data = await getFilteredGames(
      selectedPlatform,
      selectedCategory,
      selectedSortBy,
    );
    dispatch(setGames(data));
    setRefreshing(false);
    console.log('refreshed');
  };

  const renderItem = ({item}) => <GameCard item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      {games.length > 0 ? (
        <FlatList
          data={games}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          refreshing={true}
        />
      ) : (
        <View style={styles.item}>
          <Text style={styles.itemText}>No games found</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Body;
