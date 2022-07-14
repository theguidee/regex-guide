import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.medium};
    background: #161b22;
    padding: ${theme.spacings.medium};
    margin-block: ${theme.spacings.xlarge};
    border-width: ${theme.border.width};
    border-radius: ${theme.border.radius};
    border-color: ${theme.colors.primary};
    border-style: solid;
    font-size: ${theme.font.sizes.small};

    p {
      margin: 0;
    }
  `}
`;

export const Bar = styled.div`
  ${({ theme }) => css`
    width: 2px;
    flex-shrink: 0;
    background: ${theme.colors.primary};
  `}
`;

export const Content = styled.article``;
