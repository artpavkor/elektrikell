import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectPriceType from './SelectPriceType';

 
function PriceHeader(props) {
  return (
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
        <h3 className='fs-1'>19.78</h3> 
        <p>senti / kilovatt-tund</p>
        </Col>
      </Row>
  );
}

export default PriceHeader;
