import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const API_KEY = '0faeb51fade34fd39d9f8912acddcb2d';
const RAWG_API = `https://api.rawg.io/api/games?key=${API_KEY}`;

const WrittenSection = () => {
  const [mostReviewed, setMostReviewed] = useState([]);
  const [lastReviewed, setLastReviewed] = useState([]);

  useEffect(() => {
    fetch(`${RAWG_API}&ordering=-ratings_count&page_size=15`)
      .then(response => response.json())
      .then(data => setMostReviewed(data.results))
      .catch(error => console.log(error));

    fetch(`${RAWG_API}&ordering=-updated&page_size=15`)
      .then(response => response.json())
      .then(data => setLastReviewed(data.results))
      .catch(error => console.log(error));
  }, []);

  const renderTableRows = (games, color) => {
    return games.map((game, index) => (
      <tr key={index} style={{ backgroundColor: color }}>
        <td className='detailed-card-text6'>{game.name}</td>
        <td className='detailed-card-text6'>{game.updated || game.released}</td>
      </tr>
    ));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3 className='row-text'>Most Reviewed</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className='detailed-card-text5'>Game</th>
                <th className='detailed-card-text5'>Date</th>
              </tr>
            </thead>
            <tbody>
              {renderTableRows(mostReviewed, '#f0f0f5')}
            </tbody>
          </Table>
        </Col>
        <Col>
          <h3 className='row-text'>Last Reviews</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className='detailed-card-text5'>Game</th>
                <th className='detailed-card-text5'>Date</th>
              </tr>
            </thead>
            <tbody>
              {renderTableRows(lastReviewed, 'white')}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default WrittenSection;