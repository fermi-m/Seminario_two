import React from 'react';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import Tooltip from '@mui/material/Tooltip';
import type { InfoProps, Variant, Size } from './types/IProps';
import styles from './infotip.module.scss';
// IMPORTANTE: Si clsx no está en package.json, reemplazar su uso
// import clsx from 'clsx';

const variantClassMap: Record<Variant, string> = {
  default: styles['variant-default'],
  error: styles['variant-error'],
  disabled: styles['variant-disabled'],
};

const sizeClassMap: Record<Size, string> = {
  small: styles['size-small'],
  medium: styles['size-medium'],
  large: styles['size-large'],
};

// Función para combinar clases sin clsx
function combineClasses(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export function InfoTip({
  message,
  variant = 'default',
  size = 'medium',
  className = '',
}: InfoProps) {
  const iconClasses = combineClasses(
    styles['info-icon'],
    variantClassMap[variant],
    sizeClassMap[size],
    className,
  );

  return (
    <Tooltip title={variant === 'disabled' ? '' : message} arrow placement="bottom-start">
      <span>
        <InfoOutlineIcon className={iconClasses} aria-label="info icon" />
      </span>
    </Tooltip>
  );
}
