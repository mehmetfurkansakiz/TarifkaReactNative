import React from 'react';
import {FlatList, Linking, ActivityIndicator, Text} from 'react-native';
import DetailCard from '../../components/DetailCard/DetailCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';

const Detail = ({route}) => {
  const {idMeal} = route.params;
  const {data, loading, error} = useFetch(`${Config.API_DETAIL}${idMeal}`);
  console.log('cektimDetail', data);

  const renderDetail = ({item}) => (
    <DetailCard
      detail={item}
      onSelect={() => Linking.openURL(item.strYoutube)}
    />
  );
  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return <FlatList data={data.meals} renderItem={renderDetail} />;
};
export default Detail;
