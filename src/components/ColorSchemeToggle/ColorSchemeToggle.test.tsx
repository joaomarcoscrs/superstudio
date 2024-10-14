import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useMantineColorScheme } from '@mantine/core';
import { fireEvent, screen } from '../../../test-utils';
import { render } from '../../../test-utils/render';
import { ColorSchemeToggle } from './ColorSchemeToggle';

vi.mock('@mantine/core', async () => {
  const actual = await vi.importActual('@mantine/core');
  return {
    ...actual,
    useMantineColorScheme: vi.fn(),
    Button: ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
      <button type="button" onClick={onClick}>
        {children}
      </button>
    ),
    Group: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  };
});

describe('ColorSchemeToggle', () => {
  beforeEach(() => {
    vi.mocked(useMantineColorScheme).mockReturnValue({
      colorScheme: 'light',
      setColorScheme: vi.fn(),
      toggleColorScheme: vi.fn(),
      clearColorScheme: vi.fn(),
    });
  });

  it('renders three buttons for light, dark, and auto modes', () => {
    render(<ColorSchemeToggle />);
    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
    expect(screen.getByText('Auto')).toBeInTheDocument();
  });

  it('calls setColorScheme with "light" when Light button is clicked', () => {
    const setColorSchemeMock = vi.fn();
    vi.mocked(useMantineColorScheme).mockReturnValue({
      colorScheme: 'dark',
      setColorScheme: setColorSchemeMock,
      toggleColorScheme: vi.fn(),
      clearColorScheme: vi.fn(),
    });

    render(<ColorSchemeToggle />);
    fireEvent.click(screen.getByText('Light'));
    expect(setColorSchemeMock).toHaveBeenCalledWith('light');
  });

  it('calls setColorScheme with "dark" when Dark button is clicked', () => {
    const setColorSchemeMock = vi.fn();
    vi.mocked(useMantineColorScheme).mockReturnValue({
      colorScheme: 'light',
      setColorScheme: setColorSchemeMock,
      toggleColorScheme: vi.fn(),
      clearColorScheme: vi.fn(),
    });

    render(<ColorSchemeToggle />);
    fireEvent.click(screen.getByText('Dark'));
    expect(setColorSchemeMock).toHaveBeenCalledWith('dark');
  });

  it('calls setColorScheme with "auto" when Auto button is clicked', () => {
    const setColorSchemeMock = vi.fn();
    vi.mocked(useMantineColorScheme).mockReturnValue({
      colorScheme: 'light',
      setColorScheme: setColorSchemeMock,
      toggleColorScheme: vi.fn(),
      clearColorScheme: vi.fn(),
    });

    render(<ColorSchemeToggle />);
    fireEvent.click(screen.getByText('Auto'));
    expect(setColorSchemeMock).toHaveBeenCalledWith('auto');
  });
});
