import { describe, expect, test } from 'vitest';
import { isString } from '../src/utils/system-util/TypeUtil';

describe('isString', () => {
    test('should return true when the input is a string', () => {
        const result = isString('hello');
        expect(result).toBe(true);
    });
    test('should return false when the input is not a string', () => {
        const result = isString(123);
        expect(result).toBe(false);
    });
});
