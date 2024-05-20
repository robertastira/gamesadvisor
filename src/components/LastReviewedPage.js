import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col, Form, Carousel } from 'react-bootstrap';
import TopNavbar from './TopNavbar';
import { Link } from 'react-router-dom';

const API_KEY = '0faeb51fade34fd39d9f8912acddcb2d';
const PAGE_SIZE = 24;
const currentDate = new Date();
const twoYearsAgo = new Date(currentDate.getFullYear() - 2, currentDate.getMonth(), 1);
const formattedTwoYearsAgo = twoYearsAgo.toISOString().split('T')[0];
const formattedCurrentDate = currentDate.toISOString().split('T')[0];

const GAMES_API = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${formattedTwoYearsAgo},${formattedCurrentDate}&platforms=18,1,7&ordering=-ratings&page_size=${PAGE_SIZE}`;

function MostReviewed() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchGenre, setSearchGenre] = useState('');
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedGameDetails, setSelectedGameDetails] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(GAMES_API)
      .then(response => response.json())
      .then(data => setGames(data.results))
      .catch(error => console.error('Error fetching the games:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGenreSearch = (event) => {
    setSearchGenre(event.target.value);
  };

  const handleCardClick = (game) => {
    setSelectedGame(game);
    fetchGameDetails(game.id);
    fetchGameReviews(game.id);
  };

  const fetchGameDetails = (gameId) => {
    fetch(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setSelectedGameDetails(data))
      .catch(error => console.error('Error fetching game details:', error));
  };

  const fetchGameReviews = (gameId) => {
    fetch(`https://api.rawg.io/api/games/${gameId}/reviews?key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setReviews(data.results))
      .catch(error => console.error('Error fetching game reviews:', error));
  };

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (searchGenre === '' || game.genres.some(genre => genre.name.toLowerCase().includes(searchGenre.toLowerCase())))
  );

  return (
    <Container fluid>
      <TopNavbar />
      <Container>
        <Row>
          <Col md={8}>
            <h2 className='review-card-text'>Most Reviewed Games</h2>
            <Row className="d-flex">
              {filteredGames.map(game => (
                <Col key={game.id} sm={6} md={4} className="d-flex align-items-stretch mb-4">
                  <Card
                    style={{ width: '18rem', cursor: 'pointer', position: 'relative' }}
                    className='card-bg text-white'
                    onClick={() => handleCardClick(game)}
                  >
                    <Card.Img
                      variant="top"
                      src={game.background_image}
                      style={{ height: '18rem', objectFit: 'cover' }}
                    />
                    <div className="review-counter">{game.reviews_count}</div>
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className='detailed-card-text'>{game.name}</Card.Title>
                      <Card.Text className='detailed-card-text1'>
                        RELEASE DATE: <span className='detailed-card-text2'>{new Date(game.released).toLocaleDateString()}</span>
                      </Card.Text>
                      <Link to={`/details/${game.id}`}><Button variant="outline-light" className="mt-auto">D E T A I L S</Button></Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <h2 className='review-card-text'>Search</h2>
            <Form>
              <h2 className='minicard-text1'>Search by name</h2>
              <Form.Group className="mb-3" controlId="searchGame">
                <Form.Label>Name of the game</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name of the game"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </Form.Group>
            </Form>
            <Form className='mt-4'>
              <h2 className='minicard-text1'>Search by genre</h2>
              <Form.Group className="mb-3" controlId="searchGenre">
                <Form.Label>Genre of the game</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Genre of the game"
                  value={searchGenre}
                  onChange={handleGenreSearch}
                />
              </Form.Group>
            </Form>
            {selectedGameDetails && (
              <>
                <Card className="purple-paragraph detailed-card-text3 text-white mt-4">
                  <Card.Body>
                    <Card.Title className='review-card-text'>{selectedGame?.name}</Card.Title>
                    <Card.Text>
                      Release Date: {new Date(selectedGame?.released).toLocaleDateString()}
                    </Card.Text>
                    <Card.Text>
                      Publisher: {selectedGameDetails.publishers?.map(publisher => publisher.name).join(', ') || 'N/A'}
                    </Card.Text>
                    <Card.Text>
                      <div>Description:</div> {selectedGameDetails.description_raw || 'No description available.'}
                    </Card.Text>
                    <Card.Text>
                      Genre: {selectedGameDetails.genres?.map(genre => genre.name).join(', ') || 'N/A'}
                    </Card.Text>
                    <Card.Text>
                      Platform: {selectedGameDetails.platforms?.map(platform => platform.platform.name).join(', ') || 'N/A'}
                    </Card.Text>
                  </Card.Body>
                </Card>
                {reviews.length > 0 && (
                  <Card className="bg-paragraph detailed-card-text3 text-white mt-4">
                    <Card.Body>
                      <Card.Title className='review-card-text'>Random Reviews</Card.Title>
                      <Carousel>
                        {reviews.map((review, index) => (
                          <Carousel.Item key={index} className="carousel-item">
                            <Card.Text>
                              <strong>{review.title}</strong>
                              <p>{review.text}</p>
                            </Card.Text>
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </Card.Body>
                  </Card>
                )}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default MostReviewed;