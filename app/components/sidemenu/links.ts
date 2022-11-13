export type NavLink = {
  label: string;
  link: string;
  children?: NavLink[];
};

const navLinks = [
  {
    label: 'Introdução',
    link: '/docs/introducao',
  },
  {
    label: 'Flags',
    link: '/docs/flags',
  },
  {
    label: 'Meta - Caracteres',
    link: '/docs/meta-caracteres',
    children: [
      {
        label: 'Representantes',
        link: '/docs/representantes',
      },
      {
        label: 'Quantificadores',
        link: '/docs/quantificadores',
      },
      {
        label: 'Âncoras',
        link: '/docs/ancoras',
      },
      {
        label: 'Barra letra',
        link: '/docs/barra-letra',
      },
      {
        label: 'Outros',
        link: '/docs/outros',
      },
    ],
  },
];

export { navLinks };
