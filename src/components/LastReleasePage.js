import Container from 'react-bootstrap/Container';
import TopNavbar from './TopNavbar';
import Footer from './Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LastReleasePage() {
    return (

        <Container fluid>
            <TopNavbar/>
            <Container>
            <div className='row-text d-flex justify-content-start'>LAST RELEASES</div>
      <Row>
        <Col> 
        <Card style={{ width: '18rem' }} className='card-bg text-white'>
      <Card.Img variant="top" src="manorlords.jpeg" />
      <Card.Body>
      <Card.Title className='detailed-card-text'>Manor Lords</Card.Title>
      <Card.Text className='detailed-card-text1'>
         RELEASE DATE: <span className='detailed-card-text2'>26 apr 2024</span>
      </Card.Text>
      <Card.Text className='detailed-card-text1'>
         SVILUPPATORE: <span className='detailed-card-text2'>Hangar 13</span>
      </Card.Text>
      <Card.Text className='detailed-card-text1'>
         EDITORE: <span className='detailed-card-text2'> 2K Games </span>
      </Card.Text>
      <Button variant="outline-light">D E T A I L S</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }} className='card-bg text-white'>
      <Card.Img variant="top" src="destiny2.jpg" />
      <Card.Body>
      <Card.Title className='detailed-card-text'>Destiny 2</Card.Title>
      <Card.Text className='detailed-card-text1'>
         RELEASE DATE: <span className='detailed-card-text2'>1 ott 2019</span>
      </Card.Text>
      <Card.Text className='detailed-card-text1'>
         SVILUPPATORE: <span className='detailed-card-text2'>Bungie</span>
      </Card.Text>
      <Card.Text className='detailed-card-text1'>
         EDITORE: <span className='detailed-card-text2'>Bungie</span>
      </Card.Text>
      <Button variant="outline-light">D E T A I L S</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }} className='card-bg text-white'>
      <Card.Img variant="top" src="nrfw.jpg" />
      <Card.Body>
      <Card.Title className='detailed-card-text'>NRforTheWicked</Card.Title>
      <Card.Text className='detailed-card-text1'>
         RELEASE DATE: <span className='detailed-card-text2'>18 apr 2024</span>
      </Card.Text>
      <Card.Text className='detailed-card-text1'>
         SVILUPPATORE: <span className='detailed-card-text2'>Moon Studios GmbH</span>
      </Card.Text>
      <Card.Text className='detailed-card-text1'>
         EDITORE: <span className='detailed-card-text2'>
Private Division</span>
      </Card.Text>
      <Button variant="outline-light">D E T A I L S</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }} className='card-bg text-white'>
      <Card.Img variant="top" src="topspin.jpg" />
      <Card.Body>
      <Card.Title className='detailed-card-text'>Top Spin 2K25</Card.Title>
      <Card.Text className='detailed-card-text1'>
         RELEASE DATE: <span className='detailed-card-text2'>18 apr 2024</span>
      </Card.Text>
      <Card.Text className='detailed-card-text1'>
         SVILUPPATORE: <span className='detailed-card-text2'>Hangar 13</span>
      </Card.Text>
      <Card.Text className='detailed-card-text1'>
         EDITORE: <span className='detailed-card-text2'>2K Games</span>
      </Card.Text>
      <Button variant="outline-light">D E T A I L S</Button>
      </Card.Body>
    </Card></Col>
      </Row>


      <Row className='mt-4'>
        <Col> 
        <Card style={{ width: '18rem' }} className='card-bg text-white'>
      <Card.Img variant="top" src="manorlords.jpeg" />
      <Card.Body>
      <Card.Title className='detailed-card-text'>Manor Lords</Card.Title>
      <Card.Text className='detailed-card-text1'>
         RELEASE DATE: <span className='detailed-card-text2'>26 apr 2024</span>
      </Card.Text>
      <Card.Text className='detailed-card-text1'>
         SVILUPPATORE: <span className='detailed-card-text2'>Hangar 13</span>
      </Card.Text>
      <Card.Text className='detailed-card-text1'>
         EDITORE: <span className='detailed-card-text2'> 2K Games </span>
      </Card.Text>
      <Button variant="outline-light">D E T A I L S</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }} className='card-bg text-white'>
      <Card.Img variant="top" src="destiny2.jpg" />
      <Card.Body>
      <Card.Title className='detailed-card-text'>Destiny 2</Card.Title>
      <Card.Text className='detailed-card-text1'>
         RELEASE DATE: <span className='detailed-card-text2'>1 ott 2019</span>
      </Card.Text>
      <Card.Text className='detailed-card-text1'>
         SVILUPPATORE: <span className='detailed-card-text2'>Bungie</span>
      </Card.Text>
      <Card.Text className='detailed-card-text1'>
         EDITORE: <span className='detailed-card-text2'>Bungie</span>
      </Card.Text>
      <Button variant="outline-light">D E T A I L S</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }} className='card-bg text-white'>
      <Card.Img variant="top" src="nrfw.jpg" />
      <Card.Body>
      <Card.Title className='detailed-card-text'>NRforTheWicked</Card.Title>
      <Card.Text className='detailed-card-text1'>
         RELEASE DATE: <span className='detailed-card-text2'>18 apr 2024</span>
      </Card.Text>
      <Card.Text className='detailed-card-text1'>
         SVILUPPATORE: <span className='detailed-card-text2'>Moon Studios GmbH</span>
      </Card.Text>
      <Card.Text className='detailed-card-text1'>
         EDITORE: <span className='detailed-card-text2'>
Private Division</span>
      </Card.Text>
      <Button variant="outline-light">D E T A I L S</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }} className='card-bg text-white'>
      <Card.Img variant="top" src="topspin.jpg" />
      <Card.Body>
      <Card.Title className='detailed-card-text'>Top Spin 2K25</Card.Title>
      <Card.Text className='detailed-card-text1'>
         RELEASE DATE: <span className='detailed-card-text2'>18 apr 2024</span>
      </Card.Text>
      <Card.Text className='detailed-card-text1'>
         SVILUPPATORE: <span className='detailed-card-text2'>Hangar 13</span>
      </Card.Text>
      <Card.Text className='detailed-card-text1'>
         EDITORE: <span className='detailed-card-text2'>2K Games</span>
      </Card.Text>
      <Link to="/details"><Button variant="outline-light">D E T A I L S</Button></Link>
      </Card.Body>
    </Card></Col>
      </Row>
            </Container>
        </Container>
        

    )
}

export default LastReleasePage;