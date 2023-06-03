import { FilterButton } from 'components/FilterButton/FilterButton';
import { Loader } from 'components/Loader';
import { UserList } from 'components/UserList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  isButtonLoadMore,
  selectError,
  selectIsLoading,
} from 'srore/selectors';
import { getUsersTunk } from 'srore/users/operatonsUsers';
import { incrementPageNumber } from 'srore/users/usersSlice';
import { Container } from './HomePage.styled';
import { BackLink, Btn, Error, ErrorTitle, Title } from './TweetsPage.styled';

const TweetsPage = () => {
  const dispatch = useDispatch();
  const isButton = useSelector(isButtonLoadMore);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getUsersTunk());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(incrementPageNumber());
  };
  return (
    <>
      <BackLink to={'/'}>Back</BackLink>

      <Title>Tweets</Title>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Container className="error">
          <ErrorTitle>Oops, something went wrong, try again later</ErrorTitle>
          <Error>{error}</Error>
        </Container>
      ) : (
        <>
          <FilterButton />
          <UserList />
          {isButton && <Btn onClick={handleClick}>load more</Btn>}
        </>
      )}
    </>
  );
};

export default TweetsPage;
