import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import matter from 'gray-matter';
import type { LoaderFunction } from '@remix-run/node';

import { fs, path } from '~/utils/node.server';
import { DocsTemplate } from '~/templates';

type NavLink = {
  label: string;
  position: number;
  link: string;
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

        return { ...data.menu, link: `/docs/${file}` };
      })
    )
  ).sort((a, b) => {
    if (a.position > b.position) return 1;
    if (a.position < b.position) return -1;

    return 0;
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
