import * as S from './styles';

type HeadingProps = {
  children: string;
};

const Heading = ({ children, ...rest }: HeadingProps) => {
  const formatedString = children
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ /g, '-')
    .toLocaleLowerCase();

  return (
    <S.Container id={formatedString} {...rest}>
      {children}
    </S.Container>
  );
};

export { Heading };
