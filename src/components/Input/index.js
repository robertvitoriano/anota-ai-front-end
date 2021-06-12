import React, { useState, useEffect } from 'react'

import { Input as InputElement, Label } from './style'

const Input = ({label, ...rest}) => {

  return (
    <>
      <Label>{label}</Label>
      <InputElement  {...rest} />
    </>

  )
}

export default Input