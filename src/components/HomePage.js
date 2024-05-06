import TopNavbar from './TopNavbar';
import AboutUs from './AboutUs';
import LastReleases from './LastReleases';
import CarouselHome from './CarouselHome';
import WrittenSection from './WrittenSection';
import NewReleases from './NewReleases';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import FormRicerca from './FormRicerca';


function HomePage() {
    return (
<Container fluid>
<TopNavbar/>
<AboutUs/>
<FormRicerca/>
<LastReleases/>
<CarouselHome/>
<WrittenSection/>
<NewReleases/>
<Footer/>
</Container>
    )
}

export default HomePage;