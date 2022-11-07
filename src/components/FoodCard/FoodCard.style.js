import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  image: {
    width: deviceSize.width - 20,
    height: deviceSize.height / 4,
    resizeMode: 'contain',
    flex: 1,
  },
  inner_container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5',
    width: deviceSize.width - 20,
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
