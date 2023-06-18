import { lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

/**
 * Quick import tool function
 * 懒加载
 * @param moduleName
 */
const lazyLoad = (moduleName: string) => {
    const Module = lazy(() => import(`pages/${moduleName}`));
    return <Module />;
};

//路由鉴权
// const Appraisal = ({ children }: any) => {
//     const token = localStorage.getItem("token");
//     return token ? children : <Navigate to="/login" />;
// };

/**
 * Create a router table
 */
const router: RouteObject[] = [
    {
        path: '/login',
        element: lazyLoad('login')
    },
    {
        path: '/newsViews',
        element: lazyLoad('news')
    }
];

const Router = () => {
    return useRoutes(router);
};

export default Router;
