import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Form, Button } from 'react-bootstrap';

function LoginPage() {
  return (
    <Container fluid className='login-page'>
      <Row>
        <Col><div className="card-container"> 
      <Card>
        <Card.Body>
          <Card.Title className='login-title'>WELCOME BACK</Card.Title>
          <Form className='title-font'>
            <Form.Group controlId="formUsername" className='mt-2'>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group controlId="formEmail" className='mt-2'>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formPassword"  className='mt-2'>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="dark" className='login-button mt-3' type="submit">
              S U B M I T 
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div></Col>
      </Row>
    </Container>
  );
}

export default LoginPage;