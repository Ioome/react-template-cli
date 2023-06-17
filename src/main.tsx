import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/styles/style.css';
import { BrowserRouter } from 'react-router-dom';
import Loading from '@/pages/loading';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <App />
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>
);
