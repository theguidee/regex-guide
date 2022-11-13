import { Link } from '@remix-run/react';

import type { NavLink } from './links';
import { navLinks } from './links';

import * as S from './styles';

const SideMenu = () => {
  const renderLinks = (links: NavLink[] = navLinks) => {
    return (
      <S.ListWrapper>
        {links.map(link => (
          <S.ListItem key={link.label}>
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
