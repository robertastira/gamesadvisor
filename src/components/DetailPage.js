import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import TopNavbar from './TopNavbar';
import Footer from './Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import StarRating from './StarRating';

function DetailsPage() {
    const { gameId } = useParams();
    const [gameDetails, setGameDetails] = useState(null);
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        fetchGameDetails();
    }, []);

    const fetchGameDetails = () => {
        fetch(`https://api.rawg.io/api/games/${gameId}?key=0faeb51fade34fd39d9f8912acddcb2d`)
            .then(response => response.json())
            .then(data => {
                setGameDetails(data);
                searchYouTube(data.name);
            })
            .catch(error => console.error('Error fetching game details:', error));
    };

    const searchYouTube = (gameName) => {
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDecj_BtE7sdyw84_on2nhdtADju9P57ko&q=${gameName}&type=video&part=snippet&maxResults=1`;
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const videoId = data.items[0].id.videoId;
                const url = `https://www.youtube.com/embed/${videoId}`;
                setVideoUrl(url);
            })
            .catch(error => console.error('Error searching YouTube:', error));
    };

    return (
        <Container fluid>
            <TopNavbar />
            <Container>
                <Row>
                    <Col>
                        {videoUrl && (
                            <iframe 
                                width="660" 
                                height="415" 
                                src={videoUrl} 
                                title="Game Trailer" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen
                            ></iframe>
                        )}
                        <div className="purple-paragraph">
                            <h2 className='review-card-text1'>Game Details</h2>
                            <ul>
                                <li className='detailed-card-text3'><strong>Genre:</strong> {gameDetails?.genres.map(genre => genre.name).join(', ')}</li>
                                <li className='detailed-card-text3'><strong>Developing:</strong> {gameDetails?.developers.map(developer => developer.name).join(', ')}</li>
                                <li className='detailed-card-text3'><strong>Multiplayer/Single Player:</strong> {gameDetails?.multiplayer ? 'Multiplayer' : 'Single Player'}</li>
                                <li className='detailed-card-text3'><strong>Platform:</strong> {gameDetails?.platforms.map(platform => platform.platform.name).join(', ')}</li>
                            </ul>
                        </div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Last Reviews</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                        </Table>
                    </Col>
                    <Col className='details-bg'>
                        <h1 className='login-title'>{gameDetails?.name}</h1>
                        <Button variant='outline-light' className='button-text2 d-inline-block'>A D D T O F A V O U R I T E S <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                        </svg></Button>
                        <h2 className='minicard-text1 mt-2'>{gameDetails?.released}</h2>
                        <p className='minicard-text1'>Description</p>
                        <p className='details-text text-align-right'>{gameDetails?.description_raw}</p>
                        <hr
                            style={{
                                background: 'white',
                                color: 'white',
                                borderColor: 'white',
                                height: '2px',
                            }}
                        />
                        <Card className='mb-3'>
                            <Card.Body>
                                <Card.Title className='review-card-text'>Leave a Review</Card.Title>
                                <Form className='title-font'>
                                    <Form.Group controlId="formUsername" className='review-card-text1 mt-2'>
                                        <Form.Control type="text" placeholder="Username" />
                                    </Form.Group>

                                    <Form.Group controlId="formEmail" className='review-card-text1 mt-2'>
                                        <Form.Control type="text" placeholder="Review Title" />
                                    </Form.Group>

                                    <Form.Group controlId="formPassword" className='review-card-text1 mt-2'>
                                        <Form.Control type="password" placeholder="Your Review" />
                                    </Form.Group>

                                    <Button variant="dark" className='login-button mt-3' type="submit">
                                        S E N D
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <StarRating />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Container>
    );
}

export default DetailsPage;