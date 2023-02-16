import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.svg'
function NavBar() {
  return (
      <Navbar bg="light" className='shadow-0'>
        <Container>
          <Navbar.Brand href="#home">
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