import { DateDisplay } from '../date-display/DateDisplay';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.versions}>
        <p>V0.1</p>
        {/* <p>previous versions</p> */}
      </div>

      <DateDisplay className={styles.date} />
    </header>
  );
};
