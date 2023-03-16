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
