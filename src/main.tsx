import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/styles/style.css';
import Loading from '@/components/Loading/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
    <Suspense fallback={<Loading />}>
        <App />
    </Suspense>
    // </React.StrictMode>
);
