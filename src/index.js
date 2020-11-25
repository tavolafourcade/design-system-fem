import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import
  { SignUpModal } from './components';

import { GlobalStyle, defaultTheme, darkTheme } from './utils';

const App = () => {

  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme? darkTheme : defaultTheme}>
      <button style={{  margin: '0 16px 24px', 
                        padding: '8px', 
                        background: 'none'}} onClick={() => setUseDarkTheme(true)}>Dark Theme</button>

      <button style={{  margin: '0 16px 24px', 
                        padding: '8px', 
                        background: 'none'}} onClick={() => setUseDarkTheme(false)}>Default Theme</button>
      
      <button style={{  margin: '0 16px 24px', 
                        padding: '8px', 
                        background: 'none'}} onClick={() => setShowModal(!showModal)}>Toggle Modal</button>

      <div style={{
        background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor, 
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'

        }}>
        {/* <PrimaryButton >Hello World!</PrimaryButton>  */}
        {/* modifiers={['small','error']} */}
        {/* <SecondaryButton>Hello World again!</SecondaryButton> */}
        {/* modifiers={['large','warning', 'secondaryButtonWarning']} */}
        {/* <TertiaryButton>Este es mi botón terciario</TertiaryButton> */}
        {/* modifiers={['success', 'tertiaryButtonSuccess']} */}

        <SignUpModal showModal={showModal} setShowModal={setShowModal}/>
        <GlobalStyle/>
      </div>
      
    </ThemeProvider>
    
  );
}


ReactDOM.render(<App/>, document.querySelector('#root'));