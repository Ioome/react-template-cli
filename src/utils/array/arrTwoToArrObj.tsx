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
 * 例如，arrOne = ['a', 'b', 'c']，arrTwo = [1, 2, 3]，则返回[{a: 1}, {b: 2}, {c: 3}]。
 * 如果oneKey和twoKey中至少有一个有值，则将第一个数组的元素作为键，第二个数组的元素作为值，构造一个带有指定键名的对象。
 * 例如，arrOne = ['a', 'b', 'c']，arrTwo = [1, 2, 3]，oneKey = 'key1'，twoKey = 'key2'，
 * 则返回[{key1: 'a', key2: 1}, {key1: 'b', key2: 2}, {key1: 'c', key2: 3}]。
 */
export const arrTwoToArrObj = (arrOne: (string[] | number[]), arrTwo: (string[] | number[]), oneKey: (string), twoKey: string) => {
    if (!oneKey && !twoKey) {
        return arrOne.map((oneKey, i) => ({[oneKey]: arrTwo[i]}))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    } else {
        return arrOne.map((oneKey, i) => ({oneKey, twoKey: arrTwo[i]}))
    }
}