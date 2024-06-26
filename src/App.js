import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailPage';
import LastReleasePage from './components/LastReleasePage';
import LastReviewedPage from './components/LastReviewedPage';
import AllGamesPage from './components/AllGamesPage';
import FavoritesPage from './components/FavoritesPage';

function App() {
  return (
    <div className="bg-dark App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/allgames" element={<AllGamesPage/>} />
          <Route path="/lastreleases" element={<LastReleasePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/details/:gameId" element={<DetailsPage />} />
          <Route path="/lastreviewed" element={<LastReviewedPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;