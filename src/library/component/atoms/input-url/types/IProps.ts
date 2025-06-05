export type Variant = 'default' | 'focus' | 'error' | 'disabled';
export type Size = 'small' | 'medium' | 'large';
export type BorderRadius = 'none' | 'small' | 'full';

export interface InputUrlProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  variant?: Variant;
  size?: Size;
  borderRadius?: BorderRadius;
  className?: string;
}
