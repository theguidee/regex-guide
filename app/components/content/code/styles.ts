import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};

    .token.cdata,
    .token.comment,
    .token.doctype,
    .token.prolog {
      color: #708090;
    }

    .token.punctuation {
      color: #999;
    }

    .namespace {
      opacity: 0.7;
    }

    .token.boolean,
    .token.constant,
    .token.deleted,
    .token.number,
    .token.property,
    .token.symbol,
    .token.tag {
      color: ${theme.colors.primary};
    }

    .token.attr-name,
    .token.builtin,
    .token.char,
    .token.inserted,
    .token.selector,
    .token.string {
      color: rgb(221, 74, 104);
    }

    .language-css .token.string,
    .style .token.string,
    .token.entity,
    .token.operator,
    .token.url {
      color: #a67f59;
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
      color: #07a;
    }

    .token.class-name,
    .token.function {
      color: #dd4a68;
    }

    .token.important,
    .token.regex,
    .token.variable {
      color: #e90;
    }

    .token.bold,
    .token.important {
      font-weight: 700;
    }

    .token.italic {
      font-style: italic;
    }

    .token.entity {
      cursor: help;
    }

    code,
    pre {
      color: ${theme.colors.text};
    }

    code {
      white-space: pre;
    }

    pre {
      padding: 0.8rem 1.6rem;
      background: #161b22;
      overflow: auto;
      border-radius: 4px;
    }

    .language-bash .token.operator,
    .language-bash .token.function,
    .language-bash .token.builtin {
      color: ${theme.colors.text};
      background: none;
    }

    .language-markdown .token.title,
    .language-md .token.title {
      color: #dd4a68;
    }

    .language-markdown .token.table-header,
    .language-md .token.table-header {
      color: #07a;
    }
  `}
`;
