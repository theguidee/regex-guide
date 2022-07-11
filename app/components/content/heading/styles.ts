import type { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components';

type ContainerProps = {
  as?: 'h2' | 'h3';
};

const containerModifiers = {
  h2: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,

  h3: () => css`
    font-size: 21px;
  `,
};

export const Container = styled.h1<ContainerProps>`
  ${({ theme, as }) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${as && containerModifiers[as](theme)}
  `}
`;
