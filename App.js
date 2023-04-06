import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Signin from './src/screens/auth/Signin';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
/*
const WEB_CLIENT_ID = '537888479495-6mi0hctki7lhrbddv20gkki3vuf93poe.apps.googleusercontent.com'
const IOS_CLIENT_ID = '537888479495-iilc4k48h3jfc3ue6t0dhlku2m9p4pr3.apps.googleusercontent.com'
*/
const App = () => {
/*  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, [])*/

  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
};

export default App;

/*
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Switch, Text, TouchableOpacity, View } from 'react-native';
import Signin from './src/screens/auth/Signin';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import { styles } from './src/styles';

const WEB_CLIENT_ID = '537888479495-6mi0hctki7lhrbddv20gkki3vuf93poe.apps.googleusercontent.com'
const IOS_CLIENT_ID = '537888479495-iilc4k48h3jfc3ue6t0dhlku2m9p4pr3.apps.googleusercontent.com'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
/*    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <SafeAreaView style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <TouchableOpacity style={styles.switchButton} onPress={toggleDarkMode}>
        <Text style={styles.switchButtonText}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</Text>
        <Switch
          trackColor={{ false: "#FFFFFF", true: "#1E1E1E" }}
          thumbColor={isDarkMode ? "#FFCD61" : "#FFFFFF"}
          ios_backgroundColor="#FFFFFF"
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </TouchableOpacity>
      <Signup isDarkMode={isDarkMode} />
    </SafeAreaView>
  );
};

export default App;*/