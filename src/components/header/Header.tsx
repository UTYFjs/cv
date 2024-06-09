import { Link } from 'react-router-dom';
import { DateDisplay } from '../date-display/DateDisplay';
import { Menu } from '../menu/Menu';
import styles from './header.module.scss';
import { ROUTES } from '~/constants/routes-constants';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.versions}>
        <p>V0.2</p>
        <Link className={styles.link} to={ROUTES.PREVIOUS_VERSIONS}>
          Previous versions
        </Link>
      </div>
      <Menu />
      <DateDisplay className={styles.date} />
    </header>
  );
};
