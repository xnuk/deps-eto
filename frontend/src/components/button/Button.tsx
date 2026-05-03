import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'transparent';
};

const Button = ({ color = 'primary', className, children, disabled, ...rest }: ButtonProps) => {
  const buttonClass = color === 'primary' ? styles.buttonPrimary : styles.buttonTransparent;

  return (
    <button
      className={clsx(styles.button, disabled && styles.disabled, buttonClass, className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
