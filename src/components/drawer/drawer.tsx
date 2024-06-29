import React, { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import cn from 'classnames';
import styles from './drawer.module.scss';
import { CloseXSvg } from '../custom-icons/CustomIcons';

type IDirection = 'left' | 'right' | 'top' | 'bottom';

type DrawerProps = {
  isOpen: boolean;
  direction: IDirection;
  onClose?: VoidFunction;
  children?: React.ReactNode;
  duration?: number;
  overlayStyles?: CSSProperties;
  enableOverlay?: boolean;
  style?: CSSProperties;
  zIndex?: number;
  size?: number | string;
  className?: string;
  overlayClassName?: string;
};

type DirectionStyle = Pick<
  CSSProperties,
  'top' | 'left' | 'right' | 'bottom' | 'width' | 'height' | 'transform' | 'WebkitTransform'
>;

const getDirectionStyle = (dir: IDirection, size?: number | string): DirectionStyle => {
  const directionStyle: Record<IDirection, DirectionStyle> = {
    left: {
      top: 0,
      left: 0,
      transform: 'translate(-100%, 0)',
      //WebkitTransform: 'translate(-100%, 0)',
      width: size,
      height: '100vh',
    },
    right: {
      top: 0,
      right: 0,
      transform: 'translate(100%, 0)',
      //WebkitTransform: 'translate(-100%, 0)',
      width: size,
      height: '100vh',
    },
    bottom: {
      left: 0,
      right: 0,
      bottom: 0,
      transform: 'translate(0, 100%)',
      //WebkitTransform: 'translate(0, 100%)',
      width: '100%',
      height: size,
    },
    top: {
      left: 0,
      right: 0,
      top: 0,
      transform: 'translate(0, -100%)',
      //WebkitTransform: 'translate(0, -100%)',
      width: '100%',
      height: size,
    },
  };
  return directionStyle[dir];
};

export const Drawer = ({
  isOpen,
  direction,
  onClose = () => {},
  children,
  style,
  enableOverlay = true,
  overlayStyles,
  zIndex = 2,
  duration = 500,
  size = 'fit-content',
  className,
  overlayClassName = '',
}: DrawerProps) => {
  const bodyRef = useRef<HTMLBodyElement | null>(null);
  useEffect(() => {
    const updatePageScroll = () => {
      bodyRef.current = window.document.querySelector('body');
      if (bodyRef.current) {
        bodyRef.current.style.overflow = isOpen ? 'hidden' : '';
      }
    };
    updatePageScroll();
  }, [isOpen]);

  const drawerStyles: CSSProperties = {
    zIndex: zIndex + 1,
    transition: `all ${duration}ms`,
    //WebkitTransition: `all ${duration}ms`,
    ...getDirectionStyle(direction, size),
    ...style,
  };

  return (
    <div className={cn(styles.drawer, isOpen && styles.active)}>
      <div
        style={{
          ...drawerStyles,
          transform: isOpen ? 'translate(0, 0)' : drawerStyles.transform,
          //WebkitTransform: isOpen ? 'translate(0, 0)' : drawerStyles.transform,
        }}
        className={cn(styles['drawer_container'], styles[direction], className && styles[className])}
      >
        {isOpen && <CloseXSvg className={styles.close} height={'32px'} width={'32px'} onClick={onClose} />}
        {children}
      </div>
      {enableOverlay && (
        <div
          className={cn(styles['drawer_overlay'], overlayClassName && styles[overlayClassName])}
          onClick={onClose}
          style={overlayStyles}
        />
      )}
    </div>
  );
};
