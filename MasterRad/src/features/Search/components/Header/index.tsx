import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {colors} from '../../../../theme/colors';
import {useLocalization} from '../../../../localization/localization';

const styles = StyleSheet.create({
  searchHeaderContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchHeaderBackButtonContainer: {flex: 1},
  iconContainer: {justifyContent: 'center', alignItems: 'center'},
  inputContainer: {
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

interface Props {
  term: string;
  onChange(value: string): void;
  onRef(ref): void;
}

const SearchHeader = ({term, onChange, onRef}: Props) => {
  const [value, setValue] = useState(term);

  const translation = useLocalization();

  useEffect(() => {
    setValue(term);
  }, [term]);

  const onChangeText = (text: string) => {
    onChange(text);
    setValue(text);
  };

  return (
    <View style={styles.searchHeaderContainer}>
      <TextInput
        ref={onRef}
        style={{color: colors.white}}
        placeholder={translation('translation:searchScreen.searchLocation')}
        placeholderTextColor={colors.primary}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default SearchHeader;
