import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const API_KEY = '0faeb51fade34fd39d9f8912acddcb2d';
const PAGE_SIZE = 12;
const GAMES_API = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7&page_size=${PAGE_SIZE}`;

const GameCard = ({ game }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card card-bg text-white" style={{ height: '460px' }}> 
        <img src={game.background_image} alt={game.name} style={{ height: '200px', objectFit: 'cover' }} /> 
        <div className="card-body">
          <h5 className="detailed-card-text">{game.name}</h5>
          <p className="detailed-card-text2">Release date: {game.released}</p>
          <p className="detailed-card-text2">Rating: {game.rating}</p>
          <Link to={`/details/${game.id}`}><Button variant="outline-light" size="lg" className="btn-details detailed-card-text2">I N F O</Button></Link>
        </div>
      </div>
    </div>
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