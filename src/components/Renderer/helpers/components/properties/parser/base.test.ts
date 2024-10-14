import { describe, expect, it } from 'vitest';
import BaseParser from './base';

describe('BaseParser', () => {
  describe('parse', () => {
    it('should return the input value unchanged', () => {
      const testCases = [
        'string value',
        123,
        true,
        false,
        null,
        undefined,
        { key: 'value' },
        [1, 2, 3],
      ];

      testCases.forEach((testCase) => {
        expect(BaseParser.parse(testCase)).toBe(testCase);
      });
    });

    it('should handle complex objects', () => {
      const complexObject = {
        string: 'test',
        number: 42,
        boolean: true,
        nested: {
          array: [1, 2, 3],
          object: { key: 'value' },
        },
      };

      expect(BaseParser.parse(complexObject)).toEqual(complexObject);
    });

    it('should handle functions', () => {
      const testFunction = () => 'test';
      expect(BaseParser.parse(testFunction)).toBe(testFunction);
    });
  });
});
