import React from 'react';
import {View, Text, Image} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {selectForecastDataForTheNextTwentyFourHours} from '../../redux/forecast/selectors';
import {useSelector} from 'react-redux';
import {ForecastHourType} from '../../../../types/Weather/Forecast';
import dayjs from 'dayjs';
import styles from './styles';
import {getRoundTemp} from '../../../../utils/temperature';

const DayWeatherList = () => {
  const hourlyData = useSelector(selectForecastDataForTheNextTwentyFourHours);

  const renderItem = ({item}: {item: ForecastHourType}) => {
    const hour = dayjs(item.time).hour();
    const deg = '\u00b0';
    return (
      <View style={styles.listItemStyle}>
        <Text>{hour}h</Text>
        <Image
          source={{uri: `https:${item.condition.icon}`}}
          width={40}
          height={40}
        />
        <Text>
          {getRoundTemp(item.tempC)}
          {deg}
        </Text>
      </View>
    );
  };

  if (hourlyData === undefined) {
    return null;
  }

  return (
    <View style={{flex: 1, alignItems: 'center', minHeight: 100}}>
      <FlashList
        data={hourlyData}
        renderItem={renderItem}
        estimatedItemSize={40}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default DayWeatherList;
