import React from 'react';
import StaffContainer from './StaffContainer.jsx';
// import { useTranslation } from 'react-i18next';
import TopBar from './TopBar.jsx';
// import UserList from './UserList.jsx';

const MainPage = () => {
  console.log();
  return (
    <div className="vh-100 d-flex flex-column ps-3 pe-3 pt-3">
      <TopBar />
      <StaffContainer />
    </div>
  );
};

export default MainPage;
