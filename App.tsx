import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as Device from 'expo-device';
import { NavigationContainer} from '@react-navigation/native'
import Navigation from './navigation/Navigation';
import Header from './components/header/Header';
import React from 'react';
import AppNavigationWrapper from './navigation/AppNavigationWrapper';
export default function App() {

  // const osBuildId: string | null = Device.osBuildId;
  // osBuildId==="TP1A.220624.014.G770FXXS7HWD3"

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style={"light"} backgroundColor={"#0e806a"} />
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <AppNavigationWrapper/>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
