import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../logo.svg';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">
          <Nav className="me-auto">
            <Link to="/about" className='nav-link'>Minust</Link>
            <Link to="/hign" className='nav-link'>Tipptund</Link>
          </Nav>
          <img
            src={Logo}
            height="30px"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}


export default NavBar;