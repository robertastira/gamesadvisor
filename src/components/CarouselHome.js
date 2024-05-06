import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function CarouselHome() {
  return (
    <Container>
       <div className='row-text mt-4 d-flex justify-content-start'>HALL OF FAME</div>
       <Row className="container-bg rounded justify-content-center align-items-center mt-4 p-4">
       <Col  xs={12} md={8} lg={6} className="text-center">
    <Carousel>
      <Carousel.Item interval={500}>
      <img src="LoL.png" alt="League of Legends" className='rounded' />
        <Carousel.Caption>
        <h3 className='carousel-text purple-text bg-white'>League of Legends</h3>
        <Button variant="outline-light">LEAVE A REVIEW</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="rainbow.png" alt="Rainbow" className='rounded'/>
        <Carousel.Caption>
          <h3 className='carousel-text purple-text bg-white'>Rainbow Six Siege</h3>
          <Button variant="outline-light">LEAVE A REVIEW</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="dbd.png" alt="Dbd" className='rounded'/>
        <Carousel.Caption>
          <h3 className='carousel-text bg-white'>Dead By Daylight</h3>
          <Button variant="outline-light">LEAVE A REVIEW</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </Container>
  );
}

export default CarouselHome;