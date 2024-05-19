import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Card, Button } from 'react-bootstrap';


const API_KEY = '0faeb51fade34fd39d9f8912acddcb2d';
const PAGE_SIZE = 12;
const GAMES_API = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7&page_size=${PAGE_SIZE}`;

const GameCard = ({ game }) => {
  const ratingTextColor = game.rating > 3 ? 'green' : 'red';

  

  return (
    <Col md={3} className="mb-4">
    <Card className="card-bg text-white" style={{ height: '420px', position: 'relative', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Card.Img variant="top" src={game.background_image} alt={game.name} style={{ height: '200px', objectFit: 'cover', borderRadius: '0' }} />
      <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: '1' }}>
        <div
          className="rating-circle"
          style={{
            backgroundColor: ratingTextColor === 'green' ? 'lightgreen' : 'lightcoral',
            color: ratingTextColor,
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.1rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', 
            fontWeight: 'bold',
          }}
        >
          {game.rating}
        </div>
      </div>
      <Card.Body className="d-flex flex-column">
        <div>
          <Card.Title className="detailed-card-text">{game.name}</Card.Title>
          <Card.Text className="detailed-card-text2">Release date: {game.released}</Card.Text>
        </div>
        <div className="mt-auto">
          <Link to={`/details/${game.id}`}>
            <Button variant="outline-light" size="lg" className="btn-details detailed-card-text2" style={{ width: '100%' }}>I N F O</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  </Col>
  );
};


const GameList = ({ games }) => {
  return (
    <div className="container">
      <div className="row">
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
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
      <div className='row-text'>LOOK IN THE PAST</div>
      <GameList games={games} />
    </Container>
  );
};

export default CardGames;