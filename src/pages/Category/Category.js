import React, {useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import useFetch from '../../hooks/useFetch/useFetch';
// import Error from '../../components/Error/Error';
// import Loading from '../../components/Loading/Loading';
import Config from 'react-native-config';
import styles from './Category.style';
import axios from 'axios';

const Category = ({navigation}) => {
  const {data, loading, error} = useFetch(Config.API_CATEGORY);
  console.log('cektim', data);
  const handleCategorySelect = strCategory => {
    navigation.navigate('FoodPage', {strCategory});
  };

  useEffect(() => {
    axios
      .get('http://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => {
        console.log(' 1111', res.data);
      })
      .catch(err => console.log(err));
  });

  const renderCategoryCard = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
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
      data={data.categories}
      renderItem={renderCategoryCard}
      style={styles.container}
    />
  );
};

export default Category;