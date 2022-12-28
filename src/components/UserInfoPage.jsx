import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserInfo from './UserInfo.jsx';
import CriticalError from './CriticalError.jsx';
import { fetchUserById } from '../slices/usersSlice.js';

const UserInfoPage = () => {
  const dispatch = useDispatch();
  const url = new URL(window.location);
  const id = url.searchParams.get('id');

  const fetching = useSelector(({ users }) => users.fetching);
  const user = useSelector(
    ({ users }) => users.users.find((u) => u.id === id),
  );

  useEffect(() => {
    const fetch = async () => {
      dispatch(fetchUserById(id));
    };
    fetch();
  }, []);

  return (
    <>
      {user && <UserInfo />}
      {fetching === 'rejected' && <CriticalError />}
    </>
  );
};

export default UserInfoPage;
