import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  image: {height: 80, width: 120, flexBasis: '40%'},
  headerText: {
    paddingVertical: 20,
    fontSize: 28,
    letterSpacing: 1,
  },
  lightText: {
    color: '#E9E3E6',
  },
  darkText: {
      color: '#842B45',
  },
  name: {
    fontSize: 26,
    letterSpacing: 1,
    textAlign: 'left',
    flexBasis: '60%',
    textAlign: 'left',
    marginLeft: 15,
  },
});

export default styles;
