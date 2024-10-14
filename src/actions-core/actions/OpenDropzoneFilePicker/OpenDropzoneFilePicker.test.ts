import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import OpenDropzoneFilePicker from './OpenDropzoneFilePicker';

describe('OpenDropzoneFilePicker', () => {
  it('should call the openRef function when run', () => {
    const mockOpenRef = {
      current: vi.fn(),
    };

    const action = new OpenDropzoneFilePicker();
    const result = action.run(mockOpenRef);

    expect(mockOpenRef.current).toHaveBeenCalled();
    expect(result).toBe(mockOpenRef);
  });

  it('should handle null openRef', () => {
    const action = new OpenDropzoneFilePicker();
    const result = action.run(null);

    expect(result).toBeNull();
  });

  it('should handle undefined openRef', () => {
    const action = new OpenDropzoneFilePicker();
    const result = action.run(undefined);

    expect(result).toBeUndefined();
  });

  it('should handle openRef without current property', () => {
    const mockOpenRef: React.RefObject<() => void> = { current: null };

    const action = new OpenDropzoneFilePicker();
    const result = action.run(mockOpenRef);

    expect(result).toBe(mockOpenRef);
  });

  it('should handle openRef without current function', () => {
    const mockOpenRef: React.RefObject<() => void> = { current: null };

    const action = new OpenDropzoneFilePicker();
    const result = action.run(mockOpenRef);

    expect(result).toBe(mockOpenRef);
  });
});
