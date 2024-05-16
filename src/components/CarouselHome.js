import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';

function CarouselHome() {
  const [topGames, setTopGames] = useState([]);

  useEffect(() => {
    fetchTopGames();
  }, []);

  const fetchTopGames = () => {
    fetch('https://api.rawg.io/api/games?key=0faeb51fade34fd39d9f8912acddcb2d&dates=2019-09-01,2019-09-30&platforms=18,1,7&ordering=-rating&page_size=10')
      .then(response => response.json())
      .then(data => {
        setTopGames(data.results);
      })
      .catch(error => console.error('Error fetching top games:', error));
  };

  return (
    <Container>
      <div className='row-text mt-4 d-flex justify-content-start'>HALL OF FAME</div>
      <Row className="container-bg rounded justify-content-center align-items-center mt-4 p-4">
        <Col xs={12} md={8} lg={6} className="text-center">
          <Carousel>
            {topGames.map((game, index) => (
              <Carousel.Item key={index} interval={1000}>
                <img
                  src={game.background_image}
                  alt={game.name}
                  className='d-block w-100'
                  style={{ height: '500px', objectFit: 'cover' }} 
                />
                <Carousel.Caption>
                  <h3 className='carousel-text purple-text bg-white'>{game.name}</h3>
                  <Button variant="outline-light">LEAVE A REVIEW</Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default CarouselHome;