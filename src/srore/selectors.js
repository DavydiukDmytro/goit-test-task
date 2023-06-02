import { createSelector } from '@reduxjs/toolkit';
import { CARDS_PER_PAGES, TYPE_FILTER } from 'utils/constants';

export const selectFolloweringList = state => state.users.followingList;

export const selectUser = state => state.users.users;

export const selectPage = state => state.users.page;

export const selectIsLoading = state => state.users.isLoading;

export const selectFilter = state => state.users.filter;

const selectorSetFollowStatus = createSelector(
  [selectUser, selectFolloweringList],
  (users, followingList) => {
    return users.map(user => ({
      ...user,
      following: followingList.includes(user.id),
    }));
  }
);

const selectFilterUsers = createSelector(
  [selectorSetFollowStatus, selectFilter],
  (users, filter) => {
    if (filter === TYPE_FILTER.follow) {
      return users.filter(user => user.following === false);
    } else if (filter === TYPE_FILTER.followings) {
      return users.filter(user => user.following === true);
    }
    return users;
  }
);

export const isButtonLoadMore = createSelector(
  [selectFilterUsers, selectPage],
  (users, page) => {
    return users.length <= CARDS_PER_PAGES * page ? false : true;
  }
);

export const selectUserPagination = createSelector(
  [selectFilterUsers, selectPage],
  (users, page) => {
    const counterCards = CARDS_PER_PAGES * page;
    if (users.length > counterCards) {
      return users.slice(0, counterCards);
    } else {
      return users;
    }
  }
);
