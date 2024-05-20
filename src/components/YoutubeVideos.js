import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);

  const searchYouTube = () => {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDecj_BtE7sdyw84_on2nhdtADju9P57ko&q=news%20gaming&type=video&part=snippet&maxResults=15`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log('YouTube Search:', data); 
        setVideos(data.items);
      })
      .catch(error => console.error('Error searching YouTube:', error));
  };

  useEffect(() => {
    searchYouTube();
  }, []);

  return (
    <Row className='mt-2'>
      <h2 className='review-card-text'>Random Gaming Videos</h2>
      <Col>
        {videos.map((video, index) => (
          <Card key={index} style={{ marginBottom: '20px' }}>
            <Card.Body>
              <iframe 
                width="100%" 
                height="315" 
                src={`https://www.youtube.com/embed/${video.id.videoId}`} 
                title={video.snippet.title}
                frameBorder="0" 
                allowFullScreen
              />
              <Card.Title>{video.snippet.title}</Card.Title>
              <Card.Text>{video.snippet.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Col>
      </Row>
  );
}

export default YouTubeVideos;