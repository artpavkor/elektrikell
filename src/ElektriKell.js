import { useEffect, useState } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import NavBar from './Header/NavBar';
import PriceHeader from './Header/PriceHeader';
import FooterHighPrice from './Footer/FooterHighPrice';
import Body from './Body/Body';
import FooterLowPrice from './Footer/FooterLowPrice'
import Loading from './Loading';
import ErrorModal from './ErrorModal';
import { useParams } from 'react-router-dom';

function ElektriKell() {

  // useParams это хук от react-router-dom который слушает переданные ему параметры с ссылке и назначает из всех в один обьект
  // при получению новых параметров инициализируеться рендер новых компонентов

  const params = useParams;
  const [activePrice, setActivePrice] = useState('low')

  useEffect(() => {
    params.activePrice && setActivePrice(params.activePrice);
  }, [params])

  return (
    <>
      <div className="container-wrapper pb-2">
        <Container>
          <NavBar />
          <PriceHeader activePrice={activePrice} setActivePrice={setActivePrice} />
          <Body activePrice={activePrice} />
        </Container>
      </div>
      {activePrice === 'low' ? <FooterLowPrice /> : <FooterHighPrice />}
      <Loading />
      <ErrorModal />
    </>
  );
}

export default ElektriKell;
