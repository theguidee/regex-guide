import { Outlet } from '@remix-run/react';

import { SideMenu, ContentTable } from '~/components';
import * as S from './styles';

type NavLink = {
  label: string;
  position: number;
  link: string;
};

type DocsTemplateType = {
  navLinks: NavLink[];
};

const DocsTemplate = ({ navLinks }: DocsTemplateType) => {
  return (
    <S.Container>
      <S.Wrapper>
        <SideMenu navLinks={navLinks} />

        <S.Content className="content">
          <Outlet />
        </S.Content>

        <ContentTable />
      </S.Wrapper>
    </S.Container>
  );
};

export { DocsTemplate };
