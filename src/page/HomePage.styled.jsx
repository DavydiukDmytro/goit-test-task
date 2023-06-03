import styled from '@emotion/styled';
import { BREAKPOINTS } from 'utils/constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  width: ${BREAKPOINTS.mobile}px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;

  &.error {
    min-height: 0;
  }

  @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
    min-height: calc(100vh - 72px);
    width: ${BREAKPOINTS.tablet}px;
  }
  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    min-height: calc(100vh - 90px);
    width: ${BREAKPOINTS.desktop}px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 35px;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-primary-text);
  @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
    font-size: 45px;
  }
  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    font-size: 60px;
  }
`;

export const Svg = styled.img`
  margin-top: 10px;
  width: 150px;
  margin-bottom: 10px;
`;
