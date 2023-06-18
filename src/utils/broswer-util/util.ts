/**
 * @author: sutton
 * @create: 2020-05-20 10:00
 * @description: 浏览器相关工具类
 * @description: 本地存储
 * @param {string} key
 * @param key
 */
export const localGet = (key: string) => {
    const value = window.localStorage.getItem(key);
    try {
        return JSON.parse(window.localStorage.getItem(key) as string);
    } catch (error) {
        return value;
    }
};

/**
 * @author: sutton
 * @description 设置localStorage
 * @create: 2020-05-20 10:00
 * @description 存储localStorage
 * @param {String} key Storage名称
 * @param {never} value Storage值
 * @return void
 */
export const localSet = (key: string, value: never) => {
    window.localStorage.setItem(key, JSON.stringify(value));
};

/**
 * @author: sutton
 * @create: 2020-05-20 10:00
 * @description 清除localStorage
 * @param {String} key Storage名称
 * @return void
 */
export const localRemove = (key: string) => {
    window.localStorage.removeItem(key);
};

/**
 * @author: sutton
 * @create: 2020-05-20 10:00
 * @description 清除所有localStorage
 * @return void
 */
export const localClear = () => {
    window.localStorage.clear();
};

/**
 * @description 获取需要展开的 subMenu
 * @param {String} path 当前访问地址
 * @returns array
 */
export const getOpenKeys = (path: string) => {
    let newStr = '';
    const newArr = [];
    const arr = path.split('/').map((i) => '/' + i);
    for (let i = 1; i < arr.length - 1; i++) {
        newStr += arr[i];
        newArr.push(newStr);
    }
    return newArr;
};
