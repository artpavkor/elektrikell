import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import getCurrentPrice from '../services/apiService';
import SelectPriceType from './SelectPriceType';
import { setErrorMessage } from '../services/stateService';
import { useDispatch } from 'react-redux';

// Компоненты могут принимать props(property)  
// Property передаеться комноненту так же как и свойство HTML елементов
// Property  могут быть любым типом данных 
// Каждую Property переданную компоненту собираетяс в один обьект 
// компонент принимает только один аргумент и  зачастую его наз. 'props'

function PriceHeader(props) {

  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  // useEffect - это хук который запускается только после того как компонент закончил отрисовку 
  // useEffect принимает два компонента
  // 1 функция которая запустится когда компонент закончил свою отрисовку 
  // 2 это список зависимостей, массив
  // Список зависимостей контролирует запуск функции первого аргумента
  // Если в зависимостях изменились данные то useEffect заново запускается
  // Компонент может заново отрисоваться но useEffect не запустится, если ето изменение его не касается  
  // Если передать пустой массив в зависимости то useEffect отработает один раз после первай отрисовки компонента
  // useEffect также гарантирует что если в ньом мы будем менять состояние компонента то произойдет только одна отрисовка
  // компонента и после етой отрисовки useEffect больше не запустится 

  useEffect(() => {
    getCurrentPrice()
      .then(({ success, data, message }) => {
        if (!success) {
          throw message[0];
        }
        const actualPrices = +(data[0].price / 10 * 1.2).toFixed(2)
        setData(actualPrices)
      })
      .catch((error) => dispatch(setErrorMessage(error.toString)));
  }, [dispatch]);

  return (
    <>
      <Row className='mb-5'>
        <Col>
          <span className='fs-5 ms-3'>Elektri hind hetkel on</span> <br />
          <span className='fs-5 ms-3  p-1 rounded-2 span_red'>ikka väga kõrge</span>
        </Col>
        <Col className='text-center'>
          <br />
          <SelectPriceType {...props} />
        </Col>
        <Col className='text-end'>
          <h3 className='fs-1'>{data}</h3>
          <p>senti / kilovatt-tund</p>
        </Col>
      </Row>
    </>
  );
}

export default PriceHeader;
