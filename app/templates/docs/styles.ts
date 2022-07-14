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
    column-gap: ${theme.spacings.xxlarge};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;

    h1 {
      margin-bottom: ${theme.spacings.xxlarge};
    }

    h2,
    h3 {
      margin-top: ${theme.spacings.xlarge};
      margin-bottom: ${theme.spacings.medium};
    }

    p {
      margin-block: ${theme.spacings.small};
    }

    li {
      list-style-position: inside;
      list-style-type: initial;
    }

    code:not([class]) {
      background: #161b22;
      padding: 2px 5px;
      border-radius: 3px;
    }

    blockquote {
      margin-block: ${theme.spacings.medium};
      font-style: italic;
      text-align: center;
      width: 80%;
      margin-inline: auto;

      &::before,
      &::after {
        content: '"';
      }
    }
  `}
`;
