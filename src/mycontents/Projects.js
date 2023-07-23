import React from 'react'
import Button from 'react-bootstrap/Button';
// import ProgressBar from 'react-bootstrap/ProgressBar'; 
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "bootstrap/dist/css/bootstrap.css"
import './Projects.css'
import bank from '../images/Bank.jpg'
import invent from '../images/Inventory.png'
import assess from '../images/Assessment.png'
import {BsGithub} from 'react-icons/bs'

import 'animate.css'

export const Projects = () => {
    return (
        <div>
        <div className='up'>
            <h1 className='wow animate__animated animate__fadeInDown'> <span className='txt1'>My</span><span className='txt2'> Projects</span></h1>
        </div>

<div className='container card6'>
<Row xs={1} md={3} className="g-4">
    {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
            <Card className='proj-card1 card1'>
                <Card.Img variant="top" className='bank mx-auto' src={bank} />
                <Card.Body>
                    <Card.Title className='head-txt'><h4>Bank Management System</h4></Card.Title>
                    <Card.Text className='proj-txt'>
                    In this project add new user and registered user can
check the balance. Admin can withdraw, deposit, transfer
money.
                        
                    </Card.Text>
                    <a href='https://github.com/SarthakYeole17'><BsGithub style={{color:'white', fontSize:'40px'}}/></a>
                    {/* <Button variant="outline-info" className='button' size="sm"></Button> */}
                </Card.Body>
            </Card>
        </Col>
    ))}

    {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
            <Card className='proj-card1 card2'>
                <Card.Img variant="top" className='bank mx-auto' src={invent} />
                <Card.Body>
                    <Card.Title className='head-txt'><h4>Inventory Management</h4></Card.Title>
                    <Card.Text className='proj-txt'>
                    It is a web application in which store the data of raw and
process material using Spring Framework.

                        
                    </Card.Text>
                    <a href='https://github.com/SarthakYeole17'><BsGithub style={{color:'white', fontSize:'40px'}}/></a>
                    
                </Card.Body>
            </Card>
        </Col>
    ))}

    {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
            <Card className='proj-card1 card3'>
                <Card.Img variant="top" className='bank mx-auto' src={assess} />
                <Card.Body>
                    <Card.Title className='txt'><h4>Candidate Assessment Tool</h4></Card.Title>
                    <Card.Text className='proj-txt'>
                    In this project there are Admin, HR and Candidate. Project based on OCEAN
Model. These are five qualities of candidate.

                        
                    </Card.Text>
                    <a href='https://github.com/SarthakYeole17'><BsGithub style={{color:'white', fontSize:'40px'}}/></a>
                     </Card.Body>
            </Card>
        </Col>
    ))}

    
</Row>
</div>
</div>
    )
}
