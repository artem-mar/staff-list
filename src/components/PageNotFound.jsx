import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import goose from '../assets/goose.svg';

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center mt-5">
      <img alt={t('pageNotFound.notFound')} className="img-fluid w-25" src={goose} />
      <h1 className="h4 mt-3">
        {t('goAway')}
      </h1>
      <p className="text-muted">
        <Link to="/">{t('toHomePage')}</Link>
      </p>
    </div>
  );
};

export default PageNotFound;
