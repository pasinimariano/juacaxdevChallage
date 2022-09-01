import React, { Suspense } from 'react'
import { Container, Image } from 'react-bootstrap'

import { Styles } from './styles/landingPageStyles'
import * as Statement from './statements/landingPageStatements'
import Logo from '../assets/logo.png'

const CreateUserForm = React.lazy(() =>
  import('../components/forms/createUserForm')
)
const ModalMaker = React.lazy(() => import('../components/modals/modalMaker'))
const SuccessBody = React.lazy(() =>
  import('../components/modals/successModal')
)

export default function LandingPage () {
  const { modalShow, setModalShow } = Statement.getModalShow()
  const { createValues, setCreateValues } = Statement.getCreateValues()

  return (
    <div>
      <Container
        fluid
        style={Styles.navigation}
        className='d-flex justify-content-end align-items-center'
      >
        <Image src={Logo} alt='JuacaxDev Logo' style={Styles.logo} />
      </Container>
      <Container
        fluid
        style={Styles.body}
        className='d-flex justify-content-center align-items-center'
      >
        <CreateUserForm
          createValues={createValues}
          getButtonHover={Statement.getButtonHover}
          setModalShow={setModalShow}
          setCreateValues={setCreateValues}
          style={Styles}
        />
      </Container>
      <Suspense fallback={<p> Loading... </p>}>
        <ModalMaker
          title='The record submitted'
          subtitle='was successfully validated'
          body={<SuccessBody createValues={createValues} />}
          show={modalShow}
          onHide={() => {
            setModalShow(false)
          }}
          style={Styles}
        />
      </Suspense>
    </div>
  )
}
