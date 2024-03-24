import React from 'react';
import {Dimensions} from 'react-native';
import {selectForecastDataForTheNextTwentyFourHours} from '../../redux/forecast/selectors';
import {useSelector} from 'react-redux';
import dayjs from 'dayjs';
import {getRoundTemp} from '../../../../utils/temperature';
import {LineChart} from 'react-native-chart-kit';
import Spacing from '../../../../components/Spacing';

type Props = {
  data: Array<number>;
  labels: Array<string>;
};

const TempByHourGraph = ({}: Props) => {
  const hourlyData = useSelector(selectForecastDataForTheNextTwentyFourHours);

  console.log(hourlyData[0]);

  //TODO Make graph for wind and precip
  //Make options for user to select which one he's interested in

  if (!hourlyData) {
    return null;
  }

  const data = hourlyData
    ?.map(x => getRoundTemp(x.tempC))
    .filter((_, index) => index % 2 === 1);
  const labels = hourlyData
    ?.map(x => dayjs(x.time).hour())
    .filter((_, index) => index % 2 === 1);

  if (data === undefined) {
    return null;
  }

  const deg = '\u00b0';

  return (
    <Spacing size={2} horizontal>
      <LineChart
        data={{
          labels: labels,
          datasets: [{data: data}],
        }}
        yAxisSuffix={`${deg}`}
        height={220}
        bezier
        width={Dimensions.get('window').width - 32}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        withVerticalLines={false}
        withHorizontalLines={false}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </Spacing>
  );
};

export default TempByHourGraph;
