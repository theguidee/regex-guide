import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Regex Guide',
  viewport: 'width=device-width,initial-scale=1',
});

const Root = () => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default Root;
