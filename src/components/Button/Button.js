import React from 'react'
import { Button as ButtonComponent } from './styled'

const Button = ({ text, onClick }) => {


  return (
           <ButtonComponent onClick={onClick}>
               <h1>{text}</h1>
           </ButtonComponent>

  )





}


export default Button