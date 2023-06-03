import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserTunk } from 'srore/users/operatonsUsers';
import {
  Btn,
  Container,
  DecorativeLine,
  Elips,
  Img,
  ImgBackdrop,
  Svg,
  Text,
} from './UserCard.styled';
import logo from 'images/logo.svg';
import backdropImages from 'images/backgroundImage.webp';
import { formatNumber } from 'utils/formatNumber';
import { selectErrorUpdate } from 'srore/selectors';

export const UserCard = ({ user }) => {
  const error = useSelector(selectErrorUpdate);
  const dispatch = useDispatch();
  const [buttonId, setButtonId] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setButtonId(null);
  }, [user.followers]);

  useEffect(() => {
    if (!errorMessage) {
      setErrorMessage(error);
    }
  }, [error, errorMessage]);

  const handleClick = userUpdate => {
    const { id, followers, following } = userUpdate;
    setButtonId(id);
    const updateData = { id, followers };
    following ? (updateData.followers -= 1) : (updateData.followers += 1);
    dispatch(updateUserTunk(updateData));
  };

  return (
    <Container>
      <Svg src={logo} alt="logo" width="76" height="22" />
      <ImgBackdrop
        className="img"
        src={backdropImages}
        width="308"
        height="168"
      />
      <DecorativeLine>
        <Elips>
          <Img
            className="img"
            src={user.avatar}
            width="62"
            height="62"
            alt="User Avatar"
          />
        </Elips>
      </DecorativeLine>
      {errorMessage && buttonId ? (
        <>
          <Text>Error </Text>
          <Text className="margin_bottom">{errorMessage}</Text>
        </>
      ) : (
        <>
          <Text>{formatNumber(user.tweets)} tweets</Text>
          <Text className="margin_bottom">
            {formatNumber(user.followers)} followers
          </Text>
          <Btn
            className={user.following ? 'active' : ''}
            onClick={() => {
              handleClick(user);
            }}
            disabled={buttonId === user.id}
          >
            {user.following ? 'Following' : 'Follow'}
          </Btn>
        </>
      )}
    </Container>
  );
};
