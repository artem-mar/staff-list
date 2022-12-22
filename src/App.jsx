import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PageNotFound from './components/PageNotFound.jsx';
import MainPage from './components/MainPage.jsx';
import UserInfo from './components/UserInfo.jsx';
import routes from './routes.js';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path={routes.userInfoPath()} element={<UserInfo />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
