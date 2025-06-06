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
});
