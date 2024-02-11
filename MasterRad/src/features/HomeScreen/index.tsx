import React from 'react';
import {Button, View} from 'react-native';
import CelsiusDegree from '../../components/CelsiusDegree';
import {Row} from '../../components/Flex';
import ExtremeTemp from '../../components/ExtremeTemp';
import Text from '../../components/Text';
import Spacing from '../../components/Spacing';
import {getForecast} from './redux/forecast/api';

const HomeScreen = () => {
  const renderLocationInfo = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text variation="headline3" color="white">
          My location
        </Text>
        <Text variation="body2" color="white">
          Belgrade
        </Text>
        <CelsiusDegree degree={14} variation="headline4" />
        <Text variation="body2" color="white">
          Cloudy
        </Text>
        <Row>
          <ExtremeTemp variation="body2" temp={19} title="H" />
          <ExtremeTemp variation="body2" temp={7} title="L" />
        </Row>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'gray'}}>
      <Spacing size={3} top>
        {renderLocationInfo()}
      </Spacing>
      <Button
        onPress={() =>
          getForecast().then(res =>
            console.log({
              x: res.data.location,
            }),
          )
        }
        title="Lalalal"
      />
    </View>
  );
};

export default HomeScreen;
