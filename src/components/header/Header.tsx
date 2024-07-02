import { Link } from 'react-router-dom';
import { DateDisplay } from '../date-display/DateDisplay';
import { Menu } from '../menu/Menu';
import styles from './header.module.scss';
import { ROUTES } from '~/constants/routes-constants';
import { useWindowWidth } from '~/hooks/use-window-width';
import { versions_data } from '~/constants/version-data';

export const Header = () => {
  const { width } = useWindowWidth();
  return (
    <header className={styles.header}>
      <div className={styles.versions}>
        <p>{'V' + versions_data[versions_data.length - 1].version}</p>
        <Link className={styles.link} to={ROUTES.PREVIOUS_VERSIONS}>
          Previous versions
        </Link>
      </div>
      <Menu />
      {width > 1000 && <DateDisplay className={styles.date} />}
    </header>
  );
};
