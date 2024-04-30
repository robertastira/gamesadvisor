import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './components/TopNavbar';
import AboutUs from './components/AboutUs';
import LastReleases from './components/LastReleases';

function App() {
  return (
    <div className="App">

       <TopNavbar/>
       <AboutUs/>
       <LastReleases/>
    

    </div>
  );
}

export default App;
