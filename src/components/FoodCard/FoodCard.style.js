import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    height: deviceSize.height / 4,
    borderRadius: 10,
  },
  title: {
    position: 'absolute',
    zIndex: 1,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 22,
    fontWeight: 'bold',
    bottom: 0,
    height: 30,
    textAlign: 'right',
    paddingBottom: 5,
    paddingRight: 10,
  },
});
