import { ReactNode } from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  text?: string;
  type?: string;
  children?: ReactNode;
};

export const Button = ({ type = 'primary', children }: ButtonProps) => {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
};
