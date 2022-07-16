import { Link } from '@remix-run/react';

import * as S from './styles';

type NavLink = {
  id: string;
  label: string;
  link: string;
  children: NavLink[];
};

type SideMenuProps = {
  navLinks: NavLink[];
};

const SideMenu = ({ navLinks }: SideMenuProps) => {
  const renderLinks = (links: NavLink[] = navLinks) => {
    return (
      <S.ListWrapper>
        {links.map(link => (
          <S.ListItem key={link.id}>
            <Link to={link.link}>{link.label}</Link>

            {link.children && renderLinks(link.children)}
          </S.ListItem>
        ))}
      </S.ListWrapper>
    );
  };

  return (
    <S.Container>
      <nav>{renderLinks()}</nav>
    </S.Container>
  );
};

export { SideMenu };
