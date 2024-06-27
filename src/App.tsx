import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SeasonsPage from './pages/seasonPage';
import HomePage from './pages/homePage';
import Header from './features/header';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import EpisodesPage from './pages/episodePage';

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
