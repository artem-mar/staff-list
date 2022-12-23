import React, { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import { sort, filter } from '../utils.js';
import { actions as usersActions } from '../slices/usersSlice.js';
import magnifierImg from '../assets/magnifying-glass.svg';
import UserItem from './UserItem.jsx';
import routes from '../routes.js';

const UsersList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const {
    department, searchString, users, sortingRule,
  } = useSelector((state) => state.users);
  const filteredUsers = sort[sortingRule](filter(users, searchString));

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(routes.usersByDepartmentApiPath(department));
        dispatch(usersActions.setUsers(data.items));
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  }, [department]);

  const genLink = (id) => `/user-info?id=${id}`;

  return (
    <ListGroup variant="flush" className="d-flex flex-column">
      {filteredUsers.length ? (
        filteredUsers.map((user) => (
          <ListGroup.Item
            key={user.id}
            role="button"
            onClick={() => {
              navigate(genLink(user.id));
            }}
          >
            <UserItem user={user} />
          </ListGroup.Item>
        ))
      ) : (
        <div className="d-flex justify-content-center pt-5">
          <div className="text-center mt-5">
            <img src={magnifierImg} alt="magnifying-glass" />
            <p className="mt-3 fw-semibold fs-5">
              {t('notFound')}
            </p>
            <small className="text-muted fs-5">
              {t('adjustRequest')}
            </small>
          </div>
        </div>
      )}
    </ListGroup>
  );
};

export default UsersList;
