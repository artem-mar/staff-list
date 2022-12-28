import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PageNotFound from './components/PageNotFound.jsx';
import MainPage from './components/MainPage.jsx';
import UserInfoPage from './components/UserInfoPage.jsx';
import routes from './routes.js';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path={routes.userInfoPath()} element={<UserInfoPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
