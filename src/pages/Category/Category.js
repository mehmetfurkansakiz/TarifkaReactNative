import React, {useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import useFetch from '../../hooks/useFetch/useFetch';
// import Error from '../../components/Error/Error';
// import Loading from '../../components/Loading/Loading';
import Config from 'react-native-config';
import styles from './Category.style';

const Category = ({navigation}) => {
  const {data, loading, error} = useFetch(Config.API_CATEGORY);
  console.log('cektim', data);

  const renderCategoryCard = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );

  const handleCategorySelect = strCategory => {
    navigation.navigate('FoodPage', {strCategory});
  };

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
      data={data.categories}
      renderItem={renderCategoryCard}
      style={styles.container}
    />
  );
};

export default Category;
