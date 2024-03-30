import React, {useEffect, useState} from 'react';
import {Button, Dimensions} from 'react-native';
import {selectForecastDataForTheNextTwentyFourHours} from '../../redux/forecast/selectors';
import {useSelector} from 'react-redux';
import dayjs from 'dayjs';
import {getRoundTemp} from '../../../../utils/temperature';
import {LineChart} from 'react-native-chart-kit';
import Spacing from '../../../../components/Spacing';
import {Row} from '../../../../components/Flex';
import {colors} from '../../../../theme/colors';

type Props = {
  data: Array<number>;
  labels: Array<string>;
};

const TempByHourGraph = ({}: Props) => {
  const hourlyData = useSelector(selectForecastDataForTheNextTwentyFourHours);
  const [data, setData] = useState<{
    data: Array<number>;
    labels: Array<string>;
    suffix: string;
  } | null>(null);
  const [currentOption, setCurrentOption] = useState('temp');

  useEffect(() => {
    let curData = [];
    let curLabels = [];
    switch (currentOption) {
      case 'wind':
        curData = hourlyData
          ?.map(x => x.windKph)
          .filter((_, index) => index % 2 === 1);
        curLabels = hourlyData
          ?.map(x => dayjs(x.time).hour().toString())
          .filter((_, index) => index % 2 === 1);
        setData({data: curData, labels: curLabels, suffix: ' km/h'});
        break;
      case 'temp':
        curData = hourlyData
          ?.map(x => getRoundTemp(x.tempC))
          .filter((_, index) => index % 2 === 1);
        curLabels = hourlyData
          ?.map(x => dayjs(x.time).hour().toString())
          .filter((_, index) => index % 2 === 1);
        setData({data: curData, labels: curLabels, suffix: '\u00b0'});
        break;
      default:
        curData = hourlyData
          ?.map(x => getRoundTemp(x.precipMm))
          .filter((_, index) => index % 2 === 1);
        curLabels = hourlyData
          ?.map(x => dayjs(x.time).hour().toString())
          .filter((_, index) => index % 2 === 1);
        setData({data: curData, labels: curLabels, suffix: ' mm'});
    }
  }, [currentOption, hourlyData]);

  const renderGraph = (
    graphData: Array<number>,
    graphLabels: Array<string>,
    suffix: string,
  ) => (
    <LineChart
      data={{
        labels: graphLabels,
        datasets: [{data: graphData}],
      }}
      yAxisSuffix={suffix}
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
  );

  const renderOptionButtons = () => (
    <Row style={{marginVertical: 8, justifyContent: 'space-between'}}>
      <Spacing size={1} right>
        <Button
          color={currentOption === 'temp' ? colors.primary : colors.white}
          title="Temperature"
          onPress={() => setCurrentOption('temp')}
        />
      </Spacing>
      <Spacing size={1} right>
        <Button
          color={currentOption === 'wind' ? colors.primary : colors.white}
          title="Wind"
          onPress={() => setCurrentOption('wind')}
        />
      </Spacing>
      <Button
        color={currentOption === 'percip' ? colors.primary : colors.white}
        title="Percipation"
        onPress={() => setCurrentOption('percip')}
      />
    </Row>
  );

  if (!hourlyData) {
    return null;
  }

  if (!data || !data.data || !data.labels) {
    return null;
  }

  return (
    <Spacing size={2} horizontal>
      {renderOptionButtons()}

      {renderGraph(data?.data, data?.labels, data.suffix)}
    </Spacing>
  );
};

export default TempByHourGraph;
