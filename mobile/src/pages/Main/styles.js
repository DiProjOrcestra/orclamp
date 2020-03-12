import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FB'
  },
  top: {
    height: 250,
    width: 300,
    alignSelf: 'center',
    top: -300,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
    transform: [{scaleX: 2}]
  },
  pageTitle: {
    fontSize: 19,
    color: '#ffffff',
    lineHeight: 22,
    fontFamily: 'Roboto',
    top: 150,
    alignSelf: 'center',
    transform: [{scaleX: 1/2}]
  },
  searchBar: {
    top: 190,
    alignSelf: 'center',
    height: 40,
    width: 315,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    transform: [{scaleX: 1/2}],
    paddingLeft: 40
  }
});

export default styles;
