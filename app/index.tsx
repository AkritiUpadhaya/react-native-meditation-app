import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text className="text-xl font-bold">Hello world</Text>
    </View>
);
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});