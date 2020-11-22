import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton, 
  { SecondaryButton, 
    TertiaryButton } from './components/Buttons';

import { GlobalStyle } from './utils';

const App = () => (
  <div>
    <PrimaryButton disabled>Hello World!</PrimaryButton>
    <SecondaryButton disabled>Hello World again!</SecondaryButton>
    <TertiaryButton disabled>Este es mi botón terciario</TertiaryButton>
    <GlobalStyle/>
  </div>
);


ReactDOM.render(<App/>, document.querySelector('#root'));