//@ts-ignore
import Log from '@zhigamovsky/styled-console-log'
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'

import * as Types from 'src/types'
import { navigateShell } from '../utils/shell'

export const HomeScreen1: Types.NavElement = ({ navigation }) => {
  useEffect(() => {
    Log.render('<HomeScreen1> has been rendered');
    //@ts-ignore
    // navigation.openDrawer();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Каталог</Text>
      <Button
        onPress={() => navigateShell(navigation, 'HomeScreen2')}
        title="Открыть подкаталог"
      />
    </View>
  );
}

export const HomeScreen2: Types.NavElement = ({ navigation }) => {

  useEffect(() => {
    Log.render('<HomeScreen2> has been rendered');
  }, []);  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Подкаталог</Text>
      <Button
        onPress={() => navigateShell(navigation, 'HomeScreen3')}
        title="Открыть категорию"
      />
    </View>
  );
}
  
export const HomeScreen3: Types.NavElement = ({ navigation }) => {
  useEffect(() => {
    Log.render('<HomeScreen3> has been rendered');
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Категория</Text>
      <Button
        onPress={() => navigateShell(navigation, 'HomeScreen4')}
        title="Открыть фотографию"
      />
    </View>
  );
}

export const HomeScreen4: Types.NavElement = ({ navigation }) => {
  useEffect(() => {
    Log.render('<HomeScreen4> has been rendered');
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Фотография</Text>
    </View>
  );
}