import React from 'react';
import {View, FlexStyle, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
});

interface FlexProps {
  value?: number;
  children?: React.ReactNode | React.ReactNode[];
  style?: FlexStyle | FlexStyle[];
}

const Flex = ({value = 1, children, style = {}}: FlexProps) => (
  <View style={{flex: value, ...style}}>{children}</View>
);

interface RowProps {
  children: React.ReactNode | React.ReactNode[];
  style?: FlexStyle | FlexStyle[];
}

export const Row = ({children, style = {}}: RowProps) => (
  <View style={[style, styles.row]}>{children}</View>
);

interface ColumnProps {
  children: React.ReactNode | React.ReactNode[];
  style?: FlexStyle | FlexStyle[];
}

export const Column = ({children, style = {}}: ColumnProps) => (
  <View style={[style, styles.column]}>{children}</View>
);

export default Flex;
