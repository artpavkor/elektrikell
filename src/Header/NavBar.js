import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../logo.svg';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/elektrikell"> <img
          src={Logo}
          height="30px"
          className="d-inline-block align-top"
          alt="logo"
        /></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


