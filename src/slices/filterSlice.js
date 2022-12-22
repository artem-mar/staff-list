/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  department: 'all',
  searchString: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setDepartment: (state, { payload }) => {
      state.department = payload;
    },
    setSearchString: (state, { payload }) => {
      state.searchString = payload;
    },
  },
});

export const { actions } = filterSlice;

export default filterSlice.reducer;
