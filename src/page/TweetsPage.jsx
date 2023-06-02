import { FilterButton } from 'components/FilterButton/FilterButton';
import { UserList } from 'components/UserList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isButtonLoadMore, selectIsLoading } from 'srore/selectors';
import { getUsersTunk } from 'srore/users/operatonsUsers';
import { incrementPageNumber } from 'srore/users/usersSlice';

const TweetsPage = () => {
  const dispatch = useDispatch();
  const isButton = useSelector(isButtonLoadMore);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getUsersTunk());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(incrementPageNumber());
  };
  return (
    <>
      <Link to={'/'}>Back</Link>
      <h1>TweetsPage</h1>
      <FilterButton />
      {isLoading ? (
        <p>333</p>
      ) : (
        <>
          <UserList />
          {isButton && <button onClick={handleClick}>load more</button>}
        </>
      )}
    </>
  );
};

export default TweetsPage;
