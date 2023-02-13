import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectPriceType from './SelectPriceType';

 
function PriceHeader(props) {
  return (
      <Row className='mb-2 text-center'>
        <Col>1 of 3</Col>
        <Col> 
        <SelectPriceType {...props} />
        </Col>
        <Col>3 of 3</Col>
      </Row>
  );
}

export default PriceHeader;
