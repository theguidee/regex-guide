import styled, { css } from 'styled-components';

export const Container = styled.aside`
  ${({ theme }) => css`
    position: sticky;
    top: ${theme.spacings.xlarge};
    width: 100%;
    height: calc(100vh - ${theme.spacings.xlarge} * 2);
    user-select: none;
  `}
`;

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    position: sticky;
    top: ${theme.spacings.xlarge};
    width: 100%;
    height: calc(100vh - ${theme.spacings.xlarge} * 2);
    user-select: none;
  `}
`;

export const ListWrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};

    & & {
      font-size: ${theme.font.sizes.small};
      margin-top: ${theme.spacings.medium};
      padding-left: ${theme.spacings.large};
    }
  `}
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.bold};

    & & {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.weights.normal};
    }
  `}
`;
