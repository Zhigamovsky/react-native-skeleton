//@ts-ignore
import Log from '@zhigamovsky/styled-console-log';
import React, { useEffect } from 'react';
import { Button, View } from 'react-native';

import * as Types from 'src/types';

const NotificationsScreen: Types.NavElement = ({ navigation }) => {
  useEffect(() => {
    Log.render('<NotificationsScreen> has been rendered');
  }, [])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('Catalog')} title="К Каталогу" />
    </View>
  );
}

export default NotificationsScreen;