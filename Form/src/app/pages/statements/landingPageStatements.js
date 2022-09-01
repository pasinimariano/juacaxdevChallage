import { useState } from 'react'

export const getButtonHover = () => {
  const [hover, setHover] = useState(false)

  return { hover, setHover }
}

export const getModalShow = () => {
  const [modalShow, setModalShow] = useState(false)

  return { modalShow, setModalShow }
}

const createValuesInitialState = {
  name: '',
  email: '',
  password: '',
  textarea: ''
}

export const getCreateValues = () => {
  const [createValues, setCreateValues] = useState(createValuesInitialState)

  return { createValues, setCreateValues }
}
