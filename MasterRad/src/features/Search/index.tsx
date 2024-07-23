import {ScrollView, TextInput, TouchableHighlight, View} from 'react-native';
import Text from '../../components/Text';
import React, {useEffect, useState} from 'react';
import {useAppDispatch} from '../../store';
import {fetchLocations} from './redux/module';
import {useSelector} from 'react-redux';
import {selectLoadingStatus, selectLocations} from './redux/selectors';
import {LocationType} from '../../types/Search/location';
import {FlashList} from '@shopify/flash-list';
import {colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import SearchHeader from './components/Header';
import {setCurrentLocation} from '../HomeScreen/redux/forecast/reducer';

const SearchScreen = () => {
  const [location, setLocation] = useState<string>('');
  const dispatch = useAppDispatch();
  const locations = useSelector(selectLocations);
  const navigation = useNavigation();

  useEffect(() => {
    if (location !== '') {
      dispatch(fetchLocations({location}));
    }
  }, [location, dispatch]);

  const onChange = (value: string) => {
    setLocation(value);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <SearchHeader term={location} onChange={onChange} />,
    });
  }, [navigation, location]);

  const renderItem = ({item}: {item: LocationType}) => {
    return (
      <View
        style={{
          width: '100%',
          height: 50,
          justifyContent: 'center',
          paddingLeft: 24,
          marginBottom: 16,
        }}>
        <TouchableHighlight
          onPress={() => {
            dispatch(setCurrentLocation(item.name));
            navigation.navigate('Home');
          }}>
          <Text
            variation="body2"
            color={
              colors.primary
            }>{`${item.name}, ${item.region}, ${item.country}`}</Text>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: colors.lightGray}}>
      <FlashList
        data={locations}
        renderItem={renderItem}
        estimatedItemSize={1000}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default SearchScreen;
