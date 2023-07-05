import {
  View,
  Text,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  Button,
  Modal,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Header.style';
import FilterIcon from '../../../assets/icons/filterIcon.svg';
import ApplyFilterIcon from '../../../assets/icons/applyFilter.svg';
import ClearFilterIcon from '../../../assets/icons/clearFilter.svg';
import CloseIcon from '../../../assets/icons/closeIcon.svg';

import {showError, showSuccess} from '../../helper/helpers';
import {getAllGames, getFilteredGames} from '../../services/ApiServices';
import FilterButton from './FilterButton';
import {platforms, categories, sortBy} from '../../constants/Datas';
import {useDispatch, useSelector} from 'react-redux';
import {
  setSelectedCategory,
  setSelectedPlatform,
  setGames,
  setSelectedSortBy,
} from '../../redux/gameSlice';
import {sizes} from '../../constants/Constants';

const Header = ({title = 'Default Header'}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const selectedPlatform = useSelector(state => state.game.selectedPlatform);
  const selectedCategory = useSelector(state => state.game.selectedCategory);
  const selectedSortBy = useSelector(state => state.game.selectedSortBy);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleClearFilter = () => {
    dispatch(setSelectedPlatform('all'));
    dispatch(setSelectedCategory(''));
    dispatch(setSelectedSortBy(''));
    const gameResponse = getAllGames();
    gameResponse
      .then(response => {
        dispatch(setGames(response));
        setIsModalOpen(false);
      })
      .catch(error => {
        showError('Error', error);
      });
    showSuccess('Success', 'Filter is cleared successfully');
  };

  const handleApplyFilter = () => {
    const gameResponse = getFilteredGames(
      selectedPlatform,
      selectedCategory,
      selectedSortBy,
    );
    gameResponse
      .then(response => {
        dispatch(setGames(response));
        setIsModalOpen(false);
        showSuccess('Success', 'Filter is applied successfully');
      })
      .catch(error => {
        showError('Error', error);
      });
  };

  const renderPlatform = ({item}) => (
    <FilterButton
      onPress={() => dispatch(setSelectedPlatform(item.platform))}
      buttonText={item.text}
      isSelected={item.platform === selectedPlatform}
    />
  );

  const renderCategory = ({item}) => (
    <FilterButton
      onPress={() => {
        dispatch(setSelectedCategory(item.category));
      }}
      buttonText={item.text}
      isSelected={item.category === selectedCategory}
    />
  );

  const renderSortBy = ({item}) => (
    <FilterButton
      onPress={() => dispatch(setSelectedSortBy(item.sortBy))}
      buttonText={item.text}
      isSelected={item.sortBy === selectedSortBy}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity
        style={styles.filterContainer}
        onPress={() => {
          handleModalOpen();
        }}>
        <FilterIcon width="100%" height="100%" fill="gray" />
      </TouchableOpacity>
      <Modal
        style={styles.modal}
        visible={isModalOpen}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={handleModalClose}
            style={styles.closeFilterButton}>
            <CloseIcon width="100%" height="100%" fill="black" />
          </TouchableOpacity>
          <View style={styles.subContainer}>
            <Text style={styles.filterTitleText}>
              Platform
              {`  `}:
            </Text>
            <FlatList
              data={platforms}
              renderItem={renderPlatform}
              keyExtractor={item => item.id}
              numColumns={2}
            />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.filterTitleText}>
              Category
              {`  `}:
            </Text>
            <FlatList
              data={categories}
              renderItem={renderCategory}
              keyExtractor={item => item.id}
              numColumns={2}
            />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.filterTitleText}>
              Sort By
              {`  `}:
            </Text>
            <FlatList
              data={sortBy}
              renderItem={renderSortBy}
              keyExtractor={item => item.id}
              numColumns={2}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: sizes.width * 0.9,
            }}>
            <TouchableOpacity
              onPress={handleClearFilter}
              style={styles.clearFilterButton}>
              <ClearFilterIcon width="100%" height="100%" fill="black" />
              <Text style={styles.filterButton}>Clear Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleApplyFilter}
              style={styles.applyFilterButton}>
              <ApplyFilterIcon width="100%" height="100%" fill="black" />
              <Text style={styles.filterButton}>Apply Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Header;
