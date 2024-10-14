import { describe, expect, it, vi } from 'vitest';
import ActionParser from './action';
import BaseParser from './base';
import PropertyParser from './index';

vi.mock('./action');
vi.mock('./base');

describe('PropertyParser', () => {
  describe('parse', () => {
    it('should use ActionParser for "action" property', () => {
      const mockActionParse = vi.fn().mockReturnValue('parsed action');
      vi.mocked(ActionParser.parse).mockImplementation(mockActionParse);

      const properties = { action: 'someAction' };
      const result = PropertyParser.parse(properties);

      expect(mockActionParse).toHaveBeenCalledWith('someAction');
      expect(result).toEqual({ action: 'parsed action' });
    });

    it('should use BaseParser for unknown properties', () => {
      const mockBaseParse = vi.fn().mockReturnValue('parsed value');
      vi.mocked(BaseParser.parse).mockImplementation(mockBaseParse);

      const properties = { unknownProp: 'someValue' };
      const result = PropertyParser.parse(properties);

      expect(mockBaseParse).toHaveBeenCalledWith('someValue');
      expect(result).toEqual({ unknownProp: 'parsed value' });
    });

    it('should handle multiple properties', () => {
      const mockActionParse = vi.fn().mockReturnValue('parsed action');
      const mockBaseParse = vi.fn().mockReturnValue('parsed value');
      vi.mocked(ActionParser.parse).mockImplementation(mockActionParse);
      vi.mocked(BaseParser.parse).mockImplementation(mockBaseParse);

      const properties = {
        action: 'someAction',
        unknownProp: 'someValue',
        anotherProp: 123,
      };
      const result = PropertyParser.parse(properties);

      expect(mockActionParse).toHaveBeenCalledWith('someAction');
      expect(mockBaseParse).toHaveBeenCalledWith('someValue');
      expect(mockBaseParse).toHaveBeenCalledWith(123);
      expect(result).toEqual({
        action: 'parsed action',
        unknownProp: 'parsed value',
        anotherProp: 'parsed value',
      });
    });

    it('should return an empty object for empty input', () => {
      const result = PropertyParser.parse({});
      expect(result).toEqual({});
    });
  });
});
