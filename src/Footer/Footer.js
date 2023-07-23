import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'
import "bootstrap/dist/css/bootstrap.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


export const Footer = () => {
    return (
        <Navbar expand="lg" bg="dark" className='footer'>
          <Container>
            <Navbar.Brand className='offset-5 footer1 mx-auto' >&copy;SarthakYeole All Rights Reserved
          
          <Row>
            <Col>
            <a href='https://wa.me/919763016854'><BsWhatsapp style={{color:'white', fontSize:'22px'}}/></a>
            &emsp;
            <a href='https://www.linkedin.com/in/sarthak-yeole-523560214'><BsLinkedin style={{color:'white', fontSize:'22px'}}/></a>
            &emsp;
            <a href='https://www.instagram.com/sarthak_17_12/?igshid=ZDdkNTZiNTM='><BsInstagram style={{color:'white', fontSize:'22px'}}/></a>
            &emsp;
            <a href='https://github.com/SarthakYeole17'><BsGithub style={{color:'white', fontSize:'22px'}}/></a>

            </Col>
          </Row>
          </Navbar.Brand>
          </Container>
        </Navbar>
      );
}
