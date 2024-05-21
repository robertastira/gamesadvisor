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
import StarRating from './StarRating';

const PostReview = ({ addReview }) => {
    const [username, setUsername] = useState('');
    const [reviewTitle, setReviewTitle] = useState('');
    const [reviewText, setReviewText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            username,
            title: reviewTitle,
            text: reviewText,
            created: new Date().toISOString(),
        };
        addReview(newReview);
        setUsername('');
        setReviewTitle('');
        setReviewText('');
    };

    return (
        <Card className='details-card-bg mb-3'>
            <Card.Body>
                <Card.Title className='review-card-text'>Leave a Review</Card.Title>
                <Form className='title-font' onSubmit={handleSubmit}>
                    <Form.Group controlId="formUsername" className='review-card-text1 mt-2'>
                        <Form.Control 
                            type="text" 
                            placeholder="Username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className='review-card-text1 mt-2'>
                        <Form.Control 
                            type="text" 
                            placeholder="Review Title" 
                            value={reviewTitle} 
                            onChange={(e) => setReviewTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword" className='review-card-text1 mt-2'>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            placeholder="Your Review" 
                            value={reviewText} 
                            onChange={(e) => setReviewText(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="dark" className='login-button mt-3' type="submit">
                        S E N D
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

function DetailsPage() {
    const { gameId } = useParams();
    const [gameDetails, setGameDetails] = useState(null);
    const [videoUrl, setVideoUrl] = useState('');
    const [liked, setLiked] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [visibleReviews, setVisibleReviews] = useState(5);
    const [userReviews, setUserReviews] = useState([]);

    useEffect(() => {
        fetchGameDetails();
        fetchGameReviews();
    }, [gameId]);

    const toggleLike = () => {
        setLiked(!liked);
    };

    const fetchGameDetails = () => {
        fetch(`https://api.rawg.io/api/games/${gameId}?key=0faeb51fade34fd39d9f8912acddcb2d`)
            .then(response => response.json())
            .then(data => {
                console.log('Game Details:', data); 
                setGameDetails(data);
                searchYouTube(data.name);
            })
            .catch(error => console.error('Error fetching game details:', error));
    };

    const fetchGameReviews = () => {
        fetch(`https://api.rawg.io/api/games/${gameId}/reviews?key=0faeb51fade34fd39d9f8912acddcb2d`)
            .then(response => response.json())
            .then(data => {
                console.log('Reviews:', data); 
                setReviews(data.results);
            })
            .catch(error => console.error('Error fetching game reviews:', error));
    };

    const searchYouTube = (gameName) => {
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDecj_BtE7sdyw84_on2nhdtADju9P57ko&q=${gameName}&type=video&part=snippet&maxResults=1`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log('YouTube Search:', data); 
                const videoId = data.items[0].id.videoId;
                const url = `https://www.youtube.com/embed/${videoId}`;
                setVideoUrl(url);
            })
            .catch(error => console.error('Error searching YouTube:', error));
    };

    const showMoreReviews = () => {
        setVisibleReviews(prev => prev + 5);
    };

    const addReview = (review) => {
        setUserReviews([review, ...userReviews]);
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
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                            ></iframe>
                        )}
                        <div className="purple-paragraph">
                            <ul>
                                <li className='detailed-card-text3 pt-4'>Genre: {gameDetails?.genres?.map(genre => genre.name).join(', ')}</li>
                                <li className='detailed-card-text3 mt-2'>Developing: {gameDetails?.developers?.map(developer => developer.name).join(', ')}</li>
                                <li className='detailed-card-text3 mt-2'>Multiplayer/Single Player: {gameDetails?.multiplayer ? 'Multiplayer' : 'Single Player'}</li>
                                <li className='detailed-card-text3 mt-2 pb-4'>Platform: {gameDetails?.platforms?.map(platform => platform.platform.name).join(', ')}</li>
                            </ul>
                        </div>
                        <div className="reviews-container mt-4">
                            <h3 className='review-card-text'>Last Reviews</h3>
                            {reviews.slice(0, visibleReviews).map((review, index) => (
                                <div key={index} className="review-item">
                                    <p className="review-text">{review.text}</p>
                                    <p className="review-date">{new Date(review.created).toLocaleDateString()}</p>
                                </div>
                            ))}
                            {visibleReviews < reviews.length && (
                                <Button variant="outline-light mt-4" onClick={showMoreReviews}>SHOW</Button>
                            )}
                        </div>
                    </Col>
                    <Col className='details-bg'>
                        <h1 className='title-details me-2'>{gameDetails?.name}
                            <span 
                                className="heart-icon mb-2"
                                onClick={toggleLike} 
                                role="img" 
                                aria-label="Like"
                                style={{
                                    fontSize: '50px', 
                                    cursor: 'pointer', 
                                    color: liked ? 'red' : 'white',
                                    transition: 'color 0.3s',
                                }}
                            >
                                {liked ? '❤️' : '🤍'}
                            </span>
                        </h1>
                        
                        <p className='details-text text-align-start'>{gameDetails?.description_raw}</p>

                        <h2 className='minicard-text1 mt-2 mb-2 text-align-start'>Released on {gameDetails?.released}</h2>
                        <hr
                            style={{
                                background: 'white',
                                color: 'white',
                                borderColor: 'white',
                                height: '2px',
                            }}
                        />
                        
                        <PostReview addReview={addReview} />
                        
                        <h3 className='review-card-text mt-4'>Your Reviews</h3>
                        {userReviews.length > 0 ? (
                            userReviews.map((review, index) => (
                                <div key={index} className="review-item">
                                    <p className="review-text">{review.text}</p>
                                    <p className="review-date">{new Date(review.created).toLocaleDateString()}</p>
                                    <p className="review-username">by {review.username}</p>
                                    <p className="review-title">{review.title}</p>
                                </div>
                            ))
                        ) : (
                            <p className="review-text">No reviews yet. Be the first to leave a review!</p>
                        )}

                        <StarRating />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Container>
    );
}

export default DetailsPage;