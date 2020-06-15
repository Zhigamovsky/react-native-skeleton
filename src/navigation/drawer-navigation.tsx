//@ts-ignore
import Log from '@zhigamovsky/styled-console-log'
import React, { useEffect, ReactElement } from 'react'
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerContentOptions
} from '@react-navigation/drawer';
import { Linking, Animated, StatusBar } from 'react-native'
import * as Types from 'src/types';
import * as Screens from './../screens';
import * as Navigation from './';
import styled from 'styled-components/native';

type TCustomDrawerContent = {
  (
    props: DrawerContentComponentProps<DrawerContentOptions>
  ): ReactElement
}
const CustomDrawerContent: TCustomDrawerContent = (props) => {
  useEffect(() => {
    Log.render('<CustomDrawerContent> has been rendered',props);
  }, []);

  useEffect(() => {
  
  }, [props])

  return (
    <DrawerContentScrollView 
      {...props}
      style={{
        backgroundColor: '#544367',
      }}
    >
      <DrawerItemList 
        {...props} 
        itemStyle={{
          width: '100%',
          margin: 0,
          padding: 0,
          backgroundColor: 'white',
          marginLeft: 0,
          marginTop: -3,
          borderRadius: 0,
          shadowColor: 'red',
          shadowOffset: {
            width: 10, 
            height: 10
          },
          shadowRadius: 10,
          shadowOpacity: 1.0
        }}
        labelStyle={{
          color: '#544367',
          fontSize: 17,
          fontWeight: '600'
        }}        
      />
        {/* <DrawerItem
          label="Help"
          onPress={() => Linking.openURL('https://mywebsite.com/help')}
        /> */}
    </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator();

export const DrawerNavigation: Types.NavElement = ({navigation}) => {
  useEffect(() => {
    Log.render('<DrawerNavigation> has been rendered', navigation, navigation.dangerouslyGetState());
  }, []);

  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        shadowColor: '#544367',
        shadowOffset: {
          width: 1, 
          height: 1
        },
        shadowRadius: 10,
        shadowOpacity: 1.0
      }}
    >
      <Drawer.Screen 
        name="Catalog" 
        component={Navigation.Catalog} 
      />
      <Drawer.Screen 
        name="Notifications" 
        component={Screens.NotificationScreen} 
      />
    </Drawer.Navigator>
  )
}