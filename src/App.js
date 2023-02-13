import { useState } from 'react';
import './App.scss';
import  Container  from 'react-bootstrap/Container';
import NavbarComponent from './NavBar';
import PriceHeader from './PriceHeader';
import FooterComponent from './footer';
import FooterHighPrice from './FooterHighPrice';

function App() {
  const [activePrice, setActivePrice] = useState('low')

  return (
    <>
   <div className = "container-wrapper pb-2">
    <Container>
      <NavbarComponent />
      <PriceHeader activePrice = {activePrice} setActivePrice = {setActivePrice}/>
      <div className='chart'></div>
    </Container>
    </div>
    {activePrice === 'low' ? <FooterComponent /> : <FooterHighPrice />}
  </>
  );
}

export default App;
