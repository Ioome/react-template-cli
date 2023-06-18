import { Navigate, useRoutes } from 'react-router-dom';
import Login from '@/views/login';
import { MetaRouters, RouteObject } from '@/interface/Router';
import Home from '@/views/home';

const routerArray: RouteObject[] = [];
const metaRouters: MetaRouters = import.meta.glob('./modules/*.tsx', { eager: true });

Object.keys(metaRouters).forEach((item: string) => {
    console.log('metaRouters', metaRouters);
    console.log('item', item);
    Object.keys(metaRouters[item]).forEach((key: string) => {
        console.log('key', key);
        console.log('metaRouters[item][key]', metaRouters[item][key]);
        routerArray.push(...metaRouters[item][key]);
    });
});

const rootRouter: RouteObject[] = [
    {
        path: '/',
        // element: <Navigate to="/login" />
        element: <Navigate to="/home" />
    },
    {
        path: '/home',
        element: <Home />,
        meta: {
            requiresAuth: false,
            title: '首页',
            key: 'home'
        }
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
    console.log(routerArray);
    console.log(rootRouter);
    return useRoutes(rootRouter as never);
};

export default Router;
