
interface ObjectWithKey {
    [key: string]: number | undefined;
}
/**
 * 数组对象求和
 * @param {Object} arrObj 数组对象
 * @param {String} key 数组对应的 key 值
 */
export const arrObjSum = (arrObj: ObjectWithKey[], key: string): number => {
    return arrObj.reduce((prev: number, cur: ObjectWithKey) => prev + (cur[key] || 0), 0);
};