import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailPage';
import LastReleasePage from './components/LastReleasePage';
import LastReviewedPage from './components/LastReviewedPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/lastreleases" element={<LastReleasePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/lastreviewed" element={<LastReviewedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;