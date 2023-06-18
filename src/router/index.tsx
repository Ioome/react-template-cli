import { lazy } from 'react';

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
const router = [
    {
        path: '/login',
        element: lazyLoad('login')
    },
    {
        path: '/newsViews',
        element: lazyLoad('news')
    }
];

export default router;
