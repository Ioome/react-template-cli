import React from 'react';

export interface Index {
    name?: string;
    path: string;
    children?: Array<Index>;
    element: never;
}

export interface MetaProps {
    keepAlive?: boolean;
    requiresAuth?: boolean;
    title: string;
    key?: string;
}

export interface RouteObject {
    caseSensitive?: boolean;
    children?: RouteObject[];
    element?: React.ReactNode;
    index?: boolean;
    path?: string;
    meta?: MetaProps;
    isLink?: string;
}

export interface MetaRouters {
    [item: string]: {
        [key: string]: Array<unknown>;
    };
}
