import TopNavbar from './TopNavbar';
import AboutUs from './AboutUs';
import LastReleases from './LastReleases';
import CarouselHome from './CarouselHome';
import WrittenSection from './WrittenSection';
import NewReleases from './NewReleases';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import FormRicerca from './FormRicerca';
import CardGames from './CardGames'
import CardGames2 from './CardGames2'


function HomePage() {
    return (
<Container fluid>
<TopNavbar/>
<AboutUs/>
<FormRicerca/>
<CardGames2/>
<CarouselHome/>
<WrittenSection/>
<CardGames/>
<Footer/>
</Container>
    )
}

export default HomePage;