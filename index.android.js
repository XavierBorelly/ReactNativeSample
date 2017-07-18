import React from 'react';
import { AppRegistry } from 'react-native';

import NavigationContainer from './src/NavigationContainer';

import { Sentry } from 'react-native-sentry';

Sentry.config("https://08180bf23feb44c784e9fd627203146e:290c924ddf1d4ea8b64bb6e13f3b3b41@sentry.io/192720").install();


export default function ReactNativeSample() {
  return (
    <NavigationContainer />
  );
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
