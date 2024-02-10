import React from 'react';
import {colors} from '../theme/colors';
import styles from './style';
import HomeScreen from '../features/HomeScreen';
import {HOME_SCREEN_TITLE} from './translations';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: styles.headerStyle,
        headerTintColor: colors.accent,
        headerRightContainerStyle: styles.headerRightContainerStyle,
        headerLeftContainerStyle: styles.headerLeftContainerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerBackTitleVisible: false,
      }}
      initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: HOME_SCREEN_TITLE}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
