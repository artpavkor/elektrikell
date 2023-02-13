import './App.scss';
import  Container  from 'react-bootstrap/Container';
import NavbarComponent from './NavBar';
import PriceHeader from './PriceHeader';
import FooterHighPrice from './FooterHighPrice';
import FooterComponent from './footer';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
   <div className = "container-wrapper pb-2">
    <Container>
      <NavbarComponent />
      <PriceHeader />
      <div className='chart'></div>
    </Container>
    </div>
    <Routes>
      <Route path="/" element ={<FooterComponent />}/>
      <Route path="footer" element ={<FooterHighPrice />}/>
    </Routes>
    
  </>
  );
}

export default App;
