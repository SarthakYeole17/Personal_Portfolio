import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic1 from '../images/image.png';
import './Home.css'
import 'animate.css'
import resumemy from '../docs/ownresume.pdf'



export const Home = () => {
    return (
        <Container>
        <Row>
          <Col xs={6}>
          <div>
           <img className='img' src={pic1} />
           </div>
          </Col >
          <Col xs={6}>
            <div>
          <div>
                     <h4 className='txt4 '>Hello, my name is,</h4>
                </div>
                <div>
                    <h2 className='txt5 wow animate__animated animate__fadeInRightBig'>Sarthak <span className='txt5_i'>Yeole</span></h2>
                </div>
                <div>
                    <h3 className='txt6 '>Full Stack Developer</h3>
                </div>
                <div className='container'>
                <div className='btn1'>
                <Row xs={1} md={3}>
                    <Col>
                    <a href={resumemy} download={"SarthakYeole"} target='_blank'>
                <Button variant="outline-success" className=''><span>Download CV</span></Button>
                </a>
                </Col>
                </Row>
                </div>
                </div>
                </div>
          </Col>
        </Row>
        {/* <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row> */}
      </Container>

        // <diV>
        //    <img className='img' src={pic1} />
        //    </diV>
      );
}
