import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import logo_loading from './logo_loading.png';
import { useSelector } from 'react-redux';


function Loading() {

  const lowPriceTimestamp = useSelector((state) => state.lowPriceTimestamp)

  if (lowPriceTimestamp) return null;

  return (
    <Container>
      <div className='background_loading position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center'>
        <Spinner animation="border" className='logo_loading' />
        <img src={logo_loading} alt="logo loading"></img>
      </div>
    </Container>
  );
}

export default Loading;

