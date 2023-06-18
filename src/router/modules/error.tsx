import React from 'react';
import { RouteObject } from '@/interface/Router';
import lazyLoad from '@/router/utils/lazyLoad.tsx';

// 错误页面模块
const errorRouter: Array<RouteObject> = [
    {
        path: '/403',

        element: lazyLoad(React.lazy(() => import('@/components/Error/502.tsx'))),
        meta: {
            requiresAuth: true,
            title: '403页面',
            key: '403'
        }
    },
    {
        path: '/404',
        element: lazyLoad(React.lazy(() => import('@/components/Error/404.tsx'))),
        meta: {
            requiresAuth: false,
            title: '404页面',
            key: '404'
        }
    },
    {
        path: '/500',
        element: lazyLoad(React.lazy(() => import('@/components/Error/500.tsx'))),
        meta: {
            requiresAuth: false,
            title: '500页面',
            key: '500'
        }
    }
];

export default errorRouter;
