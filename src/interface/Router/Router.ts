interface Router {
    name?: string;
    path: string;
    children?: Array<Router>;
    element: never;
}

export default Router;
