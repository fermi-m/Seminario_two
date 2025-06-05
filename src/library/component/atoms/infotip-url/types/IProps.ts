export type Variant = 'default' | 'error' | 'disabled';
export type Size = 'small' | 'medium' | 'large';

export interface InfoProps {
  message: string;
  variant?: Variant;
  size?: Size;
  className?: string;
}
