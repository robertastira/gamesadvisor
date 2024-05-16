import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const currentDate = new Date();
const sixMonthsAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 6, 1);
const formattedSixMonthsAgo = sixMonthsAgo.toISOString().split('T')[0];
const formattedCurrentDate = currentDate.toISOString().split('T')[0];

const API_KEY = '0faeb51fade34fd39d9f8912acddcb2d';
const PAGE_SIZE = 50;
const GAMES_API = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${formattedSixMonthsAgo},${formattedCurrentDate}&platforms=18,1,7&ordering=-released&page_size=${PAGE_SIZE}`;

const GameCard = ({ game }) => {
  return (
    <Col md={3} className="mb-4">
      <Card className="card-bg text-white" style={{ height: '460px' }}>
        <Card.Img variant="top" src={game.background_image} alt={game.name} style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="detailed-card-text">{game.name}</Card.Title>
          <Card.Text className="detailed-card-text2">Release date: {game.released}</Card.Text>
          <Card.Text className="detailed-card-text2">Rating: {game.rating}</Card.Text>
          <div className="mt-auto">
          <Link to={`/details/${game.id}`}><Button variant="outline-light" size="lg" className="btn-details detailed-card-text2">I N F O </Button></Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

const GameList = ({ games }) => {
  return (
    <Container>
      <Row>
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </Row>
    </Container>
  );
};

const CardGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(GAMES_API)
      .then(response => response.json())
      .then(data => setGames(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      <div className='row-text'>LAST RELEASES</div>
      <GameList games={games} />
    </Container>
  );
};

export default CardGames;