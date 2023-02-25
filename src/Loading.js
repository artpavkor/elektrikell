import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import logo_loading from './logo_loading.png'


function Loading() {
  return (
    <Container>
        <div className='background_loading position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center'>
        <Spinner animation="border" className='logo_loading' />
        {/* <div className='fs-4 px-2'>Elektrikell</div> */}
        <img src={logo_loading} alt = "logo loading"></img>
        </div>
    </Container>
  );
}

export default Loading;

