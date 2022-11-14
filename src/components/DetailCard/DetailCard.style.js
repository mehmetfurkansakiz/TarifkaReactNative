import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
  },
  body_container: {
    margin: 5,
  },
  meal_name: {
    color: '#a52c2c',
    fontSize: 28,
    fontWeight: 'bold',
  },
  meal_from: {
    color: '#a52c2c',
    fontSize: 24,
    fontWeight: 'bold',
  },
  separator: {
    borderWidth: 1,
    borderColor: '#c0c0c0',
  },
  description: {
    color: 'black',
    fontSize: 16,
    padding: 5,
    textAlign: 'justify',
  },
  youtube_button: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderColor: '#ff0000',
    backgroundColor: '#ff0000',
    borderRadius: 10,
  },
  button_text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
