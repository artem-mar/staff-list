/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes.js';

export const fetchUserById = createAsyncThunk(
  'users/fetchUserById',
  async (id) => {
    const { data } = await axios.get(routes.usersByDepartmentApiPath());
    return data.items.find((user) => user.id === id);
  },
  {
    condition: (id, { getState }) => {
      const { users } = getState();
      if (users.users.find((user) => user.id === id)) {
        return false;
      }
      return true;
    },
  },
);

const initialState = {
  users: [],
  fetching: 'idle', // pending | fulfilled | rejected
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.fulfilled, (state, { payload }) => {
        state.users.push(payload);
        state.fetching = 'fulfilled';
      })
      .addCase(fetchUserById.pending, (state) => {
        state.fetching = 'pending';
      })
      .addCase(fetchUserById.rejected, (state) => {
        state.fetching = 'rejected';
      });
  },
});

export const { actions } = usersSlice;

export default usersSlice.reducer;
