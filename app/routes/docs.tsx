import { redirect } from '@remix-run/node';

import type { LoaderFunction } from '@remix-run/node';

import { DocsTemplate } from '~/templates';

export const loader: LoaderFunction = async ({ request }) => {
  const isExact = request.url.match(/\/docs$/)!!;

  if (isExact) return redirect('/docs/introducao');

  return {};
};

const Docs = () => {
  return <DocsTemplate />;
};

export default Docs;
