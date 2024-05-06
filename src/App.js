import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './components/TopNavbar';
import AboutUs from './components/AboutUs';
import LastReleases from './components/LastReleases';
import CarouselHome from './components/CarouselHome';
import WrittenSection from './components/WrittenSection';
import NewReleases from './components/NewReleases';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

       <TopNavbar/>
       <AboutUs/>
       <LastReleases/>
       <CarouselHome/>
       <WrittenSection/>
       <NewReleases/>
       <Footer/>
    

    </div>
  );
}

export default App;
