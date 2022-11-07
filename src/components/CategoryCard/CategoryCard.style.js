import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#b9a69f',
    borderRadius: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    margin: 10,
  },
  body_container: {
    flex: 1,
    paddingLeft: 25,
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
