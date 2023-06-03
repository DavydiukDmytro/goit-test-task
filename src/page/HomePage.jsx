import { Container, Svg, Title } from './HomePage.styled';
import logo from 'images/logoHome.svg';

const HomePage = () => {
  return (
    <Container>
      <Svg src={logo} className="img" />
      <Title>Welcome to the follower finder app</Title>
    </Container>
  );
};

export default HomePage;
