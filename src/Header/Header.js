import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.css"

export const Header = () => {
  return (
    <Navbar className='bg-primary'>
      <Container>
        <Navbar.Brand href="#home" className='text-white offset-5'>SY Infosystems</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Call us: <a href="#login">9876543210</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


// export default Header