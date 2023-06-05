import { createSlice } from '@reduxjs/toolkit';
import { TYPE_FILTER } from 'utils/constants';
import { getFulfilled, getPending, getRejected } from './handleGetUsers';
import {
  updateFulfilled,
  updatePending,
  updateRejected,
} from './handleUpdateUsers';
import { getUsersTunk, updateUserTunk } from './operatonsUsers';

const initialState = {
  users: [],
  followingList: [],
  isLoading: false,
  error: null,
  errorUpdate: null,
  page: 1,
  filter: TYPE_FILTER.all,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getUsersTunk.fulfilled, getFulfilled)
      .addCase(getUsersTunk.rejected, getRejected)
      .addCase(getUsersTunk.pending, getPending)
      .addCase(updateUserTunk.fulfilled, updateFulfilled)
      .addCase(updateUserTunk.rejected, updateRejected)
      .addCase(updateUserTunk.pending, updatePending);
  },
  reducers: {
    incrementPageNumber(state) {
      state.page = state.page + 1;
    },
    changeTheFilter(state, { payload }) {
      state.filter = TYPE_FILTER[payload];
      state.page = 1;
    },
  },
});

export const { incrementPageNumber, changeTheFilter } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
