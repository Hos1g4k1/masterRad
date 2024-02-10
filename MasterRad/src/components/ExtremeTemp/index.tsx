import React from 'react';
import {Text} from 'react-native';
import {textVariations, textVariationsTypes} from '../../types/textVariations';

type Props = {
  title: string;
  temp: number;
  variation: textVariationsTypes;
};

const ExtremeTemp = ({title, temp, variation}: Props) => {
  const degreeText = `${title}: ${temp}\u00b0`;
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

export default ExtremeTemp;
