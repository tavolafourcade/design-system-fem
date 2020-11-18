import styled from 'styled-components';

const primaryColor =  '#DB6809';
const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
`


const PrimaryButton = styled(Button)`
  background-color: ${primaryColor};
  border: none;
  color: white;
  
`

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${primaryColor};
  color: ${primaryColor};
`

export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${primaryColor};
`


export default PrimaryButton;