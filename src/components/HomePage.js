import TopNavbar from './TopNavbar';
import AboutUs from './AboutUs';
import CarouselHome from './CarouselHome';
import WrittenSection from './WrittenSection';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardGames from './CardGames'
import CardGames2 from './CardGames2'
import Col from 'react-bootstrap/Col';
import WrittenSection2 from './WrittenSection2';


function HomePage() {
    return (
<Container fluid>
<TopNavbar/>
<AboutUs/>
<Row>
<Col><CardGames2/>
<CarouselHome/>
</Col>
</Row>
<Row>
<Col><WrittenSection/>
<WrittenSection2/>
</Col>
<Col><CardGames/></Col>
<Footer/>
</Row>
</Container>
    )
}

export default HomePage;