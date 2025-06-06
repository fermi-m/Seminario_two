import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { InputUrl } from './input';

describe('InputUrl Component', () => {
  it('renders input with globe icons, protocol and divider', () => {
    render(<InputUrl value="test" onChange={() => {}} />);
    expect(screen.getByLabelText(/url input/i)).toBeInTheDocument();
    expect(screen.getAllByRole('img', { hidden: true })).toHaveLength(2);
    expect(screen.getByText('https://')).toBeInTheDocument();
  });

  it('calls onChange when input changes', () => {
    const handleChange = vi.fn();
    render(<InputUrl value="" onChange={handleChange} />);
    const input = screen.getByLabelText(/url input/i);
    fireEvent.change(input, { target: { value: 'newurl.com' } });
    expect(handleChange).toHaveBeenCalledWith('newurl.com');
  });

  it('disables input and icons when disabled', () => {
    render(<InputUrl value="test" onChange={() => {}} disabled />);
    const input = screen.getByLabelText(/url input/i);
    expect(input).toBeDisabled();
    const container = input.parentElement?.parentElement;
    expect(container).toHaveClass('variant--disabled');
  });

  it('applies correct variant classes', () => {
    const { rerender } = render(<InputUrl value="test" onChange={() => {}} variant="default" />);
    let container = screen.getByLabelText(/url input/i).parentElement?.parentElement;
    expect(container).toHaveClass('variant--default');

    rerender(<InputUrl value="test" onChange={() => {}} variant="focus" />);
    container = screen.getByLabelText(/url input/i).parentElement?.parentElement;
    expect(container).toHaveClass('variant--focus');

    rerender(<InputUrl value="test" onChange={() => {}} variant="error" />);
    container = screen.getByLabelText(/url input/i).parentElement?.parentElement;
    expect(container).toHaveClass('variant--error');

    rerender(<InputUrl value="test" onChange={() => {}} variant="disabled" />);
    container = screen.getByLabelText(/url input/i).parentElement?.parentElement;
    expect(container).toHaveClass('variant--disabled');
  });
});
