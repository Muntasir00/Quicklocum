import { type RouteConfig, route, layout } from '@react-router/dev/routes';

export default [
  layout('layouts/main.tsx', [route('/', 'pages/home/Home.tsx')]),
] satisfies RouteConfig;
