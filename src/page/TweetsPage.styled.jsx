import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { BREAKPOINTS } from 'utils/constants';

export const Title = styled.h1`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 50px;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-primary-text);

  @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
    font-size: 60px;
  }
  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    font-size: 80px;
    margin-bottom: 30px;
  }
`;

export const Error = styled.p`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-primary-text);

  @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
    font-size: 25px;
  }
  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

export const ErrorTitle = styled.p`
  font-weight: 600;
  font-size: 30px;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-primary-text);
  margin-bottom: 10px;

  @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
    font-size: 35px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    font-size: 40px;
    margin-bottom: 30px;
  }
`;

export const Btn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  margin-top: 20px;
  padding: 8px;
  min-width: 180px;
  background-color: var(--color-primary-text);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;

  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
  color: var(--color-primary);

  &:hover,
  &:focus {
    background-color: var(--color-secondary-bg);
    color: var(--color-primary-text);
  }

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    padding: 10px;
    font-size: 25px;
  }
`;

export const BackLink = styled(Link)`
  display: block;
  padding: 8px;
  max-width: 180px;
  margin: 20px auto;

  background-color: var(--color-primary-text);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;

  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
  color: var(--color-primary);
  text-align: center;

  &:hover,
  &:focus {
    background-color: var(--color-secondary-bg);
    color: var(--color-primary-text);
  }
`;
