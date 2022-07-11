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

export const NavLinks = styled.nav`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    border-width: ${theme.border.width};
    border-radius: ${theme.border.radius};
    border-color: ${theme.colors.border};
    border-style: solid;
  `}
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
