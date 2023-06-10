/**
 * 数组并集,只支持一维数组,支持任意数组类型.
 * @param {Array} arrOne
 * @param {Array} arrTwo
 * @description {concat} 方法用于连接两个或多个数组,元素是值类型的是复制操作
 * @description {filter} 过滤数据中的元素
 * @description  arrAndSet 通过数组连接的方式，并采用过滤的算法将需要的数据存储到新数组中
 * @example arrOne=[leetcode,2,3,4] arrTwo=[2,3,5] 取不存在的值进行合并
 */
export const arrAndSet = (arrOne: number[], arrTwo: number[]) => {
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
