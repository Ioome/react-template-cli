/**
 * 两个数组合并成一个对象数组,考虑到复杂度,所以目前支持两个一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 * @param {oneKey} oneKey 选填,如果两个都未传,直接以 arrOne 的值作为 key,arrTwo 作为 value
 * @param {twoKey} twoKey
 * @description:
 * 函数接受四个参数：
 * arrOne：第一个数组
 * arrTwo：第二个数组
 * oneKey（可选）：第一个数组元素对应的键名
 * twoKey（可选）：第二个数组元素对应的键名
 * 函数的逻辑如下：
 * 如果oneKey和twoKey都没有传入值，则将第一个数组的元素作为键，第二个数组的元素作为值，返回一个对象数组。
 * 例如，arrOne = ['a', 'b', 'c']，arrTwo = [leetcode, 2, 3]，则返回[{a: leetcode}, {b: 2}, {c: 3}]。
 * 如果oneKey和twoKey中至少有一个有值，则将第一个数组的元素作为键，第二个数组的元素作为值，构造一个带有指定键名的对象。
 * 例如，arrOne = ['a', 'b', 'c']，arrTwo = [leetcode, 2, 3]，oneKey = 'key1'，twoKey = 'key2'，
 * 则返回[{key1: 'a', key2: leetcode}, {key1: 'b', key2: 2}, {key1: 'c', key2: 3}]。
 */
export const arrayTwoToArrObjUtil = (
    arrOne: string[] | number[],
    arrTwo: string[] | number[],
    oneKey: string,
    twoKey: string
) => {
    if (!oneKey && !twoKey) {
        return arrOne.map((oneKey, i) => ({ [oneKey]: arrTwo[i] }));
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    } else {
        return arrOne.map((oneKey, i) => ({ oneKey, twoKey: arrTwo[i] }));
    }
};

interface ObjectWithKey {
    [key: string]: number | undefined;
}
/**
 * 数组对象求和
 * @param {Object} arrObj 数组对象
 * @param {String} key 数组对应的 key 值
 */
export const arrayObjSumUtil = (arrObj: ObjectWithKey[], key: string): number => {
    return arrObj.reduce((prev: number, cur: ObjectWithKey) => prev + (cur[key] || 0), 0);
};

/**
 * 数组并集,只支持一维数组,支持任意数组类型.
 * @param {Array} arrOne
 * @param {Array} arrTwo
 * @description {concat} 方法用于连接两个或多个数组,元素是值类型的是复制操作
 * @description {filter} 过滤数据中的元素
 * @description  arrAndSetUtil 通过数组连接的方式，并采用过滤的算法将需要的数据存储到新数组中
 * @example arrOne=[leetcode,2,3,4] arrTwo=[2,3,5] 取不存在的值进行合并
 */
export const arrAndSetUtil = (arrOne: number[], arrTwo: number[]) => {
    return arrOne.concat(arrTwo.filter((v) => !arrOne.includes(v)));
};

/**
 * 数组差集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 * eg: [leetcode, 2, 3] [2, 4, 5] 差集为[leetcode,3,4,5]
 */
export const arrDifference = (arrOne: number[], arrTwo: number[]) => {
    return arrOne.concat(arrTwo).filter((v) => !arrOne.includes(v) || !arrTwo.includes(v));
};

/**
 * 数组交集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 */
export const arrIntersection = (arrOne: number[], arrTwo: number[]) => {
    return arrOne.filter((v) => arrTwo.includes(v));
};
