const { createSlice } = require('@reduxjs/toolkit');
const { getUsersTunk, updateUserTunk } = require('./operatonsUsers');

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder.addCase(getUsersTunk.fulfilled, (state, { payload }) => {
      state.users = payload;
      console.log(payload);
    });
    builder.addCase(updateUserTunk.fulfilled, (state, { payload }) => {
      console.log(payload);
    });
  },
});

export const usersReducer = usersSlice.reducer;
