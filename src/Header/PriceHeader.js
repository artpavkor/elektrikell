import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import { Button, Container } from 'react-bootstrap';
import getCurrentPrice from '../services/apiService';
import SelectPriceType from './SelectPriceType';
import { setErrorMessage, setShowForm } from '../services/stateService';
import { useDispatch } from 'react-redux';

function PriceHeader(props) {

  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentPrice()
      .then(({ success, data, message }) => {
        if (!success) {
          throw message[0];
        }
        const actualPrices = +(data[0].price / 10 * 1.2).toFixed(2)
        setData(actualPrices)
      })
      .catch((error) => dispatch(setErrorMessage(error.toString)));
  }, [dispatch]);

  return (
    <Container className='d-flex align-items-center flex-wrap'>
      <Col>
        <div>
          <Button className="outline-secondary" size="sm" onClick={() => dispatch(setShowForm(true))}>
            Mara kuupäevad
          </Button>
        </div>
      </Col>
      <Col className='text-center'>
        <div><SelectPriceType {...props} /></div>
      </Col>
      <Col className='text-end'>
        <div>
          <h3 className='fs-1'>{data}</h3>
          <p>senti / kilovatt-tund</p>
        </div>
      </Col>
    </Container>
  );
}

export default PriceHeader;
