import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title } from './HomePage.styled';
import { DecorationSpan } from './NotFoundPage.styled';

const NotFoundPage = () => {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count !== 0) {
        setCount(count - 1);
      } else {
        navigate('/', { replace: true });
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [count, navigate]);

  return (
    <Container>
      <Title>
        You went to a non-existent page, after{' '}
        <DecorationSpan>{count}</DecorationSpan> seconds you will be redirected
        to the main page of the application
      </Title>
    </Container>
  );
};

export default NotFoundPage;
