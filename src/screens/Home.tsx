import { RouteProp, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

import { navigationProps } from '../../App';

type routeProps = RouteProp<navigationProps>;
const Home: React.FC = () => {
  const params = useRoute<routeProps>().params;

  if (params?.screen === 'search') {
    return (
      <>
        <StatusBar style="dark" />
        <WebView
          source={{ uri: 'https://openmart.ng/' }}
          style={styles.container}
          startInLoadingState
        />
      </>
    );
  }

  if (params?.screen === 'login') {
    return (
      <>
        <StatusBar style="dark" />
        <WebView
          source={{ uri: 'https://openmart.ng/login' }}
          style={styles.container}
          startInLoadingState
        />
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});

export default Home;
