import { describe, expect, test } from 'vitest';
import { binaryToInt } from '../src/utils/system-util/NumberUtil';

describe('binaryToInt', () => {
    test('should return 0 when input is 0', () => {
        expect(binaryToInt('0')).toBe(0);
    });
});
