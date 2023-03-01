import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import moment from "moment";

function DateForm({ show, setShow, setSearchDate }) {
  const handleClose = () => setShow(false);

  const handleSubmit = (event) => {
    // console.log(moment().format());
    event.preventDefault();

    const start = event.target.start.value;
    const end = event.target.end.value;
    setSearchDate({
      start: moment(start).format(),
      end: moment(end).format(),
      pastHours: moment().diff(moment(start), "hours"),
    });
  };

  const startTime = moment().subtract(1, "days").format("YYYY-MM-DDTHH:mm");
  const endTime = moment().add(1, "days").format("YYYY-MM-DDTHH:mm");

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
                onInvalid={e => e.target.setCustomValidity('Sisestage väärtus')}
                onInput={e => e.target.setCustomValidity('')}
                type="datetime-local"
                placeholder="start date"
                max={startTime}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Lõppkuupäev</Form.Label>
              <Form.Control
                name="end"
                onInvalid={e => e.target.setCustomValidity('Sisestage väärtus')}
                onInput={e => e.target.setCustomValidity('')}
                type="datetime-local"
                placeholder="end date"
                min={endTime}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Saada
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default DateForm;
