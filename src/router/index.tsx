import { Navigate, useRoutes } from 'react-router-dom';
import Login from '@/views/login';
import { RouteObject } from '@/interface/Router';

// const metaRouters = import.meta.glob('./modules/*.tsx');

const routerArray: RouteObject[] = [];

// Object.keys(metaRouters).forEach((item) => {
//     Object.keys(metaRouters[item]).forEach((key: any) => {
//         routerArray.push(...metaRouters[item][key]);
//     });
// });

const rootRouter: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to="/login" />
    },
    {
        path: '/login',
        element: <Login />,
        meta: {
            requiresAuth: false,
            title: '登录页',
            key: 'login'
        }
    },
    ...routerArray,
    {
        path: '*',
        element: <Navigate to="/404" />
    }
];

const Router = () => {
    return useRoutes(rootRouter as never);
};

export default Router;
