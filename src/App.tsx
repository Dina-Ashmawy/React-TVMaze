import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import SeasonsPage from './pages/seasonsPage';
import HomePage from './pages/homePage';
import Header from './components/header';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import EpisodesPage from './pages/episodesPage';

const App: React.FC = () => (
  <Router>
    <Header />
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shows/:showId/seasons" element={<SeasonsPage />} />
        <Route
          path="/shows/:showId/seasons/:seasonNumber/episodes"
          element={<EpisodesPage />}
        />
      </Routes>
    </Provider>
  </Router>
);

export default App;
