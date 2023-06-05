export const updateFulfilled = (state, { payload }) => {
  const index = state.followingList.indexOf(payload.id);
  index === -1
    ? state.followingList.push(payload.id)
    : state.followingList.splice(index, 1);
  state.users = state.users.map(user =>
    user.id !== payload.id ? user : payload
  );
  state.errorUpdate = null;
};

export const updateRejected = (state, { payload }) => {
  state.errorUpdate = payload;
};

export const updatePending = (state, { payload }) => {
  state.errorUpdate = null;
};
