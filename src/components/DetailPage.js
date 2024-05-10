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
    return (
<Container fluid>
<TopNavbar/>
<Container>
<Row>
<Col>
<iframe width="660" height="415" src="https://www.youtube.com/embed/-USgpvI2WvM?si=mfYZq9Q4bpvTdfum" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<div className="purple-paragraph">
      <h2 className='review-card-text1'>Game Details</h2>
      <ul>
        <li className='detailed-card-text3'><strong>Genre:</strong> MOBA</li>
        <li className='detailed-card-text3'><strong>Developing:</strong> Indie</li>
        <li className='detailed-card-text3'><strong>Multiplayer/Single Player:</strong> Multiplayer, Single Player</li>
        <li className='detailed-card-text3'><strong>Platform:</strong> PC, Console</li>
      </ul>
    </div>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>Last Reviews</th>
          <th>Date</th>
        </tr>
      </thead>
      </Table></Col>
<Col className='details-bg'>
<h1 className='login-title'>League of Legends</h1>
<Button variant='outline-light' className='button-text2 d-inline-block'>A D D T O F A V O U R I T E S <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg></Button>
<h2 className='minicard-text1 mt-2'>October 27, 2009</h2>
<p className='minicard-text1'>Description</p>
<p className='details-text text-align-right'>League of Legends (solitamente abbreviato in LoL) è un videogioco online del genere MOBA sviluppato e pubblicato da Riot Games per Microsoft Windows e macOS.

In League of Legends ogni giocatore, detto Evocatore, controlla un Campione, ovvero un personaggio che possiede delle abilità speciali. Attualmente, nel gioco sono disponibili 167 Campioni con abilità, caratteristiche e aspetti unici. Come in ogni gioco del genere MOBA, lo scopo principale è percorrere il campo di gioco e distruggere la struttura obiettivo nella base della squadra avversaria.

League of Legends vanta una delle scene competitive più ambite e seguite al mondo, nelle finali del campionato del mondo 2019/2020 a Shanghai, Riot Games registra 44 milioni di spettatori unici connessi simultaneamente.</p>
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

            <Form.Group controlId="formPassword"  className='review-card-text1 mt-2'>
              <Form.Control type="password" placeholder="Your Review" />
            </Form.Group>

            <Button variant="dark" className='login-button mt-3' type="submit">
              S E N D  
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <StarRating/>
</Col>
</Row>
</Container>
<Footer/>
</Container>
    )
}

export default DetailsPage;