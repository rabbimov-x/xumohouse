import React from 'react'
import { ButtonContainer } from './style'

const Button = ({children , cl ,pd}) => {
  return (
    <ButtonContainer cl = {cl} pd = {pd}>
        {children || "Generic button"}
    </ButtonContainer>
  )
}

export default Button

