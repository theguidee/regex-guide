import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: default;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    scroll-behavior: smooth;
    font-size: 10px;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none
  }

  button {
    background: none;
    border: none;
  }

  a,
  button {
    cursor: pointer;
  }

  input,
  textarea {
    cursor: text;
  }

  ${({ theme }) => css`
    body,
    button,
    input,
    textarea {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weights.normal};
      color: ${theme.colors.text};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${theme.font.weights.bold};
    }

    h1 {
      font-size: ${theme.font.sizes.xlarge};
    }

    h2 {
      font-size: ${theme.font.sizes.large};
    }

    body {
      background: ${theme.colors.bg};
      padding: ${theme.spacings.xlarge};
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 1.2rem;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: ${theme.colors.border};
      }
    }

    a {
      color: ${theme.colors.primary};

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;

export { GlobalStyles };
