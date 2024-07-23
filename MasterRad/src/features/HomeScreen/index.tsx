import React, {useEffect} from 'react';
import {Button, ScrollView, View} from 'react-native';
import CelsiusDegree from '../../components/CelsiusDegree';
import {Row} from '../../components/Flex';
import ExtremeTemp from '../../components/ExtremeTemp';
import Text from '../../components/Text';
import Spacing from '../../components/Spacing';
import {useSelector} from 'react-redux';
import {
  selectCurrentDayForecast,
  selectCurrentLocation,
  selectCurrentWeather,
  selectForecastForNextThreeDays,
  selectLocation,
} from './redux/forecast/selectors';
import {useAppDispatch} from '../../store';
import {fetchForecast} from './redux/forecast/modules';
import DayWeatherList from './components/DayWeatherList';
import {getRoundTemp} from '../../utils/temperature';
import ForecastByDay from './components/ForecastByDay';
import TempByHourGraph from './components/TempByHourGraph';
import {goToLanguageScreen, goToSearchScreen} from '../../navigation/actions';
import styles from './style';
import {colors} from '../../theme/colors';
import {useLocalization} from '../../localization/localization';
import {selectCurrentLanguage} from '../../redux/languageReducer/selectors';

const HomeScreen = () => {
  const currentLocationName = useSelector(selectCurrentLocation);
  const location = useSelector(selectLocation);
  const forecast = useSelector(selectCurrentDayForecast);
  const currentWeather = useSelector(selectCurrentWeather);
  const futureForecast = useSelector(selectForecastForNextThreeDays);
  const dispatch = useAppDispatch();
  const lang = useSelector(selectCurrentLanguage);

  const t = useLocalization();

  useEffect(() => {
    dispatch(fetchForecast({location: currentLocationName, lang}));
  }, [currentLocationName, dispatch, lang]);

  const renderLocationInfo = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text variation="headline3" color="white">
          {t('translation:homeScreen.myLocation')}
        </Text>
        <Text variation="body2" color="white">
          {location?.name}
        </Text>
        <CelsiusDegree
          degree={getRoundTemp(currentWeather?.tempC)}
          variation="headline4"
          uri={`https:${forecast?.condition.icon}`}
        />
        <Text variation="body2" color="white">
          {forecast?.condition.text}
        </Text>
        <Row style={{paddingTop: 8}}>
          <ExtremeTemp
            variation="body2"
            temp={getRoundTemp(forecast?.maxtempC)}
            title="H"
          />
          <ExtremeTemp
            variation="body2"
            temp={getRoundTemp(forecast?.mintempC)}
            title="L"
          />
        </Row>
        <Button
          onPress={goToLanguageScreen}
          title={t('translation:homeScreen.changeLanguage')}
          color={colors.primary}
        />
      </View>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollViewStyle}
      contentContainerStyle={styles.contentContainerStyle}>
      <Spacing size={3} top>
        {renderLocationInfo()}
      </Spacing>
      <Button
        title={t('translation:homeScreen.findOtherLocation')}
        color={colors.primary}
        onPress={goToSearchScreen}
      />
      <Spacing size={2} horizontal bottom style={styles.dayWeatherListStyle}>
        <DayWeatherList />
      </Spacing>
      <TempByHourGraph />
      <Spacing size={2} top style={{flex: 1}}>
        <ForecastByDay
          data={futureForecast}
          title={t('translation:homeScreen.nextThreeDaysForecast')}
        />
      </Spacing>
    </ScrollView>
  );
};

export default HomeScreen;
