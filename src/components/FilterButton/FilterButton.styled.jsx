import styled from '@emotion/styled';
import { BREAKPOINTS } from 'utils/constants';

export const ContainerBtn = styled.div`
  text-align: center;
  @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    margin-bottom: 20px;
  }
`;

export const Btn = styled.button`
  padding: 8px;
  min-width: 180px;
  background: var(--color-primary-text);
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

  @media screen and (max-width: ${BREAKPOINTS.tablet - 1}px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    font-size: 25px;
    min-width: 190px;
  }
`;
