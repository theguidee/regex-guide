import * as S from './styles';

type CustomBlockProps = {
  children: React.ReactNode;
};

const CustomBlock = ({ children }: CustomBlockProps) => {
  return (
    <S.Container>
      <S.Bar />
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export { CustomBlock };
