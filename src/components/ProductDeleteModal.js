import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProductDeleteModal(props) {
  const{showModal,handleHideModal,handleOkModal}=props

  return (
    <>
      <Modal show={showModal} onHide={handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleOkModal}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductDeleteModal;