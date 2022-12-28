import React from 'react';
import { useTranslation } from 'react-i18next';
import nloImg from '../assets/nlo.svg';

const CriticalError = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex justify-content-center pt-5">
      <div className="text-center mt-5">
        <img src={nloImg} alt="magnifying-glass" />
        <p className="mt-3 fw-semibold fs-5">{t('error.everythingIsBroken')}</p>
        <p><small className="text-muted fs-5">{t('error.tryToFix')}</small></p>
        <p><a href={window.location.href} className="text-primary fs-5">{t('error.tryAgain')}</a></p>
      </div>
    </div>
  );
};

export default CriticalError;
