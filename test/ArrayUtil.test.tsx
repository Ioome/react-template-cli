import { describe, expect, test } from 'vitest';
import { arrAndSetUtil } from '../src/utils/system-util/ArrayUtil';

describe('arrAndSet', () => {
    test('should concatenate two arrays and remove duplicate elements', () => {
        const arrOne = [1, 2, 3];
        const arrTwo = [3, 4, 5];
        const result = arrAndSetUtil(arrOne, arrTwo);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
});
