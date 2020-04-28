import React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Icon} from 'native-base';

const Header = props => {
  return (
    <View>
      <Appbar.Header style={styles.container}>
        <Appbar.BackAction />
        <Text style={styles.txt}>Leave Calendar</Text>
        <Icon
          type="AntDesign"
          name="pluscircle"
          style={{color: '#F00'}}
          onPress={props.checkout}
        />
      </Appbar.Header>
      <Button
        title={'Checkin'}
        onPress={props.checkin}
        buttonStyle={styles.btnInStyles}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    elevation: 0,
    backgroundColor: '#FFF',
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnInStyles: {
    backgroundColor: '#F0F',
    marginVertical: 15,
    marginHorizontal: 15,
  },
});
export default Header;
