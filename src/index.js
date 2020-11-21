import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton, 
  { SecondaryButton, 
    TertiaryButton } from './components/Buttons';

import { GlobalStyle } from './utils';

const App = () => (
  <div>
    <PrimaryButton>Hello World!</PrimaryButton>
    <SecondaryButton>Hello World again!</SecondaryButton>
    <TertiaryButton>Este es mi botón terciario</TertiaryButton>
    <GlobalStyle/>
  </div>
);


ReactDOM.render(<App/>, document.querySelector('#root'));