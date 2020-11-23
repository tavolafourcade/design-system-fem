import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton, 
  { SecondaryButton, 
    TertiaryButton } from './components/Buttons';

import { GlobalStyle } from './utils';

const App = () => (
  <div>
    <PrimaryButton modifiers={['small','warning']}>Hello World!</PrimaryButton>
    <SecondaryButton modifiers={['large', 'warning']}>Hello World again!</SecondaryButton>
    <TertiaryButton modifiers>Este es mi botón terciario</TertiaryButton>
    <GlobalStyle/>
  </div>
);


ReactDOM.render(<App/>, document.querySelector('#root'));