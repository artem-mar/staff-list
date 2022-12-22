/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    {
      id: '497f6eca-6276-4993-bfeb-53qweca',
      avatarUrl: 'https://api.lorem.space/image/face?w=120&h=120',
      firstName: 'John',
      lastName: 'Doe',
      userTag: 'jd',
      department: 'android',
      position: 'developer',
      birthday: '1973-01-24',
      phone: '+79001234567',
    },
    {
      id: '497f6eca-6276-4993-bfeb-53gasfaf08',
      avatarUrl: 'https://api.lorem.space/image/face?w=120&h=120',
      firstName: 'Mike',
      lastName: 'Smith',
      userTag: 'ms',
      department: 'ios',
      position: 'IOS developer',
      birthday: '1992-04-14',
      phone: '+79001234512',
    },
    {
      id: '497f6eca-6276-4993-bfeb-53cbbbb6fhd',
      avatarUrl: 'https://api.lorem.space/image/face?w=120&h=120',
      firstName: 'Jany',
      lastName: 'Brown',
      userTag: 'jb',
      department: 'design',
      position: 'developer',
      birthday: '2001-09-01',
      phone: '+79001234513',
    },
  ],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
});

export const { actions } = usersSlice;

export default usersSlice.reducer;
