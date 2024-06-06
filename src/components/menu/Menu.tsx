import { NavLink } from 'react-router-dom';
import styles from './menu.module.scss';
import { MENUITEMS } from '~/constants/menu-items';

export const Menu = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        {MENUITEMS.map(({ text, route, tooltip }) => {
          return (
            <li key={route + text} className={styles['menu_item']} {...(tooltip && { 'data-tooltip': tooltip })}>
              <NavLink className={styles['menu_link']} to={route}>
                <span className={styles['item_text']}>{text}</span>
                <span className={route ? styles.bg1 : styles['bg1__indevelop']}></span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
