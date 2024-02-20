import {
  Image,
  ImageBackground,
  StatusBar as SB,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import MyButton from '../components/MyButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { navigationProps } from '../../App';

type navProp = NativeStackNavigationProp<navigationProps>;
const WelcomeScreen: React.FC<{ navigation: navProp }> = ({ navigation }) => {
  const HandleNavigateToSearch = () => {
    navigation.navigate('home page', { screen: 'search' });
  };

  const HandleNavigateToLogin = () => {
    navigation.navigate('home page', { screen: 'login' });
  };

  return (
    <ImageBackground
      source={require('../../assets/bg.jpeg')}
      resizeMode="cover"
      style={styles.container}
    >
      <StatusBar style="light" />
      <View style={styles.topContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
      </View>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.bottomContainer}
      >
        <Text style={styles.header}>Welcome To Open Mart</Text>
        <Text style={[styles.header, { fontWeight: '300' }]}>
          A market for nigerian business
        </Text>
        <View style={styles.row}>
          <MyButton text="Search Item" onPress={HandleNavigateToSearch} />
          <MyButton text="Search Business" onPress={HandleNavigateToSearch} />
        </View>
        <View style={styles.row}>
          <MyButton
            text="Post Adverts"
            background="#e21923"
            onPress={HandleNavigateToLogin}
          />
          <MyButton
            text="Login Accounts"
            background="#e21923"
            onPress={HandleNavigateToLogin}
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SB.currentHeight,
    justifyContent: 'space-between',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  bottomContainer: {
    width: '100%',
    flex: 2,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: '10%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
