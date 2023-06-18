import { describe, expect, test } from 'vitest';
import { formatHMS } from '../src/utils/system-util/DateUtil';

describe('formatHMS', () => {
    test('should return 3610 when the input is 1h0m10s', () => {
        const result = formatHMS(3610);
        expect(result).toBe('1h0m10s');
    });
});
