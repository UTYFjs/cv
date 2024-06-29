import { Link } from 'react-router-dom';
import { DateDisplay } from '../date-display/DateDisplay';
import { Menu } from '../menu/Menu';
import styles from './header.module.scss';
import { ROUTES } from '~/constants/routes-constants';
import { useWindowWidth } from '~/hooks/use-window-width';

export const Header = () => {
  const { isDesktop } = useWindowWidth();
  return (
    <header className={styles.header}>
      <div className={styles.versions}>
        <p>V0.4</p>
        <Link className={styles.link} to={ROUTES.PREVIOUS_VERSIONS}>
          Previous versions
        </Link>
      </div>
      <Menu />
      {isDesktop && <DateDisplay className={styles.date} />}
    </header>
  );
};
