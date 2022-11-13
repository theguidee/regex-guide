import { Outlet } from '@remix-run/react';

import { SideMenu, ContentTable } from '~/components';
import * as S from './styles';

const DocsTemplate = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <SideMenu />

        <S.Content className="content">
          <Outlet />
        </S.Content>

        <ContentTable />
      </S.Wrapper>
    </S.Container>
  );
};

export { DocsTemplate };
