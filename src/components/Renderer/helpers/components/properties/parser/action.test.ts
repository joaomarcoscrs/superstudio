import { describe, expect, it } from 'vitest';
import { Debug, OpenDropzoneFilePicker } from '@/actions-core';
import ActionParser from './action';

describe('ActionParser', () => {
  describe('parse', () => {
    it('should return a Debug action for "debug" input', () => {
      const result = ActionParser.parse('debug');
      expect(result).toBe(Debug);
    });

    it('should return an OpenDropzoneFilePicker action for "openDropzoneFilePicker" input', () => {
      const result = ActionParser.parse('openDropzoneFilePicker');
      expect(result).toBe(OpenDropzoneFilePicker);
    });

    it('should return undefined for an unknown action', () => {
      const result = ActionParser.parse('unknownAction');
      expect(result).toBeUndefined();
    });

    it('should return undefined for an empty string', () => {
      const result = ActionParser.parse('');
      expect(result).toBeUndefined();
    });

    it('should handle case sensitivity', () => {
      const result = ActionParser.parse('DEBUG');
      expect(result).toBeUndefined();
    });
  });
});
