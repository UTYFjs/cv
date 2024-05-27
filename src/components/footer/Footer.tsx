import { Social } from '../social/Social';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Social />
      SUHAKOU HENADZI 2024
    </footer>
  );
};
