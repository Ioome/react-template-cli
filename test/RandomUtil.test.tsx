import { randomNum } from '../src/utils/system-util/RandomUtil';
import { describe, expect, test } from 'vitest';

describe('generateRandom', () => {
    test('generateRandom1-10', () => {
        const result = randomNum(1, 10);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(10);
    });
    test('generateRandom10-1', () => {
        const result = randomNum(10, 1);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(10);
    });
});
