import { CSSProperties, ReactNode } from 'react';
import styles from './button.module.scss';
import cn from 'classnames';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  style?: CSSProperties;
  typeBtn?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  children?: ReactNode;
  reverseBg?: boolean;
  onClick?: () => void;
};

export const Button = ({
  style,
  size = 'medium',
  typeBtn = 'primary',
  className,
  children,
  reverseBg = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.btn, styles[typeBtn], styles[size], className, reverseBg && styles.reverse)}
      style={style}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
