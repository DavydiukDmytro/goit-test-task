export const getFulfilled = (state, { payload }) => {
  state.users = payload;
  state.page = 1;
  state.isLoading = false;
  state.error = null;
};

export const getRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

export const getPending = state => {
  state.isLoading = true;
  state.error = null;
};
