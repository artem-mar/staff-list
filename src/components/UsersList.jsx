import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { sort, filter } from '../utils.js';
import { actions as usersActions } from '../slices/usersSlice.js';
import UsersNotFound from './usersNotFound.jsx';
import CriticalError from './CriticalError.jsx';
import UserItem from './UserItem.jsx';
import routes from '../routes.js';

const UsersList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = useState('fetching');

  const {
    department, searchString, users, sortingRule,
  } = useSelector((state) => state.users);
  const filteredUsers = sort[sortingRule](filter(users, searchString));

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(routes.usersByDepartmentApiPath(department));
        dispatch(usersActions.setUsers(data.items));
        setStatus('ok');
      } catch (err) {
        setStatus('error');
        console.log(err);
      }
    };

    fetchUsers();
  }, [department]);

  const genLink = (id) => `/user-info?id=${id}`;

  return (
    <div className="d-flex flex-column pt-2">
      {!!filteredUsers.length && (
        <ListGroup variant="flush" className="d-flex flex-column">
          {filteredUsers.map((user, i, arr) => (
            <div key={user.id}>
              {sortingRule === 'byBirthday'
                && i !== 0
                && new Date(arr[i - 1].birthday).getFullYear()
                  !== new Date(user.birthday).getFullYear() && (
                  <div className="separator text-center text-muted my-1">
                    {new Date(arr[i].birthday).getFullYear()}
                  </div>
              )}
              <ListGroup.Item
                role="button"
                onClick={() => {
                  navigate(genLink(user.id));
                }}
              >
                <UserItem user={user} />
              </ListGroup.Item>
            </div>
          ))}
        </ListGroup>
      )}

      {status === 'ok' && !filteredUsers.length && <UsersNotFound />}
      {status === 'error' && <CriticalError />}
    </div>
  );
};

export default UsersList;
