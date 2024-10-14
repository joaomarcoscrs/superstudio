import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import OpenDropzoneFilePicker from './OpenDropzoneFilePicker';

describe('OpenDropzoneFilePicker', () => {
  it('should call the openRef function when run', () => {
    const mockOpenRef = {
      current: vi.fn(),
    };

    const result = OpenDropzoneFilePicker.run(mockOpenRef);

    expect(mockOpenRef.current).toHaveBeenCalled();
    expect(result).toBe(mockOpenRef);
  });

  it('should handle null openRef', () => {
    const result = OpenDropzoneFilePicker.run(null);

    expect(result).toBeNull();
  });

  it('should handle undefined openRef', () => {
    const result = OpenDropzoneFilePicker.run(undefined);

    expect(result).toBeUndefined();
  });

  it('should handle openRef without current property', () => {
    const mockOpenRef: React.RefObject<() => void> = { current: null };

    const result = OpenDropzoneFilePicker.run(mockOpenRef);

    expect(result).toBe(mockOpenRef);
  });

  it('should handle openRef without current function', () => {
    const mockOpenRef: React.RefObject<() => void> = { current: null };

    const result = OpenDropzoneFilePicker.run(mockOpenRef);

    expect(result).toBe(mockOpenRef);
  });
});
