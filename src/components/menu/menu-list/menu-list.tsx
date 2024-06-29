import { MENUITEMS } from '~/constants/menu-items';
import styles from './menu-list.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type MenuListProps = {
  isMobile?: boolean;
  onClose?: () => void;
};

export const MenuList = ({ isMobile = false, onClose }: MenuListProps) => {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, route: string) => {
    if (!route) {
      e.preventDefault();
    } else {
      onClose && onClose();
    }
  };
  return (
    <ul className={cn(styles.menu, isMobile && styles.mobile)}>
      {MENUITEMS.map(({ text, route, tooltip }) => {
        return (
          <li
            key={route + text}
            className={isMobile ? styles['menu_item__mobile'] : styles['menu_item']}
            {...(tooltip && { 'data-tooltip': tooltip })}
          >
            <NavLink
              className={({ isActive }) => [styles['menu_link'], isActive ? styles.active : ''].join(' ')}
              to={route ? route : '*'}
              onClick={(e) => onClick(e, route)}
            >
              <span className={route ? styles['item_text'] : styles['item_text__disable']}>{text}</span>
              {!isMobile && <span className={route ? styles.bg1 : styles['bg1__indevelop']}></span>}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
