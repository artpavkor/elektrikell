import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';


function Loading() {
  return (
    <Container>
        <div className='position-absolute top-50 start-50 translate-middle d-flex align-items-center'>
        <Spinner animation="border" variant="primary" />
        <div className='fs-4 px-2'>Elektrikell</div>
        </div>
    </Container>
  );
}

export default Loading;