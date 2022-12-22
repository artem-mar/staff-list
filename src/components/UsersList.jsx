import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import UserItem from './UserItem.jsx';
// import routes from '../routes.js';

const UsersList = () => {
  const navigate = useNavigate();

  const users = useSelector((state) => state.users.users);

  const genLink = (id) => (
    `/user-info?id=${id}`
  );

  return (
    <ListGroup variant="flush" className="d-flex flex-column">
      {users.map((user) => (
        <ListGroup.Item
          key={user.id}
          role="button"
          onClick={() => {
            navigate(genLink(user.id));
          }}
        >
          <UserItem user={user} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default UsersList;
