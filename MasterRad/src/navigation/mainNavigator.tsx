import React from 'react';
import {colors} from '../theme/colors';
import styles from './style';
import HomeScreen from '../features/HomeScreen';
import {HOME_SCREEN_TITLE, LANGUAGE_SCREEN_TITLE} from './translations';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../features/Search';
import {initReactI18next} from 'react-i18next';
import {locales} from '../localization/locales';
import {changeLanguage, use} from 'i18next';
import * as RNLocalize from 'react-native-localize';
import {useSelector} from 'react-redux';
import {selectCurrentLanguage} from '../redux/languageReducer/selectors';
import {LanguageScreen} from '../features/LanguageScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const currLang = useSelector(selectCurrentLanguage);

  use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: locales,
    lng: currLang,
    interpolation: {escapeValue: false},
    react: {
      useSuspense: false,
    },
  });

  changeLanguage(currLang);

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
        options={{title: HOME_SCREEN_TITLE, headerShown: false}}
      />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen
        name="LanguageScreen"
        component={LanguageScreen}
        options={{title: LANGUAGE_SCREEN_TITLE}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
