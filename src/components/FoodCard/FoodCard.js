import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './FoodCard.style';

const FoodCard = ({food, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: food.strMealThumb}} />
        <Text style={styles.title}>{food.strMeal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FoodCard;
