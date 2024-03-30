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
import analyticsEventBus from '../../utils/AnalyticsEventBus/AnalyticsEventBus';
import {SCREEN_VIEW_EVENT} from '../../utils/AnalyticsTrackers/AnalyticsEventsNames';

const HomeScreen = () => {
  const location = useSelector(selectLocation);
  const forecast = useSelector(selectCurrentDayForecast);
  const currentWeather = useSelector(selectCurrentWeather);
  const futureForecast = useSelector(selectForecastForNextThreeDays);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchForecast({location: 'Belgrade'}));
  }, []);

  const renderLocationInfo = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text variation="headline3" color="white">
          My location
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
      </View>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: 'gray', height: '100%'}}>
      <Spacing size={3} top>
        {renderLocationInfo()}
      </Spacing>
      <Button
        title="EVENT"
        onPress={() => {
          analyticsEventBus.log({
            eventName: SCREEN_VIEW_EVENT,
            screenName: 'Home',
          });
        }}
      />
      <Spacing size={2} horizontal vertical style={{flex: 1, marginTop: 32}}>
        <DayWeatherList />
      </Spacing>
      <TempByHourGraph />
      <Spacing size={4} top style={{flex: 1}}>
        <ForecastByDay
          data={futureForecast}
          title="Forecast in the next three days"
        />
      </Spacing>
    </ScrollView>
  );
};

export default HomeScreen;
