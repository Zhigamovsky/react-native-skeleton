//@ts-ignore
import Log from '@zhigamovsky/styled-console-log'
import * as Types from 'src/types'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import * as Navigation from './';

const Application: Types.NavElement = ({navigation}) => {
  useEffect(() => {
    Log.render('<Application> has been rendered');
  }, [])
  return (
    <NavigationContainer>
      <Navigation.Authorization navigation={navigation} />
    </NavigationContainer>
  ) 
}
export default Application;