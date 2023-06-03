import { createSlice } from '@reduxjs/toolkit';
import { TYPE_FILTER } from 'utils/constants';
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
      .addCase(getUsersTunk.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.page = 1;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUsersTunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(getUsersTunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserTunk.fulfilled, (state, { payload }) => {
        const index = state.followingList.indexOf(payload.id);
        index === -1
          ? state.followingList.push(payload.id)
          : state.followingList.splice(index, 1);
        state.users = state.users.map(user =>
          user.id !== payload.id ? user : payload
        );
        state.errorUpdate = null;
      })
      .addCase(updateUserTunk.rejected, (state, { payload }) => {
        state.errorUpdate = payload;
      })
      .addCase(updateUserTunk.pending, (state, { payload }) => {
        state.errorUpdate = null;
      });
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
