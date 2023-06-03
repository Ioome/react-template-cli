/**
 * 数组并集,只支持一维数组,支持任意数组类型.
 * @param {Array} arrOne
 * @param {Array} arrTwo
 */
export const arrAndSet = (arrOne: number[], arrTwo: number[]) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}


/**
 * 数组差集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 * eg: [1, 2, 3] [2, 4, 5] 差集为[1,3,4,5]
 */
export const arrDifference = (arrOne:  number[], arrTwo:  number[]) => {
    return arrOne.concat(arrTwo).filter(v => !arrOne.includes(v) || !arrTwo.includes(v))
}

/**
 * 数组交集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 */
export const arrIntersection = (arrOne:  number[], arrTwo:  number[]) => {
    return arrOne.filter(v => arrTwo.includes(v))
}


