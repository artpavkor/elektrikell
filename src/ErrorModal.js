import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { setErrorMessage } from './services/stateService';
import { useSelector, useDispatch } from 'react-redux';

function ErrorModal() {

  const handleClose = () => dispatch(setErrorMessage(null));

  const errorMessage = useSelector((state) => state.errorMessage);
  const dispatch = useDispatch();

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