import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Home} from '../mycontents/Home'
import {Skills} from '../mycontents/Skills'
import {About} from '../mycontents/About'
import {Contact} from '../mycontents/Contact'
import {Projects} from '../mycontents/Projects'

import "bootstrap/dist/css/bootstrap.css"
import './Menu.css'

export const Menu = () => {
    return (
      <div>
        <Navbar bg="dark" expand="lg">
          <Container fluid>
          <Navbar.Brand href="#/Home" className='p3'><span className='p1'>Port</span><span className='p2'>folio</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 offset-1"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#/Home" className='text-white offset-2 t6'><span className='t5'>H</span>ome</Nav.Link>
                <Nav.Link href="#/About" className='text-white offset-2 t6'><span className='t5'>A</span>bout</Nav.Link>
                <Nav.Link href="#/Skills" className='text-white offset-2 t6'><span className='t5'>S</span>kills</Nav.Link>
                <Nav.Link href="#/Projects" className='text-white offset-2 t6'><span className='t5'>P</span>rojects</Nav.Link>
                <Nav.Link href="#/Contact" className='text-white offset-2 t6'><span className='t5'>C</span>ontact</Nav.Link>
                {/* <Nav.Link href="#/Contact" className='text-white'>Contact Us</Nav.Link> */}
                
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 search"
                  aria-label="Search"
                />
                <Button variant="outline-success" className='search'>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <HashRouter>
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/skills' element={<Skills/>} />
            <Route path='/projects' element={<Projects/>} />

            <Route path='/' element={<Home/>} />
            <Route path='*' element={<Navigate to='/home'/>} />
          </Routes >
        </HashRouter>
      </div>
        
      );
}
