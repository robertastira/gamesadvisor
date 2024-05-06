import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function WrittenSection() {
  return (
    <Container>
      <Row className='mt-4'>
        <Col col-8>
            <h3 className='row-text'>Most Reviewed</h3>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Game</th>
          <th>Date</th>
        </tr>
      </thead>
      </Table>
        </Col>
        <Col col-4><h3 className='row-text'>Last Reviews</h3>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Game</th>
          <th>Date</th>
        </tr>
      </thead>
      </Table></Col>
      </Row>
    </Container>
  );
}

export default WrittenSection;