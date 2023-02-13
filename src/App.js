import { useState } from 'react';
import './App.scss';
import  Container  from 'react-bootstrap/Container';
import NavBar from './Header/NavBar';
import PriceHeader from './Header/PriceHeader';
import FooterHighPrice from './Footer/FooterHighPrice';
import Body from './Body/Body';
import FooterLowPrice from './Footer/FooterLowPrice'
// import ErrorModal from './ErrorModal';
// import Loading from './Loading';

function App() {
  const [activePrice, setActivePrice] = useState('low')
  // if (true) return <Loading />;
  // if(true) return <ErrorModal handleClose = {() => {}} errorMessage = "Osibka dostupa" />;

  return (
    <>
   <div className = "container-wrapper pb-2">
    <Container>
      <NavBar />
      <PriceHeader activePrice = {activePrice} setActivePrice = {setActivePrice}/>
      <Body />
    </Container>
    </div>
    {activePrice === 'low' ? <FooterLowPrice /> : <FooterHighPrice />}
  </>
  );
}

export default App;
