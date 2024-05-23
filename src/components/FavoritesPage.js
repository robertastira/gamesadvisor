import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsFillXCircleFill } from 'react-icons/bs';
import TopNavbar from './TopNavbar';
import Footer from './Footer';

function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);
    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);

    useEffect(() => {
        loadFavorites();
    }, []);

    useEffect(() => {
        if (favorites.length > 0) {
            fetchGamesDetails();
        } else {
            setGames([]);
        }
    }, [favorites]);

    const fetchGamesDetails = () => {
        const fetches = favorites.map(gameId =>
            fetch(`https://api.rawg.io/api/games/${gameId}?key=0faeb51fade34fd39d9f8912acddcb2d`)
                .then(response => response.json())
        );

        Promise.all(fetches)
            .then(results => {
                setGames(results);
            })
            .catch(error => console.error('Error fetching game details:', error));
    };

    const loadFavorites = () => {
        const storedFavorites = JSON.parse(sessionStorage.getItem('favorites')) || [];
        console.log('Loaded favorites:', storedFavorites); 
    };

    const removeFavorite = (gameId) => {
        const updatedFavorites = favorites.filter(id => id !== gameId);
        setFavorites(updatedFavorites);
        sessionStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    const handleCardClick = (game) => {
        setSelectedGame(game);
    };

    return (
        <Container fluid>
            <TopNavbar />
            <Container>
                <Row className='favourites-row'>
                    <Col>
                        <h1 className='title-details'>Liked Ones</h1>
                        {games.length > 0 ? (
                            games.map((game, index) => (
                                <Card key={index} className='details-card-bg mb-3' onClick={() => handleCardClick(game)}>
                                    <Card.Body>
                                        <Card.Title className='review-card-text'>{game.name}</Card.Title>
                                        <Link to={`/details/${game.id}`} className='btn btn-dark mb-2'>CHECK MORE</Link>
                                        <div className="remove-icon" onClick={(e) => { e.stopPropagation(); removeFavorite(game.id); }}>
                                            <BsFillXCircleFill />
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))
                        ) : (
                            <p className="reviews-text1">No favourites games yet. Add some!</p>
                        )}
                    </Col>
                    <Col>
                    <h1 className='title-details'>Preview</h1>
                        {selectedGame && (
                            <Card className='details-card-bg mb-3'>
                                <Card.Img variant="top" src={selectedGame.background_image} alt={selectedGame.name} />
                                <Card.Body>
                                    <Card.Title className='review-card-text1'>{selectedGame.name}</Card.Title>
                                    <Card.Text className='reviews-text1'>
                                        Released on: {selectedGame.released}
                                    </Card.Text>
                                    <Card.Text className='reviews-text1'>
                                        {selectedGame.description_raw}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Container>
    );
}

export default FavoritesPage;