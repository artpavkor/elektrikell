import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import moment from "moment";

function DateForm({ show, setShow, setSearchDate }) {
  const handleClose = () => setShow(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const start =event.target.start.value;
    const end =event.target.end.value;
    setSearchDate({
        start: moment(start).format(),
        end: moment(end).format(),
        pastHours: moment().diff(moment(start), 'hours'),
    })
  }

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Start date</Form.Label>
              <Form.Control name="start" type="datetime-local" placeholder="start date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>End date</Form.Label>
              <Form.Control name="end" type="datetime-local" placeholder="end date" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default DateForm;
