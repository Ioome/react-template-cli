import { arrAndSet } from '@utils/array/arrAndSet.tsx';
import test, { describe } from 'node:test';

describe('arrAndSet', () => {
    test('should concatenate two arrays and remove duplicate elements', () => {
        const arrOne = [1, 2, 3];
        const arrTwo = [3, 4, 5];
        const result = arrAndSet(arrOne, arrTwo);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
});
