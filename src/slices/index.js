import { configureStore } from '@reduxjs/toolkit';
import usersReducer, { actions as userActions } from './usersSlice.js';
import filterReducer, { actions as filterActions } from './filterSlice.js';

export const actions = {
  ...userActions,
  ...filterActions,
};

export default configureStore({
  reducer: {
    users: usersReducer,
    filter: filterReducer,
  },
});
