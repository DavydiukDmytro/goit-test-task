import styled from '@emotion/styled';
import { BREAKPOINTS } from 'utils/constants';

export const CardsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
