import React from 'react';
import {Text} from 'react-native';
import {textVariations, textVariationsTypes} from '../../types/textVariations';

type Props = {
  degree: number;
  variation: textVariationsTypes;
};

const CelsiusDegree = ({degree, variation}: Props) => {
  const degreeText = `${degree}\u00b0`;
  const textVariation = textVariations[variation];
  return (
    <Text
      style={{
        fontSize: textVariation.fontSize,
        fontWeight: textVariation.fontWeight,
        color: 'white',
      }}>
      {degreeText}
    </Text>
  );
};

export default CelsiusDegree;
