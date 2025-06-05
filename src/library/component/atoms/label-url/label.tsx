import React from 'react';
import { Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import type { LabelProps, Variant } from './types/IProps';
import styles from './label.module.scss';
import clsx from 'clsx';

const variantClassMap: Record<Variant, string> = {
  default: styles['variant-default'],
  disabled: styles['variant-disabled'],
};

export const LabelInput: React.FC<LabelProps> = ({
  text,
  htmlFor,
  variant = 'default',
  className = '',
}) => {
  return (
    <label
      //htmlFor={htmlFor}
      className={clsx(styles['label-container'], variantClassMap[variant], className)}
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
};
