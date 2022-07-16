import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import matter from 'gray-matter';
import type { LoaderFunction } from '@remix-run/node';

import { fs, path } from '~/utils/node.server';
import { DocsTemplate } from '~/templates';
import { sort } from '~/utils/sort';

type NavLink = {
  id: string;
  label: string;
  position: number;
  link: string;
  parent?: string;
  children: NavLink[];
};

type LoaderData = {
  navLinks: NavLink[];
};

export const loader: LoaderFunction = async ({ request }) => {
  const isExact = request.url.match(/\/docs$/)!!;

  if (isExact) return redirect('/docs/introducao');

  const docsPath = path.resolve(process.cwd(), 'app', 'routes', 'docs');
  const files = await fs.readdir(docsPath);

  const navLinks = (
    await Promise.all<NavLink>(
      files.map(async filename => {
        const filePath = `${docsPath}/${filename}`;
        const file = filename.replace(/\.\w+$/, '');

        const mdContent = await fs.readFile(filePath, {
          encoding: 'utf8',
        });

        const { data } = matter(mdContent);

        return { id: file, ...data.menu, link: `/docs/${file}` };
      })
    )
  )
    .sort(a => (a.parent ? 1 : -1))
    .reduce((arr, navLink) => {
      if (navLink.parent) {
        return arr.map(item => {
          if (navLink.parent === item.id)
            return {
              ...item,
              children: [...(item.children ?? []), navLink],
            };

          return item;
        });
      }

      return [...arr, navLink];
    }, [] as NavLink[])
    .sort(sort<NavLink>('position'))
    .map(navLink => {
      if (navLink.children)
        return {
          ...navLink,
          children: navLink.children.sort(sort<NavLink>('position')),
        };

      return navLink;
    });

  return {
    navLinks,
  };
};

const Docs = () => {
  const data = useLoaderData() as LoaderData;

  return <DocsTemplate {...data} />;
};

export default Docs;
