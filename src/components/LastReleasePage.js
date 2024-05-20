import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import TopNavbar from './TopNavbar';
import { Link } from 'react-router-dom';

const API_KEY = '0faeb51fade34fd39d9f8912acddcb2d';
const PAGE_SIZE = 24;
const currentDate = new Date();
const twoYearsAgo = new Date(currentDate.getFullYear() - 2, currentDate.getMonth(), 1);
const formattedTwoYearsAgo = twoYearsAgo.toISOString().split('T')[0];
const formattedCurrentDate = currentDate.toISOString().split('T')[0];

const GAMES_API = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${formattedTwoYearsAgo},${formattedCurrentDate}&platforms=18,1,7&ordering=-released&page_size=${PAGE_SIZE}`;

function App() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedGameDetails, setSelectedGameDetails] = useState(null);

  useEffect(() => {
    fetch(GAMES_API)
      .then(response => response.json())
      .then(data => setGames(data.results))
      .catch(error => console.error('Error fetching the games:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCardClick = (game) => {
    setSelectedGame(game);
    fetchGameDetails(game.id);
  };

  const fetchGameDetails = (gameId) => {
    fetch(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setSelectedGameDetails(data))
      .catch(error => console.error('Error fetching game details:', error));
  };

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const recentGames = filteredGames.filter(game => {
    const releaseDate = new Date(game.released);
    const twoMonthsAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 1);
    return releaseDate >= twoMonthsAgo;
  });

  return (
    <Container fluid>
      <TopNavbar />
      <Container>
        <Row>
          <Col md={8}>
            <h2>Giochi più recenti</h2>
            <Row className="d-flex">
              {recentGames.map(game => (
                <Col key={game.id} sm={6} md={4} className="d-flex align-items-stretch mb-4">
                  <Card
                    style={{ width: '18rem', cursor: 'pointer' }}
                    className='card-bg text-white'
                    onClick={() => handleCardClick(game)}
                  >
                    <Card.Img
                      variant="top"
                      src={game.background_image}
                      style={{ height: '18rem', objectFit: 'cover' }}
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className='detailed-card-text'>{game.name}</Card.Title>
                      <Card.Text className='detailed-card-text1'>
                        RELEASE DATE: <span className='detailed-card-text2'>{new Date(game.released).toLocaleDateString()}</span>
                      </Card.Text>
                      {selectedGameDetails && (
                        <>
                          <Card.Text className='detailed-card-text3 pt-4'>Genre: {selectedGameDetails.genres?.map(genre => genre.name).join(', ')}</Card.Text>
                          <Card.Text className='detailed-card-text3 mt-2'>Developing: {selectedGameDetails.developers?.map(developer => developer.name).join(', ')}</Card.Text>
                          <Card.Text className='detailed-card-text3 mt-2'>Multiplayer/Single Player: {selectedGameDetails.multiplayer ? 'Multiplayer' : 'Single Player'}</Card.Text>
                        </>
                      )}
                      <Link to={`/details/${game.id}`}><Button variant="outline-light" className="mt-auto">D E T A I L S</Button></Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <Form>
              <Form.Group className="mb-3" controlId="searchGame">
                <Form.Label>Ricerca per nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il nome del gioco"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </Form.Group>
            </Form>
            {selectedGameDetails && (
              <Card className="mt-4">
                <Card.Body>
                  <Card.Title>{selectedGame?.name}</Card.Title>
                  <Card.Text>
                    <strong>Release Date:</strong> {new Date(selectedGame?.released).toLocaleDateString()}
                  </Card.Text>
                  <Card.Text>
                    <strong>Publisher:</strong> {selectedGameDetails.publishers?.map(publisher => publisher.name).join(', ') || 'N/A'}
                  </Card.Text>
                  <Card.Text>
                    <strong>Description:</strong> {selectedGameDetails.description_raw || 'No description available.'}
                  </Card.Text>
                  <Card.Text>
                    <strong>Genre:</strong> {selectedGameDetails.genres?.map(genre => genre.name).join(', ') || 'N/A'}
                  </Card.Text>
                  <Card.Text>
                    <strong>Platform:</strong> {selectedGameDetails.platforms?.map(platform => platform.platform.name).join(', ') || 'N/A'}
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;


