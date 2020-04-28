import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Icon} from 'native-base';
import {colors} from '../styles/styles';
export default function Note() {
  return (
    <View style={styles.mar}>
      <View style={styles.container}>
        <Icon
          type="FontAwesome"
          name="circle"
          style={{color: colors.circle1}}
        />
        <Text style={styles.txt}>Annual Leave</Text>
      </View>

      <View style={styles.container}>
        <Icon
          type="FontAwesome"
          name="circle"
          style={{color: colors.circle2}}
        />
        <Text style={styles.txt}>Hopitalization Sick Leave</Text>
      </View>

      <View style={styles.container}>
        <Icon
          type="FontAwesome"
          name="circle"
          style={{color: colors.circle3}}
        />
        <Text style={styles.txt}>Medical Leave Outpatient</Text>
      </View>

      <View style={styles.container}>
        <Icon
          type="FontAwesome"
          name="circle"
          style={{color: colors.circle4}}
        />
        <Text style={styles.txt}>Children Leave</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mar: {
    margin: 15,
  },

  txt: {
    marginLeft: 10,
  },
});
