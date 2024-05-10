import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormExample() {
  return (
    <Container>
        <p className='search-font mt-2'><img
              src="/logo.png"
              width="50"
              height="50"
              className="d-inline-block mb-1"
              alt="Logo"
            />SEARCH UR GAME<img
            src="/logo.png"
            width="50"
            height="50"
            className="d-inline-block mb-1"
            alt="Logo"
          /></p>
    <Navbar className="navbar-bg justify-content-center p-2">

      <Form inline>
        <Row>

          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder=". . . "
              className="d-inline-block custom-search"
            />
          </Col>
          <Col><Button variant="dark" className='login-button d-inline-block'>C E R C A</Button></Col>
        </Row>
      </Form>
    </Navbar>
    </Container> );
}

export default FormExample;