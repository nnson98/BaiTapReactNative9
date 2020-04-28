import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Alert} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Header from './Header';
import moment from 'moment';
import _ from 'lodash';
import Item from './Item';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import Note from './NoteComponent';
import {useDispatch, useSelector} from 'react-redux';
import {getDataRequest} from '../actions/DataActions';
import {onAddData} from '../actions/DataActions';
import axios from 'axios';
const CustomCalendar = () => {
  const api = useSelector(state => state.getData);
  const dispatch = useDispatch();
  const [Data, setData] = useState({
    dateData: [],
  });

  const [checkin, setCheck] = useState({
    isCheck: false,
  });

  useEffect(() => {
    console.disableYellowBox = true;
    getData(moment().format('YYYY-MM-DD'));
  }, []);
  async function getData(dateString) {
    try {
      dispatch(getDataRequest());
      const data = _.filter(api.data, data => {
        if (data.date.includes(dateString)) {
          return true;
        } else {
          false;
        }
      });

      setData({
        dateData: data,
      });
    } catch (error) {}
  }
  async function setCheckin() {
    try {
      const now = moment().format('YYYY-MM-DD');
      const time = moment().format('YYYY-MM-DD HH:mm:ss');
      const add = newData => dispatch(onAddData(newData));
      add({date: now, checkin: time});
      setCheck({
        isCheck: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function setCheckout() {
    if (checkin.isCheck) {
      try {
        var moment = require('moment');
        const now = moment().format('YYYY-MM-DD');
        const time = moment().format('YYYY-MM-DD HH:mm:ss');
        const response = await axios({
          method: 'post',
          url: 'https://private-133eb-fakeapi9.apiary-mock.com/demo',
          data: {
            date: now,
            checkoutTime: time,
          },
        });

        if (response != null) {
          Alert.alert('Checkout thành công');
          console.log(response);
          getData(moment().format('YYYY-MM-DD'));
        } else {
          Alert.alert('Checkout thất bại');
        }
      } catch (error) {}
    } else {
      Alert.alert('Vui lòng Checkin trước');
    }
  }

  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Header checkin={setCheckin} checkout={setCheckout} />

      <Calendar
        style={{width: 400}}
        markedDates={{
          '2020-04-01': {
            selected: true,
            selectedColor: '#93e6ff',
          },
          '2020-04-02': {
            selected: true,
            selectedColor: '#93e6ff',
          },
          '2020-04-07': {
            selected: true,
            selectedColor: '#719eff',
          },
          '2020-04-15': {
            selected: true,
            selectedColor: '#719eff',
          },
          '2020-04-23': {
            selected: true,
            selectedColor: '#ff8fcb',
          },
          '2020-04-24': {
            selected: true,
            selectedColor: '#ff8fcb',
          },
          '2020-04-25': {
            selected: true,
            selectedColor: '#ff8fcb',
          },
          '2020-04-29': {
            selected: true,
            selectedColor: '#ffba6f',
          },
        }}
        onDayPress={day => getData(day.dateString)}
      />
      <Note />
      <View>
        <FlatList
          data={Data.dateData}
          renderItem={({item}) => Item(item)}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default CustomCalendar;
