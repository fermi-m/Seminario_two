import { Button as MuiButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import styles from './button.module.scss';
import type { ButtonProps } from './types/IProps';

function classNames(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

export function ButtonCopy({
  onClick,
  disabled = false,
  label = 'Copy',
  showIcon = true,
  variant = 'default',
  size = 'medium',
  borderRadius = 'small',
  className = '',
}: ButtonProps) {
  const variantClass = {
    default: styles['variant-default'],
    focus: styles['variant-focus'],
    error: styles['variant-error'],
    disabled: styles['variant-disabled'],
  }[variant];

  const sizeClass = {
    small: styles['size-small'],
    medium: styles['size-medium'],
    large: styles['size-large'],
  }[size];

  const radiusClass = {
    none: styles['radius-none'],
    small: styles['radius-small'],
    full: styles['radius-full'],
  }[borderRadius];

  return (
    <MuiButton
      variant="contained"
      color="primary"
      disabled={disabled || variant === 'disabled'}
      onClick={onClick}
      startIcon={showIcon ? <ContentCopyIcon fontSize="small" /> : undefined}
      size={size}
      disableElevation
      className={classNames(styles['copy-button'], variantClass, sizeClass, radiusClass, className)}
    >
      {label}
    </MuiButton>
  );
}
