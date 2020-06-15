import React, { ReactElement } from 'react';
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons';

type TMenutButton = {
  (
    props: {
      onPress?: () => void,
    }
  ): ReactElement
}
const MenuButton: TMenutButton = ({onPress}) => {
  return (
    <ButtonContainer activeOpacity={0.8} onPress={onPress}>
      <Icon name="ios-apps" size={30} color="#FFF" />
    </ButtonContainer>
  )
}
const ButtonContainer = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
`;

export default MenuButton;