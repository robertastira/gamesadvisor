import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import TopNavbar from './TopNavbar';
import { Link } from 'react-router-dom';
import YouTubeVideos from './YoutubeVideos';

const API_KEY = '0faeb51fade34fd39d9f8912acddcb2d';
const PAGE_SIZE = 50;
const futureDate = new Date(2025, 0, 1); 
const formattedFutureDate = futureDate.toISOString().split('T')[0];
const earliestDate = '1970-01-01'; 
const GAMES_API = (page) => `https://api.rawg.io/api/games?key=${API_KEY}&dates=${earliestDate},${formattedFutureDate}&ordering=-released&page_size=${PAGE_SIZE}&page=${page}`;

function AllGames() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedGameDetails, setSelectedGameDetails] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchGenre, setSearchGenre] = useState('');

  useEffect(() => {
    fetchGames(currentPage);
  }, [currentPage]);

  const fetchGames = (page) => {
    fetch(GAMES_API(page))
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          setGames(prevGames => [...prevGames, ...data.results]);
        } else {
          setHasMore(false);
        }
      })
      .catch(error => console.error('Error fetching the games:', error));
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGenreSearch = (event) => {
    setSearchGenre(event.target.value);
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
            <h2 className='review-card-text'>All Games</h2>
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
            {hasMore && (
              <div className="text-center">
                <Button variant='outline-light' onClick={() => setCurrentPage(prevPage => prevPage + 1)}>SEE MORE</Button>
              </div>
            )}
          </Col>
          <Col md={4}>
          <h2 className='review-card-text'>Search All</h2>
          <Form>
              <h2 className='minicard-text1'>Search by name</h2>
              <Form.Group className="mb-3" controlId="searchGame">
                <Form.Label>Name of the game</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=". . ."
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
                  placeholder=". . ."
                  value={searchGenre}
                  onChange={handleGenreSearch}
                />
              </Form.Group>
            </Form>
            {selectedGameDetails && (
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
            )}
            <YouTubeVideos/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AllGames;