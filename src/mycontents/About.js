import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "bootstrap/dist/css/bootstrap.css"
import './About.css'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import pic2 from '../images/hh.jpg';
import pic3 from '../images/ab.jpg';
import pic4 from '../images/rv.jpg';
import pic5 from '../images/rc.jpg';
import pic6 from '../images/image.png';
import myresume from '../docs/ownresume.pdf'

export const About = () => {

    
    return (
        <div>
        <Container>
            <Row className='row1'>
                <Col>
                    <div className='container offset-1'>
                        <img
                            className="d-block self"
                            src={pic6}
                            alt="First slide"
                        />
                    </div>
                </Col>
                <Col>
                    <h1 className='t2'>About Me</h1>
                    <h3 className='t3'><span className='text3'>Full Stack </span><span className='text4'>Developer</span></h3>
                    <p className='t3 text-white'>
                    My name is Sarthak Yeole, currently I am pursuing Btech from R C Patel Institute of Technology, Shirpur (Dist. Dhule).
I am motivated and dedicated Full Stack Developer with a strong foundation in both frontend and backend development. I am proficient in programming languages such as Java, JavaScript, HTML, CSS and have experience working with popular web frameworks like React.
I am eager to apply my skills and knowledge to real-world projects and learn from experienced professionals in the industry. I am a quick learner, a problem solver, and a team player, with excellent communication and collaboration skills.
My goal is to develop innovative and user friendly applications that can make a positive impact on people's lives.
                    </p>

                    <Row>
                        <Col xs={4} md={4}>
                        <a href={myresume} download={"SarthakYeole"} target='_blank'>
                <Button variant="outline-success" className='text-white btn10'><span>Download CV</span></Button>
                </a>
                            {/* <button className='text-white btn10'>Download CV</button> */}
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
        
        
            <div className='up'>
                <h1> <span className='txt1'>Edu</span><span className='txt2'>cation</span></h1>
            </div>

        <div className="card11">
            <div className="card12">
            <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={pic2} />
      <Card.Body className="card13">
        <Card.Title>Primary Education</Card.Title>
        <Card.Text>
          - H. H. Patel Primary School, Chalisgaon (Dist. Jalgaon)
        </Card.Text>
        {/* <Button variant="danger">Result</Button> */}
        
      </Card.Body>
    </Card>
    </div>
    <div className="card12">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic4} />
      <Card.Body className="card13">
        <Card.Title>Higher Secondary Education</Card.Title>
        <Card.Text>
            - R. V. Junior College, Chalisgaon (Dist. Jalgaon)
        </Card.Text>
        {/* <Button variant="danger">Result</Button> */}
      </Card.Body>
    </Card>
    </div>
</div>

<div className="card11">
    <div className="card12">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic3} />
      <Card.Body className="card13">
        <Card.Title> Secondary Education</Card.Title>
        <Card.Text>
          - A. B. Boys' HighSchool, Chalisgaon (Dist. Jalgaon)
        </Card.Text>
        {/* <Button variant="danger" className="btn12">Result</Button> */}
      </Card.Body>
    </Card>
    </div>

    <div className="card12">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic5} />
      <Card.Body className="card13">
        <Card.Title>Bachelors of Technology (Graduation)</Card.Title>
        <Card.Text>
          - R. C. Patel Institute of Technology, Shirpur (Dist. Dhule)
        </Card.Text>
        {/* <Button variant="danger">Result</Button> */}
      </Card.Body>
    </Card>
    </div>
    </div>

        </div>
    );
}
