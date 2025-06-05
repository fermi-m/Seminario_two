import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { InfoTip } from './infotip';

describe('Info Component', () => {
  it('renders icon with tooltip message', () => {
    render(<InfoTip message="Tooltip message" />);
    const icon = screen.getByLabelText('info icon');
    expect(icon).toBeInTheDocument();

   
    fireEvent.mouseOver(icon);
    expect(screen.getByText('Tooltip message')).toBeVisible();

    fireEvent.mouseOut(icon);
  });

  it('does not show tooltip when disabled', () => {
    render(<InfoTip message="Tooltip message" variant="disabled" />);
    const icon = screen.getByLabelText('info icon');
    expect(icon).toBeInTheDocument();

    fireEvent.mouseOver(icon);
    expect(screen.queryByText('Tooltip message')).not.toBeInTheDocument();
  });

  it('applies correct variant and size classes', () => {
    const { container, rerender } = render(<InfoTip message="Info" variant="default" size="small" />);
    const icon = container.querySelector('svg');
    expect(icon).toHaveClass('variant-default');
    expect(icon).toHaveClass('size-small');

    rerender(<InfoTip message="Info" variant="error" size="large" />);
    expect(icon).toHaveClass('variant-error');
    expect(icon).toHaveClass('size-large');
  });
});
