import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  InputGroup, Form, Button, Nav,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import searchImg from '../assets/search.svg';
import filterImg from '../assets/filter.svg';
import { actions } from '../slices/index.js';
import useDebounce from '../hooks/useDebounce.jsx';

const TopBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(useSelector(({ users }) => users.searchString));
  const debouncedValue = useDebounce(inputValue);

  const currentDepartment = useSelector(({ users }) => users.department);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    dispatch(actions.setSearchString(debouncedValue));
  }, [debouncedValue]);

  return (
    <div
      className="position-sticky px-3 pt-3 top-0 top-bar bg-white border-bottom"
    >
      <span className="h3 ms-2">{t('search')}</span>
      <InputGroup className="mt-3">
        <InputGroup.Text className="bg-light rounded-start text-secondary">
          <img src={searchImg} alt="search" />
        </InputGroup.Text>
        <Form.Control
          placeholder={t('searchPlaceholder')}
          className="bg-light border-none"
          onChange={handleChange}
          value={inputValue}
        />
        <Button
          variant="light"
          className="rounded-end"
          onClick={() => dispatch(actions.openModal())}
        >
          <img src={filterImg} alt="filter" />
        </Button>
      </InputGroup>
      <Nav
        className="mt-4 fw-semibold"
        defaultActiveKey={currentDepartment}
        onSelect={(selectedKey) => {
          dispatch(actions.setDepartment(selectedKey));
        }}
      >
        <Nav.Item>
          <Nav.Link eventKey="all" className="navlink text-decoration-none">
            {t('nav.all')}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="design" className="navlink text-decoration-none">
            {t('nav.designers')}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="analytics" className="navlink text-decoration-none">
            {t('nav.analysts')}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="management" className="navlink text-decoration-none">
            {t('nav.managers')}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="ios" className="navlink text-decoration-none">
            {t('nav.ios')}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="android" className="navlink text-decoration-none">
            {t('nav.android')}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default TopBar;
