import React from 'react'
import { Container } from 'react-bootstrap'
import JSONPretty from 'react-json-pretty'

const JSONPrettyMon = require('react-json-pretty/dist/monikai')

export default function SuccessBody ({ createValues }) {
  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <JSONPretty
        id='json-pretty'
        data={createValues}
        theme={JSONPrettyMon}
      ></JSONPretty>
    </Container>
  )
}
