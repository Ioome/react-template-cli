/**
 * @return {String} 字符串
 *
 * @example formatHMS(3610) // -> 1h0m10s
 * @param s
 */
export function formatHMS(s: number) {
    let str = '';
    if (s > 3600) {
        str = Math.floor(s / 3600) + 'h' + Math.floor((s % 3600) / 60) + 'm' + (s % 60) + 's';
    } else if (s > 60) {
        str = Math.floor(s / 60) + 'm' + (s % 60) + 's';
    } else {
        str = (s % 60) + 's';
    }
    return str;
}
