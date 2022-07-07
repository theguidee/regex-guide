import { Link } from '@remix-run/react';

import * as S from './styles';

type NavLink = {
  label: string;
  position: number;
  link: string;
};

type SideMenuProps = {
  navLinks: NavLink[];
};

const SideMenu = ({ navLinks }: SideMenuProps) => {
  return (
    <S.Container>
      {navLinks.map(link => (
        <Link key={link.link} to={link.link}>
          {link.label} <br />
        </Link>
      ))}
    </S.Container>
  );
};

export { SideMenu };
