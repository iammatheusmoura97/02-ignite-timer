import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonVariantProps {
  variant: ButtonVariant
}

const buttonVariantColor = {
  primary: 'purple',
  secondary: 'blue',
  success: 'green',
  danger: 'orange',
}

export const ButtonContainer = styled.button<ButtonVariantProps>`
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 4px;
  margin: 8px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  /*${(props) => {
    return css`
      background-color: ${buttonVariantColor[props.variant]};
    `
  }}*/
`
