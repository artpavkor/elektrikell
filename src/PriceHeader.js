import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const types = ['Odavad tunnid'];
const typesTwo = ['Tiputunnid'];
 
function PriceHeader() {
  const [activeBtn, setActiveBtn] = useState(types[0])

  return (
      <Row className='mb-2 text-center'>
        <Col>1 of 3</Col>
        <Col> 
        <ButtonGroup aria-label="Basic example" className='bg-color-red' >
          {
            types.map(type => (
              <Button
                className='m-1 rounded'
                variant="secondary"
                key={type}
                active={activeBtn === type}
                onClick={() => setActiveBtn(type)}>
                <Link to='/' id='link'>{type}</Link>
              </Button>
            ))
          } 
           {
            typesTwo.map(type => (
              <Button
                className='m-1 rounded'
                variant="secondary"
                key={type}
                active={activeBtn === type}
                onClick={() => setActiveBtn(type)}>
                <Link to='footer' id='link'>{type}</Link>
              </Button>
            ))
          } 
           <Link to='footer'></Link>
        </ButtonGroup>
        </Col>
        <Col>3 of 3</Col>
      </Row>
  );
}

export default PriceHeader;
