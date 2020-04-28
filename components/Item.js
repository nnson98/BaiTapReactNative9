import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Item(item) {
  if (item.checkinTime != null) {
    return (
      <View>
        <Text style={styles.txtIn}>Checkin Time: {item.checkinTime}</Text>
      </View>
    );
  }

  if (item.checkoutTime != null) {
    return (
      <View>
        <Text style={styles.txtOut}>Checkout Time: {item.checkoutTime}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txtIn: {
    marginHorizontal: 15,
    fontSize: 15,
    color: '#F0F',
  },

  txtOut: {
    marginHorizontal: 15,
    fontSize: 15,
    color: '#00F',
  },
});
