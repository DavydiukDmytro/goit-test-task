import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { BREAKPOINTS } from 'utils/constants';

export const Header = styled.header`
  background-color: var(--color-secondary-bg);
  padding: 15px 0;
  text-align: center;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  font-weight: 600;
  color: var(--color-sub-primary);

  text-transform: uppercase;
  font-size: 25px;

  &:hover,
  &:focus {
    color: var(--color-primary-text);
  }

  &:first-of-type {
    margin-right: 20px;
  }

  &.active {
    color: var(--color-primary-text);
    text-decoration: underline;
  }

  @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
    font-size: 35px;
    &:first-of-type {
      margin-right: 40px;
    }
  }
  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    font-size: 50px;
    &:first-of-type {
      margin-right: 60px;
    }
  }
`;
