import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorModal from '../ErrorModal'
import moment from "moment";
import { useState } from "react";

function DateForm({ show, setShow, setSearchDate }) {
  const[errorMessage, setErrorMessage] = useState (null)
  const handleClose = () => setShow(false);

  const handleSubmit = (event) => {
    // console.log(moment().format());
    event.preventDefault();

    let start = event.target.start.value;
    let end = event.target.end.value;

    const currentDate = moment();

    if(!start || !end) {
      setErrorMessage('Ag ja Loop kuupaev paevad olema maaratud');
      return;
    }
    if(currentDate.isBefore(start)) {
      setErrorMessage('Alg kuupaev paeb olema mineivikus');
      return;
    }
    if(currentDate.isAfter(end)) {
      setErrorMessage('Lopp kuupaev paeb olema tulevikus');
      return;
    };
    start = moment(start);
    end =moment (end);

    if (start.diff(end, 'days') < 1) {
      setErrorMessage('Alg ja Loop kuupaeva vahe paeb olema rohkem kui 1 paev');
      return;
    }

    setSearchDate({
      start: start.format(),
      end: end.format(),
      pastHours: currentDate.diff(start, "hours"),
    });
  };


  // const startTime = moment().subtract(1, "days").format("YYYY-MM-DDTHH:mm");
  // const endTime = moment().add(1, "days").format("YYYY-MM-DDTHH:mm");

  return ( 
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Valige aeg</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Alguspäev</Form.Label>
              <Form.Control
                name="start"
                // onInvalid={e => e.target.setCustomValidity('Sisestage väärtus')}
                // onInput={e => e.target.setCustomValidity('')}
                type="datetime-local"
                placeholder="start date"
                // max={startTime}
                // required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Lõppkuupäev</Form.Label>
              <Form.Control
                name="end"
                // onInvalid={e => e.target.setCustomValidity('Sisestage väärtus')}
                // onInput={e => e.target.setCustomValidity('')}
                type="datetime-local"
                placeholder="end date"
                // min={endTime}
                // required
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
