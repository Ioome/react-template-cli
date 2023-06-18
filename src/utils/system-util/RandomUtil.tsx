/**
 * 生成随机数
 * @param min
 * @param max
 */
export function randomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (min - max) + max);
}
