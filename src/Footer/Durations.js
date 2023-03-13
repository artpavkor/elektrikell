import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useSelector, useDispatch } from 'react-redux';
import { setHourRange } from '../services/stateService';

function Durations() {

 const buttons = [1, 2, 3, 4, 5, 6, 7, 8];
 const hourRange = useSelector((state) => state.hourRange);

 const dispatch = useDispatch();

  return (
    <ButtonToolbar aria-label="Toolbar with button groups" className='justify-content-center'>
      <ButtonGroup aria-label="First group">
        {buttons.map(time => (
            <Button
                key={time} 
                active={time === hourRange} 
                onClick = {() => dispatch (setHourRange(time))}>
                {time}h
            </Button>
        ))}
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default Durations;