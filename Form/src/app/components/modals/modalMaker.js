import React from 'react'
import { Modal } from 'react-bootstrap'

export default function ModalMaker ({
  title,
  subtitle,
  body,
  footer,
  show,
  onHide,
  style
}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header
        closeButton
        style={style.modalTitleContainer}
        className='d-flex align-items-center justify-content-center'
      >
        <Modal.Title
          id='contained-modal-title-vcenter'
          className='d-flex flex-column align-items-center'
        >
          <h4 style={style.modalTitle}> {title} </h4>
          {subtitle ? <h4 style={style.modalSubtitle}> {subtitle} </h4> : null}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={style.modalBody}> {body} </Modal.Body>
      {footer ? (
        <Modal.Footer style={style.modalBody}> {footer} </Modal.Footer>
      ) : null}
    </Modal>
  )
}
