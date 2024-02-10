import React, {ReactNode} from 'react';
import {View, StyleSheet, ViewStyle, StyleProp} from 'react-native';

interface Props {
  size: 0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6;
  children?: ReactNode | ReactNode[];
  style?: StyleProp<ViewStyle>;
  horizontal?: boolean;
  vertical?: boolean;
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  onRef?: (instance: View) => void;
}

const getStyles = ({
  horizontal,
  vertical,
  top,
  bottom,
  left,
  right,
  size,
}: {
  horizontal: boolean;
  vertical: boolean;
  top: boolean;
  bottom: boolean;
  left: boolean;
  right: boolean;
  size: 0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6;
}) =>
  StyleSheet.create({
    container: {
      paddingTop: vertical || top ? 8 * size : 0,
      paddingBottom: vertical || bottom ? 8 * size : 0,
      paddingLeft: horizontal || left ? 8 * size : 0,
      paddingRight: horizontal || right ? 8 * size : 0,
    },
  });

function Spacing(props: Props) {
  const {
    children,
    size,
    style = {},
    horizontal = false,
    vertical = false,
    top = false,
    bottom = false,
    left = false,
    right = false,
    onRef = () => {},
  } = props;
  return (
    <View
      style={[
        getStyles({horizontal, vertical, top, bottom, left, right, size})
          .container,
        style,
      ]}
      ref={onRef}>
      {children}
    </View>
  );
}

export default Spacing;
