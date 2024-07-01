import styles from './menu.module.scss';
import { useWindowWidth } from '~/hooks/use-window-width';
import { useState } from 'react';
import { Drawer } from '../drawer/drawer';
import cn from 'classnames';
import { MenuList } from './menu-list/menu-list';

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindowWidth();

  const handleOnClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      {width < 1000 ? (
        <>
          {' '}
          <div
            onClick={() => {
              setIsMenuOpen((state) => !state);
            }}
          >
            <div id={styles['nav-icon']} className={cn(isMenuOpen && styles.open)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <Drawer size={500} isOpen={isMenuOpen} direction={'top'} onClose={handleOnClose}>
            {isMenuOpen && <MenuList isMobile={true} onClose={handleOnClose} />}
          </Drawer>
        </>
      ) : (
        <MenuList />
      )}
    </nav>
  );
};
