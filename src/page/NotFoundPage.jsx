import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  return <h1>NotFoundPage</h1>;
};

export default NotFoundPage;
