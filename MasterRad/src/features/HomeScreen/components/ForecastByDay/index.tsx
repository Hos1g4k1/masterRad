import React from 'react';
import {View, Text, Image} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {ForecastDayDayType} from '../../../../types/Weather/Forecast';
import dayjs from 'dayjs';
import styles from './styles';
import {getRoundTemp} from '../../../../utils/temperature';
import {colors} from '../../../../theme/colors';
import Spacing from '../../../../components/Spacing';
import Flex, {Row} from '../../../../components/Flex';
import ExtremeTemp from '../../../../components/ExtremeTemp';

type Props = {
  data: Array<ForecastDayDayType>;
  title: string;
};

const ForecastByDay = ({data, title}: Props) => {
  const renderTemperature = (temp: number, caption: string) => (
    <Spacing
      size={1}
      top
      left
      style={{flex: 3, flexDirection: 'row', marginLeft: 32}}>
      <ExtremeTemp
        variation="body1"
        temp={getRoundTemp(temp)}
        title={caption}
      />
    </Spacing>
  );

  const renderTitle = (title: string) => (
    <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 15}}>
      {title}
    </Text>
  );

  const renderItem = ({
    item,
    index,
  }: {
    item: ForecastDayDayType;
    index: number;
  }) => {
    const dayName = dayjs(item.date).format('dddd');

    return (
      <Spacing size={2} horizontal bottom style={styles.mainContainer}>
        <View style={styles.subContainer} />
        <Row>
          <Spacing size={1} top style={{flex: 4}}>
            <Text style={styles.textStyle}>
              {index === 0 ? 'Today' : dayName}
            </Text>
          </Spacing>
          <Spacing size={3} left style={{flex: 1}}>
            <Image
              source={{uri: `https:${item.day.condition.icon}`}}
              width={40}
              height={40}
            />
          </Spacing>
          {renderTemperature(item.day.maxtempC, 'Max')}
          {renderTemperature(item.day.mintempC, 'Min')}
        </Row>
      </Spacing>
    );
  };

  if (data === undefined) {
    return null;
  }

  return (
    <Flex style={styles.bottomMargin}>
      <Spacing size={2} horizontal bottom>
        {renderTitle(title)}
      </Spacing>
      <FlashList
        data={data}
        renderItem={renderItem}
        estimatedItemSize={1000}
        showsVerticalScrollIndicator={false}
      />
    </Flex>
  );
};

export default ForecastByDay;
