import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import Divider from '@mui/material/Divider';
import type { InputUrlProps, Variant, Size, BorderRadius } from './types/IProps';
import styles from './input.module.scss';
import clsx from 'clsx';

const variantClassMap: Record<Variant, string> = {
  default: styles['variant--default'],
  focus: styles['variant--focus'],
  error: styles['variant--error'],
  disabled: styles['variant--disabled'],
};

const sizeClassMap: Record<Size, string> = {
  small: styles['size--small'],
  medium: styles['size--medium'],
  large: styles['size--large'],
};

const radiusClassMap: Record<BorderRadius, string> = {
  none: styles['radius--none'],
  small: styles['radius--small'],
  full: styles['radius--full'],
};

export const InputUrl: React.FC<InputUrlProps> = ({
  value,
  onChange,
  placeholder = 'example.com',
  disabled = false,
  variant = 'default',
  size = 'medium',
  borderRadius = 'small',
  className = '',
}) => {
  const containerClass = clsx(
    styles['input-container'],
    variantClassMap[variant],
    sizeClassMap[size],
    radiusClassMap[borderRadius],
    className,
  );

  return (
    <div className={containerClass} aria-disabled={disabled || variant === 'disabled'}>
      <div className={styles['input-wrapper']}>
        <LanguageIcon
          className={styles['planet-icon']}
          aria-hidden="true"
          color={variant === 'disabled' ? 'disabled' : 'inherit'}
        />
        <span className={styles['protocol']}>https://</span>

        <Divider
          orientation="vertical"
          flexItem
          className={styles['divider']}
          aria-hidden="true"
        />

        <LanguageIcon
          className={styles['planet-icon']}
          aria-hidden="true"
          color={variant === 'disabled' ? 'disabled' : 'inherit'}
        />

        <input
          type="text"
          className={styles['input']}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled || variant === 'disabled'}
          aria-disabled={disabled || variant === 'disabled'}
          aria-label="URL input"
        />
      </div>
    </div>
  );
};
