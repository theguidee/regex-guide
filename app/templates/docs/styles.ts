import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 28rem minmax(0px, 70rem) 28rem;
    column-gap: ${theme.spacings.medium};
  `}
`;

export const Content = styled.div``;
