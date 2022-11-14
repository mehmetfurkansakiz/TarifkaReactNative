import React from 'react';
import {ActivityIndicator, FlatList, Text} from 'react-native';
import FoodCard from '../../components/FoodCard/FoodCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import styles from './Food.style';

const Food = ({route, navigation}) => {
  const {strCategory} = route.params;
  const {data, loading, error} = useFetch(`${Config.API_FOOD}${strCategory}`);

  const handleFoodSelect = idMeal => {
    navigation.navigate('DetailPage', {idMeal});
  };

  const renderFood = ({item}) => (
    <FoodCard food={item} onSelect={() => handleFoodSelect(item.idMeal)} />
  );

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <FlatList
      data={data.meals}
      renderItem={renderFood}
      style={styles.container}
    />
  );
};

export default Food;
