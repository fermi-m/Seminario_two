import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LabelInput } from './label';

describe('LabelInput Component', () => {
  it('renders with text and icon', () => {
    render(<LabelInput text="Website Address" />);
    expect(screen.getByText('Website Address')).toBeInTheDocument();
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument(); // Icon is svg with aria-hidden
  });

  it('applies disabled variant styles', () => {
    const { container } = render(<LabelInput text="Disabled Label" variant="disabled" />);
    const label = container.querySelector('label');
    expect(label).toHaveClass('variant-disabled');
  });

  it('associates label with input via htmlFor', () => {
    render(<LabelInput text="Email" htmlFor="email-input" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });
});
