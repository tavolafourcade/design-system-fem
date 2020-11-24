import React from 'react';
import { typeScale, primaryFont } from '../utils';
import styled from 'styled-components';
import {Illustrations, CloseIcon } from '../assets';
import { PrimaryButton } from './Buttons';

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  font-family: ${primaryFont};
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 40px;
  top: 40px;
  width: 20px;
  height: 20px;
  padding: 0;
`;


export const SignUpModal = () => {
  return(
    <ModalWrapper>
      <img src={Illustrations.SignUp} alt='Sign for an account' />

      <SignUpHeader>Sign Up</SignUpHeader>
      <SignUpText>Sign up today to get access to cool things! </SignUpText>
      <PrimaryButton>Sign Up!</PrimaryButton>
      <CloseModalButton aria-label='Close modal'>
        <CloseIcon/>
      </CloseModalButton>
    </ModalWrapper>
  )
}