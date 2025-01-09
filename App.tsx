import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import messaging from '@react-native-firebase/messaging';

export default function App() {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const getToken=async()=>{
    const token=await messaging().getToken()
    console.log("FCM Token:",token)
  }

  useEffect(()=>{
    requestUserPermission()
    getToken()

  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Your First React Native App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  welcomeText: {
    fontSize: 18,
    color: '#333',
  },
});
