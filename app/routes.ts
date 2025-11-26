import { type RouteConfig, route, layout } from '@react-router/dev/routes';

export default [
  layout('layouts/main.tsx', [
    route('/', 'pages/home/Home.tsx'),

    // route('/auth/sign-up', 'pages/auth/sign-up.tsx'),
    // route('/auth/forgot-password', 'pages/auth/forgot-password.tsx'),
  ]),
] satisfies RouteConfig;
