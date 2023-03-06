import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorModal from '../ErrorModal'
import moment from "moment";
import { useState } from "react";

function DateForm({ show, setShow, setSearchDate }) {
  const[errorMessage, setErrorMessage] = useState (null);
  const handleClose = () => setShow(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    let start = event.target.start.value;
    let end = event.target.end.value;

    const currentDate = moment();

    if(!start || !end) {
      setErrorMessage('Alg ja Loop kuupaevad paevad olema maaratud');
      return;
    }

    if(currentDate.isBefore(start)) {
      setErrorMessage('Alg kuupaev peab olema minevikus');
      return;
    }

    if(currentDate.isAfter(end)) {
      setErrorMessage('Lopp kuupaev peab olema tulevikus');
      return;
    };

    start = moment(start);
    end =moment (end);

    if (start.diff(end, 'days') >= 1) {
      setErrorMessage('Alg ja Loop kuupaeva vahe paeb olema rohkem kui 1 paev');
      return;
    }

    setSearchDate({
      start: start.format(),
      end: end.format(),
      pastHours: currentDate.diff(start, 'hours'),
    });
  };


  return ( 
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mara kuupäevad</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Alg. kuupäev</Form.Label>
              <Form.Control
                name="start"
                type="datetime-local"
                placeholder="start date"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Lõppkuupäev</Form.Label>
              <Form.Control
                name="end"
                type="datetime-local"
                placeholder="end date"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Saada
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
      <ErrorModal errorMessage={errorMessage} handleClose={()=> setErrorMessage(null)} />
    </>
  );
}

export default DateForm;
