import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectPriceType from './SelectPriceType';
import { useEffect, useState } from 'react';
import getCurrentPrice from '../services/apiService';
import { setErrorMessage } from "../services/stateService";
import { useDispatch } from 'react-redux';
 
function PriceHeader(props) {
  
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentPrice()
      .then(( { success, data, message }) => {
        if (!success) {
          throw message[0];
      }
        const kwPrice = +(data[0].price / 10 * 1.2).toFixed(2) 
        setData (kwPrice)
      })
      .catch((error) => dispatch(setErrorMessage(error.toString)));
      
  }, [dispatch]);


  return (
    <>
      <Row className='mb-5'>
        <Col>
        <span className='fs-5 ms-3'>Elektri hind hetkel on</span> <br/>
        <span className='fs-5 ms-3  p-1 rounded-2 span_red'>ikka väga kõrge</span>
        </Col>
        <Col className='text-center'> 
        <br/>
        <SelectPriceType {...props}/>
        </Col>
        <Col className='text-end'>
        <h3 className='fs-1'>{data}</h3> 
        <p>senti / kilovatt-tund</p>
        </Col>
      </Row>
      </>
  );
}

export default PriceHeader;
