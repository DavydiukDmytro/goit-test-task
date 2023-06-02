import { UserCard } from 'components/UserCard';
import { useSelector } from 'react-redux';
import { selectUserPagination } from 'srore/selectors';

export const UserList = () => {
  const users = useSelector(selectUserPagination);

  return (
    <ul>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
};
