import UserList from '@/components/User/Lists';
import { useRoutes } from 'react-router-dom';
import router from '@/router';
function App() {
    const elements = useRoutes(router);
    return (
        <>
            <UserList />
            {elements}
        </>
    );
}

export default App;
