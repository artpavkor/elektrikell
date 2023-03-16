import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useSelector, useDispatch } from 'react-redux';
import { setHourRange } from '../services/stateService';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Durations() {
  const { durationParam } = useParams();
  const navigate = useNavigate();

  const hourRange = useSelector((state) => state.hourRange);
  const dispatch = useDispatch();

  const durations = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleClick = (duration) => {
    if (durationParam) {
      navigate("/")
    }
    dispatch(setHourRange(duration))
  }

  return (
    <ButtonToolbar aria-label="Toolbar with button groups" className='justify-content-center'>
      <ButtonGroup aria-label="First group">
        {durations.map(duration => {
          const selectedDuration = durationParam ? + durationParam : hourRange
          return (
            <Button
              key={duration}
              active={duration === selectedDuration}
              onClick={() => handleClick(duration)}>
              {duration}h
            </Button>
          )
        }
        )}
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default Durations;