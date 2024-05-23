import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Regex per validare l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Regex per validare la password (una lettera maiuscola e 7 numeri)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d{7,})/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError('Email non valida');
      return;
    }
    if (!validatePassword(password)) {
      setError('La password deve contenere almeno una lettera maiuscola e sette numeri');
      return;
    }
    navigate('/home');
  };

  return (
    <Container fluid className='login-page'>
      <Row>
        <Col>
          <div className="card-container">
            <Card>
              <Card.Body>
                <Card.Title className='login-title'>WELCOME BACK</Card.Title>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form className='title-font' onSubmit={handleSubmit}>
                  <Form.Group controlId="formUsername" className='mt-2'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className='mt-2'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword" className='mt-2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Link to="/"><Button variant="dark" className='login-button mt-3' type="submit">
                    S U B M I T
                  </Button></Link>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;