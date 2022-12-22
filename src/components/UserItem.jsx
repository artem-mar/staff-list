import React from 'react';
import { Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const UserItem = ({ user }) => {
  const {
    firstName, lastName, birthday, department, avatarUrl,
  } = user;

  const { t } = useTranslation();
  const birthdayDate = new Date(birthday)
    .toLocaleString('ru', { day: 'numeric', month: 'short' });

  return (
    <div className="d-flex flex-row">
      <Image src={avatarUrl} width="70px" height="70px" alt="user avatar" roundedCircle />
      <div className="container-fluid d-flex align-items-center justify-content-between pe-0">
        <div>
          <div className="fw-semibold">
            {`${firstName} ${lastName}`}
            {' '}
            <small className="text-muted">{user.userTag}</small>
          </div>
          <small className="text-muted">{t(`departments.${department}`)}</small>
        </div>
        <div>
          <span className="text-muted">{birthdayDate}</span>
          {/* если сортируем по дате */}
        </div>
      </div>
    </div>
  );
};

export default UserItem;
