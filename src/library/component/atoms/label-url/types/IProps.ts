export type Variant = 'default' | 'disabled';

export interface LabelProps {
  text: string;
  htmlFor?: string;
  variant?: Variant;
  className?: string;
}
