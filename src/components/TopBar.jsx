import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import searchImg from '../assets/search.svg';
import filterImg from '../assets/filter.svg';
import { actions as filterActions } from '../slices/filterSlice.js';
import useDebounce from '../hooks/useDebounce.jsx';

const TopBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(
    useSelector(({ filter }) => filter.searchString),
  );
  const debouncedValue = useDebounce(inputValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    dispatch(filterActions.setSearchString(debouncedValue));
  }, [debouncedValue]);

  return (
    <div>
      <span className="h3 ms-2">{t('search')}</span>
      <InputGroup className="mt-3">
        <InputGroup.Text className="bg-light rounded-start">
          <img src={searchImg} alt="search" />
        </InputGroup.Text>
        <Form.Control
          placeholder={t('searchPlaceholder')}
          className="bg-light border-none"
          onChange={handleChange}
          value={inputValue}
        />
        <Button variant="light" className="rounded-end">
          <img src={filterImg} alt="filter" />
        </Button>
      </InputGroup>
    </div>
  );
};

export default TopBar;
