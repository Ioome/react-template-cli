import React, { useState, useEffect } from 'react';
import { User } from '@/interface/User/Lists/type.ts';

/**
 * 返回 UserLists
 * @constructor
 */
const UserList: React.FC = () => {
    console.log('sd');
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        setUsers([{ id: 1, name: 'hello', email: '2572213252@qq.com' }]);
    }, []);
    return (
        <>
            <div>
                <h1>User Lists</h1>
                <ul>
                    {users.map((users: User) => (
                        <li>
                            <h3>{users.name}</h3>
                            <p>Email: {users.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
export default UserList;
