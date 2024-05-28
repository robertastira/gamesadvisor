
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function AboutUs() {
  return (
    <Row className='about-us-bg d-flex-column text-white'>
      <Col sm={12}>
        <div> <span className='title-text'>About GamesAdvisor</span></div>
        <div className='card-text1 mt-4'>
          <div>GamesAdvisor è un portale dove raccogliere le recensioni dei <span className='turq-text'> videogiochi presenti, passati e futuri </span></div>
          <div className='card-text-med'>La libertà di pensiero e di espressione rappresentano le chiavi del nostro progetto; un sistema dedicato a migliorare l'esperienza di gioco e riunire la community</div>
        <div className='card-text-min'>Last updated 3 mins ago</div>
        </div>
</Col>
</Row>
  );
}

export default AboutUs;