import React from 'react'
import { Form, Button, Container, Card } from 'react-bootstrap'
import { Formik } from 'formik'

import FormGroup from '../commons/formGroup'
import { createUserSchema } from '../commons/schemas'

export default function CreateUserForm ({
  createValues,
  getButtonHover,
  setModalShow,
  setCreateValues,
  style
}) {
  const { hover, setHover } = getButtonHover()

  return (
    <Card
      style={style.cardForm}
      className='d-flex flex-column align-items-center'
    >
      <Card.Header
        style={style.cardHeader}
        className='d-flex justify-content-center align-items-center'
      >
        <h2 style={style.cardLogo}> {'{'} </h2>
        Welcome to juacaxDev
        <h2 style={style.cardLogo}> {'}'} </h2>
      </Card.Header>
      <Formik
        initialValues={createValues}
        validationSchema={createUserSchema}
        onSubmit={values => {
          setModalShow(true)
          setCreateValues(values)
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            style={style.formContainer}
            className='d-flex flex-column align-items-center'
          >
            <FormGroup
              type='text'
              name='name'
              label='Name'
              placeholder='Complete name'
              values={values.name}
              handleChange={handleChange}
              touched={touched.name}
              errors={errors.name}
              style={style}
            />
            <FormGroup
              type='email'
              name='email'
              label='Email'
              placeholder='Email'
              values={values.email}
              handleChange={handleChange}
              touched={touched.email}
              errors={errors.email}
              style={style}
            />
            <FormGroup
              type='password'
              name='password'
              label='Password'
              placeholder='Password'
              values={values.password}
              handleChange={handleChange}
              touched={touched.password}
              errors={errors.password}
              style={style}
            />
            <FormGroup
              as='textarea'
              rows={3}
              type='text'
              name='textarea'
              label='Text Area'
              placeholder=''
              values={values.textarea}
              handleChange={handleChange}
              touched={touched.textarea}
              errors={errors.textarea}
              style={style}
            />
            <Container
              style={style.formButtonContainer}
              className='d-flex flex-column align-items-end'
            >
              <Button
                type='submit'
                style={style.formButton(hover)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Submit
              </Button>
            </Container>
          </Form>
        )}
      </Formik>
    </Card>
  )
}
