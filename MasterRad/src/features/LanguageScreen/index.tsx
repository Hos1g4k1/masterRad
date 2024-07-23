import React, {Pressable, View} from 'react-native';
import {useAppDispatch} from '../../store';
import {colors} from '../../theme/colors';
import Text from '../../components/Text';
import {useSelector} from 'react-redux';
import {selectCurrentLanguage} from '../../redux/languageReducer/selectors';
import {setCurrentLanguage} from '../../redux/languageReducer/reducer';
import {useLocalization} from '../../localization/localization';

export const LanguageScreen = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useSelector(selectCurrentLanguage);
  const t = useLocalization();
  console.log({currentLanguage});
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.secondary,
      }}>
      <Pressable
        disabled={currentLanguage === 'en'}
        onPress={() => {
          dispatch(setCurrentLanguage('en'));
        }}
        style={{
          width: '100%',
          alignSelf: 'center',
          marginVertical: 16,
          opacity: currentLanguage === 'en' ? 0.2 : 1,
        }}>
        <Text style={{alignSelf: 'center'}} variation="headline1">
          {t('translation:language.english')}
        </Text>
      </Pressable>
      <Pressable
        disabled={currentLanguage === 'sr'}
        onPress={() => {
          dispatch(setCurrentLanguage('sr'));
        }}
        style={{
          width: '100%',
          alignSelf: 'center',
          marginVertical: 16,
          opacity: currentLanguage === 'sr' ? 0.2 : 1,
        }}>
        <Text style={{alignSelf: 'center'}} variation="headline1">
          {t('translation:language.serbianLat')}
        </Text>
      </Pressable>
    </View>
  );
};
