import { configureStore } from '@reduxjs/toolkit';
import usersReducer, { actions as userActions, fetchUserById } from './usersSlice.js';
import modalReducer, { actions as modalActions } from './modalSlice.js';

export const actions = {
  ...userActions,
  ...modalActions,
  fetchUserById,
};

export default configureStore({
  reducer: {
    users: usersReducer,
    modal: modalReducer,
  },
});
