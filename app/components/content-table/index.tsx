import { useEffect, useState } from 'react';
import { useLocation } from '@remix-run/react';

import * as S from './styles';

type Headings = {
  label: string;
  anchor: string;
};

const ContentTable = () => {
  const [headings, setHeadings] = useState<Headings[]>([]);
  const location = useLocation();

  useEffect(() => {
    const contentEl = document.querySelector('.content')!;

    const headings = [
      ...contentEl.querySelectorAll('h1, h2, h3'),
    ] as HTMLHeadingElement[];

    const formated = headings.map(el => ({
      label: el.innerText,
      anchor: el.id,
    }));

    setHeadings(formated);
  }, [location.pathname]);

  return (
    <S.Container>
      <S.NavLinks>
        <S.Wrapper>
          {headings.map(item => (
            <li key={item.label}>
              <a href={`#${item.anchor}`}>{item.label}</a>
            </li>
          ))}
        </S.Wrapper>
      </S.NavLinks>
    </S.Container>
  );
};

export { ContentTable };
