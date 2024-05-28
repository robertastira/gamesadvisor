import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const currentDate = new Date();
const sixMonthsAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 6, 1);
const formattedSixMonthsAgo = sixMonthsAgo.toISOString().split('T')[0];
const formattedCurrentDate = currentDate.toISOString().split('T')[0];

const API_KEY = '0faeb51fade34fd39d9f8912acddcb2d';
const PAGE_SIZE = 24;
const GAMES_API = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${formattedSixMonthsAgo},${formattedCurrentDate}&platforms=18,1,7&ordering=-released&page_size=${PAGE_SIZE}`;

const GameCard = ({ game, onRemove }) => {
  const ratingTextColor = game.rating > 3 ? 'green' : 'red';
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    checkIfLiked();
  }, []);

  const toggleLike = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);
    updateFavorites(newLikedState);
  };

  const checkIfLiked = () => {
    const favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];
    if (favorites.includes(game.id)) {
      setLiked(true);
    }
  };

  const updateFavorites = (isLiked) => {
    const favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];
    if (isLiked) {
      favorites.push(game.id);
    } else {
      const index = favorites.indexOf(game.id);
      if (index > -1) {
        favorites.splice(index, 1);
      }
    }
    sessionStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <Col md={3} className="mb-4">
      <Card className="card-bg text-white" style={{ height: '420px', position: 'relative', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Img variant="top" src={game.background_image} alt={game.name} style={{ height: '200px', objectFit: 'cover', borderRadius: '0' }} />
        <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
          <span 
            className="heart-icon"
            onClick={toggleLike} 
            role="img" 
            aria-label="Like"
            style={{
              fontSize: '40px', 
              cursor: 'pointer', 
              color: liked ? 'red' : 'white',
              transition: 'color 0.3s',
              marginTop: '5px'
            }}
          >
            {liked ? '❤️' : '🤍'}
          </span>
          <span 
            className="remove-icon"
            onClick={() => onRemove(game.id)} 
            role="img" 
            aria-label="Remove"
            style={{
              fontSize: '30px', 
              cursor: 'pointer', 
              color: 'white',
              transition: 'color 0.3s',
              marginTop: '5px'
            }}
          >
            ❌
          </span>
        </div>
        <Card.Body className="d-flex flex-column justify-content-between">
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

const GameList = ({ games, onRemove }) => {
  return (
    <Container>
      <Row>
        {games.map((game, index) => (
          <GameCard key={index} game={game} onRemove={onRemove} />
        ))}
      </Row>
    </Container>
  );
};

const CardGames = () => {
  const [games, setGames] = useState([]);
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    fetch(GAMES_API)
      .then(response => response.json())
      .then(data => {
        setGames(data.results);
        setAllGames(data.results);
      })
      .catch(error => console.log(error));
  }, []);

  const fetchRandomGame = () => {
    if (allGames.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * allGames.length);
    return allGames[randomIndex];
  };

  const handleRemoveGame = (gameId) => {
    const updatedGames = games.filter(game => game.id !== gameId);
    const newGame = fetchRandomGame();
    if (newGame) {
      setGames([...updatedGames, newGame]);
    } else {
      setGames(updatedGames);
    }
  };

  return (
    <Container>
      <div className='row-text'>LAST RELEASES</div>
      <GameList games={games} onRemove={handleRemoveGame} />
    </Container>
  );
};

export default CardGames;