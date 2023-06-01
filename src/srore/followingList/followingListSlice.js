import { createSlice } from '@reduxjs/toolkit';

export const followingListSlice = createSlice({
  name: 'followingList',
  initialState: { followingList: [] },
  reducers: {
    addFollowing(state, { payload }) {
      state.followingList.push(payload);
    },
    deleteFollowing(state, { payload }) {
      const index = state.followingList.findIndex(id => id === payload);
      if (index !== -1) {
        state.followingList.splice(index, 1);
      }
    },
  },
});

export const { addFollowing, deleteFollowing } = followingListSlice.actions;
export const followingListReduser = followingListSlice.reducer;
