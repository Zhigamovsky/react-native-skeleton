//@ts-ignore
import Log from '@zhigamovsky/styled-console-log'
//@ts-ignore
import AnimatedLoader from 'react-native-animated-loader'
import React, { useEffect, useState } from 'react'
import { View, StatusBar } from 'react-native'

import * as Types from 'src/types'
import { navigateShell } from '../utils/shell'

const IndexScreen: Types.NavElement = ({ navigation }) => {
  const [isLoading, toggleLoading] = useState<boolean>(true);
  
  useEffect(() => {
    Log.render('<IndexScreen> has been rendered');
  }, []);

  const openApplication: () => void = () => {
    if(!isLoading) {
      navigateShell(navigation, 'Drawer', null);
    }
    else {
      setTimeout(() => {
        toggleLoading(false);
      }, 2000);
    }
  }

  useEffect(() => {
    openApplication();
  }, [isLoading]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF' }}>
      <StatusBar 
        backgroundColor="#544367"
        barStyle="light-content"
        animated={true}
      />
      <AnimatedLoader
        visible={isLoading}
        source={require("../assets/lottie/24311-online-school-home-page-animated-illustration.json")}
        animationStyle={{ width: '100%', height: '100%'}}
        animationType='slide'
        speed={2}
      />
    </View>
  );
}

export default IndexScreen;