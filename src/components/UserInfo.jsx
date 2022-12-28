import React from 'react';
import { Image, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import starImg from '../assets/star.svg';
import phoneImg from '../assets/phone.svg';
import backImg from '../assets/back.svg';
import routes from '../routes.js';

const UserInfo = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get('id');
  const {
    firstName, lastName, birthday, department, avatarUrl, phone, userTag,
  } = useSelector(
    ({ users }) => users.users.find((u) => u.id === id),
  );

  const navigate = useNavigate();
  const { t } = useTranslation();
  const birthdayDate = new Date(birthday);
  const birthdayString = new Date(birthday).toLocaleString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const age = new Date().getFullYear() - birthdayDate.getFullYear();

  return (
    <div className="vh-100 container-fluid">
      <Button
        type="button"
        variant="light"
        className="position-absolute rounded-circle btn-abs"
        onClick={() => {
          navigate(routes.mainPath());
        }}
      >
        <Image style={{ height: '1rem' }} roundedCircle src={backImg} />
      </Button>
      <div className="row justify-content-center bg-light">
        <div className="col d-flex flex-column align-items-center pt-5 pb-3 mt-4">
          <Image style={{ width: '7.4rem' }} roundedCircle src={avatarUrl} />
          <div className="mt-3">
            <span className="fw-bold fs-3">
              {`${firstName} ${lastName}`}
              {' '}
              <span className="fw-normal text-muted fs-5">{userTag}</span>
            </span>
          </div>
          <small className="text-muted">{t(`departments.${department}`)}</small>
        </div>
      </div>
      <div className="row justify-content-between mt-4">
        <div className="col-9 ps-4 fw-medium">
          <div className="mb-5">
            <Image style={{ height: '1.4rem' }} src={starImg} />
            <span className="ms-2 align-middle">{birthdayString}</span>
          </div>
          <div>
            <Image style={{ height: '1.4rem' }} src={phoneImg} />
            <span className="ms-2 align-middle">
              <a type="link" href={`tel:${phone}`}>
                {phone}
              </a>
            </span>
          </div>
        </div>
        <div className="col-3 pe-4 ps-0 text-end">
          <span className="text-muted">{t('year', { count: age })}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
