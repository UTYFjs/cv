import { DateDisplay } from '../date-display/DateDisplay';
//import { Menu } from '../menu/Menu';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.versions}>
        <p>V0.1</p>
        {/* <p>previous versions</p> */}
      </div>
      {/* <Menu /> */}
      <DateDisplay className={styles.date} />
    </header>
  );
};
