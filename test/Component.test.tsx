import { expect, test } from 'vitest';
import UserList from '../src/components/User/Lists';
import { render, screen } from '@testing-library/react';

/**
 * mount 是 Vitest 提供的一个函数，用于将组件进行挂载并返回一个包装器（wrapper）对象，以便进行后续的测试操作。
 */

test('UserList renders correctly', () => {
    render(<UserList />);

    // 断言 UserList 的标题是否正确渲染
    expect(screen.getByText('User Lists'));

    // 断言 UserList 的用户列表项是否正确渲染
    const users = screen.getAllByRole('listitem');
    expect(users.length).toBe(1);

    // 断言用户名称和邮箱是否正确渲染
    expect(screen.getByText('hello'));
    expect(screen.getByText('Email: hello'));
    screen.debug();
});
