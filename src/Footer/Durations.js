import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useSelector, useDispatch } from 'react-redux';
import { setHourRange } from '../services/stateService';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// 

function Durations() {
  const { durationParam } = useParams();
  const navigate = useNavigate();
  // useSelector это хук которой слушает redux облако и если измениться состояние то useSelector 
  // инициализирует отрисовку компонента
  // useSelector принимает функцию как аргумент и єта функция определяет которое состояние слушать

  const hourRange = useSelector((state) => state.hourRange);
  // Для иницилизорования изменения состояния используется dispatch
  // dispatch это тот кто отправит action в облако store / redux состояние
  // dispatch передаст наш action в reducer тот запустит функцию которая изменит состояние что потом подхватит useSelector
  const dispatch = useDispatch();

  const durations = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleClick = (duration) => {
    if (durationParam) {
      navigate("/")
    }
    // В dicpatch передаем action а в action передаем новые данные о состоянии 
    // В reducer передается обьект { type : setHourRange, payload: duration}
    dispatch(setHourRange(duration))
  }
  // Eventy 
  // События это что-то произошло в браузере   
  // Например пользователь нажал что-то у нас на проекте, то браузер схватил ето событие и передал нашему проекту 
  // Если у нас стоит в этом месте триггер события то этот триггер зап. обработчик собития
  // триггер наз. с ключевым слова 'ON'
  // обработчик мы привыкли наз. 'handle'
  // Браузер передает в обработчик обьект event в котором содержиться вся инф. об этом обьекте
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