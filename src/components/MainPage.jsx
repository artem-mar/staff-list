import React from 'react';
import UsersList from './UsersList.jsx';
import TopBar from './TopBar.jsx';
import ModalWindow from './Modal.jsx';

const MainPage = () => (
  <div className="d-flex flex-column">
    <TopBar />
    <UsersList />
    <ModalWindow />
  </div>
);

export default MainPage;
