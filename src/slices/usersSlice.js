/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  department: 'all',
  searchString: '',
  sortingRule: 'byFirstName',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    setDepartment: (state, { payload }) => {
      state.department = payload;
    },
    setSearchString: (state, { payload }) => {
      state.searchString = payload;
    },
    setSortingRule: (state, { payload }) => {
      state.sortingRule = payload;
    },
  },
});

export const { actions } = usersSlice;

export default usersSlice.reducer;
