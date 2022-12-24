import React from 'react';
import { useTranslation } from 'react-i18next';
import magnifierImg from '../assets/magnifying-glass.svg';

const UsersNotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex justify-content-center pt-5">
      <div className="text-center mt-5">
        <img src={magnifierImg} alt="magnifying-glass" />
        <p className="mt-3 fw-semibold fs-5">{t('notFound')}</p>
        <small className="text-muted fs-5">{t('adjustRequest')}</small>
      </div>
    </div>
  );
};

export default UsersNotFound;
