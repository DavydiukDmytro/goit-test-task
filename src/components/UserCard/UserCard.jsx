import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserTunk } from 'srore/users/operatonsUsers';

export const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [selectedButtonId, setSelectedButtonId] = useState(null);

  useEffect(() => {
    setSelectedButtonId(null);
  }, [user.followers]);

  const handleClick = (id, followers) => {
    setSelectedButtonId(id);
    const updateData = { id, followers };
    dispatch(updateUserTunk(updateData));
  };

  return (
    <li>
      <img src={user.avatar} width="50" height="50" alt="User Avatar" />
      <p>{user.tweets} tweets</p>
      <p>{user.followers} followers</p>
      {user.following ? (
        <button
          onClick={() => handleClick(user.id, user.followers - 1)}
          disabled={selectedButtonId === user.id}
        >
          Following
        </button>
      ) : (
        <button
          onClick={() => handleClick(user.id, user.followers + 1)}
          disabled={selectedButtonId === user.id}
        >
          Follow
        </button>
      )}
    </li>
  );
};
