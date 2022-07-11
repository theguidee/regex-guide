import { useEffect, useRef } from 'react';
import primsjs from 'prismjs';

import * as S from './styles';

type CodeProps = {
  children: React.ReactNode;
  language: string;
};

const Code = ({ children, language }: CodeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    primsjs.highlightAllUnder(containerRef.current!);
  }, []);

  return (
    <S.Container ref={containerRef}>
      <pre className={`language-${language}`}>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </S.Container>
  );
};

export { Code };
