import React from 'react';
import { Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from './UsersList.jsx';
import { actions } from '../slices/index.js';

const StaffContainer = () => {
  const { t } = useTranslation();

  const currentDepartment = useSelector(({ users }) => users.department);
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-column">
      <Nav
        className="mt-4"
        variant="tabs"
        defaultActiveKey={currentDepartment}
        onSelect={(selectedKey) => {
          dispatch(actions.setDepartment(selectedKey));
        }}
      >
        <Nav.Item>
          <Nav.Link eventKey="all" className="muted">{t('nav.all')}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="design" className="muted">{t('nav.designers')}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="analytics" className="muted">{t('nav.analysts')}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="management" className="muted">{t('nav.managers')}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="ios" className="muted">{t('nav.ios')}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="android" className="muted">{t('nav.android')}</Nav.Link>
        </Nav.Item>
      </Nav>
      <UsersList />
    </div>
  );
};

export default StaffContainer;
