import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Contact.css'


// const scriptURL = 'https://script.google.com/macros/s/AKfycbyWEvhLbS0tnBYZi-5SIKSFrO3qjo9-omXxXj9doTcLy-CFhgvzL4PCBK3aIiEFRfymkQ/exec'
// const form = document.forms['submit-to-google-sheet']

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//     .then(response => console.log('Success!', response))
//     .catch(error => console.error('Error!', error.message))
// })



export const Contact = () => {
  return (

    <div className='container'>

      <form action="https://formspree.io/f/xeqbooao" method="post">
        <div className='up'>
          <h1> <span className='txt1'>Contact</span> <span className='txt2'>Me</span></h1>
        </div>
        <Row>
          <Col>
            <h4 className='contxt'>First Name </h4>
            <Form.Control name="Fname" placeholder="Enter First name" />
          </Col>
          <Col>
            <h4 className='contxt'>Last Name </h4>
            <Form.Control name="Lname" placeholder="Enter Last name" />
          </Col>
        </Row>
        <h4 className='contxt'>Email </h4>

        <Form.Group className="mb-3" controlId="formGroupPassword">

          <Form.Control type="email" name="Email" placeholder="Enter Email" className='emailtxt' />
        </Form.Group>


        <h4 className='contxt'>Mobile Number </h4>

        <Form.Group className="mb-3" controlId="formGroupPassword">

          <Form.Control type="number" name="Mobno" placeholder="Enter Mobile Number" className='emailtxt' />
        </Form.Group>


        <h4 className='contxt'>Message </h4>

        <Form.Group className="mb-3" controlId="formGroupPassword">

          <Form.Control type="textarea" name="Message" placeholder="Enter message" className='emailtxt1' />
        </Form.Group>

        <Row xs={1}>
          <Col>
            <Button type="submit" variant="outline-success" className='contxt1'><span>Send!!</span></Button>
          </Col>
        </Row>
      </form>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.712970731534!2d74.87621107438089!3d21.361813976257775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf3203969b41c7%3A0xb4050432d04ef5b8!2sR.%20C.%20Patel%20Institute%20of%20Technology%2C%20Shirpur!5e0!3m2!1sen!2sin!4v1689657476059!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


    </div>

  );
}
