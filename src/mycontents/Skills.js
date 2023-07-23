import React from 'react'
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar'; 
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "bootstrap/dist/css/bootstrap.css"
import './Skills.css'
import pic2 from '../images/c.png'
import pic3 from '../images/java.png'
import pic4 from '../images/html2.png'
import pic5 from '../images/css.png'
import pic6 from '../images/bootstrap.png'
import pic7 from '../images/react.png'
import 'animate.css'

export const Skills = () => {
    const now = 80;
    const now1 = 70;
    const now2 = 90;
    const now3 = 70;
    const now4 = 80;
    const now5 = 60;
    
    return (
        <div>
            <div className='up'>
                <h1 className='wow animate__animated animate__fadeInDown'> <span className='txt1'>Ski</span><span className='txt2'>lls</span></h1>
            </div>
            <div className='container card6'>
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card className='card1'>
                                <Card.Img variant="top" className='pic2 mx-auto' src={pic2} />
                                <Card.Body>
                                    <Card.Title className='txt'><h2>C</h2></Card.Title>
                                    <Card.Text className='txt'>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                        
            <div className='container progre'>
            <ProgressBar variant="primary" animated now={80} now={now} label={`${now}%`} />
                
            </div>
                                    </Card.Text>
                                    <Button variant="outline-info" className='button' size="sm">Read More!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card className='card2'>
                                <Card.Img variant="top" className='pic3 mx-auto' src={pic3} />
                                <Card.Body>
                                    <Card.Title className='txt'><h2>Java</h2></Card.Title>
                                    <Card.Text className='txt'>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                        <div className='container progre'>
            <ProgressBar variant="warning" animated now={now1} label={`${now1}%`} />
                
            </div>
                                    </Card.Text>
                                    <Button variant="outline-info" className='button' size="sm">Read More!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card className='card3'>
                                <Card.Img variant="top" className='pic4 mx-auto' src={pic4} />
                                <Card.Body>
                                    <Card.Title className='txt'><h2>HTML</h2></Card.Title>
                                    <Card.Text className='txt'>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                        <div className='container progre'>
            <ProgressBar variant="danger" animated now={now2} label={`${now2}%`} />
                
            </div>
                                    </Card.Text>
                                    <Button variant="outline-info" className='button' size="sm">Read More!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card className='card4'>
                                <Card.Img variant="top" className='pic5 mx-auto' src={pic5} />
                                <Card.Body>
                                    <Card.Title className='txt'><h2>CSS</h2></Card.Title>
                                    <Card.Text className='txt'>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                        <div className='container progre'>
            <ProgressBar variant="primary" animated now={now3} label={`${now3}%`} />
                
            </div>
                                    </Card.Text>
                                    <Button variant="outline-info" className='button' size="sm">Read More!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card className='card5'>
                                <Card.Img variant="top" className='pic6 mx-auto' src={pic6} />
                                <Card.Body>
                                    <Card.Title className='txt'><h2>Bootstrap</h2></Card.Title>
                                    <Card.Text className='txt'>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                        <div className='container progre'>
            <ProgressBar variant="primary"animated now={now4} label={`${now4}%`} />
                
            </div>
                                    </Card.Text>
                                    <Button variant="outline-info" className='button' size="sm">Read More!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card className='card7'>
                                <Card.Img variant="top" className='pic7 mx-auto' src={pic7} />
                                <Card.Body>
                                    <Card.Title className='txt'><h2>React</h2></Card.Title>
                                    <Card.Text className='txt'>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                        <div className='container progre'>
            <ProgressBar variant="info" animated now={now5} label={`${now5}%`} />
                
            </div>
                                    </Card.Text>
                                    <Button variant="outline-info" className='button' size="sm">Read More!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>


            
        </div>
    );
}
