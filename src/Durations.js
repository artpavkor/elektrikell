import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function DurationsComponent() {

    const [activeTime, setActiveTime] = useState(1);

    const buttons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <ButtonToolbar aria-label="Toolbar with button groups" className='justify-content-center'>
      <ButtonGroup aria-label="First group">
        {buttons.map(time => (
            <Button 
                key={time} 
                active={time === activeTime} 
                onClick = {() => setActiveTime(time)}>
                {time}h
            </Button>
        ))}
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default DurationsComponent;