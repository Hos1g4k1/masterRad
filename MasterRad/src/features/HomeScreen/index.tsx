import {Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <TouchableOpacity
        onPress={() => {
          throw new Error('My first Sentry error');
        }}>
        <Text>LALALALA</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
