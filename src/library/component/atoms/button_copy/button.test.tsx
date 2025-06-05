import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ButtonCopy } from './button';

describe('ButtonCopy Component', () => {
  it('renders with label', () => {
    render(<ButtonCopy label="Copy" />);
    expect(screen.getByRole('button', { name: /copy/i })).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<ButtonCopy onClick={handleClick} label="Copy" />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<ButtonCopy disabled label="Copy" />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('does not show icon when showIcon is false', () => {
    render(<ButtonCopy showIcon={false} label="Copy" />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
