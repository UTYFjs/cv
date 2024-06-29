import styles from './menu.module.scss';
import { useWindowWidth } from '~/hooks/use-window-width';
import { useState } from 'react';
import { Drawer } from '../drawer/drawer';
import cn from 'classnames';
import { MenuList } from './menu-list/menu-list';
import { MENUITEMS } from '~/constants/menu-items';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useWindowWidth();

  const handleOnClose = () => {
    setIsMenuOpen(false);
  };

  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, route: string) => {
    if (!route) e.preventDefault();
  };
  const menulist = (
    <ul className={cn(styles.menu, isMobile && styles.mobile)}>
      {MENUITEMS.map(({ text, route, tooltip }) => {
        return (
          <li key={route + text} className={styles['menu_item']} {...(tooltip && { 'data-tooltip': tooltip })}>
            <NavLink
              className={({ isActive }) => [styles['menu_link'], isActive ? styles.active : ''].join(' ')}
              to={route ? route : '*'}
              onClick={(e) => onClick(e, route)}
            >
              <span className={styles['item_text']}>{text}</span>
              <span className={route ? styles.bg1 : styles['bg1__indevelop']}></span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
  return (
    <nav>
      {isMobile ? (
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
