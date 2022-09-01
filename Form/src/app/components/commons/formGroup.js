import React from 'react'
import { Form } from 'react-bootstrap'

export default function FormGroup ({
  as,
  rows,
  label,
  type,
  name,
  placeholder,
  value,
  handleChange,
  touched,
  errors,
  style
}) {
  return (
    <Form.Group style={style.formInput}>
      <Form.Label style={style.formLabel}> {label} </Form.Label>
      <Form.Control
        as={as}
        rows={rows}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        isValid={touched && !errors}
        isInvalid={!!errors}
        style={style.form}
      />
      <Form.Control.Feedback type='invalid'> {errors} </Form.Control.Feedback>
    </Form.Group>
  )
}
