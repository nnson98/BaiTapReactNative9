import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomCalendar from '../components/CustomCalendar';
const Home = () => {
  return (
    <View>
      <CustomCalendar />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
});
export default Home;
