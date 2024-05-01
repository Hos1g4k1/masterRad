import React from 'react';
import {Image, Text, View} from 'react-native';
import {textVariations, textVariationsTypes} from '../../types/textVariations';
import {Row} from '../Flex';

type Props = {
  degree: number | undefined;
  variation: textVariationsTypes;
  uri: string;
};

const CelsiusDegree = ({degree, variation, uri}: Props) => {
  const degreeText = `${degree}\u00b0`;
  const textVariation = textVariations[variation];
  return (
    <Row>
      <Image source={{uri: uri}} width={75} height={75} />
      <Text
        style={{
          fontSize: textVariation.fontSize,
          fontWeight: textVariation.fontWeight,
          color: 'white',
          marginTop: 8,
        }}>
        {degreeText}
      </Text>
    </Row>
  );
};

export default CelsiusDegree;
