import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class FormRicerca extends React.Component {
  render() {
    return (
        <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <Form inline>
              <Form.Group controlId="gameName" className="mr-3">
                <Form.Label className="mr-2">Nome Gioco</Form.Label>
                <Form.Control type="text" placeholder="Inserisci il nome del gioco" />
              </Form.Group>
      
              <Form.Group controlId="gameGenre" className="mr-3">
                <Form.Label className="mr-2">Genere</Form.Label>
                <Form.Control type="text" placeholder="Inserisci il genere" />
              </Form.Group>
      
              <Form.Group controlId="releaseYear" className="mr-3">
                <Form.Label className="mr-2">Anno di Uscita</Form.Label>
                <Form.Control type="text" placeholder="Inserisci l'anno di uscita" />
              </Form.Group>
      
              <Button variant="primary" type="submit">
                Cerca
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormRicerca;
