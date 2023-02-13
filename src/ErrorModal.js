import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ErrorModal ({handleClose, errorMessage}) {
    return (
        <Modal show={!!errorMessage} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ErrorModal;