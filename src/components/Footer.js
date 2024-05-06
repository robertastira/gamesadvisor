import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Container className=' mt-4'>
        <p className='footer-text pt-4'> <img
              src="/logo.png"
              width="40"
              height="40"
              alt="GamesAdvisorLogo"
            />GamesAdvisor.it © 2024-2025 Tutti i diritti riservati.</p>
        <hr
        style={{
          background: 'grey',
          color: 'grey',
          borderColor: 'grey',
          height: '2px',
        }}
      />
        <Row>
        <Col><p className='footer-text1'>Staff e Contatti</p>
        <p className='footer-text1'>Lavora con Noi</p>
        <p className='footer-text1'>Pubblicità</p>
        <p className='footer-text1'>Il nostro Team</p></Col>
        <Col><p className='footer-text1'>Privacy, Termini e Condizioni</p>
        <p className='footer-text1'>Cookie Policy</p></Col>
        </Row>
      

    </Container>
  );
}

export default Footer;