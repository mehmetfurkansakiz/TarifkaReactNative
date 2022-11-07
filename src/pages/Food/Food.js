import React from 'react';
import {FlatList, Text} from 'react-native';
import FoodCard from '../../components/FoodCard/FoodCard';
import useFetch from '../../hooks/useFetch/useFetch';
// import Error from '../../components/Error/Error';
// import Loading from '../../components/Loading/Loading';
import Config from 'react-native-config';
import styles from './Food.style';

const Food = ({route, navigation}) => {
  console.log(route.params);
  const {strCategory} = route.params;
  console.log(strCategory);
  const {data, loading, error} = useFetch(`${Config.API_FOOD}${strCategory}`);

  const handleFoodSelect = idMeal => {
    navigation.navigate('DetailPage', {idMeal});
  };

  const renderFood = ({item}) => (
    <FoodCard food={item} onSelect={() => handleFoodSelect(item.idMeal)} />
  );

  if (error) {
    // return <Error />;
    <Text>Error!</Text>;
  }

  if (loading) {
    // return <Loading />;
    <Text>Loading!</Text>;
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
