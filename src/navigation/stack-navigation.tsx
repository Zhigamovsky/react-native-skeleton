//@ts-ignore
import Log from '@zhigamovsky/styled-console-log'
import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HeaderBackButton } from '@react-navigation/stack'

import * as Types from 'src/types'
import * as Screens from './../screens'
import * as Navigation from './'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import MDICon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Buttons from '../components/buttons'

const AuthorizationStackSkeleton = createStackNavigator();

export const AuthorizationStack: Types.NavElement = ({ navigation }) => {
  useEffect(() => {
    Log.render('<AuthorizationStack> has been rendered');
  }, []);

  return (
    <AuthorizationStackSkeleton.Navigator screenOptions={{
      gestureEnabled: true
    }}>
      <AuthorizationStackSkeleton.Screen 
        name="Login" 
        component={Screens.Index} 
        options={{
          headerShown: false
        }}
      />
      <AuthorizationStackSkeleton.Screen 
        name="Drawer" 
        component={Navigation.Drawer} 
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />
    </AuthorizationStackSkeleton.Navigator>
  );
}

const CatalogStackSkeleton = createStackNavigator();

export const CatalogStack: Types.NavElement = ({ navigation }) => {
  useEffect(() => {
    Log.render('<CatalogStack> has been rendered', navigation, navigation.dangerouslyGetState());
  }, []);
  
  return (
    <CatalogStackSkeleton.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#544367',
          shadowColor: '#544367',
          shadowOffset: {
            width: 0, 
            height: 1
          },
          shadowRadius: 5,
          shadowOpacity: 1.0,
          elevation: 1
        },
        headerRight: () => <Buttons.Burger onPress={() => {
          // @ts-ignore
          navigation.openDrawer();
        }} />,
        headerTitleStyle: {
          color: 'white',
          fontSize: 20
        },
        headerBackImage: () => <Buttons.Back />,
        headerBackTitleVisible: false
      }}
    >
      <CatalogStackSkeleton.Screen 
        name="HomeScreen1" 
        component={Screens.HomeScreen1}
        options={{
          title: 'Каталог',
        }} 
      />
      <CatalogStackSkeleton.Screen 
        name="HomeScreen2" 
        component={Screens.HomeScreen2} 
        options={{
          title: 'Подкаталог'
        }} 
      />
      <CatalogStackSkeleton.Screen 
        name="HomeScreen3" 
        component={Screens.HomeScreen3} 
        options={{
          title: 'Категория',
        }}
      />
      <CatalogStackSkeleton.Screen 
        name="HomeScreen4" 
        component={Screens.HomeScreen4} 
        options={{
          title: 'Фотография'
        }}
      />
    </CatalogStackSkeleton.Navigator>
  );
}