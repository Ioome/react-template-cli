import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/styles/style.css';
import { HashRouter } from 'react-router-dom';
import Loading from '@/components/Loading/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HashRouter>
            <Suspense fallback={<Loading />}>
                <App />
            </Suspense>
        </HashRouter>
    </React.StrictMode>
);
