import { UserCard } from 'components/UserCard';
import { useSelector } from 'react-redux';
import { selectUserPagination } from 'srore/selectors';
import { CardsList } from './UserList.styled';

export const UserList = () => {
  const users = useSelector(selectUserPagination);

  return (
    <CardsList>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </CardsList>
  );
};
