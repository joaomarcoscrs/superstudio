import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { fireEvent, screen } from '../../../test-utils';
import { render } from '../../../test-utils/render';
import { BaseAction } from '../../actions-core';
import Button from './Button';

describe('Button', () => {
  it('renders with label', () => {
    render(<Button label="Test Button" />);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('uses default Debug action when no action is provided', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    render(<Button label="Debug Button" />);
    fireEvent.click(screen.getByText('Debug Button'));
    expect(consoleSpy).toHaveBeenCalledWith('Action being run');
    consoleSpy.mockRestore();
  });

  it('executes provided action on click', () => {
    const mockAction = {
      run: vi.fn(),
    } as BaseAction;
    render(<Button label="Action Button" action={mockAction} />);
    fireEvent.click(screen.getByText('Action Button'));
    expect(mockAction.run).toHaveBeenCalled();
  });

  it('passes actionArgs to the action execution', () => {
    const mockAction = {
      run: vi.fn(),
    } as BaseAction;
    const actionArgs = ['arg1', 'arg2'];
    render(<Button label="Args Button" action={mockAction} actionArgs={actionArgs} />);
    fireEvent.click(screen.getByText('Args Button'));
    expect(mockAction.run).toHaveBeenCalledWith(...actionArgs);
  });
});
