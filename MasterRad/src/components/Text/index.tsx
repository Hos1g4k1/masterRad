import React, {ReactNode} from 'react';
import {Text as RNText, TextStyle} from 'react-native';
import {textVariations, textVariationsTypes} from '../../types/textVariations';

type Props = {
  variation: textVariationsTypes;
  style?: TextStyle;
  children: ReactNode;
  color?: string;
};

const Text = ({variation, style, children, color}: Props) => {
  const textVariation = textVariations[variation];
  return (
    <RNText
      style={{
        ...style,
        color: color ? color : undefined,
        fontSize: textVariation.fontSize,
        fontWeight: textVariation.fontWeight,
      }}>
      {children}
    </RNText>
  );
};

export default Text;
