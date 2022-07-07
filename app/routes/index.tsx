import { redirect } from '@remix-run/node';

export const loader = () => redirect('/docs');

const Index = () => null;

export default Index;
