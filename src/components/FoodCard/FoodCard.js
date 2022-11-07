import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './FoodCard.style';

const FoodCard = ({food, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{uri: food.strMealThumb}}
        />
        <View style={styles.inner_container}>
          <Text style={styles.title}>{food.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FoodCard;
