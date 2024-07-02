import React, { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import cn from 'classnames';
import styles from './drawer.module.scss';
import { ArrowBackSvg, CloseXSvg } from '../custom-icons/CustomIcons';

type IDirection = 'left' | 'right' | 'top' | 'bottom';

type DrawerProps = {
  isOpen: boolean;
  direction: IDirection;
  isBack?: boolean;
  onBack?: () => void;
  onClose?: () => void;
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
      // WebkitTransform: 'translate(-100%, 0)',
      // OTransform: 'translate(-100%, 0)',
      // MozTransform: 'translate(-100%, 0)',
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
      // WebkitTransform: 'translate(0, -100%)',
      // OTransform: 'translate(0, -100%)',
      // MozTransform: 'translate(0, -100%)',
      width: '100%',
      height: size,
    },
  };
  return directionStyle[dir];
};

export const Drawer = ({
  isOpen,

  direction,
  isBack,
  onBack,
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

  const handleClose = () => {
    onClose();
    onBack && onBack();
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
        <div className={styles['drawer-controls']}>
          {isBack ? (
            <ArrowBackSvg className={styles.back} height={'32px'} width={'32px'} onClick={onBack} />
          ) : (
            <span></span>
          )}
          {isOpen && <CloseXSvg className={styles.close} height={'32px'} width={'32px'} onClick={handleClose} />}
        </div>

        {children}
      </div>
      {enableOverlay && (
        <div
          className={cn(styles['drawer_overlay'], overlayClassName && styles[overlayClassName])}
          onClick={handleClose}
          style={overlayStyles}
        />
      )}
    </div>
  );
};
