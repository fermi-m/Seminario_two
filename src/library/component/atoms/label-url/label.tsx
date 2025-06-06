import { Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

import type { LabelProps, Variant } from './types/IProps';
import styles from './label.module.scss';

const variantClassMap: Record<Variant, string> = {
  default: styles['variant-default'],
  disabled: styles['variant-disabled'],
};

// Función simple para concatenar clases
function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export function LabelInput({ text, htmlFor, variant = 'default', className = '' }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(styles['label-container'], variantClassMap[variant], className)}
    >
      <LanguageIcon
        fontSize="small"
        aria-hidden="true"
        color={variant === 'disabled' ? 'disabled' : 'inherit'}
      />
      <Typography
        variant="subtitle2"
        component="span"
        sx={{ userSelect: variant === 'disabled' ? 'none' : 'auto' }}
      >
        {text}
      </Typography>
    </label>
  );
}
