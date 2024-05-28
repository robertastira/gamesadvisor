import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Col, Card, Button } from 'react-bootstrap';

const WrittenSection2 = () => {
    const [games, setGames] = useState([]);
    const [randomGames, setRandomGames] = useState([]);

    const today = new Date();
    const lastYear = today.getFullYear() - 1;
    const startDate = `${lastYear}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const endDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch(`https://api.rawg.io/api/games?key=0faeb51fade34fd39d9f8912acddcb2d&dates=${startDate},${endDate}&platforms=18,1,7&ordering=-rating&page_size=10`);
                const data = await response.json();
                setGames(data.results);
            } catch (error) {
                console.error('Error fetching game data:', error);
            }
        };

        fetchGames();
    }, []);

    useEffect(() => {
        if (games.length > 0) {
            const shuffled = games.sort(() => 0.5 - Math.random());
            setRandomGames(shuffled.slice(0, 20));
        }
    }, [games]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    return (
        <Col className='text-white'>
            <h1 className='row-text'>RANDOM GAMES CHECK</h1>
            <Slider {...settings}>
                {randomGames.map((game, index) => (
                    <div className='d-flex justify-content-start mt-2' key={index}>
                        <img src={game.background_image} alt={game.name} style={{ width: '180px', height: '180px', objectFit: 'cover', marginRight: '20px' }} />
                        <div>
                            <h2 className='detailed-card-textslider'>{game.name}</h2>
                            <p className='detailed-card-textslider'>Released: {game.released}</p>
                            <p className='detailed-card-textslider'>Rating: {game.rating}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </Col>
    );
};

export default WrittenSection2;