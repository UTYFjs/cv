import { DateDisplay } from '../date-display/DateDisplay';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <DateDisplay className={styles.date} />
    </header>
  );
};
