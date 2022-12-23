import React from 'react';
import StaffContainer from './StaffContainer.jsx';
import TopBar from './TopBar.jsx';
import ModalWindow from './Modal.jsx';

const MainPage = () => {
  console.log();
  return (
    <div className="vh-100 d-flex flex-column ps-3 pe-3 pt-3">
      <TopBar />
      <StaffContainer />
      <ModalWindow />
    </div>
  );
};

export default MainPage;
