import React, { ReactElement } from 'react';
import styled from 'styled-components/native'
import MDICon from 'react-native-vector-icons/MaterialCommunityIcons';

type TBackButton = {
  (
    props: {
      onPress?: () => void,
    }
  ): ReactElement
}
const BackButton: TBackButton = ({onPress}) => {
  return (
    <ButtonContainer>
      <MDICon name="backburger" size={30} color="#FFF" />
    </ButtonContainer>
  )
}
const ButtonContainer = styled.View`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
`;

export default BackButton;