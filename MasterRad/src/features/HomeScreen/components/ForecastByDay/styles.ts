import {StyleSheet} from 'react-native';
import {colors} from '../../../../theme/colors';

const styles = StyleSheet.create({
  listItemStyle: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  mainContainer: {flex: 1, justifyContent: 'center'},
  subContainer: {
    borderWidth: 0.5,
    borderColor: colors.white,
  },
  textStyle: {color: colors.white, fontWeight: 'bold', fontSize: 15},
  bottomMargin: {marginBottom: 32},
});

export default styles;
