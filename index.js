import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import Log from '@zhigamovsky/styled-console-log'

import {name as applicationName} from './app.json';
import * as Navigation from './src/navigation'

AppRegistry.registerComponent(applicationName, () => {
  window.log = Log;
  return (
    () => (
      <Navigation.Application />
    )
  )
});