export type Variant = 'default' | 'focus' | 'error' | 'disabled';
export type Size = 'small' | 'medium' | 'large';
export type BorderRadius = 'none' | 'small' | 'full';

export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
  showIcon?: boolean;
  variant?: Variant;
  size?: Size;
  borderRadius?: BorderRadius;
  className?: string;
}
